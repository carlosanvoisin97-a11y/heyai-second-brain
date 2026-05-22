const pptxgen = require("pptxgenjs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const sharp = require("sharp");
const { FaFileSignature, FaServer, FaRocket } = require("react-icons/fa");

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
  pres.title = "NOT - Roadmap e Piano di Investimento";

  const slide = pres.addSlide();
  slide.background = { color: "0B1D33" };

  // === TITLE AREA ===
  slide.addText("Roadmap e piano di investimento", {
    x: 0.6, y: 0.3, w: 7, h: 0.5,
    fontSize: 24, fontFace: "Calibri", color: "FFFFFF", bold: true, margin: 0
  });
  slide.addText("Piattaforma NOT \u2014 Moduli Logistica e Gestione Vendite", {
    x: 0.6, y: 0.75, w: 7, h: 0.3,
    fontSize: 12, fontFace: "Calibri", color: "7B9CC0", margin: 0
  });
  slide.addText("HeyAI S.r.l.", {
    x: 7.8, y: 0.35, w: 1.8, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: "5A7A9E", align: "right", margin: 0
  });

  // === GANTT BARS ===
  const barY = 1.35;
  const barH = 0.55;
  const barStartX = 0.6;
  const totalW = 8.8;
  const phases = [
    { name: "Discovery & design", weeks: "Sett. 1\u20134", flex: 4, fill: "1C5D99", textColor: "CADCFC" },
    { name: "Sviluppo core", weeks: "Sett. 5\u201312", flex: 8, fill: "0F6E56", textColor: "C8F0E0" },
    { name: "Test & go-live", weeks: "Sett. 13\u201316", flex: 4, fill: "6B5DC7", textColor: "E8E5FA" },
    { name: "Hypercare", weeks: "Sett. 17\u201320", flex: 4, fill: "1A2E47", textColor: "7B9CC0" },
  ];
  const totalFlex = phases.reduce((s, p) => s + p.flex, 0);
  const gap = 0.04;
  let cx = barStartX;

  // Duration labels above bars
  phases.forEach(ph => {
    const w = (ph.flex / totalFlex) * totalW - gap;
    slide.addText(ph.weeks, {
      x: cx, y: barY - 0.22, w: w, h: 0.2,
      fontSize: 9, fontFace: "Calibri", color: "5A7A9E", align: "center", margin: 0
    });
    cx += w + gap;
  });

  // Bars
  cx = barStartX;
  phases.forEach(ph => {
    const w = (ph.flex / totalFlex) * totalW - gap;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: barY, w: w, h: barH,
      fill: { color: ph.fill }, rectRadius: 0.06
    });
    if (ph.name === "Hypercare") {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: cx, y: barY, w: w, h: barH,
        line: { color: "3A5068", width: 1 }, rectRadius: 0.06
      });
    }
    slide.addText(ph.name, {
      x: cx + 0.12, y: barY, w: w - 0.24, h: barH,
      fontSize: 11, fontFace: "Calibri", color: ph.textColor, bold: true, valign: "middle", margin: 0
    });
    cx += w + gap;
  });

  // Sub-labels row under bars
  const subLabels = [
    "Process mapping, backlog",
    "Form AI \u00B7 predittivo \u00B7 workflow \u00B7 cross-check",
    "Dashboard, UAT, pilota",
    "Supporto 8h/sett, rollout"
  ];
  cx = barStartX;
  phases.forEach((ph, i) => {
    const w = (ph.flex / totalFlex) * totalW - gap;
    slide.addText(subLabels[i], {
      x: cx, y: barY + barH + 0.02, w: w, h: 0.2,
      fontSize: 8, fontFace: "Calibri", color: "5A7A9E", align: "center", margin: 0
    });
    cx += w + gap;
  });

  // === DIVIDER ===
  slide.addShape(pres.shapes.LINE, {
    x: 0.6, y: 2.35, w: 8.8, h: 0,
    line: { color: "1E3A56", width: 0.5 }
  });

  // === SECTION LABEL ===
  slide.addText("PIANO PAGAMENTI", {
    x: 0.6, y: 2.45, w: 3, h: 0.25,
    fontSize: 9, fontFace: "Calibri", color: "5A7A9E", charSpacing: 2, margin: 0
  });

  // === MILESTONE PAYMENTS ===
  const msY = 2.85;
  const milestones = [
    { label: "Firma contratto", amount: "\u20AC 50.000", pct: "40%", color: "4A9FD9", xCenter: 1.2 },
    { label: "Core in staging", amount: "\u20AC 37.500", pct: "30%", color: "1DB88E", xCenter: 5.4 },
    { label: "Rilascio produzione", amount: "\u20AC 37.500", pct: "30%", color: "8B7FE8", xCenter: 7.7 },
  ];

  // Icons
  const iconSign = await iconToBase64Png(FaFileSignature, "#4A9FD9");
  const iconServer = await iconToBase64Png(FaServer, "#1DB88E");
  const iconRocket = await iconToBase64Png(FaRocket, "#8B7FE8");
  const icons = [iconSign, iconServer, iconRocket];

  milestones.forEach((ms, i) => {
    // Vertical connector line from gantt area
    slide.addShape(pres.shapes.LINE, {
      x: ms.xCenter, y: 2.35, w: 0, h: 0.35,
      line: { color: ms.color, width: 1, dashType: "dash" }
    });
    // Icon circle
    slide.addShape(pres.shapes.OVAL, {
      x: ms.xCenter - 0.2, y: msY - 0.05, w: 0.4, h: 0.4,
      fill: { color: ms.color, transparency: 85 }
    });
    slide.addImage({
      data: icons[i],
      x: ms.xCenter - 0.12, y: msY + 0.03, w: 0.24, h: 0.24
    });
    // Label
    slide.addText(ms.label, {
      x: ms.xCenter - 0.8, y: msY + 0.4, w: 1.6, h: 0.2,
      fontSize: 10, fontFace: "Calibri", color: ms.color, bold: true, align: "center", margin: 0
    });
    // Amount
    slide.addText(ms.amount, {
      x: ms.xCenter - 0.8, y: msY + 0.58, w: 1.6, h: 0.22,
      fontSize: 14, fontFace: "Calibri", color: "FFFFFF", bold: true, align: "center", margin: 0
    });
    // Percentage
    slide.addText(ms.pct, {
      x: ms.xCenter - 0.5, y: msY + 0.78, w: 1, h: 0.18,
      fontSize: 9, fontFace: "Calibri", color: "5A7A9E", align: "center", margin: 0
    });
  });

  // === DIVIDER 2 ===
  slide.addShape(pres.shapes.LINE, {
    x: 0.6, y: 3.95, w: 8.8, h: 0,
    line: { color: "1E3A56", width: 0.5 }
  });

  // === KPI CARDS ===
  const kpiY = 4.1;
  const kpiH = 0.85;
  const kpiW = 2.05;
  const kpiGap = 0.13;
  const kpiStartX = 0.6;

  const kpis = [
    { val: "\u20AC 125.000", lbl: "Investimento totale", valColor: "FFFFFF" },
    { val: "\u20AC 161.435", lbl: "Saving annuo conservativo", valColor: "1DB88E" },
    { val: "~ \u20AC 71.000", lbl: "Costo netto post\niper-ammortamento*", valColor: "4A9FD9" },
    { val: "< 10 mesi", lbl: "Payback", valColor: "8B7FE8" },
  ];

  kpis.forEach((kpi, i) => {
    const kx = kpiStartX + i * (kpiW + kpiGap);
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: kx, y: kpiY, w: kpiW, h: kpiH,
      fill: { color: "132840" }, rectRadius: 0.08
    });
    slide.addText(kpi.val, {
      x: kx, y: kpiY + 0.1, w: kpiW, h: 0.35,
      fontSize: 20, fontFace: "Calibri", color: kpi.valColor, bold: true, align: "center", valign: "middle", margin: 0
    });
    slide.addText(kpi.lbl, {
      x: kx + 0.1, y: kpiY + 0.48, w: kpiW - 0.2, h: 0.32,
      fontSize: 9, fontFace: "Calibri", color: "5A7A9E", align: "center", valign: "top", margin: 0
    });
  });

  // === FOOTNOTE ===
  slide.addText(
    "* Simulazione indicativa iper-ammortamento 140% \u2014 consultare fiscalista. Saving scenario conservativo (efficienza 30-65%). Hypercare 4 sett. incluse.",
    {
      x: 0.6, y: 5.1, w: 8.8, h: 0.3,
      fontSize: 8, fontFace: "Calibri", color: "3A5068", margin: 0
    }
  );

  await pres.writeFile({ fileName: "/home/claude/NOT_Roadmap.pptx" });
  console.log("PPTX created successfully");
}

main().catch(console.error);