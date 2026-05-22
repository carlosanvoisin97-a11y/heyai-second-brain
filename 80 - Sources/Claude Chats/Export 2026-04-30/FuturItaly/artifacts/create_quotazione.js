const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat, ImageRun
} = require("docx");

// ── Brand colors ──
const BRAND_TEAL = "2B8C96";
const BRAND_TEAL_LIGHT = "E8F4F6";
const BRAND_DARK = "1A1A1A";
const GREY_LIGHT = "F5F5F5";
const GREY_BORDER = "CCCCCC";
const WHITE = "FFFFFF";

// ── Table helpers ──
const border = { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = {
  top: { style: BorderStyle.NONE, size: 0 },
  bottom: { style: BorderStyle.NONE, size: 0 },
  left: { style: BorderStyle.NONE, size: 0 },
  right: { style: BorderStyle.NONE, size: 0 },
};
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

const TABLE_WIDTH = 9026; // A4 with 1" margins

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: BRAND_TEAL, type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      children: [new TextRun({ text, bold: true, color: WHITE, font: "Arial", size: 20 })],
    })],
  });
}

function dataCell(text, width, opts = {}) {
  const { bold, fill, color, align } = opts;
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      alignment: align || AlignmentType.LEFT,
      children: [new TextRun({
        text,
        bold: bold || false,
        color: color || BRAND_DARK,
        font: "Arial",
        size: 20,
      })],
    })],
  });
}

// ── Content ──
const children = [];

// ── HEADER SECTION ──
children.push(
  new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text: "HeyAI S.r.l.", bold: true, font: "Arial", size: 28, color: BRAND_TEAL })],
  }),
  new Paragraph({
    spacing: { after: 0 },
    children: [new TextRun({ text: "Sede legale: Via Parigi 11, 00185 Roma (RM)", font: "Arial", size: 18, color: "666666" })],
  }),
  new Paragraph({
    spacing: { after: 0 },
    children: [new TextRun({ text: "info@heyaidigital.it | www.heyaidigital.it", font: "Arial", size: 18, color: "666666" })],
  }),
  new Paragraph({
    spacing: { after: 400 },
    children: [new TextRun({ text: "PEC: heyai@pec.it | REA RM \u2013 1751505 | Cod. Fiscale: 17947791004", font: "Arial", size: 16, color: "999999" })],
  }),
);

// ── Horizontal line ──
children.push(
  new Paragraph({
    spacing: { after: 400 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: BRAND_TEAL } },
    children: [],
  }),
);

// ── TITLE ──
children.push(
  new Paragraph({
    spacing: { before: 200, after: 100 },
    children: [new TextRun({
      text: "Proposta di Investimento:",
      font: "Arial", size: 36, color: BRAND_TEAL, bold: true,
    })],
  }),
  new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({
      text: "Osservatorio Strategico",
      font: "Arial", size: 44, color: BRAND_DARK, bold: true,
    })],
  }),
  new Paragraph({
    spacing: { after: 400 },
    children: [new TextRun({
      text: "Motore di Ricerca Intelligente per Bandi e Gare",
      font: "Arial", size: 24, color: "666666", italics: true,
    })],
  }),
);

// ── Meta info ──
children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [2500, 6526],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders: noBorders, width: { size: 2500, type: WidthType.DXA }, margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: "Cliente:", bold: true, font: "Arial", size: 20, color: BRAND_TEAL })] })] }),
        new TableCell({ borders: noBorders, width: { size: 6526, type: WidthType.DXA }, margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: "FuturItaly", font: "Arial", size: 20 })] })] }),
      ]}),
      new TableRow({ children: [
        new TableCell({ borders: noBorders, width: { size: 2500, type: WidthType.DXA }, margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: "Data:", bold: true, font: "Arial", size: 20, color: BRAND_TEAL })] })] }),
        new TableCell({ borders: noBorders, width: { size: 6526, type: WidthType.DXA }, margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: "Febbraio 2026", font: "Arial", size: 20 })] })] }),
      ]}),
      new TableRow({ children: [
        new TableCell({ borders: noBorders, width: { size: 2500, type: WidthType.DXA }, margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: "Rif. Documento:", bold: true, font: "Arial", size: 20, color: BRAND_TEAL })] })] }),
        new TableCell({ borders: noBorders, width: { size: 6526, type: WidthType.DXA }, margins: cellMargins,
          children: [new Paragraph({ children: [new TextRun({ text: "NOT-FI-2026-002", font: "Arial", size: 20 })] })] }),
      ]}),
    ],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// ── PAGE BREAK ──
