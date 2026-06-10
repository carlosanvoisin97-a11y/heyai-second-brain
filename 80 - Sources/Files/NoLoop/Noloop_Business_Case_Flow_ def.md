# BUSINESS CASE — FLOW (Task Management System)
## Noloop Wave 2

**v2 — Aggiornato post analisi procedure operative, organigramma e rimozione sovrapposizioni con Link**

---

# Executive Summary

Flow è il sistema di task management centralizzato dell'ecosistema Noloop Wave 2. Sostituisce l'attuale gestione informale basata su WhatsApp, email, telefonate e appunti cartacei con una piattaforma strutturata che include assegnazione task, tracciamento scadenze, aggiornamenti mobile, tagging cross-reparto e push dati verso Link.

Flow impatta i reparti operativi in maniera diretta: **~55 persone** distribuite su 5 reparti (operativi/producer, PM, pianificazione, comunicazione, biglietteria), con intensità d'uso variabile da alta (operativi, pianificazione) a media (comunicazione, biglietteria). I director e i commerciali usano Flow per i task puntuali ma la loro supervisione complessiva sullo stato commesse avviene su Link (Progress digitale/dashboard) — il risparmio relativo è conteggiato nel Business Case Link.

**Risparmio annuo stimato (scenario realistico 85%):** €108.300
**Ore liberate:** 3.222 ore/anno
**FTE equivalenti:** 1,9

---

# Contesto: lo stato attuale

## Assenza totale di strumenti strutturati

Noloop oggi non utilizza alcun tool di task management. Il coordinamento operativo avviene interamente attraverso canali informali:

- **WhatsApp** per comunicazioni urgenti e coordinamento in tempo reale
- **Email** per assegnazioni formali, con thread che si perdono e nessuna tracciabilità
- **Telefonate** per follow-up e solleciti
- **Carta e penna** per appunti durante sopralluoghi e riunioni operative
- **Memoria individuale** per scadenze contrattuali e deadline

Questo implica che il baseline di inefficienza è massimo: ogni miglioramento parte da zero, non da un tool mal utilizzato.

## Benchmark di mercato

| Fonte | Dato |
|---|---|
| McKinsey Global Institute (2012) | I knowledge worker spendono il 20% del tempo lavorativo (~1,8h/giorno) cercando informazioni e colleghi |
| Interact | Il 19,8% del tempo di lavoro è sprecato nella ricerca di informazioni |
| IDC | 2,5 ore/giorno (30% della giornata) spese in ricerca informazioni |
| Wrike (survey professional services) | Il 30-39% del lavoro ripetitivo/amministrativo potrebbe essere automatizzato |
| Insightful | Tool di workforce management recuperano 8+ ore/mese per dipendente |

**Nota metodologica:** I benchmark citati si riferiscono a knowledge worker generici. Noloop opera in un settore (eventi corporate) dove il coordinamento è particolarmente intenso per la natura multi-stakeholder e multi-location delle commesse. Questo rende plausibili risparmi nella fascia alta dei range. Tuttavia, abbiamo applicato stime conservative per tenere conto della curva di adozione.

---

# Bacino utenti e segmentazione

## Perimetro: ~55 persone (utenti operativi diretti di Flow)

| Segmento | Persone (da organigramma) | Intensità d'uso | Ruolo in Flow | Costo orario |
|---|---|---|---|---|
| Operativi / Segreteria (sotto Lorena Cavecchi) | 13 | **Alta** | Eseguono e aggiornano task. Utenti principali della funzione mobile. | €35/h |
| Producer (sotto Antonio Cichello) | 6 | **Alta** | Gestiscono task operativi per commesse B2C. | €35/h |
| PM (sotto Chiara Stefani) | 9 | **Alta** | Coordinano task tra reparti, gestiscono timeline per commessa. | €35/h |
| Pianificazione (sotto Antonella Osmetti) | 5 | **Alta** | Gestiscono timeline, scadenze contrattuali, coordinamento fornitori. | €35/h |
| Comunicazione (sotto Ivano Romano) | 9 | **Media** | Ricevono task di produzione contenuti, gestiscono flussi di approvazione materiali. | €31/h |
| Biglietteria (sotto Gabriella Airaghi) | 4 | **Media** | Task strutturati per acquisti voli, hotel, trasferimenti. Checklist e procedure ripetitive. | €35/h |

**NB:** Director (Garbarino, Zaghi, Cichello, ecc.) e Commerciali (~10 persone) usano Flow per task puntuali e approvazioni, ma la loro supervisione sullo stato commesse è conteggiata nel Business Case Link (dashboard/Progress digitale). Qui non sono nel perimetro di calcolo per evitare doppi conteggi.

