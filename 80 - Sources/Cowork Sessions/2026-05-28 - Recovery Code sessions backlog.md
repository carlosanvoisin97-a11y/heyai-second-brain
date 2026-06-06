---
type: recovery-master-rollup
source: claude-code
date: 2026-05-28
session_count: 27
window: 2026-05-21 → 2026-05-28 (ultimi 7 giorni)
total_jsonl_mb: 257.2
recap_folder: code-recap/
status_breakdown: vault-worthy=22 · technical-only=3 · partial=2
trigger: manual-recovery (richiesta Carlo 28/5)
created: 2026-05-28
tags: [recovery, code-sessions, audit, recovery-2026-05-28]
---

# Recovery Code sessions backlog — settimana 21-28/5/2026

> Master rollup dei recap individuali delle 27 sessioni Claude Code lavorate nell'ultima settimana e mai indicizzate nel vault (il task notturno `cowork-sessions-index` non cattura le JSONL di Code, solo le Cowork web/mac). Procedura attivata su richiesta di Carlo 28/5/2026 04:00. I file di dettaglio vivono in [[80 - Sources/Cowork Sessions/code-recap/]].

## TL;DR

- **27 sessioni Code** ($\geq$0.4MB cad., totale 257.2MB JSONL) tra 21/5 e 28/5. **23 vault-worthy**, 3 technical-only, 1 mista.
- **Dominanza Angelini Academy**: 24/27 sessioni ruotano attorno alla gara FuturItaly (pitch finale 31/5) — pitch v3.3, mockup sito, sito Astro migrato, asset 3D, Excel pricing, audit deck. 1 sessione governance vault (2brain 22/5), 1 audit sicurezza, 1 tooling skill globale.
- **Cosa è "perso"**: nessun codice/asset è perso (vive su disco fuori dal vault, è normale). È perso il **metadato concettuale**: decisioni, numeri, citazioni, task aperti che dovrebbero stare nelle schede vault e non ci sono.
- **Numero più rilevante emerso**: **pricing vdef2 Catalogo Angelini Academy = €49.500** (Core, formula `=SUM(B9:B15)`) + add-on Agente AI Academy €14K (sceso da €29K), scontistica 5-10-15%. Working state 27/5, NON ancora ufficiale → non promuovere al Master Facts Sheet senza conferma Carlo.
- **Discrepanze critiche pre-pitch 31/5** (vedi §6): drift Excel vs verbale 4 voci · brief 4 OpCo Pharma/Tech/Ventures/Fater vs codice Pharma/Industrial Tech/Consumer/Fater · S16 Sara Talent gap journey · sito 4 personas vs doc v.012 cluster 8 strategici.

## 1. Tabella riassuntiva (27 sessioni, ordinate per data attività)

