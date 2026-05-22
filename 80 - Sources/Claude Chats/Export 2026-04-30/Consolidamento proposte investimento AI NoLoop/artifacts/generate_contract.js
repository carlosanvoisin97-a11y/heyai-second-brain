const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, ImageRun,
  Header, Footer, AlignmentType, HeadingLevel, LevelFormat,
  BorderStyle, WidthType, ShadingType, PageBreak, PageNumber,
  Table, TableRow, TableCell, UnderlineType
} = require("docx");

// ===== STYLING =====
const FONT = "Times New Roman";
const SZ = 24; // 12pt
const SZ_SMALL = 20; // 10pt
const COLOR = "000000";

function title(text) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 0, after: 120 },
    children: [new TextRun({ text, bold: true, underline: { type: UnderlineType.SINGLE }, size: SZ, font: FONT })]
  });
}

function articleHeading(text) {
  return new Paragraph({
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, bold: true, size: SZ, font: FONT })]
  });
}

function subHeading(text) {
  return new Paragraph({
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, bold: true, size: SZ, font: FONT })]
  });
}

function p(text, opts = {}) {
  return new Paragraph({
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
    spacing: { before: opts.spaceBefore || 80, after: opts.spaceAfter || 80, line: 276 },
    indent: opts.indent ? { left: opts.indent } : undefined,
    children: [new TextRun({ text, size: SZ, font: FONT, bold: opts.bold || false, italics: opts.italics || false, underline: opts.underline ? { type: UnderlineType.SINGLE } : undefined })]
  });
}

function pMulti(runs, opts = {}) {
  return new Paragraph({
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.JUSTIFIED,
    spacing: { before: opts.spaceBefore || 80, after: opts.spaceAfter || 80, line: 276 },
    indent: opts.indent ? { left: opts.indent } : undefined,
    children: runs.map(r => {
      if (typeof r === "string") return new TextRun({ text: r, size: SZ, font: FONT });
      return new TextRun({ size: SZ, font: FONT, ...r });
    })
  });
}

function bullet(text, opts = {}) {
  return new Paragraph({
    numbering: { reference: "dash", level: 0 },
    spacing: { before: 40, after: 40, line: 276 },
    children: [new TextRun({ text, size: SZ, font: FONT, bold: opts.bold || false })]
  });
}

function bulletMulti(runs) {
  return new Paragraph({
    numbering: { reference: "dash", level: 0 },
    spacing: { before: 40, after: 40, line: 276 },
    children: runs.map(r => {
      if (typeof r === "string") return new TextRun({ text: r, size: SZ, font: FONT });
      return new TextRun({ size: SZ, font: FONT, ...r });
    })
  });
}

function letterItem(text, letter) {
  return pMulti([
    { text: letter + ") ", bold: true },
    text
  ]);
}

function emptyP() {
  return new Paragraph({ spacing: { before: 0, after: 0 }, children: [] });
}

