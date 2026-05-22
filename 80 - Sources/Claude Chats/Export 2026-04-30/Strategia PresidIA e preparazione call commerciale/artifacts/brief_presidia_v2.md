# BRIEF TECNICO-FUNZIONALE — PROGETTO PRESIDIA

**Documento riservato — uso interno per quotazione tecnica**
**Data: Marzo 2026**

---

## 1. Nome progetto

**PresidIA** — Piattaforma di governance organizzativa del lavoro per PMI.

---

## 2. Settore e profilo utente

### Target
PMI italiane del settore commercio e servizi (bar, ristoranti, strutture ricettive, negozi, studi professionali, aziende di servizi). Il primo rilascio è verticale sul sottosettore pubblici esercizi.

### Utenti
Due profili distinti con viste differenziate:

- **Imprenditore / titolare PMI**: senza competenze HR. Carica un solo dato periodico (cedolini paga PDF) e riceve output organizzativo immediato.
- **Consulente del lavoro**: professionista con portafoglio clienti PMI. Ha una dashboard aggregata multi-azienda con alert preventivi e pattern avanzati.

---

## 3. Problema di business

Le PMI sono soggette al CCNL applicato — un documento normativo complesso che regola retribuzioni, orari, ferie, sicurezza, inquadramenti e centinaia di altre casistiche. Tipicamente non lo leggono, non lo capiscono e non sanno se sono in regola. Lo scoprono quando arriva un'ispezione, una causa o una contestazione.

Il consulente del lavoro viene coinvolto a problema già esploso. Perde tempo a ricostruire il contesto, fa lavoro ripetitivo e non riesce a scalare il portafoglio.

PresidIA trasforma questo rapporto da reattivo a preventivo: l'impresa carica i cedolini, il sistema genera una fotografia organizzativa con indicatori a semaforo e segnalazioni contestualizzate al consulente.

**Vincolo deontologico**: la piattaforma non fornisce consulenza professionale. È un layer informativo: informa, segnala, organizza. Ogni output rimanda al consulente per le valutazioni applicative.

---

## 4. Quadro normativo

Il CCNL di riferimento è il **CCNL Commercio — Terziario, Distribuzione e Servizi**. Il sistema monitora in particolare: ferie, straordinari, retribuzioni, inquadramento e mansioni, contratti a termine, apprendistato, part-time, turnover, sicurezza sul lavoro.

Il primo rilascio copre solo questo CCNL. L'architettura deve essere predisposta per estensione futura ad altri CCNL.

---

## 5. Scope della soluzione

Di seguito i moduli funzionali richiesti dal cliente. Il dettaglio dei requisiti per ciascun modulo è nel Requirement Log allegato.

**Profilo Aziendale** — Registrazione azienda con MFA, configurazione iniziale (tipologia attività, orari, fascia fatturato), dati specifici per settore, collegamento obbligatorio consulente del lavoro e opzionale referente sicurezza.

**Caricamento Cedolini** — Unica attività periodica: upload mensile cedolini paga PDF o inoltro via email dedicata. Estrazione automatica dati contrattuali, retributivi e organizzativi. Aggiornamento dashboard.

**Dashboard Aziendale** — Vista organizzativa immediata post-caricamento: struttura personale, costi, ferie, straordinari, voci retributive, scadenze, turnover. Sistema a semaforo (verde/giallo/rosso/blu).

**Osservatorio Organizzativo** — Incrocio dati cedolini con struttura operativa dell'attività (tipologia, orario, dimensione, organico). Output in forma di "lettura organizzativa", mai conformità.

**Inquadramento e Mansioni** — Confronto livello contrattuale, mansione effettiva e declaratorie CCNL. Semaforo coerenza.

**Monitoraggio Ferie** — Tracking maturate/godute/residue, soglie automatiche, alert su criticità.

**Monitoraggio Straordinari** — Ore per dipendente, proiezione annua, pattern detection (es. part-time + straordinari sistematici).

**Scadenze Contrattuali** — Countdown contratti a termine e apprendistati, alert a soglie configurabili.

**Dinamica Organico** — Tracking ingressi/cessazioni, variazione netta, andamento storico.

**Voci Retributive Particolari** — Rilevazione trasferte, rimborsi, voci non imponibili. Flusso decisionale: l'azienda sceglie tra "verifica con consulente" o "documentazione presente" (registra decisione organizzativa).

**Sicurezza sul Lavoro** — Checklist adempimenti (DVR, RSPP, formazione, sorveglianza sanitaria). Tre stati: presente / non presente / non applicabile. Caricamento documentazione. Routing notifiche differenziato.

**Sistema Segnalazioni e Notifiche** — Differenziato per area: lavoro → al consulente; sicurezza → al referente sicurezza. L'azienda vede la fotografia organizzativa immediatamente.

**Q&A Normativo** — Chatbot che risponde a domande sul CCNL citando articoli. Risposte informative, mai consulenziali.

**Avatar Digitale** — Guida piattaforma, spiegazione risultati, supporto normativo. Personalizzabile dal consulente (immagine, voce, nome) come servizio opzionale.

**Dashboard Consulente** — Vista aggregata multi-azienda con alert cross-azienda, pattern avanzati e letture incrociate non visibili alla singola azienda.

**Registro Storico** — Memoria organizzativa nel tempo: indicatori, decisioni, variazioni organico. Portabilità al nuovo consulente previa autorizzazione.

**Report Annuale** — Generazione automatica report con struttura personale, costi, turnover, ferie, straordinari, indicatori, decisioni. Esportazione PDF.

---

## 6. Architettura privacy richiesta

Il cliente richiede un'architettura **privacy by design** con doppio archivio:

- **Archivio A (aziendale)**: nominativi, documenti, collegamento dipendente ↔ ID pseudonimo. Accesso riservato all'azienda.
- **Archivio B (pseudonimizzato)**: ID anonimo, dati estratti. Il motore di analisi opera solo su questo archivio.
- **Ricomposizione**: l'analisi su dati pseudonimizzati viene ricollegata al dipendente solo nell'archivio aziendale.

---

## 7. Note sulla riusabilità

L'architettura della piattaforma (profilazione → ingestione documento → motore regole → scoring/semaforo → alert → dashboard → Q&A) è un pattern riusabile per altri verticali. La struttura delle regole deve essere parametrica per supportare l'estensione futura ad altri CCNL senza riscrittura del codice.