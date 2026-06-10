---
type: prep-doc
created: 2026-05-27
meeting_context: 2026-05-28 ore 15:30 — Prima call bisettimanale Eye Cookies NoLoop x HeyAI (Germano + Carlo + Federico + Simone)
projects: [Eye Cookies]
stakeholders: [Germano Marano, Federico Saladino (Soolutions), Simone Montanari (Soolutions)]
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Call svolta il 28/5 (minuta assorbita in scheda); i task vivi di Eye Cookies vivono nella scheda progetto — le checkbox qui sotto sono il prep, non lo stato. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# Prep call bisettimanale Eye Cookies — Germano 28/5 ore 15:30

> Prima call del nuovo formato bisettimanale. Setting tono e governance per i prossimi mesi. Obiettivo: arrivare con quadro chiaro, roadmap consolidata, 3-4 decisioni da chiudere.

## Sintesi obiettivi della prima call

1. **Setting tono ricorrenza**: mostrare a Germano che il formato bisettimanale è efficiente e operativo, non burocratico
2. **Allineamento roadmap**: condividere la roadmap consolidata Eye Cookies (richiesta esplicita Germano 25/5)
3. **Chiudere Open Questions tecniche prioritarie** del Requirement Log (8 totali, focus su 4-5 bloccanti)
4. **Coordinamento Microlog**: capire insieme se/quando organizzare la call dedicata (decisione posticipata da te 25/5)
5. **Topic strutturali aperti**: Totem, rilocazione sensori K-ippun Haru, ingestion dati storici Carmen Compare

## A. Cosa Federico + Simone (team di sviluppo) devono avere pronto

