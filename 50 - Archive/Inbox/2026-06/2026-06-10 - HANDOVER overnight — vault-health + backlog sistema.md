---
type: handover
created: 2026-06-10
updated: 2026-06-10
tags: [system, handover, F3, vault-health, overnight, backlog]
aliases: [Handover overnight 10-6, Handover vault-health, Handover notte]
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Consegna assorbita dal consolidamento serale. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# 🌙 HANDOVER → sessione overnight: F3 vault-health + backlog sistema

> **Innesto** per il prompt-contenitore di Carlo (che ha già metodo, processo, contesto e regole dure). Qui **solo lo specifico**: stato verificato della sessione 9→10/6, il design `vault-health` approvato, il backlog completo, e il piano *analisi → ok → esecuzione notturna* con i confini di sicurezza per l'autonomia.
>
> **Stato git al passaggio**: `main @ c187707`, in sync con `origin`, working tree pulito (solo `.obsidian/graph.json` = rumore runtime Obsidian, lo committa il plugin). Il plugin Obsidian Git auto-sincronizza ~ogni 10' → non assumere mai uno stato `main` statico.

## 0. Regole-lampo (richiamo; il resto vive nel prompt-contenitore)
- Lavora su **`main`** (`git -C /Users/carlosanvoisin/claude`), **`git pull` prima di scrivere**, **commit per-file** dopo review (MAI `git add -A`), push su `main` (`git push origin HEAD:main`, no branch/PR).
- **Co-author trailer** sui commit: `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>` (convenzione confermata sui commit recenti del repo).
- §15 **append-only** · §13 **riservatezze fornitori** · numeri/prezzi/stati contrattuali = **PROPOSTA da confermare**, mai auto-applicati · §15.quinquies **verifica strutturale** (path + criterio espliciti, non solo metriche).
- **Single-writer**: stanotte UNA sola sessione attiva sul vault. Stasera una sessione parallela ha generato un commit concorrente (`e998b78`), poi chiusa. Due writer sullo stesso `main` = rischio scritture concorrenti.
- Sync **app-bound**: tieni Obsidian aperto perché l'output rientri in locale (pull-on-boot + ogni 10').
- **Regola d'oro**: una nuova automazione NON è "fatta" finché il suo output non **atterra in Obsidian** ed è **provata end-to-end**, non solo creata.

## 1. Cosa ha fatto la sessione 9→10/6 (verificato, non narrato)

