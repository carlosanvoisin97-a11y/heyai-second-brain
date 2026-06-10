# NOLOOP — Processo Operativo End-to-End (v2)

## Mappatura completa del ciclo di vita evento con ecosistema digitale

*Documento aggiornato al 09/02/2026 — Basato sulle interviste con L. Cavecchi (02/02 + 09/02), L. Zaghi (05/02), A. Cichello, M. Merli e sulla documentazione Wave 1/Wave 2.*

---

## LEGENDA

| Simbolo | Significato |
|---------|-------------|
| 🟢 | **Consegnato / Operativo** |
| 🟡 | **In lavorazione** |
| 🔵 | **Proposto (Wave 2)** |
| ⚪ | **Esterno / Pre-esistente** |

---

## STRUTTURA ORGANIZZATIVA

| Reparto | Responsabile | Funzione |
|---------|-------------|----------|
| **Commerciale / New Business** | Laura Zaghi (Dir. Commerciale) | Scouting, gestione gare, supervisione commessa ("capo commessa"), fatturazione, compilazione Progress |
| **Programmazione** | Antonella Osmetti | Ricerca destinazioni, costruzione programma e budget Excel, contrattazione iniziale fornitori |
| **PM/TM (Comunicazione)** | [vacante — Bortolussi in maternità] | Scenotecnica, allestimenti sala plenaria, render 3D. NON sono project manager cross-funzionali |
| **Creativo** | Ivano Romano | Claim, loghi, design, materiali visivi per gare e convention |
| **Operativi** | Leandro Cuzzocrea (responsabile) | Logistica post-conferma: conferma fornitori, contratti, hotel/transfer, sopralluoghi |
| **Segreteria** | Lorena Cavecchi (supervisione) | Contatto partecipanti, raccolta liste/documenti, form iscrizione |
| **Biglietteria** | Lorena Cavecchi (supervisione) | Acquisto biglietti aerei/treni, gestione variazioni |
| **Amministrazione** | Roberta Calaiò | Cash flow, apertura COM su Business Central, pagamenti |
| **Direzione** | Laura Garbarino (GM) | Approvazione budget top client, analisi Progress |
| **Qualità/Compliance** | Marco Merli | Policy, DUVRI/POS, sicurezza eventi, compilazione moduli gare |

---

## FASE 1 — ACQUISIZIONE (Scouting e Primo Contatto)

### Cosa accade

Il team New Business identifica potenziali clienti tramite due canali:

- **Clienti fidelizzati:** relazione esistente; il cliente contatta Noloop per un nuovo progetto (affidamento diretto o gara)
- **New Business:** scouting attivo di nuovi prospect

**Flusso New Business:**

1. **Ricerca su LinkedIn Sales Navigator** — identificazione profili rilevanti (responsabili marketing, eventi, HR)
2. **Studio del profilo** — l'azienda fa eventi? Ha divisione interna? Si rivolge a esterni? Questo è il **passaggio più time-consuming** della fase pre (confermato Zaghi)
3. **Primo contatto** — messaggio su LinkedIn o email; la scrittura in sé è rapida
4. **Follow-up e nurturing** — interazioni successive, invio presentazione aziendale
5. **Qualificazione** — il lead viene tracciato con status in LeadMe

### Chi se ne occupa

- **Simona Marani** — Scouting New Business (solo fase pre; non ha ancora convertito lead)
- **Luca Candiani, Barbara Bresciani** — Commerciali gestione completa (pre + durante + chiusura)
- **Matteo Cosma** — Nuovo ingresso, in onboarding
- **Laura Zaghi** — Supervisione + gestione diretta grandi clienti

### Strumenti digitali

| Strumento | Stato | Cosa fa in questa fase |
|-----------|-------|----------------------|
| **LinkedIn Sales Navigator** | ⚪ Pre-esistente | Ricerca e identificazione prospect |
| **LeadMe** | 🟢 Operativo | Importazione dati da LinkedIn (scraper), qualificazione lead, tracciamento interazioni, rilevamento cambi ruolo/azienda ogni 15gg, dashboard con metriche |

