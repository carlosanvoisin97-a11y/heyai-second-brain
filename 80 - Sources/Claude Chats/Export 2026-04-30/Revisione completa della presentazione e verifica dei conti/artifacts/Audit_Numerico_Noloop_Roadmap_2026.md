# Audit Numerico Completo — Noloop Roadmap 2026

**Data:** 10 marzo 2026  
**Documento verificato:** Noloop_Roadmap_2026_Def_2.pptx (25 slide)

---

## Metodologia

Ho ricostruito da zero ogni calcolo presente nella presentazione: percentuali di riduzione nelle tabelle ore, risparmi in euro, ROI, payback, FTE, iperammortamento, somme dei totali, e coerenza tra le slide di dettaglio (11-14, 24) e le slide dei business case in appendice (20-25). I calcoli sono basati esclusivamente sui dati e le assunzioni dichiarate nelle slide stesse.

**Scoperta chiave sulla formula ROI/Payback:** tutti i ROI e payback sono calcolati sul **prezzo a listino** (non bundle), applicando il ramp-up Anno 1 dove dichiarato. Questa regola si verifica perfettamente per Flow, Link e Venue Finder. Sally e LeadMe presentano deviazioni documentate sotto.

---

## 🔴 ERRORI DA CORREGGERE PRIMA DELL'INVIO

### 1. Slide 11 (Flow) — ROI incoerente: 192% nel KPI vs 175% nel testo

**Il box KPI dice "192% ROI a due anni".** Il testo sotto dice "ROI +175%, payback ~9,5 mesi".

**Verifica:** Con risparmio €125.174/anno, ramp-up 75%, investimento a listino €75.000:
- Anno 1: €125.174 × 75% = €93.880
- Anno 2: €125.174
- ROI = (€93.880 + €125.174 − €75.000) / €75.000 = **192%** ✅

Il KPI 192% è corretto. **Il "175%" nel testo è errato** — probabilmente un residuo di un draft precedente con parametri diversi. Nessuna combinazione ragionevole di ramp-up e base di investimento produce 175%.

**Azione:** Sostituire "ROI +175%" con "ROI +192%" nel testo della slide 11.

---

### 2. Slide 13 (Sally) — ROI incoerente: +52% nel KPI vs +45% nel testo

**Il box KPI dice "+52% ROI a due anni".** Il testo sotto dice "ROI +45% a 2 anni. Dal diciannovesimo mese, ogni euro è valore netto."

**Verifica:** Con risparmio €77.486/anno, ramp-up 67%, investimento a listino €85.000:
- Anno 1: €77.486 × 67% = €51.916
- Anno 2: €77.486
- ROI = (€51.916 + €77.486 − €85.000) / €85.000 = **52%** ✅

Il KPI 52% è corretto. Il "+45%" non corrisponde a nessun calcolo ragionevole — l'unico scenario vicino (46%) richiederebbe un ramp-up del 60% anziché 67%, probabilmente un valore da un draft precedente.

**Azione:** Sostituire "ROI +45%" con "ROI +52%" nel testo della slide 13.

---

### 3. Slide 2 (Executive Summary) — "€353k" include LeadMe che è Fase 2

Il claim recita: *"Scenario realistico: oltre €353k/anno di risparmio, ~10.400 ore liberate."*

**Verifica della somma:**

| Soluzione | Risparmio | Ore |
|-----------|-----------|-----|
| Venue Finder | €36.400 | 1.225h |
| Flow | €125.174 | 3.108h |
| Link | €60.000 | 1.487h |
| Sally | €77.486 | 2.329h |
| **LeadMe** | **€54.500** | **2.239h** |
| **TOTALE** | **€353.560** | **10.388h** |

I numeri tornano, ma **solo includendo LeadMe (€54.500)**, che nella presentazione è classificato come "Priorità 2" e **non compare nella tabella riepilogativa della slide 17**. Senza LeadMe il totale è €299.060 — ben lontano da "oltre €353k".

Questo crea un rischio: Laura e Paolo vedranno "€353K" nell'Executive Summary, poi nella slide 17 troveranno un totale di €299.060. La discrepanza è spiegabile, ma potrebbe generare una domanda scomoda.

**Azione (opzioni):**
- **A)** Aggiungere una nota come "incluse tutte le soluzioni proposte, anche quelle in Fase 2"
- **B)** Sostituire con "oltre €299k" riferendosi solo al perimetro Priorità 1 + Flow
- **C)** Differenziare: "oltre €299k nel perimetro immediato, €353k con l'intero ecosistema"

---

### 4. Slide 2 — "6 business case" ma ne esistono 5

Il testo dice: *"6 business case con stime conservative basate su volumi, ore e costi reali."*

