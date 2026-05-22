const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaUsers, FaFileAlt, FaChartBar, FaCogs } = require("react-icons/fa");

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
  pres.title = "Metodologia Wave 2";

  let slide = pres.addSlide();
  slide.background = { color: "0D0D14" };

  // Subtle purple gradient accent bar at top
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: "7B5EA7" }
  });

  // Title
  slide.addText("La Metodologia", {
    x: 0.6, y: 0.25, w: 8.8, h: 0.65,
    fontSize: 36, fontFace: "Arial Black", color: "FFFFFF",
    margin: 0
  });

  // Subtitle
  slide.addText(
    "Ogni soluzione nasce dall'analisi diretta dei processi operativi. Abbiamo intervistato i responsabili di ogni reparto, analizzato le procedure ufficiali e costruito business case su dati reali.",
    {
      x: 0.6, y: 0.95, w: 8.8, h: 0.55,
      fontSize: 13, fontFace: "Calibri", color: "A0A0B8",
      margin: 0
    }
  );

  // --- 4 Phase cards ---
  const icons = [
    await iconToBase64Png(FaUsers, "#B39DDB"),
    await iconToBase64Png(FaFileAlt, "#B39DDB"),
    await iconToBase64Png(FaCogs, "#B39DDB"),
    await iconToBase64Png(FaChartBar, "#B39DDB")
  ];

  const phases = [
    {
      num: "01",
      title: "Discovery",
      desc: "Interviste con i capi area e gli operativi di 7 reparti per comprendere il lavoro quotidiano reale",
      icon: icons[0]
    },
    {
      num: "02",
      title: "Analisi Processi",
      desc: "Studio delle 7 procedure operative ufficiali per verificare coerenza e identificare i gap",
      icon: icons[1]
    },
    {
      num: "03",
      title: "Design Soluzioni",
      desc: "Co-progettazione con il cliente per validare fattibilità tecnica e rispetto dei vincoli operativi",
      icon: icons[2]
    },
    {
      num: "04",
      title: "Validazione Economica",
      desc: "Business case quantificati su dati reali: volumi, ore, costi per profilo — stime conservative",
      icon: icons[3]
    }
  ];

  const cardW = 2.1;
  const cardH = 1.9;
  const startX = 0.6;
  const cardY = 1.75;
  const gap = 0.2;

  for (let i = 0; i < 4; i++) {
    const x = startX + i * (cardW + gap);
    
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: cardY, w: cardW, h: cardH,
      fill: { color: "1A1A2E" },
      rectRadius: 0.1
    });

    // Phase number
    slide.addText(phases[i].num, {
      x: x + 0.15, y: cardY + 0.12, w: 0.45, h: 0.35,
      fontSize: 18, fontFace: "Arial Black", color: "7B5EA7",
      margin: 0
    });

    // Icon
    slide.addImage({
      data: phases[i].icon,
      x: x + cardW - 0.5, y: cardY + 0.12, w: 0.3, h: 0.3
    });

    // Title
    slide.addText(phases[i].title, {
      x: x + 0.15, y: cardY + 0.55, w: cardW - 0.3, h: 0.3,
      fontSize: 14, fontFace: "Arial", color: "FFFFFF", bold: true,
      margin: 0
    });

    // Description
    slide.addText(phases[i].desc, {
      x: x + 0.15, y: cardY + 0.9, w: cardW - 0.3, h: 0.85,
      fontSize: 10.5, fontFace: "Calibri", color: "9090A8",
      margin: 0
    });
  }

  // --- Connecting arrows between cards ---
  for (let i = 0; i < 3; i++) {
    const arrowX = startX + (i + 1) * cardW + i * gap + gap * 0.3;
    slide.addText("›", {
      x: arrowX, y: cardY + cardH / 2 - 0.2, w: gap * 0.5, h: 0.4,
      fontSize: 20, fontFace: "Arial", color: "7B5EA7",
      align: "center", valign: "middle", margin: 0
    });
  }

  // --- Reparti interviewed section ---
  slide.addText("Reparti coinvolti", {
    x: 0.6, y: 3.9, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Arial", color: "7B5EA7", bold: true,
    margin: 0
  });

  const reparti = [
    ["Vendite", "Zaghi"],
    ["MICE / Operativi", "Cavecchi"],
    ["Project Management", "Stefani"],
    ["Comunicazione", "Romano, Annibali, Del Nibletto"],
    ["Pianificazione", "Osmetti"],
    ["Controllo Gestione", "Calajò"],
    ["Compliance e Qualità", "Merli"]
  ];

  // Two columns of reparti
  for (let i = 0; i < reparti.length; i++) {
    const col = i < 4 ? 0 : 1;
    const row = i < 4 ? i : i - 4;
    const rx = 0.6 + col * 4.6;
    const ry = 4.25 + row * 0.3;

    slide.addShape(pres.shapes.OVAL, {
      x: rx, y: ry + 0.05, w: 0.08, h: 0.08,
      fill: { color: "7B5EA7" }
    });

    slide.addText(reparti[i][0], {
      x: rx + 0.2, y: ry, w: 1.8, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: "FFFFFF", bold: true,
      margin: 0
    });

    slide.addText(reparti[i][1], {
      x: rx + 2.0, y: ry, w: 2.4, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: "9090A8",
      margin: 0
    });
  }

  // --- KPI bar at bottom ---
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.15, w: 10, h: 0.475,
    fill: { color: "1A1A2E" }
  });

  const kpis = [
    { num: "7", label: "reparti intervistati" },
    { num: "12+", label: "sessioni di discovery" },
    { num: "7", label: "procedure analizzate" },
    { num: "6", label: "business case" },
    { num: "8", label: "soluzioni progettate" }
  ];

  for (let i = 0; i < kpis.length; i++) {
    const kx = 0.4 + i * 1.92;
    
    slide.addText(kpis[i].num, {
      x: kx, y: 5.18, w: 0.5, h: 0.38,
      fontSize: 18, fontFace: "Arial Black", color: "B39DDB",
      valign: "middle", margin: 0
    });

    slide.addText(kpis[i].label, {
      x: kx + 0.5, y: 5.18, w: 1.4, h: 0.38,
      fontSize: 10, fontFace: "Calibri", color: "9090A8",
      valign: "middle", margin: 0
    });
  }

  // Page number
  slide.addText("XX", {
    x: 9.2, y: 5.2, w: 0.6, h: 0.35,
    fontSize: 10, fontFace: "Calibri", color: "505060",
    align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Metodologia_Wave2.pptx" });
  console.log("Done");
}

createSlide().catch(console.error);