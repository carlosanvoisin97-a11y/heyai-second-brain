const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, ImageRun,
  Header, Footer, AlignmentType, HeadingLevel, LevelFormat,
  BorderStyle, WidthType, ShadingType, PageBreak, PageNumber,
  Table, TableRow, TableCell,
  PositionalTab, PositionalTabAlignment, PositionalTabRelativeTo, PositionalTabLeader,
  TabStopType, TabStopPosition
} = require("docx");

const logoBuffer = fs.readFileSync("unpacked1/word/media/image2.png");
const footerIconBuffer = fs.readFileSync("unpacked1/word/media/image3.png");

// Color constants matching HeyAI brand
const BRAND_TEAL = "1A7A8A";
const BRAND_DARK = "2D3748";
const TEXT_COLOR = "333333";
const LIGHT_GRAY = "F7F7F7";
const MED_GRAY = "E2E8F0";
const HEADER_INFO_COLOR = "666666";

// Helper functions
function heading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, bold: true, size: 32, font: "Calibri", color: BRAND_TEAL })]
  });
}

function heading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 160 },
    children: [new TextRun({ text, bold: true, size: 26, font: "Calibri", color: BRAND_DARK })]
  });
}

function heading3(text) {
  return new Paragraph({
    spacing: { before: 200, after: 120 },
    children: [new TextRun({ text, bold: true, size: 23, font: "Calibri", color: BRAND_DARK })]
  });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { before: opts.spaceBefore || 80, after: opts.spaceAfter || 80, line: 276 },
    alignment: opts.alignment || AlignmentType.JUSTIFIED,
    children: [new TextRun({ text, size: 22, font: "Calibri", color: TEXT_COLOR, ...(opts.run || {}) })]
  });
}

function paraMulti(runs, opts = {}) {
  return new Paragraph({
    spacing: { before: opts.spaceBefore || 80, after: opts.spaceAfter || 80, line: 276 },
    alignment: opts.alignment || AlignmentType.JUSTIFIED,
    children: runs.map(r => {
      if (typeof r === "string") return new TextRun({ text: r, size: 22, font: "Calibri", color: TEXT_COLOR });
      return new TextRun({ size: 22, font: "Calibri", color: TEXT_COLOR, ...r });
    })
  });
}

function bulletItem(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { before: 40, after: 40, line: 276 },
    children: [new TextRun({ text, size: 22, font: "Calibri", color: TEXT_COLOR })]
  });
}

function bulletItemBold(label, text, level = 0) {
  return new Paragraph({
    numbering: { reference: "bullets", level },
    spacing: { before: 40, after: 40, line: 276 },
    children: [
      new TextRun({ text: label, size: 22, font: "Calibri", color: TEXT_COLOR, bold: true }),
      new TextRun({ text, size: 22, font: "Calibri", color: TEXT_COLOR })
    ]
  });
}

function numberedItem(text, level = 0) {
  return new Paragraph({
    numbering: { reference: "numbers", level },
    spacing: { before: 40, after: 40, line: 276 },
    children: [new TextRun({ text, size: 22, font: "Calibri", color: TEXT_COLOR })]
  });
}

function numberedItemBold(label, text, level = 0) {
  return new Paragraph({
    numbering: { reference: "numbers", level },
    spacing: { before: 60, after: 40, line: 276 },
    children: [
      new TextRun({ text: label, size: 22, font: "Calibri", color: TEXT_COLOR, bold: true }),
      new TextRun({ text, size: 22, font: "Calibri", color: TEXT_COLOR })
    ]
  });
}

function emptyPara() {
  return new Paragraph({ spacing: { before: 0, after: 0 }, children: [] });
}

// Table helpers
const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function headerCell(text, width) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: "1A7A8A", type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({
      alignment: AlignmentType.LEFT,
      children: [new TextRun({ text, size: 20, font: "Calibri", color: "FFFFFF", bold: true })]
    })]
  });
}

