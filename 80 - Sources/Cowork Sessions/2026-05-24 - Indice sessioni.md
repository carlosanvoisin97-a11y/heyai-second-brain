---
type: index
date: 2026-05-24
created: 2026-05-24
updated: 2026-05-24
session_count: 7
trigger: cron-22
window: 2026-05-23 20:22 → 2026-05-24 20:22 (rebased per recupero gap post-cron 22/5)
---

# Indice sessioni Cowork — 2026-05-24

Run cron quotidiano 20:22. Finestra ufficiale 24h. Il cron del **23/5 non è stato eseguito** (nessuna entry nel Log per quel giorno + nessun daily index 2026-05-23): di conseguenza la finestra è stata estesa pragmaticamente al gap residuo (22/5 sera post-cron precedente → 24/5 sera) per non lasciare scoperte le sessioni 22/5 successive alle 20:22 e tutte quelle del 23/5. Tutte le schede toccate hanno **vault commit live già applicato dall'agente §15** in sessione: le patch chirurgiche di questo task sono limitate ad audit cross-reference, link `## Sessioni Cowork correlate`, `updated:` refresh e atomic-field audit.

---

## Sessione 1 — `local_813cdef7-99cd-4c87-9cf5-3f236036efa5` — Microlog access and meeting coordination

- **Durata stimata**: media (vault commit articolato)
- **Progetti / aree toccate**: [[20 - Projects/NOT/Eye Cookies|Eye Cookies]] · [[60 - People/Germano Marano]]
- **Persone**: [[60 - People/Germano Marano|Germano Marano]] · Federico Saladino + Simone Montanari (allineamento interno HeyAI+Soolutions)

**Decisioni**:
- Risposta a Germano (Microlog) impostata con tre azioni concatenate: (a) presa in carico delle nuove credenziali, (b) OK meeting ricorrente giovedì 15:30 con Massi/Andrea, (c) richiesta call tecnica diretta Microlog↔Soolutions per accelerare integrazione dashboard.
- Bozza paste-ready prodotta in `00 - Inbox/` — Carlo decide tempistica e eventuale CC Massi/Andrea prima dell'invio.

**Numeri / fatti nuovi**: nessun numero economico nuovo (Master Facts non toccato).

**Output prodotti**:
- [[00 - Inbox/2026-05-22 - BOZZA Risposta Germano nuove credenziali Microlog + richiesta call Microlog]]

**Task emersi**: 4 nuovi `- [ ]` #p1 in [[20 - Projects/NOT/Eye Cookies|Eye Cookies]] (allineamento interno F+S su giovedì 15:30, invio email Germano, invito Teams ricorrente, organizzazione call tecnica Microlog).

**Schede aggiornate**: [[20 - Projects/NOT/Eye Cookies|Eye Cookies]] (nuovo Log "22/05 sera — Risposta a Germano"), [[60 - People/Germano Marano|Germano Marano]] (`last_contact` 22/5 + Log interazione).

---

## Sessione 2 — `local_b3255bee-31cf-46b4-b599-43666d6dcd01` — Email forwarding pricing risk review

- **Durata stimata**: media (audit programmatico su 5 forward)
- **Progetti / aree toccate**: [[30 - Areas/Area - Partnership Fornitori/_Area - Partnership Fornitori|Partnership Fornitori]] · [[99 - System/Open Questions]] · schede [[60 - People/Federico Saladino (Soolutions)|Federico]] / [[60 - People/Simone Montanari (Soolutions)|Simone]]

