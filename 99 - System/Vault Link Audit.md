---
type: audit
status: active
created: 2026-05-08
updated: 2026-05-24
---
<!-- auto-updated by vault-link-checker 2026-05-24 (rolling-window applicata: audit 2026-05-17 spostato in 50 - Archive/Vault Audits/2026-05.md) -->

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
| 2026-05-24 (run scheduled, on-cadence domenica) | cron dom 21:00 | 15 | 4 | 5 | ⚠️ ALERT crescita 5→15 (+200%): debt cluster Angelini 17/5 + typo cognome Verrangelo→Verrengia diffuso + nuovi stakeholder senza cascata. 70 alias / 31 file proprietari. **Batch fix in chat 24/5 sera ↓** |
| **2026-05-24 sera (batch fix in chat con Carlo)** | **manuale post-audit** | **1** | **0** | **5** | **✅ Cleanup completo**: 7 cluster fissati in batch (Verrengia rinomina massiva + cluster Angelini root spostato+frontmatter + Marta alias Eldis + Germano typo + Veo rimosso + LinkedIn agents da FM + related_meeting→meeting_context + bonus alias Brief Copy). K 15→1 (-93%), J 4→0. Solo `[[Verificare]]` lasciato per scelta esplicita Carlo. 75 alias / 34 file proprietari |

_(Detail completo dei singoli audit archiviato in `50 - Archive/Vault Audits/2026-05.md`. La tabella viene aggiornata ad ogni audit con la riga sintetica del run.)_

---

## 2026-05-24 - Audit settimanale (run scheduled, on-cadence domenica 21:00)

> **Cadenza stabile**: secondo run consecutivo on-schedule (cron `0 21 * * 0`). Pattern off-cadence apr-mag è rientrato definitivamente. Nessun intervento sullo scheduler richiesto.

### Numeri sintetici

- **File `.md` scansionati**: 413 (escludendo EXCLUDE_PATHS)
- **File `.md` totali nel vault**: 444
- **File totali nel vault** (md + attachment + altri): 777
- **Wikilink rotti rilevati**: **15** ⚠️
- **Riferimenti frontmatter rotti**: **4** ⚠️
- **Path string rotti**: **5** (invariato — cronistoria volutamente non propagata)
- **Alias registrati nel vault**: **70 alias** su **31 file proprietari** ← v4 alias-aware
- **Δ vs audit precedente (2026-05-17)**: K 5 → 15 (Δ +10, **crescita +200% — alert SKILL "K >50%" ATTIVO**) · J 0 → 4 (Δ +4) · P 5 → 5 (invariato) · alias 55 → 70 (+15) · owners 27 → 31 (+4 da nuove schede `Paolo Verrengia (commercialista NoLoop)`, `LinkedIn Sales Navigator NoLoop`, `Germano Marano`, e re-export aliases altre schede)
- **Rolling-window applicato**: audit 2026-05-17 spostato in `50 - Archive/Vault Audits/2026-05.md` — file vivo torna alla baseline operativa

### ⚠️ Wikilink rotti — 15 residui in 10 file

#### Cluster 1 — Typo cognome "Verrangelo" vs "Verrengia" (7 occorrenze in 6 file) 🆕 PRIORITÀ ALTA

Il 21/5/2026 sera Carlo ha ricevuto via WhatsApp dal contatto stesso conferma del cognome corretto: **"Verrengia"** (non "Verrangelo" come trascritto dalla call iniziale 21/5 mattina). La scheda persona è stata correttamente rinominata `60 - People/Paolo Verrengia (commercialista NoLoop).md` con aliases `[Paolo Verrangelo · Verrangelo · Paolo Verrengia]`. **Tuttavia** 7 wikilink scritti PRIMA o intorno alla scoperta puntano ancora alla forma `[[Paolo Verrangelo (commercialista NoLoop)|...]]` (con suffisso completo, che NON è registrato negli aliases — gli aliases coprono solo le forme corte). Obsidian non risolve.

