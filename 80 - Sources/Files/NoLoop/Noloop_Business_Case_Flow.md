# BUSINESS CASE — FLOW (Task Management System)
## Noloop Wave 2
### Versione 1.0 — 4 marzo 2026

---

# Executive Summary

Flow è il sistema di task management centralizzato dell'ecosistema Noloop Wave 2. Sostituisce l'attuale gestione informale basata su WhatsApp, email, telefonate e appunti cartacei con una piattaforma strutturata che include assegnazione task, tracciamento scadenze, aggiornamenti mobile, tagging cross-reparto e push dati verso Link.

Flow impatta il bacino di utenti più ampio di tutte le soluzioni Wave 2: **73 persone** distribuite su 5 reparti, con intensità d'uso variabile da alta (operativi, pianificazione) a bassa (direttori, in modalità supervisione).

**Risparmio annuo stimato (scenario realistico 85%):** €138.500
**Ore liberate:** 4.464 ore/anno
**FTE equivalenti:** 2,6

---

# Contesto: lo stato attuale

## Assenza totale di strumenti strutturati

Noloop oggi non utilizza alcun tool di task management. Il coordinamento operativo avviene interamente attraverso canali informali:

- **WhatsApp** per comunicazioni urgenti e coordinamento in tempo reale
- **Email** per assegnazioni formali, con thread che si perdono e nessuna tracciabilità
- **Telefonate** per follow-up e solleciti
- **Carta e penna** per appunti durante sopralluoghi e riunioni operative
- **Memoria individuale** per scadenze contrattuali e deadline

Questo implica che il baseline di inefficienza è massimo: ogni miglioramento parte da zero, non da un tool mal utilizzato. I benchmark di mercato confermano che il passaggio da gestione informale a tool strutturato produce i risparmi più significativi.

## Benchmark di mercato

| Fonte | Dato |
|---|---|
| McKinsey Global Institute (2012) | I knowledge worker spendono il 20% del tempo lavorativo (~1,8h/giorno) cercando informazioni e colleghi |
| Interact | Il 19,8% del tempo di lavoro è sprecato nella ricerca di informazioni |
| IDC | 2,5 ore/giorno (30% della giornata) spese in ricerca informazioni |
| Wrike (survey professional services) | Il 30-39% del lavoro ripetitivo/amministrativo potrebbe essere automatizzato |
| Insightful | Tool di workforce management recuperano 8+ ore/mese per dipendente |
| ABLEMKR / Forrester | ROI di 13x per organizzazioni strutturate; break-even in ~5 mesi |
| Engineering.com | Software di project management recupera fino al 15% di tempo billable |

**Nota metodologica:** I benchmark citati si riferiscono a knowledge worker generici. Noloop opera in un settore (eventi corporate) dove il coordinamento è particolarmente intenso per la natura multi-stakeholder e multi-location delle commesse. Questo rende plausibili risparmi nella fascia alta dei range di mercato. Tuttavia, abbiamo applicato stime conservative per tenere conto della curva di adozione e della variabilità tra reparti.

---

# Bacino utenti e segmentazione

## Perimetro: 73 persone (esclusa società separata)

| Segmento | Persone | Intensità d'uso | Ruolo in Flow | Costo orario |
|---|---|---|---|---|
| Operativi / Producer | 30 | **Alta** | Creano, eseguono e aggiornano task. Utenti principali della funzione mobile. | €35/h |
| Pianificazione / Programmazione | 10 | **Alta** | Gestiscono timeline, scadenze contrattuali, coordinamento fornitori. | €35/h |
| Comunicazione | 10 | **Media** | Ricevono task di produzione contenuti, gestiscono flussi di approvazione materiali. | €30/h |
| Biglietterie | 10 | **Media** | Task strutturati per acquisti voli, hotel, trasferimenti. Checklist e procedure ripetitive. | €35/h |
| Vendite / Commerciali | 8 | **Bassa-media** | Visibilità sullo stato delle commesse. Ricezione aggiornamenti, non creazione task. | €34/h |
| Direttori / AD | 5 | **Bassa** | Supervisione dashboard, approvazioni, visibilità carichi di lavoro. | €55-95/h |

