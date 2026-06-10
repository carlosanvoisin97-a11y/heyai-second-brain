---
type: meeting_minute
project: Eye Cookies
client: NoLoop (NOT)
created: 2026-05-28
date: 2026-05-28
time: 13:35-14:17 (42 min)
attendees: [Carlo Sanvoisin, Germano Marano, Simone Montanari (team di sviluppo), Federico Saladino (team di sviluppo)]
absent_but_to_inform: [Massi Sinigaglia, Marco Merli]
meeting_type: bisettimanale ricorrente (1ª istanza)
source_transcript: 80 - Sources/Files/Eye Cookies/2026-05-28 — Trascrizione call bisettimanale Eye Cookies.docx
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Minuta assorbita nelle schede via §15.bis (28/5); qui resta la copia integrale. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# Minuta — Eye Cookies | Allineamento bisettimanale #1

**Data**: giovedì 28 maggio 2026, 13:35-14:17 (42 min)
**Partecipanti**: Carlo Sanvoisin (HeyAI), Germano Marano (NoLoop/NOT), team di sviluppo (Simone Montanari + Federico Saladino)
**Da aggiornare**: Massi Sinigaglia (sponsor commerciale, Germano si fa carico)

---

## Sintesi esecutiva (5 righe)

Prima call bisettimanale Eye Cookies positiva. Demo dashboard amministrazione HeyAI live a Germano (impressed: "mi aspettavo una presentazione, invece voi mi avete fatto vedere già"). Identificato bloccante endpoint Microlog (traccia singola utente non recuperabile) → Germano richiede a Microlog tracce realistiche/fake-void. K-ippun Haru exit confermata (acquisita da Miroglio, 600M, 40 negozi): apre opportunità scala. Decise 2 opzioni Totem da portare al cliente (riciclato durevole + scenografico brandizzabile). Strategia BAT consolidata: Germano sente Massi, HeyAI prepara materiale presentazione.

---

## Topic 1 — Stato dell'arte applicativo (demo dashboard)

**Cosa è stato mostrato a Germano**:
- Sezione registrazione utente
- Sezione zone (sync da Microlog + arricchimento descrizione)
- Sezione tag (skin/Premium/Gucci/etc come attributi cross-categoria)
- Sezione prodotti (zona, nome commerciale, brand, prezzo, SKU, barcode, descrizione, target genere unisex/F/M, età min/max, tag) + AI auto-tagging da descrizione (placeholder)
- Sezione utenti con UID opaco (mail fittizia generata dal sistema HeyAI)
- Sezione tracks (mocked perché endpoint Microlog non funzionante)
- Sezione carrelli con tag profile + matrice pesi tag/zona + items & breakdown

**Algoritmo cross-reference vetrine (key differentiator)**: il sistema non identifica direttamente l'interesse a "hydration" ma a "vetrina 2"; capisce il reale interesse tramite intersezione di vetrine visitate. Esempio: vetrina 2 (hydration+skin+premium) ∩ vetrina 5 (expensive non-hydration) → interesse reale = Premium. Profilazione multi-dimensionale (categoria, fascia prezzo, brand).

**Reazione Germano**: forte apprezzamento. Citazioni: *"mi aspettavo una presentazione, invece voi mi avete fatto vedere già"* + *"ma figurati e come potevo crederlo? cioè sarebbe stato un pregiudizio il mio"*.

---

## Topic 2 — Bloccanti tecnici Microlog

### 🚨 Bloccante: endpoint traccia singola utente non funziona
- L'endpoint Microlog restituisce **solo dati aggregati periodici**, non la traccia singola del determinato utente.
- Loop chicken-and-egg: Microlog crea la traccia singola solo a partire dall'identificazione via totem, ma HeyAI ha bisogno della traccia per implementare il carrello virtuale prima di avere utenti reali.
- **Soluzione concordata in call**: Germano chiederà a Microlog di **generare tracce realistiche/fake/void** (pattern "utente 17 con questa mail → 10 tracce con 10 mail diverse"), HeyAI fa tutto il resto. Anche solo 10 tracce prima della chiusura K-ippun Haru a fine maggio sarebbero "oro".

