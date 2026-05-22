---
type: index
date: 2026-05-12
created: 2026-05-12
updated: 2026-05-12
session_count: 6
---
<!-- auto-updated by cowork-sessions-index 2026-05-12 20:30 (cron-22 anticipato) | source-session: local_883d8baa-1513-452b-958b-b9f4feebc41b -->

# Indice sessioni Cowork — 2026-05-12

> Indicizzazione automatica del task `cowork-sessions-index` (cron-22 anticipato 20:30 CEST, finestra naturale 11/5 ~20:30 → 12/5 ~20:30).
> Sessioni ordinate ascending per `lastActiveAt`. **6 sessioni utente indicizzate** + 6 scheduled task filtrati (3× PM digest mattutino · 1× Weekly digest · 1× Vault link checker · 1× Cowork sessions index — questo run · 1× scheduled `crm-velocity` simulato · 1× scheduled `weekly-review-interactive` simulato).
> Le sessioni di questa giornata sono **molto produttive**: lancio dei 2 nuovi scheduled task post-ricerca PKM (CRM velocity + Weekly Review interattivo), Framework strategico per il pitch finale Angelini Academy (~11K parole), prompt PowerPoint Roadmap 2026, test Venue Finder con 9 bug catturati per Federico+Simone, e — soprattutto — recap della sessione finale Crowd con David Fasulo (driver del saldo Wave 1 entro fine maggio).
> Tutte le sessioni hanno fatto **vault commit live** nelle schede di pertinenza (§15 CLAUDE.md). Il task notturno (questo) si limita a 3 cose: (a) creare questo indice giornaliero, (b) propagare back-link `## Sessioni Cowork correlate` sulle schede toccate, (c) checkbox reconciliation pass sulle schede.

## Sessione 1 — Framework strategico Angelini Academy pitch finale

- **ID**: `local_14deefb9-9b28-4165-b31b-f2326aa7ff98`
- **Topic**: Costruzione del framework strategico completo per la proposta pitch finale gara Angelini Academy (deadline cliente 31/5/2026, 3 settimane post Q&A 8/5).
- **Progetti**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone**: [[60 - People/Elena Chiti|Elena Chiti]], [[60 - People/Caterina Caboni|Caterina Caboni]], [[60 - People/Marco Morbidelli|Marco Morbidelli]], [[60 - People/Daniele Caporale|Daniele Caporale]], [[60 - People/Lavinia Ferrari|Lavinia Ferrari]], [[60 - People/Michele Mattucci|Michele Mattucci]]
- **Decisioni**:
  - Adottato tono "fondazione culturale-scientifica europea con propensione mecenatistica" come voice di partenza (Fondazione Agnelli, Fondazione Cariplo, Royal Society UK, MAXXI, UCL postgraduate research). Non business school commerciale (no SDA Bocconi/INSEAD/LBS).
  - Struttura pitch in 7 pillar + moduli operativi (quotazione, governance, allocazione risorse, 6 scenari di rischio citati ma non ancora dimensionati).
  - Roadmap a 2 fasi modulari: Fase 1 entro giugno (Festival Trento), Fase 2 luglio-novembre post-Trento — 7 dipendenze critiche identificate.
  - 4 cluster operativi confermati (giovani talenti / HR buyer corporate / ricercatori e innovatori / media e istituzioni), volutamente espandibili dopo clustering FuturItaly 12/5 sera.
  - O5 emergente "ricerca pedagogica/edTech" aggiunto ai 3 obiettivi cliente del brief originale, post-call 11/5.
