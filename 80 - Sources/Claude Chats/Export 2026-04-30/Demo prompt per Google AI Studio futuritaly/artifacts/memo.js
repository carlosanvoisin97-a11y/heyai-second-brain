const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType,
        HeadingLevel, PageBreak } = require("docx");

const NAVY = "1B2A4A";
const TEAL = "0077B6";
const GREEN = "2E8B57";
const AMBER = "D4A017";
const RED = "C0392B";
const GRAY = "6B7280";
const LIGHT = "F5F7FA";

const border = { style: BorderStyle.SINGLE, size: 1, color: "E0E4EA" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Calibri", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Calibri", color: NAVY },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 4 } } } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Calibri", color: TEAL },
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
      new Paragraph({ spacing: { after: 0 }, children: [
        new TextRun({ text: "MEMO RISERVATO", font: "Calibri", size: 18, color: GRAY, bold: true })
      ]}),
      new Paragraph({ spacing: { after: 100 }, children: [
        new TextRun({ text: "Incontro FuturItaly \u2014 Marzo 2026", font: "Calibri", size: 18, color: GRAY })
      ]}),

      // TITLE
      new Paragraph({ spacing: { after: 80 }, children: [
        new TextRun({ text: "Osservatorio Strategico AI", font: "Calibri", size: 36, bold: true, color: NAVY })
      ]}),
      new Paragraph({ spacing: { after: 300 }, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL, space: 8 } }, children: [
        new TextRun({ text: "Punti chiave per meeting con Leonardo e Paolo", font: "Calibri", size: 22, color: TEAL, italics: true })
      ]}),

      // ================================================================
      // SEZIONE 1
      // ================================================================
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Obiettivo dell'incontro")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun("Allineare il team sui risultati raggiunti e concordare la strategia per la presentazione alla AD (Claudia Bugno). "),
        new TextRun({ text: "Uscire con: data del meeting con AD, scelta del modello di collaborazione, avvio procedura ANAC.", bold: true })
      ]}),

      // ================================================================
      // SEZIONE 2
      // ================================================================
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Flusso presentazione")] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Recap progetto ", bold: true }), new TextRun("\u2014 obiettivi, architettura, lavoro svolto")
      ]}),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Demo live ", bold: true }), new TextRun("\u2014 prototipo funzionante, casi reali")
      ]}),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Quadro economico ", bold: true }), new TextRun("\u2014 \u20AC22-28K, 40/30/30, 8-11 settimane")
      ]}),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Modello di collaborazione ", bold: true }), new TextRun("\u2014 opzioni sul tavolo")
      ]}),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 120 }, children: [
        new TextRun({ text: "Prossimi passi ", bold: true }), new TextRun("\u2014 cosa manca, timeline, meeting AD")
      ]}),

      // ================================================================
      // SEZIONE 3
      // ================================================================
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Proposta Revenue Share / Partnership")] }),

      new Paragraph({ spacing: { after: 160 }, children: [
        new TextRun({ text: "Se sollevano il tema collaborazione, questa \u00E8 la proposta strutturata da mettere sul tavolo.", italics: true, color: GRAY })
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Fase 1 \u2014 MVP")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "MVP a \u20AC20K fissi", bold: true }), new TextRun(" (range originale \u20AC22-28K, sconto come investimento nella partnership)")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun("Raccolta feedback, miglioramenti e funzionalit\u00E0 smart incluse o a met\u00E0 prezzo se strutturali")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [
        new TextRun("IP motore base resta HeyAI, personalizzazioni di propriet\u00E0 FuturItaly")
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Fase 2 \u2014 Revenue Share su rivendita a terzi")] }),
      new Paragraph({ spacing: { after: 80 }, children: [
        new TextRun("FuturItaly si impegna a commercializzare la piattaforma presso la propria rete (societ\u00E0 di finanza agevolata, studi professionali, advisor, camere di commercio, associazioni di categoria).")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Prezzo al cliente finale: \u20AC500-600/mese", bold: true })
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Split: 70% FuturItaly / 30% HeyAI", bold: true }), new TextRun(" (FuturItaly porta cliente, relazione, credibilit\u00E0)")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun("Vendite dirette HeyAI (fuori dalla rete FuturItaly): 100% HeyAI")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [
        new TextRun("Possibile clausola di non concorrenza: HeyAI non vende a competitor diretti di FuturItaly senza consenso")
      ]}),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Alternativa \u2014 Servizio Premium ai propri clienti")] }),
      new Paragraph({ spacing: { after: 80 }, children: [
        new TextRun("Invece di rivendere il tool a societ\u00E0 simili (rischio competitor), FuturItaly lo offre come servizio ai propri clienti finali.")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Prezzo ai clienti finali: ~\u20AC300/mese", bold: true }), new TextRun(" per monitoraggio automatico personalizzato")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Funzionalit\u00E0 killer da proporre: ", bold: true }),
        new TextRun("incrocio automatico profili clienti con bandi in uscita \u2192 notifica al cliente + generazione automatica di brief/email/presentazione per convincerlo a candidarsi")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun("Questo \u00E8 il vero moltiplicatore: ogni alert diventa un potenziale nuovo incarico di consulenza per FuturItaly")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [
        new TextRun("Revenue share su questo canone da definire in base a volumi")
      ]}),

      // ================================================================
      // SEZIONE 4 - OBIEZIONI
      // ================================================================
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. Obiezioni e risposte")] }),

      // Table
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [3200, 6306],
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 3200, type: WidthType.DXA }, borders, margins: cellMargins,
              shading: { fill: NAVY, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Obiezione", bold: true, color: "FFFFFF", size: 20 })] })] }),
            new TableCell({ width: { size: 6306, type: WidthType.DXA }, borders, margins: cellMargins,
              shading: { fill: NAVY, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "Risposta", bold: true, color: "FFFFFF", size: 20 })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 3200, type: WidthType.DXA }, borders, margins: cellMargins,
              children: [new Paragraph({ children: [new TextRun({ text: "\u201CCos\u00EC diamo il tool ai nostri competitor\u201D", size: 20 })] })] }),
            new TableCell({ width: { size: 6306, type: WidthType.DXA }, borders, margins: cellMargins,
              children: [new Paragraph({ children: [
                new TextRun({ text: "Il vostro vantaggio competitivo non \u00E8 cercare bandi \u2014 \u00E8 quello che fate dopo (30 anni di Paolo, rete di Claudia, partenariati di Lidia). Il tool \u00E8 il 10%, l'expertise \u00E8 il 90%. In ogni caso: clausola di non concorrenza sui diretti competitor, oppure non rivendere affatto e usarlo come servizio premium ai vostri clienti.", size: 20 })
              ]})] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 3200, type: WidthType.DXA }, borders, margins: cellMargins,
              shading: { fill: LIGHT, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "\u201CI clienti gi\u00E0 ci pagano, perch\u00E9 pagherebbero un mensile in pi\u00F9?\u201D", size: 20 })] })] }),
            new TableCell({ width: { size: 6306, type: WidthType.DXA }, borders, margins: cellMargins,
              shading: { fill: LIGHT, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [
                new TextRun({ text: "Non \u00E8 la stessa cosa. Oggi pagano consulenza reattiva (chiamano quando hanno un bisogno). Il monitoraggio \u00E8 proattivo (voi chiamate loro quando esce un'opportunit\u00E0). Ogni alert che diventa candidatura \u00E8 un nuovo incarico. Passate da 1-2 progetti/anno per cliente a 3-5. Se i clienti non pagano l'abbonamento: lo assorbite come costo interno, il ROI \u00E8 in pi\u00F9 incarichi.", size: 20 })
              ]})] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 3200, type: WidthType.DXA }, borders, margins: cellMargins,
              children: [new Paragraph({ children: [new TextRun({ text: "\u201CMa siamo in modalit\u00E0 startup, dobbiamo contenere i costi\u201D", size: 20 })] })] }),
            new TableCell({ width: { size: 6306, type: WidthType.DXA }, borders, margins: cellMargins,
              children: [new Paragraph({ children: [
                new TextRun({ text: "Per questo il modello ibrido: MVP a \u20AC20K (costo ridotto), poi revenue share che si attiva solo quando c'\u00E8 un prodotto validato e un mercato reale. Nessuno si espone troppo. E nel panorama italiano non esiste nulla di equivalente \u2014 il first mover advantage ha un valore.", size: 20 })
              ]})] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 3200, type: WidthType.DXA }, borders, margins: cellMargins,
              shading: { fill: LIGHT, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [new TextRun({ text: "\u201CCome facciamo a sapere se il mercato c'\u00E8?\u201D", size: 20 })] })] }),
            new TableCell({ width: { size: 6306, type: WidthType.DXA }, borders, margins: cellMargins,
              shading: { fill: LIGHT, type: ShadingType.CLEAR },
              children: [new Paragraph({ children: [
                new TextRun({ text: "2.000-3.000 societ\u00E0 di finanza agevolata in Italia + camere di commercio, confidi, associazioni = 5.000+ potenziali. L'1% a \u20AC500/mese = \u20AC300K/anno. Il 5% = \u20AC1.5M/anno. Ma prima di impegnarci serve capire le vostre reali possibilit\u00E0 di penetrazione e intenzioni di vendere.", size: 20 })
              ]})] }),
          ]}),
        ]
      }),

      // ================================================================
      // SEZIONE 5
      // ================================================================
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. Punti critici da chiarire con loro")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Intenzione reale di vendere: ", bold: true }),
        new TextRun("Hanno la struttura commerciale per portare clienti? Oppure comprano il tool solo per uso interno? Se \u00E8 solo uso interno, niente revenue share \u2014 prezzo pieno.")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Capacit\u00E0 di penetrazione: ", bold: true }),
        new TextRun("Quanti contatti hanno nel settore? Qual \u00E8 realisticamente il numero di clienti che possono portare nel primo anno?")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Modello preferito: ", bold: true }),
        new TextRun("Rivendita a societ\u00E0 terze (pi\u00F9 scalabile) o servizio premium ai propri clienti (zero rischio competitor)?")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [
        new TextRun({ text: "Rischio da evitare: ", bold: true, color: RED }),
        new TextRun({ text: "regalare il software a \u20AC20K che gli ottimizza il business senza rientro. Se non vendono e non portano clienti, abbiamo solo fatto uno sconto.", color: RED })
      ]}),

      // ================================================================
      // SEZIONE 6
      // ================================================================
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("6. Punti aperti operativi")] }),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "ANAC/PDND: ", bold: true }), new TextRun("Serve legale rappresentante con SPID. Procedura inviata. Avviare subito, 3-8 settimane.")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Esempi Lidia: ", bold: true }), new TextRun("Mancano i brief esempio sui bandi EU/Interreg. Sollecitare.")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [
        new TextRun({ text: "Quotazione definitiva: ", bold: true }), new TextRun("Si chiude post-requisitazione completa. Posizionamento nel range dipende da fonti finali + complessit\u00E0 regole AI.")
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 120 }, children: [
        new TextRun({ text: "Data meeting AD: ", bold: true }), new TextRun("Fissare prima di uscire dall'incontro.")
      ]}),

      // ================================================================
      // SEZIONE 7
      // ================================================================
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("7. Regola d'oro")] }),
      new Paragraph({ spacing: { after: 80 }, shading: { type: ShadingType.CLEAR, fill: LIGHT }, children: [
        new TextRun({ text: "Non dare percentuali precise di revenue share a voce.", bold: true, size: 24, color: NAVY }),
      ]}),
      new Paragraph({ spacing: { after: 80 }, children: [
        new TextRun("Concordare il principio (\u201Cs\u00EC, siamo aperti al modello ibrido\u201D), rimandare i dettagli a un documento formale entro la settimana.")
      ]}),
      new Paragraph({ spacing: { after: 200 }, shading: { type: ShadingType.CLEAR, fill: LIGHT }, children: [
        new TextRun({ text: "Frase di chiusura: ", bold: true, color: NAVY }),
        new TextRun({ text: "\u201CNel panorama italiano non esiste nulla di equivalente. Il prototipo \u00E8 funzionante. La domanda non \u00E8 se ha senso farlo, \u00E8 come vogliamo farlo insieme.\u201D", italics: true, color: TEAL })
      ]}),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/memo_futuritaly.docx", buffer);
  console.log("Memo created!");
});