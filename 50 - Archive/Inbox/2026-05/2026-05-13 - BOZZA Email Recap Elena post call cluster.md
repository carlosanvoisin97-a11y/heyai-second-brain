---
type: inbox
status: sent
created: 2026-05-13
sent: 2026-05-13
client: Angelini Academy (via FuturItaly)
projects: [_Angelini Academy]
stakeholders: [Elena Chiti]
parent_meeting: 2026-05-13 call Carlo↔Elena cluster destinatari
---

# 📧 Email recap Elena — INVIATA 13/5/2026 sera

> **Stato**: ✅ INVIATA come reply al thread "scaletta presentazione + mockup" dell'11/5. Versione finale di Carlo, non Claude. Le bozze precedenti (v1-v5) sono storico di iterazione, qui sotto la versione definitiva + lezioni di stile estratte per CLAUDE.md §2.1.

---

## v11 — Versione finale Carlo 14/5 con frase customer journey ri-aggiunta

Ciao Elena,
innanzitutto, grazie mille per i materiali che mi hai condiviso, saranno molto utili! Rispetto alle tue osservazioni ti rispondo di seguito per punti:

* Mockup: ti confermo che si tratta di un materiale puramente illustrativo, le sezioni in sequenza sono parte del test e non saranno così nella versione successiva. Approfitto per segnalarti che abbiamo implementato una nuova funzionalità — ricaricando la pagina trovi una landing in cui l'utente sceglie un personaggio (logica gamificata stile videogioco) e riceve in base alla scelta una sequenza di contenuti dedicata (ora è solo un redirect ad una sezione della home, poi diventerà un vero e proprio percorso). Tra le possibilità concrete che apre — contenuti differenziati per cluster, raccolta dati comportamentali utente fin dal primo click, tone of voice e copy calibrati sul profilo selezionato, e altre che possiamo esplorare insieme. Si inserisce nei customer journey che stiamo articolando nell'analisi e nella presentazione.

* Laboratorio editoriale: grazie per l'input! Ti confermo che abbiamo già considerato questo tema e lo abbiamo inserito nell'analisi che stiamo costruendo. In aggiunta, ci piacerebbe proporre una funzionalità complementare sui white paper e sulle pubblicazioni del sito — oltre alla possibilità per l'utente di cliccare sul materiale per ottenere il recap o la video pillola; lato cliente, pensavamo ad un panel visibile solo agli admin dal quale si potrà trasformare la ricerca scientifica in un post LinkedIn pronto da pubblicare (immagine + copy auto-generati con un click, eventualmente anche flusso automatico di pubblicazione su LinkedIn dietro conferma dell'admin)

* Touchpoint lunedì: alle 11:30 purtroppo non ho disponibilità, potrei alle 12:30 oppure dopo le 15 — fammi sapere quale orario funziona meglio per voi e fisso la call!

Per qualsiasi cosa resto a disposizione.

A presto,
Carlo

---

### Note di redazione v11

**Frase customer journey scelta**: "Si inserisce nei customer journey che stiamo articolando nell'analisi e nella presentazione."

**Criteri**:
- Verbo "inserisce" (non "dedicato/a" già usato sopra)
- "articolando" (non "sequenza/percorso" già usati)
- "customer journey" come termine richiesto da Carlo
- "analisi e presentazione" come pattern §2.1 standard
- Una sola riga, recupera l'aggancio strategico perso in v10

**Compressioni opzionali proposte ma non applicate** (decisione lasciata a Carlo):
- Bullet 1 parentesi: "(per ora indirizza ad una sezione della home, evolverà nel percorso completo)" -4 parole, elimina "vero e proprio" enfatico
- Bullet 2 parentesi LinkedIn: "(immagine + copy auto-generati, eventualmente con pubblicazione automatica dietro conferma admin)" — toglie "su LinkedIn" duplicato, "con un click" implicito, "anche flusso automatico di" giro

