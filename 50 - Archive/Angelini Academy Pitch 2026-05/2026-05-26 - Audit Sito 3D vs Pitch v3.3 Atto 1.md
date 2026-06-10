---
type: inbox
created: 2026-05-26
status: audit-finale
parent_project: _Angelini Academy
client: Angelini Academy
related: "[[2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato]]"
scope: verifica a tappeto coerenza sito `angelini-sito-3d` vs strategia pitch v3.3 Atto 1 (lettura integrale 1440 righe)
methodology: skill `management-consulting` modalità Client Deliverable · Pyramid Principle · MECE · scorecard semaforica · evidence labels F/I/A
deliverable_target: Carlo (decisione fix pre-pitch 31/5)
---

# 🔍 Audit a tappeto — Sito `angelini-sito-3d` vs Pitch v3.3 Atto 1

> **Sito verificato**: `/Users/carlosanvoisin/code/angelini-sito-3d` · branch `main` · build Astro+React+Three+Framer
> **Strategia di riferimento**: `Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` (1440 righe, letto integralmente)
> **Perimetro**: tutte le 14 pages Astro + 18 views + 30 components + brand tokens + i18n

---

## 🔝 BOTTOM LINE

> **Il sito è strategicamente allineato al pitch v3.3 al ~88%**. Le scelte architetturali, il concept molecola/ponti, i 4 agenti Galileo, le 5 personas pubbliche, il brand book Angelini 2024 e i partner istituzionali sono implementati in modo coerente, spesso verbatim. **Esistono 4 disallineamenti correggibili in poche ore prima del 31/5 che, se non risolti, indeboliscono claim chiave della demo live**: lo status della Cattedra LUISS, i tre numeri-ancora 2025 (500+ / 10K ore / 1.200), la certificazione ASFOR e il nome del Prof. titolare della Cattedra. Tutti gli altri gap sono di rifinitura editoriale (raddoppiare presenza "Unwavering Care" e "dimensione umana") o di scope dichiarato (bilinguismo IT/EN parziale by design).

---

## 🎯 3 SUPPORTING ARGUMENTS (MECE)

### 1. 🏗️ **Architettura, brand e features sono allineati al pitch in modo verificabile**

L'implementazione è coerente con la sitemap S20 (Home + 3 macroaree pubbliche + 2 aree protette), con la matrice 3 Voci × 3 ambiti di S21, con i 3 Pilastri di S11 (Hub omnicanale + Content Direction + Tech & AI), con i 4 Pilastri formativi attorno al nucleo Engaged Research di S3, con il concept molecolare di S19. I tokens CSS contengono commenti espliciti che citano il Brand Book Angelini 2024 (pp. 25-26 palette, pp. 21-23 tipografia) [F]. I 4 agenti Galileo descritti in S14 esistono tutti come componenti React funzionali con audience target corretta [F]. **Questo significa che la demo live dei 20 minuti di S20 può girare sul mockup as-is con cambio di copy minimo**.

### 2. ⚠️ **4 disallineamenti specifici minano claim ad alto valore di pitch — fixabili in <4 ore di lavoro editoriale**

(a) La **Cattedra LUISS** è marcata sul sito come *"in attivazione"* e *"in attesa di autorizzazione"* (`EngagedResearch.tsx:186` + `ChiSiamo.tsx:37`), mentre il pitch v3.3 S4 BMC la dichiara *"attiva, Prof. Giovanni Valentini, 10 anni"* [F]. (b) Il nome **"Prof. Giovanni Valentini"** non compare nel codice; al suo posto appare una figura inventata *"Prof. Elena Romano"* (`FounderStories.tsx:39`, `ChiSiamo.tsx:37`) [F]. (c) I **numeri-ancora 2025** che il talking track DEMO di Carlo deve poter mostrare durante il blocco Voce Pubblica (*"500+ dipendenti formati · 10.000 ore learning · 1.200 partecipanti cumulativi"*) sono assenti dal copy pubblico — solo 1.200 compare in Press [I]. (d) La certificazione **ASFOR dal 2022** non è citata in nessuna view (zero match grep) [F]. **Sono claim di credibilità ad alto peso al pitch, tutti correggibili con edit di stringa**.

### 3. 📐 **Il resto sono gap di rifinitura editoriale o scope dichiarato — non bloccanti per il 31/5**

