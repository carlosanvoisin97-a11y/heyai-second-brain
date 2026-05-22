# Noloop Wave 2 — Analisi Gestionale e Budgeting
## Come risolvere il nodo del budget, del Progress e dell'integrazione con Business Central
**Basato su: Lorena Cavecchi (Programmazione/Operativo), Laura Zaghi (Commerciale/Supervisore), Antonio Cichello (BU Consumer), Roberta Calajò + Elisa Remigi (Finance/Admin), call dev 19/02, AFU Link originale**

---

## 1. IL PROBLEMA COME LO RACCONTANO LORO

### Cosa dice chi ci lavora tutti i giorni

**Lorena Cavecchi (programmazione/operativo BU Garbarino):**
> "Il budget deve stare fuori. Non è standardizzabile. Sono troppo dettagliati. Ogni cliente ha il suo format Excel."
> "Se io devo mettere da una parte per poi tirarlo fuori e rimetterlo nel loro format, faccio il doppio del lavoro."
> "Il consuntivo ha due facce: quella del cliente e quella interna. Al cliente facciamo il format Excel, poi noi ci facciamo il calcolo dei fornitori con la registrazione delle fatture."

Lorena però conferma che:
- Inserire i dati aggregati (per macro-voce/reparto) nel gestionale ha senso
- Gli operativi possono caricare contratti e fatture durante il lavoro
- Sally che legge i contratti ed estrae scadenze/condizioni di pagamento/cancellazione = grande valore
- Il blocco alla chiusura se mancano fatture = necessario ("non ti dico quante volte gli operativi si dimenticano")
- L'aggiornamento settimanale al gestionale da parte della prima linea di Laura è fattibile

**Laura Zaghi (commerciale/supervisore BU Garbarino):**
> "Quanto tempo mi prende il Progress? Tantissimo. Da impazzire, non ha senso."
> "Io lo faccio di tutti, non solo dei miei. E poi cambia lo status, cambia il budget..."
> "Devo contattare il commerciale per chiedere la marginalità di apertura, di uscita..."

Zaghi conferma che:
- La COM si apre alla ricezione del brief (non alla conferma)
- Nel Progress inserisce: budget più basso all'apertura, poi aggiornamento a conferma, poi budget di chiusura
- Perde tempo enorme a raccogliere informazioni che altri hanno ma non condividono
- Se tutto fosse nella commessa digitale condivisa, lei vedrebbe i dati senza rincorrere le persone

**Antonio Cichello (BU Consumer):**
> "Progress vs Business Central doppio inserimento = no-sense, lo dico da 3 anni."
> "Sul Progress non puoi analizzare niente, solo totali e percentuali."
> 280 COM/anno, aggiorna il Progress GIORNALMENTE (vs settimanale di Zaghi).

**Roberta Calajò + Elisa Remigi (Finance/Admin):**
> "Business Central è il gestionale amministrativo. È il vecchio Navision Dynamics."
> "Noi apriamo la commessa da subito perché dobbiamo tracciare ogni costo e ogni ricavo."
> "Ogni avanzamento di budget dovrebbe essere comunicato... sì, no, avviene."
> "La mia popolazione non distingue una fattura da una ricevuta da una nota spesa."
> "Se noi non andiamo a rincorrere le fatture noi stessi, abbiamo fornitori aperti senza documentazione."

Calajò conferma che:
- BC è intoccabile, gestisce ciclo attivo e passivo
- Il Progress è uno strumento che loro NON usano per comparazione con BC
- Progress = più impegno delle persone, distribuzione del lavoro, carico lavori
- BC = contabilità, facing, proiezioni economiche
- Le buone API di BC permettono integrazione
- Il budget pre-chiusura è obbligatorio prima della partenza dell'evento

### Sintesi: il vero nodo

