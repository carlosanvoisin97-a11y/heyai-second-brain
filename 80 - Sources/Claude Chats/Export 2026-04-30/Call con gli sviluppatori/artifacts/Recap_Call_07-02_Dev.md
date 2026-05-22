## RECAP CALL 07/02 — Per il team dev

---

### Compilatore AI (Eldis)

- **Sincronizzatore:** completare entro lunedì 09/02. Mail al cliente programmata lunedì ore 8:00.
- **Catalogo PDF:** fix font e overflow. Evolutiva generazione AI cataloghi **rimandata** — non sviluppare.
- **Evolutiva vision immagini:** agente che seleziona immagine principale da galleria prodotto via prompt. Approccio: passare le immagini al modello e fargli scegliere direttamente, senza descriverle tutte. Prompt gestito dal cliente, noi facciamo solo il master. **Servono immagini caricate da Eldis per testare.** Simone le chiede nella mail di lunedì. Output richiesto da Carlo: solo la cifra (range 500-600 €).
- **Bug fixing / enhancement:** double-check lista su Wrike, completare residui in coda al sincronizzatore.

---

### Minutes (NoLoop)

- **Switch a Claude via OpenRouter:** priorità massima, da fare subito con chiavi nostre. Carlo lunedì ottiene chiave da Marco Merli. Simone manda a Carlo istruzioni per account OpenRouter. Le call precedenti si potranno riprocessare retroattivamente col nuovo modello.
- **Tag cliente/evento:** campo "evento" diventa selezione **cliente → evento** (es. Lamborghini → Vallelunga). Tag innestati. Pensare alla retrocompatibilità futura con gestionale commesse.
- **Naming:** rinominare "Riepilogo" in "Analisi" o "Report".
- **Formattazione:** fixare rendering markdown (bold, bullet point, heading — no asterischi/hashtag/trattini grezzi).
- **Titoli:** prompt con vincolo **max 4 parole**.
- **Trascrizioni call esterne:** Simone indaga soluzioni (estensione Chrome, agent locale, speaker diarization). Nessun workaround semplice immediato — è evolutiva quotabile. Idea di Carlo: OBS Studio + prompt che distingue speaker dal contesto.
- **Deadline:** fix da completare **prima della riunione feedback utenti (~14/02)**. Federico ci lavora anche domani (sabato).

---

### LeadMe (NoLoop)

- **Migrazione dev → prod:** migrare Activity integralmente, utenti/company solo quelli recenti. Operazione rapida da chiudere entro domenica.
- **Chrome extension:** in attesa approvazione Chrome Store (1-2 giorni). Se non approvata entro domenica → installazione manuale da zip.
- **Import manuale:** rimuovere bottone **lunedì contestualmente** all'abilitazione extension. Sostituire con messaggio + link extension.
- **Permessi pagina scraper:** fix autenticazione — attualmente visibile solo a noi. Verificare permessi per tutti gli utenti.
- **Limite scraper:** Carlo segnala che processava contatti modificati di recente. **Verificare configurazione** variabile dev vs prod.

---

### Fatturazione token

- **Eldis:** creare account fatturazione separato. Comunicare a Carlo che tipo di account serve.
- **NoLoop:** lasciar perdere ribillatura (privacy policy / ISO troppo oneroso). Cap 400 €/mese resta.

---

### Prossimi appuntamenti

- **Sabato 08/02 tardo pomeriggio:** call Carlo-Simone — revisione roadmap NoLoop 2026 + aggiornamento Compilatore AI
- **Lunedì 09/02:** mail Eldis + mail LeadMe al cliente + switch Claude attivo
- **Giovedì 12/02 ore 17:00:** call tecnica requisiti modulo logistica NoLoop — partecipano Simone + Federico. Arrivare con domande preparate, obiettivo: definire scope in 1,5h senza sottostimare.
- **~14/02:** riunione feedback utenti Minutes — fix devono essere pronti.

---

### Eye Cookies — Solo contesto

Carlo negozia cap e business case con Germano (11-12/02). Incontro BAT il 26/02 — servirà una **demo/PoC** (telecamera + scaffale e/o presentazione). Simone coinvolto sulla parte creativa/media. Dettagli nella prossima call.