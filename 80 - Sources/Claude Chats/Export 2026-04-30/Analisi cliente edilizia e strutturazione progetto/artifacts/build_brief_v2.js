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

children.push(P("Il presente documento definisce il perimetro del progetto di sviluppo della piattaforma di ricerca automatizzata di opportunità pubbliche commissionata da Achipoint, impresa romana con 27 anni di attività nel montaggio di ponteggi, opere provvisionali e servizi affini."));

children.push(P("L'obiettivo funzionale è fornire uno strumento che identifichi, qualifichi e ordini per rilevanza le gare e i bandi pubblici italiani compatibili con il profilo del cliente, attivando in modo strutturato un canale commerciale che oggi il cliente presidia solo in modo discontinuo."));

children.push(P("La soluzione si fonda su una singola integrazione dati primaria — la Banca Dati Nazionale dei Contratti Pubblici (BDNCP) di ANAC, accessibile via API ufficiali gratuite e documentate — che per obbligo di legge dal 2024 contiene tutti i contratti pubblici italiani sopra 40.000 euro, di qualsiasi stazione appaltante. Sopra questa base dati opera un motore di intelligenza artificiale per il matching semantico con il profilo Achipoint e un'interfaccia web per la consultazione."));

children.push(P("Il progetto è articolato in due fasi: un MVP comprendente i moduli di raccolta e filtraggio intelligente (A e B), e una Fase 2 evolutiva comprendente l'analisi dei capitolati e la generazione assistita della documentazione di risposta (C e D)."));

children.push(P("Il team di sviluppo che riceve il presente brief è lo stesso a cui sarà affidato un secondo progetto di ricerca opportunità pubbliche per un altro cliente di HeyAI, con caratteristiche architetturali affini. Alcuni componenti — in particolare l'ingestion dei dati BDNCP e l'infrastruttura del motore di scoring — saranno comuni ai due progetti e andranno progettati per essere condivisi, evitando duplicazioni."));

// ============ 2. CONTESTO CLIENTE ============
children.push(H1("2.  Contesto cliente"));

children.push(P("Achipoint è un'impresa di costruzioni romana attiva dal 1999. L'attività principale consiste nel montaggio, smontaggio, noleggio e vendita di ponteggi (telai misti tubi-giunti e multidirezionali), montacarichi, ponteggi autosollevanti bicolonna e monoblocchi/container. In espansione verso piccoli interventi di ristrutturazione, manutenzione e impiantistica. Esclusa l'edilizia in calcestruzzo e cemento armato."));

children.push(P("L'area operativa è principalmente il Lazio, con estensione su Abruzzo, Marche, Toscana ed Emilia Romagna, e possibilità di copertura nazionale per commesse interessanti."));

children.push(H2("2.1  Qualificazioni e certificazioni attive"));

children.push(P("Il cliente possiede le seguenti qualificazioni, tutte utilizzate nel filtro di ammissibilità della soluzione:"));

children.push(Bullet("nessuna attestazione SOA (il cliente opera sotto soglia 150.000 euro per i lavori pubblici);"));
children.push(Bullet("certificazioni ISO 45001, ISO 14001, SA8000;"));
children.push(Bullet("modello organizzativo 231;"));
children.push(Bullet("iscrizione White List antimafia;"));
children.push(Bullet("iscrizione Anagrafe degli Esecutori;"));
children.push(Bullet("iscrizione Albo Gestori Ambientali;"));
children.push(Bullet("Patente a Crediti."));

children.push(H2("2.2  Stato attuale del canale pubblico"));

children.push(P("Il cliente è attualmente iscritto a 17 portali e albi fornitori — prevalentemente pubbliche amministrazioni romane e laziali — ma non dedica tempo strutturato allo scouting. Nessuno di questi portali sta attualmente generando segnalazioni rilevanti; il cliente è consapevole del fatto che molte opportunità passano da canali che non riesce a presidiare con le proprie risorse interne."));

children.push(P("La soluzione richiesta deve dunque abilitare un nuovo processo, non efficientarne uno esistente."));

// ============ 3. OBIETTIVO ============
children.push(H1("3.  Obiettivo e proposta di valore"));

children.push(P("L'obiettivo funzionale è costruire uno strumento che permetta al cliente di intercettare con continuità le opportunità pubbliche italiane compatibili con il proprio profilo di servizi, qualificazioni e geografia, senza richiedergli di monitorare manualmente portali e albi."));

children.push(P("La soluzione deve offrire:"));

