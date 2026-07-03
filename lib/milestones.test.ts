import { describe, it, expect } from "vitest";
import { getLifeStageBands, getBandForAge, milestoneToGridPosition, MAX_MILESTONES } from "./milestones";

const utc = (y: number, m: number, d: number) => new Date(Date.UTC(y, m - 1, d));

describe("getLifeStageBands", () => {
  it("returns bands covering kindergarten through retirement without university", () => {
    const bands = getLifeStageBands(false);
    const ids = bands.map((b) => b.id);
    expect(ids).toEqual(["kindergarten", "primary", "secondary", "working", "retirement"]);
  });

  it("splits out a university band and delays working age when included", () => {
    const bands = getLifeStageBands(true);
    const ids = bands.map((b) => b.id);
    expect(ids).toEqual(["kindergarten", "primary", "secondary", "university", "working", "retirement"]);
    const university = bands.find((b) => b.id === "university")!;
    const working = bands.find((b) => b.id === "working")!;
    expect(working.startAge).toBe(university.endAge + 1);
  });

  it("retirement band starts at age 60", () => {
    const retirement = getLifeStageBands(false).find((b) => b.id === "retirement")!;
    expect(retirement.startAge).toBe(60);
  });

  it("bands don't overlap and are ordered by age", () => {
    const bands = getLifeStageBands(true);
    for (let i = 1; i < bands.length; i++) {
      expect(bands[i].startAge).toBeGreaterThan(bands[i - 1].endAge);
    }
  });
});

describe("getBandForAge", () => {
  it("finds the correct band for a given age year", () => {
    expect(getBandForAge(4, false)?.id).toBe("kindergarten");
    expect(getBandForAge(8, false)?.id).toBe("primary");
    expect(getBandForAge(15, false)?.id).toBe("secondary");
    expect(getBandForAge(30, false)?.id).toBe("working");
    expect(getBandForAge(65, false)?.id).toBe("retirement");
  });

  it("returns undefined for ages before any band (infancy)", () => {
    expect(getBandForAge(1, false)).toBeUndefined();
  });

  it("respects the university flag", () => {
    expect(getBandForAge(19, false)?.id).toBe("working");
    expect(getBandForAge(19, true)?.id).toBe("university");
  });
});

describe("milestoneToGridPosition", () => {
  it("places a milestone on the birthday itself at row 0, col 0", () => {
    const pos = milestoneToGridPosition(utc(2000, 1, 1), utc(2000, 1, 1));
    expect(pos).toEqual({ weekIndex: 0, row: 0, col: 0 });
  });

  it("places a milestone exactly one year later at row 1, col 0", () => {
    // 2000 is a leap year -> 366 days -> 52 weeks 2 days -> floor = 52 -> row 1 col 0
    const pos = milestoneToGridPosition(utc(2000, 1, 1), utc(2001, 1, 1));
    expect(pos.weekIndex).toBe(52);
    expect(pos.row).toBe(1);
    expect(pos.col).toBe(0);
  });

  it("matches the pinned fixture: born 2000-01-01, today 2026-07-03 => week index 1382", () => {
    const pos = milestoneToGridPosition(utc(2000, 1, 1), utc(2026, 7, 3));
    expect(pos.weekIndex).toBe(1382);
    expect(pos.row).toBe(Math.floor(1382 / 52));
    expect(pos.col).toBe(1382 % 52);
  });
});

describe("MAX_MILESTONES", () => {
  it("is capped at 20", () => {
    expect(MAX_MILESTONES).toBe(20);
  });
});
