# AUDIT PRESENTAZIONE — Noloop SAL e Roadmap 2026

**Data revisione:** 7 marzo 2026  
**Presentazione prevista:** 10 marzo 2026 (lunedì)  
**Destinatario:** Amministratore Delegato / Direzione Noloop

---

## 🔴 CRITICITÀ ALTA — Da correggere prima della presentazione

### 1. I numeri aggregati di Slide 2 non corrispondono ai business case

La slide d'apertura (slide 2) dichiara:

> "Scenario realistico: **oltre €260K/anno** di risparmio, **~8.400 ore** liberate"

Ma la somma dei 6 business case individuali (già al netto dei tassi di adozione) restituisce:

| Soluzione | Risparmio netto/anno | FTE liberati |
|-----------|---------------------|-------------|
| Venue Finder | €36.400 | 0,71 |
| LeadMe | €54.500 | 1,30 |
| Link | €56.000 | 0,66 |
| Flow | €114.943 | 1,93 |
| Pitch | €57.500 | 1,06 |
| Sally | €77.486 | 1,15 |
| **TOTALE** | **€396.829** | **6,81 FTE (~11.713h)** |

**Discrepanza: +€137K e +3.300 ore rispetto a quanto dichiarato in apertura.** Un AD lo nota immediatamente. Scegli se aggiornare slide 2 al dato reale (~€397K) oppure spiega nel testo che i €260K si riferiscono a un sottoinsieme (e in quel caso specifica quale).

---

### 2. Importi investimento troncati su 3 slide (zero mancante)

Il separatore delle migliaia è sparito — i prezzi appaiono come centesimi:

| Slide | Attuale (errato) | Corretto |
|-------|----------|----------|
| 24 — Pitch | **45.00 €** → 40.000 | **45.000 €** → 40.000 |
| 26 — Sally | **85.00 €** → 75.000 | **85.000 €** → 75.000 |
| 28 — OnSite | **35.00 €** → 30.000 | **35.000 €** → 30.000 |

Presentare "45 euro" invece di "45.000 euro" davanti all'AD è un errore di credibilità immediata.

---

### 3. Investimento Venue Finder: la slide dice €9K, il business case dice €10K

- Slide 6 (KPI): investimento = **€9.000 → €8.000** (bundle)
- Slide 7 (testo business case): "Su un investimento di **10.000 euro**, il payback è di circa 3 mesi e il ROI a 2 anni è del 708%"

Il ROI calcolato su €9K è 709%, su €10K sarebbe 628%. **Allineare il dato** — uno dei due è sbagliato.

---

### 4. Flow: due cifre diverse tra la slide di overview e il business case

- Slide 22 (KPI box): **€114.943/anno**
- Slide 23 (tabella): **€114.437/anno**

Delta di €506. Piccolo, ma un revisore attento lo nota e mette in discussione la precisione dell'intero modello.

---

### 5. Typo visibile a grande formato: "Sales Navigtor"

Slide 4 — nella sezione "Ricerca di Nuove Opportunità", il nome dello strumento è scritto **"Sales Navigtor"** invece di **"Sales Navigator"**. Essendo in corpo grande su sfondo scuro, è molto visibile.

---

## 🟡 CRITICITÀ MEDIA — Rischi in fase di discussione

### 6. Numero di soluzioni: "8" non corrisponde

Slide 2 dice *"un ecosistema di **8 soluzioni** interconnesse"*. Contando le proposte Wave 2:

1. Link  
2. Flow  
3. LeadMe Evolution  
4. Sally  
5. Pitch  
6. OnSite  
7. Venue Finder Evolution  
8. Crowd (Integrazione Pagamenti)  
9. Minutes (Trascrizione Call Esterne)

Sono **9 proposte**, oppure **6 se conti solo quelle con business case**. Il numero 8 non corrisponde a nessun raggruppamento ovvio. Decidere quale conteggio usare e allinearlo.

---

### 7. Numero di reparti: "7" vs "6"

- Slide 2 dice *"intervistando **7 reparti**"*
- Slide 14 (Metodologia) dice *"6 reparti"* e ne elenca esattamente 6 (Sales, Comunicazione, Compliance, Operativi, Controllo Gestione, Producer B2C)

Allineare la cifra.

---

### 8. Terminologia diversa tra le due slide "mappa" (slide 3 vs slide 16)

| Elemento | Slide 3 (Soluzioni 2025) | Slide 16 (Vision 2026) |
|----------|-------------------------|----------------------|
| Reparto commerciale | "New Business" | "Commerciali" |
| Reparto gestione | "Project Manager" | "PM e Capi Area" |

Stessa legenda con nomi diversi: crea confusione. Uniformare.

---

### 9. ROI calcolato su prezzo pieno, ma investimento presentato a prezzo bundle

Ho verificato i ROI — sono calcolati sul **prezzo di listino** (es. Pitch: ROI 91,7% calcolato su €45K), ma l'investimento è presentato a **prezzo bundle** (€40K). Un AD potrebbe ricalcolare mentalmente e trovare un ROI diverso (115,6% su €40K). Non è un errore, ma serve un caveat esplicito: "ROI calcolato su prezzo di listino per prudenza."

---

### 10. OnSite: unica soluzione senza risparmio quantificato

Tutte le soluzioni hanno un impatto in €/anno, tranne OnSite (slide 28) che dice solo *"Revenue aggiuntiva per evento"* senza quantificare. Domanda prevedibile dell'AD: **"Quanto vale in euro?"** Preparare almeno un'ipotesi: se Noloop inserisce OnSite come upsell su X eventi/anno a Y euro/evento, il ricavo potenziale è Z.

---

### 11. Iperammortamento: tre rischi da anticipare

