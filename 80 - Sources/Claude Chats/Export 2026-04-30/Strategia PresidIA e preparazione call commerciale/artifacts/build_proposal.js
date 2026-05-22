const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, Header, Footer, AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType, HeadingLevel, PageNumber } = require('docx');
const fs = require('fs');

// HeyAI brand colors
const TEAL = "156082";
const NAVY = "1F4E79";
const NAVY_DARK = "0F4761";
const GRAY_TEXT = "595959";
const GRAY_LIGHT = "F2F2F2";
const BORDER_GRAY = "CCCCCC";
const WHITE = "FFFFFF";

// ============= HELPERS =============

function richPara(runs, after = 200, alignment = AlignmentType.LEFT) {
  return new Paragraph({
    spacing: { after },
    alignment,
    children: runs.map(r => new TextRun({
      text: r.text,
      bold: r.bold || false,
      italics: r.italics || false,
      color: r.color || "000000",
      size: r.size || 20,
      font: r.font || "Aptos",
      break: r.break || 0,
    }))
  });
}

function para(text, after = 200) {
  return new Paragraph({
    spacing: { after, line: 280 },
    alignment: AlignmentType.JUSTIFIED,
    children: [new TextRun({ text, font: "Aptos", size: 20, color: "000000" })]
  });
}

function paraBold(text, after = 200) {
  return new Paragraph({
    spacing: { after },
    children: [new TextRun({ text, font: "Aptos", size: 20, bold: true, color: "000000" })]
  });
}

function heading1(text) {
  return new Paragraph({
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, font: "Aptos", size: 28, bold: true, color: TEAL })]
  });
}

function heading2(text) {
  return new Paragraph({
    spacing: { before: 280, after: 160 },
    children: [new TextRun({ text, font: "Aptos", size: 24, bold: true, color: NAVY })]
  });
}

function heading3(text) {
  return new Paragraph({
    spacing: { before: 200, after: 120 },
    children: [new TextRun({ text, font: "Aptos", size: 22, bold: true, color: NAVY_DARK })]
  });
}

function bullet(text, level = 0) {
  return new Paragraph({
    spacing: { after: 100 },
    indent: { left: 720 + (level * 360), hanging: 360 },
    children: [
      new TextRun({ text: "•  ", font: "Aptos", size: 20, color: TEAL, bold: true }),
      new TextRun({ text, font: "Aptos", size: 20, color: "000000" })
    ]
  });
}

function bulletBold(label, text) {
  return new Paragraph({
    spacing: { after: 100 },
    indent: { left: 720, hanging: 360 },
    children: [
      new TextRun({ text: "•  ", font: "Aptos", size: 20, color: TEAL, bold: true }),
      new TextRun({ text: label + " ", font: "Aptos", size: 20, bold: true, color: "000000" }),
      new TextRun({ text, font: "Aptos", size: 20, color: "000000" })
    ]
  });
}

function tableCell(text, opts = {}) {
  const isBold = opts.bold || opts.header || false;
  const color = opts.header ? WHITE : "000000";
  const bgColor = opts.bgColor || (opts.header ? NAVY : null);
  const align = opts.align || AlignmentType.LEFT;
  
  const cellProps = {
    children: [new Paragraph({
      alignment: align,
      spacing: { before: 60, after: 60 },
      children: [new TextRun({ text, font: "Aptos", size: 19, bold: isBold, color })]
    })],
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: BORDER_GRAY },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: BORDER_GRAY },
      left: { style: BorderStyle.SINGLE, size: 4, color: BORDER_GRAY },
      right: { style: BorderStyle.SINGLE, size: 4, color: BORDER_GRAY },
    }
  };
  
  if (bgColor) {
    cellProps.shading = { type: ShadingType.SOLID, color: bgColor, fill: bgColor };
  }
  
  return new TableCell(cellProps);
}

function disclaimerBlock(label, text) {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    indent: { left: 200, right: 200 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 12, color: TEAL, space: 8 }
    },
    shading: { type: ShadingType.SOLID, color: GRAY_LIGHT, fill: GRAY_LIGHT },
    children: [
      new TextRun({ text: label + " ", font: "Aptos", size: 18, bold: true, color: NAVY_DARK }),
      new TextRun({ text, font: "Aptos", size: 18, italics: true, color: GRAY_TEXT })
    ]
  });
}

