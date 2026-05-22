---
type: resource
product: LeadMe
client: NoLoop
status: in-use
created: 2026-04-30
updated: 2026-05-20
---

# 📚 LeadMe

> Prodotto interno HeyAI: piattaforma CRM commerciale con scraping LinkedIn automatico.
> Parte della suite [[Area - AI Solutions (Prodotti Interni)|AI Solutions]].
>
> _Aliases storici nelle chat: **"LITMI"** (errore di battitura/dittatura vocale → LeadMe)_

## Cliente in produzione

- **NoLoop** — super user: Laura, in test con team commerciale (incluso una "Simona")
- Documentazione: "LeadMe - Guida alle Funzionalità Principali" v.14 Novembre 2025

## Funzionalità principali

### Inserimento lead
- **Add Contact (Link LinkedIn)** — paste URL → scraper umano-simulato (60-120s)
- **Estensione Browser** — bottone LeadMe in Sales Navigator (in approvazione store)
- **Bulk Import** — Excel con colonna "Link LinkedIn" (solo super user)

### Anagrafica e ricerca
- 3 barre ricerca: Sales Rep / Company / Lead
- Filtro Status (Tutti / Nuovi / In Corso / Positivi / Negativi) — combinabile
- Pagina Aziende dedicata (nome, sede, sito, settore, lead associati)

### Operatività lead
- Tipologie attività: Primo contatto, Risposta, Presentazione, Brief, Esito (personalizzabili)
- Logging con status + note + due date
- Cronologia modifiche con funzione **"Ripristina"**

### Vacancies (posizioni scoperte)
- Quando un lead cambia azienda → scraper aggiorna profilo + crea vacancy nella vecchia azienda
- Es. Giorgia Dalla Fior: Marketing Director Kiko → passa a Ferragamo → vacancy in Kiko
- "Assign" su vacancy: paste link LinkedIn nuovo contatto → import automatico

### Lead Vacanti (non assegnati)
- Vista riservata Laura (super user)
- Da `Unassigned Leads` può ridistribuire ai commerciali

### Scraper automatico
- Frequenza: **ogni 15 giorni** (bilanciamento freshness vs detection LinkedIn)
- Aggiorna: nome, ruolo, azienda, sede, industry
- NON aggiorna: email, telefono (manuali)

## Roadmap evolutiva (citata in chat training)

1. **Scraper Aziende** — anche company auto-popolate da LinkedIn
2. **Brief AI** — riepiloghi automatici per lead (basati su cronologia)
3. **Messaggistica AI-Powered** — generazione messaggi personalizzati + invio
4. **Reportistica NLP** — interrogazione in linguaggio naturale (Sally lavora su questo)
5. **Lead Scoring** — caldo/tiepido/freddo
6. **Notifiche scraping** — alert su cambi
7. **Opportunità & CRM completo** — lead → cliente → post-vendita
8. **Integrazione ecosistema NoLoop** — collegamento con [[Link]], [[Flow]], [[Sally]], [[Crowd]]

## Permessi

- **Super User** (Laura + team commerciale in test): tutto, riassegnazione, bulk, vacancies, reportistica
- **User Standard** (post go-live): vede tutti i lead ma modifica solo i propri, no cronologia altrui

## Log

### 2026-05-20 (call interna HeyAI+Soolutions allineamento)
- **TBD requirement LeadMe ribaditi**: Carlo ricorda a Federico+Simone che nel Requirement Log Wave 2 ci sono **punti TBD aperti su LeadMe** (Carlo: *"requirement in cui su litme [LeadMe] c'erano dei vari punti aperti"* — "litme/litmi" alias storico audio). Decisione: organizzare un **meeting con i referenti commerciali NoLoop** per chiudere quei TBD via configurazione, non come change request log.
- **Owner workflow**: Carlo organizza una call con **[[Roberta Calajò]]** per la parte di Business Central (alias "Calaiò" audio). Carlo chiede a Federico+Simone di **anticipare per iscritto le domande** in modo che Roberta arrivi preparata (Roberta non è tecnica, se servono domande sulle API serve preparazione). Carry-over: come per Business Central, anche per i TBD LeadMe Federico+Simone si leggono i punti aperti e segnalano dubbi a Carlo via email.
- **Trigger di partenza Wave 2 LeadMe**: la sequenza si attiva appena NoLoop ricomincia a pagare la Wave 2. Carlo sente Andrea Pazienza per capire dove sono fermi. Eye Cookies + Operation Transformation già pagate sblocca il flusso secondo Carlo.

## Task aperti

- [ ] **#p1 Carlo**: setting call con [[Roberta Calajò]] (Business Central + TBD LeadMe) — Federico+Simone anticipano per iscritto le domande così Roberta arriva preparata
- [ ] **#p1 Federico+Simone**: leggere i TBD su LeadMe nel Requirement Log Wave 2 e mandare dubbi/domande a Carlo via email prima della call Roberta

## Chat correlate

- [[80 - Sources/Claude Chats/Export 2026-04-30/Training LeadMe e raccolta feedback funzionalità/Training LeadMe e raccolta feedback funzionalità|Training LeadMe]] (25/02→13/04, 26 artifacts) — training Noloop + feedback
- [[80 - Sources/Claude Chats/Export 2026-04-30/Business case finanziario per Lead Me/Business case finanziario per Lead Me|Business case Lead Me]] (06/03→12/03, 3 artifacts)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Evoluzione Leadme_ tre macro-aree di intervento/Evoluzione Leadme_ tre macro-aree di intervento|Evoluzione LeadMe]] (13/03)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Analisi soluzioni Link Flow e Sally per processi cliente/Analisi soluzioni Link Flow e Sally per processi cliente|Analisi Link Flow Sally]] — integrazione con altri prodotti
