## INTESTAZIONE
- **Data:** 07/02/2026
- **Durata:** ~1h 06min
- **Partecipanti:** Carlo Sanvoisin — Business/Sales (HeyAI · NoLoop), Simone Montanari — CTO/Dev lead (Solutions), Federico — Sviluppatore (Solutions), Elena — CEO (Solutions, in ascolto)
- **Oggetto:** Avanzamento Compilatore AI, Minutes, LeadMe ed Eye Cookies

---

## EXECUTIVE SUMMARY

Call operativa di allineamento su quattro progetti e una negoziazione commerciale: chiusura delivery **Compilatore AI** per Eldis (catalogo, sincronizzatore, evolutiva immagini), fix e evolutive prioritarie su **Minutes** per NoLoop (switch a Claude, trascrizioni esterne, tag commesse), go-live **LeadMe** (migrazione in prod e Chrome extension), negoziazione **Eye Cookies** (sconto, cap e revenue share con NoLoop/BAT) e roadmap **NoLoop 2026**. Azioni concentrate tra sabato 08 e giovedì 12 febbraio.

---

## PUNTI DISCUSSI E DECISIONI

#### Compilatore AI — Eldis (catalogo, sincronizzatore, immagini)

- **Catalogo PDF:** La preview funziona ma è grezza (overflow, font da aggiustare). Attualmente utile solo come brief per l'impaginatore. Deciso che l'evolutiva di generazione automatica cataloghi via AI (es. modelli futuri tipo "Nano Banana Pro") è **rimandata** — si rivaluterà il prossimo anno. Il costo di impaginazione esterna per Eldis è stimato in **12-15k €/anno**; la generazione AI costerebbe ~0,20 €/pagina in token.
- **Sincronizzatore:** Ultima feature da sviluppare, in lavorazione tra venerdì 07 e lunedì 09. Simone programmerà la mail al cliente per **lunedì mattina ore 8:00**, comunicando stato lavori, richiesta caricamento immagini e spiegazione cataloghi. Lunedì sera o martedì il sincronizzatore dovrebbe essere completo; eventuali fix/enhancement residui verranno fatti in coda.
- **Evolutiva immagini:** Funzionalità vendibile — agente AI con **vision** che analizza le immagini di galleria di un prodotto e seleziona automaticamente l'immagine principale tramite prompt. Confermato che la parte di prompt resta in mano al cliente, Solutions sviluppa solo il "master". Simone propone un approccio semplificato: passare le immagini direttamente al modello e chiedergli quale sia la principale, senza dover descrivere ogni immagine. Servono immagini caricate sul portale per fare test. Carlo chiede solo la **cifra** (range indicato: **500-600 €**), non il ragionamento tecnico. Deciso che Simone chiederà direttamente a Eldis di caricare le immagini nella mail di lunedì.
- **Bug fixing & enhancement:** Simone farà double-check sulla lista originaria (da WhatsApp, poi su Wrike) e su feedback già ricevuti da Eldis. Completamento in coda al sincronizzatore.
- **Fase post-delivery:** Prevista una fase in cui Eldis inizierà a usare il Compilatore AI e chiederà piccole modifiche; il team le gestirà valutando caso per caso.

#### Minutes — Fix ed evolutive prioritarie (NoLoop)

