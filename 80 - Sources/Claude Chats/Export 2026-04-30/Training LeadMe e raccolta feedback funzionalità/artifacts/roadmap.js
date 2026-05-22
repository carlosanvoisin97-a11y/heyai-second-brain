const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "HeyAI S.r.l.";
pres.title = "Roadmap di Sviluppo 2026";

const slide = pres.addSlide();
slide.background = { color: "111318" };

// === COLORS ===
const GREEN = "4ADE80";
const ORANGE = "FB923C";
const PURPLE = "A78BFA";
const WHITE = "FFFFFF";
const GRAY = "9CA3AF";
const LIGHT_GRAY = "6B7280";
const DARK_BG = "111318";
const RED_LINE = "EF4444";

// === DIMENSIONS ===
const CHART_LEFT = 2.2;
const CHART_RIGHT = 9.6;
const CHART_WIDTH = CHART_RIGHT - CHART_LEFT;
const CHART_TOP = 1.35;
const ROW_H = 0.34;
const BAR_H = 0.22;
const GAP_SECTION = 0.12;

// Months: MAR=0, APR=1, MAG=2, GIU=3, LUG=4, AGO=5, SET=6, OTT=7
const MONTHS = ["MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT"];
const MONTH_W = CHART_WIDTH / 8;

function monthX(m) { return CHART_LEFT + m * MONTH_W; }
function monthXf(frac) { return CHART_LEFT + frac * MONTH_W; }

// === TITLE ===
slide.addText("Roadmap di Sviluppo — 2026", {
  x: 0.5, y: 0.2, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Arial", bold: true, color: WHITE, margin: 0
});
slide.addText("Timeline indicativa con rilasci incrementali. Partenza prevista: ultima settimana di marzo 2026.", {
  x: 0.5, y: 0.68, w: 9, h: 0.3,
  fontSize: 11, fontFace: "Arial", color: GRAY, margin: 0
});

// === MONTH HEADERS ===
for (let i = 0; i < 8; i++) {
  slide.addText(MONTHS[i], {
    x: monthX(i), y: 1.05, w: MONTH_W, h: 0.25,
    fontSize: 9, fontFace: "Arial", color: GRAY, align: "left", margin: 0
  });
  // Vertical grid line (subtle)
  slide.addShape(pres.shapes.LINE, {
    x: monthX(i), y: 1.3, w: 0, h: 3.6,
    line: { color: "2A2D35", width: 0.5 }
  });
}

// === 15/04 RED LINE ===
const apr15x = monthX(1) + MONTH_W * 0.5; // mid-April
slide.addShape(pres.shapes.LINE, {
  x: apr15x, y: 1.15, w: 0, h: 3.75,
  line: { color: RED_LINE, width: 1.2, dashType: "solid" }
});
slide.addText("15/04", {
  x: apr15x - 0.2, y: 1.0, w: 0.4, h: 0.18,
  fontSize: 7, fontFace: "Arial", color: RED_LINE, align: "center", margin: 0
});

// === HELPER: draw Gantt bar ===
function drawBar(label, startMonth, endMonth, color, yPos, milestones) {
  const x1 = monthXf(startMonth);
  const x2 = monthXf(endMonth);
  const barW = x2 - x1;
  
  // Label
  slide.addText(label, {
    x: 0.5, y: yPos - 0.02, w: 1.6, h: BAR_H + 0.04,
    fontSize: 10, fontFace: "Arial", color: WHITE, align: "right", valign: "middle", margin: 0
  });
  
  // Bar (rounded)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: x1, y: yPos, w: barW, h: BAR_H,
    fill: { color: color, transparency: 15 },
    rectRadius: 0.05,
    line: { color: color, width: 0 }
  });
  
  // Milestones (diamonds)
  if (milestones) {
    for (const m of milestones) {
      const mx = monthXf(m.pos);
      // Diamond shape using rotated rectangle
      slide.addShape(pres.shapes.RECTANGLE, {
        x: mx - 0.065, y: yPos + BAR_H/2 - 0.065, w: 0.13, h: 0.13,
        fill: { color: m.fill || WHITE },
        rotate: 45,
        line: { color: color, width: 0 }
      });
    }
  }
}

// === PRIORITY LABELS ===
let y = CHART_TOP;

// PRIORITÀ 1
slide.addText("PRIORITÀ 1", {
  x: 0.5, y: y - 0.22, w: 1.6, h: 0.2,
  fontSize: 8, fontFace: "Arial", bold: true, color: GREEN, align: "left", margin: 0
});

// Venue Finder: MAR → mid-APR, milestones at mid-MAR (avvio), end-MAR (MVP), mid-APR (consegna)
drawBar("Venue Finder", 0, 1.7, GREEN, y, [
  { pos: 0.8, fill: GREEN },
  { pos: 1.55, fill: WHITE }
]);
y += ROW_H;

