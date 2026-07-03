"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InputScreen from "@/components/InputScreen";
import WeekGrid from "@/components/WeekGrid";
import StatsPanel from "@/components/StatsPanel";
import MilestoneManager from "@/components/MilestoneManager";
import ExportButtons from "@/components/ExportButtons";
import { DEFAULT_SETTINGS, type AppSettings } from "@/lib/settings";
import { loadSettings, saveSettings, loadMilestones, addMilestone, removeMilestone, updateMilestone, saveMilestones } from "@/lib/storage";
import { lifeExpectancyFor } from "@/lib/lifeExpectancy";
import type { Milestone } from "@/lib/milestones";

export default function Home() {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [showInput, setShowInput] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const loadedSettings = loadSettings();
    setSettings(loadedSettings);
    setMilestones(loadMilestones());
    setShowInput(!loadedSettings.birthDate);
    setMounted(true);
  }, []);

  function patchSettings(patch: Partial<AppSettings>) {
    const next = { ...settings, ...patch };
    setSettings(next);
    if (mounted) saveSettings(next);
  }

  function handleAddMilestone(m: { label: string; date: string }) {
    const next = addMilestone(milestones, m);
    setMilestones(next);
    saveMilestones(next);
  }

  function handleRemoveMilestone(id: string) {
    const next = removeMilestone(milestones, id);
    setMilestones(next);
    saveMilestones(next);
  }

  function handleUpdateMilestone(id: string, patch: { label?: string; date?: string }) {
    const next = updateMilestone(milestones, id, patch);
    setMilestones(next);
    saveMilestones(next);
  }

  if (showInput || !settings.birthDate) {
    return (
      <main className="page">
        <div className="poster-sheet">
          <InputScreen
            settings={settings}
            onChange={patchSettings}
            onSubmit={() => {
              saveSettings(settings);
              setShowInput(false);
            }}
          />
        </div>
        <footer className="site-footer no-print">
          <Link href="/method/" className="link-btn">
            เกี่ยวกับวิธีคำนวณ
          </Link>
        </footer>
      </main>
    );
  }

  const birthDate = new Date(settings.birthDate + "T00:00:00Z");
  const today = new Date();
  const lifeExpectancyYears = lifeExpectancyFor(settings.sex);
  const parentLifeExpectancyYears = lifeExpectancyFor(settings.parentSex);

  return (
    <main className="page">
      <div className="poster-sheet">
        <div className="poster-layout">
          <div className="poster-header">
            <div>
              <p className="eyebrow">ชีวิตเป็นสัปดาห์</p>
              <h1>ตารางชีวิตของคุณ</h1>
            </div>
            <button type="button" className="text-btn no-print" onClick={() => setShowInput(true)}>
              แก้ไขข้อมูล
            </button>
          </div>

          <StatsPanel
            birthDate={birthDate}
            today={today}
            lifeExpectancyYears={lifeExpectancyYears}
            parentAge={settings.parentAge}
            parentLifeExpectancyYears={parentLifeExpectancyYears}
          />

          <div className="poster-main">
            <WeekGrid
              birthDate={birthDate}
              today={today}
              lifeExpectancyYears={lifeExpectancyYears}
              includeUniversity={settings.includeUniversity}
              milestones={milestones}
            />

            <ExportButtons
              birthDate={birthDate}
              today={today}
              lifeExpectancyYears={lifeExpectancyYears}
              includeUniversity={settings.includeUniversity}
              milestones={milestones}
              posterName={settings.posterName}
              onPosterNameChange={(posterName) => patchSettings({ posterName })}
            />

            <MilestoneManager
              milestones={milestones}
              onAdd={handleAddMilestone}
              onRemove={handleRemoveMilestone}
              onUpdate={handleUpdateMilestone}
            />

            <p className="privacy-note">
              ข้อมูลทั้งหมดคำนวณและเก็บอยู่ในเครื่องของคุณเท่านั้น ไม่มีการส่งวันเกิดหรือข้อมูลส่วนตัวออกไปที่ไหน
            </p>
          </div>
        </div>
      </div>

      <footer className="site-footer no-print">
        <Link href="/method/" className="link-btn">
          เกี่ยวกับวิธีคำนวณและแหล่งอ้างอิง
        </Link>
      </footer>
    </main>
  );
}
