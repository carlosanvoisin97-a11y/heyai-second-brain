---
type: audit
created: 2026-05-26
parent_project: _Angelini Academy
client: Angelini Academy
purpose: audit strutturato del PDF intermedio prodotto da Claude Design sulle slide Atto 1 — drift detection · estetica · copy · rendering · ciliegina
input_file: /Users/carlosanvoisin/claude/00 - Inbox/Angelini Academy — Strategia e architettura del nuovo sito web.pdf (854 KB · 6 pagine)
related:
  - "[[2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato]] (fonte autoritativa)"
  - "[[2026-05-26 - Handover Angelini chat nuova - Slide generation]]"
  - "[[2026-05-26 - Slide-prompt Atto 2 (S11-S19) per Claude Design]]"
deadline: 2026-05-29 sera (PPTX finale) · 2026-05-31 (pitch)
---

# 🔍 Audit PDF Claude Design — Atto 1 (slide S3-S8)

## 0. Executive Summary

**Stato generale**: il PDF mostra **6 slide** (S3 Fondamenti · S4 BMC · S5 Mercato · S6 Tecnica · S7 Insight+Matrice · S8 Personas) — copre il "cuore" dell'analisi ma **mancano 4 slide chiave** (Cover · S1 Indice · S2 Executive Summary · S9 Pain Point). La qualità di base è **buona-editoriale** (brand Angelini rispettato, tipografia coerente, palette navy+arancio applicata correttamente, niente HeyAI cosmic style) ma due slide hanno **bug di rendering critici** (S5 + S7) che ne degradano la perceived quality davanti a Tiziana. Inoltre **due jargon vietati** sono rientrati in S3, in violazione della modifica 8 v3.3 vs v3.2.

**Verdetto**: il pattern visivo è giusto, la base è solida, ma **3 critical fix + 1 jargon cleanup** sono bloccanti prima del 31/5. Inoltre 4 slide chiave devono essere prodotte (Cover · S1 · S2 · S9). Una mossa "ciliegina" può rendere il pitch devastante per Tiziana.

---

## 1. Slide-by-slide quick assessment

| Slide | Titolo | Drift v3.3 | Estetica | Rendering | Stato |
|---|---|:-:|:-:|:-:|:-:|
| **S3** | Fondamenti + Obiettivi 2026 | 🔴 jargon "fil rouge" + "backbone strategica" + 🔴 data sbagliata | 🟢 | 🟢 | 🔴 da rifare titoli + footer |
| **S4** | Anatomia operativa (BMC) | 🟢 fedele | 🟡 header Proposta di Valore con 2 linee colorate strane | 🟡 minor | 🟡 polish |
| **S5** | Mercato e contesto competitivo | 🟡 "innovation" mancante in action title | 🟢 | 🔴 text overlap tabella 3 modelli | 🔴 critical fix rendering |
| **S6** | Tecnica preliminare (SEO+UX) | 🟢 fedele | 🟢 densità intenzionale, ILLUSTRATIVO ben visibile | 🟢 | ✅ ok |
| **S7** | Insight + Matrice posizionamento | 🟢 fedele | 🟢 layout 2-colonne efficace | 🔴 text overlap matrice ("posizionamento ambiguo" sovrapposto a FOUNDATION) | 🔴 critical fix rendering |
| **S8** | Personas e Voci | 🟢 fedele | 🟢 tabella densa ma leggibile | 🟢 | ✅ ok |

