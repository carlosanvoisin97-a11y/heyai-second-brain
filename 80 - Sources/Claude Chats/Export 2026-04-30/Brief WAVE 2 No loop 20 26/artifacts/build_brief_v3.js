const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, LevelFormat, PageBreak
} = require('docx');

const C = {
  primary: "1F3A5F",
  accent:  "2E75B6",
  light:   "E8F1F8",
  alt:     "F5F8FB",
  gray:    "595959",
  body:    "1F1F1F",
  border:  "BFBFBF",
  noteBg:  "FFF8E5",
  noteBd:  "C9A227"
};

function t(text, opts = {}) {
  return new TextRun({
    text,
    bold: opts.bold || false,
    italics: opts.italics || false,
    color: opts.color || C.body,
    size: opts.size || 22,
    font: "Calibri"
  });
}
function p(text, opts = {}) {
  const runs = Array.isArray(text) ? text : [t(text, opts)];
  return new Paragraph({
    children: runs,
    alignment: opts.alignment || AlignmentType.LEFT,
    spacing: { before: opts.before || 0, after: opts.after !== undefined ? opts.after : 120 },
    ...(opts.heading ? { heading: opts.heading } : {})
  });
}
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text, bold: true, size: 30, color: C.primary, font: "Calibri" })],
    spacing: { before: 320, after: 160 },
    border: { bottom: { color: C.accent, size: 8, style: BorderStyle.SINGLE, space: 4 } }
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text, bold: true, size: 24, color: C.primary, font: "Calibri" })],
    spacing: { before: 220, after: 100 }
  });
}
function bullet(runs) {
  const r = Array.isArray(runs) ? runs : [t(runs)];
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: r,
    spacing: { after: 80 }
  });
}
function spacer(size = 120) {
  return new Paragraph({ children: [new TextRun("")], spacing: { after: size } });
}

const border = { style: BorderStyle.SINGLE, size: 4, color: C.border };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargin = { top: 100, bottom: 100, left: 140, right: 140 };

function hCell(text, width, opts = {}) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: C.primary, type: ShadingType.CLEAR },
    margins: cellMargin, verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      children: [new TextRun({ text, bold: true, size: 20, color: "FFFFFF", font: "Calibri" })],
      alignment: opts.alignment || AlignmentType.LEFT,
      spacing: { after: 0 }
    })]
  });
}
function dCell(text, width, opts = {}) {
  const runs = Array.isArray(text) ? text :
    [new TextRun({
      text,
      bold: opts.bold || false,
      size: opts.size || 20,
      color: opts.color || C.body,
      font: "Calibri"
    })];
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: opts.fill || "FFFFFF", type: ShadingType.CLEAR },
    margins: cellMargin, verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({
      children: runs,
      alignment: opts.alignment || AlignmentType.LEFT,
      spacing: { after: 0 }
    })]
  });
}

function noteBox(title, body) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [new TableRow({ children: [new TableCell({
      borders: {
        top: { style: BorderStyle.SINGLE, size: 8, color: C.noteBd },
        bottom: { style: BorderStyle.SINGLE, size: 8, color: C.noteBd },
        left: { style: BorderStyle.SINGLE, size: 24, color: C.noteBd },
        right: { style: BorderStyle.SINGLE, size: 8, color: C.noteBd }
      },
      width: { size: 9360, type: WidthType.DXA },
      shading: { fill: C.noteBg, type: ShadingType.CLEAR },
      margins: { top: 200, bottom: 200, left: 240, right: 240 },
      children: [
        new Paragraph({
          children: [new TextRun({ text: title, bold: true, size: 22, color: C.primary, font: "Calibri" })],
          spacing: { after: 120 }
        }),
        ...body.map(line => new Paragraph({
          children: [new TextRun({ text: line, size: 22, font: "Calibri" })],
          spacing: { after: 80 }
        }))
      ]
    })]})]
  });
}

const TW = 9360;
const children = [];

// ============================================================
// COPERTINA
// ============================================================
children.push(new Paragraph({
  children: [new TextRun({ text: "BRIEF PER STESURA CONTRATTO", bold: true, size: 36, color: C.primary, font: "Calibri" })],
  alignment: AlignmentType.CENTER,
  spacing: { before: 1600, after: 200 }
}));
children.push(new Paragraph({
  children: [new TextRun({ text: "Noloop S.r.l. × HeyAI S.r.l.", bold: true, size: 30, color: C.body, font: "Calibri" })],
  alignment: AlignmentType.CENTER,
  spacing: { after: 100 }
}));
children.push(new Paragraph({
  children: [new TextRun({ text: "Ecosistema AI — Wave 2", size: 26, color: C.accent, font: "Calibri" })],
  alignment: AlignmentType.CENTER,
  spacing: { after: 600 }
}));
children.push(new Paragraph({
  children: [new TextRun({ text: "Versione 3.0", italics: true, size: 22, color: C.gray, font: "Calibri" })],
  alignment: AlignmentType.CENTER,
  spacing: { after: 600 }
}));

