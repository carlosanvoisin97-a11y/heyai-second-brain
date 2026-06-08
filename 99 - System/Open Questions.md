---
type: system
created: 2026-04-30
updated: 2026-06-08
---

> **Cleanup 14/5/2026**: archiviate 27 domande risolte (#1-#18 + #20-#28) in [[50 - Archive/System/Open Questions Archive 2026-04-05|Open Questions Archive 2026-04-05]]. In vivo restano solo le domande con follow-up attivo: #19 + #29 (IP Soolutions, workflow Longo aperto), #31-#33 (Angelini Academy), #34 (scheduler drift) + sezione 🔐 SICUREZZA. Risposte storiche preservate verbatim in archive per consultazione.
>
> **Aggiornamento 7/5/2026 (sera)** — Aperta **#34** sullo scheduler Cowork che non ha eseguito i task ricorrenti di oggi (`pm-digest-mattutino` 8:02 e `cowork-sessions-index` 13:07).

# ❓ Open Questions — Domande aperte (e con follow-up attivo)

## 🆕 Domande con follow-up attivo (al 14/5/2026)

### 38. 🆕 Angelini Academy: 3 verifiche aperte pre-pitch 5/6 (claim AI · Forum Nobel · pricing) _[aperta 1/6/2026]_

Emerse durante il redesign delle slide pitch (sessione 1/6 — dettaglio nel Log di [[_Angelini Academy|Angelini Academy]]):
1. **Claim SEO "gli assistenti AI (ChatGPT/Perplexity/Gemini/Claude) non accedono ai contenuti del sito"** — verificato sul sito reale (robots.txt/crawl) o da calibrare in "non leggono ancora pienamente"? Come assoluto in sala è smentibile (MIT/IE hanno tutor AI; i vendor LMS pure).
2. **"Forum con Premi Nobel"** — ricorre in più slide ma NON è tra i dati confermati da Carlo: verificare esistenza/format o rimuoverlo ovunque.
3. **Pricing definitivo** — working 48.500 vs 49.500, non ancora blessato: fissare prima della stampa (regola costo fornitore ≤60%).

NB fact-check 1/6: partner accademici (UCL · SDA Bocconi · IMD · LBS · IE · RCA · Stockholm SSE · LUISS · H-Farm · Talent Garden) MAI come competitor; tesi "quadrante libero" ristretta a "poco presidiato tra le academy industriali".

**Aggiornamento 1/6 (verifiche):**
- ✅ **Item 1 — claim AI VERIFICATO VERO**: `angeliniacademy.com/robots.txt` blocca esplicitamente GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot/anthropic-ai/Claude-Web, Google-Extended, CCBot (`Disallow: /`). I quattro assistenti citati non accedono davvero ai contenuti → claim difendibile e verificabile; fix = riaprire il robots.txt (quick win). **TENERE il claim** (rafforzabile). NB: distinto dal claim competitor "nessuno HA un assistente AI" (quello resta calibrato — MIT/IE ce l'hanno).
- ⚠️ **Item 2 — Forum Premi Nobel = VISIONE, non asset**: nel brief come "forum annuale con premi Nobel" (visione/4 pilastri) e, nel piano, "Angelini Academy Forum… **da valutare partecipazione di un Premio Nobel**". Online nessun evento Angelini con Nobel annunciato. → NON presentarlo come asset realizzato; usarlo come elemento della loro visione/piano o toglierlo dalle liste asset (BMC, valore exec-sum, ecc.).
- **Item 3 — pricing**: lo chiude Carlo.

### 37. ✅ Audit confidentiality: forward Germano Marano → Federico/Simone — verifica leak prezzi cliente _[aperta e chiusa 22/5/2026]_

Carlo ha richiesto audit meticoloso di tutti i forward inviati a Federico Saladino e Simone Montanari (Soolutions) originati da email di Germano Marano (NoLoop), per dubbio di aver esposto inavvertitamente prezzi cliente al team di sviluppo.

**Indirizzi controllati**: `federico@soolutions.io` + `info@federicosaladino.it` (storico pre-Soolutions, usato fino almeno 10/9/2025) + `simone@soolutions.io` + `simone@tokiostudio.it` + `simone.montanari97@gmail.com` (personale, usato fino almeno 10/9/2025).

**Forward identificati con origine Germano Marano** (Outlook Sent Items):

1. **10/9/2025** — `I: opportunità AI` → `simone.montanari97@gmail.com` + `info@federicosaladino.it`. Body = sintesi tecnica use case Eye Cookies (no cifre). Attach: `NOT EYE cookie requisiti.doc` (requisiti tecnici, no prezzi).
2. **2/3/2026** — `I: EYE cookie` (Risposte germano) → `info@federicosaladino.it` + `simone.montanari97@gmail.com`. Body = credenziali Microlog + risposte tecniche. Attach: solo image001.png.
3. **29/4/2026** — `I: EYE cookie` → `federico@soolutions.io` + `simone@soolutions.io`. Body = thread tecnico. Attach: `Esposizione Kippun I Gigli_28 apr 06.xlsx` (dati operativi visite I Gigli, NOT proposta economica HeyAI).
4. **20/5/2026** — `I: eye cook..next step` → `simone@soolutions.io`. Body = spostamento sensori + roadmap request + credenziali. No cifre, no attach commerciali.
5. **22/5/2026** — `R: EYE cookie` ("Raga vi giro email germano con nuove credenziali per microlog") → `federico@soolutions.io` + `simone@soolutions.io`. Body = sole credenziali Microlog aggiornate.

**Esito audit** (verifica programmatica grep `€`, `EUR`, cifre numeriche 3-6 digit vicino a keyword monetarie su tutti e 5 i body decodificati da HTML):

- ✅ **NESSUNA CIFRA EURO REALE** nei body dei forward. Parole "quotazione"/"preventivo"/"proposta economica" presenti ma sempre come riferimento generico ("discutere la quotazione del modulo", "dal vostro preventivo vorremmo conferma...") **senza importi numerici**.
- ✅ **NESSUN ALLEGATO PRICING HeyAI** propagato a Soolutions. I PDF `NOT_Quotazione...` / `NOT_Proposta di Investimento...` sono stati inviati SOLO al cliente (Marco Pasquali NoLoop, 5/3/2026 e 6/3/2026), MAI a Federico/Simone.
- ✅ I numeri ufficiali Wave 2 €300K, NOT Eye Cookies €75K, NOT Operation Transformation €109K **non compaiono in nessun forward al supplier**.

**Rischio residuo (LOW)**: Federico/Simone deducono dall'esistenza dei thread che esiste una negoziazione commerciale con NoLoop, ma questa è informazione strutturalmente nota (sono fornitori che producono le stime per le quotazioni stesse). Nessuna esposizione del **margine HeyAI** né delle **cifre cliente**.

**Conferma regola §13 CLAUDE.md (Riservatezze) preservata**.

Cascata applicata: aliases `emails_historical` aggiunti alle schede [[Federico Saladino (Soolutions)]] e [[Simone Montanari (Soolutions)]] per non perdere il mapping `info@federicosaladino.it` e `simone.montanari97@gmail.com` in audit futuri.

### 19. ✅ Federico/Simone Soolutions: IP Wave 2 accettato verbalmente _[ri-confermato Carlo 5/5/2026]_

- **Federico Saladino e Simone Montanari hanno accettato di NON prendere la proprietà intellettuale sulla Wave 2** (HeyAI tiene IP)
- Accettazione **verbale**; contratto interno HeyAI ↔ Soolutions ancora da formalizzare prima della firma cliente Wave 2 (avv. Longo 7/5)
- Duplicato di #29 (entrambe risolte sulla parte verbale, formalizzazione contratto pendente)

### 29. ✅ IP Wave 2 _[confermato Carlo 5/5/2026]_

- **HeyAI mantiene la proprietà intellettuale** sia verso cliente NoLoop sia verso sviluppatori Federico Saladino e Simone Montanari (Soolutions)
- Federico e Simone hanno **accettato verbalmente**
- **Formalizzazione contratto interno HeyAI ↔ Soolutions**: pendente, da chiudere prima della firma cliente
- Il modello Wave 2 NON replica Wave 1 (full transfer cliente)
- Verificare con avv. Longo nella bozza 7/5 che la clausola IP rifletta questo modello
- **🆕 8/6/2026 — Bozza prodotta**: Contratto Quadro HeyAI↔Soolutions + Ordini Esecutivi (modello base + OE NOT Operation Transformation). Formalizza l'IP da verbale a scritto — art. 8.4 CQ titolarità HeyAI di default, cessione sospensivamente condizionata al pagamento (art. 8.5). **Resta da firmare**; review di sicurezza con 5 nodi critici pre-firma → [[2026-06-08 - Review Contratto Quadro + OE Soolutions]]. Manca ancora l'OE ricognitivo Eye Cookies (CQ art. 15.1 lo cita)

### 36. 🔴 Identità reale di "Paolo Verrangia" — possibile soggetto con precedenti penali per frode fiscale

Aperta 21/5/2026 sera a valle della due diligence web richiesta da Carlo dopo aver ricevuto via WhatsApp l'email `paolo.vsignsrl@gmail.com` e il nome aggiornato.

Tre red flag emersi dalla ricerca pubblica:

1. **Dominio email gmail** invece di studio professionale — anomalo per commercialista 40+ anni con cliente NoLoop strutturato
2. **"VSign Srl" non riscontrabile** in Camera di Commercio Roma né online (verifica 21/5/2026)
3. **Cognome Verrangia + commercialista + Roma** → emerge direttamente un caso noto di frode fiscale: Paolo Verrangia citato negli articoli di stampa 2011 (Il Giornale, PMLI, Confcommercio) come collaboratore di Cesare Pambianchi (ex presidente Confcommercio Roma, condannato a 3 anni per frode fiscale strutturata, organizzazione di €600M+ di trasferimenti illeciti di società all'estero). In coda all'inchiesta, sequestri €160M nel 2017. Esiste anche un "Aldo Verrangia" citato nel 2017 — non chiaro se sia la stessa persona, parente, o persona distinta

**Esito processuale finale di Paolo Verrangia: TBD** (nessuna ricerca finora ha trovato sentenza definitiva).

Da chiarire/decidere:

1. **Conferma identità + coinvolgimento via Roberta Calajò** (messaggio già pronto, da inviare)
2. **Iscrizione Albo Commercialisti Roma**: Paolo Verrangia è radiato, sospeso o attivo? Verifica su ODCEC Roma
3. **VSign Srl esiste come entità giuridica**? Verifica diretta CCIAA Roma / Registro Imprese
4. **Sentenza definitiva** su Paolo Verrangia nell'inchiesta Pambianchi 2011 (assoluzione/condanna/archiviazione/stralcio)
5. **Donzelli sa del background?** Approccio discreto via Andrea Pazienza, se vale la pena indagare
6. **Cosa mandare a Verrangia anche se confermato**: i contratti integrali (rischio di breach Art. 15 Wave 1 / Art. 12.5 Wave 2) o solo la scheda tecnica di sintesi (esposizione minimizzata)?
7. **Strategia di comunicazione interna a HeyAI**: chi sa che HeyAI ha questa informazione (per ora solo Carlo + vault) — meglio mantenere riservato finché la verifica non chiude

Implicazione strategica: l'invio dei 3 documenti a Verrangia è **SOSPESO** finché non si chiude la verifica via Roberta + ODCEC + CCIAA.

Riferimenti vault: [[60 - People/Paolo Verrangia (commercialista NoLoop)]] §"Due diligence 21/5/2026".

### 35. 🆕 Stato contrattuale reale dei due progetti NOT (Operation Transformation + Eye Cookies)

Aperta 21/5/2026 a valle della rettifica Andrea Pazienza → Carlo → vault. Il vault fino al 20/5 indicava i due progetti come "contratti firmati 03/04 da Donzelli". La realtà:

- **Operation Transformation (€109K)**: contratto **emesso da HeyAI** ma **NON firmato** da Donzelli, **nessun feedback ricevuto**. Acconto pagato comunque da NOT
- **Eye Cookies (€75K)**: **documento contrattuale mai prodotto**. Esiste solo l'approvazione commerciale via email di Donzelli del 03/04 in modalità Full Ownership. Acconto pagato comunque da NOT

Da chiarire/decidere:

1. **Stato del rapporto contrattuale**: HeyAI ha fatturato acconti senza contratto firmato/prodotto. È prassi accettata col cliente (pattern Wave 2 Art. 1.4 efficacia retroattiva su attività propedeutiche), ma resta una **zona grigia operativa** che diventa critica con l'arrivo dell'audit fiscale di [[Paolo Verrangia (commercialista NoLoop)|Verrangia]]
2. **Comunicazione a Verrangia**: cosa dire nella scheda tecnica e nell'email del 21/5? L'attuale bozza dice "due progetti contrattualizzati" — formulazione **errata** alla luce dei fatti, da rivedere in "progetti in essere in fase di formalizzazione contrattuale"
3. **Strategia di formalizzazione**: produrre adesso i contratti ex novo con efficacia retroattiva (pattern Wave 2 Art. 1.4) o continuare a operare su email di approvazione + fatture emesse?
4. **Tempistica**: Donzelli ha bisogno di chiusura formale **prima** che Verrangia qualifichi gli investimenti AI ai fini fiscali — altrimenti l'agevolazione potrebbe essere indebolita dalla mancanza di documento sottoscritto a base della spesa
5. **Sollecitare Donzelli**: Andrea Pazienza o Carlo, e con quale leva (Verrangia stesso può essere usato come leva positiva: "il tuo consulente fiscale ci sta auditando, conviene chiudere la documentazione")

Riferimenti vault: [[20 - Projects/NOT/Operation Transformation]], [[20 - Projects/NOT/Eye Cookies]], [[60 - People/Paolo Donzelli]], [[99 - System/Master Facts Sheet]] §🍪 e §NOT.

### 31. 🆕 Angelini Academy: gara competitiva, scope finale e modello di partecipazione

Apertosi 5/5/2026 quando Caterina Caboni (Angelini) ha condiviso il brief con "le agenzie in gara". Da chiarire:

- **Numero e identità delle agenzie concorrenti** (per dimensionare lo sforzo del pitch)
- **Scope finale richiesto dal cliente**: solo progettazione architetturale + corporate presentation (come da brief 3/4 di Lavinia) o sito completo? Il documento di gara su SharePoint può aver ridefinito il perimetro
- **Budget reale** vs i 3 scenari (€2K / €4-5K / €10-12K) condivisi ad aprile come strumento di vendita interna di Elena
- **Modello di partecipazione HeyAI**: in proprio o come delivery partner di FuturItaly (analogamente al modello aperto su [[Jakala]])
- **Decision maker reale lato Angelini**: [[Caterina Caboni]] o [[Tiziana Carnicelli]]? Elena parlava di "una donna referente" — TBD

Vedi [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]].

**🔴 Aggiornamento 5/6/2026 (pitch svolto, confermato Carlo 6/6)** — gran parte dello scope era **già aggiudicata a un fornitore concorrente** (gara comunicazione feb→giu: social + restyling + editoriale/blog + stile, contratto lug'26→lug'27). Risolve in parte la domanda scope/concorrenti, ma apre: (a) **identità del concorrente** ignota; (b) **economia FuturItaly** — editoriale (loro margine) bloccato fino ~2027, da ridefinire cosa si vende nel 2026; (c) **decision maker** confermato Caterina operativa + Tiziana gate a valle; (d) **"Francesco"** (area ricerca Angelini) nuovo stakeholder da triagiare. Dettaglio: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|scheda madre]] §Log 2026-06-05.

