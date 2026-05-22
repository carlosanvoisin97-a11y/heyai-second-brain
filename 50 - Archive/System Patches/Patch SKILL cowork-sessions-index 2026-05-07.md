---
type: patch
target: /Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md
created: 2026-05-07
updated: 2026-05-08
status: superseded
applied_at: 2026-05-08 sera
applied_via: mcp__scheduled-tasks__update_scheduled_task (chat normale Carlo)
superseded_by: "[[SKILL cowork-sessions-index POST-PATCH UNIFICATA]]"
---

> ✅ **APPLICATA 8/5/2026 sera** insieme all'addendum 8/5 in patch unificata. File mantenuto per audit storico.

# 🔧 Patch SKILL.md `cowork-sessions-index` — 2026-05-07

> **Obiettivo**: estendere lo scope del task da "append-only puro" a "append + checkbox reconciliation" per risolvere il pattern di disallineamento prosa-vs-checkbox identificato nell'incidente Open Tasks stale del 7/5/2026.
>
> **Perché qui**: il file SKILL.md vive in `/Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md` che è fuori dal vault e quindi fuori dalla portata di Edit dell'agente in chat. Carlo deve applicare le modifiche a mano.

## Modifiche da applicare

### 1) Frontmatter (riga ~3)

**Sostituisci:**
```yaml
description: Indicizzazione sessioni Cowork (run 13:00 + 22:00) — estrae decisioni/numeri/citazioni e aggiorna in modo chirurgico append-only le schede progetto/persona correlate
```

**Con:**
```yaml
description: Indicizzazione sessioni Cowork (run 13:00 + 22:00) — estrae decisioni/numeri/citazioni, aggiorna in modo chirurgico le schede progetto/persona (append + checkbox reconciliation)
```

### 2) Razionale (riga ~12)

**Sostituisci:**
```markdown
Questo task fa due cose:
1. Crea un **indice giornaliero** in `80 - Sources/Cowork Sessions/` con summary di ogni sessione
2. Esegue **patch chirurgiche append-only** sulle schede progetto/persona correlate per propagare i fatti vault-worthy emersi nelle sessioni

Il task è il **safety net** del sistema. Il primo livello è il comportamento live dell'agente in sessione (vedi CLAUDE.md §15 Vault-live update).
```

**Con:**
```markdown
Questo task fa **tre** cose:
1. Crea un **indice giornaliero** in `80 - Sources/Cowork Sessions/` con summary di ogni sessione
2. Esegue **patch chirurgiche append** sulle schede progetto/persona correlate per propagare i fatti vault-worthy emersi nelle sessioni
3. **Checkbox reconciliation**: per ogni scheda toccata, scansiona i `- [ ]` aperti e, se la nuova prosa appendata implica chiusura inequivocabile, marca `- [x]` con riga audit. Casi ambigui → "Da triagiare con Carlo", mai chiusura silenziosa (vedi sezione "Reconciliation rules" sotto).

Il task è il **safety net** del sistema. Il primo livello è il comportamento live dell'agente in sessione (vedi CLAUDE.md §15 Vault-live update + §15.ter Reconcile checkboxes).

**Lesson appresa 7/5/2026**: il design "append-only puro" del run del 6/5 ha lasciato la prosa aggiornata su 6 schede (Jakala, Achipoint, ecc.) ma checkbox aperti — generando l'incidente del 7/5 dove Open Tasks mostrava task già chiusi. La checkbox reconciliation è la risposta strutturale: non è un rewrite distruttivo, è una transizione di stato con audit log.
```

### 3) Sezione "Cosa puoi fare" (riga ~34)

**Sostituisci:**
```markdown
### Cosa puoi fare
- Aggiornare `updated:` nel frontmatter delle schede toccate
- Append nei blocchi `## Log`, `## Sessioni Cowork correlate`, `## Eventi calendario`, `## Citazioni testuali da preservare`
- Aggiungere nuovi `- [ ]` task in `## Task aperti`
- Aggiungere nuove citazioni testuali nel blocco dedicato
- Aggiornare campo `Stato`/`Status` nel frontmatter SE cambia esplicitamente, lasciando audit nel `## Log`
- Creare il file di indice giornaliero, l'indice consolidato, il log esecuzioni
```

**Con:**
```markdown
### Cosa puoi fare
- Aggiornare `updated:` nel frontmatter delle schede toccate
- Append nei blocchi `## Log`, `## Sessioni Cowork correlate`, `## Eventi calendario`, `## Citazioni testuali da preservare`
- Aggiungere nuovi `- [ ]` task in `## Task aperti`
- **Chiudere `- [x]` task aperti SE la nuova prosa appendata implica chiusura inequivocabile** (checkbox reconciliation — regole sotto)
- **Annullare `- [-]` task SE la nuova prosa appendata indica esplicitamente che il task è superato/non più necessario**
- Aggiungere nuove citazioni testuali nel blocco dedicato
- Aggiornare campo `Stato`/`Status` nel frontmatter SE cambia esplicitamente, lasciando audit nel `## Log`
- Creare il file di indice giornaliero, l'indice consolidato, il log esecuzioni
```

### 4) Sezione "Passi" — aggiungi nuovo step 5bis (dopo step 5, riga ~89)

**Aggiungi PRIMA di "### 6. Aggiorna indice consolidato":**

```markdown
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

**Audit obbligatorio nell'output**

L'output finale del task deve includere una sezione `## Checkbox reconciliation` con:
- N task chiusi auto: lista wikilinks scheda + riga task + estratto prosa
- N task annullati auto: lista wikilinks scheda + riga task + motivo
- N task in ⚠️ Da triagiare: lista per Carlo
- N task aperti scansionati totali
```

## Come applicare

1. Aprire il file in editor: `/Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md`
2. Applicare le 4 sostituzioni nell'ordine sopra (1, 2, 3, 4)
3. Salvare
4. Trigger manuale del task `cowork-sessions-index` per validare le nuove regole su una run reale prima del cron del 22:00

## Verifica

Dopo l'applicazione, l'output del prossimo run del task deve includere la sezione `## Checkbox reconciliation` con il conteggio. Se non compare → patch non applicata correttamente.

## Note

- La modifica è **retrocompatibile**: le sessioni passate restano indicizzate come prima; cambia solo lo scope dei run futuri.
- La regola si applica **solo** ai task scansionati durante un run del task scheduler. Non agisce retroattivamente su task chiusi nel passato senza audit (per quelli serve un sweep manuale una tantum).
- Vedi anche [[CLAUDE]] §15.ter "Reconcile checkboxes" per la regola corrispondente lato agente live in sessione.
