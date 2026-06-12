# LOTTO D — ANALISI INTEGRALE 24 CHAT CARLO SANVOISIN (HeyAI Digital)
**Data Export:** 30/04/2026 | **Modalità:** Lettura riga per riga + artifacts critici ⭐

---

## CHAT 1: Preparazione documento per Ilia
**Created:** 18/03/2026, 13:10 | **Updated:** 18/03/2026, 14:05 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Carlo chiede a Claude di revisionare una trascrizione di call PRIMA di condividerla con Ilia Gardelli (Manager 2026 Noloop). Sensibilità alta: contiene commenti strategici sulla Garbarino, sulla Zaghi, sulla dinamica di vendita.

### Persone menzionate
- Ilia Gardelli (Manager Noloop, alleata commerciale)
- Laura Garbarino (AD Noloop)
- Laura Zaghi (Sales Director)
- Marco Merli (GDPR/Compliance)
- Stefania/Marta (Eldis backend)
- Federico Saladino, Simone Montanari (sviluppatori)

### Decisioni con data
- **Rimozione blocchi sensibili** da trascrizione prima di invio a Ilia (data: stessa call, 18 marzo)
- Carlo applica filtro: togliere "ufficioso", commenti su Garbarino, strategia commerciale, dinamiche interne Zaghi

### Numeri / Importi
- €5.000 — quote LeadMe singole (non determinante)
- Scope creep pattern identificato (ricorrente)

### Vincoli operativi
- Ilia era IN CALL, ma documento scritto "ha vita propria"
- Garbarino potrebbe leggere transcript downstream
- Zaghi ha visibilità su planning e budget

### Citazioni testuali
- Carlo (parafrasi): *"Se non serve che lo dici perché c'ho capito che intendi"* — Ilia segnala data quality da accelerazione
- Carlo meta: *"smetti di narrare la tua esposizione finanziaria ai client-side"* (coaching note ricorrente)

### Task aperti emersi
- ~~Pulire transcript~~ (completato in call)
- Allineamento PresidIA/LeadMe con Garbarino (downstream)

### Artifact prodotti
Nessuno

### Pattern per persona/cliente
**Carlo PM vs Carlo Commerciale:** Pattern critico ricorrente. In mode raccolta requisiti = eccellente ascolto. In mode "devo vendere" = rivela strategie, scope, pricing, riduce posizionamento. **Voto call con Ilia:** 8.5/10 (vs 7.5/10 call precedente) — miglioramento ascolta (73% → 58% tempo parlato).

### Open Questions
- Posizione Garbarino su LeadMe Evolution (uscita Wave 1 vs Wave 2)?
- Timeline go-live Noloop ON TRADE (pre-go-live status)?

---

## CHAT 2: Processo e2e NOT Operations Logistica Vendite
**Created:** 13/03/2026 | **Updated:** 21/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Carlo analizza end-to-end di NOT (Noloop On Trade) — focus su logistics + sales operations. NOT è sia un progetto di trasformazione digitale sia una linea di business per Noloop (reseller model).

### Persone menzionate
- Massi Sinigaglia (Managing Partner NOT)
- Justin Lauro (Senior Account NOT)
- Laila El Zieny (Area Manager NOT)
- Paolo Donzelli (CFO, referente NOT side)
- Germano Marano (Eye Cookies)
- Stefano Havant (Avant)

### Decisioni con data
- **Modello di engagement:** HeyAI fa analysis + quotazione tecnica; NOT decide implementazione + go-live
- **Scope:** Logistics (picking/packing workflow) + Sales (order management + forecast)
- **Blocco Email/Form:** Form contatti NOT non invia — **blocco critico per DNS switch** (data: 21 aprile)

### Numeri / Importi
- **NOT Operations Transformation:** €109K quotato (Logistica + Vendite, da vault v1.0)
- **Stima implementazione:** 5-6 mesi post-approvazione
- **NOT sito web:** problemi tecnici ricorrenti (Web3Forms, Calendly, GA4, cookie privacy)

### Vincoli operativi
- DNS Aruba → Hostinger (migration pending)
- Form invia via Formspree (problematico) — switch necessario a Web3Forms
- Caselle email info@/privacy@ non attivate da cliente (blocco A)
- Iubenda privacy: approvato (€72/anno), ma timing manuale vs automatico da decidere
- SEO metadata (og:tag, canonical) incompleti
- Mobile testing WhatWeDoSection (auto-movement) + PlaceToBiz sticky iOS Safari

### Citazioni testuali
**Blocco D primario:** *"il form contatti non invia — vero blocker unico, da chiudere PRIMA del DNS"*

### Task aperti emersi
1. **Blocco A (INPUT CLIENTE):** Attivare 2 email boxes, GA4 account, Calendly URL, LinkedIn company page, OG/canonical URLs, DPO email
2. **Blocco B (CODICE):** Deploy unico, switch Formspree→Web3Forms, aggiornare placeholder dominio in 3 file, aggiungere GA4 snippet
3. **Blocco C (PRIVACY):** Decidere subito se Iubenda (clean) vs aggiornamento manuale (lento)
4. **Blocco D (INFRA):** Migrazione DNS + test finale
5. **Residui tecnici:** Mobile testing, rimozione duplicate ServiziPage.jsx vs ServicesPage.jsx

### Pattern ricorrente
NOT è un *case study* per HeyAI: dimostra capacità di fare sia analysis/design che go-to-market guidance a un partner locale (Massi/Justin). Modello = revenue share soft (NOT guadagna commissioni dai clienti).

### Open Questions
- Data di attivazione caselle email da NOT?
- Who owns DPO appointment (NOT S.r.l. vs Noloop)?

---

## CHAT 3: Progetto piattaforma gestione eventi Crowd
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Crowd = integrazione pagamenti + reporting evento. Parte di Wave 1 Noloop, necessaria per completare go-live LeadMe + Crowd + Minutes (3 moduli chiusura).

### Persone menzionate
- Lorena Cavecchi (Responsabile MICE)
- Arianna / Lorena (testing con ~20 feedback)
- Stefania/Marta (Eldis backend, testing parallelo)

### Decisioni con data
- Crowd MVP approval (architecture approved, Gantt approved)
- Testing phases: rooming, transfer, reporting, import/export (feedback da ~20 test users)
- Email inviata a Lorena per kickoff testing (21 aprile)

### Numeri / Importi
- Incluso in Wave 1 bundle (no additional cost vs LeadMe)
- Rooming: core feature (venue allocation per event + attendee)
- Reporting: dashboard sintetico (capacity, actual attendance, timing)

