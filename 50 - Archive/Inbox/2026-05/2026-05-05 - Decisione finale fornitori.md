---
type: decision-note
date: 2026-05-05
status: in-attesa-input
updated: 2026-05-05
---

# 🎯 Decisione finale fornitori — Silencio vs Jakala

> Versione corretta. La precedente impostava il confronto su HoReCa+hosting (criteri sbagliati). Carlo ha riconfigurato: HoReCa fuori da entrambi, hosting trade-off neutro, tempi Jakala più stretti, flessibilità Jakala più alta. Il criterio reale è **margine atteso × probabilità di chiusura per singolo progetto**, più i fattori operativi.

## Premesse corrette

- **HoReCa**: fuori sia da Silencio che da Jakala. Carlo lo gestisce con Federico/Simone (margine assicurato) o lo chiude. **Non è un fattore decisionale.**
- **Hosting/manutenzione/token**: trade-off neutro. HeyAI tiene = margine ricorrente. Cede a fornitore = libera overhead. Entrambe le opzioni sono valide, dipende dalla preferenza operativa.
- **Tempi delivery**: Jakala (Andrea) ha indicato tempi più stretti rispetto a Silencio (Danilo).
- **Flessibilità requisiti**: Jakala (Andrea) gestisce requisiti emergenti. Silencio (Danilo) propone semplificazioni perché lavora sotto prezzo di mercato.
- **Relazione personale**: ottima con Andrea, gestione personale dei progetti.

## Numeri aggiornati post quotazione finale Jakala (5/5 sera)

| Progetto | Cliente | Silencio | Margine S | **Jakala (finale)** | Margine J | Prob. |
|---|---|---|---|---|---|---|
| Osservatorio | 42K | 20K | **22K (52%)** | **35K** | 7K (17%) ⚠️ | 95% |
| PresidIA | 55K | 35K | 20K (36%) | **25K** | **30K (55%)** | 99% |
| Achipont | 45K | 20K | 25K (56%) | **15K** | **30K (67%)** | ~85% |
| **Totale** | 142K | 75K | **67K (47%)** | **75K** | **67K (47%)** | — |

**Allocazione Jakala squilibrata**: Osservatorio drenato (margine €7K, sotto floor), Achipont sovraccarico (€30K margine ma su progetto a probabilità più bassa). Da chiedere rebalance: Oss €28K + Achipont €22K + PresidIA €25K (totale invariato).

## 📩 UPDATE 6/5 sera: Quadro completo 3 fornitori

### Soolutions (Federico/Simone) — preventivo Achipont 6/5 + storico

| Progetto | Soolutions | Margine HeyAI |
|---|---|---|
| **Achipont MVP** | **€10K** | €35K (78%) ✅ top |
| PresidIA | €40K (storico) | €15K (27%) ⚠️ sotto floor |
| Osservatorio | €21.5K (storico) | €20.5K (49%) |
| HoReCa | ~€20K (storico) | €5K |

Achipont MVP €10K + opzionali €5.6K + Fase 2 €16.5K. Tempi MVP **4-5 settimane** dall'acconto. Costi LLM (€80-200/mese) + hosting a carico cliente.

### Margine atteso ponderato (3 AI, prob 0.99 PresidIA / 0.95 Oss / 0.85 Achipont)

| Allocazione | Calcolo | Atteso |
|---|---|---|
| Tutto Silencio (35+20+18) | 19.8+20.9+22.95 | **€63.6K** |
| Tutto Jakala — Andrea (25+20+30) | 29.7+20.9+12.75 | €63.3K |
| Tutto Jakala — Carlo (25+28+22) | 29.7+13.3+19.55 | €62.5K |
| **Split: Soolutions Achipont + Silencio Oss + Jakala PresidIA** | 29.75+20.9+29.7 | **€80.35K** ⚡ |
| Split: Soolutions Achipont + Silencio Oss+PresidIA | 29.75+20.9+19.8 | €70.45K |

**Achipont Soolutions a €10K è un affare gigante**: margine €35K vs Silencio €27K vs Jakala €15K (Andrea).

### Problemi pratici dello split ottimale

- **Vincolo Jakala min €50K**: PresidIA solo a €25K = sotto soglia, Andrea potrebbe rifiutare
- **Bundle Silencio**: se prendi solo Osservatorio, Silencio rivede al rialzo (es. +€2-3K)
- **PresidIA Soolutions €40K sotto floor** → NON andare con Soolutions su PresidIA

### Decisione aperta

Se Andrea accetta solo PresidIA + Osservatorio (€45K) come pacchetto valido → split top a €70-80K margine atteso. Se rifiuta → tutto Silencio resta il leader.

---

## 📩 UPDATE 6/5 sera: Silencio (Aegiscore) proposta ufficiale

PDF "OTE-HEYAI-PORTFOLIO-BUNDLE-2026" ricevuto via email da Danilo:

| Progetto | Aegiscore (finale) | Margine HeyAI |
|---|---|---|
| PresidIA | €35K | €20K (36%) |
| OsservatorioAI | €20K | €22K (52%) |
| HORECA | €27K | €-2K ⚠️ sotto floor |
| Achipont | €18K | €27K (60%) |
| **TOTALE bundle 4 progetti** | **€100K** | **€67K (40%)** |

**Solo i 3 progetti AI (no HoReCa)**: €73K costo, **€69K margine (49%)**.

### Punti TBD aperti

- **IP / codice sorgente**: placeholder "XXX" nel PDF — da negoziare
- Configurazione LLM service (AWS Bedrock o eq.)
- Costi cloud + LLM invocation esclusi (a carico cliente finale)
- ANAC/PDND accreditamento in carico HeyAI

### Margine atteso ponderato (3 progetti AI, prob 0.99/0.95/0.85)

| Fornitore | Calcolo | Atteso |
|---|---|---|
| **Silencio (Aegiscore, finale)** | 20×0.99 + 22×0.95 + 27×0.85 | **€63.6K** |
| Jakala controproposta Andrea (20+25+30) | 30×0.99 + 22×0.95 + 15×0.85 | €63.3K |
| Jakala Carlo (28+25+22) | 30×0.99 + 14×0.95 + 23×0.85 | €62.5K |

**Silencio e Jakala (Andrea) sono praticamente pari sul margine atteso**. Decisione ricade su criteri qualitativi:

| Criterio | Silencio | Jakala |
|---|---|---|
| Tempi delivery | NON dichiarati | Più stretti (Andrea) |
| Flessibilità requisiti | Cerca semplificazioni | Andrea gestisce in delivery |
| Relazione personale Carlo | Professionale | Ottima |
| Canale internalizzazione | Gabriele (pulito) | Andrea (alta, rischio Marco NoLoop) |
| Bundle integrato (architettura condivisa) | Sì (Achipont = 1° cliente OsservatorioAI) | No |
| HoReCa risolto | Sì in offerta (ma -2K margine) | No (fuori scope) |
| IP / codice sorgente | TBD | Standard |
| Validità offerta | 30 giorni scritta | Verbale |

---

## 🔄 UPDATE 6/5 sera: Andrea controproposta invertita

WhatsApp di Andrea (6/5 sera): **inverte la struttura** → Oss 20K + PresidIA 25K + Achipont **30K**. Clausola asimmetrica: +15K Oss se solo Osservatorio (a 35K), +2K Achipont se solo Achipont.

Andrea dichiara vincolo costo Jakala: "Osservatorio vero costo 40K+, ho abbassato per ottimizzazione Achipont".

**Margine atteso ponderato**: Carlo proposta €61.8K vs Andrea proposta €60.6K → Carlo +€1.2K + protezione downside molto maggiore.

**Decisione aperta**: hold the line, compromesso, accetta, o aspetta Silencio. Vedi [[Jakala]] per il confronto numerico completo.

---

## ✅ UPDATE 6/5: Andrea ha accettato il rebalance (versione call mattina)

Call del 6/5: Andrea accetta **Oss €28K + PresidIA €25K + Achipont €22K = €75K** in linea di principio. Clausola contingenza: +€2K Oss se Achipont non parte. **Jakala è il fornitore scelto.** Da chiudere con email ufficiale Andrea.

⚠️ **Superato dalla controproposta WhatsApp 6/5 sera** — vedi sopra.

Vedi: [[2026-05-06 - Call rebalance Pasquali]]

---

## ✅ Decisione strategica (Carlo, 5/5 sera)

**Split escluso**: Andrea richiede min €50K progetto Jakala. Solo PresidIA (€25K) sotto soglia, anche con commitment evolutive il caso interno per Andrea è debole.

**Strategia**: fornitore unico per i 3 progetti AI, scelto sul margine atteso sui **2 progetti più probabili** (Osservatorio 95% + PresidIA 99%). HoReCa fuori dal pacchetto → **Federico/Simone** (margine assicurato).

## Confronto sui 2 progetti più probabili

| | Margine Oss×0.95 | Margine PresidIA×0.99 | **Totale atteso** |
|---|---|---|---|
| Silencio (target) | 22×0.95 = 20.9 | 20×0.99 = 19.8 | **40.7K** |
| Jakala (finale, sbilanciato) | 7×0.95 = 6.7 | 30×0.99 = 29.7 | **36.4K** |
| **Jakala (post-rebalance)** | 14×0.95 = 13.3 | 30×0.99 = 29.7 | **43.0K** ← vincente |

## Margine atteso totale (3 progetti)

| Allocazione | Atteso |
|---|---|
| Tutto Silencio | 62K |
| Tutto Jakala finale | 62K |
| **Tutto Jakala post-rebalance** | **63K** + plus operativi |

## Il rebalance è il game-changer

- **Se Andrea accetta il rebalance** (Oss €28K + Achipont €22K + PresidIA €25K): vince Jakala su tutti i criteri (margine atteso sui più probabili + tempi + flessibilità + relazione + canale internalizzazione)
- **Se Andrea NON accetta**: vince Silencio (40.7K vs 36.4K sui due più probabili)

