---
type: performance-review
date: 2026-06-01
subject: Carlo Sanvoisin
context: Call "Allineamento richieste tecniche" NOT — Carlo ↔ Carmen Compare (Data Analyst NOT), 50 min via Teams. Discovery tecnica Modulo Vendite di Operation Transformation + ingestion dati. Call 1-a-1 con controparte client-side operativa.
related_project: Operation Transformation
previous_review: "[[2026-05-20 - Carlo Performance — Call Futuritaly sito proprio]]"
source: trascrizione integrale upload "NOT _ Allineamento richieste tecniche.docx"
---

# Performance Carlo — Call NOT Allineamento richieste tecniche (1 giugno 2026)

> Coaching note basata sulla trascrizione integrale. Call diversa dalle ultime: non è una presentazione commerciale, è una **discovery tecnica 1-a-1** con [[Carmen Compare]] (Data Analyst NOT), controparte operativa interna al cliente. L'obiettivo doveva essere *estrarre* il processo dati reale e tenere le richieste dentro il perimetro €109K. Nota sensibile: la seconda metà della call ha toccato una **richiesta in area grigia** (aggirare la conferma SMS di BAT tramite numeri telefonici VoIP) — analizzata al §4 a livello di *gestione del rischio*, senza alcun dettaglio operativo, su scelta esplicita di Carlo di non lasciarne traccia procedurale.

## Punteggio sintetico

**Voto complessivo: 6,8/10.** Sotto il 7,2 del 20/5, ma su un tipo di call diverso (discovery, non pitch) e con un fattore aggravante strutturale: tempo parlato molto alto.

| Dimensione | Voto | Commento |
|---|---|---|
| Disciplina di scope / costo | **8,5/10** | Ha blindato la roadmap €109K, rifiutato sviluppi extra, reincanalato la richiesta bespoke nell'architettura esistente. Punto più alto della call |
| Discovery / ascolto attivo | **7,5/10** | Probing buono e insistente fino a capire il bisogno reale di Carmen |
| Gestione del rischio (area grigia) | **7/10** | Istinto corretto (no integrazione in piattaforma, no recap, no registrazione), ma esecuzione troppo lunga e co-progettata |
| Tempo parlato | **4,5/10** | ~65-70% Carlo in una call dove doveva estrarre, non spiegare |
| Confidenzialità §13 | **6/10** | Federico/Simone nominati per nome a controparte client-side |
| Integrità del deliverable | **6/10** | Ha visto il rischio "dati randomici → modello inutile" e l'ha citato, ma non l'ha fatto pesare |

**Sintesi.** Ottima disciplina commerciale (pattern invertito rispetto alla sovraproposta del 20/5). La gestione della richiesta grigia ha l'istinto giusto ma una falla esecutiva: ha co-progettato la workaround prima di chiuderla. Tempo parlato il vero tallone della call.

---

## 1. Tempo parlato — regressione

Stima dalla trascrizione: **~65-70% Carlo · ~30-35% Carmen**. Carmen risponde spesso a monosillabi ("Sì. Sì. Certo."), Carlo costruisce paragrafi lunghi.

Trend recente:
- 19/5 Angelini con FuturItaly — 60-65%
- 20/5 Futuritaly mockup — 50-55%
- **1/6 NOT discovery — 65-70%**

**Aggravante di contesto**: era una **discovery 1-a-1**. Qui il rapporto andava *invertito* — Carmen è la fonte del processo dati reale, Carlo doveva farla parlare. Invece in diversi punti ha fatto la domanda giusta e poi ha risposto da solo (es. 14:37 "spiegami quale sarebbe la tua esigenza" → seguito da un proprio monologo di reframing prima che Carmen completasse). Il dato 50-55% del 20/5 era favorito dalla divisione di ruolo con Michele; da solo, senza quel contrappeso, Carlo torna a dominare.

**Regola**: in call di discovery, regola del 30/70 a favore dell'altro. Dopo ogni domanda, **silenzio per 5 secondi** prima di riprendere.

---

## 2. Tre punti forti

### 2.1 Anti-overproposal — pattern invertito vs 20/5

Il 20/5 il pattern bocciato era la *sovraproposta tecnologica precoce* (proporre AI/automazioni +3 livelli sopra il cliente). **Qui ha fatto l'esatto opposto, e bene.** Di fronte a una richiesta bespoke di Carmen ha ancorato ripetutamente alla roadmap:
- *"io voglio salvare il processo che abbiamo pensato, non voglio andare a fare un ulteriore sviluppo"* (16:40)
- *"manteniamo la roadmap che ci siamo dati"* (44:09)
- *"non mi dicono che questi sono altri 5.000 € per dire"* (44:09)
- *"si può trovare un trade-off fra una roba che va fuori dai piani e una che era già prevista"* (44:09)

