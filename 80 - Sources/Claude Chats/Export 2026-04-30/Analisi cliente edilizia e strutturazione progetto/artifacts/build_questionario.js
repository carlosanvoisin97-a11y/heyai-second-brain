const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, PageOrientation, ShadingType, Table, TableRow,
  TableCell, WidthType
} = require('docx');

// ---- Helpers ----------------------------------------------------------
const P = (text, opts = {}) =>
  new Paragraph({
    spacing: { before: 80, after: 80, line: 300 },
    children: [new TextRun({ text, ...opts })],
    ...opts.paraOpts
  });

const H1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text })]
  });

const H2 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text })]
  });

const SectionIntro = (text) =>
  new Paragraph({
    spacing: { before: 60, after: 200, line: 300 },
    children: [new TextRun({ text, italics: true, color: "595959" })]
  });

// A numbered question with a sub-bullet hint and an answer line
const Question = (num, text, hint) => {
  const blocks = [
    new Paragraph({
      spacing: { before: 200, after: 60, line: 300 },
      children: [
        new TextRun({ text: `${num}. `, bold: true }),
        new TextRun({ text, bold: true })
      ]
    })
  ];
  if (hint) {
    blocks.push(
      new Paragraph({
        spacing: { before: 0, after: 60, line: 280 },
        indent: { left: 360 },
        children: [new TextRun({ text: hint, italics: true, color: "7F7F7F", size: 20 })]
      })
    );
  }
  // Answer placeholder: a thin horizontal line via paragraph border
  blocks.push(
    new Paragraph({
      spacing: { before: 60, after: 60 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "BFBFBF", space: 4 } },
      children: [new TextRun({ text: "" })]
    }),
    new Paragraph({
      spacing: { before: 0, after: 60 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "BFBFBF", space: 4 } },
      children: [new TextRun({ text: "" })]
    }),
    new Paragraph({
      spacing: { before: 0, after: 120 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "BFBFBF", space: 4 } },
      children: [new TextRun({ text: "" })]
    })
  );
  return blocks;
};

// ---- Document content -------------------------------------------------
const children = [];

// COVER / TITLE
children.push(
  new Paragraph({
    spacing: { before: 0, after: 120 },
    alignment: AlignmentType.LEFT,
    children: [new TextRun({ text: "HeyAI × Achipoint", bold: true, size: 22, color: "808080" })]
  }),
  new Paragraph({
    spacing: { before: 0, after: 240 },
    children: [
      new TextRun({
        text: "Questionario di analisi – Agente AI per la ricerca e gestione di gare d’appalto",
        bold: true,
        size: 36
      })
    ]
  }),
  new Paragraph({
    spacing: { before: 0, after: 360 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: "2E75B6", space: 4 } },
    children: [new TextRun({ text: "" })]
  })
);

// INTRO
children.push(
  new Paragraph({
    spacing: { before: 0, after: 120, line: 320 },
    children: [
      new TextRun({
        text:
          "Il presente documento raccoglie le informazioni necessarie a HeyAI per costruire una proposta tecnica ed economica calibrata sulla vostra realtà. È volutamente sintetico: 7 sezioni, circa 25 domande totali. Potete compilarlo in autonomia oppure utilizzarlo come traccia per una call di approfondimento di circa 45 minuti."
      })
    ]
  }),
  new Paragraph({
    spacing: { before: 0, after: 240, line: 320 },
    children: [
      new TextRun({
        text:
          "Non c’è bisogno di rispondere a tutto in modo esaustivo: dove non avete una risposta precisa, scrivete pure “non lo sappiamo” o “da verificare”. È un’informazione utile anche quella."
      })
    ]
  })
);

// ----------------- SECTION 1 -----------------
children.push(H1("1. Profilo aziendale e servizi"));
children.push(
  SectionIntro(
    "Ci serve mettere a fuoco chi siete oggi e dove vi state muovendo, così l’agente AI saprà distinguere ciò che fate stabilmente da ciò su cui state facendo nuove esplorazioni."
  )
);