children.push(new Paragraph({ children: [new PageBreak()] }));

// ══════════════════════════════════════════════
// 1. OGGETTO DELLA PROPOSTA
// ══════════════════════════════════════════════
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "1. Oggetto della Proposta", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "La presente proposta riguarda lo sviluppo dell\u2019Osservatorio Strategico, un motore di ricerca proprietario con intelligenza artificiale per l\u2019identificazione automatica di opportunit\u00E0 di business: gare d\u2019appalto pubbliche, bandi di finanza agevolata, incentivi e fondi a fondo perduto.",
      font: "Arial", size: 20,
    })],
  }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "L\u2019Osservatorio non \u00E8 un semplice aggregatore di bandi. \u00C8 un sistema di selezione intelligente che utilizza AI per filtrare, analizzare e preselezionare solo le opportunit\u00E0 realmente pertinenti al profilo del Cliente, eliminando il rumore informativo e restituendo un vantaggio competitivo concreto: arrivare prima degli altri sulle opportunit\u00E0 giuste.",
      font: "Arial", size: 20,
    })],
  }),
);

// ── Value proposition box ──
children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [TABLE_WIDTH],
    rows: [new TableRow({
      children: [new TableCell({
        borders: { top: { style: BorderStyle.SINGLE, size: 3, color: BRAND_TEAL }, bottom: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER }, left: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER }, right: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER } },
        width: { size: TABLE_WIDTH, type: WidthType.DXA },
        shading: { fill: BRAND_TEAL_LIGHT, type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Perch\u00E9 un Osservatorio Strategico?", bold: true, font: "Arial", size: 22, color: BRAND_TEAL })] }),
          new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Ogni anno migliaia di opportunit\u00E0 pubbliche passano inosservate per mancanza di strumenti adeguati. L\u2019Osservatorio trasforma la ricerca manuale in un processo automatizzato e intelligente, permettendo di concentrare le risorse sulla preparazione delle offerte anzich\u00E9 sulla ricerca.", font: "Arial", size: 20, color: BRAND_DARK })] }),
        ],
      })],
    })],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// ══════════════════════════════════════════════
// 2. AREE DI BUSINESS COPERTE
// ══════════════════════════════════════════════
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "2. Aree di Business Coperte", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "Il sistema copre due aree strategiche complementari, offrendo una visione completa delle opportunit\u00E0 disponibili:",
      font: "Arial", size: 20,
    })],
  }),
);

// Areas table
children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [2200, 2800, 4026],
    rows: [
      new TableRow({ children: [
        headerCell("Area", 2200),
        headerCell("Obiettivo", 2800),
        headerCell("Cosa Monitora", 4026),
      ]}),
      new TableRow({ children: [
        dataCell("PROCUREMENT", 2200, { bold: true }),
        dataCell("Vendere servizi e lavori", 2800),
        dataCell("Gare d\u2019appalto pubbliche (Italia, UE, Internazionali)", 4026),
      ]}),
      new TableRow({ children: [
        dataCell("GRANTS", 2200, { bold: true }),
        dataCell("Incassare fondi", 2800),
        dataCell("Bandi finanza agevolata, incentivi, crediti d\u2019imposta, fondo perduto", 4026),
      ]}),
    ],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// ══════════════════════════════════════════════
// 3. SOLUZIONE TECNICA
// ══════════════════════════════════════════════
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "3. Soluzione Tecnica", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "L\u2019architettura si basa esclusivamente su API ufficiali e fonti dati certificate, garantendo conformit\u00E0 legale, stabilit\u00E0 tecnica e qualit\u00E0 dei dati. Nessun scraping, nessun rischio.",
      font: "Arial", size: 20,
    })],
  }),
);

