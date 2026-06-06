---
type: session-recap
source: claude-code
session_id: a427dd8d
project_path: ~/code/angelini-academy (worktree: suspicious-blackwell-78e651)
date_last_activity: 2026-05-28
size_mb: 29.9
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy wt suspicious-blackwell (a427dd8d)

## Cosa è stato fatto

Sessione lunga (802 messaggi user, 2676 righe JSONL, dal 22/5 al 26/5/2026) avviata da reel "AI 3D websites" per esplorare effetti scroll-based 3D, parallax, tipografia oversize e applicarli al sito Angelini Academy (gara FuturItaly, pitch 31/5). Stack scelto: React Three Fiber + drei + GSAP ScrollTrigger + Lenis + Framer Motion. Carlo ha aperto sessione gemella su una nuova cartella `~/code/angelini-sito-3d` per migrare il lavoro fuori dal worktree, mantenendo l'attuale come laboratorio di prototipi 3D. Prodotti molteplici prototipi (bridge "PIBI Bridges in education", molecule orb, morph, molecule-demo, bridge-demo) e poi consolidata la metafora visiva su molecola/atomo come concept unico del sito. Round multipli di rifinitura copy con quote Sofia v1→v2.1→v2.2 e ricostruzione canonica del brief copy. Tunnel cloudflared usato per condivisione demo. Sessione chiusa per limite context window.

## Progetti / aree vault toccate

- angelini-academy → [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] (gara FuturItaly, pitch 31/5). Path vault: `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/`
- Brief copy canonico aggiornato in vault: `Brief Copy Sito per Claude Code.md` v2.0 (in vault) — fonte unica copywriting/storytelling
- Mockup vault: `Mockup Sito - Struttura e Copy Completo.md`
- Audit pre-esistenti in `00 - Inbox/`: `2026-05-23 - Audit Pitch v3 vs Brief Angelini` + `2026-05-23 - Pitch Angelini v3.1 - Post Audit`

## Decisioni vault-worthy

- **Stack tecnico siglato**: React Three Fiber + drei + GSAP ScrollTrigger + Lenis + Framer Motion (no Spline). Tre.js sotto. Modelli GLB/GLTF ottimizzati con `gltf-transform`/`meshopt`.
- **Concept visivo unico** = metafora molecola/atomo per tutto il sito. Atomo diventa ponte (sfere connesse), si propaga su sezioni industry learning ecosystem (PercorsiImprese) e EngagedResearch.
- **Palette**: arancione al posto del rosso come accent (Angelini usa arancione più spesso, rosso meno).
- **Claim ponte**: "PIBI Bridges in education" (dato cliente) — rimossa scritta "ponti" decorativa che era senza senso.
- **Quote Sofia v2.2** consolidata: "Pensavo che certe porte fossero chiuse. Tre anni dopo guido un lancio in nove paesi." — nessun riferimento economico, metafora universale.
- **Sezione "Centralità dimensione umana"** rimossa da ChiSiamo.
- **Decisione di migrazione**: aprire nuova sessione Code su `~/code/angelini-sito-3d` (cartella separata) per ristrutturare il sito attuale + effetti 3D appena fatti. Worktree corrente resta laboratorio.

## Numeri vault-worthy

- Build time: 3.11s (verde, warning solo pre-esistente su chunk size >500KB)
- Conteggio tool calls: 148 Edit, 109 Bash, 77 Read, 41 Write
- Bash recurring: 6×`npx tsc -b --noEmit` (typecheck), `npm run build`, tunnel `cloudflared` per demo link, `python3 -m http.server 5180` per preview

## Output prodotti (file)

Worktree `suspicious-blackwell-78e651`:
- `bridge.html`, `molecule.html`, `molecule-orb.html`, `morph.html` (prototipi standalone)
- `src/bridge-demo/BridgeScene.tsx` + `BridgeDemo.tsx` + `main.tsx`
- `src/molecule-demo/MoleculeScene.tsx` + `MoleculeDemo.tsx`
- `src/components/MoleculeGlyph.tsx`, `Hero.tsx`, `Header.tsx`, `Pillars.tsx`, `BrandSpotlight.tsx`, `Blog.tsx`, `Events.tsx`, `People.tsx`, `Newsletter.tsx`, `PersonaSelect.tsx`, `SectionTransition.tsx`
- `src/lib/useReducedMotion.ts`
- `src/App.tsx`, `src/index.css`, `index.html`, `package.json`
- Handoff docs: `BRAND-COHERENCE-HANDOFF.md`, `FINAL-POLISH-HANDOFF.md`
- `PIANO-DI-PROGETTO.md`, `README.md`, `.claude/launch.json`
- Migration folders preparate: `migration/final-polish/`, `migration/brand-coherence/`

