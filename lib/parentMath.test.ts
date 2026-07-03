import { describe, it, expect } from "vitest";
import { remainingVisits } from "./parentMath";

describe("remainingVisits", () => {
  it("computes remaining visits at 2x/year given remaining expected years", () => {
    // life expectancy 80, current age 60 => 20 years left => 40 visits at 2/year
    expect(remainingVisits(60, 80)).toBe(40);
  });

  it("supports a custom visits-per-year rate", () => {
    expect(remainingVisits(60, 80, 1)).toBe(20);
    expect(remainingVisits(60, 80, 4)).toBe(80);
  });

  it("floors partial years to a whole visit count", () => {
    // 5.5 years left * 2/year = 11 visits exactly
    expect(remainingVisits(74.5, 80)).toBe(11);
    // 5.4 years left * 2/year = 10.8 -> floors to 10
    expect(remainingVisits(74.6, 80)).toBe(10);
  });

  it("clamps to 0 when the parent has already passed the life expectancy", () => {
    expect(remainingVisits(85, 80)).toBe(0);
  });

  it("clamps to 0 exactly at the life expectancy age", () => {
    expect(remainingVisits(80, 80)).toBe(0);
  });
});