**Decisioni**:
- Audit di rischio compromissione prezzi cliente HeyAI ↔ Soolutions chiuso con esito **rischio residuo LOW** — nessun prezzo cliente leaked, nessun PDF pricing HeyAI propagato a Federico/Simone via forward Germano.
- Apertura+chiusura [[99 - System/Open Questions|OQ#37]] nella stessa sessione, audit verbatim conservato.

**Numeri / fatti nuovi**:
- 5 forward analizzati con date: 10/9/2025, 2/3/2026, 29/4/2026, 20/5/2026, 22/5/2026.
- Indirizzi Soolutions verificati: `federico@soolutions.io`, `info@federicosaladino.it` (storico), `simone@soolutions.io`, `simone@tokiostudio.it`, `simone.montanari97@gmail.com` (personale).
- Numeri ufficiali (€75K Eye Cookies, €109K Operation Transformation, €300K Wave 2) **non presenti** in nessun forward al supplier.

**Output prodotti**: audit interno (no file separato — verbatim in OQ#37).

**Task emersi**: nessuno.

**Schede aggiornate**: [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]] e [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]] (campo `emails_historical` aggiunto per mapping audit futuri); [[99 - System/Open Questions]] (#37 apertura+chiusura).

**Sources**: [Sent Items Outlook](https://outlook.office365.com/mail/sentitems)

---

## Sessione 3 — `local_07624f1b-4b2b-4edf-971a-1fbe04fe96e2` — Eldis services and evolutive quotes

- **Durata stimata**: media (audit pre-invio + email)
- **Progetti / aree toccate**: [[20 - Projects/Eldis/Eldis Compilatore|Eldis Compilatore]] · [[60 - People/Stefania Solidoro|Stefania Solidoro]]

**Decisioni**:
- **🟢 Policy pricing nuova chiarita da Carlo verbatim**: *"su questa specifica quotazione non applico markup"* — sulle evolutive Eldis (€1.800 + €2.100 da Simone) Carlo trasferisce il costo Soolutions direttamente al cliente, senza markup HeyAI. Eccezione esplicita alla regola §2.2 CLAUDE.md (target margine 40-45%): policy zero-markup motivata dalla relazione warm con Stefania + bassa entità importi.
- Data emissione PDF NON necessaria per quotazione di questa entità (decisione Carlo verbatim: *"non serve la data di emissione del PDF per una cosa così banale"*).
- Bullet evolutive nell'email riformulato: *"Attività evolutive in valutazione (descrizioni con campi extra ed export semiautomatico)"*.
- Terminologia uniformata email↔PDF: "consuntivo" → "tariffa oraria".
- Oggetto email: *"Eldis × HeyAI — Servizi continuativi e attività evolutive"*.
- Builder PDF Canva escluso dal perimetro attuale (effort sproporzionato vs valore percepito).

**Numeri / fatti nuovi**:
- Evolutive Eldis: descrizioni con campi extra €1.800 + export semiautomatico €2.100 (entrambi netti, **prezzo cliente = costo fornitore**, no markup HeyAI).
- Continuativo: hosting+manutenzione €130/mese + consulenza operativa €180/h (confermati da email 29/04 + Master Facts).

**Output prodotti**: email Carlo→Stefania paste-ready Outlook + PDF (riferimento in scheda Eldis Compilatore).

**Task emersi**: nessuno operativo nuovo (chiarimento policy committato come fatto, audit pre-invio passato).

**Schede aggiornate**: [[20 - Projects/Eldis/Eldis Compilatore|Eldis Compilatore]] (Log 22/5 con chiarimento policy markup zero su evolutive Eldis + correzioni accolte) + `updated: 2026-05-22`.

**Citazioni testuali da preservare** (Carlo, sessione 22/5):
- *"su questa specifica quotazione non applico markup"*
- *"non serve la data di emissione del PDF per una cosa così banale"*

---

## Sessione 4 — `local_d3f9499f-b218-4b2f-8f20-43d225fa0f0b` — Osservatorio AI proposal support (audit Pre-Invio Proposta v2 + email Claudia)

- **Durata stimata**: alta (audit massivo + draft email merge)
- **Progetti / aree toccate**: [[20 - Projects/Futuritaly/Osservatorio Strategico|Osservatorio Strategico]] · [[60 - People/Claudia Bugno|Claudia Bugno]] · [[60 - People/Lavinia Ferrari|Lavinia Ferrari]] · [[60 - People/Bruno Mattucci|Bruno Mattucci]]

**Decisioni**:
- Email v2 a Claudia Bugno (CC Lavinia) merge dei due draft separati (Lavinia + Claudia) → email unica con due nuclei coordinati: (a) consegna proposta Osservatorio v2 + richiesta call discussione, (b) richiesta slot incontro strategico Bruno↔Claudia (lun 25/5 PM o mer 27/5 AM).
- Patch retoriche: *"stamattina"* → *"ieri"* (incontro 20/5, mail 21/5); plurali *"vi/vostro"* singolarizzati dove Claudia è destinataria diretta; cognome esteso *"Bruno Mattucci"* alla prima citazione; ponte narrativo *"Colgo l'occasione per un altro punto..."* per evitare giustapposizione di topic.
- Audit Proposta Osservatorio v2 con esito: **3 bloccanti + 4 high + 4 medium + 3 low + 4 punti strategici per call**.

**Numeri / fatti nuovi (audit Proposta v2)**:
- 🔴 B1: §11 *"Governance e Presidi Contrattuali"* **vuota** (solo titolo, errore grave per docx commerciale).
- 🔴 B2: color titolo proposta `#074F6A` invece di palette HeyAI `#2B8C96` (errore grafico ricorrente skill §10).
- 🔴 B3: payback dichiarato 14–20 mesi NON quadra con worst-case math (worst puro = 31,8 mesi).
- 🟡 H1: §8.5 dichiara automazione 80–90% ma risparmio €12–14K corrisponde a 60–70% (contraddizione interna).
- 🟡 H2: non-circumvention senza durata (riservatezza adiacente ha "+36 mesi" → incongruenza tabella §9).
- 🟡 H3: riferimento "in conformità al bando MEF" §7 — scivoloso se FuturItaly non partecipa al MEF (verifica con Lavinia).
- 🟡 H4: avverbio rafforzativo "drasticamente ridotti" in §1 → sostituire con metrica (es. "da ore a minuti").
- ✅ 12 check superati: layout A4, header HeyAI, footer ornamento + dati legali, font Aptos override, no fornitori per nome body, tranche math, validità 30gg, foro Roma.
- Effort stimato fix bloccanti+high: ~30 min; effort completo: ~45-60 min.

**Output prodotti**:
- [[00 - Inbox/2026-05-22 - Audit Pre-Invio Proposta Osservatorio v2|Audit Pre-Invio Proposta Osservatorio v2]] (report completo paste-ready)
- Email v2 paste-ready Outlook (TO Claudia Bugno · CC Lavinia Ferrari · Subject "Osservatorio Strategico AI — proposta aggiornata + disponibilità incontro" · allegato `HeyAI_Futuritaly_Proposta_Osservatorio_v2.docx`)

**Task emersi**: produzione `v3` del docx con fix bloccanti+high (decisione Carlo se applicare batch direttamente o item-per-item).

**Schede aggiornate**: [[20 - Projects/Futuritaly/Osservatorio Strategico|Osservatorio Strategico]] (Log 22/5 audit + email v2), [[60 - People/Claudia Bugno|Claudia Bugno]] (next_touchpoint slot 25/5 PM o 27/5 AM), [[60 - People/Bruno Mattucci|Bruno Mattucci]] (disponibilità slot confermata in sessione).

---

## Sessione 5 — `local_26ceec3e-17a3-4f92-89ca-16027305dea7` — Angelini website project update

- **Durata stimata**: bassa (sintesi stato + email follow-up)
- **Progetti / aree toccate**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] · [[60 - People/Elena Chiti|Elena Chiti]] · [[60 - People/Daniele Caporale|Daniele Caporale]]

**Decisioni**:
- Slot scaduto del `next_touchpoint` precedente (21/5 PM o 22/5 mattina) → rilancio call lun 25/5 PM o mar 26/5 mattina con Elena+Daniele per allinearsi prima del pitch 31/5.
- Email Carlo→Elena+Daniele paste-ready Outlook: focus duale strategia/pitch (5° cluster Imprese + hub editoriale community confermato + scaletta consolidata) + sito (refactor sezioni + affinamenti grafici/copy in coerenza con strategia).

**Numeri / fatti nuovi**: nessuno economico nuovo (sintesi stato lavoro post-19/5).

**Stato avanzamento sintetizzato in sessione**:
- Post-call 19/5 (esito "grandissimi" Daniele): [[Pitch Outline 18-5 — Strategia Angelini Academy Short]] ristrutturato 4 parti / 20 slide → base diretta PPTX 31/5.
- 5° percorso utente "Imprese" aggiunto + tassonomia OpCo allineata brief (Pharma · Industrial Tech · Consumer · Fater).
- Hub editoriale `/engaged-research` confermato community-only (WhatsApp Elena 20/5).
- Mockup `angelini-academy.vercel.app`: 5 percorsi navigabili + `/percorsi/imprese` con persona 3D Innovation Director + refactor atomo Industry Learning Ecosystem.
- HR & Business cluster con executive program LBS + LUISS BS + Future Skills Observatory.
- Hub editoriale doppio livello (preview pubblica + community) in execution.

**Output prodotti**: email Carlo paste-ready (TO Elena Chiti + Daniele Caporale).

**Task emersi**: patch [[Pitch Outline 18-5 — Strategia Angelini Academy Short]] con 14 feedback emersi 19/5 + dictionary cluster Elena v.012 da inserire in [[Brief Copy Sito per Claude Code|Brief Copy]]; conferma slot 25/5 o 26/5 da Elena/Daniele.

**Schede aggiornate**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] (Log 23/5 — già live-committato dall'agente §15 nella sessione successiva 51294add), [[60 - People/Elena Chiti|Elena Chiti]] (next_touchpoint), [[60 - People/Daniele Caporale|Daniele Caporale]] (next_touchpoint).

---

## Sessione 6 — `local_04146f40-cd34-471d-98e6-4551e233ff33` — Crowd platform email response

- **Durata stimata**: bassa (risposta thread email)
- **Progetti / aree toccate**: [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]] · [[60 - People/Lorena Cavecchi|Lorena Cavecchi]]

**Decisioni**:
- Risposta Lorena su thread "R: Crowd | Sessione Finale Test" — produzione video tutorial in spinta sul team di sviluppo (linguaggio §13 "team di sviluppo" — mai citare Soolutions per nome).
- Call formazione reparto **spostata a valle dei test** (coerente con stance "chiusura progetto entro fine mese, poi affianchiamo") — Carlo non si impegna sul timing nell'email.

**Numeri / fatti nuovi**: nessuno.

**Output prodotti**: email Carlo paste-ready Outlook (rispondi al thread, TO Lorena+Arianna+David, CC Federico+Simone).

**Task emersi**:
- 🆕 `- [ ]` #p1 Federico — video tutorial Crowd (anticipo richiesto)
- 🆕 `- [ ]` #p2 Carlo — call formazione reparto NoLoop (dopo chiusura test)

**Schede aggiornate**: [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]] (Log 22/5 — già live-committato §15), [[60 - People/Lorena Cavecchi|Lorena Cavecchi]] (storia interazioni 21-22/5).

