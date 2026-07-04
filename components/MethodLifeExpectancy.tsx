"use client";

import { useEffect, useState } from "react";
import { lifeExpectancyRow, sourceCitation, LIFE_EXPECTANCY_SOURCE } from "@/lib/lifeExpectancy";
import { loadSettings } from "@/lib/storage";
import { DEFAULT_SETTINGS, type AppSettings } from "@/lib/settings";

// Reads the saved country/year (falls back to defaults before the client
// has hydrated from localStorage) so the WHO citation matches whatever the
// user picked on the input screen.
export default function MethodLifeExpectancy() {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  const row = lifeExpectancyRow(settings.country, settings.year);
  const citation = sourceCitation(settings.country, settings.year);

  return (
    <>
      <ul>
        <li>ไม่ระบุเพศ: {row.unspecified} ปี</li>
        <li>ชาย: {row.male} ปี</li>
        <li>หญิง: {row.female} ปี</li>
      </ul>
      <p className="citation">
        แหล่งอ้างอิง: {LIFE_EXPECTANCY_SOURCE.organization} — ตัวชี้วัด {LIFE_EXPECTANCY_SOURCE.indicator}{" "}
        ประเทศ{citation.countryNameTh} ปี {citation.year}
      </p>
    </>
  );
}