// Modules table
const modules = [
  ["Ingestione Dati Multi-Fonte", "Connessione a fonti ufficiali (ANAC/PDND, TED, UNGM, World Bank, Incentivi.gov.it, EU Funding & Tenders) con aggiornamento automatico."],
  ["Classificazione Intelligente (CPV/ATECO)", "Albero gerarchico di codici CPV e ATECO per filtraggio preciso. Elimina i falsi positivi da keyword generiche."],
  ["Motore di Filtraggio Avanzato", "8 criteri configurabili: perimetro geografico, tipologia attivit\u00E0, dimensione impresa, soglie economiche, scadenze, codici ATECO, ente erogatore, stato bandi."],
  ["AI Agent \u2013 Selezione Semantica", "LLM che analizza il testo completo di ogni bando, applica regole personalizzate del Cliente e genera uno scoring (0-100%) con riassunto operativo."],
  ["Dashboard e Notifiche", "Interfaccia web per consultazione, filtri real-time e notifiche automatiche sulle nuove opportunit\u00E0 rilevanti."],
];

const moduleRows = [
  new TableRow({ children: [
    headerCell("Modulo", 3000),
    headerCell("Descrizione", 6026),
  ]}),
];
modules.forEach(([mod, desc], i) => {
  moduleRows.push(new TableRow({ children: [
    dataCell(mod, 3000, { bold: true, fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
    dataCell(desc, 6026, { fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
  ]}));
});

children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [3000, 6026],
    rows: moduleRows,
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// ══════════════════════════════════════════════
// 4. FONTI DATI
// ══════════════════════════════════════════════
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "4. Fonti Dati Ufficiali", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "Il sistema si alimenta da fonti istituzionali certificate, garantendo dati puliti, legali e strutturati:",
      font: "Arial", size: 20,
    })],
  }),
);

const sources = [
  ["ANAC (PDND)", "Italia", "100% gare italiane (Lavori, Servizi, Forniture)", "Accreditamento richiesto*"],
  ["TED Open API", "Europa (27 UE)", "Gare sopra soglia UE + avvisi preinformazione", "Pronto"],
  ["World Bank & UNGM", "Internazionale", "Progetti sviluppo e forniture ONU", "Pronto"],
  ["Incentivi.gov.it / RNA", "Italia", "Catalogo completo incentivi imprese", "Pronto"],
  ["EU Funding & Tenders", "Europa", "Fondi diretti UE (Horizon, Digital Europe, LIFE)", "Pronto"],
];

const sourceRows = [
  new TableRow({ children: [
    headerCell("Fonte", 2400),
    headerCell("Copertura", 1600),
    headerCell("Contenuto", 3226),
    headerCell("Stato", 1800),
  ]}),
];
sources.forEach(([src, cov, content, stato], i) => {
  sourceRows.push(new TableRow({ children: [
    dataCell(src, 2400, { bold: true, fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
    dataCell(cov, 1600, { fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
    dataCell(content, 3226, { fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
    dataCell(stato, 1800, { fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
  ]}));
});

children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [2400, 1600, 3226, 1800],
    rows: sourceRows,
  }),
  new Paragraph({ spacing: { after: 100 }, children: [] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "*Nota: L\u2019accreditamento ANAC tramite PDND richiede 3-8 settimane di iter burocratico. Questa dipendenza esterna verr\u00E0 gestita parallelamente allo sviluppo, senza impatto sulla timeline complessiva. La lista fonti potr\u00E0 essere ampliata in fase di requisitazione di dettaglio.",
      font: "Arial", size: 18, italics: true, color: "666666",
    })],
  }),
);

// ══════════════════════════════════════════════
// 5. PIANO DI LAVORO
// ══════════════════════════════════════════════
children.push(
  new Paragraph({ children: [new PageBreak()] }),
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "5. Piano di Lavoro", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "Lo sviluppo seguir\u00E0 un approccio agile articolato in 4 fasi:",
      font: "Arial", size: 20,
    })],
  }),
);

const phases = [
  ["Foundation & Data Pipeline", "2-3 settimane", "Architettura, autenticazione, connessione fonti dati pronte (TED, UNGM, Incentivi.gov.it, EU F&T). Avvio parallelo accreditamento ANAC/PDND."],
  ["AI Engine & Classificazione", "2-3 settimane", "Motore AI di selezione semantica, albero CPV/ATECO, sistema di scoring e filtraggio avanzato."],
  ["Dashboard & Notifiche", "2-3 settimane", "Interfaccia utente, criteri di filtraggio configurabili, sistema di notifiche automatiche."],
  ["Testing & Go-Live", "2 settimane", "UAT, ottimizzazioni, integrazione ANAC (se accreditamento completato), training operativo, lancio."],
];

