// พ.ศ. (Buddhist Era) ↔ ค.ศ. (Common Era) conversion and Thai date formatting.
// พ.ศ. = ค.ศ. + 543

export const BE_OFFSET = 543;

export function ceToBe(ceYear: number): number {
  return ceYear + BE_OFFSET;
}

export function beToCe(beYear: number): number {
  return beYear - BE_OFFSET;
}

export const THAI_MONTHS = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
] as const;

// Formats a UTC date as "D เดือน พ.ศ." e.g. "3 กรกฎาคม 2569"
export function formatThaiDate(date: Date): string {
  const day = date.getUTCDate();
  const month = THAI_MONTHS[date.getUTCMonth()];
  const beYear = ceToBe(date.getUTCFullYear());
  return `${day} ${month} ${beYear}`;
}
