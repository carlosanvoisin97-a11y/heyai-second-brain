const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat, TableOfContents
} = require('docx');
const fs = require('fs');

// Helper function for creating styled paragraphs
const createParagraph = (text, options = {}) => {
  const runs = Array.isArray(text) ? text : [new TextRun(text)];
  return new Paragraph({
    children: runs,
    spacing: { after: 200 },
    ...options
  });
};

// Helper for bold text runs
const bold = (text) => new TextRun({ text, bold: true });
const regular = (text) => new TextRun({ text });
const italic = (text) => new TextRun({ text, italics: true });

// Table border style
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorders = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };

// Header cell style
const headerCell = (text, width) => new TableCell({
  borders,
  width: { size: width, type: WidthType.DXA },
  shading: { fill: "1B4F72", type: ShadingType.CLEAR },
  margins: { top: 100, bottom: 100, left: 120, right: 120 },
  children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF" })] })]
});

// Regular cell style
const cell = (text, width, shade = null) => new TableCell({
  borders,
  width: { size: width, type: WidthType.DXA },
  shading: shade ? { fill: shade, type: ShadingType.CLEAR } : undefined,
  margins: { top: 80, bottom: 80, left: 120, right: 120 },
  children: [new Paragraph({ children: [new TextRun(text)] })]
});

