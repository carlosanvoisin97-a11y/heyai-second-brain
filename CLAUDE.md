---
type: system
created: 2026-05-05
updated: 2026-05-19
status: operational (post-refactoring 6/5/2026)
purpose: Istruzioni di sistema per ogni chat Cowork che apre questa cartella
---
<!-- auto-updated by cowork-sessions-index 2026-05-19 20:22 (cron-22) | source-session: local_b2af374e + autorizzazione esplicita Carlo cascata §10bis Luigiandrea Scaramuzzi -->
<!-- atomic-change updated: 2026-05-16 → 2026-05-19 | session: cron-22 19/5 | trigger: cascata §10bis nuova scheda persona Jakala Manager -->

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

### 2.1 Stile email di Carlo → skill `email-drafting`

**OBBLIGO**: prima di scrivere qualsiasi bozza email, l'agente **DEVE leggere** il file `.claude/skills/email-drafting/SKILL.md` con il tool `Read`. Il file contiene tutti i pattern email di Carlo (cliente + interno Federico+Simone). Senza quella lettura, la bozza sarà generica e non nel suo stile. Regole critiche sempre attive (anche senza leggere la skill):

- **MAI citare per nome i fornitori HeyAI** nelle email ai clienti (Soolutions, Silencio, Jakala, Tokio Studio) → scrivere `team di sviluppo` / `team tecnico` / `il nostro team`
- **Formato consegna**: testo pulito copia-incolla diretto in Outlook, no code block, no tag formattazione
- **Verbi sostantivati** nei bullet di recap/prossimi passi (forma impersonale, no prima/seconda persona)
- **Prima di scrivere**: controllare 2-3 email recenti di Carlo via Outlook search per calibrare il tono

### 2.2 Proposte di Investimento HeyAI → skill `investment-proposal-drafting`

**OBBLIGO**: prima di redigere qualsiasi Proposta di Investimento (.docx/PDF) o investment memo strutturato per un cliente HeyAI, l'agente **DEVE leggere** il file `.claude/skills/investment-proposal-drafting/SKILL.md` con il tool `Read`. La skill contiene design system completo (layout pagina, header/footer, tipografia, palette, callout, tabelle) estratto dal file reference `Reference - Proposta Investimento Futuritaly Bandi Gare 2026.docx` in `80 - Sources/Files/`, struttura sezioni (variante snella 9 sezioni vs estesa 13 sezioni), regole pricing assorbite da [[40 - Resources/Metodologia Quotazioni HeyAI]], checklist anti-errori pre-consegna, e workflow operativo. Senza quella lettura, la proposta avrà errori grafici ricorrenti (font Arial invece di Aptos, color Heading sbagliato, footer assente, nomi fornitori esposti). Regole critiche sempre attive (anche senza leggere la skill):

- **Layout obbligatorio**: A4 portrait, margini top 2.50 / R/B/L 2.00 cm, header con logo HeyAI + dati legali, footer con bordo #156082 + ornamento + testo legale (NON numerazione pagine)
- **Tipografia obbligatoria**: Aptos 11pt body, Aptos 16pt nero bold per Heading 1, Aptos 20pt #2B8C96 bold per titolo, override inline esplicito (non lasciare default Normale=Arial)
- **MAI citare per nome i fornitori HeyAI** (Soolutions, Silencio, Jakala, Tokio Studio, Aegiscore) → `team di sviluppo` / `team tecnico`
- **MAI inventare numeri**: verificare sempre su [[99 - System/Master Facts Sheet]] + scheda progetto
- **Regola pricing (BLOCCANTE)**: il costo fornitore non deve mai superare il **60% del prezzo cliente**. Target sano 40-45%, accettabile 50%, limite tattico 55-60%, oltre 60% non si va. Riferimento esteso: [[99 - System/Master Facts Sheet]] §"Regola pricing HeyAI". _[Aggiornata 15/5/2026 — sostituisce "Floor margine €15K hard" che era una semplificazione fuorviante per progetti grandi e piccoli]_
- **Audit numerico §02** obbligatorio prima della consegna

Template legacy `90 - Templates/Proposta Investimento.md` archiviato in `50 - Archive/System Snapshots/` il 14/5/2026 — sostituito da questa skill. Il template snello `90 - Templates/Quotazione Cliente.md` resta valido per progetti senza layout grafico.

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

