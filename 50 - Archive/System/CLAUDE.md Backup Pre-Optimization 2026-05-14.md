> 📦 **Backup pre-ottimizzazione token**: snapshot del CLAUDE.md prima del refactoring 14/5/2026 (riduzione ~60% token per context engineering best practices). File operativo attuale: [[CLAUDE]].

---
type: system
created: 2026-05-05
updated: 2026-05-13
status: operational (post-refactoring 6/5/2026)
purpose: Istruzioni di sistema per ogni chat Cowork che apre questa cartella
---

# CLAUDE.md — Istruzioni per ogni chat Cowork su questo vault

> ✅ **Refactoring 6/5/2026 completato**: vault riorganizzato in sottocartelle cliente (vedi §3.1), `70 - Meetings/` deprecata (minute assorbite via §15), 4 nuovi template in `90 - Templates/`, scheduled task `cowork-sessions-index` attivo (cron `22 20 * * *` 1x al giorno + trigger manuale on-demand). Snapshot pre-refactoring: [[50 - Archive/System Snapshots/Vault Snapshot 2026-05-06|Vault Snapshot 2026-05-06]].

> Questo file è il primo che ogni nuova chat Cowork deve leggere. È la sintesi operativa del secondo cervello di [[60 - People/Carlo Sanvoisin|Carlo Sanvoisin]] (HeyAI Digital). Non sostituisce le fonti autoritative (in particolare [[99 - System/Master Facts Sheet]]); le condensa per orientamento immediato.

## 1. Identità utente

Carlo Sanvoisin — founder e PM di **HeyAI Srl** (B2B AI consulting, Roma). Italiano nativo. Lavora come PM su progetti AI per clienti enterprise e PMI; opera in modo rigoroso, audit-driven, con forte attenzione a contratti, IP, numeri.

- HeyAI Srl: sede Via Parigi 11, 00185 Roma · CF 17947791004 · REA RM-1751505 · PEC `heyai@pec.it` · sito `www.heyaidigital.it`
- Soci (conferma 5/5/2026): Carlo 20% · Andrea Pazienza 20% · Michele Mattucci 20% · Bruno Mattucci 40%
- Cliente N°1: **NoLoop Srl** (>60% del lavoro). Fatturato cliente €55M/anno, ~150 dipendenti

## 2. Tono e formato di risposta

- **Italiano sempre.** Non passare all'inglese se non per termini tecnici consolidati.
- Tono da PM: concreto, rigoroso, no fronzoli, no postamboli ridondanti, no marketing speak.
- Privilegiare la prosa; usare liste solo dove servono davvero (numeri, opzioni, scenari).
- Niente emoji nei titoli di nuovi documenti, salvo eccezioni dichiarate. Tag visivi minimi (📁, 💰, ⚠️, ✅, ❌, 🟢, 🔴) ammessi solo se replicano lo stile delle schede esistenti.
- Mostrare il dito sui rischi anche scomodi: Carlo preferisce essere contraddetto in privato che imbarazzato in call cliente.
- Audit-first: prima di proporre numeri o quotazioni, verificare il [[99 - System/Master Facts Sheet]] e le schede progetto. Errori di math = bocciatura cliente.

### 2.0 Lunghezza risposte chat — REGOLA OPERATIVA

Le risposte in chat (non i deliverable nel vault) devono essere **brevi e chirurgiche**. Default: **max 250 parole** per analisi/decisioni, **max 100 parole** per risposte tattiche o conversazione, salvo richiesta esplicita di Carlo di approfondire.

Cosa NON fare:
- Sezioni "Lessons", "Cosa NON cambierei", "Mindset" e simili a fine risposta
- Tabelle ridondanti che ripetono numeri già nel testo
- Headers di livello 2/3 in chat (servono nei file vault, non nelle risposte)
- Riformulare in chat tabelle che esistono già nel vault — link al file e basta

Cosa fare:
- Una sintesi diretta + decisione + azione richiesta
- Tabella **una sola volta** se servono numeri comparativi
- Domande chiarificatrici se mancano dati, invece di risposte ipotetiche lunghe
- Se l'analisi richiede davvero più parole, mettila nel vault e linka

Se Carlo chiede esplicitamente "spiegami in dettaglio", "fai analisi completa", o simili, allora si può andare oltre.

### 2.1 Stile email di Carlo (regola operativa)

Quando si redigono bozze di email da inviare per conto di Carlo, **prima** controllare 2-3 sue email recenti via Outlook search (`sender: c.sanvoisin@heyaidigital.it`) per calibrare il tono. Pattern osservati (Mag 2026):

- **Apertura**: `Ciao [Nome],` + frase di ringraziamento o saluto contestuale (`grazie mille per...`, `grazie ancora per...`, `ancora grazie per averci coinvolto e per avermi condiviso tutto il contesto!`, `nessun problema, figurati!`). L'apertura termina spesso con `!` per dare calore.
- **Frase di transizione**: una riga che chiude il saluto e introduce il merito (`Ti confermo la mia disponibilità per...`, `Ti aggiorno...`, `Di seguito vi lascio un recap...`, `Inoltre, come da accordi, ti aggiorno...`).
- **Corpo**: prosa fluida. Quando serve elenco, **bullet con `*`**, **mai `1./2./3.` numerati** (eccetto azioni in stretta sequenza). Frasi medio-lunghe ma asciutte, ogni bullet 1-3 righe, niente bullet point disguised as text.
- **Linguaggio**: italiano professionale ma colloquiale. Espressioni tipiche: `ti confermo`, `ti aggiorno`, `ragioniamoci insieme`, `se sei d'accordo`, `figurati`, `grazie intanto per`, `così da [...]`, `per chiudere il punto`, `come da accordi`, `per non [...]`.
- **Marker di cautela** spesso usati per non chiudere troppo presto o non sembrare presuntuosi: `Da una prima lettura...`, `potenzialmente`, `magari`, `eventualmente`, `in caso volessimo`.
- **Spostare decisioni in avanti**: pattern ricorrente per non bruciare opzioni — "magari ci ragioniamo dopo la call quando avremo un quadro più chiaro", "valutiamo a valle di...". Mai forzare scelte premature.
- **Rationale brevi incastrati nella frase**: spiega il perché in 4-5 parole dentro il flusso naturale, non come paragrafo a sé. Esempio: "potremmo valutare se proporci anche su queste **per non splittare i fornitori**, magari ci ragioniamo dopo".
- **Anglismi tecnici accettati** quando suonano naturali nel parlato professionale italiano: `website`, `invitation`, `meeting`, `mockup`, `brief`, `kickoff`, `call`. Non forzare la traduzione se l'inglese è la forma usata in quel contesto operativo.
- **Chiusura**: `Fammi sapere se ti torna tutto, per qualsiasi cosa resto a disposizione!` (preferito a "per dubbi o domande" perché più aperto e meno burocratico) → `A presto,` + nome (`Carlo`). Per i conoscenti diretti basta il nome; per i contatti più formali firma completa con HeyAI/contatti.
- **Cose da NON scrivere**: `il modo migliore per`, `davvero`, `con calma`, formalismi pesanti tipo `cordialmente`, postamboli stile `siamo a disposizione per qualsiasi chiarimento`.
- **Verbi sostantivati nei bullet di recap/decisioni/prossimi passi (NUOVO 13/5/2026, da email Elena inviata)**: nelle email di recap call e nelle liste di prossimi passi/decisioni Carlo usa **forma impersonale sostantivata**, NON prima persona ("chiudo l'analisi"), NON seconda persona ("aspetto il tuo feedback"). Esempi: `Divisione dei cluster su due assi —...`, `Riprendere e integrare nel Pitch la proposta...`, `Condivisione di eventuali feedback...`, `Condivisione con il Team HeyAi del brand book...`, `Conferma del touchpoint per venerdì pomeriggio`. Più asciutto, neutro sull'agente, focalizzato sull'azione. **Niente owner tra parentesi nei bullet**: la natura del task suggerisce l'owner.
- **Frase di transizione "per tenere il punto sui vari task aperti" / "per tenere il punto"**: pattern PM tipico Carlo, molto più asciutto di "battere i tempi", "traghettare le date", "mantenere la timeline". Da usare nelle email di recap post-call.
- **Apertura senza punto esclamativo iniziale (variante asciutta)**: `Ciao [Nome],` + virgola + frase asciutta. Il `!` va riservato alla chiusura. Quando l'email è breve e operativa (recap, follow-up tecnico), l'apertura calorosa con `!` non serve.
- **Chiusura asciutta variante condensata**: `Per qualsiasi cosa resto a disposizione!` — versione abbreviata di `Fammi sapere se ti torna tutto, per qualsiasi cosa resto a disposizione!`, da usare quando l'email non richiede conferma esplicita.
- **"Team HeyAi" invece di "HeyAI"** nelle email a partner/intermediari (FuturItaly, Soolutions, Jakala): auto-presentazione come collettivo collaborativo, non come azienda-fornitore concorrente. Abbassa la temperatura competitiva.
- **"Pitch" maiuscolo** quando si riferisce al pitch finale di una gara nominata (es. Angelini Academy 31/5) come milestone identificata.
- **Bullet senza punto fermo finale** — convenzione consolidata.
- **"Ieri" anche se la call è di oggi**: nelle email di recap inviate la sera tardi (post 20:00) di una call svolta in giornata, usare "ieri" perché il destinatario leggerà il giorno dopo.
- **Tono**: caloroso e diretto, mai distante né burocratico. L'energia delle sue email è "PM operativo che fa girare le cose", non "consulente che recita la sua parte".
- **Regola assoluta — NEL TESTO DELLE EMAIL AI CLIENTI, NON CITARE MAI per nome i fornitori HeyAI** (Soolutions, Silencio, Jakala, Tokio Studio, ecc.). Carlo li considera **suoi collaboratori**, non fornitori distinti, e li riferisce sempre come `team di sviluppo` (prima menzione) o `team tecnico` (ripetizioni), oppure più genericamente `il team` / `il nostro team`. Vale per email a NoLoop, Eldis, Achipont, Futuritaly, Studio Murolo, Matteo Cosma, Angelini Academy. Se in bozza compare "Soolutions / Federico / Simone", **riscrivere prima di proporre**. Eccezione: nelle email INTERNE a Federico/Simone, si usano i nomi propri (pattern §2.1.bis).
- **Esempi corretti**: "a valle di un allineamento interno con il team di sviluppo", "il team tecnico tocca con mano il flusso", "il nostro team sta finalizzando".
- **Esempi sbagliati**: "il team Soolutions", "Federico ci ha confermato", "Simone sta lavorando su…".
- **Reminder mail — pattern compatto (NUOVO 13/5/2026, da rewrite Carlo su recap Justin+Carmen+Laila)**: apertura `vi scrivo solo per un reminder veloce` (il `solo` smorza il chase, è cortesia formale non urgenza-panico). Parentesi cortissime per puntare al thread sottostante (`(qui sotto)` invece di `che trovate qui sotto`). **Append di topic aggiuntivi con `+ tema X in capo a Y`** invece di paragrafi separati o bullet (es. `(qui sotto) + il tema spedizione prodotti in capo a Laila`) — pattern compatto che mantiene una sola frase senza spezzare il flusso. **TAGLIARE la doppia offerta `supporto / call`** quando l'email è già un ask aperto: il destinatario sa che può rispondere come crede, esplicitarlo è ridondante e fa sembrare la mail più lunga del necessario. **Chiusura condensata in una sola riga**: `Fatemi sapere, per qualsiasi cosa resto a disposizione!` (variante asciutta della chiusura standard, senza `come preferite procedere` o simili). **`!` finale anche su frasi non-saluto** per spingere energia sul punto centrale (es. `non rallentare la delivery!`) — Carlo usa l'esclamativo come spinta operativa, non solo come segno di calore in apertura/chiusura.

