---
name: deck-iteration
description: Metodologia di iterazione su deck/pitch (.pptx) di Carlo — doc-modifiche decoupled dal file, audit avversariale "come mi attacca il cliente", registro decisioni. Usa quando si lavora a revisioni di slide/deck/pitch esistenti, si preparano modifiche per una gara, o Carlo chiede di sistemare/riscrivere/verificare slide. Standardizzata 10/6/2026 dalle 11 sessioni del ciclo Angelini.
---

# deck-iteration — il metodo Carlo per iterare sui deck

Estratto dalle 11 sessioni del ciclo pitch Angelini (mag-giu 2026, il pattern di lavoro più ricorrente di giugno). Tre pezzi, sempre nello stesso ordine.

## 1. Doc-modifiche DECOUPLED dal PPTX

NON editare il .pptx direttamente a ogni giro. Produrre un **documento di modifiche** (`<Deck> - Modifiche vN.md` nella cartella progetto) con una voce per slide:

```markdown
## Slide N — <titolo>
- **ORA dice**: <testo/elemento attuale, citato>
- **DIVENTA**: <testo nuovo esatto, pronto da incollare>
- **Perché**: <1 riga, solo se non ovvio>
```

Carlo (o la skill pptx in un secondo momento) applica le modifiche in batch. Vantaggi provati: review rapida slide-per-slide, nessuna versione .pptx intermedia da deduplicare, le decisioni restano leggibili.

## 2. Audit avversariale "come mi attacca il cliente"

Prima di dichiarare pronto un giro di modifiche, passare il deck con la lente del decisore ostile:
- Per ogni claim: **è verificabile?** (fonte nel vault o nel brief; se no → riformulare o disclaimare inline). Lesson: "Forum con Premi Nobel" era visione del cliente, non asset — quasi finita in slide come fatto.
- Per ogni numero: **regge il fact-check?** (Master Facts + regola ≤60%; sovrastime tipo "500+ MBA quando sono 45" = credibilità bruciata).
- Per ogni superlativo/assoluto: **è smentibile in sala?** ("nessuno ha X" è smentibile; "poco presidiato" no).
- Partner/fornitori: **§13 rispettata?** (mai nomi fornitori in materiale cliente).

## 3. Registro decisioni

Tenere UN file `REGISTRO VALIDAZIONE` per gara: ogni decisione in forse (testo, numero, slide dentro/fuori) con stato `aperta/decisa-da-chi/quando`. A fine gara il registro è la materia prima del distillato (→ atomic note lezioni, vedi [[Lezioni dalla gara Angelini Academy]]).

## Regole collegate

- Tempo parlato ≤30% se c'è un capofila ([[Parli troppo dopo aver ottenuto quello che vuoi]]).
- Demo navigabile > screenshot: se esiste un prototipo, è lui l'asset (lesson Angelini).
- Conversione finale .pptx via skill `pptx` SOLO a modifiche congelate (mai .pptx intermedi).
