const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, LevelFormat, ImageRun,
        HeadingLevel, BorderStyle, WidthType, ShadingType,
        VerticalAlign, PageNumber, PageBreak, TabStopType, TabStopPosition } = require("docx");

// === HeyAI PALETTE (from template) ===
const C = {
  teal: "208591",
  body: "133439",
  navy: "1F4D78",
  white: "FFFFFF",
  lightTeal: "E8F4F6",
  paleTeal: "F2F9FA",
  gray: "666666",
  lightGray: "F5F6F7",
  green: "2D8B4E",
  tableHead: "208591",
  tableBorder: "D0D5D6",
};

const border = { style: BorderStyle.SINGLE, size: 1, color: C.tableBorder };
const borders = { top: border, bottom: border, left: border, right: border };
const cm = { top: 60, bottom: 60, left: 100, right: 100 };
const TW = 9026;

function t(text, opts = {}) {
  return new TextRun({ text, font: "Calibri", size: opts.size || 22, color: opts.color || C.body, bold: opts.bold || false, italics: opts.italics || false });
}

function p(text, opts = {}) {
  const runs = Array.isArray(text) ? text : [t(text, opts)];
  return new Paragraph({
    children: runs,
    alignment: opts.alignment || AlignmentType.LEFT,
    spacing: { before: opts.before || 0, after: opts.after || 100, line: opts.line || 276 },
    ...(opts.heading ? { heading: opts.heading } : {}),
    ...(opts.pageBreakBefore ? { pageBreakBefore: true } : {}),
    ...(opts.numbering ? { numbering: opts.numbering } : {}),
  });
}

function hCell(text, width, opts = {}) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: C.tableHead, type: ShadingType.CLEAR },
    margins: cm, verticalAlign: VerticalAlign.CENTER,
    children: [p(text, { color: C.white, bold: true, size: opts.size || 20, alignment: opts.alignment || AlignmentType.LEFT, after: 0 })],
  });
}

function dCell(text, width, opts = {}) {
  const runs = Array.isArray(text) ? text : [t(text, { size: opts.size || 20, bold: opts.bold || false, color: opts.color || C.body, italics: opts.italics || false })];
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: opts.fill || C.white, type: ShadingType.CLEAR },
    margins: cm, verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ children: runs, alignment: opts.alignment || AlignmentType.LEFT, spacing: { before: 0, after: 0 } })],
  });
}

function spacer(h = 200) { return p("", { before: h, after: 0 }); }

// Solution card helper
function solutionCard(name, tagline, cosa, problema, valore, investimento) {
  const cw = [2200, 6826];
  const rows = [
    ["Cosa fa", cosa], ["Che problema risolve", problema], ["Valore atteso", valore], ["Investimento", investimento]
  ];
  return [
    p(name, { bold: true, size: 26, color: C.teal, after: 40 }),
    p(tagline, { italics: true, color: C.gray, after: 100 }),
    new Table({
      width: { size: TW, type: WidthType.DXA }, columnWidths: cw,
      rows: rows.map(([k, v], i) => new TableRow({ children: [
        dCell(k, cw[0], { bold: true, fill: C.paleTeal }),
        dCell(v, cw[1]),
      ]})),
    }),
    spacer(280),
  ];
}

// === BUILD ===
const children = [];

// =============================================
// COVER
// =============================================
children.push(spacer(2400));
children.push(p("Proposta di Investimento | Ecosistema AI Wave 2", { size: 44, bold: true, color: C.teal, alignment: AlignmentType.CENTER, after: 160 }));
children.push(p("Aggiornamento perimetro e formalizzazione investimento", { size: 22, color: C.gray, alignment: AlignmentType.CENTER, after: 600 }));

children.push(spacer(400));
children.push(p([t("Cliente: ", { size: 20, color: C.gray }), t("Noloop S.r.l.", { size: 20, bold: true })], { alignment: AlignmentType.CENTER, after: 40 }));
children.push(p([t("Destinatari: ", { size: 20, color: C.gray }), t("Paolo Donzelli (AD) — Laura Garbarino (Direzione Operativa)", { size: 20, bold: true })], { alignment: AlignmentType.CENTER, after: 40 }));
children.push(p([t("Data: ", { size: 20, color: C.gray }), t("27 marzo 2026", { size: 20, bold: true })], { alignment: AlignmentType.CENTER, after: 40 }));
children.push(p([t("Classificazione: ", { size: 20, color: C.gray }), t("Riservato", { size: 20, bold: true })], { alignment: AlignmentType.CENTER, after: 40 }));
children.push(p("Rif.: HeyAI/NL/W2/2026-03", { size: 18, color: C.gray, alignment: AlignmentType.CENTER }));

// =============================================
// 1. EXECUTIVE SUMMARY
// =============================================
children.push(p("1. Executive Summary", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

children.push(p("Il presente documento aggiorna la proposta di Digital Transformation presentata alla Direzione Noloop il 10 marzo 2026 e ne formalizza il perimetro di investimento alla luce delle indicazioni ricevute.", { after: 100 }));

children.push(p("L'ecosistema Wave 2 comprende 8 soluzioni interconnesse, progettate a partire dall'analisi dei processi operativi condotta con 6 reparti. Rispetto alla presentazione originale, il perimetro è stato razionalizzato: il Modulo Creativo (Pitch) è stato rimosso, LeadMe è stato ridefinito per includere anche la gestione clienti e il task management operativo, e Flow è stato focalizzato sull'orchestrazione dei flussi di lavoro.", { after: 100 }));

// Garbarino paragraph
children.push(p("Le priorità operative indicate dalla Direzione sono state recepite integralmente. Il perimetro che segue riflette le scelte condivise nella sessione del 10 marzo e le successive indicazioni su LeadMe e Flow.", { after: 200, italics: true, color: C.gray }));

// Executive summary table
const esColW = [4800, 4226];
const esData = [
  ["Investimento a listino", "€327.000"],
  ["Sconto ecosistema", "-€12.000"],
  ["Investimento bundle", "€315.000"],
  ["Risparmio operativo a regime", "~€299.000/anno"],
  ["FTE liberate", "~5"],
  ["Payback complessivo", "~13 mesi"],
  ["Dilazione pagamenti", "9 mesi (Mar–Nov 2026)"],
  ["Iperammortamento (illustrativo)", "~€136.000 di risparmio fiscale"],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: esColW,
  rows: esData.map(([k, v], i) => new TableRow({ children: [
    dCell(k, esColW[0], { bold: true, fill: i === 2 ? C.lightTeal : (i % 2 === 0 ? C.paleTeal : C.white) }),
    dCell(v, esColW[1], { bold: i === 2, fill: i === 2 ? C.lightTeal : (i % 2 === 0 ? C.paleTeal : C.white), alignment: AlignmentType.RIGHT, color: i === 2 ? C.teal : C.body }),
  ]})),
}));

