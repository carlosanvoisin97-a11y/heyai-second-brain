---
type: project
status: active
priority: p1
client: NoLoop
created: 2026-04-30
updated: 2026-05-22
deadline: 2026-09-01
contract_status: non_prodotto
stakeholders: [Massi Sinigaglia, Germano Marano]
aliases: [Eye Cookies, AI Cookies]
---
<!-- auto-updated by cowork-sessions-index 2026-05-20 20:22 (cron-22) | source-session: local_1653abdf-0f2f-42cd-8125-3c9edf17b324 | source-lastActive: 2026-05-20 -->
<!-- atomic-change updated: 2026-05-14 → 2026-05-20 | session: local_1653abdf -->


# 📁 Eye Cook (alias: Eye Cookies)

> **Outcome**: Avere il servizio sviluppato e pronto per la vendita commerciale a partire da settembre 2026. **Soluzione**: behavioral tracking / remarketing per pop-up store.

## Stato

- **Status**: 🟢 Active
- **Cliente**: NoLoop
- **Prossimo milestone**: proposta TOTEM per Germano (decisione interna pronta, attesa Germano) + coordinamento lancio fase operativa + verifica licenza API Microlog
- **Ultimo aggiornamento**: 2026-05-07 (fatture + risposte mail Massi chiuse in batch reconciliation)

## Stakeholders

- [[Massi Sinigaglia]] — Cliente principale (NoLoop), spinge per partenza vendita settembre
- [[Germano Marano]] — Consultant NoLoop, fornisce file/asset (Excel cookie aggiornato 29/04)
- [[Andrea Pazienza]] — Lato HeyAI, segue fatturazione

## Task aperti

