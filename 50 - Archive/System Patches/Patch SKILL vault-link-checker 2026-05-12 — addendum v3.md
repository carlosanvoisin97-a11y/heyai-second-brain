---
type: patch-skill
target_task: vault-link-checker
version: v3
created: 2026-05-12
applied_at: 2026-05-12 (chat Cowork normale via update_scheduled_task, prompt SKILL aggiornato)
context: identificata durante run scheduled 12/5/2026 21:00 — 9 falsi positivi rimossi dal report. Update_scheduled_task bloccato dentro scheduled session, quindi propagazione manuale da chat normale.
---

# Patch SKILL `vault-link-checker` 2026-05-12 — addendum v3

## Cosa cambia rispetto a v2

Tre patch additive, tutte motivate da falsi positivi emersi nel run 12/5:

1. **Wikilink — strip `\|` (escape-pipe) prima dello split alias**. Celle di tabella markdown usano `\|` per non chiudere la colonna (es. `[[Federico Saladino (Soolutions)\|Federico Saladino]]`). Senza strip, il target catturato ha trailing backslash (`Federico Saladino (Soolutions)\`) e il basename match fallisce. Run 12/5 v2: 5 falsi positivi rimossi (Federico/Simone/Danilo schede Soolutions/Silencio, `_Angelini Academy\|...`, `_Wave 2 NoLoop\|...`).

2. **Path string regex — richiedere estensione esplicita**. La regex v2 `r"/Users/carlosanvoisin/claude/[^\s\)\]\"'<>` `]+"` si tronca al primo spazio, generando match parziali tipo `/Users/carlosanvoisin/claude/99` (mancano `- System/foo.md`). Nuova regex richiede una delle estensioni note `(.md|.png|.jpg|.jpeg|.pdf|.xlsx|.docx|.pptx|.csv|.txt|.html|.json|.yaml|.yml|.gif|.svg|.webp)` come terminatore — il match consuma spazi interni al filename ma si ancora a un'estensione valida. Run 12/5 v2: 5 falsi positivi rimossi su path documentati in `99 - System/Setup vault-link-checker.md` e `99 - System/Setup CRM velocity.md` e `99 - System/DPIII Fase 4 — Briefing per consolidamento.md`.

3. **Path string scan — sul contenuto post code-strip, non sul raw**. Il task v2 scansiona path stringhe sul contenuto raw, quindi cattura anche path documentati in `` `backtick` `` (esempi nelle setup doc, non riferimenti reali). Spostando la scansione dopo il code-strip si elimina rumore strutturale. Funzionalmente in concomitanza con la patch (2), perché le setup doc usano i path proprio in backtick.

## Risultato run 12/5

Pre-v3 (v2 buggy): K=10 wikilink rotti, P=5 path string rotti. **9 di 15 erano falsi positivi.**

Post-v3 (oggi): K=5 wikilink rotti (tutti reali — `[[Eldis]]` mancata underscore, `[[Progetto]]` placeholder nel setup, `[[crm-velocity]]` ×3 task pending), J=1 frontmatter rotto (`related_meeting` stale), P=0 path string rotti.

## Prompt SKILL completo v3 (da incollare in `update_scheduled_task`)

Copia-incolla **tutto** il blocco sotto come `prompt` nel `mcp__scheduled-tasks__update_scheduled_task` per `taskId: vault-link-checker`:

---

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Esegui audit settimanale dei wikilink rotti nel vault Obsidian (domenica sera 21:00, trigger manuale ammesso).

# Razionale

Vault Obsidian con ~300+ file e refactoring frequenti. Ogni rename/move di file rischia di lasciare wikilink orfani — link grigi in Obsidian, invisibili in chat ma rotti nella navigazione vault. Lesson appresa 8/5/2026: 26 occorrenze di `[[Angelini Academy - Sito]]` su 14 file rimaste rotte per 2 giorni dopo il refactoring 6/5.

CLAUDE.md §15 voce 7 (NUOVO 8/5/2026) chiede all'agente live di fare grep+rinomina dopo ogni refactoring. Questo task è il safety net settimanale: se la regola viene saltata, la domenica 21:00 emerge un report.

# Vincoli operativi

## Cosa puoi fare

- Leggere tutti i file `.md` del vault (`/Users/carlosanvoisin/claude/`)
- Estrarre wikilink in formato `[[<target>]]` o `[[<target>|<alias>]]` o `[[<target>#<heading>]]`. **Strip `\|` (escape-pipe) dal target prima dello split alias** — celle di tabella markdown usano `\|` per non chiudere la colonna, e senza strip il target eredita un trailing backslash che rompe il basename match (es. `[[Federico Saladino (Soolutions)\|Federico Saladino]]` deve risolversi su `Federico Saladino (Soolutions).md`).
- Verificare che ciascun `<target>` esista come **file del vault** (qualsiasi estensione: `.md`, `.png`, `.xlsx`, `.docx`, `.pdf`, …) — basename match, Obsidian risolve ovunque sia. NON limitare il check ai soli `.md`: gli allegati embed (`![[HeyAI_Logo_Header.png]]`, `[[Wave2_RequirementLog_FINAL.xlsx]]`) sono link validi e vanno risolti contro l'intero indice del vault.
- Estrarre riferimenti frontmatter `parent_project:`, `projects: [...]`, `related_project:`, `related_meeting:`, `stakeholders: [...]` e verificare che puntino a file esistenti. I valori possono essere in sintassi wikilink (es. `related_meeting: [[2026-05-05 - Call Pasquali Jakala]]`) — **strippare il wrapper `[[ ]]` prima del basename match**, altrimenti si generano falsi positivi.
- Estrarre path string assoluti `/Users/carlosanvoisin/claude/<path>.<ext>` e verificare esistenza. **Richiedere estensione esplicita nella regex** (`.md`/`.png`/`.jpg`/`.jpeg`/`.pdf`/`.xlsx`/`.docx`/`.pptx`/`.csv`/`.txt`/`.html`/`.json`/`.yaml`/`.yml`/`.gif`/`.svg`/`.webp`) — altrimenti il match si tronca al primo spazio (es. `/Users/carlosanvoisin/claude/99` invece di `…/99 - System/Vault Link Audit.md`) generando rumore. **Scansionare i path string DOPO il code-stripping**, non sul contenuto raw: i path documentati in `` `backtick` `` sono esempi nelle setup doc, non riferimenti reali. **Decodificare URL-encoding** (`%20` → spazio) prima del check. **Normalizzare i filename in NFC (unicode)** per gestire correttamente nomi con accenti.
- Creare/append al file `/Users/carlosanvoisin/claude/99 - System/Vault Link Audit.md`

## Cosa NON puoi fare mai

- Mai correggere automaticamente i wikilink — solo report
- Mai modificare le schede del vault diverse da `Vault Link Audit.md`
- Mai creare schede progetto/persona per "fixare" un broken link
- Mai segnalare come broken un wikilink che è riferimento a heading/blocco interno (`[[#heading]]` o `[[^block]]`)
- Mai estrarre wikilink da **span inline-code** (` `[[testo]]` `) o **codeblock** triple-backtick: sono esempi/template, non link reali. La regex deve ignorare tutto ciò che è dentro backtick singoli o tripli.

## EXCLUDE_PATHS (file da non scansionare per estrazione wikilink)

Questi file contengono wikilink-esempio "rotti per design" (placeholder didattici, snippet template, prompt library) e vanno esclusi dalla scansione, altrimenti inquinano il report:

- `CLAUDE.md` (placeholder didattici tipo `Persona 1`, `Progetto 1`, `Nome Progetto`)
- `README.md` (vault-level)
- `90 - Templates/*.md` (placeholder template)
- `40 - Resources/Prompts/*.md` (esempi di prompt)
- `99 - System/SKILL cowork-sessions-index POST-PATCH UNIFICATA.md` (snippet algoritmo)
- `99 - System/Patch SKILL *` (con trailing space — pattern glob copre tutte le patch SKILL attuali e future, non solo le hardcodate)
- `99 - System/Vault Link Audit.md` (l'audit stesso — eviterebbe loop)

Tenere la lista come pattern glob/prefix-match, non come elenco hardcoded, così future patch SKILL non richiedono modifiche al task.

# Algoritmo

1. `find /Users/carlosanvoisin/claude -name "*.md" -not -path "*/.*"` — lista tutti i `.md`; applicare EXCLUDE_PATHS sopra
2. Costruire **indice completo del vault** (qualsiasi estensione, NFC-normalized): `find /Users/carlosanvoisin/claude -type f -not -path "*/.*"` → set di basename (senza estensione e con estensione, entrambi indicizzati)
3. Per ogni file `.md` scansionato:
   - Strippare codeblock triple-backtick e inline-code single-backtick prima dell'estrazione (di wikilink E di path string)
   - Estrarre wikilink con regex `\[\[([^\]|#^]+?)(?:\|[^\]]*)?(?:#[^\]]*)?\]\]` (esclude `[[#...]]` e `[[^...]]`). **Replace `\|` → `|` nel target catturato prima dello split alias** (patch v3): celle di tabella markdown usano `\|` come escape e altrimenti il target eredita trailing backslash.
   - Estrarre frontmatter (YAML head): per ogni campo in `[parent_project, projects, related_project, related_meeting, stakeholders]`, strippare wrapper `[[ ]]` se presente, poi basename match
   - Estrarre path string sul contenuto **post code-strip** (patch v3) con regex che **richiede estensione esplicita** (`(\.md|\.png|\.jpg|\.jpeg|\.pdf|\.xlsx|\.docx|\.pptx|\.csv|\.txt|\.html|\.json|\.yaml|\.yml|\.gif|\.svg|\.webp)\b`): URL-decode + NFC-normalize prima del check
4. Per ogni target: esiste nell'indice vault? Se no → registra `(file_sorgente, target_rotto, tipo)`. Best-guess match con `difflib.get_close_matches(cutoff=0.7)` per suggerire rinominazione
5. Aggregare + append a `Vault Link Audit.md` (formato sotto)

# Output atteso

File `/Users/carlosanvoisin/claude/99 - System/Vault Link Audit.md` con frontmatter `type: audit` + append di un blocco per esecuzione:

```markdown
## 2026-05-XX - Audit settimanale

- **File scansionati**: N (escludendo EXCLUDE_PATHS)
- **File `.md` totali nel vault**: T
- **File totali nel vault** (md + attachment): U
- **Wikilink totali estratti**: M (esclusi spans inline-code e codeblock)
- **Wikilink rotti rilevati**: K
- **Riferimenti frontmatter rotti**: J
- **Path string rotti**: P
- **Δ vs audit precedente**: K_prev → K (segno)

### 🔴 Wikilink rotti

| Sorgente | Wikilink rotto | Target atteso (best guess) |
|---|---|---|
| `60 - People/X.md` | `[[Vecchio Nome]]` | possibile match: `[[_Nuovo Nome]]` (similarità ~85%) |

### 🟡 Riferimenti frontmatter rotti
(stesso formato — ricorda: i valori `[[ ]]` vanno strippati prima del check)

### 🟢 Trend
- Settimana scorsa: K' rotti → questa settimana: K. Δ = ±X
- Top 3 file con più broken link

### Azione consigliata
Se K > 0 → grep + rinomina manuale (CLAUDE.md §15 voce 7).
Se K = 0 → vault pulito, nessuna azione.
```

# Trigger di alert ad alta priorità

- K > 20 → notifica Carlo come alert (non solo report)
- Nuovo broken link in `60 - People/` o `20 - Projects/` modificato nelle ultime 24h → alert (refactoring appena avvenuto, link non propagati)
- K cresce di >50% rispetto alla settimana precedente → alert (vault degrading)

# Patch storiche embedded nelle regole sopra

- **v3 (12/5/2026)**: (a) strip `\|` (escape-pipe in celle tabella markdown) dai target wikilink prima dello split alias — 5 falsi positivi rimossi su pattern `[[Foo (Bar)\|Display]]` (Federico/Simone/Danilo/_Angelini Academy/_Wave 2 NoLoop); (b) path string regex richiede estensione esplicita `(.md|.png|.xlsx|.docx|.pdf|.pptx|.csv|.txt|.html|...)` — 5 falsi positivi rimossi su path troncati al primo spazio tipo `/Users/carlosanvoisin/claude/99` che mancavano `- System/foo.md`; (c) scan path string sul contenuto **post code-strip** (non più sul raw) — paths in backtick = doc examples, non riferimenti reali. Risultato run 12/5: K=10 (v2 buggy) → K=5 (v3 puliti).
- **v2 (10/5/2026)**: target check esteso a qualsiasi estensione (non solo `.md`); strip wrapper `[[ ]]` nei valori frontmatter; EXCLUDE_PATHS pattern-glob per `99 - System/Patch SKILL ` con trailing space; URL-decode + NFC-normalize sui path string. Bug fixati: 4 falsi positivi su allegati `.png`/`.xlsx`/`.docx`, 4 falsi positivi su frontmatter wikilink-wrapped, 2 falsi positivi su Patch SKILL non esclusa, 5 falsi positivi su path URL-encoded.
- **v1 (8/5/2026)**: prima versione, scoperta 216 broken wikilink storici → batch fix manuale a 0.

# Note finali

- Tono asciutto, da PM, italiano
- Output minimo se K=0 e J=0 e P=0: append blocco con "✅ Vault pulito, 0 broken link su M wikilink" e una nota tipo "I wikilink reggono. Bravo"
- Trigger manuale on-demand sempre ammesso (utile dopo refactoring grossi)
- Cron domenica 21:00 = basso traffico, no concorrenza con altri scheduled

---

## Procedura di propagazione (da chat Cowork normale)

1. Aprire una chat Cowork **non-scheduled**.
2. Dire: *"Leggi `99 - System/Patch SKILL vault-link-checker 2026-05-12 — addendum v3` e applica al task `vault-link-checker` via `update_scheduled_task`."*
3. L'agente leggerà la sezione "Prompt SKILL completo v3" sopra (tra i due `---`) e invocherà `mcp__scheduled-tasks__update_scheduled_task(taskId="vault-link-checker", prompt=<corpo del prompt>)`.
4. Verifica: `mcp__scheduled-tasks__list_scheduled_tasks` → leggere `path` → confermare che il SKILL.md contenga "patch v3" e "12/5/2026".
5. (Opzionale) Trigger manuale `vault-link-checker` per verificare che il prossimo run produca lo stesso K=5 (5 broken reali rimasti dopo le patch v3 applicate in via script).

## Verifica post-applicazione

Dopo `update_scheduled_task` OK:
- aggiornare frontmatter di `Setup vault-link-checker.md`: `patch_v3_at: 2026-05-12 (applicata via update_scheduled_task — chat normale)` invece di `patch_v3_pending_at`
- aggiungere riga in CLAUDE.md §14 con il delta