| Sorgente (mtime) | Wikilink rotto | Fix |
|---|---|---|
| `00 - Inbox/2026-05-21 - Lead biotech medical device via Verrangelo.md` (21/5 13:50) | `[[Paolo Verrangelo (commercialista NoLoop)\|Paolo Verrangelo]]` | Riscrivere come `[[Paolo Verrengia (commercialista NoLoop)\|Paolo Verrangelo]]` (mantiene display alias) |
| `20 - Projects/NOT/Eye Cookies.md` (22/5 20:09) | `[[Paolo Verrangelo (commercialista NoLoop)\|Paolo Verrangelo]]` | idem |
| `20 - Projects/NoLoop/Wave 1/_Wave 1 NoLoop.md` (21/5 13:50) | `[[Paolo Verrangelo (commercialista NoLoop)\|Paolo Verrangelo]]` | idem |
| `20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop.md` (21/5 18:21) | `[[Paolo Verrangelo (commercialista NoLoop)\|Paolo Verrangelo]]` ×1 + `[[Paolo Verrangelo (commercialista NoLoop)\|scheda persona §Performance flag]]` ×1 | idem ×2 |
| `60 - People/Paolo Donzelli.md` (21/5 18:21) | `[[Paolo Verrangelo (commercialista NoLoop)\|Paolo Verrangelo]]` | idem |
| `99 - System/Open Questions.md` (22/5 18:13) | `[[Paolo Verrangelo (commercialista NoLoop)\|Verrangelo]]` | idem |

**Fix alternativo radicale** (raccomandato): aggiungere `Paolo Verrangelo (commercialista NoLoop)` all'array `aliases:` della scheda — risolve tutti i 7 wikilink + il J=1 frontmatter Verrangelo in un colpo (vedi sezione "Riferimenti frontmatter").

#### Cluster 2 — Angelini Academy: 4 residui non fissati dal 17/5 + 1 nuovo

| Sorgente (mtime) | Wikilink rotto | Diagnosi | Fix |
|---|---|---|---|
| `20 - Projects/Futuritaly/Angelini Academy/Brief Copy Sito per Claude Code.md` (15/5 14:32) | `[[Briefing Personaggi Landing Page]]` | Già rilevato 17/5 — NON fissato. File target esiste a vault-root come `Angelini Academy — Briefing Personaggi Landing Page.md` ma senza frontmatter né aliases | Aggiungere `aliases: [Briefing Personaggi Landing Page]` al file root, oppure spostarlo in cluster cluster Angelini Academy |
| `20 - Projects/Futuritaly/Angelini Academy/Mockup Brief Sito.md` (14/5 23:53) | `[[Briefing Personaggi Landing Page]]` ×2 | Già rilevato 17/5 — NON fissato | idem (fix singolo risolve entrambe) |
| `20 - Projects/Futuritaly/Angelini Academy/Mockup Brief Sito.md` (14/5 23:53) | `[[Verificare]]` | Già rilevato 17/5 — NON fissato. Placeholder testuale "Lì serve aggiungere [[Verificare]]" | Riscrivere come `**[VERIFICARE]**` o backtickare |
| `20 - Projects/Futuritaly/Angelini Academy/Sintesi Strategica Pre-PPTX 2026-05-18.md` (17/5 22:38) | `[[Briefing Personaggi Landing Page]]` | Nuovo dal 18/5 — stesso pattern del cluster | Stesso fix root |
| `20 - Projects/Futuritaly/Angelini Academy/Sintesi Strategica Pre-PPTX 2026-05-18.md` (17/5 22:38) | `[[Video Reel Veo 3.1 - Prompt Pack]]` | Nuovo: documento riferito ma mai creato nel vault | Creare scheda, o riscrivere come segnaposto testuale, o backtickare |

#### Cluster 3 — Stakeholder NOT/Eldis con suffisso variante (2 nuove)

