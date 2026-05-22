const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle,
  ShadingType, Table, TableRow, TableCell, WidthType, Header, LevelFormat
} = require('docx');

// ---- BRAND HeyAI ----
const TEAL = "074F6A";
const NAVY = "1F3864";
const GRAY_TXT = "666666";
const LIGHT = "8C8C8C";
const ALT_BG = "F0F5F6";
const HEADER_BG = "074F6A";
const BODY = "Aptos";

const SIZE_BODY = 22;
const SIZE_TITLE = 36;
const SIZE_SUBTITLE = 20;
const SIZE_H1 = 28;
const SIZE_H2 = 24;
const SIZE_INTRO = 20;
const SIZE_TABLE = 20;
const SIZE_SMALL = 18;

const softBorder = { style: BorderStyle.SINGLE, size: 4, color: "CFD8DC" };
const cellBorders = { top: softBorder, bottom: softBorder, left: softBorder, right: softBorder };

const t = (text, opts = {}) => new TextRun({ text, font: BODY, ...opts });

const P = (text, opts = {}) =>
  new Paragraph({
    spacing: { before: 80, after: 80, line: 300 },
    children: [t(text, opts)],
    alignment: opts.align,
  });

const PIntro = (text) =>
  new Paragraph({
    spacing: { before: 60, after: 180, line: 290 },
    children: [t(text, { italics: true, color: GRAY_TXT, size: SIZE_INTRO })],
  });

const H1 = (text) =>
  new Paragraph({
    spacing: { before: 440, after: 140, line: 280 },
    children: [t(text, { bold: true, color: TEAL, size: SIZE_H1 })],
  });

const H2 = (text) =>
  new Paragraph({
    spacing: { before: 280, after: 100, line: 280 },
    children: [t(text, { bold: true, color: NAVY, size: SIZE_H2 })],
  });

const Bullet = (text, bold = null) => {
  const children = [];
  if (bold) {
    children.push(t(`${bold} `, { bold: true }));
  }
  children.push(t(text));
  return new Paragraph({
    spacing: { before: 40, after: 40, line: 280 },
    numbering: { reference: "bullets", level: 0 },
    children,
  });
};

const HeaderCell = (text, width) =>
  new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: HEADER_BG, type: ShadingType.CLEAR, color: "auto" },
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [
      new Paragraph({
        spacing: { before: 0, after: 0 },
        children: [t(text, { bold: true, color: "FFFFFF", size: SIZE_TABLE })],
      }),
    ],
  });

const DataCell = (text, width, opts = {}) =>
  new TableCell({
    borders: cellBorders,
    width: { size: width, type: WidthType.DXA },
    shading: opts.alt ? { fill: ALT_BG, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 100, bottom: 100, left: 140, right: 140 },
    children: [
      new Paragraph({
        spacing: { before: 0, after: 0 },
        children: [t(text || "", { bold: !!opts.bold, size: SIZE_TABLE, color: opts.color })],
      }),
    ],
  });

// ---- CONTENT ----
const children = [];

// ============ TITOLO ============
children.push(
  new Paragraph({
    spacing: { before: 200, after: 80 },
    children: [t("Brief Tecnico di Progetto", { bold: true, color: TEAL, size: SIZE_TITLE })],
  }),
  new Paragraph({
    spacing: { before: 0, after: 40 },
    children: [t("Piattaforma di ricerca automatizzata di opportunità pubbliche", { italics: true, color: GRAY_TXT, size: SIZE_SUBTITLE })],
  }),
  new Paragraph({
    spacing: { before: 0, after: 80 },
    children: [t("Cliente: Achipoint S.r.l.", { italics: true, color: GRAY_TXT, size: SIZE_SUBTITLE })],
  }),
  new Paragraph({
    spacing: { before: 0, after: 360 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: TEAL, space: 4 } },
    children: [t("Aprile 2026  |  Documento riservato — destinato al team di sviluppo", { italics: true, color: LIGHT, size: SIZE_SUBTITLE })],
  })
);

// ============ 1. EXECUTIVE SUMMARY ============
children.push(H1("1.  Executive Summary"));