### Cosa dovrebbe fare ogni applicativo proposto in questa fase

**LeadMe Evolution (CRM)** 🔵
- **Lead Scoring automatico:** classificazione caldo/tiepido/freddo basata su frequenza interazioni, settore, dimensione azienda, tempo dall'ultimo contatto
- **AI Scouting:** analisi automatica profili LinkedIn per identificare aziende che fanno eventi corporate, verifica se hanno divisione interna, suggerimento contatti prioritari. *Forte interesse Zaghi: "perde un sacco di tempo capire se fanno o non fanno"*
- **AI Messaging:** generazione messaggi personalizzati per primo contatto basati su profilo + storico. *Nice-to-have per Zaghi*

**Minutes** 🟡
- Trascrizione call esplorative con prospect per avere base di lavoro strutturata

---

## FASE 2 — PROPOSTA (Brief, Brainstorming, Programmazione e Gara)

### Cosa accade

Quando arriva un brief concreto, si attivano **contemporaneamente** due azioni:

1. **Apertura COM** — Il commerciale manda email a Calaiò con: nome cliente, nome evento, data, destinazione, budget indicativo, stima di margine. Calaiò registra la COM su **Business Central** (gestionale amministrativo). Questo avviene **contestualmente** all'arrivo del brief, non alla conferma.

2. **Convocazione reparti** — Il commerciale invia il brief via email ai reparti di competenza e convoca una **riunione di brainstorming**. I reparti coinvolti dipendono dal brief: sempre Programmazione; se ci sono voli, Biglietteria; se c'è comunicazione/convention, PM/Creativo.

**Il brief arriva in tre modi:**
- **Gare (caso più frequente, ~99,9%):** tramite portali d'acquisto delle aziende, in formato PDF strutturato
- **Brief diretto da fidelizzati:** comunicazione diretta dal cliente, spesso seguita da call di approfondimento
- **Brief telefonico (sempre meno frequente):** il commerciale prende appunti e li redistribuisce

**Brainstorming interno:**
- Si analizza il brief, il budget del cliente, le desiderate
- Si propongono destinazioni (possono essere 2-3 alternative)
- Si dividono i compiti per reparto (i ruoli sono già definiti, non si "assegnano" — ogni reparto sa cosa fare)
- Il commerciale ha il controllo complessivo

**Costruzione della proposta (lavoro parallelo multi-reparto):**
- **Programmazione** cerca destinazioni e disponibilità hotel → comunica date alla Biglietteria → Biglietteria chiede proposte gruppo alle compagnie aeree
- **Programmazione** raccoglie piante/foto sale → le gira al **PM/Comunicazione** per valutare fattibilità scenotecnica → se la sala non è adatta, si torna alla Programmazione per alternative
- **Creativo** produce claim, render, materiali visivi (quando serve concept completo)
- Costruzione del **budget su Excel** — la Programmazione ha la totalità del budget; Biglietteria e Comunicazione inviano i loro costi alla Programmazione che li inserisce nel budget complessivo

**Iterazioni:**
- Una stessa COM può avere **fino a 7 attivazioni diverse** prima della conferma (cambio destinazione perché fuori budget, sala inadeguata, ecc.)
- Le risposte dei fornitori arrivano spesso sotto data, "tre ore prima della presentazione della gara"
- Approvazione Garbarino per budget/programma top client prima dell'invio

### Chi se ne occupa

| Persona | Attività |
|---------|----------|
| Commerciale | Riceve brief, apre COM, convoca brainstorming, supervisiona, costruisce preventivo cliente |
| Programmazione (Osmetti) | Ricerca destinazioni, budget Excel, contrattazione iniziale fornitori, raccoglie info sale |
| Biglietteria | Chiede proposte voli gruppo in base a date confermate dalla Programmazione |
| PM/Comunicazione | Valutazione sale per scenotecnica, allestimenti, render 3D |
| Creativo (Romano) | Claim, render, materiali visivi per gara |
| Garbarino | Approvazione budget top client |
| Calaiò | Registra COM su Business Central |

### Strumenti digitali

