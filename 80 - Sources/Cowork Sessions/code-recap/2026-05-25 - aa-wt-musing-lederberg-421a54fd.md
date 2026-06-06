---
type: session-recap
source: claude-code
session_id: 421a54fd
project_path: ~/code/angelini-academy (worktree: musing-lederberg-496438)
date_last_activity: 2026-05-25
size_mb: 0.4
status: technical-only
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy wt musing-lederberg (421a54fd)

> Nota date: il file JSONL ha mtime 2026-05-25 ma i timestamp interni della sessione sono 2026-05-18 (00:32 → 01:15 UTC, ~43 minuti effettivi). Probabile sessione del 18/5 toccata in lettura il 25/5. Filename rispetta il parametro `date_last_activity` richiesto.

## Cosa è stato fatto

Sessione tecnica di recovery / consultazione visiva di una versione precedente del sito mockup Angelini Academy, senza alcuna modifica al codice di produzione né al branch `mockup-v2` (quello che il cliente Angelini apre in review).

Trigger: Carlo chiede prima il link della **"v3 mockup"** (round review concept grafico interno), poi cambia richiesta in **"copia del sito di ieri, prima delle modifiche del 17 e 18 maggio"**, con vincolo esplicito di "zero rischio, non toccare il sito attuale".

Sequenza operativa:

1. Identificato il commit `1675359 fix(mockup-v2): v3 polish` come "v3 polish" del 17/5 sera (ricerca su transcript di sessioni precedenti via `awk` su altri JSONL).
2. Risposto a Carlo che l'URL "vivo" del branch (`https://angelini-academy-git-mockup-v2-carlo-sanvoisin-s-projects.vercel.app`) punta sempre all'ultimo commit di `mockup-v2`, e quindi NON corrisponde più a v3 nudo perché dopo v3 polish ci sono stati altri round: `4155e6a` (11 punti), `76dbe2a` (5 micro-fix Chi Siamo/HR/tier growth), `808fad1` (foto HR + EventiPage), `0705f9a` (Events · CALENDARIO 2026), fino a `8f237fd` (Hero subtitle/CTA).
3. Su richiesta di Carlo (versione del 16/5, pre-modifiche 17-18/5): identificato commit `553d421` del **16/5 22:47** come ultimo prima del 17/5.
4. Eseguito `git stash` del lock file scheduled tasks + `git checkout 553d421` **dentro la worktree isolata** `musing-lederberg-496438` (detached HEAD, NON tocca `main`, `mockup-v2`, GitHub, Vercel).
5. Avviato `npm run dev` (Vite) → server attivo su `http://localhost:5173/` HTTP 200.
6. Screenshot via `mcp__Claude_Preview__preview_screenshot` per conferma visiva dello stato 16/5: PersonaSelect mostra ancora "BENVENUTO · ANGELINI ACADEMY" (col puntino), prima del refactor "BENVENUTO IN ANGELINI ACADEMY" del 18/5.
7. Consegnato a Carlo link `http://localhost:5173/` con disclaimer di rollback ("dimmi quando hai finito, spengo Vite e riporto la worktree con `git switch -`").

Sessione chiusa senza commit, push, deploy o modifiche file. Solo consultazione visiva di uno stato git storico.

## Progetti / aree vault toccate

- **Angelini Academy** (gara via FuturItaly) → [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]]
- Lato tecnico: nessun file vault modificato; sessione interamente nel repo `~/code/angelini-academy`.

## Decisioni

- Conferma operativa: il workflow "ispezione versione storica" passa per `git checkout` in worktree isolata + Vite locale, **mai** redeploy Vercel del commit (che richiederebbe Vercel CLI non installato sul Mac di Carlo).
- Confermato che `mockup-v2` è il branch deploy review cliente e che dopo "v3 polish" (17/5 21:52) il branch ha continuato a evolvere fino al 18/5 — quindi l'URL pubblico Vercel del cliente mostra l'**ultima** revisione, non v3 nuda.

## Numeri / cifre

- Nessun numero economico o commerciale nuovo. Riferimenti solo a hash git e date di commit (`553d421` del 16/5 22:47; `1675359` del 17/5 21:52).

## Output (file)

Nessun file creato o modificato. Solo:
- `git stash push -m "temp lock file before v0 checkout" .claude/scheduled_tasks.lock`
- `git checkout 553d421` (detached HEAD in worktree)
- Vite dev server avviato (`/tmp/vite-v0.log`)

## Task

Nessun task vault aperto. Implicito (non scritto nelle schede): chiudere il dev server e ripristinare la worktree (`git switch -` + `git stash pop`) — operazione di hygiene di sessione, non vault-worthy.

## Schede vault da aggiornare (§15)

Nessuna. Sessione tecnica di consultazione storica senza decisioni di scope, prezzo, partnership o stakeholder. Non emerge fact persistente vault-worthy: né numeri, né decisioni di prodotto sul mockup Angelini, né cambio di stato.

Status: **technical-only**.

## Citazioni

Carlo (00:43): "non voglio andare assolutamente a modificare l'attuale sito e non voglio assolutamente commettere errori e non toccare il sito attuale. se possibile vedere una copia della versione di ieri del sito o comunque prima delle modifiche del 17 e 18 maggio".

→ Pattern operativo Carlo: forte avversione al rischio sul deploy cliente Angelini in fase gara (pitch finale 31/5). Già registrato come pattern in altre sessioni; non aggiungo duplicato in scheda persona.

## Note di flag

- **Discrepanza date**: JSONL mtime 25/5 ma timestamp interni 18/5. Il parametro `date_last_activity: 2026-05-25` del prompt è stato rispettato come da richiesta, ma il contenuto vero della sessione è del 18/5. Se serve coerenza temporale assoluta nel recap, segnalare a Carlo.
- **Tool usage**: 32 Bash, 1 Vite (npm run dev), 1 mcp Preview start, 1 mcp Preview screenshot, 2 ToolSearch, 1 ScheduleWakeup. Nessun Edit/Write/MultiEdit/Read/TodoWrite. Coerente con "sessione di sola consultazione".
- **Worktree isolata**: la convenzione di lavorare in `.claude/worktrees/<name>` per ispezioni storiche è validata da questa sessione. Pattern riusabile per altre fasi gara dove Carlo vuole vedere stati git precedenti senza toccare i branch live.
- **Branch `mockup-v2`**: confermato come il branch che alimenta il deploy review cliente (`angelini-academy-git-mockup-v2-carlo-sanvoisin-s-projects.vercel.app`). Da tenere a mente per future sessioni su Angelini: ogni modifica push-ata su `mockup-v2` è automaticamente visibile al cliente — alta sensibilità in fase di gara.