children.push(P("Il presente documento definisce il perimetro di sviluppo della piattaforma di ricerca automatizzata di opportunità pubbliche commissionata da Achipoint, impresa romana attiva da 27 anni nel montaggio di ponteggi, opere provvisionali e servizi affini."));

children.push(P("L'obiettivo è attivare in modo strutturato un canale commerciale oggi non presidiato (gare e bandi pubblici), costruendo uno strumento che identifichi, qualifichi e ordini le opportunità rilevanti per il profilo del cliente."));

children.push(P("L'architettura si fonda su una singola integrazione dati primaria — la Banca Dati Nazionale dei Contratti Pubblici (BDNCP) di ANAC, accessibile via API ufficiali gratuite — che copre per obbligo di legge l'intero mercato pubblico italiano sopra 40.000 euro. Sopra questa base dati opera un layer di intelligenza artificiale per il matching semantico con il profilo Achipoint e un'interfaccia utente essenziale per consultazione e notifiche."));

children.push(P("Gran parte dei componenti AI (motore di scoring semantico, ingestion di dataset OCDS, interfaccia di interrogazione con memoria di contesto) sono già stati sviluppati nel contesto del progetto Osservatorio Strategico AI (FuturItaly) e risultano riutilizzabili con adattamenti mirati. Questo riduce significativamente il perimetro di sviluppo ex novo."));

children.push(P("Il progetto è strutturato in due fasi: un MVP che comprende raccolta, filtraggio e scoring (moduli A e B), e una Fase 2 evolutiva che comprende analisi dei capitolati e generazione assistita della documentazione di risposta (moduli C e D)."));

// ============ 2. CONTESTO CLIENTE ============
children.push(H1("2.  Contesto cliente e stato attuale"));

children.push(H2("2.1  Profilo aziendale"));

children.push(P("Achipoint S.r.l. è un'impresa romana con 27 anni di attività, 12 dipendenti e un fatturato annuo indicativo di 1,2-1,5 milioni di euro. L'attività principale è il montaggio, smontaggio, noleggio e vendita di ponteggi (telai misti tubi-giunti e multidirezionali), montacarichi, ponteggi autosollevanti bicolonna e monoblocchi/container. In espansione verso piccoli interventi di ristrutturazione, manutenzione e impiantistica."));

children.push(P("L'azienda opera principalmente nel Lazio con estensione su Abruzzo, Marche, Toscana ed Emilia Romagna. Non possiede attestazione SOA — opera quindi sotto la soglia dei 150.000 euro per i lavori pubblici. Possiede invece un insieme completo di qualificazioni adiacenti: certificazioni ISO 45001 e 14001, SA8000, modello organizzativo 231, iscrizione a White List antimafia, iscrizione all'Anagrafe degli Esecutori, iscrizione all'Albo Gestori Ambientali, Patente a Crediti."));

children.push(H2("2.2  Stato attuale del canale pubblico"));

children.push(P("Il cliente è attualmente iscritto a 17 portali e albi fornitori, la maggior parte dei quali pubbliche amministrazioni romane e laziali (tra gli altri: MEPA, Roma Capitale, Senato, SOGIN, EUR SpA, Zetema, Parco Archeologico del Colosseo, Sovrintendenza Speciale di Roma, ANAS, ADR, Vaticano, Portale Stella)."));

children.push(P("Il dato operativo più rilevante è che nessuno di questi 17 portali sta generando segnalazioni significative. Il cliente ha dichiarato di non dedicare tempo strutturato allo scouting: le iscrizioni agli albi (dalle 2 alle 8 ore ciascuna) sono state completate nel tempo ma non sono seguite da un presidio attivo. Negli ultimi 12-24 mesi il cliente ha partecipato a una sola gara pubblica (Azienda Ospedaliera San Giovanni Addolorata)."));

children.push(P("Si tratta quindi di un canale sostanzialmente dormiente, non di un canale attivo da efficientare. Lo strumento deve attivarlo, non ottimizzarlo."));

// ============ 3. OBIETTIVO ============
children.push(H1("3.  Obiettivo e proposta di valore"));

