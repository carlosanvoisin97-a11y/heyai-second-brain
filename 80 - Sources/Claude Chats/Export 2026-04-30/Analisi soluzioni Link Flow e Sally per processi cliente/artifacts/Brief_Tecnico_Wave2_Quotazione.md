# Brief Tecnico — Noloop Wave 2
## Requisiti per Quotazione Sviluppo

**Per: Federico Saladino, Simone Montanari**
**Da: Carlo Sanvoisin — HeyAI**
**Data: Marzo 2026**

---

## CONTESTO

Noloop è un'agenzia di eventi corporate (~150 dipendenti) che utilizza Microsoft Business Central (Dynamics 365) come sistema contabile/gestionale. L'ecosistema Wave 2 è composto da 7 moduli interconnessi che coprono il ciclo di vita completo di una commessa: dall'acquisizione del lead alla chiusura contabile.

**Volumi operativi di riferimento per il dimensionamento:**
- ~260 commesse/anno
- ~20.000 task operativi/anno
- ~650 contratti fornitori/anno con scadenze rilevanti
- ~650 submission di fatturazione attiva/anno
- 5-20 fatture passive per commessa
- ~45 gare creative/anno
- ~55 utenti operativi diretti + ~10 utenti supervisione/commerciali + ~9 utenti creativi

**Piattaforme esistenti da integrare:**
- Microsoft Business Central (Dynamics 365): `https://businesscentral.dynamics.com/`
- Revolut Business (carte aziendali)
- Cartella di rete per fatture non-SDI: `\\172.16.0.121\Documi\downloads\CONS\pdf`
- KB documentale: ~2.000-3.000 file (procedure, policy, certificazioni, modulistica)
- ~80 portali fornitori (Jaggaer, Ariba e simili)

---

## NOTA IMPORTANTE — SEPARAZIONE RESPONSABILITÀ

Per evitare sovrapposizioni nella quotazione, ogni funzionalità è assegnata a un solo modulo. Dove il flusso coinvolge più moduli, è indicato quale modulo "possiede" la logica e quale è solo destinatario/beneficiario.

---

## 1. LEADME EVOLUTION

### Descrizione
CRM per la gestione del ciclo commerciale B2B. Utenti principali: ~6 commerciali.

### Requisiti

| # | Requisito | Dettaglio | Note |
|---|---|---|---|
| 1.1 | Apertura COM | Bottone per creare commessa su Link (che pusha su BC via API). Pre-popola campi disponibili, chiede conferma per mancanti | Flusso primario è da Minutes (vedi 7.x). LeadMe = alternativa per casi senza call |
| 1.2 | Ricezione status bidirezionale | LeadMe riceve aggiornamento quando: brief ricevuto, gara vinta, progetto chiuso. Status del lead sempre aggiornato | Flusso bidirezionale LeadMe ↔ Link |
| 1.3 | Scraping attivo lead | Ricerca proattiva quotidiana di nuovi lead su LinkedIn. Il commerciale trova la lista ogni mattina, conferma o scarta | Scheduled, automatizzato |
| 1.4 | Scraping Company | Oltre ai lead, scraping dati delle Company (parametri LeadMe compilati automaticamente) | Stessi parametri attuali LeadMe |
| 1.5 | Studio profilo + Icebreaker | Per ogni lead onboardato: analisi profilo LinkedIn + suggerimento messaggio personalizzato | Deep Search via API |
| 1.6 | Gestione naming Company | Alias (stesso soggetto, nome diverso) + Holding (cappello su più company). Interfaccia utente per parametrizzare | Es. Pirelli / Pirelli SPA |
| 1.7 | Check attività dormienti (Sally) | Sally verifica lead con last update < 3 settimane. Controlla azioni pendenti (call, email, messaggio, presentazione). Manda recap al commerciale | Cron job giornaliero. Notifica in-app + email |
| 1.8 | Reportistica NLP (Sally) | Interrogazione linguaggio naturale su dati LeadMe | Skill Sally quotata in LeadMe |