| Strumento | Stato | Cosa fa in questa fase |
|-----------|-------|----------------------|
| **AI Venue Finder** | 🟢 Operativo (Gem) | Ricerca venue, ristoranti, trasporti, attività; export tabellare; bozza presentazione |
| **Excel** | ⚪ Pre-esistente | Budget di commessa — **resta su Excel** (confermato sia da Zaghi che da Cavecchi) |
| **Business Central** | ⚪ Pre-esistente | Calaiò registra la COM (da valutare possibile integrazione) |

### Cosa dovrebbe fare ogni applicativo proposto in questa fase

**Minutes** 🟡
- Trascrizione della **call con il cliente** di approfondimento brief → base di lavoro strutturata
- Trascrizione del **brainstorming interno** → estrazione automatica di action item per reparto con scadenze, assegnati alle persone menzionate o ai reparti di competenza
- Il commerciale rivede la lista di task generata, corregge eventuali TBD (scadenze non dette), conferma → i task vengono lanciati sul **Task Management System**
- *Validato da Cavecchi: "quello sì, perché esatto, quello ti resta e quindi ce l'hai un Minutes 2.0 per intenderci"*

**Task Management (Flow)** 🔵
- Ricezione dei task generati da Minutes post-brainstorming
- Ogni reparto vede i propri task con scadenze
- Il commerciale ha vista complessiva su tutti i task della proposta
- *Nota: in questa fase il budget NON entra nel sistema. Solo task operativi (produrre render, chiedere disponibilità hotel, preparare proposta voli, ecc.)*

**Modulo Reparto Creativo (Pitch)** 🔵
- Analisi automatica del brief: posizionamento cliente, trend di mercato, benchmark competitor
- Generazione contenuti multimediali: mockup, post-produzione render, video teaser, adattamento formati

**LeadMe Evolution (CRM)** 🔵
- Creazione dell'Opportunità come entità madre che traccia la pipeline della gara
- Lo stato passa a "Offerta" quando la COM viene aperta → questo diventa la **base di partenza del Progress**

---

## FASE 3 — CONVERSIONE (Conferma e Passaggio Pratica)

### Cosa accade

**Scenario A — Gara persa / cliente rifiuta:** COM cancellata, chiusura

**Scenario B — Gara vinta / cliente conferma:**

