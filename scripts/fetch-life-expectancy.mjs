// One-off / build-time script: fetch WHO GHO OData indicator WHOSIS_000001
// ("Life expectancy at birth (years)") for a curated list of countries and
// emit lib/lifeExpectancyData.ts (generated, committed).
//
// Run with: node scripts/fetch-life-expectancy.mjs

import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const API_URL = "https://ghoapi.azureedge.net/api/WHOSIS_000001";

// Curated ~40 countries: Thailand (default) + ASEAN + major economies +
// regional spread. ISO3 codes, plus English and Thai display names.
const COUNTRIES = [
  { code: "THA", name: "Thailand", nameTh: "ไทย" },
  { code: "VNM", name: "Vietnam", nameTh: "เวียดนาม" },
  { code: "MYS", name: "Malaysia", nameTh: "มาเลเซีย" },
  { code: "SGP", name: "Singapore", nameTh: "สิงคโปร์" },
  { code: "IDN", name: "Indonesia", nameTh: "อินโดนีเซีย" },
  { code: "PHL", name: "Philippines", nameTh: "ฟิลิปปินส์" },
  { code: "MMR", name: "Myanmar", nameTh: "เมียนมา" },
  { code: "KHM", name: "Cambodia", nameTh: "กัมพูชา" },
  { code: "LAO", name: "Laos", nameTh: "ลาว" },
  { code: "BRN", name: "Brunei", nameTh: "บรูไน" },
  { code: "USA", name: "United States", nameTh: "สหรัฐอเมริกา" },
  { code: "GBR", name: "United Kingdom", nameTh: "สหราชอาณาจักร" },
  { code: "DEU", name: "Germany", nameTh: "เยอรมนี" },
  { code: "FRA", name: "France", nameTh: "ฝรั่งเศส" },
  { code: "ITA", name: "Italy", nameTh: "อิตาลี" },
  { code: "ESP", name: "Spain", nameTh: "สเปน" },
  { code: "CAN", name: "Canada", nameTh: "แคนาดา" },
  { code: "AUS", name: "Australia", nameTh: "ออสเตรเลีย" },
  { code: "JPN", name: "Japan", nameTh: "ญี่ปุ่น" },
  { code: "KOR", name: "South Korea", nameTh: "เกาหลีใต้" },
  { code: "CHN", name: "China", nameTh: "จีน" },
  { code: "IND", name: "India", nameTh: "อินเดีย" },
  { code: "RUS", name: "Russia", nameTh: "รัสเซีย" },
  { code: "BRA", name: "Brazil", nameTh: "บราซิล" },
  { code: "MEX", name: "Mexico", nameTh: "เม็กซิโก" },
  { code: "SAU", name: "Saudi Arabia", nameTh: "ซาอุดีอาระเบีย" },
  { code: "ARE", name: "United Arab Emirates", nameTh: "สหรัฐอาหรับเอมิเรตส์" },
  { code: "ZAF", name: "South Africa", nameTh: "แอฟริกาใต้" },
  { code: "NGA", name: "Nigeria", nameTh: "ไนจีเรีย" },
  { code: "EGY", name: "Egypt", nameTh: "อียิปต์" },
  { code: "KEN", name: "Kenya", nameTh: "เคนยา" },
  { code: "PAK", name: "Pakistan", nameTh: "ปากีสถาน" },
  { code: "BGD", name: "Bangladesh", nameTh: "บังกลาเทศ" },
  { code: "LKA", name: "Sri Lanka", nameTh: "ศรีลังกา" },
  { code: "NPL", name: "Nepal", nameTh: "เนปาล" },
  { code: "SWE", name: "Sweden", nameTh: "สวีเดน" },
  { code: "CHE", name: "Switzerland", nameTh: "สวิตเซอร์แลนด์" },
  { code: "NOR", name: "Norway", nameTh: "นอร์เวย์" },
  { code: "NLD", name: "Netherlands", nameTh: "เนเธอร์แลนด์" },
];

