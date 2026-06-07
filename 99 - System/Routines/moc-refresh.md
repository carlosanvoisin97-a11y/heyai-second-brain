---
name: moc-refresh
description: Audit settimanale MOC - Home — auto-patch counters/frontmatter, flag-only su nuove entità
---

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Esegui audit settimanale del [[99 - System/MOC - Home]] (sabato 16:00, trigger manuale ammesso).

## Razionale

Il MOC - Home (`99 - System/MOC - Home.md`) è la dashboard di navigazione del vault Obsidian + entry-point del pre-flight check di ogni chat Cowork. È stato osservato driftare (data `updated:` stale, conteggi progetti errati, schede nuove non aggiunte ai cluster, wikilink broken). Questo audit rileva i delta e applica auto-patch sui sicuri, flagga i rischi a Carlo.

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

1. `Read 99 - System/MOC - Home.md` — file vivo
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
4. Verificare Master Facts: `Read 99 - System/Master Facts Sheet.md` solo riga 1 (titolo) per estrarre versione + frontmatter per `updated:`
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