const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel,
  BorderStyle, ShadingType, Table, TableRow, TableCell, WidthType, Header
} = require('docx');

// ---- BRAND (dallo stile proposte di investimento HeyAI) ----
const TEAL = "074F6A";
const NAVY = "1F3864";
const GRAY_TXT = "666666";
const LIGHT = "8C8C8C";
const ALT_BG = "F0F5F6";
const HEADER_BG = "074F6A";
const BODY = "Aptos";

// Aptos body 11pt -> 22 half-points
const SIZE_BODY = 22;
const SIZE_TITLE = 36;      // 18pt
const SIZE_SUBTITLE = 20;   // 10pt
const SIZE_H1 = 28;         // 14pt
const SIZE_INTRO = 20;      // 10pt
const SIZE_HINT = 18;       // 9pt
const SIZE_TABLE = 20;      // 10pt

// ---- Helpers ----
const softBorder = { style: BorderStyle.SINGLE, size: 4, color: "CFD8DC" };
const cellBorders = { top: softBorder, bottom: softBorder, left: softBorder, right: softBorder };

const t = (text, opts = {}) => new TextRun({ text, font: BODY, ...opts });

const P = (text, opts = {}) =>
  new Paragraph({
    spacing: { before: 80, after: 80, line: 300 },
    children: [t(text, opts)],
  });

const IntroSez = (text) =>
  new Paragraph({
    spacing: { before: 60, after: 200, line: 280 },
    children: [t(text, { italics: true, color: GRAY_TXT, size: SIZE_INTRO })],
  });

const H1 = (text) =>
  new Paragraph({
    spacing: { before: 440, after: 140, line: 280 },
    children: [t(text, { bold: true, color: TEAL, size: SIZE_H1 })],
  });

const Q = (num, text, hint) => {
  const blocks = [
    new Paragraph({
      spacing: { before: 220, after: 60, line: 280 },
      children: [
        t(`${num}   `, { bold: true, color: TEAL }),
        t(text, { bold: true }),
      ],
    }),
  ];
  if (hint) {
    blocks.push(
      new Paragraph({
        spacing: { before: 0, after: 100, line: 260 },
        children: [t(hint, { italics: true, color: GRAY_TXT, size: SIZE_HINT })],
      })
    );
  }
  return blocks;
};

const AnswerBox = (rows = 2) => {
  const trs = [];
  for (let i = 0; i < rows; i++) {
    trs.push(
      new TableRow({
        children: [
          new TableCell({
            borders: cellBorders,
            width: { size: 9638, type: WidthType.DXA },
            margins: { top: 140, bottom: 140, left: 160, right: 160 },
            children: [new Paragraph({ children: [t("")] })],
          }),
        ],
      })
    );
  }
  return new Table({
    width: { size: 9638, type: WidthType.DXA },
    columnWidths: [9638],
    rows: trs,
  });
};

const HeaderCell = (text, width) =>
  new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: HEADER_BG, type: ShadingType.CLEAR, color: "auto" },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [
      new Paragraph({
        spacing: { before: 0, after: 0 },
        children: [t(text, { bold: true, color: "FFFFFF", size: SIZE_TABLE })],
      }),
    ],
  });

const DataCell = (text, width, opts = {}) =>
  new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    shading: opts.alt ? { fill: ALT_BG, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [
      new Paragraph({
        spacing: { before: 0, after: 0 },
        children: [t(text || "", { bold: !!opts.bold, size: SIZE_TABLE })],
      }),
    ],
  });

const CheckboxLine = (text) =>
  new Paragraph({
    spacing: { before: 60, after: 60, line: 280 },
    children: [
      t("☐   "),
      t(text),
    ],
  });

// ---- CONTENT ----
const children = [];

// Titolo
children.push(
  new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [t("Questionario di Discovery", { bold: true, color: TEAL, size: SIZE_TITLE })],
  }),
  new Paragraph({
    spacing: { before: 0, after: 40 },
    children: [
      t("Progetto di ricerca automatizzata di gare d'appalto e bandi pubblici", {
        italics: true, color: GRAY_TXT, size: SIZE_SUBTITLE,
      }),
    ],
  }),
  new Paragraph({
    spacing: { before: 0, after: 80 },
    children: [
      t("Achipoint × HeyAI", { italics: true, color: GRAY_TXT, size: SIZE_SUBTITLE }),
    ],
  }),
  new Paragraph({
    spacing: { before: 0, after: 360 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: TEAL, space: 4 } },
    children: [t("Aprile 2026", { italics: true, color: LIGHT, size: SIZE_SUBTITLE })],
  })
);

