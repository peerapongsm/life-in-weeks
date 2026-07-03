import { describe, it, expect } from "vitest";
import { daysSinceBirth, getWeeksInfo, totalWeeksForLifeExpectancy, weeksRemaining, percentLifeUsed } from "./weeks";

const utc = (y: number, m: number, d: number) => new Date(Date.UTC(y, m - 1, d));

describe("daysSinceBirth", () => {
  it("is 0 on the birthday itself", () => {
    expect(daysSinceBirth(utc(2000, 1, 1), utc(2000, 1, 1))).toBe(0);
  });

  it("counts leap years correctly (2000 and 2024 are leap)", () => {
    // 2000-01-01 -> 2001-01-01 spans the leap day 2000-02-29 => 366 days
    expect(daysSinceBirth(utc(2000, 1, 1), utc(2001, 1, 1))).toBe(366);
    // 2023-01-01 -> 2024-01-01 does not span a leap day => 365 days
    expect(daysSinceBirth(utc(2023, 1, 1), utc(2024, 1, 1))).toBe(365);
  });

  it("pinned fixture: born 2000-01-01, today 2026-07-03 => 9680 days", () => {
    expect(daysSinceBirth(utc(2000, 1, 1), utc(2026, 7, 3))).toBe(9680);
  });
});

describe("getWeeksInfo", () => {
  it("pinned fixture: born 2000-01-01, today 2026-07-03 => 1382 completed weeks, currently in week 1383", () => {
    const info = getWeeksInfo(utc(2000, 1, 1), utc(2026, 7, 3));
    expect(info.totalDays).toBe(9680);
    expect(info.weeksLived).toBe(1382);
    expect(info.currentWeekIndex).toBe(1382);
    expect(info.currentWeekNumber).toBe(1383);
  });

  it("boundary: exact birthday is the start of week 1 (day 0)", () => {
    const info = getWeeksInfo(utc(2010, 5, 20), utc(2010, 5, 20));
    expect(info.totalDays).toBe(0);
    expect(info.weeksLived).toBe(0);
    expect(info.currentWeekIndex).toBe(0);
    expect(info.currentWeekNumber).toBe(1);
  });

  it("boundary: day before a birthday is the last day of that age-year's final week", () => {
    // Exactly 1 year (365 days, non-leap span) later minus 1 day = 364 days = exactly 52 weeks (0 remainder)
    const info = getWeeksInfo(utc(2019, 1, 1), utc(2019, 12, 31));
    expect(info.totalDays).toBe(364);
    expect(info.weeksLived).toBe(52);
    expect(info.currentWeekNumber).toBe(53);
  });

  it("boundary: exactly 6 days after birth is still week 1 (index 0)", () => {
    const info = getWeeksInfo(utc(2020, 3, 1), utc(2020, 3, 7));
    expect(info.totalDays).toBe(6);
    expect(info.weeksLived).toBe(0);
    expect(info.currentWeekNumber).toBe(1);
  });

  it("boundary: exactly 7 days after birth rolls into week 2 (index 1)", () => {
    const info = getWeeksInfo(utc(2020, 3, 1), utc(2020, 3, 8));
    expect(info.totalDays).toBe(7);
    expect(info.weeksLived).toBe(1);
    expect(info.currentWeekNumber).toBe(2);
  });
});

describe("totalWeeksForLifeExpectancy", () => {
  it("computes total weeks for a life expectancy in years using the average Gregorian year length", () => {
    // 76.5 years * 365.2425 days/year / 7 days/week, rounded
    const expected = Math.round((76.5 * 365.2425) / 7);
    expect(totalWeeksForLifeExpectancy(76.5)).toBe(expected);
  });

  it("is monotonically increasing with life expectancy", () => {
    expect(totalWeeksForLifeExpectancy(80)).toBeGreaterThan(totalWeeksForLifeExpectancy(73));
  });
});

describe("weeksRemaining", () => {
  it("subtracts weeks lived from total weeks for the life expectancy", () => {
    const remaining = weeksRemaining(utc(2000, 1, 1), utc(2026, 7, 3), 76.5);
    const total = totalWeeksForLifeExpectancy(76.5);
    expect(remaining).toBe(total - 1382);
  });

  it("clamps at 0 when weeks lived exceeds the life expectancy total", () => {
    const remaining = weeksRemaining(utc(1900, 1, 1), utc(2026, 7, 3), 76.5);
    expect(remaining).toBe(0);
  });
});

describe("percentLifeUsed", () => {
  it("computes percentage of expected life used, matching the fixture", () => {
    const total = totalWeeksForLifeExpectancy(76.5);
    const pct = percentLifeUsed(utc(2000, 1, 1), utc(2026, 7, 3), 76.5);
    expect(pct).toBeCloseTo((1382 / total) * 100, 5);
  });

  it("clamps at 100 when weeks lived exceeds the life expectancy total", () => {
    const pct = percentLifeUsed(utc(1900, 1, 1), utc(2026, 7, 3), 76.5);
    expect(pct).toBe(100);
  });
});
