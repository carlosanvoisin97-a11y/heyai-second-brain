---
type: plan
created: 2026-06-06
updated: 2026-06-06
status: proposta — scope confermato da Carlo 6/6, esecuzione da avviare
tags: [system, second-brain, F2, ingest, kb-solidity]
---

# F2 — Ingest KB grezza + KB Solidity Report

> Piano operativo + inventario delle **2 aggregazioni** di materiale grezzo (prodotte da Desktop Commander, per cliente) da ingerire nel vault. Companion di [[2026-06-06 - Roadmap Second Brain Code-era|Roadmap]] §F2. Scope confermato da Carlo 6/6.

## 1. Le due fonti — 171 file, ~15 MB, **0 sovrapposizione di contenuto** (solo `_INDICE.md` in comune)

| Fonte | File | Dim | Stato | Provenienza |
|---|---|---|---|---|
| `Desktop/_OBSIDIAN-VAULT` | 36 | 8.7M | **semi-distillata** (ha 4 note "Contesto Strategico Completo") | Desktop |
| `00 - Inbox/_DA_DOWNLOADS_2026-06-06` | 135 | 6.2M | **grezza** (trascrizioni/minute) | Downloads (già nel vault, gitignored) |

⚠️ La cartella **Desktop è fuori da vault/git/backup** → va messa in salvo per prima.

## 2. Come la gestisco (fasi)

- **0. Messa in salvo** — copio `Desktop/_OBSIDIAN-VAULT` → `80 - Sources/Files/_import-2026-06-06/` (gitignored, PII). Tutto sotto backup, in un posto.
- **1. Easy wins** — le 4 note "Contesto Strategico Completo" (NOT · Eldis · AI Venue Finder · Angelini) sono già distillate → **riconcilio** nelle schede `20-Projects`/`60-People` (append fatti nuovi + dedup). **AI Venue Finder** sotto-rappresentato → propongo scheda dedicata (§10bis: chiedo prima).
- **2. Harvest `nervous`/`nice`** (pezzo pendente di STEP 3 F0) → poi prune le 2 worktree.
- **3. Ingest grezzi per cliente** — pattern `transcript-processing`: estraggo decisioni/numeri/task/citazioni → **append-only** (§15) + **dedup vs esistente** + reconcile checkbox. **Numeri/prezzi/stati contrattuali = proposta da confermare** (§5/§15), mai auto-applicati. Riservatezze §13. Poi **archivio** il grezzo processato. Vault commit per cliente.
- **4. Parallelizzazione** — un subagent per cliente (istruzioni strette: append-only, dedup, niente numeri auto, ritorna proposte) → review → commit (`subagent-driven-development`).
- **5. Triage "Altro" (49)** — ri-mappo a cliente noto dove possibile; i *veri* nuovi (eventi/lead) → lista a Carlo, decide lui (no auto-creazione schede).
- **6. KB Solidity Report** — coverage-diff (tutte le fonti grezze ↔ schede) + back-tracing avversariale fatti ad alto rischio + contraddizioni (`obsidian-cli orphans/unresolved` + `wiki-lint`) → `99 - System/KB Solidity Report`.

**Ordine:** 0 → 1 → 2 → 3 (per cliente) → 5 → 6. **Niente perdita**: i grezzi restano archiviati finché l'ingest non è confermato. Incrementale, con checkpoint.

## 3. Lettura dell'inventario (cosa conta)

- **Molto è materiale FONDATIVO** (discovery NoLoop feb–mar 2026) → probabilmente **già distillato** nelle schede mature → ingest = soprattutto **verifica + dedup + harvest buchi**, non 171 fatti nuovi.
- **Sotto-rappresentato → AI Venue Finder** (set progetto quasi assente nel vault).
- **"Altro" (49) meno orfano del previsto** — perlopiù NoLoop/NOT/HeyAI + eventi cliente (ING, Banco Desio, Fineco, ELCO, Dealer Convention) + competitor. Pochi veri nuovi.

## 4. Inventario completo