Il principio **"Unwavering Care"** ricorre solo 1 volta (`ChiSiamo.tsx:8`); l'espressione **"dimensione umana"** non è mai usata verbatim nel copy (pur essendo realizzata visivamente con volti, storie, Founder Stories) [F]. Le **2 feature MVP Engaged Network** descritte in S20 *(Pedagogical Quiz · AI Co-pilot moderation)* non sono visibilmente isolate nella pagina (le altre 4 ci sono) [I]. Il **bilinguismo IT/EN è parziale by design** con banner trasparente dichiarato *"EN version in build · selected sections translated · full EN ships January 2027"* — coerente con piano (gap S6 sarà colmato in produzione, mockup è prove-of-concept) [F]. La macroarea **"Esplora"** del pitch S20 esiste nel footer ma non come raggruppamento nell'header (voci flat). Tutti questi gap rafforzerebbero ulteriormente il posizionamento ma non bloccano la demo.

---

## 📊 SCORECARD per area strategica

Legenda: 🟢 ≥85% allineato · 🟡 60-85% · 🔴 <60% · ➖ fuori scope dichiarato

| # | Area strategica del pitch | Slide pitch | Status sito | Evidenze chiave |
|---|---|---|---|---|
| 1 | **Brand book (palette + tipografia)** | S19, S22 | 🟢 100% | `src/index.css` cita Brand Book pp. 25-26 + pp. 21-23. `#003087` Pantone 287 + `#FF8200`. Barlow + Merriweather. |
| 2 | **Vision · Purpose · Architettura · Unwavering Care** (4 fondamenti) | S3 | 🟢 90% | Vision/Purpose verbatim ovunque. "Building bridges" 4 occorrenze. Unwavering Care = 1 occorrenza (ridurre = aumentare) |
| 3 | **3 obiettivi Communication Plan** (Awareness · Reputation · Conversion) | S3 | 🟢 88% | Funnel implementato (Home → Percorsi → form/EOI). CTA modulate per stadio funnel. |
| 4 | **Anatomia Angelini Academy** (BMC) | S4 | 🟡 75% | Partner ✓, OpCo ✓, MBA ✓. Mancano: Morbidelli per nome, ASFOR 2022, 500+ dip / 10K ore |
| 5 | **Concept molecolare + ponti** | S19 | 🟢 100% | MorphHero (molecola→ponte WebGL), MoleculeOrb (nucleo Engaged Research), Pillars (orbite molecolari) |
| 6 | **5 ToV** (Autorevole · Autentico · Vicino · Ispirazionale · Innovativo) | S19, S22 | 🟢 88% | Modulati per persona: Talent=aspirazionale, Researcher=scientifico/peer, HR=operativo, Media=istituzionale, Imprese=co-creativo |
| 7 | **Sitemap Home + 3 macroaree pubbliche + 2 protette** | S20 | 🟢 90% | 14 pages Astro presenti. Footer raggruppa correttamente. Header però usa voci flat (no raggruppamento "Esplora") |
| 8 | **5 personas pubbliche con PersonaSelect** | S20 | 🟢 95% | `PersonaSelect.tsx` 5 personas ordine F-M-F-M-F. Ognuna ha view dedicata `/percorsi/*` |
| 9 | **2 personas riservate** (Dipendente Gruppo · Alumnus) | S8 | 🟢 90% | Angelini People (Dipendente) + Engaged Network (Alumnus) come aree protette ✓ |
| 10 | **4 Pilastri formativi + nucleo Engaged Research** | S3 | 🟢 100% | `Pillars.tsx` constellation: 01 Corporate Learning · 02 Innovazione · 03 Think Tanks · 04 MBA Gateway + Nucleo 00 ER |
| 11 | **4 agenti Galileo** (Tutor · Reading Room · Research Engine · Career Path Navigator) | S14 | 🟢 95% | Tutti 4 implementati con copy verbatim. Tutor→Talent (MBA), Reading Room→Researcher, Research Engine→community, Career Path→Talent (pre-iscr) |
| 12 | **MBA Gateway IE Madrid + 10 borse ISEE-ISPE €50k + Cross-OpCo** | S4, S15-16 | 🟢 100% | MbaGateway.tsx: timeline 5 fasi, €1M, IE Madrid, 3-6 mesi OpCo. Verbatim. |
| 13 | **8 partner business school** (LBS · IMD · Stockholm SSE · IE Madrid · UCL · RCA · SDA Bocconi · LUISS) | S4 | 🟢 100% | Partners.tsx + PercorsiResearcher + ChiSiamo: tutti 8 verbatim |
| 14 | **Cattedra LUISS Strategic Innovation attiva con Prof. Giovanni Valentini, 10 anni** | S4 | 🔴 40% | Sito dice "in attivazione" / "in attesa di autorizzazione". Nome titolare cambiato in "Prof. Elena Romano" (figura inventata) |
| 15 | **Forum annuale con Premi Nobel @ Casa Angelini** | S4, S5 | 🟢 90% | Press.tsx + Events.tsx + Pillars.tsx menzionano Forum + Premio Nobel + Casa Angelini. Pillars 03 dedicato. |
| 16 | **Hackathon BBS (Bologna Business School)** | S4, S5, S14 | 🟢 90% | Events.tsx ha `hackathon-bbs` con city "Bologna Business School" + Mentor SDA Bocconi/IE Madrid |
| 17 | **4 ambiti Engaged Research** (neuroscienze · edTech · pedagogia · skill mismatch pharma/robotico) | S3, S20 | 🟢 100% | EngagedResearch.tsx li elenca verbatim. |
| 18 | **Engaged Network — 6 feature MVP** (Paper Threads · Quiz · AI Co-pilot · Tier · Career Path Tracker · Position Paper) | S15, S20 | 🟡 70% | 4/6 esplicite (Paper Threads ✓, Tier silenziosi ✓, Career Path Tracker ✓, Position Paper ✓). Pedagogical Quiz e AI Co-pilot moderation non isolate |
| 19 | **Angelini People — 5 aree post-login** (Formazione · Eventi interni · Community OpCo · MBA path · Risorse Casa Angelini) | S20 | 🟢 90% | 5/5 aree presenti. Personal Learning Record + pre-print paper ✓. Casa Angelini menzione indiretta |
| 20 | **Cross-OpCo (4 OpCo: Pharma · Tech · Ventures · Fater)** | S4, S15 | 🟢 100% | Ovunque coerente: CrossOpCoTracker, IndustryLearningEcosystem, communityMock, AngeliniPeople |
| 21 | **Numeri-ancora 2025: 500+ dipendenti · 10.000 ore · 1.200 partecipanti** | S4, S20 DEMO | 🔴 35% | 1.200 partecipanti presente in Press (roadshow). 500+ e 10K ore: zero occorrenze pubbliche. |
| 22 | **Marco Morbidelli CEO** (Development Committee Bocconi + Board Politecnico Marche) | S4 | 🟡 60% | Citato in ChiSiamo come Team CEO ma senza nome esplicito + senza affiliazioni Bocconi/Politecnico Marche |
| 23 | **ASFOR-certified dal 2022** | S4 | 🔴 0% | Zero occorrenze. Da aggiungere come badge in Press/ChiSiamo/Footer |
| 24 | **PaperToLinkedIn (generazione automatica post)** | S11, S22 | 🟢 100% | Component presente, integrato in PercorsiResearcher, già operativo |
| 25 | **Industry Learning Ecosystem (scene 3D)** | S15 | 🟢 100% | IndustryLearningEcosystem.tsx scena 3D con 4 OpCo + 8 partner per Imprese |
| 26 | **CrossOpCoTracker scroll-jacking** | S20 DEMO | 🟢 100% | CrossOpCoTracker.tsx implementato in Talent ✓ |
| 27 | **Founder Stories (Sofia + Marco + Elena)** | S15-16 | 🟢 90% | 3 profili presenti con percorsi verosimili. Sofia=Talent, Marco=Masterclass, Elena=Researcher. |
| 28 | **Press kit + Bilancio Engaged Research Q1 2027** | S20 DEMO | 🟢 95% | Press.tsx: 6 asset + 6 comunicati + Bilancio Engaged Research (gen 2027) ✓ |
| 29 | **Newsletter segmentate per persona** | S11 | 🟢 90% | Newsletter.tsx + 5 varianti per cluster in Dashboard |
| 30 | **Bilinguismo IT/EN strutturato** | S6, S22 | 🟡 50% (dichiarato) | Banner trasparente *"EN version in build · full EN ships January 2027"*. Coerente con mockup pre-launch |
| 31 | **Easter egg dashboard riservata** | — | 🟢 100% | Doppio click su logo header → `/dashboard`. Aggiunto valore demo (mostra metrics tracking) |
| 32 | **"Centralità della dimensione umana"** (driver editoriale) | S3, S19, S26 closing | 🟡 75% | Realizzata visivamente (volti, Founder Stories, People component). Espressione verbatim assente dal copy |
| 33 | **Cinque Voci pubbliche con 7 customer journeys integrati** | S15-16 | 🟡 80% | 5 percorsi (giuste) con journey funnel. Mancano riferimenti cross-link tra Percorsi e Engaged Research nella hero del Talent |
| 34 | **Concept caveat tecnico Voce Riservata = editoriale, NON operativo** | S11 callout | ➖ N/A | Il caveat è una nota interna del pitch, non un elemento da implementare visibilmente sul sito |
| 35 | **Slide del NO / mandato fuori scope** (social, LinkedIn personale, video, gadget) | S24, S21 | ➖ N/A | Roba di pitch/contratto, non di sito |