---

## 2. PITCH (MODULO CREATIVO)

### Descrizione
Suite AI per la preparazione delle gare creative. Utenti principali: ~9 persone (2 Director, 1 Senior, 6 Mid-level). Volume: ~45 gare/anno con 5-6 persone coinvolte per gara.

### Requisiti

⚠️ Call di approfondimento con il reparto creativo da fare prima di quotare nel dettaglio il Playground (2.2). La Deep Search (2.1) è quotabile subito.

| # | Requisito | Dettaglio | Note |
|---|---|---|---|
| 2.1 | Deep Search (Analisi strategica) | Analisi automatica guidata: brief, sito web del cliente, social, comunicati stampa, competitor, iniziative passate (naming, scenografie, testimonial utilizzati), posizionamento. Chiede conferme all'utente prima di procedere. Output: documento strutturato di analisi brand e mercato | Input: brief + qualsiasi fonte trovabile sul cliente. L'AI chiede prima di agire, non opera in autonomia. ~30 min per completare l'analisi |
| 2.2 | Playground creativo | Interfaccia unificata con brand book del cliente pre-caricato dalla Deep Search. Linee guida coerenti. Flusso continuo: dal concept al render al mockup al video. Collegato a strumenti di image gen | Da definire con creativi dopo call approfondimento |

---

## 3. FLOW (TASK MANAGEMENT SYSTEM)

### Descrizione
Task management operativo per ~55 utenti distribuiti su 5 reparti. Nessun tool di task management attualmente in uso (tutto su WhatsApp, email, telefonate, carta).

### Requisiti

| # | Requisito | Dettaglio | Note |
|---|---|---|---|
| 3.1 | Ricezione task da Minutes | Minutes crea task strutturati (assegnatario, scadenza, note, priorità). Il Client Lead rivede e conferma con un click → pushati su Flow | Avviene in due momenti: post-brainstorming (task per presentazione) e post-accettazione (task per evento) |
| 3.2 | Vista Kanban + Gantt | Pending / In Progress / Completed / Deferred. Vista per persona e per commessa. Possibilità Gantt per commesse complesse | |
| 3.3 | Task liberi + task tipizzati | Menù dropdown per tipo task (a contesto chiuso). Ai task tipizzati si allegano procedure interne (PDF/link) | Tipi task e procedure da definire con il cliente in fase di design |
| 3.4 | Upload file nei task | Immagini, foto, documentazione, fatture, contratti caricabili su ogni task | File associati poi visibili su Link |
| 3.5 | Interazione Sally vocale/testo | "Ho fatto il sopralluogo, allego foto" → Sally identifica task, aggiorna stato, carica file | Skill Sally quotata in Flow |
| 3.6 | Upload contratti con estrazione scadenze | Caricamento contratti/accordi → Sally estrae: importo, condizioni di pagamento, scadenze cancellazione, deadline operative (rooming list, biglietti, ecc.) → diventano reminder automatici su Flow | Skill Sally quotata in Flow |
| 3.7 | Blocco chiusura se dati mancanti | Se Client Lead tenta di chiudere commessa ma mancano fatture o documenti obbligatori → blocca e segnala cosa manca | Regole di validazione configurabili |
| 3.8 | Push dati aggregati su Link | Al completamento di tutti i task → dati consolidati salgono su Link | Auto-population del gestionale |
| 3.9 | Transito budget previsionale e consuntivo | Flow è il veicolo attraverso cui il Budget 2 (previsionale) e il Budget 3 (consuntivo) transitano verso Link, con verifiche di completezza (es. fatture presenti per ogni voce del consuntivo) | Da definire meccanismo esatto in fase di design |
| 3.10 | Rispetto workflow approvazioni BC | Quando un task genera una richiesta di pagamento, il sistema deve facilitare (alert, pre-compilazione) il workflow a doppia approvazione già in essere su BC: 1° Resp. Reparto → 2° Resp. Controllo/Direzione. Flow NON sostituisce l'approvazione ma la facilita | Tempistiche BC: standard entro lunedì h15 per pagamento martedì; urgente entro h12 stesso giorno |

