const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Noloop Wave 2 - Riepilogo Aggiornato";

  // === EXACT PALETTE FROM DECK XML ===
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

  // ============================================================
  // SLIDE: RIEPILOGO INVESTIMENTO — AGGIORNATO
  // ============================================================
  let s = pres.addSlide();
  s.background = { color: BG };

  // Title
  s.addText("Riepilogo Investimento e Leva Fiscale", {
    x: 0.55, y: 0.25, w: 9, h: 0.7,
    fontSize: 40, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });

  // Subtitle
  s.addText("Acquistando il pacchetto completo in bundle: sconto complessivo di €37K sull'investimento a listino.", {
    x: 0.55, y: 0.9, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: FONT, color: GRAY, margin: 0
  });

  // === TABLE ===
  const colW = [2.65, 1.05, 1.05, 1.2, 0.9, 0.95];

  const hdrOpts = (align = "center") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 8.5, fontFace: FONT, align: align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER },
    margin: [3, 4, 3, 4]
  });

  const cellOpt = (alt, align = "right") => ({
    fill: { color: alt ? TBL_ROW_B : TBL_ROW_A },
    color: GRAY_D, fontSize: 8.5, fontFace: FONT,
    align: align, valign: "middle",
    border: { pt: 0.3, color: "1A1A30" },
    margin: [2, 5, 2, 5]
  });

  const greenOpt = (alt) => ({
    ...cellOpt(alt), color: GREEN, bold: true
  });

  // UPDATED VALUES FROM DEFINITIVE DECK
  const rows = [
    ["Venue Finder Evolution",    "€9.000",  "€8.000",  "€36.400",   "0,71",  "3 mesi"    ],
    ["LeadMe Evolution",          "€45.000", "€40.000", "€54.500",   "1,30",  "10 mesi"   ],
    ["Link — Sistema Gestionale", "€80.000", "€75.000", "€56.000",   "0,66",  "18 mesi"   ],
    ["Flow — Task Management",    "€75.000", "€67.000", "€125.174",  "2,08",  "9,5 mesi"  ],
    ["Pitch — Modulo Creativo",   "€45.000", "€40.000", "€57.500",   "1,06",  "15 mesi"   ],
    ["Sally — Agente 360°",       "€85.000", "€75.000", "€77.486",   "1,15",  "18 mesi"   ],
    ["OnSite — AI Companion",     "€35.000", "€32.000", "Up-sell",   "—",     "—"         ],
    ["Crowd — Integr. Pagamenti", "€15.000", "€15.000", "Revenue",   "—",     "—"         ],
    ["Minutes — Call Esterne",    "€9.000",  "€9.000",  "Produttiv.","—",     "—"         ],
  ];

  let tableData = [];

  // Header
  tableData.push([
    { text: "Soluzione", options: hdrOpts("left") },
    { text: "Listino", options: hdrOpts() },
    { text: "Bundle", options: { ...hdrOpts(), color: GREEN } },
    { text: "Risparmio/anno", options: hdrOpts() },
    { text: "FTE", options: hdrOpts() },
    { text: "Payback", options: hdrOpts() },
  ]);

  // Data rows
  rows.forEach((r, i) => {
    const alt = i % 2 === 1;
    tableData.push([
      { text: r[0], options: cellOpt(alt, "left") },
      { text: r[1], options: cellOpt(alt) },
      { text: r[2], options: greenOpt(alt) },
      { text: r[3], options: cellOpt(alt) },
      { text: r[4], options: cellOpt(alt, "center") },
      { text: r[5], options: cellOpt(alt, "center") },
    ]);
  });

  // Total row
  const totOpts = (align = "right") => ({
    fill: { color: PURPLE_D }, color: WHITE, bold: true,
    fontSize: 9.5, fontFace: FONT, align: align, valign: "middle",
    border: { pt: 0.5, color: PURPLE_D },
    margin: [3, 5, 3, 5]
  });

  tableData.push([
    { text: "TOTALE ECOSISTEMA", options: totOpts("left") },
    { text: "€398.000", options: totOpts() },
    { text: "€361.000", options: { ...totOpts(), color: GREEN } },
    { text: "€407.060", options: totOpts() },
    { text: "6,96", options: totOpts("center") },
    { text: "", options: totOpts("center") },
  ]);

  s.addTable(tableData, {
    x: 0.55, y: 1.28, w: 7.8,
    colW: colW,
    rowH: [0.3, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.3],
  });

  // === BOTTOM: 3 KPI CARDS ===
  const boxY = 4.25;
  const boxH = 1.1;
  const boxW = 2.6;
  const boxGap = 0.12;
  const boxStartX = 0.55;

  // Box 1: Sconto Bundle
  const b1x = boxStartX;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b1x, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05,
    shadow: makeCardShadow()
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: b1x, y: boxY, w: 0.05, h: boxH,
    fill: { color: GREEN }
  });
  s.addText("SCONTO BUNDLE", {
    x: b1x + 0.18, y: boxY + 0.08, w: boxW - 0.3, h: 0.2,
    fontSize: 8, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1.5, margin: 0
  });
  s.addText("- €37.000", {
    x: b1x + 0.18, y: boxY + 0.28, w: boxW - 0.3, h: 0.35,
    fontSize: 26, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText([
    { text: "9,3% di risparmio sull'acquisto", options: { breakLine: true } },
    { text: "del pacchetto completo in bundle" }
  ], {
    x: b1x + 0.18, y: boxY + 0.65, w: boxW - 0.3, h: 0.38,
    fontSize: 8.5, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 2: Iperammortamento
  const b2x = b1x + boxW + boxGap;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b2x, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05,
    shadow: makeCardShadow()
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: b2x, y: boxY, w: 0.05, h: boxH,
    fill: { color: PURPLE_D }
  });
  s.addText("IPERAMMORTAMENTO 2026", {
    x: b2x + 0.18, y: boxY + 0.08, w: boxW - 0.3, h: 0.2,
    fontSize: 8, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s.addText("~ €156K", {
    x: b2x + 0.18, y: boxY + 0.28, w: boxW - 0.3, h: 0.35,
    fontSize: 26, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText([
    { text: "Risparmio fiscale stimato", options: { breakLine: true } },
    { text: "(maggioraz. 180%, IRES 24%)" }
  ], {
    x: b2x + 0.18, y: boxY + 0.65, w: boxW - 0.3, h: 0.38,
    fontSize: 8.5, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 3: Costo Effettivo Netto
  const b3x = b2x + boxW + boxGap;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b3x, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05,
    line: { color: PURPLE_D, width: 1.5 },
    shadow: makeCardShadow()
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: b3x, y: boxY, w: 0.05, h: boxH,
    fill: { color: PURPLE_L }
  });
  s.addText("COSTO EFFETTIVO NETTO", {
    x: b3x + 0.18, y: boxY + 0.08, w: boxW - 0.3, h: 0.2,
    fontSize: 8, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s.addText("~ €205K", {
    x: b3x + 0.18, y: boxY + 0.28, w: boxW - 0.3, h: 0.35,
    fontSize: 26, fontFace: FONT, color: GREEN, bold: true, margin: 0
  });
  s.addText([
    { text: "Bundle + Iperammortamento", options: { breakLine: true } },
    { text: "vs €398K a listino (-48%)" }
  ], {
    x: b3x + 0.18, y: boxY + 0.65, w: boxW - 0.3, h: 0.38,
    fontSize: 8.5, fontFace: FONT, color: MUTED, margin: 0
  });

  // Disclaimer
  s.addText(
    "Nota: Iperammortamento illustrativo (L. 199/2025, maggioraz. 180% fino a €2,5M, IRES 24%). " +
    "L'effettivo beneficio dipende dalla situazione fiscale di Noloop e va validato con il consulente fiscale. " +
    "Decreto attuativo in fase di pubblicazione.", {
    x: 0.55, y: 5.38, w: 8.4, h: 0.2,
    fontSize: 6.5, fontFace: FONT, color: "555555", margin: 0
  });

  // HeyAI + slide number
  s.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35,
    fontFace: FONT, align: "right", margin: 0
  });
  s.addText("31", {
    x: 9.4, y: 5.15, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT, color: WHITE, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Noloop_Riepilogo_Aggiornato.pptx" });
  console.log("Done!");
}

main().catch(console.error);