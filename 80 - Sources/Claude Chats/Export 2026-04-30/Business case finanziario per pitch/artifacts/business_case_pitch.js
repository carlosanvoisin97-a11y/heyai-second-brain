const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageBreak, LevelFormat, TabStopType, TabStopPosition,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
  PageNumber
} = require("docx");

// ============ CONSTANTS ============
const COLORS = {
  primary: "1B3A5C",    // Dark navy
  accent: "2E75B6",     // Blue accent
  light: "D5E8F0",      // Light blue
  lightGray: "F2F2F2",
  medGray: "E0E0E0",
  darkGray: "555555",
  white: "FFFFFF",
  black: "000000",
  green: "2E7D32",
  red: "C62828",
  orange: "E65100",
};

const FONTS = { main: "Arial", mono: "Consolas" };
const PAGE_WIDTH = 11906; // A4
const PAGE_HEIGHT = 16838;
const MARGIN = 1440;
const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN; // 9026

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = {
  top: { style: BorderStyle.NONE, size: 0 },
  bottom: { style: BorderStyle.NONE, size: 0 },
  left: { style: BorderStyle.NONE, size: 0 },
  right: { style: BorderStyle.NONE, size: 0 },
};
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

// ============ HELPERS ============
function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({ heading: level, spacing: { before: 300, after: 150 }, children: [new TextRun({ text, font: FONTS.main })] });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.afterSpacing || 120, before: opts.beforeSpacing || 0, line: 276 },
    alignment: opts.alignment || AlignmentType.JUSTIFIED,
    children: [new TextRun({ text, font: FONTS.main, size: opts.size || 21, bold: opts.bold || false, color: opts.color || COLORS.black, italics: opts.italics || false })],
  });
}

function multiRunPara(runs, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.afterSpacing || 120, before: opts.beforeSpacing || 0, line: 276 },
    alignment: opts.alignment || AlignmentType.JUSTIFIED,
    children: runs.map(r => new TextRun({ font: FONTS.main, size: r.size || 21, bold: r.bold || false, color: r.color || COLORS.black, italics: r.italics || false, text: r.text })),
  });
}

function cell(text, opts = {}) {
  const width = opts.width || undefined;
  return new TableCell({
    borders: opts.noBorders ? noBorders : borders,
    width: width ? { size: width, type: WidthType.DXA } : undefined,
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    verticalAlign: opts.vAlign || "center",
    children: [new Paragraph({
      alignment: opts.alignment || AlignmentType.LEFT,
      children: [new TextRun({ text: text || "", font: FONTS.main, size: opts.size || 19, bold: opts.bold || false, color: opts.color || COLORS.black, italics: opts.italics || false })],
    })],
  });
}

function multiRunCell(runs, opts = {}) {
  const width = opts.width || undefined;
  return new TableCell({
    borders: opts.noBorders ? noBorders : borders,
    width: width ? { size: width, type: WidthType.DXA } : undefined,
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    verticalAlign: opts.vAlign || "center",
    children: [new Paragraph({
      alignment: opts.alignment || AlignmentType.LEFT,
      children: runs.map(r => new TextRun({ font: FONTS.main, size: r.size || 19, bold: r.bold || false, color: r.color || COLORS.black, italics: r.italics || false, text: r.text })),
    })],
  });
}

function headerRow(texts, widths, opts = {}) {
  return new TableRow({
    children: texts.map((t, i) => cell(t, { width: widths[i], shading: opts.shading || COLORS.primary, color: COLORS.white, bold: true, size: 19, alignment: opts.alignment })),
  });
}

function dataRow(texts, widths, opts = {}) {
  return new TableRow({
    children: texts.map((t, i) => {
      const cellOpts = { width: widths[i], size: 19 };
      if (opts.shading) cellOpts.shading = opts.shading;
      if (opts.bold) cellOpts.bold = opts.bold;
      if (opts.color) cellOpts.color = opts.color;
      if (i > 0 && opts.alignRight) cellOpts.alignment = AlignmentType.RIGHT;
      return cell(t, cellOpts);
    }),
  });
}

function makeTable(rows, widths) {
  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: widths,
    rows,
  });
}

function spacer(size = 100) {
  return new Paragraph({ spacing: { before: size, after: size }, children: [] });
}

function notePara(text) {
  return multiRunPara([
    { text: "Nota: ", bold: true, size: 18, italics: true, color: COLORS.darkGray },
    { text, size: 18, italics: true, color: COLORS.darkGray },
  ]);
}

function bulletItem(text, reference) {
  return new Paragraph({
    numbering: { reference, level: 0 },
    spacing: { after: 60, line: 276 },
    children: [new TextRun({ text, font: FONTS.main, size: 21 })],
  });
}

function boldBulletItem(boldText, normalText, reference) {
  return new Paragraph({
    numbering: { reference, level: 0 },
    spacing: { after: 60, line: 276 },
    children: [
      new TextRun({ text: boldText, font: FONTS.main, size: 21, bold: true }),
      new TextRun({ text: normalText, font: FONTS.main, size: 21 }),
    ],
  });
}

