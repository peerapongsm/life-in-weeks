import { describe, it, expect } from "vitest";
import { ceToBe, beToCe, formatThaiDate, THAI_MONTHS } from "./fmt";

describe("ceToBe / beToCe", () => {
  it("converts ค.ศ. to พ.ศ. by adding 543", () => {
    expect(ceToBe(2026)).toBe(2569);
    expect(ceToBe(2000)).toBe(2543);
  });

  it("converts พ.ศ. to ค.ศ. by subtracting 543", () => {
    expect(beToCe(2569)).toBe(2026);
    expect(beToCe(2543)).toBe(2000);
  });

  it("round-trips", () => {
    expect(beToCe(ceToBe(1995))).toBe(1995);
  });
});

describe("formatThaiDate", () => {
  it("formats a date with Thai month name and พ.ศ. year", () => {
    const d = new Date(Date.UTC(2026, 6, 3)); // 3 กรกฎาคม 2026
    expect(formatThaiDate(d)).toBe("3 กรกฎาคม 2569");
  });

  it("formats birthdate fixture", () => {
    const d = new Date(Date.UTC(2000, 0, 1));
    expect(formatThaiDate(d)).toBe("1 มกราคม 2543");
  });

  it("has 12 Thai month names", () => {
    expect(THAI_MONTHS).toHaveLength(12);
    expect(THAI_MONTHS[0]).toBe("มกราคม");
    expect(THAI_MONTHS[11]).toBe("ธันวาคม");
  });
});