### Near real-time API Microlog
- Conferma esplicita Germano: *"oggi poi ho richiesto un preventivo per il Real Time o near Real Time"*.
- Carry-over dal 25/5, ora confermato: in attesa preventivo Microlog. Possibile upgrade vs batch G+1 attualmente in scope MVP.

### Endpoint nuovo vs vecchio
- Germano nota: *"loro ne hanno fatto un altro di hanno fatto un rilascio, hanno dato un altro endpoint, ma mi avevano assicurato che il vecchio endpoint avesse continuità"*.
- Simone conferma: il base URL funziona, è l'endpoint specifico /tracks il problema.

### UID utente (proposta opaca HeyAI)
- Sistema HeyAI già pronto in entrambi gli scenari (email tipizzata vs ID generico). Worst case email, target ID generico.
- Germano OK al pattern UID opaco: *"in nessun database c'è immagine + mail dell'utente, sono due sistemi totalmente diversi che parlano con mail finte/opache"*.

---

## Topic 3 — K-ippun Haru exit & scenario commerciale

- **K-ippun Haru exit confermata**: acquisita da **Miroglio** (600M fatturato, aprirà **40 negozi**).
- **Pop-up Firenze chiude fine maggio**: sensori smontati.
- **Germano ha già proposto a Miroglio installazione in negozio vero e proprio** (più grande, più sensori, study sul caso): risposta parziale ricevuta — *"c'è interesse, vogliono approfondire"*.
- **Plan B**: pop-up altro cliente.
- **Implication temporale**: dati freschi solo fino a chiusura pop-up Firenze. Dopo: gap settimane fino a nuova installazione.
- **Implication strategica**: Miroglio potenziale vettore di scala più grande di BAT. Germano: *"se entriamo da kipunaro diventa competitivo. Chi dei due brand è più importante? loro dal punto di vista retail sono molto più presenti rispetto obiettivi"*.

---

## Topic 4 — Strategia commerciale BAT

- BAT resta cliente target principale (*"sempre nella retrocamera del cervello"*, *"è il nostro cliente principale, che è il nostro target"*).
- Massi ha già toccato BAT a livello manageriale, ottenuto "dimostrazione di interesse".
- BAT attualmente impegnati su apertura nuovi pop-up — momento di transizione operativa.
- **Potenziale dichiarato**: 50 pop-up se BAT firma — *"non è banale"*.
- **Decisione**: HeyAI prepara **materiale di supporto presentazione** = (1) demo dashboard live + (2) 2 render Totem + (3) analisi tag come valore aggiunto analytics. Carlo: *"qualcosa di tangibile, di concreto, così per fargli afferrare il valore di questa soluzione"*. Germano: *"certo, lì bisogna stimolarli nell'interesse, considerando che loro hanno 7 8 prodotti no che si differenziano sul core, bisogna cercare di capire il vero valore aggiunto"*.
- **Action Germano**: sentire Massi per stato relazione BAT e date presentazione.

---

## Topic 5 — Totem (2 opzioni decise)

Due opzioni messe sul tavolo, **decisione condivisa di portarle entrambe al cliente**:

| Opzione | Caratteristiche | Costo unitario | Ciclo vita | Brandizzazione |
|---|---|---|---|---|
| **A — Riciclato durevole** | Hardware neutro/poco branded, telecamere-style, costruito per durare, spostabile da installazione a installazione | Più alto | Lungo (ammortizzato) | Bassa |
| **B — Scenografico brandizzabile** | Plastica/legno/fieristico, ricostruibile per ogni installazione | Più basso | Breve (~2 mesi, si segna) | Alta (BAT/Kipunaro/Miroglio per ogni cliente) |

- **Carlo suggerisce di valorizzare l'Opzione B per BAT** come effetto "wow" + gancio commerciale aggiuntivo.
- **Germano accoglie**: *"ma brandizzata intendi brandizzabile? va bene, parliamo anche con Massi di questo, ci sono due opzioni sul tavolo, vediamole entrambe e poi decidiamo"*.
- **Edge computing aggiunto da Simone**: il totem farà **cache locale** (come fanno i sensori Microlog) per robustezza a outage di connettività. Costo: "centinaia di euro non migliaia", si somma a scenografia. Architettura: edge computing in store + sync con sistema multitenant centrale.
- **Action team di sviluppo**: sollecitare team hardware su proposta scritta + **render delle 2 opzioni** per la prossima call.

