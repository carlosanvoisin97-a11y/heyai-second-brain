# Business Case — Link (Sistema Gestionale)
## Analisi del Risparmio Operativo Annuale

---

## PARAMETRI DI BASE

### Volume operativo (dati validati dal cliente)
| Parametro | Valore | Fonte |
|---|---|---|
| Commesse gestite/anno | 260 | Dato cliente (include BU Garbarino + BU Consumer) |
| Dipendenti Noloop | ~150 | Dato cliente |
| Fatturato annuo | ~€55M | Dato cliente |
| Persone che aprono COM | 20-30 | Dato cliente (da verificare) |
| Tempo compilazione Progress (Zaghi) | 2 ore/settimana | Dato intervista Zaghi |
| % commesse con fatture mancanti alla chiusura | ~10% | Stima Carlo su base Calajò |
| Tempo Garbarino su Progress e reporting | 1-2 ore/settimana | Stima Carlo |

### Costo orario aziendale (benchmark Italia, agenzia eventi Milano, ~150 dip.)

Il costo azienda include: RAL × ~1.40 (contributi INPS datore lavoro ~30%, TFR ~7%, INAIL, benefit). Ore lavorative effettive: ~1.720/anno (220 giorni × 8h, al netto di ferie, festività, permessi).

| Profilo | RAL stimata | Costo azienda | Costo orario |
|---|---|---|---|
| Amministratrice Delegata (Garbarino) | €120.000 | ~€168.000 | **€95/h** |
| Director BU / Senior Manager (Zaghi, Cichello, Lorena) | €65.000 | ~€91.000 | **€55/h** |
| Manager / PM / Producer (operativi, programmazione) | €42.000 | ~€59.000 | **€35/h** |
| Amministrazione / Finance (Calajò, Remigi) | €45.000 | ~€63.000 | **€37/h** |

---

## AREA 1: APERTURA COMMESSA AUTOMATIZZATA

### Situazione attuale
Il commerciale o PM scrive un'email a Calajò con: nome cliente, nome evento, date, destinazione, budget, stima margine, tipo fatturazione (IVA / 74-ter). Calajò riceve, legge e inserisce manualmente i dati su Business Central per aprire la COM.

### Con Link
Minutes estrae i dati dal brainstorming + brief → il client lead conferma con un click → push automatico via API verso Link e Business Central. Zero email, zero inserimento manuale.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Commerciale/PM: composizione email (da 10 min a 2 min) | 260 COM × 8 min risparmiati | 34,7h | €42/h ¹ | €1.456 |
| Calajò: lettura email + inserimento BC (eliminato) | 260 COM × 10 min | 43,3h | €37/h | €1.603 |

¹ Media pesata: mix di senior manager (€55) e PM (€35) che aprono le COM.

**Totale Area 1: €3.059 → ~€3.100/anno**

---

## AREA 2: ELIMINAZIONE COMPILAZIONE MANUALE DEL PROGRESS

### Situazione attuale
Il Progress è un Excel compilato a mano che contiene: status commessa, budget per reparto, marginalità, persone assegnate, date. Zaghi lo compila settimanalmente per tutta la BU Garbarino rincorrendo i commerciali. Cichello lo aggiorna quotidianamente per la BU Consumer. Ogni PM/operativo deve fornire i propri dati.

### Con Link
Il Progress digitale si auto-alimenta dal lavoro quotidiano: i dati del budget, lo status commessa, le persone assegnate e le marginalità confluiscono automaticamente. Nessuno lo compila — tutti consultano.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Zaghi: compilazione + rincorsa dati | 2h/sett × 48 settimane | 96h | €55/h | €5.280 |
| Cichello: aggiornamento quotidiano ² | 30 min/giorno × 220 giorni | 110h | €55/h | €6.050 |
| PM/Operativi: fornire dati a Zaghi/Cichello ³ | 15 persone × 15 min/sett × 48 sett | 180h | €35/h | €6.300 |

² Stima conservativa: Cichello gestisce 280 COM/anno da solo e ha dichiarato di aggiornare il Progress "daily". 30 min/giorno è una stima minima.

³ Stima: su ~20-30 PM/operativi, mediamente 15 sono attivi ogni settimana nel fornire aggiornamenti. Tempo stimato: 15 min a testa per raccogliere i propri dati e comunicarli (via email o a voce).

**Totale Area 2: €17.630 → ~€17.600/anno**

---

## AREA 3: FATTURE PERSE E CHIUSURE INCOMPLETE

