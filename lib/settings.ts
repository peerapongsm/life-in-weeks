import { DEFAULT_COUNTRY, latestYearFor, type Sex } from "./lifeExpectancy";
import { DEFAULT_VISITS_PER_YEAR } from "./parentMath";

export interface AppSettings {
  /** ISO date string YYYY-MM-DD, or null until the user sets a birthdate. */
  birthDate: string | null;
  sex: Sex;
  includeUniversity: boolean;
  /** Parent's current age in years, or null if not provided. */
  parentAge: number | null;
  parentSex: Sex;
  posterName: string;
  /** WHO source country (ISO3). */
  country: string;
  /** WHO source year for that country. */
  year: number;
  /** User override for their own life expectancy (years), or null to use the WHO default. */
  lifeExpectancyOverride: number | null;
  /** User override for the parent's life expectancy (years), or null to use the WHO default. */
  parentLifeExpectancyOverride: number | null;
  /** How many times per year the user expects to see the parent. */
  visitsPerYear: number;
}

export const DEFAULT_SETTINGS: AppSettings = {
  birthDate: null,
  sex: "unspecified",
  includeUniversity: false,
  parentAge: null,
  parentSex: "unspecified",
  posterName: "",
  country: DEFAULT_COUNTRY,
  year: latestYearFor(DEFAULT_COUNTRY),
  lifeExpectancyOverride: null,
  parentLifeExpectancyOverride: null,
  visitsPerYear: DEFAULT_VISITS_PER_YEAR,
};
