---
type: prep-doc
status: draft
project: Eye Cookies
created: 2026-05-22
updated: 2026-05-22
purpose: Ricostruzione contesto completo Eye Cookies da email Outlook per preparare la stesura di un Requirement Log formale
sources: [Outlook emails Germano Marano + Federico Saladino + Simone Montanari, ott 2025 → mag 2026]
related_project: [[20 - Projects/NOT/Eye Cookies]]
---

# Contesto Eye Cookies pre-Requirement Log (2026-05-22)

## 1. Sintesi esecutiva

Un Requirement Log formale di Eye Cookies **non esiste** nel vault né nelle email. Esiste un documento PDF cliente-side `NOT EYE cookie requisiti.pdf` (allegato Germano alla call 22/01/2026) che enumera i codici **RFx.y** del MVP, ma il PDF è una lista di nomi-requisito senza tabella perimetro/note/stato — è un "elenco di scope" del cliente, non un Requirement Log lavorabile. I codici minimi MVP confermati da Germano sono: **RF1.1, RF1.2, RF1.3, RF1.5, RF2.2, RF2.3, RF2.4, RF3.1, RF3.2, RF3.3, RF3.4, RF4.1, RF4.2, RF4.3, RF5.1, RF5.2, RF5.4** (email 30/10/2025 post-call 29/10 e ricap 26/01/2026 Germano). La sezione RF5.3 e RF1.4 sono **escluse** dall'MVP — la sezione "Advertising Activation" emerge nel preventivo HeyAI come anticipata ma non era in scope cliente.

Esiste invece un Requirement Log **completo e tabellare** per **Operation Transformation** (file: `NOT REQ LOG` — Federico → Carlo, 26/02/2026, contenente codici F0-F1-F2-F3-F4-F5-F6-D-T-E). Quel documento NON riguarda Eye Cookies (vedi §3). Useremo quella struttura tabellare come **template di formato** per produrre il RL Eye Cookies.

**Gap principale**: serve consolidare i 17 codici RFx.y in tabella perimetro/note/stato, mappare ognuno alle conferme tecniche di Germano (sensor_id, trigger_id, UID, formato API, latency, heatmap solo dashboard), e marcare gli scope DA DEFINIRE (mapping zona→prodotto, totem ownership, GDPR, fase 2).

## 2. Timeline cronologica

