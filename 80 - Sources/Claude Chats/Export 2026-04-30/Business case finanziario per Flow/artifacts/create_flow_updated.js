const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "HeyAI";
pres.title = "Flow — Business Case";

const BG = "000000";
const BOX = "232831";
const PUR = "BAA4EB";
const PUR_L = "9B8EC4";
const GRN = "66DDAB";
const W = "FFFFFF";
const G = "CCCCCC";
const PDOT = "5728B8";
const F = "Acre Medium";
const TH = "2A2440";
const TR1 = "1A1A25";
const TR2 = "16161F";
const TT = "1C3A1C";

// ═══════════════════════════════════════════════════════
// SLIDE 1: SOLUTION OVERVIEW
// ═══════════════════════════════════════════════════════
let s1 = pres.addSlide();
s1.background = { color: BG };

// Tag top right
s1.addShape(pres.shapes.RECTANGLE, { x: 11.69, y: 0.27, w: 0.10, h: 0.14, fill: { color: GRN } });
s1.addText("Tutti i Reparti", { x: 11.83, y: 0.22, w: 1.38, h: 0.18, fontSize: 10.5, fontFace: F, color: W, align: "left", valign: "middle", margin: 0 });

// Title
s1.addText("Flow - Task Mgmt System", { x: 0.63, y: 0.39, w: 12.43, h: 1.16, fontSize: 54, fontFace: F, color: W, valign: "top", margin: 0 });

// Subtitle
s1.addText("Pianificazione, assegnazione e monitoraggio delle attivit\u00E0 operative per commessa: i task emergono direttamente dalle call su Minutes, si aggiornano dal telefono con note vocali durante sopralluoghi e trasferte, e alimentano automaticamente il gestionale", { x: 0.63, y: 1.38, w: 11.95, h: 0.70, fontSize: 14, fontFace: F, color: W, valign: "top", margin: 0 });

// ── LEFT: FUNZIONALITÀ CHIAVE ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.63, y: 2.20, w: 4.31, h: 4.25, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("FUNZIONALIT\u00C0 CHIAVE", { x: 0.83, y: 2.30, w: 3.91, h: 0.30, fontSize: 14, fontFace: F, color: PUR, bold: true, margin: 0 });
s1.addText([
  { text: "Ricezione task strutturati da Minutes: dopo ogni call, i task vengono estratti con assegnatario, scadenza e priorit\u00E0", options: { fontSize: 13, fontFace: F, color: W, bullet: true, breakLine: true } },
  { text: "Aggiornamento da mobile con note vocali e foto (es.: durante i sopralluoghi)", options: { fontSize: 13, fontFace: F, color: W, bullet: true, breakLine: true } },
  { text: "Upload contratti e documenti: estrae scadenze contrattuali e crea reminder", options: { fontSize: 13, fontFace: F, color: W, bullet: true, breakLine: true } },
  { text: "Tagging cross-reparto: @mention per coinvolgere colleghi, con notifica in-app ed email", options: { fontSize: 13, fontFace: F, color: W, bullet: true, breakLine: true } },
  { text: "Push dati aggregati su Link: task completati con costi, fatture, contratti o altri documenti allegati alimentano il budget e il Progress senza reinserimento", options: { fontSize: 13, fontFace: F, color: W, bullet: true } }
], { x: 0.83, y: 2.65, w: 3.91, h: 3.65, valign: "top", margin: [0, 8, 0, 8], lineSpacingMultiple: 1.1 });

// ── MIDDLE TOP: IMPATTO DI BUSINESS ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.08, y: 2.21, w: 3.84, h: 1.15, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("IMPATTO DI BUSINESS", { x: 5.28, y: 2.31, w: 3.44, h: 0.30, fontSize: 14, fontFace: F, color: PUR, bold: true, margin: 0 });
s1.addShape(pres.shapes.LINE, { x: 5.59, y: 2.87, w: 2.53, h: 0, line: { color: W, width: 1.5 } });
s1.addShape(pres.shapes.LINE, { x: 5.60, y: 2.77, w: 0, h: 0.19, line: { color: W, width: 1.5 } });
s1.addShape(pres.shapes.LINE, { x: 8.10, y: 2.77, w: 0, h: 0.19, line: { color: W, width: 1.5 } });
s1.addShape(pres.shapes.OVAL, { x: 7.56, y: 2.75, w: 0.24, h: 0.24, fill: { color: PDOT } });
s1.addText("Basso", { x: 5.20, y: 3.01, w: 0.80, h: 0.25, fontSize: 9, fontFace: F, color: W, margin: 0 });
s1.addText("Alto", { x: 7.74, y: 3.01, w: 0.74, h: 0.25, fontSize: 9, fontFace: F, color: W, margin: 0, align: "right" });

