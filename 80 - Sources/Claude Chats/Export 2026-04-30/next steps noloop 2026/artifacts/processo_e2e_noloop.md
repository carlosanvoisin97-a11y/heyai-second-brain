# NOLOOP — Processo Operativo End-to-End

## Mappatura completa con ecosistema digitale di supporto

*Documento basato sulle interviste con L. Cavecchi (02/02/2026), L. Zaghi (05/02/2026), A. Cichello, M. Merli e sulla documentazione di progetto Wave 1 e Wave 2.*

---

## LEGENDA STATO STRUMENTI

| Simbolo | Significato |
|---------|-------------|
| 🟢 | **Consegnato / Operativo** — già in uso o completato |
| 🟡 | **In lavorazione** — sviluppo avviato, non ancora rilasciato |
| 🔵 | **Proposto** — da presentare/approvare nella Wave 2 |
| ⚪ | **Esterno / Pre-esistente** — tool di terze parti già in uso |

---

## PANORAMICA REPARTI E RESPONSABILITÀ

Prima di entrare nel processo, è fondamentale chiarire la struttura organizzativa emersa dalle interviste, perché differisce dalla terminologia standard di settore.

| Reparto | Responsabile | Funzione effettiva |
|---------|-------------|-------------------|
| **Commerciale (New Business)** | Laura Zaghi | Scouting lead, gestione gare, supervisione commessa, fatturazione, compilazione Progress. I commerciali sono i "capi commessa" |
| **Programmazione** | Antonella Osmetti | Ricerca destinazioni/location, creazione programma viaggio, costruzione budget su Excel, contrattazione iniziale fornitori (hotel, charter) |
| **PM/TM (Comunicazione)** | [vacante — Sara Bortolussi in maternità] | Scenotecnica, allestimenti sala plenaria, render 3D. NON sono project manager cross-funzionali |
| **Creativo** | Ivano Romano | Claim, loghi, design, materiali visivi per gare e convention |
| **Operativi** | Leandro Cuzzocrea (resp.) / Lorena Cavecchi (supervisione) | Logistica post-conferma: conferma fornitori, contrattazione hotel/transfer, sopralluoghi, acquisti |
| **Segreteria** | Lorena Cavecchi (supervisione) / Arianna | Contatto partecipanti, raccolta liste, gestione documenti (passaporti, visti), form iscrizione |
| **Biglietteria** | Lorena Cavecchi (supervisione) | Acquisto biglietti aerei, treni, gestione ticketing |
| **Amministrazione** | Roberta Calaiò | Cash flow, pagamenti, gestione finanziaria |
| **Direzione** | Laura Garbarino (GM) / Paolo Donzelli | Approvazione budget/programmi top client, revisione finale Progress |
| **Qualità/Compliance** | Marco Merli | Policy aziendali, documentazione DUVRI/POS, sicurezza eventi, compilazione moduli gare |

---

## FASE 1 — ACQUISIZIONE (Scouting e Primo Contatto)

### Cosa accade oggi

Il team New Business identifica potenziali clienti attraverso due canali:

- **Clienti fidelizzati:** relazione già esistente; il cliente contatta Noloop direttamente per un nuovo progetto (affidamento diretto o gara)
- **New Business:** il team (Simona Marani, Luca Candiani, Matteo Cosma) cerca attivamente nuovi prospect

Per il New Business, il flusso è:
1. **Ricerca su LinkedIn Sales Navigator** — identificazione di profili rilevanti (responsabili marketing, eventi, HR delle aziende target)
2. **Studio del profilo** — analisi approfondita: l'azienda fa eventi? Ha una divisione interna? Si rivolge a fornitori esterni? (es. Boston Consulting Group ha divisione interna, ma per convention grandi si rivolge all'esterno). **Questo è il passaggio più time-consuming della fase pre** (confermato da Zaghi)
3. **Primo contatto** — messaggio di apertura su LinkedIn o email. La scrittura del messaggio in sé è rapida ("sappiamo come rivolgerci"), ma lo studio preparatorio no
4. **Follow-up e nurturing** — interazioni successive, invio della presentazione aziendale standard con case history
5. **Qualificazione** — il lead viene tracciato con status (nuovo, in corso, positivo, negativo)