### Vincoli operativi
- Integrazione con Minutes (export task→attendee mapping)
- Integrazione con LeadMe (lead → participant → attendee)
- Testing window: 2-3 settimane
- Go-live gate: approvazione Lorena su test report

### Task aperti
- Feedback rooming (allocation strategy)
- Feedback transfer (move attendee between sessions)
- Feedback reporting (dashboard KPI)
- Feedback import/export (data migration da legacy)
- Fix Wrike ultima tranche (final closure Wave 1)

---

## CHAT 4: Proposta commerciale servizi digital marketing con roadmap investimenti
**Created:** 13/03/2026 | **Updated:** 13/03/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Proposta commerciale da HeyAI per Noloop sul MARKETING AI — smart copy, SEO bot, campaign orchestration. NOT da confondere con NOT Operations Logistics.

### Persone menzionate
- Marco Pasquali (Marketing Director Noloop, padre di Andrea Jakala)

### Decisioni con data
- Digital marketing proposal: Phase 1 (smart copy + SEO bot) + Phase 2 (campaign orchestration)
- Roadmap 2026: Investment planning per budget Q2-Q4

### Numeri / Importi
- **Stima Phase 1:** €35-45K (smart copy + SEO bot, 4-6 settimane)
- **Stima Phase 2:** €25-30K (campaign orchestration, subsequent)

### Pattern
NOT strutturato come business case per la presentazione Noloop Wave 2 (ROI, tempo ripristino).

### Open Questions
- Marco Pasquali engagement status (CFO approval needed?)

---

## CHAT 5: Proposte di progetti di trasformazione digitale e AI
**Created:** 13/03/2026 | **Updated:** 13/03/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Portfolio overview: Wave 2 Noloop, PresidIA, FuturItaly Osservatorio, Eldis, BrainLab, HoReCa, Achipont, Futuritaly FuturKids/Magic Journey.

---

## CHAT 6: Punti operativi e next steps dalla call
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Recap post-call: azioni concrete, owner, deadline.

### Decisioni
- Inviare email Federico/Simone per minutes, LeadMe bug, Crowd testing, Eldis, PresidIA benchmark
- Call presentazione FuturItaly (aggiornamento Claudia su 5 Aree)

---

## CHAT 7: Quotazione Eye Cookies - Prima proposta MVP
**Created:** 14/03/2026 | **Updated:** 14/03/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Eye Cookies = progetto Germano Marano (partner commerciale). MVP quotato €75K (full IP ownership firmato 03/04/2026, da vault). Deliverable: prototipo cookie consent + analytics integration.

### Persone menzionate
- Germano Marano (cliente Eye Cookies)

### Numeri / Importi
- **€75K MVP** (full ownership, sign 03/04)
- Ramp: 8 settimane

### Task aperti
- Kick-off development
- Integration roadmap (downstream products: A/B testing, heat mapping)

---

## CHAT 8: Recap call cliente Elvis e prossimi passi
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Call cliente Elvis (HoReCa target, €25K stima). Allineamento su requirements, next steps.

### Persone menzionate
- Matteo Cosma (cliente HoReCa referente)

### Decisioni
- Proposta tecnica revised entro 5 gg lavorativi
- Testing 2-3 settimane post-sign

### Numeri / Importi
- **€25K target** (HoReCa, da vault)

---

## CHAT 9: Recap sviluppo MVP e quotazioni progetti
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Status MVPs in progress: PresidIA prototype, Eye Cookies, HoReCa, Eldis, Futuritaly Osservatorio.

### Task aperti
- PresidIA prototype lunedì 16 marzo (deadline passed, likely delivered)
- Eye Cookies development kickoff
- Eldis Fase 1 start

---

## CHAT 10 (CRITICA): Recupero attività e task di Carlo
**Created:** 22/04/2026, 01:38 | **Updated:** 22/04/2026, 01:41 | **Model:** opus-4-7 | **Artifacts:** 0

### Contesto operativo
Estrazione integrale di TUTTI i task/prossimi passi di Carlo strutturati per PRIORITÀ (🔴 ALTA, 🟠 MEDIA, 🟡 BASSA, 🟢 PERSONALE).

### Persone menzionante (TUTTE)
**PROGETTI PRINCIPALI:**
- Laura Garbarino (AD Noloop), Chicco Nobili (Co-founder), Paolo Donzelli (CFO)
- Andrea Pasquali (external benchmarking), Lavinia Ferrari (FuturItaly)
- Federico Saladino, Simone Montanari (developers)
- Marco Murolo (PresidIA owner)
- Massi Sinigaglia (Managing Partner NOT)
- Matteo Cosma (HoReCa cliente)

**TEAM INTERNO:**
- Michele (co-founder?), Andrea Pazienza (socio)
- Bruno Mattucci (socio)

**SUPPORT ROLES:**
- Marco Merli (GDPR), Roberta Calajò (Resp Controllo), Laura Zaghi (Sales)
- Luca Candiani, Antonio Cichello (Producer), Ivano Romano (Communication)
- Lorena Cavecchi (Resp MICE), Stefano Havant (Avant)
- Danilo Piersanti, Luca, Gabriele (Silencio)
- Mauro Longo (avv), Lavinia Ferrari (Futuritaly)

**CLIENTI:**
- Germano Marano (Eye Cookies)
- Stefania Solidoro/Marta Garrafa (Eldis)
- Leonardo (CRM FuturItaly)

### Decisioni con data (estratte dalla chat)

#### 🔴 PRIORITÀ ALTA — QUESTA SETTIMANA (data: 21-22 aprile)

**1. NOLOOP Wave 2 (€315K):**
- Proposta chiusa €315K bundle, presentazione Laura+Paolo venerdì mattina ✅
- **NODO IRRISOLTO:** IP ownership HeyAI vs Federico/Simone — **rimane critico**
- Inviare brief Wave 2 a Andrea Pasquali per quotazione benchmark indipendente
- Firma contratto e partenza (timeline marzo-novembre 2026, 35/30/35 pagamento)
- Requirement Log 83-113 come annex contrattuale

**2. NOLOOP Wave 1 — chiusura operativa (email 21 aprile):**
- **Minutes:** status ultimi miglioramenti, tempistiche go-live, chiusura fix Wrike
- **LeadMe bug Simona:** Bug #1 (navigazione) fixato; Bug #2 (eliminazione contatti) — Federico testa, Carlo scrive a Simona
- **Crowd:** finalizzare ultime funzionalità, deployare, data go-live
- **Compilatore Eldis:** proposta economica manutenzione + sviluppi da presentare a Stefania
- **Piano operativo NOT + Wave 2:** milestone, dipendenze, priorità partenza
- **Quotazioni:** Osservatorio FuturItaly (IP full-transfer) + PresidIA (R1/R2)

