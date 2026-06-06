---
type: session-recap
source: claude-code
session_id: 4b4b8790
project_path: ~/Desktop/presentazioni-strategiche
date_last_activity: 2026-05-26
size_mb: 32.2
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — presentazioni-strategiche (4b4b8790)

## Cosa è stato fatto

Sessione lunga (25/5 11:16 → 26/5 02:25, ~15h elapsed) avviata su una cartella di lavoro generica `~/Desktop/presentazioni strategiche` ma con focus chiaramente identificabile su **pitch finale Angelini Academy (Futuritaly)** del 31/5/2026. Quattro macro-fasi: (1) brainstorming sul "metodo migliore" per produrre slide con Claude — confronto Claude Design vs MCP PowerPoint vs Claude Code (skill `superpowers:brainstorming` lanciata); (2) analisi del corpus di 5 PDF di presentazioni storiche di Carlo (NOT 14/01/2026, Eldis 11/10/2025 e 16/06/2025, NoLoop Roadmap AI 2026, Picos vDEF) per estrarre il metodo McKinsey-style di Carlo; (3) ricerche web su Claude Design (4 WebSearch); (4) scrittura nei file `metodo/metodo.md` + `metodo/prompt-library.md` + 5 file memoria persistente nella cartella di progetto, e infine produzione concreta di prompt slide-by-slide per il deck Angelini partendo dal documento `Pitch Angelini v3.3 - Atto 1 Ristrutturato`. Cliente identificato: **Angelini Academy via Futuritaly** (deal in gara, pitch 31/5).

## Progetti / aree vault toccate

- `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/` — letto `Pitch Deck Scaletta McKinsey 23-5.md`
- `/Users/carlosanvoisin/claude/00 - Inbox/2026-05-23 - Pitch Angelini v3.1 - Post Audit Brief.md` — analisi v3.1
- `/Users/carlosanvoisin/claude/00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` — analisi v3.3 e base per i prompt finali

## Decisioni esplicite

- **Tool di produzione scelto**: Claude Design (NON MCP PowerPoint, NON plugin custom). Carlo dichiara "Claude Design fa presentazioni che mi piacciono", esporta in `.pptx` per eventuali ritocchi manuali post.
- **Strategia di generazione a 3 stadi**: Stadio 1 prompt di contesto (governing thought, 3 supporting arguments MECE, architettura 19 slide + Cover + Demo Live, vincoli compositivi) → Stadio 2 tre slide pilota (S1 Indice strutturale, S8 Matrice posizionamento concettuale-diagrammatico, S11 Tesi Ecosistema dichiarativo-hero) → Stadio 3 propagazione 16 slide rimanenti + Cover.
- **NON generare tutte le 19 slide in un colpo solo** (diluisce dettaglio specs slide-by-slide).
- **Frase climax** "Chiunque può fare un sito. Pochi sanno progettare la circolarità." resta SOLO in speaker note, mai in slide.
- **Switching modelli Claude Design**: Opus 4.7 per prima generazione, Sonnet 4.6 per refinement strutturali, Haiku 4.5 per tweaks.

## Numeri vault-worthy

- Pitch Angelini Academy: **50-55 min pitch + 15-20 min Q&A + 20 min demo live mockup**, **19 slide + Cover + Demo Live** (non 19 totali).
- Architettura deck: Atto 1 Analisi 10 slide (~15 min, S1-S10), Atto 2 Proposta 5 slide (~13 min, S11-S15), Demo Live ~20 min senza slide, Atto 3 Esecuzione 4 slide (~10 min, S16-S19).
- Audience confermata: Caterina Caboni + Tiziana Carnicelli (decision-maker senior, confermata in stanza); Marco Morbidelli CEO forse; Daniele Caporale + Elena Chiti (FuturItaly) silenti.
- Brand book vincolante: Angelini Academy 2024 — palette #003087 navy + #FF8200 arancio, tipografia Barlow + Merriweather italic.

