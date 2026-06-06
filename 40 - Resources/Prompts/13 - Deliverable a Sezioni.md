---
type: prompt-template
usage: process-guardrail
source: insights 2026-06-02
---

# 🧱 Prompt 13 — Deliverable a Sezioni (anti limite output)

## Quando usarlo
Per audit, report o documenti lunghi che rischiano di morire a metà per il limite di output (errori "token maximum" / "thinking blocks"). È stato il blocco tecnico #1: ricerca completata ma sintesi finale persa.

## Template

> Produci **{DELIVERABLE}** per **{NOME_CLIENTE} / {NOME_PROGETTO}** in **sezioni numerate**, NON in un'unica risposta gigante:
> - Scrivi ciascuna sezione nel suo file man mano che la completi (es. `00 - Inbox/{DATA} - {DELIVERABLE} - sez NN.md`).
> - Tieni ogni risposta sotto il limite di output.
> - **Fermati a conferma** tra una sezione e l'altra: se qualcosa si interrompe il lavoro fatto è già salvato e ripartiamo dall'ultima sezione, non da capo.

## Come customizzarlo
- Decidi tu il taglio delle sezioni (per capitolo, per pagina, per area di audit).
- Report unico finale: in coda aggiungi "ora unisci le sezioni NN in un solo file `{NOME}`".
- Combinalo col **Prompt 15** quando le sezioni sono prodotte da agenti paralleli.

## Perché esiste
Insights 2/6/2026: molte sessioni di audit/sintesi sono collassate sul limite di output proprio alla fine. Scrivere su file in modo incrementale rende il lavoro ripartibile e non perde la ricerca già fatta.
