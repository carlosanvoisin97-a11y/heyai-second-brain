const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";

  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const TBL_HEADER = "2E2E3E";
  const PURPLE_L = "BAA4EB";
  const PURPLE_D = "5728B8";
  const GREEN = "66DDAB";
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const MUTED = "9090A8";
  const FONT = "Calibri";

  let s = pres.addSlide();
  s.background = { color: BG };

  s.addText("Evoluzioni Soluzioni Attive — Sintesi Investimento", {
    x: 0.55, y: 1.8, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });

  s.addText("Venue Finder Evolution · Crowd Integrazione Pagamenti · Minutes Call Esterne", {
    x: 0.55, y: 2.4, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONT, color: MUTED, margin: 0
  });

  const hdr = (align = "center") => ({
    fill: { color: TBL_HEADER }, color: PURPLE_L, bold: true,
    fontSize: 10, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: CARD_BORDER }, margin: [4, 8, 4, 8]
  });
  const val = (align = "center") => ({
    fill: { color: PURPLE_D }, color: WHITE, bold: true,
    fontSize: 12, fontFace: FONT, align, valign: "middle",
    border: { pt: 0.5, color: PURPLE_D }, margin: [4, 8, 4, 8]
  });

  let tbl = [];
  tbl.push([
    { text: "Investimento", options: hdr() },
    { text: "Risparmio Iperammort.", options: hdr() },
    { text: "Costo Effettivo Netto", options: { ...hdr(), color: GREEN } },
  ]);
  tbl.push([
    { text: "€33.000", options: val() },
    { text: "- €14.256", options: { ...val(), color: PURPLE_L } },
    { text: "€18.744", options: { ...val(), color: GREEN } },
  ]);

  s.addTable(tbl, {
    x: 1.5, y: 2.9, w: 7, colW: [2.33, 2.33, 2.34],
    rowH: [0.35, 0.4],
  });

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

  await pres.writeFile({ fileName: "/home/claude/Noloop_Evolutive_Sintesi.pptx" });
  console.log("Done!");
}

main().catch(console.error);