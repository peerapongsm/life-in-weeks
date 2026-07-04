"use client";

import DateField from "./DateField";
import ToggleGroup from "./ToggleGroup";
import type { AppSettings } from "@/lib/settings";
import { listCountries, availableYears, latestYearFor, lifeExpectancyFor, type Sex } from "@/lib/lifeExpectancy";
import { DEFAULT_VISITS_PER_YEAR } from "@/lib/parentMath";

const SEX_OPTIONS: { value: Sex; label: string }[] = [
  { value: "unspecified", label: "ไม่ระบุ" },
  { value: "male", label: "ชาย" },
  { value: "female", label: "หญิง" },
];

interface InputScreenProps {
  settings: AppSettings;
  onChange: (patch: Partial<AppSettings>) => void;
  onSubmit: () => void;
}

function isFutureDate(isoDate: string): boolean {
  const todayIso = new Date().toISOString().slice(0, 10);
  return isoDate > todayIso;
}

export default function InputScreen({ settings, onChange, onSubmit }: InputScreenProps) {
  const isFuture = !!settings.birthDate && isFutureDate(settings.birthDate);
  const canSubmit = !!settings.birthDate && !isFuture;

  const countries = listCountries();
  const years = availableYears(settings.country);
  const whoDefaultSelf = lifeExpectancyFor(settings.country, settings.year, settings.sex);
  const whoDefaultParent = lifeExpectancyFor(settings.country, settings.year, settings.parentSex);

  return (
    <div className="input-screen">
      <p className="eyebrow">ชีวิตเป็นสัปดาห์</p>
      <h1>เห็นชีวิตทั้งชีวิตในภาพเดียว</h1>
      <p className="intro-text">
        กรอกวันเกิดของคุณ แล้วดูทุกสัปดาห์ที่ผ่านมาและที่เหลืออยู่ วางเรียงเป็นตารางเดียว —
        แนวคิดจาก Tim Urban “Your Life in Weeks” ปรับให้เข้ากับบริบทไทย
      </p>

      <div className="input-form">
        <DateField
          label="วันเกิด"
          value={settings.birthDate}
          onChange={(iso) => onChange({ birthDate: iso })}
        />

        <ToggleGroup
          label="เพศ (ใช้ประมาณอายุคาดเฉลี่ย — ไม่ระบุก็ได้)"
          options={SEX_OPTIONS}
          value={settings.sex}
          onChange={(sex) => onChange({ sex })}
        />

        <div className="date-field">
          <span className="date-field-label">ประเทศและปีข้อมูลอายุคาดเฉลี่ย (WHO)</span>
          <div className="date-field-selects">
            <select
              aria-label="ประเทศ"
              value={settings.country}
              onChange={(e) => {
                const country = e.target.value;
                onChange({ country, year: latestYearFor(country) });
              }}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.nameTh}
                </option>
              ))}
            </select>
            <select
              aria-label="ปีข้อมูล"
              value={settings.year}
              onChange={(e) => onChange({ year: Number(e.target.value) })}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="parent-input">
          <span className="date-field-label">
            อายุคาดเฉลี่ยของคุณ (ปี) — ไม่ใส่ก็ได้ ถ้าไม่ใส่จะใช้ค่าเฉลี่ย WHO แทน
          </span>
          <input
            type="number"
            min={1}
            max={120}
            step="0.01"
            inputMode="decimal"
            placeholder={`ค่าเฉลี่ย WHO: ${whoDefaultSelf} ปี`}
            value={settings.lifeExpectancyOverride ?? ""}
            onChange={(e) =>
              onChange({ lifeExpectancyOverride: e.target.value === "" ? null : Number(e.target.value) })
            }
            className="number-input"
            aria-label="อายุคาดเฉลี่ยของคุณ (ปี)"
          />
        </div>

        <ToggleGroup
          label="เรียนมหาวิทยาลัย?"
          options={[
            { value: "no", label: "ไม่นับ" },
            { value: "yes", label: "นับด้วย" },
          ]}
          value={settings.includeUniversity ? "yes" : "no"}
          onChange={(v) => onChange({ includeUniversity: v === "yes" })}
        />

        <div className="parent-input">
          <span className="date-field-label">อายุพ่อหรือแม่ตอนนี้ (ถ้าอยากรู้จำนวนครั้งที่จะได้เจอ)</span>
          <div className="parent-input-row">
            <input
              type="number"
              min={0}
              max={120}
              inputMode="numeric"
              placeholder="อายุ (ปี)"
              value={settings.parentAge ?? ""}
              onChange={(e) => onChange({ parentAge: e.target.value === "" ? null : Number(e.target.value) })}
              className="number-input"
              aria-label="อายุพ่อหรือแม่ตอนนี้"
            />
            <ToggleGroup
              label=""
              options={[
                { value: "unspecified", label: "ไม่ระบุ" },
                { value: "male", label: "พ่อ" },
                { value: "female", label: "แม่" },
              ]}
              value={settings.parentSex}
              onChange={(parentSex) => onChange({ parentSex })}
            />
          </div>

          <span className="date-field-label">
            อายุคาดเฉลี่ยของพ่อหรือแม่ (ปี) — ไม่ใส่ก็ได้ ถ้าไม่ใส่จะใช้ค่าเฉลี่ย WHO แทน
          </span>
          <input
            type="number"
            min={1}
            max={120}
            step="0.01"
            inputMode="decimal"
            placeholder={`ค่าเฉลี่ย WHO: ${whoDefaultParent} ปี`}
            value={settings.parentLifeExpectancyOverride ?? ""}
            onChange={(e) =>
              onChange({ parentLifeExpectancyOverride: e.target.value === "" ? null : Number(e.target.value) })
            }
            className="number-input"
            aria-label="อายุคาดเฉลี่ยของพ่อหรือแม่ (ปี)"
          />

          <span className="date-field-label">ปีละกี่ครั้งที่ได้เจอ</span>
          <input
            type="number"
            min={0}
            max={365}
            inputMode="numeric"
            value={settings.visitsPerYear}
            onChange={(e) =>
              onChange({
                visitsPerYear: e.target.value === "" ? DEFAULT_VISITS_PER_YEAR : Number(e.target.value),
              })
            }
            className="number-input"
            aria-label="ปีละกี่ครั้งที่ได้เจอ"
          />
        </div>
      </div>

      {isFuture && <p className="field-error">วันเกิดต้องไม่ใช่วันในอนาคต</p>}

      <button type="button" className="primary-btn" disabled={!canSubmit} onClick={onSubmit}>
        ดูกริดชีวิตของฉัน
      </button>

      <p className="privacy-note">
        ข้อมูลทั้งหมดคำนวณและเก็บอยู่ในเครื่องของคุณเท่านั้น ไม่มีการส่งวันเกิดหรือข้อมูลส่วนตัวออกไปที่ไหน
        (มีแค่สถิติการเข้าชมหน้าเว็บแบบไม่ระบุตัวตนผ่าน Umami)
      </p>
    </div>
  );
}