- **Adozione utenti:** La **Garbarino** ha inviato email massiva al team NoLoop sollecitando l'uso di Minutes. Da lunedì previsto aumento significativo dell'utilizzo. Carlo ha una **riunione con tutti gli utenti fra una settimana** per raccogliere feedback.
- **Switch a Claude:** Carlo ha chiesto con urgenza il passaggio da GPT a Claude. Deciso di usare **OpenRouter** come gateway unico per tutti i modelli, così da centralizzare fatturazione e switch (evitando che il cliente gestisca chiavi multiple o capisca i consumi per singolo modello). Carlo lunedì chiamerà **Marco Merli** per creare un account Claude Professional e ottenere la chiave API. Nel frattempo il team Solutions switcha subito usando le proprie chiavi. Simone invierà a Carlo le istruzioni per la creazione dell'account OpenRouter. Confermato che le call precedenti potranno essere **riprocessate retroattivamente** con il nuovo modello e prompt.
- **Trascrizioni call esterne:** Problema segnalato — quando la call è organizzata dal cliente di NoLoop, il team non può attivare la trascrizione. Simone ha già implementato l'enhancement per accettare transcript da **tutte le piattaforme** (non solo quella nativa). Tuttavia non esiste un workaround semplice per registrare e trascrivere autonomamente. Opzioni esplorate: estensione Chrome per catturare audio WebRTC, agent locale che fa bridge microfono/audio, speaker diarization con AI. Carlo propone un workaround intermedio: registrare con **OBS Studio**, ottenere trascrizione grezza senza speaker, e aggiungere un **prompt** che istruisca l'AI a distinguere cliente e NoLoop dal contesto. Deciso che Simone indagherà soluzioni; è un'**evolutiva quotabile** separatamente (scope originale prevedeva call organizzate da NoLoop). [DA VERIFICARE: fattibilità e costi workaround]
- **Tag cliente/evento:** Richiesta dalla Garbarino: il campo "evento" deve diventare **cliente — evento** (es. "Lamborghini — Vallelunga"). Federico conferma fattibilità come sistema di tag innestati (cliente contiene sotto-tag evento). Simone segnala che in futuro questi tag dovranno essere **retroattivamente collegabili** alle commesse del gestionale (Sally/Tolly). Il collegamento al database commesse sarà un enhancement futuro a pagamento.
- **Aggregazione commesse:** Possibilità di aggregare più trascrizioni sotto una stessa commessa. Deciso di **rimandare**: manca ancora il campo commessa e il database reale. Federico propone un'implementazione rapida a tag, ma Carlo dice di andare avanti.
- **Naming:** Rinominare **"Riepilogo"** in **"Analisi"** o **"Report"** nell'interfaccia.
- **Formattazione output:** Fix della renderizzazione markdown — gli utenti vedono asterischi e hashtag anziché bold e heading. Simone aveva rimosso la formattazione causando trattini al posto dei bullet point. Da sistemare.
- **Titoli:** Aggiornare il prompt con vincolo di **max 4 parole** per i titoli generati.
- **Deadline Minutes:** Federico si concentrerà anche domani (sabato) su queste modifiche e sullo switch a Claude.

#### LeadMe — Go-live in produzione (NoLoop)

- **Stato sviluppo:** Completato, database pulito ieri sera. Extension Chrome inviata al Chrome Web Store per approvazione (attesa **1-2 giorni**, possibile fino a un mese secondo policy Google). In caso di mancata approvazione entro domenica, Carlo lunedì invierà tutorial per installazione manuale da zip.
- **Pulizia database prod:** Rimossi account in TBD e duplicati. Confermato che logica **vacancies** è stata corretta e bug di visualizzazione pagina (apertura/chiusura) risolto.
- **Migrazione dati dev → prod:** Il cliente lavorava ancora in dev. Necessario migrare le attività (Activity) create in dev verso prod. Le Activity verranno migrate integralmente; utenti e company solo quelli del periodo recente. Operazione rapida.
- **Import manuale:** Deciso di rimuovere il bottone di import manuale **contestualmente** all'abilitazione della Chrome extension (lunedì), non prima — per non lasciare gli utenti senza strumento nel weekend. Il bottone verrà sostituito con messaggio + link alla Chrome extension.
- **Scraper/navigazione pagina:** Bug di autenticazione (pagina visibile solo al team dev) da fixare — Simone aveva rinforzato i permessi. La pagina scraper resta attiva ma Carlo segnala un problema: lo scraper **processava anche contatti modificati di recente**, non solo quelli inattivi da tempo. Da verificare la configurazione del limite (variabile dev vs prod). [DA VERIFICARE: configurazione scraper in prod]
- **Comunicazione al cliente:** Lunedì mattina Carlo invierà email: fix completati, logica vacancies corretta, dati migrati in prod, **d'ora in poi usare solo ambiente produzione**. Il team ribadisce che l'ambiente dev non è valido per dati di produzione e il cliente deve esserne informato.

#### Fatturazione token

- **Eldis:** Necessario creare **subito** un account di fatturazione separato per tracciare i consumi token. Solutions chiederà a Carlo che tipo di account far creare al cliente.
- **NoLoop (Minutes):** Limite attuale di **400 €/mese** impostato da Simone; nessun utente l'ha superato. Discussa la possibilità di ribillare i token al cliente a consuntivo. Carlo è d'accordo a "grattare" ma servono stime di costo. Per NoLoop tuttavia, deciso di **lasciar perdere** la ribillatura diretta per evitare complessità legate a **privacy policy, contratti token e certificazioni ISO** (costo stimato delle certificazioni: ~9.000 € per guadagnarne ~1.000/anno). NoLoop gestirà direttamente. Per Eldis invece non ci sono questi vincoli, quindi si può procedere.

