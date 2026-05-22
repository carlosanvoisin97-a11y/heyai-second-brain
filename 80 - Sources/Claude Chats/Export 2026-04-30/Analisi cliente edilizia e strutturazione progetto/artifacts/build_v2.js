const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, PageOrientation, ShadingType, Table, TableRow,
  TableCell, WidthType, Header, Footer, PageNumber
} = require('docx');

// ---- BRAND ----
const TEAL = "074F6A";
const NAVY = "1F3864";
const GRAY = "595959";
const LIGHTGRAY = "7F7F7F";
const TABLE_HEADER_BG = "074F6A";
const ROW_ALT_BG = "F0F5F6";
const BODY_FONT = "Aptos";
const TITLE_FONT = "Calibri";

// ---- Helpers ----
const border = { style: BorderStyle.SINGLE, size: 4, color: "BFBFBF" };
const cellBorders = { top: border, bottom: border, left: border, right: border };

const txt = (text, opts = {}) => new TextRun({ text, font: BODY_FONT, ...opts });

const P = (text, opts = {}) =>
  new Paragraph({
    spacing: { before: 60, after: 60, line: 300 },
    children: [txt(text, opts)],
  });

const PIntro = (text) =>
  new Paragraph({
    spacing: { before: 40, after: 160, line: 290 },
    children: [txt(text, { italics: true, color: GRAY, size: 20 })],
  });

const H1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text, font: TITLE_FONT })],
  });

const H2 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text, font: TITLE_FONT })],
  });

const Q = (num, text, hint) => {
  const blocks = [
    new Paragraph({
      spacing: { before: 240, after: 60, line: 290 },
      children: [
        new TextRun({ text: `${num}  `, bold: true, color: TEAL, font: BODY_FONT }),
        new TextRun({ text, bold: true, font: BODY_FONT }),
      ],
    }),
  ];
  if (hint) {
    blocks.push(
      new Paragraph({
        spacing: { before: 0, after: 100, line: 280 },
        children: [txt(hint, { italics: true, color: LIGHTGRAY, size: 20 })],
      })
    );
  }
  return blocks;
};

