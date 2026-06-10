---
type: prompt-template
categoria: Qualità & Metodo
created: 2026-06-10
updated: 2026-06-10
provato: 2026-06-10 (overnight F3/F6/F7 + bonifica broken link — end-to-end, 30 commit, zero rollback)
---

# 17 — Sessione Overnight con Gate (analisi → OK → esecuzione autonoma)

Per delegare a una sessione Claude Code un blocco di lavoro autonomo sul vault (housekeeping, refactoring, bonifiche, build di sistema) con rete di sicurezza completa. Pattern provato il 10/6/2026.

## Quando usarlo

Lavoro multi-fronte che non richiede la tua presenza, con azioni potenzialmente distruttive (rimozioni, rename massivi, refactoring) o automazioni da provare end-to-end.

## Struttura del prompt (compila le parti in maiuscolo)

```
Sei la sessione overnight per [SCOPO]. Lavori in Claude Code su ~/claude, su main. Italiano, tono PM.

LEGGI PRIMA, IN QUEST'ORDINE: (1) CLAUDE.md; (2) [FILE PIANO/HANDOVER]; (3) [FILE DI DETTAGLIO].

REGOLE DURE:
- SINGLE-WRITER: sei l'unica sessione attiva (chiudi le altre prima). git pull prima di scrivere; commit PER-FILE (mai git add -A); push su main.
- §15 append-only · §13 riservatezze · numeri/prezzi/stati contrattuali = PROPOSTA, mai auto-applicati.
- §15.quinquies: ogni "fatto" dichiara path+criterio verificati. Un'automazione è "fatta" solo se l'output ATTERRA in Obsidian, provata end-to-end.

FLUSSO (gate obbligatorio):
- FASE 1 — ANALISI, SOLA LETTURA. Conferma lo stato reale senza fidarti della memoria né delle note (RemoteTrigger:list per le routine cloud, list_scheduled_tasks per i task locali; ri-verifica le claim dei documenti). Per ogni fronte: spec → piano (skill writing-plans). Presenta UN piano con ordine, stime, confini SAFE/RICHIEDE-OK e, per ogni passaggio critico, la strategia di recupero.
- GATE: attendi il mio OK esplicito. Non eseguire nulla prima.
- FASE 2 — ESECUZIONE, solo dopo OK. PRIMA le precondizioni (STOP se una manca):
  1. git tag pre-[NOME]-[DATA] + push del tag
  2. backup .tgz dell'intero vault FUORI dal vault
  3. manifest append-only in 00 - Inbox/_cleanup-manifest-[DATA].md (timestamp · azione · da→a · md5 per i binari)
  Poi l'ordine del piano. Trash-not-delete (contenuti .md → 50 - Archive/_cleanup-trash-[DATA]/; binari e gitignored → ~/vault-trash-[DATA]/ FUORI dal vault, mai rm); worktree → git worktree remove; commit per-file + push dopo ogni unità; verifica strutturale dopo ogni fronte; report finale in 00 - Inbox con path+criterio per ogni claim + lista RICHIEDE-OK flaggati.

ITEM RICHIEDE-OK (non eseguire di notte, solo flag): [LISTA — es. smistamenti di merito, schede persona, numeri, invii a terzi, rimozioni config].
In dubbio: flagga "🔍 Da triagiare" e prosegui sul safe.
```

## Lezioni incorporate (pagate sul campo)

- **Il plugin Obsidian Git è un terzo writer**: se Obsidian resta aperto, pusha i commit locali per conto suo ogni ~10' — "single-writer" non è mai assoluto. Pull-before-write a ogni commit e attenzione ai run cloud in volo (il loro push fa merge).
- **File gitignored**: spostarli DENTRO il vault li farebbe tracciare — la trash per binari/gitignored sta FUORI (`~/vault-trash-*`).
- **Rollback per-passaggio** (tabella nel piano) + rollback totale: `git reset --hard <tag>` + restore dal tgz.
- **Modifiche fuori repo** (`~/.claude/skills/`, scheduled-tasks): git non le copre — backup file-level nel manifest PRIMA di toccarle.
- I run cloud lanciati per la prova end-to-end clonano lo snapshot al momento del run: i numeri che riportano possono riferirsi a uno stato precedente ai tuoi fix (ri-runnare dopo il push per il numero vero).

## Riferimenti

- Esecuzione di riferimento: [[2026-06-10 - PIANO overnight — Fase 1 (gate Carlo)]] → [[2026-06-10 - REPORT overnight (esecuzione)]]
- Skill correlate: `writing-plans` (Fase 1) · `executing-plans` (Fase 2) · `vault-live-protocol` (commit) · `verification-before-completion` (claim)
