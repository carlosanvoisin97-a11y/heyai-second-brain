# Business Case — Link (Sistema Gestionale)
## Analisi del Risparmio Operativo Annuale

**v3 — Aggiornato con correzioni dati operativi (tempi Progress, fatturazione attiva, budget/consuntivo)**

---

## PARAMETRI DI BASE

### Volume operativo (dati validati dal cliente)
| Parametro | Valore | Fonte |
|---|---|---|
| Commesse gestite/anno | 260 | Dato cliente (include BU Garbarino + BU Consumer) |
| Dipendenti Noloop | ~150 | Dato cliente |
| Fatturato annuo | ~€55M | Dato cliente |
| Persone che aprono COM | ~6 | Call Lorena: 5 B2B (team Zaghi 4 + Lorena) + Cichello B2C |
| Fatture passive per commessa | 5–20 | Dato call Lorena |
| Tempo compilazione Progress (capi area) | ~8h/settimana (dettaglio sotto) | Dato Carlo — dettaglio per figura |
| % commesse con fatture mancanti alla chiusura | ~10% | Stima Carlo su base Calajò |
| Tempo Garbarino su Progress e reporting | 1–2 ore/settimana | Stima Carlo |
| Compilatori del Progress | Zaghi, Cichello, Lorena, Ivano, Airaghi, Osmetti + 8 PM | Dato Carlo |

### Dettaglio tempo Progress per figura
| Figura | Ore/settimana | Ruolo |
|---|---|---|
| Lorena Cavecchi + Laura Zaghi | 3h/sett (congiunte) | Compilazione + supervisione |
| Antonio Cichello | 1h/sett | Compilazione BU Consumer |
| Ivano Romano | 1h/sett | Compilazione area creativa |
| Gabriella Airaghi | 1h/sett | Compilazione biglietteria |
| Antonella Osmetti | 2h/sett | Compilazione programmazione |
| **Subtotale capi area** | **8h/sett** | |
| 8 Project Manager | 0,5h/sett ciascuno → 4h/sett | Fornire dati ai capi area |
| **Totale Progress** | **12h/sett** | |

### Costo orario aziendale (benchmark Italia, agenzia eventi Milano, ~150 dip.)

Il costo azienda include: RAL × ~1.40 (contributi INPS datore lavoro ~30%, TFR ~7%, INAIL, benefit). Ore lavorative effettive: ~1.720/anno (220 giorni × 8h, al netto di ferie, festività, permessi).

| Profilo | RAL stimata | Costo azienda | Costo orario |
|---|---|---|---|
| Amministratrice Delegata (Garbarino) | €120.000 | ~€168.000 | **€95/h** |
| Director / Capi area (Zaghi, Cichello, Lorena, Ivano, Airaghi, Osmetti) | €65.000 | ~€91.000 | **€55/h** |
| PM / Producer / Operativi | €42.000 | ~€59.000 | **€35/h** |
| Amministrazione / Finance (Calajò, Remigi) | €45.000 | ~€63.000 | **€37/h** |

---

## AREA 1: APERTURA COMMESSA AUTOMATIZZATA

### Situazione attuale
Il commerciale scrive un'email a Calajò (Resp. Controllo) con: nome cliente, evento, date, destinazione, budget con % utile, status (GARA o CONFERMATO), tipo fatturazione (IVA / 74-ter CEE / 74-ter Extra CEE / fatturazione singole ai partecipanti), persona responsabile commerciale. Calajò legge, valida il regime fiscale (vincolo: un regime per commessa), assegna il codice commessa (formato AALNNNNN) e inserisce manualmente su Business Central.

### Con Link
Minutes estrae i dati dal brainstorming + brief → il client lead conferma con un click → i dati pre-compilati arrivano come notifica al Resp. Controllo, che verifica, corregge se necessario e conferma → push automatico via API verso Link e Business Central. Il ruolo di gatekeeper è preservato (validazione regime fiscale, assegnazione codice), ma senza scambio email e senza inserimento manuale in BC.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Commerciale: composizione email eliminata (da 10 min a 2 min click) | 260 COM × 8 min risparmiati | 34,7h | €42/h ¹ | €1.456 |
| Calajò: da lettura email + inserimento manuale BC (10 min) a review notifica + conferma (2 min) | 260 COM × 8 min risparmiati | 34,7h | €37/h | €1.283 |

¹ Media pesata: mix di senior (€55) e PM (€35) che aprono le COM.

**Totale Area 1: €2.739 → ~€2.700/anno**

---