**Costo orario blend ponderato (55 persone):** €34,3/h

---

# Quantificazione dei risparmi

## Area 1 — Ricezione task automatica da Minutes

### Situazione attuale
Dopo ogni call di progetto (brainstorming, debrief, allineamento), qualcuno — tipicamente il Client Lead o il PM — deve trascrivere le decisioni e le azioni emerse, e poi distribuirle via email o WhatsApp ai singoli assegnatari. Ogni commessa genera almeno 2 meeting chiave (post-brainstorming + post-accettazione), più meeting intermedi di allineamento.

### Con Flow
Minutes estrae automaticamente i task strutturati (assegnatario, scadenza, priorità, note) dalla call registrata. Il Client Lead rivede la lista in 5 minuti, conferma o corregge, e i task vengono pushati direttamente su Flow con notifica agli assegnatari. Zero trascrizione, zero email di distribuzione.

### Calcolo

| Parametro | Valore |
|---|---|
| Meeting con task rilevanti/anno ¹ | ~400 (260 COM × ~1,5 meeting medi) |
| Tempo attuale post-meeting (trascrizione + distribuzione) | ~30 min per meeting |
| Tempo con Minutes → Flow (review + conferma) | ~5 min per meeting |
| Risparmio per meeting | 25 min |
| Ore risparmiate | 400 × 25 min = **167h/anno** |
| Costo orario (PM/Client Lead) | €35/h |
| Valore economico | 167h × €35/h = **€5.845/anno** |

¹ Ogni commessa ha almeno 2 meeting chiave. Le commesse più complesse ne hanno 3-5. La media di 1,5 meeting con task rilevanti per COM è conservativa — non conta i meeting rapidi di allineamento che comunque generano action item.

### Totale Area 1: 167h/anno — €5.845/anno

---

## Area 2 — Coordinamento task operativo

**Il cuore del business case.** Riguarda i 33 utenti ad alta intensità (13 operativi/segreteria + 6 producer + 5 pianificazione + 9 PM).

### Situazione attuale
- 260 commesse/anno, ciascuna con 50-100 task operativi (stima: ~20.000 task/anno totali)
- Ogni task richiede: assegnazione (WhatsApp/email), follow-up (telefonata/messaggio), conferma completamento (email), archiviazione (nessuna)
- Nessuna visibilità centralizzata: i PM "rincorrono" gli operativi per avere aggiornamenti
- Duplicazione comunicazioni: lo stesso aggiornamento viene dato a più persone su canali diversi
- Nessuna tracciabilità: se qualcosa va storto, è impossibile risalire a chi doveva fare cosa e quando

### Calcolo

| Parametro | Valore |
|---|---|
| Utenti coinvolti | 33 (operativi + producer + pianificazione + PM) |
| Tempo coordinamento attuale | ~6h/settimana per persona (assegnazione, follow-up, ricerca stato, comunicazione) |
| Riduzione stimata | 25% (= 1,5h/settimana, pari a ~18 min/giorno) |
| Settimane lavorative | 48/anno |
| Ore risparmiate | 33 × 1,5h × 48 sett = **2.376h/anno** |
| Valore economico | 2.376h × €35/h = **€83.160/anno** |

### Giustificazione della riduzione del 25%
La riduzione del 25% su 6 ore settimanali di coordinamento è conservativa:
- Si parte da zero tool (massima inefficienza)
- Il benchmark McKinsey indica il 20% del tempo totale speso solo in ricerca informazioni, senza contare il coordinamento attivo
- La stima di 18 minuti/giorno risparmiati è inferiore ai benchmark di settore (8+ ore/mese = ~24 min/giorno per Insightful)
- In contesti simili (agenzie, professional services), l'adozione di tool strutturati riduce il tempo di coordinamento del 25-35%

### Nota sulle sovrapposizioni
Il risparmio qui riguarda esclusivamente il **coordinamento dei task** (assegnare, seguire, aggiornare, comunicare). Il risparmio sulla **compilazione del Progress** (inserire dati di budget, marginalità, status commessa) è conteggiato nel Business Case Link. Sono attività diverse: coordinare chi fa cosa ≠ compilare un report sullo stato economico della commessa. Un PM che su WhatsApp chiede "hai fatto il sopralluogo?" risparmia grazie a Flow. Lo stesso PM che apre Excel per aggiornare il Progress risparmia grazie a Link.

### Totale Area 2: 2.376h/anno — €83.160/anno

---

