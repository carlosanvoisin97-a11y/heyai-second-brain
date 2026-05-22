# AUDIT DI QUALITÀ — Quotazione NOT Logistica & Vendite

**Documento:** Proposta di Investimento: Piattaforma NOT — Modulo Logistica & Stock Management + Modulo Gestione Vendite — Fase 1 (MVP)
**Data revisione:** 27 febbraio 2026
**Revisore:** Claude (per conto HeyAI — uso interno pre-invio)

---

## 1. LISTA PRIORITARIA DEI RISCHI E GAP

### 🔴 PRIORITÀ ALTA

---

**R01 — Nessun SLA definito per hypercare e post-lancio**
- **Dove:** Sez. 13 "Condizioni Generali" + Sez. 8.4 "Hypercare"
- **Problema:** Si menziona "supporto dedicato 8h/settimana" per 4 settimane, ma non esistono SLA formali: nessun tempo di risposta per severità, nessuna definizione di "bug bloccante" vs "minore", nessun uptime garantito, nessuna copertura oraria. L'exit criterion "nessun bug bloccante aperto da oltre 48 ore" non definisce chi classifica la severità.
- **Impatto:** Il cliente potrebbe aspettarsi supporto 24/7 o risposte in 2 ore. In caso di problemi gravi durante il rollout, l'assenza di SLA genera contestazioni.
- **Suggerimento:** Aggiungere tabella SLA con: severità (S1-S4), tempo di presa in carico, tempo di risoluzione target, copertura oraria (es. lun-ven 9-18), canale di comunicazione (email/ticket). Definire chi classifica la severità e procedura di escalation.

---

**R02 — Costi ricorrenti post-MVP completamente indefiniti**
- **Dove:** Sez. 13 "Condizioni Generali" — voce "Costi ricorrenti post-MVP"
- **Problema:** Indicato "Da dettagliare in fase di Discovery (cloud + API AI) a carico Cliente" senza alcun range indicativo. Il cliente non ha visibilità su quanto costerà la piattaforma ogni mese dopo il go-live. Cloud hosting, API OpenAI/CV, manutenzione — tutto è un punto cieco.
- **Impatto:** NOT potrebbe approvare €168K e poi scoprire costi ricorrenti di €3-5K/mese che non aveva previsto a budget. Rischio di blocco post-lancio o contestazione.
- **Suggerimento:** Aggiungere range indicativo dei costi ricorrenti stimati (es. "€1.500-3.500/mese indicativi, da validare in Discovery"). Specificare cosa include: hosting, API AI, eventuale licenza, supporto L1/L2.

---

**R03 — Proprietà intellettuale: cessione totale senza riserva**
- **Dove:** Sez. 13 — "Codice e algoritmi di proprietà esclusiva del Cliente"
- **Problema:** HeyAI cede TUTTA la proprietà intellettuale, inclusi modello predittivo, architettura multi-tenant e componenti computer vision. Questo impedisce a HeyAI di riutilizzare qualsiasi componente per altri clienti, inclusa l'architettura multi-tenant che è stata esplicitamente progettata per "supporto futuri clienti."
- **Impatto:** Contraddizione strategica: il documento (Sez. 2) dichiara "architettura multi-tenant predisposta per supporto futuri clienti (oltre GLO/BAT)" ma tutta l'IP è del cliente. HeyAI non potrà riutilizzare nulla. Impatto economico enorme sul modello di business.
- **Suggerimento:** Differenziare: (a) codice custom specifico per NOT → proprietà del cliente; (b) framework, librerie e componenti riutilizzabili → licenza d'uso esclusiva al cliente, proprietà HeyAI; (c) modello AI → licenza d'uso, proprietà condivisa. Aggiungere clausola di licenza perpetua non esclusiva al cliente.

---