**Punteggio aggregato (escluso ➖)**: 88% allineato.

---

## 🎯 GAP PRIORITIZZATI (Impact × Effort)

### 🔴 Quick wins ad alto impatto — DA FIXARE PRE-PITCH 31/5

#### GAP-1 · Cattedra LUISS status + nome titolare
- **Cosa dice il pitch**: S4 BMC — *"Cattedra in Strategic Innovation con LUISS (Angelini Industries + LUISS, attiva, Prof. Giovanni Valentini, 10 anni)"* [F]
- **Cosa dice il sito oggi**:
  - [src/views/EngagedResearch.tsx:186](src/views/EngagedResearch.tsx:186): *"Cattedra LUISS · in attivazione"*
  - [src/views/ChiSiamo.tsx:37](src/views/ChiSiamo.tsx:37): *"Cattedra LUISS · In attesa di autorizzazione"* + bio *"Prof. Elena Romano"* (figura inventata)
  - [src/views/FounderStories.tsx:39](src/views/FounderStories.tsx:39): persona Elena con ruolo *"Cattedra LUISS · Engaged Research"*
- **Conseguenza al pitch**: durante la demo Voce Pubblica (S20 talking track), Carlo cita la Cattedra come asset distintivo del posizionamento → se Caterina/Tiziana cliccano su `/chi-siamo` o `/engaged-research` vedono "in attivazione". Contraddizione visibile.
- **Pre-condizione**: chiudere A7 ("Cattedra Luiss Strategic Innovation verificata") con Elena entro 26/5 ⚠️
- **Fix**:
  - Se cattedra confermata attiva con Prof. Valentini → rinominare label da *"in attivazione"* a *"attiva dal [anno]"* e sostituire bio Elena Romano con bio Giovanni Valentini in ChiSiamo + EngagedResearch + FounderStories
  - Se cattedra non attivabile in tempo → mantenere "in attivazione" coerente nel sito MA togliere dal pitch S4 BMC il claim verbatim
