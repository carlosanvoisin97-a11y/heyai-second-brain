const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ShadingType, BorderStyle } = require("docx");
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
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 23, bold: true, font: "Arial", color: "444444" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
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

      // TITLE
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Flussi Operativi per Tipologie di Presentazione", size: 36, bold: true, font: "Arial", color: "2D2B55" })]
      }),
      new Paragraph({
        spacing: { after: 400 },
        children: [new TextRun({ text: "Venue Finder Evolution — Struttura slide per tipologia evento", size: 22, font: "Arial", color: "666666" })]
      }),

      // INTRO
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Questo documento definisce la struttura delle presentazioni logistiche che il Venue Finder Evolution deve generare. Sono previste tre tipologie di evento, ciascuna con un flusso di slide specifico. Ogni slide e componente si basa sulle informazioni fornite dall'utente o sulle descrizioni generate dallo strumento durante le fasi di scouting. Dove indicato, l'utente potrà intervenire per integrare o validare il contenuto prima della versione finale.")]
      }),

      // ══════════════════════════════════════════
      // 1. CONVENTION CON PERNOTTAMENTO
      // ══════════════════════════════════════════
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Convention con pernottamento")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("1. Cover")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Logo + nome evento + destinazione.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2. Key Facts")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Coordinate evento: numero ospiti, camere richieste, date, sala meeting principale, altri elementi critici del brief.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3. Scouting")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Riepilogo delle mete verificate durante lo scouting, incluse quelle valutate e non proposte con motivazione. Se sono proposte più mete, pagina riepilogativa con confronto delle opzioni selezionate. L'utente può integrare note sulle mete scartate.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4. Destination")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Descrizione sintetica della destinazione proposta con immagine evocativa. Il testo riprende le descrizioni generate nella fase di outline.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("5. Logistics")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Come arrivare: voli principali, transfer da aeroporto, tempi di percorrenza, provider trasporto. Include tabella voli con tratte, orari e compagnie. L'utente può integrare con dati di disponibilità specifici.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("6. Hotel Map")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Mappa della struttura con posizionamento rispetto a punti di interesse. Breve descrittivo dell'hotel con riepilogo camere, facilities e servizi principali.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("7. Meeting Room")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Scheda sala meeting: nome, dimensioni (sqm), capienze per layout (teatro, banquet, classroom), altezza, dotazioni tecnologiche. Planimetria semplificata della sala.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("8. Day-by-Day Program")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Programma dettagliato giorno per giorno con attività in sequenza: arrivi, sessioni plenarie, workshop, pause, momenti sociali, partenze. Per ogni slot: orario, attività, location. Il programma riprende il day-by-day costruito durante lo scouting.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("9. Social & Evening Events")] }),
      new Paragraph({ spacing: { after: 300 }, children: [new TextRun("Cena di benvenuto, gala dinner, team building, attività serali. Per ogni evento: location, descrizione, format. Il testo riprende le descrizioni delle attività generate nella fase di outline.")] }),

      // ══════════════════════════════════════════
      // 2. VIAGGIO INCENTIVE
      // ══════════════════════════════════════════
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Viaggio Incentive")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun({ text: "Più notti, una o più destinazioni. Struttura a loop: le sezioni dalla Destination al Social Events si ripetono per ogni destinazione.", italics: true, color: "666666" })] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("1. Cover")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Logo + claim evento + anno.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2. Key Facts")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Coordinate evento: numero ospiti, camere, periodi, itinerario di massima.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3. Scouting")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Riepilogo delle mete verificate, incluse quelle valutate e non proposte con motivazione. Se più mete, pagina riepilogativa di confronto. L'utente può integrare note sulle mete scartate.")] }),

      new Paragraph({
        spacing: { after: 80 },
        shading: { type: ShadingType.CLEAR, fill: "F0F0F8" },
        indent: { left: 200, right: 200 },
        children: [new TextRun({ text: "Loop per ogni destinazione:", bold: true, color: "2D2B55" })]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4. Destination")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Descrizione della destinazione con immagine evocativa. Testo dalle descrizioni generate in fase di outline.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("5. Logistics")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Arrivi e trasferimenti tra mete: voli, transfer, tempi, provider. Tabella voli con tratte, orari, compagnie. L'utente può integrare con dati specifici.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("6. Hotel")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Nome struttura, highlight essenziali: categoria, camere, facilities, posizione, mappa. Breve descrittivo che riprende la descrizione generata in fase di outline.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("7. Meeting Room (se richiesto)")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Presente solo se l'utente conferma la necessità di sale meeting. Scheda sala: nome, dimensioni, capienze, dotazioni, planimetria.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("8. Day-by-Day Program")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Focus su experiences e attività. Programma dettagliato con orari, attività, location per ogni slot. Per incentive multi-destinazione, il day-by-day copre anche i trasferimenti tra mete.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("9. Social / Evening Events")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Momenti serali dedicati: cene, eventi, esperienze. Location, descrizione, format.")] }),

      new Paragraph({
        spacing: { after: 80 },
        shading: { type: ShadingType.CLEAR, fill: "F0F0F8" },
        indent: { left: 200, right: 200 },
        children: [new TextRun({ text: "Fine loop", bold: true, color: "2D2B55" })]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("10. Highlights Finale (opzionale)")] }),
      new Paragraph({ spacing: { after: 300 }, children: [new TextRun("Key moments del viaggio, citazioni, foto riepilogative, summary dell'esperienza.")] }),

      // ══════════════════════════════════════════
      // 3. CONVENTION SENZA PERNOTTAMENTO
      // ══════════════════════════════════════════
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Convention senza pernottamento (Day Meeting)")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("1. Cover")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Logo + nome evento + data.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("2. Key Facts")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Coordinate evento: numero partecipanti, orari sala, requisiti tecnici.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("3. Scouting")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Riepilogo delle mete verificate, incluse quelle valutate e non proposte. Elenco delle destinazioni adatte con contesto breve (luogo e vantaggi). L'utente può integrare note.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("4. Logistics")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Collegamenti: tempo e modalità di transfer, accessibilità con mezzi pubblici, parcheggi.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("5. Meeting Facilities")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Planimetria semplificata. Capienze per layout (teatro, banquet, classroom). Dotazioni tecnologiche. Layout alternativi se richiesti.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("6. Day Program")] }),
      new Paragraph({ spacing: { after: 160 }, children: [new TextRun("Orari plenaria, coffee break, lunch, attività finale se prevista. Sequenza dettagliata con orari e location per ogni slot.")] }),

      new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("7. Social Event (opzionale)")] }),
      new Paragraph({ spacing: { after: 300 }, children: [new TextRun("Aperitivo, networking, cena. Location, format, descrizione.")] }),

      // ══════════════════════════════════════════
      // NOTE
      // ══════════════════════════════════════════
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Note")] }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("Questo flusso operativo può essere adattato in base alle esigenze del cliente e alla specificità del contesto. Ogni sezione è progettata per garantire chiarezza visiva e rapidità di consultazione durante la presentazione.")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("Ogni slide e componente della presentazione si basa sulle informazioni fornite dall'utente o sulle descrizioni generate dallo strumento nella fase di scouting e outline.")]
      }),
      new Paragraph({
        spacing: { after: 160 },
        children: [new TextRun("In tutte le tipologie, le sezioni contrassegnate con \"L'utente può integrare\" prevedono che il sistema generi il contenuto con i dati disponibili e lasci spazio all'utente per completare, validare o aggiustare prima della versione finale.")]
      }),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Presentazioni_VF_struttura_e_tipologia_v2.docx", buffer);
  console.log("Done");
});