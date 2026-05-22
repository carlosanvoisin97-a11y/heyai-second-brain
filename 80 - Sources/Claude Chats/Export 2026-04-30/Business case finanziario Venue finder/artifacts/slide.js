const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "HeyAI";
pres.title = "Business Case - AI Venue Finder Evolution";

let slide = pres.addSlide();
slide.background = { color: "1A1A2E" };

// ── TITLE ──
slide.addText("Business Case — Sintesi Consolidata", {
  x: 0.5, y: 0.2, w: 7, h: 0.55,
  fontSize: 22, fontFace: "Arial Black", color: "FFFFFF", bold: true, margin: 0
});

slide.addText("AI Venue Finder Evolution", {
  x: 0.5, y: 0.65, w: 7, h: 0.3,
  fontSize: 12, fontFace: "Arial", color: "8B7EC8", margin: 0
});

// ── MAIN TABLE (Operations) ──
const headerOpts = { fill: { color: "2D2B55" }, color: "9B8FD4", bold: true, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle" };
const cellOpts = { fill: { color: "16162A" }, color: "D0D0D0", fontSize: 9, fontFace: "Arial", valign: "middle" };
const cellCenter = { ...cellOpts, align: "center" };
const cellLeft = { ...cellOpts, align: "left" };
const totalLabelOpts = { fill: { color: "1B3A2A" }, color: "FFFFFF", bold: true, fontSize: 9, fontFace: "Arial", align: "left", valign: "middle" };
const totalValueOpts = { fill: { color: "1B3A2A" }, color: "FFFFFF", bold: true, fontSize: 10, fontFace: "Arial", align: "center", valign: "middle" };
const border = { pt: 0.5, color: "2A2A4A" };

let mainTable = [
  // Header row
  [
    { text: "Area di miglioramento", options: { ...headerOpts, align: "left" } },
    { text: "Ore impiegate\nsenza AI", options: headerOpts },
    { text: "Ore impiegate\ncon AI", options: headerOpts },
    { text: "Delta", options: headerOpts }
  ],
  // Row 1
  [
    { text: "Produzione presentazioni logistiche", options: cellLeft },
    { text: "1.000h", options: cellCenter },
    { text: "200h", options: cellCenter },
    { text: "-800h", options: { ...cellCenter, color: "66DDAA", bold: true } }
  ],
  // Row 2
  [
    { text: "Rilanci e varianti", options: cellLeft },
    { text: "525h", options: cellCenter },
    { text: "100h", options: cellCenter },
    { text: "-426h", options: { ...cellCenter, color: "66DDAA", bold: true } }
  ],
  // Total row
  [
    { text: "TOTALE RISPARMIO", options: { ...totalLabelOpts, colspan: 3 } },
    { text: "€40.400/anno\n(0,71 FTE)", options: totalValueOpts }
  ]
];

slide.addTable(mainTable, {
  x: 0.5, y: 1.1, w: 7,
  colW: [2.6, 1.5, 1.5, 1.4],
  rowH: [0.45, 0.38, 0.38, 0.5],
  border: border,
  margin: [4, 6, 4, 6]
});

// ── INVESTMENT TABLE ──
const invHeaderOpts = { fill: { color: "2D2B55" }, color: "9B8FD4", bold: true, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle" };
const invCellOpts = { fill: { color: "16162A" }, color: "FFFFFF", bold: true, fontSize: 11, fontFace: "Arial", align: "center", valign: "middle" };

let invTable = [
  [
    { text: "Investimento", options: invHeaderOpts },
    { text: "Impatto Economico AI", options: invHeaderOpts },
    { text: "ROI (2 anni)", options: invHeaderOpts },
    { text: "Payback period", options: invHeaderOpts }
  ],
  [
    { text: "€10.000", options: invCellOpts },
    { text: "€36.400/anno", options: { ...invCellOpts, color: "66DDAA" } },
    { text: "628%", options: { ...invCellOpts, color: "66DDAA" } },
    { text: "~3 mesi", options: { ...invCellOpts, color: "66DDAA" } }
  ]
];

slide.addTable(invTable, {
  x: 0.5, y: 3.25, w: 7,
  colW: [1.75, 1.75, 1.75, 1.75],
  rowH: [0.4, 0.45],
  border: border,
  margin: [4, 6, 4, 6]
});

// ── ASSUNZIONI (right side) ──
slide.addText("Assunzioni", {
  x: 7.8, y: 1.1, w: 1.9, h: 0.35,
  fontSize: 14, fontFace: "Arial Black", color: "FFFFFF", bold: true, margin: 0
});

const assumptions = [
  "200 presentazioni logistiche/anno\n(dato cliente — team programmazione)",
  "1,5 rilanci medi per gara\n(dato Lorena Cavecchi)",
  "Tempo attuale: 5h/presentazione,\n1h 45min/rilancio (dato operativo)",
  "Costo orario: €33/h\n(RAL €40K × 1,40 / 1.720h)",
  "Adozione: 90% (integrazione\nnell'ecosistema Sally)"
];

let assumptionTexts = assumptions.map((a, i) => {
  let items = [];
  if (i > 0) items.push({ text: "\n", options: { fontSize: 4, breakLine: true } });
  items.push({ text: a, options: { fontSize: 7.5, color: "B0B0C0", fontFace: "Arial", breakLine: true } });
  return items;
}).flat();

slide.addText(assumptionTexts, {
  x: 7.8, y: 1.5, w: 1.9, h: 2.9,
  valign: "top",
  margin: 0,
  lineSpacingMultiple: 1.1
});

// ── TAKE AWAY ──
slide.addText("Take Away", {
  x: 0.5, y: 4.35, w: 3, h: 0.35,
  fontSize: 14, fontFace: "Arial Black", color: "FFFFFF", bold: true, margin: 0
});

const takeaway = "Noloop impiega oggi oltre 1.500 ore/anno in lavoro manuale ripetitivo sulle presentazioni logistiche — un costo operativo di ~€50K.\nCon un investimento di €10K, il Venue Finder Evolution si ripaga in 3 mesi, libera 0,71 FTE e trasforma la qualità dell'output con presentazioni grafiche automatiche e mini-video.\nIl team programmazione passa dall'assemblare PowerPoint al supervisionare proposte AI-generated.";

slide.addText(takeaway, {
  x: 0.5, y: 4.7, w: 9.2, h: 0.8,
  fontSize: 8.5, fontFace: "Arial", color: "A0A0B8",
  valign: "top", margin: 0,
  lineSpacingMultiple: 1.3
});

pres.writeFile({ fileName: "/home/claude/VenueFinder_BusinessCase.pptx" })
  .then(() => console.log("Done"))
  .catch(err => console.error(err));