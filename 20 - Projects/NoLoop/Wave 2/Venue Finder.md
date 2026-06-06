---
type: resource
product: Venue Finder
status: in-development
created: 2026-04-30
updated: 2026-06-06
---

# 📚 Venue Finder

> Prodotto interno HeyAI: ricerca/matching di location per eventi + generazione automatica di presentazioni.
> Parte della suite [[Area - AI Solutions (Prodotti Interni)|AI Solutions]] e modulo Wave 2 NoLoop (€8.000 — Quick Win).

## Stato

In sviluppo avanzato. **MVP in prod atteso entro 6-7/5/2026** (Federico in call 6/5).

- **Wave 2**: Quick Win, delivery rilasciata aprile-maggio 2026
- **Investimento cliente**: €8.000 (PDF 13/04)
- **Risparmio annuo stimato**: €36.400 (1.225h liberate, 90% adoption)
- **ROI**: 810% / payback ~3 mesi

## Decisioni di design (6/5/2026)

- **Multi-location**: implementato come **consecutivo, non parallelo**.
  - L'utente seleziona le location possibili nella prima conversazione (es. Roma + Barcellona).
  - La ricerca le esegue in sequenza.
  - La presentazione finale mostra ogni città come blocco completo (venue + attività + ristoranti) prima di passare alla successiva — non si mischiano le città.
  - Costo token raddoppiato per ricerca multi: accettato perché 3-4 utenti in periodi specifici, volume basso.
- **Domande iniziali Sally (chat)**: **prompt in sola visualizzazione** passato a Carlo per studio. Setting NON editabile da cliente. Mitigazione del rischio "utente cancella per sbaglio". Da rivedere con feedback utenti reali prima di toccare la logica delle domande (oggi Carlo proporrebbe l'accorpamento, Federico è contrario perché "castra" l'agente).
- **Tasto SALTA** già presente per bypassare le domande Sally; Federico propone **tooltip** del tipo "se hai delle domande per te e non rispondi, i risultati saranno di scarto".
- **Enhancement presentazione graficamente accattivante**: fuori dall'MVP iniziale.

## Architettura tecnica agente (KB import 6/6)

> Spec tecnica dell'agente GPT, da KB import (`80 - Sources/Files/_import-2026-06-06/AI Venue Finder/` — master prompt, outline, sections, schema dati). Net-new rispetto alla scheda: il "come funziona" dell'agente. Dedup: **non** creata scheda "AI Venue Finder" separata — è lo stesso prodotto; spec confluita qui per evitare frammentazione (conferma Carlo se preferisce split).

- **Ruolo**: agente GPT consulente per eventi corporate — seleziona/confronta location, servizi, trasporti, attività extra; produce analisi, tabelle comparative, outline presentazioni. **NON** fa prenotazioni/contatti commerciali. Lingua default IT, tono professionale conciso.
- **File di progetto**: `Master prompt.txt` (system role/principi/regole non negoziabili) · `outline.txt` (workflow generatore outline PPT) · `sections.txt` (sezioni deliverable) · `dati_per_servizi_e_strutture.txt` (schema colonne tabelle) · `tour.operator.txt` (dati/logica tour operator) · `VenueFinder_ReqLog_v2.xlsx` (req log).
- **Workflow generatore outline (3 fasi)**: (1) Outline Descriptions — descrizioni promozionali + tagline + tabelle comparative, chiude con richiesta approvazione; (2) Scelta struttura — Convention con pernotto / Incentive Trip / Convention senza pernotto, chiede conferma; (3) Text block tab-indented — blocco testo (tab = livelli bullet) pronto per import PPT.
- **Schema tabella comparativa venue** (colonne mai rinominare/rimuovere): Name · Location (City/Region/Country) · Geographic setting (sea/mountain/city/lake/countryside) · Category ★ · TripAdvisor Score · Rooms · Airport Distance.
- **Import PowerPoint**: text block → incolla in Word → salva `.txt` encoding "Occidentale (Windows Latin 1)" su Mac → PPT: nuova diapositiva in presentazione vuota → "struttura" → seleziona il `.txt`.
- **Requirement log** (`VenueFinder_ReqLog_v2.xlsx`, legato al contratto Wave 2): 3 fogli — Esigenze da UAT e Feedback (23 righe) · Requisiti Evolutivi (16 righe) · Documentazione Allegata (11 righe).

