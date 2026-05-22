# ANALISI INTEGRALE LOTTO C — 12 Chat Carlo Sanvoisin (HeyAI)
**Data analisi:** 5 maggio 2026  
**Modelli:** Opus 4.6, Haiku 4.5  
**Chat coperte:** Email operativa → Pricing HeyAI (con 3 "buco nero" approfonditi)

---

## CHAT 1: Email cliente con domande operative Noloop
**Assente dalla lista esportata o con nome variato** — non trovata in mapping diretto.

---

## CHAT 2: Email con tono economico e allegati Gantt
**Created:** 27/03/2026 16:35  
**Updated:** 29/04/2026 18:30  
**Modello:** Opus 4.6  
**Artifacts:** PM_Dashboard + Gantt HTML + Architecture diagram

### Contesto operativo
Email ricapitolativa ai dev Federico Saladino e Simone Montanari post-call 23/03 con tono **fermo su economica** — margine ulteriormente compresso post-riduzione scope (Flow tolto a metà = -70k, Pitch escluso = -26k). Strutturata in 8 sezioni + requirement log + architettura.

### Persone menzionate
- **Federico Saladino, Simone Montanari** (dev senior, collaboratori con accordi IP condivisa)
- **Paolo Donzelli** (CFO Noloop)
- **Laura Garbarino** (Co-founder AD Noloop)
- **Arianna Giordanella** (Op tester Crowd)
- **Lorena Cavecchi** (Resp MICE)
- **Andrea Pazienza** (Head of AI Pay-per-Use)
- **Bruno Mattucci** (Amm HeyAI, pressante su IP ownership)

### Decisioni con data
- **27/03** — Requirement log Wave 2 confermato + inclusione Venue Finder accelerato
- **27/03** — Crowd requisiti confermati da trascrizione demo
- **27/03** — Minutes requisiti definiti (8 sottocategorie)
- **01/04** — Wave 2 deadline spostata a **settembre** (non agosto) per buffer
- **01/04** — Flow delivery tolto, Pitch rimosso, LeadMe ridefinito in moduli
- **01/04** — IP acquisition confermata come "non negoziabile" da Bruno — **blocca Wave 2**
- **01/04** — Federico/Simone si sentono 02/04, decisione IP su loro lato

### Numeri / Importi (evoluzione)
- **Margine progetto** post-scope: "strettissimo" (70k di Flow + 26k Pitch rimossi, quotazione dev invariata)
- **Venue Finder** anticipato metà aprile (già pagato anticipatamente)
- **Wave 2 budget** (implicito): €315K bundle con dilazione 35/30/35 (non confermato formalmente)
- **NOT Wave 2** €55K (menzione 01/04)
- **NOT Operations** €109K (contestuale)
- **Investimento complessivo** Fede/Simo: ~€350-380K per Wave 2 (costo interno)
- **Markup implicito** 70% standard per Wave 2

### Vincoli operativi / preferenze cliente
- **Crowd MVP entro 15/04** per test Arianna/Lorena con evento reale (no test parallelo = rischio)
- **Eldis compilatore** — test deadline 10/04 Marta (Stefania Solidoro)
- **Minutes** — trascrizione call esterne in Wave 2 (2 sett da start)
- **Link/Flow** interdipendenti, chiudono insieme agosto (ora settembre)
- **LeadMe** — rilascio standalone possibile maggio/giugno, full integration agosto
- **Sally** incremental con ogni rilascio
- **ANAC accreditamento** 3-8 sett esterno, non blocca MVP
- **Test cliente** responsabilità loro, ma HeyAI fa preventivo interno

### Citazioni testuali da preservare
> "Il mio margine su questo progetto è strettissimo. Sono consapevole che anche loro hanno applicato scontistiche importanti, ma è fondamentale che venga messo il massimo effort sulla qualità."

> "Bruno insiste che prima di partire formalmente con Noloop 2026 serve un accordo scritto sulla proprietà intellettuale. Non parte la Wave 2 senza proprietà intellettuale piena degli applicativi."

> "Federico e Simone si sentono domani (2 aprile) e ti ricontattano a stretto giro. Simone ha lasciato intendere che la Wave 2 si farà partire in un modo o nell'altro."

### Task aperti emersi
1. **Ricevute stime Fase 2 LeadMe** da Federico? (mandate in call 01/04, conferma necessaria)
2. **Email recap dev** — mandare solo aspetto tecnico, **non** sezione economica + IP (attendere risoluzione)
3. **Gantt deadline** spostata da agosto a settembre
4. **Quotazione Donzelli** (315K 35/30/35 dilazione) — quando presentarla? Timing attendere closure IP
5. **Call Garbarino** per accettazione quotazione — ancora da fissare
6. **Email pressante Arianna/Lorena** deadline 15/04 test Crowd
7. **Email Stefania/Marta** Eldis — test deadline 10/04

