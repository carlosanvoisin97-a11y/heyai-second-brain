const pptxgen = require("pptxgenjs");
const fs = require("fs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "HeyAI";
pres.title = "Sally — Business Case Sintesi Consolidata";

// --- Colors ---
const BG = "111118";
const PURPLE = "9B8EC8";
const PURPLE_DARK = "2A2540";
const GREEN_DARK = "1E3A1E";
const GREEN_ACCENT = "2D5A2D";
const WHITE = "FFFFFF";
const GRAY_TEXT = "CCCCCC";
const GRAY_DIM = "888899";
const CELL_BG = "1C1C28";
const CELL_BG_ALT = "22222E";
const BORDER_COLOR = "333344";

let slide = pres.addSlide();
slide.background = { color: BG };

// --- Title ---
slide.addText("Business Case — Sintesi Consolidata", {
  x: 0.5, y: 0.2, w: 7, h: 0.55,
  fontSize: 26, fontFace: "Calibri", bold: true, color: WHITE, margin: 0
});

slide.addText("Sally — Agente AI Standalone", {
  x: 0.5, y: 0.7, w: 5, h: 0.3,
  fontSize: 13, fontFace: "Calibri", color: GRAY_DIM, margin: 0
});

// --- Main Table: Areas ---
const tblX = 0.5;
const tblY = 1.1;
const tblW = 6.8;
const colW = [2.4, 1.3, 1.3, 1.8];

const headerOpts = { fill: { color: PURPLE_DARK }, color: PURPLE, bold: true, fontSize: 10, fontFace: "Calibri", align: "center", valign: "middle" };
const cellOpts = (bg) => ({ fill: { color: bg }, color: WHITE, fontSize: 10, fontFace: "Calibri", valign: "middle" });
const cellCenter = (bg) => ({ ...cellOpts(bg), align: "center" });
const cellLeft = (bg) => ({ ...cellOpts(bg), align: "left" });

const headerRow = [
  { text: "Area di miglioramento", options: { ...headerOpts, align: "left" } },
  { text: "Ore impiegate\nsenza AI", options: headerOpts },
  { text: "Ore impiegate\ncon AI", options: headerOpts },
  { text: "Delta", options: headerOpts }
];

const dataRows = [
  { area: "Q&A aziendale — rispondenti", before: "828", after: "256", delta: "572" },
  { area: "Q&A aziendale — richiedenti", before: "1.152", after: "461", delta: "691" },
  { area: "Compilazione documenti e form", before: "360", after: "162", delta: "198" },
  { area: "Policy e procedure", before: "105", after: "63", delta: "42" },
  { area: "Onboarding nuovi assunti", before: "600", after: "390", delta: "210" },
  { area: "Email-to-action / Audio-to-action", before: "1.027", after: "411", delta: "616" }
];

let tableData = [headerRow];
dataRows.forEach((row, i) => {
  const bg = i % 2 === 0 ? CELL_BG : CELL_BG_ALT;
  tableData.push([
    { text: row.area, options: cellLeft(bg) },
    { text: row.before, options: cellCenter(bg) },
    { text: row.after, options: cellCenter(bg) },
    { text: row.delta, options: cellCenter(bg) }
  ]);
});

// Total row
tableData.push([
  { text: "TOTALE (scenario realistico 85%)", options: { fill: { color: GREEN_DARK }, color: WHITE, bold: true, fontSize: 10, fontFace: "Calibri", align: "left", valign: "middle" } },
  { text: "4.072", options: { fill: { color: GREEN_DARK }, color: WHITE, bold: true, fontSize: 10, fontFace: "Calibri", align: "center", valign: "middle" } },
  { text: "2.092", options: { fill: { color: GREEN_DARK }, color: WHITE, bold: true, fontSize: 10, fontFace: "Calibri", align: "center", valign: "middle" } },
  { text: "€77.486/anno\n(1,15 FTE)", options: { fill: { color: GREEN_ACCENT }, color: WHITE, bold: true, fontSize: 11, fontFace: "Calibri", align: "center", valign: "middle" } }
]);

slide.addTable(tableData, {
  x: tblX, y: tblY, w: tblW, colW: colW,
  rowH: [0.45, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.5],
  border: { pt: 0.5, color: BORDER_COLOR },
  margin: [4, 6, 4, 6]
});

// --- Financial Summary Table ---
const finY = tblY + 3.45;
const finHeaderOpts = { fill: { color: PURPLE_DARK }, color: PURPLE, bold: true, fontSize: 10, fontFace: "Calibri", align: "center", valign: "middle" };
const finCellOpts = { fill: { color: CELL_BG }, color: WHITE, fontSize: 11, fontFace: "Calibri", align: "center", valign: "middle", bold: true };

const finTable = [
  [
    { text: "Investimento", options: finHeaderOpts },
    { text: "Impatto Economico AI", options: finHeaderOpts },
    { text: "ROI (2 anni)", options: finHeaderOpts },
    { text: "Payback Period", options: finHeaderOpts }
  ],
  [
    { text: "€85.000", options: finCellOpts },
    { text: "€77.486 / anno", options: finCellOpts },
    { text: "+45%", options: { ...finCellOpts, color: "66CC88" } },
    { text: "~18 mesi", options: finCellOpts }
  ]
];

slide.addTable(finTable, {
  x: tblX, y: finY, w: tblW, colW: [1.7, 1.7, 1.7, 1.7],
  rowH: [0.4, 0.4],
  border: { pt: 0.5, color: BORDER_COLOR },
  margin: [4, 6, 4, 6]
});

// --- Assumptions Box (right side) ---
const assX = 7.6;
const assY = 1.1;
const assW = 2.2;

slide.addText("Assunzioni", {
  x: assX, y: assY, w: assW, h: 0.4,
  fontSize: 16, fontFace: "Calibri", bold: true, color: WHITE, margin: 0
});

const assumptions = [
  { text: "Costo orario blend: €35/h", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Formula: RAL × 1,40 / 1.720h", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Scenario realistico: 85% del teorico", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "48 settimane / 220 giorni lavorativi", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Curva adozione Anno 1: ~67%", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Cost avoidance: vs 50 licenze ChatGPT (€8.700/anno)", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Email-to-action: 2 input/gg, 3 min risparmiati", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Q&A richiedenti: 5,5% del benchmark McKinsey", options: { fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } }
];

slide.addText(assumptions, {
  x: assX, y: assY + 0.45, w: assW, h: 2.8,
  valign: "top", lineSpacingMultiple: 1.3
});

// --- Take Away ---
const taY = finY + 1.05;

slide.addText("Take Away", {
  x: 0.5, y: taY, w: 4, h: 0.35,
  fontSize: 16, fontFace: "Calibri", bold: true, color: WHITE, margin: 0
});

const takeaways = [
  { text: "€77.500/anno di beneficio a regime — investimento recuperato in 18 mesi con ROI +45% a 2 anni", options: { breakLine: true, fontSize: 9, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Stime ultra-conservative: parametri Email-to-action rivisti al ribasso, Q&A al 5,5% del benchmark McKinsey", options: { breakLine: true, fontSize: 9, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Valore qualitativo non quantificato: eliminazione single point of failure (Marco Merli), audit readiness, democratizzazione AI", options: { fontSize: 9, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } }
];

slide.addText(takeaways, {
  x: 0.5, y: taY + 0.35, w: 9.2, h: 0.85,
  valign: "top", lineSpacingMultiple: 1.2
});

// --- Save ---
pres.writeFile({ fileName: "/home/claude/sally_bc.pptx" })
  .then(() => console.log("Done"))
  .catch(err => console.error(err));