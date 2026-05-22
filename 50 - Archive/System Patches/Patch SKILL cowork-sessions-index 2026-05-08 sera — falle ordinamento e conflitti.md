---
type: setup
created: 2026-05-08
updated: 2026-05-08
status: applicata
applied_at: 2026-05-08 sera
applied_via: mcp__scheduled-tasks__update_scheduled_task (chat normale Carlo)
target: /Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md
parent: SKILL cowork-sessions-index POST-PATCH UNIFICATA
---

> ✅ **APPLICATA 8/5/2026 sera**. Le 4 patch A+B+C+D sono integrate nel SKILL POST-PATCH UNIFICATA v2 e sincronizzate al task scheduled `cowork-sessions-index` via MCP. Da validare al prossimo run reale (cron 22:00 di oggi o trigger manuale).

# 🔧 Patch SKILL `cowork-sessions-index` — falle ordinamento e conflitti cross-sessione (8/5/2026 sera)

> **Cosa fa**: chiude 3 vulnerabilità del SKILL post-patch unificata individuate nella conversazione di review 8/5/2026 sera. Le patch sono **chirurgiche** (aggiungono o estendono sezioni esistenti, non riscrivono il SKILL) e si applicano in sequenza al body del SKILL `/Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md`.
>
> **Stato**: bozza — richiede review di Carlo prima di applicare.
>
> **Scope**: 4 patch (A, B, C, D). Le patch A/B/C chiudono le 3 falle dichiarate; D è un add-on minore che estende §5bis Checkbox reconciliation per coprire il caso "task contraddittori cross-sessione".

## Falle individuate (review 8/5 sera)

1. **Ordering implicito**: il SKILL non specifica l'ordine in cui processare le sessioni dentro un run. Se due sessioni dello stesso run toccano lo stesso campo atomico (`deadline`, `status`, …) con valori diversi, vince l'ultima processata — ma "ultima" è non deterministico.
2. **Nessun conflict detection**: se sessione A delle 14:00 dice "deadline 8/5" e sessione B delle 19:00 dice "deadline 12/5", il task applica la seconda silenziosamente, senza segnalare il conflitto. Lo stesso vale per checkbox: A chiude `[x]`, B annulla `[-]`.
3. **Audit metadata povero**: il commento HTML invisibile attuale (`<!-- auto-updated by cowork-sessions-index {YYYY-MM-DD HH:MM} -->`) non identifica la sessione sorgente del valore. Senza sessionId, non si può ricostruire la cronistoria di un campo atomico in caso di anomalia.

## PATCH A — Ordering cronologico esplicito

**Location**: sezione `## Passi` → `### 2. Recupera sessioni`. Estendere il testo esistente.

**Testo attuale**:
```
### 2. Recupera sessioni
`mcp__session_info__list_sessions` + filtri di rilevanza.
```

**Testo nuovo**:
```
### 2. Recupera sessioni
`mcp__session_info__list_sessions` + filtri di rilevanza.

**Ordinamento obbligatorio**: dopo aver applicato i filtri, ordina le sessioni per `lastActiveAt` **ascending** (dalla più vecchia alla più recente). Tutte le elaborazioni successive (step 3, 4, 5, 5bis, 6) devono rispettare questo ordine. Su qualsiasi campo atomico (frontmatter `status` / `priority` / `deadline` / `stakeholders` / `last_call_date` / `last_contact`) la sessione con `lastActiveAt` più tardo è autoritativa: il valore che propone supersede valori proposti da sessioni precedenti dello stesso run.

Se due sessioni hanno `lastActiveAt` identico al secondo, ordina per `sessionId` ascending come tiebreaker deterministico.
```

**Razionale**: il valore "vincente" sui campi atomici diventa deterministico e prevedibile. La cronologia naturale del dialogo di Carlo (più tardo = più informato) corrisponde alla regola "ultimo vince".

## PATCH B — Conflict scan cross-sessione (nuovo step 4bis)

**Location**: inserire nuovo step `### 4bis. Conflict scan cross-sessione` tra `### 4. Crea il file di indice giornaliero` e `### 5. Patch chirurgiche append-only sulle schede correlate`.

**Testo da inserire**:
```
### 4bis. Conflict scan cross-sessione (NUOVO 8/5/2026)

Prima di scrivere le patch sulle schede (step 5), aggrega i delta proposti da tutte le sessioni del run e rileva i conflitti.

**Procedura**:
1. Per ogni scheda toccata da ≥2 sessioni nel run, raccogli tutti i delta proposti:
   - Cambi a campi atomici del frontmatter (`status`, `priority`, `deadline`, `stakeholders`, `last_call_date`, `last_contact`)
   - Chiusure proposte di checkbox `- [ ]` → `- [x]`
   - Annullamenti proposti `- [ ]` → `- [-]`
2. Per ogni campo atomico: se due sessioni propongono valori diversi → vince la sessione con `lastActiveAt` più tardo (Patch A), MA logga il conflitto.
3. Per ogni checkbox: se una sessione propone `[x]` e un'altra propone `[-]` (o viceversa), oppure se le citazioni di chiusura/annullamento sono contraddittorie → **NON applicare nessuna delle due**, marca il task come "Da triagiare".

**Output del conflict scan** (sezione obbligatoria nell'indice giornaliero):

```markdown
## ⚠️ Conflitti rilevati