children.push(P("L'obiettivo funzionale è costruire uno strumento che permetta al cliente di intercettare quotidianamente le opportunità pubbliche italiane compatibili con il proprio profilo di servizi, qualificazioni e geografia di interesse, senza richiedere allo stesso di monitorare manualmente portali e albi."));

children.push(P("La proposta di valore della soluzione si articola su tre dimensioni:"));

children.push(Bullet("copertura: accesso all'intero mercato pubblico italiano (decine di migliaia di stazioni appaltanti), non limitato ai 17 portali che il cliente presidia oggi;", "Copertura —"));
children.push(Bullet("curation: presentazione al cliente solo delle opportunità realmente in linea con il suo profilo, con un punteggio di compatibilità e una motivazione;", "Curation —"));
children.push(Bullet("operatività: notifiche quotidiane o settimanali, interfaccia consultabile, integrazione con la documentazione aziendale già posseduta per le fasi evolutive.", "Operatività —"));

children.push(P("Si segnala per contesto che sul mercato esistono servizi SaaS commerciali orientati alla sola raccolta e notifica di bandi (Telemat, InfoAppalti, Banchedati.biz) con abbonamenti indicativi sotto i 2.000 euro annui. Il differenziatore della soluzione richiesta ad Achipoint non risiede nella raccolta dati — commodity disponibile anche altrove — bensì nella componente di intelligenza artificiale per il matching sul profilo del cliente e, nella Fase 2, nella generazione automatica della documentazione di risposta."));

// ============ 4. ARCHITETTURA ============
children.push(H1("4.  Architettura della soluzione"));

children.push(P("L'architettura proposta è lineare e composta da tre strati funzionali:"));

children.push(H2("4.1  Strato di ingestion dati"));
children.push(P("Integrazione singola con la BDNCP di ANAC tramite le API pubbliche documentate dell'endpoint OCDS (dati.anticorruzione.it/opendata/ocds_it) e degli ulteriori dataset aperti pubblicati da ANAC. Polling giornaliero con logica di incrementale, normalizzazione dei record in un modello dati interno, persistenza su database relazionale."));

children.push(H2("4.2  Strato di intelligenza artificiale"));
children.push(P("Motore di matching semantico tra il contenuto di ciascun bando (oggetto, capitolato, CPV, categoria) e il profilo Achipoint definito come prompt di sistema strutturato più knowledge base aziendale. Il motore produce per ogni bando uno score di compatibilità e una motivazione testuale. Si utilizzano API LLM (pattern analogo a Osservatorio AI FuturItaly, per il quale il prompt di matching e il flusso di scoring sono già sviluppati)."));

children.push(H2("4.3  Strato applicativo"));
children.push(P("Frontend web essenziale con autenticazione utente, lista delle opportunità ordinate per score, dettaglio bando, filtri, notifiche email automatiche (daily digest) configurabili. Non è prevista app mobile né integrazione con messaggistica nell'MVP."));

children.push(H2("4.4  Infrastruttura"));
children.push(P("Hosting su infrastruttura cloud del cliente. Requisiti minimi: un container applicativo per backend, un database relazionale, un servizio di scheduling per i job di ingestion. Stack libero, con la raccomandazione di mantenere coerenza con quello adottato in Osservatorio AI per massimizzare il riuso di componenti."));

// ============ 5. PERIMETRO MVP ============
children.push(H1("5.  Perimetro MVP — moduli A e B"));

children.push(PIntro("L'MVP comprende i due moduli fondamentali per rendere lo strumento operativo fin dal primo rilascio: raccolta e filtraggio intelligente. Moduli aggiuntivi in Fase 2."));

children.push(H2("5.1  Modulo A — Raccolta e aggregazione"));

children.push(Bullet("integrazione BDNCP via API ufficiali ANAC (OCDS + dataset aperti), polling giornaliero, normalizzazione e persistenza;"));
children.push(Bullet("gestione incrementale per evitare rielaborazioni complete (chiavi di deduplicazione basate su CIG);"));
children.push(Bullet("copertura automatica dell'intero mercato pubblico italiano (oltre 13 dei 17 portali oggi monitorati manualmente dal cliente, più tutte le stazioni appaltanti non presidiate);"));
children.push(Bullet("monitoraggio della qualità dell'ingestion (alert su eventuali interruzioni API, log di errori, metriche di volume)."));

