---
type: audit
status: active
created: 2026-05-08
updated: 2026-05-17
---
<!-- auto-updated by vault-link-checker 2026-05-17 (rolling-window applicata: audit 2026-05-15 spostato in 50 - Archive/Vault Audits/2026-05.md) -->

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
| **2026-05-17 (run scheduled, on-cadence domenica)** | **cron dom 21:00** | **5** | **0** | **5** | **⚠️ ALERT crescita 0→5 (∞%)**: 3 nuovi residui Angelini Academy (`[[Briefing Personaggi Landing Page]]` ×3 + `[[Verificare]]` ×1) + 1 nuovo stakeholder Jakala non scheduled (`[[Luigiandrea Scaramuzzi (Jakala)]]`). Cascata §10bis mancante su 2 entità. 55 alias / 27 file proprietari |

_(Detail completo dei singoli audit archiviato in `50 - Archive/Vault Audits/2026-05.md`. La tabella viene aggiornata ad ogni audit con la riga sintetica del run.)_

---

## 2026-05-17 - Audit settimanale (run scheduled, on-cadence domenica 21:00)

> **Cadenza ripristinata**: dopo 3 audit off-schedule consecutivi (lun 11, giov 14, ven 15), il run odierno è tornato sulla finestra canonica domenica 21:00 (cron `0 21 * * 0`). Pattern off-cadence sembra rientrato. Niente azione richiesta sullo scheduler.

### Numeri sintetici

- **File `.md` scansionati**: 364 (escludendo EXCLUDE_PATHS)
- **File `.md` totali nel vault**: 395
- **File totali nel vault** (md + attachment + altri): 571
- **Wikilink totali estratti**: 2926 (esclusi spans inline-code e codeblock)
- **Wikilink rotti rilevati**: **5** ⚠️
- **Riferimenti frontmatter rotti**: **0** ✅
- **Path string rotti**: **5** (invariato, cronistoria volutamente non propagata)
- **Alias registrati nel vault**: **55 alias** su **27 file proprietari** ← v4 alias-aware
- **Δ vs audit precedente (2026-05-15)**: K 0 → 5 (Δ +5, **crescita ∞% — alert SKILL "K >50%" attivo per natura del rapporto, non per assoluto**) · J 0 → 0 (invariato) · P 5 → 5 (invariato) · alias 49 → 55 (+6 da nuove schede Angelini Academy: `Master Brief Sito Angelini Academy` + `Mockup Brief Sito`)
- **Rolling-window applicato**: 1 audit (2026-05-15) spostato in `50 - Archive/Vault Audits/2026-05.md` — file vivo torna alla baseline ~130 righe

### ⚠️ Wikilink rotti — 5 residui in 3 file

