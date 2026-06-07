---
type: email_draft
project: Operation Transformation
to: germanomarano.consultant@noloop.eu
cc: [Massi Sinigaglia, Andrea Pazienza]
cc_note: "Pattern reale recap bisettimanale 28/5: TO Germano + Federico + Simone, CC Massi + Andrea. Qui TO Germano; valutare se includere team dev tra i destinatari (come 28/5) e Massi in TO o CC (assente in call + serve sua conferma prioritizzazione). Decisione finale a Carlo."
subject_options:
  - "Operation Transformation | Allineamento bisettimanale — recap"
  - "Recap allineamento Operation Transformation (4/6)"
thread: nuovo thread (Germano in call: "fammela la domanda in mail" / "noi attendo la vostra email")
created: 2026-06-08
meeting_context: 2026-06-04 — Prima call bisettimanale Operation Transformation, 30 min (Carlo + team di sviluppo + Germano; Massi assente) — call assorbita nelle schede
status: bozza da rivedere e inviare a cura di Carlo
style_ref: ricalca il formato REALE del recap bisettimanale Eye Cookies a Germano del 28/5 (bullet raggruppati per tema, etichetta + ":", verbi sostantivati, distinzione punti aperti vs temi discussi)
---

# Bozza email recap call bisettimanale Operation Transformation #1

## Subject suggerito
> Operation Transformation | Allineamento bisettimanale — recap

## Body paste-ready Outlook

Ciao Germano, come da accordi di seguito un recap dei punti aperti e dei temi trattati durante l'allineamento di mercoledì.

**Punti aperti lato BAT/PARD:**
- Verifica interna dello stato delle API per la registrazione delle vendite — capire se esistono già e, in caso, perché non vengono esposte, prima di incardinare lo sviluppo su una dipendenza esterna che rischia di allungarsi (ad oggi il push è passato solo tramite Justin, senza un contatto diretto con i referenti tecnici)
- Valutazione, in alternativa, dell'ipotesi di esporre noi le API, così da renderci agnostici rispetto ai sistemi terzi e potenzialmente offrire la piattaforma come servizio a sé
- Da tenere presente che la registrazione è legata alla scontistica BAT, quindi è nell'interesse del cliente registrare al momento della vendita e non in differita

**Prioritizzazione sviluppi:**
- Conferma, da allineare anche con Massi, della priorità sulla parte di registrazione/inserimento dati — maschera unica al posto delle tre compilazioni separate — rispetto all'ingestion dello storico 5 anni per il modello predittivo, inizialmente previsto come fase 1

**Dati e connettività:**
- Organizzazione della call con Carmen questa settimana per l'ingestion dello storico (Carmen sta già facendo il cleanup dei dati)
- Valutazione della soluzione multi-SIM / aggregazione connessioni che ti giriamo, per stimarne l'impatto lato vostro

**Documentazione che ti giro a breve:**
- Requirement log, brief discorsivo e — se la recupero — slide di architettura di alto livello (blocchi logistica, integrazione sistemi esterni, flusso e finalità dei dati), a valle di un check interno, utili per allinearti e riportare a Massi e Carmen

**Altri temi discussi:**
- Demo della POC dell'applicativo: web app installabile con dashboard prodotti, inventario e carico con registrazione del codice univoco di ogni pezzo (tipo IMEI)
- Vendita con riconoscimento del prodotto via modello proprietario a bordo device + scansione del seriale, carrello e check-out; il pezzo venduto non risulta più rivendibile
- Tracciamento del codice univoco come leva anti-furto: un pezzo che esce e non rientra con lo stesso seriale viene intercettato
- App come touchpoint unico degli addetti: con il login, tracciamento di vendite e performance (ed eventuale timbratura via QR)
- Soluzione progettata agnostica e future-proof sul catalogo (gestione di nuovi prodotti senza nuove integrazioni) — utile averne quanto più materiale possibile
- Opportunità: il modulo di tracciamento, essendo agnostico, potrebbe interessare BAT oltre i pop-up (es. tabaccai), da sondare internamente
- I Love Ric fuori perimetro (attivazione make-up ad Arese in chiusura); per prodotti con barcode/QR la soluzione è diretta, senza AI

Fammi sapere se ti torna tutto, per qualsiasi cosa resto a disposizione!

A presto,
Carlo

---

## Note operative pre-invio

- **Formato**: ricalca il recap bisettimanale Eye Cookies REALE inviato a Germano il 28/5 — bullet raggruppati per etichetta tematica + ":", verbi sostantivati a inizio bullet (Verifica, Valutazione, Conferma, Organizzazione, Demo, Tracciamento…), blocco "Altri temi discussi" per la parte informativa/demo
- **Lunghezza**: ~330 parole (la v1 discorsiva era ~560 — tagliata la verbosità senza perdere punti)
- **Riservatezze §13**: rispettate — "team"/"il nostro team", mai il fornitore per nome; POC = "modello proprietario" (la frase in call "tecnologia interna di Soolutions" NON va riportata)
- **Vincolo documenti**: RL + brief + architettura partono SOLO dopo validazione tecnica interna → reso con "a valle di un check interno"
- **Destinatari**: nel recap 28/5 Carlo aveva messo TO Germano + Federico + Simone, CC Massi + Andrea. Qui valutare se replicare (team dev tra i destinatari) e se Massi va in TO (assente in call + serve la sua conferma sulla prioritizzazione) — decisione a Carlo
- **Riferimenti temporali**: tarati sull'invio dell'8/6 ("allineamento di mercoledì", "call con Carmen questa settimana")
