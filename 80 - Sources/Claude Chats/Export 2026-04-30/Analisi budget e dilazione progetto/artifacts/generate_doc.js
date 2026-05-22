const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, LevelFormat,
        HeadingLevel, BorderStyle, WidthType, ShadingType,
        VerticalAlign, PageNumber, PageBreak, TabStopType, TabStopPosition } = require("docx");

// === COLORS ===
const C = {
  navy: "1E2A3A",
  blue: "2E75B6",
  lightBlue: "D5E8F0",
  paleBlue: "F0F6FA",
  white: "FFFFFF",
  black: "000000",
  gray: "666666",
  lightGray: "F5F5F5",
  darkGray: "333333",
  green: "2D8B4E",
  accent: "5B2D8B",
};

// === HELPERS ===
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const noBorder = { style: BorderStyle.NONE, size: 0, color: C.white };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

const TW = 9026; // A4 content width with 1" margins

function txt(text, opts = {}) {
  return new TextRun({ text, font: "Arial", size: opts.size || 22, color: opts.color || C.darkGray, bold: opts.bold || false, italics: opts.italics || false });
}

function para(text, opts = {}) {
  const runs = Array.isArray(text) ? text : [txt(text, opts)];
  return new Paragraph({
    children: runs,
    alignment: opts.alignment || AlignmentType.LEFT,
    spacing: { before: opts.before || 0, after: opts.after || 120 },
    ...(opts.heading ? { heading: opts.heading } : {}),
    ...(opts.pageBreakBefore ? { pageBreakBefore: true } : {}),
    ...(opts.indent ? { indent: opts.indent } : {}),
    ...(opts.numbering ? { numbering: opts.numbering } : {}),
  });
}

function headerCell(text, width, opts = {}) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: C.navy, type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: VerticalAlign.CENTER,
    children: [para(text, { color: C.white, bold: true, size: opts.size || 20, alignment: opts.alignment || AlignmentType.LEFT })],
  });
}

function dataCell(text, width, opts = {}) {
  const runs = Array.isArray(text) ? text : [txt(text, { size: opts.size || 20, bold: opts.bold || false, color: opts.color || C.darkGray, italics: opts.italics || false })];
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: opts.fill || C.white, type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ children: runs, alignment: opts.alignment || AlignmentType.LEFT, spacing: { before: 0, after: 0 } })],
  });
}

function spacer(height = 200) {
  return para("", { before: height, after: 0 });
}

// === PRICING DATA ===
const solutions = [
  { name: "Venue Finder Evolution", cat: "Quick Win", listino: 8000, risparmio: "€36.400/anno", payback: "3 mesi", fte: "0,71" },
  { name: "Crowd Integrazione Incassi", cat: "Quick Win", listino: 15000, risparmio: "Revenue ricorrente", payback: "—", fte: "—" },
  { name: "Minutes Call Esterne", cat: "Quick Win", listino: 9000, risparmio: "+40% copertura", payback: "—", fte: "—" },
  { name: "Link — Sistema Gestionale", cat: "Strategica", listino: 80000, risparmio: "€60.000/anno", payback: "18 mesi", fte: "1,09" },
  { name: "OnSite — AI Event Companion", cat: "Strategica", listino: 35000, risparmio: "Up-sell per evento", payback: "—", fte: "—" },
  { name: "Sally — Agente 360°", cat: "Strategica", listino: 85000, risparmio: "€77.486/anno", payback: "18 mesi", fte: "1,15" },
  { name: "LeadMe Evolution", cat: "Ridefinita", listino: 45000, risparmio: "vedi §5", payback: "vedi §5", fte: "—" },
  { name: "Flow — Task Management", cat: "Ridefinita", listino: 50000, risparmio: "vedi §5", payback: "vedi §5", fte: "—" },
];

const fmt = (n) => "€" + n.toLocaleString("it-IT");

// === BUILD DOCUMENT ===
const children = [];

// =============================================
// COVER PAGE
// =============================================
children.push(spacer(3000));
children.push(para("NOLOOP × HEYAI", { size: 48, bold: true, color: C.navy, alignment: AlignmentType.CENTER, after: 100 }));
children.push(para("Ecosistema AI Wave 2", { size: 36, color: C.blue, alignment: AlignmentType.CENTER, after: 100 }));
children.push(para("Proposta di Investimento — Aggiornamento Perimetro", { size: 24, color: C.gray, alignment: AlignmentType.CENTER, after: 600 }));

// Cover info box
children.push(spacer(800));
children.push(para([
  txt("Data: ", { size: 20, color: C.gray }),
  txt("27 marzo 2026", { size: 20, bold: true, color: C.darkGray }),
], { alignment: AlignmentType.CENTER, after: 60 }));
children.push(para([
  txt("Destinatari: ", { size: 20, color: C.gray }),
  txt("Paolo Donzelli (AD) — Laura Garbarino (Direzione Operativa)", { size: 20, bold: true, color: C.darkGray }),
], { alignment: AlignmentType.CENTER, after: 60 }));
children.push(para([
  txt("Classificazione: ", { size: 20, color: C.gray }),
  txt("Riservato", { size: 20, bold: true, color: C.darkGray }),
], { alignment: AlignmentType.CENTER, after: 60 }));
children.push(para([
  txt("Rif.: ", { size: 20, color: C.gray }),
  txt("HeyAI/NL/W2/2026-03", { size: 20, color: C.darkGray }),
], { alignment: AlignmentType.CENTER }));

