---
type: prompt-template
usage: method
source: insights 2026-06-02
---

# 🔁 Prompt 16 — Pipeline Deliverable Auto-Verificante

## Quando usarlo
Per produrre o aggiornare un deliverable strutturato per un cliente (deck, sito, proposta) dove ogni sezione deve essere corretta nei fatti, nel tono e propagata dal sorgente all'output. È il "fai-bene-alla-prima" sui deliverable importanti.

## Template

> Per produrre/aggiornare **{DELIVERABLE}** per **{NOME_CLIENTE} / {NOME_PROGETTO}**, lavora per sezioni e per ognuna esegui in ordine:
> 1. **Bozza** della sezione.
> 2. **Fact-check** di claim, numeri, prezzi e attribuzioni contro le fonti di verità (vedi **Prompt 11** + **Prompt 14**).
> 3. **Verifica tono/registro** (executive, niente semplificazioni sotto lo standard — CLAUDE.md §2).
> 4. **Propaga** la modifica approvata dal **sorgente all'output** (es. markdown → HTML → `.pptx` ricostruito), non solo nella copia.
> 5. Tieni un **log di validazione**; marca la sezione "completa" solo se tutti i check passano.
> **Fermati e chiedimi** prima di cambiare nomi, prezzi o attribuzioni.

## Come customizzarlo
- Adatta la catena sorgente→output al deliverable (deck: scaletta md → HTML → pptx; proposta: scheda → `.docx` via skill `investment-proposal-drafting`).
- Deck di gara: aggiungi step "ogni slide regge contro i criteri di valutazione".
- Deliverable minore: snellisci a 3 step (bozza → fact-check → propaga).

## Perché esiste
Insights 2/6/2026: round ripetuti di correzione su deck per assunzioni sbagliate, tono semplificato e modifiche fatte solo sul markdown e non sul sorgente del deck. Questa pipeline incorpora i controlli prima della consegna.
