---
name: crm-velocity
description: Audit settimanale velocity stakeholder critici — append-only, no fix automatici
---

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Esegui audit settimanale velocity stakeholder (lunedì mattina 9:00, trigger manuale ammesso).

## Razionale

Vault Obsidian con 56+ schede persona in `60 - People/`. Frontmatter esteso include `last_contact`, `cadence_days`, `relationship_strength`, `next_touchpoint`, `top_quotes`. Senza audit automatico, stakeholder critici accumulano silenzio invisibile. Questo task scansiona, calcola gap, propone azioni.

## Vincoli operativi

### Cosa puoi fare

- Leggere tutti i file `.md` di `60 - People/` (`60 - People/`)
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

1. `find 60 - People -name "*.md" -not -path "*/.*"` — lista tutte le schede persona
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
- Cron lunedì 9:00 — scrive su Daily Note del lunedì, no conflitto con altri task attivi

## ⚙️ Push finale (routine cloud, F1)
Al termine: (1) committa le modifiche; (2) esegui **`git pull --rebase origin main`** (un altro writer può aver pushato durante la run: senza pull il push viene rifiutato e il lavoro muore nel clone); (3) pusha **direttamente sul branch `main`** (`git push origin HEAD:main`); (4) verifica con `git status --porcelain` che il working tree sia PULITO — se restano modifiche, committale e ripeti (2)-(3): nulla deve restare non pushato, altrimenti finisce sull'outcome-branch `claude/*` del trigger (causa del leak link-checker 10/6). **NON** creare un branch separato né aprire una PR — il vault deve aggiornarsi su `main`. _(sequenza pull→push→clean, patch 10/6)_
