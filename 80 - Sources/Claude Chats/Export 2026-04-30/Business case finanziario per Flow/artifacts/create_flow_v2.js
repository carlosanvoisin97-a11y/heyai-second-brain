const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "HeyAI";
pres.title = "Flow — Business Case";

const BG = "000000";
const BOX = "232831";
const PUR = "BAA4EB";
const PUR_L = "9B8EC4";
const GRN = "7DDF80";
const W = "FFFFFF";
const G = "CCCCCC";
const PDOT = "5728B8";
const F = "Acre Medium";
const TH = "2A2440"; // table header
const TR1 = "1A1A25"; // table odd
const TR2 = "16161F"; // table even
const TT = "1C3A1C"; // table total

// ═══════════════════════════════════════════════════════
// SLIDE 1: SOLUTION OVERVIEW
// ═══════════════════════════════════════════════════════
let s1 = pres.addSlide();
s1.background = { color: BG };

// Tag
s1.addShape(pres.shapes.RECTANGLE, { x: 11.79, y: 0.22, w: 0.12, h: 0.18, fill: { color: GRN } });
s1.addText("Tutti i Reparti", { x: 11.10, y: 0.20, w: 0.85, h: 0.22, fontSize: 10.5, fontFace: F, color: W, align: "right", valign: "middle", margin: 0 });

// Title
s1.addText("Flow - Task Mgmt System", { x: 0.63, y: 0.39, w: 10.5, h: 1.16, fontSize: 54, fontFace: F, color: W, valign: "top", margin: 0 });

// Subtitle
s1.addText("Pianificazione, assegnazione e monitoraggio delle attivit\u00E0 operative per commessa: i task emergono direttamente dalle call su Minutes, si aggiornano da mobile durante sopralluoghi e trasferte, e alimentano automaticamente il gestionale", { x: 0.63, y: 1.38, w: 11.95, h: 0.70, fontSize: 14, fontFace: F, color: W, valign: "top", margin: 0 });

// ── LEFT: FUNZIONALITÀ CHIAVE ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.63, y: 2.20, w: 4.31, h: 4.25, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("FUNZIONALIT\u00C0 CHIAVE", { x: 0.83, y: 2.30, w: 3.91, h: 0.30, fontSize: 14, fontFace: F, color: PUR, bold: true, margin: 0 });
s1.addText([
  { text: "Ricezione task strutturati da Minutes: dopo ogni call, i task vengono estratti con assegnatario, scadenza e priorit\u00E0", options: { fontSize: 13, fontFace: F, color: W, bullet: true, breakLine: true } },
  { text: "Aggiornamento da mobile con note vocali e foto durante sopralluoghi", options: { fontSize: 13, fontFace: F, color: W, bullet: true, breakLine: true } },
  { text: "Upload contratti e documenti: estrae scadenze contrattuali e crea reminder", options: { fontSize: 13, fontFace: F, color: W, bullet: true, breakLine: true } },
  { text: "Tagging cross-reparto: @mention per coinvolgere colleghi, con notifica in-app ed email", options: { fontSize: 13, fontFace: F, color: W, bullet: true, breakLine: true } },
  { text: "Push dati aggregati su Link: task completati con costi e documenti allegati alimentano il budget e il Progress senza reinserimento", options: { fontSize: 13, fontFace: F, color: W, bullet: true } }
], { x: 0.83, y: 2.65, w: 3.91, h: 3.65, valign: "top", margin: [0, 8, 0, 8], lineSpacingMultiple: 1.1 });

// ── MIDDLE TOP: IMPATTO DI BUSINESS ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.08, y: 2.21, w: 3.84, h: 1.15, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("IMPATTO DI BUSINESS", { x: 5.28, y: 2.31, w: 3.44, h: 0.30, fontSize: 14, fontFace: F, color: PUR, bold: true, margin: 0 });
// Slider
s1.addShape(pres.shapes.LINE, { x: 5.59, y: 2.87, w: 2.53, h: 0, line: { color: W, width: 1.5 } });
s1.addShape(pres.shapes.LINE, { x: 5.60, y: 2.77, w: 0, h: 0.19, line: { color: W, width: 1.5 } });
s1.addShape(pres.shapes.LINE, { x: 8.10, y: 2.77, w: 0, h: 0.19, line: { color: W, width: 1.5 } });
s1.addShape(pres.shapes.OVAL, { x: 7.56, y: 2.75, w: 0.24, h: 0.24, fill: { color: PDOT } });
s1.addText("Basso", { x: 5.20, y: 3.01, w: 0.80, h: 0.25, fontSize: 9, fontFace: F, color: W, margin: 0 });
s1.addText("Alto", { x: 7.74, y: 3.01, w: 0.74, h: 0.25, fontSize: 9, fontFace: F, color: W, margin: 0, align: "right" });