| Data | Sessione | Progetto/cwd | MB | Status | Tema sintetico |
|---|---|---|---|---|---|
| 21/5 | `72ba5974` | `~/code/angelini-academy` | 49.5 | vault-worthy | Mockup sito v2 (10gg dev, 81 commit, palette+typography blessate, deploy live) |
| 22/5 | `e04583d5` | `~/2brain` | 2.5 | vault-worthy | Governance vault: M-plan, decisione "indurire /claude non ricostruire", M3+M4 landed |
| 22/5 | `0cac2447` (quirky-snyder) | aa-wt | 1.0 | vault-worthy | Audit sicurezza perimetro Claude di Carlo (sessione interrotta) |
| 22/5 | `93730e40` (thirsty-engelbart) | aa-wt | 0.4 | vault-worthy | Creazione skill globale `web-design-3d` (tooling PM-side) |
| 25/5 | `7d821b24` (happy-haibt) | aa-wt | 2.8 | vault-worthy | `/marketing:brand-review` sito Angelini, 16 file copy review |
| 25/5 | `421a54fd` (musing-lederberg) | aa-wt | 0.4 | technical-only | Consultazione visiva sito pre-17/5 (Vite locale isolato) |
| 25/5 | `15da279a` (nifty-banach) | aa-wt | 5.2 | vault-worthy | Scena 3D "Industry Learning Ecosystem", nomenclatura 4 OpCo |
| 25/5 | `49c065f9` (relaxed-hoover) | aa-wt | 0.4 | vault-worthy | Audit sito 4 personas vs doc v.012 (8 cluster richiesti) |
| 26/5 | `fd53492b` (eloquent-buck) | aa-wt | 4.0 | partial | Prep asset Claude Design + brand css Pantone 287/300 C |
| 26/5 | `cf69dbfb` (xenodochial-shannon) | aa-wt | 0.7 | technical-only | Install plugin Claude Code (Context7, example-skills, superpowers) |
| 26/5 | `11a8126d` | `~/code/angelini-academy`* | 10.8 | vault-worthy | Componente CompassScrollAnimation per Sito FuturItaly (Michele) |
| 26/5 | `4b4b8790` | `~/Desktop/presentazioni-strategiche` | 32.2 | vault-worthy | Metodo HeyAI 3-stadi per Claude Design, prompt Stadio 1+Slide 1 |
| 26/5 | `47f27518` | `~/Desktop/presentazioni-strategiche` | 40.8 | vault-worthy | Estrazione metodo da 5 deck reference + 10 slide-prompt Atto 1 |
| 26/5 | `f00af152` (loving-kilby) | `~/claude` wt | 7.4 | vault-worthy | Pitch v3 → v3.3 McKinsey/Pyramid, 10 regole stilistiche, handover |
| 26/5 | `f845551d` (infallible-murdock) | aa-wt | 7.4 | vault-worthy | Raffinamento copy pitch v3.3, citazione Elena 26/5, Atto 3 rinumerato |
| 26/5 | `20180844` (quizzical-bhaskara) | aa-wt | 0.8 | vault-worthy | Audit deck Atto 2 vs spec v3.3 (1 incoerenza S16 Sara Talent) |
| 27/5 | `0bdc507b` (magical-ritchie) | aa-wt | 12.0 | vault-worthy | Pitch v4.0 pulito (8 slide Atto 3, 3 case finali, capability alto livello) |
| 27/5 | `c64a78d9` (affectionate-visvesvaraya) | aa-wt | 1.0 | vault-worthy | Audit sito 3D vs pitch v3.3 Atto 1 (allineato ~88%, 4 gap rossi) |
| 27/5 | `a94a6ca2` | `~/Desktop/img-angelini-molecole` | 2.0 | technical-only | Rimozione background 7 diagrammi molecolari (asset pitch) |
| 27/5 | `7280e839` | `~/code/angelini-sito-3d` | 8.1 | vault-worthy | Migrazione Vite/React → Astro 6, 18 pagine, preview Vercel condivisibile |
| 27/5 | `ad9a9e5f` (serene-moore) | aa-wt | 17.2 | vault-worthy | Pitch Atto 3 ridisegnato + Excel Catalogo vdef, prep call Elena |
| 27/5 | `0f43d9b5` (affectionate-shockley) | aa-wt | 0.6 | vault-worthy | Excel v4.2→v4.3→vdef→vdef2, Core €49.500, scontistica 5-10-15% |
| 27/5 | `8c000f74` (relaxed-black) | aa-wt | 1.5 | vault-worthy | 8 modifiche pitch post-call Elena 27/5 + review Excel (drift pricing) |
| 28/5 | `a427dd8d` (suspicious-blackwell) | aa-wt | 29.9 | vault-worthy | Concept 3D molecola/atomo+ponte, stack R3F+GSAP+Lenis, Brief Copy v2.0 |
| 28/5 | `2694bff1` (affectionate-blackwell) | aa-wt | 0.7 | vault-worthy | Audit deck HTML vs MD v3.3 (trim indice 11→6, pivot cover 3D wow) |
| 28/5 | `b6da38ca` | `~/Desktop/presentazioni-strategiche` | 13.4 | vault-worthy | Master Style Prompt + Slide-prompt Atto 2+3 per Claude Design |
| 28/5 | `c19ad2e4` | `~/test-3d` | 4.4 | vault-worthy | Sandbox 3D, raccomandazione `MoleculeNucleus` come linguaggio unico |

\* La sessione `11a8126d` ha cwd nominale `angelini-academy` ma il lavoro effettivo è in `~/code/futuritaly-compass/` — flag in recap.

## 2. Breakdown per progetto vault

- **Angelini Academy** (gara FuturItaly, pitch 31/5): 24/27 sessioni — copre pitch deck, sito mockup, sito Astro migration, sandbox 3D, Excel pricing, asset visivi, audit incrociati, brand review, copy review.
- **Sito Futuritaly**: 1 sessione (CompassScrollAnimation componente per Michele).
- **Vault governance / system**: 2 sessioni (2brain M-plan, audit sicurezza Claude).
- **Tooling PM-side**: 1 sessione (skill `web-design-3d` globale).
- **Meta install plugin**: 1 sessione (xenodochial-shannon).

## 3. Top decisioni vault-worthy aggregate

