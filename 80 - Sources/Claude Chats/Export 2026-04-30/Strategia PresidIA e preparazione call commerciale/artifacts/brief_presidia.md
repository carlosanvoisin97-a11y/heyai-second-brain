# BRIEF TECNICO-FUNZIONALE — PROGETTO PRESIDIA

**Documento riservato — uso interno per quotazione tecnica**
**Data: Marzo 2026**

---

## 1. Nome progetto

**PresidIA** — Piattaforma di governance organizzativa del lavoro per PMI.

---

## 2. Settore e profilo cliente

### Target di mercato
PMI italiane del settore commercio e servizi, in particolare pubblici esercizi (bar, ristoranti, strutture ricettive), negozi, studi professionali e aziende di servizi. Il CCNL di riferimento (Commercio — Terziario, Distribuzione e Servizi) copre circa 3 milioni di lavoratori in Italia.

### Utenti finali
La piattaforma ha due profili utente distinti con viste e funzionalità differenziate:

- **Imprenditore / titolare PMI**: senza competenze HR interne, gestisce il personale in modo reattivo. Ha bisogno di una fotografia organizzativa comprensibile senza formazione tecnica. Carica un solo dato periodico (cedolini paga) e riceve output immediato.
- **Consulente del lavoro**: professionista iscritto all'albo con portafoglio di clienti PMI. Ha bisogno di una vista aggregata multi-azienda con alert preventivi, pattern organizzativi avanzati e letture incrociate. Oggi lavora in modalità reattiva (il cliente chiama quando c'è già un problema).

### Canale di distribuzione primario
B2C diretto alle aziende tramite reti associative di categoria (associazioni datoriali con bacino di aziende associate). L'associazione agisce come facilitatore/finanziatore, non come partner operativo. Può finanziare lo sviluppo del pilota e poi distribuire la piattaforma come servizio aggiuntivo ai propri associati.

---

## 3. Problema di business

Ogni azienda con dipendenti è soggetta a un CCNL — un documento normativo complesso che regola retribuzioni, orari, ferie, malattia, sicurezza, inquadramenti, straordinari, licenziamenti e centinaia di altre casistiche. Le PMI tipicamente non lo leggono, non lo capiscono e non sanno se sono in regola.

**Il pattern attuale è interamente reattivo**: il consulente del lavoro viene coinvolto a problema già esploso — un'ispezione dell'Ispettorato del Lavoro, una causa di un dipendente, una contestazione sindacale. Il consulente perde tempo a ricostruire il contesto, fa lavoro ripetitivo a basso valore e non riesce a scalare il portafoglio clienti.

**PresidIA trasforma questo rapporto da reattivo a preventivo.** L'impresa carica periodicamente i cedolini paga, il sistema estrae automaticamente i dati rilevanti, li incrocia con le regole del CCNL e con il profilo organizzativo dell'azienda, e genera:

- Una fotografia organizzativa immediata con indicatori a semaforo (verde/giallo/rosso)
- Segnalazioni contestualizzate inviate automaticamente al consulente del lavoro
- Alert preventivi su scadenze, pattern anomali, soglie normative

