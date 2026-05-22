const pptxgen = require("pptxgenjs");

async function main() {
  let pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";

  const BG = "000000";
  const CARD = "232831";
  const CARD_BORDER = "2A2A3A";
  const PURPLE_L = "BAA4EB";
  const PURPLE_D = "5728B8";
  const GREEN = "66DDAB";
  const GREEN_ALT = "4CAF50";
  const ORANGE = "FF9800";
  const YELLOW = "FFD54F";
  const WHITE = "FFFFFF";
  const GRAY = "CCCCCC";
  const MUTED = "9090A8";
  const FONT = "Calibri";

  let s = pres.addSlide();
  s.background = { color: BG };

  s.addText("Roadmap di Sviluppo", {
    x: 0.4, y: 0.12, w: 7, h: 0.55,
    fontSize: 34, fontFace: FONT, color: WHITE, bold: true, margin: 0
  });
  s.addText("Timeline indicativa con rilasci incrementali e tranche di pagamento dilazionate.", {
    x: 0.4, y: 0.62, w: 9, h: 0.22,
    fontSize: 10, fontFace: FONT, color: GRAY, margin: 0
  });

  // Month headers
  const months = ["MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET"];
  const chartX = 2.6;
  const chartW = 7.0;
  const monthW = chartW / 7;
  const chartY = 1.0;

  months.forEach((m, i) => {
    const mx = chartX + i * monthW;
    s.addText(m, {
      x: mx, y: chartY, w: monthW, h: 0.22,
      fontSize: 8, fontFace: FONT, color: PURPLE_L, bold: true, align: "center", margin: 0
    });
    // Vertical grid
    if (i > 0) {
      s.addShape(pres.shapes.LINE, {
        x: mx, y: chartY + 0.22, w: 0, h: 3.6,
        line: { color: "1A1A30", width: 0.3, dashType: "dash" }
      });
    }
  });

  // Horizontal base line
  s.addShape(pres.shapes.LINE, {
    x: chartX, y: chartY + 0.24, w: chartW, h: 0,
    line: { color: CARD_BORDER, width: 0.5 }
  });

  // Solutions and their bars
  const barH = 0.28;
  const rowH = 0.44;
  const startY = chartY + 0.35;

  // Helper: month 0 = start of March, each month = 1.0
  // Mar starts at W12 (17/3), so mid-March = 0.5
  const bar = (solution, color, priority, startMonth, endMonth, yRow) => {
    const y = startY + yRow * rowH;
    const bx = chartX + startMonth * monthW;
    const bw = (endMonth - startMonth) * monthW;

    // Solution label (left side)
    s.addText(solution, {
      x: 0.4, y: y - 0.02, w: 2.15, h: barH,
      fontSize: 8.5, fontFace: FONT, color: WHITE, valign: "middle", align: "right", margin: [0,4,0,0]
    });

    // Priority dot
    const dotColors = { "🔴": "FF4444", "🟠": ORANGE, "🟡": YELLOW };
    s.addShape(pres.shapes.OVAL, {
      x: 0.25, y: y + 0.06, w: 0.12, h: 0.12,
      fill: { color: dotColors[priority] || MUTED }
    });

    // Bar
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: bx, y: y, w: bw, h: barH,
      fill: { color }, rectRadius: 0.03
    });

    // Delivery diamond
    s.addText("◆", {
      x: bx + bw - 0.08, y: y - 0.02, w: 0.16, h: barH,
      fontSize: 10, fontFace: FONT, color: WHITE, align: "center", valign: "middle", margin: 0
    });
  };

  // Draw bars (startMonth: 0=Mar 1, 0.5=mid-Mar, 1=Apr 1, etc.)
  bar("LeadMe Effic.",  GREEN,    "🔴", 0.5, 1.5,  0);  // mid-Mar → mid-Apr
  bar("Venue Finder",   GREEN,    "🔴", 0.5, 2.3,  1);  // mid-Mar → ~May 9
  bar("Minutes Ext",    GREEN,    "🔴", 1.0, 2.5,  2);  // Apr → mid-May
  bar("Crowd Stripe",   ORANGE,   "🟠", 2.4, 3.0,  3);  // mid-May → end May
  bar("OnSite App",     ORANGE,   "🟠", 3.0, 4.3,  4);  // Jun → mid-Jul
  bar("Link Gestionale",PURPLE_D, "🟠", 4.3, 6.4,  5);  // mid-Jul → mid-Sep
  bar("Sally 360°",     PURPLE_D, "🟡", 6.4, 7.0,  6);  // mid-Sep → (continues)
  bar("Flow MVP",       "555555", "🟡", 6.8, 7.0,  7);  // (roadmap indicator)

  // "Sally continua..." label
  s.addText("→ ott.", {
    x: chartX + chartW - 0.05, y: startY + 6 * rowH, w: 0.5, h: barH,
    fontSize: 7, fontFace: FONT, color: MUTED, valign: "middle", margin: 0
  });
  s.addText("→ nov.", {
    x: chartX + chartW - 0.05, y: startY + 7 * rowH, w: 0.5, h: barH,
    fontSize: 7, fontFace: FONT, color: MUTED, valign: "middle", margin: 0
  });

  // April 15 deadline marker
  const apr15x = chartX + 1.48 * monthW;
  s.addShape(pres.shapes.LINE, {
    x: apr15x, y: chartY + 0.22, w: 0, h: 0.55,
    line: { color: "FF4444", width: 1.5 }
  });
  s.addText("15/04", {
    x: apr15x - 0.2, y: chartY + 0.22, w: 0.45, h: 0.15,
    fontSize: 6, fontFace: FONT, color: "FF4444", bold: true, align: "center",
    fill: { color: "1A0000" }, margin: 0
  });

  // Legend bottom-left
  const lgY = 4.55;
  s.addShape(pres.shapes.OVAL, { x: 0.4, y: lgY, w: 0.12, h: 0.12, fill: { color: "FF4444" } });
  s.addText("Priorità 1 — Subito", { x: 0.58, y: lgY - 0.03, w: 1.5, h: 0.18, fontSize: 7, fontFace: FONT, color: GRAY, margin: 0 });

  s.addShape(pres.shapes.OVAL, { x: 0.4, y: lgY + 0.2, w: 0.12, h: 0.12, fill: { color: ORANGE } });
  s.addText("Priorità 2 — Strategiche", { x: 0.58, y: lgY + 0.17, w: 1.5, h: 0.18, fontSize: 7, fontFace: FONT, color: GRAY, margin: 0 });

  s.addShape(pres.shapes.OVAL, { x: 0.4, y: lgY + 0.4, w: 0.12, h: 0.12, fill: { color: YELLOW } });
  s.addText("Priorità 3 — Roadmap", { x: 0.58, y: lgY + 0.37, w: 1.5, h: 0.18, fontSize: 7, fontFace: FONT, color: GRAY, margin: 0 });

  s.addText("◆ = rilascio previsto", { x: 0.4, y: lgY + 0.57, w: 1.5, h: 0.15, fontSize: 7, fontFace: FONT, color: GRAY, margin: 0 });

  // Payment milestones bar at bottom
  const pmY = 4.55;
  const pmX = 2.6;

  s.addText("TRANCHE", {
    x: pmX, y: pmY, w: chartW, h: 0.18,
    fontSize: 7, fontFace: FONT, color: PURPLE_L, bold: true, charSpacing: 1, margin: 0
  });

  // Payment indicators
  const payments = [
    { x: 0.5, label: "T1\n~€90K", desc: "Firma" },
    { x: 2.8, label: "T2\n~€77K", desc: "MVP" },
    { x: 5.5, label: "T3\n~€90K", desc: "Rilascio" },
  ];
  payments.forEach(p => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: pmX + p.x * monthW, y: pmY + 0.22, w: monthW * 1.2, h: 0.5,
      fill: { color: CARD }, rectRadius: 0.04
    });
    s.addText(p.label, {
      x: pmX + p.x * monthW, y: pmY + 0.22, w: monthW * 1.2, h: 0.35,
      fontSize: 8, fontFace: FONT, color: GREEN, bold: true, align: "center", valign: "middle", margin: 0
    });
    s.addText(p.desc, {
      x: pmX + p.x * monthW, y: pmY + 0.52, w: monthW * 1.2, h: 0.18,
      fontSize: 6, fontFace: FONT, color: MUTED, align: "center", margin: 0
    });
  });

  // Note
  s.addText("Timeline indicativa soggetta a validazione tecnica. Rilasci incrementali con test utente tra le fasi. Max 2 soluzioni in sviluppo parallelo.", {
    x: 0.4, y: 5.35, w: 8.5, h: 0.18,
    fontSize: 6.5, fontFace: FONT, color: "555555", margin: 0
  });

  s.addText([
    { text: "Hey", options: { color: WHITE, bold: true, fontSize: 11 } },
    { text: "AI", options: { color: PURPLE_L, bold: true, fontSize: 11 } }
  ], {
    x: 9.0, y: 5.15, w: 0.7, h: 0.35, fontFace: FONT, align: "right", margin: 0
  });

  await pres.writeFile({ fileName: "/home/claude/Noloop_Gantt_Roadmap.pptx" });
  console.log("Done!");
}

main().catch(console.error);