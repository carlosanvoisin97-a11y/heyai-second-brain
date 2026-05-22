---
type: resource
product: Crowd
client: NoLoop
status: living-doc
created: 2026-05-21
updated: 2026-05-21
aliases:
  - Crowd Product Description
  - Crowd Capability Overview
  - Crowd Pitch Description
related_project: Crowd
source_of_truth: "SharePoint — AI Solutions/Applicativo Gestione Eventi - Crowd/Requirement_Log_Crowd.xlsx (48 REQ ufficiali)"
---

# 📚 Crowd — Product Description

> **Scheda viva**: fonte autoritativa per ogni descrizione di Crowd verso esterno (gare, brochure, email cliente, pitch). Derivata dal Requirement Log ufficiale su SharePoint (48 requisiti REQ-001 → REQ-048). Ogni descrizione futura di Crowd parte da qui, NON si improvvisa.
>
> **Framing strategico**: Crowd è posizionato come ecosistema integrato a tendere (Wave 1 live + Wave 2 in arrivo + integrazione con OnSite app partecipanti). Linguaggio brochure/cliente, NON technical PM brief. Per stato tecnico operativo e task aperti → [[Crowd]].

## 1. Cos'è Crowd (posizionamento sintetico)

**Crowd è la piattaforma AI proprietaria per la gestione end-to-end di grandi eventi corporate** — dall'invito alla registrazione, dai viaggi all'esecuzione on-site, fino alla rendicontazione. In un unico ambiente automatizza tutte le attività logistiche ad alto volume che oggi richiedono ore di Excel e coordinamento manuale, e mette a disposizione di ogni partecipante un'esperienza personalizzata e assistita dall'intelligenza artificiale.

## 2. Il valore: doppio focus

**Per i partecipanti** — un evento curato in ogni dettaglio: contenuti su misura, itinerario individuale, assistenza in tempo reale via AI, app dedicata sul telefono, check-in veloce con QR Code.

**Per chi gestisce l'evento** — eliminazione del lavoro ripetitivo, azzeramento degli errori di assegnazione, output pronti per i fornitori, visione real-time su tutto: registrazioni, comunicazioni, presenze, incassi.

## 3. Capability per area (linguaggio cliente)

### 🎨 Registrazione e Landing Page

* **Landing page brandizzate per ogni evento** (REQ-003, REQ-004, REQ-024) — pagina di registrazione su misura, builder drag-and-drop, link univoco per evento
* **Form intelligente** (REQ-005, REQ-006, REQ-007, REQ-030) — campi condizionali, gestione accompagnatori, privacy GDPR-compliant, importazione opzioni da Excel
* **Esperienza utente fluida** (REQ-025, REQ-027) — salvataggio progressivo (riprendi da dove hai lasciato), compatibilità autocompilazione browser

### 👥 Gestione Partecipanti

* **Scheda 360° per ogni partecipante** (REQ-041) — dati anagrafici, status, viaggio, hotel, attività, note, pagamenti, file allegati: tutto in un'unica vista
* **Dashboard filtrabile in tempo reale** (REQ-001, REQ-011) — visione d'insieme su tutti gli eventi e partecipanti
* **Status journey completo** (REQ-008, REQ-012) — Pending / Waiting / Attending / Checked-in / Checked-out / Not Attending
* **Riconoscimento "delta" su liste aggiornate** (REQ-039) — il sistema confronta automaticamente la nuova lista cliente con quella esistente ed evidenzia solo i nuovi inserimenti
* **Gestione accompagnatori** (REQ-029) — collegamento famiglie / nuclei / colleghi con dati condivisi
* **⭐ Check-in con QR Code univoco** (REQ-013, REQ-014, Wave 2) — ogni partecipante ha il suo QR personale, valido anche per l'accesso alle attività extra

### 🚚 Logistica (viaggi, hotel, gruppi)