const headW = [3120, 6240];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: headW,
  rows: [
    new TableRow({ children: [
      dCell("Destinatario", headW[0], { bold: true, fill: C.alt }),
      dCell("Studio legale incaricato della stesura del contratto", headW[1])
    ]}),
    new TableRow({ children: [
      dCell("Predisposto da", headW[0], { bold: true, fill: C.alt }),
      dCell("HeyAI S.r.l. — Carlo Sanvoisin", headW[1])
    ]}),
    new TableRow({ children: [
      dCell("Data", headW[0], { bold: true, fill: C.alt }),
      dCell("Aprile 2026", headW[1])
    ]}),
    new TableRow({ children: [
      dCell("Riferimento", headW[0], { bold: true, fill: C.alt }),
      dCell("HeyAI/NL/W2/2026", headW[1])
    ]}),
    new TableRow({ children: [
      dCell("Classificazione", headW[0], { bold: true, fill: C.alt }),
      dCell("Riservato", headW[1])
    ]}),
  ]
}));

children.push(spacer(400));
children.push(p("Il presente documento ha l'unica finalità di fornire al legale incaricato gli elementi sostanziali del rapporto contrattuale tra Noloop S.r.l. e HeyAI S.r.l. per la fornitura dell'ecosistema software denominato \"Wave 2\". Sono volutamente escluse informazioni di carattere commerciale, tecnico-architetturale di dettaglio o relative al business case del cliente, in quanto non rilevanti ai fini contrattuali.", { italics: true, color: C.gray, size: 20 }));

children.push(p("Il rapporto si pone in continuità con il contratto già in essere tra le Parti relativo alla \"Wave 1\" (sottoscritto a marzo 2026), che è disponibile a fini di consultazione e continuità terminologica. Il presente brief illustra in modo autonomo gli elementi sostanziali del nuovo contratto, lasciando al legale piena libertà di proporre la struttura e l'articolato più adeguati.", { italics: true, color: C.gray, size: 20, after: 0 }));

children.push(new Paragraph({ children: [new PageBreak()] }));

// ============================================================
// 1. PARTI
// ============================================================
children.push(h1("1. Parti contrattuali"));

const partiW = [3120, 6240];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: partiW,
  rows: [
    new TableRow({ children: [hCell("Committente", partiW[0]), hCell("Fornitore", partiW[1])]}),
    new TableRow({ children: [
      dCell([
        new TextRun({ text: "Noloop S.r.l.", bold: true, size: 22, font: "Calibri" }),
        new TextRun({ text: "\nVia Palermo 8, Milano", size: 20, font: "Calibri", break: 1 }),
        new TextRun({ text: "Rappresentata dall'AD Paolo Donzelli", size: 20, font: "Calibri", break: 1 }),
      ], partiW[0]),
      dCell([
        new TextRun({ text: "HeyAI S.r.l.", bold: true, size: 22, font: "Calibri" }),
        new TextRun({ text: "\nVia Parigi 11, Roma", size: 20, font: "Calibri", break: 1 }),
        new TextRun({ text: "Rappresentata da Bruno Mattucci", size: 20, font: "Calibri", break: 1 }),
      ], partiW[1])
    ]}),
  ]
}));

children.push(spacer(120));
children.push(p("Le Parti hanno già in essere un rapporto contrattuale formalizzato (\"Wave 1\") relativo a una prima tranche di sviluppi software, attualmente in fase di chiusura operativa. Il presente accordo formalizza la seconda tranche evolutiva (\"Wave 2\")."));

children.push(spacer(80));
children.push(noteBox(
  "Identificazione formale del Committente — punto aperto",
  [
    "Il Committente sopra indicato (Noloop S.r.l.) è il soggetto con cui HeyAI ha condotto l'intera fase commerciale e di analisi.",
    "Alla data di redazione del presente brief, il Committente sta valutando — anche in funzione di possibili agevolazioni fiscali — quale società del gruppo Noloop sia il soggetto giuridico più idoneo a sottoscrivere il contratto.",
    "Si chiede al legale di predisporre il contratto con la flessibilità necessaria a consentire la sostituzione del soggetto firmatario al momento della firma, senza rifacimento sostanziale dell'articolato. Il perimetro soggettivo della licenza (§5.2) è già impostato per coprire l'intero gruppo, il che dovrebbe agevolare tale flessibilità."
  ]
));

// ============================================================
// 2. OGGETTO + CONTESTO
// ============================================================
children.push(h1("2. Oggetto del contratto"));

children.push(h2("2.1 Contesto operativo dell'ecosistema"));

children.push(p("L'ecosistema Wave 2 non è un insieme di applicazioni indipendenti ma un sistema integrato in cui i moduli si alimentano reciprocamente in flussi di dati strutturati. La comprensione di tali interconnessioni è rilevante ai fini della redazione di clausole su responsabilità, propagazione dei malfunzionamenti, integrazioni con sistemi terzi e trattamento dei dati."));

