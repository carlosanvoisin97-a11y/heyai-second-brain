# PIANO OPERATIVO COMPLETO — Post Allineamenti 11-12 Marzo 2026
## Sintesi iper-dettagliata per Carlo come PM

---

# PARTE 1: SINTESI OPERATIVA — PROSSIMI PASSI IN ORDINE DI PRIORITÀ

| # | Azione | Deadline | Chi | Urgenza |
|---|---|---|---|---|
| 1 | **Fare il Gantt direzionale** con tutte le soluzioni, tempistiche, tranche pagamento e milestone "firma contratto" | Entro questa settimana (promesso nell'email) | Carlo + input Fede/Simone | 🔴 CRITICA |
| 2 | **Far partire Fede sul Venue Finder** — portarlo nell'ecosistema + presentazioni automatiche | SUBITO (Garbarino: "immediatamente") | Federico + nuova risorsa junior | 🔴 CRITICA |
| 3 | **Chiudere Crowd base** — Builder Email + Plus One + provider Amazon SES | Demo Lorena: lunedì prossimo | Federico | 🔴 CRITICA |
| 4 | **Definire requisiti LeadMe Evolution con Ilia** — focus efficientamento, NON scraping proattivo | Oggi/domani (Garbarino: "fallo anche stasera") | Carlo + Ilia → poi Zaghi review | 🔴 CRITICA (deadline 15 aprile) |
| 5 | **Chiamare Garbarino a bruciapelo** — spiegare la storia di LeadMe (low budget, regalo di Federico) | Appena pronti i requisiti con Ilia | Carlo (1:1 con LG) | 🟠 ALTA |
| 6 | **Mandare a Garbarino** il Gantt → Bruno lo discute con lei (7:30 AM) | Post completamento Gantt | Carlo prepara → Bruno presenta | 🟠 ALTA |
| 7 | **Sbloccare provider email** — rispondere a Marco Merli: "andiamo su Amazon SES" | Subito | Carlo → Marco Merli → team IT Noloop (Avast) | 🟠 ALTA |
| 8 | **Check task Minutes su Wrike** — completati vs pending | Questa settimana | Carlo | 🟡 MEDIA |
| 9 | **Call con Fede per fine tuning Minutes** — campo evento, duplicati, language switch | Questa settimana | Carlo + Federico | 🟡 MEDIA |
| 10 | **Push LeadMe in produzione** — fix bug segnalati | Appena Fede ha un momento | Federico | 🟡 MEDIA |
| 11 | **Allineare Massimiliano (NOT)** sul tema database unificato | Quando LG lo recupera | Carlo o LG | 🟡 MEDIA |
| 12 | **Ragionamento MVP Flow** | Post-Gantt | Carlo + Fede/Simone | 🔵 BASSA (per ora) |

---

# PARTE 2: DETTAGLIO PER WORKSTREAM

---

## A. IL GANTT — LA CHIAVE DI TUTTO

### Cosa deve contenere
Bruno è stato chiaro: non deve essere perfetto, deve essere direzionale. Ma deve avere:

- **Righe:** ogni soluzione (Venue Finder, Crowd completamento, LeadMe Evo, Link, Flow MVP, OnSite, Sally, Minutes Evo)
- **Colonne:** timeline settimanale, con milestone visibili
- **Milestone obbligatorie per ogni riga:**
  - Firma contratto (con data retroplanning)
  - Acconto
  - Inizio sviluppo
  - Fase test
  - Release
- **Tranche di pagamento:** collegate alle milestone

### Perché è critico
Paolo vuole il Gantt per valutare i flussi di cassa e capire come gestire le agevolazioni fiscali. Senza Gantt, Paolo non approva. Senza Paolo, non si firma. Senza firma, Fede non viene pagato.

### Come lo presenta Bruno
Bruno: "Ce penso io. Tu l'importante è che mi fai il Gantt e poi ci penso io. La chiamo alle 7:30 del mattino." Quindi: Carlo prepara → lo gira a Bruno → Bruno lo discute con LG → LG lo passa a Paolo.

### Attenzione
Bruno: "Non ti preoccupare se ci metti una settimana in più o in meno. Dagli un orizzonte. Poi io spiego che è un Gantt direzionale." Ma i numeri (costi per riga) devono esserci.

---

## B. VENUE FINDER EVOLUTION — PRIORITÀ 1 GARBARINO

### Contesto
Garbarino l'ha detto 3 volte in modi diversi: la programmazione è in collo di bottiglia. Arrivano brief su brief, hanno 4-5 persone e non ce la fanno. Anche Lorena conferma. Questa è la priorità assoluta perché risolve un pain point che stanno vivendo ADESSO.

### Cosa va fatto
1. Portare il Venue Finder dentro l'ecosistema (oggi è standalone su Gemini)
2. Sostituire Gemini con Claude per la parte copy (Carlo: "Claude scrive in maniera perfetta")
3. Tenere Gemini per la parte ricerca (integrato con Google)
4. Usare OpenRouter come hub per i diversi modelli AI
5. Aggiungere selezione foto mano a mano (come su Crowd per gli hotel)
6. Generazione automatica della presentazione grafica (PowerPoint o Figma — da decidere con il cliente)
7. Lorena ha testato il VF standalone e confermato che il flusso funziona

### Output per PowerPoint vs Figma
Carlo ha proposto Figma (partnership Claude-Figma). Lorena è aperta ma vuole output PDF. Compromesso: qualsiasi tool che produca PDF. Da decidere con i dev.

### Budget e contratto
Quotato a €8.000. LG ha detto "fallo partire". Ma NON ha firmato niente. Carlo ha deciso di far partire Fede lo stesso pagandolo di tasca sua ("mi prendo io l'onere"). Federico deve onboardare una risorsa junior per questo.

### ⚠️ RISCHIO
Se Paolo ci mette tempo con le agevolazioni fiscali, il contratto non si firma per settimane ma il lavoro è già partito. Carlo si espone finanziariamente.

---

## C. CROWD — CHIUDERE LA BASE

### Stato
Quasi ultimato. Demo con Lorena fissata per lunedì prossimo.

### Pending prima della demo
- Builder Email: Fede deve sistemarlo
- Plus One: aggiunta manuale accompagnatori (Fede ci sta lavorando, Lorena ha visto il box)
- Rooming: Lorena e Arianna dicono che è "troppo arzigogolata" — semplificare. Nello specifico: la tipologia camera non deve essere vincolante all'inserimento dell'hotel (possono cambiare fino alla fine)

### Provider Email — AZIONE IMMEDIATA
Marco Merli ha mandato email per il provider. La raccomandazione è Amazon SES, NON ActiveCampaign, per due motivi:
1. Costa meno
2. Se Crowd viene rivenduto ad altre agenzie (LG vuole farlo), Amazon scala meglio

Chi deve procedere: il team IT di Noloop (Avast, i loro consulenti) apre la licenza Amazon → HeyAI la integra nel sistema. Carlo deve sbloccare Marco Merli su questo.

### Sequenza concordata con Lorena
1. Chiudere la base (provider email + fix) ← SIAMO QUI
2. Testare con un evento da 20 persone
3. Solo DOPO: OnSite
4. Solo DOPO: Stripe (pagamenti)
5. Solo DOPO: Landing premium (tipo sito Fideuram)

### ⚠️ ATTENZIONE
Lorena: "Finché non abbiamo la certezza che funzioni come diciamo noi e possiamo dire ok adesso lo possiamo provare con un evento di 20 cristiani, per me non è release." Non accelerare su OnSite e Stripe finché la base non è solida.

### Feature aggiuntive Fede (non richieste, regalate)
- Dashboard live per hotel (link condivisibile anziché solo export Excel) — da mostrare alla demo
- Sally per creazione campi automatica
- Mappa interattiva voli con alert ritardi

### Lorena ha dato un benchmark competitivo
Ha detto che avevano chiesto preventivi ad altre realtà con pricing più bassi, ma senza AI, senza Sally, senza rooming avanzato. Conferma che HeyAI è "in linea con il mercato" sulla base completa. La proprietà intellettuale è di Noloop (importante per la rivendita).

---

## D. LEADME EVOLUTION — LA SITUAZIONE PIÙ DELICATA

### Cosa è successo nella call commerciale (11 marzo)
LG ha detto cose molto dure:
- "Se non riusciamo a fare una cosa del genere, abbiamo fatto un CRM del *****"
- "45.000€? Voglio capire che ***** mi dà"
- "Prima di aggiungere cose on top, rendiamolo veloce e utilizzabile"
- "Non mi sparare un prezzo"

### Cosa vuole DAVVERO Garbarino
NON lo scraping proattivo. NON l'AI icebreaker. NON le feature evolute. Vuole:
1. **Velocità:** entrare, cercare, trovare subito — non scrollare 600 contatti
2. **Vista dall'alto:** vedere il sentiment/status di tutti i lead senza cliccare uno per uno
3. **Filtri:** fidelizzati vs new business, last action date, lead abbandonati
4. **Struttura company:** holding → figlie (es. BNP Paribas → Cardiff, Harval)
5. **Semplicità:** "rendiamolo semplice prima di metterci sopra altre robe"

### La deadline
**15 aprile.** LG: "Io il 18 parto, ritorno, poi andiamo via per un evento. Lo voglio vedere prima di andare via." Non negoziabile.

### Chi fa cosa
- **Ilia Gardelli** (senior, appena entrata): nominata da LG come punto di riferimento. Deve mettere giù i requisiti, condividerli con Zaghi, Marco e Carlo.
- **Carlo**: allineamento con Ilia (oggi pomeriggio), finalizzare requisiti, mandare a Fede
- **LG**: "Non mi chiedere OK, quello che ti dicono Ilia e Laura per me è oro colato. Dimmi solo il quanto."
- **Zaghi e Marco**: review finale, ma non devono essere loro a definire

### Il tema soldi — LA BOMBA DA DISINNESCARE
LG non sa che LeadMe è stato essenzialmente regalato. Crede di aver pagato tanto e di dover pagare ancora. La realtà:
- Noloop ha pagato ~€15.000 per lo scraper (aggiornamento Excel)
- Federico si è rifiutato di fare l'Excel, ha sviluppato un CRM intero gratis
- Il CRM con scraper attivo è costato a Carlo/Fede circa €5.000-7.000 di effort reale
- Tutto il resto (training, call, documentazione, consulenza) = ore non pagate di Carlo
- Carlo ci ha rimesso economicamente

### Piano d'azione per disinnescare
1. ✅ Finire i requisiti con Ilia (focus efficientamento)
2. Presentare i requisiti a Zaghi (farle capire il valore, voce per voce)
3. Chiamare Garbarino a bruciapelo (Lorena: "chiamala a bruciapelo")
4. Nella 1:1 con LG spiegare: "Con l'investimento iniziale avete coperto lo scraper. Il CRM è un regalo. Per farlo diventare uno strumento professionale serve un investimento contenuto — ve lo dettaglio voce per voce."
5. Non farlo davanti a tutti (come è successo nella call, dove non poteva rispondere)

### ⚠️ RISCHI
- La Zaghi è "terrorizzata" di portare costi a LG. Non lo farà lei.
- Se Carlo non fa la 1:1 con LG, il messaggio non arriva mai.
- LG va gestita con i numeri, non con le scuse: "Non mettere in dubbio il prezzo, dimmi cosa mi dà."

### Cosa NON quotare (per ora)
- Scraping proattivo (LG: "non abbiamo la struttura")
- AI icebreaker
- Company scraping avanzato
Tutto questo va in roadmap futura. Ora: efficientamento puro.

### Cosa quotare
Stima: €15.000-20.000 max (LG: "Non mi sparare". Bruno: "Puoi anche togliere 5.000, l'importante è che capisca cosa stai facendo.")
- Vista pipeline/funnel (colonne per status)
- Filtri avanzati (fidelizzato/new business, last action date, lead dormiente)
- Struttura holding/figlie
- Ordinamento alfabetico aziende
- Performance improvements (velocità caricamento pagine)
- Export Excel
- Allineamento database completo (Cichello, NOT se confermato)

---

## E. MINUTES — EVOLUZIONI

### Da fare
- Check task Wrike (completati/pending)
- Campo "Evento": capire come gestirlo
- Call Carlo + Fede per test e fine tuning
- Language switch: solo nei settings iniziali, una volta settato non si cambia più
- Evitare duplicati: studiare come impedire che utenti creino la stessa minuta due volte
- Partire con sviluppo ricezione call esterne (senza transcript Teams)
- Organizzare sessione feedback con team Noloop

### Priorità
Media. Le call esterne sono una quick win già confermata. Il resto è manutenzione.

---

## F. FLOW — MVP (da ragionare)

### Stato
LG nella mail pre-meeting aveva detto no a Flow. Poi Carlo le ha spiegato che è architetturale (senza Flow, Link perde valore). LG tramite Bruno: "se è fondamentale, ok, ma facciamolo in prototipo."

### Prossimo passo
Ragionare con Fede/Simone su un MVP a perimetro ridotto: task da Minutes + vista Kanban base + push dati a Link. Niente mobile, niente Sally integrata, niente contratti. Quotazione proporzionalmente bassa.

---

## G. LINK, ONSITE, SALLY — in attesa del Gantt

### Stato
Confermati come priorità strategiche nella mail a Paolo e Laura. In attesa che Paolo valuti i flussi di cassa con il Gantt. Non partono finché non c'è firma.

### OnSite
LG entusiasta ("che bello!"). Lorena consiglia di aspettare che Crowd base sia chiuso prima di partire. Sally integrata in OnSite al posto di WhatsApp (zero costi per messaggi, più analytics).

---

# PARTE 3: DINAMICHE INTERNE DA GESTIRE

---

## 1. Il triangolo LG — Zaghi — Carlo

| Persona | Comportamento | Come gestirla |
|---|---|---|
| **LG (Garbarino)** | Esplosiva, decide in fretta, vuole capire cosa paga, non legge email lunghe. Si calma dopo le esplosioni. | Chiamare a bruciapelo (mattina presto). Andare dritti: "costa X, ti dà Y". Mai scusarsi per il prezzo. |
| **Zaghi** | Terrorizzata di portare costi a LG. Dice "per favore farmelo passare sotto il tappeto". Ma ottima alleata operativa. | Farle capire il valore voce per voce. Non mandarla avanti da sola per le quotazioni. |
| **Marco Pasquali** | Pragmatico, orientato al risultato. A volte scontro con Zaghi ("sei aggressiva"). Alleato per il database unificato. | Tenerlo allineato. Non metterlo in mezzo ai conflitti Zaghi-LG. |

## 2. Il tema NOT

LG ha detto (in call commerciale, davanti a tutti): "NOT la chiudiamo" e "BAT non vuole rinnovare con NOT."

Implicazioni per HeyAI:
- Il progetto NOT (sito web, proposta €125K) potrebbe saltare se NOT viene chiusa
- iCookies (behavioral tracking per BAT) perde senso se BAT esce
- Bruno: "Se salta iCookies ci siamo tolti un problema quasi"
- Ma: i residui NOT vengono assorbiti sotto Noloop → le soluzioni servono comunque per altri clienti
- LG ha anche parlato di **term sheet firmato** con un'altra azienda + altra azienda in discussione (con Fineco, Sky, etc.) → Noloop in espansione, avranno bisogno degli strumenti

### Cosa fare
Nulla di immediato. Tenere gli occhi aperti. Non investire troppo effort su NOT-specifico. Concentrarsi su soluzioni che funzionano per Noloop a prescindere da NOT.

## 3. Il pressing su Federico

Carlo è in una posizione critica:
- Fede ha lavorato gratis su LeadMe
- Ora deve partire subito su Venue Finder (senza contratto firmato)
- Deadline LeadMe Evo: 15 aprile
- Crowd da chiudere per lunedì
- Minutes evoluzioni in parallelo

Federico costa €500/giornata. Carlo gli deve pagare acconti di tasca sua in attesa delle firme. La liquidità HeyAI è sotto pressione.

### Come gestire
- Far partire Venue Finder (€8K, quasi certo — LG ha detto sì)
- Su LeadMe: non partire finché non c'è la 1:1 con LG e un OK sul budget
- Crowd: completare e basta, è già pagato
- Onboardare la risorsa junior per Venue Finder (libera Fede per LeadMe)

## 4. Info sensibile: acquisizioni in corso

LG ha rivelato (in modo quasi accidentale) che Noloop ha firmato un term sheet con un'altra azienda e sta discutendo con una seconda. Questo significa:
- Noloop si sta espandendo
- Arriveranno nuovi contatti, nuovi clienti, nuovi brief
- Lo strumento CRM diventa ancora più critico (argomento per LeadMe)
- Crowd diventa ancora più importante (potenziale rivendita)

Usare questa info con cautela nella 1:1 con LG: "Laura, se state crescendo e arriveranno nuovi nominativi, è ancora più importante che il CRM funzioni bene dal giorno uno."

---

# PARTE 4: CHECKLIST GIORNALIERA

### OGGI
- [ ] Mandare messaggio a Marco Merli su Amazon SES
- [ ] Call con Ilia per requisiti LeadMe (pomeriggio)
- [ ] Dire a Federico: parti sul Venue Finder, onboarda la junior
- [ ] Check Wrike su Minutes

### DOMANI
- [ ] Finalizzare requisiti LeadMe con Ilia → condividerli con Zaghi e Marco
- [ ] Iniziare il Gantt con input da Fede/Simone
- [ ] Mandare a Fede i pending Crowd per la demo di lunedì

### QUESTA SETTIMANA
- [ ] Completare il Gantt → girarlo a Bruno
- [ ] Bruno chiama LG con il Gantt
- [ ] Preparare la 1:1 con LG su LeadMe (dopo aver i requisiti e il "quanto")
- [ ] Call con Fede su Minutes (fine tuning)
- [ ] Demo Crowd con Lorena (lunedì)

### PROSSIME 2 SETTIMANE
- [ ] 1:1 con Garbarino (LeadMe storia + nuovo pricing)
- [ ] Firma contratto (se Paolo dà OK dopo il Gantt)
- [ ] Fede inizia sviluppo LeadMe Evo
- [ ] Venue Finder: prime funzionalità visibili
- [ ] Minutes: partire con call esterne

### ENTRO 15 APRILE
- [ ] LeadMe efficientato e funzionante (deadline LG, non negoziabile)
- [ ] Venue Finder nell'ecosistema con presentazioni automatiche