---
type: resource
product: Minutes
client: NoLoop
status: in-production-evolving
created: 2026-04-30
updated: 2026-05-28
aliases: ["Meet Assistant"]
---

# 📚 Minutes

> Prodotto interno HeyAI: trascrizione e estrazione strutturata dalle call (meeting assistant).
> Parte della suite [[Area - AI Solutions (Prodotti Interni)|AI Solutions]] e dell'ecosistema NoLoop 2026.
>
> _Alias storico: **"Meet Assistant"** (vecchio nome, rinominato Minutes)_

## Stato (6/5/2026)

- **Minute Executive**: ✅ abilitata a TUTTI gli utenti. Il flag `minute_executive` non è più gating, compare per tutti. Il prompt salvato nei settings è quello scritto da Carlo e **vale per tutti gli utenti** (settings = applicazione, non singolo).
- **Permesso `settings` + `models`**: assegnato a Carlo su Solutions (per fare modifiche al prompt e scegliere modello).
- **Edit manuale task/assegnatari**: 🟡 **deploy ASAP 13/5** (Federico dichiarato in call mattina "in prod oggi pomeriggio"; email recap serale Carlo rettifica a "ASAP" — verificare se effettivamente live). Carlo manda email a Garbarino "tutto in produzione" per la plenaria una volta confermato il deploy.
- **Caching DB minute executive** (NUOVO enhancement): salvataggio in DB della prima generazione per evitare rigenerazione multipla (riduce consumo token quando più utenti scaricano lo stesso doc). Federico **prova a tirarlo avanti** anche prima del via Wave 2 ufficiale.
- **Registrazione call esterne**: Simone ha playground già pronto. Era fuori scope da Minutes Wave 1. **Prima cosa che parte appena Wave 2 è ufficialmente attiva** (= pagamenti incassati).
- **Plenaria utenti**: Carlo aspetta data da Garbarino, farà demo + spiegazione prompt + reminder consumi token (rischio: utenti generano la executive in parallelo). Reminder già parzialmente fatto.
- **Token consumption alert**: la minute executive consuma molto (~20 cent a minuta stima Carlo, Federico avverte di più). Mitigazione = caching DB + plenaria utenti.

## Permessi & settings (chiarimento Federico 6/5)

- I settings sono dell'**applicazione**, non sono privati del singolo utente.
- Federico **non vuole aprire i settings agli utenti finali** (neppure i prompt) per il rischio "utente cancella per sbaglio, no recover". Carlo è contrario ma cede.
- Enhancement Wave 2: icona "reset prompt default" nei settings → tu scegli quando ripristinare il prompt fornito da HeyAI.

## Funzionalità

### Wave 1 (in produzione)
- Trascrizione call (Teams, registrazioni)
- Estrazione automatica task/decisioni
- Diarizzazione speaker

### Wave 2 (evoluzione, €9K Minutes Extension)
- Registrazione call esterne (cattura audio di sistema)
- Agente in-call (entra come partecipante Teams)
- Editing task estratti prima invio ai moduli ([[Flow]], [[LeadMe]], [[Link]])
- Accettazione input non-call (email, note vocali, documenti)
- Onboarding [[Lorena Cavecchi]] — referente operativa

## Ruolo nell'architettura Wave 2

Minutes è il **raccoglitore universale** di input. Tutti i nuovi dati passano da qui e vengono distribuiti ai moduli appropriati:
- → [[LeadMe]] (lead, task commerciali)
- → [[Link]] (apertura commesse)
- → [[Flow]] (task operativi)

## Task aperti (post call interna 20/5)

- [x] ~~**#p1** Federico: nuova versione Minutes in prod ASAP~~ → ✅ chiuso 20/5: push eseguito live in call da Simone (16:54 circa, procedura semiautomatica OTP+terminale completata)
- [ ] **#p1** Federico+Simone: caching DB minute executive — carry-over confermato in email recap 13/5, non ripreso esplicitamente in call 20/5
- [ ] **#p1** Simone: **password reset massivo** utenti Minutes — posticipato a **mercoledì 27/5** (Simone in Marocco 22-26/5 + dipendenza approvazione mail AVS NoLoop)
- [ ] **#p1** Simone: chiusura registrazione call esterne entro **21/5** (se possibile) → permette a Carlo di annunciarla nella plenaria utenti senza fare una seconda call dedicata
- [ ] **#p1** Federico: costruzione sistema centralizzato di usage LLM (tutti gli applicativi) in Wave 2 — Carlo lo richiede esplicitamente, Federico lo include nel Wave 2 backlog
- [ ] **#p1 Carlo**: inviare email a Garbarino "Minutes tutto in produzione" + reminder consumi token + richiesta data plenaria. Bozza già pronta dal 14/5 (vedi Sessioni Cowork correlate)
- [ ] **#p2 Carlo**: testare l'app **desktop Minutes** (`Minutes Desktop.dmg`) su macchina pulita e **registrare lo schermo** durante la prima installazione → il video diventa il tutorial di onboarding per tutti (richiesta Simone 25/5)
- [ ] **#p3 Carlo**: in Impostazioni Minutes → Trascrizione, valutare di **disattivare "chiedi conferma prima di registrare"** per auto-trascrizione di tutte le call in bozza (suggerimento Federico 28/5)

