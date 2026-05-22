const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "HeyAI";
pres.title = "Business Case - Pitch - Sintesi Consolidata";

// Colors matching the reference dark theme
const C = {
  bg: "111118",
  headerBg: "1E1E30",
  accent: "8B7EC8",     // violet/purple for headers
  accentLight: "A99ADB",
  cellBg: "1A1A28",
  cellBgAlt: "161622",
  green: "1B4D2E",
  greenLight: "2D6B42",
  white: "FFFFFF",
  gray: "AAAAAA",
  lightGray: "CCCCCC",
  darkGray: "888888",
  textMain: "E8E8E8",
};

const slide = pres.addSlide();
slide.background = { color: C.bg };

// ===== TITLE =====
slide.addText("Business Case - Sintesi Consolidata", {
  x: 0.5, y: 0.22, w: 7, h: 0.55,
  fontSize: 24, fontFace: "Arial Black", color: C.white, bold: true, margin: 0,
});

slide.addText("Pitch \u2014 Modulo Creativo", {
  x: 0.5, y: 0.7, w: 5, h: 0.3,
  fontSize: 12, fontFace: "Arial", color: C.darkGray, margin: 0,
});

// ===== MAIN TABLE =====
const mainTableX = 0.5;
const mainTableY = 1.15;
const mainTableW = 6.8;
const mainColW = [2.0, 1.5, 1.5, 1.8];

