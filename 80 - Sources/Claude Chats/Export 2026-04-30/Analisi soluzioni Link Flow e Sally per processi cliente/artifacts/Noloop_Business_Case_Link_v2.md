# Business Case — Link (Sistema Gestionale)
## Analisi del Risparmio Operativo Annuale

**v2 — Aggiornato post analisi procedure operative e call Lorena**

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
| Tempo compilazione Progress (capi area) | ~3h/settimana (totale capi area) | Stima Carlo su base interviste |
| % commesse con fatture mancanti alla chiusura | ~10% | Stima Carlo su base Calajò |
| Tempo Garbarino su Progress e reporting | 1–2 ore/settimana | Stima Carlo |
| Compilatori del Progress | Zaghi, Cichello, Lorena, Ivano, Chiara Stefani, Airaghi, Osmetti + tutti i PM | Dato call Lorena |

### Costo orario aziendale (benchmark Italia, agenzia eventi Milano, ~150 dip.)

Il costo azienda include: RAL × ~1.40 (contributi INPS datore lavoro ~30%, TFR ~7%, INAIL, benefit). Ore lavorative effettive: ~1.720/anno (220 giorni × 8h, al netto di ferie, festività, permessi).

| Profilo | RAL stimata | Costo azienda | Costo orario |
|---|---|---|---|
| Amministratrice Delegata (Garbarino) | €120.000 | ~€168.000 | **€95/h** |
| Director / Capi area (Zaghi, Cichello, Lorena, Ivano, Stefani, Airaghi, Osmetti) | €65.000 | ~€91.000 | **€55/h** |
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

**Capi area** (~7 persone: Zaghi, Cichello, Lorena, Ivano Romano, Chiara Stefani, Gabriella Airaghi, Antonella Osmetti): oltre a inserire i propri dati, hanno un ruolo di controllo e supervisione sulle sezioni dei rispettivi reparti. Zaghi rincorre i commerciali B2B per dati che non condividono spontaneamente; Cichello aggiorna quotidianamente il Progress per tutta la BU Consumer (~280 COM/anno da solo). Tempo collettivo stimato: ~3h/settimana.

**Singoli** (PM, operativi, programmazione): ciascuno inserisce la propria riga/sezione quando sollecitato dal proprio capo area. ~15 persone attive mediamente ogni settimana.

### Con Link
Il Progress digitale si auto-alimenta dal lavoro quotidiano sul PDP: i dati del budget, lo status commessa, le persone assegnate e le marginalità confluiscono automaticamente su Link. Nessuno lo compila — tutti consultano. I capi area passano dal compilare e rincorrere al verificare su dashboard.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Capi area: compilazione, controllo e rincorsa dati ² | 3h/sett × 48 settimane | 144h | €55/h | €7.920 |
| Singoli (PM/operativi): fornire dati ai capi area ³ | 15 persone × 15 min/sett × 48 sett | 180h | €35/h | €6.300 |

² I 7 capi area dedicano collettivamente ~3h/settimana alla compilazione e supervisione del Progress. Include: inserimento dati propri, verifica sezioni dei sottoposti, rincorsa ai colleghi per aggiornamenti mancanti.

³ Su ~20 PM/operativi totali, mediamente 15 sono attivi ogni settimana nel fornire aggiornamenti. Tempo stimato: 15 min a testa per raccogliere i propri dati e comunicarli (via email o a voce).

**Totale Area 2: €14.220 → ~€14.200/anno**

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
| Operativo: eliminazione composizione email | 650 × 5 min risparmiati | 54h | €35/h | €1.896 |
| Remigi: eliminazione inserimento manuale in BC | 650 × 10 min risparmiati | 108h | €37/h | €4.004 |

**Totale Area 4: €5.900 → ~€5.900/anno**

---

## AREA 5: CREAZIONE E GESTIONE BUDGET (PDP DIGITALE)

### Situazione attuale
Ogni commessa richiede la creazione di un budget da zero su Excel, con iterazioni multiple (rilanci pre-gara), aggiornamenti pre-chiusura e riconciliazione manuale alla chiusura. I dati inseriti su Excel vengono poi riportati anche su Business Central per il cash flow (Righe Pianificazione Commessa per i ricavi, Richieste di Pagamento in stato Pianificato per i costi) — generando doppio inserimento.