// LeadMe Effic.: MAR → mid-APR
drawBar("LeadMe Effic.", 0, 1.5, GREEN, y, [
  { pos: 0.6, fill: GREEN },
  { pos: 1.35, fill: WHITE }
]);
y += ROW_H;

// Minutes Ext.: MAR → late APR
drawBar("Minutes Ext.", 0, 1.8, GREEN, y, [
  { pos: 0.6, fill: GREEN },
  { pos: 1.6, fill: WHITE }
]);
y += ROW_H + GAP_SECTION;

// PRIORITÀ 2
slide.addText("PRIORITÀ 2", {
  x: 0.5, y: y - 0.22, w: 1.6, h: 0.2,
  fontSize: 8, fontFace: "Arial", bold: true, color: ORANGE, align: "left", margin: 0
});

// Link Gestionale: APR → AGO
drawBar("Link Gestionale", 1, 5.5, ORANGE, y, [
  { pos: 2.8, fill: ORANGE },
  { pos: 5.3, fill: WHITE }
]);
y += ROW_H;

// Crowd Incassi: MAG → GIU
drawBar("Crowd Incassi", 2.2, 3.8, ORANGE, y, [
  { pos: 3.5, fill: WHITE }
]);
y += ROW_H;

// Flow MVP: MAG → LUG
drawBar("Flow MVP", 2, 5, ORANGE, y, [
  { pos: 3.2, fill: ORANGE },
  { pos: 4.7, fill: WHITE }
]);
y += ROW_H + GAP_SECTION;

// PRIORITÀ 3
slide.addText("PRIORITÀ 3", {
  x: 0.5, y: y - 0.22, w: 1.6, h: 0.2,
  fontSize: 8, fontFace: "Arial", bold: true, color: PURPLE, align: "left", margin: 0
});

// OnSite App: LUG → SET
drawBar("OnSite App", 4.2, 7, PURPLE, y, [
  { pos: 5.5, fill: PURPLE },
  { pos: 6.8, fill: WHITE }
]);
y += ROW_H;

// Sally 360°: MAG → OTT (trasversale)
drawBar("Sally 360°", 2, 8, PURPLE, y, [
  { pos: 4.5, fill: PURPLE },
  { pos: 7.8, fill: WHITE }
]);

// === LEGEND ===
const legY = 4.3;
const legFS = 8;

// Color bars in legend
const legends = [
  { label: "Priorità 1 — partenza immediata", color: GREEN, x: 0.5 },
  { label: "Priorità 2 — strategiche", color: ORANGE, x: 3.5 },
  { label: "Priorità 3 — a seguire", color: PURPLE, x: 6.2 },
];
for (const l of legends) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: l.x, y: legY, w: 0.7, h: 0.16,
    fill: { color: l.color, transparency: 15 },
    rectRadius: 0.04
  });
  slide.addText(l.label, {
    x: l.x + 0.8, y: legY - 0.02, w: 2.2, h: 0.2,
    fontSize: legFS, fontFace: "Arial", color: GRAY, margin: 0
  });
}

// Milestone legend
const mlegY = legY + 0.35;
// Triangle (avvio)
slide.addText("▸ = avvio progetto", {
  x: 0.5, y: mlegY, w: 1.5, h: 0.18,
  fontSize: 7, fontFace: "Arial", color: LIGHT_GRAY, margin: 0
});
// Diamond colored (MVP)
slide.addText("◆ = rilascio MVP", {
  x: 2.2, y: mlegY, w: 1.5, h: 0.18,
  fontSize: 7, fontFace: "Arial", color: LIGHT_GRAY, margin: 0
});
// Diamond white (consegna)
slide.addText("◇ = consegna finale", {
  x: 3.9, y: mlegY, w: 1.5, h: 0.18,
  fontSize: 7, fontFace: "Arial", color: LIGHT_GRAY, margin: 0
});

// Sally note (italic)
slide.addText("Sally è trasversale a tutti gli applicativi: parte subito e cresce con ogni rilascio, completandosi con l'ultimo modulo.", {
  x: 0.5, y: mlegY + 0.28, w: 8, h: 0.2,
  fontSize: 7.5, fontFace: "Arial", italic: true, color: LIGHT_GRAY, margin: 0
});

// === FOOTER ===
slide.addText("Timeline indicativa soggetta a validazione tecnica. Rilasci incrementali con test utente tra le fasi.", {
  x: 0.5, y: 5.25, w: 7, h: 0.2,
  fontSize: 7, fontFace: "Arial", color: "4B5563", margin: 0
});

// HeyAI logo text (bottom right)
slide.addText("HeyAI", {
  x: 8.5, y: 5.2, w: 1.2, h: 0.3,
  fontSize: 14, fontFace: "Arial", bold: true, color: WHITE, align: "right", margin: 0
});

pres.writeFile({ fileName: "/home/claude/Roadmap_2026.pptx" }).then(() => {
  console.log("Done");
});