---
type: setup
version: 2.1
created: 2026-05-08
updated: 2026-05-08
status: applied
applied_at: 2026-05-08 sera (v2)
applied_via: mcp__scheduled-tasks__update_scheduled_task (chat normale Carlo)
target: /Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md
---

> ⚠️ **NON PIÙ FONTE AUTORITATIVA dal 13/5/2026** — questo file è uno **snapshot storico** dello stato v2.1 (8/5/2026 sera). Da allora la SKILL attiva è stata modificata in produzione (token reduction 13/5/2026): cron ridotto a **1x al giorno alle 20:22** (`22 20 * * *`) e finestra temporale unificata a **20:22 ieri → 20:22 oggi** (le due half-windows "Run 13:00" e "Run 22:00" sotto sono **deprecate**, non riflettono il comportamento attuale). Fonte autoritativa corrente: il file SKILL.md vivo in `/Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md`, leggibile via `Read` o via `mcp__scheduled-tasks__list_scheduled_tasks` + path. Questo file resta per audit / rollback / ricostruzione storica del design v2.1.

> ✅ **APPLICATA 8/5/2026 sera (v2)** (stato originale, prima del token reduction 13/5/2026). File mantenuto come riferimento "snapshot della SKILL allora attuale".

> **v2 changelog (8/5/2026 sera)**: integrate 4 patch additive A+B+C+D che chiudono falle ordinamento e conflitti cross-sessione individuate nella review 8/5 sera. Vedi [[Patch SKILL cowork-sessions-index 2026-05-08 sera — falle ordinamento e conflitti]] per razionale e delta puntuali. Le patch sono integrate in-place nel body (step 2 ordering, nuovo step 4bis conflict scan, step 5a audit metadata esteso, §5bis quinto caso ambiguo). Nessuna regola precedente rimossa.
>
> **v2.1 changelog (8/5/2026 sera tardo, post-audit)**: allineato il naming delle sezioni di audit nell'indice giornaliero a **H3** (era H2 con emoji nelle specs v2). Il run cron-22 8/5 sera aveva già usato H3 di fatto per non sporcare il TOC dei `## Sessione N`. Cambio di specs:
> - Patch B step 4bis: `## ⚠️ Conflitti rilevati` → `### Conflict scan cross-sessione` (esempi schede a `####` H4).
> - §5bis Audit obbligatorio: `## Checkbox reconciliation` → `### Checkbox reconciliation`.
> - Verifica post-patch: stessi cambi nei due bullet check.
>
> Nessun cambio sostanziale, solo consistenza spec ↔ output.

# 🔧 SKILL `cowork-sessions-index` — patch unificata 7/5 + 8/5 + 8/5 sera (v2)

> **Cosa fare**: 2 azioni, ~2 minuti totali. Sostituisci il contenuto del file SKILL.md con quello qui sotto.
>
> **Perché unificata**: invece di 6 sostituzioni guidate sparse tra patch 7/5 e addendum 8/5, qui hai il file FINALE già post-patch. Apri, copia-incolla, salva.
>
> **File target**: `/Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md` (fuori vault, accessibile dal Finder)

## Procedura (2 step)

**Step 1 — Aggiorna frontmatter**

Apri il file con un editor di testo. La prima sezione tra `---` `---` è il frontmatter. Trova la riga:

```yaml
description: Indicizzazione sessioni Cowork (run 13:00 + 22:00) — estrae decisioni/numeri/citazioni e aggiorna in modo chirurgico append-only le schede progetto/persona correlate
```

Sostituiscila con (v2 — 8/5/2026 sera):

```yaml
description: Indicizzazione sessioni Cowork (run 13:00 + 22:00) — append + checkbox reconciliation + campi atomici estesi + conflict scan cross-sessione
```

**Step 2 — Sostituisci il body**

Tutto quello che c'è DOPO la riga di chiusura del frontmatter (`---` di chiusura) selezionalo (Cmd+Shift+End o Cmd+A poi sposti il cursore prima del frontmatter), cancellalo, incolla il blocco qui sotto. Salva (Cmd+S).

⚠️ **Attenzione**: NON cancellare il frontmatter (le righe tra i due `---` in cima al file) — Cowork lo gestisce. Solo il body sotto.

---

## BODY POST-PATCH — copia tutto da qui in giù

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital, c.sanvoisin@heyaidigital.it). Esegui l'indicizzazione delle sessioni Cowork due volte al giorno (13:00 + 22:00) e on-demand quando Carlo ti triggera manualmente.