#### Eye Cookies — Negoziazione commerciale (NoLoop/BAT)

- **Prezzo e sconto:** Prezzo originale **36k**, sconto 40% concordato → prezzo a **22k**. Lo sconto è confermato e non rinegoziabile. Carlo riconosce di essersi "infossato" ma non può tornare indietro.
- **Revenue share:** Confermato al **15%**, non modificabile.
- **Cap primo anno:** Cap proposto a **120k** con split 50/50. Solutions ha chiesto 10k in più (split 60/40 primo anno) per coprire costi di sviluppo. Carlo contropropone: prova a negoziare un **cap più alto** con Germano così tutti guadagnano di più a parità di split. Se non riesce a negoziare un cap maggiore, accetta **60/40 primo anno**, poi si torna a 50/50 dal secondo anno.
- **Negoziazione con Germano:** Carlo ha parlato con Germano, concordato di **sedersi con gli avvocati** per negoziare i dettagli. Carlo raccoglierà i dati su volumi di vendita NoLoop e numero di pop-up previsti da BAT per costruire il **business case** in piena trasparenza con Solutions. Previsto tra **martedì e mercoledì**.
- **Bruno:** Ha espresso preferenza per trattenere tutto il revenue share; Carlo ha deciso autonomamente di condividerlo con Solutions, ritenendo che l'investimento condiviso generi più impegno da parte del team.
- **Incontro BAT del 26/02:** **Massimiliano** (direttore NoLoop) e **Donzelli** incontreranno l'**AD di BAT** + **direttore marketing di GLO**. Opportunità strategica per espandere Eye Cookies su più centri commerciali (ipotesi iniziale: ~5). Per fare colpo, Simone propone una **demo live** con telecamera e scaffale che mostra la notifica prodotto in tempo reale. Carlo pensa a una **presentazione** e/o **moodboard**. Idealmente arrivare con una **PoC realistica** — ci sono circa 20 giorni. BAT spende **~20 milioni €/anno** per i pop-up on trade NoLoop: potenziale budget rilevante per attività di marketing alternativo nel settore tabacco.

#### NoLoop — Modulo logistica e proposta vendite

- **Logistica (confermato):** Due magazzini (Roma e Milano). Scope: smistamento tra i due magazzini, smistamento Roma → centri commerciali Centro-Sud e Milano → Centro-Nord, **alert automatici** su scorte in esaurimento nei pop-up, **analisi predittiva** per ottimizzazione smistamenti. Call tecnica fissata da Andrea.
- **Proposta vendite (da vendere):** Carlo proporrà anche il **modulo vendite** per la sinergia con logistica — cross-check automatico **vendite/incasso/stock** tramite riconciliazione con POS. Simone conferma che scorporare logistica e vendite fa perdere visibilità sul magazzino. Carlo se ne occuperà commercialmente.
- **Call tecnica giovedì 12/02 ore 17:00:** Parteciperanno Simone e Federico per raccogliere requisiti. Obiettivo: sprint di **1,5 ore** per definire lo scope di progetto. Carlo raccomanda di arrivare preparati con domande tecniche e di **non sottostimare**.

#### Roadmap NoLoop 2026

- **Piano:** Carlo sta completando interviste con i reparti NoLoop, ultime in settimana prossima. Visione molto più chiara degli applicativi 2026. Prevede **2-3 soluzioni aggiuntive** oltre al gestionale, valore stimato **100-120k** (prezzo al cliente con ricarico **~33-35%**). Possibilità di preparare demo per effetto wow.
- **Allineamento:** Carlo e Simone si sentiranno **sabato 08 tardo pomeriggio** per revisione architetturale e fattibilità. Federico non partecipa (impegnato).

#### Master prompt Minutes

- **Condivisione:** Simone chiede a Carlo di condividere il **master prompt** che usa per processare le trascrizioni, così da allinearlo con il sistema di Minutes. Carlo accetta.

---

## NEXT STEPS

