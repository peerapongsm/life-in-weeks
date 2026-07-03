import { getWeeksInfo, totalWeeksForLifeExpectancy } from "./weeks";
import { getBandForAge, milestoneToGridPosition, type Milestone } from "./milestones";
import { formatThaiDate } from "./fmt";

export const POSTER_WIDTH = 2480;
export const POSTER_HEIGHT = 3508;
const COLS = 52;
const GAP_RATIO = 0.12;

export interface PosterLayout {
  cellSize: number;
  gap: number;
  startX: number;
  startY: number;
  cols: number;
  rows: number;
}

export function computePosterLayout(
  rows: number,
  opts?: { marginX?: number; marginTop?: number; marginBottom?: number }
): PosterLayout {
  const marginX = opts?.marginX ?? 170;
  const marginTop = opts?.marginTop ?? 620;
  const marginBottom = opts?.marginBottom ?? 260;

  const usableWidth = POSTER_WIDTH - marginX * 2;
  const usableHeight = POSTER_HEIGHT - marginTop - marginBottom;

  const cellFromWidth = usableWidth / (COLS * (1 + GAP_RATIO) - GAP_RATIO);
  const cellFromHeight = usableHeight / (rows * (1 + GAP_RATIO) - GAP_RATIO);
  const cellSize = Math.min(cellFromWidth, cellFromHeight);
  const gap = cellSize * GAP_RATIO;

  const gridWidth = COLS * (cellSize + gap) - gap;
  const gridHeight = rows * (cellSize + gap) - gap;

  const startX = (POSTER_WIDTH - gridWidth) / 2;
  const startY = marginTop + (usableHeight - gridHeight) / 2;

  return { cellSize, gap, startX, startY, cols: COLS, rows };
}

export interface RenderPosterOptions {
  birthDate: Date;
  today: Date;
  lifeExpectancyYears: number;
  includeUniversity: boolean;
  milestones: Milestone[];
  posterName?: string;
}

const COLORS = {
  bg: "#fdfaf3",
  ink: "#221d16",
  inkSoft: "#726a5b",
  line: "#ddd2ba",
  accent: "#b8391b",
  cellFuture: "#eae2d1",
  band: "rgba(184, 57, 27, 0.07)",
};

const FONT_DISPLAY = "Trirong";
const FONT_BODY = "IBM Plex Sans Thai";

/** Draws the full poster onto a canvas 2D context. Browser-only. */
export function renderPosterToCanvas(ctx: CanvasRenderingContext2D, options: RenderPosterOptions): void {
  const { birthDate, today, lifeExpectancyYears, includeUniversity, milestones, posterName } = options;

  ctx.fillStyle = COLORS.bg;
  ctx.fillRect(0, 0, POSTER_WIDTH, POSTER_HEIGHT);

  const { currentWeekIndex, weeksLived } = getWeeksInfo(birthDate, today);
  const totalWeeks = totalWeeksForLifeExpectancy(lifeExpectancyYears);
  const totalRows = Math.ceil(totalWeeks / COLS);

  // Header — eyebrow, display-serif title, tabular stat line, hairline rule.
  ctx.fillStyle = COLORS.accent;
  ctx.textAlign = "center";
  ctx.font = `600 30px "${FONT_BODY}", sans-serif`;
  ctx.fillText("ชีวิตเป็นสัปดาห์", POSTER_WIDTH / 2, 150);

  ctx.fillStyle = COLORS.ink;
  ctx.font = `700 108px "${FONT_DISPLAY}", serif`;
  ctx.fillText(posterName?.trim() || "ตารางชีวิตของฉัน", POSTER_WIDTH / 2, 270);

  ctx.font = `600 38px "${FONT_BODY}", sans-serif`;
  ctx.fillStyle = COLORS.ink;
  const percent = ((weeksLived / totalWeeks) * 100).toFixed(1);
  ctx.fillText(
    `${weeksLived.toLocaleString("th-TH")} สัปดาห์ผ่านไปแล้ว · ${percent}% ของชีวิตที่คาดว่าจะได้ใช้`,
    POSTER_WIDTH / 2,
    345
  );
  ctx.font = `400 30px "${FONT_BODY}", sans-serif`;
  ctx.fillStyle = COLORS.inkSoft;
  ctx.fillText(`ณ วันที่ ${formatThaiDate(today)}`, POSTER_WIDTH / 2, 395);

  ctx.strokeStyle = COLORS.line;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(POSTER_WIDTH / 2 - 220, 440);
  ctx.lineTo(POSTER_WIDTH / 2 + 220, 440);
  ctx.stroke();

  // Milestone lookup
  const milestonesByWeek = new Map<number, boolean>();
  for (const m of milestones) {
    const { weekIndex } = milestoneToGridPosition(birthDate, new Date(m.date + "T00:00:00Z"));
    milestonesByWeek.set(weekIndex, true);
  }

  const layout = computePosterLayout(totalRows);

  // Life-stage band tints, drawn per row before the cells.
  for (let row = 0; row < totalRows; row++) {
    const band = getBandForAge(row, includeUniversity);
    if (!band) continue;
    const y = layout.startY + row * (layout.cellSize + layout.gap);
    ctx.fillStyle = COLORS.band;
    ctx.fillRect(layout.startX - layout.gap, y - layout.gap / 2, layout.cols * (layout.cellSize + layout.gap), layout.cellSize + layout.gap);
  }

  // Cells
  for (let row = 0; row < totalRows; row++) {
    for (let col = 0; col < COLS; col++) {
      const weekIndex = row * COLS + col;
      if (weekIndex >= totalWeeks) continue;
      const x = layout.startX + col * (layout.cellSize + layout.gap);
      const y = layout.startY + row * (layout.cellSize + layout.gap);

      if (weekIndex < currentWeekIndex) {
        ctx.fillStyle = COLORS.ink;
      } else if (weekIndex === currentWeekIndex) {
        ctx.fillStyle = COLORS.accent;
      } else {
        ctx.fillStyle = COLORS.cellFuture;
      }
      ctx.fillRect(x, y, layout.cellSize, layout.cellSize);

      if (milestonesByWeek.has(weekIndex)) {
        ctx.strokeStyle = COLORS.accent;
        ctx.lineWidth = Math.max(2, layout.cellSize * 0.12);
        ctx.strokeRect(x, y, layout.cellSize, layout.cellSize);
      }
    }
  }

  // Footer disclaimer
  ctx.fillStyle = COLORS.inkSoft;
  ctx.font = `400 26px "${FONT_BODY}", sans-serif`;
  ctx.fillText(
    "อายุคาดเฉลี่ยเป็นค่าเฉลี่ยระดับประชากร ไม่ใช่คำทำนายของบุคคลใดบุคคลหนึ่ง — สร้างจาก ชีวิตเป็นสัปดาห์ (life-in-weeks)",
    POSTER_WIDTH / 2,
    POSTER_HEIGHT - 100
  );
}