**Formato di consegna in chat** quando si scrive una bozza email per Carlo: testo pulito senza wrapping artificiale, ogni paragrafo come riga continua, riga vuota tra paragrafi. **No code block, no tag formattazione che andrebbero rimossi prima del paste in Outlook.** Carlo vuole copia-incolla diretto.

Se la bozza non rispecchia questi pattern, riscriverla prima di proporla.

### 2.1.bis Pattern follow-up INTERNO Federico+Simone (Soolutions) — addendum 13/5/2026

Quando si scrive un recap interno a Federico e Simone (mail informale, no cliente), il tono si fa più asciutto rispetto al pattern email standard §2.1. Lezione consolidata da riscrittura Carlo 13/5 (file di riferimento: [[00 - Inbox/2026-05-13 - BOZZA Email Recap Federico Simone allineamento interno]] sezione "Diff sostanziale"):

- **Apertura asciutta**: `bella raga, metto il follow-up della call di oggi.` — NO preambolo metodologico ("ho tolto i chiusi, ho mantenuto gli aperti, ho aggiunto..."). I diff li gestisce il lettore.
- **NO qualificatori "carry-over dal X/5"** nei bullet. Carry-over si integrano come bullet semplici. La memoria del thread la tiene Federico+Simone, non la mail.
- **NO rationale** ("perché lo facciamo"). Solo l'azione richiesta. I rationale li si discute a voce.
- **@mention diretti** per delegare azione specifica: `@Andrea Pazienza prepara X`, `Fede abilitami Y`, `Simone fai check Z`. Usa il sistema di mention di Outlook/Teams per notifica.
- **Imperative dirette** quando deleghi: `ci pensi tu`, `mi mandi`, `mandatemi`, `abilitami` — niente cuscinetti tipo "puoi cortesemente".
- **Rimando alla minuta cliente** quando esiste: "Per altri punti pending lato sviluppo fate riferimento alla mia minuta condivisa anche con [persone cliente]". Pattern che evita di duplicare la mail cliente nel recap interno (la mail cliente è il contratto di riferimento condiviso).
- **Combinare progetti correlati** in una sezione unica se la mail è breve (es. "NOT — Eye Cookies + Operation Transformation" come unica sezione anche se in vault sono schede separate).
- **TOGLIERE dall'email tutto ciò che non richiede azione**: decisioni già prese in call con nessun follow-up (es. OnSite "ci tiriamo fuori"), sezioni sensibili che si gestiscono a voce (es. HoReCa "quotazione fuori margine"), note interne tipo "godmode admin non è bug" (resta in scheda vault, non in mail).
- **Link a documenti operativi inline** (es. `[Wave2_RequirementLog_Soolutions.xlsx](https://...)`). Federico+Simone leggono e agiscono sul link prima della call successiva.
- **Bullet brevi**, 1 riga ciascuno quando possibile, MAX 2-3 righe se serve precisare. Periodo medio = 12-15 parole.
- **Niente "owner / due date" inline** — la delega è implicita dalla @mention o dall'imperativa.
- **Sezione finale "Operativo"**: per i meta-task (tool/processo, indirizzi, accessi). Sempre l'ultima.

**Cose che Carlo TAGLIA quando rivede una bozza interna**:
1. Preambolo che spiega cosa hai fatto come PM
2. Qualificatori carry-over esplicitati
3. Citazioni testuali della call interna
4. Rationale dei numeri ("su €160K spalmati una bella ruota in un colpo...")
5. Note tecniche difensive ("il blocco è tecnico, non commerciale")
6. Decisioni senza azione (OnSite, HoReCa)
7. Note interne che restano in scheda vault (godmode, citazioni Federico/Simone)
8. Sezioni "Diff vs follow-up del X/5" (sono note interne PM, non email)

**Cose che Carlo MANTIENE/AGGIUNGE**:
1. Link operativi a documenti SharePoint
2. Comunicazioni proattive da fare al cliente ("Comunico al cliente che siamo ufficialmente partiti!")
3. Urgenze cliente esplicitate ("devo dare comunicazione a cliente su disponibilità MVP")
4. Carry-over importanti che la bozza Claude aveva perso (es. Minutes "password reset massivo" 5/5)
5. Enhancement che la bozza Claude aveva degradato a #p2 (es. Venue Finder "estetica presentazioni")
6. Stati condizionati ("appena decidiamo la formula vi giriamo il bonifico") invece di promesse non vincolate ("vi giro il bonifico tra oggi e domani")

Le bozze interne che produci per Carlo vanno **ricontrollate** contro questo addendum prima di consegnarle, oltre che contro §2.1 generale.

## 3. Struttura del vault (PARA modificato + sottocartelle cliente)

### Cartelle top-level

| Cartella | Contenuto |
|---|---|
| `00 - Inbox/` | Note volatili, panoramiche giornaliere, scenari da processare, prep doc pre-call, bozze email |
| `10 - Daily Notes/` | Daily notes Obsidian |
| `20 - Projects/` | Schede progetto attive — **organizzate per cliente** in sottocartelle (vedi §3.1) |
| `30 - Areas/` | Aree continue di responsabilità (Governance, Amministrazione, Team & HR, AI Solutions, Cybersecurity, Partnership Fornitori, Performance & Coaching) |
| `40 - Resources/` | Metodologie HeyAI, prompt library, **atomic notes** in `Concetti/` (pattern decisori, modelli commerciali, regole pricing, lezioni performance — knowledge operativo riusabile, vedi [[99 - System/MOC - Home]] §Pattern Library) |
| `50 - Archive/` | Materiali storici (incl. minute meeting archiviate da `Meetings/2026/`) |
| `60 - People/` | Schede persona (56+ schede, una per stakeholder rilevante) |
| ~~`70 - Meetings/`~~ | **DEPRECATA 6/5/2026** — minute assorbite nelle schede via §15 Vault-live update |
| `80 - Sources/` | Fonti grezze: Claude Chats, Cowork Sessions, Files (artifact PDF/docx/xlsx), Teams, Censimento SharePoint |
| `90 - Templates/` | Template documenti |
| `99 - System/` | Master Facts Sheet, MOC Home, Open Questions, Open Tasks, Digest/Cowork Sessions Log, Setup Microsoft Lists, Workflow Capture |

### 3.1 Architettura `20 - Projects/` (post-refactoring 6/5/2026)

I progetti sono organizzati **per cliente in sottocartelle**. Ogni cliente ha una scheda `_Cliente.md` (overview) + le schede progetto. Convenzione `_` davanti = scheda principale (sort-first in Obsidian).

```
20 - Projects/
  NoLoop/                                    (cliente N°1)
    _NoLoop.md                                  ← overview cliente
    Wave 1/_Wave 1 NoLoop.md                    ← scheda macro chiusura Wave 1
    Wave 2/_Wave 2 NoLoop.md                    ← scheda macro Wave 2
    Wave 2/Crowd.md, LeadMe.md, Minutes.md, Venue Finder.md   ← moduli evoluti da Wave 1
    Wave 2/Sally.md, Link.md, Flow.md, OnSite.md              ← moduli nuovi Wave 2
    Wave 2/Numeri Ufficiali Roadmap 2026.md     ← riferimento numeri PDF 13/04
  NOT/                                       (cliente, divisione NoLoop on Trade)
    _NOT.md, Operation Transformation.md, Eye Cookies.md, NOT Marketing - LinkedIn e Sito.md
  Eldis/                                     (cliente Eldis Net)
    _Eldis.md, Eldis Compilatore.md             ← include AI Product Catalogue mergiato 6/5
  Futuritaly/                                (cliente diretto + intermediario)
    _Futuritaly.md, Osservatorio Strategico.md, Sito Futuritaly.md, FutureKids.md
    Angelini Academy/                         (gara via FuturItaly)
      _Angelini Academy.md, Analisi Brief.md, Domande QA.md, Brief Mockup.md,
      Analisi Narrativa.md, Analisi Narrativa Short.md, Wireframe e Architettura.md,
      Q&A preparatorio 8 maggio.md
  Studio Murolo/                             (cliente)
    _Studio Murolo.md, PresidIa.md
  Achipont/                                  (cliente)
    _Achipont.md, Achipoint.md
  Matteo Cosma/                              (cliente personale, doppio cappello con NoLoop)
    _Matteo Cosma.md, HoReCa.md
```

### 3.2 Architettura `30 - Areas/`

```
30 - Areas/
  Area - Governance HeyAI.md                 (file singolo)
  Area - Amministrazione e fatture.md
  Area - Cybersecurity & Compliance.md
  Area - Team & HR.md
  Area - AI Solutions (Prodotti Interni).md  ← catalogo aggregato prodotti HeyAI
  Area - Partnership Fornitori/              (sottocartella)
    _Area - Partnership Fornitori.md, Jakala.md
  Area - Performance & Coaching/             (sottocartella)
    _Area - Performance & Coaching.md, post-mortem call (Carlo Performance ...)
```

Hub di navigazione: [[99 - System/MOC - Home]]. Fonte autoritativa numeri: [[99 - System/Master Facts Sheet]]. Domande aperte: [[99 - System/Open Questions]]. Briefing strategico fornitori: [[50 - Archive/DPIII/DPIII Fase 4 — Briefing per consolidamento|DPIII Fase 4 — Briefing per consolidamento (archiviato)]].

## 4. Convenzioni di scrittura

