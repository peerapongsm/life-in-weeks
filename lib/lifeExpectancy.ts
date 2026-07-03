// อายุคาดเฉลี่ยเมื่อแรกเกิดของไทย — ใช้เป็นค่าเริ่มต้นความยาว "ชีวิต" บน grid
// แหล่งอ้างอิง: WHO Global Health Observatory, ตัวชี้วัด WHOSIS_000001
// "Life expectancy at birth (years)" ประเทศไทย ปี 2020
// ชาย 73.24 ปี / หญิง 79.91 ปี / รวม 76.51 ปี
// เป็น "ค่าเฉลี่ยระดับประชากร" ไม่ใช่คำทำนายอายุของบุคคลใดบุคคลหนึ่ง

export type Sex = "male" | "female" | "unspecified";

export const LIFE_EXPECTANCY: Record<Sex, number> = {
  male: 73.24,
  female: 79.91,
  unspecified: 76.51,
};

export const LIFE_EXPECTANCY_SOURCE = {
  organization: "WHO Global Health Observatory",
  indicator: "WHOSIS_000001 — Life expectancy at birth (years)",
  country: "Thailand",
  year: 2020,
} as const;

export function lifeExpectancyFor(sex: Sex): number {
  return LIFE_EXPECTANCY[sex];
}
