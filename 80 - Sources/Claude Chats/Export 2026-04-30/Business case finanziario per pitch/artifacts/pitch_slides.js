const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33" x 7.5"
pres.author = "HeyAI";
pres.title = "Pitch - Modulo Creativo";

// EMU to inches helper
const emu = v => v / 914400;

// ============================================================
// SLIDE 1 — SOLUZIONE
// ============================================================
const s1 = pres.addSlide();
s1.background = { color: "000000" };

// --- Tag top-right: green square + label ---
s1.addShape(pres.shapes.RECTANGLE, { x: emu(11064240), y: emu(246888), w: emu(91440), h: emu(128016), fill: { color: "7DDF80" } });
s1.addText("Reparto Creativo", { x: emu(11173968), y: emu(201168), w: emu(914400), h: emu(201168), fontSize: 10.5, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "middle", margin: 0 });

// --- Title ---
s1.addText("Pitch - Modulo Creativo", { x: emu(576072), y: emu(356616), w: emu(9601200), h: emu(1060704), fontSize: 54, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "top", margin: 0 });

// --- Subtitle ---
s1.addText("Suite AI per accelerare la preparazione delle gare: dall\u2019analisi strategica del prospect alla generazione di materiali visivi, riducendo il tempo investito su esiti incerti.", { x: emu(576072), y: emu(1261872), w: emu(10927080), h: emu(640080), fontSize: 14, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "top", margin: 0 });

// --- LEFT BOX: Funzionalità Chiave ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: emu(576072), y: emu(2011680), w: emu(3941064), h: emu(3886200), fill: { color: "232831" }, rectRadius: 0.08 });
s1.addText("FUNZIONALIT\u00c0 CHIAVE", { x: emu(758952), y: emu(2103120), w: emu(3575304), h: emu(274320), fontSize: 14, fontFace: "Acre Medium", color: "BAA4EB", bold: true, align: "left", valign: "middle", margin: 0 });

s1.addText([
  { text: "Analisi prospect in minuti, non ore: brief, posizionamento del cliente, trend di settore, competitor e storico iniziative marketing aggregate automaticamente", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 13, fontFace: "Acre Medium", color: "FFFFFF" } },
  { text: "Ricerca che parte dal contesto: l\u2019agente conosce gi\u00e0 il brief e propone insight rilevanti, non risultati generici", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 13, fontFace: "Acre Medium", color: "FFFFFF" } },
  { text: "Materiali visivi accelerati: generazione mockup, elaborazione render esistenti, bozze video teaser \u2014 il creativo guida, l\u2019AI esegue", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 13, fontFace: "Acre Medium", color: "FFFFFF" } },
  { text: "Playground creativo unificato: brand book pre-caricato, prompt ottimizzati, zero switching tra piattaforme diverse", options: { bullet: { code: "2022" }, breakLine: true, fontSize: 13, fontFace: "Acre Medium", color: "FFFFFF" } },
  { text: "Tutto salvato nell\u2019Opportunit\u00e0: ogni output prodotto resta collegato alla gara sul CRM, consultabile anche in futuro", options: { bullet: { code: "2022" }, fontSize: 13, fontFace: "Acre Medium", color: "FFFFFF" } },
], { x: emu(758952), y: emu(2423160), w: emu(3575304), h: emu(3337560), valign: "top", paraSpaceAfter: 4, lineSpacingMultiple: 1.10, margin: [0, 7, 0, 0] });

// --- MIDDLE TOP BOX: Impatto di Business ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: emu(4645152), y: emu(2020824), w: emu(3511296), h: emu(1051560), fill: { color: "232831" }, rectRadius: 0.08 });
s1.addText("IMPATTO DI BUSINESS", { x: emu(4828032), y: emu(2112264), w: emu(3145536), h: emu(274320), fontSize: 14, fontFace: "Acre Medium", color: "BAA4EB", bold: true, align: "left", valign: "middle", margin: 0 });