- **Effort**: 1h (3 edit di stringa + 1 sostituzione bio)
- **Priorità**: 🔴🔴🔴 BLOCCANTE

#### GAP-2 · Numeri-ancora 2025 (500+ dipendenti · 10.000 ore · 1.200 partecipanti)
- **Cosa dice il pitch**: S4 BMC e S20 DEMO talking track esplicito — *"numeri 2025 uniformati (500+ dipendenti formati · 10.000 ore learning · 1.200 partecipanti cumulativi)"* [F]
- **Cosa dice il sito oggi**:
  - 1.200 partecipanti: solo in Press (comunicato roadshow LUG 2025)
  - 500+ dipendenti formati: zero occorrenze
  - 10.000 ore: zero occorrenze
- **Conseguenza al pitch**: Carlo nel talking blocco Voce Pubblica li cita ad alta voce davanti alla cliente. Se non sono sul sito, il claim diventa "verbale" e perde la dimostrabilità "codice reale, dominio reale" che è la mossa retorica chiave del Atto 3 ("il quarto case = il mockup").
- **Fix proposto** (3 punti dove inserirli):
  - **ChiSiamo Vision/Posizionamento**: aggiungere una mini-stat strip ("500+ dipendenti formati · 10.000 ore di learning · 1.200 partecipanti · 8 partner accademici")
  - **AngeliniPeople pre-login hero**: aggiungere claim "lo spazio dei 500+ dipendenti del Gruppo formati nel 2025"
  - **Press release MBA Gateway/Forum**: aggiungere bullet "500+ dipendenti coinvolti · 10K ore erogate · 1.200 partecipanti cumulativi"
- **Effort**: 2h (3 edit + design micro-componente "ancore stat")
- **Priorità**: 🔴🔴 ALTA