| Sorgente (mtime) | Wikilink rotto | Diagnosi | Fix suggerito |
|---|---|---|---|
| `20 - Projects/Futuritaly/Angelini Academy/Brief Copy Sito per Claude Code.md` (15/5 14:32) | `[[Briefing Personaggi Landing Page]]` ×1 | Il file target esiste a vault-root come `Angelini Academy — Briefing Personaggi Landing Page.md` (creato 14/5 12:56) ma senza frontmatter / senza `aliases:` → Obsidian non risolve la forma corta che Carlo scrive naturalmente | (a) Aggiungere frontmatter con `aliases: [Briefing Personaggi Landing Page]` al file root, oppure (b) riscrivere wikilink come `[[Angelini Academy — Briefing Personaggi Landing Page\|Briefing Personaggi Landing Page]]`. Bonus: valutare spostamento del file da vault-root a `20 - Projects/Futuritaly/Angelini Academy/` per coerenza con la struttura cluster (vedi CLAUDE.md §3.1) |
| `20 - Projects/Futuritaly/Angelini Academy/Mockup Brief Sito.md` (14/5 23:53) | `[[Briefing Personaggi Landing Page]]` ×2 | Stesso pattern del precedente (riferimento nelle sezioni intro + dettaglio personas) | Lo stesso fix (a) o (b) risolve tutte e 3 le occorrenze in un colpo |
| `20 - Projects/Futuritaly/Angelini Academy/Mockup Brief Sito.md` (14/5 23:53) | `[[Verificare]]` ×1 | Riga 43: placeholder testuale "Lì serve aggiungere [[Verificare]] (Carlo) la lista nomi e ruoli". Carlo voleva un TODO/segnaposto, non un wikilink | Riscrivere come `[Verificare]` (testo) o `**[VERIFICARE]**` o backtickare. Convenzione vault: i placeholder vanno in backtick o `**TODO**` |
| ~~`10 - Daily Notes/2026-05-15.md` (15/5 12:02)~~ | ~~`[[60 - People/Luigiandrea Scaramuzzi (Jakala)\|Luigiandrea Scaramuzzi]]` ×1~~ | ✅ **RISOLTO 2026-05-19 sera** — scheda persona creata su autorizzazione esplicita Carlo dopo §15.quinquies anti-duplicazione check (5 alias verificati, nessun pre-esistente). Cascata §10bis applicata: scheda `60 - People/Luigiandrea Scaramuzzi (Jakala).md` con frontmatter completo + aliases [Luigiandrea Scaramuzzi · Luigi Andrea Scaramuzzi · Luigi Scaramuzzi · Luigi Andrea · Luigi (Jakala) · Scaramuzzi] · entry tabella `## Pattern di negoziazione` di Master Facts (sotto Andrea Pasquali Jakala) · riga in CLAUDE.md §7 sotto bullet Jakala fornitori · wikilink 🆕 in MOC - Home cluster "Fornitori potenziali in valutazione" | Atteso K=4 al prossimo run vault-link-checker (dom 24/5/2026 21:00) — riduzione 5→4 wikilink rotti |

**Composizione per cluster**: 4/5 broken wikilink (80%) sono in cluster Angelini Academy — coerente con l'attività intensa sulla preparazione pitch 31/5 nelle ultime 72h (nuovi doc creati senza propagazione completa wikilink/alias). 1/5 è cascata §10bis mancante su nuovo stakeholder Jakala.

### 🟢 Riferimenti frontmatter — nessuno rotto

Stato `J=0` confermato. Verificata persistenza dell'effetto patch 14/5: nessun nuovo `related_meeting:` rotto né `stakeholders:` orfano. Le 3 occorrenze precedentemente rilevate `stakeholders: Luca (Silencio)` (Osservatorio Strategico, PresidIa, Achipoint) ora risolvono via alias `Luca (Silencio)` registrato su `Luca Fratini (Aegiscore).md` — patch v4 alias-aware funziona end-to-end anche per il frontmatter check.

### ⚫ Path string rotti (5 invariati — cronistoria intenzionale)

Identici al run 15/5 — decisione 13/5 sera tardo confermata. Backlinks STORICI negli indici giornalieri `80 - Sources/Cowork Sessions/` post Batch B+C lasciati invariati per non falsificare cronistoria.

| Sorgente | Path rotto | Path target attuale |
|---|---|---|
| `80 - Sources/Cowork Sessions/2026-05-06 - Indice sessioni.md` | `…/00 - Inbox/2026-05-05 - Decisione finale fornitori.md` | `50 - Archive/Inbox/2026-05/2026-05-05 - Decisione finale fornitori.md` |
| `80 - Sources/Cowork Sessions/2026-05-08 - Indice sessioni.md` | `…/00 - Inbox/2026-05-07 - Angelini Academy - Domande QA.docx` | `50 - Archive/Inbox/2026-05/2026-05-07 - Angelini Academy - Domande QA.docx` |
| `80 - Sources/Cowork Sessions/2026-05-08 - Indice sessioni.md` | `…/00 - Inbox/2026-05-08 - Prep call cliente Angelini Academy.md` | `50 - Archive/Inbox/2026-05/2026-05-08 - Prep call cliente Angelini Academy.md` |
| `80 - Sources/Cowork Sessions/2026-05-08 - Indice sessioni.md` | `…/99 - System/SKILL cowork-sessions-index POST-PATCH UNIFICATA.md` | `50 - Archive/System Patches/SKILL cowork-sessions-index POST-PATCH UNIFICATA.md` |
| `80 - Sources/Cowork Sessions/2026-05-08 - Indice sessioni.md` | `…/99 - System/Patch SKILL cowork-sessions-index 2026-05-08 sera — falle ordinamento e conflitti.md` | `50 - Archive/System Patches/Patch SKILL cowork-sessions-index 2026-05-08 sera — falle ordinamento e conflitti.md` |