### Artifact prodotti
- **PM_Dashboard_01_Aprile_2026.md** — roadmap scontistica per dev
- **gantt.html** — cronoprogramma modulare (da aggiornare settembre)
- **arch_wave2_proprieta_dati.png** (ricalc) — architettura senza Crowd/VenFinder/OnSite, Sally con descrizione aggiornata

### Link/risorse esterne
- N/A (solo riferimenti interni Wrike, Notion)

### Pattern ricorrenti
1. **IP ownership** come nodo critico ricorrente (Bruno vs Federico/Simone antagonismo potenziale)
2. **Scope reduction** compensata da richieste di effort massimo (dynamic equilibrium)
3. **Timeline slittamento** giustificato da buffer naturale (agosto pausa, settembre ready)
4. **Requirement log come perimetro vincolante** — ripetutamente menzionato
5. **Testing cliente responsabilità loro** ma con support HeyAI preventivo

### Contraddizioni con vault
- **NOT** — vault dice operazioni saldato, ma qui emerge NOT Wave 2 €55K + Operations €109K como PROGETTI APERTI non fatturati
- **Deadline** — vault accenna agosto, chat 01/04 sposta a settembre formalmente

### Open Questions
- **IP resolution** (Federico/Simone decision 02/04) — esito?
- **LeadMe standalone deploy** — davvero maggio/giugno o slittato?
- **BC integration** (accennata Crowd) — stato effettivo?
- **Flow vs Link nomenclatura** — sono la stessa cosa?

---

## CHAT 5: Estrazione dati da PowerPoint in formato markdown
**Created:** 27/03/2026 16:22  
**Updated:** 27/03/2026 16:29  
**Modello:** Opus 4.6  
**Artifacts:** Noloop_Roadmap_2026_Def_2_EXTRACTED.md (completo)

### Contesto operativo
Estrazione pedissequa di PPTX Noloop Wave 2 (25 slide) con tutte le tabelle, speaker notes, metadati. Deliverable: markdown strutturato ingestibile da LLM per riutilizzo in brief/quotazioni. Qualità alta — nessuna perdita dati.

### Artifact
- **Noloop_Roadmap_2026_Def_2_EXTRACTED.md** — 25 slide + speaker notes + tabelle business case verificate

---

## CHAT 6: Evoluzione LeadMe — tre macro-aree di intervento
**Created:** 13/03/2026 16:14  
**Updated:** 13/03/2026 16:14  
**Modello:** Opus 4.6  
**Artifacts:** Nessuno (chat framework)

### Contesto operativo
Breve scambio per definire struttura di mail top-down a Laura su 3 macro-aree LeadMe evolution. Chiede placeholder, tono down-top. Tronco — mail non completata in chat, schema preparato per varianti.

### Task aperti
- Definire 3 macro-aree concrete (non nel record)
- Scrivere mail finale a Laura

---

## CHAT 7: FuturItaly ⭐ (NEL "BUCO NERO" PRECEDENTE)
**Created:** 09/02/2026 18:17  
**Updated:** 09/02/2026 20:04  
**Modello:** Opus 4.6  
**Artifacts:** Quotazione Osservatorio Strategico AI (DOCX rifatto)

### Contesto operativo
**CLIENTE NUOVO** — Lavinia Ferrari / FuturItaly (studio legale) → Osservatorio Strategico AI per bandi gare pubbliche. Integrazione 5+ fonti (ANAC, TED, UNGM, Incentivi.gov.it, EU Funding) + AI Agent scoring + Dashboard. Progetto strategico per IP retention + revenue share future. Primo banco prova per nuovo modello di quotazione con IP ceduta a prezzo ridotto (HeyAI riusa). **COSTO INTERNO**: ~30K (da Pasquali, non ancora confermato da Fede/Simo).

### Persone menzionate
- **Lavinia Ferrari** (FuturItaly, champion progetto) — ha introdotto Marco Murolo (PresidIA)
- **Leonardo Delbufalo** (internal contact FuturItaly) — ambiziocircle, vuole PowerPoint di vendita interna
- **Paolo Passaro** (30 anni finanza agevolata, end-user, propone "sviluppo congiunto")
- **Lidia Boccanera** (end-user specializzato Interreg/EU)
- **Andrea Pasquali** (Deloitte ex, benchmarker indipendente — stima 30K costo, da validare)
- **Federico Saladino, Simone Montanari** (dev — quotazione in standby)