function placeholderBlock(label, description) {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    indent: { left: 200, right: 200 },
    border: {
      top: { style: BorderStyle.DASHED, size: 4, color: TEAL, space: 4 },
      bottom: { style: BorderStyle.DASHED, size: 4, color: TEAL, space: 4 },
      left: { style: BorderStyle.DASHED, size: 4, color: TEAL, space: 4 },
      right: { style: BorderStyle.DASHED, size: 4, color: TEAL, space: 4 },
    },
    shading: { type: ShadingType.SOLID, color: "FFF8E1", fill: "FFF8E1" },
    children: [
      new TextRun({ text: "[ " + label + " ] ", font: "Aptos", size: 18, bold: true, color: "B25400" }),
      new TextRun({ text: description, font: "Aptos", size: 18, italics: true, color: "B25400" })
    ]
  });
}

// ============= CONTENT BUILDING =============

const children = [];

// HEADER COMPANY INFO
children.push(richPara([
  { text: "HeyAI S.r.l.", bold: true, size: 20 },
  { text: "Sede legale: Via Parigi 11, 00185 Roma (RM)", size: 18, color: GRAY_TEXT, break: 1 },
  { text: "info@heyaidigital.it | www.heyaidigital.it", size: 18, color: GRAY_TEXT, break: 1 },
], 200));

// TITLE BLOCK
children.push(new Paragraph({
  spacing: { after: 80 },
  children: [new TextRun({ text: "Proposta di Investimento", font: "Aptos", size: 36, bold: true, color: TEAL })]
}));
children.push(new Paragraph({
  spacing: { after: 40 },
  children: [new TextRun({ text: "PresidIA — Piattaforma di Governance Organizzativa del Lavoro per PMI", font: "Aptos", size: 28, color: NAVY })]
}));
children.push(new Paragraph({
  spacing: { after: 300 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL, space: 8 } },
  children: [new TextRun({ text: "Aprile 2026", font: "Aptos", size: 20, color: GRAY_TEXT, italics: true })]
}));

// =============================
// 1. OGGETTO DELLA PROPOSTA
// =============================
children.push(heading1("1. Oggetto della Proposta"));
children.push(para("La presente proposta riguarda la progettazione, lo sviluppo e l'implementazione di PresidIA, una piattaforma digitale di governance organizzativa del lavoro pensata per le piccole e medie imprese italiane."));
children.push(para("PresidIA non è un software paghe, non è un gestionale HR tradizionale e non formula pareri professionali. È un sistema che trasforma i cedolini paga — un documento che ogni azienda già produce ogni mese — in una fotografia organizzativa strutturata con indicatori preventivi a semaforo, generando consapevolezza per l'impresa, segnalazioni contestualizzate per il consulente del lavoro e dati aggregati e anonimizzati per l'associazione di categoria."));
children.push(para("Il primo rilascio è verticale sul CCNL Commercio — Terziario, sottosettore pubblici esercizi. L'architettura è progettata per essere parametrica e scalabile, predisposta all'estensione futura ad altri CCNL e settori senza riscrittura del codice sorgente."));
children.push(para("Per il dettaglio completo dei requisiti funzionali si rimanda al Requirement Log allegato alla presente proposta, che costituisce parte integrante dell'offerta."));

// =============================
// 2. LA SOLUZIONE
// =============================
children.push(heading1("2. La Soluzione"));
children.push(para("PresidIA opera come layer informativo tra tre attori del rapporto di lavoro: l'impresa, il consulente del lavoro e l'associazione di categoria. Il flusso operativo è lineare e progettato per ridurre al minimo l'effort dell'utente finale."));

children.push(heading2("2.1 Il flusso operativo"));
children.push(para("L'azienda si registra alla piattaforma, configura il proprio profilo (tipologia di attività, orari, dimensione operativa, distribuzione del lavoro) e collega i soggetti di riferimento: il consulente del lavoro come riferimento tecnico-professionale, opzionalmente un referente sicurezza, e l'associazione di categoria con consenso esplicito al trattamento dei dati aggregati."));
children.push(para("Ogni mese, l'azienda carica i propri cedolini paga in formato PDF — è l'unica attività periodica richiesta. Il sistema estrae automaticamente i dati contrattuali, retributivi e organizzativi necessari, li struttura in un archivio analitico pseudonimizzato e li elabora attraverso un motore di regole configurato sul CCNL applicato."));
children.push(para("Il risultato è una dashboard organizzativa immediata: struttura del personale, costo del lavoro, indicatori di equilibrio, monitoraggi su ferie, straordinari, voci retributive particolari, scadenze contrattuali, turnover, sicurezza sul lavoro, assenteismo, parità di genere. Ogni indicatore è espresso attraverso un sistema a semaforo a quattro stati (verde stabile, giallo da monitorare, rosso attenzione, blu decisione organizzativa registrata)."));
children.push(para("Le segnalazioni rilevanti vengono notificate al consulente del lavoro per le valutazioni di competenza professionale, mentre i dati aggregati e anonimizzati sui temi di interesse sistemico (assenteismo, parità di genere) raggiungono l'associazione di categoria in forma sintetica."));

