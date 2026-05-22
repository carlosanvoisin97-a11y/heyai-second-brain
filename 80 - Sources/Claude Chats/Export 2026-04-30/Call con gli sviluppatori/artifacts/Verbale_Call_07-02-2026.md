## INTESTAZIONE
- **Data:** 07/02/2026
- **Durata:** ~1 ora
- **Partecipanti:** Carlo Sanvoisin — Business/Sales (HeyAI/NoLoop), Simone Montanari — CTO/Dev lead (Solutions), Federico — Sviluppatore (Solutions), Elena — Team Solutions (in ascolto)
- **Oggetto:** Avanzamento progetti Crowd, Minuz, LeadMe e AI Cookies

---

## EXECUTIVE SUMMARY

Call operativa di allineamento su quattro fronti: chiusura delivery **Crowd** (catalogo e sincronizzatore), fix e evolutive su **Minuz** (trascrizioni, switch a Claude, tag commesse), go-live **LeadMe** (migrazione prod e Chrome extension), e negoziazione commerciale **AI Cookies** (sconto, revenue share e cap con NoLoop/BAT). Definite azioni immediate per ciascun progetto con deadline concentrate tra lunedì 09 e giovedì 12 febbraio.

---

## PUNTI DISCUSSI E DECISIONI

#### Crowd — Catalogo e sincronizzatore

- **Catalogo PDF:** La preview funziona ma è ancora grezza (overflow, font da sistemare). Deciso che l'evolutiva di generazione cataloghi automatici via AI (es. modelli tipo "Nano Banana Pro") è rimandata al futuro; per ora il catalogo serve solo come brief per l'impaginatore.
- **Risparmio cliente:** Il costo di impaginazione esterna per il cliente è stimato in **12-15k €/anno**; la generazione AI costerebbe ~0,20 € a pagina in token.
- **Sincronizzatore:** Ultima feature da sviluppare, in lavorazione tra venerdì 07 e lunedì 09. Mail programmata al cliente per lunedì mattina ore 8:00.
- **Immagini prodotto:** Evolutiva vendibile — agente AI che analizza le immagini di galleria e seleziona automaticamente l'immagine principale tramite vision + prompt. Confermato che il prompt sarà gestito dal cliente, HeyAI sviluppa solo il "master". Servono immagini caricate sul portale per fare test e fornire a Carlo una **stima di costo** (range indicato: 500-600 €). Deciso che Simone chiederà direttamente al cliente di caricare le immagini, contestualmente alla mail sul server.
- **Bug fixing & enhancement:** Simone farà double-check sulla lista (originariamente su WhatsApp, poi riportata su Wrike) e completerà eventuali fix residui in coda al sincronizzatore.

#### Minuz — Fix, evolutive e switch modello AI

- **Adozione utenti:** La Garbarino ha inviato mail massiva al team NoLoop sollecitando l'utilizzo di Minuz; da lunedì previsto aumento significativo dell'uso.
- **Switch a Claude:** Carlo ha chiesto con urgenza il passaggio da GPT a Claude come modello AI. Deciso di usare **OpenRouter** come gateway unico per tutti i modelli, così da gestire fatturazione e switch centralizzati. Carlo farà creare a Marco Merli un account Claude Professional per la chiave API. Nel frattempo il team Solutions switcha subito usando le proprie chiavi. Simone invierà a Carlo le istruzioni per la creazione account OpenRouter.
- **Trascrizioni call esterne:** Problema segnalato — quando la call è organizzata dal cliente, NoLoop non può attivare la trascrizione. Nessun workaround semplice immediato disponibile. Simone indagherà soluzioni (estensione Chrome, registrazione audio locale + trascrizione AI con speaker diarization). Deciso che è un'**evolutiva quotabile** separatamente. [DA VERIFICARE: fattibilità tecnica e costi]
- **Tag commesse/clienti:** Aggiunta di un sistema a due livelli: cliente + evento (es. "Lamborghini — Vallelunga"), richiesto dalla Garbarino. Federico conferma fattibilità rapida, lo implementerà come sistema di tag innestati.
- **Naming:** Rinominare "Riepilogo" in **"Analisi"** o **"Report"** nell'interfaccia.
- **Formattazione output:** Fix della renderizzazione markdown (bold con asterischi, bullet point con trattini) — da sistemare.
- **Titoli:** Prompt da aggiornare con vincolo di **max 4 parole** per i titoli generati.
- **Aggregazione commesse:** Rimandata a fase successiva, quando sarà disponibile il database commesse (collegamento al gestionale futuro).