* **⭐ Grouping intelligente con AI** (REQ-015, Wave 2) — un agente AI suggerisce automaticamente i raggruppamenti ottimali su scenari complessi: 2.000 ospiti su più hotel, divisione per seniority, vincoli di capienza
* **Gruppi dinamici e filtri smart** (REQ-047, REQ-048) — combinazioni libere su qualsiasi campo + alert automatico se il gruppo supera la capienza della risorsa assegnata
* **Gestione viaggi end-to-end** (REQ-032, REQ-033, REQ-034, REQ-035, REQ-042, REQ-043) — import massivo tratte da Excel, assegnazione automatica o manuale di itinerari (anche con scali multipli), contatore posti disponibili
* **⭐ Suggerimento Hub di Trasporto** (REQ-046, Wave 2) — l'AI suggerisce l'aeroporto/stazione di partenza ottimale per ogni partecipante a partire dalla sua città, analizzando tempi di percorrenza e opzioni di viaggio
* **Abbinamento camere intelligente** (REQ-044) — gestione di accompagnatori e compagni di stanza (anche colleghi indipendenti)
* **Associazione risorse logistiche ai gruppi** (REQ-026) — assegna hotel, voli, attività a interi gruppi con un click

### ✉️ Comunicazione Multicanale

* **Editor email massive con AI generativa** (REQ-016, REQ-017, REQ-018, REQ-019) — template con campi dinamici, contenuti logistici personalizzati (itinerario, attività, biglietti), logiche condizionali per messaggi differenziati per profilo
* **Allegati personalizzati per destinatario** (REQ-045) — ogni ospite riceve il suo biglietto, il suo voucher, il suo documento, in automatico
* **Canale WhatsApp ufficiale verificato** (REQ-021) — comunicazioni massive direttamente in chat
* **⭐ Assistente AI conversazionale via WhatsApp** (REQ-022, Wave 2) — ogni partecipante chiede in tempo reale "A che ora parte il mio volo?", "Dov'è la mia stanza?", "A quale sessione sono iscritto?" e riceve risposta immediata, personalizzata, 24/7

### 📱 App Partecipanti (modulo OnSite, Wave 2 €35K)

> **Nota**: OnSite è un modulo separato dell'ecosistema HeyAI-NoLoop, completamente integrato con Crowd via feed dati. In sviluppo luglio-ottobre 2026. Per la gara va presentato come parte dell'esperienza ospite.

* **App dedicata installabile sul telefono dell'ospite** (PWA, no store)
* **Programma personale** con sessioni assegnate e timeline su misura
* **Navigation in-venue** — mappa location, room finder, transfer
* **Q&A AI in-app** — assistente conversazionale per domande contestuali su orari, luoghi, logistica
* **Notifiche personalizzate** push in tempo reale
* **Reporting onsite** — capacity / actual attendance / timing live per lo staff

### 💳 Pagamenti

* **Integrazione Stripe** (REQ-009, REQ-010, Wave 2) — pagamenti per eventi a quota, aggiornamento automatico dello status post-transazione
* **Posizionamento commerciale**: trasforma Crowd in prodotto in subscription vendibile ad altre agenzie, con NoLoop come partner commerciale

### 📊 Reportistica per Fornitori e Direzione

* **Rooming List Hotel formattata** (REQ-036, REQ-037, Wave 2) — file pronto per l'hotel: nome ospite + accompagnatore sulla stessa riga, tipo camera, date check-in/out, conteggio giornaliero ospiti, report multi-hotel consolidato
* **Liste Operative on-site in PDF brandizzato** (REQ-038, Wave 2) — Transfer List per autisti, Liste Accredito per hostess, ognuna con solo le info pertinenti per quel fornitore
* **Export personalizzato e filtrato** (REQ-031) — il team Segreteria sceglie colonne e filtri, niente più rielaborazione Excel manuale
* **Reportistica avanzata aggregata** (REQ-023, Wave 2) — statistiche cross-evento per analisi costi e negoziazione fornitori ("quante camere abbiamo prenotato in questo hotel quest'anno?")

### 📄 Gestione Documenti

* **Caricamento biglietti su scheda partecipante** (REQ-040) — archivio centralizzato
* **Split automatico PDF cumulativi** (REQ-020, Wave 2) — il sistema processa un PDF unico con N biglietti, li separa e li associa automaticamente al passeggero corretto

