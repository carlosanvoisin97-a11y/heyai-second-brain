---
type: handover
created: 2026-06-09
updated: 2026-06-09
tags: [system, handover, F1, F3, F4, F5, backlog]
aliases: [Handover 9-6, Handover sessione sync-F4, Handover completo 9 giugno]
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** F3/F6 chiusi il 10/6 (erano 🔶/❌ qui), OQ#36 chiusa, skill-strategy eseguita. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# 🔁 HANDOVER → sessione fresca: stato completo dopo la sessione 7→9/6 (sync → F4)

> **Complementa** [[2026-06-07 - HANDOVER — chiusura F1 (sync vault + QA + cattura Code)|Handover 7/6]] (la sessione fork lo legge già: lì lo stato PRE) e [[2026-06-09 - Punto Situazione + Skills Recap|Punto Situazione 9/6]] (recap 3-agenti + skill). Qui: **TUTTO ciò che questa lunga sessione ha fatto** + il **backlog COMPLETO verificato** (cross-check 9/6 contro: 7/6 handover §8 · Roadmap F0-F6 · Punto Situazione · Open Questions). Pensato per essere il "leggi-questo-primo".
>
> **Regole dure (invariate, sempre attive):** lavora su **`main`** (`git -C /Users/carlosanvoisin/claude`, MAI sul branch della worktree) · **Cowork DISMESSO** (solo Claude Code locale + routine cloud) · §13 riservatezze fornitori · §15 append-only · numeri/prezzi/stati contrattuali = **PROPOSTA da confermare**, mai auto-applicati · MAI `git add -A` · harvest-prima-di-prune · push dall'agente OK ma `git pull` prima.
>
> **Stato git al 9/6**: `main @ bd1d4ed`, in sync con `origin`, working tree pulito. Il plugin Obsidian Git auto-sincronizza ~ogni 10' → non assumere mai uno stato `main` statico.

## 1. Cosa ha fatto questa sessione (7→9/6) — tutto provato + committato