---

## Topic 6 — Multi-SIM / kit connettività

- Discusso ma **riposizionato**: utilità reale è su Operation Transformation, non Eye Cookies.
- Germano: *"forse avrà più impatto per il progetto operation che per i cookie, perché poi alla fine il punto di contatto con i cookie è strettamente legato a Microlog che immagino abbia nei sensori anche un sistema di backup"* — corretto, sensori Microlog hanno cache + drain a connessione ripristinata.
- **Utilità reale Operation Transformation**: operatori in centro commerciale con smartphone su applicativo web-only, connessione instabile in alcune posizioni.
- **Soluzione proposta da Simone**: terminale collegato a WiFi dipendenti centro commerciale + backup SIM cellulare bilanciate via aggregazione connessioni. *"abbiamo la stabilità che è l'aggregazione di tutte le varie"*.
- **Implication governance**: Germano apre richiesta a Massi → *"chiedo a Massi se dovrò seguire anche il progetto operation"*. Potenziale unico punto di contatto tecnico NoLoop per entrambi i progetti NOT.

---

## Topic 7 — Architettura IP HeyAI ↔ Microlog (gatekeeper Germano)

- **Riserva esplicita Simone**: il blocco software in costruzione è interessante anche per Microlog stessa → *"gli stiamo regalando un patentino ingegneristico che loro si possono costruire"*. Atteggiamento difensivo richiesto.
- **Germano gatekeeper attivo**: replica immediata *"ma noi non dobbiamo farglielo vedere"* + dichiarazione esplicita *"io rappresento essenzialmente questo protocollo... ci siamo accordati che nessuno ruba il mestiere all'altro... il patto tacito è anche scritto via email"*.
- **Pattern locked-in**: comunicazione con Microlog = solo input/output via API, no condivisione codice sorgente. HeyAI non costruirà sensori, Microlog non farà piattaforma.
- **Implication operativa**: zero condivisione architettura interna con Microlog. La parte interessante (algoritmo cross-reference vetrine, layer multi-tenant, AI tagging) resta black box.

---

## Topic 8 — Cadenza & prossima call

- **Cadenza bisettimanale confermata**.
- **Slot di oggi 28/5**: giovedì 13:35 (non 15:30 come previsto a calendario). Slot ricorrente definitivo da consolidare in email follow-up.
- **Proposta Carlo in chiusura**: bisettimanale Operation Transformation alternato a Eye Cookies (una call Eye Cookies, una Operation). Germano OK ma **condizionato a conferma Massi** su Germano-as-tech-Operation.

---

## 📋 Action items (chi fa cosa)

### Carlo (HeyAI)
1. **#p1 — Email follow-up call 28/5 a Germano** (Germano: *"fate voi un email di follow-up? — Sì, ci penso io"*). 6 punti da coprire:
   - (a) richiesta tracce realistiche generate da Microlog (anche fake/void)
   - (b) sollecito aggiornamento decisione Miroglio (negozio vero vs pop-up alternativo)
   - (c) due opzioni Totem da portare al cliente
   - (d) richiesta Germano a Massi su tech-Operation
   - (e) proposta bisettimanale Operation alternato
   - (f) presentazione BAT (materiale di supporto da preparare)
   - Bozza paste-ready in `[[00 - Inbox/2026-05-28 - BOZZA Email follow-up call bisettimanale Eye Cookies a Germano]]`
2. **#p1 — Allineamento interno con team di sviluppo** per conferma slot bisettimanale ricorrente definitivo (giovedì 13:30 o 15:30)
3. **#p1 — Roadmap aggiornata Eye Cookies** da consolidare con team di sviluppo (carry-over 25/5) — base per la prossima call bisettimanale
4. **#p2 — Materiale presentazione BAT** in coordinamento con Germano: demo dashboard + 2 render Totem + analisi tag