// ── MIDDLE: PAIN POINT RISOLTO ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.08, y: 3.49, w: 3.84, h: 1.91, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("PAIN POINT RISOLTO", { x: 5.28, y: 3.56, w: 3.44, h: 0.28, fontSize: 14, fontFace: F, color: PUR, bold: true, margin: 0 });
s1.addText("Il coordinamento di 260 commesse e ~20.000 task annui avviene senza alcun tool: WhatsApp, email, telefonate, carta. I 14 coordinatori spendono fino al 65% del tempo in attivit\u00E0 di puro coordinamento. Le 32 risorse operative saltano continuamente tra canali, perdendo fino a 5,4 ore/settimana in context switching. Le scadenze contrattuali sono affidate alla memoria individuale.", { x: 5.19, y: 3.85, w: 3.60, h: 1.45, fontSize: 10, fontFace: F, color: G, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });

// ── BOTTOM MIDDLE: INVESTIMENTO ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.08, y: 5.52, w: 3.84, h: 0.93, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("INVESTIMENTO", { x: 5.28, y: 5.60, w: 3.44, h: 0.28, fontSize: 14, fontFace: F, color: GRN, bold: true, margin: 0 });
s1.addText([
  { text: "90.000 \u20AC ", options: { fontSize: 14, fontFace: F, color: W, strike: true } },
  { text: "\u2192 ", options: { fontSize: 14, fontFace: F, color: W } },
  { text: "75.000", options: { fontSize: 14, fontFace: F, color: W, bold: true } },
  { text: " (acquisto in bundle)", options: { fontSize: 11, fontFace: F, color: G } }
], { x: 5.15, y: 5.93, w: 3.73, h: 0.34, valign: "middle", margin: 0 });

// ── RIGHT: KPI CHIAVE & TAKE AWAY ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 9.06, y: 2.20, w: 3.87, h: 4.25, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("KPI CHIAVE & TAKE AWAY", { x: 9.26, y: 2.30, w: 3.47, h: 0.32, fontSize: 14, fontFace: F, color: W, bold: true, margin: 0 });

// KPI rows
const kpis = [
  { val: "\u20AC114.943/anno", lbl: "In Risorse liberate" },
  { val: "153%", lbl: "ROI a due anni" },
  { val: "~10 mesi", lbl: "Payback Period" }
];
let ky = 2.78;
kpis.forEach(k => {
  s1.addText(k.val, { x: 9.26, y: ky, w: 1.70, h: 0.32, fontSize: 16, fontFace: F, color: GRN, bold: true, margin: 0 });
  s1.addText(k.lbl, { x: 10.95, y: ky + 0.04, w: 1.90, h: 0.28, fontSize: 10.5, fontFace: F, color: W, margin: 0 });
  ky += 0.32;
});

// Take-aways
s1.addText([
  { text: "Flow si ripaga in meno di 1 anno\n", options: { fontSize: 13, fontFace: F, color: W, bold: true, breakLine: false } },
  { text: "ROI +153%, payback ~10 mesi. Dal dodicesimo mese, ogni euro \u00E8 valore netto per Noloop.\n", options: { fontSize: 11, fontFace: F, color: G, breakLine: true } },
  { text: "3.351 ore liberate = capacit\u00E0 per crescere senza assumere\n", options: { fontSize: 13, fontFace: F, color: W, bold: true, breakLine: false } },
  { text: "Tempo restituito a creare new business, cura dei clienti esistenti e coordinamento progetti\n", options: { fontSize: 11, fontFace: F, color: G, breakLine: true } },
  { text: "Da rincorrere a coordinare\n", options: { fontSize: 13, fontFace: F, color: W, bold: true, breakLine: false } },
  { text: "I PM passano da 30+ messaggi WhatsApp/giorno a dashboard in tempo reale su 260 commesse.", options: { fontSize: 11, fontFace: F, color: G } }
], { x: 9.25, y: 3.90, w: 3.50, h: 2.40, valign: "top", margin: 0, lineSpacingMultiple: 1.05 });