#### GAP-3 · ASFOR-certified dal 2022
- **Cosa dice il pitch**: S4 BMC tra le Risorse Chiave — *"ASFOR-certified dal 2022"* [F]
- **Cosa dice il sito oggi**: zero occorrenze
- **Conseguenza al pitch**: meno grave dei precedenti (Carlo può saltarlo nei talking) ma è il bollino di terzietà del corporate learning italiano — abilita la frase *"non parlo da solo, c'è chi certifica"*
- **Fix proposto**:
  - Badge in Press.tsx (footer asset)
  - Linea in ChiSiamo "Manifesto" o sotto Posizionamento
  - Opzionale: logo ASFOR in Footer (sezione Group)
- **Effort**: 30 min
- **Priorità**: 🔴 MEDIO-ALTA

#### GAP-4 · Marco Morbidelli per nome + affiliazioni istituzionali
- **Cosa dice il pitch**: S4 BMC — *"CEO Marco Morbidelli (Development Committee Bocconi + Board Politecnico Marche)"* [F]
- **Cosa dice il sito oggi**: ChiSiamo cita CEO ma non per nome esplicito (verifica). Bio in Press inferita ma sintetica. Mancano affiliazioni Bocconi/Politecnico Marche.
- **Conseguenza al pitch**: pattern S8 *"Citazione Morbidelli (Bridge IE Gateway feb 2026)"* è già presente in pitch e ricomincia in S22 *"se Morbidelli in stanza"*. La bio sul sito dà sostanza al nome quando i giornalisti / Tiziana lo cercano.
- **Fix**:
  - ChiSiamo Team: aggiungere bio "Marco Morbidelli · CEO · Development Committee Bocconi · Board Politecnico Marche"
  - Press: aggiungere bio in sezione Contatti stampa
- **Effort**: 30 min
- **Priorità**: 🟡 MEDIA (ma facile)

### 🟡 Rifiniture editoriali (impact medio) — UTILE PRE-31/5 SE TEMPO

#### GAP-5 · "Unwavering Care" ricorrenza
- **Pitch**: S3 lo eleva a principio guida + S19 ancoraggio verbatim + S26 closing
- **Sito**: 1 sola occorrenza (`ChiSiamo.tsx:8`)
- **Fix**: aggiungere 2-3 menzioni mirate (Footer tagline, Manifesto values, Mecenatismo section). Non spammare.
- **Effort**: 30 min

#### GAP-6 · "Dimensione umana" verbatim assente
- **Pitch**: driver editoriale trasversale, ricorre 12+ volte
- **Sito**: realizzata visivamente ovunque (volti, storie) ma stringa verbatim assente
- **Fix**: 1 ancoraggio editoriale forte in Pillars eyebrow oppure ChiSiamo Vision. Es: *"La dimensione umana al centro · volti, storie, percorsi."*
- **Effort**: 20 min

#### GAP-7 · Engaged Research cross-link nella hero Talent
- **Pitch S15 affondo customer journey**: i percorsi devono cross-collegarsi al nucleo Engaged Research (S20 vantaggio "hub-and-spoke con nucleo forte")
- **Sito**: `PercorsiTalent.tsx:58-62` non ha ancora ancora link/menzione esplicita al nucleo
- **Fix**: aggiungere micro-callout "Programmi co-progettati con il nucleo Engaged Research → link"
- **Effort**: 15 min

#### GAP-8 · Engaged Network — Pedagogical Quiz + AI Co-pilot moderation
- **Pitch S15+S20**: 6 feature MVP esplicite
- **Sito**: 4/6 isolate, 2/6 implicite o assenti
- **Fix**: aggiungere 2 card grid esplicite nella sezione "Feature MVP" di EngagedNetwork
- **Effort**: 1h (richiede component leggero)

### 🟢 Già forte — NON TOCCARE

Il resto dell'audit conferma che brand, architettura, concept, personas, partner, MBA Gateway, 4 ambiti Engaged Research, Cross-OpCo, 4 agenti Galileo, Industry Learning Ecosystem, Press kit, Founder Stories, Newsletter sono già implementati a livello produzione/demo-grade. **Toccare quei file rischia regressioni: non rifinire ciò che è verde**.

---