**R04 — Nessuna garanzia post-hypercare**
- **Dove:** Sez. 13 + Sez. 11.2 (Esclusioni)
- **Problema:** Dopo le 4 settimane di hypercare non esiste alcuna garanzia. Bug scoperti alla settimana 25 sono fuori perimetro. Non è menzionato un contratto di manutenzione post-lancio.
- **Impatto:** NOT potrebbe scoprire bug gravi dopo il rollout completo (che avviene proprio nelle settimane 21-24). Il cliente si ritroverebbe senza copertura nel momento più critico.
- **Suggerimento:** Aggiungere: (a) garanzia bug critici per almeno 12 settimane post go-live; (b) proposta di contratto di manutenzione annuale con pricing indicativo; (c) chiarire che il rollout progressivo potrebbe generare nuovi bug e come vengono gestiti.

---

**R05 — Nessun criterio di accettazione per il modello AI**
- **Dove:** Sez. 2 (F1 — Modello Predittivo), Sez. 7.1, Sez. 8.2
- **Problema:** Il modello predittivo è un deliverable core ma non ha KPI di accettazione. Nessuna soglia di accuratezza (es. MAPE < 20%), nessuna definizione di "funzionante", nessun benchmark di confronto. L'exit criterion è "modello predittivo addestrato su storico" — una condizione tecnica, non di qualità.
- **Impatto:** NOT potrebbe contestare che il modello "non funziona" perché le previsioni non sono abbastanza accurate, senza un riferimento oggettivo. Rischio di rework infinito.
- **Suggerimento:** Definire metriche di accettazione specifiche: es. "Il modello sarà considerato accettato se l'errore medio sulle previsioni ordini settimanali è ≤ 25% rispetto al consumo effettivo, misurato su 4 settimane di dati reali durante hypercare. Miglioramenti continui sono previsti ma non condizionano l'accettazione MVP."

---

**R06 — Nessun criterio di accettazione per la computer vision**
- **Dove:** Sez. 2 (F5), Sez. 7.3, Sez. 14.1 punto 6
- **Problema:** La scansione AI dei codici myglow è un deliverable differenziante tra Base (€135K) e Recommended (€168K) — vale €33K di delta — ma non ha soglia di accuracy. Quanti prodotti deve riconoscere correttamente? In quali condizioni di luce? Con quali device?
- **Impatto:** Se la scansione funziona al 60%, il cliente potrebbe non pagare il delta o richiedere rework. Il punto aperto #6 (foto packaging) non è ancora risolto.
- **Suggerimento:** Specificare: "Tasso di riconoscimento target ≥ 85% in condizioni standard (luce artificiale, smartphone di fascia media). Fallback manuale sempre disponibile. Il tasso viene misurato su set di test concordato in Discovery."

---

**R07 — Saving a 3 anni: calcolo non trasparente**
- **Dove:** Sez. 6.1 "Coerenza Investimento / Saving"
- **Problema:** Saving annuo = €214.268, ma saving cumulato 3 anni = €557.097. Se fosse lineare: €214.268 × 3 = €642.804. La differenza di ~€86K non è spiegata. Probabilmente si assume un ramp-up nel primo anno, ma questo non è documentato.
- **Impatto:** In una presentazione allo steering committee di NOT, queste cifre verranno verificate. Se non tornano, la credibilità dell'intera proposta cala.
- **Suggerimento:** Aggiungere tabella con progressione anno per anno: Anno 1 (es. 6 mesi a regime) = €X, Anno 2 = €Y, Anno 3 = €Z, Totale = €557.097. Esplicitare le assunzioni di ramp-up.

---

**R08 — Ruolo DevOps menzionato nel WBS ma assente dal team**
- **Dove:** Sez. 9 (Team) vs Sez. 9.1 (WBS — riga "Setup infrastruttura e CI/CD")
- **Problema:** La WBS indica "Tech Lead, DevOps" per il deployment, ma nella Sez. 9 il team è composto solo da Tech Lead, AI Engineer e PM. Chi è il DevOps? È una delle stesse persone con un ruolo aggiuntivo? È una risorsa esterna?
- **Impatto:** Se il DevOps non esiste come risorsa allocata, l'effort di infrastruttura potrebbe essere sottostimato o ricadere su figure già sovraccariche.
- **Suggerimento:** Chiarire nella Sez. 9 se il Tech Lead copre anche il ruolo DevOps, oppure se è prevista una risorsa parziale aggiuntiva.