### Chi se ne occupa

| Persona | Ruolo |
|---------|-------|
| Simona Marani | Scouting New Business (solo fase pre; non ha ancora portato lead a conversione) |
| Luca Candiani | Commerciale gestione completa (pre + durante + chiusura) |
| Barbara Bresciani | Commerciale gestione completa |
| Matteo Cosma | Nuovo ingresso, in onboarding (formato da Simona su LeadMe) |
| Laura Zaghi | Supervisione + gestione diretta solo grandi clienti |

### Strumenti digitali

| Strumento | Stato | Funzione in questa fase |
|-----------|-------|------------------------|
| **LinkedIn Sales Navigator** | ⚪ Pre-esistente | Ricerca e identificazione prospect |
| **LeadMe** | 🟢 Operativo | Importazione dati da LinkedIn (scraper), qualificazione lead, tracciamento interazioni, rilevamento cambi ruolo/azienda ogni 15gg, dashboard lead con metriche |
| **LeadMe Evolution — AI Scouting** | 🔵 Proposto | Ricerca automatica di nuovi prospect tramite AI: analisi profili LinkedIn per identificare aziende che fanno eventi corporate, verifica se hanno divisione interna, suggerimento contatti prioritari. **Forte interesse di Zaghi** ("lo studio sì, perde un sacco di tempo capire se fanno o non fanno") |
| **LeadMe Evolution — AI Messaging** | 🔵 Proposto | Generazione messaggi personalizzati per il primo contatto, basati su profilo LinkedIn + storico interazioni + posizionamento Noloop. Valutato come nice-to-have da Zaghi ("potrebbe aiutare, non è fondamentale") |
| **LeadMe Evolution — Lead Scoring** | 🔵 Proposto | Classificazione automatica caldo/tiepido/freddo basata su frequenza interazioni, settore, dimensione azienda |
| **Minutes** | 🟡 In lavorazione | Trascrizione e minute delle call esplorative con prospect |

### Note operative

- Il **99,9% dei clienti** fa gara (confermato sia da Cavecchi che da Zaghi); il prezzo è il fattore decisivo
- Sui clienti **fidelizzati** a volte c'è **affidamento diretto** (nel Progress è segnato come tale)
- Simona Marani non è ancora arrivata alla fase di gestione; Zaghi valuta se farla evolvere (se passa alla gestione, si ferma il New Business)
- Il **budget indicativo** e la **marginalità attesa** vengono stimati già in questa fase (15% fidelizzati, 10% New Business, 5% mini meeting)

---

## FASE 2 — PROPOSTA (Brief, Programmazione e Gara)

### Cosa accade oggi

Quando un prospect manifesta interesse concreto (o un fidelizzato invia un brief), si attiva la macchina della proposta:

