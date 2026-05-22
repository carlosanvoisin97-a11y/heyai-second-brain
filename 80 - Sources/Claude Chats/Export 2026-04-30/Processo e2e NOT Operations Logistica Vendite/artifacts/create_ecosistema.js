const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaUser, FaUserTie, FaWarehouse, FaStore, FaTruck, FaChartBar, FaBell, FaFileAlt, FaBrain, FaQrcode, FaBoxes, FaShieldAlt } = require("react-icons/fa");

function renderIconSvg(IC, color, size = 256) {
  return ReactDOMServer.renderToStaticMarkup(React.createElement(IC, { color, size: String(size) }));
}
async function icon(IC, color, size = 256) {
  const svg = renderIconSvg(IC, color, size);
  return "image/png;base64," + (await sharp(Buffer.from(svg)).png().toBuffer()).toString("base64");
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI S.r.l.";
  pres.title = "NOT - Ecosistema Piattaforma";

  const s = pres.addSlide();
  s.background = { color: "FFFFFF" };

  // Colors
  const green = "0D7F5F";
  const greenLight = "E6FFFA";
  const greenBorder = "81E6D9";
  const blue = "1565C0";
  const blueLight = "E3F2FD";
  const blueBorder = "90CAF9";
  const purple = "5B4FC4";
  const purpleLight = "EDE9FE";
  const purpleBorder = "C4B5FD";
  const amber = "B45309";
  const amberLight = "FFFBEB";
  const amberBorder = "FCD34D";
  const gray = "4A5568";
  const grayLight = "F7FAFC";
  const grayBorder = "CBD5E1";
  const textDark = "1A1A1A";
  const textMid = "4A5568";
  const textLight = "718096";

  // Title
  s.addText("Ecosistema piattaforma", {
    x: 0.6, y: 0.2, w: 7, h: 0.45,
    fontSize: 24, fontFace: "Calibri", color: textDark, bold: true, margin: 0
  });
  s.addText("Un unico sistema al centro di tutta l\u2019operativit\u00E0", {
    x: 0.6, y: 0.6, w: 8, h: 0.25,
    fontSize: 12, fontFace: "Calibri", color: textLight, margin: 0
  });
  s.addText("HeyAI S.r.l.", {
    x: 7.8, y: 0.25, w: 1.8, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: "A0AEC0", align: "right", margin: 0
  });

  // ==========================================
  // CENTRAL PLATFORM HUB
  // ==========================================
  const hubX = 2.9, hubY = 1.85, hubW = 4.2, hubH = 2.0;

  // Outer glow effect
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: hubX - 0.06, y: hubY - 0.06, w: hubW + 0.12, h: hubH + 0.12,
    fill: { color: green, transparency: 90 }, rectRadius: 0.16
  });
  // Main hub
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: hubX, y: hubY, w: hubW, h: hubH,
    fill: { color: "F0FFF4" }, rectRadius: 0.12
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: hubX, y: hubY, w: hubW, h: hubH,
    line: { color: green, width: 1.5 }, rectRadius: 0.12
  });
  // Hub title bar
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: hubX + 0.8, y: hubY + 0.12, w: 2.6, h: 0.36,
    fill: { color: green }, rectRadius: 0.06
  });
  s.addText("PIATTAFORMA NOT", {
    x: hubX + 0.8, y: hubY + 0.12, w: 2.6, h: 0.36,
    fontSize: 11, fontFace: "Calibri", color: "FFFFFF", bold: true, align: "center", valign: "middle", charSpacing: 2, margin: 0
  });

  // 4 internal engines
  const iconBrain = await icon(FaBrain, green);
  const iconQr = await icon(FaQrcode, green);
  const iconBoxes = await icon(FaBoxes, green);
  const iconShield = await icon(FaShieldAlt, green);

  const engines = [
    { ic: iconBrain, label: "AI predittiva\nordini" },
    { ic: iconQr, label: "Form unico\nvendita" },
    { ic: iconBoxes, label: "Tracciamento\nstock e2e" },
    { ic: iconShield, label: "Cross-check\nautomatico" },
  ];

  engines.forEach((e, i) => {
    const col = i % 4;
    const ex = hubX + 0.2 + col * 1.0;
    const ey = hubY + 0.7;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ex, y: ey, w: 0.88, h: 1.05,
      fill: { color: "FFFFFF" }, rectRadius: 0.06
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ex, y: ey, w: 0.88, h: 1.05,
      line: { color: greenBorder, width: 0.5 }, rectRadius: 0.06
    });
    s.addImage({ data: e.ic, x: ex + 0.3, y: ey + 0.1, w: 0.28, h: 0.28 });
    s.addText(e.label, {
      x: ex + 0.04, y: ey + 0.45, w: 0.8, h: 0.52,
      fontSize: 8, fontFace: "Calibri", color: green, bold: true, align: "center", valign: "top", margin: 0
    });
  });

  // ==========================================
  // LEFT: USERS
  // ==========================================
  const iconAdmin = await icon(FaUserTie, blue);
  const iconAM = await icon(FaUserTie, blue);
  const iconMag = await icon(FaWarehouse, blue);
  const iconProm = await icon(FaUser, blue);

  const users = [
    { ic: iconAdmin, label: "Admin", sub: "Approva, monitora" },
    { ic: iconAM, label: "Area Manager", sub: "Supervisiona" },
    { ic: iconMag, label: "Magazziniere", sub: "Conferma, spedisce" },
    { ic: iconProm, label: "Promoter", sub: "Vende, scansiona" },
  ];

  s.addText("CHI LO USA", {
    x: 0.25, y: 1.55, w: 2.2, h: 0.2,
    fontSize: 8, fontFace: "Calibri", color: blue, charSpacing: 2, margin: 0, align: "center"
  });

  users.forEach((u, i) => {
    const uy = 1.85 + i * 0.52;
    const ux = 0.35;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ux, y: uy, w: 2.1, h: 0.44,
      fill: { color: blueLight }, rectRadius: 0.06
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ux, y: uy, w: 2.1, h: 0.44,
      line: { color: blueBorder, width: 0.5 }, rectRadius: 0.06
    });
    s.addImage({ data: u.ic, x: ux + 0.1, y: uy + 0.1, w: 0.22, h: 0.22 });
    s.addText(u.label, {
      x: ux + 0.4, y: uy + 0.02, w: 1.5, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: blue, bold: true, margin: 0
    });
    s.addText(u.sub, {
      x: ux + 0.4, y: uy + 0.22, w: 1.5, h: 0.18,
      fontSize: 8, fontFace: "Calibri", color: textLight, margin: 0
    });
  });

  // Arrow users → hub
  s.addShape(pres.shapes.LINE, {
    x: 2.5, y: 2.85, w: 0.35, h: 0,
    line: { color: blue, width: 1.5, headEnd: { type: "arrow" } }
  });
  s.addText("Accesso web\nmobile-first", {
    x: 2.42, y: 2.4, w: 0.5, h: 0.4,
    fontSize: 7, fontFace: "Calibri", color: blue, align: "center", margin: 0, rotate: 0
  });

  // ==========================================
  // RIGHT: EXTERNAL PLATFORMS
  // ==========================================
  s.addText("PIATTAFORME ESTERNE", {
    x: 7.4, y: 1.55, w: 2.4, h: 0.2,
    fontSize: 8, fontFace: "Calibri", color: purple, charSpacing: 2, margin: 0, align: "center"
  });

  const extPlatforms = [
    { label: "CRM BAT", sub: "Sharpend", color: purple },
    { label: "Pard", sub: "Profilazione", color: purple },
    { label: "Shopify", sub: "K-ippun Haru", color: purple },
  ];

  extPlatforms.forEach((ep, i) => {
    const ey = 1.85 + i * 0.58;
    const ex = 7.5;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ex, y: ey, w: 2.05, h: 0.48,
      fill: { color: purpleLight }, rectRadius: 0.06
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ex, y: ey, w: 2.05, h: 0.48,
      line: { color: purpleBorder, width: 0.5 }, rectRadius: 0.06
    });
    s.addText(ep.label, {
      x: ex + 0.12, y: ey + 0.04, w: 1.8, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: purple, bold: true, margin: 0
    });
    s.addText(ep.sub, {
      x: ex + 0.12, y: ey + 0.24, w: 1.8, h: 0.18,
      fontSize: 8, fontFace: "Calibri", color: textLight, margin: 0
    });
  });

  // Arrow hub → platforms
  s.addShape(pres.shapes.LINE, {
    x: 7.15, y: 2.5, w: 0.3, h: 0,
    line: { color: purple, width: 1.5, headEnd: { type: "arrow" } }
  });
  s.addText("Dati sincronizzati\nautomaticamente", {
    x: 7.05, y: 2.05, w: 0.6, h: 0.4,
    fontSize: 7, fontFace: "Calibri", color: purple, align: "center", margin: 0
  });

  // ==========================================
  // TOP: SUPPLY CHAIN
  // ==========================================
  s.addText("CATENA LOGISTICA", {
    x: 3.5, y: 0.95, w: 3, h: 0.2,
    fontSize: 8, fontFace: "Calibri", color: amber, charSpacing: 2, margin: 0, align: "center"
  });

  const iconTruck = await icon(FaTruck, amber);
  const iconWh = await icon(FaWarehouse, amber);
  const iconStore = await icon(FaStore, amber);

  const supplyNodes = [
    { ic: iconTruck, label: "Fornitore", x: 3.15 },
    { ic: iconWh, label: "Magazzini MI+RM", x: 4.55 },
    { ic: iconStore, label: "~33 Pop-up", x: 5.95 },
  ];

  supplyNodes.forEach((sn) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: sn.x, y: 1.15, w: 1.2, h: 0.55,
      fill: { color: amberLight }, rectRadius: 0.06
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: sn.x, y: 1.15, w: 1.2, h: 0.55,
      line: { color: amberBorder, width: 0.5 }, rectRadius: 0.06
    });
    s.addImage({ data: sn.ic, x: sn.x + 0.08, y: 1.25, w: 0.2, h: 0.2 });
    s.addText(sn.label, {
      x: sn.x + 0.32, y: 1.2, w: 0.82, h: 0.45,
      fontSize: 9, fontFace: "Calibri", color: amber, bold: true, valign: "middle", margin: 0
    });
  });

  // Arrows between supply nodes
  s.addShape(pres.shapes.LINE, {
    x: 4.38, y: 1.42, w: 0.14, h: 0,
    line: { color: amberBorder, width: 1, headEnd: { type: "arrow" } }
  });
  s.addShape(pres.shapes.LINE, {
    x: 5.78, y: 1.42, w: 0.14, h: 0,
    line: { color: amberBorder, width: 1, headEnd: { type: "arrow" } }
  });

  // Vertical arrow supply → hub
  s.addShape(pres.shapes.LINE, {
    x: 5.0, y: 1.72, w: 0, h: 0.1,
    line: { color: amber, width: 1.5, headEnd: { type: "arrow" } }
  });
  s.addText("Ordini, giacenze,\nconferme", {
    x: 5.15, y: 1.68, w: 0.9, h: 0.28,
    fontSize: 7, fontFace: "Calibri", color: amber, margin: 0
  });

  // ==========================================
  // BOTTOM: OUTPUTS
  // ==========================================
  s.addText("OUTPUT INTELLIGENTI", {
    x: 3.5, y: 4.05, w: 3, h: 0.2,
    fontSize: 8, fontFace: "Calibri", color: green, charSpacing: 2, margin: 0, align: "center"
  });

  const iconDash = await icon(FaChartBar, green);
  const iconAlert = await icon(FaBell, green);
  const iconReport = await icon(FaFileAlt, green);

  const outputs = [
    { ic: iconDash, label: "Dashboard real-time", sub: "KPI, performance, incentivi" },
    { ic: iconAlert, label: "Alert predittivi", sub: "Rottura stock, anomalie" },
    { ic: iconReport, label: "Report automatici", sub: "Report BAT, export Excel" },
  ];

  outputs.forEach((o, i) => {
    const ox = 2.9 + i * 1.5;
    const oy = 4.3;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ox, y: oy, w: 1.38, h: 0.75,
      fill: { color: greenLight }, rectRadius: 0.06
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ox, y: oy, w: 1.38, h: 0.75,
      line: { color: greenBorder, width: 0.5 }, rectRadius: 0.06
    });
    s.addImage({ data: o.ic, x: ox + 0.08, y: oy + 0.1, w: 0.2, h: 0.2 });
    s.addText(o.label, {
      x: ox + 0.34, y: oy + 0.06, w: 0.96, h: 0.22,
      fontSize: 9, fontFace: "Calibri", color: green, bold: true, margin: 0
    });
    s.addText(o.sub, {
      x: ox + 0.34, y: oy + 0.3, w: 0.96, h: 0.35,
      fontSize: 8, fontFace: "Calibri", color: textLight, margin: 0
    });
  });

  // Arrow hub → outputs
  s.addShape(pres.shapes.LINE, {
    x: 5.0, y: 3.88, w: 0, h: 0.14,
    line: { color: green, width: 1.5, headEnd: { type: "arrow" } }
  });

  // Footer
  s.addText("Architettura multi-tenant: predisposta per supportare futuri brand e clienti senza costi aggiuntivi di struttura", {
    x: 0.6, y: 5.15, w: 8.8, h: 0.25,
    fontSize: 9, fontFace: "Calibri", color: green, bold: true, margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/NOT_Ecosistema.pptx" });
  console.log("PPTX created");
}

main().catch(console.error);