### 3.1 Architettura `20 - Projects/` e `30 - Areas/`

Progetti organizzati **per cliente** in sottocartelle: `20 - Projects/{Cliente}/`. Ogni cliente ha `_Cliente.md` (overview, sort-first) + schede progetto. Convenzione `_` davanti = scheda principale. Clienti attivi: **NoLoop** + **NOT** (Noloop on Trade — società sorella di NoLoop, stesso cappello operativo ma entità legalmente separata; cartelle PARALLELE a top-level `20 - Projects/NoLoop/` e `20 - Projects/NOT/` perché clienti distinti, NON nested. Su NOT: Carlo segue Operation Transformation + Eye Cookies, Michele/Andrea seguono NOT Marketing LinkedIn+Sito), **Eldis**, **Futuritaly** (+ sotto-cluster Angelini Academy nested perché stesso cliente via intermediario FuturItaly), **Studio Murolo**, **Achipont**, **Matteo Cosma**. Per l'albero completo → `Glob("20 - Projects/**/*.md")`.

Aree in `30 - Areas/`: Governance, Amministrazione, Cybersecurity, Team & HR, AI Solutions, Partnership Fornitori (con Jakala.md), Performance & Coaching.

Hub navigazione: [[99 - System/MOC - Home]]. Fonte autoritativa numeri: [[99 - System/Master Facts Sheet]]. Domande aperte: [[99 - System/Open Questions]].

## 4. Convenzioni di scrittura

- **Wikilinks** `[[NomeFile]]` per ogni riferimento incrociato a progetti, persone, risorse.
- **Wikilinks a schede underscore-prefix — RISOLTO 14/5/2026 via `aliases:` nel frontmatter** (`_Wave 2 NoLoop.md`, `_Futuritaly.md`, `_Achipont.md`, `_Angelini Academy.md`, `_Eldis.md`, `_NoLoop.md`, `_NOT.md`, `_Matteo Cosma.md`, `_Studio Murolo.md`, `_Wave 1 NoLoop.md`, `_Area - Partnership Fornitori.md`, `_Area - Performance & Coaching.md`): ora ogni scheda ha `aliases:` in frontmatter con la forma naturale senza underscore (es. `_Eldis.md` → `aliases: [Eldis, Eldis Net]`). Carlo può scrivere indifferentemente `[[Eldis]]` o `[[_Eldis|Eldis]]`: Obsidian li risolve entrambi nativamente, e il SKILL `vault-link-checker` v4 (patch 14/5) legge gli alias prima del check broken. Lo stesso vale per i file lunghi con coda cliente (es. `Accessibility Specs Sito Nuovo Angelini Academy.md` ha `aliases: [Accessibility Specs Sito Nuovo]`). **Regola operativa per nuove schede underscore-prefix o nomi-lunghi**: aggiungere SEMPRE `aliases:` in frontmatter con le forme naturali che Carlo userebbe spontaneamente.
- **Wikilinks a schede underscore-prefix — convenzione legacy** (pre-patch 14/5, ancora ammessa): `[[_NomeFile|Display senza underscore]]` resta valida e funzionante. Le due forme coesistono — alias per il caso comune, esplicito per quando serve display custom.
- **Wikilinks dentro esempi/template**: SEMPRE wrappare in backtick singolo per evitare che Obsidian li parsi come link reali. I placeholder usati nei template (formato testuale `Persona 1`, `Progetto 1`, `Nome Progetto`, `Nota collegata`, `scheda1`, `Vecchio`) sono "rotti per design" se non backtickati e inquinano il report `vault-link-checker`. Esempio corretto: scrivere `[[NomeFile]]` (con backtick attorno) anziché senza.
- **Frontmatter YAML** standard: `type`, `status`, `priority`, `client`, `created`, `updated`, `stakeholders`. Vedi `90 - Templates/Project.md` come riferimento.
- **Frontmatter `projects:`/`stakeholders:`**: i valori devono matchare ESATTAMENTE i basename dei file (incluso `_` prefix dove esiste, oppure un alias registrato in `aliases:` di quel file). `projects: [Futuritaly]` ora funziona perché `_Futuritaly.md` ha `aliases: [Futuritaly]`. Stesso per stakeholders: `Federico Saladino (Soolutions)` resta il basename, ma con un alias nel frontmatter di quel file anche `Federico Saladino` o `Federico` risolverebbero.
- **Frontmatter `related_meeting:` vs `meeting_context:` — convenzione 14/5/2026**: usare `related_meeting:` SOLO per call con file separato (legacy pre-6/5/2026 o eccezioni esplicite). Per le call POST-6/5/2026 assorbite nelle schede (convenzione §4 "Nuove minute meeting: NON creare file separato"), usare il campo `meeting_context:` con testo libero descrittivo — es. `meeting_context: 2026-05-13 — Allineamento interno HeyAI+Soolutions (call assorbita nelle schede)`. Il SKILL `vault-link-checker` controlla `related_meeting:` come wikilink ma ignora `meeting_context:` (testo libero). Questo evita falsi positivi sistematici sulle bozze email/whatsapp che ricapitolano call assorbite.
- **"Data più recente vince"** su qualsiasi conflitto di valori. Se una scheda ha `updated:` più recente del Master Facts Sheet, vince la scheda — segnalare la discrepanza per riallineare il Master.
- **Nuove minute meeting**: NON creare file separato. Quando incolli una trascrizione di call, estrai decisioni/citazioni/numeri/task e fai append nelle schede pertinenti (progetto, persone presenti) — vedi §15 Vault-live update. Prep doc pre-call → `00 - Inbox/`. Performance post-call → `30 - Areas/Area - Performance & Coaching/`.
- **Nuove note volatili / inbox**: `00 - Inbox/YYYY-MM-DD - Titolo.md`.
- **Mai sovrascrivere** schede con `updated:` recente firmato manualmente da Carlo: arricchire in append, non rimpiazzare.
- **Numeri PDF 13/04** (Wave 2) sono fonte ufficiale — i numeri intermedi (€315K, sconto -€12K, ROI alternativi nei business case) sono **superati**, non "in evoluzione".