### Pitch Angelini Academy — copy/struttura
- **3 Pilastri canonici** + **3 Voci** consolidati (sessioni `f00af152`, `f845551d`)
- **Concept "molecola/atomo"** come linguaggio visivo unico (sessioni `a427dd8d`, `15da279a`, `c19ad2e4`); raccomandazione `MoleculeNucleus`
- **10 regole stilistiche vincolanti** pitch (sessione `f00af152`) — candidate per atomic note in `40 - Resources/Concetti/`
- **Atto 1** 10 slide ristrutturate McKinsey/Pyramid (sessioni `f00af152`, `f845551d`)
- **Atto 2** S11-S21 confermate ad eccezione di S16 Sara Talent (gap riga journey)
- **Atto 3** ridisegnato a 8 slide S22-S29, 3 case study finali (BAT-Op.Transformation, NOT-Sito+LinkedIn, FuturItaly placeholder), mockup come "quarto case implicito" S29 (sessione `0bdc507b`)
- **Cover slide**: pivot da editorial molecola+ponte a **3D fotoreale wow** (sessione `2694bff1`)
- **Trim indice deck** v3.3 da 11 a 6 voci, "affondo"→"deep dive", capitolo "demo live" aggiunto (sessione `2694bff1`)

### Pitch Angelini Academy — pricing (working state 27/5)

| Voce | Prezzo (€, IVA escl.) |
|---|---|
| **Sito** | 22.000 |
| **Area Riservata Semplice** | 5.500 |
| **Community** | 15.000 |
| **Analytics** | 2.000 |
| **SEO + LLM** | 4.000 |
| **Agente AI Academy** | 14.000 (sceso da 29.000) |
| **Area Riservata Avanzata** (add-on) | 13.000 |
| **Dashboard Analytics** (add-on) | 6.500 |
| Tariffa daily HeyAI | 650/g |
| Scontistica progressiva | 3 add-on −5% · 4 add-on −10% · tutti −15% |
| Pagamento | Una tantum 50%+50% · Continuativi 30gg fattura |
| **Totale Core (formula `=SUM(B9:B15)`)** | **49.500** |

**ATTENZIONE — non ufficiale**: i numeri sono working state nell'Excel `HeyAI_Angelini_Academy_Catalogo_Pricing_vdef2.xlsx` (Downloads, fuori vault). Discrepanze tra sessioni 27/5: relaxed-black indica Core €48.500, affectionate-shockley €49.500. Affectionate-shockley è più recente → numero finale presumibile €49.500. Non promuovere a Master Facts Sheet senza conferma Carlo (vedi §6 discrepanze).

### Sito Angelini Academy
- **Stack mockup**: React/Vite + Three.js + Framer Motion (sessione `72ba5974`)
- **Stack sito production**: migrato ad **Astro 6** + 18 pagine statiche + React island, branch `astro-migration` (sessione `7280e839`)
- **Hero finale**: `MorphHero` (molecola → ponte scroll-based) come island `client:only="react"`
- **Typography**: Barlow + Merriweather. **Palette**: Pantone 287/300 C, `#003087`
- **i18n**: it/en preservato
- **Preview pubblica condivisibile** Vercel: `https://angelini-academy-git-astro-migration-carlo-sanvoisin-s-projects.vercel.app/`
- **Branch policy**: `main` e `mockup-v2` (versione in valutazione cliente) intoccate

### Governance vault (sessione `e04583d5`)
- Decisione: **indurire `/claude` sul posto**, NON ricostruire in `2brain` (95% del valore è contenuto)
- M-plan: **M4 (git init, 757 file)** e **M3 (CLAUDE.md routing table)** landed; M2/M1 dopo pitch Angelini 31/5; M5/M6 ultimi
- Vincolo bloccante: cron citano CLAUDE.md per numero sezione → M3 non rinumera

### Sicurezza Claude (sessione `0cac2447`)
- Account Claude **condiviso coi soci** → ogni chat visibile a tutti (incluse audit sicurezza)
- Supply chain MCP `21st-dev-magic` potenzialmente `@latest`
- Skill terza parte `website-builder-setup` da repo `tenfoldmarc`
- FileVault status non verificato
- CLAUDE.md 49 KB caricato in ogni sessione vault — candidato slim-down per dati riservati
- Sessione interrotta prima dei 3 punti finali (routine autonoma, dati sensibili, supply chain) — **richiede follow-up dedicato**

## 4. Citazioni testuali da preservare