### Situazione attuale
Circa il 10% delle commesse arriva alla chiusura con fatture mancanti. Questo genera: rincorsa del fornitore, riapertura della chiusura, rielaborazione dei dati, e a fine anno una corsa per chiudere i fornitori "orfani". Cichello: "dopo 3 mesi il fornitore si sveglia e devi riaprire tutto."

### Con Link
Il blocco automatico impedisce la chiusura senza fatture associate. Sally invia reminder proattivi ai fornitori e agli operativi. Il problema non si presenta più.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Operativo: rincorsa fattura + riapertura chiusura | 26 COM × 2h per incidente | 52h | €35/h | €1.820 |
| Amministrazione: rielaborazione dati | 26 COM × 30 min | 13h | €37/h | €481 |
| Senior manager: supervisione e escalation | 26 COM × 20 min | 8,7h | €55/h | €477 |
| Pulizia di fine anno (fornitori orfani) ⁴ | 20h admin + 5h senior | 25h | blend | €1.015 |

⁴ Calajò ha descritto un processo ricorrente di fine anno dove "se non le andiamo a rincorrere noi" i fornitori restano aperti. Stima conservativa di 25 ore totali tra admin e supervisione.

**Totale Area 3: €3.793 → ~€3.800/anno**

---

## AREA 4: FATTURAZIONE ATTIVA INTEGRATA

### Situazione attuale
L'operativo compila un template Excel con PO, importi e codici IVA in maniera "precisissima", lo invia via email a Elisa, che lo inserisce manualmente in BC. L'operativo crede sia un automatismo. Con Link, diventa un automatismo reale.

### Volume stimato
Un evento corporate Noloop coinvolge mediamente 8-15 fornitori (hotel, voli, transfer, catering, venue, allestimenti, AV, fiorista, fotografo, attività, ecc.). La fatturazione attiva verso il cliente avviene in media in 2-3 tranche (acconto, saldo intermedio, saldo finale). Su 260 COM → stima ~650 submission di fatturazione attiva/anno.

### Con Link
L'operativo compila il template su Link (stessa UX) → il dato fluisce a BC via API → Elisa conferma con un click. Eliminata l'email e l'inserimento manuale.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Operativo: eliminazione composizione email | 650 × 5 min risparmiati | 54h | €35/h | €1.896 |
| Elisa: eliminazione inserimento manuale in BC | 650 × 10 min risparmiati | 108h | €37/h | €4.004 |

**Totale Area 4: €5.900 → ~€5.900/anno**

---

## AREA 5: CREAZIONE E GESTIONE BUDGET

### Situazione attuale
Ogni commessa richiede la creazione di un budget da zero su Excel, con iterazioni multiple (rilanci pre-gara), aggiornamenti pre-chiusura e riconciliazione manuale alla chiusura.

### Con Link
Template intelligenti pre-popolati da Minutes e storico. AI suggerisce voci probabili. Alert automatici per la pre-chiusura. Riconciliazione automatica con BC.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo orario | Risparmio |
|---|---|---|---|---|
| Budget iniziale: template vs foglio bianco ⁵ | 260 COM × 35 min risparmiati | 151,7h | €35/h | €5.308 |
| Rilanci pre-gara ⁶ | 260 × 1,5 rilanci × 15 min risparmiati | 97,5h | €35/h | €3.413 |
| Aggiornamento pre-chiusura ⁷ | 260 COM × 15 min risparmiati (coordinamento) | 65h | €42/h | €2.730 |
| Riconciliazione chiusura automatica ⁸ | 260 COM × 20 min risparmiati | 86,7h | €35/h | €3.033 |

⁵ Oggi: 45-60 min per costruire un budget da zero. Con template AI pre-popolato da brief/Minutes: 15-20 min di revisione. Risparmio ~35 min.

⁶ Lorena: "il rilancio è la rilaborazione del progetto" — il cliente chiede modifiche, cambia destinazione, aggiunge servizi. Stima media 1,5 rilanci per COM. Con lo storico e i template, ogni rilancio risparmia ~15 min.

⁷ Oggi: il responsabile rincorre ogni reparto per aggiornare la propria sezione prima della partenza. Con Link: alert automatici, ciascuno aggiorna in autonomia. Risparmio ~15 min di coordinamento per COM (media pesata senior + PM).

⁸ Oggi: confronto manuale tra Excel budget, fatture in BC e dati vari. Con Link: check automatico, discrepanze evidenziate. Risparmio ~20 min per COM.

**Totale Area 5: €14.484 → ~€14.500/anno**

---

