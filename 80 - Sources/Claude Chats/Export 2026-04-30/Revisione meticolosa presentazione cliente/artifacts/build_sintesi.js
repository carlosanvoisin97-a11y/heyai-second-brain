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
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const MUTED = "9090A8";
  const FONT = "Calibri";

  let s = pres.addSlide();
  s.background = { color: BG };

  s.addText("Sintesi Economica", {
    x: 0.55, y: 0.3, w: 9, h: 0.6,
    fontSize: 38, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });

  // === LEFT: Confermato ===
  const lx = 0.55, ly = 1.2, lw = 4.2;

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: lx, y: ly, w: lw, h: 2.8,
    fill: { color: CARD }, rectRadius: 0.06
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: lx, y: ly, w: lw, h: 0.04, fill: { color: GREEN }
  });

  s.addText("Pacchetto Confermato", {
    x: lx + 0.2, y: ly + 0.15, w: lw - 0.4, h: 0.3,
    fontSize: 15, fontFace: FONT, color: GREEN, bold: true, margin: 0
  });
  s.addText("6 soluzioni: VF · Link · Sally · OnSite · Crowd · Minutes", {
    x: lx + 0.2, y: ly + 0.45, w: lw - 0.4, h: 0.2,
    fontSize: 8.5, fontFace: FONT, color: MUTED, margin: 0
  });

  const hdr = (align = "right") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 9, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER }, margin: [3, 6, 3, 6]
  });
  const row = (alt, align = "right") => ({
    fill: { color: alt ? TBL_ROW_B : TBL_ROW_A },
    color: GRAY, fontSize: 9, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.3, color: "1A1A30" }, margin: [3, 6, 3, 6]
  });
  const greenR = (alt) => ({ ...row(alt), color: GREEN, bold: true });

  let t1 = [];
  t1.push([
    { text: "", options: hdr("left") },
    { text: "Bundle", options: hdr() },
    { text: "Post Iper", options: { ...hdr(), color: GREEN } },
  ]);
  t1.push([
    { text: "Investimento", options: row(false, "left") },
    { text: "€216.500", options: row(false) },
    { text: "€122.972", options: greenR(false) },
  ]);
  t1.push([
    { text: "Risparmio Iperammort.", options: row(true, "left") },
    { text: "", options: row(true) },
    { text: "- €93.528", options: { ...row(true), color: PURPLE_L } },
  ]);
  t1.push([
    { text: "Risparmio operativo/anno", options: row(false, "left") },
    { text: "€173.886", options: row(false) },
    { text: "€173.886", options: row(false) },
  ]);
  t1.push([
    { text: "Payback", options: row(true, "left") },
    { text: "~15 mesi", options: row(true) },
    { text: "~8,5 mesi", options: greenR(true) },
  ]);

  s.addTable(t1, {
    x: lx + 0.15, y: ly + 0.75, w: lw - 0.3,
    colW: [1.6, 1.1, 1.2],
    rowH: [0.28, 0.28, 0.28, 0.28, 0.28],
  });

  // === RIGHT: Con Flow ===
  const rx = 5.2, ry = ly, rw = 4.2;

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: rx, y: ry, w: rw, h: 2.8,
    fill: { color: CARD }, rectRadius: 0.06,
    line: { color: PURPLE_D, width: 1 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: rx, y: ry, w: rw, h: 0.04, fill: { color: PURPLE_D }
  });

  s.addText("Con Flow Incluso", {
    x: rx + 0.2, y: ry + 0.15, w: rw - 0.4, h: 0.3,
    fontSize: 15, fontFace: FONT, color: PURPLE_L, bold: true, margin: 0
  });
  s.addText("7 soluzioni: confermato + Flow Task Management *", {
    x: rx + 0.2, y: ry + 0.45, w: rw - 0.4, h: 0.2,
    fontSize: 8.5, fontFace: FONT, color: MUTED, margin: 0
  });

  let t2 = [];
  t2.push([
    { text: "", options: hdr("left") },
    { text: "Bundle", options: hdr() },
    { text: "Post Iper", options: { ...hdr(), color: GREEN } },
  ]);
  t2.push([
    { text: "Investimento", options: row(false, "left") },
    { text: "€284.000", options: row(false) },
    { text: "€161.312", options: greenR(false) },
  ]);
  t2.push([
    { text: "Risparmio Iperammort.", options: row(true, "left") },
    { text: "", options: row(true) },
    { text: "- €122.688", options: { ...row(true), color: PURPLE_L } },
  ]);
  t2.push([
    { text: "Risparmio operativo/anno", options: row(false, "left") },
    { text: "€299.060", options: row(false) },
    { text: "€299.060", options: row(false) },
  ]);
  t2.push([
    { text: "Payback", options: row(true, "left") },
    { text: "~11 mesi", options: row(true) },
    { text: "~6,5 mesi", options: greenR(true) },
  ]);

  s.addTable(t2, {
    x: rx + 0.15, y: ry + 0.75, w: rw - 0.3,
    colW: [1.6, 1.1, 1.2],
    rowH: [0.28, 0.28, 0.28, 0.28, 0.28],
  });

  // Note
  s.addText("* Flow: in valutazione un MVP a perimetro ridotto con quotazione proporzionalmente inferiore.", {
    x: 0.55, y: 4.15, w: 8.5, h: 0.18,
    fontSize: 7, fontFace: FONT, color: MUTED, italic: true, margin: 0
  });

  // Disclaimer
  s.addText(
    "Iperammortamento illustrativo (L. 199/2025, magg. 180%, IRES 24%). Va validato con il consulente fiscale.", {
    x: 0.55, y: 5.35, w: 8, h: 0.18,
    fontSize: 6.5, fontFace: FONT, color: "555555", margin: 0
  });

  s.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35, fontFace: FONT, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Noloop_Sintesi_Economica.pptx" });
  console.log("Done!");
}

main().catch(console.error);