---

## Sessione 7 — `local_51294add-7ea8-4ec9-b175-4073fbf6497f` — Angelini Academy pitch deck (rifondazione v2 23/5 sera)

- **Durata stimata**: alta (deliverable strategico)
- **Progetti / aree toccate**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] · [[60 - People/Elena Chiti|Elena Chiti]] · [[60 - People/Daniele Caporale|Daniele Caporale]]

**Decisioni** (rifondazione scaletta v1 → v2):
- **Governing thought nuova**: *"ecosistema integrato / hub unico che si autoalimenta e si espande grazie alle nostre iniziative — content, AI, community, attività editoriali"*. La regia editoriale-tecnica della v1 mattutina diventa il **motore** dell'ecosistema, non più la tesi principale.
- **Asse organizzativo Atto 2**: **3 anime** (Pubblica · Community · Area Riservata Gruppo interno) come nell'email Carlo→Elena+Daniele 23/5, **NON** 4 percorsi utente.
- **Capability + Case history spostate ad Atto 3 (Slide 11 dedicata)** — presidio rafforzato sui criteri gara Team 10% + Case 5%.
- **Walk-through unico tripartito ~20 min** anticipato da S8 (intro architettura+concept stilistico+storytelling), come da chiusura email Carlo.
- v1 mattutina (4 percorsi utente + governing thought "regia editoriale-tecnica") **superseded** — strutturalmente sostituita ma archivio audit del processo di rifondazione preservato nell'header del file v2 + sezione "Note finali" con tabella comparativa.

