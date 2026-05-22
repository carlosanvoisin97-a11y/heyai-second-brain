# Noloop Wave 2 — Processo e Requisiti per Quotazione
**Recap call 19 febbraio 2026 — Carlo, Federico, Simone**

---

## PARTE 1: IL PROCESSO END-TO-END E CHI FA COSA

### Schema sintetico del flusso

```
LEAD → BRIEF → CALL BRAINSTORMING → TASK OPERATIVI → EVENTO → CHIUSURA → REPORTISTICA
 │        │            │                    │              │         │            │
LeadMe  LeadMe    Minutes → Flow         Flow          Crowd    Flow→Link     Link
        + Link                           + Sally                              + Sally
```

### Step per step

**1. Scouting e acquisizione lead**
Il commerciale usa LeadMe per trovare prospect. Lo scraper cerca attivamente lead su LinkedIn, li profila e suggerisce un messaggio icebreaker. Sally monitora i lead "dormienti" (last update > 3 settimane) e manda un recap al commerciale via email + notifica in-app.

**2. Ricezione brief ed apertura commessa**
Arriva il brief dal cliente. Il team fa la prima call di brainstorming (registrata con Minutes). Durante la call emergono budget, margine, divisione compiti. Minutes estrae i dati strutturati e triggera la creazione della commessa su **Link** (il gestionale). Link a sua volta fa push verso **Business Central** (Dynamics) via API per aprire la COM anche lì. Da questo momento la commessa esiste sia su Link che su BC.

**3. Creazione task dalla call**
Minutes separa gli action item dalla trascrizione e propone i task con assegnatario, scadenza e note. Il PM rivede, corregge (cambio persona, aggiunta date) e conferma. I task vengono pushati su **Flow** (Task Management System), dove ogni persona vede i propri task in vista tipo Wrike (pending, in progress, completed, deferred).

**4. Budgeting (approccio ibrido)**
Il budget RESTA su Excel perché cambia troppo spesso e ogni evento ha un template diverso. Non lo digitalizziamo in fase draft. Ci sono due momenti in cui i dati entrano a sistema:
- **Budget previsionale**: emerge dalla call di brainstorming → Minutes lo cattura → entra su Link all'apertura commessa
- **Budget consuntivo/chiusura**: a fine lavori, i dati certi (fatture, costi confermati) vengono caricati tramite Flow e aggregati su Link

**5. Esecuzione operativa**
Ogni operativo lavora i propri task su Flow. Può interagire con Sally via voce/testo per aggiornare i task ("Ho fatto il sopralluogo, allego foto" → Sally trova il task, lo aggiorna, carica il file). Quando carica una fattura la associa al task. Crowd gestisce la parte partecipanti (form, logistica, GDPR) ed è collegato alla stessa commessa su Link.

**6. Chiusura e validazione**
Quando tutti i task sono completati, il PM chiede la chiusura. Il sistema verifica che tutte le fatture siano state caricate (es. se manca la fattura dei bicchieri di cristallo, blocca e chiede di caricarla). Solo dopo la validazione, i dati aggregati salgono su Link. Integrazione Revolut: cross-check spese carta vs commesse associate, alert per spese non collegate a nessuna COM.

**7. Reportistica (Garbarino)**
Garbarino entra su Link e vede: margine previsto vs effettivo, evoluzione budget nel tempo (facing), scostamenti, analisi per cliente/BU/tipo progetto. Sally permette interrogazione in linguaggio naturale ("qual è il margine sulla commessa X?").

---

## PARTE 2: ARCHITETTURA DEI SISTEMI

```
                    ┌─────────────┐
                    │    SALLY    │  ← Stand-alone + integrata in ogni modulo
                    │  (backend   │     PWA installabile, voce, testo
                    │  dedicato)  │     Knowledge base procedure aziendali
                    └──────┬──────┘
                           │ skill per ogni modulo
        ┌──────────┬───────┼───────┬───────────┐
        │          │       │       │           │
   ┌────┴────┐ ┌───┴───┐ ┌┴────┐ ┌┴─────┐ ┌───┴───┐
   │ LeadMe  │ │Minutes│ │Flow │ │ Link │ │ Crowd │
   │Evolution│ │       │ │(TMS)│ │(Gest)│ │+OnSite│
   └────┬────┘ └───┬───┘ └──┬──┘ └──┬───┘ └───┬───┘
        │          │        │       │         │
        └──────────┴────────┴───┬───┘         │
                                │             │
                         ┌──────┴──────┐      │
                         │  Business   │      │
                         │  Central    │ ←────┘ (commessa linkata)
                         │ (Dynamics)  │
                         └─────────────┘
```