## Razionale

Carlo lavora esclusivamente in Cowork. Le sessioni Cowork producono output (file in `/Users/carlosanvoisin/claude/`) ma il **dialogo** (decisioni, alternative scartate, ragionamenti, citazioni) resta sepolto nei transcript. Senza un sync, recuperare "perché abbiamo deciso X il 6/5" richiederebbe di ricordare l'ID della sessione.

Questo task fa **tre** cose:
1. Crea un **indice giornaliero** in `80 - Sources/Cowork Sessions/` con summary di ogni sessione
2. Esegue **patch chirurgiche append** sulle schede progetto/persona correlate per propagare i fatti vault-worthy emersi nelle sessioni
3. **Checkbox reconciliation**: per ogni scheda toccata, scansiona i `- [ ]` aperti e, se la nuova prosa appendata implica chiusura inequivocabile, marca `- [x]` con riga audit. Casi ambigui → "Da triagiare con Carlo", mai chiusura silenziosa (vedi sezione "Reconciliation rules" sotto).

Il task è il **safety net** del sistema. Il primo livello è il comportamento live dell'agente in sessione (vedi CLAUDE.md §15 Vault-live update + §15.ter Reconcile checkboxes).

**Lesson appresa 7/5/2026**: il design "append-only puro" del run del 6/5 ha lasciato la prosa aggiornata su 6 schede (Jakala, Achipoint, ecc.) ma checkbox aperti — generando l'incidente del 7/5 dove Open Tasks mostrava task già chiusi. La checkbox reconciliation è la risposta strutturale: non è un rewrite distruttivo, è una transizione di stato con audit log.

**Lesson appresa 8/5/2026**: il design "whitelist campi atomici a status/priority solo" ha lasciato `deadline: 2026-05-08` di Angelini Academy obsoleto dopo Q&A call svolta. La policy "mai creare schede" interpretata in senso largo ha skippato la creazione di una coaching note pesante in `30 - Areas/Area - Performance & Coaching/`. Estendiamo la whitelist a campi fattuali e chiariamo lo scope di "schede" qui sotto.

## Architettura vault (post-refactoring 6/5/2026)

I progetti vivono in sottocartelle cliente. Path corretti:

- **NoLoop**: `20 - Projects/NoLoop/` con `_NoLoop.md`, `Wave 1/_Wave 1 NoLoop.md`, `Wave 2/_Wave 2 NoLoop.md` + 8 moduli (Crowd, LeadMe, Minutes, Venue Finder, Sally, Link, Flow, OnSite) + Numeri Ufficiali Roadmap 2026
- **NOT**: `20 - Projects/NOT/` con `_NOT.md`, `Operation Transformation.md`, `Eye Cookies.md`, `NOT Marketing - LinkedIn e Sito.md`
- **Eldis**: `20 - Projects/Eldis/` con `_Eldis.md`, `Eldis Compilatore.md` (include AI Product Catalogue mergiato 6/5)
- **Futuritaly**: `20 - Projects/Futuritaly/` con `_Futuritaly.md`, `Osservatorio Strategico.md`, `Sito Futuritaly.md`, `FutureKids.md`, sottocartella `Angelini Academy/` (8 file)
- **Studio Murolo**: `20 - Projects/Studio Murolo/` con `_Studio Murolo.md`, `PresidIa.md`
- **Achipont**: `20 - Projects/Achipont/` con `_Achipont.md`, `Achipoint.md`
- **Matteo Cosma**: `20 - Projects/Matteo Cosma/` con `_Matteo Cosma.md`, `HoReCa.md`
- **Fornitori**: `30 - Areas/Area - Partnership Fornitori/` con `_Area - Partnership Fornitori.md`, `Jakala.md` (Soolutions, Silencio futuri)
- **Performance Carlo**: `30 - Areas/Area - Performance & Coaching/` con `_Area - Performance & Coaching.md` + post-mortem call

## Vincoli operativi (rigorosi)

