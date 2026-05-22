const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        Header, Footer, AlignmentType, BorderStyle, WidthType, ShadingType,
        HeadingLevel, PageNumber, PageBreak } = require('docx');
const fs = require('fs');

// Colors
const PRIMARY_BLUE = "1E3A5F";
const ACCENT_BLUE = "2563EB";
const LIGHT_BLUE = "E8F0FE";
const DARK_GRAY = "374151";
const MEDIUM_GRAY = "6B7280";
const LIGHT_GRAY = "F3F4F6";
const PURPLE = "7C3AED";
const LIGHT_PURPLE = "EDE9FE";
const ORANGE = "EA580C";
const GREEN = "065F46";
const LIGHT_GREEN = "D1FAE5";

// Borders
const thinBorder = { style: BorderStyle.SINGLE, size: 8, color: "E5E7EB" };
const borders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

// Helper functions
const createCell = (text, opts = {}) => {
  const { bold, size = 20, color = DARK_GRAY, align = AlignmentType.LEFT, fill, colSpan } = opts;
  return new TableCell({
    borders,
    columnSpan: colSpan,
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    margins: { top: 100, bottom: 100, left: 150, right: 150 },
    children: [new Paragraph({ 
      alignment: align,
      children: [new TextRun({ text, size, bold, color })] 
    })]
  });
};

const spacer = (height = 200) => new Paragraph({ spacing: { after: height }, children: [] });
const pageBreak = () => new Paragraph({ children: [new PageBreak()] });

// Build document sections
const coverPage = [
  spacer(600),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
    children: [new TextRun({ text: "PROPOSTA COMMERCIALE", size: 48, bold: true, color: PRIMARY_BLUE })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 600 },
    children: [new TextRun({ text: "Servizi di Digital Marketing & Lead Generation", size: 32, color: ACCENT_BLUE })]
  }),
  spacer(200),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9638],
    rows: [new TableRow({ children: [
      new TableCell({
        borders: noBorders,
        shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
        margins: { top: 300, bottom: 300, left: 400, right: 400 },
        children: [
          new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "Preparata per", size: 22, color: MEDIUM_GRAY })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 50 }, children: [new TextRun({ text: "NOLOOP ON TRADE", size: 36, bold: true, color: PRIMARY_BLUE })] }),
          new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Full Service Retail Operator per Pop-Up Store e Attivazioni", size: 20, color: DARK_GRAY })] })
        ]
      })
    ]})]
  }),
  spacer(600),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 50 }, children: [new TextRun({ text: "Presentata da", size: 20, color: MEDIUM_GRAY })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "HeyAI", size: 32, bold: true, color: ACCENT_BLUE })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 50 }, children: [new TextRun({ text: "Digital Strategy & Marketing B2B", size: 20, color: DARK_GRAY })] }),
  spacer(400),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 50 }, children: [new TextRun({ text: "Data: Gennaio 2026", size: 20, color: MEDIUM_GRAY })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Versione: 2.0", size: 20, color: MEDIUM_GRAY })] }),
  pageBreak()
];

