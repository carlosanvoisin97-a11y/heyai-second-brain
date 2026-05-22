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

### Importazione prodotti

Lo strumento permette il caricamento massivo dei prodotti da file Excel, senza necessità di inserirli uno per uno. È possibile aggiornare prodotti già esistenti semplicemente reimportando il file: il sistema riconosce i prodotti già presenti e li aggiorna.

### Gestione documenti PDF

È presente una sezione dedicata per caricare le schede tecniche PDF dei produttori. L'associazione tra PDF e prodotti avviene automaticamente in base al nome del file. L'ordine di caricamento non è importante: si possono caricare prima i PDF e poi gli Excel, o viceversa. Quando viene caricato un elemento mancante, l'abbinamento avviene automaticamente.

### Elaborazione automatica

Una volta caricati i dati, il sistema esegue automaticamente:
- Estrazione dei dati tecnici dai PDF (peso, dimensioni e altre specifiche)
- Calcolo dei campi derivati come codici articolo, volumi e tutte le formule previste
- Scrittura delle descrizioni prodotto in italiano professionale
- Assegnazione delle categorie (famiglia, sottofamiglia, gruppo, colore)
- Abbinamento dei codici RAE secondo le regole vigenti

L'elaborazione avviene in parallelo su più prodotti contemporaneamente (fino a 50 alla volta), quindi anche con molti articoli i tempi restano contenuti.

### Esportazione

Al termine dell'elaborazione è possibile generare un file Excel completo, pronto per essere importato sul gestionale Eldis. Tutti i campi risultano compilati secondo le specifiche concordate.

### Configurazione personalizzabile

Lo strumento è stato progettato per essere completamente configurabile senza necessità di interventi tecnici. È possibile:
- Modificare le regole di categorizzazione
- Modificare le istruzioni per la scrittura delle descrizioni
- Gestire autonomamente la tabella colori
- Gestire i codici RAE e i relativi importi
- Gestire marchi e famiglie prodotto

---

## DECISIONI PRESE

### 1. Consegna in due fasi

È stato concordato di procedere con una consegna in due fasi distinte.

**Fase 1 (immediata):** comprende lo strumento completo per la gestione di prodotti, PDF, descrizioni, categorie e codici RAE, più alcuni adattamenti richiesti durante la riunione per rendere lo strumento più pratico nell'uso quotidiano.

**Fase 2 (da definire):** comprenderà la gestione avanzata delle immagini, incluso l'ordinamento automatico basato sul contenuto, il riconoscimento di cosa è presente nella foto, e l'eventuale miglioramento della qualità per immagini a bassa risoluzione. Per questa fase verrà preparata una nuova offerta.

### 2. Modifica struttura categorie

Durante la riunione è stata eseguita direttamente una modifica alla struttura delle categorie: i Tavoli sono stati spostati dalla famiglia "Unit Key" alla famiglia "Libera Installazione". La famiglia "Unit Key" può essere eliminata in quanto non più utilizzata per il B2B.

### 3. Sincronizzazione file con il server Eldis

Per trasferire i file elaborati (PDF rinominati, immagini, Excel) sul server fisico di Eldis è stata scelta la seguente soluzione: verrà sviluppata un'applicazione dedicata chiamata "Eldis Synchronizer" da installare sul server Eldis. Questa applicazione si avvierà automaticamente all'accensione del server, sincronizzerà automaticamente i file nella cartella corretta, rinominerà i file secondo il codice Gamma, e permetterà anche sincronizzazioni manuali on-demand quando necessario per aggiornamenti urgenti.

È stata scartata l'opzione di utilizzare SharePoint o OneDrive per evitare dipendenze da servizi esterni che potrebbero modificare le loro integrazioni nel tempo, causando malfunzionamenti.

### 4. Gestione immagini con approccio graduale

Per le immagini si procederà in modo graduale.

Nella Fase 1, da includere subito, verrà creata una sezione dedicata per caricare le immagini (analoga a quella esistente per i PDF). Il sistema effettuerà automaticamente la conversione in formato JPEG, il ridimensionamento alla dimensione massima concordata, e la rinomina con il codice Gamma.