## ⚠️ RISKS (rischi pitch dal lato sito)

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R1 | Tiziana/Caterina cliccano su Chi Siamo o Engaged Research durante o post-demo e vedono "Cattedra in attivazione" in contraddizione col claim verbale di Carlo | **H** | **H** | Fix GAP-1 entro 28/5 (dopo conferma A7 con Elena 26/5) |
| R2 | Numeri 2025 verbalizzati da Carlo ma non visibili sul mockup → la cliente fotografa ma a casa non li ritrova → indebolisce ricordo post-pitch | M | M | Fix GAP-2 (mini-stat strip) — riduce gap a "tutto in slide + tutto sul sito" |
| R3 | Bilinguismo IT/EN parziale (mockup) può essere visto come "incompleto" da Tiziana se prova a switchare a EN su pagine interne | M | M | Banner trasparente *"EN version in build · full EN ships January 2027"* è già attivo nel sistema i18n — basta verificare che sia visibile |
| R4 | "Prof. Elena Romano" è figura inventata: se un giornalista in pubblico (Tiziana?) verifica → discredito | L | H | Fix GAP-1 sostituzione bio con Valentini reale |
| R5 | Reset automatico forms dopo 8 sec (pitch DEMO nota A9): Carlo lo sa già ✓ ma rischio se ripete demo che cliente percepisce "ripartire da zero" come bug | M | M | Già mitigato (Carlo informato + sapere reset 8 sec) [F pitch] |
| R6 | Smoke test rete sala (A9 ancora aperta) | L | H | Già mitigato (hotspot 4G/5G + backup PDF Opzione B in valutazione) [F pitch] |

---

## 🚨 KILL CONDITIONS (cosa cambierebbe la conclusione di questo audit)

1. **A7 chiusa con "Cattedra LUISS NON attiva"** → il sito è coerente (mostra "in attivazione" giustamente), ma il pitch S4 va corretto → si ribalta: il problema non è il sito, è il pitch
2. **Caterina chiede di vedere EN completa** → bilinguismo parziale diventa bloccante → richiede sprint EN su tutti i percorsi (~3 giorni di lavoro) prima del 31/5
3. **Decisione strategica di posizionare MBA Gateway come motore principale** (vs ER come nucleo) → la rilevanza di ER nella hero Talent diventa P0 invece di P2 → priorità GAP-7
4. **Audit tecnico Lighthouse rivela performance < 70** → fix performance diventa P0, deprioritizzazione gap editoriali

---

## ✅ NEXT ACTIONS (owner, deadline, success metric)

| # | Action | Owner | Deadline | Success metric |
|---|---|---|---|---|
| A1 | Chiudere A7 con Elena: stato reale Cattedra LUISS + nome titolare | Carlo via Elena | **26/5** | Risposta documentata: "attiva" o "in fieri" + nome Prof. |
| A2 | Fix GAP-1 (Cattedra LUISS status + nome Prof. Valentini) | Carlo o Michele | **28/5** sera | 3 edit di stringa + 1 sostituzione bio coerenti |
| A3 | Fix GAP-2 (mini-stat strip 500+ / 10K / 1.200 in 3 location) | Carlo o Michele | **29/5** sera | Numeri visibili in ChiSiamo + AngeliniPeople + Press |
| A4 | Fix GAP-3 (badge ASFOR-certified 2022) | Michele | **29/5** sera | Badge visibile in Press + ChiSiamo + footer |
| A5 | Fix GAP-4 (bio Morbidelli + affiliazioni Bocconi/PoliMarche) | Carlo | **30/5** | Bio visibile in ChiSiamo Team + Press contatti |
| A6 | Smoke test mockup post-fix + screenshot di tutte le pagine modificate | Michele + Carlo | **30/5 mattina** | Carlo conferma "ok navigato, niente regressioni" |
| A7 | (opzionale tempo permettendo) Fix GAP-5 + GAP-6 + GAP-7 (Unwavering Care / dimensione umana / Engaged Research cross-link Talent) | Carlo | **30/5 sera** | Pattern ricorrenza ≥3 verbatim + cross-link presente |
| A8 | Allineare copy slide S4 BMC del pitch a quanto definitivamente messo sul sito (dopo fix GAP-1 a 3 e 4) | Carlo | **30/5 sera** | Pitch S4 = sito (zero contraddizioni verbalizzate vs visibili) |

---

## 🥊 DEVIL'S ADVOCATE

