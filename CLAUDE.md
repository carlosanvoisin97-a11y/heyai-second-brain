---
type: system
created: 2026-05-05
updated: 2026-06-07
status: operational — refactoring M4 29/5/2026 (§15 vault-live + §10bis → skill vault-live-protocol; core sempre-attivo in CLAUDE.md; versioning git attivo) + Front 3 29/5 (§9bis due-scheduler Cowork-vs-Code + campanello digest-staleness hook)
purpose: Istruzioni di sistema per ogni chat Cowork che apre questa cartella
---
# CLAUDE.md — Istruzioni per ogni chat Cowork su questo vault

> Primo file che ogni nuova chat Cowork legge. Sintesi operativa del secondo cervello di [[60 - People/Carlo Sanvoisin|Carlo Sanvoisin]] (HeyAI Digital). Non sostituisce le fonti autoritative (in particolare [[99 - System/Master Facts Sheet]]); le condensa per orientamento immediato.
>
> Storico delle modifiche a questo file e al sistema: `git log` (versioning attivo dal 22/5/2026) + [[99 - System/CLAUDE Changelog Archive]].

<!-- updated: 2026-05-24 — patch §4 aliases (regola consolidata "un nome canonico, alias solo per varianti operative diffuse") -->
<!-- updated: 2026-05-29 — refactoring M4: corpo §15 (vault-live) + §10bis estratti in skill .claude/skills/vault-live-protocol/; core blocking resta sempre-attivo in CLAUDE.md. Diet hot-path: ~95 righe → ~22. -->

## 0. Routing — cosa leggere per ogni task

Tabella di instradamento: per ogni tipo di task leggi prima i file indicati e fermati lì. Serve a non ingerire l'intero vault a ogni sessione.

| Task | Leggi prima | Poi, se serve |
|---|---|---|
| Apertura di ogni chat | questo `CLAUDE.md` + pre-flight §10ter | — |
| Numeri / pricing / fatti commerciali | [[99 - System/Master Facts Sheet]] | scheda progetto in `20 - Projects/` |
| Lavoro su un progetto | `20 - Projects/<Cliente>/_<Cliente>.md` + scheda progetto | Master Facts Sheet, schede persona collegate |
| Lavoro su una persona | scheda in `60 - People/` | schede progetto collegate |
| Bozza email | **Read** `.claude/skills/email-drafting/SKILL.md` (obbligo §2.1) | 2-3 email recenti via Outlook |
| Proposta di Investimento / memo strutturato | **Read** `.claude/skills/investment-proposal-drafting/SKILL.md` (obbligo §2.2) | Master Facts Sheet + scheda progetto |
| Trascrizione caricata / recap call | **Read** `.claude/skills/transcript-processing/SKILL.md` (obbligo §15.bis) | schede dei presenti |
| Deliverable (proposta, brief, recap, presentazione) | `Glob` su `90 - Templates/`, `40 - Resources/`, `80 - Sources/Files/`, `20 - Projects/<Cliente>/` | template o esempio trovato |
| Navigazione / "dov'è X" | [[99 - System/MOC - Home]] | — |
| Stato task aperti | [[99 - System/Open Tasks]] | — |
| Dubbi / ambiguità irrisolte | [[99 - System/Open Questions]] | — |
| Aggiornare il vault con un fatto nuovo | §15 core (precedenza + append-only) | **Read** `.claude/skills/vault-live-protocol/SKILL.md` se commit non banale (refactoring/archive/nuove schede) |

Regola d'oro: prima di chiedere "che formato vuoi?", verifica se il vault ha già un template o un esempio.

## 0bis. Skill routing — quale skill per quale task