**Slide mancanti**: Cover · S1 Indice · S2 Executive Summary · **S9 Pain Point** (quest'ultima è il GANCIO ad Atto 2 — critica)

---

## 2. 🔴 TIER 1 — CRITICAL (bloccanti per 31/5)

### 1.1 S3 — Jargon vietato rientrato

**Issue**: nel PDF S3 leggo:
- Action title: "Quattro fondamenti identitari e tre obiettivi 2026 — la **backbone strategica** di Angelini Academy."
- Subtitle: "Il **fil rouge** della storyline che segue."

**Problema**: la **modifica 8 v3.3 vs v3.2** (riga 1234 del v3.3) dichiara esplicitamente:
> "fili rossi" → "ambiti strategici di contenuto"
> "il vostro brief pag. X" rimosso dai talking track (eleganza CEO-level)

"fil rouge" è la versione francese ma è lo stesso identico jargon. "Backbone strategica" è tech-speak inappropriato per Tiziana (decision-maker senior, registro istituzionale Angelini).

**Fix**: rigenerare S3 con tweaks Claude Design:
- Action title: "**4 fondamenti identitari e 3 obiettivi del vostro Communication Plan: la base che orienta tutto il pitch.**" (verbatim v3.3)
- Subtitle: "Prima di entrare nell'analisi di mercato, fissare i 4 fondamenti identitari della vostra Academy + i 3 obiettivi che orientano la strategia 2026. Sono il punto di riferimento contro cui leggere tutto ciò che vediamo nei prossimi capitoli." (più sobrio)

### 1.2 S3 — Data sbagliata nel Calendar 2026

**Issue**: il footer Calendar 2026 marca "**OGGI · APRILE 2026**" con il pallino in posizione PRE-LANCIO/LANCIO.

**Problema**: oggi è **26 maggio 2026**. Il pitch è il **31 maggio 2026**. La data va aggiornata altrimenti Tiziana percepisce mancanza di attenzione/cura.

**Fix**: tweak text-only Claude Design → "OGGI · MAGGIO 2026" e ricolloca pallino in posizione corretta (a cavallo tra LANCIO MAG e SEEDING GIU-DIC). Bonus: questo posizionamento "imminente" rafforza l'urgenza temporale del pitch.

### 1.3 S5 — Bug rendering nella tabella 3 modelli archetipici

**Issue**: nella tabella 3 modelli, le "caratteristiche distintive" hanno tag inline colorati (es. *"scarso engagement corporate"*, *"limitato all'asse accademia-business"*, *"Patrocinio culturale"*, *"reputazionale"*) che **si sovrappongono visivamente al testo del paragrafo** — sembra che gli highlight siano "appoggiati sopra" il testo invece di "integrati nel flow". Leggibilità degradata, look amateur.

**Probabile causa**: bug di rendering Claude Design quando applica `<mark>` o highlight inline su testo paragrafo multi-line. Il PPTX export è ancora più lossy.

**Fix**: 2 opzioni
- **A (preferita)**: tweak Claude Design per cambiare gli highlight in **tag chip separati** sotto ogni paragrafo (es. "→ Scarso engagement corporate" come tag rounded) invece di highlight inline
- **B (fallback)**: rimuovere gli highlight inline e mantenere il testo paragrafo pulito; le 3 caratteristiche distintive si leggono già da sole

### 1.4 S7 — Bug rendering nella matrice

**Issue**: nella matrice 2×2, il testo *"Il sito attuale comunica un posizionamento ambiguo"* (annotazione del logo Angelini OGGI al centro) **si sovrappone al box FOUNDATION** in basso a destra. Inoltre il testo "FOUNDATION" appare leggermente spezzato/frammentato. Anche qui leggibilità degradata.

**Probabile causa**: posizionamento assoluto del logo Angelini OGGI + label sovrastano la cella della matrice senza z-index o margin sufficiente.

**Fix**: tweak Claude Design per:
- Riposizionare label "Il sito attuale comunica un posizionamento ambiguo" sopra il logo OGGI (NON sotto) o con offset orizzontale a sinistra
- Verificare z-index logo > cella matrice e text wrap NON corra dentro la cella adiacente
- Padding/margin più generoso intorno al logo OGGI

### 1.5 Mancanza 4 slide chiave

**Issue**: il PDF è solo Atto 1 parziale. Mancano:
- **Cover** (non numerata) — biglietto da visita
- **S1 Indice** — orientamento audience
- **S2 Executive Summary** — la sintesi che ANNUNCIA la tesi prima dell'analisi (cruciale per Tiziana: legge l'ES e capisce già la posizione)
- **S9 Pain Point** — il GANCIO esplicito ad Atto 2 (5 territori azionabili)

