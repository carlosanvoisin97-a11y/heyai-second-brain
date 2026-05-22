const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaRocket, FaDatabase, FaBrain, FaDesktop, FaEuroSign, FaHandshake, FaClipboardList, FaArrowRight, FaBullseye, FaCalendarAlt, FaCogs, FaChartLine, FaSearch, FaBell, FaCheckCircle, FaExclamationTriangle, FaClock } = require("react-icons/fa");

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

// Colors
const NAVY = "1B2A4A";
const BLUE = "2E5090";
const TEAL = "0077B6";
const WHITE = "FFFFFF";
const LIGHT_BG = "F5F7FA";
const DARK_TEXT = "2D2D2D";
const MID_GRAY = "6B7280";
const LIGHT_BORDER = "E0E4EA";
const GREEN = "2E8B57";
const AMBER = "D4A017";
const RED = "C0392B";

const makeShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.12 });

async function buildPresentation() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "Carlo Sanvoisin — HeyAI";
  pres.title = "Osservatorio Strategico AI — Allineamento Progetto";

  // Pre-render icons
  const iconRocket = await iconToBase64Png(FaRocket, `#${WHITE}`, 256);
  const iconDB = await iconToBase64Png(FaDatabase, `#${TEAL}`, 256);
  const iconBrain = await iconToBase64Png(FaBrain, `#${TEAL}`, 256);
  const iconDesktop = await iconToBase64Png(FaDesktop, `#${TEAL}`, 256);
  const iconEuro = await iconToBase64Png(FaEuroSign, `#${WHITE}`, 256);
  const iconHandshake = await iconToBase64Png(FaHandshake, `#${WHITE}`, 256);
  const iconClipboard = await iconToBase64Png(FaClipboardList, `#${TEAL}`, 256);
  const iconArrow = await iconToBase64Png(FaArrowRight, `#${TEAL}`, 256);
  const iconBullseye = await iconToBase64Png(FaBullseye, `#${WHITE}`, 256);
  const iconCalendar = await iconToBase64Png(FaCalendarAlt, `#${TEAL}`, 256);
  const iconCogs = await iconToBase64Png(FaCogs, `#${TEAL}`, 256);
  const iconChart = await iconToBase64Png(FaChartLine, `#${TEAL}`, 256);
  const iconSearch = await iconToBase64Png(FaSearch, `#${TEAL}`, 256);
  const iconBell = await iconToBase64Png(FaBell, `#${TEAL}`, 256);
  const iconCheck = await iconToBase64Png(FaCheckCircle, `#${GREEN}`, 256);
  const iconWarn = await iconToBase64Png(FaExclamationTriangle, `#${AMBER}`, 256);
  const iconClock = await iconToBase64Png(FaClock, `#${TEAL}`, 256);
  const iconRocketTeal = await iconToBase64Png(FaRocket, `#${TEAL}`, 256);

  // ============================================================
  // SLIDE 1 — TITLE
  // ============================================================
  let s1 = pres.addSlide();
  s1.background = { color: NAVY };
  // Top accent bar
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });
  // Title text
  s1.addText("Osservatorio\nStrategico AI", {
    x: 0.8, y: 1.0, w: 6, h: 2.2,
    fontFace: "Georgia", fontSize: 42, color: WHITE, bold: true,
    lineSpacingMultiple: 1.1
  });
  // Subtitle
  s1.addText("Allineamento progetto e prossimi passi", {
    x: 0.8, y: 3.2, w: 6, h: 0.5,
    fontFace: "Calibri", fontSize: 18, color: TEAL, italic: true
  });
  // Separator line
  s1.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 3.9, w: 2, h: 0.04, fill: { color: TEAL } });
  // Meta info
  s1.addText([
    { text: "HeyAI per FuturItaly", options: { bold: true, breakLine: true, color: WHITE } },
    { text: "Marzo 2026", options: { color: MID_GRAY } }
  ], { x: 0.8, y: 4.2, w: 5, h: 0.8, fontFace: "Calibri", fontSize: 14 });
  // Right side accent block
  s1.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 0.06, w: 2.5, h: 5.565, fill: { color: BLUE }, transparency: 40 });
  s1.addImage({ data: iconRocket, x: 8.25, y: 2.1, w: 1.0, h: 1.0 });
  // Bottom bar
  s1.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: TEAL } });
  s1.addText("RISERVATO — Uso interno", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 9, color: WHITE });

  // ============================================================
  // SLIDE 2 — AGENDA
  // ============================================================
  let s2 = pres.addSlide();
  s2.background = { color: WHITE };
  // Header bar
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: NAVY } });
  s2.addText("Agenda", { x: 0.8, y: 0, w: 8, h: 0.8, fontFace: "Georgia", fontSize: 24, color: WHITE, bold: true, valign: "middle" });

  const agendaItems = [
    { num: "01", title: "Recap del progetto", desc: "Obiettivi, architettura, lavoro svolto" },
    { num: "02", title: "Demo live", desc: "Dimostrazione del prototipo funzionante" },
    { num: "03", title: "Quadro economico", desc: "Investimento, modello, piano di lavoro" },
    { num: "04", title: "Modello di collaborazione", desc: "Opzioni oltre il rapporto cliente-fornitore" },
    { num: "05", title: "Prossimi passi", desc: "Cosa manca, timeline, meeting con AD" }
  ];

  agendaItems.forEach((item, i) => {
    const yBase = 1.2 + i * 0.82;
    // Number circle
    s2.addShape(pres.shapes.OVAL, { x: 0.8, y: yBase, w: 0.55, h: 0.55, fill: { color: i === 1 ? TEAL : NAVY } });
    s2.addText(item.num, { x: 0.8, y: yBase, w: 0.55, h: 0.55, fontFace: "Calibri", fontSize: 14, color: WHITE, bold: true, align: "center", valign: "middle" });
    // Title
    s2.addText(item.title, { x: 1.6, y: yBase - 0.02, w: 5, h: 0.3, fontFace: "Calibri", fontSize: 16, color: DARK_TEXT, bold: true, margin: 0 });
    // Description
    s2.addText(item.desc, { x: 1.6, y: yBase + 0.28, w: 5, h: 0.25, fontFace: "Calibri", fontSize: 12, color: MID_GRAY, margin: 0 });
  });

  // Right side note
  s2.addShape(pres.shapes.RECTANGLE, { x: 7.0, y: 1.2, w: 2.6, h: 3.9, fill: { color: LIGHT_BG }, shadow: makeShadow() });
  s2.addText("Obiettivo di oggi", { x: 7.2, y: 1.4, w: 2.2, h: 0.35, fontFace: "Calibri", fontSize: 13, color: NAVY, bold: true });
  s2.addText("Allineare il team sui risultati raggiunti e concordare la strategia per la presentazione alla AD.", {
    x: 7.2, y: 1.85, w: 2.2, h: 1.5, fontFace: "Calibri", fontSize: 11, color: DARK_TEXT
  });
  s2.addShape(pres.shapes.RECTANGLE, { x: 7.2, y: 3.6, w: 2.2, h: 0.03, fill: { color: TEAL } });
  s2.addText("Prossimo step: presentazione alla AD con demo live", {
    x: 7.2, y: 3.8, w: 2.2, h: 1.0, fontFace: "Calibri", fontSize: 11, color: TEAL, italic: true
  });

  // Footer
  s2.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: NAVY } });
  s2.addText("HeyAI per FuturItaly — Osservatorio Strategico AI", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 8, color: MID_GRAY });

  // ============================================================
  // SLIDE 3 — RECAP: IL PROBLEMA
  // ============================================================
  let s3 = pres.addSlide();
  s3.background = { color: WHITE };
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: NAVY } });
  s3.addText("Il problema che risolviamo", { x: 0.8, y: 0, w: 8, h: 0.8, fontFace: "Georgia", fontSize: 24, color: WHITE, bold: true, valign: "middle" });

  // Left column - the problem
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 4.3, h: 3.8, fill: { color: LIGHT_BG }, shadow: makeShadow() });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 0.07, h: 3.8, fill: { color: RED } });
  s3.addText("OGGI: Ricerca manuale", { x: 0.8, y: 1.2, w: 3.8, h: 0.4, fontFace: "Calibri", fontSize: 15, color: RED, bold: true, margin: 0 });
  s3.addText([
    { text: "3-4 ore per ogni ricerca su bandi e gare", options: { bullet: true, breakLine: true, color: DARK_TEXT } },
    { text: "Navigazione manuale tra decine di portali", options: { bullet: true, breakLine: true, color: DARK_TEXT } },
    { text: "Filtri mentali basati sull'esperienza personale", options: { bullet: true, breakLine: true, color: DARK_TEXT } },
    { text: "Rischio di perdere opportunità rilevanti", options: { bullet: true, breakLine: true, color: DARK_TEXT } },
    { text: "Nessuna sistematicità nel monitoraggio", options: { bullet: true, color: DARK_TEXT } }
  ], { x: 0.85, y: 1.75, w: 3.7, h: 2.8, fontFace: "Calibri", fontSize: 12, paraSpaceAfter: 8 });

  // Right column - the solution
  s3.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.1, w: 4.3, h: 3.8, fill: { color: LIGHT_BG }, shadow: makeShadow() });
  s3.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.1, w: 0.07, h: 3.8, fill: { color: GREEN } });
  s3.addText("DOMANI: Osservatorio AI", { x: 5.5, y: 1.2, w: 3.8, h: 0.4, fontFace: "Calibri", fontSize: 15, color: GREEN, bold: true, margin: 0 });
  s3.addText([
    { text: "Ricerca automatica in secondi", options: { bullet: true, breakLine: true, color: DARK_TEXT } },
    { text: "5 fonti ufficiali interrogate simultaneamente", options: { bullet: true, breakLine: true, color: DARK_TEXT } },
    { text: "AI che seleziona e assegna scoring 0-100%", options: { bullet: true, breakLine: true, color: DARK_TEXT } },
    { text: "Notifiche proattive su nuove opportunità", options: { bullet: true, breakLine: true, color: DARK_TEXT } },
    { text: "Copertura Italia, Europa, Internazionale", options: { bullet: true, color: DARK_TEXT } }
  ], { x: 5.55, y: 1.75, w: 3.7, h: 2.8, fontFace: "Calibri", fontSize: 12, paraSpaceAfter: 8 });

  // Bottom context
  s3.addText("Contesto: ad oggi nel panorama italiano non esistono strumenti equivalenti.", {
    x: 0.5, y: 5.0, w: 9, h: 0.3, fontFace: "Calibri", fontSize: 11, color: TEAL, italic: true
  });
  s3.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: NAVY } });
  s3.addText("HeyAI per FuturItaly — Osservatorio Strategico AI", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 8, color: MID_GRAY });

  // ============================================================
  // SLIDE 4 — ARCHITETTURA E FONTI
  // ============================================================
  let s4 = pres.addSlide();
  s4.background = { color: WHITE };
  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: NAVY } });
  s4.addText("Architettura e fonti dati", { x: 0.8, y: 0, w: 8, h: 0.8, fontFace: "Georgia", fontSize: 24, color: WHITE, bold: true, valign: "middle" });

  // 4 module cards - 2x2 grid
  const modules = [
    { icon: iconDB, title: "Ingestione Multi-Fonte", desc: "ANAC/PDND, TED, UNGM, World Bank, Incentivi.gov.it, EU Funding & Tenders", x: 0.5, y: 1.1 },
    { icon: iconCogs, title: "Filtraggio Avanzato", desc: "Perimetro, tipologia, dimensione impresa, soglie, ATECO, CPV, stato bandi", x: 5.2, y: 1.1 },
    { icon: iconBrain, title: "AI Agent — Selezione", desc: "Scoring 0-100% personalizzato sulle regole del cliente + riassunto operativo", x: 0.5, y: 2.95 },
    { icon: iconDesktop, title: "Dashboard e Notifiche", desc: "Monitoraggio real-time, filtri, alert automatici sulle nuove opportunità", x: 5.2, y: 2.95 }
  ];

  modules.forEach(mod => {
    s4.addShape(pres.shapes.RECTANGLE, { x: mod.x, y: mod.y, w: 4.3, h: 1.55, fill: { color: LIGHT_BG }, shadow: makeShadow() });
    s4.addShape(pres.shapes.OVAL, { x: mod.x + 0.2, y: mod.y + 0.3, w: 0.55, h: 0.55, fill: { color: NAVY } });
    s4.addImage({ data: mod.icon, x: mod.x + 0.32, y: mod.y + 0.42, w: 0.3, h: 0.3 });
    s4.addText(mod.title, { x: mod.x + 0.95, y: mod.y + 0.2, w: 3.1, h: 0.35, fontFace: "Calibri", fontSize: 14, color: NAVY, bold: true, margin: 0 });
    s4.addText(mod.desc, { x: mod.x + 0.95, y: mod.y + 0.6, w: 3.1, h: 0.8, fontFace: "Calibri", fontSize: 11, color: MID_GRAY, margin: 0 });
  });

  // Source status bar at bottom
  s4.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.7, w: 9, h: 0.5, fill: { color: NAVY } });
  s4.addText("ANAC/PDND  \u26A0\uFE0F  Accreditamento     |     TED  \u2705     |     UNGM  \u2705     |     Incentivi.gov.it  \u2705     |     EU F&T  \u2705", {
    x: 0.5, y: 4.7, w: 9, h: 0.5, fontFace: "Calibri", fontSize: 11, color: WHITE, align: "center", valign: "middle"
  });

  s4.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: NAVY } });
  s4.addText("HeyAI per FuturItaly — Osservatorio Strategico AI", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 8, color: MID_GRAY });

  // ============================================================
  // SLIDE 5 — DEMO LIVE
  // ============================================================
  let s5 = pres.addSlide();
  s5.background = { color: NAVY };
  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  s5.addText("Demo Live", {
    x: 0.8, y: 1.2, w: 8.4, h: 0.8,
    fontFace: "Georgia", fontSize: 40, color: WHITE, bold: true, align: "center"
  });

  s5.addShape(pres.shapes.RECTANGLE, { x: 3.5, y: 2.2, w: 3, h: 0.04, fill: { color: TEAL } });

  // Demo steps
  const demoSteps = [
    "Dashboard e panoramica KPI",
    "Ricerca incentivi con brief cliente reale",
    "Filtraggio intelligente e scoring AI",
    "Assistente AI con domanda in linguaggio naturale",
    "Notifiche e alert proattivi"
  ];

  demoSteps.forEach((step, i) => {
    s5.addText(`${i + 1}.  ${step}`, {
      x: 2.5, y: 2.6 + i * 0.42, w: 5, h: 0.35,
      fontFace: "Calibri", fontSize: 14, color: i === 0 ? TEAL : "CADCFC", align: "center"
    });
  });

  s5.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: TEAL } });
  s5.addText("Prototipo funzionante — Dimostrazione interattiva", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 9, color: WHITE });

  // ============================================================
  // SLIDE 6 — QUADRO ECONOMICO
  // ============================================================
  let s6 = pres.addSlide();
  s6.background = { color: WHITE };
  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: NAVY } });
  s6.addText("Quadro economico", { x: 0.8, y: 0, w: 8, h: 0.8, fontFace: "Georgia", fontSize: 24, color: WHITE, bold: true, valign: "middle" });

  // Big number
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 4.3, h: 2.0, fill: { color: LIGHT_BG }, shadow: makeShadow() });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.1, w: 0.07, h: 2.0, fill: { color: TEAL } });
  s6.addText("Investimento totale", { x: 0.85, y: 1.2, w: 3.7, h: 0.3, fontFace: "Calibri", fontSize: 12, color: MID_GRAY, margin: 0 });
  s6.addText("\u20AC 22.000 \u2014 28.000", { x: 0.85, y: 1.55, w: 3.7, h: 0.6, fontFace: "Georgia", fontSize: 28, color: NAVY, bold: true, margin: 0 });
  s6.addText("Prezzo definitivo al completamento requisitazione", { x: 0.85, y: 2.2, w: 3.7, h: 0.6, fontFace: "Calibri", fontSize: 11, color: MID_GRAY, margin: 0 });

  // What's included
  s6.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.1, w: 4.3, h: 2.0, fill: { color: LIGHT_BG }, shadow: makeShadow() });
  s6.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 1.1, w: 0.07, h: 2.0, fill: { color: GREEN } });
  s6.addText("Incluso nell'investimento", { x: 5.55, y: 1.2, w: 3.7, h: 0.3, fontFace: "Calibri", fontSize: 12, color: MID_GRAY, margin: 0 });
  s6.addText([
    { text: "Licenza d'uso perpetua", options: { bullet: true, breakLine: true } },
    { text: "Personalizzazioni di proprietà del Cliente", options: { bullet: true, breakLine: true } },
    { text: "Infrastruttura cloud (setup + 3 mesi)", options: { bullet: true, breakLine: true } },
    { text: "Servizi AI/ML inclusi", options: { bullet: true, breakLine: true } },
    { text: "Training operativo (4h) + 2 mesi assistenza", options: { bullet: true } }
  ], { x: 5.55, y: 1.55, w: 3.7, h: 1.5, fontFace: "Calibri", fontSize: 11, color: DARK_TEXT, paraSpaceAfter: 4 });

  // Payment and timeline
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.4, w: 4.3, h: 1.5, fill: { color: LIGHT_BG }, shadow: makeShadow() });
  s6.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.4, w: 0.07, h: 1.5, fill: { color: NAVY } });
  s6.addText("Modalità di pagamento", { x: 0.85, y: 3.5, w: 3.7, h: 0.3, fontFace: "Calibri", fontSize: 12, color: MID_GRAY, margin: 0 });
  s6.addText([
    { text: "40% a inizio lavori", options: { bullet: true, breakLine: true } },
    { text: "30% ingresso in fase testing", options: { bullet: true, breakLine: true } },
    { text: "30% consegna definitiva", options: { bullet: true } }
  ], { x: 0.85, y: 3.85, w: 3.7, h: 0.9, fontFace: "Calibri", fontSize: 11, color: DARK_TEXT, paraSpaceAfter: 4 });

  s6.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 3.4, w: 4.3, h: 1.5, fill: { color: LIGHT_BG }, shadow: makeShadow() });
  s6.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 3.4, w: 0.07, h: 1.5, fill: { color: NAVY } });
  s6.addText("Timeline", { x: 5.55, y: 3.5, w: 3.7, h: 0.3, fontFace: "Calibri", fontSize: 12, color: MID_GRAY, margin: 0 });
  s6.addText([
    { text: "8-11 settimane dalla firma", options: { bullet: true, breakLine: true } },
    { text: "Approccio agile in 4 fasi", options: { bullet: true, breakLine: true } },
    { text: "MVP completo e operativo", options: { bullet: true } }
  ], { x: 5.55, y: 3.85, w: 3.7, h: 0.9, fontFace: "Calibri", fontSize: 11, color: DARK_TEXT, paraSpaceAfter: 4 });

  s6.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: NAVY } });
  s6.addText("HeyAI per FuturItaly — Osservatorio Strategico AI", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 8, color: MID_GRAY });

  // ============================================================
  // SLIDE 7 — MODELLO DI COLLABORAZIONE
  // ============================================================
  let s7 = pres.addSlide();
  s7.background = { color: NAVY };
  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  s7.addImage({ data: iconHandshake, x: 4.5, y: 0.6, w: 0.7, h: 0.7 });
  s7.addText("Modello di collaborazione", {
    x: 0.8, y: 1.4, w: 8.4, h: 0.6, fontFace: "Georgia", fontSize: 30, color: WHITE, bold: true, align: "center"
  });
  s7.addShape(pres.shapes.RECTANGLE, { x: 3.8, y: 2.15, w: 2.4, h: 0.03, fill: { color: TEAL } });

  // Two option cards
  // Option A
  s7.addShape(pres.shapes.RECTANGLE, { x: 0.8, y: 2.5, w: 4, h: 2.5, fill: { color: BLUE }, transparency: 30 });
  s7.addText("Opzione A", { x: 0.8, y: 2.55, w: 4, h: 0.4, fontFace: "Calibri", fontSize: 11, color: TEAL, align: "center", bold: true, margin: 0 });
  s7.addText("Cliente \u2014 Fornitore", { x: 0.8, y: 2.9, w: 4, h: 0.4, fontFace: "Georgia", fontSize: 18, color: WHITE, align: "center", bold: true, margin: 0 });
  s7.addText("FuturItaly acquista la soluzione con licenza d'uso. IP del motore resta a HeyAI. Personalizzazioni di proprietà del Cliente.", {
    x: 1.1, y: 3.45, w: 3.4, h: 1.3, fontFace: "Calibri", fontSize: 12, color: "CADCFC", align: "center"
  });

  // Option B
  s7.addShape(pres.shapes.RECTANGLE, { x: 5.2, y: 2.5, w: 4, h: 2.5, fill: { color: TEAL }, transparency: 20 });
  s7.addText("Opzione B", { x: 5.2, y: 2.55, w: 4, h: 0.4, fontFace: "Calibri", fontSize: 11, color: WHITE, align: "center", bold: true, margin: 0 });
  s7.addText("Partnership", { x: 5.2, y: 2.9, w: 4, h: 0.4, fontFace: "Georgia", fontSize: 18, color: WHITE, align: "center", bold: true, margin: 0 });
  s7.addText("Investimento condiviso, sviluppo congiunto. Entrambe le parti investono e beneficiano della crescita della piattaforma. Da definire.", {
    x: 5.5, y: 3.45, w: 3.4, h: 1.3, fontFace: "Calibri", fontSize: 12, color: "CADCFC", align: "center"
  });

  s7.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: TEAL } });
  s7.addText("Discussione aperta — Entrambi i modelli sul tavolo", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 9, color: WHITE });

  // ============================================================
  // SLIDE 8 — COSA MANCA
  // ============================================================
  let s8 = pres.addSlide();
  s8.background = { color: WHITE };
  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: NAVY } });
  s8.addText("Stato avanzamento e punti aperti", { x: 0.8, y: 0, w: 8, h: 0.8, fontFace: "Georgia", fontSize: 24, color: WHITE, bold: true, valign: "middle" });

  // Done column
  s8.addText("COMPLETATO", { x: 0.5, y: 1.1, w: 4.3, h: 0.35, fontFace: "Calibri", fontSize: 13, color: GREEN, bold: true, margin: 0 });
  const doneItems = [
    "Discovery e requisitazione con Paolo e Lidia",
    "Mappatura fonti dati e decisioni tecniche",
    "Definizione criteri di filtraggio (8 parametri)",
    "Architettura funzionale validata",
    "Prototipo demo funzionante",
    "Proposta di investimento redatta"
  ];
  doneItems.forEach((item, i) => {
    const yy = 1.55 + i * 0.45;
    s8.addImage({ data: iconCheck, x: 0.5, y: yy, w: 0.22, h: 0.22 });
    s8.addText(item, { x: 0.85, y: yy - 0.02, w: 4.0, h: 0.3, fontFace: "Calibri", fontSize: 12, color: DARK_TEXT, margin: 0 });
  });

  // Open column
  s8.addText("DA COMPLETARE", { x: 5.2, y: 1.1, w: 4.3, h: 0.35, fontFace: "Calibri", fontSize: 13, color: AMBER, bold: true, margin: 0 });
  const openItems = [
    { text: "Accreditamento ANAC/PDND (3-8 sett.)", icon: iconWarn },
    { text: "Integrazione esempi di Lidia (bandi EU)", icon: iconWarn },
    { text: "Quotazione definitiva post-requisitazione", icon: iconWarn },
    { text: "Scelta modello collaborazione", icon: iconWarn },
    { text: "Approvazione AD", icon: iconWarn }
  ];
  openItems.forEach((item, i) => {
    const yy = 1.55 + i * 0.45;
    s8.addImage({ data: item.icon, x: 5.2, y: yy, w: 0.22, h: 0.22 });
    s8.addText(item.text, { x: 5.55, y: yy - 0.02, w: 4.0, h: 0.3, fontFace: "Calibri", fontSize: 12, color: DARK_TEXT, margin: 0 });
  });

  // ANAC note
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.4, w: 9, h: 0.7, fill: { color: "FFF8E7" }, shadow: makeShadow() });
  s8.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.4, w: 0.07, h: 0.7, fill: { color: AMBER } });
  s8.addText("Nota ANAC: La procedura di accreditamento via PDND richiede il legale rappresentante con SPID e delega. Procedura inviata via email. Consigliamo di avviarla subito, in parallelo allo sviluppo.", {
    x: 0.85, y: 4.45, w: 8.5, h: 0.6, fontFace: "Calibri", fontSize: 11, color: DARK_TEXT
  });

  s8.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: NAVY } });
  s8.addText("HeyAI per FuturItaly — Osservatorio Strategico AI", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 8, color: MID_GRAY });

  // ============================================================
  // SLIDE 9 — PROSSIMI PASSI
  // ============================================================
  let s9 = pres.addSlide();
  s9.background = { color: WHITE };
  s9.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.8, fill: { color: NAVY } });
  s9.addText("Prossimi passi", { x: 0.8, y: 0, w: 8, h: 0.8, fontFace: "Georgia", fontSize: 24, color: WHITE, bold: true, valign: "middle" });

  const steps = [
    { num: "1", title: "Oggi", desc: "Allineamento team su risultati e strategia presentazione", color: GREEN },
    { num: "2", title: "Questa settimana", desc: "Integrare feedback, completare materiali per AD, avviare ANAC", color: TEAL },
    { num: "3", title: "Meeting con AD", desc: "Presentazione con demo live del prototipo funzionante", color: BLUE },
    { num: "4", title: "Post-approvazione", desc: "Definizione modello, firma, avvio sviluppo MVP (8-11 settimane)", color: NAVY }
  ];

  steps.forEach((step, i) => {
    const yy = 1.2 + i * 1.0;
    // Number badge
    s9.addShape(pres.shapes.OVAL, { x: 0.7, y: yy + 0.05, w: 0.55, h: 0.55, fill: { color: step.color } });
    s9.addText(step.num, { x: 0.7, y: yy + 0.05, w: 0.55, h: 0.55, fontFace: "Calibri", fontSize: 16, color: WHITE, bold: true, align: "center", valign: "middle" });
    // Content
    s9.addText(step.title, { x: 1.5, y: yy, w: 7, h: 0.35, fontFace: "Calibri", fontSize: 16, color: DARK_TEXT, bold: true, margin: 0 });
    s9.addText(step.desc, { x: 1.5, y: yy + 0.35, w: 7, h: 0.3, fontFace: "Calibri", fontSize: 12, color: MID_GRAY, margin: 0 });
    // Connector line
    if (i < steps.length - 1) {
      s9.addShape(pres.shapes.RECTANGLE, { x: 0.95, y: yy + 0.65, w: 0.04, h: 0.3, fill: { color: LIGHT_BORDER } });
    }
  });

  s9.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: NAVY } });
  s9.addText("HeyAI per FuturItaly — Osservatorio Strategico AI", { x: 0.8, y: 5.325, w: 8, h: 0.3, fontFace: "Calibri", fontSize: 8, color: MID_GRAY });

  // ============================================================
  // SLIDE 10 — CLOSING
  // ============================================================
  let s10 = pres.addSlide();
  s10.background = { color: NAVY };
  s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.06, fill: { color: TEAL } });

  s10.addImage({ data: iconBullseye, x: 4.5, y: 1.0, w: 0.8, h: 0.8 });
  s10.addText("Time on Target", {
    x: 0.8, y: 2.0, w: 8.4, h: 0.8,
    fontFace: "Georgia", fontSize: 36, color: WHITE, bold: true, align: "center", italic: true
  });
  s10.addShape(pres.shapes.RECTANGLE, { x: 3.8, y: 2.9, w: 2.4, h: 0.03, fill: { color: TEAL } });
  s10.addText("Trasformare la ricerca manuale\nin un vantaggio competitivo automatizzato.", {
    x: 1.5, y: 3.2, w: 7, h: 0.8,
    fontFace: "Calibri", fontSize: 16, color: "CADCFC", align: "center"
  });

  // Contact info
  s10.addText([
    { text: "Carlo Sanvoisin", options: { bold: true, breakLine: true, color: WHITE, fontSize: 14 } },
    { text: "HeyAI S.r.l.", options: { breakLine: true, color: TEAL, fontSize: 12 } },
    { text: "info@heyaidigital.it", options: { color: "CADCFC", fontSize: 12 } }
  ], { x: 0.8, y: 4.2, w: 8.4, h: 0.9, fontFace: "Calibri", align: "center" });

  s10.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.325, w: 10, h: 0.3, fill: { color: TEAL } });

  // Write
  await pres.writeFile({ fileName: "/home/claude/osservatorio_allineamento.pptx" });
  console.log("Presentation created successfully!");
}

buildPresentation().catch(console.error);