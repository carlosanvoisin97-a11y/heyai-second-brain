# Noloop Wave 2 — Requisiti per Quotazione Sviluppatori
**Recap completo — Call 19 febbraio 2026 + approfondimenti con cliente**
**Per: Federico Saladino, Simone — Da: Carlo Sanvoisin**

---

## PARTE 1: IL PROCESSO COME FUNZIONA OGGI

### 1.1 Scouting e acquisizione lead

Il commerciale usa LeadMe per trovare prospect. Lo scraper cerca attivamente lead su LinkedIn, li profila e suggerisce un messaggio icebreaker. Sally monitora i lead sui quali ci sono azioni da fare: verifica quelli con un last update inferiore a 3 settimane, controlla se nelle attività ci sono azioni pendenti (una chiamata da fare, un'email da mandare, un messaggio da inviare, una presentazione da spedire) e manda un recap al commerciale di riferimento via email + notifica in-app.

### 1.2 Ricezione brief e apertura commessa

Arriva il brief dal cliente (via portale gare, email diretta o telefonicamente). Il commerciale manda contestualmente due comunicazioni: una ai reparti coinvolti per convocare il brainstorming, e una a Roberta Calajò per l'apertura della COM su Business Central. Il format email è sempre lo stesso: nome cliente, nome evento, data, destinazione, budget, stima margine.

La COM viene aperta **da subito**, anche se è solo una gara, perché il finance ha bisogno di tracciare ogni costo e ricavo fin dall'inizio (anche i costi di partecipazione alla gara stessa: render, travel, ecc.).

L'apertura COM va anche su Link. LeadMe deve ricevere indietro l'informazione che è stato ricevuto il brief, così da tenere aggiornato lo status del lead. L'apertura della commessa può avvenire sia da LeadMe che da Minutes, però il flusso più funzionale è quello che parte da Minutes (dove emergono i dati necessari durante il brainstorming). Da LeadMe resta comunque disponibile un bottone "crea commessa".

### 1.3 Due momenti di esecuzione operativa

**Momento 1 — Preparazione della proposta (pre-accettazione)**

Dopo il brainstorming, i reparti lavorano in parallelo per costruire la presentazione al cliente:
- **Programmazione**: ricerca location, allineamento con biglietteria sui prezzi dei potenziali voli/trasporti, costruzione del budget previsionale → aiutata da **AI Venue Finder**
- **Creativo**: creazione claim, render, materiali visivi → aiutato dal **Modulo Creativo (Pitch)**
- Il **client lead** (tipicamente il commerciale) coordina il tutto

Ogni reparto costruisce la sua parte del **piano di produzione** (PDP) su Excel. La programmazione ha la visione d'insieme del budget e raccoglie le sotto-voci dagli altri reparti. Il PDP viene approvato (per i clienti importanti dalla Garbarino) e inviato al cliente.

Se il cliente dice no → la COM viene chiusa/annullata su BC.

**Momento 2 — Messa a terra dell'evento (post-accettazione)**

Il cliente accetta. C'è un formale **passaggio pratica** dalla programmazione all'operativo (nella BU Garbarino; nella BU Cichello non esiste perché è one-man-show). Si rifà una call (registrata con Minutes) dalla quale escono i task reali:
- **Operativi**: sopralluoghi, contrattazione con fornitori, allestimenti
- **Programmazione + Biglietteria**: acquisto effettivo di biglietti, hotel, location
- **Segreteria**: contatto partecipanti, liste, documenti, form Crowd (separata per GDPR)

Da questo momento il budget cambia continuamente: il cliente aggiunge servizi, cambia menù, servono più camere, un fornitore costa di più del previsto. L'operativo lavora su Excel e gestisce tutto manualmente.

### 1.4 I tre stadi del budget (da macro ad analitico)

Il processo prevede lo stesso schema informativo ripetuto a tre livelli di precisione crescente:

**Stadio 1 — In gara / previsionale macro**
Numeri macro basati sul budget dato dal cliente. Si prevede quanto si spenderà per macro-area. Serve per aprire la COM e per il primo cash flow planning. Sono stime.

**Stadio 2 — Pre-chiusura (prima della partenza per l'evento)**
Obbligatorio per tutti. Si fanno previsioni più accurate: quanto si spenderà effettivamente, come e quando pagherà il cliente (cash flow attivo), previsione delle uscite verso fornitori (cash flow passivo). Questo stadio congela la situazione attesa prima dell'evento.

**Stadio 3 — Chiusura (entro 15 giorni dal ritorno)**
Obbligo di recuperare le **effettive fatture** emesse dai fornitori e di mandare i **template reali** per la fatturazione attiva verso il cliente. È il consuntivo vero.

### 1.5 Fatturazione attiva e passiva — come funziona davvero

**Ciclo passivo (fatture DAI fornitori):**
I producer/operativi hanno autonomia parziale in BC: possono creare anagrafiche fornitori, inserire fatture, sottometterle per il pagamento. Il responsabile (Cichello per BU Consumer) approva o respinge. Ogni fattura ha già un codice identificativo della COM → è riconducibile a una commessa.

**Ciclo attivo (fatture VERSO il cliente):**
🔴 CONFIDENZIALE — I producer/operativi compilano un template Excel in maniera precisissima con PO, importi, codici IVA. Lo mandano per email a Elisa Remigi **credendo che sia un automatismo** che lo inserisce in BC. In realtà è Elisa che manualmente prende quell'email e la inserisce in BC. Questo "barbatrucco" esiste perché BC non permette di bloccare viste sensibili agli operativi.

**Il match da fare:**
Calajò/Remigi devono far quadrare la fatturazione passiva (gestita dagli operativi) con quella attiva (i cui numeri vengono forniti solo dagli operativi, che sanno quanto chiedere al cliente per i servizi). La parte attiva Calajò non la vede fino a quando l'operativo non manda il template.

### 1.6 Il Progress oggi

Excel compilato a mano. Zaghi lo fa settimanalmente per tutta la BU Garbarino ("tantissimo tempo, da impazzire"). Cichello lo fa giornalmente per le sue 280 COM ("non puoi analizzare niente lì dentro, solo totali e percentuali"). Contiene: status commessa, budget per reparto, responsabile, marginalità. Calajò conferma che il Progress non è usato per comparazione con BC — è più uno strumento di impegno persone e distribuzione lavoro.

### 1.7 I pain point confermati dal cliente

- **Doppio inserimento Progress ↔ BC**: confermato da Cichello ("no-sense da 3 anni") e Calajò
- **Zaghi perde ore sul Progress**: deve rincorrere i commerciali per dati che non condividono spontaneamente
- **Fatture dimenticate**: operativi che non recuperano fatture → fornitori aperti a fine anno senza documentazione (Calajò: "se non le andiamo a rincorrere noi...")
- **120 email/settimana**: Calajò risponde a domande procedurali ("non distinguono una fattura da una ricevuta")
- **Spese Revolut non collegate**: se non processate subito → appaiono in contabilità 3 mesi dopo
- **Nessuna tracciabilità dell'evoluzione budget**: Garbarino lo vuole per il facing ma non esiste un sistema che lo faccia

---

## PARTE 2: LA NOSTRA SOLUZIONE

### 2.1 Principio guida

Non sostituiamo Excel. Creiamo un **piano di produzione digitale flessibile** all'interno del nostro ecosistema che diventa lo strumento di lavoro quotidiano. Chi vuole continuare a lavorare su Excel può farlo e poi caricare, ma il sistema offre un'esperienza migliore con template, AI e automazioni.

Le stesse informazioni lavorate dagli operativi e dai producer nel piano di produzione fluiscono automaticamente:
- → verso **Business Central** (per la contabilità e il cash flow)
- → verso il **Progress digitale** su Link (per la reportistica Garbarino)

In questo modo il nostro strumento diventa un **pre-controllo** prima di BC: la chiusura non può essere mandata verso BC finché tutte le voci del budget non hanno una fattura associata. E Link diventa lo strumento di reportistica che sostituisce il Progress Excel.

### 2.2 Il Piano di Produzione (PDP) digitale

Il cuore della soluzione è il piano di produzione digitale, che vive dentro al nostro ecosistema (da definire se dentro Flow o dentro Link — vedi nota sotto).

**Funzionamento:**

1. **Template intelligenti**: ogni producer/operativo ha a disposizione dei template di PDP basati su:
   - Lo storico delle commesse simili
   - La sua figura/ruolo (operativo, producer, programmazione, biglietteria)
   - Il contesto della commessa corrente (già catturato da Minutes nel brainstorming)
   - L'AI propone un template prepopolato con le voci più probabili per quel tipo di evento

2. **Template del cliente**: se il cliente fornisce un proprio template/format di budget, il producer lo può trascinare dentro lo strumento e riusarlo come nuovo template sul quale costruire il proprio PDP. Lo strumento lo importa e lo adatta.

3. **Flessibilità totale**: ogni voce proposta può essere modificata. Colonne possono essere aggiunte, tolte, nascoste o filtrate. È uno strumento di work in progress, non un form rigido.

4. **Associazione fatture alle singole voci**: ad ogni voce del PDP deve essere associata la relativa fattura (passiva) o il template di fatturazione (attiva). Questo è il meccanismo che permette la quadratura e il blocco alla chiusura.

5. **Input non strutturati via Sally**: se il producer vuole annotare qualcosa con un messaggio vocale, inserire un'email, una nota scritta, la foto di uno scontrino o qualsiasi altro input non formattato, può farlo. Sally lo aiuta a formalizzare questi dati e a inserirli nella riga corretta del PDP.

6. **Suggerimento fornitori**: tramite integrazione con BC, il sistema può suggerire fornitori già registrati che sono stati utilizzati in commesse simili. (NB: solo il nome del fornitore come ipotesi, NON il costo — sarebbe rischioso.)

7. **Upload contratti e accordi**: quando il producer riceve un contratto, un accordo o una ricevuta da un fornitore, può caricarlo e associarlo alla voce del PDP. Sally estrae automaticamente: importo, condizioni di pagamento, scadenze di cancellazione, deadline (rooming list, emissione biglietti, ecc.) → questi diventano reminder nel Task Management System o restano nella memoria di Sally.

8. **Approvazione e invio**: il PDP viene approvato internamente (per clienti importanti dalla Garbarino), poi la versione cliente viene esportata/inviata. Internamente, il PDP continua a evolversi come work in progress.

### 2.3 Il flusso del budget nei 3 stadi

**Stadio 1 — In gara (numeri macro)**
- Il brief arriva → Minutes cattura budget cliente nel brainstorming
- Il commerciale/producer crea la commessa → si apre su Link → push a BC
- I reparti lavorano sul PDP (ognuno la sua sezione) con le stime macro
- Quando il PDP è pronto → va al cliente (versione esportata) + snapshot su Link per il facing
- Se la gara è persa → status "non confermata" su Link → chiusura COM su BC

**Stadio 2 — Pre-chiusura (previsioni accurate)**
- La gara è vinta. Passaggio pratica all'operativo. Il PDP si evolve con dati più precisi.
- L'operativo aggiorna le voci con i costi contrattati, carica contratti e accordi
- Sally estrae scadenze dai contratti → reminder sul task management
- Il sistema manda alert a tutti i responsabili per aggiornare la pre-chiusura prima della partenza
- Previsioni cash flow più accurate: come e quando pagherà il cliente (attivo), previsione uscite fornitori (passivo)
- Snapshot pre-chiusura su Link → push a BC per il facing

**Stadio 3 — Chiusura (consuntivo reale, entro 15 giorni dal ritorno)**
- L'operativo ha 15 giorni per recuperare le effettive fatture dai fornitori
- Deve compilare i template reali per la fatturazione attiva (come verranno incassate le fatture dal cliente)
- **BLOCCO**: il PDP **non può essere messo in "completed"** e mandare i dati sul Progress finché:
  - Tutte le voci del budget non hanno una fattura passiva associata (sia che siano in BC, sia che siano in capo al producer)
  - I template di fatturazione attiva sono stati compilati e inviati
  - C'è un check di quadratura tra il nostro strumento e BC
- Gestione spese Revolut: cross-check con le spese carta non associate a nessuna COM
- Una volta che tutto quadra → chiusura confermata → dati finali vanno su Link (Progress) e su BC

### 2.4 La quadratura con Business Central

Ogni fattura ha già un codice identificativo della COM (processo già in essere a Noloop). Questo ci permette di creare un **flusso di check** fra BC e il nostro strumento:

- **Fatture passive**: l'operativo le emette/registra su BC con il codice COM → il nostro sistema verifica che per ogni voce del PDP ci sia la corrispondente fattura in BC (o caricata direttamente nel PDP)
- **Fatture attive**: l'operativo compila il template sul nostro strumento (stessa UX dell'Excel attuale) → il sistema può pushare i dati a BC via API → Elisa conferma in BC. Questo elimina il passaggio email mantenendo la percezione dell'operativo che "c'è un automatismo dietro" (che questa volta è vero).
- **Check finale**: prima della chiusura, il sistema confronta le voci del PDP con ciò che risulta in BC. Se non quadra → blocco + segnalazione di cosa manca.

### 2.5 Il Progress diventa reportistica su Link

Con il PDP digitale e le 3 snapshot (gara → pre-chiusura → consuntivo), il Progress Excel non serve più.

Link diventa lo strumento di reportistica per Garbarino. Riceve automaticamente i dati aggregati dal PDP:
- Status commessa per BU, per commerciale, per tipo cliente
- Budget per reparto/cluster (logistica, biglietteria, comunicazione, PM)
- Marginalità calcolata automaticamente
- Facing nel tempo (evoluzione attraverso i 3 stadi)
- Comparazione previsto vs consuntivo
- Analisi in linguaggio naturale con Sally ("qual è il margine sulla commessa X?")

### 2.6 Sally come assistente procedurale nel PDP

Quando il producer o l'operativo lavora sul PDP o sulla chiusura, Sally è disponibile per:
- Rispondere su template, procedure e documentazione da utilizzare
- Guidare nella compilazione corretta (riducendo le 120 email/settimana a Calajò)
- Formalizzare input non strutturati (audio, foto scontrini, email) in voci del PDP
- Estrarre dati da contratti caricati (scadenze, importi, condizioni)
- Suggerire fornitori dallo storico BC per commesse simili
- Fare da primo filtro prima di escalare al controllo di gestione

---

## PARTE 3: SPECCHIETTO REQUISITI PER MODULO

### ⚠️ NOTA PER FEDERICO E SIMONE — COSA CAMBIA SU LINK

Rispetto alla quotazione iniziale: **ciclo attivo, ciclo passivo, gestione fornitori e anagrafiche fornitori restano TUTTI su Business Central.** Link NON li gestisce. Link è solo centralizzatore dati + integratore sistemi + reportistica (sostituisce il Progress). Ricalibrate le stime.

---

### 1. LEADME EVOLUTION

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Apertura COM | Bottone per creare commessa su Link (che pusha su BC via API). Pre-popola campi disponibili, chiede conferma per mancanti | Flusso primario è da Minutes. LeadMe = alternativa |
| 2 | Ricezione status indietro | LeadMe riceve aggiornamento quando: brief ricevuto, gara vinta, progetto chiuso. Status del lead sempre aggiornato | Flusso bidirezionale LeadMe ↔ Link |
| 3 | Scraping attivo lead | Ricerca proattiva quotidiana di nuovi lead su LinkedIn. Commerciale trova lista ogni mattina, conferma/scarta | Scheduled, automatizzato |
| 4 | Scraping Company | Oltre ai lead, scraping dati delle Company (parametri LeadMe compilati automaticamente) | Stessi parametri attuali |
| 5 | Studio profilo + Icebreaker | Per ogni lead onboardato: analisi profilo LinkedIn + suggerimento messaggio personalizzato | Deep Search via API OpenAI |
| 6 | Gestione naming Company | Alias (stesso soggetto, nome diverso) + Holding (cappello su più company). Interfaccia utente per parametrizzare | Risolve problema Pirelli / Pirelli SPA |
| 7 | Check attività dormienti (Sally) | Sally verifica lead con last update < 3 settimane. Controlla se ci sono azioni pendenti (call, email, messaggio, presentazione). Manda recap al commerciale di riferimento | Notifica in-app + email. Cron job giornaliero |
| 8 | Reportistica NLP (Sally) | Interrogazione linguaggio naturale su dati LeadMe | Skill Sally quotata in LeadMe |

### 2. PITCH (MODULO CREATIVO)

⚠️ **Call di approfondimento da fare prima di quotare nel dettaglio.**

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Analisi brand e mercato | Deep Search guidata: analisi del brief, sito web del cliente, competitor, customer personas, mercato. Chiede conferme prima di agire. Output: documento di analisi strutturato | L'AI chiede prima di procedere, non agisce in autonomia |
| 2 | Playground creativo | Sulla base dell'analisi, fornisce linee guida per generare render, copy e claim. Collegato a strumenti di image gen | Da definire con creativi (Ivano Romano / Gianluca Tillari) |

### 3. FLOW (TASK MANAGEMENT SYSTEM)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Ricezione task da Minutes | Minutes crea task strutturati (assegnatario, scadenza, note, priorità). Client lead rivede e conferma → pushati su Flow | Avviene due volte: post-brainstorming (task per presentazione) e post-accettazione (task per evento) |
| 2 | Vista tipo Wrike | Pending / In Progress / Completed / Deferred. Vista per persona e per commessa | Kanban + possibilità Gantt |
| 3 | Task liberi + task tipizzati | Menù dropdown per tipo task (a contesto chiuso). Ai task tipizzati si allegano procedure interne | Tipi task da definire con cliente |
| 4 | Upload file nei task | Immagini, foto, documentazione, fatture caricabili su ogni task | File associati poi visibili su Link |
| 5 | Interazione Sally vocale/testo | "Ho fatto il sopralluogo, allego foto" → Sally identifica task, aggiorna stato, carica file | Skill Sally quotata in Flow |
| 6 | Validazione procedurale (Sally) | Per task tipizzati: Sally confronta avanzamento con procedure aziendali, blocca/segnala se non rispettate | ⚠️ ADD-ON COSTOSO — quotare a parte |
| 7 | Reminder da contratti | Quando un producer carica un contratto con scadenze → queste diventano reminder nel task management (o restano nella memoria di Sally) | Collegato al PDP: il contratto è associato a una voce |
| 8 | Push dati aggregati su Link | Al completamento di tutti i task → dati consolidati salgono su Link | Auto-population del gestionale |

### 4. PIANO DI PRODUZIONE (PDP) DIGITALE

**Da definire se vive dentro Flow o dentro Link.** In ogni caso è il modulo centrale per la gestione del budget operativo.

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Template intelligenti | Template PDP suggeriti dall'AI sulla base di: storico commesse simili, ruolo dell'utente (operativo, producer, programmazione, biglietteria), contesto commessa da Minutes | Ogni utente ha i suoi template personalizzati |
| 2 | Import template cliente | Drag & drop di un Excel/template del cliente → il sistema lo importa e lo rende un nuovo template riusabile | Il cliente spesso fornisce un proprio format budget |
| 3 | Tabella flessibile | Ogni voce può essere modificata. Colonne aggiunte, tolte, nascoste, filtrate. Work in progress, non form rigido | Deve avere UX simile a un foglio di lavoro |
| 4 | Associazione fatture a singole voci | Ogni voce del PDP deve avere la possibilità di associare la fattura passiva o il template fatturazione attiva | Meccanismo centrale per la quadratura e il blocco |
| 5 | Formalizzazione input via Sally | Audio, foto scontrini, email, note non strutturate → Sally formalizza e inserisce nella riga corretta del PDP | Riduce la barriera d'uso per gli operativi |
| 6 | Upload contratti/accordi/ricevute | Il producer carica il documento → Sally estrae importo, condizioni pagamento, scadenze, deadline → creazione reminder automatici | Le scadenze vanno nel task management o nella memoria di Sally |
| 7 | Suggerimento fornitori da BC | Integrazione con anagrafiche fornitori BC: il sistema suggerisce fornitori usati in commesse simili. Solo il nome, NON il costo | ⚠️ Evitare suggerimento costi: rischioso |
| 8 | Tre stadi con snapshot | Stadio 1 (in gara): macro. Stadio 2 (pre-chiusura): accurato. Stadio 3 (consuntivo): reale con fatture | Ogni stadio genera una snapshot immutabile su Link |
| 9 | Blocco chiusura senza quadratura | Il PDP NON può andare in "completed" finché: tutte le voci non hanno fattura associata, i template fatturazione attiva sono compilati, c'è check di quadratura con BC | Regola ferrea: niente chiusura senza fatture |
| 10 | Approvazione interna | Flusso di approvazione per PDP (Garbarino per clienti importanti): notifica → review → approve/reject | Prima dell'invio al cliente |
| 11 | Sally procedurale nel PDP | Sally risponde su template, procedure, documentazione. Primo filtro prima di escalare al controllo di gestione | Riduce le 120 email/settimana di Calajò |
| 12 | Push automatico verso Link + BC | Le informazioni lavorate nel PDP devono fluire automaticamente: → Link per reportistica (Progress) → BC per contabilità | Stesso set di dati, due destinazioni |

### 5. LINK (GESTIONALE / PROGRESS DIGITALE)

**Link = centralizzatore dati + integratore sistemi + reportistica. Sostituisce il Progress. NON gestisce ciclo attivo, passivo, fornitori, anagrafiche (resta tutto su BC).**

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Creazione commessa | Riceve commessa da Minutes (primario) o LeadMe. Struttura: cliente, evento, date, budget iniziale, margine atteso | Guscio vuoto che si riempie nel tempo |
| 2 | Integrazione Business Central (push) | Push dati commessa verso BC via API Microsoft (OAuth). Nei 3 stadi: apertura, pre-chiusura, chiusura | Testare su commessa standard ASAP. API BC confermata buona da Remigi |
| 3 | Integrazione Business Central (check) | Flusso di verifica: confronto voci PDP con fatture registrate in BC (tramite codice COM). Segnalazione discrepanze | Ogni fattura in BC ha già il codice COM |
| 4 | Ricezione 3 snapshot dal PDP | Stadio 1 (gara), Stadio 2 (pre-chiusura), Stadio 3 (consuntivo) → facing automatico | Serie storica dell'evoluzione budget |
| 5 | Ricezione dati da Flow | Task completati, fatture caricate, costi confermati → alimentano la commessa | Auto-population |
| 6 | Feedback verso LeadMe | Comunica a LeadMe: brief ricevuto, gara vinta, progetto chiuso | Tiene aggiornato lo status commerciale |
| 7 | Dashboard Garbarino (sostituisce Progress) | Status per BU/commerciale/tipo cliente, budget per reparto, marginalità, facing a 3 stadi, comparazione previsto vs consuntivo | Reportistica che elimina il Progress Excel |
| 8 | Reportistica NLP (Sally) | "Qual è il margine sulla commessa X? Come si è evoluto dal previsionale al consuntivo?" | Skill Sally quotata in Link |
| 9 | Gestione template fatturazione attiva | Il producer compila il template fatturazione attiva su Link (stessa UX dell'Excel) → push a BC via API → Elisa conferma in BC | Risolve il "barbatrucco": l'automatismo diventa reale |
| 10 | Integrazione Revolut | Cross-check spese carta vs commesse. Alert spese non associate a COM | ⚠️ ADD-ON — quotare a parte. Cambio provider in corso |

### 6. SALLY (AGENTE VIRTUALE)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | Backend dedicato stand-alone | Backend e frontend separati da Link. Funzioni chat migrate da Minutes qui | Deploy indipendente, cambio prompt da env |
| 2 | Knowledge base procedure | Sally conosce procedure aziendali Noloop, risponde come "collega esperto" | Riduce 120 email/settimana di Calajò |
| 3 | PWA installabile | Web app installabile su telefono (stile ChatGPT). Voce + testo | NO nativa. Web-based |
| 4 | Notifiche proattive | Sally prende iniziativa: email + notifica in-app per alert, reminder, check periodici | Cron job giornaliero |
| 5 | Skill modulari per ogni app | Funzionalità AI specifiche per LeadMe, Flow, PDP, Link → quotate nei rispettivi moduli | Architettura a plugin/skill |
| 6 | Formalizzazione input non strutturati | Audio, foto, email, note → formalizzati in dati strutturati nel PDP o nei task | Cross-modulo: funziona sia nel PDP che in Flow |
| 7 | Estrazione dati da documenti | Contratti, fatture, ricevute → estrae importi, scadenze, condizioni di pagamento | Alimenta reminder + voci PDP |
| 8 | Voice mode live (PREMIUM) | Conversazione vocale real-time (stile GPT Voice) | ⚠️ Quotare come opzione premium. Costo token da valutare |

### 7. ONSITE (APP PARTECIPANTI / Crowd Estensione)

| # | Requisito | Dettaglio | Note |
|---|-----------|-----------|------|
| 1 | App partecipanti PWA | Social networking, programma personalizzato, chatbot evento | Estensione di Crowd per il durante-evento |
| 2 | Collegamento commessa Crowd | Evento Crowd collegato a commessa Link | Già previsto |
| 3 | Gestione pagamenti Crowd | Sistema pagamenti integrato | Da aggiungere a stima Crowd attuale |

---

## PARTE 4: NOTE PER LA QUOTAZIONE

### Approccio suggerito
Per ogni modulo: **quotazione base** + **add-on opzionali** separati per le funzionalità più costose. Doppia opzione dove possibile.

### Elementi da quotare a parte (add-on)
1. **Integrazione Revolut** (Link) — richiede accesso API estratti conto
2. **Validazione procedurale AI** (Flow) — Sally che verifica procedure su ogni task
3. **Voice mode live** (Sally) — costo token alto
4. **Modulo Creativo completo** (Pitch) — da dettagliare dopo call con creativi
5. **Suggerimento fornitori da BC** (PDP) — richiede integrazione read con anagrafiche BC

### Integrazioni critiche da testare ASAP
- **Business Central (Dynamics) API** — OAuth, creare app in ecosistema Microsoft, testare su commessa standard. Bidirezionale: push dati + read fatture per check quadratura
- **LinkedIn scraping** — limiti rate, gestione autenticazione Sales Navigator

### Punto aperto: dove vive il PDP?
Da definire se il piano di produzione digitale vive dentro Flow (più naturale per l'associazione con i task operativi) o dentro Link (più naturale per l'associazione con la commessa e il push verso BC). Potrebbe anche essere un modulo a sé che comunica con entrambi. Federico e Simone valutino l'architettura migliore.

### Bundle
Sconto bundle se il cliente prende tutte le soluzioni insieme. Da definire in fase commerciale.

### NOT (Noloop On Trade)
Quotazione separata — i due PDF sono già in chat (logistica + vendite). Stimare indipendentemente da Wave 2.

### Credito d'imposta
Le soluzioni sono potenzialmente deducibili al 50%+ come investimento in innovazione tecnologica. Questo potrebbe permettere di presentare quotazioni più ambiziose senza spaventare il cliente. Carlo sta facendo ricerche in parallelo su questa strada.