## AREA 6: REPORTING DIREZIONE

### Situazione attuale
Garbarino dedica 1-2 ore a settimana per controllare i Progress Excel, rincorrere dati mancanti e costruire le proprie analisi. A questo si aggiungono i report trimestrali e il consuntivo annuale.

### Con Link
Dashboard in tempo reale con tutti i KPI. Sally risponde in linguaggio naturale ("quanto ha fatturato Zaghi nel 2025?", "chi è più scarico questa settimana?").

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
| 1 | Apertura commessa automatizzata | 78h | €3.100 |
| 2 | Eliminazione compilazione manuale Progress | 386h | €17.600 |
| 3 | Fatture perse e chiusure incomplete | 99h | €3.800 |
| 4 | Fatturazione attiva integrata | 162h | €5.900 |
| 5 | Creazione e gestione budget | 401h | €14.500 |
| 6 | Reporting direzione | 58h | €5.500 |
| **TOTALE** | | **1.184h** | **€50.400** |

---

## SCENARI

| Scenario | Tasso di adozione | Risparmio annuale | Note |
|---|---|---|---|
| **Conservativo** | 70% | **€35.300** | Non tutti adottano subito. Resistenza al cambiamento su budget digitale. Progress comunque eliminato. |
| **Realistico** | 85% | **€42.800** | Adozione buona entro 6 mesi. Budget digitale usato dalla maggioranza. Alcune eccezioni su COM piccole. |
| **Ottimistico** | 100% | **€50.400** | Piena adozione. Tutti i flussi digitalizzati. Nessun workaround manuale residuo. |

---

## COMPOSIZIONE DEL RISPARMIO PER PROFILO

| Profilo | Ore liberate/anno | Valore | % sul totale |
|---|---|---|---|
| Amministratrice Delegata (Garbarino) | 58h | €5.510 | 11% |
| Senior Manager (Zaghi, Cichello, Lorena) | ~235h | €12.877 | 26% |
| PM / Producer / Operativi | ~735h | €26.423 | 52% |
| Amministrazione (Calajò, Remigi) | ~156h | €5.590 | 11% |

**Il 52% del valore viene liberato a livello operativo** — le persone che oggi perdono più tempo su attività a basso valore aggiunto.

---

## BENEFICI NON QUANTIFICATI (QUALITATIVI)

Oltre al risparmio in ore, Link produce benefici che non si traducono direttamente in ore ma in valore strategico:

1. **Visibilità in tempo reale**: Garbarino vede lo stato di tutte le 260 commesse senza chiedere a nessuno. Oggi non è possibile.

2. **Tracciabilità dell'evoluzione budget**: facing a 3 stadi (previsionale → pre-chiusura → consuntivo). Oggi non esiste.

3. **Riduzione del rischio contabile**: zero fornitori orfani a fine anno. Zero chiusure incomplete inviate a BC. Compliance migliorata.

4. **Capacità aumentata senza assumere**: le 1.184 ore liberate equivalgono a ~0,7 FTE. A parità di organico, Noloop può gestire più commesse.

5. **Data-driven decision making**: con Sally NLP, la direzione può fare analisi che oggi non fa perché richiederebbero troppo tempo manuale (marginalità per tipo cliente, per commerciale, per destinazione, trend stagionali).

6. **Integrazione BC reale**: il "barbatrucco" della fatturazione attiva diventa un automatismo vero. Il rischio di errore umano nell'inserimento manuale viene eliminato.

---

## NOTE METODOLOGICHE

- I costi orari sono stime basate su benchmark di mercato per agenzie eventi corporate a Milano. Vanno validati con il cliente.
- Le ore risparmiate sono calcolate come differenza tra il processo attuale e il processo con Link a regime.
- Non si considera il periodo di transizione (primi 3-6 mesi) durante il quale il risparmio sarà inferiore per la curva di apprendimento.
- I volumi (260 COM, 650 fatture attive, 26 COM con fatture mancanti) sono basati su dati dichiarati dal cliente o stime condivise durante le interviste.
- Il tasso di adozione dello scenario realistico (85%) tiene conto della resistenza al cambiamento segnalata da Lorena ("faccio un po' fatica a immaginarmelo") sulla parte di budget digitale.

---

## LEGENDA FONTI

| Simbolo | Significato |
|---|---|
| 🟢 **Dato cliente** | Dichiarato esplicitamente durante le interviste |
| 🟡 **Stima condivisa** | Stimato da Carlo e validato con il cliente |
| 🔵 **Assunzione** | Stima nostra basata su benchmark e contesto |