- **Elena Chiti 26/5** (sessione `f845551d`): *"tu parli con proprietà però dici tanto, mi va in tilt il cervello"* — pattern eco di 11/3, 19/5 e 26/5 sul tempo parlato Carlo
- **Carlo 25/5** (sessione `15da279a`): branding 4 OpCo definitivo Pharma/Industrial Tech/Consumer/Fater
- **Carlo 22/5** (sessione `0cac2447`): *"Procedi a dirmi cosa vorresti fare senza eseguire nulla"* (modalità audit-only su sicurezza)

## 5. Schede vault da aggiornare (proposta §15, prioritizzata)

### P1 — Da committare PRIMA del pitch 31/5

1. **[[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]]** — append `## Log` 21-28/5 con sintesi multi-sessione: pitch v4.0, sito Astro deploy, Excel pricing working state €49.500, audit incrociati. Aggiungere 5-8 task `- [ ]` aperti (decisioni S16, allineamento Excel vs verbale, conferma 14 atenei, cluster doc v.012, slot pitch). URL preview Vercel come asset gara.
2. **[[60 - People/Elena Chiti]]** — append citazione 26/5 e nota su review pricing 27/5
3. **[[60 - People/Carlo Sanvoisin]]** — citazione 22/5 + pattern audit sicurezza (worktree quirky-snyder)

### P2 — Da committare dopo pitch (non blocca)

4. **[[99 - System/Master Facts Sheet]]** — **NON toccare ora** sul pricing Angelini (working state, non ufficiale). Promozione solo dopo conferma Carlo post-pitch. Aggiungere voce "URL preview Angelini Academy gara" come asset.
5. **[[20 - Projects/Futuritaly/Sito Futuritaly]]** — append nota componente CompassScrollAnimation, task per Michele su integrazione Hostinger
6. **[[60 - People/Michele Mattucci]]** — append nota deliverable CompassScrollAnimation
7. **[[60 - People/Caterina Caboni]]**, **[[60 - People/Marco Morbidelli]]** — append da audit affectionate-visvesvaraya
8. **[[99 - System/Open Questions]]** — nuove voci: (a) discrepanza nomenclatura OPCO brief vs codice; (b) pricing €48.500 vs €49.500; (c) follow-up sicurezza Claude perimetro; (d) cluster doc v.012 vs personas sito; (e) 14 atenei conferma Elena.
9. **[[40 - Resources/Concetti/]]** — atomic note candidate da promuovere: (a) 10 regole stilistiche pitch (sessione `f00af152`), (b) metodo HeyAI 3-stadi Claude Design (sessione `4b4b8790`), (c) pattern audit-only sicurezza Claude (sessione `0cac2447`)
10. **[[99 - System/CLAUDE Changelog Archive]]** — verificare migrazione changelog ex-§14 (sessione `e04583d5`)

## 6. Discrepanze e open questions trasversali (CRITICHE pre-pitch 31/5)

1. **Drift pricing Excel vs verbale post-call Elena 27/5** (sessione `8c000f74`): 4 voci divergenti — Analytics 2 vs 3K, SEO 4 vs 5K, Area Riservata 5.5 vs 4.5K, AI 14 vs 12K. **Da risolvere prima invio email Elena**.
2. **Totale Core €48.500 vs €49.500** (sessioni `8c000f74` vs `0f43d9b5`): evoluzione tra vdef e vdef2. Confermare quale è il numero da consegnare.
3. **Nomenclatura 4 OpCo**: brief dice **Pharma/Tech/Ventures/Fater** (sessione `7d821b24`, slide 11); codice sito ha **Pharma/Industrial Tech/Consumer/Fater** (sessione `15da279a`). **Incongruenza da chiarire pre-pitch**.
4. **S16 Sara Talent**: tabella journey design ha 4 righe, spec v3.3 ne prevede 5 (manca "Cosa la sposta alla fase successiva"). Decisione bloccante (sessione `20180844`).
5. **Sito 4 personas vs doc v.012 8 cluster strategici**: 3 cluster assenti (EdTech/startup, filiera, community interna), linguaggio scientifico ricerca mancante (sessione `49c065f9`). Sito segue `Definizione dei target.txt` non v.012. Doc `.txt` non nel vault — TBD chiedere a FuturItaly?
6. **Conferma "14 atenei"** con Elena (sessione `f00af152`)
7. **Fonte "Cattedra Luiss"** da verificare (sessione `f00af152`)
8. **Audit sicurezza Claude**: 5 topic aperti non risolti (account condiviso, supply chain, skill terza parte, FileVault, slim-down CLAUDE.md)
9. **Refuso file path**: `Ritrutturato` vs `Ristrutturato` (sessione `0bdc507b`)
10. **Cwd disallineato `angelini-academy` vs `futuritaly-compass`** (sessione `11a8126d`) — pattern da gestire per ricerche cross-sessione future

