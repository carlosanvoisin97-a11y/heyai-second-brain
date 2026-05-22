# MINUTE RIUNIONE — Intervista 1:1 Marco Merli

---

- **Data:** 04/02/2026
- **Ora:** 14:02
- **Durata:** ~59 minuti
- **Partecipanti:**
  - Carlo Sanvoisin — Consulente AI esterno
  - Marco Merli — Responsabile Legal, Compliance, Quality & Sistema di Gestione Integrato, Noloop
- **Oggetto:** Mappatura processi e casi d'uso AI per l'area Legal/Compliance/Qualità di Noloop

---

## EXECUTIVE SUMMARY

La call ha mappato le esigenze dell'area di Marco Merli (sistema di gestione integrato, compliance, documentazione legale) per identificare soluzioni AI da sviluppare nel 2026. Sono emersi **tre casi d'uso principali**: compilazione automatica di documenti/moduli, redazione e aggiornamento di policy e procedure, e un chatbot aziendale per supporto ai dipendenti (onboarding, consultazione procedure, domande operative). È stata inoltre discussa l'architettura della piattaforma AI dedicata (portale Noloop con API, costi a consumo) come alternativa alle licenze ChatGPT condivise.

---

## DECISIONI PRESE

| # | Decisione | Owner | Note |
|---|-----------|-------|------|
| 1 | Tre casi d'uso confermati: **compilazione documenti**, **redazione/aggiornamento policy**, **chatbot aziendale** | Carlo / Marco | Saranno la base della proposta a Garbarino/Donzelli |
| 2 | La documentazione del sistema di gestione integrato (~2000-3000 file) sarà la **knowledge base** dell'agente AI | Marco | Già organizzata in cartelle condivise, accessibile a tutti (tranne dati privacy) |
| 3 | Dati sensibili (idoneità sanitarie, documenti soci/Paolo Donzelli) saranno **esclusi** o gestiti con coni di visibilità | Marco / Carlo | Separazione documentazione pubblica vs. privata |
| 4 | **No integrazione con Outlook** per l'invio documenti: Marco preferisce mantenere il flusso attuale per ragioni di business continuity | Marco | Rischio di down dello strumento AI |
| 5 | Piattaforma AI su **portale Noloop dedicato** con API (costo a consumo), non licenze ChatGPT individuali | Carlo | Risparmio stimato vs. licenze da €20/utente/mese |
| 6 | Possibilità di **regolare potenza del modello per utente** e monitorare i consumi | Carlo | Marco richiede monitoraggio costi granulare |

---

## PUNTI DISCUSSI

### 1. Struttura del sistema di gestione integrato
- Marco gestisce un **sistema di gestione integrato** secondo le certificazioni in essere (ISO 27001, EcoVadis, CDPE)
- La struttura comprende **22 cartelle** (da 0 a 22) con procedure di sistema, più documentazione aziendale aggiuntiva (atti fusione, bilanci, certificati, DURC, INAIL, nomine, SCIA, etc.)
- Totale stimato: **~2000-3000 file**
- Solo Marco ha accesso in **modifica**; tutti gli altri in **lettura/copia**
- La cartella "Documentazione" è un duplicato in sola lettura del sistema di gestione integrato con solo le **ultime release** pubblicate
- **Conclusione:** Questa documentazione diventerà la knowledge base dell'agente AI

### 2. Caso d'uso 1 — Compilazione automatica documenti
- Marco e Davide compilano manualmente **~80 portali fornitori** (Jaggaer, Ariba, etc.) con documenti ricorrenti (DURC, visure, autocertificazioni sicurezza, dichiarazioni idoneità tecnico-professionale)
- Ogni scadenza documentale (es. DURC il 12/02) richiede aggiornamento su **tutti gli 80 portali**
- I formati richiesti dai clienti variano: **PDF, Word, carta intestata, firma digitale (PAdES)** — nessuno standard
- Carlo propone: l'AI legge la knowledge base, riceve l'input (modulo del cliente) e produce l'output compilato
- Per i **PDF**: necessaria tecnologia OCR, più costosa; alternativa preferita: rigenerare un Word e poi esportare in PDF
- Marco chiede una **stima di impatto costi** (es. costo per 100 compilazioni)
- Anche il **reparto esterno sicurezza eventi** (società contrattualizzata con device Noloop) compila costantemente DUVRI e POS → potrebbe beneficiare dello strumento
- **Conclusione:** Caso d'uso confermato; necessario approfondire costi OCR vs. Word