**🟢 Aggiornamento 8/6/2026 (trascrizione integrale 1h28m)** — delta operativi: (a) **SEO + Analytics NON nel pacchetto del concorrente** (*"rimasti molto alti"*, *"in stand by"*) → spazio residuo HeyAI 2026 oltre all'architettura; (b) **editoriale a noi = da luglio 2027** (fine contratto concorrente lug→lug), non "metà 2027" generico; (c) **pricing del deck (€89.880 core) non discusso in call** → da ripacchettizzare a fasi (pre-workshop→1→2) PRIMA dell'invio, verificando il markup FuturItaly 10%. Dettaglio: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|scheda madre]] §Log 2026-06-08.

### 32. 🆕 Angelini Academy: ruolo di Daniele Caporale lato FuturItaly

[[Daniele Caporale]] (Communication strategist FuturItaly) appare come driver del dialogo diretto con il cliente sul brief di gara. Da chiarire:

- È peer di Elena Chiti o sopra/sotto di lei nel pitch?
- Per il Q&A dell'8/5: chi presenta cosa (Daniele apre, Carlo subentra sul metodo)?
- Storia di precedenti collaborazioni con Carlo / HeyAI

### 33. 🆕 Angelini Academy: brand book ereditato — accesso ai materiali

Elena ha detto in call (9/4) che il cliente ha già un brand book ereditato dal gruppo Angelini. Da verificare:

- Brand book sarà condiviso prima del Q&A 8/5 (parte del materiale SharePoint?) o solo dopo eventuale aggiudicazione?
- Vincoli reali su tipografia/colori/lessico vs margine creativo

### 34. 🆕 Scheduler Cowork: perché i task ricorrenti del 7/5 non sono stati eseguiti _[aperta 7/5/2026]_

Constatazione fattuale (verificata via `mcp__scheduled-tasks__list_scheduled_tasks` il 7/5 sera): `pm-digest-mattutino` ha `enabled: true`, `nextRunAt: 2026-05-07T06:02Z` (08:02 CEST oggi) ma `lastRunAt: 2026-05-06T06:38Z` — **non eseguito**. Stesso pattern per `cowork-sessions-index` del run 13:07 di oggi. Conseguenza: Open Tasks è rimasto snapshot del 6/5 fino al fix manuale di stasera.

Da chiarire:
- Cause possibili: client Cowork non running 8:02 CEST? bug scheduler? conflitto con altri run pendenti? Vedi anche [[50 - Archive/System/Audit Claude Chats Estrazione 2026-05-07|Audit Claude Chats Estrazione (archiviato)]] §"Investigazione collaterale".
- Fix: trigger manuale dal pannello Scheduled (può essere fatto on-demand) recupera il digest del giorno.
- Strutturale: serve verificare che il client Cowork sia running ogni mattina prima delle 08:02 CEST per non perdere il digest. Oppure capire se l'esecuzione lato server può andare avanti a prescindere.

