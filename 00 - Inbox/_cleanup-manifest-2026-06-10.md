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
