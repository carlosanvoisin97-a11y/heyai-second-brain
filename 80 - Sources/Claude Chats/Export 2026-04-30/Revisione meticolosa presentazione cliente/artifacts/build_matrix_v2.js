const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  pres.author = "HeyAI";
  pres.title = "Noloop - Matrice di Prioritizzazione";

  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const PURPLE_L = "BAA4EB";
  const PURPLE_D = "5728B8";
  const GREEN = "66DDAB";
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const MUTED = "9090A8";
  const FONT = "Calibri";

  let s = pres.addSlide();
  s.background = { color: BG };

  // Title
  s.addText("Matrice di Prioritizzazione", {
    x: 0.4, y: 0.12, w: 7, h: 0.7,
    fontSize: 40, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });

  // === MATRIX (left side, large) ===
  const mX = 0.55, mY = 0.95, mW = 5.2, mH = 4.15;

  // Matrix background - light area (the "opportunity zone")
  s.addShape(pres.shapes.RECTANGLE, {
    x: mX, y: mY, w: mW, h: mH,
    fill: { color: "E8E0F0" },
    line: { color: "999999", width: 0.3 }
  });

  // Dark corner (bottom-left = high complexity, low impact) - simulate the curve with overlapping shapes
  // Large dark quarter-circle effect using multiple overlapping shapes
  s.addShape(pres.shapes.OVAL, {
    x: mX - mW * 0.55, y: mY + mH * 0.15, w: mW * 1.1, h: mH * 1.4,
    fill: { color: "1A1A2A" }
  });

  // Transition zone (medium purple)
  s.addShape(pres.shapes.OVAL, {
    x: mX - mW * 0.35, y: mY + mH * 0.05, w: mW * 0.95, h: mH * 1.2,
    fill: { color: PURPLE_L }, transparency: 60
  });

  // Re-draw border on top
  s.addShape(pres.shapes.RECTANGLE, {
    x: mX, y: mY, w: mW, h: mH,
    fill: { color: "000000", transparency: 100 },
    line: { color: "666666", width: 0.5 }
  });

  // Grid lines
  s.addShape(pres.shapes.LINE, {
    x: mX, y: mY + mH / 3, w: mW, h: 0,
    line: { color: "999999", width: 0.3, dashType: "dash" }
  });
  s.addShape(pres.shapes.LINE, {
    x: mX, y: mY + mH * 2 / 3, w: mW, h: 0,
    line: { color: "999999", width: 0.3, dashType: "dash" }
  });
  s.addShape(pres.shapes.LINE, {
    x: mX + mW / 3, y: mY, w: 0, h: mH,
    line: { color: "999999", width: 0.3, dashType: "dash" }
  });
  s.addShape(pres.shapes.LINE, {
    x: mX + mW * 2 / 3, y: mY, w: 0, h: mH,
    line: { color: "999999", width: 0.3, dashType: "dash" }
  });

  // Axis labels
  s.addText("ALTO", { x: mX - 0.45, y: mY - 0.02, w: 0.4, h: 0.2, fontSize: 7, fontFace: FONT, color: GRAY, align: "right", margin: 0 });
  s.addText("MEDIO", { x: mX - 0.45, y: mY + mH / 2 - 0.1, w: 0.4, h: 0.2, fontSize: 7, fontFace: FONT, color: GRAY, align: "right", margin: 0 });
  s.addText("BASSO", { x: mX - 0.45, y: mY + mH - 0.18, w: 0.4, h: 0.2, fontSize: 7, fontFace: FONT, color: GRAY, align: "right", margin: 0 });

  s.addText("ALTO", { x: mX - 0.05, y: mY + mH + 0.02, w: 0.5, h: 0.18, fontSize: 7, fontFace: FONT, color: GRAY, align: "center", margin: 0 });
  s.addText("MEDIO", { x: mX + mW / 3 - 0.15, y: mY + mH + 0.02, w: 0.5, h: 0.18, fontSize: 7, fontFace: FONT, color: GRAY, align: "center", margin: 0 });
  s.addText("BASSO", { x: mX + mW * 2 / 3 - 0.05, y: mY + mH + 0.02, w: 0.5, h: 0.18, fontSize: 7, fontFace: FONT, color: GRAY, align: "center", margin: 0 });

  // Y-axis title
  s.addText("Impatto di Business", {
    x: -0.35, y: mY + mH * 0.35, w: 1.4, h: 0.25,
    fontSize: 8, fontFace: FONT, color: GRAY, align: "center", rotate: 270, margin: 0
  });
  // X-axis title
  s.addText("Livello di Complessità", {
    x: mX + mW * 0.25, y: mY + mH + 0.2, w: mW * 0.5, h: 0.2,
    fontSize: 8, fontFace: FONT, color: GRAY, align: "center", margin: 0
  });

  // === DOTS on the matrix ===
  const dotR = 0.22;

  const dots = [
    // Quick Wins: top-right (high impact, low complexity)
    { id: 1, x: 0.75, y: 0.12 },  // VF
    { id: 2, x: 0.85, y: 0.08 },  // Crowd Pagamenti
    { id: 3, x: 0.90, y: 0.18 },  // Minutes Evo

    // Strategic: top area, medium-high complexity
    { id: 4, x: 0.25, y: 0.12 },  // Link
    { id: 5, x: 0.40, y: 0.08 },  // Flow
    { id: 6, x: 0.32, y: 0.24 },  // Sally
    { id: 7, x: 0.55, y: 0.16 },  // OnSite

    // Phase 2: medium zone
    { id: 8, x: 0.58, y: 0.42 },  // Pitch
    { id: 9, x: 0.72, y: 0.46 },  // LeadMe Evo
  ];

  dots.forEach(d => {
    const dx = mX + d.x * mW - dotR / 2;
    const dy = mY + d.y * mH - dotR / 2;

    s.addShape(pres.shapes.OVAL, {
      x: dx, y: dy, w: dotR, h: dotR,
      fill: { color: PURPLE_D },
      shadow: { type: "outer", blur: 2, offset: 1, angle: 135, color: "000000", opacity: 0.3 }
    });
    s.addText(String(d.id), {
      x: dx, y: dy, w: dotR, h: dotR,
      fontSize: 9, fontFace: FONT, color: WHITE, bold: true,
      align: "center", valign: "middle", margin: 0
    });
  });

  // === RIGHT SIDE: CATALOG (top) ===
  const rX = 6.0, rY = 0.95, rW = 3.7;

  s.addText("CATALOGO DELLE SOLUZIONI", {
    x: rX, y: rY, w: rW, h: 0.22,
    fontSize: 9, fontFace: FONT, color: WHITE, bold: true, charSpacing: 1.5, margin: 0
  });
  s.addShape(pres.shapes.LINE, {
    x: rX, y: rY + 0.24, w: rW, h: 0,
    line: { color: WHITE, width: 1.5 }
  });

  const legend = [
    { id: 1, name: "Venue Finder Evolution" },
    { id: 2, name: "Crowd Integr. Pagamenti" },
    { id: 3, name: "Minutes Call Esterne" },
    { id: 4, name: "Link — Sist. Gestionale" },
    { id: 5, name: "Flow — Task Mgmt" },
    { id: 6, name: "Sally — Agente 360°" },
    { id: 7, name: "OnSite — AI Companion" },
    { id: 8, name: "Pitch — Mod. Creativo" },
    { id: 9, name: "LeadMe Evolution" },
  ];

  const lgDotSize = 0.2;
  const lgRowH = 0.26;
  const lgStartY = rY + 0.35;
  const col1X = rX;
  const col2X = rX + 1.95;

  legend.forEach((item, i) => {
    const col = i < 5 ? 0 : 1;
    const row = i < 5 ? i : i - 5;
    const ix = col === 0 ? col1X : col2X;
    const iy = lgStartY + row * lgRowH;

    // Color based on category
    let dotCol = PURPLE_D;
    if (i < 3) dotCol = GREEN;        // Quick wins in green
    else if (i >= 7) dotCol = MUTED;   // Phase 2 in muted

    s.addShape(pres.shapes.OVAL, {
      x: ix, y: iy + 0.03, w: lgDotSize, h: lgDotSize,
      fill: { color: dotCol }
    });
    s.addText(String(item.id), {
      x: ix, y: iy + 0.03, w: lgDotSize, h: lgDotSize,
      fontSize: 8, fontFace: FONT, color: WHITE, bold: true,
      align: "center", valign: "middle", margin: 0
    });
    s.addText(item.name, {
      x: ix + 0.25, y: iy, w: 1.6, h: lgRowH,
      fontSize: 8.5, fontFace: FONT, color: WHITE,
      valign: "middle", margin: 0
    });
  });

  // === RIGHT SIDE: 3 STACKED BOXES (below catalog) ===
  const boxX = rX;
  const boxW = rW;
  const boxH = 0.72;
  const boxGap = 0.08;
  const boxStartY = lgStartY + 5 * lgRowH + 0.15;

  // Box 1: Quick Wins
  const b1y = boxStartY;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: boxX, y: b1y, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.04
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: boxX, y: b1y, w: 0.05, h: boxH,
    fill: { color: GREEN }
  });
  s.addText("Quick Wins", {
    x: boxX + 0.15, y: b1y + 0.06, w: 1.2, h: 0.2,
    fontSize: 10, fontFace: FONT, color: GREEN, bold: true, margin: 0
  });
  s.addText(
    "Soluzioni a basso effort implementativo e alto ritorno immediato. " +
    "Si attivano rapidamente sull'ecosistema già in produzione e generano valore operativo dal primo mese.", {
    x: boxX + 0.15, y: b1y + 0.28, w: boxW - 0.3, h: 0.4,
    fontSize: 7.5, fontFace: FONT, color: MUTED, lineSpacingMultiple: 1.25, margin: 0
  });

  // Box 2: Strategiche
  const b2y = b1y + boxH + boxGap;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: boxX, y: b2y, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.04
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: boxX, y: b2y, w: 0.05, h: boxH,
    fill: { color: PURPLE_D }
  });
  s.addText("Iniziative Strategiche", {
    x: boxX + 0.15, y: b2y + 0.06, w: 2.2, h: 0.2,
    fontSize: 10, fontFace: FONT, color: PURPLE_L, bold: true, margin: 0
  });
  s.addText(
    "Complessità più alta, ma costruiscono l'architettura digitale dei nuovi processi. " +
    "Sono le soluzioni che generano le maggiori ottimizzazioni e portano l'operatività a un livello superiore.", {
    x: boxX + 0.15, y: b2y + 0.28, w: boxW - 0.3, h: 0.4,
    fontSize: 7.5, fontFace: FONT, color: MUTED, lineSpacingMultiple: 1.25, margin: 0
  });

  // Box 3: Fase 2
  const b3y = b2y + boxH + boxGap;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: boxX, y: b3y, w: boxW, h: boxH,
    fill: { color: CARD }, rectRadius: 0.04
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: boxX, y: b3y, w: 0.05, h: boxH,
    fill: { color: MUTED }
  });
  s.addText("Fase 2 — Evolutive", {
    x: boxX + 0.15, y: b3y + 0.06, w: 2.2, h: 0.2,
    fontSize: 10, fontFace: FONT, color: MUTED, bold: true, margin: 0
  });
  s.addText(
    "Valore aggiuntivo che differenzia in modo forte sul mercato. " +
    "Possono attendere che le fondamenta strategiche siano operative — sono il passo che alza il livello competitivo.", {
    x: boxX + 0.15, y: b3y + 0.28, w: boxW - 0.3, h: 0.4,
    fontSize: 7.5, fontFace: FONT, color: MUTED, lineSpacingMultiple: 1.25, margin: 0
  });

  // HeyAI + page
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

  await pres.writeFile({ fileName: "/home/claude/Noloop_Matrice_v2.pptx" });
  console.log("Done!");
}

main().catch(console.error);