1. **Ricezione del brief** — sempre dal cliente; Noloop non propone mai senza brief (confermato da Cavecchi)
2. **Apertura della COM** — il commerciale apre la commessa **via email a Calaiò**; contiene: tipo (gara/affidamento diretto/New Business), budget indicativo, marginalità indicativa, responsabile commerciale. La COM entra in un **sistema di cash flow** [dettagli tecnici da verificare con Calaiò]
3. **Programmazione** — Osmetti ricerca destinazioni e location, crea il programma viaggio, sviluppa il **budget su Excel** con tutte le specifiche del brief. Include: contrattazione iniziale con hotel (es. "siamo in 100, ho bloccato 90 camere, 10 in opzione"), charter, fornitori logistici
4. **Reparto Creativo** (se coinvolto) — per convention e eventi grandi: Ivano Romano e il team elaborano claim, loghi, render 3D per allestimenti sala. Il livello di sforzo creativo dipende dal brief: a volte puramente esecutivo (messa in pianta tecnica), a volte concept completo da zero
5. **Costruzione preventivo** — Excel multi-sezione: comunicazione + logistica per ogni tappa + recap totale. Costi raccolti da fornitori specifici (es. Gallerie d'Italia per spazi, service audio/video/luci) + quotazioni note (tour leader) + fee cliente-specifica
6. **Presentazione al cliente** — le due parti (programmazione + comunicazione) vengono unite o tenute separate a seconda della gara
7. **Approvazione Garbarino** — il budget e il programma dei top client vengono approvati da Garbarino prima dell'invio al cliente

### Chi se ne occupa

| Persona | Attività |
|---------|----------|
| Commerciale di riferimento | Riceve brief, apre COM, coordina, supervisiona budget |
| Antonella Osmetti | Programmazione: ricerca destinazioni, budget Excel, contrattazione iniziale fornitori |
| Ivano Romano + team | Reparto creativo: claim, render, materiali visivi (se convention) |
| PM/TM | Scenotecnica e allestimenti sala (se convention) |
| Laura Garbarino | Approvazione budget/programma top client |

### Strumenti digitali

| Strumento | Stato | Funzione in questa fase |
|-----------|-------|------------------------|
| **AI Venue Finder** | 🟢 Operativo (Gem Gemini) | Ricerca venue, ristoranti, trasporti, attività extra; analisi brief; export tabellare; bozza presentazione. Utilizzato dalla Programmazione per accelerare la ricerca destinazioni |
| **Excel** | ⚪ Pre-esistente | Budget di commessa. **Resta su Excel** (confermato da Cavecchi e Zaghi): ogni evento ha formato diverso, spesso il cliente fornisce il proprio template, i budget contengono formule reali |
| **Modulo Reparto Creativo — Pitch (Analisi Strategica)** | 🔵 Proposto | Analisi automatica del brief, posizionamento cliente, trend di mercato, benchmark competitor, storico comunicazioni cliente → output: report strategico con insights e raccomandazioni per la gara |
| **Modulo Reparto Creativo — Generazione Contenuti** | 🔵 Proposto | Mockup, post-produzione render, video teaser, adattamento formati per diversi canali. Accelera la produzione di materiali visivi per le gare |
| **Minutes** | 🟡 In lavorazione | Trascrizione call di allineamento interne (commerciale + programmazione + creativo) e call con il cliente |
| **LeadMe Evolution — CRM (Opportunità)** | 🔵 Proposto | Creazione dell'Opportunità come entità madre: pipeline visiva, tracking trattativa, definizione del Piano di Produzione (PDP) con budget, voci costo, risorse previste. Il CRM diventa il punto di partenza di tutto il flusso downstream |

### Note operative

- Il **preventivo interno** è un work in progress con avanzamenti (1, 2, 3... fino a chiusura); va aggiornato se cambiano destinazione, numeri, servizi
- Quando il brief è completo, la Programmazione può già firmare contratti (es. hotel) che vengono poi passati all'operativo nel "passaggio pratica"
- Per eventi complessi e grandi viene creato un **Gantt su Excel** sia per comunicazione che per logistica
- Osmetti ha escluso la ricerca prezzi da tool AI: i prezzi negoziati con fornitori (es. tariffe gruppo hotel) non corrispondono ai prezzi online

---

## FASE 3 — CONVERSIONE (Conferma e Apertura Commessa Operativa)

### Cosa accade oggi

Se Noloop vince la gara (o riceve l'affidamento diretto):

1. **Comunicazione esito** — il commerciale comunica "gara vinta, confermiamo la COM" (oppure "gara persa, cancellare la COM")
2. **Inserimento modalità pagamento** — vengono aggiunte nella COM le condizioni di pagamento del cliente; senza queste informazioni l'operativo non può procedere con i pagamenti fornitori
3. **Inserimento budget nel Progress** — Zaghi inserisce nel Progress il **budget di apertura** (il più basso in assoluto) con la marginalità stimata. Lo fa per **tutte** le COM aziendali
4. **Passaggio pratica** — Osmetti prepara il dossier di passaggio dalla Programmazione all'Operativo. Include: programma confermato, contratti già firmati (hotel, charter), specifiche operative. Il passaggio avviene via email + call/incontro per discutere criticità
5. **Assegnazione operativo** — Leandro Cuzzocrea decide quale operativo assegnare alla commessa (unico momento di attesa nel processo, per Zaghi)
6. **Presentazione al cliente** — l'operativo viene presentato al cliente; da quel momento il cliente ha a che fare direttamente con l'operativo per hotel, voli, transfer
7. **Attivazione altri reparti** — se necessario: segreteria (partecipanti), biglietteria (ticketing), PM/TM (se c'è componente comunicazione/allestimento)

### Chi se ne occupa

| Persona | Attività |
|---------|----------|
| Commerciale | Comunica esito, inserisce dati pagamento, aggiorna Progress |
| Laura Zaghi | Compila il Progress per TUTTE le COM (apertura, aggiornamenti, chiusura) |
| Antonella Osmetti | Prepara il passaggio pratica |
| Leandro Cuzzocrea | Assegna l'operativo |
| Roberta Calaiò | Riceve la COM via email per il sistema cash flow |

### Strumenti digitali

| Strumento | Stato | Funzione in questa fase |
|-----------|-------|------------------------|
| **Email** | ⚪ Pre-esistente | Comunicazione esito gara, passaggio pratica, notifica a Calaiò |
| **Excel (Progress)** | ⚪ Pre-esistente | Zaghi inserisce budget apertura + marginalità per tutte le COM. **Principale pain point**: "tantissimo tempo", "da impazzire", devo ricercare informazioni, contattare commerciali, ricostruire marginalità |
| **LeadMe Evolution — CRM** | 🔵 Proposto | Conversione lead → cliente; creazione Opportunità che genera automaticamente: Commessa su Tally + istanza evento su Crowd + task iniziali su Task Management. Eliminazione della email a Calaiò e della duplicazione manuale dati |
| **Tally (Gestionale)** | 🔵 Proposto | Ricezione automatica della commessa dal CRM con PDP (budget, voci macro, risorse previste). Tracciamento avanzamento, versionamento automatico |

### Note operative

- La COM si apre **al brief** (non alla conferma) — chiarito da Zaghi
- Il "passaggio pratica" è uno dei momenti più delicati: l'operativo eredita contratti, accordi e specifiche dalla Programmazione
- Il commerciale rimane **supervisore/capo commessa** anche dopo il passaggio all'operativo: "il detentore del budget e la supervisione è da parte del commerciale"
- Garbarino approva budget/programma solo per top client; "avrà accesso al sistema ma non lo userà" — preferisce contatto diretto con i responsabili (confermato da Cavecchi)

---

## FASE 4 — ESECUZIONE (Gestione Operativa dell'Evento)

### Cosa accade oggi

Questa è la fase più lunga e articolata, dove più reparti lavorano in parallelo:

#### 4A. Operativi (sempre coinvolti)
1. **Conferma fornitori** — l'operativo riprende le contrattazioni iniziate dalla Programmazione e le conferma/negozia
2. **Contrattazione hotel/transfer** — conferma camere, tariffe gruppo, condizioni di cancellazione
3. **Sopralluoghi** — site inspection presso le location
4. **Acquisti** — ordini a fornitori per tutti i servizi logistici (catering, trasporti, attività, materiali)
5. **Aggiornamento preventivo** — ogni acquisto/variazione aggiorna il preventivo interno (avanzamento 1, 2, 3...)

#### 4B. Segreteria (quasi sempre coinvolta)
1. **Contatto partecipanti** — raccolta liste presenze dal cliente
2. **Raccolta documenti** — passaporti, visti, requisiti specifici per destinazione
3. **Creazione form iscrizione** — su Crowd (piattaforma di gestione eventi)
4. **Gestione comunicazioni** — email e WhatsApp ai partecipanti

#### 4C. Biglietteria (se necessaria)
1. **Acquisto biglietti aerei/treni** — per tutti i partecipanti
2. **Gestione variazioni** — cambi nome, date, rotte
3. **Fatture fornitori** — raccolta documentazione acquisti

#### 4D. PM/TM + Creativo (se convention/evento complesso)
1. **Allestimento sala** — progettazione scenotecnica, render 3D
2. **Produzione materiali** — coordinamento grafico (programma viaggio, segnaletica bus, merchandising personalizzato)
3. **Gestione timeline creativa** — per eventi complessi, Gantt dedicato

#### Coordinamento
- L'operativo è il punto di raccordo con il cliente per la logistica
- Il commerciale supervisiona e mantiene il controllo del budget
- Lorena Cavecchi supervisiona operativi, segreteria e biglietteria; necessita di **visibilità completa** su tutti i task di tutti e tre i reparti
- **Problema attuale:** nessun sistema centralizzato di task; coordinamento via email, call, scambi informali

### Chi se ne occupa

| Reparto | Persone | Attività chiave |
|---------|---------|----------------|
| Operativi | Assegnato da Cuzzocrea | Fornitori, hotel, transfer, sopralluoghi, acquisti |
| Segreteria | Arianna + team | Partecipanti, documenti, form, comunicazioni |
| Biglietteria | Team dedicato | Ticketing aereo/ferroviario |
| PM/TM | Sara Bortolussi (maternità) / altri | Scenotecnica, render 3D, allestimenti |
| Creativo | Ivano Romano + team | Claim, loghi, materiali grafici |
| Commerciale | Riferimento commessa | Supervisione, decisioni budget, interfaccia cliente strategico |
| Lorena Cavecchi | Supervisione 3 reparti | Vista d'insieme su operativi + segreteria + biglietteria |

### Strumenti digitali

| Strumento | Stato | Funzione in questa fase |
|-----------|-------|------------------------|
| **Crowd** | 🟡 In lavorazione | Gestione partecipanti: form builder brandizzati, database centralizzato, motore di grouping (hotel/voli/attività), comunicazioni WhatsApp/email, dashboard monitoraggio iscrizioni |
| **Excel** | ⚪ Pre-esistente | Preventivo interno (avanzamenti), Gantt (per eventi complessi) |
| **Task Management System (Flow)** | 🔵 Proposto | Creazione e assegnazione task per reparto; scadenze e milestone; dipendenze tra task; vista Kanban (pending/completato/in hold/cancellato); notifiche automatiche; upload documenti e fatture su ogni task; vista admin per Lorena su tutti e 3 i reparti; vista individuale per singolo operativo; **generazione automatica task da AI** a partire dal brief + info commessa, splittati per reparto e assegnati alle persone di riferimento |
| **Task Management — Gantt AI** | 🔵 Proposto | Generazione automatica del Gantt di progetto dall'AI, basato su brief, data evento e tempistiche standard Noloop. Sostituisce il Gantt Excel manuale. **Forte interesse di Zaghi**: "viene creato un Gantt sia della parte di comunicazione che di logistica su Excel" |
| **Tally — Fornitori/Acquisti** | 🔵 Proposto | Anagrafica fornitori, ordini di acquisto collegati a commessa, workflow approvazioni, tracking ordini, matching automatico fattura → ordine → commessa. Quando l'operativo completa un task di acquisto e carica la fattura, il dato sale nella commessa digitale |
| **AI Event Companion** | 🔵 Proposto | App PWA per partecipanti durante l'evento: agenda personale, notifiche push, chatbot FAQ (logistica, orari, wifi, dress code), mappe venue, networking, feedback live. **Lorena Cavecchi è scettica sull'impatto**: "durante gli eventi il contatto fisico è fondamentale", i partecipanti preferiscono il desk/hostess. Classificato come **nice-to-have**, non priorità |
| **Minutes** | 🟡 In lavorazione | Trascrizione call operative interne e con il cliente; genera minute e action item che confluiscono nella commessa digitale |
| **Sally** | 🔵 Proposto | Assistente AI accessibile da tutti i reparti: ricerca documenti, consultazione procedure, risposte immediate. In-context dentro gli altri applicativi |

### Note operative

- I reparti sono **silos verticali specializzati**, non generalisti; ogni reparto fa la sua parte senza sovrapposizioni
- Il commerciale **approva le spese** operative, non i PM (chiarito da Cavecchi)
- L'evento è prevalentemente **fisico on-site**; il lavoro digitale è preparatorio
- Lorena necessita di una **vista workload** per persona e date evento, per allocare le risorse
- I task completati (es. acquisto biglietti) devono alimentare automaticamente il preventivo → questo è il bridge verso la compilazione automatica del Progress
- Attualmente i commerciali aggiornano solo il preventivo cliente, non l'interno → Zaghi a volte non sa delle variazioni last minute

---

## FASE 5 — CHIUSURA (Consuntivo, Progress e Fatturazione)

### Cosa accade oggi

Al termine dell'evento:

1. **Raccolta dati di chiusura** — ogni reparto deve comunicare i consuntivi: quanto speso per ogni voce, variazioni rispetto al budget
2. **Chiusura preventivo** — il commerciale aggiorna il preventivo interno all'ultima versione (chiusura) con i costi effettivi
3. **Compilazione Progress** — Laura Zaghi aggiorna il Progress per ogni COM:
   - Verifica budget di apertura (era il più basso stimato)
   - Se la destinazione è cambiata, aggiorna anche l'apertura
   - Inserisce il **budget di chiusura** con marginalità effettiva
   - Aggiorna lo status della COM
   - **Lo fa per TUTTE le COM** aziendali, non solo le proprie
4. **Revisione Garbarino** — la GM accede al Progress e verifica costi, margini, scostamenti
5. **Fatturazione** — il commerciale è responsabile della fatturazione al cliente e degli incassi

### Pain point principali (emersi dalle interviste)

- **Zaghi**: "Tantissimo tempo", "da impazzire" — deve ricostruire informazioni da email, contattare commerciali per conferme, cercare preventivi aggiornati
- **Zaghi**: "Poi cambia lo status, insomma io lo faccio di tutte le pratiche"
- **Zaghi**: Le variazioni last minute decise tra commerciale e Garbarino a volte non le vengono comunicate; "tutti gli interni aggiornano solo quello del cliente"
- **Cavecchi**: "Fa perdere a tutti un sacco di tempo" — confermato come bottleneck principale anche dalla prospettiva operativa
- **Cavecchi**: Il Progress deve mostrare sia il **totale** che il **breakdown per reparto** (PM/TM, biglietteria, operativi inseriscono budget; la segreteria no)

### Chi se ne occupa

| Persona | Attività |
|---------|----------|
| Laura Zaghi | Compilazione Progress per TUTTE le COM (apertura → aggiornamenti → chiusura) |
| Commerciale di riferimento | Chiusura preventivo, fatturazione, incassi |
| Laura Garbarino | Revisione finale Progress, controllo margini |
| Roberta Calaiò | Gestione finanziaria, pagamenti fornitori |

### Strumenti digitali

| Strumento | Stato | Funzione in questa fase |
|-----------|-------|------------------------|
| **Excel (Progress)** | ⚪ Pre-esistente | File aggregato con tutte le COM: budget apertura, budget chiusura, marginalità, status. Compilato manualmente da Zaghi |
| **Excel (Preventivo)** | ⚪ Pre-esistente | Preventivo interno con avanzamenti fino a chiusura |
| **Tally (Gestionale) — Core** | 🔵 Proposto | **Compilazione automatica del Progress**: quando la commessa è chiusa, i dati (costi effettivi per voce, marginalità, scostamenti) confluiscono nel Progress digitale. Zaghi non deve più ricostruire le informazioni perché ogni reparto ha inserito i propri dati durante la fase di esecuzione |
| **Tally — BI/Analytics** | 🔵 Proposto | Dashboard interattive per Garbarino: KPI real-time su marginalità, redditività per cliente/servizio, comparazione preventivo vs consuntivo. Query in linguaggio naturale (backend per Sally): "qual è la marginalità media del Q1?" |
| **Tally — Fatturazione** | 🔵 Proposto | Fatturazione attiva (verso clienti) e passiva (fornitori), scadenzario, export contabile |
| **LeadMe Evolution — CRM** | 🔵 Proposto | Chiusura dell'Opportunità; storico servizi erogati per cliente; dati post-vendita per gestione relazione futura |
| **Crowd** | 🟡 In lavorazione | Consolidamento dati partecipazione e feedback → confluiscono nel Gestionale |

### Il "sogno" della chiusura automatica

Dalla sintesi delle interviste, il flusso ideale sarebbe:

1. Durante l'esecuzione, ogni task completato su **Flow** (Task Management) include: costo effettivo, fornitore, fattura
2. Questi dati confluiscono nella **commessa digitale** su Tally
3. A chiusura evento, il commerciale clicca "chiudi commessa" → l'AI prepara un **preventivo pre-popolato** al 70-80% (stima di Carlo)
4. Il commerciale rivede, corregge e dà l'OK
5. I dati necessari al Progress vengono **trasferiti automaticamente** → Zaghi deve solo controllare, non ricostruire
6. Garbarino apre il **Progress digitale** e vede tutto; se vuole un dettaglio, chiede a Sally

---

## STRUMENTI TRASVERSALI (Tutte le Fasi)

Questi strumenti non appartengono a una singola fase ma supportano l'intero ciclo:

### Minutes — Meeting Assistant AI 🟡 In lavorazione

- **Funzione:** trascrizione automatica di call interne e con il cliente; generazione minute strutturate, decisioni, action item
- **Dove interviene:** tutte le fasi — call esplorative con prospect, allineamenti interni, riunioni di progetto, debrief post-evento
- **Beneficio chiave:** le trascrizioni confluiscono nella commessa digitale, costruendo una base di conoscenza progressiva che l'AI può interrogare
- **Stato:** in sviluppo, già dimostrato internamente (portale ecosistema)

### Sally — Agente Virtuale 360° 🔵 Proposto

- **Funzione:** assistente AI conversazionale accessibile dalla top bar dell'ecosistema o in-context dentro ogni applicativo
- **Dove interviene:** tutte le fasi, tutti i reparti
- **Casi d'uso emersi dalle interviste:**
  - Ricerca documenti aziendali, policy, procedure (caso d'uso Merli: compilazione automatica moduli gare, DUVRI, POS)
  - Query sui sistemi: "qual è il budget attuale della COM 123?" → interroga Tally
  - Query sui lead: "quanti lead ha Simona con status positivo?" → interroga LeadMe
  - Onboarding nuovi assunti
  - Supporto alla compilazione documentazione di sicurezza eventi (reparto esterno contrattualizzato)
- **Principio architetturale:** Sally è l'unico agente conversazionale; i moduli NLP di LeadMe e Tally sono backend per Sally
- **Nota Merli:** la knowledge base è già stata preparata (cartella server depurata da dati privacy); preferisce che Sally legga direttamente dalla cartella server, non via email

---

## RIEPILOGO ECOSISTEMA DIGITALE

### Wave 1 — Consegnate / In Lavorazione

| Soluzione | Stato | Funzione |
|-----------|-------|----------|
| **Ecosistema AI Noloop** | 🟢 Completato | Infrastruttura base: portale, autenticazione, permessi, server dedicato |
| **LeadMe** | 🟢 Operativo | Gestione lead, scraper LinkedIn, activity logging, gestione vacancies, ricerca avanzata |
| **AI Venue Finder** | 🟢 Operativo (Gem Gemini) | Ricerca venue, ristoranti, trasporti, attività; export tabellare; bozza presentazione |
| **Crowd** | 🟡 In sviluppo | Gestione partecipanti, form builder, grouping, comunicazioni WhatsApp/email |
| **Minutes** | 🟡 In sviluppo | Trascrizione call, minute automatiche, action item |
| **Analisi Dati Progress** | 🟡 On Hold | Dashboard KPI su Progress Excel attuale — funzionalità confluiranno in Tally |

### Wave 2 — Proposte

| Soluzione | Funzione | Priorità (dalle interviste) |
|-----------|----------|-----------------------------|
| **Tally (Gestionale)** | Commesse, BI, Fornitori/Acquisti, Fatturazione, Progress digitale | ⭐ ALTISSIMA — risolve il pain point #1 (Progress) |
| **Task Management (Flow)** | Task operativi, assegnazione per reparto, vista admin Lorena, Gantt AI | ⭐ ALTA — validato con entusiasmo da Cavecchi e Zaghi |
| **LeadMe Evolution (CRM)** | Opportunità, pipeline, PDP, bridge verso Tally/Task/Crowd | ⭐ ALTA — è il "master" dell'intero flusso downstream |
| **Sally** | Agente virtuale 360°, front-end AI unificato | MEDIA — dipende da tutti gli altri moduli |
| **Modulo Reparto Creativo** | Analisi strategica gare, generazione contenuti multimediali | MEDIA — accelera le gare ma non risolve bottleneck operativi |
| **AI Event Companion** | App partecipanti, chatbot, networking | BASSA — Cavecchi scettica; "contatto fisico fondamentale" |

---

## FLUSSO DATI TRA I SISTEMI (Target)

```
LinkedIn SN → LeadMe → [Lead qualificato]
                            ↓
                    LeadMe Evolution (CRM)
                    [Opportunità + PDP]
                            ↓
              ┌─────────────┼─────────────┐
              ↓             ↓             ↓
           Tally         Flow          Crowd
         [Commessa]   [Task per      [Evento +
                       reparto]     Partecipanti]
              ↓             ↓             ↓
              ↓        Task completati    ↓
              ↓        + fatture + costi  ↓
              ↓             ↓             ↓
              ←─────────────┘             ↓
              ↓                           ↓
         Tally [Consuntivo]          Crowd [Feedback
              ↓                     + Partecipazione]
              ↓                           ↓
         Progress Digitale ←──────────────┘
              ↓
         Garbarino / Sally (Query BI)
```

**Sally** è il layer trasversale: interroga tutti i sistemi in linguaggio naturale.

**Minutes** è il collettore di contesto: ogni call trascritta arricchisce la commessa digitale.

---

## DELTA TRA PROPOSTA INIZIALE (SLIDE E2E) E REALTÀ EMERSA

Dalle interviste sono emerse alcune differenze importanti rispetto alla slide E2E presentata inizialmente:

| Elemento slide | Realtà dalle interviste |
|----------------|------------------------|
| "I PM pianificano le attività e assegnano i task" | I PM/TM fanno solo scenotecnica/allestimenti; i "project manager" di fatto sono i **commerciali** (capi commessa) e **Lorena** (supervisione operativa) |
| Step 3: "Il New Business crea l'Opportunità sul CRM" | Oggi la COM viene aperta **via email a Calaiò** al momento del brief, non alla conversione; il CRM è proposto, non ancora esistente |
| Step 4: "AI Event Companion fornisce assistenza diretta" | Cavecchi è scettica: durante l'evento il contatto fisico è fondamentale; classificato come nice-to-have |
| Budget gestito su piattaforma | **Il budget resta su Excel** — troppo variabile per formato, spesso fornito dal cliente, contiene formule reali |
| Processo lineare in 5 step | Il processo ha molti **loop e parallelismi**: la Programmazione e il Creativo lavorano in parallelo; l'operativo può avere contratti ereditati dalla Programmazione; il Progress viene aggiornato continuamente da Zaghi |
| Segreterie gestiscono "logistica" | La logistica è degli **Operativi**; le Segreterie gestiscono **partecipanti e documenti** |

---

*Documento generato il 05/02/2026 — Basato su interviste Cavecchi, Zaghi, Merli, Cichello e documentazione Wave 1/Wave 2*