## 5. Numeri ufficiali — non modificare senza conferma esplicita di Carlo

Fonte autoritativa: [[99 - System/Master Facts Sheet]]. **Leggere sempre il Master Facts Sheet prima di citare numeri in chat o documenti.** Valori chiave P1: Wave 2 NoLoop €300K, NOT Operation Transformation €109K **(bozza emessa NON firmata + acconto pagato — rettifica 21/5/2026)**, NOT Eye Cookies €75K **(documento contrattuale MAI prodotto, approvazione commerciale email Donzelli 03/04 + acconto pagato — rettifica 21/5/2026)**. Valori chiave P2/P3 e quotazioni fornitori (Silencio, Jakala) → Master Facts Sheet. PDF 13/04 = fonte ufficiale per numeri Wave 2 (risparmio, payback, FTE, requisiti).

## 6. Progetti attivi — snapshot (P1/P2)

> Per stato dettagliato e prossimo milestone vai sempre alla scheda. Questa tabella è solo overview di esistenza/priorità.

| Progetto | Cliente | Owner | Priorità |
|---|---|---|---|
| [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop\|Wave 2 NoLoop]] | NoLoop | Carlo | 🟢 P1 — €300K, contratto Longo in chiusura |
| [[20 - Projects/NOT/Operation Transformation]] | NoLoop/NOT | Carlo | 🟢 P1 — €109K **bozza emessa non firmata + acconto pagato** _[21/5]_ |
| [[20 - Projects/NOT/Eye Cookies]] | NoLoop/NOT | Carlo | 🟢 P1 — €75K **contratto mai prodotto + approvazione email + acconto pagato** _[21/5]_ |
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
- **Silencio.dev** (fornitore in lead post call 4/5): [[60 - People/Danilo Piersanti (Silencio)|Danilo Piersanti]] — co-founder principale + [[60 - People/Luca Fratini (Aegiscore)|Luca Fratini]] — co-founder/senior dev (dual affiliation con sua azienda Aegiscore, vedi sotto)
- **Jakala**: [[60 - People/Andrea Pasquali]] — PM interno, figlio di Marco Pasquali NoLoop (relazione **sensibile**) · [[60 - People/Luigiandrea Scaramuzzi (Jakala)|Luigiandrea Scaramuzzi]] 🆕 — Manager Jakala, capo di Andrea, decisore commerciale sui bundle (quotazione 15/5 firmata da lui)
- **Legale Wave 2**: [[60 - People/Marco Longo (Morbinati & Longo)|Marco Longo]]
- **Aegiscore S.R.L.S.** (azienda di Luca Fratini, parte tecnica esecutiva del bundle Silencio — fatturazione integrata): [[60 - People/Luca Fratini (Aegiscore)|Luca Fratini]] — CEO. Offerta bundle 4 progetti €100K (6/5 — PresidIA €35K + OssAI €20K + HoReCa €27K + Achipont €18K). Topic aperto: ownership codice sorgente
- ❌ Spike Reply — escluso, troppo caro

