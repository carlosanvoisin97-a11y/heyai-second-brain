---
type: index
source: claude-code
date: 2026-06-07
session_count: 5
trigger: cron-2035
window: 2026-06-06 20:35 → 2026-06-07 20:35
created: 2026-06-07
---

# Indice code sessions — 2026-06-07

Run cron daily 20:35. Finestra 24h. **5** sessioni rilevanti nel window (incluse sessioni serali appena oltre il bordo finestra, processate perché chiaramente in scope).

## Sessioni della finestra

| Sessione | Progetto | MB | Status | Tema | Recap |
|---|---|---|---|---|---|
| `91b46685` | claude-wt-ecstatic-goldstine | 5.2 | vault-worthy | F2 ingest KB + chiusura F1 + handover sync vault | [[2026-06-07 - claude-wt-ecstatic-goldstine-91b46685]] |
| `22dd8408` | claude-wt-gallant-mestorf | 4.5 | vault-worthy | F2 ingest + reconcile Contesto Strategico + audit scheduler | [[2026-06-07 - claude-wt-gallant-mestorf-22dd8408]] |
| `1ab3daf8` | claude-wt-quizzical-faraday | 3.3 | vault-worthy | Prep F2: piano ingest KB + handover sessione fresca | [[2026-06-07 - claude-wt-quizzical-faraday-1ab3daf8]] |
| `884a95a8` | claude-wt-blissful-heyrovsky | 3.2 | vault-worthy | F1/F2 sync + harvest worktree + fix Eye Cookies/GitHub | [[2026-06-07 - claude-wt-blissful-heyrovsky-884a95a8]] |
| `de0189c4` | claude-wt-romantic-feistel | 0.8 | technical-only | /insights + indagine multi-agente + review skill files | [[2026-06-07 - claude-wt-romantic-feistel-de0189c4]] |

## Skip (sotto soglia o già indicizzati)

- `98853adb` (13.9MB) — già indicizzato come `2026-05-30 - claude-wt-nifty-almeida-98853adb` (mtime ri-toccato Jun 7 02:53, skip per dedup).
- `cc3ff06a` (6.3MB) — già indicizzato come `2026-05-30 - claude-wt-funny-shannon-cc3ff06a` (mtime ri-toccato Jun 6 23:18, skip per dedup).
- `135378e5` (0.12MB) — sotto soglia 300KB (vault root).
- `04cb3d27` (0.17MB) — sotto soglia 300KB (vault root).
- `2a94ec2d` (0.26MB) — sotto soglia 300KB (vault root).

## Note di processo

- Tutte le 5 sessioni rilevanti sono parte della stessa mega-operazione di ottimizzazione del second brain (F1/F2), su worktree del vault `~/claude` → mappate a meta-vault/system. Il lavoro è stato auto-committato in-sessione sulle schede toccate; **nessuna cascata automatica** applicata (il mapping `~/claude` worktree non punta a una scheda progetto con `## Log`, e aggiungere backlink sarebbe rumore su schede già aggiornate dalla sessione stessa).
- `22dd8408` e `91b46685` condividono cwd/first-ts (worktree ecstatic-goldstine) → branch paralleli della stessa fase F2; mantenuti come recap distinti (JSONL distinti).
- `884a95a8` ha dir worktree (blissful-heyrovsky) ≠ cwd interno (quizzical-faraday): sessione ripresa; naming sul dir reale del JSONL.
- JSONL >30MB: nessuno (max 13.9MB, comunque skippato). Nessun errore di parsing.
- Timestamp interni in UTC vs mtime local: alcune sessioni iniziate sera Jun 6 (UTC) e chiuse Jun 7 → date_last_activity da mtime.
