const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "HeyAI";
pres.title = "Link — Business Case";

// === COLORS ===
const BG = "111118";
const PURPLE = "9B8EC4";
const PURPLE_DARK = "2A2440";
const GREEN_DARK = "1C3A1C";
const GREEN = "4ADE80";
const WHITE = "FFFFFF";
const GRAY_LIGHT = "CCCCCC";
const GRAY_MED = "999999";
const TEXT_DIM = "8888AA";
const CARD_BG = "1A1A25";
const CARD_BG_ALT = "16161F";
const CARD_BORDER = "2A2A3A";

// ============================================================
// SLIDE 1 — Link - Sistema Gestionale (product overview)
// ============================================================
let s1 = pres.addSlide();
s1.background = { color: BG };

// Tag top-right
s1.addShape(pres.shapes.RECTANGLE, { x: 8.65, y: 0.15, w: 0.08, h: 0.25, fill: { color: PURPLE } });
s1.addText("PM e Capi Area", { x: 8.8, y: 0.15, w: 1.1, h: 0.25, fontSize: 8, fontFace: "Arial", color: GRAY_LIGHT, margin: 0 });

// Title
s1.addText("Link \u2013 Sistema Gestionale", { x: 0.5, y: 0.3, w: 8, h: 0.7, fontSize: 36, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0 });

// Subtitle
s1.addText("Integra l\u2019intero flusso operativo della commessa \u2014 dal brief al consuntivo \u2014 in un unico punto di raccolta dati con sincronizzazione continua verso Business Central, eliminando ogni doppio inserimento e alimentando automaticamente budget, fatturazione attiva e passiva, e Progress.", {
  x: 0.5, y: 1.0, w: 9, h: 0.45, fontSize: 10, fontFace: "Arial", color: GRAY_LIGHT, margin: 0
});

// === CARD: FUNZIONALITA CHIAVE (left) ===
const cardBorder = { pt: 0.5, color: CARD_BORDER };
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.4, y: 1.6, w: 3.65, h: 3.1, fill: { color: CARD_BG }, rectRadius: 0.08, line: { color: CARD_BORDER, width: 0.5 } });
s1.addText("FUNZIONALIT\u00C0 CHIAVE", { x: 0.6, y: 1.7, w: 3.2, h: 0.25, fontSize: 9, fontFace: "Arial", color: PURPLE, bold: true, margin: 0 });

const funcItems = [
  "Creazione KOM automatica da Minutes con push diretto verso BC via API",
  "Budget digitale a pi\u00F9 stadi (previsionale, pre-chiusura, consuntivo) con snapshot, facing temporale e sync continua BC",
  "Blocco chiusura commessa finch\u00E9 ogni voce non ha fattura associata e quadratura con BC confermata",
  "Fatturazione attiva e passiva alimentate dal contesto operativo: email, memo vocali e dati budget convergono in un unico flusso verso BC",
  "Dashboard direzionale con marginalit\u00E0, scostamenti, carichi di lavoro e interrogazione Sally in linguaggio naturale",
  "Integrazione nativa con Flow: il lavoro quotidiano genera automaticamente i dati per Progress, budget e fatturazione"
];
let funcTexts = funcItems.map((item, i) => ({
  text: "\u2022 " + item,
  options: { fontSize: 7.5, fontFace: "Arial", color: WHITE, breakLine: true, lineSpacingMultiple: 1.15 }
}));
s1.addText(funcTexts, { x: 0.6, y: 2.0, w: 3.3, h: 2.6, valign: "top", margin: 0 });

// === CARD: IMPATTO DI BUSINESS (center top) ===
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.25, y: 1.6, w: 2.9, h: 0.7, fill: { color: CARD_BG }, rectRadius: 0.08, line: { color: CARD_BORDER, width: 0.5 } });
s1.addText("IMPATTO DI BUSINESS", { x: 4.4, y: 1.65, w: 2.5, h: 0.2, fontSize: 9, fontFace: "Arial", color: PURPLE, bold: true, margin: 0 });
// Scale line
s1.addShape(pres.shapes.LINE, { x: 4.5, y: 2.05, w: 2.3, h: 0, line: { color: WHITE, width: 1 } });
s1.addShape(pres.shapes.LINE, { x: 4.5, y: 1.98, w: 0, h: 0.14, line: { color: WHITE, width: 1 } });
s1.addShape(pres.shapes.LINE, { x: 6.8, y: 1.98, w: 0, h: 0.14, line: { color: WHITE, width: 1 } });
s1.addShape(pres.shapes.OVAL, { x: 6.25, y: 1.97, w: 0.16, h: 0.16, fill: { color: PURPLE } });
s1.addText("Basso", { x: 4.45, y: 2.12, w: 0.6, h: 0.15, fontSize: 6, fontFace: "Arial", color: GRAY_MED, margin: 0 });
s1.addText("Alto", { x: 6.6, y: 2.12, w: 0.5, h: 0.15, fontSize: 6, fontFace: "Arial", color: GRAY_MED, margin: 0 });