> Enforcement già attivo via SessionStart hook (`using-superpowers`): **prima di rispondere, se una skill matcha il task, invocala e annuncia "Using [skill]"; in dubbio, invoca.** Lavoro creativo/strategico → `brainstorming` o `management-consulting` prima di implementare. Più task indipendenti senza stato condiviso → `dispatching-parallel-agents`. *(Namespaci da rifinire se un'invocazione fallisce.)*

- **Documenti**: email → `email-drafting` · proposta/quotazione strutturata → `investment-proposal-drafting` · Word → `docx` · Excel/pricing/modelli → `xlsx` · PDF (leggi/compila/unisci/OCR) → `pdf` · slide/pitch/.pptx → `pptx` · comunicazioni interne (status/leadership/FAQ) → `internal-comms` · doc lungo co-authoring → `doc-coauthoring`
- **Strategia & PM**: analisi/decisione/matrice/memo MECE → `management-consulting` · brainstorm idea → `brainstorming` / `product-management:product-brainstorming` · spec-PRD → `product-management:write-spec` · competitive brief/battlecard → `product-management:competitive-brief` / `marketing-skills:competitor-profiling` · sprint/roadmap/metrics/stakeholder update → `product-management:*` · sintesi ricerca utente → `design:research-synthesis`
- **Vendita (HeyAI)**: pitch/one-pager/objection/demo/playbook → `marketing-skills:sales-enablement` · outreach freddo B2B → `marketing-skills:cold-email` · liste prospect ICP → `marketing-skills:prospecting` · pricing/packaging → `marketing-skills:pricing` · pagine "vs"/alternative → `marketing-skills:competitors`
- **Marketing clienti**: piano/GTM → `marketing-skills:marketing-plan` · strategia contenuti → `marketing-skills:content-strategy` · scrittura (blog/landing/PR/case) → `marketing-skills:content-creation`/`copywriting` · email drip → `marketing-skills:emails` · social/short-video → `marketing-skills:social`/`video` · ads/creatività → `marketing-skills:ads`/`ad-creative` · CRO/landing/popup/signup/onboarding/paywall → le rispettive `marketing-skills:*` · analytics/A-B test → `marketing-skills:analytics`/`ab-testing` · brand/copy review → `marketing-skills:brand-review`/`copy-editing` · VOC/ricerca clienti → `marketing-skills:customer-research`
- **SEO / AI-search**: audit completo → `claude-seo:seo-audit` · tecnico/schema/sitemap/hreflang/immagini → `claude-seo:seo-technical`/`seo-schema`/`seo-sitemap`/`seo-hreflang`/`seo-images` · locale/maps/GBP → `claude-seo:seo-local`/`seo-maps` · GEO/AI Overviews/citazioni LLM → `claude-seo:seo-geo` / `marketing-skills:ai-seo` · piano/cluster/brief/pagina → `claude-seo:seo-plan`/`seo-cluster`/`seo-content-brief`/`seo-page` · dati live SERP/keyword/backlink → `claude-seo:seo-dataforseo`/`seo-google`/`seo-backlinks`
- **Build / web / prodotti**: sito/UI/artifact → `frontend-design` / `web-artifacts-builder` / `theme-factory` · Next.js/React/shadcn → `vercel:nextjs`/`shadcn`/`react-best-practices` · deploy/env/bootstrap → `vercel:deploy`/`env`/`bootstrap` · app AI/agenti/AI SDK/API Claude → `vercel:ai-sdk`/`ai-architect`/`claude-api` · test webapp/accessibilità WCAG → `webapp-testing` / `design:accessibility-review` · immagini/grafica → `marketing-skills:image`/`canvas-design`/`algorithmic-art`
- **Sistema / vault / meta**: trascrizione call → `transcript-processing` · vault-live commit non banale → `vault-live-protocol` · memoria (persone/progetti/shorthand) → `productivity:memory-management`/`consolidate-memory` · config/hook/permessi → `update-config` · loop/scheduled agents → `loop`/`schedule` · review/security → `verify`/`code-review`/`security-review` · creare skill/connettore MCP/plugin Cowork → `skill-creator`/`mcp-builder`/`cowork-plugin-management:*`

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
- **Explain-after (R2, regola Carlo 6/6/2026)**: a fine di ogni lavoro non banale, spiegare in chat *cosa* è stato fatto e *come* va usato il risultato. La regola gemella R1 "skill-first" (usa in autonomia la skill più adatta prima di ogni task) è operativa via §0bis + hook `using-superpowers`.

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

- **Mai nominare i fornitori HeyAI al cliente** — regola completa in §13 Riservatezze
- **Formato consegna**: testo pulito copia-incolla diretto in Outlook, no code block, no tag formattazione
- **Verbi sostantivati** nei bullet di recap/prossimi passi (forma impersonale, no prima/seconda persona)
- **Prima di scrivere**: controllare 2-3 email recenti di Carlo via Outlook search per calibrare il tono

### 2.2 Proposte di Investimento HeyAI → skill `investment-proposal-drafting`

**OBBLIGO**: prima di redigere qualsiasi Proposta di Investimento (.docx/PDF) o investment memo strutturato per un cliente HeyAI, l'agente **DEVE leggere** il file `.claude/skills/investment-proposal-drafting/SKILL.md` con il tool `Read`. La skill contiene design system completo (layout pagina, header/footer, tipografia, palette, callout, tabelle) estratto dal file reference `Reference - Proposta Investimento Futuritaly Bandi Gare 2026.docx` in `80 - Sources/Files/`, struttura sezioni (variante snella 9 sezioni vs estesa 13 sezioni), regole pricing assorbite da [[40 - Resources/Metodologia Quotazioni HeyAI]], checklist anti-errori pre-consegna, e workflow operativo. Senza quella lettura, la proposta avrà errori grafici ricorrenti (font Arial invece di Aptos, color Heading sbagliato, footer assente, nomi fornitori esposti). Regole critiche sempre attive (anche senza leggere la skill):

- **Layout obbligatorio**: A4 portrait, margini top 2.50 / R/B/L 2.00 cm, header con logo HeyAI + dati legali, footer con bordo #156082 + ornamento + testo legale (NON numerazione pagine)
- **Tipografia obbligatoria**: Aptos 11pt body, Aptos 16pt nero bold per Heading 1, Aptos 20pt #2B8C96 bold per titolo, override inline esplicito (non lasciare default Normale=Arial)
- **Mai nominare i fornitori HeyAI al cliente** — regola completa in §13 Riservatezze
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
- **Aliases — quando registrarli e quando NO (regola consolidata 24/5/2026)**: ogni entità (persona, progetto, doc, concetto) ha **un solo nome canonico** = il basename del file. Gli `aliases:` sono un redirect tecnico per la risoluzione Obsidian, **non** una scorciatoia per duplicare l'identità sotto nomi diversi. Per persone, **il canonico è sempre `Nome Cognome`** (mai cognome-solo né nome-solo, anche se disambiguanti). Quando emerge una forma alternativa che non risolve: (1) verificare se è la stessa entità di una scheda esistente; (2) se c'è il minimo dubbio, **chiedere a Carlo prima di committare** ("la forma X si riferisce all'entità Y?"); (3) fix preferito = rinominare la forma alternativa al canonico nel file sorgente via §15 core grep-on-rename (dettaglio: skill `vault-live-protocol` §5 voce 7 — grep+rinomina batch); (4) registrare alias **solo se** la variante è uso operativo diffuso e ricorrente (es. forma corta usata spontaneamente in 5+ file di prosa, sigla riconosciuta come `NoLoop`/`NOT`, brand alternativo della stessa entità come `Tokio Studio = Simone Montanari`). **NON registrare alias per**: (a) errori di battitura (bonificare con grep+rinomina, mai mascherare con alias); (b) coprire 1-2 occorrenze isolate generate da indexer/script auto (fix il sorgente che le ha prodotte); (c) varianti cognome-solo o nome-solo di persone (canonico = sempre Nome Cognome). Lesson 24/5/2026 (rivista 7/6/2026): il nome corretto del commercialista NoLoop è **Verrangia** (con la a, conferma Carlo); SIA "Verrangelo" SIA "Verrengia" erano forme errate, bonificate a "Verrangia" il 7/6 (grep+rinomina). Il principio resta: bonificare il typo al canonico, non mascherarlo con alias. Wikilink auto-generati con suffisso azienda non canonico (`Marta Garrafa (Eldis)` per scheda `Marta Garrafa`) → fix all'output dell'indexer, non alias di copertura.
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
| [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy\|Angelini Academy]] | Angelini (via FuturItaly) | Carlo+Michele | 🟡 P2 — pitch 5/6 fatto, esito **soft-defer**: restyling+editoriale già a fornitore concorrente (gara feb→giu); apertura = workshop architettura H2'26 → build 2027 |

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