## Log

### 2026-05-28 — Versione DESKTOP Minutes consegnata + auto-record (note vocali Soolutions 25-28/5)
- **App desktop Minutes esiste**: Simone ha costruito una **versione desktop** (file `Minutes Desktop.dmg`, "DMG firmato") consegnata a Carlo il **25/5** per beta-test mentre Simone era in viaggio/Marocco. Built in dev mode → possibili bug su macchina diversa dallo sviluppatore (Simone: *"mi stai facendo la beta tester"*). **Già collegata alle Minutes online** (conferma Federico 28/5: *"è già collegata con le Minutes online"*). Fonte: [[2026-05-28 - Trascrizioni vocali WhatsApp (batch 25-28 mag)]] note 01, 05, 06.
- **Auth flow desktop (prima installazione)**: Minutes ambiente dev/test "solutions" → Dispositivi → "+" Aggiungi dispositivo → copia/incolla link (oppure apertura app da Chrome/Safari con auth propagata) → concedere tutti i permessi.
- **Auto-record (setting chiave)**: in Impostazioni Minutes → Trascrizione c'è **"chiedi conferma prima di registrare"**; disattivandolo, Minutes **registra e trascrive automaticamente tutte le call** e le pusha in **bozza** (gestibili o cancellabili a posteriori) — niente più rischio di dimenticare di registrare, nessuna icona di registrazione visibile (note 07, 08). Già usato live per registrare la **call bisettimanale Eye Cookies del 28/5** (Federico l'aveva avviata prima che Carlo se ne dimenticasse).
- **Workflow enrichment minuta (desktop)**: post-call serve un passaggio manuale di "enrichment" — andare sul desktop ("01 desktop"), "modifica minuta", assegnare **chi era presente** + **cliente/commessa** (note 06). La trascrizione esce già con partecipanti mappati come su Teams, rimappabili da "gestisci speaker".
- **UX matitina**: l'icona matita diventa **rossa quando sta registrando/scrivendo** (note 06).
- **Roadmap enhancements dichiarata (Federico 28/5)**: (a) **automatch partecipanti** automatico; (b) a fine minuta, prompt "ok nuova minuta, come la chiamiamo" con UI di selezione partecipanti inline. Federico lega esplicitamente questi enhancement a un **pagamento aggiuntivo** (*"ma te devi pagare dei soldi"*) → coerente con la pressione upward sui prezzi già a profilo di [[Federico Saladino (Soolutions)]].

### 2026-05-20 sera 23:15 — ✅ Sblocco dipendenza AWS sul password reset
- **Approvazione AWS SES uscita sandbox arrivata in serata** (vedi [[Crowd]] Log 20/5 sera 23:15): noloop.eu è fuori dalla sandbox con quote produzione, DKIM/SPF/DMARC pass.
- **Conseguenza su password reset massivo utenti Minutes**: la dipendenza "sine qua non" dichiarata da Federico+Simone in call pomeriggio ("finché non c'è le mail non sono attaccate non possiamo fare il reset") **cade**. Il password reset resta vincolato solo al rientro Simone dal Marocco → **mercoledì 27/5** confermato.