- **Wikilinks** `[[NomeFile]]` per ogni riferimento incrociato a progetti, persone, risorse.
- **Wikilinks a schede underscore-prefix — RISOLTO 14/5/2026 via `aliases:` nel frontmatter** (`_Wave 2 NoLoop.md`, `_Futuritaly.md`, `_Achipont.md`, `_Angelini Academy.md`, `_Eldis.md`, `_NoLoop.md`, `_NOT.md`, `_Matteo Cosma.md`, `_Studio Murolo.md`, `_Wave 1 NoLoop.md`, `_Area - Partnership Fornitori.md`, `_Area - Performance & Coaching.md`): ora ogni scheda ha `aliases:` in frontmatter con la forma naturale senza underscore (es. `_Eldis.md` → `aliases: [Eldis, Eldis Net]`). Carlo può scrivere indifferentemente `[[Eldis]]` o `[[_Eldis|Eldis]]`: Obsidian li risolve entrambi nativamente, e il SKILL `vault-link-checker` v4 (patch 14/5) legge gli alias prima del check broken. Lo stesso vale per i file lunghi con coda cliente (es. `Accessibility Specs Sito Nuovo Angelini Academy.md` ha `aliases: [Accessibility Specs Sito Nuovo]`). **Regola operativa per nuove schede underscore-prefix o nomi-lunghi**: aggiungere SEMPRE `aliases:` in frontmatter con le forme naturali che Carlo userebbe spontaneamente.
- **Wikilinks a schede underscore-prefix — convenzione legacy** (pre-patch 14/5, ancora ammessa): `[[_NomeFile|Display senza underscore]]` resta valida e funzionante. Le due forme coesistono — alias per il caso comune, esplicito per quando serve display custom.
- **Wikilinks dentro esempi/template**: SEMPRE wrappare in backtick singolo per evitare che Obsidian li parsi come link reali. I placeholder usati nei template (formato testuale `Persona 1`, `Progetto 1`, `Nome Progetto`, `Nota collegata`, `scheda1`, `Vecchio`) sono "rotti per design" se non backtickati e inquinano il report `vault-link-checker`. Esempio corretto: scrivere `[[NomeFile]]` (con backtick attorno) anziché senza.
- **Frontmatter YAML** standard: `type`, `status`, `priority`, `client`, `created`, `updated`, `stakeholders`. Vedi `90 - Templates/Project.md` come riferimento.
- **Frontmatter `projects:`/`stakeholders:`**: i valori devono matchare ESATTAMENTE i basename dei file (incluso `_` prefix dove esiste). `projects: [Futuritaly]` è broken; `projects: [_Futuritaly]` no. Stesso per stakeholders: `Federico Saladino` è broken, `Federico Saladino (Soolutions)` no (la parentesi col fornitore fa parte del filename).
- **"Data più recente vince"** su qualsiasi conflitto di valori. Se una scheda ha `updated:` più recente del Master Facts Sheet, vince la scheda — segnalare la discrepanza per riallineare il Master.
- **Nuove minute meeting**: NON creare file separato. Quando incolli una trascrizione di call, estrai decisioni/citazioni/numeri/task e fai append nelle schede pertinenti (progetto, persone presenti) — vedi §15 Vault-live update. Prep doc pre-call → `00 - Inbox/`. Performance post-call → `30 - Areas/Area - Performance & Coaching/`.
- **Nuove note volatili / inbox**: `00 - Inbox/YYYY-MM-DD - Titolo.md`.
- **Mai sovrascrivere** schede con `updated:` recente firmato manualmente da Carlo: arricchire in append, non rimpiazzare.
- **Numeri PDF 13/04** (Wave 2) sono fonte ufficiale — i numeri intermedi (€315K, sconto -€12K, ROI alternativi nei business case) sono **superati**, non "in evoluzione".

## 5. Numeri ufficiali — non modificare senza conferma esplicita di Carlo

| Voce | Valore ufficiale | Fonte |
|---|---|---|
| Wave 2 NoLoop bundle | **€300.000** (€327K listino - €27K sconto ecosistema) | PDF Proposta Investimento updated 5, 13/04/2026 |
| Wave 2 — risparmio operativo a regime | ~€299.000/anno | PDF 13/04 §1 |
| Wave 2 — payback complessivo | ~13 mesi | PDF 13/04 §1 |
| Wave 2 — FTE liberate | ~5 | PDF 13/04 §1 |
| Wave 2 — requisiti contrattuali | 83 (72 must-have + 11 nice-to-have) | PDF 13/04 §8 |
| Wave 2 — picco mensile fatturazione | €53.875 (aprile) | PDF 13/04 §7 |
| NOT Operation Transformation | **€109.000** (Modulo Vendite + Modulo Logistica) | Contratto firmato 03/04/2026 da Paolo Donzelli — conferma Carlo 4/5 |
| NOT Eye Cookies | **€75.000 Full Ownership** | Contratto firmato 03/04/2026 da Paolo Donzelli |
| NOT Marketing (sito + LinkedIn) | Saldo fatturato (1 delle 3 fatture cortesia 29/04) | Conferma Carlo 30/04 |
| Eldis canone mensile | €130/mese — **proposta non ancora validata** dal cliente | Conferma Carlo 30/04 |

### Quotazioni progetti minori (in negoziazione)

| Progetto | Target HeyAI | Stato |
|---|---|---|
| PresidIA | **€55K Full Ownership** O **€40K Revenue Share** | In trattativa Silencio vs Jakala (decisione 6/5) |
| Futuritaly Osservatorio AI | **€42K** (alzato post Silencio 4/5) | In quotazione, multi-tenant; mockup committed 2/5 |
| Achipont (modulo bandi) | **€20K** via Jakala (single-tenant) | Quotazione fornitore confermata, proposta cliente da preparare |
| HoReCa | **€25K target massimo** (prezzo di favore Garbarino) | In valutazione passaggio totale a Silencio + revenue share 10-15% |
| Angelini Academy (sito) | **€4-5K opzione B** pre-Q&A (sito completo metodo HeyAI) — range da affinare con Michele dopo l'8/5 in funzione del numero reale di sezioni | Gara competitiva via FuturItaly (intermediario), Q&A 8/5 mattina; opzione A €2K e opzione C €10-12K solo come strumenti di vendita interna di Elena |

### Pacchetto fornitori 4 progetti — quotazioni 4/5/2026

| Progetto | Silencio | Jakala (verbale 5/5) |
|---|---|---|
| Osservatorio Futuritaly | €20K | da €38K verso €28-30K |
| Achipont | €20K | €20K (rebalance possibile) |
| PresidIA | €50-55K (target HeyAI €35K) | €27K (50 FTE) |
| HoReCa | €30K (fuori budget cliente) | fuori scope Jscience |
| **Totale Jakala bundle** | — | **€70-75K verbale (vs €85K listino)** |

Vedi [[00 - Inbox/2026-05-04 - Scenari Fornitori (post call Silencio)]] e [[30 - Areas/Area - Partnership Fornitori/Jakala|Jakala]].

## 6. Progetti attivi — snapshot (P1/P2)

> Per stato dettagliato e prossimo milestone vai sempre alla scheda. Questa tabella è solo overview di esistenza/priorità.

| Progetto | Cliente | Owner | Priorità |
|---|---|---|---|
| [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop\|Wave 2 NoLoop]] | NoLoop | Carlo | 🟢 P1 — €300K, contratto Longo in chiusura |
| [[20 - Projects/NOT/Operation Transformation]] | NoLoop/NOT | Carlo | 🟢 P1 — €109K firmato |
| [[20 - Projects/NOT/Eye Cookies]] | NoLoop/NOT | Carlo | 🟢 P1 — €75K firmato |
| [[20 - Projects/NOT/NOT Marketing - LinkedIn e Sito]] | NoLoop/NOT | Michele+Andrea | ✅ saldo fatturato |
| [[20 - Projects/Studio Murolo/PresidIa\|PresidIa]] | Studio Murolo | Carlo | 🟡 P2 — race Silencio vs Jakala |
| [[20 - Projects/Futuritaly/Osservatorio Strategico\|Osservatorio Futuritaly]] | Futuritaly | Michele | 🟢 P2 — €42K target |
| [[20 - Projects/Futuritaly/Sito Futuritaly\|Sito Futuritaly]] | Futuritaly | Michele | 🟢 P2 — promosso 13/5 |
| [[20 - Projects/Achipont/Achipoint\|Achipoint]] | Achipont | Michele | 🟢 P2 — Proposta v1 prodotta |
| [[20 - Projects/Eldis/Eldis Compilatore]] | Eldis Net | Carlo | 🟢 P2 — Builder evolutive |
| [[20 - Projects/Matteo Cosma/HoReCa\|HoReCa]] | Matteo Cosma | Carlo | 🟢 P3 — early stage |
| [[30 - Areas/Area - Partnership Fornitori/Jakala\|Jakala]] | Jakala (fornitore) | Carlo | 🟢 evaluating — allocazione 4 progetti |
| [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy\|Angelini Academy]] | Angelini (via FuturItaly) | Carlo+Michele | 🟢 P2 — gara, pitch finale 31/5 |

## 7. Persone chiave — decisori per progetto (lista completa in `60 - People/`)

> Estratto dei decisori e SME critici per ogni progetto attivo + stakeholder strategici. Tutti gli altri (operativi quotidiani, contatti secondari, fornitori dismessi) restano solo in `60 - People/`. Vai sempre alla scheda persona per citazioni testuali, pattern di negoziazione e sensibilità relazionali.

### Team interno HeyAI

- **Carlo Sanvoisin** — founder, PM (20%)
- **[[60 - People/Bruno Mattucci]]** — governance/consigliere, 40% equity, dinamica retributiva aperta (§11)
- **[[60 - People/Michele Mattucci]]** — operativo, owner Achipont/Futuritaly/Trattoria (20%)
- **[[60 - People/Andrea Pazienza]]** — amministrazione, alta volume comunicazione (20%)

### Cluster NoLoop (cliente N°1) — decisori e SME critici

- **[[60 - People/Laura Garbarino]]** (LG) — AD, **decision maker N°1**. "Carlo ormai è uno di noi" (11/03/2026)
- **[[60 - People/Chicco Nobili]]** — co-founder, pari livello a LG
- **[[60 - People/Paolo Donzelli]]** — CFO, firma contratti, focus ROI/payback
- **[[60 - People/Marco Pasquali]]** — Director Marketing, **mentor informale Carlo**. Padre di [[60 - People/Andrea Pasquali]] (Jakala) — relazione **sensibile**
- **[[60 - People/Laura Zaghi]]** — Sales Director storico
- **[[60 - People/Ivano Romano]]** — Communication Director (Reparto Creativo)
- **[[60 - People/Antonio Cichello]]** — Director BU Consumer (area Logistica/Produzione/F&B sotto la sua BU; counterpart di Laura Zaghi e Ivano Romano nell'organigramma)
- **[[60 - People/Lorena Cavecchi]]** — capo logistica → SME [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]]
- **[[60 - People/Antonella Osmetti]]** — capo programmazione → SME [[20 - Projects/NoLoop/Wave 2/Venue Finder|Venue Finder]]
- **[[60 - People/Massi Sinigaglia]]** — Managing Partner NOT (Massimiliano), referente Operation Transformation + Eye Cookies
- **[[60 - People/Justin Lauro]]** — Consultant tech NOT, in trincea API BAT/PARD
- **[[60 - People/Matteo Cosma]]** — commerciale NoLoop + imprenditore privato HoReCa (doppio cappello)

### Decisori clienti non-NoLoop (1-2 per progetto)

- **PresidIA / Studio Murolo**: [[60 - People/Marco Murolo]] — founder, consulente del lavoro 20+ anni
- **FuturItaly (Osservatorio + Sito)**: [[60 - People/Lavinia Ferrari]] (champion progetto, introduttore deal Angelini) + [[60 - People/Claudia Bugno]] (Amministratore Unico, decisore finale, canale parallelo Bruno↔Claudia)
- **Eldis Compilatore**: [[60 - People/Stefania Solidoro]] — Direzione Marketing, driver di progetto
- **Achipoint**: [[60 - People/Luigi (Achipont)]] — founder Achipont, decisione collegiale con architetto
- **HoReCa**: [[60 - People/Matteo Cosma]] — vedi sopra (cappello privato)
- **Angelini Academy** (gara via FuturItaly): [[60 - People/Elena Chiti]] (FuturItaly side, **alleata** non decisore) + [[60 - People/Caterina Caboni]] (cliente side, owner operativo gara) + [[60 - People/Marco Morbidelli]] (CEO Angelini Academy, brief richiede LinkedIn personale)

### Fornitori principali

- **Soolutions** (partner sviluppo, IP HeyAI accettata verbalmente):
  - [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]] — front-end + lead tecnico
  - [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]] — back-end + design (Tokio Studio = stessa persona, 2 brand)
