"use client";

import DateField from "./DateField";
import ToggleGroup from "./ToggleGroup";
import type { AppSettings } from "@/lib/settings";
import type { Sex } from "@/lib/lifeExpectancy";

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
          label="เพศ (ใช้ประมาณอายุคาดเฉลี่ยไทย — ไม่ระบุก็ได้)"
          options={SEX_OPTIONS}
          value={settings.sex}
          onChange={(sex) => onChange({ sex })}
        />

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