## Area 3 — Coordinamento comunicazione e biglietterie

### Comunicazione (9 persone — reparto Romano/Villari)
Ricevono brief per produzione materiali (inviti, presentazioni, social content, render). Oggi: brief via email, approvazioni via email/WhatsApp, versioni salvate in cartelle senza naming convention. Con Flow: task strutturati con brief allegato, status tracciato, approvazioni in-app.

| Parametro | Valore |
|---|---|
| Utenti coinvolti | 9 |
| Tempo coordinamento attuale | ~4h/settimana |
| Riduzione stimata | 25% (= 1h/settimana) |
| Ore risparmiate | 9 × 1h × 48 sett = **432h/anno** |
| Valore economico | 432h × €31/h = **€13.392/anno** |

### Biglietteria (4 persone — reparto Airaghi)
Gestiscono acquisti voli, hotel, trasferimenti. Task ripetitivi e procedurali, oggi tracciati via email con il rischio di dimenticanze e doppie prenotazioni. Con Flow: checklist strutturate per tipo di acquisto, procedure allegate ai task tipizzati (procedura richiesta pagamento, procedure Revolut per spese sotto €500, ecc.).

| Parametro | Valore |
|---|---|
| Utenti coinvolti | 4 |
| Tempo coordinamento attuale | ~3h/settimana |
| Riduzione stimata | 25% (= 45 min/settimana) |
| Ore risparmiate | 4 × 0,75h × 48 sett = **144h/anno** |
| Valore economico | 144h × €35/h = **€5.040/anno** |

### Totale Area 3: 576h/anno — €18.432/anno

---

## Area 4 — Scadenze contrattuali e reminder automatici

### Situazione attuale
- ~650 contratti fornitori/anno (stima: 260 COM × 2-3 fornitori principali con scadenze rilevanti)
- Scadenze tracciate mentalmente o su fogli volanti: rooming list, emissione biglietti, cancellation policy, opzioni su venue, deadline catering
- Scadenze dimenticate generano: rinnovi automatici indesiderati, mancati esercizi di opzione, penali contrattuali, ritardi
- Lorena (intervista) ha confermato che le scadenze contrattuali dimenticate sono un pain point ricorrente
- Per i fornitori esteri, le fatture proforma degli anticipi devono essere archiviate e la fattura finale deve arrivare entro 7 giorni dal rientro — deadline che spesso si perde

### Con Flow
Upload contratti su task → Sally estrae automaticamente: importo, condizioni di pagamento, scadenze di cancellazione, deadline operative (rooming list, biglietti, ecc.) → reminder automatici su Flow. Per le scadenze legate a fatture estere, il sistema ricorda all'operativo di richiedere la fattura finale (non proforma) entro la tempistica prevista dalla procedura.

### Calcolo

| Parametro | Valore |
|---|---|
| Contratti/anno con scadenze rilevanti | ~650 |
| Tempo attuale per tracciamento manuale | ~15 min/contratto (inserimento + verifica periodica) |
| Riduzione stimata | 70% (upload + estrazione automatica + reminder) |
| Ore risparmiate | 650 × 0,25h × 70% = **114h/anno** |
| Valore economico (PM/operativi) | 114h × €35/h = **€3.990/anno** |

### Costo evitato: scadenze dimenticate

| Parametro | Valore |
|---|---|
| Casi di scadenza dimenticata | 32/anno (5% di 650) |
| Tempo correttivo per caso | 2h |
| Ore risparmiate | 32 × 2h = **64h/anno** |
| Valore economico | 64h × €35/h = **€2.240/anno** |

### Totale Area 4: 178h/anno — €6.230/anno

---

## Area 5 — Documentazione sopralluoghi mobile

### Situazione attuale
- <100 sopralluoghi/anno
- Appunti su carta e penna, foto su smartphone personale
- Ricostruzione report dopo il rientro: ~45 min per sopralluogo
- Rischio di perdita informazioni nel passaggio carta → digitale

### Con Flow
Da mobile: input vocale + foto direttamente sul task → Sally formalizza l'aggiornamento. Eliminata la ricostruzione post-rientro.

### Calcolo

| Parametro | Valore |
|---|---|
| Sopralluoghi/anno | 80 (stima prudente) |
| Tempo ricostruzione attuale | 45 min/sopralluogo |
| Riduzione stimata | 60% (input vocale + foto da mobile, formalizzazione con Sally) |
| Ore risparmiate | 80 × 0,45h × 60% = **22h/anno** |
| Valore economico | 22h × €35/h = **€770/anno** |