const SEX_KEY = {
  SEX_MLE: "male",
  SEX_FMLE: "female",
  SEX_BTSX: "unspecified",
};

function round2(n) {
  return Math.round(n * 100) / 100;
}

async function fetchCountry(iso3) {
  const url = `${API_URL}?$filter=SpatialDim eq '${iso3}'`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`WHO GHO API request failed for ${iso3}: ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  return json.value ?? [];
}

async function main() {
  const data = {};

  for (const { code, name, nameTh } of COUNTRIES) {
    process.stdout.write(`Fetching ${code} (${name})...\n`);
    const rows = await fetchCountry(code);

    const years = {};
    for (const row of rows) {
      const sexKey = SEX_KEY[row.Dim1];
      if (!sexKey) continue; // skip unexpected dimension values
      if (typeof row.NumericValue !== "number") continue;
      const year = row.TimeDim;
      years[year] ??= {};
      years[year][sexKey] = round2(row.NumericValue);
    }

    // Drop years that don't have all three sex breakdowns — keeps the
    // dataset uniform for lookups.
    for (const year of Object.keys(years)) {
      const y = years[year];
      if (!("male" in y) || !("female" in y) || !("unspecified" in y)) {
        delete years[year];
      }
    }

    if (Object.keys(years).length === 0) {
      throw new Error(`No usable data returned for ${code} — check the API response.`);
    }

    data[code] = { name, nameTh, years };
  }

  const generatedAt = new Date().toISOString().slice(0, 10);
  const sortedData = Object.fromEntries(
    Object.entries(data).map(([code, entry]) => [
      code,
      {
        name: entry.name,
        nameTh: entry.nameTh,
        years: Object.fromEntries(
          Object.entries(entry.years).sort(([a], [b]) => Number(a) - Number(b))
        ),
      },
    ])
  );

  const output = `// GENERATED FILE — do not edit by hand.
// Produced by scripts/fetch-life-expectancy.mjs on ${generatedAt}.
// Source: WHO Global Health Observatory (GHO), indicator WHOSIS_000001
// "Life expectancy at birth (years)", https://ghoapi.azureedge.net/api/WHOSIS_000001
// Values are the WHO-reported estimates per country/year/sex, rounded to 2 decimals.
// Re-run: node scripts/fetch-life-expectancy.mjs

export interface CountryLifeExpectancy {
  name: string;
  nameTh: string;
  years: Record<number, { male: number; female: number; unspecified: number }>;
}

export const DEFAULT_COUNTRY = "THA";

export const LIFE_EXPECTANCY_DATA: Record<string, CountryLifeExpectancy> = ${JSON.stringify(
    sortedData,
    null,
    2
  )};

/** Countries with baked WHO data, Thailand first, then Thai alphabetical order. */
export function listCountries(): { code: string; name: string; nameTh: string }[] {
  const codes = Object.keys(LIFE_EXPECTANCY_DATA);
  const rest = codes
    .filter((c) => c !== DEFAULT_COUNTRY)
    .sort((a, b) => LIFE_EXPECTANCY_DATA[a].nameTh.localeCompare(LIFE_EXPECTANCY_DATA[b].nameTh, "th"));
  const ordered = codes.includes(DEFAULT_COUNTRY) ? [DEFAULT_COUNTRY, ...rest] : rest;
  return ordered.map((code) => ({
    code,
    name: LIFE_EXPECTANCY_DATA[code].name,
    nameTh: LIFE_EXPECTANCY_DATA[code].nameTh,
  }));
}

/** Years with baked data for a country, newest first. Empty if the country is unknown. */
export function availableYears(country: string): number[] {
  const entry = LIFE_EXPECTANCY_DATA[country];
  if (!entry) return [];
  return Object.keys(entry.years)
    .map(Number)
    .sort((a, b) => b - a);
}
`;

  const outPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "lib", "lifeExpectancyData.ts");
  await writeFile(outPath, output, "utf-8");
  process.stdout.write(`Wrote ${outPath}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