---

**R09 — GDPR per dati dipendenti (timbratura con geolocalizzazione)**
- **Dove:** Sez. 7.3 (T — Timbratura digitale), Sez. 14.1 punto 2
- **Problema:** Il punto aperto #2 copre solo il GDPR per i dati clienti finali nel form vendita. Ma la timbratura digitale con geolocalizzazione raccoglie dati personali dei dipendenti/operatori NOT — questo è un tema GDPR separato e più critico (art. 88 GDPR, Statuto dei Lavoratori art. 4). Serve informativa, consenso, eventuale accordo sindacale o autorizzazione DTL.
- **Impatto:** NOT potrebbe non poter attivare la geolocalizzazione senza preventivo accordo sindacale, rendendo inutilizzabile un modulo già sviluppato.
- **Suggerimento:** Aggiungere punto aperto #9: "GDPR dipendenti — la timbratura con geolocalizzazione richiede adempimenti giuslavoristici (art. 4 L. 300/70). NOT deve verificare con il proprio legale la compliance prima dello sviluppo del modulo T. Se non risolvibile, la timbratura funzionerà senza geolocalizzazione."

---

**R10 — Timeline aggressiva con zero buffer esplicito**
- **Dove:** Sez. 3 "Piano di Lavoro" + Sez. 8
- **Problema:** 20 settimane di sviluppo (+ 4 hypercare) per un sistema complesso con AI predittiva, computer vision, multi-tenant, 7 moduli funzionali. Il team è di sole 2+1 persone. La WBS mostra 205 GG di effort su 120 giorni lavorativi disponibili per persona — il che significa entrambi i dev al ~85% di occupazione senza buffer. Non c'è contingency esplicita nel piano.
- **Impatto:** Qualsiasi ritardo (dati in ritardo da NOT, complessità imprevista, malattia di un dev) causerà slittamento senza margine.
- **Suggerimento:** Aggiungere 2-3 settimane di buffer esplicito nel piano, o dichiarare che il buffer 15% menzionato nella Sez. 11.3 è già incluso nei 205 GG. Specificare cosa succede se le 8 decisioni aperte non vengono risolte nei tempi indicati.

---

### 🟡 PRIORITÀ MEDIA

---

**R11 — Change control: soglia 5% sfruttabile**
- **Dove:** Sez. 11.4 — punto 3
- **Problema:** "Se l'impatto è inferiore al 5% dell'effort totale di fase e non modifica deliverable core, HeyAI assorbe il change nel buffer di progetto." Questo crea un incentivo per NOT a frammentare i change request in piccole richieste, ciascuna sotto il 5%.
- **Impatto:** Accumulo di micro-change che individualmente rientrano nel 5% ma complessivamente erodono il margine del progetto.
- **Suggerimento:** Aggiungere cap cumulativo: "Il totale dei change assorbiti non potrà superare il 10% dell'effort complessivo del progetto. Oltre questa soglia, ogni ulteriore change verrà quotato separatamente."

---

**R12 — Contraddizione multi-tenant / scope MVP**
- **Dove:** Sez. 2 ("architettura multi-tenant predisposta per futuri clienti") vs scope MVP
- **Problema:** Il multi-tenant è un investimento architetturale per HeyAI (per future rivendite), ma viene fatto pagare a NOT come parte dell'MVP. Inoltre, con l'IP ceduta al cliente (R03), HeyAI non può riutilizzare l'architettura.
- **Impatto:** NOT potrebbe chiedersi perché paga per una feature che serve ad altri clienti. Se lo nota, diventa un punto di negoziazione.
- **Suggerimento:** Riformulare come "architettura predisposta per gestire diverse tipologie di prodotto e configurazioni pop-up" (che è il valore per NOT), eliminando il riferimento a "futuri clienti."

