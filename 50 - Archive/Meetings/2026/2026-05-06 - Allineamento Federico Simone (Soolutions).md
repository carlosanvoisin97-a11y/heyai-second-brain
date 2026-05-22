---
type: meeting
date: 2026-05-06
time: "14:49-15:42"
duration: "52m43s"
attendees: [Carlo Sanvoisin, Federico Saladino, Simone Montanari]
projects: [_Wave 2 NoLoop, Eldis Compilatore, Operation Transformation, Eye Cookies]
products: [Minutes, Venue Finder, Crowd]
created: 2026-05-06
updated: 2026-05-06
source: "Riunione con Carlo Sanvoisin (16).docx"
---

# 📝 2026-05-06 — Allineamento Federico + Simone (Soolutions)

> Call lampo nel pomeriggio (originariamente prevista come kickoff Wave 2, slittata a domani sera). Simone si è collegato negli ultimi 10 minuti perché aveva un'urgenza che gli ha mangiato mezza giornata. La sessione è stata in larga parte un duello tra Carlo e Federico sui setting di Minutes/Venue Finder e una rapida revisione punto per punto del follow-up via email.

## Decisioni / chiusure

- **Minute Executive abilitata a TUTTI gli utenti** (Federico ha tolto il gating del permesso `minute_executive`, ora compare per tutti). Il prompt sotto è quello salvato da Carlo nei settings — **vale per tutti gli utenti**, non è privato del singolo (chiarimento Federico: "il settings è dell'applicazione, non sono tuoi privati").
- **Permesso `settings` + `models` assegnato a Carlo su Solutions** (per Minutes). Sui settings di Venue Finder restano in sola visualizzazione (non editabili dal cliente), Federico passa il prompt a Carlo per studio.
- **Sessione finale Crowd spostata da oggi 16:00 a martedì prossimo (12/5)** perché Lorena è rientrata e si fa con tutti i decisori in stanza.
- **Kickoff Wave 2 spostato da oggi a domani sera (7/5)**, orario da concordare su WhatsApp. Federico domani è incasinato, Simone disponibile, Carlo flessibile dal pomeriggio.
- **Ritorno a Wrike** come task management. Federico insiste perché su email "le cose si perdono"; Carlo è scettico ("over-complicato, troppi task troppi progetti, ti perdi le cose") ma cede. Carlo riapre Wrike e riallinea.
- **Pagamenti Wave 2 NoLoop in stallo amministrativo**: NoLoop sta partecipando a un bando di finanziamento e non sa come intestare le fatture. Carlo aveva già detto "fino a che non pagate non partiamo ufficialmente". Se domani non si muove nulla, Carlo chiama Garbarino direttamente.

## Punti per progetto / prodotto

### Minutes
- **Edit manuale task/assegnatari**: Federico ha iniziato il lavoro ma non è ancora in prod. **La finisce lui adesso** ("sennò non finiamo più"). Niente stima precisa.
- **Push prossimo merge previsto domani** (7/5).
- **Caching DB minute executive** (NUOVO enhancement portato avanti da Federico): salvataggio in DB della prima generazione, le successive scaricano la copia esistente senza rigenerare → riduzione consumo token. Nice-to-have che Federico **prova a tirare avanti** anche senza Wave 2 esplicitamente partita.
- **Registrazione call esterne**: Simone ha playground già pronto, è fuori scope da Minutes Wave 1. **Prima cosa che parte appena Wave 2 è ufficialmente attiva** (cioè appena arrivano i pagamenti).
- **Token consumption alert** (Federico): la minute executive consuma molto. Rischio amplificato se più utenti la cliccano in parallelo (rigenerazione multipla). Mitigazione = caching + plenaria utenti per spiegare uso corretto. Carlo aspetta data plenaria da Garbarino.

### Venue Finder
- **MVP in prod**: Federico stima fra oggi e domani. L'enhancement "presentazione graficamente più accattivante" resta fuori dal cut.
- **Bug bloccante intercettato in call**: errore upload file su Venue Finder + più applicativi giù in test. Probabile bucket sminchiato (Simone: "il deploy non riavvia il bucket"). Federico/Simone investigano.
- **Multi-location**: Federico ci sta ragionando "a mente lucida". Approccio scelto = **consecutivo (non parallelo)**. Utente sceglie le location nella prima conversazione (es. Roma + Barcellona), poi la ricerca le esegue una alla volta, la presentazione finale mostra tutte raggruppate per location (venue Barcellona + attività Barcellona + …, poi venue Roma + attività Roma + …).
  - Carlo conferma che NoLoop fa presentazioni multi-location, è **funzionalità necessaria**.
  - Federico avverte: doppio costo token. Carlo: "sono 3-4 persone che lo usano in periodi specifici, non mi preoccupa".