// ===== BUILD DOCUMENT =====
const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: SZ } } },
  },
  numbering: {
    config: [
      {
        reference: "dash",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "-", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
      },
      {
        reference: "alpha",
        levels: [{ level: 0, format: LevelFormat.LOWER_LETTER, text: "%1)", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [

      // ===== INTESTAZIONE =====
      title("CONTRATTO"),
      title("DI SVILUPPO SOFTWARE E CONSULENZA PER"),
      title("SOLUZIONI DI INTELLIGENZA ARTIFICIALE"),
      title("(WAVE 1 \u2013 ECOSISTEMA AI NOLOOP)"),

      emptyP(),
      p("tra", { center: true, underline: true }),
      emptyP(),

      pMulti([
        { text: "HeyAI S.r.l.", bold: true },
        ", con sede in Roma, Via Parigi n. 11, P.IVA 17947791004, PEC heyai@pec.it, in persona dell\u2019amministratore unico e legale rappresentante Bruno Mattucci (qui di seguito anche la \u201C",
        { text: "Consulente", bold: true },
        "\u201D),"
      ]),

      emptyP(),
      p("e", { center: true, underline: true }),
      emptyP(),

      pMulti([
        { text: "NOLOOP S.r.l.", bold: true },
        ", con sede in Milano, Via Palermo n. 8, 20121, P. IVA 13459880152, PEC noloopsrl@pec.noloop.eu, in persona del legale rappresentante Donzelli Paolo (qui di seguito chiamata \u201C",
        { text: "NOLOOP", bold: true },
        "\u201D)."
      ]),

      emptyP(),
      p("Premesso", { center: true, bold: true }),

      bullet("che la Consulente \u00e8 una societ\u00e0 operante nel settore dello sviluppo di soluzioni tecnologiche basate su intelligenza artificiale, con particolare specializzazione nella progettazione e nello sviluppo di piattaforme software per l\u2019automazione e l\u2019ottimizzazione dei processi aziendali;"),
      bullet("che la Consulente fornisce soluzioni personalizzate che integrano modelli di intelligenza artificiale, interfacce web proprietarie e strumenti di automazione per la gestione di dati, flussi operativi e processi decisionali;"),
      bullet("che NOLOOP \u00e8 un\u2019agenzia specializzata nell\u2019organizzazione di eventi aziendali, viaggi incentive, eventi consumers e attivit\u00e0 di brand activation, operante in diversi settori merceologici;"),
      bullet("che nell\u2019ottica di una strategia di efficientamento e innovazione dei processi interni, NOLOOP ha manifestato l\u2019esigenza di adottare un ecosistema digitale integrato basato su intelligenza artificiale, al fine di migliorare la gestione degli eventi, l\u2019analisi dei dati aziendali, la reportistica strategica e la tracciabilit\u00e0 delle decisioni interne;"),
      bullet("che a tal fine, NOLOOP ha incaricato la Consulente di progettare, sviluppare e configurare un ecosistema di soluzioni software basate su intelligenza artificiale (di seguito la \u201CWave 1\u201D), composto da una piattaforma unificata e da moduli funzionali integrati, come meglio descritto nel presente contratto e nel relativo Allegato Tecnico;"),
      bullet("che le Parti hanno concordato il perimetro funzionale, i corrispettivi e le modalit\u00e0 di esecuzione del progetto, e che le attivit\u00e0 di sviluppo sono state avviate e parzialmente eseguite prima della formalizzazione del presente contratto, il quale pertanto ha efficacia retroattiva alla data di effettivo inizio dei lavori come indicato all\u2019art. 6."),

      emptyP(),
      p("Tanto premesso tra le parti sopra indicate si conviene e stipula quanto segue."),

      // ===== 1. PREMESSE =====
      articleHeading("1. PREMESSE"),
      p("Le premesse costituiscono parte integrante e sostanziale del presente contratto e presupposizione comune ad entrambe le parti."),

      // ===== 2. DEFINIZIONI =====
      articleHeading("2. DEFINIZIONI"),
      p("In aggiunta ai termini e alle espressioni definite in altre clausole del presente contratto, i termini e le espressioni elencate qui di seguito hanno il significato di seguito specificato:"),

      bulletMulti([
        { text: "AI (Intelligenza Artificiale): ", bold: true },
        "qualsiasi sistema basato su modelli matematici e algoritmi in grado di eseguire compiti che normalmente richiedono intelligenza umana, come comprensione del linguaggio, classificazione, predizione o generazione di contenuti;"
      ]),
      bulletMulti([
        { text: "Modello (AI Model): ", bold: true },
        "sistema di apprendimento automatico pre-addestrato utilizzato per generare risposte, elaborare dati o fornire raccomandazioni. Nel presente contratto si fa riferimento a qualsiasi modello di intelligenza artificiale generativa o specializzata, ivi inclusi a titolo esemplificativo e non esaustivo modelli di tipo LLM (Large Language Model), indipendentemente dal fornitore;"
      ]),
      bulletMulti([
        { text: "Piattaforma: ", bold: true },
        "l\u2019ecosistema software unificato sviluppato dalla Consulente, comprensivo del workspace di accesso, del sistema di autenticazione e dei moduli funzionali descritti all\u2019art. 3;"
      ]),
      bulletMulti([
        { text: "Modulo: ", bold: true },
        "ciascuna componente funzionale della Piattaforma, progettata per rispondere a una specifica esigenza operativa di NOLOOP;"
      ]),
      bulletMulti([
        { text: "Dataset: ", bold: true },
        "qualsiasi insieme strutturato di dati utilizzato come input per alimentare il modello AI, direttamente o indirettamente;"
      ]),
      bulletMulti([
        { text: "Allegato Tecnico: ", bold: true },
        "il documento denominato \u201CAllegato Tecnico: Ecosistema AI Noloop \u2013 Wave 1\u201D, che forma parte integrante e sostanziale del presente contratto e contiene le specifiche funzionali dettagliate di ciascun Modulo;"
      ]),
      bulletMulti([
        { text: "UAT (User Acceptance Test): ", bold: true },
        "fase di test in cui NOLOOP valuta se la soluzione soddisfa i requisiti concordati e pu\u00f2 essere considerata accettata;"
      ]),
      bulletMulti([
        { text: "API (Application Programming Interface): ", bold: true },
        "interfaccia software che consente la comunicazione e lo scambio di dati tra sistemi diversi;"
      ]),
      bulletMulti([
        { text: "Change Request: ", bold: true },
        "richiesta formale di modifica, estensione o variazione delle funzionalit\u00e0 concordate, che deve essere valutata e approvata da entrambe le Parti prima della sua eventuale implementazione."
      ]),

      // ===== 3. OGGETTO DEL CONTRATTO =====
      new Paragraph({ children: [new PageBreak()] }),
      articleHeading("3. OGGETTO DEL CONTRATTO"),
      p("Il presente contratto ha per oggetto la progettazione, lo sviluppo e la configurazione di un ecosistema di soluzioni software basate su intelligenza artificiale, personalizzate e funzionali all\u2019attivit\u00e0 di NOLOOP (la \u201CWave 1\u201D). L\u2019ecosistema \u00e8 composto dai seguenti Moduli (in seguito congiuntamente il \u201CProgetto\u201D):"),

      subHeading("3.1 Ecosistema AI Noloop (Infrastruttura)"),
      p("Si tratta dello sviluppo di un workspace unificato e sicuro che funge da portale di accesso unico per tutti i dipendenti di NOLOOP alle funzionalit\u00e0 di Intelligenza Artificiale. La Piattaforma gestisce l\u2019autenticazione degli utenti, i permessi basati sui ruoli e sulle licenze, e garantisce che tutte le interazioni con i modelli AI avvengano in un ambiente controllato e conforme alle policy di sicurezza aziendali."),

      subHeading("3.2 Piattaforma Gestione Eventi (Segreteria & Biglietteria)"),
      p("Si tratta dello sviluppo di una piattaforma per la digitalizzazione e l\u2019internalizzazione dell\u2019intero processo di gestione dei partecipanti agli eventi, attualmente frammentato tra software di terze parti e procedure manuali. La piattaforma copre l\u2019intero ciclo di vita:"),
      bullet("raccolta dati tramite form builder custom per la creazione di moduli di iscrizione brandizzati, con confluenza dei dati in un database centralizzato;"),
      bullet("gestione e grouping tramite motore di regole per la creazione di gruppi dinamici di partecipanti per l\u2019assegnazione a hotel, voli e attivit\u00e0;"),
      bullet("comunicazione tramite integrazione con API per l\u2019invio di comunicazioni massive e personalizzate via Email e WhatsApp."),

      subHeading("3.3 Analisi Dati e Reportistica Avanzata"),
      p("Si tratta dello sviluppo di una soluzione per la Direzione di NOLOOP volta a trasformare il file \u201CProgress\u201D in una fonte di insight strategici. Un agente AI viene addestrato per leggere e interpretare il file, generando dashboard dinamiche e report automatici su KPI fondamentali: marginalit\u00e0 per cliente e tipologia di servizio, analisi del fatturato, allocazione delle risorse e analisi degli scostamenti di budget."),

      subHeading("3.4 Assistente Virtuale per Meeting"),
      p("Si tratta dello sviluppo di uno strumento interno per la generazione automatica di minute e next step a seguito delle riunioni. L\u2019assistente virtuale opera all\u2019interno dell\u2019ecosistema sicuro di NOLOOP, garantendo che le trascrizioni e i dati discussi non vengano mai condivisi con piattaforme di terze parti. La soluzione fornisce un output strutturato, evidenziando decisioni, punti chiave e azioni da intraprendere."),

      subHeading("3.5 Requisiti Aggiuntivi \u2013 Piattaforma Gestione Eventi"),
      p("Nel corso dello sviluppo della Piattaforma Gestione Eventi di cui all\u2019art. 3.2, le Parti hanno concordato l\u2019implementazione delle seguenti funzionalit\u00e0 aggiuntive:"),
      bullet("associazione automatica degli itinerari di viaggio per ogni partecipante, tramite incrocio dei dati delle tratte con le informazioni di provenienza e arrivo;"),
      bullet("gestione massiva dei biglietti PDF, con separazione automatica dei singoli biglietti da file cumulativi e associazione al profilo del partecipante corretto;"),
      bullet("generazione automatica di \u201CRooming List\u201D per hotel, con file strutturati secondo le specifiche alberghiere;"),
      bullet("export di liste operative per lo staff on-site (autisti, hostess), filtrate e impaginate automaticamente in PDF con la grafica ufficiale dell\u2019evento;"),
      bullet("integrazione dati successiva alla prima registrazione, con modulo di aggiornamento che mostra solo i nuovi campi da compilare."),

      p("Le specifiche funzionali di dettaglio per ciascun Modulo sono contenute nell\u2019Allegato Tecnico, che forma parte integrante e sostanziale del presente contratto.", { spaceBefore: 200 }),

      // ===== 4. FASI DI SVILUPPO =====
      new Paragraph({ children: [new PageBreak()] }),
      articleHeading("4. FASI DI SVILUPPO DEL PROGETTO"),
      p("Il Progetto \u00e8 articolato nelle seguenti fasi:"),

      pMulti([
        { text: "a. Raccolta requisiti e analisi: ", bold: true },
        "NOLOOP ha condiviso con la Consulente le informazioni necessarie attraverso 10 sessioni di deep-dive con tutti i principali reparti aziendali. Le Parti hanno elaborato un documento contenente i requisiti di Progetto, confluiti nell\u2019Allegato Tecnico. I requisiti sono suddivisi in requisiti base e requisiti aggiuntivi, che congiuntamente costituiscono il perimetro di Progetto;"
      ]),
      pMulti([
        { text: "b. Progettazione e Architettura;", bold: true },
      ]),
      pMulti([
        { text: "c. Sviluppo e Rilasci Incrementali: ", bold: true },
        "sviluppo agile dei Moduli in sprint successivi, con rilasci intermedi per consentire feedback continui da parte del team NOLOOP;"
      ]),
      pMulti([
        { text: "d. Test (UAT \u2013 User Acceptance Testing): ", bold: true },
        "sessioni di test con il coinvolgimento del personale di NOLOOP per la verifica della conformit\u00e0 delle soluzioni ai requisiti concordati;"
      ]),
      pMulti([
        { text: "e. Formazione e Go-live: ", bold: true },
        "addestramento del personale di NOLOOP e supporto operativo alla messa in esercizio della Piattaforma."
      ]),

      // ===== 5. CORRISPETTIVO =====
      articleHeading("5. CORRISPETTIVO"),

      pMulti([
        { text: "5.1 ", bold: true },
        "A titolo di corrispettivo per le attivit\u00e0 di sviluppo, consulenza e configurazione di cui al presente contratto, le Parti concordano un corrispettivo complessivo di ",
        { text: "euro 119.000,00 (centodiciannovemila/00) oltre IVA", bold: true },
        ", cos\u00ec composto:"
      ]),
      bullet("euro 100.000,00 oltre IVA per i requisiti base di cui agli artt. 3.1, 3.2, 3.3 e 3.4;"),
      bullet("euro 19.000,00 oltre IVA per i requisiti aggiuntivi di cui all\u2019art. 3.5."),

      p("Il corrispettivo verr\u00e0 pagato come segue:"),
      pMulti([
        { text: "a) ", bold: true },
        "quanto a euro 30.000,00 oltre IVA, all\u2019avvio dei lavori (GI\u00c0 SALDATA);"
      ]),
      pMulti([
        { text: "b) ", bold: true },
        "quanto a euro 44.500,00 oltre IVA (di cui euro 35.000,00 per requisiti base e euro 9.500,00 per requisiti aggiuntivi), all\u2019avvio della fase di test (GI\u00c0 SALDATA);"
      ]),
      pMulti([
        { text: "c) ", bold: true },
        "quanto a euro 44.500,00 oltre IVA (di cui euro 35.000,00 per requisiti base e euro 9.500,00 per requisiti aggiuntivi), alla consegna finale con esito positivo del test UAT."
      ]),

      pMulti([
        { text: "5.2 ", bold: true },
        "Relativamente ai seguenti servizi aggiuntivi (di cui all\u2019articolo 11 del presente contratto):"
      ]),
      pMulti([{ text: "a) Manutenzione evolutiva e straordinaria", bold: true }]),
      pMulti([{ text: "b) Assistenza per l\u2019utilizzo", bold: true }]),
      pMulti([{ text: "c) Aggiornamenti", bold: true }]),
      p("il corrispettivo sar\u00e0 determinato sulla base delle ore di lavoro effettivamente impiegate, nonch\u00e9 della seniority delle risorse messe a disposizione da HeyAI al momento dell\u2019erogazione."),
      p("In ogni caso, tale corrispettivo sar\u00e0 oggetto di preventiva negoziazione tra le Parti e dovr\u00e0 essere formalizzato mediante apposito accordo scritto."),

      // ===== 6. DURATA DEL CONTRATTO =====
      articleHeading("6. DURATA DEL CONTRATTO"),
      pMulti([
        { text: "6.1 ", bold: true },
        "Il presente contratto, bench\u00e9 sottoscritto in data odierna, ha efficacia retroattiva a decorrere dal ________ (data di effettivo inizio dei lavori) e rester\u00e0 valido fino al completamento delle attivit\u00e0 concordate, come descritto all\u2019art. 4. Le Parti riconoscono e ratificano tutte le attivit\u00e0 svolte dalla Consulente e i pagamenti effettuati da NOLOOP nel periodo intercorrente tra la data di inizio dei lavori e la data di sottoscrizione del presente contratto."
      ]),
      p("Tenuto conto della complessit\u00e0 tecnica delle attivit\u00e0 e del carattere innovativo del Progetto, le Parti convengono che la timeline di realizzazione \u00e8 articolata come segue: Fase 1 \u2013 Kick-off e Deep-Dive Tecnici (4 settimane), Fase 2 \u2013 Sviluppo e Rilasci Incrementali (16 settimane), Fase 3 \u2013 Test, Formazione e Go-live (2 settimane), per una durata complessiva di 22 settimane lavorative dalla data di inizio dei lavori."),

      pMulti([
        { text: "6.2 ", bold: true },
        "Ogni eventuale dilazione dei tempi di completamento, derivante da circostanze tecniche, esigenze di adattamento del sistema, richieste integrative di NOLOOP o mancata collaborazione di quest\u2019ultima, non potr\u00e0 essere considerata inadempimento da parte della Consulente, n\u00e9 comporter\u00e0 responsabilit\u00e0 alcuna, n\u00e9 applicazione di penalit\u00e0 o decadenze."
      ]),

      pMulti([
        { text: "6.3 ", bold: true },
        "Resta salva la possibilit\u00e0 per NOLOOP di richiedere, successivamente alla conclusione delle fasi di cui all\u2019art. 4, ulteriori interventi di aggiornamento, manutenzione o supporto, i quali formeranno oggetto di separati accordi, anche mediante semplice scambio di corrispondenza elettronica, senza che ci\u00f2 comporti proroga o rinnovo tacito del presente contratto."
      ]),

      // ===== 7. UAT =====
      new Paragraph({ children: [new PageBreak()] }),
      articleHeading("7. USER ACCEPTANCE TEST"),
      pMulti([
        { text: "7.1 ", bold: true },
        "Entro 3 (tre) giorni lavorativi dalla consegna dei Moduli di cui all\u2019art. 3, la Consulente invia a NOLOOP una \u201CComunicazione di Prontezza al Collaudo\u201D. NOLOOP dispone di 10 (dieci) giorni lavorativi per eseguire l\u2019UAT e trasmettere via PEC il \u201CVerbale di Collaudo\u201D. Il mancato invio del Verbale entro detto termine equivale ad accettazione tacita."
      ]),
      pMulti([
        { text: "7.2 ", bold: true },
        "Il Verbale conterr\u00e0:"
      ]),
      p("a) accettazione integrale; oppure"),
      p("b) elenco puntuale dei difetti riscontrati, con indicazione del requisito violato."),

      pMulti([{ text: "7.3 ", bold: true }, "Classi di difetto:"]),
      bulletMulti([{ text: "Bloccante: ", bold: true, italics: true }, "impedisce l\u2019uso della Soluzione;"]),
      bulletMulti([{ text: "Maggiore: ", bold: true, italics: true }, "compromette funzioni essenziali ma consente uso ridotto;"]),
      bulletMulti([{ text: "Minore: ", bold: true, italics: true }, "non incide sulle funzioni essenziali."]),

      pMulti([
        { text: "7.4 ", bold: true },
        "La Consulente elimina i difetti Bloccanti/Maggiori entro 15 giorni lavorativi e i difetti Minori entro 30 giorni, o li include in una patch cumulativa."
      ]),
      pMulti([
        { text: "7.5 ", bold: true },
        "All\u2019esito positivo dell\u2019UAT \u2013 o, in assenza di contestazioni, decorsi 10 giorni lavorativi dalla sua conclusione \u2013 NOLOOP versa il saldo di cui all\u2019art. 5.1 c) entro 10 giorni."
      ]),
      pMulti([
        { text: "7.6 ", bold: true },
        "Qualora, al termine delle attivit\u00e0 di sviluppo e configurazione dei Moduli, e a seguito dell\u2019esecuzione del test tecnico-funzionale (UAT) previsto per la verifica del corretto funzionamento delle soluzioni, sorgano contestazioni in merito alla conformit\u00e0 delle attivit\u00e0 svolte rispetto agli obiettivi contrattualmente previsti e le Parti non raggiungano un accordo entro 10 (dieci) giorni dalla conclusione del test medesimo, ciascuna Parte potr\u00e0 chiedere la nomina, di comune accordo, di un esperto indipendente scelto tra professionisti con competenze informatiche e tecniche adeguate al sistema in oggetto (in seguito anche l\u2019\u201CEsperto\u201D);"
      ]),
      pMulti([
        { text: "7.7 ", bold: true },
        "in difetto di accordo entro ulteriori 5 (cinque) giorni, l\u2019Esperto sar\u00e0 designato, su istanza della parte pi\u00f9 diligente, dal Presidente del Consiglio dell\u2019Ordine degli Ingegneri di Milano;"
      ]),
      pMulti([
        { text: "7.8 ", bold: true },
        "l\u2019Esperto operer\u00e0 in veste di amichevole compositore, con incarico di valutare se le attivit\u00e0 di sviluppo e configurazione siano conformi, in via sostanziale, agli obblighi assunti dalla Consulente. Il suo giudizio sar\u00e0 vincolante per le Parti, con efficacia di accertamento contrattualmente convenuta, salvo il ricorso per dolo, errore o violazione del contraddittorio;"
      ]),
      pMulti([
        { text: "7.9 ", bold: true },
        "qualora l\u2019Esperto accerti che uno o pi\u00f9 dei Moduli di cui all\u2019art. 3 non siano conformi, in tutto o in parte, alle prestazioni pattuite, la Consulente entro i successivi 30 (trenta) giorni dovr\u00e0 apportare i correttivi del caso per porre rimedio alle carenze rilevate;"
      ]),
      pMulti([
        { text: "7.10 ", bold: true },
        "qualora le carenze rilevate non siano state corrette nel termine suindicato e qualora l\u2019inefficienza non impedisca l\u2019utilizzo sostanziale del Progetto, NOLOOP potr\u00e0 chiedere una riduzione proporzionale del corrispettivo a saldo di cui all\u2019art. 5.1 c), con esclusione di ogni ulteriore diritto al risarcimento del danno;"
      ]),
      pMulti([
        { text: "7.11 ", bold: true },
        "in caso di superamento del test tecnico-funzionale, ovvero in caso di accertamento positivo da parte dell\u2019Esperto, NOLOOP sar\u00e0 tenuta al pagamento del saldo del corrispettivo concordato entro e non oltre 10 (dieci) giorni dalla comunicazione dell\u2019esito o dal ricevimento del relativo verbale."
      ]),
      pMulti([
        { text: "7.12 ", bold: true },
        "Le spese dell\u2019Esperto saranno anticipate in pari misura dalle Parti e poste definitivamente a carico della Parte soccombente secondo l\u2019esito della valutazione."
      ]),

      // ===== 8. RESPONSABILITÀ DI NOLOOP =====
      new Paragraph({ children: [new PageBreak()] }),
      articleHeading("8. RESPONSABILIT\u00c0 DI NOLOOP"),
      pMulti([
        { text: "8.1 ", bold: true },
        "NOLOOP, per consentire l\u2019esecuzione del presente contratto alla Consulente, dovr\u00e0 dotarsi di strumenti informatici idonei e sottoscrivere, a sua cura, costo e spese, le licenze di terzi sugli strumenti concordati dalle Parti per il funzionamento delle soluzioni condivise nell\u2019ambito del Progetto;"
      ]),
      pMulti([
        { text: "8.2 ", bold: true },
        "NOLOOP \u00e8 l\u2019unica responsabile della correttezza, liceit\u00e0, pertinenza e sicurezza dei dati immessi, trattati o caricati nei propri sistemi. La Consulente non conserva i dati inseriti da NOLOOP o dal suo personale nei sistemi; essa si limita alla raccolta, alla selezione, alla validazione dei dati per il tempo necessario al solo fine di sviluppare e testare il funzionamento del Progetto;"
      ]),
      pMulti([
        { text: "8.3 ", bold: true },
        "La Consulente, pertanto, non \u00e8 in alcun modo coinvolta in attivit\u00e0 di diffusione, salvataggio sui dispositivi personali o cancellazione dei dati che sono gestiti unicamente da NOLOOP."
      ]),
      p("La Consulente non assume, pertanto, alcuna responsabilit\u00e0 per i contenuti, i dati o le informazioni trattate mediante i sistemi di NOLOOP."),
      p("L\u2019utilizzo di tutti i software e delle tecnologie condivisi tra le Parti, a titolo esemplificativo piattaforme AI e sistemi di gestione dati, avviene sotto la piena ed esclusiva responsabilit\u00e0 di NOLOOP, nel rispetto dei termini e delle condizioni di servizio applicabili a ciascuna piattaforma e con esclusione di qualsivoglia responsabilit\u00e0 della Consulente per errori, indisponibilit\u00e0 del servizio, violazioni normative o trattamento non autorizzato di dati."),

      // ===== 9. RESPONSABILITÀ DELLA CONSULENTE =====
      articleHeading("9. RESPONSABILIT\u00c0 DELLA CONSULENTE"),
      pMulti([
        { text: "9.1 ", bold: true },
        "Le Parti riconoscono e accettano che la Consulente fornisce esclusivamente un servizio di sviluppo software e consulenza tecnologica, operando sulla base dei requisiti e delle finalit\u00e0 indicate da NOLOOP, la quale \u00e8 l\u2019unica responsabile della correttezza e legittimit\u00e0 dei dati personali raccolti, immessi, utilizzati e trattati nell\u2019ambito del Progetto;"
      ]),
      pMulti([
        { text: "9.2 ", bold: true },
        "la Consulente non garantisce la legalit\u00e0, la correttezza o affidabilit\u00e0 dei dati e dei contenuti trattati da NOLOOP, n\u00e9 l\u2019idoneit\u00e0 degli stessi per usi specifici diversi da quelli dichiarati nel presente contratto. Pertanto, la Consulente non assume alcuna responsabilit\u00e0 in merito all\u2019utilizzo dei dati da parte di NOLOOP e non risponde di eventuali violazioni del GDPR connesse all\u2019uso dei sistemi sviluppati nell\u2019ambito del Progetto."
      ]),

      // ===== 10. TRATTAMENTO DATI E GDPR =====
      new Paragraph({ children: [new PageBreak()] }),
      articleHeading("10. TRATTAMENTO DATI E GDPR"),
      pMulti([
        { text: "10.1 ", bold: true },
        "NOLOOP dichiara che:"
      ]),
      bullet("i Moduli sviluppati nell\u2019ambito del Progetto trattano dati personali di partecipanti agli eventi organizzati da NOLOOP (dati anagrafici, dati di viaggio, preferenze logistiche), dati aziendali interni di NOLOOP (dati economici, di budget e di allocazione risorse contenuti nel file \u201CProgress\u201D), nonch\u00e9 trascrizioni e contenuti delle riunioni interne;"),
      bullet("tali dati vengono raccolti, organizzati e strutturati dalla Piattaforma in formati funzionali alle esigenze operative di NOLOOP (database, dashboard, report), nel rispetto della normativa applicabile, con particolare riferimento al Regolamento (UE) 2016/679 (\u201CGDPR\u201D);"),
      bullet("con specifico riferimento ai dati dei partecipanti, NOLOOP si impegna a raccogliere tali dati previo rilascio di idonea informativa e, ove necessario, previo ottenimento del consenso degli interessati ai sensi degli artt. 13, 14 e 6 GDPR;"),
      bullet("NOLOOP esclude che i sistemi configurati nell\u2019ambito del Progetto vengano utilizzati per acquisire o trattare categorie particolari di dati ai sensi dell\u2019articolo 9 GDPR;"),

      pMulti([
        { text: "10.2 ", bold: true },
        "le Parti riconoscono che, nell\u2019ambito del presente contratto:"
      ]),
      bullet("NOLOOP agisce in qualit\u00e0 di Titolare del trattamento, ai sensi dell\u2019art. 4, par. 1, n. 7 del Reg. UE 2016/679 (GDPR), relativamente ai dati personali raccolti e trattati tramite i Moduli sviluppati nell\u2019ambito del Progetto;"),
      bullet("la Consulente agisce in qualit\u00e0 di Responsabile del trattamento ai sensi dell\u2019art. 28 GDPR, limitatamente alle attivit\u00e0 tecniche di sviluppo, configurazione e test dei Moduli;"),

      pMulti([
        { text: "10.3 ", bold: true },
        "NOLOOP riconosce di essere l\u2019unica responsabile della liceit\u00e0 del trattamento dei dati effettuato mediante l\u2019utilizzo della Piattaforma e si impegna a:"
      ]),
      bullet("fornire ai partecipanti agli eventi e ai propri dipendenti un\u2019adeguata informativa, chiarendo l\u2019origine dei dati e le finalit\u00e0 per cui vengono trattati, ai sensi degli articoli 13 e 14 GDPR;"),
      bullet("assumere ogni responsabilit\u00e0 riguardo all\u2019utilizzo delle informazioni raccolte e trattate tramite la Piattaforma;"),
      bullet("gestire sotto la propria responsabilit\u00e0 i software e gli strumenti che costituiscono le soluzioni sviluppate dalla Consulente, nel rispetto dei relativi termini di servizio e della normativa vigente;"),

      pMulti([
        { text: "10.4 ", bold: true },
        "la Consulente dichiara che:"
      ]),
      bullet("avr\u00e0 accesso ai dati personali trattati dalla Piattaforma limitatamente al perimetro di Progetto e per il tempo strettamente necessario alle attivit\u00e0 di sviluppo e test;"),
      bullet("non conserver\u00e0 n\u00e9 memorizzer\u00e0 in alcuna forma tali dati al termine delle attivit\u00e0;"),
      bullet("non effettuer\u00e0 ulteriori trattamenti dei dati, quali profilazioni o decisioni automatizzate;"),
      bullet("restituir\u00e0 o canceller\u00e0 integralmente ogni eventuale dato personale trattato per conto di NOLOOP."),

      // ===== 11. ULTERIORI PRESTAZIONI =====
      articleHeading("11. ULTERIORI PRESTAZIONI DELLA CONSULENTE"),
      pMulti([{ text: "11.1 Manutenzione:", bold: true }]),
      pMulti([
        { text: "(i) ", bold: true },
        "la Consulente durante i tre (3) mesi successivi al test UAT che determiner\u00e0 l\u2019inizio dell\u2019entrata in funzione del Progetto, garantir\u00e0 la manutenzione correttiva in caso di bug o malfunzionamenti bloccanti, senza costi aggiuntivi."
      ]),
      pMulti([
        { text: "(ii) ", bold: true },
        "Ogni intervento richiesto successivamente a tale periodo sar\u00e0 considerato: ",
        { text: "(a) ", bold: true },
        "manutenzione evolutiva, se diretto all\u2019introduzione di modifiche, ottimizzazioni o ampliamenti delle funzionalit\u00e0 esistenti dei Moduli, anche in ragione di esigenze sopravvenute di NOLOOP; ovvero ",
        { text: "(b) ", bold: true },
        "manutenzione straordinaria, se diretto a garantire la compatibilit\u00e0 dei Moduli con ambienti operativi, API o tool di terze parti modificati o dismessi successivamente alla consegna."
      ]),
      p("Gli interventi appena descritti dovranno essere oggetto di specifico accordo tra le Parti."),
      p("Resta escluso ogni obbligo della Consulente di intervenire in caso di malfunzionamenti riconducibili a modifiche non autorizzate, a utilizzi non conformi o a fattori esterni al Progetto;"),

      pMulti([{ text: "11.2 Assistenza per l\u2019utilizzo:", bold: true }]),
      pMulti([
        { text: "(i) ", bold: true },
        "durante i 3 (tre) mesi successivi al test UAT che determiner\u00e0 l\u2019inizio dell\u2019entrata in funzione del Progetto, la Consulente si impegner\u00e0 a fornire assistenza telefonica e a mezzo e-mail per la risoluzione di anomalie insorte nell\u2019utilizzo del Progetto. La Consulente far\u00e0 quanto ragionevolmente possibile al fine di prendere in carico quanto prima l\u2019anomalia segnalata, pur restando inteso che nessun termine pu\u00f2 essere preventivamente previsto per la conclusione dell\u2019attivit\u00e0. Il servizio di Assistenza per l\u2019Utilizzo comprende gli interventi per la gestione di problemi e difficolt\u00e0 riscontrate da NOLOOP nell\u2019utilizzo della Piattaforma, consistenti esclusivamente nell\u2019ambito delle funzionalit\u00e0 previste nell\u2019Allegato Tecnico e il loro funzionamento effettivo."
      ]),
      pMulti([
        { text: "(ii) ", bold: true },
        "Successivamente a tale periodo, eventuali richieste di assistenza dovranno essere oggetto di specifico accordo tra le Parti;"
      ]),

      pMulti([{ text: "11.3 Aggiornamenti:", bold: true }]),
      pMulti([
        { text: "(i) ", bold: true },
        "durante i 3 (tre) mesi successivi al test UAT che determiner\u00e0 l\u2019inizio dell\u2019entrata in funzione del Progetto, la Consulente si impegner\u00e0 a supportare NOLOOP nella gestione dell\u2019aggiornamento dei software che fanno parte del Progetto."
      ]),
      pMulti([
        { text: "(ii) ", bold: true },
        "Successivamente a tale periodo, eventuali richieste di assistenza dovranno essere oggetto di specifico accordo tra le Parti;"
      ]),

      pMulti([
        { text: "11.4 Change Request: ", bold: true },
        "eventuali richieste di modifica successive all\u2019approvazione dei requisiti iniziali dovranno essere concordate tra le parti e potranno essere oggetto di nuova offerta economica."
      ]),

      // ===== 12-18 (identici alla struttura originale) =====
      new Paragraph({ children: [new PageBreak()] }),
      articleHeading("12. DIVIETO DI CESSIONE DEL CONTRATTO"),
      p("Le Parti non potranno cedere o trasferire, neppure parzialmente, il presente contratto. In caso di cessione del contratto, o di diritti da esso nascenti, senza il preventivo consenso scritto dell\u2019altra parte, potr\u00e0 a suo insindacabile giudizio risolvere immediatamente il presente contratto con comunicazione scritta inviata via PEC."),

      articleHeading("13. COMUNICAZIONI TRA LE PARTI"),
      pMulti([
        { text: "13.1 Notifiche formali ", bold: true },
        "\u2013 Qualsiasi dichiarazione negoziale (recesso, risoluzione, contestazioni, modifiche) dovr\u00e0 essere trasmessa a mezzo PEC o Raccomandata A/R agli indirizzi indicati in epigrafe."
      ]),
      pMulti([
        { text: "13.2 Comunicazioni operative ", bold: true },
        "\u2013 Per esigenze di progetto le Parti potranno adoperare e-mail ordinarie. Il contenuto di tali e-mail diviene vincolante ai soli fini tecnico-organizzativi se non contestato via PEC entro 5 giorni lavorativi dal ricevimento."
      ]),
      pMulti([
        { text: "13.3 Escalation ", bold: true },
        "\u2013 In caso di dissenso su istruzioni operative, ciascuna Parte potr\u00e0 richiedere conferma via PEC; fino a tale conferma l\u2019attivit\u00e0 contestata resta sospesa senza penalit\u00e0."
      ]),
      emptyP(),
      pMulti([{ text: "Per HeyAI:", bold: true }]),
      p("PEC: heyai@pec.it"),
      p("E-mail: info@heyaidigital.it"),
      p("Via Parigi 11, 00185 Roma"),
      emptyP(),
      pMulti([{ text: "Per NOLOOP:", bold: true }]),
      p("PEC: noloopsrl@pec.noloop.eu"),
      p("E-mail: laura.zaghi@noloop.eu; antonella.osmetti@noloop.eu"),
      p("Via Palermo 8, 20121 Milano"),
      emptyP(),
      p("Tali comunicazioni dovranno essere sottoscritte dal legale rappresentante della Parte mittente, o da persona munita di idonei poteri di rappresentanza formalmente conferiti;"),

      articleHeading("14. MODIFICHE O VARIAZIONI AL CONTRATTO"),
      p("Nessuna rettifica, modifica o variazione del presente Contratto sar\u00e0 vincolante per le parti a meno che le medesime non vengano apportate con atto scritto e sottoscritto per conto di ciascuna di esse. Il presente Contratto sostituisce ed annulla ogni altro accordo o intesa, scritta o orale, relativo all\u2019oggetto del presente contratto."),

      articleHeading("15. RISERVATEZZA"),
      p("Le Parti riconoscono che tutte le informazioni, i dati, i documenti e, pi\u00f9 in generale, qualsiasi contenuto tecnico, organizzativo o commerciale acquisito nel corso dell\u2019esecuzione del presente Contratto costituisce informazione riservata."),
      p("Le Parti, inoltre, si impegnano a non divulgare, diffondere, comunicare o comunque rendere accessibili a terzi, senza espresso consenso scritto dell\u2019altra Parte, le informazioni di cui sopra, n\u00e9 a farne uso per finalit\u00e0 diverse da quelle strettamente connesse all\u2019esecuzione del presente contratto."),

      articleHeading("16. CAUSE DI \u201CFORZA MAGGIORE\u201D"),
      p("Nel presente Contratto, per \u201CForza maggiore\u201D si intende qualsiasi causa che si manifesti indipendentemente dal ragionevole controllo delle parti del presente Contratto, comprese, ma senza limitazione, l\u2019interruzione dei servizi Internet o telefonici, le sommosse, le rivolte, gli atti di terrorismo, le rivolte civili, le guerre (dichiarate o non dichiarate), gli scioperi ed altre agitazioni di lavoro, gli incendi, le alluvioni, i terremoti o qualsiasi ordine, decreto o direttiva dell\u2019Italia, sia promulgati nelle forme di legge che altrimenti."),
      p("Gli obblighi previsti a carico di ciascuna delle parti in virt\u00f9 del presente Contratto si intenderanno sospesi durante il periodo nel quale \u00e8 impedito o ostacolato il rispetto del presente Contratto a causa della \u201CForza maggiore\u201D. In tal caso, detta parte dar\u00e0 preavviso all\u2019altra indicando la data, la gravit\u00e0 di tale sospensione e la sua causa."),
      p("Qualsiasi parte i cui obblighi siano stati sospesi in ragione di quanto sopra detto, riprender\u00e0 l\u2019esecuzione non appena rimossa la causa e ne avviser\u00e0 contemporaneamente l\u2019altra parte."),

      articleHeading("17. FORO COMPETENTE"),
      p("Per ogni eventuale controversia relativa alla sua validit\u00e0, esistenza, efficacia, interpretazione, esecuzione e/o risoluzione, sar\u00e0 competente in via esclusiva il Tribunale di Milano."),

      articleHeading("18. NEGOZIAZIONE PUNTUALE"),
      p("Le Parti si danno reciprocamente atto di aver negoziato ogni singola clausola del presente contratto, su un piano di parit\u00e0 contrattuale, e che pertanto nessuna delle due pu\u00f2 considerarsi predisponente o aderente agli effetti di cui all\u2019art. 1341 cod. civ. e all\u2019art. 1342 cod. civ., con conseguente inapplicabilit\u00e0 delle norme medesime."),

      emptyP(),
      p("* * * * *", { center: true }),
      p("Letto, confermato e sottoscritto.", { spaceBefore: 200 }),

      emptyP(),
      p("Roma/Milano, ________"),
      emptyP(),
      emptyP(),

      // Signature block
      new Paragraph({
        spacing: { before: 200, after: 0 },
        children: [
          new TextRun({ text: "HeyAI S.r.l.", bold: true, size: SZ, font: FONT }),
          new TextRun({ text: "\t\t\t\t\t", size: SZ, font: FONT }),
          new TextRun({ text: "NOLOOP S.r.l.", bold: true, size: SZ, font: FONT }),
        ]
      }),
      new Paragraph({
        spacing: { before: 40, after: 0 },
        children: [
          new TextRun({ text: "L\u2019Amministratore Unico", size: SZ, font: FONT }),
          new TextRun({ text: "\t\t\t\t", size: SZ, font: FONT }),
          new TextRun({ text: "Il Legale Rappresentante", size: SZ, font: FONT }),
        ]
      }),
      new Paragraph({
        spacing: { before: 40, after: 0 },
        children: [
          new TextRun({ text: "Ing. Bruno Mattucci", size: SZ, font: FONT }),
          new TextRun({ text: "\t\t\t\t", size: SZ, font: FONT }),
          new TextRun({ text: "Donzelli Paolo", size: SZ, font: FONT }),
        ]
      }),
      emptyP(),
      emptyP(),
      p("____________________________\t\t\t____________________________"),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/home/claude/Contratto_Wave1_Ecosistema_AI_Noloop.docx", buffer);
  console.log("Contract created: " + buffer.length + " bytes");
});