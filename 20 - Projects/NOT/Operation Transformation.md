---
type: project
status: active
priority: p1
client: NoLoop (divisione NOT)
created: 2026-04-30
updated: 2026-06-02
contract_status: emesso_non_firmato
stakeholders: [Massi Sinigaglia, Justin Lauro, Roberta Calajò, Paolo Donzelli, Federico Saladino (Soolutions), Simone Montanari (Soolutions)]
---

# 📁 Operation Transformation (NOT)

> **Outcome**: Digitalizzazione end-to-end di NOT (Noloop on Trade — divisione commerciale NoLoop con cliente principale BAT).
>
> **Comprende DUE moduli integrati** _[conferma utente 30/04]_:
> 1. **Modulo Logistica** (digitalizzazione operativa)
> 2. **Modulo Vendite** (gestione vendite + integrazione 3 piattaforme)

## ⚠️ Consolidamento schede

Questo progetto **assorbe** ciò che precedentemente era diviso in 2 schede:
- ~~NOT - Modulo Vendite~~ (eliminato, contenuto qui)
- ~~NOT Operations Transformation~~ (questo)

## Posizione nel cluster NOT

NOT (Noloop on Trade) ha 3 progetti HeyAI:
1. **Operation Transformation** (questo — logistica + vendite)
2. [[Eye Cookies]] (marketing AI per pop-up store)
3. [[NOT Marketing - LinkedIn e Sito]] (marketing tradizionale, ✅ in consegna, owner Michele/Andrea)

## Stato

- **Status**: 🟢 Active — kickoff fatto, sviluppo in corso, **contratto emesso da HeyAI ma NON ancora firmato da NoLoop/Donzelli, nessun feedback ricevuto** _[rettifica Andrea Pazienza 21/5/2026]_
- **Cliente finale**: BAT
- **Importo contratto**: **€109.000** _[conferma utente 30/04]_
- **Acconto**: ✅ pagato da NOT _[conferma Carlo 21/5/2026]_ — emesso e incassato a fronte di contratto non ancora sottoscritto
- **Owner interno**: Carlo Sanvoisin (PM)
- **Ultimo aggiornamento**: 2026-05-21 (rettifica stato contrattuale)

> ⚠️ **Anomalia operativa segnalata 21/5/2026**: l'informazione "contratto firmato" presente nel vault fino al 20/5 era errata. Realtà: HeyAI ha emesso il contratto, Donzelli non lo ha firmato né dato feedback. L'acconto è stato fatturato e incassato comunque (analogamente al pattern Wave 2 Art. 1.4 di efficacia retroattiva su attività propedeutiche). Da formalizzare la sottoscrizione prima della fatturazione delle tranche successive.

## Stakeholders

### Lato NoLoop / NOT
- **[[Massi Sinigaglia]]** (Massimiliano) — **Referente principale NOT**, sponsor commerciale
- [[Paolo Donzelli]] — CFO, decision maker finanziario
- [[Marco Pasquali]] — Director Marketing NoLoop, **coinvolto in tutta la parte marketing NOT** _[conferma utente 30/04]_
- [[Justin Lauro]] — Consultant tech, lato delivery (referente operativo)
- [[Germano Marano]] — **potenziale referente tecnico Operation** _[apertura 28/5/2026, da confermare con Massi]_. Germano in call bisettimanale Eye Cookies 28/5: *"chiedo a Massi se dovrò seguire anche il progetto operation e poi ne parliamo"*. Apertura punto di contatto tecnico unico per entrambi i progetti NOT lato cliente. Decision in carico a Massi.
- [[Roberta Calajò]] — Compliance/Finance, verifica fatture
- Laila — Logistica spedizione prodotti

### Lato HeyAI
- [[Carlo Sanvoisin]] — PM
- [[Federico Saladino (Soolutions)]] — Sviluppo front-end
- [[Simone Montanari (Soolutions)]] — Sviluppo back-end
- [[Andrea Pazienza]] — Amministrativo

## ⚠️ Modulo Vendite — Piano B API BAT/PARD: CONTRATTUALIZZATO, ATTIVAZIONE TBD

> _[fonte: artifact "Processo e2e NOT Operations" Art. 3.8 contratto · aggiornamento 5/5/2026]_