---

**R13 — Nessuna clausola di risoluzione o penale**
- **Dove:** Sez. 13 "Condizioni Generali"
- **Problema:** Non è prevista nessuna clausola di recesso anticipato da entrambe le parti, nessuna penale per ritardi significativi, nessun meccanismo di risoluzione controversie (mediazione, arbitrato, foro competente).
- **Impatto:** In caso di problemi gravi, mancano gli strumenti contrattuali per gestire la situazione. NOT potrebbe inserire le proprie condizioni molto più stringenti in fase contrattuale.
- **Suggerimento:** Aggiungere: diritto di recesso con preavviso (es. 30 gg) e pagamento del lavoro già svolto; clausola di forza maggiore; foro competente; clausola di mediazione.

---

**R14 — Piano di contingency team assente**
- **Dove:** Sez. 9 "Team e Stima Effort"
- **Problema:** Il progetto dipende criticamente da 2 sviluppatori senior. Non è menzionato alcun piano per malattia prolungata, dimissioni, o indisponibilità.
- **Impatto:** La perdita anche temporanea di uno dei due dev blocca il progetto. Con competenze specialistiche (AI/CV + architettura), la sostituzione non è immediata.
- **Suggerimento:** Aggiungere nota: "HeyAI si impegna a garantire continuità del team. In caso di indisponibilità prolungata (>2 settimane), HeyAI provvederà alla sostituzione con risorsa equivalente entro 10 giorni lavorativi, comunicando tempestivamente eventuali impatti sulla timeline."

---

**R15 — Pagamento 30% alla firma senza deliverable**
- **Dove:** Sez. 5 "Modalità di Pagamento"
- **Problema:** Il 30% alla firma (€50.400) è senza alcun deliverable associato. Per NOT questo è un esborso significativo basato solo su una firma. Potrebbe essere un punto di resistenza in negoziazione.
- **Impatto:** NOT potrebbe chiedere di ridurre l'anticipo o legarlo al completamento di un deliverable iniziale.
- **Suggerimento:** Valutare 20% alla firma + 10% a completamento kickoff (prima settimana), oppure preparare una giustificazione chiara (es. "l'anticipo copre l'onboarding team, acquisizione licenze, setup ambiente di sviluppo").

---

**R16 — Training limitato: 2 sessioni per 20+ operatori**
- **Dove:** Sez. 7.6, Sez. 10.2, Sez. 11.2
- **Problema:** Il training incluso è "2 sessioni per Admin e key user." Ma il sistema sarà usato da ~20 operatori in 30+ pop-up. L'esclusione esplicita della "Formazione operatori strutturata" (Sez. 11.2) lascia un gap enorme tra il training fornito e l'adozione reale.
- **Impatto:** L'adozione fallimentare del sistema da parte degli operatori sul campo è uno dei rischi più alti per il successo del progetto.
- **Suggerimento:** Aggiungere il concetto di "Train the Trainer" come deliverable minimo: le 2 sessioni formano i Train Champion di NOT, con materiali (video tutorial, quick reference card) che loro possono usare per formare gli operatori. Quantificare i materiali inclusi.

---

**R17 — Validità offerta 30 giorni vs. 8 punti aperti**
- **Dove:** Sez. 13 vs Sez. 14.1
- **Problema:** L'offerta scade in 30 giorni, ma ci sono 8 punti aperti di cui almeno 3 (API BAT, GDPR, connettività) richiedono verifiche da terzi che NOT non controlla direttamente. Se i punti non si chiudono in 30 giorni, l'offerta decade.
- **Impatto:** Processo decisionale sotto pressione, oppure necessità di rinnovo dell'offerta con possibile rinegoziazione.
- **Suggerimento:** Aggiungere: "La validità dell'offerta è di 30 giorni. I punti aperti elencati nella Sez. 14 non condizionano la validità della proposta per il pacchetto Recommended. Eventuali variazioni di scope derivanti dalla risoluzione dei punti aperti verranno gestite come change request."

