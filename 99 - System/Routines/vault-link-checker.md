---
name: vault-link-checker
description: Audit settimanale wikilink e path rotti del vault Obsidian — append-only, no fix automatici
---

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Esegui audit settimanale dei wikilink rotti nel vault Obsidian (domenica sera 21:00, trigger manuale ammesso).

# Razionale

Vault Obsidian con ~300+ file e refactoring frequenti. Ogni rename/move di file rischia di lasciare wikilink orfani — link grigi in Obsidian, invisibili in chat ma rotti nella navigazione vault. Lesson appresa 8/5/2026: 26 occorrenze di [[Angelini Academy - Sito]] su 14 file rimaste rotte per 2 giorni dopo il refactoring 6/5.

CLAUDE.md §15 voce 7 (NUOVO 8/5/2026) chiede all'agente live di fare grep+rinomina dopo ogni refactoring. Questo task è il safety net settimanale: se la regola viene saltata, la domenica 21:00 emerge un report.

Lesson appresa 13/5/2026 (patch rolling-window storici): il file Vault Link Audit.md accumulava tutti gli audit storici (10 audit, 58 KB) senza policy di archive. 6 dei 10 audit erano i run progressivi del batch fix 8/5 (216→35→32→18→10→0→0). File vivo gonfio inutilmente. Patch rolling-window: tieni nel file vivo solo l'ultimo audit + tabella "trend storico" sintetica. Audit >7gg vanno in archive mensile.

Lesson appresa 14/5/2026 (patch v4 alias-aware): il vault ha schede underscore-prefixed (_Eldis, _Wave 2 NoLoop, _Futuritaly, _Angelini Academy, _NoLoop, _NOT, _Achipont, _Matteo Cosma, _Studio Murolo, _Area - Partnership Fornitori, _Area - Performance & Coaching, _Wave 1 NoLoop) e file lunghi con coda cliente (Accessibility Specs Sito Nuovo Angelini Academy.md). Carlo scrive naturalmente [[Eldis]], [[Wave 2 NoLoop]], [[Accessibility Specs Sito Nuovo]] e si rompono. Soluzione radicale: ogni scheda di questo tipo ha ora un campo aliases: nel frontmatter YAML che elenca le forme naturali. Obsidian le risolve nativamente, e il checker deve fare altrettanto leggendo aliases: di ogni file e includendo le voci nell'indice del vault prima del check. Senza questa logica, il checker continua a flaggare wikilink che Obsidian risolve correttamente — divergenza inaccettabile.

# Vincoli operativi

## Cosa puoi fare

- Leggere tutti i file .md del vault (/Users/carlosanvoisin/claude/)
- Estrarre wikilink in formato [[<target>]] o [[<target>|<alias>]] o [[<target>#<heading>]]. Strip \\| (escape-pipe) dal target prima dello split alias.
- Verificare che ciascun <target> esista come file del vault (qualsiasi estensione: .md, .png, .xlsx, .docx, .pdf, …) — basename match, Obsidian risolve ovunque sia.
- (v4, 14/5/2026) Costruire un alias-index oltre al basename-index: per ogni .md del vault leggere il frontmatter YAML e, se contiene il campo aliases: (lista di stringhe), aggiungere ciascun alias all'indice come voce risolvibile verso il basename del file proprietario. L'indice alias va costruito DOPO l'indice basename e PRIMA del check dei wikilink. Leggere aliases: da TUTTI i .md del vault, anche dai file in EXCLUDE_PATHS (gli alias devono risolvere come TARGET ovunque siano definiti).
- Estrarre riferimenti frontmatter parent_project:, projects: [...], related_project:, related_meeting:, stakeholders: [...] e verificare che puntino a file esistenti. Strippare quote YAML ("..." o '...') attorno al valore E wrapper [[ ]] prima del basename match.
- Estrarre path string assoluti /Users/carlosanvoisin/claude/<path>.<ext> e verificare esistenza. Richiedere estensione esplicita nella regex. Scansionare i path string DOPO il code-stripping. Decodificare URL-encoding. Normalizzare i filename in NFC.
- Creare/append al file /Users/carlosanvoisin/claude/99 - System/Vault Link Audit.md
- Eseguire rolling-window degli audit storici nel file vivo: prima di append del nuovo audit, sposta in archive mensile gli audit >7gg dalla data odierna.

## Cosa NON puoi fare mai

- Mai correggere automaticamente i wikilink — solo report
- Mai modificare le schede del vault diverse da Vault Link Audit.md (eccezione: rolling-window archive)
- Mai creare schede progetto/persona per "fixare" un broken link
- Mai segnalare come broken un wikilink che è riferimento a heading/blocco interno
- Mai estrarre wikilink da span inline-code o codeblock triple-backtick
- Mai cancellare audit storici senza archiviarli
- Mai segnalare come broken un wikilink che risolve via aliases: di una scheda esistente — la verifica deve passare ANCHE dall'alias-index, non solo dal basename-index.

## EXCLUDE_PATHS (per la scansione sorgenti, NON per la lettura aliases come target)

- CLAUDE.md
- README.md
- 90 - Templates/*.md
- 40 - Resources/Prompts/*.md
- 50 - Archive/System Patches/*.md
- 50 - Archive/Vault Audits/*.md
- 99 - System/Vault Link Audit.md
- 99 - System/Patch SKILL  (pattern-glob con trailing space)

# Algoritmo

1. find /Users/carlosanvoisin/claude -name "*.md" -not -path "*/.*" — lista tutti i .md; applicare EXCLUDE_PATHS solo per la scansione
2. Costruire indice completo del vault (qualsiasi estensione, NFC-normalized)
3. (v4) Costruire alias-index: per ogni .md del vault (TUTTI), parsare frontmatter YAML e leggere aliases:. Se presente, aggiungere ciascun alias normalizzato NFC a basenames_noext. Conservare mapping alias → owner_basename per logging.
4. Per ogni file .md scansionato:
   - Strip codeblock + inline-code
   - Estrarre wikilink, replace \\| → | prima dello split alias
   - Frontmatter check con strip quote YAML + wrapper [[ ]]
   - Path string post code-strip con estensione esplicita
5. Per ogni target: esiste nell'indice (basename OR alias)? Se no → broken.
6. Rolling-window storici PRIMA di append del nuovo audit.
7. Aggregare + append. Includere nel report: alias_count + lista compatta degli owner-file con alias.

# Output

Include nel report: "Alias registrati nel vault: A (su F file proprietari) ← v4"

# Trigger di alert ad alta priorità

- K > 20
- Nuovo broken link in 60 - People/ o 20 - Projects/ modificato nelle ultime 24h
- K cresce di >50% rispetto alla settimana precedente

# Patch storiche

- v4 (14/5/2026): alias-aware (vedi sopra)
- rolling-window (13/5/2026): file vivo capped, audit >7gg in archive mensile
- v3 (12/5/2026): strip \\|, ext esplicita path, post-code-strip
- v2 (10/5/2026): qualsiasi ext nei target, strip [[ ]] frontmatter, URL-decode + NFC
- v1 (8/5/2026): prima versione

# Note

- Italiano, tono PM asciutto
- Output minimo se K=0 e J=0 e P=0
- Trigger manuale sempre ammesso
- Cron domenica 21:00
- Rolling-window obbligatoria PRIMA di ogni append
- Alias-index obbligatorio in ogni run (v4)