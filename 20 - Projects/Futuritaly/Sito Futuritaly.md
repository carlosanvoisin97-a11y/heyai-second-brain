---
type: project
status: active
priority: p2
client: FuturItaly
parent_project: _Futuritaly
stakeholders: [Lavinia Ferrari, Michele Mattucci]
created: 2026-05-06
updated: 2026-06-10
next_call: 2026-05-22 mattina — call follow-up con il Communication strategist post-feedback Claudia
pricing_en: 4600 EUR
last_call_date: 2026-05-21
---
<!-- auto-updated by cowork-sessions-index 2026-05-15 20:22 (cron-22) | source-session: local_9912ed2f-67e2-4965-a04a-d6fc60b841e4 | source-lastActive: 2026-05-15 pomeriggio -->
<!-- atomic-change next_call: first-set → 2026-05-19T11:00 | session: local_9912ed2f-67e2-4965-a04a-d6fc60b841e4 -->
<!-- atomic-change pricing_en: first-set → 4600 EUR (was 4-5K range) | session: local_9912ed2f-67e2-4965-a04a-d6fc60b841e4 -->

# 📁 Sito FuturItaly

> Sito istituzionale FuturItaly (loro studio legale). **Status da verificare con Carlo**: progetto attivo, completato, o in sviluppo?

## Stato

- **Status**: 🟡 TBD — ricostruire dossier in sessione dedicata con Carlo

## Da chiarire

- Scope reale del progetto (sito completo? landing? rifacimento?)
- Stato delivery (in corso, consegnato, in attesa di brief)
- Numeri (target, fatturato, fornitori coinvolti)
- Stakeholder lato FuturItaly

## Note

Scheda creata 6/5/2026 per coerenza architettura — da arricchire al prossimo touchpoint Carlo-FuturItaly.

### Update 2026-05-13

Status promosso `tbd → active`, priority `p3 → p2`. Progetto confermato attivo lato HeyAI: Michele sta lavorando al mockup, in attesa della documentazione mancante dal cliente come da sua ultima email (forwardata da Carlo a Lavinia il 13/5). Call di confronto sul primo mockup ferma in attesa dei materiali. Carlo ha proposto a Lavinia di segnarsi delle deadline condivise per traghettare meglio le attività e rispettare la roadmap.

## Sessioni Cowork correlate