**Decisioni architetturali confermate:**
- **Link** = gestionale centralizzato, riceve dati da tutti gli altri moduli
- **Sally** = backend dedicato, stand-alone, NON dentro Link. Le funzionalità AI dentro i singoli moduli sono "skill" di Sally quotate nel modulo stesso
- **Business Central** = intoccabile, gestisce ciclo attivo/passivo fatture. Link si integra via API (monodirezionale Link → BC confermata fattibile, da testare su commessa standard)
- **Minutes** può triggerare creazione commessa (anche da LeadMe con bottone "crea commessa")
- **Crowd** collegato a Link tramite commessa

---

## PARTE 3: SPECCHIETTO REQUISITI PER MODULO

### 1. LEADME EVOLUTION

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Apertura COM automatica | Esito positivo su lead → crea commessa su Link (che a sua volta pusha su BC via API). Pre-popola i campi disponibili, chiede conferma per quelli mancanti (es. margine atteso) | Integrazione BC = app con auth OAuth in ecosistema Microsoft. Testare su commessa standard il prima possibile |
| 2 | Scraping attivo lead | Ricerca proattiva quotidiana di nuovi lead su LinkedIn. Commerciale si trova lista ogni mattina, conferma/scarta | Come oggi ma automatizzato, scheduled |
| 3 | Scraping Company | Oltre ai lead, scraping dati delle Company (parametri di LeadMe compilati automaticamente) | Stessi parametri attuali |
| 4 | Studio profilo + Icebreaker | Per ogni lead onboardato: analisi profilo LinkedIn + suggerimento messaggio personalizzato | Deep Search via API OpenAI utilizzabile |
| 5 | Gestione naming Company | Alias (stesso soggetto, nome diverso) + Holding (cappello su più company). Interfaccia utente per parametrizzare | Risolve problema Pirelli / Pirelli SPA |
| 6 | Check attività dormienti (Sally) | Sally verifica lead con last update > 3 settimane. Se trova azioni non completate (email, call, messaggio), manda recap al commerciale | Notifica in-app + email (stile LinkedIn). Cron job giornaliero |
| 7 | Reportistica NLP (Sally) | Interrogazione linguaggio naturale su dati LeadMe ("quanti esiti positivi ha Simona?") | Skill Sally quotata in LeadMe |

### 2. PITCH (MODULO CREATIVO)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Analisi brief + cliente | Analisi AI del brief e del cliente per estrarre linee guida creative per la presentazione | Da definire in call dedicata con Simone |
| 2 | Playground generazione render | Collegato a strumenti di image gen (es. Nano/Banana). Acquisisce info brand cliente + foto sale → genera render di allestimento | Da definire requisiti di dettaglio. Call con creativi (Ivano Romano / Gianluca Tillari) necessaria |

⚠️ **Questo modulo richiede approfondimento dedicato** — fare call con Simone + creativi prima di quotare nel dettaglio.

### 3. FLOW (TASK MANAGEMENT SYSTEM)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Ricezione task da Minutes | Minutes crea task strutturati (assegnatario, scadenza, note, priorità). PM rivede e conferma. Task pushati su Flow | Integrazione Minutes → Flow |
| 2 | Vista tipo Wrike | Pending / In Progress / Completed / Deferred. Vista per persona e per commessa | Kanban + possibilità Gantt |
| 3 | Task liberi + task tipizzati | Menù dropdown per tipo task (a contesto chiuso). Ai task tipizzati si allegano procedure interne | Tipi task da definire con cliente |
| 4 | Upload file nei task | Immagini, foto, documentazione, fatture caricabili su ogni task | File associati poi visibili su Link |
| 5 | Interazione Sally vocale/testo | "Ho fatto il sopralluogo, allego foto" → Sally identifica task, aggiorna stato, carica file | Skill Sally quotata in Flow |
| 6 | Validazione procedurale (Sally) | Per task tipizzati: Sally confronta l'avanzamento con le procedure aziendali e blocca/segnala se non rispettate | ⚠️ ADD-ON COSTOSO — quotare a parte come opzione |
| 7 | Blocco chiusura se dati mancanti | Se PM tenta di chiudere una commessa ma mancano fatture o documenti obbligatori → sistema blocca e segnala cosa manca | Regole di validazione configurabili |
| 8 | Push dati aggregati su Link | Al completamento di tutti i task → dati consolidati (costi, fatture, tempistiche) salgono automaticamente su Link | Auto-population del gestionale |

