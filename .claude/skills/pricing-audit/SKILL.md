---
name: pricing-audit
description: Stress-test dei numeri prima di ogni consegna o decisione di pricing HeyAI — verifica fonti, ricostruzione calcoli, regola ≤60%, attacco avversariale, drift cross-file. Usa PRIMA di inviare qualsiasi quotazione/proposta/deck con numeri, quando Carlo chiede di verificare numeri/margini/pricing, o per riconciliare numeri divergenti tra file. Creata 10/6/2026 (9 sessioni di pattern reale).
---

# pricing-audit — i numeri non escono senza stress-test

Regola di casa: **errori di math = bocciatura cliente** (CLAUDE.md §2). Questa skill è la checklist che le 9 sessioni di audit numerico (mag-giu 2026) hanno ripetuto a mano.

## Checklist (in ordine, tutte e 5)

1. **Fonte**: ogni numero ha la sua fonte dichiarata? Gerarchia: [[Master Facts Sheet]] (autoritativo) > scheda progetto > documento storico. Numero senza fonte = "TBD — chiedere a Carlo", MAI inventato. Se due fonti divergono → regola §4 "data più recente vince" MA segnalare, non auto-applicare.
2. **Ricostruzione**: rifare i calcoli da zero (somme di tabella, sconti, percentuali, payback). Non fidarsi del totale scritto: ricalcolarlo. Tabella per tabella, anche in copertina (lesson PDF Wave 2: copertina €315K vs corpo €300K).
3. **Regola pricing ≤60%** (§2.2, BLOCCANTE): costo fornitore / prezzo cliente per OGNI modulo e per il totale. Target 40-45%, accettabile 50%, tattico 55-60%, oltre = stop. Su bundle: verificare anche modulo-per-modulo (un modulo sotto margine inquina il bundle).
4. **Attacco avversariale**: "come mi attacca il CFO?" — per ogni numero esposto: è difendibile con un documento? il confronto con un'alternativa (competitor, listino, fai-da-te) regge? le unità sono coerenti (anno/mese, IVA in/out, una-tantum/ricorrente)? gli arrotondamenti raccontano la stessa storia in pagine diverse?
5. **Drift cross-file**: il numero che sto per consegnare è coerente con Master Facts e scheda progetto? (CLAUDE.md §6 è una vista derivata dai frontmatter: la verità è la scheda) In dubbio: girare il sub-check `contradictions` di [[../vault-health/SKILL.md|vault-health]] sul progetto. Dopo la consegna: propagare il numero nuovo a Master Facts E scheda (§14: mai una sola).

## Output

Mini-report in chat: tabella `numero · fonte · ricalcolo OK/KO · %fornitore · rischio attacco` + verdetto secco (`✅ consegnabile` / `⚠️ correggere X prima`). Se trovi numeri da cambiare: PROPOSTA a Carlo, mai auto-applicare (§5).
