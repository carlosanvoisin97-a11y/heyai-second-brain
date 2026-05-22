const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");

// Icon rendering
function renderIconSvg(IconComponent, color = "#000000", size = 256) {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(IconComponent, { color, size: String(size) })
  );
}

async function iconToBase64Png(IconComponent, color, size = 256) {
  const svg = renderIconSvg(IconComponent, color, size);
  const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + pngBuffer.toString("base64");
}

async function main() {
  const { FaCheckCircle, FaRocket, FaChartLine, FaCogs, FaLightbulb, FaShieldAlt } = require("react-icons/fa");
  const { MdTimeline, MdSavings } = require("react-icons/md");

  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Noloop Wave 2 - Slide aggiuntive";

  // Colors matching existing deck
  const BG = "0D0D0D";
  const PURPLE = "7B2FBE";
  const PURPLE_LIGHT = "9B59B6";
  const GREEN = "4ADE80";
  const GREEN_DARK = "22C55E";
  const WHITE = "FFFFFF";
  const GRAY_LIGHT = "B0B0B0";
  const GRAY_MID = "888888";
  const CARD_BG = "1A1A2E";
  const CARD_BG2 = "16213E";
  const TABLE_HEADER = "2D1B69";
  const TABLE_ROW1 = "141425";
  const TABLE_ROW2 = "1C1C35";

  // ============================================================
  // SLIDE 1: EXECUTIVE SUMMARY / AGENDA
  // ============================================================
  let s1 = pres.addSlide();
  s1.background = { color: BG };

  // Subtle purple gradient bar at top
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06, fill: { color: PURPLE }
  });

  // Title
  s1.addText("Executive Summary", {
    x: 0.6, y: 0.25, w: 9, h: 0.65,
    fontSize: 36, fontFace: "Arial", color: WHITE, bold: true, margin: 0
  });

  // Subtitle
  s1.addText("SAL Soluzioni 2025 e Roadmap AI 2026 — Proposta di Digital Transformation", {
    x: 0.6, y: 0.88, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Arial", color: GRAY_LIGHT, margin: 0
  });

  // Thin separator
  s1.addShape(pres.shapes.LINE, {
    x: 0.6, y: 1.35, w: 8.8, h: 0, line: { color: "333333", width: 1 }
  });

  // Narrative block
  s1.addText(
    "Nel 2025 abbiamo consegnato e messo in produzione le prime soluzioni AI. " +
    "Sulla base dei risultati ottenuti e di un'analisi approfondita dei processi operativi — " +
    "6 reparti intervistati, 7 procedure analizzate — proponiamo un ecosistema di 8 soluzioni " +
    "interconnesse per il 2026, ciascuna con business case quantificato su dati reali Noloop.", {
    x: 0.6, y: 1.5, w: 8.8, h: 0.75,
    fontSize: 11.5, fontFace: "Arial", color: GRAY_LIGHT, lineSpacingMultiple: 1.3, margin: 0
  });

  // === AGENDA ITEMS ===
  const agendaItems = [
    { num: "01", title: "Stato Avanzamento Lavori 2025", desc: "Soluzioni consegnate, adozione, feedback dai reparti", color: GREEN_DARK },
    { num: "02", title: "Evoluzioni delle Soluzioni Attive", desc: "Crowd Pagamenti e Minutes Call Esterne", color: GREEN_DARK },
    { num: "03", title: "Metodologia e Aree di Ottimizzazione", desc: "Discovery, analisi processi, pain point validati", color: PURPLE_LIGHT },
    { num: "04", title: "L'Ecosistema Wave 2 — 8 Soluzioni", desc: "Link · Flow · LeadMe · Sally · Pitch · OnSite · Venue Finder · Crowd", color: PURPLE_LIGHT },
    { num: "05", title: "Business Case e Impatto Economico", desc: "~€397K/anno di risparmio, ~6,8 FTE liberati, ROI per soluzione", color: PURPLE },
    { num: "06", title: "Investimento, Bundle e Leva Fiscale", desc: "Riepilogo economico, sconto bundle >5 soluzioni, Iperammortamento 2026", color: PURPLE },
  ];

  const startY = 2.45;
  const rowH = 0.48;
  const gap = 0.05;

  for (let i = 0; i < agendaItems.length; i++) {
    const item = agendaItems[i];
    const y = startY + i * (rowH + gap);

    // Number circle
    s1.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 0.55, h: rowH,
      fill: { color: item.color }, rectRadius: 0.05
    });
    s1.addText(item.num, {
      x: 0.6, y: y, w: 0.55, h: rowH,
      fontSize: 14, fontFace: "Arial", color: WHITE, bold: true,
      align: "center", valign: "middle", margin: 0
    });

    // Title
    s1.addText(item.title, {
      x: 1.3, y: y - 0.02, w: 4.5, h: rowH * 0.55,
      fontSize: 14, fontFace: "Arial", color: WHITE, bold: true,
      valign: "middle", margin: 0
    });

    // Description
    s1.addText(item.desc, {
      x: 1.3, y: y + rowH * 0.42, w: 4.5, h: rowH * 0.55,
      fontSize: 10, fontFace: "Arial", color: GRAY_MID,
      valign: "middle", margin: 0
    });
  }

  // === RIGHT SIDE: Key numbers box ===
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 6.2, y: 2.45, w: 3.4, h: 2.7,
    fill: { color: CARD_BG },
    line: { color: "2A2A4A", width: 1 },
    rectRadius: 0.08
  });

  // Purple accent bar on left
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 6.2, y: 2.45, w: 0.06, h: 2.7,
    fill: { color: PURPLE }
  });

  s1.addText("I numeri chiave", {
    x: 6.5, y: 2.55, w: 2.9, h: 0.35,
    fontSize: 13, fontFace: "Arial", color: PURPLE_LIGHT, bold: true, margin: 0
  });

  const keyNums = [
    { value: "~€397K", label: "risparmio annuo stimato" },
    { value: "~6,8 FTE", label: "ore liberate (~11.700h)" },
    { value: "6", label: "business case quantificati" },
    { value: "€357K", label: "investimento bundle" },
    { value: "~€203K", label: "costo netto post Iperammortamento*" },
  ];

  for (let i = 0; i < keyNums.length; i++) {
    const kn = keyNums[i];
    const ky = 2.95 + i * 0.42;

    s1.addText(kn.value, {
      x: 6.5, y: ky, w: 1.3, h: 0.35,
      fontSize: 15, fontFace: "Arial", color: GREEN, bold: true, valign: "middle", margin: 0
    });
    s1.addText(kn.label, {
      x: 7.8, y: ky, w: 1.7, h: 0.35,
      fontSize: 9.5, fontFace: "Arial", color: GRAY_LIGHT, valign: "middle", margin: 0
    });
  }

  // Footer note
  s1.addText("*Stima illustrativa basata su Iperammortamento 2026 (L. 199/2025), maggiorazione 180%, aliquota IRES 24%. Soggetto a decreto attuativo.", {
    x: 0.6, y: 5.15, w: 8.8, h: 0.25,
    fontSize: 7.5, fontFace: "Arial", color: "555555", margin: 0
  });

  // HeyAI branding bottom right
  s1.addText([
    { text: "Hey", options: { color: WHITE, bold: true } },
    { text: "AI", options: { color: PURPLE_LIGHT, bold: true } }
  ], {
    x: 8.8, y: 5.25, w: 0.8, h: 0.3,
    fontSize: 12, fontFace: "Arial", align: "right", margin: 0
  });


  // ============================================================
  // SLIDE 2: RIEPILOGO INVESTIMENTI — BUNDLE + IPERAMMORTAMENTO
  // ============================================================
  let s2 = pres.addSlide();
  s2.background = { color: BG };

  // Top purple bar
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06, fill: { color: PURPLE }
  });

  // Title
  s2.addText("Riepilogo Investimento e Leva Fiscale", {
    x: 0.5, y: 0.2, w: 9, h: 0.6,
    fontSize: 30, fontFace: "Arial", color: WHITE, bold: true, margin: 0
  });

  s2.addText("Acquisto in bundle (5+ soluzioni): sconto medio del 12,5% sull'investimento complessivo", {
    x: 0.5, y: 0.78, w: 9, h: 0.3,
    fontSize: 12, fontFace: "Arial", color: GRAY_LIGHT, margin: 0
  });

  // === MAIN TABLE ===
  const colW = [2.8, 1.1, 1.1, 1.2, 1.15, 1.15];
  const tableX = 0.35;
  const tableY = 1.2;

  const headerOpts = {
    fill: { color: TABLE_HEADER }, color: WHITE, bold: true,
    fontSize: 9, fontFace: "Arial", align: "center", valign: "middle",
    border: { pt: 0.5, color: "333355" },
    margin: [4, 4, 4, 4]
  };

  const cellOpts = (isAlt) => ({
    fill: { color: isAlt ? TABLE_ROW2 : TABLE_ROW1 },
    color: GRAY_LIGHT, fontSize: 9, fontFace: "Arial",
    valign: "middle",
    border: { pt: 0.5, color: "222244" },
    margin: [3, 5, 3, 5]
  });

  const cellRight = (isAlt) => ({ ...cellOpts(isAlt), align: "right" });
  const cellLeft = (isAlt) => ({ ...cellOpts(isAlt), align: "left" });

  const greenCell = (isAlt) => ({
    ...cellRight(isAlt), color: GREEN, bold: true
  });

  const solutions = [
    ["Venue Finder Evolution", "€9.000", "€8.000", "€36.400", "0,71", "3 mesi"],
    ["LeadMe Evolution", "€45.000", "€40.000", "€54.500", "1,30", "10 mesi"],
    ["Link — Sistema Gestionale", "€90.000", "€80.000", "€56.000", "0,66", "19 mesi"],
    ["Flow — Task Management", "€75.000", "€60.000", "€114.943", "1,93", "10 mesi"],
    ["Pitch — Modulo Creativo", "€45.000", "€40.000", "€57.500", "1,06", "15 mesi"],
    ["Sally — Agente 360°", "€85.000", "€75.000", "€77.486", "1,15", "18 mesi"],
    ["OnSite — AI Event Companion", "€35.000", "€30.000", "Revenue add.", "—", "—"],
    ["Crowd — Integr. Pagamenti", "€15.000", "€15.000", "Revenue add.", "—", "—"],
    ["Minutes — Call Esterne", "€9.000", "€9.000", "Produttività", "—", "—"],
  ];

  let tableData = [];

  // Header
  tableData.push([
    { text: "Soluzione", options: { ...headerOpts, align: "left" } },
    { text: "Listino", options: headerOpts },
    { text: "Bundle", options: { ...headerOpts, color: GREEN } },
    { text: "Risparmio/anno", options: headerOpts },
    { text: "FTE liberati", options: headerOpts },
    { text: "Payback", options: headerOpts },
  ]);

  // Data rows
  solutions.forEach((sol, i) => {
    const alt = i % 2 === 1;
    tableData.push([
      { text: sol[0], options: cellLeft(alt) },
      { text: sol[1], options: cellRight(alt) },
      { text: sol[2], options: greenCell(alt) },
      { text: sol[3], options: cellRight(alt) },
      { text: sol[4], options: { ...cellRight(alt), align: "center" } },
      { text: sol[5], options: { ...cellRight(alt), align: "center" } },
    ]);
  });

  // Totals row
  const totalOpts = {
    fill: { color: PURPLE }, color: WHITE, bold: true,
    fontSize: 10, fontFace: "Arial", valign: "middle",
    border: { pt: 0.5, color: PURPLE },
    margin: [4, 5, 4, 5]
  };

  tableData.push([
    { text: "TOTALE ECOSISTEMA", options: { ...totalOpts, align: "left" } },
    { text: "€408.000", options: { ...totalOpts, align: "right" } },
    { text: "€357.000", options: { ...totalOpts, align: "right", color: GREEN } },
    { text: "€396.829", options: { ...totalOpts, align: "right" } },
    { text: "6,81", options: { ...totalOpts, align: "center" } },
    { text: "—", options: { ...totalOpts, align: "center" } },
  ]);

  s2.addTable(tableData, {
    x: tableX, y: tableY, w: 8.5, colW: colW,
    rowH: [0.3, 0.27, 0.27, 0.27, 0.27, 0.27, 0.27, 0.27, 0.27, 0.27, 0.32],
  });

  // === BOTTOM: Three KPI boxes ===
  const boxY = 4.2;
  const boxH = 1.15;
  const boxW = 2.85;
  const boxGap = 0.15;

  // Box 1: Bundle savings
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD_BG }, line: { color: "2A2A4A", width: 1 }
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: boxY, w: 0.05, h: boxH, fill: { color: GREEN_DARK }
  });
  s2.addText("SCONTO BUNDLE", {
    x: 0.7, y: boxY + 0.08, w: boxW - 0.3, h: 0.22,
    fontSize: 8.5, fontFace: "Arial", color: GREEN, bold: true, charSpacing: 1.5, margin: 0
  });
  s2.addText("- €51.000", {
    x: 0.7, y: boxY + 0.3, w: boxW - 0.3, h: 0.35,
    fontSize: 24, fontFace: "Arial", color: WHITE, bold: true, margin: 0
  });
  s2.addText("12,5% di risparmio sull'acquisto\ndi 5+ soluzioni in bundle", {
    x: 0.7, y: boxY + 0.68, w: boxW - 0.3, h: 0.4,
    fontSize: 9, fontFace: "Arial", color: GRAY_MID, lineSpacingMultiple: 1.2, margin: 0
  });

  // Box 2: Iperammortamento
  const box2X = 0.5 + boxW + boxGap;
  s2.addShape(pres.shapes.RECTANGLE, {
    x: box2X, y: boxY, w: boxW, h: boxH,
    fill: { color: CARD_BG }, line: { color: "2A2A4A", width: 1 }
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: box2X, y: boxY, w: 0.05, h: boxH, fill: { color: PURPLE }
  });
  s2.addText("IPERAMMORTAMENTO 2026", {
    x: box2X + 0.2, y: boxY + 0.08, w: boxW - 0.3, h: 0.22,
    fontSize: 8.5, fontFace: "Arial", color: PURPLE_LIGHT, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("~ €154K", {
    x: box2X + 0.2, y: boxY + 0.3, w: boxW - 0.3, h: 0.35,
    fontSize: 24, fontFace: "Arial", color: WHITE, bold: true, margin: 0
  });
  s2.addText("Risparmio fiscale stimato\n(maggioraz. 180%, IRES 24%)", {
    x: box2X + 0.2, y: boxY + 0.68, w: boxW - 0.3, h: 0.4,
    fontSize: 9, fontFace: "Arial", color: GRAY_MID, lineSpacingMultiple: 1.2, margin: 0
  });

  // Box 3: Net effective cost
  const box3X = box2X + boxW + boxGap;
  s2.addShape(pres.shapes.RECTANGLE, {
    x: box3X, y: boxY, w: boxW, h: boxH,
    fill: { color: "1A0A30" }, line: { color: PURPLE, width: 1.5 }
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: box3X, y: boxY, w: 0.05, h: boxH, fill: { color: PURPLE }
  });
  s2.addText("COSTO EFFETTIVO NETTO", {
    x: box3X + 0.2, y: boxY + 0.08, w: boxW - 0.3, h: 0.22,
    fontSize: 8.5, fontFace: "Arial", color: PURPLE_LIGHT, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("~ €203K", {
    x: box3X + 0.2, y: boxY + 0.3, w: boxW - 0.3, h: 0.35,
    fontSize: 24, fontFace: "Arial", color: GREEN, bold: true, margin: 0
  });
  s2.addText("Con bundle + Iperammortamento\nvs €408K a listino (-50%)", {
    x: box3X + 0.2, y: boxY + 0.68, w: boxW - 0.3, h: 0.4,
    fontSize: 9, fontFace: "Arial", color: GRAY_MID, lineSpacingMultiple: 1.2, margin: 0
  });

  // Disclaimer
  s2.addText(
    "Nota: i valori relativi all'Iperammortamento sono illustrativi, basati su L. 199/2025 (maggiorazione 180% fino a €2,5M, IRES 24%). " +
    "L'effettivo beneficio dipende dalla situazione fiscale di Noloop e va validato con il consulente fiscale. Decreto attuativo in fase di pubblicazione.", {
    x: 0.5, y: 5.38, w: 8.5, h: 0.25,
    fontSize: 6.5, fontFace: "Arial", color: "444444", margin: 0
  });

  // HeyAI branding
  s2.addText([
    { text: "Hey", options: { color: WHITE, bold: true } },
    { text: "AI", options: { color: PURPLE_LIGHT, bold: true } }
  ], {
    x: 8.8, y: 5.25, w: 0.8, h: 0.3,
    fontSize: 12, fontFace: "Arial", align: "right", margin: 0
  });

  // Write file
  await pres.writeFile({ fileName: "/home/claude/Noloop_Slide_Aggiuntive.pptx" });
  console.log("Done! Written to /home/claude/Noloop_Slide_Aggiuntive.pptx");
}

main().catch(console.error);