children.push(p("Le principali interconnessioni sono le seguenti:"));

children.push(bullet([
  new TextRun({ text: "Minutes → Flow → Link: ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "le trascrizioni delle riunioni generano task strutturati che alimentano il sistema di orchestrazione operativa, da cui i dati di costo confluiscono nel gestionale centralizzato.", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "LeadMe ⇄ Link: ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "integrazione bidirezionale tra il CRM e il gestionale (clienti, commesse, opportunità, dati di vendita).", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "Crowd ⇄ OnSite: ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "i dati dei partecipanti agli eventi raccolti in Crowd alimentano l'esperienza dell'app OnSite e i relativi flussi di pagamento.", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "Sally come layer di lettura trasversale: ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "l'agente conversazionale legge in sola lettura i dati di tutti gli altri moduli e della knowledge base aziendale, senza scrivere.", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "Integrazione con sistemi terzi del Committente: ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "in particolare con l'ERP Microsoft Business Central (modulo Link, integrazione bidirezionale), LinkedIn / Sales Navigator (modulo LeadMe), e gateway di pagamento elettronico (moduli Crowd e OnSite).", font: "Calibri", size: 22 })
]));

children.push(spacer(60));
children.push(p("Una conseguenza pratica di questa architettura è che un malfunzionamento di un sistema terzo (es. indisponibilità di Microsoft Business Central) o di un singolo modulo può propagarsi su più moduli a valle. Questo profilo è rilevante per la redazione delle clausole di limitazione di responsabilità (§10).", { italics: true, color: C.gray }));

children.push(h2("2.2 Oggetto"));

children.push(p("Il contratto ha per oggetto la progettazione, lo sviluppo, l'integrazione e la messa in esercizio di un ecosistema software denominato \"Wave 2\", composto da 8 (otto) moduli applicativi interconnessi, di seguito sinteticamente descritti. La nomenclatura adottata è quella della Roadmap di Sviluppo Ecosistema AI Noloop 2026 condivisa con il Committente."));

children.push(p("Il dettaglio funzionale di ciascun modulo è contenuto nell'Allegato Tecnico (Requirement Log Wave 2), che costituisce parte integrante e sostanziale del contratto. Eventuali sviluppi non ricompresi nel Requirement Log saranno oggetto di formale change request a corrispettivo separato."));

children.push(spacer(80));

const modW = [1900, 5060, 2400];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: modW,
  rows: [
    new TableRow({ children: [
      hCell("Modulo", modW[0]),
      hCell("Descrizione funzionale sintetica", modW[1]),
      hCell("Reparti destinatari", modW[2])
    ]}),
    new TableRow({ children: [
      dCell("Venue Finder Evolution", modW[0], { bold: true, fill: C.alt }),
      dCell("Strumento AI per lo scouting di location per eventi e generazione automatica delle relative presentazioni cliente, con memoria storica delle proposte già effettuate.", modW[1], { fill: C.alt }),
      dCell("Produzione, Account", modW[2], { fill: C.alt })
    ]}),
    new TableRow({ children: [
      dCell("LeadMe Evolution", modW[0], { bold: true }),
      dCell("Evoluzione del CRM esistente per la gestione del ciclo commerciale: pipeline New Business e pipeline Cliente, gestione referenti, dashboard direzione, vista Kanban con semafori temporali, integrazione bidirezionale con Link.", modW[1]),
      dCell("New Business, Sales, Direzione", modW[2])
    ]}),
    new TableRow({ children: [
      dCell("Minutes Extension", modW[0], { bold: true, fill: C.alt }),
      dCell("Evoluzione del modulo di trascrizione e sintesi automatica delle riunioni, con estensione alla cattura audio per call esterne.", modW[1], { fill: C.alt }),
      dCell("Trasversale", modW[2], { fill: C.alt })
    ]}),
    new TableRow({ children: [
      dCell("Crowd Integrazione Incassi", modW[0], { bold: true }),
      dCell("Estensione della piattaforma di gestione eventi Crowd con integrazione del flusso pagamenti partecipanti via gateway terzo (es. Stripe).", modW[1]),
      dCell("Segreterie, PM", modW[2])
    ]}),
    new TableRow({ children: [
      dCell("Link", modW[0], { bold: true, fill: C.alt }),
      dCell("Sistema gestionale centralizzato per gestione commesse, budget a 3 stadi, Piano di Produzione Digitale, ciclo attivo/passivo, dashboard direzionale, integrazione bidirezionale con l'ERP del Committente (Microsoft Business Central).", modW[1], { fill: C.alt }),
      dCell("Direzione, Controllo di Gestione, PM", modW[2], { fill: C.alt })
    ]}),
    new TableRow({ children: [
      dCell("Flow", modW[0], { bold: true }),
      dCell("Sistema di orchestrazione dei flussi operativi: ricezione task strutturati da Minutes, alimentazione automatica di Link con dati di costo da task completati, coordinamento cross-reparto. Vedi Nota tecnica al §11.", modW[1]),
      dCell("PM, Operativi", modW[2])
    ]}),
    new TableRow({ children: [
      dCell("OnSite", modW[0], { bold: true, fill: C.alt }),
      dCell("Applicazione mobile (PWA) destinata ai partecipanti agli eventi: assistenza in tempo reale via chatbot, social networking, survey/feedback strutturati, archivio foto evento.", modW[1], { fill: C.alt }),
      dCell("Partecipanti, Staff on-site", modW[2], { fill: C.alt })
    ]}),
    new TableRow({ children: [
      dCell("Sally 360°", modW[0], { bold: true }),
      dCell("Agente conversazionale AI di livello aziendale, di sola lettura, con accesso ai dati dell'ecosistema, knowledge base aziendale (procedure, policy), capacità di interrogazione in linguaggio naturale, notifiche proattive e compilazione assistita di documenti e portali fornitori.", modW[1]),
      dCell("Trasversale", modW[2])
    ]}),
  ]
}));