// A simple answer box: single-cell table with light border
const AnswerBox = (rows = 3) => {
  const trs = [];
  for (let i = 0; i < rows; i++) {
    trs.push(
      new TableRow({
        children: [
          new TableCell({
            borders: cellBorders,
            width: { size: 9638, type: WidthType.DXA },
            margins: { top: 120, bottom: 120, left: 160, right: 160 },
            children: [new Paragraph({ children: [txt("")] })],
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

// Headered table helper
const THeaderCell = (text, width) =>
  new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: TABLE_HEADER_BG, type: ShadingType.CLEAR, color: "auto" },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [
      new Paragraph({
        spacing: { before: 0, after: 0 },
        children: [
          new TextRun({ text, bold: true, color: "FFFFFF", font: BODY_FONT, size: 20 }),
        ],
      }),
    ],
  });

const TCell = (text, width, opts = {}) =>
  new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    shading: opts.alt ? { fill: ROW_ALT_BG, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [new Paragraph({ children: [txt(text || "", opts.bold ? { bold: true } : {})] })],
  });

// Checkbox row
const CB = (text) =>
  new Paragraph({
    spacing: { before: 40, after: 40 },
    children: [
      new TextRun({ text: "☐  ", font: BODY_FONT }),
      txt(text),
    ],
  });

// ---------------- CONTENT ----------------
const children = [];

// TITLE BLOCK
children.push(
  new Paragraph({
    spacing: { before: 240, after: 80 },
    children: [
      new TextRun({ text: "Questionario di Discovery", font: TITLE_FONT, size: 40, bold: true, color: TEAL }),
    ],
  }),
  new Paragraph({
    spacing: { before: 0, after: 80 },
    children: [
      new TextRun({
        text: "Progetto di market intelligence sui bandi pubblici — Achipoint × HeyAI",
        font: TITLE_FONT,
        size: 24,
        color: NAVY,
      }),
    ],
  }),
  new Paragraph({
    spacing: { before: 0, after: 320 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: TEAL, space: 4 } },
    children: [
      new TextRun({ text: "Aprile 2026", font: TITLE_FONT, size: 20, italics: true, color: GRAY }),
    ],
  })
);

// INTRO BOX
children.push(
  new Paragraph({
    spacing: { before: 0, after: 120, line: 300 },
    children: [
      txt(
        "Il presente questionario raccoglie le informazioni necessarie per costruire la proposta tecnico-economica del progetto discusso nella call. Le risposte serviranno per dimensionare correttamente lo scope, identificare le fonti dati rilevanti e proporre una soluzione modulare calibrata sulla vostra realtà."
      ),
    ],
  }),
  new Paragraph({
    spacing: { before: 0, after: 360, line: 300 },
    children: [
      txt(
        "Il documento è compilabile direttamente in Word, salvato e rispedito via email. Dove una domanda non si applica, è sufficiente scrivere “non applicabile”. Prima riceviamo le risposte, prima possiamo restituirvi una proposta puntuale."
      ),
    ],
  })
);

// ========================
// 1. PROFILO AZIENDALE
// ========================
children.push(H1("1. Profilo aziendale e servizi"));
children.push(
  PIntro(
    "Più lo strumento capisce cosa è “per voi” e cosa no, meno tempo sprecate a leggere bandi irrilevanti."
  )
);

Q("1.1", "Descrivete in 3-5 righe Achipoint oggi.",
  "Numero di dipendenti, fatturato indicativo annuo, anni di attività, strutture operative principali.").forEach(b => children.push(b));
children.push(AnswerBox(4));

// Q1.2 - Tabella categorie di lavoro
Q("1.2", "Categorie di lavoro — mappa di interesse.",
  "Compilate la tabella distinguendo cosa fate come attività core, cosa state espandendo, cosa trattate in modo opportunistico e cosa volete esplicitamente escludere.").forEach(b => children.push(b));

const cat_widths = [2800, 6838];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: cat_widths,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        THeaderCell("Livello di interesse", cat_widths[0]),
        THeaderCell("Tipologie di lavoro / servizio", cat_widths[1]),
      ],
    }),
    new TableRow({ children: [TCell("CORE — lo fate da sempre, al 100%", cat_widths[0], { bold: true }), TCell("", cat_widths[1])] }),
    new TableRow({ children: [TCell("IN ESPANSIONE — lo state iniziando a proporre", cat_widths[0], { bold: true, alt: true }), TCell("", cat_widths[1], { alt: true })] }),
    new TableRow({ children: [TCell("OPPORTUNISTICO — lo fate se capita, non è priorità", cat_widths[0], { bold: true }), TCell("", cat_widths[1])] }),
    new TableRow({ children: [TCell("DA ESCLUDERE — non vi interessa, mai proporre", cat_widths[0], { bold: true, alt: true }), TCell("", cat_widths[1], { alt: true })] }),
  ],
}));

Q("1.3", "Quali parole chiave ricorrono nei titoli dei bandi a cui vorreste partecipare?",
  "Es. “ponteggi”, “opere provvisionali”, “manutenzione edile”, “noleggio montacarichi”.").forEach(b => children.push(b));
children.push(AnswerBox(3));

Q("1.4", "Al contrario, quali parole chiave sono un segnale che il bando NON fa per voi?",
  "Es. tipologie di opere che non trattate, materiali fuori specializzazione, servizi non erogati.").forEach(b => children.push(b));
children.push(AnswerBox(3));

// ========================
// 2. QUALIFICAZIONI E DOTAZIONE
// ========================
children.push(H1("2. Qualificazioni e dotazione"));
children.push(
  PIntro(
    "Queste informazioni servono a costruire i filtri di ammissibilità automatici: se un bando richiede una qualifica che non avete, lo strumento lo esclude a monte."
  )
);

Q("2.1", "Attestazione SOA e categorie.",
  "Indicate lo stato attuale. Se presente, specificate categorie e classi.").forEach(b => children.push(b));
children.push(CB("Sì — SOA attiva. Categorie e classi:"));
children.push(CB("No, operiamo sotto soglia (≤ €150K)"));
children.push(CB("In corso di acquisizione o rinnovo"));
children.push(AnswerBox(2));

Q("2.2", "Certificazioni, abilitazioni e dotazione tecnica.",
  "Un elenco sintetico di tutto ciò che potrebbe essere discriminante per partecipare a un bando: certificazioni (ISO 9001/14001/45001/SA8000), iscrizioni speciali (Albo Gestori Ambientali, White List, rating di legalità), dotazione amministrativa (PEC, SPID aziendale, firma digitale dell'amministratore).").forEach(b => children.push(b));
children.push(AnswerBox(5));

// ========================
// 3. AREA GEOGRAFICA
// ========================
children.push(H1("3. Area geografica operativa"));
children.push(
  PIntro(
    "Operate su tutto il territorio nazionale, ma la trasferta ha un costo. Vogliamo capire dove ha davvero senso cercare bandi per voi."
  )
);

