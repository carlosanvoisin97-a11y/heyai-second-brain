---
type: weekly-review
created: 2026-05-24
updated: 2026-05-24
status: in_progress
week: 2026-W21 (19–25 maggio 2026)
related_template: "Weekly Review interattivo (Setup in 99 - System/Setup Weekly Review.md)"
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Settimana chiusa; review successive in weekly-review-interactive (routine cloud). Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# 📅 Weekly Review — settimana del 2026-05-24

> Prep doc generato dal task `weekly-review-interactive` (trigger manuale/cron sab 17:30). Apri Cowork, fai la review insieme all'agente (~30 min). Compila le sezioni man mano, spunta i checkbox quando ogni step è chiuso. Lunedì verifica che i task riprioritizzati siano finiti nelle schede progetto.

---

## ⚠️ ALERT — Inbox sovraccarica

**11 file in inbox con età >7gg — processing prioritario questa review.**

---

## 1. Inbox processing

**Obiettivo**: triagiare file in `00 - Inbox/` con età >7gg. Decisione per ognuno: promuovi a vault / archivia / kill.

- [ ] Step completato

### File in inbox >7gg

_(Auto-popolato dal task — modifica solo se serve aggiungere note)_

| File | Età | Decisione |
|---|---|---|
| `[[2026-05-11 - Email recap Andrea Pazienza — bozza contratto Longo Wave 2]]` | 13gg | TBD |
| `[[2026-05-11 - Analisi bozza contratto Longo Wave 2]]` | 13gg | TBD |
| `[[2026-05-12 - BOZZA Email Recap Crowd Sessione Finale]]` | 12gg | TBD |
| `[[2026-05-12 - Weekly Review]]` | 12gg | TBD |
| `[[2026-05-13 - Email Lavinia Recap Website e Osservatorio]]` | 11gg | TBD |
| `[[2026-05-13 - WhatsApp Federico Simone azioni veloci]]` | 11gg | TBD |
| `[[2026-05-13 - BOZZA Email Germano Eye Cookies partenza sviluppi]]` | 11gg | TBD |
| `[[2026-05-13 - BOZZA Email Recap Federico Simone allineamento interno]]` | 11gg | TBD |
| `[[2026-05-13 - BOZZA Email Recap Elena post call cluster]]` | 11gg | TBD |
| `[[2026-05-14 - BOZZA Risposta Germano credenziali rinnovo Microlog]]` | 10gg | TBD |
| `[[2026-05-16 - Weekly Review]]` | 8gg | TBD |

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
| `[[_Wave 2 NoLoop\|Wave 2 NoLoop]]` | 2026-05-21 | 3gg | 🟢 P1 | Contratto Longo in chiusura |
| `[[Operation Transformation]]` | 2026-05-21 | 3gg | 🟢 P1 | Bozza emessa non firmata + acconto |
| `[[Eye Cookies]]` | 2026-05-22 | 2gg | 🟢 P1 | Contratto mai prodotto + approvazione email + acconto |
| `[[PresidIa]]` | 2026-05-15 | 9gg | 🟡 P2 | Race Silencio vs Jakala |
| `[[Osservatorio Strategico\|Osservatorio Futuritaly]]` | 2026-05-22 | 2gg | 🟢 P2 | Proposta inviata |
| `[[Sito Futuritaly]]` | 2026-05-21 | 3gg | 🟢 P2 | Promosso 13/5 |
| `[[Achipoint]]` | 2026-05-21 | 3gg | 🟢 P2 | Proposta v1 prodotta |
| `[[Eldis Compilatore]]` | 2026-05-22 | 2gg | 🟢 P2 | Builder evolutive |
| `[[_Angelini Academy\|Angelini Academy]]` | 2026-05-23 | 1gg | 🟢 P2 | Pitch finale 31/5 — urgente |
| `[[HoReCa]]` | 2026-05-13 | 11gg | 🟢 P3 | Early stage |
| `[[Jakala]]` | 2026-05-19 | 5gg | 🟢 evaluating | Allocazione 4 progetti |
| `[[NOT Marketing - LinkedIn e Sito]]` | 2026-05-19 | 5gg | ✅ saldo | — |

