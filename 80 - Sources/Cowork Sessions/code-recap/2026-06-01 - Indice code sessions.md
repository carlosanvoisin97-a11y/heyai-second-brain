---
type: index
source: claude-code
date: 2026-06-01
session_count: 4
trigger: cron-2035
window: 2026-05-31 20:35 → 2026-06-01 20:35
created: 2026-06-02
---

# Indice code sessions — 2026-06-01

Run cron daily 20:35 (eseguito in ritardo ~01:00 del 2/6 — Cowork/Code aperto fuori orario). Finestra ~24h sul mtime. **4** sessioni rilevanti nel window.

## Sessioni della finestra

| Sessione | Progetto | MB | Status | Tema | Recap |
|---|---|---|---|---|---|
| `07711fd8` | Angelini Academy (wt vigilant-solomon) | 6.6 | vault-worthy | Deck pitch — slide Utenti target 7×3 Voci | [[2026-06-01 - claude-wt-vigilant-solomon-07711fd8]] |
| `943928f2` | Angelini Academy (wt vigilant-solomon) | 7.5 | vault-worthy | Deck pitch — fact-check AI/Nobel + handoff | [[2026-06-01 - claude-wt-vigilant-solomon-943928f2]] |
| `c78d3237` | Angelini Academy (wt modest-thompson) | 3.5 | vault-worthy | Deck pitch — workflow editor + Mappa impatto | [[2026-06-01 - claude-wt-modest-thompson-c78d3237]] |
| `0593b7a7` | NOT Operation Transformation (wt nervous-shannon) | 0.7 | vault-worthy | Call NOT richieste tecniche + perf Carlo | [[2026-06-01 - claude-wt-nervous-shannon-0593b7a7]] |

`07711fd8` e `943928f2` sono la stessa sessione (worktree vigilant-solomon) spezzata in due JSONL consecutivi (15:53→17:59, poi 18:00→20:56): leggerle in coppia.

## Skip (sotto soglia o già indicizzati / esclusi)

- `c36e15c4` (claude-main, 3.6MB) — **escluso**: è una run dello scheduled task `code-sessions-index` stesso (31/5). Regola "skip la sessione di questo scheduled task". Era 108KB il 31/5 (sotto soglia), cresciuto continuando dopo le 20:35.
- `07115d14` (claude-main, 105KB) — sotto soglia 300KB.
- `e195d474` (claude-wt-frosty-merkle), `8c000f74` (aa-wt-relaxed-black), `ad9a9e5f` (aa-wt-serene-moore), `dd3eefa1` (aa-wt-beautiful-varahamihira), `f3963c94` (giulia-IED), `98853adb` (claude-wt-nifty-almeida), `fcb238ed` (claude-main) — **già indicizzati** in run precedenti (toccati/resumed il 1/6, recap esistente).

## Note di processo

- Run eseguita ~01:00 del 2/6 (oltre il cron 20:35) — Cowork/Code non aperto all'orario schedulato. Window di riferimento sul mtime comunque il giorno 1/6.
- Tutte e 4 le sessioni sono worktree del vault (`~/claude/.claude/worktrees/`), ma il contenuto è cliente: 3 su Angelini Academy, 1 su NOT.
- **Anomalia merge `0593b7a7`**: le edit (nota performance 2026-06-01, Operation Transformation, Carmen Compare) sono nel worktree `nervous-shannon`; nel main vault la nota performance 1/6 non risulta e OT non citava la call → merge worktree→main probabilmente non avvenuto. La cascata append-only ha comunque registrato il fatto nel `## Log` di OT e nei link Sessioni.
