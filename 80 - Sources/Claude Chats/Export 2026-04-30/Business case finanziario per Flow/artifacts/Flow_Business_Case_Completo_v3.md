# BUSINESS CASE — FLOW (Task Management System)
## Noloop Wave 2 — v3 Doppio Binario

---

# Executive Summary

Flow centralizza la gestione di ~20.000 task operativi/anno (260 commesse) oggi dispersi su WhatsApp, email, telefonate e carta. Impatta 46 risorse su 5 reparti.

| Metrica | Valore |
|---|---|
| Risparmio annuo a regime | **€114.943** |
| Ore liberate | **3.351h/anno** |
| FTE equivalenti | **1,95** |
| Investimento | **€75.000** |
| ROI a 2 anni | **153%** |
| Payback Period | **~10,4 mesi** |

---

# Perimetro utenti: 46 persone

| Binario | Reparto | Persone | Costo orario |
|---|---|---|---|
| **1 — Coordinatori** | PM (Stefani) | 9 | €35/h |
| | Pianificazione (Osmetti) | 5 | €35/h |
| **2 — Operativi** | Operativi/Segreteria (Cavecchi) | 13 | €35/h |
| | Producer (Cichello) | 6 | €35/h |
| | Comunicazione (Romano) | 9 | €31/h |
| | Biglietteria (Airaghi) | 4 | €35/h |

Director e Commerciali esclusi (conteggiati in Link). Costo blend Binario 2: €33,9/h.

---

# Modello Doppio Binario

## Benchmark applicati

| | Coordinatori (14) | Operativi (32) |
|---|---|---|
| Benchmark Asana 2023 | 6,3h/sett recuperabili | 5,4h/sett recuperabili |
| Tasso di realizzo | **30%** | **25%** |
| Recupero netto | **1,9h/sett** (~23 min/giorno) | **1,35h/sett** (~16 min/giorno) |

Tassi nella fascia bassa dei benchmark (McKinsey: 1,8h/giorno; Insightful: 24+ min/giorno). Giustificazione: azienda senza esperienza pregressa con tool digitali, resistenza al cambiamento, WhatsApp residuo.

---

# Dettaglio risparmio per area

| # | Area | Ore senza AI | Ore con AI | Delta | Risparmio |
|---|---|---|---|---|---|
| 1 | Ricezione task da Minutes | 200h | 33h | -83% | €5.845 |
| 2 | Coordinamento task operativo | 9.504h | 7.128h | -25% | €83.160 |
| 3 | Coord. comunicazione + biglietterie | 2.304h | 1.728h | -25% | €18.432 |
| 4 | Scadenze contrattuali e reminder | 227h | 49h | -78% | €6.230 |
| 5 | Documentazione sopralluoghi mobile | 36h | 14h | -61% | €770 |
| | **TOTALE** | | | | **€114.437** |

*Nota: il totale doppio binario (€114.943) e il totale per area (€114.437) convergono — differenza di €506 per arrotondamenti nella diversa metodologia di calcolo.*

## Dettaglio aree

**Area 1 — Ricezione task da Minutes (€5.845)**
400 meeting/anno con task rilevanti. Oggi: 30 min di trascrizione + distribuzione manuale post-meeting. Con Flow: Minutes estrae task automaticamente, PM rivede in 5 min. Risparmio: 25 min/meeting × 400 = 167h.

**Area 2 — Coordinamento task operativo (€83.160)**
Cuore del business case. 33 utenti ad alta intensità × 6h/sett di coordinamento (assegnazione, follow-up, ricerca stato). Riduzione 25% = 1,5h/sett per persona. Benchmark: fascia bassa del range 25-35% per adoption di tool strutturati in contesti partiti da zero.

**Area 3 — Comunicazione + Biglietterie (€18.432)**
Comunicazione (9 persone): 4h/sett coordinamento, -25%. Biglietteria (4 persone): 3h/sett, -25%. Brief via email, approvazioni su WhatsApp, checklist non tracciate → task strutturati con status e procedure allegate.

**Area 4 — Scadenze contrattuali (€6.230)**
~650 contratti/anno. Oggi tracciate a memoria o su fogli volanti. Upload contratti → AI estrae scadenze → reminder automatici. Riduzione 70% tempo tracciamento + eliminazione costi correttivi per 32 scadenze dimenticate/anno (5% di 650).

**Area 5 — Sopralluoghi mobile (€770)**
80 sopralluoghi/anno. Da carta e penna + ricostruzione post-rientro (45 min) a input vocale + foto da mobile con formalizzazione AI. Riduzione 60%. Valore principalmente qualitativo.

---

# Riepilogo Doppio Binario

| Binario | Persone | h/anno | Risparmio | % totale |
|---|---|---|---|---|
| 1 — Coordinatori | 14 | 1.277h | €44.695 | 39% |
| 2 — Operativi | 32 | 2.074h | €70.248 | 61% |
| **TOTALE** | **46** | **3.351h** | **€114.943** | **100%** |

