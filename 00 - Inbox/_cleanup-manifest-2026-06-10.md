---
type: manifest
created: 2026-06-10
updated: 2026-06-10
tags: [system, overnight, cleanup, manifest, append-only]
---

# 🧾 Cleanup Manifest — overnight 2026-06-10 (append-only)

Registro di OGNI azione distruttiva/spostamento della sessione overnight 10/6. Formato: timestamp · azione · da → a · hash (binari). Recupero per-voce: `mv`/`cp` inverso; rollback totale: `git reset --hard pre-overnight-2026-06-10` + restore da `~/vault-backup-pre-overnight-2026-06-10.tgz`.

## Rete di sicurezza (precondizioni verificate)

- Tag: `pre-overnight-2026-06-10` su commit `2332486` — pushato su origin (verificato `ls-remote`)
- Backup: `~/vault-backup-pre-overnight-2026-06-10.tgz` — 11.221 file, 688 MB (worktrees inclusi)
- Trash esterna (binari/gitignored): `~/vault-trash-2026-06-10/`
- Trash interna (contenuti .md): `50 - Archive/_cleanup-trash-2026-06-10/`

## Azioni

<!-- append-only da qui in giù -->

### Task 1 — Worktree removal (2026-06-10 ~13:47)

- `git worktree remove` + `git branch -D` su 3 worktree, ciascuno ri-verificato al momento: **0 modifiche uncommitted, 0 commit unici vs main**:
  - `.claude/worktrees/sleepy-lamport-35d51a` (branch `claude/sleepy-lamport-35d51a` @ aeaaa7e)
  - `.claude/worktrees/wizardly-mirzakhani-71ca72` (branch `claude/wizardly-mirzakhani-71ca72` @ 5857bde)
  - `.claude/worktrees/xenodochial-neumann-9fdc6a` (branch `claude/xenodochial-neumann-9fdc6a` @ b1547a9)
- Verifica strutturale: `git worktree list` = solo main · `.claude/worktrees` 489 MB → 20 KB (solo `.DS_Store`) · gli export chat da 10.305 righe triplicati sono spariti col contenuto dei worktree
- Recupero: contenuti tutti in `main` (nulla di unico perso); il `.tgz` 688 MB li conserva integrali; `git worktree add` ricrea all'occorrenza
- 🔍 **Branch remoti stray (flag-only §9ter, potatura manuale Carlo)** — verificati 0 commit unici vs main; comando pronto:
  `git push origin --delete claude/achipont-outlook-email-vqpfo8 claude/contract-concerns-federico-simone-1305ye`

### Task 2 — Trash .venv (2026-06-10 ~13:48)

- `mv "20 - Projects/Futuritaly/Assets/Icone Settori 3D/.venv"` → `~/vault-trash-2026-06-10/venv-icone-settori-3d` (87 MB, 3.543 file, gitignored — `git status` post-mv: 0 voci)
- Recupero: `mv` inverso, oppure ricreazione `python3 -m venv` + `pip install` (ambiente rigenerabile)

### Task 5 — Dedup .pptx Angelini Academy (2026-06-10 ~14:10)

Cartella: `20 - Projects/Futuritaly/Angelini Academy/`. TENUTI: `Angelini_Academy_Pitch_UNIFICATO_20260531.pptx` (16 MB, finale pitch 5/6) + `Angelini_Academy_Pitch_ABSTRACT.pptx` (11 MB, contenuto distinto — 🔍 trash solo se Carlo conferma).

TRASH (`cp` con md5 in `~/vault-trash-2026-06-10/pptx-angelini/` + `git rm`; tripla rete: copia esterna + storia git + tgz):

| File | md5 |
|---|---|
| `Angelini_Academy_Pitch.pptx` (15 MB) | `6b9530cce3ff883d4b8ef98c7ed73ebc` |
| `Angelini_Academy_Pitch_v2.pptx` (15 MB) | `752ff53910035189af5be2e05c13bd80` |
| `Angelini_Academy_Pitch.pptx.bak-20260530` (15 MB) | `36ad3f072d9c0478fc0a1e15b928e4bb` |
| `~$Angelini_Academy_Pitch_UNIFICATO_20260531.pptx` (lock PowerPoint 4 KB, untracked) | — (mv diretto) |

Recupero: `cp` inverso dal trash esterno, oppure `git checkout pre-overnight-2026-06-10 -- "<path>"`.

### 🔍 Censimento 53 .md Angelini — SOLO PROPOSTA (triage di merito = RICHIEDE-OK, non eseguito)

Pitch concluso 5/6 (esito soft-defer → workshop H2'26). Proposta di triage per gruppi:

- **TENERE in progetto (deliverable + decisioni + spec riusabili, 18 file)**: `_Angelini Academy.md` · `Framework Pitch Finale` · `Strategia Pitch Finale` · `Strategia Website 2026` · `Master Brief Sito Angelini Academy` · `Accessibility Specs Sito Nuovo` · `SEO Specs Sito Nuovo` · `Scan Siti Web Comparable` · `Wireframe e Architettura` · `Mockup Sito - Struttura e Copy Completo` · `Concept - Engaged Network Community` · `User Journey Dettagliati 2026-05-18` · `Analisi Brief` · `2026-05-31 - Deck Unificato - Riferimento Decisioni` · `2026-05-31 - REGISTRO VALIDAZIONE Decisioni in Forse` · `2026-06-03 - Audit Sito mockup vs reale` · `2026-05-27 - Audit Pricing Angelini Academy` · `Sintesi Strategica Pre-PPTX 2026-05-18`
- **ARCHIVIARE (lavorazione pitch superata, 21 file)**: i 14 `Prompt Claude Code - *` + 3 `Prompt Claude Design - Atto *` + `Pitch Deck Scaletta McKinsey 23-5` + `Pitch Outline 18-5 …Short` + `Pre-call Elena 18-5` + `2026-05-27 - Prep Call Elena FuturItaly`
- **ARCHIVIARE (analisi intermedie/QA, 12 file)**: `Analisi Narrativa` + `Analisi Narrativa Short` + `Brief Mockup` + `Mockup Brief Sito` + `Brief Copy Sito per Claude Code` + `Brief Copy …(v1.1 archiviata)` + `Campagna 2026 (archiviata…)` + `Domande QA` + `Q&A preparatorio 8 maggio` + `Pitch Angelini - Diagnosi Strategica (29-5)` + `Pitch Angelini - Story Map ricca…(29-5)` + `Pitch Deck - QA e Restyle (stato 29-5)` + `Video Reel Veo 3.1 - Prompt Pack` + `Angelini Academy — Briefing Personaggi Landing Page`
- Destinazione proposta: `50 - Archive/Angelini Academy Pitch 2026-05/` (con path-update dei wikilink via grep-on-rename, stesso metodo cluster A/B)