children.push(heading2("2.2 I tre profili utente"));
children.push(bulletBold("Azienda (PMI):", "vede la propria dashboard organizzativa completa, può qualificare situazioni come decisioni organizzative tracciate e interrogare un sistema Q&A per chiarimenti normativi sul CCNL applicato."));
children.push(bulletBold("Consulente del lavoro:", "vede tutto quello che vede l'azienda più una dashboard aggregata multi-azienda con letture incrociate, pattern avanzati e alert preventivi non visibili alle singole aziende. La soluzione gli consente di passare da una consulenza reattiva a una preventiva e strutturata."));
children.push(bulletBold("Associazione di categoria:", "riceve dati sintetici e non nominativi limitati a tre aree (assenteismo, parità di genere, differenze retributive) e accede a una dashboard territoriale aggregata che restituisce trend di settore."));

children.push(heading2("2.3 Le aree di monitoraggio"));
children.push(para("PresidIA copre in modo strutturato dieci aree di monitoraggio organizzativo, ciascuna alimentata dagli stessi dati estratti dai cedolini ma letta con una chiave specifica:"));
children.push(bullet("Osservatorio organizzativo dell'attività con indicatore di copertura"));
children.push(bullet("Inquadramento e mansioni con confronto livello/declaratorie CCNL"));
children.push(bullet("Monitoraggio ferie con verifica di rispetto organizzativo (2 settimane nell'anno, residuo entro 18 mesi)"));
children.push(bullet("Monitoraggio straordinari con frequenza, andamento mensile e proiezione annua"));
children.push(bullet("Part-time e struttura retributiva con lettura di pattern integrati"));
children.push(bullet("Scadenze contrattuali con monitoraggio di proroghe e durata complessiva"));
children.push(bullet("Dinamica organico e turnover"));
children.push(bullet("Voci retributive particolari con flusso decisionale di qualificazione"));
children.push(bullet("Assenteismo per malattia con lettura aggregata"));
children.push(bullet("Parità di genere con indicatori sintetici di composizione e distribuzione retributiva"));
children.push(bullet("Sicurezza sul lavoro come modulo autonomo con checklist degli adempimenti"));

children.push(heading2("2.4 Funzionalità trasversali"));
children.push(bulletBold("Q&A normativo:", "una sezione che risponde a domande sul CCNL e sulla normativa del lavoro citando i riferimenti agli articoli, con risposte sempre formulate in forma informativa e mai consulenziale."));
children.push(bulletBold("Registro storico e tracciabilità:", "memoria organizzativa dell'azienda nel tempo, con portabilità garantita in caso di cambio del consulente."));
children.push(bulletBold("Report annuale:", "generazione automatica di un report annuale esportabile in PDF con la sintesi degli indicatori e delle decisioni dell'anno."));
children.push(bulletBold("Sistema notifiche differenziato:", "routing intelligente delle segnalazioni tra azienda, consulente, referente sicurezza e associazione, secondo regole configurabili e con rispetto dei consensi."));

// =============================
// 3. APPROCCIO METODOLOGICO
// =============================
children.push(heading1("3. Approccio Metodologico"));
children.push(para("HeyAI affianca il Cliente lungo l'intero percorso, dalla definizione strategica del prodotto fino al rilascio operativo, agendo come partner tecnologico e consulenziale a 360 gradi. L'approccio è iterativo, basato su milestone definite e su un coinvolgimento attivo del Cliente nei momenti chiave del progetto."));

children.push(heading2("3.1 Le fasi di lavoro"));
children.push(bulletBold("Fase 1 — Discovery e design tecnico (2 settimane).", "Allineamento finale sui requisiti, validazione dello schema dati logico già condiviso dal Cliente, definizione dell'architettura tecnica di dettaglio e delle scelte infrastrutturali, raccolta dei template dei principali software paghe per la fase di training del modulo OCR."));
children.push(bulletBold("Fase 2 — Sviluppo MVP (8-10 settimane).", "Implementazione iterativa di tutti i moduli funzionali secondo il Requirement Log allegato. Sviluppo per blocchi tematici con check intermedi di avanzamento e validazione progressiva da parte del Cliente."));
children.push(bulletBold("Fase 3 — Test e collaudo (1-2 settimane).", "Test funzionali e di integrazione, calibrazione del modulo OCR sui template raccolti, validazione dei flussi di notifica, test di usabilità su casi reali forniti dal Cliente."));
children.push(bulletBold("Fase 4 — Go-live e supporto iniziale (1 settimana).", "Rilascio in produzione, configurazione iniziale dell'ambiente, accompagnamento operativo del Cliente nelle prime settimane di utilizzo."));

