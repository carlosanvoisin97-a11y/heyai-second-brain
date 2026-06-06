---
type: session-recap
source: claude-code
session_id: e195d474
project_path: ~/claude (worktree claude-worktrees-frosty-merkle-cf6851)
date_last_activity: 2026-05-30
size_mb: 2.5
status: vault-worthy
created: 2026-05-30
tags: [code-session, daily-index-2026-05-30, angelini-academy]
---

# Recap Code session — claude-wt-frosty-merkle (e195d474)

## Cosa è stato fatto
Doppio binario su Angelini Academy: (1) analisi SEO/GEO indipendente "da zero" via skill `claude-seo:seo` — cluster keyword in italiano sui 4 ambiti (Lavoro & Sviluppo Umano, Sostenibilità & Transizione, IA & Cointelligenza, Educazione & Pedagogia), schema.org prioritari, GEO citability score, mappa degli spazi organici realmente disponibili per posizionamento "qualità contenuti ≠ scala"; (2) build PPTX Pitch v2 (28 slide, atto 1 + atto 2) con pipeline Chrome+pdftoppm in `~/Downloads/deck-build/` e copia in vault `20 - Projects/Futuritaly/Angelini Academy/Angelini_Academy_Pitch.pptx` (backup `.bak-20260530` salvato). Verifica integrità con RMSE su slide invariate (~0.005 = ok).

## Progetti / aree vault toccate
[[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] · [[20 - Projects/Futuritaly/Angelini Academy/SEO Specs Sito Nuovo|SEO Specs Sito Nuovo]] · [[00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato]]

## Decisioni esplicite
- Build PPTX consolidata a 28 slide (atto 1 = 11, atto 2 = 17) — copiata in vault.
- SEO IT-first: nessun volume keyword inventato; tutti i numeri marcati [DATI]/[STIMA]/[DA VERIFICARE] (richiede DataForSEO/GSC per confermare).

## Numeri / fatti vault-worthy
- Dimensione PPTX finale: 15.5 MB (vs 16.0 MB backup).
- Slide totali: 28 (delta vs prima build 29 → 1 sovrappiù rimosso).
- Citazione strategica per autorevolezza nel deck: "Cattedra LUISS, 8 business school, ASFOR, white paper con Harvard Business Review Italia".

## Output prodotti (file editati/creati)
- `~/Downloads/deck-build/atto1.html`, `build-abstract.js`, `build-pptx.js`, `package.json`
- `20 - Projects/Futuritaly/Angelini Academy/SEO Specs Sito Nuovo.md` (aggiornato)
- `20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy.md` (aggiornato)
- `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md`
- `/tmp/aa_s6-08.jpg` (frame slide debug)
- PPTX in vault: `Angelini_Academy_Pitch.pptx` + `.bak-20260530`

## Task aperti / prossimi passi
- Verifica volumi/difficoltà keyword via DataForSEO o GSC (numeri SEO oggi sono [STIMA]).
- Sintesi finale "mappa degli spazi organici disponibili" sui 4 ambiti × 5 audience da consolidare nella scheda SEO.

## Schede vault da aggiornare

**Applicato in automatico (append-only sicuro)** — vedi cascata consolidata in fondo all'indice del giorno:
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — appendato nel Log: SEO analysis indipendente + build PPTX v2 28 slide.

**Proposta da confermare (NON applicata)**:
- Nessuna — non emergono numeri economici, pricing, status changes da formalizzare.

## Citazioni testuali
- "Non hai analisi pregresse: parti dai fatti" (regola del prompt).
- "Cattedra LUISS, 8 business school, ASFOR, white paper con Harvard Business Review Italia: marcati con i dati strutturati giusti diventano autorevolezza percepita da motori e AI" (claim contenuto nel deck).

## Note di flag
Vault-worthy: tocca direttamente schede progetto Angelini Academy. SEO numbers sono marcati come stima — NON propagare come fatti. Pipeline PPTX in `~/Downloads/deck-build/` resta fuori vault (asset di lavoro, ricostruibile).