**Struttura finale**: 13 slide + walk-through unico (~45 min pitch + 15 min Q&A).
- **Atto 1 ANALISI** S1-S4 (~7 min, Daniele)
- **Atto 2 PROPOSTA** S5 tesi · S6 sinottico 15 iniziative · S7 3 anime · S8 intro architettura/stilistica/storytelling → **walk-through** (Apertura 2 + Pubblica 8 + Community 6 + Riservata 3 + Chiusura 1) → S9 KPI per anima (~28 min, Carlo conduce + Daniele framing)
- **Atto 3 ESECUZIONE** S10 roadmap+matrice priorizzazione+slide del NO · S11 capability+case history · S12 governance · S13 quotazione modulare+closing (~10 min)

**Numeri / fatti nuovi (mapping gara)**:
- 75% qualitativo presidiato con ridondanza (Strategia 30% + Contenuto 30% + Creatività 15%) → coerente con criteri gara.
- 8 decisioni aperte: pricing definitivo, scelta fornitore tecnico, regia pitch live, slide del NO calibrazione, sponsor cliente SPOC, case history validation, allegati SEO+Accessibility, backup tecnico walk-through.
- Pre-pitch checklist tecnico walk-through: smoke test rete sala Angelini · hotspot 4G/5G backup · 10 screenshot fallback organizzati per anima 4+3+3 · prove cronometrate × 3 · browser pulito · adapter HDMI/USB-C.