children.push(heading2("3.2 Il ruolo del Cliente nello sviluppo"));
children.push(para("Per garantire la massima qualità del prodotto finale, in particolare sul modulo di estrazione dati dai cedolini, è previsto un coinvolgimento attivo del Cliente nelle fasi di setup. Questo coinvolgimento riduce significativamente il rischio tecnico ed è uno dei fattori che rendono possibile contenere il costo di sviluppo dell'MVP."));
children.push(para("In particolare, il Cliente fornirà:"));
children.push(bullet("I template dei principali software paghe italiani (Zucchetti, TeamSystem e gli altri principali), con le voci di interesse identificate e l'interpretazione corretta dei dati"));
children.push(bullet("Le casistiche limite note dall'esperienza professionale (indennità trasfertistica, voci non imponibili, configurazioni particolari) con la loro corretta lettura"));
children.push(bullet("Esempi reali di cedolini su cui testare il sistema prima della commercializzazione"));
children.push(bullet("Validazione dei contenuti normativi che alimenteranno il motore di regole CCNL"));

children.push(para("Dopo il go-live, nei primi mesi di esercizio è previsto un supporto continuativo del Cliente sulle eventuali casistiche limite che il modello OCR non riuscirà a processare con sufficiente confidenza. Il sistema notificherà direttamente al Cliente i casi dubbi, il Cliente confermerà o correggerà l'interpretazione, e il modello apprenderà progressivamente dalle correzioni — senza alcun coinvolgimento del cliente finale (la PMI), che vedrà sempre dati puliti e validati."));

// =============================
// 4. ARCHITETTURA TECNICA
// =============================
children.push(heading1("4. Architettura Tecnica"));
children.push(para("La piattaforma è progettata secondo i principi di privacy by design, scalabilità multi-tenant e separazione netta tra dati identificativi e dati analitici. Lo schema dati logico, già condiviso con il Cliente, costituisce la base di riferimento per l'implementazione."));

children.push(heading2("4.1 Architettura privacy by design"));
children.push(para("Il sistema adotta un'architettura a doppio archivio:"));
children.push(bulletBold("Archivio A — identificativo:", "contiene nominativi dei dipendenti, dati identificativi aziendali, documenti caricati, mansione effettivamente svolta e collegamento dipendente ↔ ID pseudonimo. L'accesso è riservato all'azienda e ai soggetti autorizzati."));
children.push(bulletBold("Archivio B — analitico pseudonimizzato:", "contiene esclusivamente ID anonimi, dati contrattuali, retributivi e organizzativi estratti, indicatori calcolati. Il motore di analisi opera esclusivamente su questo archivio."));
children.push(para("La ricomposizione finale tra dati analitici e nominativi avviene solo nell'Archivio A al momento della visualizzazione all'utente. Questo approccio garantisce piena conformità GDPR e applica concretamente il principio di minimizzazione dei dati."));

children.push(heading2("4.2 Multi-tenancy e coni di visibilità"));
children.push(para("L'architettura è multi-tenant nativa fin dal primo rilascio. Sono previsti quattro coni di visibilità distinti:"));
children.push(bullet("L'azienda PMI vede esclusivamente i propri dati"));
children.push(bullet("Il consulente del lavoro vede tutte le aziende che lo hanno collegato come riferimento"));
children.push(bullet("L'associazione di categoria vede dati aggregati e anonimizzati delle aziende che hanno espresso consenso esplicito, filtrati per territorio e settore"));
children.push(bullet("Un livello di super amministrazione consente al Cliente di monitorare l'utilizzo complessivo del sistema"));

children.push(heading2("4.3 Componenti tecnologiche principali"));
children.push(bulletBold("Estrazione dati cedolini:", "modulo basato su tecnologia OCR avanzata combinata con un sistema multi-agente AI per l'interpretazione e la validazione dei dati estratti, con scoring di confidenza per ogni record processato."));
children.push(bulletBold("Motore di regole parametrico:", "implementazione delle soglie e delle regole CCNL come configurazione modificabile, non hardcoded. Permette aggiornamenti senza intervento sviluppatore quando il CCNL cambia."));
children.push(bulletBold("Q&A normativo basato su RAG:", "il CCNL Commercio viene vettorializzato e indicizzato attraverso una pipeline di retrieval moderna, con un modello LLM che genera risposte in linguaggio naturale citando i riferimenti normativi."));
children.push(bulletBold("Sistema notifiche:", "motore di routing configurabile che instrada le segnalazioni ai destinatari corretti secondo le regole di consenso e di area tematica."));
children.push(bulletBold("Dashboard e visualizzazioni:", "interfaccia web responsive con quattro viste differenziate per profilo utente, drill-down sui dati e sistema a semaforo trasversale."));