**Per progetto singolo, fornitore migliore**:
- 🏆 **Osservatorio: Silencio** (gap €9K)
- 🏆 **PresidIA: Jakala** (gap €8K)
- ⚖️ **Achipont: pari** (gap €1K)

## Decisione consigliata

### Opzione A — Split ottimale (massimo margine)
**Osservatorio → Silencio · PresidIA → Jakala · Achipont → indifferente**

- Margine atteso: **€70K** (vs €60-62K fornitore unico)
- Vantaggio: ognuno fa il progetto dove ha margine migliore
- Svantaggio: doppio coordinamento PMO HeyAI
- Praticabile? Sì se il bandwidth Carlo regge. Entrambi i fornitori sono gestibili in parallelo dato che ogni progetto è indipendente

### Opzione B — Fornitore unico Jakala (semplicità + relazione)
**Osservatorio + PresidIA + Achipont → Jakala**

- Margine atteso: **€60K**
- Vantaggio: relazione personale con Andrea forte, tempi più stretti, flessibilità requisiti, canale internalizzazione strategico
- Svantaggio: Osservatorio sotto-margine (€13K)
- È la scelta corretta a fornitore unico

### Opzione C — Fornitore unico Silencio
**Osservatorio + PresidIA + Achipont → Silencio**

- Margine atteso: **€62K**
- Vantaggio: hosting/manutenzione/token cedibili, Gabriele come canale internalizzazione pulito
- Svantaggio: PresidIA sotto-margine (€20K vs €28K Jakala), Danilo cerca semplificazioni in delivery
- Da scegliere solo se Carlo preferisce overhead operativo ridotto rispetto a margine

## Criteri qualitativi a confronto

| Criterio | Silencio | Jakala | Vincitore |
|---|---|---|---|
| Margine totale ponderato | 62K | 60K | Silencio (di poco) |
| Margine PresidIA singolo | 20K | 28K | **Jakala** |
| Margine Osservatorio singolo | 22K | 13K | **Silencio** |
| Tempi delivery | non confermati | più stretti | **Jakala** |
| Flessibilità requisiti | semplifica | gestisce | **Jakala** |
| Relazione personale | professionale | ottima | **Jakala** |
| Canale internalizzazione | Gabriele (pulito) | Andrea (strategico) | **Jakala** |
| Hosting/manutenzione | cedibile | non cedibile | trade-off |

## La mia raccomandazione

**Prima scelta (se gestibile): Split — Osservatorio Silencio, PresidIA Jakala, Achipont indifferente.**
Margine atteso €70K, ottimizzato per progetto.

**Seconda scelta (se vuoi fornitore unico): Jakala.**
Margine atteso €60K. Vinci su tempi, flessibilità, relazione, canale internalizzazione.

**Terza scelta: Silencio.**
Solo se l'overhead di token/hosting/manutenzione è realmente alto per HeyAI e l'opzione "cessione completa" vale più dell'8K di margine in più che fa Jakala su PresidIA.

## Cose da fare immediatamente

- [ ] **#p1** Chiedere ad Andrea il rebalance (Oss €28K + Achipont €22K + PresidIA €25K, totale invariato 75K) — vedi [[2026-05-06 - PREP Rebalance call Pasquali]]
- [ ] **#p1** Aspettare quotazione finale Silencio (entro 6/5 mattina)
- [ ] **#p1** Decisione finale: se Andrea accetta rebalance (o compromesso 30+25+20) → Jakala. Se Oss resta a €35K → Silencio.
- [ ] **#p1** **HoReCa → Federico/Simone** (decisione presa: margine assicurato a ~20K)
- [ ] **#p2** Comunicazione "ne riparliamo a settembre" al fornitore non scelto, mantenere relazione

## Walk-away rebalance Pasquali

- Target: Oss €28K
- Compromesso accettabile: Oss €30K (margine €12K, ancora sopra floor)
- **Walk-away: sopra €30K Osservatorio → vai con Silencio** (sui due progetti più probabili Silencio batte Jakala se non c'è rebalance: 40,7K vs 36,4K)

## Lessons per il PM (Carlo)

Ho impostato male l'analisi precedente. **Framework corretto per la prossima volta**:
1. Margine atteso × probabilità di chiusura per singolo progetto, prima di tutto
2. Considerare lo split come prima opzione, non come scenario di backup
3. Fattori operativi (HoReCa, hosting) come "tie-breaker", mai come criterio primario
4. Quando un fattore è "trade-off neutro" (es. hosting), non pesarlo come vantaggio

## Collegamenti

- [[2026-05-04 - Allineamento Preventivi Sviluppo AI Silencio]]
- [[2026-05-05 - Call Pasquali Jakala]]
- [[2026-05-04 - Carlo Performance — Call Silencio]]
- [[2026-05-05 - Carlo Performance — Call Pasquali]]
- [[Jakala]]
- [[PresidIa|PresidIA]] · [[Achipoint]] · [[_Futuritaly|Futuritaly]] · [[HoReCa]]
