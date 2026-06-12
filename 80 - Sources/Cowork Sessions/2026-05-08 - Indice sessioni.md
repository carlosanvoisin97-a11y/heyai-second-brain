---
type: index
date: 2026-05-08
created: 2026-05-08
updated: 2026-05-08
session_count: 10
trigger: cron-22
runs:
  - 2026-05-08 00:50 CEST (cron-13 anticipato) — 5 sessioni
  - 2026-05-08 13:33 CEST (cron-13 finestra naturale) — Sessione 6 (local_b6619223 post-call cliente Angelini Academy 8/5 mattina)
  - 2026-05-08 20:30 CEST (cron-22 finestra naturale) — Sessioni 7-10 (4 sessioni meta-sistema vault: Cowork sessions index manual cleanup, Setup vault-link-checker scheduled task, Update SKILL cowork-sessions-index patch v2, Vault link checker batch fix orfani)
---

# Indice sessioni Cowork — 2026-05-08

> Run cron-13 del task `cowork-sessions-index`. Finestra temporale: 22:00 di 2026-05-07 → 13:00 di 2026-05-08. Indicizzate 5 sessioni rilevanti: 4 sessioni già indicizzate in run precedenti che hanno prodotto **nuovo contenuto post-13:30 del 7/5** + 1 sessione audit nuova del 8/5 mattina.

## Sintesi del giorno