- [x] ~~**#p2** Inviare fattura/importo a [[Massi Sinigaglia]] (richiesta 29/04)~~ → ✅ chiuso 2026-05-07 (conferma Carlo: fatture mandate a Massi)
- [x] ~~**#p2** Aggiornare Massi sullo stato sviluppo~~ → ✅ chiuso 2026-05-07 (conferma Carlo: risposto alle mail Massi)
- [ ] **#p2** Preparare proposta TOTEM per Germano (decisione interna pronta, attesa Germano)
- [ ] Verificare licenza API Microlog (in scadenza, NoLoop deve rinnovare)
- [ ] Coordinare lancio fase operativa con Germano
- [ ] **#p1** Carlo: organizzare 3 call necessarie per partenza sviluppi Eye Cookies (call con Germano live applicativo Microlog + call tecnica con Microlog su payload/API + accesso playground Microlog per test in store fisico + call con data analyst NoLoop per ingestion storico) — entro questa settimana. _Update 20/5 sera_: **task riaperto come priorità immediata** — Simone ha confermato che il team di sviluppo è in fase avanzata sullo scheletro e a breve serviranno indicazioni puntuali per non bloccarsi su assunzioni. Referente tecnico NOT = **Germano** (NON Justin che è la referente operativa)
- [ ] **#p1** Simone: domani 14/5 in stessa stanza con il team hardware Soolutions → sollecitare la proposta scritta totem + kit multi-SIM/connettività (focus stabilità, non banda) — _Update 20/5_: ribadito in call interna 20/5, Simone domani 21/5 in presenza con team Soolutions farà pressione su Alex per la proposta Totem multi-sim ("siamo davvero al 2027 di questo passo")
- [ ] **#p1 Carlo**: comunicare a Germano la richiesta accesso interattivo sistema sensori in pop-up store (dashboard + fisico) per la fase di sviluppo — non solo storico backuppato. Inserire nella prossima comunicazione (probabilmente la stessa email su K-ippun Haru / cadenza bisettimanale del 20/5 mattina)
- [x] ~~**#p1 Carlo**: recuperare allegato `NOT EYE cookie requisiti.pdf` (allegato Germano 22/01/2026 alla call NOT Presentazione Proposta Commerciale) e salvarlo in `80 - Sources/Files/` — è la fonte primaria dei 17 codici RFx.y, indispensabile per scrivere il Requirement Log formale di Eye Cookies~~ → ✅ chiuso 22/5: PDF caricato da Carlo (+ Offerta HeyAI + email chiarimenti), tutti salvati in `80 - Sources/Files/Eye Cookies/`
- [ ] **#p1 Carlo**: review e firma Requirement Log v1 (`Eye Cookies - Requirement Log MVP.xlsx`). Validare scope MVP (33 RFx.y) e Open Questions con team di sviluppo prima di condividere la versione cliente con Germano/Massi
- [ ] **#p2 Carlo**: chiudere le 5 Open Questions critiche elencate nel foglio Riferimenti del RL (UID GDPR, geometry_name, rilocazione sensori, ownership totem, integrazione Odoo)
- [ ] **#p1 Carlo**: girare al team di sviluppo le NUOVE credenziali Microlog (rilascio 22/05): `germano.marano` / `Tempo123456!` su `https://tracking.microlog.it/`. Vecchio URL ancora attivo "per ora" ma da migrare endpoint sviluppo per evitare break futuro
- [ ] **#p1 Carlo**: chiedere a Germano il `geometry_name` del tavolo (pending da Microlog dal 02/03) — parametro POST `/upload/trigger` necessario per implementare correttamente il trigger
- [ ] **#p1 Carlo**: chiedere a Germano conferma su UID opaco vs email utente (proposta tecnica Simone 26-27/02 mai chiusa) — bloccante GDPR se Microlog impone email
<!-- RIMOSSO ERRORE 13/5 sera: il task "indirizzo spedizione prodotti foto" era stato erroneamente attribuito a Eye Cookies. Eye Cookies usa SENSORI Microlog per behavioral tracking, NON prodotti fisici per riconoscimento IA. La spedizione prodotti fisici è per Operation Transformation (riconoscimento prodotti tramite IA in store). Vedi [[Operation Transformation]] task list. -->
- [ ] **#p2** Andrea Pazienza: pagamento NOT Eye Cookies a Soolutions → bonifico **gated alla formula cash-flow Wave 2+NOT** decisa con Excel condiviso (Carlo nell'email recap interno 13/5 sera: *"appena decidiamo la formula pagamenti vi giriamo il bonifico"*). Non più "tra oggi e domani" come ipotizzato in call mattina — sospeso fino a chiusura Excel Andrea ↔ Elena Soolutions
- [ ] **#p1** Carlo: comunicare ufficialmente al cliente (Massi + Germano) che gli sviluppi Eye Cookies sono partiti — annuncio email proattivo entro questa settimana ("Comunico al cliente che siamo ufficialmente partiti!" — email recap interno 13/5). **Bozza pronta in [[00 - Inbox/2026-05-13 - BOZZA Email Germano Eye Cookies partenza sviluppi]]** — a Germano + CC Massi + Andrea, continua il thread "R: EYE cookie" del 29/04. Contiene: notifica partenza ufficiale, richiesta demo live applicativo Microlog (call con team Microlog), conferma documentazione API confermata, status rinnovo licenza Microlog, anticipazione call data analyst Carmen Compare per ingestion storico, reminder Justin (BAT/PARD) + Laila (spedizione prodotti)
- [ ] **#p1** Carlo: organizzare **demo interna applicativo Microlog direttamente con Germano** (non subito con Microlog) — richiesta in mail 13/5 v2. Logica concordata in call interna HeyAI+Soolutions 13/5: prima si vede dal cliente, solo se a valle emergono dubbi specifici si valuta call diretta con team Microlog
- [ ] **#p2** Germano (NoLoop): condividere **numero di store su cui Microlog è già attivo ad oggi** — info richiesta esplicitamente da team di sviluppo in call interna 13/5 per dimensionare correttamente l'implementazione
- [x] ~~**#p2** Germano (NoLoop): aggiornamento stato rinnovo licenza/contratto Microlog~~ → ✅ chiuso 14/5: Germano conferma "abbiamo rinnovato già il contratto con Microlog"
- [x] ~~**#p1** Carlo: girare credenziali Microlog dashboard a [[Federico Saladino (Soolutions)|Federico]]+[[Simone Montanari (Soolutions)|Simone]]~~ → ✅ chiuso 14/5: credenziali inviate al team di sviluppo
- [ ] **#p1** Federico+Simone (team di sviluppo): **scaricare tutto lo storico dei dati dalla dashboard Microlog** (richiesta esplicita Germano 14/5: *"vi chiedo la cortesia di scaricare tutti i dati scaricabili dalla dashboard, così da avere uno storico offline utile per i test anche se abbiamo rinnovato già il contratto con Microlog"*). Storico offline a supporto dei test sviluppo
- [ ] **#p1** Carlo: organizzare call con [[Carmen Compare]] per **ingestion iniziale dati storici NOT/BAT** → base storico modello predittivo Eye Cookies. Anticipata in mail Germano 13/5, slot da confermare al rientro Carmen
- [ ] **#p2** Germano (NoLoop): aggiornamento stato rinnovo licenza/contratto Microlog (il "periodo era in scadenza" segnalato 23/04, sensori ancora operativi)

