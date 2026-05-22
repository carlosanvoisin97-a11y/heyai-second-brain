const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10" x 5.625"
pres.author = "HeyAI";
pres.title = "LeadMe Evolution - Business Case Sintesi";

const slide = pres.addSlide();
slide.background = { color: "121218" };

// ── Colors ──
const VIOLET = "9B8EC4";
const VIOLET_DIM = "7B6EA4";
const DARK_CELL = "1E1E2A";
const DARK_CELL_ALT = "16161F";
const GREEN_DARK = "1C3A1C";
const GREEN_MID = "2D5A2D";
const WHITE = "FFFFFF";
const LIGHT_GRAY = "CCCCCC";
const MID_GRAY = "999999";
const HEADER_BG = "2A2A3A";
const ROW_BG_1 = "1A1A24";
const ROW_BG_2 = "141420";

// ── TITLE ──
slide.addText("Business Case - Sintesi Consolidata", {
  x: 0.5, y: 0.2, w: 7.5, h: 0.55,
  fontSize: 22, fontFace: "Arial Black", color: WHITE,
  bold: true, margin: 0
});

// Subtle subtitle line
slide.addText("LeadMe Evolution & CRM  |  Scenario Realistico (85% adozione)", {
  x: 0.5, y: 0.7, w: 7.5, h: 0.25,
  fontSize: 9, fontFace: "Arial", color: MID_GRAY, margin: 0
});

// ═══════════════════════════════════════════════════
// MAIN TABLE - Area di miglioramento
// ═══════════════════════════════════════════════════
const tableX = 0.5;
const tableY = 1.05;
const tableW = 7.3;
const colW = [2.6, 1.5, 1.5, 1.7]; // sum = 7.3

const headerOpts = (text) => ({
  text, options: {
    fill: { color: HEADER_BG },
    color: VIOLET,
    fontSize: 9,
    fontFace: "Arial",
    bold: true,
    align: "center",
    valign: "middle",
    border: [
      { pt: 0.5, color: "2E2E3E" },
      { pt: 0.5, color: "2E2E3E" },
      { pt: 0.5, color: "2E2E3E" },
      { pt: 0.5, color: "2E2E3E" }
    ]
  }
});

const headerOptsLeft = (text) => ({
  text, options: {
    ...headerOpts(text).options,
    align: "left"
  }
});

const cellOpts = (text, rowIdx, opts = {}) => ({
  text, options: {
    fill: { color: rowIdx % 2 === 0 ? ROW_BG_1 : ROW_BG_2 },
    color: opts.color || LIGHT_GRAY,
    fontSize: opts.fontSize || 9,
    fontFace: "Arial",
    bold: opts.bold || false,
    align: opts.align || "center",
    valign: "middle",
    border: [
      { pt: 0.3, color: "2E2E3E" },
      { pt: 0.3, color: "2E2E3E" },
      { pt: 0.3, color: "2E2E3E" },
      { pt: 0.3, color: "2E2E3E" }
    ]
  }
});

const cellLeft = (text, rowIdx, opts = {}) => cellOpts(text, rowIdx, { ...opts, align: "left" });

// Data for main table
const areas = [
  { name: "Profilazione automatizzata", oggi: "994", conAI: "284", delta: "-71%" },
  { name: "Messaggistica AI-assisted", oggi: "276", conAI: "73", delta: "-74%" },
  { name: "Tracking & gestione pipeline", oggi: "864", conAI: "128", delta: "-85%" },
  { name: "Task management & notifiche", oggi: "385", conAI: "128", delta: "-67%" },
  { name: "Ricerca proattiva lead", oggi: "380", conAI: "47", delta: "-88%" },
];

const mainTableData = [
  // Header
  [
    headerOptsLeft("Area di miglioramento"),
    headerOpts("Ore impiegate\nsenza AI"),
    headerOpts("Ore impiegate\ncon AI"),
    headerOpts("Delta")
  ],
  // Data rows
  ...areas.map((a, i) => [
    cellLeft(a.name, i),
    cellOpts(a.oggi + "h", i),
    cellOpts(a.conAI + "h", i),
    cellOpts(a.delta, i, { bold: true, color: "6ECF6E" })
  ]),
  // Total row
  [
    {
      text: "", options: {
        fill: { color: GREEN_DARK },
        border: [{ pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }]
      }
    },
    {
      text: "", options: {
        fill: { color: GREEN_DARK },
        border: [{ pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }]
      }
    },
    {
      text: "", options: {
        fill: { color: GREEN_DARK },
        border: [{ pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }]
      }
    },
    {
      text: [
        { text: "\u20AC54.500/anno", options: { fontSize: 10, bold: true, color: WHITE } },
        { text: "\nrisparmiati (1,3 FTE)", options: { fontSize: 7.5, color: LIGHT_GRAY } }
      ],
      options: {
        fill: { color: GREEN_DARK },
        align: "center",
        valign: "middle",
        border: [{ pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }, { pt: 0.5, color: GREEN_MID }]
      }
    }
  ]
];

slide.addTable(mainTableData, {
  x: tableX, y: tableY, w: tableW,
  colW: colW,
  rowH: [0.38, 0.30, 0.30, 0.30, 0.30, 0.30, 0.42],
  margin: [3, 6, 3, 6]
});

// ═══════════════════════════════════════════════════
// FINANCIAL TABLE (below)
// ═══════════════════════════════════════════════════
const finY = 3.55;
const finColW = [1.825, 1.825, 1.825, 1.825]; // 7.3 total

