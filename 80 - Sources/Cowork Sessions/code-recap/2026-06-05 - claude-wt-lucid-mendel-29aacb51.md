---
type: session-recap
source: claude-code
session_id: 29aacb51
project_path: ~/claude/.claude/worktrees/lucid-mendel-467614 (vault worktree) + ~/Downloads (editor doc) + ~/code/angelini-academy (sito)
date_last_activity: 2026-06-05
size_mb: 4.7
status: vault-worthy
created: 2026-06-08
tags: [code-session, daily-index-2026-06-05]
---

# Recap Code session — claude-wt-lucid-mendel (29aacb51)

## Cosa è stato fatto
Sessione lunga di rifinitura del **deck pitch Angelini Academy** (HeyAI + FuturItaly, pitch live 5/6/2026), spalmata su 2/6 (grosso del lavoro) e coda 5/6. Workflow di consegna: NON si edita il PPTX — si arricchiscono i due "editor doc" in `~/Downloads` (vecchie/nuove slide) con blocchi `## SLIDE` self-contained per l'editor di slide esterno. Slide rilavorate slide-per-slide su immagine + correzioni di Carlo, con metodo a workflow (verifica fonti → rework copy → audit avversariale contro le 7 regole bloccanti verso cliente). Coda 5/6: chiusura git lato **sito Angelini** — apertura PR draft #1 con la famiglia di fix copy/contenuti pre-pitch (lavoro git distinto dal deck/vault).

## Progetti / aree vault toccate
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — scheda progetto (cwd vault worktree + mapping codebase `~/code/angelini-academy`).

## Decisioni esplicite
- **Roadmap ridisegnata come GANTT** (Carlo 2/6 sera, direzione confermata): mesi in colonna (Lug · Ago pausa estiva · Set · Ott 2026), iniziative core in riga. Milestone: sito live fine Set · ecosistema completo fine Ott.
- **Restyling sito** = tenerlo in proposta ma marcato con colore diverso, **opzionale / non raccomandato**, eseguibile in parallelo al nuovo sito ricostruito da zero.
- **Compressione Atto 2**: meno slide, via il già-detto e le tabelle "spiegabili a voce" (slide Mapping strategia→mockup / Concept & Voce / Architettura sito / Sinottico 3 Voci × 3 ambiti).
- **Bonifica reveal di strategia interna** sulla slide Roadmap: rimosso "leva politica contro l'ufficio acquisti" (viola regola 2, grave); ripuliti i nomi interni/prodotto (PersonaSelect → "percorsi personalizzati"; EOI → "form di manifestazione d'interesse"; "Engaged Network" → Community; agente AI senza nomi tipo Tutor/Reading Room/Research Engine/Career Path Navigator).
- **Target × 3 Voci**: differenziare meglio "opportunità" vs "vantaggio" (erano percepiti ripetitivi), eventualmente sfruttando i driver di mercato; copy reso più semplice e d'impatto.

## Numeri / fatti vault-worthy
- Audit «Utenti target × 3 Voci» vs analisi cluster di Elena (`Analisi cluster utenti sito v.0123.docx`): Elena ha **8 cluster**, la slide ne mostra **7**; la slide **fonde Media + Istituzioni** mentre Elena li tiene separati (4 istituzionale, 6 media). Gap da riconciliare lato slide e sito.
- PR sito: **19 commit** (i 18 `fix(sito):` del 3/6 + 1 commit copy "tono istituzionale"). Nessun numero economico/pricing nuovo deciso in sessione.

## Output prodotti (file editati/creati)
- `~/Downloads/Modifiche per editor - Deck Angelini (vecchie slide).md` — **24 Edit** (blocchi `## SLIDE` per le slide rilavorate: Roadmap, Mapping→mockup, Concept & Voce, Architettura sito, Sinottico 3 Voci, Target × 3 Voci).
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — **5 Edit** già applicati dalla sessione stessa: append-only di voci `## Log` datate 2026-06-02 (rework Atto 2, addendum Roadmap/GANTT, bonifica strategy-leak, audit cluster Elena).
- `/tmp/elena_clusters_v0123.txt` — estrazione testo del docx Elena (via `textutil`) per l'audit.
- Sito Angelini: branch `claude/site-fixes-3-6` pushato su origin + **PR draft #1** → base `angelini-website-dev` (https://github.com/carlosanvoisin97-a11y/angelini-academy/pull/1).

## Task aperti / prossimi passi
- Riconciliare il gap target slide (7) vs cluster Elena (8) e la fusione Media+Istituzioni, mantenendo coerenza con la struttura reale del sito.
- Generare/consegnare a Carlo il prompt unico per l'editor di slide con tutte le modifiche concordate (richiesto in chat).
- PR sito #1 è **draft**: da rivedere prima del merge in `angelini-website-dev`. Le modifiche al deck (editor doc + vault) restano separate, NON in PR.
- Slide ancora in cascata (es. 2° case FuturItaly, slide Eventi) da passare slide-per-slide.

## Schede vault da aggiornare
- **Applicato in automatico (append-only sicuro)**: nessun append eseguito da QUESTO run di indicizzazione (deviazione richiesta: no cascata — race). Nota: la sessione stessa aveva già scritto 5 voci `## Log` (2026-06-02) su [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]], quindi il Log del deck risulta già coperto per il 2/6.
- **Proposta da confermare (NON applicata)**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — PROPOSTA: aggiungere al Log una voce 2026-06-05 per la coda PR sito (PR draft #1, base `angelini-website-dev`, 19 commit pre-pitch) se non già presente, e linkare questo recap (richiede conferma Carlo). Nessun numero economico/stato/priority da modificare.

## Citazioni testuali
- Carlo (restyling): "il sito noi comunque lo dobbiamo proporre, il restyling, però magari lo mettiamo con un colore diverso per far capire che non è raccomandato, ma comunque se lo vogliono fare lo possiamo fare in parallelo con il sito ufficiale nuovo ristrutturato da zero."
- Carlo (copywriting): "a livello di copywriting sono un po' astruse queste frasi e non comunicative. Rendile più semplici da capire e d'impatto, senza ripetizioni."

## Note di flag
Status **vault-worthy**: decisioni di deck (GANTT roadmap, restyling non-raccomandato, bonifica strategy-leak) + audit fattuale target vs cluster Elena, tutti pertinenti al pitch Angelini. Anomalie: (1) il primo record JSONL ha `cwd/gitBranch/version = null`; cwd reale `~/claude/.claude/worktrees/lucid-mendel-467614` recuperato dai record successivi. (2) Sessione multi-thread: deck (Downloads + vault) e sito (`~/code/angelini-academy`, repo separato) — la PR del sito è git, non vault. (3) `date_last_activity` = 5/6 da mtime, ma 99 dei 106 turni utente sono del 2/6; il 5/6 è solo la coda di chiusura PR. (4) Nomi fornitori HeyAI presenti nel JSONL solo come regola "da evitare" (kickoff §3 reg. 7), non in contenuto cliente — scrubbati qui per §13.