In appendice ci sono **5 business case quantificati**: Venue Finder (sl. 20), Flow (sl. 21), Link (sl. 22), Sally (sl. 23), LeadMe (sl. 25). OnSite, Crowd e Minutes non hanno business case con risparmi stimati in euro.

**Azione:** Cambiare "6" in "5".

---

## 🟡 INCOERENZE MINORI (consigliato correggere)

### 5. Slide 5 — Iperammortamento evoluzioni: €13.256 vs €13.824

Il calcolo standard (€32.000 × 180% × 24%) produce €13.824, non €13.256 come dichiarato. Di conseguenza il "costo effettivo netto" dovrebbe essere €18.176 anziché €18.744. La differenza è di €568 — piccola ma non nulla.

**Nota:** In tutte le altre slide (11, 12, 13, 14, 17) la formula 180% × 24% produce risultati perfettamente coerenti con i valori dichiarati. Solo la slide 5 ha questa leggera discrepanza, probabilmente ereditata da un calcolo precedente con parametri leggermente diversi.

**Azione:** Aggiornare a €13.824 e €18.176, oppure lasciare com'è se il valore proviene dal consulente fiscale.

---

### 6. Slide 17 — Sconto bundle: sottotitolo dice "€24K" ma il callout dice "€16.500"

Il sottotitolo della slide recita: *"Acquistando il pacchetto completo in bundle: sconto complessivo di €24K sull'investimento a listino."*

Ma il box di callout sotto la tabella dice: *"-€16.500 di risparmio sull'acquisto di 3+ soluzioni in bundle."*

- €24K = sconto **CON Flow** (€307K − €283K = €24.000) ✅
- €16.500 = sconto **SENZA Flow** (€232K − €215.500 = €16.500) ✅

Entrambi i numeri sono corretti, ma si riferiscono a **perimetri diversi** nella stessa slide. Rischio di confusione.

**Azione:** Allineare il callout al sottotitolo (o viceversa), esplicitando il perimetro.

---

### 7. Sally — ROI e Payback calcolati su basi diverse

Il ROI (+52%) è calcolato su **listino** €85.000, coerente con il pattern di tutte le altre soluzioni. Ma il payback (18 mesi) torna solo calcolandolo su **bundle** €76.500 con ramp-up 67%:
- Bundle: €76.500 / (€51.916/12) = 17,7 mesi ≈ 18 ✅
- Listino: €85.000 / (€51.916/12) = 19,6 mesi ≈ 20 ❌

Per Flow e Link invece sia ROI che payback tornano entrambi su listino. L'incoerenza è piccola e non necessariamente un problema per il destinatario, ma è bene saperlo nel caso Paolo faccia domande.

---

### 8. LeadMe — ROI calcolato SENZA ramp-up (diverso da tutti gli altri)

Il ROI 142% di LeadMe torna solo con risparmio full (no ramp-up) su listino:
- (€54.500 × 2 − €45.000) / €45.000 = 142% ✅

Ma per Flow (75%), Link (90%) e Sally (67%) il ramp-up Anno 1 è incluso nel calcolo del ROI. Per LeadMe no. Se si applicasse un ramp-up coerente (es. 85% come il tasso di adozione citato), il ROI scenderebbe a ~124%.

La slide 24 ha una nota che dice "i KPI finanziari sono calcolati esclusivamente sul risparmio operativo diretto" — ma non menziona l'assenza del ramp-up. Non è grave, ma è un'incoerenza metodologica da conoscere.

---

## ✅ CONTI CHE TORNANO — VERIFICHE DETTAGLIATE

### Slide 20 — Venue Finder Evolution

| Verifica | Calcolo | Risultato |
|----------|---------|-----------|
| Ore presentazioni | 200 × 5h = 1.000h → 200 × 1h = 200h → Δ = 800h | ✅ |
| Ore rework | 300 × 1h45 = 525h → 300 × 20min = 100h → Δ = 425h | ✅ |
| Totale ore | 800 + 425 = 1.225h | ✅ |
| Costo orario | RAL 40K × 1,40 / 1.720 = €32,56 ≈ €33 | ✅ |
| Risparmio lordo | 1.225 × €33 = €40.425 ≈ €40.400 | ✅ |
| Risparmio netto (90%) | €40.425 × 90% = €36.382 ≈ €36.400 | ✅ |
| ROI 2 anni | (€36.400 × 2 − €8.000) / €8.000 = 810% | ✅ |
| Payback | €8.000 / (€36.400/12) = 2,6 mesi ≈ 3 | ✅ |

**Tutto perfetto.** Arrotondamenti minimi e coerenti.

---

### Slide 21 — Flow: Task Management

