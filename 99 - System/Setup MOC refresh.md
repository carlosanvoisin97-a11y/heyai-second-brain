---
type: setup
created: 2026-05-14
updated: 2026-05-14
status: applied
applied_at: 2026-05-14 (sessione audit second brain Cowork)
related_recommendation: "Audit second brain 14/5/2026 — Batch 3 follow-up #10: scheduled task moc-refresh per evitare drift MOC settimanale"
---

> ✅ **TASK CREATO 14/5/2026** durante la sessione audit second brain. Il prompt riportato in questo doc è la versione originaria del 14/5, mantenuta come snapshot storico. Fonte autoritativa corrente: SKILL.md vivo (`/Users/carlosanvoisin/.claude/scheduled-tasks/moc-refresh/SKILL.md`) leggibile via `Read` o `mcp__scheduled-tasks__list_scheduled_tasks`.

# 🗺️ Setup nuovo scheduled task `moc-refresh`

Audit settimanale del MOC - Home con **auto-patch sicuro** sui contatori/frontmatter + **flag-only** sulle nuove entità (decisione cascata §10bis resta a Carlo). Eseguito sabato 16:00 — 1.5h prima del `weekly-review-interactive` (Sab 17:30) per garantire MOC fresco quando Carlo apre la review.

## Razionale

Il [[99 - System/MOC - Home]] è la dashboard di navigazione del vault + entry-point del pre-flight check di ogni chat Cowork (CLAUDE.md §10ter). Durante l'audit second brain del 14/5/2026 sono emersi 5 drift di basso impatto ma cumulativi:

1. Conteggio "Progetti attivi (14 totali)" obsoleto — reale 13
2. Conteggio "Altri clienti (6 progetti)" obsoleto — dopo aggiunta Sito Futuritaly
3. Scheda Sito Futuritaly (promossa P2 12/5/2026) non in cluster MOC
4. Scheda Stefano Mambrin (Avanta) creata 14/5 non in cluster NoLoop
5. `updated:` frontmatter MOC fermo a 2026-05-08

Tutti hanno richiesto correzione manuale durante l'audit. Senza un task settimanale dedicato, lo stesso pattern di drift si ripresenterà ogni 1-2 settimane perché il `cowork-sessions-index` aggiorna SOLO i backlink `## Sessioni Cowork correlate`, non le altre sezioni.

## Parametri del task

```
taskId: moc-refresh
description: Audit settimanale MOC - Home — auto-patch counters/frontmatter, flag-only su nuove entità
cronExpression: 0 16 * * 6
```

(Sabato 16:00 ora locale italiana — 1.5h prima del `weekly-review-interactive` Sab 17:30)

## Prompt completo del task

Copia-incolla questo prompt come `prompt` del task scheduled:

---

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Esegui audit settimanale del [[99 - System/MOC - Home]] (sabato 16:00, trigger manuale ammesso).

## Razionale

Il MOC - Home (`/Users/carlosanvoisin/claude/99 - System/MOC - Home.md`) è la dashboard di navigazione del vault Obsidian + entry-point del pre-flight check di ogni chat Cowork. È stato osservato driftare (data `updated:` stale, conteggi progetti errati, schede nuove non aggiunte ai cluster, wikilink broken). Questo audit rileva i delta e applica auto-patch sui sicuri, flagga i rischi a Carlo.

## Vincoli operativi

### Cosa puoi fare

- Leggere `99 - System/MOC - Home.md` (file vivo)
- Scansionare via Glob:
  - `20 - Projects/**/*.md` (per progetti attivi, escluso file con "archiviata" nel nome)
  - `30 - Areas/**/*.md` (per area schede)
  - `60 - People/*.md` (tutti gli stakeholder)
  - `99 - System/*.md` (tutti i file di sistema)
- Calcolare delta: conteggi MOC vs reale, schede esistenti vs MOC cluster, versione Master Facts
- **AUTO-PATCH SAFE** (esegui senza chiedere conferma):
  - Aggiornare `updated:` frontmatter MOC a oggi (sempre se la scansione produce delta o auto-patch)
  - Correggere "Progetti attivi (N totali)" se conteggio reale differisce
  - Correggere "Altri clienti (N progetti)" se conteggio reale differisce
  - Correggere stringa versione Master Facts in MOC §"Da leggere subito" se la versione del file differisce
- **FLAG-ONLY** (NON patch — segnalare a Carlo per decisione):
  - Nuove persone in `60 - People/` non citate in MOC cluster
  - Nuovi progetti in `20 - Projects/<Cliente>/*.md` non in MOC §Progetti
  - Nuovi file in `99 - System/*.md` non in MOC §Sistema vault
  - Wikilink in MOC che non risolvono (broken target) — verifica file esistenza, considera alias frontmatter
- Scrivere output in `99 - System/MOC Refresh Log.md` (append, una entry per run)

### Cosa NON puoi fare mai

- Mai aggiungere nuove righe in MOC cluster Persone/Progetti/Sistema vault (queste decisioni richiedono Carlo, regola §10bis cascata)
- Mai cancellare righe dal MOC
- Mai modificare wikilink esistenti (solo segnalarli se broken)
- Mai toccare il Master Facts Sheet (è source of truth numeri, MOC ne è solo riferimento)
- Mai creare nuove schede

## Algoritmo

