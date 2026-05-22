# Noloop Wave 2 — Soluzioni Aggiornate post Analisi Procedure

**Versione aggiornata a seguito dell'analisi incrociata con le procedure operative ufficiali Noloop**

---

## SOLUZIONI IMPATTATE

---

### Link — Sistema Gestionale

**Descrizione di alto livello**

Centralizza l'economia di ogni commessa attraverso tre stadi di budget — dal previsionale al consuntivo — con quadratura automatica verso Business Central. Integra il Piano di Produzione Digitale (PDP) come strumento di lavoro quotidiano che sostituisce i fogli Excel degli operativi, eliminando il doppio inserimento Excel → BC. Sostituisce il Progress Excel con una dashboard direzionale che mostra in tempo reale costi, margini, scostamenti e carichi di lavoro per la Direzione.

**Funzionalità chiave**

- Creazione KOM automatica da Minutes con push verso BC via API. Il Responsabile di Controllo riceve una notifica con i dati pre-compilati (cliente, evento, date, budget, % utile, regime fiscale, tipologia fatturazione) e conferma o corregge prima del push — eliminando lo scambio email ma preservando il ruolo di gatekeeper e la validazione del regime fiscale (vincolo: un regime per commessa)
- Piano di Produzione Digitale (PDP) flessibile: template intelligenti basati su storico commesse, ruolo dell'operativo e contesto catturato da Minutes. Import diretto di template cliente. Ogni voce è modificabile; colonne aggiungibili, filtrabili, nascondibili. Sostituisce l'Excel operativo giornaliero
- Budget digitale a tre stadi (previsionale, pre-chiusura, consuntivo) con snapshot automatici ad ogni passaggio di stadio. Il facing temporale dell'evoluzione budget è consultabile dalla Direzione su Link
- Associazione fatture passive alle voci del PDP con gestione dei due canali: per le fatture SDI (Cassetto Fiscale), cross-check automatico con Anteprima Documento Elettronico in BC tramite codice commessa; per le fatture non-SDI (estere, regime minimi), upload diretto nel PDP con deposito automatico nella cartella di rete (`\\172.16.0.121\Documi\downloads\CONS\pdf`) nel formato richiesto (NOME OPERATORE_COMMESSA). Il sistema distingue tra proforma (non fiscali, archiviate come comprova) e fatture finali (documenti fiscali a consuntivo)
- Gestione template fatturazione attiva integrata: l'operativo compila il template direttamente su Link (stessa UX del format Excel attuale — PO, importi, codici IVA, articoli), il dato viene pushato a BC via API sulla casella `fatturazioneatttiva@noloop.eu` o direttamente via API BC — eliminando il passaggio email manuale a Elisa Remigi
- Blocco chiusura commessa finché: tutte le voci del budget non hanno fattura passiva associata (verificata sia in BC/Cassetto Fiscale sia come upload diretto), i template di fatturazione attiva sono stati compilati e inviati, e il check di quadratura tra PDP e BC è superato
- Integrazione cash flow: i dati inseriti nel PDP alimentano automaticamente le Righe Pianificazione Commessa (ricavi, task RICAVI) e le Richieste di Pagamento in stato Pianificato (costi) su BC — rispettando la logica esistente di BC (importi ricavi al netto IVA, costi IVA inclusa, codici ubicazione STIME, articoli IVA corretti). L'operativo inserisce una volta nel PDP, il sistema popola BC
- Dashboard direzionale (Garbarino): marginalità per commessa/BU/commerciale/tipo cliente, facing nel tempo attraverso i 3 stadi, comparazione previsto vs consuntivo, carichi di lavoro per persona. Sostituisce il Progress Excel
- Reportistica in linguaggio naturale con Sally ("qual è il margine sulla commessa X?", "come si è evoluto il budget?")

**Pain point risolti**

- Il Progress viene compilato a mano duplicando dati già presenti su Excel e BC — eliminato: il PDP alimenta automaticamente sia BC che la dashboard direzionale
- Le chiusure incomplete generano fornitori aperti a fine anno senza documentazione — eliminato: blocco automatico chiusura senza fatture
- La Direzione non ha visibilità in tempo reale sull'evoluzione dei budget — eliminato: snapshot automatici e facing temporale
- Il doppio inserimento Excel → BC pesa sugli operativi — eliminato: inserimento unico nel PDP
- Zaghi perde ore a rincorrere i commerciali per dati del Progress — eliminato: i dati fluiscono automaticamente dal PDP