La L. 199/2025 è reale e confermata, ma ci sono tre punti da gestire con l'AD:

**a) Decreto attuativo non ancora pubblicato.** A oggi (marzo 2026) il MIMIT ha trasmesso la bozza al MEF, ma la Ragioneria ha sollevato dubbi. La slide dice correttamente "va validato con il consulente fiscale" ma in discussione l'AD potrebbe chiedere certezze che non ci sono ancora.

**b) Vincolo "Made in EU/SEE".** La norma richiede che i software siano prodotti in UE/SEE. Se l'ecosistema AI si appoggia su modelli di provider americani (OpenAI, Anthropic, Google), la qualificazione potrebbe essere contestata. Fonti di settore confermano che la definizione di "software prodotto in Europa" per soluzioni AI è ancora ambigua.

**c) Requisito di interconnessione con il gestionale.** Il software è agevolabile solo se interconnesso con il sistema di gestione della produzione o ERP. Per un'agenzia eventi (non manifatturiera), l'applicabilità dell'Allegato V va verificata con il fiscalista. L'integrazione con Business Central è un punto forte, ma alcune fonti indicano che CRM e software amministrativi generici potrebbero non qualificarsi.

**Suggerimento:** nella presentazione, usa linguaggio prudenziale ("opportunità in fase di definizione normativa") e non presentarlo come risparmio certo.

---

### 12. Manca una slide di riepilogo investimenti totali

Non c'è una slide che mostri: investimento totale, risparmio totale, ROI aggregato, timeline di implementazione. Un AD vuole la "big picture" prima dei dettagli. I numeri:

| | Listino | Bundle |
|---|---------|--------|
| Investimento totale | €408.000 | €357.000 |
| Risparmio annuo (quantificato) | €396.829 | €396.829 |
| Sconto bundle implicito | — | -12,5% |

Senza OnSite e senza le evoluzioni Crowd/Minutes (che non hanno business case quantificato), l'investimento è €323K (bundle) vs €396K di risparmio.

---

## 🟠 ERRORI DI FORMA — Da correggere se possibile

### 13. Typo e refusi testuali

| Slide | Errore | Correzione |
|-------|--------|------------|
| 4 | "Sales **Navigtor**" | "Sales **Navigator**" |
| 17 (OnSite) | "condi**vs**ione foto" | "condi**vis**ione foto" |
| 17 (Pitch) | "la **studio** di competitor" | "lo **studio** di competitor" |
| 17 (Link) | "dashboard digitale **in per** la Direzione" | "dashboard digitale **per** la Direzione" |
| 23 (assunzioni) | "**€6h**/settimana" | "**6h**/settimana" |

---

### 14. Problemi visivi nel rendering

| Slide | Problema |
|-------|----------|
| 3 e 16 | Header "SCOUTING E **PREPARAZIONE**" — la parola "PREPARAZIONE" è tagliata/nascosta dalla riga sotto |
| 11 | "Analisi Dati «PROGRESS»" — la barra di avanzamento mostra solo **"%"** senza numero |
| 17 | "Onsite - AI Event **Companion**" — testo tagliato/sovrapposto sul bordo destro |
| 18 | In fondo a ogni colonna del processo E2E, i nomi delle soluzioni si sovrappongono al testo |
| 29 | Il sottotitolo è parzialmente coperto da un elemento grafico (numero "2026" sovrapposto) |

---

### 15. Notes delle slide: contenuti residui

Alcune speaker notes contengono solo "si" o "." (slide 3, 4, 5, 8, 11, 16, 17). Se proietti in modalità Presenter View, il tuo interlocutore non le vedrà, ma assicurati di non mostrare accidentalmente lo schermo con le note — apparirebbe poco curato.

---

## ✅ PUNTI DI FORZA DA VALORIZZARE

Per equilibrio, ecco cosa funziona bene nella presentazione:

- **Struttura narrativa solida:** parte dal contesto (Wave 1 validata), passa alla metodologia, poi ai dettagli — pyramid principle rispettato
- **Business case ben costruiti:** ogni soluzione ha dati operativi reali, assunzioni esplicite, tassi di adozione prudenziali
- **Coerenza della metodologia:** RAL × 1,40 / 1.720h usata consistentemente, fonti dati dichiarate
- **Differenziazione tra risparmio hard e revenue:** OnSite correttamente separato dalle efficiency gains
- **Iperammortamento come "chiusura":** posizionato in fondo come incentivo aggiuntivo, non come argomento principale
- **Design coerente:** palette viola/nero, layout ricorrente con le tre colonne (funzionalità, impatto, takeaway)

---

## CHECKLIST PRE-PRESENTAZIONE

- [ ] Aggiornare cifre aggregate slide 2 (€ e ore) per allinearle ai business case
- [ ] Correggere "45.00 €", "85.00 €", "35.00 €" sulle slide 24, 26, 28
- [ ] Allineare investimento Venue Finder (slide 6 vs slide 7): €9K o €10K?
- [ ] Allineare Flow: €114.943 o €114.437?
- [ ] Correggere "Sales Navigtor" → "Navigator" (slide 4)
- [ ] Decidere e uniformare: 7 o 6 reparti? 8 o 9 soluzioni?
- [ ] Uniformare terminologia legenda (slide 3 vs 16)
- [ ] Correggere i 5 refusi testuali (slide 17, 23)
- [ ] Preparare risposta per domanda "Quanto vale OnSite in euro?"
- [ ] Preparare risposta su stato decreto attuativo iperammortamento
- [ ] Verificare con Federico/Simone vincolo Made in EU/SEE per software AI
- [ ] Valutare se aggiungere slide di riepilogo investimenti totali