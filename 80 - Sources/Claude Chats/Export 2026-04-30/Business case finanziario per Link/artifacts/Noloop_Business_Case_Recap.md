# Business Case — Link (Sistema Gestionale Noloop)
## v3 finale — Marzo 2026

---

## PARAMETRI

| Parametro | Valore |
|---|---|
| Commesse/anno | 260 |
| Dipendenti | ~150 |
| Fatturato | ~€55M |
| Ore lavorative/anno per FTE | 1.720 |

### Costi orari (fully loaded)

| Profilo | Costo orario |
|---|---|
| AD (Garbarino) | €95/h |
| Capi area (Zaghi, Lorena, Cichello, Ivano, Airaghi, Osmetti) | €70/h |
| PM / Operativi | €35/h |
| Amministrazione (Calajò, Remigi) | €37/h |

### Tempo settimanale Progress (dato Carlo)

| Figura | h/sett |
|---|---|
| Lorena | 3 |
| Zaghi | 3 |
| Cichello | 1 |
| Ivano | 1 |
| Airaghi | 1 |
| Osmetti | 2 |
| **Subtotale capi area** | **11** |
| 8 PM × 0,5h | 4 |
| **Totale** | **15** |

---

## AREA 1 — Apertura commessa automatizzata

Oggi il commerciale invia email a Calajò che valida il regime fiscale, assegna il codice e inserisce manualmente su BC. Con Link: dati pre-compilati da Minutes → notifica a Calajò → conferma con click → push API verso BC.

| Voce | Calcolo | Ore/anno | €/h | Risparmio |
|---|---|---|---|---|
| Commerciale: email eliminata | 260 × 8 min | 34,7h | €42 | €1.456 |
| Calajò: da email a review notifica | 260 × 8 min | 34,7h | €37 | €1.283 |
| **Totale Area 1** | | **69h** | | **€2.700** |

---

## AREA 2 — Eliminazione compilazione Progress

Oggi: 6 capi area compilano un Progress Excel (11h/sett collettive) + 8 PM forniscono dati (4h/sett). Con Link: il Progress si auto-alimenta dal PDP. Abbattimento 80% — resta 20% di supervisione su dashboard.

| Voce | Calcolo | Ore/anno | €/h | Risparmio |
|---|---|---|---|---|
| Capi area | 11h × 48 sett × 80% | 422,4h | €70 | €29.568 |
| PM | 8 × 0,5h × 48 × 80% | 153,6h | €35 | €5.376 |
| **Totale Area 2** | | **576h** | | **€34.900** |

---

## AREA 3 — Fatture perse e chiusure incomplete

Il 10% delle commesse (~26/anno) arriva a chiusura con fatture mancanti (canali SDI e non-SDI). Con Link: blocco automatico chiusura, cross-check BC, reminder proattivi Sally.

| Voce | Calcolo | Ore/anno | €/h | Risparmio |
|---|---|---|---|---|
| Operativo: rincorsa + riapertura | 26 × 2h | 52h | €35 | €1.820 |
| Admin: rielaborazione | 26 × 30 min | 13h | €37 | €481 |
| Pulizia fine anno fornitori orfani | 20h admin + 5h capi area | 25h | blend | €1.015 |
| **Totale Area 3** | | **90h** | | **€3.300** |

---

## AREA 4 — Fatturazione attiva integrata

Oggi: l'operativo compila Excel e invia email; Remigi reinserisce manualmente su BC (automatismo dichiarato ma inesistente). 650 submission/anno. Con Link: compilazione su PDP → push API a BC → Remigi conferma con click.

| Voce | Calcolo | Ore/anno | €/h | Risparmio |
|---|---|---|---|---|
| Operativo: email + Excel eliminati | 650 × 10 min | 108,3h | €35 | €3.792 |
| Remigi: inserimento manuale eliminato | 650 × 5 min | 54,2h | €37 | €2.004 |
| **Totale Area 4** | | **163h** | | **€5.800** |

---

## AREA 5 — Creazione e gestione budget (PDP)