**Fix**: generare le 4 slide mancanti in Claude Design seguendo i prompts della chat precedente (S1, S2, S9) + Cover. **Priorità assoluta su S2 e S9** — sono i punti narrativi più decisivi dell'Atto 1.

---

## 3. 🟠 TIER 2 — IMPORTANT (fix consigliato pre-29/5)

### 2.1 S4 — Header "Proposta di Valore" anomalo

**Issue**: nel BMC, il box "Proposta di Valore" ha nell'header **2 linee colorate** (arancio + navy) e una posizione visiva leggermente "sollevata" rispetto agli altri 6 box. Non è chiaro se è intenzionale ("box hero") o un bug.

**Risk**: se è intenzionale, l'esecuzione lo rende ambiguo. Se è un bug, va corretto.

**Fix**: decidere → o **rimuovere** la 2° linea per coerenza con gli altri 6 box, o **enfatizzare meglio** (es. badge esplicito "CUORE BMC" / sfondo bianco-arancio sfumato 5%). Tweak Claude Design.

### 2.2 S5 — Action title shortening + parola "innovation" mancante

**Issue**: action title PDF: *"Tre forze strutturali ridisegnano il **corporate learning** europeo..."*
v3.3 specifica: *"Tre forze strutturali ridisegnano il **corporate learning innovation** europeo..."*

"Innovation" è semanticamente cruciale: il mercato è **corporate learning innovation**, non corporate learning generico. È il segmento specifico dove Angelini ha posizionamento.

**Fix**: ripristinare "innovation" → "*Tre forze strutturali ridisegnano il corporate learning innovation europeo, e i player attivi si raggruppano in tre modelli archetipici con scelte distinte su ricerca autonoma e forza ecosistema.*"

### 2.3 Verifica Merriweather italic per So What

**Issue**: il footer "S O W H A T" è un label all-caps Barlow ma il testo che segue è italic. Non riesco a verificare se è **Merriweather italic** (come v3.3 specifica) o semplicemente **Barlow italic**. Le 2 hanno texture diverse — Merriweather è serif editoriale, Barlow italic è sans.

**Risk**: se è Barlow italic, perdiamo l'effetto "editorial signature" che differenzia il deck da un PowerPoint standard. v3.3 specifica Merriweather italic per ogni So What.

**Fix**: ispezione visiva del PPTX export → se Barlow italic, applicare tweak Claude Design "Cambia font dei testi So What in Merriweather italic" e rigenerare.

### 2.4 Action title lunghezza — single-take readability

**Issue**: alcuni action title sono lunghi (S3 = 17 parole, S5 = 24 parole, S7 = 22 parole). Tiziana è senior, legge in scansione rapida. Action title sotto le 15-18 parole "atterra" più forte.

**Fix proposto** (mantenendo sostanza v3.3):
- S5: "*Tre forze ridisegnano il corporate learning innovation europeo. I player si raggruppano in tre modelli archetipici.*" (16 parole)
- S7: "*Tre insight spiegano perché esiste un quadrante libero. Angelini Academy ha le leve per occuparlo.*" (15 parole · già il PDF lo accorcia in questa direzione ✅)

### 2.5 Footer fonte mancante su S6

**Issue**: S6 ha disclaimer ILLUSTRATIVO + nota in fondo "*Analisi preliminare illustrativa, basata su osservazioni pubbliche dei siti e benchmark di settore. Audit tecnico approfondito disponibile come primo deliverable della Fase 2.*" → ottimo.

Ma le 15 keyword priority non hanno fonte/metodologia esplicita (es. "*derivate da: keyword research SimilarWeb + competitor gap analysis + benchmark settore*"). Per Tiziana = "*da dove vengono queste 15 keyword?*" è una Q&A probabile.

**Fix**: aggiungere micro-footer in S6 con metodologia 1-riga: "*Keyword priority derivate da gap analysis competitor IT/EN + benchmark long-tail pedagogia/edTech + ricerca semantica brand proprietarie.*" Tweak text-only.