| Sorgente (mtime) | Wikilink rotto | Diagnosi | Fix |
|---|---|---|---|
| `80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni.md` (21/5 18:38) | `[[60 - People/Marta Garrafa (Eldis)\|Marta Garrafa]]` | File target è `60 - People/Marta Garrafa.md` (senza "(Eldis)") | Riscrivere come `[[Marta Garrafa]]` oppure aggiungere alias `Marta Garrafa (Eldis)` alla scheda |
| `80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni.md` (21/5 18:38) | `[[60 - People/Germano Mortillaro (NOT)\|Germano Mortillaro]]` | Nessuna scheda `Germano Mortillaro` nel vault. NB: esiste `60 - People/Germano Marano.md` (cognome diverso) — verificare se sono la stessa persona | Decisione richiesta a Carlo: (a) creare scheda Germano Mortillaro con cascata §10bis se persona reale; (b) se è typo per Germano Marano, fix wikilink |

### ⚠️ Riferimenti frontmatter — 4 broken

| Sorgente | Key | Valore | Fix |
|---|---|---|---|
| `00 - Inbox/2026-05-21 - Lead biotech medical device via Verrangelo.md` | `stakeholders:` | `Paolo Verrangelo (commercialista NoLoop)` | Riscrivere come `Paolo Verrengia (commercialista NoLoop)` (cognome corretto) — oppure aggiungere alias completo come descritto in Cluster 1 |
| `00 - Inbox/2026-05-20 - Piano Azione Sito Futuritaly post-call 20-5.md` | `related_meeting:` | `2026-05-22 — Call follow-up Communication strategist post-feedback Claudia` | ⚠️ Violazione convenzione CLAUDE.md §4 (14/5/2026): le call POST-6/5/2026 assorbite nelle schede devono usare `meeting_context:` (testo libero) invece di `related_meeting:` (wikilink). Riscrivere il campo come `meeting_context:` con stesso testo |
| `30 - Areas/Area - Partnership Fornitori/LinkedIn Sales Navigator NoLoop.md` | `stakeholders:` | `Elena Gamberini (LinkedIn)` | Sales rep LinkedIn senza scheda. Opzioni: (a) creare scheda persona se rilevante per cadenza touchpoint; (b) rimuovere dal frontmatter stakeholders e citare solo in prosa; (c) rinominare con suffisso es. `Elena Gamberini (LinkedIn — contatto)` se serve mantenere visibilità ma senza scheda |
| `30 - Areas/Area - Partnership Fornitori/LinkedIn Sales Navigator NoLoop.md` | `stakeholders:` | `Angela Ritrovato (LinkedIn)` | idem |

### ⚫ Path string rotti (5 invariati — cronistoria intenzionale)

Identici al run 17/5 e 15/5 — decisione 13/5 sera tardo confermata. Backlinks STORICI negli indici giornalieri `80 - Sources/Cowork Sessions/` post Batch B+C lasciati invariati per non falsificare cronistoria. Stato `P=5` confermato come baseline accettata.

### 🟢 Verifica patch v4 SKILL alias-aware

Patch v4 (14/5/2026) continua a essere in produzione e funzionante:

- **Alias-index attivo**: 70 alias registrati nell'indice del vault (vs 55 nel run 17/5, +15) — dovuti a nuove schede 18-22/5 con frontmatter `aliases:` proattivo: `Paolo Verrengia (commercialista NoLoop)` (3 alias), `LinkedIn Sales Navigator NoLoop` (3 alias), oltre a re-export di alias preesistenti su altre schede toccate dal refactoring 18-22/5.
- **31 file proprietari** di alias (vs 27 nel 17/5): nuovi entrati `Paolo Verrengia (commercialista NoLoop)`, `LinkedIn Sales Navigator NoLoop`, `Germano Marano`, + 1 altro. Tutti i 27 precedenti permangono.
- **Patch funziona end-to-end**: nessun falso positivo identificato in questo run. I 15 wikilink rotti sono tutti reali (typo cognome, nuove schede non create, placeholder testuali, refactoring incompleto).

### ⚠️ Alert globali

