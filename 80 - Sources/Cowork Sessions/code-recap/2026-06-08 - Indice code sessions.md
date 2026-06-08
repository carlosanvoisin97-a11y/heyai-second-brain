---
type: index
source: claude-code
date: 2026-06-08
session_count: 4
trigger: cron-2035
window: 2026-06-07 20:35 → 2026-06-08 20:35
created: 2026-06-08
---

# Indice code sessions — 2026-06-08

Run cron daily 20:35. Finestra 24h + gap-scan self-heal (0 backlog extra trovato). **4** sessioni rilevanti.

## Sessioni della finestra

| Sessione | Progetto | MB | Status | Tema | Recap |
|---|---|---|---|---|---|
| `c367f6c2` | Angelini Academy | 13.9 | vault-worthy | Revisione deck pitch + audit pricing per fase + struttura proposta | [[2026-06-08 - claude-main-c367f6c2]] |
| `5acfac52` | Operation Transformation (NOT) | 8.3 | vault-worthy | Email follow-up Germano + doc As-Is/To-Be pulito + leva API BAT/PARD | [[2026-06-08 - claude-wt-wizardly-mirzakhani-5acfac52]] |
| `8af55255` | Sistema/vault (handover F1) | 2.6 | technical-only | Allineamento CLAUDE.md §9 era Code-first + anti-branch + catch-up | [[2026-06-07 - claude-wt-xenodochial-neumann-8af55255]] |
| `6a5c4481` | AI OS Cockpit (interno) | 2.2 | vault-worthy | Brainstorm→build dashboard local-first che legge il vault live | [[2026-06-08 - claude-main-6a5c4481]] |

## Skip (sotto soglia o già indicizzati)

**Dedup / resume-fork** (stessa conversazione di `c367f6c2`, skippati):
- `44a79afe` (8.1MB), `ef4be2ce` (7.9MB), `352c160e` (5.5MB) — prompt e start identici, `c367f6c2` è il file canonico (più lungo, 09:40→16:35).

**Già indicizzati** (recap esistente / sid8 nel Log): `7280e839`, `499af1f9`, `91b46685`, `6b3f00ca`, `6c7b7623`, `22dd8408`, `de0189c4`, `0593b7a7`, `5cea9da8`, `884a95a8`.

**Sotto soglia 300KB**: `135378e5` (295KB), `564d0a87` (299KB, sleepy-lamport), `04cb3d27`, `531bf455`, `208828be`, `955fe12f`, e altri triviali.

## Note di processo

- **Gap-scan self-heal**: tutte le sessioni vault non indicizzate ≥300KB coincidevano con quelle in finestra 24h → 0 backlog residuo (effetto del recovery 8/6, costo nullo a regime).
- **mtime falsato**: il checkout delle worktree ri-tocca i JSONL; date dei recap derivate dai `timestamp` interni dei record, non dal mtime.
- **Resume-fork cluster Angelini**: c367f6c2/44a79afe/ef4be2ce/352c160e sono lo stesso lavoro di revisione deck. Indicizzato solo il canonico.
- `python3` non in PATH di default (è in `/Library/Frameworks/Python.framework/Versions/3.14/bin/`); `sed`/`sort`/`head` falliscono dentro alcuni loop eval → usati con path assoluto. Nessun impatto sull'output.
