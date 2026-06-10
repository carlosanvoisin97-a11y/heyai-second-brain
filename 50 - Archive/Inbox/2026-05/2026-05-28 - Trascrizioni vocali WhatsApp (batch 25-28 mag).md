---
type: inbox
created: 2026-05-28
updated: 2026-05-28
tags: [trascrizioni, vocali, whatsapp, soolutions]
related_projects: [Minutes, Eye Cookies]
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Batch processato e assorbito nelle schede (28/5). Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# Trascrizioni vocali WhatsApp — batch 25-28 maggio

> Capture grezzo di 8 messaggi audio/video WhatsApp caricati da Carlo il 28/5. Trascritti in locale (offline) con **whisper.cpp + modello ggml-large-v3**, italiano. Pipeline: `.ogg/.mp4` → ffmpeg WAV 16kHz mono → whisper-cli. Audio mai uscito dalla macchina (§13).
>
> **Attribuzione mittenti = INFERITA dal contenuto, NON certa** (WhatsApp non espone il mittente nei file). Vedi flag in coda. I `[STT:'...']` segnalano errori di trascrizione corretti; le correzioni di nomi propri sono fra parentesi quadre.

## Mapping cronologico (≠ ordine di caricamento)

| # | File originale | Durata | Mittente inferito | Data |
|---|---|---|---|---|
| 01 | WhatsApp Ptt 2026-05-25 at 19.59.02.ogg | 92.9s | Simone | 25/5 |
| 02 | WhatsApp Ptt 2026-05-25 at 19.59.34.ogg | 25.7s | Simone | 25/5 |
| 03 | WhatsApp Ptt 2026-05-27 at 16.49.07.ogg | 101.4s | Federico (confermato Carlo 28/5) | 27/5 |
| 04 | WhatsApp Ptt 2026-05-27 at 16.50.42.ogg | 85.2s | Federico (confermato Carlo 28/5) | 27/5 |
| 05 | WhatsApp Ptt 2026-05-28 at 16.21.43.ogg | 37.1s | Federico | 28/5 |
| 06 | WhatsApp Video 2026-05-28 at 16.21.55.mp4 | 69.4s | Federico | 28/5 |
| 07 | WhatsApp Ptt 2026-05-28 at 16.23.01.ogg | 6.3s | Federico | 28/5 |
| 08 | WhatsApp Ptt 2026-05-28 at 16.24.06.ogg | 31.1s | Federico | 28/5 |

> `Minutes Desktop.dmg` (9° file caricato) NON è contenuto trascrivibile: è l'installer della versione desktop di [[Minutes]] citata nelle note 01/05/06.

## Trascrizioni

### 01 — Simone (inferito), 25/5 — consegna DMG Minutes desktop + richiesta beta-test

> Salve Carlo [STT:'Salva Danai'], oggi è la giornata di viaggio, avevo internet a singhiozzo, adesso che finalmente ho avuto una connessione un po' più stabile ti ho caricato il DMG firmato [STT:'fermato'], provalo perché effettivamente io ci ho lavorato solo in dev mode dal mio computer e quando invece lo carichi su un computer che non è dello stesso sviluppatore che ha fatto l'app potrebbe saltar fuori un po' di problemi, quindi mi stai facendo la beta tester, se vedi qualcosa che non ti torna mandami pure un video. Mentre per quanto riguarda la parte di login per autenticarti devi andare su Minutes nell'ambiente di dev, di test, quindi quello solutions e quando sei lì dentro vai in dispositivi, clicchi più, aggiungi dispositivo e o copia e incolla il link altrimenti lui dovrebbe chiederti di aprire l'app se l'hai già aperta la prima volta direttamente da Chrome o Safari e dovrebbe mandarti l'autenticazione già fatta all'interno dell'app. Non è detto che funzioni, è il caso che copia e incolli l'URL e lui si autentica, dopodiché gli dai tutti i permessi e dovrebbe funzionare tutto quanto. Nel caso magari registra lo schermo, mandami un video che così diventa anche praticamente il tutorial della prima installazione per tutti quanti perché io avendolo installato prima in ambiente di sviluppo, tutta la parte di workflow per dargli i permessi dovrei farla su un computer nuovo che non ha ancora visto l'app. Se riesci a farmi questo favore ci facciamo il tutorial a costo zero mentre che provi l'app, altrimenti se c'è qualcosa che non va hai già fatto il video per segnalarmi il bug, quindi in tutti i casi è una vittoria.

### 02 — Simone (inferito), 25/5 — rientro operativo + Eldis

> Per il resto invece ci serve fede [Federico], immagino che vi siate già sentiti, spero, altrimenti in tutti i casi io domani sera torno operativo al 100% e ci sentiamo subito mercoledì mattina nel caso per recuperare tutto quanto. Nel frattempo se hai aggiornamenti da Eldis, cose, io ogni tanto uno sguardo alle mail lo sto dando, ma se c'è qualcosa di urgente scrivimi pure che lo recupero subito.

### 03 — Federico, 27/5 — [[Crowd]]: import liste ospiti + campi obbligatori + delivery

