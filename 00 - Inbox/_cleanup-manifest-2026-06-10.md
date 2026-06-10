---
type: manifest
created: 2026-06-10
updated: 2026-06-10
tags: [system, overnight, cleanup, manifest, append-only]
---

# 🧾 Cleanup Manifest — overnight 2026-06-10 (append-only)

Registro di OGNI azione distruttiva/spostamento della sessione overnight 10/6. Formato: timestamp · azione · da → a · hash (binari). Recupero per-voce: `mv`/`cp` inverso; rollback totale: `git reset --hard pre-overnight-2026-06-10` + restore da `~/vault-backup-pre-overnight-2026-06-10.tgz`.

## Rete di sicurezza (precondizioni verificate)

- Tag: `pre-overnight-2026-06-10` su commit `2332486` — pushato su origin (verificato `ls-remote`)
- Backup: `~/vault-backup-pre-overnight-2026-06-10.tgz` — 11.221 file, 688 MB (worktrees inclusi)
- Trash esterna (binari/gitignored): `~/vault-trash-2026-06-10/`
- Trash interna (contenuti .md): `50 - Archive/_cleanup-trash-2026-06-10/`

## Azioni

<!-- append-only da qui in giù -->

### Task 1 — Worktree removal (2026-06-10 ~13:47)

- `git worktree remove` + `git branch -D` su 3 worktree, ciascuno ri-verificato al momento: **0 modifiche uncommitted, 0 commit unici vs main**:
  - `.claude/worktrees/sleepy-lamport-35d51a` (branch `claude/sleepy-lamport-35d51a` @ aeaaa7e)
  - `.claude/worktrees/wizardly-mirzakhani-71ca72` (branch `claude/wizardly-mirzakhani-71ca72` @ 5857bde)
  - `.claude/worktrees/xenodochial-neumann-9fdc6a` (branch `claude/xenodochial-neumann-9fdc6a` @ b1547a9)
- Verifica strutturale: `git worktree list` = solo main · `.claude/worktrees` 489 MB → 20 KB (solo `.DS_Store`) · gli export chat da 10.305 righe triplicati sono spariti col contenuto dei worktree
- Recupero: contenuti tutti in `main` (nulla di unico perso); il `.tgz` 688 MB li conserva integrali; `git worktree add` ricrea all'occorrenza
- 🔍 **Branch remoti stray (flag-only §9ter, potatura manuale Carlo)** — verificati 0 commit unici vs main; comando pronto:
  `git push origin --delete claude/achipont-outlook-email-vqpfo8 claude/contract-concerns-federico-simone-1305ye`