children.push(spacer(120));
children.push(p("I benefici sono incrementali: le prime 3 soluzioni saranno operative entro aprile 2026, con valore misurabile già dal primo mese di rilascio. L'intero ecosistema sarà completato entro novembre 2026.", { italics: true, color: C.gray }));

// =============================================
// 2. AGGIORNAMENTO PERIMETRO
// =============================================
children.push(p("2. Aggiornamento del Perimetro", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

children.push(p("A seguito delle indicazioni della Direzione emerse nella sessione del 10 marzo, il perimetro è stato aggiornato come segue.", { after: 200 }));

const chColW = [2200, 6826];
const chData = [
  ["Pitch (Modulo Creativo)", "Rimosso dal perimetro. La Direzione ha indicato che la priorità è sull'efficienza operativa e gestionale, non sulla produzione creativa. Eventualmente valutabile in una fase successiva."],
  ["LeadMe Evolution", "Ridefinito. Il perimetro ora comprende: pipeline commerciale (Kanban con semafori e alert), CRM clienti con dettaglio commesse, e gestione task operativi per commessa. Le funzionalità di scraping attivo, icebreaker AI e notifiche proattive sono state collocate in Fase 2 da valutare successivamente."],
  ["Flow — Task Mgmt", "Scope razionalizzato. Flow mantiene il ruolo di orchestratore dei flussi operativi: integrazione con Minutes (Trascrizione Call) per la ricezione dei task, alimentazione automatica di Link (Gestionale) e coordinamento cross-reparto."],
];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: chColW,
  rows: [
    new TableRow({ children: [hCell("Soluzione", chColW[0]), hCell("Modifica", chColW[1])] }),
    ...chData.map(([s, d]) => new TableRow({ children: [dCell(s, chColW[0], { bold: true }), dCell(d, chColW[1])] })),
  ],
}));

children.push(spacer(160));
children.push(p("Le soluzioni confermate senza modifiche sono: Link (Sistema Gestionale), Sally (Agente 360°), OnSite (App Partecipanti), Venue Finder Evolution, Crowd Integrazione Incassi e Minutes Call Esterne."));