- **Numeri/fatti nuovi**: trend di mercato citati al §1.2 — corporate learning EU/IT €111B→€271B, executive education $10.9B→$31.5B, AI in education 80% adozione business school, skill mismatch IT 35%. 24 fonti web pubbliche verificate elencate in fondo al doc.
- **Output prodotti**: [Framework Pitch Finale](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Futuritaly/Angelini%20Academy/Framework%20Pitch%20Finale.md) (~11.000 parole, salvato in `20 - Projects/Futuritaly/Angelini Academy/`).
- **Citazioni rilevanti**: nessuna nuova (sessione costruttiva, non cattura di voci cliente/fornitore).
- **Task emersi**: nessun task `[ ]` aperto (deliverable consegnato, framework integrabile mano a mano che arrivano clustering + pricing 14/5).
- **Schede aggiornate live (§15)**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] (sezione Documenti collegati + frontmatter `last_call_date`), nuovo file `Framework Pitch Finale.md`.
- **Note**: `Analisi Competitor.md` non esiste nel vault — placeholder esplicito al §1.3 del framework con 4 classi competitor da mappare (business school italiane, corporate university gruppi industriali italiani, istituti di ricerca pedagogica europei, fondazioni culturali-scientifiche europee). Sostituzione integrabile senza rework quando il documento esisterà.

## Sessione 2 — Venue Finder feedback and bug report (test 11/5 sera)

- **ID**: `local_56c80cfd-864d-4212-8a62-ed18787b9cbd`
- **Topic**: Sessione di test approfondita su Venue Finder con cattura di 9 bug/feedback da girare a Federico+Simone, in vista del rilascio MVP.
- **Progetti**: [[20 - Projects/NoLoop/Wave 2/Venue Finder|Venue Finder]]
- **Persone**: [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]], [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]]
- **Decisioni**: nessuna decisione strategica — sessione operativa di QA. Conferma che 2 bug carry-over dal 6/5 (Settings VF non visibili a Carlo + Multi-location "Milano e Roma" non funziona) sono ancora pendenti al test 11/5.
- **Numeri/fatti nuovi**: 9 bug catturati (4 Critical/High + 5 Medium); 7 task #p1 + 2 #p2 aperti nella scheda Venue Finder.
- **Output prodotti**: bozza email a Federico+Simone (paste-ready); tabella 9 task per MS Lists "Soolutions Delivery Board" (paste-ready, filtri privacy §8bis rispettati).
- **Citazioni rilevanti**: nessuna nuova (no voce cliente/fornitore — è feedback tecnico interno).
- **Task emersi**: 9 task aperti nella scheda Venue Finder (vedi sotto):
  - #p1 Fix flow saltato Attività/Trasporti/Ristoranti dopo Venue+Hotel (Critical)
  - #p1 Fix mapping link fonti → struttura sbagliata (es. Hyatt Milano → LA PLAGE RESORT Taormina)
  - #p1 Fix link fonti che aprono pagine vuote
  - #p1 Fix risposte vuote Sally chat (`[]`)
  - #p1 Fix rendering JSON grezzo lista requisiti critici → bullet list
  - #p1 Abilitare settings prompt VF a Carlo (carry-over 6/5)
  - #p1 Multi-location consecutivo: verificare stato rilascio (carry-over 6/5)
  - #p2 Fix duplicazione blocco requisiti critici a video
  - #p2 Fix rendering markdown chat Sally (`\n\n`/`\n-` letterali)
- **Schede aggiornate live (§15)**: [[20 - Projects/NoLoop/Wave 2/Venue Finder|Venue Finder]] (nuova sezione "Feedback test sessione Carlo — 11/05/2026"), [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]] (riga sessione 11/5 sera), [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]] (riga sessione 11/5 sera).
- **MS Lists**: tabella paste-ready disponibile in scheda Venue Finder. Non sincronizzata via MCP Graph (setup MS Lists ancora in chiusura).

## Sessione 3 — Competitive analysis for Angelini Academy pitch (prompt Claude Design)

