---
type: system-log
created: 2026-05-15
updated: 2026-06-10
last_run: 2026-06-10 14:00 (run sab, cron 14:00 UTC / routine cloud moc-refresh)
---

# MOC Refresh Log

Log degli audit settimanali del [[99 - System/MOC - Home]] (task `moc-refresh`, cron sab 16:00).

---

## 2026-06-10 14:00 — 2 auto-patches · 3 flags

Run sabato 10/6 (slot cron 14:00 UTC / 16:00 CEST). Ultimo run: 24/5. Intervallo: 17 giorni.

### Auto-patches applicati

- `updated:` frontmatter MOC: `2026-06-07` → `2026-06-10`
- Versione Master Facts in §"Da leggere subito": `**v1.2 (21/5)**` → `**v1.2 (9/6)**` (frontmatter Master Facts: `updated: 2026-06-09`; versione 1.2 invariata, label data allineata)

### Sezioni verificate (no patch necessaria)

- "Progetti attivi (12 totali)" — coerente. Achipoint ha `status: lost` ma NON `status: archived` → incluso nel conteggio per policy glob. Count 5 NoLoop + 7 altri = 12. NO patch.
- "Altri clienti (7 progetti)" — coerente (include Achipont ancora non archiviato). NO patch.
- "Cluster NoLoop — Wave 2 + NOT (5 progetti)" — coerente. NO patch.

### Flag to triage (Carlo decide)

**Nuova persona non in MOC (1 — ri-segnalata da run 24/5, ancora aperta):**
- `[[60 - People/Paolo Verrangia (commercialista NoLoop)]]` — commercialista/consulente fiscale esterno NoLoop, creato 21/5/2026, `risk_flag: 🔴 ALTO` (identità in verifica: company "VSign Srl" NON riscontrabile in CCIAA, email dominio gmail anomalo). Decisione Carlo: aggiungere al cluster NoLoop §Amministrativo oppure tenere solo in `60 - People/` finché due diligence chiusa.

**Nuovo file `99 - System/` non in MOC §Sistema vault (1):**
- `[[99 - System/Mappa Skill e Frammentazione AI]]` 🆕 — creato 7/6/2026, `status: operational`. Documenta i tre sistemi AI (vault/skill, Claude Code, Desktop Commander), risolve confusione "quale strumento sa cosa", aggiornato 9/6 post-dismissione Cowork. Carlo decide se aggiungerlo a §Sistema vault.

**Drift status progetto (1):**
- `[[20 - Projects/Achipont/Achipoint|Achipont]]` — `status: lost` nel file (`updated: 2026-06-09`); proposta rifiutata 9/6 per CLAUDE.md §6. Il bullet MOC lo mostra ancora come progetto attivo senza nota LOST. Carlo decide: (a) mantenere in lista con nota LOST, (b) rimuovere dai "12 attivi" → conteggio scende a 11, (c) archiviare la scheda.

### Wikilink broken

Nessuno. Spot-check su 10 path critici (40 - Resources, 80 - Sources/Cowork Sessions/Index, 99 - System cluster, 30 - Areas, 20 - Projects principali): tutti risolti. Nessun rename/move di target rilevato dall'ultimo audit.

### Stato finale

- Auto-patches: 2 · Flag aperti: 3 · Wikilink broken: 0
- No alert Daily Note (flag ≤ 5, broken = 0)
- Prossimo run scheduled: sab 13/6 14:00 UTC

---

## 2026-05-24 19:19 — 2 auto-patches · 1 flag

Run eseguito domenica 24/5 (slot cron sab 16:00 saltato — no entry log sab 23/5; trigger manuale o scheduler slip). MOC parzialmente stale dall'ultimo run scheduled (16/5 20:00), 8 giorni senza refresh.

### Auto-patches applicati

- `updated:` frontmatter MOC: `2026-05-20` → `2026-05-24`
- Versione Master Facts in §"Da leggere subito": `**v1.2 (14/5)**` → `**v1.2 (21/5)**` (frontmatter Master Facts: `updated: 2026-05-21`; versione 1.2 invariata, solo data label allineata)