> ✅ Nessun progetto stale (>14gg) questa settimana.

### Schede stale da fixare entro lunedì

- Nessuna scheda >14gg. HoReCa a 11gg — tenere d'occhio.

---

## 3. Stakeholder follow-up scan

**Obiettivo**: rivedere i warning CRM emersi questa settimana. Decidere azione per i 🔴 critici e 🟡 warning.

> Fonte: Daily Note [[10 - Daily Notes/2026-05-19|2026-05-19]] — run `crm-velocity` manuale 19/05 (cron lun 18/5 non eseguito, MS365 offline). **Prossimo cron: lun 25/5 09:00** — atteso aggiornamento.

- [ ] Step completato

### ⚠️ Stakeholder velocity in degrado — 3 critici (> soglia alert)

### Critici (🔴) — da gestire entro 7gg

| Stakeholder | Ruolo / Azienda | Ultimo contatto | Gap | Cadence target | Strength |
|---|---|---|---|---|---|
| [[Marco Pasquali]] | Director Marketing / NoLoop | 2026-03-11 | 74gg | 30gg | cooling |
| [[Paolo Donzelli]] | CFO / NoLoop | 2026-04-13 | 41gg | 14gg | warm |
| [[Laura Garbarino]] | AD / NoLoop | 2026-04-29 | 25gg | 7gg | warm |

> ⚠️ **Marco Pasquali** — `cooling` + 74gg su cadence 30gg. Mentor informale; relazione padre-figlio con Andrea Pasquali (Jakala) — sensibile. Aggancio naturale: Wave 2 + contratto Longo in chiusura.
>
> ⚠️ **Laura Garbarino** — AD NoLoop, decision maker N°1 sul €300K Wave 2. 25gg su cadence settimanale. Ultima call 29/4. Contatto urgente.
>
> ⚠️ **Paolo Donzelli** — CFO, firma contratti. 41gg su cadence 14gg. Focus ROI/payback — aggancio naturale con avanzamento Wave 2.

### Warning (🟡) — ping leggero

Nessuno (run 19/5).

### Touchpoint pianificati (🟢) — verifica esecuzione

| Stakeholder | Touchpoint pianificato | Note |
|---|---|---|
| [[Lavinia Ferrari]] | 2026-05-20 | Era pianificato — verificare se eseguito |

> 💡 **Alert top_quotes**: [[Lavinia Ferrari]] e [[Luca Fratini (Aegiscore)]] hanno `last_contact` recente ma `top_quotes` vuoto — preservare citazione testuale da call recente se disponibile.

---

## 4. 3-question prompt umano

Domande da rispondere a mente fredda. Risposte sintetiche, non oratoria.

- [ ] Step completato

### Q1 — Cosa non ho fatto questa settimana che mi pesa?

> 

### Q2 — Cosa è cambiato nei numeri ufficiali (vedi [[Master Facts Sheet]] §5)? Va aggiornato il file?

> 

### Q3 — Cosa devo escalation a Bruno o decision-maker?

> 

---

## 5. Re-prioritization

**Obiettivo**: aggiornare snapshot [[CLAUDE]] §6 se ci sono cambi di stato. Aggiornare `99 - System/Open Tasks.md` solo se serve sblocco urgente.

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
- [ ] Promossi/archiviati file inbox (11 da triagiare)
- [ ] Creati `- [ ]` task nelle schede progetto per le azioni concrete
- [ ] Aggiornato `next_touchpoint` nei frontmatter degli stakeholder 🔴 (Pasquali, Donzelli, Garbarino)
- [ ] Aggiornata Open Questions se Q3 ha portato nuove escalation
- [ ] Verificato esecuzione touchpoint Lavinia Ferrari (era pianificato 20/5)

---

## Note libere / lessons settimana

_Spazio per appunti rapidi che non rientrano nelle 5 sezioni. Se diventa pattern ricorrente → promuovi a atomic note in `40 - Resources/Concetti/`._

- 

---

## Sessione Cowork correlata

_Auto-popolata dal task `cowork-sessions-index` (cron 22:00) — non scrivere a mano sotto questa riga_