- **ID**: `local_cc8f7879-986a-4370-a1d4-752cb533cc17`
- **Topic**: Produzione di un prompt di accompagnamento per Claude Design da usare nella generazione di una presentazione PowerPoint "Roadmap Operativa 2026" da inserire nel pitch finale Angelini Academy.
- **Progetti**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone**: nessuna (sessione meta-tooling)
- **Decisioni**:
  - Deck 8-12 slide, 16:9 widescreen, formato `.pptx`.
  - Posizionamento brand confermato "fondazione culturale-scientifica europea" (allineato a Sessione 1).
  - Brand book cliente 2024 (logo + colori Angelini) prevale: il deck deve essere riconoscibilmente "Angelini Academy", non "HeyAI dressed up".
  - Numeri pricing HeyAI segnati come **"TBD — chiusura 14/5"** dove appaiono nel deck (flusso economico margine FuturItaly ancora aperto).
  - Niente postambolo nel deck (no "thank you", no "Q&A" slide finale standard).
- **Numeri/fatti nuovi**: pricing TBD chiusura 14/5 confermato come gate decisionale per i numeri nel deck (data interna allineamento Carlo+Daniele+Elena).
- **Output prodotti**: prompt completo (1.500 caratteri ca) pronto per copia-incolla in Claude Design, con documento di riferimento `Campagna 2026.md`.
- **Citazioni rilevanti**: nessuna.
- **Task emersi**: nessun task `[ ]` aperto (sessione di setup tool — il deliverable è la produzione del PowerPoint che farà Claude Design quando Carlo lo invocherà, fuori da questa chat).
- **Schede aggiornate live (§15)**: nessuna (sessione di tooling). _Aggiunto solo back-link a indice giornaliero da questo task notturno._

## Sessione 4 — Creare due scheduled task CRM e review