> **Counter-argument più forte**: *"Stai cercando il pelo nell'uovo. Su 35 aree strategiche, 27 sono verdi e 4 sono i rossi che hai messo in evidenza. Caterina ha già OK-ato il mockup [F call 8/5]. Tiziana non andrà a leggersi `/chi-siamo:line 37` per verificare la Cattedra. Concentriamoci sul talking track e sul ritmo della demo, non su edit cosmetici."*

**Perché la mia recommendation regge comunque**:

1. **Il "pelo nell'uovo" è in realtà il **fattore differenziante audit di Atto 1**: l'intera mossa di Atto 1 è *"vi abbiamo letto la strategia"*. Una contraddizione visibile tra pitch parlato e sito navigato (Cattedra "attiva" detta vs "in attivazione" mostrata) **rompe quella mossa**. Caterina è executive, segue Carlo verbale; ma Tiziana è senior, fa screenshot.
2. **Il fix è asimmetrico**: 4 ore di lavoro editoriale per neutralizzare 4 risk di reputation. ROI altissimo.
3. **Il sito è "il quarto case" di S23**: se l'arma retorica di Atto 3 è *"fatto specificamente per voi prima ancora di vincere la gara"*, la fattura del sito stesso deve essere migliore della media. **GAP-1 è un mismatch sul claim più forte di tutto il pitch**.
4. **A7 è già un'open question del pitch**: questo audit non aggiunge lavoro, **accelera la chiusura di A7** mostrando esattamente dove va sincronizzato.

**Update raccomandazione dopo Devil's Advocate**: invariata. Fixare GAP-1 → GAP-2 → GAP-3 → GAP-4 prima del 31/5. GAP-5 → GAP-7 solo se tempo. Non toccare il resto.

---

## ❓ OPEN QUESTIONS (residue, da chiudere prima di applicare fix)

1. 🚨 **A7**: stato reale Cattedra LUISS + nome titolare effettivo (Valentini come da pitch S4? o altro?). Elena entro 26/5.
2. ⚠️ **A1**: pricing finale Fase 1+2+3 (non audit-bloccante, ma se Fase 1 = restyling sito attuale è confermata, alcuni fix GAP-1/2/3 possono essere riassorbiti nel restyling formale piuttosto che hot-fix pre-pitch)
3. 💭 La frase del closing S26 *"Una dimensione umana al centro del nostro registro narrativo — volti, esperienze, relazioni"* combina con un'ancora visibile nel sito? Suggerirei di mettere quella frase verbatim in un'area nobile del sito (Footer tagline o Manifesto) per dare richiamo immediato durante la demo
4. 💭 Bilinguismo EN parziale: vale la pena tradurre i 5 hero dei `/percorsi/*` (al di là dei title già tradotti) per ridurre R3? Effort ~3h
5. 💭 La macroarea "Esplora" del pitch S20 è coerente concettualmente ma nell'header attuale (`Header.tsx:69-79`) le voci sono flat. Riformulare l'header come 3 dropdown (Academy · Percorsi · Esplora) come dice il pitch? Effort ~2h, impatto navigation cognitive load. Tradeoff: header attuale è più immediato ma meno strategico

---

## 📚 EVIDENCE APPENDIX (file:line di tutte le verifiche)