| Verifica | Calcolo | Risultato |
|----------|---------|-----------|
| Coord. Senior | 2.722h × 35% = 953h → Δ tabella = 951h | ✅ |
| Cross-check | 9 persone × 2,2h/sett × 48 sett = 950h | ✅ |
| PM+Operativi | 5.184h × 25% = 1.296h → Δ tabella = 1.296h | ✅ |
| Cross-check | 20 persone × 1,35h/sett × 48 sett = 1.296h | ✅ |
| Supporto | 4.406h × 15% = 661h → Δ tabella = 661h | ✅ |
| Cross-check | 17 persone × 0,81h/sett × 48 sett = 661h | ✅ |
| Scadenze | 227h → 49h = -178h (-78%) | ✅ |
| Sopralluoghi | 36h → 14h = -22h (-61%) | ✅ |
| Totale ore | 951 + 1.296 + 661 + 178 + 22 = 3.108h | ✅ |

**Ricostruzione €:** Il risparmio di €125.174 non è ricostruibile esattamente senza il foglio di calcolo originale (dipende dal mix esatto di ore per costo orario tra €70/h, €50/h e €35/h). Con ipotesi ragionevoli si ottengono valori nell'intorno (€103K-€134K), coerenti. L'ordine di grandezza è solido.

| KPI | Calcolo | Risultato |
|-----|---------|-----------|
| ROI 192% | Listino €75K + ramp 75%: (€93.880 + €125.174 − €75.000) / €75.000 = 192% | ✅ |
| Payback 9,5 mesi | €75.000 / (€93.880/12) = 9,6 mesi | ✅ |
| Risparmio fiscale €29K | €67.500 × 180% × 24% = €29.160 | ✅ |

---

### Slide 22 — Link: Sistema Gestionale

| Verifica | Calcolo | Risultato |
|----------|---------|-----------|
| Apertura commessa | 87h → 17h = -70h (-80%) | ✅ |
| Compilazione Progress | 720h → 108h = -612h (-85%) | ✅ |
| Chiusure incomplete | 140h → 40h = -100h (-71,4% ≈ -70%) | ✅ arrotondamento |
| Fatturazione attiva | 238h → 48h = -190h (-80%) | ✅ |
| Fatturazione passiva | 694h → 243h = -451h (-65%) | ✅ |
| Reporting | 92h → 28h = -64h (-70%) | ✅ (arrotondamento da 69,6%) |
| Totale ore | 70 + 612 + 100 + 190 + 451 + 64 = 1.487h | ✅ |

**Ricostruzione €:** €60.000 / 80% adozione = €75.000 lordo / 1.487h = €50,4/h medio. Plausibile con mix di Capi Area (€70/h) e PM/Amministrazione (€35-37/h).

| KPI | Calcolo | Risultato |
|-----|---------|-----------|
| ROI 42% | Listino €80K + ramp 90%: (€54.000 + €60.000 − €80.000) / €80.000 = 42,5% | ✅ |
| Payback 18 mesi | €80.000 / (€54.000/12) = 17,8 mesi ≈ 18 | ✅ |
| "1.500+ ore" | Delta lordo = 1.487h ≈ ~1.500 | ✅ |
| Risparmio fiscale €32.400 | €75.000 × 180% × 24% = €32.400 | ✅ esatto |

---

### Slide 23 — Sally: Agente 360°

| Verifica | Calcolo | Risultato |
|----------|---------|-----------|
| Q&A rispondenti | 828h → 256h = -572h (-69%) | ✅ |
| Q&A richiedenti | 1.152h → 461h = -691h (-60%) | ✅ |
| Compilazione docs | 360h → 162h = -198h (-55%) | ✅ |
| Policy e procedure | 105h → 63h = -42h (-40%) | ✅ |
| Onboarding | 600h → 390h = -210h (-35%) | ✅ |
| Email/Audio-to-action | 1.027h → 411h = -616h (-60%) | ✅ |
| Totale ore (lordo) | 572 + 691 + 198 + 42 + 210 + 616 = 2.329h | ✅ |
| "1.980 ore" (slide 13) | 2.329 × 85% adozione = 1.980h | ✅ esatto |

**Ricostruzione €:** €77.486 / 85% / 2.329h = €39,1/h medio. Plausibile con mix di €37/h (Resp. Controllo), €35/h (blend), €30/h (nuovi assunti).

| KPI | Calcolo | Risultato |
|-----|---------|-----------|
| ROI +52% | Listino €85K + ramp 67%: (€51.916 + €77.486 − €85.000) / €85.000 = 52,2% | ✅ |
| Payback 18 mesi | Bundle €76.500 / (€51.916/12) = 17,7 mesi ≈ 18 | ✅ (vedi nota §7) |
| Risparmio fiscale €33K | €76.500 × 180% × 24% = €33.048 ≈ €33.000 | ✅ |

---

### Slide 25 — LeadMe Evolution

