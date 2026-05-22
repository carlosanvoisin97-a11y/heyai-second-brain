const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, LevelFormat, BorderStyle } = require('docx');
const fs = require('fs');

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2E5090" },
        paragraph: { spacing: { before: 300, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "2E5090" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.BULLET, text: "○", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 1440, hanging: 360 } } } }
        ] },
      { reference: "numbers",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 }
      }
    },
    children: [
      // HEADER
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: "MINUTA RIUNIONE", bold: true, size: 32, font: "Arial", color: "2E5090" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 300 },
        children: [new TextRun({ text: "Demo Piattaforma Crowd - Gestione Eventi", size: 26, font: "Arial" })]
      }),
      
      // INFO MEETING
      new Paragraph({
        border: { bottom: { color: "CCCCCC", style: BorderStyle.SINGLE, size: 6 } },
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Data: ", bold: true }),
          new TextRun({ text: "30 gennaio 2026, ore 16:30" }),
          new TextRun({ text: "    |    " }),
          new TextRun({ text: "Durata: ", bold: true }),
          new TextRun({ text: "1h 40min" })
        ]
      }),
      new Paragraph({
        spacing: { after: 300 },
        children: [
          new TextRun({ text: "Partecipanti: ", bold: true }),
          new TextRun({ text: "Carlo Sanvoisin, Federico Saladino, Simone Montanari (HeyAI) - Lorena Cavecchi Cona, Arianna Giordanella (Noloop)" })
        ]
      }),
      
      // INTRODUZIONE
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Introduzione")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("La call ha avuto come obiettivo la presentazione completa della piattaforma Crowd per la gestione eventi. Federico Saladino ha mostrato tutte le funzionalità principali, dalla creazione dei form alla gestione degli ospiti, dal rooming alla sezione transfer con la mappa interattiva. Lo strumento è quasi completo e pronto per una fase di test da parte del cliente.")]
      }),
      
      // DECISIONI PRESE
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Decisioni Prese")] }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Approccio modulare confermato")] }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun("Invece di clonare un evento nella sua interezza, si è deciso di utilizzare un approccio modulare: sarà possibile salvare e riutilizzare singolarmente i template dei form, delle landing page, delle email e degli stili grafici. Questo permette maggiore flessibilità nel costruire nuovi eventi combinando elementi già pronti. Il cliente ha confermato che questo approccio è più funzionale per le loro esigenze operative.")]
      }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Gestione permessi e GDPR")] }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun("Confermato che il sistema funziona a permessi: ogni utente vedrà solo le applicazioni e i dati per cui è autorizzato. Per questioni di privacy e GDPR, alcuni utenti della direzione (citati Paolo Donzelli e Laura Garbarino) non avranno accesso alla sezione Crowd contenente dati sensibili degli ospiti.")]
      }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Formati file per upload documenti")] }),
      new Paragraph({
        spacing: { after: 150 },
        children: [new TextRun("Quando verrà implementata la funzione di upload documenti (passaporti, carte d'identità), saranno accettati solo formati JPEG e PDF. Questa scelta evita problemi con file Word contenenti immagini incollate, pratica diffusa ma che crea difficoltà di gestione.")]
      }),
      
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Validazione dati negli import Excel")] }),
      new Paragraph({
        spacing: { after: 300 },
        children: [new TextRun("Per il corretto funzionamento dei filtri e delle associazioni automatiche, i dati negli Excel di importazione (stanze, transfer, ospiti) devono seguire una nomenclatura omogenea e coerente. Errori di battitura o variazioni nella scrittura (es. \"DUS\" vs \"Dus\" vs \"D.U.S.\") impediscono al sistema di riconoscere correttamente i valori. Si raccomanda una verifica preventiva dei file prima dell'import.")]
      }),
      
      // PROSSIMI PASSI
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Prossimi Passi")] }),
      
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Condivisione accessi - ", bold: true }),
          new TextRun("HeyAI invierà a breve le credenziali di accesso a Lorena e Arianna per permettere di iniziare i test sulla piattaforma Crowd.")
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Fase di stress test - ", bold: true }),
          new TextRun("Il cliente effettuerà test approfonditi cercando di \"rompere\" il sistema per individuare bug e comportamenti anomali. Arianna si è resa disponibile come tester principale.")
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Completamento sviluppo - ", bold: true }),
          new TextRun("HeyAI completerà le funzionalità ancora in sviluppo (email builder, upload documenti, associazione automatica stanze, sezione attività).")
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Fix bug rilevato - ", bold: true }),
          new TextRun("Durante la demo è emerso un bug nell'assegnazione degli itinerari (duplicazione errata). Da correggere prima della consegna.")
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Consegna definitiva - ", bold: true }),
          new TextRun("Prevista entro 7-10 giorni (prima settimana di febbraio 2026).")
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Documentazione e demo video - ", bold: true }),
          new TextRun("HeyAI produrrà documentazione scritta e video tutorial per permettere al team Noloop di consultare il processo in autonomia.")
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Onboarding Minuts - ", bold: true }),
          new TextRun("Carlo fisserà una call dedicata con Lorena per spiegare lo strumento Minuts (agente AI per gestione call) e verificare/configurare gli accessi mancanti.")
        ]
      }),
      new Paragraph({
        numbering: { reference: "numbers", level: 0 },
        spacing: { after: 300 },
        children: [
          new TextRun({ text: "Integrazione WhatsApp - ", bold: true }),
          new TextRun("Confermato che arriverà anche l'integrazione WhatsApp, con tematiche di configurazione da definire.")
        ]
      }),
      
      // PUNTI APERTI
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Punti Aperti da Approfondire")] }),
      
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Gestione accompagnatori: ", bold: true }),
          new TextRun("Lorena ha evidenziato che nel loro processo sono gli \"aventi diritto\" (invitati principali) a inserire i dati degli accompagnatori, non gli accompagnatori stessi che si registrano autonomamente. Federico ha confermato che è fattibile ma richiede una discussione approfondita per definire il workflow corretto.")
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Permessi avanzati: ", bold: true }),
          new TextRun("Lorena ha chiesto se sia possibile impedire ad alcuni utenti di eliminare campi o inviare email massive. Federico ha spiegato che al momento non è previsto, ma potrebbe essere un enhancement futuro (es. utente che prepara email ma non può inviarle senza approvazione di un super-user).")
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "Repository documenti: ", bold: true }),
          new TextRun("Confermata l'esistenza di un'area per i documenti caricati, ma da verificare il funzionamento completo una volta implementato l'upload da landing page.")
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 300 },
        children: [
          new TextRun({ text: "Casistiche senza biglietti: ", bold: true }),
          new TextRun("Chiarito che per voli charter o situazioni senza biglietti fisici, si può gestire solo l'itinerario senza caricare documenti. L'ospite riceverà comunque la sua \"mappetta\" con il percorso di viaggio.")
        ]
      }),
      
      // FUNZIONALITÀ IN SVILUPPO
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Funzionalità in Sviluppo")] }),
      new Paragraph({
        spacing: { after: 100 },
        children: [new TextRun("Le seguenti funzionalità sono state mostrate come \"under development\" o richieste durante la call:")]
      }),
      
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Upload documenti da landing page (passaporti, carte d'identità) - richiesto da Lorena")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Email builder completo con formattazione e drag-and-drop dei campi")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Card Analytics nella dashboard principale dell'evento")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Sezione Attività (cooking class, biglietti eventi, assegnazioni)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Associazione automatica stanze nel rooming")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Sezione QR code per check-in e landing personale ospite")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Fix date picker (attualmente permette date nel passato)")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 300 },
        children: [new TextRun("Sally versione personale: assistente AI accessibile da tutta la piattaforma per domande su eventi e programmazione")]
      }),
      
      // FEEDBACK CLIENTE
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Feedback del Cliente")] }),
      new Paragraph({
        spacing: { after: 100 },
        children: [new TextRun("Il cliente ha espresso soddisfazione per lo strumento:")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Lorena: \"Figo, bello, veramente bello\" riguardo all'integrazione di Sally nel form builder")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Arianna: \"Mi sembra molto flessibile\" e \"ostico decisamente no\" riguardo all'usabilità")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Lorena: \"Sally sarà la mia nuova migliore amica\" - forte apprezzamento per l'assistente AI")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: [new TextRun("Confermato che lo scope concordato è stato rispettato, con alcune funzionalità extra (Sally) \"regalate\"")]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 300 },
        children: [new TextRun("Arianna si è definita \"bravissima a rompere i software\", disponibilità attiva per la fase di test")]
      }),
      
      // CHIUSURA
      new Paragraph({
        spacing: { before: 300 },
        border: { top: { color: "CCCCCC", style: BorderStyle.SINGLE, size: 6 } },
        children: []
      }),
      new Paragraph({
        spacing: { before: 200 },
        children: [
          new TextRun({ text: "Prossimo contatto: ", bold: true }),
          new TextRun("invio credenziali e avvio fase test. Per domande utilizzare il canale WhatsApp o email.")
        ]
      }),
      new Paragraph({
        spacing: { before: 100 },
        children: [
          new TextRun({ text: "Redatta da: ", bold: true }),
          new TextRun("HeyAI")
        ]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/Minuta_Demo_Crowd_30gen2026.docx", buffer);
  console.log("Minuta creata con successo!");
});