**Nota:** L'impatto quantitativo è marginale. Il valore è prevalentemente qualitativo: completezza delle informazioni, eliminazione della perdita di dati nel passaggio analogico-digitale.

### Totale Area 5: 22h/anno — €770/anno

---

# Riepilogo risparmi

## Dettaglio per area

| # | Area di risparmio | Ore/anno | Risparmio/anno |
|---|---|---|---|
| 1 | Ricezione task automatica da Minutes | 167h | €5.845 |
| 2 | Coordinamento task operativo | 2.376h | €83.160 |
| 3 | Coordinamento comunicazione + biglietterie | 576h | €18.432 |
| 4 | Scadenze contrattuali e reminder automatici | 178h | €6.230 |
| 5 | Documentazione sopralluoghi mobile | 22h | €770 |
| | **TOTALE** | **3.319h** | **€114.437** |

## Scenari

| Scenario | Fattore | Risparmio annuo | Ore liberate | FTE equiv. |
|---|---|---|---|---|
| Conservativo | 70% | **€80.100** | 2.323h | 1,4 |
| **Realistico** | **85%** | **€97.300** | **2.821h** | **1,6** |
| Ottimistico | 100% | €114.400 | 3.319h | 1,9 |

## Risparmio medio per persona

| Metrica | Valore |
|---|---|
| Risparmio medio per persona (55 utenti) | ~1,07h/settimana (scenario realistico) |
| Equivalente giornaliero | ~13 minuti/giorno |

Questo è il risparmio per-persona più contenuto tra le soluzioni Wave 2, coerente con la natura di un task management system che produce benefici diffusi e incrementali su molte persone, anziché risparmi concentrati su pochi utenti specializzati.

---

# Sanity check

## Confronto con le altre soluzioni Wave 2

| Soluzione | Utenti | Risp. per persona/sett | Totale realistico |
|---|---|---|---|
| Link | ~25 | — | €39.200 |
| LeadMe | ~6 | — | — |
| Pitch | ~9 | ~3,4h | €51.600 |
| **Flow** | **~55** | **~1,07h** | **€97.300** |

Flow ha il risparmio unitario più basso ma il totale più alto per ampiezza del bacino. Questo è coerente con la tipologia di strumento.

## Confronto con benchmark
- Il risparmio di 13 min/giorno è inferiore al benchmark McKinsey (1,8h/giorno spese in ricerca info) e al benchmark Insightful (8+ ore/mese = ~24 min/giorno)
- Questo posiziona la nostra stima nella fascia bassa-conservativa dei benchmark di mercato
- Il fattore di cautela è giustificato dalla curva di adozione in un'azienda senza esperienza pregressa con tool digitali

## Verifica incrociata: driver principali
- 20.000 task/anno è coerente con 260 COM × 75 task medi = 19.500
- 6h/settimana di coordinamento per operativi in assenza di tool è coerente con i benchmark (28% del tempo in gestione email + 20% in ricerca informazioni)
- La riduzione del 25% è nella fascia bassa del range 25-35% riportato dai vendor di project management

---

# Nota sulle sovrapposizioni con altri moduli

| Flusso | Dove si conta il risparmio | Spiegazione |
|---|---|---|
| Trascrizione task post-meeting → push su Flow | **Business Case Flow (Area 1)** | Il risparmio è sulla creazione dei task (da 30 min manuali a 5 min di review). È un risparmio di coordinamento, non di trascrizione meeting |
| Task completati → push dati su Link/Progress | **Business Case Link** | Flow è il veicolo, Link è il beneficiario. Il risparmio sulla compilazione Progress è in Link |
| Aggiornamento vocale via Sally → formalizzazione task | **Business Case Sally** | Sally è l'interfaccia AI, Flow è il repository |
| Supervisione stato commesse da parte dei Director | **Business Case Link** | La visibilità su budget, marginalità, status commessa è una funzione di Link (dashboard/Progress digitale), non di Flow |
| Commerciali: visibilità stato commesse per relazione cliente | **Business Case Link** | Stessa logica: lo status della commessa è su Link |
| Coordinamento task operativo (chi fa cosa, quando, follow-up) | **Business Case Flow (Area 2)** | Questo è specifico di Flow: gestire l'esecuzione dei task, non lo stato economico |

---

# Valore qualitativo (non quantificato)

1. **Audit trail completo** — Ogni task ha uno storico: chi l'ha assegnato, chi l'ha completato, quando, con quali documenti. Valore legale e gestionale.

2. **Riduzione dello stress da "rincorsa"** — I PM passano da una modalità reattiva (chiedere aggiornamenti via WhatsApp) a una proattiva (consultare lo stato dei task). Impatto su benessere e retention.