children.push(Bullet("copertura ampia: accesso all'intero mercato pubblico italiano, non limitato ai 17 portali che il cliente presidia oggi;", "Copertura —"));
children.push(Bullet("selezione qualitativa: presentazione al cliente solo delle opportunità realmente in linea con il suo profilo, con un punteggio di compatibilità e una motivazione chiara;", "Selezione —"));
children.push(Bullet("operatività semplice: interfaccia consultabile in autonomia, filtri e ricerca, integrazione con la documentazione aziendale nelle fasi evolutive.", "Operatività —"));

// ============ 4. ARCHITETTURA ============
children.push(H1("4.  Architettura funzionale della soluzione"));

children.push(P("La soluzione è composta da tre blocchi funzionali. Le scelte tecnologiche specifiche di implementazione (stack, librerie, infrastruttura runtime) sono lasciate alla valutazione del team di sviluppo, con il vincolo di coerenza tecnica con il progetto parallelo menzionato nell'Executive Summary."));

children.push(H2("4.1  Blocco di raccolta dati"));
children.push(P("Integrazione con la fonte pubblica ufficiale BDNCP di ANAC tramite le API e i dataset aperti che ANAC rende disponibili. La raccolta deve garantire aggiornamento giornaliero dei bandi disponibili e evitare la duplicazione dei record tra un'esecuzione e l'altra."));

children.push(H2("4.2  Blocco di intelligenza artificiale"));
children.push(P("Motore di matching semantico che, per ciascun bando raccolto, produce:"));
children.push(Bullet("uno score di compatibilità 0-100 rispetto al profilo aziendale configurato;"));
children.push(Bullet("una motivazione testuale sintetica del punteggio assegnato."));
children.push(P("Il profilo aziendale è definito come un documento strutturato modificabile dall'utente finale (servizi, parole chiave, qualificazioni, geografia, soglie, esclusioni)."));

children.push(H2("4.3  Blocco applicativo"));
children.push(P("Interfaccia web con autenticazione utente, destinata a un nucleo ristretto di utilizzatori aziendali (indicativamente 3-5 persone). Le funzionalità minime sono dettagliate nella sezione 5."));

children.push(H2("4.4  Infrastruttura"));
children.push(P("Hosting su infrastruttura del cliente. La configurazione di dettaglio (dimensionamento, componenti, pipeline di deploy) è da proporre in sede di quotazione."));

// ============ 5. PERIMETRO MVP ============
children.push(H1("5.  Perimetro MVP — moduli A e B"));

children.push(PIntro("Il primo rilascio comprende i due moduli fondamentali per rendere lo strumento operativo: raccolta e selezione intelligente. Alcune funzionalità accessorie sono individuate come opzionali e quotate separatamente."));

children.push(H2("5.1  Fonte dati del primo rilascio"));

children.push(P("Il primo rilascio utilizza come unica fonte dati la BDNCP di ANAC. La scelta è coerente con due elementi:"));

children.push(Bullet("obbligo normativo: dal 1° gennaio 2024 tutte le pubbliche amministrazioni e le società a controllo pubblico italiane devono pubblicare su BDNCP i contratti pubblici sopra 40.000 euro. BDNCP è quindi la fonte unica ufficiale del mercato pubblico nazionale;"));
children.push(Bullet("accessibilità: ANAC espone i dati via API pubbliche gratuite, stabili e documentate, con aggiornamento periodico."));

children.push(P("In concreto, l'MVP non integra i 17 portali specifici a cui il cliente è iscritto: li copre automaticamente in quanto 13 di essi — i soggetti pubblici o a controllo pubblico — rientrano per obbligo di legge nella BDNCP. I restanti 4 (committenti privati, enti esteri, associazioni di categoria) non sono su BDNCP e restano fuori dal perimetro MVP: sono trattati nella sezione 7 e considerati per la Fase 2."));

children.push(P("Inoltre il perimetro MVP si estende ben oltre i 17 portali dichiarati dal cliente: la BDNCP contiene i bandi di tutte le stazioni appaltanti italiane (oltre 30.000 enti tra ministeri, regioni, province, comuni, aziende sanitarie, università, centrali di committenza, partecipate). Il cliente accede così a un mercato di riferimento molto più ampio di quello che presidia oggi, con la stessa singola integrazione tecnica."));

children.push(H2("5.2  Modulo A — Raccolta e aggregazione"));

children.push(Bullet("integrazione con la BDNCP e raccolta dei bandi italiani pubblicati;"));
children.push(Bullet("gestione degli aggiornamenti senza duplicazione dei record;"));
children.push(Bullet("persistenza e accessibilità dei dati raccolti da parte del modulo di scoring."));

