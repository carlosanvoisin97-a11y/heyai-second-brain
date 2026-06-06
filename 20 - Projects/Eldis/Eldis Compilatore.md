---
type: project
status: active
priority: p2
client: Eldis Net
product: AI Product Catalogue
created: 2026-04-30
updated: 2026-06-07
last_call_date: 2026-05-08
stakeholders: [Stefania Solidoro, Marta Garrafa, Alessandra Aprile, Giovanna Cecchi, Simone Montanari (Soolutions), Federico Saladino (Soolutions)]
---
<!-- auto-updated by cowork-sessions-index 2026-05-24 20:22 (cron-22) | source-session: local_07624f1b-4b2b-4edf-971a-1fbe04fe96e2 | source-lastActive: 2026-05-22 -->

# 📁 Eldis — Compilatore + Builder Catalogo

> **Outcome**: Compilatore automatico per Eldis basato sul prodotto interno **AI Product Catalogue** (architettura prodotto descritta in fondo a questa scheda — sezione "Architettura prodotto AI Product Catalogue") — trasformazione listini fornitori (Whirlpool, Hotpoint, Beko, Indesit, Haier, LG, Siemens, ecc.) in catalogo unificato. Modulo gemello in evoluzione: **Builder catalogo** (rielaborazione descrizioni per uso commerciale).

## Stato

- **Status**: 🟢 ATTIVO — bug TIFF risolto 28/04, fase di consolidamento commerciale + formazione Builder
- **Cliente**: Eldis Net (Stefania Solidoro + Marta Garrafa + Giovanna Cecchi + Alessandra TBD)
- **Prodotto interno**: AI Product Catalogue (architettura nel paragrafo finale; ex `40 - Resources/AI Product Catalogue.md` mergiato qui nel refactoring 6/5/2026)
- **Prossimo milestone**: **call formativa Builder catalogo — venerdì 8/5/2026, 15:30-16:30** (Carlo + Simone vs Stefania, Marta, Giovanna, Alessandra). Conferma scambiata 5/5 mattina.
- **Ultimo aggiornamento**: 2026-05-05

## ⚠️ Stato bug critici

