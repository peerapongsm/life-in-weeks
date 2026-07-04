// อายุคาดเฉลี่ยเมื่อแรกเกิด — ใช้เป็นค่าเริ่มต้นความยาว "ชีวิต" บน grid
// แหล่งอ้างอิง: WHO Global Health Observatory, ตัวชี้วัด WHOSIS_000001
// "Life expectancy at birth (years)" — ข้อมูลหลายประเทศ หลายปี (ดู lib/lifeExpectancyData.ts)
// เป็น "ค่าเฉลี่ยระดับประชากร" ไม่ใช่คำทำนายอายุของบุคคลใดบุคคลหนึ่ง

import { LIFE_EXPECTANCY_DATA, DEFAULT_COUNTRY, availableYears as rawAvailableYears, listCountries } from "./lifeExpectancyData";

export type Sex = "male" | "female" | "unspecified";

export { DEFAULT_COUNTRY, listCountries };

export const LIFE_EXPECTANCY_SOURCE = {
  organization: "WHO Global Health Observatory",
  indicator: "WHOSIS_000001 — Life expectancy at birth (years)",
} as const;

function resolveCountry(country: string): string {
  return LIFE_EXPECTANCY_DATA[country] ? country : DEFAULT_COUNTRY;
}

/** Years with baked WHO data for a country, newest first. Falls back to
 * Thailand's years when the country is unknown. */
export function availableYears(country: string): number[] {
  return rawAvailableYears(resolveCountry(country));
}

/** Latest year with baked data for a country. Falls back to Thailand's latest year. */
export function latestYearFor(country: string): number {
  const years = availableYears(resolveCountry(country));
  return years[0];
}

/** The full male/female/unspecified row for a country + year, falling back to that
 * country's latest year when the requested year isn't available. */
export function lifeExpectancyRow(country: string, year: number): { male: number; female: number; unspecified: number } {
  const resolved = resolveCountry(country);
  const data = LIFE_EXPECTANCY_DATA[resolved];
  return data.years[year] ?? data.years[latestYearFor(resolved)];
}

/** WHO life expectancy at birth for a country + year + sex. Falls back to that
 * country's latest year if the year is missing, and to Thailand if the country
 * is unknown. */
export function lifeExpectancyFor(country: string, year: number, sex: Sex): number {
  return lifeExpectancyRow(country, year)[sex];
}

/** User override wins when set; otherwise the WHO default for (country, year, sex). */
export function resolveLifeExpectancyYears(
  override: number | null,
  country: string,
  year: number,
  sex: Sex
): number {
  return override ?? lifeExpectancyFor(country, year, sex);
}

/** Country name (Thai) + year for the dynamic WHO source citation. */
export function sourceCitation(country: string, year: number): { countryNameTh: string; year: number } {
  const resolved = resolveCountry(country);
  const data = LIFE_EXPECTANCY_DATA[resolved];
  const resolvedYear = data.years[year] ? year : latestYearFor(resolved);
  return { countryNameTh: data.nameTh, year: resolvedYear };
}