Q("3.1", "In quali regioni o province avete già operato negli ultimi 3-5 anni?", null)
  .forEach(b => children.push(b));
children.push(AnswerBox(3));

Q("3.2", "In quali aree siete più efficienti per logistica, contatti, costi?", null)
  .forEach(b => children.push(b));
children.push(AnswerBox(2));

Q("3.3", "Ci sono aree che escludereste a priori anche per bandi interessanti?",
  "Es. isole, aree troppo distanti per trasferta, zone con esperienze negative.").forEach(b => children.push(b));
children.push(AnswerBox(2));

// ========================
// 4. FONTI BANDI E ALBI
// ========================
children.push(H1("4. Fonti di bandi e albi"));
children.push(
  PIntro(
    "Questa è probabilmente la sezione più importante per dimensionare la parte tecnica. Vogliamo avere la mappa completa di dove oggi guardate (anche se in modo discontinuo) e di dove pensate ci sia opportunità da esplorare."
  )
);

Q("4.1", "Mappa delle fonti oggi presidiate.",
  "Compilate una riga per ogni portale/albo a cui siete iscritti o che consultate. La qualità delle segnalazioni è una vostra valutazione soggettiva (alta = arrivano segnalazioni in target, bassa = rumore).")
  .forEach(b => children.push(b));

const src_widths = [3200, 1200, 1400, 1800, 2038];
const emptySrcRow = (alt) => new TableRow({
  children: [
    TCell("", src_widths[0], { alt }),
    TCell("", src_widths[1], { alt }),
    TCell("", src_widths[2], { alt }),
    TCell("", src_widths[3], { alt }),
    TCell("", src_widths[4], { alt }),
  ],
});
const srcRows = [
  new TableRow({
    tableHeader: true,
    children: [
      THeaderCell("Nome piattaforma / albo", src_widths[0]),
      THeaderCell("Iscritti?", src_widths[1]),
      THeaderCell("Dal (anno)", src_widths[2]),
      THeaderCell("Notifiche / mese", src_widths[3]),
      THeaderCell("Qualità segnalazioni", src_widths[4]),
    ],
  }),
];
for (let i = 0; i < 10; i++) srcRows.push(emptySrcRow(i % 2 === 0));
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: src_widths,
  rows: srcRows,
}));

Q("4.2", "Quali fonti NON state presidiando ma pensate dovreste guardare?",
  "Elencate enti, stazioni appaltanti, categorie di clienti pubblici dove ritenete ci siano opportunità per voi ma non avete ancora iscrizione o monitoraggio attivo.")
  .forEach(b => children.push(b));
children.push(AnswerBox(4));

// ========================
// 5. ALTRI CANALI STRUTTURATI
// ========================
children.push(H1("5. Altri canali di opportunità strutturati"));
children.push(
  PIntro(
    "Oltre ai bandi pubblici e agli albi fornitori di enti pubblici, esistono canali strutturati (albi di grandi committenti privati, segnalazioni periodiche di associazioni e consulenti) che uno strumento di scouting può processare. Chi arriva per passaparola o rete personale resta fuori dal perimetro: non è automatizzabile ed è giusto che rimanga un canale vostro diretto."
  )
);

Q("5.1", "Albi fornitori di grandi committenti privati: quali conoscete, quali monitorate, quali sarebbe utile presidiare?",
  "Es. ADR (Aeroporti di Roma), Poste Italiane, ENI, RFI, Ferrovie dello Stato, Anas, gestori autostradali, società di facility management (Engie, Rekeep, Dussmann), grandi ospedali e poli sanitari privati, gestori di grandi centri commerciali. Indicate se siete iscritti o se vorreste valutarlo.")
  .forEach(b => children.push(b));
children.push(AnswerBox(4));

Q("5.2", "Ricevete segnalazioni di opportunità tramite canali strutturati (newsletter, bollettini, associazioni di categoria, studi di consulenza)?",
  "Es. associazioni di categoria a cui siete iscritti, newsletter di studi tecnici, bollettini sovrintendenze. Lo strumento può integrare anche questi flussi se sono strutturati.")
  .forEach(b => children.push(b));
children.push(AnswerBox(3));

// ========================
// 6. CRITERI DI SELEZIONE E FILTRI
// ========================
children.push(H1("6. Criteri di selezione e filtri"));
children.push(
  PIntro(
    "Queste sono le regole che insegneremo allo strumento per filtrare i bandi e proporvi solo quelli sensati. Non servono regole perfette dall'inizio: l'agente impara nel tempo."
  )
);