Difesa del margine e dello scope da PM senior. **Questo è il segnale che la lezione del 20/5 è stata interiorizzata**: la tecnologia in più non si butta dentro, si tiene come opzione modulare. Eccellente.

### 2.2 Reframing della richiesta off-piano dentro il perimetro

Carmen porta un'esigenza che sembrava un binario nuovo (un'utenza che inserisce vendite da remoto). Carlo non la rifiuta e non la abbraccia: la **reincanala** nell'architettura esistente — *"non è un processo diverso, sono sempre gli stessi dati, solo che invece di essere registrati nel pop-up vengono registrati dall'ufficio NOT"* (44:09). Trasforma un'eccezione potenzialmente costosa in una variante della stessa utenza admin. Mossa di scope management pulita.

### 2.3 Istinto sul rischio legale (parte buona)

Sulla richiesta grigia (§4) l'istinto difensivo c'è ed è rapido: nomina il rischio in chiaro (*"stai a fa una cosa che è nel grigio"*, *"è un rischio che sta correndo anche la mia società e la società degli sviluppatori"*), **rifiuta di integrare la funzionalità nella piattaforma**, decide di non mandare recap e di non conservare la registrazione. La direzione è giusta.

---

## 3. Tre punti da correggere (oltre al tempo parlato)

### 3.1 Integrità del deliverable lasciata cadere

Carlo stesso osserva che il riempimento randomico dei dati statistici *"mi sa che non funzionerà molto"* per il modello predittivo (30:40). **È un'intuizione corretta e importante**: dati fabbricati avvelenano proprio il modello predittivo che il cliente paga. Ma l'ha detta di sfuggita e ha proseguito a disegnare la feature. Andava messa sul tavolo con forza: *"attenzione, se inseriamo dati casuali degradiamo il deliverable che ci avete commissionato — decidiamo consapevolmente questo trade-off"*. Un PM protegge il valore di ciò che consegna, non solo il perimetro di costo.

### 3.2 §13 — nomi del team esposti a controparte client-side

Carlo nomina **Federico e Simone** più volte direttamente a Carmen (*"dirò a Federico e Simone"*, *"poi Federico e Simone mi ammazzano"*). Carmen è cliente (NOT/NoLoop). La regola §13 vuole *"il nostro team / team di sviluppo"*. Attenuante reale: Carlo la sta proprio collegando a loro per l'ingestion, quindi si conosceranno. Ma resta buona prassi tenere **"Soolutions" come azienda fuori dalla conversazione** e usare i nomi solo quando l'interazione operativa è inevitabile. Punto minore ma ricorrente, da non lasciar scivolare verso il naming del fornitore.

### 3.3 Decisioni lasciate troppo aperte

Tante chiusure tipo *"ne parlo col team, ti faccio sapere, non voglio fare promesse"*. Corretto non impegnare effort dev unilateralmente, ma la call si chiude con molti "verifico" e nessuna data di ritorno a Carmen sulla fattibilità. Sarebbe bastato: *"ti faccio sapere la fattibilità entro mercoledì sera dopo aver sentito il team"*.

---

## 4. La gestione della richiesta in area grigia — lezione centrale

> Analisi a livello di **gestione del rischio**, non procedurale. Nessun how-to è riportato qui, per scelta.

**Il fatto (sintetico)**: a metà call Carmen chiede se esiste un modo per aggirare un meccanismo di conferma di BAT che, in assenza di connettività nei centri commerciali, abbassa il tasso di registrazioni valide. La richiesta è esplicitamente in area grigia.

**Cosa Carlo ha fatto bene**:
1. Ha **nominato il grigio** invece di farci finta di niente.
2. Ha **rifiutato di costruire la funzionalità dentro la piattaforma** — la distinzione architetturale corretta: un conto è creare un'utenza admin legittima, un altro è incorporare nel prodotto uno strumento il cui unico scopo è l'aggiramento.
3. Ha protetto le società (HeyAI + sviluppatori) come prima preoccupazione.
4. Ha deciso **no recap, no registrazione**.

**La falla esecutiva — il punto di coaching**: prima di arrivare al "no, non lo metto in piattaforma", Carlo ha **co-progettato la workaround ad alta voce** (ha spiegato dove si trova lo strumento, l'ordine di grandezza del costo, e la meccanica dell'inserimento manuale). Poi ha cercato di salvarsi con la distinzione *"io ti ho solo dato un consiglio, il fornitore non sa cosa ci fai"*.