**Add-on da quotare separatamente:**

| # | Add-on | Dettaglio |
|---|---|---|
| 3.A | Validazione procedurale AI | Sally confronta avanzamento task con procedure aziendali, blocca/segnala se non rispettate. Costoso per il volume di regole da modellare |

---

## 4. LINK (GESTIONALE CENTRALIZZATO)

### Descrizione
Hub centrale dell'ecosistema. Riceve dati da tutti gli altri moduli, li aggrega e li presenta alla direzione. Integra il Piano di Produzione Digitale (PDP) come strumento di lavoro operativo quotidiano. Utenti: ~25 tra operativi che inseriscono e direzione che consulta.

### ⚠️ NOTA CRITICA
Link NON gestisce: ciclo attivo, ciclo passivo, fornitori, anagrafiche fornitori. Tutto questo resta su Business Central. Link riceve solo dati aggregati per fare reportistica e fare da ponte tra i moduli.

### Requisiti

| # | Requisito | Dettaglio | Note |
|---|---|---|---|
| 4.1 | Creazione commessa | Riceve commessa da Minutes (primario) o LeadMe. Struttura: cliente, evento, date, budget iniziale, margine atteso, regime fiscale, tipologia fatturazione | Guscio vuoto che si riempie nel tempo |
| 4.2 | Gatekeeper con notifica | Alla creazione commessa, il Resp. Controllo riceve notifica con dati pre-compilati (cliente, evento, date, budget con % utile, status GARA/CONFERMATO, tipo fatturazione IVA/74-ter CEE/74-ter Extra CEE/fatturazione singole, persona responsabile). Conferma, corregge o respinge prima del push verso BC | Preserva il ruolo attuale del Resp. Controllo nella validazione del regime fiscale. Vincolo BC: non si possono avere due regimi fiscali in una commessa |
| 4.3 | Integrazione Business Central — Push commessa | Push dati commessa verso BC via API Microsoft (OAuth). Link → BC | Testare su commessa standard ASAP. API BC confermata disponibile. Formato codice commessa BC: AALNNNNN (AA=anno, L=lettera BU, NNNNN=progressivo) |
| 4.4 | Piano di Produzione Digitale (PDP) | Strumento di lavoro quotidiano per operativi e producer. Sostituisce l'Excel operativo. Caratteristiche: template intelligenti pre-popolati basati su storico commesse, ruolo dell'operativo e contesto da Minutes; import template cliente (drag & drop); flessibilità totale (colonne aggiungibili, filtrabili, nascondibili); associazione fatture passive alle singole voci (vedi 4.6); suggerimento fornitori da BC per commesse simili (solo nome, NON costo) | Da definire se il PDP vive dentro Flow o dentro Link. La decisione impatta l'architettura. Vedere nota sotto |
| 4.5 | Budget digitale a 3 stadi + snapshot | Stadio 1 — In gara (numeri macro dal brief/Minutes). Stadio 2 — Pre-chiusura (costi contrattati, previsioni accurate). Stadio 3 — Consuntivo (costi reali con fatture). Snapshot automatico ad ogni passaggio di stadio. Facing temporale consultabile dalla direzione | Il sistema manda alert a tutti i responsabili per aggiornare la pre-chiusura prima della partenza |
| 4.6 | Associazione fatture passive — DUE CANALI | Il sistema deve gestire due canali distinti di fatture passive: **Canale 1 — Cassetto Fiscale (SDI):** le fatture italiane appaiono in "Anteprima Documento Elettronico" su BC con stato Aperto o Errore. Ogni fattura ha un codice commessa (campo Nr. Commessa). Il check di quadratura si fa via cross-check con BC tramite codice commessa. **Canale 2 — Non-SDI (fatture estere, regime minimi):** i PDF vanno depositati nella cartella di rete con naming "NOME OPERATORE_COMMESSA". Il sistema deve verificare che i documenti siano stati caricati nel PDP. IMPORTANTE: distinguere tra proforma (non fiscali, solo archivio come comprova anticipi) e fatture finali (documenti fiscali a consuntivo) | Fatture multi-commessa: in BC il Nr. Commessa va inserito a livello di riga, non di testata. Il sistema deve gestire questa casistica |
| 4.7 | Template fatturazione attiva | L'operativo compila il template su Link (stessa UX dell'attuale format Excel: PO, importi, codici IVA, articoli). Codici IVA disponibili: ART-000004 (22%), ART-000005 (10%), ART-000006 (ESC 15), ART-000007 (Non Imp 9). Il dato viene pushato a BC via API — eliminando il passaggio email a `fatturazioneatttiva@noloop.eu`. Il Resp. Amministrativo conferma in BC | Allegare chiusura consuntivo approvata dal cliente quando si richiede fattura a saldo. PO/Buoni Ordine da inviare a `purchaseorder@noloop.eu` |
| 4.8 | Integrazione cash flow BC | I dati inseriti nel PDP alimentano automaticamente le strutture cash flow già esistenti in BC: **Ricavi** → Righe Pianificazione Commessa (task RICAVI). Campi: tipo riga Fatturabile, data consegna pianificata, data scadenza pianificata, tipo Articolo, Nr. articolo (codici IVA), codice ubicazione STIME, quantità 1, prezzo unitario (importo imponibile). **Costi** → Richieste di Pagamento in stato Pianificato. Campi: Nr. Commessa, Nr. Fornitore (area operativa, es. OPERATIVO CASHFLOW), data pagamento, importo (IVA inclusa), descrizione. IMPORTANTE: il cash flow BC ha un controllo automatico del residuo — se l'importo richiesto supera il pianificato, il collegamento non è possibile. Il nostro sistema deve esserne consapevole | Regole BC: ricavi al netto IVA, costi IVA inclusa. Rischedulazione automatica residui non utilizzati (3 cicli × 30 giorni). Per valuta estera: cash flow sempre in euro, richiesta pagamento nella valuta fornitore |
| 4.9 | Blocco chiusura | Il PDP non può passare in stato "completed" finché: tutte le voci del budget non hanno fattura passiva associata (su entrambi i canali), i template di fatturazione attiva sono stati compilati e inviati, check di quadratura tra PDP e BC superato | Gestione spese Revolut: cross-check con spese approvate non associate a nessun codice commessa (vedi 4.11) |
| 4.10 | Dashboard direzionale (Progress digitale) | Sostituisce il Progress Excel. Contenuto: status commessa per BU/commerciale/tipo cliente, budget per reparto/cluster, marginalità calcolata automaticamente, facing nel tempo (evoluzione attraverso i 3 stadi), comparazione previsto vs consuntivo, carichi di lavoro per persona | Auto-alimentata dai dati del PDP e dai task completati su Flow |
| 4.11 | Reportistica NLP (Sally) | Interrogazione linguaggio naturale: "qual è il margine sulla commessa X?", "come si è evoluto il budget?", "chi è più scarico questa settimana?" | Skill Sally quotata in Link |
| 4.12 | Feedback verso LeadMe | Comunica a LeadMe: brief ricevuto, gara vinta, progetto chiuso. Tiene aggiornato lo status commerciale | Flusso automatico |
| 4.13 | Gestione GARE | Se la gara è persa → status "non confermata" su Link → chiusura COM su BC. Se confermata, comunicare eventuali variazioni (budget/località/data) | |

