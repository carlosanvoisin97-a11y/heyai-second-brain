---
name: system-consistency-check
description: Audit consistenza doc↔scheduler↔routine sui 3 runtime — thin-wrapper di vault-health §CONSISTENCY (refactor F3, 10/6/2026). Gira SOLO da Code-locale.
---

# system-consistency-check → thin-wrapper di `vault-health` §CONSISTENCY

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Questa routine è un **thin-wrapper** (refactor F3, 10/6/2026): la logica completa vive in **`.claude/skills/vault-health/SKILL.md`**.

> ⚠️ **Vincolo runtime**: questo sub-check gira **SOLO da Claude Code locale** — servono `mcp__scheduled-tasks__list_scheduled_tasks` (runtime B) e `RemoteTrigger action:list` (runtime A), entrambi assenti nelle routine cloud headless. Il task schedulato locale è `system-consistency-check` (lunedì 7:30, prima del pm-digest 8:02).

## Esecuzione

1. **Read** `.claude/skills/vault-health/SKILL.md`.
2. Esegui **SOLO la sezione §CONSISTENCY** (ESTESA 10/6: cross-check tre vie CLAUDE.md §9 ↔ scheduler locale ↔ trigger cloud via `RemoteTrigger action:list`; coerenza interna §9 tabella vs §9bis prosa; routine `99 - System/Routines/*.md` orfane di trigger; path morti `~/Documents/Claude/Scheduled/`; content-check dei SKILL/wrapper).
3. Rispetta le **Regole trasversali** della skill: flag-only — mai modificare task/trigger/doc, solo segnalazione con azione correttiva suggerita.
4. Output: append a `99 - System/System Consistency Audit.md`.

## Contesto run

- Cron canonico: lunedì 7:30 locale (task `system-consistency-check` in `~/.claude/scheduled-tasks/`), best-effort ad app Code aperta. Trigger manuale sempre ammesso (utile dopo cambi grossi a scheduler/routine).
- Se rileva drift 🔴: aprire la risposta con l'alert PRIMA che il pm-digest 8:02 parta.
- Italiano, tono PM asciutto; output minimo se 0 drift.

## ⚙️ Push finale
Al termine: (1) committa; (2) **`git pull --rebase origin main`**; (3) pusha **direttamente sul branch `main`** (`git push origin HEAD:main`); (4) verifica `git status --porcelain` pulito (se restano modifiche: committa e ripeti 2-3). **NON** creare branch separati né PR. _(sequenza pull→push→clean, patch 10/6)_