children.push(heading2("4.4 Infrastruttura"));
children.push(placeholderBlock("DA APPROFONDIRE", "Approfondimento tecnico su scelta infrastrutturale: cloud condiviso multi-tenant vs server dedicato. Pro/contro, costi di sviluppo iniziale e costi ricorrenti di gestione, raccomandazione di HeyAI. Da definire con il team tecnico nei prossimi giorni."));

children.push(placeholderBlock("DA INSERIRE", "Schema architetturale di alto livello (immagine): blocco cedolini → modulo estrazione AI → archivio doppio (A identificativo + B pseudonimizzato) → motore di regole → dashboard differenziate per profilo utente → sistema notifiche."));

// =============================
// 5. PERIMETRO DEL PRIMO RILASCIO E ROADMAP
// =============================
children.push(heading1("5. Perimetro del Primo Rilascio e Roadmap Evolutiva"));
children.push(para("La proposta è strutturata su un primo rilascio MVP completo nelle funzionalità core del prodotto, seguito da una fase 2 evolutiva da definire e quotare separatamente sulla base dei primi risultati di mercato."));

children.push(heading2("5.1 MVP — Primo rilascio"));
children.push(para("Il primo rilascio include l'intero perimetro funzionale necessario a rendere il prodotto pienamente utilizzabile e commercializzabile:"));
children.push(bullet("Tutti i moduli di monitoraggio organizzativo (10 aree)"));
children.push(bullet("Modulo sicurezza sul lavoro autonomo"));
children.push(bullet("Architettura multi-tenant con quattro coni di visibilità (azienda, consulente, associazione, super admin)"));
children.push(bullet("Dashboard aziendale, dashboard consulente multi-azienda, dashboard associazione territoriale aggregata, dashboard super admin"));
children.push(bullet("Architettura privacy by design con doppio archivio e pseudonimizzazione"));
children.push(bullet("Modulo estrazione cedolini con OCR e sistema multi-agente AI"));
children.push(bullet("Inoltro cedolini via indirizzo email dedicato (oltre all'upload diretto)"));
children.push(bullet("Q&A normativo basato su CCNL Commercio"));
children.push(bullet("Sistema notifiche differenziato per profilo destinatario"));
children.push(bullet("Registro storico e tracciabilità delle decisioni organizzative"));
children.push(bullet("Generazione automatica del report annuale in PDF"));
children.push(bullet("Landing page con form di richiesta acquisto, integrata con flusso di onboarding manuale (emissione fattura, ricezione bonifico, invio credenziali via email automatica con reset obbligatorio al primo accesso)"));

children.push(heading2("5.2 Fase 2 — Evoluzione post test di mercato"));
children.push(para("I seguenti elementi sono stati identificati come rilevanti ma rinviati alla fase 2, da quotare separatamente sulla base dei primi dati di utilizzo reali:"));
children.push(bulletBold("Integrazione pagamenti automatica:", "implementazione di un gateway di pagamento (Stripe o equivalente) e trasformazione della landing page in pagina di registrazione self-service. Da introdurre quando i volumi giustificano l'investimento."));
children.push(bulletBold("Apertura del canale consulenti del lavoro:", "estensione del modello commerciale per consentire la vendita diretta ai consulenti del lavoro come distributori, con eventuali integrazioni dirette ai principali software paghe italiani per il caricamento automatico dei cedolini."));
children.push(bulletBold("Riconoscimento pattern avanzato:", "modulo di analisi predittiva sui pattern comportamentali e organizzativi, da sviluppare quando il sistema avrà accumulato dati sufficienti per un addestramento significativo."));
children.push(bulletBold("Assistente conversazionale sulla dashboard:", "agente AI che permette di interrogare i dati della dashboard in linguaggio naturale, da introdurre dopo la stabilizzazione del prodotto base."));
children.push(bulletBold("Avatar digitale personalizzabile:", "guida visuale della piattaforma con personalizzazione su immagine, voce e nome, come servizio opzionale a carico del consulente del lavoro."));

children.push(heading2("5.3 Tempistiche di sviluppo"));
children.push(para("La timeline di sviluppo dell'MVP, dalla firma del contratto al rilascio in produzione, è stimata in circa tre mesi calendariali. La pianificazione dettagliata delle milestone sarà definita in fase di kickoff."));

// =============================
// 6. INVESTIMENTO
// =============================
children.push(heading1("6. Investimento"));
children.push(para("La proposta economica è strutturata in due opzioni di collaborazione, costruite per offrire al Cliente due percorsi alternativi che si adattano a strategie diverse di sviluppo del business."));