### A) `Desktop/_OBSIDIAN-VAULT` (36 file, 8.7M)
- `_INDICE.md`
- **AI Venue Finder/** (7): Contesto Progetto.md · Master prompt.txt · Presentazioni_VF_struttura.docx · dati_per_servizi_e_strutture.txt · outline.txt · sections.txt · tour.operator.txt
- **Angelini Academy/** (1): Angelini Academy - Contesto Strategico Completo.md
- **Eldis/** (8): Contesto Strategico Completo.md · Proposta Servizi Digital Marketing.txt · Kick-off Call Riassunto.txt · Brief Strategico Marketing.rtf · Documento di Riferimento Completo.rtf · Struttura Mercato Processi.rtf · Analisi Processo e Questionario[75].rtf · Visione Strategica e Priorità.rtf
- **NOT/** (12): Contesto Strategico Completo.md · Appunti germano.txt · Appunti operation ALL.txt · Assessment Strategico.txt · Call Carmen.txt · Call Justin.txt · Deep Dive Modulo Vendite.docx (1.46M) · Deep Dive Modulo Logistica.docx (2.18M) · trans carmen Deep Dive Operation.docx (1.99M) · transc germano.docx (1.76M) · Questionario 1to1 Operations ×2.docx
- **Noloop/** (6): AI venue Finder.docx (368K) · LeadMe Guida Funzionalità.docx · Proposta di Investimento AI.pdf (556K) · Report Iniziative AI.docx · Sally.txt · Tally AFU.docx

### B) `_DA_DOWNLOADS_2026-06-06` (135 file, 6.2M)
- **Achipont/** (1): 1 call achipoint.txt
- **Altro/** (49): AI checklist/PM Transcript · Allineamento Post Demo · Allineamento Preventivi Sviluppo AI · Analisi Competitor Field Marketing Italia · Call con Lorena · Confronto competitors · Convention Banco Desio 2025 · Convention ELCO SELECTO 2023 · Crowd Demo Live 4ª · Crowd Sessione Finale Test · DEALER CONVENTION 2022 · Deep Dive PDP Budgeting · Email Cavecchi/Zaghi · Email Follow-Up Business Case · Evento ING Sostenibilità ×3 · Fineco Investment Seminar · LeadMe Evolution Requisiti · LeadMe Report PM 18mar · Progress Transcript · Riunione con Carlo ×2 (9,10) · Transcript Marco Pasquali · Verbale Demo test 2 · allineamento interno · andrea allineamento · andrea pasquali PQ · banco · call fede e simo · domande analytics b2b · elena allineamento · elena debrief · fede allineamento · fede recap last · incontro segreteria · lorena 2 · marco new · maturita digitale competitor · necessità deposito AI · prima call · transcript analytics · transcript danilo (+pulito) · trascrizione 2025-09-17 · trascrizione fede simo 2026-03-18 · zaghi
- **Angelini/** (15): Audit pre-Elena · Brief Mockup · Dry run pre-Pitch (128K) · KICKOFF deck v2 · Modifiche editor deck (nuove/vecchie slide) · Revisione Deck feedback Elena 2-3/6 · Strategia Pitch Finale (+per Elena) · allineamento interno · site-fixes-summary 3-6 · call angelini · elena chini (update)
- **Eldis/** (4): Allineamento Progetti Transcript · Newsletter e Comunicazione Transcript · Scheda Call Commerciali · Scheda Call Outline PPT
- **Futuritaly/** (7): Demo Osservatorio AI · futuritaly chat export from claude.txt (924K) · parole chiave · trascrizione ×3 · verbale
- **HeyAI/** (4): Job descriptions · Progetto Ricerca Gare · Miglioramenti brief pricing (432K) · Presentazione di Progetto
- **NOT/** (18): Appunti operation · Azioni Post Call Cichello 11-02 · Minute mappatura processo BU Cichello · Estratto Germano ProgettiIT · Kick-off Operations & eye Cookies · Allineamento AI Generativa Marketing · Allineamento Eye Cookies+Marketing · Allineamento Operations+Eye Cookies · Presentazione Analisi e Proposta · Market Analysis Retail Activation · Note Processo E2E v3 · cichiello 1 · germano · industrie target · nota audio · simo nota · trascrizione concept ×2
- **NoLoop/** (34): Analisi architettura soluzione integrata · next steps 2026 ×2 · Creazione Memoria Cliente Strategica · LeadMe Guida · Allineamento Reparto Commerciale · Amministrazione/Controllo gestione · Casi d'uso AI Legale · Crowd Conferma Scope · Deep Dive Processo Offline · Deep Dive Requisiti Piattaforma · Demo LinkedIn Scraper · Follow-up Demo Crowd · Integrazioni Proposta AI 2026 · Intervista 1to1 ×3 · Intervista Reparto Creativo · Primo Incontro Casi d'uso · Prioritizzazione Casi d'uso · Training & Feedback LeadMe · Business Case Flow/LeadMe/Link/Pitch/Sally/VenueFinder (def) · Contenuti Slide · Processo E2E v2 · Roadmap 2026 Def · Verifica Ricerca Mercato
- **PresidIA/** (2): Brief Tecnico · Allineamento marco

## 5. Decisioni
- ✅ Scope F2 confermato (ingest 2 aggregazioni + dedup + archive + solidity report).
- ✅ Desktop folder → portata nel vault (`80-Sources`, gitignored) per messa in salvo.
- 🟡 AI Venue Finder scheda dedicata → da confermare con Carlo (§10bis).
- 🟡 "Altro" eventi/competitor → triage con decisione Carlo su cosa diventa scheda.

## 6. Stato esecuzione (sessione Code 6-7/6/2026)

> Eseguito su `main` direttamente (non worktree: Obsidian vede solo main). Commit: `d32fb77` (F0) → `2aadc45` (F1) → `d94aa83` (F2) → `001fe6f` (F3) → questo. **Push a carico di Carlo.** `.obsidian/graph.json` lasciato non committato (UI-noise).

- **Fase 0 ✅** — `Desktop/_OBSIDIAN-VAULT` (35 file) → `80 - Sources/Files/_import-2026-06-06/`, gitignored (PII), integrità verificata.
- **Fase 1 ✅** — riconciliate 3/4 note "Contesto Strategico Completo": `_NOT` (contesto aziendale), `_Eldis` (contesto + 9 iniziative), `Venue Finder` (spec tecnica agente — **AI Venue Finder accorpata, no scheda separata, confermato Carlo**). Angelini SKIP (nota identica a `Analisi Brief.md`).
- **Fase 2 ✅** — harvest worktree `nervous`+`nice`: solo net-new reale (OT call 1/6+4/6, Carmen 1/6, Germano 4/6); main aveva già ~90% via backlog `8435d2b`. Worktree+branch **prunati**. 4 checkbox OT reconciliati (`[reconciled — verificare]`).
- **Fase 3 ✅** — fan-out 8 subagent read-only. NESSUN NET-NEW: NOT/NoLoop/Achipont/Angelini. Net-new applicato: PresidIA (call 9/4 mai loggata), Futuritaly (CRM ~€90K + Claudia Invitalia + ANAC), Metodologia (clausole/benchmark/formato), Eldis (Alyante). Numeri = **PROPOSTA da confermare**.

### Da fare ancora
- **Fase 5 ✅** (7/6) — triage "Altro" (48 file, 3 subagent): 0 net-new su NoLoop/HeyAI (tutto già distillato). Committato: competitive intelligence NOT → `_NOT` §Landscape competitivo (§13 interno). **Decisioni Carlo** (non committati): i 7 "eventi" Banco Desio/Fineco/ING/Dealer/ELCO = output-sample Venue Finder (archiviare come test-case o scartare?); competitor → tenuto in `_NOT` (opzione A) vs atomic note (B).
- **Fase 6 ✅** (7/6) — KB Solidity Report prodotto → `99 - System/KB Solidity Report.md`. Completezza ALTA · Fedeltà ALTA (3 cluster alto-rischio confermati al back-tracing avversariale) · Coerenza MEDIA (3 errori fattuali 🔴 + conflitti numerici 🟡 da bonificare — §4 del report). **F2 COMPLETA.**
- **Archiviazione grezzi**: `_DA_DOWNLOADS_2026-06-06/` + `_import-2026-06-06/` **lasciati in sede** (safety net, gitignored) — Carlo decide se archiviare/rimuovere a ingest confermato.

### Flag per Carlo
- **Numeri da confermare** (flaggati PROPOSTA): PresidIA €15-20K integrazione pagamenti · €7K/agente pattern-detection · ~96-98% accuracy OCR; Futuritaly CRM ~€90K.
- **Conflitti pre-esistenti** (NON toccati, §5): Master Facts Revenue Share PresidIA €40K vs €44K; PresidIA Jakala €25K vs €27K (già notato in scheda).
- **Persone "Da triagiare"** (non create): Andrea (lead-gen NOT), Chiara Giuliani + Renato Savastano (Eldis); scartati dai subagent: Milena Stucchi (NoLoop), Salvatore/Roberto (Eldis).
- **File corrotto**: `HeyAI/HeyAI Job descriptions.txt` vuoto (8KB di spazi) → ri-esportare se serve.
- **Worktree residue**: `quizzical-faraday` (prunabile), `funny-shannon`, `blissful-heyrovsky` (non nell'handover) — non toccate.
