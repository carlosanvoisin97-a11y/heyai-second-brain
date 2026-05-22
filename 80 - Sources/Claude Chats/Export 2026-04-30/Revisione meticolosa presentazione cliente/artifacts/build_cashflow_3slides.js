const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";

  // Palette
  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const TBL_HEADER = "2E2E3E";
  const TBL_ROW_A = "141420";
  const TBL_ROW_B = "1A1A24";
  const PURPLE_L = "BAA4EB";
  const PURPLE_D = "5728B8";
  const GREEN = "66DDAB";
  const ORANGE = "FF9800";
  const YELLOW = "FFD54F";
  const RED = "FF4444";
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const MUTED = "9090A8";
  const FONT = "Calibri";

  const heyai = (slide) => {
    slide.addText([
      { text: "Hey", options: { color: WHITE, bold: true, fontSize: 10 } },
      { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 10 } }
    ], { x: 9.05, y: 5.2, w: 0.65, h: 0.3, fontFace: FONT, align: "right", margin: 0 });
  };

  // =============================================
  // SLIDE 1: ROADMAP DI SVILUPPO
  // =============================================
  let s1 = pres.addSlide();
  s1.background = { color: BG };

  s1.addText("Roadmap di Sviluppo — 2026", {
    x: 0.45, y: 0.15, w: 8, h: 0.55,
    fontSize: 32, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s1.addText("Timeline indicativa con rilasci incrementali. Partenza prevista: ultima settimana di marzo 2026.", {
    x: 0.45, y: 0.65, w: 9, h: 0.22,
    fontSize: 10, fontFace: FONT, color: GRAY, margin: 0
  });

  // Month headers
  const months1 = ["MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT"];
  const cX = 2.55;
  const cW = 7.1;
  const mW = cW / 8;
  const cY = 0.98;

  months1.forEach((m, i) => {
    const mx = cX + i * mW;
    s1.addText(m, {
      x: mx, y: cY, w: mW, h: 0.2,
      fontSize: 7.5, fontFace: FONT, color: PURPLE_L, bold: true, align: "center", margin: 0
    });
    if (i > 0) {
      s1.addShape(pres.shapes.LINE, {
        x: mx, y: cY + 0.22, w: 0, h: 3.35,
        line: { color: "1A1A30", width: 0.3, dashType: "dash" }
      });
    }
  });

  // Top border line
  s1.addShape(pres.shapes.LINE, {
    x: cX, y: cY + 0.22, w: cW, h: 0,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  const barH = 0.24;
  const rowH = 0.40;
  const startY = cY + 0.32;

  // Phase labels on far right
  const addPhaseLabel = (y, h, label, color) => {
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 9.5, y: y, w: 0.22, h: h,
      fill: { color }, rectRadius: 0.03
    });
  };

  const drawBar = (name, color, startM, endM, yRow, milestone) => {
    const y = startY + yRow * rowH;
    const bx = cX + startM * mW;
    const bw = (endM - startM) * mW;

    s1.addText(name, {
      x: 0.3, y: y - 0.02, w: 2.2, h: barH,
      fontSize: 8, fontFace: FONT, color: WHITE, valign: "middle", align: "right", margin: 0
    });

    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: y, w: bw, h: barH,
      fill: { color }, rectRadius: 0.03
    });

    if (milestone) {
      s1.addText("◆", {
        x: bx + bw - 0.1, y: y - 0.03, w: 0.18, h: barH + 0.04,
        fontSize: 10, fontFace: FONT, color: WHITE, align: "center", valign: "middle", margin: 0
      });
      s1.addText(milestone, {
        x: bx + bw + 0.06, y: y, w: 0.9, h: barH,
        fontSize: 6, fontFace: FONT, color: MUTED, valign: "middle", margin: 0
      });
    }
  };

  // Phase 1 label
  s1.addText("FASE 1", {
    x: 0.3, y: startY - 0.1, w: 0.5, h: 0.15,
    fontSize: 6, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1, margin: 0
  });

  // Bars - month units: 0=Mar 1, 0.8=~Mar 24, 1=Apr 1, etc.
  drawBar("Venue Finder",  GREEN,    0.8, 1.8,  0, "Aprile");     // 4 settimane
  drawBar("LeadMe Effic.", GREEN,    0.8, 1.5,  1, "15 Apr ⚠️");  // deadline 15/4
  drawBar("Minutes Ext",   GREEN,    0.8, 2.0,  2, "Maggio");      // 4 settimane
  drawBar("Link (analisi)", "3A3A5A", 0.8, 1.5, 3, "");           // analisi in parallelo

  // Phase 2 label
  s1.addText("FASE 2", {
    x: 0.3, y: startY + 4 * rowH - 0.1, w: 0.5, h: 0.15,
    fontSize: 6, fontFace: FONT, color: ORANGE, bold: true, charSpacing: 1, margin: 0
  });

  drawBar("Crowd Stripe",   ORANGE,    2.0, 2.8,  4, "Giu");
  drawBar("Link (sviluppo)",PURPLE_D,  1.8, 4.5,  5, "Luglio");   // 2.5 mesi
  drawBar("Flow MVP",       ORANGE,    3.0, 4.5,  6, "Ago");

  // Phase 3 label
  s1.addText("FASE 3", {
    x: 0.3, y: startY + 7 * rowH - 0.1, w: 0.5, h: 0.15,
    fontSize: 6, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });

  drawBar("OnSite App",     PURPLE_D,  4.5, 6.0,  7, "Set");
  drawBar("Sally 360°",     PURPLE_D,  6.0, 7.8,  8, "Ott");

  // April 15 deadline line
  const apr15 = cX + 1.48 * mW;
  s1.addShape(pres.shapes.LINE, {
    x: apr15, y: cY + 0.22, w: 0, h: 0.95,
    line: { color: RED, width: 1.2 }
  });
  s1.addText("15/04", {
    x: apr15 - 0.18, y: cY + 0.22, w: 0.38, h: 0.13,
    fontSize: 5.5, fontFace: FONT, color: RED, bold: true, align: "center",
    fill: { color: "1A0505" }, margin: 0
  });

  // Legend
  const lgY1 = 4.45;
  s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: lgY1, w: 9.15, h: 0.7,
    fill: { color: CARD }, rectRadius: 0.04
  });

  const legendItems = [
    { color: GREEN, label: "Quick Wins — partenza immediata" },
    { color: ORANGE, label: "Fase 2 — dopo prime delivery" },
    { color: PURPLE_D, label: "Fase 3 — fondazioni strategiche" },
  ];
  legendItems.forEach((l, i) => {
    const lx = 0.65 + i * 3.0;
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: lx, y: lgY1 + 0.12, w: 0.3, h: 0.12,
      fill: { color: l.color }, rectRadius: 0.02
    });
    s1.addText(l.label, {
      x: lx + 0.38, y: lgY1 + 0.06, w: 2.5, h: 0.22,
      fontSize: 7.5, fontFace: FONT, color: GRAY, valign: "middle", margin: 0
    });
  });

  s1.addText("◆ = rilascio previsto  |  Rilasci incrementali con test utente tra le fasi  |  Max 2 soluzioni in sviluppo parallelo", {
    x: 0.65, y: lgY1 + 0.38, w: 8.5, h: 0.2,
    fontSize: 7, fontFace: FONT, color: MUTED, margin: 0
  });

  s1.addText("Timeline indicativa soggetta a validazione tecnica.", {
    x: 0.45, y: 5.3, w: 6, h: 0.18,
    fontSize: 6, fontFace: FONT, color: "444444", margin: 0
  });
  heyai(s1);

  // =============================================
  // SLIDE 2: PIANO DI FATTURAZIONE E FLUSSO DI CASSA
  // =============================================
  let s2 = pres.addSlide();
  s2.background = { color: BG };

  s2.addText("Piano di Fatturazione e Flusso di Cassa", {
    x: 0.45, y: 0.15, w: 9, h: 0.55,
    fontSize: 30, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText("Tranche 35% acconto / 30% a metà progetto / 35% al rilascio — pagamenti dilazionati sui rilasci incrementali.", {
    x: 0.45, y: 0.65, w: 9, h: 0.22,
    fontSize: 10, fontFace: FONT, color: GRAY, margin: 0
  });

  // Cash flow table
  const hdr2 = (align = "center") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 7.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER }, margin: [2, 3, 2, 3]
  });
  const cell2 = (alt, align = "right") => ({
    fill: { color: alt ? TBL_ROW_B : TBL_ROW_A },
    color: GRAY, fontSize: 7.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.3, color: "1A1A30" }, margin: [2, 4, 2, 4]
  });
  const greenCell = (alt) => ({ ...cell2(alt), color: GREEN, bold: true });
  const mutedCell = (alt) => ({ ...cell2(alt), color: MUTED, fontSize: 6.5 });

  let tbl2 = [];

  tbl2.push([
    { text: "Mese", options: hdr2("left") },
    { text: "Soluzioni fatturate", options: hdr2("left") },
    { text: "Tranche", options: hdr2("left") },
    { text: "Esborso mese", options: hdr2() },
    { text: "Cumulativo", options: { ...hdr2(), color: GREEN } },
  ]);

  const rows2 = [
    { m: "Mar 2026", sol: "VF · LeadMe · Minutes · Link", tr: "T1 (acconti partenza)", esb: "€40.950", cum: "€40.950", alt: false },
    { m: "Apr 2026", sol: "VF · LeadMe", tr: "T2+T3 VF · T2+T3 LeadMe", esb: "€21.450", cum: "€62.400", alt: true },
    { m: "Mag 2026", sol: "Minutes · Crowd Stripe", tr: "T2+T3 Minutes · T1 Crowd", esb: "€11.100", cum: "€73.500", alt: false },
    { m: "Giu 2026", sol: "Crowd · Link · Flow", tr: "T2+T3 Crowd · T2 Link · T1 Flow", esb: "€52.250", cum: "€125.750", alt: true },
    { m: "Lug 2026", sol: "Link · Flow", tr: "T3 Link · T2 Flow", esb: "€41.250", cum: "€167.000", alt: false },
    { m: "Ago 2026", sol: "Flow · OnSite", tr: "T3 Flow · T1 OnSite", esb: "€28.700", cum: "€195.700", alt: true },
    { m: "Set 2026", sol: "OnSite · Sally", tr: "T2+T3 OnSite · T1 Sally", esb: "€47.575", cum: "€243.275", alt: false },
    { m: "Ott 2026", sol: "Sally", tr: "T2+T3 Sally", esb: "€49.725", cum: "€293.000", alt: true },
  ];

  rows2.forEach(r => {
    tbl2.push([
      { text: r.m, options: cell2(r.alt, "left") },
      { text: r.sol, options: mutedCell(r.alt) },
      { text: r.tr, options: mutedCell(r.alt) },
      { text: r.esb, options: cell2(r.alt) },
      { text: r.cum, options: greenCell(r.alt) },
    ]);
  });

  s2.addTable(tbl2, {
    x: 0.45, y: 1.0, w: 9.1,
    colW: [0.85, 2.2, 2.7, 1.2, 1.15],
    rowH: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25],
  });

  // 3 KPI boxes at bottom
  const kpiY = 3.5;
  const kpiH = 1.15;
  const kpiW = 2.9;
  const kpiGap = 0.15;

  // Box 1: Totale
  const k1x = 0.45;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: k1x, y: kpiY, w: kpiW, h: kpiH,
    fill: { color: CARD }, rectRadius: 0.05
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: k1x, y: kpiY, w: 0.04, h: kpiH, fill: { color: PURPLE_D }
  });
  s2.addText("INVESTIMENTO TOTALE", {
    x: k1x + 0.15, y: kpiY + 0.08, w: kpiW - 0.3, h: 0.16,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("€290.500", {
    x: k1x + 0.15, y: kpiY + 0.26, w: kpiW - 0.3, h: 0.32,
    fontSize: 22, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText([
    { text: "Fatturato su 8 mesi (Mar–Ott)", options: { breakLine: true } },
    { text: "Picco mensile: ~€52K (giugno)" }
  ], {
    x: k1x + 0.15, y: kpiY + 0.62, w: kpiW - 0.3, h: 0.4,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 2: Iper
  const k2x = k1x + kpiW + kpiGap;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: k2x, y: kpiY, w: kpiW, h: kpiH,
    fill: { color: CARD }, rectRadius: 0.05
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: k2x, y: kpiY, w: 0.04, h: kpiH, fill: { color: GREEN }
  });
  s2.addText("IPERAMMORTAMENTO 2026", {
    x: k2x + 0.15, y: kpiY + 0.08, w: kpiW - 0.3, h: 0.16,
    fontSize: 7, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("~ €125K", {
    x: k2x + 0.15, y: kpiY + 0.26, w: kpiW - 0.3, h: 0.32,
    fontSize: 22, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText([
    { text: "Risparmio fiscale stimato (43,2%)", options: { breakLine: true } },
    { text: "Costo effettivo netto: ~€165K" }
  ], {
    x: k2x + 0.15, y: kpiY + 0.62, w: kpiW - 0.3, h: 0.4,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 3: Dilazione
  const k3x = k2x + kpiW + kpiGap;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: k3x, y: kpiY, w: kpiW, h: kpiH,
    fill: { color: CARD }, rectRadius: 0.05
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: k3x, y: kpiY, w: 0.04, h: kpiH, fill: { color: PURPLE_L }
  });
  s2.addText("DILAZIONE", {
    x: k3x + 0.15, y: kpiY + 0.08, w: kpiW - 0.3, h: 0.16,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("8 mesi", {
    x: k3x + 0.15, y: kpiY + 0.26, w: kpiW - 0.3, h: 0.32,
    fontSize: 22, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText([
    { text: "Pagamenti distribuiti Mar → Ott", options: { breakLine: true } },
    { text: "Interamente in competenza 2026" }
  ], {
    x: k3x + 0.15, y: kpiY + 0.62, w: kpiW - 0.3, h: 0.4,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  s2.addText("Nota: iperammortamento illustrativo (L. 199/2025, magg. 180%, IRES 24%). Va validato con il consulente fiscale.", {
    x: 0.45, y: 5.3, w: 8, h: 0.18,
    fontSize: 6, fontFace: FONT, color: "444444", margin: 0
  });
  heyai(s2);

  // =============================================
  // SLIDE 3: QUANDO IL VALORE SI ATTIVA
  // =============================================
  let s3 = pres.addSlide();
  s3.background = { color: BG };

  s3.addText("Quando il Valore si Attiva", {
    x: 0.45, y: 0.15, w: 9, h: 0.55,
    fontSize: 32, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s3.addText("Ad ogni rilascio si attiva un beneficio misurabile. Il valore è incrementale, non si aspetta la fine del progetto.", {
    x: 0.45, y: 0.65, w: 9, h: 0.22,
    fontSize: 10, fontFace: FONT, color: GRAY, margin: 0
  });

  // Timeline of value activation
  const vY = 1.05;
  const vRowH = 0.45;
  const colMeseW = 0.7;
  const colSolW = 1.8;
  const colBenW = 3.2;
  const colSavW = 1.4;
  const colCumW = 1.4;
  const vX = 0.45;

  const hdr3 = (align = "center") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 8, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER }, margin: [2, 5, 2, 5]
  });
  const cell3 = (alt, align = "left") => ({
    fill: { color: alt ? TBL_ROW_B : TBL_ROW_A },
    color: GRAY, fontSize: 8, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.3, color: "1A1A30" }, margin: [2, 5, 2, 5]
  });
  const greenCell3 = (alt) => ({ ...cell3(alt, "right"), color: GREEN, bold: true });
  const cumCell = (alt) => ({ ...cell3(alt, "right"), color: PURPLE_L, bold: true });

  let tbl3 = [];
  tbl3.push([
    { text: "Rilascio", options: hdr3("left") },
    { text: "Soluzione", options: hdr3("left") },
    { text: "Cosa si sblocca", options: hdr3("left") },
    { text: "Risparmio/anno", options: hdr3("right") },
    { text: "Cumulativo", options: { ...hdr3("right"), color: GREEN } },
  ]);

  const valueRows = [
    { m: "Apr 2026", sol: "Venue Finder Evo", ben: "Presentazioni logistiche automatiche — 1.500 h/anno liberate", sav: "€36.400", cum: "€36.400", alt: false },
    { m: "Apr 2026", sol: "LeadMe Effic.", ben: "Pipeline visiva, alert lead dormienti, CRM consultabile in un click", sav: "Produttività", cum: "€36.400", alt: true },
    { m: "Mag 2026", sol: "Minutes Ext", ben: "+40% delle call ora coperte — trascrizione anche senza Teams", sav: "Produttività", cum: "€36.400", alt: false },
    { m: "Giu 2026", sol: "Crowd Stripe", ben: "Incassi integrati — piattaforma vendibile a terzi", sav: "Revenue", cum: "€36.400", alt: true },
    { m: "Lug 2026", sol: "Link Gestionale", ben: "Sostituzione Progress, quadratura BC, zero doppi inserimenti", sav: "€60.000", cum: "€96.400", alt: false },
    { m: "Ago 2026", sol: "Flow MVP", ben: "Task da Minutes → Kanban → Link. Coordinamento centralizzato", sav: "€125.174", cum: "€221.574", alt: true },
    { m: "Set 2026", sol: "OnSite App", ben: "App partecipanti, raccolta dati, NPS — up-sell per evento", sav: "Up-sell", cum: "€221.574", alt: false },
    { m: "Ott 2026", sol: "Sally 360°", ben: "Agente aziendale su tutti i dati — 120 richieste/sett. in meno", sav: "€77.486", cum: "€299.060", alt: true },
  ];

  valueRows.forEach(r => {
    tbl3.push([
      { text: r.m, options: cell3(r.alt) },
      { text: r.sol, options: { ...cell3(r.alt), bold: true, color: WHITE } },
      { text: r.ben, options: cell3(r.alt) },
      { text: r.sav, options: greenCell3(r.alt) },
      { text: r.cum, options: cumCell(r.alt) },
    ]);
  });

  s3.addTable(tbl3, {
    x: 0.45, y: vY, w: 9.1,
    colW: [colMeseW, colSolW, colBenW, colSavW, colCumW],
    rowH: [0.26, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28, 0.28],
  });

  // Bottom summary card
  const sumY = 3.75;
  s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: sumY, w: 9.1, h: 1.35,
    fill: { color: CARD }, rectRadius: 0.06
  });

  // Left: a regime
  s3.addText("A REGIME", {
    x: 0.65, y: sumY + 0.1, w: 2.5, h: 0.16,
    fontSize: 7, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1.5, margin: 0
  });
  s3.addText("€299.060/anno", {
    x: 0.65, y: sumY + 0.3, w: 2.5, h: 0.35,
    fontSize: 22, fontFace: FONT, color: GREEN, bold: true, margin: 0
  });
  s3.addText("di risparmio operativo quantificato\n+ revenue Crowd + up-sell OnSite", {
    x: 0.65, y: sumY + 0.68, w: 2.5, h: 0.4,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  // Vertical separator
  s3.addShape(pres.shapes.LINE, {
    x: 3.5, y: sumY + 0.15, w: 0, h: 1.05,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  // Center: payback
  s3.addText("PAYBACK TOTALE", {
    x: 3.75, y: sumY + 0.1, w: 2.5, h: 0.16,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s3.addText("~12 mesi", {
    x: 3.75, y: sumY + 0.3, w: 2.5, h: 0.35,
    fontSize: 22, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s3.addText("sul prezzo bundle\n~7 mesi post iperammortamento", {
    x: 3.75, y: sumY + 0.68, w: 2.5, h: 0.4,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  // Vertical separator
  s3.addShape(pres.shapes.LINE, {
    x: 6.6, y: sumY + 0.15, w: 0, h: 1.05,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  // Right: valore incrementale
  s3.addText("VALORE INCREMENTALE", {
    x: 6.85, y: sumY + 0.1, w: 2.5, h: 0.16,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s3.addText("Già da aprile", {
    x: 6.85, y: sumY + 0.3, w: 2.5, h: 0.35,
    fontSize: 22, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s3.addText("3 soluzioni live in 5 settimane.\nNon si aspetta la fine del progetto\nper vedere risultati.", {
    x: 6.85, y: sumY + 0.68, w: 2.5, h: 0.5,
    fontSize: 8, fontFace: FONT, color: MUTED, margin: 0
  });

  s3.addText("Risparmi a regime calcolati su anno intero. Nel 2026 il beneficio è pro-rata dalla data di attivazione.", {
    x: 0.45, y: 5.3, w: 8, h: 0.18,
    fontSize: 6, fontFace: FONT, color: "444444", margin: 0
  });
  heyai(s3);

  await pres.writeFile({ fileName: "/home/claude/Noloop_CashFlow_3slides.pptx" });
  console.log("Done!");
}

main().catch(console.error);