Q("6.1", "Soglie economiche dei bandi di interesse.", null).forEach(b => children.push(b));

const thr_widths = [6000, 3638];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: thr_widths,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        THeaderCell("Parametro", thr_widths[0]),
        THeaderCell("Valore (€)", thr_widths[1]),
      ],
    }),
    new TableRow({ children: [TCell("Importo minimo sotto il quale non ha senso partecipare", thr_widths[0]), TCell("", thr_widths[1])] }),
    new TableRow({ children: [TCell("Importo tipico “sweet spot” (dove siete più competitivi)", thr_widths[0], { alt: true }), TCell("", thr_widths[1], { alt: true })] }),
    new TableRow({ children: [TCell("Importo massimo sostenibile oggi in autonomia", thr_widths[0]), TCell("", thr_widths[1])] }),
    new TableRow({ children: [TCell("Importo massimo sostenibile con partner / ATI", thr_widths[0], { alt: true }), TCell("", thr_widths[1], { alt: true })] }),
  ],
}));

Q("6.2", "Tipologia di ente erogatore: dove concentrare lo scouting?",
  "Segnate tutte quelle di interesse. Lo strumento può dare un peso diverso a ciascuna categoria.")
  .forEach(b => children.push(b));
children.push(CB("PA centrale (Ministeri, Senato, Camera, enti nazionali)"));
children.push(CB("PA locale (Regioni, Province, Comuni)"));
children.push(CB("Enti partecipati pubblici (Sovrintendenze, SOGIN, ADR, ANAS, RFI...)"));
children.push(CB("Grandi committenti privati con albo fornitori strutturato"));
children.push(CB("Altro — specificate:"));
children.push(AnswerBox(1));

Q("6.3", "Fateci 2-3 esempi reali di bandi scartati negli ultimi mesi, con il motivo.",
  "Anche in forma sintetica. Servono come “casi d'uso” per allenare l'agente ed evitare che proponga bandi simili.")
  .forEach(b => children.push(b));
children.push(AnswerBox(5));

// ========================
// 7. PROCESSO ATTUALE E CAPACITÀ
// ========================
children.push(H1("7. Processo attuale e capacità operativa"));
children.push(
  PIntro(
    "Capire come lavorate oggi ci permette di identificare con precisione quali passaggi automatizzare e di dimensionare correttamente volumi e tempistiche dello strumento."
  )
);

Q("7.1", "Quanto tempo/persona dedicate oggi allo scouting e analisi dei bandi?",
  "Anche solo una stima, in ore a settimana. Se oggi è vicino a zero, indicate quante ore sarebbe sostenibile dedicare una volta che le opportunità iniziano ad arrivare.")
  .forEach(b => children.push(b));
children.push(AnswerBox(2));

Q("7.2", "Quando arriva un bando potenzialmente interessante, qual è il flusso attuale?",
  "Descrivete sinteticamente: chi lo legge, chi decide se partecipare, chi prepara i documenti, chi firma, chi invia.")
  .forEach(b => children.push(b));
children.push(AnswerBox(4));

Q("7.3", "Quanto tempo vi serve mediamente per preparare la documentazione di risposta a un bando?",
  "Distinguete se possibile tra bando semplice (autodichiarazioni + anagrafica) e bando complesso (con relazione tecnica, referenze, offerta dettagliata).")
  .forEach(b => children.push(b));
children.push(AnswerBox(3));

Q("7.4", "Volumi sostenibili: quante opportunità al mese potreste realisticamente analizzare e quante gare gestire in parallelo?",
  "Serve a tarare le notifiche: se lo strumento trova 40 opportunità ma voi ne potete gestire 3, dobbiamo lavorare sulla priorità.")
  .forEach(b => children.push(b));
children.push(AnswerBox(3));

// ========================
// 8. ESPERIENZE E PRIORITÀ MODULI
// ========================
children.push(H1("8. Esperienze pregresse e priorità sui moduli"));
children.push(
  PIntro(
    "Ultimi input per la proposta: cosa non ha funzionato in passato e in che ordine vi aspettate di attivare i blocchi della soluzione."
  )
);

Q("8.1", "Esperienze pregresse con fornitori di scouting (es. Pronto Pro, agenzie bandi, portali a pagamento).",
  "Nome, servizio fornito, durata, motivi di chiusura o delusione. Anche una frase va benissimo: ci aiuta a non ripetere gli stessi errori.")
  .forEach(b => children.push(b));
children.push(AnswerBox(4));

