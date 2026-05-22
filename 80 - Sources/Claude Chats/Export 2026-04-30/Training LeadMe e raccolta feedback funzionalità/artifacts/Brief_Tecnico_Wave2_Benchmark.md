# Brief Tecnico-Funzionale — Ecosistema Noloop Wave 2

**Per:** Consulente tecnico esterno (benchmark quotazione)
**Da:** HeyAI S.r.l.
**Data:** Marzo 2026
**Allegato:** Requirement Log Excel con dettaglio funzionale per singolo requisito

---

## 1. Panoramica progetto

Noloop S.r.l. è un'agenzia di eventi corporate con sede a Milano (~150 dipendenti, ~€55M di ricavi). Utilizza Microsoft Business Central (Dynamics 365) come sistema ERP/contabile. Nel 2025 è stata realizzata una prima wave di soluzioni AI (CRM con scraper LinkedIn, tool di trascrizione riunioni, piattaforma gestione eventi, ricerca venue). Queste soluzioni sono in produzione e usate quotidianamente.

La Wave 2 prevede lo sviluppo di un ecosistema di soluzioni interconnesse che copre il ciclo di vita completo di una commessa — dall'acquisizione del lead alla chiusura contabile — con integrazioni bidirezionali con Business Central. L'ecosistema comprende 7 soluzioni + 1 layer AI trasversale, per un totale di circa 80-110 requisiti funzionali (dettaglio nel requirement log allegato).

Il progetto include sia evoluzioni significative delle soluzioni Wave 1 (LeadMe, Minutes, Venue Finder) sia soluzioni completamente nuove (Link, Sally, OnSite). La timeline di sviluppo prevede consegne scaglionate su 8 mesi (marzo–novembre 2026).

---

## 2. Problema di business

L'operatività di Noloop è frammentata su canali non strutturati: i task operativi transitano via WhatsApp, email e carta; i budget vengono compilati su Excel con doppio/triplo inserimento manuale su Business Central; la fatturazione attiva passa via email con reinserimento manuale; il Progress (report direzionale su margini e stato commesse) viene compilato a mano settimanalmente da 6+ persone; la conoscenza procedurale è concentrata in poche teste (120+ richieste/settimana al controllo di gestione). Il team commerciale (~9 persone) gestisce ~600 contatti e ~260 commesse/anno senza un CRM strutturato.

L'ecosistema Wave 2 mira a eliminare i doppi inserimenti, centralizzare i dati operativi, automatizzare la quadratura contabile con Business Central, e liberare tempo dalle attività a basso valore.

---

## 3. Architettura dell'ecosistema

L'architettura si basa su un principio fondamentale: **ogni dato ha un unico sistema "proprietario"** che lo gestisce. Gli altri applicativi lo leggono in tempo reale ma non lo duplicano.

**Minutes** è il raccoglitore universale degli input (call, email, note vocali, brief, transcript Teams, foto, appunti). Trascrive, analizza, estrae task e dati, poi li smista ai moduli appropriati: task commerciali → LeadMe, dati commessa e task operativi → Link.

**LeadMe** possiede: contatti, aziende, pipeline commerciale (NB e Clienti), attività commerciali (follow-up, call, presentazioni). È il punto di ingresso del commerciale. Mostra una vista read-only delle commesse leggendo i dati da Link (non duplicandoli).

**Link** possiede: commesse, budget (3 stadi con snapshot), Piano di Produzione Digitale (PDP), task operativi, quadratura fatture, Progress digitale (dashboard direzionale). È il punto di ingresso dell'operativo e della direzione. Integrazione bidirezionale con Business Central via API Microsoft OAuth.

**Sally** è un layer AI trasversale. Non possiede dati propri: legge da tutti i moduli e scrive solo con conferma utente. Include una knowledge base aziendale (~2.000-3.000 documenti di procedure), interrogazione in linguaggio naturale in-app in ogni modulo, notifiche proattive e compilazione documenti per portali fornitori.