3. **Onboarding accelerato** — Un nuovo operativo trova i processi strutturati in Flow con procedure allegate ai task tipizzati, non deve ricostruirli chiedendo ai colleghi.

4. **Riduzione errori e dimenticanze** — Task non assegnati, scadenze saltate, comunicazioni perse: ognuno di questi ha un costo difficile da quantificare ma reale.

5. **Procedure embedded** — I task tipizzati portano con sé le procedure aziendali (come compilare una richiesta di pagamento con le casistiche ritenute corrette, come gestire i giustificativi Revolut entro 48h, come depositare fatture estere nella cartella di rete con naming corretto). Questo riduce le domande procedurali a Calajò (conteggiato in Sally) e gli errori di compilazione.

6. **Rispetto workflow approvazioni** — Quando un task genera una richiesta di pagamento, Flow facilita il rispetto della doppia approvazione BC (Resp. Reparto → Resp. Controllo/Direzione) con alert e pre-compilazione, senza sostituire il workflow esistente.

7. **Effetto piattaforma** — Flow è il tessuto connettivo tra Minutes (input task), Sally (aggiornamento vocale), Link (output dati). Senza Flow, l'ecosistema perde coerenza.

---

# Rischi e fattori di mitigazione

| Rischio | Probabilità | Impatto | Mitigazione |
|---|---|---|---|
| Bassa adozione iniziale | Alta | Alto | Rollout per reparti, partendo da pianificazione (5 persone, alta motivazione) e PM (9 persone). Champion interni. |
| Ritorno a WhatsApp per urgenze | Alta | Medio | Notifiche push in-app. Policy aziendale. Periodo di transizione graduale. |
| Sovraccarico di notifiche | Media | Medio | Configurazione granulare per ruolo. Solo @mention dirette generano push. |
| Complessità percepita | Media | Alto | UX semplificata per mobile. Template pre-configurati per tipologie commessa. |
| Dipendenza da Minutes per input task | Bassa | Medio | Task creabili anche manualmente. Minutes è un acceleratore, non un prerequisito. |

---

# Parametri economici utilizzati

| Profilo | Persone | RAL | Costo azienda (×1,40) | Costo orario (/1.720h) |
|---|---|---|---|---|
| PM / Producer / Operativi / Pianificazione / Biglietteria | ~37 | €42.000 | €59.000 | €35/h |
| Comunicazione (mid-level creativo) | ~9 | €38.000 | €53.200 | €31/h |

Formula: Costo azienda = RAL × 1,40 (INPS ~30% + TFR ~7% + INAIL + benefit). Ore effettive: 1.720/anno (220gg × 8h).

**NB:** I costi orari dei Director e della AD non sono utilizzati in questo business case — i loro risparmi sono conteggiati in Link. I costi della comunicazione sono allineati al Business Case Pitch (stesse persone, stesso reparto).

---

# CHANGELOG v1 → v2

| Area | Modifica | Impatto |
|---|---|---|
| Bacino | Da 73 a ~55 utenti (rimossi Director e Commerciali dal perimetro di calcolo Flow) | Coerenza con separazione Link |
| Struttura | Rimossa Area 3 "Visibilità e supervisione" (€24.600) — la supervisione sullo stato commesse da parte di Director e Commerciali è funzione di Link (Progress/dashboard), non di Flow | -€24.600 |
| Nuova Area | Aggiunta Area 1 "Ricezione task automatica da Minutes" (€5.845) — conteggiata in Flow perché il risparmio è sulla creazione/distribuzione dei task, non sulla trascrizione del meeting | +€5.845 |
| Area 2 (ex Area 1) | Utenti da 40 a 33 (rimossa la componente di supervisione, restano solo gli utenti operativi) | -€17.640 |
| Area 3 (ex Area 2) | Comunicazione: da 10 a 9 persone, costo da €30/h a €31/h (allineato a Pitch v2). Biglietteria: da 10 a 4 persone (dato organigramma reale) | -€8.568 |
| Area 4 (ex Area 4) | Aggiornata descrizione con procedura fatture estere (7gg dal rientro) e proforma. Calcoli invariati | Nessuno |
| Area 5 (ex Area 5) | Invariata | Nessuno |
| Sovrapposizioni | Tabella sovrapposizioni completamente riscritta con separazione netta Flow vs Link | Chiarezza |
| **Totale** | da €159.400 a €114.437 | **-28%** |
| **Realistico** | da €135.500 a €97.300 | **-28%** |