**Infrastruttura (l'ex-F1 + QA + cattura + doc):**
- **Sync Obsidian↔GitHub PROVATO 2 direzioni** — plugin Obsidian Git v2.38.3 (commit-and-sync + auto-pull 10', `data.json` gitignorato + documentato), `.gitignore` blindato (i `data.json` dei plugin possono avere segreti → mai su GitHub). → [[99 - System/Routines/_README|_README]] §Sync.
- **Routine cloud PROVATE** — scoperto che si pilotano da Code con **`RemoteTrigger`** (list/get/run/update), non solo browser. PM Digest **con M365 headless** + vault-link-checker → push su `main` → atterrati in Obsidian. 5 trigger cloud con prompt resi espliciti "push su main, no branch/PR".
- **QA branch** — −27 branch `claude/*` stale, −6 worktree residue, −1 branch `add-claude-github-actions` (workflow @claude inutile per repo-vault).
- **Cattura Code (16 sessioni recuperate)** — 16 sessioni vault grosse (28/5→6/6) mai indicizzate → recap creati. **Nessuna knowledge persa** (il contenuto era già nelle schede via cascata live; mancavano solo i recap-indice → ri-conferma KB Solidity F2). Aggiunto **catch-up self-heal** a `code-sessions-index`.
- **Doc Code-first** — CLAUDE.md §9/§9bis riscritte (3 runtime); Cowork dismesso marcato ovunque (§16/incipit/hook/system-consistency-check); fix puntatore Setup MOC; Mappa Skill (DC 4→6 + disambiguazione `.claude`); censita `radar-competitor` (autorata, non schedulata).

**Sessione 9/6 (Cowork dismesso):**
- **Harvest 3 commit stranded** — 2 branch `origin/claude/*` (sessioni **claude.ai** che branchano invece di scrivere su main) avevano lavoro 9/6 NON in main: **rifiuto Achipont**, **call Soolutions cessione-IP/fatture**, **allineamento team** (9 schede). Mergiati in main (conflitto Eldis risolto a unione). Schede passate da 21-28/5 → 9/6.
- **Bridge M365 ri-armato come failover** (Rischio #1) — task locale `pm-digest-mattutino` enabled, cron `30 9 * * 1-5` (dopo il cloud), **guardia anti-doppione** (gira solo se la daily di oggi manca). ⚠️ Resta **best-effort ad app Code aperta**, non failover a Mac spento.
- **obsidian-cli SBLOCCATO** — `~/.local/bin/obsidian` → CLI ufficiale (il symlink precedente puntava a un path AppTranslocation morto). Serve Obsidian aperto.
- **2 skill custom DC → Code** — `audio-transcriber-deepgram` + `downloads-cleaner-vault-import` copiate in `~/.claude/skills/` (lasciate anche in DC).
- **Achipont → `lost`** (rifiuto cliente 9/6) + task recupero relazionale Michele↔Gigi; cascata §6 + Master Facts.
- **F4 chiuso** — convenzione sessioni/worktree in CLAUDE.md §9ter + igiene-flag in `code-sessions-index`.

## 2. Stato fronti (verificato 9/6)

| Front | Stato | Note |
|---|---|---|
| F0 Fondamenta git | ✅ | remote privato, harvest, prune |
| F1 Automazioni (battito) | ✅ | routine cloud + sync provati; bridge failover ri-armato |
| F2 KB Solidity | ✅ | cert 🟢🟢🟡 (3 follow-up §6) |
| **F3 Skill custom** | 🔶 **PARZIALE — vedi §3.A** | fatto: obsidian-cli, 2 skill DC→Code, ruflo off, episodic-memory on · **mancano vault-health, wiki-lint, raw→vault + ottimizzazioni** |
| F4 Sessioni/worktree | ✅ | convenzione §9ter + igiene-flag |
| F5 CLAUDE.md Code-first | ✅ | §9/§9bis/§9ter + Cowork dismesso |
| **F6 Cadenza/meta-loop** | ❌ **NON FATTO** | weekly-review *del sistema* (ultimo fronte) |

## 3. 🔴 BACKLOG COMPLETO — cross-check, niente perso

### A) F3 — SKILL (il punto da non perdere) 🔶
**Da COSTRUIRE** (core F3, Roadmap §F3):
- **`vault-health`** — consolida vault-link-checker + moc-refresh + system-consistency-check in una skill Code invocabile/schedulabile. *(Priorità #1 secondo Punto Situazione §5 — chiude F3 e serve già.)*
- **`wiki-lint`** — orfani + dead-link + **contraddizioni** (NON installato; è il motore "contraddizioni" mancante della KB-solidity).
- **ingest "raw→vault"** — generalizza il flusso Downloads/`_DA_DOWNLOADS_*` → inbox classificato (oltre `transcript-processing`).

**Da OTTIMIZZARE** (Punto Situazione §3 shortlist; obsidian-cli ✅ già fatto 9/6):
- `pm-method` description **975 char → ~350** (trigger troppo largo, soffoca email-drafting/investment-proposal-drafting).
- `desktop-commander-guide` — togliere i trigger "hi/hello/help" (falsi inneschi).
- `obsidian-bases` — spostare il reference lungo (497 righe) in `references/`.
- `website-builder-setup` — archiviabile dopo l'uso.

**Wishlist FUTURE** (Punto Situazione §5, parcheggiate): call-recap→vault pipeline (alta leva) · semantic vault search/KG · skill-builder · workspace-memory consolidation. **Buchi**: skill custom produzione Office/"deck HeyAI" (oggi dipendi dai plugin) · skill CRM/stakeholder-velocity.
> Priorità suggerita: **vault-health → call-recap + ingest**.

### B) F6 — meta-loop weekly del sistema ❌
Weekly-review *del sistema stesso* (non dei progetti): routine cloud che produce un prep-doc con le anomalie della settimana. Assorbe le raccomandazioni "Insight" (§3.C).

### C) "Insight" — 6 raccomandazioni PKM aperte (sessione 11/5, confluiscono F3/F6)
pattern-scan "vault generativo" · MOC tematici · Progressive Summarization L4 · resurfacing · tagging concettuale · distill-before-archive. **Mai affrontate.**

### D) Decisioni §6 (Carlo) — tutte ancora aperte
- **4 checkbox OT** `[reconciled — verificare]` → confermare e togliere flag.
- **PDF Wave 2 copertina €315K→€300K** — rigenerare il file PDF cliente prima di invii esterni (difetto KB Solidity §4.3; il `.md` cita il 315 solo come storico).
- **Numeri `[PROPOSTA]` PresidIA**: €15-20K integrazione pagamenti · €7K/agente pattern-detection · 96-98% accuracy OCR → confermare o lasciare flag. *(€44K/€27K erano già provv-confermati 7/6.)*
- **#16 grezzi** `_import-*`/`_DA_DOWNLOADS_*`: lasciare/spostare/cancellare (6 schede li referenziano) + **`axel.txt` da cancellare a mano** (§13).
- `HeyAI Job descriptions.txt` vuoto (ri-esporta solo se serve, minore).

### E) 🔐 Sicurezza (Open Questions)
Rotazione credenziali fatta ✅ → verificare copra anche i **2 token onboarding LeadMe** + gli **SMB path Eldis** in chiaro su Teams; spostare in password manager.

### F) Progetto/governance — vivono in [[99 - System/Open Questions]] (NON lavoro di sistema, da NON perdere)
- **#19/#29** IP Soolutions Wave 2: **contratto interno HeyAI↔Soolutions da formalizzare** prima firma cliente (avv. Longo).
- **#35** Stato contrattuale NOT: formalizzazione + cosa comunicare a Verrengia + sollecitare Donzelli + **recuperare documenti primari** (email approvazione 03/04 + fatture acconti — gap probatorio).
- **#36** 🔴 Due diligence **"Paolo Verrengia"** (possibile frode fiscale): invio documenti **SOSPESO** finché non chiude (Roberta + ODCEC + CCIAA).
- **#31-33, #38** Angelini Academy: soft-defer; identità concorrente, economia FuturItaly 2026, Forum-Nobel = visione non asset, pricing (Angelini congelato a fasi 9/6, coesiste €49,5K core).
- **🆕 #69 (9/6, dall'harvest)** — **perimetro cessione IP chiarito**: Soolutions cede l'ecosistema gestionale custom MA **esclude i modelli AI** (open-source riusati); modello trainato al cliente uso illimitato/a-vita + ritrainabile. **PENDENTE: Federico/Simone devono produrre la lista delle componenti terze non-cedibili.** → OT §Log 9/6.
- **🆕 #70 (9/6, dall'harvest)** — **condizione vincolante Bruno sul lock-in modelli**: Soolutions deve consegnare spec modello base + spec retraining (terzo dev competente deve poter ritrainare). **AZIONE: Carlo formalizza via email a Soolutions + attende conferma scritta + riflettere nei contratti** (OT modificabile, Eye Cookies da creare ex novo).

### G) Nuovi da questa sessione (oltre a quanto sopra)
- **Achipont recupero**: status `lost` ma task aperto = ultimo tentativo relazionale Michele↔Gigi prima di archiviare. Vedi [[20 - Projects/Achipont/Achipoint|Achipoint]].
- **2 branch `origin/claude/*` mergeati** (achipont-outlook-email, contract-concerns-federico-simone): 0 commit unici dopo l'harvest → **prunabili** (Carlo li ha lasciati per ispezione su GitHub).
- **Contenuto 9/6 harvested da rivedere**: le schede OT/Eye Cookies/Federico/Simone/Eldis (tutte updated 9/6) hanno il recap delle call 9/6 — verificare se contengono altri follow-up/decisioni da actionare oltre #69/#70.
- **Rischio #1 residuo**: il bridge digest è best-effort (app aperta), non Mac-off. Opzione: **2° runtime cloud** per un failover vero unattended.
- **`radar-competitor`** autorata ma non schedulata: decidere se schedularla (cloud, settimanale) o lasciarla on-demand.
- **git filter-repo** (opz): ripulire dalla history i segreti redatti (commit `8435d2b`) + il recap dettagliato `3dfa5063` (personale §11, ora stub ma la versione lunga è in 1 commit storico). Repo privato + credenziali ruotate = già accettabile.

## 4. Architettura sistema (riferimento rapido)
- **3 runtime** (CLAUDE.md §9): **Cloud** claude.ai (5 routine unattended, Mac-off, push su main, via `RemoteTrigger`) · **Code-locale** `~/.claude/scheduled-tasks/` (code-sessions-index on, system-consistency-check on, pm-digest bridge on=failover; best-effort ad app aperta) · **Plugin Obsidian Git** (sync main↔Obsidian↔GitHub ~10', ad app aperta).
- **Loop**: lavori in Code locale → commit su `main` (`git -C ~/claude`) → plugin push GitHub → routine cloud pushano su main → plugin pull in Obsidian.
- **Due `.claude` distinte**: `~/claude/.claude/` (vault: skills/hooks/settings vault) vs `~/.claude/` (globale: skills globali, scheduled-tasks, projects/JSONL, plugins).

## 5. Raccomandazione prossimo
1. **F3 skill** (il tuo flag): partire da **`vault-health`** (chiude F3 + sostituisce 3 audit) poi `wiki-lint` + le ottimizzazioni rapide (pm-method description). Metodo: brainstorming → spec → implementa.
2. Oppure **F6** (meta-loop) se preferisci chiudere i fronti-sistema.
3. **Quick win §6** in parallelo: 4 checkbox OT + PDF Wave2 copertina (sono brevi).
4. **#69/#70 IP Soolutions** (governance): hanno azioni concrete pendenti (lista componenti + email condizione vincolante) — non lavoro di sistema ma con deadline implicita (contratti).
