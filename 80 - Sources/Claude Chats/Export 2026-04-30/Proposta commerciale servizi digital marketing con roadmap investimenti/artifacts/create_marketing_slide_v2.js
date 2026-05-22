const pptxgen = require("pptxgenjs");

let pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'NOT Marketing Services';

// Colors from NOT presentation
const COLORS = {
    bgLight: "F5F7FA",
    primary: "3B82F6",
    primaryDark: "1E3A8A",
    navy: "1E3A5F",
    white: "FFFFFF",
    textDark: "374151",
    textMuted: "6B7280"
};

let slide = pres.addSlide();
slide.background = { color: COLORS.bgLight };

// === HEADER ===
slide.addText("DIGITAL MARKETING", {
    x: 0.4, y: 0.2, w: 3, h: 0.25,
    fontSize: 10, fontFace: "Arial", bold: true, color: COLORS.primary
});

slide.addText("Launch Support Services", {
    x: 0.4, y: 0.4, w: 6, h: 0.4,
    fontSize: 28, fontFace: "Arial", bold: true, color: COLORS.navy
});

// === LAYOUT PARAMETERS ===
const startY = 0.9;
const startX = 0.4;
const serviceColW = 1.1;  // Service labels column
const phaseColW = 1.95;   // Each phase column
const rowHeight = 0.9;
const headerHeight = 0.4;
const gap = 0.06;

// === SERVICE LABELS COLUMN ===
const serviceLabels = [
    { name: "Social Media", sub: "IG + TikTok" },
    { name: "Advertising", sub: "Meta + TikTok Ads" },
    { name: "Influencer", sub: "Marketing" },
    { name: "Graphics", sub: "Pop-Up Materials" }
];

// Service column header
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: startX, y: startY, w: serviceColW - gap, h: headerHeight,
    fill: { color: COLORS.navy }, rectRadius: 0.05
});
slide.addText("Service", {
    x: startX, y: startY, w: serviceColW - gap, h: headerHeight,
    fontSize: 10, fontFace: "Arial", bold: true, color: COLORS.white,
    align: "center", valign: "middle"
});

// Service labels
serviceLabels.forEach((service, i) => {
    const rowY = startY + headerHeight + gap + (i * (rowHeight + gap));
    
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: startX, y: rowY, w: serviceColW - gap, h: rowHeight,
        fill: { color: COLORS.white }, rectRadius: 0.05,
        shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
    });
    
    // Number badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: startX + 0.08, y: rowY + 0.12, w: 0.35, h: 0.35,
        fill: { color: COLORS.primary }, rectRadius: 0.06
    });
    slide.addText(String(i + 1).padStart(2, '0'), {
        x: startX + 0.08, y: rowY + 0.12, w: 0.35, h: 0.35,
        fontSize: 11, fontFace: "Arial", bold: true, color: COLORS.white,
        align: "center", valign: "middle"
    });
    
    // Service name
    slide.addText(service.name, {
        x: startX + 0.08, y: rowY + 0.5, w: serviceColW - 0.2, h: 0.2,
        fontSize: 9, fontFace: "Arial", bold: true, color: COLORS.navy, align: "center"
    });
    slide.addText(service.sub, {
        x: startX + 0.08, y: rowY + 0.68, w: serviceColW - 0.2, h: 0.15,
        fontSize: 7, fontFace: "Arial", color: COLORS.textMuted, align: "center"
    });
});

// === PHASE COLUMNS ===
const phases = [
    { title: "Strategic Analysis", color: COLORS.primaryDark },
    { title: "Preparation", color: COLORS.primary },
    { title: "Pre-Launch", color: COLORS.primary },
    { title: "Launch", color: COLORS.primary }
];

// Phase content for each service row
const content = [
    // Row 1: Social Media
    ["", "Profile setup Italy\nTone of voice\nEditorial plan", "Teaser content\nBrand story, Countdown\n4-5 posts/week", "Live coverage\nPop-up content\nPromos & UGC\n5-6 posts/week"],
    // Row 2: Advertising
    ["", "Business Manager\nPixel & tracking\nAudience definition", "Geo-targeted campaigns\nA/B test messaging\nRetargeting", "Traffic campaigns\nBudget boost\nContinuous optimization"],
    // Row 3: Influencer
    ["", "Micro-influencer\nscouting (3-5)\nBrief & contact", "Product seeding\nTeaser content\nPre-opening stories", "Opening event invite\nLive coverage\nAuthentic reviews"],
    // Row 4: Graphics
    ["", "Asset collection\nVisual concept\nBrand adaptation", "Coming soon graphics\nTotem & banners\nWindow displays", "Final setup graphics\nPromo materials\nQR codes & signage"]
];

