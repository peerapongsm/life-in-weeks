import type { Sex } from "./lifeExpectancy";

export interface AppSettings {
  /** ISO date string YYYY-MM-DD, or null until the user sets a birthdate. */
  birthDate: string | null;
  sex: Sex;
  includeUniversity: boolean;
  /** Parent's current age in years, or null if not provided. */
  parentAge: number | null;
  parentSex: Sex;
  posterName: string;
}

export const DEFAULT_SETTINGS: AppSettings = {
  birthDate: null,
  sex: "unspecified",
  includeUniversity: false,
  parentAge: null,
  parentSex: "unspecified",
  posterName: "",
};
