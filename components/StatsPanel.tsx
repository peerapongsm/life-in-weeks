"use client";

import { getWeeksInfo, totalWeeksForLifeExpectancy, weeksRemaining, percentLifeUsed } from "@/lib/weeks";
import { remainingVisits, DEFAULT_VISITS_PER_YEAR } from "@/lib/parentMath";

interface StatsPanelProps {
  birthDate: Date;
  today: Date;
  lifeExpectancyYears: number;
  parentAge: number | null;
  parentLifeExpectancyYears: number;
  visitsPerYear?: number;
}

function formatNumber(n: number): string {
  return n.toLocaleString("th-TH");
}

export default function StatsPanel({
  birthDate,
  today,
  lifeExpectancyYears,
  parentAge,
  parentLifeExpectancyYears,
  visitsPerYear = DEFAULT_VISITS_PER_YEAR,
}: StatsPanelProps) {
  const { weeksLived } = getWeeksInfo(birthDate, today);
  const totalWeeks = totalWeeksForLifeExpectancy(lifeExpectancyYears);
  const remaining = weeksRemaining(birthDate, today, lifeExpectancyYears);
  const percent = percentLifeUsed(birthDate, today, lifeExpectancyYears);

  const visits = parentAge !== null ? remainingVisits(parentAge, parentLifeExpectancyYears, visitsPerYear) : null;

  return (
    <aside className="margin-notes">
      <div className="margin-note">
        <span className="margin-note-number">{formatNumber(weeksLived)}</span>
        <span className="margin-note-label">สัปดาห์ที่ใช้ไปแล้ว</span>
      </div>
      <div className="margin-note">
        <span className="margin-note-number">{formatNumber(remaining)}</span>
        <span className="margin-note-label">สัปดาห์ที่เหลือโดยประมาณ (จาก {formatNumber(totalWeeks)} สัปดาห์)</span>
      </div>
      <div className="margin-note">
        <span className="margin-note-number margin-note-number--accent">{percent.toFixed(1)}%</span>
        <span className="margin-note-label">ของชีวิตที่คาดว่าจะได้ใช้</span>
      </div>
      {visits !== null && (
        <div className="margin-note">
          <span className="margin-note-number">{formatNumber(visits)}</span>
          <span className="margin-note-label">ครั้ง — ถ้าเจอพ่อ/แม่ปีละ {visitsPerYear} ครั้ง เหลือประมาณเท่านี้</span>
        </div>
      )}
      <p className="margin-note-reflective">สัปดาห์นี้ยังไม่ถูกใช้</p>
    </aside>
  );
}