const executiveSummary = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Executive Summary")] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "La presente proposta definisce un piano di Digital Marketing strutturato per colmare il gap di visibilità digitale di Noloop On Trade (NOT) e supportare il raggiungimento dell'obiettivo dichiarato: ", size: 22 }),
      new TextRun({ text: "acquisire almeno 2 nuovi clienti nei prossimi 6 mesi.", size: 22, bold: true })
    ]
  }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "NOT è oggi un full service retail operator con track record comprovato (150+ centri commerciali per British American Tobacco, caso di successo K-ippun Haru con espansione da 1 a 4 location + negozio), ma con una criticità strategica: ", size: 22 }),
      new TextRun({ text: "assenza di percezione del brand e visibilità online.", size: 22, bold: true })
    ]
  }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9638],
    rows: [new TableRow({ children: [
      new TableCell({
        borders: noBorders,
        shading: { fill: "FEF3C7", type: ShadingType.CLEAR },
        margins: { top: 200, bottom: 200, left: 300, right: 300 },
        children: [
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "⚠️ Pain Point identificato:", size: 22, bold: true, color: "92400E" })] }),
          new Paragraph({ children: [new TextRun({ text: "\"Facciamo troppo digitale, dobbiamo stare di più sul territorio e fare più networking. Assenza di percezione del Brand NOT, non siamo posizionati, non siamo visibili.\" - Germano, NOT", size: 22, italics: true, color: "92400E" })] })
        ]
      })
    ]})]
  }),
  spacer(200),
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Struttura della Proposta")] }),
  new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: "La proposta si articola in due macro-aree:", size: 22 })] }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [4819, 4819],
    rows: [
      new TableRow({ children: [
        new TableCell({
          borders,
          shading: { fill: GREEN, type: ShadingType.CLEAR },
          margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "SERVIZI CORE", size: 22, bold: true, color: "FFFFFF" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Attivazione Immediata", size: 18, color: LIGHT_GREEN })] })
          ]
        }),
        new TableCell({
          borders,
          shading: { fill: PURPLE, type: ShadingType.CLEAR },
          margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "SERVIZI ADVANCED", size: 22, bold: true, color: "FFFFFF" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Lead Generation & AI Tools", size: 18, color: LIGHT_PURPLE })] })
          ]
        })
      ]}),
      new TableRow({ children: [
        new TableCell({
          borders,
          margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Sito Web Istituzionale", size: 20 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Gestione LinkedIn", size: 20 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Asset Commerciali", size: 20 })] }),
            new Paragraph({ children: [new TextRun({ text: "• AI Pitch Accelerator", size: 20 })] })
          ]
        }),
        new TableCell({
          borders,
          margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Content Marketing & Lead Magnet", size: 20 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• LinkedIn Advertising", size: 20 })] }),
            new Paragraph({ children: [new TextRun({ text: "• NOT Opportunity Finder", size: 20 })] })
          ]
        })
      ]})
    ]
  }),
  pageBreak()
];

const serviziCore = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Servizi Core")] }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "I servizi core rappresentano la base fondamentale per costruire la presenza digitale di NOT e dotare il team commerciale degli strumenti necessari.", size: 22 })] }),
  
  // 2.1 Sito Web
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.1 Realizzazione Sito Web Istituzionale")] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
      new TextRun({ text: "Creare una presenza web professionale che comunichi il posizionamento di NOT come leader italiano nel retail activation.", size: 22 })
    ]
  }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [4819, 4819],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OPZIONE BASE", size: 24, bold: true, color: PRIMARY_BLUE })] })] }),
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "OPZIONE ADVANCED", size: 24, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "€ 2.000,00", size: 32, bold: true, color: ACCENT_BLUE })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(oltre IVA)", size: 18, color: MEDIUM_GRAY })] })
          ] }),
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "€ 10.000,00", size: 32, bold: true, color: ACCENT_BLUE })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(oltre IVA)", size: 18, color: MEDIUM_GRAY })] })
          ] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 },
          children: [new Paragraph({ children: [new TextRun({ text: "Tempistiche: ", size: 20, bold: true }), new TextRun({ text: "1 settimana lavorativa", size: 20 })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 },
          children: [new Paragraph({ children: [new TextRun({ text: "Tempistiche: ", size: 20, bold: true }), new TextRun({ text: "2-3 settimane lavorative", size: 20 })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Cosa include:", size: 20, bold: true })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Sito vetrina professionale", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Design pulito e moderno", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Sezioni: Chi siamo, Servizi, Contatti", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Responsive mobile-first", size: 20 })] }),
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "• Ottimizzazione SEO base", size: 20 })] }),
            new Paragraph({ children: [new TextRun({ text: "Reference: Sito HeyAI", size: 18, italics: true, color: MEDIUM_GRAY })] })
          ] }),
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Cosa include:", size: 20, bold: true })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Design premium \"wow effect\"", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Animazioni e micro-interazioni", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Case study interattivi", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Sezione ROI calculator", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Blog/News + Form avanzato", size: 20 })] }),
            new Paragraph({ children: [new TextRun({ text: "• SEO avanzata + Analytics", size: 20 })] })
          ] })
      ]})
    ]
  }),
  spacer(300),
  
  // 2.2 LinkedIn
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.2 Gestione LinkedIn")] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
      new TextRun({ text: "Costruire thought leadership e raggiungere decision maker B2B dei brand target.", size: 22 })
    ]
  }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9638],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "GESTIONE LINKEDIN - SERVIZIO RECURRING", size: 24, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 200, bottom: 200, left: 300, right: 300 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [new TextRun({ text: "€ 600,00 / mese", size: 32, bold: true, color: ACCENT_BLUE })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(oltre IVA)", size: 18, color: MEDIUM_GRAY })] })
          ] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 300, right: 300 },
          children: [
            new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: "Piano Editoriale:", size: 22, bold: true })] }),
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "• Primo mese (lancio): ", size: 20, bold: true }), new TextRun({ text: "16 post per popolare la pagina", size: 20 })] }),
            new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: "• Dal secondo mese: ", size: 20, bold: true }), new TextRun({ text: "12 post/mese (3 post/settimana)", size: 20 })] }),
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Tipologie: ", size: 22, bold: true })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Success stories, insight retail, behind the scenes, trend, thought leadership", size: 20 })] })
          ] })
      ]})
    ]
  }),
  pageBreak()
];

