---
type: prompt-template
usage: meeting-minutes
---

# 📝 Prompt 08 — Recap Meeting con Action Items

## Quando usarlo
Trasformare transcript di meeting/call in minuta professionale strutturata. Per meeting interni HeyAI, allineamenti con NoLoop, kick-off di progetto, retrospettive.

## Template

> Analizza la trascrizione come PM esperto e produci una minuta strutturata:
> 
> ## Meeting: {Titolo}
> - **Data**: {data + ora}
> - **Partecipanti**: {nomi + ruoli}
> - **Agenda**: {se nota}
> - **Durata**: {se nota}
> 
> ## 1. Decisioni prese
> Tabella: | Decisione | Chi ha deciso | Razionale | Data effetto |
> 
> ## 2. Action Items
> Tabella: | # | Owner | Task | Deadline | Stato |
> Owner sempre assegnato (no "qualcuno"). Deadline concreta (no "ASAP").
> 
> ## 3. Punti aperti / Da chiarire
> Lista numerata di ambiguità o decisioni rinviate, con owner per il follow-up.
> 
> ## 4. Numeri e dati emersi
> Lista di importi, percentuali, scadenze, volumi citati durante il meeting.
> 
> ## 5. Prossimo step
> 1 frase: cosa succede dopo il meeting + chi muove.
> 
> ## 6. Allegati / Riferimenti
> Link a documenti, slide, materiali citati.

## Pattern HeyAI

- Estrai decisioni/citazioni/task dalla trascrizione e fai append nelle schede pertinenti (progetto + persone presenti) — vedi CLAUDE.md §15. NON creare un file minuta separato.
- Aggiungi backlinks ai progetti coinvolti `[[NomeProgetto]]`
- Aggiungi backlinks alle persone `[[NomePersona]]`
- I task estratti devono comparire come `- [ ]` (saranno raccolti in Open Tasks dal PM Digest)

## Esempi nel vault

- Tutte le chat "Recap call cliente Elvis", "Analisi call cliente e redazione minuta progetto", "Minute call Crowd e NOT", "Riepilogo meeting Andrea e prossimi passi"
- "Analisi del meeting e performance di Carlo come PM" (per retrospettive personali)
