# BRIEF TECNICO-FUNZIONALE — PROGETTO PRESIDIA

**Documento riservato — uso interno per quotazione tecnica**
**Aprile 2026**

---

## Cos'è PresidIA

PresidIA è una piattaforma web per PMI che trasforma i cedolini paga — un documento che ogni azienda già produce ogni mese — in una fotografia organizzativa strutturata con indicatori preventivi a semaforo. L'obiettivo è far emergere criticità nella gestione del personale prima che diventino problemi (ispezioni, cause, sanzioni), e fornire al consulente del lavoro un quadro aggiornato per intervenire in modo mirato.

La piattaforma NON è un software paghe, NON è un gestionale HR e NON formula pareri professionali. È un layer informativo tra l'azienda, il consulente del lavoro e, ove presente, l'associazione di categoria — generando consapevolezza per l'impresa, segnalazioni strutturate per il professionista e dati aggregati per l'associazione.

Il CCNL di riferimento per il primo rilascio è il **CCNL Commercio — Terziario**, verticale sul sottosettore pubblici esercizi. L'architettura deve essere predisposta per estensione futura ad altri CCNL senza riscrittura del codice.

---

## Come funziona — il flusso

**1. L'azienda si registra e configura il profilo.** Inserisce dati anagrafici, tipologia di attività, orari operativi, distribuzione del lavoro (5 o 6 giorni), dati dimensionali del settore (es. coperti e tavoli per un ristorante). Collega il consulente del lavoro e opzionalmente un referente sicurezza e un'associazione di categoria.

**2. Ogni mese carica i cedolini paga in PDF.** È l'unica attività periodica. Il sistema estrae automaticamente dati contrattuali, retributivi e organizzativi — inclusi giorni di malattia e permessi.

**3. L'azienda completa i dati mancanti.** In particolare: la mansione effettivamente svolta da ciascun dipendente, dato non presente nel cedolino e necessario per il confronto con le declaratorie CCNL.

**4. Il sistema analizza i dati estratti.** Li incrocia con le regole del CCNL, con il profilo dell'azienda, con la struttura operativa e con lo storico dei mesi precedenti. Genera indicatori a semaforo per ogni area di monitoraggio.

**5. L'azienda vede la dashboard organizzativa.** Struttura del personale, costi, ferie, straordinari, scadenze, turnover, voci retributive, sicurezza, assenteismo, parità di genere, osservatorio organizzativo — tutto con semaforo a 4 stati (verde = stabile, giallo = monitorare, rosso = attenzione, blu = decisione registrata dall'azienda).

**6. Il consulente riceve segnalazioni contestualizzate** e accede a una dashboard aggregata con tutte le aziende del portafoglio, pattern avanzati e letture incrociate non visibili alle singole aziende.

**7. L'associazione di categoria** (se collegata e con consenso esplicito) riceve segnalazioni sintetiche e non nominative limitate a: assenteismo per malattia, parità di genere e differenze retributive.

---

## I tre utenti

### L'azienda
Dashboard organizzativa completa, tutti i moduli di monitoraggio, Q&A normativo, sicurezza, storico e report annuale. Può qualificare alcune situazioni (voci retributive, scelte organizzative) che vengono registrate e storicizzate.

### Il consulente del lavoro
Tutto quello che vede l'azienda, più: dashboard aggregata multi-azienda, letture incrociate, pattern avanzati, alert preventivi, analisi di coerenza mansione/livello/declaratorie. L'area sicurezza segue un routing separato verso il referente sicurezza.

### L'associazione di categoria
Riceve solo segnalazioni sintetiche, non nominative, limitate a tre aree (assenteismo, parità di genere, differenze retributive). Solo con consenso esplicito dell'azienda.

---

## Le aree di monitoraggio

Ciascuna opera sugli stessi dati estratti dai cedolini, con una chiave di lettura diversa:

- **Osservatorio organizzativo** — incrocia organico, ore, costi e straordinari con la struttura operativa dell'attività. Calcola un indicatore di copertura basato sul confronto tra capacità operativa disponibile (al netto di assenze) e orari di apertura. Non determina il fabbisogno teorico di personale.
- **Inquadramento e mansioni** — confronta livello contrattuale, mansione effettiva (input aziendale) e declaratorie CCNL. Esiti: coerente / merita attenzione / da verificare.
- **Ferie** — residue, godute, maturate. Soglie basate su regole CCNL.
- **Straordinari** — frequenza, andamento mensile, proiezione annua.
- **Part-time e struttura retributiva** — rileva pattern come part-time con ore supplementari ricorrenti, voci variabili ricorrenti, compensi non imponibili. Integrato con il modulo voci retributive.
- **Scadenze contrattuali** — countdown su contratti a termine e apprendistati, con proroghe e durata complessiva.
- **Turnover** — ingressi, cessazioni, stabilità dell'organico.
- **Voci retributive particolari** — trasferte, rimborsi, voci non imponibili. L'azienda sceglie tra "verifica con consulente", "documentazione presente" o "scelta organizzativa aziendale". In assenza di selezione, resta come elemento da verificare.
- **Assenteismo per malattia** — percentuale assenteismo basata su giorni malattia, ore lavorate, distribuzione del lavoro. Andamento nel tempo e impatto organizzativo.
- **Parità di genere** — incidenza femminile su organico e assunzioni, distribuzione per livello, differenze retributive aggregate e per gruppi omogenei.
- **Sicurezza sul lavoro** — modulo autonomo con checklist adempimenti. Tre stati: presente, non presente, non applicabile. Upload documentazione. Routing notifiche separato.

---

## Funzionalità trasversali

- **Q&A normativo** — risponde a domande sul CCNL citando articoli. Informativo, mai consulenziale.
- **Avatar digitale** — guida piattaforma, spiegazione risultati, supporto normativo. Personalizzabile dal consulente (servizio opzionale).
- **Registro storico** — memoria organizzativa: indicatori, decisioni, variazioni, qualificazioni voci. Portabile al nuovo consulente previa autorizzazione. Evoluzione progressiva: il sistema migliora gli indicatori nel tempo usando lo storico accumulato.
- **Report annuale** — generazione automatica, esportazione PDF.

---

## Architettura privacy richiesta

Privacy by design a doppio archivio:

- **Archivio A** (aziendale): nominativi, dati identificativi, documenti, mansione effettiva, collegamento dipendente ↔ ID pseudonimo. Accesso: azienda e soggetti autorizzati.
- **Archivio B** (pseudonimizzato): solo ID anonimi e dati estratti. Il motore di analisi opera esclusivamente su questo archivio.

Principio di minimizzazione dei dati. Ricomposizione finale solo in Archivio A. Tracciabilità di tutte le scelte e decisioni.

Lo schema dati logico completo è fornito come documento allegato separato.

---

## Note per la quotazione

- Il contenuto normativo (traduzione articoli CCNL in regole) è a carico di un esperto esterno, non dello sviluppatore. Lo sviluppatore implementa il motore e la struttura dati, non le regole.
- Il primo rilascio copre esclusivamente il CCNL Commercio, sottosettore pubblici esercizi. L'architettura delle regole deve essere parametrica.
- Ogni output della piattaforma è vincolato a un tono informativo, mai consulenziale. Vincolo non negoziabile.
- Disclaimer obbligatorio in piattaforma: "Le informazioni fornite hanno valore informativo e non costituiscono parere professionale. Per un parere ufficiale è necessaria la sottoscrizione del mandato professionale."
- Lo schema dati logico allegato è proposto dal cliente come riferimento — da validare e adattare in fase di design tecnico.
- Il cliente sta preparando anche una mappa schermate e flusso utente che verrà fornita come documentazione aggiuntiva.
- Il dettaglio dei requisiti funzionali per modulo è nel Requirement Log allegato.