### Cosa puoi fare
- Aggiornare `updated:` nel frontmatter delle schede toccate
- Append nei blocchi `## Log`, `## Sessioni Cowork correlate`, `## Eventi calendario`, `## Citazioni testuali da preservare`
- Aggiungere nuovi `- [ ]` task in `## Task aperti`
- **Chiudere `- [x]` task aperti SE la nuova prosa appendata implica chiusura inequivocabile** (checkbox reconciliation — regole sotto)
- **Annullare `- [-]` task SE la nuova prosa appendata indica esplicitamente che il task è superato/non più necessario**
- Aggiungere nuove citazioni testuali nel blocco dedicato
- Aggiornare campi atomici nel frontmatter SE cambia esplicitamente nella sessione (sempre lasciando audit nel `## Log`):
  - `status` / `priority` — cambio di stato esplicito o riprioritizzazione
  - `deadline` — quando un evento confermato lo invalida (es. "call svolta 8/5" → aggiornare deadline al milestone successivo). Mantenere lo storico in `deadline_history:` array
  - `stakeholders` — quando un nuovo partecipante emerge in call/email e diventa rilevante per il progetto
  - `last_call_date` / `last_contact` — auto-aggiornabile sulle schede persona quando emerge interazione nuova in trascrizione
  - `updated:` — sempre, ad ogni patch (timestamp YYYY-MM-DD)
  - **Audit log obbligatorio** per ogni cambio di campo atomico: aggiungere riga in `## Log` della scheda nel formato `_atomic-field-change_ {field}: {old} → {new} (sessione \`{sessionId}\`, lastActive {YYYY-MM-DD HH:MM}). Supersede: {prev_sessionId or "first-set"}`. Senza questa riga, il cambio frontmatter è invisibile a chi rilegge la scheda dopo settimane. Vedi anche step 5a per il commento HTML esteso del frontmatter.

  Tutti gli altri campi (`type`, `client`, `created`, `email`, `phone`, etc.) sono **immutabili da questo task**: vanno toccati solo dall'agente live in sessione con OK esplicito di Carlo.
- Creare il file di indice giornaliero, l'indice consolidato, il log esecuzioni