**Costo orario blend ponderato:** €36,4/h (calcolato sulla distribuzione effettiva)

---

# Feature chiave di Flow e impatto

| Feature | Descrizione | Impatto principale |
|---|---|---|
| Ricezione task da Minutes | Dopo ogni call, i task vengono estratti con assegnatario, scadenza e priorità | Elimina trascrizione manuale dei to-do post-riunione |
| Aggiornamento mobile | Note vocali e foto durante sopralluoghi | Elimina ricostruzione appunti cartacei (impatto limitato: <100 sopralluoghi/anno) |
| Upload contratti con estrazione scadenze | Caricamento documenti → estrazione automatica deadline → reminder | Elimina tracciamento mentale delle scadenze contrattuali |
| Tagging cross-reparto | @mention per coinvolgere colleghi, con notifica in-app ed email | Sostituisce telefonate e WhatsApp per coordinamento inter-reparto |
| Push dati su Link | Task completati con costi e documenti alimentano budget e Progress | Elimina reinserimento dati (NB: il risparmio del reinserimento è conteggiato nel BC Link) |

---

# Quantificazione dei risparmi

## Area 1 — Coordinamento task operativo

**Il cuore del business case.** Riguarda i 40 utenti ad alta intensità (operativi + pianificazione).

### Situazione attuale
- 260 commesse/anno, ciascuna con 50-100 task operativi (stima: ~20.000 task/anno totali)
- Ogni task richiede: assegnazione (WhatsApp/email), follow-up (telefonata/messaggio), conferma completamento (email), archiviazione (nessuna)
- Nessuna visibilità centralizzata: i PM "rincorrono" gli operativi per avere aggiornamenti
- Duplicazione comunicazioni: lo stesso aggiornamento viene dato a più persone su canali diversi

### Calcolo
| Parametro | Valore |
|---|---|
| Utenti coinvolti | 40 (30 operativi + 10 pianificazione) |
| Tempo coordinamento attuale | ~6h/settimana per persona (assegnazione, follow-up, ricerca stato, comunicazione) |
| Riduzione stimata | 25% (= 1,5h/settimana, pari a ~18 min/giorno) |
| Settimane lavorative | 48/anno |
| Ore risparmiate | 40 × 1,5h × 48 sett = **2.880h/anno** |
| Valore economico | 2.880h × €35/h = **€100.800/anno** |

### Giustificazione della riduzione del 25%
La riduzione del 25% su 6 ore settimanali di coordinamento è conservativa per i seguenti motivi:
- Si parte da zero tool (massima inefficienza)
- Il benchmark McKinsey indica il 20% del tempo totale (8h/giorno × 20% = 1,6h/giorno) speso solo in ricerca informazioni, senza contare il coordinamento attivo
- La stima di 18 minuti/giorno risparmiati è inferiore ai benchmark di settore (8+ ore/mese = ~24 min/giorno per Insightful)
- In contesti simili (agenzie, professional services), l'adozione di tool strutturati riduce il tempo di coordinamento del 25-35%

### Nota sulle sovrapposizioni
Il push dati verso Link (Progress auto-compilato, budget alimentato) è già conteggiato nel Business Case Link. I task estratti da Minutes saranno conteggiati nel BC Minutes Evolution. Flow è il veicolo di questi flussi, ma il risparmio non viene contato due volte.

---

## Area 2 — Coordinamento comunicazione e biglietterie

### Comunicazione (10 persone)
Ricevono brief per produzione materiali (inviti, presentazioni, social content). Oggi: brief via email, approvazioni via email/WhatsApp, versioni salvate in cartelle senza naming convention.

| Parametro | Valore |
|---|---|
| Utenti coinvolti | 10 |
| Tempo coordinamento attuale | ~4h/settimana |
| Riduzione stimata | 25% (= 1h/settimana) |
| Ore risparmiate | 10 × 1h × 48 sett = **480h/anno** |
| Valore economico | 480h × €30/h = **€14.400/anno** |