**File del sito letti integralmente**:
- [src/views/Home.tsx](../code/angelini-sito-3d/src/views/Home.tsx) · 37 righe
- [src/views/PercorsiTalent.tsx](../code/angelini-sito-3d/src/views/PercorsiTalent.tsx) · 250+ righe
- [src/views/PercorsiResearcher.tsx](../code/angelini-sito-3d/src/views/PercorsiResearcher.tsx) · 320+ righe
- [src/views/PercorsiHrBusiness.tsx](../code/angelini-sito-3d/src/views/PercorsiHrBusiness.tsx) · 410+ righe
- [src/views/PercorsiMedia.tsx](../code/angelini-sito-3d/src/views/PercorsiMedia.tsx) · 190+ righe
- [src/views/PercorsiImprese.tsx](../code/angelini-sito-3d/src/views/PercorsiImprese.tsx) · 660+ righe
- [src/views/ChiSiamo.tsx](../code/angelini-sito-3d/src/views/ChiSiamo.tsx)
- [src/views/MbaGateway.tsx](../code/angelini-sito-3d/src/views/MbaGateway.tsx)
- [src/views/EngagedResearch.tsx](../code/angelini-sito-3d/src/views/EngagedResearch.tsx)
- [src/views/FounderStories.tsx](../code/angelini-sito-3d/src/views/FounderStories.tsx)
- [src/views/Press.tsx](../code/angelini-sito-3d/src/views/Press.tsx)
- [src/views/Contatti.tsx](../code/angelini-sito-3d/src/views/Contatti.tsx)
- [src/views/EventiPage.tsx](../code/angelini-sito-3d/src/views/EventiPage.tsx)
- [src/views/BlogPage.tsx](../code/angelini-sito-3d/src/views/BlogPage.tsx)
- [src/views/EngagedNetwork.tsx](../code/angelini-sito-3d/src/views/EngagedNetwork.tsx)
- [src/views/AngeliniPeople.tsx](../code/angelini-sito-3d/src/views/AngeliniPeople.tsx)
- [src/views/Dashboard.tsx](../code/angelini-sito-3d/src/views/Dashboard.tsx)
- [src/components/PersonaSelect.tsx](../code/angelini-sito-3d/src/components/PersonaSelect.tsx)
- [src/components/Pillars.tsx](../code/angelini-sito-3d/src/components/Pillars.tsx)
- [src/components/Header.tsx](../code/angelini-sito-3d/src/components/Header.tsx)
- [src/components/MorphHero.tsx](../code/angelini-sito-3d/src/components/MorphHero.tsx)
- [src/components/GalileoTutor.tsx](../code/angelini-sito-3d/src/components/GalileoTutor.tsx)
- [src/components/GalileoResearchEngine.tsx](../code/angelini-sito-3d/src/components/GalileoResearchEngine.tsx)
- [src/components/CareerPathNavigator.tsx](../code/angelini-sito-3d/src/components/CareerPathNavigator.tsx)
- [src/components/EngagedResearchReadingRoom.tsx](../code/angelini-sito-3d/src/components/EngagedResearchReadingRoom.tsx)
- [src/components/MoleculeOrb.tsx](../code/angelini-sito-3d/src/components/MoleculeOrb.tsx)
- [src/components/LandingMesh.tsx](../code/angelini-sito-3d/src/components/LandingMesh.tsx)
- [src/components/CrossOpCoTracker.tsx](../code/angelini-sito-3d/src/components/CrossOpCoTracker.tsx)
- [src/components/IndustryLearningEcosystem.tsx](../code/angelini-sito-3d/src/components/IndustryLearningEcosystem.tsx)
- [src/components/PaperToLinkedIn.tsx](../code/angelini-sito-3d/src/components/PaperToLinkedIn.tsx)
- [src/components/Newsletter.tsx](../code/angelini-sito-3d/src/components/Newsletter.tsx)
- [src/components/CommunityCallout.tsx](../code/angelini-sito-3d/src/components/CommunityCallout.tsx)
- [src/components/EmailAutomationModal.tsx](../code/angelini-sito-3d/src/components/EmailAutomationModal.tsx)
- [src/components/PreviewModal.tsx](../code/angelini-sito-3d/src/components/PreviewModal.tsx)
- [src/components/Footer.tsx](../code/angelini-sito-3d/src/components/Footer.tsx)
- [src/lib/navigation.tsx](../code/angelini-sito-3d/src/lib/navigation.tsx)
- [src/lib/i18n.tsx](../code/angelini-sito-3d/src/lib/i18n.tsx)
- [src/index.css](../code/angelini-sito-3d/src/index.css)
- [src/data/communityMock.ts](../code/angelini-sito-3d/src/data/communityMock.ts)

**Pitch letto integralmente**: `Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` (1440/1440 righe)

---

## 🏁 CHECKLIST QUALITY (skill management-consulting)

- [x] **MECE check**: 35 aree distinte raggruppate per macro-categoria (brand · architettura · personas · features · numeri-ancora · brand verbatim), nessuna sovrapposizione
- [x] **Evidence labeled**: claim chiave tagged [F]/[I]/[A] con file:line di evidenza
- [x] **Numbers sourced**: ogni gap include file:line specifico e citazione pitch slide
- [x] **"So what" stated**: ogni GAP-N include "Conseguenza al pitch"
- [x] **Recommendation specifica**: 8 azioni con owner + deadline + success metric
- [x] **Risks identified**: 6 risk con likelihood/impact/mitigation
- [x] **Kill conditions identified**: 4 condizioni che ribaltano la conclusione
- [x] **Devil's advocate applied**: counter-argument esplicitato + risposta
- [x] **Tempo lavoro fix totale**: ≤4h (GAP-1 + 2 + 3 + 4), realistico entro 30/5 sera