**Output prodotti**:
- [[20 - Projects/Futuritaly/Angelini Academy/Pitch Deck Scaletta McKinsey 23-5|Pitch Deck Scaletta McKinsey 23-5]] sovrascritta con v2 (v1 documentata nell'header + tabella comparativa Note finali)

**Task emersi (delta su 10 task aperti pitch 31/5)**: 10 task aperti §Pitch 31/5 aggiornati ai numeri slide v2 + 1 task nuovo per sponsor cliente SPOC.

**Schede aggiornate** (live commit §15 già applicato):
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]: nuova entry §Log "23/5 sera — rifondazione v2" con mappatura numerazione v1→v2, bullet §Documenti collegati Layer 2 riscritto, 10 task §Pitch 31/5 aggiornati + 1 task nuovo, `updated: 2026-05-23 sera`, `last_doc_added` ridichiarato.

**Nodo aperto operativo**: email Carlo→Elena+Daniele scaletta pitch del 23/5 non ancora archiviata in `00 - Inbox/`. Decisione Carlo se tracciare.

---

## Continuation sessions

Continuation scan eseguito su top 10 user-initiated già indicizzate (escludendo peer scheduled tasks `pm-digest-mattutino`, `cowork-sessions-index`, `weekly-review-interactive`, `vault-link-checker`, `crm-velocity`, `moc-refresh`, `system-consistency-check`, `dashboard-refresh-manual`).

**Esito**: 0 continuation rilevanti nel window.

Note di dettaglio sulle sessioni controllate:
- `local_eaba3a8c` (Future Italy action plan, indicizzata 20/5): attività post-cron 22/5 = produzione email merge Lavinia↔Claudia per Osservatorio v2. **Overlap pieno con Sessione 4 di questo run** (`local_d3f9499f`) — già coperta come sessione nuova, no continuation.
- `local_972c4d6a` (Eye Cookies RL, indicizzata 22/5): attività 22/5 sera tardi = chiusura milestone "RL INVIATO AL TEAM DI SVILUPPO". Già coperto dal cron 22/5 che ha catturato la sessione stessa — no continuation post-cron.
- `local_832269f2` (Process call transcript F+S, indicizzata 21/5): touch-up frase email Marco Merli (italiano migliorato). Non vault-worthy come continuation autonoma.
- `local_51b0ba93` (Paolo project recap, indicizzata 21/5): touch-up email Roberta (3 righe). Non vault-worthy.
- `local_1653abdf` (3 emails, indicizzata 20/5): analisi Soolutions Osservatorio. Overlap totale con sessione c967ca15 già indicizzata 21/5 — no novità.
- `local_c967ca15` (Osservatorio AI proposal, indicizzata 21/5): sintesi più compatta del file Soolutions RIDOTTO. Stessa attività della sessione 1653abdf, già coperta.
- `local_6372e8ad` (Audit Achipont, indicizzata 21/5): touch-up frase call-to-action email Gigi. Non vault-worthy.
- `local_d7b38090` (Achipont draft, indicizzata 14/5): raccomandazione apertura nuova chat per audit indipendente — passaggio meta, no continuation operativa.