**Add-on da quotare separatamente:**

| # | Add-on | Dettaglio |
|---|---|---|
| 4.A | Integrazione Revolut | Cross-check spese carta Revolut approvate vs commesse. Alert per spese non associate a codice commessa. Opera su dati post-approvazione (ciclo: 48h giustificazione → approvazione settimanale Resp. Reparto → estrazione mensile amministrazione). Verifica sintassi codice commessa AAXNNNNN nel campo descrizione. Limite €500 per transazione. NB: cambio provider in corso, funzionamento simile |

### ⚠️ NOTA ARCHITETTURALE — PDP: FLOW O LINK?

Il PDP è lo strumento di lavoro quotidiano degli operativi. Può vivere dentro Flow (dove la gente lavora sui task) o dentro Link (dove convergono i dati economici). La decisione impatta:
- Se in Flow: l'UX è integrata con i task, ma serve un push pesante verso Link per la reportistica
- Se in Link: la reportistica è nativa, ma gli operativi devono saltare tra due applicativi (Flow per i task, Link per il budget)

**Da discutere in fase di design.** Quotare entrambe le opzioni se le stime differiscono significativamente.

---

## 5. SALLY (AGENTE VIRTUALE)

### Descrizione
Agente AI trasversale. Backend e frontend separati da Link. PWA installabile su telefono. ~80 utenti potenziali.