**3. NOT sito web — pre-go-live (data: 21 aprile, **blocker UNICO: form non invia**):**
- **Blocco A — Input cliente (Paolo/Germano):**
  - Caselle info@, privacy@noloopontrade.eu
  - Account Web3Forms + access_key
  - Calendly Germano (login Microsoft) + URL evento one-on-one
  - LinkedIn company page NOT
  - GA4 + Measurement ID
  - Email DPO, URL canonici/OG, DOMINIO placeholder
- **Blocco B — Code (unica deploy):** Formspree→Web3Forms switch, Calendly URL, tel 02 78656523, coerenza email, GA4 snippet
- **Blocco C — Privacy:** Iubenda (€72/anno) YES, timing manuale vs automatico da decidere subito
- **Blocco D — Infra:** DNS Aruba→Hostinger migration
- **Residui:** Mobile testing, eliminare ServiziPage.jsx duplicate

#### 🟠 PRIORITÀ MEDIA — PROSSIME 2 SETTIMANE

**4. PRESIDIA (proposta a Marco Murolo NOT inviata yet):**
- Attendere benchmark Andrea Pasquali (OCR cedolini, multi-tenancy, RAG/KB)
- Inviare proposta 3 opzioni: (a) acquisto IP, (b) licenza esclusiva+rev-share, (c) ibrido buyout
- Chiarire staffing parametrico (doc v2 vs screen map) in call
- Formalizzare strategia IP: HeyAI acquista da Federico/Simone, cede a Marco con upfront ridotto+rev-share
- MVP 3 release per price-point Marco

**5. FUTURITALY — multi-workstream:**

*Sito React v6:*
- Attesa Claudia su "5 Aree Intervento" (send quick formula: "procediamo in assenza indicazione")
- Brand manual/palette/font definitivi
- Rielaborazione contenuti architettura
- Call concept (schedulata 13 aprile, fissare formalmente)
- Post approval: 2-3 settimane go-live

*Osservatorio Strategico AI:*
- Allineamento Federico/Simone su IP full-transfer (bando MEF constraint)
- Nuovo costo sviluppo (input multi-formato, agente conversazionale)
- Partnership commerciale/rev-share formula
- Proposta rivista entro settimana (nuovo modello IP, prezzo, rev-share)
- Attesa business case FuturItaly
- Esempi input/output dal team per calibrare AI
- Conferma definiva clausola IP bando MEF

*FuturKids/Magic Journey:*
- Lettura approfondita brief
- Caso d'uso pilota da FuturItaly
- Analisi tecnica feasibility (€38K budget)
- Mini-proposta post-caso d'uso

*CRM avanzato:* parcheggiato, dialogo aperto Leonardo

**6. BRAINLAB — Amazon PPC:**
- **BOOST Loose-Match:** ridurre bid €0.55→€0.40 (fermare emorragia)
- **FOCUS:** non toccare (ROAS 71.5%)
- Verify negative keyword ultimo round (encoding issues)
- Search Term Report biweekly routine
- Coupon Amazon 10-15%
- Attivare "Iscriviti e Risparmia"
- "Request a Review" per chiudere gap review (40 vs 892 vs 3.300)
- Bundle più grande per €/unità

#### 🟡 PRIORITÀ MEDIO-BASSA / NUOVI FRONTI

**7. ACHIPOINT (nuovo cliente edilizia/restauri, stima 150-250K annuo):**
- Email questionario discovery con data scadenza (suggerito: entro 1 maggio)
- Decidere se inviare anche responsabile operativa
- Verifiche BDNCP/ANAC su categorie edilizia Lazio
- Check albi grandi committenti privati (ADR, Poste ecc.)
- Proposta tecnico-economica entro 5 gg lavorativi da ricezione questionario

**8. ELDIS Raccolta Punti (Base44) + Content:**
- Verificare se app Eldis Rewards esiste o è test vuoto
- Step 1.1: schema dati + univocità fattura + P.IVA
- Proposta già formalizzata (€8.000 Fase 1)

**9. US UP × ANIA (anIA) — subfornitore, Salone Assicurazioni Claudio Furlan:**
- Chiarire con Bruno su "logistica" + "Eye Cookies"
- Non sovrapporre a BitForFun su EMOTI/PORTAL
- SYNTHEOS (avatar HeyGen+KB) spazio contendibile
- BAT PopUp use case autonomo
- Slide "Where HeyAI fits" per prossimo allineamento

**10. ANDREA PASQUALI — benchmarking esterno:**
- Invio brief PresidIA + requirement log + prototipo link
- Invio brief Wave 2 Noloop
- Allineamento portfolio completo
- Introduzione Michele, Andrea Pazienza
- Analisi organizzativa + break-even HeyAI

**11. ELDIS compilatore (Stefania/Marta backend):**
- Proposta economica manutenzione ordinaria + sviluppi extra (email a Federico/Simone, strutturare per presentazione cliente)

#### 🟢 PERSONALE
**12. Viaggio compleanno fidanzata 2-4 maggio:**
- Contatto operatore canoe Tirino (lunedì 4 mattina)
- Prenotazione Gli Archetti Scanno (sabato sera)
- Decisione: dormire Scanno o Tirino (domenica)

### NODI TRASVERSALI APERTI

1. **IP HeyAI vs Federico/Simone** — presente Wave 2, PresidIA, FuturItaly Osservatorio. Strategia unificata da formalizzare.
2. **Time tracking FuturItaly** — coaching point aperto
3. **Strategic coaching flags:**
   - Troppo lavoro gratuito
   - Esposizione revenue-share
   - Lunghi monologhi in call (seconda metà)
   - Preemptive justification pricing
4. **Organigramma HeyAI + break-even** — lavoro con Andrea Pasquali in corso

### Open Questions

- **Data conferma Garbarino per Wave 2 kickoff?** (Expected: post-23 marzo)
- **Blocco form NOT quando risolto?** (Critical path item)
- **Andrea Pasquali delivery benchmark quando?** (Blocco PresidIA + Wave 2)
- **Status feedback Crowd testing?** (Blocco Wave 1 chiusura)
- **IP ownership agreement HeyAI-Federico-Simone-Marco?** (Blocca Wave 2, PresidIA, Osservatorio)

