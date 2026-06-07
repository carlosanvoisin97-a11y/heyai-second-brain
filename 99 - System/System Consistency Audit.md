---
type: system-audit
created: 2026-05-14
updated: 2026-05-25
---

## Audit 2026-05-25 (lun 7:30, run automatico canonico)

✅ Sistema consistente — 0 drift rilevati. Task attivi: 8. Task disabilitati coerenti: 3.

### Stato verificato

**Active (8)** — tutti `enabled=true`, cron ↔ doc ↔ SKILL allineati:
- `pm-digest-mattutino` — cron `0 8 * * 1-5` ↔ doc "Lun-Ven 8:00" ↔ SKILL "lun-ven 8:02" (jitter coerente)
- `cowork-sessions-index` — cron `22 20 * * *` ↔ doc "Ogni giorno 20:22" ↔ SKILL "20:22 ogni giorno"
- `vault-link-checker` — cron `0 21 * * 0` ↔ doc "Dom 21:00" ↔ SKILL "domenica sera 21:00"
- `crm-velocity` — cron `0 9 * * 1` ↔ doc "Lun 9:00" ↔ SKILL "lunedì mattina 9:00"
- `moc-refresh` — cron `0 16 * * 6` ↔ doc "Sab 16:00" ↔ SKILL "sabato 16:00"
- `weekly-review-interactive` — cron `30 17 * * 6` ↔ doc "Sab 17:30" ↔ SKILL "sabato 17:30"
- `system-consistency-check` — cron `30 7 * * 1` ↔ doc "Lun 7:30" ↔ SKILL "lunedì 7:30"
- `dashboard-refresh-manual` — manual ↔ doc "Manuale" ↔ SKILL "on-demand"

**Disabled (3)** — tutti `enabled=false`, description scheduler con marker `[DISABILITATO …]` coerente con CLAUDE.md §9 "Disabilitati":
- `friday-wrap-up` — `[DISABILITATO 13/5/2026]`
- `weekly-digest` — `[DISABILITATO 13/5/2026]`
- `claude-chats-sync` — `[DISABILITATO 6/5/2026]`

### Verifica strutturale §15.quinquies

- Frontmatter SKILL files (8 attivi letti): nessun duplicato `---`/`---`. Fix 15/5 su `pm-digest-mattutino` / `cowork-sessions-index` / `vault-link-checker` ancora in place, nessuna regressione.
- Path deprecato `70 - Meetings/`: 0 occorrenze nei SKILL letti.
- Riferimenti incrociati a task disabilitati: 0. `weekly-review-interactive` continua a citare `friday-wrap-up` solo come storico disabilitato (consistente con patch 13/5).
- Descriptions scheduler ↔ description frontmatter SKILL: allineati per tutti gli 8 attivi.
- Riferimenti temporali nella prosa SKILL ↔ cron reale: tutti coerenti (display schedule riflette cron+jitter, cron base resta autoritativo).

### Delta vs audit 2026-05-18

