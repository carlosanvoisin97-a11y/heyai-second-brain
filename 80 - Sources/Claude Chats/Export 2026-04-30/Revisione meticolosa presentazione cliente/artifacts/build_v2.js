const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Noloop Wave 2 - Slide aggiuntive";

  // === EXACT COLOR PALETTE FROM ORIGINAL DECK ===
  const BG = "000000";           // Slide background (theme dk1)
  const CARD = "232831";          // Card fill (slide 2, 6, 9, etc.)
  const CARD_BORDER = "2A2A3A";   // Subtle card/table borders
  const TBL_HEADER = "2E2E3E";   // Table header row
  const TBL_ROW_A = "141420";    // Table row alternating A
  const TBL_ROW_B = "1A1A24";    // Table row alternating B
  const PURPLE_L = "BAA4EB";     // Light purple (accent1)
  const PURPLE_D = "5728B8";     // Dark purple (accent2)
  const PURPLE_M = "7B5EA7";     // Medium purple (slide 14 cards)
  const GREEN = "66DDAB";        // Green accent (business case KPIs)
  const GREEN_ALT = "7DDF80";    // Alt green (slide 2 check icon)
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";         // Body text gray
  const GRAY_D = "D0D0D0";       // Slightly brighter gray
  const MUTED = "9090A8";        // Muted purple-gray (captions)
  const GREEN_BG_DARK = "1C3A1C";// Dark green cell bg (from table)

  // Fonts matching the deck
  const TITLE_FONT = "Calibri";   // Titles (Acre Medium fallback)
  const BODY_FONT = "Calibri";    // Body text

  // Helper: factory for fresh shadow objects (pptxgenjs mutates)
  const makeCardShadow = () => ({ type: "outer", blur: 4, offset: 1, angle: 135, color: "000000", opacity: 0.25 });

  // ============================================================
  // SLIDE 1: EXECUTIVE SUMMARY / AGENDA
  // ============================================================
  let s1 = pres.addSlide();
  s1.background = { color: BG };

  // Title - large bold white (matching ~48pt from deck)
  s1.addText("Executive Summary", {
    x: 0.55, y: 0.3, w: 9, h: 0.75,
    fontSize: 44, fontFace: TITLE_FONT, color: WHITE, bold: true, margin: 0
  });

  // Subtitle in light purple
  s1.addText("SAL Soluzioni 2025 e Roadmap AI 2026 — Proposta di Digital Transformation", {
    x: 0.55, y: 1.0, w: 8.5, h: 0.35,
    fontSize: 13, fontFace: BODY_FONT, color: GRAY, margin: 0
  });

  // Narrative paragraph
  s1.addText(
    "Nel 2025 abbiamo introdotto le prime soluzioni AI nell'operatività Noloop. Partendo da questa base, " +
    "abbiamo condotto un'analisi approfondita dei processi operativi — intervistando 6 reparti e analizzando " +
    "le procedure aziendali — per identificare dove intervenire con il massimo impatto. " +
    "Quello che segue è il risultato: un ecosistema di soluzioni interconnesse, ciascuna con un business case " +
    "costruito sui dati reali di Noloop.", {
    x: 0.55, y: 1.45, w: 8.9, h: 0.72,
    fontSize: 11, fontFace: BODY_FONT, color: GRAY, lineSpacingMultiple: 1.35, margin: 0
  });

  // === AGENDA ITEMS (6 numbered cards, stacked) ===
  const agendaItems = [
    { num: "01", title: "Stato Avanzamento Lavori 2025", desc: "Soluzioni consegnate, adozione, feedback dai reparti", accent: GREEN_ALT },
    { num: "02", title: "Evoluzioni delle Soluzioni Attive", desc: "Crowd Pagamenti e Minutes Call Esterne", accent: GREEN_ALT },
    { num: "03", title: "Metodologia e Aree di Ottimizzazione", desc: "Discovery, analisi processi, pain point validati", accent: PURPLE_L },
    { num: "04", title: "L'Ecosistema Wave 2", desc: "Link · Flow · LeadMe · Sally · Pitch · OnSite · Venue Finder", accent: PURPLE_L },
    { num: "05", title: "Business Case e Impatto Economico", desc: "~€397K/anno risparmiati, ~6,8 FTE liberati", accent: PURPLE_D },
    { num: "06", title: "Investimento, Bundle e Leva Fiscale", desc: "Riepilogo, sconto bundle, Iperammortamento 2026", accent: PURPLE_D },
  ];

  const startY = 2.32;
  const rowH = 0.47;
  const rowGap = 0.04;

  for (let i = 0; i < agendaItems.length; i++) {
    const item = agendaItems[i];
    const y = startY + i * (rowH + rowGap);

    // Card background
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.55, y: y, w: 5.5, h: rowH,
      fill: { color: CARD }, rectRadius: 0.04
    });

    // Left accent bar
    s1.addShape(pres.shapes.RECTANGLE, {
      x: 0.55, y: y, w: 0.05, h: rowH,
      fill: { color: item.accent }
    });

    // Number
    s1.addText(item.num, {
      x: 0.7, y: y, w: 0.42, h: rowH,
      fontSize: 15, fontFace: BODY_FONT, color: item.accent, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Title
    s1.addText(item.title, {
      x: 1.2, y: y, w: 3.0, h: rowH * 0.55,
      fontSize: 13, fontFace: BODY_FONT, color: WHITE, bold: true,
      valign: "bottom", margin: 0
    });

    // Description
    s1.addText(item.desc, {
      x: 1.2, y: y + rowH * 0.5, w: 4.7, h: rowH * 0.48,
      fontSize: 9.5, fontFace: BODY_FONT, color: MUTED,
      valign: "top", margin: 0
    });
  }

  // === RIGHT SIDE: Key numbers card ===
  const kbX = 6.3;
  const kbY = 2.32;
  const kbW = 3.3;
  const kbH = 2.95;

  s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: kbX, y: kbY, w: kbW, h: kbH,
    fill: { color: CARD }, rectRadius: 0.06,
    shadow: makeCardShadow()
  });

  // Left purple accent bar
  s1.addShape(pres.shapes.RECTANGLE, {
    x: kbX, y: kbY, w: 0.05, h: kbH,
    fill: { color: PURPLE_D }
  });

  s1.addText("I Numeri Chiave", {
    x: kbX + 0.22, y: kbY + 0.1, w: kbW - 0.4, h: 0.3,
    fontSize: 12, fontFace: BODY_FONT, color: PURPLE_L, bold: true,
    charSpacing: 1, margin: 0
  });

  // Thin separator under title
  s1.addShape(pres.shapes.LINE, {
    x: kbX + 0.22, y: kbY + 0.42, w: kbW - 0.5, h: 0,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  const keyNums = [
    { value: "~€397K", label: "risparmio annuo stimato", color: GREEN },
    { value: "~6,8 FTE", label: "ore liberate (~11.700h/anno)", color: GREEN },
    { value: "6", label: "business case quantificati", color: GREEN },
    { value: "€357K", label: "investimento bundle", color: WHITE },
    { value: "~€203K", label: "costo netto post Iperammortamento*", color: GREEN },
  ];

  for (let i = 0; i < keyNums.length; i++) {
    const kn = keyNums[i];
    const ky = kbY + 0.52 + i * 0.45;

    s1.addText(kn.value, {
      x: kbX + 0.22, y: ky, w: 1.25, h: 0.35,
      fontSize: 16, fontFace: BODY_FONT, color: kn.color, bold: true,
      valign: "middle", margin: 0
    });
    s1.addText(kn.label, {
      x: kbX + 1.5, y: ky, w: 1.6, h: 0.35,
      fontSize: 9, fontFace: BODY_FONT, color: MUTED,
      valign: "middle", margin: 0
    });
  }

  // Footer disclaimer
  s1.addText("*Stima illustrativa: Iperammortamento L. 199/2025, maggioraz. 180%, IRES 24%. Soggetto a decreto attuativo.", {
    x: 0.55, y: 5.2, w: 7.5, h: 0.2,
    fontSize: 7, fontFace: BODY_FONT, color: "555555", margin: 0
  });

  // HeyAI logo text (bottom right, matching existing deck)
  s1.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35,
    fontFace: BODY_FONT, align: "right", margin: 0
  });

  // Slide number
  s1.addText("2", {
    x: 9.4, y: 5.15, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: BODY_FONT, color: WHITE, align: "right", margin: 0
  });


  // ============================================================
  // SLIDE 2: RIEPILOGO INVESTIMENTI — BUNDLE + IPERAMMORTAMENTO
  // ============================================================
  let s2 = pres.addSlide();
  s2.background = { color: BG };

  // Title
  s2.addText("Riepilogo Investimento e Leva Fiscale", {
    x: 0.55, y: 0.25, w: 9, h: 0.7,
    fontSize: 40, fontFace: TITLE_FONT, color: WHITE, bold: true, margin: 0
  });

  // Subtitle
  s2.addText("Acquistando 5+ soluzioni in bundle: sconto medio del 12,5% sull'investimento complessivo.", {
    x: 0.55, y: 0.9, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: BODY_FONT, color: GRAY, margin: 0
  });

  // === TABLE ===
  const colW = [2.65, 1.05, 1.05, 1.2, 0.9, 0.95];
  const tblW = colW.reduce((a, b) => a + b, 0); // 7.8

  const hdrOpts = (align = "center") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 8.5, fontFace: BODY_FONT, align: align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER },
    margin: [3, 4, 3, 4]
  });

  const cellOpt = (alt, align = "right") => ({
    fill: { color: alt ? TBL_ROW_B : TBL_ROW_A },
    color: GRAY_D, fontSize: 8.5, fontFace: BODY_FONT,
    align: align, valign: "middle",
    border: { pt: 0.3, color: "1A1A30" },
    margin: [2, 5, 2, 5]
  });

  const greenOpt = (alt) => ({
    ...cellOpt(alt), color: GREEN, bold: true
  });

  const rows = [
    ["Venue Finder Evolution",    "€9.000",  "€8.000",  "€36.400",   "0,71",  "3 mesi"  ],
    ["LeadMe Evolution",          "€45.000", "€40.000", "€54.500",   "1,30",  "10 mesi" ],
    ["Link — Sistema Gestionale", "€90.000", "€80.000", "€56.000",   "0,66",  "19 mesi" ],
    ["Flow — Task Management",    "€75.000", "€60.000", "€114.943",  "1,93",  "10 mesi" ],
    ["Pitch — Modulo Creativo",   "€45.000", "€40.000", "€57.500",   "1,06",  "15 mesi" ],
    ["Sally — Agente 360°",       "€85.000", "€75.000", "€77.486",   "1,15",  "18 mesi" ],
    ["OnSite — AI Companion",     "€35.000", "€30.000", "Up-sell",   "—",     "—"       ],
    ["Crowd — Integr. Pagamenti", "€15.000", "€15.000", "Revenue",   "—",     "—"       ],
    ["Minutes — Call Esterne",    "€9.000",  "€9.000",  "Produttiv.","—",     "—"       ],
  ];

  let tableData = [];

  // Header row
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
    fontSize: 9.5, fontFace: BODY_FONT, align: align, valign: "middle",
    border: { pt: 0.5, color: PURPLE_D },
    margin: [3, 5, 3, 5]
  });

  tableData.push([
    { text: "TOTALE ECOSISTEMA", options: totOpts("left") },
    { text: "€408.000", options: totOpts() },
    { text: "€357.000", options: { ...totOpts(), color: GREEN } },
    { text: "€396.829", options: totOpts() },
    { text: "6,81", options: totOpts("center") },
    { text: "", options: totOpts("center") },
  ]);

  s2.addTable(tableData, {
    x: 0.55, y: 1.28, w: tblW,
    colW: colW,
    rowH: [0.3, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.26, 0.3],
  });

  // === BOTTOM: 3 KPI CARDS (matching deck card style) ===
  const boxY = 4.25;
  const boxH = 1.1;
  const boxW = 2.6;
  const boxGap = 0.12;
  const boxStartX = 0.55;

  // Box 1: Sconto Bundle
  const b1x = boxStartX;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b1x, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05,
    shadow: makeCardShadow()
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: b1x, y: boxY, w: 0.05, h: boxH,
    fill: { color: GREEN }
  });
  s2.addText("SCONTO BUNDLE", {
    x: b1x + 0.18, y: boxY + 0.08, w: boxW - 0.3, h: 0.2,
    fontSize: 8, fontFace: BODY_FONT, color: GREEN, bold: true, charSpacing: 1.5, margin: 0
  });
  s2.addText("- €51.000", {
    x: b1x + 0.18, y: boxY + 0.28, w: boxW - 0.3, h: 0.35,
    fontSize: 26, fontFace: BODY_FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText([
    { text: "12,5% di risparmio sull'acquisto", options: { breakLine: true } },
    { text: "di 5+ soluzioni in bundle" }
  ], {
    x: b1x + 0.18, y: boxY + 0.65, w: boxW - 0.3, h: 0.38,
    fontSize: 8.5, fontFace: BODY_FONT, color: MUTED, margin: 0
  });

  // Box 2: Iperammortamento
  const b2x = b1x + boxW + boxGap;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b2x, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05,
    shadow: makeCardShadow()
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: b2x, y: boxY, w: 0.05, h: boxH,
    fill: { color: PURPLE_D }
  });
  s2.addText("IPERAMMORTAMENTO 2026", {
    x: b2x + 0.18, y: boxY + 0.08, w: boxW - 0.3, h: 0.2,
    fontSize: 8, fontFace: BODY_FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("~ €154K", {
    x: b2x + 0.18, y: boxY + 0.28, w: boxW - 0.3, h: 0.35,
    fontSize: 26, fontFace: BODY_FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText([
    { text: "Risparmio fiscale stimato", options: { breakLine: true } },
    { text: "(maggioraz. 180%, IRES 24%)" }
  ], {
    x: b2x + 0.18, y: boxY + 0.65, w: boxW - 0.3, h: 0.38,
    fontSize: 8.5, fontFace: BODY_FONT, color: MUTED, margin: 0
  });

  // Box 3: Costo Effettivo Netto (highlighted with purple border)
  const b3x = b2x + boxW + boxGap;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b3x, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.05,
    line: { color: PURPLE_D, width: 1.5 },
    shadow: makeCardShadow()
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: b3x, y: boxY, w: 0.05, h: boxH,
    fill: { color: PURPLE_L }
  });
  s2.addText("COSTO EFFETTIVO NETTO", {
    x: b3x + 0.18, y: boxY + 0.08, w: boxW - 0.3, h: 0.2,
    fontSize: 8, fontFace: BODY_FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("~ €203K", {
    x: b3x + 0.18, y: boxY + 0.28, w: boxW - 0.3, h: 0.35,
    fontSize: 26, fontFace: BODY_FONT, color: GREEN, bold: true, margin: 0
  });
  s2.addText([
    { text: "Bundle + Iperammortamento", options: { breakLine: true } },
    { text: "vs €408K a listino (-50%)" }
  ], {
    x: b3x + 0.18, y: boxY + 0.65, w: boxW - 0.3, h: 0.38,
    fontSize: 8.5, fontFace: BODY_FONT, color: MUTED, margin: 0
  });

  // Footer disclaimer
  s2.addText(
    "Nota: Iperammortamento illustrativo (L. 199/2025, maggioraz. 180% fino a €2,5M, IRES 24%). " +
    "L'effettivo beneficio dipende dalla situazione fiscale di Noloop e va validato con il consulente fiscale. " +
    "Decreto attuativo in fase di pubblicazione.", {
    x: 0.55, y: 5.38, w: 8.4, h: 0.2,
    fontSize: 6.5, fontFace: BODY_FONT, color: "555555", margin: 0
  });

  // HeyAI logo text
  s2.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35,
    fontFace: BODY_FONT, align: "right", margin: 0
  });

  // Slide number
  s2.addText("30", {
    x: 9.4, y: 5.15, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: BODY_FONT, color: WHITE, align: "right", margin: 0
  });

  // Write
  await pres.writeFile({ fileName: "/home/claude/Noloop_Slide_Aggiuntive_v2.pptx" });
  console.log("Done!");
}

main().catch(console.error);