**Il vincolo deontologico è fondamentale**: la piattaforma NON può fornire consulenza professionale (sarebbe esercizio abusivo della professione — solo un consulente del lavoro iscritto all'albo può farlo). PresidIA è un layer informativo: informa, segnala, organizza. Ogni output deve rimandare al consulente per le valutazioni applicative.

---

## 4. Quadro normativo di riferimento

### CCNL primario
**CCNL Commercio — Terziario, Distribuzione e Servizi**, il contratto collettivo più diffuso in Italia. Il sistema parte verticalmente da questo CCNL, con visione di espansione futura ad altri.

### Obblighi di compliance monitorati
- **Ferie**: almeno 2 settimane nell'anno di maturazione, residuo entro 18 mesi (pena sanzioni)
- **Straordinari**: limite massimo 250 ore annue per lavoratore (Artt. 136–137 CCNL)
- **Retribuzioni**: 14 mensilità (tredicesima Art. 220 + quattordicesima Art. 221)
- **Inquadramento**: coerenza tra livello contrattuale, mansione effettiva e declaratorie CCNL
- **Contratti a termine**: scadenze, proroghe, durata complessiva massima
- **Apprendistato professionalizzante**: durata massima variabile per livello (es. 6°S = 24 mesi, altri livelli = 36 mesi)
- **Part-time**: pattern anomali (part-time + straordinari sistematici, part-time + voci variabili ricorrenti)
- **Sicurezza sul lavoro**: DVR, nomina RSPP, formazione lavoratori, sorveglianza sanitaria, addetti emergenza

### Fonti normative da ingerire
- **CNEL** — Archivio ufficiale CCNL (testi pubblici scaricabili, fonte primaria per il motore di regole)
- **Normattiva.it** — Legislazione italiana (no API pubbliche, testi open data ingeribili in bulk)
- **INPS** — Circolari e messaggi su contributi, congedi, ammortizzatori
- **INL (Ispettorato Nazionale del Lavoro)** — Circolari e note interpretative
- **INAIL** — Scadenze denunce, comunicazioni obbligatorie
- **EUR-Lex** — Direttive UE sul lavoro (API SPARQL + REST disponibili)
- **Tabelle retributive CCNL** — Pubblicate da sindacati e CNEL (PDF/Excel aggiornabili a ogni rinnovo)
- **ISTAT** — API SDMX REST per dati statistici su occupazione e retribuzioni (benchmark)

### Indicatori richiesti dal canale distributivo
In aggiunta ai requisiti base, il canale distributivo ha richiesto due indicatori specifici:
- **Tasso di assenteismo**: estrazione voce malattia dal cedolino, calcolo percentuale su ore lavorabili annue (es. 2.080h), aggregabile per comparto/settore di attività
- **Disparità retributiva di genere**: confronto retributivo uomo/donna a parità di livello e tipologia contrattuale

---

## 5. Scope della soluzione

### 5.1 Profilo Aziendale (Onboarding)
Configurazione iniziale dell'azienda: ragione sociale, P.IVA, CCNL applicato, tipologia attività (menu basato su categorie settoriali), orari apertura/chiusura, giorni operativi, fascia fatturato, dati specifici per settore (es. coperti e tavoli per ristorazione, camere per ricettivo, superficie per negozi). Collegamento obbligatorio del consulente del lavoro (nome, studio, email) e opzionale del referente sicurezza (RSPP). Registrazione con MFA, accettazione informativa privacy e nomina a responsabile trattamento dati.

### 5.2 Caricamento Cedolini
Unica attività periodica richiesta all'azienda: caricamento mensile dei cedolini paga in PDF. Due modalità: upload diretto via interfaccia web oppure inoltro a indirizzo email dedicato (es. `azienda@upload.presidia.it`). Il sistema importa i documenti, estrae i dati e aggiorna automaticamente la dashboard. È il cuore dell'alimentazione dati: tutto il resto dipende da questo input.

**Nota critica**: ogni software paghe (Zucchetti, TeamSystem, Wolters Kluwer, ecc.) genera cedolini con tracciati diversi. La piattaforma deve saperli leggere tutti, o almeno i principali. I tracciati INAIL (obbligatori per le software house) potrebbero essere una base comune. In alternativa, estrazione via OCR/AI dai PDF — meno precisa (stima 94-95% accuratezza) ma indipendente dal tracciato.

### 5.3 Dashboard Aziendale
Vista organizzativa immediata post-caricamento. Struttura del personale (totale, FT/PT, apprendisti, determinati), costo mensile con proiezione annua a 14 mensilità, ferie (maturate/godute/residue), ore lavorate e straordinari, scadenze contrattuali, dinamica dell'organico (ingressi/cessazioni/turnover), voci retributive particolari. Sistema a semaforo: verde (stabile), giallo (da monitorare), rosso (attenzione), blu (decisione organizzativa registrata dall'azienda).

### 5.4 Osservatorio Organizzativo dell'Attività
Modulo strategico che incrocia dati cedolini con struttura reale dell'attività: tipologia, orario, dimensione operativa (coperti, camere, superficie secondo settore), numero dipendenti, monte ore, rapporto FT/PT, straordinari, costo del personale. Output in forma di "lettura organizzativa" (MAI conformità): es. "l'organico appare contenuto rispetto alla dimensione operativa dichiarata." Disclaimer metodologico sempre visibile. Include collegamento con indicatori ISAC ministeriali per benchmark di congruità per settore.

