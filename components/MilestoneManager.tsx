"use client";

import { useState } from "react";
import DateField from "./DateField";
import { MAX_MILESTONES, type Milestone } from "@/lib/milestones";

interface MilestoneManagerProps {
  milestones: Milestone[];
  onAdd: (milestone: { label: string; date: string }) => void;
  onRemove: (id: string) => void;
  onUpdate: (id: string, patch: { label?: string; date?: string }) => void;
}

export default function MilestoneManager({ milestones, onAdd, onRemove, onUpdate }: MilestoneManagerProps) {
  const [label, setLabel] = useState("");
  const [date, setDate] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const atLimit = milestones.length >= MAX_MILESTONES;

  function handleAdd() {
    if (!label.trim() || !date || atLimit) return;
    onAdd({ label: label.trim(), date });
    setLabel("");
    setDate(null);
  }

  return (
    <div className="milestone-manager">
      <h2>เหตุการณ์สำคัญของคุณ</h2>
      <p className="section-hint">
        เพิ่มวันสำคัญ เช่น วันแต่งงาน วันลูกเกิด แล้วจะมีจุดมาร์คไว้บนตาราง (สูงสุด {MAX_MILESTONES} รายการ, เก็บในเครื่องเท่านั้น)
      </p>

      <div className="milestone-form">
        <input
          type="text"
          className="text-input"
          placeholder="ชื่อเหตุการณ์ เช่น แต่งงาน"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          maxLength={60}
          aria-label="ชื่อเหตุการณ์"
        />
        <DateField label="วันที่" value={date} onChange={setDate} />
        <button type="button" className="secondary-btn" onClick={handleAdd} disabled={!label.trim() || !date || atLimit}>
          {atLimit ? `ครบ ${MAX_MILESTONES} รายการแล้ว` : "เพิ่มเหตุการณ์"}
        </button>
      </div>

      {milestones.length > 0 && (
        <ul className="milestone-list">
          {milestones.map((m) => (
            <li key={m.id} className="milestone-list-item">
              {editingId === m.id ? (
                <>
                  <input
                    type="text"
                    className="text-input"
                    value={m.label}
                    onChange={(e) => onUpdate(m.id, { label: e.target.value })}
                    maxLength={60}
                    aria-label="แก้ไขชื่อเหตุการณ์"
                  />
                  <DateField label="วันที่" value={m.date} onChange={(iso) => onUpdate(m.id, { date: iso })} />
                  <button type="button" className="secondary-btn" onClick={() => setEditingId(null)}>
                    เสร็จ
                  </button>
                </>
              ) : (
                <>
                  <span className="milestone-list-text">
                    {m.label} — {m.date}
                  </span>
                  <button type="button" className="text-btn" onClick={() => setEditingId(m.id)}>
                    แก้ไข
                  </button>
                  <button type="button" className="text-btn text-btn-danger" onClick={() => onRemove(m.id)}>
                    ลบ
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