- **ID**: `local_517a482d-2760-4d87-9165-92bb5b30aa3f`
- **Topic**: Creazione + simulazione trigger manuale di 2 nuovi scheduled task post-ricerca PKM (deployment delle raccomandazioni #4 e #5 della sessione 11/5 `local_28ee6571`).
- **Progetti**: nessun progetto specifico — meta-sistema vault PM operativo.
- **Persone touch**: [[60 - People/Marco Pasquali|Marco Pasquali]] (alert critico CRM 62gg cooling), [[60 - People/Paolo Donzelli|Paolo Donzelli]] (warm 29gg, alert bonus), [[60 - People/Laura Garbarino|Laura Garbarino]] (warning 13gg vs cadence 7gg), [[60 - People/Elena Chiti|Elena Chiti]] (touchpoint pianificato oggi).
- **Decisioni**:
  - `crm-velocity` creato: cron `0 9 * * 1` (lun ~9:08 con jitter). Path `/Users/carlosanvoisin/Documents/Claude/Scheduled/crm-velocity/SKILL.md`. Prossimo run reale: **lun 18/5**.
  - `weekly-review-interactive` creato: cron `30 17 * * 5` (ven ~17:38 con jitter). Coexiste con `friday-wrap-up` (17:00 digest automatico, sezione diversa). Prossimo run reale: **ven 15/5**.
  - Trigger manuale di entrambi simulato end-to-end (no tool MCP "Run now" disponibile in chat — bottone solo in UI Scheduled).
- **Numeri/fatti nuovi**:
  - **Bucket CRM emersi 12/5** (15 schede con frontmatter `last_contact` popolato): 🔴 critici = **2** ([[60 - People/Marco Pasquali|Marco Pasquali]] 62gg cooling — atteso da settimana scorsa; [[60 - People/Paolo Donzelli|Paolo Donzelli]] 29gg warm bonus); 🟡 warning = **1** ([[60 - People/Laura Garbarino|Laura Garbarino]] 13gg vs cadence 7gg); 🟢 touchpoint pianificati = **1** ([[60 - People/Elena Chiti|Elena Chiti]] oggi). 44 schede senza `last_contact` registrate come "da popolare manualmente" (coerente con scope pilot 15).
  - **Inbox >7gg sweep 12/5**: 3 file (`2026-04-30 - Panorama iniziale` 12gg, `2026-05-04 - Scenari Fornitori (post call Silencio)` 8gg, `2026-05-04 - BOZZA Email Lavinia` 8gg).
  - **Project stale sweep**: nessun progetto P1/P2/P3 stale (>14gg). NOT Marketing senza `updated:` segnalato come "—" (è ✅ in consegna, da chiudere formalmente).
- **Output prodotti**:
  - [Daily Note 2026-05-12](computer:///Users/carlosanvoisin/claude/10%20-%20Daily%20Notes/2026-05-12.md) con sezione `## 🔔 CRM warnings` popolata.
  - [Prep doc Weekly Review 2026-05-12](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-12%20-%20Weekly%20Review.md) con sezioni 1-3 pre-popolate, sezioni 4-5 lasciate per Carlo.
- **Citazioni rilevanti**: nessuna.
- **Task emersi**: nessun nuovo `[ ]` aperto (i task di scope erano "creare i 2 scheduled" e sono stati chiusi inline dalla sessione).
- **Schede aggiornate live (§15)**: file di sistema/meta. Setup CRM velocity + Setup Weekly Review già presenti dalla sessione 11/5. _Le 15 schede persona con `last_contact`/`cadence_days` erano già state retro-popolate l'11/5_ — questa sessione le legge soltanto.
- **Note**: dipendenza implicita tra i 2 task (`weekly-review-interactive` legge i CRM warnings dalla Daily Note generata da `crm-velocity`) — non dichiarata esplicitamente nei Setup doc. Già flaggato come gap nell'audit di Sessione 5.

## Sessione 5 — Research second brain best practices (audit deployment 12/5)

- **ID**: `local_28ee6571-84ac-4057-ad25-6585d3f2029b` _(sessione re-opened — corpo originale ricerca PKM già indicizzato 11/5 §1)_
- **Topic**: Audit critico del deployment dei 2 scheduled task della sessione 4 (Sessione `local_517a482d`). Stress test di metodologia, utility reale e rischio "compliance theater".
- **Progetti**: nessuno (sessione meta-sistema)
- **Persone**: [[60 - People/Marco Pasquali|Marco Pasquali]] (caso d'uso pilot del valore CRM velocity — 62gg di silenzio rilevati al primo run)
- **Decisioni**:
  - Verdetto: **metodologia 8/10, utility reale 7.5/10**. Gap procedural (pre-flight check non ripetuto, Open Tasks non aggiornato, Daily Note 12/5 non verificata, dipendenza CRM↔Weekly Review non esplicitata) ma nessun errore corruzivo del deployment.
  - Test pattern CRM velocity superato: ha intercettato un rischio operativo già attivo (Marco Pasquali 62gg) — non costruito ad hoc.
  - Pilot di 4 settimane su Weekly Review interattivo giustificato — il valore lo determina la disciplina nei prossimi 7gg (decisione: aprire venerdì sera o sabato mattina e fare i 30 minuti).
  - Rischio principale: **task non creati entro 48h** dal piano (in realtà sono stati creati subito nella Sessione 4 — rischio mitigato in-session).
- **Numeri/fatti nuovi**: nessun numero ufficiale toccato. Conferma `cadence_days` come **stima ragionata di Claude**, non decisione di Carlo: necessità di ricalibrazione 5-10 min insieme prima del primo run reale di lun 18/5.
- **Output prodotti**: audit testuale in chat (no file salvato — la sessione è di stress test, non di produzione).
- **Citazioni rilevanti**: nessuna.
- **Task emersi** (4 follow-up identificati dall'audit, in ordine di rilevanza):
  - #p2 Aggiungere `- [ ]` task in `99 - System/Open Tasks.md` per "Creare scheduled task crm-velocity + weekly-review-interactive — vedi `99 - System/Setup *.md`" → **già obsoleto** (Sessione 4 ha già creato i due task; questo task era una protezione contro il "deployment dormiente" che è stato bypassato).
  - #p2 **Calibrazione cadence_days con Carlo** (5-10 min review tabella in Setup CRM velocity) prima del primo run reale lun 18/5.
  - #p3 Allargare il bucket CRM dai 15 critici ai 25 (dopo che i 15 sono validati nel primo ciclo, atteso fine maggio).
  - #p3 Linkare i 2 nuovi Setup doc in `99 - System/MOC - Home.md` per scoperta futura.
- **Schede aggiornate live (§15)**: nessuna (sessione di audit). _Aggiunto solo back-link a indice giornaliero da questo task notturno._

## Sessione 6 — Create client recap for email (Crowd sessione finale 12/5)

- **ID**: `local_489f7e41-ca3a-4d24-9230-66c1062e5f81`
- **Topic**: Recap completo della **sessione finale di test Crowd** del 12/5 con David Fasulo (PM operativo UAT, NoLoop) + Lorena Cavecchi + Arianna Giordanella + Federico+Simone. Produzione di una bozza email destinata a David Fasulo (CC: Lorena, Arianna, Federico, Simone). Driver del **saldo Wave 1 entro fine maggio**.
- **Progetti**: [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]], [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|Wave 2 NoLoop]] (riferimento milestone saldo)
- **Persone**: [[60 - People/David Fasulo|David Fasulo]] (ruolo aggiornato a "PM operativo Crowd UAT"), [[60 - People/Lorena Cavecchi|Lorena Cavecchi]], [[60 - People/Arianna Giordanella|Arianna Giordanella]], [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]], [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]]
- **Decisioni**:
  - **Obiettivo concordato in call**: test end-to-end su un evento completo lato NoLoop **entro ~10gg dal rilascio**, così da chiudere OK formale Wave 1 e sbloccare il saldo **entro fine maggio**.
  - **Federico rilascia le ultime modifiche tra oggi e domani pomeriggio** (problema pipeline da risolvere). Edit/bulk edit + god mode salvataggio + preview landing rendering: tutto in questa wave.
  - **Email automatica conferma post-registrazione**: out-of-scope iniziale, ma il cliente la chiede. Decisione: Carlo+Federico producono una proposta concreta (mail unica triggerata al register, casistiche differenziate via gruppi).
  - **Editabilità pop-up conferma**: rinviata. HeyAI propone di standardizzare prima il wording (più elegante e neutro) per non aprire un cantiere di configurazione su ogni messaggio di sistema.
  - **Reportistica avanzata** (modelli report salvabili): export libero copre il 90% dei casi → da inserire in roadmap futura, non in Wave 1.
  - **Differenziazione DUS vs doppia in export**: approccio confermato → gruppo camere dedicato per le doppie effettive, così che in export verso l'hotel il prezzo possa essere distinto.
  - **Setup email IT (passaggio Lorena → Marco Merli)**: proposta HeyAI = un'unica mail mittente tipo `noreply@crowd.noloop.eu` + reply-to differenziabile per evento su `backoffice.crowd@noloop.eu`. Carlo risente Simone per allineare con i sistemisti NoLoop.
  - **Modalità di supporto offerta**: HeyAI disponibile ad affiancare David in slot dedicati durante il picco di stagione, per non lasciare il test sulle sue sole spalle.