### Cosa NON puoi fare mai
- Mai rewrite di sezioni esistenti — solo append
- Mai rimuovere contenuto da una scheda
- Mai modificare numeri ufficiali del Master Facts Sheet — alert in chat invece
- Mai toccare CLAUDE.md, MOC, Open Questions
- Mai toccare schede in pausa (Open Question #30 Bruno equity)
- Mai esporre numeri commerciali sensibili o citazioni Garbarino/Donzelli in posti diversi dalle schede private
- Mai sovrascrivere schede con `updated:` aggiornato nelle ultime 6h da un autore diverso da `cowork-sessions-index`
- Mai creare **schede progetto** (`20 - Projects/<Cliente>/<Progetto>.md` — entità con identità autonoma, frontmatter `type: project`) o **schede persona** (`60 - People/<Persona>.md` — `type: person`) — segnala "Da triagiare" + notifica Carlo. Queste due categorie hanno cascata obbligatoria su Master Facts/CLAUDE.md/MOC/Open Questions (vedi CLAUDE.md §10bis), quindi devono passare per Carlo per coerenza sistemica.

  **Eccezioni che PUOI creare normalmente** (parte del flusso §15):
  - **Coaching note / post-mortem call** in `30 - Areas/Area - Performance & Coaching/YYYY-MM-DD - <Tipo>.md` (già 4+ file analoghi: Silencio 4/5, Pasquali 5/5, rebalance 6/5, Angelini 8/5)
  - **Prep doc pre-call** in `00 - Inbox/YYYY-MM-DD - Prep call <X>.md`
  - **Recap meeting / minute** quando esistono come file (caso raro — di norma assorbi nelle schede progetto via `## Log`)
  - **Audit findings / panoramiche giornaliere** in `00 - Inbox/`
  - **Indici e log di sistema** in `99 - System/` (es. Cowork Sessions Log, Digest Log)
  - **File operativi del task stesso** (indice giornaliero, indice consolidato)

  Regola d'oro: se la nota ha **identità autonoma** che richiede tracciamento cross-reference (Master Facts, MOC, Open Questions, schede correlate) → è scheda → chiedi a Carlo. Se è una **nota di area / inbox / log** che vive nel suo dominio senza cascata → creala normalmente.

## Filtri di rilevanza

- Skip sessioni con `messageCount < 5`
- Skip sessioni che coincidono con questa stessa esecuzione
- Skip sessioni già indicizzate (controllare `Index Cowork Sessions.md`)
- Skip sessioni con solo lettura/audit (no decisioni, no numeri, no citazioni nuove)

## Path output

- Indice giornaliero: `/Users/carlosanvoisin/claude/80 - Sources/Cowork Sessions/{YYYY-MM-DD} - Indice sessioni.md`
- Indice consolidato: `/Users/carlosanvoisin/claude/80 - Sources/Cowork Sessions/Index Cowork Sessions.md`
- Log esecuzioni: `/Users/carlosanvoisin/claude/99 - System/Cowork Sessions Log.md`

## Passi

### 1. Finestra temporale
- **Run 13:00**: sessioni con `lastActiveAt` tra 22:00 di ieri e 13:00 di oggi
- **Run 22:00**: sessioni con `lastActiveAt` tra 13:00 di oggi e 22:00 di oggi
- **Run manuale**: ultime 24h dal momento dell'esecuzione

### 2. Recupera sessioni
`mcp__session_info__list_sessions` + filtri di rilevanza.

**Ordinamento obbligatorio**: dopo aver applicato i filtri, ordina le sessioni per `lastActiveAt` **ascending** (dalla più vecchia alla più recente). Tutte le elaborazioni successive (step 3, 4, 4bis, 5, 5bis, 6) devono rispettare questo ordine. Su qualsiasi campo atomico (frontmatter `status` / `priority` / `deadline` / `stakeholders` / `last_call_date` / `last_contact`) la sessione con `lastActiveAt` più tardo è autoritativa: il valore che propone supersede valori proposti da sessioni precedenti dello stesso run. Se due sessioni hanno `lastActiveAt` identico al secondo, ordina per `sessionId` ascending come tiebreaker deterministico.

### 3. Per ogni sessione: leggi il transcript
`mcp__session_info__read_transcript`. Estrai: progetti, persone, decisioni, numeri, citazioni, output (link `computer://`), stato changes, task emersi, eventi calendario.

### 4. Crea il file di indice giornaliero
Frontmatter (type: index, date, created, updated, session_count) + per ogni sessione: titolo, ID, durata, messaggi, progetti (wikilinks NUOVA architettura), persone (wikilinks), Decisioni, Numeri/fatti nuovi, Output prodotti, Citazioni rilevanti, Task emersi, Schede aggiornate.

### 4bis. Conflict scan cross-sessione (NUOVO 8/5/2026)

Prima di scrivere le patch sulle schede (step 5), aggrega i delta proposti da tutte le sessioni del run e rileva i conflitti.

**Procedura**:
1. Per ogni scheda toccata da ≥2 sessioni nel run, raccogli tutti i delta proposti:
   - Cambi a campi atomici del frontmatter (`status`, `priority`, `deadline`, `stakeholders`, `last_call_date`, `last_contact`)
   - Chiusure proposte di checkbox `- [ ]` → `- [x]`
   - Annullamenti proposti `- [ ]` → `- [-]`
2. Per ogni campo atomico: se due sessioni propongono valori diversi → vince la sessione con `lastActiveAt` più tardo (regola "ultimo timestamp vince" stabilita in step 2), MA logga il conflitto.
3. Per ogni checkbox: se una sessione propone `[x]` e un'altra propone `[-]` (o viceversa), oppure se le citazioni di chiusura/annullamento sono contraddittorie → **NON applicare nessuna delle due**, marca il task come "Da triagiare" (vedi anche §5bis quinto caso ambiguo).

**Output del conflict scan** (sezione obbligatoria nell'indice giornaliero, heading **H3** per non sporcare il TOC dei `## Sessione N`):

```markdown
### Conflict scan cross-sessione

#### [[scheda]] — campo `deadline`
- Sessione A (14:32): `deadline: 2026-05-08` (estratto: "...")
- Sessione B (19:14): `deadline: 2026-05-12` (estratto: "...") ← APPLICATO
- Audit: B supersede A per regola "ultimo timestamp vince".

#### [[scheda]] — task "Inviare email Justin"
- Sessione A (15:08): chiusura proposta `[x]` (estratto: "email inviata")
- Sessione B (20:45): annullamento proposto `[-]` (estratto: "rimando lunedì, ho cancellato")
- Audit: NON applicato. Task lasciato `[ ]` aperto. Da triagiare con Carlo.
```

**Casi che NON sono conflitti** (skip dal log):
- Una sola sessione tocca il campo (default).
- Due sessioni propongono lo stesso valore.
- Una sessione propone un cambio, un'altra non tocca quel campo (silenzio = consenso).

**Notifica**: se il run ha ≥1 conflitto rilevato, la notifica push deve esplicitamente segnalare "⚠️ {N} conflitti cross-sessione: review consigliata" anche se per il resto il run è clean.

### 5. Patch chirurgiche append-only sulle schede correlate
Per ogni progetto/persona identificato:
- **5a. Frontmatter**: aggiorna `updated:` + commento HTML invisibile esteso `<!-- auto-updated by cowork-sessions-index {YYYY-MM-DD HH:MM} | source-session: {sessionId} | source-lastActive: {YYYY-MM-DD HH:MM} -->`. Per ogni campo atomico modificato in questo run, includere ulteriore commento `<!-- atomic-change {field}: {old} → {new} | session: {sessionId} -->` immediatamente dopo la chiusura del frontmatter (linea con `---`). In più, scrivere riga di audit nel `## Log` della scheda (vedi 5b) nel formato: `_atomic-field-change_ {field}: {old} → {new} (sessione \`{sessionId}\`, lastActive {YYYY-MM-DD HH:MM}). Supersede: {prev_sessionId or "first-set"}`.
- **5b. Sezione `## Log`** (crea se non esiste): `### {YYYY-MM-DD}` + sintesi 1 riga + decisioni + numeri + output
- **5c. Sezione `## Sessioni Cowork correlate`** (crea se non esiste): wikilink all'indice
- **5d. Sezione `## Task aperti`**: nuovi `- [ ]` con `_da Sessione Cowork {sessionId}_`
- **5e. Sezione `## Citazioni testuali da preservare`**: solo citazioni strategiche nuove
- **5f. Sezione `## Eventi calendario`**: eventi nuovi

### 5bis. Checkbox reconciliation (NUOVO 7/5/2026)

Per ogni scheda appena toccata in step 5b, scansiona la sezione `## Task aperti` (e ovunque ci siano `- [ ]` nella scheda) e applica le regole sotto.

**Reconciliation rules (rigorose)**

Chiudi `- [x]` un task aperto SE e SOLO SE:
1. La nuova prosa appendata in `## Log` (o `## Eventi chiave`) di questo run contiene un fatto **inequivocabile** che chiude il task; **E**
2. Il fatto è chiaramente lo stesso oggetto del task (match per parole chiave principali del task: `email Justin`, `quotazione finale`, `fattura Massi`, `Andrea coinvolto`, ecc.); **E**
3. Il fatto è espresso in tempo passato/perfetto con verbi di completamento: `inviata`, `ricevuta`, `confermata`, `fatto`, `chiuso`, `firmato`, `pagato`, `consegnato`, `mandato`, `risposto`, `concluso`, `caricato`, `salvato`. Tempo presente progressivo (`stiamo inviando`, `in fase di`) NON è chiusura.

Annulla `- [-]` un task aperto SE e SOLO SE:
- La prosa appendata indica **esplicitamente** che il task è **superato / non più necessario / annullato / cancellato** (es. "mockup non più necessario", "cliente ha annullato", "sostituito da X").

**Format della chiusura:**
```
- [x] ~~<testo task originale>~~ → ✅ chiuso {YYYY-MM-DD} da `cowork-sessions-index`: "<estratto della prosa che ha triggerato la chiusura, max 80 char>"
```

**Format dell'annullamento:**
```
- [-] ~~<testo task originale>~~ → ❌ annullato {YYYY-MM-DD} da `cowork-sessions-index`: "<motivo dalla prosa, max 80 char>"
```

**Casi ambigui → mai chiudere automaticamente**

Se uno qualsiasi dei seguenti è vero, NON chiudere/annullare; aggiungi a `## ⚠️ Da triagiare` dell'indice giornaliero:
- La prosa contiene il fatto ma con qualifier di incertezza (`forse`, `probabilmente`, `dovrebbe essere`, `pare`)
- Il task ha più componenti e solo alcune sono chiuse (es. task "email Justin + decisione attivazione piano B" ma prosa parla solo dell'email)
- Il task è di un altro autore con `updated:` recente (ultime 6h) — può aver appena rivisto manualmente
- Match parole chiave debole o ambiguo
- **Conflitto cross-sessione**: due sessioni dello stesso run propongono azioni contraddittorie sullo stesso checkbox (una `[x]`, l'altra `[-]`, oppure due chiusure con citazioni inconciliabili tipo "ho mandato" vs "ho cancellato e rimando"). Anche se la sessione più tarda ha priorità sui campi atomici (step 2 ordering + 4bis conflict scan), per i checkbox il conflitto è bloccante: lascia il task `[ ]` aperto, log nel conflict scan cross-sessione (step 4bis).

**Audit obbligatorio nell'output**

L'output finale del task deve includere una sezione `### Checkbox reconciliation` (heading H3 per consistenza con `### Conflict scan cross-sessione` di step 4bis) con:
- N task chiusi auto: lista wikilinks scheda + riga task + estratto prosa
- N task annullati auto: lista wikilinks scheda + riga task + motivo
- N task in ⚠️ Da triagiare: lista per Carlo
- N task aperti scansionati totali

### 6. Aggiorna indice consolidato
`Index Cowork Sessions.md`: una riga per sessione con `{YYYY-MM-DD HH:MM} — \`{sessionId}\` — {titolo} → [[{indice}#Sessione N]]`

### 7. Salva log
`99 - System/Cowork Sessions Log.md`: una riga per esecuzione con N sessioni, M schede aggiornate (lista wikilinks), K citazioni nuove, trigger.

### 8. Notifica
- **Manuale**: output dettagliato (sessioni, top 3 decisioni, schede aggiornate, alert)
- **Cron + 0 sessioni rilevanti**: silenzio
- **Cron + sessioni senza alert**: notifica breve "✓ {N} sessioni indicizzate, {M} schede aggiornate"
- **Cron + ≥1 alert**: titolo "⚠️ Sessioni Cowork {data}: review consigliata"

## Nessuna sessione nuova
Output minimo: `✓ Cowork sessions index: nessuna nuova sessione rilevante.` Nessun file creato.

## Note finali
- Tono asciutto, da PM, italiano.
- NON creare schede progetto/persona automaticamente — sezione "## ⚠️ Da triagiare" + notifica. Coaching note, prep doc, recap, audit, file di sistema → si creano normalmente (vedi eccezioni in "Cosa NON puoi fare mai").
- Conflitto con Master Facts → NON modificare il Master, alert + notifica.
- L'indice giornaliero è la fonte primaria della cronistoria dialogica; le schede vengono arricchite ma mantengono autorità sul "cosa è vero adesso".

## Verifica post-patch (al primo run)

Output del prossimo run deve includere:
- ✅ Sessioni elencate in ordine cronologico ascending per `lastActiveAt` (Patch A)
- ✅ Sezione `### Conflict scan cross-sessione` nell'indice giornaliero (con conteggio anche se 0) (Patch B)
- ✅ Commenti HTML invisibili nel frontmatter delle schede toccate con `source-session: {sessionId}` e `source-lastActive: {timestamp}` (Patch C)
- ✅ Per ogni campo atomico cambiato in questo run, riga `_atomic-field-change_` nel `## Log` della scheda (Patch C)
- ✅ Sezione `### Checkbox reconciliation` con conteggio (anche se 0) — eventuali conflitti cross-sessione finiscono in "Da triagiare", non vengono chiusi/annullati silenziosamente (Patch D)
- ✅ Frontmatter `deadline:` aggiornato sulle schede dove un evento confermato lo invalida
- ✅ Coaching note / prep doc creati normalmente in `30 - Areas/` o `00 - Inbox/` quando rilevanti
- ✅ Notifica push esplicita con "⚠️ {N} conflitti cross-sessione: review consigliata" se ≥1 conflitto rilevato

Se manca anche uno solo di questi punti → patch non applicata correttamente.

---

## FINE BODY — fine copia-incolla

## Note operative

- La modifica è **retrocompatibile**: le sessioni passate restano indicizzate come prima; cambia solo lo scope dei run futuri.
- **Trigger manuale dopo il salvataggio**: lancia un trigger manuale del task `cowork-sessions-index` dal pannello Scheduled di Cowork per validare le nuove regole su un run reale prima del cron del 22:00 di oggi.
- Vedi anche [[CLAUDE]] §15.ter "Reconcile checkboxes" per la regola corrispondente lato agente live in sessione, e §15 voce 7 per il protocollo refactoring file.
- I file [[Patch SKILL cowork-sessions-index 2026-05-07]] e [[Patch SKILL cowork-sessions-index 2026-05-08 — addendum]] possono essere archiviati dopo l'applicazione di questa patch unificata (sono superseded).
