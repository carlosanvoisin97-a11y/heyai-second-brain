# Recupero attività e task di Carlo

**Created:** 22/04/2026, 01:38:56
**Updated:** 22/04/2026, 01:41:16
**Exported:** 30/04/2026, 03:30:22
**Model:** claude-opus-4-7
**Link:** [https://claude.ai/chat/53e8158b-3f96-4265-9fa6-e56300188734](https://claude.ai/chat/53e8158b-3f96-4265-9fa6-e56300188734)

---

## User
**2026-04-21T23:38:57.671Z**

Utilizzando la tua memoria, riesci a recuperare in maniera estensiva tutti i prossimi passi e tutte le attività e Task che deve completare Carlo e analizzando quanto è più chat recenti e gestire da carro possibili.

## Claude
**2026-04-21T23:41:16.008Z**

### Thinking
````
 Carlo wants me to pull together all his pending tasks and next steps by reviewing his recent conversations to give him a complete overview of what he needs to work on across his projects.
````

### Thinking
````
 I'm pulling together context from earlier conversations and want to search through a few specific areas to make sure I'm not missing anything on what's currently in progress.
````

### Thinking
````
 Let me verify I have complete coverage by reviewing the Eldis and BrainLab contexts along with a few other specific areas I want to double-check.
````

### Thinking
````
 Now I'm pulling together a comprehensive overview of all Carlo's pending work organized by project, and I'll present it in Italian since that's his preference. I'm structuring everything around the major initiatives like the NOLOOP Wave 2 investment proposal and the various ongoing projects across the portfolio. Sto pensando a come organizzare questa risposta per Carlo - lui vuole un recap estensivo di tutti i prossimi passi e attività, quindi ha senso strutturare per progetto con le azioni pendenti chiare, anche se devo evitare un formato eccessivamente puntato. Dato che ha già detto che non importa se non sono sicuro su certi step completati, posso compilare tutto e segnalare dove c'è incertezza, mantenendo un tono naturale e conversazionale piuttosto che una lista rigida.
````

Ciao Carlo. Ho incrociato le chat più recenti (15-21 aprile) con la memoria storica. Ecco il quadro completo organizzato per progetto, con priorità di gestione. Dove non sono certo che un'azione sia stata chiusa, la tengo comunque per sicurezza.

---

# 🔴 PRIORITÀ ALTA — QUESTA SETTIMANA

## 1. NOLOOP — Wave 2 (€315K, proposta inviata)

**Stato:** Proposta chiusa a €315K bundle, presentazione a Laura Garbarino + Paolo Donzelli calendarizzata venerdì mattina. Architettura approvata, Gantt approvato.

**Prossimi passi:**
- Conferma/follow-up post-presentazione Paolo+Laura (riscontro commerciale)
- Chiudere IP ownership tra HeyAI e Federico/Simone — **rimane il nodo irrisolto più critico**
- Inviare a Andrea Pasquali il brief Wave 2 per quotazione benchmark indipendente (come concordato nella call)
- Firma contratto e partenza (timeline marzo–novembre 2026, pagamento 35/30/35)
- Requirement Log 83-113 come annex contrattuale

## 2. NOLOOP Wave 1 — chiusura operativa

**Email inviata a Federico e Simone (21 aprile) in attesa di risposta su:**
- **Minutes:** status ultimi miglioramenti, tempistiche messa in produzione, chiusura fix Wrike per ultima tranche
- **LeadMe bug Simona:** Bug #1 (navigazione) fixato; Bug #2 (eliminazione contatti) — Federico deve testare con utente creato apposta, tu devi scrivere a Simona per comunicare fix e fissare sessione di replica
- **Crowd:** ultime funzionalità da finalizzare e deployare, data go-live
- **Compilatore Eldis:** proposta economica manutenzione + sviluppi extra da presentare a Stefania
- **Piano operativo NOT + Wave 2:** milestone, dipendenze, priorità partenza
- **Quotazioni:** Osservatorio FuturItaly (IP full-transfer) + PresidIA (R1/R2)

**Email cliente già inviate (o da verificare se inviate):**
- Email a Arianna/Lorena per testing Crowd con i ~20 feedback (rooming, transfer, reporting, import/export)
- Email a Stefania/Marta per testing Eldis
- Email recap call Federico/Simone

## 3. NOT (Noloop On Trade) — sito web, pre-go-live

**Vero blocker unico:** il form contatti non invia. Da chiudere PRIMA del DNS.

**Blocco A — Input dal cliente (Paolo/Germano) ancora da ottenere:**
1. Casella `info@noloopontrade.eu` attivata (per testare Web3Forms)
2. Casella `privacy@noloopontrade.eu` attivata
3. Account Web3Forms creato + access_key
4. Calendly di Germano configurato (login con profilo Microsoft) + URL evento one-on-one
5. Pagina LinkedIn company NOT creata e pubblicata
6. Account GA4 + Measurement ID
7. Email DPO per Privacy
8. URL canonici e OG per SEO

**Blocco B — Modifiche codice (unica tornata di deploy):** switch Formspree→Web3Forms, Calendly URL, LinkedIn URL, telefono 02 78656523 su ContattiPage, placeholder DOMINIO in 3 file, coerenza email trade@ vs info@, verifica Instagram, snippet GA4 in index.html, placeholder Meta Pixel.

**Blocco C — Privacy/Cookie:** il cliente ha dato OK a Iubenda (€72/anno). Decidere se andare subito su Iubenda o fare prima aggiornamento manuale (rimuovere Supabase, aggiungere Web3Forms/Google Maps/GA4, DPO Noloop). Titolare del trattamento = NOT S.r.l. (non Noloop).

**Blocco D:** Migrazione DNS Aruba → Hostinger, test finale, verifica og:tag.

**Residui tecnici:** mobile testing WhatWeDoSection (auto-movement) + PlaceToBizSection (sticky iOS Safari), pulizia duplicato ServiziPage.jsx vs ServicesPage.jsx.

---

# 🟠 PRIORITÀ MEDIA — PROSSIME 2 SETTIMANE

## 4. PRESIDIA — proposta a Marco Murolo

**Stato:** Proposta commerciale a Marco NON ancora inviata.

**Next steps:**
- Attendere benchmark Andrea Pasquali sui 3 punti tecnici critici (OCR cedolini, multi-tenancy, RAG/KB)
- Inviare proposta a Marco con 3 opzioni commerciali: (a) acquisto IP, (b) licenza esclusiva + revenue share, (c) ibrido con buyout a tempo
- Chiarire in call (non via email) la contraddizione staffing parametrico (doc v2 vs screen map)
- Formalizzare strategia IP interna: HeyAI acquista IP da Federico/Simone, cede a Marco con upfront ridotto + rev-share
- Strategia MVP 3 release per chiudere al price-point target di Marco

## 5. FUTURITALY — multi-workstream

**Sito web (React v6):**
- Attesa risposta di Claudia sulla struttura "5 Aree di Intervento" (mandare integrazione rapida con formula "in assenza di indicazione diversa procediamo")
- Brand manual / palette / font definitivi dal cliente
- Rielaborazione contenuti dal cliente secondo architettura concordata
- Call presentazione concept (da fissare formalmente — era schedulata 13 aprile)
- Post approvazione: 2-3 settimane a go-live

**Osservatorio Strategico AI:**
- Allineamento Federico/Simone su nuovo modello IP full-transfer al cliente (vincolo bando MEF)
- Nuovo costo di sviluppo con funzionalità aggiuntive (input multi-formato, agente conversazionale)
- Definizione formula partnership commerciale/rev-share sostenibile per sviluppatori
- Proposta rivista entro settimana con nuovo modello IP, prezzo, rev-share
- Attesa business case da FuturItaly (pricing, target, subscription)
- Esempi input/output dal team FuturItaly per calibrare l'AI
- Conferma definitiva clausola IP nel bando MEF

**FuturKids / Magic Journey:**
- Lettura approfondita brief
- Attesa caso d'uso pilota da FuturItaly
- Analisi tecnica + fattibilità nei €38K di budget
- Mini-proposta esplorativa solo dopo caso d'uso

**CRM avanzato:** parcheggiato, da riprendere dopo osservatorio+sito, mantenere dialogo aperto con Leonardo.

## 6. BRAINLAB — Amazon PPC

**Azioni tecniche:**
- **BOOST Loose-Match:** ridurre bid a €0.40 (da €0.55) per fermare emorragia budget
- **FOCUS:** non toccare (Loose-Match €0.45, Complements €0.14 — MVP con ROAS 71.5)
- Verifica efficacia negative keyword ultimo round (possibile problema encoding/caratteri)
- Prossimo Search Term Report: biweekly routine stabilita

**Azioni listing (livello 2, il lavoro vero):**
- Attivare coupon Amazon 10-15% per competere col "-15% abbonamento" dei competitor
- Attivare "Iscriviti e Risparmia" se non ancora attivo
- Usare "Request a Review" per chiudere gap recensioni (40 vs 892 di Nutrilie vs 3.300 di Ginkgo WeightWorld)
- Valutare bundle più grande per migliorare €/unità (1,50€/pz vs 0,50€/pz competitor)

---

# 🟡 PRIORITÀ MEDIO-BASSA / NUOVI FRONTI

## 7. ACHIPOINT (nuovo cliente — edilizia/restauri)

- Email di accompagnamento al questionario discovery (bozza pronta, da personalizzare data — suggerivo "entro venerdì 1 maggio")
- Decidere se inviare anche alla responsabile operativa (Speaker 0 della call)
- Avviare in parallelo verifiche BDNCP/ANAC su categorie edilizia Lazio (impegno preso nella mail)
- Stima volume annuo opportunità 150-250K
- Check albi grandi committenti privati con esposizione pubblica (ADR, Poste ecc.)
- Alla ricezione del questionario → proposta tecnico-economica entro 5 giorni lavorativi

## 8. ELDIS — Raccolta Punti (Base44) + Content

**App Base44:**
- Verificare se app "Eldis Rewards" esistente è test vuoto o già partita
- Partire con Step 1.1 (schema dati + univocità fattura + P.IVA)
- Proposta commerciale già formalizzata (€8.000 Fase 1)

**Content Michele:** piano editoriale aprile chiuso; eventuali nuovi brief da Stefania/APE.

## 9. US UP × ANIA ("anIA") — potenziale subfornitore

Progetto del Salone Assicurazioni (Claudio Furlan capofila, Noloop hub). HeyAI citata come potenziale contributore:
- Chiarire con Bruno cosa intende con "logistica" ed "Eye Cookies" (unico aggancio esplicito)
- Non sovrappormi a BitForFun su EMOTI e PORTAL
- SYNTHEOS (avatar HeyGen + KB) è lo spazio più contendibile per HeyAI
- BAT PopUp è il use case dove hai più leva autonoma
- Preparare slide "Where HeyAI fits" per prossimo allineamento

## 10. ANDREA PASQUALI — benchmarking esterno

- Invio brief PresidIA + requirement log + link prototipo (attesa quotazione IP full-transfer)
- Invio brief Wave 2 Noloop (secondo progetto)
- Allineamento portfolio completo progetti
- Introduzione con Michele e Andrea Pazienza
- Lavoro più ampio su analisi organizzativa e break-even HeyAI

## 11. ELDIS (back-end Stefania/Marta) — Compilatore

- Proposta economica manutenzione ordinaria + sviluppi extra (dentro l'email a Federico/Simone) da strutturare per presentazione al cliente

---

# 🟢 PERSONALE

## 12. Viaggio compleanno fidanzata — 2-4 maggio

Itinerario Scanno–Sagittario–Tirino definito. Da confermare/prenotare:
- Contatto operatore canoe Tirino per lunedì 4 mattina (attività clou)
- Prenotazione ristorante Gli Archetti a Scanno (sabato sera)
- Decisione finale: dormire domenica notte a Scanno (più semplice) o spostarsi sul Tirino (più scenico per risveglio compleanno)

---

# ⚠️ NODI TRASVERSALI APERTI

1. **IP HeyAI vs Federico/Simone** — presente in Wave 2 Noloop, PresidIA e Osservatorio FuturItaly. Strategia unificata ancora da formalizzare.
2. **Time tracking** su tutti i workstream FuturItaly — non ancora implementato, coaching point aperto.
3. **Strategic coaching flag attivi:** troppo lavoro gratuito, esposizione revenue-share, lunghe monologhi in seconda metà call, preemptive justification pricing.
4. **Organigramma HeyAI + break-even** — lavoro con Andrea Pasquali in corso.

---

Su cosa vuoi partire? Ti propongo due opzioni:

1. Gestire **oggi** il follow-up critico — email scadenza Achipoint + decisione blocco Privacy NOT (Iubenda subito o aggiornamento manuale)
2. Preparare un **dashboard PM aggiornata** in file scaricabile (Excel o docx) con tutte queste voci e stato, owner, scadenza — utile da tenere aperta come tracker

