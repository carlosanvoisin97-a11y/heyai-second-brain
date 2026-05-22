# Noloop Wave 2 — Processo e Requisiti per Quotazione
**Recap call 19 febbraio 2026 — Carlo, Federico, Simone**

---

## PARTE 1: IL PROCESSO END-TO-END

### 1. Scouting e acquisizione lead

Il commerciale usa LeadMe per trovare prospect. Lo scraper cerca attivamente lead su LinkedIn, li profila e suggerisce un messaggio icebreaker. Sally monitora i lead sui quali ci sono azioni da fare: verifica quelli con un last update inferiore a 3 settimane, controlla se nelle attività ci sono azioni pendenti (una chiamata da fare, un'email da mandare, un messaggio da inviare, una presentazione da spedire) e manda un recap al commerciale di riferimento via email + notifica in-app.

### 2. Ricezione brief e apertura commessa

Arriva il brief dal cliente. Il team fa la prima call di brainstorming (registrata con Minutes). Durante la call emergono budget iniziale dato dal cliente, margine atteso e divisione compiti. Minutes estrae i dati strutturati e triggera la creazione della commessa su **Link** (il gestionale centralizzato). Link a sua volta fa push verso **Business Central** (Dynamics) via API per aprire la COM anche lì.

LeadMe deve ricevere indietro l'informazione che è stato ricevuto il brief, così da tenere aggiornato lo status del lead. L'apertura della commessa può avvenire sia da LeadMe che da Minutes, però il flusso più funzionale è quello che parte da Minutes (dove emergono i dati necessari). Da LeadMe resta comunque disponibile un bottone "crea commessa" per casi in cui la call non passa da Minutes.

### 3. I tre budget

Il processo prevede **tre momenti di budget** distinti:

**Budget 1 — Iniziale (dal cliente)**
Si ottiene dal brief. È il budget che il cliente ha comunicato (es. "abbiamo 50.000€ per questo evento"). Viene catturato da Minutes durante la call di brainstorming e serve per aprire la commessa. Va su Link, che lo porta su Business Central.

**Budget 2 — Previsionale (per la proposta)**
Viene costruito su Excel dal reparto programmazione dopo il lavoro di ricerca location, fornitori, biglietteria. Per i clienti importanti prevede un passaggio di approvazione con Garbarino. Questo è il budget che va nella presentazione al cliente. Deve essere fatto salire su Link.

**Budget 3 — Consuntivo (post-evento)**
Viene costruito su Excel a fine evento, quando tutti i servizi sono stati erogati. Contiene i costi reali con le fatture a supporto. Deve essere fatto salire su Link.

**Come farli transitare a sistema:** il Budget 1 si ottiene semplicemente da Minutes. Per il Budget 2 e il Budget 3, dobbiamo capire il meccanismo più funzionale. Un'opzione è farli passare attraverso Flow per verificare che siano stati caricati i dati corretti, che si siano rispettate le procedure e che — nell'ultimo passaggio (consuntivo) — ci siano anche le fatture rispettive per ogni servizio inserito nel budget. Da definire in fase di design quale approccio sia il migliore.

### 4. Due momenti di esecuzione operativa

**Momento 1 — Preparazione della proposta (pre-accettazione)**
Dopo il brainstorming, i reparti lavorano in parallelo per costruire la presentazione al cliente:
- **Programmazione**: ricerca location, allineamento con biglietteria sui prezzi dei potenziali voli/trasporti, costruzione del budget previsionale → aiutata da **AI Venue Finder**
- **Creativo**: creazione claim, render, materiali visivi → aiutato dal **Modulo Creativo (Pitch)**
- Il **client lead** (tipicamente il commerciale) coordina il tutto

La presentazione viene approvata (per i clienti importanti dalla Garbarino) e inviata al cliente.

**Momento 2 — Messa a terra dell'evento (post-accettazione)**
Il cliente accetta. Si rifà una call (registrata con Minutes) dalla quale escono i task reali per realizzare l'evento. In questa fase:
- **Operativi**: sopralluoghi, contrattazione con fornitori, allestimenti
- **Programmazione + Biglietteria**: acquisto effettivo di biglietti, hotel, location
- **Segreteria**: contatto partecipanti, liste, documenti, form Crowd (separata per GDPR)
- Il **client lead** (in questa fase spesso diventa l'operativo) coordina il tutto

Ogni persona lavora i propri task su **Flow**. Può interagire con Sally via voce/testo per aggiornare i task. Crowd gestisce la parte partecipanti ed è collegato alla stessa commessa su Link.

### 5. Chiusura e validazione

Quando tutti i task sono completati, il client lead chiede la chiusura. Il sistema verifica che tutte le fatture siano state caricate (es. manca la fattura dei bicchieri di cristallo → blocca e chiede di caricarla). Solo dopo la validazione, i dati aggregati salgono su Link. LeadMe riceve indietro l'informazione che la gara è stata vinta / il progetto è chiuso.

Integrazione Revolut: cross-check spese carta aziendale vs commesse associate, alert per spese non collegate a nessuna COM.

### 6. Reportistica (Garbarino)

Garbarino entra su Link e vede: margine previsto vs effettivo, evoluzione budget nel tempo (facing), scostamenti, analisi per cliente/BU/tipo progetto. Sally permette interrogazione in linguaggio naturale.

---

## PARTE 2: SPECCHIETTO REQUISITI PER MODULO

### ⚠️ NOTA IMPORTANTE PER FEDERICO E SIMONE

**Link (gestionale) = solo centralizzatore dati + integratore sistemi + reportistica.** Rispetto alla quotazione iniziale in cui era previsto anche ciclo attivo, ciclo passivo e gestione fornitori: **tutto questo rimane su Business Central**. Link NON gestisce fornitori, anagrafiche fornitori, fatturazione attiva né passiva. Riceve solo i dati aggregati per fare reportistica e fare da ponte tra i vari moduli. Ricalibrate le stime di conseguenza.

---

### 1. LEADME EVOLUTION

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Apertura COM | Esito positivo su lead → possibilità di creare commessa su Link (che pusha su BC via API). Pre-popola campi disponibili, chiede conferma per mancanti (es. margine atteso) | Flusso primario è da Minutes, ma bottone disponibile anche su LeadMe |
| 2 | Ricezione status indietro | LeadMe riceve aggiornamento quando: brief ricevuto, gara vinta, progetto chiuso. Così lo status del lead resta aggiornato | Flusso bidirezionale LeadMe ↔ Link |
| 3 | Scraping attivo lead | Ricerca proattiva quotidiana di nuovi lead su LinkedIn. Commerciale trova lista ogni mattina, conferma/scarta | Scheduled, automatizzato |
| 4 | Scraping Company | Oltre ai lead, scraping dati delle Company (parametri di LeadMe compilati automaticamente) | Stessi parametri attuali |
| 5 | Studio profilo + Icebreaker | Per ogni lead onboardato: analisi profilo LinkedIn + suggerimento messaggio personalizzato | Deep Search via API OpenAI utilizzabile |
| 6 | Gestione naming Company | Alias (stesso soggetto, nome diverso) + Holding (cappello su più company). Interfaccia utente per parametrizzare | Risolve problema Pirelli / Pirelli SPA |
| 7 | Check attività dormienti (Sally) | Sally verifica lead con last update < 3 settimane. Controlla se ci sono azioni pendenti (call, email, messaggio, presentazione). Manda recap al commerciale di riferimento | Notifica in-app + email. Cron job giornaliero |
| 8 | Reportistica NLP (Sally) | Interrogazione linguaggio naturale su dati LeadMe | Skill Sally quotata in LeadMe |

### 2. PITCH (MODULO CREATIVO)

⚠️ **Call di approfondimento da fare prima di quotare nel dettaglio.** In linea di massima avrà due step:

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Analisi brand e mercato | Analisi AI del brief, del sito web del cliente, dei competitor, delle customer personas, del mercato di riferimento. Costruisce un'analisi completa di brand e mercato. Funziona come una Deep Search guidata: chiede conferme prima di agire, poi restituisce il report | Input: brief + fonti web. Output: documento di analisi strutturato |
| 2 | Playground creativo | Sulla base dell'analisi dello step 1, fornisce le linee guida per generare render di allestimento, copy e claim. Collegato a strumenti di image gen. Acquisisce info brand + foto sale → genera output creativi | Da definire con creativi (Ivano Romano / Gianluca Tillari) |

### 3. FLOW (TASK MANAGEMENT SYSTEM)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Ricezione task da Minutes | Minutes crea task strutturati (assegnatario, scadenza, note, priorità). Client lead rivede e conferma → pushati su Flow | Avviene due volte: post-brainstorming (task per presentazione) e post-accettazione (task per evento) |
| 2 | Vista tipo Wrike | Pending / In Progress / Completed / Deferred. Vista per persona e per commessa | Kanban + possibilità Gantt |
| 3 | Task liberi + task tipizzati | Menù dropdown per tipo task (a contesto chiuso). Ai task tipizzati si allegano procedure interne | Tipi task da definire con cliente |
| 4 | Upload file nei task | Immagini, foto, documentazione, fatture caricabili su ogni task | File associati poi visibili su Link |
| 5 | Interazione Sally vocale/testo | "Ho fatto il sopralluogo, allego foto" → Sally identifica task, aggiorna stato, carica file | Skill Sally quotata in Flow |
| 6 | Validazione procedurale (Sally) | Per task tipizzati: Sally confronta avanzamento con procedure aziendali, blocca/segnala se non rispettate | ⚠️ ADD-ON COSTOSO — quotare a parte |
| 7 | Blocco chiusura se dati mancanti | Se client lead tenta di chiudere commessa ma mancano fatture o documenti obbligatori → blocca e segnala cosa manca | Regole di validazione configurabili |
| 8 | Push dati aggregati su Link | Al completamento di tutti i task → dati consolidati salgono su Link | Auto-population del gestionale |
| 9 | Transito budget previsionale e consuntivo | Flow potrebbe essere il veicolo attraverso cui il budget 2 (previsionale) e il budget 3 (consuntivo) transitano verso Link, con verifiche di completezza e correttezza | Da definire il meccanismo esatto in fase di design |

### 4. LINK (GESTIONALE CENTRALIZZATO)

**⚠️ Link NON gestisce: ciclo attivo, ciclo passivo, fornitori, anagrafiche. Tutto questo resta su Business Central.**

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Creazione commessa | Riceve commessa da Minutes (primario) o LeadMe. Struttura: cliente, evento, date, budget iniziale dal cliente, margine atteso | Guscio vuoto che si riempie nel tempo |
| 2 | Integrazione Business Central | Push dati commessa verso BC via API Microsoft (OAuth). Monodirezionale Link → BC | Testare fattibilità su commessa standard ASAP. API BC confermata buona da Elisa Remigi |
| 3 | Ricezione tre budget | Budget 1 (iniziale) da Minutes/LeadMe. Budget 2 (previsionale) e Budget 3 (consuntivo) da Flow o altro meccanismo da definire | Deve tracciare l'evoluzione nel tempo: iniziale → previsionale → consuntivo |
| 4 | Ricezione dati da Flow | Task completati, fatture caricate, costi confermati → alimentano la commessa | Auto-population |
| 5 | Feedback verso LeadMe | Comunica a LeadMe: brief ricevuto, gara vinta, progetto chiuso | Tiene aggiornato lo status commerciale |
| 6 | Dashboard Garbarino (BI) | Margine previsto vs effettivo, facing nel tempo, analisi per cliente/BU/tipo progetto, scostamenti | Sostituisce il Progress Excel |
| 7 | Reportistica NLP (Sally) | "Qual è il margine sulla commessa X? Come si è evoluto?" | Skill Sally quotata in Link |
| 8 | Integrazione Revolut | Cross-check spese carta vs commesse. Alert spese non associate a COM | ⚠️ ADD-ON — quotare a parte. NB: cambio provider in corso, funzionamento simile |

### 5. SALLY (AGENTE VIRTUALE)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Backend dedicato stand-alone | Backend e frontend separati da Link. Funzioni chat migrate da Minutes qui | Deploy indipendente, cambio prompt da env |
| 2 | Knowledge base procedure | Sally conosce procedure aziendali Noloop, risponde come "collega esperto" | Riduce 120 email/settimana di Calajò per supporto procedurale |
| 3 | PWA installabile | Web app installabile su telefono (stile ChatGPT). Voce + testo | NO nativa. Web-based |
| 4 | Notifiche proattive | Sally prende iniziativa: email + notifica in-app per alert, reminder, check periodici | Cron job giornaliero |
| 5 | Skill modulari per ogni app | Funzionalità AI specifiche per LeadMe, Flow, Link → quotate nei rispettivi moduli | Architettura a plugin/skill |
| 6 | Voice mode live (PREMIUM) | Conversazione vocale real-time (stile GPT Voice) | ⚠️ Quotare come opzione premium. Costo token da valutare |

### 6. ONSITE (APP PARTECIPANTI / Crowd Estensione)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | App partecipanti PWA | Social networking, programma personalizzato, chatbot evento | Estensione di Crowd per il durante-evento |
| 2 | Collegamento commessa Crowd | Evento Crowd collegato a commessa Link | Già previsto |
| 3 | Gestione pagamenti Crowd | Sistema pagamenti integrato | Da aggiungere a stima Crowd attuale |

---

## PARTE 3: NOTE PER LA QUOTAZIONE

### Approccio suggerito
Per ogni modulo: **quotazione base** + **add-on opzionali** separati per le funzionalità più costose.

### Elementi da quotare a parte (add-on)
1. **Integrazione Revolut** (Link) — richiede accesso API estratti conto
2. **Validazione procedurale AI** (Flow) — Sally che verifica procedure su ogni task
3. **Voice mode live** (Sally) — costo token alto
4. **Modulo Creativo completo** (Pitch) — da dettagliare dopo call con creativi

### Integrazioni critiche da testare ASAP
- **Business Central (Dynamics) API** — OAuth, creare app in ecosistema Microsoft, testare su commessa standard
- **LinkedIn scraping** — limiti rate, gestione autenticazione Sales Navigator

### Budget su Excel
I budget Excel restano in mano agli operativi per il lavoro quotidiano. NON replicare Excel nel sistema. I tre budget entrano su Link nei momenti definiti sopra. Eventuale evoluzione futura: snapshot giornalieri di fogli SharePoint (esplorativo, non quotare ora).

### Bundle
Sconto bundle se il cliente prende tutte le soluzioni insieme. Da definire in fase commerciale.

### NOT (Noloop On Trade)
Quotazione separata — i due PDF sono già in chat (logistica + vendite). Stimare indipendentemente da Wave 2.