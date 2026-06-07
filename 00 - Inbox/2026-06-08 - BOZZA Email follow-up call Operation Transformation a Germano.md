---
type: email_draft
project: Operation Transformation
to: germanomarano.consultant@noloop.eu
cc: [Massi Sinigaglia]
cc_note: "Massi in CC: era assente alla call (recupera i punti) + serve la sua conferma sulla prioritizzazione registrazione vs predittivo. Valutare anche Andrea Pazienza per allineamento interno HeyAI. Decisione finale CC a Carlo prima dell'invio."
subject_options:
  - "Recap call Operation Transformation (4/6) + next steps"
  - "Follow-up Operation Transformation — punti emersi nel bisettimanale"
thread: nuovo thread (Germano in call: "fammela la domanda in mail" / "noi attendo la vostra email")
created: 2026-06-08
meeting_context: 2026-06-04 — Prima call bisettimanale Operation Transformation, 30 min (Carlo + team di sviluppo + Germano; Massi assente) — call assorbita nelle schede
status: bozza da rivedere e inviare a cura di Carlo
---

# Bozza email follow-up call bisettimanale Operation Transformation #1

## Subject suggerito
> Recap call Operation Transformation (4/6) + next steps

## Body paste-ready Outlook

Ciao Germano,

grazie per la call di mercoledì, è stata una bella prima istanza del bisettimanale su Operation. Provo a ricapitolare in maniera compatta i punti emersi e i prossimi passi, così rimane tutto tracciato e hai un riferimento da girare anche a Massi e Carmen.

**Impostazione della soluzione**
L'indirizzo che stiamo seguendo è costruire una piattaforma il più possibile generica e future-proof: non legata al singolo prodotto di oggi, ma capace di gestire un catalogo che cambia nel tempo senza richiedere una nuova integrazione a ogni variazione. Per questo ci è molto utile avere quanto più materiale possibile sul catalogo in vendita.

**Il punto bloccante — API BAT/PARD**
Resta il nodo dirimente. Prima di ipotizzare qualsiasi sviluppo lato integrazione, dobbiamo capire se BAT (e PARD) espongano già delle API per la registrazione delle vendite o se andrebbero sviluppate da zero: a oggi non risultano API pubbliche, verosimilmente esistono solo a uso interno. Finora il push è passato unicamente tramite Justin, senza un contatto diretto con i loro referenti tecnici. Se riesci ad approfondire internamente lo stato reale di queste API — se esistono e, in caso, perché non vengono esposte — ci aiuterebbe a non incardinare il progetto su una dipendenza che rischia di allungarsi parecchio. In parallelo, l'ipotesi che hai sollevato di esporre noi le API è interessante: ci renderebbe agnostici rispetto ai sistemi terzi e potenzialmente trasformerebbe la piattaforma in un servizio a sé. La approfondiamo una volta chiarito il quadro lato BAT. Un elemento da tenere presente è che la registrazione del prodotto è legata alla scontistica BAT, quindi è nell'interesse del cliente registrare al momento della vendita e non in differita.

**Stato sviluppo**
In call il team di sviluppo ti ha mostrato dal vivo una prima POC dell'applicativo (una web app installabile su mobile): la dashboard prodotti con l'inventario, la funzione di carico con registrazione del codice univoco di ogni pezzo (sul modello dell'IMEI di un telefono) e la funzione di vendita con riconoscimento del prodotto tramite un modello proprietario che gira direttamente sul device, scansione del seriale e check-out. Il tracciamento del codice univoco abilita di fatto un controllo anti-furto: un pezzo che esce e non rientra con lo stesso seriale viene intercettato dal sistema. L'app diventa così il touchpoint unico degli addetti e, con il login, ci permette anche di tracciare vendite e performance. Come dicevi, è un avanzamento concreto, ma resta subordinato allo sblocco del punto sulle API.

**Documentazione di alto livello**
Come promesso ti giro a breve un quadro condivisibile del progetto: il requirement log dettagliato, un brief più discorsivo che racconta i blocchi (interazione con la logistica, integrazione con i sistemi esterni, flusso e finalità dei dati) e, se la recupero, la slide di architettura. Facciamo un passaggio di validazione interno e poi te lo mando, così hai un riferimento per allinearti e riportare a Massi e Carmen.

**Prioritizzazione — registrazione dati vs modello predittivo**
Un punto su cui mi serve allinearti, anche perché mi dicevi di non essere stato aggiornato sulle discussioni pregresse. Nel piano iniziale la prima fase era l'ingestion dello storico vendite degli ultimi cinque anni, per costruire il modello predittivo. Da un confronto recente con Carmen e Massimiliano è emersa però l'indicazione di prioritizzare la parte di registrazione/inserimento dati — di fatto sostituire le tre compilazioni separate con un inserimento unico, utile da subito anche al reparto amministrativo. Ti chiederei una conferma, idealmente anche con Massi, che questa sia effettivamente la priorità: così concentriamo l'effort del team su quella parte.

**Dati per il modello predittivo**
Mi sto coordinando con Carmen per una call questa settimana: mi ha anticipato che sta facendo un cleanup dei dati (alcuni sporchi o non utili al modello), in modo da arrivare alla chiamata con il materiale già pronto e far partire il lavoro.

**Connettività**
Sul tema multi-SIM e stabilità della connessione nei centri commerciali, ti giro la nostra soluzione così la valuti con Carmen per capire quanto è impattante dal vostro lato.

**Perimetro e opportunità**
Registriamo che I Love Ric resta fuori dal perimetro (attivazione make-up ad Arese, in chiusura nelle prossime settimane). Resta invece interessante l'intuizione che il modulo di tracciamento prodotti, essendo agnostico, possa avere valore per BAT al di là dei pop-up — penso ai tabaccai: se vuoi sondare internamente un eventuale interesse, dal lato nostro è facilmente estendibile.

Ci aggiorniamo alla prossima e, come dicevi, ci sentiremo spesso da qui a settembre. Fammi sapere se ti torna tutto e se ho dimenticato qualche punto. Per qualsiasi cosa resto a disposizione!

A presto,
Carlo

---

## Note operative pre-invio

- **Lunghezza**: ~560 parole — densa ma motivata dal numero di topic della call (allineata alla follow-up del 28/5)
- **Stile §2.1 / email-drafting**: rispettato. Mai citato il fornitore per nome — sempre "team di sviluppo". POC presentata come "modello proprietario" (la frase in call "tecnologia interna di Soolutions" NON va riportata)
- **Verbi sostantivati / header tematici in grassetto** sul modello della follow-up Eye Cookies 28/5; nessuna numerazione 1./2./3.
- **TO**: Germano. **CC suggerito**: Massi (assente in call + serve la sua conferma sulla prioritizzazione). Valutare Andrea Pazienza per allineamento interno. Decisione finale CC a Carlo
- **Thread**: nuovo (recap call standalone; Germano si aspetta un'email dedicata)
- **Vincolo invio documenti**: RL + brief + architettura partono SOLO dopo validazione tecnica interna (in call il team ha chiesto di rivedere l'architettura prima dell'invio) → in mail reso come "facciamo un passaggio di validazione interno e poi te lo mando", senza esporre il vincolo
- **Riservatezze §13**: rispettate — nessuna esposizione finanziaria/strategica HeyAI, nessun nome fornitore
- **Riferimenti temporali**: calibrati sull'invio dell'8/6 ("call di mercoledì", "call con Carmen questa settimana")