## AREA 2: ELIMINAZIONE COMPILAZIONE MANUALE DEL PROGRESS

### Situazione attuale
Il Progress è un Excel compilato a mano che contiene: status commessa, budget per reparto, marginalità, persone assegnate, date. Viene alimentato da due livelli distinti:

**Capi area** (6 persone: Zaghi, Cichello, Lorena, Ivano Romano, Gabriella Airaghi, Antonella Osmetti): oltre a inserire i propri dati, hanno un ruolo di controllo e supervisione sulle sezioni dei rispettivi reparti. Zaghi e Lorena dedicano congiuntamente 3h/settimana; Cichello, Ivano e Airaghi dedicano ciascuno 1h/settimana; Osmetti dedica 2h/settimana. Tempo collettivo capi area: **8h/settimana**.

**Project Manager** (8 persone): ciascuno dedica circa mezz'ora a settimana per raccogliere i propri dati e comunicarli ai capi area (via email o a voce). Tempo collettivo PM: **4h/settimana**.

### Con Link
Il Progress digitale si auto-alimenta dal lavoro quotidiano sul PDP: i dati del budget, lo status commessa, le persone assegnate e le marginalità confluiscono automaticamente su Link. Nessuno lo compila — tutti consultano. I capi area passano dal compilare e rincorrere al verificare su dashboard.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Capi area: compilazione, controllo e rincorsa dati ² | 8h/sett × 48 settimane | 384h | €55/h | €21.120 |
| Project Manager: fornire dati ai capi area ³ | 8 PM × 0,5h/sett × 48 sett | 192h | €35/h | €6.720 |

² I 6 capi area dedicano collettivamente 8h/settimana alla compilazione e supervisione del Progress. Dettaglio: Lorena+Zaghi 3h, Cichello 1h, Ivano 1h, Airaghi 1h, Osmetti 2h. Include: inserimento dati propri, verifica sezioni dei sottoposti, rincorsa ai colleghi per aggiornamenti mancanti.

³ 8 Project Manager dedicano ciascuno ~30 minuti a settimana per raccogliere i propri dati e comunicarli al proprio capo area (via email o a voce).

**Totale Area 2: €27.840/anno**

---

## AREA 3: FATTURE PERSE E CHIUSURE INCOMPLETE

### Situazione attuale
Circa il 10% delle commesse (~26 COM/anno) arriva alla chiusura con fatture mancanti. Le fatture passive arrivano per due canali distinti: il Cassetto Fiscale SDI (fatture italiane, appaiono in "Anteprima Documento Elettronico" su BC) e la cartella di rete (fatture estere, regime minimi — deposito manuale in `\\172.16.0.121\Documi\downloads\CONS\pdf`). In entrambi i casi, l'operativo è responsabile dell'associazione alla commessa. Quando mancano fatture: rincorsa del fornitore, riapertura della chiusura, rielaborazione dei dati. A fine anno, corsa per chiudere i fornitori "orfani" — Calajò: "se non le andiamo a rincorrere noi..."

### Con Link
Il blocco automatico verifica la completezza su entrambi i canali: per le fatture SDI, cross-check con BC tramite codice commessa; per le fatture non-SDI (estere, regime minimi), verifica che i documenti siano stati caricati nel PDP. Il sistema distingue tra proforma (non fiscali, solo archivio) e fatture finali (documenti fiscali a consuntivo). Sally invia reminder proattivi prima della scadenza dei 15 giorni post-evento.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Operativo: rincorsa fattura + riapertura chiusura | 26 COM × 2h per incidente | 52h | €35/h | €1.820 |
| Amministrazione: rielaborazione dati | 26 COM × 30 min | 13h | €37/h | €481 |
| Pulizia di fine anno (fornitori orfani) ⁴ | 20h admin + 5h capi area | 25h | blend | €1.015 |

⁴ Calajò ha descritto un processo ricorrente di fine anno dove i fornitori restano aperti senza documentazione. Stima conservativa di 25 ore totali tra admin (€37/h) e capi area (€55/h).

**Totale Area 3: €3.316 → ~€3.300/anno**

---

## AREA 4: FATTURAZIONE ATTIVA INTEGRATA

### Situazione attuale
L'operativo compila un format Excel con PO, importi, codici IVA (ART-000004 22%, ART-000005 10%, ART-000006 ESC 15, ART-000007 Non Imp 9) e lo invia via email a `fatturazioneatttiva@noloop.eu`. Nonostante la procedura ufficiale indichi un collegamento automatico con BC, nella realtà operativa è Elisa Remigi che prende l'email e inserisce manualmente i dati in BC. L'operativo crede che l'automatismo esista — con Link, esisterà davvero.

