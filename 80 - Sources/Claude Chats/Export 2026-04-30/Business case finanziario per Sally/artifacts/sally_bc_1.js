const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "HeyAI";
pres.title = "Sally — Business Case Sintesi Consolidata";

const BG = "111118";
const PURPLE = "9B8EC8";
const PURPLE_DARK = "2A2540";
const GREEN_DARK = "1E3A1E";
const GREEN_ACCENT = "2D5A2D";
const WHITE = "FFFFFF";
const GRAY_TEXT = "C0C0CC";
const GRAY_DIM = "888899";
const CELL_BG = "1C1C28";
const CELL_BG_ALT = "22222E";
const BORDER_COLOR = "333344";

let slide = pres.addSlide();
slide.background = { color: BG };

// --- Title ---
slide.addText("Business Case — Sintesi Consolidata", {
  x: 0.5, y: 0.18, w: 7, h: 0.5,
  fontSize: 26, fontFace: "Calibri", bold: true, color: WHITE, margin: 0
});

slide.addText("Sally — Agente AI Standalone", {
  x: 0.5, y: 0.62, w: 5, h: 0.22,
  fontSize: 12, fontFace: "Calibri", color: GRAY_DIM, margin: 0
});

// --- Main Table ---
const tblX = 0.5;
const tblY = 0.92;
const colW = [2.4, 1.3, 1.3, 1.8];

const hOpts = (align) => ({ fill: { color: PURPLE_DARK }, color: PURPLE, bold: true, fontSize: 9.5, fontFace: "Calibri", align: align || "center", valign: "middle" });
const cL = (bg) => ({ fill: { color: bg }, color: WHITE, fontSize: 9.5, fontFace: "Calibri", align: "left", valign: "middle" });
const cC = (bg) => ({ fill: { color: bg }, color: WHITE, fontSize: 9.5, fontFace: "Calibri", align: "center", valign: "middle" });

const rows = [
  [
    { text: "Area di miglioramento", options: hOpts("left") },
    { text: "Ore impiegate\nsenza AI", options: hOpts() },
    { text: "Ore impiegate\ncon AI", options: hOpts() },
    { text: "Delta", options: hOpts() }
  ]
];

const data = [
  ["Q&A aziendale — rispondenti", "828", "256", "572"],
  ["Q&A aziendale — richiedenti", "1.152", "461", "691"],
  ["Compilazione documenti e form", "360", "162", "198"],
  ["Policy e procedure", "105", "63", "42"],
  ["Onboarding nuovi assunti", "600", "390", "210"],
  ["Email-to-action / Audio-to-action", "1.027", "411", "616"]
];

data.forEach((r, i) => {
  const bg = i % 2 === 0 ? CELL_BG : CELL_BG_ALT;
  rows.push([
    { text: r[0], options: cL(bg) },
    { text: r[1], options: cC(bg) },
    { text: r[2], options: cC(bg) },
    { text: r[3], options: cC(bg) }
  ]);
});

const tBold = (bg, align) => ({ fill: { color: bg }, color: WHITE, bold: true, fontSize: 9.5, fontFace: "Calibri", align: align || "center", valign: "middle" });
rows.push([
  { text: "TOTALE (scenario realistico 85%)", options: tBold(GREEN_DARK, "left") },
  { text: "4.072", options: tBold(GREEN_DARK) },
  { text: "2.092", options: tBold(GREEN_DARK) },
  { text: "€77.486/anno\n(1,15 FTE)", options: { fill: { color: GREEN_ACCENT }, color: WHITE, bold: true, fontSize: 10.5, fontFace: "Calibri", align: "center", valign: "middle" } }
]);

slide.addTable(rows, {
  x: tblX, y: tblY, w: 6.8, colW,
  rowH: [0.4, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.42],
  border: { pt: 0.5, color: BORDER_COLOR },
  margin: [3, 6, 3, 6]
});

// --- Financial Summary Table ---
const finY = tblY + 2.78;
const fH = (a) => ({ fill: { color: PURPLE_DARK }, color: PURPLE, bold: true, fontSize: 9.5, fontFace: "Calibri", align: "center", valign: "middle" });
const fC = { fill: { color: CELL_BG }, color: WHITE, fontSize: 10.5, fontFace: "Calibri", align: "center", valign: "middle", bold: true };

slide.addTable([
  [
    { text: "Investimento", options: fH() },
    { text: "Impatto Economico AI", options: fH() },
    { text: "ROI (2 anni)", options: fH() },
    { text: "Payback Period", options: fH() }
  ],
  [
    { text: "€85.000", options: { ...fC } },
    { text: "€77.486 / anno", options: { ...fC } },
    { text: "+45%", options: { fill: { color: CELL_BG }, color: "66CC88", fontSize: 10.5, fontFace: "Calibri", align: "center", valign: "middle", bold: true } },
    { text: "~18 mesi", options: { ...fC } }
  ]
], {
  x: tblX, y: finY, w: 6.8, colW: [1.7, 1.7, 1.7, 1.7],
  rowH: [0.35, 0.35],
  border: { pt: 0.5, color: BORDER_COLOR },
  margin: [3, 6, 3, 6]
});

// --- Assumptions (right side) ---
const assX = 7.55;
slide.addText("Assunzioni", {
  x: assX, y: 0.92, w: 2.2, h: 0.35,
  fontSize: 15, fontFace: "Calibri", bold: true, color: WHITE, margin: 0
});

const assumptions = [
  { text: "Costo orario blend: €35/h", options: { breakLine: true, fontSize: 8, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Formula: RAL × 1,40 / 1.720h", options: { breakLine: true, fontSize: 8, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Scenario realistico: 85% del teorico", options: { breakLine: true, fontSize: 8, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "48 settimane / 220 giorni lavorativi", options: { breakLine: true, fontSize: 8, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Curva adozione Anno 1: ~67%", options: { breakLine: true, fontSize: 8, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Cost avoidance: vs 50 licenze ChatGPT (€8.700/a)", options: { breakLine: true, fontSize: 8, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Email-to-action: 2 input/gg, 3 min risparmiati", options: { breakLine: true, fontSize: 8, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Q&A richiedenti: 5,5% benchmark McKinsey", options: { fontSize: 8, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } }
];

slide.addText(assumptions, {
  x: assX, y: 1.3, w: 2.25, h: 2.4,
  valign: "top", lineSpacingMultiple: 1.15
});

// --- Take Away ---
const taY = finY + 0.9;

slide.addText("Take Away", {
  x: 0.5, y: taY, w: 3, h: 0.3,
  fontSize: 15, fontFace: "Calibri", bold: true, color: WHITE, margin: 0
});

const takeaways = [
  { text: "€77.500/anno di beneficio a regime — investimento recuperato in 18 mesi, ROI +45% a 2 anni", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Stime ultra-conservative: parametri email-to-action rivisti al ribasso, Q&A al 5,5% del benchmark McKinsey", options: { breakLine: true, fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } },
  { text: "Valore qualitativo non quantificato: eliminazione single point of failure (Marco Merli), audit readiness, democratizzazione AI", options: { fontSize: 8.5, color: GRAY_TEXT, fontFace: "Calibri", bullet: true } }
];

slide.addText(takeaways, {
  x: 0.5, y: taY + 0.3, w: 9.2, h: 0.8,
  valign: "top", lineSpacingMultiple: 1.1
});

pres.writeFile({ fileName: "/home/claude/sally_bc.pptx" })
  .then(() => console.log("Done"))
  .catch(err => console.error(err));