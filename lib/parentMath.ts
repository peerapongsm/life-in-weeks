// "ถ้าเจอพ่อแม่ปีละ 2 ครั้ง เหลือประมาณ X ครั้ง" — estimated remaining visits
// with a parent, based on the parent's current age and life expectancy.
// Only meaningful when the user opts in by entering a parent's age.

export const DEFAULT_VISITS_PER_YEAR = 2;

export function remainingVisits(
  parentCurrentAge: number,
  parentLifeExpectancy: number,
  visitsPerYear: number = DEFAULT_VISITS_PER_YEAR
): number {
  const remainingYears = Math.max(0, parentLifeExpectancy - parentCurrentAge);
  return Math.floor(remainingYears * visitsPerYear);
}
