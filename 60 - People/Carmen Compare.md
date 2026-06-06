---
type: person
role: Data Analyst (On Trade — NOT)
company: NoLoop
created: 2026-04-30
updated: 2026-06-01
sources: [Organigramma NoLoop 17/03/2025]
---
<!-- auto-updated by cowork-sessions-index 2026-05-08 20:30 | source-session: local_4c933da1-0348-4ef3-8a6d-de4a6bc1b514 | source-lastActive: 2026-05-08 ~20:00 -->


# 👤 Carmen Compare

- **Ruolo**: **Data Analyst** — divisione On Trade (NOT)
- **Manager**: [[Massi Sinigaglia]] (Managing Partner On Trade)
- **Azienda**: NoLoop

## Funzione operativa

Data Analyst NOT (counterpart Maria Elena Poso). Stakeholder importante per:
- Capire i flussi dati attuali NOT (App NOT + CRM BAT Sharpend + Pard)
- Validare il modello dati di [[Operation Transformation]]
- Misurare impatto della soluzione (KPI promoter, tempi data entry)

In chat è citata come riferimento per "Carmen deep dive" (Wave 2 NoLoop test 3).

## Interazioni recenti

### 2026-06-01
- **Call "NOT | Allineamento richieste tecniche"** (Carmen + Justin + Carlo, 50 min). Carmen porta la **richiesta di automatizzare l'inserimento delle vendite** (eliminare la tripla registrazione manuale che blocca le sue risorse da remoto), con **mandato di Massi a darle priorità** sul modello predittivo — *"mi interessa più il risultato finale"*. Concordata soluzione **form unico + utenza admin Carmen + invio via RPA** (dettaglio in [[Operation Transformation]] Log 1/6). **Confermata referente per l'ingestion dello storico** dati NOT/BAT (storico per anno/mese/settimana su codice univoco vendita; possibili errori su modello/colore/data). Descrive il proprio workflow di riconciliazione (scarico Excel da app NOT, confronto BAT/PARD via formule doppioni/ricerca verticale). Conferma che senza blocco campi obbligatori "è certezza matematica" che i promoter saltino campi. Aggiorna Carlo **lunedì 8/6** sull'escalation API in sede BAT.

### 2026-05-29
- **Email diretta a Carlo (CC Justin) — oggetto "Richieste tecniche"** (29/5 16:21). Carmen apre il primo canale proattivo lato cliente: *"Io e Justin stavamo riflettendo su alcune questioni tecniche intorno alla piattaforma di cui vi state occupando, mi piacerebbe parlartene. Noi lunedì siamo operative... se avevi in programma un weekend lungo, rimetto a te la scelta della data."* Richiesta call su [[Operation Transformation]] (lei + Justin). Carlo conferma disponibilità lunedì 1/6 pomeriggio (niente ponte Festa della Repubblica), dalle 15:00 — bozza risposta preparata 29/5, Justin in CC. **Carmen passa da stakeholder reattivo a richiedente attivo di un confronto tecnico.** Temi probabili: stato API BAT/PARD (switch a Piano B proposto 19/5 mai confermato), ingestion storico dati (suo dominio da Data Analyst), mappatura campi delle 3 piattaforme.
- **Email finale inviata 29/5**: call su **Teams** lunedì 1/6 dalle 15:00 (in attesa conferma orario lato loro). Carlo condivide il recap dei 3 punti aperti (API BAT/PARD · ingestion storico dati · mappatura campi dei form attuali sulle 3 piattaforme) e chiede a Carmen/Justin di anticipare temi/dubbi lato loro per capire se coinvolgere il team tecnico.
- **Carmen conferma 29/5**: *"per noi va bene lunedì dalle 15 in poi 🙂"* — call confermata lun 1/6 dalle 15:00 su Teams. Anticipa il tema che vogliono portare: *"l'opportunità di crearci uno strumento di automazione per l'inserimento di alcuni dati"* → potenziale nuovo perimetro / Change Request su Operation, da inquadrare (vedi [[Operation Transformation]] Log 29/5). Conferma il suo ruolo di interlocutrice attiva sul fronte dati/automazione.

### 2026-05-14
- **In CC su email reminder Carlo a Justin** (TO Justin · CC Carmen+Laila). Carlo introduce ufficialmente al cliente il tema **ingestion storico dati per taratura modello predittivo** emerso dalla call interna 13/5 con Federico+Simone: *"come già anticipato in fase di analisi, per la configurazione del modello predittivo dobbiamo partire con l'ingestion iniziale dei dati storici. Se possibile, indicatemi i referenti corretti da coinvolgere così ci organizziamo per una call nei prossimi giorni."* Carmen è probabile candidata principale come referente (Data Analyst NOT), in attesa di indicazione formale da NoLoop.

### 2026-05-13
- **Call ingestion storico in pipeline** — Carlo nella bozza email a Germano 13/5 ([[00 - Inbox/2026-05-13 - BOZZA Email Germano Eye Cookies partenza sviluppi]]) anticipa l'organizzazione di una call dedicata con Carmen per **ingestion iniziale dei dati storici NOT/BAT** che farà da base storico per addestrare il modello predittivo di [[Eye Cookies]]. Slot da confermare al rientro di Carmen, possibile accorpamento con la call demo Microlog se ha senso operativo. **Carmen passa da contesto "validatore modello dati" a stakeholder operativo attivo** sul progetto Eye Cookies (oltre Operation Transformation).

## Sessioni Cowork correlate

- 2026-05-08 sera — `local_4c933da1` — wikificazione in cluster [[20 - Projects/NOT/_NOT|_NOT]] e [[20 - Projects/NoLoop/_NoLoop|_NoLoop]] (validatore modello dati Operation Transformation, conferma esplicita Carlo: "Carmen è responsabile logistica operativa e data analysis di NOT") → [[2026-05-08 - Indice sessioni#Sessione 10 — Vault link checker batch fix orfani 24→0]]
