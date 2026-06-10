---
name: vault-health
description: Health-check unificato del vault HeyAI — sub-check links (wikilink/frontmatter rotti, flag-only), moc (drift MOC - Home, auto-patch-safe), consistency (drift doc↔scheduler↔routine, flag-only), contradictions (slot futuro). Invocazione "vault-health <check>" con check ∈ {links, moc, consistency, all}, default all. Usato dalle routine cloud come fonte unica di logica (thin-wrapper) e on-demand da Claude Code.
---

# vault-health — health-check unificato del vault (F3, 10/6/2026)

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Questa skill è la **fonte unica di logica** per i 3 audit di salute del vault. Le routine `99 - System/Routines/{vault-link-checker, moc-refresh, system-consistency-check}.md` sono thin-wrapper che eseguono **una sola sezione** di questo file; da Claude Code si può invocare qualsiasi sub-check o `all`.

## Invocazione e routing

`vault-health <check>` con `check ∈ {links, moc, consistency, all}` — default `all`.

| Sub-check | Sezione | Dove può girare | Auto-fix policy | Output file |
|---|---|---|---|---|
| `links` | §LINKS | cloud ✅ · Code ✅ (bastano Read/Glob/Bash) | **flag-only** | `99 - System/Vault Link Audit.md` |
| `moc` | §MOC | cloud ✅ · Code ✅ | **auto-patch-safe** (solo counters/versione/updated) | `99 - System/MOC Refresh Log.md` |
| `consistency` | §CONSISTENCY | **solo Code** (servono `list_scheduled_tasks` + `RemoteTrigger`, assenti nelle routine cloud headless) | **flag-only** | `99 - System/System Consistency Audit.md` |
| `contradictions` | §CONTRADICTIONS | cloud ✅ · Code ✅ (bastano Read/Grep) | **flag-only** | `99 - System/Contradictions Audit.md` (solo se findings>0 — audit-as-delta) |

**Regole trasversali (valgono per ogni sub-check):**
- **Isolamento**: se un sub-check fallisce, gli altri proseguono; il fallimento va segnalato esplicitamente nel report/chat, mai silenziato.
- **Audit-as-delta (M6, 10/6/2026)**: se un sub-check chiude a **zero findings**, NON appendere l'entry completa al file di report — aggiorna solo la riga di trend (dove esiste) o una riga sintetica `✅ run YYYY-MM-DD pulito`. L'entry completa si scrive solo con findings > 0. Riduce gli artefatti crescenti che richiedono rolling-window.
- **Append-only §15**: ogni output file si arricchisce in append (+ rolling-window dove prevista); mai rewrite di sezioni storiche.
- **Mai**: auto-fix di wikilink · creare schede progetto/persona · toccare i numeri del Master Facts Sheet · modificare scheduled task o trigger (solo segnalazione).
- Con `all` da Code: al termine produrre **mini-report di sintesi in chat** (K broken, patch/flag MOC, drift consistency) — nessun file nuovo, i dettagli restano nei 3 file dedicati.
- Italiano, tono PM asciutto; output minimo se tutto pulito.
- In contesto routine cloud: al termine committare e pushare **direttamente su `main`** (`git push origin HEAD:main`), mai branch/PR.

---

## §LINKS — audit wikilink e riferimenti rotti (flag-only)

> Eredita integralmente `vault-link-checker` v4 (alias-aware, 14/5/2026) + rolling-window (13/5/2026). Cron canonico: domenica 15:40 CEST via routine cloud; trigger manuale sempre ammesso.

### Razionale
Vault con 600+ file .md e refactoring frequenti: ogni rename/move rischia wikilink orfani (link grigi in Obsidian). CLAUDE.md §15 voce 7 chiede grep+rinomina live a ogni refactoring; questo audit è il safety net settimanale.