// =============================================
// 3. L'ECOSISTEMA — LE SOLUZIONI
// =============================================
children.push(p("3. L'Ecosistema Wave 2 — Le Soluzioni", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

children.push(p("Ogni soluzione interviene su un problema operativo specifico. Di seguito il dettaglio organizzato per priorità di implementazione.", { after: 200 }));

// --- 3.1 QUICK WINS ---
children.push(p("3.1 Quick Wins — Partenza Immediata", { heading: HeadingLevel.HEADING_2, after: 80 }));
children.push(p("Soluzioni a basso effort e alto ritorno immediato. Operative entro le prime 5 settimane.", { italics: true, color: C.gray, after: 200 }));

// VF (Carlo's revised text)
children.push(...solutionCard(
  "Venue Finder Evolution",
  "Da ricerca manuale a presentazione automatica",
  "Genera automaticamente la presentazione grafica completa in PowerPoint per il reparto Programmazione a seguito della ricezione del brief e dell'analisi guidata online per la ricerca location/attività. Evoluzione della soluzione già in produzione.",
  "Il reparto produzione dedica oltre 1.500 ore/anno all'impaginazione manuale di presentazioni logistiche. Anche per location già proposte si riparte da zero ogni volta.",
  "€36.400/anno di risparmio operativo — 1.225 ore liberate. Payback in 3 mesi.",
  "€8.000"
));

// Crowd (Carlo's revised text)
children.push(...solutionCard(
  "Crowd — Integrazione Incassi",
  "Da piattaforma interna a prodotto vendibile",
  "Integra la gestione degli incassi (es. Stripe) nella piattaforma Crowd già in produzione, abilitandone la vendita in subscription ad altre agenzie che organizzano eventi con Noloop come partner commerciale.",
  "Senza pagamenti integrati, Crowd non è vendibile sul mercato esterno. Con questa funzionalità diventa un asset commerciale a revenue ricorrente.",
  "Revenue ricorrente da licenze a terze agenzie. Noloop come partner tecnologico nel settore eventi.",
  "€15.000"
));

// Minutes (Carlo's revised text)
children.push(...solutionCard(
  "Minutes — Call Esterne",
  "Da tool limitato a copertura completa",
  "Agente AI che partecipa alla call o registra esternamente, con riconoscimento e distinzione delle voci dei partecipanti. Evoluzione dello strumento più apprezzato e utilizzato attualmente da Noloop.",
  "Oggi Minutes è inutilizzabile quando il cliente non abilita la trascrizione Teams o in riunioni in presenza — circa il 40% delle call operative.",
  "+40% di copertura sulle call operative. Massimizza il ROI dell'investimento 2025.",
  "€9.000"
));

// --- 3.2 PRIORITÀ STRATEGICHE ---
children.push(p("3.2 Priorità Strategiche", { heading: HeadingLevel.HEADING_2, pageBreakBefore: true, after: 80 }));
children.push(p("Soluzioni che costruiscono l'architettura digitale dei nuovi processi operativi. Generano le maggiori ottimizzazioni e trasformano il modo in cui Noloop gestisce le commesse.", { italics: true, color: C.gray, after: 200 }));

// Link (ENRICHED from transcript)
children.push(...solutionCard(
  "Link — Sistema Gestionale",
  "Dal compilare al decidere: un dato, inserito una volta, arriva ovunque",
  "Il gestionale che si collega con Business Central e fa da intermediario tra tutti gli applicativi. Oggi un PM che deve fare una fatturazione attiva manda un'email e riscrive gli stessi dati del budget. Con Link, con un click il dato va sia verso Business Central che verso il Progress. Link gestisce il ciclo di vita completo della commessa: budget a 3 stadi (previsionale, pre-chiusura, consuntivo), fatturazione attiva e passiva, e blocco chiusura — non puoi chiudere un evento se non quadrano tutte le fatture con BC. Il Progress Excel viene sostituito da una dashboard digitale per la Direzione.",
  "I Responsabili dedicano 2 ore/settimana a compilare un Progress che duplica dati su BC. Ogni dato relativo a budget e fatturazioni attive e passive viene inserito almeno due volte fra vari sistemi, documenti o email. Il 10% delle commesse arriva a chiusura con fatture mancanti. La Direzione non ha visibilità in tempo reale.",
  "€60.000/anno di risparmio operativo — 1.500+ ore liberate. Payback in 18 mesi. Base per evoluzioni future (prima nota automatizzata, controllo spese Revolut).",
  "€80.000"
));

// OnSite (validated, no changes)
children.push(...solutionCard(
  "OnSite — AI Event Companion",
  "App = credibilità, dati e revenue",
  "Applicazione mobile per i partecipanti: assistenza in tempo reale, informazioni personalizzate, networking tra partecipanti, raccolta feedback strutturata con dati aggregati per il report post-evento al cliente.",
  "Lo staff on-site è impegnato a rispondere a richieste informative ripetitive anziché concentrarsi sull'esperienza. I feedback vengono raccolti in modo destrutturato o non raccolti affatto.",
  "Revenue aggiuntiva per evento: OnSite venduto come servizio premium in up-sell al cliente aumenta il margine senza costi variabili. Feedback strutturati e NPS diventano il report che dimostra valore al committente.",
  "€35.000"
));

// Sally (ENRICHED from transcript)
children.push(...solutionCard(
  "Sally — Agente Noloop 360°",
  "Non aspetta le domande: ti anticipa. Un collega che sa già tutto di Noloop.",
  "Un'AI con la memoria e il contesto di tutta l'azienda. Sally conosce le procedure, i documenti, lo storico clienti, le commesse attive e ogni informazione presente sugli altri applicativi. Non è un chatbot generico che aspetta una domanda: monitora proattivamente scadenze e task, segnala ritardi, ti avvisa se qualcosa è rimasto indietro. Se un PM si dimentica di aggiornare un task, Sally lo contatta e lo guida. Puoi chiederle qualsiasi reportistica — \"qual è il commerciale con il margine più alto questo trimestre?\" — e ti risponde con i dati reali dell'azienda.",
  "La conoscenza procedurale è nella testa di poche risorse, generando 120+ richieste/settimana al controllo di gestione. Le procedure sono disperse in centinaia di file che nessuno consulta. I documenti vengono compilati manualmente ogni volta.",
  "€77.486/anno di risparmio operativo — 1.980 ore liberate. Payback in 18 mesi. Più moduli si attivano, più Sally diventa il punto di accesso unico a tutta l'intelligenza operativa.",
  "€85.000"
));

// --- 3.3 SOLUZIONI RIDEFINITE ---
children.push(p("3.3 Soluzioni Ridefinite", { heading: HeadingLevel.HEADING_2, pageBreakBefore: true, after: 80 }));
children.push(p("LeadMe e Flow sono state ridefinite per riflettere le indicazioni della Direzione. Insieme coprono l'intero ciclo dalla gestione del lead alla chiusura della commessa.", { italics: true, color: C.gray, after: 200 }));

// LeadMe (REWRITTEN for executive)
children.push(...solutionCard(
  "LeadMe Evolution",
  "Tutto in un posto: il commerciale vede pipeline, clienti e attività senza rincorrere persone",
  "Oggi ogni commerciale gestisce i propri contatti, le trattative e le attività di follow-up su strumenti separati — CRM, email, fogli Excel, WhatsApp. LeadMe unifica tutto in un'unica vista: la pipeline New Business con gli stati di avanzamento, il CRM clienti con lo storico commesse, e i task operativi per commessa con scadenze e reminder automatici. Il capo reparto vede in tempo reale lo stato di ogni trattativa e ogni commessa. Se un ricontatto scade, il sistema lo segnala. Se un'opportunità si ferma, è visibile a tutti.",
  "Il commerciale non ha una vista unificata su pipeline e clienti. Le opportunità si tracciano a mano e i ricontatti scaduti non vengono intercettati — si stima che il 5-10% dei lead si perda per mancato follow-up. I task operativi vivono su email, WhatsApp e appunti.",
  "~€125.000/anno di risparmio combinato con Flow (dettaglio nella sezione Business Case). Le due soluzioni operano come un unico sistema integrato.",
  "€45.000"
));

// Flow (REWRITTEN for executive)
children.push(...solutionCard(
  "Flow — Task Management",
  "Il coordinamento diventa automatico: da 30 messaggi WhatsApp a un click",
  "Oggi coordinare 260 commesse e circa 20.000 task all'anno significa rincorrere persone su 4 canali diversi. Flow centralizza tutto: i task nascono automaticamente dalle call su Minutes, si assegnano alle persone, si aggiornano con una nota vocale o una foto dal telefono, e i dati confluiscono automaticamente in Link — senza che nessuno debba riscrivere nulla. Il Client Lead vede in un'unica schermata cosa sta facendo ogni reparto su ogni commessa. Le scadenze contrattuali vengono monitorate automaticamente su 650+ contratti/anno.",
  "Il coordinamento di 260 commesse vive su canali frammentati. Ogni input richiede tempo per essere trasformato in azione. Le risorse dedicano fino al 70% del tempo a smistare task e rincorrere scadenze.",
  "~€125.000/anno di risparmio combinato con LeadMe (dettaglio nella sezione Business Case). Flow è il motore che alimenta automaticamente Link con i dati del lavoro quotidiano.",
  "€50.000 (ridotto da €75.000 — scope razionalizzato)"
));

// --- PLACEHOLDERS ---
children.push(p("[SPAZIO RISERVATO — Diagramma Architettura Ecosistema]", { pageBreakBefore: true, size: 28, bold: true, color: C.teal, alignment: AlignmentType.CENTER, after: 120 }));
children.push(p("Schema semplificato che illustra come le 8 soluzioni si collegano tra loro e con Business Central. Ogni dato viene generato una sola volta e fluisce automaticamente tra gli applicativi.", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, after: 200 }));
children.push(spacer(5500));
children.push(p("Figura 1 — Architettura Ecosistema Wave 2", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, size: 18 }));