### Con Link (PDP — Piano di Produzione Digitale)
Template intelligenti pre-popolati da Minutes e storico commesse. AI suggerisce voci probabili in base a tipo evento, ruolo dell'operativo e contesto. Il PDP alimenta automaticamente le strutture cash flow di BC (ricavi al netto IVA su task RICAVI, costi IVA inclusa su Richieste Pagamento con codice ubicazione STIME) — l'operativo inserisce una volta, il sistema popola BC. Alert automatici per la pre-chiusura. Riconciliazione automatica con BC prima della chiusura.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Budget iniziale: template vs foglio bianco ⁵ | 260 COM × 35 min risparmiati | 151,7h | €35/h | €5.308 |
| Rilanci pre-gara ⁶ | 260 × 1,5 rilanci × 15 min risparmiati | 97,5h | €35/h | €3.413 |
| Aggiornamento pre-chiusura ⁷ | 260 COM × 15 min risparmiati (coordinamento) | 65h | €42/h | €2.730 |
| Riconciliazione chiusura automatica ⁸ | 260 COM × 20 min risparmiati | 86,7h | €35/h | €3.033 |

⁵ Oggi: 45–60 min per costruire un budget da zero su Excel + inserimento separato su BC per il cash flow. Con template AI pre-popolato da brief/Minutes che alimenta anche BC: 15–20 min di revisione. Risparmio ~35 min.

⁶ Lorena: "il rilancio è la rilaborazione del progetto" — il cliente chiede modifiche, cambia destinazione, aggiunge servizi. Stima media 1,5 rilanci per COM. Con lo storico e i template, ogni rilancio risparmia ~15 min.

⁷ Oggi: il responsabile rincorre ogni reparto per aggiornare la propria sezione prima della partenza. Con Link: alert automatici, ciascuno aggiorna in autonomia sul PDP. Risparmio ~15 min di coordinamento per COM (media pesata capi area + PM).

⁸ Oggi: confronto manuale tra Excel budget, fatture in BC, cash flow in BC e dati vari. Con Link: check automatico su entrambi i canali fatture (SDI + non-SDI), discrepanze evidenziate, verifica residui cash flow. Risparmio ~20 min per COM.

**Totale Area 5: €14.484 → ~€14.500/anno**

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
| 2 | Eliminazione compilazione manuale Progress | 324h | €14.200 |
| 3 | Fatture perse e chiusure incomplete | 90h | €3.300 |
| 4 | Fatturazione attiva integrata | 162h | €5.900 |
| 5 | Creazione e gestione budget (PDP) | 401h | €14.500 |
| 6 | Reporting direzione | 58h | €5.500 |
| **TOTALE** | | **1.104h** | **€46.100** |

---

## SCENARI

| Scenario | Tasso di adozione | Risparmio annuale | Note |
|---|---|---|---|
| **Conservativo** | 70% | **€32.300** | Non tutti adottano subito. Resistenza al cambiamento su budget digitale. Progress comunque eliminato. |
| **Realistico** | 85% | **€39.200** | Adozione buona entro 6 mesi. PDP usato dalla maggioranza. Alcune eccezioni su COM piccole. |
| **Ottimistico** | 100% | **€46.100** | Piena adozione. Tutti i flussi digitalizzati. Nessun workaround manuale residuo. |

---

## COMPOSIZIONE DEL RISPARMIO PER PROFILO

| Profilo | Ore liberate/anno | Valore | % sul totale |
|---|---|---|---|
| Amministratrice Delegata (Garbarino) | 58h | €5.510 | 12% |
| Capi area (Zaghi, Cichello, Lorena, Ivano, Stefani, Airaghi, Osmetti) | ~209h | €11.500 | 25% |
| PM / Producer / Operativi | ~681h | €23.830 | 52% |
| Amministrazione (Calajò, Remigi) | ~156h | €5.260 | 11% |

**Il 52% del valore viene liberato a livello operativo** — le persone che oggi perdono più tempo su attività a basso valore aggiunto.

---

## BENEFICI NON QUANTIFICATI (QUALITATIVI)

Oltre al risparmio in ore, Link produce benefici che non si traducono direttamente in ore ma in valore strategico:

1. **Visibilità in tempo reale**: Garbarino vede lo stato di tutte le 260 commesse senza chiedere a nessuno. Oggi non è possibile.

