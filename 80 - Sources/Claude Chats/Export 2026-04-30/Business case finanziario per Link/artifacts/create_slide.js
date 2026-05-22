const pptxgen = require("pptxgenjs");
const fs = require("fs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "HeyAI";
pres.title = "Link — Business Case Sintesi Consolidata";

let slide = pres.addSlide();

// === COLORS ===
const BG = "111118";
const PURPLE = "9B8EC4";
const PURPLE_DARK = "2A2440";
const GREEN_DARK = "1C3A1C";
const GREEN_ACCENT = "2D5A2D";
const WHITE = "FFFFFF";
const GRAY_LIGHT = "CCCCCC";
const GRAY_MED = "999999";
const TEXT_DIM = "8888AA";

// === BACKGROUND ===
slide.background = { color: BG };

// === TITLE ===
slide.addText("Business Case — Sintesi Consolidata", {
  x: 0.5, y: 0.2, w: 7.5, h: 0.55,
  fontSize: 26, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});

slide.addText("Link — Sistema Gestionale Integrato", {
  x: 0.5, y: 0.7, w: 5, h: 0.3,
  fontSize: 12, fontFace: "Arial", color: TEXT_DIM, italic: true, margin: 0
});

// === TABLE 1: AREAS ===
const tblX = 0.5;
const tblY = 1.1;
const tblW = 7.0;
const colW1 = [2.6, 1.2, 1.2, 2.0];

const headerOpts = { fill: { color: PURPLE_DARK }, color: PURPLE, bold: true, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] };
const cellOpts = (align = "center") => ({ fill: { color: "1A1A25" }, color: WHITE, fontSize: 9, fontFace: "Arial", align: align, valign: "middle", margin: [3, 4, 3, 4] });
const cellOptsAlt = (align = "center") => ({ fill: { color: "16161F" }, color: WHITE, fontSize: 9, fontFace: "Arial", align: align, valign: "middle", margin: [3, 4, 3, 4] });

const headerOptsLeft = { ...headerOpts, align: "left" };
const cellLeft = () => ({ ...cellOpts("left") });
const cellLeftAlt = () => ({ ...cellOptsAlt("left") });

const table1Data = [
  // Header
  [
    { text: "Area di miglioramento", options: headerOptsLeft },
    { text: "Ore senza AI", options: { ...headerOpts } },
    { text: "Ore con AI", options: { ...headerOpts } },
    { text: "Delta", options: { ...headerOpts } },
  ],
  // Row 1
  [
    { text: "Apertura commessa", options: cellLeft() },
    { text: "87h", options: cellOpts() },
    { text: "17h", options: cellOpts() },
    { text: "-80%", options: cellOpts() },
  ],
  // Row 2
  [
    { text: "Compilazione Progress", options: cellLeftAlt() },
    { text: "576h", options: cellOptsAlt() },
    { text: "—", options: cellOptsAlt() },
    { text: "-100%", options: cellOptsAlt() },
  ],
  // Row 3
  [
    { text: "Chiusure incomplete", options: cellLeft() },
    { text: "90h", options: cellOpts() },
    { text: "—", options: cellOpts() },
    { text: "-100%", options: cellOpts() },
  ],
  // Row 4
  [
    { text: "Fatturazione attiva", options: cellLeftAlt() },
    { text: "238h", options: cellOptsAlt() },
    { text: "76h", options: cellOptsAlt() },
    { text: "-68%", options: cellOptsAlt() },
  ],
  // Row 5
  [
    { text: "Budget e gestione PDP", options: cellLeft() },
    { text: "694h", options: cellOpts() },
    { text: "314h", options: cellOpts() },
    { text: "-55%", options: cellOpts() },
  ],
  // Row 6
  [
    { text: "Reporting direzione", options: cellLeftAlt() },
    { text: "92h", options: cellOptsAlt() },
    { text: "34h", options: cellOptsAlt() },
    { text: "-63%", options: cellOptsAlt() },
  ],
  // TOTAL ROW
  [
    { text: "", options: { fill: { color: GREEN_DARK }, color: WHITE, fontSize: 9, fontFace: "Arial", bold: true, align: "left", valign: "middle", margin: [3, 4, 3, 4] } },
    { text: "", options: { fill: { color: GREEN_DARK }, color: WHITE, fontSize: 9, fontFace: "Arial", bold: true, align: "center", valign: "middle", margin: [3, 4, 3, 4] } },
    { text: "", options: { fill: { color: GREEN_DARK }, color: WHITE, fontSize: 9, fontFace: "Arial", bold: true, align: "center", valign: "middle", margin: [3, 4, 3, 4] } },
    { text: "€54.900/anno\n(0,66 FTE)", options: { fill: { color: GREEN_DARK }, color: WHITE, fontSize: 10, fontFace: "Arial", bold: true, align: "center", valign: "middle", margin: [4, 4, 4, 4] } },
  ],
];