children.push(p("[SPAZIO RISERVATO — Processo Operativo End-to-End]", { pageBreakBefore: true, size: 28, bold: true, color: C.teal, alignment: AlignmentType.CENTER, after: 120 }));
children.push(p("Acquisizione → Proposta → Conversione → Esecuzione → Chiusura. Per ogni fase, le soluzioni coinvolte e il valore generato.", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, after: 200 }));
children.push(spacer(5500));
children.push(p("Figura 2 — Processo Operativo E2E con Soluzioni Wave 2", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, size: 18 }));

// =============================================
// 4. BUSINESS CASE
// =============================================
children.push(p("4. Business Case", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

// 4.1 LeadMe + Flow
children.push(p("4.1 LeadMe + Flow — Gestione Commerciale e Coordinamento Operativo", { heading: HeadingLevel.HEADING_2, after: 100 }));

children.push(p("Quanto tempo si risparmia quando il commerciale non deve più rincorrere informazioni e il coordinamento dei task diventa automatico? Questo business case misura il risparmio combinato delle due soluzioni.", { after: 120, italics: true, color: C.gray }));

children.push(p("Il business case è presentato in forma combinata perché LeadMe e Flow operano come un unico sistema integrato: LeadMe gestisce la relazione commerciale e i task per commessa, Flow orchestra i flussi operativi che alimentano il gestionale. Il valore si genera dalla sinergia tra i due moduli.", { after: 200 }));

const bcColW = [3800, 1700, 1700, 1826];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: bcColW,
  rows: [
    new TableRow({ children: [hCell("Area di risparmio", bcColW[0]), hCell("Ore senza AI", bcColW[1], { alignment: AlignmentType.RIGHT }), hCell("Ore con AI", bcColW[2], { alignment: AlignmentType.RIGHT }), hCell("Delta", bcColW[3], { alignment: AlignmentType.RIGHT })] }),
    ...([
      ["Tracking e gestione pipeline", "864", "128", "-85%", false],
      ["Task management e notifiche", "385", "128", "-67%", true],
      ["Coordinamento Senior", "2.722", "1.771", "-35%", false],
      ["Coordinamento PM e Operativi", "5.184", "3.888", "-25%", true],
      ["Scadenze contrattuali e reminder", "227", "49", "-78%", false],
    ].map(([a, b, c, d, alt]) => new TableRow({ children: [
      dCell(a, bcColW[0], { fill: alt ? C.paleTeal : C.white }),
      dCell(b, bcColW[1], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }),
      dCell(c, bcColW[2], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }),
      dCell(d, bcColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: alt ? C.paleTeal : C.white }),
    ] }))),
    new TableRow({ children: [
      dCell([t("RISPARMIO STIMATO", { size: 20, bold: true, color: C.teal })], bcColW[0], { fill: C.lightTeal }),
      dCell("", bcColW[1], { fill: C.lightTeal }), dCell("", bcColW[2], { fill: C.lightTeal }),
      dCell([t("~€125.000/anno", { size: 20, bold: true, color: C.teal })], bcColW[3], { alignment: AlignmentType.RIGHT, fill: C.lightTeal }),
    ] }),
  ],
}));

children.push(spacer(160));
children.push(p("Come abbiamo calcolato questo numero", { bold: true, size: 22, color: C.teal, after: 80 }));
children.push(p("Abbiamo misurato quanto tempo le persone dedicano oggi ad attività manuali di tracking e coordinamento, e quanto ne dedicherebbero con il sistema integrato. Le voci di pipeline e task management derivano dal team commerciale (9 risorse), le voci di coordinamento dal modello operativo su 46 risorse e 260 commesse/anno. Le ore sono valorizzate al costo orario aziendale per profilo. La stima è ridotta del 25% per prudenza.", { after: 100 }));
children.push(p("Questa stima è conservativa: non include i benefici di accelerazione commerciale (scraping attivo, icebreaker AI, notifiche proattive) previsti in Fase 2, né i risparmi sul tracking delle risorse di supporto.", { italics: true, color: C.gray, after: 200 }));

// BC Summary
const bcsColW = [4513, 4513];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: bcsColW,
  rows: [
    ...[["Investimento combinato (listino)", "€95.000"], ["Risparmio stimato a regime", "~€125.000/anno"], ["Ore liberate", "~3.500/anno"], ["Payback combinato", "~10 mesi"]].map(([k, v], i) => new TableRow({ children: [
      dCell(k, bcsColW[0], { bold: true, fill: i % 2 === 0 ? C.paleTeal : C.white }),
      dCell(v, bcsColW[1], { alignment: AlignmentType.RIGHT, bold: true, fill: i % 2 === 0 ? C.paleTeal : C.white }),
    ] })),
  ],
}));

// 4.2 Confermati
children.push(p("4.2 Business Case Confermati", { heading: HeadingLevel.HEADING_2, pageBreakBefore: true, after: 100 }));
children.push(p("I seguenti business case sono stati presentati il 10 marzo e restano invariati.", { after: 200 }));