### Volume stimato
Un evento corporate Noloop coinvolge mediamente 8–15 fornitori. La fatturazione attiva verso il cliente avviene in media in 2–3 tranche (acconto, saldo intermedio, saldo finale). Su 260 COM → stima ~650 submission di fatturazione attiva/anno.

### Con Link
L'operativo compila il template su Link (stessa UX del format Excel attuale, stessi campi: PO, importi, codici IVA, articoli) → il dato fluisce a BC via API → Elisa conferma con un click. Eliminata l'email e l'inserimento manuale. La percezione dell'operativo non cambia ("c'è un automatismo"), ma questa volta è vero.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Operativo: eliminazione composizione email e compilazione template Excel | 650 × 10 min risparmiati | 108,3h | €35/h | €3.792 |
| Remigi: eliminazione inserimento manuale in BC | 650 × 5 min risparmiati | 54,2h | €37/h | €2.004 |

**Totale Area 4: €5.796 → ~€5.800/anno**

---

## AREA 5: CREAZIONE E GESTIONE BUDGET (PDP DIGITALE)

### Situazione attuale
Ogni commessa richiede la creazione di un budget da zero su Excel, con iterazioni multiple (rilanci pre-gara), aggiornamenti pre-chiusura e riconciliazione manuale alla chiusura. I dati inseriti su Excel vengono poi riportati anche su Business Central per il cash flow (Righe Pianificazione Commessa per i ricavi, Richieste di Pagamento in stato Pianificato per i costi) — generando doppio inserimento. Il processo si divide in due macro-fasi: la **preventivazione** (creazione budget, caricamento su BC, rilanci) e il **consuntivo** (negoziazione finale con il fornitore, registrazione del prezzo effettivo e invio a BC).

### Con Link (PDP — Piano di Produzione Digitale)
Template intelligenti pre-popolati da Minutes e storico commesse. AI suggerisce voci probabili in base a tipo evento, ruolo dell'operativo e contesto. Il PDP alimenta automaticamente le strutture cash flow di BC (ricavi al netto IVA su task RICAVI, costi IVA inclusa su Richieste Pagamento con codice ubicazione STIME) — l'operativo inserisce una volta, il sistema popola BC. Alert automatici per la pre-chiusura. Riconciliazione automatica con BC prima della chiusura. Nella fase di consuntivo, il dato negoziato viene registrato una sola volta nel PDP e sincronizzato automaticamente con BC, eliminando il doppio inserimento.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Budget iniziale: template vs foglio bianco ⁵ | 260 COM × 15 min risparmiati | 65,0h | €35/h | €2.275 |
| Caricamento preventivo su Business Central ⁵ᵇ | 260 COM × 10 min risparmiati | 43,3h | €35/h | €1.517 |
| Rilanci pre-gara ⁶ | 260 × 1,5 rilanci × 15 min risparmiati | 97,5h | €35/h | €3.413 |
| Aggiornamento pre-chiusura ⁷ | 260 COM × 15 min risparmiati (coordinamento) | 65,0h | €42/h | €2.730 |
| Registrazione consuntivo su Business Central ⁵ᶜ | 260 COM × 5 min risparmiati | 21,7h | €35/h | €758 |
| Riconciliazione chiusura automatica ⁸ | 260 COM × 20 min risparmiati | 86,7h | €35/h | €3.033 |

⁵ Oggi: 30–40 min per costruire un budget da zero su Excel. Con template AI pre-popolato da brief/Minutes: 15–20 min di revisione. Risparmio ~15 min sulla sola fase di compilazione.

⁵ᵇ Oggi: dopo la compilazione del budget Excel, l'operativo riporta manualmente i dati su Business Central (Righe Pianificazione Commessa + Richieste Pagamento). Con il PDP, il caricamento avviene automaticamente via API. Risparmio ~10 min per commessa.

⁶ Lorena: "il rilancio è la rilaborazione del progetto" — il cliente chiede modifiche, cambia destinazione, aggiunge servizi. Stima media 1,5 rilanci per COM. Con lo storico e i template, ogni rilancio risparmia ~15 min.

⁷ Oggi: il responsabile rincorre ogni reparto per aggiornare la propria sezione prima della partenza. Con Link: alert automatici, ciascuno aggiorna in autonomia sul PDP. Risparmio ~15 min di coordinamento per COM (media pesata capi area + PM).

