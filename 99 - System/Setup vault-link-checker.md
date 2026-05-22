---
type: setup
created: 2026-05-08
updated: 2026-05-12
status: applied
applied_at: 2026-05-08 (creato in chat normale, prima esecuzione ore 16:54 → 18:54 CEST)
patch_v2_at: 2026-05-10 (post run scheduled domenica 21:00, 3 fix script applicati al prompt SKILL via update_scheduled_task)
patch_v3_at: 2026-05-12 (applicata via update_scheduled_task — chat normale, prompt SKILL aggiornato con strip `\|` escape-pipe, path string regex con estensione esplicita, scan path string post code-strip)
first_run_findings: 216 wikilink rotti + 33 frontmatter rotti + 7 path string da fixare (debito tecnico storico, fixato in batch 8/5 sera)
---

> ✅ **TASK CREATO 8/5/2026**. File mantenuto come riferimento operativo (prompt completo + algoritmo + format report). Il task è ora attivo: cron domenica 21:00 + trigger manuale on-demand.
>
> ⚠️ **Il prompt qui sotto è la versione v1 storica**. Il prompt vivo del task era v2 (applicata 10/5/2026, in `/Users/carlosanvoisin/Documents/Claude/Scheduled/vault-link-checker/SKILL.md`). Le patch v2 (target check esteso a qualsiasi estensione, strip wrapper `[[ ]]` nei valori frontmatter, EXCLUDE pattern-glob per `99 - System/Patch SKILL `, URL-decode + NFC-normalize sui path string) e v3 (strip `\|` escape-pipe nei wikilink, path regex con estensione esplicita, path scan post code-strip — vedi [[50 - Archive/System Patches/Patch SKILL vault-link-checker 2026-05-12 — addendum v3|Patch SKILL vault-link-checker v3 (archiviato)]]) NON sono riflesse qui sotto. Vedi [[Vault Link Audit]] per il delta completo audit-by-audit.
>
> ✅ **PATCH v3 APPLICATA 12/5/2026** (chat Cowork normale via `update_scheduled_task`). Il prompt vivo in `/Users/carlosanvoisin/Documents/Claude/Scheduled/vault-link-checker/SKILL.md` ora contiene la versione v3 (strip `\|` escape-pipe, path regex con estensione esplicita, scan path string post code-strip). Verifica: `grep -n "v3 (12/5/2026)" /Users/carlosanvoisin/Documents/Claude/Scheduled/vault-link-checker/SKILL.md` torna match. Prossimo run reale: dom 17/5 21:00.

# 🔧 Setup nuovo scheduled task `vault-link-checker`

> **Da fare**: Carlo apre una nuova chat Cowork normale e invoca lo skill `schedule` (oppure dice "crea uno scheduled task con questi parametri"). Cowork crea il task scheduled. Tempo: 2-3 min.
>
> **Perché qui**: il task `cowork-sessions-index` non può creare altri scheduled task da dentro la sua sessione (vincolo di sistema "Cannot create scheduled tasks from within a scheduled task session"). Quindi Carlo lo crea da chat normale.

## Parametri da passare

```
taskId: vault-link-checker
description: Audit settimanale wikilink e path rotti del vault Obsidian — append-only, no fix automatici
cronExpression: 0 21 * * 0
```

(domenica sera 21:00 ora locale italiana)

## Prompt completo del task

Copia-incolla questo prompt come `prompt` del task scheduled:

---

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Esegui audit settimanale dei wikilink rotti nel vault Obsidian (domenica sera 21:00, trigger manuale ammesso).

## Razionale

Vault Obsidian con ~200+ file e refactoring frequenti. Ogni rename/move di file rischia di lasciare wikilink orfani — link grigi in Obsidian, invisibili in chat ma rotti nella navigazione vault. Lesson appresa 8/5/2026: 26 occorrenze di `[[Angelini Academy - Sito]]` su 14 file rimaste rotte per 2 giorni dopo il refactoring 6/5.

CLAUDE.md §15 voce 7 (NUOVO 8/5/2026) chiede all'agente live di fare grep+rinomina dopo ogni refactoring. Questo task è il **safety net settimanale**: se la regola viene saltata, la domenica 21:00 emerge un report.

## Vincoli operativi