// VF BC
children.push(p("Venue Finder Evolution", { bold: true, size: 22, color: C.teal, after: 40 }));
children.push(p("Quanto si risparmia quando le presentazioni logistiche si generano in automatico anziché impaginarle a mano.", { italics: true, color: C.gray, after: 100 }));

const bc2ColW = [3800, 1700, 1700, 1826];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: bc2ColW,
  rows: [
    new TableRow({ children: [hCell("Area", bc2ColW[0]), hCell("Ore senza AI", bc2ColW[1], { alignment: AlignmentType.RIGHT }), hCell("Ore con AI", bc2ColW[2], { alignment: AlignmentType.RIGHT }), hCell("Delta", bc2ColW[3], { alignment: AlignmentType.RIGHT })] }),
    ...[["Produzione presentazioni logistiche", "1.000", "200", "-80%", false], ["Richieste di rework", "525", "100", "-80%", true]].map(([a, b, c, d, alt]) => new TableRow({ children: [
      dCell(a, bc2ColW[0], { fill: alt ? C.paleTeal : C.white }), dCell(b, bc2ColW[1], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }),
      dCell(c, bc2ColW[2], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }), dCell(d, bc2ColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: alt ? C.paleTeal : C.white }),
    ] })),
    new TableRow({ children: [dCell([t("RISPARMIO", { size: 20, bold: true, color: C.teal })], bc2ColW[0], { fill: C.lightTeal }), dCell("", bc2ColW[1], { fill: C.lightTeal }), dCell("", bc2ColW[2], { fill: C.lightTeal }), dCell([t("€36.400/anno", { size: 20, bold: true, color: C.teal })], bc2ColW[3], { alignment: AlignmentType.RIGHT, fill: C.lightTeal })] }),
  ],
}));
children.push(p("ROI 810% | Payback 3 mesi | 1.225 ore liberate | Adozione 90%", { size: 18, italics: true, color: C.gray, after: 280 }));

// Link BC
children.push(p("Link — Sistema Gestionale", { bold: true, size: 22, color: C.teal, after: 40 }));
children.push(p("Quanto si risparmia quando i dati si inseriscono una volta sola e il Progress si compila da solo.", { italics: true, color: C.gray, after: 100 }));
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: bc2ColW,
  rows: [
    new TableRow({ children: [hCell("Area", bc2ColW[0]), hCell("Ore senza AI", bc2ColW[1], { alignment: AlignmentType.RIGHT }), hCell("Ore con AI", bc2ColW[2], { alignment: AlignmentType.RIGHT }), hCell("Delta", bc2ColW[3], { alignment: AlignmentType.RIGHT })] }),
    ...[["Apertura commessa", "87", "17", "-80%", false], ["Compilazione Progress", "720", "108", "-85%", true], ["Chiusure incomplete", "140", "40", "-70%", false], ["Fatturazione attiva", "238", "48", "-80%", true], ["Fatturazione passiva", "694", "243", "-65%", false], ["Reporting direzione", "92", "28", "-70%", true]].map(([a, b, c, d, alt]) => new TableRow({ children: [
      dCell(a, bc2ColW[0], { fill: alt ? C.paleTeal : C.white }), dCell(b, bc2ColW[1], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }),
      dCell(c, bc2ColW[2], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }), dCell(d, bc2ColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: alt ? C.paleTeal : C.white }),
    ] })),
    new TableRow({ children: [dCell([t("RISPARMIO", { size: 20, bold: true, color: C.teal })], bc2ColW[0], { fill: C.lightTeal }), dCell("", bc2ColW[1], { fill: C.lightTeal }), dCell("", bc2ColW[2], { fill: C.lightTeal }), dCell([t("€60.000/anno", { size: 20, bold: true, color: C.teal })], bc2ColW[3], { alignment: AlignmentType.RIGHT, fill: C.lightTeal })] }),
  ],
}));
children.push(p("ROI 42% a 2 anni | Payback 18 mesi | 1.500+ ore liberate | Adozione 80%", { size: 18, italics: true, color: C.gray, after: 280 }));

// Sally BC
children.push(p("Sally — Agente Noloop 360°", { bold: true, size: 22, color: C.teal, after: 40, pageBreakBefore: true }));
children.push(p("Quanto si risparmia quando le 120 richieste/settimana al controllo di gestione trovano risposta da sole.", { italics: true, color: C.gray, after: 100 }));
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: bc2ColW,
  rows: [
    new TableRow({ children: [hCell("Area", bc2ColW[0]), hCell("Ore senza AI", bc2ColW[1], { alignment: AlignmentType.RIGHT }), hCell("Ore con AI", bc2ColW[2], { alignment: AlignmentType.RIGHT }), hCell("Delta", bc2ColW[3], { alignment: AlignmentType.RIGHT })] }),
    ...[["Q&A aziendale — rispondenti", "828", "256", "-69%", false], ["Q&A aziendale — richiedenti", "1.152", "461", "-60%", true], ["Compilazione documenti e form", "360", "162", "-55%", false], ["Policy e procedure", "105", "63", "-40%", true], ["Onboarding nuovi assunti", "600", "390", "-35%", false], ["Email/Audio-to-action", "1.027", "411", "-60%", true]].map(([a, b, c, d, alt]) => new TableRow({ children: [
      dCell(a, bc2ColW[0], { fill: alt ? C.paleTeal : C.white }), dCell(b, bc2ColW[1], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }),
      dCell(c, bc2ColW[2], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }), dCell(d, bc2ColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: alt ? C.paleTeal : C.white }),
    ] })),
    new TableRow({ children: [dCell([t("RISPARMIO", { size: 20, bold: true, color: C.teal })], bc2ColW[0], { fill: C.lightTeal }), dCell("", bc2ColW[1], { fill: C.lightTeal }), dCell("", bc2ColW[2], { fill: C.lightTeal }), dCell([t("€77.486/anno", { size: 20, bold: true, color: C.teal })], bc2ColW[3], { alignment: AlignmentType.RIGHT, fill: C.lightTeal })] }),
  ],
}));
children.push(p("ROI 52% a 2 anni | Payback 18 mesi | 1.980 ore liberate | Adozione 85%", { size: 18, italics: true, color: C.gray }));

