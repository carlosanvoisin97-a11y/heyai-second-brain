const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Noloop - Matrice di Prioritizzazione";

  // === EXACT PALETTE ===
  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const PURPLE_L = "BAA4EB";
  const PURPLE_D = "5728B8";
  const GREEN = "66DDAB";
  const GREEN_ALT = "7DDF80";
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const MUTED = "9090A8";
  const DOT_COLOR = PURPLE_D;
  const FONT = "Calibri";

  let s = pres.addSlide();
  s.background = { color: BG };

  // Title
  s.addText("Matrice di Prioritizzazione", {
    x: 0.5, y: 0.15, w: 7, h: 0.7,
    fontSize: 40, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });

  // === MATRIX AREA (left side) ===
  const mX = 0.5, mY = 1.05, mW = 5.0, mH = 3.2;

  // Matrix background with gradient zones
  // Zone 1: Strategic area (top-left) - darker
  s.addShape(pres.shapes.RECTANGLE, {
    x: mX, y: mY, w: mW, h: mH,
    fill: { color: "0D0D1A" },
    line: { color: CARD_BORDER, width: 0.5 }
  });

  // "Sweet spot" gradient zone (top-right = quick wins)
  s.addShape(pres.shapes.RECTANGLE, {
    x: mX + mW * 0.5, y: mY, w: mW * 0.5, h: mH * 0.45,
    fill: { color: "1A1A35" }, transparency: 30
  });

  // Middle zone
  s.addShape(pres.shapes.RECTANGLE, {
    x: mX + mW * 0.25, y: mY, w: mW * 0.75, h: mH * 0.65,
    fill: { color: "15152A" }, transparency: 40
  });

  // Grid lines (dashed effect with thin lines)
  // Horizontal mid
  s.addShape(pres.shapes.LINE, {
    x: mX, y: mY + mH * 0.5, w: mW, h: 0,
    line: { color: "333355", width: 0.3, dashType: "dash" }
  });
  // Vertical mid
  s.addShape(pres.shapes.LINE, {
    x: mX + mW * 0.5, y: mY, w: 0, h: mH,
    line: { color: "333355", width: 0.3, dashType: "dash" }
  });

  // Axis labels
  s.addText("ALTO", {
    x: mX - 0.02, y: mY - 0.01, w: 0.4, h: 0.2,
    fontSize: 6, fontFace: FONT, color: MUTED, align: "right", margin: 0
  });
  s.addText("BASSO", {
    x: mX - 0.02, y: mY + mH - 0.18, w: 0.4, h: 0.2,
    fontSize: 6, fontFace: FONT, color: MUTED, align: "right", margin: 0
  });
  s.addText("ALTO", {
    x: mX - 0.05, y: mY + mH + 0.02, w: 0.5, h: 0.18,
    fontSize: 6, fontFace: FONT, color: MUTED, align: "center", margin: 0
  });
  s.addText("BASSO", {
    x: mX + mW - 0.3, y: mY + mH + 0.02, w: 0.5, h: 0.18,
    fontSize: 6, fontFace: FONT, color: MUTED, align: "center", margin: 0
  });

  // Y-axis label (vertical)
  s.addText("Impatto di Business", {
    x: -0.15, y: mY + mH * 0.35, w: 1.2, h: 0.25,
    fontSize: 7, fontFace: FONT, color: MUTED, align: "center",
    rotate: 270, margin: 0
  });
  // X-axis label
  s.addText("Livello di Complessità", {
    x: mX + mW * 0.2, y: mY + mH + 0.18, w: mW * 0.6, h: 0.22,
    fontSize: 7, fontFace: FONT, color: MUTED, align: "center", margin: 0
  });

  // === ZONE LABELS on the matrix ===
  s.addText("QUICK WINS", {
    x: mX + mW * 0.6, y: mY + 0.08, w: mW * 0.35, h: 0.2,
    fontSize: 7, fontFace: FONT, color: GREEN, bold: true, align: "center",
    charSpacing: 1, margin: 0
  });
  s.addText("INIZIATIVE\nSTRATEGICHE", {
    x: mX + mW * 0.15, y: mY + 0.08, w: mW * 0.35, h: 0.35,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, align: "center",
    charSpacing: 1, margin: 0
  });
  s.addText("FASE 2", {
    x: mX + mW * 0.55, y: mY + mH * 0.48, w: mW * 0.35, h: 0.2,
    fontSize: 7, fontFace: FONT, color: MUTED, bold: true, align: "center",
    charSpacing: 1, margin: 0
  });

  // === DOT POSITIONS ===
  // Quick Wins (top-right: high impact, low complexity)
  const dots = [
    // Quick Wins - top right area
    { id: 1, x: 0.72, y: 0.18, label: "VF" },   // Venue Finder
    { id: 2, x: 0.82, y: 0.12, label: "CP" },   // Crowd Pagamenti
    { id: 3, x: 0.88, y: 0.22, label: "ME" },   // Minutes Evolution

    // Strategic - top left-center (high impact, higher complexity)
    { id: 4, x: 0.22, y: 0.15, label: "LK" },   // Link
    { id: 5, x: 0.35, y: 0.10, label: "FL" },   // Flow
    { id: 6, x: 0.30, y: 0.25, label: "SA" },   // Sally
    { id: 7, x: 0.48, y: 0.20, label: "OS" },   // OnSite

    // Phase 2 - mid zone
    { id: 8, x: 0.55, y: 0.50, label: "PT" },   // Pitch
    { id: 9, x: 0.68, y: 0.55, label: "LM" },   // LeadMe Evo
  ];

  const dotR = 0.17; // dot diameter

  dots.forEach(d => {
    const dx = mX + d.x * mW - dotR / 2;
    const dy = mY + d.y * mH - dotR / 2;

    s.addShape(pres.shapes.OVAL, {
      x: dx, y: dy, w: dotR, h: dotR,
      fill: { color: DOT_COLOR },
      shadow: { type: "outer", blur: 3, offset: 1, angle: 135, color: "000000", opacity: 0.4 }
    });
    s.addText(String(d.id), {
      x: dx, y: dy, w: dotR, h: dotR,
      fontSize: 8, fontFace: FONT, color: WHITE, bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // === RIGHT SIDE: LEGEND ===
  const lgX = 5.8, lgY = 1.0, lgW = 3.9;

  s.addText("CATALOGO SOLUZIONI", {
    x: lgX, y: lgY, w: lgW, h: 0.25,
    fontSize: 9, fontFace: FONT, color: WHITE, bold: true, charSpacing: 1.5, margin: 0
  });
  // Separator
  s.addShape(pres.shapes.LINE, {
    x: lgX, y: lgY + 0.25, w: lgW, h: 0,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  const legendItems = [
    { id: 1, name: "Venue Finder Evolution", cat: "qw" },
    { id: 2, name: "Crowd Integr. Pagamenti", cat: "qw" },
    { id: 3, name: "Minutes Call Esterne", cat: "qw" },
    { id: 4, name: "Link — Sistema Gestionale", cat: "st" },
    { id: 5, name: "Flow — Task Management", cat: "st" },
    { id: 6, name: "Sally — Agente 360°", cat: "st" },
    { id: 7, name: "OnSite — AI Companion", cat: "st" },
    { id: 8, name: "Pitch — Modulo Creativo", cat: "f2" },
    { id: 9, name: "LeadMe Evolution", cat: "f2" },
  ];

  const catColors = { qw: GREEN, st: PURPLE_L, f2: MUTED };
  const dotSize = 0.18;
  const lgStartY = lgY + 0.35;
  const lgRowH = 0.24;

  legendItems.forEach((item, i) => {
    const iy = lgStartY + i * lgRowH;
    const col = i < 5 ? 0 : 1;
    const row = i < 5 ? i : i - 5;
    const ix = lgX + col * 2.0;
    const iiy = lgStartY + row * lgRowH;

    // Dot
    s.addShape(pres.shapes.OVAL, {
      x: ix, y: iiy + 0.02, w: dotSize, h: dotSize,
      fill: { color: DOT_COLOR }
    });
    s.addText(String(item.id), {
      x: ix, y: iiy + 0.02, w: dotSize, h: dotSize,
      fontSize: 7, fontFace: FONT, color: WHITE, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    // Name
    s.addText(item.name, {
      x: ix + 0.22, y: iiy, w: 1.7, h: lgRowH,
      fontSize: 8, fontFace: FONT, color: catColors[item.cat],
      valign: "middle", margin: 0
    });
  });

  // === BOTTOM: 3 CATEGORY BOXES ===
  const bY = 3.55;
  const bH = 1.85;
  const bW = 3.0;
  const bGap = 0.1;
  const bStartX = 0.5;

  // Box 1: Quick Wins
  const b1x = bStartX;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b1x, y: bY, w: bW, h: bH,
    fill: { color: CARD }, rectRadius: 0.05,
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: b1x, y: bY, w: bW, h: 0.04,
    fill: { color: GREEN }
  });
  s.addText("QUICK WINS", {
    x: b1x + 0.15, y: bY + 0.12, w: bW - 0.3, h: 0.22,
    fontSize: 9, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1.5, margin: 0
  });
  s.addText("Venue Finder · Crowd Pagamenti · Minutes", {
    x: b1x + 0.15, y: bY + 0.34, w: bW - 0.3, h: 0.2,
    fontSize: 7.5, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText(
    "Soluzioni a basso effort e massima resa immediata. " +
    "Si mettono in piedi rapidamente su un ecosistema già operativo e portano valore dal primo mese: " +
    "il Venue Finder libera 1.500 ore/anno sulle presentazioni, " +
    "i Pagamenti sbloccano Crowd come prodotto vendibile, " +
    "Minutes copre il 40% delle call oggi escluse. " +
    "Investimento contenuto, payback in settimane.", {
    x: b1x + 0.15, y: bY + 0.58, w: bW - 0.3, h: 1.15,
    fontSize: 7.5, fontFace: FONT, color: MUTED,
    lineSpacingMultiple: 1.3, valign: "top", margin: 0
  });

  // Box 2: Strategic
  const b2x = b1x + bW + bGap;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b2x, y: bY, w: bW, h: bH,
    fill: { color: CARD }, rectRadius: 0.05,
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: b2x, y: bY, w: bW, h: 0.04,
    fill: { color: PURPLE_D }
  });
  s.addText("INIZIATIVE STRATEGICHE", {
    x: b2x + 0.15, y: bY + 0.12, w: bW - 0.3, h: 0.22,
    fontSize: 9, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s.addText("Link · Flow · Sally · OnSite", {
    x: b2x + 0.15, y: bY + 0.34, w: bW - 0.3, h: 0.2,
    fontSize: 7.5, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText(
    "Il cuore della trasformazione. " +
    "Costruiscono l'architettura digitale che connette ogni fase operativa di Noloop — " +
    "dalla commessa al budget, dal task al consuntivo — eliminando Excel, WhatsApp e doppi inserimenti. " +
    "Complessità più alta, ma è qui che si generano i €320K+/anno di risparmio operativo " +
    "e si libera la capacità per crescere senza assumere.", {
    x: b2x + 0.15, y: bY + 0.58, w: bW - 0.3, h: 1.15,
    fontSize: 7.5, fontFace: FONT, color: MUTED,
    lineSpacingMultiple: 1.3, valign: "top", margin: 0
  });

  // Box 3: Phase 2
  const b3x = b2x + bW + bGap;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: b3x, y: bY, w: bW, h: bH,
    fill: { color: CARD }, rectRadius: 0.05,
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: b3x, y: bY, w: bW, h: 0.04,
    fill: { color: MUTED }
  });
  s.addText("FASE 2 — EVOLUTIVE", {
    x: b3x + 0.15, y: bY + 0.12, w: bW - 0.3, h: 0.22,
    fontSize: 9, fontFace: FONT, color: MUTED, bold: true, charSpacing: 1, margin: 0
  });
  s.addText("Pitch · LeadMe Evolution", {
    x: b3x + 0.15, y: bY + 0.34, w: bW - 0.3, h: 0.2,
    fontSize: 7.5, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText(
    "Il valore aggiuntivo che differenzia Noloop sul mercato. " +
    "Pitch permette di partecipare a 5-6 gare in più all'anno con proposte che il cliente non ha già visto. " +
    "LeadMe Evolution trasforma il commerciale da reattivo a proattivo con +60% di capacità di scouting. " +
    "Possono attendere che le fondamenta strategiche siano in piedi — " +
    "ma sono le soluzioni che alzano il livello competitivo.", {
    x: b3x + 0.15, y: bY + 0.58, w: bW - 0.3, h: 1.15,
    fontSize: 7.5, fontFace: FONT, color: MUTED,
    lineSpacingMultiple: 1.3, valign: "top", margin: 0
  });

  // HeyAI + page number
  s.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35,
    fontFace: FONT, align: "right", margin: 0
  });
  s.addText("33", {
    x: 9.4, y: 5.15, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: FONT, color: WHITE, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Noloop_Matrice_Prioritizzazione.pptx" });
  console.log("Done!");
}

main().catch(console.error);