## 8. Workflow ricorrenti — prompt library

10 prompt template in `40 - Resources/Prompts/` ([[40 - Resources/Prompts/00 - Index Prompt Library|Index]]). Carlo invoca con: *"applica prompt 03 + contesto"* o *"recap call → email"*.

### 8bis. Delivery board Soolutions

**Microsoft Lists "Soolutions Delivery Board"** sostituisce Wrike. Dettagli in [[99 - System/Workflow Delivery Soolutions]]. Regole per le chat Cowork: (1) task con owner Federico/Simone → aggiornare Lists via MCP + vault; (2) **mai esporre sulla Lists** numeri commerciali sensibili, citazioni Garbarino/Donzelli, esposizione finanziaria HeyAI; (3) prima di call, leggere Lists e fare digest a Carlo.

## 9. Scheduled tasks attivi

| Task | Cron | Funzione |
|---|---|---|
| `pm-digest-mattutino` | Lun-Ven 8:00 | Digest email/meeting/SharePoint → Daily Note + Open Tasks + Digest Log |
| `cowork-sessions-index` | Ogni giorno 20:22 | Indicizzazione sessioni Cowork + continuation scan (16/5/2026) → `80 - Sources/Cowork Sessions/` |
| `vault-link-checker` | Dom 21:00 | Audit wikilink/frontmatter rotti → `99 - System/Vault Link Audit.md` |
| `crm-velocity` | Lun 9:00 | Audit velocity stakeholder → CRM warnings nella Daily Note |
| `moc-refresh` | Sab 16:00 | Audit MOC - Home → auto-patch counters/frontmatter, flag-only nuove entità → `99 - System/MOC Refresh Log.md` |
| `weekly-review-interactive` | Sab 17:30 | Prep doc weekly review → `00 - Inbox/` |
| `system-consistency-check` | Lun 7:30 | Audit doc-vs-scheduler-vs-SKILL → `99 - System/System Consistency Audit.md` |
| `dashboard-refresh-manual` | Manuale | Refresh PM Dashboard HeyAI |

Disabilitati: `friday-wrap-up`, `weekly-digest`, `claude-chats-sync`. Per storia patch → [[99 - System/CLAUDE Changelog Archive]]. Ogni task è triggerabile manualmente dal pannello Scheduled. Per lo stato reale dello scheduler → `mcp__scheduled-tasks__list_scheduled_tasks`.

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

### 10ter. Pre-flight check di apertura chat

**Obbligatorio prima di rispondere alla prima domanda in ogni nuova sessione.** Sequenza: (1) verificare ultimo run PM Digest in [[99 - System/Digest Log]] — se stale, segnalare; (2) leggere indice sessioni Cowork del giorno precedente (`80 - Sources/Cowork Sessions/{ieri}.md`); (3) cross-reference prosa vs checkbox sulle 3-5 schede progetto più rilevanti — segnalare incoerenze con "🔍 Pre-flight check".

### 10ter.1 Pre-flight per task di produzione

**Quando Carlo chiede un deliverable** (proposta, brief, recap, presentazione, email): prima di chiedere conferme su formato/struttura, fare Glob su `90 - Templates/`, `40 - Resources/`, `80 - Sources/Files/`, `20 - Projects/<Cliente>/` per trovare template, metodologie, esempi e bozze pre-esistenti. Chiedere chiarimenti solo su punti che il vault NON risolve. **Regola d'oro**: prima di chiedere "che formato vuoi?", verificare se il vault ha già un template/esempio.

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