### Cosa puoi fare
- Leggere tutti i `.md` del vault.
- Estrarre wikilink `[[<target>]]` / `[[<target>|<alias>]]` / `[[<target>#<heading>]]`. Strip `\|` (escape-pipe) dal target prima dello split alias.
- Verificare che ogni `<target>` esista come file del vault (qualsiasi estensione: .md, .png, .xlsx, .docx, .pdf, …) — basename match, NFC-normalized, URL-decoded.
- **Alias-index (v4)**: per ogni `.md` del vault (TUTTI, anche EXCLUDE_PATHS) leggere il frontmatter YAML e, se contiene `aliases:`, aggiungere ogni alias all'indice come voce risolvibile verso il basename proprietario. Costruirlo DOPO l'indice basename e PRIMA del check.
- Estrarre riferimenti frontmatter `parent_project:`, `projects: [...]`, `related_project:`, `related_meeting:`, `stakeholders: [...]` e verificarne l'esistenza (strip quote YAML e wrapper `[[ ]]`). `meeting_context:` è testo libero: NON controllarlo.
- Estrarre path string assoluti `<path>.<ext>` (estensione esplicita, post code-strip) e verificarne l'esistenza.
- Append a `99 - System/Vault Link Audit.md` con rolling-window: PRIMA dell'append, spostare gli audit >7gg in `50 - Archive/Vault Audits/{YYYY-MM}.md`; nel file vivo restano ultimo audit + tabella "Trend storico".