- **K = 15** → soglia SKILL "K > 20" NON attiva (siamo a 3/4 della soglia). Niente alert "vault degraded", ma trend in deterioramento.
- **K crescita +200% vs settimana scorsa** (5 → 15) → soglia SKILL "K cresce >50%" **ATTIVA**. La crescita NON è effetto matematico del partire da 0 (come nel 17/5): è una crescita reale +10 broken in 7 giorni. Decomposizione: +7 typo Verrangelo (cluster nuovo), +2 stakeholder NOT/Eldis (cluster nuovo), +1 Sintesi Strategica Angelini (estensione cluster esistente), +0 nessun fix applicato sui 4 residui Angelini del 17/5 (debt non smaltito), -0 nessuna regressione persa.
- **Nuovo broken in `60 - People/` o `20 - Projects/` modificato nelle ultime 24h**: NO. Solo `00 - Inbox/2026-05-24 - Weekly Review.md` è in finestra 24h, e non contiene wikilink rotti. Tutti i 10 sorgenti broken hanno mtime tra 14/5 23:53 e 22/5 20:09 (più recente: Eye Cookies del 22/5).
- **Cadenza on-schedule** ✅: secondo cron consecutivo on-time dom 21:00.

### 📌 File modificati nelle ultime 24h (23/5 19:00 → 24/5 19:00 UTC)

1 solo file modificato nelle ultime 24h (vault tipicamente quiete domenica):

- `00 - Inbox/2026-05-24 - Weekly Review.md` (auto-generato weekly review)

Nessun wikilink rotto introdotto. La concentrazione di broken viene da attività 18-22/5 (cluster Verrangelo + nuovi stakeholder NOT) che non è stata seguita da propagazione completa dei wikilink.

### Prossimo run

Cron canonico domenica 21:00 = prossimo run **dom 31/5/2026 ~21:00**. Aspettative se Carlo applica i fix proposti:
- Cluster 1 (Verrangelo): aggiungere `Paolo Verrangelo (commercialista NoLoop)` agli aliases della scheda Verrengia → -7 K + -1 J in un singolo edit
- Cluster 2 (Angelini): aggiungere frontmatter con `aliases: [Briefing Personaggi Landing Page]` al file root → -4 K. Riscrivere `[[Verificare]]` → -1 K. Decidere su `[[Video Reel Veo 3.1 - Prompt Pack]]` → -1 K
- Cluster 3 (NOT/Eldis): fix wikilink `Marta Garrafa` (rimuovere suffisso "(Eldis)") → -1 K. Decidere su Germano Mortillaro → -1 K
- J residui: convertire `related_meeting:` → `meeting_context:` (-1 J), decidere su LinkedIn agents (-2 J)
- **Target plausibile post-fix completo: K=0, J=0**
- **Target plausibile post-fix solo Cluster 1** (più economico, 1 singola modifica): K=8, J=3

### 🔵 Decisioni richieste a Carlo

1. **🔴 PRIORITÀ ALTA — Aliases scheda Verrengia**: aggiungere `Paolo Verrangelo (commercialista NoLoop)` all'array `aliases:` di `60 - People/Paolo Verrengia (commercialista NoLoop).md`. Singolo edit di 1 riga che risolve 7 K + 1 J = **8 broken link in un colpo**. ROI massimo.
2. **🔴 PRIORITÀ ALTA — Cluster Angelini debt non smaltito dal 17/5**: 4 broken `[[Briefing Personaggi Landing Page]]` ancora aperti dopo 7 giorni. Suggerimento: aggiungere frontmatter con `aliases: [Briefing Personaggi Landing Page]` al file root `Angelini Academy — Briefing Personaggi Landing Page.md` (creato 14/5 12:56, attualmente senza frontmatter), risolve tutte e 4 le occorrenze. Valutare anche spostamento in cluster `20 - Projects/Futuritaly/Angelini Academy/` per coerenza struttura §3.1.
3. **Germano Mortillaro (NOT) vs Germano Marano**: chiarire se sono la stessa persona (typo cognome) o due persone distinte. Se distinte, creare scheda Germano Mortillaro con cascata §10bis (NOT cluster).
4. **`[[Video Reel Veo 3.1 - Prompt Pack]]`**: documento riferito ma mai creato. Decidere: (a) creare scheda, (b) backtickare come riferimento esterno, (c) rimuovere il riferimento.
5. **LinkedIn agents (Elena Gamberini, Angela Ritrovato)**: sono contatti commerciali di LinkedIn Sales Navigator. Decidere se creare schede persona (cadenza touchpoint significativa?) o se rimuoverli dal frontmatter stakeholders e citarli solo in prosa.
6. **Convenzione `related_meeting:` vs `meeting_context:`**: il file `2026-05-20 - Piano Azione Sito Futuritaly post-call 20-5.md` usa `related_meeting:` per una call assorbita post-6/5 — violazione convenzione CLAUDE.md §4 (14/5/2026). Fix banale: rinominare campo a `meeting_context:`.
7. **Placeholder `[[Verificare]]`** in `Mockup Brief Sito.md` riga 43 — ancora aperto dal 17/5. Riscrivere come testo o backtick.