slide.addTable(table1Data, {
  x: tblX, y: tblY, w: tblW, colW: colW1,
  border: { pt: 0.5, color: "2A2A3A" },
  rowH: [0.32, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.38],
});

// === TABLE 2: FINANCIAL KPIs ===
const tbl2Y = 3.75;
const colW2 = [1.75, 1.75, 1.75, 1.75];

const kpiHeader = { fill: { color: PURPLE_DARK }, color: PURPLE, bold: true, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] };
const kpiCell = { fill: { color: "1A1A25" }, color: WHITE, fontSize: 11, fontFace: "Arial", bold: true, align: "center", valign: "middle", margin: [4, 4, 4, 4] };

const table2Data = [
  [
    { text: "Investimento", options: kpiHeader },
    { text: "Impatto Economico AI", options: kpiHeader },
    { text: "ROI (2 anni)", options: kpiHeader },
    { text: "Payback Period", options: kpiHeader },
  ],
  [
    { text: "€85.000", options: kpiCell },
    { text: "€54.900/anno", options: kpiCell },
    { text: "+23%", options: { ...kpiCell, color: "4ADE80" } },
    { text: "~20 mesi", options: kpiCell },
  ],
];

slide.addTable(table2Data, {
  x: tblX, y: tbl2Y, w: tblW, colW: colW2,
  border: { pt: 0.5, color: "2A2A3A" },
  rowH: [0.30, 0.35],
});

// === RIGHT SIDE: ASSUNZIONI BOX ===
const boxX = 7.8;
const boxW = 2.0;

slide.addText("Assunzioni", {
  x: boxX, y: 1.1, w: boxW, h: 0.35,
  fontSize: 14, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});

const assumptions = [
  { text: "260", bold: true, label: " commesse/anno (dato cliente)" },
  { text: "€70/h", bold: true, label: " costo capi area (benchmark)" },
  { text: "€35/h", bold: true, label: " costo operativi" },
  { text: "€37/h", bold: true, label: " costo amministrazione" },
  { text: "1.720", bold: true, label: " ore lavorative/anno per FTE" },
  { text: "85%", bold: true, label: " tasso di adozione (realistico)" },
  { text: "90%", bold: true, label: " ramp-up Anno 1" },
];

let assY = 1.55;
assumptions.forEach((a) => {
  slide.addText([
    { text: a.text, options: { bold: true, color: PURPLE, fontSize: 8.5, fontFace: "Arial" } },
    { text: a.label, options: { color: GRAY_LIGHT, fontSize: 8.5, fontFace: "Arial" } },
  ], {
    x: boxX, y: assY, w: boxW, h: 0.22, margin: 0, valign: "middle"
  });
  assY += 0.24;
});

// === TAKE AWAY ===
slide.addText("Take Away", {
  x: 0.5, y: 4.55, w: 3, h: 0.35,
  fontSize: 16, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});

// Accent line under Take Away
slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.88, w: 1.2, h: 0.03,
  fill: { color: PURPLE }
});

const takeaways = [
  {
    text: "Link si ripaga in meno di 2 anni",
    options: { bold: true, color: WHITE, fontSize: 9.5, fontFace: "Arial", breakLine: true }
  },
  {
    text: " — con un ROI del +23% nello scenario realistico e un payback a 20 mesi, l'investimento genera valore netto dal ventunesimo mese.",
    options: { color: GRAY_LIGHT, fontSize: 9, fontFace: "Arial", breakLine: true }
  },
  {
    text: "\n1.335 ore liberate = capacità per crescere senza assumere",
    options: { bold: true, color: WHITE, fontSize: 9.5, fontFace: "Arial", breakLine: true }
  },
  {
    text: " — le risorse liberate dai processi manuali possono essere riallocate su sviluppo new business, cura del rapporto con i clienti esistenti e perfezionamento delle proposte creative — attività oggi sacrificate per compilare Excel e rincorrere dati.",
    options: { color: GRAY_LIGHT, fontSize: 9, fontFace: "Arial", breakLine: true }
  },
  {
    text: "\nDal compilare al decidere",
    options: { bold: true, color: WHITE, fontSize: 9.5, fontFace: "Arial", breakLine: true }
  },
  {
    text: " — i capi area passano da 8 ore/settimana di data entry a dashboard in tempo reale. La direzione ottiene visibilità immediata su 260 commesse senza chiedere a nessuno.",
    options: { color: GRAY_LIGHT, fontSize: 9, fontFace: "Arial" }
  },
];

slide.addText(takeaways, {
  x: 0.5, y: 4.95, w: 9.2, h: 0.65,
  valign: "top", margin: 0
});

// === FOOTER ===
slide.addText("Scenario Realistico (85% adozione)  |  HeyAI per Noloop", {
  x: 0.5, y: 5.3, w: 9, h: 0.25,
  fontSize: 7, fontFace: "Arial", color: GRAY_MED, italic: true, margin: 0
});

pres.writeFile({ fileName: "/home/claude/link_business_case.pptx" })
  .then(() => console.log("Created OK"))
  .catch(err => console.error(err));