### Requisiti

| # | Requisito | Dettaglio | Note |
|---|---|---|---|
| 5.1 | Backend stand-alone | Backend e frontend separati da Link. Funzioni chat migrate da Minutes qui | Deploy indipendente, cambio prompt da env |
| 5.2 | Knowledge base procedure | Sally conosce TUTTE le procedure operative Noloop: richieste di pagamento (con 3 casistiche ritenute per tipo fornitore: prestatore occasionale senza P.IVA, regime forfettario, soggetti a cassa INPS+IVA), fatturazione attiva (format, codici IVA, sintassi oggetto email), gestione Revolut (regole giustificativi 48h, limiti €500, sintassi AAXNNNNN, aliquote "ATTESA FATTURA"/"NON FATTURABILE"), fatture estere (cartella di rete, naming, distinzione proforma/fattura finale, tempistica 7gg dal rientro), apertura commessa (campi obbligatori, vincoli regime fiscale), cash flow (regole inserimento ricavi/costi). Risponde come "collega esperto" | La KB viene alimentata dalle procedure operative in formato MD + dai file documentali di Marco Merli (~2.000-3.000 documenti). Sincronizzazione notturna con le cartelle sorgente |
| 5.3 | PWA installabile | Web app installabile su telefono (stile ChatGPT). Voce + testo | NO app nativa. Web-based |
| 5.4 | Notifiche proattive | Sally prende iniziativa con cron job giornaliero: check lead dormienti su LeadMe (1.7), alert scadenze contrattuali su Flow (3.6), reminder pre-chiusura commessa, segnalazione anomalie | Email + notifica in-app |
| 5.5 | Skill modulari per ogni app | Architettura a plugin/skill. Funzionalità AI specifiche per: LeadMe (1.7, 1.8), Flow (3.5, 3.6), Link (4.11). Quotate nei rispettivi moduli, non qui | |
| 5.6 | Compilazione documenti e portali fornitori | Sally pre-compila con dati societari dalla KB: autocertificazioni, DUVRI, dichiarazioni di idoneità, form per portali Jaggaer e Ariba. L'operatore rivede e invia. Gestione formati: Word e PDF compilabili (fase 1), PDF immagine con OCR (fase 2) | ~80 portali fornitori da gestire. Scadenze periodiche: DURC ogni 6 mesi, visure, certificazioni |
| 5.7 | Email-to-action / Audio-to-action | L'utente inoltra un'email o invia una nota vocale / foto → Sally analizza il contenuto, propone l'azione (creare task su Flow, aggiornare PDP su Link, ecc.) e la destinazione → l'utente conferma con un click | ~28 utenti operativi. Volume stimato: 2-3 input azionabili/giorno per persona |
| 5.8 | Input non strutturati → PDP | Foto scontrini, email fornitori con conferma economica, note vocali → Sally formalizza e inserisce nella riga corretta del PDP. Estrae da contratti caricati: importo, condizioni di pagamento, scadenze | Skill che opera su Link/PDP |