### 🟢 Stato finale (post-batch fix in chat con Carlo, 24/5 sera)

- **K = 1** ✅ (solo `[[Verificare]]` in Mockup Brief Sito — placeholder esplicitamente lasciato da Carlo)
- **J = 0** ✅
- **P = 5** (cronistoria intenzionalmente non propagata — baseline accettata)
- **75 alias** registrati (34 file proprietari, +4 vs run iniziale: Verrengia ripulita, Marta Garrafa, Briefing Personaggi root, Brief Copy)

### 🔧 Fix applicati in batch (24/5 sera, in chat con Carlo)

| # | Fix | File toccati | Δ |
|---|---|---|---|
| 1 | Cleanup alias scheda Verrengia (rimossi `Paolo Verrangelo`, `Verrangelo` — Carlo: "deve usare solo Verrengia") + rinomina `Paolo Verrangelo (commercialista NoLoop)` → `Paolo Verrengia (commercialista NoLoop)` in 9 occorrenze (8 wikilink + 1 frontmatter) su 6 file (Inbox 21/5, Eye Cookies, _Wave 1, _Wave 2, Paolo Donzelli, Open Questions) | 7 (scheda + 6 sorgenti) | -7 K, -1 J |
| 2 | Spostato `Angelini Academy — Briefing Personaggi Landing Page.md` da vault-root a `20 - Projects/Futuritaly/Angelini Academy/` + aggiunto frontmatter con `aliases: [Briefing Personaggi Landing Page, Briefing Personaggi]` | 1 (file moved + frontmattered) | -4 K |
| 3a | Aggiunto alias `Marta Garrafa (Eldis)` + `Marta (Eldis)` a `60 - People/Marta Garrafa.md` (Carlo conferma: Marta è operativa Eldis su progetto Compilatore AI) | 1 | -1 K |
| 3b | Fix wikilink `[[Germano Mortillaro (NOT)]]` → `[[Germano Marano]]` in indice sessioni 21/5 (Carlo conferma typo cognome: è Marano, Mortillaro non esiste) | 1 | -1 K |
| 4 | Rimosso `[[Video Reel Veo 3.1 - Prompt Pack]]` da Sintesi Strategica Pre-PPTX 2026-05-18 (Carlo: non importante) | 1 | -1 K |
| 5 | Rimossi `Elena Gamberini (LinkedIn)` + `Angela Ritrovato (LinkedIn)` da `stakeholders:` frontmatter di LinkedIn Sales Navigator NoLoop, riferimento spostato in commento (Carlo: contatti vecchi non rilevanti) | 1 | -2 J |
| 6 | Rinominato campo `related_meeting:` → `meeting_context:` in `00 - Inbox/2026-05-20 - Piano Azione Sito Futuritaly post-call 20-5.md` (conforme CLAUDE.md §4 convenzione 14/5/2026: call post-6/5 assorbite usano `meeting_context:` testo libero) | 1 | -1 J |
| 7 | `[[Verificare]]` in Mockup Brief Sito riga 43 — Carlo: "lasciamo placeholders" → NESSUNA azione | 0 | 0 |
| Bonus | Aggiunto alias `Brief Copy` + `Brief Copy Sito` a `Brief Copy Sito per Claude Code.md` (risolve nuovo broken `[[Brief Copy]]` emerso in indice sessioni 24/5 auto-generato) | 1 | -1 K |