16 prompt template in `40 - Resources/Prompts/` ([[40 - Resources/Prompts/00 - Index Prompt Library|Index]]). Carlo invoca con: *"applica prompt 03 + contesto"* o *"recap call → email"*.

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

Disabilitati: `friday-wrap-up`, `weekly-digest`, `claude-chats-sync`. Per storia patch → [[99 - System/CLAUDE Changelog Archive]]. Ogni task è triggerabile manualmente dal pannello Scheduled.

### 9bis. DUE scheduler separati — leggere prima di fidarsi di `list_scheduled_tasks` (Front 3, 29/5/2026)

Le automazioni di questa tabella vivono nello **scheduler di Cowork** (`~/Documents/Claude/Scheduled/`) e **girano SOLO quando l'app Cowork è aperta**. Claude **Code** (CLI) ha uno scheduler **separato** (`~/.claude/scheduled-tasks/`) con **due task**: `code-sessions-index` (indicizzazione sessioni Code, cron 20:35) + `pm-digest-mattutino` (**bridge F1** 7/6/2026, cron 8:02 Lun-Ven, best-effort). ⚠️ Anche il Code scheduler gira **solo ad app Code aperta** (mai a Mac spento): l'unattended vero richiede **routine cloud su claude.ai** → vedi `99 - System/Routines/_README.md`. Conseguenze operative:

- Lavorando **solo in Code** senza aprire Cowork, il PM Digest mattutino e tutti gli audit (link-checker, moc-refresh, crm-velocity, ...) **NON partono — in silenzio**. Nessuno se ne accorge finché non manca una daily note. _(update F1 7/6: il PM Digest ora ha un **bridge best-effort** nel Code scheduler → gira quando Code è aperto; gli audit restano Cowork-bound finché non attivi le routine cloud, vedi `99 - System/Routines/_README.md`.)_
- Il tool `mcp__scheduled-tasks__list_scheduled_tasks` (disponibile in Code) vede **SOLO lo scheduler di Code** → mostra i suoi task (`code-sessions-index` + `pm-digest-mattutino` bridge) e basta. **NON è lo stato reale dei task Cowork** di questa tabella. Per quelli: aprire il pannello Scheduled dentro Cowork.
- **Campanello automatico**: l'hook `SessionStart` in `.claude/settings.json` lancia `.claude/hooks/digest-staleness-check.sh` a ogni apertura sessione. Se l'ultima daily note è ferma da ≥2 giorni mostra un avviso (digest probabilmente non girato perché Cowork non è stato aperto). Per recuperare: aprire Cowork e lasciar girare il digest, o lanciarlo a mano.
- **Regola pratica**: per *lavorare* sul vault (note, bozze, analisi) Code e Cowork sono equivalenti e sicuri — si può switchare liberamente. Per le *automazioni* no: sono legate a Cowork. Se passi giorni in Code, apri Cowork ogni tanto per far girare digest+audit.

## 9ter. Git, sync e branch (era Code-first) — disciplina anti-errori

> Aggiunta 7/6 a chiusura del loop di sync. Garantisce: niente branch spuri, niente duplicazioni, niente commit sbagliati. Dettaglio operativo + record di ripristino: [[99 - System/Routines/_README]] §Sync / §Step 2. *(Le automazioni "battito" ora girano come **routine cloud unattended** su claude.ai, pilotabili da Code via `RemoteTrigger` — §9/§9bis "Cowork-bound" da aggiornare in F5.)*

