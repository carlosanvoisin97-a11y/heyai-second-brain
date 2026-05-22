const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaExclamationTriangle, FaFileExcel, FaWhatsapp, FaMobileAlt, FaBrain, FaCheckCircle, FaCamera, FaChartLine, FaBell, FaClipboardCheck, FaTasks, FaBoxOpen, FaSyncAlt, FaSearch } = require("react-icons/fa");

function renderIconSvg(IC, color, size = 256) {
  return ReactDOMServer.renderToStaticMarkup(React.createElement(IC, { color, size: String(size) }));
}
async function ico(IC, color) {
  const svg = renderIconSvg(IC, color);
  return "image/png;base64," + (await sharp(Buffer.from(svg)).png().toBuffer()).toString("base64");
}

async function main() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI S.r.l.";
  pres.title = "NOT - Processo AS-IS / TO-BE";

  // Layout constants
  const cols = 5;
  const boxW = 1.72;
  const gap = 0.12;
  const startX = 0.4;

  // Icons
  const iWarn = await ico(FaExclamationTriangle, "#DC2626");
  const iExcel = await ico(FaFileExcel, "#64748B");
  const iWA = await ico(FaWhatsapp, "#64748B");
  const iMob = await ico(FaMobileAlt, "#991B1B");
  const iBrain = await ico(FaBrain, "#0D7F5F");
  const iCam = await ico(FaCamera, "#0D7F5F");
  const iCheck = await ico(FaCheckCircle, "#0D7F5F");
  const iChart = await ico(FaChartLine, "#0D7F5F");
  const iBell = await ico(FaBell, "#0D7F5F");
  const iClip = await ico(FaClipboardCheck, "#0D7F5F");
  const iTask = await ico(FaTasks, "#0D7F5F");
  const iSync = await ico(FaSyncAlt, "#0D7F5F");
  const iSearch = await ico(FaSearch, "#0D7F5F");
  const iBox = await ico(FaBoxOpen, "#0D7F5F");

  // Helper: draw item row
  function drawItem(slide, icon, text, x, y, w) {
    slide.addImage({ data: icon, x: x + 0.04, y: y + 0.04, w: 0.14, h: 0.14 });
    slide.addText(text, {
      x: x + 0.23, y: y, w: w - 0.27, h: 0.34,
      fontSize: 8, fontFace: "Calibri", color: "475569", margin: 0, valign: "middle"
    });
  }

  function drawItemGreen(slide, icon, text, x, y, w) {
    slide.addImage({ data: icon, x: x + 0.04, y: y + 0.06, w: 0.14, h: 0.14 });
    slide.addText(text, {
      x: x + 0.23, y: y, w: w - 0.27, h: 0.42,
      fontSize: 8, fontFace: "Calibri", color: "1A1A1A", margin: 0, valign: "middle"
    });
  }

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
    x: 7.8, y: 0.25, w: 1.8, h: 0.25,
    fontSize: 11, fontFace: "Calibri", color: "A0AEC0", align: "right", margin: 0
  });

  // === STEP BOXES (gradient gray → red) ===
  const flowY = 1.05;
  const boxH = 0.55;

  const asSteps = [
    { title: "Vendita", fill: "FEE2E2", border: "FCA5A5", tc: "7F1D1D" },
    { title: "Riconciliazione", fill: "FEE2E2", border: "FCA5A5", tc: "7F1D1D" },
    { title: "Stock & ordini", fill: "FEF2F2", border: "FECACA", tc: "991B1B" },
    { title: "Magazzino & emergenze", fill: "F1F5F9", border: "CBD5E1", tc: "334155" },
    { title: "Performance", fill: "F1F5F9", border: "CBD5E1", tc: "334155" },
  ];

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
    if (i < asSteps.length - 1) {
      s1.addShape(pres.shapes.LINE, {
        x: bx + boxW + 0.01, y: flowY + boxH / 2, w: gap - 0.02, h: 0,
        line: { color: "CBD5E1", width: 1.5, dashType: "dash", headEnd: { type: "arrow" } }
      });
    }
  });

  // === DETAIL AREA ===
  const detY = 1.78;
  s1.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: detY - 0.08, w: 9.5, h: 2.75,
    fill: { color: "FAFAFA" }
  });
  s1.addText("COME SI LAVORA OGGI", {
    x: 0.4, y: detY - 0.02, w: 3, h: 0.18,
    fontSize: 7, fontFace: "Calibri", color: "94A3B8", charSpacing: 2, margin: 0
  });

  const rowH = 0.38;
  const detStart = detY + 0.22;

  // COL 1: Vendita
  const c1 = startX;
  const v1 = [
    [iMob, "App NOT"],
    [iMob, "CRM BAT (Sharpend)"],
    [iMob, "Piattaforma Pard"],
    [iWarn, "~10 min per vendita"],
    [iWarn, "Spesso non compilano\ntutte e 3 le piattaforme"],
    [iWarn, "15% del turno perso\nin data entry"],
  ];
  v1.forEach((it, j) => drawItem(s1, it[0], it[1], c1, detStart + j * rowH, boxW));

  // COL 2: Riconciliazione
  const c2 = startX + (boxW + gap);
  const v2 = [
    [iExcel, "3 export Excel\nda incrociare a mano"],
    [iWarn, "2 Data Analyst\na tempo pieno"],
    [iWarn, "Non divisibile:\nrischio doppioni"],
    [iWarn, "Anomalie scoperte\ncon giorni di ritardo"],
    [iWarn, "Report luned\u00EC\nconsegnato a mezzanotte"],
  ];
  v2.forEach((it, j) => drawItem(s1, it[0], it[1], c2, detStart + j * rowH, boxW));

  // COL 3: Stock & ordini
  const c3 = startX + 2 * (boxW + gap);
  const v3 = [
    [iExcel, "Conteggio manuale\n1-2x a settimana"],
    [iExcel, "File Excel per\nprodotto e colore"],
    [iWarn, "Nessun incrocio\nvendite / giacenze"],
    [iWarn, "Stima a occhio\ndel fabbisogno"],
    [iWA, "Ordini al magazziniere\nvia WhatsApp"],
    [iWarn, "10-15 min per centro"],
  ];
  v3.forEach((it, j) => drawItem(s1, it[0], it[1], c3, detStart + j * rowH, boxW));

  // COL 4: Magazzino & emergenze
  const c4 = startX + 3 * (boxW + gap);
  const v4 = [
    [iExcel, "Google Sheet giacenze\naggiornato a mano"],
    [iWarn, "Magazziniere unico,\nluned\u00EC collo di bottiglia"],
    [iWarn, "Errori frequenti\nnei conteggi"],
    [iWarn, "Rotture stock: ulteriore\nGoogle Sheet + intervento fisico"],
    [iWarn, "BAT consegna\ncon ritardi frequenti"],
  ];
  v4.forEach((it, j) => drawItem(s1, it[0], it[1], c4, detStart + j * rowH, boxW));

  // COL 5: Performance
  const c5 = startX + 4 * (boxW + gap);
  const v5 = [
    [iExcel, "Dati dispersi\nsu fogli diversi"],
    [iWarn, "Vendite/ora\nnon calcolabile"],
    [iWarn, "Nessun dato strutturato\nsulle ore lavorate"],
    [iWarn, "Calcolo incentivi\nmanuale"],
    [iWarn, "Nessuna vista unificata\nper confronto pop-up"],
  ];
  v5.forEach((it, j) => drawItem(s1, it[0], it[1], c5, detStart + j * rowH, boxW));

  // === BOTTOM CALLOUTS ===
  const pillY = 4.7;
  const pillData = [
    "15% del turno perso in data entry",
    "2 FTE dedicati alla riconciliazione",
    "Zero visibilit\u00E0 real-time sullo stock",
  ];
  pillData.forEach((t, i) => {
    const pw = 2.85;
    const px = 0.5 + i * (pw + 0.15);
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: px, y: pillY, w: pw, h: 0.36,
      fill: { color: "FEF2F2" }, rectRadius: 0.04
    });
    s1.addShape(pres.shapes.RECTANGLE, {
      x: px, y: pillY + 0.04, w: 0.04, h: 0.28,
      fill: { color: "EF4444" }
    });
    s1.addText(t, {
      x: px + 0.12, y: pillY, w: pw - 0.2, h: 0.36,
      fontSize: 9, fontFace: "Calibri", color: "991B1B", bold: true, valign: "middle", margin: 0
    });
  });

  s1.addText("Dati emersi dalle sessioni di lavoro con il team operativo NOT (dic. 2025 \u2014 feb. 2026)", {
    x: 0.5, y: 5.18, w: 8.8, h: 0.2,
    fontSize: 8, fontFace: "Calibri", color: "A0AEC0", margin: 0
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
  s2.addText("Un unico sistema integrato: dalla vendita alla dashboard, tutto automatico", {
    x: 0.5, y: 0.6, w: 8, h: 0.25,
    fontSize: 12, fontFace: "Calibri", color: "718096", margin: 0
  });
  s2.addText("HeyAI S.r.l.", {
    x: 7.8, y: 0.25, w: 1.8, h: 0.25,
    fontSize: 11, fontFace: "Calibri", color: "A0AEC0", align: "right", margin: 0
  });

  // Platform bar
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 0.95, w: 9.2, h: 0.3,
    fill: { color: "0D7F5F" }, rectRadius: 0.06
  });
  s2.addText("PIATTAFORMA NOT", {
    x: 0.4, y: 0.95, w: 9.2, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: "FFFFFF", bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0
  });

  // Step boxes
  const toY = 1.42;
  const toH = 0.5;

  const toSteps = [
    { title: "Vendita", badge: "AI" },
    { title: "Riconciliazione", badge: null },
    { title: "Ordini AI", badge: "AI" },
    { title: "Magazzino & pop-up", badge: null },
    { title: "Dashboard & analytics", badge: null },
  ];

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
      x: bx + (st.badge ? 0.02 : 0), y: toY, w: boxW - (st.badge ? 0.36 : 0), h: toH,
      fontSize: 10, fontFace: "Calibri", color: "065F46", bold: true, align: "center", valign: "middle", margin: 0
    });
    if (st.badge) {
      s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: bx + boxW - 0.36, y: toY + 0.08, w: 0.28, h: 0.18,
        fill: { color: "0D7F5F" }, rectRadius: 0.04
      });
      s2.addText("AI", {
        x: bx + boxW - 0.36, y: toY + 0.08, w: 0.28, h: 0.18,
        fontSize: 7, fontFace: "Calibri", color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0
      });
    }
    // Connector to platform
    s2.addShape(pres.shapes.LINE, {
      x: bx + boxW / 2, y: 1.25, w: 0, h: toY - 1.25,
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

  // === FEATURES PER STEP ===
  const fdY = 2.08;
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0.25, y: fdY - 0.05, w: 9.5, h: 2.32,
    fill: { color: "F0FDF4" }
  });
  s2.addText("FUNZIONALIT\u00C0 PER STEP", {
    x: 0.4, y: fdY, w: 3, h: 0.16,
    fontSize: 7, fontFace: "Calibri", color: "166534", charSpacing: 2, margin: 0
  });

  const fStart = fdY + 0.2;
  const fRowH = 0.44;

  // COL 1: Vendita (F5.1, F5.2, F5.6-F5.8, integrations)
  const f1 = startX;
  const ft1 = [
    [iCam, "1 form con riconoscimento\nAI del prodotto"],
    [iSync, "Operatore e orario\ncompilati in automatico"],
    [iSync, "Dati distribuiti auto\na CRM BAT, Pard, Shopify"],
    [iCheck, "Prezzi centralizzati,\nlogica sconto BAT gestita"],
    [iCheck, "Funziona anche offline:\nsalva e sincronizza"],
  ];
  ft1.forEach((it, j) => drawItemGreen(s2, it[0], it[1], f1, fStart + j * fRowH, boxW));

  // COL 2: Riconciliazione eliminata (F5.4, F5.5, D.3)
  const f2 = startX + (boxW + gap);
  const ft2 = [
    [iCheck, "Eliminata: dato unico,\nnulla da riconciliare"],
    [iBell, "Cross-check triplo auto:\nvendite/giacenze/incassi"],
    [iBell, "Alert istantaneo\nsu anomalie"],
    [iSearch, "Segnalazione consumo\ngadget anomalo vs vendite"],
    [iSync, "2 Data Analyst liberati\nper analisi e ottimizzazione"],
  ];
  ft2.forEach((it, j) => drawItemGreen(s2, it[0], it[1], f2, fStart + j * fRowH, boxW));

  // COL 3: Ordini AI (F1.1-F1.5, F2.1-F2.2)
  const f3 = startX + 2 * (boxW + gap);
  const ft3 = [
    [iBrain, "Modello predittivo su\n5 anni di storico vendite"],
    [iSync, "Proposta ordine BAT +\nreplenishment per pop-up"],
    [iClip, "Admin visualizza,\nmodifica, approva 1 click"],
    [iTask, "Ordine approvato \u2192 task\ndiretto al magazziniere"],
    [iCheck, "Nuovi prodotti subito\noperativi (prod. simili)"],
  ];
  ft3.forEach((it, j) => drawItemGreen(s2, it[0], it[1], f3, fStart + j * fRowH, boxW));

  // COL 4: Magazzino & pop-up (F2.3, F3.1-F3.4, F4.1-F4.4)
  const f4 = startX + 3 * (boxW + gap);
  const ft4 = [
    [iTask, "Magazziniere: lista task\nprodotto/colore/destinazione"],
    [iBell, "Alert discrepanza\nquantit\u00E0 richiesta vs caricata"],
    [iCheck, "Check-in BAT:\nconferma vs bolla"],
    [iCam, "Pop-up: scansione codici\nmyglow al ricevimento"],
    [iSync, "Giacenze magazzino e\npop-up aggiornate in auto"],
  ];
  ft4.forEach((it, j) => drawItemGreen(s2, it[0], it[1], f4, fStart + j * fRowH, boxW));

  // COL 5: Dashboard & analytics (D.1-D.5, timbratura)
  const f5 = startX + 4 * (boxW + gap);
  const ft5 = [
    [iChart, "Stock real-time per\npop-up e magazzino"],
    [iBell, "Previsione rottura stock\ne distribuzione ottimizzata"],
    [iChart, "Vendite/ora, trend,\nconfronto pop-up"],
    [iCheck, "Timbratura digitale con\ngeolocalizzazione"],
    [iChart, "Performance e dati per\ncalcolo incentivi"],
  ];
  ft5.forEach((it, j) => drawItemGreen(s2, it[0], it[1], f5, fStart + j * fRowH, boxW));

  // === DELTA METRICS ===
  const deltaY = 4.5;
  const deltas = [
    "10 min su 3 app \u2192 3 min su 1 form",
    "2 FTE riconciliazione \u2192 zero",
    "Stima a occhio \u2192 AI predittiva",
    "WhatsApp \u2192 task strutturati",
    "Dati dispersi \u2192 dashboard real-time",
  ];
  deltas.forEach((d, i) => {
    const dx = startX + i * (boxW + gap);
    s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: dx, y: deltaY, w: boxW, h: 0.32,
      fill: { color: "ECFDF5" }, rectRadius: 0.04
    });
    s2.addShape(pres.shapes.RECTANGLE, {
      x: dx, y: deltaY + 0.04, w: 0.03, h: 0.24,
      fill: { color: "10B981" }
    });
    s2.addText(d, {
      x: dx + 0.08, y: deltaY, w: boxW - 0.12, h: 0.32,
      fontSize: 8, fontFace: "Calibri", color: "065F46", bold: true, valign: "middle", margin: 0
    });
  });

  // === SAVING FOOTER ===
  s2.addText([
    { text: "Modulo Vendite: \u20AC118.136/anno (73%)    ", options: { fontSize: 8, color: "065F46" } },
    { text: "Modulo Logistica: \u20AC43.299/anno (27%)    ", options: { fontSize: 8, color: "065F46" } },
    { text: "Saving totale: \u20AC161.435/anno | ROI 129% | Payback < 10 mesi", options: { fontSize: 8, color: "0D7F5F", bold: true } },
  ], {
    x: 0.4, y: 5.0, w: 9.2, h: 0.3, fontFace: "Calibri", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/NOT_Processo.pptx" });
  console.log("Done");
}

main().catch(console.error);