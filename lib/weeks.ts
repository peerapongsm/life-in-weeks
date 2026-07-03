// Pure date math for "ชีวิตเป็นสัปดาห์". All dates are treated as UTC
// midnight to avoid DST / timezone drift affecting day counts.

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const AVG_DAYS_PER_YEAR = 365.2425; // average Gregorian calendar year length
const DAYS_PER_WEEK = 7;

export interface WeeksInfo {
  /** Whole days elapsed since birth (0 on the birthday itself). */
  totalDays: number;
  /** Number of fully-completed weeks since birth (0-indexed count). */
  weeksLived: number;
  /** 0-based index of the week currently in progress (== weeksLived). */
  currentWeekIndex: number;
  /** 1-based number of the week currently in progress. */
  currentWeekNumber: number;
}

function toUtcMidnight(date: Date): number {
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

export function daysSinceBirth(birthDate: Date, today: Date): number {
  const days = Math.round((toUtcMidnight(today) - toUtcMidnight(birthDate)) / MS_PER_DAY);
  return Math.max(0, days);
}

export function getWeeksInfo(birthDate: Date, today: Date): WeeksInfo {
  const totalDays = daysSinceBirth(birthDate, today);
  const weeksLived = Math.floor(totalDays / DAYS_PER_WEEK);
  return {
    totalDays,
    weeksLived,
    currentWeekIndex: weeksLived,
    currentWeekNumber: weeksLived + 1,
  };
}

/** Total weeks in a life expectancy given in years (may be fractional). */
export function totalWeeksForLifeExpectancy(lifeExpectancyYears: number): number {
  return Math.round((lifeExpectancyYears * AVG_DAYS_PER_YEAR) / DAYS_PER_WEEK);
}

export function weeksRemaining(birthDate: Date, today: Date, lifeExpectancyYears: number): number {
  const { weeksLived } = getWeeksInfo(birthDate, today);
  const total = totalWeeksForLifeExpectancy(lifeExpectancyYears);
  return Math.max(0, total - weeksLived);
}

export function percentLifeUsed(birthDate: Date, today: Date, lifeExpectancyYears: number): number {
  const { weeksLived } = getWeeksInfo(birthDate, today);
  const total = totalWeeksForLifeExpectancy(lifeExpectancyYears);
  return Math.min(100, (weeksLived / total) * 100);
}
