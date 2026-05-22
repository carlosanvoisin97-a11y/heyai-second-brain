const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, LevelFormat, BorderStyle, WidthType, ShadingType,
        HeadingLevel, PageBreak } = require("docx");

const TEAL = "0E9EAF";
const NAVY = "074F6A";
const GRAY = "666666";
const LIGHT_BG = "F0F5F6";
const BORDER = "E0DBD4";
const WHITE = "FFFFFF";

const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

function heading1(text) { return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(text)] }); }
function heading2(text) { return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(text)] }); }

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after || 120 },
    children: [new TextRun({ text, font: "Aptos", size: 22, color: "333333", ...opts })]
  });
}

function richPara(runs, after = 120) {
  return new Paragraph({
    spacing: { after },
    children: runs.map(r => new TextRun({ font: "Aptos", size: 22, color: "333333", ...r }))
  });
}

function bullet(text, ref = "bullets") {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Aptos", size: 22, color: "333333" })]
  });
}

function spacer() { return new Paragraph({ spacing: { after: 200 }, children: [] }); }

// --- ROLE BLOCK ---
function roleBlock(title, subtitle, description, credentials) {
  const items = [];
  
  // Title
  items.push(new Paragraph({
    spacing: { before: 280, after: 40 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: TEAL, space: 6 } },
    children: [new TextRun({ text: title, font: "Aptos", size: 26, bold: true, color: NAVY })]
  }));
  
  // Subtitle
  items.push(new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text: subtitle, font: "Aptos", size: 20, color: TEAL, italics: true })]
  }));
  
  // Description
  items.push(new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text: description, font: "Aptos", size: 22, color: "333333" })]
  }));
  
  // Credentials
  items.push(new Paragraph({
    spacing: { after: 160 },
    shading: { type: ShadingType.CLEAR, fill: LIGHT_BG },
    children: [new TextRun({ text: credentials, font: "Aptos", size: 20, color: GRAY, italics: true })]
  }));
  
  return items;
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Aptos", size: 22, color: "333333" } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Aptos", color: NAVY },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Aptos", color: NAVY },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
    ]
  },
  numbering: { config: [
    { reference: "bullets", levels: [
      { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 720, hanging: 360 } } } }
    ]}
  ]},
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 } } },
    children: [
      // HEADER
      richPara([
        { text: "HeyAI S.r.l.", bold: true, size: 20, color: NAVY },
        { text: "\nVia Parigi 11, 00185 Roma (RM) | info@heyaidigital.it", size: 18, color: GRAY, break: 1 },
      ], 200),

      // TITLE
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "Profilo del Team di Progetto", font: "Aptos", size: 36, bold: true, color: NAVY })]
      }),
      new Paragraph({
        spacing: { after: 300 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: TEAL, space: 8 } },
        children: [new TextRun({ text: "HeyAI S.r.l. \u2014 Marzo 2026", font: "Aptos", size: 20, color: GRAY, italics: true })]
      }),

      // INTRO
      heading1("1. Presentazione"),
      para("HeyAI S.r.l. \u00E8 una societ\u00E0 specializzata nella progettazione e nello sviluppo di soluzioni basate su intelligenza artificiale per il mondo della consulenza, dei servizi professionali e della pubblica amministrazione. L\u2019azienda opera come partner tecnologico e di trasformazione digitale, affiancando i propri clienti dall\u2019analisi dei processi alla delivery di strumenti software su misura, con particolare focus su motori di ricerca intelligenti, piattaforme di compliance e sistemi di supporto decisionale."),
      para("Il team combina competenze di strategia digitale, sviluppo software, architettura AI, comunicazione e project management, ed \u00E8 strutturato in un nucleo interno di coordinamento e direzione e una rete consolidata di specialisti tecnici."),
      spacer(),

      // NUCLEO INTERNO
      heading1("2. Team Interno"),

      // CARLO
      ...roleBlock(
        "Direzione Strategica e Project Management",
        "Responsabile della strategia di trasformazione digitale, della mappatura dei processi e del coordinamento dei progetti",
        "Definisce l\u2019architettura funzionale delle soluzioni, coordina il ciclo di vita dei progetti dalla raccolta requisiti alla delivery, e gestisce il rapporto con il cliente e con il team di sviluppo. Si occupa dell\u2019analisi dei processi aziendali del cliente, dell\u2019identificazione delle opportunit\u00E0 di automazione e digitalizzazione, e della traduzione delle esigenze operative in specifiche funzionali per il team tecnico. Supervisiona la qualit\u00E0 della delivery, la gestione del cambiamento organizzativo e la formazione degli utenti finali.",
        "Oltre 8 anni di esperienza in ruoli di consulenza strategica e trasformazione digitale, maturati presso primarie societ\u00E0 di consulenza internazionale (Big Four) e presso una delle principali aziende tecnologiche globali. Ha gestito progetti di digitalizzazione per clienti enterprise nei settori finanziario, assicurativo, energetico e della pubblica amministrazione."
      ),

      // BRUNO
      ...roleBlock(
        "Amministratore Delegato",
        "Supervisione strategica e governance aziendale",
        "Sovrintende alla direzione strategica della societ\u00E0, alla governance dei progetti e alle relazioni istituzionali. Garantisce la solidit\u00E0 operativa e la sostenibilit\u00E0 dei progetti di sviluppo, apportando una visione manageriale di respiro internazionale.",
        "Executive con oltre 20 anni di esperienza in ruoli di direzione marketing e strategia presso gruppi multinazionali quotati del settore automotive. Ricopre contestualmente il ruolo di Direttore Marketing Globale presso un primario gruppo industriale internazionale."
      ),

      // ANDREA
      ...roleBlock(
        "Digital Strategy e Growth",
        "Responsabile delle strategie di comunicazione digitale, advertising e acquisizione clienti",
        "Definisce e gestisce strategie di comunicazione digitale end-to-end: dall\u2019advertising online al direct marketing e all\u2019email marketing, fino alla pianificazione dell\u2019intero funnel di acquisizione e fidelizzazione. Integra competenze di gestione amministrativa e finance a supporto della sostenibilit\u00E0 economica dei progetti. Si occupa della costruzione di processi di comunicazione strutturati anche in contesti tradizionali che affrontano percorsi di trasformazione digitale.",
        "4 anni di esperienza nella progettazione e gestione di strategie digitali per PMI italiane in settori diversificati (food & wine, retail, eventi, ristorazione), con focus specifico sull\u2019integrazione di canali digitali in organizzazioni che operano la transizione dal modello tradizionale."
      ),

      // MICHELE
      ...roleBlock(
        "Direzione Creativa e AI-Driven Content",
        "Responsabile della produzione di contenuti, siti web e dell\u2019integrazione dell\u2019AI nei processi di comunicazione",
        "Guida la produzione di contenuti visivi, testuali e multimediali e lo sviluppo di siti web. Si occupa dell\u2019integrazione dell\u2019intelligenza artificiale nei processi di marketing e comunicazione digitale dei clienti: dalla mappatura dei flussi operativi esistenti alla selezione degli strumenti AI pi\u00F9 adatti, dall\u2019integrazione nei flussi quotidiani (sito web, newsletter, social, campagne advertising) fino alla formazione del team interno. Il suo approccio parte sempre dall\u2019analisi concreta della realt\u00E0 operativa del cliente per identificare dove l\u2019AI pu\u00F2 portare un miglioramento reale e sostenibile, senza stravolgere ci\u00F2 che gi\u00E0 funziona.",
        "Ha affiancato decine di piccole e medie imprese in percorsi di integrazione dell\u2019AI nel marketing e nella comunicazione. Background nel marketing tradizionale, con esperienza diretta nella creazione di siti web e nel supporto continuativo alla comunicazione per studi professionali, con piena conoscenza dei vincoli reputazionali e di riservatezza tipici del settore."
      ),

      spacer(),

      // TEAM ESTERNO
      heading1("3. Team Tecnico Esterno"),

      para("Il nucleo di sviluppo software \u00E8 composto da due Technical Lead con esperienza decennale ciascuno nella progettazione e delivery di soluzioni software enterprise. Entrambi hanno background ingegneristico e combinano competenze di architettura, sviluppo e gestione progettuale su iniziative complesse: architetture cloud-native, API design, data processing e integrazione AI."),

      para("Uno ricopre attualmente il ruolo di CTO in una tech company italiana, l\u2019altro gestisce due asset tecnologici fondamentali di una primaria istituzione finanziaria europea come Solution Architect e Client Lead."),

      para("A supporto del team \u00E8 prevista anche una risorsa Junior per le attivit\u00E0 operative e di sviluppo."),

      para("La collaborazione con il team tecnico esterno avviene in regime di accordo quadro continuativo, con processi di lavoro consolidati, strumenti di project management condivisi e standard di qualit\u00E0 allineati a quelli del nucleo interno."),

      spacer(),

      // RETE ESTESA
      heading1("4. Rete di Competenze Estese"),

      para("Qualora emergano esigenze progettuali specifiche che richiedano competenze verticali non presenti nel team di progetto (ad esempio: data science avanzata, NLP specialistico, sicurezza informatica, compliance normativa, UX research), HeyAI dispone di una rete consolidata di collaboratori specializzati attivabili su base progettuale, garantendo flessibilit\u00E0 e copertura completa delle esigenze tecniche senza compromettere i tempi di delivery."),

      spacer(),
      spacer(),

      // FOOTER
      new Paragraph({
        spacing: { before: 200, after: 0 },
        border: { top: { style: BorderStyle.SINGLE, size: 1, color: TEAL, space: 8 } },
        children: [new TextRun({ text: "HeyAI S.r.l. | PEC: heyai@pec.it | REA RM \u2013 1751505 | Cod. Fiscale: 17947791004", font: "Aptos", size: 16, color: GRAY })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/team_profile.docx", buffer);
  console.log("Done!");
});