- 2026-05-21 mattina — sessione corrente "trascrivi task" — Processing trascrizione call interna Carlo+Michele 21/5 ore 09:22 (18 min). Iterazione visual post-feedback cliente: passaggio stile icone Glass→ceramica/porcellana per coerenza con mappamondo-puzzle. Workflow nuovo Carlo: Claude Code controlla Google AI Studio via API key da Terminale, batch 30 icone in ~10 min (sostituisce iterazione singola del 20/5 sera). Divisione lavoro: Carlo rigenera asset 3D (30 icone + frecce + bussola + 2 icone caroselli + Form CTA multi-step), Michele integra + nuove UI (sostituzione icone con backup Glass, hover foto, cliccabilità frecce, bullet point leggibili, gradiente esteso, effetto scroll icone, ponte chiusura). Vincolo Carlo: NON inviare a freddo, aspettare call Daniele 22/5. Deliverable pronto entro pranzo 21/5. Task committati in append.
- 2026-05-20 sera — sessione "Generazione icone 3D settori" — Estrazione 16 icone 2D dal BGL pag.14 (765×641px ciascuna via pymupdf vettoriale, salvate in `Assets/Icone Settori 3D/01-Source-2D/`), analisi brand book BGL 31pp (palette ufficiale: Blu Savoia #3D70ED + Blu Notte #003869 + Avorio #F6F5EE; mood "atelier strategico" bussola/traiettorie), costruito script Python `generate_icons.py` con 2 prompt master (stile A Clay Premium / stile B Crystal Liquid Glass) via Gemini 2.5 Flash Image (nanobanana). Blocker tecnico intercettato: sandbox Cowork proxy bloccato verso `generativelanguage.googleapis.com` (403 allowlist) → pivot a esecuzione locale via Terminale Mac di Carlo, chiave API non lascia mai il suo computer. Deliverable pronto in [[20 - Projects/Futuritaly/Assets/Icone Settori 3D/README|Icone Settori 3D/README]]. Costo stimato <€1,50.
- 2026-05-20 mattina — sessione precedente — Raccolta contesto + analisi trascrizioni call cliente 20/5 + debrief Michele 20/5 + cross-link post-mortem Angelini Academy 18-19/5 → prodotto [[2026-05-20 - Piano Azione Sito Futuritaly post-call 20-5]] in `00 - Inbox/` (8 workstream, 5 decisioni Carlo entro 21/5 sera, scenari pricing A/B/C, timeline 20/5→31/5, regole anti-pattern "cattedrale nel deserto" e gerarchizzazione P1/P2/P3 sui moduli illustrativi)
- 2026-05-13 — `local_8cdd3749` — Draft update email Future Italy (Lavinia): scheda **promossa da `tbd → active` + `p3 → p2`**, aggiunti `parent_project: _Futuritaly` e `stakeholders: [Lavinia Ferrari, Michele Mattucci]` al frontmatter. Email Carlo → Lavinia con recap stato website: Michele in attesa documentazione mancante dal cliente, call di confronto sul primo mockup ferma, proposte deadline condivise per traghettare la roadmap. → [[80 - Sources/Cowork Sessions/2026-05-13 - Indice sessioni#Sessione 4 — Draft update email to Future Italy (Lavinia)]]
- 2026-05-15 pomeriggio — `local_9912ed2f` — Meeting recap call Carlo+Michele 51 min: **slot videocall FuturItaly spostato lun 18/5 ore 14 → mar 19/5 ore 11 Teams** (richiesta exec assistant Claudia Bugno) come touch point intermedio operativo NO Claudia in copia; **pricing sito EN €4.6K** chiuso (era 4-5K forchetta); **concept asse network** (regola: se cozza con strategico, prevale network) effetti 3D NON accantonati rettifica Carlo; pre-rimettere mano al sito review concept Carlo+Michele lunedì pomeriggio o martedì → [[80 - Sources/Cowork Sessions/2026-05-15 - Indice sessioni#Sessione 7 — Meeting recap call Carlo+Michele 15/5 (Angelini Academy · Futuritaly · Achipont)]]

## Stakeholders

- [[Lavinia Ferrari]] — Futuritaly (riferimento commerciale / champion)
- [[Michele Mattucci]] — owner interno HeyAI (delivery mockup)

## Task aperti

- [ ] **#p1** Ricevere documentazione mancante dal cliente (push email Michele già inviato, follow-up Carlo→Lavinia 13/5)
- [ ] **#p1** Michele: brainstorming concept **network** per Futuritaly lunedì 18/5 mattina (asse complementare ad anima strategica già esplorata)
- [ ] **#p1** Carlo+Michele rivedono insieme il concept lunedì/martedì PRIMA che Michele faccia ulteriori modifiche al sito
- [ ] **#p1** Michele: risposta a Executive Assistant FuturItaly con conferma slot **martedì 19/5 ore 11 Teams** + invito + framing "touch point intermedio operativi, no Claudia Bugno"
- [ ] **#p2** Pre-mail: Michele mette Carlo in copia per validazione prima dell'invio
- [ ] **#p2** Settare call di confronto sul primo mockup (bloccata in attesa documentazione)
- [ ] **#p2** Proporre deadline condivise per rispettare roadmap (in attesa risposta Lavinia)
- [ ] **#p2** Provare a passare codice sito Angelini Academy a Claude Code per adattamento Futuritaly (dopo concept chiuso — passaggio in coppia Carlo+Michele)

### Post-call 20/5 — modifiche mockup + proposta modulare entro venerdì 22/5

**Modifiche mockup chirurgiche**
- [ ] **#p1** Logo Futuritaly nella bussola: ripristinare colori e spessore font originali (il logo attuale risulta modificato vs versione brand book) _da call 20/5 segnalato dal Communication strategist_
- [ ] **#p1** Voci pubblico/privato sui servizi: dove esistono servizi ibridi (intelligence economica + funding) duplicarli su entrambe le sezioni senza cappello comune. Soluzione concordata 28:35 in call _da call 20/5_
- [ ] **#p1** Alleggerimento sezione case history Proof of Concept: meno autoreferenziale + meno esposizione di progetti internazionali (Claudia: *"non ho nulla da guadagnare a dare questo tipo di informazione, lavoriamo su passaparola e referenze"*). Sostituire foto Aula Parlamento per evitare richiamo politico _da call 20/5_
- [ ] **#p1** Aggiunta CTA *"Contatta un nostro esperto"* in barra di navigazione (defilata ma visibile) → maschera con selezione area tematica + form contatto. Split account interno (NO info generica, mail a referenti specifici per area) _da call 20/5 — proposta del Key Account FuturItaly_
- [ ] **#p2** Effetto pop/3D dirompente sulle icone (settori di competenza + effetto moltiplicatore): da rendere tridimensionali e *"buca allo schermo"* — Claudia richiesta esplicita di alzare il livello visivo _da call 20/5_ — **WIP 20/5 sera**: setup completo in [[20 - Projects/Futuritaly/Assets/Icone Settori 3D/README|Icone Settori 3D]] (16 PNG 2D estratte dal BGL pag.14, script `generate_icons.py` pronto via Gemini 2.5 Flash Image, 2 direzioni stilistiche A Clay + B Glass, costo stimato <€1,50). Pilot lanciabile da Carlo via Terminale.
- [ ] **#p2** Sezione articoli/post collegata bidirezionalmente a LinkedIn per indicizzazione SEO su parole-chiave (Expo, Mario Draghi, candidatura olimpica) — formato light "social network interno al sito" con post brevi + immagine + link bidirezionale _da call 20/5 — richiesta SEO di Claudia_

**Asset da ricevere dal cliente**
- [ ] **#p1** Foto ufficiali Futuritaly da fornire al team HeyAI (le foto attuali nel mockup sono placeholder online) _da call 20/5_
- [ ] **#p2** Lista parole-chiave SEO prioritarie per indicizzazione _da call 20/5_
- [ ] **#p3** Eventuali reference visive di siti che piacciono come stile (Claudia: *"non posso dare reference, sono molto istituzionali"*) → input flessibile, decidiamo noi _da call 20/5_

**Proposta modulare illustrativa (add-on opzionali)**
- [ ] **#p2** Costruire proposta modulare illustrativa di automazioni AI come add-on opzionali (NON nel core): pipeline LinkedIn↔sito + generazione AI di post da contenuti + profilazione contatti minima + scraper LinkedIn dei lead in ingresso. Inserita in maniera illustrativa, decisione cliente su attivazione _da call 20/5 — Carlo chiusura 1:01:27_

**Operativo email + call**
- [ ] **#p1** Invio email recap call 20/5 a Claudia + Communication strategist + Key Account, CC Michele — con punti aperti + asset da ricevere + proposta modulare illustrativa anticipata _da call 20/5_
- [ ] **#p1** Fissare slot **venerdì 22/5 mattina** con il Communication strategist per integrazione feedback Claudia + brainstorming interno Futuritaly su priorità SEO + LinkedIn-sito _da call 20/5_
- [ ] **#p2** Invio doc Osservatorio bandi/gare a Claudia via email separata (Carlo ha confermato in chiusura *"intanto te lo mando così te lo leggi con calma"*) _da call 20/5_

**Coaching note**
- [ ] **#p1** Rileggere [[2026-05-20 - Carlo Performance — Call Futuritaly sito proprio]] prima della call di venerdì 22/5 — target ≤45% tempo parlato + zero sovraproposta tech (rispetto 3 livelli) + 2 domande diagnostiche su livello attuale del cliente _da scheda performance 20/5_

### Post-call interna 21/5 mattina — iterazione visual + workflow batch icone (consegna pranzo 21/5)

**Carlo — rigenerazione batch asset 3D (workflow Claude Code → Google AI Studio)**
- [ ] **#p1** Rigenerare in batch tutte le **30 icone 3D** del sito in stile **ceramica/porcellana** (sostituisce stile Glass del 20/5 sera per coerenza con mappamondo-puzzle cliente) — via workflow nuovo: Claude Code controlla Google AI Studio da Terminale Mac via API key, ~10 min batch — entro mattina 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** Rigenerare **frecce di navigazione caroselli** in stile 3D ceramica coerente — entro mattina 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** Rigenerare **bussola** in nuova versione compatibile con animazione (effetto scroll: aghi che ruotano illuminando i settori) — entro mattina 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** Rigenerare **2 icone aggiuntive 3D** per sezione caroselli (cliccabili) — entro mattina 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** Costruire **Form CTA multi-step** (email iniziale → opzioni a comparsa, stile barra di caricamento) — Carlo: *"questo te lo faccio io"_ _da call interna 21/5 mattina_
- [ ] **#p1** Inviare a Michele screenshot di riferimento per effetto hover foto (già fatto live in call) — ✓ in corso

**Michele — sostituzione asset + iterazioni UI (consegna pranzo 21/5)**
- [ ] **#p1** Fare **copia di backup del sito** prima di sostituire icone — preservare versione "Glass" come fallback se cliente preferisce — entro pranzo 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** Sostituire le icone vecchie con le nuove ceramica ricevute da Carlo — entro pranzo 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** Riformattare **sezione bullet point illeggibili** (titoletto in grassetto + testo a capo) — Carlo: *"questi sono i più importanti"_ — entro consegna pomeriggio 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** Rendere **cliccabili le frecce dei caroselli** (oggi solo navigazione direzionale, devono attivarsi anche al click sulle icone laterali) — entro pranzo 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** Implementare **effetto hover sulle foto**: box descrittivo a comparsa + ombreggiatura dietro (riferimento screenshot inviati da Carlo in call) — entro pranzo 21/5 _da call interna 21/5 mattina_
- [ ] **#p2** Estendere **gradiente blu** (oggi solo sopra) a tutte le altre sezioni blu del sito — entro pranzo 21/5 _da call interna 21/5 mattina_
- [ ] **#p2** Implementare **effetto scroll** che ingrandisce icone settori di competenza durante scorrimento — entro pranzo 21/5 _da call interna 21/5 mattina_
- [ ] **#p2** Tentare effetto 3D sulla bussola via prompt al tool Hostinger AI (fallback: Carlo genera via Claude Code se Hostinger non supporta) — entro pranzo 21/5 _da call interna 21/5 mattina_
- [ ] **#p2** Aggiungere **effetto "ponte" alla fine del sito** (luce → ponte come conclusione visiva del concetto pubblico↔privato) — entro consegna pomeriggio 21/5 _da call interna 21/5 mattina_
- [ ] **#p1** **Chiedere a Daniele Caporale** (FuturItaly): (a) se inserire il team del cliente nel sito, (b) feedback su sezioni certificazioni/partner attualmente lasciate "as-is" come prima fase — sollecito entro mattina 21/5 (ieri non ha risposto) _da call interna 21/5 mattina_
- [ ] **#p1** **Inviare documento NoLoop entro 12:00** (lavoro parallelo non-Futuritaly che blocca avvio modifiche sito) — vedi [[_NoLoop|NoLoop]] (da triagiare la scheda specifica) _da call interna 21/5 mattina_
- [ ] **#p1** Finire interventi Futuritaly entro 13:00-13:30 → deliverable pronto per consegna cliente subito dopo pranzo 21/5 _da call interna 21/5 mattina_

**Vincoli strategici e decisioni operative — Carlo**
- [ ] **#p1** **NON inviare ancora al cliente** la nuova versione "a freddo": aspettare call con Daniele venerdì 22/5 mattina per evitare di mostrare qualcosa di completamente diverso da quanto già visto — vincolo bloccante su consegna _da call interna 21/5 mattina_
- [ ] **#p3** Sezioni "brutte" certificazioni/partner: decisione confermata di lasciarle as-is in questa iterazione (dichiarate "prima fase" al cliente). Se cliente le vuole valorizzate, next step _da call interna 21/5 mattina_
- [ ] **#p3** Valutare se promuovere il workflow **Claude Code → Google AI Studio batch icone** ad atomic note in `40 - Resources/Concetti/` (knowledge operativo riusabile per altri progetti) _da call interna 21/5 mattina — nota meta_

## Log

### 2026-05-21 mattina

- **Call interna Carlo+Michele** (21/5 ore 09:22, durata 18 min 9 sec). Iterazione visual post-feedback cliente. **Workflow nuovo sbloccato da Carlo**: Claude Code controlla Google AI Studio da Terminale Mac via API key → batch rigenerazione 30 icone in ~10 min con un solo prompt (sostituisce iterazione singola del 20/5 sera). Carlo: *"In tutto questo ho scoperto una figata, praticamente io riesco a far controllare da cloud Google AI studio"*. Conseguenza diretta: **rigenerazione completa delle icone in stile ceramica/porcellana** (sostituisce Glass del 20/5 sera) per coerenza col mappamondo-puzzle già nel mockup.
- **Divisione lavoro chiusa**: Carlo rigenera tutti gli asset 3D (30 icone + frecce caroselli + bussola animation-ready + 2 icone aggiuntive + Form CTA multi-step), Michele sostituisce + integra nuove UI (backup Glass + hover foto + cliccabilità frecce + bullet point leggibili + gradiente esteso + effetto scroll icone + ponte chiusura). Michele: *"OK, però questo che significa che io mo devo risostituire tutto?"* — accettato senza tensione.
- **Decisione strategica Carlo**: NON inviare la nuova versione al cliente a freddo, aspettare la call con Daniele venerdì 22/5 (*"eviterei di mandargli una cosa che è completamente diversa da quello che hanno visto"*). Deliverable pronto per pranzo 21/5 è target interno, non consegna cliente.
- **Decisione minimalista certificazioni/partner**: lasciate "brutte as-is" in questa iterazione, dichiarate "prima fase" al cliente. Michele: *"considerando che noi gli abbiamo detto che questa è una prima fase, secondo me ha senso queste soprattutto lasciarle brutte"*. Se il cliente le vuole valorizzate, next step.
- **Form CTA multi-step**: pattern selezione progressiva (email → opzioni a comparsa stile barra di caricamento) confermato, NON form classico flat. Owner: Carlo.
- **Carico parallelo Michele**: 30-40 min di lavoro NoLoop urgente (doc da inviare entro 12:00) prima di poter aprire Futuritaly. Risolto con priorità sequenziale: NoLoop entro 12:00, poi Futuritaly entro 13:00-13:30.
- **Domande aperte a Daniele Caporale**: (a) team del cliente da inserire nel sito sì/no, (b) feedback su sezioni certificazioni/partner. Ieri Daniele non ha risposto, Michele rilancia oggi.
- **Stato sito post-iterazione**: stile icone Glass → ceramica/porcellana · bussola statica → animata (3D + scroll con aghi rotanti) · Form CTA da assente → multi-step in produzione · ponte aggiunto come chiusura sito · backup Glass preservato per fallback decisione cliente.

### 2026-05-20 sera tardo (audit email recap pre-invio)
- Sessione `local_b9bd1bcd` (Audit email recap Futuritaly site call): audit chirurgico della bozza email 20/5 a Claudia+Daniele+Elena. 3 fix applicati alla versione finale: (a) §4b — tagliato *"nutrire i contatti nel tempo"* perché jargon marketing che contraddice esplicitamente Claudia in call (*"a me arriva di tutto via mail non le guardo"*); (b) §4c — eliminato bullet *"Tracking del comportamento utente (heatmap, scroll depth)"* perché aggiunta inventata dall'agente non emersa in trascrizione; (c) §5 — asciugata chiusura modulare togliendo *"decidete voi quali attivare in base a priorità e budget"* (didattico). Bonus dalla rilettura trascrizione: aggiunto in §6 flag naming CTA (*"esperto"* bocciato da Claudia) come input da raccogliere insieme a voci/aree tematiche. Versione finale dell'email consegnata in chat paste-ready Outlook. **Invio email a carico di Carlo** (non eseguito automaticamente).

### 2026-05-20
- **Call presentazione mockup Sito Futuritaly** (20/5 ore 09:09, durata 1h 3m 35s via Teams). Presenti: Carlo + Michele (HeyAI) · Claudia Bugno (Amministratore Unico Futuritaly) + il Communication strategist + il Key Account. Walk-through pagina per pagina del mockup: Hero costellazioni → presentazione → time on target → gateway pubblico/privato con servizi differenziati → effetto moltiplicatore (settori + partner) → proof of concept (case history placeholder Expo + candidatura olimpica) → claim *"tra pubblico e privato siamo il ponte"* → footer LinkedIn + email. **Outcome**: mockup **approvato come architettura e concept generale**. Endorsement chiusura: Claudia *"utilissimo, mandarcelo a tutti"* · Communication strategist *"non vedo grosse problematiche, sullo stile possiamo lavorare assieme"* · accettato anche doc Osservatorio da inviare separatamente.
- **Feedback strutturali raccolti**: (1) foto da sostituire con asset ufficiali (placeholder online ora) (2) wow pop / effetto 3D dirompente sulle icone (3) logo Futuritaly nella bussola da ripristinare (modificato vs originale) (4) servizi ibridi pubblico/privato duplicati su entrambe le sezioni senza cappello (5) alleggerimento case history (autoreferenziale + esposizione internazionale pericolosa) (6) CTA *"Contatta un nostro esperto"* in barra navigazione come lead capture soft (proposta del Key Account FuturItaly) → maschera con selezione area tematica + split account interno (7) sezione articoli/post collegata a LinkedIn per indicizzazione SEO forte su parole-chiave Expo / Mario Draghi / candidatura olimpica (richiesta Claudia su brand awareness via SEO).
- **Decisione architetturale concordata**: collegamento bidirezionale LinkedIn↔sito come funnel di traffico. LinkedIn primario (più ampio bacino), sito secondario nel funnel (più stretto, più qualificato). Pipeline da definire: pubblicazione su LinkedIn → cross-posting sul sito (manuale o automatizzato come add-on opzionale).
- **Proposta modulare illustrativa**: Carlo chiude proponendo di inserire nella prossima presentazione un blocco di automazioni AI illustrative come add-on opzionali (NON nel core): scraper LinkedIn dei lead in ingresso · generazione AI di post da contenuti · profilazione contatti minima · analytics geografica. Decisione cliente su attivazione modulare.
- **Performance Carlo**: voto 7,2/10 — in miglioramento vs 19/5 (6,8/10). Pattern bocciati 19/5 (auto-disclosure Claude, *"sì-però"* sistematico) NON ripetuti. Buona divisione ruoli con Michele. Push operativo sulle foto. Tre accoglienze pulite di feedback. **Pattern nuovo emerso**: sovraproposta tecnologica precoce — Carlo ha saltato 2-3 livelli proponendo AI scraper/automation quando il cliente era al livello *"vorrei gestire le mail in arrivo"*. Il Communication strategist l'ha richiamato esplicitamente (*"cattedrale nel deserto"*). Regola da consolidare: prima domanda diagnostica sul livello attuale, poi proposta livello immediatamente superiore. Dettaglio in [[2026-05-20 - Carlo Performance — Call Futuritaly sito proprio]].
- **Prossimo touchpoint**: call follow-up venerdì 22/5 mattina con il Communication strategist post-feedback Claudia. Carlo invia email recap entro stasera + brainstorming interno Futuritaly su priorità SEO + LinkedIn-sito.

### 2026-05-15
- **Call interna Carlo+Michele 15:12 (51 min)**. Stato: progetto **in pausa contenuti** in attesa risposta cliente sui punti aperti (servizi vs cappello strategico, struttura sezioni). Michele ha fatto solo "un paio di modifiche, nulla di che" sul sito → conferma di Carlo: ok aspettare di avere le informazioni complete invece di lavorare a pezzettini. La chiamata richiesta a Lavinia (cui Carlo aveva scritto, mai risposto) **non è ancora stata fissata** — Michele conferma "siamo nel buio". Ipotesi Michele: "i piani alti hanno detto rifate il sito, ma chi lo deve fare ha altre priorità e ci hanno messo a rispondere una persona che non sa niente".
- **Slot videocall confermato dalla Executive Assistant FuturItaly (15/5 pomeriggio)**: proposta originale lunedì 18/5 ore 14, spostata su **martedì 19/5 ore 11 su Teams**. **Decisione Carlo + Michele**: rispondere accettando martedì, **posizionando la call come touch point intermedio** (coinvolgere chi è più operativo, **NON Claudia Bugno**) — la presentazione a Claudia (Amministratore Unico) si fa solo quando abbiamo un mockup più avanzato. Michele scrive la mail di conferma + invito Teams, senza Claudia Bugno in copia. Linea di Carlo per la mail: "sfruttare questa sessione come touch point intermedio per confrontarci sui punti aperti, presentazione del mockup più avanzato a Claudia a valle".
- **Decisioni di concept (carry-over Michele)**: il concept va sviluppato sull'asse **network** — finora Michele ha esacerbato bene l'asse "anima strategica" militare, ma manca il tema network/ecosistema, che è in realtà altrettanto forte (Futuritaly è il "medico di base" che indirizza allo specialista — costruzione di partnership esterne, es. Murolo, Angelini). **Regola di priorità**: se le due cose vanno a cozzare nel concept stilistico, prevale **network** sul militare/strategico.
- **Decisione pricing — Sito EN**: la versione inglese era a forchetta €4-5K nella proposta, **fissato definitivamente a €4.6K** (call 15/5).
- **Effetti 3D**: Michele sta esplorando, vede dei limiti — accantonato fino a definizione del concept di network. Carlo gli ha mostrato il mockup Angelini Academy (orbite/pianeti) come stimolo metaforico, ma chiarendo che per Futuritaly serve una metafora diversa, coerente col loro branding (no spaziale).
- **Ipotesi di delivery**: una volta chiuso il concept, Michele prova a dare il codice del sito Angelini Academy a Claude Code chiedendogli di adattarlo a Futuritaly con effetti 3D/animazioni. Carlo: "facciamo insieme questo passaggio per assicurarci che non ci siano problemi".
- **Operativo sito (privacy/cookie/legali)**: in mano a Michele, lo sta già facendo per NOT e Angelini, integrazione naturale.

### 2026-05-13
- **Email Carlo → [[Lavinia Ferrari]]** (`ferrari@futuritaly.com`): recap stato website. Comunicato che Michele è ancora in attesa della documentazione mancante (come da sua ultima email forwardata sotto), di conseguenza siamo fermi anche per settare la call di confronto sul primo mockup. Proposto di segnarsi insieme delle deadline per traghettare meglio queste attività e assicurarci di rispettare la roadmap.
- Status scheda promosso: `tbd → active`. Priority: `p3 → p2`.
- Bozza email: [[2026-05-13 - Email Lavinia Recap Website e Osservatorio|Email 13/5]]


## 🔄 Riconciliazione 10/6/2026 (sweep handover — il progetto era fermo nei tracker dal 26/5)

> Lo sweep degli handover storici (10/6 sera) ha rilevato che questa scheda era ferma al 21/5 e i task NON comparivano in Open Tasks. I checkbox del 20-21/5 sopra sono in larga parte superati dall'iterazione del 21/5 (email "modifiche già implementate") — verifica puntuale alla prossima sessione sul progetto. Qui sotto i task VIVI ricostruiti dal Piano Azione 20/5 + recovery 28/5, ben formati per il PM Digest:

- [ ] **#p1** Carlo: verificare su Outlook (gap digest 27/5→7/6) se da FuturItaly sono arrivati: foto ufficiali + lista keyword SEO (Expo, Draghi, candidatura olimpica) + risposte scritte di Claudia su case history PoC e naming CTA — se silenzio, sollecitare _da sweep 10/6, era Piano 20/5 WS2+§3_
- [ ] **#p2** Carlo+Michele: produrre la **proposta modulare add-on AI** (pipeline LinkedIn↔sito, generazione AI post, profilazione contatti, analytics) gerarchizzata P1/P2/P3 — è l'upsell su cui poggia il pricing opzione C (€4.6K + moduli) _da sweep 10/6, era Piano 20/5 WS3_
- [ ] **#p2** Carlo+Michele: **WS8 riuso codice sito Angelini** per FuturItaly (effetti 3D/animazioni) — il trigger "post pitch Angelini" è scattato il 5/6; avviato solo CompassScrollAnimation (26/5, repo ~/code/futuritaly-compass) _da sweep 10/6, era Piano 20/5 WS8_
- [ ] **#p2** Carlo: decidere il **prossimo touchpoint con Claudia/Daniele sul sito** (la milestone "presentazione mockup avanzato a Claudia, inizio giugno" non è mai stata tracciata) + ricostruire lo stato delivery reale _da sweep 10/6, era Piano 20/5 §6_

Nota recovery 28/5 (patch P2 mai applicata, ora recepita): componente **CompassScrollAnimation** consegnata a Michele il 26/5 per integrazione Hostinger.