const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
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

async function createSlide() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Intro Wave 2";

  let slide = pres.addSlide();
  slide.background = { color: "0D0D14" };

  // Purple accent bar top
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: "7B5EA7" }
  });

  // Title
  slide.addText("Da Partner Tecnologico a Ecosistema Operativo", {
    x: 0.6, y: 0.25, w: 8.8, h: 0.7,
    fontSize: 32, fontFace: "Arial Black", color: "FFFFFF", margin: 0
  });

  // Subtitle
  slide.addText(
    "Il percorso che abbiamo costruito insieme nel 2025 e la proposta per trasformare i processi operativi Noloop nel 2026.",
    {
      x: 0.6, y: 0.95, w: 8.8, h: 0.35,
      fontSize: 13, fontFace: "Calibri", color: "7B5EA7", italic: true, margin: 0
    }
  );

  // Narrative block
  slide.addText(
    "Nel 2025 abbiamo introdotto le prime soluzioni AI nell'operatività Noloop: strumenti per la ricerca location, la gestione dei lead, la trascrizione delle riunioni e la gestione degli eventi. Queste soluzioni sono oggi in produzione e utilizzate quotidianamente dai reparti. Partendo da questa base, abbiamo condotto un'analisi approfondita dei processi operativi — intervistando 7 reparti e analizzando le procedure aziendali — per identificare dove intervenire con il massimo impatto. Quello che segue è il risultato: un ecosistema di 8 soluzioni interconnesse, ciascuna con un business case costruito sui dati reali di Noloop.",
    {
      x: 0.6, y: 1.45, w: 8.8, h: 0.85,
      fontSize: 11, fontFace: "Calibri", color: "A0A0B8", margin: 0
    }
  );

  // Thin separator line
  slide.addShape(pres.shapes.LINE, {
    x: 0.6, y: 2.45, w: 8.8, h: 0,
    line: { color: "2A2A3E", width: 1 }
  });

  // === 4 PILLAR CARDS ===
  const icons = [
    await iconToBase64Png(FaCheckCircle, "#4CAF50"),
    await iconToBase64Png(FaSearch, "#B39DDB"),
    await iconToBase64Png(FaChartLine, "#4CAF50"),
    await iconToBase64Png(FaBolt, "#FFB74D")
  ];

  const pillars = [
    {
      title: "Già validato",
      desc: "Le soluzioni Wave 1 sono in produzione con feedback positivo da tutti i reparti. Non partiamo da zero: estendiamo un ecosistema che funziona.",
      titleColor: "4CAF50",
      icon: icons[0]
    },
    {
      title: "Costruito dal basso",
      desc: "12+ sessioni di discovery con i responsabili di ogni area, analisi delle 7 procedure operative ufficiali. Ogni soluzione risponde a un problema reale.",
      titleColor: "B39DDB",
      icon: icons[1]
    },
    {
      title: "Impatto quantificato",
      desc: "6 business case con stime conservative basate su volumi, ore e costi reali. Scenario realistico: oltre €260K/anno di risparmio, ~8.400 ore liberate.",
      titleColor: "4CAF50",
      icon: icons[2]
    },
    {
      title: "Il momento giusto",
      desc: "L'Iperammortamento 2026 (L. 199/2025) include esplicitamente software AI interconnessi con il gestionale. Risparmio fiscale fino al 43%.",
      titleColor: "FFB74D",
      icon: icons[3]
    }
  ];

  const cardW = 2.05;
  const cardH = 1.85;
  const startX = 0.6;
  const cardY = 2.65;
  const gap = 0.2;

  for (let i = 0; i < 4; i++) {
    const x = startX + i * (cardW + gap);

    // Card bg
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: "1A1A2E" },
      rectRadius: 0.08
    });

    // Icon
    slide.addImage({
      data: pillars[i].icon,
      x: x + 0.15, y: cardY + 0.15, w: 0.28, h: 0.28
    });

    // Title
    slide.addText(pillars[i].title, {
      x: x + 0.15, y: cardY + 0.5, w: cardW - 0.3, h: 0.28,
      fontSize: 13, fontFace: "Arial", color: pillars[i].titleColor, bold: true, margin: 0
    });

    // Description
    slide.addText(pillars[i].desc, {
      x: x + 0.15, y: cardY + 0.82, w: cardW - 0.3, h: 0.9,
      fontSize: 9.5, fontFace: "Calibri", color: "9090A8", margin: 0
    });
  }

  // === FOOTER - Navigation map ===
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.95, w: 10, h: 0.675,
    fill: { color: "1A1A2E" }
  });

  slide.addText("IN QUESTA PRESENTAZIONE", {
    x: 0.6, y: 5.0, w: 3, h: 0.22,
    fontSize: 8.5, fontFace: "Arial", color: "7B5EA7", bold: true, margin: 0
  });

  const steps = [
    "Recap Wave 1",
    "Aree di ottimizzazione",
    "Soluzioni Wave 2",
    "Business case",
    "Leva fiscale",
    "Investimento"
  ];

  const stepText = steps.map((s, i) => {
    const arr = [
      { text: s, options: { color: "C8C8D8", fontSize: 9, fontFace: "Calibri" } }
    ];
    if (i < steps.length - 1) {
      arr.push({ text: "  →  ", options: { color: "7B5EA7", fontSize: 9, fontFace: "Calibri" } });
    }
    return arr;
  }).flat();

  slide.addText(stepText, {
    x: 0.6, y: 5.22, w: 8.8, h: 0.3,
    margin: 0
  });

  // Page number
  slide.addText("XX", {
    x: 9.2, y: 5.25, w: 0.5, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: "505060", align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Intro_Wave2.pptx" });
  console.log("Done");
}

createSlide().catch(console.error);