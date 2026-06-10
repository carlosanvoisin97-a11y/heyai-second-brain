---
type: setup
created: 2026-05-12
updated: 2026-05-13
status: applied
applied_at: 2026-05-12 (sessione Cowork `local_517a482d`)
first_run_findings: "Task creato 12/5/2026, simulato end-to-end. Primo run cron reale atteso lun 18/5/2026 9:08. Marco Pasquali identificato in `cooling` con 62gg di silenzio: prima azione operativa da fare prima del primo run."
related_recommendation: "Ricerca best practices second brain 11/5 — raccomandazione #4 Personal CRM velocity"
---

> ✅ **TASK CREATO 12/5/2026**. Il prompt riportato in questo doc è la versione originaria del 12/5, mantenuta come snapshot storico. Fonte autoritativa corrente: SKILL.md vivo (`/Users/carlosanvoisin/Documents/Claude/Scheduled/crm-velocity/SKILL.md`) leggibile via `Read` o `mcp__scheduled-tasks__list_scheduled_tasks`.
>
> **Note di drift 13/5/2026**: il riferimento a `weekly-digest` come task coesistente (righe 33 + 138 sotto) è ora obsoleto — `weekly-digest` è disabilitato dal 13/5/2026 (token reduction). Nessun conflitto temporale residuo lunedì 9:00 — la sezione `## 🔔 CRM warnings` scritta sulla Daily Note del lunedì viene consumata da `weekly-review-interactive` venerdì 17:30.

# 🔔 Setup nuovo scheduled task `crm-velocity`

Audit settimanale velocity stakeholder critici. Il task scansiona il frontmatter delle schede in `60 - People/`, calcola gap tra `last_contact` e oggi vs `cadence_days`, e produce 3 liste (🔴 critici / 🟡 warning / 🟢 OK) che vengono appendate alla Daily Note del lunedì.

## Razionale

Carlo gestisce 56+ stakeholder attivi tra cluster NoLoop, clienti non-NoLoop, fornitori, soci e mentor. Senza un audit automatico, il rischio statistico è che un contatto rilevante (es. Marco Pasquali mentor informale) accumuli silenzio per 60+ giorni senza che Carlo se ne accorga. Nessun digest mattutino o scheduled task corrente cattura il dato.

Trigger della pratica: ricerca best practices PKM 11/5/2026, applicazione del pattern "Personal CRM velocity layer" da Eric Ma + Mind Studio + community Obsidian PM-driven. Frontmatter esteso ai template `Person.md` e `Person Fornitore.md` + retro-popolato sui 15 stakeholder critici il 12/5/2026.

## Parametri da passare

```
taskId: crm-velocity
description: Audit settimanale velocity stakeholder critici — append-only, no fix automatici
cronExpression: 0 9 * * 1
```

(lunedì mattina ore 9:00 ora locale italiana, integra con weekly-digest delle 9:00 ma scrive su Daily Note del lunedì invece che su digest log)

## Prompt completo del task

Copia-incolla questo prompt come `prompt` del task scheduled:

---

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Esegui audit settimanale velocity stakeholder (lunedì mattina 9:00, trigger manuale ammesso).

## Razionale

Vault Obsidian con 56+ schede persona in `60 - People/`. Frontmatter esteso include `last_contact`, `cadence_days`, `relationship_strength`, `next_touchpoint`, `top_quotes`. Senza audit automatico, stakeholder critici accumulano silenzio invisibile. Questo task scansiona, calcola gap, propone azioni.

## Vincoli operativi

### Cosa puoi fare

- Leggere tutti i file `.md` di `60 - People/` (`/Users/carlosanvoisin/claude/60 - People/`)
- Estrarre frontmatter campi: `last_contact`, `cadence_days`, `relationship_strength`, `next_touchpoint`, `top_quotes`, `role`, `company`
- Calcolare `days_since_last_contact = today - last_contact`
- Classificare in 3 bucket:
  - 🔴 **CRITICO**: `days_since_last_contact > cadence_days * 2`
  - 🟡 **WARNING**: `cadence_days * 1.5 < days_since_last_contact <= cadence_days * 2`
  - 🟢 **OK**: `days_since_last_contact <= cadence_days * 1.5`
- Identificare `next_touchpoint` che cadono nei prossimi 7 giorni
- Append a Daily Note del lunedì (`10 - Daily Notes/YYYY-MM-DD.md`) in sezione dedicata `## 🔔 CRM warnings`
- Se la Daily Note del lunedì non esiste ancora, crearla con template minimo

### Cosa NON puoi fare mai

- Mai modificare il frontmatter delle schede persona (read-only)
- Mai inviare email o WhatsApp agli stakeholder
- Mai creare schede persona nuove
- Mai modificare schede progetto/area diverse dalla Daily Note del giorno
- Mai marcare un contatto come "fatto" — solo segnalare il gap

## Algoritmo

1. `find /Users/carlosanvoisin/claude/60 - People -name "*.md" -not -path "*/.*"` — lista tutte le schede persona
2. Per ogni file: estrai frontmatter (YAML parser standard)
3. Skip se `last_contact` mancante o non parseable → registra in lista "schede da popolare manualmente"
4. Calcola `days_since_last_contact` (oggi - last_contact in giorni)
5. Calcola bucket di classificazione (vedi sopra)
6. Identifica `next_touchpoint` nei prossimi 7gg
7. Aggrega 4 liste: 🔴 critici, 🟡 warning, 🟢 prossimi touchpoint pianificati, ⚪ schede da popolare
8. Append a Daily Note del lunedì

## Output atteso nella Daily Note del lunedì

