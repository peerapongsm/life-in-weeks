import { describe, it, expect, beforeEach } from "vitest";
import {
  loadMilestones,
  saveMilestones,
  addMilestone,
  removeMilestone,
  updateMilestone,
  loadSettings,
  saveSettings,
} from "./storage";
import { MAX_MILESTONES, type Milestone } from "./milestones";
import { DEFAULT_SETTINGS, type AppSettings } from "./settings";

beforeEach(() => {
  localStorage.clear();
});

describe("loadMilestones / saveMilestones", () => {
  it("returns an empty array when nothing is stored", () => {
    expect(loadMilestones()).toEqual([]);
  });

  it("round-trips milestones through localStorage", () => {
    const milestones: Milestone[] = [{ id: "1", label: "แต่งงาน", date: "2025-01-01" }];
    saveMilestones(milestones);
    expect(loadMilestones()).toEqual(milestones);
  });

  it("ignores corrupted JSON and returns an empty array", () => {
    localStorage.setItem("life-in-weeks:milestones", "not json");
    expect(loadMilestones()).toEqual([]);
  });

  it("truncates to MAX_MILESTONES on save", () => {
    const many: Milestone[] = Array.from({ length: 25 }, (_, i) => ({
      id: String(i),
      label: `event ${i}`,
      date: "2020-01-01",
    }));
    saveMilestones(many);
    expect(loadMilestones()).toHaveLength(MAX_MILESTONES);
  });
});

describe("addMilestone", () => {
  it("appends a new milestone with a generated id", () => {
    const result = addMilestone([], { label: "ลูกเกิด", date: "2024-06-01" });
    expect(result).toHaveLength(1);
    expect(result[0].label).toBe("ลูกเกิด");
    expect(result[0].id).toBeTruthy();
  });

  it("refuses to add beyond MAX_MILESTONES and returns the list unchanged", () => {
    const full: Milestone[] = Array.from({ length: MAX_MILESTONES }, (_, i) => ({
      id: String(i),
      label: `event ${i}`,
      date: "2020-01-01",
    }));
    const result = addMilestone(full, { label: "one too many", date: "2020-01-01" });
    expect(result).toHaveLength(MAX_MILESTONES);
    expect(result).toEqual(full);
  });
});

describe("removeMilestone", () => {
  it("removes the milestone with the matching id", () => {
    const list: Milestone[] = [
      { id: "a", label: "แต่งงาน", date: "2020-01-01" },
      { id: "b", label: "ลูกเกิด", date: "2022-01-01" },
    ];
    expect(removeMilestone(list, "a")).toEqual([list[1]]);
  });

  it("is a no-op when the id doesn't exist", () => {
    const list: Milestone[] = [{ id: "a", label: "แต่งงาน", date: "2020-01-01" }];
    expect(removeMilestone(list, "missing")).toEqual(list);
  });
});

describe("updateMilestone", () => {
  it("patches the matching milestone's fields", () => {
    const list: Milestone[] = [{ id: "a", label: "แต่งงาน", date: "2020-01-01" }];
    const result = updateMilestone(list, "a", { label: "วันแต่งงาน" });
    expect(result[0]).toEqual({ id: "a", label: "วันแต่งงาน", date: "2020-01-01" });
  });

  it("leaves other milestones untouched", () => {
    const list: Milestone[] = [
      { id: "a", label: "แต่งงาน", date: "2020-01-01" },
      { id: "b", label: "ลูกเกิด", date: "2022-01-01" },
    ];
    const result = updateMilestone(list, "a", { date: "2020-06-15" });
    expect(result[1]).toEqual(list[1]);
  });
});

describe("loadSettings / saveSettings", () => {
  it("returns defaults when nothing is stored", () => {
    expect(loadSettings()).toEqual(DEFAULT_SETTINGS);
  });

  it("round-trips settings through localStorage", () => {
    const settings: AppSettings = { ...DEFAULT_SETTINGS, birthDate: "2000-01-01", sex: "male" };
    saveSettings(settings);
    expect(loadSettings()).toEqual(settings);
  });

  it("ignores corrupted JSON and returns defaults", () => {
    localStorage.setItem("life-in-weeks:settings", "not json");
    expect(loadSettings()).toEqual(DEFAULT_SETTINGS);
  });

  it("fills in missing fields with defaults (forward-compatible)", () => {
    localStorage.setItem("life-in-weeks:settings", JSON.stringify({ birthDate: "2000-01-01" }));
    expect(loadSettings()).toEqual({ ...DEFAULT_SETTINGS, birthDate: "2000-01-01" });
  });

  it("migrates an old save (missing country/year/overrides/visitsPerYear) to sensible defaults", () => {
    // Simulates a save written before this feature existed: only the
    // original fields are present.
    const oldSave = {
      birthDate: "1990-05-15",
      sex: "female",
      includeUniversity: true,
      parentAge: 60,
      parentSex: "male",
      posterName: "แม่",
    };
    localStorage.setItem("life-in-weeks:settings", JSON.stringify(oldSave));
    const loaded = loadSettings();
    expect(loaded.country).toBe(DEFAULT_SETTINGS.country);
    expect(loaded.year).toBe(DEFAULT_SETTINGS.year);
    expect(loaded.lifeExpectancyOverride).toBeNull();
    expect(loaded.parentLifeExpectancyOverride).toBeNull();
    expect(loaded.visitsPerYear).toBe(DEFAULT_SETTINGS.visitsPerYear);
    // Old fields are preserved.
    expect(loaded.birthDate).toBe("1990-05-15");
    expect(loaded.parentAge).toBe(60);
  });
});