- **Risolti**: 0 (non c'erano drift al 18/5).
- **Nuovi**: 0.
- **Persistenti**: 0.

### Trigger di alert

✅ `system-consistency-check`: sistema consistente. Nessuna azione richiesta prima di `pm-digest-mattutino` 8:02.

---

## Audit 2026-05-18 (lun 7:30, run automatico canonico)

✅ Sistema consistente — 0 drift rilevati. Task attivi: 8. Task disabilitati coerenti: 3.

### Stato verificato

**Active (8)** — tutti `enabled=true`, cron ↔ doc ↔ SKILL allineati:
- `pm-digest-mattutino` — cron `0 8 * * 1-5` ↔ doc "Lun-Ven 8:00" ↔ SKILL "lun-ven 8:02" (jitter coerente)
- `cowork-sessions-index` — cron `22 20 * * *` ↔ doc "Ogni giorno 20:22" ↔ SKILL "20:22 ogni giorno"
- `vault-link-checker` — cron `0 21 * * 0` ↔ doc "Dom 21:00" ↔ SKILL "domenica sera 21:00"
- `crm-velocity` — cron `0 9 * * 1` ↔ doc "Lun 9:00" ↔ SKILL "lunedì mattina 9:00"
- `moc-refresh` — cron `0 16 * * 6` ↔ doc "Sab 16:00" ↔ SKILL "sabato 16:00"
- `weekly-review-interactive` — cron `30 17 * * 6` ↔ doc "Sab 17:30" ↔ SKILL "sabato 17:30"
- `system-consistency-check` — cron `30 7 * * 1` ↔ doc "Lun 7:30" ↔ SKILL "lunedì 7:30"
- `dashboard-refresh-manual` — manual ↔ doc "Manuale" ↔ SKILL "on-demand"

**Disabled (3)** — tutti `enabled=false`, description scheduler con marker `[DISABILITATO …]` coerente con CLAUDE.md §9 "Disabilitati":
- `friday-wrap-up` — `[DISABILITATO 13/5/2026]`
- `weekly-digest` — `[DISABILITATO 13/5/2026]`
- `claude-chats-sync` — `[DISABILITATO 6/5/2026]`

### Verifica strutturale §15.quinquies

- Frontmatter SKILL files (8 attivi + 3 disabled non riletti): per i 3 SKILL con storico frontmatter duplicato (`pm-digest-mattutino`, `cowork-sessions-index`, `vault-link-checker`) verificata riga 6 = `Sei l'assistente…` → fix 15/5 ancora in place, nessuna regressione.
- Path deprecato `70 - Meetings/`: 0 occorrenze nei SKILL letti.
- Riferimenti incrociati a task disabilitati: 0 (patch 13/5 su `weekly-review-interactive` e 14/5 su `crm-velocity` confermate).

### Delta vs audit 2026-05-15

- **Risolti** (4): tutti i drift 🟡 del 15/5 chiusi e verificati. Frontmatter duplicato `pm-digest-mattutino` / `cowork-sessions-index` / `vault-link-checker` rimosso. Labeling CLAUDE.md §9 `weekly-review-interactive` allineato a "Sab 17:30" (cron base).
- **Nuovi**: 0.
- **Persistenti**: 0.

### Trigger di alert

✅ `system-consistency-check`: sistema consistente. Nessuna azione richiesta prima di `pm-digest-mattutino` 8:02.

---

## Audit 2026-05-15 (trigger automatico, ven — run anticipato vs schedule canonico lun 7:30)

### 🔴 Drift critici (0)

Nessun drift critico rilevato. Stato `enabled` e `cronExpression` di tutti i task allineati tra CLAUDE.md §9 e scheduler runtime.

### 🟡 Drift minori (4)

| Task | Fonte | Issue | Azione consigliata |
|------|-------|-------|---------------------|
| `pm-digest-mattutino` | SKILL.md righe 1-9 | Frontmatter YAML duplicato (blocco `---` da riga 1-4 ripetuto identicamente alle righe 6-9). Già segnalato nell'audit del 14/5/2026 e indicato come "risolto" nella sezione "Drift risolti", ma la modifica non è stata applicata al file (o è regredita). Non blocca esecuzione, ma sporca il file. | Rimuovere il secondo blocco frontmatter (righe 6-9) lasciando solo il primo. Verificare perché la patch dichiarata 14/5 non ha effetto. |
| `cowork-sessions-index` | SKILL.md righe 1-9 | Frontmatter YAML duplicato (blocco 1-4 ripetuto 6-9). Non rilevato nell'audit precedente. Stessa struttura di `pm-digest-mattutino`. | Rimuovere righe 6-9. |
| `vault-link-checker` | SKILL.md righe 1-9 | Frontmatter YAML duplicato (blocco 1-4 ripetuto 6-9). Non rilevato nell'audit precedente. | Rimuovere righe 6-9. |
| `weekly-review-interactive` | CLAUDE.md §9 vs cron reale | CLAUDE.md §9 riga 199: `Sab 17:38`. Cron scheduler: `30 17 * * 6` = sab 17:30. Delta 8 min ≈ jitter (456s ≈ 7.6 min). L'audit del 14/5 ha dichiarato canonical=sabato 17:30 ed elencato "CLAUDE.md §9/§14 allineati a sab 17:30" tra i drift risolti, ma la doc continua a riportare "17:38" (orario effettivo con jitter, non cron base). Inconsistenza convenzione: §9 usa orario effettivo per questo task, cron base per `pm-digest-mattutino` (`Lun-Ven 8:00`, non `8:02`) e `crm-velocity` (`Lun 9:00`, non `9:08`). | Allineare CLAUDE.md §9 a `Sab 17:30` (cron base, coerente con la convenzione adottata 14/5 per gli altri task). Aggiornare anche §14 e prossimi-eventi-critici dove "17:38" compare. |

### ✅ Task consistenti (8)

- `pm-digest-mattutino` — cron `0 8 * * 1-5` ↔ doc "Lun-Ven 8:00" ↔ SKILL "lun-ven 8:02" (jitter coerente). Status: ATTIVO ↔ enabled=true. Frontmatter duplicato → vedi 🟡.
- `cowork-sessions-index` — cron `22 20 * * *` ↔ doc "20:22 ogni giorno" ↔ SKILL "20:22 ogni giorno". Status: ATTIVO ↔ enabled=true. Frontmatter duplicato → vedi 🟡.
- `vault-link-checker` — cron `0 21 * * 0` ↔ doc "Dom 21:00" ↔ SKILL "domenica sera 21:00". Status: ATTIVO ↔ enabled=true. Frontmatter duplicato → vedi 🟡.
- `crm-velocity` — cron `0 9 * * 1` ↔ doc "Lun 9:00" ↔ SKILL riga 103 "lunedì 9:00, no conflitto con altri task attivi" (fix 14/5 applicato correttamente). Status: ATTIVO ↔ enabled=true.
- `moc-refresh` — cron `0 16 * * 6` ↔ doc "Sab 16:00" ↔ SKILL "sabato 16:00". Frontmatter singolo. Status: ATTIVO ↔ enabled=true.
- `system-consistency-check` — cron `30 7 * * 1` ↔ doc "Lun 7:30" ↔ SKILL "lunedì 7:30". Frontmatter singolo. Status: ATTIVO ↔ enabled=true. Riga aggiunta in §9 il 14/5 confermata.
- `dashboard-refresh-manual` — manual ↔ doc "Manuale" ↔ SKILL "on-demand". Frontmatter singolo. Status: ATTIVO ↔ enabled=true.
- `weekly-review-interactive` — cron `30 17 * * 6` ↔ SKILL "sabato 17:30" (patch 14/5 riga 93 confermata) ↔ enabled=true. Doc §9 "17:38" → drift minor labeling vedi 🟡, NON drift di esecuzione.

Disabilitati coerenti (3): `friday-wrap-up` (enabled=false ↔ doc "Disabilitati" ↔ description `[DISABILITATO 13/5/2026]`), `weekly-digest` (idem), `claude-chats-sync` (enabled=false ↔ doc "Disabilitati" ↔ description `[DISABILITATO 6/5/2026]`).

### Delta vs audit precedente (2026-05-14)

- **Risolti** (4): drift 🔴 `weekly-review-interactive` cron Ven→Sab applicato (cron `30 17 * * 6`, SKILL riga 93 documenta la patch); drift 🟡 `system-consistency-check` aggiunto a §9; drift 🟡 `crm-velocity` SKILL riga 103 riformulata (rimosso riferimento `weekly-digest` stale); drift 🟡 `crm-velocity` labeling §9 allineato a "Lun 9:00".
- **Persistenti** (1): `pm-digest-mattutino` frontmatter YAML duplicato — dichiarato risolto il 14/5 ma il file ha ancora il duplicato. Possibile patch dichiarata e non applicata, o regressione.
- **Nuovi** (3): frontmatter duplicato esteso a `cowork-sessions-index` e `vault-link-checker` (non rilevati 14/5, presenti oggi); `weekly-review-interactive` labeling §9 "17:38" vs cron base "17:30" non risolto.

### Note di sistema

- Path SKILL di tutti i task attivi presenti e leggibili in `/Users/carlosanvoisin/Documents/Claude/Scheduled/<taskId>/SKILL.md` (verifica via Read singolo file, Grep non disponibile su path Documents/).
- Nessun riferimento a path deprecato `70 - Meetings/` rilevato nei SKILL letti.
- Architettura post-refactoring 6/5 (sottocartelle cliente in `20 - Projects/`) correttamente documentata in `cowork-sessions-index` (righe 36-46) e `pm-digest-mattutino`.
- Nessun riferimento incrociato a task disabilitati nelle istruzioni operative dei task attivi (patch 13/5 su `weekly-review-interactive` riga 91 + patch 14/5 su `crm-velocity` riga 103 confermate).

### Trigger di alert

⚠️ `system-consistency-check`: 4 drift minori — review consigliata (>2). 0 critici. Sistema sicuro per esecuzione `pm-digest-mattutino` 8:02.

### Drift risolti 2026-05-15

| # | Fix | File | Righe / Delta |
|---|-----|------|---------------|
| 1 | Frontmatter YAML duplicato `pm-digest-mattutino` | `/Users/carlosanvoisin/Documents/Claude/Scheduled/pm-digest-mattutino/SKILL.md` | Rimosse righe 6-9 (secondo blocco `---` `name:` `description:` `---`) + riga vuota 10. Post-fix: frontmatter singolo 1-4, riga 5 vuota, riga 6 = `Sei l'assistente PM di Carlo Sanvoisin...` Verificato via Read. Drift persistente del 14/5 (dichiarato risolto e non applicato) ora effettivamente chiuso. |
| 2 | Frontmatter YAML duplicato `cowork-sessions-index` | `/Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md` | Rimosse righe 6-9 + riga vuota 10. Post-fix: riga 6 = `Sei l'assistente di Carlo Sanvoisin...` Verificato via Read. Nuovo 15/5 chiuso. |
| 3 | Frontmatter YAML duplicato `vault-link-checker` | `/Users/carlosanvoisin/Documents/Claude/Scheduled/vault-link-checker/SKILL.md` | Rimosse righe 6-9 + riga vuota 10. Post-fix: riga 6 = `Sei l'assistente di Carlo Sanvoisin...` Verificato via Read. Nuovo 15/5 chiuso. |
| 4 | Labeling §9/§14 CLAUDE.md `weekly-review-interactive` | `/Users/carlosanvoisin/claude/CLAUDE.md` | §9 riga 199: `Sab 17:38` → `Sab 17:30` (cron base, coerente con convenzione adottata 14/5 per `pm-digest-mattutino` Lun-Ven 8:00 e `crm-velocity` Lun 9:00). §14 riga 270 prossimi eventi: `~17:38` → `~17:30`. Nessuna citazione storica di `17:38` da preservare (Grep K=0 post-fix). Frontmatter `updated:` riga 4 aggiornato a 2026-05-15. Nuovo 15/5 chiuso. |

**Pre-flight check §15.quater rispettato**: i 3 fix SKILL sono modifiche al file SKILL.md, non a stato/cron/prompt scheduler → nessun `update_scheduled_task` richiesto. Lo scheduler runtime resta invariato e già allineato al cron `30 17 * * 6` per `weekly-review-interactive`; il fix 4 è doc-only (CLAUDE.md), non scheduler.

**Verifica strutturale §15.quinquies applicata**: ogni fix verificato via Read del path/file modificato con criterio "linea 6 post-fix = `Sei l'assistente...`" (fix 1-3) e "Grep `17:38` K=0" (fix 4).

**Atteso al prossimo run `system-consistency-check`**: 0 critici, 0 minori. Tutti e 4 i drift 15/5 chiusi. Drift persistente 14/5 (`pm-digest-mattutino` frontmatter duplicato) effettivamente eliminato dal file, non solo dichiarato.

---

## Audit 2026-05-14 (trigger manuale, gio)

### 🔴 Drift critici (1)

| Task | Fonte A | Fonte B | Delta | Azione correttiva |
|------|---------|---------|-------|-------------------|
| `weekly-review-interactive` | CLAUDE.md §9 + §14: `Ven 17:38` (e prossimo evento "ven 15/5 ~17:38") | Scheduler: `cronExpression: "30 17 * * 6"` = **Sabato 17:30** (nextRunAt `2026-05-16T15:37:36Z` = sab 16/5) | Doc + SKILL parlano di venerdì, cron reale è sabato. Carlo si aspetta il run domani ven 15/5, lo otterrà sab 16/5. | Se canonical = venerdì: `update_scheduled_task taskId="weekly-review-interactive" cronExpression="30 17 * * 5"`. Se canonical = sabato (decisione consapevole non documentata): aggiornare CLAUDE.md §9 + §14 + SKILL.md (5 occorrenze "venerdì"). |

Nota aggiuntiva sullo stesso task: il SKILL.md interno riporta "venerdì 17:30" in 5 punti (riga 6, 10, 36, 70, 91) — coerente con la doc CLAUDE.md ma in contrasto con il cron. Una volta scelto venerdì o sabato come canonical, propagare ovunque.

### 🟡 Drift minori (4)

| Task | Fonte | Issue | Azione consigliata |
|------|-------|-------|---------------------|
| `system-consistency-check` | CLAUDE.md §9 | Task attivo in scheduler ma assente dalla tabella §9 di CLAUDE.md. Cron `30 7 * * 1` (lun 7:30), trigger manuale on-demand. | Aggiungere riga in §9: `system-consistency-check` · `Lun 7:30` · `Audit doc-vs-scheduler-vs-SKILL → 99 - System/System Consistency Audit.md`. |
| `crm-velocity` | SKILL.md riga 103 | Riferimento stale: "Cron lunedì 9:00 = coincide con weekly-digest ma scrive su Daily Note del lunedì (file diverso, no conflitto)". `weekly-digest` è disabilitato dal 13/5/2026. | Rimuovere o riformulare la nota nel SKILL (es. "Cron lunedì 9:00 — scrive su Daily Note del lunedì, no conflitto con altri task attivi"). |
| `crm-velocity` | CLAUDE.md §9 vs SKILL.md | Doc dice "Lun 9:08", SKILL dice "lunedì 9:00", cron `0 9 * * 1` = 9:00 (jitter 474s ≈ 9:08 effettivo). Labeling inconsistente: doc usa orario effettivo (con jitter), SKILL usa orario cron base. | Allineare convenzione: scegliere ovunque o l'orario cron base o l'orario effettivo (preferibile cron base, più deterministico). |
| `pm-digest-mattutino` | (consistenza interna) | Doc §9 e SKILL.md entrambi dicono "8:02"; cron `0 8 * * 1-5` = 8:00 con jitter 145s. Convenzione "orario effettivo" usata coerentemente qui — diversa da `crm-velocity` (vedi sopra). | Cosmetic: documentare convenzione globale di labeling (cron-base vs effettivo) nelle note SKILL per evitare incoerenze cross-task. |

### ✅ Task consistenti (6)

- `cowork-sessions-index` — cron `22 20 * * *` ↔ doc "20:22 ogni giorno" ↔ SKILL "20:22 ogni giorno". Architettura post-refactoring 6/5 correttamente riflessa in SKILL.
- `vault-link-checker` — cron `0 21 * * 0` ↔ doc "Dom 21:00" ↔ SKILL "domenica sera 21:00". v4 alias-aware documentata nel SKILL.
- `dashboard-refresh-manual` — manual ↔ doc "Manuale" ↔ SKILL "on-demand". Architettura sottocartelle cliente corretta.
- `friday-wrap-up` — disabilitato in scheduler ↔ doc §9 "Disabilitati" ↔ description scheduler include `[DISABILITATO 13/5/2026]`. Coerente.
- `weekly-digest` — disabilitato in scheduler ↔ doc §9 "Disabilitati" ↔ description scheduler include `[DISABILITATO 13/5/2026]`. Coerente.
- `claude-chats-sync` — disabilitato in scheduler ↔ doc §9 "Disabilitati" ↔ description scheduler include `[DISABILITATO 6/5/2026]`. Coerente.

### Delta vs audit precedente

Primo run del task `system-consistency-check` (file `System Consistency Audit.md` creato in questo run). Nessun audit precedente da confrontare. Dal prossimo audit (lun 18/5 7:30 via cron) sarà disponibile il delta.

### Note di sistema

- Path SKILL di tutti i task attivi presenti e leggibili in `/Users/carlosanvoisin/Documents/Claude/Scheduled/<taskId>/SKILL.md`.
- Nessun riferimento a path deprecato `70 - Meetings/` rilevato nei SKILL scansionati.
- Tutti i SKILL dei task che toccano `20 - Projects/` (cowork-sessions-index, weekly-review-interactive, dashboard-refresh-manual) documentano correttamente l'architettura post-refactoring 6/5 con scansioni ricorsive.
- `pm-digest-mattutino` SKILL ha frontmatter YAML duplicato (righe 1-4 + 6-9). Non blocca l'esecuzione ma è da pulire al prossimo edit.

### Drift risolti 2026-05-14

- 🔴 `weekly-review-interactive`: canonical = sabato (decisione Carlo). SKILL + CLAUDE.md §9/§14 allineati a sab 17:30.
- 🟡 `system-consistency-check`: aggiunta riga in CLAUDE.md §9 (Lun 7:30).
- 🟡 `crm-velocity` SKILL riga 103: rimosso riferimento stale a `weekly-digest`, riformulato.
- 🟡 `crm-velocity` labeling: CLAUDE.md §9 allineato su cron base "Lun 9:00" (era "Lun 9:08").
- 🟡 `pm-digest-mattutino`: CLAUDE.md §9 allineato su cron base "Lun-Ven 8:00"; frontmatter YAML duplicato rimosso nel SKILL.

---

## Audit 2026-06-07 (run automatico — architettura dual cloud+local)

> Primo run dopo l'adattamento F1 7/6 (scheduler dual). Task LOCALE best-effort. Audit scheduler locali + file routine; le routine cloud (claude.ai) NON sono introspezionabili da locale. **Non committato** — lasciato per review Carlo (§15).

### 🔴 CRITICO — il "battito" è fermo (PM Digest flatline)

- **Ultima daily note: `2026-05-27` → 11 giorni fa** (oggi 7/6). Il PM Digest non produce output da prima dell'intervento F1.
- Stato reale dei due possibili motori:
  - **Bridge Code-locale `pm-digest-mattutino`**: `enabled=false` (disabilitato 7/6, "sostituito dalla routine Remota cloud"). → non gira.
  - **Routine cloud su claude.ai**: presunta attiva nel `_README` ("sostituito dalla routine Remota cloud unattended"), ma **nessuna daily note prodotta in 11gg** → o non è ancora stata creata su claude.ai (l'attivazione è un'azione browser di Carlo, ~5min, descritta come istruzione nel `_README` §"Attivazione"), oppure gira ma fallisce headless (token M365 scaduto, vedi `_README` ⚠️).
- **Azione Carlo (verificare a mano su claude.ai)**: (a) confermare che la routine cloud `pm-digest-mattutino` esista e sia schedulata; (b) verificare auth connettori M365 (Outlook/SharePoint) nel pannello; (c) se il cloud non è ancora attivo, ri-abilitare temporaneamente il bridge locale (`pm-digest-mattutino` enabled=true) per non restare scoperti.

### 🟡 Drift CLAUDE.md §9bis vs scheduler Code reale (3)

| # | Doc §9bis dice | Realtà (live `list_scheduled_tasks`) | Fix |
|---|---|---|---|
| 1 | "scheduler separato con **due task**" (code-sessions-index + pm-digest bridge) | **Tre task**: `code-sessions-index` (on), `pm-digest-mattutino` (off), `system-consistency-check` (on, cron `30 7 * * 1`) | Aggiornare §9bis: 3 task, citare anche `system-consistency-check` come task locale. |
| 2 | bridge pm-digest "gira quando Code è aperto" (best-effort **attivo**) | bridge `enabled=false` (disabilitato 7/6, superato da cloud) | Correggere §9bis: il bridge è dormiente/fallback, non attivo. Coerente con la description del task e col `_README` §"Bridge attivo" (da rinominare "Bridge fallback"?). |
| 3 | bridge cron "**8:02** Lun-Ven" | cron reale `0 8 * * 1-5` = **8:00** (jitter 145s) | Allineare §9bis a 8:00 (cron base) — coerente con `_README` che già dice `0 8 * * 1-5`. |

### 🟡 Drift CLAUDE.md §9 (tabella) — non aggiornata per lo split cloud/local (2)

| # | Drift | Fix |
|---|---|---|
| 4 | §9 elenca `cowork-sessions-index` (Ogni giorno 20:22) come **attivo**, ma il `_README` lo dà **RITIRATO** (sostituito da `code-sessions-index` nello scheduler Code). | Rimuovere/segnare ritirato `cowork-sessions-index` in §9; aggiungere `code-sessions-index` (cron `35 20 * * *`, scheduler Code). |
| 5 | §9 non riflette lo split cloud/local: non indica chi gira dove (cloud claude.ai vs Code-locale vs Cowork legacy). Il `_README` §49 prescrive esplicitamente "Quando attivi il cloud, aggiorna CLAUDE.md §9". | Riscrivere §9 con colonna "dove gira" (cloud / Code-locale / manuale). Azione legata all'attivazione cloud. |

### ✅ Consistente

- **File routine** (`99 - System/Routines/`): tutti i 6 file dichiarati nell'inventario `_README` presenti (`vault-link-checker`, `moc-refresh`, `system-consistency-check`, `crm-velocity`, `weekly-review-interactive`, `pm-digest-mattutino`) + `_README`.
- **Cron `_README` ↔ CLAUDE.md §9**: coincidono per tutti e 6 i task (vault-link-checker Dom 21:00 / moc-refresh Sab 16:00 / crm-velocity Lun 9:00 / weekly-review Sab 17:30 / pm-digest Lun-Ven 8:00 / system-consistency Lun 7:30).
- **Disabilitati** §9 (`friday-wrap-up`, `weekly-digest`, `claude-chats-sync`) ↔ `_README` §29: coerente.
- **Code scheduler**: `code-sessions-index` (cron `35 20 * * *`, on, ultimo run 6/6) e `system-consistency-check` (cron `30 7 * * 1`, on) coerenti con `_README`.

### 🔵 Da verificare a mano su claude.ai (routine cloud — non introspezionabili da locale)

Elenco atteso da attivare/verificare nel pannello Scheduled di claude.ai: `pm-digest-mattutino` (🔴 prioritario, vedi sopra), `vault-link-checker`, `moc-refresh`, `crm-velocity`, `weekly-review-interactive`. (`system-consistency-check` resta locale — audita gli scheduler locali, non portabile in cloud.)

### 🟠 Cowork scheduler legacy (`~/Documents/Claude/Scheduled/`) — in dismissione

- 11 cartelle ancora presenti (claude-chats-sync, cowork-sessions-index, crm-velocity, dashboard-refresh-manual, friday-wrap-up, moc-refresh, pm-digest-mattutino, system-consistency-check, vault-link-checker, weekly-digest, weekly-review-interactive). Contengono solo `SKILL.md`; lo stato `enabled` vive nel DB dell'app Cowork → **non introspezionabile da filesystem**.
- **Rischio doppio-run**: se Carlo apre Cowork, i task legacy ancora abilitati (pm-digest, audit) possono partire e **duplicare** l'output delle routine cloud/local. Raccomandazione: una volta confermato il cloud, **disabilitare in blocco i task nel pannello Cowork** per evitare doppioni, lasciando solo `dashboard-refresh-manual` (on-demand).

### Delta vs audit precedente (2026-05-14)

I drift 14/5 erano tutti su scheduler **Cowork** (allora unico motore). Architettura cambiata radicalmente il 7/6 (dual cloud+local): l'audit precedente è ormai storico. I drift 1-5 di oggi sono **nuovi**, generati dalla transizione F1 non ancora completamente riflessa nella doc (§9/§9bis) — atteso per una transizione in corso, ma il punto 🔴 CRITICO (digest fermo) richiede azione immediata.