// Intro documento
children.push(
  new Paragraph({
    spacing: { before: 0, after: 140, line: 300 },
    children: [
      t("Il presente questionario raccoglie le informazioni necessarie alla formulazione della proposta tecnico-economica del progetto illustrato nella riunione preliminare. Le risposte consentiranno di dimensionare correttamente il perimetro della soluzione, individuare le fonti dati rilevanti e costruire una proiezione economica coerente con l'investimento proposto."),
    ],
  }),
  new Paragraph({
    spacing: { before: 0, after: 320, line: 300 },
    children: [
      t("Il documento è compilabile direttamente in Word. Dove una domanda non fosse applicabile è sufficiente indicarlo. La compilazione richiede circa 30 minuti."),
    ],
  })
);

// ========================================
// 1. PROFILO AZIENDALE E SERVIZI
// ========================================
children.push(H1("1.  Profilo aziendale e servizi"));
children.push(IntroSez("Inquadramento dell'azienda e del perimetro di servizi."));

Q("1.1", "Descrizione sintetica dell'azienda.",
  "Numero di dipendenti, fatturato annuo indicativo, anni di attività, strutture operative principali."
).forEach(b => children.push(b));
children.push(AnswerBox(3));

Q("1.2", "Mappa dei servizi erogati.",
  "Indicare per ciascun livello i servizi corrispondenti."
).forEach(b => children.push(b));

const srv_w = [2800, 6838];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: srv_w,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [HeaderCell("Livello", srv_w[0]), HeaderCell("Servizi", srv_w[1])],
    }),
    new TableRow({ children: [DataCell("Attività principale", srv_w[0], { bold: true }), DataCell("", srv_w[1])] }),
    new TableRow({ children: [DataCell("In espansione", srv_w[0], { bold: true, alt: true }), DataCell("", srv_w[1], { alt: true })] }),
    new TableRow({ children: [DataCell("Da escludere", srv_w[0], { bold: true }), DataCell("", srv_w[1])] }),
  ],
}));

// ========================================
// 2. FONTI DELLE OPPORTUNITÀ
// ========================================
children.push(H1("2.  Fonti delle opportunità"));
children.push(IntroSez("Mappatura delle fonti da cui lo strumento dovrà raccogliere le opportunità."));

Q("2.1", "Fonti attualmente presidiate.",
  "Compilare una riga per ciascun portale o albo di iscrizione. La qualità delle segnalazioni è una valutazione soggettiva: alta indica segnalazioni in linea con l'attività, bassa indica segnalazioni generiche o non pertinenti."
).forEach(b => children.push(b));

const src_w = [3400, 1300, 1500, 1600, 1838];
const emptySrc = (alt) => new TableRow({
  children: [
    DataCell("", src_w[0], { alt }),
    DataCell("", src_w[1], { alt }),
    DataCell("", src_w[2], { alt }),
    DataCell("", src_w[3], { alt }),
    DataCell("", src_w[4], { alt }),
  ],
});
const srcRows = [
  new TableRow({
    tableHeader: true,
    children: [
      HeaderCell("Portale / albo", src_w[0]),
      HeaderCell("Iscritti?", src_w[1]),
      HeaderCell("Dal (anno)", src_w[2]),
      HeaderCell("Segnalazioni / mese", src_w[3]),
      HeaderCell("Qualità segnalazioni", src_w[4]),
    ],
  }),
];
for (let i = 0; i < 9; i++) srcRows.push(emptySrc(i % 2 === 0));
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: src_w,
  rows: srcRows,
}));

Q("2.2", "Fonti di interesse da esplorare.",
  "Elencare portali, albi fornitori, enti o canali strutturati ritenuti potenzialmente rilevanti ma oggi non presidiati. Rientrano in questa categoria anche gli albi di grandi committenti privati (es. gestori aeroportuali, ferroviari, autostradali; società di facility management; grandi gruppi industriali e sanitari) e i bollettini periodici di associazioni di categoria o studi di consulenza."
).forEach(b => children.push(b));
children.push(AnswerBox(4));

// ========================================
// 3. PARAMETRI DI FILTRAGGIO
// ========================================
children.push(H1("3.  Parametri di filtraggio"));
children.push(IntroSez("Parametri con cui lo strumento selezionerà e ordinerà i risultati."));