children.push(H2("5.2  Modulo B — Filtraggio e scoring di compatibilità"));

children.push(Bullet("definizione del profilo aziendale Achipoint come documento strutturato (servizi, qualificazioni, geografia, parole chiave, esclusioni);"));
children.push(Bullet("pre-filtri deterministici: soglia economica configurabile (default 40.000-2.000.000 euro), categorie merceologiche CPV rilevanti, geografia preferenziale;"));
children.push(Bullet("filtro di esclusione rigida basato sulle qualificazioni possedute: i bandi che richiedono categorie SOA non possedute dal cliente vengono esclusi a monte;"));
children.push(Bullet("scoring semantico AI sul contenuto del bando con score 0-100 e motivazione testuale;"));
children.push(Bullet("configurabilità dei parametri da interfaccia (il cliente può modificare parole chiave, soglie, geografie nel tempo senza intervento tecnico)."));

children.push(H2("5.3  Esperienza utente MVP"));

children.push(Bullet("dashboard web con elenco opportunità ordinate per score, con filtri e ricerca;"));
children.push(Bullet("pagina di dettaglio per ciascun bando con informazioni chiave, motivazione dello score, link alla fonte ufficiale;"));
children.push(Bullet("notifica email giornaliera o settimanale (configurabile) con le nuove opportunità sopra una soglia di score;"));
children.push(Bullet("gestione di 3-5 utenti aziendali (il cliente ha 12 dipendenti complessivi, con nucleo operativo ristretto)."));

// ============ 6. FASE 2 ============
children.push(H1("6.  Perimetro Fase 2 — moduli C e D"));

children.push(PIntro("Moduli evolutivi da attivare dopo l'MVP, previa validazione del valore generato e feedback dell'utilizzo reale. Quotati separatamente."));

children.push(H2("6.1  Modulo C — Analisi automatica dei capitolati"));
children.push(P("Per ogni bando ritenuto interessante, estrazione automatica dei requisiti di partecipazione (qualificazioni richieste, requisiti tecnico-economici, termini di presentazione, criteri di aggiudicazione) e produzione di una scheda sintetica operativa. Chat con memoria aziendale per interrogare i documenti del bando ed ottenere risposte contestualizzate al profilo di Achipoint."));

children.push(H2("6.2  Modulo D — Generazione assistita della documentazione"));
children.push(P("A partire da modelli documentali aziendali esistenti e dalle informazioni estratte dal capitolato, generazione di bozze di risposta al bando: anagrafica, dichiarazioni, relazione tecnica, elementi base dell'offerta. Obiettivo: ridurre drasticamente il tempo di preparazione di una partecipazione, oggi stimato tra 4 e 16 ore per bando."));

children.push(H2("6.3  Moduli integrativi di Fase 2"));
children.push(P("Come approfondimenti aggiuntivi si segnalano (da attivare solo su richiesta esplicita del cliente dopo esperienza d'uso dell'MVP):"));
children.push(Bullet("integrazione con ADR (Aeroporti di Roma) tramite scraping autenticato del portale i-Faber — unico portale proprietario rilevante per l'operatività del cliente sulla piazza romana, non coperto da BDNCP nella parte inviti diretti;"));
children.push(Bullet("eventuali ulteriori portali proprietari di grandi committenti (ANAS portale proprio, Portale Stella, Autostrade per l'Italia, Terna) sulla stessa architettura tecnica replicabile;"));
children.push(Bullet("monitoring TED (Tenders Electronic Daily) per l'apertura al mercato europeo;"));
children.push(Bullet("integrazione con Incentivi.gov.it per la copertura della finanza agevolata collegata a interventi edilizi."));

// ============ 7. FONTI DATI ============
children.push(H1("7.  Fonti dati — strategia di integrazione"));