[
  [
    "1.1",
    "Quali sono i servizi che oggi erogate in autonomia, con margini consolidati?",
    "Es. ponteggi, montacarichi, bicolonne. Indicate per ciascuno il fatturato indicativo annuo o l’incidenza %."
  ],
  [
    "1.2",
    "Quali sono i servizi su cui vi state espandendo o vorreste posizionarvi?",
    "Es. monoblocchi, manutenzioni, restauro non monumentale. Per noi è importante perché l’agente potrà cercare bandi anche in queste aree."
  ],
  [
    "1.3",
    "Esistono tipologie di lavoro che NON volete intercettare, anche se in tema?",
    "Es. lavori troppo piccoli, troppo lontani, in particolari settori. Ci aiuta a scrivere le regole di esclusione."
  ],
  [
    "1.4",
    "Qual è l’area geografica di copertura preferenziale e quella massima accettabile?",
    "Es. Roma e provincia preferenziale, intero Lazio accettabile, fuori regione solo per importi sopra X."
  ]
].forEach(([n, q, h]) => Question(n, q, h).forEach((b) => children.push(b)));

// ----------------- SECTION 2 -----------------
children.push(H1("2. Fonti dei bandi e degli albi"));
children.push(
  SectionIntro(
    "Questa è la base di partenza. Da qui dipende la fattibilità tecnica e quanto sarà contenuto l’investimento del primo modulo. Su quanto ci segnalerete faremo poi un’analisi nostra per verificare quali fonti sono accessibili in modo pulito (es. MEPA) e quali invece richiedono integrazioni più complesse."
  )
);

[
  [
    "2.1",
    "Elenco completo degli albi fornitori a cui Achipoint è oggi iscritta.",
    "Indicate nome dell’ente/azienda + URL del portale + se richiede login. Es. MEPA, Sovrintendenza, SOGIN, ADR, Senato, ecc."
  ],
  [
    "2.2",
    "Esistono altri albi fornitori a cui NON siete ancora iscritti ma che ritenete interessanti?",
    "Es. albi di grandi committenti privati (Poste, ENI, RFI, ecc.) o enti pubblici locali."
  ],
  [
    "2.3",
    "Conoscete portali aggregatori di bandi che già consultate o avete consultato in passato?",
    "Es. Pronto Pro o altri servizi simili. Anche le esperienze negative sono utili: ci dicono cosa NON deve fare il nostro strumento."
  ],
  [
    "2.4",
    "Per ciascun portale, chi gestisce oggi le credenziali di accesso?",
    "Una persona sola, più persone, con quale strumento le custodite. Serve per capire come integrarle in modo sicuro."
  ]
].forEach(([n, q, h]) => Question(n, q, h).forEach((b) => children.push(b)));

// ----------------- SECTION 3 -----------------
children.push(H1("3. Criteri di selezione delle opportunità"));
children.push(
  SectionIntro(
    "Queste sono le “regole” che insegneremo all’agente AI per filtrare le centinaia di bandi e proporvi solo quelli sensati. Non servono regole perfette: bastano alcune regole solide all’inizio, l’agente impara nel tempo."
  )
);

[
  [
    "3.1",
    "Qual è la soglia economica minima e massima dei bandi a cui volete partecipare oggi?",
    "Es. da €150K a €250K (limite attuale senza SOA). Indicate se prevedete a breve di superare questi limiti (es. acquisizione SOA)."
  ],
  [
    "3.2",
    "Quali sono i 3-5 criteri che, secondo la vostra esperienza, fanno capire al volo se un bando è “buono” per voi?",
    "Es. presenza della parola “ponteggi” nell’oggetto, durata massima, tipologia di committente, certificazioni richieste."
  ],
  [
    "3.3",
    "Potete farci 2-3 esempi reali di bandi che avete scartato di recente, spiegando perché?",
    "Anche brevemente. Servono come “casi d’uso” per allenare l’agente."
  ],
  [
    "3.4",
    "Ci sono certificazioni o requisiti formali che spesso vi tagliano fuori?",
    "Es. SOA, classifiche, fatturato minimo, anni di esperienza in categoria specifica."
  ],
  [
    "3.5",
    "L’architetto con cui collaborate sarebbe disponibile a una sessione di 1-2 ore per validare insieme questi criteri?",
    "Non è obbligatorio: serve solo a rendere le regole più solide. Indicate sì/no/eventualmente, e i suoi recapiti se sì."
  ]
].forEach(([n, q, h]) => Question(n, q, h).forEach((b) => children.push(b)));