### 4. LINK (GESTIONALE / ex-Tally)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Creazione commessa | Riceve commessa da LeadMe o Minutes. Struttura: cliente, evento, date, budget previsionale, margine atteso | Guscio vuoto che si riempie nel tempo |
| 2 | Integrazione Business Central | Push dati commessa verso BC via API Microsoft (OAuth). Monodirezionale Link → BC. BC rimane master contabile | Testare fattibilità su commessa standard prima di tutto. Elisa Remigi conferma API buone in ricezione e trasmissione |
| 3 | Ricezione dati da Flow | Task completati, fatture caricate, costi confermati → alimentano la commessa su Link | Auto-population |
| 4 | Dashboard Garbarino (BI) | Margine previsto vs effettivo, facing nel tempo, analisi per cliente/BU/tipo progetto, scostamenti | Reportistica che sostituisce il Progress Excel |
| 5 | Reportistica NLP (Sally) | "Qual è il margine sulla commessa X? Come si è evoluto?" | Skill Sally quotata in Link |
| 6 | Integrazione Revolut | Cross-check spese carta aziendale vs commesse. Alert per spese non associate a nessuna COM | ⚠️ ADD-ON COSTOSO — quotare a parte. NB: stanno cambiando provider da Revolut, ma funzionamento simile |

### 5. SALLY (AGENTE VIRTUALE)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Backend dedicato stand-alone | Backend e frontend separati da Link. Tutte le funzioni chat (attualmente in Minutes) migrate qui | Deploy indipendente, cambio prompt da env senza redeploy |
| 2 | Knowledge base procedure | Sally conosce tutte le procedure aziendali Noloop e risponde come "collega esperto" | Riduce 120 email/settimana di Calajò |
| 3 | PWA installabile | Web app installabile su telefono (stile ChatGPT desktop). Voce + testo | NO app nativa. Web-based con service worker |
| 4 | Sistema notifiche proattivo | Sally prende l'iniziativa: scrive email + notifica in-app per alert, reminder, check periodici | Cron job + template email. "Panico" come dice Fede |
| 5 | Skill modulari per ogni app | Funzionalità AI specifiche per LeadMe, Flow, Link quotate nei rispettivi moduli. Sally è il motore | Architettura a plugin/skill |
| 6 | Voice mode live (PREMIUM) | Modalità conversazione vocale real-time (stile GPT Voice) | ⚠️ Quotare come opzione premium. Costo token alto da valutare |

### 6. ONSITE (APP PARTECIPANTI / Crowd Estensione)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | App partecipanti PWA | Social networking, programma personalizzato, chatbot evento | Estensione di Crowd per il durante-evento |
| 2 | Collegamento commessa Crowd | Quando si crea evento su Crowd, si seleziona commessa Link | Già previsto |
| 3 | Gestione pagamenti su Crowd | Sistema pagamenti integrato nella piattaforma Crowd | Da aggiungere a stima Crowd attuale |

---

## PARTE 4: NOTE PER LA QUOTAZIONE

### Approccio suggerito
Per ogni modulo: **quotazione base** + **add-on opzionali** separati per le funzionalità più costose.

### Elementi da quotare a parte (add-on)
1. **Integrazione Revolut** (Link) — richiede accesso API estratti conto
2. **Validazione procedurale AI** (Flow) — Sally che verifica procedure su ogni task
3. **Voice mode live** (Sally) — costo token alto, da prezzare separatamente
4. **Modulo Creativo completo** (Pitch) — da dettagliare dopo call con creativi

### Integrazioni critiche da testare ASAP
- **Business Central (Dynamics) API** — OAuth, creare app in ecosistema Microsoft, testare su commessa standard
- **LinkedIn scraping** — limiti rate, gestione autenticazione Sales Navigator

### Nota sui budget
I budget Excel restano in mano agli operativi. NON replicare Excel nel sistema. Solo i dati certi (previsionale dalla call + consuntivo con fatture) entrano su Link. Eventuale evoluzione futura: snapshot giornalieri di fogli SharePoint per tracciare evoluzione budget nel tempo (esplorativo, non quotare ora).

### Bundle
Sconto bundle se il cliente prende tutte le soluzioni insieme. Da definire in fase commerciale.

### NOT (Noloop On Trade)
Quotazione separata — i due PDF sono già in chat (logistica + vendite). Stimare indipendentemente da Wave 2.