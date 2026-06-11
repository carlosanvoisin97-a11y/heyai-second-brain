---
type: project
status: active
priority: p1
owner: Carlo
client: NoLoop (divisione NOT)
created: 2026-04-30
updated: 2026-06-11
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
**Il piano B esiste sulla carta ma l'attivazione non è ancora stata decisa.** Carlo ha preparato bozza email a Justin per fissare un check-point oltre il quale (in assenza di risposta BAT) attivare RPA → vedi [[50 - Archive/Inbox/2026-05/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD)]]. Da inviare dopo decisione su data limite e cc Massi.

## Pain point cliente — Tripla registrazione vendite

Oggi ogni vendita NOT registrata su **3 piattaforme separate**:
1. **App NOT** (proprietà NoLoop)
2. **CRM BAT "Sharpend"**
3. **PARD** (piattaforma esterna)

**Costo**: 10 min/vendita × 10 vendite/giorno × ~33 pop-up = **15% giornata promoter persa** in data entry tripla.

**Soluzione**: PDP centralizzato → eliminazione tripla via API native o RPA fallback.

## Materiali e contratto

- 📄 NOT_Proposta di Investimento_Moduli Logistica & Vendite.pdf (03/03/2026, su SharePoint)
- 📄 Contratto **emesso NON firmato** da Donzelli (03/04/2026 — rettifica 21/5, riconfermato Carlo 7/6) — **Importo €109.000** (Logistica + Vendite); acconto incassato comunque
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
- [ ] **#p1 Carlo**: review/firma bozze Contratto Quadro Soolutions + OE Operation Transformation — 5 nodi critici aperti pre-firma (entità cliente NOT/NoLoop, contratto cliente non firmato, cap responsabilità art. 12.1, royalty/riuso art. 6.2-6.3, GDPR art. 10 vs esclusione E.2). Checklist → [[2026-06-08 - Review Contratto Quadro + OE Soolutions]]. _[9/6: nodo #4 royalty/riuso parzialmente sciolto in call — cessione IP circoscritta all'ecosistema custom, modelli AI esclusi ma con uso illimitato al cliente]_
- [ ] **#p1** Federico+Simone: produrre la **lista delle componenti tecniche di terzi/open-source NON cedibili come IP** (+ cosa è cedibile vs strumenti terzi del processo) → serve a Carlo per interfacciarsi con [[Germano Marano|Germano]] e comunicare al cliente il perimetro IP _[call 9/6]_. **Estensione (team 9/6 pom.)**: la lista deve includere anche la **specifica del modello/LLM base** e le **spec tecniche per il retraining da parte di terzi** (condizione vincolante Bruno)
- [ ] **#p1 Carlo**: inviare a Federico+Simone **email con la condizione vincolante sine qua non** (consegna codice sorgente + spec modello base + spec per training di terzi, così che un altro sviluppatore possa ritrainare) e attendere **conferma scritta** _[decisione team 9/6 — il lock-in è rischio HeyAI, non NoLoop]_
- [ ] **#p1** Andrea Pazienza: inviare a Soolutions (Elena, in chat) i **3 documenti** (Accordo Quadro + scheletro OE + OE Operation Transformation) per review _[call 9/6 — dichiarato "ve lo mando subito", da confermare invio]_
- [ ] **#p2** Andrea + Elena (Soolutions): call di 10 min per chiudere la **dicitura fattura** (riferimento a OE firmato + cessione IP al saldo ultima tranche) _[call 9/6]_
- [ ] **#p2** Carlo: valutare accesso al **gestionale commesse Soolutions** (Simone pubblica su produzione, fornisce CLI/MCP + skill) come possibile evoluzione della Delivery Board _[call 9/6]_
- [ ] **#p1** Carlo: continuare push lato Justin Lauro sulle API BAT/PARD (carry-over dal 6/5, ribadito in call interna 13/5 — owner Carlo, NON Soolutions)
- [ ] **#p1** Carlo: gestire chain setup tecnico NOT (call Germano live Microlog per Eye Cookies + call Microlog payload/API per Eye Cookies + call team operativo Carmen Compare per ingestion dati storici NOT/BAT base modello predittivo — entro questa settimana/prossima)
- [ ] **#p1** Attesa conferma Justin su shift deadline switch API native → Piano B da 15/5 a martedì **19/5** (proposta Carlo nell'email 14/5)
- [ ] **#p2** Attesa risposta Laila su organizzazione call shipping (indirizzo spedizione già fornito in email 14/5: Via Fratelli Solari 65, 29027 Gariga di Podenzano PC - destinatario Federico Saladino)
- [x] ~~**#p1** Attesa indicazione referente NoLoop per ingestion storico dati (chiesto a Justin+Carmen+Laila nell'email 14/5 per call con team tech HeyAI sulla taratura modello predittivo)~~ → ✅ chiuso 2026-06-01: **[[Carmen Compare]] confermata referente ingestion dati** (call 1/6); Federico+Simone fanno riferimento a lei _[reconciled 6/6 da harvest worktree — verificare]_
- [x] ~~**#p1** Carlo: rispondere a email Carmen (CC Justin) 29/5 "Richieste tecniche" e fissare call **lunedì 1/6 pomeriggio dalle 15:00**~~ → ✅ chiuso 2026-06-01: call svolta (50 min, Carmen+Justin+Carlo) _[reconciled 6/6]_
- [x] ~~**#p1** Carlo: inquadrare l'opportunità **"strumento di automazione per l'inserimento dati"** anticipata da Carmen 29/5~~ → ✅ chiuso 2026-06-01: chiarito in call — automazione inserimento vendite = **form unico dentro roadmap €109K** (no effort/costo extra, no Change Request), con mandato Massi a darle priorità sul modello predittivo _[reconciled 6/6]_
- [ ] **#p1** Federico+Simone: valutazione tecnica preliminare della **richiesta Carmen+Justin** (strumento automazione inserimento dati) — candidata a priorità di partenza sviluppi
- [ ] **#p1** Carlo: inviare a Federico+Simone il **form con tutti i campi per la maschera unica** (mappatura campi form attuali App NOT + CRM BAT Sharpend + PARD)
- [ ] **#p1** Carlo: email follow-up recap a [[Germano Marano|Germano]] (call 4/6) — RL + brief + slide architettura + punto API BAT + domanda prioritizzazione registrazione vs predittivo + soluzione connettività → bozza pronta (8/6): [[50 - Archive/Inbox/2026-06/2026-06-08 - BOZZA Email follow-up call Operation Transformation a Germano]] (da rivedere e inviare)
- [ ] **#p1** [[Federico Saladino (Soolutions)|Federico]]: validare architettura/brief prima dell'invio a Germano
- [ ] **#p1** Carlo: organizzare call con [[Carmen Compare|Carmen]] (settimana prossima) per **ingestion dati storici** (Carmen sta già pulendo i dati) — copre anche modello predittivo [[Eye Cookies]]
- [ ] **#p1** Carlo ↔ [[Carmen Compare|Carmen]]: re-sync lunedì 8/6 su esito **visita BAT in sede (venerdì 5/6)** + escalation [[Massi Sinigaglia|Massi]] per sblocco API BAT/PARD
- [ ] **#p1** Carlo + [[Massi Sinigaglia|Massi]]: conferma formale prioritizzazione **registrazione dati** vs modello predittivo (via email a Germano+Massi)
- [ ] **#p2** [[Carmen Compare|Carmen]] (NoLoop): preparare 2-3 dubbi sulla struttura dati dello storico da esporre a Fed+Simone per l'ingestion
- [ ] **#p2** [[Germano Marano|Germano]] (NoLoop): verifica interna stato API BAT (esistono / perché non esposte) + interesse BAT al modulo tracking prodotti per i tabacchini _[update 11/6: feedback preliminare NON positivo su apertura form/API; Massi non risponde nonostante la richiesta; risposte attese settimana prossima; direzione probabile scraping sia BAT che PARD]_
- [x] ~~**#p2** "I Love Ric" — nuovo pop-up nel perimetro NOT~~ → ✅ chiuso 2026-06-04: Germano conferma è attivazione make-up ad Arese in chiusura tra ~1 mese → **fuori dal perimetro di progetto**