### [[scheda]] — campo `deadline`
- Sessione A (14:32): `deadline: 2026-05-08` (estratto: "...")
- Sessione B (19:14): `deadline: 2026-05-12` (estratto: "...") ← APPLICATO
- Audit: B supersede A per regola "ultimo timestamp vince" (Patch A).

### [[scheda]] — task "Inviare email Justin"
- Sessione A (15:08): chiusura proposta `[x]` (estratto: "email inviata")
- Sessione B (20:45): annullamento proposto `[-]` (estratto: "rimando lunedì, ho cancellato")
- Audit: NON applicato. Task lasciato `[ ]` aperto. Da triagiare con Carlo.
```

**Casi che NON sono conflitti** (skip dal log):
- Una sola sessione tocca il campo (default).
- Due sessioni propongono lo stesso valore.
- Una sessione propone un cambio, un'altra non tocca quel campo (silenzio = consenso).

**Notifica**: se il run ha ≥1 conflitto rilevato, la notifica push deve esplicitamente segnalare "⚠️ {N} conflitti cross-sessione: review consigliata" anche se per il resto il run è clean.
```

**Razionale**: Carlo vede i casi in cui il task ha dovuto scegliere tra valori contraddittori. La regola "ultimo vince" continua a funzionare di default, ma il conflitto non è più silenzioso. I checkbox contraddittori vengono lasciati aperti invece di applicare uno dei due.

## PATCH C — Audit metadata esteso sui campi atomici

**Location**: due punti — (i) sezione `## Vincoli operativi` → `### Cosa puoi fare` (estendere il bullet sui campi atomici), (ii) `## Passi` → `### 5. Patch chirurgiche append-only sulle schede correlate` → `5a. Frontmatter` (estendere il commento HTML).

### C1 — Estensione "Cosa puoi fare"

**Testo attuale (ultimo bullet della whitelist campi atomici)**:
```
  - `updated:` — sempre, ad ogni patch (timestamp YYYY-MM-DD)
```

**Testo nuovo**:
```
  - `updated:` — sempre, ad ogni patch (timestamp YYYY-MM-DD)
  - **Audit log obbligatorio** per ogni cambio di campo atomico: aggiungere riga in `## Log` della scheda nel formato `_atomic-field-change_ {field}: {old} → {new} (sessione \`{sessionId}\`, lastActive {YYYY-MM-DD HH:MM}). Supersede: {prev_sessionId or "first-set"}`. Senza questa riga, il cambio frontmatter è invisibile a chi rilegge la scheda dopo settimane.
```

### C2 — Estensione step 5a (commento HTML)

**Testo attuale**:
```
- **5a. Frontmatter**: aggiorna `updated:` + commento HTML invisibile `<!-- auto-updated by cowork-sessions-index {YYYY-MM-DD HH:MM} -->`
```

**Testo nuovo**:
```
- **5a. Frontmatter**: aggiorna `updated:` + commento HTML invisibile esteso `<!-- auto-updated by cowork-sessions-index {YYYY-MM-DD HH:MM} | source-session: {sessionId} | source-lastActive: {YYYY-MM-DD HH:MM} -->`. Per ogni campo atomico modificato in questo run, includere ulteriore commento `<!-- atomic-change {field}: {old} → {new} | session: {sessionId} -->` immediatamente dopo la chiusura del frontmatter (linea con `---`).
```

**Razionale**: in caso di audit ex post (Carlo ti chiede "perché questa scheda ha deadline 12/5 e non 8/5?"), basta aprire la scheda, leggere il commento HTML del frontmatter e capire da quale sessione viene il valore. Senza sessionId, l'unico modo per ricostruire era leggere l'indice giornaliero del run e fare reverse engineering — sub-ottimale.

## PATCH D — Estensione §5bis per task contraddittori cross-sessione

**Location**: sezione `### 5bis. Checkbox reconciliation`. Aggiungere un nuovo paragrafo nella sottosezione "Casi ambigui → mai chiudere automaticamente".

