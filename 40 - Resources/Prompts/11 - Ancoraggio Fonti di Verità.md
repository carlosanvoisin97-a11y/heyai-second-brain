---
type: prompt-template
usage: process-guardrail
source: insights 2026-06-02
---

# 📌 Prompt 11 — Ancoraggio Fonti di Verità

## Quando usarlo
All'inizio di qualsiasi task su un cliente in cui l'agente rischia di partire dalla fonte sbagliata: sito live invece del brief di gara, scheda obsoleta invece di quella aggiornata, markdown di comodo invece del sorgente che genera l'output. Previene il rework #1 — lavoro fatto bene ma sulla fonte sbagliata.

## Template

> Prima di toccare qualsiasi file per **{NOME_CLIENTE} / {NOME_PROGETTO}**:
> 1. Elenca i file esatti che userai come **fonte di verità**, in ordine di autorità (es. brief/capitolato di gara > [[Master Facts Sheet]] > scheda progetto > schede persona > file allegati > sito live), con il path completo.
> 2. Dichiara qual è il **file sorgente** da cui si genera l'output finale (es. l'HTML che genera il `.pptx`, non solo il markdown): le modifiche vanno propagate lì, non solo nella copia di comodo.
> 3. **Aspetta la mia conferma** su questa lista prima di editare qualunque cosa.
> 4. Se un dato non è in quei file, scrivi "DA CONFERMARE" invece di assumerlo.

## Come customizzarlo
- Sostituisci `{NOME_CLIENTE} / {NOME_PROGETTO}` con il caso in corso.
- Per le gare la gerarchia tipica è **brief/capitolato > materiali ufficiali cliente > vault HeyAI**; il sito live del cliente è fonte DEBOLE (spesso vecchio).
- Per i deliverable generati (deck, sito) esplicita sempre coppia sorgente→output, così non si edita solo la copia sbagliata.

## Perché esiste
Pattern ricorrente (insights 2/6/2026): l'agente ha più volte ancorato il lavoro alla fonte sbagliata (sito live invece del brief; markdown invece del sorgente HTML del deck), costringendo a rifare. Rafforza CLAUDE.md §15 (Glob-prima-di-Edit) e §10ter.1 (cerca template/fonti prima di chiedere).