children.push(H2("5.3  Modulo B — Filtraggio e scoring"));

children.push(Bullet("profilo aziendale configurabile dall'utente: servizi, parole chiave rilevanti, parole chiave da escludere, geografia, soglie economiche, qualificazioni possedute;"));
children.push(Bullet("pre-filtri deterministici: soglia economica configurabile (con default ragionevoli da definire), copertura geografica, parole chiave di inclusione/esclusione;"));
children.push(Bullet("filtro di esclusione sulle qualificazioni: i bandi che richiedono qualifiche non possedute dal cliente (primariamente SOA) vengono esclusi a monte;"));
children.push(Bullet("scoring AI sul contenuto del bando con punteggio 0-100 e motivazione testuale per ogni risultato."));

children.push(H2("5.4  Interfaccia utente MVP"));

children.push(P("Funzionalità minime richieste:"));

children.push(Bullet("autenticazione utente;"));
children.push(Bullet("avvio della ricerca su richiesta dell'utente (esecuzione manuale all'interno della piattaforma);"));
children.push(Bullet("elenco delle opportunità raccolte, ordinate per score, con filtri e ricerca;"));
children.push(Bullet("pagina di dettaglio per ogni bando, con motivazione dello score e link alla fonte ufficiale;"));
children.push(Bullet("configurazione del profilo aziendale da parte dell'utente."));

children.push(H2("5.5  Funzionalità opzionali — quotare separatamente"));

children.push(P("Le seguenti funzionalità sono state individuate come utili ma non indispensabili per il primo rilascio. Si richiede di quotarle in modo distinto, in modo da poter decidere caso per caso se includerle nell'MVP o rinviarle:"));

children.push(Bullet("aggiornamento automatico periodico della raccolta dati (in assenza, la ricerca è avviata manualmente dall'utente dall'interfaccia);"));
children.push(Bullet("notifiche email con elenco sintetico delle nuove opportunità rilevanti (giornaliere o settimanali, a scelta dell'utente);"));
children.push(Bullet("notifiche in-app alternative alle notifiche email;"));
children.push(Bullet("reportistica di sintesi periodica sull'attività del sistema."));

// ============ 6. FASE 2 ============
children.push(H1("6.  Perimetro Fase 2 — moduli C e D"));

children.push(PIntro("Moduli evolutivi da attivare dopo l'MVP, previa validazione del valore generato. Da quotare separatamente."));

children.push(H2("6.1  Modulo C — Analisi automatica dei capitolati"));
children.push(P("Per ogni bando ritenuto interessante, estrazione automatica dei requisiti di partecipazione (qualificazioni richieste, requisiti tecnico-economici, termini di presentazione, criteri di aggiudicazione) e produzione di una scheda sintetica operativa. Interfaccia di interrogazione (chat) con memoria dei documenti di gara e del profilo aziendale del cliente, per ottenere risposte contestualizzate."));

children.push(H2("6.2  Modulo D — Generazione assistita della documentazione"));
children.push(P("A partire da modelli documentali forniti dal cliente e dalle informazioni estratte dal capitolato, generazione di bozze della documentazione di risposta al bando. Obiettivo: ridurre il tempo di preparazione di una partecipazione, oggi stimato dall'ordine di diverse ore per bando."));

children.push(H2("6.3  Ampliamenti di Fase 2"));
children.push(P("Ulteriori ampliamenti previsti, da attivare solo su richiesta del cliente dopo l'esperienza d'uso dell'MVP. Si richiede una stima indicativa anche per questi, con livello di dettaglio sintetico:"));
children.push(Bullet("integrazione con ADR (Aeroporti di Roma) tramite il portale proprietario: unica integrazione proprietaria rilevante per l'operatività del cliente, non coperta da BDNCP nella parte degli inviti diretti da albo;"));
children.push(Bullet("ulteriori portali proprietari di grandi committenti pubblici e privati (ANAS portale proprio, Portale Stella del Gruppo FS, Autostrade per l'Italia, Terna e simili), da realizzare sullo stesso pattern tecnico replicabile dell'integrazione ADR;"));
children.push(Bullet("monitoring TED (Tenders Electronic Daily) per l'apertura al mercato europeo;"));
children.push(Bullet("integrazione con Incentivi.gov.it per la copertura della finanza agevolata collegata a interventi edilizi."));

// ============ 7. FONTI DATI ============
children.push(H1("7.  Fonti dati — strategia di integrazione"));