// === CARD: PAIN POINT RISOLTO (center middle) ===
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.25, y: 2.45, w: 2.9, h: 1.25, fill: { color: CARD_BG }, rectRadius: 0.08, line: { color: CARD_BORDER, width: 0.5 } });
s1.addText("PAIN POINT RISOLTO", { x: 4.4, y: 2.5, w: 2.5, h: 0.2, fontSize: 9, fontFace: "Arial", color: PURPLE, bold: true, margin: 0 });
s1.addText("Sei capi area dedicano 11 ore a settimana a compilare un Progress Excel che duplica dati gi\u00E0 su BC. Ogni dato viene inserito almeno due volte. Le informazioni in email e memo vocali non vengono riutilizzate. Il 10% delle commesse arriva a chiusura con fatture mancanti. La direzione non ha visibilit\u00E0 in tempo reale.", {
  x: 4.4, y: 2.75, w: 2.6, h: 0.9, fontSize: 7, fontFace: "Arial", color: GRAY_LIGHT, margin: 0, valign: "top"
});

// === CARD: INVESTIMENTO (center bottom) ===
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 4.25, y: 3.85, w: 2.9, h: 0.55, fill: { color: CARD_BG }, rectRadius: 0.08, line: { color: CARD_BORDER, width: 0.5 } });
s1.addText("INVESTIMENTO", { x: 4.4, y: 3.9, w: 2.5, h: 0.18, fontSize: 9, fontFace: "Arial", color: PURPLE, bold: true, margin: 0 });
s1.addText("80.000 \u20AC \u2192 75.000 (acquisto in bundle)", { x: 4.4, y: 4.1, w: 2.6, h: 0.2, fontSize: 9, fontFace: "Arial", color: WHITE, margin: 0 });

// === RIGHT COLUMN: KPI & TAKE AWAY ===
s1.addText("KPI CHIAVE & TAKE AWAY", { x: 7.4, y: 1.6, w: 2.4, h: 0.2, fontSize: 10, fontFace: "Arial", color: WHITE, bold: true, margin: 0 });

// KPI numbers
const kpis = [
  { val: "\u20AC60.000/anno", label: "In Risorse liberate" },
  { val: "42%", label: "ROI a due anni" },
  { val: "18 mesi", label: "Payback Period" },
];
let kpiY = 1.9;
kpis.forEach(k => {
  s1.addText(k.val, { x: 7.4, y: kpiY, w: 1.2, h: 0.22, fontSize: 12, fontFace: "Arial", color: GREEN, bold: true, margin: 0 });
  s1.addText(k.label, { x: 8.6, y: kpiY + 0.02, w: 1.3, h: 0.2, fontSize: 8, fontFace: "Arial", color: GRAY_LIGHT, margin: 0 });
  kpiY += 0.28;
});

// Take away 1
s1.addText("Si ripaga in 18 mesi, ROI +42%", {
  x: 7.4, y: 2.85, w: 2.4, h: 0.2, fontSize: 8.5, fontFace: "Arial", color: WHITE, bold: true, margin: 0
});
s1.addText("1.500+ ore liberate e restituite a new business, cura clienti e qualit\u00E0 delle proposte. Dal diciannovesimo mese, ogni euro \u00E8 valore netto.", {
  x: 7.4, y: 3.05, w: 2.4, h: 0.45, fontSize: 7, fontFace: "Arial", color: GRAY_LIGHT, margin: 0, valign: "top"
});

// Take away 2
s1.addText("Dal compilare al decidere", {
  x: 7.4, y: 3.55, w: 2.4, h: 0.2, fontSize: 8.5, fontFace: "Arial", color: WHITE, bold: true, margin: 0
});
s1.addText("I capi area passano da 11h/settimana di data entry a dashboard intelligente. Sally fornisce contesto e suggerimenti dallo storico operativo.", {
  x: 7.4, y: 3.75, w: 2.4, h: 0.4, fontSize: 7, fontFace: "Arial", color: GRAY_LIGHT, margin: 0, valign: "top"
});