// Draw phase headers and cells
phases.forEach((phase, colIndex) => {
    const colX = startX + serviceColW + (colIndex * phaseColW);
    
    // Header
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: colX, y: startY, w: phaseColW - gap, h: headerHeight,
        fill: { color: phase.color }, rectRadius: 0.05
    });
    slide.addText(phase.title, {
        x: colX, y: startY, w: phaseColW - gap, h: headerHeight,
        fontSize: 10, fontFace: "Arial", bold: true, color: COLORS.white,
        align: "center", valign: "middle"
    });
    
    // Strategic Analysis column - merged cell
    if (colIndex === 0) {
        const mergedHeight = (rowHeight * 4) + (gap * 3);
        const mergedY = startY + headerHeight + gap;
        
        slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
            x: colX, y: mergedY, w: phaseColW - gap, h: mergedHeight,
            fill: { color: COLORS.white }, rectRadius: 0.06,
            shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.06 }
        });
        
        // Left accent bar
        slide.addShape(pres.shapes.RECTANGLE, {
            x: colX, y: mergedY, w: 0.05, h: mergedHeight,
            fill: { color: COLORS.primaryDark }
        });
        
        // Content
        const strategicText = [
            { text: "Brand Analysis", options: { bold: true, fontSize: 9, color: COLORS.navy, breakLine: true } },
            { text: "(from client brief)", options: { fontSize: 7, color: COLORS.textMuted, breakLine: true } },
            { text: "", options: { fontSize: 5, breakLine: true } },
            { text: "Market Context", options: { bold: true, fontSize: 9, color: COLORS.navy, breakLine: true } },
            { text: "& Competitors", options: { fontSize: 8, color: COLORS.textDark, breakLine: true } },
            { text: "", options: { fontSize: 5, breakLine: true } },
            { text: "Trend Analysis", options: { bold: true, fontSize: 9, color: COLORS.navy, breakLine: true } },
            { text: "", options: { fontSize: 5, breakLine: true } },
            { text: "Custom Strategy", options: { bold: true, fontSize: 9, color: COLORS.navy, breakLine: true } },
            { text: "for each service →", options: { fontSize: 7, color: COLORS.primary } }
        ];
        
        slide.addText(strategicText, {
            x: colX + 0.12, y: mergedY + 0.1, w: phaseColW - 0.3, h: mergedHeight - 0.2,
            valign: "middle"
        });
    } else {
        // Regular cells for other columns
        content.forEach((row, rowIndex) => {
            const cellY = startY + headerHeight + gap + (rowIndex * (rowHeight + gap));
            const cellText = row[colIndex];
            
            if (cellText) {
                slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
                    x: colX, y: cellY, w: phaseColW - gap, h: rowHeight,
                    fill: { color: COLORS.white }, rectRadius: 0.05,
                    shadow: { type: "outer", color: "000000", blur: 3, offset: 1, angle: 135, opacity: 0.05 }
                });
                
                slide.addText(cellText, {
                    x: colX + 0.08, y: cellY + 0.05, w: phaseColW - 0.22, h: rowHeight - 0.1,
                    fontSize: 7.5, fontFace: "Arial", color: COLORS.textDark,
                    valign: "middle", align: "left"
                });
            }
        });
    }
});

// === FOOTER BAR ===
slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.15, w: 10, h: 0.48,
    fill: { color: COLORS.white }
});

slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.15, w: 0.06, h: 0.48,
    fill: { color: COLORS.primary }
});

slide.addText("Full service digital marketing to maximize your pop-up store performance", {
    x: 0.2, y: 5.15, w: 9.5, h: 0.48,
    fontSize: 11, fontFace: "Arial", bold: true, color: COLORS.navy,
    valign: "middle"
});

// Save
pres.writeFile({ fileName: "/home/claude/NOT_Marketing_Services_Slide_v2.pptx" })
    .then(() => console.log("Presentation v2 created successfully!"))
    .catch(err => console.error(err));