- **Mail Eldis (Compilatore AI):** Programmare invio lunedì ore 8:00 con stato lavori, richiesta caricamento immagini e spiegazione cataloghi (Solutions — Simone, duedate: 09/02/2026)
- **Sincronizzatore Compilatore AI:** Completare sviluppo e rilascio (Solutions — Simone, duedate: 09-10/02/2026)
- **Stima costi vision immagini:** Testare modelli AI per selezione immagine principale e fornire cifra a Carlo (Solutions, duedate: TBD — dopo caricamento immagini da Eldis)
- **Double-check enhancement Compilatore AI:** Verificare lista fix/enhancement su Wrike e completare eventuali residui (Solutions — Simone, duedate: 10/02/2026)
- **Account fatturazione token Eldis:** Definire tipo di account da far creare al cliente e comunicarlo a Carlo (Solutions, duedate: TBD)
- **Switch Minutes a Claude:** Implementare switch modello AI via OpenRouter, usando temporaneamente chiavi interne (Solutions — Federico, duedate: 08-09/02/2026)
- **Istruzioni OpenRouter:** Inviare a Carlo guida per creazione account e abbonamento corretto, con check umano prima dell'invio (Solutions — Simone, duedate: 09/02/2026)
- **Account Claude Professional:** Contattare Marco Merli per creazione account e chiave API (Carlo, duedate: 09/02/2026)
- **Indagine trascrizioni esterne:** Ricercare soluzioni per trascrizione di call non organizzate da NoLoop (Solutions — Simone, duedate: TBD)
- **Fix Minutes (naming, formattazione, titoli, tag cliente/evento):** Implementare modifiche UI e prompt richieste; completare prima della riunione feedback utenti (Solutions — Federico, duedate: 13/02/2026)
- **Migrazione LeadMe in prod:** Migrare attività da dev a prod (Solutions, duedate: 08-09/02/2026)
- **Rimozione import manuale LeadMe:** Disabilitare bottone e aggiungere redirect a Chrome extension, contestualmente all'abilitazione extension (Solutions, duedate: 09/02/2026)
- **Verifica scraper LeadMe:** Controllare configurazione limite processamento contatti in ambiente prod (Solutions, duedate: TBD)
- **Fix permessi pagina scraper LeadMe:** Verificare permessi autenticazione per tutti gli utenti (Solutions — Simone, duedate: 09/02/2026)
- **Email LeadMe al cliente:** Comunicare fix completati, migrazione prod, istruzioni di usare solo ambiente produzione (Carlo, duedate: 09/02/2026)
- **Negoziazione cap Eye Cookies:** Raccogliere dati vendita e pop-up da NoLoop, costruire business case in trasparenza con Solutions, negoziare cap con Germano e sedersi con avvocati (Carlo, duedate: 11-12/02/2026)
- **Preparazione demo/PoC Eye Cookies per BAT:** Definire formato — demo live e/o presentazione + moodboard — per incontro del 26/02 (Carlo + Simone, duedate: TBD — entro ~25/02/2026)
- **Call requisiti logistica NoLoop:** Partecipare alla call tecnica con domande preparate e definire scope senza sottostimare (Solutions — Simone + Federico, duedate: 12/02/2026 ore 17:00)
- **Allineamento roadmap NoLoop 2026:** Call Carlo-Simone per revisione architetturale/funzionale (Carlo + Simone, duedate: 08/02/2026 tardo pomeriggio)
- **Condivisione master prompt:** Carlo invierà a Simone il prompt usato per processare le trascrizioni (Carlo, duedate: TBD)
- **Aggiornamento Compilatore AI:** Simone aggiornerà Carlo sui progressi (Simone → Carlo, duedate: 08/02/2026)

---

## NOTE AGGIUNTIVE

- **Visita a Roma:** Simone e Federico prevedono di andare a Roma da Carlo per lavorare insieme, indicativamente il **weekend dopo San Valentino** (~22-23/02). Non ancora confermato.
- L'**ambiente dev non è valido per dati di produzione**; il cliente (NoLoop/LeadMe) deve essere formalmente istruito a lavorare esclusivamente in prod.
- L'enhancement di accettazione transcript **multi-piattaforma** su Minutes è già stato implementato da Simone.
- La **riunione feedback utenti Minutes** è prevista fra circa una settimana (~14/02); le fix devono essere completate prima.
- Minutes sta venendo usato da circa **15 persone** in NoLoop; LeadMe è anch'esso in uso.