// ============ DOCUMENT ============
const doc = new Document({
  styles: {
    default: { document: { run: { font: FONTS.main, size: 21 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: FONTS.main, color: COLORS.primary },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORS.accent, space: 4 } } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: FONTS.main, color: COLORS.accent },
        paragraph: { spacing: { before: 280, after: 150 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 23, bold: true, font: FONTS.main, color: COLORS.primary },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets2", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets3", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets4", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets5", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "bullets6", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers1", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [
    // ===== COVER PAGE =====
    {
      properties: {
        page: { size: { width: PAGE_WIDTH, height: PAGE_HEIGHT }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } },
      },
      children: [
        spacer(2000),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "BUSINESS CASE", font: FONTS.main, size: 20, color: COLORS.accent, bold: true, characterSpacing: 200 })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Pitch", font: FONTS.main, size: 56, bold: true, color: COLORS.primary })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "Modulo Creativo \u2014 Analisi Strategica e Produzione Integrata", font: FONTS.main, size: 24, color: COLORS.darkGray })] }),
        spacer(200),
        new Paragraph({ alignment: AlignmentType.CENTER, border: { top: { style: BorderStyle.SINGLE, size: 2, color: COLORS.accent, space: 8 }, bottom: { style: BorderStyle.SINGLE, size: 2, color: COLORS.accent, space: 8 } }, spacing: { before: 200, after: 200 }, children: [new TextRun({ text: "Analisi del Risparmio Operativo e dell\u2019Accelerazione Competitiva", font: FONTS.main, size: 22, italics: true, color: COLORS.primary })] }),
        spacer(400),
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Preparato per: Noloop S.r.l.", font: FONTS.main, size: 21, color: COLORS.darkGray })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: "Preparato da: HeyAI", font: FONTS.main, size: 21, color: COLORS.darkGray })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: "Data: Marzo 2026", font: FONTS.main, size: 21, color: COLORS.darkGray })] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 }, children: [new TextRun({ text: "Versione: 3.0 \u2014 Revisione indipendente", font: FONTS.main, size: 21, color: COLORS.darkGray })] }),
        spacer(600),
        new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "CONFIDENZIALE", font: FONTS.main, size: 18, bold: true, color: COLORS.red, characterSpacing: 150 })] }),
      ],
    },

    // ===== MAIN CONTENT =====
    {
      properties: {
        page: { size: { width: PAGE_WIDTH, height: PAGE_HEIGHT }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: COLORS.accent, space: 4 } },
            children: [
              new TextRun({ text: "Business Case \u2014 Pitch (Modulo Creativo)", font: FONTS.main, size: 16, color: COLORS.darkGray }),
              new PositionalTab({ alignment: PositionalTabAlignment.RIGHT, relativeTo: PositionalTabRelativeTo.MARGIN, leader: PositionalTabLeader.NONE }),
              new TextRun({ text: "CONFIDENZIALE", font: FONTS.main, size: 16, color: COLORS.darkGray, bold: true }),
            ],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            border: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.medGray, space: 4 } },
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "HeyAI \u2014 Noloop Business Case Pitch", font: FONTS.main, size: 16, color: COLORS.darkGray }),
              new TextRun({ text: "  |  Pag. ", font: FONTS.main, size: 16, color: COLORS.darkGray }),
              new TextRun({ children: [PageNumber.CURRENT], font: FONTS.main, size: 16, color: COLORS.darkGray }),
            ],
          })],
        }),
      },
      children: [
        // ===== 1. EXECUTIVE SUMMARY =====
        heading("1. Executive Summary", HeadingLevel.HEADING_1),
        
        para("La presente analisi valuta il valore economico generato dall\u2019implementazione di Pitch, un modulo integrato di analisi strategica e produzione creativa basato su intelligenza artificiale, destinato al reparto creativo di Noloop S.r.l."),
        
        para("L\u2019analisi si basa su dati operativi validati dal cliente (interviste con Ivano Romano, Communication Director, e organigramma aggiornato al 17/03/2025) e su benchmark retributivi per agenzie eventi corporate a Milano."),
        
        para("Il modulo interviene su un\u2019inefficienza strutturale documentata: il team creativo (9 risorse) gestisce ~50 presentazioni competitive all\u2019anno con 3-4 brief sovrapposti e deadline medie di 15 giorni, senza tempo per analisi strategica pre-proposta. Il risultato \u00e8 un tasso sistematico di proposte duplicate o disallineate."),

        spacer(80),
        
        // Executive summary table
        makeTable([
          headerRow(["Metrica chiave", "Valore"], [5500, 3526]),
          dataRow(["Risparmio operativo annuo (scenario realistico, 85%)", "\u20ac57.500"], [5500, 3526], { bold: true }),
          dataRow(["Risparmio operativo annuo (scenario base, 100%)", "\u20ac67.600"], [5500, 3526]),
          dataRow(["Ore di lavoro liberate", "~1.827 ore/anno"], [5500, 3526]),
          dataRow(["Equivalente FTE", "~1,06 FTE"], [5500, 3526]),
          dataRow(["Gare aggiuntive partecipabili", "~5-6/anno"], [5500, 3526]),
          dataRow(["Impatto potenziale su win rate", "Da 20% a 25-28%"], [5500, 3526]),
          dataRow(["Revenue aggiuntivo potenziale", "\u20ac930K - \u20ac1.170K/anno"], [5500, 3526]),
          dataRow(["Riduzione time-to-proposal", "Da 12-15 gg a 8-10 gg"], [5500, 3526]),
        ], [5500, 3526]),

        notePara("Il revenue aggiuntivo \u00e8 classificato come accelerazione competitiva, non come risparmio operativo diretto. I due livelli sono presentati separatamente per chiarezza metodologica."),

        // ===== 2. CONTESTO OPERATIVO =====
        new Paragraph({ children: [new PageBreak()] }),
        heading("2. Comprensione del Contesto Operativo", HeadingLevel.HEADING_1),

        heading("2.1 Profilo aziendale", HeadingLevel.HEADING_2),
        para("Noloop S.r.l. \u00e8 un\u2019agenzia di eventi corporate con sede a Milano, ~150 dipendenti e ~\u20ac55M di fatturato annuo su ~260 commesse. Il reparto creativo, diretto da Ivano Romano (Communication Director) e Gianluca Villari (Creative Director), gestisce la risposta a gare e brief competitivi che rappresentano il principale canale di acquisizione di nuove commesse."),

        heading("2.2 Workflow attuale: dalla ricezione del brief alla proposta", HeadingLevel.HEADING_2),
        
        para("Il flusso operativo attuale presenta due criticit\u00e0 strutturali concatenate che Pitch \u00e8 progettato per risolvere:"),

        boldBulletItem("Analisi strategica assente. ", "All\u2019arrivo di un brief, il team dovrebbe condurre ricerca approfondita su comunicati stampa, social del cliente, iniziative passate, posizionamento competitivo, testimonial e scenografie precedenti. Tempo ideale stimato: 1-2 giornate/persona. In pratica questa attivit\u00e0 non viene svolta \u2014 con 3-4 brief sovrapposti e deadline a 15 giorni, non esiste il margine temporale. Il team parte \u201Cal buio\u201D, generando proposte duplicate o disallineate.", "bullets"),
        boldBulletItem("Produzione creativa frammentata. ", "Il team utilizza gi\u00e0 strumenti AI (Midjourney, DALL-E, Runway, ecc.) ma in modo frammentato: piattaforme diverse, login diversi, nessun flusso continuo. Ogni output richiede numerosi tentativi senza contesto brand pre-caricato, e il passaggio da uno strumento all\u2019altro \u00e8 interamente manuale.", "bullets"),

        heading("2.3 Composizione del reparto creativo", HeadingLevel.HEADING_2),
        para("Organigramma al 17/03/2025 \u2014 9 risorse totali:"),

        makeTable([
          headerRow(["Nome", "Ruolo", "Livello", "RAL stimata", "Costo az. (\u00d71,40)", "Costo orario"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["I. Romano", "Communication Director", "Director", "\u20ac65.000", "\u20ac91.000", "\u20ac53/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["G. Villari", "Creative Director", "Director", "\u20ac65.000", "\u20ac91.000", "\u20ac53/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["L. Minutilli", "Senior Graphic Designer", "Senior", "\u20ac45.000", "\u20ac63.000", "\u20ac37/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["F. Sedda", "Copywriter", "Mid", "\u20ac38.000", "\u20ac53.200", "\u20ac31/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["C. Pensa", "Copywriter", "Mid", "\u20ac38.000", "\u20ac53.200", "\u20ac31/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["G. Meoni", "Graphic Designer", "Mid", "\u20ac38.000", "\u20ac53.200", "\u20ac31/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["G. Del Nibletto", "Graphic Designer", "Mid", "\u20ac38.000", "\u20ac53.200", "\u20ac31/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["B. Giorgianni", "Social Media Manager", "Mid", "\u20ac38.000", "\u20ac53.200", "\u20ac31/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["L. Annibali", "Set Designer", "Mid", "\u20ac38.000", "\u20ac53.200", "\u20ac31/h"], [1800, 1800, 1000, 1200, 1400, 826]),
          dataRow(["Media pesata", "", "Team (9)", "", "", "\u20ac37/h"], [1800, 1800, 1000, 1200, 1400, 826], { bold: true, shading: COLORS.lightGray }),
        ], [1800, 1800, 1000, 1200, 1400, 826]),

        notePara("RAL stimate su benchmark di agenzie eventi corporate a Milano per aziende da ~150 dipendenti e \u20ac55M di fatturato. Costo orario calcolato come RAL \u00d7 1,40 / 1.720h annue. La media pesata tiene conto del peso numerico dei profili: (2\u00d753 + 1\u00d737 + 6\u00d731) / 9 = \u20ac37/h."),

        heading("2.4 Volumi operativi e pain point validati", HeadingLevel.HEADING_2),

        makeTable([
          headerRow(["Parametro", "Valore", "Fonte"], [3500, 2500, 3026]),
          dataRow(["Gare/brief gestiti all\u2019anno", "~50", "Stima da intervista (aggiornata)"], [3500, 2500, 3026]),
          dataRow(["Persone coinvolte per gara", "5-6 (media: 5,5)", "Dato cliente"], [3500, 2500, 3026]),
          dataRow(["Deadline media per gara", "~15 giorni", "Dato intervista Ivano"], [3500, 2500, 3026]),
          dataRow(["Brief sovrapposti in simultanea", "3-4", "Dato intervista Ivano"], [3500, 2500, 3026]),
          dataRow(["Win rate attuale", "~20% (1 su 5)", "Dato cliente"], [3500, 2500, 3026]),
          dataRow(["Tempo ideale per analisi strategica", "1-2 giornate/persona", "Stima da intervista"], [3500, 2500, 3026]),
          dataRow(["Tempo effettivamente dedicato all\u2019analisi", "Quasi zero", "Dato intervista Ivano"], [3500, 2500, 3026]),
        ], [3500, 2500, 3026]),

        // ===== 3. PROCESSI ANALIZZATI =====
        new Paragraph({ children: [new PageBreak()] }),
        heading("3. Processi Analizzati e Livello di Automazione", HeadingLevel.HEADING_1),

        para("L\u2019analisi identifica tre macro-processi del flusso creativo su cui Pitch interviene. Per ciascuno, il livello di automazione \u00e8 classificato secondo una scala a tre livelli: Sostituzione (l\u2019AI esegue il lavoro al posto della risorsa umana), Accelerazione (la risorsa umana esegue pi\u00f9 velocemente), Eliminazione (l\u2019attivit\u00e0 non \u00e8 pi\u00f9 necessaria)."),

        makeTable([
          headerRow(["#", "Processo", "Attivit\u00e0 specifica", "Ruoli coinvolti", "Livello automazione"], [400, 1800, 2800, 2000, 2026]),
          dataRow(["1a", "Analisi strategica pre-proposta", "Ricerca su cliente, competitor, iniziative passate, posizionamento", "Director + Mid (5-6 per gara)", "Sostituzione (AI esegue)"], [400, 1800, 2800, 2000, 2026]),
          dataRow(["1b", "Rework per proposte duplicate", "Rielaborazione concept, naming, scenografie gi\u00e0 usati dal cliente", "Intero team creativo", "Eliminazione (prevenzione)"], [400, 1800, 2800, 2000, 2026]),
          dataRow(["1c.i", "Switching tra tool creativi", "Login, export/import, ricontestualizzazione tra piattaforme diverse", "Designer + Copywriter", "Eliminazione (piattaforma unica)"], [400, 1800, 2800, 2000, 2026]),
          dataRow(["1c.ii", "Iterazione su prompt generici", "Tentativi ripetuti senza contesto brand pre-caricato", "Tutti i creativi coinvolti", "Accelerazione (brand book + prompt ottimizzati)"], [400, 1800, 2800, 2000, 2026]),
          dataRow(["1c.iii", "Adattamento output cross-platform", "Conversione formati, risoluzioni, esportazioni tra tool", "3 designer (Minutilli, Meoni, Del Nibletto)", "Eliminazione (flusso unificato)"], [400, 1800, 2800, 2000, 2026]),
        ], [400, 1800, 2800, 2000, 2026]),

        // ===== 4. IPOTESI DI CALCOLO =====
        heading("4. Ipotesi di Calcolo", HeadingLevel.HEADING_1),

        para("Ogni ipotesi \u00e8 esplicitata, classificata per fonte e livello di confidenza. Le stime sono costruite per essere difendibili in un contesto di revisione finanziaria."),

        makeTable([
          headerRow(["#", "Ipotesi", "Valore", "Fonte / Giustificazione", "Confidenza"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H1", "Gare gestite per anno", "50", "Dato aggiornato dal cliente", "Alta"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H2", "Persone coinvolte per gara", "5,5 (media)", "Dato cliente: 5-6 persone", "Alta"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H3", "Ore ideali per analisi strategica", "12h (1,5 gg)", "Punto medio di 1-2 gg indicato da Ivano", "Media"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H4", "Tempo AI per analisi + review umana", "1,5h (30min + 1h)", "Benchmark tool AI comparabili", "Media"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H5", "% gare con rework significativo", "17,5%", "Stima conservativa da dichiarazioni Ivano", "Media-Bassa"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H6", "Ore rework per episodio", "44h (5,5 pers \u00d7 8h)", "Stima: 1 giornata piena per team coinvolto", "Media"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H7", "% rework eliminabile con Deep Search", "70%", "Stima: info non pubbliche non intercettabili", "Media"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H8", "Ore switching tool per persona/gara", "1,5h", "Stima da workflow frammentato descritto", "Media"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H9", "Ore risparmiate da prompt ottimizzati", "2h per persona/gara", "Stima conservativa da \u201Ctanti tentativi\u201D", "Media-Bassa"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H10", "Ore adattamento cross-platform", "1h per designer/gara", "Stima: 3 designer coinvolti", "Media"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H11", "Costo orario medio pesato", "\u20ac37/h", "Calcolato: (2\u00d753+1\u00d737+6\u00d731)/9", "Alta"], [350, 2500, 1200, 3200, 1776]),
          dataRow(["H12", "Ore lavorative annue", "1.720h", "Standard CCNL italiano", "Alta"], [350, 2500, 1200, 3200, 1776]),
        ], [350, 2500, 1200, 3200, 1776]),

        notePara("Le ipotesi H5 e H9, classificate a confidenza \u201CMedia-Bassa\u201D, incidono complessivamente per ~28% del risparmio totale. Una sensitivity analysis su queste variabili \u00e8 presentata nella sezione 7."),

        // ===== 5. CALCOLO DEL RISPARMIO =====
        new Paragraph({ children: [new PageBreak()] }),
        heading("5. Calcolo del Risparmio di FTE", HeadingLevel.HEADING_1),

        heading("5.1 Area 1a \u2014 Analisi strategica: AI sostituisce lavoro umano", HeadingLevel.HEADING_2),

        para("Questa \u00e8 l\u2019area metodologicamente pi\u00f9 rilevante. L\u2019analisi strategica pre-proposta oggi non viene svolta per mancanza di tempo, ma \u00e8 lavoro che dovrebbe essere eseguito e la cui assenza ha conseguenze misurabili (proposte \u201Cgi\u00e0 fatte\u201D, rework, win rate sub-ottimale). L\u2019AI lo esegue in sostituzione completa della risorsa umana."),

        makeTable([
          headerRow(["Voce", "Calcolo", "Ore/anno", "Costo/h", "Valore"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["Analisi che oggi servirebbe", "50 gare \u00d7 12h", "600h", "\u20ac37/h", "\u20ac22.200"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["Tempo residuo con Pitch (setup + review)", "50 gare \u00d7 1,5h", "75h", "\u20ac37/h", "-\u20ac2.775"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["Risparmio netto analisi", "", "525h", "", "\u20ac19.425"], [2500, 2200, 1100, 1100, 2126], { bold: true, shading: COLORS.lightGray }),
        ], [2500, 2200, 1100, 1100, 2126]),

        notePara("Il conteggio come risparmio effettivo (e non \u201Ccosto di abilitazione\u201D) si giustifica perch\u00e9 l\u2019AI esegue un\u2019attivit\u00e0 necessaria che la risorsa umana non riesce a svolgere. \u00c8 equivalente all\u2019assunzione di una risorsa part-time dedicata all\u2019analisi strategica."),

        heading("5.2 Area 1b \u2014 Rework evitato per proposte duplicate/disallineate", HeadingLevel.HEADING_2),

        makeTable([
          headerRow(["Voce", "Calcolo", "Ore/anno", "Costo/h", "Valore"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["Gare con rework significativo", "50 \u00d7 17,5% = ~9 gare/anno", "\u2014", "\u2014", "\u2014"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["Ore di rework per gara", "5,5 persone \u00d7 8h = 44h", "\u2014", "\u2014", "\u2014"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["Rework totale/anno", "9 \u00d7 44h", "396h", "\u2014", "\u2014"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["Rework eliminabile (70%)", "396h \u00d7 70%", "277h", "\u20ac37/h", "\u20ac10.249"], [2500, 2200, 1100, 1100, 2126], { bold: true, shading: COLORS.lightGray }),
        ], [2500, 2200, 1100, 1100, 2126]),

        notePara("Il 30% residuo di rework non eliminabile corrisponde a informazioni strategiche non pubbliche del cliente (es. budget interni, vincoli non dichiarati, preferenze non documentate)."),

        heading("5.3 Area 1c \u2014 Playground creativo unificato", HeadingLevel.HEADING_2),

        para("Questa area ha il moltiplicatore pi\u00f9 alto perch\u00e9 agisce su tutte le 50 gare e su 5-6 persone per gara. Si compone di tre sotto-aree:"),

        makeTable([
          headerRow(["Sotto-area", "Calcolo", "Ore/anno", "Costo/h", "Valore"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["c.i \u2014 Switching tra tool eliminato", "50 gare \u00d7 5 pers. \u00d7 1,5h", "375h", "\u20ac37/h", "\u20ac13.875"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["c.ii \u2014 Tentativi ridotti (brand book + prompt)", "50 gare \u00d7 5 pers. \u00d7 2h", "500h", "\u20ac37/h", "\u20ac18.500"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["c.iii \u2014 Adattamento output cross-platform", "50 gare \u00d7 3 designer \u00d7 1h", "150h", "\u20ac37/h", "\u20ac5.550"], [2500, 2200, 1100, 1100, 2126]),
          dataRow(["Totale Area 1c", "", "1.025h", "", "\u20ac37.925"], [2500, 2200, 1100, 1100, 2126], { bold: true, shading: COLORS.lightGray }),
        ], [2500, 2200, 1100, 1100, 2126]),

        heading("5.4 Riepilogo risparmio operativo", HeadingLevel.HEADING_2),

        makeTable([
          headerRow(["Area", "Descrizione", "Ore/anno", "Valore/anno", "% sul totale"], [600, 3200, 1200, 1500, 2526]),
          dataRow(["1a", "Analisi strategica (AI sostituisce lavoro umano)", "525h", "\u20ac19.425", "28,7%"], [600, 3200, 1200, 1500, 2526]),
          dataRow(["1b", "Rework evitato (prevenzione proposte duplicate)", "277h", "\u20ac10.249", "15,2%"], [600, 3200, 1200, 1500, 2526]),
          dataRow(["1c", "Playground creativo unificato", "1.025h", "\u20ac37.925", "56,1%"], [600, 3200, 1200, 1500, 2526]),
          dataRow(["", "TOTALE", "1.827h", "\u20ac67.599", "100%"], [600, 3200, 1200, 1500, 2526], { bold: true, shading: COLORS.light }),
        ], [600, 3200, 1200, 1500, 2526]),

        spacer(80),

        multiRunPara([
          { text: "Conversione in FTE: ", bold: true },
          { text: "1.827h / 1.720h = " },
          { text: "~1,06 FTE", bold: true },
          { text: " \u2014 equivalente a poco pi\u00f9 di una risorsa full-time a livello mid." },
        ]),

        // ===== 6. VALORIZZAZIONE ECONOMICA =====
        new Paragraph({ children: [new PageBreak()] }),
        heading("6. Valorizzazione Economica del Risparmio", HeadingLevel.HEADING_1),

        heading("6.1 Composizione del risparmio per profilo professionale", HeadingLevel.HEADING_2),

        makeTable([
          headerRow(["Profilo", "Persone", "Ore liberate/anno", "Costo/h", "Valore annuo", "% totale"], [1500, 800, 1300, 1000, 1300, 3126]),
          dataRow(["Director", "2", "~407h", "\u20ac53/h", "\u20ac21.571", "31,9%"], [1500, 800, 1300, 1000, 1300, 3126]),
          dataRow(["Senior", "1", "~203h", "\u20ac37/h", "\u20ac7.511", "11,1%"], [1500, 800, 1300, 1000, 1300, 3126]),
          dataRow(["Mid-level", "6", "~1.217h", "\u20ac31/h", "\u20ac37.727", "55,8%"], [1500, 800, 1300, 1000, 1300, 3126]),
          dataRow(["TOTALE", "9", "1.827h", "\u20ac37/h (media)", "\u20ac67.599", "100%"], [1500, 800, 1300, 1000, 1300, 3126], { bold: true, shading: COLORS.lightGray }),
        ], [1500, 800, 1300, 1000, 1300, 3126]),

        notePara("I Director beneficiano maggiormente della Deep Search (risparmio analisi + supervisione rework). I mid-level beneficiano del playground unificato (volume di produzione pi\u00f9 alto)."),

        heading("6.2 Scenari di adozione", HeadingLevel.HEADING_2),

        para("Il risparmio effettivo dipende dal tasso di adozione della piattaforma da parte del team. Si presentano tre scenari:"),

        makeTable([
          headerRow(["Scenario", "Tasso di adozione", "Risparmio annuale", "FTE equivalente"], [2000, 2000, 2500, 2526]),
          dataRow(["Conservativo", "70%", "\u20ac47.300", "0,74 FTE"], [2000, 2000, 2500, 2526]),
          dataRow(["Realistico", "85%", "\u20ac57.500", "0,90 FTE"], [2000, 2000, 2500, 2526], { shading: COLORS.lightGray, bold: true }),
          dataRow(["Ottimistico", "100%", "\u20ac67.600", "1,06 FTE"], [2000, 2000, 2500, 2526]),
        ], [2000, 2000, 2500, 2526]),

        notePara("Lo scenario \u201CRealistico\u201D all\u201985% \u00e8 la base raccomandata per il calcolo del ROI. Il tasso del 85% tiene conto di una curva di apprendimento iniziale (~3 mesi) e di gare atipiche dove il workflow standard non si applica."),

        // ===== 7. STRUTTURA PRELIMINARE DEL BUSINESS CASE =====
        heading("7. Struttura Preliminare del Business Case Finanziario", HeadingLevel.HEADING_1),

        heading("7.1 Modello finanziario \u2014 in attesa del costo di sviluppo", HeadingLevel.HEADING_2),

        para("Il modello finanziario sar\u00e0 completato con l\u2019inserimento del costo di sviluppo e implementazione (quotazione tecnica in fase di definizione da parte del team di sviluppo). Di seguito la struttura predisposta:"),

        makeTable([
          headerRow(["Voce", "Anno 1", "Anno 2", "Anno 3", "Note"], [2000, 1500, 1500, 1500, 2526]),
          dataRow(["Beneficio operativo annuo", "\u20ac57.500", "\u20ac57.500", "\u20ac57.500", "Scenario realistico (85%)"], [2000, 1500, 1500, 1500, 2526]),
          dataRow(["Ramp-up Anno 1 (6 mesi effettivi)", "\u20ac28.750", "\u2014", "\u2014", "50% del beneficio annuo"], [2000, 1500, 1500, 1500, 2526]),
          dataRow(["Costo sviluppo + implementazione", "TBD", "\u2014", "\u2014", "In attesa quotazione"], [2000, 1500, 1500, 1500, 2526]),
          dataRow(["Costi ricorrenti (hosting, API, manutenzione)", "TBD", "TBD", "TBD", "Da definire"], [2000, 1500, 1500, 1500, 2526]),
          dataRow(["Beneficio netto", "TBD", "TBD", "TBD", ""], [2000, 1500, 1500, 1500, 2526], { bold: true }),
        ], [2000, 1500, 1500, 1500, 2526]),

        heading("7.2 Metriche finanziarie da calcolare", HeadingLevel.HEADING_2),

        makeTable([
          headerRow(["Metrica", "Formula", "Status"], [2000, 4500, 2526]),
          dataRow(["ROI", "(Beneficio netto cumulato / Investimento totale) \u00d7 100", "In attesa costi"], [2000, 4500, 2526]),
          dataRow(["Payback Period", "Mese in cui il beneficio cumulato supera l\u2019investimento", "In attesa costi"], [2000, 4500, 2526]),
          dataRow(["NPV (3 anni, tasso 8%)", "\u2211 [Beneficio netto / (1+r)^t] - Investimento iniziale", "In attesa costi"], [2000, 4500, 2526]),
          dataRow(["IRR", "Tasso che rende NPV = 0", "In attesa costi"], [2000, 4500, 2526]),
        ], [2000, 4500, 2526]),

        notePara("Il tasso di sconto proposto (8%) riflette il profilo di rischio di un progetto di trasformazione digitale in una PMI italiana. Pu\u00f2 essere aggiustato in base alle indicazioni dell\u2019amministrazione."),

        heading("7.3 Sensitivity analysis", HeadingLevel.HEADING_2),

        para("Per testare la robustezza del business case, si analizzano le variazioni sulle ipotesi a confidenza media-bassa (H5 e H9):"),

        makeTable([
          headerRow(["Scenario", "H5 (% rework)", "H9 (ore prompt)", "Risparmio base", "Risparmio realistico (85%)"], [1500, 1500, 1500, 1800, 2726]),
          dataRow(["Base", "17,5%", "2h/pers/gara", "\u20ac67.600", "\u20ac57.500"], [1500, 1500, 1500, 1800, 2726], { shading: COLORS.lightGray }),
          dataRow(["Pessimistico su H5", "10%", "2h/pers/gara", "\u20ac63.600", "\u20ac54.100"], [1500, 1500, 1500, 1800, 2726]),
          dataRow(["Pessimistico su H9", "17,5%", "1h/pers/gara", "\u20ac49.100", "\u20ac41.700"], [1500, 1500, 1500, 1800, 2726]),
          dataRow(["Worst case (entrambi)", "10%", "1h/pers/gara", "\u20ac45.100", "\u20ac38.300"], [1500, 1500, 1500, 1800, 2726]),
        ], [1500, 1500, 1500, 1800, 2726]),

        notePara("Anche nello scenario worst case, il risparmio annuo supera i \u20ac38.000. La robustezza del business case dipende principalmente dall\u2019Area 1c (playground), che rappresenta il 56% del totale e si basa su ipotesi a confidenza media."),

        // ===== ACCELERAZIONE COMPETITIVA =====
        new Paragraph({ children: [new PageBreak()] }),
        heading("8. Accelerazione Competitiva (Upside non incluso nel risparmio operativo)", HeadingLevel.HEADING_1),

        para("Le metriche seguenti sono presentate separatamente dal risparmio operativo perch\u00e9 dipendono da variabili non interamente controllabili (qualit\u00e0 percepita dal cliente, dinamiche competitive, capacit\u00e0 commerciale). Rappresentano il potenziale di upside, non una certezza."),

        heading("8.1 Impatto sulla win rate e capacit\u00e0 aggiuntiva", HeadingLevel.HEADING_2),

        makeTable([
          headerRow(["Metrica", "Oggi", "Con Pitch", "Delta"], [2500, 1700, 1700, 3126]),
          dataRow(["Win rate", "20% (1 su 5)", "25-28%", "+5-8 pp"], [2500, 1700, 1700, 3126]),
          dataRow(["Gare partecipate/anno", "50", "~55-56", "+5-6"], [2500, 1700, 1700, 3126]),
          dataRow(["Gare vinte/anno", "10", "14-16", "+4-6"], [2500, 1700, 1700, 3126]),
          dataRow(["Valore medio commessa", "\u20ac211K", "\u20ac211K", "\u2014"], [2500, 1700, 1700, 3126]),
          dataRow(["Revenue aggiuntivo potenziale", "", "", "\u20ac930K - \u20ac1.170K/anno"], [2500, 1700, 1700, 3126], { bold: true, shading: COLORS.lightGray }),
        ], [2500, 1700, 1700, 3126]),

        notePara("Il valore medio commessa (\u20ac211K = \u20ac55M / 260 COM) include commesse di dimensioni molto diverse. Il range di revenue aggiuntivo va presentato come potenziale, non come certezza. Il miglioramento della win rate si basa su: proposte strategicamente pi\u00f9 fondate, materiali creativi di qualit\u00e0 superiore, e tempo liberato per curare meglio ogni proposta."),

        heading("8.2 Time-to-proposal", HeadingLevel.HEADING_2),

        makeTable([
          headerRow(["Metrica", "Oggi", "Con Pitch"], [3000, 3000, 3026]),
          dataRow(["Tempo dal brief alla proposta creativa", "12-15 giorni", "8-10 giorni"], [3000, 3000, 3026]),
        ], [3000, 3000, 3026]),

        para("La riduzione del time-to-proposal consente di accettare brief last-minute oggi rifiutati e di avere pi\u00f9 cicli di revisione interna prima della consegna, migliorando la qualit\u00e0 media delle proposte."),

        // ===== 8. INFORMAZIONI MANCANTI =====
        heading("9. Informazioni Mancanti per Completamento", HeadingLevel.HEADING_1),

        para("Per finalizzare il business case e calcolare le metriche finanziarie (ROI, Payback Period, NPV, IRR), sono necessarie le seguenti informazioni:"),

        makeTable([
          headerRow(["#", "Informazione", "Responsabile", "Impatto sul BC"], [400, 3500, 2000, 3126]),
          dataRow(["1", "Costo di sviluppo e implementazione Pitch", "Federico / Simone (quotazione tecnica)", "Critico \u2014 necessario per ROI e Payback"], [400, 3500, 2000, 3126]),
          dataRow(["2", "Costi ricorrenti (hosting, API AI, manutenzione)", "HeyAI / Team tecnico", "Critico \u2014 necessario per NPV a 3 anni"], [400, 3500, 2000, 3126]),
          dataRow(["3", "Timeline di implementazione e go-live", "HeyAI", "Alto \u2014 determina il ramp-up Anno 1"], [400, 3500, 2000, 3126]),
          dataRow(["4", "Validazione RAL da parte dell\u2019amministrazione", "Elisa Remigi / Roberta Calaj\u00f2", "Medio \u2014 affinerebbe il costo orario"], [400, 3500, 2000, 3126]),
          dataRow(["5", "Conferma dettagliata del n. di gare annue", "Ivano Romano / Laura Garbarino", "Medio \u2014 gi\u00e0 stimato a 50"], [400, 3500, 2000, 3126]),
          dataRow(["6", "Tasso di sconto aziendale (WACC o hurdle rate)", "Amministrazione", "Basso \u2014 proposto 8% come default"], [400, 3500, 2000, 3126]),
        ], [400, 3500, 2000, 3126]),

        spacer(200),

        // ===== DISCLAIMER =====
        new Paragraph({
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: COLORS.accent, space: 8 } },
          spacing: { before: 300, after: 120 },
          children: [new TextRun({ text: "Disclaimer metodologico", font: FONTS.main, size: 21, bold: true, color: COLORS.primary })],
        }),

        para("La presente analisi si basa su dati operativi forniti dal cliente attraverso interviste strutturate e organigramma aziendale. Le stime retributive utilizzano benchmark di settore per agenzie eventi corporate a Milano. I benefici quantificati rappresentano risparmi operativi in termini di ore-lavoro equivalenti \u2014 non necessariamente una riduzione del costo del personale, quanto una riallocazione della capacit\u00e0 verso attivit\u00e0 a maggior valore aggiunto. L\u2019accelerazione competitiva (Sezione 8) \u00e8 presentata come potenziale di upside e non \u00e8 inclusa nel calcolo del risparmio operativo."),

        para("Il business case sar\u00e0 finalizzato con l\u2019inserimento dei costi di sviluppo e implementazione per il calcolo di ROI, Payback Period, NPV e IRR.", { italics: true }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/BC_Pitch_v3.docx", buffer);
  console.log("Document created successfully");
});