- **Silencio.dev** (fornitore in lead post call 4/5): [[60 - People/Danilo Piersanti (Silencio)|Danilo Piersanti]] — co-founder
- **Jakala**: [[60 - People/Andrea Pasquali]] — PM interno, figlio di Marco Pasquali NoLoop (relazione **sensibile**)
- **Legale Wave 2**: [[60 - People/Mauro Longo (Morbinati & Longo)|Mauro Longo]]
- ❌ Spike Reply — escluso, troppo caro

## 8. Workflow ricorrenti — prompt library

Cartella `40 - Resources/Prompts/` ([[40 - Resources/Prompts/00 - Index Prompt Library|Index]]). 10 prompt template raggruppati per uso:

- **Strategia & pricing**: 01 Senior Strategy Finance Consultant · 02 Audit Numerico Presentazione
- **Comunicazione cliente**: 03 Recap Call → Email Cliente · 04 Risposta Email Tono Diretto (stile LG) · 05 Brief Tecnico per Sviluppatori
- **Discovery & requirement**: 06 Questionario Discovery Cliente · 07 Analisi Funzionale Requirement · 08 Recap Meeting con Action Items
- **Operational**: 09 Generazione Fattura Cortesia · 10 Roadmap di Progetto

Carlo invoca con: *"applica prompt 03 + contesto"* o *"recap call → email"*.

### 8bis. Delivery board Soolutions — APPROVATO 6/5/2026