- **Numeri/fatti nuovi**: nessun numero economico nuovo (saldo Wave 1 resta dentro bundle €300K Wave 2 — Master Facts immutato).
- **Output prodotti**: [Bozza email Recap Crowd Sessione Finale (2 versioni)](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-12%20-%20BOZZA%20Email%20Recap%20Crowd%20Sessione%20Finale.md).
- **Citazioni rilevanti**: 5 citazioni testuali da David Fasulo preservate nella scheda Crowd (dettagli operativi UAT — non tutte strategiche, ma fissano linguaggio cliente).
- **Task emersi**: 9 nuovi task `[ ]` nella scheda Crowd (deploy modifiche wave, edit bulk, god mode, preview fix, email automatica conferma proposta, allineamento Simone↔Marco sistemisti, follow-up Lorena OK formale, test end-to-end ~10gg, riconciliazione 2 task aperti precedenti). 1 task atteso lato cliente: David testa end-to-end su evento reale entro fine maggio.
- **Schede aggiornate live (§15)**: [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]] (Log 12/5 + 5 citazioni + 9 task + reconciliation 2 task), [[60 - People/David Fasulo|David Fasulo]] (ruolo aggiornato a PM operativo UAT, sezione Pattern di interazione + 3 citazioni), [[60 - People/Lorena Cavecchi|Lorena Cavecchi]] (Log + nota CC email), [[60 - People/Arianna Giordanella|Arianna Giordanella]] (Log + nota CC email), [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]] (`last_contact` 12/5 + `next_touchpoint` 13/5 + Log sessione 12/5).
- **CLAUDE.md §6 milestone Crowd**: da "12/5 sessione finale" → "test end-to-end NoLoop entro fine maggio + OK formale Wave 1 + saldo Wave 1". Aggiornamento non committato live (lasciato a triage Carlo o a §15.bis del prossimo agente live).