### Germano (NoLoop / NOT)
1. **#p1 — Aggiornare Massi** sugli avanzamenti Eye Cookies (call 28/5, demo dashboard, bloccanti Microlog, opzioni Totem)
2. **#p1 — Trasmettere a Microlog richiesta tracce realistiche/fake-void** per UID utente — sblocco bloccante implementazione carrello virtuale
3. **#p1 — Chiedere a Massi** se Germano deve seguire anche Operation Transformation lato tecnico
4. **#p1 — Sentire Massi su stato relazione BAT** e date presentazione
5. **#p2 — Aggiornamento decisione Miroglio** (negozio vero vs pop-up altro cliente) per riposizionamento sensori post-K-ippun Haru fine maggio
6. **#p2 — Monitoraggio preventivo Microlog near real-time API** (carry-over dal 25/5)

### Team di sviluppo (HeyAI side)
1. **#p1 — Simone solleciti team hardware** su proposta scritta + **render 2 opzioni Totem** (riciclato durevole + scenografico brandizzabile) per la prossima call bisettimanale
2. **#p1 — Continuare implementazione con mock tracks** in attesa tracce realistiche Microlog
3. **#p2 — Specifica edge computing del terminale** (cache locale + sync multi-tenant) da consolidare con team hardware

---

## Citazioni testuali strategiche

- **Germano (gatekeeper IP)**: *"io rappresento essenzialmente questo protocollo che tu mi hai appena descritto, cioè per il fatto fatto di non aver... ci siamo accordati che nessuno ruba il mestiere all'altro... il patto tacito è anche scritto via email"*
- **Germano (promoter BAT)**: *"il nostro cliente principale, che è il nostro target, no, che è BAT, perché se a loro piace ci sono ampi margini anche di estendere un sistema del genere a 50 pop-up quindi non è banale"*
- **Germano (Miroglio scale)**: *"se entriamo da kipunaro diventa competitivo. Chi dei due brand è più importante? loro dal punto di vista retail sono molto più presenti rispetto obiettivi"*
- **Germano (apertura tech-Operation)**: *"chiedo a Massi se dovrò seguire anche il progetto operation e poi ne parliamo"*
- **Germano (reazione demo)**: *"mi aspettavo una presentazione, invece voi mi avete fatto vedere già"* + *"ma figurati e come potevo crederlo? cioè sarebbe stato un pregiudizio il mio"*
- **Germano (near real-time)**: *"oggi poi ho richiesto un preventivo per il Real Time o near Real Time"*
- **Simone (riserva IP)**: *"gli stiamo regalando un patentino ingegneristico che loro si possono costruire"*
- **Simone (architettura black box)**: *"con loro la comunicazione resta solamente input, output, interfacce, cosa c'è nel black box sta a noi e a loro non deve interessare"*

---

## Note di gestione

- **Massi non era presente** alla call — sponsor commerciale aggiornato da Germano. Per la prossima call considerare se invitarlo come occasionale per topic strategici (BAT, Miroglio).
- **Microlog non era presente** alla call — Germano ribadisce governance centralizzata: Microlog coinvolto solo su input suo, con lui sempre presente. Carry-over: valutare se/come organizzare call dedicata Microlog dopo il primo bisettimanale (decisione 25/5 confermata).
- **Tono Germano**: collaborativo, pragmatico, ammirativo per l'avanzamento. Aperto a opportunità di scala (BAT, Miroglio). Strong-alignment IP HeyAI vs Microlog ribadito esplicitamente.
- **File trascrizione integrale**: salvato in `80 - Sources/Files/Eye Cookies/2026-05-28 — Trascrizione call bisettimanale Eye Cookies.docx`.
- **Schede vault aggiornate** (commit 28/5):
  - [[Eye Cookies]] — Log + 7 nuovi task + decisioni architetturali + reconcile checkbox (3 chiusi)
  - [[Germano Marano]] — Interazione 28/5 + Citazioni testuali da preservare + pattern di interazione rinforzato
  - [[Massi Sinigaglia]] — Aggiornamento via Germano (decisione su BAT + tech-Operation in carico a lui)
  - [[Operation Transformation]] — Stakeholder Germano potenziale + bisettimanale alternato + multi-SIM riposizionato qui