// =============================================
// 5. RIEPILOGO INVESTIMENTO (restructured)
// =============================================
children.push(p("5. Riepilogo Investimento", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

// Cleaner table: 3 columns only
const invColW = [3500, 2763, 2763];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: invColW,
  rows: [
    new TableRow({ children: [hCell("Soluzione", invColW[0]), hCell("Investimento", invColW[1], { alignment: AlignmentType.RIGHT }), hCell("Risparmio atteso", invColW[2], { alignment: AlignmentType.RIGHT })] }),
    ...[
      ["Venue Finder Evolution", "€8.000", "€36.400/anno", false],
      ["Crowd Integrazione Incassi", "€15.000", "Revenue ricorrente", true],
      ["Minutes Call Esterne", "€9.000", "+40% copertura call", false],
      ["Link — Sistema Gestionale", "€80.000", "€60.000/anno", true],
      ["OnSite — AI Event Companion", "€35.000", "Up-sell per evento", false],
      ["Sally — Agente 360°", "€85.000", "€77.486/anno", true],
      ["LeadMe Evolution", "€45.000", "~€125.000/anno*", false],
      ["Flow — Task Management", "€50.000", "(combinato)", false],
    ].map(([n, i, r, alt]) => new TableRow({ children: [
      dCell(n, invColW[0], { bold: true, fill: alt ? C.paleTeal : C.white }),
      dCell(i, invColW[1], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }),
      dCell(r, invColW[2], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }),
    ] })),
    new TableRow({ children: [
      dCell([t("Totale a listino", { size: 20, bold: true, color: C.body })], invColW[0]),
      dCell([t("€327.000", { size: 20, bold: true })], invColW[1], { alignment: AlignmentType.RIGHT }),
      dCell("", invColW[2]),
    ] }),
    new TableRow({ children: [
      dCell([t("Sconto ecosistema", { size: 20, bold: true, color: C.green })], invColW[0]),
      dCell([t("-€12.000", { size: 20, bold: true, color: C.green })], invColW[1], { alignment: AlignmentType.RIGHT }),
      dCell("", invColW[2]),
    ] }),
    new TableRow({ children: [
      dCell([t("INVESTIMENTO BUNDLE", { size: 20, bold: true, color: C.white })], invColW[0], { fill: C.teal }),
      dCell([t("€315.000", { size: 20, bold: true, color: C.white })], invColW[1], { alignment: AlignmentType.RIGHT, fill: C.teal }),
      dCell([t("~€299.000/anno", { size: 20, bold: true, color: C.white })], invColW[2], { alignment: AlignmentType.RIGHT, fill: C.teal }),
    ] }),
  ],
}));
children.push(p("* Il risparmio di LeadMe e Flow è combinato (~€125.000/anno) perché le due soluzioni operano come un unico sistema integrato. Dettaglio nella sezione 4.1.", { size: 18, italics: true, color: C.gray, after: 200 }));

// ROI box
children.push(p("Ritorno sull'investimento a 24 mesi", { bold: true, size: 24, color: C.teal, after: 120 }));
const roiColW = [3008, 3009, 3009];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: roiColW,
  rows: [new TableRow({ children: [
    new TableCell({ borders, width: { size: roiColW[0], type: WidthType.DXA }, shading: { fill: C.paleTeal, type: ShadingType.CLEAR }, margins: cm, verticalAlign: VerticalAlign.CENTER,
      children: [p("INVESTIMENTO", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 20 }), p("€315.000", { size: 28, bold: true, color: C.teal, alignment: AlignmentType.CENTER })],
    }),
    new TableCell({ borders, width: { size: roiColW[1], type: WidthType.DXA }, shading: { fill: C.paleTeal, type: ShadingType.CLEAR }, margins: cm, verticalAlign: VerticalAlign.CENTER,
      children: [p("RISPARMIO 24 MESI", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 20 }), p("~€598.000", { size: 28, bold: true, color: C.teal, alignment: AlignmentType.CENTER })],
    }),
    new TableCell({ borders, width: { size: roiColW[2], type: WidthType.DXA }, shading: { fill: C.teal, type: ShadingType.CLEAR }, margins: cm, verticalAlign: VerticalAlign.CENTER,
      children: [p("VALORE NETTO", { size: 16, color: C.lightTeal, alignment: AlignmentType.CENTER, after: 20 }), p("+€283.000", { size: 28, bold: true, color: C.white, alignment: AlignmentType.CENTER })],
    }),
  ] })],
}));
children.push(p("Esclusi: revenue Crowd, up-sell OnSite, benefici fiscali iperammortamento, accelerazione commerciale Fase 2.", { size: 18, italics: true, color: C.gray }));

// =============================================
// 6. LEVA FISCALE
// =============================================
children.push(p("6. Leva Fiscale: Iperammortamento 2026", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

children.push(p("La Legge di Bilancio 2026 (L. 199/2025) ha reintrodotto l'iperammortamento per beni strumentali digitali, includendo esplicitamente software basati su AI interconnessi con il gestionale aziendale.", { after: 100 }));
children.push(p("L'ecosistema Wave 2, in quanto software AI integrato via API con Business Central, presenta le caratteristiche per rientrare nel perimetro agevolabile (beni immateriali Allegato V).", { after: 200 }));

const fColW = [1800, 1600, 1600, 1826, 2200];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: fColW,
  rows: [
    new TableRow({ children: [hCell("Investimento", fColW[0], { alignment: AlignmentType.RIGHT }), hCell("Maggioraz. 180%", fColW[1], { alignment: AlignmentType.RIGHT }), hCell("Deduz. totale", fColW[2], { alignment: AlignmentType.RIGHT }), hCell("Risparmio IRES 24%", fColW[3], { alignment: AlignmentType.RIGHT }), hCell("Costo effettivo netto", fColW[4], { alignment: AlignmentType.RIGHT })] }),
    new TableRow({ children: [
      dCell("€315.000", fColW[0], { bold: true, alignment: AlignmentType.RIGHT }),
      dCell("€567.000", fColW[1], { alignment: AlignmentType.RIGHT }),
      dCell("€882.000", fColW[2], { alignment: AlignmentType.RIGHT }),
      dCell([t("~€136.000", { size: 20, bold: true, color: C.green })], fColW[3], { alignment: AlignmentType.RIGHT }),
      dCell([t("~€179.000", { size: 20, bold: true, color: C.teal })], fColW[4], { alignment: AlignmentType.RIGHT }),
    ] }),
  ],
}));