Nessuna continuation rilevante → conteggio `0 continuations` nell'entry Log.

---

### Conflict scan cross-sessione

Aggregazione delta proposti dalle 7 sessioni del run.

**Esito**: 0 conflitti rilevati.

Razionale: le 7 sessioni toccano schede largamente disgiunte (Eye Cookies / Federico-Simone / Eldis / Osservatorio / Angelini Academy / Crowd). L'unica scheda toccata da ≥2 sessioni è [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] (Sessione 5 + Sessione 7) ma:
- Sessione 5 è cronologicamente precedente (sintesi stato + email follow-up, no atomic-field change).
- Sessione 7 è successiva e tardi nella giornata (rifondazione v2 + atomic-field changes su `updated:` e `last_doc_added`).
- L'agente live §15 ha già applicato in Sessione 7 le patch atomic-field — Sessione 5 non propone delta atomic-field in conflitto.

Nessun checkbox in conflitto: chiusure proposte (#p1 Federico video Crowd nella Sessione 6, #p1 review RL Eye Cookies nella sessione 22/5 indicizzata) sono disgiunte per scheda.

---

### Checkbox reconciliation

Scansione `## Task aperti` su tutte le schede toccate.

**Esito**:
- Task chiusi auto in questo run: **0**
- Task annullati auto: **0**
- Task aperti scansionati totali: ~50 (cross 7 schede principali — distribuiti su Eye Cookies, Crowd, Osservatorio, Eldis, Angelini Academy, Lorena, Stefania).
- Task in ⚠️ Da triagiare: **0**

Razionale: tutte le sessioni del window hanno applicato vault commit live §15 con chiusura checkbox in-sessione (es. `#p1 review e firma RL` chiuso nella sessione `local_972c4d6a` indicizzata 22/5). Le nuove sessioni del 22-23/5 emettono `- [ ]` aggiunti (es. 4 nuovi task Eye Cookies in Sessione 1, 2 nuovi task Crowd in Sessione 6, 1 nuovo task SPOC Angelini in Sessione 7) ma NON producono prosa che chiuda task esistenti aperti su altre schede.

Nessuna chiusura silenziosa da questo task.

---

## ⚠️ Da triagiare

Nessun item da triagiare in questo run.

---

## Audit metadata

- **Trigger**: cron-22 (scheduled 2026-05-24 20:22 local CEST).
- **Window applicata**: estesa pragmaticamente per recupero gap 22/5 sera post-cron precedente → 24/5 sera (cron del 23/5 non eseguito, nessuna entry nel Log).
- **Sessioni filtrate dal candidate set** (peer scheduled tasks, no rilevanza): `local_0d6eeadd` Weekly review interactive (running), `local_c0bd8c9d` Vault link checker (running), `local_571f4ffa` Cowork sessions index, `local_267efa57` Cowork sessions index, `local_d91f2b91` PM digest, `local_7a518daa` PM digest, `local_4cfe3b9f` CRM velocity, `local_f860cca6` PM digest, `local_4ee18fce` PM digest.
- **Schede patchate da questo task** (cross-reference + link a indice giornaliero — patch operative già live-committate §15):
  - [[20 - Projects/NOT/Eye Cookies|Eye Cookies]]
  - [[20 - Projects/Eldis/Eldis Compilatore|Eldis Compilatore]]
  - [[20 - Projects/Futuritaly/Osservatorio Strategico|Osservatorio Strategico]]
  - [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]]
  - [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Master Facts Sheet**: NON toccato in questo run. Decisione "no markup evolutive Eldis" della Sessione 3 è policy di scopo limitato (eccezione esplicita, non sostituisce §2.2 CLAUDE.md) — non richiede patch al Master.
