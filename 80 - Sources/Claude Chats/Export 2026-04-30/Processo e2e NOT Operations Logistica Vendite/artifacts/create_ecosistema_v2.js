const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaUser, FaUserTie, FaWarehouse, FaStore, FaTruck, FaChartBar, FaBell, FaFileAlt, FaBrain, FaQrcode, FaBoxes, FaShieldAlt, FaUsersCog, FaSyncAlt, FaClipboardCheck } = require("react-icons/fa");

function renderIconSvg(IC, color, size = 256) {
  return ReactDOMServer.renderToStaticMarkup(React.createElement(IC, { color, size: String(size) }));
}
async function ic(IC, color) {
  const svg = renderIconSvg(IC, color);
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
  const greenLight = "ECFDF5";
  const greenBorder = "6EE7B7";
  const blue = "1565C0";
  const blueLight = "E3F2FD";
  const blueBorder = "90CAF9";
  const purple = "5B4FC4";
  const purpleLight = "EDE9FE";
  const purpleBorder = "C4B5FD";
  const amber = "B45309";
  const amberLight = "FFFBEB";
  const amberBorder = "FCD34D";
  const textDark = "1A1A1A";
  const textLight = "718096";

  // Icons
  const iDir = await ic(FaUsersCog, blue);
  const iAdmin = await ic(FaUserTie, blue);
  const iAM = await ic(FaUser, blue);
  const iMag = await ic(FaWarehouse, blue);
  const iProm = await ic(FaStore, blue);
  const iTruck = await ic(FaTruck, amber);
  const iWh = await ic(FaWarehouse, amber);
  const iStore = await ic(FaStore, amber);
  const iBrain = await ic(FaBrain, green);
  const iQr = await ic(FaQrcode, green);
  const iBoxes = await ic(FaBoxes, green);
  const iShield = await ic(FaShieldAlt, green);
  const iDash = await ic(FaChartBar, green);
  const iBell = await ic(FaBell, green);
  const iReport = await ic(FaFileAlt, green);
  const iSync = await ic(FaSyncAlt, green);
  const iClip = await ic(FaClipboardCheck, green);

  // Title
  s.addText("Ecosistema piattaforma", {
    x: 0.5, y: 0.15, w: 7, h: 0.4,
    fontSize: 24, fontFace: "Calibri", color: textDark, bold: true, margin: 0
  });
  s.addText("Un unico sistema al centro di tutta l\u2019operativit\u00E0", {
    x: 0.5, y: 0.5, w: 8, h: 0.22,
    fontSize: 12, fontFace: "Calibri", color: textLight, margin: 0
  });
  s.addText("HeyAI S.r.l.", {
    x: 7.8, y: 0.2, w: 1.8, h: 0.25,
    fontSize: 11, fontFace: "Calibri", color: "A0AEC0", align: "right", margin: 0
  });

  // ==========================================
  // CENTRAL HUB
  // ==========================================
  const hubX = 2.75, hubY = 1.65, hubW = 4.5, hubH = 2.05;

  // Glow
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: hubX - 0.05, y: hubY - 0.05, w: hubW + 0.1, h: hubH + 0.1,
    fill: { color: green, transparency: 92 }, rectRadius: 0.14
  });
  // Main
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: hubX, y: hubY, w: hubW, h: hubH,
    fill: { color: "F0FFF4" }, rectRadius: 0.12
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: hubX, y: hubY, w: hubW, h: hubH,
    line: { color: green, width: 1.5 }, rectRadius: 0.12
  });
  // Title bar
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: hubX + 1.15, y: hubY + 0.1, w: 2.2, h: 0.32,
    fill: { color: green }, rectRadius: 0.06
  });
  s.addText("PIATTAFORMA NOT", {
    x: hubX + 1.15, y: hubY + 0.1, w: 2.2, h: 0.32,
    fontSize: 10, fontFace: "Calibri", color: "FFFFFF", bold: true, align: "center", valign: "middle", charSpacing: 2, margin: 0
  });

  // 4 internal engines
  const engines = [
    { ic: iBrain, label: "AI predittiva\nordini" },
    { ic: iQr, label: "Form unico\nvendita" },
    { ic: iBoxes, label: "Tracciamento\nstock e2e" },
    { ic: iShield, label: "Cross-check\nautomatico" },
  ];
  engines.forEach((e, i) => {
    const ex = hubX + 0.18 + i * 1.06;
    const ey = hubY + 0.6;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ex, y: ey, w: 0.94, h: 1.2,
      fill: { color: "FFFFFF" }, rectRadius: 0.06
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ex, y: ey, w: 0.94, h: 1.2,
      line: { color: greenBorder, width: 0.5 }, rectRadius: 0.06
    });
    s.addImage({ data: e.ic, x: ex + 0.33, y: ey + 0.1, w: 0.28, h: 0.28 });
    s.addText(e.label, {
      x: ex + 0.04, y: ey + 0.45, w: 0.86, h: 0.65,
      fontSize: 8, fontFace: "Calibri", color: green, bold: true, align: "center", valign: "top", margin: 0
    });
  });

  // ==========================================
  // LEFT: USERS (5 roles including Direzione)
  // ==========================================
  s.addText("CHI LO USA", {
    x: 0.2, y: 1.35, w: 2.15, h: 0.18,
    fontSize: 7, fontFace: "Calibri", color: blue, charSpacing: 2, margin: 0, align: "center"
  });
  s.addText("Web app mobile-first", {
    x: 0.2, y: 1.5, w: 2.15, h: 0.14,
    fontSize: 7, fontFace: "Calibri", color: textLight, margin: 0, align: "center"
  });

  const users = [
    { ic: iDir, label: "Direzione", sub: "Visione strategica" },
    { ic: iAdmin, label: "Admin", sub: "Approva, monitora" },
    { ic: iAM, label: "Area Manager", sub: "Supervisiona" },
    { ic: iMag, label: "Magazziniere", sub: "Conferma, spedisce" },
    { ic: iProm, label: "Promoter", sub: "Vende, scansiona" },
  ];

  users.forEach((u, i) => {
    const uy = 1.72 + i * 0.44;
    const ux = 0.25;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ux, y: uy, w: 2.1, h: 0.38,
      fill: { color: blueLight }, rectRadius: 0.05
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ux, y: uy, w: 2.1, h: 0.38,
      line: { color: blueBorder, width: 0.5 }, rectRadius: 0.05
    });
    s.addImage({ data: u.ic, x: ux + 0.08, y: uy + 0.08, w: 0.2, h: 0.2 });
    s.addText(u.label, {
      x: ux + 0.34, y: uy + 0.02, w: 1.6, h: 0.18,
      fontSize: 9, fontFace: "Calibri", color: blue, bold: true, margin: 0
    });
    s.addText(u.sub, {
      x: ux + 0.34, y: uy + 0.19, w: 1.6, h: 0.14,
      fontSize: 7, fontFace: "Calibri", color: textLight, margin: 0
    });
  });

  // Arrow users → hub
  s.addShape(pres.shapes.LINE, {
    x: 2.4, y: 2.67, w: 0.3, h: 0,
    line: { color: blue, width: 1.5, headEnd: { type: "arrow" } }
  });

  // ==========================================
  // RIGHT: EXTERNAL PLATFORMS
  // ==========================================
  s.addText("PIATTAFORME ESTERNE", {
    x: 7.55, y: 1.35, w: 2.2, h: 0.18,
    fontSize: 7, fontFace: "Calibri", color: purple, charSpacing: 2, margin: 0, align: "center"
  });
  s.addText("Dati sincronizzati automaticamente", {
    x: 7.55, y: 1.5, w: 2.2, h: 0.14,
    fontSize: 7, fontFace: "Calibri", color: textLight, margin: 0, align: "center"
  });

  const platforms = [
    { label: "CRM BAT", sub: "Sharpend" },
    { label: "Pard", sub: "Profilazione" },
    { label: "Shopify", sub: "K-ippun Haru" },
  ];

  platforms.forEach((ep, i) => {
    const ey = 1.72 + i * 0.5;
    const ex = 7.6;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ex, y: ey, w: 2.0, h: 0.42,
      fill: { color: purpleLight }, rectRadius: 0.05
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ex, y: ey, w: 2.0, h: 0.42,
      line: { color: purpleBorder, width: 0.5 }, rectRadius: 0.05
    });
    s.addText(ep.label, {
      x: ex + 0.1, y: ey + 0.03, w: 1.8, h: 0.2,
      fontSize: 9, fontFace: "Calibri", color: purple, bold: true, margin: 0
    });
    s.addText(ep.sub, {
      x: ex + 0.1, y: ey + 0.22, w: 1.8, h: 0.14,
      fontSize: 7, fontFace: "Calibri", color: textLight, margin: 0
    });
  });

  // Arrow hub → platforms
  s.addShape(pres.shapes.LINE, {
    x: 7.3, y: 2.67, w: 0.25, h: 0,
    line: { color: purple, width: 1.5, headEnd: { type: "arrow" } }
  });

  // ==========================================
  // TOP: SUPPLY CHAIN
  // ==========================================
  s.addText("CATENA LOGISTICA", {
    x: 3.4, y: 0.82, w: 3.2, h: 0.18,
    fontSize: 7, fontFace: "Calibri", color: amber, charSpacing: 2, margin: 0, align: "center"
  });

  const supply = [
    { ic: iTruck, label: "Fornitore", x: 3.15 },
    { ic: iWh, label: "Magazzini\nMI + RM", x: 4.65 },
    { ic: iStore, label: "~33 Pop-up", x: 6.15 },
  ];

  supply.forEach((sn) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: sn.x, y: 1.0, w: 1.25, h: 0.5,
      fill: { color: amberLight }, rectRadius: 0.05
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: sn.x, y: 1.0, w: 1.25, h: 0.5,
      line: { color: amberBorder, width: 0.5 }, rectRadius: 0.05
    });
    s.addImage({ data: sn.ic, x: sn.x + 0.08, y: 1.1, w: 0.18, h: 0.18 });
    s.addText(sn.label, {
      x: sn.x + 0.3, y: 1.02, w: 0.88, h: 0.45,
      fontSize: 8, fontFace: "Calibri", color: amber, bold: true, valign: "middle", margin: 0
    });
  });

  // Arrows between supply
  s.addShape(pres.shapes.LINE, {
    x: 4.42, y: 1.25, w: 0.2, h: 0,
    line: { color: amberBorder, width: 1, headEnd: { type: "arrow" } }
  });
  s.addShape(pres.shapes.LINE, {
    x: 5.92, y: 1.25, w: 0.2, h: 0,
    line: { color: amberBorder, width: 1, headEnd: { type: "arrow" } }
  });

  // Arrow supply → hub
  s.addShape(pres.shapes.LINE, {
    x: 5.0, y: 1.52, w: 0, h: 0.1,
    line: { color: amber, width: 1.5, headEnd: { type: "arrow" } }
  });

  // ==========================================
  // BOTTOM: OUTPUT INTELLIGENTI (5 items now)
  // ==========================================
  s.addText("OUTPUT INTELLIGENTI", {
    x: 2.75, y: 3.88, w: 4.5, h: 0.18,
    fontSize: 7, fontFace: "Calibri", color: green, charSpacing: 2, margin: 0, align: "center"
  });

  // Arrow hub → outputs
  s.addShape(pres.shapes.LINE, {
    x: 5.0, y: 3.72, w: 0, h: 0.14,
    line: { color: green, width: 1.5, headEnd: { type: "arrow" } }
  });

  const outputs = [
    { ic: iSync, label: "Creazione ordini\nautomatica", sub: "AI genera, Admin\napprova 1 click" },
    { ic: iShield, label: "Riconciliazione\nautomatica", sub: "Cross-check triplo\ncontinuo + alert" },
    { ic: iDash, label: "Dashboard\nreal-time", sub: "KPI, performance,\nincentivi" },
    { ic: iBell, label: "Alert\npredittivi", sub: "Rottura stock,\nanomaliesup>" },
    { ic: iReport, label: "Report\nautomatici", sub: "Report BAT,\nexport Excel" },
  ];

  const outW = 1.72;
  const outGap = 0.1;
  const outStartX = 0.5;
  const outY = 4.1;

  outputs.forEach((o, i) => {
    const ox = outStartX + i * (outW + outGap);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ox, y: outY, w: outW, h: 0.9,
      fill: { color: greenLight }, rectRadius: 0.06
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: ox, y: outY, w: outW, h: 0.9,
      line: { color: greenBorder, width: 0.5 }, rectRadius: 0.06
    });
    s.addImage({ data: o.ic, x: ox + 0.08, y: outY + 0.1, w: 0.18, h: 0.18 });
    s.addText(o.label, {
      x: ox + 0.32, y: outY + 0.05, w: outW - 0.4, h: 0.34,
      fontSize: 9, fontFace: "Calibri", color: green, bold: true, margin: 0, valign: "middle"
    });
    // Fix typo in anomalie
    const subText = o.sub.replace("anomaliesup>", "anomalie");
    s.addText(subText, {
      x: ox + 0.32, y: outY + 0.42, w: outW - 0.4, h: 0.4,
      fontSize: 7, fontFace: "Calibri", color: textLight, margin: 0
    });
  });

  // Footer
  s.addText("Architettura multi-tenant: predisposta per supportare futuri brand e clienti senza costi aggiuntivi di struttura", {
    x: 0.5, y: 5.15, w: 9, h: 0.22,
    fontSize: 9, fontFace: "Calibri", color: green, bold: true, margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/NOT_Ecosistema.pptx" });
  console.log("Done");
}

main().catch(console.error);