### Decisioni con data
- **09/02** — Modello: **IP retention** (HeyAI mantiene, FuturItaly licenza perpetua non-sublicenziabile)
- **09/02** — Range pricing: **€18-26K** iniziale, ma sottodimensionato su analisi tecnica
- **09/02** — Sconto commerciale **10%** senza condizioni (risk: regalato)
- **09/02** — Approach: **MVP incrementale** (cliente d'accordo)
- **09/02** — ANAC blocco 3-8 sett, non impatta MVP (go-live con fonti pronte)

### Numeri / Importi (evoluzione)
- **Costo interno stimato** (Pasquali ricalibrato): ~€30K (FRAGILE — non confermato dev effettivi)
- **Range pricing iniziale**: €18-26K (sotto benchmark mercato 60-120K per SaaS B2B di questa complessità)
- **Markup implicito**: 55-100% (range ampio, risks margine)
- **Sconto "commerciale"**: 10% non condizionato
- **Margine netto stimato** a €18K: praticamente assente (costo 30K + sconto = espositione)
- **Supporto post-lancio**: 30 giorni (sottodimensionato per OCR-dipendence)
- **Costi ricorrenti post-MVP**: €200-400/mese cloud+API LLM (tolta da rascrittura — **RISCHIO**)

**Ricalibrazione consigliata (da chat):**
- Range salito a **€22-28K** (floor più protettivo)
- Sconto 10% **condizionato** (tempi pagamento, case study)
- **Floor margine** 15K → raggiunto con sconto 25% vs lista 62K
- Supporto esteso 60gg correttivi + 90gg OCR

### Vincoli operativi / preferenze cliente
- Budget "non lo diremo mai neanche sotto tortura" (Leonardo Delbufalo) → negoziazione verso il basso certa
- Approccio incrementale/MVP confermato
- Deliverable: PowerPoint vendita interna (oltre Word contrattuale)
- ANAC accreditamento responsabilità congiunta (legale FuturItaly)
- Modello "pilota" per rivendita futura (Paolo Passaro)
- Esclusiva potenziale su "compliance organizzativa PMI italiane" (da ristringuere a CCNL Commercio)

### Citazioni testuali da preservare
> "Il modello è: prezzo più basso perché HeyAI mantiene la IP e può riutilizzare il motore per altri clienti."

> "Se FuturItaly cresce e rivende il servizio ai suoi clienti usando la tua piattaforma, tu non hai nessuna protezione. Licenza d'uso perpetua, non trasferibile e non sublicenziabile, riservata esclusivamente all'uso interno."

> "A €18k tu stai praticamente girando il lavoro ai fornitori al costo, senza margine per il tuo ruolo di PM, per la gestione del cliente, per il testing, per il training, per i 2 mesi di assistenza post-lancio."

### Task aperti
1. **Costo interno da Federico/Simone** — conferma 30K o ricalcolo
2. **Business plan FuturItaly** (ARPU × volumi anno 1-2) — call informale con Lavinia
3. **Esclusiva** — ristretta a CCNL Commercio con condizionamenti performance
4. **Costi ricorrenti** — esplicitare chi paga cloud/API a partire mese 4
5. **Responsabilità limitata** — aggiungere clausola (sistema = supporto, non garantisce completezza risultati)
6. **Change of control** — definire trigger + minimo garantito (15-20% valore transazione)

### Artifact prodotti
- **Quotazione_FuturItaly_Osservatorio_v1.docx** (originale, range 18-26K, IP retention)
- **Quotazione_FuturItaly_Osservatorio_v_RICALIBRATA.docx** (proposta Claude, range 22-28K, clausole ristrette IP)

### Link/risorse esterne
- ANAC PDND (Piattaforma Digitale Nazionale Dati)
- TED (Tenders Electronic Daily)
- UNGM (UN Global Marketplace)
- Incentivi.gov.it (portale incentivi italiani)
- EU Funding & Tenders

### Pattern ricorrenti
1. **Range pricing ampio** as leva commerciale (rischio floor troppo basso)
2. **IP retention come valore strategico** per HeyAI vs clienti pre-serie
3. **Incrementalità MVP** richiesta cliente standard
4. **Costi ricorrenti assorbiti initialy** vs. esplicitati post-lancio (erosione margine)
5. **Esclusiva geografica non ristretta abbastanza** (zona grigia su non-compete)

### Contraddizioni con vault
- Vault dice "€14K+€7.846 Futuritaly Osservatorio" — chat FuturItaly propone **€22-28K**, delta **+€6-10K**
- Potrebbe essere progetto diverso o aggiornamento pricing

### Open Questions
- **FuturItaly Osservatorio** è lo stesso di Futuritaly €14K vault o progetto diverso?
- Quale versione quotazione è stata mandata al cliente (v1 §18-26K vs. ricalibrata 22-28K)?
- **Future Kids** (mentioned in chat 2 call 01/04) è sotto FuturItaly o progetto separato?

---

## CHAT 8: Gestione clienti e progetti HeyAI ⭐ (NEL "BUCO NERO" PRECEDENTE)
**Created:** 11/02/2026 16:46  
**Updated:** 11/02/2026 17:08  
**Modello:** Opus 4.6  
**Artifacts:** HeyAI_Tracker_Clienti_Progetti_Collaboratori.xlsx (4 fogli)

### Contesto operativo
**Tracker Excel sistematico** per gestire: clienti + progetti + contratti (stato firma/controfirma/PEC) + collaboratori + fatturazione (doppio modello: mensile marketing + tranche AI). Struttura omogenea, color-coding stato, menu dropdown. **CRITICO** per inventory cliente/progetto aggiornato.

### Persone menzionate
- **Soolutions** (agenzia tech — segue tutti progetti AI)
- **Andrea Dominici** (fotografo/videomaker)
- **Tizia** (montatore video, placeholder)
- Clienti: Giardino, Pico's, Eldis, NoLoop, NOT, Farmacia Monti Parioli

### Decisioni con data
- **11/02** — Struttura Excel a **4 fogli** (anagrafica + fatt.marketing + fatt.AI + collab)
- **11/02** — Modello **due fatturazioni**: mensile (marketing/comm) vs. tranche (AI/progetti)
- **11/02** — Colori condizionali: **verde=fatto, rosso=no, giallo=in corso**
- **11/02** — Uno riepilogo automatico per fogli (totali progetto, importi per tipo)

### Numeri / Importi (da tab collab)
- Progetti marketing (social/web): ~6 attivi
- Progetti AI: ~6 attivi (Eldis, NoLoop ×3, NOT ×2)
- Fatturato mensile marketing (implicito): non quantificato
- Fatturato tranche AI: non quantificato (dipende contratti)

### Vincoli operativi
- Fatturazione a **3 tranche** per clienti AI standard
- Fatturazione a **2 tranche** per collaboratori AI
- Fatturazione **mensile ricorrente** per marketing
- Ogni riga collaboratore = progetto assegnato (permette later merge)

### Artifact prodotti
- **HeyAI_Tracker_Clienti_Progetti_v1.xlsx** — struttura iniziale (2 fogli)
- **HeyAI_Tracker_Clienti_Progetti_v2.xlsx** — versione ridotta aggiunti importi/tranche
- **HeyAI_Tracker_Clienti_Progetti_v3.xlsx** (FINALE) — 4 fogli, doppio modello billing, color-coding, riepiloghi automatici

### Open Questions
- Quali clienti/progetti sono nel tracker a oggi (05/05)?
- Fatturato storico dei 12 progetti (per benchmark pricing)?

---

## CHAT 9: Miglioramenti al brief di pricing HeyAI
**Created:** 09/04/2026 19:50  
**Updated:** 29/04/2026 21:20  
**Modello:** Opus 4.6  
**Artifacts:** PresidIA_Proposta_Investimento_v1, v2, v3 (DOCX con evoluzioni)

### Contesto operativo
**CHAT MASSIVA di controllo pricing** per PresidIA (SaaS PMI governance lavoro, CCNL Commercio). Doppio obiettivo: (1) Validare PresidIA **Opzione A (full ownership)** e **Opzione B (revenue share)**, (2) Diventare "pricing advisor permanente" HeyAI per futuri progetti. **CRITICO**: qui emerge il **modello di controllo qualità quotazioni** che Carlo vuole implementare sistematicamente.

### Persone menzionate
- **Marco Murolo** (consulente lavoro 20 anni, founder PresidIA, ambizione exit 2-3 anni)
- **Lavinia Ferrari** (FuturItaly, ha introdotto Marco)
- **Bruno Mattucci** (Amm HeyAI, vuole IP full ownership)
- **Federico Saladino, Simone Montanari** (dev, quotazione interna da validare)
- **Andrea Pasquali** (benchmarker indipendente Deloitte/Jakala)
- **Confcommercio** (partner strategico Marco, non finanziatore operativo)

### Decisioni con data
- **13/04** — Ricalibrazione **Opzione A**: lista €55-60K → **€54K lista** (€48.6 con sconto 10% condizionato), markup 62% (sopra floor 55%, sotto target 70%)
- **13/04** — **Opzione B**: sconto 35% → ridotto a **28%** (€38.88K upfront), floor **12K/anno dal Y2**, buyout formula esplicita (max 3.5× revenue share Y-1 oppure 60K—cumulato), **change of control 15% valore transazione o minimo 80K**
- **13/04** — Esclusiva **ristretta CCNL Commercio-Terziario** con **performance conditions** (100 clienti Y2, 300 Y3)
- **13/04** — Base calcolo **ricavi lordi netti IVA e storni**, lista esclusioni (Confcommercio fee, commissioni Stripe, sconti promozionali, costi infra)
- **13/04** — Aggiunto **Limitazione responsabilità** (sistema = supporto, non garantisce completezza)
- **13/04** — Aggiunta **Clausola ANAC** (MVP con fonti pronte, ANAC al completamento accreditamento, no costi aggiuntivi)
- **13/04** — Supporto esteso **60 giorni correttivi** + **90 giorni OCR** (da 30 giorni generico)

### Numeri / Importi (evoluzione massiva)
- **Costo interno stimato** (da Pasquali, da confermare Federico/Simone): **~30K**
- **Opzione A (Full Ownership)**:
  - Lista iniziale: €51K (markup 70% su 30K)
  - Revisione: €54K lista (target pragmatico)
  - Sconto 10% condizionato: **€48.6K finale**
  - Margine netto: ~€18.6K (margine effettivo 62% markup)
- **Opzione B (Revenue Share)**:
  - Upfront sconto 28%: **€38.88K**
  - Revenue share: **15% su ricavi lordi** (non 12-15% amigua)
  - Floor garantito: **12K/anno dal Y2** (protezione se Marco fa flop)
  - Buyout: **MAX(3.5× rev share Y-1, 60K - cumulato)** — formula esplicita
  - Change of Control: **15% valore transazione oppure minimo €80K** — fondamentale per exit 2-3 anni
  - **Margine upfront**: ~9K (sotto floor 15K, compensato da floor + buyout + CoC)
  - **Scenario pessimistico**: Opzione A €48.6K > Opzione B €38.88K + 80K CoC (exit 2 anni) = €118.88K totale
  - **Scenario ottimistico**: Opzione B se ricavi 192K/anno → rev share 28.8K/anno + 80K CoC = 108.8K+n anni

### Vincoli operativi / preferenze cliente
- Marco budget "non-disclosed" ma evidentemente limitato (single consultant, bootstrapped con investor interest)
- Exit ambizione **2-3 anni** (define orizzonte revenue share)
- Supportato da **Confcommercio come endorser** (non finanziatore)
- Verticale MVP: **CCNL Commercio pubblici esercizi** (enorme, vago se non ristretto)
- **Esigenza "inattaccabilità" GDPR** su data sharing verso Confcommercio (vedi chat 9 sezione 7.2)

### Citazioni testuali da preservare
> "Il valore della proposizione di HeyAI non è 'siamo una dev shop che fa codice'. È 'vi diamo accesso a una piattaforma SaaS che risale il valore dei vostri consulenti'."

> "Bruno won't budge on this — Wave 2 is completely blocked without full IP ownership of the applications. Federico and Simone need to align on this between themselves and come back with a decision."

> "Se presenti €18k come floor, loro punteranno a chiudere lì, e a quel prezzo probabilmente ci perdi soldi o nella migliore delle ipotesi lavori gratis."

### Task aperti
1. **Costo interno Federico/Simone** — conferma o ricalcolo (impatta tutto)
2. **ARPU/volumi Marco** — call informale FuturItaly, es. €80/mese × 300 clienti Y1 = €288K → share 34-43K
3. **Clausola GDPR compliance** — completata sezione 7.2 su output PresidIA v3
4. **Validazione Opzione B** — ancora da far accettare Marco (negoziazione 15% CoC? Sconto upfront 28% enough?)
5. **DPO/legal privacy** chi paga? (implicito vs. esplicito nelle sezioni)
6. **Modello "change of control"** — formalizzare in term sheet con avvocato Longo

### Artifact prodotti
- **Quotazione_PresidIA_v1.docx** — originale (Opzione A €51K, Opzione B sconto 35%)
- **Quotazione_PresidIA_v2_RICALIBRATA.docx** — ricalibrata Opzione A €54K, Opzione B 28% + floor + buyout
- **Quotazione_PresidIA_v3_COMPLIANCE.docx** — aggiunta sezione 7.2 GDPR compliance (framing "proattivo HeyAI", non "correzione")

### Link/risorse esterne
- **avv. Marco Longo** (Morbinati & Longo, legale IP/contratti)
- GDPR compliance framework (citato ma non linkato)

### Pattern ricorrenti
1. **Floor margine 15K** come regola hard per HeyAI (violato da Opzione B upfront, compensato da floor+buyout)
2. **Markdown 70% markup su costo interno** come target (Opzione A 62%, Opzione B dilazionato)
3. **Clausole di protezione assenti inizialmente** → aggiunte iterativamente (limitazione responsabilità, change of control, audit rights)
4. **Sconto "commerciale" secco** vs. **sconto condizionato** (lesson: regalare margine è bad)
5. **Revenue share ambigua** (% su cosa?) → ridefinita con precisione "lordi netti IVA storni" + lista esclusioni
6. **Exit del cliente non anticipato in contratto** → change of control aggiunto per coprire 2-3 anni Marco

### Contraddizioni con vault
- Vault dice "PresidIA target €55K Full" — chat 9 propone €48.6K Opzione A (delta -€6.4K)
- Potrebbe essere Opzione B il target vault?

### Open Questions
- **Quale opzione Marco ha accettato** (A pieno ownership, B revenue share, o stand-by)?
- **Costo interno confermato** da Federico/Simone?
- **ARPU/volumietà** discusso con Marco?
- **GDPR data sharing** soluzione finale approvata Marco?

---

## CHAT 10: Minute call Crowd e NOT
**Created:** 26/02/2026 22:07  
**Updated:** 26/02/2026 22:40  
**Modello:** Opus 4.6  
**Artifacts:** Minute_Call_Carlo_Federico_26feb.md (trascrizione sintetizzata)

### Contesto operativo
Call 1.5h Carlo vs. Federico su **Crowd** (test, demo lunedì 03/03, bugs Lorena non-bloccanti, WhatsApp posticipato) e **NOT** (gap stima 63K vs. budget 38K, feature list massive, BAT integration DA DEFINIRE).

### Persone menzionate
- **Federico Saladino** (dev, stime NOT €63K spaventano Carlo)
- **Lorena Cavecchi** (tester Crowd, ha flagged bugs)
- **Arianna Giordanella** (tester Crowd, "ha smanettato" da sola su form)
- **Andrea Pazienza** (da verificare margini NOT con lui)

### Decisioni con data
- **26/02** — Crowd demo **lunedì 3 marzo** confermata nonostante bugs
- **26/02** — WhatsApp integration **late development** (posticipato, da posizionare come feature extra)
- **26/02** — NOT stima €63K (Federico) vs. €38K (Carlo budget) — gap massivo
- **26/02** — Shift calendar per NOT → future enhancement (non priorità)
- **26/02** — BAT integrazione **da definire** (nessun commitment official API maintenance)

### Numeri / Importi
- **Crowd**: project scope esteso, NO costi aggiuntivi segnalati
- **NOT stima tecnica**: **€63K** (Federico)
- **NOT budget Carlo**: €38K (business case)
- **Gap**: **€25K** (rischio margine)

### Vincoli operativi
- Crowd MVP **funzionante per lunedì 3 marzo** (demo)
- NOT feature list estesa (predictive modeling, warehouse, CV scanning, multi-tenant, time tracking, BAT integration, GDPR compliance, training)
- Supporto Crowd post-lancio: 30 giorni inclusi
- Esclusioni: GDPR detailed, training moduli comprehensive, shift calendar

### Task aperti
1. **Confronto Andrea Pazienza** su margini NOT prima di recall Federico
2. **Template Excel import Crowd** inviare a Lorena
3. **Nota responsabilità BAT downtime** aggiungere a requirements
4. **Lista feature extra Crowd** (WhatsApp + others) da usare come negotiation lever NOT

### Artifact prodotti
- **Minute_Call_Carlo_Federico_26feb.md**

---

## CHAT 11: Minute strutturate della call con nodi aperti
**Non trovata esplicitamente** — potrebbe essere merged in chat 10 o riferimento a documento esterno Wrike.

---

## CHAT 12: Noloop 2026 test 3 ⭐ (NEL "BUCO NERO" + 15 ARTIFACTS)
**Created:** 16/02/2026 21:14  
**Updated:** 13/04/2026 19:59  
**Modello:** Opus 4.6  
**Artifacts:** 15 file (Noloop_Wave2_Contesto_Completo_Handoff, Business Case × 6, Piano Operativo × 3, Contenuti Slide, Analisi Gestionale, Prompt Demo GoogleAI, Requisiti Quotazione × 3)

### Contesto operativo
**CHAT MASSIVA STRATEGICA** — Preparazione presentazione PowerPoint Wave 2 per AD Noloop (Laura Garbarino, Chicco Nobili, AD). Architettura consolidata: CRM (LeadMe Evolution) come entità madre → Tally (commesse+BI) per soldi → Task Management (ore) → Sally front-end AI trasversale. Flusso: Scouting → Gestione → Chiusura. 20 slide, 55min presentazione + 20min Q&A. **FONDAMENTALE**: This è il banco di prova della visione complessiva Noloop Wave 2.

### Persone menzionate
- **Laura Garbarino** (Co-founder AD Noloop, target presentazione)
- **Chicco Nobili** (Co-founder AD Noloop)
- **Paolo Donzelli** (CFO Noloop, approvals)
- **Marco Pasquali** (Director Marketing Noloop, stakeholder)
- **Massi Sinigaglia** (Managing Partner NOT, alias Massimiliano)
- **Germano** (NOT co-principal)
- **Antonio Cichello** (Producer Director, involved E2E process)
- **Roberta Calajò** (Resp Controllo, BC architecture call)
- **Elisa Remigi** (BC operations)
- **Arianna Giordanella, Lorena Cavecchi** (PM operativi, UAT feedback)
- **Federico Saladino, Simone Montanari** (dev, estimate Wave 2)

### Decisioni con data
- **16/02** — Ruolo Claude: strategic consultant + copywriter + sales executive
- **16/02** — Architettura: **CRM = entità madre**, Sally = **unico front-end AI**, Tally = **moneta**
- **16/02** — Flusso confermato: Scouting (LeadMe + VenueFinder + Modulo Creativo) → Gestione (LeadMe Evolution + Task Mgmt + Crowd) → Chiusura (Tally)
- **19/02** — E2E process aggiornato da call Antonio/Roberta/Elisa (COM, BC, cash flow tracking)
- **01/04** (chat 2) — Wave 2 deadline **settembre** (non agosto)
- **01/04** — LeadMe rilascio standalone possibile maggio/giugno
- **13/04** — Presentazione pronta per ultimazione

### Numeri / Importi
- **Noloop fatturato**: €55M
- **Dipendenti**: ~100
- **Eventi/anno**: ~50
- **Wave 2 budget implicito**: €315K bundle (da chat 2)
- **Investimento complessivo**: €350-380K (dev interno stimato)

### Vincoli operativi / preferenze cliente
- Presentazione **35min + 15-20min Q&A** (total 55min)
- Target: **AD level** (visione, strategie, ROI)
- Tono: confident ma non arrogante, concreto, visivo, progressivo (pain → visione → soluzione → soldi)
- 20 slide (5 intro, 6 Wave 1+2 overview, 6 focus solution, 3 arch/ROI/roadmap)
- Requirement log **vincolante** perimetro
- Focus Wave 2: Sally, Tally, Task Management, LeadMe Evolution, AI Event Companion, Modulo Creativo

### Citazioni testuali da preservare
> "L'Opportunità sul CRM è l'entità madre — da lì si genera tutto automaticamente."

> "Sally è l'UNICO front-end AI — gli utenti parlano solo con lei, lei interroga i sistemi sotto il cofano."

> "Tally gestisce tutto ciò che è 'soldi' — commesse, fornitori, acquisti, fatture, margini."

> "Il flusso è: Scouting → Gestione → Chiusura"

### Artifact prodotti (15 totali)
1. **Noloop_Wave2_Contesto_Completo_Handoff.md** — architettura, flusso, inventory soluzioni, feedback UAT
2. **Noloop_Business_Case_LeadMe.md** — business case LeadMe Evolution (impact, ROI hours saved)
3. **Noloop_Business_Case_Link.md** — business case gestionale Link/Flow
4. **Noloop_Business_Case_VenueFinder.md** — business case Venue Finder AI
5. **Noloop_Business_Case_Pitch.md** — business case Pitch modulo creativo
6. **Noloop_Piano_Operativo_v1, v2, v3.md** — timeline operativa (Wave 1 closure + Wave 2 phases)
7. **Noloop_Wave2_Requisiti_Quotazione.md, _1, _2, _v2.md** — requirement log dettagliato per dev quotazione
8. **Noloop_Analisi_Gestionale_Budgeting.md** — scenari budgeting Wave 2 (conservative, moderate, aggressive)
9. **Noloop_Contenuti_Slide_Presentazione.md** — speaker notes + slide content 20 slide
10. **Prompt_Demo_Noloop_GoogleAIStudio.md** — prompt per Google AI Studio demo interattiva
11. **Noloop_Wave2_Contesto_Completo_Handoff.md** (forse duplicato o aggiornamento)

### Open Questions
- **Quale slide è stata "ultimata"** su 20? (stato completamento non dichiarato)
- **Feedback Laura/AD** sulla presentazione? (non documentato)
- **Noloop Wave 2 go/no-go** dalla presentazione? (outcome non nel record)
- **NOT co-development** (Massi, Germano) — inserito in presentazione Noloop o separato?

### Contesto commerciale NOT (On-Trade)
Parallelamente: sito web (Hostinger/WordPress, 10gg), CRM Odoo, LinkedIn scraper, advertising Y3, Eye Cookies MVP. Proof scalabilità ecosistema HeyAI cross-division.

---

## RIASSUNTO LOTTO C — SCOPERTE "BUCO NERO" F-L
*Max 300 parole con focus F-L precedentemente non lette*

### FuturItaly (Chat 7)
Nuovo cliente (Lavinia Ferrari, studio legale) → Osservatorio Strategico AI bandi gare (ANAC, TED, UNGM + AI scoring + dashboard). **Modello strategico**: IP retention HeyAI (€30K interno) vs. licenza FuturItaly a prezzo ridotto (€18-26K orig, ricalibrato €22-28K). Primo banco di prova revenue-share future. **Criticità**: Costo interno fragile (Pasquali non dev effettivo), range pricing sottodimensionato benchmark, sconto 10% regalato, costi ricorrenti Cloud/LLM scissi. **Azioni**: Confermare 30K Federico/Simone, call ARPU FuturItaly, esclusiva ristretta CCNL + performance conditions, clausola change-of-control per exit potenziale.

### Gestione Clienti HeyAI (Chat 8)
Tracker Excel 4-fogli strutturato: Anagrafica contratti + Fatturazione Marketing (mensile) + Fatturazione AI (3 tranche clienti, 2 collaboratori) + Collaboratori. **Critical**: Doppio modello fatturazione omogeneo, color-coding automatico stato, riepiloghi formule. Inventory completo 12 progetti (6 marketing, 6 AI), 3 collaboratori (Soolutions main). **Rilevanza**: Supporto operativo richiesto per mantenere traccia clienti/progetti/contratti (preventivo vs. reality).

### Pricing HeyAI Control Check (Chat 9)
Chat massiva (29/04) di calibrazione PresidIA + setup "pricing advisor permanente" per HeyAI. **Modello**: Opzione A (Full Ownership €54K lista = €48.6K netto, 62% markup) vs. Opzione B (Revenue Share €38.88K upfront + 15% share + €12K/anno floor Y2 + buyout 3.5× + change-of-control 80K min). **Lesson critica**: Floor margine 15K viola da Opzione B (compensato floor+buyout), sconto condizionato >secco, revenue-share rigida definizione (lordi netti IVA/storni), clausola GDPR Confcommercio framing "proattivo non correttivo". **Contraddizioni vault**: €55K target vs. €48.6K proposto (-€6.4K).

### Noloop Wave 2 Master Presentation (Chat 12)
15 artifacts consolidano architettura finale Wave 2: CRM entità madre, Sally unico front-end AI, Tally "soldi", Task Management "ore", LeadMe Evolution + Task + Crowd (gestione), Tally (chiusura), Sally + Event Companion (trasversali). 20-slide presentation AD-level, 55min. **Critico**: Architettura interlocking — cambiamenti una soluzione impattano tutta la catena (PDP, ore, NLP). **Feedback UAT positivo** (Arianna testato autonomamente, Lorena bugs non-bloccanti). **Stato**: Ultimazione presentazione in progress 13/04, outcome presentazione AD non documentato.

**IMPATTO GLOBALE**: Lotto C rivela tre nuovi clienti (FuturItaly, PresidIA via chat 9, NOT = nuovo), due modelli pricing (IP retention + revenue share da scalare HeyAI), tracker operativo (traccia contratti/fatturazione), e master presentation Noloop Wave 2 (banco di prova visione integrata). Tema ricorrente: **IP ownership** come nodo critico (Bruno HeyAI vs. Federico/Simone negoziazione 02/04 pendente).