⁵ᶜ Nella fase di consuntivo, l'operatore negozia il prezzo finale con il fornitore e lo registra. Oggi l'inserimento avviene sia su Excel che su Business Central (doppio inserimento). Con il PDP, la registrazione è unica e BC viene aggiornato automaticamente. Risparmio ~5 min per commessa.

⁸ Oggi: confronto manuale tra Excel budget, fatture in BC, cash flow in BC e dati vari. Con Link: check automatico su entrambi i canali fatture (SDI + non-SDI), discrepanze evidenziate, verifica residui cash flow. Risparmio ~20 min per COM.

**Totale Area 5: €13.726 → ~€13.700/anno**

---

## AREA 6: REPORTING DIREZIONE

### Situazione attuale
Garbarino dedica 1–2 ore a settimana per controllare i Progress Excel, rincorrere dati mancanti e costruire le proprie analisi. A questo si aggiungono i report trimestrali e il consuntivo annuale. Non esiste tracciabilità dell'evoluzione del budget nel tempo (facing a 3 stadi).

### Con Link
Dashboard in tempo reale con tutti i KPI: marginalità per commessa/BU/commerciale/tipo cliente, facing nel tempo attraverso i 3 stadi (previsionale → pre-chiusura → consuntivo), comparazione previsto vs effettivo. Sally risponde in linguaggio naturale ("quanto ha fatturato Zaghi nel 2025?", "chi è più scarico questa settimana?", "qual è il margine sulla commessa X?").

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Review settimanale (da 1,5h a 0,5h) | 1h risparmiata × 48 settimane | 48h | €95/h | €4.560 |
| Report trimestrali + annuale ⁹ | 20h attuali → 10h con dashboard | 10h | €95/h | €950 |

⁹ 4 report trimestrali × 3h + 1 report annuale × 8h = 20h. Con la dashboard Link, il 50% del lavoro è già fatto → risparmio 10h.

**Totale Area 6: €5.510 → ~€5.500/anno**

---

## RIEPILOGO BUSINESS CASE

| # | Area di Risparmio | Ore/anno | Risparmio/anno |
|---|---|---|---|
| 1 | Apertura commessa automatizzata | 69h | €2.700 |
| 2 | Eliminazione compilazione manuale Progress | 576h | €27.840 |
| 3 | Fatture perse e chiusure incomplete | 90h | €3.300 |
| 4 | Fatturazione attiva integrata | 163h | €5.800 |
| 5 | Creazione e gestione budget (PDP) | 379h | €13.700 |
| 6 | Reporting direzione | 58h | €5.500 |
| **TOTALE** | | **1.335h** | **€58.840** |

---

## SCENARI

| Scenario | Tasso di adozione | Risparmio annuale | Note |
|---|---|---|---|
| **Conservativo** | 70% | **€41.200** | Non tutti adottano subito. Resistenza al cambiamento su budget digitale. Progress comunque eliminato. |
| **Realistico** | 85% | **€50.000** | Adozione buona entro 6 mesi. PDP usato dalla maggioranza. Alcune eccezioni su COM piccole. |
| **Ottimistico** | 100% | **€58.800** | Piena adozione. Tutti i flussi digitalizzati. Nessun workaround manuale residuo. |

---

## COMPOSIZIONE DEL RISPARMIO PER PROFILO

| Profilo | Ore liberate/anno | Valore | % sul totale |
|---|---|---|---|
| Amministratrice Delegata (Garbarino) | 58h | €5.510 | 9% |
| Capi area (Zaghi, Cichello, Lorena, Ivano, Airaghi, Osmetti) | ~454h | €24.970 | 42% |
| PM / Producer / Operativi | ~667h | €23.354 | 40% |
| Amministrazione (Calajò, Remigi) | ~156h | €5.006 | 9% |

**Il risparmio è ora distribuito in modo bilanciato tra capi area (42%) e operativi (40%)** — riflettendo il peso reale della compilazione Progress sui capi area, emerso con maggiore precisione nella raccolta dati aggiornata.

---

## CONVERSIONE IN FTE

| Metrica | Valore |
|---|---|
| Ore lavorative annue per FTE | 1.720h |
| Ore totali risparmiate | 1.335h |
| **FTE equivalenti liberati** | **0,78 FTE** |
| Costo medio FTE blend (pesato su profili coinvolti) | ~€75.600 |

Le 1.335 ore liberate equivalgono a ~0,78 FTE. A parità di organico, Noloop può gestire circa il 15–20% di commesse in più senza risorse aggiuntive, oppure riallocare il tempo liberato su attività a maggior valore aggiunto.