// Slider line
s1.addShape(pres.shapes.LINE, { x: emu(5111496), y: emu(2624328), w: emu(2313432), h: 0, line: { color: "FFFFFF", width: 1.5 } });
// Left cap
s1.addShape(pres.shapes.LINE, { x: emu(5120640), y: emu(2532888), w: 0, h: emu(173736), line: { color: "FFFFFF", width: 1.5 } });
// Right cap
s1.addShape(pres.shapes.LINE, { x: emu(7406640), y: emu(2532888), w: 0, h: emu(173736), line: { color: "FFFFFF", width: 1.5 } });
// Dot - position ~75% along (high impact)
s1.addShape(pres.shapes.OVAL, { x: emu(6912864), y: emu(2514600), w: emu(219456), h: emu(219456), fill: { color: "5728B8" } });
// Labels
s1.addText("Basso", { x: emu(4754880), y: emu(2752344), w: emu(731520), h: emu(228600), fontSize: 9, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "middle", margin: 0 });
s1.addText("Alto", { x: emu(7077456), y: emu(2752344), w: emu(676656), h: emu(228600), fontSize: 9, fontFace: "Acre Medium", color: "FFFFFF", align: "right", valign: "middle", margin: 0 });

// --- MIDDLE CENTER BOX: Pain Point ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: emu(4645152), y: emu(3191256), w: emu(3511296), h: emu(1746504), fill: { color: "232831" }, rectRadius: 0.08 });
s1.addText("PAIN POINT RISOLTO", { x: emu(4828032), y: emu(3255264), w: emu(3145536), h: emu(256032), fontSize: 14, fontFace: "Acre Medium", color: "BAA4EB", bold: true, align: "left", valign: "middle", margin: 0 });
s1.addText("Il reparto creativo gestisce 50 gare/anno con 3-4 brief sovrapposti e deadline a 15 giorni. Non c\u2019\u00e8 tempo per analisi strategica: si parte al buio, con tool AI frammentati e scollegati. Risultato: proposte duplicate, rework su concept interi, win rate al 20%.", { x: emu(4745736), y: emu(3520440), w: emu(3291840), h: emu(1325880), fontSize: 10, fontFace: "Acre Medium", color: "CCCCCC", align: "left", valign: "top", margin: 0, lineSpacingMultiple: 1.15 });

// --- MIDDLE BOTTOM BOX: Investimento ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: emu(4645152), y: emu(5047488), w: emu(3511296), h: emu(850392), fill: { color: "232831" }, rectRadius: 0.08 });
s1.addText("INVESTIMENTO", { x: emu(4828032), y: emu(5120640), w: emu(3145536), h: emu(256032), fontSize: 14, fontFace: "Acre Medium", color: "7DDF80", bold: true, align: "left", valign: "middle", margin: 0 });
s1.addText([
  { text: "45.000 \u20ac", options: { fontSize: 14, fontFace: "Acre Medium", color: "FFFFFF", bold: true } },
], { x: emu(4709160), y: emu(5422392), w: emu(3410712), h: emu(310896), align: "left", valign: "middle", margin: 0 });

// --- RIGHT BOX: KPI Chiave & Take Away ---
s1.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: emu(8284464), y: emu(2011680), w: emu(3538728), h: emu(3886200), fill: { color: "232831" }, rectRadius: 0.08 });
s1.addText("KPI CHIAVE & TAKE AWAY", { x: emu(8467344), y: emu(2103120), w: emu(3172968), h: emu(292608), fontSize: 14, fontFace: "Acre Medium", color: "FFFFFF", bold: true, align: "left", valign: "middle", margin: 0 });

// KPI row 1: value + label
s1.addText("\u20ac57.500/anno", { x: emu(8467344), y: emu(2542032), w: emu(1691640), h: emu(292608), fontSize: 14.5, fontFace: "Acre Medium", color: "7DDF80", bold: true, align: "left", valign: "middle", margin: 0 });
s1.addText("In Risorse liberate", { x: emu(10149840), y: emu(2560320), w: emu(1600200), h: emu(256032), fontSize: 10.5, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "middle", margin: 0 });

// KPI row 2
s1.addText("91,7%", { x: emu(8467344), y: emu(2834640), w: emu(1691640), h: emu(292608), fontSize: 14.5, fontFace: "Acre Medium", color: "7DDF80", bold: true, align: "left", valign: "middle", margin: 0 });
s1.addText("ROI a due anni", { x: emu(10149840), y: emu(2852928), w: emu(1600200), h: emu(256032), fontSize: 10.5, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "middle", margin: 0 });

// KPI row 3
s1.addText("~15 mesi", { x: emu(8467344), y: emu(3127248), w: emu(1691640), h: emu(292608), fontSize: 14.5, fontFace: "Acre Medium", color: "7DDF80", bold: true, align: "left", valign: "middle", margin: 0 });
s1.addText("Payback Period", { x: emu(10149840), y: emu(3145536), w: emu(1600200), h: emu(256032), fontSize: 10.5, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "middle", margin: 0 });