**Nuova regola di stile da propagare in skill email-drafting (16ª)**:
- **MAI ripetere lo stesso concetto con sinonimi diversi nello stesso bullet** (regola estesa dal pattern "MAI ripetizione di parole vicine"). Esempio: "sequenza di sezioni" + "sequenza di contenuti dedicata" + "vero e proprio percorso" + "customer journey" + "personaggio" — sono tutti modi di dire "esperienza utente strutturata". Quando si rivede una bozza, verificare che ogni concetto sia espresso una volta sola con la forma più precisa, non parafrasato.

---

## v10 — Versione precedente Carlo 14/5 (pre frase customer journey) [STORICO]

Ciao Elena,
innanzitutto, grazie mille per i materiali che mi hai condiviso, saranno molto utili! Rispetto alle tue osservazioni ti rispondo di seguito per punti:

* Mockup: ti confermo che si tratta di un materiale puramente illustrativo, le sezioni in sequenza sono parte del test e non saranno così nella versione successiva. Approfitto per segnalarti che abbiamo implementato una nuova funzionalità — ricaricando la pagina trovi una landing in cui l'utente sceglie un personaggio (logica gamificata stile videogioco) e riceve in base alla scelta una sequenza di contenuti dedicata (ora è solo un redirect ad una sezione della home, poi diventerà un vero e proprio percorso). Tra le possibilità concrete che apre — contenuti differenziati per cluster, raccolta dati comportamentali utente fin dal primo click, tone of voice e copy calibrati sul profilo selezionato, e altre che possiamo esplorare insieme.

* Laboratorio editoriale: grazie per l'input! Ti confermo che abbiamo già considerato questo tema e lo abbiamo inserito nell'analisi che stiamo costruendo. In aggiunta, ci piacerebbe proporre una funzionalità complementare sui white paper e sulle pubblicazioni del sito — oltre alla possibilità per l'utente di cliccare sul materiale per ottenere il recap o la video pillola; lato cliente, pensavamo ad un panel visibile solo agli admin dal quale si potrà trasformare la ricerca scientifica in un post LinkedIn pronto da pubblicare (immagine + copy auto-generati con un click, eventualmente anche flusso automatico di pubblicazione su LinkedIn dietro conferma dell'admin)

* Touchpoint lunedì: alle 11:30 purtroppo non ho disponibilità, potrei alle 12:30 oppure dopo le 15 — fammi sapere quale orario funziona meglio per voi e fisso la call!

Per qualsiasi cosa resto a disposizione.

A presto,
Carlo

---

### Controllo qualità v10 (14/5 sera)

**🔴 1 refuso corretto in v10 vs versione Carlo originale**: "pubbliare" → "pubblicare".

**🟡 Considerazioni segnalate a Carlo, non bloccanti**:
1. Architettura LinkedIn cambiata da "strumento separato dal sito" (v9) a "panel admin del CMS sito" (v10). Effetto UX equivalente, scelta architetturale diversa. Task aperto in scheda Angelini aggiornato.
2. "Flusso automatico di pubblicazione su LinkedIn" richiede LinkedIn Marketing API write access (OAuth + approval LinkedIn for Developers). Fattibile ma con due diligence. Alternativa: integrazione Buffer/Hootsuite (più rapida) o copy+redirect manuale (zero API). Da chiedere check Michele prima del touchpoint 18/5.
3. Persa la frase "in parallelo all'analisi strategica e alla costruzione della presentazione" → bullet mockup scivola dal frame "strategia organica" al frame "feature singola". Accettabile, recuperabile al touchpoint dal vivo.
4. Trasparenza "(ora è solo un redirect)" coerente col rapporto Elena ma con implicita promessa di delivery. Da seguire internamente per non scoprirsi al Pitch 31/5.