### 2026-05-20 (call interna HeyAI+Soolutions allineamento — push prod live)
- **Push in produzione eseguito live in call** da Simone (16:54 circa). Procedura: Simone accende portatile dedicato + autenticazione OTP + login remoto + lancio comando da terminale (~20 secondi). La procedura resta semiautomatica perché velocizzarla diventerebbe una mezza backdoor contraria alle policy NoLoop (Simone: *"se lo vogliamo velocizzare diventa una mezza backdoor che loro non ci approverebbero mai"*). Stato: ufficialmente "tutto bello implementato e attivo" → Carlo può comunicare a Garbarino e fissare la plenaria utenti.
- **Bilingue confermato**: Federico in call segnala che Minutes può generare il report in **italiano, inglese, spagnolo, tedesco**. *"Ho fatto aggiungere anche per il meme"*. Funzionalità live in produzione.
- **Consumi token Minutes a oggi**: **36,10 $ totali** (verificato live da Simone su Openrouter durante la call). Cifra contenuta. **Idrovora token = Venue Finder, NON Minutes** — Federico in call ha rovesciato la preoccupazione di Carlo: *"la cosa più idrovora se fosse acqua, ma è tokenovora in questo caso è il Venue Finder"*. Minutes risparmia perché il token caro è l'output e i report Minutes sono output corti. Carlo accetta come "fisima mia" sapere il consumo per il riassicurarsi che non si esageri.
- **Sistema centralizzato di usage LLM** (NUOVO): Federico costruirà un sistema centralizzato di misurazione consumi token su **tutti gli applicativi** nella Wave 2. Vincolo tecnico riconosciuto da Federico in call: i conteggi token in input non sono deterministici neppure lato provider (stesso prompt può dare 4 o 7 token in base a casistica) → la dashboard misurerà output token + costo reale via Openrouter analytics.
- **Registrazione call esterne** (Minutes Wave 2 €9K extension): Simone ha playground già funzionante. Carlo gli chiede se è realisticamente in grado di chiuderlo entro **domani 21/5**: se sì, nella sessione plenaria utenti Carlo lo annuncia evitando una seconda call dedicata. Simone: *"realisticamente potrei anche chiuderla domani se faccio solo quello"*. **Strategia carota-bastone Simone**: la registrazione call esterne è "la cosa che [gli utenti] aspettano di più", giocarla in anticipo come incentivo prima di pretendere chiusura test Crowd.
- **Password reset massivo NoLoop**: posticipato a **mercoledì 27/5** (Simone via in Marocco da venerdì 22/5 al martedì 26/5 sera). Carlo aspetta approvazione NoLoop sulle nuove mail prima del reset. Discorso: *"finché non c'è le mail non sono attaccate, non possiamo fare il reset"*. Federico+Simone: *"sine qua non"* la mail di AVS in arrivo dal dominio giusto.
- **Plenaria a Garbarino**: Carlo procede con email "Minutes tutto in produzione" + reminder consumi token + richiesta data plenaria. Bozza già pronta dal 14/5 (vedi sotto Sessioni Cowork correlate).

### 2026-05-13
- **Call interna HeyAI+Soolutions** (13:32-14:35). Federico conferma il push in produzione dell'edit manuale task/assegnatari per oggi pomeriggio 13/5. Carry-over confermati: caching DB minute executive (Federico prova a tirarlo avanti pre-Wave 2), registrazione call esterne (parte appena Wave 2 ufficialmente attiva = pagamenti incassati). Next action Carlo: email "Minutes tutto in produzione" a Laura Garbarino per la plenaria utenti + reminder consumi token.
- **Email recap interno serale 13/5** (riscrittura Carlo): rettifica → in email il push diventa "Nuova versione in prod **ASAP**" (non "già in prod"); aggiunto bullet "**Password reset massivo**" come carry-over ancora aperto dal 5/5 — era rimasto pendente sotto lo standby setup mail e ora torna attivo come task Simone. Plenaria a Garbarino: Carlo gestisce.

## Sessioni Cowork correlate

- 2026-05-14 — `local_8694cefc` + `local_0ee687a5` — Drafting iterativo bozza email Carlo→Laura Garbarino su plenaria Minutes: 2 iterazioni in chat, versione finale Carlo "ti scrivo solo per un reminder veloce sul tema Minutes. Abbiamo finalizzato una serie di miglioramenti allo strumento e mi piacerebbe organizzare una sessione plenaria con il team per mostrare le novità, fare un recap su come sfruttare al meglio Minutes e consegnare a tutti la guida che abbiamo redatto. Mi serve solo un tuo ok per procedere con l'organizzazione". Pattern stile: presentare miglioramenti come già live (non "ASAP"), tagliare dettagli, chiedere solo OK plenaria (non data). Bozza non ancora inviata, Carlo decide timing. → [[80 - Sources/Cowork Sessions/2026-05-14 - Indice sessioni#Sessione 1 — Email reminder to Laura about Minutes (prima iterazione)]] + [[80 - Sources/Cowork Sessions/2026-05-14 - Indice sessioni#Sessione 2 — Draft reminder email to Laura about Minutes (seconda iterazione)]]
- 2026-05-13 — `local_af2ea6af` — Email recap interno Federico+Simone (riscrittura Carlo): **password reset massivo utenti Minutes riattivato** come carry-over ancora aperto dal 5/5/2026 (era rimasto pendente sotto lo standby DNS, ora torna attivo come task Simone). Deploy "in prod" rettificato a "ASAP, verificare". Plenaria utenti a Garbarino gestita da Carlo (email "tutto in produzione" + reminder consumi token). → [[80 - Sources/Cowork Sessions/2026-05-13 - Indice sessioni#Sessione 5 — Write recap email and update tasks (Federico+Simone allineamento interno)]]

## Chat correlate

- Tutte le chat con "Minutes" o "Meet Assistant" nelle 64 conversazioni claude.ai