Q("8.2", "Priorità dei moduli della soluzione.",
  "Ordinate per priorità i 4 blocchi funzionali discussi in call (1 = massima priorità, 4 = ultima). Questo ci aiuta a costruire la proposta modulare mettendo al primo rilascio i moduli che vi servono di più.")
  .forEach(b => children.push(b));

const mod_widths = [8000, 1638];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: mod_widths,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        THeaderCell("Blocco funzionale", mod_widths[0]),
        THeaderCell("Priorità (1-4)", mod_widths[1]),
      ],
    }),
    new TableRow({ children: [TCell("A) Raccolta e aggregazione automatica dei bandi da tutte le fonti", mod_widths[0]), TCell("", mod_widths[1])] }),
    new TableRow({ children: [TCell("B) Filtraggio intelligente e scoring di compatibilità con il profilo Achipoint", mod_widths[0], { alt: true }), TCell("", mod_widths[1], { alt: true })] }),
    new TableRow({ children: [TCell("C) Analisi automatica dei capitolati (estrazione requisiti, stima convenienza, chat con la memoria aziendale)", mod_widths[0]), TCell("", mod_widths[1])] }),
    new TableRow({ children: [TCell("D) Generazione assistita della documentazione di risposta", mod_widths[0], { alt: true }), TCell("", mod_widths[1], { alt: true })] }),
  ],
}));

// ========================
// 9. NOTE LIBERE
// ========================
children.push(H1("9. Note libere"));
children.push(
  PIntro(
    "Qualsiasi informazione, dubbio, esperienza o aspettativa utile a costruire una proposta adeguata e non coperta dalle domande precedenti."
  )
);
children.push(AnswerBox(6));

// CLOSING
children.push(
  new Paragraph({
    spacing: { before: 480, after: 120 },
    border: { top: { style: BorderStyle.SINGLE, size: 8, color: TEAL, space: 8 } },
    children: [txt("")],
  }),
  new Paragraph({
    spacing: { before: 60, after: 0, line: 300 },
    children: [
      txt("Grazie per il tempo dedicato. Alla ricezione delle risposte torneremo con la proposta tecnico-economica entro 5 giorni lavorativi.",
        { italics: true }),
    ],
  })
);

// ---------------- HEADER ----------------
const pageHeader = new Header({
  children: [
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [new TextRun({ text: "HeyAI S.r.l.", font: BODY_FONT, size: 18, bold: true, color: GRAY })],
    }),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [new TextRun({ text: "Sede legale: Via Parigi 11, 00185 Roma (RM)", font: BODY_FONT, size: 16, color: GRAY })],
    }),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [new TextRun({ text: "info@heyaidigital.it  |  www.heyaidigital.it", font: BODY_FONT, size: 16, color: GRAY })],
    }),
    new Paragraph({
      spacing: { before: 60, after: 0 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 1 } },
      children: [txt("")],
    }),
  ],
});

// ---------------- FOOTER ----------------
const pageFooter = new Footer({
  children: [
    new Paragraph({
      spacing: { before: 0, after: 0 },
      border: { top: { style: BorderStyle.SINGLE, size: 4, color: TEAL, space: 4 } },
      children: [txt("")],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 0 },
      children: [
        new TextRun({
          text: "PEC: heyai@pec.it  |  REA RM – 1751505  |  Cod. Fiscale: 17947791004  |  Amministratore Unico: Ing. Bruno Mattucci",
          font: BODY_FONT, size: 16, color: GRAY,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 40, after: 0 },
      children: [
        new TextRun({ text: "Documento riservato – destinato esclusivamente al destinatario indicato.", font: BODY_FONT, size: 14, italics: true, color: LIGHTGRAY }),
      ],
    }),
  ],
});

// ---------------- DOCUMENT ----------------
const doc = new Document({
  creator: "HeyAI",
  title: "Questionario di Discovery – Achipoint × HeyAI",
  description: "Questionario di discovery per il progetto di market intelligence sui bandi pubblici",
  styles: {
    default: { document: { run: { font: BODY_FONT, size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: TITLE_FONT, color: TEAL },
        paragraph: { spacing: { before: 480, after: 160 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: TITLE_FONT, color: NAVY },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1700, right: 1200, bottom: 1400, left: 1200 },
        },
      },
      headers: { default: pageHeader },
      footers: { default: pageFooter },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  const out = "/home/claude/HeyAI_Achipoint_Questionario_Discovery.docx";
  fs.writeFileSync(out, buf);
  console.log("OK ->", out);
});