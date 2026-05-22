const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType,
        Header, Footer, PageNumber, HeadingLevel } = require('docx');
const fs = require('fs');

// Colors
const PRIMARY_BLUE = "1E3A5F";
const ACCENT_BLUE = "2E5A8F";
const LIGHT_BLUE = "E8F0F8";
const SUCCESS_GREEN = "2E7D32";
const HEADER_BG = "D5E8F0";

// Table styling
const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

// Column widths
const COL_5 = [1872, 1872, 1872, 1872, 1872]; // 5 equal columns for years
const COL_6 = [2340, 1404, 1404, 1404, 1404, 1404]; // Label + 5 years

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 48, bold: true, color: PRIMARY_BLUE, font: "Arial" },
        paragraph: { spacing: { before: 0, after: 300 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, color: PRIMARY_BLUE, font: "Arial" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: ACCENT_BLUE, font: "Arial" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullet-list",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-list",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({ 
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: "Business Case NOT | HeyAI", size: 18, color: "666666" })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({ 
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Pagina ", size: 18 }), new TextRun({ children: [PageNumber.CURRENT], size: 18 }), new TextRun({ text: " di ", size: 18 }), new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18 })]
      })] })
    },
    children: [
      // TITLE
      new Paragraph({ heading: HeadingLevel.TITLE, children: [new TextRun("Business Case")] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 },
        children: [new TextRun({ text: "Proposta di valore HeyAI per NOT", size: 28, color: ACCENT_BLUE })] }),
      
      // EXECUTIVE SUMMARY
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("NOT si trova oggi ad un punto di svolta: la struttura operativa è completamente satura e alcune risorse chiave stanno svolgendo il lavoro di due persone. Per abilitare la strategia di crescita delineata (Wave 1: 2026-2027 e Wave 2: 2028+), è necessario liberare capacità operativa senza aumentare proporzionalmente i costi del personale.")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("HeyAI propone un intervento su tre fronti: "),
        new TextRun({ text: "(1) Operations Automation", bold: true }),
        new TextRun(" come prerequisito fondamentale, "),
        new TextRun({ text: "(2) Online Activation", bold: true }),
        new TextRun(" per costruire visibilità e trust, e "),
        new TextRun({ text: "(3) Lead Generation", bold: true }),
        new TextRun(" per accelerare l'acquisizione clienti.")
      ]}),
      new Paragraph({ spacing: { after: 300 }, children: [
        new TextRun("Questo documento presenta tre scenari di ROI che dimostrano la sostenibilità economica dell'investimento, con un orizzonte temporale di 5 anni coerente con la roadmap strategica.")
      ]}),

      // METODOLOGIA
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Metodologia e Assunzioni")] }),
      new Paragraph({ spacing: { after: 150 }, children: [
        new TextRun("I calcoli si basano sulle seguenti assunzioni conservative:")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Costo medio del personale NOT: ", bold: true }),
        new TextRun("basato sulla struttura attuale di ~20 FTE con costo mensile totale di €79.700")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Gross margin di riferimento: ", bold: true }),
        new TextRun("26,5% (punto medio del range 25-28%)")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Time-to-revenue cliente Activation: ", bold: true }),
        new TextRun("6-9 mesi")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Time-to-revenue cliente Vendita Diretta: ", bold: true }),
        new TextRun("3-6 mesi")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 300 }, children: [
        new TextRun({ text: "ROI calcolato come: ", bold: true }),
        new TextRun("(Beneficio Netto Cumulato / Investimento Totale) × 100")
      ]}),

      // TABELLA 1 - OPERATIONS AUTOMATION
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Operations Automation: AI vs Assunzioni")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Per sostenere la crescita senza la piattaforma AI, NOT dovrebbe assumere almeno 5 nuove risorse: 1 Manager Operations, 2 figure amministrative per la riconciliazione dati, 1 Formatore e 1 Junior Area Manager. Questo comporterebbe un aumento del costo del personale di "),
        new TextRun({ text: "€213.600/anno", bold: true }),
        new TextRun(".")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("La piattaforma AI proposta ha un costo di "),
        new TextRun({ text: "€250.000-300.000", bold: true }),
        new TextRun(", con pagamento dilazionato (70% anno 1, 30% anno 2) e ammortamento su 3 anni.")
      ]}),

      // Header row
      new Table({
        columnWidths: [2340, 1404, 1404, 1404, 1404, 1404],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Scenario", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 1", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 2", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 3", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 4", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 5", bold: true, size: 20 })] })] }),
          ]}),
          // Scenario A: Nuove assunzioni
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "A) Nuove Assunzioni", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", size: 20 })] })] }),
          ]}),
          // Costo cumulato A
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Costo Cumulato A", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€427.200", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€640.800", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€854.400", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1.068.000", size: 20, italics: true })] })] }),
          ]}),
          // Scenario B: Piattaforma AI
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "B) Piattaforma AI", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€175-210K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€75-90K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€0", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€0", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€0", size: 20 })] })] }),
          ]}),
          // Costo cumulato B
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Costo Cumulato B", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€175-210K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€250-300K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€250-300K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€250-300K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€250-300K", size: 20, italics: true })] })] }),
          ]}),
          // Risparmio
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Risparmio (A - B)", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,6-38,6K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€127-177K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€341-391K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€554-604K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€768-818K", bold: true, size: 20 })] })] }),
          ]}),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 100 }, children: [
        new TextRun({ text: "FTE Equivalenti Liberati: ", bold: true }),
        new TextRun("La piattaforma libera l'equivalente di 4-5 FTE che possono essere riallocati su attività ad alto valore aggiunto (lead generation, gestione clienti, sviluppo commerciale).")
      ]}),
      new Paragraph({ spacing: { after: 300 }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR }, children: [
        new TextRun({ text: "ROI a 5 anni: 256% - 327%", bold: true, size: 24, color: SUCCESS_GREEN }),
        new TextRun({ text: " | Payback Period: 12-14 mesi", size: 22 })
      ]}),

      // TABELLA 2 - CLIENTE ACTIVATION
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Acquisizione Cliente Activation (tipo BAT)")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "Prerequisito: ", bold: true, color: "D32F2F" }),
        new TextRun("Questa opportunità è realizzabile solo con l'implementazione della piattaforma AI, che libera le risorse necessarie per lead generation e gestione clienti.")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Si ipotizza l'acquisizione di un nuovo cliente Activation con dimensioni pari al 50% di BAT, generando circa "),
        new TextRun({ text: "€8-9M/anno di fatturato aggiuntivo", bold: true }),
        new TextRun(". Con un gross margin del 26,5%, questo si traduce in circa "),
        new TextRun({ text: "€2,1-2,4M/anno di margine lordo", bold: true }),
        new TextRun(". Time-to-revenue stimato: 6-9 mesi.")
      ]}),

      new Table({
        columnWidths: [2340, 1404, 1404, 1404, 1404, 1404],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Voce", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 1", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 2", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 3", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 4", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 5", bold: true, size: 20 })] })] }),
          ]}),
          // Costi Marketing
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Costi Marketing HeyAI", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€50K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 20 })] })] }),
          ]}),
          // Breakdown costi
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "  - Setup iniziale", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€10K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18 })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "  - Fee annuale", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
          ]}),
          // Ricavi
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Margine Lordo Nuovo Cliente", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,1-1,2M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,1-2,4M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,1-2,4M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,1-2,4M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,1-2,4M", size: 20 })] })] }),
          ]}),
          // Nota anno 1
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "  (Anno 1: 50% per ramp-up)", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "", size: 18 })] })] }),
          ]}),
          // Beneficio Netto
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Beneficio Netto", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,05-1,15M", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,06-2,36M", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,06-2,36M", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,06-2,36M", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,06-2,36M", bold: true, size: 20 })] })] }),
          ]}),
          // Cumulato
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Beneficio Cumulato", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,05-1,15M", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,11-3,51M", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€5,17-5,87M", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€7,23-8,23M", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€9,29-10,59M", size: 20, italics: true })] })] }),
          ]}),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 300 }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR }, children: [
        new TextRun({ text: "ROI a 5 anni: 4.300% - 4.900%", bold: true, size: 24, color: SUCCESS_GREEN }),
        new TextRun({ text: " | Payback Period: < 1 mese dall'acquisizione cliente", size: 22 })
      ]}),

      // TABELLA 3 - CLIENTI VENDITA DIRETTA
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Acquisizione Clienti Vendita Diretta (tipo K-ippun Haru)")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "Prerequisito: ", bold: true, color: "D32F2F" }),
        new TextRun("Come per lo scenario precedente, questa opportunità richiede l'implementazione della piattaforma AI.")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Si ipotizza l'acquisizione di 3-4 nuovi clienti simili a K-ippun Haru. Ogni cliente genera circa "),
        new TextRun({ text: "€480K/anno", bold: true }),
        new TextRun(" (€40K/mese × 12 mesi, ipotizzando 1 pop-up attivo per cliente come fase iniziale). Con 4 nuovi clienti e potenziale espansione a 2 pop-up ciascuno dal secondo anno, il fatturato aggiuntivo può raggiungere "),
        new TextRun({ text: "€1,9-3,8M/anno", bold: true }),
        new TextRun(". Time-to-revenue stimato: 3-6 mesi.")
      ]}),

      new Table({
        columnWidths: [2340, 1404, 1404, 1404, 1404, 1404],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Voce", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 1", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 2", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 3", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 4", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: HEADER_BG, type: ShadingType.CLEAR }, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Anno 5", bold: true, size: 20 })] })] }),
          ]}),
          // Costi Marketing
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Costi Marketing HeyAI", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€45K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 20 })] })] }),
          ]}),
          // Breakdown costi
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "  - Setup iniziale", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€5K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18 })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "  - Fee annuale", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€40K", size: 18, italics: true })] })] }),
          ]}),
          // Numero clienti
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Nuovi Clienti Acquisiti", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "+2", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4 (totale)", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4 (totale)", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "4 (totale)", size: 20 })] })] }),
          ]}),
          // Pop-up attivi
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Pop-up Attivi (totale)", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "6", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "8", size: 20 })] })] }),
          ]}),
          // Fatturato
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Fatturato Aggiuntivo", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€480K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,88M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,84M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,84M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,84M", size: 20 })] })] }),
          ]}),
          // Margine
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Margine Lordo (26,5%)", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€127K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€763K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,02M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,02M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,02M", size: 20 })] })] }),
          ]}),
          // Beneficio Netto
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Beneficio Netto", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€82K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€723K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€978K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€978K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€978K", bold: true, size: 20 })] })] }),
          ]}),
          // Cumulato
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Beneficio Cumulato", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€82K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€805K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,78M", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€2,76M", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,74M", size: 20, italics: true })] })] }),
          ]}),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 300 }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR }, children: [
        new TextRun({ text: "ROI a 5 anni: 1.720%", bold: true, size: 24, color: SUCCESS_GREEN }),
        new TextRun({ text: " | Payback Period: 6-7 mesi", size: 22 })
      ]}),

      // TABELLA 4 - SINTESI CONSOLIDATA
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. Sintesi Consolidata: Investimento Totale vs Ritorno Atteso")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Questa tabella consolida tutti gli scenari, mostrando l'investimento complessivo richiesto e il ritorno totale atteso nell'arco dei 5 anni.")
      ]}),

      new Table({
        columnWidths: [3120, 3120, 3120],
        rows: [
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Componente", bold: true, size: 22, color: "FFFFFF" })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Investimento 5 Anni", bold: true, size: 22, color: "FFFFFF" })] })] }),
            new TableCell({ borders: cellBorders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Ritorno 5 Anni", bold: true, size: 22, color: "FFFFFF" })] })] }),
          ]}),
          // Piattaforma AI
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Piattaforma AI (Operations)", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€250-300K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€768-818K risparmio", size: 20 })] })] }),
          ]}),
          // Marketing Lead Gen
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Marketing & Lead Generation", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€215K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Prerequisito per crescita", size: 20, italics: true })] })] }),
          ]}),
          // Totale investimento
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "TOTALE INVESTIMENTO", bold: true, size: 22 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€465-515K", bold: true, size: 22 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "", size: 22 })] })] }),
          ]}),
          // Margine da nuovo cliente Activation
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Margine da Cliente Activation", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€9,29-10,59M", size: 20 })] })] }),
          ]}),
          // Margine da clienti Vendita Diretta
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Margine da Clienti Vendita Diretta", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,74M", size: 20 })] })] }),
          ]}),
          // Risparmio operativo
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Risparmio Operativo (vs assunzioni)", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€768-818K", size: 20 })] })] }),
          ]}),
          // Totale ritorno
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "TOTALE RITORNO LORDO", bold: true, size: 22 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "", size: 22 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€13,8-15,1M", bold: true, size: 22, color: SUCCESS_GREEN })] })] }),
          ]}),
          // ROI Complessivo
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "ROI COMPLESSIVO", bold: true, size: 24 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR }, columnSpan: 2,
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2.680% - 3.150%", bold: true, size: 28, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "", size: 22 })] })] }),
          ]}),
        ]
      }),

      // RISCHIO DI NON AGIRE
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. Il Rischio di Non Agire")] }),
      new Paragraph({ spacing: { after: 150 }, children: [
        new TextRun("Se NOT decide di mantenere lo status quo, si espone a rischi significativi:")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Dipendenza critica da BAT: ", bold: true }),
        new TextRun("con il 95% del fatturato concentrato su un singolo cliente, qualsiasi riduzione del budget BAT avrebbe impatti devastanti sul business")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Saturazione operativa permanente: ", bold: true }),
        new TextRun("impossibilità di acquisire nuovi clienti senza assumere personale, con conseguente aumento dei costi fissi e riduzione della flessibilità")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Perdita di competitività: ", bold: true }),
        new TextRun("i competitor che investono in automazione potranno offrire prezzi più competitivi e servizi migliori")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 300 }, children: [
        new TextRun({ text: "Burnout del team: ", bold: true }),
        new TextRun("le risorse chiave che già lavorano come \"due persone\" rischiano esaurimento, con conseguente turnover e perdita di know-how")
      ]}),

      // CONCLUSIONE
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Conclusione")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("L'investimento proposto da HeyAI rappresenta una scelta strategica con un ROI complessivo stimato tra il "),
        new TextRun({ text: "2.680% e il 3.150%", bold: true }),
        new TextRun(" su un orizzonte di 5 anni. La logica è chiara:")
      ]}),
      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: "La piattaforma AI è il prerequisito fondamentale: ", bold: true }),
        new TextRun("libera capacità operativa e risorse, rendendo possibile la crescita senza esplodere i costi del personale")
      ]}),
      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: "Il marketing e la lead generation accelerano la crescita: ", bold: true }),
        new TextRun("le risorse liberate possono dedicarsi all'acquisizione di nuovi clienti, sia Activation che Vendita Diretta")
      ]}),
      new Paragraph({ numbering: { reference: "numbered-list", level: 0 }, children: [
        new TextRun({ text: "La diversificazione del portafoglio riduce il rischio: ", bold: true }),
        new TextRun("passare dal 95% di dipendenza da BAT a un mix più equilibrato protegge NOT da shock esterni")
      ]}),
      new Paragraph({ spacing: { before: 200 }, children: [
        new TextRun("L'investimento totale di "),
        new TextRun({ text: "€465-515K", bold: true }),
        new TextRun(" distribuito su 5 anni genera un ritorno lordo stimato di "),
        new TextRun({ text: "€13,8-15,1M", bold: true }),
        new TextRun(", con un payback period complessivo di circa "),
        new TextRun({ text: "12-14 mesi", bold: true }),
        new TextRun(".")
      ]}),
      new Paragraph({ spacing: { before: 300 }, alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: "HeyAI è pronta a supportare NOT nel suo percorso di crescita.", bold: true, size: 24, color: PRIMARY_BLUE })
      ]}),
    ]
  }]
});

// Save document
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/Business_Case_NOT_HeyAI.docx", buffer);
  console.log("Document created successfully!");
});