### Scenario A — API Disponibili (best case)
- Integrazione via API ufficiali **BAT (Sharpend)** e **PARD**
- Incluso nel corrispettivo del contratto
- Manutenzione inclusa

### Scenario B — Piano B (RPA Fallback)
- Integrazione via **automazione RPA** (browser automatizzato)
- ✅ **Sviluppo iniziale RPA INCLUSO nel corrispettivo**
- ⚠️ **Manutenzione successiva ESCLUSA**
- Eventuali rotture per modifiche piattaforme = Change Request quotata a parte

### Responsabilità cliente
NOT verifica disponibilità API con BAT/PARD **entro 15 giorni dalla firma contratto** (Art. 8bis). Termine formale scaduto il **18/04/2026** (firma 03/04 + 15gg). Justin sta ancora insistendo "ai fianchi" — concessa extra-tempo informale.

### Status API (30/04/2026)
Justin Lauro: "C'è il concreto rischio che non ce le diano (le API), anche se stiamo lavorando ai fianchi per insistere".

### Decisione attivazione Piano B (TBD — aggiornamento 5/5/2026)
**Il piano B esiste sulla carta ma l'attivazione non è ancora stata decisa.** Carlo ha preparato bozza email a Justin per fissare un check-point oltre il quale (in assenza di risposta BAT) attivare RPA → vedi [[00 - Inbox/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD)]]. Da inviare dopo decisione su data limite e cc Massi.

## Pain point cliente — Tripla registrazione vendite

Oggi ogni vendita NOT registrata su **3 piattaforme separate**:
1. **App NOT** (proprietà NoLoop)
2. **CRM BAT "Sharpend"**
3. **PARD** (piattaforma esterna)

**Costo**: 10 min/vendita × 10 vendite/giorno × ~33 pop-up = **15% giornata promoter persa** in data entry tripla.

**Soluzione**: PDP centralizzato → eliminazione tripla via API native o RPA fallback.

## Materiali e contratto

- 📄 NOT_Proposta di Investimento_Moduli Logistica & Vendite.pdf (03/03/2026, su SharePoint)
- 📄 Contratto firmato (03/04/2026 — Paolo Donzelli) — **Importo €109.000** (Logistica + Vendite)
- 📄 Aggiornamento proposta investimento (10/04 — Andrea a Paolo)
- 📊 requirement log NOT.xlsx (02/03/2026, fasi F0 setup + F1+ features)
- ✅ **9 correzioni critiche applicate al contratto** (IP, GDPR, obblighi cliente, integrazioni condizionate)

## Fatturazione

- 27/04/2026 — Andrea Pazienza ha inoltrato a Roberta Calajò 1 delle 3 fatture cortesia = **acconto Operation Transformation**
- Da definire: tempistica fattura saldo finale (alla delivery)

## Decisioni contrattuali chiave

- **Art. 3.8** — Integrazioni condizionate (API native vs RPA fallback)
- **Art. 3.11** — Qualsiasi requisito fuori RL = quotazione separata (Change Request)
- **Art. 8bis** — Obblighi cliente NOT: storico 5 anni dati vendite, list campi 3 piattaforme, verifica API entro 15gg firma
- **Art. 12bis** — IP: NOT prende proprietà codice + diritto modifica, HeyAI tiene know-how

## Esclusioni esplicite dal scope iniziale

- ⛔ **Timbratura turni promoter** — DA DEFINIRE nel RL, escludere
- ⛔ **Calendario turni** — quotabile a parte
- ⛔ **Manutenzione RPA** se attivato piano B

## Task aperti

