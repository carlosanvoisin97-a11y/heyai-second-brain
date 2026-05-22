---
type: prompt-template
usage: requirement-analysis
---

# 📋 Prompt 07 — Analisi Funzionale → Requirement Log

## Quando usarlo
Trasformare documenti cliente / transcript discovery / brief in un Requirement Log strutturato che può diventare allegato contrattuale. Stile: rigoroso, numerato, must-have/nice-to-have.

## Template

> Analizza **{DOCUMENTI/TRANSCRIPT}** come il miglior analista funzionale e produci un Requirement Log con questa struttura:
> 
> ## Requirement Log — {Nome Progetto}
> 
> Per ogni requisito:
> - **ID** (es. R1.1, R1.2, R2.1)
> - **Categoria** (es. LeadMe Evolution / Flow / Sicurezza / Integrazione BC)
> - **Descrizione** (in linguaggio cliente, no jargon)
> - **Priorità**: 🔴 Must-have / 🟡 Should-have / 🔵 Nice-to-have / ⚪ Fase 2
> - **Effort indicativo**: S/M/L/XL (≤8h / 8-40h / 40-120h / >120h)
> - **Dipendenze** (altri requisiti, integrazioni esterne, dati cliente)
> - **Acceptance criteria** (cosa significa "fatto")
> 
> ## Esclusioni esplicite
> Lista di cosa NON è coperto, classificate come:
> - **Fase 2** (riprenderemo dopo go-live)
> - **Change Request** (quotabile separatamente)
> - **Out of Scope definitivo**
> 
> ## Domande aperte da chiarire con cliente
> Lista numerata delle ambiguità (privilegiando quelle bloccanti)
> 
> ## Integrazioni critiche da testare
> Lista di sistemi esterni con cui dobbiamo verificare compatibilità (es. Business Central API, LinkedIn Sales Navigator, BAT/PARD).

## Riferimento standard HeyAI

- Wave 2 NoLoop = **83 requisiti totali, 72 must-have** (allegato contrattuale)
- Eldis AI Product Catalogue = Requirement Log centrale (28/04/2026)
- NOT Operation Transformation = fasi F0 setup + F1+ features

## Pattern HeyAI per architettura

- Principio "POSSIEDE/LEGGE" (proprietà dato univoca)
- Deep linking tra moduli
- Integrazione BC bidirezionale
- Sally trasversale read-only

## Esempi nel vault

- "Analisi requisiti tecnici e funzionali per prototipo" (chat 16/03, 5 artifacts)
- Brief WAVE 2 NoLoop (12 artifacts, 27/04)
- Eldis AI Product Catalogue Requirement Log