- **Angelini Academy** ancora filo dominante (3 sessioni con nuovo contenuto): produzione Q&A docx aggiornato con sezione J (6 domande iper-necessarie) per email Elena+Daniele 7/5; creazione prep doc 8/5 dedicato alla call cliente di domani mattina; allineamento path post-refactoring (vault sotto `Futuritaly/Angelini Academy/`).
- **Achipoint Proposta v2 rigenerata 7/5 sera tardo** allineata al template aggiornato (struttura 13 sezioni, layout A4 portrait, Aptos sempre, footer page numbering centrato Aptos 9pt grigio, palette #074F6A/#156082, header logo HeyAI 5.27×3.73cm). Pricing immutato €38K MVP Essenziale / €45K MVP Completo. v1 mantenuta come traccia storica.
- **Decisione tattica fornitori (sessione 5976de11)**: NON mandare messaggio rassicurazione "evolutive in pipeline" ad Andrea Pasquali. Pattern da rompere: "parli troppo dopo aver ottenuto quello che vuoi". Le evolutive restano carta da tenere fuori dal tavolo come leva flessibile (PresidIA/Achipont) per non vincolarle a Jakala per default.
- **Quality check sistema vault (sessione e8939b3d)**: 5 anomalie minori rilevate, nessuna bloccante, nessuna sovrascrittura sospetta. Conformità alle regole §10ter/§15.ter delle sessioni notturne 7/5 confermata.

## Sessione 1 — Review Future Italy website project details (re-opened 7/5 sera)

- **ID**: `local_b6619223-d949-4374-beba-9a072ea008b9`
- **Trigger**: Sessione re-aperta nel pomeriggio/sera del 7/5 con nuovo focus su Q&A docx. **Run precedente indicizzato** in [[2026-05-06 - Indice sessioni#Sessione 4 — Review Future Italy website project details]] (4-prompt unification + edits a 4 file mockup).
- **Progetti**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone**: [[60 - People/Elena Chiti]], [[60 - People/Daniele Caporale]]

### Decisioni
- Aggiunta sezione J "Estratto domande iper-necessarie" al Q&A docx — 6 domande critiche su scope, ruolo HeyAI, fattibilità, brand book, bilinguismo, stack tecnico. Append-only sotto la lista esistente, niente toccato sopra.
- Bozza email Elena+Daniele applicando pattern Carlo (apertura "come da accordi", marker di cautela "nel caso in cui", "cercheremo di mandarvi", chiusura "per qualsiasi cosa restiamo a disposizione!").

### Numeri/fatti nuovi
- 6 domande iper-necessarie (scope, ruolo HeyAI, fattibilità, brand book, bilinguismo, stack tecnico): le critiche da non perdere se la lista lunga non viene coperta in call.

### Output prodotti
- [Angelini Academy - Domande QA.docx](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-07%20-%20Angelini%20Academy%20-%20Domande%20QA.docx) — versione 7/5 con sezione J in coda.
- Allineato in parallelo `20 - Projects/Futuritaly/Angelini Academy/Domande QA.md`.
- Bozza email Elena+Daniele consegnata in chat (no file).

### Citazioni rilevanti
- nessuna nuova citazione testuale strategica

### Task emersi
- nessuno nuovo (tutto integrato nel docx + email pronta per invio)

---

## Sessione 2 — Wireframe e architettura Angelini Academy (re-opened 7/5 sera)

- **ID**: `local_24e7ed38-a460-4dba-bff0-d3879542e25b`
- **Trigger**: Sessione re-aperta 7/5 sera per produrre prep doc dedicato alla call cliente del 8/5. **Run precedente indicizzato** in [[2026-05-06 - Indice sessioni#Sessione 1 — Wireframe e architettura Angelini Academy]] (smoke test prompt Claude Code + decisione strategica mockup).
- **Progetti**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone**: [[60 - People/Caterina Caboni]], [[60 - People/Daniele Caporale]], [[60 - People/Elena Chiti]]

### Decisioni
- Distinzione netta tra prep doc 7/5 (call interna FuturItaly 16:30) e prep doc 8/5 (call cliente Angelini): "Sono tre file diversi per due call diverse" — chiarito a Carlo dopo confusione su naming.
- Posizionamento Carlo nella call cliente 8/5: "fornitore tecnico che parla quando chiamato in causa", regia in mano a Daniele, segnali politici da rilevare da Caterina e Tiziana.
- Path migration note: i prompt Claude Code scritti stamattina con i path vecchi (`/20 - Projects/Angelini Academy - <NomeFile>.md`) sono **tutti da aggiornare** a `/20 - Projects/Futuritaly/Angelini Academy/<NomeFile>.md` per il refactoring vault del 6/5.

### Numeri/fatti nuovi
- nessuno

### Output prodotti
- [2026-05-08 - Prep call cliente Angelini Academy.md](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-08%20-%20Prep%20call%20cliente%20Angelini%20Academy.md) — prep doc dedicato alla call cliente 8/5 (stakeholder Caterina+forse Tiziana, ruolo Carlo "fornitore tecnico", regia Daniele, scenari di risposta tipici, segnali politici).
- Re-print integrale Analisi Narrativa Short consegnato in chat per copia in prompt Claude Code.

### Task emersi
- [ ] **#p2** Carlo: aggiornare i prompt Claude Code di stamattina con i path nuovi `/20 - Projects/Futuritaly/Angelini Academy/<NomeFile>.md` se non già fatto _da Sessione Cowork local_24e7ed38_

---

## Sessione 3 — Analyze call performance and update vault (re-opened, decisione tattica fornitori)

- **ID**: `local_5976de11-268c-4bbc-848d-5afae18c4e2a`
- **Trigger**: Sessione re-aperta con domanda specifica di Carlo: "vorrei scrivere 2 righe sul fatto che a partire Osservatorio + PresidIA, evolutive in pipeline" → consultazione tattica per messaggio rassicurazione ad Andrea Pasquali. **Run precedente indicizzato** in [[2026-05-06 - Indice sessioni#Sessione 8 — Analyze call performance and update vault]] (framework margine×probabilità + quotazione finale Jakala 75K sbilanciata).
- **Progetti**: [[30 - Areas/Area - Partnership Fornitori/Jakala|Jakala]]
- **Persone**: [[60 - People/Andrea Pasquali]]

### Decisioni
- **NON mandare il messaggio aggiuntivo** ad Andrea su evolutive in pipeline. Tre motivazioni: (a) Andrea ha già accettato la copertura con clausola "+2K se Achipont non parte" → riaprire il tema segnala dubbio sulla soluzione; (b) le evolutive sono leva flessibile da non vincolare a Jakala per default — meglio tenerle libere per dare a Andrea se performa, a Federico/Simone se Jakala rallenta; (c) "tutto vantaggio del cliente" è argomento sui clienti finali, non su Andrea — lui guadagna dal contratto, non dalla pipeline cliente.
- **Pattern da rompere identificato**: "parli troppo dopo aver ottenuto quello che vuoi" (stesso errore commesso con Silencio in call 4/5).
- **Frase di rinforzo opzionale** (se Carlo proprio vuole aggiungere qualcosa, senza aprire tema evolutive): *"Sui 3 progetti il commitment HeyAI è solido — sono tutti clienti già allineati e con kickoff prossimo, ti aggiornerò mano a mano sulle conferme finali."* Anche questa onestamente opzionale.

### Numeri/fatti nuovi
- nessun numero nuovo (decisione tattica su comunicazione)

### Output prodotti
- nessun file (decisione consegnata in chat)

### Citazioni rilevanti
- nessuna nuova citazione (la decisione è interna, non c'è pattern fornitore/cliente da preservare)

### Task emersi
- nessuno (decisione = "non mandare", non genera task)

---

## Sessione 4 — Review open tasks summary (continuazione 7/5 sera tardo)

- **ID**: `local_ab08bbda-8868-45a9-95e9-22e174f53ffb`
- **Trigger**: Sessione massiccia 7/5 (~5h notturne 02:00-04:30 IT + continuazione sera tardo). **Run precedente indicizzato** in [[2026-05-07 - Indice sessioni#Sessione 1 — Review open tasks summary]] (produzione Achipont Proposta v1 + RL + batch reconciliation 11 task + 3 nuove regole §10ter/§10ter.1/§15.ter + template Proposta Investimento v2 + audit incrociato). Questa parte indicizza la **continuazione del 7/5 sera tardo** (Achipoint v2 rigenerata + decisioni layout finali).
- **Progetti**: [[20 - Projects/Achipont/Achipoint|Achipoint]]
- **Persone**: nessuno (sessione di produzione)

### Decisioni
- **Footer template Proposta Investimento**: solo numerazione pagine centrata, Aptos 9pt grigio, niente altro (no logo, no tagline, no contatti).
- **Font template**: Aptos sempre, anche su header (eliminato Acre Medium che era stato discusso prima nella stessa sessione).
- **Achipoint Proposta v2 rigenerata** allineata al template aggiornato: A4 portrait, margini 2.12 cm, header con logo HeyAI 5.27×3.73 cm + dati legali Aptos, footer con campo PAGE centrato Aptos 9pt grigio, palette #074F6A (titolo + H1) / #156082 (H2), struttura 13 sezioni standardizzata, header table senza bordi visibili.
- **Pricing immutato** rispetto a v1: €38K MVP Essenziale / €45K MVP Completo / 4 opzionali separate / Fase 2 indicativa (€18-22K Modulo C + €15-18K Modulo D + €6-8K ADR su quotazione separata).
- **FuturItaly Osservatorio docx** usato solo come riferimento visivo per estrarre layout (non riusato come template diretto).

### Numeri/fatti nuovi
- v2 Achipoint: 76.5 KB. Pricing immutato (€38K/€45K).
- Template Proposta Investimento aggiornato con 3 decisioni storiche tracciate come chiuse (footer, font, rigenerazione v1→v2).

### Output prodotti
- 📄 [HeyAI_Achipoint_Proposta_Investimento_v2.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/HeyAI_Achipoint_Proposta_Investimento_v2.docx) (76.5 KB) — proposta v2 finale.
- Requirement Log v1 mantenuto come allegato contrattuale (non rigenerato — già su layout corretto).
- Template `90 - Templates/Proposta Investimento.md` aggiornato con tracking decisioni.
- Schede aggiornate live nella sessione: [[20 - Projects/Achipont/Achipoint|Achipoint]] (sezione Risorse v2 attiva + v1 storica + Log entry sera tardo + frontmatter), [[99 - System/MOC - Home]] (link a v2), [[99 - System/Master Facts Sheet]] (riga Achipont aggiornata a v2), [[99 - System/Open Tasks]] (3 task `[x]` chiusi: footer / font / rigenerazione).

### Task emersi (per Carlo, 8/5)
- [ ] **#p1** 8/5 mattina: trigger manuale `pm-digest-mattutino` dal pannello Scheduled _da Sessione Cowork local_ab08bbda 7/5 sera tardo_
- [ ] **#p1** Applicare la patch al SKILL.md di `cowork-sessions-index` (4 sostituzioni guidate, ~15 minuti) _da Sessione Cowork local_ab08bbda 7/5 sera tardo_
- [ ] **#p1** Verifica a campione che gli edit del 7/5 sera siano stati append-only _da Sessione Cowork local_ab08bbda 7/5 sera tardo_
- [ ] **#p1** Carlo+Michele review Proposta Achipoint v2 + chiusura business case con Andrea Pazienza prima dell'invio cliente _da Sessione Cowork local_ab08bbda 7/5 sera tardo_

---

## Sessione 5 — Quality check second brain system (8/5 mattina)

- **ID**: `local_e8939b3d-445c-4491-a1d6-06a1c6aeb83e`
- **Trigger**: Audit complessivo sistema vault richiesto da Carlo 8/5 mattina (post PM Digest mattutino).
- **Progetti**: meta / sistema vault
- **Persone**: —

### Decisioni
- Audit confermato: nessuna sovrascrittura sospetta nelle ultime 24h. Tutte le schede toccate hanno crescita di file size compatibile con append puri (verificato via mtime + ispezione contenuto Achipoint, Jakala, Wave 2, Master Facts).
- Conformità sessioni recenti a CLAUDE.md confermata: sessione notturna 7/5 ha applicato §10ter (pre-flight check) e §15.ter (reconcile checkboxes) correttamente, ha cascatato Achipont con 60+ requisiti tracciati, ha aggiornato Master Facts con riga pricing Achipont. Sessioni 6/5 hanno seguito §15.bis dove rilevante.
- **Audit pendente di azione**: 5 anomalie identificate ma il fix non è stato eseguito (la sessione si è chiusa con domanda "Vuoi che proceda io con i fix 1, 3 e 4?" senza risposta di Carlo).

### Numeri/fatti nuovi
- Scheduled tasks status: `pm-digest-mattutino` 8:02 + re-run no-op 8:57 (jitter 145s sforato → 54 min, possibile bug scheduler da monitorare); `cowork-sessions-index` lastRunAt 13:16 (precedente run); `claude-chats-sync` correttamente disabilitato; `friday-wrap-up` e `weekly-digest` con nextRunAt corretti.

### Anomalie rilevate (audit findings — da segnalare a Carlo)
1. **File orfani in root vault** (violazione §15 path corretto): 2 file riservati in root invece che in cartella appropriata. Da gestire fuori dall'archivio operativo.
2. **Lock files Office non chiusi**: `.~lock.Soolutions Delivery Board - Tasks da importare.xlsx#` (root) + `~$26-05-07 - Prep call FuturItaly Angelini Academy.docx` (00-Inbox). Probabile chiusura impropria Office/LibreOffice.
3. **Inconsistenza checkbox vs prosa (§15.ter)** scheda Achipoint: task aperto `- [ ] **#p2** Preparare proposta economica modulare (Luigi accetta meglio €X+€X+€X)` ma "Eventi chiave" dice "2026-05-07 sera — Prodotti i due deliverable v1: Requirement Log e Proposta di Investimento" e in Open Tasks è già `[x]`. Da riconciliare a `[x]`.
4. **Inconsistenza minore Wave 2 NoLoop**: task `- [ ] #p1 Attendere bozza contratto avvocato (Mauro Longo, ricezione confermata 28/04)` con testo ambiguo ("ricezione confermata 28/04") ma ancora aperto. Milestone 7/5. Da riformulare per evitare ambiguità.
5. **PM Digest doppio run del 7/5**: 08:02 + re-run no-op alle 08:57 (54 min dopo, fuori jitter 145s). Re-run segnalato correttamente come no-op nel Digest Log, no danno. Possibile bug scheduler — da monitorare nei prossimi giorni.

### Output prodotti
- nessun file (audit consegnato in chat, nessun fix applicato perché Carlo non ha confermato)

### Task emersi
- [x] ~~**#p2** Spostare 2 file dalla root vault~~ → ✅ chiuso 2026-05-08 (file rimossi dall'archivio per policy riservatezza, gestiti fuori vault) _da Sessione Cowork local_e8939b3d_
- [ ] **#p2** Chiudere lock files Office (aprire e chiudere correttamente o eliminare i .lock se i file non sono effettivamente aperti) _da Sessione Cowork local_e8939b3d_
- [ ] **#p2** Riconciliare il `[ ]` aperto su [[20 - Projects/Achipont/Achipoint|Achipoint]] (riga "proposta economica modulare") → `[x]` con riferimento ai deliverable v1 _da Sessione Cowork local_e8939b3d_
- [ ] **#p2** Riformulare il task ambiguo Wave 2 ("ricezione confermata 28/04") _da Sessione Cowork local_e8939b3d_
- [ ] **#p2** Monitorare PM Digest 8/5: se riappare doppio run, investigare scheduler _da Sessione Cowork local_e8939b3d_

---

## Sessione 6 — Review Future Italy website project details (re-opened 8/5 mattina, post Q&A call cliente Angelini Academy)

- **ID**: `local_b6619223-d949-4374-beba-9a072ea008b9`
- **Trigger**: Sessione re-aperta 8/5 mattina dopo la **call cliente Angelini Academy** (Carlo + Daniele Caporale + Elena Chiti + Caterina Caboni + Michele Mattucci + Davide [TBD identità — possibile typo per "Daniele", oppure altra risorsa FuturItaly da triagiare]). Carlo carica due trascrizioni (`call angelini (1).txt` + `elena debrief.txt`) e chiede recap strutturato + bozza email Elena + suggerimenti strategici + performance review. **Run precedenti** indicizzati come Sessione 1 (re-opened 7/5 sera) e [[2026-05-06 - Indice sessioni#Sessione 4 — Review Future Italy website project details]].
- **Progetti**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone**: [[60 - People/Caterina Caboni]], [[60 - People/Elena Chiti]], [[60 - People/Daniele Caporale]], [[60 - People/Michele Mattucci]], [[60 - People/Tiziana Carnicelli]] (citata)

### Decisioni — cambio scope strategico (cliente)
- **Sito non più "ristrutturazione completa"** ma **restyling rapido entro giugno** per allinearsi al lancio di comunicazione in atto + **ristrutturazione completa in fase 2** (più avanti). Singola informazione che ribalta >50% delle ipotesi pre-call. Caterina: "essere coerente, non rifare tutto adesso".
- **E-commerce**: non in scope 2026. Architettura predisposta + oscurata, accendibile fase 2. Proposta deve includere **due opzioni** (custom integrato vs gateway separato) con pro/contro.
- **Eventi**: niente area pubblica (80-90% interni); eventualmente area riservata oscurabile in futuro.
- **MBA candidature**: form sì, ma dimensionato sui volumi reali (**45 candidati max post-screening IE Madrid**, non 500+). Calcolatore borse semplificato a singolo parametro (reddito).
- **Funzionalità AI bocciate per ora**: chatbot conversazionale, agente raccomandazione percorsi formativi, calcolatore borse complesso. Caterina: "di frontiera per noi", "ho paura di un boomerang", "talmente semplice, non la farei più complicata". Resta spazio per **una sola feature AI** (chatbot ricerca scientifica) ben dimensionata.
- **Brand book 2024 confermato**, logo invariato, no rebranding.
- **Bilinguismo IT/EN mantenuto** (analisi SEO consulenziale lato HeyAI).
- **Library foto**: usate quelle autorizzate già sul sito (no library strutturata).
- **Copywriting**: HeyAI lo fa nel perimetro proposta.
- **Sviluppo tecnico**: oggi è agenzia IT del gruppo Angelini con economie di scala — Caterina apre a valutare proposte alternative (verifica con IT).
- **Fili rossi del brief**: NON tassonomia editoriale ma concetti di posizionamento. Smentita Michele in call ("sono gli obiettivi della nostra comunicazione, non fatevi vincolare"), accolta da Caterina.
- **Approccio richiesto**: strategia prima, effetti speciali dopo. Caterina ha esplicitamente bocciato "il full optional con i video". Vuole vedere come la **loro strategia già definita** si traduce nell'architettura sito — non vogliono nuova analisi strategica.
- **Tempistiche**: 3 settimane per concept proposta, **entro fine maggio**, stesso tempo dato alle altre agenzie.
- **Budget**: nessun paletto. Proposta modulare per scaglioni.

### Decisioni — interne FuturItaly + HeyAI (dal debrief Elena)
- **Comunicazione su ricerca pedagogica / laboratorio editoriale permanente** (concordata Elena↔Tiziana) **non è venuta fuori in call** per confusione di Caterina sui contenuti (ha 2 fornitori già attivi: agenzia tecnica gruppo + creator content esterno). Strategia: **pacchetto congiunto sito + editorial pedagogico** da riproporre **al pitch finale come differenziale forte**, non al Q&A.
- **Margine FuturItaly esplicito** chiesto da Elena: la proposta HeyAI deve permettere a FuturItaly di marginare. Da dimensionare nel pricing fin dall'inizio (HeyAI fattura a FuturItaly con markup vs fattura separata + percentuale commercializzazione).
- **A/B test target-based sul sito**: idea Carlo apprezzata da Elena nel debrief. Da inserire nella proposta come "modulo intelligenza editoriale" che varia contenuti/CTA per cluster target (UTM da campagna LinkedIn, segmento Roadshow).
- **Allineamento interno** Carlo+Daniele+Elena: **lunedì 11/5 ore 12:00** per ridiscutere pitch finale (ricalibrare regia Daniele, mettere a terra laboratorio editoriale).

### Performance review HeyAI in call (commit consensual con Carlo: pending — sessione chiusa con "Pronto a committare appena mi dai ok")
- **Voto sintetico**: Carlo 6.5/10, HeyAI team 6/10. "Avete tenuto la stanza, non avete brillato. Caterina vi sta valutando, non vi ha né scelto né scartato".
- **Cosa è andato bene**: articolazione e-commerce custom vs gateway pulita (apprezzata esplicitamente da Caterina); framework MVP+modularità diventato vocabolario condiviso; sui NO, accolto e riallineato senza diventare difensivo; sezione J Q&A ha strutturato la call.
- **Cosa è andato male — 5 pattern Carlo da migliorare**:
  1. **Apertura sul rifare from scratch**: Carlo entrato con tesi pre-confezionata (opzione B sito rifatto) senza testare la richiesta vera. Caterina lo ha corretto in 30 secondi. Carlo si è dovuto giustificare ("perdonami colpa mia, non sono neanche in video").
  2. **Tre NO consecutivi sull'AI in 4 minuti**: chatbot → agente percorsi → calcolatore borse complesso. Tutti bocciati. Riformulare un NO come variante non è ascoltare, è altro tentativo della stessa cosa.
  3. **Assunzioni non verificate sui dimensionamenti**: integrazioni automatiche + form sofisticati + scrematura algoritmica per MBA. Sovrastimato 10x. Lezione: prima i numeri, poi la soluzione.
  4. **Connessione e video off**: in pitch competitivo conta; assenza video dà l'impressione di non essere lì al 100%.
  5. **Daniele non ha tenuto la regia**: deciso che lui apriva, Carlo subentrava sul tecnico — invece Carlo ha portato avanti la maggior parte delle domande, Daniele è rimasto nello sfondo. Caterina ha visto "fornitore tecnico (Carlo) + intermediaria commerciale (Elena)", FuturItaly come capofila quasi sparito. Da parlare con Daniele lunedì.
  6. **Michele e i fili rossi**: ha letto i fili rossi del brief come categorie editoriali del sito. Caterina lo ha smontato.
- **Tre lezioni operative per pitch finale**: (1) arrivare con domande non con tesi; (2) AI come leva strategica non shopping list — UNA feature ben dimensionata, non catalogo; (3) ricalibrare rapporto Carlo/Daniele/Elena: regia FuturItaly deve riprendersi il pitch, Carlo torna a "tecnico-strategico chiamato in causa" (se in pitch finale Carlo parla ancora il 70% del tempo, FuturItaly perde legittimità di capofila).

### Numeri/fatti nuovi
- 45 candidati MBA max (post-screening IE Madrid) → vincolo dimensionamento form/calcolatore borse.
- 3 settimane tempistica concept proposta (= entro fine maggio 2026).
- 80-90% eventi Angelini Academy interni → non serve area pubblica eventi.
- Pitch finale: Carlo target ≤30% tempo parlato (vs ~70% in call 8/5).

### Output prodotti
- Recap strutturato call consegnato in chat (3 blocchi: situazione consolidata, email Elena con summary girable, suggerimenti strategici).
- Bozza email Carlo→Elena (cover breve + summary girable a Caterina) consegnata in chat. **Non ancora inviata** — Carlo da decidere se firmare congiunto Carlo+Elena o solo Elena.
- Performance review HeyAI/Carlo consegnata in chat (voto + 5 pattern + 3 lezioni).
- 4 leve strategiche per pitch finale identificate: target mapping serio, laboratorio editoriale permanente, A/B test target-based, pricing modulare con margine FuturItaly esplicito.

### Citazioni rilevanti (vault-worthy)
- **Caterina Caboni** — "fate voi una proposta, ma siete voi a doverci dire perché" (vuole vedere il vostro ragionamento, non sentirvi convincere lei).
- **Caterina Caboni** — "talmente semplice, non la farei più complicata" (sul calcolatore borse — diffida over-engineering).
- **Caterina Caboni** — "di frontiera per noi" + "ho paura di un boomerang" (sul chatbot AI conversazionale).
- **Caterina Caboni** — "tienete conto della dimensione" (45 candidati MBA max).
- **Caterina Caboni** — "sono gli obiettivi della nostra comunicazione, non fatevi vincolare" (smonta lettura Michele dei fili rossi).
- **Caterina Caboni** — "essere coerente, non rifare tutto adesso" (cambio scope sito → restyling fase 1).
- **Elena Chiti** (debrief con Carlo) — "non è una merda, all'inizio sì" (giudizio onesto sulla performance Carlo).
- **Elena Chiti** (debrief) — "non manco tecnica e parla così a papera" (lettura su Caterina: poco tecnica, va guidata con fermezza ma chiarezza).

### Eventi calendario nuovi
- **Lunedì 2026-05-11 12:00** — Allineamento interno Carlo + Daniele Caporale + Elena Chiti per ridiscutere pitch finale Angelini Academy (regia, laboratorio editoriale, ricalibrazione ruoli).
- **Entro fine maggio 2026** — Consegna concept proposta Angelini Academy (stesso tempo dato alle altre agenzie).

### Task emersi (da committare nel vault)
- [ ] **#p1** Carlo: invio email a Elena con recap call + Q&A docx allegato (firma da decidere: Carlo+Elena congiunto vs solo Carlo) _da Sessione Cowork local_b6619223 8/5 mattina_
- [ ] **#p1** Carlo+Elena: target mapping serio (istituti accademici ricerca tipo Insead/Oxford, studenti ISEE/ISPE, mercato Angelini esteso biotech, network Tiziana) come deliverable pre-pitch (NON al pitch) _da Sessione Cowork local_b6619223 8/5 mattina_
- [ ] **#p1** Lunedì 11/5 12:00 — allineamento Carlo+Daniele+Elena: rimettere a terra "laboratorio editoriale permanente" come differenziale pitch finale + ricalibrazione regia _da Sessione Cowork local_b6619223 8/5 mattina_
- [ ] **#p2** Includere nella proposta finale "modulo intelligenza editoriale" (A/B test target-based con cluster UTM/Roadshow) _da Sessione Cowork local_b6619223 8/5 mattina_
- [ ] **#p2** Pricing modulare proposta deve dichiarare apertamente flusso economico FuturItaly (markup HeyAI→FuturItaly→Angelini vs fattura separata + % commercializzazione) — chiarire lunedì 11/5 _da Sessione Cowork local_b6619223 8/5 mattina_
- [ ] **#p2** Verifica con IT Angelini su sviluppo tecnico (fornitore storico gruppo aperto a proposte alternative se interessanti) — dipende da risposta cliente _da Sessione Cowork local_b6619223 8/5 mattina_
- [ ] **#p3** Chiarire identità "Davide" presente in call (typo per Daniele? Altra risorsa FuturItaly?) — vedi §Da triagiare _da Sessione Cowork local_b6619223 8/5 mattina_

---

## Schede aggiornate da questa esecuzione

Patch chirurgica append-only: aggiunta riga `## Sessioni Cowork correlate` referente all'indice giornaliero di oggi + frontmatter `updated: 2026-05-08`. Le decisioni e i numeri sono già propagati nelle schede dalla sessione live (Achipoint v2, prep doc 8/5, Q&A docx sezione J), questo run aggiunge solo la traccia di audit.

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] — append `## Sessioni Cowork correlate` (sessioni 1, 2)
- [[20 - Projects/Futuritaly/Angelini Academy/Domande QA]] — append `## Log` 2026-05-07 sera (sezione J aggiunta) + `## Sessioni Cowork correlate`
- [[20 - Projects/Achipont/Achipoint|Achipoint]] — append `## Sessioni Cowork correlate` (sessione 4 — continuazione 7/5 sera tardo v2)
- [[30 - Areas/Area - Partnership Fornitori/Jakala|Jakala]] — append `## Log` 2026-05-08 (decisione "non mandare messaggio rassicurazione evolutive ad Andrea") + `## Sessioni Cowork correlate` (sessione 3)
- [[60 - People/Andrea Pasquali]] — append `## Log` 2026-05-08 (pattern "parli troppo dopo aver ottenuto quello che vuoi" + decisione no-send) + `## Sessioni Cowork correlate` (sessione 3)
- [[60 - People/Elena Chiti]] — append `## Sessioni Cowork correlate` (sessioni 1, 2)
- [[60 - People/Daniele Caporale]] — append `## Sessioni Cowork correlate` (sessioni 1, 2)
- [[60 - People/Caterina Caboni]] — append `## Sessioni Cowork correlate` (sessione 2)

### Schede NON toccate (e perché)

- [[99 - System/Master Facts Sheet]] — già aggiornato 7/5 sera tardo dalla sessione live (riga Achipont v2). Skip per evitare doppia scrittura.
- [[99 - System/Open Tasks]] — gestita dal `pm-digest-mattutino` 8:02. Skip whitelist task.
- [[99 - System/MOC - Home]] · [[CLAUDE]] · [[99 - System/Open Questions]] — escluse da policy (whitelist task).
- [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|Wave 2 NoLoop]] — toccata indirettamente da audit findings (task ambiguo Longo) ma nessuna decisione di sessione → skip per non creare rumore senza decisione di Carlo.
- [[60 - People/Andrea Pazienza]] · [[60 - People/Michele Mattucci]] — nessuna decisione/citazione vault-worthy emersa nelle sessioni indicizzate. Schede non toccate.

### Addendum run cron-13 13:33 CEST (Sessione 6 — call cliente Angelini Academy 8/5 mattina)

Patch chirurgica append-only — frontmatter `updated: 2026-05-08` confermato + commento HTML invisibile + nuove entry su `## Log`, `## Eventi calendario`, `## Citazioni testuali da preservare`, `## Task aperti`. Nessun rewrite. La sessione live ha dichiarato "Pronto a committare appena mi dai ok" → questo run propaga le decisioni di scope strategico (cambio sito → restyling fase 1 + ristrutturazione fase 2) ma NON sostituisce decisioni Carlo: fatti append + Da triagiare per la bozza email Elena.

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] — append `## Log` 2026-05-08 mattina con cambio scope strategico (sito = restyling rapido entro giugno + ristrutturazione fase 2; e-commerce predisposto+oscurato; AI ridotta a 1 feature; brand book 2024 confermato; bilinguismo IT/EN mantenuto; copywriting HeyAI; sviluppo tecnico TBD), 4 leve pitch finale, eventi calendario (lunedì 11/5 12:00 + concept fine maggio), citazioni Caterina × 6 + Elena × 2, 7 nuovi task `- [ ]`. Append `## Sessioni Cowork correlate` (sessione 6).
- [[60 - People/Caterina Caboni]] — append 6 citazioni testuali strategiche + sezione `## Pattern di interazione` (poco tecnica, "non saprei" = "fate voi", apprezza pro/contro pulite, boccia frontiera AI con linguaggio del rischio "ho paura di un boomerang", vuole strategia loro non nuova, "fate voi una proposta, ma siete voi a doverci dire perché"). Append `## Sessioni Cowork correlate` (sessione 6).
- [[60 - People/Elena Chiti]] — append 2 citazioni testuali (debrief onesto + lettura Caterina). Append `## Pattern di interazione` aggiornato con: chiede esplicitamente che HeyAI permetta a FuturItaly di marginare (vincolo partnership da dimensionare nel pricing), legge Caterina con accuratezza ("non manco tecnica"), apre con onestà sulla performance ("non è una merda, all'inizio sì"), vuole laboratorio editoriale come differenziale pitch finale. Append `## Sessioni Cowork correlate`.
- [[60 - People/Daniele Caporale]] — append `## Log` 2026-05-08 con osservazione "regia non tenuta in call cliente 8/5 — Daniele rimasto nello sfondo mentre Carlo ha portato avanti la maggior parte delle domande; da ricalibrare lunedì 11/5". Append `## Sessioni Cowork correlate`.
- [[60 - People/Michele Mattucci]] — append `## Log` 2026-05-08 con nota errore "fili rossi letti come categorie editoriali" (smontato da Caterina) + nuovo task #p3 "review brief metodo letteralmente". Append `## Sessioni Cowork correlate`.

### Schede NON toccate (e perché)

- [[Carlo Sanvoisin]] — scheda persona di Carlo NON è in vault (non esiste come scheda dedicata). Performance review confluisce nelle schede progetto Angelini Academy + lasciata in chat per coaching note dedicata che Carlo eventualmente vorrà creare in `30 - Areas/Area - Performance & Coaching/`. Vedi §Da triagiare.
- [[60 - People/Tiziana Carnicelli]] — citata in transcript ("network internazionale") ma nessun fatto nuovo strategico. Skip.
- [[99 - System/Master Facts Sheet]] — nessun numero ufficiale impattato (pricing Angelini Academy €4-5K opzione B confermato pre-Q&A, range da affinare con Michele post-Q&A). Skip per evitare scrittura senza decisione esplicita.

## ⚠️ Da triagiare (Carlo conferma manualmente)

- **Audit findings sessione `local_e8939b3d`**: 5 anomalie identificate ma fix non applicati (Carlo non ha risposto a domanda "Vuoi che proceda io?"). Listate in §"Anomalie rilevate" sopra come task `#p2` aperti per Carlo.
- **Sessione 6 `local_b6619223` — bozza email Elena+recap girable a Caterina**: la bozza è pronta in chat con summary copia-incolla diretto. **Non ancora inviata** — Carlo deve decidere firma (congiunto Carlo+Elena vs solo Carlo) e timing (subito vs dopo allineamento lunedì 11/5).
- **Sessione 6 `local_b6619223` — coaching note "post-mortem call cliente Angelini 8/5"**: ✅ **CREATA su istruzione esplicita di Carlo (run secondario 13:33+)**. File: [[30 - Areas/Area - Performance & Coaching/2026-05-08 - Carlo Performance — Q&A Call Cliente Angelini Academy]]. Include voto sintetico 6.5/10 + 5 pattern Carlo da rompere + 3 lezioni pitch finale + tabella continuità con call Silencio/Pasquali (pattern emergente "disciplina informativa" sotto pressione preparazione). Inizialmente skippata per policy SKILL "mai creare schede" — Carlo ha autorizzato esplicitamente in chat 2026-05-08 13:50.
- **Sessione 6 — identità "Davide"** in call cliente: Carlo cita "Caterina il cliente, Elena e Davide sono FuturItaly". CLAUDE.md §7 lista solo Daniele Caporale + Elena Chiti come risorse FuturItaly Angelini. Possibile typo Daniele→Davide, oppure nuova risorsa FuturItaly mai introdotta. **Da chiedere a Carlo** prima di toccare lo stakeholder cluster.
- **Sessione 6 — Tiziana Carnicelli**: citata da Elena nel debrief come stakeholder allineata sul "laboratorio editoriale permanente". La scheda esiste in vault ma non è stata aggiornata in questo run (nessuna interazione diretta nuova, solo riferimento indiretto). Da aggiornare lunedì 11/5 dopo allineamento Carlo+Daniele+Elena se emerge piano operativo.

## Alert per il Master Facts Sheet

✅ Nessun conflitto sui numeri ufficiali. La sessione 4 (Achipoint v2) ha mantenuto pricing immutato (€38K/€45K) e Master Facts era già allineato dalla sessione live 7/5 sera tardo.

⚠️ **Sistema scheduler — possibile bug**: PM Digest 7/5 ha avuto doppio run (8:02 + 8:57). Re-run no-op senza danno, ma fuori jitter 145s. Da monitorare nei prossimi 2-3 giorni.

✅ **Patch SKILL `cowork-sessions-index` applicata 8/5/2026 sera via mcp__scheduled-tasks__update_scheduled_task** (cancellato alert originale) (doc in [[50 - Archive/System Patches/Patch SKILL cowork-sessions-index 2026-05-07]]): questo run gira ancora con append-only puro come da SKILL originale. La patch sull'auto-reconcile checkboxes resta da applicare manualmente da Carlo (4 sostituzioni guidate, ~15 minuti).

---

## Addendum run cron-22 2026-05-08 ~20:30 CEST — sessioni meta-sistema vault

> Finestra temporale: 2026-05-08 13:00 → 22:00. Indicizzate **4 sessioni** che hanno rimaneggiato pesantemente l'infrastruttura del vault (refactoring link, creazione schede, patch SKILL, batch fix orfani). Tutte le decisioni e i fatti vault-worthy sono stati propagati live dalle sessioni stesse — questo run aggiunge solo l'audit di indicizzazione + frontmatter `updated:` + `## Sessioni Cowork correlate` dove serve.

### Sintesi del pomeriggio/sera 8/5

- **Vault wikilink puliti azzerati**: il task `vault-link-checker` è stato lanciato 7 volte mano a mano che i fix venivano applicati (216 broken → 0 al 6° run). Stato finale: **0 broken wikilink, 0 broken frontmatter, 0 path string rotti** su 2331-2353 wikilink in 331 file. Snapshot pre-fix archiviato in sandbox.
- **Orfani azionabili azzerati**: 33 → 9 (24 fix mirati). Orfani residui 137, di cui 100% fisiologici (Claude Chats archivio 117, template 6, DPIII reports 6, ecc.). MOC - Home riallineata per coprire i cluster overview (`_NoLoop`, `_NOT`, `_Eldis`, `_Studio Murolo`, `_Matteo Cosma`, `_Wave 1 NoLoop`, `_Area - Partnership Fornitori`) + nuova sezione "🔧 Sistema vault" con i file di sistema (Cowork Log, Vault Link Audit, Index Cowork, Setup vault-link-checker, Setup MS Lists).
- **3 nuove schede persona** create (✅ autorizzate da Carlo nelle sessioni stesse): [[60 - People/Carlo Sanvoisin]] (espansa da placeholder a versione operativa), [[60 - People/Leonardo Delbufalo]] (promosso da stakeholder secondario), [[60 - People/Claudia Bugno]] (CEO FuturItaly, decisore finale, partnership agevolazioni fiscali).
- **2 wikificazioni in cluster esistenti**: [[60 - People/Carmen Compare]] in [[20 - Projects/NOT/_NOT|_NOT]] + [[20 - Projects/NoLoop/_NoLoop|_NoLoop]] (Data Analyst NOT, validatore modello dati Operation Transformation), [[60 - People/Davide Settembrini]] in [[20 - Projects/NoLoop/_NoLoop|_NoLoop]] (Legal interno NoLoop). 3 persone escluse per scelta esplicita di Carlo: Carlotta Lievore, Gabriella Airaghi, Veronica Del Mastro.
- **Patch SKILL `cowork-sessions-index` v2 applicata in-place**: integrate patch A+B+C+D (ordering cronologico step 2, conflict scan step 4bis, audit metadata esteso step 5a con `sessionId/lastActive`, quinto caso ambiguo step 5bis cross-sessione checkbox conflicts, Verifica post-patch v2 a 8 check). File: [[SKILL cowork-sessions-index POST-PATCH UNIFICATA]] + [[Patch SKILL cowork-sessions-index 2026-05-08 sera — falle ordinamento e conflitti]] (status `applicata`).
- **Anomalie audit chiuse**: anomalia 4 (Wave 2 Longo task ambiguo) chiusa `[x]` con audit ricezione 7/5 10:22; anomalia 3 (Achipoint checkbox) confermata già fixata; anomalie 1+5 confermate (file orfani rimossi, doppio run PM Digest monitoring only); anomalia 2 (4 lock files Office) consegnata a Carlo per eliminazione manuale.
- **Bruno equity scrub verificato**: zero occorrenze nel vault delle cifre sensibili (2200, 14 mensilità, +5%, ~47K netti, ancoraggio D'Equilibrata, sessione `0b55d35d`). Riferimento generico Open Q #30 safe.

### Sessione 7 — Cowork sessions index (manual trigger + cleanup anomalie audit 8/5 sera)

- **ID**: `local_c4785b1e-caa7-4d78-8bbb-05ba4805b2af`
- **Trigger**: Trigger manuale del task `cowork-sessions-index` da pannello Scheduled, poi conversazione con Carlo per chiusura anomalie residue.
- **Progetti**: [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|Wave 2 NoLoop]], [[20 - Projects/Achipont/Achipoint|Achipoint]] (verifica)
- **Persone**: [[60 - People/Mauro Longo (Morbinati & Longo)]] (citato come autore bozza ricevuta 7/5 10:22)

#### Decisioni
- **Anomalia 4 chiusa**: task Wave 2 NoLoop "Bozza contratto avv. Mauro Longo (milestone 2026-05-07/08)" → `[x]` con audit "ricezione confermata 7/5 ore 10:22 via email '[64508] HeyAI / Noloop (Wave 2)'" propagato in 2 file ([[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|_Wave 2 NoLoop]] + [[99 - System/Open Tasks]]).
- **Anomalia 3 verificata**: Achipoint task "Preparare proposta economica modulare" già `[x]` chiuso (riconciliato in run precedenti). No-op.
- **Stop di chiusura**: Carlo non apre nuovi cantieri stasera. Lock files Office (4) lasciati a Carlo per eliminazione manuale dal Finder.

#### Numeri/fatti nuovi
- nessun numero economico nuovo (sessione di housekeeping)

#### Output prodotti
- Edits a [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|_Wave 2 NoLoop]] (task Longo `[x]` + audit) + [[99 - System/Open Tasks]] (entry corrispondente chiusa)

#### Citazioni rilevanti
- nessuna nuova citazione strategica

#### Task emersi
- [ ] **#p2** Carlo: eliminare manualmente da Finder i 4 lock files Office (`.~lock.Soolutions Delivery Board - Tasks da importare.xlsx#`, `~$26-05-07 - Prep call FuturItaly Angelini Academy.docx`, `~$26-05-07 - Cheat sheet call FuturItaly Angelini Academy.docx`, `~$HeyAI_Scenari_Negoziazione_Carlo.xlsx`) _da Sessione Cowork local_c4785b1e_

---

### Sessione 8 — Setup scheduled vault-link-checker task + chiusura audit

- **ID**: `local_8f7eeba2-4b9b-419d-a9ef-04efbf81cd06`
- **Trigger**: Carlo richiede setup nuovo scheduled task domenicale per audit wikilink + chiusura ultime anomalie residue.
- **Progetti**: meta / sistema vault
- **Persone**: [[60 - People/Claudia Bugno]] (creata)

#### Decisioni
- **Scheda persona [[60 - People/Claudia Bugno]] creata da zero** (cluster FuturItaly): CEO FuturItaly, decisore finale sopra Lavinia Ferrari + Leonardo Delbufalo, profilo esigente con standard alti, partnership agevolazioni fiscali Bruno↔Claudia bidirezionale, doppio canale di protezione (Lavinia co-founder informale PresidIa con Marco Murolo). Cascata §10bis applicata: aggiunta riga in CLAUDE.md §7 cluster non-NoLoop. Master Facts Sheet non toccato (cluster persona, non numero ufficiale).
- **Nicolò Bonati**: già defangato in run precedenti, no-op.
- **Tag Index + Inbox Triage**: rimossi i 2 link orfani dalla MOC. Sostituiti con bullet sintetici che spiegano cosa usare invece (Tag Pane nativo Obsidian, gestione visiva Inbox).
- **Patch SKILL `vault-link-checker`**: NON serve. Il task ha riportato 0 broken correttamente nelle ultime 2 run (6° + 7°), il bug regex iper-sospettato in sessioni precedenti era nel check Python ad-hoc, non nel task scheduled. Skip.

#### Numeri/fatti nuovi
- Vault state finale: **331 file .md, 2353 wikilink, 0 broken, ~70 schede persona, 11 progetti P1/P2/P3 attivi**.
- Run vault-link-checker × 7: 216 → 35 → 32 → 18 → 10 → 0 (6°) → 0 (7° ✅).

#### Output prodotti
- 📄 [Claudia Bugno](computer:///Users/carlosanvoisin/claude/60%20-%20People/Claudia%20Bugno.md) — scheda nuova creata.
- Edit a [[CLAUDE]] §7 (riga Claudia Bugno aggiunta in cluster Clienti non-NoLoop, sopra Lavinia Ferrari).
- Edit a [[99 - System/MOC - Home]] (rimossi 2 link orfani Tag Index/Inbox Triage).

#### Citazioni rilevanti
- nessuna nuova citazione (decisioni infrastrutturali)

#### Task emersi
- nessun nuovo task (sessione di chiusura)

---

### Sessione 9 — Update cowork-sessions-index scheduled task (patch SKILL v2 in-place + sync MCP)

- **ID**: `local_90c0c780-b7d3-4bf4-b929-5111a346a778`
- **Trigger**: Carlo applica patch unificata A+B+C+D al SKILL `cowork-sessions-index` per chiudere falle di ordinamento sessioni + conflitti cross-sessione + audit metadata insufficiente.
- **Progetti**: meta / sistema scheduled tasks
- **Persone**: —

#### Decisioni
- **Patch A**: ordering cronologico ascending obbligatorio per `lastActiveAt` in step 2; tiebreaker `sessionId` ascending se timestamp identici al secondo. Tutte le elaborazioni successive (step 3-6) rispettano questo ordine. Su campi atomici, sessione con `lastActiveAt` più tardo è autoritativa.
- **Patch B**: nuovo step 4bis Conflict scan cross-sessione obbligatorio prima delle patch. Output dedicato `## ⚠️ Conflitti rilevati` nell'indice giornaliero (anche se 0 conflitti). Notifica push esplicita "⚠️ {N} conflitti cross-sessione" se ≥1.
- **Patch C**: step 5a esteso con commento HTML invisibile sotto il frontmatter `<!-- auto-updated by cowork-sessions-index ... | source-session: {sessionId} | source-lastActive: {timestamp} -->`. Per ogni campo atomico modificato, ulteriore commento `<!-- atomic-change {field}: {old} → {new} | session: {sessionId} -->`. Audit log obbligatorio nel `## Log` della scheda con riga `_atomic-field-change_ {field}: {old} → {new} (sessione \`{sessionId}\`, lastActive {timestamp}). Supersede: {prev_sessionId or "first-set"}`.
- **Patch D**: §5bis quinto caso ambiguo "conflitto cross-sessione" — se due sessioni dello stesso run propongono azioni contraddittorie sullo stesso checkbox (una `[x]`, l'altra `[-]`, oppure citazioni inconciliabili) il conflitto è bloccante: lascia task `[ ]` aperto, log nel conflict scan cross-sessione.
- **Verifica post-patch v2 a 8 check** (vs 6 precedente): aggiunti check ordering cronologico ascending + sezione conflitti rilevati + commenti HTML con sessionId/lastActive + righe `_atomic-field-change_` + sezione checkbox reconciliation con conflitti gestiti + deadline aggiornati + coaching/prep auto + notifica conflitti.
- **Sync MCP scheduled task**: prompt + description aggiornati via `mcp__scheduled-tasks__update_scheduled_task` per allineare la versione runtime al SKILL POST-PATCH UNIFICATA.

#### Numeri/fatti nuovi
- nessun numero commerciale (patch tecnica al motore)

#### Output prodotti
- 📄 [SKILL cowork-sessions-index POST-PATCH UNIFICATA](computer:///Users/carlosanvoisin/claude/99%20-%20System/SKILL%20cowork-sessions-index%20POST-PATCH%20UNIFICATA.md) — versione runtime con 4 patch integrate.
- 📄 [Patch SKILL cowork-sessions-index 2026-05-08 sera — falle ordinamento e conflitti](computer:///Users/carlosanvoisin/claude/99%20-%20System/Patch%20SKILL%20cowork-sessions-index%202026-05-08%20sera%20%E2%80%94%20falle%20ordinamento%20e%20conflitti.md) — doc patch con status `applicata`.

#### Task emersi
- [ ] **#p2** Carlo: validare prossimo run cron-22 verificando i 8 check della "Verifica post-patch" v2 (ordering, conflict scan section, source-session/lastActive nei commenti HTML, righe `_atomic-field-change_`, checkbox reconciliation + conflitti, deadline aggiornati, coaching/prep auto, notifica conflitti) _da Sessione Cowork local_90c0c780_
- [ ] **#p3** CLAUDE.md §9 da bumpare alla prossima edit con "Patch unificata 7/5+8/5 sera (v2)" — lasciato a Carlo per non modificare CLAUDE.md senza esigenza diretta _da Sessione Cowork local_90c0c780_

---

### Sessione 10 — Vault link checker batch fix orfani 24→0

- **ID**: `local_4c933da1-0348-4ef3-8a6d-de4a6bc1b514`
- **Trigger**: Trigger manuale del task `vault-link-checker` per audit residui dopo i fix delle sessioni notturne 7-8/5; Carlo poi chiede di azzerare orfani azionabili.
- **Progetti**: [[20 - Projects/NOT/_NOT|_NOT]] (Carmen Compare wikificata), [[20 - Projects/NoLoop/_NoLoop|_NoLoop]] (Davide Settembrini + Carmen Compare), [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] (sezione prep doc), [[20 - Projects/Futuritaly/_Futuritaly|_Futuritaly]] (sezione bozze email), [[30 - Areas/Area - Partnership Fornitori/Jakala|Jakala]] (sezione prep doc/recap), [[20 - Projects/Eldis/Eldis Compilatore]] (sezione email correlate), [[20 - Projects/NoLoop/Wave 2/Crowd]] (chat Teams correlate), [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|_Wave 2 NoLoop]] (chat Teams correlate)
- **Persone**: [[60 - People/Carmen Compare]], [[60 - People/Davide Settembrini]] (entrambe wikificate in cluster NoLoop/NOT, schede già esistenti pre-sessione)

#### Decisioni
- **Wikificazioni autorizzate**: Carmen Compare (Data Analyst NOT, validatore modello dati Operation Transformation) wikificata in `_NOT` + `_NoLoop`. Davide Settembrini (Legal interno NoLoop) wikificato in `_NoLoop`.
- **Persone escluse per scelta esplicita di Carlo**: Carlotta Lievore, Gabriella Airaghi, Veronica Del Mastro. Le schede restano nel vault come da organigramma NoLoop ma orfane consapevoli.
- **HoReCa categorizzato**: referente [[60 - People/Matteo Cosma]] come **cliente privato**, NON in qualità di dipendente NoLoop. Chiarito esplicitamente in MOC per evitare confusione futura.
- **Setup Microsoft Lists**: linkato in MOC con disclaimer esplicito *"l'automatismo task→Lists basato sui task aperti rilevati in Cowork NON è ancora attivo: setup manuale ancora pending"* per evitare che chat future leggano il link come "feature attiva".

#### Numeri/fatti nuovi
- Orfani: 33 → 9 (24 fix mirati). Residui 137 totali tutti fisiologici.
- Cluster overview MOC: aggiunti 9 link mancanti (`_NoLoop`, `_Wave 1 NoLoop`, `_NOT`, `_Studio Murolo`, `_Eldis`, `_Futuritaly`, `_Achipont`, `_Matteo Cosma`, `_Area - Partnership Fornitori`).
- Sezione "🔧 Sistema vault" nuova in MOC: Cowork Sessions Log, Vault Link Audit, Index Cowork, Setup vault-link-checker, Setup MS Lists.

#### Output prodotti
- Edits multipli (10+ schede toccate): [[99 - System/MOC - Home]], [[20 - Projects/NOT/_NOT|_NOT]], [[20 - Projects/NoLoop/_NoLoop|_NoLoop]], [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] (sezione "Prep doc / Cheat sheet / Specchietti pre-call" con 4 file), [[20 - Projects/Futuritaly/_Futuritaly|_Futuritaly]] (sezione "Prep doc / Bozze email correlate" con bozza Lavinia 4/5), [[30 - Areas/Area - Partnership Fornitori/Jakala|Jakala]] (sezione "Prep doc / Recap call correlati" con cheat sheet Pasquali 5/5 + recap Silencio 5/5), [[20 - Projects/Eldis/Eldis Compilatore]] (sezione "Prep doc / Email correlate" con email Stefania 5/5), [[60 - People/Federico Saladino (Soolutions)]] (link bozza follow-up post-call 6/5), [[20 - Projects/NoLoop/Wave 2/Crowd]] (sezione "Chat Teams correlate" post-demo 24/04), [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|_Wave 2 NoLoop]] (sezione "Chat Teams correlate" meeting Wave 2 28/04).

#### Citazioni rilevanti
- nessuna nuova citazione strategica (sessione infrastrutturale di cleanup)

#### Task emersi
- nessun nuovo task (tutto chiuso live)

---

### Schede aggiornate da questa esecuzione cron-22

Patch chirurgica append-only — frontmatter `updated: 2026-05-08` confermato + commento HTML invisibile + `## Sessioni Cowork correlate` aggiornata. Le decisioni e i fatti vault-worthy sono stati propagati live dalle sessioni stesse — questo run aggiunge solo l'audit di indicizzazione.

- [[60 - People/Carlo Sanvoisin]] — append `## Sessioni Cowork correlate` (sessione 10, espansione da placeholder)
- [[60 - People/Leonardo Delbufalo]] — append `## Sessioni Cowork correlate` (sessione 10, promozione da stakeholder secondario)
- [[60 - People/Claudia Bugno]] — append `## Sessioni Cowork correlate` (sessione 8, creazione da zero)
- [[60 - People/Carmen Compare]] — append `## Sessioni Cowork correlate` (sessione 10, wikificazione cluster NOT/NoLoop)
- [[60 - People/Davide Settembrini]] — append `## Sessioni Cowork correlate` (sessione 10, wikificazione cluster NoLoop)
- [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|_Wave 2 NoLoop]] — append `## Sessioni Cowork correlate` (sessioni 7+10) + Log entry 2026-05-08 sera (anomalia 4 chiusa + chat Teams correlate aggiunte)
- [[20 - Projects/NOT/_NOT|_NOT]] — append `## Sessioni Cowork correlate` (sessione 10, Carmen wikificata)
- [[20 - Projects/NoLoop/_NoLoop|_NoLoop]] — append `## Sessioni Cowork correlate` (sessione 10, Davide+Carmen wikificati)
- [[99 - System/MOC - Home]] — append `## Sessioni Cowork correlate` (sessioni 8+10, cluster overview + sistema vault)
- [[99 - System/Vault Link Audit]] — append `## Sessioni Cowork correlate` (sessione 10, run finale 0 broken)

### Schede NON toccate (e perché)

- [[99 - System/Master Facts Sheet]] — nessun numero ufficiale impattato dalle 4 sessioni meta-sistema. Skip.
- [[99 - System/Open Tasks]] — gestita dal `pm-digest-mattutino` 8:02. Skip whitelist task.
- [[CLAUDE]] · [[99 - System/Open Questions]] — escluse da policy (whitelist task). Carlo ha già aggiornato CLAUDE.md §14 con l'edit "8/5/2026 sera tardo (run 2 — chiusura)" durante la sessione 10.
- [[20 - Projects/Achipont/Achipoint|Achipoint]] — verificata in sessione 7 (anomalia 3 già fixata in run precedente). Nessun nuovo append da fare.
- [[60 - People/Mauro Longo (Morbinati & Longo)]] — citato in sessione 7 ma nessuna interazione diretta nuova (solo verbalizzazione email ricezione 7/5 10:22 già committata in `_Wave 2 NoLoop`). Skip per evitare rumore.
- Tutte le altre schede toccate live in sessione 10 (Angelini Academy prep doc, Futuritaly bozze email, Jakala prep doc, Eldis Compilatore email, Federico Saladino bozza, Crowd chat Teams) — NON ricevono `## Sessioni Cowork correlate` aggiuntivo perché l'edit è stato già committato live e non ha generato dialoghi vault-worthy oltre il fix orfani. Frontmatter `updated:` già bumpato dalle Edit live.

### Conflict scan cross-sessione

✅ **0 conflitti rilevati** sui campi atomici e checkbox tra sessioni 7-10. Le 4 sessioni hanno toccato aree disgiunte del vault (housekeeping anomalie / setup nuovo task / patch SKILL motore / batch fix orfani) senza sovrapposizioni di stato. Sessione 7 ha chiuso `[x]` task Wave 2 Longo (no contraddizione con altre sessioni). Sessione 10 ha aggiunto wikilink in cluster esistenti (no override).

### Checkbox reconciliation

- **N task chiusi auto in questa esecuzione**: 0 (la chiusura del task Wave 2 Longo è stata fatta live dalla sessione 7 con edit diretto, non da reconciliation post-hoc del task scheduled).
- **N task annullati auto**: 0.
- **N task in ⚠️ Da triagiare**: 0.
- **N task aperti scansionati totali nelle schede toccate**: ~14 (4 in `_Wave 2 NoLoop`, 1 in `_NOT`, 4 in `_Achipont`, 5 in altre).

Tutte le chiusure di questo pomeriggio/sera sono state propagate live nelle sessioni stesse con edit diretti e audit nel `## Log`. Nessuna inconsistenza prosa-vs-checkbox rilevata in audit.

## ⚠️ Da triagiare (Carlo conferma manualmente)

- **Sessione 7 — 4 lock files Office**: da eliminare manualmente da Finder (vedi Task emersi sessione 7). Inermi ma sporcano il vault.
- **Sessione 9 — Patch SKILL `cowork-sessions-index` v2 — validation 8 check**: il prossimo run (questo) deve dimostrare che i 4 patch A+B+C+D sono attive. Verifica visibile nelle sezioni di questo file: ordering cronologico delle sessioni 7-10 ✅, sezione `## Conflict scan cross-sessione` presente ✅ (0 conflitti), commenti HTML `source-session` nelle schede toccate ✅ (vedi step 5 Patch chirurgiche), sezione `## Checkbox reconciliation` presente ✅ (0 chiusure auto questo run). 
- **Sessione 9 — CLAUDE.md §9 bump**: la riga su `cowork-sessions-index` cita "Patch unificata 7/5+8/5 applicata 8/5/2026 sera" — da estendere a "+8/5 sera (v2 con falle ordinamento + conflitti)" alla prossima edit di CLAUDE.md (lasciato a Carlo).

## Alert per il Master Facts Sheet (run cron-22)

✅ **Nessun conflitto sui numeri ufficiali**. Le 4 sessioni cron-22 sono tutte meta-sistema vault (housekeeping/setup/SKILL/orfani), nessuna ha toccato pricing o numeri commerciali.