children.push(P("Si riporta di seguito la classificazione puntuale dei 17 portali dichiarati dal cliente rispetto alla copertura tramite BDNCP."));

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
    new TableRow({ children: [DataCell("ADR (Aeroporti di Roma)", port_w[0], { alt: true }), DataCell("Parziale", port_w[1], { alt: true, color: "EF6C00" }), DataCell("Gare sopra soglia UE su BDNCP; inviti da albo sul portale proprietario", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("Portale Stella", port_w[0]), DataCell("Parziale", port_w[1], { color: "EF6C00" }), DataCell("Ex Poste / Gruppo FS; inviti da albo sul portale proprio", port_w[2])] }),
    new TableRow({ children: [DataCell("Gruppo ICM", port_w[0], { alt: true }), DataCell("Non coperto", port_w[1], { alt: true, color: "C62828" }), DataCell("Committente privato, portale proprio", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("Vaticano", port_w[0]), DataCell("Non coperto", port_w[1], { color: "C62828" }), DataCell("Stato estero, fuori perimetro BDNCP", port_w[2])] }),
    new TableRow({ children: [DataCell("Assoponteggi", port_w[0], { alt: true }), DataCell("Non pertinente", port_w[1], { alt: true, color: "757575" }), DataCell("Associazione di categoria, non stazione appaltante", port_w[2], { alt: true })] }),
    new TableRow({ children: [DataCell("CCC (Consorzio Cooperative Costruzioni)", port_w[0]), DataCell("Non pertinente", port_w[1], { color: "757575" }), DataCell("Consorzio privato, non stazione appaltante", port_w[2])] }),
  ],
}));

children.push(H2("7.1  Estensione oltre i 17 portali"));

children.push(P("BDNCP contiene per obbligo di legge i bandi di tutte le stazioni appaltanti italiane — oltre 30.000 enti tra Ministeri, Regioni, Province, Comuni, Aziende Sanitarie, Università, Centrali di Committenza, fondazioni pubbliche, autorità portuali, Camere di Commercio, enti partecipati. L'MVP copre quindi l'universo pubblico italiano integralmente, andando oltre il perimetro dei 17 portali dichiarati."));

children.push(H2("7.2  Fonti escluse dall'MVP"));

children.push(P("Sono escluse dal primo rilascio:"));
children.push(Bullet("le integrazioni con portali proprietari dei grandi committenti (ADR, ANAS proprio, Portale Stella, Gruppo ICM, Vaticano) che veicolano inviti diretti da albo: accessibili solo tramite autenticazione utente e soggette a manutenzione continuativa;"));
children.push(Bullet("le associazioni e i consorzi (Assoponteggi, CCC), che non sono stazioni appaltanti e non pubblicano bandi propri;"));
children.push(Bullet("le fonti europee (TED) e di finanza agevolata (Incentivi.gov.it)."));

children.push(P("L'ampliamento a una o più di queste fonti è previsto in Fase 2 (si rimanda alla sezione 6.3)."));

// ============ 8. REGOLE DI BUSINESS ============
children.push(H1("8.  Regole di business"));

children.push(H2("8.1  Profilo del cliente"));

children.push(Bullet("attività principale: ponteggi (telai misti tubi-giunti, multidirezionali), montacarichi, ponteggi autosollevanti bicolonna, monoblocchi/container;"));
children.push(Bullet("in espansione: ristrutturazioni leggere, manutenzione, piccoli interventi impiantistici;"));
children.push(Bullet("escluso: edilizia in calcestruzzo e cemento armato;"));
children.push(Bullet("parole chiave rilevanti: ponteggi, opere strutturali, montacarichi, autosollevanti, bicolonne, monoblocchi, container, opere provvisionali;"));
children.push(Bullet("geografia: Lazio, Abruzzo, Marche, Toscana, Emilia Romagna (preferenziali); estensione nazionale accettata per opportunità rilevanti."));

children.push(H2("8.2  Qualificazioni come filtro di esclusione"));
children.push(P("Le qualificazioni del cliente sono utilizzate per escludere automaticamente i bandi che richiedono requisiti non posseduti. Achipoint non possiede attestazione SOA: tutti i bandi che richiedono SOA vengono esclusi dai risultati (con possibilità di sovrascrittura manuale da configurazione)."));

children.push(P("Le qualificazioni possedute (elencate nella sezione 2.1) sono utilizzate come elementi di conformità per non escludere i bandi che le richiedono, non come elementi di scoring positivo."));

