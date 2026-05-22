---
type: prompt-template
usage: quality-check
---

# 🔍 Prompt 02 — Audit Numerico Presentazione

## Quando usarlo
Verificare incoerenze in slide deck o documenti commerciali prima di mandarli a cliente. Esempio: prima di inviare la presentazione Wave 2 NoLoop a Garbarino+Donzelli.

## Template

> Sei un auditor esterno. Verifica numericamente la presentazione `{NOME_FILE}`.
> 
> Ricostruisci da zero ogni calcolo: **percentuali**, **risparmi €**, **ROI**, **payback**, **FTE**, **iperammortamento**, **somme totali**, **coerenza tra slide di dettaglio e slide di summary**.
> 
> Per ogni errore trovato indica:
> 1. **Slide** in cui appare
> 2. **Valore dichiarato** (testo)
> 3. **Valore corretto** (calcolato dai dati base)
> 4. **Formula usata** per arrivare al valore corretto
> 5. **Severità**: 🔴 critico (cliente lo noterà sicuro) / 🟡 minore / 🔵 cosmetico
> 
> Tipologie tipiche di errori da verificare:
> - ROI/payback calcolati su listino vs bundle (formula errata)
> - Discrepanza KPI box vs testo descrittivo
> - Somme parziali ≠ totali
> - Iperammortamento applicato con % diverse tra slide
> - Sconto bundle dichiarato vs effettivo
> - "N business case" mostrati ≠ N effettivi in appendice
> - Numero moduli/soluzioni inconsistente

## Esempio nel vault

[[20 - Projects/NoLoop/Wave 2/Numeri Ufficiali Roadmap 2026|Numeri Ufficiali Roadmap 2026]] — sezione "🚨 Errori da correggere prima invio finale" elenca 6 errori trovati nell'audit del 10/03/2026 (ROI 175→192%, ROI 45→52%, "€353k" vs €299k, "6 business case" vs 5, sconto bundle €24K vs €16.5K, iperammortamento €13.256 vs €13.824).
