const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");

// Icons from react-icons
const { FaCheckCircle, FaSearch, FaChartLine, FaBolt } = require("react-icons/fa");

function renderIconSvg(IconComponent, color, size = 256) {
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
  const F = "Acre Medium";
  const BG = "000000";
  const BOX = "232831";
  const W = "FFFFFF";
  const G = "CCCCCC";
  const PUR = "BAA4EB";
  const GRN = "7DDF80";
  const AMB = "FFB74D";
  const GRAY_BODY = "B0B0C0";

  // Generate icons
  const iconCheck = await iconToBase64Png(FaCheckCircle, "#" + GRN, 256);
  const iconSearch = await iconToBase64Png(FaSearch, "#" + PUR, 256);
  const iconChart = await iconToBase64Png(FaChartLine, "#" + GRN, 256);
  const iconBolt = await iconToBase64Png(FaBolt, "#" + AMB, 256);

  let pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE";
  pres.author = "HeyAI";
  pres.title = "Wave 2 — Intro";

  let s = pres.addSlide();
  s.background = { color: BG };

  // ── TOP ACCENT LINE (purple) ──
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.33, h: 0.06,
    fill: { color: "7B5EA7" }
  });

  // ── TITLE ──
  s.addText("Da Partner Tecnologico a Ecosistema Operativo", {
    x: 0.80, y: 0.30, w: 11.73, h: 0.80,
    fontSize: 36, fontFace: F, color: W, valign: "top", margin: 0
  });

  // ── SUBTITLE (italic, purple) ──
  s.addText("Il percorso che abbiamo costruito insieme nel 2025 e la proposta per trasformare i processi operativi Noloop nel 2026.", {
    x: 0.80, y: 1.10, w: 11.73, h: 0.40,
    fontSize: 16, fontFace: F, color: PUR, italic: true, valign: "top", margin: 0
  });

  // ── BODY PARAGRAPH ──
  s.addText(
    "Nel 2025 abbiamo introdotto le prime soluzioni AI nell\u2019operativit\u00E0 Noloop: strumenti per la ricerca location, la gestione dei lead, la trascrizione delle riunioni e la gestione degli eventi. Queste soluzioni sono oggi in produzione e utilizzate quotidianamente dai reparti. Partendo da questa base, abbiamo condotto un\u2019analisi approfondita dei processi operativi \u2014 intervistando 7 reparti e analizzando le procedure aziendali \u2014 per identificare dove intervenire con il massimo impatto. Quello che segue \u00E8 il risultato: un ecosistema di 8 soluzioni interconnesse, ciascuna con un business case costruito sui dati reali di Noloop.",
    {
      x: 0.80, y: 1.65, w: 11.73, h: 1.20,
      fontSize: 14, fontFace: F, color: GRAY_BODY, valign: "top", margin: 0,
      lineSpacingMultiple: 1.25
    }
  );

  // ── SEPARATOR LINE ──
  s.addShape(pres.shapes.LINE, {
    x: 0.80, y: 2.95, w: 11.73, h: 0,
    line: { color: "3A3A50", width: 1 }
  });

  // ── 4 CARDS ──
  const cardW = 2.73;
  const cardH = 2.45;
  const cardY = 3.20;
  const cardGap = 0.20;
  const startX = 0.80;

  const cards = [
    {
      icon: iconCheck, iconColor: GRN, titleColor: GRN,
      title: "Gi\u00E0 validato",
      body: "Le soluzioni Wave 1 sono in produzione con feedback positivo da tutti i reparti. Non partiamo da zero: estendiamo un ecosistema che funziona."
    },
    {
      icon: iconSearch, iconColor: PUR, titleColor: PUR,
      title: "Costruito dal basso",
      body: "12+ sessioni di discovery con i responsabili di ogni area, analisi delle 7 procedure operative ufficiali. Ogni soluzione risponde a un problema reale."
    },
    {
      icon: iconChart, iconColor: GRN, titleColor: GRN,
      title: "Impatto quantificato",
      body: "6 business case con stime conservative basate su volumi, ore e costi reali. Scenario realistico: oltre \u20AC260K/anno di risparmio, ~8.400 ore liberate."
    },
    {
      icon: iconBolt, iconColor: AMB, titleColor: AMB,
      title: "Il momento giusto",
      body: "L\u2019Iperammortamento 2026 (L. 199/2025) include esplicitamente software AI interconnessi con il gestionale. Risparmio fiscale fino al 43%."
    }
  ];

  cards.forEach((card, i) => {
    const cx = startX + i * (cardW + cardGap);

    // Card background
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: cardY, w: cardW, h: cardH,
      fill: { color: BOX }, rectRadius: 0.08
    });

    // Icon
    s.addImage({
      data: card.icon,
      x: cx + 0.20, y: cardY + 0.20, w: 0.38, h: 0.38
    });

    // Card title
    s.addText(card.title, {
      x: cx + 0.20, y: cardY + 0.72, w: cardW - 0.40, h: 0.35,
      fontSize: 15, fontFace: F, color: card.titleColor, bold: true,
      valign: "top", margin: 0
    });

    // Card body
    s.addText(card.body, {
      x: cx + 0.20, y: cardY + 1.10, w: cardW - 0.40, h: 1.20,
      fontSize: 11.5, fontFace: F, color: G, valign: "top", margin: 0,
      lineSpacingMultiple: 1.20
    });
  });

  // ── BOTTOM BAR ──
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 6.40, w: 13.33, h: 0.85,
    fill: { color: BOX }
  });

  // "IN QUESTA PRESENTAZIONE" label
  s.addText("IN QUESTA PRESENTAZIONE", {
    x: 0.80, y: 6.48, w: 4.00, h: 0.28,
    fontSize: 10, fontFace: F, color: PUR, bold: true, charSpacing: 1.5,
    valign: "middle", margin: 0
  });

  // Breadcrumb
  s.addText([
    { text: "Recap Wave 1", options: { fontSize: 11, fontFace: F, color: G } },
    { text: "  \u2192  ", options: { fontSize: 11, fontFace: F, color: PUR } },
    { text: "Aree di ottimizzazione", options: { fontSize: 11, fontFace: F, color: G } },
    { text: "  \u2192  ", options: { fontSize: 11, fontFace: F, color: PUR } },
    { text: "Soluzioni Wave 2", options: { fontSize: 11, fontFace: F, color: G } },
    { text: "  \u2192  ", options: { fontSize: 11, fontFace: F, color: PUR } },
    { text: "Business case", options: { fontSize: 11, fontFace: F, color: G } },
    { text: "  \u2192  ", options: { fontSize: 11, fontFace: F, color: PUR } },
    { text: "Leva fiscale", options: { fontSize: 11, fontFace: F, color: G } },
    { text: "  \u2192  ", options: { fontSize: 11, fontFace: F, color: PUR } },
    { text: "Investimento", options: { fontSize: 11, fontFace: F, color: G } }
  ], {
    x: 0.80, y: 6.78, w: 11.73, h: 0.30,
    valign: "middle", margin: 0
  });

  // Page number
  s.addText("XX", {
    x: 12.30, y: 6.90, w: 0.70, h: 0.30,
    fontSize: 11, fontFace: F, color: "505060", align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/mnt/user-data/outputs/Intro_Wave2_Official.pptx" });
  console.log("Done");
}

main().catch(console.error);