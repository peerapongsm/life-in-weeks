"use client";

import { useMemo, useState } from "react";
import { getWeeksInfo, totalWeeksForLifeExpectancy } from "@/lib/weeks";
import { getBandForAge, getLifeStageBands, milestoneToGridPosition, type Milestone } from "@/lib/milestones";
import { formatThaiDate } from "@/lib/fmt";

const COLS = 52;

interface WeekGridProps {
  birthDate: Date;
  today: Date;
  lifeExpectancyYears: number;
  includeUniversity: boolean;
  milestones: Milestone[];
}

export interface HoverInfo {
  row: number;
  col: number;
  ageYear: number;
  weekOfYear: number;
  dateLabel: string;
  milestoneLabels: string[];
}

export default function WeekGrid({ birthDate, today, lifeExpectancyYears, includeUniversity, milestones }: WeekGridProps) {
  const [hover, setHover] = useState<HoverInfo | null>(null);

  const { currentWeekIndex } = getWeeksInfo(birthDate, today);
  const totalWeeks = totalWeeksForLifeExpectancy(lifeExpectancyYears);
  const totalRows = Math.ceil(totalWeeks / COLS);
  const bands = getLifeStageBands(includeUniversity);

  const milestonesByWeek = useMemo(() => {
    const map = new Map<number, string[]>();
    for (const m of milestones) {
      const { weekIndex } = milestoneToGridPosition(birthDate, new Date(m.date + "T00:00:00Z"));
      const list = map.get(weekIndex) ?? [];
      list.push(m.label);
      map.set(weekIndex, list);
    }
    return map;
  }, [milestones, birthDate]);

  function cellInfo(row: number, col: number): HoverInfo {
    const weekIndex = row * COLS + col;
    const cellDate = new Date(birthDate.getTime() + weekIndex * 7 * 24 * 60 * 60 * 1000);
    return {
      row,
      col,
      ageYear: row,
      weekOfYear: col + 1,
      dateLabel: formatThaiDate(cellDate),
      milestoneLabels: milestonesByWeek.get(weekIndex) ?? [],
    };
  }

  let prevBandId: string | undefined;

  return (
    <div className="week-grid-wrap">
      <div className="week-grid" onMouseLeave={() => setHover(null)}>
        {Array.from({ length: totalRows }, (_, row) => {
          const band = getBandForAge(row, includeUniversity);
          const showBandLabel = band && band.id !== prevBandId;
          prevBandId = band?.id;

          return (
            <div key={row} className="week-grid-row-group">
              {showBandLabel && <div className="band-label">{band!.label}</div>}
              <div className="week-grid-row" data-band={band?.id ?? "none"}>
                {Array.from({ length: COLS }, (_, col) => {
                  const weekIndex = row * COLS + col;
                  if (weekIndex >= totalWeeks) return <span key={col} className="week-cell week-cell-empty" />;
                  const status = weekIndex < currentWeekIndex ? "past" : weekIndex === currentWeekIndex ? "current" : "future";
                  const hasMilestone = milestonesByWeek.has(weekIndex);
                  return (
                    <button
                      key={col}
                      type="button"
                      className={`week-cell week-cell-${status}${hasMilestone ? " week-cell-milestone" : ""}`}
                      onMouseEnter={() => setHover(cellInfo(row, col))}
                      onFocus={() => setHover(cellInfo(row, col))}
                      onClick={() => setHover(cellInfo(row, col))}
                      aria-label={`อายุ ${row} ปี สัปดาห์ที่ ${col + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="week-grid-info" aria-live="polite">
        {hover ? (
          <>
            <strong>อายุ {hover.ageYear} ปี</strong> · สัปดาห์ที่ {hover.weekOfYear} ของปีนั้น · สัปดาห์เริ่ม {hover.dateLabel}
            {hover.milestoneLabels.length > 0 && <> · {hover.milestoneLabels.join(", ")}</>}
          </>
        ) : (
          "ชี้หรือแตะช่องในตาราง เพื่อดูอายุและช่วงเวลาของสัปดาห์นั้น"
        )}
      </div>
    </div>
  );
}