---

# Curva di adozione

| Anno | Tasso | Risparmio |
|---|---|---|
| Anno 1 | 75% | **€86.207** |
| Anno 2 | 90% | **€103.449** |
| A regime | 100% | €114.943 |

---

# ROI e Payback

| Voce | Valore |
|---|---|
| Investimento | €75.000 |
| Benefici Anno 1 | €86.207 |
| Benefici Anno 2 | €103.449 |
| **Benefici cumulati 2 anni** | **€189.656** |
| **ROI a 2 anni** | **(€189.656 − €75.000) / €75.000 = 153%** |
| **Payback** | **€75.000 / €7.184 mese = ~10,4 mesi** |

---

# Stress test

| Scenario | Realizzo | Risparmio regime | ROI 2 anni | Payback |
|---|---|---|---|---|
| Ultra-conservativo | 20% / 15% | ~€72.000 | 79% | ~14 mesi |
| **Conservativo (base)** | **30% / 25%** | **€114.943** | **153%** | **~10,4 mesi** |
| Moderato | 40% / 35% | ~€165.000 | 253% | ~7 mesi |

Anche dimezzando i tassi, ROI positivo e payback entro 14 mesi.

---

# Assunzioni complete

| # | Parametro | Valore | Fonte |
|---|---|---|---|
| 1 | Commesse/anno | 260 | Dato cliente |
| 2 | Task per commessa | ~75 medi (~20.000/anno) | Interviste operative |
| 3 | Utenti perimetro | 46 (14 coord. + 32 oper.) | Organigramma |
| 4 | Ore/anno per FTE | 1.720 (220gg × 8h) | Standard italiano |
| 5 | Settimane lavorative | 48 | 52 − 4 ferie |
| 6 | Costo azienda | RAL × 1,40 | INPS + TFR + INAIL + benefit |
| 7 | Benchmark coordinatori | 6,3h/sett | Asana 2023 |
| 8 | Benchmark operativi | 5,4h/sett | Asana 2023 |
| 9 | Realizzo coordinatori | 30% | Prudenziale |
| 10 | Realizzo operativi | 25% | Prudenziale |
| 11 | Adozione Anno 1 | 75% | Curva standard no-tool |
| 12 | Adozione Anno 2 | 90% | Stabilizzazione |

---

# Sovrapposizioni con altri moduli

| Flusso | Conteggiato in |
|---|---|
| Coordinamento task (chi fa cosa, follow-up) | **Flow** |
| Trascrizione task post-meeting → push su Flow | **Flow** |
| Compilazione Progress / stato economico commessa | **Link** |
| Supervisione Director su budget/marginalità | **Link** |
| Aggiornamento vocale via Sally | **Sally** |
| Visibilità commesse per Commerciali | **Link** |

---

# Valore qualitativo (non quantificato)

1. **Audit trail completo** — Storico di ogni task: chi, cosa, quando
2. **Riduzione stress** — Da modalità reattiva (rincorrere su WhatsApp) a proattiva (consultare dashboard)
3. **Onboarding accelerato** — Processi strutturati in Flow, non da ricostruire chiedendo ai colleghi
4. **Riduzione errori** — Task non assegnati, scadenze saltate, comunicazioni perse
5. **Procedure embedded** — Procedure aziendali allegate ai task tipizzati
6. **Effetto piattaforma** — Flow è il tessuto connettivo tra Minutes, Sally e Link

---

# Rischi

| Rischio | Probabilità | Mitigazione |
|---|---|---|
| Bassa adozione iniziale | Alta | Rollout per reparti: Pianificazione → PM → Operativi |
| Ritorno a WhatsApp | Alta | Notifiche push, policy aziendale, transizione graduale |
| Sovraccarico notifiche | Media | Configurazione per ruolo, solo @mention dirette |
| Complessità percepita | Media | UX mobile semplificata, template pre-configurati |

---

# Take Away

**Flow si ripaga in meno di 1 anno.** ROI +153%, payback ~10 mesi. Dal dodicesimo mese, ogni euro è valore netto per Noloop.

**Da 30 messaggi WhatsApp a un click.** Oggi un PM ricostruisce lo stato di ogni commessa inseguendo risposte su 4 canali diversi. Con Flow, lo stato è visibile in tempo reale: chi deve fare cosa, entro quando, a che punto è. Il coordinamento smette di essere un lavoro e diventa un sottoprodotto automatico dell'esecuzione.

**Zero scadenze dimenticate su 650 contratti/anno.** Le penali, i rinnovi automatici indesiderati, le opzioni non esercitate: ogni scadenza dimenticata ha un costo reale. Flow trasforma il tracciamento da memoria individuale a sistema con reminder automatici, eliminando un rischio operativo oggi completamente scoperto.