const phaseRows = [
  new TableRow({ children: [
    headerCell("Fase", 2600),
    headerCell("Durata", 1600),
    headerCell("Deliverable", 4826),
  ]}),
];
phases.forEach(([phase, dur, del], i) => {
  phaseRows.push(new TableRow({ children: [
    dataCell(phase, 2600, { bold: true, fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
    dataCell(dur, 1600, { fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
    dataCell(del, 4826, { fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
  ]}));
});
phaseRows.push(new TableRow({ children: [
  dataCell("TOTALE", 2600, { bold: true, fill: BRAND_TEAL_LIGHT }),
  dataCell("8-11 settimane", 1600, { bold: true, fill: BRAND_TEAL_LIGHT }),
  dataCell("MVP completo e operativo", 4826, { bold: true, fill: BRAND_TEAL_LIGHT }),
]}));

children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [2600, 1600, 4826],
    rows: phaseRows,
  }),
  new Paragraph({ spacing: { after: 100 }, children: [] }),
);

// ANAC dependency note
children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [TABLE_WIDTH],
    rows: [new TableRow({
      children: [new TableCell({
        borders: { top: { style: BorderStyle.SINGLE, size: 2, color: "E8A317" }, bottom: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER }, left: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER }, right: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER } },
        width: { size: TABLE_WIDTH, type: WidthType.DXA },
        shading: { fill: "FFF8E7", type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Dipendenza esterna: Accreditamento ANAC/PDND", bold: true, font: "Arial", size: 20, color: "B8860B" })] }),
          new Paragraph({ children: [new TextRun({ text: "L\u2019accreditamento alla Piattaforma Digitale Nazionale Dati (PDND) per l\u2019accesso ai dati ANAC richiede un iter burocratico di 3-8 settimane, indipendente dallo sviluppo software. Questa procedura verr\u00E0 avviata contestualmente alla fase Foundation per minimizzare i tempi complessivi. Nel frattempo, il sistema sar\u00E0 gi\u00E0 operativo con tutte le altre fonti dati (TED, UNGM, Incentivi.gov.it, EU F&T).", font: "Arial", size: 18, color: "666666" })] }),
        ],
      })],
    })],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// ══════════════════════════════════════════════
// 6. INVESTIMENTO
// ══════════════════════════════════════════════
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "6. Investimento", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
);

// IP model explanation
children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [TABLE_WIDTH],
    rows: [new TableRow({
      children: [new TableCell({
        borders: { top: { style: BorderStyle.SINGLE, size: 3, color: BRAND_TEAL }, bottom: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER }, left: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER }, right: { style: BorderStyle.SINGLE, size: 1, color: GREY_BORDER } },
        width: { size: TABLE_WIDTH, type: WidthType.DXA },
        shading: { fill: BRAND_TEAL_LIGHT, type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Modello a costo ridotto: Licenza d\u2019uso", bold: true, font: "Arial", size: 22, color: BRAND_TEAL })] }),
          new Paragraph({ children: [new TextRun({ text: "Per contenere significativamente l\u2019investimento, HeyAI mantiene la propriet\u00E0 intellettuale del motore di base e concede al Cliente una licenza d\u2019uso esclusiva e illimitata della piattaforma, con tutte le personalizzazioni sviluppate ad hoc. Questo modello consente a FuturItaly di accedere a una soluzione tecnologica avanzata a una frazione del costo di sviluppo completo, con piena operativit\u00E0 e autonomia d\u2019utilizzo.", font: "Arial", size: 20, color: BRAND_DARK })] }),
        ],
      })],
    })],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// Pricing table