// Create the document
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: "1B4F72" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2874A6" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 }
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "34495E" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "•",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      },
      {
        reference: "bullets2",
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "◦",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 1080, hanging: 360 } } }
        }]
      },
      {
        reference: "numbers",
        levels: [{
          level: 0,
          format: LevelFormat.DECIMAL,
          text: "%1.",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [
            new TextRun({ text: "Noloop - Ecosistema AI | ", color: "888888", size: 18 }),
            new TextRun({ text: "Documento Riservato", italics: true, color: "888888", size: 18 })
          ]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Pagina ", size: 18, color: "888888" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "888888" }),
            new TextRun({ text: " di ", size: 18, color: "888888" }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18, color: "888888" })
          ]
        })]
      })
    },
    children: [
      // ========== TITLE PAGE ==========
      new Paragraph({ spacing: { after: 600 } }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "PROPOSTA DI INVESTIMENTO STRATEGICO", bold: true, size: 44, color: "1B4F72" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: "Wave 2 - Sviluppo Ecosistema AI Noloop", size: 32, color: "2874A6" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 },
        children: [new TextRun({ text: "Documento di Architettura e Specifiche Funzionali", italics: true, size: 24, color: "666666" })]
      }),
      new Paragraph({ spacing: { after: 400 } }),
      
      // Info box
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4500, 4500],
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: noBorders,
                width: { size: 4500, type: WidthType.DXA },
                children: [
                  new Paragraph({ children: [bold("Cliente: "), regular("Noloop S.r.l.")] }),
                  new Paragraph({ children: [bold("Settore: "), regular("Eventi Corporate")] }),
                  new Paragraph({ children: [bold("Fatturato: "), regular("€55M annui")] }),
                  new Paragraph({ children: [bold("Dipendenti: "), regular("~100")] })
                ]
              }),
              new TableCell({
                borders: noBorders,
                width: { size: 4500, type: WidthType.DXA },
                children: [
                  new Paragraph({ children: [bold("Partner Tecnologico: "), regular("HeyAI S.r.l.")] }),
                  new Paragraph({ children: [bold("Versione: "), regular("2.0")] }),
                  new Paragraph({ children: [bold("Data: "), regular("Gennaio 2026")] }),
                  new Paragraph({ children: [bold("Classificazione: "), regular("Riservato")] })
                ]
              })
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ========== TABLE OF CONTENTS ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Indice")]
      }),
      new TableOfContents("Indice", {
        hyperlink: true,
        headingStyleRange: "1-3"
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ========== EXECUTIVE SUMMARY ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Executive Summary")]
      }),
      createParagraph("Questo documento rappresenta la guida completa e definitiva dell'Ecosistema AI Noloop, comprendendo sia le soluzioni già sviluppate nella Wave 1 che le proposte per la Wave 2. L'obiettivo è fornire una visione unificata dell'architettura tecnologica, dei flussi operativi e delle integrazioni tra i vari moduli."),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Visione Strategica")]
      }),
      createParagraph("L'ecosistema AI Noloop è progettato per trasformare radicalmente l'operatività aziendale attraverso:"),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Centralizzazione dei dati: "), regular("eliminazione della frammentazione su file Excel non standardizzati")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Automazione intelligente: "), regular("agenti AI specializzati per task ripetitivi ad alto dispendio di tempo")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Integrazione nativa: "), regular("flusso continuo dal lead alla chiusura commessa senza discontinuità")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Business Intelligence: "), regular("visibilità real-time su margini, costi e performance")]
      }),
      new Paragraph({ spacing: { after: 200 } }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Principio Architetturale Fondamentale")]
      }),
      createParagraph([
        regular("L'intero ecosistema si basa su un principio chiave: "),
        bold("l'Opportunità sul CRM (LeadMe Evolution) è l'entità madre"),
        regular(" da cui derivano e si alimentano tutte le altre entità operative. Questo garantisce un single source of truth per ogni progetto/evento.")
      ]),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ========== SECTION 1: WAVE 1 - ALREADY DEVELOPED ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Wave 1 - Soluzioni Sviluppate")]
      }),
      createParagraph("La Wave 1 ha gettato le fondamenta tecnologiche dell'ecosistema, creando l'infrastruttura di base e i primi moduli operativi. Di seguito il dettaglio delle soluzioni già disponibili o in fase di completamento."),
      
      // 1.1 Ecosistema AI Noloop
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("1.1 Ecosistema AI Noloop (Infrastruttura Base)")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione")]
      }),
      createParagraph("Workspace unificato e sicuro che funge da portale di accesso unico per tutti i dipendenti alle funzionalità di Intelligenza Artificiale. Rappresenta le fondamenta tecnologiche su cui poggiano tutti gli altri moduli."),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità Chiave")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Autenticazione utenti centralizzata")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Gestione permessi basata su ruoli e licenze")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Architettura multi-tenant sicura")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Server dedicati per pieno controllo dati (compliance GDPR)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Piattaforma scalabile per moduli futuri")]
      }),
      new Paragraph({ spacing: { after: 100 } }),
      new Paragraph({
        children: [bold("Stato: "), regular("Completato"), regular(" | "), bold("Investimento: "), regular("€3.000 - €5.000")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 1.2 LeadMe
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("1.2 LeadMe (Gestione Lead)")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione")]
      }),
      createParagraph("Piattaforma proprietaria per la gestione del ciclo di vita dei lead commerciali, con integrazione nativa LinkedIn per l'arricchimento automatico dei dati."),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità Chiave")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("LinkedIn Scraper: "), regular("importazione automatica dati da profili LinkedIn (nome, ruolo, azienda, sede, industry)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Dashboard Lead: "), regular("vista unificata con metriche (Nuovi, In Corso, Positivi, Negativi)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Activity Logging: "), regular("tracciamento completo delle interazioni (contatti, presentazioni, brief, esiti)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Gestione Vacancies: "), regular("rilevamento automatico cambi ruolo/azienda dei lead ogni 15 giorni")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Ricerca Avanzata: "), regular("filtri per commerciale, azienda, status, combinabili")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Vista Aziende: "), regular("anagrafica company con tutti i lead associati")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Cronologia Modifiche: "), regular("audit trail completo con possibilità di ripristino")]
      }),
      new Paragraph({ spacing: { after: 100 } }),
      new Paragraph({
        children: [bold("Stato: "), regular("Operativo"), regular(" | "), bold("Ruolo nell'ecosistema: "), regular("Master data clienti/lead")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 1.3 AI Venue Finder
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("1.3 AI Venue Finder")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione")]
      }),
      createParagraph("Agente AI personalizzato per supportare la progettazione di eventi corporate, specializzato nella ricerca di venue, ristoranti, trasporti e attività extra. Attualmente implementato come Gem di Google Gemini."),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità Chiave")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Analisi Brief: "), regular("comprensione automatica dei requisiti dell'evento dal brief cliente")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Ricerca Venue: "), regular("proposta strutture con ricerca web avanzata (Cvent, pagine ufficiali)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Ricerca Ristoranti: "), regular("selezione ristoranti in base a location e requisiti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Ricerca Trasporti: "), regular("opzioni logistiche per spostamenti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Extra Activities: "), regular("suggerimenti per attività team building e intrattenimento")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Export Tabellare: "), regular("generazione tabelle Excel scaricabili con tutti i dati")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Presentation Outline: "), regular("bozza strutturata per presentazione al cliente")]
      }),
      new Paragraph({ spacing: { after: 100 } }),
      new Paragraph({
        children: [bold("Stato: "), regular("Operativo (Gem Gemini)"), regular(" | "), bold("Roadmap: "), regular("Integrazione nell'ecosistema Noloop")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 1.4 Piattaforma Gestione Eventi (Crowd)
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("1.4 Piattaforma Gestione Eventi (Crowd)")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione")]
      }),
      createParagraph("Soluzione completa per digitalizzare e internalizzare l'intero processo di gestione dei partecipanti agli eventi, dalla raccolta dati alla comunicazione, eliminando la dipendenza da software di terze parti e procedure manuali su Excel."),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità Chiave")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Form Builder Custom: "), regular("creazione moduli di iscrizione brandizzati")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Database Centralizzato: "), regular("repository unico di tutti i dati partecipanti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Motore di Grouping: "), regular("creazione automatica gruppi per hotel, voli, attività")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Integrazione WhatsApp/Email: "), regular("comunicazioni massive e personalizzate")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Agente WhatsApp: "), regular("risposte automatiche alle domande frequenti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Dashboard Monitoraggio: "), regular("visibilità real-time su iscrizioni e status")]
      }),
      new Paragraph({ spacing: { after: 100 } }),
      new Paragraph({
        children: [bold("Stato: "), regular("In sviluppo"), regular(" | "), bold("Investimento: "), regular("€55.000 - €70.000")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 1.5 Minutes (Meeting Assistant)
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("1.5 Minutes (Meeting Assistant AI)")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione")]
      }),
      createParagraph("Strumento proprietario per la generazione automatica di minute e next step a seguito delle riunioni, operante all'interno dell'ecosistema sicuro Noloop per garantire compliance GDPR e protezione dei dati discussi."),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità Chiave")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Trascrizione Automatica: "), regular("conversione speech-to-text delle call")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Riepilogo Strutturato: "), regular("estrazione automatica punti chiave e decisioni")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Next Steps: "), regular("identificazione e assegnazione azioni da intraprendere")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Archiviazione Protetta: "), regular("storage sicuro interno (no piattaforme terze)")]
      }),
      new Paragraph({ spacing: { after: 100 } }),
      new Paragraph({
        children: [bold("Stato: "), regular("In sviluppo"), regular(" | "), bold("Investimento: "), regular("€10.000 - €15.000")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 1.6 Analisi Dati Progress
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("1.6 Analisi Dati Progress")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione")]
      }),
      createParagraph("Soluzione transitoria per trasformare il file \"Progress\" (attuale aggregato Excel di dati operativi) in fonte di insight strategici, in attesa dell'implementazione completa di Tally che ne assorbirà le funzionalità."),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità Chiave")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Agente AI: "), regular("lettura e interpretazione dati non strutturati")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Dashboard Dinamiche: "), regular("visualizzazione KPI per la Direzione")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Report Automatici: "), regular("generazione report su marginalità, allocazione risorse, scostamenti")]
      }),
      new Paragraph({ spacing: { after: 100 } }),
      new Paragraph({
        children: [bold("Stato: "), regular("In sviluppo"), regular(" | "), bold("Investimento: "), regular("€10.000 - €15.000"), regular(" | "), bold("Note: "), regular("Funzionalità confluiranno in Tally")]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ========== SECTION 2: WAVE 2 - PROPOSED SOLUTIONS ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Wave 2 - Soluzioni Proposte")]
      }),
      createParagraph("La Wave 2 completa l'ecosistema con i moduli core per la gestione operativa end-to-end: dal CRM evoluto alla gestione commesse, dal task management all'esperienza partecipante. Tutte le soluzioni sono progettate per integrarsi nativamente tra loro."),
      
      // 2.1 Sally
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.1 Sally - Agente Virtuale 360° Aziendale")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione Funzionale")]
      }),
      createParagraph("Sally è un assistente virtuale intelligente progettato per fungere da \"collega digitale\" per tutti i dipendenti Noloop. A differenza di un semplice chatbot, Sally è un agente proattivo dotato di memoria delle conversazioni precedenti e accesso circoscritto ai dati aziendali in base al profilo dell'utente."),
      createParagraph([
        bold("Principio architetturale chiave: "),
        regular("Sally è l'"),
        bold("unico front-end conversazionale AI"),
        regular(" dell'ecosistema. I moduli NLP presenti in altri applicativi (LeadMe, Tally) fungono da \"motori\" che Sally interroga sotto il cofano. L'utente parla sempre e solo con Sally.")
      ]),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modalità di Utilizzo")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Stand-alone: "), regular("accessibile dalla Top Bar dell'ecosistema per domande generiche")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("In-context: "), regular("apribile all'interno dei singoli applicativi per interazioni verticali (es. dentro Minutes capisce il contesto della call)")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità Principali")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Knowledge Base Integrata: "), regular("accesso a documentazione aziendale, procedure, policy, manuali")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Integrazione SharePoint: "), regular("ricerca e recupero documenti con comprensione del contesto")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Accesso Email: "), regular("ricerca e riassunto comunicazioni email (con permessi)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Memoria Conversazionale: "), regular("ricorda interazioni precedenti per risposte personalizzate")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Accesso Profilato: "), regular("visibilità dati basata su ruolo e permessi utente")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Context Awareness: "), regular("riconosce l'applicativo in uso e adatta le risposte")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Bridge Intelligente: "), regular("traduce richieste in linguaggio naturale in query sui vari sistemi (CRM, Tally, Task)")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Benefici Attesi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Riduzione tempo ricerca informazioni: 60-70%")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Onboarding accelerato per nuovi dipendenti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Riduzione richieste ripetitive ai colleghi senior")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Esperienza utente unificata (un solo interlocutore AI)")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 2.2 Tally
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.2 Tally - Sistema Integrato Gestione Commesse, BI, Fornitori e Fatturazione")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione Funzionale")]
      }),
      createParagraph("Tally è la piattaforma centrale per tutto ciò che riguarda il \"denaro\": gestione commesse, controllo costi, business intelligence, ciclo passivo (fornitori/acquisti) e ciclo attivo (fatturazione clienti). Centralizza la gestione operativa dalla fase di apertura commessa fino alla chiusura, con funzionalità avanzate di pianificazione risorse e controllo margini."),
      createParagraph([
        bold("Principio architetturale chiave: "),
        regular("Tally "),
        bold("riceve"),
        regular(" il Piano di Produzione (PDP) automaticamente dal CRM quando viene creata l'Opportunità. Non consente la creazione manuale del PDP per evitare disallineamenti. Il PM definisce budget e piano su CRM, Tally lo eredita e lo arricchisce con i dati consuntivi.")
      ]),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo Gestione Commesse")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Creazione automatica commessa da Opportunità CRM")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Visualizzazione e monitoraggio stato avanzamento")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Ricezione PDP da CRM (budget, voci macro, risorse previste)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Archiviazione documentazione allegata (integrazione SharePoint)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Storico completo modifiche con audit trail")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Versionamento automatico con timestamp e identificativo utente")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo Fornitori e Acquisti (NUOVO)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Anagrafica Fornitori: "), regular("registro centralizzato fornitori e partner")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Ordini di Acquisto: "), regular("creazione OdA collegati alla commessa")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Workflow Approvazioni: "), regular("iter approvativo configurabile per importo/tipologia")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Tracking Ordini: "), regular("monitoraggio stato consegne/servizi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Matching Fatture: "), regular("collegamento automatico fattura passiva → ordine → commessa")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo Fatturazione (NUOVO)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Fatturazione Attiva: "), regular("generazione fatture verso clienti a chiusura commessa")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Fatturazione Passiva: "), regular("registrazione e gestione fatture fornitori")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Scadenzario: "), regular("monitoraggio incassi e pagamenti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Export Contabile: "), regular("esportazione dati per eventuale integrazione ERP futura")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo Anagrafiche")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Database risorse umane (sync con Task Management)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Anagrafica clienti (sync da CRM - LeadMe Evolution)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Registro fornitori e partner")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Centro Analytics e Business Intelligence")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Dashboard interattive con grafici dinamici")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("KPI real-time: marginalità, redditività per cliente/servizio")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Comparazioni preventivo vs consuntivo")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Ore: "), regular("ricezione ore effettive da Task Management, confronto con budget da CRM")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Motore NLP: "), regular("interrogazioni in linguaggio naturale (backend per Sally)")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Benefici Attesi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Centralizzazione completa gestione finanziaria")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Visibilità real-time su costi, margini, cash flow")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Eliminazione Excel per tracking finanziario")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Consuntivi accurati senza intervento manuale")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Tracciabilità completa per compliance e audit")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 2.3 Task Management
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.3 Task Management System")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione Funzionale")]
      }),
      createParagraph("Piattaforma dedicata alla pianificazione, assegnazione e monitoraggio delle attività operative, progettata per sostituire i processi frammentati attuali e offrire una visione unificata del carico di lavoro."),
      createParagraph([
        bold("Principio architetturale chiave: "),
        regular("Task Management è l'"),
        bold("unico punto di input delle ore effettive"),
        regular(". I dipendenti loggano le ore sui task specifici tramite timbratura. Tally aggrega questi dati per commessa e li confronta con il budget definito su CRM.")
      ]),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità Core")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Creazione Task: "), regular("assegnazione rapida a uno o più responsabili")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Prioritizzazione: "), regular("sistema alta/media/bassa con evidenziazione visiva")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Scadenze e Milestone: "), regular("date inizio/fine e milestone intermedie")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Dipendenze: "), regular("gestione relazioni tra task (blocca/è bloccato da)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Vista Calendario: "), regular("giornaliero/settimanale/mensile")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Vista Gantt: "), regular("diagramma temporale per progetti complessi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Kanban Board: "), regular("organizzazione per stato (To Do, In Progress, Done)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Commenti e Allegati: "), regular("collaborazione su singoli task")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Notifiche Smart: "), regular("alert automatici per scadenze, ritardi, menzioni")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Integrazione Tally: "), regular("collegamento task a commesse")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo Timbratura Ore (NUOVO)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Cartellino Virtuale: "), regular("logging ore su task specifico")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Timer Integrato: "), regular("avvio/stop per tracciamento automatico")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Inserimento Manuale: "), regular("possibilità di inserire ore a posteriori")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Sync Tally: "), regular("invio automatico ore aggregate per commessa")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo HR/Risorse (NUOVO)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Anagrafica Dipendenti: "), regular("profili con skill, ruoli, disponibilità")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Gestione Ferie/Permessi: "), regular("calendario assenze")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Skill Matrix: "), regular("competenze per ottimizzare assegnazioni")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Capacity Planning: "), regular("vista carico lavoro per risorsa")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Scheduling Eventi: "), regular("assegnazione staff on-site")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Dashboard Manager")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Vista aggregata carico lavoro per team")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Identificazione colli di bottiglia")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Bilanciamento risorse")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Benefici Attesi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Visibilità completa su attività in corso e pianificate")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Riduzione task dimenticati o in ritardo")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Tracciabilità ore per attività e progetto")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Eliminazione email per coordinamento")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 2.4 LeadMe Evolution
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.4 LeadMe Evolution - CRM Completo")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione Funzionale")]
      }),
      createParagraph("Evoluzione della piattaforma LeadMe esistente, trasformandola da strumento di gestione lead in un CRM completo capace di accompagnare l'intero ciclo di vita del cliente: dal primo contatto alla conversione, dalla gestione della relazione commerciale al post-vendita."),
      createParagraph([
        bold("Principio architetturale chiave: "),
        regular("L'"),
        bold("Opportunità è l'entità madre"),
        regular(" dell'intero ecosistema. Quando un lead viene convertito e si crea l'Opportunità, da essa si generano automaticamente: la Commessa su Tally, i Task su Task Management, l'Evento su Crowd. Il CRM rimane il "),
        bold("master data dei clienti"),
        regular(" e il punto di definizione del Piano di Produzione (PDP) iniziale.")
      ]),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo Gestione Opportunità")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Pipeline Visiva: "), regular("fasi personalizzabili del processo di vendita")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Tracking Deal: "), regular("monitoraggio trattative con probabilità chiusura")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Conversione Lead → Cliente: "), regular("passaggio automatico al closing")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Piano di Produzione (PDP): "), regular("definizione budget, voci costo, risorse previste, ore stimate")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Bridge Automatico: "), regular("creazione istanze su Tally, Task Management, Crowd")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Workflow Approvazioni: "), regular("iter approvativo integrato per PDP e budget")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Gestione Post-vendita: "), regular("storico servizi erogati per cliente")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Forecast: "), regular("previsioni fatturato basate su pipeline")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo AI Messaging")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Generazione Automatica: "), regular("messaggi personalizzati email/SMS")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Analisi Storico: "), regular("considera tutte le interazioni precedenti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Integrazione LinkedIn: "), regular("info pubbliche da profilo per personalizzazione")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Suggerimento Tono: "), regular("raccomandazione stile comunicazione ottimale")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Tracking: "), regular("monitoraggio aperture e click")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo Lead Scoring")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Valutazione Automatica: "), regular("classificazione caldo/tiepido/freddo")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Criteri di Scoring: "), regular("frequenza interazioni, tipo feedback, tempo dall'ultimo contatto")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Fattori Aziendali: "), regular("settore, dimensione, potenziale")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Prioritizzazione: "), regular("suggerimenti al commerciale su chi contattare")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Modulo Reportistica NLP")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Query Naturali: "), regular("\"Quanti lead ha Simona con status positivo nell'ultimo trimestre?\"")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Esempi: "), regular("\"Quali aziende del settore Finance hanno lead in corso?\"")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Report On-demand: "), regular("generazione automatica ed export")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Nota: "), regular("Questo modulo funge da backend per Sally")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Benefici Attesi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Gestione completa ciclo vita cliente in un'unica piattaforma")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Aumento tasso conversione grazie a scoring intelligente")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Risparmio tempo redazione messaggi: 70%")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Visibilità real-time su pipeline e forecast")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Single source of truth per dati cliente")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 2.5 AI Event Companion
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.5 AI Event Companion - Assistente Digitale Partecipanti")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione Funzionale")]
      }),
      createParagraph("Applicazione mobile (PWA) progettata per arricchire l'esperienza dei partecipanti agli eventi corporate organizzati da Noloop. L'assistente digitale accompagna ogni ospite prima, durante e dopo l'evento."),
      createParagraph([
        bold("Nota architetturale: "),
        regular("Si integra nativamente con Crowd (Piattaforma Gestione Eventi). La distinzione funzionale è: "),
        bold("Crowd"),
        regular(" gestisce comunicazioni "),
        bold("pre-evento"),
        regular(" (inviti, logistica, conferme); "),
        bold("Event Companion"),
        regular(" gestisce l'esperienza "),
        bold("during-evento"),
        regular(" (notifiche live, FAQ, networking).")
      ]),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità per il Partecipante")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Agenda Personale: "), regular("programma evento personalizzato")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Notifiche Push: "), regular("alert sessioni imminenti e cambiamenti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Chatbot FAQ: "), regular("risposte istantanee su logistica, orari, location, wifi, dress code")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Mappe Interattive: "), regular("venue con indicazioni")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Networking Suggestions: "), regular("suggerimenti persone da incontrare basati su profilo e interessi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Messaggistica: "), regular("chat tra partecipanti (opt-in)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Feedback Live: "), regular("valutazione sessioni in tempo reale")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Gamification: "), regular("badge, punti, classifiche per engagement")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Funzionalità per l'Organizzatore (Noloop)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Dashboard Engagement: "), regular("metriche real-time")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Analytics Sessioni: "), regular("più seguite e apprezzate")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Heatmap Presenza: "), regular("distribuzione nelle aree venue")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Sentiment Analysis: "), regular("elaborazione feedback")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Report Post-evento: "), regular("generazione automatica")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Chatbot Intelligente")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Risposte automatiche FAQ")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Escalation intelligente a staff umano")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Supporto multilingua")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Apprendimento continuo dalle interazioni")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Benefici Attesi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Differenziazione competitiva sul mercato eventi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Riduzione carico staff on-site per domande ripetitive")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Dati preziosi su comportamento partecipanti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Possibilità di offrire servizio premium ai clienti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Nessuna app da installare (PWA)")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      // 2.6 Modulo Reparto Creativo
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("2.6 Modulo Reparto Creativo")]
      }),
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Descrizione Funzionale")]
      }),
      createParagraph("Suite di strumenti AI dedicati al reparto creativo per accelerare la fase di gara e aumentare le probabilità di conversione. Il modulo si integra con il CRM per ricevere dati sul prospect e salvare gli output prodotti."),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Agente per Analisi Strategica di Gara")]
      }),
      createParagraph("Strumento AI per accelerare la ricerca preliminare su nuovi clienti prospect:"),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Analisi Brief: "), regular("comprensione automatica requisiti e obiettivi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Posizionamento Cliente: "), regular("analisi brand, valori, tone of voice")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Trend di Mercato: "), regular("ricerca tendenze settore di riferimento")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Analisi Competitor: "), regular("benchmark eventi organizzati dalla concorrenza")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Storico Comunicazioni: "), regular("analisi iniziative marketing precedenti del cliente")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Output: "), regular("report strategico con insights e raccomandazioni")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Agente per Generazione Contenuti Multimediali")]
      }),
      createParagraph("Strumento AI per velocizzare la creazione di materiali visivi per le gare:"),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Mockup: "), regular("generazione bozze visive per concept")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Post-produzione Render: "), regular("elaborazione e miglioramento render esistenti")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Video Teaser: "), regular("creazione rapida video concept")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Adattamento Formati: "), regular("declinazione materiali per diversi canali")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Integrazione con Ecosistema")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Input da CRM: "), regular("ricezione dati prospect, brief, storico interazioni")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Output su CRM: "), regular("salvataggio materiali prodotti nell'Opportunità")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [bold("Sinergia Venue Finder: "), regular("utilizzo dati venue per contest visivo")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Benefici Attesi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Riduzione tempo preparazione gare: 50-60%")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Maggiore qualità analisi strategica")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Aumento numero gare gestibili")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Materiali visivi più professionali")]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ========== SECTION 3: INTEGRATED ARCHITECTURE ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Architettura Integrata")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.1 Flusso Operativo End-to-End")]
      }),
      createParagraph("Il seguente schema illustra il flusso completo dalla generazione del lead alla chiusura della commessa:"),
      
      // Flow diagram as table
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [2000, 500, 6500],
        rows: [
          new TableRow({
            children: [
              headerCell("Fase", 2000),
              headerCell("", 500),
              headerCell("Dettaglio", 6500)
            ]
          }),
          new TableRow({
            children: [
              cell("1. LEAD", 2000, "E8F4FD"),
              cell("→", 500, "E8F4FD"),
              cell("LeadMe: importazione da LinkedIn, arricchimento, tracking attività", 6500, "E8F4FD")
            ]
          }),
          new TableRow({
            children: [
              cell("2. GARA/PITCH", 2000, "FDF2E9"),
              cell("→", 500, "FDF2E9"),
              cell("AI Venue Finder + Modulo Creativo + AI Messaging per materiali gara", 6500, "FDF2E9")
            ]
          }),
          new TableRow({
            children: [
              cell("3. OPPORTUNITÀ", 2000, "D5F5E3"),
              cell("→", 500, "D5F5E3"),
              cell("CRM (LeadMe Evolution): pipeline, PDP, budget, risorse previste, ore stimate", 6500, "D5F5E3")
            ]
          }),
          new TableRow({
            children: [
              cell("4. COMMESSA", 2000, "FADBD8"),
              cell("→", 500, "FADBD8"),
              cell("Tally: creazione automatica da Opportunità, eredita PDP", 6500, "FADBD8")
            ]
          }),
          new TableRow({
            children: [
              cell("5. TASK", 2000, "F5EEF8"),
              cell("→", 500, "F5EEF8"),
              cell("Task Management: creazione task operativi, assegnazione risorse, timbratura ore", 6500, "F5EEF8")
            ]
          }),
          new TableRow({
            children: [
              cell("6. EVENTO", 2000, "FEF9E7"),
              cell("→", 500, "FEF9E7"),
              cell("Crowd: gestione partecipanti, logistica | Event Companion: esperienza live", 6500, "FEF9E7")
            ]
          }),
          new TableRow({
            children: [
              cell("7. CHIUSURA", 2000, "E8DAEF"),
              cell("→", 500, "E8DAEF"),
              cell("Tally: consuntivo costi, confronto budget, fatturazione, analisi margine", 6500, "E8DAEF")
            ]
          })
        ]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.2 Master Data e Ownership")]
      }),
      createParagraph("Definizione chiara di quale sistema è \"master\" per ogni tipologia di dato:"),
      
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [3000, 3000, 3000],
        rows: [
          new TableRow({
            children: [
              headerCell("Entità/Dato", 3000),
              headerCell("Sistema Master", 3000),
              headerCell("Sistemi Slave (ricevono)", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Clienti / Lead", 3000),
              cell("LeadMe / LeadMe Evolution", 3000),
              cell("Tally, Task Management", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Opportunità", 3000),
              cell("LeadMe Evolution", 3000),
              cell("Tally, Task Management, Crowd", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Piano di Produzione (PDP)", 3000),
              cell("LeadMe Evolution", 3000),
              cell("Tally (sola lettura)", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Ore Previste", 3000),
              cell("LeadMe Evolution", 3000),
              cell("Task Management, Tally", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Ore Effettive", 3000),
              cell("Task Management", 3000),
              cell("Tally (per confronto)", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Commessa (dati finanziari)", 3000),
              cell("Tally", 3000),
              cell("-", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Fornitori / Acquisti", 3000),
              cell("Tally", 3000),
              cell("-", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Fatture", 3000),
              cell("Tally", 3000),
              cell("-", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Risorse / HR", 3000),
              cell("Task Management", 3000),
              cell("Tally", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Partecipanti Evento", 3000),
              cell("Crowd", 3000),
              cell("Event Companion", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Documenti Progetto", 3000),
              cell("SharePoint", 3000),
              cell("Tutti (via integrazione)", 3000)
            ]
          })
        ]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.3 Sally come Front-End AI Unificato")]
      }),
      createParagraph("Architettura del layer conversazionale:"),
      
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4500, 4500],
        rows: [
          new TableRow({
            children: [
              headerCell("Componente", 4500),
              headerCell("Ruolo", 4500)
            ]
          }),
          new TableRow({
            children: [
              cell("Sally", 4500),
              cell("Unico punto di accesso conversazionale per tutti gli utenti", 4500)
            ]
          }),
          new TableRow({
            children: [
              cell("LeadMe NLP Engine", 4500),
              cell("Backend per query su lead, clienti, pipeline (interrogato da Sally)", 4500)
            ]
          }),
          new TableRow({
            children: [
              cell("Tally NLP Engine", 4500),
              cell("Backend per query su commesse, costi, margini (interrogato da Sally)", 4500)
            ]
          }),
          new TableRow({
            children: [
              cell("SharePoint Connector", 4500),
              cell("Backend per ricerca documenti (interrogato da Sally)", 4500)
            ]
          }),
          new TableRow({
            children: [
              cell("Email Connector", 4500),
              cell("Backend per ricerca email (interrogato da Sally)", 4500)
            ]
          })
        ]
      }),
      new Paragraph({ spacing: { after: 100 } }),
      createParagraph([
        bold("Principio: "),
        regular("L'utente non deve mai chiedersi \"a quale sistema chiedo questa informazione?\". Parla con Sally, che smista automaticamente la richiesta al backend appropriato.")
      ]),
      new Paragraph({ spacing: { after: 300 } }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("3.4 Integrazioni Pianificate")]
      }),
      
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [3000, 3000, 3000],
        rows: [
          new TableRow({
            children: [
              headerCell("Integrazione", 3000),
              headerCell("Stato", 3000),
              headerCell("Note", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("SharePoint", 3000),
              cell("Da sviluppare Wave 2", 3000),
              cell("Documenti collegati a commesse", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("AI Venue Finder", 3000),
              cell("Roadmap", 3000),
              cell("Portare Gem Gemini nell'ecosistema", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("Document Management Custom", 3000),
              cell("Roadmap futura", 3000),
              cell("Post Wave 2", 3000)
            ]
          }),
          new TableRow({
            children: [
              cell("ERP/Contabilità esterna", 3000),
              cell("Opzionale", 3000),
              cell("Se necessario in futuro", 3000)
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ========== SECTION 4: ROADMAP ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Roadmap e Sequenza di Sviluppo")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("4.1 Sequenza Raccomandata Wave 2")]
      }),
      createParagraph("La sequenza di sviluppo tiene conto delle dipendenze architetturali tra i moduli:"),
      
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [bold("Tally (Core)"), regular(" - Definisce il modello dati della commessa su cui si basa tutto")]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [bold("LeadMe Evolution - Modulo Opportunità"), regular(" - Crea il bridge CRM → Tally")]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [bold("Task Management"), regular(" - Si aggancia a Commessa (Tally) e Opportunità (CRM)")]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [bold("LeadMe Evolution - Altri Moduli"), regular(" - AI Messaging, Lead Scoring, NLP")]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [bold("Modulo Reparto Creativo"), regular(" - Si integra con CRM consolidato")]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [bold("Sally"), regular(" - Layer unificante che interroga tutti i sistemi")]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [bold("AI Event Companion"), regular(" - Ultimo, dipende da Crowd stabilizzato")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("4.2 Milestone Chiave")]
      }),
      
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [2500, 4000, 2500],
        rows: [
          new TableRow({
            children: [
              headerCell("Milestone", 2500),
              headerCell("Deliverable", 4000),
              headerCell("Dipendenze", 2500)
            ]
          }),
          new TableRow({
            children: [
              cell("M1", 2500),
              cell("Tally Core + Modulo Commesse", 4000),
              cell("Wave 1 completata", 2500)
            ]
          }),
          new TableRow({
            children: [
              cell("M2", 2500),
              cell("LeadMe Evolution - Opportunità + Bridge", 4000),
              cell("M1", 2500)
            ]
          }),
          new TableRow({
            children: [
              cell("M3", 2500),
              cell("Task Management + HR + Timbratura", 4000),
              cell("M1, M2", 2500)
            ]
          }),
          new TableRow({
            children: [
              cell("M4", 2500),
              cell("Tally - Fornitori/Acquisti + Fatturazione", 4000),
              cell("M1", 2500)
            ]
          }),
          new TableRow({
            children: [
              cell("M5", 2500),
              cell("LeadMe Evolution - AI Messaging, Scoring, NLP", 4000),
              cell("M2", 2500)
            ]
          }),
          new TableRow({
            children: [
              cell("M6", 2500),
              cell("Modulo Reparto Creativo", 4000),
              cell("M2, M5", 2500)
            ]
          }),
          new TableRow({
            children: [
              cell("M7", 2500),
              cell("Sally - Agente Unificato", 4000),
              cell("M1-M6", 2500)
            ]
          }),
          new TableRow({
            children: [
              cell("M8", 2500),
              cell("AI Event Companion", 4000),
              cell("Crowd stabilizzato", 2500)
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ========== SECTION 5: SUMMARY TABLE ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Riepilogo Soluzioni")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("5.1 Wave 1 - Soluzioni Sviluppate")]
      }),
      
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [3500, 3500, 2000],
        rows: [
          new TableRow({
            children: [
              headerCell("Soluzione", 3500),
              headerCell("Funzione Principale", 3500),
              headerCell("Stato", 2000)
            ]
          }),
          new TableRow({
            children: [
              cell("Ecosistema AI Noloop", 3500),
              cell("Infrastruttura, auth, permessi", 3500),
              cell("Completato", 2000)
            ]
          }),
          new TableRow({
            children: [
              cell("LeadMe", 3500),
              cell("Gestione lead, scraper LinkedIn", 3500),
              cell("Operativo", 2000)
            ]
          }),
          new TableRow({
            children: [
              cell("AI Venue Finder", 3500),
              cell("Ricerca venue, ristoranti, attività", 3500),
              cell("Operativo (Gem)", 2000)
            ]
          }),
          new TableRow({
            children: [
              cell("Crowd (Gestione Eventi)", 3500),
              cell("Partecipanti, grouping, comunicazioni", 3500),
              cell("In sviluppo", 2000)
            ]
          }),
          new TableRow({
            children: [
              cell("Minutes", 3500),
              cell("Trascrizioni, minute, next steps", 3500),
              cell("In sviluppo", 2000)
            ]
          }),
          new TableRow({
            children: [
              cell("Analisi Progress", 3500),
              cell("Dashboard KPI (transitorio)", 3500),
              cell("In sviluppo", 2000)
            ]
          })
        ]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("5.2 Wave 2 - Soluzioni Proposte")]
      }),
      
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [3500, 5500],
        rows: [
          new TableRow({
            children: [
              headerCell("Soluzione", 3500),
              headerCell("Funzione Principale", 5500)
            ]
          }),
          new TableRow({
            children: [
              cell("Sally", 3500),
              cell("Agente virtuale 360°, unico front-end AI", 5500)
            ]
          }),
          new TableRow({
            children: [
              cell("Tally", 3500),
              cell("Commesse, BI, Fornitori/Acquisti, Fatturazione", 5500)
            ]
          }),
          new TableRow({
            children: [
              cell("Task Management", 3500),
              cell("Task operativi, Timbratura ore, HR/Risorse", 5500)
            ]
          }),
          new TableRow({
            children: [
              cell("LeadMe Evolution", 3500),
              cell("CRM completo, Opportunità, AI Messaging, Lead Scoring, NLP", 5500)
            ]
          }),
          new TableRow({
            children: [
              cell("AI Event Companion", 3500),
              cell("App partecipanti, chatbot, networking, gamification", 5500)
            ]
          }),
          new TableRow({
            children: [
              cell("Modulo Reparto Creativo", 3500),
              cell("Analisi strategica gare, generazione contenuti multimediali", 5500)
            ]
          })
        ]
      }),
      
      new Paragraph({ children: [new PageBreak()] }),
      
      // ========== APPENDIX ==========
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("Appendice")]
      }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("A.1 Glossario")]
      }),
      
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [3000, 6000],
        rows: [
          new TableRow({
            children: [
              headerCell("Termine", 3000),
              headerCell("Definizione", 6000)
            ]
          }),
          new TableRow({
            children: [
              cell("Opportunità", 3000),
              cell("Entità madre che rappresenta un potenziale progetto/evento, da cui derivano commessa, task ed evento", 6000)
            ]
          }),
          new TableRow({
            children: [
              cell("PDP", 3000),
              cell("Piano di Produzione: definizione di budget, voci di costo, risorse e ore previste per un progetto", 6000)
            ]
          }),
          new TableRow({
            children: [
              cell("Commessa", 3000),
              cell("Istanza operativa di un progetto su Tally, con tracking finanziario", 6000)
            ]
          }),
          new TableRow({
            children: [
              cell("Master Data", 3000),
              cell("Sistema che detiene la versione \"ufficiale\" di un dato, da cui altri sistemi ereditano", 6000)
            ]
          }),
          new TableRow({
            children: [
              cell("Bridge", 3000),
              cell("Integrazione automatica che propaga dati da un sistema all'altro", 6000)
            ]
          }),
          new TableRow({
            children: [
              cell("NLP Engine", 3000),
              cell("Motore di elaborazione linguaggio naturale per interrogazioni conversazionali", 6000)
            ]
          }),
          new TableRow({
            children: [
              cell("PWA", 3000),
              cell("Progressive Web App: applicazione web accessibile da browser senza installazione", 6000)
            ]
          })
        ]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("A.2 Riferimenti Documentali")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Proposta Wave 1 - Noloop_Proposta_di_Investimento_AI.pdf")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Guida LeadMe - LeadMe_Noloop_Guida_alle_Funzionalita_Principali.docx")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Guida AI Venue Finder - AI_venue_Finder.docx")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [regular("Proposta Reparto Creativo - Reparto_Creativo.docx")]
      }),
      new Paragraph({ spacing: { after: 300 } }),
      
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("A.3 Contatti")]
      }),
      createParagraph([
        bold("Partner Tecnologico: "),
        regular("HeyAI S.r.l.")
      ]),
      createParagraph("Via Parigi 11, 00185 Roma (RM)"),
      createParagraph("info@heyaidigital.it | www.heyaidigital.it"),
      new Paragraph({ spacing: { after: 600 } }),
      
      // Final note
      new Paragraph({
        alignment: AlignmentType.CENTER,
        shading: { fill: "F8F9FA", type: ShadingType.CLEAR },
        spacing: { before: 400, after: 400 },
        children: [
          italic("Documento riservato - © 2026 HeyAI S.r.l. - Tutti i diritti riservati")
        ]
      })
    ]
  }]
});

// Generate the document
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/home/claude/Noloop_Ecosistema_AI_Wave2_Documento_Completo.docx', buffer);
  console.log('Document created successfully!');
});