## 4. Cosa è live oggi vs cosa è in arrivo

| Stato | Capability |
|---|---|
| **🟢 Wave 1 — Live in produzione** | Landing brandizzate · Form builder · Form intelligente · Dashboard partecipanti · Scheda 360° · Email massive con AI · WhatsApp transazionale · Gestione viaggi (import + assegnazione) · Gruppi dinamici con filtri · Delta liste · Export personalizzato · Allegati personalizzati · Salvataggio progressivo |
| **🟡 Wave 2 — In arrivo (giugno-ottobre 2026)** | QR Code check-in · Agente AI per grouping logistico · Agente AI conversazionale WhatsApp · Suggerimento Hub di Trasporto · Integrazione Stripe pagamenti · Split automatico PDF biglietti · Rooming List Hotel formattata · Liste operative PDF brandizzate · Reportistica aggregata · Itinerari automatici (matching algoritmo) · App OnSite (modulo dedicato) |

## 5. Descrizioni paste-ready

### Versione breve (~50 parole) — per email rapida, slide singola

> Crowd è la piattaforma AI di NoLoop per gestire grandi eventi corporate dall'inizio alla fine: registrazione, viaggi, hotel, comunicazioni, programma. In un unico strumento automatizza la logistica con l'intelligenza artificiale e offre a ogni partecipante un'esperienza personalizzata, con un'app dedicata e assistenza in tempo reale.

### Versione media (~150 parole) — per brochure, sezione presentazione, pitch deck

> **Crowd: ogni evento, più semplice da gestire e più memorabile da vivere.**
>
> Crowd è la piattaforma AI di NoLoop per la gestione end-to-end di grandi eventi corporate. In un unico ambiente raccoglie registrazione partecipanti, gestione viaggi e hotel, comunicazioni personalizzate, esecuzione on-site e rendicontazione — automatizzando con l'intelligenza artificiale tutte le attività logistiche ad alto volume.
>
> Per chi organizza l'evento: niente più Excel paralleli, gestione automatica di gruppi e itinerari su scenari complessi (anche oltre 2.000 ospiti), comunicazioni email e WhatsApp generate dall'AI, report pronti da inviare ai fornitori, dashboard real-time.
>
> Per i partecipanti: un'esperienza su misura dall'invito al rientro, un'app dedicata sul proprio telefono, check-in veloce con QR Code, e un assistente AI conversazionale disponibile 24/7 via WhatsApp per ogni domanda — dall'orario del volo al numero della camera.

### Versione estesa (~300 parole) — per gara, pitch ampio, documento commerciale

> **Crowd: la piattaforma intelligente che rende ogni evento più semplice da gestire e più memorabile da vivere.**
>
> Crowd è la piattaforma AI proprietaria di NoLoop per la gestione end-to-end di grandi eventi corporate — dall'invito alla registrazione, dai viaggi all'esecuzione on-site, fino alla rendicontazione. In un unico ambiente automatizza tutte le attività logistiche ad alto volume che oggi richiedono ore di Excel e coordinamento manuale, e mette a disposizione di ogni partecipante un'esperienza personalizzata e assistita dall'intelligenza artificiale.
>
> Il risultato è duplice: i partecipanti vivono un evento curato in ogni dettaglio, con contenuti su misura e assistenza in tempo reale; chi gestisce l'evento elimina il lavoro ripetitivo, azzera gli errori di assegnazione e arriva on-site con tutto pronto.
>
> **Per chi organizza l'evento**
> * Landing page brandizzate con form intelligente e gestione accompagnatori
> * Scheda 360° per ogni partecipante (dati, viaggio, hotel, attività, biglietti, pagamenti) in un'unica vista
> * Grouping intelligente con AI per scenari complessi: duemila ospiti su più hotel, divisione per seniority, vincoli di capienza
> * Suggerimento automatico dell'hub di partenza ottimale per ogni ospite a partire dalla sua città
> * Comunicazioni email e WhatsApp con contenuti dinamici generati dall'AI (itinerario, attività, biglietti personalizzati per ogni ospite)
> * Pagamenti integrati (Stripe)
> * Report già pronti per i fornitori: rooming list per hotel, transfer list per autisti, liste accredito per hostess
> * Dashboard real-time su registrazioni, comunicazioni, presenze, incassi
>
> **Per i partecipanti**
> * Esperienza personalizzata dall'invito al rientro
> * App dedicata dell'evento sul proprio telefono — programma personale, navigazione in loco, informazioni pratiche
> * Assistente AI conversazionale via WhatsApp e in-app: ogni ospite chiede in tempo reale "A che ora parte il mio volo?", "Dov'è la mia stanza?", "A quale sessione sono iscritto?" e riceve risposta immediata, 24/7
> * Check-in veloce con QR Code univoco, valido anche per le attività extra