## Eventi chiave

- 09/04 — Allineamento Operations + Eye Cookies (con Massi)
- 16/04 — Kick-off NOT | Operations & Eye Cookies (Carlo organizer)
- 27/04 — Andrea inoltra documentazione + 3 fatture di cortesia a Roberta Calajò
- 27/04 — Roberta chiede conferma: fatture intestate a NOLOOP anziché NOT?
- 30/04 — Justin: "concreto rischio che non ce le diano (le API)"
- **2026-05-07** — Carlo: email Justin (API/piano B) inviata, push BAT API fatto, allineamento via Carmen Compare completato (conferma chat 7/5; task chiusi in batch reconciliation)
- **2026-05-14** — Email reminder Carlo a Justin (CC Carmen+Laila) inviata; Justin risponde stesso giorno confermando 15/5 e pressing BAT; Carlo controreplica proponendo shift a martedì 19/5 + condivide indirizzo spedizione prodotti Operation Transformation
- **2026-06-01** — Call "Allineamento richieste tecniche" Carlo↔[[Carmen Compare]] (50 min): Carmen confermata referente ingestion dati; **API BAT/PARD ancora 0** → escalation visita BAT in sede ven 5/6 + [[Massi Sinigaglia|Massi]]; impostato approccio prototipo "form unico" su app NOT esistente (no effort extra, dentro €109K)
- **2026-06-04** — Prima call ricorrente bisettimanale OT (Carlo + Federico + [[Germano Marano]]; Massi assente): Germano referente tecnico NoLoop; POC dev mostrato; **prioritizzazione registrazione dati > predittivo** (da confermare via email Germano+Massi); I Love Ric fuori perimetro; deadline settembre, delivery unica con Eye Cookies