// Page number
s1.addText("22", { x: 12.30, y: 6.90, w: 0.70, h: 0.35, fontSize: 12, fontFace: F, color: W, align: "right", margin: 0 });


// ═══════════════════════════════════════════════════════
// SLIDE 2: BUSINESS CASE IN SINTESI
// ═══════════════════════════════════════════════════════
let s2 = pres.addSlide();
s2.background = { color: BG };

// Title
s2.addText("Business Case in Sintesi", { x: 0.63, y: 0.39, w: 12.43, h: 1.16, fontSize: 54, fontFace: F, color: W, valign: "top", margin: 0 });

// Table
const mc = (txt, fill, clr, opts = {}) => ({
  text: txt,
  options: { fill: { color: fill }, color: clr, fontSize: opts.sz || 12, fontFace: F, bold: opts.b || false, align: opts.a || "left", valign: "middle", margin: [4, 8, 4, 8] }
});

s2.addTable([
  [mc("Area di miglioramento", TH, PUR_L, {b:true}), mc("Ore senza AI", TH, PUR_L, {b:true,a:"center"}), mc("Ore con AI", TH, PUR_L, {b:true,a:"center"}), mc("Delta", TH, PUR_L, {b:true,a:"center"})],
  [mc("Coordinamento manageriale", TR1, W), mc("4.234h", TR1, W, {a:"center"}), mc("2.957h", TR1, W, {a:"center"}), mc("-30%", TR1, W, {a:"center"})],
  [mc("Esecuzione operativa", TR2, W), mc("8.294h", TR2, W, {a:"center"}), mc("6.220h", TR2, W, {a:"center"}), mc("-25%", TR2, W, {a:"center"})],
  [mc("", TT, W), mc("", TT, W), mc("", TT, W), mc("\u20AC114.943/anno\n(1,95 FTE)", TT, W, {b:true,a:"center",sz:13})]
], {
  x: 0.67, y: 1.74, w: 9.03,
  colW: [3.36, 1.55, 1.55, 2.58],
  rowH: [0.37, 0.37, 0.37, 0.59],
  border: { pt: 0, color: BG }
});

// Assunzioni
s2.addText("Assunzioni", { x: 10.10, y: 1.74, w: 2.67, h: 0.42, fontSize: 18.67, fontFace: F, color: W, bold: true, margin: 0 });

const ass = [
  ["46", " risorse operative su 5 reparti"],
  ["\u20AC35/h", " costo coordinatori"],
  ["\u20AC34/h", " costo blend operativi"],
  ["1.720", " ore lavorative/anno per FTE"],
  ["30%", " realizzo coordinatori (Asana)"],
  ["25%", " realizzo operativi (Asana)"],
  ["75%", " ramp-up Anno 1"]
];
let ay = 2.22;
ass.forEach(a => {
  s2.addText([
    { text: a[0], options: { fontSize: 11.33, fontFace: F, color: PUR_L, bold: true } },
    { text: a[1], options: { fontSize: 11.33, fontFace: F, color: G } }
  ], { x: 10.10, y: ay, w: 2.80, h: 0.26, valign: "middle", margin: 0 });
  ay += 0.30;
});

// Explanation paragraph
s2.addText("Il risparmio \u00E8 calcolato con un modello a doppio binario ancorato ai benchmark Asana 2023: i 14 coordinatori (PM e Pianificazione) perdono fino a 6,3h/settimana in \"work about work\", le 32 risorse operative fino a 5,4h/settimana in context switching tra email, WhatsApp, Excel e telefonate. Abbiamo applicato tassi di realizzo nella fascia bassa dei benchmark (30% e 25%), inferiori al floor riportato da McKinsey e Insightful. Le ore sono valorizzate al costo orario aziendale per profilo (fully loaded, RAL \u00D71,40). Lo scenario presentato assume un ramp-up al 75% nel primo anno e adozione al 90% nel secondo.", {
  x: 0.67, y: 4.10, w: 9.03, h: 2.10,
  fontSize: 14, fontFace: F, color: W, valign: "top", margin: 0, lineSpacingMultiple: 1.20
});

// Page number
s2.addText("23", { x: 12.30, y: 6.90, w: 0.70, h: 0.35, fontSize: 12, fontFace: F, color: W, align: "right", margin: 0 });

// Save
pres.writeFile({ fileName: "/mnt/user-data/outputs/Flow_Slides_Final.pptx" })
  .then(() => console.log("Done"))
  .catch(e => console.error(e));