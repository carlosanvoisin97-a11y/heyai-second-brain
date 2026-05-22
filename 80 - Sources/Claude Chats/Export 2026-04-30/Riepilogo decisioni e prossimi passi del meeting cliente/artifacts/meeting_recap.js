const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, BorderStyle, WidthType, ShadingType, AlignmentType, LevelFormat,
  PageBreak } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0 };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({ heading: level, children: [new TextRun(text)] });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    ...opts,
    children: [new TextRun({ font: "Arial", size: 22, ...opts.run, text })]
  });
}

function boldPara(boldText, normalText) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ font: "Arial", size: 22, bold: true, text: boldText }),
      new TextRun({ font: "Arial", size: 22, text: normalText || "" })
    ]
  });
}

function bullet(text, ref = "bullets", level = 0) {
  return new Paragraph({
    numbering: { reference: ref, level },
    spacing: { after: 80 },
    children: [new TextRun({ font: "Arial", size: 22, text })]
  });
}

function bulletBold(boldText, normalText, ref = "bullets", level = 0) {
  return new Paragraph({
    numbering: { reference: ref, level },
    spacing: { after: 80 },
    children: [
      new TextRun({ font: "Arial", size: 22, bold: true, text: boldText }),
      new TextRun({ font: "Arial", size: 22, text: normalText || "" })
    ]
  });
}

function headerCell(text, width) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: "1A1A2E", type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({ children: [new TextRun({ font: "Arial", size: 20, bold: true, color: "FFFFFF", text })] })]
  });
}

function cell(text, width, opts = {}) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: opts.shade ? { fill: "F5F5F5", type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ font: "Arial", size: 20, text, ...opts.run })] })]
  });
}