// Take away 3 (NEW - evolution)
s1.addText("Base per evoluzioni ad alto impatto", {
  x: 7.4, y: 4.2, w: 2.4, h: 0.2, fontSize: 8.5, fontFace: "Arial", color: WHITE, bold: true, margin: 0
});
s1.addText("Il contesto operativo accumulato abilita: prima nota automatizzata, controllo spese carte Revolut e automazioni crescenti. Pi\u00F9 si usa, pi\u00F9 il sistema diventa veloce e preciso.", {
  x: 7.4, y: 4.4, w: 2.4, h: 0.45, fontSize: 7, fontFace: "Arial", color: GRAY_LIGHT, margin: 0, valign: "top"
});

// Nota storno (bottom)
s1.addText("Nota: i 10.000\u20AC precedentemente quotati per la digitalizzazione del Progress Excel sono stati stornati in quanto il progetto \u00E8 stato assorbito da Link. L\u2019investimento di 80.000\u20AC \u00E8 gi\u00E0 al netto di tale storno.", {
  x: 0.4, y: 4.95, w: 6.5, h: 0.35, fontSize: 6.5, fontFace: "Arial", color: GRAY_MED, margin: 0, valign: "top"
});

// Footer logo area
s1.addText("21", { x: 9.55, y: 5.25, w: 0.3, h: 0.2, fontSize: 8, fontFace: "Arial", color: GRAY_MED, align: "right", margin: 0 });


// ============================================================
// SLIDE 2 — Business Case in Sintesi
// ============================================================
let s2 = pres.addSlide();
s2.background = { color: BG };

// Title
s2.addText("Business Case in Sintesi", { x: 0.5, y: 0.2, w: 8, h: 0.7, fontSize: 36, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0 });

// === MAIN TABLE ===
const hdr = { fill: { color: PURPLE_DARK }, color: PURPLE, bold: true, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] };
const cell = (align = "center") => ({ fill: { color: CARD_BG }, color: WHITE, fontSize: 9, fontFace: "Arial", align, valign: "middle", margin: [3, 4, 3, 4] });
const cellA = (align = "center") => ({ fill: { color: CARD_BG_ALT }, color: WHITE, fontSize: 9, fontFace: "Arial", align, valign: "middle", margin: [3, 4, 3, 4] });
const deltaCell = (align = "center") => ({ fill: { color: CARD_BG }, color: GREEN, fontSize: 9, fontFace: "Arial", align, valign: "middle", margin: [3, 4, 3, 4], bold: true });
const deltaCellA = (align = "center") => ({ fill: { color: CARD_BG_ALT }, color: GREEN, fontSize: 9, fontFace: "Arial", align, valign: "middle", margin: [3, 4, 3, 4], bold: true });

const tableData = [
  [
    { text: "Area di miglioramento", options: { ...hdr, align: "left" } },
    { text: "Ore senza AI", options: hdr },
    { text: "Ore con AI", options: hdr },
    { text: "Delta", options: hdr },
  ],
  [
    { text: "Apertura commessa", options: cell("left") },
    { text: "87h", options: cell() },
    { text: "17h", options: cell() },
    { text: "-80%", options: deltaCell() },
  ],
  [
    { text: "Compilazione Progress", options: cellA("left") },
    { text: "720h", options: cellA() },
    { text: "108h", options: cellA() },
    { text: "-85%", options: deltaCellA() },
  ],
  [
    { text: "Chiusure incomplete e fatt. passiva", options: cell("left") },
    { text: "140h", options: cell() },
    { text: "\u2014", options: cell() },
    { text: "-100%", options: deltaCell() },
  ],
  [
    { text: "Fatturazione attiva", options: cellA("left") },
    { text: "238h", options: cellA() },
    { text: "48h", options: cellA() },
    { text: "-80%", options: deltaCellA() },
  ],
  [
    { text: "Creazione Budget / PDP", options: cell("left") },
    { text: "694h", options: cell() },
    { text: "243h", options: cell() },
    { text: "-65%", options: deltaCell() },
  ],
  [
    { text: "Reporting direzione", options: cellA("left") },
    { text: "92h", options: cellA() },
    { text: "28h", options: cellA() },
    { text: "-70%", options: deltaCellA() },
  ],
  [
    { text: "", options: { fill: { color: GREEN_DARK }, fontSize: 9, fontFace: "Arial", margin: [3, 4, 3, 4] } },
    { text: "", options: { fill: { color: GREEN_DARK }, fontSize: 9, fontFace: "Arial", margin: [3, 4, 3, 4] } },
    { text: "", options: { fill: { color: GREEN_DARK }, fontSize: 9, fontFace: "Arial", margin: [3, 4, 3, 4] } },
    { text: "\u20AC60.000/anno", options: { fill: { color: GREEN_DARK }, color: WHITE, fontSize: 10, fontFace: "Arial", bold: true, align: "center", valign: "middle", margin: [4, 4, 4, 4] } },
  ],
];

