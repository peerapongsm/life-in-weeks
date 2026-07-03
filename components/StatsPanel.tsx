"use client";

import { getWeeksInfo, totalWeeksForLifeExpectancy, weeksRemaining, percentLifeUsed } from "@/lib/weeks";
import { remainingVisits, DEFAULT_VISITS_PER_YEAR } from "@/lib/parentMath";

interface StatsPanelProps {
  birthDate: Date;
  today: Date;
  lifeExpectancyYears: number;
  parentAge: number | null;
  parentLifeExpectancyYears: number;
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
}: StatsPanelProps) {
  const { weeksLived } = getWeeksInfo(birthDate, today);
  const totalWeeks = totalWeeksForLifeExpectancy(lifeExpectancyYears);
  const remaining = weeksRemaining(birthDate, today, lifeExpectancyYears);
  const percent = percentLifeUsed(birthDate, today, lifeExpectancyYears);

  const visits = parentAge !== null ? remainingVisits(parentAge, parentLifeExpectancyYears, DEFAULT_VISITS_PER_YEAR) : null;

  return (
    <div className="stats-panel">
      <div className="stat-item">
        <span className="stat-number">{formatNumber(weeksLived)}</span>
        <span className="stat-label">สัปดาห์ที่ใช้ไปแล้ว</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{formatNumber(remaining)}</span>
        <span className="stat-label">สัปดาห์ที่เหลือโดยประมาณ (จาก {formatNumber(totalWeeks)} สัปดาห์)</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{percent.toFixed(1)}%</span>
        <span className="stat-label">ของชีวิตที่คาดว่าจะได้ใช้</span>
      </div>
      {visits !== null && (
        <div className="stat-item">
          <span className="stat-number">{formatNumber(visits)}</span>
          <span className="stat-label">ครั้ง — ถ้าเจอพ่อ/แม่ปีละ {DEFAULT_VISITS_PER_YEAR} ครั้ง เหลือประมาณเท่านี้</span>
        </div>
      )}
      <p className="reflective-line">สัปดาห์นี้ยังไม่ถูกใช้</p>
    </div>
  );
}
