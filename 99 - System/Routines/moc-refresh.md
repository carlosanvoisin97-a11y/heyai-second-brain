---
name: moc-refresh
description: Audit settimanale MOC - Home — thin-wrapper di vault-health §MOC (refactor F3, 10/6/2026)
---

# moc-refresh → thin-wrapper di `vault-health` §MOC

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Questa routine è un **thin-wrapper** (refactor F3, 10/6/2026): la logica completa vive in **`.claude/skills/vault-health/SKILL.md`** (versionata nel repo, quindi presente anche nel clone cloud).

## Esecuzione

1. **Read** `.claude/skills/vault-health/SKILL.md`.
2. Esegui **SOLO la sezione §MOC** (audit drift MOC - Home: auto-patch-safe su `updated:`/conteggi/versione Master Facts, flag-only su nuove entità e wikilink broken, alert in Daily Note se flag>5 o broken>0).
3. Rispetta le **Regole trasversali** della skill: append-only §15, mai aggiungere/togliere righe ai cluster MOC, mai toccare Master Facts, mai creare schede.
4. Output: append a `99 - System/MOC Refresh Log.md` (rolling: entry >8 settimane → archive mensile).

## Contesto run

- Cron canonico: sabato 14:00 UTC (~16:00 CEST) via trigger cloud `moc-refresh` — 1.5h prima di `weekly-review-interactive`, così Carlo apre la review con MOC fresco. Trigger manuale sempre ammesso (es. dopo creazione manuale di schede).
- Italiano, tono PM asciutto; output minimo se 0 patch e 0 flag.

## ⚙️ Push finale (routine cloud, F1)
Al termine: (1) committa le modifiche; (2) esegui **`git pull --rebase origin main`** (un altro writer può aver pushato durante la run: senza pull il push viene rifiutato e il lavoro muore nel clone); (3) pusha **direttamente sul branch `main`** (`git push origin HEAD:main`); (4) verifica con `git status --porcelain` che il working tree sia PULITO — se restano modifiche, committale e ripeti (2)-(3): nulla deve restare non pushato, altrimenti finisce sull'outcome-branch `claude/*` del trigger (causa del leak link-checker 10/6). **NON** creare un branch separato né aprire una PR — il vault deve aggiornarsi su `main`. _(sequenza pull→push→clean, patch 10/6)_