✅ Decisione presa: **Microsoft Lists "Soolutions Delivery Board"** sostituisce Wrike per il tracking dei task con Federico+Simone. Vedi [[99 - System/Workflow Delivery Soolutions]] per i dettagli operativi e [Setup Microsoft Lists guide](computer:///Users/carlosanvoisin/claude/99%20-%20System/Setup%20Microsoft%20Lists%20-%20Soolutions%20Delivery%20Board.md) per il setup tecnico (Carlo lo fa prima del kickoff Wave 2 del 7/5 sera).

**Protocollo per le chat Cowork** dopo questa decisione:
1. Quando una call/transcript/aggiornamento genera task con owner Federico/Simone/Carlo+Federico/Carlo+Simone/Tutti → aggiornare la Lists via MCP Microsoft Graph (oltre al vault).
2. **Mai esporre sulla Lists** numeri commerciali sensibili, citazioni Garbarino/Donzelli, esposizione finanziaria HeyAI, pattern di negoziazione, sensibilità relazione cliente, tematiche soci/retributive — restano nel vault Obsidian.
3. Prima di una nuova call/follow-up, leggere la Lists e fare digest a Carlo: "Federico ha chiuso X, Simone ha messo blocker su Y".
4. Plan B se al 13/5 non funziona: canale Teams "Soolutions delivery" come fallback prima di tornare a Wrike.

## 9. Scheduled tasks attivi (verifica 6/5/2026 sera)

Stato registrato dal task scheduler:

- `pm-digest-mattutino` — Lun-Ven 8:02 · digest mattutino email/meeting/SharePoint/Teams + aggiornamento Daily Note + Open Tasks + Digest Log ✅
- `cowork-sessions-index` — **Tutti i giorni 20:22** (cron `22 20 * * *`, 1x al giorno — ridotto da 2x in patch precedente non tracciata, confermato 13/5/2026 da Carlo) · indicizzazione sessioni Cowork (decisioni, citazioni, output) → `80 - Sources/Cowork Sessions/`. Triggerable manualmente on-demand ✅ **Nuovo dal 6/5/2026** · ✅ **Patch unificata 7/5+8/5 applicata 8/5/2026 sera** (v1): append + **checkbox reconciliation** (chiude `[x]` task quando la prosa li chiude inequivocabilmente, annulla `[-]` se superati) + **campi atomici estesi** (`status`/`priority`/`deadline`/`stakeholders`/`last_call_date`) + scope "mai creare schede" ristretto solo a `20 - Projects/<Cliente>/<Progetto>.md` e `60 - People/<Persona>.md` (coaching note, prep doc, recap, audit, file di sistema → si creano normalmente) · ✅ **Patch v2 applicata 8/5/2026 sera tardo**: 4 patch additive A+B+C+D che chiudono falle ordinamento sessioni + conflitti cross-sessione + audit metadata povero — (A) ordering cronologico ascending obbligatorio per `lastActiveAt` con tiebreaker `sessionId`, "ultimo timestamp vince" sui campi atomici; (B) nuovo step 4bis Conflict scan cross-sessione che aggrega delta proposti da tutte le sessioni del run e logga conflitti in sezione dedicata `### Conflict scan cross-sessione` dell'indice giornaliero; (C) audit metadata esteso nei commenti HTML del frontmatter (`source-session: {sessionId}` + `source-lastActive: {timestamp}`) + commento `<!-- atomic-change ... -->` immediatamente dopo frontmatter + riga `_atomic-field-change_` nel `## Log` per ogni campo atomico cambiato; (D) quinto caso ambiguo §5bis che lascia checkbox aperto se sessioni dello stesso run propongono azioni contraddittorie sullo stesso `[ ]`. Validato 8/8 check al run cron-22 8/5 sera. Verifica post-patch a 8 punti documentata nel SKILL [[50 - Archive/System Patches/SKILL cowork-sessions-index POST-PATCH UNIFICATA|POST-PATCH UNIFICATA v2]].
- ~~`friday-wrap-up`~~ — **DISABILITATO 13/5/2026** (decisione Carlo, riduzione token + sovrapposizione ~70% con `weekly-review-interactive`). Funzione assorbita dal weekly review interattivo del venerdì 17:30. Riattivabile (`enabled: true`) se si decide che il digest automatico settimanale resta utile in parallelo.
- ~~`weekly-digest`~~ — **DISABILITATO 13/5/2026** (decisione Carlo, riduzione token). La vista "settimana entrante" è coperta dalla sezione 5 "Re-prioritization" del weekly review del venerdì. Riattivabile se la review umana del venerdì non basta a definire la settimana entrante.
- `dashboard-refresh-manual` — manuale on-demand · refresh PM Dashboard HeyAI (artifact HTML)
- `vault-link-checker` — **Domenica 21:00** (cron `0 21 * * 0`, ripristinato a settimanale 13/5/2026 da daily — il cron era stato silenziosamente cambiato a `0 21 * * *` in una patch precedente, intercettato in audit token reduction 13/5) · audit settimanale wikilink/frontmatter/path string rotti del vault → `99 - System/Vault Link Audit.md`. Trigger manuale on-demand sempre ammesso (utile dopo refactoring grossi). Solo report, no fix automatici (vedi §15 voce 7) ✅ **Nuovo dal 8/5/2026** — prima esecuzione 8/5: 216 wikilink rotti, 33 frontmatter rotti, 7 path string da fixare. ✅ **Patch v2 applicata 10/5/2026** (post run scheduled domenica 21:00): target check esteso a qualsiasi estensione (`.png`/`.xlsx`/`.docx`/`.pdf` come allegati embed validi, non solo `.md`), strip wrapper `[[ ]]` nei valori frontmatter `parent_project`/`projects`/`stakeholders`/`related_meeting`, EXCLUDE pattern-glob per `99 - System/Patch SKILL ` (copre tutte le patch presenti e future), URL-decode + NFC-normalize sui path string. Vault al run 10/5: 0 broken su 1787 wikilink — stabile vs 8/5. ✅ **Patch v3 applicata 12/5/2026** (via `update_scheduled_task` da chat Cowork normale): strip `\|` escape-pipe nei target wikilink prima dello split alias (5 falsi positivi su celle tabella eliminati), path string regex richiede estensione esplicita (5 falsi positivi su path troncati al primo spazio eliminati), scan path string post code-strip (paths in backtick = doc examples ignorati). Prompt SKILL v3 in [[50 - Archive/System Patches/Patch SKILL vault-link-checker 2026-05-12 — addendum v3|Patch SKILL vault-link-checker 2026-05-12 — addendum v3 (archiviato)]]. Verifica: `grep "v3 (12/5/2026)" /Users/carlosanvoisin/Documents/Claude/Scheduled/vault-link-checker/SKILL.md` torna match. Vault al run 12/5 v3: 5 broken wikilink reali + 1 frontmatter rotto + 0 path string rotti. Prossimo run reale: dom 17/5 21:00
- ~~`claude-chats-sync`~~ — **DISABILITATO 6/5/2026**: Carlo non usa più claude.ai web, sostituito da `cowork-sessions-index`. Riattivabile (`enabled: true`) se si torna a fare export Chrome extension
- `crm-velocity` — **ATTIVO dal 12/5/2026** · Lun 9:08 (cron `0 9 * * 1` + jitter) · path SKILL `/Users/carlosanvoisin/Documents/Claude/Scheduled/crm-velocity/SKILL.md` · audit settimanale velocity stakeholder critici (15 schede in `60 - People/` popolate con `last_contact`/`cadence_days`/`relationship_strength`/`top_quotes`/`next_touchpoint`). Output: sezione `## 🔔 CRM warnings` appendata alla Daily Note del lunedì con 🔴 critici / 🟡 warning / 🟢 touchpoint pianificati. **Prossimo run reale: lun 18/5**. Trigger manuale simulato 12/5 ha intercettato Marco Pasquali 62gg cooling + Paolo Donzelli 29gg warm bonus + Laura Garbarino 13gg warning + Elena Chiti touchpoint pianificato. **Calibrazione `cadence_days` con Carlo da fare** (5-10 min, valori attuali sono stima ragionata di Claude). Setup completo in [[99 - System/Setup CRM velocity]]. Pattern: post-ricerca best practices PKM 11/5/2026, raccomandazione #4
- `weekly-review-interactive` — **ATTIVO dal 12/5/2026** · Ven 17:38 (cron `30 17 * * 5` + jitter) · path SKILL `/Users/carlosanvoisin/Documents/Claude/Scheduled/weekly-review-interactive/SKILL.md` · genera prep doc `00 - Inbox/YYYY-MM-DD - Weekly Review.md` dal template `90 - Templates/Weekly Review.md`, pre-popola sezione 1 (inbox >7gg), sezione 2 (project P1/P2 stale check), sezione 3 (embed CRM warnings da Daily Note recente). Sezioni 4-5 vuote per Carlo. **Prossimo run reale: ven 15/5**. Coexiste con `friday-wrap-up` (digest automatico, ven 17:00). Trigger manuale simulato 12/5 ha prodotto prep doc con 3 file inbox >7gg + nessun progetto stale + chain CRM→Weekly Review verificata end-to-end. Setup completo in [[99 - System/Setup Weekly Review]]. Pattern: post-ricerca best practices PKM 11/5/2026, raccomandazione #5

**Trigger manuale**: ogni task scheduled (anche quelli con cron) si può lanciare on-demand dal pannello Scheduled del sidebar Cowork. `dashboard-refresh-manual` è l'unico *solo* manuale (no cron).

## 10. Procedura standard per ogni nuova chat

1. Leggere questo `CLAUDE.md` **all'inizio della chat**.
   - **1bis. Ri-lettura obbligatoria**: rileggere `CLAUDE.md` (almeno il diff dell'ultimo `updated:` rispetto alla prima lettura) **prima di ogni vault commit batch** (Modalità B in §15) **e prima di chiudere la chat con un messaggio di sintesi finale**. Carlo aggiorna le regole live durante le sessioni: senza ri-lettura, l'agente lavora con regole obsolete e produce gap (es. cartelle deprecate, sezioni nuove non rispettate, alberatura cambiata). Se l'`updated:` è cambiato dalla prima lettura, leggere il delta e adeguare i commit pendenti **prima** di scrivere la risposta finale.
2. Se la richiesta tocca **numeri o fatti commerciali**, verificare su [[99 - System/Master Facts Sheet]] **prima** di rispondere.
3. Se tocca un **progetto attivo**, leggere prima la scheda in `20 - Projects/` (sono la fonte autoritativa per stato e stakeholder).
4. Se tocca una **persona**, leggere prima la scheda in `60 - People/` (citazioni testuali, pattern di negoziazione, sensibilità).
5. **Nuove minute meeting** → NON creare file separato; assorbire nelle schede pertinenti via §15.
6. **Nuove note volatili / panoramiche** → `00 - Inbox/YYYY-MM-DD - Titolo.md`.
7. **Conflitti di valori**: applicare regola "data `updated:` più recente vince"; se persiste discrepanza, segnalarla a Carlo invece di scegliere arbitrariamente.
8. Per qualsiasi pattern di scrittura cliente, **prima** controllare se esiste un prompt in [[40 - Resources/Prompts/00 - Index Prompt Library]].
9. **Aggiornamento live del vault** durante la sessione — vedi §15. Non aspettare la fine per propagare i fatti emersi nelle schede.

### 10bis. Cascata su nuove schede progetto/persona

Quando crei una nuova scheda in `20 - Projects/` o `60 - People/`, propaga subito (stessa sessione, non a fine giornata) le info essenziali:

- **Master Facts Sheet** (`99 - System/Master Facts Sheet.md`): aggiungi una riga sintetica nella sezione "💰 Pricing target altri progetti" (per progetti) o nella tabella cluster appropriata (per persone). Aggiorna `updated:` nel frontmatter.
- **CLAUDE.md** (questo file): se è un progetto attivo P1/P2, aggiungi riga in §6; se è una persona del cluster cliente/fornitore, aggiungi bullet in §7. Aggiorna `updated:` nel frontmatter.
- **MOC - Home** (`99 - System/MOC - Home.md`): wikilink alla scheda con tag 🆕 per facilitare il prossimo audit.
- **Open Questions** (`99 - System/Open Questions.md`): se la scheda apre dubbi non risolti (decision maker, scope, modello partnership), nuova entry numerata.

Senza questa cascata, una scheda nuova resta invisibile ai file di sistema e ogni nuova chat parte cieca su quel progetto/persona. La regola "data `updated:` più recente vince" del §4 è una toppa, non sostituisce la cascata.

### 10ter. Pre-flight check di apertura chat (NUOVO 7/5/2026)

**Obbligatorio prima di rispondere alla prima domanda di Carlo in ogni nuova sessione.** L'agente deve verificare che lo stato del vault sia consistente con quello che Carlo presume. Senza questo check, l'agente parte da Open Tasks (snapshot di ieri) e risponde basandosi su uno stato già superato.

Sequenza al primo messaggio della chat:

1. **Leggere data del PM Digest**: aprire [[99 - System/Digest Log]] e verificare l'ultimo run. Se l'ultimo run è anteriore alle 8:02 di oggi (lun-ven), Open Tasks è stale → segnalare a Carlo prima di rispondere.
2. **Leggere indice sessioni Cowork del giorno precedente**: aprire `80 - Sources/Cowork Sessions/{ieri}.md`. Estrarre le schede toccate dal run notturno e i delta principali. Tenerli a mente come "stato del vault più aggiornato del digest mattutino".
3. **Cross-reference prosa vs checkbox**: per le 3-5 schede progetto più rilevanti per il topic della chat (basato sul primo messaggio di Carlo), aprire la scheda e fare un audit interno: ci sono `- [ ]` task aperti contraddetti dalla prosa nei `## Log` recenti? Se sì → segnalare il delta a Carlo.
4. **Solo dopo** rispondere alla domanda.

Se il pre-flight rileva incoerenze, l'agente apre la risposta con un breve "🔍 Pre-flight check" che le dichiara, propone batch reconciliation, e procede solo dopo OK di Carlo (o procede direttamente se la richiesta di Carlo non dipende dall'incoerenza).

**Lesson appresa 7/5/2026**: l'incidente Open Tasks stale di oggi sarebbe stato evitabile con pre-flight check al primo "fammi la lista task". Senza check, l'agente ha letto Open Tasks come fonte di verità; le schede progetto (sorgente vera) erano divergenti su 7+ task.

### 10ter.1 Pre-flight check per task di produzione (NUOVO 7/5/2026 sera)

**Quando il primo messaggio di Carlo richiede di produrre un deliverable (proposta cliente, brief sviluppatori, recap meeting, requirement log, business case, presentazione, email cliente), il pre-flight standard NON basta. L'agente deve aggiungere una scansione dei template e degli esempi pertinenti nel vault PRIMA di chiedere conferme su formato/struttura.**

Sequenza obbligatoria per task di produzione:

1. **Glob su `90 - Templates/`**: cercare il template del tipo di deliverable richiesto. Se esiste → leggerlo subito; struttura, campi e regole pricing/stilistiche provengono da lì, non da domande all'utente.
2. **Glob su `40 - Resources/`**: cercare metodologie, prompt library, knowledge base sul dominio (es. Metodologia Quotazioni HeyAI, Prompt 05/06/07).
3. **Glob su `80 - Sources/Files/`**: cercare esempi simili in produzione (proposte già emesse a clienti analoghi). Se esiste → leggerlo per verificare lo stile applicato.
4. **Glob sulla cartella progetto** (`20 - Projects/<Cliente>/`): cercare bozze pre-esistenti da evolvere invece di rifare da zero (es. `Quotazione_<Cliente>_BOZZA.docx`).
5. **Solo dopo** chiedere chiarimenti, e solo su punti che template/esempi/bozze NON risolvono.

**Lesson appresa 7/5/2026 sera (proposta Achipoint)**: ho chiesto a Carlo formato/pricing/business case/owner quando: il template `90 - Templates/Proposta Investimento.md` esisteva con la struttura standard; `Metodologia Quotazioni HeyAI.md` definiva la logica pricing; `HORECA_Proposta_Investimento_aggiornata.docx` era un esempio in produzione applicabile; `Quotazione_Achipont_BOZZA.docx` era una bozza pre-esistente con 9 sezioni già strutturate; il Brief Sviluppatori caricato dava il dettaglio dei macro-moduli per il pricing; "owner della consegna" non si mette nei documenti commerciali. Tutte e 4 le domande erano evitabili con un Glob iniziale.

**Regola d'oro**: prima di chiedere "che formato vuoi?", chiediti "il vault ha già un template/esempio/bozza per questo?". Se sì, partire da lì.

## 11. Cose da NON fare

- **NON confondere TodoList di sessione con task persistenti**: le TodoList Cowork (quelle che l'agente crea con `TaskCreate`/`TaskList` durante una chat) sono **effimere alla sessione** — vivono solo nella memoria di quella conversazione e non si propagano nel vault. I task di lavoro reali devono vivere come `- [ ]` nelle schede in `20 - Projects/`, `30 - Areas/` o `10 - Daily Notes/`: solo da lì il PM Digest mattutino li raccoglie in [[99 - System/Open Tasks]]. Quando Carlo dice "creami un task" durante una sessione, l'agente deve scriverlo come checkbox nella scheda pertinente, non solo aggiungerlo alla TodoList di chat.
- **NON rinominare** "Eye Cookies" in altro modo (resta "Eye Cook" come alias storico nella scheda; non chiamarlo "AI Cookies" o "Eye Cookie" nei nuovi documenti).
- **NON suddividere** "Operation Transformation" in più progetti separati: assorbe Modulo Vendite + Modulo Logistica e vale €109K (consolidato 4/5/2026).
- **NON proporre** Andrea Pasquali (Jakala) come freelance per PresidIA — problema deontologico esplicito (Scenario 3 sconsigliato in [[50 - Archive/DPIII/DPIII Fase 4 — Briefing per consolidamento|DPIII Fase 4 — Briefing per consolidamento (archiviato)]]).
- **NON garantire** €50K minimi a Jakala su bundle: HoReCa è loro rischio commerciale, non nostro.
- **NON sovrascrivere** schede con `updated:` recente firmato manualmente da Carlo (rispetto data); arricchire in append.
- **NON narrare** esposizione finanziaria HeyAI al cliente, **NON giustificare** prezzi defensivamente, **NON rivelare** strategia commerciale a contatti client-side (pattern Carlo da migliorare — vedi Master Facts §"Lato HeyAI").
- **NON usare** l'inglese nei deliverable salvo termini tecnici.
- **NON inventare** numeri o citazioni: se un dato non è nel vault, scrivere "TBD — chiedere a Carlo".

## 12. Open questions ricorrenti (controlla [[99 - System/Open Questions]] per stato aggiornato)

Le seguenti restano aperte al 13/5/2026 (post sync con Open Questions doc):

- **#19** Contratto IP HeyAI ↔ Soolutions (Federico/Simone): accettato verbalmente, **da formalizzare prima della firma cliente Wave 2** — workflow legale con avv. Longo 12-14/5, email finalizzazione contratto ven 15/5. Tracciato in Open Questions #19.
- **#27** Persone secondarie DPIII: chiusure parziali 5/5 (Lorena/Antonella, Ivano, Speaker 0). Restano TBD: Luciano sistemista Eldis, Leonardo Delbufalo + altri stakeholder Futuritaly secondari — decisione tipica "no scheda dedicata salvo promozione a decisore" (5/5).
- **#31** Angelini Academy: gara competitiva — numero/identità agenzie concorrenti, scope finale richiesto vs brief 3/4 Lavinia, budget reale vs 3 scenari, modello di partecipazione (HeyAI in proprio vs delivery partner FuturItaly), decisione maker reale (Caboni vs Carnicelli).
- **#32** Angelini Academy: ruolo Daniele Caporale lato FuturItaly (peer di Elena Chiti? sopra/sotto? chi presenta cosa al pitch finale 31/5?).
- **#33** Angelini Academy: brand book ereditato — accesso ai materiali, vincoli tipografia/colori/lessico vs margine creativo.
- **#34** Scheduler Cowork: drift task non eseguiti aperta 7/5 — coperta strutturalmente dal nuovo `system-consistency-check` creato 13/5 (lun 7:30), da rivalutare dopo 2-3 run reali se il drift si ripresenta.

Risolte tra 5/5 e oggi: #16 (NOT API piano B), #17 (Matteo Cosma doppio ruolo), #18 (NOT Marketing consegnato), #20 (Jakala fornitore = HeyAI interfaccia cliente unica), #21 (Ilia ≠ Zaghi), #22 (Federico Saladino unicum), #23 (progetti minori 13/04 sono alias/typo di moduli noti), #24 (numeri business case = PDF 13/04 fonte unica), #25 (Cichello + Romano contatto on-demand), #26 (Andrea Pasquali ≠ Paolo, distinti), #28 (equity HeyAI confermata), #29 (IP Wave 2 confermato — duplicato di #19).

Vedi [[99 - System/Open Questions]] per il full log con risoluzioni datate.

## 13. Riservatezze

- Flusso fatture attive NoLoop (operativi → email → Elisa Remigi → BC manuale) = **classificato**, non menzionare apertamente con il cliente.
- Credenziali rotate ✅ il 30/04 (Carlo); password storiche citate in [[99 - System/Open Questions]] §Sicurezza vanno trattate come compromesse e mai ricondivise.
- Marco Pasquali (NoLoop) ↔ Andrea Pasquali (Jakala): relazione padre-figlio, evitare di mettere Marco in posizione conflittuale; coltivare la relazione direttamente.

## 14. Ultima review e prossimo handoff

> 📦 **Storico precedente al 13/5/2026 archiviato** in [[99 - System/CLAUDE Changelog Archive|CLAUDE Changelog Archive]] (rolling window 3-5gg dichiarata 13/5, applicata stessa sera). Le 12 voci pre-archivio coprono 5/5 → 12/5/2026 (refactoring vault PARA cliente, batch fix 216 wikilink rotti, patch SKILL `cowork-sessions-index` 7-8/5, template Proposta Investimento v2, deployment 2 task PKM `crm-velocity` + `weekly-review-interactive`, patch v3 vault-link-checker). Le regole operative emerse sono già integrate in §1-§13 e §15-§16 di questo file; consultare l'archivio solo per ricostruire il "perché" di una decisione passata. Le voci sotto coprono solo le ultime 24-48h operative (13/5).

- **Aggiornamento 13/5/2026** (token reduction post audit scheduled task): dopo audit lista scheduled task (chat 13/5), identificate 2 sovrapposizioni e 1 cron drift. Decisioni Carlo: (a) **`friday-wrap-up` DISABILITATO** — funzione assorbita dal `weekly-review-interactive` del venerdì 17:30 (sovrapposizione ~70% sulla retrospettiva settimanale, il review aggiunge engagement umano alle sezioni 4-5 che il wrap-up automatico non aveva). (b) **`weekly-digest` DISABILITATO** — la vista settimana entrante è coperta dalla sezione 5 "Re-prioritization" del weekly review. (c) **`vault-link-checker` ripristinato a settimanale** (cron `0 21 * * 0`, solo domenica) — era stato silenziosamente cambiato a quotidiano (`0 21 * * *`) in una patch precedente non documentata. Risparmio token combinato stimato: ~28% del consumo settimanale automatizzato. Lista task attivi residui: `pm-digest-mattutino` (lun-ven 8:02, backbone) · `cowork-sessions-index` (ogni giorno 20:22, motore §15) · `vault-link-checker` (dom 21:00) · `crm-velocity` (lun 9:08) · `weekly-review-interactive` (ven 17:38) · `dashboard-refresh-manual` (manuale). Disabilitati: `friday-wrap-up`, `weekly-digest`, `claude-chats-sync`. Da rivalutare tra 2 settimane se la review del venerdì copre davvero entrambe le funzioni assorbite.
- **Aggiornamento 13/5/2026 sera** (lezione stile email da riscrittura Carlo recap interno Federico+Simone): produzione bozza recap interno post-call HeyAI+Soolutions 13/5 — Carlo ha riscritto la mia v1 in versione più asciutta. Aggiunto **§2.1.bis Pattern follow-up INTERNO Federico+Simone** a CLAUDE.md con 8 cose da TAGLIARE (preambolo metodologico, qualificatori carry-over, citazioni testuali della call, rationale, note tecniche difensive, decisioni senza azione, note interne, sezioni "Diff vs follow-up del X/5") + 6 cose da MANTENERE/AGGIUNGERE (link operativi SharePoint inline, comunicazioni proattive al cliente, urgenze cliente esplicitate, carry-over importanti che la bozza Claude perdeva tipo Minutes "password reset massivo", enhancement che la bozza Claude degradava a #p2 tipo "estetica presentazioni" Venue Finder, stati condizionati invece di promesse non vincolate tipo "appena decidiamo la formula vi giriamo il bonifico"). Riferimento operativo: [[00 - Inbox/2026-05-13 - BOZZA Email Recap Federico Simone allineamento interno]] sezione "Diff sostanziale". Vault commit §15.bis su trascrizione call interna 13/5 13:32-14:35 svolto su 13 schede prima della riscrittura Carlo; aggiornamenti post-riscrittura (Crowd setup DNS SCIOLTO, NOT bonifico Soolutions gated a Excel cash-flow, Minutes password reset carry-over, Venue Finder urgenza comunicazione cliente) applicati a valle.
- **Aggiornamento 13/5/2026 sera** (deliverable tecnico SEO Specs Angelini Academy prodotto): in sessione Cowork dedicata `/marketing:seo-audit` prodotto [[SEO Specs Sito Nuovo]] in `20 - Projects/Futuritaly/Angelini Academy/`. 6 capitoli operativi forward-looking per il sito nuovo (no audit del sito attuale, obsoleto): keyword research 4 percorsi utente con 15 keyword priority cross-cluster + content architecture URL/hierarchy/internal linking + hub-and-spoke + hreflang IT/EN + cross-domain Angelini Industries + benchmark SEO 5 siti comparable via WebFetch diretto (IE Insights, UCL Knowledge Lab, SDA Bocconi, Fondazione Bracco, Fondazione Veronesi) + schema markup completo con esempi JSON-LD (EducationalOrganization, Person, ScholarlyArticle, Course, Event, FAQPage, BreadcrumbList, WebSite/SearchAction) + KPI SEO baseline (indexation, organic visibility, engagement, Core Web Vitals, backlink) + priorità implementazione fase 1/fase 2. Vincolo metodologico dichiarato: no Ahrefs/Semrush (solo WebSearch + analisi diretta — volume keyword qualitativi). Allegato tecnico alla proposta finale 31/5; revisione interna Carlo 14/5 mattina prevista. Documento parent: [[Strategia Website 2026]] §4.2 VP3. Cascata applicata su [[_Angelini Academy]] Layer 3 architettura documentale (riga aggiornata da "prompt pronto" a "✅ prodotto").
- **Aggiornamento 13/5/2026 pomeriggio** (token reduction §14 archiviato + chiarimento cron `cowork-sessions-index`): spostate in [[99 - System/CLAUDE Changelog Archive]] le 8 voci più vecchie del §14 (5/5 → 8/5/2026 sera tardo run 2 — chiusura). CLAUDE.md ridotto di ~4-5K token sul fixed cost letto da ogni chat e da ogni scheduled task. Convenzione: tra 1-2 settimane le voci più vecchie del §14 in essere migreranno a loro volta in archivio (rolling window 3-5 giorni). Chiarito durante l'audit che `cowork-sessions-index` gira **1x al giorno alle 20:22** (cron `22 20 * * *`), NON 2x come la riga §9 documentava: la descrizione §9 di quella riga era obsoleta dopo una patch precedente non tracciata. Decisione su cron rotation (mantenere 1x quotidiano vs passare a ogni 2 giorni) rimandata ai dati console Anthropic che Carlo manderà a breve.
- **Aggiornamento 13/5/2026 sera tardo** (audit comprensivo dopo richiesta Carlo di evitare fix piecemeal): sweep sistematico di tutti i consumatori di CLAUDE.md + scheduler vs documentazione. Intercettate e fixate **5 incoerenze operative critiche** che il sistema aveva accumulato in silenzio: (1) `friday-wrap-up` documentato come "DISABILITATO 13/5/2026" ma scheduler aveva `enabled: true` (sarebbe rigirato ven 15/5) → ora `enabled: false`; (2) `weekly-digest` stesso pattern: doc disabilitato, scheduler enabled → ora disabilitato; (3) `vault-link-checker` doc dice "Domenica `0 21 * * 0`" ma cron reale era `0 21 * * 1` (lunedì) → ora corretto a domenica, prossimo run dom 17/5; (4) `cowork-sessions-index/SKILL.md` aveva **bug operativo grave** alle righe 94-97: finestra temporale spezzata in "Run 13:00" (22:00 ieri→13:00 oggi) + "Run 22:00" (13:00→22:00 oggi), ma task gira 1x al giorno alle 20:22 quindi branch "Run 13:00" non si eseguiva mai e **le sessioni della mattina (22:00 ieri→13:00 oggi, 15h) erano sistematicamente perse** → ora finestra unica "20:22 ieri → 20:22 oggi" copre 24h; (5) description metadata del task in sidebar Cowork + intro line 6 del SKILL dicevano "run 13:00 + 22:00 / due volte al giorno" → corrette. Inoltre fixati due riferimenti stale di doc operativa: CLAUDE.md riga 11 nota refactoring e header di `80 - Sources/Cowork Sessions/Index Cowork Sessions.md`. Decorato con banner storico `99 - System/SKILL cowork-sessions-index POST-PATCH UNIFICATA.md` (era citato in §9 come fonte autoritativa, ora rimanda al SKILL.md vivo). File storici/snapshot (Patch SKILL 7/5, 8/5, Friday Wrap-up 8/5, Indici sessioni storici, Dashboard 8/5, Changelog Archive) volutamente non toccati: descrivono lo stato del sistema in un dato momento, alterarli falsifica la cronistoria. **Lesson sistemica**: le decisioni di token reduction del 13/5 mattina erano state DOCUMENTATE in CLAUDE.md §14 ma mai ESEGUITE sullo scheduler; il drift doc-vs-realtà è la classe di rottura più subdola perché il sistema sembra funzionare. Da ora ogni decisione su scheduled task richiede di eseguirla via `mcp__scheduled-tasks__update_scheduled_task` nello stesso commit della doc, mai solo doc.
- **Aggiornamento 13/5/2026 sera (batch A Vault Architecture Audit)**: applicato batch A del [[99 - System/Vault Architecture Audit 2026-05-13|Vault Architecture Audit 2026-05-13]] (decisione Carlo "A→B→C in sequenza, niente patch SKILL"). Tre tagli diretti: (a) §6 tabella 5→4 colonne (rimosso "Prossimo milestone narrativo" — si legge dalla scheda), aggiunta riga Sito Futuritaly P2; (b) §7 ricomposto da ~60 a ~30 nomi tenendo 1-2 decisori per ogni progetto + SME critici NoLoop (Lorena/Antonella/Ivano) + relazioni sensibili evidenziate (Pasquali padre-figlio, Bruno↔Claudia); operativi quotidiani spostati a sola `60 - People/`; (c) §14 rolling window 3-5gg applicata: 4 voci 11-12/5 migrate in [[99 - System/CLAUDE Changelog Archive|CLAUDE Changelog Archive]]. **3 patch SKILL rolling-window applicate 13/5 sera tardo** (decisione Carlo "vai con tutte e 3 in parallelo"): (a) `pm-digest-mattutino` §5 ora merge le sezioni "Aggiunte dal PM Digest del giorno X" precedenti nelle Priorità #p1/#p2/#p3 prima di scrivere la sezione di oggi → primo effetto domani 14/5 mattina 8:02; (b) `cowork-sessions-index` §7 ora scrive entry compatte ≤250 char nel Cowork Sessions Log + rolling-window archive >14gg in `50 - Archive/Cowork Sessions Log/{YYYY-MM}.md` → primo effetto domani 14/5 sera 20:22; (c) `vault-link-checker` ora archivia audit >7gg in `50 - Archive/Vault Audits/{YYYY-MM}.md` mantenendo tabella "Trend storico" nel file vivo + ultimo audit → primo effetto dom 17/5 21:00. Patch verificate via `Grep` sul SKILL.md vivo post-applicazione. Reversibili via `update_scheduled_task` con prompt precedente. **Batch B+C eseguiti 13/5 sera tardo**: B inbox cleanup (30 → 8 file: 31 file mossi in `50 - Archive/Inbox/2026-04+05/`, 5 file orfani deleted — 2 lock Office + 2 html2pdf + 1 lock root); C schede morte system (99-System 25 → 15 file: 5 file in `50 - Archive/System Patches/`, 3 in `50 - Archive/System/`, 1 in `50 - Archive/System Snapshots/`, 2 + cartella `DPIII Reports/` 5 file in `50 - Archive/DPIII/`; 70-Meetings/ eliminata dopo move 1 file; `.gitkeep` deleted). Propagazione ~17 wikilink ATTIVI su CLAUDE.md (4) + MOC (4) + Open Tasks (3) + Open Questions (1) + Jakala (2) + Performance Carlo (2) + ridondanze. Backlinks STORICI (80-Sources/ indici giornalieri, 10-Daily Notes/, 50-Archive/, Cowork Sessions Log, Vault Link Audit) lasciati invariati per non falsificare cronistoria.
- Prossimi eventi calendar critici: workflow Longo Wave 2 (Carlo+Andrea **12-14/5**, email finalizzazione contratto a Longo **ven 15/5**), prima esecuzione reale `weekly-review-interactive` (**ven 15/5 ~17:38**), prima esecuzione reale `crm-velocity` (**lun 18/5 ~9:08**), evento Generali OnSite MVP (**20/5**), pitch finale gara Angelini Academy entro deadline (**31/5**), test end-to-end Crowd NoLoop + saldo Wave 1 (**fine maggio 2026**), milestone HoReCa stagione estiva francese (**metà giugno 2026**).
- Per qualsiasi decisione che modifichi i numeri ufficiali in §5: aggiornare [[99 - System/Master Facts Sheet]] **e** la scheda progetto, mai una sola.

## 15. Vault-live update — aggiornamento del second brain durante la sessione

Questa è la regola operativa più importante per garantire che il vault sia "sempre aggiornato e indicizzato" come Carlo richiede. Il task notturno `cowork-sessions-index` è un safety net, non il motore. Il motore è il comportamento dell'agente in sessione, qui sotto.

### 🔴 Regola di precedenza (NUOVA — bloccante)

**Ogni numero, decisione o fatto vault-worthy nuovo che emerge in chat va committato sulle schede PRIMA di scrivere la risposta finale all'utente.** Non a fine topic, non a fine sessione. Prima di chiudere il messaggio.

In pratica:
1. Carlo manda informazione nuova (es. "Andrea mi ha mandato la quotazione finale 35+25+15 = 75K")
2. Riconosci subito che è vault-worthy
3. Apri tool, fai gli edit sulle schede impatti (Jakala-Proposta, PresidIA, Achipont, Futuritaly, Andrea Pasquali, decisione fornitori se applicabile)
4. **Solo dopo** scrivi la risposta in chat

Se la risposta in chat richiede analisi nuova basata su quei numeri, l'analisi va dopo il commit, perché il commit fissa lo stato e l'analisi è effimera. Mai l'inverso.

**Trigger di commit immediato (nessuna eccezione)**:
- Nuovo numero economico (quotazione, sconto, prezzo cliente, FTE, ore)
- Decisione esplicita ("ok, andiamo con X")
- Cambio di stato di un progetto/persona ("ha accettato", "ha rifiutato", "ha mandato")
- Citazione testuale strategica (cliente o fornitore)
- Nuova call svolta (anche solo verbale, prima della trascrizione)
- Action item assegnato a Carlo o a un terzo

### Quando aggiornare il vault (live, durante la chat)

Mentre lavori con Carlo, identifica i momenti **vault-worthy** — cioè informazioni che valgono come fatto persistente, non solo come passaggio conversazionale. Sono vault-worthy:

- Una **decisione esplicita** ("ok, andiamo con €4-5K opzione B", "Carlo conferma X", "decidiamo di rifare il sito invece di aggiornarlo")
- Un **numero/cifra nuovo** o aggiornato (pricing, timeline, FTE, %)
- Una **citazione testuale** del cliente o di Carlo che vale come fact strategico
- Un **cambio di stato** di progetto, persona, fornitore (status, ruolo, fase)
- Un **task operativo** che Carlo (o tu) avete deciso di portare avanti
- Un **evento calendario** nuovo (call, deadline)
- Una **nuova persona** che è diventata stakeholder rilevante
- Un **output prodotto** (file creato/editato nel vault)

Non sono vault-worthy: fatica conversazionale (chiarimenti, ipotesi scartate, micro-dettagli tattici), TodoList di sessione effimere (vedi §11), ragionamenti che non hanno prodotto una decisione.

### Come aggiornare (regole rigide — append-only e patch chirurgica)

**Cosa puoi fare**:

- Aggiornare `updated: YYYY-MM-DD` nel frontmatter delle schede toccate
- Append nei blocchi `## Log`, `## Sessioni Cowork correlate`, `## Citazioni testuali da preservare`, `## Eventi calendario`, `## Task aperti`
- Aggiungere nuovi `- [ ]` task (mai spuntare o rimuovere quelli esistenti senza istruzione esplicita di Carlo)
- Aggiornare campi atomici nel frontmatter (`status`, `priority`) SE cambia esplicitamente nella sessione, sempre lasciando audit nel `## Log`
- Creare nuove note volatili in `00 - Inbox/`, prep doc pre-call sempre lì
- Promuovere informazioni dal Log al Master Facts Sheet (§5 numeri ufficiali, §pricing) se la decisione è di portata strategica e Carlo ha confermato esplicitamente

**Cosa NON puoi fare**:

- Mai rewrite di sezioni esistenti — solo append
- Mai rimuovere contenuto da una scheda
- Mai modificare numeri ufficiali del Master Facts Sheet senza conferma esplicita di Carlo nella sessione corrente (§5)
- Mai creare schede progetto/persona senza chiedere a Carlo (segnalare "Da triagiare" se emerge una persona/progetto nuovo)

### Quando committare (timing)

**Modalità A — incrementale**: aggiorna le schede mano a mano che emergono i fatti, senza aspettare la fine. Vantaggio: se la chat si interrompe, il vault è già consistente. Svantaggio: rumore in chat se commit-by-commit.

**Modalità B — batch a fine topic**: prima di passare al topic successivo (Carlo cambia argomento o chiude la chat), fai un "vault commit" che riepiloga in una breve risposta:

> Vault commit: ho aggiornato [[Eldis Compilatore]] (sezione Log con sintesi call + nuovo task #p1 su bug TIFF), [[Stefania Solidoro]] (Log + citazione "Marta non ha ultimato i test"). Master Facts non toccato. Procediamo.

Default: **Modalità B** (meno rumorosa, più chiara). Modalità A solo per sessioni lunghe e dense (es. recap di una call) dove rinviare tutto a fine ha rischio di perdersi qualcosa.

### Verifica pre-commit (audit interno)

Prima di scrivere su una scheda, controlla:

1. **Path corretto?** Verifica in §3.1 (architettura `20 - Projects/`) e §3.2 (`30 - Areas/`) la destinazione attesa per il file. Esempi:
   - Modulo Wave 2 (es. Crowd) → `20 - Projects/NoLoop/Wave 2/Crowd.md`, NON `40 - Resources/`
   - Progetto NOT (es. Eye Cookies) → `20 - Projects/NOT/Eye Cookies.md`, NON `20 - Projects/Eye Cookies.md`
   - Negoziazione fornitore (es. Jakala) → `30 - Areas/Area - Partnership Fornitori/Jakala.md`, NON `20 - Projects/`
   - Minute meeting → NON creare file separato; assorbi nelle schede progetto/persona via `## Log`
   - Post-mortem call performance Carlo → `30 - Areas/Area - Performance & Coaching/`
   - Prep doc pre-call → `00 - Inbox/YYYY-MM-DD - Titolo.md`
   - Se la destinazione non rientra in nessuna categoria → "Da triagiare" + chiedere a Carlo, mai improvvisare.
2. **🔍 Glob esecutivo del path** (NON basarsi sulla memoria dell'agente o su path usati in chat precedenti): prima di ogni `Edit` o `Write`, eseguire `Glob` sul path attesto in voce 1 per **verificare che il file esista davvero**. In caso di refactoring del vault avvenuto durante la sessione (Carlo sposta/rinomina file), un Edit su path obsoleto fallisce silenziosamente o crea un file fantasma. Se il Glob non torna match → cerca con pattern più ampio (`**/<filename>.md`) per individuare il nuovo path; se ancora non trovi → segnala "scheda non più nel path atteso" e chiedi a Carlo invece di improvvisare.
3. **La scheda esiste in `_<filename>.md` (con prefix underscore)?** Convenzione del refactoring 6/5: per le schede overview cliente o scheda principale di un cluster, il filename inizia con `_` per ordinare prima nella vista Obsidian (es. `_Wave 2 NoLoop.md`, `_Futuritaly.md`, `_Angelini Academy.md`). I wikilink **non** vanno scritti come `[[Wave 2 NoLoop]]` (broken — Obsidian non risolve), ma come `[[_Wave 2 NoLoop|Wave 2 NoLoop]]` (path con alias di display). Verifica con Glob.
4. Il frontmatter `updated:` è recente (ultime 6h) di un autore diverso? Se sì, leggi il delta e fai append solo del tuo contributo, mai sovrascrivi.
5. Quello che stai per scrivere duplica qualcosa già presente? Se sì, salta.
6. Stai per esporre dati riservati (CLAUDE.md §13) in un posto sbagliato? Se sì, riconsidera la destinazione.
7. **🔴 Refactoring di file (rename/move/split) — propagazione obbligatoria dei wikilink** (NUOVO 8/5/2026, regola bloccante). Ogni volta che rinomini, sposti o splitti un file nel vault, **prima di chiudere il commit di sessione** esegui un grep globale del vecchio identificatore e rinomina TUTTE le occorrenze. Comando di riferimento: `grep -rn "<vecchio_filename>" /Users/carlosanvoisin/claude --include="*.md"`. Trigger di rinominazione: (a) wikilink `[[Vecchio]]` → `[[Nuovo|Display]]`; (b) frontmatter `parent_project: Vecchio` → `parent_project: Nuovo`; (c) frontmatter `projects: [Vecchio]` → `projects: [Nuovo]`; (d) path string in prep doc / 00-Inbox. **Chiusura del commit non è ammessa con residui non rinominati**: se il grep torna match dopo le rinomine, fissarle prima di scrivere la risposta in chat. Lesson appresa 8/5/2026 (incidente refactoring 6/5): 26 occorrenze di `[[Angelini Academy - Sito]]` su 14 file sono rimaste rotte per 2 giorni perché il refactoring del 6/5 ha spostato i file in sottocartelle cliente senza propagare i wikilink. Obsidian le mostra come link grigi, non visibili in chat ma rotti nella navigazione vault. Senza questa regola la stessa classe di errori si ripresenta a ogni futuro refactoring.

### Cosa segnalare in chat

Ogni vault commit deve includere in chat:

- Lista delle schede toccate con wikilinks
- Sintesi 1 riga di cosa è stato aggiunto per ciascuna
- Se hai saltato schede ovvie (perché in pausa, perché updated recente di altro autore), dichiararlo

Se la sessione non ha prodotto fatti vault-worthy, non scrivere niente nel vault e non fare il commit. Va bene anche silenzio.

### 🎯 §15.bis — Protocollo "trascrizione caricata" + audit post-commit obbligatorio

Quando Carlo carica una **trascrizione** di call/meeting/audio (file .docx/.txt/.md uploaded o testo incollato in chat), §15 generico non basta: una trascrizione contiene decine di fatti vault-worthy in un colpo solo, quindi serve una **checklist deterministica** per non perdere nulla e un **audit esplicito** prima di chiudere.

Eseguire **in ordine** i seguenti step PRIMA di scrivere la risposta finale all'utente:

1. **Estrarre i partecipanti**: chi ha parlato + chi è citato anche se non presente. Per ciascuno → identificare scheda in `60 - People/`. Se manca, segnalare "Da triagiare: persona X" (§10bis: non creare schede automaticamente).
2. **Estrarre i progetti citati** (Wave 2, Eldis, NOT, Futuritaly, Crowd, Minutes, …). Per ciascuno → identificare scheda in `20 - Projects/<Cliente>/<Progetto>/…md`. Se path incerto, **Glob prima dell'Edit** per verificare il filename corrente nella nuova alberatura (post-refactoring 6/5/2026).
3. **Estrarre numeri / decisioni / cambi di stato vault-worthy** (§15 trigger): nuovo numero ufficiale → Master Facts Sheet §5 (con conferma esplicita di Carlo); nuova milestone P1/P2 → CLAUDE.md §6 snapshot; cambio di status → frontmatter `status:` della scheda.
4. **Estrarre task operativi** assegnati a Carlo / Federico / Simone / terzi. Scriverli come `- [ ]` con priorità (`#p1/#p2/#p3`) nella scheda progetto/area/persona pertinente (§16 — task vault, NON TodoList di sessione). PM Digest mattutino li raccoglie in [[99 - System/Open Tasks]].
5. **Estrarre eventi calendario nuovi** (date confermate, slittamenti, milestone) → sezione `## Eventi calendario` della scheda progetto.
6. **Estrarre citazioni testuali strategiche** (frase del cliente o fornitore che vale come pattern persistente) → sezione `## Citazioni testuali da preservare` della scheda persona.
7. **Estrarre pattern di interazione/negoziazione** emersi (es. "Federico paranoico data-loss", "LG decide in stanza") → sezione `## Pattern di interazione` della scheda persona (crearla se non esiste, formato del template `90 - Templates/Person Fornitore.md`).
8. **Aggiornare `updated:` nel frontmatter** di ogni scheda toccata.
9. **Sync Microsoft Lists** (§8bis): per ogni task con owner Federico / Simone / Carlo+Federico / Carlo+Simone / Tutti → scriverlo/aggiornarlo sulla Lists "Soolutions Delivery Board" via MCP Microsoft Graph, rispettando i filtri di privacy (no numeri commerciali sensibili, no citazioni Garbarino/Donzelli, no esposizione finanziaria HeyAI).
10. **Audit post-commit OBBLIGATORIO**: prima di scrivere la risposta in chat, dichiarare esplicitamente nel formato:

    > **Vault commit completo**:
    > - Toccate: `[[scheda1]]` (1 riga sintesi), `[[scheda2]]` (1 riga sintesi), …
    > - Saltate volutamente: `[[schedaX]]` (motivo: in pausa / updated recente di Carlo / fuori scope)
    > - Master Facts: aggiornato (delta: …) / non toccato
    > - CLAUDE.md §6 snapshot: aggiornato / non toccato
    > - Microsoft Lists: aggiornata con N task / non toccata (motivo)
    > - Schede attese non toccate per dimenticanza: nessuna ✅

Se l'audit dichiara "schede attese non toccate: [...]" diverso da `nessuna`, **completare i commit prima di rispondere**, non chiudere il messaggio con il gap aperto.

### Differenza pratica §15 vs §15.bis

- **§15** = regola generica "ogni fatto vault-worthy va committato prima della risposta". Si applica ad ogni messaggio che contiene un fatto persistente nuovo (un numero, una decisione, una citazione).
- **§15.bis** = protocollo specifico per "trascrizione caricata". Si attiva quando l'input è una trascrizione completa di call/meeting/audio — ovvero quando in un colpo solo arrivano N fatti vault-worthy e serve una checklist per non perderne nessuno.

### 🔧 §15.ter — Reconcile checkboxes (NUOVO 7/5/2026, regola bloccante)

**Il commit di una nuova prosa che chiude un task aperto deve includere SEMPRE anche la chiusura del corrispondente `- [ ]` checkbox nello stesso commit. Mai prosa senza checkbox.**

Questa è la regola che ha causato l'incidente del 7/5/2026: la sessione 8 del 6/5 ha aggiornato la scheda Jakala con prosa "Quotazione finale ricevuta 5/5 sera" + tabella margini, ma il `- [ ] Ricevere quotazione finale scritta da Pasquali` è rimasto aperto. Stesso pattern su Achipoint (Andrea coinvolto), Eye Cookies (fattura Massi), Operation Transformation (email Justin), Angelini Academy (4 deliverable a Michele). Il PM Digest aggrega solo lo stato dei `- [ ]`, quindi l'Open Tasks ha mostrato 7+ task come pendenti anche se la verità in scheda era opposta.

**Regola operativa**: ogni vault commit (Modalità A o B di §15) deve includere due liste, non una:

> Vault commit:
> - **Prosa appendata**: `[[scheda1]]` (sintesi 1 riga), `[[scheda2]]` (...)
> - **Checkbox riconciliati**: ✅ chiusi: [task X di scheda1, task Y di scheda2] · ❌ annullati: [task Z di schedaW]

**Triggers di chiusura inequivocabili** (verbi al passato/perfetto): `inviata`, `ricevuta`, `confermata`, `fatto`, `chiuso`, `firmato`, `pagato`, `consegnato`, `mandato`, `risposto`, `concluso`, `caricato`, `salvato`. Tempo presente progressivo (`stiamo inviando`, `in fase di`) NON chiude.

**Casi ambigui** (qualifier di incertezza, multi-component task non interamente chiuso, scheda toccata da Carlo nelle ultime 6h): NON chiudere automaticamente, segnalare a Carlo "Da triagiare".

**Cosa controllare prima di scrivere il commit**: per ogni scheda toccata, leggere la sezione `## Task aperti` (e ogni `- [ ]` nella scheda) e fare matching keyword col contenuto della prosa appendata. Match → riconcilia. No match → lascia aperto.

Questa regola si applica sia all'agente live in sessione (§15, §15.bis) sia al task `cowork-sessions-index` notturno (vedi SKILL.md, sezione "Reconciliation rules").

### 🔧 §15.quater — Scheduled task changes (NUOVO 13/5/2026 sera tardo, regola bloccante)

**Ogni decisione che modifica lo stato, il cron o il prompt di uno scheduled task deve essere ESEGUITA via `mcp__scheduled-tasks__update_scheduled_task` nello stesso commit della doc, mai solo doc.**

Questa è la regola che ha causato l'incidente sweep 13/5/2026 sera tardo: il token reduction del mattino aveva DOCUMENTATO in CLAUDE.md §14 le decisioni (disabilita `friday-wrap-up`, disabilita `weekly-digest`, cambia cron `vault-link-checker` a domenica) ma NON le aveva eseguite sullo scheduler. Per 12+ ore il sistema sembrava funzionare (chat leggono CLAUDE.md, doc dice "disabilitato"...) ma `friday-wrap-up` sarebbe regolarmente girato venerdì 15/5. Drift doc-vs-stato = classe di rottura più subdola perché il sistema sembra OK.

**Regola operativa**: quando un commit (Modalità A o B di §15) aggiorna CLAUDE.md §9 (lista scheduled tasks), o aggiorna un riferimento a cron/scope/SKILL di un task, il commit DEVE includere anche la chiamata `update_scheduled_task` corrispondente. Lista delle azioni in chat al momento del commit:

> Vault commit:
> - **Doc aggiornato**: CLAUDE.md §9 riga `xyz` (cron/stato/scope)
> - **Scheduler aggiornato**: `update_scheduled_task taskId=xyz {cronExpression|enabled|description|prompt}=...`
> - **SKILL.md aggiornato** (se la patch è al body del SKILL): SKILL `xyz` riscritto via `update_scheduled_task prompt=...`

**Trigger** (oltre alla regola di precedenza §15):
- Disabilitazione di un task → `enabled: false` via `update_scheduled_task`
- Cambio cron → `cronExpression: "..."` via `update_scheduled_task`
- Cambio descrizione sidebar Cowork → `description: "..."` via `update_scheduled_task`
- Cambio prompt/logica del SKILL → `prompt: "..."` via `update_scheduled_task`

**Cosa NON conta come "decisione eseguita"**: scrivere in §14 "abbiamo deciso di disabilitare X" senza la chiamata `update_scheduled_task` correlata. Quella è una nota di intenzione; senza l'esecuzione il task continua a girare.

**Pre-flight di apertura chat consigliato** (estensione di §10ter): se la chat prevede di toccare scheduled tasks, chiamare `mcp__scheduled-tasks__list_scheduled_tasks` all'apertura per vedere lo stato REALE (non quello documentato). Se i due divergono → audit prima di procedere, fix nello stesso commit batch.

**Safety net automatico**: scheduled task `system-consistency-check` (lun 7:30 — TBD creation, vedi setup doc in `99 - System/`) confronta settimanalmente CLAUDE.md §9 vs scheduler runtime vs SKILL content e segnala drift in `99 - System/System Consistency Audit.md`. È l'analogo di `vault-link-checker` ma per la consistenza scheduled-task.

## 16. Glossario "task" — disambiguazione (importante)

Il sistema usa la parola "task" per tre concetti diversi. Ogni nuova chat Cowork rischia di confonderli, e l'errore di processo si paga in task persi o duplicati. Le tre categorie:

| Concetto | Dove vive | Persistenza | Come gestirlo |
|---|---|---|---|
| **Cron / scheduled** | `/Users/carlosanvoisin/Documents/Claude/Scheduled/{taskId}/SKILL.md` (sidebar Cowork → Scheduled) | Permanente, automatico | `mcp__scheduled-tasks__list_scheduled_tasks` per elenco; trigger manuale dal pannello Scheduled. Esempi: `pm-digest-mattutino`, `cowork-sessions-index` |
| **TodoList di sessione** | Memoria della singola chat Cowork (`TaskCreate`/`TaskList`/`TaskUpdate`) | **Effimera** — sparisce alla chiusura della chat | Solo per tracciamento progresso *di questa* conversazione. Non sostituisce mai i task vault. Vedi §11 e §15 |
| **Task vault (azione operativa)** | `- [ ]` checkbox nelle schede di `20 - Projects/`, `30 - Areas/`, `10 - Daily Notes/` | Permanente nel vault | Aggregati ogni mattina dal `pm-digest-mattutino` in [[99 - System/Open Tasks]]. **Sono i task di lavoro veri** |

**Regola d'oro**: quando Carlo dice "creami un task" o "ricordami di X", l'agente deve scriverlo come `- [ ]` nella scheda pertinente (progetto, area, daily note). Aggiungerlo solo alla TodoList di chat = task perso domani mattina.

Convenzione di vocabolario suggerita per i nostri scambi:
- "scheduled" o "cron" → categoria 1
- "todo" o "todo di sessione" → categoria 2
- "task" o "azione" → categoria 3