### 3. Caso d'uso 2 — Redazione e aggiornamento policy/procedure
- Marco è l'**unico** a conoscere l'intero sistema e le interdipendenze tra documenti (policy → moduli → registrazioni → procedure)
- Aggiornare una policy richiede verificare la coerenza con tutto il sistema: es. policy ambientale → policy rifiuti → KPI → moduli collegati
- Se l'AI ha in pasto l'intero sistema, potrebbe **generare bozze** di nuove policy o **aggiornare** le esistenti mantenendo coerenza
- Esempio: cambio threshold carbon footprint → l'AI aggiorna automaticamente il dato nella policy corretta
- **Conclusione:** Caso d'uso confermato; la conoscenza del contesto completo è il prerequisito fondamentale

### 4. Caso d'uso 3 — Chatbot aziendale (supporto dipendenti e onboarding)
- Oggi i dipendenti **non consultano** le procedure nella cartella condivisa ("sono pigri")
- Chiedono direttamente a Marco, che perde tempo significativo
- Con un chatbot basato sulla documentazione, i dipendenti potrebbero chiedere: "Come registro un'anagrafica fornitore?", "Come chiedo un pagamento?", "A chi mi rivolgo per cambiare il telefono?"
- Particolarmente utile per i **nuovi assunti** (turnover significativo in Noloop)
- Se presente un **organigramma/funzionigramma** aggiornato, il chatbot potrebbe indicare referenti e procedure specifiche
- Marco evidenzia anche l'utilità per operativi: preparazione deck, brainstorming, supporto call clienti
- **Conclusione:** Caso d'uso con alto impatto; Marco molto favorevole

### 5. Compilazione DUVRI (sicurezza eventi)
- Il **DUVRI** (Documento Unico Valutazione Rischi Interferenziali) è un documento complesso che raccoglie i rischi di tutti i fornitori presenti a un evento
- Oggi compilato manualmente dal reparto esterno sicurezza
- Se l'AI conoscesse la pianta dell'evento, i documenti di ogni società e le attività previste, potrebbe **assemblare automaticamente** il DUVRI
- Accompagnato da **piano di emergenza ed evacuazione**
- **Conclusione:** Rientra nel caso d'uso compilazione, ma più complesso; da approfondire

### 6. Architettura piattaforma AI e gestione licenze
- Carlo ha mostrato il **portale Noloop** (ambiente dev) con le applicazioni AI già in sviluppo (Garbarino, Lorena, agente universale "Sally")
- L'agente si **sincronizza** ogni 24 ore con le cartelle di Marco → la knowledge base si aggiorna automaticamente
- **Costi a consumo via API** vs. licenze ChatGPT fisse: risparmio significativo, risultati più precisi, nessun costo per utenti inattivi
- Marco richiede: **un solo strumento univoco** per tutta Noloop, modelli regolabili per utente, monitoraggio consumi
- **Privacy e compliance**: lo strumento su portale Noloop risolve i problemi di account condivisi ChatGPT (memorie visibili, chat non segregate, limitazioni upload)
- **Certificazioni come asset competitivo**: Pirelli ha assegnato commesse a Noloop proprio per ISO 27001, EcoVadis, cyber security → lo strumento AI deve rispettare questi standard
- **Conclusione:** Marco è sponsor interno della soluzione; la piattaforma dedicata risolve anche problemi di compliance

### 7. Formato documenti per la knowledge base
- Carlo indica che il formato migliore per l'AI è **TXT**
- Marco preferisce lavorare in **Word** e esportare in PDF (per documenti non modificabili)
- Accordo: Marco fornisce i **Word** come sorgente; i PDF copiabili sono comunque utilizzabili
- **Conclusione:** Word come formato principale, PDF copiabili accettabili

### 8. Migrazione cloud e business continuity
- Noloop prevede di passare a **cloud entro il 2026**
- Marco sottolinea l'importanza della **business continuity**: lo strumento AI non deve essere l'unico canale (rischio down)
- Carlo rassicura: la piattaforma comunica con **3 diversi modelli AI** (fallback automatico)
- **Conclusione:** Da tenere in considerazione nella progettazione

### 9. Fondi perduti per lo sviluppo AI
- Marco segnala l'esistenza di **fondi perduti** (regionali, statali) per lo sviluppo tecnologico
- Sedi rilevanti: **Milano (Lombardia)** e **Roma (Lazio)**
- Carlo conferma di aver già fatto un'analisi nel 2025; la aggiornerà per il 2026
- Verrà incluso uno **specchietto finanziamenti** nella presentazione a Garbarino/Donzelli
- **Conclusione:** Carlo aggiorna la ricerca fondi e la include nella proposta

---

## QUESTIONI APERTE / PARKING LOT

