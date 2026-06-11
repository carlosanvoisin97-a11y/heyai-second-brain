---
type: email-draft
created: 2026-06-11
updated: 2026-06-11
to: Germano Marano <germanomarano.consultant@noloop.eu>
cc: Massi Sinigaglia + Federico + Simone (pattern recap reale 8/6)
subject: "R: Eye Cookies | Allineamento bisettimanale (recap unico EC+OT, call 11/6)"
related_project: "[[Eye Cookies]] + [[Operation Transformation]]"
meeting_context: 2026-06-11 — Seconda call bisettimanale Eye Cookies (call assorbita nelle schede)
status: da inviare (Carlo) — DOPO l'email a Carmen (il recap la cita come già scritta)
---

# BOZZA v4 — Email recap UNICA a Germano (Eye Cookies + Operation Transformation)

> v4 (11/6 sera, correzioni Carlo round 2): tolto il preventivo near real-time (Germano l'ha ridimensionato in call); approfondimenti Microlog come richiesta "ti chiederemmo di verificare"; real-time = evolutiva fase 2, MVP batch req 5.3; qualità tracciamento + schema sensori nello stesso punto; "abbiamo stabilito" sull'output; niente "buttare giù"; tolte le opzioni valore cliente; totem "creeremo una proposta su tre livelli" + sketch inizio settimana prossima; scraping condizionato al riscontro BAT/PARD; tolto l'invio anticipato del doc multi-SIM (non esiste ancora); tolta la sezione "Altri temi discussi". Aggiunti i carry-over dai recap precedenti (Miroglio dal 28/5; stato proposta multi-SIM promessa l'8/6). Header di sezione in grassetto in Outlook. Testo paste-ready.

---

Ciao Germano,

come da accordi di seguito il recap dei punti aperti e dei temi trattati durante l'allineamento di oggi. Ne approfitto per accorpare i thread dei due progetti in un'unica discussione, anche alla luce della probabile unificazione degli allineamenti di cui ci siamo detti.

Punti aperti lato Microlog:

* Attesa dell'ok sull'allargamento della finestra di identificazione sui dati storici — da quel momento il team inizia a richiamare le singole tracce via API

* Come anticipato in call, ti chiederemmo di verificare con Microlog due approfondimenti utili per lo sviluppo: se il near real-time viaggerà sulle stesse API attuali o su un layer separato (nel primo caso l'integrazione lato nostro resta pressoché invariata) e con quale criterio viene chiuso il "fine visita" che genera la traccia. In generale, come discusso oggi, real-time e near real-time verranno gestiti come evolutive di fase due: il perimetro del requirement log per l'MVP prevede il flusso batch post visita (req. 5.3)

* Verifica della qualità del tracciamento sullo scambio di soggetti ravvicinati e, più in generale, approfondimento sulla robustezza del tracciamento, per capire la qualità dei dati che potremo utilizzare: a noi serve il dato puntuale del singolo e non l'aggregato. Inoltre, se possibile, ti chiederemmo di condividerci lo schema delle installazioni dei sensori

Output per retargeting:

* Abbiamo stabilito che in questa fase metteremo a disposizione del cliente un endpoint dal quale recuperare i dati già formattati per i suoi sistemi di email marketing, CRM e messaggistica (testo per SMS, email con link al carrello, record a database), mentre le integrazioni dirette con sistemi specifici verranno pianificate per una fase due

Presentazione BAT e Totem:

* Come da accordi, cominceremo a lavorare alla prima bozza di presentazione con scaletta e demo; una volta pronta te la condividiamo per le tue verifiche interne

* Come anticipato in call, se possibile condividici le linee guida brand utili per i totem e gli attuali strumenti in uso (CRM, email marketing, messaggistica), così costruiamo uno use case pratico calato nel loro contesto per il retargeting

* Totem: creeremo una proposta su tre livelli (base, design brandizzabile, custom completo); primi due sketch a inizio settimana prossima, con le valutazioni economiche a seguire

Operation Transformation:

* Form e API BAT/PARD: restiamo in attesa dei riscontri delle verifiche interne e, alla luce del riscontro da parte di BAT e PARD, stabiliremo se procedere o meno con lo scraping

* Conferma interna NOT sulla prioritizzazione della maschera unica di registrazione rispetto all'ingestion dello storico, così adeguiamo la roadmap di conseguenza

Dati e connettività:

* Ho già scritto a Carmen per organizzare il passaggio a tre su ingestion dello storico e connettività dei pop-up in un'unica call: appena incrociamo le agende ti giro l'invito

* Sulla proposta multi-SIM il team sta completando le stime dei consumi: la condividiamo appena consolidata, così la ragioniamo anche nel confronto con Carmen

Punti aperti dai precedenti allineamenti:

* Aggiornamento sulla decisione Miroglio (negozio vero vs pop-up alternativo) per il riposizionamento dei sensori — utile anche per pianificare la prima finestra di test in store

Fammi sapere se ti torna tutto, per qualsiasi cosa resto a disposizione!

A presto,
Carlo
