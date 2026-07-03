"use client";

import { useMemo, useState } from "react";
import { THAI_MONTHS, ceToBe } from "@/lib/fmt";

export type Calendar = "ce" | "be";

interface DateFieldProps {
  label: string;
  /** ISO date string YYYY-MM-DD, or null if unset. */
  value: string | null;
  onChange: (isoDate: string) => void;
  /** Earliest selectable year (ค.ศ.). */
  minCeYear?: number;
  /** Latest selectable year (ค.ศ.). */
  maxCeYear?: number;
}

function daysInMonth(ceYear: number, month1: number): number {
  return new Date(Date.UTC(ceYear, month1, 0)).getUTCDate();
}

export default function DateField({ label, value, onChange, minCeYear, maxCeYear }: DateFieldProps) {
  const [calendar, setCalendar] = useState<Calendar>("be");

  const now = new Date();
  const minYear = minCeYear ?? now.getFullYear() - 110;
  const maxYear = maxCeYear ?? now.getFullYear();

  const parsed = value ? new Date(value + "T00:00:00Z") : null;
  const day = parsed ? parsed.getUTCDate() : "";
  const month = parsed ? parsed.getUTCMonth() + 1 : "";
  const year = parsed ? parsed.getUTCFullYear() : "";

  const yearOptions = useMemo(() => {
    const years: number[] = [];
    for (let y = maxYear; y >= minYear; y--) years.push(y);
    return years;
  }, [minYear, maxYear]);

  function commit(nextDay: number, nextMonth: number, nextCeYear: number) {
    const clampedDay = Math.min(nextDay, daysInMonth(nextCeYear, nextMonth));
    const iso = `${nextCeYear.toString().padStart(4, "0")}-${nextMonth.toString().padStart(2, "0")}-${clampedDay
      .toString()
      .padStart(2, "0")}`;
    onChange(iso);
  }

  const currentDay = typeof day === "number" ? day : 1;
  const currentMonth = typeof month === "number" ? month : 1;
  const currentYear = typeof year === "number" ? year : maxYear;

  return (
    <div className="date-field">
      <div className="date-field-head">
        <span className="date-field-label">{label}</span>
        <div className="calendar-toggle" role="group" aria-label="เลือกปีปฏิทิน">
          <button
            type="button"
            className={calendar === "be" ? "toggle-btn toggle-btn-active" : "toggle-btn"}
            onClick={() => setCalendar("be")}
            aria-pressed={calendar === "be"}
          >
            พ.ศ.
          </button>
          <button
            type="button"
            className={calendar === "ce" ? "toggle-btn toggle-btn-active" : "toggle-btn"}
            onClick={() => setCalendar("ce")}
            aria-pressed={calendar === "ce"}
          >
            ค.ศ.
          </button>
        </div>
      </div>
      <div className="date-field-selects">
        <select
          aria-label="วันที่"
          value={day}
          onChange={(e) => commit(Number(e.target.value), currentMonth, currentYear)}
        >
          <option value="" disabled>
            วัน
          </option>
          {Array.from({ length: daysInMonth(currentYear, currentMonth) }, (_, i) => i + 1).map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          aria-label="เดือน"
          value={month}
          onChange={(e) => commit(currentDay, Number(e.target.value), currentYear)}
        >
          <option value="" disabled>
            เดือน
          </option>
          {THAI_MONTHS.map((m, i) => (
            <option key={m} value={i + 1}>
              {m}
            </option>
          ))}
        </select>
        <select
          aria-label="ปี"
          value={year}
          onChange={(e) => commit(currentDay, currentMonth, Number(e.target.value))}
        >
          <option value="" disabled>
            ปี
          </option>
          {yearOptions.map((y) => (
            <option key={y} value={y}>
              {calendar === "be" ? ceToBe(y) : y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
