---
type: proposal
status: da-approvare
created: 2026-06-10
updated: 2026-06-10
tags: [system, skills, overnight, proposta, F3]
aliases: [Proposta skill-strategy, Skill profiling overnight]
---

# 🧬 PROPOSTA skill-strategy — profilazione dal lavoro reale (overnight 10/6)

> **Solo proposta** (decisione INNESTO §0): nessuna riscrittura eseguita. Base dati: **~167 sessioni Cowork maggio** (19 indici) + **~39 sessioni Code giugno** (41 recap + 4 indici, 1–9/6) + **79 email inviate** da maggio (Outlook Sent Items, 25 campionate). Le sessioni Angelini (34 maggio + 14 giugno) sono trattate come anomalia-gara, non trend.

## 1. Com'è fatto davvero il lavoro di Carlo (dati, non impressioni)

| Asse | Evidenza |
|---|---|
| **Comunicazione** | ~27 sessioni email mag+giu (15%) + 79 email reali. Pattern email dominante: recap bisettimanale punti aperti ("come da accordi, di seguito un recap…"), invio deliverable con elenco modifiche per la review, blocco slot, rassicurazione su bug, intermediazione cliente↔team tecnico (mai nominando i fornitori — §13 rispettata negli esempi campionati) |
| **Deliverable** | 19 sessioni proposte/quotazioni maggio + 14 deck giugno. Metodo ricorrente: v1 → audit multi-round (fino a 6) → finale. Il deck-work usa un "documento modifiche" decoupled dal PPTX che Carlo applica a mano |
| **Call** | 23 sessioni recap/trascrizioni. `transcript-processing` invocata esplicitamente solo in ~40% dei casi in cui serviva |
| **Decisioni** | 8 sessioni matrice fornitori (margine × probabilità × rischio) senza skill di supporto dedicata |
| **Sistema** | 23% delle sessioni giugno = manutenzione sistema (spike post-migrazione Cowork→Code, in discesa attesa con F1–F6 chiusi) |

## 2. Censimento riconciliato (il "20" dell'innesto)

**16 skill personali attive**: 10 di progetto (`.claude/skills/`: defuddle, email-drafting, investment-proposal-drafting, json-canvas, obsidian-bases, obsidian-cli, obsidian-markdown, transcript-processing, vault-live-protocol + **vault-health** nuova di stanotte) + 6 globali (`~/.claude/skills/`: audio-transcriber-deepgram, downloads-cleaner-vault-import, management-consulting, pm-method, recap, web-design-3d). Il conteggio "20" dell'innesto includeva verosimilmente `website-builder-setup` (archiviata stanotte) + i 3 SKILL dei scheduled-task locali (code-sessions-index, pm-digest bridge, system-consistency-check): 16+1+3 = 20. ✔️ riconciliato.

## 3. Proposta: tenere / variare / dismettere

**TENERE così (8)** — uso provato e fit corretto: `email-drafting` (top user), `investment-proposal-drafting`, `vault-live-protocol`, `vault-health`, `recap`, `defuddle`, `obsidian-markdown`, `downloads-cleaner-vault-import` (dormiente ma pronta per #16 quando dai l'OK).

**VARIARE (6)**:
1. `transcript-processing` — invocata solo nel ~40% dei casi pertinenti → rendere il trigger più aggressivo nella description + collegarla al flusso audio (sotto). *(effort basso)*
2. `management-consulting` — 8 decisioni fornitori senza supporto → aggiungere sezione "matrice fornitore HeyAI" (margine × probabilità × rischio, regola ≤60% costo fornitore, riferimenti Master Facts). *(effort medio)*
3. `audio-transcriber-deepgram` — potenziare: oggi trascrive e archivia; aggiungere step categorizzazione (progetto/persona/tipo) + handoff automatico a `transcript-processing`. *(effort medio — è il build audio §5)*
4. `pm-method` — description già accorciata stanotte (975→369); proposta ulteriore: assorbire come riferimento il pattern "documento modifiche decoupled" del deck-work. *(effort basso)*
5. `obsidian-bases` — già ottimizzata stanotte (497→~180 righe + references/). Nessun altro intervento.
6. `web-design-3d` — tenere ma a freddo: post-Angelini il trigger può restare com'è; ri-valutare a settembre se il filone siti resta vivo.

**DISMETTERE / CANDIDATE (2)**: `json-canvas` (zero usi rilevati in 200+ sessioni profilate → archiviare come website-builder-setup); `obsidian-cli` (zero usi rilevati; tenerla solo se la usi per i plugin Obsidian — in dubbio, archivio reversibile).

**NUOVE skill proposte (in ordine di ROI, dai gap osservati)**:
1. **`deck-iteration`** — il gap più grosso: 11 sessioni giugno con la stessa metodologia (doc modifiche slide-per-slide decoupled dal PPTX, audit avversariale "come mi attacca il cliente", registro decisioni). Standardizzarla = ore risparmiate a ogni gara.
2. **`pricing-audit`** — stress-test avversariale dei numeri + check drift numerico tra Master Facts ↔ scheda ↔ deliverable (9 sessioni mag+giu). Sinergia: diventa la base del futuro slot `contradictions` di vault-health.
3. **`supplier-decision`** — matrice fornitori formalizzata (8 sessioni) — in alternativa all'estensione di management-consulting (scegliere UNA delle due strade, non entrambe).
4. **`coaching-note`** — post-mortem call con voto, pattern, lezioni → `30 - Areas/Area - Performance & Coaching/` (6 sessioni maggio). 
5. **`requirement-log`** — template RL per cliente (6 sessioni maggio, oggi ogni RL è custom).

## 4. Design — Router skill-on-prompt (3 livelli effort) — RICHIEDE OK per l'implementazione

Hook `UserPromptSubmit` (nuovo, additivo in settings.json) che al **primo prompt** della sessione fa keyword-match leggero e inietta un suggerimento non vincolante: *"Stack suggerito: [skill X + skill Y] — effort: basso/medio/alto"*. Livelli: **basso** = skill singola inline · **medio** = skill + verifica strutturale · **alto** = fan-out subagent / workflow + verifica avversariale (per audit, gare, deliverable da firma). Non implementato stanotte: un hook malformato disturberebbe ogni prompt di domani — meglio attivarlo con te sveglio e 2 test.

## 5. Design — Flusso audio → trascrizione → vault — RICHIEDE OK per l'implementazione

Validato in Fase 1: Claude Code non ha hook "on-upload"; la via reale è `UserPromptSubmit` che rileva path/estensioni audio (m4a, mp3, wav, mp4, mov) nel prompt e inietta: *"invoca `audio-transcriber-deepgram`, poi categorizza (progetto/persona/tipo) e passa a `transcript-processing` per la cascata §15.bis"*. Componenti già pronti: skill audio (75 r), pipeline whisper.cpp locale come fallback offline, transcript-processing per la cascata. Manca solo l'hook (~20 righe bash) + 1 test end-to-end con un file vero.

## 6. Prossimo passo proposto

Con un tuo OK (anche parziale, per punti): (a) le 4 "VARIARE" a effort basso/medio si fanno in 1 sessione; (b) `deck-iteration` + `pricing-audit` si scrivono in 1 sessione con i tuoi esempi reali come reference; (c) router + audio-hook = 30 min con te presente per il test. Le dismissioni sono reversibili (archivio, non delete).