| Data | Da → A | Subject | Key fact |
|---|---|---|---|
| 27/10/2025 | Carlo → Germano | Noloop \| Eye Cookies: Approfondimento Tecnico | Carlo organizza call tecnica di approfondimento per 29/10 |
| 28/10/2025 | Simone → calendar | Accepted invito | Simone (Soolutions) accetta |
| 29/10/2025 | — | Call tecnica | Federico presenta esperienza sensoristica (da Read AI report) |
| 30/10/2025 | Germano → Carlo+Federico+Simone, CC Massi | R: Approfondimento Tecnico | **Genesi nome Eye Cookies**: metafora cookie web; **IP NoLoop esclusiva**; lista MVP RF; dashboard responsive; **AI on-premise** (LLM open + RAG); totem/tablet ingresso pop-up; richiesta stima MVP + fase 2 + stack + infrastruttura; installazione primo pop-up 01/12/2025 |
| 03/11/2025 | Read AI | Weekly report | Riepilogo call 29/10 con 3 action item, 2 questions |
| 05/11/2025 | Germano → Carlo+Simone | R: Approfondimento Tecnico | Sollecito quotazione, Massi aggiunto in CC |
| 05/11/2025 | Carlo → Germano | R: Approfondimento Tecnico | "Stiamo lavorando sulle stime, call con team stasera" |
| 06/11/2025 | Carlo → Germano | R: Approfondimento Tecnico | Requisiti funzionali chiari, serve struttura dati Microlog — proposta call tecnica |
| 07/11/2025 | Germano → Carlo | R: Approfondimento Tecnico | Conferma cosa includeranno API+dashboard: aggregati posizione/movimento/permanenza per zona, demografiche base, heatmap, dati grezzi sensori con coordinate, flussi singolo soggetto profilato. JSON/CSV, API+token, VPN/whitelist IP |
| 10/11/2025 | Germano → Carlo | R: Approfondimento Tecnico | Dettaglio API Microlog (auth token + dashboard user/pwd, JSON, query range giorno+ora, **batch notturno → dati G+1**, statistiche zona/globali, sequenza zone per soggetto, ID/email+sesso+timestamp, heatmap solo dashboard, **no test env: dati reali dal 01/12**, **gap mapping zona→prodotto = a carico HeyAI**) |
| 11/11/2025 | Carlo → Germano | R: Approfondimento Tecnico | Conferma ricezione info Microlog |
| 13/11/2025 | Carlo → Germano | R: Approfondimento Tecnico | Carlo: a valle confronto team, analisi completata, sta preparando preventivo |
| 14/11/2025 | Germano → Carlo | R: Approfondimento Tecnico | Germano: "EYE Cookie è un lavoro che faremo insieme e in progressione, non abbiamo tutto quello che serve nell'immediato"; conferma che Microlog sta sviluppando le API + tracciamento uno-a-uno per NoLoop |
| 18/11/2025 | Carlo → Germano | R: Approfondimento Tecnico | Chiarimenti tecnici Carlo (post-letture team Soolutions) |
| 10/12/2025 | HeyAI → NoLoop | Presentazione NOT | Proposta servizi Automation & Digital Marketing (slide presentazione iniziale) |
| 22/01/2026 | Carlo+Andrea → Germano+Massi | NOT \| Presentazione Proposta Commerciale | Call presentazione proposta investimento, allegato `NOT EYE cookie requisiti.pdf` + 2 quotazioni |
| 23/01/2026 | Carlo → Germano+Massi+Marco+Bruno+Andrea+Michele | Re: NOT Proposta Commerciale | Recap call: decisioni confermate (Sito, CRM, Adv LinkedIn), punti aperti (Brand identity, conferma Microlog, priorità moduli, trigger events, dettagli Eye Cookies, architettura AI) |
| 26/01/2026 | Germano → Carlo | Re: Focus EYE cookie | **Ricap completo Germano**: flusso associazione soggetto↔email (tablet/totem→email→Microlog→matching ID badge), API dettaglio (sensor identifica abilitato, dati zone visitate/scaffali osservati), **gap deduzione preferenze prodotto = AI HeyAI + mappatura scaffali**, badge clienti vs personale, **lista 17 RFx.y MVP**, fase Advertising Activation prevista in fase 2, scelta AI on-premise vs LLM esterna |
| 03/02/2026 | Germano → Carlo | Re: Focus EYE cookie | Allegata documentazione API Microlog (PDF `Documentazione API XDC.pdf`) |
| 25/02/2026 | Germano → Carlo (CC Massi) | EYE cookie | API operative, flusso operativo dettagliato: `/upload/trigger` (sensor_id+timestamp+UID) + `/data/uid/tracks` (zone/durata/tier/gender/timestamp), elaborazione notturna G+1, Excel mappatura aree-sensore/prodotti in arrivo, **trial Microlog scade fine marzo 2026**, scelta operativa: HeyAI fornisce tablet+form OPPURE NoLoop sviluppa form e HeyAI integra. Allegati: `Documentazione API XDC.pdf` + `PHOTO-2026-02-02-17-31-31.jpg` (mappa aree) |
| 25/02/2026 | Carlo → Germano | R: EYE cookie | "Ho girato tutto agli sviluppatori, aspetto vostre sul contratto" |
| 25/02/2026 | Simone (gmail) → Carlo | Re: Eye cookies \| email germano | Bozza email risposta tecnica preparata da Simone via Claude: **proposta UID opaco** generato da HeyAI (no email utente per conformità GDPR), totem ad hoc HeyAI con upsell verso NoLoop, focus su dati strutturati via API anziché export dashboard |
| 26/02/2026 | Germano → Carlo (CC Massi) | R: EYE cookie | **Allegata bozza contratto Revenue Share** (Word/PDF) — termini IP, utilizzo, evoluzioni |
| 26/02/2026 | Carlo → Germano (CC Massi) | R: EYE cookie | Mail di risposta tecnica: UID opaco GDPR, totem HeyAI dispositivo ad hoc, dati e integrazione (call su dashboard ok ma integrazione solo via API), mappatura aree attesa, dettaglio sensor_id richiesto. Allegato 4 Revenue Share mancante |
| 26/02/2026 | Federico Saladino → Carlo | NOT REQ LOG | **Tabella Requirement Log Operation Transformation** (NON Eye Cookies — vedi §3): F0/F1/F2/F3/F4/F5/F6/D/T/E con perimetro+note+stato |
| 26/02/2026 | Carlo → Germano | R: EYE cookie | Segnala allegato 4 mancante, conferma disponibilità martedì confronto contratto, propone allineamento marketing mercoledì |
| 27/02/2026 | Germano → Carlo | Re: EYE cookie | Allegato 4 incluso nel corpo originale, slot martedì mattina 10:00-11:30 |
| 27/02/2026 | Carlo → Germano | R: EYE cookie | Conferma lettura contratto + allegato 4 revenue share, propone passaggio soci+legale (1-2 settimane), spiega contesto: usare il periodo intermedio per attività operative parallele (Eye Cookies test integration in parallelo a contratto in revisione) |
| 27/02/2026 | Simone (gmail) → Carlo | Re: Risposte germano | Bozza risposta tecnica: chiede a Microlog **sensor_id (MAC address es. AA:BB:CC:DD:EE:FF), trigger_id, credenziali JWT, zona di rilevamento** |
| 02/03/2026 | Germano → Carlo | R: EYE cookie | **Credenziali Microlog**: USER `kippunharu` / PASS `KippunHaru2026!` / `https://dev.microlog.it/xdc2/dashboard` |
| 02/03/2026 (2° invio) | Germano → Carlo | R: EYE cookie | **Parametri sensore**: `SENSOR_ID: 80:1F:12:D5:67:B9`, `TRIGGER_ID: 0`, UID = email utente nel totem. Login JWT → POST `/upload/trigger`. Apertura su `geometry_name` associata al tavolo (call separata Microlog) |
| 02/04/2026 | Carlo → Paolo Donzelli | R: Contratto Eye Cookies in modalità Revenue Sharing | **Switch a Full Ownership €75K** (post-allineamento Massimiliano stessa mattina) — proposta investimento aggiornata in allegato |
| 03/04/2026 | Donzelli → Carlo | (email) | **Approvazione commerciale Full Ownership €75K** (documento contrattuale formale mai prodotto) |
| 16/04/2026 | Carlo → team | Kick-off interno NOT | Avvio operativo Operations + Eye Cookies |
| 22/04/2026 | Carlo → Germano | R: EYE cookie | Riapertura: chiede aggiornamento API, totem, novità lato cliente |
| 23/04/2026 | Germano → Carlo | Re: EYE cookie | Risposte in linea: (1) API nessuna modifica + **licenza Microlog scaduta, in rinnovo, sensori operativi** ; (2) **totem nessun progresso** lato NoLoop, "è utile una vostra proposta"; (3) allegato Excel `Esposizione Kippun I Gigli_20 mar 06.xlsx` mappatura zone→prodotti (parti gialle = prodotti aggiunti nell'ultima settimana 13-20/03, da allora non aggiornato) |
| 23/04/2026 | Carlo → team interno | Eye Cookies — Risposte Germano + file prodotti | Inoltro al team interno HeyAI |
| 27/04/2026 | Carlo → team | Recap completo — Punti aperti | "Germano ha risposto su Eye Cookies — confermate ricezione?" |
| 29/04/2026 | Massi → Carlo (CC Germano) | eye cook..next step | "A che punto siamo con lo sviluppo? Voglio vendere il servizio da settembre" |
| 29/04/2026 | Germano → Carlo | R: EYE cookie | Allegato Excel cookie aggiornato. "Per il totem, va bene attendiamo voi" |
| 29/04/2026 | Carlo → Germano | R: EYE cookie | Conferma OK, totem proposta in preparazione |
| 29/04/2026 | Andrea Pazienza → Carlo | R: eye cook..next step | 3 fatture cortesia inviate (1 = acconto €75K Eye Cookies); Roberta Calajò in conoscenza |
| 13-14/05/2026 | Carlo ↔ Germano | R: eye cook..next step | Carlo chiede: demo piattaforma Microlog, stato rinnovo licenza, numero store attivi. Germano risponde: rinnovo confermato, trial unico pop-up Gigli, credenziali condivise |
| 19/05/2026 | Germano → Carlo | R: eye cook..next step | **K-ippun Haru ha fatto exit**, sensori da spostare a fine maggio (futuro negozio K-ippun o altro brand). Frattanto si usano dati storici. Propone meeting bisettimanale. Chiede novità totem |
| 21/05/2026 | Carlo → Germano | R: eye cook..next step | Team sviluppo ha già scaricato storico ma dashboard non raggiungibile — chiede riattivazione accesso. Roadmap: consegna settembre confermata. Sì meeting bisettimanale (giovedì pomeriggio o martedì). Proposta totem entro inizio settimana |
| 22/05/2026 | Germano → Carlo | R: eye cook..next step | **Microlog ha fatto rilascio senza avviso**: nuove credenziali `germano.marano` / `Tempo123456!` su nuovo URL `https://tracking.microlog.it/` (anche per API). API attualmente disponibili sia su nuovo che su vecchio indirizzo. Meeting bisettimanale giovedì 15:30 confermato |

## 3. Verdetto file "NOT REQ LOG" (Federico → Carlo, 26/02/2026)

**Conclusione**: il file `NOT REQ LOG` è il Requirement Log di **Operation Transformation**, NON di Eye Cookies. Evidenze:

- Codifica: F0 (Setup), F1 (Predittivo), F2 (Approvazione), F3 (Magazzino), F4 (Pop-up check-in), F5 (Vendita), F6 (Vendita indiretta), D (Dashboard), T (Tecnico), E (Esclusioni). Eye Cookies usa codifica RFx.y.
- Contenuto: censimento giacenze pop-up, modello predittivo replenishment, ordini BAT, codici myglow, fasce prezzo BAT, vendita NEO/VELO, magazzino Milano+Roma. Tutto ciò è ambito Operations.
- Nessun riferimento a Microlog, sensori, totem, behavioral tracking, profilazione, heatmap, zone visitate, badge, GDPR cliente finale per behavioral data — temi core di Eye Cookies.
- Stakeholder citati: Carmen, Laila (operativi Operations). Per Eye Cookies sarebbero Germano/Massi.

**Implicazione per il RL Eye Cookies**: la struttura tabellare di NOT REQ LOG (ID / Fase-Area / Requisito / Perimetro INCLUSO-ESCLUSO-DA DEFINIRE / Note vincoli fornitore / Stato Confermato-Punto aperto) è un **template riutilizzabile** per costruire il RL Eye Cookies da zero, mappando i 17 codici RFx.y noti.

## 4. Requisiti emersi (codici RFx.y MVP)

I codici sono presenti nel PDF `NOT EYE cookie requisiti.pdf` (allegato 22/01/2026) e ribaditi da Germano 26/01/2026 + 30/10/2025. Il PDF NON è stato letto integralmente in questa sessione (file non presente in `80 - Sources/Files/`). Le descrizioni sotto sono ricostruite dai context delle email:

### Gestione accessi e multiutenza
- **RF1.1 — RF1.5** (manca RF1.4): autenticazione, profili utente, multi-account. RF1.4 escluso esplicitamente da Germano per MVP (rimandato a fase 2).

### Gestione multi-tenant e organizzazione per pop-up store
- **RF2.2, RF2.3, RF2.4** (manca RF2.1): organizzazione per cliente/pop-up store. RF2.1 escluso per MVP.

### Integrazione con sensori Microlog
- **RF3.1, RF3.2, RF3.3, RF3.4**: integrazione completa. Coperti da API Microlog `/upload/trigger` + `/data/uid/tracks` (conferma Germano 25/02 + 10/11). _Fonte: email 30/10/2025 + 10/11/2025 Germano._

### Profilazione comportamentale e identificazione utenti (con AI)
- **RF4.1, RF4.2, RF4.3**: associazione soggetto↔email via totem/tablet, badge tracking, deduzione preferenze prodotto via AI. Gap: mapping zona→prodotto NON fornito da Microlog (a carico HeyAI). _Fonte: email 26/01/2026 + 10/11/2025._

### Generazione carrello virtuale (con AI)
- **RF5.1, RF5.2, RF5.4** (manca RF5.3): carrello virtuale calcolato da AI sui dati comportamentali + mappatura prodotti. RF5.3 escluso per MVP. _Fonte: email 26/01/2026._

### Advertising Activation
- Sezione **NON nei codici MVP cliente** ma **presente nel preventivo HeyAI** (segnalata da Germano in 26/01 come "anticipata in fase 1, noi pensavamo a fase 2"). Da chiarire se rientra nello scope €75K full ownership o se va declinata.

**Codici RFx.y mancanti dalla lista MVP (esclusi da Germano)**: RF1.4, RF2.1, RF3.5+, RF4.4+, RF5.3, RF5.5+. Da verificare leggendo il PDF originale.

## 5. Specifiche tecniche Microlog

### Autenticazione
- **API**: token statico per MVP, JWT (login → token). Endpoint auth + upload trigger come da `Documentazione API XDC.pdf` (allegato 03/02/2026 e ri-allegato 25/02/2026).
- **Dashboard**: credenziali username/password.

### Credenziali storiche (utilizzo legacy fino al 22/05/2026)
- USER: `kippunharu` / PASS: `KippunHaru2026!`
- URL dashboard: `https://dev.microlog.it/xdc2/dashboard`
- Fonte: email Germano 02/03/2026 (1° invio).

### Credenziali nuove (post-rilascio Microlog 22/05/2026)
- USER: `germano.marano` / PASS: `Tempo123456!`
- URL dashboard + API: `https://tracking.microlog.it/`
- Stato: API disponibili sia su vecchio sia su nuovo URL; non è chiaro se richiedano credenziali vecchie o nuove. Germano ha richiesto chiarimenti a Microlog.
- Fonte: email Germano 22/05/2026.

### Parametri sensore (pop-up I Gigli K-ippun Haru)
- `SENSOR_ID: 80:1F:12:D5:67:B9` (formato MAC address)
- `TRIGGER_ID: 0`
- UID: corrisponderà all'email utente nel totem (proposta Carlo: **UID opaco generato da HeyAI**, no email diretta, per GDPR — non ancora confermata da Germano)
- `geometry_name` associata al tavolo da chiarire con Microlog (call separata)
- Fonte: email Germano 02/03/2026 (2° invio).

### Formato dati
- **API**: JSON, query con range temporale (giorno+fascia oraria). CSV per aggregati.
- **Latency**: elaborazione **batch notturna post-mezzanotte** → dati disponibili **giorno successivo** (G+1).
- **No test env**: dati reali dal 01/12/2025.
- Fonte: email Germano 10/11/2025.

### Dati disponibili via API
- **Endpoint `/upload/trigger`** (POST): registra evento associazione utente↔sensore (input: `sensor_id`, `timestamp`, `uid`).
- **Endpoint `/data/uid/tracks`** (GET): per utente UID restituisce zone visitate, durata permanenza, tier, gender, timestamp di trigger.
- **Dati aggregati zona+globali via API**: permanenza media, ingressi/uscite, passanti vs interessati vs ingaggiati, valori assoluti+pesati per superficie. _(da chiarire se via stessi endpoint o endpoint separati)_
- **Sequenza zone visitate per soggetto profilato** con tempi.
- **Demografiche base**: ID/email, sesso, timestamp.
- **Evento "azione completata"**.
- Fonte: email Germano 07/11/2025 + 10/11/2025 + 26/01/2026.

### Dati disponibili solo via dashboard (NON via API)
- **Heatmap** (visualizzazione spaziale traffico). In sviluppo Microlog: heatmap direzione sguardo.
- Flussi anonimi + analytics completi esportabili manualmente in JSON/CSV.
- Fonte: email Germano 10/11/2025 + 25/02/2026.

### Gap conosciuti
- **Mapping zona→prodotto**: NON fornito da Microlog. A carico di HeyAI tramite file Excel `Esposizione Kippun I Gigli_20 mar 06.xlsx` (allegato Germano 23/04/2026, aggiornato 29/04/2026). Fonte: email Germano 10/11/2025 + 25/02/2026.
- **Test environment assente**: solo dati reali dal 01/12/2025 sul pop-up I Gigli. Fonte: email Germano 10/11/2025.
- **Documentazione API non aggiornata post-rilascio 22/05**: Germano ha chiesto a Microlog dettagli sulla migrazione API.

### Stato infrastruttura
- **Pop-up attivi**: 1 (I Gigli, K-ippun Haru). K-ippun ha fatto exit, sensori da spostare a fine maggio 2026 (destinazione TBD: nuovo negozio K-ippun o altro brand).
- **Storico dati offline**: scaricato dal team Soolutions, ulteriore backup richiesto al 21/05 ma dashboard non raggiungibile.
- **Contratto Microlog**: rinnovato (conferma Germano 14/05/2026).

## 6. Stack tecnico HeyAI dichiarato (per Eye Cookies)

- **Dashboard web responsive** (utilizzabile anche da mobile) — confermato Germano 30/10/2025 come requisito MVP.
- **AI on-premise**: LLM + runtime + RAG **open source** installati su server back-end NoLoop (richiesta esplicita Germano 26/01/2026 per evitare lock-in su LLM esterna tipo ChatGPT/Gemini). HeyAI nel preventivo iniziale proponeva LLM esterna via API; tema riaperto e da risolvere.
- **Totem/tablet** all'ingresso pop-up per profilazione consumatore + raccolta consenso GDPR. Proposta HeyAI: dispositivo ad hoc fornito da HeyAI con installazione fissa (riduce rischio associazioni mancate). Alternativa: tablet fornito da NoLoop, HeyAI sviluppa form. Decisione Germano 23/04: "attendiamo proposta vostra". Decisione interna HeyAI pronta al 21/05 — proposta in invio inizio settimana 25-31/05.
- **UID opaco**: identificativo univoco generato da HeyAI al momento registrazione utente (NO email transitata verso Microlog) — proposta Carlo 26/02 e Simone 25/02 per conformità GDPR. **Non ancora confermata da Germano** che si è impegnato a verificare con Microlog (email 27/02).
- **Pagina di registrazione**: form + chiamata API trigger sviluppata da HeyAI in entrambi gli scenari totem.
- **Architettura multi-tenant** per supportare scaling oltre K-ippun (futuri pop-up + altri brand).

## 7. Gap da chiudere prima del Requirement Log formale

1. **Lettura PDF originale `NOT EYE cookie requisiti.pdf`** (allegato Germano 22/01/2026) → estrarre descrizione testuale di OGNI codice RFx.y per popolare la colonna "Requisito" del RL. Il PDF non è in `80 - Sources/Files/`; va recuperato dall'email originale o richiesto a Germano.
2. **Conferma UID opaco** da parte di Microlog (proposta Carlo 26/02, Germano si è impegnato a verificare ma nessuna risposta documentata in vault).
3. **`geometry_name` associata al tavolo** (parametro POST `/upload/trigger`) — pending da Microlog (segnalato Germano 02/03/2026).
4. **Scope mapping zona→prodotto**: il file Excel `Esposizione Kippun I Gigli` è statico al 20/03/2026; serve definire frequenza di aggiornamento, owner del mantenimento (NoLoop o HeyAI), formato dati strutturato.
5. **Decisione finale totem**: invio proposta HeyAI a Germano entro 25-31/05, attesa accettazione. Definisce: dispositivo ad hoc HeyAI o tablet NoLoop, costo, scalabilità multi pop-up, kit multi-SIM/connettività.
6. **GDPR/privacy**: tema dichiarato "in carico al cliente legale Noloop" nel RL Operations (E.2). Per Eye Cookies va esplicitato come tema cliente-side, **ma con interazione operativa**: il consenso raccolto al totem (testo, granularità, gestione revoche) impatta il software HeyAI. Definire chi scrive il testo consenso e chi gestisce il "diritto di cancellazione" lato Microlog + DB HeyAI.
7. **Confine MVP vs Fase 2 cristallizzato**: la sezione "Advertising Activation" del preventivo HeyAI è fuori dai codici RFx.y MVP cliente — va dichiarata esplicitamente IN o ESCLUSA dal €75K full ownership.
8. **Stack AI on-premise vs LLM esterna**: tema riaperto da Germano 26/01, **mai chiuso formalmente**. Decisione tecnica HeyAI da prendere e documentare nel RL come vincolo architetturale (T.x).
9. **Numero store/pop-up scope MVP**: ad oggi 1 (I Gigli), K-ippun in exit. Definire se il MVP target è "1 pop-up funzionante" o "architettura multi-tenant testata su N pop-up". Massi vuole vendere il servizio da settembre 2026 a centri commerciali (33 pop-up BAT + altri).
10. **Ownership dati storici scaricati**: il team di sviluppo ha scaricato storico Microlog (da credenziali condivise) — definire dove sono salvati, chi ne ha accesso, vincoli di non-condivisione (sono dati behavioral di persone reali raccolte sotto consenso K-ippun).
11. **Migrazione API post-rilascio Microlog 22/05**: attendere dettagli Microlog su procedura migrazione, decidere se sviluppare contro nuovo URL o mantenere doppio supporto temporaneo.

## 8. Open questions per Germano

1. Puoi rinviarci il PDF `NOT EYE cookie requisiti.pdf` con la descrizione completa dei codici RFx.y? Non lo troviamo nei nostri archivi.
2. Microlog ha confermato che possiamo usare un **UID opaco generato da noi** anziché l'email dell'utente nel POST `/upload/trigger`?
3. Quale `geometry_name` dobbiamo passare nei trigger per il tavolo registrazione del pop-up I Gigli?
4. Il file `Esposizione Kippun I Gigli` viene aggiornato? Con che cadenza? Chi lo mantiene? Possiamo riceverlo in formato strutturato (CSV/JSON) anziché Excel?
5. Stato definitivo del rilascio Microlog 22/05: le API restano disponibili in parallelo sui due URL per quanto tempo? Le credenziali vecchie continueranno a funzionare sui vecchi endpoint?
6. K-ippun ha fatto exit: i sensori verranno spostati e dove? Tempistica? Continuiamo a sviluppare sul pop-up I Gigli con dati storici fino allo spostamento?
7. Per il consenso GDPR raccolto al totem: chi redige il testo? È pre-approvato dal vostro reparto legale?
8. Sezione "Advertising Activation" del preventivo HeyAI: rientra nel MVP €75K o è fase 2 quotata a parte?
9. Sui rinnovi futuri (dopo periodo trial Microlog finito a fine marzo 2026 e rinnovato): qual è il costo licenza Microlog e chi lo sostiene? Impatta il pricing finale del servizio Eye Cookies che venderete da settembre?
10. Per la replicabilità su altri pop-up oltre K-ippun: i sensori vanno installati ad hoc o c'è un kit standard? Quali sono i tempi/costi di installazione lato Microlog?

## 9. Allegati ricevuti

| Allegato | Fonte (email) | Data | Stato in vault |
|---|---|---|---|
| `NOT EYE cookie requisiti.pdf` | Andrea (call invite NOT) | 22/01/2026 | NON in `80 - Sources/Files/` — da recuperare |
| `NOT_Proposta di Investimento_Marketing_220126.pdf` | Andrea (call invite NOT) | 22/01/2026 | da verificare presenza |
| `NOT_Quotazione Eye Cookies_220126.pdf` | Andrea (call invite NOT) | 22/01/2026 | da verificare presenza |
| `Documentazione API XDC.pdf` | Germano 03/02 + ri-allegato 25/02/2026 | 03-25/02/2026 | NON in `80 - Sources/Files/` — da recuperare |
| `PHOTO-2026-02-02-17-31-31.jpg` (mappa aree sensore) | Germano 25/02/2026 | 25/02/2026 | NON in vault |
| Bozza contratto Revenue Share (Word/PDF) | Germano 26/02/2026 | 26/02/2026 | da verificare presenza (citato in scheda Eye Cookies §"Storia clausole inaccettabili") |
| `Esposizione Kippun I Gigli_20 mar 06.xlsx` | Germano 23/04/2026 | 23/04/2026 | NON in `80 - Sources/Files/` — da recuperare |
| Excel cookie aggiornato | Germano 29/04/2026 | 29/04/2026 | NON in vault |
| Proposta investimento Full Ownership Eye Cookies (PDF/docx) | Carlo → Donzelli 02/04/2026 | 02/04/2026 | da verificare presenza |
| 3 fatture cortesia (1 acconto Eye Cookies €75K) | Andrea Pazienza 29/04/2026 | 29/04/2026 | da verificare presenza |

**Raccomandazione**: prima di scrivere il RL formale, scaricare tutti gli allegati elencati e archiviarli in `80 - Sources/Files/Eye Cookies/` per consultazione strutturata.

## 10. Fonti email (cronologiche, ultime 30 rilevanti)

| Data | Mittente | Subject | URI / webLink |
|---|---|---|---|
| 27/10/2025 | Carlo Sanvoisin | Noloop \| Eye Cookies: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AACflQmRAAA%3D` |
| 30/10/2025 | Germano Marano | R: Noloop \| Eye Cookies: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AAChNzrgAAA%3D` |
| 05/11/2025 | Germano Marano | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AAClxzP9AAA%3D` |
| 05/11/2025 | Carlo Sanvoisin | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AAClx4REAAA%3D` |
| 06/11/2025 | Carlo Sanvoisin | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AACmavLyAAA%3D` |
| 07/11/2025 | Germano Marano | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AACmalf8AAA%3D` |
| 10/11/2025 | Germano Marano | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AACojsIhAAA%3D` |
| 11/11/2025 | Carlo Sanvoisin | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AACoj7ttAAA%3D` |
| 13/11/2025 | Carlo Sanvoisin | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AACqcOxcAAA%3D` |
| 14/11/2025 | Germano Marano | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AACrjZFHAAA%3D` |
| 18/11/2025 | Carlo Sanvoisin | R: Approfondimento Tecnico | `mail:///messages/AAMkADU2.../AACudF2SAAA%3D` |
| 10/12/2025 | HeyAI | Presentazione NOT | `mail:///messages/AAMkADU2.../AAC87lLeAAA%3D` |
| 22/01/2026 | Andrea Pazienza | NOT \| Presentazione Proposta Commerciale | (call invite) |
| 26/01/2026 | Germano Marano | Re: Focus EYE cookie | (subject in thread originale) |
| 03/02/2026 | Germano Marano | Re: Focus EYE cookie (Documentazione API XDC.pdf) | (thread Focus EYE cookie) |
| 25/02/2026 | Germano Marano | EYE cookie | `mail:///messages/AAMkADU2.../AADvuJ1nAAA%3D` |
| 25/02/2026 | Carlo Sanvoisin | R: EYE cookie | (thread) |
| 25/02/2026 | Simone Montanari | Re: Eye cookies \| email germano | `mail:///messages/AAMkADU2.../AADvuJ10AAA%3D` |
| 26/02/2026 | Germano Marano | R: EYE cookie (allegata bozza contratto) | (thread) |
| 26/02/2026 | Federico Saladino | NOT REQ LOG (Operation Transformation) | `mail:///messages/AAMkADU2.../AADw_OQVAAA%3D` |
| 26/02/2026 | Carlo Sanvoisin | R: EYE cookie | (thread) |
| 27/02/2026 | Germano Marano | Re: EYE cookie | (thread) |
| 27/02/2026 | Simone Montanari | Re: Risposte germano (sensor_id, trigger_id) | `mail:///messages/AAMkADU2.../AADw_OQhAAA%3D` |
| 02/03/2026 | Germano Marano | R: EYE cookie (credenziali Microlog + parametri sensore) | (2 invii) |
| 02/04/2026 | Carlo Sanvoisin | R: Contratto Eye Cookies in modalità Revenue Sharing | `mail:///messages/AAMkADU2.../AAEHHpRgAAA%3D` |
| 22/04/2026 | Carlo Sanvoisin | R: EYE cookie | `mail:///messages/AAMkADU2.../AAEVEO0ZAAA%3D` |
| 23/04/2026 | Germano Marano | Re: EYE cookie (risposte in linea + Excel zone-prodotti) | `mail:///messages/AAMkADU2.../AAEViQ6JAAA%3D` |
| 23/04/2026 | Carlo Sanvoisin | Eye Cookies — Risposte Germano + file prodotti in allegato | `mail:///messages/AAMkADU2.../AAEViVsbAAA%3D` |
| 29/04/2026 | Germano Marano | R: EYE cookie (Excel cookie aggiornato) | `mail:///messages/AAMkADU2.../AAEZdpELAAA%3D` |
| 29/04/2026 | Massi Sinigaglia | eye cook..next step (sollecito) | (avvio thread "eye cook..next step") |
| 13-14/05/2026 | Carlo ↔ Germano | R: eye cook..next step | (thread) |
| 14/05/2026 | Germano Marano | R: eye cook..next step | `mail:///messages/AAMkADU2.../AAEjhD9sAAA%3D` |
| 19/05/2026 | Germano Marano | R: eye cook..next step (K-ippun exit) | `mail:///messages/AAMkADU2.../AAEm6iVfAAA%3D` |
| 21/05/2026 | Carlo Sanvoisin | R: eye cook..next step | `mail:///messages/AAMkADU2.../AAEoRza0AAA%3D` |
| 22/05/2026 | Germano Marano | R: eye cook..next step (nuove credenziali Microlog) | `mail:///messages/AAMkADU2.../AAEosS6VAAA%3D` |

(Per cliccare gli URI direttamente in Outlook, sostituire il prefisso `mail:///messages/` con `https://outlook.office365.com/owa/?ItemID=` e aggiungere `&exvsurl=1&viewmodel=ReadMessageItem`.)
