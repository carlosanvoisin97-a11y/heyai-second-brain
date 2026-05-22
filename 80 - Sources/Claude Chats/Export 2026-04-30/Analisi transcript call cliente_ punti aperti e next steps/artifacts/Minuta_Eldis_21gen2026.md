# MINUTA RIUNIONE
## Presentazione e Consegna Strumento Compilatore AI

**Data:** 21 gennaio 2026, ore 10:33  
**Modalità:** Videoconferenza Teams  
**Partecipanti:**  
- Simone Montanari (HeyAI - Sviluppo)
- Federico Saladino (HeyAI - Coordinamento)
- Stefania Solidoro (Eldis)
- Carlo Sanvoisin (HeyAI - PM)
- Marta (Eldis)

---

## INTRODUZIONE

La riunione ha avuto come obiettivo la presentazione e consegna dello strumento "Compilatore AI" sviluppato per Eldis. Lo strumento permette di automatizzare la creazione delle schede prodotto per il catalogo B2B, partendo dai file Excel e PDF forniti dai produttori.

Durante la sessione è stata effettuata una demo completa delle funzionalità, sono state raccolte domande e feedback, e sono state prese decisioni operative per la messa in produzione.

---

## RIEPILOGO FUNZIONALITÀ CONSEGNATE

### Cosa fa lo strumento

1. **Importazione prodotti**
   - Caricamento massivo da file Excel (non serve inserire prodotto per prodotto)
   - Possibilità di aggiornare prodotti esistenti reimportando il file

2. **Gestione documenti PDF**
   - Caricamento delle schede tecniche PDF dei produttori
   - Associazione automatica tra PDF e prodotti (basata sul nome file)
   - L'ordine di caricamento non è importante: si possono caricare prima i PDF o prima gli Excel

3. **Elaborazione automatica**
   - Estrazione dati tecnici dai PDF (peso, dimensioni, ecc.)
   - Calcolo automatico dei campi derivati (codici, volumi, formule)
   - Scrittura descrizioni prodotto in italiano professionale
   - Assegnazione categorie (famiglia, sottofamiglia, gruppo, colore)
   - Abbinamento codici RAE secondo le regole vigenti

4. **Esportazione**
   - Generazione file Excel completo pronto per l'import sul gestionale
   - Tutti i campi compilati secondo le specifiche richieste

5. **Configurazione personalizzabile**
   - Possibilità di modificare le regole di categorizzazione
   - Possibilità di modificare le istruzioni per la scrittura delle descrizioni
   - Gestione autonoma di colori, codici RAE, marchi e famiglie

---

## DECISIONI PRESE

### 1. Consegna in due fasi

| Fase | Contenuto | Tempistica |
|------|-----------|------------|
| **Fase 1** | Strumento completo per gestione prodotti, PDF, descrizioni, categorie, RAE + adattamenti richiesti | Immediata |
| **Fase 2** | Gestione avanzata immagini (ordinamento automatico, riconoscimento contenuto, upscaling) | Da definire con nuova offerta |

### 2. Modifica struttura categorie

**Azione completata durante la riunione:**
- I **Tavoli** sono stati spostati dalla famiglia "Unit Key" alla famiglia "Libera Installazione"
- La famiglia "Unit Key" può essere eliminata in quanto non più utilizzata per il B2B

### 3. Sincronizzazione file con il server Eldis

**Soluzione scelta:** Verrà sviluppata un'applicazione dedicata ("Eldis Synchronizer") da installare sul server Eldis che:
- Si avvia automaticamente all'accensione del server
- Sincronizza automaticamente i file (PDF, immagini, Excel) nella cartella corretta
- Rinomina i file secondo il codice Gamma
- Permette anche sincronizzazioni manuali on-demand quando necessario

**Scartata** l'opzione SharePoint/OneDrive per evitare dipendenze da servizi esterni che potrebbero cambiare nel tempo.

### 4. Gestione immagini - approccio graduale

**Fase 1 (da includere subito):**
- Sezione dedicata per caricare le immagini (come esiste già per i PDF)
- Conversione automatica in formato JPEG
- Ridimensionamento automatico (dimensione massima da definire, suggerito 300KB)
- Rinomina automatica con codice Gamma

**Fase 2 (successiva, con nuova offerta):**
- Riconoscimento automatico del contenuto dell'immagine
- Ordinamento automatico basato su regole (es. per i frigoriferi: prima foto porta chiusa, seconda porta aperta)
- Esclusione automatica di foto non desiderate
- Eventuale miglioramento qualità (upscaling) per immagini a bassa risoluzione

### 5. Gestione utenti

**Consigliato** creare utenti separati per ogni operatore che utilizzerà lo strumento. Questo permette di:
- Tracciare chi ha effettuato modifiche
- In futuro, limitare l'accesso a determinate funzioni per utenti meno esperti

### 6. Gestione modifiche urgenti

Quando è necessario correggere un dato con urgenza:
- La modifica può essere fatta direttamente sul gestionale Eldis per renderla subito operativa
- **Importante:** la stessa modifica va replicata anche sulla piattaforma AI per mantenere i dati allineati

