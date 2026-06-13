---
type: index
source: claude-code
date: 2026-06-13
session_count: 1
trigger: cron-2035
window: 2026-06-12 20:35 → 2026-06-13 20:35
created: 2026-06-13
---

# Indice code sessions — 2026-06-13

Run cron daily 20:35. Finestra 24h + gap-scan self-heal. **1** sessione rilevante (catch-up dal gap-scan, attività 12/6).

## Sessioni della finestra

Nessuna sessione nuova ≥300KB con attività nel window 24h (dbd591c6 già indicizzata l'11/6; 2efd47c1 e 553b8271 sotto soglia 300KB — quest'ultima è la sessione di questo task stesso).

## Sessioni catch-up (gap-scan)

| Sessione | Progetto | MB | Status | Tema | Recap |
|---|---|---|---|---|---|
| `7150866b` | claude-main (vault) | 1.2 | vault-worthy | bozza email recap executive Donzelli (Wave 1 chiusura + nudge Wave 2 + stato NOT) | [[2026-06-12 - claude-main-7150866b]] |

## Skip (sotto soglia o già indicizzati)

- `dbd591c6` (2.7MB) — già indicizzato 11/6.
- `2efd47c1` (170KB), `553b8271` (140KB) — sotto soglia 300KB. `553b8271` = sessione di questo scheduled task.
- Gap-scan: tutte le altre sessioni vault-related ≥300KB già rappresentate (recap o Code Sessions Log). Backlog residuo: 0.

## Igiene worktree/branch

- **Worktree potabili**: 0 (solo `main`, working tree pulito).
- **Branch stray `origin/claude/*` con commit unici**: 1 → `claude/lollo-birthday-game-y08dyf` (2 commit). **Non è lavoro vault PM**: è un artefatto personale (`lollo-birthday-game/index.html`, gioco roulette compleanno), sviluppato via claude.ai sul repo del vault. Nessun contenuto knowledge-base perso. Decisione a Carlo: harvest (`git merge origin/claude/lollo-birthday-game-y08dyf`) solo se vuole tenere il file nel repo, altrimenti il branch può restare/essere cancellato remoto senza perdita per il vault.

## Note di processo

- `7150866b`: head record con `cwd`/`timestamp` null → letti dai record interni successivi (cwd = vault, branch main). Mtime falsato dal checkout worktree → data attività dai timestamp interni (12/6 16:25→18:29 UTC).
- Catch-up funzionante: sessione del 12/6 non catturata nel run di quel giorno, recuperata oggi (self-heal).