// ── MIDDLE: PAIN POINT RISOLTO ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.08, y: 3.49, w: 3.84, h: 1.91, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("PAIN POINT RISOLTO", { x: 5.28, y: 3.56, w: 3.44, h: 0.28, fontSize: 14, fontFace: F, color: PUR, bold: true, margin: 0 });
s1.addText("Il coordinamento di 260 commesse e ~20.000 task annui avviene senza alcun tool: WhatsApp, email, telefonate. I Client Lead e i Responsabili di Area dedicano fino all\u201980% del tempo a coordinare risorse. PM e Operativi gestiscono i progetti frammentando il lavoro su 4 canali diversi. Le scadenze su 650 contratti/anno sono affidate alla memoria individuale.", { x: 5.15, y: 3.81, w: 3.72, h: 1.58, fontSize: 10.5, fontFace: F, color: W, valign: "top", margin: 0, lineSpacingMultiple: 1.15 });

// ── BOTTOM MIDDLE: INVESTIMENTO ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.08, y: 5.52, w: 3.84, h: 0.93, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("INVESTIMENTO", { x: 5.28, y: 5.60, w: 3.44, h: 0.28, fontSize: 14, fontFace: F, color: GRN, bold: true, margin: 0 });
s1.addText([
  { text: "75.000 \u20AC ", options: { fontSize: 14, fontFace: F, color: W, strike: true } },
  { text: "\u2192 ", options: { fontSize: 14, fontFace: F, color: W } },
  { text: "67.000", options: { fontSize: 14, fontFace: F, color: W, bold: true } },
  { text: " (acquisto in bundle)", options: { fontSize: 11, fontFace: F, color: G } }
], { x: 5.15, y: 5.96, w: 3.73, h: 0.34, valign: "middle", margin: 0 });

// ── RIGHT: KPI CHIAVE & TAKE AWAY ──
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 9.06, y: 2.20, w: 3.87, h: 4.25, fill: { color: BOX }, rectRadius: 0.08 });
s1.addText("KPI CHIAVE & TAKE AWAY", { x: 9.26, y: 2.30, w: 3.47, h: 0.32, fontSize: 14, fontFace: F, color: W, bold: true, margin: 0 });

// KPI values
s1.addText("\u20AC125.174/anno", { x: 9.26, y: 2.65, w: 1.85, h: 0.37, fontSize: 16, fontFace: F, color: GRN, bold: true, margin: 0 });
s1.addText("In Risorse liberate", { x: 11.10, y: 2.70, w: 1.75, h: 0.28, fontSize: 10.5, fontFace: F, color: W, margin: 0 });
s1.addText("175%", { x: 9.26, y: 2.97, w: 1.85, h: 0.37, fontSize: 16, fontFace: F, color: GRN, bold: true, margin: 0 });
s1.addText("ROI a due anni", { x: 11.10, y: 3.02, w: 1.75, h: 0.28, fontSize: 10.5, fontFace: F, color: W, margin: 0 });
s1.addText("~9,5 mesi", { x: 9.26, y: 3.29, w: 1.85, h: 0.37, fontSize: 16, fontFace: F, color: GRN, bold: true, margin: 0 });
s1.addText("Payback Period", { x: 11.10, y: 3.34, w: 1.75, h: 0.28, fontSize: 10.5, fontFace: F, color: W, margin: 0 });

// Take-aways
s1.addText([
  { text: "Flow si ripaga in meno di 10 mesi\n", options: { fontSize: 13, fontFace: F, color: W, bold: true, breakLine: false } },
  { text: "ROI +175%, payback ~9,5 mesi. Dal decimo mese, ogni euro \u00E8 valore netto per Noloop.\n\n", options: { fontSize: 11, fontFace: F, color: G, breakLine: true } },
  { text: "Da 30 messaggi WhatsApp a un click\n", options: { fontSize: 13, fontFace: F, color: W, bold: true, breakLine: false } },
  { text: "Client Lead e Responsabili passano dall\u2019inseguire risposte su 4 canali a consultare lo stato in tempo reale. Il coordinamento diventa automatico.\n\n", options: { fontSize: 11, fontFace: F, color: G, breakLine: true } },
  { text: "Zero scadenze dimenticate su 650 contratti/anno\n", options: { fontSize: 13, fontFace: F, color: W, bold: true, breakLine: false } },
  { text: "Penali, rinnovi indesiderati, opzioni non esercitate: Flow trasforma il tracciamento da memoria individuale a reminder automatici.", options: { fontSize: 11, fontFace: F, color: G } }
], { x: 9.25, y: 3.76, w: 3.60, h: 2.40, valign: "top", margin: 0, lineSpacingMultiple: 1.05 });

// Page number
s1.addText("1", { x: 9.92, y: 6.80, w: 3.00, h: 0.40, fontSize: 12, fontFace: F, color: W, align: "right", margin: 0 });


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
  options: { fill: { color: fill }, color: clr, fontSize: opts.sz || 12, fontFace: F, bold: opts.b || false, align: opts.a || "left", valign: "middle", margin: [3, 6, 3, 6] }
});