**🟢 Verifiche superate**:
- Nessuna violazione riservatezze §13 (no fornitori esterni nominati, no numeri economici, no flusso fatture, no esposizione finanziaria).
- Pattern skill email-drafting rispettati: apertura due frasi, "Ti confermo che..." per risposta diretta, "grazie per l'input!" per validazione, chiusura asciutta, varianza lessicale, no "presidiare", no ripetizioni vicine, lista aperta "e altre che possiamo esplorare insieme".
- Coerenza framework Pitch: personaggio gamificato → asse engagement attivo; panel admin LinkedIn → 7ª iniziativa satellite Strategia Website 2026; video pillole + recap → Engaged Research Lab + AI-3 Lab Translator già articolato nel framework.
- Paternità input: "oltre alla possibilità per l'utente... lato cliente pensavamo a" leggibile come "Elena dice + Carlo aggiunge". Un pelo ambiguo ma accettabile.

---

## BOZZA v9 — Risposta Carlo a Elena 14/5 (post quinta revisione Carlo — ragionamento marketing/architettura) [STORICO]

Ciao Elena, innanzitutto grazie mille per i materiali che mi hai condiviso, saranno molto utili. Rispetto alle tue osservazioni ti rispondo di seguito per punti.

* Mockup: ti confermo che si tratta solamente di un materiale illustrativo, le sezioni in sequenza sono parte del test e non saranno così nella realtà. Approfitto per segnalarti che abbiamo implementato una nuova funzionalità — ricaricando la pagina trovi una landing in cui l'utente sceglie un personaggio (logica gamificata stile videogioco) e riceve in base alla scelta una sequenza di contenuti dedicata. Tra le possibilità concrete che apre — contenuti differenziati per cluster già dalla landing, raccolta dati comportamentali fin dal primo click, tone of voice e copy calibrati sul profilo selezionato, e altre che possiamo esplorare insieme. Si lega direttamente ai customer journey dedicati che stavamo pensando per i diversi target ed è parte del lavoro che portiamo avanti in parallelo all'analisi strategica e alla costruzione della presentazione, in coerenza con queste

* Laboratorio editoriale: grazie per l'input — ti confermo che abbiamo già considerato questo tema e lo abbiamo inserito nell'analisi che stiamo costruendo. La tua idea delle video pillole del ricercatore arricchisce ulteriormente la sezione: immaginiamo per l'utente esterno una libreria di white paper con video pillola del ricercatore + recap testuale a corredo di ogni pubblicazione. A questa esperienza vorremmo affiancare uno strumento dedicato al team Angelini per amplificare il lavoro di R&D sui canali social — una pipeline che trasforma ogni paper in un post LinkedIn pronto da pubblicare (immagine + copy auto-generati), separata dal sito istituzionale per non appesantire il customer journey esterno

* Touchpoint lunedì 18/5: alle 11:30 purtroppo non ho disponibilità, potrei alle 12:30 oppure dopo le 15 — fammi sapere quale orario funziona meglio

Per qualsiasi cosa resto a disposizione!

A presto,
Carlo

---

### Note di redazione v9 (decisione architettura LinkedIn automation + paternità input)

**Ragionamento marketing/architettura sulla generazione post LinkedIn** (consolidamento Carlo 14/5):

- L'idea originale v7-v8 era "lato utente click recap, lato cliente click post LinkedIn" — entrambi DAL SITO. Carlo ha sollevato dubbio sull'efficienza.
- Tre ragioni per cui NON deve avvenire dal sito: (1) sito = ottimizzato per utenza esterna, mettere workflow team interno è scope creep UX confusa; (2) workflow operativo team LinkedIn è altrove (LinkedIn nativo, Buffer/Hootsuite, Teams), il passaggio dal sito è 6-7 step contro abituali 2-3; (3) separare il tool ci permette di vendere asset distinto in più nel Pitch (7ª iniziativa satellite della Strategia Website 2026).
- **Architetture alternative considerate**: admin panel CMS sito / mini-app standalone Content Studio / estensione browser LinkedIn / bot Teams-Slack. Per il Pitch finale 31/5 propensione **CMS admin panel + bot Teams** come combinazione (Angelini è Microsoft 365). Decisione definitiva architetturale spostata al touchpoint 18/5.
- **Per l'email a Elena** basta dichiarare "strumento dedicato separato dal sito" con rationale "per non appesantire il customer journey esterno". Dettagli architetturali al touchpoint.