Le soluzioni sono sviluppate come applicativi web standalone interconnessi via API, con un sistema di autenticazione unificato (ecosystem). Ogni modulo è deep-linkable: l'utente può navigare tra i moduli senza percepire il passaggio a un applicativo diverso.

---

## 4. Le soluzioni

### LeadMe Evolution — CRM Operativo
CRM per il ciclo commerciale B2B (~9 utenti commerciali + direzione). Comprende due pipeline Kanban (New Business a 8 stadi e Clienti a 5 stadi), gestione aziende con alias e relazioni madre-figlia, semafori temporali automatici visibili alla direzione, dettaglio commesse per cliente (vista read-only da Link), attività commerciali con ricezione task da Minutes, dashboard direzione con KPI aggregati. Include migrazione completa dell'interfaccia attuale (già in produzione) a un nuovo design system. L'applicativo esistente ha uno scraper LinkedIn integrato che va mantenuto e migliorato. Le funzionalità di accelerazione (scraping attivo di nuovi lead, icebreaker AI, notifiche proattive) sono in fase 2, quotazione separata.

### Link — Gestionale Centralizzato
Hub centrale dell'ecosistema per la gestione economica delle commesse (~25 utenti tra operativi, PM e direzione). Apertura commessa con workflow gatekeeper (Resp. Controllo conferma prima del push su BC), budget digitale a 3 stadi con snapshot immutabili, Piano di Produzione Digitale (strumento quotidiano per gli operativi, simile a un foglio di lavoro flessibile), associazione fatture passive su due canali (SDI via cross-check con BC e non-SDI via upload PDF), template fatturazione attiva con push a BC, blocco chiusura se quadratura incompleta, integrazione cash flow BC (ricavi e costi), dashboard direzionale che sostituisce il Progress Excel. Nota: Link NON gestisce ciclo attivo/passivo, fornitori o anagrafiche — tutto questo resta su Business Central.

### Gestione Task e Attività (componente CRM operativo)
Modulo di task management per le attività operative legate alle commesse. Ricezione task strutturati da Minutes (con editing prima dell'invio), vista Kanban e Gantt per persona e per commessa, task tipizzati con procedure allegabili, upload file, accettazione input non strutturati (audio, foto, email → sistema propone task, utente conferma). Include interazione Sally vocale/testo per aggiornamento task da mobile, estrazione scadenze da contratti caricati con creazione reminder automatici, e reportistica NLP. Architettura: può essere implementato come modulo standalone deep-linkable o integrato — la scelta tecnica è aperta.

### Sally — Agente Virtuale (Livello 1, Read-only)
Agente AI trasversale con backend standalone e PWA installabile (~80 utenti potenziali). Livello 1 = interrogazione e risposta, nessuna azione esecutiva. Knowledge base completa delle procedure aziendali con sincronizzazione notturna, notifiche proattive (cron job giornaliero: alert scadenze, reminder, anomalie), architettura a skill modulari per ogni applicativo dell'ecosistema, compilazione documenti e portali fornitori (~80 portali, autocertificazioni, DUVRI, form Jaggaer/Ariba), memoria condivisa tra utenti. Il Livello 2 (azioni esecutive cross-modulo) è escluso da questa fase.

### OnSite — AI Event Companion
PWA per i partecipanti durante gli eventi (~estensione della piattaforma Crowd già in produzione). Social networking, programma personalizzato, chatbot evento con contesto, notifiche push, survey e feedback strutturati (NPS, raccolta input qualitativi con dati aggregati per report post-evento), gestione pagamenti integrata, agente WhatsApp come alternativa/complemento alla PWA.

### Minutes Evolution
Evoluzione del tool di trascrizione meeting già in produzione. Aggiunge: registrazione call esterne (cattura audio di sistema con diarizzazione voci), agente in-call che entra nella chiamata Teams come partecipante e registra, editing dei task estratti prima dell'invio ai moduli, download report nel formato editato, accettazione input non-call (email, note vocali, documenti), infrastruttura autenticazione (2FA, recupero password, mail sender).

### Venue Finder Evolution
Evoluzione del tool di ricerca venue già in produzione (attualmente basato su Google Gemini). Migrazione a modelli AI migliori e integrazione nell'ecosistema Wave 2. Include: ricerca location con accuratezza migliorata (gerarchia fonti, distanza reciproca strutture, dati mancanti segnalati come NA), gestione documenti interni (organizzazione per Nazione/Regione/Città, ~2-3 report/mese + ~2 newsletter/settimana), isolamento sessioni, generazione automatica di presentazioni grafiche complete (copy + layout + foto pre-selezionate dall'AI), rispetto del design system Noloop, memoria storica consultabile (archivio indicizzato presentazioni passate), rilanci modulari (rigenerazione solo sezione interessata, tracciamento alternative già proposte). 3 modalità di ricerca rapida (ristoranti, hotel, venue speciali) parallele al flusso standard.