| Verifica | Calcolo | Risultato |
|----------|---------|-----------|
| Profilazione | 994h → 284h = -710h (-71%) | ✅ |
| Messaggistica | 276h → 73h = -203h (-74%) | ✅ (arrotondamento da 73,6%) |
| Tracking pipeline | 864h → 128h = -736h (-85%) | ✅ |
| Task management | 385h → 128h = -257h (-67%) | ✅ (arrotondamento da 66,8%) |
| Ricerca lead | 380h → 47h = -333h (-88%) | ✅ (arrotondamento da 87,6%) |
| Totale ore | 710 + 203 + 736 + 257 + 333 = 2.239h | ✅ esatto |

**Ricostruzione €:** €54.500 / (2.239 × 85%) = €28,6/h medio. Leggermente basso per un team con 2 Director, ma plausibile con RAL inferiori alle ipotesi standard.

| KPI | Calcolo | Risultato |
|-----|---------|-----------|
| ROI 142% | Listino €45K senza ramp: (€54.500 × 2 − €45.000) / €45.000 = 142,2% | ✅ |
| Payback ~10 mesi | €45.000 / (€54.500/12) = 9,9 mesi | ✅ |

---

### Slide 15 — Tabella Iperammortamento Illustrativa

| Investimento | Maggioraz. (180%) | Deduzione tot. | Risparmio IRES (24% su magg.) | Costo netto |
|---|---|---|---|---|
| €300K | €540K ✅ | €840K ✅ | €129.600 ≈ ~€130K ✅ | €170.400 ≈ ~€170K ✅ |
| €400K | €720K ✅ | €1.120K ✅ | €172.800 ≈ ~€173K ✅ | €227.200 ≈ ~€227K ✅ |

**Nota tecnica:** Il risparmio è calcolato come 24% sulla sola maggiorazione (beneficio incrementale), non sull'intera deduzione. Questo è corretto: l'ammortamento ordinario (100%) è già deducibile a prescindere dall'agevolazione.

---

### Slide 17 — Riepilogo Investimento

| Verifica | Calcolo | Risultato |
|----------|---------|-----------|
| Σ Listino senza Flow | 8K+80K+85K+35K+15K+9K = €232.000 | ✅ |
| Σ Bundle senza Flow | 8K+75K+76,5K+32K+15K+9K = €215.500 | ✅ |
| Σ Risparmio senza Flow | 36,4K+60K+77.486K = €173.886 | ✅ |
| Σ FTE senza Flow | 0,71+1,09+1,15 = 2,95 | ✅ |
| Σ Listino con Flow | 232K+75K = €307.000 | ✅ |
| Σ Bundle con Flow | 215,5K+67,5K = €283.000 | ✅ |
| Σ Risparmio con Flow | 173.886+125.174 = €299.060 | ✅ |
| Σ FTE con Flow | 2,95+2,08 = 5,03 | ✅ |
| Sconto senza Flow | 232K−215,5K = €16.500 | ✅ |
| Sconto con Flow | 307K−283K = €24.000 | ✅ |
| Iperammortamento bundle SF | 215.500 × 180% × 24% = €93.096 ≈ ~€94K | ✅ |
| Costo netto bundle SF | 215.500 − 93.096 = €122.404 ≈ ~€122K | ✅ |
| Sconto vs listino | (1 − 122.404/232.000) = 47% | ✅ |

**Tutte le somme verticali della tabella sono perfette.**

---

### Risparmio Fiscale per Soluzione

| Soluzione | Bundle | Calcolo (×180%×24%) | Dichiarato | Esito |
|-----------|--------|---------------------|------------|-------|
| Flow | €67.500 | €29.160 | €29.000 | ✅ |
| Link | €75.000 | €32.400 | €32.400 | ✅ esatto |
| Sally | €76.500 | €33.048 | €33.000 | ✅ |
| OnSite | €32.000 | €13.824 | €13.800 | ✅ |

---

### Slide 14 — OnSite

Nessun business case quantificato in euro — coerente con l'approccio "up-sell / revenue aggiuntiva". Il risparmio fiscale di €13.800 torna (€32.000 × 180% × 24% = €13.824). ✅

---

## Riepilogo Complessivo

| Categoria | Trovati | Dettaglio |
|-----------|---------|-----------|
| 🔴 Errori critici | 4 | ROI Flow 175%→192%, ROI Sally 45%→52%, perimetro €353K, "6 BC"→5 |
| 🟡 Incoerenze minori | 4 | Iper. sl.5, sconto sl.17, Sally ROI/PB base diversa, LeadMe no ramp |
| ✅ Verifiche positive | ~50+ | Tutte le tabelle ore, delta %, somme riepilogo, iperammortamento, FTE |

**La struttura numerica della presentazione è solida.** I problemi sono concentrati in due errori residui nel testo (175% e 45% che sono chiaramente da draft precedenti) e in una scelta di perimetro non esplicitata per il claim dell'Executive Summary.