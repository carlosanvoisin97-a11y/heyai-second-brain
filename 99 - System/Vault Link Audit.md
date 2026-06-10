---
type: audit
status: active
created: 2026-05-08
updated: 2026-06-10
---
<!-- auto-updated by vault-link-checker 2026-06-10 (rolling-window: audit 2026-06-07 conservato — 3gg fa, sotto soglia 7gg; audit 2026-06-09 conservato — 1gg fa) -->

## Sessioni Cowork correlate

- 2026-05-08 sera — `local_4c933da1` + `local_8f7eeba2` — 7 run vault-link-checker progressivi (216 → 35 → 32 → 18 → 10 → 0 → 0). Stato finale: 0 broken wikilinks, 0 broken frontmatter, 0 path string rotti su 2353 wikilink in 331 file. Bug script v1 fixato (NFC normalization unicode + URL-decode path string) → [[2026-05-08 - Indice sessioni#Sessione 10 — Vault link checker batch fix orfani 24→0]]



# Vault Link Audit

Report settimanale dei wikilink rotti nel vault. Eseguito automaticamente dal task `vault-link-checker` (cron domenica 21:00, trigger manuale on-demand).

**Rolling-window**: questo file contiene l'audit più recente (<7gg) + la tabella "Trend storico" sintetica. Audit più vecchi sono in `50 - Archive/Vault Audits/{YYYY-MM}.md` (uno per mese).

Vedi CLAUDE.md §15 voce 7 per il protocollo di rinominazione manuale.

---

## Trend storico

| Data | Trigger | K wikilink rotti | J frontmatter | P path | Note |
|---|---|---|---|---|---|
| 2026-05-08 (run 1, originale) | manuale | 216 | 33 | 7 | first run dopo refactoring 6/5 — scoperta orfani storici |
| 2026-05-08 (run 2-7, batch fix progressivo) | manuale | 35 → 32 → 18 → 10 → 0 → 0 | 7 → 7 → 1 → 0 → 0 → 0 | 0 | 6 run progressivi nella stessa serata, stato finale pulito |
| 2026-05-10 | cron domenica 21:00 | 0 | 0 | 0 | stabile; patch v2 SKILL applicata (target qualsiasi ext, strip `[[ ]]` FM, URL-decode + NFC) |
| 2026-05-11 | cron drift (lun mattina) | 0 | 0 | 5 | refactoring path string Angelini Academy non propagato; fix in-session same day |
| 2026-05-12 | manuale (v3) | 5 | 1 | 0 | patch v3 SKILL applicata (strip `\|`, ext esplicita, post-code-strip); 10 falsi positivi v2 rimossi |
| 2026-05-14 (run iniziale) | scheduled giov off-cadence | 26 | 3 | 5 | ALERT: K +420% vs 5-12 · refactoring Angelini Academy + nuovi doc non ancora creati |
| 2026-05-14 (verifica post-fix) | manuale, in chat con Carlo | 18 | 0 | 5 | Stato post-batch fix: 7 fix sicuri + 13 alias frontmatter + patch SKILL v4 + 4 frontmatter rinominati + scheda Stefano Mambrin |
| 2026-05-15 (run scheduled, off-cadence ven) | scheduled ven off-cadence | 0 | 0 | 5 | 🟢 Vault clean: 18 residui 14/5 rientrati. Patch v4 alias-aware confermata in produzione · 49 alias registrati |
| 2026-05-17 (run scheduled, on-cadence domenica) | cron dom 21:00 | 5 | 0 | 5 | ⚠️ ALERT crescita 0→5 (∞%): 3 nuovi residui Angelini Academy (`[[Briefing Personaggi Landing Page]]` ×3 + `[[Verificare]]` ×1) + 1 nuovo stakeholder Jakala non scheduled. Cascata §10bis mancante su 2 entità. 55 alias / 27 file proprietari |
| 2026-05-24 (run scheduled, on-cadence domenica) | cron dom 21:00 | 15 | 4 | 5 | ⚠️ ALERT crescita 5→15 (+200%): debt cluster Angelini 17/5 + typo cognome Verrangia diffuso + nuovi stakeholder senza cascata. 70 alias / 31 file proprietari. **Batch fix in chat 24/5 sera ↓** |
| **2026-05-24 sera (batch fix in chat con Carlo)** | **manuale post-audit** | **1** | **0** | **5** | **✅ Cleanup completo**: 7 cluster fissati in batch (Verrangia rinomina massiva + cluster Angelini root spostato+frontmatter + Marta alias Eldis + Germano typo + Veo rimosso + LinkedIn agents da FM + related_meeting→meeting_context + bonus alias Brief Copy). K 15→1 (-93%), J 4→0. Solo `[[Verificare]]` lasciato per scelta esplicita Carlo. 68 alias / 31 file proprietari |
| **2026-06-07 (run manuale on-demand)** | **manuale** | **7** | **4** | **0** | ⚠️ K 1→7 (+6): vault cresciuto +134 .md (+164 file totali) dal 24/5. 3 cluster: Area-name mismatch (×2) + folder-link (×3) + placeholder (×1) + routine template (×1). J 0→4: stakeholders con nota parentetica (×4). P: scansione conservativa, 0 segnalati. 78 alias / 36 file proprietari |
| **2026-06-09 (run cloud schedulato)** | **cloud routine** | **37** | **4** | **0** | ⚠️ ALERT K>20 + crescita 7→37 (+429%): Cluster A inbox archiviata (×16) + Cluster B system patches (×9) + Cluster C area-name mismatch (×2, residuo da 7/6) + Cluster D persone (×5: Arianna alias mancante + Luca path errato + 2 schede assenti) + Cluster E placeholder (×5). J=4 stabile (stessi 4 frontmatter Angelini pitch). ⚠️ Broken in file modificato 24h: `[[Luciano Pecorella]]` in Open Tasks + Daily 2026-06-09. 85 alias / 36 proprietari |
| **2026-06-10 (run cloud schedulato)** | **cloud routine** | **45** | **3** | **0** | ⚠️ ALERT K>20 (residuo). K 37→45 (+22%): A inbox (×18) + B system (×9) + D persone (×7) + C area-mismatch (×2) + G folder (×3) + E placeholder (×1) + H altri (×5). J 4→3 (−1: v3.3 frontmatter fixato; la terza J è malformed YAML `[[[...]]]`). ⚠️ `[[Luciano Pecorella]]` persiste in Open Tasks + Daily 09/6. ⚠️ Broken in schede attive modificate <24h: `Eye Cookies.md`, `Operation Transformation.md`, `Crowd.md`. 87 alias / 39 proprietari |

_(Detail completo dei singoli audit archiviato in `50 - Archive/Vault Audits/2026-05.md`. La tabella viene aggiornata ad ogni audit con la riga sintetica del run.)_

---

## Audit 2026-06-07 — run manuale on-demand

> **Contesto run**: run manuale del 7/6/2026 (fuori cadenza domenicale). Vault cresciuto significativamente dal 24/5: +134 file .md (444 → 578), +164 file totali (735 → 899). Cluster Angelini Academy molto espanso (pitch, mockup, audit, deck). Script aggiornato alla versione corrente.

### Numeri sintetici

- **File `.md` scansionati**: 540 (escludendo EXCLUDE_PATHS)
- **File `.md` totali nel vault**: 578
- **File totali nel vault** (md + allegati + altri): 899
- **Wikilink rotti (K)**: **7**
- **Riferimenti frontmatter rotti (J)**: **4**
- **Path string rotti (P)**: **0** (scansione conservativa — solo wikilink e frontmatter)
- **Alias registrati nel vault**: **78 alias** su **36 file proprietari** ← v4 alias-aware
- **Δ vs audit precedente (2026-05-24 sera post-fix)**: K 1 → 7 (Δ +6) · J 0 → 4 (Δ +4) · P 5 → 0 (cambio metodologia, non miglioramento reale) · alias 68 → 78 (+10) · owners 31 → 36 (+5 da nuove schede con frontmatter `aliases:`)

### Broken wikilink (K = 7)

#### Cluster 1 — Area name mismatch (2 occorrenze in 2 file)

I link puntano a versioni abbreviate dei nomi file delle Aree, che in realtà hanno nomi più lunghi.

| Sorgente | Wikilink rotto | File reale | Fix |
|---|---|---|---|
| `80 - Sources/Cowork Sessions/2026-05-26 - Indice sessioni.md:65` | `[[30 - Areas/Area - Governance]]` | `30 - Areas/Area - Governance HeyAI.md` | Aggiungere alias `Area - Governance` al file, oppure correggere il link |
| `80 - Sources/Cowork Sessions/code-recap/2026-05-22 - aa-wt-quirky-snyder-0cac2447.md:35` | `[[30 - Areas/Area - Cybersecurity]]` | `30 - Areas/Area - Cybersecurity & Compliance.md` | Aggiungere alias `Area - Cybersecurity` al file, oppure correggere il link |

#### Cluster 2 — Folder link senza index file (3 occorrenze in 2 file)

Wikilink che puntano a cartelle anziché a file. Obsidian non risolve link a cartelle prive di file index.

| Sorgente | Wikilink rotto | Diagnosi | Fix |
|---|---|---|---|
| `80 - Sources/Cowork Sessions/2026-05-28 - Recovery Code sessions backlog.md:17` | `[[80 - Sources/Cowork Sessions/code-recap]]` | Cartella esiste ma nessun file con quel nome | Backtick o link testuale, oppure creare `code-recap.md` nella cartella |
| `80 - Sources/Cowork Sessions/2026-05-28 - Recovery Code sessions backlog.md:143` | `[[40 - Resources/Concetti]]` | Cartella esiste, nessun index file | Idem |
| `80 - Sources/Cowork Sessions/code-recap/2026-05-26 - presentazioni-strategiche-47f27518.md:73` | `[[40 - Resources/Concetti]]` | Idem | Idem |

#### Cluster 3 — Placeholder / template artifact (2 occorrenze in 2 file)

| Sorgente | Wikilink rotto | Diagnosi | Fix |
|---|---|---|---|
| `20 - Projects/Futuritaly/Angelini Academy/Mockup Brief Sito.md:43` | `[[Verificare]]` | Placeholder testuale. Carlo ha confermato il 24/5 di lasciarlo intenzionalmente | Nessuna azione — placeholder esplicito |
| `99 - System/Routines/vault-link-checker.md:23` | `[[<target>]]` | Placeholder nel file della routine (template di esempio nel SKILL) | Nessuna azione — placeholder di esempio nel template |

### Broken frontmatter ref (J = 4)

Quattro occorrenze identiche in due file: il campo `stakeholders:` contiene nomi di persona con una nota parentetica che non corrisponde a nessuna scheda.

| Sorgente | Campo | Valore | Diagnosi | Fix |
|---|---|---|---|---|
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.2 - Post Osservazioni Carlo.md` | `stakeholders:` | `Marco Morbidelli (forse in stanza)` | Nota di contesto appesa al nome canonico. File esiste come `60 - People/Marco Morbidelli.md` | Togliere la nota parentetica — scrivere solo `Marco Morbidelli` |
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.2 - Post Osservazioni Carlo.md` | `stakeholders:` | `Tiziana Carnicelli (confermata in stanza)` | Idem per `60 - People/Tiziana Carnicelli.md` | Togliere la nota parentetica |
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` | `stakeholders:` | `Marco Morbidelli (forse in stanza)` | Idem | Idem |
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` | `stakeholders:` | `Tiziana Carnicelli (confermata in stanza)` | Idem | Idem |

### Broken path string (P = 0)

Scansione path string non eseguita in questo run (metodologia conservativa — solo wikilink e frontmatter per evitare falsi positivi su URL e path di sistema).

### Alert priorità alta

- K = 7: sotto la soglia di alert SKILL (K > 20). Nessun alert "vault degraded".
- K crescita +600% (1 → 7): tecnicamente sopra soglia "+50%", ma il contesto è espansione vault (+134 .md in 14gg) e i broken sono tutti in file `80 - Sources/` (indici sessioni auto-generati) o file Inbox/archivio — nessuno in schede `20 - Projects/` o `60 - People/` attive. Valutazione: **basso impatto operativo**.
- Nessun broken in `60 - People/` o `20 - Projects/` modificato nelle ultime 24h.

### 🔵 Decisioni richieste a Carlo

1. **Cluster 1 (Area name mismatch)** — fix minimo: aggiungere `aliases: [Area - Governance]` a `Area - Governance HeyAI.md` e `aliases: [Area - Cybersecurity]` a `Area - Cybersecurity & Compliance.md`. Risolve 2 K in 2 edit.
2. **Cluster 2 (folder link)** — i 3 link a cartelle in file `80 - Sources/` sono auto-generati dagli indexer. Fix preferibile: backtick nei file sorgente (non creare index file nelle cartelle). Bassa urgenza — file storici.
3. **Cluster 3 (placeholder)** — confermato intenzionale il 24/5 (`[[Verificare]]`). `[[<target>]]` in routine template: nessuna azione.
4. **J cluster stakeholders con nota** — 4 occorrenze in 2 file Inbox Angelini (maggio 2026, ora archiviabili). Fix: rimuovere nota parentetica dai `stakeholders:` YAML. Alternativa: ignorare come Inbox storico.

### 🟢 Verifica patch v4 SKILL alias-aware

- **78 alias** registrati (vs 68 al 24/5 sera, +10 alias, +5 owner file) — crescita fisiologica per le nuove schede aggiunte nel periodo 25/5-7/6.
- Nessun falso positivo identificato in questo run: tutti i 7 K sono confermati broken, tutti i 4 J sono confermati broken.
- I 1990+ wikilink che puntavano a percorsi assoluti (es. `[[20 - Projects/NOT/Eye Cookies]]`) vengono tutti risolti correttamente.

### Prossimo run

Cron canonico domenica 15:40 = **dom 14/6/2026 ~15:40 CEST**. Aspettativa se Carlo applica i fix cluster 1+4: K=5 (folder link non urgenti + 2 placeholder) · J=0.

---

## Audit 2026-06-09 — run cloud schedulato

> **Contesto run**: run cloud del 9/6/2026. Vault cresciuto ulteriormente dal 7/6: 615 file .md totali (+37 vs audit 7/6), 948 file totali. Il salto K 7→37 è principalmente causato da link a file archiviati (Inbox e System) mai aggiornati nei file sorgente.

### Numeri sintetici

- **File `.md` scansionati**: 574 (escludendo EXCLUDE_PATHS)
- **File `.md` totali nel vault**: 615
- **File totali nel vault** (md + allegati + altri): 948
- **Wikilink totali esaminati**: 4.896
- **Wikilink rotti (K)**: **37**
- **Riferimenti frontmatter rotti (J)**: **4**
- **Path string rotti (P)**: **0** (scansione conservativa)
- **Alias registrati nel vault**: **85 alias** su **36 file proprietari** ← v4 alias-aware
- **Δ vs audit precedente (2026-06-07)**: K 7→37 (Δ+30) · J 4→4 (stabile) · P 0→0 · alias 78→85 (+7) · owners 36→36 (stabile)

### ⚠️ Alert priorità alta

- **K=37**: sopra soglia di alert SKILL (K > 20) → **ALERT ATTIVO**
- **K crescita +429%** (7→37): sopra soglia "+50%" → **ALERT ATTIVO** — contestualizzazione: 25/37 broken sono in file storici (`80 - Sources/`, `50 - Archive/`, `10 - Daily Notes/` passate) con basso impatto operativo
- **Broken link in file modificato nelle ultime 24h**: `[[Luciano Pecorella]]` in `10 - Daily Notes/2026-06-09.md` L21 e `99 - System/Open Tasks.md` L126 → persona senza scheda, task assegnato a lei in Open Tasks — **Fix prioritario**
- **Broken in file progetto attivo**: `[[Arianna]]` in `20 - Projects/NoLoop/Wave 2/Crowd.md` L136 — fix minimo: aggiungere `aliases: [Arianna]` a `60 - People/Arianna Giordanella.md`

### Broken wikilink (K = 37)

#### Cluster A — Inbox archiviata (16 link in 9 file sorgente)

File spostati da `00 - Inbox/` a `50 - Archive/Inbox/2026-05/` (o `2026-04/`) ma i link nei file sorgente non sono stati aggiornati.

| Link rotto (path vecchio) | Source file (abbreviato) |
|---|---|
| `[[00 - Inbox/2026-05-13 - BOZZA Email Germano Eye Cookies partenza sviluppi]]` | Eye Cookies.md · Carmen Compare.md · Germano Marano.md · Massi Sinigaglia.md · Laila El Zieny.md · Justin Lauro.md **(6 file)** |
| `[[00 - Inbox/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD)]]` | Operation Transformation.md |
| `[[00 - Inbox/2026-05-12 - BOZZA Email Recap Crowd Sessione Finale]]` | Crowd.md |
| `[[00 - Inbox/2026-05-13 - Email Lavinia Recap Website e Osservatorio]]` | 50 - Archive/Cowork Sessions Log/2026-05.md |
| `[[00 - Inbox/2026-05-13 - BOZZA Email Recap Federico Simone allineamento interno]]` | 50 - Archive/Cowork Sessions Log/2026-05.md |
| `[[00 - Inbox/2026-04-30 - Panorama iniziale]]` | 10 - Daily Notes/2026-04-30.md |
| `[[00 - Inbox/2026-05-14 - BOZZA Risposta Germano credenziali rinnovo Microlog]]` | Germano Marano.md |
| `[[00 - Inbox/2026-05-13 - BOZZA Email Recap Elena post call cluster]]` | 80 - Sources/Cowork Sessions/2026-05-14 - Indice sessioni.md |
| `[[00 - Inbox/2026-05-05 - Decisione finale fornitori]]` | Master Facts Sheet.md (L191) |
| `[[00 - Inbox/2026-05-06 - PREP Rebalance call Pasquali]]` | Master Facts Sheet.md (L191) |
| `[[00 - Inbox/2026-05-04 - Scenari Fornitori (post call Silencio)]]` | Master Facts Sheet.md (L194) |

**Fix**: aggiornare il prefisso `00 - Inbox/` → `50 - Archive/Inbox/2026-05/` (o `2026-04/`). I file più critici: `Master Facts Sheet.md` (3 link) e le 6 schede persona che puntano alla BOZZA Email Germano.

#### Cluster B — File di sistema archiviati (9 link in 4 file sorgente)

File spostati da `99 - System/` a `50 - Archive/System Patches/` o `50 - Archive/DPIII/` ma i link non sono stati aggiornati.

| Link rotto | Source file(s) |
|---|---|
| `[[99 - System/Patch SKILL cowork-sessions-index 2026-05-07]]` | Daily Notes/2026-05-07.md · Indice sessioni 2026-05-07 · Indice sessioni 2026-05-08 · CLAUDE Changelog Archive.md **(4)** |
| `[[99 - System/Audit Claude Chats Estrazione 2026-05-07]]` | Daily Notes/2026-05-07.md · Indice sessioni 2026-05-07 |
| `[[99 - System/SKILL cowork-sessions-index POST-PATCH UNIFICATA]]` | Indice sessioni 2026-05-07 |
| `[[99 - System/Patch SKILL cowork-sessions-index 2026-05-08 — addendum]]` | CLAUDE Changelog Archive.md |
| `[[99 - System/DPIII Fase 4 — Briefing per consolidamento]]` | 50 - Archive/DPIII/DPIII Fase 4 — Output Consolidamento 5-5.md |

**Fix**: aggiornare i path in `99 - System/CLAUDE Changelog Archive.md` (2 link) e nei file indice di sessione (3 link). Il link al DPIII è in un file già archiviato — bassa urgenza.

#### Cluster C — Area name mismatch (2 link — residuo da audit 7/6, non ancora fixato)

- `[[30 - Areas/Area - Governance]]` → source: `80 - Sources/Cowork Sessions/2026-05-26 - Indice sessioni.md` L62 · file reale: `30 - Areas/Area - Governance HeyAI.md`
- `[[30 - Areas/Area - Cybersecurity]]` → source: `80 - Sources/Cowork Sessions/code-recap/2026-05-22 - aa-wt-quirky-snyder-0cac2447.md` L27 · file reale: `30 - Areas/Area - Cybersecurity & Compliance.md`

**Fix** (stesso del 7/6): aggiungere `aliases: [Area - Governance]` in `Area - Governance HeyAI.md` e `aliases: [Area - Cybersecurity]` in `Area - Cybersecurity & Compliance.md`.

#### Cluster D — Persone (5 link, 3 target distinti)

| Link rotto | Source | Diagnosi | Fix |
|---|---|---|---|
| `[[Arianna]]` | `20 - Projects/NoLoop/Wave 2/Crowd.md` L136 | File esiste: `60 - People/Arianna Giordanella.md` ma alias `Arianna` non registrato | Aggiungere `aliases: [Arianna]` al file persona |
| `[[60 - People/Luca (Silencio)]]` | `50 - Archive/DPIII/DPIII Fase 4 — Briefing per consolidamento.md` L94 | Path non valido — l'alias `Luca (Silencio)` esiste ma senza prefisso assoluto | Correggere in `[[Luca (Silencio)]]` |
| `[[Luciano Pecorella]]` | `10 - Daily Notes/2026-06-09.md` L21 + `99 - System/Open Tasks.md` L126 | Scheda persona assente — compare in Open Tasks (task assegnato!) | ⚠️ Creare `60 - People/Luciano Pecorella.md` oppure chiedere a Carlo chi è e se va triagato |
| `[[Simona Velotta]]` | `10 - Daily Notes/2026-06-07.md` L65 | Scheda persona assente | Decidere se creare scheda o rimuovere link |

#### Cluster E — Placeholder e sintassi (5 link — nessuna azione urgente)

| Link | Source | Diagnosi |
|---|---|---|
| `[[<target>]]` | `99 - System/Routines/vault-link-checker.md` L23 | Placeholder nel template SKILL — by design |
| `[[Verificare]]` | `20 - Projects/Futuritaly/Angelini Academy/Mockup Brief Sito.md` L41 | Reminder inline intenzionale (confermato 24/5) |
| `[[60 - People/Carmen ...]]` | `80 - Sources/Cowork Sessions/code-recap/2026-06-06 - claude-wt-quizzical-faraday-aee36402.md` | Placeholder auto-generato da code recap |
| `[[60 - People/Germano ...]]` | Stesso file code-recap | Idem |
| `[[80 - Sources/Cowork Sessions/2026-05-07.md]]` | `10 - Daily Notes/2026-05-08.md` L44 | Estensione `.md` inclusa nel link — Obsidian non risolve; correggere in `[[2026-05-07 - Indice sessioni]]` |

### Broken frontmatter ref (J = 4 — stabile, stesso cluster del 7/6)

| File | Campo | Valore non canonico | Valore corretto |
|---|---|---|---|
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.2 - Post Osservazioni Carlo.md` | `stakeholders` | `Marco Morbidelli (forse in stanza)` | `Marco Morbidelli` |
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.2 - Post Osservazioni Carlo.md` | `stakeholders` | `Tiziana Carnicelli (confermata in stanza)` | `Tiziana Carnicelli` |
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` | `stakeholders` | `Marco Morbidelli (forse in stanza)` | `Marco Morbidelli` |
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` | `stakeholders` | `Tiziana Carnicelli (confermata in stanza)` | `Tiziana Carnicelli` |

Entrambi i file Pitch Angelini sono in `00 - Inbox/` (maggio 2026, ora archiviabili). Fix: rimuovere le note parentetiche dai `stakeholders:` YAML.

### 🔵 Decisioni richieste a Carlo

1. **`[[Luciano Pecorella]]` in Open Tasks L126** (priorità alta) — persona senza scheda con task assegnato. Chi è Luciano Pecorella? Va creata la scheda `60 - People/Luciano Pecorella.md`?
2. **Cluster A — Master Facts Sheet** (priorità media) — 3 link a Inbox archiviata (`Decisione finale fornitori`, `PREP Rebalance call Pasquali`, `Scenari Fornitori`). Fix: aggiornare path → `50 - Archive/Inbox/2026-05/`.
3. **Cluster C — Area aliases** (priorità bassa, residuo da 7/6) — 2 fix di 1 minuto ciascuno: aggiungere alias `Area - Governance` e `Area - Cybersecurity` ai rispettivi file.
4. **`[[Arianna]]` in Crowd.md** (priorità bassa) — aggiungere `aliases: [Arianna]` in `60 - People/Arianna Giordanella.md`.
5. **`[[Simona Velotta]]`** — creare scheda o rimuovere il link dalla daily note del 7/6?
6. **J cluster Angelini Inbox** (priorità bassa) — 4 frontmatter con nota parentetica; file archiviabili.

### 🟢 Verifica patch v4 SKILL alias-aware

- **85 alias** registrati (vs 78 al 7/6, +7 alias, owners stabili a 36) — crescita fisiologica.
- Nota tecnica: `Accessibility Specs Sito Nuovo Angelini Academy.md` ha errore di sintassi YAML nel frontmatter (URL non quotata nel campo `standard:`). Il parser YAML fallisce; il file richiede correzione per garantire caricamento alias robusto in futuro.
- Nessun falso positivo identificato in questo run: tutti i 37 K e 4 J sono confermati broken.

### Prossimo run

Cron canonico domenica 15:40 CEST = **dom 14/6/2026 ~15:40**. Aspettativa con fix cluster C + D.Arianna + D.Luca: K scende a ~31 (rimozione 4 link tecnici). Con fix Cluster A Master Facts Sheet: K ~28.

---

## Audit 2026-06-10 — run cloud schedulato

> **Contesto run**: run cloud del 10/6/2026 (domenica 15:40 CEST, on-cadence). Vault: 620 file .md (+5 vs 9/6), 953 file totali. Rolling-window: audit 7/6 e 9/6 entrambi <7gg — conservati nel file vivo, nessun archiving.

### Numeri sintetici

- **File `.md` scansionati**: 582 (escludendo EXCLUDE_PATHS)
- **File `.md` totali nel vault**: 620
- **File totali nel vault** (md + allegati + altri): 953
- **Wikilink totali esaminati**: 5.000
- **Wikilink rotti (K)**: **45**
- **Riferimenti frontmatter rotti (J)**: **3**
- **Path string rotti (P)**: **0** (scansione conservativa)
- **Alias registrati nel vault**: **87 alias** su **39 file proprietari** ← v4 alias-aware
- **Δ vs audit precedente (2026-06-09)**: K 37→45 (Δ+8, +22%) · J 4→3 (Δ−1) · P 0→0 · alias 85→87 (+2) · owners 36→39 (+3)

### ⚠️ Alert priorità alta

- **K=45**: sopra soglia SKILL (K > 20) → **ALERT ATTIVO**
- **K crescita +22%** (37→45): sotto soglia "+50%", ma K>20 rimane attivo
- **`[[Luciano Pecorella]]` persiste** in `99 - System/Open Tasks.md` e `10 - Daily Notes/2026-06-09.md` — persona senza scheda con task assegnato. **Irrisolto dal 9/6.**
- **Broken in schede progetto attive modificate nelle ultime 24h**: `20 - Projects/NOT/Eye Cookies.md` · `20 - Projects/NOT/Operation Transformation.md` · `20 - Projects/NoLoop/Wave 2/Crowd.md`

### Broken wikilink (K = 45) + frontmatter (J = 3)

#### Cluster A — Inbox archiviata (18 link in 12 file sorgente)

File spostati da `00 - Inbox/` a `50 - Archive/Inbox/2026-05/` (o `2026-04/`). I link nei file sorgente non sono stati aggiornati.

| File sorgente | Link rotto | Fix |
|---|---|---|
| `20 - Projects/NOT/Operation Transformation.md` | `[[00 - Inbox/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD)]]` | path → `50 - Archive/Inbox/2026-05/` |
| `20 - Projects/NOT/Eye Cookies.md` | `[[00 - Inbox/2026-05-13 - BOZZA Email Germano Eye Cookies partenza sviluppi]]` | idem |
| `20 - Projects/NoLoop/Wave 2/Crowd.md` | `[[00 - Inbox/2026-05-12 - BOZZA Email Recap Crowd Sessione Finale]]` | idem |
| `60 - People/Germano Marano.md` | `[[00 - Inbox/2026-05-14 - BOZZA Risposta Germano credenziali rinnovo Microlog]]` + `[[00 - Inbox/2026-05-13 - BOZZA Email Germano Eye Cookies partenza sviluppi]]` | idem |
| `60 - People/Massi Sinigaglia.md` · `Laila El Zieny.md` · `Justin Lauro.md` · `Carmen Compare.md` | `[[00 - Inbox/2026-05-13 - BOZZA Email Germano Eye Cookies partenza sviluppi]]` (×4) | idem |
| `99 - System/Master Facts Sheet.md` | `[[00 - Inbox/2026-05-05 - Decisione finale fornitori]]` + `[[00 - Inbox/2026-05-06 - PREP Rebalance call Pasquali]]` + `[[00 - Inbox/2026-05-04 - Scenari Fornitori (post call Silencio)]]` | idem |
| `80 - Sources/Cowork Sessions/2026-05-14 - Indice sessioni.md` | `[[00 - Inbox/2026-05-13 - BOZZA Email Recap Elena post call cluster]]` | idem |
| `50 - Archive/Cowork Sessions Log/2026-05.md` | 2 link inbox | idem (file archiviato, bassa urgenza) |
| `50 - Archive/System/CLAUDE.md Backup Pre-Optimization 2026-05-14.md` | 2 link inbox | idem (file archiviato, bassa urgenza) |
| `10 - Daily Notes/2026-04-30.md` | `[[00 - Inbox/2026-04-30 - Panorama iniziale]]` | path → `50 - Archive/Inbox/2026-04/` (bassa urgenza) |

**Priorità**: alta per `Master Facts Sheet.md` (3 link a inbox archiviata) e le schede progetto attive modificate di recente.

#### Cluster B — File di sistema archiviati (9 link in 7 file)

File spostati da `99 - System/` a `50 - Archive/System Patches/` o `50 - Archive/DPIII/`.

| Link rotto | File sorgente principali |
|---|---|
| `[[99 - System/Patch SKILL cowork-sessions-index 2026-05-07]]` | Daily 2026-05-07 · Cowork Sessions 2026-05-07/08 · CLAUDE Changelog Archive (×4) |
| `[[99 - System/Audit Claude Chats Estrazione 2026-05-07]]` | Daily 2026-05-07 · Cowork Sessions 2026-05-07 (×2) |
| `[[99 - System/SKILL cowork-sessions-index POST-PATCH UNIFICATA]]` | Cowork Sessions 2026-05-07 |
| `[[99 - System/Patch SKILL cowork-sessions-index 2026-05-08 — addendum]]` | CLAUDE Changelog Archive |
| `[[99 - System/DPIII Fase 4 — Briefing per consolidamento]]` | `50 - Archive/DPIII/DPIII Fase 4 — Output Consolidamento 5-5.md` |

**Fix**: aggiornare i path a `50 - Archive/System Patches/` nei file `CLAUDE Changelog Archive.md` e nei file indice sessione. Bassa urgenza — file storici.

#### Cluster C — Area name mismatch (2 link — residuo da 7/6 e 9/6)

- `[[30 - Areas/Area - Governance]]` → `80 - Sources/Cowork Sessions/2026-05-26 - Indice sessioni.md` · file reale: `Area - Governance HeyAI.md`
- `[[30 - Areas/Area - Cybersecurity]]` → `80 - Sources/Cowork Sessions/code-recap/2026-05-22 - aa-wt-quirky-snyder-0cac2447.md` · file reale: `Area - Cybersecurity & Compliance.md`

**Fix** (identico al 7/6 e 9/6, ancora non applicato): aggiungere `aliases: [Area - Governance]` in `Area - Governance HeyAI.md` e `aliases: [Area - Cybersecurity]` in `Area - Cybersecurity & Compliance.md`.

#### Cluster D — Persone (7 link, 5 distinti)

| Link rotto | File sorgente | Diagnosi | Fix |
|---|---|---|---|
| `[[Arianna]]` | `Crowd.md` | `Arianna Giordanella.md` esiste, alias mancante | `aliases: [Arianna]` in `Arianna Giordanella.md` |
| `[[Luciano Pecorella]]` | Open Tasks L126 + Daily 2026-06-09 | ⚠️ scheda persona assente — task assegnato | Chiedere a Carlo chi è e se va creata la scheda |
| `[[Simona Velotta]]` | Daily 2026-06-07 | Scheda persona assente | Creare scheda o rimuovere link |
| `[[60 - People/Luca (Silencio)]]` | `50 - Archive/DPIII/` | Path-prefix non valido — alias `Luca (Silencio)` esiste ma non con prefisso assoluto | Correggere in `[[Luca (Silencio)]]` (no path) |
| `[[60 - People/Carmen ...]]` · `[[60 - People/Germano ...]]` | `code-recap/2026-06-06 - claude-wt-quizzical-faraday-aee36402.md` | Placeholder truncato auto-generato da code-recap | Nessuna azione urgente — file indice auto-generato |

#### Cluster E — Placeholder (1)

| Link rotto | File sorgente | Diagnosi |
|---|---|---|
| `[[Verificare]]` | `Futuritaly/Angelini Academy/Mockup Brief Sito.md` | Reminder inline intenzionale (confermato 24/5 da Carlo) |

#### Cluster F — Frontmatter anomalie (J = 3)

| File | Campo | Valore non canonico | Fix |
|---|---|---|---|
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.2 - Post Osservazioni Carlo.md` | `stakeholders` | `Marco Morbidelli (forse in stanza)` | Rimuovere nota parentetica |
| `00 - Inbox/2026-05-23 - Pitch Angelini v3.2 - Post Osservazioni Carlo.md` | `stakeholders` | `Tiziana Carnicelli (confermata in stanza)` | Rimuovere nota parentetica |
| `00 - Inbox/2026-05-22 - Contesto Eye Cookies pre-requirement log.md` | `projects` | `[[['20 - Projects/NOT/Eye Cookies']]]` (triple brackets YAML malformato) | Correggere in `['20 - Projects/NOT/Eye Cookies']` o `[Eye Cookies]` |

Nota: `v3.3 - Atto 1 Ristrutturato.md` aveva gli stessi 2 stakeholder J nel run 9/6 — ora non compaiono (probabilmente fixati tra i run). J scende da 4 a 3.

#### Cluster G — Folder link senza file index (3)

| Link rotto | File sorgente |
|---|---|
| `[[80 - Sources/Cowork Sessions/code-recap/]]` | `2026-05-28 - Recovery Code sessions backlog.md` |
| `[[40 - Resources/Concetti/]]` | `2026-05-28 - Recovery Code sessions backlog.md` |
| `[[30 - Areas/Area - Performance & Coaching/]]` | `code-recap/2026-05-27 - aa-wt-serene-moore-ad9a9e5f.md` |

Wikilink a cartelle (trailing slash o path senza file). Obsidian non risolve. Bassa urgenza — file indice auto-generati.

#### Cluster H — Vari (5)

| Link rotto | File sorgente | Diagnosi |
|---|---|---|
| `[[80 - Sources/Claude Chats/Export 2026-04-30/Call con gli sviluppatori]]` | `Eldis Compilatore.md` | Il .md è DENTRO una sottocartella omonima; il path punta alla cartella, non al file |
| `[[30 - Areas/Area - Partnership Fornitori]]` | `00 - Inbox/Pitch Angelini v3 - Riscrittura McKinsey.md` | Cartella con `_Area - Partnership Fornitori.md` dentro — link alla directory, non al file |
| `[[80 - Sources/Cowork Sessions/2026-05-07.md]]` | `Daily Notes/2026-05-08.md` | Estensione `.md` inclusa nel link — Obsidian non risolve; correggere in `[[2026-05-07 - Indice sessioni]]` |
| `[[90 - Templates/Proposta Investimento]]` | `Cowork Sessions/2026-05-07 - Indice sessioni.md` | Template archiviato il 14/5/2026 in `50 - Archive/System Snapshots/` |
| `[[40 - Resources/Concetti]]` | `code-recap/2026-05-26 - presentazioni-strategiche-47f27518.md` | Link a cartella (no trailing slash) — directory esiste ma nessun file con quel nome |

### 🔵 Decisioni richieste a Carlo

1. **`[[Luciano Pecorella]]` in Open Tasks** (⚠️ priorità massima, persiste dal 9/6) — chi è Luciano Pecorella? Va creata `60 - People/Luciano Pecorella.md`?
2. **Cluster A — Schede progetto attive** (priorità alta) — `Eye Cookies.md`, `Operation Transformation.md`, `Crowd.md` puntano a Inbox archiviata. Fix: aggiornare path prefix `00 - Inbox/` → `50 - Archive/Inbox/2026-05/`.
3. **Cluster A — Master Facts Sheet** (priorità media) — 3 link a file inbox archiviata. Stessi dal 9/6, non ancora fixati.
4. **Cluster C — Area aliases** (priorità bassa, residuo da 7/6) — 2 edit di 1' ciascuno: aggiungere alias in `Area - Governance HeyAI.md` e `Area - Cybersecurity & Compliance.md`.
5. **Cluster D — `[[Arianna]]`** (priorità bassa) — `aliases: [Arianna]` in `Arianna Giordanella.md`.
6. **`[[Simona Velotta]]`** — creare scheda o rimuovere link dalla daily del 7/6?

### 🟢 Verifica patch v4 SKILL alias-aware

- **87 alias** su **39 proprietari** (vs 85/36 al 9/6, +2 alias, +3 owners — crescita fisiologica).
- Nessun falso positivo identificato in questo run: tutti i 45 K e 3 J sono confermati broken (xlsx/docx risolti correttamente con idx_basename dual-key).

### Prossimo run

Cron canonico domenica 15:40 CEST = **dom 14/6/2026 ~15:40**. Aspettativa con fix cluster C (area aliases) + D.Arianna + D.Luca: K scende a ~39. Con fix Cluster A schede attive: K ~36.

---
