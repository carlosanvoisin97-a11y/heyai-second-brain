const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, ShadingType, TabStopType } = require("docx");
const fs = require("fs");

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "2D2B55" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "2D2B55" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
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

      // ── TITLE ──
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Brief Sviluppatori", size: 40, bold: true, font: "Arial", color: "2D2B55" })]
      }),
      new Paragraph({
        spacing: { after: 400 },
        children: [new TextRun({ text: "Venue Finder Evolution — Migrazione da Gemini Gem a Ecosystem Noloop", size: 24, font: "Arial", color: "666666" })]
      }),

      // ── SEZIONE 1: COSA STIAMO COSTRUENDO ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Cosa stiamo costruendo")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Il Venue Finder Evolution è un agente AI specializzato nello scouting di location per eventi corporate. Oggi esiste come Gem su Google Gemini, usato dal team programmazione di Noloop (agenzia eventi corporate, Milano, ~260 progetti/anno, ~150 dipendenti). Lo portiamo dentro l'ecosistema Noloop Wave come skill di Sally, il che significa che diventa una soluzione custom orchestrata dal nostro master prompt, con accesso nativo a tutte le integrazioni dell'ecosistema.")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Vi forniamo la documentazione completa del Gem attuale (master prompt, workflow operativo, schema dati, generatore outline, mapping tour operator) che descrive nel dettaglio il flusso conversazionale e le regole di business. Quella documentazione è la baseline: il workflow, la logica di ricerca, la gerarchia delle fonti, le domande obbligatorie per sezione, lo schema dati con le colonne obbligatorie per ogni tipologia di entità — tutto questo va replicato fedelmente.")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Questo brief descrive il contesto operativo del cliente, le esigenze emerse durante i test che non sono evidenti dalla sola lettura dei documenti Gem, e le funzionalità evolutive della nuova soluzione. Per il dettaglio puntuale, fate riferimento al Requirement Log Excel allegato.")]
      }),

      // ── SEZIONE 2: CONTESTO OPERATIVO ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Contesto operativo del cliente")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Noloop produce circa 200 presentazioni logistiche all'anno (una per gara) più circa 300 rilanci (varianti richieste dal cliente prima dell'assegnazione). Ogni presentazione contiene proposte hotel, ristoranti, attività, trasporti con foto, descrizioni e pricing. Oggi il processo è interamente manuale: ricerca su più siti, selezione foto, composizione PowerPoint, revisione. Tempo medio: 5 ore per presentazione, 1 ora e 45 minuti per rilancio.")]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Lo strumento è usato dal team programmazione guidato da Lorena Cavecchi. L'interlocutore principale per il feedback operativo è Antonella Osmetti (area director). Lo strumento attuale è standalone con credenziali condivise e un tasso di adozione stimato al 30-40% del team.")]
      }),

      // ── SEZIONE 3: ESIGENZE UAT ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Esigenze emerse dai test con il cliente")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Le seguenti esigenze sono emerse durante tre sessioni di UAT con Antonella Osmetti (maggio-agosto 2025) e integrano ciò che è già descritto nei documenti Gem. Non ripetono il contenuto dei documenti di sistema.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Accuratezza della ricerca")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Nelle prime prove il tool proponeva strutture con capacità insufficiente e privilegiava centri minori su aree geografiche ampie, ignorando le città principali. Il cliente ha chiesto esplicitamente che su aree ampie (es. \"Nord Italia\") vengano privilegiate Milano, Bologna e le città più ricche di opzioni prima dei centri minori. Il numero di proposte deve seguire la regola concordata: 5 strutture per singola città, 10 per area geografica ampia, modificabile dall'utente. Le strutture con dati mancanti non vanno scartate ma segnalate con \"NA\". Le strutture proposte devono considerare la distanza reciproca tra loro.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Isolamento sessioni")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Nel sistema precedente, task fuori contesto (traduzioni, domande generiche) nella stessa conversazione inquinavano la qualità delle risposte successive. Capitava anche che venissero riproposti risultati memorizzati da sessioni precedenti anziché fare nuove ricerche. Il nuovo sistema deve garantire che ogni sessione di scouting sia isolata e che le ricerche siano sempre fresche.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Gestione complessità ricerca")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Nel sistema precedente l'utente doveva cambiare manualmente il modello AI tra una fase e l'altra (modello leggero per task semplici, modello avanzato per ricerche approfondite). Se dimenticava, i risultati erano inaffidabili. Il nuovo sistema deve gestire questa logica autonomamente.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Presentazioni")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Alcuni elementi delle presentazioni sono dichiaratamente manuali: mappe hotel, tabelle voli, planimetrie sale, riepilogo mete scartate nella sezione Scouting. Il sistema deve generare placeholder chiari per questi elementi, non inventare contenuti. Il template PowerPoint Noloop è il reference grafico — ve ne alleghiamo esempi reali. Il day-by-day program deve essere dettagliato con attività e servizi in sequenza, specialmente per programmi multi-notte.")]
      }),

      // ── SEZIONE 4: NOTA DOCUMENTI INTERNI ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Nota su report interni e newsletter")] }),
      new Paragraph({
        spacing: { after: 60 },
        border: {
          top: { style: BorderStyle.SINGLE, size: 1, color: "E8A020" },
          bottom: { style: BorderStyle.SINGLE, size: 1, color: "E8A020" },
          left: { style: BorderStyle.SINGLE, size: 6, color: "E8A020" },
          right: { style: BorderStyle.SINGLE, size: 1, color: "E8A020" }
        },
        shading: { type: ShadingType.CLEAR, fill: "FFF8E8" },
        indent: { left: 200, right: 200 },
        children: [new TextRun({ text: "" })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        border: {
          left: { style: BorderStyle.SINGLE, size: 6, color: "E8A020" },
          right: { style: BorderStyle.SINGLE, size: 1, color: "E8A020" }
        },
        shading: { type: ShadingType.CLEAR, fill: "FFF8E8" },
        indent: { left: 200, right: 200 },
        children: [new TextRun({ text: "Tra le esigenze del cliente c'è la possibilità di consultare documenti interni (report dei dipendenti su venue visitate, newsletter da fornitori esterni) come fonte di dati durante lo scouting. Ad oggi questo archivio strutturato non esiste ancora. Il processo concordato prevede che Noloop organizzi questi documenti in una struttura per Nazione/Regione/Città, ma non è stato ancora implementato. Non abbiamo quindi ancora deciso come integrare queste fonti nel nuovo sistema: la modalità di accesso, indicizzazione e consultazione di report interni, email e newsletter è da definire insieme in fase di architettura. Vi alleghiamo alcuni esempi di questi documenti per darvi contesto su formato, struttura e tipo di informazioni contenute, ma le decisioni su come gestirli tecnicamente sono ancora aperte.", size: 21 })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        border: {
          bottom: { style: BorderStyle.SINGLE, size: 1, color: "E8A020" },
          left: { style: BorderStyle.SINGLE, size: 6, color: "E8A020" },
          right: { style: BorderStyle.SINGLE, size: 1, color: "E8A020" }
        },
        shading: { type: ShadingType.CLEAR, fill: "FFF8E8" },
        indent: { left: 200, right: 200 },
        children: [new TextRun({ text: "" })]
      }),

      // ── SEZIONE 5: EVOLUTIVE ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Funzionalità evolutive")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Le seguenti funzionalità non esistevano nel progetto precedente e rappresentano l'evoluzione della soluzione.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Generazione automatica della presentazione")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Oggi il sistema produce testo in chat e un outline testuale che l'utente deve importare manualmente in PowerPoint. La nuova soluzione deve produrre direttamente una presentazione grafica completa (copy + layout + foto) a partire dalla selezione venues dell'utente. Le foto devono essere proposte pre-selezionate dall'AI. L'output deve rispettare il design system Noloop. Tre strutture di presentazione sono approvate dal cliente (Convention con pernottamento, Incentive Trip, Day meeting) con flussi di slide specifici documentati nell'allegato dedicato.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Memoria storica aziendale")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Oggi ogni ricerca parte da zero, anche per location già proposte in passato. L'utente deve poter cercare in linguaggio naturale presentazioni fatte in precedenza e recuperarle con metadati (venue, cliente, data, esito). Il sistema deve suggerire proattivamente il recupero quando rileva una location già trattata, anche durante i rilanci. Serve un archivio indicizzato delle presentazioni passate.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Rilanci modulari")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Quando il cliente chiede una variante (\"sostituisci l'hotel 2 con un'opzione sul mare\"), il sistema deve rigenerare solo la sezione interessata della presentazione, non l'intero deliverable. Il sistema deve anche tracciare le alternative già proposte per ogni gara per evitare di riproporre opzioni scartate.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Accessibilità")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Lo strumento deve essere accessibile a tutto il team programmazione senza credenziali separate, integrato nel portale Noloop.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Integrazioni ecosistema")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Collegamento con il gestionale per storico fornitori, contatti e pricing precedenti. Possibilità di cercare documenti interni tramite Google Drive. Le task operative generate dallo scouting (es. \"richiedere preventivo\") devono poter confluire nel sistema di task management.")]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Modalità di ricerca rapida")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Oltre al flusso standard completo, il cliente ha concordato l'esigenza di modalità di ricerca rapida per task puntuali (solo ristoranti, solo hotel, solo venue speciali) con flusso meno vincolato e domande più aperte.")]
      }),

      // ── SEZIONE 6: DOCUMENTAZIONE ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Documentazione allegata")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Documenti di sistema Gem")] }),
      new Paragraph({
        spacing: { after: 100 },
        children: [new TextRun("Descrivono il workflow da replicare. Leggere il Master_prompt.txt per primo.")]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Master_prompt.txt", bold: true }),
          new TextRun(" — System prompt dell'agente: ruolo, principi, gerarchia fonti, regole output, self-check")
        ]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "sections.txt", bold: true }),
          new TextRun(" — Workflow operativo: 8 sezioni con step, domande obbligatorie, logica ricerca Italia/estero")
        ]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "dati_per_servizi_e_strutture.txt", bold: true }),
          new TextRun(" — Schema dati con colonne obbligatorie per ogni tipologia entità")
        ]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "outline.txt", bold: true }),
          new TextRun(" — Generatore outline: 3 fasi, stili, strutture per tipologia evento")
        ]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "tour_operator.txt", bold: true }),
          new TextRun(" — Mapping destinazioni e cataloghi tour operator con URL")
        ]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Reference grafici e contenutistici")] }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Presentazioni_VF_struttura_e_tipologia.docx", bold: true }),
          new TextRun(" — Flussi di slide approvati dal cliente per le 3 tipologie evento")
        ]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Esempi presentazioni logistiche (PPT)", bold: true }),
          new TextRun(" — Presentazioni reali Noloop: reference per stile, layout e livello di dettaglio atteso")
        ]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Esempi newsletter e report interni", bold: true }),
          new TextRun(" — Campioni dei documenti interni per contesto su formato e informazioni contenute")
        ]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Da fornire successivamente")] }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "Design system Noloop", bold: true }),
          new TextRun(" — Palette, font, template per generazione automatica presentazioni")
        ]
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: "API / endpoint ecosistema", bold: true }),
          new TextRun(" — Per integrazioni portale, gestionale, task management, archivio")
        ]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Struttura archivio presentazioni storiche", bold: true }),
          new TextRun(" — Per la funzionalità di memoria storica")
        ]
      }),

      // ── SEZIONE 7: REQ LOG ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Requirement Log")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Il dettaglio puntuale di tutti i requisiti è nel file Excel allegato (VenueFinder_ReqLog_v2.xlsx), organizzato in tre tab: esigenze emerse da UAT e feedback cliente, requisiti evolutivi, documentazione allegata con stato.")]
      }),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Brief_Sviluppatori_VenueFinder.docx", buffer);
  console.log("Done");
});