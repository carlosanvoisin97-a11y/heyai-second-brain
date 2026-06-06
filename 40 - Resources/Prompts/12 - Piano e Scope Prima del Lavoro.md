---
type: prompt-template
usage: process-guardrail
source: insights 2026-06-02
---

# 🧭 Prompt 12 — Piano e Scope Prima del Lavoro Profondo

## Quando usarlo
Prima di analisi lunghe, audit, deck o memo su un cliente, quando rischi che l'agente parta con un metodo pesante (Council, brainstorming esteso, swarm) mentre ti basta un output breve. Evita risposte lunghe inutili e — dato il limite di token — il collasso a fine task.

## Template

> Prima di qualsiasi analisi o deliverable profondo su **{NOME_CLIENTE} / {NOME_PROGETTO}**:
> - Dammi un **piano in 1-3 righe** + il **formato e la lunghezza attesa** dell'output (es. "tabella 5 righe", "memo 1 pagina", "3 bullet").
> - Poi **fermati e aspetta il mio OK**.
> - Non avviare metodi elaborati (Council, multi-step, agenti paralleli) se non te li chiedo esplicitamente.

## Come customizzarlo
- Task tattico veloce: aggiungi "rispondi diretto, max N righe, niente preamboli".
- Task grosso legittimo: dopo l'OK, abbina il **Prompt 13** (deliverable a sezioni) per non sforare i limiti.

## Perché esiste
Insights 2/6/2026: redirezioni ripetute perché l'agente assumeva un workflow pesante quando bastava un prompt conciso. Allineato a CLAUDE.md §2.0 (risposte brevi e chirurgiche).
