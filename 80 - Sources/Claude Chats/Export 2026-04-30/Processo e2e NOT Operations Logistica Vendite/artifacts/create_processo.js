const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaExclamationTriangle, FaFileExcel, FaWhatsapp, FaMobileAlt, FaRobot, FaBrain, FaCheckCircle, FaCamera, FaChartLine, FaBell } = require("react-icons/fa");

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
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI S.r.l.";
  pres.title = "NOT - Processo AS-IS / TO-BE";

  // =============================================
  // SLIDE 1: AS-IS
  // =============================================
  const s1 = pres.addSlide();
  s1.background = { color: "FFFFFF" };

  // Title
  s1.addText("Cosa succede oggi", {
    x: 0.6, y: 0.25, w: 7, h: 0.5,
    fontSize: 24, fontFace: "Calibri", color: "1A1A1A", bold: true, margin: 0
  });
  s1.addText("Un processo interamente manuale, frammentato su strumenti che non comunicano tra loro", {
    x: 0.6, y: 0.7, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: "718096", margin: 0
  });
  s1.addText("HeyAI S.r.l.", {
    x: 7.8, y: 0.3, w: 1.8, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: "A0AEC0", align: "right", margin: 0
  });

  // Main flow boxes - 5 steps
  const flowY = 1.3;
  const boxH = 0.7;
  const boxW = 1.65;
  const flowGap = 0.18;
  const startX = 0.5;

  const asIsSteps = [
    { title: "Fornitore (BAT)", sub: "Spedisce a 2 magazzini", fill: "F7FAFC", border: "CBD5E1", textColor: "2D3748" },
    { title: "Magazzini MI + RM", sub: "Smistano verso i pop-up", fill: "F7FAFC", border: "CBD5E1", textColor: "2D3748" },
    { title: "~33 Pop-up", sub: "Ricevono e vendono", fill: "F7FAFC", border: "CBD5E1", textColor: "2D3748" },
    { title: "Vendita", sub: "3 registrazioni manuali", fill: "FFF5F5", border: "FEB2B2", textColor: "9B2C2C" },
    { title: "Admin", sub: "Riconcilia e reporta", fill: "FFF5F5", border: "FEB2B2", textColor: "9B2C2C" },
  ];

  asIsSteps.forEach((step, i) => {
    const bx = startX + i * (boxW + flowGap);
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: flowY, w: boxW, h: boxH,
      fill: { color: step.fill }, rectRadius: 0.06
    });
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: flowY, w: boxW, h: boxH,
      line: { color: step.border, width: 0.75 }, rectRadius: 0.06
    });
    s1.addText(step.title, {
      x: bx + 0.08, y: flowY + 0.1, w: boxW - 0.16, h: 0.28,
      fontSize: 11, fontFace: "Calibri", color: step.textColor, bold: true, margin: 0
    });
    s1.addText(step.sub, {
      x: bx + 0.08, y: flowY + 0.38, w: boxW - 0.16, h: 0.22,
      fontSize: 9, fontFace: "Calibri", color: "718096", margin: 0
    });
    // Arrow between boxes
    if (i < asIsSteps.length - 1) {
      const arrowX = bx + boxW + 0.02;
      s1.addShape(pres.shapes.LINE, {
        x: arrowX, y: flowY + boxH / 2, w: flowGap - 0.04, h: 0,
        line: { color: "CBD5E1", width: 1.5, dashType: "dash", headEnd: { type: "arrow" } }
      });
    }
  });

  // Tools row - what they use at each step (messy, scattered)
  const toolY = 2.25;
  const toolH = 1.6;

  // Background strip for tools area
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: toolY - 0.1, w: 9.4, h: toolH + 0.2,
    fill: { color: "FDF2F2" }
  });

  s1.addText("STRUMENTI UTILIZZATI", {
    x: 0.5, y: toolY - 0.05, w: 3, h: 0.22,
    fontSize: 8, fontFace: "Calibri", color: "E53E3E", charSpacing: 2, margin: 0
  });

  // Tool items under each step
  const iconExcel = await iconToBase64Png(FaFileExcel, "#2F855A");
  const iconWhatsapp = await iconToBase64Png(FaWhatsapp, "#38A169");
  const iconMobile = await iconToBase64Png(FaMobileAlt, "#718096");
  const iconWarn = await iconToBase64Png(FaExclamationTriangle, "#DD6B20");

  const toolSets = [
    { items: ["Ordine calcolato\nmanualmente", "Nessun modello\nprevisionale"] },
    { items: ["Google Sheet\nper giacenze", "Ordini via\nmessaggio WhatsApp"] },
    { items: ["Conteggio manuale\n1-2x a settimana", "File Excel per\nprodotto e colore"] },
    { items: ["App NOT", "CRM BAT (Sharpend)", "Piattaforma Pard", "~10 min per vendita"] },
    { items: ["Riconcilia 3 export\nExcel a mano", "2 Data Analyst\na tempo pieno"] },
  ];

  const toolIcons = [
    [iconWarn, iconWarn],
    [iconExcel, iconWhatsapp],
    [iconExcel, iconExcel],
    [iconMobile, iconMobile, iconMobile, iconWarn],
    [iconExcel, iconWarn],
  ];

  toolSets.forEach((ts, i) => {
    const bx = startX + i * (boxW + flowGap);
    ts.items.forEach((item, j) => {
      const iy = toolY + 0.22 + j * 0.35;
      // Icon
      if (toolIcons[i][j]) {
        s1.addImage({ data: toolIcons[i][j], x: bx + 0.05, y: iy + 0.02, w: 0.16, h: 0.16 });
      }
      s1.addText(item, {
        x: bx + 0.26, y: iy, w: boxW - 0.34, h: 0.32,
        fontSize: 8, fontFace: "Calibri", color: "4A5568", margin: 0, valign: "middle"
      });
    });
  });

  // Pain callouts at bottom
  const callY = 4.15;
  const callouts = [
    { text: "15% del turno perso in data entry", color: "C53030", bg: "FFF5F5", border: "FEB2B2" },
    { text: "2 FTE a tempo pieno sulla riconciliazione", color: "C53030", bg: "FFF5F5", border: "FEB2B2" },
    { text: "Vendite spesso non registrate su tutte e 3 le piattaforme", color: "C53030", bg: "FFF5F5", border: "FEB2B2" },
    { text: "Nessuna visibilit\u00E0 real-time sullo stock", color: "C53030", bg: "FFF5F5", border: "FEB2B2" },
  ];

  callouts.forEach((c, i) => {
    const cw = 2.13;
    const cx = 0.5 + i * (cw + 0.1);
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: callY, w: cw, h: 0.42,
      fill: { color: c.bg }, rectRadius: 0.04
    });
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: callY, w: cw, h: 0.42,
      line: { color: c.border, width: 0.5 }, rectRadius: 0.04
    });
    // Left accent bar
    s1.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: callY + 0.04, w: 0.04, h: 0.34,
      fill: { color: "E53E3E" }
    });
    s1.addText(c.text, {
      x: cx + 0.12, y: callY, w: cw - 0.2, h: 0.42,
      fontSize: 9, fontFace: "Calibri", color: c.color, bold: true, valign: "middle", margin: 0
    });
  });

  // Footer
  s1.addText("Dati emersi dalle sessioni di lavoro con il team operativo NOT (dic. 2025 \u2014 feb. 2026)", {
    x: 0.6, y: 5.15, w: 8.8, h: 0.25,
    fontSize: 8, fontFace: "Calibri", color: "A0AEC0", margin: 0
  });

  // =============================================
  // SLIDE 2: TO-BE
  // =============================================
  const s2 = pres.addSlide();
  s2.background = { color: "FFFFFF" };

  // Title
  s2.addText("Cosa cambia con la piattaforma", {
    x: 0.6, y: 0.25, w: 7, h: 0.5,
    fontSize: 24, fontFace: "Calibri", color: "1A1A1A", bold: true, margin: 0
  });
  s2.addText("Un unico sistema integrato che orchestra ogni passaggio, dall\u2019ordine alla dashboard", {
    x: 0.6, y: 0.7, w: 8.5, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: "718096", margin: 0
  });
  s2.addText("HeyAI S.r.l.", {
    x: 7.8, y: 0.3, w: 1.8, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: "A0AEC0", align: "right", margin: 0
  });

  // Central platform bar
  const platY = 1.2;
  const platH = 0.4;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: platY, w: 9.0, h: platH,
    fill: { color: "0D7F5F" }, rectRadius: 0.08
  });
  s2.addText("PIATTAFORMA NOT", {
    x: 0.5, y: platY, w: 9.0, h: platH,
    fontSize: 13, fontFace: "Calibri", color: "FFFFFF", bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0
  });

  // Flow boxes below platform
  const toBeY = 1.85;
  const toBeH = 0.7;

  const toBeSteps = [
    { title: "AI predittiva", sub: "Genera proposte d\u2019ordine", fill: "E6FFFA", border: "81E6D9", textColor: "065F46" },
    { title: "Admin approva", sub: "1 click \u2192 task magazziniere", fill: "E6FFFA", border: "81E6D9", textColor: "065F46" },
    { title: "Magazzino", sub: "Conferma, giacenze auto", fill: "E6FFFA", border: "81E6D9", textColor: "065F46" },
    { title: "Pop-up", sub: "Scansione, stock aggiornato", fill: "E6FFFA", border: "81E6D9", textColor: "065F46" },
    { title: "Vendita", sub: "1 form unico, 3 min", fill: "F0FFF4", border: "68D391", textColor: "22543D" },
  ];

  toBeSteps.forEach((step, i) => {
    const bx = startX + i * (boxW + flowGap);
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: toBeY, w: boxW, h: toBeH,
      fill: { color: step.fill }, rectRadius: 0.06
    });
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: toBeY, w: boxW, h: toBeH,
      line: { color: step.border, width: 0.75 }, rectRadius: 0.06
    });
    s2.addText(step.title, {
      x: bx + 0.08, y: toBeY + 0.1, w: boxW - 0.16, h: 0.28,
      fontSize: 11, fontFace: "Calibri", color: step.textColor, bold: true, margin: 0
    });
    s2.addText(step.sub, {
      x: bx + 0.08, y: toBeY + 0.38, w: boxW - 0.16, h: 0.22,
      fontSize: 9, fontFace: "Calibri", color: "4A5568", margin: 0
    });

    // Vertical connector to platform bar
    s2.addShape(pres.shapes.LINE, {
      x: bx + boxW / 2, y: platY + platH, w: 0, h: toBeY - platY - platH,
      line: { color: "38B2AC", width: 1 }
    });

    // Arrow between boxes
    if (i < toBeSteps.length - 1) {
      const arrowX = bx + boxW + 0.02;
      s2.addShape(pres.shapes.LINE, {
        x: arrowX, y: toBeY + toBeH / 2, w: flowGap - 0.04, h: 0,
        line: { color: "38B2AC", width: 1.5, headEnd: { type: "arrow" } }
      });
    }
  });

  // AI features strip
  const featY = 2.8;
  const featH = 1.55;
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: featY - 0.1, w: 9.4, h: featH + 0.2,
    fill: { color: "F0FFF4" }
  });
  s2.addText("FUNZIONALIT\u00C0 INTELLIGENTI", {
    x: 0.5, y: featY - 0.05, w: 4, h: 0.22,
    fontSize: 8, fontFace: "Calibri", color: "276749", charSpacing: 2, margin: 0
  });

  const iconRobot = await iconToBase64Png(FaRobot, "#0D7F5F");
  const iconBrain = await iconToBase64Png(FaBrain, "#0D7F5F");
  const iconCheck = await iconToBase64Png(FaCheckCircle, "#0D7F5F");
  const iconCamera = await iconToBase64Png(FaCamera, "#0D7F5F");
  const iconChart = await iconToBase64Png(FaChartLine, "#0D7F5F");
  const iconBell = await iconToBase64Png(FaBell, "#0D7F5F");

  const features = [
    { icon: iconBrain, title: "Modello predittivo", desc: "5 anni di storico, proposte\nautomatiche per pop-up e fornitore" },
    { icon: iconCamera, title: "Riconoscimento AI", desc: "Scansione prodotto da fotocamera,\nmodello/colore/prezzo automatici" },
    { icon: iconCheck, title: "Cross-check automatico", desc: "Vendite vs giacenze vs incassi\nin tempo reale, alert istantanei" },
    { icon: iconBell, title: "Alert predittivi", desc: "Previsione rottura stock,\ndistribuzione ottimizzata dall\u2019AI" },
    { icon: iconChart, title: "Dashboard real-time", desc: "KPI, vendite/ora, proiezione\ntarget, calcolo incentivi" },
    { icon: iconRobot, title: "Distribuzione automatica", desc: "Dati inviati a CRM BAT, Pard\ne Shopify senza intervento" },
  ];

  features.forEach((f, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const fx = 0.5 + col * 3.1;
    const fy = featY + 0.22 + row * 0.65;

    s2.addImage({ data: f.icon, x: fx, y: fy + 0.04, w: 0.22, h: 0.22 });
    s2.addText(f.title, {
      x: fx + 0.3, y: fy, w: 2.5, h: 0.2,
      fontSize: 10, fontFace: "Calibri", color: "1A1A1A", bold: true, margin: 0
    });
    s2.addText(f.desc, {
      x: fx + 0.3, y: fy + 0.2, w: 2.5, h: 0.38,
      fontSize: 8, fontFace: "Calibri", color: "4A5568", margin: 0
    });
  });

  // Result callouts at bottom
  const resY = 4.55;
  const results = [
    { text: "3 min per vendita (da 10)", color: "276749", bg: "F0FFF4", border: "9AE6B4" },
    { text: "Riconciliazione eliminata", color: "276749", bg: "F0FFF4", border: "9AE6B4" },
    { text: "Emergenze previste, non subite", color: "276749", bg: "F0FFF4", border: "9AE6B4" },
    { text: "Tracciabilit\u00E0 end-to-end", color: "276749", bg: "F0FFF4", border: "9AE6B4" },
  ];

  results.forEach((r, i) => {
    const rw = 2.13;
    const rx = 0.5 + i * (rw + 0.1);
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: rx, y: resY, w: rw, h: 0.42,
      fill: { color: r.bg }, rectRadius: 0.04
    });
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: rx, y: resY, w: rw, h: 0.42,
      line: { color: r.border, width: 0.5 }, rectRadius: 0.04
    });
    s2.addShape(pres.shapes.RECTANGLE, {
      x: rx, y: resY + 0.04, w: 0.04, h: 0.34,
      fill: { color: "38A169" }
    });
    s2.addText(r.text, {
      x: rx + 0.12, y: resY, w: rw - 0.2, h: 0.42,
      fontSize: 9, fontFace: "Calibri", color: r.color, bold: true, valign: "middle", margin: 0
    });
  });

  // Footer
  s2.addText("Saving annuo conservativo: \u20AC161.435 | ROI anno 1: 129% | Payback: < 10 mesi", {
    x: 0.6, y: 5.15, w: 8.8, h: 0.25,
    fontSize: 9, fontFace: "Calibri", color: "0D7F5F", bold: true, margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/NOT_Processo.pptx" });
  console.log("PPTX created successfully");
}

main().catch(console.error);