const assetAndAI = [
  // 2.3 Asset Commerciali
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.3 Creazione Asset Commerciali")] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
      new TextRun({ text: "Materiali professionali per aumentare il tasso di conversione del team commerciale.", size: 22 })
    ]
  }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [4819, 4819],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PRESENTAZIONE NOT", size: 22, bold: true, color: "FFFFFF" })] })] }),
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "BUSINESS CASE K-IPPUN HARU", size: 22, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "€ 700,00", size: 28, bold: true, color: ACCENT_BLUE })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(oltre IVA) | ~10 ore lavoro", size: 18, color: MEDIUM_GRAY })] })
          ] }),
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "€ 700,00", size: 28, bold: true, color: ACCENT_BLUE })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "(oltre IVA) | ~10 ore lavoro", size: 18, color: MEDIUM_GRAY })] })
          ] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Deck corporate professionale", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Value proposition chiara", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Servizi e referenze", size: 20 })] }),
            new Paragraph({ children: [new TextRun({ text: "Consegna: 2 settimane", size: 18, bold: true })] })
          ] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Caso successo documentato", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Challenge → Solution → Results", size: 20 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• KPI e metriche ROI", size: 20 })] }),
            new Paragraph({ children: [new TextRun({ text: "Consegna: 2 settimane", size: 18, bold: true })] })
          ] })
      ]})
    ]
  }),
  spacer(300),
  
  // 2.4 AI Pitch Accelerator
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.4 AI Pitch Accelerator")] }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9638],
    rows: [new TableRow({ children: [
      new TableCell({ borders: noBorders, shading: { fill: LIGHT_PURPLE, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 },
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
          new TextRun({ text: "🤖 SVILUPPO TECNOLOGICO | ", size: 20, bold: true, color: PURPLE }),
          new TextRun({ text: "Quotazione su richiesta in caso di accettazione servizi core", size: 20, color: PURPLE })
        ] })] })
    ]})]
  }),
  spacer(200),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
      new TextRun({ text: "Sviluppare uno strumento AI personalizzato (GPT custom) che accelera la preparazione delle presentazioni strategiche per nuovi clienti.", size: 22 })
    ]
  }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9638],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: PURPLE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "FUNZIONALITÀ PRINCIPALI", size: 24, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 200, bottom: 200, left: 300, right: 300 },
          children: [
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "1. Ricerca Preliminare Automatizzata", size: 22, bold: true, color: PURPLE })] }),
            new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: "Analisi automatica di brief, posizionamento prospect, trend di mercato, competitor, storico comunicazioni e iniziative marketing del cliente.", size: 20 })] }),
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "2. Generazione Contenuti Multimediali per Gare", size: 22, bold: true, color: PURPLE })] }),
            new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: "Creazione accelerata di materiali visivi: mockup stand, post-produzione render, video teaser per presentazioni.", size: 20 })] }),
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "3. Assistente alla Creazione di Copy", size: 22, bold: true, color: PURPLE })] }),
            new Paragraph({ children: [new TextRun({ text: "Generazione bozze testi (naming, payoff, key messages) partendo dal concept. Lo strumento apprende lo stile NOT.", size: 20 })] })
          ] })
      ]})
    ]
  }),
  spacer(200),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [4819, 4819],
    rows: [new TableRow({ children: [
      new TableCell({ borders, shading: { fill: "F0FDF4", type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Benefici attesi:", size: 20, bold: true, color: GREEN })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Riduzione 60-70% tempo prep. pitch", size: 18 })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Qualità ricerca più approfondita", size: 18 })] }),
          new Paragraph({ children: [new TextRun({ text: "• Standardizzazione output", size: 18 })] })
        ] }),
      new TableCell({ borders, shading: { fill: LIGHT_PURPLE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Pricing:", size: 20, bold: true, color: PURPLE })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Setup iniziale: ____________", size: 18 })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Manutenzione mensile: ____________", size: 18 })] }),
          new Paragraph({ children: [new TextRun({ text: "Da quotare su specifica richiesta", size: 18, italics: true, color: MEDIUM_GRAY })] })
        ] })
    ]})]
  }),
  pageBreak()
];

