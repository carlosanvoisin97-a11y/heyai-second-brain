---
type: session-recap
source: claude-code
session_id: c64a78d9
project_path: ~/code/angelini-academy (worktree: affectionate-visvesvaraya-2dfe8e)
date_last_activity: 2026-05-27
size_mb: 1.0
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy wt affectionate-visvesvaraya (c64a78d9)

## Cosa è stato fatto

Sessione mono-prompt: Carlo chiede una verifica a tappeto della coerenza tra il sito 3D (`/Users/carlosanvoisin/code/angelini-sito-3d`, repo separato dal worktree corrente di `angelini-academy`) e il documento `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md`.

L'agente ha:
1. Orientato i due repository (worktree corrente è `angelini-academy`, il sito vive in repo separato `angelini-sito-3d` — React/Vite + Astro, 30+ componenti, 17+ views).
2. Letto il pitch v3.3 Atto 1 (1440 righe) e materiali complementari nell'Inbox vault (Atto 2/3 v3.2, Slide-prompt S11-S19, Brand Book Angelini 2024, briefing personaggi landing).
3. Ispezionato view e component chiave del sito (Home, MorphHero, PersonaSelect, Pillars, Header, navigation, i18n, index.css) — solo `Read`, nessun `Edit` né `Write` sul codice.
4. Dispatch di 3 subagent in parallelo per coprire più aree del sito + verifiche grep mirate su numeri-ancora, ASFOR, "Unwavering Care", "dimensione umana", Marco Morbidelli, Cattedra LUISS.
5. Prodotto **un solo deliverable**: report di audit con scorecard a 35 righe, 6 risk, 4 kill conditions, 8 next actions con owner/deadline, devil's advocate, quality checklist.

Toolcount: 17 Bash · 13 Read · 1 Write (solo il report) · 0 Edit/MultiEdit. Niente touch al codice del sito.

**Bottom line audit**: sito allineato al pitch v3.3 ~88%. Brand, architettura, 4 Galileo, 5 personas, 4 Pilastri + nucleo Engaged Research, Cross-OpCo, partner, MBA Gateway, concept molecola/ponti = verdi e spesso verbatim. 4 gap correggibili in <4h prima del 31/5.

## Progetti / aree vault toccate

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] — gara via FuturItaly, pitch finale 31/5.

## Decisioni

Nessuna decisione strategica nuova: la sessione è puramente audit (read-only sul sito, output un report). Le 4 priorità di fix emerse sono **proposte da indirizzare a Michele** nella finestra 28-30/5, non decisioni già prese da Carlo.

## Numeri

Numeri-ancora 2025 oggetto dell'audit (verificati nel pitch S-section, non modificati): **500+ dipendenti coinvolti · 10.000 ore erogate · 1.200 partecipanti**. Nel sito presenti solo "1.200" in Press, gli altri 2 sono assenti — gap segnalato.

## Output (file)

**Unico file prodotto** (vive nel vault, non nel repo sito):

- [[00 - Inbox/2026-05-26 - Audit Sito 3D vs Pitch v3.3 Atto 1]] — report di audit con scorecard 35 righe, 4 gap rossi, rifiniture gialle, kill conditions, 8 next actions, devil's advocate.

File letti (sito, no modifiche):
- `/Users/carlosanvoisin/code/angelini-sito-3d/src/views/Home.tsx`
- `/Users/carlosanvoisin/code/angelini-sito-3d/src/components/{Header,MorphHero,PersonaSelect,Pillars}.tsx`
- `/Users/carlosanvoisin/code/angelini-sito-3d/src/lib/{i18n,navigation}.tsx`
- `/Users/carlosanvoisin/code/angelini-sito-3d/src/index.css`

## Task

Dal report 8 next actions con owner/deadline (proposte, da validare con Michele):

- [ ] **Cattedra LUISS** — correggere copy sito da *"in attivazione / in attesa di autorizzazione"* + figura inventata "Prof. Elena Romano" → realtà pitch S4 "attiva, Prof. Giovanni Valentini, 10 anni". Bloccante per demo Voce Pubblica. Dipendenza: chiusura A7 con [[60 - People/Elena Chiti|Elena Chiti]] (26/5).
- [ ] **Numeri-ancora 2025** — aggiungere 500+ dipendenti e 10.000 ore (oltre 1.200 partecipanti già presente in Press) in punti visibili del sito.
- [ ] **ASFOR-certified 2022** — inserire badge di terzietà (zero occorrenze attuali).
- [ ] **Marco Morbidelli** — nominarlo esplicitamente come CEO + affiliazioni Bocconi/PoliMarche.
- [ ] **Rifiniture editoriali** (gialle, se tempo): "Unwavering Care" 1→N occorrenze, "dimensione umana" verbatim, isolare 2 feature MVP Engaged Network (Pedagogical Quiz + AI Co-pilot), cross-link Engaged Research nella hero Talent.

Finestra fix: 28-30/5 (owner Michele, validazione Carlo).

## Schede vault da aggiornare (§15)

Da propagare nelle prossime chat (non fatto in questa sessione):

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — appendere al `## Log` riferimento all'audit del 26/5 (link al report) e ai 4 gap rossi + finestra fix 28-30/5.
- [[60 - People/Elena Chiti]] — dipendenza A7 / Cattedra LUISS è ora bloccante per demo Voce Pubblica.
- [[60 - People/Marco Morbidelli]] — gap visibilità sul sito (citato senza nome + affiliazioni).

Nessun aggiornamento al [[99 - System/Master Facts Sheet]] — la sessione non ha prodotto numeri nuovi né cambi di pricing.

## Citazioni

Citazione testuale del prompt utente (per memoria di intent):

> "Fai una verifica a tappeto che il sito che ho costruito ed è presente nella cartella Angelini sito 3D rispetti e sia coerente alla perfezione con la strategia che ho enunciato nel documento Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md"

## Note di flag

- **Naming worktree vs repo**: la sessione gira nel worktree di `angelini-academy` ma il sito da auditare è in un repo separato (`angelini-sito-3d`). Worktree e repo sono entità distinte qui — utile ricordarlo se serve ricostruire il contesto.
- **Audit-only**: zero modifiche al codice del sito. Le correzioni proposte vivono nel report, non come patch già applicate. Chi raccoglie il follow-up deve trasformare le 8 next actions in PR/edit reali sul repo `angelini-sito-3d`.
- **Pitch v3.3 = solo Atto 1**: il sito implementa anche Atto 2/3, ma l'audit è stato deliberatamente limitato all'Atto 1 (per scope esplicito del prompt). Una seconda passata Atto 2/3 sarebbe complementare se prima del 31/5 c'è tempo.
- **Demo Voce Pubblica**: emersa nel report come componente bloccato dalla Cattedra LUISS — verificare nella scheda Angelini Academy se è già tracciata come dipendenza.
