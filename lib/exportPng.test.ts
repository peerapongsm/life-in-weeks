import { describe, it, expect } from "vitest";
import { computePosterLayout, POSTER_WIDTH, POSTER_HEIGHT } from "./exportPng";

describe("computePosterLayout", () => {
  it("fits the grid within the canvas bounds", () => {
    const layout = computePosterLayout(77);
    expect(layout.startX).toBeGreaterThanOrEqual(0);
    expect(layout.startY).toBeGreaterThanOrEqual(0);
    const gridWidth = layout.cols * (layout.cellSize + layout.gap) - layout.gap;
    const gridHeight = layout.rows * (layout.cellSize + layout.gap) - layout.gap;
    expect(layout.startX + gridWidth).toBeLessThanOrEqual(POSTER_WIDTH + 0.01);
    expect(layout.startY + gridHeight).toBeLessThanOrEqual(POSTER_HEIGHT + 0.01);
  });

  it("centers the grid horizontally", () => {
    const layout = computePosterLayout(77);
    const gridWidth = layout.cols * (layout.cellSize + layout.gap) - layout.gap;
    const rightMargin = POSTER_WIDTH - (layout.startX + gridWidth);
    expect(rightMargin).toBeCloseTo(layout.startX, 1);
  });

  it("produces a smaller cell size for more rows", () => {
    const few = computePosterLayout(40);
    const many = computePosterLayout(90);
    expect(many.cellSize).toBeLessThan(few.cellSize);
  });

  it("always has 52 columns", () => {
    expect(computePosterLayout(60).cols).toBe(52);
  });
});