## Decisioni prese

- Vendita target: settembre 2026

## Fatturazione

- 29/04/2026 — Andrea Pazienza ha mandato 3 fatture di cortesia, di cui 1 = **acconto Eye Cookies** (parte di €75K)
- Tranche restanti legate a milestone

## Modello di business (dal recap chat 02/04)

- **€1.200/mese + €2.500 setup** per centro commerciale
- **Target anno 1**: 20 centri commerciali (BAT ha **33 pop-up store** attivi)
- **Altri prospect**: 5 centri skin care
- Germano aveva scelto **Opzione B (Revenue Share)** per "fiducia nel progetto"

## ✅ EVOLUZIONE CONTRATTUALE — STORIA DECISIONI

### Marzo 2026: disputa con Germano _[fonte: chat "Quotazione Eye Cookies MVP"]_
Contratto Germano con 6 clausole inaccettabili (IP day-zero, royalty su netto, €46k in 3 tranche, non concorrenza globale 24m, zero minimi, zero diritti risoluzione). Strategia: prendere tempo + controproposta.

### 02 aprile 2026: DECISIONE FULL OWNERSHIP _[CONFERMATO utente 30/04]_
- Bruno propone **€75.000 full ownership** con sconto concordato
- Carlo conferma: "Full ownership €75.000; pagamento 3 tranche legate a milestone"
- ✅ **Modalità finale: FULL OWNERSHIP** (no Revenue Sharing — quello era il soggetto della vecchia bozza)

### 03 aprile 2026: APPROVAZIONE COMMERCIALE da Paolo Donzelli (NON firma contrattuale)
- ⚠️ **Rettifica 21/5/2026** (Andrea Pazienza → Carlo → vault): la dicitura "CONTRATTO FIRMATO" presente nel vault fino al 20/5 era **errata**. La realtà è: Donzelli ha **approvato commercialmente** la modalità Full Ownership €75K via email il 03/04 (oggetto "Re: Contratto Eye Cookies in modalità Revenue Sharing"), ma **il contratto in forma documentale non è mai stato prodotto né sottoscritto**.
- Modalità commerciale concordata: **full ownership €75K** (oggetto email lo chiama "Revenue Sharing" come legacy della prima bozza ma decisione finale è Full Ownership)
- ✅ **Acconto pagato da NOT** _[conferma Carlo 21/5/2026]_ — fatturato e incassato sulla base dell'approvazione email, in assenza di documento contrattuale firmato
- Implicazione operativa: prima dell'invio del documento contrattuale a [[Paolo Verrangelo (commercialista NoLoop)|Paolo Verrangelo]] per l'audit fiscale, va valutato se produrre adesso il contratto ex novo (con efficacia retroattiva pattern Wave 2 Art. 1.4) o se gestire la documentazione lato Verrangelo via approvazione email + fatture emesse

### Stato attuale (aprile 2026): FASE OPERATIVA
- 16/04: Kick-off interno NOT (Operations + Eye Cookies) — Carlo organizer
- 23/04: Germano risponde con info su API Microlog + Totem + Compilatore Bandi (3 allegati)
- 29/04: Germano invia Excel cookie aggiornato. "Per il totem va bene attendiamo voi"
- 29/04: Massi sollecita aggiornamento sviluppo + fattura

## Note tecniche _[fonte: artifact "Quotazione Eye Cookies"]_

- **Microlog API**: token statico per MVP, OAuth phase 2
- Licenza Microlog in scadenza → NoLoop deve rinnovare
- Totem: proposta soluzione testata su altri progetti

## ⚠️ Storia clausole inaccettabili (chat "Clausole protezione revenue share" 06/02→03/04)