---

## 5. Integrazioni con sistemi terzi

### Microsoft Business Central (Dynamics 365) — Integrazione critica

| Flusso | Direzione | Dettaglio |
|--------|-----------|-----------|
| Creazione commessa | Link → BC | OAuth, formato codice AALNNNNN |
| Cash flow ricavi | Link → BC | Righe Pianificazione Commessa (task RICAVI), importi netto IVA |
| Cash flow costi | Link → BC | Richieste di Pagamento in stato Pianificato, importi IVA inclusa |
| Fatturazione attiva | Link → BC | Push template compilato con codici IVA (4 codici definiti) |
| Check fatture passive (SDI) | BC → Link | Lettura Anteprima Documento Elettronico per codice commessa |
| Check residuo cash flow | BC → Link | Verifica che importi non superino il pianificato |
| Suggerimento fornitori | BC → Link | Solo nomi fornitori da storico commesse simili, NO costi |

Nota: l'API BC è stata confermata disponibile dal cliente. Va testata su una commessa standard. Eventuali limitazioni dell'API BC non sono imputabili al fornitore.

### LinkedIn / Sales Navigator
Scraper esistente (Wave 1) per import e aggiornamento contatti. In Wave 2: miglioramenti stabilità e gestione rate limits. Lo scraping attivo di nuovi lead è in fase 2.

### Provider pagamenti (Stripe o simile)
Per il modulo OnSite/Crowd: integrazione gestione pagamenti per eventi. Gateway da definire.

### WhatsApp Business API
Per il modulo OnSite: agente conversazionale per i partecipanti agli eventi. Alternativa alla PWA con notifiche push.

### LLM Provider (OpenAI / Anthropic)
Sally e tutte le funzionalità AI dell'ecosistema utilizzano API di provider LLM. I costi di consumo token sono a carico del cliente finale, non inclusi nello sviluppo.

---

## 6. Nota per il quotante

Si richiede una **quotazione per singola soluzione**, non a corpo per l'intero ecosistema. Le soluzioni da quotare separatamente sono:

1. LeadMe Evolution — Fase 1 (efficientamento CRM + componente task/attività)
2. LeadMe Evolution — Fase 2 (scraping attivo, icebreaker, notifiche proattive, sync calendario — 7 requisiti)
3. Link — Gestionale Centralizzato (inclusa integrazione Business Central)
4. Sally — Agente Virtuale Livello 1
5. OnSite — AI Event Companion (estensione Crowd)
6. Minutes Evolution
7. Venue Finder Evolution

Per ciascuna soluzione, indicare: effort stimato in giornate/uomo, costo, eventuali rischi tecnici identificati, e dipendenze tra moduli che impattano la pianificazione.

Il requirement log allegato contiene il dettaglio funzionale requisito per requisito con priorità (MUST HAVE / SHOULD HAVE / NICE TO HAVE) e note/vincoli tecnici. Questo brief è complementare e fornisce il contesto architetturale e di business.