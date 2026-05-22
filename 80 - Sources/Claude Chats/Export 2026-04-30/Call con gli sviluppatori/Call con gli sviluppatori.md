# Call con gli sviluppatori

**Created:** 07/02/2026, 21:19:52
**Updated:** 10/02/2026, 21:31:48
**Exported:** 30/04/2026, 03:30:47
**Model:** claude-opus-4-6
**Link:** [https://claude.ai/chat/032539a0-1cf7-4603-8385-cdb02af01d8c](https://claude.ai/chat/032539a0-1cf7-4603-8385-cdb02af01d8c)

---

## User
**2026-02-07T20:19:53.472Z**

qui è call fra me carlo e i miei sviluppatori

## Claude
**2026-02-07T20:21:55.659Z**

Let me read the uploaded file and the relevant skill documentation.

Now let me create the minutes document.

The user asked for minutes — I'll produce a clean markdown file since that's the most natural format for meeting minutes, and it's directly renderable. Let me draft the minutes now.

Ecco il verbale della call. Ho identificato i partecipanti (Carlo lato business/NoLoop, Simone e Federico lato Solutions, Elena in ascolto), mappato 7 macro-argomenti e estratto 17 next steps con owner e deadline. Ho segnalato con `[DA VERIFICARE]` i punti dove la trascrizione era ambigua. Dai un'occhiata e dimmi se vuoi aggiustare qualcosa!

## User
**2026-02-07T20:26:13.181Z**

Allora innanzitutto il primo punto discusso la soluzione non si chiama crowd ma è il compilatore AI e il cliente si chiama eldis, poi lo strumento minutes si scrive così. E eye cookies si scrive così, per il resto ti chiedo di ricontrollare di nuovo tutta quanta la trascrizione Assicurati che non ti sei perso nulla.

## Claude
**2026-02-07T20:31:01.352Z**

Let me re-read the transcript carefully with the corrected names and check for anything I missed.

Ho riletto tutta la trascrizione. Ecco le correzioni e i punti che avevo mancato o riportato in modo impreciso:

**Correzioni nomi:**
- "Crowd" → **Compilatore AI** (cliente: **Eldis**)
- "Minux/minus" → **Minutes**
- "AI Cookies" → **Eye Cookies**

**Punti mancati o da precisare nella prima versione:**
1. Minutes già accetta transcript da tutte le piattaforme (enhancement già fatto da Simone, riga 89)
2. La proposta di Carlo su trascrizioni esterne: usare OBS Studio + prompt che distingua gli speaker dal contesto (chi è cliente e chi è NoLoop) — era già menzionato ma posso renderlo più esplicito
3. Simone menziona che aggiornerà Carlo anche sul **Compilatore AI** domani (riga 447: "ti aggiorno così anche su crowd perché oggi ci ho lavorato")
4. Carlo menziona la **riunione con tutti gli utenti Minutes fra una settimana** per raccogliere feedback (riga 162)
5. Il ricarico di Carlo sul prezzo al cliente NoLoop per la roadmap 2026 è circa **33-35%** (non 50%, riga 444)
6. Federico deve andare via, la call Carlo-Simone di domani è confermata **sabato tardo pomeriggio** (Federico a cena, riga 445)

Ricreo il file corretto.

Ecco la versione corretta. Riepilogo delle modifiche rispetto alla prima versione:

**Nomi corretti:** Crowd → **Compilatore AI** (cliente: **Eldis**), Minux/minus → **Minutes**, AI Cookies → **Eye Cookies**

**Punti aggiunti nella revisione:**
- Enhancement **multi-piattaforma transcript** già implementato da Simone su Minutes
- Proposta specifica di Carlo: **OBS Studio + prompt** per distinguere speaker dal contesto
- **Riunione feedback utenti Minutes** fra una settimana (~14/02) — le fix devono essere pronte prima
- **Riprocessazione retroattiva** delle call precedenti dopo switch a Claude
- Aggiornamento Compilatore AI da Simone a Carlo previsto per **sabato 08**
- Ricarico NoLoop 2026 corretto a **~33-35%** (non 50%)
- **~15 utenti** attivi su Minutes
- Sezione dedicata alla **condivisione del master prompt**

## User
**2026-02-07T20:32:08.719Z**

desso fai una versione molto più sintetica con i punti scritti in maniera concisa e solamente quelli che interessano al team di sviluppo e che posso quindi mandare agli sviluppatori come come informazioni che gli servono.

## Claude
**2026-02-07T20:32:54.940Z**

Versione sintetica e azionabile, filtrata solo su ciò che serve al team dev. Ho tolto tutta la parte di negoziazione commerciale Eye Cookies (lasciando solo un cenno per contesto sulla demo), le dinamiche interne con Bruno, e i dettagli sui revenue share/cap. Le deadline sono tutte esplicite.

## User
**2026-02-07T21:01:14.248Z**

action items di carlo

## Claude
**2026-02-07T21:01:40.319Z**

9 action items di Carlo, ordinati per urgenza. I primi tre sono tutti per lunedì.

## User
**2026-02-09T21:15:05.293Z**

Andiamo a comunicare gli aggiornamenti su leadmin. Qui ti metto l'ultima comunicazione che avevo dato al cliente e inoltre ti do gli aggiornamenti relativi a quello che mi hanno detto i tecnici. Innanzitutto. Diciamo che la visualizzazione pagina è stata sistemata e di darci conferma anche la parte della logica su come vengono assegnate le i posti Vacanti è stata corretta. Secondo la loro disposizione sulla pulizia dati abbiamo completato. Quindi entro domani. Gli manderemo il link del nuovo ambiente dove devono lavorare con lo stesso strumento. E passeranno così da ambiente test a ambiente ufficiale nel momento in cui i forniremo questo link gli chiediamo cortesemente di utilizzare solo e soltanto quel link con le stesse udienze credenziali che hanno utilizzato in ambiente test e di non utilizzare più l'ambiente test  Per quanto riguarda lo scribar abbiamo risolto. Quindi adesso solamente i super user potranno far partire lo scriper manualmente, altrimenti Partirà in automatico, secondo le indicazioni che gli abbiamo dato per quanto riguarda l'importo contatti non ci sarà più bisogno di importarli manualmente con il copia-incolla del link del profilo Linkedin, bensì potranno utilizzare l'estensione del Sales Navigator per ora gliela do qui in allegato con una demo su come installarla successivamente, appena lo store l'avrà approvata in maniera ufficiale la troveranno direttamente fra le estensioni disponibili di Google.

Ciao Simona,
grazie per il confronto di oggi! Di seguito un recap dei punti discussi.
Fix completati e verificati
* Motore di ricerca Aziende: Il problema è stato risolto e la barra di ricerca ora funziona correttamente.
* Gestione Filtri: Abbiamo corretto il comportamento; ora, quando applichi un filtro o scrivi nella barra di ricerca, l'impostazione rimane attiva anche tornando alla pagina precedente.
Lavorazioni in corso (Rilascio entro venerdì)
* Visualizzazione pagina: Manterremo la posizione dello scroll quando si cambia pagina (evitando che la visualizzazione torni in alto).
* Logica Vacancies: Stiamo ottimizzando il sistema affinché il cambio ruolo interno alla stessa azienda non generi una posizione vacante (si tratta di un intervento che abbiamo deciso di includere, anche se non previsto, per migliorare la vostra esperienza d’uso 😉)
* Pulizia Dati: I tecnici stanno lavorando sulla base dati per risolvere le posizioni vacanti in eccesso e sbloccare i contatti non processati (TBD - LinkedIn Profile)
Scraper e Import Contatti
I tecnici mi hanno confermato che durante le lavorazioni attualmente in corso sulla base dati, lo Scraper e l'Import tramite Link sono temporaneamente bloccati per gli utenti standard. Al momento queste funzioni sono operative solo per gli amministratori: ho già provveduto a promuovere il tuo account ad Admin (ho fatto un test dal tuo account e funziona tutto correttamente!).
Nota: Fammi sapere se anche Matteo e Luca hanno urgenza di importare nuovi contatti in questi giorni: in tal caso dovrò passare temporaneamente anche le loro utenze ad Admin per permettergli di operare.
In chiusura, ti chiedo gentilmente di inviarmi una registrazione schermo del "tremolio" sulla schermata contatti. Mi è indispensabile per mostrare ai tecnici l'esatto comportamento e risolvere l’errore.
Per qualsiasi altro dubbio o domanda resto a disposizione!
Grazie,
Carlo

## Claude
**2026-02-09T21:15:49.074Z**

This is an email, so I'll use the message compose tool directly — no need for a file.

Due versioni: la prima più strutturata e formale (in linea con il tono della tua email precedente a Simona), la seconda più snella e diretta. Entrambe mantengono la stessa progressione logica: fix → ambiente prod → scraper → novità extension. Scegli quella che preferisci!