// --- Take Aways ---
s1.addText([
  // Take Away 1 - ROI/Payback
  { text: "L\u2019investimento si ripaga prima della fine del secondo anno\n", options: { bold: true, fontSize: 13, fontFace: "Acre Medium", color: "FFFFFF", breakLine: false } },
  { text: "ROI 91,7% a 24 mesi, payback in ~15 mesi. Dal sedicesimo mese ogni euro di risparmio \u00e8 valore netto per Noloop.\n", options: { fontSize: 11, fontFace: "Acre Medium", color: "CCCCCC", breakLine: false } },
  // Take Away 2 - Strategico differenziato
  { text: "\nLe gare si vincono anche sulla velocit\u00e0 e la precisione della prima proposta\n", options: { bold: true, fontSize: 13, fontFace: "Acre Medium", color: "FFFFFF", breakLine: false } },
  { text: "Pitch elimina le proposte \u201Cgi\u00e0 fatte\u201D che costano interi cicli di rework. Il team arriva informato dal primo brief, con analisi strategica in 30 minuti invece che in 2 giornate.\n", options: { fontSize: 11, fontFace: "Acre Medium", color: "CCCCCC", breakLine: false } },
  // Take Away 3 - Robustezza
  { text: "\nAnche nello scenario peggiore, il BC resta in piedi\n", options: { bold: true, fontSize: 13, fontFace: "Acre Medium", color: "FFFFFF", breakLine: false } },
  { text: "Sensitivity analysis su tutte le variabili a bassa confidenza: il risparmio annuo non scende mai sotto \u20ac38.000, il payback resta sotto i 24 mesi.", options: { fontSize: 11, fontFace: "Acre Medium", color: "CCCCCC" } },
], { x: emu(8458200), y: emu(3566160), w: emu(3200400), h: emu(2194560), valign: "top", margin: 0, lineSpacingMultiple: 1.05 });

// --- Page number ---
s1.addText("25", { x: emu(11247120), y: emu(6309360), w: emu(640080), h: emu(320040), fontSize: 12, fontFace: "Acre Medium", color: "FFFFFF", align: "right", valign: "middle", margin: 0 });

// ============================================================
// SLIDE 2 — BUSINESS CASE IN SINTESI
// ============================================================
const s2 = pres.addSlide();
s2.background = { color: "000000" };

// --- Title ---
s2.addText("Business Case in Sintesi", { x: emu(576072), y: emu(356616), w: emu(11365992), h: emu(1060704), fontSize: 54, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "top", margin: 0 });

// --- Table ---
const lnDef = { pt: 0, color: "000000" };
const hdrFill = { type: "solid", color: "2A2440" };
const row1Fill = { type: "solid", color: "1A1A25" };
const row2Fill = { type: "solid", color: "16161F" };
const totalFill = { type: "solid", color: "1C3A1C" };
const hdrFont = { fontFace: "Acre Medium", fontSize: 12, bold: true, color: "9B8EC4" };
const dataFont = { fontFace: "Acre Medium", fontSize: 12, color: "FFFFFF" };
const dataFontBold = { fontFace: "Acre Medium", fontSize: 12, color: "FFFFFF", bold: true };