children.push(spacer(120));
children.push(p("Le integrazioni con sistemi terzi del Committente comprendono, in particolare: Microsoft Business Central (ERP), LinkedIn / Sales Navigator (limitatamente al modulo LeadMe), provider di pagamento elettronico (limitatamente ai moduli Crowd e OnSite), provider di Large Language Model (utilizzati trasversalmente, con costi di consumo a carico del Committente)."));

// ============================================================
// 3. CORRISPETTIVO
// ============================================================
children.push(h1("3. Corrispettivo"));

children.push(p("Il corrispettivo complessivo è pari a Euro 300.000,00 (trecentomila/00), oltre IVA di legge, a fronte dell'erogazione dell'intero ecosistema in modalità \"bundle\". Il valore commerciale a listino delle singole componenti ammonta a Euro 327.000,00; lo sconto ecosistema, pari a Euro 27.000,00, è applicato come voce aggregata."));

children.push(spacer(80));

const corW = [4180, 2590, 2590];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: corW,
  rows: [
    new TableRow({ children: [
      hCell("Modulo", corW[0]),
      hCell("Listino", corW[1], { alignment: AlignmentType.RIGHT }),
      hCell("Bundle", corW[2], { alignment: AlignmentType.RIGHT })
    ]}),
    ...[
      ["Venue Finder Evolution", "€ 8.000", "€ 8.000"],
      ["LeadMe Evolution", "€ 45.000", "€ 45.000"],
      ["Minutes Extension", "€ 9.000", "€ 9.000"],
      ["Crowd Integrazione Incassi", "€ 15.000", "€ 15.000"],
      ["Link", "€ 80.000", "€ 80.000"],
      ["Flow", "€ 50.000", "€ 50.000"],
      ["OnSite", "€ 35.000", "€ 35.000"],
      ["Sally 360°", "€ 85.000", "€ 85.000"],
    ].map(([m, l, b], i) => new TableRow({ children: [
      dCell(m, corW[0], { fill: i % 2 === 0 ? C.alt : "FFFFFF" }),
      dCell(l, corW[1], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.alt : "FFFFFF" }),
      dCell(b, corW[2], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.alt : "FFFFFF" }),
    ]})),
    new TableRow({ children: [
      dCell("Totale a listino", corW[0], { bold: true, fill: C.light }),
      dCell("€ 327.000", corW[1], { bold: true, alignment: AlignmentType.RIGHT, fill: C.light }),
      dCell("—", corW[2], { alignment: AlignmentType.RIGHT, fill: C.light })
    ]}),
    new TableRow({ children: [
      dCell("Sconto ecosistema", corW[0], { bold: true, fill: C.light }),
      dCell("—", corW[1], { alignment: AlignmentType.RIGHT, fill: C.light }),
      dCell("− € 27.000", corW[2], { bold: true, alignment: AlignmentType.RIGHT, fill: C.light })
    ]}),
    new TableRow({ children: [
      dCell("Totale Bundle (oltre IVA)", corW[0], { bold: true, color: "FFFFFF", fill: C.primary }),
      dCell("", corW[1], { fill: C.primary }),
      dCell("€ 300.000", corW[2], { bold: true, color: "FFFFFF", alignment: AlignmentType.RIGHT, fill: C.primary })
    ]}),
  ]
}));

children.push(spacer(120));
children.push(p("Tutti gli importi si intendono al netto dell'IVA di legge."));

// ============================================================
// 4. PIANO DI FATTURAZIONE
// ============================================================
children.push(h1("4. Piano di fatturazione e milestone"));