const serviziAdvanced = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Servizi Advanced - Lead Generation")] }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "I servizi advanced amplificano l'impatto della presenza digitale e automatizzano il processo di lead generation.", size: 22 })] }),
  
  // 3.1 Content Marketing
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.1 Content Marketing & Lead Magnet")] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
      new TextRun({ text: "Creare contenuti di valore per brand digital-native e settori regolamentati, posizionando NOT come partner strategico.", size: 22 })
    ]
  }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [4819, 4819],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: ACCENT_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "MODELLO 1", size: 20, bold: true, color: "FFFFFF" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Brand DTC / Digital-Native", size: 18, color: "DBEAFE" })] })
          ] }),
        new TableCell({ borders, shading: { fill: ORANGE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "MODELLO 2", size: 20, bold: true, color: "FFFFFF" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Settori Regolamentati", size: 18, color: "FED7AA" })] })
          ] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Contenuti suggeriti:", size: 20, bold: true })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• \"Dal DTC al retail fisico: quando e come fare il salto\"", size: 18 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• \"Customer Acquisition offline per brand nativi digitali\"", size: 18 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• \"Il ROI dell'esperienza fisica: perché il touch & feel converte\"", size: 18 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• \"Come testare il mercato italiano senza negozi permanenti\"", size: 18 })] }),
            new Paragraph({ children: [new TextRun({ text: "• \"Omnichannel per brand emergenti\"", size: 18 })] })
          ] }),
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Contenuti suggeriti:", size: 20, bold: true })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• \"Brand building senza ADV: strategie per settori con restrizioni\"", size: 18 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• \"Education marketing: costruire fiducia senza vendita diretta\"", size: 18 })] }),
            new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• \"Experiential marketing per tabacco, gaming e crypto\"", size: 18 })] }),
            new Paragraph({ children: [new TextRun({ text: "• \"Lead generation fisica: contatti qualificati in-store\"", size: 18 })] })
          ] })
      ]})
    ]
  }),
  spacer(200),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [4819, 4819],
    rows: [new TableRow({ children: [
      new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Output da quotare:", size: 20, bold: true })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Creazione singolo Lead Magnet", size: 18 })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Setup landing page e form", size: 18 })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• Setup email automation (3-5 email)", size: 18 })] }),
          new Paragraph({ children: [new TextRun({ text: "• Gestione mensile/trimestrale", size: 18 })] })
        ] }),
      new TableCell({ borders, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Pricing:", size: 20, bold: true, color: PRIMARY_BLUE })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Lead Magnet singolo: ____________", size: 18 })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Landing page + form: ____________", size: 18 })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "Email automation setup: ____________", size: 18 })] }),
          new Paragraph({ children: [new TextRun({ text: "Fee gestione mensile: ____________", size: 18 })] })
        ] })
    ]})]
  }),
  spacer(300),
  
  // 3.2 LinkedIn Advertising
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.2 LinkedIn Advertising")] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
      new TextRun({ text: "Campagne ADV su LinkedIn per generare lead qualificati (brand manager, marketing director, retail manager).", size: 22 })
    ]
  }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9638],
    rows: [new TableRow({ children: [
      new TableCell({ borders: noBorders, shading: { fill: "FEF3C7", type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Contesto:", size: 20, bold: true, color: "92400E" })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• NOT avrà una pagina LinkedIn attiva con contenuti regolari", size: 18, color: "92400E" })] }),
          new Paragraph({ spacing: { after: 50 }, children: [new TextRun({ text: "• L'ADV amplifica la reach e converte il traffico in lead", size: 18, color: "92400E" })] }),
          new Paragraph({ children: [new TextRun({ text: "• Target: brand digital-native, settori Beauty, Fashion, Food, Pet, Fitness, Tobacco", size: 18, color: "92400E" })] })
        ] })
    ]})]
  }),
  spacer(200),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [4819, 4819],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "COSA INCLUDE", size: 22, bold: true, color: "FFFFFF" })] })] }),
        new TableCell({ borders, shading: { fill: ACCENT_BLUE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "PRICING", size: 22, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Setup campagne LinkedIn Ads", size: 18 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Creazione creatività e copy", size: 18 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Definizione audience e targeting", size: 18 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Gestione e ottimizzazione mensile", size: 18 })] }),
            new Paragraph({ children: [new TextRun({ text: "• Reporting performance", size: 18 })] })
          ] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Fee setup iniziale: ____________", size: 18 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Fee gestione mensile: ____________", size: 18 })] }),
            new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "(escluso budget media)", size: 16, color: MEDIUM_GRAY })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Budget media consigliato:", size: 18, bold: true })] }),
            new Paragraph({ children: [new TextRun({ text: "Min: ________ | Ottimale: ________", size: 18 })] })
          ] })
      ]})
    ]
  }),
  pageBreak()
];