// =============================================
// 1. EXECUTIVE SUMMARY
// =============================================
children.push(para("1. Executive Summary", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

children.push(para("Il presente documento aggiorna la proposta di Digital Transformation presentata alla Direzione Noloop il 10 marzo 2026 e ne formalizza il perimetro di investimento alla luce delle indicazioni ricevute.", { after: 120 }));

children.push(para("L'ecosistema Wave 2 comprende 8 soluzioni interconnesse, progettate a partire dall'analisi dei processi operativi condotta con 6 reparti. Rispetto alla presentazione originale, il perimetro è stato razionalizzato: il Modulo Creativo (Pitch) è stato rimosso, LeadMe è stato ridefinito per includere anche la gestione clienti e il task management operativo, e Flow è stato focalizzato sull'orchestrazione dei flussi di lavoro.", { after: 120 }));

// Executive summary key figures box
const summaryData = [
  ["Investimento bundle", "€315.000"],
  ["Risparmio operativo a regime", "~€299.000/anno"],
  ["FTE liberate", "~5"],
  ["Payback complessivo", "~13 mesi"],
  ["Dilazione pagamenti", "9 mesi (Mar–Nov 2026)"],
  ["Iperammortamento (illustrativo)", "~€136.000 di risparmio fiscale"],
];
const summaryColW = [4800, 4226];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: summaryColW,
  rows: summaryData.map(([k, v], i) => new TableRow({
    children: [
      dataCell(k, summaryColW[0], { bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(v, summaryColW[1], { bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white, alignment: AlignmentType.RIGHT }),
    ],
  })),
}));

children.push(spacer(200));
children.push(para("I benefici sono incrementali: le prime soluzioni saranno operative entro aprile 2026, con valore misurabile già dal primo mese di rilascio. L'intero ecosistema sarà completato entro novembre 2026.", { after: 120, italics: true, color: C.gray }));

// =============================================
// 2. COSA È CAMBIATO
// =============================================
children.push(para("2. Aggiornamento del Perimetro", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

children.push(para("A seguito delle indicazioni della Direzione emerse nella sessione del 10 marzo, il perimetro è stato aggiornato come segue.", { after: 200 }));

// Changes table
const changesColW = [2200, 6826];
const changesData = [
  ["Pitch (Modulo Creativo)", "Rimosso dal perimetro. La Direzione ha indicato che la priorità è sull'efficienza operativa e gestionale, non sulla produzione creativa. Eventualmente valutabile in una fase successiva."],
  ["LeadMe Evolution", "Ridefinito. Il perimetro ora comprende: pipeline commerciale (Kanban con semafori e alert), CRM clienti con dettaglio commesse, e gestione task operativi per commessa (funzionalità precedentemente attribuite a Flow). Le funzionalità di scraping attivo, icebreaker AI e notifiche proattive sono state collocate in Fase 2 con quotazione separata."],
  ["Flow — Task Mgmt", "Scope razionalizzato. Flow mantiene il ruolo di orchestratore dei flussi operativi: integrazione con Minutes per la ricezione dei task, alimentazione automatica di Link e coordinamento cross-reparto. Le funzionalità di gestione clienti e task commerciali confluiscono in LeadMe."],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: changesColW,
  rows: [
    new TableRow({ children: [headerCell("Soluzione", changesColW[0]), headerCell("Modifica", changesColW[1])] }),
    ...changesData.map(([sol, desc]) => new TableRow({
      children: [
        dataCell(sol, changesColW[0], { bold: true }),
        dataCell(desc, changesColW[1]),
      ],
    })),
  ],
}));

children.push(spacer(200));
children.push(para("Le soluzioni confermate senza modifiche sono: Link (Sistema Gestionale), Sally (Agente 360°), OnSite (App Partecipanti), Venue Finder Evolution, Crowd Integrazione Incassi e Minutes Call Esterne.", { after: 120 }));

// =============================================
// 3. L'ECOSISTEMA WAVE 2
// =============================================
children.push(para("3. L'Ecosistema Wave 2 — Le Soluzioni", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

children.push(para("Ogni soluzione dell'ecosistema interviene su un problema operativo specifico, con un valore atteso quantificato. Di seguito il dettaglio organizzato per priorità di implementazione.", { after: 200 }));

// --- QUICK WINS ---
children.push(para("3.1 Quick Wins — Partenza Immediata", { heading: HeadingLevel.HEADING_2, after: 120 }));
children.push(para("Soluzioni a basso effort implementativo e alto ritorno immediato. Operative entro le prime 5 settimane.", { after: 200, italics: true, color: C.gray }));

// Venue Finder
children.push(para("Venue Finder Evolution", { bold: true, size: 24, color: C.navy, after: 60 }));
children.push(para("Da ricerca manuale a presentazione automatica", { italics: true, color: C.blue, after: 100 }));

const vfColW = [2400, 6626];
const vfData = [
  ["Cosa fa", "Genera automaticamente la presentazione grafica completa per le location (copy, foto, layout), con memoria storica aziendale consultabile. Evoluzione della soluzione già in produzione."],
  ["Che problema risolve", "Il reparto produzione dedica oltre 1.500 ore/anno all'impaginazione manuale di presentazioni logistiche. Anche per location già proposte si riparte da zero ogni volta."],
  ["Valore atteso", "€36.400/anno di risparmio operativo — 1.225 ore liberate. Payback in 3 mesi."],
  ["Investimento", "€8.000"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfColW,
  rows: vfData.map(([k, v], i) => new TableRow({
    children: [
      dataCell(k, vfColW[0], { bold: true, fill: C.paleBlue }),
      dataCell(v, vfColW[1], { fill: i === 3 ? C.white : C.white }),
    ],
  })),
}));

children.push(spacer(300));

// Crowd
children.push(para("Crowd — Integrazione Incassi", { bold: true, size: 24, color: C.navy, after: 60 }));
children.push(para("Da piattaforma interna a prodotto vendibile", { italics: true, color: C.blue, after: 100 }));

const crowdData = [
  ["Cosa fa", "Integra la gestione dei pagamenti (es. Stripe) nella piattaforma Crowd già in produzione, abilitandone la vendita in subscription ad altre agenzie con Noloop come partner commerciale."],
  ["Che problema risolve", "Senza pagamenti integrati, Crowd non è vendibile sul mercato esterno. Con questa funzionalità diventa un asset commerciale a revenue ricorrente."],
  ["Valore atteso", "Revenue ricorrente da licenze a terze agenzie. Noloop come partner tecnologico nel settore eventi."],
  ["Investimento", "€15.000"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfColW,
  rows: crowdData.map(([k, v]) => new TableRow({
    children: [
      dataCell(k, vfColW[0], { bold: true, fill: C.paleBlue }),
      dataCell(v, vfColW[1]),
    ],
  })),
}));

children.push(spacer(300));

// Minutes
children.push(para("Minutes — Call Esterne", { bold: true, size: 24, color: C.navy, after: 60 }));
children.push(para("Da tool limitato a copertura completa", { italics: true, color: C.blue, after: 100 }));

const minutesData = [
  ["Cosa fa", "Agente AI che partecipa alla call o registra esternamente, con riconoscimento e distinzione delle voci dei partecipanti. Evoluzione dello strumento più apprezzato dai reparti."],
  ["Che problema risolve", "Oggi Minutes è inutilizzabile quando il cliente non abilita la trascrizione Teams o in riunioni in presenza — circa il 40% delle call operative."],
  ["Valore atteso", "+40% di copertura sulle call operative. Massimizza il ROI dell'investimento 2025."],
  ["Investimento", "€9.000"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfColW,
  rows: minutesData.map(([k, v]) => new TableRow({
    children: [
      dataCell(k, vfColW[0], { bold: true, fill: C.paleBlue }),
      dataCell(v, vfColW[1]),
    ],
  })),
}));

// --- PRIORITÀ STRATEGICHE ---
children.push(para("3.2 Priorità Strategiche", { heading: HeadingLevel.HEADING_2, pageBreakBefore: true, after: 120 }));
children.push(para("Soluzioni a complessità più alta che costruiscono l'architettura digitale dei nuovi processi operativi. Generano le maggiori ottimizzazioni e trasformano il modo in cui Noloop gestisce le commesse.", { after: 200, italics: true, color: C.gray }));

// Link
children.push(para("Link — Sistema Gestionale", { bold: true, size: 24, color: C.navy, after: 60 }));
children.push(para("Dal compilare al decidere", { italics: true, color: C.blue, after: 100 }));