const hdrOpts = { fill: { color: C.headerBg }, color: C.accent, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle" };
const cellOpts = (opts = {}) => ({ fill: { color: opts.bg || C.cellBg }, color: opts.color || C.textMain, fontSize: 9.5, fontFace: "Arial", align: opts.align || "center", valign: "middle", bold: opts.bold || false });
const cellOptsLeft = (opts = {}) => ({ ...cellOpts(opts), align: "left" });

const mainTable = [
  // Header
  [
    { text: "Area di miglioramento", options: { ...hdrOpts, align: "left" } },
    { text: "Ore impiegate\nsenza AI", options: hdrOpts },
    { text: "Ore impiegate\ncon AI", options: hdrOpts },
    { text: "Delta", options: hdrOpts },
  ],
  // Row 1
  [
    { text: "Analisi strategica pre-proposta", options: cellOptsLeft() },
    { text: "600h", options: cellOpts() },
    { text: "75h", options: cellOpts() },
    { text: "-87,5%", options: cellOpts({ bold: true }) },
  ],
  // Row 2
  [
    { text: "Rework proposte duplicate", options: cellOptsLeft({ bg: C.cellBgAlt }) },
    { text: "396h", options: cellOpts({ bg: C.cellBgAlt }) },
    { text: "119h", options: cellOpts({ bg: C.cellBgAlt }) },
    { text: "-70%", options: cellOpts({ bg: C.cellBgAlt, bold: true }) },
  ],
  // Row 3
  [
    { text: "Produzione creativa unificata", options: cellOptsLeft() },
    { text: "1.025h", options: cellOpts() },
    { text: "0h", options: cellOpts() },
    { text: "-100%", options: cellOpts({ bold: true }) },
  ],
  // Totals row
  [
    { text: "", options: { fill: { color: C.green }, color: C.white, fontSize: 9.5, fontFace: "Arial", align: "left", valign: "middle", bold: true, colspan: 2 } },
    { text: "", options: { fill: { color: C.green } } },
    { text: "\u20ac67.600/anno\n(~1,06 FTE)", options: { fill: { color: C.green }, color: C.white, fontSize: 10, fontFace: "Arial", align: "center", valign: "middle", bold: true, colspan: 2 } },
  ],
];

slide.addTable(mainTable, {
  x: mainTableX, y: mainTableY, w: mainTableW,
  colW: mainColW,
  border: { pt: 0.5, color: "2A2A3A" },
  rowH: [0.42, 0.35, 0.35, 0.35, 0.42],
  margin: [4, 6, 4, 6],
});

// Label on the green row
slide.addText("Totale euro risparmiati\n(valore FTE)", {
  x: mainTableX + 0.1, y: mainTableY + 0.42 + 0.35 + 0.35 + 0.35 + 0.04, w: 2.8, h: 0.38,
  fontSize: 8.5, fontFace: "Arial", color: C.lightGray, margin: 0, valign: "middle",
});

// ===== SECOND TABLE (Financial metrics) =====
const finTableY = mainTableY + 0.42 + 0.35 + 0.35 + 0.35 + 0.42 + 0.35;
const finColW = [1.7, 1.7, 1.7, 1.7];

const finHdrOpts = { fill: { color: C.headerBg }, color: C.accent, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle" };
const finCellOpts = { fill: { color: C.cellBg }, color: C.white, fontSize: 10.5, fontFace: "Arial", align: "center", valign: "middle", bold: true };

const finTable = [
  [
    { text: "Investimento", options: finHdrOpts },
    { text: "Impatto Economico AI", options: finHdrOpts },
    { text: "ROI (2 anni)", options: finHdrOpts },
    { text: "Payback period", options: finHdrOpts },
  ],
  [
    { text: "\u20ac45.000", options: finCellOpts },
    { text: "\u20ac57.500/anno", options: { ...finCellOpts, color: "7CDB8A" } },
    { text: "91,7%", options: { ...finCellOpts, color: "7CDB8A" } },
    { text: "~15 mesi", options: finCellOpts },
  ],
];

slide.addTable(finTable, {
  x: mainTableX, y: finTableY, w: mainTableW,
  colW: finColW,
  border: { pt: 0.5, color: "2A2A3A" },
  rowH: [0.38, 0.4],
  margin: [4, 6, 4, 6],
});

// ===== ASSUNZIONI (right side) =====
const assX = 7.65;
const assY = 1.15;
const assW = 2.1;

slide.addText("Assunzioni", {
  x: assX, y: assY, w: assW, h: 0.35,
  fontSize: 14, fontFace: "Arial Black", color: C.white, bold: true, margin: 0,
});

const assumptions = [
  "50 gare/anno gestite",
  "5-6 persone coinvolte per gara",
  "Costo orario medio team: \u20ac37/h",
  "RAL benchmark agenzie eventi corporate Milano",
  "1.720h lavorative/anno per FTE",
  "Tasso di adozione: 85%",
  "Ramp-up Anno 1: 6 mesi effettivi (50% del beneficio annuo)",
  "ROI calcolato su orizzonte 24 mesi",
];

const assTextRuns = assumptions.map((a, i) => ({
  text: a,
  options: {
    bullet: true,
    breakLine: i < assumptions.length - 1,
    fontSize: 8,
    fontFace: "Arial",
    color: C.gray,
  },
}));

slide.addText(assTextRuns, {
  x: assX, y: assY + 0.4, w: assW, h: 2.8,
  valign: "top",
  paraSpaceAfter: 4,
});

// ===== TAKE AWAY =====
const taY = finTableY + 0.38 + 0.4 + 0.3;

slide.addText("Take Away", {
  x: 0.5, y: taY, w: 4, h: 0.35,
  fontSize: 14, fontFace: "Arial Black", color: C.white, bold: true, margin: 0,
});

const takeaways = [
  {
    text: "Pitch genera un risparmio operativo netto di \u20ac57.500/anno con un ROI del 91,7% in 24 mesi \u2014 l\u2019investimento si ripaga in soli 15 mesi.",
    options: { bullet: true, breakLine: true, fontSize: 9, fontFace: "Arial", color: C.textMain },
  },
  {
    text: "Le ~1.800 ore liberate equivalgono a una risorsa full-time che il reparto pu\u00f2 riallocare su attivit\u00e0 a pi\u00f9 alto valore: partecipare a 5-6 gare aggiuntive, curare meglio le proposte in corso, e rafforzare il rapporto creativo con i clienti esistenti.",
    options: { bullet: true, breakLine: true, fontSize: 9, fontFace: "Arial", color: C.textMain },
  },
  {
    text: "Il team non lavora di meno \u2014 lavora meglio: elimina il tempo perso in ricerche manuali, rework evitabili e switching tra piattaforme, e lo reinveste in qualit\u00e0 creativa e new business.",
    options: { bullet: true, fontSize: 9, fontFace: "Arial", color: C.textMain },
  },
];

slide.addText(takeaways, {
  x: 0.5, y: taY + 0.35, w: 9.1, h: 1.2,
  valign: "top",
  paraSpaceAfter: 5,
});

// Save
pres.writeFile({ fileName: "/home/claude/BC_Pitch_Sintesi.pptx" }).then(() => {
  console.log("Slide created successfully");
});