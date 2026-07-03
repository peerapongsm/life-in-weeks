import { MAX_MILESTONES, type Milestone } from "./milestones";
import { DEFAULT_SETTINGS, type AppSettings } from "./settings";

const STORAGE_KEY = "life-in-weeks:milestones";
const SETTINGS_KEY = "life-in-weeks:settings";

function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function loadMilestones(): Milestone[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(0, MAX_MILESTONES);
  } catch {
    return [];
  }
}

export function saveMilestones(milestones: Milestone[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(milestones.slice(0, MAX_MILESTONES)));
}

export function addMilestone(existing: Milestone[], milestone: Omit<Milestone, "id">): Milestone[] {
  if (existing.length >= MAX_MILESTONES) return existing;
  return [...existing, { ...milestone, id: generateId() }];
}

export function removeMilestone(existing: Milestone[], id: string): Milestone[] {
  return existing.filter((m) => m.id !== id);
}

export function updateMilestone(existing: Milestone[], id: string, patch: Partial<Omit<Milestone, "id">>): Milestone[] {
  return existing.map((m) => (m.id === id ? { ...m, ...patch } : m));
}

export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: AppSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
