---
type: index
source: claude-code
date: 2026-06-05
session_count: 10
trigger: cron-2035
window: 2026-06-04 20:35 → 2026-06-05 20:35
created: 2026-06-05
---

# Indice code sessions — 2026-06-05

Run cron daily 20:35. Finestra 24h (sul `mtime` JSONL). **10** sessioni rilevanti nel window — tutte sul progetto **Angelini Academy** (gara via FuturItaly), nel run-up e nel post del **pitch finale di oggi 5/6**.

> 🔴 **Fatto N°1 del run**: il **pitch finale Angelini Academy si è svolto oggi 5/6** con esito **soft-defer (deal posticipato a ~2027)** — un fornitore concorrente ha già vinto via gara parallela il pacchetto social+restyling+editoriale+stile. Il report e tutti gli aggiornamenti 5/6 **vivono solo nella worktree `wizardly-rhodes-ed46ae` e NON sono mergiati nel vault main**. Vedi recap [[80 - Sources/Cowork Sessions/code-recap/2026-06-05 - claude-wt-wizardly-rhodes-3d7fad65]] e note finali.

## Sessioni della finestra

| Sessione | Progetto | MB | Status | Tema | Recap |
|---|---|---|---|---|---|
| `3d7fad65` | Angelini Academy | 1.4 | vault-worthy | **Post-pitch**: report call + esito soft-defer 2027 + perf Carlo 7,5 | [[80 - Sources/Cowork Sessions/code-recap/2026-06-05 - claude-wt-wizardly-rhodes-3d7fad65]] |
| `c761cfbe` | Angelini Academy | 8.4 | vault-worthy | Prep pitch: deck, audit pricing, registro validazione, dry-run | [[80 - Sources/Cowork Sessions/code-recap/2026-06-04 - claude-wt-suspicious-newton-c761cfbe]] |
| `56da57e9` | Angelini Academy | 6.4 | vault-worthy | Rifinitura deck v2 + validazione matrice + bozza email Elena | [[80 - Sources/Cowork Sessions/code-recap/2026-06-05 - claude-wt-stoic-lalande-56da57e9]] |
| `3c6f1a75` | Angelini Academy | 6.2 | vault-worthy | Modifiche per editor (vecchie/nuove slide) + validazione matrice | [[80 - Sources/Cowork Sessions/code-recap/2026-06-04 - claude-wt-lucid-mendel-3c6f1a75]] |
| `1b9126a4` | Angelini Academy | 7.7 | vault-worthy | Revisione KPI bombproof (benchmark) + handover + case history NOT | [[80 - Sources/Cowork Sessions/code-recap/2026-06-04 - claude-wt-brave-chandrasekhar-1b9126a4]] |
| `c1631285` | Angelini Academy | 7.6 | vault-worthy | Continuazione KPI/slide (~6 min) | [[80 - Sources/Cowork Sessions/code-recap/2026-06-04 - claude-wt-brave-chandrasekhar-c1631285]] |
| `d446a5d2` | Angelini Academy | 6.1 | vault-worthy | Assemblaggio deck (DEF/LEAN) + feedback Elena 2-3/6 | [[80 - Sources/Cowork Sessions/code-recap/2026-06-03 - claude-wt-sweet-cray-d446a5d2]] |
| `8f1a2406` | Angelini Academy | 3.2 | vault-worthy | Rifinitura slide/contenuti + Claudia Bugno + cluster Elena | [[80 - Sources/Cowork Sessions/code-recap/2026-06-04 - claude-wt-compassionate-feynman-8f1a2406]] |
| `96ab5072` | Angelini Academy (sito) | 0.8 | technical-only | Link condivisibile sito per demo pitch (ispezione) | [[80 - Sources/Cowork Sessions/code-recap/2026-06-04 - aa-wt-cranky-davinci-96ab5072]] |
| `896fd6d7` | Angelini Academy (sito) | 3.1 | technical-only | Sviluppo sito: 88 Edit componenti .tsx su brief copy | [[80 - Sources/Cowork Sessions/code-recap/2026-06-03 - claude-wt-blissful-meninsky-896fd6d7]] |

## Skip (sotto soglia o già indicizzati)

Già indicizzati in run precedenti (presenti in `code-recap/`, esclusi): `b6da38ca`, `4b4b8790` (presentazioni-strategiche), `49c065f9`, `93730e40`, `2694bff1`, `fd53492b`, `0f43d9b5` (worktree angelini-academy). Nessun JSONL >300KB scartato per soglia in questo window.

## Note di processo

- **Anomalia `mtime` diffusa**: 5 sessioni (`56da57e9`, `c1631285`, `8f1a2406`, `d446a5d2`, `896fd6d7`) hanno `mtime` JSONL 4-5/6 ma ultima attività **interna** 3-4/6 — scostamento tipico da operazioni git sulle worktree (checkout/branch) che ri-toccano i file dopo la fine sessione. Le date sessione/filename sono assegnate sull'ultima **attività interna** (più veritiera), non sul `mtime`. Per questo alcuni recap portano date 3-4/6 pur essendo entrati nel window 24h via `mtime`.
- Tutte e 10 le sessioni convergono sullo stesso progetto (Angelini Academy): è il backlog di un'intensa settimana di pitch prep multi-worktree, processato nel run di oggi (post-pitch).
- ⚠️ **Worktree non mergiate**: l'esito del pitch (sessione `3d7fad65`) e diversi aggiornamenti vivono nelle rispettive worktree, non nel vault main. Il vault main `_Angelini Academy.md` è ancora `updated: 2026-06-03` prima di questo run. La cascata automatica ha appendato solo nel main (append-only sicuro); il merge dei contenuti worktree resta a Carlo.