```markdown
## 🔔 CRM warnings — settimana del YYYY-MM-DD

_Generato da `crm-velocity` lun 09:00. Trigger manuale: pannello Scheduled di Cowork._

### 🔴 Critici (>cadence×2)

| Stakeholder | Ruolo / Azienda | Ultimo contatto | Gap | Cadence target | Strength |
|---|---|---|---|---|---|
| [[Marco Pasquali]] | Director Marketing NoLoop | 2026-03-11 | 62gg | 30gg | cooling |

**Azione consigliata**: chiamata o caffè con priorità in settimana.

### 🟡 Warning (cadence×1.5 – cadence×2)

| Stakeholder | Ruolo / Azienda | Ultimo contatto | Gap | Cadence target |
|---|---|---|---|---|

**Azione consigliata**: ping leggero (WhatsApp / mail breve) entro 7gg.

### 🟢 Prossimi touchpoint pianificati (next_touchpoint nei 7gg)

| Stakeholder | Touchpoint pianificato | Note |
|---|---|---|
| [[Elena Chiti]] | 2026-05-12 | WhatsApp metà giornata su target Angelini |

### ⚪ Schede da popolare manualmente

Stakeholder con `last_contact` mancante o non parseable nel frontmatter:

- [[Persona X]] — last_contact assente

### 📈 Trend

- Settimana scorsa: K' critici → questa settimana: K critici. Δ = ±X
- Stakeholder usciti dal bucket 🔴 dall'ultima settimana: [[Persona Y]] (azione svolta)
- Stakeholder entrati nel bucket 🔴: [[Persona Z]]

### Azione consigliata

Se 🔴 > 0 → bloccare 30 min sul calendario per i contatti critici questa settimana.
Se 🔴 = 0 e 🟡 = 0 → "✅ CRM pulito, nessuna velocity issue".
```

## Trigger di alert ad alta priorità

- 🔴 critici > 5 → alert in cima alla Daily Note (header `⚠️ ATTENZIONE — N stakeholder critici questa settimana`)
- Stakeholder con `relationship_strength: cooling` E gap > cadence_days → alert dedicato ("rischio raffreddamento ulteriore")
- `top_quotes` vuoto su scheda con last_contact recente (<14gg) → suggerimento "preserva citazione testuale dalla call recente"

## Note finali

- Tono asciutto, da PM, italiano
- Output minimo se 0 critici e 0 warning: append blocco con "✅ CRM pulito questa settimana"
- Trigger manuale on-demand sempre ammesso
- Cron lunedì 9:00 = coincide con weekly-digest ma scrive su Daily Note del lunedì (file diverso, no conflitto)

---

## Comando rapido per Carlo

In una chat Cowork normale dì: *"Crea scheduled task crm-velocity con cron `0 9 * * 1` usando il prompt che trovi in `99 - System/Setup CRM velocity.md`"*.

In alternativa, prendi il prompt completo della sezione sopra e copialo manualmente nella UI Scheduled di Cowork.

## Stakeholder già popolati (12/5/2026)

15 schede critiche con frontmatter CRM completo. Lista per riferimento (per allargare il bucket in futuro, ripetere il pattern):

| Stakeholder | Cadence | Strength | Last contact |
|---|---|---|---|
| [[Laura Garbarino]] | 7gg | warm | 2026-04-29 |
| [[Bruno Mattucci]] | 14gg | warm | 2026-05-11 |
| [[Marco Pasquali]] | 30gg | **cooling** | 2026-03-11 |
| [[Paolo Donzelli]] | 14gg | warm | 2026-04-13 |
| [[Massi Sinigaglia]] | 14gg | warm | 2026-05-07 |
| [[Stefania Solidoro]] | 14gg | warm | 2026-05-08 |
| [[Marta Garrafa]] | 14gg | warm | 2026-05-11 |
| [[Federico Saladino (Soolutions)\|Federico Saladino]] | 7gg | warm | 2026-05-11 |
| [[Simone Montanari (Soolutions)\|Simone Montanari]] | 7gg | warm | 2026-05-11 |
| [[Lavinia Ferrari]] | 21gg | warm | 2026-04-24 |
| [[Elena Chiti]] | 7gg | warm | 2026-05-11 |
| [[Andrea Pasquali]] | 14gg | warm | 2026-05-08 |
| [[Danilo Piersanti (Silencio)\|Danilo Piersanti]] | 14gg | warm | 2026-05-11 |
| [[Marco Murolo]] | 21gg | neutral | 2026-04-29 |
| [[Luigi (Achipont)]] | 14gg | warm | 2026-05-07 |

## Verifica post-creazione

Dopo aver creato il task:

1. Lancia un trigger manuale dal pannello Scheduled per testare immediatamente (non aspettare lunedì)
2. Verifica che la Daily Note di oggi (`10 - Daily Notes/2026-05-12.md`) contenga la sezione `## 🔔 CRM warnings`
3. Se 🔴 critici emersi (alto probabile: Marco Pasquali sicuro è in bucket 🔴), valuta se mettere `- [ ]` task in scheda persona o azione manuale immediata
4. Aggiornare CLAUDE.md §9 (scheduled tasks attivi) dopo conferma che il task gira correttamente

## Estensione futura (post-pilot)

Dopo 4 settimane di uso, valutare:

- Allargare il bucket popolato dai 15 critici ai 25 (cluster cliente esteso). Pattern di retro-popolamento documentato in chat 12/5/2026
- Aggiungere campo `relationship_decay_rate` per stakeholder che vanno raffreddandosi velocemente (Marco Pasquali tipico esempio)
- Integrare con Microsoft Lists / Outlook per pull automatico `last_contact` da email reali (oggi è manuale)
