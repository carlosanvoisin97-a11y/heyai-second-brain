# Business Case — AI Venue Finder Evolution
## Analisi del Risparmio Operativo e dell'Impatto Competitivo

---

## PARAMETRI DI BASE

### Volume operativo

| Parametro | Valore | Fonte |
|---|---|---|
| Presentazioni logistiche/anno | ~45 (1 per gara) | Dato cliente |
| Tempo attuale per presentazione completa (con dati già alla mano) | 4-5 ore (media 4,5h) | Stima Carlo validata |
| Persone nel team programmazione che producono presentazioni | Non rilevante — il calcolo si basa sul volume di presentazioni | — |
| Strumento attuale | Standalone, fuori dall'ecosistema, credenziali limitate | Lorena: "non so chi sta usando" |
| Costo integrazione ecosistema | ~€2.000 | Stima Carlo |
| Fonti attuali | Cvent, Meeting & Congressi | Dato attuale |

### Composizione delle 4-5 ore attuali (stima della ripartizione)

| Fase | Tempo stimato | Note |
|---|---|---|
| Ricerca location su più siti | 1-1,5h | Navigare Cvent, M&C, siti ufficiali, confrontare opzioni |
| Selezione e download foto | 30-45 min | Cercare foto decenti, scaricare, rinominare |
| Composizione presentazione (copy + layout + foto) | 1,5-2h | Scrivere descrizioni, incollare foto, formattare PPT |
| Revisione e aggiustamenti | 30-45 min | Controllo qualità, allineamenti, dettagli |
| **Totale** | **4-5h** | Con tutti i dati del brief già alla mano |

### Costo orario

Le presentazioni logistiche vengono prodotte dal team programmazione (Lorena e collaboratori) — profilo Senior Manager / Operativo senior.

| Profilo | RAL stimata | Costo azienda (×1,40) | Costo orario (/1.720h) |
|---|---|---|---|
| Team programmazione (media pesata) | €40.000 | ~€56.000 | **€33/h** |

---

## AREA 1: ACCELERAZIONE PRODUZIONE PRESENTAZIONI

### Situazione attuale
Ogni gara richiede una presentazione logistica completa: proposte hotel, attività, ristoranti, trasporti, con foto, descrizioni e pricing. Oggi il processo è interamente manuale anche partendo dai dati del brief: ricerca su più siti, selezione foto, composizione PPT. 4-5 ore per presentazione.

### Con Venue Finder Evolution
Sally/Venue Finder fa la ricerca su fonti multiple (Cvent, M&C, Google, siti ufficiali), propone location con foto già selezionate. L'utente sceglie le opzioni preferite. Click → presentazione grafica completa generata automaticamente su Figma/Canva con copy, layout e foto. L'operatore rivede e aggiusta.

### Calcolo risparmio

| Fase | Oggi | Con VF Evolution | Risparmio |
|---|---|---|---|
| Ricerca location | 1,25h | 10 min (review proposte AI) | 1,1h |
| Selezione foto | 37 min | 5 min (selezione da proposte) | 32 min |
| Composizione presentazione | 1,75h | 0 min (generazione automatica) | 1,75h |
| Revisione e aggiustamenti | 37 min | 25 min (review output generato) | 12 min |
| **Totale per presentazione** | **4,5h** | **~40 min** | **~3h 50min** |

| Voce | Calcolo | Ore/anno | Costo/h | Risparmio |
|---|---|---|---|---|
| 45 presentazioni × 3,8h risparmiate | 45 × 3,8h | 171h | €33/h | €5.643 |

**Totale Area 1: 171h → €5.643/anno**

---

## AREA 2: ELIMINAZIONE PRESENTAZIONI RIFATTE DA ZERO

### Situazione attuale
Lorena: "Le cartelline sono salvate sul server, divise per anno e per nome cliente. Devo sapere prima chi era il cliente, in che anno l'abbiamo proposta. Ho fatto prima a farmela da sola ex novo."

Le presentazioni passate sono inaccessibili in pratica. Quando una location viene riproposta per un'altra gara (es. Forte Village, W Barcelona, hotel ricorrenti), la presentazione viene rifatta da zero anziché recuperata e adattata.