s2.addTable([
  // Header
  [mc("Area di miglioramento", TH, PUR_L, {b:true}), mc("Ore senza AI", TH, PUR_L, {b:true,a:"center"}), mc("Ore con AI", TH, PUR_L, {b:true,a:"center"}), mc("Delta", TH, PUR_L, {b:true,a:"center"})],
  // Row 1 - Coordinamento Senior
  [mc("Coord. Senior (Client Lead + Resp. Area)", TR1, W), mc("2.722h", TR1, W, {a:"center"}), mc("1.771h", TR1, W, {a:"center"}), mc("-35%", TR1, W, {a:"center"})],
  // Row 2 - PM + Operativi
  [mc("Coordinamento PM + Operativi", TR2, W), mc("5.184h", TR2, W, {a:"center"}), mc("3.888h", TR2, W, {a:"center"}), mc("-25%", TR2, W, {a:"center"})],
  // Row 3 - Supporto
  [mc("Task tracking Supporto (Pian + Segr + Com)", TR1, W), mc("4.406h", TR1, W, {a:"center"}), mc("3.745h", TR1, W, {a:"center"}), mc("-15%", TR1, W, {a:"center"})],
  // Row 4 - Scadenze
  [mc("Scadenze contrattuali e reminder", TR2, W), mc("227h", TR2, W, {a:"center"}), mc("49h", TR2, W, {a:"center"}), mc("-78%", TR2, W, {a:"center"})],
  // Row 5 - Sopralluoghi
  [mc("Documentazione sopralluoghi mobile", TR1, W), mc("36h", TR1, W, {a:"center"}), mc("14h", TR1, W, {a:"center"}), mc("-61%", TR1, W, {a:"center"})],
  // Total
  [mc("", TT, W), mc("", TT, W), mc("", TT, W), mc("\u20AC125.174/anno\n(1,69 FTE)", TT, W, {b:true,a:"center",sz:13})]
], {
  x: 0.75, y: 1.69, w: 9.04,
  colW: [3.36, 1.55, 1.55, 2.58],
  rowH: [0.34, 0.30, 0.30, 0.30, 0.30, 0.30, 0.50],
  border: { pt: 0, color: BG }
});

// Assunzioni
s2.addText("Assunzioni", { x: 10.18, y: 1.69, w: 2.67, h: 0.42, fontSize: 18.67, fontFace: F, color: W, bold: true, margin: 0 });

const ass = [
  ["260", " commesse/anno"],
  ["46", " risorse su 3 livelli"],
  ["\u20AC70/h", " Resp. Area (fully loaded)"],
  ["\u20AC50/h", " Client Lead (fully loaded)"],
  ["\u20AC35/h", " PM e Operativi"],
  ["35/25/15%", " realizzo per livello"],
  ["75%", " ramp-up Anno 1"]
];
let ay = 2.17;
ass.forEach(a => {
  s2.addText([
    { text: a[0], options: { fontSize: 11.33, fontFace: F, color: PUR_L, bold: true } },
    { text: a[1], options: { fontSize: 11.33, fontFace: F, color: G } }
  ], { x: 10.18, y: ay, w: 2.80, h: 0.26, valign: "middle", margin: 0 });
  ay += 0.28;
});

// Explanation paragraph
s2.addText("Il risparmio \u00E8 calcolato con un modello a tre livelli calibrato sull\u2019intensit\u00E0 di coordinamento: i 4 Client Lead e 5 Responsabili di Area, che oggi dedicano fino all\u201980% del tempo a coordinare risorse su WhatsApp e email, recuperano 2,2h/settimana (realizzo 35%). I 20 PM e Operativi, che gestiscono i progetti su canali frammentati, recuperano 1,35h/settimana (realizzo 25%, benchmark Asana). Le 17 risorse di supporto (pianificazione, segreteria, comunicazione) hanno task pi\u00F9 individuali e recuperano 0,81h/settimana (realizzo 15%). I reminder automatici su ~650 scadenze contrattuali eliminano un pain point confermato nelle interviste operative. Le ore sono valorizzate al costo orario aziendale per profilo (RAL \u00D71,40 / 1.720h).", {
  x: 0.75, y: 4.44, w: 9.03, h: 2.10,
  fontSize: 13.5, fontFace: F, color: W, valign: "top", margin: 0, lineSpacingMultiple: 1.20
});

// Page number
s2.addText("2", { x: 9.92, y: 6.80, w: 3.00, h: 0.40, fontSize: 12, fontFace: F, color: W, align: "right", margin: 0 });

// Save
pres.writeFile({ fileName: "/mnt/user-data/outputs/Flow_Slides_Updated.pptx" })
  .then(() => console.log("Done"))
  .catch(e => console.error(e));