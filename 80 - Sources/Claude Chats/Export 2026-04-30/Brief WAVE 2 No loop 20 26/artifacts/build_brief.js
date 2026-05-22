const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, LevelFormat, PageBreak
} = require('docx');

// Colori
const C = {
  primary: "1F3A5F",
  accent:  "2E75B6",
  light:   "E8F1F8",
  alt:     "F5F8FB",
  gray:    "595959",
  body:    "1F1F1F",
  border:  "BFBFBF",
  warn:    "C0392B",
  warnBg:  "FBEAEA"
};

// Helpers
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
    children: [new TextRun({ text, bold: true, size: 26, color: C.primary, font: "Calibri" })],
    spacing: { before: 240, after: 120 }
  });
}
function bullet(text) {
  const runs = Array.isArray(text) ? text : [t(text)];
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    children: runs,
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

const TW = 9360; // US Letter content width with 1" margins

const children = [];

// COPERTINA
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
  spacing: { after: 800 }
}));

// Riquadro intestazione
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

children.push(p("Il presente documento ha l'unica finalità di fornire al legale incaricato gli elementi sostanziali necessari alla redazione del contratto tra Noloop S.r.l. e HeyAI S.r.l. per la fornitura dell'ecosistema software denominato \"Wave 2\". Sono volutamente escluse informazioni di carattere commerciale, tecnico-architetturale di dettaglio o relative al business case del cliente, in quanto non rilevanti ai fini contrattuali.", { italics: true, color: C.gray, size: 20 }));

children.push(p("Si segnala fin da subito che il presente accordo si pone in continuità con il contratto già in essere tra le Parti relativo alla \"Wave 1\" (sottoscritto nel marzo 2026), il quale costituisce il modello strutturale di riferimento. Le sezioni che seguono evidenziano gli elementi di novità rispetto a tale modello, in particolare in materia di proprietà intellettuale, oggetto, corrispettivo e piano di fatturazione.", { italics: true, color: C.gray, size: 20, after: 0 }));

children.push(new Paragraph({ children: [new PageBreak()] }));

// 1. PARTI
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

// 2. OGGETTO
children.push(h1("2. Oggetto del contratto"));

children.push(p("Il contratto ha per oggetto la progettazione, lo sviluppo, l'integrazione e la messa in esercizio di un ecosistema software denominato \"Wave 2\", composto da 8 (otto) moduli applicativi interconnessi, di seguito sinteticamente descritti."));

children.push(p("Il dettaglio funzionale di ciascun modulo è contenuto nell'Allegato Tecnico (Requirement Log Wave 2), che costituisce parte integrante e sostanziale del contratto. Eventuali sviluppi non ricompresi nel Requirement Log saranno oggetto di formale change request a corrispettivo separato."));

children.push(spacer(80));

const modW = [1700, 5160, 2500];
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
      dCell("Venue Finder", modW[0], { bold: true, fill: C.alt }),
      dCell("Strumento AI per lo scouting di location per eventi e per la generazione automatica delle relative presentazioni cliente.", modW[1], { fill: C.alt }),
      dCell("Produzione", modW[2], { fill: C.alt })
    ]}),
    new TableRow({ children: [
      dCell("LeadMe Evolution", modW[0], { bold: true }),
      dCell("Evoluzione del CRM esistente per la gestione del ciclo commerciale (acquisizione lead, gestione opportunità, anagrafica clienti, pipeline).", modW[1]),
      dCell("New Business, Sales", modW[2])
    ]}),
    new TableRow({ children: [
      dCell("Minutes Extension", modW[0], { bold: true, fill: C.alt }),
      dCell("Evoluzione del modulo di trascrizione e sintesi automatica delle riunioni, con estensione alle call esterne.", modW[1], { fill: C.alt }),
      dCell("Trasversale", modW[2], { fill: C.alt })
    ]}),
    new TableRow({ children: [
      dCell("Crowd — Integrazione Incassi", modW[0], { bold: true }),
      dCell("Estensione della piattaforma di gestione eventi con integrazione del flusso pagamenti partecipanti.", modW[1]),
      dCell("Segreterie, PM", modW[2])
    ]}),
    new TableRow({ children: [
      dCell("Link", modW[0], { bold: true, fill: C.alt }),
      dCell("Sistema gestionale centralizzato per la gestione di commesse, budget e fatturazione, integrato con l'ERP del Committente (Microsoft Business Central).", modW[1], { fill: C.alt }),
      dCell("Direzione, Controllo di Gestione, PM", modW[2], { fill: C.alt })
    ]}),
    new TableRow({ children: [
      dCell("Flow", modW[0], { bold: true }),
      dCell("Sistema di task management per l'orchestrazione delle attività operative di commessa.", modW[1]),
      dCell("PM, Operativi", modW[2])
    ]}),
    new TableRow({ children: [
      dCell("OnSite", modW[0], { bold: true, fill: C.alt }),
      dCell("Applicazione mobile (PWA) destinata ai partecipanti agli eventi, con funzionalità di assistenza in tempo reale e raccolta feedback.", modW[1], { fill: C.alt }),
      dCell("Partecipanti, Staff on-site", modW[2], { fill: C.alt })
    ]}),
    new TableRow({ children: [
      dCell("Sally 360°", modW[0], { bold: true }),
      dCell("Agente conversazionale AI di livello aziendale, con accesso in lettura ai dati dell'ecosistema e capacità di interrogazione in linguaggio naturale.", modW[1]),
      dCell("Trasversale", modW[2])
    ]}),
  ]
}));

