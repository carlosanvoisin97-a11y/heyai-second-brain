const pptxgen = require("pptxgenjs");
const fs = require("fs");

let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33" x 7.5" — matches original
pres.author = "HeyAI";
pres.title = "Flow — Business Case";

// ═══════════════════════════════════════════════════════════════════
// COLORS (extracted from original PPTX theme/XML)
// ═══════════════════════════════════════════════════════════════════
const BG = "000000";
const BOX_FILL = "232831";
const PURPLE = "BAA4EB";
const PURPLE_LIGHT = "9B8EC4";
const GREEN = "7DDF80";
const WHITE = "FFFFFF";
const GRAY = "CCCCCC";
const GRAY_LIGHT = "B0B0B0";
const PURPLE_DOT = "5728B8";
const FONT = "Acre Medium";

// Table colors (BC slide)
const TBL_HDR_FILL = "2A2440";
const TBL_HDR_TXT = "9B8EC4";
const TBL_ROW_ODD = "1A1A25";
const TBL_ROW_EVEN = "16161F";
const TBL_TOTAL = "1C3A1C";

// ═══════════════════════════════════════════════════════════════════
// SLIDE 1: FLOW — SOLUTION OVERVIEW
// ═══════════════════════════════════════════════════════════════════
let s1 = pres.addSlide();
s1.background = { color: BG };

// --- TAG top right (green square + text) ---
s1.addShape(pres.shapes.RECTANGLE, {
  x: 11.79, y: 0.22, w: 0.12, h: 0.18,
  fill: { color: GREEN }
});
s1.addText("Tutti i Reparti", {
  x: 11.30, y: 0.20, w: 1.50, h: 0.22,
  fontSize: 10.5, fontFace: FONT, color: WHITE,
  align: "right", valign: "middle", margin: 0
});

// --- TITLE ---
s1.addText("Flow - Task Mgmt System", {
  x: 0.63, y: 0.39, w: 10.5, h: 1.16,
  fontSize: 54, fontFace: FONT, color: WHITE, bold: false,
  valign: "top", margin: 0
});

// --- SUBTITLE ---
s1.addText(
  "Pianificazione, assegnazione e monitoraggio delle attivit\u00E0 operative per commessa: i task emergono direttamente dalle call su Minutes, si aggiornano da mobile durante sopralluoghi e trasferte, e alimentano automaticamente il gestionale",
  {
    x: 0.63, y: 1.38, w: 11.95, h: 0.70,
    fontSize: 14, fontFace: FONT, color: WHITE,
    valign: "top", margin: 0
  }
);

// --- LEFT BOX: FUNZIONALITÀ CHIAVE ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 0.63, y: 2.20, w: 4.31, h: 4.25,
  fill: { color: BOX_FILL }, rectRadius: 0.08
});

const funzItems = [
  { text: "FUNZIONALIT\u00C0 CHIAVE\n\n", options: { fontSize: 14, fontFace: FONT, color: PURPLE, bold: true, breakLine: false } },
  { text: "Ricezione task strutturati da Minutes: dopo ogni call, i task vengono estratti con assegnatario, scadenza e priorit\u00E0", options: { fontSize: 14, fontFace: FONT, color: WHITE, bullet: true, breakLine: true } },
  { text: "Aggiornamento da mobile con note vocali e foto durante sopralluoghi", options: { fontSize: 14, fontFace: FONT, color: WHITE, bullet: true, breakLine: true } },
  { text: "Upload contratti e documenti: estrae scadenze contrattuali e crea reminder", options: { fontSize: 14, fontFace: FONT, color: WHITE, bullet: true, breakLine: true } },
  { text: "Tagging cross-reparto: @mention per coinvolgere colleghi, con notifica in-app ed email", options: { fontSize: 14, fontFace: FONT, color: WHITE, bullet: true, breakLine: true } },
  { text: "Push dati aggregati su Link: task completati con costi e documenti allegati alimentano il budget e il Progress senza reinserimento", options: { fontSize: 14, fontFace: FONT, color: WHITE, bullet: true } }
];
s1.addText(funzItems, {
  x: 0.83, y: 2.35, w: 3.91, h: 3.95,
  valign: "top", margin: [0, 8, 0, 8], lineSpacingMultiple: 1.15
});