1. `Read /Users/carlosanvoisin/claude/99 - System/MOC - Home.md` — file vivo
2. Scansionare via Glob/find:
   - Progetti attivi: `Glob 20 - Projects/**/*.md`, filtro fuori i file con "archiviata" nel nome o `status: archived` nel frontmatter
   - Persone: `Glob 60 - People/*.md`
   - System: `Glob 99 - System/*.md`
   - Aree: `Glob 30 - Areas/**/*.md`
3. Parsare il MOC per estrarre:
   - Frontmatter `updated:`
   - Conteggio "Progetti attivi (N totali)" da sezione §"🚀 Progetti attivi"
   - Conteggio "Altri clienti (N progetti)"
   - Riga "Master Facts Sheet — vX.Y (data)" da §"Da leggere subito"
   - Tutti i wikilink presenti (`[[...]]` pattern)
   - Cluster persone (estrai i nomi citati)
   - Cluster progetti (estrai i progetti citati)
   - Sezione "🔧 Sistema vault — file di setup e log" (estrai i file system citati)
4. Verificare Master Facts: `Read /Users/carlosanvoisin/claude/99 - System/Master Facts Sheet.md` solo riga 1 (titolo) per estrarre versione + frontmatter per `updated:`
5. Calcolare delta + identificare auto-patch vs flag
6. APPLY auto-patch direttamente sul MOC (Edit chirurgico):
   - Frontmatter `updated:` → oggi YYYY-MM-DD
   - Conteggi "Progetti attivi" e "Altri clienti"
   - Stringa versione Master Facts (formato: `**v1.2 (14/5)**` o simile)
7. WRITE entry in `99 - System/MOC Refresh Log.md` (append):

```markdown
## YYYY-MM-DD HH:MM — N auto-patches · M flags

### Auto-patches applicati
- `updated:` frontmatter MOC: YYYY-MM-DD → YYYY-MM-DD
- "Progetti attivi (N totali)": vecchio → nuovo
- "Altri clienti (N progetti)": vecchio → nuovo
- Versione Master Facts in §"Da leggere subito": vecchio → nuovo

### Flag to triage (Carlo decide)
- **Nuova persona non in MOC**: `[[Persona X]]` in `60 - People/Persona X.md` (frontmatter created: YYYY-MM-DD)
- **Nuovo progetto non in MOC**: `[[Progetto Y]]` in `20 - Projects/Cliente/Progetto Y.md`
- **Nuovo system file non in MOC**: `[[99 - System/File Z]]`
- **Wikilink broken in MOC**: `[[Target Q]]` → target non esiste (no alias resolution)
- **Drift versione Master Facts**: MOC diceva "vX.Y (data1)", file ha versione vA.B updated data2 → patchato a "vA.B (data2)"

### Stato finale
- Auto-patches: N
- Flag aperti per Carlo: M
- Wikilink broken: K
```

8. Se M flags > 5 OR K broken > 0: append alert in Daily Note del sabato `10 - Daily Notes/YYYY-MM-DD.md` (sezione `## 🗺️ MOC refresh alert`)

## Output minimo

Se 0 patch e 0 flag (MOC pulito):
```markdown
## YYYY-MM-DD HH:MM — 0 patches · 0 flags

✅ MOC pulito, no drift questa settimana.
```

## Trigger di alert ad alta priorità

- N flag > 5 → alert in Daily Note del sabato
- Wikilink broken in MOC > 0 → alert sempre (MOC è dashboard, broken link = navigazione rotta)
- Drift versione Master Facts → alert sempre (entry-point chat, versione stale confonde)

## Note finali

- Tono asciutto, italiano, da PM
- Trigger manuale on-demand sempre ammesso (es. dopo creazione manuale di schede)
- Cron sab 16:00 = 1.5h prima di `weekly-review-interactive` (Sab 17:30), MOC fresco quando Carlo apre la review
- File `MOC Refresh Log.md` auto-rolling: entry >8 settimane → archive in `50 - Archive/System/MOC Refresh Log {YYYY-MM}.md` (regola rolling-window standard)
- NON sovrascrivere: scrivere sempre come append in `MOC Refresh Log.md`
- Idempotenza: 2 run nello stesso giorno producono 2 entry, ma gli auto-patch sono no-op se MOC è già allineato (l'Edit fallirà silenziosamente se old_string == new_string)

---

## Comando rapido per Carlo

In una chat Cowork normale dì: *"Crea scheduled task moc-refresh con cron `0 16 * * 6` usando il prompt che trovi in `99 - System/Setup MOC refresh.md`"*.

In alternativa, prendi il prompt completo della sezione sopra e copialo manualmente nella UI Scheduled di Cowork.

## Verifica post-creazione

Dopo aver creato il task:

1. Lancia un trigger manuale dal pannello Scheduled per testare immediatamente (non aspettare sabato)
2. Verifica che `99 - System/MOC Refresh Log.md` sia creato con la prima entry
3. Verifica che MOC - Home abbia `updated: YYYY-MM-DD` aggiornato
4. Se emergono flag, decidere caso per caso (aggiungere a MOC manualmente o ignorare)
5. Aggiornare CLAUDE.md §9 (scheduled tasks attivi) dopo conferma che il task gira correttamente

## Estensione futura (post-pilot)

Dopo 4 settimane di uso, valutare:

- Estendere l'auto-patch ad altri counters (es. "56+ schede" in §"Da leggere subito")
- Aggiungere check su backlinks counts per identificare candidati MOC tematici (≥7 backlinks → suggerimento atomic note dedicata o MOC tematico)
- Integrare con `system-consistency-check` per audit cross-cutting MOC ↔ CLAUDE.md ↔ Master Facts