- **Step 1 SYNC — health-check CERTIFICATO con prova fresca**. Era già implementato il 7/6, ma "provato 2 giorni fa" ≠ "funziona oggi" → ri-provato end-to-end:
  - **Push** Code→GitHub ✅ — 3 commit, ognuno con `HEAD == origin/main` verificato.
  - **Pull** GitHub→locale ✅ **prova attiva**: lanciata `vault-link-checker` in cloud via `RemoteTrigger` → il suo commit `511b97b` tirato in locale via `git pull` **fast-forward osservato**.
  - **Plugin** Obsidian-side ✅ (Carlo: status bar "synced" + commit su `main`).
  - **Config audit** ✅ **sana, 0 modifiche** — `data.json` = tabella di ripristino `_README` §Sync; `disablePopups` tenuto `false` (con 3 writer è l'unico avviso conflitti), `syncMethod: merge` tenuto (rebase rischioso in auto-sync), `credential.helper: osxkeychain`.
  - Record completo: [[2026-06-09 - Health-check Sync (F1 ri-verifica)]].
- **Scoperta**: gli step 1-5 dell'handover 7/6 erano **già completati** (7→9/6). Il prompt incollato a inizio sessione era quello *vecchio* del 7/6 (pre-esecuzione). **Stato reale fronti**: **F0 ✅ · F1 ✅ · F2 ✅ · F3 🔶 · F4 ✅ · F5 ✅ · F6 ❌**.
- **F3 — brainstorming `vault-health` → design APPROVATO** (3 decisioni di Carlo, vedi §2).
- **Audit fresco** (output reale di `vault-link-checker`): **K=37 broken link, J=4, P=0** — dettaglio in [[Vault Link Audit]] §"Audit 2026-06-09".
- **Evento gestito**: sessione Claude parallela (commit `e998b78` — hook `SessionStart` `vault-align-check.sh`, lavoro valido) rilevata durante l'health-check → Carlo l'ha chiusa → single-writer.

## 2. Design `vault-health` — APPROVATO (da implementare)

**Decisioni Carlo (vincolanti)**: (a) architettura **ibrida**; (b) **3 sub-check ora** + slot `contradictions` vuoto; (c) i 37 broken = azione operativa **separata** dalla skill.

- **Forma**: `.claude/skills/vault-health/SKILL.md` (come le altre skill custom, versionata nel repo → accessibile a Code **e** alle routine cloud che clonano il repo).
- **Struttura modulare**: una sezione per sub-check, invocazione parametrica `vault-health <check>` con `check ∈ {links, moc, consistency, all}` (default `all`):
  - `links` ← assorbe `vault-link-checker` (wikilink/frontmatter rotti, alias-aware v4, rolling-window)
  - `moc` ← assorbe `moc-refresh` (drift MOC, auto-patch-safe counters/versione/updated)
  - `consistency` ← assorbe `system-consistency-check` (drift CLAUDE.md §9 ↔ scheduler ↔ SKILL)
  - `contradictions` ← slot **dichiarato ma vuoto** (motore semantico, sessione dedicata futura)
- **Routine → thin-wrapper**: ogni `99 - System/Routines/*.md` diventa "Read `.claude/skills/vault-health/SKILL.md`, esegui la sezione §`<check>`, append-only §15, push su `main`". I 5 trigger cloud + i cron restano **INVARIATI** (battito granulare preservato, logica DRY nella skill).
- **Vincolo runtime** (verificato): i sub-check non girano tutti nello stesso posto. `links` + `moc` = routine **cloud** (bastano Read/Glob). `consistency` = task **Code-locale** (serve `list_scheduled_tasks` + `RemoteTrigger`, assenti nelle routine cloud headless). On-demand **da Code** = tutti e 3.
- **Output doppio binario**: ogni sub-check continua a scrivere nel suo file dedicato (`Vault Link Audit` / `MOC Refresh Log` / `System Consistency Audit`) → rolling-window e alert preservati. In più, `all` on-demand → **mini-report di sintesi in chat** (K broken, drift MOC, drift consistency), nessun file nuovo.
- **Auto-fix policy (non regredire)**: `links` flag-only · `moc` auto-patch-safe · `consistency` flag-only.
- **Gap-closure (valore netto F3)**: estendere `consistency` a cross-checkare anche le **routine cloud** via `RemoteTrigger:list` (oggi vede solo lo scheduler locale) + bonificare i **path Cowork morti** (`~/Documents/Claude/Scheduled/` → realtà attuale: `99 - System/Routines/*.md` cloud, `~/.claude/scheduled-tasks/` locale).
- **Cosa NON fa** (YAGNI + §15): no auto-fix wikilink, no creazione schede, no modifica numeri Master Facts, no contraddizioni. Sub-check **isolati**: uno fallisce → gli altri proseguono + lo segnala.

## 3. Backlog COMPLETO (cross-check handover 7/6 §8 + 9/6 §3 + Roadmap + Open Questions)

### F3 — Skill & tooling (fronte in corso)
1. **Implementare `vault-health`** (§2): creare la skill (3 sub-check) + refactor dei 3 file routine in thin-wrapper + estendere `consistency` (cross-check cloud + path morti). **Provare end-to-end** (es. far girare un wrapper via `RemoteTrigger` e verificare che l'output atterri, come stasera).
2. **`wiki-lint` / `contradictions`**: motore contraddizioni cross-schede (slot `vault-health`, sessione dedicata — è il pezzo mancante della KB-solidity).
3. **`raw→vault`**: skill ingest generica (oltre `transcript-processing`) per `_DA_DOWNLOADS_*`/Downloads → inbox classificato.
4. **Ottimizzazioni skill** (handover 9/6 §3.A): `pm-method` description 975→~350 char (trigger troppo largo) · `desktop-commander-guide` togliere trigger "hi/hello/help" · `obsidian-bases` spostare reference (497 righe) in `references/` · `website-builder-setup` archiviabile.

### F6 — Meta-loop (ultimo fronte-sistema, ❌ non fatto)
- Weekly-review *del sistema stesso* (non dei progetti): routine cloud che produce un prep-doc con le anomalie della settimana. Assorbe le 6 raccomandazioni **Insight** (pattern-scan "vault generativo", MOC tematici, Progressive Summarization L4, resurfacing, tagging concettuale, distill-before-archive).

### Azione operativa — 37 broken link (da [[Vault Link Audit]])
- **SAFE / meccanici** (bonificabili in autonomia): Cluster C area-alias ×2 (`Area - Governance`, `Area - Cybersecurity`) · Cluster D `[[Arianna]]` alias in `Arianna Giordanella` · `[[Luca (Silencio)]]` path fix · Cluster A path-update inbox archiviata ×16 (incl. **Master Facts** 3 link) · Cluster B system archiviati ×9 · `.md`-extension fix · J=4 stakeholders Angelini con nota parentetica (file Inbox maggio).
- **RICHIEDE OK Carlo**: `[[Luciano Pecorella]]` (persona senza scheda **con task assegnato in Open Tasks** — chi è? creare scheda?) · `[[Simona Velotta]]` (creare o rimuovere link?) · errore sintassi YAML in `Accessibility Specs Sito Nuovo Angelini Academy.md` (URL non quotata → rompe il parser alias).
- Placeholder by-design (nessuna azione): `[[Verificare]]`, `[[<target>]]` template, code-recap placeholder.

### Decisioni §6 (Carlo) — tutte aperte
- 4 checkbox OT `[reconciled — verificare]` → confermare e togliere flag.
- PDF Wave 2 copertina €315K→€300K → rigenerare il file cliente.
- Numeri `[PROPOSTA]` PresidIA (€15-20K integrazione · €7K/agente · 96-98% OCR) → confermare o lasciare flag.
- #16 grezzi `_import-*`/`_DA_DOWNLOADS_*` (lasciare/spostare/cancellare) + `axel.txt` da cancellare a mano (§13).

### Governance / Open Questions (non lavoro di sistema, deadline implicita)
- **#69** IP Soolutions: lista componenti terze **non-cedibili** che Federico/Simone devono produrre.
- **#70** condizione vincolante Bruno (lock-in modelli): Carlo formalizza via email a Soolutions + attende conferma scritta.
- **🔐 Sicurezza**: 2 token onboarding LeadMe + SMB path Eldis in chiaro su Teams → password manager.

## 4. Piano per la notte — analisi → ok → esecuzione

**Fase 1 — ANALISI (prima dell'ok di Carlo)**
1. Allinea: `git pull`. Rileggi CLAUDE.md (è cambiato: hook §9ter) + questo handover + [[Vault Link Audit]] + [[2026-06-07 - HANDOVER — chiusura F1 (sync vault + QA + cattura Code)]] + [[2026-06-09 - HANDOVER — stato completo post sessione sync-F4]] + [[KB Solidity Report]] + [[_README]] + [[2026-06-06 - Roadmap Second Brain Code-era]] + [[Open Questions]].
2. Conferma lo stato (non fidarti della memoria: `RemoteTrigger:list` per le routine cloud, `list_scheduled_tasks` per i task locali).
3. Per ogni fronte: **spec → piano** (`writing-plans`). Presenta a Carlo il **piano notturno dettagliato** con ordine, stime e confini.

**Fase 2 — OK di Carlo** sul piano.

**Fase 3 — ESECUZIONE overnight (autonoma, con confini §5)**. Ordine consigliato:
1. **`vault-health`** — implementa skill + refactor 3 wrapper + estendi `consistency`. Prova end-to-end. (`skill-creator` + `executing-plans`; `subagent-driven-development` dove indipendente.)
2. **37 broken SAFE** — bonifica meccanica (alias + path-update), grep-on-rename §15, verifica con un nuovo run `links`. Lascia flaggati i 3 che richiedono OK.
3. **Ottimizzazioni skill rapide** (pm-method description, ecc.).
4. **F6 meta-loop** — design + routine cloud (con `schedule`/`RemoteTrigger`), provata end-to-end.
- Commit **incrementali per-file + push** dopo ogni unità (atterra in Obsidian progressivamente). **Verifica strutturale §15.quinquies** dopo ogni fronte. `dispatching-parallel-agents` dove i task sono indipendenti.

## 5. ⚠️ Confini di sicurezza per l'autonomia notturna (CRITICO)

- **SAFE in autonomia**: creare/refactor skill e routine-wrapper · fix broken link **meccanici** (alias mancanti, path-update di file archiviati) · ottimizzazioni `description` skill · append a doc/log · design + scrittura F6 · spec/piani.
- **RICHIEDE OK puntuale di Carlo — NON eseguire di notte**: creare **schede persona** (Luciano Pecorella, Simona Velotta) · modificare **numeri/prezzi/stati contrattuali** (§6, governance, Master Facts) · toccare i **numeri ufficiali** del Master Facts Sheet · qualsiasi **comunicazione/invio a terzi** (email Soolutions #70, ecc.) · decisioni §6.
- **In dubbio**: lascia **"🔍 Da triagiare"** flaggato e **prosegui sul safe** — non improvvisare su ciò che è ambiguo o sensibile. Meglio un fronte in meno che un fatto sbagliato committato di notte.
- **Ad ogni commit**: pull-before-write, per-file, co-author trailer, push su main; verifica `HEAD==origin/main`.

---

> **Catena di lettura** per la nuova sessione: prompt-contenitore (metodo/regole) → **questo handover** → CLAUDE.md (delta hook §9ter) → [[Vault Link Audit]] → handover 7/6 e 9/6 (storico) → Roadmap/Open Questions per il dettaglio fronti. Con questi, analisi completa possibile.
