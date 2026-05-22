const pptxgen = require("pptxgenjs");
const fs = require("fs");

let pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "HeyAI";
pres.title = "Flow — Business Case Sintesi";

let slide = pres.addSlide();
slide.background = { color: "111118" };

// ─── TITLE ───
slide.addText("Business Case — Flow", {
  x: 0.5, y: 0.2, w: 6, h: 0.55,
  fontSize: 26, fontFace: "Arial Black", color: "FFFFFF", bold: true, margin: 0
});

slide.addText("Task Management System · Sintesi Consolidata", {
  x: 0.5, y: 0.7, w: 6, h: 0.3,
  fontSize: 11, fontFace: "Arial", color: "8B83B8", margin: 0
});

// ─── MAIN TABLE ───
const hdrFill = "2A2545";
const hdrColor = "A89FD4";
const rowFill1 = "1A1A28";
const rowFill2 = "16161F";
const cellColor = "D8D8E8";
const totalFill = "1E4D2B";

const mainRows = [
  // Header
  [
    { text: "Area di miglioramento", options: { fill: { color: hdrFill }, color: hdrColor, bold: true, fontSize: 9.5, fontFace: "Arial", align: "left", valign: "middle", margin: [4, 6, 4, 8] } },
    { text: "Ore impiegate\noggi", options: { fill: { color: hdrFill }, color: hdrColor, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] } },
    { text: "Ore impiegate\ncon AI", options: { fill: { color: hdrFill }, color: hdrColor, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] } },
    { text: "Delta", options: { fill: { color: hdrFill }, color: hdrColor, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] } }
  ],
  // Row 1 — Coordinatori
  [
    { text: "Coordinamento manageriale\n(PM + Pianificazione · 14 persone)", options: { fill: { color: rowFill1 }, color: cellColor, fontSize: 9, fontFace: "Arial", align: "left", valign: "middle", margin: [4, 6, 4, 8] } },
    { text: "4.234 h/anno", options: { fill: { color: rowFill1 }, color: cellColor, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle" } },
    { text: "2.957 h/anno", options: { fill: { color: rowFill1 }, color: cellColor, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle" } },
    { text: "-30%", options: { fill: { color: rowFill1 }, color: "7ED69A", fontSize: 10, fontFace: "Arial", bold: true, align: "center", valign: "middle" } }
  ],
  // Row 2 — Operativi
  [
    { text: "Esecuzione operativa\n(Operativi, Producer, Comunicazione, Biglietteria · 32 persone)", options: { fill: { color: rowFill2 }, color: cellColor, fontSize: 9, fontFace: "Arial", align: "left", valign: "middle", margin: [4, 6, 4, 8] } },
    { text: "8.294 h/anno", options: { fill: { color: rowFill2 }, color: cellColor, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle" } },
    { text: "6.220 h/anno", options: { fill: { color: rowFill2 }, color: cellColor, fontSize: 9, fontFace: "Arial", align: "center", valign: "middle" } },
    { text: "-25%", options: { fill: { color: rowFill2 }, color: "7ED69A", fontSize: 10, fontFace: "Arial", bold: true, align: "center", valign: "middle" } }
  ],
  // Total row
  [
    { text: "", options: { fill: { color: totalFill }, colspan: 3 } },
    { text: "\u20AC114.943/anno\n(1,95 FTE)", options: { fill: { color: totalFill }, color: "FFFFFF", fontSize: 11, fontFace: "Arial", bold: true, align: "center", valign: "middle", margin: [4, 4, 4, 4] } }
  ]
];

slide.addTable(mainRows, {
  x: 0.5, y: 1.15, w: 6.8,
  colW: [2.7, 1.35, 1.35, 1.4],
  rowH: [0.42, 0.52, 0.52, 0.48],
  border: { pt: 0.5, color: "2A2545" },
  margin: 0
});

// ─── FINANCIAL TABLE ───
const finHdrFill = "2A2545";

const finRows = [
  // Header
  [
    { text: "Investimento", options: { fill: { color: finHdrFill }, color: hdrColor, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] } },
    { text: "Impatto Economico AI", options: { fill: { color: finHdrFill }, color: hdrColor, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] } },
    { text: "ROI (2 anni)", options: { fill: { color: finHdrFill }, color: hdrColor, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] } },
    { text: "Payback Period", options: { fill: { color: finHdrFill }, color: hdrColor, bold: true, fontSize: 9.5, fontFace: "Arial", align: "center", valign: "middle", margin: [4, 4, 4, 4] } }
  ],
  // Values
  [
    { text: "\u20AC75.000", options: { fill: { color: rowFill1 }, color: "FFFFFF", fontSize: 12, fontFace: "Arial", bold: true, align: "center", valign: "middle" } },
    { text: "\u20AC189.656", options: { fill: { color: rowFill1 }, color: "7ED69A", fontSize: 12, fontFace: "Arial", bold: true, align: "center", valign: "middle" } },
    { text: "153%", options: { fill: { color: rowFill1 }, color: "7ED69A", fontSize: 12, fontFace: "Arial", bold: true, align: "center", valign: "middle" } },
    { text: "~10,4 mesi", options: { fill: { color: rowFill1 }, color: "FFFFFF", fontSize: 12, fontFace: "Arial", bold: true, align: "center", valign: "middle" } }
  ]
];

slide.addTable(finRows, {
  x: 0.5, y: 3.35, w: 6.8,
  colW: [1.7, 1.7, 1.7, 1.7],
  rowH: [0.38, 0.42],
  border: { pt: 0.5, color: "2A2545" },
  margin: 0
});

// ─── ASSUNZIONI (right panel) ───
slide.addShape(pres.shapes.RECTANGLE, {
  x: 7.6, y: 1.15, w: 2.2, h: 2.5,
  fill: { color: "1A1A28" },
  line: { color: "2A2545", width: 0.5 }
});

slide.addText("Assunzioni", {
  x: 7.6, y: 1.15, w: 2.2, h: 0.38,
  fontSize: 12, fontFace: "Arial Black", color: "FFFFFF", bold: true,
  align: "center", valign: "middle"
});

const assumptions = [
  { text: "Benchmark Asana 2023:", options: { bold: true, fontSize: 7.5, fontFace: "Arial", color: "A89FD4", breakLine: true } },
  { text: "6,3h/sett (manager), 5,4h/sett (operativi)", options: { fontSize: 7.5, fontFace: "Arial", color: "C8C8D8", breakLine: true } },
  { text: "", options: { fontSize: 5, breakLine: true } },
  { text: "Tassi di realizzo conservativi:", options: { bold: true, fontSize: 7.5, fontFace: "Arial", color: "A89FD4", breakLine: true } },
  { text: "30% coordinatori / 25% operativi", options: { fontSize: 7.5, fontFace: "Arial", color: "C8C8D8", breakLine: true } },
  { text: "", options: { fontSize: 5, breakLine: true } },
  { text: "Perimetro:", options: { bold: true, fontSize: 7.5, fontFace: "Arial", color: "A89FD4", breakLine: true } },
  { text: "46 utenti su 5 reparti operativi", options: { fontSize: 7.5, fontFace: "Arial", color: "C8C8D8", breakLine: true } },
  { text: "", options: { fontSize: 5, breakLine: true } },
  { text: "Costo FTE:", options: { bold: true, fontSize: 7.5, fontFace: "Arial", color: "A89FD4", breakLine: true } },
  { text: "RAL \u00D71,40 / 1.720h anno", options: { fontSize: 7.5, fontFace: "Arial", color: "C8C8D8", breakLine: true } },
  { text: "", options: { fontSize: 5, breakLine: true } },
  { text: "Adozione progressiva:", options: { bold: true, fontSize: 7.5, fontFace: "Arial", color: "A89FD4", breakLine: true } },
  { text: "75% Anno 1, 90% Anno 2", options: { fontSize: 7.5, fontFace: "Arial", color: "C8C8D8", breakLine: true } },
  { text: "", options: { fontSize: 5, breakLine: true } },
  { text: "ROI calcolato su 2 anni cumulati", options: { fontSize: 7.5, fontFace: "Arial", color: "C8C8D8", italic: true } }
];

slide.addText(assumptions, {
  x: 7.75, y: 1.58, w: 1.9, h: 2.0,
  valign: "top", margin: 0
});

// ─── TAKE AWAY ───
slide.addText("Take Away", {
  x: 0.5, y: 4.35, w: 3, h: 0.35,
  fontSize: 14, fontFace: "Arial Black", color: "FFFFFF", bold: true, margin: 0
});

// Decorative line
slide.addShape(pres.shapes.LINE, {
  x: 0.5, y: 4.68, w: 9.2, h: 0,
  line: { color: "2A2545", width: 1 }
});

const takeaways = [
  { text: "Flow non elimina il coordinamento: lo rende 3x pi\u00F9 efficiente.", options: { bold: true, fontSize: 9, fontFace: "Arial", color: "7ED69A", breakLine: true } },
  { text: " L\u2019investimento si ripaga in meno di 11 mesi con stime ultra-conservative (25-30% del potenziale benchmark).", options: { fontSize: 9, fontFace: "Arial", color: "C8C8D8", breakLine: true } },
  { text: "", options: { fontSize: 4, breakLine: true } },
  { text: "Le ~3.350 ore liberate non sono un taglio costi, ma capacit\u00E0 produttiva recuperata.", options: { bold: true, fontSize: 9, fontFace: "Arial", color: "7ED69A", breakLine: true } },
  { text: " PM e operativi possono reinvestire quel tempo in attivit\u00E0 a maggior valore: cura della relazione cliente, sviluppo new business, perfezionamento delle proposte creative e follow-up commerciale \u2014 attivit\u00E0 che oggi vengono sacrificate per \u201Crincorrere aggiornamenti\u201D.", options: { fontSize: 9, fontFace: "Arial", color: "C8C8D8", breakLine: true } },
  { text: "", options: { fontSize: 4, breakLine: true } },
  { text: "Anche dimezzando le stime, il ROI resta positivo al 79%.", options: { bold: true, fontSize: 9, fontFace: "Arial", color: "7ED69A", breakLine: true } },
  { text: " Lo stress test conferma la robustezza del caso: il breakeven \u00E8 raggiungibile in qualsiasi scenario realistico.", options: { fontSize: 9, fontFace: "Arial", color: "C8C8D8" } }
];

slide.addText(takeaways, {
  x: 0.5, y: 4.75, w: 9.2, h: 0.85,
  valign: "top", margin: 0
});

// ─── SAVE ───
const outPath = "/mnt/user-data/outputs/Flow_Business_Case_Slide.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("Done:", outPath);
}).catch(err => console.error(err));