Questa distinzione è **giuridicamente sottile e psicologicamente fragile**: se dettagli il come, il dove e il quanto, hai facilitato — l'etichetta "consiglio" non sterilizza la sostanza. E il fatto stesso di voler cancellare la registrazione è il segnale che una parte di lui sapeva di essere oltre la linea.

**La mossa corretta** sarebbe stata più corta e più netta, ai primi 30 secondi:
> *"Carmen, questa è una cosa che non possiamo né costruire né supportare, e ti sconsiglio di percorrerla: ti espone tu e di riflesso noi. Restiamo su ciò che possiamo fare in chiaro."*

Stop. Niente brainstorming della soluzione, niente nomi di strumenti, niente prezzi. **L'istinto di non lasciare traccia è giusto; quello di non co-progettare lo è di più** — perché se non co-progetti, non hai nulla da nascondere.

**Nota relazionale**: il rifiuto netto non rovina il rapporto con Carmen. Anzi — un fornitore che dice "qui mi fermo per proteggere anche te" costruisce più fiducia di uno che entra nel grigio insieme al cliente. Carmen ha anche offerto lei stessa di non registrare: segno che si aspettava il confine, non lo temeva.

---

## 5. Confronto pattern con le note precedenti

| Pattern | Note precedenti | 1/6 |
|---|---|---|
| Sovraproposta tecnologica | Bocciato 8/5 e 20/5 | **Invertito** — disciplina di scope esemplare |
| Tempo parlato | 50-55% (20/5, con Michele) | **65-70%** — regredito, ma da solo e in discovery |
| Accoglienza / non difensività | Migliorata 20/5 | Mantenuta — con Carmen tono cooperativo |
| Gestione tema sensibile/rischio | n/d | **Nuovo** — istinto giusto, esecuzione lunga |
| Protezione del deliverable | n/d | **Nuovo gap** — visto il rischio modello, non l'ha fatto pesare |

La buona notizia: il pattern più grave delle ultime call (sovraproposta) è sotto controllo. I due fronti aperti ora sono **tempo parlato in setting 1-a-1** e **fermezza rapida sui confini**.

---

## 6. Lezioni operative

**Per le call di discovery 1-a-1**
- Regola 30/70 a favore dell'interlocutore. Dopo ogni domanda, 5 secondi di silenzio.
- Chiudere con una **data di ritorno** concreta, non solo "ti faccio sapere".

**Quando arriva una richiesta in area grigia** (nuova regola da consolidare):
1. Riconoscila subito ad alta voce.
2. **Fermati lì.** Non proporre, non quotare, non nominare strumenti, non spiegare il come. Co-progettare = facilitare.
3. Dì il no in modo protettivo per il cliente ("ti espone, ti sconsiglio").
4. Riporta la conversazione su ciò che è fattibile in chiaro.
5. Se senti il bisogno di "non registrare", è il segnale che sei già andato troppo oltre nel punto 2.

**Sempre**
- Proteggi il deliverable, non solo il costo: se una scorciatoia del cliente degrada ciò che HeyAI consegna (es. qualità dati → modello), dillo esplicitamente.
- Tieni "Soolutions" fuori dalle conversazioni client-side; usa i nomi del team solo dove l'interazione operativa è inevitabile.

---

## 7. Sintesi

**Carlo è solido sul fronte commerciale.** La disciplina di scope/costo di questa call è il miglior segnale che le lezioni recenti sono entrate: la tecnologia in più non si regala, lo scope si difende, la roadmap si tiene.

**Due fronti aperti.** (1) Il tempo parlato torna alto appena è da solo e in discovery — va invertito il rapporto quando l'obiettivo è estrarre. (2) Sui confini etico-legali l'istinto è corretto ma l'esecuzione è lunga: la fermezza deve arrivare nei primi 30 secondi, prima di co-progettare. La regola da incidere: *riconosci, fermati, proteggi il cliente col no, torna sul fattibile.*

**Relazione con Carmen**: cooperativa e di fiducia. Confermata referente per l'ingestion dati. Asset operativo per Operation Transformation.

---

*Coaching note prodotta l'1/6/2026. Versione "completa" su scelta esplicita di Carlo (include l'analisi della gestione della richiesta grigia, esclude ogni how-to operativo). Da rileggere prima della prossima call di discovery cliente.*

---

## Appendice 1/6 — Trascrizione: passaggi critici dal punto di vista del parlato

> Estratti verbatim dalla trascrizione, a supporto del §1 (tempo parlato) e §4. Timestamp dalla registrazione. Il dettaglio operativo della richiesta grigia è omesso per scelta.