2. **Tracciabilità dell'evoluzione budget**: facing a 3 stadi (previsionale → pre-chiusura → consuntivo). Oggi non esiste.

3. **Riduzione del rischio contabile**: zero fornitori orfani a fine anno. Zero chiusure incomplete inviate a BC. Compliance migliorata. Distinzione corretta tra proforma e fatture finali per fornitori esteri.

4. **Capacità aumentata senza assumere**: le 1.104 ore liberate equivalgono a ~0,6 FTE. A parità di organico, Noloop può gestire più commesse.

5. **Data-driven decision making**: con Sally NLP, la direzione può fare analisi che oggi non fa perché richiederebbero troppo tempo manuale (marginalità per tipo cliente, per commerciale, per destinazione, trend stagionali).

6. **Integrazione BC reale**: il "barbatrucco" della fatturazione attiva diventa un automatismo vero. Il doppio inserimento Excel → BC per il cash flow viene eliminato. Il rischio di errore umano viene ridotto drasticamente.

7. **Eliminazione doppio inserimento cash flow**: oggi l'operativo lavora su Excel e poi riporta su BC (Righe Pianificazione Commessa + Richieste Pagamento). Con il PDP, l'inserimento è unico e il sistema popola BC automaticamente.

---

## NOTE METODOLOGICHE

- I costi orari sono stime basate su benchmark di mercato per agenzie eventi corporate a Milano. Vanno validati con il cliente.
- Le ore risparmiate sono calcolate come differenza tra il processo attuale e il processo con Link a regime.
- Non si considera il periodo di transizione (primi 3–6 mesi) durante il quale il risparmio sarà inferiore per la curva di apprendimento.
- I volumi (260 COM, 650 fatture attive, 26 COM con fatture mancanti, 5–20 fatture passive per COM) sono basati su dati dichiarati dal cliente o stime condivise durante le interviste.
- Il tasso di adozione dello scenario realistico (85%) tiene conto della resistenza al cambiamento segnalata da Lorena ("faccio un po' fatica a immaginarmelo") sulla parte di budget digitale.
- I capi area che compilano il Progress sono stati identificati dalla call con Lorena: Zaghi, Cichello, Lorena, biglietteria (Airaghi), programmazione (Osmetti), creativo (Ivano), e tutti i PM (sotto Stefani).

---

## LEGENDA FONTI

| Simbolo | Significato |
|---|---|
| 🟢 **Dato cliente** | Dichiarato esplicitamente durante le interviste |
| 🟡 **Stima condivisa** | Stimato da Carlo e validato con il cliente |
| 🔵 **Assunzione** | Stima nostra basata su benchmark e contesto |

---

## CHANGELOG v1 → v2

| Area | Modifica | Impatto |
|---|---|---|
| Parametri | Persone che aprono COM: da 20-30 a ~6 (dato call Lorena) | Nessuno sui calcoli (il volume COM resta 260) |
| Parametri | Aggiunto: fatture passive per commessa 5-20 (call Lorena) | Contesto per Area 3 |
| Parametri | Aggiunto: elenco compilatori Progress (call Lorena) | Struttura Area 2 |
| Area 1 | Gatekeeper preservato: Calajò riceve notifica e conferma (non elimina il suo ruolo, elimina email + inserimento manuale) | -€400 (da €3.100 a €2.700) |
| Area 2 | Ristrutturata: distinti capi area (~7, 3h/sett collettive) da singoli (~15, 15 min/sett ciascuno) | -€3.400 (da €17.600 a €14.200) |
| Area 3 | Rimossa riga "Senior manager supervisione e escalation" (€477). Aggiunta distinzione due canali fatture passive (SDI vs non-SDI) | -€500 (da €3.800 a €3.300) |
| Area 4 | Aggiornata descrizione: chiarito che l'automatismo dichiarato nella procedura non esiste nella realtà. Aggiunti codici IVA specifici | Nessuno sui calcoli |
| Area 5 | Aggiornata descrizione: PDP alimenta strutture cash flow BC (Righe Pianificazione Commessa + Richieste Pagamento stato Pianificato). Eliminazione doppio inserimento Excel → BC | Nessuno sui calcoli |
| Area 6 | Aggiornata descrizione con facing 3 stadi | Nessuno sui calcoli |
| **Totale** | | **da €50.400 a €46.100 (-8,5%)** |