children.push(spacer(160));
children.push(p("I valori sono illustrativi e basati sullo scaglione fino a €10M con aliquota IRES 24%. L'effettivo beneficio dipende dalla situazione fiscale specifica di Noloop e va validato con il consulente fiscale dell'azienda.", { size: 20, italics: true, color: C.gray }));

// =============================================
// 7. ROADMAP (text + Gantt only, no table)
// =============================================
children.push(p("7. Roadmap di Sviluppo", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

children.push(p("Lo sviluppo si articola su 9 mesi (marzo – novembre 2026, con pausa ad agosto) e segue tre livelli di priorità:", { after: 120 }));
children.push(p([t("Quick Wins (aprile): ", { bold: true, size: 22 }), t("Venue Finder, Minutes e Crowd — operative entro 5 settimane dall'avvio. Generano valore immediato e richiedono bassa complessità.", { size: 22 })], { after: 80 }));
children.push(p([t("Priorità strategiche (giugno-novembre): ", { bold: true, size: 22 }), t("Link, OnSite e Sally — le soluzioni che costruiscono l'architettura digitale e generano le maggiori ottimizzazioni.", { size: 22 })], { after: 80 }));
children.push(p([t("Soluzioni ridefinite (giugno-settembre): ", { bold: true, size: 22 }), t("LeadMe e Flow — inserite nella timeline in parallelo alle strategiche, completano il ciclo commerciale e operativo.", { size: 22 })], { after: 120 }));

children.push(p("Sally è trasversale a tutti gli applicativi: parte subito con l'infrastruttura base e cresce con ogni rilascio, completandosi con l'ultimo modulo a novembre.", { italics: true, color: C.gray, after: 120 }));

children.push(p("3 soluzioni live nelle prime 5 settimane. Il risparmio pro-rata 2026 (aprile–dicembre) è stimato in circa €190.000, al netto del ramp-up. 5 FTE liberate a regime significano capacità di crescere senza assumere.", { bold: true, color: C.teal, after: 200 }));

children.push(p("[SPAZIO RISERVATO — Diagramma Gantt]", { size: 26, bold: true, color: C.teal, alignment: AlignmentType.CENTER, after: 120 }));
children.push(p("Rappresentazione visiva della roadmap con dipendenze tra moduli e milestone di rilascio.", { alignment: AlignmentType.CENTER, color: C.gray, italics: true }));
children.push(spacer(4000));
children.push(p("Figura 3 — Gantt di Progetto Mar–Nov 2026", { alignment: AlignmentType.CENTER, color: C.gray, italics: true, size: 18 }));

// =============================================
// 8. PIANO FATTURAZIONE
// =============================================
children.push(p("8. Piano di Fatturazione e Flusso di Cassa", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

children.push(p("Pagamenti dilazionati su 9 mesi con logica 35% acconto / 30% a metà progetto / 35% al rilascio. Ogni tranche è condizionata alla validazione del deliverable corrispondente.", { after: 200 }));

const cfColW = [1000, 3100, 2200, 1400, 1326];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: cfColW,
  rows: [
    new TableRow({ children: [hCell("Mese", cfColW[0]), hCell("Soluzioni fatturate", cfColW[1]), hCell("Descrizione", cfColW[2]), hCell("Esborso", cfColW[3], { alignment: AlignmentType.RIGHT }), hCell("Cumulativo", cfColW[4], { alignment: AlignmentType.RIGHT })] }),
    ...[
      ["Mar", "VF, Min, Crowd, LeadMe, Sally", "Avvio progetto (acconti)", "€44.700*", "€44.700", false],
      ["Apr", "VF, Min, Crowd, Link", "Consegna Quick Wins + avvio Link", "€43.550", "€88.250", true],
      ["Mag", "Crowd, LeadMe, Flow", "Chiusura Crowd + avanzamento LM + avvio Flow", "€36.250", "€124.500", false],
      ["Giu", "LeadMe, Link, OnSite", "Consegna LeadMe + avanzamento Link + avvio OnSite", "€52.000", "€176.500", true],
      ["Lug", "Link, Flow", "Consegna Link + avanzamento Flow", "€43.000", "€219.500", false],
      ["Ago", "—", "Pausa sviluppo", "€0", "€219.500", true],
      ["Set", "Flow, OnSite", "Consegna Flow + avanzamento OnSite", "€28.000", "€247.500", false],
      ["Ott", "OnSite, Sally", "Consegna OnSite + avanzamento Sally", "€37.750", "€285.250", true],
      ["Nov", "Sally", "Consegna Sally — ecosistema completo", "€29.750", "€315.000", false],
    ].map(([m, s, d, e, c, alt]) => new TableRow({ children: [
      dCell(m, cfColW[0], { bold: true, fill: alt ? C.paleTeal : C.white }),
      dCell(s, cfColW[1], { size: 18, fill: alt ? C.paleTeal : C.white }),
      dCell(d, cfColW[2], { size: 18, fill: alt ? C.paleTeal : C.white }),
      dCell(e, cfColW[3], { alignment: AlignmentType.RIGHT, bold: true, fill: alt ? C.paleTeal : C.white }),
      dCell(c, cfColW[4], { alignment: AlignmentType.RIGHT, fill: alt ? C.paleTeal : C.white }),
    ] })),
  ],
}));

children.push(spacer(60));
children.push(p("* Il mese di marzo include lo sconto ecosistema di €12.000 applicato come riduzione sulla prima tranche.", { size: 18, italics: true, color: C.gray, after: 160 }));

// Cash flow summary
const cfSumColW = [3008, 3009, 3009];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: cfSumColW,
  rows: [new TableRow({ children: [
    new TableCell({ borders, width: { size: cfSumColW[0], type: WidthType.DXA }, shading: { fill: C.paleTeal, type: ShadingType.CLEAR }, margins: cm, verticalAlign: VerticalAlign.CENTER,
      children: [p("INVESTIMENTO TOTALE", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 20 }), p("€315.000", { size: 26, bold: true, color: C.teal, alignment: AlignmentType.CENTER })],
    }),
    new TableCell({ borders, width: { size: cfSumColW[1], type: WidthType.DXA }, shading: { fill: C.paleTeal, type: ShadingType.CLEAR }, margins: cm, verticalAlign: VerticalAlign.CENTER,
      children: [p("DILAZIONE", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 20 }), p("9 mesi", { size: 26, bold: true, color: C.teal, alignment: AlignmentType.CENTER })],
    }),
    new TableCell({ borders, width: { size: cfSumColW[2], type: WidthType.DXA }, shading: { fill: C.paleTeal, type: ShadingType.CLEAR }, margins: cm, verticalAlign: VerticalAlign.CENTER,
      children: [p("PICCO MENSILE", { size: 16, color: C.gray, alignment: AlignmentType.CENTER, after: 20 }), p("€52.000 (giu)", { size: 26, bold: true, color: C.teal, alignment: AlignmentType.CENTER })],
    }),
  ] })],
}));
children.push(p("Il piano di pagamento è indicativo e legato ai rilasci effettivi. L'intero investimento è in competenza 2026, compatibile con l'applicazione dell'iperammortamento.", { size: 18, italics: true, color: C.gray }));

