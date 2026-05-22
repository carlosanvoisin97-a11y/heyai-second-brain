const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";

  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const TBL_HEADER = "2E2E3E";
  const TBL_ROW_A = "141420";
  const TBL_ROW_B = "1A1A24";
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

  s.addText("Riepilogo Investimento", {
    x: 0.55, y: 0.2, w: 9, h: 0.65,
    fontSize: 38, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText("Acquistando il pacchetto in bundle: sconto complessivo sull'investimento a listino.", {
    x: 0.55, y: 0.82, w: 8.5, h: 0.25,
    fontSize: 11, fontFace: FONT, color: GRAY, margin: 0
  });

  const colW = [2.55, 1.0, 1.0, 1.15, 0.85, 0.9];

  const hdr = (align = "center") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 8, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER }, margin: [2, 3, 2, 3]
  });
  const cell = (alt, align = "right") => ({
    fill: { color: alt ? TBL_ROW_B : TBL_ROW_A },
    color: GRAY_D, fontSize: 8, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.3, color: "1A1A30" }, margin: [2, 4, 2, 4]
  });
  const greenC = (alt) => ({ ...cell(alt), color: GREEN, bold: true });

  // Subtotal style (green bg for confirmed)
  const subConf = (align = "right") => ({
    fill: { color: "1C2A1C" }, color: GREEN, bold: true,
    fontSize: 8.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: "2A3A2A" }, margin: [2, 4, 2, 4]
  });

  // Flow row style (slightly muted)
  const flowCell = (align = "right") => ({
    fill: { color: "1A1828" }, color: MUTED,
    fontSize: 8, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.3, color: "222240" }, margin: [2, 4, 2, 4]
  });
  const flowGreen = () => ({ ...flowCell(), color: "558866", bold: true });

  // Total inclusive style
  const totAll = (align = "right") => ({
    fill: { color: PURPLE_D }, color: WHITE, bold: true,
    fontSize: 8.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: PURPLE_D }, margin: [2, 4, 2, 4]
  });

  let tbl = [];

  // Header
  tbl.push([
    { text: "Soluzione", options: hdr("left") },
    { text: "Listino", options: hdr() },
    { text: "Bundle", options: { ...hdr(), color: GREEN } },
    { text: "Risparmio/anno", options: hdr() },
    { text: "FTE", options: hdr() },
    { text: "Payback", options: hdr() },
  ]);

  // 6 confirmed rows
  const confirmed = [
    ["Venue Finder Evolution",     "€9.000",  "€9.000",  "€36.400",      "0,71", "3 mesi"],
    ["Link — Sistema Gestionale",  "€80.000", "€75.000", "€60.000",      "1,09", "18 mesi"],
    ["Sally — Agente 360°",        "€85.000", "€76.500", "€77.486",      "1,15", "18 mesi"],
    ["OnSite — AI Companion",      "€35.000", "€32.000", "Up-sell",      "—",    "—"],
    ["Crowd — Integr. Pagamenti",  "€15.000", "€15.000", "Revenue",      "—",    "—"],
    ["Minutes — Call Esterne",     "€9.000",  "€9.000",  "+40% Usabilità","—",   "—"],
  ];

  confirmed.forEach((r, i) => {
    const alt = i % 2 === 1;
    tbl.push([
      { text: r[0], options: cell(alt, "left") },
      { text: r[1], options: cell(alt) },
      { text: r[2], options: greenC(alt) },
      { text: r[3], options: cell(alt) },
      { text: r[4], options: cell(alt, "center") },
      { text: r[5], options: cell(alt, "center") },
    ]);
  });

  // Subtotal confirmed
  tbl.push([
    { text: "TOTALE CONFERMATO", options: subConf("left") },
    { text: "€233.000", options: subConf() },
    { text: "€216.500", options: subConf() },
    { text: "€173.886", options: subConf() },
    { text: "2,95", options: subConf("center") },
    { text: "", options: subConf() },
  ]);

  // Flow row (separate)
  tbl.push([
    { text: "Flow — Task Management *", options: flowCell("left") },
    { text: "€75.000", options: flowCell() },
    { text: "€67.500", options: flowGreen() },
    { text: "€125.174", options: flowCell() },
    { text: "2,08", options: flowCell("center") },
    { text: "9,5 mesi", options: flowCell("center") },
  ]);

  // Total inclusive
  tbl.push([
    { text: "TOTALE CON FLOW", options: totAll("left") },
    { text: "€308.000", options: totAll() },
    { text: "€284.000", options: { ...totAll(), color: GREEN } },
    { text: "€299.060", options: totAll() },
    { text: "5,03", options: totAll("center") },
    { text: "", options: totAll() },
  ]);

  s.addTable(tbl, {
    x: 0.55, y: 1.15, w: 7.45, colW,
    rowH: [0.27, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.27, 0.24, 0.27],
  });

  // Flow note
  s.addText("* Flow: in valutazione un MVP a perimetro ridotto con quotazione proporzionalmente inferiore.", {
    x: 0.55, y: 3.9, w: 7.5, h: 0.18,
    fontSize: 7, fontFace: FONT, color: MUTED, italic: true, margin: 0
  });

  // === 3 BOTTOM BOXES ===
  const boxY = 4.18;
  const boxH = 1.05;
  const boxW = 2.6;
  const boxGap = 0.12;
  const bx = 0.55;

  // Box 1: Sconto Bundle (on confirmed)
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: bx, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05, shadow: makeCardShadow()
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: bx, y: boxY, w: 0.05, h: boxH, fill: { color: GREEN }
  });
  s.addText("SCONTO BUNDLE", {
    x: bx + 0.18, y: boxY + 0.07, w: boxW - 0.3, h: 0.18,
    fontSize: 7.5, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1.5, margin: 0
  });
  s.addText("- €16.500", {
    x: bx + 0.18, y: boxY + 0.26, w: boxW - 0.3, h: 0.32,
    fontSize: 24, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText([
    { text: "sul pacchetto confermato", options: { breakLine: true } },
    { text: "(-€24K con Flow incluso)" }
  ], {
    x: bx + 0.18, y: boxY + 0.62, w: boxW - 0.3, h: 0.36,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 2: Iper (on confirmed bundle)
  const b2x = bx + boxW + boxGap;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b2x, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05, shadow: makeCardShadow()
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: b2x, y: boxY, w: 0.05, h: boxH, fill: { color: PURPLE_D }
  });
  s.addText("IPERAMMORTAMENTO 2026", {
    x: b2x + 0.18, y: boxY + 0.07, w: boxW - 0.3, h: 0.18,
    fontSize: 7.5, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s.addText("~ €94K", {
    x: b2x + 0.18, y: boxY + 0.26, w: boxW - 0.3, h: 0.32,
    fontSize: 24, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText([
    { text: "sul confermato (€216,5K)", options: { breakLine: true } },
    { text: "(~€123K con Flow incluso)" }
  ], {
    x: b2x + 0.18, y: boxY + 0.62, w: boxW - 0.3, h: 0.36,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 3: Netto
  const b3x = b2x + boxW + boxGap;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b3x, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05,
    line: { color: PURPLE_D, width: 1.5 }, shadow: makeCardShadow()
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: b3x, y: boxY, w: 0.05, h: boxH, fill: { color: PURPLE_L }
  });
  s.addText("COSTO EFFETTIVO NETTO", {
    x: b3x + 0.18, y: boxY + 0.07, w: boxW - 0.3, h: 0.18,
    fontSize: 7.5, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s.addText("~ €123K", {
    x: b3x + 0.18, y: boxY + 0.26, w: boxW - 0.3, h: 0.32,
    fontSize: 24, fontFace: FONT, color: GREEN, bold: true, margin: 0
  });
  s.addText([
    { text: "confermato post Iperammort.", options: { breakLine: true } },
    { text: "(~€161K con Flow incluso)" }
  ], {
    x: b3x + 0.18, y: boxY + 0.62, w: boxW - 0.3, h: 0.36,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  // Disclaimer
  s.addText(
    "Nota: Iperammortamento illustrativo (L. 199/2025, maggioraz. 180% fino a €2,5M, IRES 24%). " +
    "L'effettivo beneficio va validato con il consulente fiscale. Decreto attuativo in fase di pubblicazione.", {
    x: 0.55, y: 5.35, w: 8.4, h: 0.2,
    fontSize: 6.5, fontFace: FONT, color: "555555", margin: 0
  });

  s.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35, fontFace: FONT, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Noloop_Riepilogo_FlowSeparato.pptx" });
  console.log("Done!");
}

main().catch(console.error);