### Conflict scan cross-sessione

**0 conflitti rilevati.** Nota informativa (non conflitto):
- [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]] e [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]] toccati da Sessione 2 (test Venue Finder 11/5 sera, `last_contact` proposto = 2026-05-11) **e** Sessione 6 (recap Crowd 12/5 sera, `last_contact` proposto = 2026-05-12). Regola "ultimo timestamp vince" applicata automaticamente: **Sessione 6 supersede Sessione 2** sui campi `last_contact` di Federico e Simone (2026-05-12 wins). Entrambe le sessioni propongono lo stesso fatto (interazione tecnica con Federico+Simone) ma in due momenti diversi; non c'è contraddizione semantica — è solo aggiornamento incrementale.
- Audit: B (Sessione 6) supersede A (Sessione 2) per regola "ultimo timestamp vince". Nessuna notifica push speciale per conflitti (conteggio reale conflitti = 0).

### Checkbox reconciliation

- **Chiusi `[x]` automaticamente**: 0
- **Annullati `[-]` automaticamente**: 0
- **In `⚠️ Da triagiare` per ambiguità**: 0
- **Task aperti scansionati totali sulle schede toccate**: ~30 (Crowd, Venue Finder, _Angelini Academy, Federico, Simone, Marco Pasquali, Paolo Donzelli, Laura Garbarino, Elena Chiti, David Fasulo, Lorena, Arianna)

**Rationale**: tutte le sessioni di questo run hanno fatto **vault commit live** che includeva già la riconciliazione checkbox in-session (§15.ter CLAUDE.md). La Sessione 6 esplicitamente dichiara "reconciliation 2 task aperti" già fatta live nella scheda Crowd. La Sessione 2 esplicitamente dichiara "Checkbox riconciliati: nessuno chiuso (i 4 task carry-over restano aperti — il test 11/5 li conferma tutti pendenti)". Il task notturno conferma e non interviene.

### Output prodotti (link diretti)

- [Framework Pitch Finale](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Futuritaly/Angelini%20Academy/Framework%20Pitch%20Finale.md) (Sessione 1)
- [Bozza Email Recap Crowd Sessione Finale](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-12%20-%20BOZZA%20Email%20Recap%20Crowd%20Sessione%20Finale.md) (Sessione 6)
- [Daily Note 2026-05-12 con CRM warnings](computer:///Users/carlosanvoisin/claude/10%20-%20Daily%20Notes/2026-05-12.md) (Sessione 4)
- [Prep doc Weekly Review 2026-05-12](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-12%20-%20Weekly%20Review.md) (Sessione 4)

### Schede aggiornate da questo run notturno (back-link `## Sessioni Cowork correlate`)

- [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]]
- [[20 - Projects/NoLoop/Wave 2/Venue Finder|Venue Finder]]
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]]
- [[60 - People/David Fasulo|David Fasulo]]
- [[60 - People/Lorena Cavecchi|Lorena Cavecchi]]
- [[60 - People/Arianna Giordanella|Arianna Giordanella]]
- [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]]
- [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]]
- [[60 - People/Marco Pasquali|Marco Pasquali]]
- [[60 - People/Paolo Donzelli|Paolo Donzelli]]
- [[60 - People/Laura Garbarino|Laura Garbarino]]
- [[60 - People/Elena Chiti|Elena Chiti]]