children.push(spacer(120));
children.push(p("L'integrazione con sistemi terzi del Committente comprende, in particolare: Microsoft Business Central (ERP), LinkedIn / Sales Navigator (limitatamente al modulo LeadMe), provider di pagamento elettronico (limitatamente al modulo Crowd), provider di Large Language Model (utilizzati trasversalmente, con costi di consumo a carico del Committente)."));

// 3. CORRISPETTIVO
children.push(h1("3. Corrispettivo"));

children.push(p("Il corrispettivo complessivo è pari a Euro 315.000,00 (trecentoquindicimila/00), oltre IVA di legge, a fronte dell'erogazione dell'intero ecosistema in modalità \"bundle\". Il valore commerciale a listino delle singole componenti ammonta a Euro 327.000,00; lo sconto ecosistema, pari a Euro 12.000,00, è applicato come voce aggregata."));

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
      ["Venue Finder", "€ 8.000", "€ 8.000"],
      ["LeadMe Evolution", "€ 45.000", "€ 45.000"],
      ["Minutes Extension", "€ 9.000", "€ 9.000"],
      ["Crowd — Integrazione Incassi", "€ 15.000", "€ 15.000"],
      ["Link — Gestionale", "€ 80.000", "€ 80.000"],
      ["Flow — Task Management", "€ 50.000", "€ 50.000"],
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
      dCell("− € 12.000", corW[2], { bold: true, alignment: AlignmentType.RIGHT, fill: C.light })
    ]}),
    new TableRow({ children: [
      dCell("Totale Bundle (oltre IVA)", corW[0], { bold: true, color: "FFFFFF", fill: C.primary }),
      dCell("", corW[1], { fill: C.primary }),
      dCell("€ 315.000", corW[2], { bold: true, color: "FFFFFF", alignment: AlignmentType.RIGHT, fill: C.primary })
    ]}),
  ]
}));

children.push(spacer(120));
children.push(p("Tutti gli importi si intendono al netto dell'IVA di legge."));

// 4. PIANO DI FATTURAZIONE
children.push(h1("4. Piano di fatturazione e milestone"));

children.push(p("Il pagamento del corrispettivo è dilazionato su un arco temporale di 9 (nove) mesi, da aprile a dicembre 2026, con sospensione nel mese di agosto. Per ciascun modulo si adotta una logica di fatturazione articolata in tre quote: 35% all'avvio dei lavori, 30% al rilascio dell'MVP (Minimum Viable Product), 35% alla consegna finale e collaudo positivo del modulo."));