Il problema non è il budget in sé (Excel funziona per il lavoro quotidiano), ma:
1. **Il Progress è un lavoro manuale enorme** che duplica informazioni già esistenti altrove
2. **Nessuno condivide i dati spontaneamente** → Zaghi rincorre, Calajò rincorre, le fatture si perdono
3. **BC e Progress vivono in mondi separati** → doppio inserimento confermato da tutti
4. **Non c'è tracciabilità dell'evoluzione del budget** → Garbarino lo vuole ma non lo ha
5. **Le fatture si perdono** → fornitori aperti a fine anno senza documentazione

---

## 2. LA SOLUZIONE PROPOSTA

### Principio guida: non sostituire Excel, catturare i dati nei momenti giusti

L'Excel resta lo strumento di lavoro quotidiano per il budget operativo. È troppo variabile, troppo dettagliato, ogni cliente ha il suo format. Tentare di replicarlo in un applicativo genererebbe resistenza e doppio lavoro.

La soluzione è creare un **sistema di cattura intelligente** che intercetta i dati nei momenti chiave e li aggrega automaticamente, eliminando il Progress manuale e alimentando sia Link (gestionale) che Business Central.

### I 5 momenti di cattura del budget

```
MOMENTO 1          MOMENTO 2           MOMENTO 3          MOMENTO 4          MOMENTO 5
Budget cliente  →  Budget proposta  →  Budget conferma →  Budget pre-chiusura → Consuntivo finale
(dal brief)        (per il cliente)     (confermato)       (prima di partire)    (post-evento)
    │                   │                    │                   │                    │
 Minutes            Upload Excel         Passaggio          Obbligo di           Upload fatture
 estrae             o inserimento        pratica            aggiornamento        + riconciliazione
 automatico         macro-voci           a operativo        per tutti            automatica
    │                   │                    │                   │                    │
    ▼                   ▼                    ▼                   ▼                    ▼
   LINK              LINK                 LINK               LINK                 LINK
   + BC              (+ BC se             + BC               + BC                 + BC
                     significativo)                          (obbligatorio)       (chiusura)
```

### Come funziona, momento per momento

**MOMENTO 1 — Budget iniziale (dal brief)**
- **Chi**: il commerciale/client lead
- **Quando**: alla ricezione del brief, contestualmente all'apertura COM
- **Come**: Minutes trascrive il brainstorming, Sally estrae automaticamente il dato di budget comunicato dal cliente. Se il dato non è nella trascrizione, il sistema chiede al commerciale di inserirlo manualmente (campo obbligatorio per aprire la COM).
- **Dove va**: Link apre la commessa con budget iniziale → push a BC per apertura COM + cash flow planning
- **Dati**: nome cliente, evento, date, destinazione, budget del cliente, margine atteso, responsabile commerciale

**MOMENTO 2 — Budget previsionale (per la proposta)**
- **Chi**: la programmazione (BU Garbarino) o il PM direttamente (BU Cichello)
- **Quando**: dopo il lavoro di ricerca location, fornitori, biglietteria — prima dell'invio al cliente
- **Come**: lavorano su Excel come sempre. Quando il budget è pronto per essere presentato al cliente, hanno due opzioni:
  - **Opzione A (light)**: inseriscono le macro-voci per reparto (logistica X€, biglietteria Y€, comunicazione Z€, fee W€, totale T€) direttamente su Link. Prende 2 minuti.
  - **Opzione B (smart)**: caricano l'Excel su Link. Sally lo legge, estrae le macro-voci automaticamente, chiede conferma. L'operatore valida con un click.
- **Se serve approvazione Garbarino**: il sistema manda una notifica di richiesta approvazione. Garbarino approva a sistema, non via email.
- **Dove va**: Link aggiorna la commessa con budget previsionale (snapshot versione 2). Se il delta vs budget iniziale è significativo → alert a BC.
- **Valore**: Zaghi vede in tempo reale il budget proposta per tutte le COM, senza rincorrere nessuno.