children.push(p("Il pagamento del corrispettivo è dilazionato su un arco temporale di 9 (nove) mesi, da aprile a dicembre 2026, con sospensione nel mese di agosto. Per ciascun modulo si adotta una logica di fatturazione articolata in tre quote: 35% all'avvio dei lavori, 30% al rilascio dell'MVP (Minimum Viable Product), 35% alla consegna finale e collaudo positivo del modulo."));

children.push(p("Ogni tranche è espressamente subordinata alla validazione formale del deliverable corrispondente da parte del Committente (vedi §8 — Procedura di accettazione). La tabella seguente riepiloga la pianificazione mensile."));

children.push(spacer(80));

const cfW = [900, 2700, 2960, 1400, 1400];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: cfW,
  rows: [
    new TableRow({ children: [
      hCell("Mese", cfW[0]),
      hCell("Soluzioni fatturate", cfW[1]),
      hCell("Deliverable / evento di trigger", cfW[2]),
      hCell("Importo", cfW[3], { alignment: AlignmentType.RIGHT }),
      hCell("Cumulato", cfW[4], { alignment: AlignmentType.RIGHT })
    ]}),
    ...[
      ["Apr", "VF, Minutes, Crowd, LeadMe, Sally", "Delivery VF e Minutes + acconto inizio sviluppi Crowd, LeadMe, Sally", "€ 53.875", "€ 53.875"],
      ["Mag", "Link, LeadMe, Crowd", "Acconto inizio sviluppi Link + MVP LeadMe + delivery Crowd", "€ 49.375", "€ 103.250"],
      ["Giu", "LeadMe", "Delivery finale LeadMe", "€ 13.875", "€ 117.125"],
      ["Lug", "Link", "Primo rilascio MVP e delivery finale Link", "€ 50.125", "€ 167.250"],
      ["Ago", "—", "Pausa sviluppo", "€ 0", "€ 167.250"],
      ["Set", "Flow, OnSite", "Acconto inizio sviluppi Flow + acconto inizio sviluppi OnSite", "€ 27.875", "€ 195.125"],
      ["Ott", "OnSite, Sally", "Primo rilascio MVP e delivery finale OnSite + primo rilascio MVP Sally", "€ 46.375", "€ 241.500"],
      ["Nov", "Flow", "Rilascio MVP e delivery finale Flow", "€ 30.625", "€ 272.125"],
      ["Dic", "Sally", "Delivery finale Sally — ecosistema completo", "€ 27.875", "€ 300.000"],
    ].map(([m, s, d, e, c], i) => new TableRow({ children: [
      dCell(m, cfW[0], { bold: true, fill: i % 2 === 0 ? C.alt : "FFFFFF" }),
      dCell(s, cfW[1], { size: 18, fill: i % 2 === 0 ? C.alt : "FFFFFF" }),
      dCell(d, cfW[2], { size: 18, fill: i % 2 === 0 ? C.alt : "FFFFFF" }),
      dCell(e, cfW[3], { bold: true, alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.alt : "FFFFFF" }),
      dCell(c, cfW[4], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.alt : "FFFFFF" }),
    ]})),
  ]
}));

children.push(spacer(80));
children.push(p("Il piano è il risultato di un Gantt di progetto già condiviso e validato tra le Parti. Eventuali scostamenti dipendenti dal Fornitore non comporteranno variazioni dell'importo complessivo; scostamenti dipendenti dal Committente daranno luogo alla rimodulazione del piano di fatturazione."));

children.push(spacer(80));
children.push(noteBox(
  "Pausa estiva di agosto",
  ["Si chiede al legale di formalizzare la sospensione di agosto come bilaterale: nessuna attività di sviluppo, nessuna fatturazione e contestuale sospensione degli obblighi di delivery e di SLA del Fornitore per il medesimo periodo."]
));

// ============================================================
// 5. IP
// ============================================================
children.push(h1("5. Proprietà intellettuale e licenza d'uso"));

children.push(p("Si chiede al legale di predisporre un articolato dedicato che disciplini, in particolare, i seguenti elementi:"));

children.push(h2("5.1 Titolarità"));
children.push(p("La titolarità esclusiva di codice sorgente, architettura, modelli, librerie, know-how e di ogni altra opera dell'ingegno sviluppata nell'ambito del contratto resta in capo a HeyAI S.r.l. Il Committente non acquisisce alcun diritto di proprietà sul software."));

children.push(h2("5.2 Licenza concessa al Committente"));