- [x] ~~**#p1** Inviare email a Justin con check-point + decisione attivazione piano B (bozza pronta in Inbox 5/5)~~ → ✅ chiuso 2026-05-07 (conferma Carlo: email inviata)
- [x] ~~**#p1** Insistere con BAT per API native (Justin in lavorazione)~~ → ✅ chiuso 2026-05-07 (conferma Carlo: già fatto)
- [x] ~~**#p2** Allineare con [[Justin Lauro]] (auto-reply attivo) tramite Carmen Compare per non bloccare push BAT modulo Vendite~~ → ✅ chiuso 2026-05-07 (conferma Carlo: allineamento fatto)
- [ ] **#p2** Verificare se ci sono novità da PARD (collegata a BAT)
- [ ] **#p2** Se attivazione RPA: stima sviluppo da Federico Saladino + Simone Montanari
- [ ] **#p1** Carlo + Laila El Zieny: coordinamento spedizione **prodotti fisici NOT/BAT** verso team di sviluppo HeyAI → setup per **riconoscimento prodotti tramite IA** (training computer vision in ambiente controllato pre-deploy in store). Carry-over dal 6/5, ribadito in call interna 13/5 e nella mail Carlo→Germano+Massi 13/5 sera. Necessario indirizzo di spedizione da team di sviluppo, poi Carlo coordina con Laila la consegna dei prodotti
- [ ] **#p1** Federico+Simone: indirizzo di spedizione per i **prodotti fisici Operation Transformation** (riconoscimento prodotti tramite IA) → comunicarlo a Carlo per organizzare consegna con Laila
- [ ] **#p1** Carlo: continuare push lato Justin Lauro sulle API BAT/PARD (carry-over dal 6/5, ribadito in call interna 13/5 — owner Carlo, NON Soolutions)
- [ ] **#p1** Carlo: gestire chain setup tecnico NOT (call Germano live Microlog per Eye Cookies + call Microlog payload/API per Eye Cookies + call team operativo Carmen Compare per ingestion dati storici NOT/BAT base modello predittivo — entro questa settimana/prossima)
- [ ] **#p1** Attesa conferma Justin su shift deadline switch API native → Piano B da 15/5 a martedì **19/5** (proposta Carlo nell'email 14/5)
- [ ] **#p2** Attesa risposta Laila su organizzazione call shipping (indirizzo spedizione già fornito in email 14/5: Via Fratelli Solari 65, 29027 Gariga di Podenzano PC - destinatario Federico Saladino)
- [ ] **#p1** Attesa indicazione referente NoLoop per ingestion storico dati (chiesto a Justin+Carmen+Laila nell'email 14/5 per call con team tech HeyAI sulla taratura modello predittivo)
- [ ] **#p1** Carlo: rispondere a email Carmen (CC Justin) 29/5 "Richieste tecniche" e fissare call **lunedì 1/6 pomeriggio dalle 15:00** su questioni tecniche piattaforma (probabili: stato API BAT/PARD + switch Piano B mai confermato dal 19/5, ingestion storico dati lato Carmen, mappatura campi 3 piattaforme) — _[29/5: risposta inviata con recap dei 3 punti + proposta invito Teams; orario confermato da Carmen (lun 1/6 dalle 15:00); resta solo da inviare l'invito Teams]_
- [ ] **#p1** Carlo: inquadrare l'opportunità **"strumento di automazione per l'inserimento dati"** anticipata da Carmen 29/5 — verificare se è dentro lo scope Operation già contrattualizzato (PDP/RPA, tripla registrazione) o nuovo perimetro/Change Request; preparare la lettura per la call 1/6 e decidere se coinvolgere il team tecnico

## Eventi chiave

- 09/04 — Allineamento Operations + Eye Cookies (con Massi)
- 16/04 — Kick-off NOT | Operations & Eye Cookies (Carlo organizer)
- 27/04 — Andrea inoltra documentazione + 3 fatture di cortesia a Roberta Calajò
- 27/04 — Roberta chiede conferma: fatture intestate a NOLOOP anziché NOT?
- 30/04 — Justin: "concreto rischio che non ce le diano (le API)"
- **2026-05-07** — Carlo: email Justin (API/piano B) inviata, push BAT API fatto, allineamento via Carmen Compare completato (conferma chat 7/5; task chiusi in batch reconciliation)
- **2026-05-14** — Email reminder Carlo a Justin (CC Carmen+Laila) inviata; Justin risponde stesso giorno confermando 15/5 e pressing BAT; Carlo controreplica proponendo shift a martedì 19/5 + condivide indirizzo spedizione prodotti Operation Transformation

## Sessioni Cowork correlate

