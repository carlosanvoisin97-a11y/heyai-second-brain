const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageBreak, PageNumber,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader
} = require("docx");

// ============= STYLES & CONFIG =============
const BLUE = "1F4E79";
const LIGHT_BLUE = "D6E4F0";
const MED_BLUE = "B4C6E0";
const DARK_BG = "2E3B4E";
const ACCENT = "2E75B6";
const LIGHT_GRAY = "F2F2F2";
const WHITE = "FFFFFF";
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: WHITE };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

// Helper functions
function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({ heading: level, children: [new TextRun(text)] });
}

function para(text, opts = {}) {
  const runs = [];
  if (typeof text === "string") {
    runs.push(new TextRun({ text, ...opts }));
  } else {
    return new Paragraph({ spacing: { after: 120 }, children: text, ...opts });
  }
  return new Paragraph({ spacing: { after: 120 }, children: runs });
}

function boldPara(label, text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: label, bold: true, font: "Arial", size: 22 }),
      new TextRun({ text, font: "Arial", size: 22 }),
    ],
  });
}

function spacer(pts = 200) {
  return new Paragraph({ spacing: { after: pts }, children: [] });
}

function headerCell(text, width) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders,
    shading: { fill: BLUE, type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text, bold: true, color: WHITE, font: "Arial", size: 18 })] })],
  });
}

function dataCell(text, width, opts = {}) {
  const fill = opts.fill || WHITE;
  const bold = opts.bold || false;
  const align = opts.align || AlignmentType.LEFT;
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders,
    shading: { fill, type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({ alignment: align, children: [new TextRun({ text, bold, font: "Arial", size: 18 })] })],
  });
}