### Cosa NON puoi fare mai
- Mai correggere automaticamente i wikilink — solo report.
- Mai modificare schede diverse da `Vault Link Audit.md` (eccezione: archive rolling-window).
- Mai creare schede per "fixare" un broken link.
- Mai flaggare riferimenti a heading/blocco interni, wikilink dentro inline-code o codeblock, o wikilink che risolvono via `aliases:` (la verifica passa ANCHE dall'alias-index).
- Mai cancellare audit storici senza archiviarli.

### EXCLUDE_PATHS (per la scansione sorgenti; gli `aliases:` come TARGET si leggono comunque)
`CLAUDE.md` · `README.md` · `90 - Templates/*.md` · `40 - Resources/Prompts/*.md` · `50 - Archive/System Patches/*.md` · `50 - Archive/Vault Audits/*.md` · `99 - System/Vault Link Audit.md` · `99 - System/Patch SKILL*`

### Algoritmo
1. `find . -name "*.md" -not -path "*/.*"` — lista; EXCLUDE_PATHS solo per la scansione.
2. Indice completo del vault (qualsiasi estensione, NFC).
3. Alias-index v4 (mapping alias → owner per logging).
4. Per ogni file scansionato: strip codeblock+inline-code → wikilink (replace `\|`→`|` pre-split) → frontmatter check → path string.
5. Target esiste (basename OR alias)? Se no → broken.
6. Rolling-window PRIMA dell'append.
7. Aggregare + append. Includere: "Alias registrati nel vault: A (su F file proprietari) ← v4".

### Alert alta priorità
- K > 20 · nuovo broken in `60 - People/` o `20 - Projects/` modificato nelle ultime 24h · K cresce >50% vs run precedente.

### Patch storiche
v4 alias-aware (14/5) · rolling-window (13/5) · v3 strip `\|`/ext esplicita/post-code-strip (12/5) · v2 any-ext/strip `[[ ]]` FM/URL-decode+NFC (10/5) · v1 (8/5).

---

## §MOC — audit MOC - Home (auto-patch-safe)

> Eredita integralmente `moc-refresh`. Cron canonico: sabato 16:00 CEST via routine cloud (1.5h prima di weekly-review-interactive); trigger manuale sempre ammesso.

### Razionale
`99 - System/MOC - Home.md` è la dashboard di navigazione + entry-point del pre-flight. Drifta (updated stale, conteggi errati, schede nuove assenti, wikilink rotti): questo audit applica auto-patch sui delta sicuri e flagga il resto.

### AUTO-PATCH SAFE (senza chiedere)
- `updated:` frontmatter MOC → oggi (se la scansione produce delta o patch).
- "Progetti attivi (N totali)" e "Altri clienti (N progetti)" se il conteggio reale differisce.
- Stringa versione Master Facts in §"Da leggere subito" se la versione del file differisce.

### FLAG-ONLY (Carlo decide)
- Nuove persone in `60 - People/` non citate nei cluster MOC · nuovi progetti in `20 - Projects/<Cliente>/` non in §Progetti · nuovi file `99 - System/*.md` non in §Sistema vault · wikilink MOC broken (alias-aware) · drift versione Master Facts.

### Cosa NON puoi fare mai
- Mai aggiungere/cancellare righe nei cluster MOC (cascata §10bis = decisione Carlo) · mai modificare wikilink esistenti · mai toccare il Master Facts Sheet · mai creare schede.

### Algoritmo
1. Read `99 - System/MOC - Home.md`.
2. Glob: `20 - Projects/**/*.md` (escludi "archiviata" nel nome o `status: archived`) · `30 - Areas/**/*.md` · `60 - People/*.md` · `99 - System/*.md`.
3. Parsare MOC: `updated:` · conteggi · riga versione Master Facts · tutti i wikilink · cluster persone/progetti/system.
4. Read riga 1 + frontmatter di `Master Facts Sheet.md` per versione/updated.
5. Delta → auto-patch vs flag.
6. Edit chirurgici per gli auto-patch (idempotenti: no-op se già allineato).
7. Append entry in `99 - System/MOC Refresh Log.md` (formato sotto). Rolling: entry >8 settimane → `50 - Archive/System/MOC Refresh Log {YYYY-MM}.md`.
8. Se flag > 5 OR wikilink broken in MOC > 0: alert in Daily Note del giorno (`## 🗺️ MOC refresh alert`).

### Formato entry log
```markdown
## YYYY-MM-DD HH:MM — N auto-patches · M flags

### Auto-patches applicati
- `updated:` MOC: vecchio → nuovo
- "Progetti attivi (N totali)": vecchio → nuovo
- …

### Flag to triage (Carlo decide)
- **Nuova persona non in MOC**: `[[Persona X]]` (created: YYYY-MM-DD)
- …

### Stato finale
- Auto-patches: N · Flag aperti: M · Wikilink broken: K
```
Se 0 patch e 0 flag: `✅ MOC pulito, no drift questa settimana.`

---

## §CONSISTENCY — audit doc ↔ scheduler ↔ routine (flag-only) — ESTESO 10/6/2026

> Eredita `system-consistency-check` + estensione F3: cross-check delle routine CLOUD via `RemoteTrigger` e coerenza interna di CLAUDE.md. Cron canonico: lunedì 7:30 via task Code-locale (prima del pm-digest 8:02). **Gira SOLO da Code** (servono `mcp__scheduled-tasks__list_scheduled_tasks` e `RemoteTrigger`, assenti nel runtime cloud headless).

### Razionale
§15.quater: ogni cambio a uno scheduled task va eseguito nello stesso commit della doc. Questo audit è il safety net su **tre runtime** (CLAUDE.md §9): (A) routine cloud claude.ai, (B) task Code-locale, (C) plugin Obsidian Git. Lesson 13/5: 5 incoerenze invisibili senza audit. Lesson 10/6: drift interno a CLAUDE.md (§9 tabella vs §9bis prosa) + routine orfane di trigger.

### Cosa puoi fare
- Leggere `CLAUDE.md` (§9, §9bis, §9ter) · chiamare `mcp__scheduled-tasks__list_scheduled_tasks` · chiamare `RemoteTrigger action:list` · leggere i SKILL locali in `~/.claude/scheduled-tasks/<taskId>/SKILL.md` · Glob su `99 - System/Routines/*.md` · append a `99 - System/System Consistency Audit.md`.

### Cosa NON puoi fare mai
- Mai modificare scheduled task/trigger autonomamente · mai modificare CLAUDE.md o SKILL/routine file · mai creare/disabilitare nulla. Solo segnalazione con azione correttiva suggerita.

### Algoritmo
**Step 1 — CLAUDE.md §9**: estrai per ogni task/routine documentata: nome · runtime atteso (A cloud / B locale) · stato atteso (on/off/ritirato) · cron atteso · note. Estrai ANCHE le affermazioni di stato in §9bis (prosa) per il check di coerenza interna (Step 5).

**Step 2 — runtime locale**: `mcp__scheduled-tasks__list_scheduled_tasks` → taskId, enabled, cronExpression, description, path SKILL. ⚠️ Vede SOLO il runtime B. Path storico `~/Documents/Claude/Scheduled/` = **morto** (Cowork dismesso 9/6): se un file lo cita ancora → 🔴 DRIFT CRITICO.

**Step 3 — runtime cloud (ESTENSIONE F3)**: `RemoteTrigger action:list` → per ogni trigger: name, enabled, cron_expression, next_run_at, mcp_connections. ⚠️ NON segnalare come drift l'assenza delle routine cloud da `list_scheduled_tasks` (runtime diverso, errore storico Front 3).

**Step 4 — cross-check tre vie** (doc §9 ↔ runtime B ↔ runtime A):
- Doc "on" ↔ runtime disabled (o viceversa) → 🔴 CRITICO
- Cron doc ≠ cron runtime → 🔴 CRITICO
- Task/trigger nel runtime ma non in §9 → 🟡 MINOR (creato senza doc?)
- Task in §9 ma assente da entrambi i runtime → 🟡 MINOR (chi l'ha rimosso?)
- **File `99 - System/Routines/*.md` orfano** (nessun trigger cloud con quel nome, escluso `_README`) → 🟡 MINOR (routine scritta ma mai schedulata, o manuale non documentata come tale — es. lesson 10/6: `radar-competitor.md`)
- Trigger cloud il cui prompt cita un file routine inesistente → 🔴 CRITICO

**Step 5 — coerenza interna CLAUDE.md (ESTENSIONE F3)**: confronta le affermazioni di stato della tabella §9 con la prosa di §9bis/§9ter: se divergono (es. lesson 10/6: tabella dice bridge "on — failover", §9bis diceva "off, dormiente") → 🟡 MINOR con suggerimento di allineamento testo.

**Step 6 — SKILL/routine content check**: per ogni task locale leggi il SKILL.md: description frontmatter ≠ scheduler description → 🟡 · riferimenti temporali in prosa incoerenti col cron reale → 🔴 · riferimenti a task citati per nome che non esistono/sono disabilitati → 🟡 · path vault obsoleti (`70 - Meetings/` deprecata; `~/Documents/Claude/Scheduled/`; `20 - Projects/*.md` non-ricorsivo pre-refactoring) → 🔴/🟡. Per le routine cloud thin-wrapper: verificare che citino `vault-health` §sezione corretta e mantengano `## Push finale`.

**Step 7 — report**: append in `99 - System/System Consistency Audit.md` (crea con frontmatter `type: system-audit` se assente):
```markdown
## Audit YYYY-MM-DD (lun 7:30)

### 🔴 Drift critici (N)
| Item | Fonte A | Fonte B | Delta / azione suggerita |
|---|---|---|---|

### 🟡 Drift minori (N)
| Item | Fonte | Issue |
|---|---|---|

### ✅ Consistenti (N)
…

### Delta vs audit precedente
- Nuovi: N · Risolti: N · Persistenti: N
```
Se 0 drift: `✅ Sistema consistente — 0 drift. Runtime A: N trigger · Runtime B: M task.`

### Alert
🔴 > 0 → aprire la risposta con `⚠️ vault-health consistency: N drift CRITICI — intervento prima del pm-digest 8:02` · 🟡 > 2 → review consigliata · 0 → `✅ consistente`.

---

## §CONTRADICTIONS — contraddizioni fattuali cross-schede (flag-only) — IMPLEMENTATO 10/6/2026

> Il pezzo mancante della KB-solidity (assorbe il vecchio cherry-pick wiki-lint). On-demand da Code o in `all`; NON agganciato ai cron (i 4 trigger cloud restano invariati). La weekly-system-review può citarne l'ultimo esito.

### Razionale
Regola §2 CLAUDE.md: "errori di math = bocciatura cliente"; regola §5: Master Facts = fonte autoritativa, "data più recente vince" sui conflitti. Oggi un numero divergente tra Master Facts e scheda si scopre solo a occhio. Questo sub-check lo rileva in automatico.

### Cosa puoi fare
- Read/Grep su `99 - System/Master Facts Sheet.md`, `20 - Projects/**/*.md`, `CLAUDE.md` §5/§6.
- Scrivere SOLO `99 - System/Contradictions Audit.md` (creato al primo finding; append-only, rolling-window >30gg → `50 - Archive/System/`).

### Cosa NON puoi fare mai
- Mai correggere numeri o stati (flag-only assoluto: i numeri li tocca solo Carlo, §5).
- Mai flaggare numeri storici dichiarati superati (es. marcati `[superato]`, in sezioni `Log`/`storia`, o in file archiviati) — confronta solo i valori CORRENTI.
- Mai scansionare `50 - Archive/`, `80 - Sources/`, `00 - Inbox/` (solo fonti vive: Master Facts, schede progetto, CLAUDE.md).

### Algoritmo
1. **Estrai i fatti dal Master Facts Sheet**: per ogni progetto, i valori correnti (importi €, percentuali, stati contrattuali: "firmato/bozza/mai prodotto/acconto pagato") con la riga di contesto. Ignora sezioni esplicitamente storiche.
2. **Estrai i fatti dalle schede progetto** (`20 - Projects/**/*.md`): frontmatter (`status:`, `updated:`) + importi/stati nelle sezioni vive (escludi `## Log` e citazioni).
3. **Estrai da CLAUDE.md**: tabella §6 (priorità/stati/valori) e valori chiave §5.
4. **Confronta a triple** (Master Facts ↔ scheda ↔ CLAUDE.md §5/§6) per progetto:
   - Importo diverso per lo stesso progetto → 🔴 CONTRADDIZIONE
   - Stato contrattuale incompatibile (es. "firmato" vs "bozza non firmata") → 🔴
   - `status:` frontmatter vs stato in tabella §6 (es. `lost` vs 🟢 P2) → 🟡
   - Conflitto risolvibile con "data più recente vince" (§4): segnala come 🟡 con la fonte vincente proposta — MAI auto-applicare.
5. **Report** (solo se findings > 0, audit-as-delta): append a `Contradictions Audit.md`:
```markdown
## Audit YYYY-MM-DD
### 🔴 Contraddizioni (N)
| Progetto | Fonte A (valore, updated) | Fonte B (valore, updated) | Vincente proposto (§4) |
|---|---|---|---|
### 🟡 Drift minori (N)
…
```
   Se 0 findings: nessuna scrittura su file; in chat/`all`: `✅ contradictions: 0`.
6. **Anti-rumore**: massimo 1 flag per coppia progetto+fatto (no duplicati per occorrenze multiple dello stesso valore); le proposte `[PROPOSTA]`/`TBD` non sono contraddizioni (sono flag deliberati).

---

## Mini-report `all` (solo on-demand da Code)

Dopo l'esecuzione dei 3 sub-check, sintesi in chat (nessun file nuovo):
```
🩺 vault-health all — YYYY-MM-DD HH:MM
links: K=… J=… P=… (alert: sì/no) → Vault Link Audit
moc: N patch · M flag → MOC Refresh Log
consistency: 🔴 N · 🟡 M → System Consistency Audit
contradictions: 🔴 N · 🟡 M (file solo se >0)
```
Sub-check falliti: riportarli come `⚠️ <check>: FALLITO — <motivo>` senza bloccare gli altri.