**Totale Δ**: K 15 → 1 (-14, -93%) · J 4 → 0 (-4, -100%) · alias +5 (75/34)

### 🔄 Cleanup post-riallineamento principio "un nome canonico" (24/5 sera tardo)

Carlo segnala che il principio di gestione frontmatter/alias che ho applicato nei fix precedenti non rispetta pienamente la regola di sistema sottostante: **ogni entità ha un solo nome canonico, gli alias sono redirect tecnici per varianti operativamente diffuse, non scorciatoie per coprire output bacati di indexer o varianti isolate**. Rerun cleanup applicato:

| # | Azione | Rationale | Δ alias |
|---|---|---|---|
| (a) | Rimossi alias `Marta Garrafa (Eldis)` + `Marta (Eldis)` da scheda Marta Garrafa; rinominato wikilink `[[60 - People/Marta Garrafa (Eldis)\|Marta Garrafa]]` → `[[Marta Garrafa]]` in indice sessioni 21/5 | Fix all'output dell'indexer invece di mascherarlo con alias di copertura | -2 |
| (b) | Rimossi alias `Brief Copy` + `Brief Copy Sito` da scheda Brief Copy Sito per Claude Code; rinominato wikilink `[[Brief Copy]]` → `[[Brief Copy Sito per Claude Code\|Brief Copy]]` in indice sessioni 24/5 | Idem | -2 |
| (c) | Rimossi alias `Briefing Personaggi Landing Page` + `Briefing Personaggi` da scheda Angelini Academy — Briefing Personaggi Landing Page; rinominate 5 occorrenze forma corta `[[Briefing Personaggi Landing Page]]` → `[[Angelini Academy — Briefing Personaggi Landing Page\|Briefing Personaggi Landing Page]]` in 3 file (Brief Copy Sito ×2, Sintesi Strategica ×1, Mockup Brief Sito ×2) | Canonico maggioritario (8/13) era già la forma estesa; riallineamento alla maggioranza, no rename file | -2 |
| (d) | Rimosso alias `Verrengia` (cognome-solo) da scheda Paolo Verrengia; mantenuto solo `Paolo Verrengia` | Principio "canonico = sempre Nome Cognome", mai cognome-solo né nome-solo | -1 |
| (e) | Patch CLAUDE.md §4 — aggiunto bullet esplicito "Aliases — quando registrarli e quando NO (regola consolidata 24/5/2026)" + commento HTML di marker pre-§0 | Consolidare apprendimento in regola operativa permanente per le prossime sessioni | n/a |

**Δ alias post-cleanup**: 75 → 68 (-7, -9.3%). Owner files: 34 → 31 (-3: Marta Garrafa, Brief Copy Sito, Angelini Briefing Personaggi non più owner di alias). K resta = 1 (Verificare placeholder), J resta = 0.

**Δ K/J invariato (cleanup era refactoring qualitativo, non quantitativo)**: il principio "un nome canonico" non riduce K/J ma riduce il rumore semantico nel vault — gli alias residui ora coprono solo varianti operativamente diffuse reali (forme corte usate in 5+ file di prosa, sigle riconosciute, brand alternativi).

### 📊 Confronto debt 17/5 vs 24/5 post-fix

- 5 residui aperti al 17/5 → 4/5 fissati (3 `[[Briefing Personaggi Landing Page]]` + 1 `[[Luigiandrea Scaramuzzi]]` già risolto 19/5) · 1 residuo persistente per scelta (`[[Verificare]]`).
- 10 nuovi broken introdotti 18-22/5 → 10/10 fissati.
- Cascata §10bis applicata su 3 nuove schede toccate (Verrengia frontmatter ripulito, Marta alias, Briefing root spostato+frontmatter).

### Prossimo run

Cron canonico domenica 21:00 = **dom 31/5/2026 ~21:00**. Aspettativa K=1 stabile (placeholder Verificare), J=0, P=5.

---