- 2026-05-07 — batch reconciliation 3 task (email Justin · push BAT API · allineamento Carmen Compare) → [[80 - Sources/Cowork Sessions/2026-05-07 - Indice sessioni#Sessione 1 — Review open tasks summary]]
- 2026-05-13 — `local_af2ea6af` — Email recap interno Federico+Simone (riscrittura Carlo): bonifico Soolutions su NOT **GATED** all'Excel cash-flow di Andrea ↔ Elena Soolutions ("appena decidiamo la formula pagamenti vi giriamo il bonifico"). Comunicazione proattiva cliente "siamo ufficialmente partiti" a Massi+Justin questa settimana. Push lato Justin sulle API BAT/PARD resta owner Carlo. → [[80 - Sources/Cowork Sessions/2026-05-13 - Indice sessioni#Sessione 5 — Write recap email and update tasks (Federico+Simone allineamento interno)]]
- 2026-05-14 — `local_e235b7fe` — Email reminder Justin (CC Laila+Carmen) inviata: thread 3 round (Carlo→Justin reminder · Justin risposta conferma deadline 15/5 + pressing API · Carlo controreplica shift a 19/5 + indirizzo spedizione + ingestion storico in capo a Carmen). Pattern stile "Reminder mail — pattern compatto" estratto da rewrite Carlo → propagato in CLAUDE.md §2.1 (apertura `vi scrivo solo per un reminder veloce`, parentesi corte `(qui sotto)`, append topic con `+ tema X in capo a Y`, taglio doppia offerta supporto/call, chiusura condensata, `!` finale). 3 nuovi task pending: attesa conferma shift 19/5 (#p1) · attesa Laila (#p2) · attesa referente ingestion storico (#p1). → [[80 - Sources/Cowork Sessions/2026-05-14 - Indice sessioni#Sessione 5 — Draft reminder email to Justin and team (Operation Transformation API BAT/PARD)]]
- 2026-05-21 — `local_832269f2` — Process call transcript Federico+Simone: messaggio Simone su NOT/Microlog — scheletro applicativo + struttura base in **fase avanzata**, backup dati pregresso già fatto, alert tempistico esplicito *"a breve serviranno indicazioni più puntuali per procedere correttamente con l'implementazione"*. Sequenza-call HeyAI+On Trade NoLoop+Microlog+team dev passa da intenzione Carlo a **richiesta operativa del team di sviluppo**. → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 7 — `local_832269f2-036d-4b0f-89f6-b804bb1586d2` — Process call transcript with Federico and Simone]]
- 2026-05-21 — `local_51b0ba93` — Paolo project recap and contract review (collaterale): rettifica frontmatter status Operation Transformation — **"contratto emesso ma NON firmato da Donzelli + acconto fatturato e incassato comunque"** (era erroneamente "contratto firmato" fino al 20/5). Anomalia analoga a pattern Wave 2 Art. 1.4 efficacia retroattiva. Da formalizzare sottoscrizione prima delle tranche successive. → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 5 — `local_51b0ba93-be43-4c2e-a396-4ba3546819fc` — Paolo project recap and contract review]]
- 2026-06-01 — `0593b7a7` (Code) — processata call NOT "Allineamento richieste tecniche" (1/6, referente Carmen Compare): recap PM + nota performance Carlo. Decisioni locked: Carmen referente ingestion dati (sblocca attesa 14/5), documento campi Form completo/invariato, prototipo "form unico" su app NOT esistente dentro €109K senza extra, blocco campi obbligatori al submit, no email recap post-call. Prossimi: mer 3/6 allineare dev (priorità #1 integrazione piattaforme), call dati con Carmen (copre anche Eye Cookies), ven 5/6 visita BAT + escalation Massi API, lun 8/6 re-sync → se API ferme attivare RPA (manutenzione esclusa = Change Request). Decisioni in capo a Carlo: tagliare VoIP, valutare riempimento dati randomici (degrada modello), "I Love Ric" stand-by. _Edit nel worktree nervous-shannon — merge nel main vault da verificare._ → [[80 - Sources/Cowork Sessions/code-recap/2026-06-01 - claude-wt-nervous-shannon-0593b7a7|claude-wt-nervous-shannon (0593b7a7)]]

## Log

### 2026-05-29 — Carmen Compare (CC Justin) chiede call su "questioni tecniche" della piattaforma
- **Email inbound Carmen→Carlo (CC Justin), oggetto "Richieste tecniche"** (29/5 16:21): *"Io e Justin stavamo riflettendo su alcune questioni tecniche intorno alla piattaforma di cui vi state occupando... lunedì siamo operative... se avevi in programma un weekend lungo, rimetto a te la scelta della data."* Primo canale proattivo lato cliente sul thread dopo ~2 settimane di silenzio (ultimo scambio sostanziale 14/5).
- **Risposta Carlo (bozza 29/5)**: conferma disponibilità, niente ponte (lunedì 1/6 è il giorno-ponte verso la Festa della Repubblica 2/6), call **lunedì 1/6 pomeriggio dalle 15:00**. Justin lasciato in CC.
- **Email finale Carlo (29/5) — inviata**: conferma disponibilità lunedì 1/6 dalle 15:00 e propone **invito su Teams** (canale call deciso). Condivide al cliente il recap dei 3 punti ancora aperti: (1) **Stato API BAT/PARD**, (2) **Ingestion dello storico dati**, (3) **Mappatura dei campi dei form attuali sulle 3 piattaforme**. Chiede a Carmen/Justin di anticipare temi/dubbi lato loro per capire se coinvolgere anche il team tecnico in call. **Pending**: conferma orario da Carmen/Justin → poi Carlo manda l'invito Teams.
- **Carmen conferma (29/5)** — *"per noi va bene lunedì dalle 15 in poi 🙂"*. **Call confermata: lunedì 1/6 dalle 15:00 su Teams** (Carlo prepara l'invito). Carmen anticipa il tema che vogliono portare: *"l'opportunità di crearci uno strumento di automazione per l'inserimento di alcuni dati"*. → **Possibile nuovo perimetro / Change Request da inquadrare**: capire se ricade nel PDP/RPA già contrattualizzato (eliminazione tripla registrazione vendite, cuore di Operation) o se è un'esigenza nuova e distinta. Attenzione scope: non regalare lavoro già in-scope né rivendere ciò che è già nel €109K. Da decidere anche se portare il team tecnico in call.
- **Contesto open point**: lo **switch API native → Piano B (RPA)** proposto da Carlo per martedì 19/5 non risulta mai confermato da Justin nel vault → a oggi 29/5 sono ~10 giorni oltre la finestra. Probabile che la call serva (a) a chiudere questo punto (BAT ha dato/negato le API?), (b) ad avviare l'**ingestion storico dati** lato Carmen (Data Analyst), (c) a sbloccare la **mappatura campi delle 3 piattaforme** (Art. 8bis). Attenzione perimetro: il modello predittivo è fuori dal €109K.

### 2026-05-28 — Apertura potenziale tech-referent Germano + bisettimanale alternato + multi-SIM connettività
- **Emerge dalla prima call bisettimanale Eye Cookies 28/5** (Carlo + Germano + team di sviluppo). Riassunto in [[Eye Cookies]] ## Log 2026-05-28. Tre impatti su Operation Transformation:
- **(1) Germano potenziale referente tecnico Operation**: Germano in call propone di seguire anche Operation lato tecnico se Massi gli dà mandato. Citazione: *"chiedo a Massi se dovrò seguire anche il progetto operation e poi ne parliamo"*. Apertura punto di contatto tecnico unico per entrambi i progetti NOT lato cliente. Decision in carico a Massi. Carlo seguirà via email follow-up della call 28/5.
- **(2) Bisettimanale Operation Transformation alternato a Eye Cookies**: Carlo propone in chiusura cadenza alternata (una call Eye Cookies, una Operation). Germano OK condizionato a conferma Massi su Germano-as-tech-Operation. Da formalizzare in email follow-up.
- **(3) Multi-SIM / kit connettività riposizionato a Operation**: in call Germano riconosce che il kit multi-SIM e l'aggregazione connessioni (proposta team di sviluppo) ha più valore qui che su Eye Cookies (i sensori Microlog hanno già backup cache + drain). Operation invece soffre di connettività instabile in centri commerciali (operatori smartphone + applicativo web-only). Soluzione team di sviluppo: terminale collegato a WiFi dipendenti centro commerciale + backup SIM cellulare via load-balancing aggregazione. Da inserire in roadmap Operation come voce tecnica.

### 2026-05-14
- **Email reminder cliente inviata** (TO: Justin Lauro · CC: Carmen Compare, Laila El Zieny). Carlo apre con pattern compatto reminder: comunicazione proattiva "team tecnico è ufficialmente partito con gli sviluppi" (modo diplomatico di trasmettere lato cliente che la fattura è stata pagata e siamo operativi, senza nominarlo). Tre topic in mail: (1) chiusura punti aperti mail precedente Justin (push BAT + Piano B + deadline), (2) spedizione prodotti lato Laila, (3) nuovo tema ingestion storico dati per taratura modello predittivo (referente da identificare).
- **Risposta Justin** (14/5): conferma 15/5 come switch date, continua pressing BAT per API native. Chiede a Carlo se serve qualcosa di specifico su Laila o se hanno già parlato.
- **Carlo replica con shift deadline** (14/5): considerando che 15/5 è il giorno dopo (troppo stretto), propone spostare lo switch a **martedì 19/5** per dare a BAT un'ultima finestra utile. **Indirizzo spedizione condiviso al cliente nella stessa email**: Via Fratelli Solari 65, 29027 Gariga di Podenzano (PC) — destinatario Federico Saladino. Comunicato come "indirizzo passato dal nostro team" (no naming Soolutions, per regola §2.1 CLAUDE.md).
- **Stato deadline switch (in attesa conferma Justin)**: 15/5 → proposta 19/5. Se Justin conferma, la bozza 5/5 e tutto il piano B timing slittano di 4 giorni.

### 2026-05-13
- **Call interna HeyAI+Soolutions** (13:32-14:35). Carlo: *"hanno pagato NOT"* — Operation Transformation effettivamente incassato lato HeyAI (Carlo cita esplicitamente che Donzelli ha pagato NOT mentre Wave 2 NoLoop è ancora pending). **Bonifico a Soolutions inizialmente "tra oggi e domani"**, ma rettificato nell'email recap interno serale: gated alla decisione della formula cash-flow Excel Andrea ↔ Elena Soolutions ("appena decidiamo la formula pagamenti vi giriamo il bonifico"). Carlo conferma di tenere il push lato Justin sulle API BAT/PARD: owner è Carlo, Soolutions non si muove finché non c'è risposta dal cliente sulle API native. La chain delle 3 call tecniche per partenza sviluppi è gestita insieme a Eye Cookies (vedi Log scheda Eye Cookies 2026-05-13). **Comunicazione cliente**: Carlo annuncia ufficialmente a Massi+Justin che siamo partiti, email proattiva da inviare questa settimana.

### 2026-05-07
- **3 task chiusi in batch reconciliation** (conferma Carlo chat 7/5): email check-point Justin inviata, push BAT API native completato, allineamento Justin via Carmen Compare fatto. Bozza email in [[00 - Inbox/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD)]] confermata come testo inviato. Stato delivery NOT modulo Vendite ora dipende dalla risposta di BAT/PARD.

## ⚠️ Storia perimetro (consolidato 4/5/2026)

| Versione | Perimetro | Importo | Status |
|---|---|---|---|
| Stima iniziale (chat 26/02, audit 27/02) | "Piattaforma intera" (predictive, warehouse, CV scanning, multi-tenant, time tracking, BAT, GDPR, training) | €168K (WBS interno) — rispetto a budget cliente €38K → gap €25K | Audit 14 rischi ALTA/MEDIA, scope troppo ampio |
| Revisione direzione (post-audit) | Modulo Vendite + Modulo Logistica (consolidati) | **€109.000** | ✅ ATTIVO |
| | | | _Conferma Carlo 4/5: "stima iniziale era più alta ma per tutti i moduli, abbiamo poi deciso di attivare solo modulo vendite logistiche che fa un totale di 109K"_ |

**Esclusi dal perimetro €109K** (eventualmente Fase 2): predictive modeling, warehouse mgmt esteso, CV scanning multi-piattaforma, multi-tenant, time tracking, GDPR detailed, training moduli comprehensive, shift calendar.

## 💬 Citazioni testuali da preservare

> "concreto rischio che non ce le diano (le API), anche se stiamo lavorando ai fianchi per insistere"
> — **Justin Lauro**, 30/04/2026 (status API BAT/PARD; conferma necessità piano B RPA)

## Pattern operativi NOT

- **Triplete BAT/Sharpend/PARD** è la **vera dolosità** — non la mancanza di tecnologia, ma la frammentazione obbligata
- **Massi MD** è sponsor commerciale forte ma **decisione finale resta Paolo Donzelli** (CFO firma contratti)
- **Justin in trincea** sulle API: lavorare "ai fianchi" del cliente, non frontale
- **Modello revenue share soft**: NOT guadagna commissioni dai clienti, HeyAI è dev shop con quota di delivery
