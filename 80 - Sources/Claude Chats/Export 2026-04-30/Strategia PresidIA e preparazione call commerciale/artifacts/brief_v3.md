# BRIEF TECNICO-FUNZIONALE — PROGETTO PRESIDIA

**Documento riservato — uso interno per quotazione tecnica**
**Marzo 2026**

---

## Cos'è PresidIA

PresidIA è una piattaforma web per PMI che trasforma i cedolini paga — un documento che ogni azienda già produce ogni mese — in una fotografia organizzativa strutturata con indicatori preventivi a semaforo. L'obiettivo è far emergere criticità nella gestione del personale prima che diventino problemi (ispezioni, cause, sanzioni), e fornire al consulente del lavoro un quadro aggiornato per intervenire in modo mirato.

La piattaforma NON è un software paghe, NON è un gestionale HR e NON formula pareri professionali. È un layer informativo che si posiziona tra l'azienda e il consulente, generando consapevolezza per la prima e segnalazioni strutturate per il secondo.

Il CCNL di riferimento per il primo rilascio è il **CCNL Commercio — Terziario**, verticale sul sottosettore pubblici esercizi. L'architettura deve essere predisposta per estensione futura ad altri CCNL senza riscrittura del codice.

---

## Come funziona — il flusso

Il ciclo operativo della piattaforma è lineare:

**1. L'azienda si registra e configura il profilo.** Inserisce i dati anagrafici, la tipologia di attività, gli orari operativi, eventuali dati dimensionali del settore (es. coperti e tavoli per un ristorante), e collega il proprio consulente del lavoro. Opzionalmente, collega un referente sicurezza.

**2. Ogni mese carica i cedolini paga in PDF.** È l'unica attività periodica richiesta. Il sistema estrae automaticamente i dati contrattuali (livello, tipo contratto, date, FT/PT), retributivi (lordo, straordinari, trasferte, rimborsi, voci variabili) e organizzativi (ferie maturate/godute/residue, ore lavorate).

**3. Il sistema analizza i dati estratti.** Li incrocia con le regole del CCNL, con il profilo dell'azienda e con lo storico dei mesi precedenti. Genera indicatori a semaforo per ogni area di monitoraggio.

**4. L'azienda vede una dashboard organizzativa.** Struttura del personale, costi, ferie, straordinari, scadenze, turnover, voci retributive particolari, sicurezza, osservatorio organizzativo — tutto con il semaforo (verde = stabile, giallo = da monitorare, rosso = attenzione, blu = decisione registrata dall'azienda).

**5. Il consulente riceve segnalazioni contestualizzate** e accede a una propria dashboard aggregata dove vede tutte le aziende del suo portafoglio, con alert cross-azienda e pattern avanzati non visibili alle singole aziende.

---

## I due utenti

### L'azienda
Vede la dashboard organizzativa con tutti i moduli di monitoraggio, il Q&A normativo per domande sul CCNL, il modulo sicurezza, lo storico delle segnalazioni e delle proprie decisioni organizzative. Può generare un report annuale.

### Il consulente del lavoro
Vede tutto quello che vede l'azienda, più: una dashboard aggregata multi-azienda, letture incrociate tra i clienti (es. "pattern straordinari su part-time presente nel 30% delle aziende seguite"), pattern organizzativi avanzati, alert preventivi. L'area sicurezza segue un routing separato: le notifiche vanno al referente sicurezza se presente, altrimenti all'azienda.

---

## Le aree di monitoraggio

Ciascuna opera sugli stessi dati estratti dai cedolini, con una chiave di lettura diversa:

- **Osservatorio organizzativo** — incrocia organico, ore, costi e straordinari con la struttura operativa dell'attività (tipologia, orario, dimensione). Produce una "lettura organizzativa", mai una valutazione di conformità.
- **Inquadramento e mansioni** — confronta il livello contrattuale nel cedolino con la mansione effettiva dichiarata e le declaratorie CCNL.
- **Ferie** — residue, godute, maturate. Soglie basate su regole CCNL (2 settimane nell'anno, residuo entro 18 mesi).
- **Straordinari** — frequenza, andamento mensile, proiezione annua. Pattern detection su profili part-time.
- **Part-time e struttura retributiva** — rileva pattern come part-time con ore supplementari ricorrenti, voci variabili ricorrenti, compensi non imponibili.
- **Scadenze contrattuali** — countdown su contratti a termine e apprendistati, con monitoraggio proroghe e durata complessiva.
- **Turnover** — ingressi, cessazioni, stabilità dell'organico nel tempo.
- **Voci retributive particolari** — trasferte, rimborsi, voci non imponibili. L'azienda può solo scegliere tra "verifica con il consulente" o "documentazione presente" (che registra una decisione organizzativa).
- **Sicurezza sul lavoro** — modulo autonomo con checklist adempimenti (DVR, RSPP, formazione, sorveglianza sanitaria). Tre stati: presente, non presente, non applicabile. Upload documentazione.

---

## Funzionalità trasversali

- **Q&A normativo** — risponde a domande sul CCNL citando articoli. Le risposte sono sempre informative ("Il CCNL prevede che..."), mai consulenziali. Quando serve una valutazione applicativa, rimanda al consulente.
- **Avatar digitale** — guida della piattaforma, spiegazione risultati, supporto normativo. Personalizzabile dal consulente (immagine, voce, nome) come servizio opzionale.
- **Registro storico** — memoria organizzativa dell'azienda: indicatori, decisioni, variazioni organico, evoluzione costi. Portabile al nuovo consulente previa autorizzazione.
- **Report annuale** — generazione automatica con tutti gli indicatori e le decisioni dell'anno. Esportazione PDF.

---

## Architettura privacy richiesta

Il cliente richiede un'architettura privacy by design a doppio archivio:

- **Archivio A** (aziendale): contiene nominativi, documenti caricati, collegamento dipendente ↔ ID pseudonimo. Accesso riservato all'azienda.
- **Archivio B** (pseudonimizzato): contiene solo ID anonimi e dati estratti. Il motore di analisi opera esclusivamente su questo archivio.

L'analisi avviene su Archivio B; la ricomposizione con i nominativi avviene solo nell'Archivio A per la visualizzazione finale all'azienda.

---

## Note per la quotazione

- Il contenuto normativo (traduzione articoli CCNL in regole) è a carico di un esperto esterno, non dello sviluppatore. Lo sviluppatore implementa il motore e la struttura dati, non le regole.
- Il primo rilascio copre esclusivamente il CCNL Commercio, sottosettore pubblici esercizi. L'architettura delle regole deve essere parametrica per supportare altri CCNL futuri.
- Ogni output della piattaforma è vincolato a un tono informativo, mai consulenziale. Questo vincolo è non negoziabile e va rispettato in tutta l'interfaccia.
- Il dettaglio dei requisiti funzionali per modulo è nel Requirement Log allegato.