const opportunityFinder = [
  // 3.3 NOT Opportunity Finder
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.3 NOT Opportunity Finder")] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "Obiettivo: ", size: 22, bold: true }),
      new TextRun({ text: "Sviluppare uno strumento automatizzato di scouting lead che effettua ricerche automatiche e restituisce liste di aziende/contatti da approcciare.", size: 22 })
    ]
  }),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9638],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: PURPLE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
          children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "FUNZIONALITÀ PRINCIPALI", size: 24, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 200, bottom: 200, left: 300, right: 300 },
          children: [
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Scraping automatizzato di fonti rilevanti (news, press release, funding round, hiring, espansioni retail)", size: 20 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Notifiche periodiche con nuove opportunità", size: 20 })] }),
            new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Per ogni lead: nome azienda, referente/decision maker, snapshot situazione, messaggio outreach suggerito", size: 20 })] }),
            new Paragraph({ children: [new TextRun({ text: "• Dashboard centralizzata per consultazione e gestione lead", size: 20 })] })
          ] })
      ]})
    ]
  }),
  spacer(200),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [4819, 4819],
    rows: [new TableRow({ children: [
      new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Input già disponibili:", size: 20, bold: true })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Industry target: Beauty, K-Beauty, Moda Sostenibile, Fitness, Pet, Food, Home, Tech, Tobacco, Gaming, Crypto", size: 18 })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Lista brand target prioritari (già mappati)", size: 18 })] }),
          new Paragraph({ children: [new TextRun({ text: "• Keyword: lancio prodotto, espansione Italia, funding round, hiring retail/marketing", size: 18 })] })
        ] }),
      new TableCell({ borders, shading: { fill: "F0FDF4", type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Benefici attesi:", size: 20, bold: true, color: GREEN })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Riduzione attività manuali di scouting", size: 18 })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Rapidità raccolta informazioni", size: 18 })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "• Aggiornamento costante e centralizzato", size: 18 })] }),
          new Paragraph({ children: [new TextRun({ text: "• Aumento opportunità identificate", size: 18 })] })
        ] })
    ]})]
  }),
  spacer(200),
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [9638],
    rows: [new TableRow({ children: [
      new TableCell({ borders, shading: { fill: LIGHT_PURPLE, type: ShadingType.CLEAR }, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Output da quotare:", size: 20, bold: true, color: PURPLE })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Effort sviluppo MVP: ____________", size: 18 })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Fonti da integrare: ____________", size: 18 })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Frequenza aggiornamento (giornaliero/settimanale): ____________", size: 18 })] }),
          new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Costo gestione/manutenzione mensile: ____________", size: 18 })] }),
          new Paragraph({ children: [new TextRun({ text: "Timeline stimata per delivery: ____________", size: 18 })] })
        ] })
    ]})]
  }),
  pageBreak()
];