### 🟢 Verifica patch v4 SKILL alias-aware

Patch v4 (14/5/2026) continua a essere in produzione e funzionante:

- **Alias-index attivo**: 55 alias registrati nell'indice del vault (vs 49 nel run 15/5) — +6 da nuove schede create 15-17/5: `Master Brief Sito Angelini Academy` (alias `Master Brief Sito`, `Master Brief Angelini`, `Brief Claude Code Angelini`) + `Mockup Brief Sito` (alias `Mockup Brief`, `Brief Mockup v2`, `Mockup Brief Sito Angelini`) + 1 alias aggiuntivo su scheda Stefano Mambrin (`Mambrin`).
- **27 file proprietari** di alias (vs 25 nel 15/5): `_Achipont`, `_Angelini Academy`, `_Area - Partnership Fornitori`, `_Area - Performance & Coaching`, `_Eldis`, `_Futuritaly`, `_Matteo Cosma`, `_NOT`, `_NoLoop`, `_Studio Murolo`, `_Wave 1 NoLoop`, `_Wave 2 NoLoop`, `Accessibility Specs Sito Nuovo Angelini Academy`, `Achipoint`, `Aegiscore`, `Crowd`, `Eye Cookies`, `Federico Saladino (Soolutions)`, `Luca Fratini (Aegiscore)`, `Massi Sinigaglia`, `Master Brief Sito Angelini Academy`, `Minutes`, `Mockup Brief Sito`, `OnSite`, `Simone Montanari (Soolutions)`, `Stefano Mambrin (Avanta)`, `2026-05-14 - Template Proposta Investimento (deprecato)`.
- **Wikilink risolti via alias confermati**: `[[Eldis]]`, `[[Wave 2 NoLoop]]`, `[[Accessibility Specs Sito Nuovo]]`, `[[Stefano Mambrin]]`, `[[Luca Fratini]]`, `[[Luca (Silencio)]]` (risolve via alias di `Luca Fratini (Aegiscore)`), `[[Futuritaly]]`, `[[FuturItaly]]`, `[[Angelini Academy]]`, `[[NoLoop]]`, `[[NOT]]`, `[[Achipont]]`, `[[Matteo Cosma]]`, `[[Studio Murolo]]`, `[[Eye Cookies]]`, `[[Crowd]]`, `[[OnSite]]`, `[[Federico Saladino]]`, `[[Simone Montanari]]`, `[[Master Brief Sito]]`, `[[Mockup Brief]]`.
- **Lesson sulla cascata alias**: Carlo ha applicato proattivamente `aliases:` sulle 2 nuove schede Angelini Academy (`Master Brief Sito Angelini Academy`, `Mockup Brief Sito`) — buona pratica da continuare. La scheda root `Angelini Academy — Briefing Personaggi Landing Page.md` invece NON ha frontmatter ⇒ causa diretta dei 3/5 broken wikilink di questo run.

### ⚠️ Alert globali