children.push(P("La strategia di integrazione è stata costruita dopo una mappatura puntuale dei 17 portali a cui il cliente è oggi iscritto e dell'universo delle fonti pubbliche italiane. Si riporta di seguito la classificazione."));

children.push(H2("7.1  Copertura tramite BDNCP/ANAC"));
children.push(P("Dal 2024 il Codice dei Contratti Pubblici (D.Lgs. 36/2023, art. 23) impone a tutte le pubbliche amministrazioni e società a controllo pubblico di trasmettere a BDNCP i dati relativi a ogni contratto sopra 40.000 euro. ANAC espone questi dati via API pubbliche in formato Open Contracting Data Standard (OCDS)."));

children.push(P("Dei 17 portali dichiarati dal cliente, la seguente quota risulta pienamente coperta da BDNCP:"));

const port_w = [3800, 2000, 3838];
children.push(new Table({
  width: { size: 9638, type: WidthType.DXA },
  columnWidths: port_w,
  rows: [
    new TableRow({
      tableHeader: true,
      children: [
        HeaderCell("Portale / albo del cliente", port_w[0]),
        HeaderCell("Copertura BDNCP", port_w[1]),
        HeaderCell("Note", port_w[2]),
      ],
    }),
    new TableRow({ children: [DataCell("ANAC", port_w[0]), DataCell("Completa", port_w[1], { color: "2E7D32" }), DataCell("È la fonte primaria stessa", port_w[2])] }),
    new TableRow({ children: [DataCell("MEPA", port_w[0], { alt: true }), DataCell("Completa", port_w[1], { alt: true, color: "2E7D32" }), DataCell("Obbligo BDNCP per tutti i lavori sopra 40K", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("Roma Capitale", port_w[0]), DataCell("Completa", port_w[1], { color: "2E7D32" }), DataCell("PA locale su BDNCP", port_w[2])] }),
    new TableRow({ children: [DataCell("Senato", port_w[0], { alt: true }), DataCell("Completa", port_w[1], { alt: true, color: "2E7D32" }), DataCell("PA centrale su BDNCP", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("SOGIN", port_w[0]), DataCell("Completa", port_w[1], { color: "2E7D32" }), DataCell("Società pubblica su BDNCP", port_w[2])] }),
    new TableRow({ children: [DataCell("EUR SpA", port_w[0], { alt: true }), DataCell("Completa", port_w[1], { alt: true, color: "2E7D32" }), DataCell("Partecipata pubblica su BDNCP", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("Zetema", port_w[0]), DataCell("Completa", port_w[1], { color: "2E7D32" }), DataCell("Partecipata comunale su BDNCP", port_w[2])] }),
    new TableRow({ children: [DataCell("Parco Archeologico del Colosseo", port_w[0], { alt: true }), DataCell("Completa", port_w[1], { alt: true, color: "2E7D32" }), DataCell("Istituto MIC su BDNCP", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("Sovrintendenza Speciale Roma", port_w[0]), DataCell("Completa", port_w[1], { color: "2E7D32" }), DataCell("Istituto MIC su BDNCP", port_w[2])] }),
    new TableRow({ children: [DataCell("Sinesgy", port_w[0], { alt: true }), DataCell("Completa", port_w[1], { alt: true, color: "2E7D32" }), DataCell("Soggetto pubblico su BDNCP", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("ANAS", port_w[0]), DataCell("Parziale", port_w[1], { color: "EF6C00" }), DataCell("Gare pubbliche su BDNCP; inviti da albo sul portale proprio", port_w[2])] }),
    new TableRow({ children: [DataCell("ADR (Aeroporti di Roma)", port_w[0], { alt: true }), DataCell("Parziale", port_w[1], { alt: true, color: "EF6C00" }), DataCell("Gare sopra soglia UE su BDNCP; inviti da albo sul portale i-Faber proprietario", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("Portale Stella", port_w[0]), DataCell("Parziale", port_w[1], { color: "EF6C00" }), DataCell("Ex Poste / Gruppo FS; inviti da albo sul portale proprio", port_w[2])] }),
    new TableRow({ children: [DataCell("Gruppo ICM", port_w[0], { alt: true }), DataCell("Non coperto", port_w[1], { alt: true, color: "C62828" }), DataCell("Committente privato, portale proprio", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("Vaticano", port_w[0]), DataCell("Non coperto", port_w[1], { color: "C62828" }), DataCell("Stato estero, fuori perimetro BDNCP", port_w[2])] }),
    new TableRow({ children: [DataCell("Assoponteggi", port_w[0], { alt: true }), DataCell("Non pertinente", port_w[1], { alt: true, color: "757575" }), DataCell("Associazione di categoria, non stazione appaltante", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("CCC (Consorzio Cooperative Costruzioni)", port_w[0]), DataCell("Non pertinente", port_w[1], { color: "757575" }), DataCell("Consorzio privato, non stazione appaltante", port_w[2])] }),
  ],
}));

children.push(H2("7.2  Estensione del perimetro oltre i 17 portali"));

children.push(P("Il valore dell'integrazione BDNCP va ben oltre la sostituzione dei 17 portali noti al cliente. BDNCP contiene per obbligo di legge i bandi di tutte le stazioni appaltanti italiane: oltre 30.000 enti tra Ministeri, Regioni, Province, Comuni, Aziende Sanitarie, Università, Centrali di Committenza (Invitalia, Intercent-ER, Regione Lazio Direzione Centrale Acquisti, Consip), fondazioni pubbliche, autorità portuali, Camere di Commercio, enti partecipati."));

children.push(P("In pratica, Achipoint passa dal presidio manuale e discontinuo di 17 fonti alla copertura automatica e filtrata dell'intero universo pubblico italiano, senza richiedere ulteriori iscrizioni né credenziali aggiuntive."));

children.push(H2("7.3  Integrazioni proprietarie non incluse in MVP"));

children.push(P("Sono escluse dal perimetro MVP le integrazioni con portali proprietari di grandi committenti (ADR, ANAS portale proprio, Portale Stella, Autostrade per l'Italia, Terna, ICM, Vaticano). Queste fonti veicolano inviti diretti da albo fornitori che non transitano da BDNCP: richiederebbero scraping autenticato con manutenzione continuativa e presentano rischio di fragilità (modifiche UI, rotazione credenziali, policy anti-bot). ADR è il candidato naturale per un primo ampliamento in Fase 2, data la rilevanza strategica del cliente sulla piazza romana."));

children.push(H2("7.4  Fonti escluse per natura"));
children.push(P("Le associazioni e i consorzi (Assoponteggi, CCC) non sono stazioni appaltanti: non pubblicano bandi propri ma occasionalmente inoltrano segnalazioni via newsletter. Il monitoring di queste fonti è escluso dall'automazione (scarso ROI, canali instabili) e rimane a cura del cliente."));

// ============ 8. REGOLE DI BUSINESS ============
children.push(H1("8.  Regole di business"));

children.push(H2("8.1  Profilo Achipoint (input al motore di matching)"));
children.push(Bullet("attività principale: ponteggi (telai misti tubi-giunti, multidirezionali), montacarichi, ponteggi autosollevanti bicolonna, monoblocchi/container;"));
children.push(Bullet("in espansione: ristrutturazioni leggere, manutenzione, piccoli interventi impiantistici;"));
children.push(Bullet("escluso: edilizia in calcestruzzo e cemento armato;"));
children.push(Bullet("parole chiave rilevanti: ponteggi, opere strutturali, montacarichi, autosollevanti, bicolonne, monoblocchi, container, opere provvisionali;"));
children.push(Bullet("geografia preferenziale: Lazio, Abruzzo, Marche, Toscana, Emilia Romagna; copertura nazionale accettata;"));
children.push(Bullet("soglia economica di interesse: dichiarato interesse ampio; default sistema 40.000-2.000.000 euro (copre sotto-soglia affidamento diretto fino a rilevanza europea)."));

children.push(H2("8.2  Qualificazioni come filtro di esclusione"));
children.push(P("Le qualificazioni del cliente vengono utilizzate per escludere automaticamente i bandi che richiedono requisiti non posseduti. Achipoint NON possiede attestazione SOA: tutti i bandi che richiedono SOA (tipicamente lavori sopra 150.000 euro) vengono esclusi a monte, a meno di esplicita override configurabile."));

children.push(P("Qualificazioni possedute (utilizzate come elemento di conformità, non di scoring positivo):"));
children.push(Bullet("ISO 45001, ISO 14001, SA8000;"));
children.push(Bullet("modello organizzativo 231;"));
children.push(Bullet("iscrizione White List antimafia;"));
children.push(Bullet("iscrizione Anagrafe degli Esecutori;"));
children.push(Bullet("iscrizione Albo Gestori Ambientali;"));
children.push(Bullet("Patente a Crediti."));

children.push(H2("8.3  Logica di scoring"));
children.push(P("Per ogni bando non escluso dai filtri deterministici, il motore AI produce uno score 0-100 basato su:"));
children.push(Bullet("coerenza semantica con l'attività principale e le parole chiave rilevanti (peso maggiore);"));
children.push(Bullet("fit geografico rispetto alle regioni preferenziali;"));
children.push(Bullet("coerenza dell'importo con la soglia di interesse dichiarata;"));
children.push(Bullet("presenza di segnali espliciti di opere affini (restauro, manutenzione edifici pubblici, scuole, ospedali, monumenti, infrastrutture viabilistiche);"));
children.push(Bullet("ogni score è accompagnato da una motivazione testuale sintetica generata dal modello."));

// ============ 9. NFR ============
children.push(H1("9.  Requisiti non funzionali"));

children.push(Bullet("tempi di aggiornamento: polling BDNCP quotidiano, con finestra di notifica entro le 24 ore dalla pubblicazione di un nuovo bando;"));
children.push(Bullet("volumi previsti: l'ingestion quotidiana da BDNCP coinvolge tutti i CIG emessi a livello nazionale (ordine di grandezza migliaia al giorno), il filtraggio riduce al cliente una selezione di 0-50 opportunità al mese in target;"));
children.push(Bullet("utenti concorrenti: 3-5 utenti aziendali, carico applicativo contenuto;"));
children.push(Bullet("sicurezza: autenticazione utente standard, crittografia dati a riposo e in transito, log di accesso;"));
children.push(Bullet("conformità: GDPR per il trattamento dei dati degli utenti aziendali; i dati BDNCP sono pubblici e rilasciati in licenza aperta (CC-BY 4.0);"));
children.push(Bullet("manutenibilità: l'unica dipendenza esterna critica è l'API ANAC, stabile e documentata dalla PA; nessuno scraping autenticato nell'MVP."));

// ============ 10. RIUSO DA FUTURITALY ============
children.push(H1("10.  Riuso da Osservatorio Strategico AI (FuturItaly)"));

children.push(P("Il pattern tecnico-architetturale qui descritto ricalca da vicino quello dell'Osservatorio Strategico AI, sviluppato per FuturItaly. Si segnalano i componenti direttamente riutilizzabili o adattabili con minimo sforzo:"));

children.push(Bullet("parser dei dataset OCDS di ANAC e relativo modello dati interno;"));
children.push(Bullet("motore di scoring semantico con LLM e prompt di sistema strutturato sul profilo cliente;"));
children.push(Bullet("architettura a matrice multi-dimensionale per il punteggio (in FuturItaly erano sei dimensioni — allineamento tematico, fit finanziario, requisiti consortili, maturità tecnologica, criteri di esclusione, timeline — qui si semplificano sulle dimensioni rilevanti per l'edilizia);"));
children.push(Bullet("pattern di ingestion incrementale e deduplicazione su chiave univoca;"));
children.push(Bullet("schema di notifiche email configurabili (daily digest) già implementato;"));
children.push(Bullet("impostazione della dashboard di consultazione con filtri e dettaglio bando."));

children.push(P("Rispetto a FuturItaly, la soluzione Achipoint non richiede lo sviluppo di componenti di ricerca in fonti europee (TED) né di fonti di finanza agevolata (Incentivi.gov.it): il perimetro dati è nazionale e più ristretto. Il profilo cliente e le regole di business vanno riadattati al settore edilizia-ponteggi, ma la struttura è analoga."));

// ============ 11. DELIVERABLE ============
children.push(H1("11.  Deliverable richiesti"));

children.push(P("Per la quotazione si richiedono due stime distinte e separate:"));

children.push(H2("11.1  Stima per MVP (moduli A + B)"));
children.push(Bullet("giornate di sviluppo totali e ripartizione per profilo professionale;"));
children.push(Bullet("durata del progetto dalla firma alla consegna (settimane);"));
children.push(Bullet("assunzioni tecniche principali (stack proposto, infrastruttura, librerie);"));
children.push(Bullet("rischi tecnici identificati e strategie di mitigazione;"));
children.push(Bullet("elenco puntuale dei componenti riusati da Osservatorio AI e dei componenti sviluppati ex novo;"));
children.push(Bullet("stima dei costi ricorrenti (licenze LLM, hosting client-side escluso)."));

children.push(H2("11.2  Stima per Fase 2 (moduli C + D)"));
children.push(Bullet("giornate e tempi per il modulo C (analisi capitolati, chat con memoria aziendale);"));
children.push(Bullet("giornate e tempi per il modulo D (generazione documentazione);"));
children.push(Bullet("giornate per una prima integrazione proprietaria ADR come test del pattern di scraping autenticato;"));
children.push(Bullet("stime indicative per integrazioni proprietarie aggiuntive replicabili sul medesimo pattern (ANAS proprio, Portale Stella, Autostrade per l'Italia), TED europeo, Incentivi.gov.it."));

children.push(H2("11.3  Formato della risposta"));
children.push(P("Si preferisce risposta in formato tabellare sintetico per voce di costo, accompagnata da una breve nota di assunzioni e una valutazione dei rischi. Non sono richiesti documenti estesi: lo scopo è confrontare le stime e consolidare la proposta commerciale al cliente. Il contenuto di questo brief è da considerarsi riservato e non condivisibile con terzi."));

// ============ CHIUSURA ============
children.push(
  new Paragraph({
    spacing: { before: 480, after: 120 },
    border: { top: { style: BorderStyle.SINGLE, size: 8, color: TEAL, space: 8 } },
    children: [t("")],
  }),
  new Paragraph({
    spacing: { before: 60, after: 0, line: 300 },
    children: [t("Per qualsiasi chiarimento sul perimetro o sulle regole di business si resta a disposizione. Per domande sul profilo cliente o sul contesto commerciale fare riferimento direttamente a Carlo Sanvoisin.", { italics: true })],
  })
);

// ---- HEADER ----
const pageHeader = new Header({
  children: [
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [t("HeyAI S.r.l.", { bold: true, color: GRAY_TXT, size: SIZE_SUBTITLE })],
    }),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [t("Sede legale: Via Parigi 11, 00185 Roma (RM)", { color: GRAY_TXT, size: SIZE_SMALL })],
    }),
    new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 0, after: 0 },
      children: [t("info@heyaidigital.it  |  www.heyaidigital.it", { color: GRAY_TXT, size: SIZE_SMALL })],
    }),
    new Paragraph({
      spacing: { before: 60, after: 0 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 1 } },
      children: [t("")],
    }),
  ],
});

// ---- DOCUMENT ----
const doc = new Document({
  creator: "HeyAI S.r.l.",
  title: "Brief Tecnico Achipoint — Piattaforma opportunità pubbliche",
  description: "Brief tecnico di progetto per sviluppatori",
  styles: {
    default: { document: { run: { font: BODY, size: SIZE_BODY } } },
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
          style: { paragraph: { indent: { left: 540, hanging: 270 } } },
        }],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1600, right: 1134, bottom: 1200, left: 1134 },
        },
      },
      headers: { default: pageHeader },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  const out = "/home/claude/HeyAI_Achipoint_Brief_Sviluppatori.docx";
  fs.writeFileSync(out, buf);
  console.log("OK ->", out);
});