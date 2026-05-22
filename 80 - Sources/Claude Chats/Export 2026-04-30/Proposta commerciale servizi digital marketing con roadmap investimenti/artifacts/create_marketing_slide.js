const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'NOT Marketing Services';

// Colors from NOT presentation
const COLORS = {
    bgLight: "F5F7FA",
    primary: "3B82F6",      // Blue
    primaryDark: "1E3A8A",  // Dark blue
    navy: "1E3A5F",         // Navy for titles
    white: "FFFFFF",
    textDark: "374151",     // Dark gray for body text
    textMuted: "6B7280",    // Muted gray
    cardBg: "FFFFFF",
    accent: "3B82F6"
};

let slide = pres.addSlide();
slide.background = { color: COLORS.bgLight };

// === HEADER ===
// Section label
slide.addText("DIGITAL MARKETING", {
    x: 0.5, y: 0.25, w: 3, h: 0.3,
    fontSize: 11, fontFace: "Arial", bold: true, color: COLORS.primary
});

// Main title
slide.addText("Launch Support Services", {
    x: 0.5, y: 0.5, w: 6, h: 0.5,
    fontSize: 32, fontFace: "Arial", bold: true, color: COLORS.navy
});

// === LAYOUT PARAMETERS ===
const startY = 1.2;
const colWidths = [2.2, 2.2, 2.2, 2.2];  // 4 phase columns
const totalWidth = colWidths.reduce((a, b) => a + b, 0);
const startX = 0.5;
const rowHeight = 0.95;
const headerHeight = 0.45;
const gap = 0.08;

// === COLUMN HEADERS ===
const phases = [
    { title: "Strategic Analysis", color: COLORS.primaryDark },
    { title: "Preparation", color: COLORS.primary },
    { title: "Pre-Launch", color: COLORS.primary },
    { title: "Launch", color: COLORS.primary }
];

let xPos = startX;
phases.forEach((phase, i) => {
    // Header background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: xPos, y: startY, w: colWidths[i] - gap, h: headerHeight,
        fill: { color: phase.color }, rectRadius: 0.05
    });
    // Header text
    slide.addText(phase.title, {
        x: xPos, y: startY, w: colWidths[i] - gap, h: headerHeight,
        fontSize: 11, fontFace: "Arial", bold: true, color: COLORS.white,
        align: "center", valign: "middle"
    });
    xPos += colWidths[i];
});

// === SERVICE ROWS ===
const services = [
    {
        name: "Social Media",
        subtitle: "Instagram + TikTok",
        cells: [
            "", // Strategic Analysis - merged
            "Profile setup Italy\nTone of voice\nEditorial plan",
            "Teaser content\nBrand story\nCountdown\n4-5 posts/week",
            "Live coverage\nPop-up content\nPromos & UGC\n5-6 posts/week"
        ]
    },
    {
        name: "Advertising",
        subtitle: "Meta + TikTok Ads",
        cells: [
            "",
            "Business Manager setup\nPixel & tracking\nAudience definition",
            "Geo-targeted campaigns\nA/B test messaging\nRetargeting",
            "Traffic campaigns\nBudget boost\nContinuous optimization"
        ]
    },
    {
        name: "Influencer",
        subtitle: "Marketing",
        cells: [
            "",
            "Local micro-influencer\nscouting (3-5)\nBrief & contact",
            "Product seeding\nTeaser content\nPre-opening stories",
            "Opening event invite\nLive coverage\nAuthentic reviews"
        ]
    },
    {
        name: "Graphics",
        subtitle: "Pop-Up Materials",
        cells: [
            "",
            "Asset collection\nVisual concept\nBrand adaptation",
            "Coming soon graphics\nTotem & banners\nWindow displays",
            "Final setup graphics\nPromo materials\nQR codes & signage"
        ]
    }
];

// === STRATEGIC ANALYSIS MERGED CELL ===
const mergedCellHeight = (rowHeight * 4) + (gap * 3);
const strategicY = startY + headerHeight + gap;

// Card background for strategic analysis
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: startX, y: strategicY, w: colWidths[0] - gap, h: mergedCellHeight,
    fill: { color: COLORS.white }, rectRadius: 0.08,
    shadow: { type: "outer", color: "000000", blur: 4, offset: 1, angle: 135, opacity: 0.08 }
});

// Left accent bar
slide.addShape(pres.shapes.RECTANGLE, {
    x: startX, y: strategicY, w: 0.06, h: mergedCellHeight,
    fill: { color: COLORS.primaryDark }
});