#### LeadMe — Go-live in produzione

- **Stato:** Sviluppo completato, database pulito. Extension Chrome inviata al Chrome Web Store per approvazione (attesa 1-2 giorni, possibile fino a un mese).
- **Migrazione dati:** Necessaria migrazione attività da ambiente dev a prod. Confermato che utenti e company verranno portati selettivamente; le activity verranno migrate integralmente.
- **Import manuale:** Deciso che il bottone di import manuale verrà rimosso dall'interfaccia contestualmente all'abilitazione della Chrome extension. Se l'utente clicca dove c'era il bottone, vedrà un messaggio con link all'estensione.
- **Scraper/navigazione pagina:** Il bug di autenticazione (visibile solo al team dev) verrà fixato. La pagina scraper resta attiva ma va verificato il **limite di processamento** — Carlo ha riscontrato che lo scraper processava anche contatti modificati di recente, non solo quelli inattivi. [DA VERIFICARE: configurazione dev vs prod]
- **Comunicazione al cliente:** Lunedì mattina Carlo invierà email riepilogativa: fix completati, logica vacancies corretta, dati migrati in prod, indicazione di usare solo ambiente produzione.

#### AI Cookies — Negoziazione commerciale NoLoop/BAT

- **Sconto concordato:** 40% (da 36k a **22k**). Lo sconto è confermato e non rinegoziabile.
- **Revenue share:** Confermato al **15%**, non modificabile.
- **Cap primo anno:** Carlo negozierà con Germano un cap più alto rispetto ai 120k proposti. Se non riesce, la ripartizione del cap del primo anno sarà **60/40** a favore di Solutions (anziché 50/50) per coprire i costi di sviluppo. Dal secondo anno si torna a parità.
- **Prossimi passi commerciali:** Carlo raccoglierà da NoLoop i dati su volumi di vendita e numero di pop-up previsti per costruire il business case. Previsto tra martedì e mercoledì.
- **Incontro BAT del 26 febbraio:** Massimiliano (direttore NoLoop) e Donzelli incontreranno l'AD di BAT + direttore marketing GLO. Opportunità strategica per espandere AI Cookies su più centri commerciali. Simone preparerà materiale/demo per l'occasione. Idea di una PoC con telecamera e scaffale per mostrare le notifiche prodotto in tempo reale.
- **Bruno:** Ha espresso preferenza per trattenere tutto il revenue share; Carlo ha deciso autonomamente di condividere con Solutions.

#### Fatturazione token e privacy

- **Crowd (Elvis):** Necessario creare account di fatturazione separato per tracciare i consumi token. Il team chiederà a Carlo che tipo di account creare.
- **NoLoop:** Deciso di **non** ribillare i token a NoLoop per evitare complessità legate a privacy policy, certificazioni ISO e accrediti. NoLoop gestirà direttamente i propri costi.
- **Limite attuale:** Impostato un cap di 400 €/mese su Minuz; nessun utente lo ha superato finora.

#### NoLoop — Modulo logistica e vendite

- **Logistica:** Modulo già confermato. Due magazzini (Roma e Milano), smistamento verso centri commerciali Centro-Sud e Centro-Nord, alert automatici su scorte in esaurimento, analisi predittiva ottimizzazione.
- **Vendite:** Carlo proporrà anche il modulo vendite per la sinergia con logistica (cross-check automatico vendite/incasso/stock). Confermato che se ne occupa Carlo commercialmente.
- **Call tecnica giovedì 12/02:** Fissata alle 17:00 con il cliente. Parteciperanno sia Simone che Federico per raccogliere requisiti e definire lo scope. Obiettivo: sprint di 1,5 ore per capire scope senza sottostimare.