---

## CHIARIMENTI OPERATIVI

### Come funziona l'aggiornamento parziale dei dati

Se si vuole aggiornare solo alcuni campi (es. solo pesi e dimensioni):
- Preparare un file Excel con solo le colonne da aggiornare + il codice articolo per l'identificazione
- I campi non presenti nel file **non verranno modificati**
- Questo permette aggiornamenti mirati senza rischio di sovrascrivere altri dati

### Come funziona la cancellazione prodotti

- Cancellando un prodotto, i PDF e le immagini associate **non vengono eliminati**
- Rimangono nel sistema come "non associati"
- Verranno riassociati automaticamente quando il prodotto viene reimportato

### Come gestire i codici RAE annuali

- I codici RAE cambiano ogni anno (tipicamente dal 1° febbraio)
- Per attivare subito una nuova regola RAE: impostare la data di validità nel passato
- Gli importi vanno aggiornati manualmente nella sezione "Regole RAE" della configurazione

### Gestione errori

- Se un prodotto ha dati incompleti, lo strumento genera un avviso ma **non blocca l'elaborazione**
- L'export Excel è sempre possibile: i prodotti con errori avranno i campi problematici vuoti
- È possibile completare manualmente i campi mancanti e procedere

---

## PROSSIMI PASSI

### Azioni immediate (questa settimana)

| # | Azione | Responsabile | Destinatario |
|---|--------|--------------|--------------|
| 1 | Invio credenziali di accesso alla piattaforma | Simone | Stefania, Marta |
| 2 | Invio lista filtri di ricerca da implementare (stessi previsti per configuratore catalogo) | Carlo | Simone |
| 3 | Organizzare call tecnica con Luciano (sistemista Eldis) per definire integrazione sincronizzazione file | Stefania | Simone, Federico, Luciano |
| 4 | Comunicare dimensione massima accettabile per le immagini | Stefania | Carlo |

### Sviluppi da completare (Fase 1)

| # | Funzionalità | Note |
|---|--------------|------|
| 1 | Barra di ricerca avanzata con filtri (marca, famiglia, categoria, ecc.) | Filtri uguali a quelli del configuratore catalogo |
| 2 | Possibilità di selezionare più prodotti e cancellarli insieme | Per gestire correzioni massive |
| 3 | Possibilità di scegliere quali colonne visualizzare nella lista prodotti | Per facilitare i controlli |
| 4 | Pulsante "Rielabora" per riprocessare solo i prodotti visualizzati | Utile per aggiornare descrizioni dopo modifica regole |
| 5 | Sezione immagini con conversione formato, ridimensionamento e rinomina | Come richiesto |
| 6 | Applicazione sincronizzazione file per server Eldis | Da definire nella call con Luciano |
| 7 | Verifica e aggiornamento tabella colori con ultime specifiche | Simone verificherà se ci sono modifiche recenti non importate |

### Attività di test (prossime 1-2 settimane)

- Marta inizierà a utilizzare lo strumento per codificare articoli reali (nuovi Bosch, Siemens, ecc. quando disponibili)
- Segnalare eventuali problemi o comportamenti inattesi
- Raccogliere feedback sulle descrizioni generate

### Documentazione

- Simone preparerà video tutorial:
  - **Versione base:** operazioni quotidiane (import, elaborazione, export)
  - **Versione avanzata:** configurazione regole, categorie, prompt AI

---

## PUNTI DA APPROFONDIRE

### Per la Fase 2 (gestione avanzata immagini)

Eldis dovrà fornire:
1. **Regole di ordinamento immagini per categoria prodotto**
   - Esempio frigoriferi freestanding: 1° foto porta chiusa, 2° foto porta aperta
   - Esempio frigoriferi incasso: 1° foto porta aperta
   - Definire regole per tutte le categorie principali

2. **Criteri di esclusione immagini**
   - Esempio: escludere foto con cibo visibile all'interno del frigorifero (se disponibile foto senza)

Una volta raccolte queste informazioni, HeyAI preparerà disegno tecnico e offerta per la Fase 2.

### Import storico per configuratore catalogo

Per la futura fase del configuratore catalogo, sarà necessario importare l'intero archivio prodotti già codificati. Questo sarà possibile:
- Esportando i dati dal gestionale Eldis in formato Excel (stesso formato dell'output)
- Importandoli sulla piattaforma AI
- Facendo rielaborare **solo le descrizioni** (le categorie esistenti verranno mantenute)

---

## NOTE TECNICHE (per riferimento)

- Elaborazione parallela: il sistema processa fino a 50 prodotti contemporaneamente
- Tempo medio elaborazione: circa 1 minuto per prodotto (ma in parallelo, quindi 50 prodotti ≈ 1-2 minuti totali)
- I file PDF vengono mantenuti con il nome originale nel sistema, la rinomina con codice Gamma avviene solo in fase di esportazione/sincronizzazione

---

**Prossima riunione:** Da definire dopo la call tecnica con Luciano

**Riferimento per domande operative:** Carlo Sanvoisin

---

*Minuta redatta il 21 gennaio 2026*