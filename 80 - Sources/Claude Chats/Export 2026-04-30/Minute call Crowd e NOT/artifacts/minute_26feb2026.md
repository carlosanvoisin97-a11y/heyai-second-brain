# MINUTE RIUNIONE

- **Data:** 26/02/2026
- **Durata:** ~1h 34min
- **Partecipanti:** Carlo Sanvoisin (PM / Soolutions), Federico Saladino (Tech Lead / Sviluppatore)
- **Oggetto:** Allineamento su Crowd (demo e feedback cliente) e NOT (revisione requisiti e stima economica)

---

## EXECUTIVE SUMMARY

Call di allineamento operativo su due progetti: **Crowd** (tool gestione eventi) e **NOT** (piattaforma gestione pop-up store per Noloop/Glow). Per Crowd, confermata la **demo di lunedì 3 marzo** nonostante alcune funzionalità pendenti; i bug segnalati da Lorena non sono bloccanti. Per NOT, completata la **revisione dell'intero requirement log**: la stima di Federico è **€63.000** (bundled vendite + logistica), contro i **€38.000** previsti da Carlo nella presentazione al CEO — gap significativo da negoziare.

---

## DECISIONI PRESE

| # | Decisione | Owner | Note |
|---|-----------|-------|------|
| 1 | **Demo Crowd confermata per lunedì 03/03** | Carlo / Federico | Nessun bug bloccante per la demo |
| 2 | **WhatsApp agent → late development** | Carlo | Sarà comunicato al cliente come sviluppo posticipato; costo assorbito in moduli futuri (pagamenti / OnSite / Sally) |
| 3 | **Calendario turni collettivo → escluso** (evolutiva futura) | Carlo | Nice to have, da vendere separatamente |
| 4 | **Timbratura cartellino → inclusa** nella stima NOT | Federico | Federico la "regala" perché mancante dal suo documento requisiti |
| 5 | **Integrazione BAT tramite API non ufficiale o browser automation → no manutenzione** | Federico | Fix a pagamento una tantum in caso di rottura |
| 6 | **Esclusione prodotti per singolo pop-up → fuori stima** | Carlo / Federico | Da proporre come evolutiva al cliente |
| 7 | **GDPR, scansione magazzino, Google Trends → esclusi** | Federico | Come da requirement log |
| 8 | **Formazione operatori → esclusa** per ora | Carlo | Training iniziale gestito da Carlo; modulo formazione in roadmap futura |

---

## PUNTI DISCUSSI

### 1. Crowd — Stato test e comunicazione a Lorena

- Lorena ha inviato **3 email di feedback** (primo feedback, secondo feedback, terza email)
- Federico conferma: **nessuna anomalia reale** — la maggior parte dei problemi erano errori d'uso (es. import Excel con colonne sbagliate)
- Il **register/compilatore** è ancora da sistemare, ma non è bloccante
- Federico invia a Carlo il **template Excel di import** come esempio per Lorena
- **Messaggio concordato per Lorena:** le funzionalità segnalate non sono ancora a punto perché Federico si sta concentrando sul cuore del sistema (logiche di assegnazione, roaming, grouping); i test possono comunque procedere; ci si vede lunedì per un **flusso end-to-end** insieme
- **Contesto:** Lorena probabilmente non testerà prima di lunedì (è malata); Arianna è rientrata dall'India

- **Tempistiche completamento Crowd:** Federico stima **8 giorni max** (caso peggiore 2 settimane) dopo la demo per chiudere le funzionalità pendenti

### 2. Crowd — Questione WhatsApp Agent

- **Disaccordo** su se il WhatsApp agent fosse incluso nel requirement log originale: Carlo è convinto fosse dentro (colore incluso); Federico sostiene fosse di un altro colore (escluso)
- **Punto di accordo:** necessità di comunicare meglio internamente; per il futuro, Federico ha preparato un **documento dettagliato punto per punto** con indicazione chiara di cosa è incluso e cosa è da quotare a parte
- **Strategia per lunedì:** comunicare WhatsApp come **late development**, giustificandolo con l'effort extra messo nelle funzionalità core (assegnazione, roaming, grouping, modalità operatore check-in)
- **Action:** preparare una **lista delle funzionalità extra** sviluppate rispetto allo scope originale, da usare come leva nella conversazione
- **Opzioni per assorbire il costo WhatsApp:**
  - Includerlo nel **modulo pagamenti** (prezzo maggiorato)
  - Venderlo tramite **OnSite** (app partecipanti) o **Sally 2.0**
  - Federico: la logica di Sally Global Agent è identica → meglio sviluppare una volta sola e riusarla