## 7. Output orfani fuori vault (da valutare per promozione)

**File su Desktop / Downloads** (probabilmente non versionati né backupati):

- `~/Desktop/presentazioni strategiche/metodo/metodo.md` + `prompt-library.md` (asset metodologico riusabile cross-cliente)
- `~/Desktop/img angelini molecole/no_bg/` + script Python `remove_bg.py`, `make_preview.py`
- `~/Downloads/HeyAI_Angelini_Academy_Catalogo_Pricing_vdef.xlsx` e `vdef2.xlsx`
- `~/Desktop/presentazioni strategiche/metodo/` (5 sottocartelle struttura `_for-claude-design/`)
- `~/2brain/CLAUDE.nuovo.md` bozza M3 (da archiviare in `50 - Archive/`)

**File già nel vault `00 - Inbox/`** (post-pitch decidere se promuovere a cartella progetto):

- `2026-05-26 - Master Style Prompt per Claude Design — Pitch Angelini.md`
- `2026-05-26 - Slide-prompt Atto 2 (S11-S19) per Claude Design.md`
- `2026-05-26 - Slide-prompt Atto 3 (S22-S28) per Claude Design.md`
- `2026-05-26 - Audit PDF Claude Design output Atto 1 (S3-S8).md`
- `2026-05-26 - Pitch Angelini v4.0 - Pulito.md` (sostituisce v3.3 iterativa)
- `2026-05-26 - Handover Angelini chat nuova - Slide generation.md`
- `2026-05-26 - Audit Sito 3D vs Pitch v3.3 Atto 1.md`

**Asset deployati pubblicamente** (gara Angelini):

- `https://angelini-academy.vercel.app/` (mockup-v2)
- `https://angelini-academy-git-astro-migration-carlo-sanvoisin-s-projects.vercel.app/` (preview Astro)

**Dev server ancora attivi a fine sessione** (verificare e spegnere):
- `localhost:5179` (sessione `11a8126d`)

## 8. Note di processo

- **Gap strutturale**: il task notturno `cowork-sessions-index` non cattura le sessioni Code (CLI/JSONL); cattura solo le Cowork web/mac (prefix `local_XXX`). Questa è la causa del backlog. **Fase 2 della recovery**: creare scheduled task `code-sessions-index` analogo (cron 20:30) — vedi task #4 in TodoList.
- **Sessioni in worktree multipli**: 18 dei 24 worktree di angelini-academy sono stati attivi nella settimana. Diverse sessioni "gemelle" lavorano in parallelo (es. `suspicious-blackwell` + `angelini-sito-3d` 27-28/5; `loving-kilby` + `infallible-murdock` 26/5). Le date di attività reale dei messaggi possono differire dal mtime del file JSONL (continuation, ripresa). I recap individuali segnalano queste anomalie nelle "Note di flag".
- **Auto-promozione cascata §15 NON eseguita in recovery**: questa recovery produce solo i recap. La cascata §15 (append nelle schede Angelini Academy + Master Facts + people) va eseguita da Carlo a mano o in una sessione successiva. Motivazioni: (a) bias toward action vs rischio sovrascrittura schede recenti con dati working state; (b) decisioni di promozione su numeri non ancora ufficiali (pricing) richiedono giudizio Carlo; (c) pitch 31/5 a 3 giorni rende prioritario il deliverable e non il vault commit batch.

## 9. Prossimi passi consigliati a Carlo

1. **Pre-pitch 31/5** (P0): aprire questo file + leggere top 5 sessioni Angelini Academy (`72ba5974`, `f00af152`, `0bdc507b`, `ad9a9e5f`, `7280e839`); chiudere le 10 discrepanze del §6 una per una.
2. **Cascata §15 P1**: applicare a mano i 3 patch P1 in §5 (Angelini Academy Log + Elena Chiti + Carlo) **prima** del pitch.
3. **Post-pitch 31/5**: applicare P2 (Master Facts pricing ufficiale, Open Questions, atomic note candidate).
4. **Fase 2 recovery**: validare il pattern di questi recap → autorizzare creazione scheduled task `code-sessions-index` (task #4 TodoList).
5. **Sicurezza Claude**: riaprire sessione dedicata sui 5 topic non risolti del §6.8 — l'account condiviso coi soci è il più urgente.