- **Domande iniziali Sally (in chat)**: punto di forte attrito.
  - Carlo vuole **accorpare** (max 2 messaggi: "must-have" + "funzionali per ottimizzazione").
  - Federico **non d'accordo**: l'agente ragiona come Brain con sotto altri agenti, accorpare lo "castra"; le domande possono essere codipendenti; c'è il tasto SALTA per chi le vuole bypassare; se l'utente le salta e i risultati sono scarsi "***** suoi". Posizione: aspettare feedback utenti prima di toccare.
  - **Decisione di compromesso**: Federico mette il **prompt in sola visualizzazione** nei settings di Carlo. Carlo lo studia, prova a riformularlo offline, eventuale modifica posticipata. Setting editabile dal cliente esplicitamente NON apre.
- **Flusso multi-location nella presentazione finale**: confermato — non si mischiano venue di città diverse, ogni città ha il suo blocco completo (venue + attività + ristoranti) prima di passare alla successiva.

### Crowd
- **Sessione finale spostata a martedì prossimo (12/5)** con Lorena + Arianna (entrambe in stanza, Lorena rientrata).
- Carlo **gira un breve video su grouping e roaming** prima della sessione, da mandare in anticipo per lasciare la call per le funzioni più ostiche.
- **Feature mancanti da chiudere a strettissimo giro** (ideal: oggi/domani, latest entro la sessione del 12).
- Obiettivo della sessione: chiusura formale + sblocco saldo.

### Eldis
- **Documento aggregato proposte**: confermati i tre blocchi — hosting/manutenzione €130/mese (con voci incluse), tariffa consulenza €180/h, CR descrizione catalogo. Lato Federico+Simone resta da consegnare.
- **Email Marta Garrafa del 6/5 14:41** (segnalazioni Unik Table + valori RAEE errati): Stefania ha chiamato Carlo apposta per chiedere il check. **Simone risponde lui**.
- **Call Builder Catalogo** confermata venerdì 8/5 15:30-16:30. Conduzione lato Soolutions resta a Simone.
- **Achipoint**: Carlo conferma che resta in coda — "non è così importante", la quotazione può aspettare ma resta tra i pendenti.

### NOT — Operation Transformation + Eye Cookies + Totem
- **Totem + kit multi-SIM/connettività**: Federico+Simone devono portare la **proposta scritta** (kit connessione leggero, focus stabilità non banda). Carlo lo segna come pendente.
- **API BAT/PARD**: Carlo continua il push lato Justin (priorità due rispetto al blocco Wave 2).
- **Eye Cookies — mail Germano**: Carlo riconferma il pendente per Federico/Simone (lettura + risposta sui prodotti fisici e setup foto).

### Wave 2 NoLoop — Kickoff
- Spostato a **domani sera 7/5**, orario su WhatsApp.
- Priorità ribadita: **Venue Finder (già in prod) → LeadMe → OnSite (MVP per Generali entro 20/5) → Progress**.
- **OnSite MVP per evento Generali 20/5**: interfaccia utente già fatta da Federico, manca la parte social/condivisione. Per il 20/5 si prova a dare un MVP **senza social networking**.
- **Deep dive col cliente**: Federico+Simone ragionano sulle potenziali criticità per modulo e segnalano a Carlo quali sessioni di approfondimento servono dal Requirement Log. Carlo le organizza dividendole per reparto/persone/tempo.
- **Approccio**: si parte dalle delivery urgenti (con requisitazione già pronta), poi quando si entra nei moduli più complessi (Sally, Flow, Progress) **giornata in presenza a Milano**.

## ⚠️ Punto di metodo emerso (rilevante per il vault)