s2.addTable(tableData, {
  x: 0.5, y: 1.05, colW: [2.6, 1.2, 1.2, 2.0],
  border: { pt: 0.5, color: CARD_BORDER },
  rowH: [0.28, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.30],
});

// === ASSUNZIONI (right side) ===
s2.addText("Assunzioni", { x: 7.8, y: 1.05, w: 2, h: 0.3, fontSize: 14, fontFace: "Arial Black", color: WHITE, bold: true, margin: 0 });

const assumptions = [
  { t: "260", l: " commesse/anno" },
  { t: "\u20AC70/h", l: " costo capi area (benchmark)" },
  { t: "\u20AC35/h", l: " costo PM" },
  { t: "\u20AC37/h", l: " costo amministrazione" },
  { t: "80%", l: " tasso di adozione (realistico)" },
  { t: "90%", l: " ramp-up Anno 1" },
  { t: "85%", l: " abbattimento Progress" },
];
let aY = 1.45;
assumptions.forEach(a => {
  s2.addText([
    { text: a.t, options: { bold: true, color: PURPLE, fontSize: 8.5, fontFace: "Arial" } },
    { text: a.l, options: { color: GRAY_LIGHT, fontSize: 8.5, fontFace: "Arial" } },
  ], { x: 7.8, y: aY, w: 2, h: 0.22, margin: 0, valign: "middle" });
  aY += 0.24;
});

// === DESCRIPTION TEXT ===
s2.addText("Il risparmio \u00E8 calcolato come differenza tra le ore oggi dedicate a processi manuali ripetitivi e le ore residue dopo l\u2019introduzione di Link, che funge da unico punto di raccolta dati con sincronizzazione automatica verso Business Central. In sinergia con Flow, ogni informazione generata nel lavoro quotidiano \u2014 email, memo vocali, brief, budget \u2014 alimenta direttamente Progress, fatturazione e cash flow senza doppi inserimenti. Le ore sono valorizzate al costo orario aziendale fully loaded per profilo. Lo scenario assume un\u2019adozione all\u201980% e un ramp-up al 90% nel primo anno.", {
  x: 0.5, y: 3.55, w: 6.8, h: 0.95, fontSize: 8.5, fontFace: "Arial", color: GRAY_LIGHT, margin: 0, valign: "top", lineSpacingMultiple: 1.2
});

// KPI box bottom right
s2.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.6, y: 3.55, w: 2.2, h: 0.95, fill: { color: CARD_BG }, rectRadius: 0.08, line: { color: CARD_BORDER, width: 0.5 } });
s2.addText([
  { text: "Investimento ", options: { color: GRAY_LIGHT, fontSize: 8, fontFace: "Arial" } },
  { text: "\u20AC80.000", options: { color: WHITE, fontSize: 10, fontFace: "Arial", bold: true, breakLine: true } },
  { text: "ROI 2 anni ", options: { color: GRAY_LIGHT, fontSize: 8, fontFace: "Arial" } },
  { text: "42%", options: { color: GREEN, fontSize: 10, fontFace: "Arial", bold: true, breakLine: true } },
  { text: "Payback ", options: { color: GRAY_LIGHT, fontSize: 8, fontFace: "Arial" } },
  { text: "18 mesi", options: { color: GREEN, fontSize: 10, fontFace: "Arial", bold: true } },
], { x: 7.75, y: 3.6, w: 1.9, h: 0.85, margin: 0, valign: "middle" });

// Footer
s2.addText("22", { x: 9.55, y: 5.25, w: 0.3, h: 0.2, fontSize: 8, fontFace: "Arial", color: GRAY_MED, align: "right", margin: 0 });

pres.writeFile({ fileName: "/home/claude/link_bc_slides_final.pptx" })
  .then(() => console.log("Created OK"))
  .catch(err => console.error(err));