Nella Fase 2, con nuova offerta, verranno aggiunte funzionalità avanzate: riconoscimento automatico del contenuto dell'immagine, ordinamento automatico basato su regole specifiche per categoria (ad esempio per i frigoriferi: prima la foto con porta chiusa, poi quella con porta aperta), esclusione automatica di foto non desiderate secondo criteri definiti, ed eventuale miglioramento della qualità per immagini a bassa risoluzione.

### 5. Gestione utenti

È stato consigliato di creare utenti separati per ogni operatore che utilizzerà lo strumento. Questo permette di tracciare chi ha effettuato quali modifiche e, in futuro, di limitare l'accesso a determinate funzioni avanzate per gli utenti meno esperti, proteggendo le configurazioni critiche da modifiche accidentali.

### 6. Gestione modifiche urgenti

Quando è necessario correggere un dato con urgenza e non si può attendere la sincronizzazione automatica, la modifica può essere fatta direttamente sul gestionale Eldis per renderla immediatamente operativa. Tuttavia, è importante ricordare che la stessa modifica deve essere replicata anche sulla piattaforma AI per mantenere i dati allineati ed evitare che una successiva elaborazione sovrascriva la correzione.

---

## CHIARIMENTI OPERATIVI

### Come funziona l'aggiornamento parziale dei dati

Se si desidera aggiornare solo alcuni campi specifici (ad esempio solo pesi e dimensioni dopo aver ricevuto un file corretto dal fornitore), è sufficiente preparare un file Excel contenente solo le colonne da aggiornare più il codice articolo per l'identificazione. I campi non presenti nel file non verranno toccati. Questo permette di effettuare aggiornamenti mirati senza rischio di sovrascrivere altri dati già corretti.

### Come funziona la cancellazione prodotti

Quando si cancella un prodotto dal sistema, i PDF e le immagini ad esso associate non vengono eliminati. Rimangono nel sistema come file "non associati" e verranno riassociati automaticamente quando il prodotto viene reimportato. Questo evita di dover ricaricare i documenti in caso di cancellazione e reimportazione.

### Come gestire i codici RAE annuali

I codici RAE cambiano ogni anno, tipicamente a partire dal 1° febbraio. Per gestire questo cambio, è necessario aggiornare gli importi nella sezione "Regole RAE" della configurazione. Il campo "data di validità" serve a indicare da quando la regola è attiva: per fare in modo che una regola sia sempre utilizzata, è sufficiente impostare una data di validità nel passato.

### Gestione degli errori