const licW = [3120, 6240];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: licW,
  rows: [
    new TableRow({ children: [
      dCell("Natura", licW[0], { bold: true, fill: C.alt }),
      dCell("Licenza d'uso non esclusiva.", licW[1])
    ]}),
    new TableRow({ children: [
      dCell("Durata", licW[0], { bold: true, fill: C.alt }),
      dCell("Perpetua, a fronte del pagamento integrale del corrispettivo.", licW[1])
    ]}),
    new TableRow({ children: [
      dCell("Perimetro soggettivo", licW[0], { bold: true, fill: C.alt }),
      dCell("La licenza copre Noloop S.r.l. e le società controllate, controllanti e collegate ai sensi dell'art. 2359 c.c., con particolare riferimento alla divisione/società Noloop On Trade (NOT).", licW[1])
    ]}),
    new TableRow({ children: [
      dCell("Trasferibilità", licW[0], { bold: true, fill: C.alt }),
      dCell("Da definire con il legale: regime applicabile in caso di operazioni straordinarie sul Committente (cessione, fusione, conferimento di azienda, change of control). Si chiede al legale una proposta di clausola con valutazione delle alternative.", licW[1])
    ]}),
    new TableRow({ children: [
      dCell("Limiti d'uso", licW[0], { bold: true, fill: C.alt }),
      dCell("Divieto di rivendita, sub-licensing a terzi non rientranti nel perimetro soggettivo, decompilazione e reverse engineering.", licW[1])
    ]}),
    new TableRow({ children: [
      dCell("Personalizzazioni", licW[0], { bold: true, fill: C.alt }),
      dCell("Le customizzazioni sviluppate ad hoc per il Committente seguono il medesimo regime di proprietà del software base (titolarità HeyAI, licenza al Committente).", licW[1])
    ]}),
  ]
}));

children.push(spacer(120));

children.push(h2("5.3 Dati del Committente"));
children.push(p("I dati caricati e generati nei sistemi durante l'esercizio della licenza restano di esclusiva titolarità del Committente. In caso di cessazione del rapporto, HeyAI è obbligata a restituirli in formato strutturato e a procedere alla cancellazione dai propri sistemi entro un termine ragionevole."));

children.push(h2("5.4 Continuità del servizio"));
children.push(p("Si chiede al legale di valutare l'opportunità di prevedere un meccanismo di tutela della continuità operativa del Committente in scenari estremi (cessazione di HeyAI, mancato adempimento prolungato), eventualmente nella forma di un escrow del codice sorgente attivabile a determinate condizioni."));

// ============================================================
// 6. MANUTENZIONE
// ============================================================
children.push(h1("6. Manutenzione e garanzia"));

children.push(p("Per ciascun modulo è previsto un periodo di manutenzione e garanzia di 3 (tre) mesi, decorrenti dalla data di consegna finale del modulo medesimo."));

children.push(p("Tale periodo comprende esclusivamente la correzione di anomalie di funzionamento (bug fixing) imputabili al Fornitore. Sono espressamente esclusi: nuove funzionalità, modifiche evolutive, interventi resi necessari da modifiche unilaterali del Committente alla configurazione, interventi su sistemi terzi (in particolare Microsoft Business Central) o su infrastrutture non di competenza del Fornitore."));

children.push(p("Le modalità operative di apertura ticket, classificazione di severità e tempi di risposta sono lasciate alla definizione del legale, che valuterà la formulazione più adeguata."));

// ============================================================
// 7. CHANGE REQUEST
// ============================================================
children.push(h1("7. Change request e gestione delle modifiche"));

children.push(p("Si chiede al legale di disciplinare in articolo dedicato la procedura per la gestione delle richieste di modifica, fondata sui seguenti principi:"));

children.push(bullet("Costituiscono change request tutte le richieste di sviluppo o modifica che introducano funzionalità non ricomprese nel Requirement Log allegato. Le change request sono soggette a quotazione separata e formale accettazione del Committente prima dell'avvio dei lavori."));
children.push(bullet("Non costituiscono change request: (i) la definizione di parametri di configurazione lasciati aperti nel Requirement Log come \"TBC\" o \"TBD\" (oggetto di confronto in fase di design, con last call al Committente nel rispetto del perimetro funzionale); (ii) le ottimizzazioni tecniche interne che non modificano l'esperienza utente; (iii) gli interventi rientranti nel periodo di manutenzione."));
children.push(bullet("In caso di change request che impattino su moduli già consegnati e collaudati, il Fornitore può ridiscutere le condizioni di garanzia sul modulo modificato."));

// ============================================================
// 8. ACCETTAZIONE
// ============================================================
children.push(h1("8. Procedura di accettazione dei deliverable"));

children.push(p("Si chiede al legale di disciplinare la procedura di accettazione dei deliverable (sia MVP sia consegne finali) sul seguente schema:"));

children.push(bullet("Alla consegna di ciascun deliverable, HeyAI ne dà comunicazione formale al Committente, mettendo a disposizione l'ambiente di test e la documentazione."));
children.push(bullet("Il Committente dispone di un termine di 15 (quindici) giorni di calendario per esprimere accettazione formale o sollevare rilievi motivati."));
children.push(bullet("Decorso inutilmente tale termine, il deliverable si intende tacitamente accettato (silenzio-assenso) e si attiva il diritto del Fornitore alla fatturazione della tranche corrispondente."));
children.push(bullet("In caso di rilievi motivati, le Parti definiscono un piano di rework con tempistiche ragionevoli; al rilascio del rework decorre nuovamente il termine di 15 giorni."));
children.push(bullet("Non costituiscono validi rilievi: richieste di modifica funzionale fuori dal Requirement Log (= change request), preferenze estetiche non documentate, anomalie imputabili a sistemi terzi del Committente."));

