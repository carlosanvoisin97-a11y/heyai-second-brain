const { Document, Packer, Paragraph, TextRun, HeadingLevel, ShadingType } = require("docx");
const fs = require("fs");

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2D2B55" },
        paragraph: { spacing: { before: 320, after: 180 }, outlineLevel: 0 } },
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

      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ text: "Brief Sviluppatori", size: 36, bold: true, font: "Arial", color: "2D2B55" })]
      }),
      new Paragraph({
        spacing: { after: 400 },
        children: [new TextRun({ text: "Venue Finder Evolution — Migrazione da Gemini Gem a Ecosystem Noloop", size: 22, font: "Arial", color: "666666" })]
      }),

      // ── CONTESTO ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Contesto")] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Il Venue Finder è un agente AI per lo scouting di location per eventi corporate, usato dall'agenzia Noloop (Milano, ~260 progetti/anno). Oggi gira come Gem su Google Gemini. Dobbiamo portarlo dentro l'ecosistema Noloop Wave come skill di Sally: stessa logica conversazionale, nuova architettura, più funzionalità evolutive.")]
      }),

      // ── COME LEGGERE I DOCUMENTI ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Come leggere la documentazione")] }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Master_prompt.txt", bold: true }),
          new TextRun(" — Leggere per primo. Contiene il ruolo dell'agente, i principi, la gerarchia delle fonti, le regole di output e il self-check. È il documento fondante.")
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "sections.txt", bold: true }),
          new TextRun(" — Il workflow operativo completo: 8 sezioni in sequenza con step, domande obbligatorie e logica di ricerca. Complementare al master prompt.")
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "dati_per_servizi_e_strutture.txt", bold: true }),
          new TextRun(" — Lo schema dati con le colonne obbligatorie per ogni tipologia di entità. Spelling esatto da rispettare.")
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "outline.txt", bold: true }),
          new TextRun(" — Le regole per generare l'outline: 3 fasi, stili descrittivi, strutture per tipologia evento.")
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "tour_operator.txt", bold: true }),
          new TextRun(" — Mapping destinazioni e cataloghi tour operator.")
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Presentazioni_VF_struttura_e_tipologia.docx", bold: true }),
          new TextRun(" — Le 3 strutture di presentazione approvate dal cliente (Convention con/senza pernottamento, Incentive Trip) con il flusso di slide per ciascuna.")
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Esempi PPT Noloop", bold: true }),
          new TextRun(" — Presentazioni reali del team: reference per stile grafico, layout e livello di dettaglio atteso.")
        ]
      }),
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Esempi newsletter e report interni", bold: true }),
          new TextRun(" — Campioni dei documenti interni Noloop, utili per capire formato e tipo di informazioni che il sistema dovrà saper consultare.")
        ]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "VenueFinder_ReqLog.xlsx", bold: true }),
          new TextRun(" — Il requirement log con due tab: esigenze emerse dai test col cliente che integrano i documenti Gem, e requisiti evolutivi (funzionalità nuove). Tutto il dettaglio puntuale è lì.")
        ]
      }),

      // ── PUNTI APERTI ──
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Punti aperti da definire insieme")] }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Report interni e newsletter", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Tra le esigenze del cliente c'è la possibilità di consultare documenti interni (report dei dipendenti su venue visitate, newsletter da fornitori) come fonte dati durante lo scouting. Ad oggi questo archivio strutturato non esiste. Il processo concordato prevede che Noloop organizzi i documenti per Nazione/Regione/Città, ma non è stato ancora implementato. Come integrare queste fonti nel sistema — modalità di accesso, indicizzazione, consultazione — è da definire insieme in fase di architettura. Vi alleghiamo esempi per darvi contesto su formato e contenuti.")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Memoria storica presentazioni", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Il sistema deve permettere di recuperare presentazioni fatte in passato con metadati (venue, cliente, data, esito). Questo richiede un archivio indicizzato che ad oggi non esiste. La struttura dati, il meccanismo di indicizzazione e la modalità di ricerca sono da definire insieme.")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Integrazioni ecosistema", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("Le integrazioni con il gestionale (storico fornitori, pricing), Google Drive (documenti interni) e il task management (task operative da scouting) dipendono dalle API disponibili nell'ecosistema. Scope e priorità da definire insieme.")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Generazione presentazione grafica", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("La funzionalità core della nuova soluzione è la generazione automatica di una presentazione grafica completa a partire dallo scouting. Il design system Noloop (palette, font, template) vi verrà fornito. La scelta dello strumento di rendering (Figma, Canva, altro) e l'architettura di generazione sono da definire insieme.")]
      }),

      new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: "Fonte E20", bold: true })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun("E20 era citata come fonte nella prima sessione UAT (maggio 2025) ma non compare nei documenti di sistema successivi. Da verificare con il cliente se è ancora rilevante nella gerarchia fonti.")]
      }),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Brief_Sviluppatori_VenueFinder_v2.docx", buffer);
  console.log("Done");
});