- **Stima WhatsApp + modulo pagamenti:** Federico indica **€25-26.000**
- **Nota:** Bruno ha riferito che la **Garbarino era molto interessata** a OnSite

### 3. NOT — Revisione requisiti (condivisione schermo su Notion)

Federico ha condiviso il documento completo dei requisiti. **Funzionalità incluse nella stima:**

- **Setup iniziale:** interfaccia, censimento, registrazione, giacenze Milano/magazzini, import storico vendite (per training modello)
- **Modello predittivo:** basato su vendite e stagionalità (integrazione Google Trends **esclusa**)
- **Gestione ordini verso BAT:** ordini, proposte di replenishment con output per pop-up store
- **Gestione prodotti:** onboarding nuovi prodotti, ereditarietà modelli (nuova sigaretta elettronica → match con modello precedente)
- **Registrazione vendita:** scansione **MyGlow tramite fotocamera** con riconoscimento automatico modello/colore/prezzo (approccio ibrido: computer vision + QR code + fallback manuale); autocompilazione orario vendita e pop-up; inserimento manuale genere/età cliente
- **Computer vision:** modello dedicato da addestrare; rischio **falsi positivi** su prodotti simili; necessità di conferma operatore; dipendenza dalla qualità fotocamera del dispositivo → **da chiarire se NOT fornisce device ai dipendenti**
- **Onboarding nuovi prodotti:** possibilità di fotografare il prodotto per addestrare il modello
- **Workflow magazziniere:** conferma per quantità aggregate (no scansione singolo prodotto); alert discrepanze; aggiornamento automatico giacenze post-conferma
- **Check-in merce BAT:** registrazione codici MyGlow; aggiornamento giacenze; gestione bolla [DA VERIFICARE integrazione]
- **Workflow approvazione ordini:** visualizzazione, approvazione, modifica
- **Dashboard/Analytics:** real-time per pop-up, magazzino, prodotti; previsione rottura stock (predittiva, non garantita); ottimizzazione distribuzione scorte per minimizzare vendite perse; segnalazione anomalie consumo gadget vs vendite; cross-check triplo vendite/giacenze/incasso
- **Gestione prezzi:** centralizzata (impostata da Armin); logica sconto clienti registrati vs prezzo pieno
- **Registrazione utente BAT:** processo a due step (registrazione su sistema NOT + registrazione su BAT, disaccoppiabili se BAT offline)
- **Tipologie pop-up:** vendita diretta vs vendita tramite tabaccaio (tracciamento legame venditore-tabaccaio); possibilità di cambiare tipologia nel tempo con trasporto dati
- **Performance:** store e venditori (esclusa dalla stima base)
- **Analytics parametri modello:** visualizzazione e regolazione fine-tuning modello predittivo (esclusa)
- **APP mobile-first**, sistema ruoli e permessi, interfaccia magazziniere semplificata

### 4. NOT — Architettura multi-tenant e pop-up con prodotti diversi

- **Chiarimento importante:** i pop-up sono **brandizzati per singolo cliente** (es. pop-up Glow separato da pop-up trucchi Kynaru), **non** misti
- Federico inizialmente pensava vendessero tutto nello stesso pop-up → cambia architettura
- **Implicazione tecnica:** necessità di logiche di **filtraggio per tipo di pop-up** su tutte le funzionalità (replenishment, analytics, check-in, vendita, dashboard)
- Discussione accesa sull'entità della complessità: Carlo lo vede come un "nodo a monte"; Federico sottolinea che impatta trasversalmente ogni feature
- **Feature aggiuntiva proposta** (fuori stima): possibilità di **bandire specifici prodotti** da un pop-up store

### 5. NOT — Stima economica e negoziazione

- **Stima Federico (bundled vendite + logistica):** €63.000
- **Budget Carlo (presentato al CEO):** €38.000
- **Gap: €25.000** — discussione aperta
- Carlo chiede pausa per consultare Andrea (business case) e verificare margini di manovra
- Federico disponibile a scendere un po'; si valuta recupero tramite **evolutive future** (calendario turni, esclusione prodotti per pop-up, formazione, etc.)
- **Contesto strategico:** Carlo ricorda che ci sono **altri 4 moduli in pipeline** (staffing BAT, staffing, fornitori, gestione documentale, customer service) + lavori Noloop