## Output prodotti (file)

Tutti fuori dal vault Obsidian, dentro `~/Desktop/presentazioni strategiche/`:
- `metodo/metodo.md` — metodo McKinsey-style di Carlo distillato dai 5 PDF storici (Write tool)
- `metodo/prompt-library.md` — libreria prompt riusabili (Write tool)
- `memory/MEMORY.md` — index memoria di progetto
- `memory/brand_heyai.md` — brand HeyAI
- `memory/feedback_pdf_for_pptx_input.md`
- `memory/project_presentation_method.md`
- `memory/user_role.md` — ruolo PM Carlo

Output produttivo principale della sessione (in chat, non scritto su file): **prompt completo Stadio 1 + prompt completo Slide 1 Indice** pronti per copia-incolla in Claude Design.

## Task aperti

- [ ] Copia-incollare in Claude Design il **prompt Stadio 1** (contesto deck) — vedi turno finale agente
- [ ] Generare le **3 slide pilota** (S1 Indice, S8 Matrice, S11 Tesi Ecosistema) prima di propagare le altre 16
- [ ] Validare visivamente le 3 pilota (action title 3 sec, brand Angelini, densità, speaker note, visual element) prima di Stadio 3
- [ ] Chiudere Atto 1 v3.3 entro 28/5 sera (Carlo stava ancora rivedendo il documento alla fine della sessione)
- [ ] Risolvere TBD pricing S19 prima della propagazione finale

## Schede vault da aggiornare (proposta §15)

- `20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy.md` — append in `## Log`: sessione 25-26/5 di brainstorming metodo presentazioni + estrazione strategia 3 stadi per produzione deck via Claude Design. Riferimento ai prompt prodotti.
- `20 - Projects/Futuritaly/Angelini Academy/Framework Pitch Finale.md` o `Strategia Pitch Finale.md` — append: confermata architettura deck 19 slide + Cover + Demo Live (50-55 min pitch). Strategia di produzione a 3 stadi via Claude Design.
- `40 - Resources/` (nuovo concetto?) — valutare se promuovere `metodo/metodo.md` e `metodo/prompt-library.md` da `~/Desktop` dentro `40 - Resources/Concetti/` come atomic notes riusabili (metodo McKinsey-style + prompt library Claude Design). Carlo dovrebbe decidere se questo materiale appartiene al vault o resta nella cartella desktop di produzione.

## Citazioni testuali

- Carlo (turno 5): "Ho già Max 20x... Non voglio fare test perché ho già visto che Claude Design fa delle presentazioni che mi piacciono."
- Frase climax pitch Angelini (verbale, NON in slide): "Chiunque può fare un sito. Pochi sanno progettare la circolarità."
- Governing thought consolidato: "Angelini Academy deve scegliere HeyAI come fornitore del sito perché siamo l'unico team che non vi propone un sito ma un ecosistema integrato che valorizza la dimensione umana della vostra Academy."

## Note di flag

- **Cartella di lavoro fuori vault**: tutto il materiale prodotto (`metodo/`, `memory/`) vive in `~/Desktop/presentazioni strategiche/`, NON nel vault Obsidian. Se Carlo vuole capitalizzarlo come knowledge riusabile HeyAI, va promosso esplicitamente in `40 - Resources/`.
- **Skill `superpowers:brainstorming` lanciata** all'inizio della sessione (HARD-GATE: design prima dell'implementazione) — coerente con la natura esplorativa della richiesta iniziale.
- **Riservatezza CLAUDE.md §13**: il governing thought e i prompt Slide 11 nominano "HeyAI" come team. Per il cliente Angelini va bene (HeyAI è il vendor che pitcha, non un fornitore nascosto). Nessun riferimento a Soolutions/Silencio/Jakala — OK.
- **Continuity**: la sessione termina con il prompt Slide 1 Indice pronto, in attesa di feedback Carlo post-test in Claude Design. Eventuali sessioni successive dovrebbero partire da lì.
