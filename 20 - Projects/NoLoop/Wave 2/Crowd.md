---
type: resource
product: Crowd
client: NoLoop
status: in-production-evolving
created: 2026-04-30
updated: 2026-05-20
aliases: ["NoLoop Crowd", "NoLoop Claude (errore typo)"]
---
<!-- auto-updated by cowork-sessions-index 2026-05-20 20:22 (cron-22) | source-session: local_1653abdf-0f2f-42cd-8125-3c9edf17b324 | source-lastActive: 2026-05-20 -->
<!-- atomic-change updated: 2026-05-13 → 2026-05-20 | session: local_1653abdf -->


# 📚 Crowd

> Prodotto interno HeyAI: **piattaforma di gestione eventi end-to-end** (registrazioni, liste, comunicazioni WhatsApp/email, dashboard, agente WhatsApp).
> Parte della suite [[Area - AI Solutions (Prodotti Interni)|AI Solutions]] e dell'ecosistema NoLoop 2026.
>
> _Alias storici nelle chat: **"NoLoop Claude"** (errore battitura/dittatura → NoLoop Crowd)_

## Stato

- **Wave 1**: ✅ in produzione
- **Wave 2 — Crowd Integrazione Incassi**: 🟢 Active, delivery entro fine maggio (parte del bundle [[_Wave 2 NoLoop|Wave 2 NoLoop]] €15.000)

## Funzionalità Wave 2 (Integrazione Incassi)

- Sistema pagamenti integrato (Stripe) per incassi dai partecipanti evento
- Posiziona Crowd come **prodotto in subscription vendibile ad altre agenzie eventi**
- NoLoop diventa partner commerciale → revenue stream ricorrente

## Stakeholders NoLoop

- [[Arianna Giordanella]] — PM operativo, UAT Crowd
- [[David Fasulo]] — NoLoop
- [[Lorena Cavecchi]] — Operations
- [[Simone Montanari (Soolutions)]] — partner design

## Eventi calendario

- 24/04 — `Crowd — Sessione di allineamento` (Carlo organizer, demo + raccolta feedback)
- ~~6/05 — `Crowd Sessione Finale Test`~~ → **spostata a martedì 12/5** (Lorena rientrata, si fa con tutti i decisori in stanza)
- **12/05 — Sessione finale Crowd**: ✅ svolta 13:34-15:01 (1h27m) con David Fasulo + Federico Saladino + Arianna Giordanella (Lorena assente). Demo wave nuove modifiche email/landing/roaming OK; restano piccoli fix + edit bulk in rilascio entro 13/5 pomeriggio; OK formale subordinato a test end-to-end completo lato NoLoop entro ~10 giorni → target chiusura Wave 1 fine maggio

## Note

- Sessione del 24/04 includeva demo e ripercorrimento procedure operative
- Enhancement confermati per "venerdì prossimo" dopo sessione 24/04
- 27/04 — Calendar acceptance da Simone Montanari (Soolutions/Tokio)
- **6/05 — Sessione spostata a 12/5**: Lorena rientrata, Carlo registra video breve su grouping e roaming da mandare in anticipo per lasciare la call alle funzioni più ostiche
- **6/05 — Email provider / wildcard**: setup avanzato. Wildcard configurata su `apps.noloop.eu` — tutte le app future vanno sotto quel dominio senza ulteriori configurazioni IT. Crowd già attivo su `crowd.noloop.eu`

## Task aperti

