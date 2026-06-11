---
type: index
source: claude-code
date: 2026-06-11
session_count: 2
trigger: cron-2035
window: 2026-06-10 20:35 → 2026-06-11 20:35
created: 2026-06-11
---

# Indice code sessions — 2026-06-11

Run cron daily 20:35. Finestra 24h. **2** sessioni rilevanti nel window (entrambe nuove). Gap-scan self-heal: 0 backlog residuo (a regime post-recovery 8/6).

## Sessioni della finestra

| Sessione | Progetto | MB | Status | Tema | Recap |
|---|---|---|---|---|---|
| `576976ec` | ~/claude (main) | 9.6 | vault-worthy | Sessione PM 11/6 parallela (no-commit): prep call Eye Cookies (BAT/Totem) + processing 3 doc allineamento + modulistica HR personale | [[80 - Sources/Cowork Sessions/code-recap/2026-06-11 - claude-main-576976ec\|claude-main (576976ec)]] |
| `dbd591c6` | ~/claude (main) | 1.7 | vault-worthy | Call bisettimanale Eye Cookies #2 (11/6): recap PM + performance + 3 bozze email (Germano/Carmen/team) | [[80 - Sources/Cowork Sessions/code-recap/2026-06-11 - claude-main-dbd591c6\|claude-main (dbd591c6)]] |

## Skip (sotto soglia o già indicizzati)

- **Già indicizzati** (ri-toccati dal checkout worktree, mtime falsato): `5acfac52` (recap 8/6), `c754079e` (recap 8/6), `1a9f57fb` (recap 10/6).
- **Run di questo stesso task** (`code-sessions-index`): `8988dbde` (run 10/6 — scrive l'indice 10/6; era già listato come sub-soglia nell'indice 10/6, ora 302KB per inflazione byte ma 85 righe triviali).
- **Sotto soglia 300KB**: `d383c722` (149KB), `825f6a2d` (125KB), `9606c3a6` (134KB — sessione di questo run odierno).

## Note di processo

- Le due sessioni rilevanti hanno girato **in parallelo** l'11/6 sullo stesso vault: `dbd591c6` ha committato su `main` (commit 5e917be→1484b31, recap Germano/Carmen), `576976ec` è stata istruita a **NON committare** e coordinata via il file HANDOVER condiviso — i suoi edit vault sono working-state.
- Cascata append-only applicata: backlink di entrambe in [[20 - Projects/NOT/Eye Cookies]] e [[20 - Projects/NOT/Operation Transformation]] (`## Sessioni Cowork correlate`). Contenuto di merito già scritto/committato in-sessione → niente duplicati.
- `mtime` dei JSONL falsato dal checkout worktree su quasi tutti i file → date assegnate dai timestamp interni + contenuto.
- Igiene: branch remoto stray `claude/lollo-birthday-game-y08dyf` (progetto personale, non vault) → flaggato in daily note, harvest sconsigliato.
