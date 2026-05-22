const pptxgen = require("pptxgenjs");

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
const colW1 = [2.6, 1.2, 1.2, 2.0];

const headerOpts = { fill: { color: PURPLE_DARK }, color: PURPLE, bold: true, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] };
const cellOpts = (align = "center") => ({ fill: { color: "1A1A25" }, color: WHITE, fontSize: 9, fontFace: "Arial", align: align, valign: "middle", margin: [3, 4, 3, 4] });
const cellOptsAlt = (align = "center") => ({ fill: { color: "16161F" }, color: WHITE, fontSize: 9, fontFace: "Arial", align: align, valign: "middle", margin: [3, 4, 3, 4] });

const table1Data = [
  [
    { text: "Area di miglioramento", options: { ...headerOpts, align: "left" } },
    { text: "Ore senza AI", options: headerOpts },
    { text: "Ore con AI", options: headerOpts },
    { text: "Delta", options: headerOpts },
  ],
  [
    { text: "Apertura commessa", options: cellOpts("left") },
    { text: "87h", options: cellOpts() },
    { text: "17h", options: cellOpts() },
    { text: "-80%", options: cellOpts() },
  ],
  [
    { text: "Compilazione Progress", options: cellOptsAlt("left") },
    { text: "720h", options: cellOptsAlt() },
    { text: "144h", options: cellOptsAlt() },
    { text: "-80%", options: cellOptsAlt() },
  ],
  [
    { text: "Chiusure incomplete", options: cellOpts("left") },
    { text: "90h", options: cellOpts() },
    { text: "\u2014", options: cellOpts() },
    { text: "-100%", options: cellOpts() },
  ],
  [
    { text: "Fatturazione attiva", options: cellOptsAlt("left") },
    { text: "238h", options: cellOptsAlt() },
    { text: "76h", options: cellOptsAlt() },
    { text: "-68%", options: cellOptsAlt() },
  ],
  [
    { text: "Budget e gestione PDP", options: cellOpts("left") },
    { text: "694h", options: cellOpts() },
    { text: "314h", options: cellOpts() },
    { text: "-55%", options: cellOpts() },
  ],
  [
    { text: "Reporting direzione", options: cellOptsAlt("left") },
    { text: "92h", options: cellOptsAlt() },
    { text: "34h", options: cellOptsAlt() },
    { text: "-63%", options: cellOptsAlt() },
  ],
  // TOTAL ROW
  [
    { text: "", options: { fill: { color: GREEN_DARK }, fontSize: 9, fontFace: "Arial", margin: [3, 4, 3, 4] } },
    { text: "", options: { fill: { color: GREEN_DARK }, fontSize: 9, fontFace: "Arial", margin: [3, 4, 3, 4] } },
    { text: "", options: { fill: { color: GREEN_DARK }, fontSize: 9, fontFace: "Arial", margin: [3, 4, 3, 4] } },
    { text: "\u20AC56.000/anno\n(0,66 FTE)", options: { fill: { color: GREEN_DARK }, color: WHITE, fontSize: 10, fontFace: "Arial", bold: true, align: "center", valign: "middle", margin: [4, 4, 4, 4] } },
  ],
];

slide.addTable(table1Data, {
  x: tblX, y: tblY, colW: colW1,
  border: { pt: 0.5, color: "2A2A3A" },
  rowH: [0.28, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.34],
});

// === TABLE 2: FINANCIAL KPIs ===
const tbl2Y = 3.45;
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
    { text: "\u20AC85.000", options: kpiCell },
    { text: "\u20AC56.000/anno", options: kpiCell },
    { text: "+25%", options: { ...kpiCell, color: "4ADE80" } },
    { text: "~19 mesi", options: kpiCell },
  ],
];

slide.addTable(table2Data, {
  x: tblX, y: tbl2Y, colW: colW2,
  border: { pt: 0.5, color: "2A2A3A" },
  rowH: [0.26, 0.32],
});

// === RIGHT SIDE: ASSUNZIONI ===
const boxX = 7.8;
const boxW = 2.0;

slide.addText("Assunzioni", {
  x: boxX, y: 1.1, w: boxW, h: 0.35,
  fontSize: 14, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});

const assumptions = [
  { text: "260", label: " commesse/anno (dato cliente)" },
  { text: "\u20AC70/h", label: " costo capi area (benchmark)" },
  { text: "\u20AC35/h", label: " costo operativi" },
  { text: "\u20AC37/h", label: " costo amministrazione" },
  { text: "1.720", label: " ore lavorative/anno per FTE" },
  { text: "85%", label: " tasso di adozione (realistico)" },
  { text: "90%", label: " ramp-up Anno 1" },
  { text: "80%", label: " abbattimento Progress" },
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
  x: 0.5, y: 4.15, w: 3, h: 0.28,
  fontSize: 14, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0
});

slide.addShape(pres.shapes.RECTANGLE, {
  x: 0.5, y: 4.42, w: 1.0, h: 0.025,
  fill: { color: PURPLE }
});

const takeaways = [
  {
    text: "Link si ripaga in meno di 2 anni",
    options: { bold: true, color: WHITE, fontSize: 8, fontFace: "Arial", breakLine: true }
  },
  {
    text: "  ROI +25%, payback 19 mesi. Dal ventesimo mese, ogni euro \u00E8 valore netto per Noloop.",
    options: { color: GRAY_LIGHT, fontSize: 7.5, fontFace: "Arial", breakLine: true }
  },
  {
    text: "1.335 ore liberate = capacit\u00E0 per crescere senza assumere",
    options: { bold: true, color: WHITE, fontSize: 8, fontFace: "Arial", breakLine: true }
  },
  {
    text: "  Tempo restituito a new business, cura dei clienti esistenti e perfezionamento delle proposte creative.",
    options: { color: GRAY_LIGHT, fontSize: 7.5, fontFace: "Arial", breakLine: true }
  },
  {
    text: "Dal compilare al decidere",
    options: { bold: true, color: WHITE, fontSize: 8, fontFace: "Arial", breakLine: true }
  },
  {
    text: "  I capi area passano da 11h/settimana di data entry a dashboard in tempo reale su 260 commesse.",
    options: { color: GRAY_LIGHT, fontSize: 7.5, fontFace: "Arial" }
  },
];

slide.addText(takeaways, {
  x: 0.5, y: 4.48, w: 9.2, h: 0.95,
  valign: "top", margin: 0
});

// === FOOTER ===
slide.addText("Scenario Realistico (85% adozione)  |  HeyAI per Noloop", {
  x: 0.5, y: 5.42, w: 9, h: 0.18,
  fontSize: 7, fontFace: "Arial", color: GRAY_MED, italic: true, margin: 0
});

pres.writeFile({ fileName: "/home/claude/link_business_case_v2.pptx" })
  .then(() => console.log("Created OK"))
  .catch(err => console.error(err));