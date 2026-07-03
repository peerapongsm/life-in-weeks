import { daysSinceBirth } from "./weeks";

// Thai life-stage bands, expressed as inclusive age-year ranges. Grid rows
// are age-years (row = ปีอายุ), so a band maps directly onto a row range —
// no week math needed for the bands themselves.
export interface LifeStageBand {
  id: string;
  label: string;
  startAge: number;
  /** Inclusive. Infinity for the open-ended final band. */
  endAge: number;
}

const KINDERGARTEN: LifeStageBand = { id: "kindergarten", label: "อนุบาล", startAge: 3, endAge: 5 };
const PRIMARY: LifeStageBand = { id: "primary", label: "ประถม", startAge: 6, endAge: 11 };
const SECONDARY: LifeStageBand = { id: "secondary", label: "มัธยม", startAge: 12, endAge: 17 };
const UNIVERSITY: LifeStageBand = { id: "university", label: "มหาวิทยาลัย", startAge: 18, endAge: 21 };
const RETIREMENT: LifeStageBand = { id: "retirement", label: "วัยเกษียณ", startAge: 60, endAge: Infinity };

export function getLifeStageBands(includeUniversity: boolean): LifeStageBand[] {
  if (includeUniversity) {
    return [
      KINDERGARTEN,
      PRIMARY,
      SECONDARY,
      UNIVERSITY,
      { id: "working", label: "วัยทำงาน", startAge: UNIVERSITY.endAge + 1, endAge: RETIREMENT.startAge - 1 },
      RETIREMENT,
    ];
  }
  return [
    KINDERGARTEN,
    PRIMARY,
    SECONDARY,
    { id: "working", label: "วัยทำงาน", startAge: SECONDARY.endAge + 1, endAge: RETIREMENT.startAge - 1 },
    RETIREMENT,
  ];
}

export function getBandForAge(ageYear: number, includeUniversity: boolean): LifeStageBand | undefined {
  return getLifeStageBands(includeUniversity).find((b) => ageYear >= b.startAge && ageYear <= b.endAge);
}

const WEEKS_PER_ROW = 52;

export interface GridPosition {
  /** 0-based index of the week the milestone falls in, since birth. */
  weekIndex: number;
  /** Age-year row (0-based). */
  row: number;
  /** Week within that age-year (0-51). */
  col: number;
}

export function milestoneToGridPosition(birthDate: Date, milestoneDate: Date): GridPosition {
  const weekIndex = Math.floor(daysSinceBirth(birthDate, milestoneDate) / 7);
  return {
    weekIndex,
    row: Math.floor(weekIndex / WEEKS_PER_ROW),
    col: weekIndex % WEEKS_PER_ROW,
  };
}

export interface Milestone {
  id: string;
  label: string;
  /** ISO date string (YYYY-MM-DD). */
  date: string;
}

export const MAX_MILESTONES = 20;