> Allora di default, cioè il processo è che tu importi le mail. Una volta che importato una lista di mail magari anche con già nome e cognome, non serve che la gente compili nome e cognome, santi dio, se è già compilato ok; serve che, che ne so, la gente compili nuovi campi, che quindi vai ad aggiungere questi nuovi campi e la gente lì gli arricchisce ok. Manca ancora, come avevamo detto, la parte che consente di vedere i campi ma fare in modo che non si possono evitare nella pagina ok, e sono queste piccole cose qua su cui sto lavorando. Cioè se adesso loro hai capito, cioè fammi finire Carlo una volta per tutte. No bene, poi facciamo la deliver ok. Dopodiché, cioè ogni volta che loro han dubbi ti giuro mi collego io con loro e live gli aiuto a capire, a vedere, ed eventualmente se facciamo qualcosa e vedo che non funziona come dovrebbe lo correggiamo, per fare un lavoro fatto bene, perché altrimenti, cioè se mi arriva una mail così io cosa devo capire, non ci capisco niente, non ci capisco perché è scritta male, non è scritta da una persona che probabilmente anche non ha capito dei passaggi. Perdiamo solo del gran tempo, cioè non c'è poco da fare purtroppo, dato così.

### 04 — Federico, 27/5 — [[Crowd]]: strategia chiusura delivery finale

> Diamogli altri giorni piuttosto, me ne fotto, tanto cioè sono a me che non entrano i soldi. E diamogli piuttosto altri giorni poi per testare ancora, dopo che io avrò fatto diciamo quest'ultima deliver, perché sennò tanto anche quello che testano ci segnalano, se poi dopo è un qualcosa in verità su cui poi dopo io ho operato, magari c'è anche da dare una risposta… io devo andare a rispondere pure su delle robe che loro hanno testato, scritto, ma in verità non erano semplicemente ancora terminate o mancava integrazioni. Cioè inutile che vogliamo arrabbattare la chiusura finché non faccio questa delivery finale, cioè tenerli lì come delle povere bestie ha poco senso. L'obiettivo è quello di, tra virgolette, fargli capire che la lavorazione è da chiudere. Poi dopo se c'è qualcosa che ci siamo persi te lo fixo io, non c'è problema. Però così semplicemente di prude il culo loro, a me mi scarichi di lavoro perché devo guardare delle robe dove non si capisce una mazza, perdo tempo, e in più magari sono pure cose che dovevano ancora essere fissate. Gestiamolo al meglio un attimo.

### 05 — Federico, 28/5 — rinegoziazione prezzo Eye Cookies + Minutes desktop

> Ascolta, io voglio più soldi per iCookie [Eye Cookies] comunque, adesso non è finita qua, Simone adesso ride, poi mi sgriderà, ma non è finita qua, non sono per niente d'accordo. E poi anche per Minutes adesso, abbiamo fatto la versione desktop, l'ha fatta Simo [Simone], è già collegata con le Minutes online, adesso faremo anche degli enhancements, ed eventualmente c'è anche da fare l'automatch partecipanti, cose Minutes un po' smart, così diventa ancora più automatizzato, ma te devi pagare dei soldi.

### 06 — Federico, 28/5 (video) — demo Minutes desktop sulla call Eye Cookies appena fatta

> Guardalo, Sam Voisin [Sanvoisin], guarda qua che sta scrivendo tutto il report della riunione che abbiamo appena fatto, trascrizione completa con i partecipanti divisi esattamente come si chiamavano su Teams, rimappabili come si può sempre fare da qua quindi gestisci speaker e vai bla bla bla, adesso non lo faccio perché non ha senso. L'unica cosa che abbiamo dovuto fare è stato fare enrichment, quindi andare qua sopra sul "01 desktop", fare modifica minuta e dirgli chi c'era e per che cliente/commessa fosse, fine. E la nostra matitina è ancora qua, pronta per funzionare, bonus point: diventa rossa quando sta scrivendo, quando è rossa registra. Sì poi eventualmente anche lì glielo aggiungeremo direttamente nel… io infatti leggo tutto il tempo mentre andavo in call. Gli aggiungeremo sempre: di quando finisce, ti dice "ok nuova minuta, come la vuoi chiamare", mettiamo anche lì sotto direttamente la stessa porzione di UI con selezione partecipanti, al top.

### 07 — Federico, 28/5 — registrazione automatica call Eye Cookies

> Ti sei accorto di qualcosa, che ti stavo registrando da prima che tu ti dimenticassi di registrare quella riunione?

### 08 — Federico, 28/5 — setting auto-record Minutes

> Comunque salva il culo il fatto che registri in automatico, cioè di default se tu vai in impostazioni di Minutes fai impostazioni, trascrizione, e sotto c'è "chiedi conferma prima di registrare": disattivalo, e in questo modo tutte le call che tu fai in automatico lui le trascrive e te le pusha in bozza pronte per essere gestite o cancellate, poi ci fai quello che vuoi. Però non ti dimentichi mai di registrarle e non ti viene neanche l'icona che stai registrando.

## Catalogazione nel vault (§15.bis)

**Committate** (alta confidenza, contenuto auto-attribuito):
- [[20 - Projects/NoLoop/Wave 2/Minutes|Minutes]] — versione desktop (DMG), auth flow, auto-record, enrichment, roadmap automatch + task Carlo
- [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]] — note 03/04: delivery finale (campi obbligatori in pagina) + strategia chiusura test 27/5 (Log + pattern Federico)
- [[20 - Projects/NOT/Eye Cookies|Eye Cookies]] — segnale rinegoziazione prezzo al rialzo (nota 05)
- [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]] — citazione price-assertiveness Eye Cookies (nota 05) + pattern delivery-prima-del-test (note 03/04)
- [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]] — build versione desktop Minutes, consegna beta 25/5

**Flag risolti da Carlo (28/5)**: note 03/04 = **Federico**, progetto = **[[Crowd]]** (import liste ospiti + arricchimento campi custom + campi obbligatori in pagina). [[LeadMe]] escluso correttamente (importa da LinkedIn, non da mail). Batch chiuso.