### Biglietterie (10 persone)
Gestiscono acquisti voli, hotel, trasferimenti. Task ripetitivi e procedurali, oggi tracciati via email con il rischio di dimenticanze e doppie prenotazioni.

| Parametro | Valore |
|---|---|
| Utenti coinvolti | 10 |
| Tempo coordinamento attuale | ~3h/settimana |
| Riduzione stimata | 25% (= 45 min/settimana) |
| Ore risparmiate | 10 × 0,75h × 48 sett = **360h/anno** |
| Valore economico | 360h × €35/h = **€12.600/anno** |

### Totale Area 2: 840h/anno — €27.000/anno

---

## Area 3 — Visibilità e supervisione (direzione + vendite)

### Direttori e AD (5 persone)
Oggi i Director (Zaghi, Cichello) e la AD (Garbarino) spendono tempo significativo a "rincorrere" le persone per ottenere aggiornamenti sullo stato delle commesse, sui carichi di lavoro e sulle criticità.

| Parametro | Valore |
|---|---|
| Utenti coinvolti | 5 (2 Director + AD + 2 Senior Manager) |
| Tempo attuale per ottenere visibilità | ~3h/settimana per persona |
| Riduzione stimata | 40% (dashboard + notifiche automatiche) |
| Ore risparmiate | 5 × 1,2h × 48 sett = **288h/anno** |
| Valore economico (blend €65/h*) | 288h × €65/h = **€18.720/anno** |

*Blend: 2 Director a €55/h + 1 AD a €95/h + 2 Senior Manager a €55/h = media ~€63/h, arrotondata a €65/h per semplicità.

### Vendite / Commerciali (8 persone)
Hanno bisogno di sapere lo stato delle commesse a loro assegnate per gestire il rapporto con il cliente. Oggi: email e telefonate ai PM per chiedere aggiornamenti.

| Parametro | Valore |
|---|---|
| Utenti coinvolti | 8 |
| Tempo attuale per cercare aggiornamenti | ~1,5h/settimana |
| Riduzione stimata | 30% (= ~27 min/settimana) |
| Ore risparmiate | 8 × 0,45h × 48 sett = **173h/anno** |
| Valore economico | 173h × €34/h = **€5.882/anno** |

### Totale Area 3: 461h/anno — €24.600/anno (arrotondato)

---

## Area 4 — Scadenze contrattuali e reminder automatici

### Situazione attuale
- ~650 contratti fornitori/anno (stima: 260 COM × 2-3 fornitori principali)
- Scadenze tracciate mentalmente o su fogli volanti
- Scadenze dimenticate generano: rinnovi automatici indesiderati, mancati esercizi di opzione, penali contrattuali, ritardi nei pagamenti
- Lorena (intervista) ha confermato che le scadenze contrattuali dimenticate sono un pain point ricorrente

### Calcolo
| Parametro | Valore |
|---|---|
| Contratti/anno con scadenze rilevanti | ~650 |
| Tempo attuale per tracciamento manuale | ~15 min/contratto (inserimento + verifica periodica) |
| Riduzione stimata | 70% (upload + estrazione automatica + reminder) |
| Ore risparmiate | 650 × 0,25h × 70% = **114h/anno** |
| Valore economico (PM/operativi) | 114h × €35/h = **€3.990/anno** |

### Costo evitato: scadenze dimenticate
Stima prudente: 5% dei contratti ha una scadenza critica dimenticata → ~32 casi/anno. Impatto medio per caso: 2h di lavoro correttivo + potenziale danno economico non quantificato.

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

### Calcolo
| Parametro | Valore |
|---|---|
| Sopralluoghi/anno | 80 (stima prudente) |
| Tempo ricostruzione attuale | 45 min/sopralluogo |
| Riduzione stimata | 60% (input vocale + foto da mobile, formalizzazione con Sally) |
| Ore risparmiate | 80 × 0,45h × 60% = **22h/anno** |
| Valore economico | 22h × €35/h = **€770/anno** |