// --- MIDDLE TOP: IMPATTO DI BUSINESS ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 5.08, y: 2.21, w: 3.84, h: 1.15,
  fill: { color: BOX_FILL }, rectRadius: 0.08
});
s1.addText("IMPATTO DI BUSINESS", {
  x: 5.28, y: 2.31, w: 3.44, h: 0.35,
  fontSize: 14, fontFace: FONT, color: PURPLE, bold: true, margin: 0
});

// Slider line
s1.addShape(pres.shapes.LINE, {
  x: 5.59, y: 2.87, w: 2.53, h: 0,
  line: { color: WHITE, width: 1.5 }
});
// Left cap
s1.addShape(pres.shapes.LINE, {
  x: 5.60, y: 2.77, w: 0, h: 0.19,
  line: { color: WHITE, width: 1.5 }
});
// Right cap
s1.addShape(pres.shapes.LINE, {
  x: 8.10, y: 2.77, w: 0, h: 0.19,
  line: { color: WHITE, width: 1.5 }
});
// Purple dot (high position)
s1.addShape(pres.shapes.OVAL, {
  x: 7.56, y: 2.75, w: 0.24, h: 0.24,
  fill: { color: PURPLE_DOT }
});
// Labels
s1.addText("Basso", { x: 5.20, y: 3.01, w: 0.80, h: 0.25, fontSize: 9, fontFace: FONT, color: WHITE, margin: 0 });
s1.addText("Alto", { x: 7.74, y: 3.01, w: 0.74, h: 0.25, fontSize: 9, fontFace: FONT, color: WHITE, margin: 0, align: "right" });

// --- MIDDLE: PAIN POINT RISOLTO ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 5.08, y: 3.49, w: 3.84, h: 1.91,
  fill: { color: BOX_FILL }, rectRadius: 0.08
});
s1.addText("PAIN POINT RISOLTO", {
  x: 5.28, y: 3.59, w: 3.44, h: 0.30,
  fontSize: 14, fontFace: FONT, color: PURPLE, bold: true, margin: 0
});
s1.addText(
  "Il coordinamento di 260 commesse e ~20.000 task annui avviene senza alcun tool: WhatsApp, email, telefonate, carta. I 14 coordinatori spendono fino al 65% del tempo in attivit\u00E0 di puro coordinamento. Le 32 risorse operative saltano continuamente tra canali, perdendo fino a 5,4 ore/settimana in context switching. Le scadenze contrattuali sono affidate alla memoria individuale.",
  {
    x: 5.19, y: 3.88, w: 3.56, h: 1.40,
    fontSize: 11, fontFace: FONT, color: GRAY, valign: "top", margin: 0,
    lineSpacingMultiple: 1.15
  }
);

// --- BOTTOM MIDDLE: INVESTIMENTO ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 5.08, y: 5.52, w: 3.84, h: 0.93,
  fill: { color: BOX_FILL }, rectRadius: 0.08
});
s1.addText("INVESTIMENTO", {
  x: 5.28, y: 5.60, w: 3.44, h: 0.30,
  fontSize: 14, fontFace: FONT, color: GREEN, bold: true, margin: 0
});
s1.addText([
  { text: "90.000 \u20AC ", options: { fontSize: 14, fontFace: FONT, color: WHITE, strike: true } },
  { text: "\u2192 ", options: { fontSize: 14, fontFace: FONT, color: WHITE } },
  { text: "75.000", options: { fontSize: 14, fontFace: FONT, color: WHITE, bold: true } },
  { text: " (acquisto in bundle)", options: { fontSize: 11, fontFace: FONT, color: GRAY } }
], {
  x: 5.15, y: 5.96, w: 3.73, h: 0.34,
  valign: "middle", margin: 0
});

// --- RIGHT: KPI CHIAVE & TAKE AWAY ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 9.06, y: 2.20, w: 3.87, h: 4.25,
  fill: { color: BOX_FILL }, rectRadius: 0.08
});