**Add-on da quotare separatamente:**

| # | Add-on | Dettaglio |
|---|---|---|
| 5.A | Voice mode live (PREMIUM) | Conversazione vocale real-time (stile GPT Voice). Costo token alto — quotare come opzione separata |

---

## 6. ONSITE (AI EVENT COMPANION / Crowd Estensione)

### Descrizione
PWA per i partecipanti durante gli eventi. Estensione di Crowd per il durante-evento.

### Requisiti

| # | Requisito | Dettaglio | Note |
|---|---|---|---|
| 6.1 | App partecipanti PWA | Social networking, programma personalizzato, chatbot evento | Estensione di Crowd per il durante-evento |
| 6.2 | Collegamento commessa Crowd | Evento Crowd collegato a commessa Link | Già previsto |
| 6.3 | Gestione pagamenti Crowd | Sistema pagamenti integrato | Da aggiungere a stima Crowd attuale |
| 6.4 | Survey e feedback strutturati | Form personalizzabili inviabili ai partecipanti durante e dopo l'evento. Valutazione sessioni, NPS, raccolta input qualitativi. Dati aggregati per il report post-evento al cliente | Nuovo requisito |

---

## 7. MINUTES EVOLUTION

### Descrizione
Evoluzione del tool di trascrizione meeting esistente. Estrae dati strutturati dalle call e triggera azioni sugli altri moduli.

### Requisiti

| # | Requisito | Dettaglio | Note |
|---|---|---|---|
| 7.1 | Estrazione dati per apertura COM | Dalla call di brainstorming, Minutes estrae: budget iniziale cliente, margine atteso, divisione compiti, dati necessari per l'apertura commessa su Link | Questi dati triggerano il flusso 4.1 + 4.2 (creazione commessa + gatekeeper) |
| 7.2 | Creazione task strutturati | Dopo ogni call, Minutes estrae task con: assegnatario, scadenza, priorità, note. Il Client Lead rivede e conferma → push su Flow (3.1) | Avviene due volte: post-brainstorming e post-accettazione |
| 7.3 | Aggiornamento status LeadMe | Minutes può triggerare l'aggiornamento dello status del lead su LeadMe (es. brief ricevuto) | |

---

## INTEGRAZIONI CRITICHE

### Priorità 1 — Business Central API

| Flusso | Direzione | Modulo sorgente | Dettaglio |
|---|---|---|---|
| Creazione commessa | Link → BC | Link (4.3) | OAuth, creare app in ecosistema Microsoft. Formato AALNNNNN |
| Cash flow ricavi | Link → BC | Link (4.8) | Popola Righe Pianificazione Commessa (task RICAVI) |
| Cash flow costi | Link → BC | Link (4.8) | Crea Richieste di Pagamento in stato Pianificato |
| Fatturazione attiva | Link → BC | Link (4.7) | Push template compilato. Codici IVA: ART-000004/5/6/7 |
| Check fatture passive (SDI) | BC → Link | Link (4.6) | Lettura Anteprima Documento Elettronico per codice commessa |
| Check residuo cash flow | BC → Link | Link (4.8) | Verifica che importi non superino il pianificato |
| Suggerimento fornitori | BC → Link | Link (4.4) | Solo nomi fornitori da storico commesse simili, NO costi |

⚠️ **Testare ASAP su commessa standard.** API BC confermata disponibile dalla Resp. Amministrativa.

### Priorità 2 — LinkedIn Scraping

Per LeadMe (1.3, 1.4). Valutare: limiti rate, gestione autenticazione Sales Navigator.

### Priorità 3 — Revolut (Add-on)

Per Link (4.A). Accesso API estratti conto. NB: cambio provider in corso.

---

## FLUSSO END-TO-END DI RIFERIMENTO

Per comprendere come i moduli interagiscono, questo è il flusso tipo di una commessa:

**1. Acquisizione** → LeadMe identifica lead, Sally monitora dormienti