## Stakeholder NoLoop

- ⭐ [[Antonella Osmetti]] — **referente di progetto / SME**, capo reparto programmazione (presentazioni + viaggi/eventi). Volume: 200 presentazioni/anno (era 45), 5h→1h con AI, 1,5 rilanci/gara, location ricorrenti ~35%.
- [[Ivano Romano]] — **supervisor creativo per output mini-video** Venue Finder (add-on separato dal core; richiede revisione qualità)

## Bug intercettati

- **6/5/2026 — bug bucket / applicativi giù in test**: errore upload file Venue Finder in test, più applicativi giù. Probabile bucket sminchiato (Simone: "il deploy non riavvia il bucket"). Federico/Simone in investigation. Bloccava i test di Carlo durante la call.

### 🐛 Feedback test sessione Carlo — 11/05/2026 (sera)

Sessione di prova end-to-end su 2 ricerche reali. Feedback ordinato per severità, owner Federico+Simone. Da girare via email + MS Lists.

**🔴 Severità CRITICA**

- **Sezioni Attività/Trasporti/Ristoranti saltate nel flow**. Ricerca "Convention Valore Salute Ottobre 600 pax": dopo Venue+Hotel il wizard va direttamente a "Come vuoi creare la presentazione?", saltando Attività/Trasporti/Ristoranti — pur avendo nel brief input pernottamento e cena. Riprodotto anche su una seconda ricerca successiva, stesso comportamento. Functional gap: manca metà del deliverable.

**🔴 Severità ALTA**

- **Link fonti puntano a strutture sbagliate**. Cliccando su risultato "Hyatt Milano" → si apre "LA PLAGE RESORT Taormina". Successo su **più risultati venue**. Stesso problema replicato sulla **sezione Attività**. Mapping fonte ↔ risultato compromesso, mina la fiducia cliente.
- **Link fonti aprono pagine vuote**. Verificato sulla sezione Attività.
- **Risposte vuote Sally chat**. Su input "milano e roma" nella ricerca "Convention Banco Desio Estero Maggio 500 pax", Sally risponde con `[]` invece di prosa, poi recupera con "Scusa Carlo! Piccolo intoppo tecnico…". Pattern ricorrente segnalato da Carlo ("mi fa spesso così con risposte vuote").
- **JSON grezzo renderizzato a video**. La lista dei requisiti critici alla fine del wizard è mostrata come stringa JSON (`[{"bucket":"critical","text":"Unica struttura per tutti i 600 partecipanti"}, ...]`) invece di bullet list formattati. UX rotta, nemmeno leggibile.
- **Settings prompt VF non visibili a Carlo**. Carlo non vede i prompt nei settings — "non ho proprio i settings abilitati per VF". Era già task #p1 (Federico, settings prompt Sally in sola visualizzazione abilitato a Carlo) ancora aperto.
- **Ricerca multi-location non funzionante**. Query "Milano e Roma" non gestita correttamente; era task #p1 (Federico, multi-location consecutivo). Stato del rilascio non chiaro a Carlo.

**🟡 Severità MEDIA**

- **Blocco requisiti critici duplicato a video**. Stessa lista JSON dei requisiti stampata 2 volte di seguito nella stessa schermata wizard, post input "EVENTO 1".
- **Markdown non renderizzato in chat Sally**. Risposta su hotel Milano (Sheraton San Siro / NH Congress Centre / Meliá): caratteri `\n\n` e `\n-` letterali visibili invece di paragrafi e bullet. Anche in altre risposte Sally.

**Note di sessione**

- Carlo ha sospeso il test e ha rimandato i feedback a sessione mirata di review (questa).
- Tutti i feedback sono raccolti da messaggi WhatsApp Carlo 11/5 ore 22:41–23:25.