## 6. Linguaggio: cosa usare e cosa NON usare

### ✅ Da usare (linguaggio brochure/cliente)

* "piattaforma AI proprietaria"
* "gestione end-to-end"
* "esperienza personalizzata"
* "assistente AI conversazionale"
* "duemila ospiti", "grandi eventi corporate"
* "automatizza la logistica"
* "in tempo reale"
* "scheda 360°"
* "app dedicata sul telefono"
* "QR Code univoco"
* "niente più Excel paralleli"

### ❌ Da NON usare (linguaggio tecnico/interno)

* "form builder custom" → di' "form intelligente"
* "merge tags" → di' "contenuti dinamici personalizzati"
* "grouping" da solo → di' "raggruppamenti intelligenti" o "creazione di gruppi"
* "REQ-XYZ" → mai citare gli ID
* "wave 1 / wave 2" → nelle gare di' "live in produzione" e "in roadmap evoluzione 2026"
* Nomi fornitori HeyAI (Soolutions, Tokio Studio) — sempre "team di sviluppo"
* "PWA" → di' "app dedicata installabile sul telefono"
* "API", "backend", "frontend", "MVP" — mai
* "Stripe" da solo → di' "pagamenti integrati"

## 7. Fonti

* **Requirement Log Crowd** (ground truth): SharePoint `HeyAi Noloop - AI Solutions/Applicativo Gestione Eventi - Crowd/Requirement_Log_Crowd.xlsx` — 48 requisiti REQ-001 → REQ-048
* [[Crowd]] — scheda operativa con stato, task, log call, bug
* [[OnSite]] — modulo separato AI Event Companion PWA (Wave 2 €35K)
* [[_Wave 2 NoLoop|Wave 2 NoLoop]] — bundle €300K e mapping moduli
* [[Numeri Ufficiali Roadmap 2026]] — fonte numeri ufficiali
* Email Carlo → Laura Zaghi 21/5/2026 "Descrizione Crowd - Piattaforma gestione eventi AI" (versione audience interno NoLoop)
* PDF "Noloop_Proposta di Investimento AI_180925.pdf", "Noloop_Proposta Investimento_Requisiti Aggiuntivi.pdf", "Noloop_Proposta Roadmap AI 2026.pdf" — versioni proposta cliente

## 8. Versioning

* **v1 (21/5/2026)** — creata da audit post-feedback Carlo. Derivata da Requirement Log SharePoint (48 REQ) + 3 PDF Proposta + scheda Crowd.md + scheda OnSite.md. Framing strategico B+C (piattaforma a tendere + ecosistema integrato Crowd + OnSite + AI).
* Aggiornamenti futuri: ogni nuova REQ aggiunta al Requirement Log SharePoint deve essere riportata qui (con descrizione cliente-ready) entro 7 giorni dall'approvazione.

## Sessioni Cowork correlate

- 2026-05-21 — `local_b15751fe` — Write platform description for No Loop: creazione di questa scheda autoritativa da audit post-feedback Carlo, framing B+C, 3 versioni paste-ready 50/150/300 parole + vocabolario "da usare / da non usare" → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 3 — `local_b15751fe-a38c-42ab-9fa0-55d7b08de276` — Write platform description for No Loop]]