// ----------------- SECTION 4 -----------------
children.push(H1("4. Processo di risposta al bando"));
children.push(
  SectionIntro(
    "Capiamo come oggi rispondete a un bando, per stimare se e come l’agente AI può aiutarvi anche nella fase di preparazione della documentazione. Questo è un modulo opzionale che potrà essere attivato in un secondo tempo."
  )
);

[
  [
    "4.1",
    "Quando un bando è interessante, quali documenti dovete tipicamente preparare per partecipare?",
    "Es. anagrafica azienda, dichiarazioni, offerta tecnica, offerta economica, computi metrici."
  ],
  [
    "4.2",
    "Avete già modelli, template o documenti standard riutilizzabili?",
    "Anche solo cartelle con vecchie partecipazioni vanno bene: l’agente può imparare dai vostri stessi documenti."
  ],
  [
    "4.3",
    "I bandi richiedono compilazione su moduli online dei portali, oppure invio di file (PDF, Word) tramite mail/portale?",
    "Spesso entrambi: dateci un’idea della proporzione."
  ]
].forEach(([n, q, h]) => Question(n, q, h).forEach((b) => children.push(b)));

// ----------------- SECTION 5 -----------------
children.push(H1("5. Stato attuale e volumi (input per il calcolo del ROI)"));
children.push(
  SectionIntro(
    "Queste informazioni ci servono per costruire una proiezione realistica del ritorno sull’investimento, da inserire nella proposta. Anche stime grossolane vanno benissimo."
  )
);

[
  [
    "5.1",
    "Quante ore al mese spendete oggi a cercare/valutare bandi pubblici e albi?",
    "Anche se è “quasi zero”, indicatelo. È un dato utile."
  ],
  [
    "5.2",
    "Negli ultimi 12 mesi, quanti bandi pubblici avete intercettato? A quanti avete partecipato? Quanti vinti?",
    "Anche numeri approssimativi. Es. “visti 10, partecipato 2, vinto 0”."
  ],
  [
    "5.3",
    "Qual è il margine medio percentuale che vi aspettate, all’inizio, su un appalto pubblico vinto?",
    "Nella nostra chiacchierata avete parlato di un range 10-20%. Confermate o vi siete fatti un’idea più precisa?"
  ],
  [
    "5.4",
    "C’è un volume realistico di bandi che pensate di poter intercettare in più nel primo anno?",
    "Anche solo un’ipotesi. Es. “se ne arrivano 50 in target, partecipiamo a 10, ne vinciamo 2”."
  ]
].forEach(([n, q, h]) => Question(n, q, h).forEach((b) => children.push(b)));

// ----------------- SECTION 6 -----------------
children.push(H1("6. Vincoli tecnici e operativi"));
children.push(
  SectionIntro(
    "Domande operative per progettare bene lo strumento: dove lo userete, chi lo gestirà, come riceverete le notifiche."
  )
);

[
  [
    "6.1",
    "Chi userà lo strumento all’interno dell’azienda? Quante persone, con quali ruoli?",
    "Es. solo Luigi, solo amministrazione, entrambi, con in più l’architetto."
  ],
  [
    "6.2",
    "Come preferite ricevere le segnalazioni di nuove opportunità?",
    "Es. email giornaliera/settimanale, notifica WhatsApp, accesso diretto a una dashboard web."
  ],
  [
    "6.3",
    "Avete uno strumento aziendale di posta/calendario/file (es. Gmail, Outlook, Google Drive, OneDrive) che vorreste integrare?",
    "Se sì, indicateci quale. Se non lo sapete, scrivete “da verificare”."
  ],
  [
    "6.4",
    "Esistono partner/collaboratori/imprese amiche a cui inoltrate opportunità che non potete gestire direttamente?",
    "Se sì, lo strumento può tenerne traccia e suggerirvi a chi inoltrare cosa. Indicateci quanti sono e per quali tipologie."
  ]
].forEach(([n, q, h]) => Question(n, q, h).forEach((b) => children.push(b)));

