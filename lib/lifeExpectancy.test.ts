import { describe, it, expect } from "vitest";
import {
  lifeExpectancyFor,
  lifeExpectancyRow,
  latestYearFor,
  resolveLifeExpectancyYears,
  sourceCitation,
  listCountries,
  availableYears,
  DEFAULT_COUNTRY,
  LIFE_EXPECTANCY_SOURCE,
} from "./lifeExpectancy";

describe("lifeExpectancyFor", () => {
  it("looks up the WHO value for a known country/year/sex", () => {
    // Locked against the WHO GHO API response for Thailand 2020 (matches the
    // values previously hardcoded before this dataset was baked from the API).
    expect(lifeExpectancyFor("THA", 2020, "male")).toBe(73.24);
    expect(lifeExpectancyFor("THA", 2020, "female")).toBe(79.91);
    expect(lifeExpectancyFor("THA", 2020, "unspecified")).toBe(76.51);
  });

  it("looks up a different country", () => {
    const usa2019 = lifeExpectancyFor("USA", 2019, "unspecified");
    expect(usa2019).toBeGreaterThan(70);
    expect(usa2019).toBeLessThan(85);
  });

  it("falls back to the country's latest year when the requested year is missing", () => {
    const latest = latestYearFor("THA");
    expect(lifeExpectancyFor("THA", 1900, "unspecified")).toBe(lifeExpectancyFor("THA", latest, "unspecified"));
  });

  it("falls back to Thailand when the country is unknown", () => {
    expect(lifeExpectancyFor("ZZZ", 2020, "unspecified")).toBe(lifeExpectancyFor(DEFAULT_COUNTRY, 2020, "unspecified"));
  });
});

describe("lifeExpectancyRow", () => {
  it("returns all three sex breakdowns together", () => {
    const row = lifeExpectancyRow("THA", 2020);
    expect(row).toEqual({ male: 73.24, female: 79.91, unspecified: 76.51 });
  });
});

describe("latestYearFor", () => {
  it("returns the newest year with baked data for a country", () => {
    const years = availableYears("THA");
    expect(latestYearFor("THA")).toBe(Math.max(...years));
  });

  it("falls back to Thailand's latest year for an unknown country", () => {
    expect(latestYearFor("ZZZ")).toBe(latestYearFor(DEFAULT_COUNTRY));
  });
});

describe("resolveLifeExpectancyYears", () => {
  it("uses the override when set, ignoring the WHO default", () => {
    expect(resolveLifeExpectancyYears(99, "THA", 2020, "male")).toBe(99);
  });

  it("falls back to the WHO default when the override is null", () => {
    expect(resolveLifeExpectancyYears(null, "THA", 2020, "male")).toBe(lifeExpectancyFor("THA", 2020, "male"));
  });
});

describe("availableYears", () => {
  it("falls back to Thailand's years for an unknown country", () => {
    expect(availableYears("ZZZ")).toEqual(availableYears(DEFAULT_COUNTRY));
    expect(availableYears("ZZZ").length).toBeGreaterThan(0);
  });
});

describe("listCountries", () => {
  it("includes Thailand first and covers the curated country list", () => {
    const countries = listCountries();
    expect(countries.length).toBeGreaterThanOrEqual(35);
    expect(countries[0].code).toBe("THA");
    expect(countries.map((c) => c.code)).toContain("USA");
    expect(countries.map((c) => c.code)).toContain("VNM");
  });
});

describe("sourceCitation", () => {
  it("cites the WHO indicator with the selected country + year", () => {
    expect(LIFE_EXPECTANCY_SOURCE.organization).toBe("WHO Global Health Observatory");
    expect(LIFE_EXPECTANCY_SOURCE.indicator).toContain("WHOSIS_000001");
    const citation = sourceCitation("THA", 2020);
    expect(citation).toEqual({ countryNameTh: "ไทย", year: 2020 });
  });

  it("falls back to the latest year when the requested year is missing", () => {
    const citation = sourceCitation("THA", 1900);
    expect(citation.year).toBe(latestYearFor("THA"));
  });
});