function dataCell(text, width, opts = {}) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children: [new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      children: [new TextRun({ text, size: 20, font: "Calibri", color: TEXT_COLOR, bold: opts.bold || false, ...(opts.strikethrough ? { strike: true } : {}) })]
    })]
  });
}


// ======== BUILD DOCUMENT ========

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Calibri", color: BRAND_TEAL },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Calibri", color: BRAND_DARK },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.BULLET, text: "\u25E6", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 1440, hanging: 360 } } } }
        ]
      },
      {
        reference: "numbers",
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.LOWER_LETTER, text: "%2)", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 1440, hanging: 360 } } } }
        ]
      },
      {
        reference: "steps",
        levels: [
          { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
        ]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1800, right: 1440, bottom: 1800, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { after: 0 },
            children: [
              new ImageRun({
                data: logoBuffer, transformation: { width: 120, height: 85 }, type: "png"
              }),
              new TextRun({ text: "\t", size: 16 }),
              new PositionalTab({
                alignment: PositionalTabAlignment.RIGHT,
                relativeTo: PositionalTabRelativeTo.MARGIN,
                leader: PositionalTabLeader.NONE
              }),
              new TextRun({ text: "HeyAI S.r.l.", size: 16, font: "Calibri", color: HEADER_INFO_COLOR }),
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            spacing: { before: 0, after: 0 },
            children: [
              new TextRun({ text: "Sede legale: Via Parigi 11, 00185 Roma (RM)", size: 16, font: "Calibri", color: HEADER_INFO_COLOR }),
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.RIGHT,
            spacing: { before: 0, after: 0 },
            children: [
              new TextRun({ text: "info@heyaidigital.it | www.heyaidigital.it", size: 16, font: "Calibri", color: HEADER_INFO_COLOR }),
            ]
          }),
          new Paragraph({
            border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRAND_TEAL, space: 1 } },
            spacing: { before: 80, after: 0 },
            children: []
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            border: { top: { style: BorderStyle.SINGLE, size: 4, color: MED_GRAY, space: 4 } },
            spacing: { before: 0, after: 60 },
            children: []
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 40 },
            children: [
              new ImageRun({
                data: footerIconBuffer, transformation: { width: 30, height: 19 }, type: "png"
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 0 },
            children: [
              new TextRun({ text: "PEC: heyai@pec.it | REA RM \u2013 1751505 | Cod. Fiscale: 17947791004 | Amministratore Unico: Ing. Bruno Mattucci", size: 14, font: "Calibri", color: HEADER_INFO_COLOR })
            ]
          })
        ]
      })
    },
    children: [

      // ===== TITLE =====
      new Paragraph({
        spacing: { before: 600, after: 400 },
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Proposta di Investimento Strategico:", size: 40, font: "Calibri", bold: true, color: BRAND_TEAL }),
        ]
      }),
      new Paragraph({
        spacing: { before: 0, after: 200 },
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Sviluppo dell\u2019Ecosistema AI Noloop", size: 36, font: "Calibri", bold: true, color: BRAND_DARK }),
        ]
      }),
      new Paragraph({
        spacing: { before: 100, after: 600 },
        alignment: AlignmentType.CENTER,
        border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: BRAND_TEAL, space: 1 } },
        children: [
          new TextRun({ text: "Wave 1 \u2013 Documento Unificato (Requisiti Base e Requisiti Aggiuntivi)", size: 24, font: "Calibri", italics: true, color: HEADER_INFO_COLOR }),
        ]
      }),

      // ===== 1. INTRODUZIONE =====
      heading1("1. Introduzione"),

      heading2("1.1. Obiettivo del Progetto di Investimento e Trasformazione"),
      para("Questo documento illustra la proposta di investimento per la Wave 1 del progetto di trasformazione digitale di Noloop. L\u2019obiettivo \u00e8 la creazione di un ecosistema di Intelligenza Artificiale integrato, progettato per risolvere criticit\u00e0 operative, potenziare le capacit\u00e0 strategiche dei team e costruire le fondamenta tecnologiche necessarie per garantire la crescita e la scalabilit\u00e0 futura dell\u2019azienda. L\u2019implementazione della Wave 1 mira a generare un impatto immediato sull\u2019efficienza, sulla compliance e sulla gestione dei dati, abilitando tutte le successive innovazioni."),
      para("Il presente documento unifica e consolida la proposta originaria con le successive integrazioni di requisiti aggiuntivi, concordate tra le parti nel corso dello sviluppo, al fine di costituire un unico riferimento tecnico e commerciale per l\u2019intero perimetro della Wave 1.", { run: { italics: true } }),

      heading2("1.2. Metodologia di Analisi"),
      para("Le soluzioni e la roadmap qui presentate sono il risultato di un\u2019approfondita fase di analisi strategica, che ha coinvolto 10 sessioni di deep-dive con tutti i principali reparti aziendali (Progress, Biglietteria, Segreterie, PM, Produzione, Creativo, Amministrazione, Legale e On-Trade). Questo approccio olistico ha permesso di mappare le reali necessit\u00e0 operative, di identificare le sinergie inter-funzionali e di garantire che ogni iniziativa proposta risponda a un\u2019esigenza di business concreta e validata."),

      heading2("1.3. Principali Risultati Emersi"),
      para("Dall\u2019analisi \u00e8 emerso un quadro chiaro e coerente, sintetizzabile in tre scoperte strategiche:"),
      bulletItemBold("Necessit\u00e0 di Strutturazione dei Dati: ", "Esiste una dipendenza critica da processi manuali basati su file Excel non standardizzati. Questa frammentazione rappresenta oggi la principale barriera all\u2019efficienza e il prerequisito fondamentale da risolvere per abilitare qualsiasi iniziativa di automazione e analisi avanzata."),
      bulletItemBold("Potenziale degli \u201CAgenti AI\u201D Specializzati: ", "È stato identificato un elevato potenziale nell\u2019adozione di agenti di intelligenza artificiale, addestrati specificamente sui processi Noloop, per automatizzare task ad alto dispendio di tempo (ricerca, analisi, reporting), liberando cos\u00ec le risorse umane per attivit\u00e0 a maggior valore aggiunto."),
      bulletItemBold("Sinergie di Sviluppo e Piattaforme Comuni: ", "Molte delle soluzioni richieste dai singoli reparti possono essere costruite su piattaforme tecnologiche comuni. Questo approccio permette di creare significative economie di scala nello sviluppo, riducendo i costi complessivi e garantendo un\u2019esperienza utente coerente in tutta l\u2019organizzazione."),

      // ===== 2. DESCRIZIONE FUNZIONALE =====
      new Paragraph({ children: [new PageBreak()] }),
      heading1("2. Descrizione Funzionale dei Casi d\u2019Uso (Wave 1)"),
      para("Di seguito vengono descritte le iniziative strategiche approvate per la Wave 1. Le sezioni da 2.1 a 2.4 coprono il perimetro originario; la sezione 2.5 descrive i requisiti aggiuntivi concordati successivamente."),

      // --- 2.1 Ecosistema AI ---
      heading2("2.1. Ecosistema AI Noloop"),
      bulletItemBold("Descrizione Funzionale: ", "Questa iniziativa rappresenta le fondamenta tecnologiche dell\u2019intero progetto. Consiste nello sviluppo di un workspace unificato e sicuro, che funger\u00e0 da portale di accesso unico per tutti i dipendenti alle future funzionalit\u00e0 di Intelligenza Artificiale. La piattaforma gestir\u00e0 l\u2019autenticazione degli utenti, i permessi basati sui ruoli e sulle licenze, e garantir\u00e0 che tutte le interazioni con i modelli AI avvengano in un ambiente controllato e conforme alle policy di sicurezza aziendali."),
      bulletItemBold("Impatto: ", "Pur essendo un\u2019iniziativa prettamente infrastrutturale, il suo valore \u00e8 strategico. Abilita lo sviluppo di tutti gli altri moduli in modo scalabile e sicuro, garantisce la compliance al GDPR e centralizza la gestione degli strumenti AI, evitando la frammentazione tecnologica."),
      bulletItemBold("Complessit\u00e0 Tecnica: ", "Media."),

      // --- 2.2 Piattaforma Gestione Eventi ---
      heading2("2.2. Piattaforma Gestione Eventi (Segreteria & Biglietteria)"),
      bulletItemBold("Descrizione Funzionale: ", "Questa soluzione mira a digitalizzare e internalizzare l\u2019intero processo di gestione dei partecipanti, oggi frammentato tra software di terze parti e procedure manuali su Excel. La piattaforma coprir\u00e0 l\u2019intero ciclo di vita:"),
      bulletItemBold("Raccolta Dati (Segreteria): ", "Verr\u00e0 creato un form builder custom per la creazione di moduli di iscrizione brandizzati, i cui dati confluiranno in un database centralizzato.", 1),
      bulletItemBold("Gestione e Grouping (Segreteria): ", "Un motore di regole permetter\u00e0 di creare gruppi dinamici di partecipanti per l\u2019assegnazione a hotel, voli e attivit\u00e0, automatizzando un processo oggi estremamente complesso.", 1),
      bulletItemBold("Comunicazione: ", "La piattaforma si integrer\u00e0 con API per l\u2019invio di comunicazioni massive e personalizzate via Email e WhatsApp.", 1),
      bulletItemBold("Impatto: ", "Risolve una delle criticit\u00e0 operative trasversali, riducendo drasticamente il tempo dedicato ad attivit\u00e0 manuali e il rischio di errori. La creazione di un asset tecnologico proprietario e di un database strutturato degli eventi rappresenta un valore inestimabile per le analisi future e per operare un efficientamento dei costi riducendo le dipendenze da vendor esterni."),
      bulletItemBold("Complessit\u00e0 Tecnica: ", "Alta."),

      // --- 2.3 Analisi Dati ---
      heading2("2.3. Analisi Dati e Reportistica Avanzata"),
      bulletItemBold("Descrizione Funzionale: ", "Questa soluzione \u00e8 progettata per la Direzione e mira a trasformare il file \u201CProgress\u201D, oggi un complesso aggregato di dati, in una fonte di insight strategici. Un agente AI verr\u00e0 addestrato per leggere e interpretare il file, generando dashboard dinamiche e report automatici su KPI fondamentali: marginalit\u00e0 per cliente e tipologia di servizio, analisi del fatturato (New Business vs. consolidato), allocazione delle risorse e analisi degli scostamenti di budget."),
      bulletItemBold("Impatto: ", "Fornisce alla Direzione uno strumento di monitoraggio potente e in tempo reale, abilitando decisioni data-driven pi\u00f9 rapide e accurate. Automatizza un processo di reporting oggi interamente manuale e dispendioso, liberando tempo per l\u2019analisi strategica."),
      bulletItemBold("Complessit\u00e0 Tecnica: ", "Media."),

      // --- 2.4 Assistente Meeting ---
      heading2("2.4. Assistente Virtuale per Meeting"),
      bulletItemBold("Descrizione Funzionale: ", "Sviluppo di uno strumento interno per la generazione automatica di minute e next step a seguito delle riunioni. L\u2019assistente virtuale operer\u00e0 all\u2019interno dell\u2019ecosistema sicuro di Noloop, garantendo che le trascrizioni e i dati discussi non vengano mai condivisi con piattaforme di terze parti. La soluzione fornir\u00e0 un output strutturato, evidenziando decisioni, punti chiave e azioni da intraprendere."),
      bulletItemBold("Impatto: ", "Risolve un\u2019immediata esigenza di compliance e sicurezza sollevata dai clienti pi\u00f9 esigenti. Aumenta l\u2019efficienza di tutti i team, riducendo il tempo dedicato alla reportistica post-riunione e garantendo una tracciabilit\u00e0 precisa delle decisioni prese."),
      bulletItemBold("Complessit\u00e0 Tecnica: ", "Media."),

      // ===== 2.5 REQUISITI AGGIUNTIVI =====
      new Paragraph({ children: [new PageBreak()] }),
      heading2("2.5. Requisiti Aggiuntivi \u2013 Piattaforma Gestione Eventi"),
      para("Nel corso dello sviluppo della Piattaforma Gestione Eventi (\u00a72.2), sono state identificate ulteriori funzionalit\u00e0 necessarie per potenziare gli strumenti di gestione del Reparto Segreteria. L\u2019implementazione di queste feature risponde a una precisa necessit\u00e0 operativa: automatizzare i processi logistici ad alto volume. I vantaggi diretti per l\u2019azienda sono:"),
      bulletItem("Riduzione drastica del lavoro manuale"),
      bulletItem("Azzeramento degli errori di assegnazione"),
      bulletItem("Accelerazione nella produzione di output verso i fornitori"),

      heading3("A. Automazione Viaggi e Biglietteria"),
      para("L\u2019obiettivo \u00e8 eliminare la gestione manuale di centinaia di documenti di viaggio, garantendo che ogni partecipante venga associato automaticamente al biglietto corretto senza interventi manuali."),

      numberedItemBold("Associazione Automatica Itinerari: ", "Il sistema sar\u00e0 in grado di associare automaticamente l\u2019itinerario di viaggio per ogni partecipante."),
      bulletItemBold("Funzionamento: ", "Invece di associare manualmente ogni tratta al singolo utente, la segreteria potr\u00e0 importare le liste massive delle tratte (es. treni, voli). Il sistema incrocer\u00e0 autonomamente questi dati con la citt\u00e0 di provenienza e arrivo del partecipante, componendo l\u2019itinerario completo.", 1),
      bulletItemBold("Vantaggio: ", "Risparmio significativo di ore-uomo nella fase di gestione dei dati partecipanti.", 1),

      numberedItemBold("Gestione Massiva dei Biglietti PDF: ", "Soluzione per gestire i file cumulativi inviati dalle agenzie viaggi (es. un unico PDF contenente 200 biglietti)."),
      bulletItemBold("Funzionamento: ", "Il sistema processer\u00e0 il file unico, separando i singoli biglietti e riconoscendo automaticamente il nominativo del passeggero all\u2019interno del documento. Una volta identificato, il biglietto verr\u00e0 salvato e associato al profilo del partecipante corretto.", 1),
      bulletItemBold("Vantaggio: ", "Elimina la necessit\u00e0 di spacchettare manualmente i file, caricare e associare i biglietti uno per volta, prevenendo errori e creando un significativo risparmio di risorse.", 1),

      heading3("B. Reporting Operativo e On-Site"),
      para("Strumenti dedicati a produrre documentazione formattata e pronta per essere inviata ai fornitori esterni, senza necessit\u00e0 di rielaborazione grafica o correzioni su Excel."),

      numberedItemBold("Generazione \u201CRooming List\u201D per Hotel: ", "Creazione automatica di report specifici per la gestione alberghiera."),
      bulletItemBold("Funzionamento: ", "Il sistema generer\u00e0 file strutturati esattamente come richiesto dagli hotel (ospite e accompagnatore sulla stessa riga, date precise di check-in/out, conteggi giornalieri).", 1),
      bulletItemBold("Vantaggio: ", "Il documento \u00e8 pronto per l\u2019invio immediato all\u2019hotel, evitando il copia-incolla manuale e riducendo il rischio di errori.", 1),

      numberedItemBold("Export Liste Operative: ", "Generazione di liste di servizio per lo staff on-site (autisti, hostess)."),
      bulletItemBold("Funzionamento: ", "Possibilit\u00e0 di estrarre liste filtrate (es. solo chi necessita di transfer o liste accredito) impaginate automaticamente in PDF con la grafica ufficiale dell\u2019evento.", 1),
      bulletItemBold("Vantaggio: ", "Fornisce a ogni fornitore solo le informazioni pertinenti in un formato professionale e accelera l\u2019operativit\u00e0 riducendo attivit\u00e0 manuali.", 1),

      heading3("C. Gestione Dati e User Experience"),
      para("Miglioramento della flessibilit\u00e0 nella raccolta dati per facilitare la registrazione iniziale per il partecipante."),

      numberedItemBold("Integrazione Dati Successiva: ", "Possibilit\u00e0 di richiedere informazioni aggiuntive ai partecipanti in una fase successiva alla prima registrazione."),
      bulletItemBold("Funzionamento: ", "Il sistema permette di inviare un modulo di aggiornamento che mostra solo i nuovi campi da compilare, mantenendo in memoria i dati gi\u00e0 acquisiti senza chiederli nuovamente all\u2019utente.", 1),
      bulletItemBold("Vantaggio: ", "Migliora l\u2019esperienza dell\u2019utente (che non deve ricompilare tutto) e garantisce l\u2019integrit\u00e0 del database unificando le informazioni.", 1),

      // ===== 3. DETTAGLIO QUOTAZIONI =====
      new Paragraph({ children: [new PageBreak()] }),
      heading1("3. Dettaglio delle Quotazioni (Wave 1)"),

      heading2("3.1. Nota sulle Stime dei Costi"),
      para("\u00c8 importante sottolineare che le quotazioni presentate in questo documento sono stime preliminari, elaborate sulla base delle informazioni raccolte durante le sessioni di analisi iniziali. Il loro scopo \u00e8 fornire un ordine di grandezza dell\u2019investimento richiesto per ogni iniziativa. Le cifre ufficiali e definitive potranno essere formalizzate solo al termine delle sessioni di deep-dive tecnico. Queste stime iniziali costituiscono quindi una indicazione per la pianificazione del budget."),
      para("Per garantire la massima trasparenza, si precisa che le stime di sviluppo attuali non includono i seguenti elementi:"),
      bulletItemBold("Costi di Consumo (Pay-per-Use): ", "I costi operativi per l\u2019utilizzo dei modelli di IA sono esclusi. Verr\u00e0 fornita una stima di consumo di token mensile per ogni soluzione."),
      bulletItemBold("Licenze Software di Terze Parti: ", "Le stime non comprendono eventuali costi per l\u2019acquisto o l\u2019integrazione con licenze software esterne."),
      bulletItemBold("Costi di Hosting e Infrastruttura: ", "I costi relativi all\u2019infrastruttura su cui risiederanno le soluzioni verranno definiti a parte a seguito dell\u2019allineamento con il vostro team IT."),
      bulletItemBold("Manutenzione Estesa: ", "La proposta includer\u00e0 un periodo di garanzia e manutenzione correttiva post-lancio (solitamente 3 mesi). Eventuali contratti di manutenzione evolutiva o di supporto a lungo termine verranno discussi e quotati separatamente."),

      heading2("3.2. Riepilogo Investimento Complessivo"),

      // Summary Table
      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [5400, 3626],
        rows: [
          new TableRow({
            children: [
              headerCell("Voce", 5400),
              headerCell("Importo (IVA esclusa)", 3626),
            ]
          }),
          new TableRow({
            children: [
              dataCell("Requisiti Base \u2013 Wave 1 (\u00a72.1 \u2013 \u00a72.4)", 5400),
              dataCell("\u20ac 100.000,00", 3626, { align: AlignmentType.RIGHT }),
            ]
          }),
          new TableRow({
            children: [
              dataCell("Requisiti Aggiuntivi \u2013 Piattaforma Gestione Eventi (\u00a72.5)", 5400),
              dataCell("\u20ac 19.000,00", 3626, { align: AlignmentType.RIGHT }),
            ]
          }),
          new TableRow({
            children: [
              dataCell("Totale Investimento Wave 1", 5400, { bold: true, shading: LIGHT_GRAY }),
              dataCell("\u20ac 119.000,00", 3626, { align: AlignmentType.RIGHT, bold: true, shading: LIGHT_GRAY }),
            ]
          }),
        ]
      }),

      emptyPara(),
      paraMulti([
        { text: "Nota: ", bold: true },
        "L\u2019importo relativo ai requisiti aggiuntivi (\u00a72.5) era stato inizialmente stimato in \u20ac 25.000,00 (IVA esclusa) ed \u00e8 stato successivamente rideterminato in \u20ac 19.000,00 (IVA esclusa) a seguito delle negoziazioni intercorse tra le parti."
      ]),

      heading2("3.3. Modalit\u00e0 di Fatturazione"),
      para("La fatturazione dell\u2019investimento complessivo sar\u00e0 strutturata come segue:"),

      // Payment schedule table
      new Table({
        width: { size: 9026, type: WidthType.DXA },
        columnWidths: [1200, 2800, 2600, 2426],
        rows: [
          new TableRow({
            children: [
              headerCell("Tranche", 1200),
              headerCell("Milestone", 2800),
              headerCell("Dettaglio", 2600),
              headerCell("Importo", 2426),
            ]
          }),
          new TableRow({
            children: [
              dataCell("1\u00aa", 1200, { align: AlignmentType.CENTER }),
              dataCell("Avvio dei lavori", 2800),
              dataCell("30% requisiti base", 2600),
              dataCell("\u20ac 30.000,00 (GI\u00c0 SALDATA)", 2426, { align: AlignmentType.RIGHT, bold: true }),
            ]
          }),
          new TableRow({
            children: [
              dataCell("2\u00aa", 1200, { align: AlignmentType.CENTER }),
              dataCell("Avvio fase di test", 2800),
              dataCell("35% req. base + 50% req. aggiuntivi", 2600),
              dataCell("\u20ac 44.500,00", 2426, { align: AlignmentType.RIGHT }),
            ]
          }),
          new TableRow({
            children: [
              dataCell("3\u00aa", 1200, { align: AlignmentType.CENTER }),
              dataCell("Consegna finale", 2800),
              dataCell("35% req. base + 50% req. aggiuntivi", 2600),
              dataCell("\u20ac 44.500,00", 2426, { align: AlignmentType.RIGHT }),
            ]
          }),
          new TableRow({
            children: [
              dataCell("", 1200),
              dataCell("", 2800),
              dataCell("Totale", 2600, { bold: true, shading: LIGHT_GRAY }),
              dataCell("\u20ac 119.000,00", 2426, { align: AlignmentType.RIGHT, bold: true, shading: LIGHT_GRAY }),
            ]
          }),
        ]
      }),

      emptyPara(),
      para("Dettaglio 2\u00aa e 3\u00aa tranche: ciascuna comprende \u20ac 35.000,00 (oltre IVA) per i requisiti base concordati nella proposta originaria, pi\u00f9 \u20ac 9.500,00 (oltre IVA) per i requisiti aggiuntivi di cui alla sezione 2.5 del presente documento."),

      // ===== 4. TIMELINE =====
      new Paragraph({ children: [new PageBreak()] }),
      heading1("4. Timeline di Realizzazione"),
      para("La timeline per l\u2019implementazione della Wave 1 \u00e8 stimata come segue, a partire dall\u2019approvazione formale della proposta:"),
      bulletItemBold("Fase 1: Kick-off e Deep-Dive Tecnici (Durata: 4 settimane) \u2013 ", "Sessioni di approfondimento con i referenti di reparto per definire nel dettaglio i requisiti di ogni modulo approvato. Al termine di questa fase, verranno presentate le quotazioni finali e vincolanti."),
      bulletItemBold("Fase 2: Sviluppo e Rilasci Incrementali (Durata: 16 settimane) \u2013 ", "Sviluppo agile dei moduli in \u201Csprint\u201D successivi, con rilasci intermedi per permettere al team Noloop di fornire feedback continui e garantire che il prodotto finale sia perfettamente allineato alle aspettative."),
      bulletItemBold("Fase 3: Test, Formazione e Go-live (Durata: 2 settimane) \u2013 ", "Sessioni di User Acceptance Testing (UAT), training dedicato agli utenti finali e rilascio ufficiale della piattaforma."),

      // ===== 5. GOVERNANCE =====
      heading1("5. Modello di Governance del Progetto"),
      para("Per assicurare il successo del programma e il rispetto delle tempistiche definite nella roadmap, verr\u00e0 adottato il seguente modello di governance, finalizzato a definire in modo chiaro ruoli e responsabilit\u00e0."),
      bulletItemBold("Referenti di Progetto: ", "Per ogni iniziativa, Noloop nominer\u00e0 un Referente di Progetto interno. Questa figura sar\u00e0 il nostro principale interlocutore, con la responsabilit\u00e0 di consolidare i requisiti, validare gli output di progetto e facilitare il coordinamento."),
      bulletItemBold("Stato Avanzamento Lavori (SAL): ", "Verranno schedulati incontri di SAL a cadenza regolare per il monitoraggio operativo dei progressi, la gestione delle criticit\u00e0 e l\u2019allineamento tra i team di lavoro."),
      bulletItemBold("Steering Committee: ", "Verr\u00e0 istituito uno SteerCo a cadenza mensile, composto dalla direzione di Noloop e dal management di HeyAI. Questo incontro avr\u00e0 lo scopo di revisionare l\u2019avanzamento strategico del programma, prendere decisioni di alto livello e garantire il costante allineamento con gli obiettivi di business."),

      // ===== 6. PROSSIMI PASSI =====
      heading1("6. Prossimi Passi"),
      new Paragraph({
        numbering: { reference: "steps", level: 0 },
        spacing: { before: 60, after: 40, line: 276 },
        children: [
          new TextRun({ text: "Approvazione Formale: ", size: 22, font: "Calibri", color: TEXT_COLOR, bold: true }),
          new TextRun({ text: "Accettazione della proposta di investimento e della roadmap strategica per la Wave 1.", size: 22, font: "Calibri", color: TEXT_COLOR })
        ]
      }),
      new Paragraph({
        numbering: { reference: "steps", level: 0 },
        spacing: { before: 60, after: 40, line: 276 },
        children: [
          new TextRun({ text: "Firma del Contratto Operativo: ", size: 22, font: "Calibri", color: TEXT_COLOR, bold: true }),
          new TextRun({ text: "Finalizzazione dell\u2019accordo quadro per avviare le attivit\u00e0.", size: 22, font: "Calibri", color: TEXT_COLOR })
        ]
      }),
      new Paragraph({
        numbering: { reference: "steps", level: 0 },
        spacing: { before: 60, after: 40, line: 276 },
        children: [
          new TextRun({ text: "Kick-off di Progetto: ", size: 22, font: "Calibri", color: TEXT_COLOR, bold: true }),
          new TextRun({ text: "Pianificazione della riunione di avvio per dare il via alla Fase 1 di deep-dive tecnico.", size: 22, font: "Calibri", color: TEXT_COLOR })
        ]
      }),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Noloop_Proposta_Investimento_Wave1_Unificata.docx", buffer);
  console.log("Document created successfully: " + buffer.length + " bytes");
});