### Con Venue Finder Evolution
Sally ha memoria storica: "Cercami la presentazione del Forte Village" → recupera l'ultima versione con contesto (quando, per chi, com'è andato). L'operatore adatta anziché ricostruire.

### Calcolo risparmio

| Voce | Calcolo | Note |
|---|---|---|
| Presentazioni/anno | 45 | — |
| % con location già proposte in passato ¹ | ~35% | 16 presentazioni/anno |
| Tempo rifacimento da zero (oggi) | 4,5h | Come ogni altra presentazione |
| Tempo adattamento da storico (con Sally) | 1h | Recupero + modifica dati aggiornati |
| Risparmio per presentazione riciclata | 3,5h | — |

¹ Noloop lavora con un portfolio ricorrente di location (hotel, venue, destinazioni). Su 45 gare, è ragionevole che almeno 1 su 3 coinvolga location già proposte in passato. Alcune destinazioni (Roma, Milano, Barcellona, Forte Village) tornano frequentemente.

| Voce | Calcolo | Ore/anno | Costo/h | Risparmio |
|---|---|---|---|---|
| 16 presentazioni recuperate × 3,5h risparmiate | 16 × 3,5h | 56h | €33/h | €1.848 |

**Totale Area 2: 56h → €1.848/anno**

---

## AREA 3: RILANCI E VARIANTI

### Situazione attuale
Lorena ha spiegato che prima della vittoria della gara ci sono rilanci: il cliente chiede "cambiami la destinazione", "proponimi un terzo hotel", "modifica la cena". Ogni rilancio richiede di rifare parzialmente la presentazione logistica.

### Con Venue Finder Evolution
Ogni variante è una nuova query a Sally: "Sostituisci l'hotel 2 con un'opzione sul mare a Madrid" → nuova ricerca + nuova sezione di presentazione generata in pochi minuti.

### Calcolo risparmio

| Voce | Calcolo | Note |
|---|---|---|
| Rilanci medi per gara | 1,5 | Dato Lorena |
| Rilanci totali/anno | 45 × 1,5 = 67-68 | ~68 |
| Tempo per rilancio oggi ² | 1,5-2h (media 1,75h) | Ricerca nuova opzione + aggiornamento presentazione |
| Tempo con VF Evolution | 20 min | Nuova query + review |
| Risparmio per rilancio | ~1,4h | — |

² Il rilancio non richiede di rifare tutta la presentazione, ma una sezione significativa (nuova location, nuova attività, nuovo pricing).

| Voce | Calcolo | Ore/anno | Costo/h | Risparmio |
|---|---|---|---|---|
| 68 rilanci × 1,4h risparmiate | 68 × 1,4h | 95h | €33/h | €3.143 |

**Totale Area 3: 95h → €3.143/anno**

---

## AREA 4: ACCESSIBILITÀ DELLO STRUMENTO

### Situazione attuale
Lorena: "Posso io avere l'accesso? Non so chi sta usando." Lo strumento è standalone con una credenziale condivisa. Di fatto lo usa solo chi sa che esiste e ha chiesto le credenziali ad Antonella.

### Con Venue Finder Evolution
Integrato nell'ecosistema come skill di Sally → accessibile a chiunque abbia accesso al portale Noloop. Nessuna credenziale separata. Il team programmazione intero può usarlo.

### Calcolo risparmio
Questo non è un risparmio diretto in ore, ma un **moltiplicatore di adozione**: oggi lo strumento è sottoutilizzato. Portandolo nell'ecosistema, i risparmi delle Aree 1-3 si realizzano pienamente perché tutti lo usano, non solo chi ha le credenziali.

Senza integrazione → tasso di adozione stimato: 30-40% (solo chi lo conosce)
Con integrazione → tasso di adozione stimato: 85-95% (è dentro il portale)

Questo è già riflesso negli scenari di adozione sotto.

---

## AREA 5: PRESENTAZIONI PIÙ ENGAGING (Mini-video)

### Situazione attuale
Lorena: "Le foto e la descrizione tante volte non è che se li guardano veramente."
Le presentazioni logistiche sono PDF/PPT statici con foto e testo. Il cliente spesso non li legge approfonditamente.

### Con Venue Finder Evolution
Generazione di mini-video (30-60 sec) con showreel foto e voiceover che descrive plus e minus della location. Più engaging, maggiore attenzione del cliente.

