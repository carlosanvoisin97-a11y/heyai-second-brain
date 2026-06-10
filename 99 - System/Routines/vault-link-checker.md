---
name: vault-link-checker
description: Audit settimanale wikilink e path rotti — thin-wrapper di vault-health §LINKS (refactor F3, 10/6/2026)
---

# vault-link-checker → thin-wrapper di `vault-health` §LINKS

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Questa routine è un **thin-wrapper** (refactor F3, 10/6/2026): la logica completa vive in **`.claude/skills/vault-health/SKILL.md`** (versionata nel repo, quindi presente anche nel clone cloud).

## Esecuzione

1. **Read** `.claude/skills/vault-health/SKILL.md`.
2. Esegui **SOLO la sezione §LINKS** (audit wikilink/frontmatter/path rotti — flag-only, alias-aware v4, rolling-window, EXCLUDE_PATHS, alert K>20 / +50% / broken in schede attive <24h).
3. Rispetta le **Regole trasversali** della skill: append-only §15, mai auto-fix, mai creare schede, mai toccare Master Facts.
4. Output: append a `99 - System/Vault Link Audit.md` (rolling-window PRIMA dell'append).

## Contesto run

- Cron canonico: domenica 13:40 UTC (~15:40 CEST) via trigger cloud `vault-link-checker`; trigger manuale sempre ammesso (`RemoteTrigger action:run`).
- Italiano, tono PM asciutto; output minimo se K=0, J=0, P=0.

## ⚙️ Push finale (routine cloud, F1)
Al termine, committa e pusha le modifiche **direttamente sul branch `main`** del repo (`git push origin HEAD:main`). **NON** creare un branch separato né aprire una PR — il vault deve aggiornarsi su `main`.