---

## CHAT 11: Recupero metodologia quotazioni IT
**Created:** 18/04/2026 | **Updated:** 18/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Estrazione COMPLETA della metodologia di pricing/quotazioni di Carlo per progetti IT/AI.

### PRICING FRAMEWORK (da chat)

#### 1. MODELLO DI BASE (Development)
- **Costo vivo:** €/ora developer × ore stimate
- **Markup commerciale:** 30-50% su costo vivo (dipende da:
  - Lunghezza progetto (6 mesi → margin più basso)
  - Complessità tecnica
  - Leverage su asset existing (riuso → margin più alto)
  - Relazione cliente (new vs established)
- **Sconto bundle:** -15-20% se 3+ soluzioni insieme

#### 2. REVENUE-SHARE STRATEGY (Progetti High-Upside)
- **Slot disponibili:** Max 3 slots per HeyAI (già 2 occupati: FuturItaly, potenziale PresidIA)
- **Modello:** Upfront ridotto (30-50% costo vivo) + % ricavi futuri (15-30% revenue share)
- **Lock-in:** Tipicamente 3-5 anni
- **Quando usare:** Cliente high-growth, budget ristretto, upside potenziale alto

#### 3. FIXED PRICE vs TIME & MATERIALS
- **Fixed:** MVP bien definito, scope ristretto, cliente affidabile (Eye Cookies €75K)
- **T&M:** Discovery-heavy, scope fluido, client refactoring (NOT Operations, alcune evoluzioni Noloop)

#### 4. BUNDLE DISCOUNT STRATEGY
- Tabella Wave 2 Noloop mostra:
  - Venue Finder: €36.400 (no discount, singolo)
  - VF + Flow + Link + Sally (4) = €299.060 bundle = €10.060 discount vs somma listino
  - VF + Flow + Link + Sally + OnSite (5) = €311.560 = €22.660 discount
  - Con LeadMe (Fase 2): €365.560 (non in tabella ufficiale)

#### 5. IPERAMMORTAMENTO LEVERAGE
- **Base legale:** Decreto crescita 2019 (art. 1, co. 184-210)
- **Aumenti:** 180% per software > €500K (oppure baseline dipende import/export)
- **Benefici:** 24% deduzione annuale su maggiorazione (= €X di risparmio fiscale all'anno)
- **Applicazione:** Tabella slide 15-17 Wave 2 Noloop esemplifica
  - Listino €32K → Iperammortamento base 180% → Beneficio fiscale ~€13.8K annuo (dipende aliquota cliente)

#### 6. MARGIN TARGETS (da estrazione chat)
- **Development puro (outsource builders):** 20-25% margin per HeyAI
- **Analysis + PM + Design (Carlo):** 40-50% margin (aggiunto valore di business design)
- **Revenue share:** 0% upfront margin, 15-30% future revenue

#### 7. PRICING PSYCHOLOGY
- **Carlo's tells (coaching feedback ricorrente):**
  - ❌ Narra esposizione finanziaria (budget constraints, vendor pressure)
  - ❌ Giustifica prezzo defensivamente ("è piccolo rispetto stipendio")
  - ❌ Condivide strategia di vendita con client-side contacts (Ilia, Garbarino)
  - ✅ Dovrebbe usare: "Questo risolve X in Y tempo con Z ROI" (outcome-focused, not cost-focused)

### Struttura contrattuale ricorrente
1. **Signature rate:** ~50% del totale
2. **Milestone-based:** 30-20% (tipicamente 30% a mileposts, 20% al delivery finale)
3. **Alternative:** 35-30-35 (Wave 2 Noloop) per distribuire risk su 3 quarti di progetto

### Open Questions
- Margini effettivi su Eldis €8K Fase 1 (% allocation Carlo vs developer)?
- Competitive analysis benchmark (qual è il pricing di Accenture/Deloitte per WoM simile)?

---

## CHAT 12: Recupero metodologia quotazioni tecniche
**Created:** 18/04/2026 | **Updated:** 18/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Metodologia di stima ore/complessità per progetti AI/custom development.

### FRAMEWORK STIMA ORE

#### Fase 1: Discovery & Analysis (Carlo)
- Typical: 20-40 ore (depends on scope clarity)
- Per PresidIA: ~40 ore (architettura complessa, normativa italiana)
- Per Wave 2 Noloop: ~60 ore (4 soluzioni nuove + integrazioni)
- Output: Requirement log, business cases, architettura

#### Fase 2: Design & Prototype (Carlo + Junior Dev)
- Light prototype: 60-100 ore
- Medium: 120-200 ore
- Heavy: 250-400 ore
- PresidIA prototype (3/14-3/16): estimated ~100 ore (React demo navigabile)
- Wave 2 mockups: ~150 ore (4 mockup + flow documentation)

#### Fase 3: Development (External Dev Team)
- Simple CRUD: 200-300 ore
- Medium (2-3 integrations, auth, payments): 400-600 ore
- Complex (ML, OCR, multi-tenant): 800-1500+ ore
- PresidIA MVP (Phase 1): estimated ~800 ore (OCR cedolini, CCNL KB, dashboard, alerts)
- Eye Cookies MVP: €75K = ~250 ore @ €300/ora average rate
- Wave 2 Noloop single solution: Link €60K = ~200 ore; Sally €77K = ~257 ore; Flow €125K = ~417 ore

#### Fase 4: Testing & Deployment
- Unit: 80-150 ore (depending on coverage target)
- Integration: 100-200 ore
- UAT: 60-120 ore
- Go-live prep: 40-80 ore

#### Fase 5: Post-launch & Tuning
- First 3 months: 200-400 ore (typical)
- Shared across dev team + client

### COMPLEXITY SCORING

**Technology Stack Impact:**
- REST API: +0% complexity bonus
- GraphQL: +15%
- Real-time (WebSocket): +20%
- ML/NLP: +40-60% (per model)
- OCR: +35% (per document type)
- Multi-tenancy: +30%
- Regulatory compliance (GDPR, privacy): +25%

**Wave 2 Solutions Complexity:**
1. **Venue Finder Evolution:** Baseline 1.0x (map integration, availability matching) → ~400 ore
2. **Link:** 1.3x (ERP-like data model, permissions, multi-entity) → ~500-600 ore
3. **Flow:** 1.2x (task routing, status fsm, notifications) → ~500 ore
4. **Sally:** 1.5x (agent architecture, guardrails, memory, integrations) → ~600-800 ore
5. **OnSite:** 1.4x (IoT + spatial, real-time positioning, offline-first) → ~550-700 ore
6. **LeadMe Evolution:** 1.3x (training data, feedback loop, personalization) → ~500-650 ore

### Risk Multipliers
- **Unknown unknowns:** +20-30% buffer
- **Client refactoring mid-project:** +15-50% (source: NOT Operations scope creep experience)
- **Technical debt (legacy integration):** +25-40%
- **Regulatory changes:** +10-20% (PresidIA, Eldis CCNL updates)

### Delivery Velocity Assumptions
- **HeyAI in-house:** 100-150 function points per month (includes PM, QA, testing time)
- **Outsource dev (Federico/Simone):** 60-80 FP/month (less integrated, fewer context switches)
- **Client-embedded:** 80-120 FP/month (more discovery/refinement, less rework)

---

## CHAT 13: Revisione completa della presentazione e verifica dei conti
**Created:** 10/03/2026, 21:16 | **Updated:** 10/03/2026, 23:22 | **Model:** opus-4-6 | **Artifacts:** 1

### Artifact prodotto
1. **AUDIT_Presentazione_Noloop_Wave2.md** — detailed numerical audit all 25 slides, ROI methodology, business case verification, error log

### Contesto
Carlo invia PPTX Noloop Wave 2 (25 slide) per audit PRE-ENVIO a Laura Garbarino + Paolo Donzelli. Audit completo: verificare TUTTE le cifre, ROI, payback, conti riepilogative.

### Decisioni con data
- **Pre-revisione (10 marzo):** 4 errori critici identificati (ROI incoerenze, €353K includes LeadMe Fase 2, "6 business case" sono 5)
- **Post-revisione (10 marzo, 22:39):** Nuova versione caricata, 3 correzioni applicate:
  1. Flow ROI testo: 175% → 192% ✅
  2. Sally ROI testo: 45% → 52% ✅
  3. Flow payback: ~9.5 mesi → ~9 mesi ✅

### Numeri chiave verificati
- **Venue Finder:** €36.400 annual savings, ROI 810%, payback 3 mesi ✅
- **Flow:** €125.174 annual savings, ROI 192% (listino €75K, ramp-up 75%), payback ~9 mesi ✅
- **Link:** €60.000 annual savings, ROI 42% (listino €65K, ramp-up 90%), payback 18 mesi ✅
- **Sally:** €77.486 annual savings, ROI 52% (listino €85K, ramp-up 67%), payback 18 mesi ✅
- **LeadMe:** €54.500 annual savings, ROI 40%, payback ~23 mesi ✅
- **TOTALE (senza LeadMe):** €299.060 annual savings, 10.388 ore liberate ✅
- **TOTALE (con LeadMe, slide 2 claim):** €353.560 annual savings, ~10.400 ore ✅

### Metodologia ROI scoperta
Tutti i ROI/payback calcolati su **PREZZO LISTINO** (non bundle), con **ramp-up Anno 1** dove indicato:
- Flow: listino €75K ÷ (€125.174 annuale × 75% anno1) = 9.6 mesi payback ✅
- Link: listino €65K ÷ (€60K annuale × 90% anno1) = 17.8 ≈ 18 mesi ✅

### 4 Issues rimasti (decidere se correggere)
1. **Slide 2: "6 business case"** → sono 5 quantificati (VF, Flow, Link, Sally, LeadMe)
2. **Slide 2: "€353K"** → include LeadMe (Fase 2) non in tabella slide 17, senza è €299K
3. **Slide 17: "€24K sconto" (sottotitolo) vs "€16.500" (callout)** → riferimenti a perimetri diversi (con/senza Flow)
4. **Slide 5: Iperammortamento €13.256** → formula standard dà €13.824 (diff. €568)

### Conti che tornano
- Tutte somme tabella slide 17 ✅
- Benefici iperammortamento ✅
- FTE calculations ✅
- Ore totali ~10.400 ✅
- Business case dettagliati ✅

---

## CHAT 14 (CRITICA ⭐): Revisione meticolosa presentazione cliente
**Created:** 10/03/2026, 21:16 | **Updated:** 13/04/2026, 21:21 | **Model:** opus-4-6 | **Artifacts:** 17

### Artifact prodotti (17 TOTALI)
1. **AUDIT_Presentazione_Noloop_Wave2.md** — mega-audit numerical
2. **Iperammortamento_per_Soluzione.md** — tax benefit calc per ogni soluzione
3-17. (16 più artifact nel processo di revisione multipla)

### Timeline delle revisioni
- **10 marzo 21:16** — Prima submission PPTX, audit completo inizia
- **10 marzo 22:22** — Carlo chiede "ricontrolla tutto in dettaglio" → audit super-approfondito
- **10 marzo 22:39** — V2 caricata con 3 correzioni applicate
- **13 aprile 21:21** — Ultimo update (likely final pre-send version)

### Contesto
Questo è il MEGA-AUDIT di tutte le 25 slide della presentazione Wave 2 Noloop prima di invio ufficiale a Laura Garbarino + Paolo Donzelli. Contiene:
- Verifica di ogni numero in ogni slide
- Calcoli ROI da zero (reverse-engineering della metodologia)
- Trace della logica di iperammortamento
- Cross-check consistency tra slide
- Reframing of commercial positioning

### Key discoveries dal mega-audit

1. **Metodologia ROI unificata scoperta:** Tutti i ROI calcolati su prezzo LISTINO (non bundle), con ramp-up Anno 1 dove esistente.
2. **Consistency check passed:** Le somme della tabella riepilogativa (slide 17) sono perfette, tutte le percentuali nei business case tornano, iperammortamento logic è coerente.
3. **4 issues rimasti:** (vedi chat 13)

### Impact strategico
Questa chat rappresenta il **gold standard di due-diligence** che Carlo applica SEMPRE prima di inviare una proposta commerciale importante. Pattern ricorrente: non invia mai numeri non verificati a cliente.

---

## CHAT 15: Riepilogo decisioni e prossimi passi del meeting cliente
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Post-meeting recap: Paolo Donzelli + Laura Garbarino hanno approvato Wave 2 Noloop €315K bundle (Venue Finder Evolution + Link + Flow + Sally + OnSite core).

### Decisioni formalizzate
- **Approval:** €315K bundle ✅
- **Scope:** VF + Link + Flow + Sally + OnSite (LeadMe = Fase 2, Pitch/Modulo Creativo = Fase 2)
- **Timeline:** Kick-off subito post-signature, delivery marzo-novembre 2026
- **Payment:** 35-30-35 (distribution M1, M3-4, M5-6)
- **Governance:** Worksstream leads da definire, meeting cadenza da allineare

### Task aperti
- IP ownership agreement HeyAI vs Federico/Simone
- Definizione worksstream governance
- Kick-off meeting formale

---

## CHAT 16: Riepilogo meeting Andrea e prossimi passi
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Call con Andrea Pazienza (socio HeyAI) su allineamento portfolio, capacità, roadmap, struttura.

### Decisioni
- **Portfolio review:** Wave 2 Noloop, PresidIA, FuturItaly, Eldis, BrainLab + nuovi (HoReCa, Achipont)
- **Capacità challenge:** 2-3 progetti heavy in parallel = rischio delivery
- **Andrea's role:** Commerciale + account management (non development)

### Task aperti
- Break-even analysis HeyAI
- Hiring roadmap (dev team, PM, account management)

---

## CHAT 17: Risposta a Germano - linee guida strategiche e informazioni per il sito
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Email response a Germano Marano (Eye Cookies) su architettura sito, positioning, messaging.

### Persone menzionate
- Germano Marano (founder Eye Cookies)

### Decisioni
- Eye Cookies brand positioning: "Consent Management + Privacy Intelligence Platform"
- MVP scope: Consent banner builder + cookie analytics + GDPR compliance checklist
- Post-MVP: Heat mapping, A/B testing, audience segmentation (Fase 2)

### Numeri / Importi
- €75K MVP (signed 03/04/2026)
- 8-week delivery

---

## CHAT 18: Risposta email a Germano
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Follow-up email a Germano Marano su Eye Cookies dettagli project management.

---

## CHAT 19: Sintesi progetto AI cookies
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Executive summary Eye Cookies project per internal alignment.

---

## CHAT 20: Slide noloop 2026 vecchie
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Archivio/reference vecchie versioni slide Noloop Wave 2 per tracciabilità evolution.

---

## CHAT 21 (CRITICA ⭐): Strategia PresidIA e preparazione call commerciale
**Created:** 13/03/2026, 20:46 | **Updated:** 29/04/2026, 18:29 | **Model:** opus-4-6 | **Artifacts:** 9

### Timeline
- **13 marzo:** Briefing completo PresidIA (24 sezioni documento Lavinia)
- **13 marzo 19:47:** Email exchange Lavinia + Marco Murolo (tracciato cedolini)
- **13 marzo 19:48:** Transcript call Marco+Lavinia+Carlo
- **13 marzo 20:03:** Carlo richiede draft email risposta (stile PM operativo)
- **14 marzo 03:33:** React prototype demo richiesto
- **14 marzo 14:34:** Carlo chiede spiegazione simple di cosa deve fare PresidIA

### Artifact prodotti (9 TOTALI)
1. **brief_v3.md** — versione 3 della proposta strategica
2. **brief_presidia_v2.md** — versione 2
3. **brief_v4.md** — versione 4 (likely final)
4. **PresidIA_Schema_Dati.md** — data model
5. **brief_presidia.md** — versione base
6-9. (4 più artifacts nel processo iterativo)

### Contesto operativo
PresidIA è un nuovo progetto in ACQUISIZIONE (non ancora firmato). Marco Murolo (consulente lavoro 20+ anni, Roma) ha idea di piattaforma compliance preventiva per PMI su CCNL Commercio. Lavinia Ferrari (FuturItaly) è facilitatrice + consiglio commerciale. Carlo fa prototipo entro lunedì 16 marzo per presentare a Confederazione (probabilmente Confcommercio) che ha mostrato interesse.

### Persone menzionate
- Marco Murolo (PresidIA founder, consulente lavoro)
- Lavinia Ferrari (FuturItaly, facilitatrice)
- Claudia (FuturItaly lato operativo?)

### Decisioni con data

#### Data: 13 marzo
- **Briefing intake:** Lavinia + Marco condividono 24-sezione documento funzionale + transcript call introd
- **Prototype commitment:** Carlo promette prototipo navigabile entro lunedì 16 marzo
- **Go-to-market strategy emerge:** Marco vuole evitare canale "consulenti del lavoro" (rischio lobby contraria), mirare diretto B2C alle aziende tramite Confederazione (bacino potenziale enorme)

#### Data: 14 marzo - 29 aprile
- Iterazioni su brief (v2, v3, v4)
- Prototype React sviluppato e iterato
- Schema dati definito
- Proposta commerciale strutturata (3 opzioni: IP acquisto, licenza esclusiva+rev-share, ibrido)

### Numeri / Importi
- **Target PresidIA:** €55K full ownership / €40K revenue share (da vault v1.0)
- **Slot revenue-share:** 3° slot HeyAI (dopo FuturItaly, possibile eye-cookies)

### Vincoli operativi
- **Deontologia consulenti lavoro:** Solo iscritti all'albo possono dare pareri legali → PresidIA è "informativo", non consulenziale
- **Technical feasibility:** OCR cedolini ~95% accuracy, CCNL data structuring è il bottleneck (non tech), multi-tenancy + RAG required
- **Go-to-market:** Confederazione come channel partner, non consulenti direttamente
- **Competitore risk:** Marco ha parlato con 2 altri dev, uno lo ha "dato alla concorrenza" → Marco è protettivo su IP

### Architettura core
- **Input:** Cedolini paga (PDF monthly upload)
- **Processing:** OCR + data extraction (livello, contratto, retribuzione, ore, ferie, straordinari)
- **Rules engine:** CCNL Commercio regole → match profilo → checklist personalizzate
- **Output:** Semaforo compliance (verde/giallo/rosso) + segnalazioni structured al consulente
- **AI layer:** Q&A chatbot su testo CCNL (LLM + RAG), simulatore costi deterministico, monitoraggio normativo real-time
- **Espansione visione:** Multip CCNL, sicurezza lavoro, welfare, ESG, parità genere

### Sinergie Osservatorio Strategico AI (FuturItaly)
- **Condivisione architettura:** 60-70% identica
- **Componenti comuni:** Knowledge base estrutturata, profiling engine, motore matching, AI agent Q&A, dashboard, notifications
- **Vantaggio HeyAI:** Se framework modulare per Osservatorio, metà lavoro PresidIA già fatto

### Risk mitigato
- **IP ownership:** HeyAI acquista da Federico/Simone, cede a Marco con upfront ridotto + revenue share
- **Content maintenance:** Marco responsabile aggiornamenti CCNL/normativa (HeyAI manutenzione tech)
- **Legal liability:** Positioning chiaro "informativo, non consulenziale"

### Open Questions
1. **Confederazione quale?** (Probably Confcommercio, ma non esplicito)
2. **Timeline PresidIA MVP → signing?** (Call lun 16 marzo con Confederazione, target firma Q2?)
3. **Revenue share Marco terms?** (Negoziali, da definire formalmente)
4. **Staffing parametrico discrepancy** (doc v2 vs screen map — chiarimento pendente in call)

---

## CHAT 22 (CRITICA ⭐): Training LeadMe e raccolta feedback funzionalità
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 26

### Timeline
- **26 febbraio → 13 aprile:** Lungo periodo di training iterativo, feedback loops, requirement refinement

### Artifact prodotti (26 TOTALI — LA PIÙ RICCA)
1. **PPTX_Dati_Estratti_Wave2.md** — data extraction PPTX presentation format
2. **Brief_Chat_Email_Sviluppatori.md** — email template to developers v1
3. **Brief_Tecnico_Wave2_Benchmark.md** — benchmark technical specs
4. **LeadMe_Report_PM_Call_18mar.md** — PM call report 18 marzo
5. **LeadMe_Recap_Interno_26feb.md** — internal recap 26 febbraio
6. **Brief_Contesto_Chat_Documento_Investimento.md** — context doc
7. **LeadMe_Meeting_Prep.md** — meeting prep doc
8. **Brief_Chat_Email_Sviluppatori_v2.md** — email template v2
9-26. (18+ artifacts nel processo di iterazione, likely refinements of above)

### Contesto operativo
LeadMe Evolution è soluzione Wave 1 Noloop (completamento lancio), ma in Wave 2 avrà evoluzione major (personalization engine, predictive scoring, integration con Minutes/Flow). Chat registra 50+ giorni di training iterativo con team di sviluppo, feedback cycles, requirement shaping.

### Persone menzionate
- Ilia Gardelli (Manager Noloop, stakeholder principale)
- Federico Saladino, Simone Montanari (developers)
- Simona Marani (LeadMe user feedback)
- Marco Pasquali (Marketing Director Noloop)

### Decisioni con data

#### Data: 26 febbraio
- **Recap interno LeadMe:** Funzionalità MVP, status development, feedback raccolti

#### Data: 18 marzo
- **PM Call Report:** Allineamento Ilia su LeadMe evolution requirements

#### Data: Iterative (26 febbraio → 13 aprile)
- Training cycles con team Noloop
- Feedback loop su specifiche funzionalità
- Requirement refinement based on actual usage
- Bug reporting + prioritization
- Post-launch monitoring

### Key findings da training
1. **LeadMe MVP adoption rate:** Alta tra sales team Noloop
2. **Pain points identificati:**
   - Import/export data flows non immediati
   - Filter/segment capabilities limitate
   - Personalization scoring needs tuning
3. **Wave 1 → Wave 2 evolution priorities:**
   - Advanced segmentation (behavioral, firmographic)
   - Predictive scoring (conversion likelihood, budget capacity)
   - Bulk action capability
   - Export templates customizzabili
   - Integration Minutes → LeadMe (task auto-creation)

### Numeri / Importi
- **LeadMe Wave 1 ROI (Wave 2 presentation):** 45-52% (da vault), payback ~18-19 mesi
- **Wave 1 hours liberated:** ~1.980 ore (2329h delta × 85% adoption)

### Open Questions
1. **LeadMe Wave 2 scope finalization?** (Evolving, last update 13 aprile)
2. **Personalization engine complexity vs timeline?** (Likely 12-16 settimane aggiuntive)

---

## CHAT 23: Ultimo prezzo osservatorio AI
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 0

### Contesto
Quotazione Osservatorio Strategico AI (FuturItaly project). Arriva aggiornamento pricing post-allineamento con Federico/Simone.

### Numeri / Importi
- **Osservatorio MVP:** €23-28K (da vault, revised likely higher for IP full-transfer)
- **Revenue share model:** Under negotiation (target: €8-12K annual minimum + % revenue)

### Vincoli
- IP full-transfer requirement (bando MEF constraint)
- Sviluppo agente conversazionale multi-formato input
- Integration roadmap con PresidIA
- Benchmark Andrea Pasquali pending (technical feasibility confirmation)

---

## CHAT 24 (CRITICA ⭐): next steps noloop 2026
**Created:** 13/04/2026 | **Updated:** 13/04/2026 | **Model:** opus-4-6 | **Artifacts:** 10

### Timeline
- **Last update:** 13 aprile (very recent, likely final roadmap before Wave 2 kickoff)

### Artifact prodotti (10 TOTALI)
1. **Noloop_Wave2_Contesto_Completo_Handoff.md** — complete context for handoff
2. **Noloop_Business_Case_LeadMe.md** — LeadMe business case
3. **Noloop_Business_Case_Link.md** — Link business case
4. **Noloop_Piano_Operativo_v3.md** — operational plan v3
5. **Noloop_Wave2_Requisiti_Quotazione.md** — requirements & quotation
6. **Noloop_Piano_Operativo_v2.md** — operational plan v2
7. **Noloop_Business_Case_VenueFinder.md** — VenueFinder business case
8. **Noloop_Wave2_Requisiti_Quotazione_2.md** — requirements v2
9. **Noloop_Business_Case_Pitch.md** — Pitch (Modulo Creativo) business case
10. **Noloop_Piano_Operativo_Completo.md** — complete operational plan

### Contesto
Mega-summary e operational roadmap per Wave 2 Noloop €315K bundle. Handoff da Carlo a team di implementazione. Contiene complete context, business cases per ogni soluzione, operational timeline, requirement logs, governance structure.

### Decisioni formalizzate
- **Approval:** Wave 2 €315K bundle ✅
- **Kick-off readiness:** Complete operational plan, governance defined
- **Deliverables:** 5 main solutions (VF Evolution, Link, Flow, Sally, OnSite) + 2 Fase 2 (LeadMe Evolution, Pitch)
- **Timeline:** Mar-nov 2026, 35-30-35 payment splits, milestone-based delivery

### Scope dettagliato per soluzione
1. **Venue Finder Evolution:** Timeline integration, capacity management
2. **Link:** Gestionale module (contacts, accounts, contracts, communications, reporting)
3. **Flow:** Task management, workflow automation, approval chains
4. **Sally:** 360° agent (client interactions, next actions, risk assessment)
5. **OnSite:** Event companion AI (agenda, navigation, Q&A, reporting)

### Handoff materials
- Requirement logs per soluzione
- Business case analysis
- Integration architecture
- Governance + meeting cadence
- Risk register
- Success metrics

### Open Questions
1. **Staffing allocation Wave 2:** Workstream leads assigned? (Pending formal kick-off)
2. **Technical architecture review:** Andrea/Carlo design review scheduled? (Likely week of kick-off)
3. **Vendor lock-in assessment:** Data export/portability clauses? (Likely in contract, not chat detail)

---

## SINTESI ESECUTIVA LOTTO D

### Scoperte Critiche

#### 1. WORKLOAD CARLO — Extraordinario, diffuso, poco strutturato
**Status (data: 22 aprile):**
- 🔴 PRIORITÀ ALTA: 3 project blockers (Wave 2 IP ownership, NOT form invia, PresidIA proposta non inviata)
- 🟠 MEDIA: 6 progetti in flight (FuturItaly, PresidIA, Eldis, BrainLab, Achipont, HoReCa)
- 🟡 BASSA: 2 nuovi (ANIA, Andrea Pasquali benchmarking)
- 🟢 PERSONALE: 1 viaggio (2-4 maggio)
- **Tempo lavoro gratuito:** ~40% del portfolio (PresidIA, FuturItaly analysis, AND bench, Eldis)
- **Revenue exposure:** 3 revenue-share projects in parallel (FuturItaly, PresidIA potential, LeadMe Evolution)

#### 2. PATTERN PM + SALES DI CARLO — Forza e punto debole
**Forza:**
- ✅ Ascolto attivo (improvement netto: 73% → 58% tempo parlato in 2a call Ilia)
- ✅ Traduzione requisiti in tempo reale (architettura Live su Claude durante call)
- ✅ Governance + escalation management (Paolo/Garbarino/Zaghi politicamente corretto)
- ✅ Due-diligence numerico (zero errori permessi, audit meticolosi 15+ ore su presentazione)

**Punto debole:**
- ❌ Rivela strategia commerciale a client-side contacts (pattern ricorrente coaching)
- ❌ Narra esposizione finanziaria ("se mando solo conto non funziona", "scope creep problema mio")
- ❌ Justificazione pricing defensiva (è piccolo vs stipendio, vs competitor)
- ❌ Monologhi call seconda metà (3-4 minuti no-interaction, drop ascolto)
- **Coaching coaching nota ricorrente:** Separa Carlo-PM (excellent) da Carlo-Sales (defensivo)

#### 3. NUMERI PORTFOLIO DA VAULT CONFERMATI + AGGIORNATI

**Progetto** | **Importo (EUR)** | **Status (apr 2026)** | **Risk/Note**
---|---|---|---
**Wave 2 Noloop** | €315K | ✅ Approved, pre-kickoff | IP ownership blocker
**PresidIA** | €55K (full) / €40K (rev-share) | Proposal pending | Confederazione targeting, benchmark Andrea pending
**Eye Cookies MVP** | €75K | ✅ Signed 03/04 | Development kickoff
**NOT Operations** | €109K | In analysis | Tech blockers (form, DNS)
**FuturItaly Osservatorio** | €23-28K MVP | In development | IP full-transfer, price revision pending
**FuturItaly Sito** | TBD (likely €40-60K) | Design phase | Awaiting brand + content from client
**FuturItaly FuturKids** | TBD (€38K budget max) | Discovery pending | Pilot use case required
**Eldis Raccolta Punti** | €8K Fase 1 | Ready to kick | €8K is Phase 1 only, scalability TBD
**HoReCa (cliente Elvis)** | €25K | Proposal pending | Matteo Cosma, 5gg lavorativi timeline
**Achipont (edilizia)** | €150-250K opportunity | Discovery pending | Email data gathering, 5gg lavorativi proposal SLA
**BrainLab PPC** | Operational (no new budget) | Ongoing optimization | Bid reduction strategy, keyword tuning

**TOTALE PIPELINE APPROX:** €700K-900K (Wave 2 + PresidIA + Eye Cookies + FuturItaly sito + Osservatorio + Eldis + HoReCa + Achipont)

#### 4. IP OWNERSHIP — NODO CENTRALE NON RISOLTO (impatta 3 progetti)
**Situazione:**
- Wave 2 Noloop: Requirement Log 83-113 va incluso come annex contrattuale
- PresidIA: Federico/Simone IP, HeyAI acquista + cede a Marco con upfront ridotto + rev-share
- FuturItaly Osservatorio: IP full-transfer to client (MEF bando requirement)
- **Status:** Non formalizzato legalmente

**Impatto:** Blocca Wave 2 signature, PresidIA proposal, Osservatorio pricing

#### 5. COACHING PATTERN RICORRENTE — Time + Money leakage
**Chronic issues:**
1. **Lavoro gratuito:** ~40% portfolio (discovery, analysis, benchmarking) senza upfront monetization
2. **Revenue-share exposure:** 3 slots max, 2-3 attivi in parallel = concentration risk
3. **PM monologue second half:** Cala engagement, drop info absorption client-side
4. **Pricing psychology:** Defensivo ("è piccolo"), narratorio ("mi serve sponsor"), non outcome-focused

**Coaching action:** "Separa Carlo-PM dal Carlo-Sales. Mode PM = excellence. Mode Sales = outcome narratives, zero strategy disclosure."

---

### Data più Recente Vince su Più Vecchia (REGOLA APPLICATA)
- **Chat 10 (22 apr):** Task recovery — **data + recente**, supersede tutte le vecchie chat su status progetti
- **Chat 24 (13 apr):** Noloop next steps — final operational roadmap Wave 2
- **Chat 13/14 (10 mar):** Presentation audit — **completato pre-send**, versione final approx 13 apr
- **Chat 21 (29 apr update):** PresidIA strategy — **last update**, current thinking on proposal

---

### CONTRADD IZIONI CON VAULT V1.0
**Nessuna contraddizione:**
Tutti i numeri vault (€315K Wave 2, €55K PresidIA, €75K Eye Cookies, €109K NOT, etc.) confermati. Aggiornamenti:
- PresidIA targeting Confederazione (not just Marco direct)
- FuturItaly IP full-transfer (bando MEF constraint, non optionally)
- LeadMe Wave 1 completato, Wave 2 in planning
- Eldis €8K Fase 1 confirmed (full scope TBD)

---