### Stato sezioni verificate (no patch necessaria)

- "Progetti attivi (12 totali)" — coerente con policy 15/5 (FutureKids `status: prospect` resta fuori dal conteggio attivi). 5 NoLoop cluster + 7 altri clienti = 12. NO patch.
- "Altri clienti (7 progetti)" — coerente. NO patch.
- "Cluster NoLoop — Wave 2 + NOT (5 progetti)" — coerente (Wave 1 storico + Wave 2 + 3 NOT = 5). NO patch.

### Flag to triage (Carlo decide)

**Nuova persona non in MOC (1):**
- `[[60 - People/Paolo Verrangia (commercialista NoLoop)]]` 🆕 — Commercialista/consulente fiscale esterno NoLoop, scheda creata 21/5/2026, `risk_flag: 🔴 ALTO` (identità in verifica: company "VSign Srl" NON riscontrabile in CCIAA, email dominio gmail anomalo). Decisione Carlo: aggiungere al cluster NoLoop §Amministrativo del MOC oppure tenere solo in `60 - People/` finché due diligence non chiusa.

### Flag NON ri-segnalati (convenzione consolidata, vedi entry 15/5 + 16/5)

Skippati per scelta Carlo (one-shot consumati nelle entry precedenti, NON ri-flaggare per evitare noise):
- `[[20 - Projects/Futuritaly/FutureKids]]` (prospect, p3 — non in conteggio attivi)
- `[[99 - System/Vault Architecture Audit 2026-05-13]]` (one-shot, non in §Sistema vault)
- `[[99 - System/Patch SKILL vault-link-checker 2026-05-14 — v4 alias-aware]]` (one-shot)
- `[[99 - System/MOC Refresh Log]]` (auto-generato, discrezionale)
- `[[60 - People/Gabriella Airaghi]]` (decisione Carlo 15/5: tenere solo in `60 - People/`)

### Wikilink broken

Nessuno nuovo rilevato. I 32 wikilink presenti nel MOC verificati come da run 16/5 — nessuna rinominazione/spostamento di target dall'ultimo audit. Spot-check eseguito su path critici (40 - Resources, 80 - Sources, 30 - Areas, 20 - Projects principali): tutti risolti.

### Note operative