// ============= DOCUMENT CONTENT =============
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: BLUE },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 1 } } },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: ACCENT },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "333333" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
      {
        reference: "numbers",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
      {
        reference: "guidelines",
        levels: [{
          level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } },
        }],
      },
    ],
  },
  sections: [
    // ==================== COVER PAGE ====================
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        spacer(3000),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "INVESTMENT AFFORDABILITY ANALYSIS", size: 52, bold: true, font: "Arial", color: BLUE })],
        }),
        spacer(200),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Piattaforma AI per Ottimizzazione Operations", size: 36, font: "Arial", color: ACCENT })],
        }),
        spacer(100),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { top: { style: BorderStyle.SINGLE, size: 3, color: ACCENT, space: 1 }, bottom: { style: BorderStyle.SINGLE, size: 3, color: ACCENT, space: 1 } },
          spacing: { before: 200, after: 200 },
          children: [new TextRun({ text: "NoLoop On Trade (NOT)  |  Febbraio 2026", size: 28, font: "Arial", color: "555555" })],
        }),
        spacer(600),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "CONFIDENZIALE", size: 24, bold: true, font: "Arial", color: "CC0000" })],
        }),
        spacer(100),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Preparato da HeyAI per uso interno del management NOT", size: 20, font: "Arial", color: "777777" })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Dati finanziari: Fatturato ~18M\u20AC | EBITDA margin ~8-10%", size: 20, font: "Arial", color: "777777" })],
        }),
      ],
    },

    // ==================== MAIN CONTENT ====================
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1300, bottom: 1200, left: 1300 },
        },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: ACCENT, space: 1 } },
            children: [
              new TextRun({ text: "NOT \u2013 Investment Affordability Analysis", italics: true, size: 18, color: "999999", font: "Arial" }),
              new PositionalTab({ alignment: PositionalTabAlignment.RIGHT, relativeTo: PositionalTabRelativeTo.MARGIN, leader: PositionalTabLeader.NONE }),
              new TextRun({ text: "CONFIDENZIALE", italics: true, size: 18, color: "CC0000", font: "Arial" }),
            ],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            border: { top: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC", space: 1 } },
            children: [
              new TextRun({ text: "HeyAI \u2013 Digital Strategy & Transformation  |  Pag. ", size: 16, color: "999999", font: "Arial" }),
              new TextRun({ children: [PageNumber.CURRENT], size: 16, color: "999999", font: "Arial" }),
            ],
          })],
        }),
      },
      children: [
        // ======= SEZIONE 1: EXECUTIVE SUMMARY =======
        heading("Sezione 1 \u2014 Sintesi Esecutiva"),
        
        new Paragraph({
          spacing: { after: 80 },
          shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
          children: [new TextRun({ text: "  RANGE INVESTIBILE RACCOMANDATO", bold: true, font: "Arial", size: 24, color: BLUE })],
        }),
        spacer(60),
        
        new Table({
          width: { size: 9306, type: WidthType.DXA },
          columnWidths: [3102, 3102, 3102],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  width: { size: 3102, type: WidthType.DXA }, borders, shading: { fill: "E8F5E9", type: ShadingType.CLEAR }, margins: cellMargins,
                  children: [
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "CONSERVATIVO", bold: true, size: 20, font: "Arial", color: "2E7D32" })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80 }, children: [new TextRun({ text: "\u20AC180.000 \u2013 \u20AC270.000", bold: true, size: 26, font: "Arial" })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(1,0-1,5% revenue)", size: 18, font: "Arial", color: "666666" })] }),
                  ],
                }),
                new TableCell({
                  width: { size: 3102, type: WidthType.DXA }, borders, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR }, margins: cellMargins,
                  children: [
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "REALISTICO", bold: true, size: 20, font: "Arial", color: BLUE })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80 }, children: [new TextRun({ text: "\u20AC270.000 \u2013 \u20AC450.000", bold: true, size: 26, font: "Arial" })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(1,5-2,5% revenue)", size: 18, font: "Arial", color: "666666" })] }),
                  ],
                }),
                new TableCell({
                  width: { size: 3102, type: WidthType.DXA }, borders, shading: { fill: "FFF3E0", type: ShadingType.CLEAR }, margins: cellMargins,
                  children: [
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "AGGRESSIVO", bold: true, size: 20, font: "Arial", color: "E65100" })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80 }, children: [new TextRun({ text: "\u20AC450.000 \u2013 \u20AC630.000", bold: true, size: 26, font: "Arial" })] }),
                    new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(2,5-3,5% revenue)", size: 18, font: "Arial", color: "666666" })] }),
                  ],
                }),
              ],
            }),
          ],
        }),

        spacer(120),
        para("Il range di investimento \u00E8 ancorato a benchmark di mercato provenienti da fonti autorevoli (Gartner, Deloitte, IDC, Avasant/Computer Economics). Per aziende mid-market nel settore servizi con fatturato \u20AC10-50M, la spesa IT tipica si attesta tra il 2% e il 5% del fatturato, con investimenti specifici in digital transformation / AI che rappresentano una porzione significativa di questo budget."),
        para("Il range realistico di \u20AC270-450K su 18-24 mesi rappresenta il 15-31% dell\u2019EBITDA annuo di NOT (stimato \u20AC1,44-1,80M), una percentuale sostenibile per un investimento trasformativo con payback atteso in 14-18 mesi. Questo range \u00E8 coerente sia con i benchmark ERP/operations mid-market (\u20AC150K-750K) sia con i costi di piattaforme AI custom per automazione processi (\u20AC100K-500K)."),
        para("Questo documento verr\u00E0 utilizzato come input per la quotazione della piattaforma AI, insieme al business case FTE e al requirement log Excel, per garantire che la proposta commerciale sia allineata alla capacit\u00E0 d\u2019investimento reale del cliente."),

        // ======= SEZIONE 2: BENCHMARK TABLE =======
        new Paragraph({ children: [new PageBreak()] }),
        heading("Sezione 2 \u2014 Benchmark Table"),
        
        para("Di seguito i principali benchmark raccolti da fonti diversificate, con indicazione di applicabilit\u00E0 al caso NOT."),
        spacer(80),

        // Benchmark table
        new Table({
          width: { size: 9306, type: WidthType.DXA },
          columnWidths: [1800, 2000, 2200, 1500, 1806],
          rows: [
            new TableRow({
              children: [
                headerCell("Fonte", 1800),
                headerCell("Tipo Benchmark", 2000),
                headerCell("Range Riportato", 2200),
                headerCell("Ambito", 1500),
                headerCell("Applicabilit\u00E0 NOT", 1806),
              ],
            }),
            // Row 1
            new TableRow({
              children: [
                dataCell("Deloitte Global Technology Leadership Study 2023", 1800, { fill: LIGHT_GRAY }),
                dataCell("IT spend as % revenue (cross-industry)", 2000, { fill: LIGHT_GRAY }),
                dataCell("Media 5,49% (2022), atteso 5,85% (2024). Range: 2-8% per settore", 2200, { fill: LIGHT_GRAY }),
                dataCell("Globale, multi-settore", 1500, { fill: LIGHT_GRAY }),
                dataCell("ALTA \u2013 Include servizi. NOT sotto-investe rispetto alla media", 1806, { fill: LIGHT_GRAY }),
              ],
            }),
            // Row 2
            new TableRow({
              children: [
                dataCell("Deloitte CIO Survey (IT budget by industry)", 1800),
                dataCell("IT budget % revenue per settore", 2000),
                dataCell("Banking ~8%, Services ~4-5%, Construction/Mfg <2%, Media 3,64% avg", 2200),
                dataCell("Globale", 1500),
                dataCell("ALTA \u2013 Servizi operativi B2B: 3-5% del fatturato", 1806),
              ],
            }),
            // Row 3
            new TableRow({
              children: [
                dataCell("FounderNest Innovation Budget Benchmarks 2026", 1800, { fill: LIGHT_GRAY }),
                dataCell("Tech spend mid-market", 2000, { fill: LIGHT_GRAY }),
                dataCell("Mid-market: 4-10% revenue. Small business: 1-3%", 2200, { fill: LIGHT_GRAY }),
                dataCell("Globale, focus EU", 1500, { fill: LIGHT_GRAY }),
                dataCell("ALTA \u2013 NOT si colloca nel range mid-market", 1806, { fill: LIGHT_GRAY }),
              ],
            }),
            // Row 4
            new TableRow({
              children: [
                dataCell("Gartner IT Spending Forecast 2025", 1800),
                dataCell("Global IT spending growth", 2000),
                dataCell("Crescita 7,9-9,8% YoY. Software +14%, IT Services +9,4%", 2200),
                dataCell("Globale", 1500),
                dataCell("MEDIA \u2013 Indica trend macro, non % revenue specifico per NOT", 1806),
              ],
            }),
            // Row 5
            new TableRow({
              children: [
                dataCell("IDC EMEA Digital Transformation Forecast 2024-2028", 1800, { fill: LIGHT_GRAY }),
                dataCell("DX spending EMEA", 2000, { fill: LIGHT_GRAY }),
                dataCell("CAGR 15,8%. AI come driver principale. Italia CAGR 13,9%", 2200, { fill: LIGHT_GRAY }),
                dataCell("EMEA / Italia", 1500, { fill: LIGHT_GRAY }),
                dataCell("ALTA \u2013 Conferma trend Italia. Mercato in forte crescita", 1806, { fill: LIGHT_GRAY }),
              ],
            }),
            // Row 6
            new TableRow({
              children: [
                dataCell("Houseblend ERP Cost Analysis 2025", 1800),
                dataCell("ERP mid-market cost", 2000),
                dataCell("Mid-market (\u20AC10-50M rev): \u20AC20K-125K primo anno. Progetti completi: \u20AC150K-750K", 2200),
                dataCell("Globale", 1500),
                dataCell("ALTA \u2013 Range coerente. NOT necessita soluzione custom + AI", 1806),
              ],
            }),
            // Row 7
            new TableRow({
              children: [
                dataCell("AdCirrus ERP Budget Guide 2025", 1800, { fill: LIGHT_GRAY }),
                dataCell("ERP implementation by size", 2000, { fill: LIGHT_GRAY }),
                dataCell("Mid-size: \u20AC150K-750K totale. Regola: 1-3% fatturato annuo su ERP", 2200, { fill: LIGHT_GRAY }),
                dataCell("USA/Globale", 1500, { fill: LIGHT_GRAY }),
                dataCell("ALTA \u2013 Su \u20AC18M = \u20AC180K-540K", 1806, { fill: LIGHT_GRAY }),
              ],
            }),
            // Row 8
            new TableRow({
              children: [
                dataCell("CloudZero State of AI Costs 2025", 1800),
                dataCell("AI spend aziendale", 2000),
                dataCell("Media mensile \u20AC85K. +36% YoY. 45% aziende pianificano >$100K/mese", 2200),
                dataCell("USA, grandi aziende", 1500),
                dataCell("BASSA \u2013 Campione enterprise. NOT molto pi\u00F9 piccola", 1806),
              ],
            }),
            // Row 9
            new TableRow({
              children: [
                dataCell("DDI Development AI Cost Guide 2025", 1800, { fill: LIGHT_GRAY }),
                dataCell("AI project cost range", 2000, { fill: LIGHT_GRAY }),
                dataCell("Progetti AI base: \u20AC10-20K. Mid-level: \u20AC100K+. Advanced: \u20AC300K+", 2200, { fill: LIGHT_GRAY }),
                dataCell("Globale", 1500, { fill: LIGHT_GRAY }),
                dataCell("ALTA \u2013 NOT necessita mid-to-advanced level", 1806, { fill: LIGHT_GRAY }),
              ],
            }),
            // Row 10
            new TableRow({
              children: [
                dataCell("Softermii AI Software Cost 2025", 1800),
                dataCell("Custom AI platform cost", 2000),
                dataCell("MVP: \u20AC30-70K. Custom operations: \u20AC100-300K. Enterprise: \u20AC300K+", 2200),
                dataCell("Globale", 1500),
                dataCell("ALTA \u2013 Allineato al range realistico per NOT", 1806),
              ],
            }),
            // Row 11
            new TableRow({
              children: [
                dataCell("Agrello EU SME Digital Transformation 2025", 1800, { fill: LIGHT_GRAY }),
                dataCell("SME digitalizzazione EU", 2000, { fill: LIGHT_GRAY }),
                dataCell("73% PMI EU livello base. Solo 13% adotta AI. Italia sotto media", 2200, { fill: LIGHT_GRAY }),
                dataCell("EU / Italia", 1500, { fill: LIGHT_GRAY }),
                dataCell("ALTA \u2013 Conferma gap digitale. NOT come early mover = vantaggio", 1806, { fill: LIGHT_GRAY }),
              ],
            }),
          ],
        }),

        spacer(120),
        para([
          new TextRun({ text: "Nota metodologica: ", bold: true, font: "Arial", size: 20, italics: true }),
          new TextRun({ text: "I benchmark provengono da fonti globali, EU e specifiche per l\u2019Italia dove disponibili. I range per IT spend % revenue sono coerenti tra le fonti (Deloitte, FounderNest, Gartner Peer Community). Per i costi specifici di progetti ERP/AI, esiste maggiore variabilit\u00E0 in funzione della complessit\u00E0. La convergenza tra fonti diverse rafforza la credibilit\u00E0 del range raccomandato.", font: "Arial", size: 20, italics: true, color: "666666" }),
        ]),

        // ======= SEZIONE 2B: PEER GROUP =======
        new Paragraph({ children: [new PageBreak()] }),
        heading("Sezione 2B \u2014 Peer Group Comparabile"),
        
        para("Per ancorare i benchmark al profilo specifico di NOT, definiamo un peer group a cerchi concentrici:"),
        spacer(60),

        heading("Core Comparables (pi\u00F9 vicini)", HeadingLevel.HEADING_3),
        para("Aziende italiane/europee nel trade marketing, field operations, gestione pop-up store e brand activation. Revenue \u20AC10-30M, ~20-50 dipendenti interni con esteso uso di contractor, multi-progetto/multi-brand/multi-location. Esempi: CPM Italy, Pardgroup, Freeway, BeReady, Trade Srl. Queste aziende condividono la complessit\u00E0 operativa di NOT (gestione staff distribuito, logistica leggera, reporting multi-cliente) e tipicamente investono in IT il 2-4% del fatturato, concentrato su CRM/ERP basici e strumenti di field management."),

        heading("Adjacent Comparables", HeadingLevel.HEADING_3),
        para("Aziende di servizi operativi B2B con logistica leggera: facility management, event management, merchandising, retail services. Revenue \u20AC10-50M. Settori caratterizzati da workforce distribuita, scheduling complesso, inventory management e reporting multi-stakeholder. IT spend tipicamente 3-5% del fatturato, con trend crescente verso automazione e piattaforme cloud."),

        heading("General Mid-Market Benchmarks", HeadingLevel.HEADING_3),
        para("Aziende mid-market europee (revenue \u20AC10-50M) cross-settore. Secondo Deloitte e FounderNest, tech spend 4-10% del fatturato. EBITDA margin per servizi B2B tipicamente 8-15%. Investimenti in digital transformation in crescita del 13-16% CAGR in Italia/EMEA (IDC 2024). Questo cerchio fornisce il floor e il ceiling dei range."),

        // ======= SEZIONE 3: SCENARI =======
        new Paragraph({ children: [new PageBreak()] }),
        heading("Sezione 3 \u2014 Range Raccomandato per NOT (3 Scenari)"),

        // ---- SCENARIO A: CONSERVATIVO ----
        heading("Scenario A: Conservativo", HeadingLevel.HEADING_2),
        
        new Table({
          width: { size: 9306, type: WidthType.DXA },
          columnWidths: [3102, 6204],
          rows: [
            new TableRow({ children: [
              dataCell("% su Fatturato", 3102, { bold: true, fill: "E8F5E9" }),
              dataCell("1,0% \u2013 1,5%", 6204, { fill: "E8F5E9" }),
            ]}),
            new TableRow({ children: [
              dataCell("% su EBITDA (annuo)", 3102, { bold: true }),
              dataCell("10% \u2013 19% (su \u20AC1,44-1,80M)", 6204),
            ]}),
            new TableRow({ children: [
              dataCell("Budget Totale (\u20AC)", 3102, { bold: true, fill: "E8F5E9" }),
              dataCell("\u20AC180.000 \u2013 \u20AC270.000 su 18-24 mesi", 6204, { fill: "E8F5E9" }),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 1 (MVP, 3-6 mesi)", 3102, { bold: true }),
              dataCell("60% del budget = \u20AC108.000 \u2013 \u20AC162.000", 6204),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 2 (Roll-out, 6-12 mesi)", 3102, { bold: true, fill: "E8F5E9" }),
              dataCell("30% del budget = \u20AC54.000 \u2013 \u20AC81.000", 6204, { fill: "E8F5E9" }),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 3 (Optimization, anno 2-3)", 3102, { bold: true }),
              dataCell("10% del budget = \u20AC18.000 \u2013 \u20AC27.000/anno", 6204),
            ]}),
          ],
        }),
        spacer(60),
        boldPara("Ipotesi chiave: ", "Azienda prudente, primo investimento digitale significativo. Focus su MVP con scope ridotto (2-3 moduli core). Nessun finanziamento esterno. Budget interamente da cash flow operativo. Coerente con il floor dei benchmark ERP mid-market (\u20AC150K-250K) e con il profilo di azienda nel settore servizi con IT spend sotto la media di settore (~2% vs 3-5% benchmark)."),

        spacer(200),
        // ---- SCENARIO B: REALISTICO ----
        heading("Scenario B: Realistico (Raccomandato)", HeadingLevel.HEADING_2),

        new Table({
          width: { size: 9306, type: WidthType.DXA },
          columnWidths: [3102, 6204],
          rows: [
            new TableRow({ children: [
              dataCell("% su Fatturato", 3102, { bold: true, fill: LIGHT_BLUE }),
              dataCell("1,5% \u2013 2,5%", 6204, { fill: LIGHT_BLUE }),
            ]}),
            new TableRow({ children: [
              dataCell("% su EBITDA (annuo)", 3102, { bold: true }),
              dataCell("15% \u2013 31% (su \u20AC1,44-1,80M)", 6204),
            ]}),
            new TableRow({ children: [
              dataCell("Budget Totale (\u20AC)", 3102, { bold: true, fill: LIGHT_BLUE }),
              dataCell("\u20AC270.000 \u2013 \u20AC450.000 su 18-24 mesi", 6204, { fill: LIGHT_BLUE }),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 1 (MVP, 3-6 mesi)", 3102, { bold: true }),
              dataCell("55-60% del budget = \u20AC150.000 \u2013 \u20AC270.000", 6204),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 2 (Roll-out, 6-12 mesi)", 3102, { bold: true, fill: LIGHT_BLUE }),
              dataCell("30-35% del budget = \u20AC81.000 \u2013 \u20AC158.000", 6204, { fill: LIGHT_BLUE }),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 3 (Optimization, anno 2-3)", 3102, { bold: true }),
              dataCell("10-15% del budget = \u20AC27.000 \u2013 \u20AC68.000/anno", 6204),
            ]}),
          ],
        }),
        spacer(60),
        boldPara("Ipotesi chiave: ", "Azienda growth-oriented che riconosce l\u2019urgenza competitiva. Piattaforma AI completa con 4-5 moduli (logistics, staffing, inventory, sales, reporting). Allineato al range medio dei benchmark: ERP mid-market (\u20AC150-750K), AI operations platform (\u20AC100-300K custom), IT spend 3-5% per servizi B2B. Payback atteso 14-18 mesi (cfr. business case FTE). Budget distribuibile su 2 anni senza stress finanziario significativo: impatto su EBITDA ~8-16% su base annua."),
        boldPara("Nota: ", "Questo scenario \u00E8 allineato con le stime gi\u00E0 presentate nel business case NOT (piattaforma AI \u20AC250-300K), confermando la coerenza tra l\u2019analisi di affordability e il costo stimato della soluzione."),

        spacer(200),
        // ---- SCENARIO C: AGGRESSIVO ----
        heading("Scenario C: Aggressivo", HeadingLevel.HEADING_2),

        new Table({
          width: { size: 9306, type: WidthType.DXA },
          columnWidths: [3102, 6204],
          rows: [
            new TableRow({ children: [
              dataCell("% su Fatturato", 3102, { bold: true, fill: "FFF3E0" }),
              dataCell("2,5% \u2013 3,5%", 6204, { fill: "FFF3E0" }),
            ]}),
            new TableRow({ children: [
              dataCell("% su EBITDA (annuo)", 3102, { bold: true }),
              dataCell("25% \u2013 44% (su \u20AC1,44-1,80M)", 6204),
            ]}),
            new TableRow({ children: [
              dataCell("Budget Totale (\u20AC)", 3102, { bold: true, fill: "FFF3E0" }),
              dataCell("\u20AC450.000 \u2013 \u20AC630.000 su 18-24 mesi", 6204, { fill: "FFF3E0" }),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 1 (MVP, 3-6 mesi)", 3102, { bold: true }),
              dataCell("50% del budget = \u20AC225.000 \u2013 \u20AC315.000", 6204),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 2 (Roll-out, 6-12 mesi)", 3102, { bold: true, fill: "FFF3E0" }),
              dataCell("35% del budget = \u20AC158.000 \u2013 \u20AC221.000", 6204, { fill: "FFF3E0" }),
            ]}),
            new TableRow({ children: [
              dataCell("Fase 3 (Optimization, anno 2-3)", 3102, { bold: true }),
              dataCell("15% del budget = \u20AC68.000 \u2013 \u20AC95.000/anno", 6204),
            ]}),
          ],
        }),
        spacer(60),
        boldPara("Ipotesi chiave: ", "Azienda in modalit\u00E0 \u201Cfirst mover\u201D che punta a vantaggio competitivo strutturale. Piattaforma completa + integrazioni avanzate (AI predittiva, analytics real-time, integrazioni CRM/ERP esterni). Richiede possibile co-finanziamento tramite incentivi PNRR/Digital Europe o dilazione pagamenti. Impatto EBITDA significativo (>20% annuo), sostenibile solo con fiducia nel ROI e visione strategica chiara. Coerente con il ceiling dei benchmark: upper mid-market ERP (\u20AC500K+), piattaforme AI enterprise (\u20AC300K+). Rischio: over-investment rispetto alla maturit\u00E0 organizzativa attuale."),

        // ======= SEZIONE 3B: PHASING MVP -> SCALE =======
        new Paragraph({ children: [new PageBreak()] }),
        heading("Sezione 3B \u2014 Struttura Temporale MVP \u2192 Scale"),
        
        para("La struttura a fasi riduce il rischio d\u2019investimento e permette validazione progressiva del ROI:"),
        spacer(60),

        new Table({
          width: { size: 9306, type: WidthType.DXA },
          columnWidths: [1400, 1800, 1500, 1800, 2806],
          rows: [
            new TableRow({
              children: [
                headerCell("Fase", 1400),
                headerCell("Timeline", 1800),
                headerCell("% Budget", 1500),
                headerCell("Range \u20AC (Realistico)", 1800),
                headerCell("Deliverables Chiave", 2806),
              ],
            }),
            new TableRow({ children: [
              dataCell("1 \u2013 MVP / Pilot", 1400, { bold: true, fill: LIGHT_GRAY }),
              dataCell("Mesi 1-6", 1800, { fill: LIGHT_GRAY }),
              dataCell("55-60%", 1500, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("\u20AC150K-270K", 1800, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("Core modules (2-3), proof of value, user testing, feedback loop", 2806, { fill: LIGHT_GRAY }),
            ]}),
            new TableRow({ children: [
              dataCell("2 \u2013 Roll-out", 1400, { bold: true }),
              dataCell("Mesi 6-18", 1800),
              dataCell("30-35%", 1500, { align: AlignmentType.CENTER }),
              dataCell("\u20AC81K-158K", 1800, { align: AlignmentType.CENTER }),
              dataCell("Tutti i moduli, training, integrations, full deployment", 2806),
            ]}),
            new TableRow({ children: [
              dataCell("3 \u2013 Optimization", 1400, { bold: true, fill: LIGHT_GRAY }),
              dataCell("Anno 2-3", 1800, { fill: LIGHT_GRAY }),
              dataCell("10-15%/anno", 1500, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("\u20AC27K-68K/anno", 1800, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("AI fine-tuning, advanced analytics, new features, manutenzione", 2806, { fill: LIGHT_GRAY }),
            ]}),
          ],
        }),

        spacer(120),
        para([
          new TextRun({ text: "Razionale del phasing: ", bold: true, font: "Arial", size: 22 }),
          new TextRun({ text: "La concentrazione del 55-60% del budget nella Fase 1 \u00E8 coerente con le best practice di implementazione software mid-market (fonte: AdCirrus, Navsoft ERP Budget Guide). Il costo di implementazione nel primo anno tipicamente eguaglia o supera il costo software, dato il peso di configurazione, migrazione dati e change management. La Fase 3 riflette costi di manutenzione/evoluzione tipici del 10-15% annuo del costo iniziale, standard nel settore SaaS e custom software.", font: "Arial", size: 22 }),
        ]),

        // ======= SEZIONE 3C: ANALISI EBITDA =======
        heading("Analisi EBITDA: Sostenibilit\u00E0 dell\u2019Investimento", HeadingLevel.HEADING_2),
        
        para("Con EBITDA \u20AC1,44-1,80M, l\u2019impatto annualizzato dell\u2019investimento nei tre scenari:"),
        spacer(60),

        new Table({
          width: { size: 9306, type: WidthType.DXA },
          columnWidths: [2326, 2326, 2326, 2328],
          rows: [
            new TableRow({ children: [
              headerCell("Metrica", 2326),
              headerCell("Conservativo", 2326),
              headerCell("Realistico", 2326),
              headerCell("Aggressivo", 2328),
            ]}),
            new TableRow({ children: [
              dataCell("Budget totale (24 mesi)", 2326, { bold: true, fill: LIGHT_GRAY }),
              dataCell("\u20AC180-270K", 2326, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("\u20AC270-450K", 2326, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("\u20AC450-630K", 2328, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
            ]}),
            new TableRow({ children: [
              dataCell("Spesa media annua", 2326, { bold: true }),
              dataCell("\u20AC90-135K", 2326, { align: AlignmentType.CENTER }),
              dataCell("\u20AC135-225K", 2326, { align: AlignmentType.CENTER }),
              dataCell("\u20AC225-315K", 2328, { align: AlignmentType.CENTER }),
            ]}),
            new TableRow({ children: [
              dataCell("% EBITDA annuo assorbito", 2326, { bold: true, fill: LIGHT_GRAY }),
              dataCell("5-9%", 2326, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("8-16%", 2326, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("13-22%", 2328, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
            ]}),
            new TableRow({ children: [
              dataCell("Stress finanziario", 2326, { bold: true }),
              dataCell("Minimo", 2326, { align: AlignmentType.CENTER }),
              dataCell("Moderato", 2326, { align: AlignmentType.CENTER }),
              dataCell("Significativo", 2328, { align: AlignmentType.CENTER }),
            ]}),
            new TableRow({ children: [
              dataCell("Rischio", 2326, { bold: true, fill: LIGHT_GRAY }),
              dataCell("Sotto-investimento", 2326, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("Bilanciato", 2326, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
              dataCell("Over-engineering", 2328, { fill: LIGHT_GRAY, align: AlignmentType.CENTER }),
            ]}),
          ],
        }),

        spacer(120),
        para([
          new TextRun({ text: "Soglia di sostenibilit\u00E0: ", bold: true, font: "Arial", size: 22 }),
          new TextRun({ text: "Per un\u2019azienda con EBITDA margin 8-10%, un investimento che assorba oltre il 15-20% dell\u2019EBITDA annuo richiede una forte convinzione nel ROI e/o accesso a fonti di finanziamento agevolato. Il range realistico (\u20AC270-450K) mantiene l\u2019impatto annuo entro il 8-16%, considerato sostenibile per un investimento trasformativo con payback atteso inferiore a 18 mesi.", font: "Arial", size: 22 }),
        ]),

        // ======= SEZIONE 4: NOTE OPERATIVE =======
        new Paragraph({ children: [new PageBreak()] }),
        heading("Sezione 4 \u2014 Note Operative per la Quotazione"),
        
        para("Le seguenti linee guida sono destinate alla chat/team che costruir\u00E0 la quotazione della piattaforma AI, per garantire coerenza tra complessit\u00E0 dei requisiti e capacit\u00E0 d\u2019investimento di NOT."),
        spacer(80),

        new Paragraph({
          numbering: { reference: "guidelines", level: 0 },
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Range target per la quotazione: ", bold: true, font: "Arial", size: 22 }),
            new TextRun({ text: "Posizionare la proposta nel range \u20AC250.000-350.000 (cuore dello scenario realistico). Questo range \u00E8 ancorato a benchmark multipli (ERP mid-market, AI custom platform, IT spend % revenue) ed \u00E8 coerente con la stima gi\u00E0 presente nel business case NOT (\u20AC250-300K per la piattaforma AI).", font: "Arial", size: 22 }),
          ],
        }),
        new Paragraph({
          numbering: { reference: "guidelines", level: 0 },
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Evitare mismatch scope-budget: ", bold: true, font: "Arial", size: 22 }),
            new TextRun({ text: "Se il requirement log Excel contiene funzionalit\u00E0 che porterebbero il costo oltre \u20AC450K, \u00E8 necessario un esercizio di prioritizzazione (MoSCoW method: Must/Should/Could/Won\u2019t) per mantenere la quotazione entro il range sostenibile. Lo scope della Fase 1 deve essere definito in modo da rientrare in \u20AC150-200K.", font: "Arial", size: 22 }),
          ],
        }),
        new Paragraph({
          numbering: { reference: "guidelines", level: 0 },
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Struttura contrattuale a fasi: ", bold: true, font: "Arial", size: 22 }),
            new TextRun({ text: "Proporre contratto con commitment fermo solo sulla Fase 1 (MVP), con opzioni per Fase 2 e 3 condizionate ai risultati. Questo riduce il rischio percepito dal cliente e permette di iniziare con un impegno di \u20AC150-200K invece dell\u2019importo totale. Gate review al termine di ogni fase.", font: "Arial", size: 22 }),
          ],
        }),
        new Paragraph({
          numbering: { reference: "guidelines", level: 0 },
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Modello di pricing consigliato: ", bold: true, font: "Arial", size: 22 }),
            new TextRun({ text: "Fase 1 a prezzo fisso (project-based), Fase 2 con componente fissa + variabile legata allo scope effettivo, Fase 3 come canone di manutenzione/evoluzione annuale (SaaS-like). Questo mix bilancia prevedibilit\u00E0 per il cliente e flessibilit\u00E0 per il fornitore.", font: "Arial", size: 22 }),
          ],
        }),
        new Paragraph({
          numbering: { reference: "guidelines", level: 0 },
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Includere ROI nella proposta: ", bold: true, font: "Arial", size: 22 }),
            new TextRun({ text: "Collegare sempre la quotazione al business case FTE (risparmio \u20AC213.600/anno su 5 FTE equivalenti). Il payback deve essere evidente: investimento \u20AC250-350K con risparmio annuo \u20AC213K = payback 14-20 mesi. Questo trasforma la conversazione da \u201Ccosto\u201D a \u201Cinvestimento con ritorno misurabile\u201D.", font: "Arial", size: 22 }),
          ],
        }),
        new Paragraph({
          numbering: { reference: "guidelines", level: 0 },
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Considerare incentivi e agevolazioni: ", bold: true, font: "Arial", size: 22 }),
            new TextRun({ text: "L\u2019Italia ha stanziato \u20AC1,895 miliardi del PNRR per AI (fonte: European Commission). Esplorare bandi Transizione 4.0/5.0, credito d\u2019imposta per innovazione tecnologica, voucher digitalizzazione PMI. Questi possono coprire il 20-50% dell\u2019investimento, abbassando l\u2019esborso netto a \u20AC125-250K nello scenario realistico.", font: "Arial", size: 22 }),
          ],
        }),
        new Paragraph({
          numbering: { reference: "guidelines", level: 0 },
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Gestire le aspettative sulla timeline: ", bold: true, font: "Arial", size: 22 }),
            new TextRun({ text: "L\u2019MVP deve essere operativo in 4-6 mesi dalla firma per dimostrare valore rapidamente. Ogni mese di ritardo erode la credibilit\u00E0 del business case. Includere milestone chiare con deliverables tangibili ogni 4-6 settimane.", font: "Arial", size: 22 }),
          ],
        }),
        new Paragraph({
          numbering: { reference: "guidelines", level: 0 },
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Contingency e costi nascosti: ", bold: true, font: "Arial", size: 22 }),
            new TextRun({ text: "Includere un buffer del 15-20% nella quotazione per coprire scope creep, complessit\u00E0 di integrazione e change management. I benchmark di settore (Navsoft, AdCirrus) indicano che i costi reali di implementazione superano le stime iniziali nel 60-70% dei progetti. Meglio includere il buffer nella quotazione iniziale che richiedere varianti in corsa.", font: "Arial", size: 22 }),
          ],
        }),

        // ======= APPENDICE: FONTI =======
        new Paragraph({ children: [new PageBreak()] }),
        heading("Appendice \u2014 Fonti e Riferimenti"),
        
        para([new TextRun({ text: "Tutte le fonti utilizzate in questo documento, con data di pubblicazione/accesso:", font: "Arial", size: 20, italics: true, color: "666666" })]),
        spacer(60),

        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Deloitte, \u201CFrom tech investment to impact\u201D \u2013 Global Technology Leadership Study 2023. Tech spend medio: 5,49% revenue (2022), proiezione 5,85% (2024). Range per settore: 2-8%.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Deloitte, \u201CReinventing tech finance\u201D \u2013 CIO Insider. IT budget % revenue: da ~8% (banking) a <2% (construction), media 3,64% cross-industry.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Gartner, \u201CForecasts Worldwide IT Spending\u201D \u2013 Multiple releases (Q1 2025, Q3 2025, Q4 2024). Crescita IT globale 7,9-9,8% nel 2025. Software +14%, Services +9,4%.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "IDC, \u201CEMEA Digital Transformation Market Forecast 2024-2028\u201D \u2013 Gennaio 2025. CAGR 15,8%. Italia 13,9%.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "FounderNest, \u201CGlobal Innovation Budget Benchmarks for 2026\u201D \u2013 Dicembre 2025. Mid-market tech spend: 4-10% revenue.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Houseblend, \u201CERP Systems: A Comprehensive Cost Breakdown\u201D \u2013 2025. Mid-market (\u20AC10-50M): primo anno \u20AC20-125K, progetti completi \u20AC150-750K.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "AdCirrus, \u201CHow Much Does ERP Really Cost?\u201D \u2013 Novembre 2025. Mid-size implementation: \u20AC150K-750K. Quick Budget Rule: 3% revenue su 5 anni per ERP.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Advaiya, \u201CERP Cost in 2025: Complete Pricing Breakdown\u201D \u2013 Maggio 2025. Aziende spendono tipicamente 1-3% del fatturato annuo su ERP.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "CloudZero, \u201CThe State of AI Costs in 2025\u201D \u2013 Agosto 2025. Media mensile AI spend: $85.521 (+36% YoY). Focus enterprise.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "DDI Development, \u201CHow Much Does AI Cost in 2025\u201D. Range: \u20AC10-20K (base) a \u20AC300K+ (advanced).", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Softermii, \u201CThe Real Cost of Building AI-Powered Software in 2025\u201D \u2013 Luglio 2025. MVP: \u20AC30-70K. Custom operations: \u20AC100-300K.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Agrello/EU SME Digital Transformation Report 2025. 73% PMI EU a livello digitale base. Solo 13% adotta AI.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "European Commission / PNRR. Italia: \u20AC1,895 miliardi allocati per AI. Digital Europe Programme: \u20AC7,6 miliardi totali.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Navsoft, \u201CHow Much Does ERP Cost in 2025\u201D \u2013 Agosto 2025. Budget medio per utente: $9.000. Mid-sized: $150K-$1M.", size: 20, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 }, children: [new TextRun({ text: "Folio3/Dynamics, \u201CERP Cost in 2025\u201D \u2013 Settembre 2025. Mid-size: $55-62K/anno software + $20K-125K implementation.", size: 20, font: "Arial" })] }),

        spacer(300),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: ACCENT, space: 1 } },
          spacing: { before: 200 },
          children: [new TextRun({ text: "Documento preparato da HeyAI \u2013 Digital Strategy & Transformation", size: 18, color: "999999", italics: true, font: "Arial" })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "Febbraio 2026 | Versione 1.0", size: 18, color: "999999", italics: true, font: "Arial" })],
        }),
      ],
    },
  ],
});

// Generate
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("/home/claude/NOT_Investment_Affordability_Analysis.docx", buffer);
  console.log("Document generated successfully!");
});