**MOMENTO 3 — Budget confermato (passaggio pratica)**
- **Chi**: il commerciale conferma che il cliente ha accettato
- **Quando**: alla conferma del servizio, prima del passaggio pratica all'operativo
- **Come**: il commerciale cambia lo status della commessa da "in proposta" a "confermata". Il sistema registra automaticamente una snapshot del budget previsionale come "budget di conferma". Durante il passaggio pratica (registrato con Minutes), qualsiasi modifica emersa viene catturata.
- **Dove va**: Link registra snapshot versione 3. BC riceve conferma + modalità di pagamento del cliente (dato che la Zaghi ha menzionato come necessario per sbloccare i pagamenti ai fornitori).
- **Valore**: l'operativo che riceve la pratica sa esattamente qual è il budget approvato. Calajò ha il dato aggiornato per il cash flow.

**MOMENTO 4 — Budget pre-chiusura (prima della partenza)**
- **Chi**: tutti i reparti coinvolti (obbligatorio, come confermato da Calajò)
- **Quando**: prima della partenza per l'evento. Deadline configurabile.
- **Come**: il sistema invia un alert a tutti i responsabili coinvolti nella commessa. Ciascuno deve confermare o aggiornare la propria macro-voce. Sally manda reminder finché non lo fanno. Se non aggiornano entro la deadline → escalation al commerciale e a Calajò.
  - L'operativo aggiorna la macro-voce logistica (può caricare l'Excel aggiornato o inserire il dato aggregato)
  - La biglietteria aggiorna i costi trasporti
  - La comunicazione aggiorna i costi creativi/allestimenti
- **Dove va**: Link congela il budget pre-chiusura (snapshot immutabile). BC riceve l'aggiornamento per il facing.
- **Valore**: Calajò ha la fotografia completa PRIMA dell'evento, senza rincorrere nessuno. È il requisito che lei stessa ha espresso come prioritario.

**MOMENTO 5 — Consuntivo finale (post-evento)**
- **Chi**: l'operativo (prepara), il commerciale (approva la parte cliente), Calajò (verifica contabile)
- **Quando**: entro 15 giorni dal ritorno dall'evento (come da procedura confermata da Calajò)
- **Come**: qui interviene la vera automazione.
  - **Fatture già caricate**: durante tutta la fase operativa, gli operativi hanno caricato contratti e fatture nei task di Flow. Queste fatture sono già associate alla commessa.
  - **Riconciliazione automatica**: Link/Sally confronta le macro-voci del budget pre-chiusura con le fatture effettivamente caricate. Segnala:
    - Voci con fattura presente ✅
    - Voci senza fattura ❌ (blocco alla chiusura, come richiesto da Lorena e confermato da Calajò)
    - Fatture senza voce corrispondente ⚠️ (possibili fatture orfane)
    - Scostamento importo fattura vs budget pre-chiusura 📊
  - **Il consuntivo ha due facce** (come specificato da Lorena):
    - **Lato cliente**: l'Excel che va al cliente, format del cliente (questo resta fuori dal sistema)
    - **Lato interno**: costi reali con fatture, marginalità effettiva → questo è ciò che Link gestisce
  - L'operativo rivede il quadro prepopolato, aggiunge/corregge dove necessario, conferma.
  - Il commerciale approva la parte di fatturazione attiva (lato cliente).
  - Calajò/Remigi ricevono il pacchetto completo per la verifica contabile.
- **Dove va**: Link chiude la commessa con consuntivo finale (snapshot definitiva). BC riceve i dati per la contabilizzazione finale.
- **Valore**: il consuntivo si prepara quasi da solo se tutti hanno lavorato su Flow. Le fatture orfane vengono individuate. La Garbarino ha il facing completo: budget iniziale → previsionale → conferma → pre-chiusura → consuntivo.

---

## 3. COME SI ELIMINA IL PROGRESS

Il Progress oggi è un Excel compilato a mano, settimanalmente (Zaghi) o giornalmente (Cichello), con dati aggregati per commessa e per reparto. Zaghi ci perde "tantissimo tempo" e Cichello lo considera "un no-sense".

**Con Link, il Progress non serve più.**