s1.addText("KPI CHIAVE & TAKE AWAY", {
  x: 9.26, y: 2.30, w: 3.47, h: 0.35,
  fontSize: 14, fontFace: FONT, color: WHITE, bold: true, margin: 0
});

// KPI values (green) + labels (white)
const kpiData = [
  { val: "\u20AC114.943/anno", label: "In Risorse liberate" },
  { val: "153%", label: "ROI a due anni" },
  { val: "~10 mesi", label: "Payback Period" }
];
let kpiY = 2.74;
kpiData.forEach((kpi) => {
  s1.addText(kpi.val, {
    x: 9.16, y: kpiY, w: 1.89, h: 0.37,
    fontSize: 16, fontFace: FONT, color: GREEN, bold: true, margin: 0
  });
  s1.addText(kpi.label, {
    x: 10.85, y: kpiY + 0.06, w: 2.00, h: 0.28,
    fontSize: 10.5, fontFace: FONT, color: WHITE, margin: 0
  });
  kpiY += 0.35;
});

// Take Away section
const takeItems = [
  { text: "Flow si ripaga in meno di 1 anno\n", options: { fontSize: 14, fontFace: FONT, color: WHITE, bold: true, breakLine: false } },
  { text: "ROI +153%, payback ~10 mesi. Dal dodicesimo mese, ogni euro \u00E8 valore netto per Noloop.\n", options: { fontSize: 12, fontFace: FONT, color: GRAY, breakLine: true } },
  { text: "3.351 ore liberate = capacit\u00E0 per crescere senza assumere\n", options: { fontSize: 14, fontFace: FONT, color: WHITE, bold: true, breakLine: false } },
  { text: "Tempo restituito a creare new business, cura dei clienti esistenti e coordinamento progetti\n", options: { fontSize: 12, fontFace: FONT, color: GRAY, breakLine: true } },
  { text: "Da rincorrere a coordinare\n", options: { fontSize: 14, fontFace: FONT, color: WHITE, bold: true, breakLine: false } },
  { text: "I PM passano da 30+ messaggi WhatsApp/giorno a dashboard in tempo reale su 260 commesse.", options: { fontSize: 12, fontFace: FONT, color: GRAY } }
];
s1.addText(takeItems, {
  x: 9.25, y: 4.02, w: 3.49, h: 2.30,
  valign: "top", margin: 0, lineSpacingMultiple: 1.05
});

// --- LOGO placeholder + page number ---
s1.addText("22", {
  x: 12.30, y: 6.90, w: 0.70, h: 0.35,
  fontSize: 12, fontFace: FONT, color: WHITE, align: "right", margin: 0
});


// ═══════════════════════════════════════════════════════════════════
// SLIDE 2: BUSINESS CASE IN SINTESI
// ═══════════════════════════════════════════════════════════════════
let s2 = pres.addSlide();
s2.background = { color: BG };

// --- TITLE ---
s2.addText("Business Case in Sintesi", {
  x: 0.63, y: 0.39, w: 12.43, h: 1.16,
  fontSize: 54, fontFace: FONT, color: WHITE, bold: false,
  valign: "top", margin: 0
});

// --- TABLE ---
const makeCell = (text, fill, txtColor, opts = {}) => ({
  text: text,
  options: {
    fill: { color: fill },
    color: txtColor,
    fontSize: opts.fontSize || 12,
    fontFace: FONT,
    bold: opts.bold || false,
    align: opts.align || "left",
    valign: "middle",
    margin: [4, 8, 4, 8],
    ...(opts.extra || {})
  }
});