- [x] **#p1** **Federico** (era Carlo, riassegnato 7/5): chiusura feature mancanti entro la sessione del 12/5 (preferibile prima) — chiuso: tutta la wave consegnata e demo passata in call 12/5 ("Federico è stato buono, ce le ha consegnate tutte" — Carlo 1:32:13)
- [-] **#p1** **Federico** (era Carlo, riassegnato 7/5): registrare video grouping + roaming, mandarlo in anticipo prima della sessione 12/5 — superato: roaming spiegato live in call 12/5, David ha confermato di averci messo le mani e di aver capito
- [ ] Verificare implementazione enhancement (rilascio post 24/04)
- [ ] **#p1 Federico**: deploy in serata 12/5 (al massimo entro 13/5 pomeriggio) delle modifiche di questa wave — pipeline issue dichiarato in call da risolvere subito
- [ ] **#p1 Federico**: edit/bulk edit valore campo per filtro o gruppo (1-2 ore stimate)
- [ ] **#p1 Federico**: modalità salvataggio ospite anche con campi obbligatori non compilati (god mode segreteria — richiesta David)
- [ ] **#p2 Federico**: fix piccolo bug rendering formattazione preview landing (in live OK, solo preview)
- [ ] **#p1 Carlo**: bozza email recap a David Fasulo + Lorena Cavecchi + Arianna Giordanella (CC Federico + Simone) con punti operativi finali + setup IT — bozza in [[00 - Inbox/2026-05-12 - BOZZA Email Recap Crowd Sessione Finale]]
- [ ] **#p1 Carlo + Simone**: chiusura setup email base produzione (un mittente unico no-reply + un indirizzo di back-office per le risposte, entrambi sotto dominio `@noloop.eu`). Push già inviato da Simone ai sistemisti NoLoop il 13/5 mattina via email ("Ciao ragazzi, vi scriviamo perché internamente ci stanno chiedendo aggiornamenti per riuscire a chiudere i dettagli DNS. Avete per caso novità a lato vostro?"). **Owner: HeyAI**, Lorena non coinvolta — il blocco è tecnico (DNS migration tra il vecchio e il nuovo provider IT NoLoop, i due team non si stanno coordinando), non commerciale.
- [-] ~~**#p1 Federico + Simone**: stima da consegnare a Carlo per le due modalità di personalizzazione setup email per evento — (a) consulenza dedicata, (b) CR pannello configuratore interno~~ → superato 20/5: collassato su strada (a) consulenza per evento. Solo strada (a) sopravvive — la CR pannello non si fa (procedura semiautomatica per natura, non vale lo sviluppo dell'IDE). Vedi nuovo task #p1 Federico+Simone "quotazione consulenza con voci dettagliate" sotto.
- [ ] **#p2 Carlo (nota interna, non per cliente)**: tenere traccia della clausola "errori derivati dall'utilizzo della modalità godmode admin (salvataggio ospite con campi obbligatori non compilati, override validazioni) non sono bug del sistema". Richiesta esplicita di Federico in call interna 13/5 ore 21:05: serve quando un domani NoLoop solleva un'eventuale contestazione su un'operazione che ha forzato un errore di validazione.
- [ ] **#p2 Federico**: tre enhancement parcheggiati dal Requirement Log Wave 1, riaperti 14/5 perché Federico chiede chiarimenti via WhatsApp:
  - **Chiave univoca composita nel re-import**: oggi il match al re-import usa solo la mail come chiave singola → su mail condivise (coniugi, mail aziendali generiche, mail famiglia) il sistema crea duplicati o sovrascrive il record sbagliato. Richiesta: permettere all'admin di scegliere una chiave composita di N campi (es. mail + cognome, o nome + cognome + ragione sociale) come chiave di matching.
  - **ID interno ospite nell'export Excel**: oggi l'export non porta l'identificativo univoco interno di Crowd → quando il cliente esporta, fa modifiche offline e reimporta, il match resta esposto al problema della chiave singola. Soluzione: aggiungere colonna "ID Crowd" nell'export per garantire round-trip Excel ↔ Crowd sicuro.
  - **Interfaccia import per grandi numeri — tre tab**: NoLoop lavora su eventi 1500-3000 ospiti, oggi non c'è anteprima validabile pre-commit del re-import. Richiesta: UI a tre tab — "Nuovi" / "Modificati" (con evidenza delta) / "Mancanti" (da cancellare o ignorare) — prima della conferma dell'import.
  - Fonte originale: tabella "DETTAGLIO SVILUPPI — NOLOOP CROWD" sezione "Import, Export e Gestione Dati" (chat "Email con tono economico e allegati Gantt", righe 2794-2797). Carlo ha mandato la spiegazione punto per punto via WhatsApp a Federico 14/5.
- [ ] **#p2 Carlo + Federico**: pensata su email automatica di conferma post-registrazione — Carlo dichiarato in call **"extra fuori scope iniziale"** (1:21:03), tornare a David con proposta semplice (mail unica triggerata al register, casistiche differenziate via gruppi)
- [ ] **#p1 David Fasulo (NoLoop)**: test completo evento end-to-end entro ~10 giorni → target OK formale entro fine maggio 2026 + sblocco saldo Wave 1
- [ ] **#p1 David Fasulo (NoLoop)**: confronto con Lorena su email automatica conferma — necessità reale + decisione perimetro

## Product Description (cliente-ready)

> Per ogni descrizione di Crowd verso esterno (gare, brochure, pitch, email cliente) → fonte autoritativa: [[Crowd — Product Description]] (creata 21/5/2026, derivata da Requirement Log SharePoint 48 REQ + 3 PDF Proposta + scheda OnSite). Contiene 3 versioni paste-ready (50 / 150 / 300 parole), mappa Wave 1 vs Wave 2, e vocabolario cliente vs interno. **Non improvvisare descrizioni di Crowd**: parti da quella scheda.

## Chat Claude.ai correlate

