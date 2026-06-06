---
type: session-recap
source: claude-code
session_id: 93730e40
project_path: ~/code/angelini-academy (worktree: thirsty-engelbart-e58ac8)
date_last_activity: 2026-05-22
size_mb: 0.4
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy wt thirsty-engelbart (93730e40)

Sessione del 22/5/2026, h 20:50–21:18 CET (~28 minuti, 92 righe JSONL, 3 prompt utente). Sessione di research + setup tooling, NO modifiche al codice del sito Angelini Academy o del progetto `angelini-sito-3d`.

## Cosa è stato fatto

1. **Analisi guida Ten Fold "Claude Design Pro Stack"** (`guides.tenfoldmarketing.com/claude-design-pro-stack`). Carlo chiede di leggere la guida senza toccare codice/cartelle e capire se contiene indicazioni utili per i lavori di design 3D web. La guida punta a 3 GitHub repo open-source ("skill" Claude Code) che distillano regole anti-AI-slop per web design premium:
   - **Taste** (`github.com/Leonxlnx/taste-skill`) — regole visive: tipografia, colore, layout, varianti di stile (minimalist/brutalist/soft). Sezione 8 rilevante per 3D: GSAP per scroll, Three.js/WebGL per scene 3D, mai mischiarli con Framer Motion nello stesso component tree.
   - **Design Motion Principles** (`github.com/kylezantos/design-motion-principles`) — regole motion design impostate come 3 designer (Emil Kowalski = restraint, Jakub Krehel = invisible polish, Jhey Tompkins = experimentation). Code recipes in `references/motion-cookbook.md`.
   - **Impeccable** (`github.com/pbakaus/impeccable`) — 23 comandi one-word per refinement design. Per 3D: comando `overdrive` / `skill/reference/overdrive.md` con regole performance WebGL/WebGPU (target 60 fps, lazy-init near viewport, pause off-screen, fallback).

2. **Approfondimento metodi di design** (secondo prompt: "approfondisci e impara metodi collegati"). Estratti principi operativi: durate ~100–150 ms feedback click, 200–300 ms cambi stato, 500–800 ms ingressi scenografici; uscite ~75% dell'entrata; curve ease-out custom; mai animare width/height/position, solo transform + opacity; rispetto `prefers-reduced-motion`; observer di visibilità invece di scroll events.

3. **Creazione skill personale `web-design-3d`** (terzo prompt: "crea un file/elemento che racchiude questi principi richiamabile da Claude Code"). Creata in `~/.claude/skills/web-design-3d/SKILL.md` — skill **globale** (auto-trigger su qualsiasi progetto, non solo Angelini Academy), 6 sezioni: Architettura 3D / Performance / Movimento premium / Scroll e 3D / Accessibilità / Estetica + Metodo di lavoro. Descrizione esplicita "applica solo le regole pertinenti al compito in corso, non forzare le regole 3D dove non servono".

4. **Aggiornamento memory del progetto** angelini-academy:
   - `~/.claude/projects/-Users-carlosanvoisin-code-angelini-academy/memory/reference_design_skills.md` — riferimento ai 3 repo + cross-link alla nuova skill.
   - `~/.claude/projects/-Users-carlosanvoisin-code-angelini-academy/memory/MEMORY.md` — index aggiornato.

## Progetti / aree vault toccate

- **Angelini Academy** → [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] (sito marketing in migrazione Vite/React → Astro, contesto della session).
- **angelini-sito-3d** — repo separato citato come destinatario futuro della skill (sito 3D dedicato, non lo stesso del marketing site Academy).

## Decisioni

- Skill `web-design-3d` creata come skill **globale personale** (in `~/.claude/skills/`), non skill di progetto. Auto-trigger su web design, front-end, 3D, animazioni in qualunque repo.
- Skill applica regole **selettive**: su lavori senza 3D, ignora Three.js/WebGL ma applica movement/performance/accessibility.
- Convenzione esplicita: NO mix Three.js+GSAP con Framer Motion nello stesso component tree.
- Skill è editabile direttamente (`~/.claude/skills/web-design-3d/SKILL.md`) — non ricrearla nelle prossime sessioni, raffinarla in append.

## Numeri / dati tecnici fissati

- Target fps scene 3D: **60** (sotto 50 → semplificare).
- Durate animazione: 100–150 ms click feedback · 200–300 ms cambio stato · 500–800 ms ingressi scenografici · uscite ~75% delle entrate.
- Rule: animare solo transform + opacity, mai width/height/position.

## Output (file creati/modificati)

- `~/.claude/skills/web-design-3d/SKILL.md` (NEW, ~75 righe) — skill globale.
- `~/.claude/projects/-Users-carlosanvoisin-code-angelini-academy/memory/reference_design_skills.md` (NEW + 2 edit) — reference ai 3 repo Ten Fold + cross-link alla skill.
- `~/.claude/projects/-Users-carlosanvoisin-code-angelini-academy/memory/MEMORY.md` (1 edit) — index riga design skills aggiornata.

Tool usage: 2 Bash, 4 Edit, 2 Read, 2 Write. **Nessuna modifica al codice del sito Angelini Academy o `angelini-sito-3d`**.

## Task

Nessun task operativo nuovo emerso. Setup tooling auto-contenuto.

## Schede vault da aggiornare (§15)

- **[[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]** — append in `## Log` o sezione tooling: "22/5/2026 — Creata skill globale Claude Code `web-design-3d` (~/.claude/skills/web-design-3d/SKILL.md) per uniformare i principi di motion design e 3D su tutti i lavori web. Distillata da 3 repo GitHub (Taste, Design Motion Principles, Impeccable) tramite guida Ten Fold. Auto-trigger su web design / front-end / animazioni. Applicabile sia al sito Academy che al progetto separato angelini-sito-3d." Nessun impatto su pricing/scope/contratto: è infrastruttura PM Carlo-side.
- **Master Facts Sheet** — NESSUN aggiornamento. La skill è tooling personale, non un fatto commerciale.

## Note di flag

- Skill **globale** = ha effetto trasversale su tutte le chat Code/Cowork future di Carlo che toccano front-end o design. Da considerare quando si valuta perché un agente futuro applica "naturalmente" certi pattern motion/3D.
- Esiste un progetto distinto `angelini-sito-3d` (sito 3D dedicato, separato da Angelini Academy marketing). Da verificare se è già schedato come progetto vault o se va creata una scheda separata in `20 - Projects/Futuritaly/Angelini Academy/`.
- File `~/.claude/projects/-Users-carlosanvoisin-code-angelini-academy/memory/` esiste come memory store di progetto Claude Code, separato dal vault Obsidian. Riferimento utile per onboarding nuove sessioni Code sullo stesso repo.