#### Roadmap NoLoop 2026

- **Piano:** Carlo sta completando interviste con i reparti NoLoop per definire la roadmap applicativa 2026. Prevede 2-3 soluzioni aggiuntive oltre al gestionale, per un valore stimato di **100-120k** (prezzo al cliente con ricarico ~35%).
- **Allineamento:** Carlo e Simone si sentiranno **sabato 08 pomeriggio** per revisione architetturale/funzionale delle idee emerse.

---

## NEXT STEPS

- **Mail Crowd al cliente:** Programmare invio lunedì 08:00 con stato lavori, richiesta caricamento immagini e spiegazione cataloghi (Solutions — Simone, duedate: 09/02/2026)
- **Sincronizzatore Crowd:** Completare sviluppo e rilascio (Solutions — Simone, duedate: 10/02/2026)
- **Stima costi vision immagini:** Testare modelli AI per selezione immagine principale e fornire cifra a Carlo (Solutions, duedate: TBD — dopo caricamento immagini dal cliente)
- **Double-check enhancement Crowd:** Verificare lista fix/enhancement su Wrike e completare eventuali residui (Solutions — Simone, duedate: 10/02/2026)
- **Switch Minuz a Claude:** Implementare switch modello AI via OpenRouter, usando temporaneamente chiavi interne (Solutions — Federico, duedate: 09/02/2026)
- **Istruzioni OpenRouter:** Inviare a Carlo guida per creazione account e abbonamento corretto (Solutions — Simone, duedate: 09/02/2026)
- **Account Claude Professional:** Contattare Marco Merli per creazione account e chiave API (Carlo, duedate: 09/02/2026)
- **Indagine trascrizioni esterne:** Ricercare soluzioni per trascrizione di call non organizzate da NoLoop (Solutions — Simone, duedate: TBD)
- **Fix Minuz (naming, formattazione, titoli, tag):** Implementare le modifiche UI e prompt richieste (Solutions — Federico, duedate: 13/02/2026)
- **Migrazione LeadMe in prod:** Migrare attività da dev a prod e comunicare al cliente (Solutions, duedate: 09/02/2026)
- **Rimozione import manuale LeadMe:** Disabilitare bottone e aggiungere redirect a Chrome extension (Solutions, duedate: 09/02/2026)
- **Verifica scraper LeadMe:** Controllare configurazione limite processamento contatti in ambiente prod (Solutions, duedate: TBD)
- **Email LeadMe al cliente:** Comunicare fix completati, migrazione prod, istruzioni utilizzo (Carlo, duedate: 09/02/2026)
- **Negoziazione cap AI Cookies:** Raccogliere dati vendita e pop-up da NoLoop, costruire business case, negoziare cap con Germano (Carlo, duedate: 11-12/02/2026)
- **Preparazione demo AI Cookies per BAT:** Definire formato presentazione/PoC per incontro del 26/02 (Carlo + Simone, duedate: TBD)
- **Call requisiti logistica NoLoop:** Partecipare alla call tecnica del giovedì con domande preparate (Solutions — Simone + Federico, duedate: 12/02/2026)
- **Allineamento roadmap NoLoop 2026:** Call Carlo-Simone per revisione architetturale (Carlo + Simone, duedate: 08/02/2026)
- **Fatturazione token Elvis:** Definire e creare account di fatturazione separato (Solutions + Carlo, duedate: TBD)

---

## NOTE AGGIUNTIVE

- **Visita a Roma:** Simone e Federico prevedono di andare a Roma da Carlo per lavorare insieme dopo San Valentino (weekend del ~22-23 febbraio). Non ancora confermato.
- **Master prompt Minuz:** Carlo condividerà con Simone il prompt che usa per le trascrizioni, utile per allineare il sistema.
- Il team ha ribadito che l'ambiente **dev non è da considerarsi valido per dati di produzione**; il cliente deve essere istruito a lavorare esclusivamente in prod.