Link diventa il Progress digitale. Le macro-voci che oggi Zaghi inserisce manualmente nel foglio Excel vengono alimentate automaticamente dalle 5 snapshot del budget. In più:

- **Status commessa**: in lavorazione → confermata → operativa → pre-chiusura → chiusa → fatturata (automatico da Link)
- **Budget per reparto/cluster**: logistica, biglietteria, comunicazione, PM — catturati nei 5 momenti
- **Responsabile commerciale, operativo, PM**: assegnati dalla commessa in Link
- **Marginalità**: calcolata automaticamente (budget cliente - costi interni)
- **Facing nel tempo**: le 5 snapshot creano automaticamente la serie storica

La dashboard Garbarino su Link mostra tutto ciò che oggi mostra il Progress, più:
- Analisi in linguaggio naturale (Sally)
- Comparazione automatica tra budget previsto e consuntivo
- Alert su scostamenti significativi
- Vista per BU, per commerciale, per tipo cliente (fidelizzato/new business/mini meeting)

**Per BU Cichello** (one-man-show, 280 COM/anno): l'aggiornamento diventa automatico perché lui stesso aggiorna i task su Flow → i dati salgono su Link senza dover compilare anche il Progress separatamente. Risparmio stimato: 20-25% del suo tempo (sua stima).

**Per BU Garbarino** (multi-reparto): Zaghi smette di compilare il Progress per "tutte le pratiche". Invece vede i dati aggiornati su Link in tempo reale. Quando serve un'informazione, chiede a Sally.

---

## 4. COME SI INTEGRA CON BUSINESS CENTRAL

### Premessa fondamentale
BC è **intoccabile**. Gestisce: ciclo attivo, ciclo passivo, anagrafiche fornitori, contabilità, certificazione dei revisori. Le API sono buone (confermato da Remigi).

### Cosa scorre da Link → BC

| Momento | Dati che vanno a BC | Trigger |
|---------|---------------------|---------|
| Apertura COM | Cliente, evento, date, budget iniziale, margine, responsabile | Creazione commessa su Link |
| Conferma COM | Status confermato, modalità pagamento cliente, budget confermato | Cambio status su Link |
| Pre-chiusura | Budget aggiornato (attivo + passivo) per cash flow | Completamento pre-chiusura |
| Chiusura | Dati consuntivi aggregati, marginalità finale | Chiusura commessa su Link |
| Gara persa | Status "non confermata" → BC chiude la COM | Cambio status su Link |

### Cosa NON fa Link
- NON emette fatture (lo fa BC)
- NON gestisce anagrafiche fornitori (lo fa BC)
- NON gestisce il ciclo pagamenti (lo fa BC)
- NON sostituisce il "barbatrucco" della fatturazione attiva (lo fa BC tramite Remigi)