- **Federico avverte: lui si "perde" gli aggiornamenti via email**. Carlo cerca di trovare un metodo più fruibile. Federico spinge per Wrike. Carlo cede.
- Implicazione vault: gli action item di Federico/Simone vanno tracciati **anche su Wrike** (non solo qui), e il follow-up via mail va comunque mantenuto in copia perché è il canale dove Carlo storicizza.
- **Spunto**: aprire scheda dedicata "Workflow team Soolutions" (canale di lavoro + cadenza) se la cosa si sedimenta.

## Frizioni / pattern di interazione (da tenere a mente per il PM)

- **Federico vs Carlo su Sally**: Federico è molto difensivo sul lavoro di prompt-engineering ("hai capito? me lo castri"); Carlo punta su trade-off e iterazione. Compromesso = sola visualizzazione del prompt. La negoziazione tipica con Federico va portata avanti **chiedendo accesso/visibilità** invece che chiedendo modifica diretta.
- **Federico paranoia su rischio data loss prompt**: vuole impedire utenti finali di toccare i settings perché "se uno cancella per sbaglio non c'è recover". Mitigazione concordata per Wave 2 = icona "reset prompt default".
- **Federico apprezza la presa di appunti su carta** ("la bella carta… altro che il ***** di Threadmail e Whatsapp"). Implicito: Wrike va bene perché è **strutturato e persistente**, non perché digitale.

## Action items consolidati

### Lato Federico+Simone
- Edit manuale task/assegnatari Minutes — push in prod (Federico, finisce lui, prossimo merge domani)
- Bug bucket / applicativi down — investigation + fix (Federico+Simone)
- Venue Finder MVP — review finale, OK per comunicare al team NoLoop (entro oggi/domani)
- Venue Finder — settings prompt Sally **in sola visualizzazione** per Carlo
- Venue Finder — implementazione multi-location consecutivo (Federico ci ragiona)
- Eldis — documento aggregato proposte (hosting/manutenzione + consulenza + CR descrizione catalogo)
- Eldis — Simone risponde a Marta sulle segnalazioni Unik Table + RAEE
- Eldis — chiusura mancanze Builder (pulsante export + altra) entro 7/5 per call 8/5
- Achipoint — quotazione (in coda)
- NOT — proposta totem + kit multi-SIM (scritta)
- Eye Cookies — lettura + risposta mail Germano
- Wave 2 — lista criticità/deep dive per modulo dal Requirement Log (priorità VF → LeadMe → OnSite → Progress)
- Minutes — caching DB minute executive (enhancement, se Federico riesce a tirarlo avanti)
- Minutes — registrazione call esterne (Simone, parte appena Wave 2 ufficialmente attiva)

### Lato Carlo
- Plenaria utenti Minutes — chiedere data a Garbarino + reminder
- Video grouping/roaming Crowd — registrarlo e mandarlo prima della sessione del 12/5
- Pagamenti Wave 2 — push NoLoop, se domani niente movimenti chiama Garbarino
- Wrike — riaprire e riallineare con Federico/Simone
- Venue Finder — testare su prompt Sally in sola visualizzazione e proporre eventuale riformulazione
- Wave 2 — kickoff su WhatsApp domani sera 7/5, orario da definire
- Email follow-up post-call (questo doc) → Federico+Simone

## Prossimi step concordati

| Quando | Cosa | Chi |
|---|---|---|
| Domani 7/5 sera | Kickoff Wave 2 (Teams/call), orario su WhatsApp | Carlo + Federico + Simone |
| Domani 7/5 (giornata) | Push edit manuale task Minutes in prod | Federico |
| Domani 7/5 | Carlo chiama Garbarino se pagamenti non si muovono | Carlo |
| Entro 7/5 | Chiusura mancanze Builder Eldis | Soolutions |
| Venerdì 8/5 15:30-16:30 | Call formativa Builder Eldis | Carlo + Simone vs Eldis |
| Martedì 12/5 | Sessione finale Crowd (chiusura formale + saldo) | Carlo + Federico + Simone vs Lorena + Arianna + David |
| Entro 20/5 | OnSite MVP (senza social) per evento Generali | Federico + Simone |

## Riferimenti

- Trascrizione: `uploads/Riunione con Carlo Sanvoisin (16).docx`
- Email Marta Garrafa 6/5 14:41 — `mail:///messages/...EeNnUmAAA%3D` (subject: "Segnalazioni su Unik Table e Raee")
- Stefania → conferma 5/5 17:36 calendar Builder + invito Teams formale per 8/5 15:30-16:30
