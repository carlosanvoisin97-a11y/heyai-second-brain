---
type: index
source: claude-code
date: 2026-05-30
session_count: 13
trigger: cron-2035
window: 2026-05-29 20:35 → 2026-05-30 20:35
created: 2026-05-30
---

# Indice code sessions — 2026-05-30

Run cron daily 20:35 (Code-only scheduler — vedi [[CLAUDE]] §9bis). Finestra 24h sul mtime dei JSONL `~/.claude/projects/`. **13 sessioni** rilevanti nel window, **6 skip** sotto soglia 300 KB.

## Sessioni della finestra

| Sessione | Progetto | MB | Status | Tema | Recap |
|---|---|---|---|---|---|
| `e195d474` | claude-wt-frosty-merkle | 2.5 | vault-worthy | SEO indipendente + build PPTX v2 28 slide (Angelini Academy) | [[2026-05-30 - claude-wt-frosty-merkle-e195d474]] |
| `cc3ff06a` | claude-wt-funny-shannon | 5.2 | vault-worthy | Audit vault Code-vs-Cowork, hook digest-staleness, refactor `code-sessions-index` via di mezzo | [[2026-05-30 - claude-wt-funny-shannon-cc3ff06a]] |
| `98853adb` | claude-wt-nifty-almeida | 13.1 | vault-worthy | Pitch Angelini QA + restyle + audit pricing + diagnosi strategica + prep call Elena (sessione più grande) | [[2026-05-30 - claude-wt-nifty-almeida-98853adb]] |
| `32d80228` | claude-wt-zen-nash | 0.5 | technical-only | Clone repo GitHub `ruvnet/ruflo` | [[2026-05-30 - claude-wt-zen-nash-32d80228]] |
| `f3963c94` | giulia-IED | 0.6 | low-content | Brainstorming concept bioartista per esercitazione IED (privato Giulia) | [[2026-05-30 - giulia-IED-f3963c94]] |
| `dd3eefa1` | aa-wt-beautiful-varahamihira | 1.1 | vault-worthy | Audit sito ufficiale Angelini per robustezza pitch (4-worktree workstream) | [[2026-05-30 - aa-wt-beautiful-varahamihira-dd3eefa1]] |
| `ee3fae1d` | aa-wt-competent-lehmann | 1.0 | vault-worthy | Duplicato workstream audit sito | [[2026-05-30 - aa-wt-competent-lehmann-ee3fae1d]] |
| `213e1b60` | aa-wt-elegant-morse-A | 1.0 | vault-worthy | Worktree host audit sito | [[2026-05-30 - aa-wt-elegant-morse-A-213e1b60]] |
| `681b486f` | aa-wt-elegant-morse-B | 0.9 | vault-worthy | Continuazione audit sito | [[2026-05-30 - aa-wt-elegant-morse-B-681b486f]] |
| `4a8d2f6e` | aa-wt-pensive-nash | 5.6 | vault-worthy | Dev frontend componenti React/Astro (sessione interrotta da errore) | [[2026-05-30 - aa-wt-pensive-nash-4a8d2f6e]] |
| `6c7b7623` | aa-wt-pensive-wozniak | 1.9 | vault-worthy | Edit chirurgico note slide PPTX Pitch (S6/S7/S16, "44 mld entro 2040") | [[2026-05-30 - aa-wt-pensive-wozniak-6c7b7623]] |
| `6b3f00ca` | aa-wt-relaxed-antonelli | 0.8 | technical-only | Install skill `claude-seo` + decisione "rifare SEO da zero" | [[2026-05-30 - aa-wt-relaxed-antonelli-6b3f00ca]] |
| `6dbceb18` | aa-wt-silly-goldberg | 10.4 | vault-worthy | Dev landing massivo Angelini (color code 4 pilastri, morph 3D, Barlow, ~35 file) | [[2026-05-30 - aa-wt-silly-goldberg-6dbceb18]] |

**Totali**: 10 vault-worthy · 2 technical-only · 1 low-content.

## Skip (sotto soglia o già indicizzati)

| JSONL | MB | Motivo |
|---|---|---|
| `75ef2fae` (Desktop/giulia-IED) | 0.2 | <300 KB |
| `e4d06a74` (claude-wt-elegant-payne) | 0.2 | <300 KB |
| `4bb7f1cb` (~/claude) | 0.1 | <300 KB |
| `fcb238ed` (~/claude, sessione di questo task `code-sessions-index`) | 0.1 | <300 KB + sessione self |
| `e1aeb863` (aa-wt-pensive-noether) | 0.1 | <300 KB |
| `ff390a5f` (~/) | 0.07 | <300 KB |

Nessuna sessione già indicizzata in `code-recap/` ricade nel window (l'unico recap precedente `2026-05-22 - 2brain-e04583d5.md` riguarda JSONL fuori window).

## Cascata automatica applicata

**Scheda toccata**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]]
- 1 append nel `## Log` (voce consolidata "Code sessions giornaliere" con 4 workstream)
- 10 link append in `## Sessioni Cowork correlate` (uno per recap individuale Angelini)
- `updated:` frontmatter già al 2026-05-30, non serve patch

**Proposte NON applicate** (per giudizio Carlo):
- Pricing emerso in `98853adb` (audit pricing Angelini Academy 27/5) — non propagato su Master Facts Sheet né su `_Angelini Academy` §Quotazione.
- Citazione "44 mld entro 2040" (`6c7b7623`) — non propagata in "Citazioni testuali da preservare" (è citazione di pitch, non fact HeyAI).
- Color code definitivo 4 pilastri (`6dbceb18`) — non propagato su scheda nel paragrafo Design system.
- Cambio metodologico sistema Code-vs-Cowork (`cc3ff06a`) — già committato in-session da Carlo (CLAUDE.md §9bis + hook `digest-staleness-check.sh`); no cascata aggiuntiva sulla scheda meta.

## Note di processo

- Sessione `cc3ff06a` (funny-shannon) è di **meta-lavoro sul sistema vault** — refactor di `code-sessions-index`, `pm-digest-mattutino`, `vault-live-protocol`, hook digest-staleness, CLAUDE.md §9bis. Tutte le modifiche al sistema sono state committate in-session. La cascata NON tocca nessuna scheda di progetto/persona (rispetto regola del task: no toccare CLAUDE.md, MOC, Open Questions in cascata automatica).
- Pattern emerso: il 30/5 Carlo ha lanciato lo **stesso prompt "audit sito Angelini" in parallelo su 4 worktree** (dd3eefa1, ee3fae1d, 213e1b60, 681b486f). Convergono allo stesso output `elegant-morse-d7488c/reports/`. Valutare se la strategia consensus 4× porti reale lift o sia ridondante.
- Pattern emerso: `pensive-nash` (4a8d2f6e) e `silly-goldberg` (6dbceb18) lavorano sugli **stessi file React** del repo Angelini Academy con scopo simile. Silly-goldberg è la "finale" (mtime 18:21 vs pensive-nash 12:56). Verifica git status del repo `~/code/angelini-academy/` per riconciliazione.
- Pattern emerso: PPTX Pitch Angelini esiste in due versioni divergenti: `Angelini_Academy_Pitch.pptx` (sessioni frosty-merkle + nifty-almeida) e `Angelini_Academy_Pitch_v2.pptx` (sessione pensive-wozniak). **Decidere quale è la canonica per il pitch 31/5**.
- Nessuna sessione ha cwd esposto nel primo record JSONL (tutti `cwd: null` su `head -1`). Il path reale è ricostruito dalla cartella `~/.claude/projects/-Users-carlosanvoisin-*/`.