const finTableData = [
  [
    headerOpts("Investimento"),
    headerOpts("Impatto Economico AI"),
    headerOpts("ROI (2 anni)"),
    headerOpts("Payback Period")
  ],
  [
    {
      text: "\u20AC55.000", options: {
        fill: { color: ROW_BG_1 }, color: WHITE, fontSize: 12, fontFace: "Arial",
        bold: true, align: "center", valign: "middle",
        border: [{ pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }]
      }
    },
    {
      text: "\u20AC54.500/anno", options: {
        fill: { color: ROW_BG_1 }, color: "6ECF6E", fontSize: 12, fontFace: "Arial",
        bold: true, align: "center", valign: "middle",
        border: [{ pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }]
      }
    },
    {
      text: "68%", options: {
        fill: { color: ROW_BG_1 }, color: "6ECF6E", fontSize: 12, fontFace: "Arial",
        bold: true, align: "center", valign: "middle",
        border: [{ pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }]
      }
    },
    {
      text: "~16 mesi", options: {
        fill: { color: ROW_BG_1 }, color: WHITE, fontSize: 12, fontFace: "Arial",
        bold: true, align: "center", valign: "middle",
        border: [{ pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }, { pt: 0.3, color: "2E2E3E" }]
      }
    }
  ]
];

slide.addTable(finTableData, {
  x: tableX, y: finY, w: tableW,
  colW: finColW,
  rowH: [0.35, 0.40],
  margin: [3, 6, 3, 6]
});

// ═══════════════════════════════════════════════════
// ASSUNZIONI BOX (right side)
// ═══════════════════════════════════════════════════
const assX = 8.1;
const assY = 1.05;
const assW = 1.7;

// Title
slide.addText("Assunzioni", {
  x: assX, y: assY, w: assW, h: 0.35,
  fontSize: 13, fontFace: "Arial Black", color: WHITE,
  bold: true, margin: 0
});

// Assumptions content
const assumptions = [
  "48 settimane lavorative/anno",
  "Costo aziendale: RAL \u00D71,40 / 1.720h",
  "Analyst \u20AC24/h \u2022 Manager \u20AC34/h \u2022 Director \u20AC53/h",
  "Team: 5 ricercatori attivi (Gruppo A) + 7 Manager relazioni (Gruppo B)",
  "Volumi benchmark: Simona (Analyst) = 100%. Applicati proporzionalmente",
  "Ramp-up Anno 1: 70% del beneficio a regime",
  "Tasso adozione realistico: 85%",
  "Dati operativi raccolti da interviste dirette al team"
];

slide.addText(
  assumptions.map((a, i) => ({
    text: (i > 0 ? "\n" : "") + "\u2022 " + a,
    options: { fontSize: 6.5, color: LIGHT_GRAY, fontFace: "Arial", breakLine: i < assumptions.length - 1 }
  })),
  {
    x: assX, y: assY + 0.38, w: assW, h: 3.2,
    valign: "top",
    lineSpacingMultiple: 1.15
  }
);

// ═══════════════════════════════════════════════════
// TAKE AWAY (bottom)
// ═══════════════════════════════════════════════════
const taY = 4.45;

slide.addText("Take Away", {
  x: 0.5, y: taY, w: 3, h: 0.32,
  fontSize: 14, fontFace: "Arial Black", color: WHITE,
  bold: true, margin: 0
});

const takeaways = [
  {
    text: "L\u2019investimento si ripaga in meno di 16 mesi ",
    suffix: "anche nello scenario pi\u00F9 prudente, con un ROI del 68% a 2 anni."
  },
  {
    text: "2.239 ore liberate all\u2019anno ",
    suffix: "equivalenti a 1,3 FTE \u2014 capacit\u00E0 che pu\u00F2 essere riallocata su new business, nurturing dei clienti esistenti e perfezionamento delle relazioni commerciali."
  },
  {
    text: "+60% di profili analizzati a settimana ",
    suffix: "\u2014 pi\u00F9 pipeline, pi\u00F9 contatti, pi\u00F9 opportunit\u00E0 generate senza costi aggiuntivi di personale."
  },
  {
    text: "Ogni commessa recuperata da un follow-up non perso ",
    suffix: "vale in media \u20AC210K: basta una sola conversione in pi\u00F9 per ripagare 4 volte l\u2019intero investimento."
  }
];

slide.addText(
  takeaways.flatMap((t, i) => [
    ...(i > 0 ? [{ text: "\n", options: { fontSize: 5, breakLine: true } }] : []),
    { text: "\u25B8 " + t.text, options: { bold: true, fontSize: 8, color: WHITE, fontFace: "Arial" } },
    { text: t.suffix, options: { fontSize: 8, color: LIGHT_GRAY, fontFace: "Arial", breakLine: true } }
  ]),
  {
    x: 0.5, y: taY + 0.32, w: 9.2, h: 0.95,
    valign: "top",
    lineSpacingMultiple: 1.2
  }
);

// ── Footer ──
slide.addText("HeyAI  |  Confidenziale  |  Marzo 2026", {
  x: 0.5, y: 5.35, w: 9, h: 0.2,
  fontSize: 6.5, fontFace: "Arial", color: "555555", margin: 0
});

pres.writeFile({ fileName: "/home/claude/LeadMe_BC_Slide.pptx" })
  .then(() => console.log("Slide created successfully"))
  .catch(err => console.error(err));