**Distinzione paternità input nel bullet laboratorio editoriale**:

- Errore v8: "ci piacerebbe proporre due funzionalità complementari" faceva sembrare entrambe nostre, scavalcando l'input Elena.
- Correzione v9: separare con chiarezza (a) idea Elena → "La tua idea delle video pillole del ricercatore arricchisce ulteriormente la sezione" + descrizione di come la traduciamo sul sito; (b) aggiunta nostra → "A questa esperienza vorremmo affiancare uno strumento dedicato al team Angelini" come pivot chiaro su contributo separato.
- **Pattern stilistico nuovo (15ª regola da propagare nella skill)**: quando si risponde a una proposta del destinatario riconoscendo e arricchendo, **separare esplicitamente** la paternità nel testo. NON "ci piacerebbe proporre X e Y" (sembra che siano entrambe nostre). SÌ "la tua idea X arricchisce... a questa vorremmo affiancare Y".

**Architettura editoriale opzione A vs B**:

- **Opzione A (scelta)**: integrazione paper + video pillola + recap nella stessa unità editoriale del sito (libreria con elementi a corredo).
- **Opzione B alternativa**: video pillole in sezione separata dai paper, con cross-link. Sganciamento tematico, perde l'accoppiata paper+volto ricercatore che è il valore di Elena.
- Decisione email: opzione A. Decisione finale architetturale: touchpoint 18/5.

---

## BOZZA v8 — Risposta Carlo a Elena 14/5 (post quarta revisione Carlo) [STORICO]

Ciao Elena, innanzitutto grazie mille per i materiali che mi hai condiviso, saranno molto utili. Rispetto alle tue osservazioni ti rispondo di seguito per punti.

* Mockup: ti confermo che si tratta solamente di un materiale illustrativo, le sezioni in sequenza sono parte del test e non saranno così nella realtà. Approfitto per segnalarti che abbiamo implementato una nuova funzionalità — ricaricando la pagina trovi una landing in cui l'utente sceglie un personaggio (logica gamificata stile videogioco) e riceve in base alla scelta una sequenza di contenuti dedicata. Tra le possibilità concrete che apre — contenuti differenziati per cluster già dalla landing, raccolta dati comportamentali fin dal primo click, tone of voice e copy calibrati sul profilo selezionato, e altre che possiamo esplorare insieme. Si lega direttamente ai customer journey dedicati che stavamo pensando per i diversi target ed è parte del lavoro che portiamo avanti in parallelo all'analisi strategica e alla costruzione della presentazione, in coerenza con queste

* Laboratorio editoriale: grazie per l'input — ti confermo che abbiamo già considerato questo tema e lo abbiamo inserito nell'analisi che stiamo costruendo. In aggiunta, ci piacerebbe proporre due funzionalità complementari sui white paper e sulle pubblicazioni del sito — lato utente, click sul materiale per ottenere il recap o la video pillola; lato cliente, click per trasformare la pubblicazione in un post LinkedIn pronto da pubblicare (immagine + copy auto-generati)

* Touchpoint lunedì 18/5: alle 11:30 purtroppo non ho disponibilità, potrei alle 12:30 oppure dopo le 15 — fammi sapere quale orario funziona meglio

Per qualsiasi cosa resto a disposizione!

A presto,
Carlo

---

### Note di redazione v8 (post quarta revisione Carlo 14/5)

**Nuove regole di stile emerse — da propagare in skill `email-drafting`**:

1. **"Grazie mille" sempre in lettere**, NON "Grazie 1000" in cifre. Numeri sotto 100 (e in particolare nelle espressioni colloquiali di ringraziamento o quantità) vanno scritti in lettere.
2. **MAI ripetizione di parole vicine** (regola assoluta): nel mio v7 avevo "non ho slot liberi" + "fammi sapere quale slot funziona meglio" — doppia "slot" inaccettabile. Sostituire con sinonimi/varianti: "disponibilità" + "orario", oppure "orario" + "fascia", etc. Vale anche per verbi e altre parole-chiave. **Regola operativa**: ogni volta che scrivo una bozza, ri-leggere e segnare le ripetizioni di parole nello stesso paragrafo / bullet adiacenti.
3. **Rispondere DIRETTAMENTE al dubbio del destinatario prima di estendere**: Elena aveva chiesto "le sezioni in sequenza sono perché è una prova? non saranno così nella realtà, corretto?". La mia v7 diceva "si tratta di un materiale puramente illustrativo" — risposta indiretta. La v8 dice "ti confermo che si tratta solamente di un materiale illustrativo, le sezioni in sequenza sono parte del test e non saranno così nella realtà" — risposta diretta sulla sua frase letterale. Pattern: "Ti confermo che..." apre la risposta diretta a un dubbio formulato.
4. **"Grazie per l'input — ti confermo che abbiamo già considerato..."** come pattern di apertura per validare una proposta del destinatario che combacia col nostro pensiero. Sequenza: ringraziamento → conferma allineamento immediato → estensione/proposta aggiuntiva.
5. **Concretezza delle possibilità**: quando elenco "cosa apre una feature", evitare formulazioni astratte ("esperienza personalizzata", "raccolta dati"). Usare descrizioni operative: "contenuti differenziati per cluster già dalla landing", "raccolta dati comportamentali fin dal primo click", "tone of voice e copy calibrati sul profilo selezionato".
6. **Specificare sempre l'oggetto delle funzionalità**: non "due funzionalità complementari sulle pubblicazioni" generico — meglio "due funzionalità complementari sui white paper e sulle pubblicazioni del sito" che ancora il discorso a oggetti concreti che il destinatario riconosce.
7. **Agganciare le proposte tecniche al framework strategico esistente**: "Si lega direttamente ai customer journey dedicati che stavamo pensando per i diversi target". Mostra che la nuova feature non è un'idea isolata ma nasce dalla strategia in corso. Rinforza il senso di "tutto è pensato insieme".

---

### Note di redazione v7 (post terza revisione Carlo 14/5)

**Pattern di stile NUOVI emersi dalla revisione Carlo** (da propagare a CLAUDE.md §2.1):

1. **"Grazie 1000"** come ringraziamento caloroso — pattern Carlo standard, sostituisce formule formali. Da usare quando l'altro parte ha mandato materiali/aiuto concreto.

2. **Apertura strutturata in due frasi**: prima ringraziamento → secondo frame di risposta. Esempio: "Ciao Elena, innanzitutto grazie 1000 per i materiali... Rispetto alle tue osservazioni ti rispondo di seguito per punti." Pattern molto più caloroso del semplice "Ciao Elena, ti rispondo punto per punto."

3. **"Approfitto della tua osservazione per..."** sostituisce **"Cogliendo la palla al balzo..."** che è troppo colloquiale → da evitare. "Approfitto della... per segnalarti che..." è il pattern PM Carlo.

4. **"Tra le direzioni che apre..."** sostituisce **"Apre tre direzioni —..."** quando si elencano possibilità → NON chiudere mai una lista in modo definitivo se ci sono "altre" non elencate. Aggiungere "...e altre che possiamo esplorare insieme" o simile.

5. **"Non riesco a presidiarlo"** è verbo NON di Carlo → da evitare. Usare formulazione naturale "purtroppo non ho slot liberi", "non riesco" semplice.

6. **Brand book / ringraziamenti per materiali** vanno nell'apertura, NON nei bullet. I bullet sono per risposte tematiche puntuali. Il ringraziamento è frame relazionale, non tema.

7. **Quando si parla di funzionalità con dimensione doppia (utente vs cliente)**: esplicitare le 2 prospettive simmetricamente. Esempio: "lato utente click X; lato cliente click Y". Pattern usato dal cliente Angelini, da preservare.

