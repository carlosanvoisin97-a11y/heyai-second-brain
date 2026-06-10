---
type: weekly-review
created: {{date}}
updated: {{date}}
status: in_progress
week: 
related_template: "Weekly Review interattivo (Setup in 50 - Archive/System Snapshots/Setup Weekly Review.md)"
---

# 📅 Weekly Review — settimana del {{date}}

> Prep doc generato dal task `weekly-review-interactive` venerdì 17:30. Apri Cowork, fai la review insieme all'agente (~30 min). Compila le sezioni man mano, spunta i checkbox quando ogni step è chiuso. Lunedì verifica che i task riprioritizzati siano finiti nelle schede progetto.

## 1. Inbox processing

**Obiettivo**: triagiare file in `00 - Inbox/` con età >7gg. Decisione per ognuno: promuovi a vault / archivia / kill.

- [ ] Step completato

### File in inbox >7gg

_(Auto-popolato dal task — modifica solo se serve aggiungere note)_

| File | Età | Decisione |
|---|---|---|
| `[[YYYY-MM-DD - Titolo]]` | Ngg | TBD |

### Decisioni prese in questa review

- 

---

## 2. Project status sweep

**Obiettivo**: per ogni progetto P1/P2 (vedi [[CLAUDE]] §6 snapshot) verificare `updated:` nel frontmatter. >14gg → flag come "stale" e decidere se fixare ora o creare task.

- [ ] Step completato

### Progetti P1/P2 attivi

_(Auto-popolato dal task — sweep frontmatter `updated:`)_

| Progetto | `updated:` | Età | Status atteso | Note |
|---|---|---|---|---|
| `[[_Wave 2 NoLoop\|Wave 2 NoLoop]]` | YYYY-MM-DD | Ngg | 🟢 P1 | |

### Schede stale da fixare entro lunedì

- 

---

## 3. Stakeholder follow-up scan

**Obiettivo**: rivedere i warning CRM emersi questa settimana (vedi `[[10 - Daily Notes/{{date}}|Daily Note]]` sezione 🔔 CRM warnings). Decidere azione per i 🔴 critici e 🟡 warning.

- [ ] Step completato

### Critici (🔴) — da gestire entro 7gg

| Stakeholder | Gap | Azione concreta | Quando |
|---|---|---|---|

### Warning (🟡) — ping leggero

| Stakeholder | Gap | Ping pianificato (WhatsApp/mail) |
|---|---|---|

### Touchpoint pianificati (🟢) — verifica esecuzione

- 

---

## 4. 3-question prompt umano

Domande da rispondere a mente fredda. Risposte sintetiche, non oratoria. Servono a portare in superficie quello che il digest automatico non vede.

- [ ] Step completato

### Q1 — Cosa non ho fatto questa settimana che mi pesa?

> 

### Q2 — Cosa è cambiato nei numeri ufficiali (vedi [[Master Facts Sheet]] §5)? Va aggiornato il file?

> 

### Q3 — Cosa devo escalation a Bruno o decision-maker?

> 

---

## 5. Re-prioritization

**Obiettivo**: aggiornare snapshot [[CLAUDE]] §6 (progetti attivi) se ci sono cambi di stato (P1→P2, milestone shift, status). Aggiornare `99 - System/Open Tasks.md` solo se serve sblocco urgente — di base si fa da solo dal digest mattutino.

- [ ] Step completato

### Cambi di stato proposti per §6 CLAUDE.md

| Progetto | Vecchio | Nuovo | Motivazione |
|---|---|---|---|

### Open Questions da chiudere o riaprire

- 

---

## 🔔 Output della review (azioni propagate)

**Da fare prima di chiudere la review**:

- [ ] Aggiornato §6 CLAUDE.md se cambi di stato
- [ ] Promossi/archiviati file inbox
- [ ] Creati `- [ ]` task nelle schede progetto per le azioni concrete
- [ ] Aggiornato `next_touchpoint` nei frontmatter degli stakeholder 🔴 e 🟡
- [ ] Aggiornata Open Questions se Q3 ha portato nuove escalation

---

## Note libere / lessons settimana

_Spazio per appunti rapidi che non rientrano nelle 5 sezioni. Se diventa pattern ricorrente → promuovi a atomic note in `40 - Resources/Concetti/`._

- 

---

## Sessione Cowork correlata

_Auto-popolata dal task `cowork-sessions-index` (cron 22:00) — non scrivere a mano sotto questa riga_