**2. Proposta** → Brief → call su Minutes → Minutes estrae dati COM → Link crea commessa → Resp. Controllo conferma via notifica → push BC → reparti lavorano su PDP (stime macro) + Pitch (Deep Search + materiali) → versione cliente esportata + snapshot su Link

**3. Conversione** → Cliente accetta → commessa "vinta" su Link + Crowd → debrief su Minutes → task estratti → push su Flow → PDP si evolve (costi contrattati) → Sally estrae scadenze da contratti → Budget 2 transita su Link → snapshot → LeadMe riceve status

**4. Esecuzione** → Task su Flow → operativi aggiornano da mobile (Sally formalizza) → procedure embedded nei task tipizzati → richieste pagamento rispettano doppia approvazione BC → Crowd gestisce partecipanti → OnSite durante evento

**5. Chiusura** → Operativo ha 15 giorni → sistema verifica fatture su 2 canali (SDI + non-SDI) → verifica template fatturazione attiva → check quadratura PDP ↔ BC → blocco se incompleto → Sally segnala mancanze → una volta ok → dati finali su Link (dashboard) + BC (consuntivo) → LeadMe riceve chiusura

---

## NOTE PER LA QUOTAZIONE

### Approccio
Per ogni modulo: **quotazione base + add-on opzionali separati** per le funzionalità più costose.

### Add-on identificati
1. **Integrazione Revolut** (Link 4.A) — richiede accesso API estratti conto
2. **Validazione procedurale AI** (Flow 3.A) — Sally verifica procedure su ogni task
3. **Voice mode live** (Sally 5.A) — costo token alto
4. **Modulo Creativo completo - Playground** (Pitch 2.2) — da dettagliare dopo call con creativi

### Budget su Excel
I budget Excel restano in mano agli operativi per il lavoro quotidiano durante il periodo di transizione. NON replicare Excel nel sistema. Il PDP è un'alternativa migliore, non una copia. I tre budget entrano su Link nei momenti definiti sopra.

### Bundle
Sconto bundle se il cliente prende tutte le soluzioni insieme. Da definire in fase commerciale.

### Skill Sally — dove quotarle

| Skill | Quotarla in |
|---|---|
| Check lead dormienti + recap | LeadMe (1.7) |
| Reportistica NLP su dati LeadMe | LeadMe (1.8) |
| Interazione vocale/testo su task | Flow (3.5) |
| Estrazione scadenze da contratti | Flow (3.6) |
| Reportistica NLP su dati Link | Link (4.11) |
| KB procedure + compilazione docs + email-to-action + onboarding | Sally standalone (5.2, 5.6, 5.7) |
| Input non strutturati → PDP | Sally standalone (5.8) |

---

## TABELLA RIEPILOGATIVA OWNERSHIP

Questa tabella chiarisce quale modulo "possiede" ogni funzionalità per evitare doppi conteggi e sovrapposizioni.

| Funzionalità | Proprietario | NON è di |
|---|---|---|
| Compilazione Progress | Link (4.10) | Flow |
| Supervisione stato commesse (direzione) | Link (4.10) | Flow |
| Coordinamento task operativi (chi fa cosa) | Flow (3.2-3.4) | Link |
| Trascrizione task post-meeting | Flow (3.1, riceve da Minutes 7.2) | Minutes |
| Formalizzazione nota vocale → task | Flow (3.5, skill Sally) | Sally standalone |
| Conversione email → azione | Sally standalone (5.7) | Flow |
| Estrazione scadenze contratti → reminder | Flow (3.6, skill Sally) | Sally standalone |
| KB procedure + Q&A | Sally standalone (5.2) | Link |
| Compilazione portali fornitori | Sally standalone (5.6) | Link |
| Dashboard direzionale | Link (4.10) | Flow |
| Cross-check Revolut | Link add-on (4.A) | Sally |
| Apertura commessa (flusso primario) | Link (4.1) via Minutes (7.1) | LeadMe |
| Apertura commessa (alternativa) | LeadMe (1.1) | Link |