| Tema | Contesto | Da chiarire con |
|------|----------|-----------------|
| Costo OCR per compilazione PDF | Compilare PDF vs. rigenerare Word: serve stima di costo per ~100 compilazioni | Carlo (tech team) |
| Coni di visibilità chatbot | Documenti soci e dati Paolo Donzelli devono essere riservati; definire permessi per utente | Marco / Carlo |
| Accessi al sito web Noloop | Nessuno sa più chi ha le credenziali; una persona si è licenziata | Marco / IT |
| Organigramma e funzionigramma | Esistono solo versioni "fittizie" per i portali; servono quelli reali per il chatbot | Marco |
| Espansione al reparto sicurezza esterno | Società esterna su device Noloop compila DUVRI/POS; valutare accesso allo strumento AI | Marco / Carlo |
| Migrazione cloud 2026 | L'infrastruttura attuale è su server locale; la migrazione cloud impatta l'architettura AI | Marco / IT |
| Fondi perduti 2026 | Carlo deve aggiornare l'analisi per Lombardia, Lazio e bandi nazionali | Carlo |
| Integrazione calendario | Marco suggerisce che l'agente possa leggere i calendari per verificare disponibilità; implicazioni privacy | Carlo / Marco |

---

## ACTION ITEMS

| # | Azione | Responsabile | Deadline | Priorità |
|---|--------|--------------|----------|----------|
| 1 | Inviare a Marco **email con domande** per quantificare effort/inefficienze sui 3 casi d'uso (compilazione, redazione, supporto dipendenti) | Carlo | Entro ven 07/02/2026 | Alta |
| 2 | **Quantificare le inefficienze** considerando anche Davide, Roberta, Federica e reparto sicurezza esterno (effetto moltiplicatore) | Marco | Entro mar 11/02/2026 | Alta |
| 3 | Fornire **stima di costo** per compilazione automatica (OCR vs. Word) su ~100 documenti | Carlo (tech team) | TBD | Media |
| 4 | Aggiornare **analisi fondi perduti** 2026 (Lombardia, Lazio, nazionali) e includerla nella presentazione | Carlo | Entro presentazione a Garbarino | Media |
| 5 | Preparare **presentazione** per Laura Garbarino e Paolo Donzelli con: casi d'uso, risparmio tempo/costi, specchietto finanziamenti | Carlo | TBD | Alta |
| 6 | Verificare struttura **coni di visibilità** per documentazione pubblica vs. privata nel chatbot | Carlo / Marco | TBD | Media |
| 7 | Segnalare a Ivano Romano e Laura Zaghi di accettare invito alla piattaforma (inviti in sospeso) | Marco | TBD | Bassa |

---

## PROSSIMI PASSI

- [ ] Carlo invia domande strutturate a Marco per quantificazione effort
- [ ] Marco raccoglie dati da Davide, Roberta, Federica e reparto sicurezza
- [ ] Carlo completa interviste con altri reparti (Zaghi, etc.)
- [ ] Carlo prepara presentazione complessiva per Garbarino e Donzelli con soluzioni AI 2026 + finanziamenti
- [ ] Definizione architettura: agente universale (Sally) + 2 agenti specifici (compilazione documenti + redazione/aggiornamento policy)

---

## NOTE AGGIUNTIVE

- **Persone menzionate non presenti:** Davide (Legal), Roberta Calaiò (Management Control), Federica [DA VERIFICARE cognome], Paolo Donzelli (socio/CEO), Laura Garbarino (GM), Lorena (intervistata il giorno prima), Ivano Romano (Comunicazione), Laura Zaghi (da intervistare), Marchitello [DA VERIFICARE] (helpdesk/IT), Carlotta Lievo (ufficio 4), Federico (sviluppatore di Carlo), Arianna [DA VERIFICARE] (utente da abilitare), Michele Adami (collaboratore di Carlo, ambiente test)
- **Certificazioni Noloop attive:** ISO 27001 (cyber security), EcoVadis (medaglia di bronzo), CDPE — asset competitivo riconosciuto (es. commesse Pirelli)
- **Portali fornitori gestiti:** ~80, con piattaforme tipo Jaggaer, Ariba
- **Problema licenze ChatGPT:** account condivisi per dipartimento (contrario a policy privacy), OTP da condividere manualmente, potenza inferiore sugli account non-master, limitazioni upload sulla chat nascosta
- **Policy AI aziendale Noloop:** l'AI non deve sostituire l'uomo e deve essere controllata; Marco sottolinea l'importanza della "delicatezza umana" nell'interpretazione dei dati
- **Strumento trascrizione call:** Marco non lo ritiene indispensabile per ora ma lo proverà se gratuito; preoccupazione per linguaggio informale nelle registrazioni
- **KeePass:** il team Marchitello sta autonomamente creando un file KeePass per gestire credenziali condivise senza informare Marco → problema di governance IT