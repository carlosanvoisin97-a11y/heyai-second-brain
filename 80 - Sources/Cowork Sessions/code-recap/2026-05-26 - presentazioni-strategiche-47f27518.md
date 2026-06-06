---
type: session-recap
source: claude-code
session_id: 47f27518
project_path: ~/Desktop/presentazioni-strategiche
date_last_activity: 2026-05-26
size_mb: 40.8
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — presentazioni-strategiche (47f27518)

## Cosa è stato fatto

Sessione lunga (528 righe, 145 turni utente) dedicata al **pitch Angelini Academy** (cliente via FuturItaly, deadline 31/5/2026). Carlo è partito da una domanda di metodo — "qual è lo strumento migliore per creare slide PowerPoint con Claude?" — usando la cartella `~/Desktop/presentazioni strategiche/` con 5 deck PDF di reference (NOT, Eldis, Noloop, Picos, Eldis Analisi Strategica). La sessione ha attraversato 3 fasi: (1) **Phase 0 — research su Claude Design** come tool di delivery, mappatura capacità, modelli, export PPTX lossy; (2) **estrazione metodo HeyAI** da 5 deck reference → produzione di `metodo.md` + `prompt-library.md` riusabili; (3) **applicazione pratica** al pitch Angelini Academy v3.3 — produzione di 10 slide-prompt (COVERTINA + S1-S9 di Atto 1) per Claude Design, audit del primo PDF output Claude Design ("Strategia e architettura del nuovo sito web"), e infine **handover strutturato per nuova chat** (16 sezioni) salvato in `00 - Inbox/`.

## Progetti / aree vault toccate

- **Angelini Academy** (cluster gara via FuturItaly, P2) → cartella `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/`
- Cliente finale: Angelini Academy · Champion: Elena Chiti (FuturItaly) · Owner operativo: Caterina Caboni · Decisore: Marco Morbidelli (CEO)
- Riferimenti vault toccati: pitch v3.1 (post audit) e v3.3 (Atto 1 ristrutturato) in `00 - Inbox/`, scheda `Pitch Deck Scaletta McKinsey 23-5.md` nella cartella progetto

## Decisioni esplicite

- Adozione **Claude Design** come tool di delivery slide (non Claude Code / non MCP PowerPoint per il pitch Angelini)
- Workflow: PDF reference → estrazione metodo testuale → slide-prompt → Claude Design genera → audit visivo → iterazione
- PPTX export Claude Design **lossy** ma accettabile (PDF è output autoritativo, PPTX serve solo se cliente chiede formato editabile)
- Architettura deck Angelini: **19 slide + cover + demo**, struttura McKinsey (Atto 1 problema → Atto 2 proposta → Atto 3 chiusura)
- Atto 1 ha priorità — i 10 prompt prodotti coprono COVERTINA + S1-S9
- Prossima chat parte da **Priorità 2 (audit PDF Claude Design già prodotto)** PRIMA di Atto 2, per fissare baseline visiva

## Numeri / fatti vault-worthy

- **Deadline pitch finale: 31/5/2026** (5 giorni dalla data sessione)
- **Deadline PPTX finale: 29/5/2026 sera** (T-2 rispetto al pitch)
- Reference deck usati per estrazione metodo: 5 PDF (NOT 14/01/2026, Eldis 16/06/2025, Eldis Analisi Strategica 10/11/2025, Noloop Roadmap AI 2026, Picos vDEF)
- Design System "Angelini Academy 2024" **già caricato in Claude Design** dalla sessione precedente

## Output prodotti (file editati/creati)

Fuori dal vault (~/Desktop/presentazioni strategiche/metodo/):
- `/Users/carlosanvoisin/Desktop/presentazioni strategiche/metodo/metodo.md` — metodo HeyAI riusabile estratto da 5 deck reference (3 modalità narrative + 15 style rules)
- `/Users/carlosanvoisin/Desktop/presentazioni strategiche/metodo/prompt-library.md` — template prompt per Claude Design

Nel vault:
- `/Users/carlosanvoisin/claude/00 - Inbox/2026-05-26 - Handover Angelini chat nuova - Slide generation.md` — handover 16 sezioni per nuova chat

Memory di sessione Claude Code:
- `memory/MEMORY.md`, `memory/brand_heyai.md`, `memory/feedback_pdf_for_pptx_input.md`, `memory/project_presentation_method.md`, `memory/user_role.md` (locali alla cartella `~/.claude/projects/-Users-carlosanvoisin-Desktop-presentazioni-strategiche/`, NON nel vault)

Letti come reference (non modificati):
- `00 - Inbox/2026-05-23 - Pitch Angelini v3.1 - Post Audit Brief.md`
- `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` (fonte autoritativa)
- `00 - Inbox/Angelini Academy — Strategia e architettura del nuovo sito web.pdf` (output Claude Design da auditare)
- `20 - Projects/Futuritaly/Angelini Academy/Pitch Deck Scaletta McKinsey 23-5.md`

## Task aperti / prossimi passi

Per la nuova chat (eredita handover):
1. **Audit PDF Claude Design già prodotto** (priorità 1 secondo handover) — capire cosa Claude Design ha generato visivamente per fissare baseline qualità
2. **Atto 2 slide-prompt** — generare prompt per slide proposta (priorità 2)
3. **Atto 3 slide-prompt** — chiusura
4. **Q&A kit** — preparare risposte per possibili domande pitch
5. **PPTX finale entro 29/5 sera**
6. **8 decisioni residue aperte** (elencate in handover §13) — da risolvere in nuova chat

## Schede vault da aggiornare (proposta §15)

- **[[_Angelini Academy]]** (`20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy.md`) → append `## Log` con: 26/5 prodotti 10 slide-prompt Atto 1 via Claude Design, metodo estratto da 5 deck reference, handover salvato per continuazione chat
- **[[99 - System/Open Tasks]]** → eventuale entry per audit PDF Claude Design + Atto 2 prompts (deadline 29/5)
- **[[40 - Resources/Concetti]]** → valutare promozione di `metodo.md` (estratto da 5 deck HeyAI) come atomic note "Metodo HeyAI per slide strategiche" — knowledge operativo riusabile cross-cliente
- **[[60 - People/Elena Chiti]]**, **[[60 - People/Caterina Caboni]]**, **[[60 - People/Marco Morbidelli]]** → log decisioni stilistiche pitch se rilevanti per le loro schede

## Citazioni testuali

> "non è un metodo stilistico e concettuale che si applica sempre e comunque ovunque [...] però penso che a livello di rappresentazione strategica dei concetti e di logica degli elementi [...] sia un buon riferimento perché questo è il mio metodo e solitamente funziona" — Carlo, sul perché estrarre metodo dai 5 deck reference

> "Non mi devi dare necessariamente ragione, devi controbattere quello che dico se pensi di avere un'idea migliore" — Carlo, opening sessione

## Note di flag

- **Cliente identificato: Angelini Academy** (non era ovvio dal nome cartella generico `presentazioni-strategiche`).
- I file `metodo.md` e `prompt-library.md` vivono **fuori dal vault** (in `~/Desktop/presentazioni strategiche/metodo/`) — valutare se importarli in `40 - Resources/Concetti/` per renderli ricercabili dal secondo cervello (decisione di Carlo).
- L'handover in `00 - Inbox/` esiste già — la nuova chat avviata dopo questa sessione dovrebbe averlo letto; verificare se è stato processato o resta pending.