children.push(H2("8.3  Logica di scoring"));
children.push(P("Per ogni bando non escluso dai filtri deterministici, il motore AI produce uno score 0-100 basato su:"));
children.push(Bullet("coerenza semantica con l'attività principale e le parole chiave rilevanti (peso maggiore);"));
children.push(Bullet("fit geografico rispetto alle regioni preferenziali;"));
children.push(Bullet("coerenza dell'importo con la soglia di interesse configurata;"));
children.push(Bullet("presenza di segnali espliciti di opere affini (restauro, manutenzione edifici pubblici, scuole, ospedali, monumenti);"));
children.push(Bullet("ogni score è accompagnato da una motivazione testuale sintetica."));

// ============ 9. NFR ============
children.push(H1("9.  Requisiti non funzionali"));

children.push(Bullet("aggiornamento dei dati: giornaliero, con visibilità delle nuove opportunità entro 24 ore dalla pubblicazione sulla fonte ufficiale;"));
children.push(Bullet("utenti concorrenti: 3-5 utenti aziendali, carico applicativo contenuto;"));
children.push(Bullet("sicurezza: autenticazione utente, crittografia dati a riposo e in transito, log di accesso;"));
children.push(Bullet("conformità: GDPR per il trattamento dei dati degli utenti aziendali;"));
children.push(Bullet("manutenibilità: l'unica dipendenza esterna critica dell'MVP è la fonte dati pubblica ufficiale."));

// ============ 10. COERENZA PROGETTO PARALLELO ============
children.push(H1("10.  Coerenza con il progetto parallelo"));

children.push(P("Lo stesso team di sviluppo riceverà in parallelo un secondo progetto HeyAI, anch'esso orientato alla ricerca automatizzata di opportunità pubbliche, con un profilo cliente diverso (consulenza strategica, perimetro dati più ampio comprendente TED e Incentivi.gov.it)."));

children.push(P("I due progetti condividono elementi architetturali significativi — in primis l'ingestion da BDNCP, il motore di scoring semantico e la configurabilità del profilo cliente. Si richiede al team di progettare i componenti comuni in modo da evitare duplicazioni e da poter essere condivisi tra i due progetti, pur nel rispetto della separazione dei dati e delle istanze applicative di ciascun cliente."));

children.push(P("Dettagli sul progetto parallelo saranno condivisi a parte."));

// ============ 11. DELIVERABLE ============
children.push(H1("11.  Deliverable richiesti"));

children.push(P("Per la quotazione si richiedono stime distinte per ciascun blocco di seguito."));

children.push(H2("11.1  MVP (moduli A + B)"));
children.push(Bullet("giornate di sviluppo totali e ripartizione per profilo professionale;"));
children.push(Bullet("durata del progetto dalla firma alla consegna (settimane);"));
children.push(Bullet("assunzioni tecniche principali;"));
children.push(Bullet("rischi tecnici identificati e strategie di mitigazione;"));
children.push(Bullet("stima dei costi ricorrenti (licenze LLM, eventuali servizi di terze parti)."));

children.push(H2("11.2  Funzionalità opzionali MVP"));
children.push(P("Quotazione separata per le funzionalità individuate nella sezione 5.5 (aggiornamento automatico, notifiche email, notifiche in-app, reportistica periodica). Serve per poter valutare con il cliente quali attivare nel primo rilascio."));

children.push(H2("11.3  Fase 2 (moduli C + D e ampliamenti)"));
children.push(Bullet("quotazione del modulo C (analisi capitolati, chat con memoria);"));
children.push(Bullet("quotazione del modulo D (generazione documentazione);"));
children.push(Bullet("quotazione dell'integrazione ADR come primo ampliamento proprietario;"));
children.push(Bullet("stime indicative per gli ulteriori ampliamenti elencati nella sezione 6.3."));

children.push(H2("11.4  Formato della risposta"));
children.push(P("Formato tabellare sintetico per voce di costo, accompagnato da una breve nota di assunzioni e valutazione dei rischi. Non sono richiesti documenti estesi: lo scopo è consolidare la proposta commerciale al cliente."));

children.push(P("Il contenuto del presente brief è riservato e non condivisibile con terzi."));

// ============ CHIUSURA ============
children.push(
  new Paragraph({
    spacing: { before: 480, after: 120 },
    border: { top: { style: BorderStyle.SINGLE, size: 8, color: TEAL, space: 8 } },
    children: [t("")],
  }),
  new Paragraph({
    spacing: { before: 60, after: 0, line: 300 },
    children: [t("Per chiarimenti sul perimetro, sulle regole di business o sul coordinamento con il progetto parallelo fare riferimento a Carlo Sanvoisin.", { italics: true })],
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