Per memoria: la **prima bozza Germano** (febbraio 2026) conteneva **6 clausole vessatorie** rigettate prima della rinegoziazione che ha portato al Full Ownership €75K firmato:
1. **IP ceduta dal giorno zero** (Art. 1.V) — eliminata leva
2. **Ricavi netti vs lordi** — riduce base calcolo del 15%
3. **Pagamento €46K in 3 tranche** — equiparato a costo, no margine
4. **Non concorrenza globale 24 mesi** — vincolante eccessivo
5. **Zero minimi garantiti trimestrali**
6. **Zero diritti risoluzione HeyAI** (NOT poteva risolvere, HeyAI no)

**Lesson appresa**: Carlo ha tenuto fermo (strategia "passaggio legale + soci, 7-10 giorni") e prioritizzato Operations & Logistica come margine reale, dichiarando Eye Cookies "progetto che possiamo anche perdere" se non riequilibrato. Il riequilibrio è arrivato a Full Ownership €75K (03/04).

## 💬 Pattern di negoziazione (Germano Marano)

- **Verbose ma operativo**: risponde con allegati e info concrete (API Microlog, Totem, Compilatore Bandi)
- **"Va bene attendiamo voi" sul Totem (29/04)**: passivo dopo accordo, attende deliverable HeyAI
- **Massi sopra Germano per pressione commerciale**: Massi sollecita fatture e sviluppo, Germano fornisce asset
- **Inizialmente proponeva Revenue Share "per fiducia nel progetto"** — superato dalla scelta Full Ownership €75K (decisione Bruno + conferma Carlo + firma Paolo)

## Eventi chiave passati

- **26 febbraio 2026** — Meeting con AD di BAT per presentare Eye Cookies
- 02/04/2026 — recap completo nella chat [[80 - Sources/Claude Chats/Export 2026-04-30/Quotazione Eye Cookies - Prima proposta MVP/Quotazione Eye Cookies - Prima proposta MVP|Quotazione Eye Cookies MVP]]

## Chat Claude.ai correlate

- [[80 - Sources/Claude Chats/Export 2026-04-30/Quotazione Eye Cookies - Prima proposta MVP/Quotazione Eye Cookies - Prima proposta MVP|Quotazione Eye Cookies MVP]] (15/01→02/04)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Clausole di protezione per revenue share/Clausole di protezione per revenue share|Clausole protezione revenue share]] (06/02→03/04)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Risposta a Germano_ linee guida strategiche e informazioni per il sito/Risposta a Germano_ linee guida strategiche e informazioni per il sito|Risposta Germano linee guida]] (24/02)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Risposta email a Germano/Risposta email a Germano|Risposta email Germano]] (03/02→02/04)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Sintesi progetto AI cookies/Sintesi progetto AI cookies|Sintesi AI cookies]] (15/01)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Analisi transcript call cliente_ punti aperti e next steps/Analisi transcript call cliente_ punti aperti e next steps|Analisi transcript call cliente]] (22/01→24/02)

## Risorse

- Excel cookie aggiornato (allegato email Germano 29/04)
- 3 fatture NOT (sviluppo sito+LinkedIn / Operation Trasformation / terzo progetto)

## Sessioni Cowork correlate