---

## 4. 🟡 TIER 3 — NICE-TO-HAVE (se tempo)

### 3.1 Concept molecolare visivo non applicato

**Issue**: v3.3 specifica per S7 Matrice: "*Gli assi richiamano il concept molecolare del sito: molecole = ricerca autonoma · ponti = forza ecosistema.*" Il PDF mostra la matrice 2×2 pulita, MA **non vedo richiamo visivo molecolare**. È solo un quadrante geometrico.

**Risk basso**: il concept molecolare è gancio narrativo per la demo (HeroBridgeConstellation). Se non lo "pre-annunci" visivamente in S7, l'audience non ha aspettativa visiva per quando lo vede in demo.

**Fix opzionale**: aggiungere a S7 microelement visivo che richiama "molecole" (es. 4-5 micro-nodi accademici intorno al logo Angelini OGGI, connessi da linee sottili = "ponti") — molto sobrio, NON decorativo, **NON jargon** "molecolare" in testo (solo visivo).

### 3.2 Alternanza densità lungo Atto 1

**Issue**: le 6 slide del PDF sono TUTTE DENSE. S3 (tabella 4 fondamenti + 4 box obiettivi + timeline) · S4 (7 box BMC + 4 stat) · S5 (3 forze + tabella + driver) · S6 (2 colonne dense) · S7 (3 insight + matrice + nota consulenza) · S8 (tabella 7×6). **Manca respiro.**