function divider() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: "E0E0E0", space: 1 } },
    children: []
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: "1A1A2E" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2D2D44" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "444466" },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.BULLET, text: "\u25E6", alignment: AlignmentType.LEFT,
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
        margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 }
      }
    },
    children: [
      // TITLE BLOCK
      new Paragraph({
        spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 44, bold: true, color: "1A1A2E",
          text: "Meeting Recap \u2014 Noloop LeadMe & Commercial Strategy" })]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ font: "Arial", size: 22, color: "666666",
          text: "Data: luned\u00EC 2 marzo 2026 | Sede: Noloop Milano (in presenza + Teams)" })]
      }),
      new Paragraph({
        spacing: { after: 300 },
        children: [new TextRun({ font: "Arial", size: 22, color: "666666",
          text: "Partecipanti: Carlo (HeyAI \u2014 PM), Marco Pasquali (Noloop \u2014 New Business Roma), Ilya (Noloop \u2014 New Business), Laura Zaghi (Noloop \u2014 Resp. Commerciale, da remoto)" })]
      }),

      divider(),

      // =============================================
      // SECTION 1: CONTESTO E PROBLEMI EMERSI
      // =============================================
      heading("1. Contesto e problematiche emerse", HeadingLevel.HEADING_1),

      heading("1.1 Lavoro in silos e dispersione informativa", HeadingLevel.HEADING_2),
      para("Il problema principale emerso dal meeting \u00E8 che i team commerciali di Noloop operano in silos separati, con scarsissima comunicazione tra loro. Carlo ha evidenziato di trovarsi spesso a parlare con referenti che dovrebbero appartenere alla stessa area ma che tra loro non comunicano. Questo genera rischi concreti:"),
      bullet("Duplicazione di contatti: pi\u00F9 persone lavorano sullo stesso lead senza saperlo"),
      bullet("Figure di m***: contattare un\u2019azienda gi\u00E0 in lavorazione da un collega, creando imbarazzo"),
      bullet("Perdita di tempo: Ilya ha spiegato che prima di fare una telefonata studia l\u2019azienda (sito, portale, direttore marketing, segreteria) e non vuole investire questo tempo su un lead gi\u00E0 assegnato ad altri"),
      bullet("Mancanza di visibilit\u00E0 trasversale: Marco non sapeva nemmeno dell\u2019esistenza di LeadMe come strumento operativo"),

      heading("1.2 Gelosia sui clienti e resistenza alla condivisione", HeadingLevel.HEADING_2),
      para("Laura Zaghi ha confermato che esiste una forma di \u201Cgelosia\u201D sui lead. In passato, alcune persone sono state escluse dal sistema apposta per impedirgli di vedere i lead su cui si lavorava. Carlo ha sottolineato che questo va contro il business aziendale. Ilya ha chiarito che non vuole competere con i colleghi, vuole semplicemente sapere se un lead \u00E8 gi\u00E0 in lavorazione da qualcun altro per non pestargli i piedi."),

      heading("1.3 LeadMe: stato attuale e limiti", HeadingLevel.HEADING_2),
      para("Carlo ha fatto una demo di LeadMe mostrando le funzionalit\u00E0 esistenti: dashboard contatti, filtri per commerciale, integrazione LinkedIn (estensione per importare contatti da Sales Navigator), vista mobile. Tuttavia sono emersi limiti importanti:"),
      bullet("Il sistema di status attuale \u00E8 troppo semplicistico: solo \u201Cpositivo/negativo\u201D, che non dice nulla sullo stato reale del lead"),
      bullet("Mancano sotto-categorie e fasi del funnel (prospect freddo, prospect caldo, primo contatto, follow-up, brief ricevuto, cliente acquisito)"),
      bullet("Le note ci sono ma non sono leggibili a colpo d\u2019occhio: bisogna aprire ogni singolo lead per capire cosa \u00E8 successo"),
      bullet("La struttura attuale \u00E8 essenzialmente il vecchio Excel riproposto in formato digitale, senza un vero ripensamento del workflow"),

      heading("1.4 Ispirazione da ClickUp di Ilya", HeadingLevel.HEADING_2),
      para("Ilya ha mostrato come gestisce i propri contatti su ClickUp, con una categorizzazione molto pi\u00F9 articolata: lead, prospect 1, prospect 2, caldo, freddo, cliente. Carlo ha apprezzato molto questo approccio e ha dichiarato di voler portare questa logica dentro LeadMe."),

      divider(),

      // =============================================
      // SECTION 2: MAPPATURA COMMERCIALI
      // =============================================
      heading("2. Mappatura dell\u2019organizzazione commerciale", HeadingLevel.HEADING_1),

      para("Uno dei risultati pi\u00F9 importanti del meeting \u00E8 stata la mappatura (ancora parziale) della struttura commerciale di Noloop. Ecco lo schema emerso:"),

      // Table: Commercial Structure
      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [2200, 2400, 2600, 2306],
        rows: [
          new TableRow({ children: [
            headerCell("Area", 2200), headerCell("Persone", 2400),
            headerCell("Attivit\u00E0", 2600), headerCell("Strumento", 2306)
          ]}),
          new TableRow({ children: [
            cell("New Business (core)", 2200, { run: { bold: true } }),
            cell("Simona, Luca, Matteo", 2400),
            cell("Ricerca attiva prospect, primo contatto LinkedIn/telefono, onboarding lead", 2600),
            cell("LeadMe + Sales Navigator", 2306)
          ]}),
          new TableRow({ children: [
            cell("New Business (Roma)", 2200, { run: { bold: true }, shade: true }),
            cell("Marco Pasquali, Ilya", 2400, { shade: true }),
            cell("Sviluppo business Centro Italia / Roma. Indipendenti ma da coordinare", 2600, { shade: true }),
            cell("Da integrare su LeadMe", 2306, { shade: true })
          ]}),
          new TableRow({ children: [
            cell("Clienti fidelizzati", 2200, { run: { bold: true } }),
            cell("Barbara + altri account", 2400),
            cell("Gestione clienti acquisiti (2-3 viaggi/anno, brief telefonici)", 2600),
            cell("Non usano LeadMe, no new business", 2306)
          ]}),
          new TableRow({ children: [
            cell("B2C / Pop-up (NOT)", 2200, { run: { bold: true }, shade: true }),
            cell("Massimiliano, Germano, Andrea", 2400, { shade: true }),
            cell("Pop-up store, centri commerciali. Andrea usa Sales Navigator per cercare aziende", 2600, { shade: true }),
            cell("Usano un ALTRO CRM (replicato)", 2306, { shade: true })
          ]}),
          new TableRow({ children: [
            cell("Contractors / Freelance", 2200, { run: { bold: true } }),
            cell("Da identificare", 2400),
            cell("New business esterno, inquadramento sconosciuto", 2600),
            cell("Da chiarire con Laura G.", 2306)
          ]}),
          new TableRow({ children: [
            cell("B2C Creativo", 2200, { run: { bold: true }, shade: true }),
            cell("Chicco, Alessio + altri", 2400, { shade: true }),
            cell("Clienti B2C, lavoro creativo/pubblicitario", 2600, { shade: true }),
            cell("Gestione separata, da valutare integrazione", 2306, { shade: true })
          ]}),
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 120 }, children: [
        new TextRun({ font: "Arial", size: 22, bold: true, color: "CC0000",
          text: "Punto critico: " }),
        new TextRun({ font: "Arial", size: 22,
          text: "Il team B2C/NOT (Massimiliano & co.) usa gi\u00E0 un altro strumento CRM che fa esattamente la stessa cosa di LeadMe, ma senza alcuna integrazione. Andrea cerca prospect su Sales Navigator senza sapere se sono gi\u00E0 su LeadMe. Questa duplicazione \u00E8 un rischio enorme e uno spreco di licenze." })
      ] }),

      divider(),

      // =============================================
      // SECTION 3: DECISIONI PRESE
      // =============================================
      heading("3. Decisioni prese durante il meeting", HeadingLevel.HEADING_1),

      heading("3.1 Onboarding Marco e Ilya su LeadMe", HeadingLevel.HEADING_2),
      bullet("Marco e Ilya sono stati ufficialmente inseriti come utenti in LeadMe"),
      bullet("Ilya inizier\u00E0 a inserire i propri contatti (quelli gi\u00E0 contattati, con follow-up in corso) lavorando uno alla volta durante l\u2019attivit\u00E0 quotidiana"),
      bullet("Laura Zaghi ha incaricato Simona di fare un check incrociato sui contatti di Marco e Ilya per verificare se ci sono sovrapposizioni con lead gi\u00E0 esistenti"),
      bullet("Se un contatto esiste gi\u00E0, non verr\u00E0 duplicato: Ilya/Marco leggeranno lo storico e agiranno di conseguenza"),
      bullet("Le vecchie note degli Excel sono state migrate dentro LeadMe (gi\u00E0 fatto da Carlo)"),

      heading("3.2 Coordinamento e regole di ingaggio", HeadingLevel.HEADING_2),
      bullet("Tutti i commerciali new business devono lavorare sullo stesso database (LeadMe)"),
      bullet("Prima di lavorare su un nuovo lead, controllare sempre su LeadMe se qualcuno ci sta gi\u00E0 lavorando"),
      bullet("In caso di dubbio, chiedere conferma a Laura Zaghi che funge da \u201Cmemoria storica\u201D (conosce relazioni pregresse, contatti ibridi non ancora inseriti, ecc.)"),
      bullet("Le viste saranno separate per commerciale: ognuno vede i propri lead, ma la base dati \u00E8 condivisa per evitare sovrapposizioni"),
      bullet("I permessi di modifica saranno limitati: non tutti potranno cambiare owner o modificare dati sensibili (problema gi\u00E0 riscontrato con Simona che toccava gli owner)"),

      heading("3.3 Chiarimento nomenclatura", HeadingLevel.HEADING_2),
      para("Ilya ha sollevato un punto fondamentale sulla nomenclatura. Nella piattaforma si chiamano erroneamente \u201Clead\u201D anche i prospect e i clienti. La distinzione corretta concordata \u00E8:"),
      bulletBold("Lead: ", "fase pre-relazione. Stai cercando di entrare in contatto"),
      bulletBold("Prospect: ", "primo contatto avvenuto, relazione in costruzione (freddo/caldo)"),
      bulletBold("Fornitore/Cliente: ", "hai ricevuto un brief, sei nel panel fornitori, relazione stabilita"),
      para("Questa nomenclatura deve essere standardizzata a livello aziendale e implementata in LeadMe."),

      heading("3.4 Funnel: evoluzione concordata", HeadingLevel.HEADING_2),
      para("Si \u00E8 concordato che il sistema di status di LeadMe deve essere completamente rivisto per riflettere un vero conversion funnel. La struttura prevista:"),
      bullet("Categorizzazione madre per fase del funnel (Lead \u2192 Prospect Freddo \u2192 Prospect Caldo \u2192 Brief Ricevuto \u2192 Cliente)"),
      bullet("Per ogni fase: sotto-categorie che indicano cosa \u00E8 successo e qual \u00E8 il prossimo passo"),
      bullet("Scadenze selezionabili (calendario) per ogni attivit\u00E0"),
      bullet("Il passaggio da uno status all\u2019altro deve essere guidato dalle attivit\u00E0 (es. primo contatto positivo \u2192 follow-up \u2192 presentazione \u2192 brief)"),
      para("Carlo approfondire\u00E0 la struttura del funnel con Ilya in una call dedicata da 30 minuti."),

      heading("3.5 Clienti fidelizzati nel database", HeadingLevel.HEADING_2),
      para("Laura Zaghi si \u00E8 impegnata a inserire i clienti fidelizzati e i contatti \u201Cibridi\u201D (es. ACEA \u2014 relazione personale di Laura con un ex-collega che ora \u00E8 capo marketing l\u00EC, ma non ancora inserito nel sistema). Questo serve per:"),
      bullet("Evitare che il new business contatti aziende gi\u00E0 in gestione"),
      bullet("Avere visibilit\u00E0 completa su tutto il parco clienti/contatti Noloop"),

      divider(),

      // =============================================
      // SECTION 4: ROADMAP / PROSSIMI PASSI
      // =============================================
      heading("4. Roadmap e prossimi passi strutturati", HeadingLevel.HEADING_1),

      heading("4.1 Step 0 \u2014 Setup organizzativo (PRIORIT\u00C0 ASSOLUTA)", HeadingLevel.HEADING_2),
      para("Prerequisito imprescindibile. Senza questo, tutto il resto \u00E8 costruito su fondamenta sbagliate."),

      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [4000, 3000, 2506],
        rows: [
          new TableRow({ children: [
            headerCell("Azione", 4000), headerCell("Responsabile", 3000), headerCell("Scadenza", 2506)
          ]}),
          new TableRow({ children: [
            cell("Email di recap con tutti i punti emersi dal meeting", 4000),
            cell("Carlo", 3000),
            cell("Entro 3 marzo", 2506)
          ]}),
          new TableRow({ children: [
            cell("Mappatura completa: chi sono i commerciali, ruoli, gruppi, chi fa cosa, come devono collaborare, chi deve vedere cosa", 4000, { shade: true }),
            cell("Carlo + Laura Zaghi + Laura Garbarino", 3000, { shade: true }),
            cell("Da schedulare", 2506, { shade: true })
          ]}),
          new TableRow({ children: [
            cell("Chiarire inquadramento contractors/freelance new business", 4000),
            cell("Laura Garbarino", 3000),
            cell("Da definire", 2506)
          ]}),
          new TableRow({ children: [
            cell("Chiarire posizione team B2C/NOT (Massimiliano & co.) e loro strumento CRM separato", 4000, { shade: true }),
            cell("Carlo + Laura Garbarino + Paolo", 3000, { shade: true }),
            cell("Da definire", 2506, { shade: true })
          ]}),
          new TableRow({ children: [
            cell("Definire se Chicco e team B2C creativo devono essere integrati su LeadMe", 4000),
            cell("Carlo + Laura Garbarino", 3000),
            cell("Da definire", 2506)
          ]}),
        ]
      }),

      heading("4.2 Step 0.5 \u2014 Presentazione a Laura Garbarino", HeadingLevel.HEADING_2),
      para("Carlo preparer\u00E0 una presentazione della visione 2026 per Laura Garbarino entro questa settimana (target gioved\u00EC 6 marzo). Obiettivo: ottenere il commitment su un budget orientativo per procedere con sviluppi e approfondimenti. La presentazione includer\u00E0:"),
      bullet("Le tre aree scoperte (Noloop B2B, NOT/Pop-up B2C, B2C Creativo) e la necessit\u00E0 di integrazione"),
      bullet("Stato attuale di LeadMe e quick win immediate"),
      bullet("Roadmap evolutiva con priorit\u00E0 (immediato / medio termine / lungo termine)"),
      bullet("Proposta di ecosistema integrato con agenti AI"),
      para("Nota: Carlo ha gi\u00E0 investito due mesi di lavoro su questa proposta e vuole chiuderla per avere un OK formale."),

      heading("4.3 Step 1 \u2014 Quick Win immediate su LeadMe", HeadingLevel.HEADING_2),
      boldPara("A. Ridisegno del sistema di status/funnel"),
      bullet("Eliminare il sistema positivo/negativo attuale"),
      bullet("Implementare il conversion funnel con fasi e sotto-categorie"),
      bullet("Call di approfondimento Carlo + Ilya per definire la struttura esatta"),
      bullet("Questo \u00E8 a basso costo di sviluppo e ad alto impatto operativo"),

      new Paragraph({ spacing: { before: 120 }, children: [] }),
      boldPara("B. Inserimento contatti"),
      bullet("Ilya: inserire progressivamente i propri contatti attivi (quelli con follow-up in corso)"),
      bullet("Marco: idem, previo check di Simona per evitare duplicati"),
      bullet("Laura Zaghi: inserire clienti fidelizzati e contatti ibridi mancanti"),

      new Paragraph({ spacing: { before: 120 }, children: [] }),
      boldPara("C. Workflow standardizzato"),
      bullet("Definire il flusso base: Sales Navigator \u2192 LeadMe (import) \u2192 tracciamento attivit\u00E0 \u2192 aggiornamento status"),
      bullet("Per ogni fase del funnel: brainstorming su quali azioni servono, cosa funziona e cosa no"),

      heading("4.4 Step 2 \u2014 Evoluzioni di medio termine", HeadingLevel.HEADING_2),
      bulletBold("Agente AI dentro LeadMe: ", "legge ogni mattina tutti i prospect senza aggiornamenti da 3 settimane, analizza note/date/attivit\u00E0, manda un report via email con le azioni da fare nella giornata (es. \u201Cricordati di richiamare Roberto\u201D, \u201Cmanda la presentazione entro 3 giorni\u201D). Carlo ha detto che \u00E8 gi\u00E0 pronto di base."),
      bulletBold("Integrazione vocale con agente AI: ", "possibilit\u00E0 di aggiornare LeadMe parlando (es. clicco sull\u2019icona agente e dico \u201CHo avuto una call con Marco Pasquali, vuole una presentazione entro il 6 marzo\u201D \u2192 l\u2019agente aggiorna status, note, scadenze automaticamente)."),
      bulletBold("Integrazione call recorder + LeadMe: ", "lo strumento che registra le chiamate genera un report; alla fine del report un tasto \u201Cmanda su LeadMe\u201D trasferisce le informazioni e le categorizza automaticamente."),
      bulletBold("Materiali di vendita strutturati: ", "landing page verticali per settore (one-pager con logo, claim, 3 immagini forti, link attivi), presentazioni modulabili, format email personalizzate."),
      bulletBold("Automazione portali fornitori: ", "iscrizione e manutenzione automatica dei portali (es. ACI, Federazione Pentathlon). Fattibile ma richiede manutenzione (compliance, DURC, cambio requisiti). Marco Merli gi\u00E0 spende tantissime ore su questo."),

      heading("4.5 Step 3 \u2014 Visione lungo termine (l\u2019Ottimo)", HeadingLevel.HEADING_2),
      para("L\u2019ecosistema completo in cui tutta l\u2019azienda (B2B, B2C, NOT/Pop-up) lavora sugli stessi strumenti, integrati e visibili trasversalmente. Ogni applicativo ha il proprio agente AI dedicato. Le informazioni fluiscono da un applicativo all\u2019altro senza intervento manuale."),

      divider(),

      // =============================================
      // SECTION 5: TEMI APERTI
      // =============================================
      heading("5. Temi aperti e punti di attenzione", HeadingLevel.HEADING_1),

      new Table({
        width: { size: 9506, type: WidthType.DXA },
        columnWidths: [1200, 4800, 3506],
        rows: [
          new TableRow({ children: [
            headerCell("#", 1200), headerCell("Tema", 4800), headerCell("Da risolvere con", 3506)
          ]}),
          new TableRow({ children: [
            cell("1", 1200), cell("Il team NOT/Pop-up usa un CRM separato che replica LeadMe. Andrea cerca prospect senza visibilit\u00E0 sul database principale. Massimiliano \u00E8 d\u2019accordo a integrare.", 4800),
            cell("Laura Garbarino + Paolo + Massimiliano", 3506)
          ]}),
          new TableRow({ children: [
            cell("2", 1200, { shade: true }), cell("Contractors/freelance che fanno new business: chi sono? Che inquadramento hanno? Devono entrare su LeadMe? Con quali permessi?", 4800, { shade: true }),
            cell("Laura Garbarino", 3506, { shade: true })
          ]}),
          new TableRow({ children: [
            cell("3", 1200), cell("Chicco e il team B2C creativo: riunione gi\u00E0 fatta con Alessio. Lavorano sui clienti di Chicco con approccio pi\u00F9 pubblicitario. Coordinamento commerciale anche su di loro?", 4800),
            cell("Carlo + Laura Garbarino", 3506)
          ]}),
          new TableRow({ children: [
            cell("4", 1200, { shade: true }), cell("Licenze Sales Navigator: Laura Zaghi ha segnalato che il costo delle licenze \u00E8 un problema. Bisogna capire quante servono e per chi.", 4800, { shade: true }),
            cell("Laura Zaghi + Laura Garbarino", 3506, { shade: true })
          ]}),
          new TableRow({ children: [
            cell("5", 1200), cell("Mancanza di presentazione aziendale standardizzata. Marco Merli ha mandato presentazioni \u201Cfatte con l\u2019AI\u201D ma senza pensiero strategico dietro. Non esiste un format modulabile per settore.", 4800),
            cell("Carlo + Ilya + team creativo", 3506)
          ]}),
          new TableRow({ children: [
            cell("6", 1200, { shade: true }), cell("Processo di primo contatto non strutturato: ognuno fa a modo suo (LinkedIn, telefono, email). Serve un brainstorming collettivo per definire best practice.", 4800, { shade: true }),
            cell("Carlo + tutti i commerciali NB", 3506, { shade: true })
          ]}),
          new TableRow({ children: [
            cell("7", 1200), cell("Portali fornitori: automatizzazione iscrizione e manutenzione. Fattibile ma delicato (compliance, DURC, documenti sensibili). Marco Merli ci perde molto tempo.", 4800),
            cell("Carlo + Marco Merli + Paolo", 3506)
          ]}),
          new TableRow({ children: [
            cell("8", 1200, { shade: true }), cell("ACEA e altri contatti \u201Cibridi\u201D di Laura Zaghi non ancora inseriti su LeadMe. Rischio di pestare i piedi.", 4800, { shade: true }),
            cell("Laura Zaghi (inserimento)", 3506, { shade: true })
          ]}),
          new TableRow({ children: [
            cell("9", 1200), cell("Flusso post-acquisizione cliente: quando il new business chiude un deal, il cliente va assegnato agli account di gestione (non resta al commerciale NB). Regola concordata ma con eccezioni possibili.", 4800),
            cell("Laura Zaghi", 3506)
          ]}),
        ]
      }),

      divider(),

      // =============================================
      // SECTION 6: COMPITI A CASA
      // =============================================
      heading("6. Compiti a casa \u2014 Azioni immediate per persona", HeadingLevel.HEADING_1),

      heading("Carlo (HeyAI)", HeadingLevel.HEADING_3),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Inviare email di recap del meeting (questo documento) a Marco, Ilya, Laura Zaghi. In CC Laura Garbarino (con punto aperto da discutere)" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Preparare presentazione 2026 per Laura Garbarino (target gioved\u00EC 6 marzo). Richiedere conferma data" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Schedulare call 30 min con Ilya per approfondire struttura funnel/status" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Iniziare a lavorare sulla struttura del funnel e sulla proposta di processo standardizzato" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Aggiornare la proposta/roadmap includendo i nuovi temi emersi (B2C/NOT, contractors, portali)" })] }),

      heading("Ilya", HeadingLevel.HEADING_3),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Iniziare a inserire in LeadMe i contatti gi\u00E0 lavorati (quelli con follow-up attivi), uno alla volta durante il lavoro quotidiano" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Disponibilit\u00E0 per call con Carlo sulla struttura funnel" })] }),

      heading("Marco Pasquali", HeadingLevel.HEADING_3),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Inserire i propri contatti in LeadMe, previo check di Simona sulle sovrapposizioni" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Coordinarsi sempre con Laura Zaghi prima di lavorare su un nuovo contatto" })] }),

      heading("Laura Zaghi", HeadingLevel.HEADING_3),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Far fare a Simona il check sui contatti di Marco e Ilya (in corso)" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Inserire i contatti ibridi mancanti (ACEA, altri non ancora a sistema)" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Inserire i clienti fidelizzati nel database per completezza" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Aiutare Carlo a mappare la struttura commerciale completa" })] }),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 80 },
        children: [new TextRun({ font: "Arial", size: 22, text: "Coordinare con Laura Garbarino il tema dei contractors e del team B2C" })] }),

      divider(),

      // =============================================
      // SECTION 7: PRINCIPI GUIDA
      // =============================================
      heading("7. Principi guida concordati per l\u2019evoluzione 2026", HeadingLevel.HEADING_1),

      boldPara("Integrazione: ", "le informazioni devono fluire da un applicativo all\u2019altro. Non pi\u00F9 silos."),
      boldPara("Semplicit\u00E0: ", "non mettere funzionalit\u00E0 inutili per quella persona. Ogni ruolo vede quello che gli serve."),
      boldPara("Viste personalizzate: ", "ogni commerciale ha la sua vista, ma il database \u00E8 condiviso."),
      boldPara("Il perfetto \u00E8 nemico del buono: ", "partiamo con quello che c\u2019\u00E8, miglioriamo iterativamente. Non aspettiamo l\u2019ottimo per cominciare."),
      boldPara("Prima le fondamenta: ", "se le basi sono sbagliate (status positivo/negativo), anche l\u2019AI lavorer\u00E0 su dati sbagliati. Metafora di Carlo: \u201Cse dici alla gente che 3+3 fa 7, tutti i calcoli saranno sbagliati\u201D."),
      boldPara("Approccio bottom-up: ", "brainstorming con i commerciali per capire cosa serve davvero, poi traduzione in tecnologia."),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/meeting_recap_noloop.docx", buffer);
  console.log("Document created successfully");
});