## Note

Complementare a [[Crowd]] (gestione eventi, dominio Lorena Cavecchi) e [[Flow]] (piano produzione).

## Task aperti (al 11/5/2026)

### Carry-over dal 6/5

- [ ] **#p1** Federico+Simone: review finale MVP, OK a Carlo per comunicare al team NoLoop (slittato post sessione test 11/5 — feedback bloccanti aperti)
- [ ] **#p1** Federico: implementazione multi-location consecutivo — testato in locale 20/5, rilascio in test ambiente ancora pending (call interna 20/5)
- [x] ~~**#p1** Federico: settings prompt Sally in sola visualizzazione abilitato a Carlo (test 11/5: ancora non visibili)~~ → ✅ chiuso 20/5: Federico conferma "l'ho già fatto da giorni", Carlo deve verificare entrando dai setting applicativi (non setting account)
- [ ] **#p1 Federico**: stima realistica MVP Multilocation per Carlo → input per comunicazione cliente disponibilità test (Carlo lo richiede nell'email recap call 20/5)
- [ ] **#p1** Federico+Simone: fix bug bucket / applicativi giù in test
- [ ] **#p2** Carlo: testare il prompt Sally una volta visibile, proporre eventuale riformulazione
- [ ] **#p1** Federico+Simone: enhancement presentazione graficamente più accattivante (**ripromosso da #p2 a #p1** 13/5 in email recap interno Carlo — "migliorare flessibilità e estetica presentazioni" tra i bullet attivi del recap, non più rimandato a post-MVP)
- [ ] **#p1** Federico: data di consegna realistica per i fix Venue Finder → Carlo deve dare comunicazione al cliente NoLoop sulla disponibilità MVP. Urgenza esplicitata nell'email recap interno 13/5 sera

### Aperti dalla sessione test 11/5

- [ ] **#p1** Federico+Simone: fix flow saltato — sezioni Attività/Trasporti/Ristoranti mancanti dopo Venue+Hotel (riprodotto su 2 ricerche, brief richiedeva esplicitamente)
- [ ] **#p1** Federico+Simone: fix mapping link fonti → strutture sbagliate (es. "Hyatt Milano" apre "LA PLAGE RESORT Taormina"); replicato su più risultati venue e su sezione Attività
- [ ] **#p1** Federico+Simone: fix link fonti che aprono pagine vuote (sezione Attività)
- [ ] **#p1** Federico+Simone: fix risposte vuote Sally chat (`[]` a video, poi recovery con "intoppo tecnico"); pattern ricorrente
- [ ] **#p1** Federico+Simone: fix rendering JSON grezzo per lista requisiti critici → bullet list formattati
- [ ] **#p2** Federico+Simone: fix duplicazione blocco requisiti critici nella schermata wizard
- [ ] **#p2** Federico+Simone: fix rendering markdown chat Sally (`\n\n` / `\n-` letterali nelle risposte)

## Log

