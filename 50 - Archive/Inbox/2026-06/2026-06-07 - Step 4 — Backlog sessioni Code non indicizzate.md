---
type: system
tags: [system, F1, step4, code-capture, diagnosi]
created: 2026-06-07
updated: 2026-06-07
status: diagnosi — recovery + hardening da decidere
---

# Step 4 — Backlog sessioni Code non indicizzate (diagnosi + recovery list)

> Prodotto in sessione 7/6 (notturna), Step 4 del [[2026-06-07 - HANDOVER — chiusura F1 (sync vault + QA + cattura Code)|handover F1]] — gap #5 "rischio knowledge persa". Diagnosi **read-only**: incrocio dei 57 JSONL vault-related (`~/.claude/projects/-Users-carlosanvoisin-claude*`) con i recap (`80 - Sources/Cowork Sessions/code-recap/`) + [[Code Sessions Log]].

## ✅ ESEGUITO 8/6/2026 — recovery completo + hardening (Carlo: "recupero completo")

- **Recovery**: 16 recap creati (16 subagent paralleli) in `code-recap/`. Esito chiave: **nessuna knowledge persa** — il contenuto era già nelle schede (cascata live in-sessione); mancavano solo i recap-indice. Classificazione: 11 vault-worthy · 2 technical-only (`83b3c5f7` skill /recap, `49df8298` run indexer) · 3 low-content/dedup (`7d763885`+`31b35b1d` copie di sessioni già indicizzate · `3dfa5063` personale §11 → stub). 9 piccole <300KB = skip-sotto-soglia. Run nel [[Code Sessions Log]] (8/6 00:54). Ri-conferma la cert. KB Solidity F2.
- **Cascata = 0** (già in vault). **PROPOSTA per Carlo** (non applicate): drift pricing Angelini €47.5K floor/€52.7K cliente vs €49.5K core (→ Open Q #38); segnale rinegoziazione Eye Cookies al rialzo (Federico).
- **Hardening — catch-up mode APPLICATO** al SKILL `code-sessions-index` (`~/.claude/scheduled-tasks/`, locale): ogni run fa un gap-scan di tutte le sessioni vault non rappresentate (recap o log) e le processa → **self-heal**, le sessioni fuori-finestra rientrano da sole (bound ~15/run).
- **Hook on-session-end — NON implementato (rationale onesto)**: uno Stop hook è una shell, non può fare l'indicizzazione (richiede un LLM); accodare sarebbe **ridondante** col gap-scan (che trova comunque ogni JSONL non indicizzato). Il catch-up mode risolve l'identico obiettivo di reliability ("non dipendere dal cron best-effort 20:35") in modo più semplice e robusto. Se in futuro serve l'immediatezza a fine sessione, l'unica via sarebbe un hook che lancia `claude -p` headless (costoso, scartato ora).

---

## 🔴 Finding
**16 sessioni GROSSE (>300KB) del vault mai indicizzate** — né recap né traccia nel log — datate **2-6/6** (esclusa la sessione live `8af55255`). + 9 piccole (<300KB, probabile skip-soglia, priorità bassa).

Spot-check (primo messaggio utente) conferma contenuto **reale e misto**:
- `5cea9da8` (1.6MB) = prep call **kickoff Operation Transformation** (recap per Federico/Simone) → project-work vault-worthy.
- `79144c1c` (2.6MB) = meta "come sfrutto Claude Code al massimo" → possibili insight di sistema.

→ Il backlog **vale un recupero** (non è tutto rumore tecnico).

## Root cause
`code-sessions-index` ha **finestra 24h + best-effort** (cron 20:35 solo ad app Code aperta): ciò che non cattura nel suo giorno **esce dalla finestra e non torna più** (precedente identico: recovery manuale 28/5). Una settimana intensa con molte worktree parallele ha saturato la cattura.

## Recovery worklist (16 grosse, per dimensione)

| session_id | MB | data | worktree |
|---|---|---|---|
| `29aacb51` | 4.6 | 06-05 | lucid-mendel |
| `376eb89c` | 3.8 | 06-02 | tender-golick |
| `7d763885` | 3.0 | 06-03 | brave-chandrasekhar |
| `79144c1c` | 2.6 | 06-06 | competent-driscoll (meta Claude Code) |
| `5e76d15a` | 2.3 | 06-03 | brave-chandrasekhar |
| `69086d91` | 1.7 | 06-03 | suspicious-newton |
| `5cea9da8` | 1.6 | 06-04 | nice-cray (OT kickoff prep) |
| `499af1f9` | 1.5 | 06-06 | sweet-dijkstra |
| `aee36402` | 1.5 | 06-06 | quizzical-faraday |
| `3dfa5063` | 1.3 | 06-06 | nervous-tereshkova |
| `ed7ee03c` | 1.1 | 06-06 | zen-jackson |
| `d684c232` | 1.0 | 06-03 | compassionate-feynman |
| `842fd363` | 0.9 | 06-03 | priceless-grothendieck |
| `31b35b1d` | 0.8 | 06-02 | blissful-meninsky |
| `83b3c5f7` | 0.6 | 06-06 | nostalgic-haibt |
| `49df8298` | 0.5 | 06-05 | MAIN |

(9 piccole <300KB: `564d0a87 7f9add29 7ab7f4ad 0222fd6b 5cdd6003 2735dffd ac944d7d d87d6c55 77b86598` — bassa priorità.)

⚠️ I JSONL **restano** in `~/.claude/projects/` anche dopo rimozione delle worktree → la materia prima del recupero è al sicuro sul Mac (ma **solo locale**, non nel repo).

## Fix proposto (hardening — perché non si ripeta)
1. **Catch-up mode in `code-sessions-index`**: ad ogni run, oltre alla finestra 24h, fare un gap-scan (come questo) di TUTTI i JSONL vault senza recap/log e processarli → **self-heal**. *Bonus: il primo run dopo la patch recupererebbe da solo il backlog.*
2. **Hook on-session-end** (Stop hook, skill `update-config`): a fine sessione accoda l'id per indicizzazione → cattura immediata, non dipende dall'app aperta alle 20:35.

## Decisioni aperte (Carlo)
- **Profondità recovery**: tutte 16 (subagent paralleli) / solo project-work / fidarsi della cert. F2 completezza schede.
- **Hardening**: catch-up mode + hook ora, o dopo.