## Sessioni Cowork correlate

- 2026-05-07 — batch reconciliation 3 task (email Justin · push BAT API · allineamento Carmen Compare) → [[80 - Sources/Cowork Sessions/2026-05-07 - Indice sessioni#Sessione 1 — Review open tasks summary]]
- 2026-05-13 — `local_af2ea6af` — Email recap interno Federico+Simone (riscrittura Carlo): bonifico Soolutions su NOT **GATED** all'Excel cash-flow di Andrea ↔ Elena Soolutions ("appena decidiamo la formula pagamenti vi giriamo il bonifico"). Comunicazione proattiva cliente "siamo ufficialmente partiti" a Massi+Justin questa settimana. Push lato Justin sulle API BAT/PARD resta owner Carlo. → [[80 - Sources/Cowork Sessions/2026-05-13 - Indice sessioni#Sessione 5 — Write recap email and update tasks (Federico+Simone allineamento interno)]]
- 2026-05-14 — `local_e235b7fe` — Email reminder Justin (CC Laila+Carmen) inviata: thread 3 round (Carlo→Justin reminder · Justin risposta conferma deadline 15/5 + pressing API · Carlo controreplica shift a 19/5 + indirizzo spedizione + ingestion storico in capo a Carmen). Pattern stile "Reminder mail — pattern compatto" estratto da rewrite Carlo → propagato in CLAUDE.md §2.1 (apertura `vi scrivo solo per un reminder veloce`, parentesi corte `(qui sotto)`, append topic con `+ tema X in capo a Y`, taglio doppia offerta supporto/call, chiusura condensata, `!` finale). 3 nuovi task pending: attesa conferma shift 19/5 (#p1) · attesa Laila (#p2) · attesa referente ingestion storico (#p1). → [[80 - Sources/Cowork Sessions/2026-05-14 - Indice sessioni#Sessione 5 — Draft reminder email to Justin and team (Operation Transformation API BAT/PARD)]]
- 2026-05-21 — `local_832269f2` — Process call transcript Federico+Simone: messaggio Simone su NOT/Microlog — scheletro applicativo + struttura base in **fase avanzata**, backup dati pregresso già fatto, alert tempistico esplicito *"a breve serviranno indicazioni più puntuali per procedere correttamente con l'implementazione"*. Sequenza-call HeyAI+On Trade NoLoop+Microlog+team dev passa da intenzione Carlo a **richiesta operativa del team di sviluppo**. → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 7 — `local_832269f2-036d-4b0f-89f6-b804bb1586d2` — Process call transcript with Federico and Simone]]
- 2026-05-21 — `local_51b0ba93` — Paolo project recap and contract review (collaterale): rettifica frontmatter status Operation Transformation — **"contratto emesso ma NON firmato da Donzelli + acconto fatturato e incassato comunque"** (era erroneamente "contratto firmato" fino al 20/5). Anomalia analoga a pattern Wave 2 Art. 1.4 efficacia retroattiva. Da formalizzare sottoscrizione prima delle tranche successive. → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 5 — `local_51b0ba93-be43-4c2e-a396-4ba3546819fc` — Paolo project recap and contract review]]
- 2026-06-01 — `0593b7a7` (Code) — processata call NOT "Allineamento richieste tecniche" (1/6, referente Carmen Compare): recap PM + nota performance Carlo. Decisioni locked: Carmen referente ingestion dati (sblocca attesa 14/5), documento campi Form completo/invariato, prototipo "form unico" su app NOT esistente dentro €109K senza extra, blocco campi obbligatori al submit, no email recap post-call. Prossimi: mer 3/6 allineare dev (priorità #1 integrazione piattaforme), call dati con Carmen (copre anche Eye Cookies), ven 5/6 visita BAT + escalation Massi API, lun 8/6 re-sync → se API ferme attivare RPA (manutenzione esclusa = Change Request). Decisioni in capo a Carlo: tagliare VoIP, valutare riempimento dati randomici (degrada modello), "I Love Ric" stand-by. _Edit nel worktree nervous-shannon — ✅ merge effettuato nel main 6/6/2026 (F2 Fase 2)._ → [[80 - Sources/Cowork Sessions/code-recap/2026-06-01 - claude-wt-nervous-shannon-0593b7a7|claude-wt-nervous-shannon (0593b7a7)]]
- 2026-06-08 — `5acfac52` (Code) — follow-up call OT 4/6: bozza email a [[Germano Marano]] (stile PM/commerciale calibrato su email reali Carlo) + ricreazione doc "As-Is vs To-Be" pulito (rimossi tutti i residui economici, verificato via estrazione testo + zoom diagrammi) condivisibile col team di sviluppo; ragionamento leva API BAT/PARD (no API pubbliche → valutare esposizione propria). → [[80 - Sources/Cowork Sessions/code-recap/2026-06-08 - claude-wt-wizardly-mirzakhani-5acfac52|claude-wt-wizardly-mirzakhani (5acfac52)]]
- 2026-06-08 — `2043e8b6` (Code) — review di sicurezza bozze Contratto Quadro HeyAI↔team di sviluppo + OE OT: 5 nodi critici pre-firma (entità NOT vs NoLoop incoerente, contratto cliente non firmato, cap responsabilità art. 12.1, royalty art. 6.2-6.3, GDPR). Numeri OE (€55K fornitore, cost-ratio 50%) committati in-sessione nel Master Facts/Log. → [[80 - Sources/Cowork Sessions/code-recap/2026-06-08 - claude-main-2043e8b6|claude-main (2043e8b6)]]

## Log

### 2026-06-11 — Review risposta email Germano (9/6, note inline) al recap OT dell'8/6
- Note inline di [[Germano Marano|Germano]] (email 9/6 14:20): **API BAT/PARD** → *"stiamo facendo gli approfondimenti necessari, durante il prossimo avanzamento dovrei avere tutto chiaro"* (poi anticipato in call 11/6: feedback preliminare negativo, v. entry sotto); **dati/ingestion** → *"coinvolgetemi pure se ritenete utile"*; **documentazione** (RL + brief) → ringrazia.
- **Punto NON risposto: conferma interna NOT sulla prioritizzazione** maschera unica vs ingestion storico → resta aperto, da chiudere al prossimo avanzamento (ora unificato EC+OT).
- In capo a HeyAI dal recap 8/6: **doc proposta multi-SIM da girare a Germano** + organizzazione **call Carmen** per ingestion storico (in settimana).

### 2026-06-11 — Coda OT nella call bisettimanale Eye Cookies: form/API BAT in stallo, direzione scraping
- In coda alla call Eye Cookies dell'11/6 (Carlo + [[Germano Marano|Germano]] + Federico + Simone — trascrizione in `80 - Sources/Files/Eye Cookies/`): **feedback preliminare NON positivo sull'apertura form/API BAT** (Germano: *"abbiamo già qualche feedback che non è positivo, ne parleremo settimana prossima"*). Massi è l'unico interlocutore su BAT e PARD e **non risponde nonostante la richiesta** (Germano: *"se aspettiamo questi che rispondono passa una vita"*); seconda interlocuzione attesa settimana prossima.
- **Direzione emergente: web scraping per entrambi i flussi (BAT e PARD)** — Germano: *"la meno precisa, la meno sostenibile, la meno pulita... però se vogliamo automatizzare, quella è l'unica soluzione"* (l'esposizione di API lato NOT non risolve se BAT non va a prendersi i dati, e i form resterebbero onere NOT). Federico: il team è molto forte sullo scraping (*"riusciamo a prendere per il naso LinkedIn con gli antibot"*), BAT è target più semplice di LinkedIn; rischio = manutenzione (se cambiano la pagina va rifatto il sistema); chiedere a BAT almeno un preavviso sugli aggiornamenti pagina. Nessun lavoro anticipato fino alle risposte di Massi.
- **Connettività multi-SIM** (utilità principale OT, operatori in store con connessione instabile): soluzione tecnica presentata in call (dual SIM / SIM bianca + edge server / SIM operatore — dettaglio in [[Eye Cookies]] Log 11/6); la definizione dell'esigenza passa da una **call Carlo + Germano + [[Carmen Compare|Carmen]]** (Carlo chiede disponibilità oggi pomeriggio).
- **Governance**: i bisettimanali EC e OT si **unificano in una sola call** con entrambi i temi (decisione Carlo+Germano in call). Prossimo punto: settimana prossima.

### 2026-06-09 (pomeriggio) — Allineamento team interno HeyAI (Bruno + Carlo + Michele + Andrea; 1h19m)
- **Condizione vincolante posta da Bruno sui modelli AI (NUOVO, estende la call fatture del mattino)**: oltre al codice sorgente, Soolutions deve fornire **la specifica di quale LLM/modello open-source di base è stato usato** e le **specifiche tecniche per il (ri)training**, così che **un terzo sviluppatore competente possa ritrainare il modello** su nuovi prodotti/categorie senza Soolutions. Ragionamento di Bruno: *"il problema io lo vedo più nostro che NoLoop — il cliente è nostro; se NON litighiamo col cliente ma smettiamo di lavorare con gli sviluppatori, dobbiamo essere in grado di trovare un altro sviluppatore che faccia il training, sennò il contenzioso si crea tra noi e il cliente"*. Il lock-in è **rischio HeyAI**, non NoLoop.
- **Limite della cessione confermato in call**: i modelli (riconoscimento prodotti via scansione + predittivo posizionamento scaffali) sono LLM/open-source di base + layer di regole algoritmiche custom di Soolutions ("se nell'angolo in alto a destra c'è questa lettera allora…"). Cedibile l'algoritmo/ecosistema, non l'LLM sottostante. Se il cliente cambia categoria merceologica (es. da scatole a quadri/scarpe) il modello va ritrainato da zero sui nuovi prodotti; il training fatto sui prodotti attuali **resta al cliente** (Soolutions confermato: *"assolutamente no, non perdono il training sui loro prodotti"*). Senza il modello aggiornato il sistema degrada (riconoscimento più macro, meno preciso), non si blocca.
- **Azione Carlo (decisione)**: mettere **nero su bianco** la condizione vincolante via **email a Soolutions** — *"qual è per noi la condizione sine qua non"* (consegna spec modello base + spec per training di terzi) — e attendere conferma scritta. Se non confermano, si riapre il punto. → si salda con il task "lista componenti terze non cedibili" già aperto (ora deve includere anche la **spec del modello base per il retraining di terzi**).
- **Acconti NOT confermati incassati**: sia Operation Transformation sia [[Eye Cookies]] hanno acconto **fatturato e pagato** (conferma Andrea+Bruno in call).
- **Contratto cliente OT**: Andrea conferma che la bozza inviata non è mai tornata controfirmata → **si può modificare**. Sequenza decisa: Soolutions rivede/sistema Accordo Quadro + OE e aggiunge l'aspetto tecnico IP-modelli → poi quei documenti diventano base per sistemare il contratto cliente OT (e crearlo ex novo per Eye Cookies).
- 📎 Fonte: trascrizione `Allineamento di Team.docx` (9/6 ore 15:07, 1h19m). Riunione interna multi-progetto (Eldis, BCC/Crowd, Wave 2, FuturItaly/Angelini, Osservatorio, NOT, Achipont, admin) — fatti propagati nelle rispettive schede.

### 2026-06-09 — Call "Soolutions — Allineamento fatture" (Carlo + Andrea Pazienza + Federico + Simone + Elena Soolutions; 27 min)
- **Oggetto**: nata come call operativa per allineare la **dicitura in fattura** (Elena Soolutions, amministrazione/licenze) ma è diventata l'allineamento sostanziale sul **perimetro della cessione IP** in vista della firma del Contratto Quadro + OE. Risponde direttamente al nodo critico #4 della [[2026-06-08 - Review Contratto Quadro + OE Soolutions|review 8/6]] (royalty/riuso art. 6.2-6.3) e fa avanzare Open Q #29.
- **🔑 Perimetro IP chiarito (decisione condivisa)**: Soolutions **cede l'IP di tutto l'ecosistema gestionale 100% custom** (frontend, backend, bridge, integrazioni, automazioni costruite ad hoc per il cliente) **ma esclude i modelli AI** — i **modelli predittivi matematici** e i **modelli di riconoscimento immagine** (riconoscimento prodotti/scaffalaggio). Motivo: sono basati su componenti **open-source/pre-esistenti** che Soolutions riusa e ha già sviluppato per altri progetti → non cedibili come IP (analogia di Federico: "è la stessa cosa di Microlog, che la proprietà delle telecamere non la può cedere; cede l'integrazione e il bridge, non il prodotto proprietario").
- **🔑 Diritti del cliente sui modelli (NO vendor lock-in sostanziale)**: il **checkpoint/modello trainato è consegnato al cliente con uso ILLIMITATO e a vita** ("noi glielo diamo con uso illimitato… il discorso è solo sull'evolutivo e sugli aggiornamenti", Simone). Anche in caso di rottura del rapporto il cliente **continua a usarlo e a ritrainarlo** (auto-retrain già previsto per aggiungere/togliere prodotti dal catalogo, req. RL — automazione foto → retraining). Il modello gira **in locale** (no API anthropic/openai/google vision), è importabile da terzi se compatibile TensorFlow. Il vero lock-in è **solo sull'evolutivo**: per una **nuova tipologia merceologica** (es. da packaging/scatole a orecchini) serve un modello nuovo → si paga Soolutions o un terzo. Soluzioni fornite "viste e piaciute" con tempo ragionevole di revisione; modifiche su nuovi use case = lavorazione a pagamento, non gratis.
- **🔑 Decisione fatturazione**: la fattura farà **riferimento all'Ordine Esecutivo firmato** (no elenco di molte voci) → "fattura da OE firmato in data del…, prima tranche". La **cessione IP avviene al saldo dell'ultima/terza tranche**, da riportare in modo **ridondante** sia in fattura sia in contratto (conferma e rafforza l'art. 8.5 CQ, cessione sospensivamente condizionata al pagamento).
- **Azione Carlo↔cliente**: Federico/Simone produrranno una **lista delle componenti tecniche di terzi/open-source su cui NON si può cedere l'IP** (+ cosa è cedibile vs strumenti terzi nel processo) → serve a Carlo per interfacciarsi con [[Germano Marano|Germano]]. Da comunicare al cliente che i modelli AI di base restano non cedibili (ma uso illimitato garantito).
- **Documenti**: Andrea invia a Soolutions (Elena, in chat) i **3 documenti** (Accordo Quadro + scheletro OE + OE Operation Transformation) per review; Soolutions li legge e segna punti/integrazioni. I **numeri nei documenti sono placeholder**, da decidere insieme (tempistiche, importi, penali ritardo). Carlo: *"non ci saranno ritardi di delivery in questi progetti"*.
- **Nuovo tool delivery (Simone)**: gestionale di commesse (web app) — carica il requirement log → genera requisiti/to-do list, traccia stato (verde = chiuso), budget, **tranche di pagamento** e **licenze** (testo riusabile per le fatture). Va su server di produzione; Carlo avrà accesso + link MCP/CLI con skill per scriverci dentro (es. caricare RL, aggiornare task via Claude). Andrea: meglio **CLI** che MCP per non consumare token; Federico: a tendere sostituibile con agente cloud. → potenziale evoluzione della [[99 - System/Workflow Delivery Soolutions|Delivery Board]].
- 📎 Fonte: trascrizione `Soolutions _ Allineamento fatture.docx` (9/6, 27 min). Nota: la trascrizione di Andrea è partita ~10 min dopo l'avvio.

### 2026-06-08 — Bozza Contratto Quadro HeyAI↔Soolutions + Ordine Esecutivo OT (review di sicurezza)
- **Prodotte le bozze contrattuali fornitore** (Carlo le ha caricate per review): `Contratto_Quadro_HeyAI_Soolutions.docx` + `Ordine_Esecutivo_modello_base.docx` + `Ordine_Esecutivo_NOT_Operation_Transformation.docx`. Formalizzano l'IP finora solo verbale (Open Q #19/#29).
- **Numeri OT dall'OE**: corrispettivo Soolutions **€55.000 + IVA** (tranche 22K / 16,5K / 16,5K su M1/M2/M3), pay-when-paid agganciato all'incasso dal cliente. Su €109K cliente = **cost-ratio 50%, margine €54K** ✅ entro policy §2.2. *Il €55K non era prima registrato nel Master Facts (ora aggiunto alla riga OT).*
- **IP**: regime selezionato (C) cessione al Cliente via doppia cessione Fornitore→HeyAI→Cliente (art. 8.8 CQ), sospensivamente condizionata al pagamento (art. 8.5).
- **Natura ricognitiva** (art. 15 CQ): l'OE copre attività già avviate (Discovery). Allegato 4: "pagamenti al Fornitore alla data: nessuno".
- **Review di sicurezza** con 5 nodi critici pre-firma → [[2026-06-08 - Review Contratto Quadro + OE Soolutions]]: (1) **entità cliente NOT vs NoLoop incoerente** — l'OE dice "NOLOOP S.r.l." ma le fatture OT sono intestate a NOT (entità separata); (2) **contratto cliente OT ancora bozza non firmata** su cui poggia la catena di cessione IP; (3) cap responsabilità art. 12.1 "[una/due] volte" da scegliere; (4) royalty/riuso art. 6.2-6.3 vs modello scaling; (5) GDPR (contraddizione DPA sub-responsabile vs esclusione E.2 del Requirement Log).

### 2026-06-04 — Call allineamento bisettimanale OT (Carlo + Federico + [[Germano Marano]]; Massi assente)
- **Prima call della ricorrente bisettimanale "Operation Transformation | Allineamento"** (mer 15:30-16:15, Teams; previsti Germano+Massi lato NOT, Federico+Simone lato dev, Carlo organizer). 30 min. Germano è il **referente tecnico NoLoop** ma "nuovo": non aggiornato sulle discussioni pregresse con Carmen/Massi (_"mi è stato solo detto occupati del progetto"_) → Carlo lo allinea via email.
- **Approccio soluzione**: generica, dinamica, **future-proof e agnostica ai prodotti** (oggi MyGlow/sigarette elettroniche, domani altri brand/categorie senza nuove integrazioni). Federico ha chiesto più materiale possibile del catalogo.
- **API BAT/PARD (bloccante)**: non risultano API pubbliche; secondo Federico esistono solo a uso interno BAT. BAT raccoglie i dati di vendita, PARD i dati statistici → da qui la tripla compilazione. Push finora solo via Justin, senza esito. Germano: _"se ci mettiamo nelle mani di BAT… ci finiamo fra due anni e mezzo"_. **Idea Germano**: valutare se esporre NOI le API (piattaforma agnostica + potenziale prodotto vendibile a BAT). La registrazione prodotto è legata alla scontistica BAT → interesse del cliente a registrare (leva).
- **POC / demo Federico**: primo prototipo funzionante (web app/PWA installabile): dashboard prodotti (scrape dal sito), inventario/giacenze, carico con codice univoco prodotto (anti-furto, seriale tipo IMEI → blocca furti personale part-time), **vendita con riconoscimento prodotto via computer vision** (modello fine-tuned, gira in locale sul telefono) + scansione seriale + blocco doppia vendita. Per prodotti con barcode standard (make-up) gestione semplice senza AI. Touch point venditori = l'app, con login → tracciamento performance/orari + possibile timbratura.
- **Documentazione**: Carlo gira a Germano Requirement Log + brief discorsivo + (se la trova) slide architettura, così Germano riporta a Massi/Carmen. **Federico valida l'architettura prima dell'invio**.
- **Prioritizzazione registrazione vs predittivo**: su indicazione Carmen/Massimiliano la **registrazione/inserimento dati (form unico)** passa davanti all'**ingestion storico 5 anni → modello predittivo** (era la Fase 1 pensata). Da **confermare formalmente via email da Germano + Massi**.
- **Ingestion dati**: call con Carmen settimana prossima; Carmen sta già **pulendo i dati** così Fed+Simone procedono subito dopo.
- **Connettività (multisim)**: Germano valuta con Carmen quanto è impattante; gli mandiamo la soluzione.
- **DECISIONE — I Love Ric fuori perimetro**: Germano chiarisce che è un'attivazione make-up ad Arese, iniziata 2 mesi fa, in chiusura tra ~1 mese → **non si implementa nel progetto** (supera lo "stand-by" del 1/6).
- **Opportunità**: il modulo tracking prodotti anti-furto è agnostico → Germano verifica interesse interno BAT per estenderlo ai tabacchini.
- **Deadline**: settembre, delivery unica Eye Cookies + Operation Transformation in parallelo.
- **Perimetro Totem**: la proposta Totem (kit multi-SIM) è ragionata nello stesso tavolo Germano+Massi ma resta **scope [[Eye Cookies]], NON Operation Transformation** (solo cross-ref).
- **Logistica spedizione prodotti**: coordinamento delegato al contatto diretto **Federico ↔ Laila** (Carlo presenta Federico come ricevente all'indirizzo già condiviso, no naming fornitore).
- 📎 Fonte: trascrizione `Operation Transformation _ Allineamento bisettimanale.docx` (call 4/6, 30 min). Performance → [[30 - Areas/Area - Performance & Coaching/2026-06-04 - Carlo Performance — Call Operation Transformation bisettimanale]].

### 2026-06-01 — Call "Allineamento richieste tecniche" Carlo ↔ [[Carmen Compare]] (50 min, Teams)
- Allineamento tecnico Modulo Vendite + ingestion dati. Sintesi (parte non riservata):
  - **Carmen confermata referente ingestion dati** per [[Federico Saladino (Soolutions)|Federico]]+[[Simone Montanari (Soolutions)|Simone]]: possono fare riferimento a lei per la parte dati. Carlo organizza la call dati col team dev. → chiude l'attesa "referente NoLoop per ingestion storico" aperta dal 14/5.
  - **Documento campi Form confermato completo e invariato** (screen inviati da Carmen): riferimento per lo sviluppo.
  - **Qualità dati storici**: vendite ancorate a codice univoco (1 codice = 1 vendita) → affidabili sul totale; possibili errori su modello/colore/data. Carmen prepara 2-3 dubbi sulla struttura cartelle per Fed+Simone.
  - **API BAT/PARD ancora 0** — Justin non ha sbloccato nulla; BAT "è come un ministero". Nuova leva: NOT in sede da BAT **venerdì 5/6** → pressing in loco + **escalation via [[Massi Sinigaglia|Massi]]**. HeyAI disponibile a spiegare a BAT l'uso dati in ambienti protetti. **Lunedì 8/6 re-sync** Carlo↔Carmen. Senza API si procede con RPA (più fragile) → conviene a NOT ottenere le API.
  - **Approccio prototipo "form unico" (dentro roadmap €109K, senza effort extra)**: partire dall'**app NOT esistente** (Excel a step) come base, aggiungendo i campi Form BAT+PARD → registrazione su **una sola piattaforma** invece di tre. Poi: (1) alert campi mancanti allo scarico; (2) [[Carmen Compare|Carmen]] admin corregge e lancia; (3) riconciliazione magazzino↔POS. **Step successivo**: app HeyAI con **scansione prodotto** (computer vision online/offline) sostituirà l'app NOT. Posizione Carlo: tenere la roadmap, niente costi extra.
  - **Blocco campi obbligatori** al submit. Carmen: senza blocco è "certezza matematica" che i promoter saltino campi.
  - **Prossimo passo Carlo**: mercoledì 3/6 allinea Federico+Simone (priorità integrazione piattaforme); comunica Carmen come referente. **Nessuna email di recap inviata** (scelta Carlo).
- ⚠️ **Nota riservatezza**: la call ha toccato temi operativi riservati, esclusi dal log su scelta esplicita di Carlo (no recap, no registrazione). Analisi gestione rischio (senza how-to) → [[30 - Areas/Area - Performance & Coaching/2026-06-01 - Carlo Performance — Call NOT Allineamento richieste tecniche (Carmen)]].

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
- **3 task chiusi in batch reconciliation** (conferma Carlo chat 7/5): email check-point Justin inviata, push BAT API native completato, allineamento Justin via Carmen Compare fatto. Bozza email in [[50 - Archive/Inbox/2026-05/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD)]] confermata come testo inviato. Stato delivery NOT modulo Vendite ora dipende dalla risposta di BAT/PARD.

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

> "se ci mettiamo nelle mani di BAT che deve sviluppare delle API, se non ce le hanno ci finiamo fra due anni e mezzo"
> — **[[Germano Marano]]**, 04/06/2026 (rischio dipendenza da BAT sulle API → spinge per un'alternativa nostra)

> "io sono parte del team, dai"
> — **[[Germano Marano]]**, 04/06/2026 (chiusura call — si posiziona come alleato interno)

> "voi che siete magici con la tecnologia, secondo te si potrebbe automatizzare questo inserimento?"
> — **[[Carmen Compare]]**, 01/06/2026 (richiesta automazione inserimento vendite)

> "l'integrazione con le piattaforme esterne e quindi la possibilità di fare un'unica compilazione e poi automatizzare il resto, è la priorità in assoluto. E partiamo da quello"
> — **Carlo**, 01/06/2026 (priorità sviluppi NOT, con mandato di Massi)

## Pattern operativi NOT

- **Triplete BAT/Sharpend/PARD** è la **vera dolosità** — non la mancanza di tecnologia, ma la frammentazione obbligata
- **Massi MD** è sponsor commerciale forte ma **decisione finale resta Paolo Donzelli** (CFO firma contratti)
- **Justin in trincea** sulle API: lavorare "ai fianchi" del cliente, non frontale
- **Modello revenue share soft**: NOT guadagna commissioni dai clienti, HeyAI è dev shop con quota di delivery