children.push(p("Ogni tranche è espressamente subordinata alla validazione formale del deliverable corrispondente da parte del Committente. La tabella seguente riepiloga la pianificazione mensile."));

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
      hCell("Esborso", cfW[3], { alignment: AlignmentType.RIGHT }),
      hCell("Cumulativo", cfW[4], { alignment: AlignmentType.RIGHT })
    ]}),
    ...[
      ["Mar–Apr", "VF, Minutes", "Sviluppi già avviati — rilascio fine aprile", "€ 5.950", "€ 5.950"],
      ["Apr", "Crowd, LeadMe, Link, OnSite, Sally", "Avvio progetto (acconti) a seguito di formale approvazione", "€ 77.500", "€ 83.450"],
      ["Mag", "LeadMe, Crowd", "Rilascio MVP LeadMe + avanzamento Crowd", "€ 30.000", "€ 113.450"],
      ["Giu", "LeadMe, Link, Crowd", "Consegna finale LeadMe + avanzamento Link + rilascio Crowd", "€ 50.250", "€ 163.700"],
      ["Lug", "Link, Flow", "Consegna finale Link + avvio Flow", "€ 45.500", "€ 209.200"],
      ["Ago", "—", "Pausa estiva: nessuna attività di sviluppo né fatturazione", "€ 0", "€ 209.200"],
      ["Set", "Flow, OnSite", "Rilascio MVP Flow + avanzamento OnSite", "€ 33.500", "€ 242.700"],
      ["Ott", "OnSite, Sally", "Consegna finale OnSite + avanzamento Sally", "€ 40.250", "€ 282.950"],
      ["Nov", "Flow", "Consegna finale Flow", "€ 17.500", "€ 300.450"],
      ["Dic", "Sally", "Consegna finale Sally — completamento ecosistema", "€ 14.550", "€ 315.000"],
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
children.push(p("Il piano sopra esposto è il risultato di un Gantt di progetto già condiviso e validato tra le Parti. Eventuali scostamenti dalla tempistica indicata, qualora dipendenti dal Fornitore, non comporteranno variazioni dell'importo complessivo; qualora dipendenti dal Committente, daranno luogo alla rimodulazione del piano di fatturazione."));

// 5. PROPRIETÀ INTELLETTUALE — riquadro evidenziato
children.push(h1("5. Proprietà intellettuale"));

// Riquadro di evidenza
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: [TW],
  rows: [new TableRow({ children: [new TableCell({
    borders: {
      top: { style: BorderStyle.SINGLE, size: 12, color: C.warn },
      bottom: { style: BorderStyle.SINGLE, size: 12, color: C.warn },
      left: { style: BorderStyle.SINGLE, size: 12, color: C.warn },
      right: { style: BorderStyle.SINGLE, size: 12, color: C.warn }
    },
    width: { size: TW, type: WidthType.DXA },
    shading: { fill: C.warnBg, type: ShadingType.CLEAR },
    margins: { top: 200, bottom: 200, left: 240, right: 240 },
    children: [
      new Paragraph({
        children: [new TextRun({ text: "ATTENZIONE — Modifica sostanziale rispetto al modello Wave 1", bold: true, size: 22, color: C.warn, font: "Calibri" })],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "Il contratto Wave 1 prevede la cessione integrale della titolarità del software al Committente. Per la Wave 2 le Parti hanno concordato un modello sostanzialmente diverso: la titolarità della proprietà intellettuale resta in capo al Fornitore (HeyAI S.r.l.); al Committente è concessa una licenza d'uso. Le clausole IP del contratto Wave 1 devono pertanto essere riscritte e non semplicemente riportate.", size: 22, font: "Calibri" })],
        spacing: { after: 0 }
      })
    ]
  })]})]
}));

children.push(spacer(160));

children.push(p("Si chiede al legale di predisporre un articolato dedicato che disciplini, in particolare, i seguenti elementi:"));