Stato: aperta. Da investigare in autonomia o con Anthropic se persiste nei prossimi giorni.

### 35. ✅ Angelini Academy: modello accesso Hub editoriale Engaged Research _[aperta 18/5/2026 post-call FuturItaly · chiusa 18/5/2026 sera via WhatsApp Elena Chiti]_

Emersa in call FuturItaly 18/5 ore 17 (vedi [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|scheda madre]] §Eventi calendario).

Il Key Account FuturItaly dichiara che l'Hub editoriale Engaged Research è il **principe** della proposta — è la voce su cui FuturItaly costruisce la propria offerta economica. Non può essere assorbito dentro un blog generico (*"odio il blog"*).

**✅ RISOLUZIONE 18/5/2026 sera — Variante B Community-Only confermata** (WhatsApp Elena Chiti, citata in [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|scheda madre]] §Log 2026-05-18):

> "L'editoriale dovrebbe permanente, dovrebbe essere non visibile a tutti, quindi ha alcuni cluster che potrebbe essere la comunità interna e la parte più di accademici e ricercatori, neanche imprese, non media che si fanno le informazioni, ma gente qualificata. […] Una soluzione potrebbe essere anche che lasciamo decidere a loro, partendo dalla nostra proposta, con quella opzione complementare."
> — **Elena Chiti** (FuturItaly), WhatsApp 18/5/2026 sera

