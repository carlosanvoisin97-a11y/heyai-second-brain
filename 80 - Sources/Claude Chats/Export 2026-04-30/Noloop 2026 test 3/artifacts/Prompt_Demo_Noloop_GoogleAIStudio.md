# PROMPT PER GOOGLE AI STUDIO — Demo Interattiva Noloop Wave 2

Copia e incolla tutto questo prompt su Google AI Studio (Gemini) per generare la demo HTML interattiva.

---

## IL PROMPT

```
Crea un'applicazione HTML singola (un unico file con HTML, CSS e JS inline) che simula una demo interattiva dell'ecosistema di soluzioni AI per un'agenzia di eventi corporate chiamata "Noloop".

IMPORTANTE: questa demo è PURAMENTE ILLUSTRATIVA. Non deve essere funzionale. Deve solo mostrare schermate statiche con dati finti realistici e permettere di navigare tra gli step cliccando sui bottoni. Lo scopo è far vedere il flusso del processo end-to-end durante una presentazione dal vivo.

## DESIGN SYSTEM

- Sfondo principale: grigio scuro (#1a1a2e)
- Card/pannelli: sfondo scuro (#16213e) con bordi sottili (#0f3460)
- Accent primario: viola (#7c3aed)
- Accent secondario: azzurro (#06b6d4)
- Accent successo: verde (#10b981)
- Accent warning: arancione (#f59e0b)
- Accent errore: rosso (#ef4444)
- Testo principale: bianco (#f1f5f9)
- Testo secondario: grigio chiaro (#94a3b8)
- Font: Inter o system-ui, -apple-system
- Border radius: 12px per card, 8px per bottoni
- Stile generale: dark mode, moderno, pulito, enterprise ma non noioso
- Ogni schermata deve avere in alto a sinistra il logo testuale "noloop" in minuscolo con un punto viola, e in alto a destra il nome della soluzione attiva (es. "LeadMe", "Minutes", "Link", "Flow", "Sally")
- In basso a ogni schermata: barra di navigazione con i 5 step del processo (Acquisizione → Proposta → Conversione → Esecuzione → Chiusura) con lo step corrente evidenziato in viola

## STRUTTURA DELLA DEMO

La demo deve avere 12 schermate navigabili in sequenza. Ogni schermata ha:
- Un titolo che indica la fase del processo e la soluzione attiva
- Un contenuto illustrativo (tabelle, card, chat, dashboard — tutto con dati finti ma realistici)
- Un bottone "Prossimo Step →" in basso a destra (viola, grande, ben visibile) che porta alla schermata successiva
- Un bottone "← Indietro" piccolo e discreto in basso a sinistra
- Un indicatore di progresso (es. "Step 3 di 12")

---

### SCHERMATA 1 — LeadMe: Nuovo Lead Identificato
**Fase processo:** Acquisizione
**Soluzione attiva:** LeadMe

Mostra l'interfaccia di LeadMe con:
- Una lista di 5-6 lead sulla sinistra (nomi italiani realistici, ruoli come "Head of Events", "Corporate Communication Manager", aziende come "Kering Italia", "Pirelli SPA", "Lamborghini")
- Un lead selezionato a destra con il dettaglio: nome "Marco Ferretti", ruolo "Head of Corporate Events", azienda "Gucci / Kering Group", LinkedIn icon, email, telefono
- Badge colorati: "🟢 Attivo", "Ultimo contatto: 3 giorni fa"
- Sotto il profilo: una timeline delle interazioni (3-4 entries tipo "Messaggio LinkedIn inviato", "Call esplorativa", "Brief ricevuto ✉️")
- Un bottone viola grande: "📋 Brief Ricevuto → Crea Commessa"
- In basso: un alert Sally azzurro: "💡 Sally: Marco ha cambiato ruolo 2 settimane fa. Verificato: ora è VP Events del gruppo Kering."

Il bottone "Prossimo Step →" porta alla schermata 2.

---

### SCHERMATA 2 — Minutes: Brainstorming Call
**Fase processo:** Proposta
**Soluzione attiva:** Minutes

Mostra l'interfaccia di Minutes con:
- In alto: barra con "📹 Call: Brainstorming Kering — Incentive Barcellona 2026" e data/ora
- A sinistra: trascrizione della call con 6-8 righe di dialogo con speaker diversi colorati:
  - "Laura Zaghi: Il budget è di 180.000€ per 120 partecipanti, 3 notti a Barcellona..."
  - "Lorena Cavecchi: Dobbiamo trovare almeno 3 location alternative, una sul mare..."
  - "Alessandro: Per i voli guarderei Vueling e Iberia, periodo fine settembre..."
- A destra: pannello "Analisi Automatica" con:
  - "📊 Riepilogo: Incentive 3 notti Barcellona, 120 pax, budget 180K€"
  - "✅ Decisioni: Periodo fine settembre, target hotel 4-5 stelle"
  - "📋 Action Items:" con 4 task colorati (assegnati a Lorena, Alessandro, Laura, segreteria)
  - "🏢 Apertura COM:" box con i dati pre-compilati: Cliente: Kering | Evento: Incentive Barcellona | Budget: 180.000€ | Margine atteso: 22% | Tipo fatturazione: IVA
- Un bottone viola: "✅ Conferma Apertura COM → Link + Business Central"

---

### SCHERMATA 3 — Sally (Venue Finder): Ricerca Location
**Fase processo:** Proposta
**Soluzione attiva:** Sally — AI Venue Finder

Mostra un'interfaccia chat con Sally a sinistra e risultati a destra:
- Chat a sinistra con conversazione:
  - Utente: "Cerca hotel 4-5 stelle a Barcellona, fronte mare, 120 pax, con sale meeting da almeno 150 persone"
  - Sally: "Ho trovato 4 opzioni che corrispondono ai tuoi criteri. Te le mostro con foto e dettagli 👇"
- A destra: griglia di 4 card hotel con:
  - Nome hotel (es. "W Barcelona", "Hotel Arts Barcelona", "Hilton Diagonal Mar", "ME Barcelona")
  - Placeholder immagine (rettangolo grigio con icona 🏨)
  - Rating: ⭐⭐⭐⭐⭐
  - Prezzo indicativo: "€185/notte camera doppia"
  - Checkbox di selezione (2 selezionati con bordo verde)
  - Capacità sale meeting
- In basso: bottone viola "📊 Genera Presentazione con le location selezionate →"

---

### SCHERMATA 4 — Link: Budget Previsionale (Stadio 1)
**Fase processo:** Proposta
**Soluzione attiva:** Link — Gestionale

Mostra una tabella tipo spreadsheet con il budget previsionale:
- Header: "COM-2026-0847 | Kering — Incentive Barcellona | Stadio: 📋 PREVISIONALE"
- Badge in alto a destra: "In Gara" (giallo)
- Tabella con colonne: Voce | Reparto | Importo Previsto | Note
- 8-10 righe realistiche:
  - Hotel W Barcelona (3 notti × 60 camere) | Programmazione | €66.600 | Tariffa corporate confermata
  - Voli A/R Milano-Barcellona (120 pax) | Biglietteria | €28.800 | Vueling, prezzo bloccato fino 15/07
  - Transfer aeroporto-hotel | Logistica | €4.200 | 3 bus gran turismo
  - Cena di gala | Operativo | €18.000 | Location esterna da definire
  - Allestimento sala plenaria | Operativo | €8.500 | Render in preparazione
  - Team building attività | Programmazione | €12.000 | 3 opzioni proposte
  - Comunicazione e materiali | Creativo | €6.500 | Grafiche + welcome kit
  - Fee PM | PM | €14.400 | 8% sul budget
- Riga totale: TOTALE €159.000 | Budget cliente: €180.000 | Margine: €21.000 (11.7%)
- In basso a sinistra: icona Sally con "💡 Il margine è sotto il 15% target. Vuoi che ti suggerisca dove ottimizzare?"
- Bottone: "📤 Invia per approvazione Garbarino →"

---

### SCHERMATA 5 — Pitch: Modulo Creativo
**Fase processo:** Proposta
**Soluzione attiva:** Pitch — Modulo Creativo

Mostra l'interfaccia del modulo creativo con:
- A sinistra: pannello "Analisi Brand" con:
  - Logo placeholder "KERING"
  - Brand colors estratti (3 colori)
  - "Tone of voice: Luxury, sofisticato, minimal"
  - "Competitor recenti: Moncler ha fatto incentive a Marrakech, Prada a Lisbona"
- Al centro: 3 card con output creativi:
  - "🎨 Render Sala Plenaria" con placeholder immagine e badge "Generato da AI"
  - "🎬 Mini-Video Location (45 sec)" con player finto e badge "Voiceover IT"
  - "📊 Presentazione Logistica (12 slide)" con badge "Auto-generata da Venue Finder"
- A destra: chat Sally con "Ho generato il render della sala plenaria con l'allestimento Kering. Vuoi che aggiunga la composizione floreale al centro?"
- Bottone: "📧 Invia Proposta al Cliente →"

---

### SCHERMATA 6 — Link: Gara Vinta → Conversione
**Fase processo:** Conversione
**Soluzione attiva:** Link — Gestionale

Schermata di transizione che mostra:
- Al centro un grande badge verde con icona ✅: "GARA VINTA"
- Sotto: "COM-2026-0847 | Kering — Incentive Barcellona"
- 3 card che mostrano le azioni automatiche:
  - "🔄 Link: Commessa aggiornata a stato 'Confermata'" con check verde
  - "🔄 Business Central: COM aggiornata + condizioni pagamento cliente inserite" con check verde
  - "🔄 Crowd: Istanza evento creata — pronta per gestione partecipanti" con check verde
  - "🔄 LeadMe: Lead Kering aggiornato → 'Gara Vinta'" con check verde
- In basso: "Minutes ha programmato il debrief operativo per domani alle 10:00"
- Bottone: "Vai al Debrief Operativo →"

---

### SCHERMATA 7 — Flow: Task Operativi Assegnati
**Fase processo:** Esecuzione
**Soluzione attiva:** Flow — Task Management

Mostra una board Kanban con 4 colonne:
- **Da Fare** (4 card): "Conferma hotel W Barcelona" (Lorena), "Emissione biglietti aerei" (Biglietteria), "Definire menù cena di gala" (Alessandro), "Preparare welcome kit" (Creativo)
- **In Corso** (3 card): "Sopralluogo sala plenaria" (Lorena, badge 🟡), "Contratto transfer" (Alessandro), "Rooming list" (Segreteria)
- **In Attesa** (1 card): "Render allestimento definitivo" (Ivano — bloccato da conferma sala)
- **Completato** (2 card): "Prenotazione voli ✅" (Biglietteria), "Briefing segreteria ✅" (Laura)
- Ogni card mostra: titolo, assegnatario, scadenza, 1-2 tag colorati (reparto)
- In alto a destra: filtri per reparto e persona
- Alert Sally in basso: "⚠️ Lorena: la rooming list è in scadenza tra 3 giorni (deadline contrattuale hotel)"
- Bottone: "Vedi Sopralluogo in corso →"

---

### SCHERMATA 8 — Flow Mobile: Sopralluogo con Sally
**Fase processo:** Esecuzione
**Soluzione attiva:** Flow + Sally (Mobile)

Mostra un mockup di smartphone al centro dello schermo (frame iPhone) con:
- In alto: "📍 Task: Sopralluogo Sala Plenaria — W Barcelona"
- Una chat Sally dentro il task:
  - 🎙️ Audio transcription: "La sala è di circa 200mq, soffitto alto 4 metri, buona per il nostro setup. L'unico problema è il pilastro centrale che va mascherato con una composizione floreale. Le prese di corrente sono solo sul lato sinistro, servirà una prolunga per il tecnico audio."
  - Sally risponde: "✅ Ho strutturato le tue note:
    • Sala: 200mq, h 4m — adeguata
    • Criticità: pilastro centrale → necessaria composizione floreale
    • Criticità: prese corrente solo lato SX → servono prolunghe audio
    Ho creato 2 sotto-task: 'Composizione floreale pilastro' e 'Prolunghe audio tecnico'."
- 2 foto placeholder sotto (rettangoli grigi con 📸)
- Bottone in basso del telefono: "📸 Aggiungi Foto" e "🎙️ Registra Nota"
- Fuori dal telefono: testo "L'operativo aggiorna i task direttamente da mobile durante il sopralluogo. Sally trascrive, struttura e crea sotto-task automaticamente."
- Bottone: "Torna alla vista Desktop →"

---

### SCHERMATA 9 — Link: Budget Pre-Chiusura (Stadio 2)
**Fase processo:** Esecuzione
**Soluzione attiva:** Link — Gestionale

Stessa tabella budget della schermata 4, ma aggiornata:
- Header: "COM-2026-0847 | Kering — Incentive Barcellona | Stadio: 🔶 PRE-CHIUSURA"
- Badge: "Operativa — Partenza tra 12 giorni" (arancione)
- Tabella aggiornata con importi diversi e più righe:
  - Hotel W Barcelona → €68.400 (era 66.600) con icona 📎 "Contratto allegato"
  - Una nuova riga: "Composizione floreale pilastro" | Operativo | €1.800 | Aggiunto post-sopralluogo
  - Colonna aggiuntiva: "Fattura" con icone ✅ (associata), ⚠️ (mancante), ⏳ (in attesa)
  - 4 righe con ✅, 3 con ⚠️, 2 con ⏳
- Totale aggiornato: €167.200 | Delta vs previsionale: +€8.200 (+5.2%)
- Margine aggiornato: €12.800 (7.1%) — badge rosso "Sotto target"
- Barra comparazione: previsionale (grigio) vs pre-chiusura (viola) con delta evidenziato
- Alert Sally: "⚠️ 3 voci non hanno ancora fattura associata. Mancano 12 giorni alla partenza. Ho inviato reminder a Lorena e Alessandro."
- Bottone: "Vai alla Chiusura Post-Evento →"

---

### SCHERMATA 10 — Link: Chiusura con Blocco (Stadio 3)
**Fase processo:** Chiusura
**Soluzione attiva:** Link — Gestionale

Mostra la schermata di chiusura con il meccanismo di blocco:
- Header: "COM-2026-0847 | Kering — Incentive Barcellona | Stadio: 🔴 CHIUSURA"
- Badge: "Post-evento — Giorno 8 di 15 per la chiusura"
- Una checklist di quadratura:
  - ✅ Budget interno completato (tutte le voci valorizzate)
  - ✅ 8/10 fatture passive associate e presenti in BC
  - ❌ 2 fatture passive mancanti:
    - "Ristorante La Boqueria — Cena gala (€4.200)" → badge rosso "Fattura non pervenuta"
    - "Fiorista Flores BCN — Composizione (€1.800)" → badge rosso "Fattura non pervenuta"
  - ⚠️ Template fatturazione attiva: compilato ma non ancora inviato
  - ✅ Spese Revolut: tutte collegate a COM
  - ✅ Check quadratura BC: dati allineati
- Grande box rosso: "🚫 CHIUSURA BLOCCATA — 2 fatture passive mancanti + template attivo da inviare"
- Sally chat: "Ho inviato un promemoria al ristorante La Boqueria e alla fiorista per richiedere le fatture. Vuoi che ti mostri la procedura per sollecitare un fornitore estero?"
- Bottone: "Risolvi e completa chiusura →"

---

### SCHERMATA 11 — Link: Chiusura Completata → Push a BC e Progress
**Fase processo:** Chiusura
**Soluzione attiva:** Link — Gestionale

Mostra la schermata dopo aver risolto i blocchi:
- Header verde: "COM-2026-0847 | Kering — Incentive Barcellona | ✅ CHIUSA"
- Tutte le voci della checklist con ✅
- Box verde: "✅ CHIUSURA COMPLETATA — Tutti i dati verificati e quadrati"
- 3 card che mostrano i flussi automatici:
  - "📤 Business Central: Consuntivo finale inviato (€165.800)" con check verde
  - "📤 Progress Digitale: Dati aggregati caricati per la Direzione" con check verde
  - "📤 LeadMe: Status aggiornato → 'Progetto Chiuso con Successo'" con check verde
- Riepilogo facing a 3 stadi (mini grafico a barre orizzontali):
  - Previsionale: €159.000 (barra grigia)
  - Pre-chiusura: €167.200 (barra viola)
  - Consuntivo: €165.800 (barra verde)
  - Margine finale: €14.200 (7.9%)
- Bottone: "Vedi Dashboard Direzione →"

---

### SCHERMATA 12 — Link: Dashboard Garbarino (Progress Digitale)
**Fase processo:** Chiusura
**Soluzione attiva:** Link — Progress Digitale

Mostra la dashboard direzionale che sostituisce il Progress Excel:
- Header: "📊 Dashboard Direzione — Progress Digitale"
- Riga di KPI in alto (4 card):
  - "Commesse Attive: 47" (con trend +12% vs anno precedente)
  - "Margine Medio: 14.2%" (con trend -2% vs target)
  - "Fatturato YTD: €12.4M" (barra di progresso vs €55M target annuo)
  - "Commesse da Chiudere: 8" (con badge arancione)
- Tabella tipo Progress con 8-10 commesse:
  - Colonne: COM | Cliente | Evento | Data | Commerciale | Operativo | Budget | Margine | Status
  - Righe con dati realistici misti: alcune "In Lavorazione" (giallo), "Operativa" (azzurro), "Pre-chiusura" (arancione), "Chiusa" (verde), "In Gara" (grigio)
  - La riga Kering evidenziata in verde
- In basso a sinistra: chat Sally con "Qual è il commerciale con il margine più alto questo trimestre?" → Sally: "Laura Zaghi con 18.3% di margine medio su 12 commesse chiuse."
- In basso a destra: mini grafico a torta per distribuzione commesse per BU (Garbarino vs Cichello)
- Testo finale: "Il Progress Excel è stato sostituito. Tutti i dati confluiscono automaticamente dal lavoro quotidiano degli operativi."

---

## SPECIFICHE TECNICHE

1. Tutto in un UNICO file HTML (inline CSS e JS)
2. La navigazione tra schermate deve essere fluida (fade transition di 300ms)
3. Ogni schermata deve occupare il 100% del viewport (100vh, 100vw)
4. Il bottone "Prossimo Step →" deve essere MOLTO visibile (grande, viola, in basso a destra, con hover effect)
5. I dati sono tutti hardcoded e finti — nessuna chiamata API
6. Responsive non necessario — ottimizzato per schermo 16:9 (presentazione su proiettore)
7. Il file deve funzionare aprendo direttamente l'HTML nel browser senza nessun server
8. Aggiungi animazioni sottili dove ha senso (fade in delle card, highlight dei numeri)
9. La barra di navigazione in basso con i 5 step del processo deve essere cliccabile per saltare tra le fasi
10. Usa emoji come icone dove indicato — non servono librerie di icone esterne

## OUTPUT
Genera il file HTML completo e funzionante. Non spiegare, genera direttamente il codice.
```