const roadmapSection = [
  new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. Roadmap e Piano di Investimento")] }),
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: "Di seguito la roadmap dettagliata per i ", size: 22 }),
      new TextRun({ text: "Servizi Core", size: 22, bold: true }),
      new TextRun({ text: ", suddivisa tra attività ", size: 22 }),
      new TextRun({ text: "One-Shot", size: 22, bold: true }),
      new TextRun({ text: " e ", size: 22 }),
      new TextRun({ text: "Recurring", size: 22, bold: true }),
      new TextRun({ text: ".", size: 22 })
    ]
  }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "Data inizio attività: 01 Febbraio 2026", size: 22, bold: true, color: ACCENT_BLUE })] }),
  spacer(200),
  
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.1 Servizi Core - Dettaglio Investimenti")] }),
  
  // ONE-SHOT Table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [1800, 2100, 3338, 2400],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, columnSpan: 4, shading: { fill: GREEN, type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 200, right: 200 },
          children: [new Paragraph({ children: [new TextRun({ text: "ONE-SHOT | Investimenti Una Tantum", size: 22, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: LIGHT_GREEN, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 },
          children: [new Paragraph({ children: [new TextRun({ text: "INIZIATIVA", size: 18, bold: true, color: GREEN })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GREEN, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 },
          children: [new Paragraph({ children: [new TextRun({ text: "TIMING", size: 18, bold: true, color: GREEN })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GREEN, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 },
          children: [new Paragraph({ children: [new TextRun({ text: "COSA È COMPRESO", size: 18, bold: true, color: GREEN })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GREEN, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 },
          children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "INVESTIMENTO", size: 18, bold: true, color: GREEN })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Sito Web BASE", size: 20, bold: true })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Feb 2026 - Sett. 1", size: 18 })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Sito vetrina responsive, SEO base, sezioni standard", size: 18 })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€ 2.000,00", size: 20, bold: true })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Sito Web ADVANCED", size: 20, bold: true })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Feb 2026 - Sett. 1-3", size: 18 })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Design premium, animazioni, ROI calculator, blog, form avanzati", size: 18 })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€ 10.000,00", size: 20, bold: true })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Presentazione NOT", size: 20, bold: true })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Feb 2026 - Sett. 1-2", size: 18 })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Deck corporate, value proposition, servizi, referenze (~10h)", size: 18 })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€ 700,00", size: 20, bold: true })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Business Case K-ippun Haru", size: 20, bold: true })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Feb 2026 - Sett. 1-2", size: 18 })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Caso successo documentato, KPI, ROI (~10h)", size: 18 })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€ 700,00", size: 20, bold: true })] })] })
      ]})
    ]
  }),
  spacer(300),
  
  // RECURRING Table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [1800, 2100, 3338, 2400],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, columnSpan: 4, shading: { fill: "1E40AF", type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 200, right: 200 },
          children: [new Paragraph({ children: [new TextRun({ text: "RECURRING | Investimenti Mensili Continuativi", size: 22, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: "DBEAFE", type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 },
          children: [new Paragraph({ children: [new TextRun({ text: "INIZIATIVA", size: 18, bold: true, color: "1E40AF" })] })] }),
        new TableCell({ borders, shading: { fill: "DBEAFE", type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 },
          children: [new Paragraph({ children: [new TextRun({ text: "TIMING", size: 18, bold: true, color: "1E40AF" })] })] }),
        new TableCell({ borders, shading: { fill: "DBEAFE", type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 },
          children: [new Paragraph({ children: [new TextRun({ text: "COSA È COMPRESO", size: 18, bold: true, color: "1E40AF" })] })] }),
        new TableCell({ borders, shading: { fill: "DBEAFE", type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 150, right: 150 },
          children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "INVESTIMENTO", size: 18, bold: true, color: "1E40AF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Gestione LinkedIn", size: 20, bold: true })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "Da Feb 2026 - Continuativo", size: 18 })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ children: [new TextRun({ text: "M1: 16 post lancio | M2+: 12 post/mese, piano editoriale", size: 18 })] })] }),
        new TableCell({ borders, margins: { top: 100, bottom: 100, left: 150, right: 150 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€ 600,00/mese", size: 20, bold: true })] })] })
      ]})
    ]
  }),
  pageBreak()
];