**Decisione operativa**:
- **Hub editoriale = login community wall** (accademici + ricercatori + community interna; **NO** media, **NO** imprese non-qualificate).
- Variante A pubblica resta **opzione complementare da offrire al cliente al pitch 31/5** — proposta base = community-only, ma il cliente decide al closing se aprire un teaser pubblico in homepage o tenere tutto dietro login.
- **Posizionamento commerciale**: l'hub diventa il **gancio principale per qualificare lead della community** (CTA differenziate per target in homepage + chiusura percorsi: *"vuoi entrare nel network? vuoi conoscere le aziende? vuoi collaborare con altri ricercatori? vuoi accedere al laboratorio editoriale? → iscriviti alla community"*). Una volta dentro: newsletter + community management con moderatore + conversazioni con alumni/talenti del percorso + collaborazione paper.
- **Coerenza con loop 3 strati**: variante B mantiene la separazione pulita pubblico (posizionamento comunicativo strategico) / community (funnel di engagement/conversione/bacino qualificato) / interno. Il sito diventa **funnel progressivo** che risponde a tutti gli obiettivi Angelini.
- **Costo**: leggermente più alto rispetto a sito interamente pubblico (gestione community wall + onboarding + moderazione), giustificato dal valore del laboratorio editoriale + obiettivo conversion.

**Propagazione da fare** (post-chiusura, agente live §15):
- [[Sintesi Strategica Pre-PPTX 2026-05-18]] da patchare v1.2 con community-only + CTA differenziate per target
- [[Pitch Outline 18-5 — Strategia Angelini Academy Short]] Slide 14 OS5bis Hub editoriale → label community-only + offerta complementare variante A pubblica
- Mockup `/engaged-research`: aggiungere login wall + teaser pubblico (titoli + 2-3 righe) + flow onboarding community
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|scheda madre]] §Task aperti: 4 task strutturali community-only nuovi propagati nel Log 2026-05-18 di questa data.

## 🔐 SICUREZZA — da rotare/sistemare

- `[credenziale rimossa per sicurezza — vedi §13, ruotata 30/4]` su SharePoint NolooponTrade/Generale/Password.docx
- 2 token onboarding LeadMe esposti in chat Teams
- `[credenziale rimossa per sicurezza — vedi §13, ruotata 30/4]` condivisa post-demo
- SMB path interni Eldis (`[host interno rimosso — vedi §13]`) in chiaro Teams
- **Azione**: rotare credenziali, spostare in password manager

## 📚 Storico

Per le 27 domande risolte tra 30/04 e 5/5/2026 (#1-#18 + #20-#28) → [[50 - Archive/System/Open Questions Archive 2026-04-05|Open Questions Archive 2026-04-05]]