**Nota:** L'impatto quantitativo è marginale. Il valore è prevalentemente qualitativo: completezza delle informazioni, eliminazione della perdita di dati nel passaggio analogico-digitale, impressione di modernità e professionalità verso il team operativo.

### Totale Area 5: 22h/anno — €770/anno

---

# Riepilogo risparmi

## Dettaglio per area

| # | Area di risparmio | Ore/anno | Risparmio/anno |
|---|---|---|---|
| 1 | Coordinamento task operativo | 2.880h | €100.800 |
| 2 | Coordinamento comunicazione + biglietterie | 840h | €27.000 |
| 3 | Visibilità e supervisione (direzione + vendite) | 461h | €24.600 |
| 4 | Scadenze contrattuali e reminder automatici | 178h | €6.230 |
| 5 | Documentazione sopralluoghi mobile | 22h | €770 |
| | **TOTALE** | **4.381h** | **€159.400** |

## Scenari

| Scenario | Fattore | Risparmio annuo | Ore liberate | FTE equiv. |
|---|---|---|---|---|
| Conservativo | 70% | **€111.600** | 3.067h | 1,8 |
| **Realistico** | **85%** | **€135.500** | **3.724h** | **2,2** |
| Ottimistico | 100% | €159.400 | 4.381h | 2,5 |

## Risparmio medio per persona

| Metrica | Valore |
|---|---|
| Risparmio medio per persona (73 utenti) | ~1,15h/settimana (scenario realistico) |
| Equivalente giornaliero | ~14 minuti/giorno |

Questo è il risparmio per-persona più basso tra le soluzioni Wave 2 (LeadMe: 3,6h/sett; Link: 2,3h/sett; Pitch: 2,5h/sett). Il totale elevato è giustificato dall'ampiezza del bacino (73 persone vs 5-15 per le altre soluzioni).

---

# Sanity check

## Confronto con le altre soluzioni Wave 2

| Soluzione | Utenti | Risp. per persona/sett | Totale realistico |
|---|---|---|---|
| Link | ~15 | 2,3h | €42.800 |
| LeadMe | ~12 | 3,6h | €54.500 |
| Pitch | ~9 | 2,5h | €28.600 |
| **Flow** | **73** | **1,15h** | **€135.500** |

Flow ha il risparmio unitario più basso ma il totale più alto. Questo è coerente: un task management system produce benefici diffusi e incrementali su molte persone, a differenza di soluzioni verticali che producono risparmi concentrati su pochi utenti specializzati.

## Confronto con benchmark

- Il risparmio di 14 min/giorno è inferiore al benchmark McKinsey (1,8h/giorno spese in ricerca info) e al benchmark Insightful (8+ ore/mese = ~24 min/giorno)
- Questo posiziona la nostra stima nella fascia bassa-conservativa dei benchmark di mercato
- Il fattore di cautela è giustificato dalla curva di adozione in un'azienda senza esperienza pregressa con tool digitali di task management

## Verifica incrociata: driver principali
- 20.000 task/anno è coerente con 260 COM × 75 task medi = 19.500
- 6h/settimana di coordinamento per operativi in assenza di tool è coerente con il dato McKinsey (28% del tempo in gestione email + 20% in ricerca informazioni = 48% ≈ 19h/sett, di cui il coordinamento task è una componente)
- La riduzione del 25% è nella fascia bassa del range 25-35% riportato dai vendor di project management

---

# Valore qualitativo (non quantificato)

Oltre ai risparmi misurabili, Flow genera benefici qualitativi significativi:

1. **Audit trail completo** — Ogni task ha uno storico: chi l'ha assegnato, chi l'ha completato, quando, con quali documenti. Valore legale e gestionale.

2. **Riduzione dello stress da "rincorsa"** — I PM e i direttori passano da una modalità reattiva (chiedere aggiornamenti) a una proattiva (consultare dashboard). Impatto su benessere e retention.