Q("3.1", "Qualificazioni e certificazioni attive.",
  "Elencare tutti gli elementi formali potenzialmente discriminanti in un bando pubblico: attestazione SOA con categorie e classi, certificazioni ISO, iscrizioni speciali (Albo Gestori Ambientali, White List antimafia, rating di legalità, altre). Includere anche la dotazione tecnica amministrativa (PEC, SPID aziendale, firma digitale dell'amministratore) qualora uno di questi elementi non fosse già attivo."
).forEach(b => children.push(b));
children.push(AnswerBox(5));

Q("3.2", "Ambito economico e geografico di interesse.",
  "Indicare l'intervallo di importi dei bandi di interesse e le aree geografiche preferenziali o escluse per ragioni logistiche o operative."
).forEach(b => children.push(b));
children.push(AnswerBox(4));

Q("3.3", "Tipologie di committente di interesse.",
  "Segnare le tipologie rilevanti."
).forEach(b => children.push(b));
children.push(CheckboxLine("Pubblica Amministrazione centrale (Ministeri, Senato, Camera, enti nazionali)"));
children.push(CheckboxLine("Pubblica Amministrazione locale (Regioni, Province, Comuni)"));
children.push(CheckboxLine("Enti partecipati pubblici (Sovrintendenze, società pubbliche, agenzie)"));
children.push(CheckboxLine("Grandi committenti privati con albo fornitori strutturato"));
children.push(CheckboxLine("Altro — specificare:"));
children.push(AnswerBox(1));

Q("3.4", "Parole chiave tematiche — inclusione ed esclusione.",
  "Termini ricorrenti nei titoli dei bandi di interesse (es. ponteggi, opere provvisionali, noleggio montacarichi) e termini che indicano bandi da escludere a priori."
).forEach(b => children.push(b));
children.push(AnswerBox(3));

// ========================================
// 4. TEMPI E CAPACITÀ OPERATIVA
// ========================================
children.push(H1("4.  Tempi e capacità operativa"));
children.push(IntroSez("Dati operativi per il dimensionamento della soluzione."));

Q("4.1", "Tempi e capacità operativa attuali.",
  "Indicare in forma sintetica i seguenti elementi: (a) tempo attualmente dedicato alla ricerca e analisi di bandi, in ore a settimana; (b) tempo medio necessario per preparare la documentazione di risposta a un bando; (c) numero massimo di bandi che si possono realisticamente analizzare e gestire in parallelo."
).forEach(b => children.push(b));
children.push(AnswerBox(4));

// ========================================
// 5. STIMA DEL VALORE ATTESO
// ========================================
children.push(H1("5.  Stima del valore atteso"));
children.push(IntroSez("Dati indicativi per la costruzione della proiezione economica del progetto. Sono sufficienti stime di massima."));

Q("5.1", "Margine operativo atteso sui lavori pubblici intercettati tramite bando.",
  "Percentuale indicativa sul valore della commessa, al netto dei costi diretti."
).forEach(b => children.push(b));

const mrg_w = [6000, 3638];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: mrg_w,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [HeaderCell("Tipologia di lavoro", mrg_w[0]), HeaderCell("Margine atteso (%)", mrg_w[1])],
    }),
    new TableRow({ children: [DataCell("Lavori standard (ponteggi, noleggi, opere provvisionali)", mrg_w[0]), DataCell("", mrg_w[1])] }),
    new TableRow({ children: [DataCell("Lavori complessi, pronti interventi, opere di pregio", mrg_w[0], { alt: true }), DataCell("", mrg_w[1], { alt: true })] }),
  ],
}));

Q("5.2", "Volume atteso di opportunità in un orizzonte di 12 mesi.",
  "Stime indicative, anche approssimative."
).forEach(b => children.push(b));

const vol_w = [7600, 2038];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: vol_w,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [HeaderCell("Stima", vol_w[0]), HeaderCell("Numero in 12 mesi", vol_w[1])],
    }),
    new TableRow({ children: [DataCell("Bandi realmente in target che lo strumento potrebbe intercettare", vol_w[0]), DataCell("", vol_w[1])] }),
    new TableRow({ children: [DataCell("Bandi ai quali si deciderebbe di partecipare", vol_w[0], { alt: true }), DataCell("", vol_w[1], { alt: true })] }),
    new TableRow({ children: [DataCell("Bandi che si ritiene realisticamente di poter vincere", vol_w[0]), DataCell("", vol_w[1])] }),
  ],
}));

