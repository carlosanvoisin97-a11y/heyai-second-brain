# Business Case — AI Venue Finder Evolution
## Analisi del Risparmio Operativo

---

## PARAMETRI DI BASE

| Parametro | Valore | Fonte |
|---|---|---|
| Presentazioni logistiche/anno | 200 | Dato cliente (team programmazione) |
| Rilanci medi per gara | 1,5 | Dato Lorena |
| Rilanci totali/anno | 300 | 200 × 1,5 |
| Tempo attuale per presentazione | 5 ore | Dato operativo validato |
| Tempo attuale per rilancio | 1h 45min | Dato operativo |
| Costo orario team programmazione | €33/h | RAL €40K × 1,40 / 1.720h |

---

## AREA 1: PRODUZIONE PRESENTAZIONI LOGISTICHE

### Situazione attuale (AS-IS)
Ogni gara richiede una presentazione logistica completa costruita interamente a mano: ricerca location su più fonti (Cvent, Meeting & Congressi, Google, siti ufficiali), selezione e download foto, composizione PowerPoint con copy, layout e pricing, revisione finale. Tempo: 5 ore per presentazione.

Lo storico aziendale è di fatto inaccessibile: le presentazioni passate sono archiviate per anno e cliente, rendendo il recupero più lento della ricostruzione da zero, anche per location già proposte in precedenza.

### Con Venue Finder Evolution (TO-BE)
Ricerca AI su fonti multiple con proposte di location e foto pre-selezionate. Generazione automatica della presentazione grafica completa su Figma/Canva. L'operatore rivede e aggiusta. Tempo: 1 ora per presentazione.

### Calcolo risparmio

| Voce | Calcolo | Risultato |
|---|---|---|
| Risparmio per presentazione | 5h − 1h | 4h |
| Presentazioni/anno | 200 | — |
| Ore risparmiate/anno | 200 × 4h | **800h** |
| Valore economico | 800h × €33/h | **€26.400** |

**Nota metodologica:** l'area "eliminazione presentazioni rifatte da zero" (memoria storica) è stata incorporata in Area 1 come feature abilitante e non conteggiata separatamente, per evitare un doppio conteggio identificato in fase di analisi. Entrambe le aree insistevano sulla stessa baseline di 5 ore per presentazione.

---

## AREA 2: RILANCI E VARIANTI

### Situazione attuale (AS-IS)
Prima della vittoria della gara ci sono rilanci: il cliente chiede cambi di destinazione, hotel aggiuntivi, modifiche alla cena. Ogni rilancio richiede ricerca di nuove opzioni e aggiornamento parziale della presentazione. Tempo: 1h 45min per rilancio.

### Con Venue Finder Evolution (TO-BE)
Ogni variante è una nuova query all'agente AI: nuova ricerca + nuova sezione di presentazione generata automaticamente. Tempo: 20 minuti per rilancio.

### Calcolo risparmio

| Voce | Calcolo | Risultato |
|---|---|---|
| Risparmio per rilancio | 1h 45min − 20min | ~1h 25min (1,42h) |
| Rilanci/anno | 300 | — |
| Ore risparmiate/anno | 300 × 1,42h | **426h** |
| Valore economico | 426h × €33/h | **€14.058** |

---

## RIEPILOGO RISPARMIO OPERATIVO

| Area | Ore/anno | Valore/anno |
|---|---|---|
| Produzione presentazioni | 800h | €26.400 |
| Rilanci e varianti | 426h | €14.058 |
| **TOTALE LORDO** | **1.226h** | **€40.458** |
| **FTE equivalente** | **0,71 FTE** | (su 1.720h/anno) |

---

## SCENARI DI ADOZIONE

| Scenario | Tasso di adozione | Risparmio annuale |
|---|---|---|
| Conservativo (integrato) | 75% | ~€30.300 |
| **Realistico (integrato)** | **90%** | **~€36.400** |
| Ottimistico (integrato) | 100% | ~€40.400 |

Il tasso del 90% riflette l'integrazione della soluzione nell'ecosistema Sally, accessibile a tutto il team senza credenziali separate (vs. il 30-40% dello strumento standalone attuale).

---

## ANALISI DELL'INVESTIMENTO (scenario realistico — 90%)

| Voce | Valore |
|---|---|
| Investimento | €10.000 |
| Risparmio annuale | €36.400 |
| Risparmio a 2 anni | €72.800 |
| **Payback period** | **~3 mesi** |
| **ROI a 2 anni** | **628%** |

---

## BENEFICIO QUALITATIVO (non quantificato)

Generazione di mini-video (30-60 sec) con showreel foto e voiceover per le proposte di location. Maggiore engagement del decisore cliente, differenziazione competitiva. Richiede supervisione creativa (Ivano). Non conteggiato nel risparmio ore.

---

## NOTE METODOLOGICHE

- Tutti i volumi (200 presentazioni, 1,5 rilanci/gara) sono dati forniti dal team programmazione Noloop
- Il tempo di 5h/presentazione è validato internamente dal team operativo
- Il costo orario di €33/h è calcolato su RAL €40K con moltiplicatore 1,40 per oneri aziendali, su 1.720 ore lavorative annue — valore conservativo (se coinvolta Lorena a profilo senior manager il costo sarebbe più alto)
- È stato identificato e corretto un doppio conteggio tra accelerazione presentazioni e recupero storico aziendale: entrambi insistevano sulla stessa baseline di ore
- Il tasso di adozione del 90% è una stima prudenziale basata sull'integrazione nell'ecosistema digitale già in uso
- I tempi target con la piattaforma (1h/presentazione, 20min/rilancio) sono da validare con il team tecnico sulle capabilities effettive