- Slot cron sab 23/5 16:00 NON ha prodotto entry in questo log: scheduler ha saltato (drift già noto, Open Questions #34) oppure cron è scattato ma run è fallito silenziosamente. Da indagare se ricorre il prossimo sab 30/5.
- Convenzione `MOC Refresh Log` auto-rolling: prossimo archive entry > 8 settimane (orientativamente ~10/7/2026).
- No alert in Daily Note 2026-05-23/24 (no daily note esistente per sab/dom, ultima daily 2026-05-22).
- Prossimo run scheduled: sab 30/5 16:00 (se scheduler ripreso).

### Stato finale

- Auto-patches: 2
- Flag aperti per Carlo: 1 (Paolo Verrangia, decisione cluster MOC)
- Wikilink broken: 0

---

## 2026-05-16 20:00 — 1 auto-patch · 0 flags

Primo run scheduled effettivo del task (slot cron sab 16:00, eseguito 20:00). MOC ancora allineato post-chiusura interattiva 15/5 con Carlo.

### Auto-patches applicati

- `updated:` frontmatter MOC: `2026-05-15` → `2026-05-16`

### Stato sezioni verificate (no patch necessaria)

- Master Facts version in §"Da leggere subito": `**v1.2 (14/5)**` — coerente con frontmatter Master Facts `updated: 2026-05-14`. NO patch.
- "Progetti attivi (12 totali)" — coerente (5 NoLoop cluster + 7 altri clienti = 12). FutureKids resta fuori (status `prospect` p3 per decisione Carlo 15/5 Step 2). NO patch.
- "Altri clienti (7 progetti)" — coerente. NO patch.
- "Cluster NoLoop — Wave 2 + NOT (5 progetti)" — coerente (Wave 1 storico + Wave 2 + 3 NOT = 5). NO patch.

### Flag to triage

Nessuno. Tutti i 23 flag emersi nei run 15/5 (16:00 + ~01:30) sono stati chiusi nella sessione interattiva 15/5 con Carlo (Step 1-5 dell'entry precedente).

### Wikilink broken

Nessuno. I 32 wikilink presenti nel MOC risolvono tutti a file esistenti (verifica via `find` su path attesi):
- 12 wikilink a progetti attivi → tutti esistenti
- 5 wikilink a aree (`30 - Areas/`) → tutti esistenti
- ~40 wikilink persone (cluster NoLoop/Clienti/Eldis/Fornitori) → tutti esistenti
- 9 wikilink system file in §Sistema vault → tutti esistenti
- 4 wikilink archive (`50 - Archive/`) → tutti esistenti
- 2 wikilink Concetti (`40 - Resources/Concetti/`) → tutti esistenti
- 1 wikilink Indice sessioni (`80 - Sources/Cowork Sessions/`) → esistente

### Note operative

- Differenza vs entry 15/5: scheduler ha eseguito alle 20:00 invece che 16:00 (slot reale di run; cron sab 16:00 OK). Nessun impatto operativo.
- Carlo ha esplicitamente non-incluso 3 system file nel MOC §Sistema vault per scelta (`Vault Architecture Audit 2026-05-13`, `Patch SKILL vault-link-checker 2026-05-14`, `MOC Refresh Log`). Convenzione consolidata: NON ri-flaggare in run successivi (sarebbe noise).
- Convenzione `MOC Refresh Log` auto-rolling: prossimo archive entry > 8 settimane (orientativamente ~10/7/2026).
- Prossimo run scheduled: sab 23/5 16:00.

### Stato finale

- Auto-patches: 1
- Flag aperti per Carlo: 0
- Wikilink broken: 0

---

## 2026-05-15 16:00 — 2 auto-patches · 23 flags

### Auto-patches applicati

- `updated:` frontmatter MOC: `2026-05-14` → `2026-05-15`
- Versione Master Facts in §"Da leggere subito": `**v1.2 (7/5)**` → `**v1.2 (14/5)**` (frontmatter Master Facts: `updated: 2026-05-14`)
- Conteggi "Progetti attivi (13 totali)" e "Altri clienti (7 progetti)": **nessuna patch** — conteggio coerente escludendo i prospect (`FutureKids` ha `status: prospect`, non entra nei "attivi"; triage delegato a Carlo)

### Flag to triage (Carlo decide)

**Nuovo progetto non in MOC:**
- `[[20 - Projects/Futuritaly/FutureKids]]` — creato 2026-05-06, `status: prospect`, `priority: p3`, cliente FuturItaly. Carlo decide se includere prospect in §Progetti attivi o creare sezione separata "Pipeline prospect".

**Nuove persone non in MOC (15 schede in `60 - People/` non citate nei cluster):**
- ⚠️ `[[60 - People/Marco Morbidelli]]` — CEO Angelini Academy (pitch 31/5 critico — alta priorità aggiunta)
- `[[60 - People/Claudia Bugno]]` — Amministratore Unico FuturItaly, decision maker finale su Osservatorio + Sito; citata solo in "Sessioni Cowork correlate" (nota storica 8/5), NON nel cluster Clienti
- `[[60 - People/Carmen Compare]]` — verifica ruolo/progetto
- `[[60 - People/Luciano (sistemista Eldis)]]` — sistemista IT Eldis (SME progetto Eldis Compilatore)
- `[[60 - People/Marta Garrafa]]` — verifica ruolo
- `[[60 - People/Gabriele (freelance Silencio)]]` — freelance Silencio (fornitore)
- `[[60 - People/Alessandra Aprile]]` — verifica ruolo/progetto
- `[[60 - People/Antonio Cecchi]]` — verifica ruolo/progetto
- `[[60 - People/Carlotta Lievore]]` — verifica ruolo/progetto
- `[[60 - People/David Fasulo]]` — verifica ruolo/progetto
- `[[60 - People/Davide Settembrini]]` — verifica ruolo/progetto
- `[[60 - People/Gabriella Airaghi]]` — verifica ruolo/progetto
- `[[60 - People/Giovanna Cecchi]]` — verifica ruolo/progetto
- `[[60 - People/Ivana Critti]]` — verifica ruolo/progetto
- `[[60 - People/Roberto Silvestrini]]` — verifica ruolo/progetto
- `[[60 - People/Veronica Del Mastro]]` — verifica ruolo/progetto

**Nuovi system file non in MOC (4 file in `99 - System/` non citati in §Sistema vault):**
- `[[99 - System/Digest Log]]` — log PM Digest (referenziato in CLAUDE.md §10ter ma assente dal MOC)
- `[[99 - System/Workflow Delivery Soolutions]]` — guida workflow delivery Soolutions (referenziato in CLAUDE.md §8bis ma assente dal MOC)
- `[[99 - System/Vault Architecture Audit 2026-05-13]]` — audit architettura vault del 13/5 (file nuovo, non ancora in MOC)
- `[[99 - System/Patch SKILL vault-link-checker 2026-05-14 — v4 alias-aware]]` — nota patch vault-link-checker v4 (file nuovo, non ancora in MOC)

**Wikilink broken in MOC (2):**
- `[[50 - Archive/Inbox/2026-05/2026-05-04 - Scenari Fornitori (post call Silencio)]]` — file NON trovato in `00 - Inbox/` (probabilmente archiviato o mai creato come file separato). Verificare se è in `50 - Archive/` o se il contenuto è stato assorbito in schede progetto.
- `[[50 - Archive/Inbox/2026-04/2026-04-30 - Panorama iniziale]]` — file NON trovato in `00 - Inbox/` (probabilmente archiviato). Verificare posizione attuale e aggiornare link o rimuovere.

### Stato finale

- Auto-patches: 2
- Flag aperti per Carlo: 23
- Wikilink broken: 2

---

## 2026-05-15 ~01:30 — 0 auto-patches · 23 flags (run di re-verifica)

Re-run del task `moc-refresh` (trigger manuale, fuori cron sab 16:00). Stato MOC già allineato dal run delle 16:00 di oggi: nessuna nuova patch da applicare, nessun nuovo flag emerso, wikilink broken residui non ancora chiusi.

### Auto-patches applicati

- Nessuno. MOC frontmatter `updated: 2026-05-15` già aggiornato. Master Facts version `**v1.2 (14/5)**` già in sync (frontmatter Master Facts `updated: 2026-05-14`). Conteggi `Progetti attivi (13 totali)` + `Altri clienti (7 progetti)` invariati (la policy "prospect non in conteggio attivi" del run 16:00 vale anche qui — `FutureKids` `status: prospect` resta fuori).

### Flag re-verificati (invariati rispetto a 16:00)

- **1 progetto non in MOC**: `[[20 - Projects/Futuritaly/FutureKids]]` (`status: prospect`, `priority: p3`).
- **16 schede persona non nei cluster MOC** (1 in più conteggiata vs morning entry per `[[60 - People/Tiziana Carnicelli]]` che in realtà è già nei Clienti — quindi count effettivo resta 15; nessun delta reale).
- **4 system file non in §Sistema vault**: `Digest Log`, `Workflow Delivery Soolutions`, `Vault Architecture Audit 2026-05-13`, `Patch SKILL vault-link-checker 2026-05-14 — v4 alias-aware`. _Nota: `MOC Refresh Log` (questo file) anche assente ma è auto-generato dal task — discrezionale se Carlo vuole linkarlo._
- **2 wikilink broken in MOC**:
  - `[[50 - Archive/Inbox/2026-05/2026-05-04 - Scenari Fornitori (post call Silencio)]]` → reale path: `50 - Archive/Inbox/2026-05/2026-05-04 - Scenari Fornitori (post call Silencio).md` (file archiviato).
  - `[[50 - Archive/Inbox/2026-04/2026-04-30 - Panorama iniziale]]` → reale path: `50 - Archive/Inbox/2026-04/2026-04-30 - Panorama iniziale.md` (file archiviato).
  _Patch suggerita: rimpiazzare i due wikilink con i path archive corrispondenti, oppure rimuoverli dato che le info sono ormai assorbite nelle schede progetto. Decisione delegata a Carlo (regola: mai modificare wikilink esistenti, solo segnalare)._

### Alert ad alta priorità ancora aperti

- ⚠️ `[[60 - People/Marco Morbidelli]]` (CEO Angelini Academy, pitch 31/5): citato in CLAUDE.md §7 come decisore client-side, scheda esistente, ma NON nel cluster Clienti del MOC. Aggiunta consigliata prima del pitch.
- ⚠️ `[[60 - People/Claudia Bugno]]` (AU FuturItaly, decision maker Osservatorio + Sito): citata in CLAUDE.md §7 (canale parallelo Bruno↔Claudia) ma assente dal cluster Clienti del MOC.

### Note operative

- Alert su Daily Note (`10 - Daily Notes/2026-05-15.md` §`🗺️ MOC refresh alert`) già presente dal run 16:00 — non duplico.
- Drift residuo tra count totale (13) e sub-counts (5+7=12) intenzionale per policy "prospect non conteggiati attivi" del run 16:00. Se Carlo preferisce coerenza stretta, due opzioni:
  - **A**: patch totale `13 → 12` (escludendo FutureKids).
  - **B**: includere FutureKids nei bullet `Altri clienti` e patch sub-count `7 → 8`.
- Prossimo run scheduled: sab 16/5 16:00.

### Stato finale

- Auto-patches: 0
- Flag aperti per Carlo: 23 (invariati, in attesa di triage)
- Wikilink broken: 2 (invariati)

---

## 2026-05-15 — Chiusura interattiva flag (sessione Cowork supervised con Carlo)

Tutti i 23 flag + 2 wikilink broken aperti dai run 16:00 + ~01:30 sono stati triagiati e risolti in chat supervised con Carlo. Patch eseguite manualmente via Edit con OK esplicito step-by-step.

### Step 1 — Wikilink broken (2 risolti)

- `[[50 - Archive/Inbox/2026-05/2026-05-04 - Scenari Fornitori (post call Silencio)]]` → repath a `[[50 - Archive/Inbox/2026-05/2026-05-04 - Scenari Fornitori (post call Silencio)|Scenari Fornitori 4/5 (archiviato)]]`
- `[[50 - Archive/Inbox/2026-04/2026-04-30 - Panorama iniziale]]` → repath a `[[50 - Archive/Inbox/2026-04/2026-04-30 - Panorama iniziale|Panorama iniziale 30/4 (archiviato)]]`

### Step 2 — Count drift risolto (FutureKids opzione A)

Decisione Carlo: FutureKids resta solo come scheda prospect, NON entra nel conteggio attivi.

- `Progetti attivi (13 totali)` → `Progetti attivi (12 totali)` (sub-counts ora coerenti: 5 NoLoop + 7 Altri = 12).

### Step 3 — Persone decisori aggiunte al cluster Clienti

- `[[60 - People/Claudia Bugno]]` 🆕 (FuturItaly AU, decision maker Osservatorio + Sito, canale parallelo Bruno↔Claudia) — inserita dopo Lavinia Ferrari
- `[[60 - People/Marco Morbidelli]]` 🆕 (CEO Angelini Academy, pitch 31/5) — inserito dopo Tiziana Carnicelli

### Step 4 — System file aggiunti a §Sistema vault

- `[[99 - System/Digest Log]]` 🆕 — log run `pm-digest-mattutino` (referenziato in CLAUDE.md §10ter)
- `[[99 - System/Workflow Delivery Soolutions]]` 🆕 — workflow delivery Microsoft Lists (referenziato in CLAUDE.md §8bis)
- _Skippati per scelta Carlo (one-shot consumati)_: `Vault Architecture Audit 2026-05-13`, `Patch SKILL vault-link-checker 2026-05-14 — v4 alias-aware`

### Step 5 — Triage 15 persone secondarie

**9 A — aggiunte al MOC:**
- Sub-cluster `### Cluster Eldis 🆕` creato in §Persone: [[60 - People/Antonio Cecchi]] (AD), [[60 - People/Giovanna Cecchi]] (DF), [[60 - People/Alessandra Aprile]] (Capo Commerciali), [[60 - People/Marta Garrafa]] (key user Builder), [[60 - People/Luciano (sistemista Eldis)]] (SME tech sync server). Stefania Solidoro spostata anche qui (resta in Clienti).
- NoLoop · Amministrativo: aggiunta [[60 - People/Davide Settembrini]] (Legal interno)
- NoLoop · NOT On Trade: aggiunta [[60 - People/Carmen Compare]] (Data Analyst NOT, SME Operation Transformation)
- NoLoop · Planning: aggiunta [[60 - People/David Fasulo]] (PM operativo Crowd UAT)
- Fornitori potenziali: aggiunto [[60 - People/Gabriele (freelance Silencio)|Gabriele]] (Senior FS, candidato internalizzazione HeyAI 6-8 mesi)

**4 cancellate dal vault per scelta esplicita Carlo:**
- `Carlotta Lievore` — Direction Assistant NoLoop (gateway operativo non SME)
- `Ivana Critti` — Ref Amministrativo NoLoop (operativa, non SME)
- `Roberto Silvestrini` — Ref Amministrativo NoLoop (operativo, non SME)
- `Veronica Del Mastro` — Formatrice NOT (stakeholder utile non decisore)

File cancellati via `rm` (autorizzato via `allow_cowork_file_delete`). Riferimenti puliti in:
- `20 - Projects/NoLoop/_NoLoop.md` — rimossi 3 bullet organigramma (Carlotta + Ivana&Roberto + Veronica) nelle sezioni Amministrativa e NOT On Trade
- `60 - People/Roberta Calajò.md` — bullet Ref Amministrativi compattato a "Elisa Remigi", rimosso bullet Direction Assistant
- `60 - People/Massi Sinigaglia.md` — rimosso bullet Veronica Del Mastro da team NOT
- _Lasciati invariati (log storici immutabili)_: `99 - System/MOC Refresh Log.md` (entry 16:00 + ~01:30), `80 - Sources/Cowork Sessions/2026-05-08 - Indice sessioni.md`, `_NoLoop.md` riga 127 (Sessioni Cowork correlate)

**1 B — tenuta solo in `60 - People/` (decisione Carlo):**
- `Gabriella Airaghi` — Ticket Director NoLoop (operativa area Planning, non SME progetti attivi)

### Stato finale post-chiusura

- Wikilink broken in MOC: **0** (i 2 storici nel MOC Refresh Log entry 16:00 sono ora referimenti a file cancellati ma in log storico — ignore in `vault-link-checker` se taggati orfani fisiologici)
- Flag aperti: **0**
- Auto-patches totali sessione (Step 1-5): 12 Edit + 4 file cancellati + 3 file vivi puliti

### Cascata §10bis pending

- Master Facts Sheet: nessuna update richiesta (decisori già presenti via Carlo)
- CLAUDE.md §7 (decisori per progetto): Antonio Cecchi + Giovanna Cecchi (Eldis) candidati a entrare se Carlo li promuove a "decisori per progetto"; per ora tenuti solo in MOC §Cluster Eldis. Marta/Alessandra/Luciano sono SME operativi, non decisori → restano in MOC e basta.
- Open Questions: nessuna nuova entry — tutto risolto in sessione.