## 12. Open questions ricorrenti

Fonte autoritativa: [[99 - System/Open Questions]]. Critiche aperte: #19 (contratto IP Soolutions — workflow Longo 12-14/5), #31-33 (Angelini Academy — gara/concorrenti/brand book), #34 (scheduler drift). Leggere sempre Open Questions prima di rispondere su temi ambigui.

## 13. Riservatezze

- Flusso fatture attive NoLoop (operativi → email → Elisa Remigi → BC manuale) = **classificato**, non menzionare apertamente con il cliente.
- Credenziali rotate ✅ il 30/04 (Carlo); password storiche citate in [[99 - System/Open Questions]] §Sicurezza vanno trattate come compromesse e mai ricondivise.
- Marco Pasquali (NoLoop) ↔ Andrea Pasquali (Jakala): relazione padre-figlio, evitare di mettere Marco in posizione conflittuale; coltivare la relazione direttamente.

## 14. Ultima review e prossimo handoff

> Storico completo in [[99 - System/CLAUDE Changelog Archive]]. Rolling window: solo ultime 24-48h qui.

- **14/5/2026**: ottimizzazione token CLAUDE.md (~60% riduzione) — §2.1/§2.1.bis spostati in skill `email-drafting`, §15.bis in skill `transcript-processing`, sezioni §3-§5-§8-§9-§12 compattate a puntatori. Backup pre-ottimizzazione in `50 - Archive/System/`.
- **14/5/2026**: soluzione wikilink underscore-prefix via `aliases:` frontmatter su 13 schede + patch `vault-link-checker` v4 alias-aware **applicata da Carlo stessa giornata** (verifica via lettura SKILL.md vivo — patch v4 in produzione, prossimo run scheduled dom 17/5 21:00 girerà alias-aware). Reference: [[99 - System/Patch SKILL vault-link-checker 2026-05-14 — v4 alias-aware]].
- **14/5/2026 sera tardo (audit comprensivo Carlo richiesto)**: eseguito audit + 4 fix applicati: (a) Vault Link Audit info stale corretta; (b) `system-consistency-check` eseguito → drift critico `weekly-review-interactive` cron Sab + 4 minori risolti (CLAUDE.md §9 ora coerente); (c) scheda [[60 - People/Stefano Mambrin (Avanta)|Stefano Mambrin]] creata; (d) convenzione `meeting_context:` aggiunta in §4. Dettaglio in [[99 - System/CLAUDE Changelog Archive]] §14.archive 14/5/2026.
- **14/5/2026**: nuovo pattern in §2.1 "Reminder mail — pattern compatto" appreso da rewrite Carlo durante drafting email reminder Justin+Carmen+Laila (Operation Transformation). Pattern catturati: apertura `vi scrivo solo per un reminder veloce`, parentesi corte `(qui sotto)`, append topic con `+ tema X in capo a Y`, taglio doppia offerta `supporto/call`, chiusura condensata, `!` finale come spinta operativa.
- **14/5/2026 sera tardo (post-mortem patch a/b)**: 2 fail intercettati da Carlo (PM Digest patch dichiarata "FUNZIONATA" su metric "41 task migrati" senza ispezione strutturale → ricreava stratificazione "Aggiunte X/5" che doveva eliminare · 35/52 wikilink ATTIVI residui post-Batch B+C archive non propagati per memory-only grep). Fix applicati live (Open Tasks flat list + re-patch SKILL `pm-digest-mattutino` con 3 regole bloccanti + sed batch wikilink residui). **Lezioni operative consolidate come regola permanente in §15.quinquies** (verifica strutturale post-action). Dettaglio post-mortem completo in [[99 - System/CLAUDE Changelog Archive]] §14.archive 14/5/2026.
- **14/5/2026 sera (audit second brain Carlo richiesto)**: i 18 broken wikilink residui sono stati **tutti chiusi** in sessione audit: Analisi Competitor ×8 → puntati a [[Scan Siti Web Comparable]] / [[Analisi Competitor (v2 archiviata)]] o testo (deliverable non prodotto, decisione Carlo); Brand Review ×3 → eliminati nei 3 doc Angelini (decisione Carlo: non utile per pitch); crm-velocity ×3 → convertiti a backtick (era nome scheduled task, non file); Aegiscore Luca Fratini ×3 → risolti via creazione scheda [[60 - People/Luca Fratini (Aegiscore)|Luca Fratini]] + [[30 - Areas/Area - Partnership Fornitori/Aegiscore|Aegiscore]] (cascata §10bis applicata; scheda persona poi consolidata 14/5 sera con la pre-esistente `Luca (Silencio)` — stessa persona, dual affiliation Aegiscore + Silencio). Atteso K=0 wikilink rotti reali al prossimo `vault-link-checker` (dom 17/5 21:00). Audit completo session report nel chat-log della giornata.
- **14/5/2026 sera**: creata skill `investment-proposal-drafting` (`.claude/skills/investment-proposal-drafting/SKILL.md`, 387 righe) per produrre Proposte di Investimento HeyAI con design system coerente. Token grafici estratti da `Futuritaly_Proposta Investimento AI_Bandi e Gare_2026.docx` (caricato 14/5, salvato in `80 - Sources/Files/Reference - Proposta Investimento Futuritaly Bandi Gare 2026.docx`). Nuova §2.2 in CLAUDE.md con obbligo Read SKILL.md prima di redigere proposte. Template legacy `90 - Templates/Proposta Investimento.md` archiviato in `50 - Archive/System Snapshots/2026-05-14 - Template Proposta Investimento (deprecato).md` — contenuti utili assorbiti nella skill (struttura sezioni, regole pricing, pattern stilistici). `90 - Templates/Quotazione Cliente.md` resta valido (ambito diverso: progetti minori senza layout grafico). Prompt 01 (Senior Strategy Finance Consultant) e 02 (Audit Numerico Presentazione) restano validi e sono richiamati dalla skill. Aggiornato `40 - Resources/Prompts/00 - Index Prompt Library.md` con nota di redirect.
- **16/5/2026 (patch continuation scan `cowork-sessions-index`)**: scheduled run 16/5 ha intercettato che `local_d7b38090` (Achipont, Draft investment proposal email) era stata riaperta in window con lavoro vault-worthy substanziale (finalizzazione Proposta v6 file datati `15-5-26`, nuova regola pricing % BLOCCANTE propagata a CLAUDE.md §2.2 + Master Facts Sheet + skill `investment-proposal-drafting`), ma il filtro "Skip sessioni già indicizzate" la escludeva → cronistoria del 16/5 vuota nonostante §15 CLAUDE.md avesse propagato live al vault. Patch applicata al SKILL `cowork-sessions-index` (file path canonical `/Users/.../Scheduled/cowork-sessions-index/SKILL.md`): nuovo step 2.bis Continuation scan (top 10 user-initiated già indicizzate × `read_transcript` limit=3 → trigger su date in window/verbi-passato/file-prodotti-in-window/patch-vault menzionate → sezione `## Continuation sessions` H2 nel daily index, no re-patch schede, no entry indice consolidato, no checkbox reconciliation — solo cronistoria). Entry Log §7 estesa con `· {C} continuations` opzionale. §9 description aggiornata. Prossimo run dom 17/5 20:22 testerà la patch end-to-end. **Caveat**: description scheduler-side NON aggiornata via `update_scheduled_task` MCP (tool richiede supervisione user, non disponibile in unsupervised run) → se vuoi sidebar "+ continuation scan" devi triggerare l'update manualmente.
- **Prossimi eventi critici**: `weekly-review-interactive` **sab 16/5 17:30** (in esecuzione), `cowork-sessions-index` continuation scan primo test **dom 17/5 20:22**, `vault-link-checker` v4 alias-aware primo run **dom 17/5 21:00**, `crm-velocity` **lun 18/5 9:00**, invio Proposta Achipont a Luigi **lun 18/5**, OnSite MVP **20/5**, pitch Angelini Academy **31/5**, test Crowd + saldo Wave 1 **fine maggio**, HoReCa **metà giugno**.
- Per decisioni su numeri ufficiali: aggiornare [[99 - System/Master Facts Sheet]] **e** la scheda progetto, mai una sola.

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