8. **"In parallelo all'analisi strategica e alla costruzione della presentazione, in coerenza con queste"**: pattern Carlo per dichiarare che un test non è isolato ma parte di un workflow coerente. Da usare quando si presenta un'iniziativa esplorativa.

**Note specifiche v7**:
- Brand book menzionato solo nell'apertura ("grazie 1000 per i materiali") — non più bullet separato (era nel v6).
- Bullet ridotti da 4 a 3 (mockup, laboratorio editoriale, touchpoint).
- "Video pillole dei ricercatori" → rinominato "Laboratorio editoriale" perché Elena parlava di un tema più ampio, non solo della singola feature video.
- Le 2 funzionalità (recap utente + LinkedIn cliente) presentate come complementari, non gerarchiche.
- Punto su "siamo allineati" rafforzato: "tema già inserito nell'analisi che stiamo costruendo" — dichiarazione di continuità sul lavoro HeyAI.
- Rimosso riferimento a "Strategia Website 2026" come nome documento (era ridondante e troppo interno).
- Rimosso riferimento a "asset di continuità con il lavoro FuturItaly" sul deliverable febbraio: assorbito nel "grazie 1000 per i materiali" iniziale (Carlo voleva massima compressione).

---

## Versione inviata (Carlo, 13/5/2026 sera)

Ciao Elena,

solo un veloce recap rispetto all'allineamento di ieri per tenere il punto sui vari task aperti.

Decisioni condivise

* Divisione dei cluster su due assi — priorità (primaria / secondaria) e modalità di engagement (interagiscono attivamente tramite percorso dedicato, funzionalità, risorse collegate, acquisti online / interagiscono passivamente, il sito ha più una funzione "vetrina")
* Riprendere e integrare nel Pitch la proposta relativa all'engagement con aziende del territorio

Prossimi passi