// ----------------- SECTION 7 -----------------
children.push(H1("7. Tempistiche, decisori e dimensionamento economico"));
children.push(
  SectionIntro(
    "Ultimo blocco di domande, utili per calibrare la proposta sul vostro contesto. Non c’è obbligo di indicare un budget preciso: bastano range o riferimenti."
  )
);

[
  [
    "7.1",
    "Entro quando vi piacerebbe avere il primo modulo operativo?",
    "Es. entro 2 mesi, entro fine anno, nessuna fretta."
  ],
  [
    "7.2",
    "Chi prende la decisione finale sull’avvio del progetto?",
    "Una sola persona o più persone. Se ci sono più decisori, ci aiuta sapere chi sono per coinvolgerli al momento giusto."
  ],
  [
    "7.3",
    "Avete un range di investimento che considerate accettabile per la prima fase?",
    "Anche solo un riferimento mentale: es. “sotto i 10K va bene”, “fino a 20K se il ROI è chiaro”, “non abbiamo idea, fateci una proposta”. Tutte risposte legittime."
  ],
  [
    "7.4",
    "Preferite un investimento iniziale unico o un modello a canone mensile/annuale?",
    "Anche “non lo sappiamo, dipende dalla cifra” è una risposta valida."
  ]
].forEach(([n, q, h]) => Question(n, q, h).forEach((b) => children.push(b)));

// ----------------- CHIUSURA -----------------
children.push(
  new Paragraph({
    spacing: { before: 480, after: 120 },
    border: { top: { style: BorderStyle.SINGLE, size: 8, color: "2E75B6", space: 8 } },
    children: [new TextRun({ text: "" })]
  })
);

children.push(
  new Paragraph({
    spacing: { before: 60, after: 120, line: 320 },
    children: [
      new TextRun({ text: "Note libere", bold: true, size: 26 })
    ]
  }),
  new Paragraph({
    spacing: { before: 0, after: 120, line: 320 },
    children: [
      new TextRun({
        text:
          "Spazio libero per qualsiasi informazione, dubbio, esperienza passata o aspettativa che ritenete utile condividere e che non è coperto dalle domande sopra.",
        italics: true,
        color: "595959"
      })
    ]
  })
);

// 4 righe vuote per note libere
for (let i = 0; i < 4; i++) {
  children.push(
    new Paragraph({
      spacing: { before: 80, after: 80 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "BFBFBF", space: 4 } },
      children: [new TextRun({ text: "" })]
    })
  );
}

children.push(
  new Paragraph({
    spacing: { before: 360, after: 60 },
    children: [
      new TextRun({
        text: "Grazie per il tempo dedicato. A ricezione delle vostre risposte ci impegniamo a tornare con la proposta entro 5 giorni lavorativi.",
        italics: true
      })
    ]
  }),
  new Paragraph({
    spacing: { before: 60, after: 0 },
    children: [
      new TextRun({ text: "HeyAI – Carlo Sanvoisin", bold: true, color: "2E75B6" })
    ]
  })
);

// ---- Document setup ---------------------------------------------------
const doc = new Document({
  creator: "HeyAI",
  title: "Questionario di analisi – Achipoint",
  description: "Questionario per la fase di analisi del progetto AI gare d'appalto",
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 30, bold: true, font: "Calibri", color: "2E75B6" },
        paragraph: { spacing: { before: 400, after: 160 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, font: "Calibri", color: "404040" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } // 2 cm
        }
      },
      children
    }
  ]
});

Packer.toBuffer(doc).then((buffer) => {
  const out = '/home/claude/Questionario_HeyAI_Achipoint.docx';
  fs.writeFileSync(out, buffer);
  console.log('OK ->', out);
});