const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "HeyAI";
pres.title = "Flow — Business Case in Sintesi";

const BG = "000000";
const F = "Acre Medium";
const W = "FFFFFF";
const G = "CCCCCC";
const PUR_L = "9B8EC4";
const TH = "2A2440";
const TR1 = "1A1A25";
const TR2 = "16161F";
const TT = "1C3A1C";

let s = pres.addSlide();
s.background = { color: BG };

// Title
s.addText("Business Case in Sintesi", {
  x: 0.63, y: 0.39, w: 12.43, h: 1.16,
  fontSize: 54, fontFace: F, color: W, valign: "top", margin: 0
});

// ── TABLE ──
const mc = (txt, fill, clr, opts = {}) => ({
  text: txt,
  options: {
    fill: { color: fill },
    color: clr,
    fontSize: opts.sz || 12,
    fontFace: F,
    bold: opts.b || false,
    align: opts.a || "left",
    valign: "middle",
    margin: [3, 6, 3, 6]
  }
});

const rows = [
  // Header
  [
    mc("Area di miglioramento", TH, PUR_L, { b: true }),
    mc("Ore senza AI", TH, PUR_L, { b: true, a: "center" }),
    mc("Ore con AI", TH, PUR_L, { b: true, a: "center" }),
    mc("Delta", TH, PUR_L, { b: true, a: "center" })
  ],
  // Row 1
  [
    mc("Ricezione task da Minutes", TR1, W),
    mc("200h", TR1, W, { a: "center" }),
    mc("33h", TR1, W, { a: "center" }),
    mc("-83%", TR1, W, { a: "center" })
  ],
  // Row 2
  [
    mc("Coordinamento task operativo", TR2, W),
    mc("9.504h", TR2, W, { a: "center" }),
    mc("7.128h", TR2, W, { a: "center" }),
    mc("-25%", TR2, W, { a: "center" })
  ],
  // Row 3
  [
    mc("Coord. comunicazione + biglietterie", TR1, W),
    mc("2.304h", TR1, W, { a: "center" }),
    mc("1.728h", TR1, W, { a: "center" }),
    mc("-25%", TR1, W, { a: "center" })
  ],
  // Row 4
  [
    mc("Scadenze contrattuali e reminder", TR2, W),
    mc("227h", TR2, W, { a: "center" }),
    mc("49h", TR2, W, { a: "center" }),
    mc("-78%", TR2, W, { a: "center" })
  ],
  // Row 5
  [
    mc("Documentazione sopralluoghi mobile", TR1, W),
    mc("36h", TR1, W, { a: "center" }),
    mc("14h", TR1, W, { a: "center" }),
    mc("-61%", TR1, W, { a: "center" })
  ],
  // Total
  [
    mc("", TT, W),
    mc("", TT, W),
    mc("", TT, W),
    mc("\u20AC114.437/anno\n(1,93 FTE)", TT, W, { b: true, a: "center", sz: 13 })
  ]
];

s.addTable(rows, {
  x: 0.67, y: 1.74, w: 9.03,
  colW: [3.36, 1.55, 1.55, 2.58],
  rowH: [0.34, 0.30, 0.30, 0.30, 0.30, 0.30, 0.50],
  border: { pt: 0, color: BG }
});

// ── ASSUNZIONI ──
s.addText("Assunzioni", {
  x: 10.10, y: 1.74, w: 2.67, h: 0.42,
  fontSize: 18.67, fontFace: F, color: W, bold: true, margin: 0
});

const ass = [
  ["260", " commesse/anno"],
  ["~20.000", " task operativi/anno"],
  ["\u20AC35/h", " costo operativi (fully loaded)"],
  ["\u20AC31/h", " costo comunicazione"],
  ["1.720", " ore lavorative/anno per FTE"],
  ["25%", " riduzione coordinamento"],
  ["85%", " tasso di adozione (realistico)"],
  ["48", " settimane lavorative/anno"]
];
let ay = 2.22;
ass.forEach(a => {
  s.addText([
    { text: a[0], options: { fontSize: 11.33, fontFace: F, color: PUR_L, bold: true } },
    { text: a[1], options: { fontSize: 11.33, fontFace: F, color: G } }
  ], { x: 10.10, y: ay, w: 2.80, h: 0.26, valign: "middle", margin: 0 });
  ay += 0.28;
});

// ── EXPLANATION PARAGRAPH ──
s.addText(
  "Il risparmio \u00E8 calcolato come differenza tra le ore oggi dedicate a coordinamento operativo su canali informali (WhatsApp, email, telefonate, carta) e le ore residue dopo l'introduzione di Flow, che centralizza assegnazione, tracciamento e aggiornamento dei task in un unico punto. Il cuore del modello \u00E8 l'Area 2: 33 risorse ad alta intensit\u00E0 che oggi spendono ~6h/settimana in puro coordinamento, con una riduzione del 25% \u2014 nella fascia bassa del benchmark di settore (25-35% per adoption di tool strutturati in contesti partiti da zero). I reminder automatici su ~650 scadenze contrattuali eliminano un pain point confermato nelle interviste operative. Le ore sono valorizzate al costo orario aziendale per profilo (RAL \u00D71,40 / 1.720h). Lo scenario realistico applica un tasso di adozione dell'85%.",
  {
    x: 0.67, y: 4.55, w: 9.03, h: 2.10,
    fontSize: 13.5, fontFace: F, color: W, valign: "top", margin: 0,
    lineSpacingMultiple: 1.20
  }
);

// Page number
s.addText("23", {
  x: 12.30, y: 6.90, w: 0.70, h: 0.35,
  fontSize: 12, fontFace: F, color: W, align: "right", margin: 0
});

// Save
pres.writeFile({ fileName: "/mnt/user-data/outputs/Flow_BC_Dettagliato.pptx" })
  .then(() => console.log("Done"))
  .catch(e => console.error(e));