children.push(heading2("6.1 Opzione A — Full Ownership"));
children.push(para("In questa opzione il Cliente acquisisce la proprietà intellettuale completa del software sviluppato. HeyAI agisce come fornitore tecnologico puro, consegna il codice sorgente e la documentazione tecnica, e il Cliente ha piena libertà di utilizzo, modifica, commercializzazione e cessione del prodotto a terzi."));
children.push(paraBold("Sintesi economica Opzione A"));

children.push(new Table({
  width: { size: 9000, type: WidthType.DXA },
  columnWidths: [5500, 3500],
  rows: [
    new TableRow({
      children: [
        tableCell("Voce", { header: true }),
        tableCell("Valore", { header: true, align: AlignmentType.RIGHT })
      ]
    }),
    new TableRow({
      children: [
        tableCell("Sviluppo MVP completo (perimetro sez. 5.1)", {}),
        tableCell("€ 51.000", { align: AlignmentType.RIGHT, bold: true })
      ]
    }),
    new TableRow({
      children: [
        tableCell("Sconto commerciale (-10%)", { bgColor: GRAY_LIGHT }),
        tableCell("- € 5.100", { align: AlignmentType.RIGHT, bgColor: GRAY_LIGHT })
      ]
    }),
    new TableRow({
      children: [
        tableCell("Prezzo finale Opzione A", { bold: true, bgColor: NAVY }),
        tableCell("€ 45.900", { align: AlignmentType.RIGHT, bold: true, bgColor: NAVY })
      ]
    })
  ]
}));
children.push(para(""));

children.push(paraBold("Cosa è incluso nell'Opzione A"));
children.push(bullet("Tutte le fasi metodologiche descritte al capitolo 3 (discovery, sviluppo, test, go-live e supporto iniziale)"));
children.push(bullet("Cessione completa della proprietà intellettuale del codice sviluppato e della documentazione tecnica"));
children.push(bullet("Tre cicli di revisione iterativi durante lo sviluppo per change request strutturate"));
children.push(bullet("Documentazione tecnica completa, manuali utente per i tre profili"));
children.push(bullet("Supporto operativo per 30 giorni dal go-live"));

children.push(heading3("Modalità di pagamento Opzione A"));
children.push(bullet("30% alla firma del contratto"));
children.push(bullet("40% al raggiungimento delle milestone intermedie di sviluppo"));
children.push(bullet("30% al rilascio in produzione e accettazione finale"));

children.push(heading2("6.2 Opzione B — Partnership con Revenue Share"));
children.push(disclaimerBlock("Nota:", "I valori economici e le percentuali indicate in questa sezione sono illustrativi e costruiscono un esempio di modello di partnership. I termini definitivi saranno calibrati sulla base del business plan del Cliente e formalizzati in fase contrattuale."));

children.push(para("In questa opzione HeyAI mantiene la proprietà intellettuale del codice sorgente e concede al Cliente una licenza commerciale esclusiva per l'utilizzo e la commercializzazione del prodotto sul verticale di riferimento. In cambio di una riduzione significativa dell'investimento iniziale, HeyAI partecipa ai ricavi generati dal Cliente attraverso una percentuale concordata."));
children.push(para("Questa opzione è pensata per abbassare la barriera di ingresso del Cliente, allineare gli interessi delle due parti sul successo commerciale del prodotto, e consentire ad HeyAI di mantenere un coinvolgimento strutturale nello sviluppo evolutivo del software."));

children.push(paraBold("Sintesi economica Opzione B (illustrativa)"));

children.push(new Table({
  width: { size: 9000, type: WidthType.DXA },
  columnWidths: [5500, 3500],
  rows: [
    new TableRow({
      children: [
        tableCell("Voce", { header: true }),
        tableCell("Valore", { header: true, align: AlignmentType.RIGHT })
      ]
    }),
    new TableRow({
      children: [
        tableCell("Sviluppo MVP completo (perimetro sez. 5.1)", {}),
        tableCell("€ 51.000", { align: AlignmentType.RIGHT })
      ]
    }),
    new TableRow({
      children: [
        tableCell("Sconto partnership (-35%)", { bgColor: GRAY_LIGHT }),
        tableCell("- € 17.850", { align: AlignmentType.RIGHT, bgColor: GRAY_LIGHT })
      ]
    }),
    new TableRow({
      children: [
        tableCell("Prezzo finale Opzione B (sviluppo)", { bold: true, bgColor: NAVY }),
        tableCell("€ 33.150", { align: AlignmentType.RIGHT, bold: true, bgColor: NAVY })
      ]
    }),
    new TableRow({
      children: [
        tableCell("Revenue share su ricavi netti generati dal prodotto", {}),
        tableCell("12-15% (illustrativo)", { align: AlignmentType.RIGHT })
      ]
    })
  ]
}));
children.push(para(""));

children.push(paraBold("Caratteristiche dell'Opzione B"));
children.push(bulletBold("Esclusiva commerciale:", "il Cliente ha l'esclusiva di commercializzazione del prodotto sul verticale 'compliance organizzativa del lavoro per PMI italiane', impedendo ad HeyAI di vendere lo stesso prodotto ad altri operatori dello stesso mercato."));
children.push(bulletBold("Mantenimento della IP da parte di HeyAI:", "il codice sorgente e l'architettura restano di proprietà di HeyAI, che può riutilizzare le componenti tecnologiche generiche (framework, motore di regole, pipeline RAG) per altri verticali non in competizione con il Cliente."));
children.push(bulletBold("Manutenzione evolutiva agevolata:", "HeyAI mantiene un interesse strutturale alla qualità e all'evoluzione del prodotto, rendendo più agile la gestione delle change request e degli aggiornamenti."));
children.push(bulletBold("Clausola di buyout opzionale:", "il Cliente mantiene la facoltà, in qualsiasi momento o nel caso in cui un terzo voglia acquisire la soluzione, di esercitare un'opzione di riacquisto della proprietà intellettuale a un prezzo definito in fase contrattuale. In quel momento HeyAI può scegliere se continuare come fornitore tecnico mantenendo la propria quota di partecipazione ai ricavi, oppure uscire completamente dall'accordo riconoscendo il valore residuo della partecipazione."));
children.push(bulletBold("Garanzie di tutela reciproca:", "la struttura contrattuale prevede meccanismi di protezione per entrambe le parti, da definire in fase di stesura del contratto con il supporto dei rispettivi consulenti."));

children.push(heading3("Quando ha senso scegliere l'Opzione B"));
children.push(para("L'Opzione B è particolarmente indicata quando il Cliente vuole minimizzare l'investimento iniziale, beneficiare di un partner tecnologico motivato e coinvolto nel successo commerciale, mantenere l'esclusiva di mercato sul proprio verticale, e conservare la possibilità di acquisire la proprietà intellettuale completa in un secondo momento, ad esempio in vista di un'operazione straordinaria."));

children.push(placeholderBlock("DA APPROFONDIRE IN FASE NEGOZIALE", "Modello di calcolo dettagliato della revenue share, definizione delle soglie minime di tutela per HeyAI (floor garantito), modalità di reporting periodico dei ricavi, prezzo di esercizio dell'opzione di buyout in funzione del tempo e dei ricavi cumulati. Questi elementi saranno definiti insieme al Cliente sulla base del business plan in costruzione."));

// =============================
// 7. NOTE OPERATIVE
// =============================
children.push(heading1("7. Note Operative e Punti di Attenzione"));

children.push(heading2("7.1 Manutenzione evolutiva post-rilascio"));
children.push(para("Il CCNL Commercio è soggetto a rinnovi periodici che modificano alcune delle regole alla base del motore di analisi (soglie, declaratorie, voci retributive). Inoltre, le circolari INPS, INL e gli aggiornamenti normativi possono richiedere adeguamenti del sistema."));
children.push(para("HeyAI propone un piano di manutenzione evolutiva continuativa, con modalità e costi da definire in fase contrattuale. Il piano coprirà gli aggiornamenti normativi, l'evoluzione delle regole CCNL, l'estensione progressiva del modello OCR a nuovi software paghe e la gestione delle eventuali casistiche limite emerse nell'esercizio."));
children.push(placeholderBlock("DA DEFINIRE", "Modalità del piano di manutenzione (fee fissa mensile vs intervento on-demand), perimetro coperto, SLA, costi indicativi. Da concordare con il team tecnico e con il Cliente."));

children.push(heading2("7.2 Compliance dati verso l'associazione di categoria"));
children.push(para("La trasmissione dei dati aggregati e anonimizzati verso l'associazione di categoria è subordinata al consenso esplicito dell'azienda al momento dell'accreditamento. La struttura delle informative privacy e dei flussi di consenso sarà definita in modo da garantire piena conformità GDPR e da tutelare il Cliente da possibili contestazioni."));
children.push(placeholderBlock("DA APPROFONDIRE", "Verifica con specialista compliance interno HeyAI sulla possibilità di includere implicitamente il consenso al trattamento verso l'associazione nell'informativa principale di accreditamento, oppure necessità di un consenso separato. Approfondimento in corso."));