Cartella nuova `~/code/angelini-sito-3d/` (target migrazione):
- `src/views/Home.tsx`, `ChiSiamo.tsx`, `Contatti.tsx`, `AngeliniPeople.tsx`, `FounderStories.tsx`
- `src/views/EngagedNetwork.tsx`, `EngagedResearch.tsx`, `MbaGateway.tsx`, `Press.tsx`
- `src/views/PercorsiImprese.tsx`, `PercorsiHrBusiness.tsx`, `PercorsiMedia.tsx`, `PercorsiResearcher.tsx`, `PercorsiTalent.tsx`
- `src/components/Newsletter.tsx`, `PageShell.tsx`, `Partners.tsx`, `People.tsx`, `PersonaSelect.tsx`, `Pillars.tsx`
- `src/data/communityMock.ts`, `src/lib/i18n.tsx`, `src/lib/navigation.tsx`, `src/pages/index.astro`, `src/index.css`

File vault aggiornati durante la sessione:
- `Brief Copy Sito per Claude Code.md` (vault) → v2.0 canonica
- Memory files `~/.claude/projects/.../memory/MEMORY.md`, `project_angelini_academy.md`, `user_profile.md`

## Task aperti

- [ ] Verificare migrazione effettiva del lavoro 3D dal worktree `suspicious-blackwell` alla cartella `~/code/angelini-sito-3d` (sessione gemella aperta in parallelo) — owner Carlo+Code session
- [ ] Decidere se i personaggi 3D in stile molecola sono OK o se usare PersonaSelect esistente (Carlo: "non mi piacciono molto fatti così con stile molecola") — owner Carlo
- [ ] Rendere coerente la resa visiva di tutto il sito sotto concept molecola (industry learning ecosystem PercorsiImprese + EngagedResearch riconvertiti) — sessione gemella
- [ ] Riscrivere copy italiano "con massimo livello di efficacia" — Carlo ha chiesto strategia (sfruttando "qualsiasi tipo di funzionalità interna o esterna Claude"). Brief v2.0 è punto di partenza.
- [ ] Chunk splitting build (warning pre-esistente >500KB) — opzionale, non bloccante

## Schede vault da aggiornare (§15)

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] — append in `## Log` la decisione stack (R3F+drei+GSAP+Lenis+Framer), concept molecola/atomo unico, palette arancione vs rosso, claim "PIBI Bridges in education", apertura cartella parallela `~/code/angelini-sito-3d`
- `Brief Copy Sito per Claude Code.md` — già v2.0 canonica (aggiornato durante sessione)
- [[60 - People/Caterina Caboni]] / [[60 - People/Elena Chiti]] / [[60 - People/Marco Morbidelli]] — nessun nuovo fatto stakeholder emerso (sessione tecnica/copy, non commerciale)
- [[99 - System/Open Questions]] — eventuale entry su: dove ospitare (Vercel vs Cloudflare emerso dai check `which vercel`, `which cloudflared`), manutenzione successiva del sito 3D (Carlo ha chiesto esplicitamente: "stai tenendo conto della manutenzione successiva?")

## Citazioni testuali da preservare

> "Pensavo che certe porte fossero chiuse. Tre anni dopo guido un lancio in nove paesi." — quote Sofia v2.2 consolidata per People/PercorsiTalent/FounderStories

> "Mi confermi che non andiamo a perdere tutto il lavoro fatto finora e che trasformiamo tutto il sito attuale che abbiamo creato per Angelini più l'effetto 3D appena fatto e lo ristrutturiamo secondo l'approccio nuovo?" — Carlo, paura ricorrente di perdere il lavoro prodotto

> "Vorrei legare tutto il concept del sito alla metafora dell'atomo oppure della molecola o della cellula" — Carlo, brief concept visivo

> "Per quanto riguarda i colori userei al posto del rosso l'arancione, perché è un colore che va bene a livello stilistico e soprattutto viene utilizzato di più da Angelini" — Carlo, scelta palette

## Note di flag

- **Sessione tecnica/design, non commerciale**: nessun nuovo numero di pricing/fornitore/quotazione. I numeri Angelini Academy nel Master Facts Sheet restano invariati.
- **Worktree fuori vault**: il lavoro tecnico vive in `~/code/angelini-academy/.claude/worktrees/suspicious-blackwell-78e651/` e in `~/code/angelini-sito-3d/` — entrambi fuori dal vault Obsidian. Il vault contiene SOLO il brief copy canonico + mockup.
- **Doppia sessione Code**: durante la sessione corrente Carlo ha aperto una sessione gemella su `angelini-sito-3d` (task-notification ricevute). Coordinamento tra le due sessioni gestito da Carlo.
- **Context window saturata**: sessione si è chiusa al limite context. C'è stato un `<command-name>resume</command-name>` con summary intermedio (continuazione contestuale).
- **Gara Angelini Academy pitch 31/5**: deadline imminente (≤4 giorni). Verificare avanzamento sito 3D vs deliverable pitch sulla scheda `_Angelini Academy` PRIMA di nuovi commit pesanti.