const tblRows = [
  // Header
  [
    { text: "Area di miglioramento", options: { ...hdrFont, align: "left", fill: hdrFill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "Ore senza AI", options: { ...hdrFont, align: "center", fill: hdrFill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "Ore con AI", options: { ...hdrFont, align: "center", fill: hdrFill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "Delta", options: { ...hdrFont, align: "center", fill: hdrFill, border: [lnDef, lnDef, lnDef, lnDef] } },
  ],
  // Row 1: Analisi strategica
  [
    { text: "Analisi strategica pre-proposta", options: { ...dataFont, align: "left", fill: row1Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "600h", options: { ...dataFont, align: "center", fill: row1Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "75h", options: { ...dataFont, align: "center", fill: row1Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "-87,5%", options: { ...dataFont, align: "center", fill: row1Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
  ],
  // Row 2: Rework
  [
    { text: "Rework proposte duplicate", options: { ...dataFont, align: "left", fill: row2Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "396h", options: { ...dataFont, align: "center", fill: row2Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "119h", options: { ...dataFont, align: "center", fill: row2Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "-70%", options: { ...dataFont, align: "center", fill: row2Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
  ],
  // Row 3: Produzione creativa
  [
    { text: "Produzione creativa unificata", options: { ...dataFont, align: "left", fill: row1Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "1.025h", options: { ...dataFont, align: "center", fill: row1Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "0h", options: { ...dataFont, align: "center", fill: row1Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "-100%", options: { ...dataFont, align: "center", fill: row1Fill, border: [lnDef, lnDef, lnDef, lnDef] } },
  ],
  // Total row
  [
    { text: "", options: { ...dataFontBold, align: "left", fill: totalFill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "", options: { ...dataFontBold, align: "center", fill: totalFill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "", options: { ...dataFontBold, align: "center", fill: totalFill, border: [lnDef, lnDef, lnDef, lnDef] } },
    { text: "\u20ac67.600/anno\n(1,06 FTE)", options: { ...dataFontBold, align: "center", fill: totalFill, border: [lnDef, lnDef, lnDef, lnDef] } },
  ],
];

s2.addTable(tblRows, {
  x: emu(612648), y: emu(1591056), w: emu(8257032),
  colW: [emu(3072384), emu(1417320), emu(1417320), emu(2359152)],
  rowH: [0.37, 0.37, 0.37, 0.37, 0.37],
  margin: [3.5, 7, 3.5, 7],
});

// "Totale euro risparmiati (valore FTE)" label on total row
s2.addText("Totale euro risparmiati (valore FTE)", { x: emu(720000), y: emu(1591056 + 338328 * 4 + 20000), w: emu(2800000), h: emu(310000), fontSize: 10, fontFace: "Acre Medium", color: "CCCCCC", align: "left", valign: "middle", margin: 0 });

// --- Assumptions (right side) ---
s2.addText("Assunzioni", { x: emu(9235440), y: emu(1591056), w: emu(2560320), h: emu(338328), fontSize: 14, fontFace: "Acre Medium", color: "FFFFFF", bold: true, align: "left", valign: "middle", margin: 0 });

// Assumption lines - each with colored value + gray description
const assY0 = 1929384; // below the title
const assH = 237744;
const assGap = 274320;

const assumptions = [
  { val: "50", desc: " gare/anno (dato cliente)" },
  { val: "5,5", desc: " risorse coinvolte per gara" },
  { val: "\u20ac37/h", desc: " costo orario medio pesato team" },
  { val: "12h", desc: " analisi strategica ideale per gara" },
  { val: "17,5%", desc: " gare con rework significativo" },
  { val: "70%", desc: " rework eliminabile con Deep Search" },
  { val: "85%", desc: " tasso adozione (scenario realistico)" },
  { val: "50%", desc: " ramp-up Anno 1" },
];

assumptions.forEach((a, i) => {
  s2.addText([
    { text: a.val, options: { fontSize: 11.33, fontFace: "Acre Medium", color: "9B8EC4", bold: true } },
    { text: a.desc, options: { fontSize: 11.33, fontFace: "Acre Medium", color: "CCCCCC" } },
  ], { x: emu(9235440), y: emu(assY0 + i * assGap), w: emu(2560320), h: emu(assH), align: "left", valign: "middle", margin: 0 });
});

// --- BC Paragraph ---
s2.addText(
  "Il risparmio \u00e8 calcolato su un modello bottom-up ancorato ai dati operativi del reparto creativo (9 risorse, organigramma 03/2025) e ai benchmark retributivi per agenzie eventi corporate a Milano. Le ore sono valorizzate al costo orario aziendale per profilo (fully loaded, RAL \u00d71,40 / 1.720h). L\u2019analisi strategica \u00e8 conteggiata come sostituzione AI di lavoro umano necessario, non come attivit\u00e0 aggiuntiva. Lo scenario realistico assume adozione all\u201985% a regime con ramp-up al 50% nel primo anno. La sensitivity analysis su ipotesi a bassa confidenza conferma un floor di \u20ac38.000/anno anche nello scenario worst case.",
  { x: emu(612648), y: emu(3749040), w: emu(8257032), h: emu(1920240), fontSize: 14, fontFace: "Acre Medium", color: "FFFFFF", align: "left", valign: "top", margin: 0, lineSpacingMultiple: 1.20 }
);

// --- Page number ---
s2.addText("26", { x: emu(11247120), y: emu(6309360), w: emu(640080), h: emu(320040), fontSize: 12, fontFace: "Acre Medium", color: "FFFFFF", align: "right", valign: "middle", margin: 0 });

// ============================================================
// SAVE
// ============================================================
pres.writeFile({ fileName: "/home/claude/Pitch_Slides_Final.pptx" }).then(() => {
  console.log("Slides created successfully");
});