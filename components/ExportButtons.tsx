"use client";

import { useState } from "react";
import { POSTER_WIDTH, POSTER_HEIGHT, renderPosterToCanvas } from "@/lib/exportPng";
import type { Milestone } from "@/lib/milestones";

interface ExportButtonsProps {
  birthDate: Date;
  today: Date;
  lifeExpectancyYears: number;
  includeUniversity: boolean;
  milestones: Milestone[];
  posterName: string;
  onPosterNameChange: (name: string) => void;
}

export default function ExportButtons({
  birthDate,
  today,
  lifeExpectancyYears,
  includeUniversity,
  milestones,
  posterName,
  onPosterNameChange,
}: ExportButtonsProps) {
  const [isRendering, setIsRendering] = useState(false);

  async function handleDownload() {
    setIsRendering(true);
    try {
      const canvas = document.createElement("canvas");
      canvas.width = POSTER_WIDTH;
      canvas.height = POSTER_HEIGHT;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      renderPosterToCanvas(ctx, {
        birthDate,
        today,
        lifeExpectancyYears,
        includeUniversity,
        milestones,
        posterName,
      });

      const blob: Blob | null = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob) return;

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${posterName.trim() || "ชีวิตเป็นสัปดาห์"}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } finally {
      setIsRendering(false);
    }
  }

  return (
    <div className="export-buttons no-print">
      <input
        type="text"
        className="text-input"
        placeholder="ชื่อบนโปสเตอร์ (ไม่บังคับ)"
        value={posterName}
        onChange={(e) => onPosterNameChange(e.target.value)}
        maxLength={40}
        aria-label="ชื่อบนโปสเตอร์"
      />
      <div className="export-buttons-row">
        <button type="button" className="secondary-btn" onClick={handleDownload} disabled={isRendering}>
          {isRendering ? "กำลังสร้างภาพ..." : "ดาวน์โหลด PNG"}
        </button>
        <button type="button" className="secondary-btn" onClick={() => window.print()}>
          พิมพ์
        </button>
      </div>
    </div>
  );
}
