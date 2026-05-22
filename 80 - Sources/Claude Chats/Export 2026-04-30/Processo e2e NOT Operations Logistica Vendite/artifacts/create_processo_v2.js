const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaExclamationTriangle, FaFileExcel, FaWhatsapp, FaMobileAlt, FaBrain, FaCheckCircle, FaCamera, FaChartLine, FaBell, FaClipboardCheck, FaTasks, FaBoxOpen, FaSearchPlus, FaSyncAlt } = require("react-icons/fa");

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
  pres.title = "NOT - Processo AS-IS / TO-BE";

  // Shared dimensions
  const boxW = 1.72;
  const gap = 0.12;
  const startX = 0.4;

  // =============================================
  // SLIDE 1: AS-IS
  // =============================================
  const s1 = pres.addSlide();
  s1.background = { color: "FFFFFF" };

  s1.addText("Cosa succede oggi", {
    x: 0.5, y: 0.2, w: 7, h: 0.45,
    fontSize: 24, fontFace: "Calibri", color: "1A1A1A", bold: true, margin: 0
  });
  s1.addText("Ogni passaggio \u00E8 manuale, su strumenti diversi che non si parlano", {
    x: 0.5, y: 0.6, w: 8, h: 0.25,
    fontSize: 12, fontFace: "Calibri", color: "718096", margin: 0
  });
  s1.addText("HeyAI S.r.l.", {
    x: 7.8, y: 0.25, w: 1.8, h: 0.25, fontSize: 11, fontFace: "Calibri", color: "A0AEC0", align: "right", margin: 0
  });

  // Step boxes - gradient gray → red (problem accumulates)
  const flowY = 1.05;
  const boxH = 0.6;

  const asSteps = [
    { title: "Ordine al fornitore", fill: "F1F5F9", border: "CBD5E1", tc: "334155" },
    { title: "Magazzini MI + RM", fill: "F1F5F9", border: "CBD5E1", tc: "334155" },
    { title: "~33 Pop-up", fill: "FEF2F2", border: "FECACA", tc: "7F1D1D" },
    { title: "Vendita (x3)", fill: "FEE2E2", border: "FCA5A5", tc: "7F1D1D" },
    { title: "Riconciliazione", fill: "FEE2E2", border: "FCA5A5", tc: "7F1D1D" },
  ];

  const iconExcel = await ic(FaFileExcel, "#64748B");
  const iconWA = await ic(FaWhatsapp, "#64748B");
  const iconMob = await ic(FaMobileAlt, "#991B1B");
  const iconWarn = await ic(FaExclamationTriangle, "#DC2626");

  asSteps.forEach((st, i) => {
    const bx = startX + i * (boxW + gap);
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: flowY, w: boxW, h: boxH,
      fill: { color: st.fill }, rectRadius: 0.06
    });
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: flowY, w: boxW, h: boxH,
      line: { color: st.border, width: 0.75 }, rectRadius: 0.06
    });
    s1.addText(st.title, {
      x: bx, y: flowY, w: boxW, h: boxH,
      fontSize: 11, fontFace: "Calibri", color: st.tc, bold: true, align: "center", valign: "middle", margin: 0
    });
    // Dashed arrows between
    if (i < asSteps.length - 1) {
      s1.addShape(pres.shapes.LINE, {
        x: bx + boxW + 0.01, y: flowY + boxH / 2, w: gap - 0.02, h: 0,
        line: { color: "CBD5E1", width: 1.5, dashType: "dash", headEnd: { type: "arrow" } }
      });
    }
  });

  // Tools + problems under each step
  const detY = 1.82;
  const detH = 2.6;

  // Background strip
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: detY - 0.08, w: 9.5, h: detH + 0.16,
    fill: { color: "FAFAFA" }
  });

  s1.addText("COME SI LAVORA OGGI", {
    x: 0.4, y: detY - 0.02, w: 3, h: 0.18,
    fontSize: 7, fontFace: "Calibri", color: "94A3B8", charSpacing: 2, margin: 0
  });

  // Step 1: Ordine al fornitore
  const c1x = startX;
  const items1 = [
    { ic: iconWarn, t: "Calcolo manuale su storico" },
    { ic: iconWarn, t: "Nessuna previsione domanda" },
    { ic: iconWA, t: "Ordini via WhatsApp" },
    { ic: iconWarn, t: "10-15 min per centro" },
  ];
  items1.forEach((it, j) => {
    const iy = detY + 0.24 + j * 0.42;
    s1.addImage({ data: it.ic, x: c1x + 0.04, y: iy + 0.04, w: 0.15, h: 0.15 });
    s1.addText(it.t, { x: c1x + 0.24, y: iy, w: boxW - 0.28, h: 0.34, fontSize: 8, fontFace: "Calibri", color: "475569", margin: 0, valign: "middle" });
  });

  // Step 2: Magazzini
  const c2x = startX + (boxW + gap);
  const items2 = [
    { ic: iconExcel, t: "Giacenze su Google Sheet" },
    { ic: iconWarn, t: "Nessun incrocio con vendite" },
    { ic: iconWarn, t: "Luned\u00EC collo di bottiglia" },
    { ic: iconWarn, t: "Errori frequenti nei conteggi" },
  ];
  items2.forEach((it, j) => {
    const iy = detY + 0.24 + j * 0.42;
    s1.addImage({ data: it.ic, x: c2x + 0.04, y: iy + 0.04, w: 0.15, h: 0.15 });
    s1.addText(it.t, { x: c2x + 0.24, y: iy, w: boxW - 0.28, h: 0.34, fontSize: 8, fontFace: "Calibri", color: "475569", margin: 0, valign: "middle" });
  });

  // Step 3: Pop-up
  const c3x = startX + 2 * (boxW + gap);
  const items3 = [
    { ic: iconExcel, t: "Conteggio manuale 1-2x/sett" },
    { ic: iconExcel, t: "File Excel per prodotto/colore" },
    { ic: iconWarn, t: "Emergenze stock: intervento fisico" },
    { ic: iconWarn, t: "Furti e ammanchi invisibili" },
  ];
  items3.forEach((it, j) => {
    const iy = detY + 0.24 + j * 0.42;
    s1.addImage({ data: it.ic, x: c3x + 0.04, y: iy + 0.04, w: 0.15, h: 0.15 });
    s1.addText(it.t, { x: c3x + 0.24, y: iy, w: boxW - 0.28, h: 0.34, fontSize: 8, fontFace: "Calibri", color: "475569", margin: 0, valign: "middle" });
  });

  // Step 4: Vendita x3
  const c4x = startX + 3 * (boxW + gap);
  const items4 = [
    { ic: iconMob, t: "App NOT" },
    { ic: iconMob, t: "CRM BAT (Sharpend)" },
    { ic: iconMob, t: "Piattaforma Pard" },
    { ic: iconWarn, t: "~10 min per vendita" },
    { ic: iconWarn, t: "Spesso non compilano tutte e 3" },
  ];
  items4.forEach((it, j) => {
    const iy = detY + 0.24 + j * 0.38;
    s1.addImage({ data: it.ic, x: c4x + 0.04, y: iy + 0.04, w: 0.15, h: 0.15 });
    s1.addText(it.t, { x: c4x + 0.24, y: iy, w: boxW - 0.28, h: 0.3, fontSize: 8, fontFace: "Calibri", color: "475569", margin: 0, valign: "middle" });
  });

  // Step 5: Riconciliazione
  const c5x = startX + 4 * (boxW + gap);
  const items5 = [
    { ic: iconExcel, t: "3 export Excel da incrociare" },
    { ic: iconWarn, t: "2 Data Analyst a tempo pieno" },
    { ic: iconWarn, t: "Anomalie scoperte dopo giorni" },
    { ic: iconWarn, t: "Report luned\u00EC consegnato a mezzanotte" },
  ];
  items5.forEach((it, j) => {
    const iy = detY + 0.24 + j * 0.42;
    s1.addImage({ data: it.ic, x: c5x + 0.04, y: iy + 0.04, w: 0.15, h: 0.15 });
    s1.addText(it.t, { x: c5x + 0.24, y: iy, w: boxW - 0.28, h: 0.34, fontSize: 8, fontFace: "Calibri", color: "475569", margin: 0, valign: "middle" });
  });

  // Bottom metric pills
  const pillY = 4.65;
  const pills = [
    { t: "15% del turno perso in data entry", color: "991B1B" },
    { t: "2 FTE dedicati alla riconciliazione", color: "991B1B" },
    { t: "Zero visibilit\u00E0 real-time sullo stock", color: "991B1B" },
  ];
  pills.forEach((p, i) => {
    const pw = 2.85;
    const px = 0.5 + i * (pw + 0.15);
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: px, y: pillY, w: pw, h: 0.38,
      fill: { color: "FEF2F2" }, rectRadius: 0.04
    });
    s1.addShape(pres.shapes.RECTANGLE, {
      x: px, y: pillY + 0.04, w: 0.04, h: 0.3,
      fill: { color: "EF4444" }
    });
    s1.addText(p.t, {
      x: px + 0.12, y: pillY, w: pw - 0.2, h: 0.38,
      fontSize: 9, fontFace: "Calibri", color: p.color, bold: true, valign: "middle", margin: 0
    });
  });

  s1.addText("Dati emersi dalle sessioni di lavoro con il team operativo NOT (dic. 2025 \u2014 feb. 2026)", {
    x: 0.5, y: 5.15, w: 8.8, h: 0.22, fontSize: 8, fontFace: "Calibri", color: "A0AEC0", margin: 0
  });

  // =============================================
  // SLIDE 2: TO-BE
  // =============================================
  const s2 = pres.addSlide();
  s2.background = { color: "FFFFFF" };

  s2.addText("Cosa cambia con la piattaforma", {
    x: 0.5, y: 0.2, w: 7, h: 0.45,
    fontSize: 24, fontFace: "Calibri", color: "1A1A1A", bold: true, margin: 0
  });
  s2.addText("Un unico sistema integrato: dall\u2019ordine alla dashboard, tutto automatico", {
    x: 0.5, y: 0.6, w: 8, h: 0.25,
    fontSize: 12, fontFace: "Calibri", color: "718096", margin: 0
  });
  s2.addText("HeyAI S.r.l.", {
    x: 7.8, y: 0.25, w: 1.8, h: 0.25, fontSize: 11, fontFace: "Calibri", color: "A0AEC0", align: "right", margin: 0
  });

  // Platform bar
  const platY = 0.95;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: platY, w: 9.2, h: 0.32,
    fill: { color: "0D7F5F" }, rectRadius: 0.06
  });
  s2.addText("PIATTAFORMA NOT", {
    x: 0.4, y: platY, w: 9.2, h: 0.32,
    fontSize: 10, fontFace: "Calibri", color: "FFFFFF", bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0
  });

  // Step boxes
  const toY = 1.45;
  const toH = 0.55;
  const green = "0D7F5F";

  const toSteps = [
    { title: "AI genera ordini", badge: "AI" },
    { title: "Admin approva", badge: null },
    { title: "Magazzino", badge: null },
    { title: "Pop-up", badge: null },
    { title: "Vendita + Analytics", badge: "AI" },
  ];

  const iconBrain = await ic(FaBrain, "#0D7F5F");
  const iconClip = await ic(FaClipboardCheck, "#0D7F5F");
  const iconTask = await ic(FaTasks, "#0D7F5F");
  const iconBox = await ic(FaBoxOpen, "#0D7F5F");
  const iconCam = await ic(FaCamera, "#0D7F5F");
  const iconChart = await ic(FaChartLine, "#0D7F5F");
  const iconBell = await ic(FaBell, "#0D7F5F");
  const iconSync = await ic(FaSyncAlt, "#0D7F5F");
  const iconSearch = await ic(FaSearchPlus, "#0D7F5F");
  const iconCheck = await ic(FaCheckCircle, "#0D7F5F");

  toSteps.forEach((st, i) => {
    const bx = startX + i * (boxW + gap);
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: toY, w: boxW, h: toH,
      fill: { color: "ECFDF5" }, rectRadius: 0.06
    });
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: toY, w: boxW, h: toH,
      line: { color: "6EE7B7", width: 0.75 }, rectRadius: 0.06
    });
    s2.addText(st.title, {
      x: bx + (st.badge ? 0.04 : 0), y: toY, w: boxW - (st.badge ? 0.38 : 0), h: toH,
      fontSize: 11, fontFace: "Calibri", color: "065F46", bold: true, align: "center", valign: "middle", margin: 0
    });
    // AI badge
    if (st.badge) {
      s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: bx + boxW - 0.38, y: toY + 0.08, w: 0.3, h: 0.2,
        fill: { color: "0D7F5F" }, rectRadius: 0.04
      });
      s2.addText("AI", {
        x: bx + boxW - 0.38, y: toY + 0.08, w: 0.3, h: 0.2,
        fontSize: 8, fontFace: "Calibri", color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
      });
    }
    // Vertical connector to platform
    s2.addShape(pres.shapes.LINE, {
      x: bx + boxW / 2, y: platY + 0.32, w: 0, h: toY - platY - 0.32,
      line: { color: "6EE7B7", width: 1 }
    });
    // Arrow between boxes
    if (i < toSteps.length - 1) {
      s2.addShape(pres.shapes.LINE, {
        x: bx + boxW + 0.01, y: toY + toH / 2, w: gap - 0.02, h: 0,
        line: { color: "34D399", width: 1.5, headEnd: { type: "arrow" } }
      });
    }
  });

  // Features under each step
  const fdY = 2.15;
  const fdH = 2.25;

  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: fdY - 0.05, w: 9.5, h: fdH + 0.1,
    fill: { color: "F0FDF4" }
  });

  s2.addText("FUNZIONALIT\u00C0 PER STEP", {
    x: 0.4, y: fdY, w: 3, h: 0.18,
    fontSize: 7, fontFace: "Calibri", color: "166534", charSpacing: 2, margin: 0
  });

  // Step 1: AI genera ordini
  const f1x = startX;
  const fitems1 = [
    { ic: iconBrain, t: "Modello predittivo su\n5 anni di storico" },
    { ic: iconSync, t: "Proposta ordine BAT +\nreplenishment pop-up" },
    { ic: iconCheck, t: "Nuovi prodotti subito\noperativi (prod. simili)" },
    { ic: iconClip, t: "Parametri calibrabili\ndall\u2019Admin" },
  ];
  fitems1.forEach((it, j) => {
    const iy = fdY + 0.24 + j * 0.48;
    s2.addImage({ data: it.ic, x: f1x + 0.04, y: iy + 0.06, w: 0.15, h: 0.15 });
    s2.addText(it.t, { x: f1x + 0.24, y: iy, w: boxW - 0.28, h: 0.42, fontSize: 8, fontFace: "Calibri", color: "1A1A1A", margin: 0, valign: "middle" });
  });

  // Step 2: Admin approva
  const f2x = startX + (boxW + gap);
  const fitems2 = [
    { ic: iconClip, t: "Visualizza proposta,\nmodifica, approva 1 click" },
    { ic: iconTask, t: "Ordine \u2192 task diretto\nal magazziniere" },
    { ic: iconSearch, t: "Area Manager:\nvisibilit\u00E0 pop-up in sola lettura" },
  ];
  fitems2.forEach((it, j) => {
    const iy = fdY + 0.24 + j * 0.48;
    s2.addImage({ data: it.ic, x: f2x + 0.04, y: iy + 0.06, w: 0.15, h: 0.15 });
    s2.addText(it.t, { x: f2x + 0.24, y: iy, w: boxW - 0.28, h: 0.42, fontSize: 8, fontFace: "Calibri", color: "1A1A1A", margin: 0, valign: "middle" });
  });

  // Step 3: Magazzino
  const f3x = startX + 2 * (boxW + gap);
  const fitems3 = [
    { ic: iconTask, t: "Lista task semplificata\nprodotto/colore/destinazione" },
    { ic: iconBell, t: "Alert automatico\nsu discrepanze quantit\u00E0" },
    { ic: iconCheck, t: "Check-in merce BAT:\nconferma vs bolla" },
    { ic: iconSync, t: "Giacenze aggiornate\nautomaticamente" },
  ];
  fitems3.forEach((it, j) => {
    const iy = fdY + 0.24 + j * 0.48;
    s2.addImage({ data: it.ic, x: f3x + 0.04, y: iy + 0.06, w: 0.15, h: 0.15 });
    s2.addText(it.t, { x: f3x + 0.24, y: iy, w: boxW - 0.28, h: 0.42, fontSize: 8, fontFace: "Calibri", color: "1A1A1A", margin: 0, valign: "middle" });
  });

  // Step 4: Pop-up
  const f4x = startX + 3 * (boxW + gap);
  const fitems4 = [
    { ic: iconBell, t: "Notifica arrivo con\ndettaglio prodotti attesi" },
    { ic: iconCheck, t: "Conferma ricezione per\nprodotto/colore + alert" },
    { ic: iconCam, t: "Scansione codici myglow\ndei singoli device" },
    { ic: iconSync, t: "Giacenze pop-up\naggiornate in automatico" },
  ];
  fitems4.forEach((it, j) => {
    const iy = fdY + 0.24 + j * 0.48;
    s2.addImage({ data: it.ic, x: f4x + 0.04, y: iy + 0.06, w: 0.15, h: 0.15 });
    s2.addText(it.t, { x: f4x + 0.24, y: iy, w: boxW - 0.28, h: 0.42, fontSize: 8, fontFace: "Calibri", color: "1A1A1A", margin: 0, valign: "middle" });
  });

  // Step 5: Vendita + Analytics
  const f5x = startX + 4 * (boxW + gap);
  const fitems5 = [
    { ic: iconCam, t: "1 form con riconoscimento\nAI del prodotto" },
    { ic: iconSync, t: "Dati distribuiti auto a\nCRM BAT, Pard, Shopify" },
    { ic: iconBell, t: "Cross-check triplo\nvendite/giacenze/incassi" },
    { ic: iconChart, t: "Dashboard: KPI, vendite/ora,\ntarget, incentivi" },
  ];
  fitems5.forEach((it, j) => {
    const iy = fdY + 0.24 + j * 0.48;
    s2.addImage({ data: it.ic, x: f5x + 0.04, y: iy + 0.06, w: 0.15, h: 0.15 });
    s2.addText(it.t, { x: f5x + 0.24, y: iy, w: boxW - 0.28, h: 0.42, fontSize: 8, fontFace: "Calibri", color: "1A1A1A", margin: 0, valign: "middle" });
  });

  // Delta metrics row - before → after
  const deltaY = 4.55;
  const deltas = [
    { t: "10-15 min/centro \u2192 1 click" },
    { t: "Luned\u00EC caotico \u2192 task strutturati" },
    { t: "Conteggio manuale \u2192 stock real-time" },
    { t: "10 min su 3 app \u2192 3 min su 1 form" },
    { t: "2 FTE riconciliazione \u2192 zero" },
  ];
  deltas.forEach((d, i) => {
    const dx = startX + i * (boxW + gap);
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: dx, y: deltaY, w: boxW, h: 0.35,
      fill: { color: "ECFDF5" }, rectRadius: 0.04
    });
    s2.addShape(pres.shapes.RECTANGLE, {
      x: dx, y: deltaY + 0.04, w: 0.03, h: 0.27,
      fill: { color: "10B981" }
    });
    s2.addText(d.t, {
      x: dx + 0.08, y: deltaY, w: boxW - 0.12, h: 0.35,
      fontSize: 8, fontFace: "Calibri", color: "065F46", bold: true, valign: "middle", margin: 0
    });
  });

  // Saving pills at bottom
  const savY = 5.05;
  const savPills = [
    { t: "Modulo Vendite: \u20AC118.136/anno (73%)", color: "065F46" },
    { t: "Modulo Logistica: \u20AC43.299/anno (27%)", color: "065F46" },
    { t: "Saving totale: \u20AC161.435/anno | ROI 129% | Payback < 10 mesi", color: "0D7F5F" },
  ];
  const savWidths = [2.6, 2.6, 4.2];
  let savX = 0.4;
  savPills.forEach((sp, i) => {
    s2.addText(sp.t, {
      x: savX, y: savY, w: savWidths[i], h: 0.28,
      fontSize: 8, fontFace: "Calibri", color: sp.color, bold: i === 2, margin: 0
    });
    savX += savWidths[i] + 0.1;
  });

  await pres.writeFile({ fileName: "/home/claude/NOT_Processo.pptx" });
  console.log("Done");
}

main().catch(console.error);