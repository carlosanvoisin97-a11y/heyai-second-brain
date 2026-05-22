const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType,
        Header, Footer, PageNumber, HeadingLevel, VerticalAlign, TableLayoutType } = require('docx');
const fs = require('fs');

// Colors
const PRIMARY_BLUE = "1E3A5F";
const ACCENT_BLUE = "2E5A8F";
const LIGHT_BLUE = "E8F0F8";
const SUCCESS_GREEN = "2E7D32";
const HEADER_BG = "D5E8F0";
const WAVE1_BG = "E3F2FD";
const WAVE2_BG = "F3E5F5";

// Table styling
const tableBorder = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const cellBorders = { top: tableBorder, bottom: tableBorder, left: tableBorder, right: tableBorder };

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
        new TextRun("NOT si trova oggi ad un punto di svolta: la struttura operativa è completamente satura e alcune risorse chiave stanno svolgendo il lavoro di due persone. Per abilitare la strategia di crescita delineata (Wave 1: 2026-2028 e Wave 2: 2029-2030), è necessario liberare capacità operativa senza aumentare proporzionalmente i costi del personale.")
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
        new TextRun("Questo documento presenta tre scenari di ROI con ipotesi conservative (EBITDA 11%, durata media cliente 1 anno), dimostrando la sostenibilità economica dell'investimento su un orizzonte di 5 anni.")
      ]}),

      // METODOLOGIA
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Metodologia e Assunzioni")] }),
      new Paragraph({ spacing: { after: 150 }, children: [
        new TextRun("I calcoli si basano sulle seguenti assunzioni "),
        new TextRun({ text: "conservative", bold: true }),
        new TextRun(":")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Margine di riferimento: EBITDA 11%", bold: true }),
        new TextRun(" (punto medio del range 10-12%), più conservativo del gross margin")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Durata media cliente: 1 anno", bold: true }),
        new TextRun(" - ogni anno il cliente acquisito termina la collaborazione e va sostituito con uno nuovo")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Time-to-revenue cliente Activation: ", bold: true }),
        new TextRun("6-9 mesi (quindi ~50% del fatturato potenziale nel primo anno)")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, children: [
        new TextRun({ text: "Time-to-revenue cliente Vendita Diretta: ", bold: true }),
        new TextRun("3-6 mesi (quindi ~75% del fatturato potenziale nel primo anno)")
      ]}),
      new Paragraph({ numbering: { reference: "bullet-list", level: 0 }, spacing: { after: 300 }, children: [
        new TextRun({ text: "ROI calcolato come: ", bold: true }),
        new TextRun("(Beneficio Netto / Costo Totale) × 100")
      ]}),

      // TABELLA 1 - OPERATIONS AUTOMATION
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Operations Automation: AI vs Assunzioni")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Per sostenere la crescita senza la piattaforma AI, NOT dovrebbe assumere almeno 5 nuove risorse: 1 Manager Operations (€5.000/mese), 2 figure amministrative per riconciliazione dati (€2.500/mese cad.), 1 Formatore (€3.800/mese) e 1 Junior Area Manager (€4.000/mese). Costo totale: "),
        new TextRun({ text: "€213.600/anno", bold: true }),
        new TextRun(".")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("La piattaforma AI proposta ha un costo di "),
        new TextRun({ text: "€250.000-300.000", bold: true }),
        new TextRun(", con pagamento dilazionato (70% anno 1, 30% anno 2).")
      ]}),

      // Tabella 1
      new Table({
        columnWidths: [2340, 1404, 1404, 1404, 1404, 1404],
        rows: [
          // Wave header row
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, rowSpan: 2, verticalAlign: VerticalAlign.CENTER,
              shading: { fill: HEADER_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Scenario", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4212, type: WidthType.DXA }, columnSpan: 3,
              shading: { fill: WAVE1_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WAVE 1 (2026-2028)", bold: true, size: 20, color: "1565C0" })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2808, type: WidthType.DXA }, columnSpan: 2,
              shading: { fill: WAVE2_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WAVE 2 (2029-2030)", bold: true, size: 20, color: "7B1FA2" })] })] }),
          ]}),
          // Years header row
          new TableRow({ tableHeader: true, children: [
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
          // Scenario B: Piattaforma AI (70% anno 1, 30% anno 2)
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
          // Risparmio annuale
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Risparmio Annuale", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,6-38,6K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€123,6-138,6K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€213.600", bold: true, size: 20 })] })] }),
          ]}),
          // Risparmio cumulato
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Risparmio Cumulato", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€3,6-38,6K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€127-177K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€341-391K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€554-604K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€768-818K", size: 20, italics: true })] })] }),
          ]}),
          // ROI Annuale
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "ROI Annuale", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "2-18%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "49-46%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "85-71%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "85-71%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "85-71%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
          ]}),
          // ROI Cumulativo
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "ROI Cumulativo", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "2-18%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "51-59%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "136-130%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "222-201%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "307-273%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
          ]}),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 100 }, children: [
        new TextRun({ text: "FTE Equivalenti Liberati: ", bold: true }),
        new TextRun("La piattaforma libera l'equivalente di 4-5 FTE che possono essere riallocati su attività ad alto valore aggiunto.")
      ]}),
      new Paragraph({ spacing: { after: 300 }, children: [
        new TextRun({ text: "Payback Period: ", bold: true }),
        new TextRun("14-18 mesi")
      ]}),

      // TABELLA 2 - CLIENTE ACTIVATION
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Acquisizione Cliente Activation (tipo BAT)")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "⚠ Prerequisito: ", bold: true, color: "D32F2F" }),
        new TextRun("Questa opportunità è realizzabile solo con l'implementazione della piattaforma AI.")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Si ipotizza l'acquisizione di un cliente Activation con dimensioni pari al 50% di BAT (fatturato potenziale €8-9M/anno). "),
        new TextRun({ text: "Ipotesi conservative: ", bold: true }),
        new TextRun("durata cliente 1 anno (poi va sostituito), ramp-up 6-9 mesi (quindi fatturato effettivo ~50%), EBITDA 11%.")
      ]}),

      // Tabella 2
      new Table({
        columnWidths: [2340, 1404, 1404, 1404, 1404, 1404],
        rows: [
          // Wave header row
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, rowSpan: 2, verticalAlign: VerticalAlign.CENTER,
              shading: { fill: HEADER_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Voce", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4212, type: WidthType.DXA }, columnSpan: 3,
              shading: { fill: WAVE1_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WAVE 1 (2026-2028)", bold: true, size: 20, color: "1565C0" })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2808, type: WidthType.DXA }, columnSpan: 2,
              shading: { fill: WAVE2_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WAVE 2 (2029-2030)", bold: true, size: 20, color: "7B1FA2" })] })] }),
          ]}),
          // Years header row
          new TableRow({ tableHeader: true, children: [
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
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€45-50K", size: 20 })] })] }),
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
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€5-10K", size: 18, italics: true })] })] }),
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
          // Costi Cumulati
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Costi Cumulati", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€45-50K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€85-90K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€125-130K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€165-170K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€205-210K", size: 20, italics: true })] })] }),
          ]}),
          // Fatturato effettivo (50% per ramp-up ogni anno)
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Fatturato Effettivo", size: 20 })] }),
                         new Paragraph({ children: [new TextRun({ text: "(50% per ramp-up)", size: 16, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€4-4,5M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€4-4,5M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€4-4,5M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€4-4,5M", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€4-4,5M", size: 20 })] })] }),
          ]}),
          // EBITDA
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "EBITDA (11%)", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€440-495K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€440-495K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€440-495K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€440-495K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€440-495K", size: 20 })] })] }),
          ]}),
          // Beneficio Netto Annuale
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Beneficio Netto Annuale", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€390-450K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€400-455K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€400-455K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€400-455K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€400-455K", bold: true, size: 20 })] })] }),
          ]}),
          // Beneficio Cumulato
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Beneficio Cumulato", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€390-450K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€790-905K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,19-1,36M", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,59-1,82M", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€1,99-2,27M", size: 20, italics: true })] })] }),
          ]}),
          // ROI Annuale
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "ROI Annuale", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "780-900%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "1000-1138%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "1000-1138%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "1000-1138%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "1000-1138%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
          ]}),
          // ROI Cumulativo
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "ROI Cumulativo", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "780-900%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "878-1006%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "915-1046%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "936-1071%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "948-1081%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
          ]}),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 300 }, children: [
        new TextRun({ text: "Payback Period: ", bold: true }),
        new TextRun("< 2 mesi dall'inizio della collaborazione con il nuovo cliente")
      ]}),

      // TABELLA 3 - CLIENTI VENDITA DIRETTA
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Acquisizione Clienti Vendita Diretta (tipo K-ippun Haru)")] }),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "⚠ Prerequisito: ", bold: true, color: "D32F2F" }),
        new TextRun("Come per lo scenario precedente, questa opportunità richiede l'implementazione della piattaforma AI.")
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Si ipotizza l'acquisizione di 2 clienti/anno simili a K-ippun Haru (€40K/mese per pop-up). "),
        new TextRun({ text: "Ipotesi conservative: ", bold: true }),
        new TextRun("ogni cliente dura 1 anno, ramp-up 3-6 mesi (quindi ~75% fatturato effettivo), EBITDA 11%.")
      ]}),

      // Tabella 3
      new Table({
        columnWidths: [2340, 1404, 1404, 1404, 1404, 1404],
        rows: [
          // Wave header row
          new TableRow({ tableHeader: true, children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, rowSpan: 2, verticalAlign: VerticalAlign.CENTER,
              shading: { fill: HEADER_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Voce", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 4212, type: WidthType.DXA }, columnSpan: 3,
              shading: { fill: WAVE1_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WAVE 1 (2026-2028)", bold: true, size: 20, color: "1565C0" })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 2808, type: WidthType.DXA }, columnSpan: 2,
              shading: { fill: WAVE2_BG, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WAVE 2 (2029-2030)", bold: true, size: 20, color: "7B1FA2" })] })] }),
          ]}),
          // Years header row
          new TableRow({ tableHeader: true, children: [
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
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€45-50K", size: 20 })] })] }),
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
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€5-10K", size: 18, italics: true })] })] }),
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
          // Costi Cumulati
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Costi Cumulati", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€45-50K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€85-90K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€125-130K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€165-170K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€205-210K", size: 20, italics: true })] })] }),
          ]}),
          // Clienti acquisiti
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Clienti Acquisiti (nuovi)", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "2", size: 20 })] })] }),
          ]}),
          // Fatturato (2 clienti × €480K × 75%)
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Fatturato Effettivo", size: 20 })] }),
                         new Paragraph({ children: [new TextRun({ text: "(75% per ramp-up)", size: 16, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€720K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€720K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€720K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€720K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€720K", size: 20 })] })] }),
          ]}),
          // EBITDA
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "EBITDA (11%)", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€79K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€79K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€79K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€79K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€79K", size: 20 })] })] }),
          ]}),
          // Beneficio Netto Annuale
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Beneficio Netto Annuale", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€29-34K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€39K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€39K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€39K", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€39K", bold: true, size: 20 })] })] }),
          ]}),
          // Beneficio Cumulato
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Beneficio Cumulato", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€29-34K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€68-73K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€107-112K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€146-151K", size: 20, italics: true })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€185-190K", size: 20, italics: true })] })] }),
          ]}),
          // ROI Annuale
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "ROI Annuale", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "58-76%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "98%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "98%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "98%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "98%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
          ]}),
          // ROI Cumulativo
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "ROI Cumulativo", bold: true, size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "58-76%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "76-86%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "82-90%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "86-91%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 1404, type: WidthType.DXA }, shading: { fill: "C8E6C9", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "88-93%", bold: true, size: 20, color: SUCCESS_GREEN })] })] }),
          ]}),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 300 }, children: [
        new TextRun({ text: "Payback Period: ", bold: true }),
        new TextRun("14-17 mesi")
      ]}),

      // TABELLA 4 - SINTESI CONSOLIDATA
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. Sintesi Consolidata")] }),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun("Questa tabella consolida tutti gli scenari, mostrando l'investimento complessivo e il ritorno totale atteso nei 5 anni con le ipotesi conservative adottate.")
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
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Piattaforma AI", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€250-300K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€768-818K risparmio", size: 20 })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "Marketing & Lead Gen", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€205-210K", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "(abilita crescita)", size: 20, italics: true })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "TOTALE INVESTIMENTO", bold: true, size: 22 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€455-510K", bold: true, size: 22 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "FFF3E0", type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "", size: 22 })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ children: [new TextRun({ text: "EBITDA Cliente Activation", size: 20 })] })] }),
            new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: