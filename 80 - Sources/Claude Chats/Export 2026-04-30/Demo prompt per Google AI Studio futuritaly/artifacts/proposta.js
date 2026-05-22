const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType,
        HeadingLevel, PageBreak } = require("docx");

// Brand colors
const TEAL = "208591";
const NAVY = "133439";
const GRAY_TEXT = "627c81";
const LIGHT_BG = "f0f5f6";
const BORDER_COLOR = "e0dbd4";
const WHITE = "FFFFFF";

const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// Helper: header cell
function hCell(text, width) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders, margins: cellMargins,
    shading: { fill: TEAL, type: ShadingType.CLEAR },
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: WHITE, font: "Calibri", size: 20 })] })]
  });
}

// Helper: regular cell
function cell(text, width, shade) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders, margins: cellMargins,
    shading: shade ? { fill: LIGHT_BG, type: ShadingType.CLEAR } : undefined,
    children: [new Paragraph({ children: [new TextRun({ text, font: "Calibri", size: 20, color: NAVY })] })]
  });
}

// Helper: bold cell
function bCell(text, width, shade) {
  return new TableCell({
    width: { size: width, type: WidthType.DXA },
    borders, margins: cellMargins,
    shading: shade ? { fill: LIGHT_BG, type: ShadingType.CLEAR } : undefined,
    children: [new Paragraph({ children: [new TextRun({ text, font: "Calibri", size: 20, color: NAVY, bold: true })] })]
  });
}

function heading1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] });
}

function heading2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after || 120 },
    children: [new TextRun({ text, font: "Calibri", size: 22, color: NAVY, ...opts })]
  });
}

function richPara(runs, after = 120) {
  return new Paragraph({
    spacing: { after },
    children: runs.map(r => new TextRun({ font: "Calibri", size: 22, color: NAVY, ...r }))
  });
}

function bullet(text, ref = "bullets", level = 0) {
  return new Paragraph({
    numbering: { reference: ref, level },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Calibri", size: 22, color: NAVY })]
  });
}

function richBullet(runs, ref = "bullets", level = 0) {
  return new Paragraph({
    numbering: { reference: ref, level },
    spacing: { after: 60 },
    children: runs.map(r => new TextRun({ font: "Calibri", size: 22, color: NAVY, ...r }))
  });
}

function note(text) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, font: "Calibri", size: 18, color: GRAY_TEXT, italics: true })]
  });
}

function spacer() {
  return new Paragraph({ spacing: { after: 200 }, children: [] });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// Footer text
function footer(text) {
  return new Paragraph({
    spacing: { before: 200, after: 0 },
    border: { top: { style: BorderStyle.SINGLE, size: 1, color: TEAL, space: 8 } },
    children: [new TextRun({ text, font: "Calibri", size: 16, color: GRAY_TEXT })]
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Calibri", size: 22, color: NAVY } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Calibri", color: TEAL },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Calibri", color: NAVY },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [
        { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "\u2013", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1440, hanging: 360 } } } }
      ]},
      { reference: "numbers", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
      ]},
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 }
      }
    },
    children: [
      // HEADER
      richPara([
        { text: "HeyAI S.r.l.", bold: true, size: 20 },
        { text: "\nSede legale: Via Parigi 11, 00185 Roma (RM)", size: 18, color: GRAY_TEXT, break: 1 },
        { text: "\ninfo@heyaidigital.it | www.heyaidigital.it", size: 18, color: GRAY_TEXT, break: 1 },
      ], 200),

      // TITLE
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Proposta di Investimento", font: "Calibri", size: 36, bold: true, color: TEAL })]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "Motore di Ricerca AI per Bandi e Gare", font: "Calibri", size: 30, color: NAVY })]
      }),
      new Paragraph({
        spacing: { after: 300 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL, space: 8 } },
        children: [new TextRun({ text: "Aggiornamento Marzo 2026", font: "Calibri", size: 20, color: GRAY_TEXT, italics: true })]
      }),

      // ============================
      // 1. OGGETTO
      // ============================
      heading1("1. Oggetto della Proposta: Osservatorio Strategico AI"),
      para("La presente proposta riguarda lo sviluppo dell\u2019Osservatorio Strategico AI, un motore di ricerca basato su intelligenza artificiale per l\u2019identificazione automatica di opportunit\u00E0 di business: gare d\u2019appalto pubbliche, bandi di finanza agevolata, incentivi e finanziamenti a fondo perduto."),
      para("L\u2019Osservatorio non \u00E8 un semplice aggregatore di bandi. \u00C8 un sistema di selezione intelligente che utilizza l\u2019AI per filtrare, analizzare e preselezionare solo le opportunit\u00E0 realmente pertinenti al profilo del Cliente, eliminando il rumore informativo. Il risultato \u00E8 un vantaggio competitivo concreto: tempi di analisi drasticamente ridotti, risparmio significativo di ore/uomo, maggiore probabilit\u00E0 di conversione e la possibilit\u00E0 di candidarsi a un numero superiore di gare rispetto ad oggi."),

      // ============================
      // 2. AREE DI BUSINESS
      // ============================
      heading1("2. Aree di Business Coperte"),
      para("Il sistema copre due aree strategiche complementari:"),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [2800, 6706],
        rows: [
          new TableRow({ children: [hCell("Area", 2800), hCell("Cosa Monitora", 6706)] }),
          new TableRow({ children: [bCell("PROCUREMENT", 2800), cell("Gare d\u2019appalto pubbliche (Italia, UE, Internazionali)", 6706)] }),
          new TableRow({ children: [bCell("GRANTS", 2800, true), cell("Bandi finanza agevolata, incentivi, crediti d\u2019imposta, fondo perduto", 6706, true)] }),
        ]
      }),
      spacer(),

      // ============================
      // 3. SOLUZIONE TECNICA
      // ============================
      heading1("3. Soluzione Tecnica"),
      para("L\u2019architettura si basa esclusivamente su API ufficiali e fonti dati certificate, garantendo conformit\u00E0 legale, stabilit\u00E0 tecnica e qualit\u00E0 dei dati."),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [3000, 6506],
        rows: [
          new TableRow({ children: [hCell("Modulo", 3000), hCell("Descrizione", 6506)] }),
          new TableRow({ children: [
            bCell("Ingestione Dati Multi-Fonte", 3000),
            cell("Connessione a fonti ufficiali (ANAC/PDND, TED, UNGM, World Bank, Incentivi.gov.it, EU Funding & Tenders) con aggiornamento automatico e real-time dove permesso.", 6506)
          ]}),
          new TableRow({ children: [
            bCell("Motore di Filtraggio Avanzato", 3000, true),
            cell("Criteri configurabili: perimetro geografico, tipologia attivit\u00E0, dimensione impresa, soglie economiche, scadenze, codici ATECO, CPV, ente erogatore, stato bandi, requisiti consortili, TRL, criteri di esclusione.", 6506, true)
          ]}),
          new TableRow({ children: [
            bCell("AI Agent \u2013 Selezione Semantica", 3000),
            cell("LLM che analizza il testo completo di ogni bando, applica regole personalizzate del Cliente e genera uno scoring composito di applicabilit\u00E0 e coerenza (0-100%) con riassunto operativo.", 6506)
          ]}),
          new TableRow({ children: [
            bCell("Scoring a 6 Dimensioni", 3000, true),
            cell("Valutazione pesata e configurabile su: allineamento tematico (analisi semantica AI), fit finanziario, requisiti consortili, maturit\u00E0 tecnologica (TRL), criteri di esclusione e timeline. Ogni risultato mostra il punteggio complessivo e il breakdown per dimensione.", 6506, true)
          ]}),
          new TableRow({ children: [
            bCell("Dashboard e Notifiche", 3000),
            cell("Interfaccia web per consultazione, filtri real-time e notifiche base configurabili su opportunit\u00E0 in essere selezionate.", 6506)
          ]}),
        ]
      }),
      spacer(),

      // ============================
      // 4. FONTI DATI
      // ============================
      heading1("4. Fonti Dati Ufficiali"),
      para("Le fonti incluse nell\u2019MVP garantiscono una copertura del 100% delle gare d\u2019appalto italiane (per obbligo di legge dal 2024 tramite BDNCP/ANAC) e di circa l\u201985-90% degli incentivi e della finanza agevolata (grazie al nuovo Codice degli incentivi in vigore dal 1\u00B0 gennaio 2026 che rende Incentivi.gov.it l\u2019hub unico nazionale). La copertura include: tutti i Ministeri, tutte le Regioni, i Comuni e le principali partecipate (Invitalia, SIMEST, CDP per la parte aiuti di Stato)."),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [2400, 1800, 3306, 2000],
        rows: [
          new TableRow({ children: [hCell("Fonte", 2400), hCell("Copertura", 1800), hCell("Contenuto", 3306), hCell("Stato", 2000)] }),
          new TableRow({ children: [bCell("ANAC (PDND)", 2400), cell("Italia", 1800), cell("100% gare italiane (Lavori, Servizi, Forniture)", 3306), cell("Da verificare*", 2000)] }),
          new TableRow({ children: [bCell("TED Open API", 2400, true), cell("Europa (27 UE)", 1800, true), cell("Gare sopra soglia UE + avvisi preinformazione", 3306, true), cell("Pronto", 2000, true)] }),
          new TableRow({ children: [bCell("World Bank & UNGM", 2400), cell("Internazionale", 1800), cell("Progetti sviluppo e forniture ONU", 3306), cell("Pronto", 2000)] }),
          new TableRow({ children: [bCell("Incentivi.gov.it / RNA", 2400, true), cell("Italia", 1800, true), cell("Catalogo completo incentivi imprese (hub unico 2026)", 3306, true), cell("Pronto", 2000, true)] }),
          new TableRow({ children: [bCell("EU Funding & Tenders", 2400), cell("Europa", 1800), cell("Fondi diretti UE (Horizon, Digital Europe, LIFE)", 3306), cell("Pronto", 2000)] }),
        ]
      }),
      note("*Nota: FuturItaly ha indicato di essere gi\u00E0 accreditata presso ANAC/PDND. In attesa di conferma definitiva. Se confermato, non ci saranno ritardi sull\u2019integrazione di questa fonte. In caso contrario, l\u2019iter burocratico (3-8 settimane) verr\u00E0 gestito parallelamente allo sviluppo. La lista fonti potr\u00E0 essere ampliata in fasi successive per coprire eventuali gap residui."),

      pageBreak(),

      // ============================
      // 5. PIANO DI LAVORO
      // ============================
      heading1("5. Piano di Lavoro"),
      para("Lo sviluppo seguir\u00E0 un approccio agile articolato in 4 fasi:"),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [2800, 1800, 4906],
        rows: [
          new TableRow({ children: [hCell("Fase", 2800), hCell("Durata", 1800), hCell("Deliverable", 4906)] }),
          new TableRow({ children: [bCell("Foundation & Data Pipeline", 2800), cell("2-3 settimane", 1800), cell("Architettura, autenticazione, connessione fonti dati pronte. Avvio parallelo verifica ANAC/PDND.", 4906)] }),
          new TableRow({ children: [bCell("AI Engine & Classificazione", 2800, true), cell("2-3 settimane", 1800, true), cell("Motore AI di selezione semantica, albero CPV/ATECO, sistema di scoring composito a 6 dimensioni e filtraggio avanzato.", 4906, true)] }),
          new TableRow({ children: [bCell("Dashboard & Notifiche", 2800), cell("2-3 settimane", 1800), cell("Interfaccia utente, criteri di filtraggio configurabili, pannello configurazione pesi, sistema di notifiche base.", 4906)] }),
          new TableRow({ children: [bCell("Testing & Go-Live", 2800, true), cell("2 settimane", 1800, true), cell("UAT, ottimizzazioni, integrazione ANAC (se confermata), training operativo, lancio.", 4906, true)] }),
          new TableRow({ children: [bCell("TOTALE", 2800), bCell("8-11 settimane", 1800), bCell("MVP completo e operativo", 4906)] }),
        ]
      }),
      spacer(),

      // ============================
      // 6. INVESTIMENTO
      // ============================
      heading1("6. Investimento"),

      heading2("Modello a costo ridotto: Licenza d\u2019uso"),
      para("Per contenere significativamente l\u2019investimento, HeyAI mantiene la propriet\u00E0 intellettuale del motore di base e concede al Cliente una licenza d\u2019uso perpetua, non trasferibile e non sublicenziabile, riservata esclusivamente all\u2019uso interno di FuturItaly. Tutte le personalizzazioni (regole AI, configurazioni filtri, parametri di scoring) sviluppate ad hoc per il Cliente sono di sua propriet\u00E0 esclusiva."),

      spacer(),
      heading2("6.1 MVP \u2013 Investimento Base"),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [6506, 3000],
        rows: [
          new TableRow({ children: [hCell("Voce", 6506), hCell("Importo", 3000)] }),
          new TableRow({ children: [cell("Sviluppo, configurazione e personalizzazione piattaforma (incluso scoring composito a 6 dimensioni con pesi configurabili)", 6506), cell("\u20AC 26.000", 3000)] }),
          new TableRow({ children: [cell("Infrastruttura cloud (setup iniziale)", 6506, true), cell("Incluso", 3000, true)] }),
          new TableRow({ children: [cell("Training operativo per il team (fino a 4 ore)", 6506), cell("Incluso", 3000)] }),
          new TableRow({ children: [cell("Assistenza post-lancio (2 mesi, fino a 20 ore)", 6506, true), cell("Incluso", 3000, true)] }),
          new TableRow({ children: [bCell("TOTALE MVP", 6506), bCell("\u20AC 26.000", 3000)] }),
        ]
      }),
      spacer(),
      note("Nota: I costi di infrastruttura cloud e di consumo API AI/ML (basati sull\u2019utilizzo effettivo di token per l\u2019analisi semantica dei bandi) saranno a carico del Cliente sotto forma di canone mensile variabile, proporzionale all\u2019utilizzo dello strumento. Tali costi sono contenuti e verranno stimati con precisione al termine del primo mese di utilizzo a regime, sulla base dei consumi reali registrati."),

      spacer(),
      heading2("6.2 Funzionalit\u00E0 Evolutive \u2013 Add-on quotati separatamente"),
      para("Le seguenti funzionalit\u00E0, emerse durante la fase di analisi congiunta, possono essere aggiunte al perimetro del progetto in qualsiasi momento, anche successivamente alla consegna dell\u2019MVP:"),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [4000, 3506, 2000],
        rows: [
          new TableRow({ children: [hCell("Funzionalit\u00E0", 4000), hCell("Descrizione", 3506), hCell("Stima", 2000)] }),
          new TableRow({ children: [
            bCell("Input da Brief Cliente", 4000),
            cell("Caricamento di un brief in linguaggio naturale che attiva la ricerca automatica incrociando i parametri con tutte le fonti.", 3506),
            cell("\u20AC 3.000 \u2013 5.000", 2000)
          ]}),
          new TableRow({ children: [
            bCell("Notifiche Proattive", 4000, true),
            cell("Monitoraggio attivo con incrocio quotidiano dei profili clienti e delle nuove opportunit\u00E0. Report giornaliero con azioni pendenti e motivazione per ogni opportunit\u00E0.", 3506, true),
            cell("\u20AC 4.000 \u2013 6.000", 2000, true)
          ]}),
          new TableRow({ children: [
            bCell("Osservatorio Preventivo", 4000),
            cell("Anticipazione delle opportunit\u00E0 a partire da direttive normative (legge di bilancio, decreti attuativi, programmazioni europee) prima della pubblicazione dei bandi.", 3506),
            cell("\u20AC 3.000 \u2013 5.000", 2000)
          ]}),
          new TableRow({ children: [
            bCell("Generazione Email e Presentazioni", 4000, true),
            cell("Creazione automatica di messaggi icebreaker e presentazioni personalizzate per agganciare il cliente sull\u2019opportunit\u00E0 identificata, con integrazione email.", 3506, true),
            cell("\u20AC 3.000 \u2013 4.000", 2000, true)
          ]}),
        ]
      }),
      note("Nota: Le stime sono indicative e verranno consolidate in fase di analisi di dettaglio per ciascun add-on. Gli add-on possono essere attivati singolarmente o in combinazione."),

      spacer(),
      heading2("6.3 Incluso nell\u2019investimento MVP"),
      bullet("Licenza d\u2019uso perpetua, non trasferibile e non sublicenziabile della piattaforma"),
      bullet("Personalizzazioni su misura di propriet\u00E0 esclusiva del Cliente"),
      bullet("Scoring composito a 6 dimensioni con pesi configurabili"),
      bullet("Documentazione tecnica"),
      bullet("Training operativo per il team (sessione formativa da remoto, fino a 4 ore)"),
      bullet("2 mesi di assistenza post-lancio (bug fixing, fino a 20 ore complessive di supporto)"),
      note("Al termine delle ore di supporto incluse, eventuali interventi aggiuntivi di manutenzione, aggiornamento o evoluzione saranno quotati a consuntivo con un costo orario di \u20AC 65/ora."),

      pageBreak(),

      // ============================
      // 7. PAGAMENTO
      // ============================
      heading1("7. Modalit\u00E0 di Pagamento"),
      para("Il pagamento \u00E8 articolato in 3 tranche legate alle milestone di progetto:"),
      bullet("40% a inizio lavori"),
      bullet("30% all\u2019avvio della fase di testing"),
      bullet("30% alla consegna definitiva post-test"),
      spacer(),

      // ============================
      // 8. VANTAGGI
      // ============================
      heading1("8. Vantaggi Competitivi"),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [3200, 6306],
        rows: [
          new TableRow({ children: [hCell("Vantaggio", 3200), hCell("Dettaglio", 6306)] }),
          new TableRow({ children: [bCell("Solo dati ufficiali, zero rischi legali", 3200), cell("Nessun scraping, nessuna violazione di termini di servizio. Solo API ufficiali e fonti istituzionali certificate.", 6306)] }),
          new TableRow({ children: [bCell("AI che seleziona, non solo cerca", 3200, true), cell("L\u2019AI Agent analizza il contenuto completo dei bandi e genera uno scoring personalizzato a 6 dimensioni, risparmiando ore di analisi manuale.", 6306, true)] }),
          new TableRow({ children: [bCell("Copertura: Italia, Europa, Mondo", 3200), cell("100% gare italiane + ~90% incentivi nazionali + gare europee e internazionali in un\u2019unica piattaforma.", 6306)] }),
          new TableRow({ children: [bCell("Operativo in 8-11 settimane", 3200, true), cell("Un MVP funzionante in tempi contenuti, con possibilit\u00E0 di evoluzione progressiva tramite add-on.", 6306, true)] }),
          new TableRow({ children: [bCell("Investimento accessibile", 3200), cell("Il modello a licenza d\u2019uso riduce significativamente il costo di accesso alla tecnologia.", 6306)] }),
          new TableRow({ children: [bCell("Nessun equivalente sul mercato", 3200, true), cell("Ad oggi nel panorama italiano non esistono strumenti che combinino ricerca su fonti ufficiali, selezione semantica AI e scoring pesato configurabile.", 6306, true)] }),
        ]
      }),
      spacer(),

      // ============================
      // 9. CONDIZIONI
      // ============================
      heading1("9. Condizioni Generali"),
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [3200, 6306],
        rows: [
          new TableRow({ children: [hCell("Condizione", 3200), hCell("Dettaglio", 6306)] }),
          new TableRow({ children: [bCell("Tempi di consegna", 3200), cell("8-11 settimane dalla firma del contratto", 6306)] }),
          new TableRow({ children: [bCell("Propriet\u00E0 intellettuale", 3200, true), cell("Licenza d\u2019uso illimitata concessa al Cliente. La IP del motore di base resta di HeyAI.", 6306, true)] }),
          new TableRow({ children: [bCell("Personalizzazioni", 3200), cell("Tutte le configurazioni e personalizzazioni sviluppate per FuturItaly sono di propriet\u00E0 esclusiva del Cliente. Il perimetro sar\u00E0 definito in fase di analisi dei requisiti.", 6306)] }),
          new TableRow({ children: [bCell("Garanzia", 3200, true), cell("2 mesi assistenza post-lancio inclusa (bug fixing e supporto, fino a 20 ore)", 6306, true)] }),
          new TableRow({ children: [bCell("Interventi extra", 3200), cell("Modifiche allo scope, evoluzioni funzionali o supporto oltre le 20 ore: \u20AC 65/ora a consuntivo", 6306)] }),
          new TableRow({ children: [bCell("Costi operativi", 3200, true), cell("Canone mensile variabile per infrastruttura cloud e consumo API AI/ML, a carico del Cliente, stimato dopo il primo mese a regime", 6306, true)] }),
          new TableRow({ children: [bCell("Validit\u00E0 offerta", 3200), cell("30 giorni dalla data del presente documento", 6306)] }),
        ]
      }),

      pageBreak(),

      // ============================
      // 10. REVENUE SHARE
      // ============================
      heading1("10. Modello di Collaborazione \u2013 Revenue Share"),
      richPara([
        { text: "Nota: ", bold: true, italics: true, color: GRAY_TEXT, size: 20 },
        { text: "La presente sezione ha carattere esclusivamente illustrativo. I termini, le percentuali e le condizioni qui indicati rappresentano un\u2019ipotesi di lavoro e dovranno essere definiti congiuntamente tra le parti sulla base di un\u2019analisi approfondita del bacino di utenti potenziali, della strategia commerciale di FuturItaly e delle condizioni di mercato. Nessun elemento di questa sezione costituisce impegno vincolante.", italics: true, color: GRAY_TEXT, size: 20 }
      ], 200),

      heading2("10.1 Visione"),
      para("L\u2019Osservatorio Strategico AI, oltre a rappresentare uno strumento di efficientamento interno per FuturItaly, ha un potenziale significativo come prodotto vendibile sul mercato. Ad oggi nel panorama italiano non esistono soluzioni equivalenti. La complementarit\u00E0 tra la competenza di settore e la rete commerciale di FuturItaly e la capacit\u00E0 tecnologica di HeyAI pu\u00F2 generare un vantaggio competitivo da first mover."),

      heading2("10.2 Approccio in tre fasi"),
      richBullet([{ text: "Fase 1 \u2014 MVP: ", bold: true }, { text: "Sviluppo dello strumento a costo contenuto (\u20AC 20.000 anzich\u00E9 \u20AC 26.000) con licenza d\u2019uso completa per FuturItaly. HeyAI assorbe come investimento proprio i costi di PM, analisi funzionale e coordinamento." }]),
      richBullet([{ text: "Fase 2 \u2014 Feedback ed evoluzione: ", bold: true }, { text: "Raccolta dei feedback dall\u2019utilizzo reale per guidare il miglioramento. Funzionalit\u00E0 aggiuntive incluse se di effort contenuto, o a prezzo agevolato se strutturali." }]),
      richBullet([{ text: "Fase 3 \u2014 Go-to-market congiunto: ", bold: true }, { text: "Definizione di un accordo di revenue share con FuturItaly come intermediario e partner commerciale, e HeyAI come fornitore tecnologico." }]),
      spacer(),

      heading2("10.3 Ipotesi illustrativa di Revenue Share"),
      richBullet([{ text: "Target di vendita: ", bold: true }, { text: "Societ\u00E0 di finanza agevolata, studi professionali, associazioni di categoria, camere di commercio, intermediari" }]),
      richBullet([{ text: "Pricing indicativo al cliente finale: ", bold: true }, { text: "\u20AC 500-600/mese (da definire)" }]),
      richBullet([{ text: "Split indicativo su vendite FuturItaly: ", bold: true }, { text: "70% FuturItaly / 30% HeyAI (da definire)" }]),
      richBullet([{ text: "Vendite dirette HeyAI: ", bold: true }, { text: "100% HeyAI, con possibile clausola di non concorrenza verso competitor diretti di FuturItaly" }]),
      richBullet([{ text: "Floor commerciale: ", bold: true }, { text: "Impegno minimo di attivit\u00E0 commerciale da parte di FuturItaly (da definire congiuntamente)" }]),
      richBullet([{ text: "Audit: ", bold: true }, { text: "Verifica periodica sui ricavi generati dalla vendita dello strumento" }]),
      richBullet([{ text: "Cap: ", bold: true }, { text: "Oltre un livello di ricavi cumulativi concordato, la percentuale HeyAI si riduce o si azzera" }]),
      spacer(),

      heading2("10.4 Elementi da definire congiuntamente"),
      bullet("Bacino reale di utenti potenziali raggiungibili da FuturItaly"),
      bullet("Pricing definitivo al cliente finale"),
      bullet("Percentuali di split e floor commerciale"),
      bullet("Strategia di go-to-market (canali, tempistiche, risorse dedicate)"),
      bullet("Struttura contrattuale e clausole di non concorrenza"),
      bullet("Condizioni di sublicenza (necessaria per rivendita a terzi, da definire nel contratto di partnership)"),
      spacer(),

      para("La contrattazione del revenue share pu\u00F2 procedere in parallelo allo sviluppo dell\u2019MVP e delle funzionalit\u00E0 evolutive, in modo da arrivare al go-to-market in tempi accelerati."),

      spacer(),
      spacer(),
      footer("PEC: heyai@pec.it | REA RM \u2013 1751505 | Cod. Fiscale: 17947791004 | Amministratore Unico: Ing. Bruno Mattucci"),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/proposta_futuritaly_aggiornata.docx", buffer);
  console.log("Proposal created!");
});