const cashFlowAndNextSteps = [
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.2 Timeline e Cash Flow (Scenario Base)")] }),
  new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "Ipotesi: Sito Web opzione BASE (€ 2.000)", size: 20, italics: true, color: MEDIUM_GRAY })] }),
  
  // Cash flow table
  new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: [1500, 1400, 1400, 1400, 1400, 1400, 1138],
    rows: [
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "VOCE", size: 16, bold: true, color: "FFFFFF" })] })] }),
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "FEB 26", size: 16, bold: true, color: "FFFFFF" })] })] }),
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "MAR 26", size: 16, bold: true, color: "FFFFFF" })] })] }),
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "APR 26", size: 16, bold: true, color: "FFFFFF" })] })] }),
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "MAG 26", size: 16, bold: true, color: "FFFFFF" })] })] }),
        new TableCell({ borders, shading: { fill: PRIMARY_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "GIU 26", size: 16, bold: true, color: "FFFFFF" })] })] }),
        new TableCell({ borders, shading: { fill: "059669", type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "TOTALE", size: 16, bold: true, color: "FFFFFF" })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ children: [new TextRun({ text: "Sito Web", size: 18 })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GREEN, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€ 2.000", size: 18, bold: true })] })] }),
        new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
        new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
        new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
        new TableCell({ borders, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GREEN, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€ 2.000", size: 18, bold: true })] })] })
      ]}),
      new TableRow({ children: [
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ children: [new TextRun({ text: "Presentazione", size: 18 })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GREEN, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "€ 700", size: 18, bold: true })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
        new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "-", size: 18, color: MEDIUM_GRAY })] })] }),
        new