---

### 🟢 PRIORITÀ BASSA

---

**R18 — WBS: rate implicita non verificabile**
- **Dove:** Sez. 9.1 vs Sez. 4.1
- **Problema:** 205 GG a €168.000 = ~€820/GG medio. Il PM a 30 GG e i Dev a ~175 GG hanno rate diverse non esplicitate. Non è un problema di per sé (il forfait è legittimo), ma se NOT chiede di verificare la congruenza effort/prezzo, la risposta deve essere pronta.
- **Impatto:** Basso, ma potrebbe emergere in negoziazione.
- **Suggerimento:** Avere internamente il calcolo delle rate per profilo pronto, senza inserirlo nel documento.

---

**R19 — Incoerenza tra Shopify "incluso" e "escluso"**
- **Dove:** Sez. 7.4 vs Sez. 10.2
- **Problema:** La Sez. 7.4 (Modulo Vendite — Escluso) menziona "Integrazione API ufficiale con BAT/Pard/Shopify" tra le esclusioni. Ma la Sez. 10.2 (pacchetto Recommended) include "integrazione Shopify per K-ippun Haru." La WBS include anche 5 GG per "Integrazioni Shopify."
- **Impatto:** Ambiguità: il cliente potrebbe interpretare che Shopify è esclusa, oppure che è inclusa solo parzialmente. In caso di contestazione, le sezioni si contraddicono.
- **Suggerimento:** Chiarire nella Sez. 7.4: "Integrazione API ufficiale con BAT e Pard è esclusa. L'integrazione Shopify per K-ippun Haru è inclusa nel pacchetto Recommended (vedi Sez. 10.2)."

---

**R20 — Assunzione implicita: disponibilità smartphone operatori**
- **Dove:** Sez. 11.1 "Operatività"
- **Problema:** Si assume che gli operatori usino i propri smartphone con fotocamera adeguata. Non si menziona chi fornisce i device, se NOT li fornisce, BYOD, policy di rimborso, compatibilità minima (Android/iOS, versione minima).
- **Impatto:** Se gli operatori hanno smartphone vecchi o non vogliono usare il device personale, la scansione AI potrebbe non funzionare.
- **Suggerimento:** Aggiungere requisiti minimi device: "Smartphone con iOS 15+ o Android 11+, fotocamera ≥ 12 MP. La fornitura dei device è a carico di NOT."

---

**R21 — Nessuna menzione di backup, disaster recovery, data retention**
- **Dove:** Non presente nel documento
- **Problema:** Per un sistema che gestisce dati di vendita, stock e dati personali, mancano completamente le policy di backup, disaster recovery e data retention.
- **Impatto:** In caso di perdita dati, non c'è riferimento contrattuale a backup o RPO/RTO.
- **Suggerimento:** Aggiungere nella Sez. 13 o nell'architettura tecnica: "Backup giornaliero automatico. RPO: 24h. RTO: 4h lavorative. Retention dati: definita in Discovery in base a requisiti legali e operativi."

---

**R22 — UAT: nessuna durata e nessun criterio di pass/fail**
- **Dove:** Sez. 8.3, Sez. 12
- **Problema:** L'UAT è prevista nelle settimane 17-18, ma non è definito: quanti cicli, durata per ciclo, chi testa cosa, quanti bug sono accettabili per il sign-off, cosa succede se Carmen non firma il sign-off.
- **Impatto:** L'UAT potrebbe prolungarsi indefinitamente, bloccando il go-live e il pagamento del 20% finale.
- **Suggerimento:** Definire: "2 cicli UAT di 5 giorni lavorativi ciascuno. Il sign-off richiede zero bug S1 e massimo 5 bug S2 aperti. Il mancato sign-off entro 10 giorni lavorativi dalla chiusura del secondo ciclo, in assenza di bug S1, equivale ad accettazione tacita."

---

---

## 2. MANCANZE CRITICHE