---

## BENEFICI NON QUANTIFICATI (QUALITATIVI)

Oltre al risparmio in ore, Link produce benefici che non si traducono direttamente in ore ma in valore strategico:

1. **Visibilità in tempo reale**: Garbarino vede lo stato di tutte le 260 commesse senza chiedere a nessuno. Oggi non è possibile.

2. **Tracciabilità dell'evoluzione budget**: facing a 3 stadi (previsionale → pre-chiusura → consuntivo). Oggi non esiste.

3. **Riduzione del rischio contabile**: zero fornitori orfani a fine anno. Zero chiusure incomplete inviate a BC. Compliance migliorata. Distinzione corretta tra proforma e fatture finali per fornitori esteri.

4. **Capacità aumentata senza assumere**: le 1.335 ore liberate equivalgono a ~0,78 FTE. A parità di organico, Noloop può gestire più commesse.

5. **Data-driven decision making**: con Sally NLP, la direzione può fare analisi che oggi non fa perché richiederebbero troppo tempo manuale (marginalità per tipo cliente, per commerciale, per destinazione, trend stagionali).

6. **Integrazione BC reale**: il "barbatrucco" della fatturazione attiva diventa un automatismo vero. Il doppio inserimento Excel → BC per il cash flow viene eliminato. Il rischio di errore umano viene ridotto drasticamente.

7. **Eliminazione doppio inserimento cash flow**: oggi l'operativo lavora su Excel e poi riporta su BC (Righe Pianificazione Commessa + Richieste Pagamento). Con il PDP, l'inserimento è unico e il sistema popola BC automaticamente — sia nella fase di preventivazione che di consuntivo.

---

## NOTE METODOLOGICHE

- I costi orari sono stime basate su benchmark di mercato per agenzie eventi corporate a Milano. Vanno validati con il cliente.
- Le ore risparmiate sono calcolate come differenza tra il processo attuale e il processo con Link a regime.
- Non si considera il periodo di transizione (primi 3–6 mesi) durante il quale il risparmio sarà inferiore per la curva di apprendimento.
- I volumi (260 COM, 650 fatture attive, 26 COM con fatture mancanti, 5–20 fatture passive per COM) sono basati su dati dichiarati dal cliente o stime condivise durante le interviste.
- Il tasso di adozione dello scenario realistico (85%) tiene conto della resistenza al cambiamento segnalata da Lorena ("faccio un po' fatica a immaginarmelo") sulla parte di budget digitale.
- I capi area che compilano il Progress sono stati identificati con dettaglio ore per figura: Lorena+Zaghi (3h), Cichello (1h), Ivano (1h), Airaghi (1h), Osmetti (2h), più 8 PM (0,5h ciascuno).

---

## LEGENDA FONTI

| Simbolo | Significato |
|---|---|
| 🟢 **Dato cliente** | Dichiarato esplicitamente durante le interviste |
| 🟡 **Stima condivisa** | Stimato da Carlo e validato con il cliente |
| 🔵 **Assunzione** | Stima nostra basata su benchmark e contesto |

---

## CHANGELOG v2 → v3

| Area | Modifica | Impatto |
|---|---|---|
| Parametri | Dettaglio ore Progress per figura: Lorena+Zaghi 3h, Cichello 1h, Ivano 1h, Airaghi 1h, Osmetti 2h. Totale capi area da 3h/sett a 8h/sett | Base per ricalcolo Area 2 |
| Parametri | PM ridotti da 15 a 8 figure, tempo da 15 min a 30 min per figura | Base per ricalcolo Area 2 |
| Parametri | Rimossa Chiara Stefani dai compilatori Progress | Coerenza con dato operativo |
| Area 2 | Capi area: da 3h/sett × 48 = 144h a 8h/sett × 48 = 384h. PM: da 15×15min a 8×30min = 192h | +€13.620 (da €14.220 a €27.840) |
| Area 4 | Operativo: da 5 min a 10 min risparmio (include email + Excel). Remigi: da 10 min a 5 min risparmio | -€100 (da €5.900 a €5.800) |
| Area 5 | Budget iniziale: da 35 min a 15 min risparmiati. Aggiunta riga "Caricamento preventivo su BC" (10 min). Aggiunta riga "Registrazione consuntivo su BC" (5 min) | -€800 (da €14.500 a €13.700) |
| **Totale** | | **da €46.100 a €58.840 (+27,6%)** |