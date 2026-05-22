# Analisi PM - Call Eldis "Consegna Compilatore AI"
**Data call:** 21 gennaio 2026  
**Partecipanti:** Simone Montanari, Federico Saladino, Stefania Solidoro, Carlo Sanvoisin, Marta

---

## 🎯 DECISIONI CHIAVE PRESE

### 1. Strategia di Delivery in Due Fasi
- **Fase 1 (immediata):** Consegna strumento base con requisiti urgenti + piccoli adattamenti
- **Fase 2 (successiva):** Enhancement avanzati (immagini smart, upscaling, ricerca web automatica)

### 2. Gestione Immagini
- Rimandata la gestione avanzata delle immagini al catalogo
- **Decisione immediata richiesta:** Implementare almeno conversione formato/dimensione + renaming come prima cosa

### 3. Modifica Categorie
- **Eseguita in call:** Tavoli spostati da "Unit Key" a "Libera Installazione"
- Unit Key eliminabile (non va più sul B2B)

### 4. Sincronizzazione File
- Soluzione scelta: App dedicata ("Eldis Synchronizer.exe") che gira sul server fisico del cliente
- Scartata integrazione SharePoint/OneDrive (troppo rischiosa per dipendenza da terze parti)

### 5. Import/Export
- L'Excel di output può essere re-importato per aggiornare solo campi specifici
- Le colonne assenti nell'Excel di import non vengono toccate

---

## 📋 PUNTI APERTI / ACTION ITEMS

| # | Descrizione | Owner | Priorità | Note |
|---|-------------|-------|----------|------|
| 1 | **Call con Luciano (sistemista)** per definire integrazione sync file col server fisico | Stefania + HeyAI | 🔴 Alta | Stefania organizza la call |
| 2 | **Requisiti filtri di ricerca** - Inviare lista parametri per barra di ricerca avanzata | Carlo | 🔴 Alta | Usare stessi filtri previsti per configuratore catalogo |
| 3 | **Creazione utenze** - Password temporanee per Stefania e Marta | Simone | 🔴 Alta | Simone invia dopo la call |
| 4 | **Dimensione max immagini** - Definire limite | Eldis (Stefania) | 🟡 Media | Proposto: max 300KB, formato JPEG |
| 5 | **Regole ordinamento immagini** per categoria (es. frigo porta chiusa/aperta) | Eldis | 🟡 Media | Da documentare per Fase 2 |
| 6 | **Aggiornare colori** - Verificare se import colori è aggiornato con ultime specifiche | Simone | 🟡 Media | Colori importati per primi, potrebbero mancare modifiche recenti |
| 7 | **Offerta Fase 2 immagini** - Disegno e stima per gestione smart immagini | Federico + Simone | 🟡 Media | Include: riconoscimento, ridimensionamento, upscaling, ricerca web |
| 8 | **Video tutorial** - Versione semplice e avanzata | Simone | 🟢 Bassa | Post-consegna |

---

## ⚠️ RISCHI E CRITICITÀ IDENTIFICATI

### Tecnici
1. **Dati mancanti nei PDF** - Alcuni PDF (es. Beko freestanding) hanno informazioni incomplete (peso mancante). Sistema gestisce con errori, non blocca mai l'export
2. **Ricerca web limitata** - Disattivata volontariamente per affidabilità. Molti siti produttori bloccano AI
3. **Celle unite negli Excel originali** - Hanno causato problemi di import nelle descrizioni AI (alcuni corretti a mano)

### Operativi
1. **Doppia modifica** - Se modifica urgente fatta su gestionale Eldis, va replicata anche su piattaforma AI per mantenere sync
2. **Server fisico** - Dipendenza da infrastruttura on-premise per sincronizzazione

---

## 🔧 SVILUPPI RICHIESTI (da includere in Fase 1)

### Funzionalità Aggiuntive Immediate
1. **Barra di ricerca avanzata** con filtri per: marca, famiglia, categoria (stessi del configuratore catalogo)
2. **Selezione multipla + eliminazione bulk** nella vista prodotti
3. **Vista colonne dinamica** - Possibilità di scegliere quali campi mostrare nella tabella prodotti
4. **Pulsante "Rielabora vista corrente"** - Per ri-processare solo prodotti filtrati
5. **Sezione immagini** (come documenti PDF) con:
   - Conversione automatica formato (→ JPEG)
   - Ridimensionamento (max 300KB suggerito)
   - Renaming automatico con codice Gamma

### Chiarimenti Tecnici Confermati
- Import parziale funziona: se Excel ha solo alcune colonne, le altre non vengono toccate
- Cancellazione prodotti NON elimina PDF/immagini (restano non abbinati)
- Elaborazione parallela: 50 prodotti alla volta, ~1 min/prodotto
- Export sempre possibile anche con errori (campi vuoti ma non bloccante)

---

## 📅 PROSSIMI PASSI TIMELINE

```
SETTIMANA CORRENTE
├── Invio credenziali accesso (Simone → Eldis)
├── Invio lista filtri ricerca (Carlo → HeyAI)
└── Schedulare call con Luciano per sync

FASE TEST (prossime 1-2 settimane)
├── Eldis testa strumento con articoli reali nuovi (Marta)
├── Feedback su descrizioni e categorizzazione
└── Segnalazione eventuali campi mancanti/errati

PARALLELO (HeyAI)
├── Sviluppo barra ricerca avanzata + filtri
├── Sviluppo sezione immagini base
├── App sincronizzazione file
└── Video tutorial

POST-TEST
├── Raccolta feedback completo
├── Definizione scope Fase 2 (immagini smart)
└── Nuova offerta per enhancement
```

---

## 💡 NOTE STRATEGICHE PER PM

### Import Massivo Storico
Eldis ha necessità di importare **intero storico articoli già codificati** per il configuratore catalogo (Fase 2). Possibile tramite:
- Excel formato output (stesso schema)
- Mantiene tutti i dati esistenti
- Rielabora **solo descrizioni** (categorizzazione già corretta)

### Gestione Aggiornamenti RAE
- Cambio annuale (ogni 1° febbraio)
- Campo "data validità" deve essere **non bloccante** → impostare data nel passato per attivare sempre la regola
- Importi da aggiornare manualmente nella sezione Regole RAE

### Flusso Operativo Target
```
Fornitore invia nuovo listino
         ↓
Eldis carica Excel + PDF su piattaforma AI
         ↓
Elaborazione automatica (descrizioni, categorie, RAE)
         ↓
Review su piattaforma (con PDF affiancato)
         ↓
Export → App sync → Server fisico → B2B (sync notturna)
```

---

## 📞 CONTATTI E RESPONSABILITÀ

| Ruolo | Nome | Responsabilità |
|-------|------|----------------|
| Dev Lead | Simone Montanari | Sviluppo, configurazione, supporto tecnico |
| Project Coordinator | Federico Saladino | Coordinamento, offerte, requisiti |
| PM Cliente | Carlo Sanvoisin | Requisiti, coordinamento interno Eldis |
| Key User | Stefania Solidoro | Testing, feedback operativo |
| User Operativo | Marta | Testing quotidiano, codifica articoli |
| Sistemista | Luciano | Integrazione server, sync |