1. **Comunicazione esito** — il commerciale comunica la conferma; inserisce le condizioni di pagamento nella COM (senza queste, l'operativo non può procedere)
2. **Inserimento dati nel Progress** — Zaghi inserisce il budget di apertura (il più basso stimato) con marginalità. Lo fa per **tutte** le COM aziendali. Lo stato COM nel Progress passa da "lavorazione" a "confermato"/"in corso"
3. **Passaggio pratica** — Call a tre: **Programmazione + Operativo + Commerciale**. La Programmazione dice: "questo evento è confermato, queste sono le cose proposte, questi sono i fornitori, questi sono i contratti già fatti, il budget è questo." L'operativo prende in carico. **Da quel momento la Programmazione si disimpegna completamente** ("se ne dimenticano completamente" — Cavecchi)
4. **Assegnazione operativo** — Cuzzocrea decide quale operativo assegnare
5. **Presentazione al cliente** — il commerciale presenta l'operativo al cliente; da quel momento l'operativo è il riferimento per la parte logistica
6. **Se c'è componente Convention** — il passaggio avviene anche verso il PM, che gestisce la parte scenotecnica/comunicazione parallelamente all'operativo logistico

### Chi se ne occupa

| Persona | Attività |
|---------|----------|
| Commerciale | Comunica esito, inserisce condizioni pagamento |
| Zaghi | Aggiorna Progress (apertura budget + marginalità) per tutte le COM |
| Programmazione | Trasferisce il "malloppone" all'operativo, poi si disimpegna |
| Cuzzocrea | Assegna operativo |
| Calaiò | Conferma COM su Business Central |

### Cosa dovrebbe fare ogni applicativo proposto in questa fase

**Minutes** 🟡
- Trascrizione della **call di passaggio pratica** → tutti i dettagli trasferiti restano documentati nella commessa digitale
- L'operativo può in futuro consultare le minute per capire decisioni pregresse ("perché abbiamo proposto questa sala?" → "perché le altre non erano disponibili")

**Task Management (Flow)** 🔵
- Generazione di un **secondo set di task** dalla call di passaggio pratica: task operativi assegnati all'operativo, al PM, alla biglietteria, alla segreteria
- Ogni task ha scadenze, note, dipendenze estratte dalla call
- Il budget di gara/programmazione viene **caricato** nella commessa digitale come dato di riferimento (totale o per macro-reparto), non nel dettaglio riga per riga

**LeadMe Evolution (CRM)** 🔵
- Conversione lead → cliente
- Lo stato dell'Opportunità passa a "Confermato"
- Generazione automatica della Commessa su **Tally** e dell'istanza evento su **Crowd**

**Tally (Gestionale)** 🔵
- Ricezione automatica della commessa dal CRM
- Inserimento del budget di partenza (dato di programmazione) come baseline
- Lo stato COM passa da "offerta" a "confermato" → **base di partenza del Progress digitale**

---

## FASE 4 — ESECUZIONE (Gestione Operativa)

### Cosa accade

Questa è la fase più lunga (può durare mesi: un evento confermato a dicembre per aprile = 4 mesi di lavorazione). Più reparti lavorano in parallelo, e l'operativo gestisce più COM contemporaneamente.

#### 4A. Operativi (sempre coinvolti)

1. **Conferma fornitori** — riprende i contatti dalla Programmazione, negozia e conferma
2. **Firma contratti** — i contratti arrivano alla conferma (non alla fine); contengono: condizioni di cancellazione, scadenze pagamento, deadline rooming list, ecc.
3. **Gestione variazioni quotidiane** — il cliente aggiunge camere, cambia menù, aggiunge coffee break; il budget passa da 10 a 11 a 15... questa gestione avviene su **Excel** e via email/call col cliente
4. **Invio budget aggiornato al cliente** — nel **format Excel del cliente** (ogni cliente ha il suo)
5. **Sopralluoghi** — site inspection presso le location
6. **Raccolta fatture** — arrivano alla fine (anche mesi dopo il contratto)

#### 4B. PM/Comunicazione (se convention)

- Allestimento sala, scenotecnica, render 3D, produzione materiali
- Gestisce il proprio budget per la parte comunicazione (macro-voce separata)

#### 4C. Biglietteria (se necessaria)

- Acquisto biglietti aerei/treni, gestione variazioni nome/date
- Gestisce il proprio budget (macro-voce separata)
- Ha **deadline critiche**: invio nominativi alle compagnie, emissione biglietti

#### 4D. Segreteria (quasi sempre coinvolta)

- Contatto partecipanti, raccolta liste presenze, documenti (passaporti, visti)
- Gestione form iscrizione su Crowd
- Preparazione rooming list per l'operativo
- **Non gestisce budget** — è solo carico di lavoro
- **Tenuta separata dal sistema centrale per GDPR** (confermato Cavecchi 09/02)

#### Coordinamento

- Il **commerciale** supervisiona e approva il **lato cliente** del budget (il prezzo al cliente)
- L'**operativo** gestisce il **lato interno** (costi reali dai fornitori)
- **Lorena Cavecchi** supervisiona operativi + segreteria + biglietteria; necessita di visibilità su tutti i task
- **Il budget vive su Excel** durante tutta la fase operativa — troppo volatile per un sistema digitale. Solo i macro-aggregati per reparto entrano nel Progress

### Cosa dovrebbe fare ogni applicativo in questa fase

**Task Management (Flow)** 🔵

Funzionalità core:
- **Task per reparto** con scadenze, note, dipendenze, assegnazione a persone specifiche
- **Vista admin per Lorena** su tutti e 3 i reparti (operativi + segreteria + biglietteria)
- **Vista individuale** per singolo operativo (le sue COM attive)
- **Gantt/Calendar condiviso** tra le persone coinvolte nella COM, con alert automatici
- **Condivisione cross-reparto delle deadline**: la segreteria vede le scadenze dell'operativo (es. "rooming list entro il 20 marzo"), la biglietteria vede "deadline nomi il 16 marzo"

Funzionalità chiave validata da Cavecchi (09/02):
- **Upload contratti** nel task → l'AI legge il contratto ed estrae automaticamente: condizioni di cancellazione, scadenze pagamento, deadline rooming list, condizioni specifiche → crea alert/reminder
- **Domande a Sally in-context**: "quand'è che devo mandare la rooming list?" → Sally legge il contratto e risponde "20 marzo, come da contratto Hotel X firmato il 5 dicembre"
- **Upload fatture** alla chiusura del task → i dati alimentano il consuntivo
- **Alert fatture mancanti**: "questa fattura non è stata ricevuta" o "questa fattura non è completa" — *pain point reale: "non ti dico quante volte gli operativi non ricevono le fatture oppure si dimenticano di inserirle" (Cavecchi)*

Cosa NON fa:
- Non gestisce il budget dettagliato (resta su Excel)
- Non richiede aggiornamento continuo dei costi (l'operativo ci lavora fuori, carica solo il dato finale)

**Crowd** 🟡

- Gestione partecipanti: form builder, database, grouping, comunicazioni WhatsApp/email
- **Resta standalone, separato dal flusso principale** per GDPR (confermato Cavecchi 09/02)
- La segreteria lavora su Crowd; il dato partecipanti NON entra nella commessa digitale
- Però la segreteria **può vedere** le deadline dal Task Management (es. quando deve preparare la rooming list)

**Minutes** 🟡

- Trascrizione call operative interne e con il cliente → documenti collegati alla commessa digitale
- Le minute costituiscono lo storico decisionale: perché è stata scelta quella location, perché è cambiato il programma, ecc.

**Sally** 🔵

- Accessibile in-context dentro il Task Management e dentro la commessa digitale
- Risponde a domande operative: scadenze contrattuali, condizioni di cancellazione, stato pagamenti
- Genera reminder proattivi da contratti e email caricate nella commessa
- *Esempio reale (Cavecchi): "tante volte dici ma quand'è che mi ha chiesto l'hotel di inviargli tutti i nomi? E tu devi andare a scatabellare il contratto. Invece lì vai lì e vedi."*

**AI Event Companion** 🔵

- App PWA per partecipanti durante l'evento: agenda, notifiche, chatbot FAQ, networking
- **Classificato come nice-to-have** da Cavecchi: il contatto fisico durante gli eventi resta fondamentale
- Non prioritario

---

## FASE 5 — CHIUSURA (Consuntivo, Progress e Fatturazione)

### Cosa accade

Questa è la fase con il **pain point principale** identificato da tutte le interviste.

**Due consuntivi distinti:**

1. **Consuntivo lato cliente** — il budget nel format Excel del cliente, con il prezzo venduto. Il commerciale dà l'OK su questo.
2. **Consuntivo lato interno** — i costi reali: fatture fornitori, costi effettivi per voce. Preparato dall'**operativo**, poi condiviso con il commerciale.

**Flusso:**

1. **L'operativo prepara il consuntivo** — raccoglie tutte le fatture, verifica i costi effettivi per ogni fornitore, prepara il quadro completo dei costi interni
2. **Condivisione con il commerciale** — il commerciale verifica lato cliente
3. **Aggiornamento Progress** — **Zaghi** (per tutte le COM) inserisce nel Progress: budget confermato, budget a consuntivo, marginalità effettiva, diviso per reparto (macro-cluster: logistica, biglietteria, comunicazione/PM)
4. **Frequenza: SETTIMANALE** — la prima linea di Laura (Zaghi, Candiani, Bresciani) deve aggiornare il Progress settimanalmente, non solo a chiusura (confermato Cavecchi 09/02: "i responsabili, quindi la prima linea di Laura, questo lavoro lo devono fare settimanalmente")
5. **Analisi Garbarino** — la GM accede al Progress e verifica costi, margini, scostamenti

### Struttura del Progress (confermata Cavecchi 09/02)

Il Progress è organizzato per:
- **Fogli** = reparti (Programmazione/Operativi, Biglietteria, PM/Comunicazione)
- **Righe** = COM (clienti/eventi)
- **Colonne** = status, budget, commerciale, date, note

Ogni COM attraversa gli stati: **Lavorazione** → **Confermato/In corso** → **Chiuso**

Il budget nel Progress muta nel tempo: parte dal budget di programmazione, si aggiorna settimanalmente durante l'operatività, si chiude a consuntivo.

**Cluster di budget per reparto:**
- Logistica (operativi)
- Biglietteria
- Comunicazione (PM/scenotecnica + contenuti)
- La **segreteria non ha budget** — è solo carico di lavoro

### Pain point

- **Zaghi**: "tantissimo tempo", "da impazzire" — deve ricostruire informazioni dispersi tra email, preventivi non aggiornati, decisioni last minute non comunicate
- **Cavecchi**: gli operativi **dimenticano di raccogliere/inviare fatture** → il consuntivo è incompleto → il Progress è inaccurato
- **Cavecchi**: i commerciali aggiornano solo il preventivo lato cliente, non comunicano le variazioni interne
- **Cavecchi**: il Progress deve essere aggiornato settimanalmente ma le informazioni arrivano in ritardo

### Cosa dovrebbe fare ogni applicativo in questa fase

**Tally (Gestionale/Progress digitale)** 🔵

Questo è lo **strumento prioritario** — "è lo strumento che vuole Laura [Garbarino]" (Cavecchi 09/02).

Funzionalità core:
- **Progress digitale** strutturato per COM × Reparto × Stato, con la stessa logica dell'Excel attuale
- **Inserimento dati a macro-voci per reparto**: la prima linea (commerciali responsabili) inserisce settimanalmente i totali per reparto. Non il dettaglio riga per riga — quello resta su Excel
- **Aggiornamento settimanale facilitato**: lo strumento mostra cosa manca, cosa è cambiato, cosa deve essere aggiornato. Alert: "per chiudere questa commessa e mandare i dati al Progress, mancano ancora la cifra della comunicazione, la cifra della biglietteria"
- **Consuntivo pre-popolato**: raccoglie fatture e dati caricati durante l'esecuzione sul Task Management → propone un consuntivo che l'operativo rivede e conferma → i dati aggregati passano al Progress
- **Dashboard BI per Garbarino**: KPI real-time su marginalità, scostamenti preventivo vs consuntivo, redditività per cliente/servizio
- **Fatturazione attiva e passiva**, scadenzario, export contabile

Approccio pragmatico (emerso dalla discussione del 09/02):
- Il lavoro dettagliato continua su Excel (troppo variabile per standardizzare)
- Nel sistema digitale entrano solo **dati aggregati e confermati**
- L'AI può leggere un Excel caricato ed estrarre il totale, oppure il responsabile inserisce la cifra manualmente
- L'obiettivo non è sostituire Excel ma **eliminare la ricostruzione manuale** che oggi Zaghi deve fare per compilare il Progress

**LeadMe Evolution (CRM)** 🔵
- Chiusura dell'Opportunità
- Storico servizi erogati per cliente
- Dati post-vendita per gestione relazione futura

---

## STRUMENTI TRASVERSALI (Tutte le fasi)

### Minutes 🟡 In lavorazione

| Dove interviene | Cosa fa |
|----------------|---------|
| Call con cliente (brief) | Trascrizione → base di lavoro strutturata |
| Brainstorming interno | Trascrizione → **estrazione action item per reparto** → lancio su Task Management |
| Call di passaggio pratica | Trascrizione → storico decisionale consultabile dall'operativo |
| Call operative quotidiane | Trascrizione → documenti collegati alla commessa digitale |

**Principio chiave**: Minutes è il "collettore di contesto" — ogni call trascritta arricchisce la commessa digitale e diventa interrogabile da Sally.

### Sally 🔵 Proposta

| Dove interviene | Cosa fa |
|----------------|---------|
| Dentro Task Management | Risponde a domande su scadenze contrattuali, condizioni, deadline |
| Dentro la commessa digitale | Query su stato avanzamento, budget, storico decisioni |
| Standalone (top bar) | Ricerca documenti aziendali, policy, procedure (caso Merli) |
| Onboarding | Supporta nuovi assunti con conoscenza aziendale centralizzata |

**Principio architetturale**: Sally è l'unico agente conversazionale; i moduli NLP di LeadMe e Tally sono backend.

---

## RIEPILOGO PER APPLICATIVO

### 🟢 CONSEGNATI / OPERATIVI

**Ecosistema AI Noloop (Infrastruttura)**
- Portale unificato, autenticazione, permessi, server dedicato GDPR-compliant

**LeadMe**
- Scraper LinkedIn, qualificazione lead, activity logging, vacancies ogni 15gg, dashboard metriche
- È il master data dei lead attuali

**AI Venue Finder (Gem Gemini)**
- Ricerca venue, ristoranti, trasporti, attività extra per brief
- Export tabellare, bozza strutturata per presentazione
- Usato dalla Programmazione in fase 2

### 🟡 IN LAVORAZIONE

**Crowd (Gestione Eventi)**
- Form builder brandizzati, database partecipanti, motore grouping, WhatsApp/email
- **Standalone e separato** dal flusso principale per GDPR
- La segreteria lavora qui; nessun dato partecipante entra nella commessa digitale

**Minutes (Meeting Assistant AI)**
- Trascrizione automatica call, generazione minute strutturate, estrazione action item
- **Ruolo chiave nella proposta**: è il ponte tra le call e il Task Management (Minutes → action item → Flow)
- *Cavecchi lo chiama "Minutes 2.0" — validato con entusiasmo*

### 🔵 PROPOSTI (WAVE 2)

**Tally (Gestionale/Progress digitale)** — ⭐ PRIORITÀ #1
- Progress digitale: COM × Reparto × Stato, aggiornamento settimanale
- Consuntivo pre-popolato da fatture/dati raccolti durante esecuzione
- Alert dati mancanti alla chiusura
- Dashboard BI per Garbarino
- Fatturazione attiva/passiva, scadenzario
- *"È lo strumento che vuole Laura" (Cavecchi) — il punto di partenza da cui sviluppare tutto il resto*

**Task Management (Flow)** — ⭐ PRIORITÀ #2
- Task per reparto con scadenze, dipendenze, alert
- Upload contratti → AI estrae scadenze e crea reminder automatici
- Upload fatture → alimentano il consuntivo
- Alert fatture mancanti
- Gantt/Calendar condiviso tra persone coinvolte nella COM
- Vista admin per Lorena (3 reparti), vista individuale per operativo
- Sally in-context per domande operative
- Cross-visibility: segreteria e biglietteria vedono le deadline rilevanti per loro

**LeadMe Evolution (CRM)** — ⭐ PRIORITÀ #3
- Evoluzione di LeadMe in CRM completo con pipeline Opportunità
- L'Opportunità è l'entità madre: genera automaticamente Commessa su Tally + Task su Flow + Evento su Crowd
- AI Messaging, Lead Scoring, NLP
- Master data clienti

**Sally (Agente Virtuale 360°)** — PRIORITÀ #4
- Agente conversazionale unificato, in-context e standalone
- Interroga tutti i sistemi (CRM, Tally, Task, SharePoint)
- Knowledge base aziendale per policy, procedure, onboarding
- *Dipende dall'esistenza degli altri moduli*

**Modulo Reparto Creativo (Pitch)** — PRIORITÀ #5
- Analisi strategica gare (brief, posizionamento, competitor, trend)
- Generazione contenuti multimediali (mockup, render, video teaser)
- *Accelera le gare ma non risolve bottleneck operativi*

**AI Event Companion** — PRIORITÀ #6
- App PWA partecipanti, chatbot FAQ, networking, gamification
- *Cavecchi scettica: "durante gli eventi il contatto fisico è fondamentale"*

---

## FLUSSO DATI TRA SISTEMI (Target)

```
LinkedIn SN → LeadMe → [Lead qualificato]
                            ↓
                    LeadMe Evolution (CRM)
                    [Opportunità → stato "Offerta"]
                            ↓
                    ┌───────┼────────┐
                    ↓       ↓        ↓
                 Tally    Flow    Crowd
              [COM aperta] [Task]  [Evento]
                    ↓       ↓        ↓ (standalone GDPR)
                    ↓   Task completati
                    ↓   + contratti + fatture
                    ↓       ↓
                    ←───────┘
                    ↓
              Tally [Consuntivo pre-popolato]
                    ↓
              Progress digitale
              [aggiornamento settimanale]
                    ↓
              Dashboard BI → Garbarino
```

**Minutes** alimenta il flusso trasversalmente: ogni call trascritta genera action item che entrano in Flow e documenti che entrano nella commessa digitale.

**Sally** è il layer interrogabile su tutti i sistemi.

**Crowd** resta **isolato** per GDPR — la segreteria ci lavora autonomamente, ma vede le deadline da Flow.

**Excel** resta lo strumento di lavoro quotidiano per i budget — il sistema digitale riceve solo dati aggregati/confermati.

---

## CORREZIONI RISPETTO ALLA VERSIONE PRECEDENTE (v1)

| Punto v1 | Correzione da follow-up Cavecchi 09/02 |
|----------|----------------------------------------|
| "Budget potrebbe entrare nella commessa digitale" | **No.** Il budget resta su Excel. Troppo dettagliato, non standardizzabile, il cliente ha il suo format. Nel sistema entrano solo macro-aggregati per reparto |
| "Consuntivo fatto dal commerciale" | **No.** Il consuntivo lo fa l'**operativo**, poi lo condivide con il commerciale. Il commerciale approva solo il lato cliente |
| "Due consuntivi" non specificati | Chiarito: **lato cliente** (prezzo di vendita, format Excel del cliente) vs **lato interno** (costi reali, fatture fornitori) |
| Progress aggiornato "a chiusura" | **No.** Aggiornamento **settimanale** obbligatorio per la prima linea di Laura |
| Task management dalla fase di proposta | **Parzialmente.** I task operativi (chi deve fare cosa) sì, dal brainstorming. Ma il budget e i dati finanziari no — quelli entrano solo dalla fase operativa post-conferma |
| Crowd integrato nel flusso principale | **No.** Crowd resta **standalone per GDPR**. La segreteria non entra nella commessa digitale. Ma vede le deadline dal Task Management |
| "COM aperta alla conferma" | **No.** COM aperta **contestualmente al brief** — Calaiò la registra su Business Central subito |
| Sistema gestionale generico | Chiarito: il gestionale amministrativo è **Business Central** (già in uso). Da valutare se Tally lo sostituisce, lo affianca o si integra |
| Programmazione coinvolta fino alla fine | **No.** La Programmazione **si disimpegna completamente** dopo il passaggio pratica |

---

## DOMANDE APERTE / NEXT STEPS

| Tema | Contesto | Da chiarire con |
|------|----------|-----------------|
| **Business Central** — cosa fa esattamente, come si integra con Tally? | Cavecchi: "devi parlare con Roberta, io non ho idea" | Roberta Calaiò |
| **Fatturazione** — ciclo attivo/passivo, come funziona oggi? | Legato a Business Central e al Progress | Roberta Calaiò |
| **Quantificazione tempo perso** — per reparto, per costruire il business case | Cavecchi: "bisogna fare un ragionamento a 360°, ogni reparto ha il suo tempo" | Tutti i reparti (Cavecchi si è impegnata a pensarci) |
| **Osmetti** — validazione del processo lato Programmazione | Non ancora intervistata direttamente | Antonella Osmetti (tramite Garbarino?) |
| **Simona Marani** — quantificazione tempo pre-fase (studio lead) | Zaghi ha suggerito di intervistarla | Simona Marani |
| **Garbarino** — aspettative sul Progress digitale, priorità | Cavecchi: "questa cosa dobbiamo affrontarla con Laura Garbarino" | Laura Garbarino |

---

*Documento generato il 09/02/2026 — v2 aggiornata con follow-up Cavecchi*