---

## QUESTIONI APERTE / PARKING LOT

| Tema | Contesto | Da chiarire con |
|------|----------|-----------------|
| **Integrazione BAT** | API ufficiali? Reverse engineering endpoint? Browser automation? | NOT / BAT |
| **Responsabilità downtime BAT** | Se BAT offline, registrazione scontata non possibile → colpa del cliente, non nostra | Carlo (da inserire in quotazione) |
| **Device dipendenti pop-up** | Qualità fotocamera impatta riconoscimento prodotti; NOT fornisce telefoni? | Carlo / Cliente |
| **Unificazione 3 form** | Attesa info dal cliente su campi richiesti e possibilità di droppare form legacy | Carlo / Cliente |
| **Stima NOT: gap €63K vs €38K** | Carlo deve consultare Andrea e verificare budget massimo | Carlo / Andrea / Federico |
| **Monte ore / performance venditori** | Serve tracciamento ore per calcolo vendite/ora; collegato a timbratura cartellino | Federico |
| **Separazione database multi-brand pop-up** | Istanze separate (glo.store vs trucchi.store) o singola istanza con filtraggio? | Federico |

---

## ACTION ITEMS

| # | Azione | Responsabile | Deadline | Priorità |
|---|--------|--------------|----------|----------|
| 1 | Inviare **template Excel di import** a Carlo (per Lorena) | Federico | 26/02/2026 (oggi) | Alta |
| 2 | Scrivere **email a Lorena**: funzionalità in corso, template import, test non bloccati, conferma demo lunedì | Carlo | 26/02/2026 (oggi) | Alta |
| 3 | Preparare **lista funzionalità extra** sviluppate rispetto a scope originale Crowd (armi per lunedì) | Carlo + Federico | Entro 02/03/2026 | Alta |
| 4 | Aggiungere nel documento requisiti NOT la **nota su responsabilità downtime BAT** | Federico | TBD | Media |
| 5 | Consultare **Andrea** su business case e margini di budget per NOT | Carlo | 26/02/2026 (oggi) | Alta |
| 6 | **Richiamare Federico** dopo confronto con Andrea per chiudere negoziazione prezzo | Carlo | 26/02/2026 (oggi) | Alta |
| 7 | Completare **documento requisiti NOT** su Notion (aggiungere timbratura cartellino, nota BAT, onboarding prodotti) | Federico | TBD | Media |
| 8 | Definire strategia comunicazione **WhatsApp → late development** per demo di lunedì | Carlo | Entro 02/03/2026 | Alta |

---

## PROSSIMI PASSI

- [ ] **Lunedì 03/03** — Demo Crowd con Lorena (flusso end-to-end)
- [ ] **Oggi/domani** — Carlo richiama Federico dopo consultazione con Andrea per chiudere su pricing NOT
- [ ] **Entro venerdì 06/03** — Federico chiude funzionalità pendenti Crowd (caso ottimistico)
- [ ] **Entro 12/03** — Deadline worst-case per completamento Crowd (2 settimane max)
- [ ] Definizione pricing finale NOT e preparazione quotazione per cliente

---

## NOTE AGGIUNTIVE

- **Lorena** (cliente Crowd): malata, probabilmente non testerà prima di lunedì
- **Arianna**: rientrata dall'India, disponibile per test
- **Bruno** (manager Carlo): ha riferito che **Laura Garbarino** (CEO Noloop) era molto interessata a OnSite
- **Germano** (referente cliente NOT): ha dichiarato in call precedente che una volta accettato l'ecosistema Soolutions, si lega → ma ha chiesto di non essere "bastonato" sui prezzi
- **Armin**: gestisce la parte prezzi centralizzata per NOT
- **Simone**: menzionato come esperto di sistemi con fallback di connessione (5G/backup)
- **Andrea (Porello)**: ha preparato il business case per NOT; Carlo lo consulta per margini di budget
- Tensione costruttiva tra Carlo e Federico sulla questione WhatsApp: entrambi riconoscono la necessità di **migliorare la comunicazione interna** su scope e requisiti
- Federico sta preparando requirement log dettagliati con **colori espliciti** (incluso/escluso/da quotare) per evitare ambiguità future
- **Riutilizzo cross-progetto:** computer vision per NOT riutilizzabile anche per **Eldis**; Sally Global Agent riutilizzabile in Crowd