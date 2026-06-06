---
type: index
source: claude-code
date: 2026-05-31
session_count: 1
trigger: cron-2035
window: 2026-05-30 20:35 → 2026-05-31 20:35
created: 2026-05-31
---

# Indice code sessions — 2026-05-31

Run cron daily 20:35. Finestra 24h. **1** sessione rilevante nel window.

## Sessioni della finestra

| Sessione | Progetto | MB | Status | Tema | Recap |
|---|---|---|---|---|---|
| `fcb238ed` | claude-main (vault root, branch main) | 6.7 | vault-worthy | Deck UNIFICATO pitch Angelini 31/5 (36 slide, taglia-e-cuci 47 PPTX → 9 unici, validazione decisioni in forse, Registro Validazione + Riferimento Decisioni) | [[2026-05-31 - claude-main-fcb238ed]] |

## Skip (sotto soglia o già indicizzati)

- `f3963c94` (giulia-IED, 16.7 MB, mtime 31/5 21:16) — già indicizzato 2026-05-30 → [[2026-05-30 - giulia-IED-f3963c94]]. Sessione continuata oggi ma il recap di ieri copre lo stato salvato. _Nota: sessione `giulia-IED` esplicitamente esclusa dal perimetro vault da Carlo 30/5 22:35: "tutto tranne il progetto YED"._
- `98853adb` (claude vault worktree competent-driscoll-8007d7, 13.3 MB) — già indicizzato 2026-05-30 → [[2026-05-30 - claude-wt-nifty-almeida-98853adb]] (resume di sessione precedente, mtime 31/5 21:07).
- `c36e15c4` (claude main, 108 KB, 19 msg, mtime 31/5 20:43) — **sotto soglia 300KB**. Probabile sessione del task scheduled `code-sessions-index` stesso o sessione di pochi minuti — skip per filtro standard.

## Note di processo

- **Window strict vs effective**: nessun JSONL ha mtime strettamente nella finestra 20:35-ieri → 20:35-oggi (le 4 sessioni candidate sono tutte continuate o nate dopo 20:35 oggi). Ho applicato interpretazione pragmatica "sessioni con attività significativa nelle ultime 24h" — tipica per il cron-2035 quando viene eseguito poco dopo lo scadere della finestra mentre alcune sessioni Code sono ancora aperte.
- **Sessione fcb238ed ancora attiva al momento del run** (ultimo prompt 19:59 UTC = 21:59 local, dopo il trigger del cron). Recap riflette stato fino agli ultimi prompt visibili.
- **Riservatezza §13**: nessun fornitore HeyAI nominato.
- **Cascata via di mezzo applicata**: append-only sicuro su 1 scheda ([[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]]), 3 proposte numeri/stato lasciate da confermare (pricing €48.500 in Master Facts + Quotazione scheda + Open Question gap audit).
