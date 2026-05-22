const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";

// Colori stile slide originale
const DARK_BG = "0D0D0D";
const HEADER_BG = "1a1a2e";
const ROW_BG = "0D0D0D";
const ACCENT_CYAN = "00CED1";
const ACCENT_PURPLE = "9370DB";
const TEXT_WHITE = "FFFFFF";
const TEXT_LIGHT = "E0E0E0";
const TEXT_MUTED = "A0A0A0";

// Stile comune per tutte le tabelle
const commonTableStyle = {
  border: { pt: 0.5, color: "333333" },
  fontFace: "Arial",
  valign: "middle",
};

// ============================================
// SLIDE 1: Tabella 1 - Operations Automation
// ============================================
const slide1 = pptx.addSlide();
slide1.background = { color: DARK_BG };

slide1.addText("Business Case - Tabella 1: Operations Automation", {
  x: 0.5, y: 0.3, w: 9, h: 0.5,
  fontSize: 24, color: TEXT_WHITE, bold: true, fontFace: "Arial"
});

slide1.addText("AI Platform vs Nuove Assunzioni", {
  x: 0.5, y: 0.8, w: 9, h: 0.3,
  fontSize: 14, color: TEXT_MUTED, fontFace: "Arial"
});

const table1Data = [
  // Header row con Wave
  [
    { text: "Scenario", options: { fill: HEADER_BG, color: TEXT_WHITE, bold: true, align: "left" } },
    { text: "WAVE 1 (2026-2028)", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center", colspan: 3 } },
    { text: "", options: { fill: HEADER_BG } },
    { text: "", options: { fill: HEADER_BG } },
    { text: "WAVE 2 (2029-2030)", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center", colspan: 2 } },
    { text: "", options: { fill: HEADER_BG } },
  ],
  // Sub-header anni
  [
    { text: "", options: { fill: HEADER_BG } },
    { text: "Anno 1", options: { fill: HEADER_BG, color: TEXT_LIGHT, bold: true, align: "center" } },
    { text: "Anno 2", options: { fill: HEADER_BG, color: TEXT_LIGHT, bold: true, align: "center" } },
    { text: "Anno 3", options: { fill: HEADER_BG, color: TEXT_LIGHT, bold: true, align: "center" } },
    { text: "Anno 4", options: { fill: HEADER_BG, color: TEXT_LIGHT, bold: true, align: "center" } },
    { text: "Anno 5", options: { fill: HEADER_BG, color: TEXT_LIGHT, bold: true, align: "center" } },
  ],
  // Data rows
  [
    { text: "A) Nuove Assunzioni", options: { fill: ROW_BG, color: TEXT_WHITE, bold: true, align: "left" } },
    { text: "€213.600", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€213.600", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€213.600", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€213.600", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€213.600", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
  ],
  [
    { text: "Costo Cumulato A", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€213.600", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€427.200", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€640.800", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€854.400", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€1.068.000", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "B) Piattaforma AI", options: { fill: ROW_BG, color: TEXT_WHITE, bold: true, align: "left" } },
    { text: "€175-210K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€75-90K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€0", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€0", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€0", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
  ],
  [
    { text: "Costo Cumulato B", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€175-210K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€250-300K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€250-300K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€250-300K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€250-300K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "Risparmio Annuale", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "left" } },
    { text: "€3,6-38,6K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€123,6-138,6K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€213.600", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€213.600", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€213.600", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
  ],
  [
    { text: "Risparmio Cumulato", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€3,6-38,6K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€127-177K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€341-391K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€554-604K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€768-818K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "ROI Annuale", options: { fill: "1a2a1a", color: "90EE90", bold: true, align: "left" } },
    { text: "2-18%", options: { fill: "1a2a1a", color: "90EE90", bold: true, align: "center" } },
    { text: "49-46%", options: { fill: "1a2a1a", color: "90EE90", bold: true, align: "center" } },
    { text: "85-71%", options: { fill: "1a2a1a", color: "90EE90", bold: true, align: "center" } },
    { text: "85-71%", options: { fill: "1a2a1a", color: "90EE90", bold: true, align: "center" } },
    { text: "85-71%", options: { fill: "1a2a1a", color: "90EE90", bold: true, align: "center" } },
  ],
  [
    { text: "ROI Cumulativo", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "left" } },
    { text: "2-18%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "51-59%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "136-130%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "222-201%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "307-273%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
  ],
];

slide1.addTable(table1Data, {
  x: 0.3, y: 1.2, w: 9.4, h: 4,
  colW: [2.2, 1.4, 1.4, 1.4, 1.4, 1.4],
  fontSize: 11,
  ...commonTableStyle,
});

slide1.addText("Payback Period: 14-18 mesi | FTE Equivalenti Liberati: 4-5", {
  x: 0.5, y: 5.1, w: 9, h: 0.3,
  fontSize: 12, color: ACCENT_CYAN, fontFace: "Arial"
});

// ============================================
// SLIDE 2: Tabella 2 - Cliente Activation
// ============================================
const slide2 = pptx.addSlide();
slide2.background = { color: DARK_BG };

slide2.addText("Business Case - Tabella 2: Cliente Activation (tipo BAT)", {
  x: 0.5, y: 0.3, w: 9, h: 0.5,
  fontSize: 24, color: TEXT_WHITE, bold: true, fontFace: "Arial"
});

slide2.addText("Cliente 50% BAT | Ramp-up 6-9 mesi | EBITDA 11% | Durata cliente: 1 anno", {
  x: 0.5, y: 0.8, w: 9, h: 0.3,
  fontSize: 12, color: TEXT_MUTED, fontFace: "Arial"
});

const table2Data = [
  // Header
  [
    { text: "Voce", options: { fill: HEADER_BG, color: TEXT_WHITE, bold: true, align: "left" } },
    { text: "Anno 1", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Anno 2", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Anno 3", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Anno 4", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Anno 5", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
  ],
  [
    { text: "Costi Marketing HeyAI", options: { fill: ROW_BG, color: TEXT_WHITE, bold: true, align: "left" } },
    { text: "€45-50K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
  ],
  [
    { text: "  - Setup iniziale", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€5-10K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
  ],
  [
    { text: "  - Fee annuale", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "Costi Cumulati", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€45-50K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€85-90K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€125-130K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€165-170K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€205-210K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "Fatturato Effettivo (50%)", options: { fill: ROW_BG, color: TEXT_WHITE, align: "left" } },
    { text: "€4-4,5M", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€4-4,5M", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€4-4,5M", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€4-4,5M", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€4-4,5M", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
  ],
  [
    { text: "EBITDA (11%)", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "left" } },
    { text: "€440-495K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
    { text: "€440-495K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
    { text: "€440-495K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
    { text: "€440-495K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
    { text: "€440-495K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
  ],
  [
    { text: "Beneficio Netto Annuale", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "left" } },
    { text: "€390-450K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€400-455K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€400-455K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€400-455K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€400-455K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
  ],
  [
    { text: "Beneficio Cumulato", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€390-450K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€790-905K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€1,19-1,36M", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€1,59-1,82M", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€1,99-2,27M", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "ROI Cumulativo", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "left" } },
    { text: "780-900%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "878-1006%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "915-1046%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "936-1071%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "948-1081%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
  ],
];

slide2.addTable(table2Data, {
  x: 0.3, y: 1.2, w: 9.4, h: 4,
  colW: [2.4, 1.4, 1.4, 1.4, 1.4, 1.4],
  fontSize: 11,
  ...commonTableStyle,
});

slide2.addText("⚠ Prerequisito: Richiede implementazione piattaforma AI | Payback: < 2 mesi", {
  x: 0.5, y: 5.1, w: 9, h: 0.3,
  fontSize: 12, color: "FF6B6B", fontFace: "Arial"
});

// ============================================
// SLIDE 3: Tabella 3 - Clienti Vendita Diretta
// ============================================
const slide3 = pptx.addSlide();
slide3.background = { color: DARK_BG };

slide3.addText("Business Case - Tabella 3: Clienti Vendita Diretta (tipo K-ippun Haru)", {
  x: 0.5, y: 0.3, w: 9, h: 0.5,
  fontSize: 24, color: TEXT_WHITE, bold: true, fontFace: "Arial"
});

slide3.addText("2 clienti/anno | Ramp-up 3-6 mesi | EBITDA 11% | Durata cliente: 1 anno", {
  x: 0.5, y: 0.8, w: 9, h: 0.3,
  fontSize: 12, color: TEXT_MUTED, fontFace: "Arial"
});

const table3Data = [
  // Header
  [
    { text: "Voce", options: { fill: HEADER_BG, color: TEXT_WHITE, bold: true, align: "left" } },
    { text: "Anno 1", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Anno 2", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Anno 3", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Anno 4", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Anno 5", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
  ],
  [
    { text: "Costi Marketing HeyAI", options: { fill: ROW_BG, color: TEXT_WHITE, bold: true, align: "left" } },
    { text: "€45-50K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
  ],
  [
    { text: "  - Setup iniziale", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€5-10K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
  ],
  [
    { text: "  - Fee annuale", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€40K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "Costi Cumulati", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€45-50K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€85-90K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€125-130K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€165-170K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€205-210K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "Clienti Acquisiti (nuovi)", options: { fill: ROW_BG, color: TEXT_WHITE, align: "left" } },
    { text: "2", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "2", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "2", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "2", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "2", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
  ],
  [
    { text: "Fatturato Effettivo (75%)", options: { fill: ROW_BG, color: TEXT_WHITE, align: "left" } },
    { text: "€720K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€720K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€720K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€720K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€720K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
  ],
  [
    { text: "EBITDA (11%)", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "left" } },
    { text: "€79K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
    { text: "€79K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
    { text: "€79K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
    { text: "€79K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
    { text: "€79K", options: { fill: "1a1a3a", color: ACCENT_CYAN, align: "center" } },
  ],
  [
    { text: "Beneficio Netto Annuale", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "left" } },
    { text: "€29-34K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€39K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€39K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€39K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
    { text: "€39K", options: { fill: "1a1a3a", color: ACCENT_CYAN, bold: true, align: "center" } },
  ],
  [
    { text: "Beneficio Cumulato", options: { fill: ROW_BG, color: TEXT_MUTED, align: "left", italic: true } },
    { text: "€29-34K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€68-73K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€107-112K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€146-151K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
    { text: "€185-190K", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "ROI Cumulativo", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "left" } },
    { text: "58-76%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "76-86%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "82-90%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "86-91%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
    { text: "88-93%", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
  ],
];

slide3.addTable(table3Data, {
  x: 0.3, y: 1.2, w: 9.4, h: 4,
  colW: [2.4, 1.4, 1.4, 1.4, 1.4, 1.4],
  fontSize: 11,
  ...commonTableStyle,
});

slide3.addText("⚠ Prerequisito: Richiede implementazione piattaforma AI | Payback: 14-17 mesi", {
  x: 0.5, y: 5.1, w: 9, h: 0.3,
  fontSize: 12, color: "FF6B6B", fontFace: "Arial"
});

// ============================================
// SLIDE 4: Tabella 4 - Sintesi Consolidata
// ============================================
const slide4 = pptx.addSlide();
slide4.background = { color: DARK_BG };

slide4.addText("Business Case - Tabella 4: Sintesi Consolidata", {
  x: 0.5, y: 0.3, w: 9, h: 0.5,
  fontSize: 24, color: TEXT_WHITE, bold: true, fontFace: "Arial"
});

slide4.addText("Riepilogo investimenti e ritorni su 5 anni", {
  x: 0.5, y: 0.8, w: 9, h: 0.3,
  fontSize: 14, color: TEXT_MUTED, fontFace: "Arial"
});

const table4Data = [
  // Header
  [
    { text: "Componente", options: { fill: HEADER_BG, color: TEXT_WHITE, bold: true, align: "left" } },
    { text: "Investimento 5 Anni", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
    { text: "Ritorno 5 Anni", options: { fill: HEADER_BG, color: ACCENT_PURPLE, bold: true, align: "center" } },
  ],
  [
    { text: "Piattaforma AI", options: { fill: ROW_BG, color: TEXT_WHITE, align: "left" } },
    { text: "€250-300K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "€768-818K risparmio", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
  ],
  [
    { text: "Marketing & Lead Gen", options: { fill: ROW_BG, color: TEXT_WHITE, align: "left" } },
    { text: "€205-210K", options: { fill: ROW_BG, color: TEXT_LIGHT, align: "center" } },
    { text: "(abilita crescita)", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center", italic: true } },
  ],
  [
    { text: "TOTALE INVESTIMENTO", options: { fill: "2a1a1a", color: "FF6B6B", bold: true, align: "left" } },
    { text: "€455-510K", options: { fill: "2a1a1a", color: "FF6B6B", bold: true, align: "center" } },
    { text: "", options: { fill: "2a1a1a" } },
  ],
  [
    { text: "EBITDA Cliente Activation", options: { fill: ROW_BG, color: TEXT_WHITE, align: "left" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "€1,99-2,27M", options: { fill: ROW_BG, color: ACCENT_CYAN, align: "center" } },
  ],
  [
    { text: "EBITDA Clienti Vendita Diretta", options: { fill: ROW_BG, color: TEXT_WHITE, align: "left" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "€185-190K", options: { fill: ROW_BG, color: ACCENT_CYAN, align: "center" } },
  ],
  [
    { text: "Risparmio vs Assunzioni", options: { fill: ROW_BG, color: TEXT_WHITE, align: "left" } },
    { text: "-", options: { fill: ROW_BG, color: TEXT_MUTED, align: "center" } },
    { text: "€768-818K", options: { fill: ROW_BG, color: ACCENT_CYAN, align: "center" } },
  ],
  [
    { text: "TOTALE RITORNO", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "left" } },
    { text: "", options: { fill: "1a3a1a" } },
    { text: "€2,94-3,28M", options: { fill: "1a3a1a", color: "32CD32", bold: true, align: "center" } },
  ],
  [
    { text: "ROI COMPLESSIVO 5 ANNI", options: { fill: "1a4a1a", color: "00FF00", bold: true, align: "left", fontSize: 14 } },
    { text: "476% - 643%", options: { fill: "1a4a1a", color: "00FF00", bold: true, align: "center", colspan: 2, fontSize: 16 } },
    { text: "", options: { fill: "1a4a1a" } },
  ],
];

slide4.addTable(table4Data, {
  x: 0.8, y: 1.3, w: 8.4, h: 3.5,
  colW: [3.5, 2.4, 2.5],
  fontSize: 12,
  ...commonTableStyle,
});

slide4.addText("L'investimento si ripaga entro 12-18 mesi e abilita una crescita sostenibile senza aumentare l'organico.", {
  x: 0.5, y: 5.0, w: 9, h: 0.4,
  fontSize: 12, color: TEXT_LIGHT, fontFace: "Arial"
});

// Save
pptx.writeFile("/mnt/user-data/outputs/Business_Case_Tables.pptx")
  .then(() => console.log("PowerPoint created successfully!"))
  .catch(err => console.error(err));