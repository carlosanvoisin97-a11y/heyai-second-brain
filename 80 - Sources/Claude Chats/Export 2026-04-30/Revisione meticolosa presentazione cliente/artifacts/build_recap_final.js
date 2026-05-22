const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Noloop - Riepilogo Investimento Aggiornato";

  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const TBL_HEADER = "2E2E3E";
  const TBL_ROW_A = "141420";
  const TBL_ROW_B = "1A1A24";
  const TBL_OPT_A = "1A1420";  // slightly different for optional rows
  const TBL_OPT_B = "201A24";
  const PURPLE_L = "BAA4EB";
  const PURPLE_D = "5728B8";
  const GREEN = "66DDAB";
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const GRAY_D = "D0D0D0";
  const MUTED = "9090A8";
  const FONT = "Calibri";

  const makeCardShadow = () => ({ type: "outer", blur: 4, offset: 1, angle: 135, color: "000000", opacity: 0.25 });

  let s = pres.addSlide();
  s.background = { color: BG };

  // Title
  s.addText("Riepilogo Investimento e Leva Fiscale", {
    x: 0.45, y: 0.18, w: 9.2, h: 0.6,
    fontSize: 36, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText("LeadMe Evolution esclusa dal perimetro. Flow e Pitch presentati come opzione per una fase successiva.", {
    x: 0.45, y: 0.75, w: 9, h: 0.25,
    fontSize: 11, fontFace: FONT, color: GRAY, margin: 0
  });

  // === TABLE ===
  const colW = [2.3, 0.85, 0.85, 0.85, 0.95, 0.7, 0.8];
  // Solution, Bundle, Iper 43.2%, Netto, Savings, FTE, Payback

  const hdr = (align = "center") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 7.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER }, margin: [2, 3, 2, 3]
  });
  const cell = (alt, align = "right") => ({
    fill: { color: alt ? TBL_ROW_B : TBL_ROW_A },
    color: GRAY_D, fontSize: 7.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.3, color: "1A1A30" }, margin: [2, 4, 2, 4]
  });
  const greenC = (alt) => ({ ...cell(alt), color: GREEN, bold: true });
  const optCell = (alt, align = "right") => ({
    ...cell(alt, align), color: MUTED
  });
  const optGreen = (alt) => ({ ...optCell(alt), color: "558866" });

  // Header
  let tbl = [];
  tbl.push([
    { text: "Soluzione", options: hdr("left") },
    { text: "Bundle", options: hdr() },
    { text: "Iper (43,2%)", options: hdr() },
    { text: "Costo Netto", options: { ...hdr(), color: GREEN } },
    { text: "Risparmio/a.", options: hdr() },
    { text: "FTE", options: hdr() },
    { text: "Payback", options: hdr() },
  ]);

  // Confirmed rows
  const confirmed = [
    ["Venue Finder Evolution",     "€9.000",  "€3.888",  "€5.112",  "€36.400",   "0,71", "3 mesi"],
    ["Link — Sist. Gestionale",    "€75.000", "€32.400", "€42.600", "€60.000",   "1,09", "18 mesi"],
    ["Sally — Agente 360°",        "€76.500", "€33.048", "€43.452", "€77.486",   "1,15", "18 mesi"],
    ["OnSite — AI Companion",      "€32.000", "€13.824", "€18.176", "Up-sell",   "—",    "—"],
    ["Crowd — Integr. Pagamenti",  "€15.000", "€6.480",  "€8.520",  "Revenue",   "—",    "—"],
    ["Minutes — Call Esterne",     "€9.000",  "€3.888",  "€5.112",  "+40% call", "—",    "—"],
  ];

  confirmed.forEach((r, i) => {
    const alt = i % 2 === 1;
    tbl.push([
      { text: r[0], options: cell(alt, "left") },
      { text: r[1], options: cell(alt) },
      { text: r[2], options: cell(alt) },
      { text: r[3], options: greenC(alt) },
      { text: r[4], options: cell(alt) },
      { text: r[5], options: cell(alt, "center") },
      { text: r[6], options: cell(alt, "center") },
    ]);
  });

  // Subtotal confirmed
  const subOpts = (align = "right") => ({
    fill: { color: "1C2A1C" }, color: GREEN, bold: true,
    fontSize: 8, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: "2A3A2A" }, margin: [2, 4, 2, 4]
  });
  tbl.push([
    { text: "TOTALE CONFERMATO", options: subOpts("left") },
    { text: "€216.500", options: subOpts() },
    { text: "€93.528", options: subOpts() },
    { text: "€122.972", options: subOpts() },
    { text: "€173.886", options: subOpts() },
    { text: "2,95", options: subOpts("center") },
    { text: "", options: subOpts() },
  ]);

  // Optional rows (visually different)
  const optional = [
    ["Flow — Task Mgmt  ⟡", "€67.500", "€29.160", "€38.340", "€125.174", "2,08", "9,5 mesi"],
    ["Pitch — Mod. Creativo  ⟡", "€40.500", "€17.496", "€23.004", "€57.500",  "1,06", "15 mesi"],
  ];

  optional.forEach((r, i) => {
    const alt = i % 2 === 1;
    tbl.push([
      { text: r[0], options: optCell(alt, "left") },
      { text: r[1], options: optCell(alt) },
      { text: r[2], options: optCell(alt) },
      { text: r[3], options: optGreen(alt) },
      { text: r[4], options: optCell(alt) },
      { text: r[5], options: optCell(alt, "center") },
      { text: r[6], options: optCell(alt, "center") },
    ]);
  });

  // Grand total
  const totOpts = (align = "right") => ({
    fill: { color: PURPLE_D }, color: WHITE, bold: true,
    fontSize: 8.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: PURPLE_D }, margin: [2, 4, 2, 4]
  });
  tbl.push([
    { text: "CON OPZIONALI", options: totOpts("left") },
    { text: "€324.500", options: totOpts() },
    { text: "€140.184", options: totOpts() },
    { text: "€184.316", options: { ...totOpts(), color: GREEN } },
    { text: "€356.560", options: totOpts() },
    { text: "6,09", options: totOpts("center") },
    { text: "", options: totOpts() },
  ]);

  s.addTable(tbl, {
    x: 0.45, y: 1.08, w: 7.3, colW,
    rowH: [0.27, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.28, 0.24, 0.24, 0.28],
  });

  // "⟡ = opzionale" note
  s.addText("⟡ = scope e prezzo da definire in una fase successiva", {
    x: 0.45, y: 4.15, w: 4, h: 0.18,
    fontSize: 7, fontFace: FONT, color: MUTED, margin: 0
  });

  // === RIGHT SIDE: 2 scenario boxes ===
  const bX = 8.0, bW = 1.75;

  // Box 1: Confirmed scenario
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: bX, y: 1.08, w: bW, h: 1.55,
    fill: { color: CARD }, rectRadius: 0.05,
    shadow: makeCardShadow()
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: bX, y: 1.08, w: 0.04, h: 1.55, fill: { color: GREEN }
  });
  s.addText("CONFERMATO", {
    x: bX + 0.12, y: 1.12, w: bW - 0.2, h: 0.18,
    fontSize: 7, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1.2, margin: 0
  });
  s.addText("€122.972", {
    x: bX + 0.12, y: 1.32, w: bW - 0.2, h: 0.3,
    fontSize: 20, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText("costo netto", {
    x: bX + 0.12, y: 1.6, w: bW - 0.2, h: 0.15,
    fontSize: 7, fontFace: FONT, color: MUTED, margin: 0
  });
  s.addText("€173.886/a.", {
    x: bX + 0.12, y: 1.82, w: bW - 0.2, h: 0.22,
    fontSize: 11, fontFace: FONT, color: GREEN, bold: true, margin: 0
  });
  s.addText("di risparmio operativo", {
    x: bX + 0.12, y: 2.04, w: bW - 0.2, h: 0.15,
    fontSize: 6.5, fontFace: FONT, color: MUTED, margin: 0
  });
  s.addText("+ revenue Crowd/OnSite", {
    x: bX + 0.12, y: 2.22, w: bW - 0.2, h: 0.15,
    fontSize: 6.5, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 2: Full scenario
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: bX, y: 2.82, w: bW, h: 1.55,
    fill: { color: CARD }, rectRadius: 0.05,
    line: { color: PURPLE_D, width: 1 },
    shadow: makeCardShadow()
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: bX, y: 2.82, w: 0.04, h: 1.55, fill: { color: PURPLE_D }
  });
  s.addText("CON OPZIONALI", {
    x: bX + 0.12, y: 2.86, w: bW - 0.2, h: 0.18,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s.addText("€184.316", {
    x: bX + 0.12, y: 3.06, w: bW - 0.2, h: 0.3,
    fontSize: 20, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText("costo netto", {
    x: bX + 0.12, y: 3.34, w: bW - 0.2, h: 0.15,
    fontSize: 7, fontFace: FONT, color: MUTED, margin: 0
  });
  s.addText("€356.560/a.", {
    x: bX + 0.12, y: 3.56, w: bW - 0.2, h: 0.22,
    fontSize: 11, fontFace: FONT, color: PURPLE_L, bold: true, margin: 0
  });
  s.addText("di risparmio operativo", {
    x: bX + 0.12, y: 3.78, w: bW - 0.2, h: 0.15,
    fontSize: 6.5, fontFace: FONT, color: MUTED, margin: 0
  });
  s.addText("+ revenue Crowd/OnSite", {
    x: bX + 0.12, y: 3.96, w: bW - 0.2, h: 0.15,
    fontSize: 6.5, fontFace: FONT, color: MUTED, margin: 0
  });

  // Disclaimer
  s.addText(
    "Nota: Iperammortamento illustrativo (L. 199/2025, magg. 180%, IRES 24%). " +
    "L'effettivo beneficio va validato con il consulente fiscale. Decreto attuativo in pubblicazione.", {
    x: 0.45, y: 5.35, w: 8, h: 0.2,
    fontSize: 6.5, fontFace: FONT, color: "555555", margin: 0
  });

  // HeyAI
  s.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35, fontFace: FONT, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Noloop_Riepilogo_Finale.pptx" });
  console.log("Done!");
}

main().catch(console.error);