1. **Path corretto?** Verifica in §3.1 (architettura `20 - Projects/` e `30 - Areas/`) la destinazione attesa per il file. Esempi:
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

### 🎯 §15.bis — Protocollo "trascrizione caricata" → skill `transcript-processing`

**OBBLIGO**: quando Carlo carica una trascrizione o chiede un recap call, l'agente **DEVE leggere** il file `.claude/skills/transcript-processing/SKILL.md` con il tool `Read` PRIMA di processare la trascrizione. Il file contiene la checklist deterministica completa (10 step: partecipanti → progetti → numeri → task → calendario → citazioni → pattern → frontmatter → Microsoft Lists → audit post-commit). **Differenza §15 vs §15.bis**: §15 = ogni fatto vault-worthy singolo; §15.bis = protocollo batch per trascrizioni complete con N fatti in un colpo.

### 🔧 §15.ter — Reconcile checkboxes (regola bloccante)

**Ogni commit che aggiunge prosa che chiude un task deve chiudere anche il `- [ ]` corrispondente.** Il PM Digest aggrega solo lo stato dei checkbox, non la prosa: se la prosa dice "fatto" ma il checkbox resta aperto, Open Tasks mostra il task come pendente.

Formato vault commit obbligatorio (due liste): **Prosa appendata** + **Checkbox riconciliati** (✅ chiusi / ❌ annullati). Trigger chiusura: verbi al passato (`inviata`, `ricevuta`, `confermata`, `firmato`, `consegnato`…). Presente progressivo NON chiude. Casi ambigui → "Da triagiare" a Carlo.