### Alert sistema

- **Master Facts**: nessun numero ufficiale modificato in questo run. Pricing Wave 2 €300K, NOT Operation Transformation €109K, NOT Eye Cookies €75K, Eldis €130/mese: tutti coerenti.
- **CLAUDE.md §6 milestone Crowd**: da aggiornare (sessione finale 12/5 svolta → prossimo milestone "test end-to-end NoLoop entro fine maggio + OK Wave 1 + saldo"). Sessione 6 ha lasciato a triage Carlo. **Da triagiare prossima chat live**.
- **CLAUDE.md §9 scheduled tasks**: i 2 task `crm-velocity` + `weekly-review-interactive` sono passati da "DA CREARE" a "ATTIVI". Sessione 4 ha lasciato a triage Carlo l'aggiornamento del file CLAUDE.md (entrambi i task sono stati creati alle ~17-18 di oggi, ma §9 li elenca ancora come DA CREARE). **Da triagiare prossima chat live**.
- **Calibrazione `cadence_days`** delle 15 schede CRM: stima ragionata di Claude, non decisione di Carlo. Review insieme prima del primo run reale lun 18/5 (5-10 min).

### ⚠️ Da triagiare con Carlo

1. **CLAUDE.md §6 milestone Crowd** → aggiornare a "test end-to-end NoLoop entro fine maggio + OK Wave 1 + saldo" (prossima chat live, basta un Edit chirurgico).
2. **CLAUDE.md §9 scheduled tasks** → marcare `crm-velocity` e `weekly-review-interactive` come ATTIVI invece che DA CREARE (entrambi attivi dalle ~17 del 12/5).
3. **Calibrazione cadence_days** delle 15 schede CRM con Carlo (sessione 5-10 min prima del run reale lun 18/5).
4. **Sincronizzare MS Lists Soolutions Delivery Board** con i 9 task Venue Finder (Sessione 2) + 4 task Federico Crowd (Sessione 6) appena il setup MCP Graph è chiuso.
5. **Inviare bozza email David Fasulo** (Sessione 6) — Carlo decide se e quando (file in `00 - Inbox/2026-05-12 - BOZZA Email Recap Crowd Sessione Finale.md`).
6. **Inviare bozza email Federico+Simone** (Sessione 2) — Carlo decide se e quando (testo paste-ready nella scheda Venue Finder + Cowork chat).
7. **Verificare e aggiungere `Analisi Competitor.md`** in `20 - Projects/Futuritaly/Angelini Academy/` (Sessione 1, framework attualmente con placeholder esplicito §1.3).

## Note del run

- **Trigger**: cron-22 anticipato (20:30 CEST anziché 22:00). Comportamento atteso del scheduler.
- **Patch SKILL v2 attiva**: ordering cronologico ascending (Patch A) + conflict scan step 4bis (Patch B) + audit metadata `source-session` (Patch C) + quinto caso ambiguo cross-sessione (Patch D). Tutte e 4 le patch applicate in questo run.
- **Verifica post-patch (8 check)**:
  - ✅ Sessioni elencate in ordine cronologico ascending per `lastActiveAt` (Patch A)
  - ✅ Sezione `### Conflict scan cross-sessione` presente con conteggio 0 conflitti (Patch B)
  - ✅ Commenti HTML invisibili `source-session` nel frontmatter di questo indice (Patch C)
  - ✅ Sezione `### Checkbox reconciliation` presente con conteggio (Patch D)
  - ✅ Riga `_atomic-field-change_` non necessaria in questo run (le schede toccate hanno tutte già `updated: 2026-05-12` da live commit in-session)
  - ✅ Frontmatter `deadline:` non da aggiornare in questo run (nessuna deadline atomica scaduta-da-evento-confermato)
  - ✅ Coaching note non necessaria (no sessioni di performance review oggi)
  - ✅ Notifica conflitti = 0 → nessuna notifica speciale necessaria