**Beneficio stimato**

- Eliminazione completa della compilazione manuale del Progress
- Risparmio 20-25% sulla gestione amministrativa
- Zero chiusure incomplete grazie al blocco automatico senza fatture
- Eliminazione del doppio inserimento Excel → BC per operativi e producer

---

### Flow — Task Management System

**Descrizione di alto livello**

Organizza le attività operative di ogni commessa: assegna compiti alle persone, mostra i task in formato Kanban e Gantt, traccia avanzamenti di status e dipendenze, traccia le scadenze. Da mobile, permette di aggiornare i task con note vocali, foto e documenti anche durante i sopralluoghi. Integra il transito dei budget previsionale e consuntivo verso Link con verifiche di completezza, e rispetta il workflow di doppia approvazione già in essere su Business Central per le richieste di pagamento.

**Funzionalità chiave**

- Ricezione task strutturati da Minutes (assegnatario, scadenza, note, priorità). Il Client Lead rivede e conferma prima del push su Flow. Avviene in due momenti: post-brainstorming (task per la presentazione) e post-accettazione (task per l'evento)
- Vista Kanban: Pending / In Progress / Completed / Deferred. Vista per persona e per commessa. Possibilità Gantt per le commesse complesse
- Task liberi + task tipizzati: menù dropdown per tipo task a contesto chiuso. Ai task tipizzati si allegano le procedure interne Noloop (es. procedura richiesta pagamento, procedura Revolut, procedura fatture estere)
- Upload file nei task: immagini, foto sopralluoghi, documentazione, fatture, contratti, ricevute. File associati poi visibili su Link
- Interazione Sally vocale/testo: "Ho fatto il sopralluogo, allego foto" → Sally identifica il task, aggiorna stato, carica file
- Transito budget previsionale (Budget 2) e consuntivo (Budget 3) verso Link: Flow è il veicolo attraverso cui i budget transitano con verifiche di completezza (es. nel consuntivo, ogni voce deve avere fattura associata)
- Rispetto workflow approvazioni: quando un task genera una richiesta di pagamento, il sistema rispetta la doppia approvazione (1° Resp. Reparto → 2° Resp. Controllo/Direzione) e le tempistiche BC (standard: entro lunedì h15 per pagamento martedì; urgente: entro h12 stesso giorno). Flow non sostituisce l'approvazione ma la facilita con alert e pre-compilazione
- Gestione scadenze contrattuali: Sally estrae deadline dai contratti caricati (rooming list, emissione biglietti, cancellation policy) e li trasforma in reminder automatici su Flow
- Blocco chiusura commessa se il Client Lead tenta di chiudere ma mancano fatture, documenti obbligatori o task incompleti — segnalazione di cosa manca
- Push dati aggregati su Link al completamento di tutti i task

**Pain point risolti**

- Gli operativi dimenticano di recuperare fatture dai fornitori entro i 15 giorni dal ritorno — Flow traccia e blocca
- Le scadenze contrattuali (rooming list, biglietti) vengono gestite a memoria o su note personali — automatizzate con reminder
- Le procedure operative (come compilare una richiesta di pagamento, come gestire fatture estere) generano 120 email/settimana a Calajò — le procedure sono embedded nei task tipizzati e Sally guida l'operativo

**Beneficio stimato**

- Riduzione significativa dei task dimenticati o in ritardo
- Visibilità completa sullo stato di avanzamento per commessa e per persona
- Operativi guidati nelle procedure senza dover chiedere al controllo di gestione

---

### Sally — Agente 360°

**Descrizione di alto livello**

Agente virtuale che risponde a qualsiasi domanda sui dati aziendali: stato commesse, storico clienti, documenti, procedure. Funziona come un collega esperto sempre disponibile, accessibile da ogni applicativo dell'ecosistema e come PWA installabile su telefono. Conosce le procedure operative Noloop nel dettaglio — dalla gestione delle ritenute alla compilazione dei giustificativi Revolut — e prende iniziativa con notifiche proattive su scadenze, lead dormienti e anomalie.

**Funzionalità chiave**

- Backend e frontend dedicati stand-alone, separati da Link. Deploy indipendente
- Knowledge base procedure aziendali: Sally conosce tutte le procedure Noloop (richieste pagamento con casistiche ritenute per tipo fornitore, fatturazione attiva con format e codici IVA, gestione Revolut con regole giustificativi e limiti €500, fatture estere con regole deposito cartella di rete e distinzione proforma/fattura finale, apertura commessa con campi obbligatori e vincoli regime fiscale). Risponde come "collega esperto" riducendo le 120 email/settimana a Calajò
- PWA installabile su telefono (stile ChatGPT). Voce + testo. NO app nativa
- Notifiche proattive (cron job giornaliero): check lead dormienti su LeadMe (last update < 3 settimane, azioni pendenti), alert scadenze contrattuali estratte da contratti caricati su Flow, reminder pre-chiusura commessa, segnalazione spese Revolut non associate a COM
- Skill modulari per ogni app: funzionalità AI specifiche per LeadMe (reportistica NLP, check attività), Flow (interazione vocale, validazione procedurale), Link (interrogazione dati, report linguaggio naturale). Quotate nei rispettivi moduli
- Assistente PDP: formalizza input non strutturati (audio, foto scontrini, email, note) in voci del PDP; estrae da contratti e accordi caricati: importo, condizioni di pagamento, scadenze, deadline; suggerisce fornitori già registrati in BC utilizzati in commesse simili (solo nome, NON costo)
- Cross-check Revolut intelligente: opera su dati post-approvazione (rispettando il ciclo 48h giustificazione → approvazione settimanale Resp. Reparto → estrazione mensile amministrazione). Identifica spese approvate non collegate a nessun codice commessa, verifica la sintassi AAXNNNNN nel campo descrizione
- Voice mode live (PREMIUM): conversazione vocale real-time. Quotare come opzione separata per costo token

**Pain point risolti**

- 120 email/settimana a Calajò per domande procedurali ("non distinguono una fattura da una ricevuta") — Sally risponde con la procedura corretta, guidando passo-passo
- Spese Revolut non collegate: appaiono in contabilità 3 mesi dopo — Sally segnala proattivamente le anomalie dopo l'approvazione
- Fornitori aperti a fine anno senza documentazione — Sally fa da primo filtro, ricorda le scadenze, blocca prima dell'escalation al controllo di gestione
- Input non strutturati dagli operativi (note vocali, foto, email) che non entrano mai a sistema — Sally li formalizza e inserisce nel PDP

**Beneficio stimato**

- Riduzione drastica delle richieste procedurali al controllo di gestione (target: -70% delle 120 email/settimana)
- Operativi autonomi nelle procedure standard senza formazione aggiuntiva
- Chiusure più rapide e complete grazie all'assistenza proattiva

---

## IL PROCESSO OPERATIVO E2E (aggiornato)

---

### Step 1 — Acquisizione

Il team New Business identifica nuovi prospect attraverso lo scraper e li importa automaticamente in LeadMe per tracciare le interazioni e monitorare eventuali cambi di ruolo o azienda nel tempo. Sally monitora i lead attivi, verifica quelli con last update inferiore a 3 settimane, controlla se ci sono azioni pendenti (call, email, messaggio, presentazione da spedire) e manda un recap al commerciale di riferimento via email + notifica in-app.

**Soluzioni coinvolte:** LeadMe – Scraper Evolution, Sally – Agente 360°

---

### Step 2 — Proposta

All'arrivo del brief si tiene una call su Minutes, dalla quale emergono task e dati per l'apertura KOM. Minutes estrae i dati strutturati (cliente, evento, date, budget iniziale, % utile, regime fiscale, tipologia fatturazione) e triggera la creazione della commessa su Link. Il Responsabile di Controllo riceve una notifica con i dati pre-compilati e conferma o corregge prima del push verso BC — preservando il ruolo di gatekeeper senza lo scambio email. La produzione utilizza il Venue Finder per scouting e per generare la presentazione. In parallelo, il reparto creativo sfrutta Pitch per render, video e materiali visivi. I reparti lavorano sul PDP (ognuno la propria sezione) con le stime macro (Budget 1). Quando il PDP è pronto, la versione cliente viene esportata e uno snapshot va su Link per il facing.

**Soluzioni coinvolte:** Minutes – Redazione Minute, Link – Gestionale, AI Venue Finder – Scouting, Pitch – Modulo Creativo

---

### Step 3 — Conversione

Se la proposta viene accettata, la commessa passa in stato "vinta" sul Gestionale e l'istanza di evento su Crowd — senza duplicazioni manuali. Si svolge il debrief con i team coinvolti per definire le responsabilità e si carica su Minutes, che estrae i task operativi. Il PDP si evolve: l'operativo aggiorna le voci con i costi contrattati, carica contratti e accordi. Sally estrae scadenze dai contratti (rooming list, biglietti, cancellation policy) e crea reminder su Flow. Il Budget 2 (previsionale) transita attraverso Flow verso Link con verifiche di completezza, e uno snapshot pre-chiusura va su Link e su BC per il facing. LeadMe riceve indietro lo status aggiornato della gara.

**Soluzioni coinvolte:** Minutes – Redazione Minute, Link – Gestionale, Flow – Task Management, Crowd – Gestione Eventi, Sally – Agente 360°

---

### Step 4 — Esecuzione

Il Client Lead supportato da Minutes assegna i task sul Task Management System. Le Segreterie gestiscono partecipanti, logistica e comunicazioni su Crowd. Durante l'evento, l'AI Event Companion fornisce assistenza diretta ai partecipanti e funzionalità di social networking. Gli operativi aggiornano i task su Flow anche da mobile (note vocali, foto sopralluoghi, documenti). Sally formalizza input non strutturati in voci del PDP e guida gli operativi nelle procedure (compilazione richieste pagamento con casistiche ritenute, gestione giustificativi Revolut, deposito fatture estere). Le richieste di pagamento generate rispettano il workflow di doppia approvazione su BC (Resp. Reparto → Resp. Controllo/Direzione).

**Soluzioni coinvolte:** Flow – Task Management System, Crowd – Gestione Eventi, OnSite – App Partecipanti, Sally – Agente 360°

---

### Step 5 — Chiusura

A evento concluso, l'operativo ha 15 giorni per completare la chiusura. Il sistema verifica la quadratura con BC su due canali: per le fatture SDI, cross-check automatico con Anteprima Documento Elettronico in BC tramite codice commessa; per le fatture non-SDI (estere, regime minimi), verifica che i documenti siano stati caricati nel PDP e depositati nella cartella di rete. Sally segnala proattivamente le fatture mancanti e le spese Revolut approvate ma non associate a nessuna commessa. Il PDP non può passare in stato "completed" finché tutte le voci non hanno fattura associata e i template di fatturazione attiva non sono stati compilati e inviati. Una volta confermata la quadratura, i dati finali confluiscono su Link (dashboard direzionale) e su BC (consuntivo). La Direzione analizza costi, margini e scostamenti dal budget con facing temporale attraverso i 3 stadi. I dati relativi all'evento vengono consolidati su Crowd. LeadMe riceve lo status di chiusura.

**Soluzioni coinvolte:** Link – Gestionale, Flow – Task Management, Sally – Agente 360°, Crowd – Gestione Eventi

---

## APPLICATIVI TRASVERSALI: Sally & Minutes

Sally e Minutes sono tool trasversali e accessibili a tutti i reparti in ogni fase. Sally per ricercare documenti, consultare procedure operative (richieste pagamento, fatturazione, Revolut, fatture estere, apertura commessa) e ottenere risposte immediate — riducendo drasticamente il carico sul controllo di gestione. Minutes documenta automaticamente le riunioni di progetto, generando verbali e action item.

---

## NOTE PER LA PRESENTAZIONE

**Cosa è cambiato rispetto alla versione precedente:**

1. **Apertura commessa**: aggiunto step di notifica/conferma al Resp. Controllo (gatekeeper preservato, email eliminata)
2. **Cash flow BC**: chiarito che il PDP alimenta le strutture già esistenti in BC (Righe Pianificazione Commessa + Richieste Pagamento in stato Pianificato) — non le sostituisce. Valore = inserimento unico, non doppio sistema
3. **Fatture passive**: distinti i due canali (Cassetto Fiscale SDI vs. cartella di rete non-SDI) con logiche di check diverse. Aggiunta gestione proforma vs. fattura finale per fornitori esteri
4. **Workflow approvazioni**: Flow rispetta la doppia approvazione BC per le richieste di pagamento, non la bypassa
5. **Revolut**: cross-check opera su dati post-approvazione, rispettando il ciclo operativo (48h giustificazione → approvazione settimanale → estrazione mensile). Verifica sintassi codice commessa AAXNNNNN
6. **Sally knowledge base**: specificato il contenuto procedurale reale (casistiche ritenute, articoli IVA, regole Revolut, regole fatture estere)