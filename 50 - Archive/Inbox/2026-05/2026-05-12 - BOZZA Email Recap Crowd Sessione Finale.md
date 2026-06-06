---
type: bozza-email
created: 2026-05-12
updated: 2026-05-13
to: ariannagiordanella.consultant@noloop.eu, david.fasulo@noloop.eu
cc: lorena.cavecchi@noloop.eu, federico@soolutions.io, simone@soolutions.io
project: "[[_Wave 2 NoLoop|Wave 2 NoLoop]] / [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]]"
meeting_context: 2026-05-12 — Crowd Sessione Demo Finale + 2026-05-13 — allineamento interno HeyAI+Soolutions (call assorbite nelle schede per convenzione §4, no file separato)
status: pronta-per-invio
style_reference: "Pattern email recap Crowd consolidato — vedi 40 - Resources/Prompts/03 - Recap Call → Email Cliente.md (sezione Pattern recap Crowd/NoLoop)"
notes: "v5 — partita dalla riscrittura di Carlo del 13/5, integrata con call interna HeyAI+Soolutions 13/5 (setup email perimetro vs extra, DUS reformulation, godmode admin confermata)"
---

# 📧 BOZZA v5 — Recap Crowd Sessione Demo (12/5/2026)

> Invio previsto **13/5/2026** mattina/pomeriggio. Integra i chiarimenti emersi nella call interna HeyAI+Soolutions del 13/5 mattina (vedi `uploads/allineamento interno.txt`).

**Oggetto consigliato**: R: Crowd | Sessione Finale Test

**A**: Arianna Giordanella, David Fasulo
**CC**: Lorena Cavecchi, Federico Saladino, Simone Montanari

---

Ciao a tutti,

di seguito la minuta relativa alla sessione di demo di ieri su Crowd.

**Punti discussi**

- Verificati gli enhancement richiesti nell'ultima sessione di demo: editor rich text nei template email e nella landing, generazione automatica dei template via Sally con preset di tono, conferma di ricezione e di lettura sulle email inviate, interfaccia di invio email con ricerca, filtri e selezione massiva, cronologia degli invii con stato di consegna, building block hotel e itinerario ospite con rendering condizionale, gestione roaming con disponibilità camere per singola notte e vista hotel in sola lettura, correzioni puntuali emerse dai test.
- Pop-up di conferma attualmente non editabili. In valutazione la possibilità di rendere configurabile il wording.
- Differenziazione DUS / doppia nell'export verso gli hotel: in valutazione una funzione di override in fase di export, che permetta di esportare come DUS le camere doppie occupate da un solo ospite, senza modificare il dato a sistema.
- Reportistica: l'export dalla pagina Ospiti consente di configurare filtri e selezioni avanzate. La funzionalità è da testare durante la fase di test reale per verificare la copertura delle casistiche operative.
- Personalizzazione del setup email per singolo evento (mittenti e reply-to differenziati evento per evento, eventualmente su sotto-domini diversi da `@noloop.eu`) non inclusa nel perimetro. Configurabile in due modalità extra: (i) consulenza dedicata, con cui il nostro team configura manualmente per voi gli indirizzi del singolo evento — costo ricorrente per ogni nuovo evento; (ii) Change Request per lo sviluppo di un pannello di configurazione interno a Crowd, che vi permetterà di gestire in autonomia mittenti e reply-to per evento — costo una tantum di sviluppo, nessun intervento successivo per i nuovi eventi. Stime in arrivo per entrambe le opzioni.

**Prossimi passi**

- Fix e completamento degli enhancement ancora aperti: bulk edit di un valore campo per filtro o gruppo, salvataggio ospite anche con campi obbligatori non compilati per gli admin di sistema, fix del rendering della formattazione nella preview della landing.
- Valutazione interna NoLoop sull'opportunità di introdurre la mail di conferma automatica post-registrazione (configurazione semplice all'interno del perimetro: mail unica triggerata al register; configurazione complessa fuori perimetro: trigger system su completamento di campi specifici, gestita come extra).
- Chiusura del setup email base per la produzione (un mittente unico no-reply e un indirizzo di back-office per le risposte, entrambi sotto dominio `@noloop.eu`). Abbiamo già inviato una richiesta di aggiornamento ai sistemisti e siamo in attesa di riscontro lato loro.
- Concordata la finestra di chiusura: 10 giorni di test, seguiti dagli ultimi fine tuning e dalla chiusura con consegna ufficiale dell'applicativo entro fine mese.

Restiamo come sempre a disposizione per affiancarvi durante la fase di test!

Grazie,
Carlo

---

## Note interne (non inserire nell'email)

**Modifiche v5 rispetto alla v4 (riscrittura di Carlo) — integrazione call interna 13/5**:

- **DUS / doppia (Punti discussi)**: riformulato. La v4 diceva "si gestisce tramite la creazione di gruppi camere dedicati per le doppie effettive" — in call interna Federico ha rovesciato l'approccio (i gruppi non sono la strada, il sistema è progettato sulle doppie e non riconosce le DUS come entità separata). Ora il bullet riflette la nuova soluzione in valutazione: **funzione di override in export** che esporta come DUS le doppie occupate da un solo ospite, senza modificare il dato a sistema. Carlo ha chiuso il punto in call interna 32:48: "in valutazione la possibilità di automatizzare l'export…".
- **Setup email (Punti discussi — nuovo bullet)**: aggiunto bullet che esplicita il perimetro. In call interna è emerso che la differenziazione per evento (mittente/reply-to diversi per ogni evento, sotto-domini fuori `@noloop.eu`) **non è inclusa**. Si può ottenere in due modi extra: consulenza dedicata per evento o CR per pannello configuratore. Stessa logica del bullet mail di conferma automatica.
- **Setup email (Prossimi passi)**: precisato il perimetro base — un mittente no-reply + un indirizzo back-office, entrambi `@noloop.eu`. Owner HeyAI confermato. Tolto "coinvolgendo Lorena se necessario": in call interna Simone ha chiarito che il blocco è tecnico (DNS migration tra il vecchio e il nuovo provider IT), non commerciale → si chiude direttamente con i sistemisti, non serve Lorena.
- **Salvataggio ospite con campi obbligatori non compilati per gli admin di sistema**: la formulazione di Carlo nella v4 è corretta. Federico in call interna ha confermato il framing "admin / godmode / superpotere" + ha chiesto a Carlo di tenere internamente la nota che gli errori derivati non sono bug del sistema (nota interna, NON va nell'email cliente).

**Pattern email confermati**:

- Apertura "Ciao a tutti, di seguito la minuta…"
- "Punti discussi" + "Prossimi passi" separati, no overlap
- Bullet concisi, terza persona/forma passiva
- Enhancement noti al cliente in prosa con virgole (no sotto-bullet)
- No Owner / Due date inline (finestra unica)
- Setup IT email = owner HeyAI, no delega al cliente
- Frase di supporto affiancamento PRIMA della chiusura
- Chiusura Carlo v4: "Restiamo come sempre a disposizione per affiancarvi durante la fase di test! Grazie, Carlo" (senza "Resto a disposizione per qualsiasi chiarimento"; Carlo l'ha tolta nella riscrittura)

**Verifica trascript call interna 13/5**: rilettura completa eseguita. Punti non pertinenti all'email Crowd (Eldis CR, Achipont generosità prezzo, Minutes prod, Venue Finder fix list, NOT pagamento, pagamenti rateali Soolutions, second brain di Carlo, citazione Fabri Fibra, ecc.) volutamente esclusi come da indicazione "tutto ciò che non attiene a questa email per ora lascia perdere".