const tblRows = [
  // Header
  [
    makeCell("Area di miglioramento", TBL_HDR_FILL, TBL_HDR_TXT, { bold: true }),
    makeCell("Ore senza AI", TBL_HDR_FILL, TBL_HDR_TXT, { bold: true, align: "center" }),
    makeCell("Ore con AI", TBL_HDR_FILL, TBL_HDR_TXT, { bold: true, align: "center" }),
    makeCell("Delta", TBL_HDR_FILL, TBL_HDR_TXT, { bold: true, align: "center" })
  ],
  // Row 1 - Coordinamento manageriale
  [
    makeCell("Coordinamento manageriale", TBL_ROW_ODD, WHITE),
    makeCell("4.234h", TBL_ROW_ODD, WHITE, { align: "center" }),
    makeCell("2.957h", TBL_ROW_ODD, WHITE, { align: "center" }),
    makeCell("-30%", TBL_ROW_ODD, WHITE, { align: "center" })
  ],
  // Row 2 - Esecuzione operativa
  [
    makeCell("Esecuzione operativa", TBL_ROW_EVEN, WHITE),
    makeCell("8.294h", TBL_ROW_EVEN, WHITE, { align: "center" }),
    makeCell("6.220h", TBL_ROW_EVEN, WHITE, { align: "center" }),
    makeCell("-25%", TBL_ROW_EVEN, WHITE, { align: "center" })
  ],
  // Total row
  [
    makeCell("", TBL_TOTAL, WHITE),
    makeCell("", TBL_TOTAL, WHITE),
    makeCell("", TBL_TOTAL, WHITE),
    makeCell("\u20AC114.943/anno\n(1,95 FTE)", TBL_TOTAL, WHITE, { bold: true, align: "center", fontSize: 13 })
  ]
];

s2.addTable(tblRows, {
  x: 0.67, y: 1.74, w: 9.03,
  colW: [3.36, 1.55, 1.55, 2.58],
  rowH: [0.37, 0.37, 0.37, 0.59],
  border: { pt: 0, color: BG },
  margin: 0
});

// --- ASSUNZIONI ---
s2.addText("Assunzioni", {
  x: 10.10, y: 1.74, w: 2.67, h: 0.47,
  fontSize: 18.67, fontFace: FONT, color: WHITE, bold: true, margin: 0
});

const assunzioniData = [
  { green: "46", white: " risorse operative su 5 reparti" },
  { green: "\u20AC35/h", white: " costo coordinatori (PM, Pianificazione)" },
  { green: "\u20AC34/h", white: " costo blend operativi" },
  { green: "1.720", white: " ore lavorative/anno per FTE" },
  { green: "30%", white: " realizzo coordinatori (benchmark Asana)" },
  { green: "25%", white: " realizzo operativi (benchmark Asana)" },
  { green: "75%", white: " ramp-up Anno 1" }
];

let assY = 2.17;
assunzioniData.forEach((item) => {
  s2.addText([
    { text: item.green, options: { fontSize: 11.33, fontFace: FONT, color: TBL_HDR_TXT, bold: true } },
    { text: item.white, options: { fontSize: 11.33, fontFace: FONT, color: GRAY } }
  ], {
    x: 10.10, y: assY, w: 2.67, h: 0.29,
    valign: "middle", margin: 0
  });
  assY += 0.32;
});

// --- EXPLANATION PARAGRAPH ---
s2.addText(
  "Il risparmio \u00E8 calcolato con un modello a doppio binario ancorato ai benchmark Asana 2023: i 14 coordinatori (PM e Pianificazione) perdono fino a 6,3h/settimana in \"work about work\", le 32 risorse operative fino a 5,4h/settimana in context switching tra email, WhatsApp, Excel e telefonate. Abbiamo applicato tassi di realizzo nella fascia bassa dei benchmark (30% e 25%), inferiori al floor riportato da McKinsey e Insightful. Le ore sono valorizzate al costo orario aziendale per profilo (fully loaded, RAL \u00D71,40). Lo scenario presentato assume un ramp-up al 75% nel primo anno e adozione al 90% nel secondo.",
  {
    x: 0.67, y: 4.00, w: 9.03, h: 2.20,
    fontSize: 14, fontFace: FONT, color: WHITE,
    valign: "top", margin: 0, lineSpacingMultiple: 1.20
  }
);

// --- Page number ---
s2.addText("23", {
  x: 12.30, y: 6.90, w: 0.70, h: 0.35,
  fontSize: 12, fontFace: FONT, color: WHITE, align: "right", margin: 0
});


// ═══════════════════════════════════════════════════════════════════
// SAVE
// ═══════════════════════════════════════════════════════════════════
const outPath = "/mnt/user-data/outputs/Flow_Slides_Final.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Done:", outPath);
}).catch(err => console.error(err));