// Strategic analysis content
const strategicContent = [
    { text: "Brand Analysis", options: { bold: true, fontSize: 10, color: COLORS.navy, breakLine: true } },
    { text: "(from client brief)", options: { fontSize: 8, color: COLORS.textMuted, breakLine: true } },
    { text: "", options: { fontSize: 6, breakLine: true } },
    { text: "Market Context", options: { bold: true, fontSize: 10, color: COLORS.navy, breakLine: true } },
    { text: "& Competitors", options: { fontSize: 9, color: COLORS.textDark, breakLine: true } },
    { text: "", options: { fontSize: 6, breakLine: true } },
    { text: "Trend Analysis", options: { bold: true, fontSize: 10, color: COLORS.navy, breakLine: true } },
    { text: "", options: { fontSize: 6, breakLine: true } },
    { text: "Custom Strategy", options: { bold: true, fontSize: 10, color: COLORS.navy, breakLine: true } },
    { text: "for each service →", options: { fontSize: 8, color: COLORS.primary, breakLine: true } }
];

slide.addText(strategicContent, {
    x: startX + 0.15, y: strategicY + 0.15, w: colWidths[0] - 0.35, h: mergedCellHeight - 0.3,
    valign: "middle"
});

// === DRAW SERVICE ROWS ===
services.forEach((service, rowIndex) => {
    const rowY = startY + headerHeight + gap + (rowIndex * (rowHeight + gap));
    
    // Service name cell (left side, spans into first column area but we'll put it on the right side of content)
    // Actually we need to draw the cells for columns 2, 3, 4 (Preparation, Pre-Launch, Launch)
    
    for (let colIndex = 1; colIndex < 4; colIndex++) {
        const cellX = startX + colWidths.slice(0, colIndex).reduce((a, b) => a + b, 0);
        const cellW = colWidths[colIndex] - gap;
        
        // Card background
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
            x: cellX, y: rowY, w: cellW, h: rowHeight,
            fill: { color: COLORS.white }, rectRadius: 0.06,
            shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
        });
        
        // Cell content
        const cellText = service.cells[colIndex];
        if (cellText) {
            slide.addText(cellText, {
                x: cellX + 0.08, y: rowY + 0.05, w: cellW - 0.16, h: rowHeight - 0.1,
                fontSize: 8, fontFace: "Arial", color: COLORS.textDark,
                valign: "middle", align: "left"
            });
        }
    }
});

// === SERVICE LABELS (on the right side) ===
const labelStartX = startX + totalWidth + 0.15;
services.forEach((service, rowIndex) => {
    const rowY = startY + headerHeight + gap + (rowIndex * (rowHeight + gap));
    
    // Service icon/number badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: labelStartX, y: rowY + 0.15, w: 0.5, h: 0.5,
        fill: { color: COLORS.primary }, rectRadius: 0.08
    });
    
    slide.addText(String(rowIndex + 1).padStart(2, '0'), {
        x: labelStartX, y: rowY + 0.15, w: 0.5, h: 0.5,
        fontSize: 14, fontFace: "Arial", bold: true, color: COLORS.white,
        align: "center", valign: "middle"
    });
    
    // Service name
    slide.addText(service.name, {
        x: labelStartX + 0.6, y: rowY + 0.2, w: 1.2, h: 0.25,
        fontSize: 11, fontFace: "Arial", bold: true, color: COLORS.navy
    });
    
    slide.addText(service.subtitle, {
        x: labelStartX + 0.6, y: rowY + 0.45, w: 1.2, h: 0.2,
        fontSize: 9, fontFace: "Arial", color: COLORS.textMuted
    });
});

// === FOOTER BAR ===
slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.2, w: 10, h: 0.42,
    fill: { color: COLORS.white }
});

// Blue accent on left
slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.2, w: 0.08, h: 0.42,
    fill: { color: COLORS.primary }
});

// Footer text
slide.addText("Full service digital marketing to maximize your pop-up store performance", {
    x: 0.25, y: 5.2, w: 8, h: 0.42,
    fontSize: 11, fontFace: "Arial", bold: true, color: COLORS.navy,
    valign: "middle"
});

// Save
pres.writeFile({ fileName: "/home/claude/NOT_Marketing_Services_Slide.pptx" })
    .then(() => console.log("Presentation created successfully!"))
    .catch(err => console.error(err));