children.push(bullet([new TextRun({ text: "titolarità ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "esclusiva di HeyAI S.r.l. su codice sorgente, architettura, modelli e know-how sviluppati nell'ambito della Wave 2;", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "licenza d'uso ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "concessa al Committente: perimetro funzionale, durata, eventuali limiti di utenza, territorialità, esclusività o non-esclusività;", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "trattamento dei dati ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "del Committente caricati o generati nei sistemi: titolarità del Committente, obblighi di restituzione/cancellazione in caso di cessazione del rapporto;", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "scenari di uscita: ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "previsioni in caso di mancato rinnovo della licenza, di cessazione del Fornitore, o di operazioni straordinarie sul Fornitore (clausole di continuità del servizio, eventuale escrow del codice sorgente);", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "personalizzazioni: ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "regime applicabile alle customizzazioni sviluppate ad hoc per il Committente.", font: "Calibri", size: 22 })]));

children.push(spacer(80));
children.push(p("Le condizioni economiche del bundle (€ 315.000) sono già state determinate tenendo conto di tale impostazione.", { italics: true, color: C.gray, size: 20 }));

// 6. MANUTENZIONE
children.push(h1("6. Manutenzione e garanzia"));

children.push(p("Per ciascun modulo è previsto un periodo di manutenzione e garanzia di 3 (tre) mesi, decorrenti dalla data di consegna finale del modulo medesimo, in coerenza con quanto pattuito nel contratto Wave 1. Tale periodo comprende la correzione di anomalie di funzionamento (bug fixing) imputabili al Fornitore, con esclusione di ogni evolutiva o nuova funzionalità."));

children.push(p("Le richieste di intervento e i relativi tempi di risposta seguono il regime già disciplinato nel contratto Wave 1, salva diversa pattuizione."));

// 7. TRATTAMENTO DATI
children.push(h1("7. Trattamento dei dati personali"));

children.push(p("L'esecuzione del contratto comporta il trattamento, da parte del Fornitore in qualità di Responsabile, di dati personali del Committente e di soggetti terzi. Le categorie di dati interessate sono, in sintesi:"));

children.push(bullet([new TextRun({ text: "anagrafiche commerciali ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(contatti, aziende clienti e prospect — modulo LeadMe), inclusi dati raccolti tramite LinkedIn / Sales Navigator;", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "dati relativi a commesse, budget, contratti fornitori e fatturazione ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(modulo Link), in integrazione bidirezionale con l'ERP Microsoft Business Central del Committente;", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "trascrizioni e sintesi di riunioni interne ed esterne ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(modulo Minutes), comprensive di partecipanti e contenuti discussi;", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "dati di partecipanti agli eventi ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(moduli Crowd e OnSite): anagrafiche, preferenze, dati di pagamento gestiti tramite provider terzo, feedback;", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "dati operativi degli utenti aziendali ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(moduli Flow, Sally): credenziali, log di attività, interazioni con l'agente conversazionale.", font: "Calibri", size: 22 })]));

children.push(spacer(40));
children.push(p("L'articolato GDPR del contratto Wave 1 va integrato per coprire il perimetro sopra descritto, in particolare per quanto attiene al trattamento di dati di terzi (partecipanti agli eventi, contatti commerciali esterni) e all'uso di provider di Large Language Model esterni (OpenAI / Anthropic / altri), i cui costi di consumo restano a carico del Committente."));

// 8. ALLEGATI
children.push(h1("8. Allegati e documenti di riferimento"));

children.push(p("Si trasmettono al legale, contestualmente al presente brief, i seguenti documenti:"));

children.push(bullet([new TextRun({ text: "Contratto Wave 1 ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(da utilizzare come modello strutturale di riferimento — 18 articoli);", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "Allegato Tecnico Wave 1 ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(per il formato dell'allegato tecnico al nuovo contratto);", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "Requirement Log Wave 2 ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(elenco analitico dei requisiti funzionali, da allegare al nuovo contratto come parte integrante e sostanziale);", font: "Calibri", size: 22 })]));
children.push(bullet([new TextRun({ text: "Documento \"Roadmap di Sviluppo Ecosistema AI Noloop 2026\" ", bold: true, font: "Calibri", size: 22 }), new TextRun({ text: "(consegnato al Committente in versione finale ad aprile 2026, contiene il dettaglio del piano di fatturazione e milestone qui sintetizzato).", font: "Calibri", size: 22 })]));

// 9. NOTE
children.push(h1("9. Note operative per la stesura"));

children.push(bullet("La struttura del contratto Wave 1 (18 articoli) è da mantenere come base. Vanno modificati: oggetto, corrispettivo, piano di pagamento, articolato IP, articolato GDPR, manutenzione."));
children.push(bullet("Il Requirement Log allegato deve essere espressamente richiamato come parte integrante e sostanziale del contratto, con clausola di gestione delle modifiche tramite change request a corrispettivo separato."));
children.push(bullet("Le tranche di pagamento devono essere formalmente subordinate alla validazione del deliverable corrispondente, con definizione del termine entro cui il Committente è tenuto a esprimere accettazione o motivato rilievo."));
children.push(bullet("Resta inteso che eventuali sviluppi software già parzialmente eseguiti dal Fornitore prima della firma (Venue Finder, Minutes Extension) sono ricompresi nel perimetro contrattuale, con efficacia retroattiva analoga a quella adottata nella Wave 1."));

// Costruisci il documento
const doc = new Document({
  creator: "HeyAI S.r.l.",
  title: "Brief per Stesura Contratto — Noloop Wave 2",
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, color: C.primary, font: "Calibri" },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: C.primary, font: "Calibri" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } }
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
  fs.writeFileSync("/home/claude/Brief_Avvocato_Wave2_Noloop.docx", buffer);
  console.log("OK");
});