children.push(heading2("7.3 Limiti del primo rilascio"));
children.push(para("Si segnalano alcuni elementi che, per scelta strategica condivisa con il Cliente, non sono inclusi nel perimetro del primo rilascio:"));
children.push(bullet("L'integrazione automatica dei pagamenti è esclusa dall'MVP. La gestione dei pagamenti avviene attraverso un flusso semi-manuale (form, fattura, bonifico, invio credenziali) sufficiente per il primo test di mercato."));
children.push(bullet("L'integrazione diretta con i software paghe per il caricamento automatico dei cedolini non è prevista nell'MVP. Le aziende caricano manualmente i propri cedolini in PDF."));
children.push(bullet("Il riconoscimento pattern avanzato e l'assistente conversazionale sono rinviati alla fase 2, quando il sistema avrà accumulato dati sufficienti per un addestramento efficace."));

// =============================
// 8. PERCHE HEYAI
// =============================
children.push(heading1("8. Perché HeyAI"));
children.push(para("HeyAI è una società di consulenza tecnologica e sviluppo di soluzioni AI specializzata nell'accompagnare clienti nella progettazione e realizzazione di prodotti software innovativi. L'approccio è consulenziale a 360 gradi: non solo sviluppo tecnico, ma supporto strategico nelle scelte di prodotto, di architettura e di go-to-market."));
children.push(para("L'esperienza maturata su altri progetti di natura simile (piattaforme verticali con motori di regole parametrici, sistemi RAG su documentazione tecnica e normativa, architetture multi-tenant con segregazione di dati sensibili) consente ad HeyAI di affrontare il progetto PresidIA con un set di competenze e di componenti tecniche già validate, riducendo i rischi tecnici e i tempi di sviluppo."));
children.push(para("Il team di HeyAI lavora con flessibilità e attenzione al cliente: gestisce le change request strutturate senza generare costi nascosti, mantiene un canale di comunicazione costante con il Cliente lungo tutto lo sviluppo, e si pone come partner tecnologico stabile anche oltre il primo rilascio."));

// =============================
// 9. PROSSIMI PASSI
// =============================
children.push(heading1("9. Prossimi Passi"));
children.push(para("Per procedere con la formalizzazione dell'accordo e l'avvio del progetto sono previsti i seguenti step operativi:"));
children.push(bulletBold("Validazione della proposta:", "il Cliente esamina la proposta e indica l'opzione di collaborazione preferita (Opzione A o Opzione B), eventualmente richiedendo una call di approfondimento per chiarire dubbi o personalizzare aspetti specifici."));
children.push(bulletBold("Costruzione del business plan condiviso:", "HeyAI è disponibile a supportare il Cliente nella costruzione di un business plan dettagliato, particolarmente utile in caso di scelta dell'Opzione B per calibrare correttamente i parametri di revenue share."));
children.push(bulletBold("Formalizzazione contrattuale:", "stesura del contratto di sviluppo con l'opzione scelta, completo di Requirement Log come allegato vincolante, modalità di pagamento, milestone, governance del progetto e clausole di tutela."));
children.push(bulletBold("Kickoff operativo:", "avvio della fase di discovery con il team tecnico, raccolta dei materiali necessari (template cedolini, documentazione CCNL), definizione del piano di sviluppo dettagliato."));

children.push(para("HeyAI resta a disposizione per qualsiasi chiarimento, approfondimento o personalizzazione della presente proposta.", 400));

// FOOTER FINALE
children.push(new Paragraph({
  spacing: { before: 600, after: 100 },
  border: { top: { style: BorderStyle.SINGLE, size: 4, color: TEAL, space: 8 } },
  children: [new TextRun({ text: "HeyAI S.r.l. — Proposta di Investimento PresidIA — Aprile 2026", font: "Aptos", size: 16, color: GRAY_TEXT, italics: true })]
}));
children.push(new Paragraph({
  children: [new TextRun({ text: "Documento riservato — destinato esclusivamente al destinatario indicato", font: "Aptos", size: 16, color: GRAY_TEXT, italics: true })]
}));

// ============= BUILD DOCUMENT =============

const doc = new Document({
  creator: "HeyAI S.r.l.",
  title: "Proposta di Investimento PresidIA",
  description: "Proposta di investimento per piattaforma PresidIA",
  styles: {
    default: {
      document: {
        run: { font: "Aptos", size: 20 }
      }
    }
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: "HeyAI S.r.l. — PresidIA", font: "Aptos", size: 16, color: GRAY_TEXT, italics: true })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Pagina ", font: "Aptos", size: 16, color: GRAY_TEXT }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Aptos", size: 16, color: GRAY_TEXT }),
            new TextRun({ text: " di ", font: "Aptos", size: 16, color: GRAY_TEXT }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Aptos", size: 16, color: GRAY_TEXT })
          ]
        })]
      })
    },
    children
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/PresidIA_Proposta_Investimento.docx", buffer);
  console.log("OK");
}).catch(e => { console.error(e); process.exit(1); });