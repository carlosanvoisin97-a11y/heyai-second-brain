---
type: email-draft
created: 2026-06-11
updated: 2026-06-11
to: Germano Marano <germanomarano.consultant@noloop.eu>
cc: Massi Sinigaglia + Federico + Simone (pattern recap reale 8/6; il 28/5 F+S erano in TO e Andrea in CC)
subject: "R: Eye Cookies | Allineamento bisettimanale (recap unico EC+OT, call 11/6)"
related_project: "[[Eye Cookies]] + [[Operation Transformation]]"
meeting_context: 2026-06-11 — Seconda call bisettimanale Eye Cookies (call assorbita nelle schede)
status: da inviare (Carlo) — DOPO l'email a Carmen (il recap la cita come già scritta)
---

# BOZZA v3 — Email recap UNICA a Germano (Eye Cookies + Operation Transformation)

> v3 (11/6 sera): riscritta con le correzioni di Carlo + ricalibrata sul formato dei recap REALI inviati (28/5 EC, 8/6 OT, recuperati via Outlook): sezioni con header in grassetto, "Altri temi discussi" per i punti informativi, richieste al cliente in seconda persona cortese, nessun ringraziamento in apertura, mai nominare Massi ("verifiche interne"). Le intestazioni di sezione vanno in **grassetto** in Outlook. Testo paste-ready.

---

Ciao Germano,

come da accordi di seguito il recap dei punti aperti e dei temi trattati durante l'allineamento di oggi. Ne approfitto per accorpare i thread dei due progetti in un'unica discussione, anche alla luce della probabile unificazione degli allineamenti di cui ci siamo detti.

Punti aperti lato Microlog:

* Attesa dell'ok sull'allargamento della finestra di identificazione sui dati storici — da quel momento il team inizia a richiamare le singole tracce via API

* Near real-time: restiamo in attesa del preventivo che hai richiesto e, una volta confermato, prendiamo la decisione tecnica. Due approfondimenti utili da girare a Microlog: se il near real-time viaggerà sulle stesse API attuali o su un layer separato (nel primo caso l'integrazione lato nostro resta pressoché invariata) e con quale criterio viene chiuso il "fine visita" che genera la traccia. Ti ricordo intanto che da requirement log il perimetro MVP prevede il flusso batch post visita (req. 5.3): l'eventuale real-time entra come evolutiva

* Robustezza del tracciamento sullo scambio di soggetti ravvicinati: a noi serve il dato puntuale del singolo e non l'aggregato, quindi è un punto da verificare con loro

* E se possibile condividici lo schema di installazione dei sensori

Output per retargeting:

* Come da perimetro di progetto, in questa fase prevediamo di mettere a disposizione del cliente un endpoint dal quale recuperare i dati già formattati per i suoi sistemi di email marketing, CRM e messaggistica (testo per SMS, email con link al carrello, record a database); le integrazioni dirette con sistemi specifici sono pianificate per la fase due post MVP

Presentazione BAT e Totem:

* Cominciamo a buttare giù una prima bozza di presentazione con scaletta e demo; in demo lasceremo aperte le opzioni sul valore per il cliente (lead, vendita recuperata, retargeting), così da farci guidare dal loro interesse. Una volta pronta te la condividiamo per le tue verifiche interne

* Come anticipato in call, se possibile condividici le linee guida brand utili per i totem e gli attuali strumenti in uso (CRM, email marketing, messaggistica), così costruiamo uno use case pratico calato nel loro contesto per il retargeting

* Totem: confermata la direzione della costruzione dedicata, con proposta su tre livelli (base, design brandizzabile, custom completo); primi due sketch tra fine settimana e inizio della prossima, con le valutazioni economiche a seguire

Operation Transformation:

* Form e API BAT/PARD: restiamo in attesa dei riscontri dalle verifiche interne, ne riparliamo al prossimo punto con il quadro completo tenendo sul tavolo lo scenario scraping

* Conferma interna NOT sulla prioritizzazione della maschera unica di registrazione rispetto all'ingestion dello storico, così adeguiamo la roadmap di conseguenza

Dati e connettività:

* Ho già scritto a Carmen per organizzare il passaggio a tre su connettività dei pop-up e ingestion dello storico in un'unica call: appena incrociamo le agende ti giro l'invito. Ti anticipo intanto il documento di proposta multi-SIM come base per il confronto

Altri temi discussi:

* Documentazione API Microlog: il nuovo riferimento documentale era già la base di lavoro del team; accessi ok con entrambe le credenziali, ti segnaliamo eventuali problemi di login

* Sensoristica: configurazione a 4 telecamere angolari con invio dati al server ogni 5 minuti; la logica di visita e traccia è gestita dal layer software applicativo

* Modello a due tier emerso in call: servizio base con dati schedulati post visita e possibile tier premium near real-time / end-to-end, da quotare a parte

Fammi sapere se ti torna tutto, per qualsiasi cosa resto a disposizione!

A presto,
Carlo