### 🔧 §15.quater — Scheduled task changes (regola bloccante)

**Ogni modifica a stato/cron/prompt di uno scheduled task deve essere ESEGUITA via `update_scheduled_task` nello stesso commit della doc.** Scrivere solo nella doc = drift doc-vs-realtà (il task continua a girare con la vecchia configurazione). Pre-flight consigliato: se la chat tocca scheduled tasks, chiamare `list_scheduled_tasks` all'apertura per verificare lo stato reale.

### 🔧 §15.quinquies — Verifica strutturale post-action (regola bloccante)

Ogni claim di "verificato / risolto / fixed / completato / FUNZIONATA" dell'agente deve dichiarare ESPLICITAMENTE: (a) il path/file controllato, (b) il criterio specifico applicato. Sintesi metric-driven (es. "41 task migrati", "K=0 broken wikilink", "patch FUNZIONATA") senza ispezione strutturale del risultato → **trattare come UNVERIFIED**. La verifica vera è lettura del contenuto strutturale risultante (sezioni, format, gerarchia dei file toccati), non solo il numero finale.

**Per archive/refactoring batch multi-file**: `find + grep` su OGNI basename interessato PRIMA del commit, non solo sui file ricordati a memoria. Estende §15 voce 7 (grep globale di un singolo identificatore in caso di rename) al caso di archive batch di N file simultanei.

**Per creazione di nuove schede persona/progetto/fornitore** (cascata §10bis): PRIMA di `Write`, `find + grep` su OGNI alias plausibile dell'entità — non solo sul nome canonico atteso. Esempi: per una persona controllare nome + cognome + soprannome + azienda + brand affiliato (es. "Luca" + "Fratini" + "Aegiscore" + "Silencio"); per un progetto controllare nome + cliente + sigla + alias chat. Cascata §10bis non è solo "aggiungi a Master Facts/CLAUDE.md/MOC dopo creazione", è anche "check duplicati PRIMA della creazione".

Lesson appresa 14/5/2026 (3 fail intercettati da Carlo):
1. PM Digest patch "FUNZIONATA" dichiarata leggendo solo "41 task migrati" senza verificare struttura → ricreava stratificazione "Aggiunte X/5"
2. 35/52 wikilink ATTIVI residui non propagati post-Batch B+C archive perché propagati a memoria invece che via grep globale
3. Scheda `Aegiscore (Luca Fratini)` creata senza grep su "Luca" o "Fratini" → duplicata pre-esistente `Luca (Silencio).md` (stessa persona, dual affiliation), consolidata 14/5 sera dopo segnalazione Carlo

Post-mortem completo in [[99 - System/CLAUDE Changelog Archive]] §14.archive 14/5/2026.

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