Le seguenti sono le lacune più importanti che, se non risolte prima dell'invio, possono generare problemi seri in fase di negoziazione, delivery o post-lancio.

1. **SLA assenti** (R01) — Nessuna definizione di livelli di servizio durante e dopo hypercare. Questo è il primo punto che un reparto acquisti o un legale segnalerà.

2. **Costi ricorrenti senza range** (R02) — Il cliente approva un investimento senza sapere quanto pagherà ogni mese dopo il go-live. Lacuna informativa grave.

3. **IP ceduta completamente** (R03) — Strategicamente dannoso per HeyAI e in contraddizione con l'architettura multi-tenant. Da ridiscutere internamente prima dell'invio.

4. **Nessuna garanzia post-hypercare** (R04) — Il cliente è scoperto dal momento più critico (rollout completo) in poi.

5. **Zero criteri di accettazione per AI** (R05, R06) — Due deliverable core (modello predittivo e computer vision) senza soglie misurabili. Ricetta per dispute infinite.

6. **Calcolo saving a 3 anni non verificabile** (R07) — Numeri che non tornano al calcolo diretto, senza spiegazione. Fragilità in presentazione a stakeholder.

7. **GDPR dipendenti ignorato** (R09) — La timbratura con geolocalizzazione è un tema giuslavoristico non coperto dai punti aperti esistenti.

8. **Clausole contrattuali minime** (R13) — Mancano recesso, penali, forza maggiore, foro competente. Il documento sembra una proposta commerciale, non una base contrattuale.

9. **Zero contingency sulla timeline** (R10) — Nessun buffer esplicito con 8 punti aperti e 2 sole risorse di sviluppo.

10. **Contraddizione Shopify inclusa/esclusa** (R19) — Ambiguità che può generare contestazioni immediate.

---

## 3. CHECKLIST FINALE PRE-INVIO

| # | Punto di controllo | Status |
|---|---|---|
| 1 | SLA definiti per hypercare (tempi risposta per severità, copertura oraria) | ☐ |
| 2 | Range indicativo costi ricorrenti post-MVP inserito | ☐ |
| 3 | Clausola IP rivista: distinzione codice custom vs framework riutilizzabili | ☐ |
| 4 | Garanzia post-hypercare aggiunta (min. 12 settimane bug critici) | ☐ |
| 5 | Criteri di accettazione modello predittivo (es. MAPE ≤ 25%) definiti | ☐ |
| 6 | Criteri di accettazione computer vision (es. accuracy ≥ 85%) definiti | ☐ |
| 7 | Calcolo saving 3 anni con progressione anno/anno esplicitata | ☐ |
| 8 | Ruolo DevOps chiarito nella composizione team | ☐ |
| 9 | Punto aperto GDPR dipendenti (timbratura geo) aggiunto a Sez. 14.1 | ☐ |
| 10 | Buffer esplicito nella timeline o dichiarazione che è incluso nei 205 GG | ☐ |
| 11 | Cap cumulativo al change control (es. max 10% effort totale assorbibile) | ☐ |
| 12 | Riferimento multi-tenant riformulato senza "futuri clienti" | ☐ |
| 13 | Clausole contrattuali base aggiunte (recesso, forza maggiore, foro) | ☐ |
| 14 | Contraddizione Shopify tra Sez. 7.4 e Sez. 10.2 risolta | ☐ |
| 15 | Requisiti minimi device operatori specificati | ☐ |
| 16 | Criteri UAT definiti (cicli, durata, soglie pass/fail) | ☐ |
| 17 | Materiali training specificati (Train the Trainer + quick reference) | ☐ |
| 18 | Policy backup/DR minima aggiunta | ☐ |
| 19 | Validità offerta vs punti aperti: chiarito che i punti non bloccano la firma | ☐ |
| 20 | Calcolo rate interne pronto per eventuale negoziazione (non nel doc) | ☐ |

---

*Fine dell'audit. Tutti i punti sono basati esclusivamente sul contenuto del documento analizzato. Elementi non verificabili sono stati segnalati come tali.*