- "Progetto piattaforma gestione eventi Crowd" (24/04→27/04)
- "Minute call Crowd e NOT" (26/02)

## Chat Teams correlate (in `80 - Sources/Teams/`)

- [[2026-04-24 - Chat Crowd post-demo]] — chat Teams post-demo Crowd 24/04 (feedback rooming, scope da approfondire)

## Sessioni Cowork correlate

- 2026-05-20 — `local_1653abdf` — Review emails and draft three responses: forward bug list Arianna a Federico+Simone (Generali OGGI urgenza) + risposta a Marco Merli chiusura DNS Crowd post-Nicolò + rimando chiusura formale a migrazione Havant settimana 18-22/5. → [[80 - Sources/Cowork Sessions/2026-05-20 - Indice sessioni#Sessione 4 — `local_1653abdf-0f2f-42cd-8125-3c9edf17b324` — Review emails and draft three responses]]
- 2026-05-06 — Prep sessione finale (framing chiusura Wave 1 + ganci Wave 2 Crowd Integrazione Incassi) → [[80 - Sources/Cowork Sessions/2026-05-06 - Indice sessioni#Sessione 6 — Prepare demo call introduction script]]
- 2026-05-07 — riassegnazione 2 task tecnici a Federico (video grouping + chiusura feature Crowd) → [[80 - Sources/Cowork Sessions/2026-05-07 - Indice sessioni#Sessione 1 — Review open tasks summary]]
- 2026-05-12 — `local_489f7e41` — Recap sessione finale test Crowd 12/5 (con David Fasulo + Lorena + Arianna): produzione bozza email recap CC Federico+Simone, definito target "test end-to-end NoLoop entro fine maggio + OK formale Wave 1 + saldo Wave 1". Federico rilascia ultime modifiche tra 12/5 e 13/5 (edit/bulk edit + god mode + preview landing fix). 4 punti aperti da allineare con Lorena (email auto conferma, editabilità pop-up, reportistica avanzata, DUS vs doppia export). Setup email IT da riallineare Simone↔Marco (sistemisti NoLoop) → [[80 - Sources/Cowork Sessions/2026-05-12 - Indice sessioni#Sessione 6 — Create client recap for email (Crowd sessione finale 12/5)]]
- 2026-05-13 — `local_af2ea6af` — Email recap interno Federico+Simone (riscrittura Carlo): **setup DNS SCIOLTO** — i sistemisti NoLoop hanno risposto al follow-up post-call mattina, palla a Simone per check finale e chiusura migrazione `crowd.noloop.eu`. Il blocco di 13 giorni si chiude. → [[80 - Sources/Cowork Sessions/2026-05-13 - Indice sessioni#Sessione 5 — Write recap email and update tasks (Federico+Simone allineamento interno)]]
- 2026-05-21 — `local_b15751fe` — Write platform description for No Loop: creata scheda autoritativa [[Crowd — Product Description]] (3 versioni paste-ready 50/150/300 parole + vocabolario "da usare / da non usare", framing B+C piattaforma a tendere + ecosistema integrato Crowd + OnSite + AI). → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 3 — `local_b15751fe-a38c-42ab-9fa0-55d7b08de276` — Write platform description for No Loop]]
- 2026-05-21 — `local_099a3c93` — Event management platform pitch presentation (collaterale): descrizione "NoLoop AI Platform" generica per slide gara/pitch (ecosistema modulare integrato ciclo evento, Sally agente AI trasversale, KPI ~5 FTE liberate / -80% tempi ricerca location / payback poco più di un anno). Testo ad-hoc, non salvato in scheda vault. → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 2 — `local_099a3c93-f338-407c-ac3d-7bfcf8fce5d4` — Event management platform pitch presentation]]

## Citazioni testuali da preservare

> "Obiettivo: chiudere gli ultimi punti, far passare il messaggio che il development è completato e procedere con il saldo. Se emergono richieste aggiuntive minori, le gestiamo con buona volontà, ma il progetto si considera formalmente consegnato."
> — **Carlo Sanvoisin**, audio recap interno preparatorio sessione Crowd 12/5 (Sessione Cowork `local_2b0c3264`, 2026-05-06)

> "Mancherebbe solo questo test definitivo lato vostro su un evento completo per darci un OK formale, vi torna?"
> — **Carlo Sanvoisin**, call 12/5 ore 1:32:48 — frase di chiusura della sessione finale, pivot su NoLoop per sblocco saldo

> "Nella lista dei desideri Federico è stato buono, ce le ha consegnate tutte."
> — **Carlo Sanvoisin**, call 12/5 ore 1:32:13 — frame positivo per chiusura wave (riferito a tutte le richieste extra emerse nella demo precedente)

> "Se dovessimo fare una funzionalità di personalizzazione template per le mail automatiche, questa sarebbe un extra."
> — **Carlo Sanvoisin**, call 12/5 ore 1:21:03 — chiaro pattern di scope management: la mail automatica di conferma post-registrazione non era nel perimetro iniziale, va trattata come extra prima di committarsi.

> "Sono molto preoccupata per questa cosa, in realtà non ve lo nego. Perché sto facendo veramente fatica, però è ovviamente un mio problema ad isolarmi rispetto a tutte le operatività e fare il percorso completo… vado avanti a testare a parte per parte, ma mi manca sempre un pezzo."
> — **David Fasulo (NoLoop)**, call 12/5 ore 1:33:27 — segnale operativo: David ha bisogno di affiancamento per fare il test end-to-end. Pattern utile per scheda persona.

## Stile email recap a NoLoop

Pattern consolidato per le minute Crowd (TO: Arianna+David, CC: Lorena+Federico+Simone): apertura "Ciao a tutti / di seguito la minuta relativa alla sessione di {tipo} su Crowd", sezione "**Punti discussi**" (preferita a "Decisioni prese" se non tutto è chiuso) + sezione "**Prossimi passi**" separata, bullet concisi in terza persona / forma passiva, niente `Owner: X, Due date: Y` inline quando la finestra è unica, niente deploy tecnico né battute interne, chiusura "Resto a disposizione per qualsiasi chiarimento. Grazie, Carlo". Frase di supporto affiancamento eventuale **fuori dai Prossimi passi**, prima della chiusura standard. Riferimento operativo completo: [[40 - Resources/Prompts/03 - Recap Call → Email Cliente#⭐ Pattern recap Crowd / NoLoop (Arianna Giordanella, David Fasulo, Lorena Cavecchi)|Pattern recap Crowd / NoLoop in Prompt 03]].

## Task aperti (post call interna 20/5)

- [ ] **#p1 Carlo**: chiamare [[Lorena Cavecchi]] al telefono per spiegare la situazione test Crowd + farsi dare OK su scadenza 27/5 + change request post-deadline PRIMA di rispondere all'email feedback al cliente (workflow concordato in call 20/5 con Federico+Simone)
- [ ] **#p1 Carlo**: rispondere all'email feedback Crowd post call Lorena — comunicare che Federico ha preso in carico i punti, scadenza 27/5 come ultima utile per i test complessivi, oltre 27/5 ogni richiesta diventa CR a tariffario, tono "ragazzi vi veniamo sempre incontro" (regola §13: mai citare esposizione HeyAI / costo modifiche dal lato nostro)
- [ ] **#p1 Carlo**: dopo il 27/5 fissare ultima demo definitiva su input Federico (stima 3-5-7 giorni per chiudere i bug fixing residui post-test) — comunicazione cliente "questa è l'ultima sessione, dopo l'applicativo è considerato concluso, ulteriori azioni saranno a tariffario"
- [ ] **#p2 Carlo**: chiedere a [[Lorena Cavecchi]] se esistono casistiche aggiuntive oltre "doppia con 1 persona = DUS" sull'export hotel (es. tripla con 2 persone occupate, suite/junior/master con N persone). Federico ha messo nel codice solo la conversione doppia→DUS in fase di export, ma vuole validare prima con cliente quali altre casistiche servono prima di estendere la regola di conversione
- [ ] **#p1 Federico**: chiusura puntuale (entro 27/5) degli enhancement residui dalla lista feedback Arianna 19/5 + dei punti email cliente che rientrano nel "regalino finale" (Federico li gestisce one-shot in remoto, niente più sessione intermedia con cliente)
- [ ] **#p1 Federico**: dopo il 27/5 fornire a Carlo la stima realistica per chiudere bug fixing residui post-test → input per fissare ultima demo definitiva
- [ ] **#p1 Federico+Simone**: quotazione consulenza personalizzazione mittenti / reply-to per singolo evento con **voci dettagliate dentro** (no totale unico) — Carlo userà le voci per far capire al cliente il valore della consulenza. **Decisione 20/5**: si va solo con strada consulenza per evento, NON CR pannello interno (procedura semiautomatica per natura, non vale lo sviluppo dell'IDE) → la "due strade differenziazione mittenti/reply-to" del task pre-13/5 collassa su questa
- [x] ~~**#p1** Federico: soluzione override DUS in fase di export (esporta come DUS le doppie occupate da un solo ospite, senza modificare il dato a sistema) — owner Federico, da quotare~~ → ✅ chiuso 20/5: workaround approvato in call (override solo in export, dato a sistema invariato). Resta aperto il task #p2 Carlo di validare casistiche aggiuntive con Lorena prima di estendere la regola
- [ ] **#p1** Nicolò Odioma (`nicolo@odgroup.it`): aggiungere i record DNS per `crowd.noloop.eu` come richiesto da [[Stefano Mambrin]] (Havant, ex SB Italia) nel thread "AWS e OPENROUTER". Stefano Mambrin 14/5 11:49: *"@nicolo ci pensi tu ad aggiungerli? Poi quando settimana prossima migriamo i domini li spostiamo, ma intanto andiamo avanti"*. Settimana prossima è prevista migrazione domini su Havant. Owner sblocco: Nicolò
- [x] **#p1** ~~Simone: check risposta sistemisti NoLoop su DNS setup email base~~ → ✅ chiuso 14/5 mattina: Simone 14/5 11:04 ha già fatto check e replicato a Stefano Mambrin chiarendo la sovrapposizione su `noloopontrade.eu`
- [ ] **#p1** Federico+Simone: stima consulenza per evento + stima CR per pannello configuratore interno (due strade differenziazione mittenti/reply-to per singolo evento) — entrambe da girare a Carlo per opzioni extra al cliente
- [ ] **#p1** Federico: guida utente Crowd in sostituzione delle demo registrate non fatte
- [ ] **#p2** Carlo: nota nel requirement log Crowd su "save admin godmode" — funzionalità ammessa per super-admin, segnalare side-effect possibili (mail mancante crasha invii, ecc.)
- [ ] **#p2** Carlo: email recap a Laura Garbarino "Minutes tutto in produzione" + reminder plenaria/consumi token

## Log

### 2026-05-20 sera 23:15 — ✅ AWS SES OUT OF SANDBOX
- **Approvazione AWS arrivata in serata**. Email da `support@noloop.eu` → `simone@tokiostudio.it` ore 23:15 "Test SES — noloop.eu in produzione". Contenuto: *"questo è un test di invio da AWS SES (regione eu-west-1) tramite il dominio noloop.eu, ora fuori dalla sandbox. Controlla gli header del messaggio: dovresti vedere DKIM: pass, SPF: pass (Return-Path su sender.noloop.eu) e DMARC: pass. Quote attuali: 50.000/giorno, 14 msg/sec"*.
- **Stato finale**: noloop.eu fuori dalla sandbox AWS SES con quote produzione (50K/giorno, 14 msg/sec) e tutti gli auth check passati (DKIM/SPF/DMARC pass). Simone ha eseguito test di invio in serata per validare.
- **Conseguenze immediate**:
  - Il bullet AWS nell'email recap a Federico+Simone si chiude in modo definitivo (non più "in attesa OK")
  - **Sblocco password reset massivo Minutes**: la dipendenza AWS ("sine qua non") dichiarata in call pomeriggio cade. Resta solo il vincolo Simone in Marocco 22-26/5 → password reset rimane su mercoledì 27/5
  - Carlo risponde a Marco Merli con questo update (sostituisce il "configurazioni completate, in attesa di approvazione manuale Amazon")
- **Bonus tecnico**: il setup ha Return-Path su `sender.noloop.eu` (subdominio dedicato per bounce/feedback loop) — pattern AWS SES standard, conferma che la configurazione è "production-grade" come dichiarato in call.

### 2026-05-20 (call interna HeyAI+Soolutions allineamento — 16:07-17:27)
- **Call Carlo+Federico+Simone 1h19m** (registrazione `allineamento interno.docx` in uploads). Triage email feedback Arianna post-test 19/5 e set strategia di chiusura Crowd.
- **Scadenza test estesa al 27/5** (era 23/5, ultima data utile data al cliente nell'email precedente). Rationale Federico: *"siccome con l'arrivo di queste nuove richieste Federico ha iniziato a lavorarci, potrebbero esserci instabilità"* → ai test viene comunicato che possono procedere ma con margine di tolleranza sui bug visti perché in parallelo Federico sta integrando gli enhancement.
- **Enhancement consegnati / in test ora** (Federico pushed): edit bulk valore campo, messaggio conferma pre-compilato, blocco hotel/itinerario assegnato visibile sia in landing sia in email, bottone nuovo per aggiungere landing, formattazione testo. Sono già visibili al cliente in ambiente test.
- **Guida utente Crowd**: Federico la produce **alla fine** delle lavorazioni (post-27/5). Citazione Carlo: *"tanto manco se la guardano la guida Crowd, facciamo alla fine come fiocchetto finale e calcio in culo"*.
- **DUS workaround approvato (export hotel)**: l'override DUS si fa **solo in fase di export**, non modifica il dato a sistema. Rimane aperto **#p1 Carlo**: chiedere a Lorena se esistono casistiche aggiuntive oltre alla "doppia con 1 persona = DUS" (es. tripla con 2 persone). Federico: *"qual è la regola, qualsiasi stanza diversa da una singola con una sola persona dentro triggera la domanda 'te la devo considerare una DUS?'"*. Casistiche borderline da validare col cliente prima di chiudere la regola di conversione.
- **Personalizzazione mittenti / reply-to per evento**: confermata **vendita come consulenza per singolo evento**, NON come CR pannello di configurazione interno. Federico+Simone: la procedura è semiautomatica per natura, costruire un'IDE che permetta a NoLoop di farlo in autonomia richiederebbe gestire troppi domini di accettazione. Carlo chiede esplicitamente: la quotazione consulenza deve avere **voci dettagliate** dentro, così Carlo può far capire al cliente il valore della consulenza (stessa regola applicata per Eldis).
- **Workflow comunicazione cliente concordato**: (1) Carlo chiama prima [[Lorena Cavecchi]] al telefono per spiegare la situazione e farsi dare l'OK ("Lorena è il braccio destro di Garbarino"); (2) poi Carlo risponde all'email feedback dicendo che Federico ha preso in carico i punti, segnala la scadenza 27/5 come ultima utile per i test complessivi, e che oltre quella data ogni richiesta nuova diventa change request a tariffario; (3) post-27/5 Carlo fissa l'ultima demo dopo aver ricevuto da Federico la stima reale (3-5-7 giorni in base a quanta roba c'è) per chiudere i bug fixing.
- **Stance Carlo verso cliente**: muso duro su scadenza 27/5 + change request post-deadline, ma "tono dolce" (Federico) e linguaggio empatico ("ragazzi vi veniamo sempre incontro perché ci teniamo a NoLoop"). Mai narrare con cliente esposizione finanziaria HeyAI / costo modifiche extra dal lato nostro.
- **Carlo richiama che NoLoop è canale commerciale Crowd**: *"ricordati che NoLoop ci aiuta a venderlo"* (a Federico) → calibrare il tono dei feedback con questa leva.
- **AVS / Amazon SES rialzo limiti**: Simone ha inviato il 19/5 la richiesta manuale ad Amazon (24h SLA dichiarato). Status: approvazione manuale in attesa. Carlo gira a Federico+Simone l'email di [[Marco Merli]] (AVS, 4 allegati) ricevuta — Simone conferma di averla già in copia. Carlo prende la trascrizione della frase Simone e la copia-incolla in risposta a Merli: *"abbiamo risposto e stiamo aspettando la loro risposta dell'assistenza per l'approvazione ufficiale del rialzo dei limiti — stiamo aspettando che Amazon ci dia l'approvazione, è una richiesta manuale che abbiamo fatto al loro team di assistenza"*.

### 2026-05-20 (lista bug Arianna post-test + chiusura DNS via Marco Merli)
- **Sessione `local_1653abdf` — Triage 2 thread email Crowd**:
  - **Bug list Arianna post-test 19/5 ore 18:00** — Arianna Giordanella ha mandato la sera prima 7 bug emersi dalla sessione di test: (1) modifica eventi post-creazione impossibile (data/luogo/parametri); (2) form mapping con campi duplicati che si moltiplicano in mapping; (3) flag "seleziona tutti" rotto in lista ospiti; (4) editor landing non salva sezione accompagnatori; (5) rooming — camera non modificabile dopo assegnazione; (6) export doppie con conteggio errato in presenza accompagnatori; (7) sgancio automatico ospiti cancellati assente (restano legati alla stanza). **Urgenza: evento Generali OGGI 20/5** → forward a Federico+Simone preparato paste-ready interno con richiesta triage + priorità bloccanti per oggi + carry-over fix non chiudibili oggi nella wave di fix in chiusura fine mese.
  - **Chiusura DNS Crowd via risposta Marco Merli** — thread "AWS e OPENROUTER", Merli ha chiesto *"con questo abbiamo chiuso?"* dopo conferma Nicolò Odioma sull'aggiunta parametri DNS. Bozza risposta paste-ready: confermare che lato Crowd con i parametri aggiunti da Nicolò il setup DNS necessario per produzione è chiuso; rimandare la chiusura formale alla **migrazione domini su Havant settimana 18-22/5** (coordinamento con Stefano Mambrin + team tecnico per spostare anche i record sull'ambiente attuale). Nessuna escalation a Simone (Carlo chiude direttamente la domanda).
- **Invio entrambe le email a carico di Carlo** (non eseguite automaticamente). Bug list = #p1 internal urgenza Generali; Marco Merli = #p1 cliente, chiusura tecnica.

### 2026-05-14
- **Federico chiede chiarimenti via WhatsApp 15:21** su tre enhancement che gli erano stati elencati: chiave univoca composita nel re-import (es. mail + cognome), ID interno ospite nell'export Excel, miglioramento interfaccia import per grandi numeri con tab nuovi/modificati/mancanti. Provengono dalla review Requirement Log Wave 1 (chat "Email con tono economico e allegati Gantt", righe 2794-2797), mai discussi nella sessione 12/5 né nella call interna 13/5 — erano parcheggiati. Carlo ha mandato spiegazione punto per punto via WhatsApp.

### 2026-05-13
- **Call interna HeyAI+Soolutions** (13:32-14:35, 1h03m). Presenti: Carlo, Federico, Simone. Punti Crowd:
  - **Setup email base** ancora bloccato da 13 giorni: ultima mail a Stefano (sistemista NoLoop) è del 30/04, nessun riscontro. Simone in call ha incollato e re-inviato follow-up via Teams a Stefano + Nicolò di Odioma per sbloccare la migrazione DNS verso `crowd.noloop.eu`. Decisione: il blocco è tecnico, non commerciale → non serve coinvolgere Lorena, si chiude direttamente con i sistemisti.
  - **Update sera 13/5 + mattina 14/5 — ricostruzione thread completa**:
    - **13/5 13:48 — Simone Montanari** ha rilanciato il follow-up via mail thread "AWS e OPENROUTER" ai sistemisti Havant + Nicolò Odioma: *"Ciao ragazzi, vi scriviamo perché internamente ci stanno chiedendo aggiornamenti per riuscire a chiudere i settaggi DNS. Avete per caso novità lato vostro?"*.
    - **13/5 14:00 — Marco Merli (NoLoop)** ha inoltrato a Simone confermando che Stefano Mambrin aveva già scritto nel merito + allega la mail precedente.
    - **14/5 11:04 — Simone Montanari** ha replicato a Stefano Mambrin (Havant) e Marco Merli, segnalando la sovrapposizione di due richieste perché nel thread mail si parla anche di `noloopontrade.eu` oltre a `crowd.noloop.eu`.
    - **14/5 11:49 — Stefano Mambrin (Havant)** ha risposto: *"@nicolo ci pensi tu ad aggiungerli? Poi quando settimana prossima migriamo i domini li spostiamo, ma intanto andiamo avanti"*. Decisione: i record DNS richiesti vengono aggiunti ora dal provider attuale (Odioma), settimana prossima si migra il dominio sul nuovo provider Havant (ex SB Italia).
    - **Status reale al 14/5 mattina**: blocco DNS **risolto operativamente**, palla ora a **Nicolò Odioma** (provider attuale `nicolo@odgroup.it`) per aggiungere i record. Settimana prossima migrazione dominio su Havant. Owner sistemisti: Stefano Mambrin (Havant, futuro hosting), Nicolò Odioma (provider attuale che fa le modifiche immediate).
  - **Differenziazione email per singolo evento** (mittenti/reply-to per evento, anche su sotto-domini diversi da `@noloop.eu`): confermato che è **fuori perimetro Wave 1**. Due strade extra: (i) consulenza dedicata HeyAI configura manualmente per ogni evento — costo ricorrente per evento, (ii) CR per pannello configuratore interno a Crowd — costo una tantum, cliente gestisce in autonomia per gli eventi successivi. Federico+Simone girano le 2 stime a Carlo.
  - **DUS vs doppia in export hotel**: Federico ha rovesciato l'approccio dei gruppi camere dedicati (la v4 dell'email diceva quello — la v5 mandata al cliente parla di "override in export"). Federico: *"il concetto di DUS non è un concetto relativo tanto alla stanza, quanto al fatto che è una doppia dove ci dorme uno [...] le DUS non esistono, esistono le doppie con dentro una persona"*. Soluzione approvata: funzione di override solo in fase di export, esporta come DUS le doppie occupate da un solo ospite senza modificare il dato a sistema. Carlo ha lasciato a Federico la decisione finale di prodotto.
  - **Salvataggio ospite con campi obbligatori non compilati**: confermato come funzionalità "godmode" admin di sistema. Federico ha chiesto di tenere nota interna che gli errori derivati (es. mail mancante che crasha la spedizione automatica) **non sono bug del sistema** ma side-effect attesi del bypass dei vincoli. La nota va nel requirement log, NON nell'email cliente.
  - **Guida utente Crowd**: Federico la prepara come sostituto delle demo registrate non fatte in tempo prima della sessione finale 12/5.
  - **Finestra chiusura concordata con NoLoop ieri**: 10 giorni di test reali → fine tuning → consegna ufficiale + OK formale Wave 1 entro fine maggio → saldo.

### 2026-05-12
- **Sessione finale test Crowd** (13:34-15:01, 1h27m). Presenti: Carlo (HeyAI), Federico Saladino (Soolutions), David Fasulo (NoLoop), Arianna Giordanella (NoLoop, presente brevemente). Lorena Cavecchi assente.
- **Wave di modifiche consegnata e verificata in call**: (a) nuova interfaccia invio email con ricerca/filtri + conferma di lettura (pixel tracking), (b) rich text editor in template email e landing, (c) generazione automatica via Sally con preset di tono e bottoni call-to-action, (d) cronologia invii con stato consegna, (e) building block hotel + itinerario ospite con rendering condizionale (no campi vuoti se non c'è assegnazione), (f) roaming: disponibilità camere notte per notte con fluttuazione dinamica, vista hotel read-only con griglia camere popolata, assegnazione via gruppi ospiti + gruppi camere.
- **Bug fixati dichiarati**: mail mostrava solo codice univoco invece di nome ospite ora ok; forzatura più plus-one dei consentiti ora bloccata; landing dinamica con refresh live; pop-up "sei già registrato" con wording da rifinire.
- **Pending in rilascio entro 13/5 pomeriggio**: deploy della wave (pipeline issue da risolvere subito), edit/bulk edit valore per filtro o gruppo (~1-2 ore), modalità salvataggio ospite con campi obbligatori non compilati (god mode segreteria), fix rendering preview formattazione landing.
- **Punti aperti emersi in call e da allineare con Lorena**: (1) editabilità pop-up di conferma — Federico vorrebbe standardizzare il wording invece di rendere ogni messaggio configurabile, (2) differenziazione DUS vs doppia in export verso hotel — si gestisce via gruppi camere dedicati, (3) reportistica avanzata (modelli salvabili con filtri/colonne) → roadmap futura, PDF confermato non necessario da David, (4) **email automatica di conferma post-registrazione**: Carlo dichiara esplicitamente in call essere extra fuori scope iniziale ("questa sarebbe un extra" 1:21:03) — discussione su trigger system, pensata Carlo+Federico in arrivo con proposta semplice (mail unica al register + casistiche differenziate via gruppi).
- **Setup IT email mittente/reply-to**: ancora pending lato sistemisti NoLoop. Carlo si riallinea con Simone Montanari. Logica proposta: mittente `noreply@crowd.noloop.eu` univoco, reply-to differenziabile per evento su back-office NoLoop (es. `backoffice.crowd@noloop.eu`) — David ha precisato che il reply-to **non può essere unico** perché si genererebbe confusione con risposte ospiti su eventi diversi.
- **Decisione di chiusura concordata in call (Carlo + David)**: chiusura test end-to-end lato NoLoop entro ~10 giorni → OK formale Wave 1 entro fine maggio 2026 → sblocco saldo. David si è dichiarata preoccupata per la fatica del test in pieno picco di stagione → Carlo offrirà supporto affiancato (Carlo+Federico+Simone) per non lasciarlo come effort solo su David.
- **Next action Carlo**: email recap a David+Lorena+Arianna (CC Federico+Simone) con punti operativi + setup IT — bozza in [[00 - Inbox/2026-05-12 - BOZZA Email Recap Crowd Sessione Finale]]. Carlo si allinea separatamente con Simone su IT setup prima dell'invio finale o nello stesso thread come punto aperto.

### 2026-05-07
- **Riassegnazione ownership** (correzione Carlo chat 7/5): i due task `chiusura feature mancanti` e `registrare video grouping + roaming` erano stati erroneamente attribuiti a Carlo nel commit della sessione 6 del 6/5 (`local_2b0c3264`) — sono di **Federico**. La citazione testuale di Carlo nel preparatorio audio era frame interno; l'ownership effettiva è Soolutions.

### 2026-05-06
- **Sessione Cowork `local_2b0c3264`**: framing strategico per la sessione finale Crowd: "chiusura formale Wave 1 + saldo, non ennesima sessione di feedback". Tre obiettivi in call: (1) far parlare Arianna/David ripercorrendo il flusso, (2) forzare test su grouping/filtraggio + rooming evento ~100 persone se non eseguiti, (3) chiudere formalmente Wave 1 + aprire ganci Wave 2 Crowd Integrazione Incassi €15K + schedulare demo a Garbarino post-test. Validazioni operative aperte da chiudere con Lorena: mittente email produzione, dominio per evento (oggi `crowd.noloop.eu` con wildcard), reset password massivo. Architettura distinzione **filtri = lettura ad-hoc su campi testo** vs **gruppi = entità persistenti auto-create su campi dropdown** da verificare con Arianna in call (era stato un punto di confusione mesi fa).
<!-- auto-updated by cowork-sessions-index 2026-05-06 21:42 -->

