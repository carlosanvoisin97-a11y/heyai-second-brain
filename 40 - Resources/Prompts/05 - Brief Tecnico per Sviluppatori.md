---
type: prompt-template
usage: brief-developer
---

# 🛠️ Prompt 05 — Brief Tecnico per Sviluppatori (Federico/Simone)

## Quando usarlo
Trasformare note user-friendly o transcript di call cliente in un brief strutturato che Federico Saladino (front-end) e Simone Montanari (back-end) possano usare per stimare e quotare.

## Template

> Genera un brief tecnico per il team di sviluppo Soolutions. Struttura:
> 
> ## 1. Contesto progetto
> - Cliente: {NOME}
> - Outcome atteso: {1 riga}
> - Vincoli: timeline, budget, integrazioni esistenti
> 
> ## 2. Requisiti funzionali (Must-Have)
> Per ogni requisito: [ID] - [Descrizione] - [Owner: Federico/Simone] - [Stima ore]
> 
> ## 3. Requisiti tecnici/architetturali
> - Stack tecnologico
> - Integrazioni esterne (API, OAuth, webhook)
> - Database e storage
> - Performance/scaling targets
> 
> ## 4. Out of Scope
> Lista ESPLICITA di cosa NON è incluso. Per ogni voce esclusa, suggerisci se:
> - Quotabile separatamente come Change Request
> - Da rivalutare in Fase 2
> - Definitivamente fuori
> 
> ## 5. Modello di pricing
> Effort stimato in monte ore forfait. Spalmato 35/30/35 milestone (acconto/MVP/delivery).
> Tariffa oraria €440-600/gg senior dev. Markup 2.0x sweet spot.
> 
> ## 6. Domande aperte
> Lista delle ambiguità da chiarire con cliente prima della firma.

## Pattern HeyAI per architettura

- **Principio "POSSIEDE/LEGGE"**: ogni dato ha un solo proprietario, gli altri leggono in read-only
- **Deep linking** tra moduli (navigazione trasparente)
- **Integrazione BC bidirezionale** (push apertura/fatturazione, read fatture per quadratura)
- **Sally trasversale** read-only

## Esempi nel vault

- Brief WAVE 2 NoLoop (12 artifacts, 27/04/2026) — riferimento principale
- "Presidia ReqLog 40k" di Federico (14/04/2026) — versione spezzata per MVP
- "Allineamento 18/03 — punti e priorità" — brief con scope ridotto post call Garbarino