### 5.5 Inquadramento e Mansioni
Confronto tra livello contrattuale in cedolino, mansione effettiva (dichiarata dall'azienda) e declaratorie CCNL. Semaforo per coerenza. Output informativo, mai valutazione di conformità — rimando al consulente per verifiche.

### 5.6 Monitoraggio Ferie
Tracking ferie maturate/godute/residue per dipendente. Soglie automatiche basate su regole CCNL (2 settimane nell'anno di maturazione, residuo entro 18 mesi). Percentuale di godimento con barra visuale. Alert automatici su soglie critiche.

### 5.7 Monitoraggio Straordinari
Ore straordinarie per dipendente con proiezione annua. Pattern detection: part-time con straordinari sistematici, superamento soglia 250h annue CCNL. Andamento mensile storico.

### 5.8 Scadenze Contrattuali
Monitoraggio contratti a termine e apprendistati con countdown giorni. Alert automatico a soglie configurabili (es. 90 giorni, 60 giorni).

### 5.9 Dinamica dell'Organico (Turnover)
Tracking ingressi e cessazioni nel tempo. Variazione netta organico. Andamento storico. Tipologia eventi (dimissioni, fine contratto, nuova assunzione, tipo contratto).

### 5.10 Voci Retributive Particolari
Rilevazione automatica di trasferte, rimborsi spese, voci non imponibili, competenze variabili. Frequenza della loro presenza nel tempo. Flusso decisionale interattivo: per ogni voce rilevata, l'azienda sceglie tra "Verifica con il consulente del lavoro" oppure "Voci supportate da documentazione." La seconda opzione registra una decisione organizzativa (stato blu).

### 5.11 Modulo Sicurezza sul Lavoro
Modulo autonomo con checklist adempimenti: DVR, nomina RSPP, formazione lavoratori, addetti antincendio e primo soccorso, sorveglianza sanitaria, formazione datore di lavoro. Tre stati per adempimento: presente / non presente / non applicabile. Possibilità di caricamento documentazione. Semaforo automatico. Routing notifiche: al referente sicurezza se presente, all'azienda se assente. Possibilità di richiedere contatto con società specializzata convenzionata.

### 5.12 Sistema Segnalazioni e Notifiche
Segnalazioni differenziate per area: area lavoro (contratti, ferie, straordinari, voci retributive, turnover) → notifica prima al consulente del lavoro. Area sicurezza → notifica prima al referente sicurezza. L'azienda vede comunque la fotografia organizzativa immediata. Storico segnalazioni con filtro per gravità (rosso/giallo/blu).

### 5.13 Q&A Normativo (AI con RAG)
Chatbot AI che risponde a domande sul CCNL citando riferimenti testuali agli articoli. Architettura RAG: CCNL vettorializzato e indicizzato per retrieval, LLM per generazione risposta in linguaggio naturale. Risposte sempre formulate come "Il CCNL prevede che..." / "La normativa prevede che...", mai in forma consulenziale. Chiusura sistematica: "Per eventuali valutazioni specifiche è opportuno confrontarsi con il consulente del lavoro."

### 5.14 Dashboard Consulente
Vista aggregata multi-azienda per il consulente del lavoro. Tabella di tutte le aziende collegate con semaforo sintetico per ciascuna. Alert aggregati cross-azienda. Letture incrociate e pattern organizzativi avanzati non visibili alla singola azienda (es. "pattern straordinari su part-time rilevato in 3 aziende su 10 — possibile sottodimensionamento comune nel settore"). Totale dipendenti gestiti, criticità attive, monitoraggi.

### 5.15 Registro Storico e Memoria Organizzativa
Timeline cronologica di tutti gli eventi: indicatori rilevati, decisioni aziendali registrate, variazioni dell'organico. Portabilità: se cambia il consulente, il nuovo professionista accede allo storico previa autorizzazione dell'azienda.

### 5.16 Report Annuale
Generazione automatica di un report annuale con: struttura del personale, costo del lavoro, andamento turnover, ferie, straordinari, principali indicatori emersi, decisioni organizzative registrate. Esportabile in PDF.

### 5.17 Assenteismo (integrazione richiesta)
Estrazione voce malattia dal cedolino. Calcolo tasso di assenteismo percentuale (ore assenza / ore lavorabili annue). Aggregazione per comparto e settore di attività. Output per il canale distributivo: benchmark per settore.

### 5.18 Disparità retributiva di genere (integrazione richiesta)
Confronto retributivo uomo/donna a parità di livello e tipologia contrattuale. Indicatore di gap retributivo. Output per il canale distributivo e per l'azienda.

---

## 6. Integrazioni previste o ipotizzabili

### Fonti dati primarie
- **Cedolini paga in PDF** — input principale, da parsare con OCR/AI o da tracciati strutturati
- **CCNL Commercio** — testo completo da scomporre in blocchi tematici e tradurre in regole if/then. Lavoro manuale di un esperto normativo, non automatizzabile. La knowledge base strutturata è il cuore del motore di regole
- **Tabelle retributive CCNL** — documenti strutturati (PDF/Excel), da aggiornare ad ogni rinnovo contrattuale

### Integrazioni API ipotizzabili (non nel primo rilascio)
- **CNEL** — Archivio CCNL, testi scaricabili per aggiornamento regole
- **Normattiva.it** — Legislazione, testi open data per monitoraggio normativo
- **INPS/INL** — Circolari, per monitoraggio proattivo cambiamenti normativi
- **ISTAT** — API SDMX per benchmark retributivi e occupazionali
- **EUR-Lex** — API REST/SPARQL per direttive UE
- **Indicatori ISAC ministeriali** — per benchmark congruità organizzativa per settore

### Sistema di notifiche
- Email transazionali verso consulente del lavoro e referente sicurezza
- Dashboard push notifications

---

## 7. Architettura privacy

Il sistema è progettato in logica **privacy by design** con doppio archivio:

- **Archivio A (aziendale)**: nominativi dipendenti, documenti caricati, collegamento dipendente ↔ ID pseudonimo. Accesso riservato all'azienda.
- **Archivio B (pseudonimizzato)**: ID anonimo, dati contrattuali/retributivi/organizzativi estratti. Il motore di analisi opera SOLO su questo archivio.
- **Ricomposizione**: l'analisi avviene su dati pseudonimizzati; il sistema ricollega l'esito al dipendente solo nell'archivio aziendale.

---

## 8. Stack tecnologico ipotizzato

- **Frontend**: Web app responsive (PWA ipotizzabile per futuro)
- **Backend**: API REST, motore di regole (sistema esperto con regole if/then derivate dal CCNL)
- **AI/ML**: LLM con RAG per Q&A normativo (CCNL vettorializzato), OCR/AI per estrazione dati da PDF cedolini
- **Database**: strutturato, con architettura a doppio archivio (pseudonimizzazione)
- **Hosting**: cloud, con compliance GDPR, crittografia, cancellazione automatica dati scaduti
- **Notifiche**: email transazionali

---

## 9. Note sulla scalabilità e rivendibilità

La piattaforma nasce per il CCNL Commercio ma l'architettura è progettata per essere **estesa ad altri CCNL**. Il motore di regole è parametrico: il codice scala, il contenuto normativo no — ogni CCNL va riscritto da un esperto.

**Riusabilità architetturale**: il pattern (profilazione → ingestione documento → motore regole → scoring/semaforo → alert → dashboard → Q&A con RAG) è identico a un altro progetto in corso su un verticale diverso (ricerca bandi/incentivi pubblici). I due progetti condividono circa il 60-70% dell'architettura. I componenti riusabili sono: framework profilazione, motore di matching profilo × regole, sistema notifiche, architettura RAG, dashboard con semaforo, sistema multi-tenant.

**Mercato potenziale dichiarato**: circa 240.000 consulenti del lavoro in Italia, 26.000 studi professionali. Nessun competitor diretto fa compliance preventiva strutturata — i software esistenti (Zucchetti, TeamSystem, Wolters Kluwer) fanno elaborazione cedolini e adempimenti, non prevenzione.

**Modello di pricing stimato**: €100–300/mese per consulente, oppure per PMI. Con l'1% del mercato (2.400 consulenti a €200/mese) = €5.7M/anno di ricavi potenziali.

---

## 10. Vincoli di progetto noti

- **Il contenuto normativo non è responsabilità dello sviluppatore.** La traduzione degli articoli CCNL in regole if/then è compito di un esperto normativo esterno. Lo sviluppatore implementa il motore, non le regole.
- **Nessuna funzionalità può formulare pareri professionali.** Ogni output deve essere informativo, mai consulenziale. Vincolo deontologico non negoziabile.
- **Primo rilascio limitato al CCNL Commercio, sottosettore pubblici esercizi.** L'espansione ad altri CCNL e settori è una fase successiva.
- **Il prototipo navigabile già consegnato al cliente copre tutte le funzionalità 5.1–5.16.** Il cliente considera il prototipo come perimetro minimo — non è possibile proporre un MVP più ridotto.