### Calcolo impatto
Questo è un beneficio qualitativo che impatta sulla **win rate** più che sul risparmio ore:

| Voce | Valore |
|---|---|
| Presentazioni con video vs senza | Maggiore engagement del decisore cliente |
| Impatto sulla win rate | Difficile da quantificare — contribuisce all'incremento stimato nel business case Pitch (+5-8 punti percentuali) |
| Differenziazione competitiva | Le altre agenzie non lo fanno |

⚠️ Nota: la generazione video richiede supervisione creativa (Ivano). Questo potrebbe essere un add-on separato in fase di quotazione.

---

## RIEPILOGO RISPARMIO OPERATIVO

| # | Area di Risparmio | Ore/anno | Risparmio/anno |
|---|---|---|---|
| 1 | Accelerazione produzione presentazioni | 171h | €5.643 |
| 2 | Eliminazione presentazioni rifatte da zero | 56h | €1.848 |
| 3 | Rilanci e varianti | 95h | €3.143 |
| 4 | Accessibilità (moltiplicatore — riflesso nell'adozione) | — | — |
| 5 | Presentazioni engaging (qualitativo — win rate) | — | — |
| **TOTALE** | | **322h** | **€10.634** |

---

## SCENARI DI ADOZIONE

| Scenario | Tasso di adozione | Risparmio annuale |
|---|---|---|
| **Senza integrazione ecosistema** ³ | 35% | **€3.700** |
| **Conservativo** (integrato) | 75% | **€8.000** |
| **Realistico** (integrato) | 90% | **€9.600** |
| **Ottimistico** (integrato) | 100% | **€10.600** |

³ Se lo strumento resta standalone come oggi, l'adozione rimane bassa. L'integrazione nell'ecosistema è il prerequisito per realizzare il valore.

---

## ANALISI DELL'INVESTIMENTO

| Voce | Valore |
|---|---|
| Costo integrazione ecosistema (una tantum) | ~€2.000 |
| Risparmio anno 1 (scenario realistico) | €9.600 |
| **Payback** | **~2,5 mesi** |
| ROI anno 1 | **380%** |

Questo è uno degli investimenti con il payback più rapido dell'intero ecosistema.

---

## IMPATTO COMPETITIVO

| Dimensione | Valore |
|---|---|
| Tempo per presentazione logistica | Da 4-5 ore a ~40 minuti (riduzione ~85%) |
| Capacità di risposta ai rilanci | Da 1,5-2 ore a 20 minuti per variante |
| Storico aziendale accessibile | Da "rifare da zero" a "recupera e adatta" |
| Qualità output | Presentazione grafica professionale vs PPT assemblato a mano |
| Differenziazione | Mini-video con voiceover — nessun competitor lo fa |
| Impatto sulla win rate | Contribuisce all'incremento stimato nel business case Pitch |

---

## SINTESI PER LA SLIDE

| Dimensione | Valore |
|---|---|
| **Risparmio operativo (scenario realistico)** | **€9.600/anno** |
| **Ore liberate** | **~322h/anno** |
| **Tempo per presentazione** | **Da 4-5h a ~40 min (-85%)** |
| **Payback sull'investimento** | **~2,5 mesi** |
| **ROI anno 1** | **380%** |
| **Prerequisito** | Integrazione nell'ecosistema (~€2.000) |

---

## NOTE METODOLOGICHE

- Il calcolo si basa su 45 presentazioni/anno (1 per gara), coerente con il dato del reparto creativo.
- Le 4-5 ore attuali sono "con tutti i dati già alla mano" — il tempo effettivo potrebbe essere superiore quando il brief è incompleto o le informazioni vanno rincorse.
- La stima del 35% di location ricorrenti è conservativa: per un'agenzia che opera da anni sulle stesse destinazioni corporate, potrebbe essere più alta.
- I rilanci (1,5 per gara) sono basati sul dato Lorena e potrebbero variare significativamente per gare complesse.
- Il costo orario di €33/h è una media pesata del team programmazione. Se le presentazioni vengono fatte anche da senior manager (Lorena, €55/h), il risparmio sarebbe proporzionalmente più alto.
- Il mini-video è conteggiato come beneficio qualitativo e non quantificato in ore — richiede un effort aggiuntivo (seppur ridotto) per la supervisione creativa.