**A. Domanda chiusa + auto-risposta + monologo fondativo (7:00→9:21)**
- Carmen (6:58): *"Inserimento di una vendita."*
- Carlo (7:00): *"Ma tu dici quello al pop up? Ma di base è quello che stiamo facendo col progetto, cioè?"* → e senza attendere sviluppa: *"...quello che noi vorremmo fare è un unico Form che funziona sia quando siete on-line che quando siete off-line... quando io scansiono il prodotto con la mia applicazione lui già sa chi sono io, in che centro commerciale sono..."* (monologo ~1,5 min)
- Carmen, in tutto il blocco: *"Sì." … "Sì."*
→ *Parlato*: la domanda di discovery è autorisposta. Carmen ridotta a backchannel.

**B. Monologo "Excel unico" (17:56→19:21)**
- Carmen (17:41): *"Ok."*
- Carlo: *"proviamo a far compilare un unico Excel ai ragazzi. Questo Excel prima di essere trasformato in risposta dei questionari passa da te... Questa soluzione qui segue il nostro processo e potrebbe essere una prima implementazione. Il passo successivo sarebbe cambiare l'excel con l'applicazione vera e propria... Perché tu potresti doverli modificare, mi sbaglio?"* (monologo ~1,5 min)
- Carmen (19:21): *"In realtà la prima soluzione che dicevi calca abbastanza quello che faccio io adesso..."*
→ *Parlato*: spiega per 90 secondi un processo che Carmen poi conferma essere già il suo. L'informazione era a portata di domanda, prima del monologo.

**C. I tre step in un unico turno (25:57→27:05)**
- Carlo: *"...questo è il secondo passo. Terzo passo, tu comunque puoi modificare i dati perché tu sei admin totale con super power... dove c'è scritto due ci metti tre, dove c'è scritto 20 € ci metti 30 €... premi invio e a quel punto con il robot le informazioni che interessano a part vanno su part, quelle che interessano a BAT vanno su BAT."*
- Carmen: *"Sì."*
→ *Parlato*: primo/secondo/terzo passo concatenati senza pause di verifica. Nessuno spazio per Carmen di reagire al singolo step.

**D. "Sto pensando a voce alta" — e Carmen lo riporta in carreggiata (28:47→29:25)**
- Carlo (28:47): *"Sto cercando di eliminare la tua riconciliazione, sto pensando proprio a voce alta..."*
- Carmen (29:16): *"Però scusami... la questione della riconciliazione, in quello che ti volevo chiedere oggi, secondo me non c'entra."*
- Carlo (29:25): *"No, lo so, lo so, no... Lo so, lo so, lo so, quello è a parte..."*
→ *Parlato*: Carlo ammette lui stesso il pensare-a-voce-alta; è la **cliente** a doverlo riportare sul tema. Segnale netto di monologo in tangente.

**E. Il punto critico buttato lì (30:37→31:04)**
- Carmen: *"è esattamente quello che faccio io, cioè io mischio i dati continuamente."*
- Carlo: *"Ecco. Ma questo modello predittivo mi sa che non funzionerà molto."*
- Carmen: *"No, va bene."* — Carlo: *"OK, no, però hai capito cosa intendo, no?"* e prosegue.
→ *Parlato/sostanza*: l'unico avvertimento che protegge il deliverable (dati casuali → modello inutile) detto in mezza frase e abbandonato. Andava fermato il flusso e fatto pesare.

**F. Area grigia — co-progettazione lunga invece di stop netto (≈37:00→42:00, dettaglio omesso)**
- Carlo (40:07): *"...noi ti andiamo semplicemente a costruire la tua utenza e tu potresti essere un venditore admin... Noi ti abbiamo creato un'utenza che funziona come tutte le altre. Al massimo c'ha dei permessi maggiori... non c'è niente a livello di architettura che sia sbagliato."*
- Carlo (41:01): *"se noi semplicemente ti diamo il consiglio su come [dettaglio operativo omesso] e poi ce li aggiungi tu a mano... la mia piattaforma non ti può supportare nel fare questa cosa in maniera cosciente."*
- Carlo (≈42:00): *"Questa registrazione la cancello, sì." … "mi prendo il transcript e poi cancello da tutti i registri del mondo."*
→ *Parlato*: la chiusura corretta (no integrazione in piattaforma) arriva dopo minuti di ragionamento a voce alta sulla workaround. Da parlato e da rischio, andava chiusa in 30 secondi senza co-progettare.

---

*Appendice trascrizione aggiunta 1/6/2026 (richiesta Carlo: passaggi critici lato parlato).*
