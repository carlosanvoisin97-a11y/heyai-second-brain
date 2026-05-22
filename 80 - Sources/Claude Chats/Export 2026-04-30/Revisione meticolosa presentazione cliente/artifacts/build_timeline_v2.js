const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";

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
    x: 0.45, y: 0.12, w: 8, h: 0.5,
    fontSize: 30, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s1.addText("Timeline indicativa con rilasci incrementali. Partenza prevista: ultima settimana di marzo 2026.", {
    x: 0.45, y: 0.58, w: 9, h: 0.2,
    fontSize: 9.5, fontFace: FONT, color: GRAY, margin: 0
  });

  // Month headers - 8 months
  const months1 = ["MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT"];
  const cX = 2.35;
  const cW = 7.3;
  const mW = cW / 8;
  const cY = 0.88;

  months1.forEach((m, i) => {
    const mx = cX + i * mW;
    s1.addText(m, {
      x: mx, y: cY, w: mW, h: 0.18,
      fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, align: "center", margin: 0
    });
    if (i > 0) {
      s1.addShape(pres.shapes.LINE, {
        x: mx, y: cY + 0.2, w: 0, h: 3.35,
        line: { color: "1A1A30", width: 0.3, dashType: "dash" }
      });
    }
  });

  s1.addShape(pres.shapes.LINE, {
    x: cX, y: cY + 0.2, w: cW, h: 0,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  const barH = 0.18;
  const rowH = 0.34;
  const startY = cY + 0.28;

  // Draw a full project bar with 3 milestones
  const drawProject = (name, color, startM, mvpM, endM, yRow) => {
    const y = startY + yRow * rowH;
    const bx = cX + startM * mW;
    const bw = (endM - startM) * mW;
    const mvpX = cX + mvpM * mW;
    const endX = cX + endM * mW;

    // Solution label
    s1.addText(name, {
      x: 0.25, y: y - 0.02, w: 2.05, h: barH + 0.04,
      fontSize: 7.5, fontFace: FONT, color: WHITE, valign: "middle", align: "right", margin: 0
    });

    // Bar
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: y, w: bw, h: barH,
      fill: { color }, rectRadius: 0.02
    });

    // Diamond: start (hollow/small)
    s1.addText("▸", {
      x: bx - 0.06, y: y - 0.03, w: 0.14, h: barH + 0.06,
      fontSize: 8, fontFace: FONT, color: WHITE, align: "center", valign: "middle", margin: 0
    });

    // Diamond: MVP (filled)
    s1.addText("◆", {
      x: mvpX - 0.07, y: y - 0.03, w: 0.14, h: barH + 0.06,
      fontSize: 8, fontFace: FONT, color: WHITE, align: "center", valign: "middle", margin: 0
    });

    // Diamond: Final delivery (filled, slightly bigger)
    s1.addText("◆", {
      x: endX - 0.09, y: y - 0.04, w: 0.18, h: barH + 0.08,
      fontSize: 10, fontFace: FONT, color: WHITE, align: "center", valign: "middle", margin: 0
    });
  };

  // Priority labels
  s1.addText("PRIORITÀ 1", {
    x: 0.25, y: startY - 0.12, w: 1.0, h: 0.14,
    fontSize: 6, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1.5, margin: 0
  });

  // P1: month units - 0=Mar1, 0.8=Mar24, 1=Apr1, 1.5=Apr15, 2=May1...
  drawProject("Venue Finder",   GREEN, 0.8, 1.3, 1.8,  0);   // Mar24→MVP mid-Apr→Final end Apr
  drawProject("LeadMe Effic.",  GREEN, 0.8, 1.2, 1.5,  1);   // Mar24→MVP early Apr→Final Apr15
  drawProject("Minutes Ext",    GREEN, 0.8, 1.3, 1.8,  2);   // Mar24→MVP mid-Apr→Final end Apr

  s1.addText("PRIORITÀ 2", {
    x: 0.25, y: startY + 3 * rowH - 0.12, w: 1.0, h: 0.14,
    fontSize: 6, fontFace: FONT, color: ORANGE, bold: true, charSpacing: 1.5, margin: 0
  });

  drawProject("Link Gestionale", PURPLE_D, 0.8, 2.8, 4.5,  3); // Mar24(analysis)→MVP Jun→Final Jul-Aug
  drawProject("Crowd Incassi",   ORANGE,   1.5, 2.3, 2.8,  4); // Mid-Apr→MVP May→Final Jun
  drawProject("Flow MVP",        ORANGE,   1.8, 3.5, 4.8,  5); // End Apr→MVP Jul→Final Aug

  s1.addText("PRIORITÀ 3", {
    x: 0.25, y: startY + 6 * rowH - 0.12, w: 1.0, h: 0.14,
    fontSize: 6, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1.5, margin: 0
  });

  drawProject("OnSite App",     PURPLE_D, 3.5, 5.0, 6.0,  6); // Jun→MVP Aug→Final Sep
  drawProject("Sally 360°",     PURPLE_D, 0.8, 4.0, 7.5,  7); // Mar24→MVP continuous→Final with last

  // April 15 deadline line
  const apr15 = cX + 1.48 * mW;
  s1.addShape(pres.shapes.LINE, {
    x: apr15, y: cY + 0.2, w: 0, h: 0.95,
    line: { color: RED, width: 1.2 }
  });
  s1.addText("15/04", {
    x: apr15 - 0.17, y: cY + 0.2, w: 0.35, h: 0.12,
    fontSize: 5, fontFace: FONT, color: RED, bold: true, align: "center",
    fill: { color: "1A0505" }, margin: 0
  });

  // Legend
  const lgY1 = 4.1;
  s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: lgY1, w: 9.15, h: 0.85,
    fill: { color: CARD }, rectRadius: 0.04
  });

  // Priority legend
  const pLeg = [
    { color: GREEN, label: "Priorità 1 — partenza immediata" },
    { color: ORANGE, label: "Priorità 2 — strategiche" },
    { color: PURPLE_D, label: "Priorità 3 — a seguire" },
  ];
  pLeg.forEach((l, i) => {
    const lx = 0.65 + i * 3.0;
    s1.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: lx, y: lgY1 + 0.1, w: 0.28, h: 0.1,
      fill: { color: l.color }, rectRadius: 0.02
    });
    s1.addText(l.label, {
      x: lx + 0.36, y: lgY1 + 0.05, w: 2.5, h: 0.2,
      fontSize: 7, fontFace: FONT, color: GRAY, valign: "middle", margin: 0
    });
  });

  // Milestone legend
  s1.addText("▸ = avvio progetto     ◆ = rilascio MVP     ◆ = consegna finale", {
    x: 0.65, y: lgY1 + 0.32, w: 5, h: 0.18,
    fontSize: 7, fontFace: FONT, color: MUTED, margin: 0
  });

  s1.addText("Sally è trasversale a tutti gli applicativi: parte subito e cresce con ogni rilascio, completandosi con l'ultimo modulo.", {
    x: 0.65, y: lgY1 + 0.52, w: 8, h: 0.18,
    fontSize: 7, fontFace: FONT, color: MUTED, italic: true, margin: 0
  });

  s1.addText("Timeline indicativa soggetta a validazione tecnica. Rilasci incrementali con test utente tra le fasi.", {
    x: 0.45, y: 5.3, w: 7, h: 0.15,
    fontSize: 6, fontFace: FONT, color: "444444", margin: 0
  });
  heyai(s1);

  // =============================================
  // SLIDE 2: PIANO DI FATTURAZIONE E FLUSSO DI CASSA
  // =============================================
  let s2 = pres.addSlide();
  s2.background = { color: BG };

  s2.addText("Piano di Fatturazione e Flusso di Cassa", {
    x: 0.45, y: 0.15, w: 9, h: 0.5,
    fontSize: 28, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText("Tranche 35% acconto / 30% a metà progetto / 35% al rilascio — pagamenti dilazionati sui rilasci incrementali.", {
    x: 0.45, y: 0.6, w: 9, h: 0.2,
    fontSize: 9.5, fontFace: FONT, color: GRAY, margin: 0
  });

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
    { m: "Mar 2026", sol: "VF · LeadMe · Minutes · Link · Sally", tr: "T1 (acconti avvio)", esb: "€68.425", cum: "€68.425", alt: false },
    { m: "Apr 2026", sol: "VF · LeadMe · Minutes · Crowd", tr: "T2+T3 Quick Wins · T1 Crowd", esb: "€30.950", cum: "€99.375", alt: true },
    { m: "Mag 2026", sol: "Crowd · Flow", tr: "T2 Crowd · T1 Flow", esb: "€22.000", cum: "€121.375", alt: false },
    { m: "Giu 2026", sol: "Crowd · Link · Flow", tr: "T3 Crowd · T2 Link", esb: "€27.750", cum: "€149.125", alt: true },
    { m: "Lug 2026", sol: "Link · Flow · OnSite", tr: "T3 Link · T2 Flow · T1 OnSite", esb: "€52.450", cum: "€201.575", alt: false },
    { m: "Ago 2026", sol: "Flow · OnSite", tr: "T3 Flow · T2 OnSite", esb: "€27.100", cum: "€228.675", alt: true },
    { m: "Set 2026", sol: "OnSite · Sally", tr: "T3 OnSite · T2 Sally", esb: "€34.150", cum: "€262.825", alt: false },
    { m: "Ott 2026", sol: "Sally", tr: "T3 Sally", esb: "€26.775", cum: "€289.600", alt: true },
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
    x: 0.45, y: 0.92, w: 9.1,
    colW: [0.82, 2.3, 2.5, 1.2, 1.15],
    rowH: [0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24],
  });

  // 3 KPI boxes
  const kpiY = 3.4;
  const kpiH = 1.1;
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
    x: k1x + 0.15, y: kpiY + 0.08, w: kpiW - 0.3, h: 0.15,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("€290.500", {
    x: k1x + 0.15, y: kpiY + 0.25, w: kpiW - 0.3, h: 0.3,
    fontSize: 22, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText("Fatturato su 8 mesi (Mar–Ott)\nPicco mensile: ~€68K (marzo)\nMese più leggero: ~€22K (maggio)", {
    x: k1x + 0.15, y: kpiY + 0.58, w: kpiW - 0.3, h: 0.42,
    fontSize: 7.5, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 2: Dilazione
  const k2x = k1x + kpiW + kpiGap;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: k2x, y: kpiY, w: kpiW, h: kpiH,
    fill: { color: CARD }, rectRadius: 0.05
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: k2x, y: kpiY, w: 0.04, h: kpiH, fill: { color: GREEN }
  });
  s2.addText("DILAZIONE PAGAMENTI", {
    x: k2x + 0.15, y: kpiY + 0.08, w: kpiW - 0.3, h: 0.15,
    fontSize: 7, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("8 mesi", {
    x: k2x + 0.15, y: kpiY + 0.25, w: kpiW - 0.3, h: 0.3,
    fontSize: 22, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText("Pagamenti distribuiti Mar → Ott\nOgni tranche legata a un rilascio\nInteramente in competenza 2026", {
    x: k2x + 0.15, y: kpiY + 0.58, w: kpiW - 0.3, h: 0.42,
    fontSize: 7.5, fontFace: FONT, color: MUTED, margin: 0
  });

  // Box 3: Agevolazioni
  const k3x = k2x + kpiW + kpiGap;
  s2.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: k3x, y: kpiY, w: kpiW, h: kpiH,
    fill: { color: CARD }, rectRadius: 0.05
  });
  s2.addShape(pres.shapes.RECTANGLE, {
    x: k3x, y: kpiY, w: 0.04, h: kpiH, fill: { color: PURPLE_L }
  });
  s2.addText("AGEVOLAZIONI FISCALI", {
    x: k3x + 0.15, y: kpiY + 0.08, w: kpiW - 0.3, h: 0.15,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s2.addText("Cumulabili", {
    x: k3x + 0.15, y: kpiY + 0.25, w: kpiW - 0.3, h: 0.3,
    fontSize: 22, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s2.addText("Iperammortamento, Patent Box, bandi\nfondo perduto e altre agevolazioni\napplicabili su investimenti digitali", {
    x: k3x + 0.15, y: kpiY + 0.58, w: kpiW - 0.3, h: 0.42,
    fontSize: 7.5, fontFace: FONT, color: MUTED, margin: 0
  });

  s2.addText("Il piano di pagamento è indicativo e legato ai rilasci effettivi. Ogni tranche è condizionata alla validazione del deliverable.", {
    x: 0.45, y: 5.3, w: 8, h: 0.15,
    fontSize: 6, fontFace: FONT, color: "444444", margin: 0
  });
  heyai(s2);

  // =============================================
  // SLIDE 3: QUANDO IL VALORE SI ATTIVA
  // =============================================
  let s3 = pres.addSlide();
  s3.background = { color: BG };

  s3.addText("Quando il Valore si Attiva", {
    x: 0.45, y: 0.15, w: 9, h: 0.5,
    fontSize: 30, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s3.addText("Ad ogni rilascio si attiva un beneficio misurabile. Il valore è incrementale, non si aspetta la fine del progetto.", {
    x: 0.45, y: 0.6, w: 9, h: 0.2,
    fontSize: 9.5, fontFace: FONT, color: GRAY, margin: 0
  });

  const hdr3 = (align = "center") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 7.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER }, margin: [2, 4, 2, 4]
  });
  const cell3 = (alt, align = "left") => ({
    fill: { color: alt ? TBL_ROW_B : TBL_ROW_A },
    color: GRAY, fontSize: 7.5, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.3, color: "1A1A30" }, margin: [2, 4, 2, 4]
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
    { m: "Apr 2026", sol: "Minutes Ext", ben: "+40% delle call ora coperte — trascrizione anche senza Teams", sav: "Produttività", cum: "€36.400", alt: false },
    { m: "Giu 2026", sol: "Crowd Incassi", ben: "Incassi integrati — piattaforma vendibile a terzi", sav: "Revenue", cum: "€36.400", alt: true },
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
    x: 0.45, y: 0.92, w: 9.1,
    colW: [0.7, 1.55, 3.45, 1.2, 1.2],
    rowH: [0.24, 0.27, 0.27, 0.27, 0.27, 0.27, 0.27, 0.27, 0.27],
  });

  // Bottom summary card
  const sumY = 3.55;
  s3.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.45, y: sumY, w: 9.1, h: 1.5,
    fill: { color: CARD }, rectRadius: 0.06
  });

  // Left: a regime
  s3.addText("A REGIME", {
    x: 0.65, y: sumY + 0.1, w: 2.5, h: 0.15,
    fontSize: 7, fontFace: FONT, color: GREEN, bold: true, charSpacing: 1.5, margin: 0
  });
  s3.addText("€299.060/anno", {
    x: 0.65, y: sumY + 0.3, w: 2.5, h: 0.33,
    fontSize: 21, fontFace: FONT, color: GREEN, bold: true, margin: 0
  });
  s3.addText("di risparmio operativo quantificato\n+ revenue Crowd + up-sell OnSite", {
    x: 0.65, y: sumY + 0.68, w: 2.5, h: 0.4,
    fontSize: 7.5, fontFace: FONT, color: MUTED, margin: 0
  });
  s3.addText("Pro-rata 2026 (Apr–Dic):\n~€190K di risparmio già nel primo anno", {
    x: 0.65, y: sumY + 1.05, w: 2.5, h: 0.35,
    fontSize: 7.5, fontFace: FONT, color: MUTED, italic: true, margin: 0
  });

  // Vertical separator
  s3.addShape(pres.shapes.LINE, {
    x: 3.5, y: sumY + 0.15, w: 0, h: 1.2,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  // Center: payback
  s3.addText("PAYBACK TOTALE", {
    x: 3.75, y: sumY + 0.1, w: 2.5, h: 0.15,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s3.addText("~12 mesi", {
    x: 3.75, y: sumY + 0.3, w: 2.5, h: 0.33,
    fontSize: 21, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s3.addText("sul prezzo bundle", {
    x: 3.75, y: sumY + 0.68, w: 2.5, h: 0.2,
    fontSize: 7.5, fontFace: FONT, color: MUTED, margin: 0
  });
  s3.addText("Con le agevolazioni fiscali applicabili,\nil payback si riduce ulteriormente", {
    x: 3.75, y: sumY + 1.05, w: 2.5, h: 0.35,
    fontSize: 7.5, fontFace: FONT, color: MUTED, italic: true, margin: 0
  });

  // Vertical separator
  s3.addShape(pres.shapes.LINE, {
    x: 6.6, y: sumY + 0.15, w: 0, h: 1.2,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  // Right: valore incrementale
  s3.addText("VALORE INCREMENTALE", {
    x: 6.85, y: sumY + 0.1, w: 2.5, h: 0.15,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });
  s3.addText("Già da aprile", {
    x: 6.85, y: sumY + 0.3, w: 2.5, h: 0.33,
    fontSize: 21, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s3.addText("3 soluzioni live in 5 settimane.\nNon si aspetta la fine del progetto\nper vedere risultati.", {
    x: 6.85, y: sumY + 0.68, w: 2.5, h: 0.45,
    fontSize: 7.5, fontFace: FONT, color: MUTED, margin: 0
  });
  s3.addText("5,03 FTE liberati a regime\ncapacità di crescere senza assumere", {
    x: 6.85, y: sumY + 1.05, w: 2.5, h: 0.35,
    fontSize: 7.5, fontFace: FONT, color: MUTED, italic: true, margin: 0
  });

  s3.addText("Risparmi a regime calcolati su anno intero. Nel 2026 il beneficio è pro-rata dalla data di attivazione di ciascuna soluzione.", {
    x: 0.45, y: 5.3, w: 8, h: 0.15,
    fontSize: 6, fontFace: FONT, color: "444444", margin: 0
  });
  heyai(s3);

  await pres.writeFile({ fileName: "/home/claude/Noloop_Timeline_v2.pptx" });
  console.log("Done!");
}

main().catch(console.error);