const linkData = [
  ["Cosa fa", "Centralizza l'economia di ogni commessa attraverso i diversi stadi di budget — dal previsionale al consuntivo — con quadratura automatica verso Business Central. Sostituisce il Progress Excel con una dashboard digitale per la Direzione."],
  ["Che problema risolve", "I Responsabili dedicano 2 ore/settimana a compilare un Progress che duplica dati su BC. Ogni dato viene inserito almeno due volte. Il 10% delle commesse arriva a chiusura con fatture mancanti. La Direzione non ha visibilità in tempo reale."],
  ["Valore atteso", "€60.000/anno di risparmio operativo — 1.500+ ore liberate. Payback in 18 mesi. Base per evoluzioni future (prima nota automatizzata, controllo spese Revolut)."],
  ["Investimento", "€80.000"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfColW,
  rows: linkData.map(([k, v]) => new TableRow({
    children: [
      dataCell(k, vfColW[0], { bold: true, fill: C.paleBlue }),
      dataCell(v, vfColW[1]),
    ],
  })),
}));

children.push(spacer(300));

// OnSite
children.push(para("OnSite — AI Event Companion", { bold: true, size: 24, color: C.navy, after: 60 }));
children.push(para("App = credibilità, dati e revenue", { italics: true, color: C.blue, after: 100 }));

const onsiteData = [
  ["Cosa fa", "Applicazione mobile per i partecipanti: assistenza in tempo reale, informazioni personalizzate, networking tra partecipanti, raccolta feedback strutturata con dati aggregati per il report post-evento al cliente."],
  ["Che problema risolve", "Lo staff on-site è impegnato a rispondere a richieste informative ripetitive anziché concentrarsi sull'esperienza. I feedback vengono raccolti in modo destrutturato o non raccolti affatto."],
  ["Valore atteso", "Revenue aggiuntiva per evento: OnSite venduto come servizio premium in up-sell al cliente aumenta il margine senza costi variabili. Feedback strutturati e NPS diventano il report che dimostra valore al committente."],
  ["Investimento", "€35.000"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfColW,
  rows: onsiteData.map(([k, v]) => new TableRow({
    children: [
      dataCell(k, vfColW[0], { bold: true, fill: C.paleBlue }),
      dataCell(v, vfColW[1]),
    ],
  })),
}));

children.push(spacer(300));

// Sally
children.push(para("Sally — Agente Noloop 360°", { bold: true, size: 24, color: C.navy, after: 60 }));
children.push(para("Da dipendenza a resilienza: la conoscenza aziendale accessibile a tutti", { italics: true, color: C.blue, after: 100 }));

const sallyData = [
  ["Cosa fa", "Un'AI con la memoria e il contesto di tutta l'azienda. Sally conosce le procedure, i documenti, lo storico clienti, le commesse attive e ogni informazione presente sugli altri applicativi. Non è un chatbot generico: è un collega esperto che sa già tutto di Noloop."],
  ["Che problema risolve", "La conoscenza procedurale è nella testa di poche risorse, generando 120+ richieste/settimana al controllo di gestione. Le procedure sono disperse in centinaia di file che nessuno consulta. I documenti vengono compilati manualmente ogni volta."],
  ["Valore atteso", "€77.486/anno di risparmio operativo — 1.980 ore liberate. Payback in 18 mesi. Più moduli si attivano, più Sally diventa il punto di accesso unico a tutta l'intelligenza operativa."],
  ["Investimento", "€85.000"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfColW,
  rows: sallyData.map(([k, v]) => new TableRow({
    children: [
      dataCell(k, vfColW[0], { bold: true, fill: C.paleBlue }),
      dataCell(v, vfColW[1]),
    ],
  })),
}));

// --- SOLUZIONI RIDEFINITE ---
children.push(para("3.3 Soluzioni Ridefinite", { heading: HeadingLevel.HEADING_2, pageBreakBefore: true, after: 120 }));
children.push(para("LeadMe e Flow sono state ridefinite per riflettere le indicazioni della Direzione. Insieme coprono l'intero ciclo: dalla gestione del lead alla chiusura della commessa, passando per il coordinamento operativo quotidiano.", { after: 200, italics: true, color: C.gray }));

// LeadMe
children.push(para("LeadMe Evolution", { bold: true, size: 24, color: C.navy, after: 60 }));
children.push(para("Il CRM operativo che unisce pipeline, clienti e task", { italics: true, color: C.blue, after: 100 }));

const leadmeData = [
  ["Cosa fa", "Gestisce la pipeline commerciale con vista Kanban e semafori temporali, il CRM clienti con dettaglio commesse attive e storico, e i task operativi per commessa (ricezione da Minutes, Kanban task, Gantt, upload contratti con estrazione scadenze). Integrazione bidirezionale con Link."],
  ["Che problema risolve", "Il commerciale non ha una vista unificata su pipeline e clienti. Il tracking delle opportunità è manuale e frammentato. I task operativi vivono su canali destrutturati (email, WhatsApp, appunti). I ricontatti scaduti non vengono intercettati."],
  ["Valore atteso", "Vedi sezione 4 — Business Case combinato LeadMe + Flow. Risparmio quantificato su gestione pipeline, CRM e task management."],
  ["Investimento", "€45.000"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfColW,
  rows: leadmeData.map(([k, v]) => new TableRow({
    children: [
      dataCell(k, vfColW[0], { bold: true, fill: C.paleBlue }),
      dataCell(v, vfColW[1]),
    ],
  })),
}));

children.push(spacer(300));

// Flow
children.push(para("Flow — Task Management", { bold: true, size: 24, color: C.navy, after: 60 }));
children.push(para("L'orchestratore che connette le persone ai processi", { italics: true, color: C.blue, after: 100 }));

const flowData = [
  ["Cosa fa", "Orchestrazione dei flussi operativi cross-reparto: ricezione task strutturati da Minutes, coordinamento e notifiche tra reparti, alimentazione automatica di Link con dati di avanzamento. Il lavoro quotidiano genera automaticamente i dati per Progress, budget e fatturazione senza doppi inserimenti."],
  ["Che problema risolve", "Il coordinamento di 260 commesse e circa 20.000 task annui vive su canali frammentati. Ogni input richiede tempo per essere trasformato in azione. Le risorse dedicano fino al 70% del tempo a smistare task e rincorrere scadenze su 4 canali diversi."],
  ["Valore atteso", "Vedi sezione 4 — Business Case combinato LeadMe + Flow. Flow è il layer architetturale che abilita l'integrazione tra Minutes, LeadMe e Link."],
  ["Investimento", "€50.000 (ridotto da €75.000 — scope razionalizzato)"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfColW,
  rows: flowData.map(([k, v]) => new TableRow({
    children: [
      dataCell(k, vfColW[0], { bold: true, fill: C.paleBlue }),
      dataCell(v, vfColW[1]),
    ],
  })),
}));

// --- PLACEHOLDER: ARCHITETTURA ---
children.push(spacer(300));
children.push(para("[SPAZIO RISERVATO — Diagramma Architettura Ecosistema]", { pageBreakBefore: true, size: 28, bold: true, color: C.blue, alignment: AlignmentType.CENTER, after: 200 }));
children.push(para("Schema semplificato che illustra come le 8 soluzioni si collegano tra loro e con Business Central. Ogni dato viene generato una sola volta e fluisce automaticamente tra gli applicativi.", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, after: 200 }));
children.push(spacer(6000));
children.push(para("Figura 1 — Architettura Ecosistema Wave 2", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, size: 18 }));