3. **Onboarding accelerato** — Un nuovo operativo trova i processi strutturati in Flow, non deve ricostruirli chiedendo ai colleghi. Stima: 1-2 giornate risparmiate per nuovo assunto (~15 nuovi/anno).

4. **Riduzione errori e dimenticanze** — Task non assegnati, scadenze saltate, comunicazioni perse: ognuno di questi ha un costo difficile da quantificare ma reale.

5. **Base dati per ottimizzazione futura** — I dati di Flow (tempi, carichi, colli di bottiglia) alimentano decisioni strategiche su allocazione risorse e pricing delle commesse.

6. **Effetto piattaforma** — Flow è il tessuto connettivo tra Minutes (input task), Sally (aggiornamento vocale), Link (output dati). Senza Flow, l'ecosistema perde coerenza.

---

# Nota sulle sovrapposizioni con altri moduli

| Flusso | Dove si conta il risparmio | Ruolo di Flow |
|---|---|---|
| Task estratti da Minutes → Flow | Business Case Minutes Evolution | Flow è il destinatario, non la fonte del risparmio |
| Task completati → push su Link/Progress | Business Case Link | Flow è il veicolo, Link è il beneficiario |
| Aggiornamento vocale via Sally → formalizzazione task | Business Case Sally | Sally è l'interfaccia, Flow è il repository |
| Ricerca informazioni su commesse passate | Business Case Sally (KB aziendale) | Flow contribuisce alla base dati |

Questa separazione garantisce che non ci siano doppi conteggi nel business case aggregato.

---

# Rischi e fattori di mitigazione

| Rischio | Probabilità | Impatto | Mitigazione |
|---|---|---|---|
| Bassa adozione iniziale (resistenza al cambiamento) | Alta | Alto | Rollout per reparti, partendo da pianificazione (10 persone, alta motivazione). Training dedicati. Champion interni. |
| Ritorno a WhatsApp per urgenze | Alta | Medio | Notifiche push in-app. Policy aziendale sull'uso di Flow per task formali. Periodo di transizione graduale. |
| Sovraccarico di notifiche | Media | Medio | Configurazione granulare delle notifiche per ruolo. Solo @mention dirette generano push. |
| Complessità percepita | Media | Alto | UX semplificata per mobile. Onboarding con template pre-configurati per tipologie di commessa ricorrenti. |
| Dipendenza da Minutes per input task | Bassa | Medio | Task creabili anche manualmente. Minutes è un acceleratore, non un prerequisito. |

---

# Parametri economici utilizzati

| Profilo | RAL | Costo azienda (×1,40) | Costo orario (/1.720h) |
|---|---|---|---|
| Amministratrice Delegata | €120.000 | €168.000 | €95/h |
| Director BU | €65.000 | €91.000 | €55/h |
| Manager / PM / Producer | €42.000 | €59.000 | €35/h |
| Commerciale / Vendite | €42.000 | €59.000 | €34/h |
| Comunicazione (blend) | €37.000 | €51.800 | €30/h |
| Amministrazione / Biglietterie | €42.000 | €59.000 | €35/h |

Formula: Costo azienda = RAL × 1,40 (INPS ~30% + TFR ~7% + INAIL + benefit). Ore effettive: 1.720/anno (220gg × 8h).

---

# Conclusione

Flow rappresenta la soluzione con il bacino d'impatto più ampio dell'ecosistema Wave 2 (73 persone). Il risparmio unitario è contenuto (~14 min/giorno per persona) ma il volume genera un totale significativo.

Il posizionamento nella fascia bassa dei benchmark di mercato, la coerenza con i dati raccolti nelle interviste, e la separazione netta dei risparmi dagli altri moduli rendono queste stime difendibili in sede di presentazione a Garbarino.

Il rischio principale non è l'entità del risparmio, ma l'adozione: un rollout mal gestito può dimezzare i benefici. La strategia di deployment per reparti, con il team pianificazione come pilota, è essenziale.
