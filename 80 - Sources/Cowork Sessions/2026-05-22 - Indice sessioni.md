---
type: index
date: 2026-05-22
created: 2026-05-22
updated: 2026-05-22
session_count: 1
continuation_count: 1
---

# Indice sessioni Cowork — 2026-05-22

> Indicizzazione automatica del task `cowork-sessions-index` (cron `22 20 * * *`, 1x al giorno alle 20:22). Finestra: 20:22 di ieri (2026-05-21) → 20:22 di oggi (2026-05-22). Run trigger: **cron-22**.

## Sessione 1 — `local_972c4d6a-07a7-4781-a853-468093d6a858` — Eye Cookies requirement log

- **Durata stimata**: lunga (giornata completa, idle a fine giornata)
- **Messaggi**: substantial (>20 turni assistant, multi-fase: prep doc + RL v1 + RL v2.3 + bozza email Germano)
- **Progetti coinvolti**: [[20 - Projects/NOT/Eye Cookies|Eye Cookies]]
- **Persone coinvolte**: [[60 - People/Germano Marano|Germano Marano]] · [[60 - People/Massi Sinigaglia|Massi Sinigaglia]] · [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]] · [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]] · [[60 - People/Andrea Pazienza|Andrea Pazienza]]

### Decisioni prese

- **Tempistiche RL semplificate**: rimosse settimane da Piano di lavoro e Info progetto. Mantenuto unico riferimento: **go-live target settembre 2026**.
- **Esclusione esplicita dal MVP**: «direzione dello sguardo» subordinata a Open Q8 (capability HW sensori) — RF4.2 + RF5.2 (manipolato dedotto da tempi permanenza, non da gaze tracking).
- **Separazione architetturale Microlog**: RF3.1 separa write real-time (registrazione totem) vs read batch G+1 (dati comportamentali).
- **RF9.1 chiarito**: configurazione tecnica sensori avviene nel MVP a livello tecnico (a carico team di sviluppo HeyAI).
- **Auth Microlog**: ambiguità token statico/JWT esplicitata (rinviata a Open Q6).
- **Endpoint principali Microlog**: aggiunto terzo endpoint «azione completata».
- **Fedeltà testo Germano preservata**: 0 differenze colonna Requisito (B) tra v2.2 e v2.3 — verifica programmatica passata.
- **Stile email (regola §2.1)**: «team di sviluppo» / «team tecnico» — mai citato Soolutions per nome nella bozza a Germano.
- **Invito Teams ricorrente giovedì 15:30 a Germano**: gated all'allineamento interno con Federico+Simone (prerequisito Carlo).

### Numeri / fatti nuovi

- **Requirement Log v1**: 3 fogli (Master Interno + Versione Cliente + Riferimenti). Scope MVP = **33 RFx.y totali** (17 richiesti cliente + 12 funzionali HeyAI + 4 non funzionali NF1-NF4). +17 RFx.y fuori scope MVP elencati per chiarezza.
- **Mapping RFx.y ↔ Moduli ↔ Fasi delivery**: Foundation (sett. 1-3) RF1.x/RF2.x/RF10.x/NF1-NF4 · Data Pipeline (sett. 4-6, Mod. 1+2+3) RF3.x/RF4.1 · AI Engine (sett. 7-9, Mod. 4) RF4.2/RF4.3/RF5.1/RF5.2/RF5.4 · Targeting & Ads (sett. 10-12, Mod. 5+6) RF7.1-7.4 · Go-Live (sett. 13-15) RF8.2/RF8.3.
- **RL v2.3 modifiche evidenziate** con fill giallo tenue `#FFFFCC`: 29 righe highlight in Riferimenti, 10 celle highlight su Master+Cliente (solo le 5+5 note Microlog/RF9.1). 50 RFx.y count invariato. Recalc finale pulito (zero errori formula).
- **3 nuove Open Questions critiche**: Q6 Modello auth Microlog (token statico vs JWT) · Q7 SLA tecnico Microlog (rilascio 22/05 senza preavviso — rischio operativo) · Q8 Capability HW sensori per direzione sguardo.
- **2 nuove sezioni in Riferimenti**: «Decisioni architetturali» (Stack AI + Multi-tenant) · «Glossario» (7 termini: Tenant, Pop-up store, Badge, UID, Carrello virtuale, Sensore, Trigger).
- **Sensore Microlog parametri concreti (mai citati nella scheda prima di oggi)**: `SENSOR_ID: 80:1F:12:D5:67:B9`, `TRIGGER_ID: 0`, UID = email utente nel totem, login JWT → POST `/upload/trigger`.
- **Microlog rilascio 22/05 ha cambiato URL E credenziali**: nuove `germano.marano` / `Tempo123456!` su `https://tracking.microlog.it/` (anche per API). API disponibili sia su nuovo che su vecchio indirizzo "per ora" → rischio break se sviluppo va contro vecchio endpoint.
- **`geometry_name` del tavolo** ancora pending da Microlog dal 02/03/2026 — parametro POST `/upload/trigger` necessario per implementare il trigger correttamente.
- **UID opaco** proposto Carlo+Simone 26-27/02 mai confermato da Germano/Microlog: rischio bloccante GDPR se Microlog impone email come UID (oggi è così).
- **Vecchio indirizzo Federico identificato**: `info@federicosaladino.it` (usato fino a febbraio 2026 prima del passaggio a `federico@soolutions.io`) — utile per future search Outlook su thread storici.