Q("5.3", "Alternativa considerata e costo indicativo.",
  "Modalità alternativa che sarebbe stata valutata per presidiare il canale in assenza dello strumento (es. assunzione di una figura dedicata, incarico a consulente esterno, abbonamento a servizio di ricerca bandi) e relativo costo annuo indicativo."
).forEach(b => children.push(b));

const alt_w = [6000, 3638];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: alt_w,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [HeaderCell("Alternativa considerata", alt_w[0]), HeaderCell("Costo annuo indicativo (€)", alt_w[1])],
    }),
    new TableRow({ children: [DataCell("", alt_w[0]), DataCell("", alt_w[1])] }),
    new TableRow({ children: [DataCell("", alt_w[0], { alt: true }), DataCell("", alt_w[1], { alt: true })] }),
  ],
}));

// ========================================
// 6. PRIORITÀ MODULI ED ESPERIENZE
// ========================================
children.push(H1("6.  Priorità dei moduli ed esperienze pregresse"));
children.push(IntroSez("Elementi per la definizione della priorità di rilascio e dell'approccio commerciale."));

Q("6.1", "Priorità dei moduli della soluzione.",
  "Ordinare i blocchi funzionali illustrati in riunione assegnando un valore da 1 (priorità massima) a 4 (priorità minima). Qualora risultassero utili, segnalare in calce eventuali funzionalità aggiuntive desiderate o esplicitamente non di interesse."
).forEach(b => children.push(b));

const mod_w = [8000, 1638];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: mod_w,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [HeaderCell("Modulo", mod_w[0]), HeaderCell("Priorità (1-4)", mod_w[1])],
    }),
    new TableRow({ children: [DataCell("A. Raccolta e aggregazione automatica dei bandi da tutte le fonti", mod_w[0]), DataCell("", mod_w[1])] }),
    new TableRow({ children: [DataCell("B. Filtraggio intelligente e valutazione di compatibilità con il profilo aziendale", mod_w[0], { alt: true }), DataCell("", mod_w[1], { alt: true })] }),
    new TableRow({ children: [DataCell("C. Analisi automatica dei capitolati e interrogazione con memoria aziendale", mod_w[0]), DataCell("", mod_w[1])] }),
    new TableRow({ children: [DataCell("D. Generazione assistita della documentazione di risposta", mod_w[0], { alt: true }), DataCell("", mod_w[1], { alt: true })] }),
  ],
}));
children.push(AnswerBox(2));

Q("6.2", "Esperienze pregresse con fornitori di servizi analoghi.",
  "Indicare eventuali fornitori già ingaggiati in passato (es. Pronto Pro, altre agenzie o portali a pagamento), il servizio erogato, la durata della collaborazione e i motivi di eventuale interruzione."
).forEach(b => children.push(b));
children.push(AnswerBox(4));

// ========================================
// 7. NOTE LIBERE
// ========================================
children.push(H1("7.  Note libere"));
children.push(IntroSez("Osservazioni, esigenze o informazioni ulteriori non coperte dalle domande precedenti."));
children.push(AnswerBox(6));

// ---- HEADER (destra) ----
const pageHeader = new Header({
  children: [
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [t("HeyAI S.r.l.", { bold: true, color: GRAY_TXT, size: SIZE_SUBTITLE })],
    }),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [t("Sede legale: Via Parigi 11, 00185 Roma (RM)", { color: GRAY_TXT, size: SIZE_HINT })],
    }),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [t("info@heyaidigital.it  |  www.heyaidigital.it", { color: GRAY_TXT, size: SIZE_HINT })],
    }),
    new Paragraph({
      spacing: { before: 60, after: 0 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 1 } },
      children: [t("")],
    }),
  ],
});

// ---- DOCUMENT ----
const doc = new Document({
  creator: "HeyAI S.r.l.",
  title: "Questionario di Discovery — Achipoint",
  description: "Questionario di Discovery per il progetto di ricerca automatizzata di gare d'appalto",
  styles: {
    default: { document: { run: { font: BODY, size: SIZE_BODY } } },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1600, right: 1134, bottom: 1200, left: 1134 },
        },
      },
      headers: { default: pageHeader },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  const out = "/home/claude/HeyAI_Achipoint_Questionario_Discovery.docx";
  fs.writeFileSync(out, buf);
  console.log("OK ->", out);
});