- **K = 5** → soglia SKILL "K > 20" NON attiva (siamo a 1/4 della soglia). Niente alert "vault degraded".
- **K crescita +∞% vs settimana scorsa** (0 → 5) → soglia SKILL "K cresce >50%" tecnicamente attiva, ma è un effetto matematico del partire da 0: qualsiasi nuovo broken link genera crescita infinita. Contestualizzare: 4/5 sono nuovo lavoro Angelini Academy (cascata alias parziale), 1/5 è stakeholder nuovo (cascata §10bis non applicata). Nessuno è regressione strutturale o orfano da refactoring non propagato.
- **Nuovo broken in `20 - Projects/`**: SÌ — 4/5 broken sono in `20 - Projects/Futuritaly/Angelini Academy/`. Tuttavia i 3 file sorgenti (`Brief Copy Sito per Claude Code.md` modificato 15/5 14:32, `Mockup Brief Sito.md` modificato 14/5 23:53) NON sono in finestra ultime 24h (taglio: 16/5 19:02 UTC). La soglia di alert SKILL "modificato nelle ultime 24h" quindi non si attiva. Resta priorità ALTA perché Carlo sta lavorando attivamente sul cluster Angelini per pitch 31/5.
- **Cadenza on-schedule** ✅: cron dom 21:00 ripristinato dopo 3 run off-cadence.

### 📌 File modificati nelle ultime 24h (16/5 19:02 → 17/5 19:02 UTC)

9 file modificati nelle ultime 24h, tutti con wikilink risolti ✅:

- `80 - Sources/Cowork Sessions/2026-05-17 - Indice sessioni.md` (indice giornaliero auto-generato)
- `20 - Projects/Futuritaly/Angelini Academy/Analisi Competitor (v2 archiviata).md`
- `20 - Projects/Futuritaly/Angelini Academy/Concept - Engaged Network Community.md`
- `20 - Projects/Futuritaly/Angelini Academy/Prompt Claude Code - Pagina Engaged Network Preview.md`
- `20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy.md`
- `99 - System/MOC Refresh Log.md`
- `99 - System/MOC - Home.md`
- `99 - System/Cowork Sessions Log.md`
- `00 - Inbox/2026-05-16 - Weekly Review.md`

Notevole concentrazione su cluster Angelini Academy (5 file su 9 — Carlo sta lavorando intensamente al pitch finale 31/5) e refresh sistema (MOC Home + MOC Refresh Log via task `moc-refresh` sabato).

### Prossimo run

Cron canonico domenica 21:00 = prossimo run **dom 24/5/2026 ~21:00**. Aspettative:
- Se Carlo fixa i 3 wikilink `[[Briefing Personaggi Landing Page]]` (via alias o rinomina) → K -3
- Se Carlo crea scheda `60 - People/Luigiandrea Scaramuzzi (Jakala).md` con cascata §10bis → K -1
- Se Carlo riscrive `[[Verificare]]` come placeholder testuale → K -1
- Target plausibile: ritorno K=0 entro fine settimana

### 🔵 Decisioni richieste a Carlo

1. **Scheda `Luigiandrea Scaramuzzi (Jakala)`** — nuovo Manager Jakala identificato 15/5, decisore-chiave per la quotazione bundle Osservatorio+Achipoint €50K. Cascata §10bis suggerita (Master Facts cluster Jakala, CLAUDE.md §7, MOC Home 🆕, eventuale Open Question su ruolo decisionale vs Andrea Pasquali).
2. **Frontmatter `Angelini Academy — Briefing Personaggi Landing Page.md`** — file a vault-root creato 14/5 senza frontmatter né alias. Aggiungere almeno `aliases: [Briefing Personaggi Landing Page]` + considerare spostamento in cluster `20 - Projects/Futuritaly/Angelini Academy/` per coerenza struttura §3.1.
3. **Placeholder `[[Verificare]]`** in `Mockup Brief Sito.md` riga 43 — riscrivere come testo o backtick.

### 🟢 Stato finale

- **K = 5** ⚠️ (4 cluster Angelini Academy + 1 cascata §10bis Jakala)
- **J = 0** ✅
- **P = 5** (cronistoria intenzionalmente non propagata)
- **55 alias** registrati (27 file proprietari)
- **3 decisioni richieste a Carlo** (vedi sezione precedente)
- Niente di bloccante. Tutti i broken hanno fix deterministici già descritti.

---