* Condivisione di eventuali feedback sulla bozza di framework strategico proposto nell'email precedente e sul mockup illustrativo
* Condivisione con il Team HeyAi del brand book Angelini 2024 (aggiungo il punto in quanto sarebbe molto utile per l'analisi)
* Conferma del touchpoint per venerdì pomeriggio

Per qualsiasi cosa resto a disposizione!

A presto,
Carlo

---

## Lezioni di stile dalla versione finale Carlo (da propagare in CLAUDE.md §2.1)

**Pattern stilistici emersi dalla versione che Carlo ha effettivamente inviato (13/5 sera)**, mancanti nelle mie iterazioni v1-v5:

1. **Verbi sostantivati nei bullet** (non in prima persona, non in seconda persona, ma forma impersonale che descrive il task):
   - "Divisione dei cluster..." (non "chiudo l'analisi", non "abbiamo deciso di dividere")
   - "Riprendere e integrare..." (infinito, non "riprendiamo")
   - "Condivisione di eventuali feedback..." (non "aspetto il tuo feedback")
   - "Conferma del touchpoint..." (non "confermami il touchpoint")
   - Forma agency-PM standard, asciutta, neutra sull'agente, focalizzata sull'azione.

2. **Niente owner tra parentesi nei bullet**: la natura del task suggerisce l'owner. Aggiungere "(lato mio)" / "(Team FuturItaly)" è burocratico e ridondante.

3. **Frase di transizione "per tenere il punto sui vari task aperti"** — pattern PM molto stile Carlo, più pulito di "battere i tempi" / "traghettare le date" / "mantenere la timeline". Generalizzabile come pattern di apertura recap.

4. **Apertura senza punto esclamativo iniziale**: "Ciao Elena," + virgola + frase asciutta. Il punto esclamativo va riservato alla chiusura.

5. **Rationale tra parentesi incidentale** (conferma §2.1 pattern): "(aggiungo il punto in quanto sarebbe molto utile per l'analisi)" — rationale brevi incastrati nella frase, non come paragrafo a sé.

6. **Chiusura asciutta**: solo "Per qualsiasi cosa resto a disposizione!" — versione condensata della chiusura §2.1, senza "Fammi sapere se ti torna tutto". Da usare quando il messaggio è già "tutto chiaro" e non c'è ambiguità che richieda conferma esplicita di Elena.

7. **"Team HeyAi"** invece di "HeyAI": auto-presentazione come collettivo collaborativo, non come azienda-fornitore concorrente. Da usare in interazioni con FuturItaly e altri partner-intermediari, dove serve abbassare la temperatura competitiva.

8. **"Pitch" maiuscolo** (Pitch invece di pitch) — convenzione interna di Carlo per riferirsi al pitch finale del 31/5 come milestone nominata.

9. **Bullet che non finiscono con punto fermo** — convenzione consolidata.

10. **"Ieri" anche se la call è di oggi**: l'email è stata mandata la sera tardi del 13/5, parla della call del 13/5 come "ieri". Probabilmente perché Elena la leggerà il 14/5 mattina. Pattern: usare "ieri" se il delivery dell'email cade dopo la mezzanotte logica del destinatario.

---

## Note di redazione iterazioni precedenti (v1-v5 — storico)

> Conservate come audit del processo. La versione inviata da Carlo è sopra.

### v5 — post quarta correzione Carlo 13/5 sera tardo

**Struttura imposta da Carlo**: apertura asciutta (no "grazie per") + frase di transizione che giustifica il recap come ponte tra le due date + due sezioni esplicite "Decisioni condivise" e "Prossimi passi", entrambe con bullet `*` + chiusura §2.1.

**Frase di transizione — alternative proposte a Carlo** per il "traghettare le due date / mantenere la timeline":

1. "per traghettare le due date e mantenere la timeline" ← v5
2. "per non disperdere quanto detto oggi e arrivare al touchpoint di venerdì già focalizzati"
3. "per saldare l'allineamento di oggi con il touchpoint di venerdì e tenere la timeline"
4. "per non perdere il filo tra oggi e venerdì"
5. "per non perdere il momentum tra oggi e venerdì"
6. "per portare il lavoro di oggi dentro il touchpoint di venerdì senza interruzioni"

**Idiomatiche stile colloquiale Carlo (aggiunte 13/5 sera tardo, su suggerimento Carlo "battere i tempi")**:

7. "per battere i tempi tra oggi e venerdì"
8. "per non perdere colpi tra le due date"
9. "per battere i tempi e arrivare a venerdì già focalizzati"
10. "per tenere il passo tra oggi e venerdì"
11. "per battere il ferro finché è caldo prima del touchpoint di venerdì"
12. "per stare sul pezzo tra oggi e venerdì"
13. "per non lasciare raffreddare il lavoro tra le due date"

**Decisioni condivise — 2 bullet**:
- Doppia tassonomia cluster (assi indipendenti: priorità + architettura), scritta concisa per evitare scope creep nell'email
- Tema "engagement aziende territorio" — punto che Elena ha voluto riportare in attenzione, già discusso tra Angelini e FuturItaly in passato. Formulato come differenziante, NON come insight esclusivo HeyAI (è di Elena/FuturItaly)

**Prossimi passi — 3 bullet, tutti owner "team FuturItaly"**:
- Feedback su bozza condivisa nell'email precedente + mockup illustrativo (rinominata "bozza", non più "scaletta")
- Condivisione brand book Angelini 2024 appena possibile
- Conferma touchpoint venerdì pomeriggio 16:30

**Tolto rispetto a v4**: "Ti aggiorno velocemente", "(lato mio)" / "(lato tuo)", azione Carlo esplicita (analisi cluster + integrazione + stesura). Le azioni Carlo si presumono dal contesto: lui sta scrivendo l'email e portando il lavoro al touchpoint di venerdì.

**Distinzione assi consolidata internamente (non in email)**: priorità (primario/secondario) e architettura (con percorso utente / senza percorso) sono assi indipendenti — vedi Log scheda [[_Angelini Academy|Angelini Academy]] del 13/5.

**Chiusura §2.1**: "Fammi sapere se ti torna tutto, per qualsiasi cosa resto a disposizione!" — pattern Elena standard, mantenuto.