// --- PLACEHOLDER: PROCESSO E2E ---
children.push(para("[SPAZIO RISERVATO — Processo Operativo End-to-End]", { pageBreakBefore: true, size: 28, bold: true, color: C.blue, alignment: AlignmentType.CENTER, after: 200 }));
children.push(para("Acquisizione → Proposta → Conversione → Esecuzione → Chiusura. Per ogni fase, le soluzioni coinvolte e il valore generato.", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, after: 200 }));
children.push(spacer(6000));
children.push(para("Figura 2 — Processo Operativo E2E con Soluzioni Wave 2", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, size: 18 }));

// =============================================
// 4. BUSINESS CASE
// =============================================
children.push(para("4. Business Case", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

// 4.1 LeadMe + Flow
children.push(para("4.1 LeadMe + Flow — Gestione Commerciale e Coordinamento Operativo", { heading: HeadingLevel.HEADING_2, after: 120 }));
children.push(para("Il business case è presentato in forma combinata perché LeadMe e Flow operano come un unico sistema integrato: LeadMe gestisce la relazione commerciale e i task per commessa, Flow orchestra i flussi operativi che alimentano il gestionale. Il valore si genera dalla sinergia tra i due moduli.", { after: 200 }));

// BC table
const bcColW = [4000, 1700, 1700, 1626];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: bcColW,
  rows: [
    new TableRow({ children: [
      headerCell("Area di risparmio", bcColW[0]),
      headerCell("Ore senza AI", bcColW[1], { alignment: AlignmentType.RIGHT }),
      headerCell("Ore con AI", bcColW[2], { alignment: AlignmentType.RIGHT }),
      headerCell("Delta", bcColW[3], { alignment: AlignmentType.RIGHT }),
    ]}),
    new TableRow({ children: [
      dataCell("Tracking e gestione pipeline", bcColW[0]),
      dataCell("864", bcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("128", bcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-85%", bcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Task management e notifiche", bcColW[0], { fill: C.paleBlue }),
      dataCell("385", bcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("128", bcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-67%", bcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell("Coordinamento Senior (Client Lead + Resp. Area)", bcColW[0]),
      dataCell("2.722", bcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("1.771", bcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-35%", bcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Coordinamento PM e Operativi", bcColW[0], { fill: C.paleBlue }),
      dataCell("5.184", bcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("3.888", bcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-25%", bcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell("Scadenze contrattuali e reminder", bcColW[0]),
      dataCell("227", bcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("49", bcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-78%", bcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell([txt("RISPARMIO STIMATO", { size: 20, bold: true, color: C.navy })], bcColW[0], { fill: C.lightBlue }),
      dataCell("", bcColW[1], { fill: C.lightBlue }),
      dataCell("", bcColW[2], { fill: C.lightBlue }),
      dataCell([txt("~€125.000/anno", { size: 20, bold: true, color: C.navy })], bcColW[3], { alignment: AlignmentType.RIGHT, fill: C.lightBlue }),
    ]}),
  ],
}));

children.push(spacer(200));
children.push(para("Metodologia", { bold: true, size: 22, color: C.navy, after: 80 }));
children.push(para("Il risparmio è calcolato come differenza tra le ore dedicate oggi ad attività manuali di coordinamento e tracking e le ore residue dopo l'introduzione del sistema integrato LeadMe + Flow. Le voci di tracking pipeline e task management derivano dal team commerciale (9 risorse su 3 livelli), le voci di coordinamento dal modello operativo calibrato su 46 risorse e 260 commesse/anno. Le ore sono valorizzate al costo orario aziendale per profilo (RAL × 1,40 / 1.720h). La stima include un haircut del 25% per riflettere lo scope ridefinito e un tasso di adozione prudenziale.", { after: 120 }));
children.push(para("La stima è conservativa: non include i benefici di accelerazione commerciale (scraping attivo, icebreaker AI, notifiche proattive) previsti in Fase 2, né i risparmi sul tracking delle risorse di supporto.", { italics: true, color: C.gray, after: 200 }));

// Summary box
const bcSummColW = [4513, 4513];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: bcSummColW,
  rows: [
    new TableRow({ children: [
      dataCell("Investimento combinato (listino)", bcSummColW[0], { bold: true, fill: C.paleBlue }),
      dataCell("€95.000", bcSummColW[1], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell("Risparmio stimato a regime", bcSummColW[0], { bold: true }),
      dataCell("~€125.000/anno", bcSummColW[1], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Ore liberate", bcSummColW[0], { bold: true, fill: C.paleBlue }),
      dataCell("~3.500/anno", bcSummColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell("Payback combinato", bcSummColW[0], { bold: true }),
      dataCell("~10 mesi", bcSummColW[1], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
  ],
}));

// 4.2 Business case confermati
children.push(para("4.2 Business Case Confermati", { heading: HeadingLevel.HEADING_2, pageBreakBefore: true, after: 120 }));
children.push(para("I seguenti business case sono stati presentati nella sessione del 10 marzo e restano invariati nel nuovo perimetro.", { after: 200 }));

// Venue Finder BC
children.push(para("Venue Finder Evolution", { bold: true, size: 22, color: C.navy, after: 80 }));
const vfBcColW = [4000, 1700, 1700, 1626];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfBcColW,
  rows: [
    new TableRow({ children: [
      headerCell("Area", vfBcColW[0]),
      headerCell("Ore senza AI", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      headerCell("Ore con AI", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      headerCell("Delta", vfBcColW[3], { alignment: AlignmentType.RIGHT }),
    ]}),
    new TableRow({ children: [
      dataCell("Produzione presentazioni logistiche", vfBcColW[0]),
      dataCell("1.000", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("200", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-80%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Richieste di rework", vfBcColW[0], { fill: C.paleBlue }),
      dataCell("525", vfBcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("100", vfBcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-80%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell([txt("RISPARMIO", { size: 20, bold: true, color: C.navy })], vfBcColW[0], { fill: C.lightBlue }),
      dataCell("", vfBcColW[1], { fill: C.lightBlue }),
      dataCell("", vfBcColW[2], { fill: C.lightBlue }),
      dataCell([txt("€36.400/anno", { size: 20, bold: true, color: C.navy })], vfBcColW[3], { alignment: AlignmentType.RIGHT, fill: C.lightBlue }),
    ]}),
  ],
}));
children.push(para("ROI 810% | Payback 3 mesi | 1.225 ore liberate | Adozione 90%", { size: 18, italics: true, color: C.gray, after: 300 }));

// Link BC
children.push(para("Link — Sistema Gestionale", { bold: true, size: 22, color: C.navy, after: 80 }));
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfBcColW,
  rows: [
    new TableRow({ children: [
      headerCell("Area", vfBcColW[0]),
      headerCell("Ore senza AI", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      headerCell("Ore con AI", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      headerCell("Delta", vfBcColW[3], { alignment: AlignmentType.RIGHT }),
    ]}),
    new TableRow({ children: [
      dataCell("Apertura commessa", vfBcColW[0]),
      dataCell("87", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("17", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-80%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Compilazione Progress", vfBcColW[0], { fill: C.paleBlue }),
      dataCell("720", vfBcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("108", vfBcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-85%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell("Chiusure incomplete", vfBcColW[0]),
      dataCell("140", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("40", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-70%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Fatturazione attiva", vfBcColW[0], { fill: C.paleBlue }),
      dataCell("238", vfBcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("48", vfBcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-80%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell("Fatturazione passiva", vfBcColW[0]),
      dataCell("694", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("243", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-65%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Reporting direzione", vfBcColW[0], { fill: C.paleBlue }),
      dataCell("92", vfBcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("28", vfBcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-70%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell([txt("RISPARMIO", { size: 20, bold: true, color: C.navy })], vfBcColW[0], { fill: C.lightBlue }),
      dataCell("", vfBcColW[1], { fill: C.lightBlue }),
      dataCell("", vfBcColW[2], { fill: C.lightBlue }),
      dataCell([txt("€60.000/anno", { size: 20, bold: true, color: C.navy })], vfBcColW[3], { alignment: AlignmentType.RIGHT, fill: C.lightBlue }),
    ]}),
  ],
}));
children.push(para("ROI 42% a 2 anni | Payback 18 mesi | 1.500+ ore liberate | Adozione 80%", { size: 18, italics: true, color: C.gray, after: 300 }));

// Sally BC
children.push(para("Sally — Agente Noloop 360°", { bold: true, size: 22, color: C.navy, after: 80 }));
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: vfBcColW,
  rows: [
    new TableRow({ children: [
      headerCell("Area", vfBcColW[0]),
      headerCell("Ore senza AI", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      headerCell("Ore con AI", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      headerCell("Delta", vfBcColW[3], { alignment: AlignmentType.RIGHT }),
    ]}),
    new TableRow({ children: [
      dataCell("Q&A aziendale — rispondenti", vfBcColW[0]),
      dataCell("828", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("256", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-69%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Q&A aziendale — richiedenti", vfBcColW[0], { fill: C.paleBlue }),
      dataCell("1.152", vfBcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("461", vfBcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-60%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell("Compilazione documenti e form", vfBcColW[0]),
      dataCell("360", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("162", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-55%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Policy e procedure", vfBcColW[0], { fill: C.paleBlue }),
      dataCell("105", vfBcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("63", vfBcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-40%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell("Onboarding nuovi assunti", vfBcColW[0]),
      dataCell("600", vfBcColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("390", vfBcColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell("-35%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true }),
    ]}),
    new TableRow({ children: [
      dataCell("Email/Audio-to-action", vfBcColW[0], { fill: C.paleBlue }),
      dataCell("1.027", vfBcColW[1], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("411", vfBcColW[2], { alignment: AlignmentType.RIGHT, fill: C.paleBlue }),
      dataCell("-60%", vfBcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: C.paleBlue }),
    ]}),
    new TableRow({ children: [
      dataCell([txt("RISPARMIO", { size: 20, bold: true, color: C.navy })], vfBcColW[0], { fill: C.lightBlue }),
      dataCell("", vfBcColW[1], { fill: C.lightBlue }),
      dataCell("", vfBcColW[2], { fill: C.lightBlue }),
      dataCell([txt("€77.486/anno", { size: 20, bold: true, color: C.navy })], vfBcColW[3], { alignment: AlignmentType.RIGHT, fill: C.lightBlue }),
    ]}),
  ],
}));
children.push(para("ROI 52% a 2 anni | Payback 18 mesi | 1.980 ore liberate | Adozione 85%", { size: 18, italics: true, color: C.gray }));

// =============================================
// 5. RIEPILOGO INVESTIMENTO E ROI
// =============================================
children.push(para("5. Riepilogo Investimento", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

const invColW = [2800, 1400, 1700, 1000, 1000, 1126];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: invColW,
  rows: [
    new TableRow({ children: [
      headerCell("Soluzione", invColW[0]),
      headerCell("Listino", invColW[1], { alignment: AlignmentType.RIGHT }),
      headerCell("Risparmio/anno", invColW[2], { alignment: AlignmentType.RIGHT }),
      headerCell("FTE", invColW[3], { alignment: AlignmentType.RIGHT }),
      headerCell("Payback", invColW[4], { alignment: AlignmentType.RIGHT }),
      headerCell("Priorità", invColW[5], { alignment: AlignmentType.CENTER }),
    ]}),
    // Quick Wins
    ...[ 
      ["Venue Finder Evo", "€8.000", "€36.400", "0,71", "3 mesi", "QW"],
      ["Crowd Incassi", "€15.000", "Revenue", "—", "—", "QW"],
      ["Minutes Ext", "€9.000", "+40% Usab.", "—", "—", "QW"],
    ].map(([n, l, r, f, p, pr], i) => new TableRow({ children: [
      dataCell(n, invColW[0], { fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(l, invColW[1], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(r, invColW[2], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(f, invColW[3], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(p, invColW[4], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(pr, invColW[5], { alignment: AlignmentType.CENTER, fill: i % 2 === 0 ? C.paleBlue : C.white }),
    ]})),
    // Strategiche
    ...[
      ["Link Gestionale", "€80.000", "€60.000", "1,09", "18 mesi", "S"],
      ["OnSite App", "€35.000", "Up-sell", "—", "—", "S"],
      ["Sally 360°", "€85.000", "€77.486", "1,15", "18 mesi", "S"],
    ].map(([n, l, r, f, p, pr], i) => new TableRow({ children: [
      dataCell(n, invColW[0], { fill: i % 2 !== 0 ? C.paleBlue : C.white }),
      dataCell(l, invColW[1], { alignment: AlignmentType.RIGHT, fill: i % 2 !== 0 ? C.paleBlue : C.white }),
      dataCell(r, invColW[2], { alignment: AlignmentType.RIGHT, fill: i % 2 !== 0 ? C.paleBlue : C.white }),
      dataCell(f, invColW[3], { alignment: AlignmentType.RIGHT, fill: i % 2 !== 0 ? C.paleBlue : C.white }),
      dataCell(p, invColW[4], { alignment: AlignmentType.RIGHT, fill: i % 2 !== 0 ? C.paleBlue : C.white }),
      dataCell(pr, invColW[5], { alignment: AlignmentType.CENTER, fill: i % 2 !== 0 ? C.paleBlue : C.white }),
    ]})),
    // Ridefinite
    ...[
      ["LeadMe Evolution", "€45.000", "§4 comb.", "—", "§4", "R"],
      ["Flow Task Mgmt", "€50.000", "§4 comb.", "—", "§4", "R"],
    ].map(([n, l, r, f, p, pr], i) => new TableRow({ children: [
      dataCell(n, invColW[0], { fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(l, invColW[1], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(r, invColW[2], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(f, invColW[3], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(p, invColW[4], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(pr, invColW[5], { alignment: AlignmentType.CENTER, fill: i % 2 === 0 ? C.paleBlue : C.white }),
    ]})),
    // Totale listino
    new TableRow({ children: [
      dataCell([txt("TOTALE A LISTINO", { size: 20, bold: true, color: C.navy })], invColW[0], { fill: C.lightBlue }),
      dataCell([txt("€327.000", { size: 20, bold: true, color: C.navy })], invColW[1], { alignment: AlignmentType.RIGHT, fill: C.lightBlue }),
      dataCell("", invColW[2], { fill: C.lightBlue }),
      dataCell("", invColW[3], { fill: C.lightBlue }),
      dataCell("", invColW[4], { fill: C.lightBlue }),
      dataCell("", invColW[5], { fill: C.lightBlue }),
    ]}),
    // Sconto
    new TableRow({ children: [
      dataCell("Sconto ecosistema", invColW[0], { bold: true }),
      dataCell([txt("-€12.000", { size: 20, bold: true, color: C.green })], invColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("", invColW[2]),
      dataCell("", invColW[3]),
      dataCell("", invColW[4]),
      dataCell("", invColW[5]),
    ]}),
    // Bundle
    new TableRow({ children: [
      dataCell([txt("INVESTIMENTO BUNDLE", { size: 20, bold: true, color: C.white })], invColW[0], { fill: C.navy }),
      dataCell([txt("€315.000", { size: 20, bold: true, color: C.white })], invColW[1], { alignment: AlignmentType.RIGHT, fill: C.navy }),
      dataCell([txt("~€299.000", { size: 20, bold: true, color: C.white })], invColW[2], { alignment: AlignmentType.RIGHT, fill: C.navy }),
      dataCell([txt("~5", { size: 20, bold: true, color: C.white })], invColW[3], { alignment: AlignmentType.RIGHT, fill: C.navy }),
      dataCell([txt("~13 mesi", { size: 20, bold: true, color: C.white })], invColW[4], { alignment: AlignmentType.RIGHT, fill: C.navy }),
      dataCell("", invColW[5], { fill: C.navy }),
    ]}),
  ],
}));

children.push(spacer(120));
children.push(para([
  txt("QW", { size: 18, bold: true, color: C.blue }),
  txt(" = Quick Win   ", { size: 18, color: C.gray }),
  txt("S", { size: 18, bold: true, color: C.blue }),
  txt(" = Strategica   ", { size: 18, color: C.gray }),
  txt("R", { size: 18, bold: true, color: C.blue }),
  txt(" = Ridefinita   ", { size: 18, color: C.gray }),
  txt("§4", { size: 18, bold: true, color: C.blue }),
  txt(" = Business Case combinato LeadMe + Flow (sezione 4.1)", { size: 18, color: C.gray }),
]));

children.push(spacer(200));

// ROI summary box
children.push(para("Ritorno sull'investimento a 24 mesi", { bold: true, size: 24, color: C.navy, after: 120 }));
const roiColW = [3008, 3009, 3009];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: roiColW,
  rows: [
    new TableRow({ children: [
      new TableCell({
        borders, width: { size: roiColW[0], type: WidthType.DXA },
        shading: { fill: C.paleBlue, type: ShadingType.CLEAR }, margins: cellMargins,
        verticalAlign: VerticalAlign.CENTER,
        children: [
          para("INVESTIMENTO", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 40 }),
          para("€315.000", { size: 28, bold: true, color: C.navy, alignment: AlignmentType.CENTER }),
        ],
      }),
      new TableCell({
        borders, width: { size: roiColW[1], type: WidthType.DXA },
        shading: { fill: C.paleBlue, type: ShadingType.CLEAR }, margins: cellMargins,
        verticalAlign: VerticalAlign.CENTER,
        children: [
          para("RISPARMIO 24 MESI", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 40 }),
          para("~€598.000", { size: 28, bold: true, color: C.navy, alignment: AlignmentType.CENTER }),
        ],
      }),
      new TableCell({
        borders, width: { size: roiColW[2], type: WidthType.DXA },
        shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: cellMargins,
        verticalAlign: VerticalAlign.CENTER,
        children: [
          para("VALORE NETTO", { size: 16, color: C.lightBlue, alignment: AlignmentType.CENTER, after: 40 }),
          para("+€283.000", { size: 28, bold: true, color: C.white, alignment: AlignmentType.CENTER }),
        ],
      }),
    ]}),
  ],
}));
children.push(para("Esclusi: revenue Crowd, up-sell OnSite, benefici fiscali iperammortamento, accelerazione commerciale Fase 2.", { size: 18, italics: true, color: C.gray, after: 0 }));


// =============================================
// 6. LEVA FISCALE
// =============================================
children.push(para("6. Leva Fiscale: Iperammortamento 2026", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

children.push(para("La Legge di Bilancio 2026 (L. 199/2025) ha reintrodotto l'iperammortamento per beni strumentali digitali, includendo esplicitamente software basati su AI interconnessi con il gestionale aziendale.", { after: 120 }));
children.push(para("L'ecosistema Wave 2, in quanto software AI integrato via API con Business Central, presenta le caratteristiche per rientrare nel perimetro agevolabile (beni immateriali Allegato V).", { after: 200 }));

const fiscColW = [2000, 1600, 1600, 1826, 2000];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: fiscColW,
  rows: [
    new TableRow({ children: [
      headerCell("Investimento", fiscColW[0], { alignment: AlignmentType.RIGHT }),
      headerCell("Maggioraz. 180%", fiscColW[1], { alignment: AlignmentType.RIGHT }),
      headerCell("Deduz. totale", fiscColW[2], { alignment: AlignmentType.RIGHT }),
      headerCell("Risparmio IRES 24%", fiscColW[3], { alignment: AlignmentType.RIGHT }),
      headerCell("Costo effettivo netto", fiscColW[4], { alignment: AlignmentType.RIGHT }),
    ]}),
    new TableRow({ children: [
      dataCell("€315.000", fiscColW[0], { bold: true, alignment: AlignmentType.RIGHT }),
      dataCell("€567.000", fiscColW[1], { alignment: AlignmentType.RIGHT }),
      dataCell("€882.000", fiscColW[2], { alignment: AlignmentType.RIGHT }),
      dataCell([txt("~€136.000", { size: 20, bold: true, color: C.green })], fiscColW[3], { alignment: AlignmentType.RIGHT }),
      dataCell([txt("~€179.000", { size: 20, bold: true, color: C.navy })], fiscColW[4], { alignment: AlignmentType.RIGHT }),
    ]}),
  ],
}));

children.push(spacer(200));
children.push(para("I valori sono illustrativi e basati sullo scaglione fino a €10M con aliquota IRES 24%. L'effettivo beneficio dipende dalla situazione fiscale specifica di Noloop e va validato con il consulente fiscale dell'azienda. Il risparmio IRES si riferisce esclusivamente alla maggiorazione (180%) e non al costo base, che è ordinariamente deducibile.", { size: 20, italics: true, color: C.gray }));


// =============================================
// 7. TIMELINE
// =============================================
children.push(para("7. Roadmap di Sviluppo", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

children.push(para("Timeline indicativa: marzo – novembre 2026, con pausa nel mese di agosto. Rilasci incrementali con validazione utente tra le fasi.", { after: 200 }));

// Timeline table
const tlColW = [2600, 1400, 1400, 1400, 2226];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: tlColW,
  rows: [
    new TableRow({ children: [
      headerCell("Soluzione", tlColW[0]),
      headerCell("Avvio", tlColW[1], { alignment: AlignmentType.CENTER }),
      headerCell("MVP", tlColW[2], { alignment: AlignmentType.CENTER }),
      headerCell("Consegna", tlColW[3], { alignment: AlignmentType.CENTER }),
      headerCell("Priorità", tlColW[4], { alignment: AlignmentType.CENTER }),
    ]}),
    ...[
      ["Venue Finder Evo", "Mar", "Apr", "Apr", "Quick Win"],
      ["Minutes Ext", "Mar", "Apr", "Apr", "Quick Win"],
      ["Crowd Incassi", "Mar", "Apr", "Mag", "Quick Win"],
      ["LeadMe Evolution", "Mar", "Mag", "Giu", "Ridefinita"],
      ["Link Gestionale", "Apr", "Giu", "Lug", "Strategica"],
      ["Flow Task Mgmt", "Mag", "Lug", "Set", "Ridefinita"],
      ["OnSite App", "Giu", "Set", "Ott", "Strategica"],
      ["Sally 360°", "Mar*", "Ott", "Nov", "Strategica"],
    ].map(([n, a, m, c, p], i) => new TableRow({ children: [
      dataCell(n, tlColW[0], { bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(a, tlColW[1], { alignment: AlignmentType.CENTER, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(m, tlColW[2], { alignment: AlignmentType.CENTER, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(c, tlColW[3], { alignment: AlignmentType.CENTER, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(p, tlColW[4], { alignment: AlignmentType.CENTER, fill: i % 2 === 0 ? C.paleBlue : C.white }),
    ]})),
  ],
}));

children.push(spacer(80));
children.push(para("* Sally è trasversale a tutti gli applicativi: parte subito con l'infrastruttura base e cresce con ogni rilascio, completandosi con l'ultimo modulo.", { size: 18, italics: true, color: C.gray, after: 80 }));
children.push(para("Agosto: pausa sviluppo. La timeline è indicativa e soggetta a validazione tecnica.", { size: 18, italics: true, color: C.gray }));

// Placeholder Gantt
children.push(spacer(300));
children.push(para("[SPAZIO RISERVATO — Diagramma Gantt]", { size: 28, bold: true, color: C.blue, alignment: AlignmentType.CENTER, after: 200 }));
children.push(para("Rappresentazione visiva della roadmap con dipendenze tra moduli e milestone di rilascio.", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, after: 200 }));
children.push(spacer(3000));
children.push(para("Figura 3 — Gantt di Progetto Mar–Nov 2026", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, size: 18 }));

// =============================================
// 8. PIANO DI FATTURAZIONE
// =============================================
children.push(para("8. Piano di Fatturazione e Flusso di Cassa", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

children.push(para("Pagamenti dilazionati su 9 mesi con logica 35% acconto / 30% a metà progetto / 35% al rilascio. Ogni tranche è condizionata alla validazione del deliverable corrispondente.", { after: 200 }));

const cfColW = [1100, 3200, 1500, 1500, 1726];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: cfColW,
  rows: [
    new TableRow({ children: [
      headerCell("Mese", cfColW[0]),
      headerCell("Soluzioni fatturate", cfColW[1]),
      headerCell("Tranche", cfColW[2]),
      headerCell("Esborso", cfColW[3], { alignment: AlignmentType.RIGHT }),
      headerCell("Cumulativo", cfColW[4], { alignment: AlignmentType.RIGHT }),
    ]}),
    ...[
      ["Mar", "VF, Min, Crowd, LeadMe, Sally", "T1 avvio progetto", "€44.700*", "€44.700"],
      ["Apr", "VF, Min, Crowd, Link", "T2+T3 QW + T1 Link", "€43.550", "€88.250"],
      ["Mag", "Crowd, LeadMe, Flow", "T3 Crowd + T2 LM + T1 Flow", "€36.250", "€124.500"],
      ["Giu", "LeadMe, Link, OnSite", "T3 LM + T2 Link + T1 OnSite", "€52.000", "€176.500"],
      ["Lug", "Link, Flow", "T3 Link + T2 Flow", "€43.000", "€219.500"],
      ["Ago", "—", "Pausa", "€0", "€219.500"],
      ["Set", "Flow, OnSite", "T3 Flow + T2 OnSite", "€28.000", "€247.500"],
      ["Ott", "OnSite, Sally", "T3 OnSite + T2 Sally", "€37.750", "€285.250"],
      ["Nov", "Sally", "T3 Sally", "€29.750", "€315.000"],
    ].map(([m, s, t, e, c], i) => new TableRow({ children: [
      dataCell(m, cfColW[0], { bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(s, cfColW[1], { size: 18, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(t, cfColW[2], { size: 18, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(e, cfColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(c, cfColW[4], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white }),
    ]})),
  ],
}));

children.push(spacer(80));
children.push(para("* Il mese di marzo include lo sconto ecosistema di €12.000 applicato come riduzione sulla prima tranche.", { size: 18, italics: true, color: C.gray, after: 200 }));

// Cash flow summary
const cfSumColW = [3008, 3009, 3009];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: cfSumColW,
  rows: [
    new TableRow({ children: [
      new TableCell({
        borders, width: { size: cfSumColW[0], type: WidthType.DXA },
        shading: { fill: C.paleBlue, type: ShadingType.CLEAR }, margins: cellMargins,
        verticalAlign: VerticalAlign.CENTER,
        children: [
          para("INVESTIMENTO TOTALE", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 40 }),
          para("€315.000", { size: 26, bold: true, color: C.navy, alignment: AlignmentType.CENTER }),
        ],
      }),
      new TableCell({
        borders, width: { size: cfSumColW[1], type: WidthType.DXA },
        shading: { fill: C.paleBlue, type: ShadingType.CLEAR }, margins: cellMargins,
        verticalAlign: VerticalAlign.CENTER,
        children: [
          para("DILAZIONE", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 40 }),
          para("9 mesi", { size: 26, bold: true, color: C.navy, alignment: AlignmentType.CENTER }),
        ],
      }),
      new TableCell({
        borders, width: { size: cfSumColW[2], type: WidthType.DXA },
        shading: { fill: C.paleBlue, type: ShadingType.CLEAR }, margins: cellMargins,
        verticalAlign: VerticalAlign.CENTER,
        children: [
          para("PICCO MENSILE", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 40 }),
          para("€52.000 (giu)", { size: 26, bold: true, color: C.navy, alignment: AlignmentType.CENTER }),
        ],
      }),
    ]}),
  ],
}));
children.push(para("Il piano di pagamento è indicativo e legato ai rilasci effettivi. L'intero investimento è in competenza 2026, compatibile con l'applicazione dell'iperammortamento.", { size: 18, italics: true, color: C.gray }));


// =============================================
// 9. QUANDO IL VALORE SI ATTIVA
// =============================================
children.push(para("9. Quando il Valore si Attiva", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

children.push(para("Ad ogni rilascio si attiva un beneficio misurabile. Il valore è incrementale: non si aspetta la fine del progetto per vedere risultati.", { after: 200 }));

const valColW = [1000, 2200, 2600, 1500, 1726];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: valColW,
  rows: [
    new TableRow({ children: [
      headerCell("Rilascio", valColW[0]),
      headerCell("Soluzione", valColW[1]),
      headerCell("Cosa si sblocca", valColW[2]),
      headerCell("Risparmio/anno", valColW[3], { alignment: AlignmentType.RIGHT }),
      headerCell("Cumulativo", valColW[4], { alignment: AlignmentType.RIGHT }),
    ]}),
    ...[
      ["Apr", "Venue Finder Evo", "Presentazioni logistiche automatiche", "€36.400", "€36.400"],
      ["Apr", "Minutes Ext", "+40% call coperte — trascrizione anche senza Teams", "Produttività", "€36.400"],
      ["Mag", "Crowd Incassi", "Incassi integrati — piattaforma vendibile a terzi", "Revenue", "€36.400"],
      ["Giu", "LeadMe Evolution", "Pipeline visiva, CRM clienti, gestione task", "Produttività", "€36.400"],
      ["Lug", "Link Gestionale", "Sostituzione Progress, quadratura BC, zero doppi inserimenti", "€60.000", "€96.400"],
      ["Set", "Flow Task Mgmt", "Coordinamento centralizzato (con LeadMe: €125K combinato)", "€125.000", "€221.400"],
      ["Ott", "OnSite App", "App partecipanti, feedback, NPS — up-sell per evento", "Up-sell", "€221.400"],
      ["Nov", "Sally 360°", "Agente su tutti i dati — 120 richieste/sett. in meno", "€77.486", "€298.886"],
    ].map(([m, s, c, r, cum], i) => new TableRow({ children: [
      dataCell(m, valColW[0], { bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(s, valColW[1], { bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white, size: 18 }),
      dataCell(c, valColW[2], { size: 18, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(r, valColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white, size: 18 }),
      dataCell(cum, valColW[4], { alignment: AlignmentType.RIGHT, fill: i % 2 === 0 ? C.paleBlue : C.white, size: 18 }),
    ]})),
    // Total row
    new TableRow({ children: [
      dataCell([txt("A REGIME", { size: 18, bold: true, color: C.white })], valColW[0], { fill: C.navy }),
      dataCell("", valColW[1], { fill: C.navy }),
      dataCell("", valColW[2], { fill: C.navy }),
      dataCell("", valColW[3], { fill: C.navy }),
      dataCell([txt("~€299.000/anno", { size: 18, bold: true, color: C.white })], valColW[4], { alignment: AlignmentType.RIGHT, fill: C.navy }),
    ]}),
  ],
}));

children.push(spacer(200));
children.push(para("3 soluzioni live nelle prime 5 settimane. Il risparmio pro-rata 2026 (aprile–dicembre) è stimato in circa €190.000, al netto del ramp-up.", { bold: true, color: C.navy, after: 80 }));
children.push(para("Con le agevolazioni fiscali applicabili, il payback si riduce ulteriormente. 5 FTE liberate a regime significano capacità di crescere senza assumere.", { color: C.gray, italics: true }));


// =============================================
// 10. PROSSIMI PASSI
// =============================================
children.push(para("10. Perimetro Contrattuale e Prossimi Passi", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));
children.push(spacer(60));

children.push(para("Perimetro contrattuale", { bold: true, size: 24, color: C.navy, after: 120 }));
children.push(para("Il perimetro dell'investimento è definito dal Requirement Log allegato al presente documento (rif. Wave2_RequirementLog_27032026), che riporta in dettaglio i requisiti funzionali validati per ciascun modulo.", { after: 120 }));
children.push(para("Qualsiasi requisito non incluso nel log — incluse le funzionalità esplicitamente collocate in Fase 2 (scraping attivo, icebreaker AI, notifiche proattive, sincronizzazione calendario esterno) — richiederà quotazione e approvazione separata.", { after: 200 }));

children.push(para("Prossimi passi", { bold: true, size: 24, color: C.navy, after: 120 }));

const stepsColW = [600, 2500, 5926];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA },
  columnWidths: stepsColW,
  rows: [
    new TableRow({ children: [
      headerCell("#", stepsColW[0], { alignment: AlignmentType.CENTER }),
      headerCell("Fase", stepsColW[1]),
      headerCell("Dettaglio", stepsColW[2]),
    ]}),
    ...[
      ["01", "Approvazione proposta", "Conferma del perimetro, del piano di investimento e della dilazione pagamenti da parte della Direzione."],
      ["02", "Formalizzazione contratto", "Sottoscrizione del contratto con allegato Requirement Log e piano di fatturazione."],
      ["03", "Kick-off di progetto", "Sessione di avvio con i referenti dei reparti coinvolti. Condivisione del piano operativo e attivazione dello sviluppo."],
      ["04", "Primo rilascio (Quick Wins)", "Venue Finder, Minutes e Crowd entro le prime 5 settimane dall'avvio."],
    ].map(([n, f, d], i) => new TableRow({ children: [
      dataCell(n, stepsColW[0], { bold: true, alignment: AlignmentType.CENTER, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(f, stepsColW[1], { bold: true, fill: i % 2 === 0 ? C.paleBlue : C.white }),
      dataCell(d, stepsColW[2], { fill: i % 2 === 0 ? C.paleBlue : C.white }),
    ]})),
  ],
}));

children.push(spacer(600));
children.push(para("HeyAI S.r.l.", { bold: true, size: 22, color: C.navy, alignment: AlignmentType.RIGHT }));
children.push(para("Via Parigi 11, Roma", { size: 18, color: C.gray, alignment: AlignmentType.RIGHT }));

// === ASSEMBLE DOCUMENT ===
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: C.navy },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: C.navy },
        paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 1 } },
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
          children: [
            txt("Noloop × HeyAI — Wave 2", { size: 16, color: C.gray }),
            new TextRun({ children: ["\t"], font: "Arial", size: 16 }),
            txt("Riservato", { size: 16, color: C.gray, italics: true }),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: C.lightBlue, space: 4 } },
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [
            txt("HeyAI S.r.l. — Via Parigi 11, Roma", { size: 14, color: C.gray }),
            new TextRun({ children: ["\t"], font: "Arial", size: 14 }),
            txt("Pagina ", { size: 14, color: C.gray }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 14, color: C.gray }),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.lightBlue, space: 4 } },
        })],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Noloop_Wave2_Proposta_Investimento.docx", buffer);
  console.log("OK — Document generated");
});