// =============================================
// 9. PERIMETRO E PROSSIMI PASSI (was 10)
// =============================================
children.push(p("9. Perimetro Contrattuale e Prossimi Passi", { heading: HeadingLevel.HEADING_1, pageBreakBefore: true }));

children.push(p("Perimetro contrattuale", { bold: true, size: 24, color: C.teal, after: 100 }));
children.push(p("Il perimetro dell'investimento è definito dal Requirement Log allegato al presente documento (rif. Wave2_RequirementLog_27032026), che riporta in dettaglio 83 requisiti funzionali validati per ciascun modulo, di cui 72 classificati come must-have.", { after: 100 }));
children.push(p("Qualsiasi requisito non incluso nel log — incluse le funzionalità esplicitamente collocate in Fase 2 (scraping attivo, icebreaker AI, notifiche proattive, sincronizzazione calendario esterno) — richiederà quotazione e approvazione separata.", { after: 200 }));

children.push(p("Prossimi passi", { bold: true, size: 24, color: C.teal, after: 100 }));

const stColW = [500, 2500, 6026];
children.push(new Table({
  width: { size: TW, type: WidthType.DXA }, columnWidths: stColW,
  rows: [
    new TableRow({ children: [hCell("#", stColW[0], { alignment: AlignmentType.CENTER }), hCell("Fase", stColW[1]), hCell("Dettaglio", stColW[2])] }),
    ...[
      ["01", "Approvazione proposta", "Conferma del perimetro, del piano di investimento e della dilazione pagamenti da parte della Direzione."],
      ["02", "Formalizzazione contratto", "Sottoscrizione del contratto con allegato Requirement Log e piano di fatturazione."],
      ["03", "Kick-off di progetto", "Sessione di avvio con i referenti dei reparti coinvolti. Condivisione del piano operativo e attivazione dello sviluppo."],
      ["04", "Primo rilascio (Quick Wins)", "Venue Finder, Minutes e Crowd entro le prime 5 settimane dall'avvio."],
    ].map(([n, f, d], i) => new TableRow({ children: [
      dCell(n, stColW[0], { bold: true, alignment: AlignmentType.CENTER, fill: i % 2 === 0 ? C.paleTeal : C.white }),
      dCell(f, stColW[1], { bold: true, fill: i % 2 === 0 ? C.paleTeal : C.white }),
      dCell(d, stColW[2], { fill: i % 2 === 0 ? C.paleTeal : C.white }),
    ] })),
  ],
}));

children.push(spacer(600));
children.push(p("HeyAI S.r.l.", { bold: true, size: 22, color: C.teal, alignment: AlignmentType.RIGHT }));
children.push(p("Via Parigi 11, 00185 Roma (RM)", { size: 18, color: C.gray, alignment: AlignmentType.RIGHT }));

// === BUILD DOC ===
const logoData = fs.readFileSync("/home/claude/heyai_logo.png");

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Calibri", size: 22, color: C.body } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Calibri", color: C.teal },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Calibri", color: C.body },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [
            new ImageRun({ type: "png", data: logoData, transformation: { width: 80, height: 56 }, altText: { title: "HeyAI", description: "HeyAI Logo", name: "logo" } }),
            new TextRun({ children: ["\t"], font: "Calibri", size: 18 }),
            t("HeyAI S.r.l.  |  Via Parigi 11, 00185 Roma", { size: 18, color: C.gray }),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          spacing: { after: 200 },
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [
            t("Riservato — Noloop × HeyAI Wave 2", { size: 16, color: C.gray }),
            new TextRun({ children: ["\t"], font: "Calibri", size: 16 }),
            t("Pagina ", { size: 16, color: C.gray }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Calibri", size: 16, color: C.gray }),
          ],
          tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
          border: { top: { style: BorderStyle.SINGLE, size: 2, color: C.lightTeal, space: 4 } },
        })],
      }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Noloop_Wave2_Proposta_v2.docx", buffer);
  console.log("OK");
});