- **Lavora sempre su `main`** in `/Users/carlosanvoisin/claude` (= cartella Obsidian). La worktree per-sessione (`.claude/worktrees/...`) è creata in automatico dall'harness: il lavoro VERO deve atterrare su `main`, non restare in worktree.
- **`git pull` PRIMA di scrivere.** Scrivono in parallelo: agenti Code, routine cloud, e il plugin Obsidian Git (auto-sync ogni 10'). Pullare evita divergenze e push rifiutati.
- **Commit per-file/gruppi dopo review — MAI `git add -A`.** Messaggi descrittivi. (I commit `vault auto-sync (Obsidian)` sono il backup automatico del plugin, riconoscibili e distinti.)
- **Push solo su `main`** (`git push origin HEAD:main`). **MAI creare branch o aprire PR** per il vault.
- **Branch/worktree `claude/*` che si accumulano** = creati 1-per-sessione dall'isolamento harness. **Innocui** (0 commit unici; tutto il lavoro va su main); si ripuliscono periodicamente (`git worktree remove` + `git branch -D`). Non sono bug né perdita dati.
- **`.gitignore` = barriera di sicurezza**: ignora `.obsidian/plugins/` (i `data.json` plugin possono contenere API key/PAT), `copilot/`, e i grezzi PII (`_import-*`, `_DA_DOWNLOADS_*`). **Mai un-ignorarli**: l'auto-sync fa `stage-all` → finirebbero su GitHub.
- **Routine cloud → solo `main`**: ogni file `99 - System/Routines/*.md` DEVE mantenere `## Push finale` (`git push origin HEAD:main`, no branch/PR); i prompt dei 5 trigger cloud sono ora espliciti uguale (allineati 7/6).

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

Quando crei una nuova scheda in `20 - Projects/` o `60 - People/`, propaga subito (stessa sessione) le info essenziali a **Master Facts Sheet**, **CLAUDE.md** (§6 se progetto P1/P2, §7 se persona cluster cliente/fornitore), **MOC - Home** (wikilink + tag 🆕), **Open Questions** (se apre dubbi non risolti). Senza cascata la scheda resta invisibile ai file di sistema e ogni nuova chat parte cieca su quel progetto/persona. **Procedura completa + check-duplicati-PRIMA-di-`Write`** nella skill `vault-live-protocol` §7 (la regola "`updated:` più recente vince" del §4 è una toppa, non sostituisce la cascata).

### 10ter. Pre-flight check di apertura chat

**Obbligatorio prima di rispondere alla prima domanda in ogni nuova sessione.** Sequenza: (1) verificare ultimo run PM Digest in [[99 - System/Digest Log]] — se l'ultima daily note in `10 - Daily Notes/` è ferma da ≥2 giorni, **segnalare e ricordare la causa probabile**: digest non girato perché Cowork non è stato aperto (vedi §9bis — automazioni Cowork-bound). In Code l'hook `digest-staleness-check.sh` lo flagga già da solo; (2) leggere indice sessioni Cowork del giorno precedente (`80 - Sources/Cowork Sessions/{ieri}.md`); (3) cross-reference prosa vs checkbox sulle 3-5 schede progetto più rilevanti — segnalare incoerenze con "🔍 Pre-flight check".

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

- **Mai citare per nome i fornitori HeyAI** (Soolutions, Silencio, Jakala, Tokio Studio, Aegiscore) in nulla di rivolto al cliente — email, proposte, presentazioni: scrivere sempre `team di sviluppo` / `team tecnico` / `il nostro team`. Richiamata da §2.1 (email) e §2.2 (proposte).
- Flusso fatture attive NoLoop (operativi → email → Elisa Remigi → BC manuale) = **classificato**, non menzionare apertamente con il cliente.
- Credenziali rotate ✅ il 30/04 (Carlo); password storiche citate in [[99 - System/Open Questions]] §Sicurezza vanno trattate come compromesse e mai ricondivise.
- Marco Pasquali (NoLoop) ↔ Andrea Pasquali (Jakala): relazione padre-figlio, evitare di mettere Marco in posizione conflittuale; coltivare la relazione direttamente.

## 14. Storico

> La cronologia delle modifiche (ex changelog rolling §14) è stata rimossa da questo file il 22/5/2026: lo storico vive ora in `git log` (versioning attivo) e in [[99 - System/CLAUDE Changelog Archive]]. Così CLAUDE.md non cresce a ogni patch.

- Regola operativa (era in coda al vecchio §14, mantenuta): per ogni decisione su numeri ufficiali aggiornare [[99 - System/Master Facts Sheet]] **e** la scheda progetto, mai una sola.

## 15. Vault-live update — aggiornamento del second brain durante la sessione

Il vault si aggiorna **durante** la sessione, non a fine giornata: il task notturno `cowork-sessions-index` è solo un safety net, non il motore. Il motore è il comportamento dell'agente in sessione. Qui sotto il **core sempre attivo**; il protocollo operativo completo è nella skill dedicata.

**OBBLIGO**: prima di un vault commit **non banale** (refactoring/rename/move di file, archive batch multi-file, creazione di nuove schede, sessione densa con molti fatti, o dubbi su path/destinazione), l'agente **DEVE leggere** `.claude/skills/vault-live-protocol/SKILL.md` con il tool `Read`. La skill contiene: lista completa di cosa è vault-worthy, regole append-only dettagliate, modalità di commit A/B, **checklist pre-commit a 7 voci** (path → Glob → underscore → updated → dedup → riservatezze → grep-rename), formato del messaggio di vault commit, cascata §10bis su nuove schede.

**Core sempre attivo (anche senza leggere la skill):**

- 🔴 **Precedenza (bloccante)**: ogni numero/decisione/fatto vault-worthy nuovo va committato sulle schede impattate **PRIMA** di scrivere la risposta finale in chat — mai l'inverso. Trigger immediato: nuovo numero economico, decisione esplicita ("andiamo con X"), cambio di stato ("ha accettato/rifiutato/mandato"), citazione strategica, call svolta, action item assegnato.
- **Append-only**: mai rewrite di sezioni esistenti, mai rimuovere contenuto, mai spuntare/rimuovere `- [ ]` esistenti senza istruzione esplicita di Carlo. Si arricchisce **in append** (`## Log`, `## Citazioni testuali da preservare`, `## Task aperti`…) aggiornando `updated:` nel frontmatter.
- **Confini**: mai modificare numeri ufficiali del Master Facts Sheet senza conferma esplicita di Carlo (§5); mai creare schede progetto/persona senza chiedere (segnalare "Da triagiare").
- **🔍 Glob prima di ogni Edit/Write** sul path atteso (§3.1): non fidarsi della memoria; se il file non c'è, cercare `**/<filename>.md` e in caso segnalare invece di improvvisare.
- **Refactoring (rename/move/split)**: grep globale del vecchio identificatore e rinomina di **tutte** le occorrenze prima di chiudere il commit — `grep -rn "<vecchio>" /Users/carlosanvoisin/claude --include="*.md"`.
- **Vault commit in chat** a fine topic: schede toccate (wikilink) + sintesi 1 riga ciascuna; dichiarare schede ovvie saltate. Se nessun fatto vault-worthy, silenzio.

### 🎯 §15.bis — Protocollo "trascrizione caricata" → skill `transcript-processing`

**OBBLIGO**: quando Carlo carica una trascrizione o chiede un recap call, l'agente **DEVE leggere** il file `.claude/skills/transcript-processing/SKILL.md` con il tool `Read` PRIMA di processare la trascrizione. Il file contiene la checklist deterministica completa (10 step: partecipanti → progetti → numeri → task → calendario → citazioni → pattern → frontmatter → Microsoft Lists → audit post-commit). **Differenza §15 vs §15.bis**: §15 = ogni fatto vault-worthy singolo; §15.bis = protocollo batch per trascrizioni complete con N fatti in un colpo.

### 🔧 §15.ter — Reconcile checkboxes (regola bloccante)

**Ogni commit che aggiunge prosa che chiude un task deve chiudere anche il `- [ ]` corrispondente.** Il PM Digest aggrega solo lo stato dei checkbox, non la prosa: se la prosa dice "fatto" ma il checkbox resta aperto, Open Tasks mostra il task come pendente.

Formato vault commit obbligatorio (due liste): **Prosa appendata** + **Checkbox riconciliati** (✅ chiusi / ❌ annullati). Trigger chiusura: verbi al passato (`inviata`, `ricevuta`, `confermata`, `firmato`, `consegnato`…). Presente progressivo NON chiude. Casi ambigui → "Da triagiare" a Carlo.

### 🔧 §15.quater — Scheduled task changes (regola bloccante)

**Ogni modifica a stato/cron/prompt di uno scheduled task deve essere ESEGUITA via `update_scheduled_task` nello stesso commit della doc.** Scrivere solo nella doc = drift doc-vs-realtà (il task continua a girare con la vecchia configurazione). Pre-flight consigliato: se la chat tocca scheduled tasks, chiamare `list_scheduled_tasks` all'apertura per verificare lo stato reale.

### 🔧 §15.quinquies — Verifica strutturale post-action (regola bloccante)

Ogni claim di "verificato / risolto / fixed / completato / FUNZIONATA" dell'agente deve dichiarare ESPLICITAMENTE: (a) il path/file controllato, (b) il criterio specifico applicato. Sintesi metric-driven (es. "41 task migrati", "K=0 broken wikilink", "patch FUNZIONATA") senza ispezione strutturale del risultato → **trattare come UNVERIFIED**. La verifica vera è lettura del contenuto strutturale risultante (sezioni, format, gerarchia dei file toccati), non solo il numero finale.

**Per archive/refactoring batch multi-file**: `find + grep` su OGNI basename interessato PRIMA del commit, non solo sui file ricordati a memoria. Estende la regola grep-on-rename del §15 core (checklist pre-commit completa a 7 voci nella skill `vault-live-protocol` §5) al caso di archive batch di N file simultanei.

**Per creazione di nuove schede persona/progetto/fornitore** (cascata §10bis): PRIMA di `Write`, `find + grep` su OGNI alias plausibile dell'entità — non solo sul nome canonico atteso. Esempi: per una persona controllare nome + cognome + soprannome + azienda + brand affiliato (es. "Luca" + "Fratini" + "Aegiscore" + "Silencio"); per un progetto controllare nome + cliente + sigla + alias chat. Cascata §10bis non è solo "aggiungi a Master Facts/CLAUDE.md/MOC dopo creazione", è anche "check duplicati PRIMA della creazione".

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