### Cosa puoi fare
- Leggere tutti i file `.md` del vault (`/Users/carlosanvoisin/claude/`)
- Estrarre wikilink in formato `[[<target>]]` o `[[<target>|<alias>]]` o `[[<target>#<heading>]]`
- Verificare che ciascun `<target>` esista come file `.md` nel vault (basename match, Obsidian risolve ovunque sia)
- Estrarre riferimenti frontmatter `parent_project:`, `projects: [...]`, `related_project:`, `related_meeting:` e verificare che puntino a file esistenti
- Estrarre path string assoluti `/Users/carlosanvoisin/claude/<path>.md` e verificare esistenza
- Creare/append al file `/Users/carlosanvoisin/claude/99 - System/Vault Link Audit.md`

### Cosa NON puoi fare mai
- Mai correggere automaticamente i wikilink — solo report
- Mai modificare le schede del vault diverse da `Vault Link Audit.md`
- Mai creare schede progetto/persona per "fixare" un broken link
- Mai segnalare come broken un wikilink che è riferimento a heading/blocco interno (`[[#heading]]` o `[[^block]]`)

## Algoritmo

1. `find /Users/carlosanvoisin/claude -name "*.md" -not -path "*/.*"` — lista tutti i .md
2. Per ogni file: estrai wikilink con regex `\[\[([^\]|#^]+?)(?:\|[^\]]*)?(?:#[^\]]*)?\]\]` (escludi `[[#...]]` e `[[^...]]`)
3. Build set di basename file esistenti
4. Per ogni wikilink: target esiste? Se no, registra (file_sorgente, wikilink_rotto). Best-guess match con difflib.get_close_matches() per suggerire rinominazione
5. Estrai e verifica frontmatter `parent_project`, `projects`, `related_project`, `related_meeting`
6. Aggrega + append a `Vault Link Audit.md`

## Output atteso

File `/Users/carlosanvoisin/claude/99 - System/Vault Link Audit.md` con frontmatter `type: audit` + append di un blocco per esecuzione:

```markdown
## 2026-05-XX - Audit settimanale

- **File scansionati**: N
- **Wikilink totali**: M
- **Wikilink rotti rilevati**: K
- **Riferimenti frontmatter rotti**: J
- **Path string rotti**: P

### 🔴 Wikilink rotti

| Sorgente | Wikilink rotto | Target atteso (best guess) |
|---|---|---|
| `60 - People/X.md` | `[[Vecchio Nome]]` | possibile match: `[[_Nuovo Nome]]` (similarità ~85%) |

### 🟡 Riferimenti frontmatter rotti
(stesso formato)

### 🟢 Trend
- Settimana scorsa: K' rotti → questa settimana: K. Δ = ±X
- Top 3 file con più broken link

### Azione consigliata
Se K > 0 → grep + rinomina manuale (CLAUDE.md §15 voce 7).
Se K = 0 → vault pulito, nessuna azione.
```

## Trigger di alert ad alta priorità

- K > 20 → notifica Carlo come **alert** (non solo report)
- Nuovo broken link in `60 - People/` o `20 - Projects/` modificato nelle ultime 24h → alert (refactoring appena avvenuto, link non propagati)
- K cresce di >50% rispetto alla settimana precedente → alert (vault degrading)

## Note finali

- Tono asciutto, da PM, italiano
- Output minimo se K=0 e J=0 e P=0: append blocco con "✅ Vault pulito, 0 broken link" e una nota tipo "I wikilink reggono. Bravo"
- Trigger manuale on-demand sempre ammesso (utile dopo refactoring grossi)
- Cron domenica 21:00 = basso traffico, no concorrenza con altri scheduled

---

## Comando rapido per Carlo

In una chat Cowork normale dì semplicemente: *"Crea scheduled task vault-link-checker con cron `0 21 * * 0` usando il prompt che trovi in `99 - System/Setup vault-link-checker.md`"*. L'agente in chat normale leggerà questo file, copierà il prompt e creerà il task.

In alternativa, prendi il prompt completo della sezione sopra e copialo manualmente nella UI Scheduled di Cowork.

## Verifica post-creazione

Dopo aver creato il task:
1. Lancia un trigger manuale dal pannello Scheduled per testare immediatamente (non aspettare domenica)
2. Verifica che venga creato `99 - System/Vault Link Audit.md` con il primo blocco di audit
3. Se K > 0 (probabile su prima esecuzione, ci sono altri refactoring storici da scoprire), valuta se fixare i broken link manualmente o lasciare un task `- [ ]` per Carlo

Aggiungere `vault-link-checker` alla lista §9 di CLAUDE.md (scheduled tasks attivi) dopo conferma che il task gira correttamente.