- **Bug TIFF rendering** (28/04): ✅ **RISOLTO** lo stesso giorno da Simone Montanari. Causa: mancava la gestione di un formato di compressione specifico per i file TIFF. Fix in produzione, Simone ha approfittato per migliorare il sistema di upload (video allegato all'email del 28/04 16:58). Marta ha confermato il riconoscimento delle immagini.
  - Storia: Marta segnala 28/04 ore 09:50 (impossibile caricare TIFF dei modelli "Gruppo Beko incasso"); 8 email scambiate in giornata; chiusura entro le 18.

## 🧩 Modello commerciale (definito in call 24/04)

Tre tipologie di intervento concordate con Stefania, **da formalizzare per iscritto**:

1. **Anomalie e malfunzionamenti rispetto ai requisiti originali** → inclusi nel progetto, gestiti senza costi aggiuntivi.
2. **Supporto operativo e consulenza** → per attività che si possono svolgere autonomamente dall'interfaccia di amministrazione (es. aggiunta marchi, modifica regole, nuove codifiche) ma per le quali Eldis preferisce supporto HeyAI → proposta economica pacchetto/tariffa.
3. **Nuove funzionalità o modifiche non previste nella requisitazione iniziale** → analizzate, quotate, concordate prima dello sviluppo.

**Token AI**: confermato consuntivo quadrimestrale. Nella prossima fattura inclusi anche i costi sostenuti fino ad oggi.

## 💶 Quotazioni in elaborazione _[email interna 29/04]_

| Voce | Importo proposto | Fonte | Stato |
|---|---|---|---|
| Hosting + manutenzione | **€130/mese forfait** | Email interna 29/04 + contratto canone 17/03/2026 | ⏳ **NON ancora presentata a Stefania** _[conferma Carlo 5/5]_ — alternativa da presentare: installazione locale, zero costi ricorrenti, ma consulenza a tariffa piena in caso di problemi |
| Consulenza | **€180/h** | Email interna 29/04 | Da inserire nel documento cliente — riguarda casi "non saper usare il sistema" (≠ sistema rotto) |
| CR descrizione catalogo (Builder) | TBD — Simone sta finalizzando | Email interna 29/04 | Quotazione attesa per chiusura documento cliente |

**Workflow consegna documento** _[5/5/2026]_: il documento aggregato (hosting + consulenza + CR) lo stanno preparando Federico e Simone. Carlo è in attesa di riceverlo, poi lo commenterà direttamente con Stefania. Niente azione push lato Carlo finché non arriva.

**Distinzione chiara da comunicare al cliente** (modello concordato 27/04):
- Sistema non funziona → manutenzione (inclusa)
- Non sanno usare il sistema → consulenza (a pagamento)
- Vogliono qualcosa di nuovo → change request (da quotare)

**Hosting €130/mese — voci incluse** (prospetto da preparare con Soolutions): server, backup, ripristini, infrastruttura, riavvii, aggiornamenti.

**Documentazione e screen recording**: da preparare per ridurre la necessità di consulenza e rendere Eldis più autonoma.

## ✅ Contratti firmati _[fonte: SharePoint info/Amministrazione/Contratti]_

| Data | Nome | Tipo |
|---|---|---|
| 2025-08-08 | Contratto soluzioni AI - HeyAI per Eldis | Consulenza AI + automazione |
| 2025-08-08 | Contratto analisi strategica e comunicazione omnicanale | Servizi comunicazione digitale |
| 2026-03-17 | Eldis_contratto_canone_mensile + servizi on-demand | Canone mensile (proposto €130/mese — proposta non ancora presentata a Stefania) |

## Stakeholders

### Lato Eldis _[mappatura confermata Carlo 5/5/2026]_

#### Decisori
- [[Antonio Cecchi]] — **Amministratore Delegato Eldis**, fratello di Giovanna. Partecipa meno all'operatività ma ha il peso decisionale finale. Citato 12/02/2026 da Stefania ("anche con Antonio... abbiamo valutato che vorremmo focalizzare il progetto").
- [[Giovanna Cecchi]] — **Direttore Finanziario Eldis**, sorella di Antonio. **Molto peso decisionale**. Sponda esplicita sulla formazione Builder ("anche Giovanna insiste per fissare la data Builder", Stefania 20/04). · `giovanna.cecchi@eldisnet.it`

#### Operativi / Champion
- [[Stefania Solidoro]] — Direzione Marketing, riferimento principale del progetto, orchestratore tecnico · `stefania.solidoro@eldisnet.it` · +39 327 7770724
- [[Alessandra Aprile]] — **Capo dei commerciali Eldis**. Destinataria del calendar Builder 8/5 (Stefania 5/5). Da arricchire scheda dopo la call.
- [[Marta Garrafa]] — Ufficio Marketing, key user / testing operativo quotidiano · `marta.garrafa@eldisnet.it` · +39 06 9008 5586 int. 229

#### Fornitori esterni di Eldis
- [[Luciano (sistemista Eldis)]] — **Sistemista esterno** che lavora con Eldis (non dipendente). Responsabile sincronizzazione file sul server fisico, riferimento per Eldis Synchronizer.exe. Coinvolto da febbraio 2026.

### Lato HeyAI / fornitori
- Carlo Sanvoisin — PM, riferimento commerciale, proprietà relazione cliente
- [[Simone Montanari (Soolutions)]] — Dev lead, configurazione, fix tecnici (rapidità eccellente — bug TIFF risolto in <8h)
- [[Federico Saladino (Soolutions)]] — Project coordinator, quotazioni, requisiti
- Tokio Studio (= Simone Montanari, brand design dello stesso) — partner design

## Architettura tecnica

### Variabili d'ambiente / percorsi SMB di rete
```
TEST_ENV_SMB_MEDIA = //172.16.20.8/Archivio/DATI/Company/IMPORTLISTINI_NONTOCCARE/TEST_COMPILATORE/PDF-JPG
TEST_ENV_SMB_XLSX  = //172.16.20.8/Archivio/DATI/Company/IMPORTLISTINI_NONTOCCARE/TEST_COMPILATORE/ImportNuoviArticoli.xlsx
PROD_ENV_SMB_MEDIA = //172.16.20.8/Archivio/DATI/ImmaginiB2B
```
> Server interno Eldis: `172.16.20.8` — accesso SMB. Da TEST a PROD si cambia path della share. _Conferma Stefania 12/02/2026: PROD usa W:\\ImmaginiB2B (immagini/PDF) e W:\\Company\\IMPORTLISTINI_NONTOCCARE\\COMPILATORE (excel)._

- **ERP/gestionale Eldis = Alyante** (Gruppo TeamSystem): il catalogo unificato dal Compilatore alimenta a valle il gestionale; stock/logistica gestiti lato Alyante con forecast manuale. _[fonte: doc discovery 2025 "Struttura di Mercato, Processi & Implicazioni"; F2 ingest — PROPOSTA da confermare]_

### Flusso operativo target
```
Fornitore invia nuovo listino
         ↓
Eldis carica Excel + PDF su piattaforma AI
         ↓
Elaborazione automatica (descrizioni, categorie, RAEE)
         ↓
Review su piattaforma (con PDF affiancato)
         ↓
Export → App sync → Server fisico → B2B (sync notturna)
```

### Modifica concordata 24/04: export selettivo
L'export automatico giornaliero dell'intero catalogo NON è funzionale per il flusso Eldis. **Si passa a export manuale selettivo**:
- L'utente seleziona i prodotti, esporta
- Il sistema deposita SOLO i file corrispondenti (PDF + immagini) nella cartella di produzione
- L'export giornaliero dell'Excel resta attivo come backup
- HeyAI prepara piano di implementazione

### Limiti e regole
- Limite immagini suggerito: ~300KB, formato JPEG (definito 21/01)
- Elaborazione parallela: 50 prodotti contemporaneamente, ~1 min/prodotto
- Cancellazione prodotti NON elimina PDF/immagini (restano "non associati", riassociati al re-import)
- Codici RAEE: cambio annuale 1° febbraio. Per gestire: data validità nel passato + import importi nuovi nella sezione Regole RAEE

## 🧱 Builder catalogo (modulo gemello in evoluzione)

Modulo distinto dal Compilatore, già visto da Eldis (mail 17/03 con Marta): genera schede catalogo per uso commerciale.

**Modifiche concordate 24/04**:
- **CR descrizione catalogo**: nuovo campo "descrizione catalogo" che rielabora automaticamente la descrizione estesa tramite prompt dedicato (sintetica, commerciale). Prompt editabile dall'interfaccia, con esempi per categoria prodotto. _Quotazione attesa da Simone — opzione 3 scelta._
- **Persistenza filtri**: attualmente si resettano ad ogni navigazione → fix a carico HeyAI (anomalia, gratuito).
- **Formazione**: sessione dedicata da schedulare → fissata **8/5/2026 ore 15:30-16:30**.

**Mancanze segnalate da Stefania 17/03** (pulsante export + altra): _[conferma Carlo 5/5]_ saranno **pronte entro venerdì 8/5** in tempo per la call formativa.

## Materiali cliente (SharePoint)

📂 [Sito HeyAIxEldis · AI Solutions/AI Product Catalogue](https://heyai.sharepoint.com/sites/HeyAIxEldis/Shared%20Documents/AI%20Solutions/AI%20Product%20Catalogue)

### Documentazione
- [Requirement Log.xlsx](https://heyai.sharepoint.com/sites/HeyAIxEldis/Shared Documents/AI Solutions/AI Product Catalogue/Requirement Log/AI Product Catalogue_Requirement Log.xlsx) — registro ufficiale requisiti funzionali e tecnici (28/04)

### Regole di trasformazione dati
- Albero Classificazioni.xlsx (15/04)
- Regole Descrizioni estese.xlsx (24/04)
- REGOLE RAEE.xlsx (14/04)
- RAEE 2026.xlsx (14/04)

### Listini fornitori (validi dal 1 Aprile 2026)
- Whirlpool, Hotpoint, Beko, Indesit, Haier, LG (KRT 2026 BUILT IN), Siemens (StudioLine)
- Schede tecniche PDF: Whirlpool, Indesit, Hotpoint (gruppo Beko incasso)

### Materiali test condivisi via mail
- Marta 04/03: file import + export per debug categorizzazione
- Stefania 27/03: file di test builder
- Marta 10/04: tabella RAEE valori corretti
- Marta 07/04 + 13/04: feedback codifiche, riallineamenti famiglie B2B
- Stefania 01/04: linee guida nuovo format IG Eldis (off-topic, su Marketing/Social)

## 🔐 Credenziali compilatore _[lasciate come sono — conferma Carlo 5/5]_

> Marta: `marta.garrafa@eldisnet.it` / `eldisManager.19832`
> Stefania: `stefania.solidoro@eldisnet.it` / `eldisManager.93864`

Trasmesse via email il 22/01/2026. Carlo ha confermato il 5/5 che vanno bene così — nessuna rotazione richiesta.

## Task aperti (aggiornato 11/5/2026 post-call Builder)

### Lato HeyAI / Soolutions
- [x] ~~**#p1** Quotazione CR descrizione catalogo (Simone)~~ → ✅ chiuso 20/5 sera: **€1.800** (Simone messaggio 20/5 sera)
- [x] ~~**#p1** Confermare prezzi Hosting+manutenzione e Consulenza operativa~~ → ✅ chiuso 20/5 sera: prezzi confermati invariati (€130/mese hosting forfait + €180/h consulenza), Carlo procede con prospetto cliente
- [x] ~~**#p1** Proposta supporto operativo / pacchetto ore €180/h (Federico+Simone)~~ → ✅ descrizione consulenza operativa ricevuta da Simone 20/5 sera (prezzo da riconfermare)
- [ ] **#p1** Carlo: comporre documento aggregato (Hosting+manutenzione + Consulenza operativa + 2 evolutive + decisione Builder PDF Canva fuori scope) → condividere con Stefania (TO) + Marta/Alessandra/Giovanna (CC), CC Simone+Federico
- [x] ~~**#p1** Simone: stima prezzo 4 evolutive Builder/Compilatore richiamate in call interna 13/5~~ → ✅ chiuso 20/5 sera per le 2 evolutive che procediamo (descrizioni campi extra €1.800 + export logica semiautomatica €2.100). Le altre 2 voci (ore consulenza fatturate a parte + Builder PDF Canva) collassano: la prima diventa la voce ricorrente Consulenza operativa, la seconda è fuori scope confermato
- [x] **#p1** Soolutions: chiusura mancanze Builder (pulsante export + altra) entro 7/5 — call formativa 8/5 _[chiuso 8/5: call avvenuta, prodotto dimostrato, mancanze residue ridefinite nel nuovo elenco modifiche concordate in call]_
- [ ] **#p1** Simone: integrazione 9 modifiche light concordate in call 8/5 (inversione default listino, ordinamento originale, codice/alias off di default, prezzo promo singolo, maschera campi a livello catalogo, etichette rinominabili, marchio campo attivabile vicino al codice, persistenza filtri, varianti prezzo + testo descrittivo) — sessione team Soolutions al rientro weekend, conferma 11/5 ore 08:53 "Procedo a integrare quello che ci siamo detti in call"
- [ ] **#p1** Simone: studi di fattibilità + quotazione 6 richieste extra Builder (editor in-line descrizione + prezzo, logo brand come immagine, seconda immagine variante, catalogo immagini alternative, immagine in testata e copertina dedicata, casistiche SET / layout multi-cella)
- [ ] **#p2** Piano implementazione export selettivo manuale
- [ ] **#p2** Fix persistenza filtri Builder (anomalia gratuita)
- [ ] **#p3** Documentazione/screen recording per autonomia cliente
- [ ] **#p2** Fattura prossima: includere consuntivo token AI fino a oggi
- [ ] **#p2** Verifica codice gamma UnicTable post invio specifiche da Marta
- [x] **#p1** Simone: agenda + conduzione call formativa Builder 8/5 _[chiuso — call avvenuta 8/5 ore 15:30-16:30]_

### Lato Carlo
- [x] ~~**#p1** Sentire Marta direttamente~~ → ✅ chiuso 20/5 sera: Simone l'ha già sentita nel frattempo (conferma Carlo)
- [-] ~~Ricevere documento aggregato da Federico+Simone, poi commentarlo con Stefania~~ → modificato 20/5 sera: **lo compone Carlo** assemblando i pezzi ricevuti (vedi task Lato HeyAI/Soolutions), non Soolutions
- [ ] Presentare a Stefania la proposta canone €130/mese (mai presentata finora)
- [ ] Invio email recap call 8/5 a Stefania+Marta+Alessandra+Giovanna (CC Simone+Federico) — bozza pronta in chat Cowork 11/5
- [ ] Verificare con Simone segnalazioni Compilatore inviate da Marta 11/5 (RAEE Unik + marchio Unik) — fuori scope email recap call Builder

### Lato Eldis
- [ ] Marta: invio specifiche codice gamma UnicTable
- [ ] Marta: test import senza barcode (tavoli, sedie)
- [ ] Marta: feedback complessivo entro 6/5 _[scaduto, da triagiare]_
- [x] Stefania: invio calendar call 8/5 ore 15:30-16:30 (Carlo, Simone, Marta, Giovanna Cecchi, Alessandra Aprile) _[chiuso — calendar inviato 5/5 sera, call svolta]_
- [ ] **#p1** Eldis (Marta/team Marketing): invio via mail a Simone della lista campi della scheda prodotto da esporre/escludere di default + lista campi da controllare a livello di intero catalogo
- [x] Marta: invio esempi catalogo PDF a Simone per validare casistiche grafiche (varianti, layout, copertine, SET) _[chiuso — Marta ha inviato mail "Esempi cataloghi per builder + segnalazioni compilatore" 11/5 ore 09:54 con allegati]_
- [x] Marta: condivisione registrazione Teams della call 8/5 a Carlo + Simone _[chiuso — Marta ha caricato il video su SharePoint percorso `HeyAi\HeyAI x Eldis - AI Solutions\AI Product Catalogue`, 11/5 ore 15:27]_

## Decisioni storiche

- 21/01/2026 — **Delivery 2 fasi**: Phase 1 = Core funzionante, Phase 2 = enhancement immagini (nuova offer separata)
- 21/01/2026 — **Sincronizzazione file via app dedicata** Eldis (server interno), NON SharePoint/OneDrive
- 21/01/2026 — Modifica live "Unit Key" → "Libera Installazione" (tavoli)
- 22/01/2026 — Call tecnica con Luciano per integrazione app sync server
- 17/03/2026 — Contratto canone mensile firmato (proposto €130/mese, mai presentato a Stefania)
- 24/04/2026 — Modello commerciale 3 tipologie + export selettivo manuale + CR descrizione catalogo Builder
- 28/04/2026 — Bug TIFF risolto + miglioramento sistema upload
- 5/5/2026 — Call formativa Builder fissata per 8/5 15:30-16:30
- 8/5/2026 — **Call formativa Builder svolta**: 9 modifiche light concordate (incluse, no extra) + 6 richieste extra avviate come studi di fattibilità per quotazione successiva. Cliente applica spontaneamente il modello commerciale 3 tipologie (cose base rientrano, extra si quotano).

## 💬 Citazioni testuali da preservare

> "questa cosa è molto ****"
> — **Cliente Eldis** (call demo Compilatore, 22/01/2026) — feedback positivo su concept

> "anche Giovanna insiste per fissare la data Builder"
> — Stefania Solidoro, email 20/04/2026 — segnale di pressione interna Eldis sulla formazione

> "Il canone non è ancora stato presentato a Stefania"
> — Carlo, conferma 5/5/2026 (correzione vs precedente "non validato": è proprio non ancora messo davanti al cliente)

> "Da noi quando sono state implementate le cose diciamo base, tipo il discorso dei filtri, anche le varianti, cioè alcune cose sono rientrano diciamo. E per tutto ciò che è diciamo è stata una richiesta extra. Ci dirai, fattibilità intanto."
> — **Cliente Eldis** (chiusura call formativa Builder, 8/5/2026) — applicazione spontanea del modello commerciale 3 tipologie concordato 24/04. Segnale **forte** che il framework "incluso vs extra" è interiorizzato dal cliente. Carlo: "Esatto, assolutamente."

> "Procedo a integrare quello che ci siamo detti in call"
> — Simone Montanari (Soolutions), email a Marta 11/5/2026 ore 08:53 — conferma presa in carico delle 9 modifiche light concordate in call

## Pattern operativi (Stefania / Eldis)

- **Stefania orchestratore tecnico**: organizza call con Luciano (sistemista) per sync file, riallinea Marta e Simone in caso di tensione (es. tema RAEE 31/03 "credo che la cosa migliore sia che vi colleghiate un momento su teams")
- **Eldis = cliente attivo storico**: 3 contratti firmati, primo dell'08/08/2025, canone in evoluzione
- **Marta = utente operativo motore**: porta avanti i test su listini reali (Whirlpool, Hotpoint, Beko, Indesit, Haier, LG, Siemens, Bosch, UnicTable), segnala bug con velocità (mail 28/04 ore 07:50 → bug TIFF risolto entro le 18)
- **Modifica live in call accettata**: es. tavolo "Unit Key" → "Libera Installazione" cambiato live in demo (22/01) e accettato senza objections
- **Stefania pragmatica con orari ristretti**: "non domani pomeriggio (sono in permesso)... oggi quando vuoi" (mail 23/04). Reattiva sui tempi.
- **Cliente in periodo Eurocucina (settimana 20/04)**: "anche se questa settimana siamo fuori per Eurocucina ti volevo confermare che abbiamo visto internamente il Builder venerdì scorso..."

## Eventi calendario

- 21/01/2026 — `Eldis | Consegna Compilatore AI & Test` (organizzato da Carlo)
- 22/01/2026 — Call tecnica con Luciano per app Synchronizer
- 27/01/2026 — `Eldis | Approfondimento Tecnico - App Synchronizer e server Eldis`
- 24/04/2026 — `Eldis | Allineamento Compilatore` (organizzato da Carlo, attendees: Stefania, Soolutions, Tokio)
- **08/05/2026 — `Confronto-Formazione su Builder Catalogo`** ore 15:30-16:30 ✅ svolta (organizzato da Stefania, attendees: Carlo, Simone Montanari, Marta, Alessandra, Giovanna). Registrazione caricata da Marta 11/5 su SharePoint percorso `HeyAi\HeyAI x Eldis - AI Solutions\AI Product Catalogue`

## Prep doc / Email correlate (in `00 - Inbox/`)

- [[50 - Archive/Inbox/2026-05/2026-05-05 - Email a Stefania - Conferma call Builder 8-5|2026-05-05 - Email a Stefania Builder]] — bozza email conferma call formativa Builder dell'8/5

## Sessioni Cowork correlate

- 2026-05-22 — `local_07624f1b` — Eldis services and evolutive quotes: audit indipendente email + PDF `HeyAI_Eldis_Servizi_e_Evolutive_20-5-26.pdf`; **chiarimento policy zero-markup su evolutive Eldis** (Carlo verbatim: *"su questa specifica quotazione non applico markup"*) — €1.800 + €2.100 = prezzo cliente = costo Soolutions passato as-is, eccezione esplicita alla regola §2.2 CLAUDE.md 60%; data emissione PDF NON necessaria per quotazione di questa entità (Carlo verbatim: *"non serve la data di emissione del PDF per una cosa così banale"*); bullet evolutive riformulato + terminologia "consuntivo→tariffa oraria" uniformata email↔PDF; oggetto "Eldis × HeyAI — Servizi continuativi e attività evolutive"; Builder PDF Canva escluso dal perimetro con motivazione effort-vs-valore. → [[80 - Sources/Cowork Sessions/2026-05-24 - Indice sessioni#Sessione 3 — `local_07624f1b-4b2b-4edf-971a-1fbe04fe96e2` — Eldis services and evolutive quotes]]
- 2026-05-11 — `local_2ca67c8d` — Write Eldis client meeting recap email: vault commit completo §15.bis post call formativa Builder 8/5 (CLAUDE.md §6/§7/§14 + 4 schede persona toccate + email recap consegnata) → [[2026-05-11 - Indice sessioni#Sessione 7 — Write Eldis client meeting recap email (vault commit post call formativa Builder 8/5)]]
- 2026-05-11 — `local_d7e9c71f` — Request access to call recording: bozza email a Marta Garrafa per richiesta permessi/file trascrizione call Eldis (call 8/5) → [[2026-05-11 - Indice sessioni#Sessione 4 — Request access to call recording and transcript (Marta Garrafa Eldis)]]
- 2026-05-21 — `local_832269f2` — Process call transcript Federico+Simone: prezzi Eldis evolutive consolidati (**€1.800** descrizioni con campi extra + **€2.100** export logica semiautomatica) + Builder PDF Canva fuori scope con motivazione formale (assorbito in §Log 20/5 sera già live). Mancanti: prezzi ricorrenti Consulenza operativa + Hosting+manutenzione (storico email 29/04 = €130/mese + €180/h da riconfermare). Alert: **Marta tace lato Soolutions** ("Marta non ha più risposto, tu l'hai sentita?") — da contattare direttamente. → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 7 — `local_832269f2-036d-4b0f-89f6-b804bb1586d2` — Process call transcript with Federico and Simone]]

## Log

### 2026-05-22 — Audit pre-invio email + PDF + chiarimento policy markup
- **Audit indipendente sull'email accompagnamento e sul PDF `HeyAI_Eldis_Servizi_e_Evolutive_20-5-26.pdf`** in sessione Cowork. Email letta integralmente, PDF rivisto pagina per pagina.
- **Chiarimento markup evolutive Eldis (Carlo conferma 22/5)**: su questa quotazione **NON viene applicato markup HeyAI** sui prezzi evolutive — €1.800 (descrizioni con campi extra) e €2.100 (export semiautomatica) sono **prezzi cliente = costo Soolutions** passato as-is. Eccezione esplicita rispetto alla regola pricing 60% di §2.2 CLAUDE.md / Master Facts, decisa per le evolutive di mantenimento su prodotto già in produzione. Le voci ricorrenti (€130/mese hosting + €180/h consulenza) restano con la dinamica pricing standard. **Conseguenza per il vault**: la regola pricing 60% NON è violata in questo PDF perché si tratta di eccezione consapevole, non di errore. Ambiguità del Log 20/5 sera ("prezzi ricevuti da Simone") chiusa: prezzi cliente diretti.
- **Data di emissione sul PDF**: non aggiunta — Carlo conferma 22/5 che per un documento "banale" di servizi continuativi + 2 evolutive non serve datare esplicitamente; la validità 30 giorni si applica orientativamente alla data di invio email.
- **Correzioni email accolte (3 su 6 flag dell'audit)**:
  - Bullet n°3 riformulato: *"Attività evolutive in valutazione (descrizioni con campi extra ed export semiautomatico)"* (era *"Evolutive applicativo per cui è stata richiesta quotazione"*)
  - Terminologia uniformata col PDF: *"Consulenza operativa a tariffa oraria"* (era *"a consuntivo"*)
  - Oggetto email suggerito a Carlo per Outlook: *"Eldis × HeyAI — Servizi continuativi e attività evolutive"*
- **Riservatezza fornitori — passaggio**: ✅ nessun nome fornitore (Soolutions/Federico/Simone/Tokio/Canva) né in email né in PDF. Layout PDF skill-compliant verificato.
- **Stato invio**: bozza email corretta consegnata a Carlo in sessione, **invio ancora da fare** (TO Stefania + CC Marta/Alessandra/Giovanna/Simone/Federico atteso).

### 2026-05-20 sera — Messaggio Simone: voci di dettaglio evolutive + descrizioni + alert Marta
- **Simone (Soolutions) manda a Carlo le voci di dettaglio richieste in call pomeriggio**. Contenuto:
  - **Evolutive con prezzo**: (i) **Descrizioni con campi extra €1.800** — adeguamento DB+backend+frontend per nuovo campo descrittivo prodotto pensato per affiancare alla descrizione tecnica una versione più leggibile e adatta alla consultazione del catalogo; la generazione avviene a partire dalle descrizioni AI già presenti tramite system prompt unico con esempi/riferimenti per contenere effort. (ii) **Export con nuova logica semiautomatica €2.100** — revisione del bridge di export per consentire export parziali su selezione di prodotti oltre all'export completo della libreria; export parziale produce file Excel dedicato + cartella organizzata con file multimediali associati, utile per inserimento progressivo nel catalogo B2B.
  - **Builder PDF stile Canva confermato fuori scope**: costo di sviluppo troppo alto rispetto al valore effettivo per il cliente, non conveniente nel perimetro attuale.
  - **Descrizioni voci ricorrenti SENZA prezzi**: (a) **Consulenza operativa applicativo** — supporto operativo all'interno dell'applicativo per attività eseguibili dalla piattaforma e potenzialmente gestibili in autonomia dal cliente ma per cui viene richiesto affiancamento diretto; include la gestione di anomalie bloccanti durante l'attività qualora impediscano il completamento di funzioni già previste e incluse nel perimetro. (b) **Hosting e manutenzione infrastruttura** — mantenimento dell'infrastruttura applicativa comprensivo di hosting, backup automatici, aggiornamenti di sicurezza, gestione vulnerabilità, monitoraggio tecnico e supporto in caso di malfunzionamenti, disservizi o necessità di ripristino.
- **✅ Prezzi voci ricorrenti confermati da Carlo 20/5 sera** (invariati rispetto a email interna 29/04):
  - **Hosting + manutenzione: €130/mese forfait**. Include: server, backup, ripristini, infrastruttura, riavvii, aggiornamenti — tutto ciò che riguarda funzionamento del sistema. **Alternativa da proporre al cliente**: installazione locale, zero costi ricorrenti, ma consulenza a tariffa piena in caso di problemi (cliente sceglie)
  - **Consulenza: €180/h**. Per "non saper usare il sistema" (NON per sistema che non funziona — quella resta inclusa nell'hosting). Add: documentazione + screen recording da preparare per rendere il cliente più autonomo e ridurre il monte ore di consulenza necessario
- **✅ Scambio Marta**: Simone ha sentito Marta nel frattempo (conferma Carlo 20/5 sera) → alert "Marta non risponde" chiuso, nessuna escalation Carlo necessaria.
- **✅ Deliverable cliente prodotto 20/5 sera (v2 con correzioni Carlo)**: [HeyAI_Eldis_Servizi_e_Evolutive_20-5-26.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Eldis/HeyAI_Eldis_Servizi_e_Evolutive_20-5-26.docx). Struttura skill-compliant `investment-proposal-drafting`: 5 sezioni (Oggetto · Servizi Continuativi · Attività Evolutive · Modalità di Pagamento · Condizioni Generali), 3 tabelle (callout framework commerciale 3 tipologie + callout distinzione 3 perimetri bug/hosting/consulenza + tabella condizioni generali 6 righe), header HeyAI + footer dati legali completi, Aptos 11pt body con override inline. Numeri: €130/mese hosting + €180/h consulenza + €1.800 evolutiva descrizioni + €2.100 evolutiva export + 30 giorni validità. **Builder PDF Canva intenzionalmente NON menzionato nel documento** (decisione Carlo): comunicazione dell'esclusione gestita nell'email di accompagnamento.
  - **Correzioni v1→v2 richieste da Carlo (20/5 sera)**: (a) titolo da "Prospetto..." a "Servizi continuativi e attività evolutive" (Carlo preferisce no "prospetto"); (b) §1 Oggetto compresso a una riga (era macchinoso); (c) callout Framework commerciale riformulato con le 3 tipologie corrette del modello 27/4 — i bug NON sono "manutenzione hosting" ma rientrano nel perimetro originale del progetto senza addebito; (d) §2.2 riformulazione frase anomalie bloccanti (non è la consulenza che "copre i bug", è che durante un affiancamento un'anomalia che blocca l'attività viene gestita contestualmente senza addebito separato); (e) callout Distinzione riformulato in "tre perimetri" (bug / hosting infrastruttura / consulenza utilizzo).
  - **File v1 obsoleto** (`HeyAI_Eldis_Prospetto_Servizi_e_Evolutive_20-5-26.docx`) da rimuovere manualmente dal vault — rimozione automatica fallita per permessi.
  - Audit pre-invio passato: zero "Prospetto", zero "Canva", zero nomi fornitori, zero nomi+cognome interni HeyAI, tutti numeri verificati, callout 3+3 perimetri coerenti. **NON ANCORA INVIATO** — bozza email accompagnamento prodotta in pari data per Stefania (TO) + Marta/Alessandra/Giovanna (CC) + Simone/Federico (CC).

### 2026-05-20 (call interna HeyAI+Soolutions — fix Marta + PDF Canva scartato + voci quotazioni)
- **Stato fix Marta (Compilatore)**: Carlo chiude la riga con un *"Marta te la sei gestita te"* a Simone, che conferma → Simone ha già gestito le segnalazioni Compilatore Marta dell'11/5 (RAEE Unik + marchio Unik). Niente carry-over residuo lato cliente.
- **PDF stile Canva (Builder Catalogo evolutive) → SCARTATA definitivamente**. Carlo solleva l'idea: *"sarebbe da fare una roba del genere per i grafici che lavorano con InDesign"*. Simone+Federico bocciano per due ragioni: (a) gli LLM non capiscono bene lo stile ed è controproducente farglielo gestire ("ti inganna il mercato perché fai credere che il modello sia più intelligente, ma è il wrapper che è fatto bene"); (b) **filosofia "tutto in casa"**: Federico ribadisce *"noi caghiamo in testa qualsiasi soluzione esterna, le facciamo tutte in casa se servono. No Ride AI, no Canva, no un cazzo, tutto crudo si fa da zero"*. **Pattern strutturale**: Soolutions evita dipendenze esterne — applicabile ad altri progetti dove emergano scelte similari.
- **Implicazione tecnica per la quotazione del Builder PDF evolutiva**: la stima Simone in call 13/5 (*"viene almeno 15, €10-15K"*) resta valida MA si fa in casa, senza wrapper Canva-like esterni. Il numero finale sarà confermato quando Simone consolida la quotazione del set evolutive (4 item: CR descrizioni campi extra B2B, export bridge semiautomatico, ore consulenza, PDF stile Canva).
- **Voci dettagliate nelle quotazioni consulenza**: Carlo ribadisce a Soolutions una regola applicabile sia per Eldis sia per Crowd (personalizzazione reply-to): *"quando mi mandate una quotazione su un servizio di consulenza, metteteci le voci dentro, così almeno io riesco a fargli capire il valore della vostra consulenza"*. Federico+Simone confermano. **Da applicare**: quotazione consulenza DTO/CR per Eldis (compilatore + builder), Crowd personalizzazione mittenti, e qualsiasi futura quotazione consulenza.
- **Documento aggregato Eldis (Federico+Simone → Carlo → Stefania)**: ancora pendente. Non discusso esplicitamente in questa call, ma l'arrivo dei pezzi (CR descrizione catalogo + studi di fattibilità sui 6 extra Builder + quotazione delle 4 evolutive di call 13/5) si chiude man mano. Carlo continua a essere in attesa di ricevere il documento aggregato per commentarlo con Stefania.

### 2026-05-13
- **Call interna HeyAI+Soolutions** (13:32-14:35). Discussione operativa Eldis:
  - **4 evolutive da quotare**, ricapitolate in call: (i) CR descrizioni con campi extra B2B, (ii) export con la nuova logica semiautomatica / nuovo bridge (loro hanno requisitato male inizialmente e ora vogliono cambiarlo), (iii) ore consulenza già smarcate sui task settimanali (settimana scorsa fatta, questa quasi), (iv) builder PDF stile Canva — stima Simone in call **€10-15K** ("viene almeno 15"), da confermare nel numero finale.
  - **Builder PDF stile Canva**: Carlo ha ribadito esplicitamente che è una **evolutiva NON inclusa nel progetto originario**. Citazione: *"lo sanno perfettamente che non è così, c'abbiamo requirement log apposta"*. Se Eldis prova a forzarla come "inclusa", riapriremo il requirement log punto per punto.
  - **Filosofia di pricing Soolutions su Eldis** ribadita da Federico in call: le aggiuntine si pacchettizzano sempre come bundle (no voci separate). Citazione Federico: *"le aggiuntine cerchiamo sempre di paccarle assieme, no fare dei pack [...] mettile tutte assieme"*.
  - Simone gira a Carlo i prezzi consolidati così possiamo portarli a Stefania nel documento aggregato.

### 2026-05-11
- Marta condivide a Simone (e CC) la registrazione Teams della call 8/5 (mail "Registrazione call 08/11/2026" ore 07:55)
- Marta invia a Simone esempi cataloghi PDF + segnalazioni Compilatore su RAEE e marchio Unik (mail "Esempi cataloghi per builder + segnalazioni compilatore" ore 09:54, con allegati): "ho aggiornato massivamente il raee per tutti i codici" + altra segnalazione Unik
- Simone conferma a Marta presa in carico: "Procedo a integrare quello che ci siamo detti in call" (mail ore 08:53)
- Carlo segnala a Marta problema permessi accesso registrazione Teams (mail ore 14:51)
- Marta ricarica il video su SharePoint percorso `HeyAi\HeyAI x Eldis - AI Solutions\AI Product Catalogue` (mail ore 15:27)
- Sessione Cowork con Carlo per audit trascrizione call + composizione email recap cliente (bozza pronta, invio TO: Stefania+Marta+Alessandra+Giovanna, CC: Simone+Federico)

### 2026-05-08
- **Call formativa Builder catalogo** svolta 15:30-16:30 (organizzata da Stefania, presenti Carlo, Simone Montanari, Marta, Alessandra, Giovanna)
- Format: demo live guidata da Simone, creazione catalogo "demo prova p uno" con listino Bosch test, intervento attivo cliente con domande puntuali su casi reali (catalogo multibrand frigoriferi, varianti colore, copertine, SET pacchetti prodotti)
- **9 modifiche concordate come incluse** (Simone le porta a casa al rientro weekend, no quotazione separata):
  1. Comportamento default invertito: con listino presente, mostra solo listino prezzi; il resto si richiama disattivando la visualizzazione listino
  2. Aggiunta opzione "ordine originale del listino" tra le opzioni di ordinamento auto-popola
  3. Codice e alias disabilitati di default tra i campi visibili della scheda prodotto
  4. Prezzo promo singolo (senza listino contemporaneo) mostrato senza listino barrato; con entrambi presenti, listino barrato + promo
  5. Nuova maschera per impostare i campi visibili/non visibili a livello di intero catalogo (non più prodotto per prodotto)
  6. Etichetta dei campi (es. "Descrizione AI") rinominabile o eliminabile nell'export
  7. Marchio aggiunto tra i campi attivabili, posizionato vicino al codice articolo allineato a destra
  8. Persistenza filtri sulla pagina di lavoro (già in coda con Marta)
  9. Sulle varianti: aggiunta del prezzo + campo testo descrittivo opzionale (es. "versione 60 cm")
- **6 richieste extra avviate come studi di fattibilità** (Simone tornerà con riscontro + quotazione separata):
  1. Editor in-line di descrizione e prezzo direttamente sul catalogo (icona matita, no re-import Excel) — Simone: "ci facciamo un piccolo studio a riguardo". Editabili solo descrizione e prezzo, esclusi codice/alias che modificherebbero il DB
  2. Logo del brand come immagine tra i campi prodotto (in aggiunta al nome testuale)
  3. Seconda immagine sulla variante (utile per varianti colore, leggermente sovrapposta laterale)
  4. Catalogo di immagini alternative per sostituire al volo l'immagine principale del prodotto
  5. Immagine in testata/intestazione (logo cliente o fornitore) + layout dedicato per pagina di copertina (1x1 fullscreen), con esclusione di intestazione e numerazione su prima e ultima pagina
  6. Casistiche SET / pacchetti prodotti e layout multi-cella personalizzati — Simone studia sui PDF di esempio inviati da Marta
- **Azioni Eldis emerse dalla call**:
  - Invio a Simone via mail della lista campi della scheda prodotto da esporre/escludere di default + lista campi da controllare a livello catalogo
  - Invio a Simone di esempi catalogo in PDF per validare casistiche grafiche → chiuso 11/5 mattina da Marta
  - Condivisione registrazione Teams → chiusa 11/5 mattina da Marta
- **Aggancio commerciale**: cliente cita esplicitamente in chiusura call "dobbiamo ricevere, come abbiamo concordato con Carlo, l'offerta per il fatto di andare a vedere la descrizione per il catalogo diversa da quella che è la versione sintetica" → conferma attesa della CR descrizione catalogo (parte del documento aggregato in fase di finalizzazione da Federico+Simone)
- **Pattern emerso**: cliente Eldis applica spontaneamente il modello commerciale "incluso vs extra" (chiusura call: "alcune rientrano… per ciò che è richiesta extra ci dirai fattibilità") → framework concordato 24/04 interiorizzato senza necessità di ricorrente esplicitazione lato Carlo
- **Bug emerso live**: creazione catalogo nuovo che mostra articoli del precedente import — Simone riconosce in call "quello sarà un bug, adesso ve li cancello tutti"; presa in carico interna Soolutions, non sollevato come change request al cliente

### 2026-05-05
- Stefania conferma data call formativa Builder catalogo (venerdì 8/5 14:30-16:30 max)
- Carlo risponde alle 14:52 confermando 15:30-16:30 (slot di lui + Simone)
- Calendar atteso da Stefania, partecipanti: Carlo, Simone, Marta, Giovanna Cecchi, Alessandra
- Aggiornamento scheda: bug TIFF marcato risolto, modello commerciale documentato, persone Eldis aggiornate

### 2026-04-29
- Carlo invia recap interno a Federico+Simone con proposte economiche da formalizzare:
  - Hosting €130/mese forfait
  - Consulenza €180/h
  - CR descrizione catalogo (TBD)
- Decisione: documentazione + screen recording per ridurre consulenza
- Distinzione esplicita: sistema rotto / non saper usare / change request

### 2026-04-28
- Marta segnala bug TIFF non riconosciute (07:50)
- Simone identifica refuso form upload (10:33), aggiornamento piattaforma
- 8 scambi nel corso della giornata
- 16:36: Simone chiede TIFF a Marta per debug locale
- 16:54: Marta indica percorso SharePoint (HeyAi\HeyAI x Eldis - AI Solutions\AI Product Catalogue\Materiali Cliente\File import\TEST PER AI CON LISTINI - SCHEDE PDF - IMMAGINI\Gruppo Beko incasso\Foto Beko)
- 16:58: Simone risolve — mancava gestione formato compressione specifico, miglioramento sistema upload incluso, video allegato

### 2026-04-27
- Carlo invia recap completo interno a Federico+Simone su tutti i progetti (Eldis, Futuritaly, Achipoint, Crowd, Minutes, Venue Finder, NOT, Wave 2 NoLoop)
- Lista dettagliata sviluppi per applicativo

### 2026-04-24
- Sessione allineamento `Eldis | Allineamento Compilatore` (10:30-11:00 Teams)
- Chat Teams: scambio variabili d'ambiente con Stefania (Eldis) e Simone Montanari (Soolutions)
- Carlo invia recap della call alle 22:43 con MODALITÀ OPERATIVE, COMPILATORE, GESTIONE FILE, BUILDER CATALOGO, PROSSIMI PASSI
- Vedi minuta in [[50 - Archive/Meetings/2026/2026-04-24 - Eldis Allineamento Compilatore|Eldis Allineamento Compilatore 24/04]]

### 2026-04-23
- Carlo organizza il calendar `Eldis | Allineamento Compilatore` per il 24/04
- Stefania conferma OK ma con vincolo: "non domani pomeriggio (sono in permesso)"
- Stefania (20/04 ricevuta 23/04 mattina): vuole fissare data Builder formazione, "anche Giovanna insiste"

### 2026-04-09 → 2026-04-15
- Tema RAEE 2026: blocco trascinato per ~10gg, risolto 9-10/04 con call Marta/Simone, importi RAEE corretti caricati
- Marta 15/04: aggiornamenti codifiche UNIK TABLE (cambio Famiglia per visibilità B2B vs mail di novembre 2025)

### 2026-03-17 → 2026-03-31
- Stefania segnala 2 mancanze sul Builder catalogo vs analisi (17/03)
- Stefania 27/03: file con cui vorremmo fare i test del builder (allegato)
- Loop "punto su Raee 2026" 31/03 — incomprensione di fondo Marta/Simone, Stefania orchestra

### 2026-02-03 → 2026-02-24
- Setup test compilatore: Stefania conferma cartella TEST_COMPILATORE pronta, Luciano lavora alla sync (5-16/02)
- Verbale call dev 7/2/2026 (vedi [[80 - Sources/Claude Chats/Export 2026-04-30/Call con gli sviluppatori]])
- Stefania 12/02: "considerazioni sulla nuova proposta" — apprezzamento generale, vorrebbero focalizzare il progetto (TBD su quale aspetto)
- Stefania 20/02: "la nuova proposta commerciale è stata da tutti noi molto apprezzata"

### 2026-01-21 → 2026-01-27
- 21/01: Consegna ufficiale Compilatore AI (vedi [[80 - Sources/Claude Chats/Export 2026-04-30/Analisi transcript call cliente_ punti aperti e next steps/artifacts/Minuta_Eldis_21gen2026_v2|minuta v2]])
- 22/01: Call tecnica con Luciano programmata
- 23/01: Calendar approfondimento tecnico App Synchronizer
- 27/01: Sessione approfondimento tecnico app Synchronizer + server Eldis

### Pre-21/01/2026
- 08/08/2025: Firma 2 contratti HeyAI ↔ Eldis (soluzioni AI + analisi strategica e comunicazione omnicanale)

## Open questions

### Risolte 5/5/2026 _[conferma Carlo]_
- ~~**#E1** Giovanna Cecchi~~ → **Direttore Finanziario Eldis**, sorella di Antonio Cecchi (AD), molto peso decisionale
- ~~**#E2** Alessandra~~ → **Alessandra Aprile, Capo dei commerciali Eldis**
- ~~**#E3** Antonio~~ → **Antonio Cecchi, Amministratore Delegato Eldis**, fratello di Giovanna, partecipa meno all'operatività
- ~~**#E4** Luciano~~ → **sistemista esterno** (non dipendente Eldis); scheda dedicata creata
- ~~**#E5** Canone €130~~ → **Mai presentato a Stefania**, da formalizzare nel documento aggregato in arrivo da Federico+Simone
- ~~**#E6** Antonio≠Antonio Cichello~~ → **Confermato**: Antonio Cecchi (Eldis AD) ≠ Antonio Cichello (NoLoop Producer Director)
- ~~**#E7** Mancanze Builder 17/03~~ → **In chiusura per 8/5** (Soolutions le porta in tempo per la call formativa)
- ~~**#E8** Klavyio/comunicazione omnicanale~~ → **Fuori scope**: gestita da Andrea Pazienza, non interessa il PM principale (Carlo). Da non tracciare in questa scheda.

### Aperte
- **#E9** Stato call dev 7/2/2026: aggiornamento puntuale post export selettivo + CR descrizione catalogo
- **#E10** Bosch / Siemens (StudioLine): listini concretamente arrivati e testati? Erano nei prossimi passi 21/01

## 📚 Architettura prodotto AI Product Catalogue (mergiato 6/5/2026)

> Sezione mergiata da `40 - Resources/AI Product Catalogue.md` (eliminato il 6/5/2026): il prodotto interno HeyAI "AI Product Catalogue" oggi ha una sola implementazione cliente, questa scheda Eldis. Se in futuro vendiamo il prodotto a un secondo cliente, ricreeremo una scheda prodotto astratta in `40 - Resources/`.

### Documentazione SharePoint

- 📂 Root: `HeyAI / sites / HeyAIxEldis / Shared Documents / AI Solutions / AI Product Catalogue`
- 📊 Requirement Log centrale (xlsx)

### Componenti del prodotto

**Regole di trasformazione dati:**
- Albero Classificazioni
- Regole Descrizioni estese
- Regole RAEE (rifiuti elettronici)

**Input supportati:**
- Excel listini fornitori (Whirlpool, Hotpoint, Beko, Indesit, Haier, LG, Siemens, Unik Table)
- PDF schede tecniche prodotto
- Immagini prodotto

**Output:**
- Catalogo prodotti unificato e normalizzato
- Pubblicazione su share SMB cliente

### Posizionamento HeyAI

Parte della suite [[30 - Areas/Area - AI Solutions (Prodotti Interni)|AI Solutions]] di HeyAI. Catalogo aggregato dei prodotti interni mantenuto in quell'Area.