children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [5500, 3526],
    rows: [
      new TableRow({ children: [
        headerCell("Voce", 5500),
        headerCell("Importo", 3526),
      ]}),
      new TableRow({ children: [
        dataCell("Sviluppo, configurazione e personalizzazione piattaforma", 5500),
        dataCell("\u20AC 19.000 \u2013 \u20AC 25.000", 3526, { align: AlignmentType.RIGHT }),
      ]}),
      new TableRow({ children: [
        dataCell("Infrastruttura cloud (setup + 3 mesi operativit\u00E0)", 5500),
        dataCell("Incluso", 3526, { align: AlignmentType.RIGHT }),
      ]}),
      new TableRow({ children: [
        dataCell("Servizi AI/ML (API LLM per selezione semantica)", 5500),
        dataCell("Incluso", 3526, { align: AlignmentType.RIGHT }),
      ]}),
      new TableRow({ children: [
        dataCell("Training operativo per il team", 5500),
        dataCell("Incluso", 3526, { align: AlignmentType.RIGHT }),
      ]}),
      new TableRow({ children: [
        dataCell("TOTALE PROGETTO", 5500, { bold: true }),
        new TableCell({
          borders,
          width: { size: 3526, type: WidthType.DXA },
          shading: { fill: BRAND_TEAL_LIGHT, type: ShadingType.CLEAR },
          margins: cellMargins,
          verticalAlign: "center",
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [new TextRun({ text: "\u20AC 19.000 \u2013 \u20AC 25.000", bold: true, font: "Arial", size: 22, color: BRAND_TEAL })],
          })],
        }),
      ]}),
    ],
  }),
  new Paragraph({ spacing: { after: 100 }, children: [] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "Nota: Il prezzo definitivo sar\u00E0 consolidato al completamento della fase di requisitazione di dettaglio, attualmente in corso. Il range riflette la variabilit\u00E0 legata al numero finale di fonti dati integrate e alla complessit\u00E0 delle regole di personalizzazione dell\u2019AI Agent.",
      font: "Arial", size: 18, italics: true, color: "666666",
    })],
  }),
);

// What's included
children.push(
  new Paragraph({
    spacing: { before: 100, after: 100 },
    children: [new TextRun({ text: "Incluso nell\u2019investimento:", bold: true, font: "Arial", size: 20, color: BRAND_DARK })],
  }),
  new Paragraph({
    spacing: { after: 60 },
    children: [new TextRun({ text: "Licenza d\u2019uso esclusiva e illimitata della piattaforma, personalizzazioni su misura, documentazione tecnica, training operativo per il team, 2 mesi di assistenza post-lancio (bug fixing e supporto).", font: "Arial", size: 20 })],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// ══════════════════════════════════════════════
// 7. MODALITA DI PAGAMENTO
// ══════════════════════════════════════════════
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "7. Modalit\u00E0 di Pagamento", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
  new Paragraph({
    spacing: { after: 200 },
    children: [new TextRun({
      text: "Il pagamento \u00E8 articolato in 3 tranche legate alle milestone di progetto, garantendo trasparenza e allineamento tra investimento e avanzamento lavori:",
      font: "Arial", size: 20,
    })],
  }),
);

// Payment table - using midpoint €22.000 for illustration
children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [4500, 2263, 2263],
    rows: [
      new TableRow({ children: [
        headerCell("Milestone", 4500),
        headerCell("Quota", 2263),
        headerCell("Rif. Range", 2263),
      ]}),
      new TableRow({ children: [
        dataCell("40% a inizio lavori", 4500),
        dataCell("40%", 2263, { align: AlignmentType.CENTER }),
        dataCell("\u20AC 7.600 \u2013 \u20AC 10.000", 2263, { align: AlignmentType.RIGHT }),
      ]}),
      new TableRow({ children: [
        dataCell("30% all\u2019ingresso in fase di testing", 4500, { fill: GREY_LIGHT }),
        dataCell("30%", 2263, { align: AlignmentType.CENTER, fill: GREY_LIGHT }),
        dataCell("\u20AC 5.700 \u2013 \u20AC 7.500", 2263, { align: AlignmentType.RIGHT, fill: GREY_LIGHT }),
      ]}),
      new TableRow({ children: [
        dataCell("30% alla consegna definitiva post-test", 4500),
        dataCell("30%", 2263, { align: AlignmentType.CENTER }),
        dataCell("\u20AC 5.700 \u2013 \u20AC 7.500", 2263, { align: AlignmentType.RIGHT }),
      ]}),
    ],
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// ══════════════════════════════════════════════
// 8. VANTAGGI COMPETITIVI
// ══════════════════════════════════════════════
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "8. Vantaggi Competitivi", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
);

const advantages = [
  ["Solo dati ufficiali, zero rischi legali", "Nessun scraping, nessuna violazione di termini di servizio. Solo API ufficiali e fonti istituzionali certificate."],
  ["AI che seleziona, non solo cerca", "L\u2019AI Agent analizza il contenuto completo dei bandi e genera uno scoring personalizzato, risparmiando ore di analisi manuale."],
  ["Copertura completa: Italia, Europa, Mondo", "Dall\u2019appalto comunale al bando europeo Horizon, un\u2019unica piattaforma per tutte le opportunit\u00E0."],
  ["Operativo in 8-11 settimane", "Un MVP funzionante in tempi contenuti, con possibilit\u00E0 di evoluzione progressiva."],
  ["Investimento accessibile", "Il modello a licenza d\u2019uso riduce significativamente il costo di accesso alla tecnologia."],
];

const advRows = [
  new TableRow({ children: [
    headerCell("Vantaggio", 3000),
    headerCell("Dettaglio", 6026),
  ]}),
];
advantages.forEach(([adv, det], i) => {
  advRows.push(new TableRow({ children: [
    dataCell(adv, 3000, { bold: true, fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
    dataCell(det, 6026, { fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
  ]}));
});

children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [3000, 6026],
    rows: advRows,
  }),
  new Paragraph({ spacing: { after: 200 }, children: [] }),
);

// ══════════════════════════════════════════════
// 9. CONDIZIONI GENERALI
// ══════════════════════════════════════════════
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text: "9. Condizioni Generali", font: "Arial", size: 32, bold: true, color: BRAND_TEAL })],
  }),
);