### Il "barbatrucco" della fatturazione attiva
Oggi i PM compilano un Excel con PO/importi/codici IVA → email a Elisa → Elisa inserisce manualmente in BC. Tutti credono sia automatico. Con Link: il PM inserisce i dati su Link (stessa UX del compilare l'Excel) → Link manda i dati a BC via API → Remigi approva in BC. Il "barbatrucco" si risolve senza cambiare la percezione degli operativi (continuano a inserire i dati nello stesso modo, solo su Link invece che su Excel).

---

## 5. IL RUOLO DI FLOW (TASK MANAGEMENT) NEL BUDGET

Flow è il veicolo naturale per catturare dati di budget durante la fase operativa, senza richiedere inserimenti aggiuntivi.

### Come funziona

Ogni task su Flow può avere:
- **Importo stimato** (dal budget previsionale)
- **Importo confermato** (quando l'operativo conferma il costo)
- **Documenti allegati**: contratto, fattura, preventivo fornitore
- **Tipo task**: libero oppure tipizzato (da dropdown → procedure associate)

Quando l'operativo completa un task che prevede un costo:
1. Inserisce l'importo confermato (o lo estrae dalla fattura caricata)
2. Carica il documento giustificativo (contratto o fattura)
3. Sally verifica che ci sia coerenza tra importo e documento
4. Il dato sale automaticamente su Link come aggiornamento del budget operativo

### Sally legge i contratti (valore confermato da Lorena)

Quando un operativo carica un contratto con un fornitore:
- Sally estrae automaticamente: importo, condizioni di pagamento, scadenze, condizioni di cancellazione
- Crea reminder automatici per le scadenze critiche (rooming list, emissione biglietti, pagamenti scaglionati)
- L'operativo non deve inserire manualmente queste informazioni → le trova già estratte e deve solo confermarle

Questo risolve direttamente il pain point di Lorena: "tante volte dici 'ma quand'è che devo mandare la rooming list?' e devi scatabellare il contratto."

---

## 6. IL RUOLO DI SALLY NEL BUDGET E NEL GESTIONALE

Sally interviene in modo trasversale su tutto il processo:

**Per gli operativi:**
- Estrae dati dai contratti caricati (scadenze, importi, condizioni)
- Aiuta a compilare task via voce ("ho contrattato con il fornitore X, costo finale 2.000€, allego fattura")
- Manda reminder per scadenze contrattuali
- Blocca la chiusura se mancano fatture e spiega cosa manca

**Per i commerciali/client lead:**
- Estrae il budget dal brief/trascrizione del brainstorming
- Prepopola la richiesta di apertura COM
- Monitora lo stato di avanzamento della commessa
- Genera report su richiesta ("quanto margine abbiamo sulla commessa Lamborghini?")

**Per Zaghi (e prima linea Laura):**
- Elimina la necessità di compilare il Progress manualmente
- Segnala proattivamente commesse con dati mancanti o ritardi negli aggiornamenti
- Genera il facing automatico per la Garbarino

**Per Calajò/Remigi:**
- Risponde alle 120 email/settimana di procedure ("cos'è una nota spesa? come si registra una fattura estera?")
- Segnala fatture orfane (spese senza COM associata)
- Alert Revolut per spese non collegate
- Monitora che il pre-chiusura sia stato completato prima della partenza

---

## 7. DIFFERENZE TRA BU GARBARINO E BU CICHELLO

La soluzione deve funzionare per entrambi i modelli:

| | BU Garbarino | BU Cichello |
|---|---|---|
| **Chi compila il budget** | Programmazione (budget proposta), operativo (consuntivo) | PM fa tutto da solo |
| **Chi aggiorna il Progress** | Zaghi per tutti, settimanalmente | Cichello per sé, giornalmente |
| **Passaggio pratica** | Formale: programmazione → operativo | NON ESISTE ("my myself and die") |
| **N° reparti coinvolti** | 3-4 (programmazione, operativo, biglietteria, comunicazione) | 1 (il PM fa tutto) |
| **Come Link li aiuta** | Multi-utente: ogni reparto inserisce la sua macro-voce → Link aggrega → Progress automatico | Single-user: il PM aggiorna i task su Flow → Link auto-popola → zero Progress manuale |
| **Risparmio stimato** | Zaghi: ore/settimana su Progress. Operativi: fatture non perse | 20-25% del tempo di 14 PM (stima Cichello) |

---

## 8. NOTA PER FEDERICO E SIMONE: COSA CAMBIA RISPETTO ALL'AFU ORIGINALE DI LINK

L'AFU originale prevedeva:
- Gestione commesse ✅ (confermata, ma semplificata: solo macro-voci, non dettaglio)
- Piano di Produzione (PDP) con voci di costo ⚠️ (il PDP non è un budget dettagliato — sono le macro-voci per reparto con versionamento automatico a 5 snapshot)
- Risorse umane ❌ (non prioritario per Wave 2)
- Anagrafica clienti ⚠️ (ridotta: il master clienti sta su BC, Link tiene solo il collegamento)
- Anagrafica fornitori ❌ (resta su BC, confermato da tutti)
- Centro Analytics ✅ (confermato, con Sally NLP)
- Link Mobile con rilevazione attività ❌ (non prioritario per Wave 2 — gli operativi usano Flow)

**Cosa si aggiunge:**
- Integrazione BC via API (apertura COM, aggiornamenti budget, chiusura)
- Sistema di 5 snapshot del budget con facing automatico
- Ricezione dati aggregati da Flow (fatture, costi confermati)
- Eliminazione del Progress Excel (Link diventa il Progress)
- Blocco alla chiusura se mancano fatture/documenti
- Upload ed estrazione automatica da Excel del budget (Sally)
- Flusso bidirezionale con LeadMe (status commessa)

**Cosa si toglie:**
- Ciclo attivo e passivo (resta su BC)
- Gestione fornitori e anagrafiche fornitori (resta su BC)
- Dettaglio costi per singola voce (troppo complesso, confermato da Lorena — restano le macro-voci per reparto)
- Link Mobile per timbratura/attività (sostituito da Flow + Sally)

---

## 9. RISCHI E PUNTI APERTI

1. **Adozione**: se gli operativi non caricano fatture e contratti su Flow, il sistema non funziona. Mitigazione: il blocco alla chiusura li obbliga.
2. **Resistenza al cambiamento**: Lorena è scettica sul budget digitale. Mitigazione: non gli cambiamo l'Excel, gli chiediamo solo le macro-voci o l'upload del file.
3. **Complessità BC integration**: da testare su commessa standard il prima possibile. Elisa conferma API buone ma serve proof of concept.
4. **Due facce del budget** (cliente vs interno): Link gestisce solo il lato interno. Il budget lato cliente resta un Excel separato.
5. **Frequenza aggiornamenti**: la Zaghi vuole settimanale, Cichello fa giornaliero. Link deve supportare entrambi i ritmi. Con Flow in mezzo, l'aggiornamento è quasi continuo.
6. **Format Excel del cliente**: ogni cliente ha il suo → impossibile standardizzare l'output verso il cliente. Link NON produce il budget per il cliente.

---

## 10. RIEPILOGO REQUISITI AGGIUNTIVI PER LINK (da integrare nella quotazione)

| # | Requisito | Priorità | Note |
|---|-----------|----------|------|
| 1 | Sistema 5 snapshot budget (versionamento automatico) | ALTA | Cuore della soluzione. Ogni snapshot è immutabile dopo la conferma |
| 2 | Input macro-voci per reparto (inserimento manuale rapido) | ALTA | Logistica, biglietteria, comunicazione, PM, fee. 2 minuti per aggiornamento |
| 3 | Upload Excel + estrazione automatica Sally | MEDIA | L'operativo carica l'Excel, Sally estrae le macro-voci, l'operatore conferma |
| 4 | Push verso BC via API (5 momenti) | ALTA | OAuth Microsoft, testare ASAP su commessa standard |
| 5 | Ricezione dati aggregati da Flow | ALTA | Task completati con importo + fattura → aggiornano il budget operativo |
| 6 | Blocco chiusura senza fatture | ALTA | Se una voce di costo non ha fattura associata → non puoi chiudere |
| 7 | Alert pre-chiusura a tutti i responsabili | ALTA | Deadline configurabile. Reminder automatici. Escalation se non aggiornano |
| 8 | Dashboard Progress automatico (elimina Excel) | ALTA | Vista per BU, per commerciale, per tipo cliente. Facing a 5 snapshot |
| 9 | Flusso approvazione Garbarino | MEDIA | Per budget proposta clienti importanti: notifica → review → approve/reject |
| 10 | Gestione barbatrucco fatturazione attiva | MEDIA | PM inserisce dati su Link → push a BC → Remigi approva in BC |
| 11 | Sally NLP su dati budget/commessa | MEDIA | "Qual è il margine sulla commessa X? Come si è evoluto?" |
| 12 | Export/report per Garbarino | MEDIA | Generazione automatica report periodici (sostituisce il lavoro manuale di Zaghi) |