---
type: prompt-template
usage: comunicazione-cliente
---

# ✉️ Prompt 04 — Risposta Email Tono Diretto (Garbarino-style)

## Quando usarlo
Per comunicazioni con stakeholder che vogliono concretezza: Laura Garbarino (AD NoLoop), Paolo Donzelli (CFO), Massi Sinigaglia. Stile: dati + numeri + tempi, no features tecniche, no jargon.

## Template

> Scrivi una email a **{DESTINATARIO}** in risposta a **{TOPIC}**.
> 
> Vincoli di stile:
> - **Massimo 5 paragrafi**
> - Ogni paragrafo: **una sola idea** chiara
> - **No features tecniche** (es. NON "implementiamo OAuth + RPA fallback con webhook"). 
>   Invece: **risultato per il cliente** (es. "il sistema continuerà a funzionare anche se le API esterne cambiano, senza richiederti intervento").
> - **Numeri concreti** dove servono (€, %, mesi, ore)
> - **Roadmap visiva separata** dai dettagli tecnici
> - Closing: **prossimo step concreto con data**
> 
> Apertura: niente preamboli formali. Vai dritto al punto.
> Chiusura: "A presto" / "Restiamo in attesa di riscontro entro [data]".

## Esempi di adattamento per stakeholder

**Laura Garbarino (AD)**
- Stile preferito: "Soliti stime e tempi", non features
- Ha bocciato il pitch con "buttala via" → diretta, senza fronzoli
- Vuole roadmap visiva separata da tech spec

**Paolo Donzelli (CFO)**
- Ragiona Gantt + flusso cassa
- Richiede stime developer prima di formalizzare
- Numeri precisi sui pagamenti

**Massi Sinigaglia**
- Tono ironico ("Come siete venali 😉")
- Apprezza concretezza
- Coordina con Germano e Marco Merli

## Pattern email-tipo (struttura)

```
Ciao {nome},

[Paragrafo 1: contesto in 2 righe + cosa propongo]

[Paragrafo 2: numero/dato chiave (€, mesi, %)]

[Paragrafo 3: tempistiche concrete]

[Paragrafo 4: cosa serve da te (1 azione concreta)]

[Closing 1 riga]

Carlo
```