Oggi: budget da zero su Excel + doppio inserimento su BC per cash flow, sia in fase preventivo che consuntivo. Con Link: template AI pre-popolati, push automatico BC, riconciliazione automatica.

| Voce | Calcolo | Ore/anno | €/h | Risparmio |
|---|---|---|---|---|
| Budget iniziale (template vs foglio bianco) | 260 × 15 min | 65,0h | €35 | €2.275 |
| Caricamento preventivo su BC | 260 × 10 min | 43,3h | €35 | €1.517 |
| Rilanci pre-gara | 260 × 1,5 × 15 min | 97,5h | €35 | €3.413 |
| Aggiornamento pre-chiusura | 260 × 15 min | 65,0h | €42 | €2.730 |
| Registrazione consuntivo su BC | 260 × 5 min | 21,7h | €35 | €758 |
| Riconciliazione chiusura automatica | 260 × 20 min | 86,7h | €35 | €3.033 |
| **Totale Area 5** | | **379h** | | **€13.700** |

---

## AREA 6 — Reporting direzione

Oggi: Garbarino 1–2h/sett su Progress + report trimestrali/annuali manuali. Con Link: dashboard real-time + Sally NLP per analisi in linguaggio naturale.

| Voce | Calcolo | Ore/anno | €/h | Risparmio |
|---|---|---|---|---|
| Review settimanale (da 1,5h a 0,5h) | 1h × 48 sett | 48h | €95 | €4.560 |
| Report trimestrali + annuale | 20h → 10h | 10h | €95 | €950 |
| **Totale Area 6** | | **58h** | | **€5.500** |

---

## RIEPILOGO

| # | Area | Ore/anno | €/anno |
|---|---|---|---|
| 1 | Apertura commessa | 69h | €2.700 |
| 2 | Compilazione Progress | 576h | €34.900 |
| 3 | Chiusure incomplete | 90h | €3.300 |
| 4 | Fatturazione attiva | 163h | €5.800 |
| 5 | Budget / PDP | 379h | €13.700 |
| 6 | Reporting direzione | 58h | €5.500 |
| **TOTALE** | | **1.335h** | **€65.900** |

---

## SCENARI

| Scenario | Adozione | Risparmio/anno |
|---|---|---|
| Conservativo | 70% | €46.100 |
| **Realistico** | **85%** | **€56.000** |
| Ottimistico | 100% | €65.900 |

---

## ANALISI FINANZIARIA (scenario realistico)

| Parametro | Valore |
|---|---|
| Investimento | €85.000 |
| Ramp-up Anno 1 | 90% |
| Risparmio a regime | €56.000/anno |

| Anno | Beneficio | Cumulato |
|---|---|---|
| 0 | -€85.000 | -€85.000 |
| 1 (ramp-up 90%) | +€50.400 | -€34.600 |
| 2 (regime) | +€56.000 | +€21.400 |

| KPI | Valore |
|---|---|
| **Payback Period** | **~19 mesi** |
| **ROI a 2 anni** | **+25%** |
| Rendimento annuo a regime | 66% |
| Valore netto a fine Anno 2 | +€21.400 |

---

## COMPOSIZIONE PER PROFILO

| Profilo | Ore/anno | Valore | % |
|---|---|---|---|
| AD (Garbarino) | 58h | €5.510 | 8% |
| Capi area | ~492h | €33.400 | 51% |
| PM / Operativi | ~629h | €22.000 | 33% |
| Amministrazione | ~156h | €5.006 | 8% |

---

## FTE

| Ore risparmiate | FTE equivalenti |
|---|---|
| 1.335h/anno | 0,78 FTE |

---

## ASSUNZIONI CHIAVE

- 260 commesse/anno, 650 submission fatturazione attiva, 26 COM con fatture mancanti (10%)
- Costi orari fully loaded su benchmark agenzia eventi Milano
- Abbattimento Progress 80% (resta 20% supervisione dashboard)
- Adozione realistico 85%, ramp-up Anno 1 al 90%
- Costi ricorrenti (hosting, manutenzione) non inclusi
- Non considerato periodo transizione (primi 3–6 mesi)