### Output prodotti

- [Eye Cookies - Requirement Log MVP.xlsx (working/root)](computer:///Users/carlosanvoisin/claude/Eye%20Cookies%20-%20Requirement%20Log%20MVP.xlsx)
- [Eye Cookies - Requirement Log MVP v2.3 (archivio)](computer:///Users/carlosanvoisin/claude/80%20-%20Sources/Files/Eye%20Cookies/Eye%20Cookies%20-%20Requirement%20Log%20MVP%20v2.3.xlsx)
- [Allegato 1 — Offerta HeyAI Eye Cookies MVP](computer:///Users/carlosanvoisin/claude/80%20-%20Sources/Files/Eye%20Cookies/)
- [Allegato 2 — Chiarimenti tecnici e operativi](computer:///Users/carlosanvoisin/claude/80%20-%20Sources/Files/Eye%20Cookies/)
- [Allegato 3 — NOT EYE cookie requisiti generali e MVP](computer:///Users/carlosanvoisin/claude/80%20-%20Sources/Files/Eye%20Cookies/)
- [Prep doc Contesto Eye Cookies pre-requirement log](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-22%20-%20Contesto%20Eye%20Cookies%20pre-requirement%20log.md)
- [BOZZA Risposta Germano nuove credenziali Microlog + richiesta call](computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-22%20-%20BOZZA%20Risposta%20Germano%20nuove%20credenziali%20Microlog%20+%20richiesta%20call%20Microlog.md)
- [Scheda Eye Cookies aggiornata](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/NOT/Eye%20Cookies.md)
- [Scheda Germano Marano aggiornata](computer:///Users/carlosanvoisin/claude/60%20-%20People/Germano%20Marano.md)

### Citazioni rilevanti

- **Microlog → Germano** (rilascio 22/05, riportato a HeyAI): *"Al momento le API sono disponibili sia al nuovo indirizzo che al vecchio. Provvederemo a brevissimo ad inoltrare alcuni dettagli su come procedere alla migrazione anche delle API."* — fonte ambiguità tecnica che giustifica Open Q7 SLA.
- **Germano → Carlo**: *"vi chiedo la cortesia di scaricare tutti i dati scaricabili dalla dashboard (credenziali sotto), così da avere uno storico offline utile per i test anche se abbiamo rinnovato già il contratto con Microlog"* (richiamo 14/5, contesto per RL v2.3 backup offline).
- **Simone (canale interno F+S)**: scheletro applicativo Eye Cookies in fase avanzata + backup pregresso disponibile, ma **serve breve allineamento tecnico con Microlog** prima di proseguire — input determinante per la richiesta call tecnica nella bozza email Germano.

### Task emersi

- **#p1 Carlo**: review e firma Requirement Log v1 (`Eye Cookies - Requirement Log MVP.xlsx`). Validare scope MVP (33 RFx.y) e Open Questions con team di sviluppo prima di condividere la versione cliente con Germano/Massi.
- **#p1 Carlo**: recuperare via Outlook l'allegato `Documentazione API XDC.pdf` (email Germano 03/02 + 25/02, thread «Focus EYE cookie») e salvarlo in `80 - Sources/Files/Eye Cookies/`.
- **#p1 Carlo**: girare al team di sviluppo le NUOVE credenziali Microlog (rilascio 22/05) — endpoint sviluppo da migrare per evitare break futuro.
- **#p1 Carlo**: inviare email risposta a Germano (bozza pronta `00 - Inbox/`).
- **#p1 Carlo**: allinearsi con Federico+Simone su disponibilità giovedì 15:30 ricorrente — prerequisito per mandare invito Teams a Germano.
- **#p1 Carlo**: a valle conferma F+S, mandare invito Teams ricorrente settimanale a Germano (giovedì 15:30) — prima call entro questa settimana.
- **#p1 Carlo**: a valle indicazione Germano, organizzare **call tecnica con Microlog** (Federico+Simone + Germano + Microlog) per verifica aggiornamenti/vincoli pre-implementazione.
- **#p1 Carlo**: chiedere a Germano il `geometry_name` del tavolo (pending da Microlog dal 02/03/2026).
- **#p1 Carlo**: chiedere a Germano conferma su UID opaco vs email utente (bloccante GDPR se Microlog impone email).
- **#p2 Carlo**: chiudere le 5 Open Questions critiche elencate nel foglio Riferimenti del RL (UID GDPR, geometry_name, rilocazione sensori, ownership totem, integrazione Odoo).

### Schede aggiornate

- [[20 - Projects/NOT/Eye Cookies|Eye Cookies]] — Log + Sessioni Cowork correlate + audit metadata.
- [[60 - People/Germano Marano|Germano Marano]] — Sessioni Cowork correlate + audit metadata.

## Continuation sessions

Sessioni già indicizzate in giorni precedenti riaperte in window con attività vault-worthy nuova. Patch chirurgiche sulle schede già propagate dall'agente live §15 CLAUDE.md; questa sezione è solo cronistoria — NON re-patcha le schede, NON aggiunge entry all'indice consolidato.

### `local_832269f2` — Process call transcript with Federico and Simone (prima indicizzazione: [[2026-05-21 - Indice sessioni|→ link]])

**Conferma AWS SES out of sandbox per Crowd**: ricevuta email AWS CS Digital Messaging che chiude formalmente la richiesta di rialzo limiti SES per dominio `noloop.eu` (Europe Ireland, eu-west-1). Nuova quota giornaliera **50.000 messaggi/giorno**, send rate massimo **14 messaggi/secondo**, account spostato fuori dalla sandbox SES con effetto immediato. I numeri combaciano puntualmente con il test SES che Simone aveva fatto in serata dal dominio `noloop.eu`. **Lato setup email di Crowd il blocco AWS è definitivamente sbloccato** — Carlo può confermare a Marco Merli che è tutto corretto.

**Schede toccate dal live agent (per audit, non re-patchare)**: nessuna — l'agente live non ha propagato la conferma alle schede [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]] né [[60 - People/Marco Merli|Marco Merli]] (entrambe `updated: 2026-05-20`). Cronistoria del fact resta solo qui nel daily index per ricerca futura. **Da triagiare con Carlo**: valutare se patch chirurgica su Crowd Log post-fatto (cambio di stato Wave 2/Crowd: AWS sandbox exit ufficiale 22/5).

**File prodotti in window**: nessun nuovo deliverable file — solo conferma email lato cliente a Marco Merli (testo nella sessione, non salvato come file).

### Conflict scan cross-sessione

Nessun conflitto rilevato (1 sola sessione nuova nel run; le continuation non concorrono per definizione su campi atomici).

### Checkbox reconciliation

- **N task chiusi auto**: 0 — il live agent §15 ha già propagato le chiusure inequivocabili (es. `[x] PDF NOT EYE cookie requisiti caricato 22/5` già visibile nella scheda Eye Cookies con audit `→ ✅ chiuso 22/5`).
- **N task annullati auto**: 0.
- **N task in ⚠️ Da triagiare**: 0.
- **N task aperti scansionati totali**: ~18 sulla scheda Eye Cookies (tutti pertinenti, nessuno trigger di chiusura inequivocabile nella nuova prosa appendata dal mio run).

## ⚠️ Da triagiare con Carlo

- **Continuation `local_832269f2` lato vault**: la conferma AWS SES sandbox-exit Crowd è arrivata oggi (22/5) ma le schede [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]] e [[60 - People/Marco Merli|Marco Merli]] restano `updated: 2026-05-20`. Decidere se aggiungere riga Log a Crowd "**2026-05-22 — AWS SES out of sandbox confermato** (50K msg/day, 14 msg/sec, eu-west-1)" + bump `last_contact` Marco Merli a 2026-05-22.
- **Open Q7 SLA tecnico Microlog**: rilascio 22/05 senza preavviso ha cambiato URL+credenziali ed è citato come «migrazione in arrivo» senza data. Valutare se inserire in [[99 - System/Open Questions]] come nuova entry numerata o se è sufficiente la traccia nel foglio Riferimenti del RL.
- **Sessioni `local_813cdef7` (Microlog access and meeting coordination) e `local_b3255bee` (Email forwarding pricing risk review)**: entrambe **running** al momento dell'esecuzione del task — non indicizzate in questo run, candidate per il prossimo run quando saranno idle.