### A.1 Accessi e ambiente tecnico
- [ ] **Test accessi Microlog con nuove credenziali** `germano.marano` / `Tempo123456!` su `https://tracking.microlog.it/` (sia dashboard che API). Verificare se le API girano con vecchie chiavi (kippunharu/KippunHaru2026!) o con le nuove — Germano stesso non lo sa, l'ha chiesto a Microlog ma forse non hai ancora la conferma
- [ ] **Documentazione API XDC.pdf** ricevuta da te (task aperto #p2: girare PDF + credenziali se non già fatto contestualmente all'invio del RL)
- [ ] **Backup storico Microlog**: Simone conferma di averlo nel suo iCookies playground (download 02/03). Verificare integrità e completezza per la fase di test

### A.2 Stato sviluppi da poter raccontare in call
- [ ] **Scheletro applicativo**: a che punto siamo (Simone 20/5 lo diceva "in fase avanzata"). Quali componenti pronti, quali in lavoro, quali blocked
- [ ] **Architettura tecnica implementata** vs RL: stack confermato (MongoDB, Node/TypeScript, React, LLM via API + algoritmi proprietari, Docker)? Deviazioni?
- [ ] **Componenti integrati**: quale dei 6 moduli funzionali è in lavoro (Nightly Data Fetch, Registration-Timestamp, Data Processing, Virtual Cart Generation, AI Targeting Engine, Advertising Activation)
- [ ] **Demo live di qualcosa concreto** (opzionale ma molto utile): anche solo screenshot di un endpoint che gira, una struttura DB inizializzata, una pipeline di test. Setta il tono "stiamo costruendo davvero"

### A.3 Lettura e validazione del Requirement Log (consegnato 22/5 sera)
- [ ] **F+S hanno letto il RL v2.3**? Confermato scope MVP 33 RFx.y + 17 fuori scope?
- [ ] **Open Questions su cui hanno bisogno di risposta SUBITO** per non bloccare lo sviluppo — devono dirti loro quali sono le bloccanti reali, non tutte le 8

### A.4 Domande tecniche da fare a Germano in call
Pre-allineato con F+S, lista pulita di domande puntuali — non improvvisare in call.

- [ ] **Q1 UID GDPR**: confermiamo UID opaco lato HeyAI (hash email lato server, mai email in chiaro nel DB Eye Cookies) o Microlog impone email utente come UID? Bloccante GDPR
- [ ] **Q2 `geometry_name`** del tavolo: parametro POST `/upload/trigger` pending da Microlog dal 02/03. Va sbloccato
- [ ] **Q6 Modello auth Microlog**: token statico o JWT? Quale endpoint per quale ambiente?
- [ ] **Q7 SLA tecnico Microlog**: post rilascio non comunicato 22/5, c'è un changelog ufficiale? Ci sarà comunicazione preventiva per i prossimi rilasci?
- [ ] **Q8 Capability HW sensori direzione sguardo**: i sensori installati supportano la rilevazione direzione sguardo (caso GLO menzionato nel RL)? Se no, RF4.2 e RF5.2 confermati esclusi da MVP

## B. Cosa tu (Carlo PM) devi avere pronto

### B.1 Roadmap consolidata Eye Cookies
- [ ] **Consolidare con F+S oggi/domani mattina** una roadmap snella in formato Now / Next / Later o per fasi (Foundation → Data Pipeline → AI Engine → Targeting & Ads → Go-Live). Riferimento già nel RL v2.3 foglio Riferimenti
- [ ] **Milestone target**: settembre 2026 (deadline commerciale di Massi). Tappe intermedie con date indicative — ti basta granularità mensile
- [ ] **Formato**: una slide / un foglio singolo. Non un Gantt dettagliato. Da condividere in call e lasciare al cliente

### B.2 Materiali da avere aperti durante la call
- [ ] **Requirement Log v2.3** finalizzato (`Eye Cookies - Requirement Log MVP.xlsx` — versione inviata al team di sviluppo)
- [ ] **Scheda Eye Cookies** del vault — `20 - Projects/NOT/Eye Cookies.md` per riferimento rapido su task/decisioni
- [ ] **Thread email "R: eye cook..next step"** in Outlook, per rapida referenza alle ultime mail Germano

### B.3 Decisioni da portare in call (chiuse internamente, da condividere)
- [ ] **Call Microlog dedicata posticipata**: deciso 25/5 di ragionarci a valle del primo bisettimanale (oggi). Decisione da rispiegare a Germano se riapre il tema — razionale: prima allinearsi internamente, poi capire se serve davvero la call dedicata con Microlog (Germano ha confermato che vuole essere sempre presente, quindi la cosa più efficiente è capire insieme se/quando)
- [ ] **Posizione su Totem**: la proposta scritta è ancora pendente lato team hardware (Alex). Carry-over da 2+ settimane. **Decidi PRIMA della call**: la prometti per la prossima call bisettimanale (11/6) o spingi per fine settimana? Suggerimento: prometti entro la prossima call, ma fai pressione interna su Alex
- [ ] **Posizione su near real-time API**: Germano sta aspettando preventivo Microlog. Tu nella mail 25/5 hai detto "valutiamo a valle". In call: riconferma interesse, non promettere upgrade prima di vedere costi

### B.4 Topic strutturali da gestire come PM in call

#### B.4.1 Rilocazione sensori K-ippun Haru (Open Question Q3)
- K-ippun ha fatto exit, sensori da spostare a fine maggio
- Germano sta ancora capendo dove rimetterli (futuro store K-ippun? altro pop-up? altro brand?)
- **Per noi è opportunità**: appena confermato il nuovo store, primo test end-to-end nel nuovo store contestualmente alla riattivazione
- **Chiedere in call**: aggiornamento decisione rilocazione + timing

#### B.4.2 Accesso interattivo al sistema sensori in pop-up (richiesta Simone 20/5)
- Per la fase di sviluppo serve poter accedere al sistema sensori in funzione in uno store fisico, anche solo ogni 15 giorni, per validare ipotesi e fare test end-to-end concreti
- Non solo storico backuppato — accesso live alla dashboard + accesso fisico al sistema sensori
- **Chiedere in call**: come organizzarlo operativamente

#### B.4.3 Ingestion dati storici Carmen Compare
- Call con data analyst NoLoop per ingestion storico → base modello predittivo Eye Cookies
- Già anticipata in mail Germano 13/5, slot da confermare al rientro Carmen
- **Chiedere in call**: stato Carmen, riusciamo a fissare slot questa settimana o prossima?

#### B.4.4 Demo applicativo Microlog con Germano (richiesta originale Simone)
- Idea originale (13/5): demo interna applicativo Microlog direttamente con Germano (lui mostra la dashboard live, noi vediamo flow utente in store)
- Mai fatta perché poi è subentrato il discorso credenziali → dashboard → Requirement Log
- **Verificare in call**: serve ancora? O lo storico + accesso live alla dashboard è sufficiente?

### B.5 Note di stile e governance da rispettare in call

- **Mai nominare Soolutions per nome**: sempre "team di sviluppo" / "team tecnico" (regola CLAUDE.md §13)
- **Germano vuole essere sempre presente** alle interazioni tecniche con Microlog (paletto governance esplicitato 25/5). Accolto, non riaprire
- **Non esporre dinamiche interne HeyAI**: nessun riferimento a esposizione finanziaria, dinamiche con Soolutions, stato pagamenti, dinamiche soci
- **Donzelli ha approvato commercialmente via email il 03/04 ma non c'è contratto firmato** — non è argomento di call ma se Germano riapre temi contrattuali, rimandare a interlocuzione separata con Andrea Pazienza

## C. Agenda proposta per la call (60 min)

Compatta, ordine logico, decisioni in chiusura.

**15:30-15:35 (5')** — Apertura e setting agenda
- Inquadrare il formato bisettimanale (cadenza, scopo, output atteso)

**15:35-15:50 (15')** — Stato avanzamento sviluppi (lato F+S)
- Cosa è pronto, cosa in lavoro, blocker tecnici
- Demo concreta se possibile (anche piccola)

**15:50-16:05 (15')** — Roadmap aggiornata Eye Cookies (lato Carlo)
- Presentazione consolidata Now/Next/Later o per fasi
- Allineamento sulle milestone fino a settembre 2026

**16:05-16:20 (15')** — Open Questions tecniche prioritarie (lato F+S → Germano)
- 4-5 domande puntuali (Q1 UID, Q2 geometry_name, Q6 auth, Q7 SLA, Q8 sguardo)
- Decidere quali Germano chiude lui, quali girano a Microlog

**16:20-16:28 (8')** — Topic strutturali (lato Carlo)
- Rilocazione sensori K-ippun Haru: aggiornamento
- Accesso interattivo sistema sensori in store: come organizziamo
- Carmen Compare: slot per ingestion storico
- Totem: stato proposta scritta (con prudenza)

**16:28-16:30 (2')** — Wrap-up e azioni per il prossimo bisettimanale (11/6)
- Chi fa cosa entro 11/6
- Setting next call (Teams ricorrente già fissato)

## D. Output atteso a fine call (chiudere prima dei 60 min)

- [ ] Lista decisioni prese (chi fa cosa, by when)
- [ ] Lista Open Questions chiuse (e quali restano da chiudere via Germano→Microlog)
- [ ] Conferma roadmap (o varianti richieste da Germano)
- [ ] Slot Carmen Compare fissato o in fissaggio
- [ ] Stato call Microlog dedicata: avanti / posticipare ancora / cancellare
- [ ] Recap email post-call inviato entro sera (pattern Carlo, verbi sostantivati)

## E. Pre-flight check da fare oggi/domani mattina

- [ ] Allineamento veloce con F+S (call interna o thread Slack/Teams) per:
  - Validare la prep doc
  - Confermare cosa loro fanno demo / cosa presentano
  - Chiudere la lista di Open Questions prioritarie da girare a Germano
  - Consolidare roadmap a 1 voce
- [ ] Verifica che invito Teams ricorrente sia stato inviato a Germano (titolo + body cortissimo "come da accordi fisso ricorrenza bisettimanale...")
- [ ] Verifica che il PDF Documentazione API XDC + nuove credenziali Microlog siano stati girati al team di sviluppo (task #p2 ancora aperto sulla scheda)