### 2026-05-20 (call interna HeyAI+Soolutions allineamento)
- **Permessi prompt VF su Solutions ✅ abilitati a Carlo** — Federico conferma "l'ho già fatto da giorni". Carlo deve verificare entrando dai setting applicativi (non dai setting account).
- **MVP Venue Finder Multilocation**: ancora in lavorazione lato Federico. Federico dichiara di averlo *"parzialmente testato in locale, però devo ancora rilasciarlo"*. Slittamento riconosciuto da Carlo: l'MVP era stato dichiarato "pronto la settimana scorsa" → ritardo accumulato. Federico+Simone domani 21/5 in presenza per lavorare assieme, Carlo li rompe in serata per pushare.
- **Stima realistica per MVP Multilocation**: Carlo richiederà a Federico nell'email recap della call, perché Carlo deve comunicare al cliente la data di disponibilità test.
- **VF è il modulo idrovora di token**, NON Minutes (Carlo si preoccupava di Minutes ma il consumo è basso = 36,10$ totali). Federico in call: *"la cosa più idrovora se fosse acqua, ma è tokenovora in questo caso è il Venue Finder"*. Mitigazione attiva: 4 utenti / periodi specifici dell'anno (non flow continuo). Federico costruirà sistema centralizzato di usage in Wave 2 (vedi [[Minutes]] Log 20/5).
- **Sulle presentazioni VF**: Federico conferma che non sono state ancora implementate (era l'ultima cosa nel piano).
- **Bug bucket / mapping link fonti / multi-location / settings prompt non visibili**: i 9 bug della sessione test 11/5 sera (in scheda Bug intercettati) non sono stati ripercorsi puntualmente in questa call interna — focus era pagamenti + Crowd. Status reale dei fix da verificare con Federico+Simone post lavoro congiunto 21/5.

### 2026-05-13

- **Call interna HeyAI+Soolutions** (13:32-14:35). In call Carlo ha riconfermato che il bug "fonte sbagliata" (Hyatt Milano → LA PLAGE RESORT Taormina) **non è collegato a impostazioni Brain manomesse da lui** (Carlo aveva inizialmente sospettato di averle modificate dopo aver visto il prompt). Federico conferma: bug recidivo lato applicativo.
- **Permessi prompt/setting Venue Finder a Carlo**: ancora NON visibili al test 11/5. Federico in call si è impegnato ad abilitarli post-call come è già stato fatto su Solutions/Minutes — Carlo potrà studiare il prompt mentre testa.
- **Multi-location consecutivo "Milano e Roma"**: deadline interna del 6/5 ("entro domani") slittata, sviluppo ancora non completato. Carry-over confermato dalla call.
- Carlo ha rimarcato la presenza di una lista fix completa già inviata via mail lunedì sera 11/5 (9 bug catturati nella sessione di test).
- **Email recap interno serale 13/5** (riscrittura Carlo): aggiunti 2 elementi mancanti nella mia bozza v1 → (a) **urgenza comunicazione cliente**: Carlo deve dare comunicazione a NoLoop su disponibilità MVP, quindi Federico deve dare data di consegna realistica dei fix; (b) **enhancement "migliorare flessibilità e estetica presentazioni"** ripristinato come bullet attivo (era declassato a #p2 post-MVP nelle mie schede, Carlo lo vuole tenere visibile a Federico).

## Sessioni Cowork correlate

- 2026-05-11 sera — `local_56c80cfd` — Sessione test approfondita Venue Finder (11/5 sera): cattura di 9 bug/feedback (5 #p1 + 2 #p2 + 2 carry-over 6/5 ancora pendenti). Output: bozza email a Federico+Simone (paste-ready) + tabella MS Lists Soolutions Delivery Board (paste-ready, filtri privacy §8bis rispettati). Bug critico: flow saltato Attività/Trasporti/Ristoranti dopo Venue+Hotel (riprodotto su 2 ricerche, brief richiede esplicitamente pernottamento+cena). → [[80 - Sources/Cowork Sessions/2026-05-12 - Indice sessioni#Sessione 2 — Venue Finder feedback and bug report (test 11/5 sera)]]
- 2026-05-13 — `local_af2ea6af` — Email recap interno Federico+Simone (riscrittura Carlo): **urgenza cliente esplicitata** — Carlo deve comunicare al cliente disponibilità MVP. Enhancement "estetica presentazioni" **promosso #p2 → #p1** (era stato degradato nella bozza Claude, riassorbito da riscrittura Carlo). → [[80 - Sources/Cowork Sessions/2026-05-13 - Indice sessioni#Sessione 5 — Write recap email and update tasks (Federico+Simone allineamento interno)]]

## 💬 Citazioni testuali

> "non so chi sta usando" (sul Venue Finder standalone)
> — [[Antonella Osmetti]] (chat business case Venue Finder marzo 2026; segnalazione adoption frammentata pre-evolution. Nei report DPIII attribuita per errore a "Lorena")

## Chat correlate

- [[80 - Sources/Claude Chats/Export 2026-04-30/Business case finanziario Venue finder/Business case finanziario Venue finder|Business case Venue Finder]] (05/03→23/03, 9 artifacts)