V3.3 prevedeva respiro su S2 Executive Summary (slide narrativa) e S11 (vista dall'alto Atto 2). S2 non è ancora generata.

**Fix consigliato**: quando generi S1 Indice + S2 Executive Summary + S9, **fai S1 e S2 più respirate** (ampio whitespace, no tabelle pesanti) per dare alternanza visiva. Pattern: respirato (S1, S2) → denso (S3-S8) → respirato (S9 Pain Point compact + denso visivo) → Atto 2.

### 3.3 Coerenza tag "ILLUSTRATIVO"

**Issue**: ILLUSTRATIVO badge è presente su S5 e S6 ✅. Coerente con v3.3. Verifica solo che il rendering del badge sia il **diagonal top-right** (come v3.3 specifica) e non un banner orizzontale. Nel PDF sembra diagonal ✅.

---

## 5. 🍒 CILIEGINA SULLA TORTA — 1 mossa devastante per Tiziana

### "Slide 0" silenziosa pre-Cover — la prima impressione

**Idea**: prima della Cover ufficiale, aggiungi una slide **completamente vuota** salvo per **una sola frase** in Merriweather italic display giant accent navy, centrata in ampio whitespace:

> *"Avete in casa un'idea di scuola che il mercato europeo non sta ancora servendo."*

**Sotto, micro-label**: *Angelini Academy · pitch 31 maggio 2026 · HeyAI*

**Perché devastante**:
1. **Posizionamento prima del nome**: Tiziana vede la TESI prima del fornitore. Ribalta la dinamica "vediamo cosa ci propongono" → "vediamo cosa hanno capito".
2. **Editorial pause**: nessun deck competitor fa questo. Si distingue per assenza di rumore.
3. **Frase costruita su lei**: "Avete in casa" (possessivo loro), "un'idea di scuola" (non "academy", non "ecosistema", non "sito" — parola umana), "il mercato europeo non sta ancora servendo" (qui spunta il quadrante libero di S7 come premessa già nota a chi guarda).
4. **Forza Atto 1 a essere lettura di conferma**: ogni slide successiva diventa "*ah, ecco perché*". L'analisi non è scoperta ma giustificazione di una tesi già piantata.
5. **Bookend con S22 closing**: chiude con "*Le domande sono vostre*" — apertura e chiusura come **due fermo immagine editoriali in Merriweather italic**, frame del pitch.

**Costo**: 5 min in Claude Design. **Ritorno**: imposta tutto il pitch come "consulenza che ha già visto la risposta" — esattamente il registro McKinsey/BCG. È il livello che Tiziana riconosce dal primo secondo.

**Alternativa più sobria (se preferisci stare classico)**: la frase sopra come **subtitle in Cover ufficiale**, sotto "Angelini Academy — Strategia e architettura del nuovo sito web". Effetto attenuato ma stesso messaggio.

---

## 6. Riepilogo punch list (cosa fare, in ordine)

| # | Azione | Slide | Effort | Bloccante 31/5? |
|---|---|---|---|:-:|
| 1 | Sostituire "fil rouge" + "backbone strategica" con copy v3.3 verbatim | S3 | 5 min tweak Claude Design | 🔴 |
| 2 | Aggiornare data Calendar 2026 da APRILE a MAGGIO + ricolloca pallino | S3 | 3 min tweak | 🔴 |
| 3 | Fix rendering tabella 3 modelli archetipici (highlight inline → tag separati) | S5 | 10 min tweak | 🔴 |
| 4 | Fix rendering matrice (riposizionare label "posizionamento ambiguo") | S7 | 10 min tweak | 🔴 |
| 5 | Generare Cover + S1 Indice + S2 Executive Summary + S9 Pain Point | nuove | 60 min Claude Design | 🔴 |
| 6 | Verificare/applicare Merriweather italic per tutti i So What | tutti | 5 min audit PPTX export | 🟠 |
| 7 | Aggiungere "innovation" in action title S5 | S5 | 1 min tweak | 🟠 |
| 8 | Decidere header "Proposta di Valore" S4 (rimuovere 2° linea o enfatizzare) | S4 | 5 min tweak | 🟠 |
| 9 | Aggiungere micro-footer metodologia keyword in S6 | S6 | 3 min tweak | 🟠 |
| 10 | "Slide 0" silenziosa pre-Cover con frase editoriale (CILIEGINA) | nuova | 5 min Claude Design | 🟡 |
| 11 | Concept molecolare visivo su S7 (richiamo sobrio) | S7 | 15 min tweak/regenerate | 🟡 |
| 12 | Alternanza densità — S1 + S2 respirate, S3-S8 dense | S1, S2 | accorgimento in gen | 🟡 |

**Tempo stimato fix Tier 1 + Tier 2**: ~2 ore in Claude Design + cleanup PPTX. Ciliegina: +10 min.

---

## 7. Cosa il PDF fa BENE (per riconoscere il pattern e non rompere ciò che funziona)

- ✅ **Brand Angelini rispettato**: palette navy #003087 + arancio #FF8200 applicate con discipline, no HeyAI cosmic
- ✅ **Footer coerente** cross-slide ("Angelini Academy" logo + "0X / 19" numerazione)
- ✅ **Header "ATTO 1 · [SEZIONE]"** consistente con cadenza didattica chiara
- ✅ **Tipografia Barlow** applicata bene su titoli e body
- ✅ **Action title in navy con keyword arancio** — leggibile, gerarchico
- ✅ **Subtitle a destra del titolo principale** (layout a 2 colonne header) — McKinsey-grade
- ✅ **ILLUSTRATIVO badge diagonal top-right** su S5 + S6 — coerente con v3.3
- ✅ **S6 densità intenzionale** — funziona come "prova di profondità" tecnica (Tiziana può fotografare la slide)
- ✅ **S7 layout 2-colonne** (3 insight a sinistra + matrice a destra) — efficace per leggibilità
- ✅ **S8 tabella personas** densa ma navigabile, badge Voci colorato — pattern editoriale
- ✅ **So What footer come signature** su ogni slide — coerente con metodo HeyAI

**Conclusione**: la base è solida, il pattern è giusto. I 4 critical fix sono tecnici/dettaglio, non strutturali. Una volta risolti + 4 slide mancanti generate + ciliegina applicata, l'Atto 1 è ready per Tiziana.

---

**Fine audit.** Prossimo step suggerito: applicare i fix Tier 1 in Claude Design oggi, generare le 4 slide mancanti domani 27/5, finalizzare PPTX 29/5.