const conditions = [
  ["Tempi di consegna", "8-11 settimane dalla firma del contratto"],
  ["Propriet\u00E0 intellettuale", "Licenza d\u2019uso esclusiva e illimitata concessa al Cliente. La IP del motore di base resta di HeyAI."],
  ["Personalizzazioni", "Tutte le configurazioni, regole AI e personalizzazioni sviluppate per FuturItaly sono di propriet\u00E0 esclusiva del Cliente."],
  ["Garanzia", "2 mesi assistenza post-lancio inclusa (bug fixing e supporto operativo)"],
  ["Costi ricorrenti post-MVP", "Stimati \u20AC 200-400/mese (cloud + API AI) a carico Cliente"],
  ["Change request", "Modifiche allo scope saranno quotate separatamente"],
  ["Validit\u00E0 offerta", "30 giorni dalla data del presente documento"],
];

const condRows = [
  new TableRow({ children: [
    headerCell("Condizione", 3000),
    headerCell("Dettaglio", 6026),
  ]}),
];
conditions.forEach(([cond, det], i) => {
  condRows.push(new TableRow({ children: [
    dataCell(cond, 3000, { bold: true, fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
    dataCell(det, 6026, { fill: i % 2 === 0 ? GREY_LIGHT : undefined }),
  ]}));
});

children.push(
  new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    columnWidths: [3000, 6026],
    rows: condRows,
  }),
  new Paragraph({ spacing: { after: 400 }, children: [] }),
);

// ── CLOSING ──
children.push(
  new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: BRAND_TEAL } },
    children: [],
  }),
  new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({
      text: "Restiamo a disposizione per qualsiasi chiarimento.",
      font: "Arial", size: 20, color: BRAND_DARK,
    })],
  }),
  new Paragraph({
    spacing: { after: 60 },
    children: [new TextRun({
      text: "Ing. Bruno Mattucci",
      font: "Arial", size: 20, bold: true, color: BRAND_DARK,
    })],
  }),
  new Paragraph({
    spacing: { after: 0 },
    children: [new TextRun({
      text: "Amministratore Unico \u2013 HeyAI S.r.l.",
      font: "Arial", size: 20, color: "666666",
    })],
  }),
);

// ══════════════════════════════════════════════
// BUILD DOCUMENT
// ══════════════════════════════════════════════
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 20 },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: BRAND_TEAL },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: BRAND_TEAL },
        paragraph: { spacing: { before: 180, after: 180 }, outlineLevel: 1 },
      },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "HeyAI S.r.l. | Proposta FuturItaly | Febbraio 2026", font: "Arial", size: 16, color: "999999" })],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "PEC: heyai@pec.it | REA RM \u2013 1751505 | Cod. Fiscale: 17947791004 | Amministratore Unico: Ing. Bruno Mattucci", font: "Arial", size: 14, color: "999999" }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Pagina ", font: "Arial", size: 14, color: "999999" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 14, color: "999999" }),
          ],
        })],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Quotazione_Osservatorio_Strategico_FuturItaly.docx", buffer);
  console.log("Document created successfully!");
});