// ============================================================
// 9. GDPR
// ============================================================
children.push(h1("9. Trattamento dei dati personali"));

children.push(p("L'esecuzione del contratto comporta il trattamento, da parte del Fornitore in qualità di Responsabile, di dati personali del Committente e di soggetti terzi. Le categorie di dati interessate sono, in sintesi:"));

children.push(bullet([
  new TextRun({ text: "anagrafiche commerciali ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(contatti, aziende clienti e prospect — modulo LeadMe), inclusi dati raccolti tramite LinkedIn / Sales Navigator;", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "dati relativi a commesse, budget, contratti fornitori e fatturazione ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(modulo Link), in integrazione bidirezionale con l'ERP Microsoft Business Central del Committente;", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "trascrizioni e sintesi di riunioni interne ed esterne ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(modulo Minutes), comprensive di partecipanti e contenuti discussi;", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "dati di partecipanti agli eventi ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(moduli Crowd e OnSite): anagrafiche, preferenze, dati di pagamento gestiti tramite provider terzo, feedback;", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "dati operativi degli utenti aziendali ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(moduli Flow, Sally): credenziali, log di attività, interazioni con l'agente conversazionale, contenuti caricati nella knowledge base.", font: "Calibri", size: 22 })
]));

children.push(spacer(40));
children.push(p("L'articolato GDPR va costruito tenendo conto, in particolare, di: (i) trattamento di dati di terzi (partecipanti agli eventi, contatti commerciali esterni); (ii) uso di provider di Large Language Model esterni (OpenAI / Anthropic / altri), i cui costi di consumo restano a carico del Committente; (iii) gestione dei pagamenti dei partecipanti tramite gateway terzo, con valutazione degli adempimenti PSD2 ove applicabili."));

