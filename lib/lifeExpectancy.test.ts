import { describe, it, expect } from "vitest";
import { lifeExpectancyFor, LIFE_EXPECTANCY_SOURCE } from "./lifeExpectancy";

describe("lifeExpectancyFor", () => {
  it("returns the locked values for each sex option", () => {
    expect(lifeExpectancyFor("male")).toBe(73.24);
    expect(lifeExpectancyFor("female")).toBe(79.91);
    expect(lifeExpectancyFor("unspecified")).toBe(76.51);
  });
});

describe("LIFE_EXPECTANCY_SOURCE", () => {
  it("cites WHO GHO 2020 for Thailand", () => {
    expect(LIFE_EXPECTANCY_SOURCE.organization).toBe("WHO Global Health Observatory");
    expect(LIFE_EXPECTANCY_SOURCE.year).toBe(2020);
    expect(LIFE_EXPECTANCY_SOURCE.country).toBe("Thailand");
  });
});