Se un prodotto ha dati incompleti (ad esempio manca il peso nel PDF e non è stato indicato nell'Excel), lo strumento genera un avviso ma non blocca l'elaborazione degli altri prodotti. L'export Excel è sempre possibile: i prodotti con errori avranno semplicemente i campi problematici vuoti. È possibile completare manualmente i campi mancanti direttamente nello strumento e poi ripetere l'export, oppure completarli direttamente nell'Excel esportato.

---

## PROSSIMI PASSI

### Azioni immediate da completare questa settimana

**Invio credenziali di accesso:** Simone invierà a Stefania e Marta le credenziali per accedere alla piattaforma.

**Lista filtri di ricerca:** Carlo invierà a Simone la lista dei filtri di ricerca da implementare nella barra di ricerca avanzata. Si utilizzeranno gli stessi filtri già previsti per il configuratore catalogo.

**Call tecnica per sincronizzazione:** Stefania organizzerà una call con Luciano (sistemista Eldis), Simone e Federico per definire i dettagli tecnici dell'integrazione tra l'applicazione di sincronizzazione e il server Eldis.

**Dimensione massima immagini:** Stefania comunicherà a Carlo la dimensione massima accettabile per le immagini. Il suggerimento emerso in riunione è di circa 300KB per file.

### Sviluppi da completare per la Fase 1

**Barra di ricerca avanzata:** Verrà implementata una barra di ricerca con filtri per marca, famiglia, categoria e altri parametri. I filtri saranno gli stessi previsti per il configuratore catalogo.

**Selezione multipla e cancellazione di gruppo:** Sarà possibile selezionare più prodotti contemporaneamente e cancellarli insieme, per facilitare le operazioni di pulizia e correzione massiva.

**Scelta colonne visualizzate:** Sarà possibile scegliere quali colonne visualizzare nella lista prodotti, per facilitare i controlli mostrando solo i campi di interesse.

**Pulsante rielabora vista corrente:** Verrà aggiunto un pulsante per riprocessare solo i prodotti attualmente visualizzati (dopo un filtro), utile ad esempio per aggiornare le descrizioni dopo aver modificato le regole senza dover rielaborare l'intero catalogo.

**Sezione immagini:** Verrà creata la sezione per il caricamento immagini con conversione formato, ridimensionamento e rinomina automatica.

**Applicazione sincronizzazione:** Verrà sviluppata l'applicazione per la sincronizzazione automatica dei file sul server Eldis, secondo quanto emergerà dalla call tecnica con Luciano.

**Verifica tabella colori:** Simone verificherà se la tabella colori attualmente importata contiene tutte le ultime specifiche fornite, dato che i colori sono stati tra i primi elementi importati e potrebbero mancare modifiche successive.

### Attività di test nelle prossime una-due settimane

Marta inizierà a utilizzare lo strumento per codificare articoli reali, in particolare i nuovi prodotti Bosch e Siemens non appena saranno disponibili i relativi PDF. Durante questa fase verranno segnalati eventuali problemi o comportamenti inattesi e raccolti feedback sulla qualità delle descrizioni generate.

### Documentazione

Simone preparerà dei video tutorial per facilitare l'utilizzo dello strumento. Verrà realizzata una versione base che copre le operazioni quotidiane (import, elaborazione, export) e una versione avanzata che spiega la configurazione delle regole, delle categorie e dei prompt per l'intelligenza artificiale.

---

## PUNTI DA APPROFONDIRE

### Per la Fase 2 relativa alla gestione avanzata delle immagini

Per poter procedere con lo sviluppo della Fase 2, Eldis dovrà fornire le regole di ordinamento delle immagini per ogni categoria prodotto. Ad esempio, per i frigoriferi freestanding la prima foto dovrà mostrare la porta chiusa e la seconda la porta aperta, mentre per i frigoriferi da incasso la prima foto dovrà mostrare la porta aperta. Queste regole dovranno essere definite per tutte le categorie principali.

Inoltre, dovranno essere definiti i criteri di esclusione delle immagini, ovvero in quali casi una foto non deve essere utilizzata. Ad esempio, si potrebbe decidere di escludere le foto che mostrano cibo all'interno del frigorifero, preferendo quelle con il frigorifero vuoto quando disponibili.

Una volta raccolte queste informazioni, HeyAI preparerà il disegno tecnico e l'offerta economica per la Fase 2.

### Import dello storico per il configuratore catalogo

Per la futura fase del configuratore catalogo sarà necessario importare l'intero archivio dei prodotti già codificati sul gestionale Eldis. Questo sarà possibile esportando i dati dal gestionale in formato Excel (utilizzando lo stesso formato del file di output dello strumento) e importandoli sulla piattaforma AI. In questo caso si potrà scegliere di far rielaborare solo le descrizioni, mantenendo inalterate tutte le categorie e gli altri dati già corretti.

---

## NOTE TECNICHE

L'elaborazione avviene in parallelo: il sistema processa fino a 50 prodotti contemporaneamente. Il tempo medio di elaborazione è di circa 1 minuto per prodotto, ma grazie alla parallelizzazione 50 prodotti vengono completati in circa 1-2 minuti totali.

I file PDF vengono mantenuti nel sistema con il nome originale del fornitore. La rinomina con il codice Gamma avviene solo in fase di esportazione e sincronizzazione verso il server Eldis. Questo permette di ricaricare facilmente una versione aggiornata di un PDF mantenendo lo stesso nome file.

---

**Prossima riunione:** Da definire dopo la call tecnica con Luciano

**Riferimento per domande operative:** Carlo Sanvoisin

---

*Minuta redatta il 21 gennaio 2026*