children.push(spacer(40));
children.push(p([
  new TextRun({ text: "Esclusione del training AI sui dati del Committente. ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "Si chiede al legale di prevedere espressamente che i dati del Committente non saranno utilizzati per finalità di addestramento o fine-tuning di modelli di intelligenza artificiale, né da parte di HeyAI né da parte dei provider LLM utilizzati nell'esecuzione del contratto.", font: "Calibri", size: 22 })
]));

// ============================================================
// 10. DISCLAIMER
// ============================================================
children.push(h1("10. Limitazioni di responsabilità e disclaimer"));

children.push(p("Si chiede al legale di predisporre clausole specifiche di limitazione della responsabilità del Fornitore sui seguenti punti, rilevati come critici nella natura tecnica della soluzione:"));

children.push(h2("10.1 Output generativi dei moduli AI"));
children.push(p("I moduli che incorporano modelli generativi (in particolare Sally, Minutes e Venue Finder) possono produrre output non accurati, incompleti o non veritieri (fenomeno noto come \"allucinazione\"). Il Fornitore garantisce la corretta implementazione tecnica del modulo ma non l'accuratezza assoluta degli output prodotti dai modelli sottostanti. Il Committente è tenuto a prevedere processi di verifica umana sugli output prima del loro utilizzo per finalità decisionali, contrattuali, contabili o di comunicazione esterna."));

children.push(h2("10.2 Integrazioni con sistemi terzi"));
children.push(p("Il funzionamento dei moduli che si integrano con sistemi terzi (in particolare Microsoft Business Central per Link, LinkedIn / Sales Navigator per LeadMe, gateway di pagamento per Crowd/OnSite) è soggetto alle limitazioni, modifiche e indisponibilità di tali sistemi. Il Fornitore non risponde di malfunzionamenti, perdite di dati o ritardi imputabili a limiti delle API o a modifiche unilaterali dei sistemi terzi."));

children.push(h2("10.3 Costi di consumo dei modelli AI"));
children.push(p("I costi di consumo (token) dei provider di Large Language Model utilizzati dall'ecosistema (OpenAI, Anthropic e altri) sono a carico del Committente e non sono ricompresi nel corrispettivo. Il Fornitore fornisce una stima indicativa dei consumi attesi ma non ne garantisce l'esattezza."));

children.push(h2("10.4 Dipendenza da input del Committente"));
children.push(p("L'efficacia di alcuni moduli (in particolare Venue Finder per la documentazione interna del Committente, Sally per la knowledge base aziendale e i portali fornitori) dipende dalla qualità, completezza e tempestività degli input forniti dal Committente. Il Fornitore non è responsabile di output qualitativamente insufficienti causati da carenze degli input ricevuti."));

children.push(h2("10.5 Soglie di scalabilità"));
children.push(p("Si chiede al legale di prevedere soglie quantitative per le funzionalità potenzialmente illimitate, oltre le quali si applicano le procedure di change request. In particolare: (i) Sally — compilazione documenti e portali fornitori: copertura limitata ai portali configurati in fase di design (indicativamente fino a 80 portali); (ii) Sally — knowledge base: indicativamente fino a 3.000 documenti; (iii) volumi di traffico, utenze e storage da definire in coerenza con le specifiche tecniche."));

// ============================================================
// 11. NOTE TECNICHE
// ============================================================
children.push(h1("11. Note tecniche per la stesura del contratto e dell'allegato"));

children.push(noteBox(
  "Mapping tra moduli commerciali e Requirement Log",
  [
    "Il Requirement Log allegato struttura i requisiti per area funzionale e non riproduce la stessa nomenclatura della tabella corrispettivi al §3. Per evitare ambiguità contrattuali si segnalano i seguenti raccordi:",
    "• Modulo \"Flow\" (€ 50.000): il dettaglio funzionale è contenuto nelle sezioni del Requirement Log denominate \"LEADME — Gestione Clienti & Task\" (CRM-A, CRM-B, in particolare CRM.1 — CRM.9). Il modulo è commercialmente autonomo e contrattualmente identificato come \"Flow\".",
    "• Modulo \"Crowd Integrazione Incassi\" (€ 15.000): il dettaglio funzionale è contenuto nel requisito ON.3 della sezione OnSite del Requirement Log (gestione pagamenti integrata Crowd, gateway da definire — es. Stripe).",
    "Si suggerisce di esplicitare tali raccordi nell'Allegato Tecnico mediante una nota introduttiva o un indice di mapping, così da evitare contestazioni future sul perimetro dei singoli moduli."
  ]
));

children.push(spacer(140));

children.push(noteBox(
  "Documentazione commerciale di riferimento — esclusione contrattuale",
  [
    "La proposta commerciale consegnata al Committente (\"Roadmap di Sviluppo Ecosistema AI Noloop 2026\"), allegata al presente brief a fini di consultazione, contiene business case quantitativi (stime di risparmio operativo, payback, ore liberate) e riferimenti alle agevolazioni fiscali italiane (Iperammortamento ex L. 199/2025).",
    "Si chiede al legale di non riportare tali elementi nel contratto e di prevedere, ove opportuno, una clausola di esclusione che chiarisca: (i) l'assenza di obbligazioni di risultato in capo al Fornitore sui benefici economici stimati; (ii) l'estraneità del Fornitore alla valutazione e all'eventuale accesso del Committente a benefici fiscali, di esclusiva competenza dei consulenti del Committente."
  ]
));

children.push(spacer(140));

children.push(noteBox(
  "Efficacia retroattiva",
  [
    "Diversi moduli dell'ecosistema sono in fase di sviluppo già avviata precedentemente alla firma del contratto, in continuità con le attività della Wave 1 (in particolare: Venue Finder Evolution, Minutes Extension, LeadMe Evolution, Crowd Integrazione Incassi, e in misura minore altre componenti dell'ecosistema).",
    "Si chiede al legale di prevedere una clausola di efficacia retroattiva del contratto, con espressa ratifica delle attività di sviluppo eseguite prima della sottoscrizione, da applicarsi a tutti i moduli interessati."
  ]
));

// ============================================================
// 12. ALLEGATI
// ============================================================
children.push(h1("12. Allegati e documenti di riferimento"));

children.push(p("Si trasmettono al legale, contestualmente al presente brief, i seguenti documenti:"));

children.push(bullet([
  new TextRun({ text: "Contratto Wave 1 ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(disponibile a fini di consultazione e continuità terminologica);", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "Requirement Log Wave 2 ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(elenco analitico dei requisiti funzionali, da allegare al nuovo contratto come parte integrante e sostanziale — vedi nota di mapping al §11);", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "Requirement Log Venue Finder ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(specifico per il modulo Venue Finder Evolution, complementare al Requirement Log generale);", font: "Calibri", size: 22 })
]));
children.push(bullet([
  new TextRun({ text: "Roadmap di Sviluppo Ecosistema AI Noloop 2026 ", bold: true, font: "Calibri", size: 22 }),
  new TextRun({ text: "(proposta commerciale consegnata al Committente — non costituisce parte integrante del contratto, è allegata a fini di consultazione e contesto del progetto).", font: "Calibri", size: 22 })
]));

// =============================================
// BUILD
// =============================================
const doc = new Document({
  creator: "HeyAI S.r.l.",
  title: "Brief per Stesura Contratto — Noloop Wave 2 (v3)",
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, color: C.primary, font: "Calibri" },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, color: C.primary, font: "Calibri" },
        paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 1 } }
    ]
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Brief_Avvocato_Wave2_Noloop_v3.docx", buffer);
  console.log("OK");
});