**Testo attuale (lista dei casi ambigui)**:
```
**Casi ambigui → mai chiudere automaticamente**

Se uno qualsiasi dei seguenti è vero, NON chiudere/annullare; aggiungi a `## ⚠️ Da triagiare` dell'indice giornaliero:
- La prosa contiene il fatto ma con qualifier di incertezza (`forse`, `probabilmente`, `dovrebbe essere`, `pare`)
- Il task ha più componenti e solo alcune sono chiuse (es. task "email Justin + decisione attivazione piano B" ma prosa parla solo dell'email)
- Il task è di un altro autore con `updated:` recente (ultime 6h) — può aver appena rivisto manualmente
- Match parole chiave debole o ambiguo
```

**Testo nuovo (aggiungere quinto bullet)**:
```
**Casi ambigui → mai chiudere automaticamente**

Se uno qualsiasi dei seguenti è vero, NON chiudere/annullare; aggiungi a `## ⚠️ Da triagiare` dell'indice giornaliero:
- La prosa contiene il fatto ma con qualifier di incertezza (`forse`, `probabilmente`, `dovrebbe essere`, `pare`)
- Il task ha più componenti e solo alcune sono chiuse (es. task "email Justin + decisione attivazione piano B" ma prosa parla solo dell'email)
- Il task è di un altro autore con `updated:` recente (ultime 6h) — può aver appena rivisto manualmente
- Match parole chiave debole o ambiguo
- **Conflitto cross-sessione**: due sessioni dello stesso run propongono azioni contraddittorie sullo stesso checkbox (una `[x]`, l'altra `[-]`, oppure due chiusure con citazioni inconciliabili tipo "ho mandato" vs "ho cancellato e rimando"). Anche se la sessione più tarda ha priorità sui campi atomici (Patch A), per i checkbox il conflitto è bloccante: lascia il task `[ ]` aperto, log nel conflict scan (Patch B).
```

**Razionale**: i checkbox sono più sensibili dei campi atomici perché rappresentano "azione fatta vs non fatta". Per i campi atomici la regola "ultimo timestamp vince" è ragionevole (stato evolve nel tempo). Per i checkbox, una contraddizione è un segnale che qualcosa è sfuggito a Carlo e va review-ato manualmente — non risolto silenziosamente.

## Procedura di applicazione

1. **Review di Carlo**: leggere le 4 patch, confermare l'approccio o richiedere modifiche.
2. **Aggiornare il SKILL POST-PATCH UNIFICATA**: applicare A, B, C, D al file `SKILL cowork-sessions-index POST-PATCH UNIFICATA.md` (sorgente di verità documentale del SKILL nel vault), così che la prossima ri-applicazione sia self-contained.
3. **Aggiornare il task scheduled**: sostituire `prompt` del task `cowork-sessions-index` con il body del SKILL post-patch (estensioni A+B+C+D incluse). Comando: `mcp__scheduled-tasks__update_scheduled_task` con `taskId: cowork-sessions-index` + nuovo `prompt`.
4. **Aggiornare la `description`** se opportuno (proposta: "Indicizzazione sessioni Cowork (run 13:00 + 22:00) — append + checkbox reconciliation + campi atomici estesi + conflict scan cross-sessione").
5. **Validazione su run reale**: trigger manuale del task. Verificare:
   - Sessioni processate in ordine cronologico (controllo dall'output)
   - Sezione `## ⚠️ Conflitti rilevati` presente nell'indice giornaliero (anche se vuota)
   - Commento HTML del frontmatter contiene `source-session: {sessionId}`
   - Eventuali checkbox contraddittori cross-sessione finiscono in "Da triagiare", non vengono chiusi/annullati silenziosamente

## Verifica post-patch (al primo run reale)

Output del run successivo all'applicazione deve includere:
- ✅ Sessioni elencate in ordine cronologico ascending per `lastActiveAt`
- ✅ Sezione `## ⚠️ Conflitti rilevati` nell'indice giornaliero (con conteggio anche se 0)
- ✅ Commenti HTML invisibili nel frontmatter delle schede toccate con `source-session` e `source-lastActive`
- ✅ Per ogni campo atomico cambiato, riga `_atomic-field-change_` nel `## Log` della scheda
- ✅ Notifica push esplicita se ≥1 conflitto rilevato

Se manca uno dei cinque punti → patch non applicata correttamente.

## Note finali

- Le patch A+B+C+D sono **additive** rispetto alla POST-PATCH UNIFICATA. Non rimuovono né modificano regole esistenti — le estendono.
- Costo computazionale: trascurabile. Il conflict scan è O(N) sulle sessioni per scheda toccata, e nei run tipici di Carlo ci sono 2-4 sessioni / run.
- Effetto collaterale positivo: il conflict scan è un segnale debole di "Carlo ha cambiato idea durante la giornata" — utile come pattern di interazione da osservare nel tempo.
- Se Carlo conferma le 4 patch, il SKILL POST-PATCH UNIFICATA va rinominato in "SKILL cowork-sessions-index POST-PATCH UNIFICATA v2" o aggiornato in-place mantenendo lo stesso filename. Decisione di nomenclatura aperta.