- 2026-05-20 — `local_1653abdf` — Review emails and draft three responses: bozza risposta Germano (cadenza bisettimanale + totem proposta in finalizzazione + K-ippun Haru exit come finestra primo test store) paste-ready Outlook. → [[80 - Sources/Cowork Sessions/2026-05-20 - Indice sessioni#Sessione 4 — `local_1653abdf-0f2f-42cd-8125-3c9edf17b324` — Review emails and draft three responses]]
- 2026-05-07 — batch reconciliation 2 task (fatture Massi · risposta mail Massi) → [[80 - Sources/Cowork Sessions/2026-05-07 - Indice sessioni#Sessione 1 — Review open tasks summary]]
- 2026-05-13 — `local_af2ea6af` — Email recap interno Federico+Simone (riscrittura Carlo): **bonifico Soolutions GATED** all'Excel cash-flow di Andrea Pazienza (rettifica vs "tra oggi e domani" di call mattina → "appena decidiamo la formula pagamenti vi giriamo il bonifico"). **Nuovo task #p1 Carlo**: comunicazione proattiva cliente "siamo ufficialmente partiti" a Massi+Justin+Germano. → [[80 - Sources/Cowork Sessions/2026-05-13 - Indice sessioni#Sessione 5 — Write recap email and update tasks (Federico+Simone allineamento interno)]]

## Log

### 2026-05-22 sera — Requirement Log v1 prodotto + 3 PDF archiviati nel vault
- **Carlo carica 3 PDF**: (1) `Allegato 1 — Offerta HeyAI Eye Cookies MVP` (Proposta di Investimento orig. 22/01/2026, €82K poi rinegoziato €75K Full Ownership il 02/04), (2) `Allegato 2 — Chiarimenti tecnici e operativi` (email Carlo a Germano 03/02/2026 con conferma 33 RFx.y MVP, stack, team, AI), (3) `Allegato 3 — NOT EYE cookie requisiti generali e requisiti MVP` (documento cliente NoLoop 30/07/2025 con tutti i RFx.y + lista MVP). Tutti salvati in `80 - Sources/Files/Eye Cookies/` — chiude scoperta #1 del prep doc.
- **Requirement Log v1 prodotto**: `Eye Cookies - Requirement Log MVP.xlsx` (3 fogli: Master Interno + Versione Cliente + Riferimenti). Scope MVP confermato: **33 RFx.y totali in MVP** = 17 richiesti dal cliente (RF1.1, RF1.2, RF1.3, RF1.5, RF2.2-2.4, RF3.1-3.4, RF4.1-4.3, RF5.1, RF5.2, RF5.4) + 12 funzionali aggiuntivi HeyAI (RF1.4, RF2.1, RF2.5, RF7.1-7.4, RF8.2, RF8.3, RF10.1-10.3) + 4 non funzionali (NF1-NF4). + 17 RFx.y fuori scope MVP elencati per chiarezza (RF4.4-4.5, RF5.3, RF5.5, RF5.6, RF6.1-6.5, RF7.5, RF8.1, RF8.4, RF9.1-9.3, RF10.4).
- **Mapping RFx.y ↔ Moduli ↔ Fasi delivery completato**:
  - Foundation (sett. 1-3): RF1.x, RF2.x, RF10.x, NF1-NF4
  - Data Pipeline (sett. 4-6, Moduli 1+2+3): RF3.x, RF4.1
  - AI Engine (sett. 7-9, Modulo 4): RF4.2, RF4.3, RF5.1, RF5.2, RF5.4
  - Targeting & Ads (sett. 10-12, Moduli 5+6): RF7.1-7.4
  - Go-Live (sett. 13-15): RF8.2, RF8.3
- **Precisazioni di scope MVP cristallizzate nel RL** (da email Carlo 03/02): (1) Integrazione Microlog = batch notturna G+1, non near real-time; (2) Dashboard ottimizzata Desktop, NO responsive tablet/mobile (RF8.4 escluso); (3) Multi-tenant = DB nativamente predisposto (RF2.1) ma MVP gestisce UN cliente con più pop-up store, Enterprise multi-cliente in Fase 2; (4) RF5.4 = link e-commerce con prodotti prepopolati via email post-visita, NO frontend consumer dedicato.
- **Open Questions critiche raccolte nel RL** (foglio Riferimenti): UID utente email vs opaque ID (GDPR), `geometry_name` pending Microlog dal 02/03, rilocazione sensori post-exit K-ippun Haru, ownership produzione totem, integrazione Odoo (CRM cliente NoLoop) vs HubSpot/Mailchimp/Salesforce.

### 2026-05-22 — Ricostruzione contesto pre-Requirement Log + scoperte
- **Prep doc completo prodotto** in [[00 - Inbox/2026-05-22 - Contesto Eye Cookies pre-requirement log]] dopo ricerca sistematica email Outlook (Germano + Federico old-mailbox `info@federicosaladino.it` + Simone): 45+ entry timeline dal 27/10/2025 al 22/05/2026, identificati 17 codici RFx.y MVP (RF1.1-RF5.4), tabella perimetro/note/stato vuota da compilare.
- **Scoperta #1 — PDF `NOT EYE cookie requisiti.pdf` non è in `80 - Sources/Files/`**: fonte primaria dei 17 codici RFx.y mancante dal vault. Allegato originale Germano alla call 22/01/2026, da recuperare via Outlook search prima di scrivere il RL formale. **Task #p1 nuovo**.
- **Scoperta #2 — Parametri sensore concreti già in mano dal 02/03/2026** (mai citati nella scheda fino a oggi): `SENSOR_ID: 80:1F:12:D5:67:B9`, `TRIGGER_ID: 0`, UID = email utente nel totem, login JWT → POST `/upload/trigger`. Era un secondo invio Germano 02/03 dopo le credenziali dashboard.
- **Scoperta #3 — Microlog rilascio 22/05 ha cambiato URL E credenziali**: nuove `germano.marano` / `Tempo123456!` su `https://tracking.microlog.it/` (anche per API). API disponibili sia su nuovo che su vecchio indirizzo "per ora" → rischio break se sviluppo va contro vecchio endpoint. **Task #p1 Carlo**: girare nuove credenziali al team sviluppo.
- **Scoperta #4 — `geometry_name` del tavolo** ancora pending da Microlog dal 02/03 — parametro POST `/upload/trigger` necessario per implementare il trigger correttamente.
- **Scoperta #5 — UID opaco proposto Carlo+Simone 26-27/02 mai confermato da Germano/Microlog**: rischio bloccante GDPR se Microlog impone email utente come UID (oggi è così).
- **Vecchio indirizzo Federico identificato**: `info@federicosaladino.it` (usato fino a febbraio 2026 prima del passaggio a `federico@soolutions.io`) — utile per future search Outlook su thread storici.

### 2026-05-20 sera — Messaggio Simone: scheletro applicativo in fase avanzata + richiesta allineamento Microlog/On Trade
- **Avanzamento sostanziale lato sviluppo**: Simone comunica che il team di sviluppo **sta già lavorando allo scheletro applicativo e alla struttura di base del sistema** e che la parte è in **fase avanzata**. Conferma backup pregresso (storico dati Microlog scaricato a marzo via endpoint dashboard, già noto).
- **🚨 Alert tempistico**: *"a breve serviranno indicazioni più puntuali per procedere correttamente con l'implementazione"* — il team di sviluppo si avvicina al punto in cui senza input mirati dai referenti tecnici non può continuare senza fare assunzioni.
- **Richiesta esplicita di Simone**: organizzare un **breve allineamento tecnico** tra:
  - HeyAI (Carlo)
  - **Team On Trade NoLoop** — referente tecnico è **[[Germano Marano]]**, NON [[Justin Lauro]] (rettifica Carlo 20/5 sera: Justin è la referente operativa, Germano il referente tecnico NOT). Operation Transformation è completamente fuori da questo scope: Microlog lavora SOLO su Eye Cookies (sensori behavioral tracking pop-up store)
  - **Microlog** (fornitore sensori Eye Cookies)
  - Team di sviluppo (Federico+Simone)
  
  Obiettivo dichiarato: *"verificare che non ci siano aggiornamenti, dettagli tecnici o vincoli da considerare prima di procedere con le prossime fasi, evitando assunzioni e riducendo il rischio di rallentamenti"*.
- **Implicazione coordinamento**: Carlo organizza una **call tecnica Microlog** (con team Microlog + Federico+Simone) per chiarire aspetti API/payload/aggiornamenti. Il referente tecnico lato NOT (Germano) è già nel ciclo via thread email dashboard.
- **Email a Germano già mandata 20/5 sera** (post-call HeyAI+Soolutions) sul thread "R: eye cook..next step" — copertura: dashboard Microlog 403 + check accesso + richiesta accesso interattivo sistema live + eventuale approfondimento con team Microlog con OK preventivo. **Da valutare**: l'email copre già la richiesta Simone di "fissare un breve confronto con Microlog" o serve integrazione esplicita per chiedere a Germano di organizzare la call tecnica?

### 2026-05-20 (call interna HeyAI+Soolutions allineamento — dashboard Microlog offline + accesso sistema interattivo)
- **Dashboard Microlog: il login è offline lato cliente** — Carlo verifica live in call cliccando sul link Whatsapp settimana scorsa: pagina non si apre. Simone conferma: *"se clicchi sul link proprio pam ti manda a dev.microlog.it/XDC2/dashboard e non te lo apre"*. Status: 403 Forbidden. Probabile causa: l'azienda **K-ippun Haru** (cliente di Microlog su cui erano installati i sensori) **è stata acquisita** → potrebbe scattare a breve la disattivazione della licenza/servizio Microlog su quegli store. Carlo ha condiviso la mail di Germano in call.
- **Backup storico già fatto da Simone**: durante la finestra in cui la dashboard era accessibile (riferimento Simone: download del **2 marzo 2026**), Simone ha scaricato tutti i dati esportabili dalla dashboard e li tiene salvati nel suo "iCookies playground" (proof of concept Eye Cookies). I dati storici restano disponibili per i test di sviluppo **anche senza dashboard live**. Simone in call: *"semplicemente ho la cartella scaricata nell'iCookies playground"*. Niente figuraccia col cliente: dati al sicuro.
- **Strategia messaging con Germano**: Carlo gli dirà *"loro erano entrati e si erano scaricati i dati, ma il login è off, quindi puoi fare un check?"* — niente narrazione esposizione interna, solo richiesta operativa. Se Microlog rimette online la dashboard, Simone fa un altro backup come sicurezza extra.
- **Richiesta nuova di Simone**: per la fase di sviluppo Eye Cookies, oltre allo storico già backuppato, **serve accesso interattivo al sistema sensori in funzione** — vedere il sistema lavorare in tempo reale in un pop-up store fisico, anche solo una volta ogni 15 giorni, per validare ipotesi e fare test end-to-end concreti. Simone: *"mi piacerebbe poter accedere quanto più fisicamente possibile al sistema per fare degli scambi dati veri"*. Non servono per ora altre interfacce oltre alla dashboard, è la dashboard live + accesso fisico al sistema sensori che serve. Carlo lo girerà a Germano nella prossima comunicazione.
- **Finestra K-ippun Haru exit**: confermata in call come opportunità — appena Germano conferma il pop-up store dove rimettere i sensori dopo la chiusura K-ippun Haru, lì si fa il primo test di sviluppo end-to-end nel nuovo store contestualmente alla riattivazione.

### 2026-05-20 (proposta Totem Multisim — sollecito Simone su Alex)
- **Proposta Totem multi-sim ancora non prodotta**. Carlo solleva: *"quindi immagino che totem kit multisim questa proposta arriverà nel 2027"* (battuta ironica). Simone: la proposta deve essere prodotta dal suo collaboratore **Alex** (Soolutions hardware team), che sta tirando lungo. Simone domani 21/5 lavora in presenza con il team Soolutions e gli farà pressione: *"domani devo rompergli ancora i coglioni, devo sederlo da parte a me e dirgli adesso le facciamo le quotazioni"*.
- **Stato cliente**: Microlog/Kipinaru lato cliente è ufficialmente partito (Carlo: *"questo progetto lato cliente ufficialmente è partito, dobbiamo dare avanzamenti"*). Pressione legittima. **Carry-over**: Simone domani 21/5 sollecita Alex sui due deliverable in coda (proposta Totem + kit multi-SIM/connettività focus stabilità non banda).

### 2026-05-20 (risposta a Germano: K-ippun Haru exit + cadenza bisettimanale + totem)
- **Sessione `local_1653abdf`** — bozza risposta a Germano (thread *"R: eye cook..next step"*) prodotta paste-ready Outlook su 3 punti sollevati da lui: (1) **roadmap Eye Cookies** — sviluppi partiti la settimana scorsa, team tecnico ha accesso dashboard Microlog, in corso scarico storico offline e organizzazione call con data analyst per ingestion storico; roadmap consolidata con milestone alla prossima call di allineamento. (2) **Cadenza bisettimanale** — accolta, anzi era già in linea con la nostra intenzione; richiesti slot Martedì o Giovedì PM (giorni più scarichi HeyAI), prima call fissata entro questa settimana. (3) **Totem** — confronto interno con team hardware chiuso, proposta scritta in finalizzazione (focus stabilità connettività, non banda) per essere ragionata nella prima call bisettimanale.
- **Finestra commerciale aperta da Germano: K-ippun Haru ha fatto exit, sensori da spostare a fine maggio**. Carlo l'ha inquadrata come finestra utile per primo test in store nuovo: appena Germano conferma il pop-up di destinazione, setup parallelo + raccolta dati nel nuovo store contestualmente alla riattivazione sensori.
- **Stile email**: regola §2.1 rispettata (mai citato "Soolutions" per nome, sempre "team tecnico" / "team hardware"). **Invio email a carico di Carlo** (non eseguito automaticamente in sessione).

### 2026-05-14
- **DNS/AWS blocco tecnico ancora aperto** (14/5 08:00): thread "AWS e OPENROUTER" — [[Simone Montanari (Soolutions)|Simone]] aveva scritto 13/5 13:48 a Carlo e team NoLoop chiedendo aggiornamenti DNS per chiudere i settaggi. [[Marco Merli]] ha risposto 13/5 14:00 con allegato (forward email di "Stefano"). Nessuna risposta operativa visibile ancora da Carlo. **⚠️ Blocco tecnico deployment Eye Cookies**: coordinamento Carlo→team tecnico necessario oggi.
- **NOT pagato confermato**: nell'email recap interno 13/5 17:57 Carlo scrive al team HeyAI "NOT (Operation Transformation + Eye Cookies) è stato pagato" da NoLoop. Bonifico a Soolutions gated alla decisione formula cash-flow (Excel Andrea ↔ Elena — vedi Log 13/5).

### 2026-05-13
- **Call interna HeyAI+Soolutions** (13:32-14:35). Eye Cookies è il primo deal NOT effettivamente pagato dal cliente. **Bonifico a Soolutions inizialmente "tra oggi e domani"**, ma rettificato nell'email recap interno serale: la cifra Soolutions è **gated alla decisione della formula cash-flow** (Excel Andrea ↔ Elena per definire mensilizzato vs tranche). Non più automatico 13-14/5 — sospeso fino a chiusura del foglio condiviso.
- **Per far partire gli sviluppi servono 3 call** che Carlo organizza questa settimana: (i) call con [[Germano Marano]] per vedere live l'applicativo Microlog e capire flow utente in store; (ii) call tecnica con Microlog su payload, API e accesso playground per test in store fisico — solo se restano dubbi dopo la call con Germano; (iii) call con il data analyst NoLoop per gestire ingestion dello storico.
- **Totem hardware**: Simone domani 14/5 è nella stessa stanza con il team hardware Soolutions e solleciterà la proposta scritta (focus stabilità, non banda — pattern dichiarato sin dal 6/5).
<!-- RIMOSSO ERRORE 13/5 sera: la voce "indirizzo spedizione prodotti foto setup" era stata erroneamente assorbita in Eye Cookies. Riassegnata correttamente a [[Operation Transformation]] (riconoscimento prodotti tramite IA, prodotti fisici via Laila El Zieny). -->
- **RETTIFICA 13/5 sera**: corretto errore di attribuzione — la spedizione dei "prodotti foto" / "prodotti fisici per setup riconoscimento IA" è per **Operation Transformation**, NON Eye Cookies. Eye Cookies usa sensori Microlog per behavioral tracking, non prodotti fisici. Spostato task da scheda Eye Cookies a [[Operation Transformation]] dopo feedback Carlo. Errore originato dalla confusione nella call interna 13/5 mattina (Carlo aveva detto "se mi date un indirizzo di spedizione datemelo" senza esplicitare il workstream — io ho assunto Eye Cookies, era Operation Transformation come la posizione di [[Laila El Zieny]] suggeriva nelle schede pre-esistenti).
- **Email a Germano + Massi (sera 13/5)** — bozza v3 in [[00 - Inbox/2026-05-13 - BOZZA Email Germano Eye Cookies partenza sviluppi]]. Thread "R: EYE cookie". Contenuti: notifica partenza ufficiale sviluppi (a valle allineamento interno con team di sviluppo) + 3 punti Eye Cookies (demo interna app Microlog **direttamente con Germano**, status rinnovo licenza Microlog, numero store già attivi ad oggi) + 3 punti Operation Transformation per allineamento informativo (call team operativo per ingestion dati storici, push Justin BAT/PARD, Laila spedizione prodotti fisici per setup riconoscimento prodotti tramite IA). **TO**: Germano + Massi (entrambi destinatari diretti, no Massi in CC). **CC**: Andrea Pazienza. Regola di stile applicata: mai citare "Soolutions" per nome nelle email cliente (sempre "team di sviluppo" / "team tecnico") — propagata in CLAUDE.md §2.1.

### 2026-05-07
- **2 task chiusi in batch reconciliation** (conferma Carlo chat 7/5): fatture mandate a Massi, risposta alle mail Massi completata. Aggiornamento sviluppo a Massi recapitato. Resta aperto solo lato Germano (TOTEM + lancio fase operativa).

### 2026-04-29
- Massi chiede aggiornamento stato sviluppo + sollecita fattura
- Andrea Pazienza invia 3 fatture di cortesia per progetti NOT
- Carlo conferma allineamento già fatto con Germano e che il team ha portato avanti l'analisi
