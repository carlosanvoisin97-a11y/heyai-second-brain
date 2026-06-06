---
type: audit
project: Angelini Academy
author: Carlo + Claude
date: 2026-05-27
status: working draft per discussione interna
related:
  - "[[HeyAI_Angelini_Academy_Catalogo_Pricing_v2]]"
  - "[[2026-05-27 - Prep Call Elena FuturItaly]]"
classification: USO INTERNO HeyAI · NON condividere con Elena/FuturItaly · NON esporre al cliente
---

# 🔬 Audit Pricing Angelini Academy — Verifica completa coerenza economics

> **Scopo**: audit meticoloso ed esteso del pricing proposto per verificare scope, benchmark di mercato, ore-uomo stimate bottom-up e identificare ogni possibile incoerenza, rischio o errore di sotto/sovra-prezzatura prima dell'invio della proposta al cliente.
>
> **Metodo**: 5 fasi · scope dettagliato → ricerca mercato → stima ore-uomo bottom-up → confronto incrociato → verdict per voce.
>
> **Tariffa di riferimento HeyAI**: €650/giorno (mid-market lower agency Italia 2026 con AI assistance).
>
> ⚠️ **Documento di lavoro interno**. Tutte le considerazioni su effort, costi, margini sono per uso strategico Carlo. Non esposte in nessuna versione del file consegnato al cliente o condiviso con FuturItaly.

---

# Executive Summary

## Verdict generale

**Il pricing complessivo è competitivo ma rischioso**. La maggior parte delle voci tech (AI, area riservata, community) e quasi tutte le voci continuative editoriali hanno margini molto stretti o **sotto costo** se lo scope viene erogato al pieno della descrizione attuale. Le voci progettuali "tradizionali" (sito, landing, SEO) hanno margini più sani.

## 3 macro-categorie di rischio

🔴 **CRITICITÀ ALTE** (5 voci) — margine 0% o negativo se scope full
- P1.B 4 MVP AI (€29.000) — sotto costo se LLM+RAG vero
- P1.C.1 Area Riservata Semplice (€5.500) — margine quasi zero
- P2.0C Regia editoriale continuativo (€3.000/mese) — sotto costo se scope pieno
- P2.BC Email marketing continuativo (€1.500/mese) — sotto costo
- P1.J Analytics setup GA4+Plausible (€3.000) — margine 3%

🟡 **CRITICITÀ MEDIE** (5 voci) — margine 0-15%, stretto ma sostenibile
- P1.1 Sito nuovo (€24.000) — borderline
- P1.A Studio CJ (€4.000) — borderline
- P1.C.2 Area Riservata Avanzata (€11.000) — stretto
- P1.D Community (€15.000) — stretto
- P1.E Analytics + Dashboard (€4.500) — stretto
- P2.A LinkedIn (€4.500/mese) — stretto

🟢 **VOCI SANE** (7 voci) — margine 20%+
- P1.0 Riallineamento (€6.000) — margine 19-40%
- P1.F/P1.G Landing eventi (€5-10k cad) — margine 22-61%
- P1.H SEO avanzata (€5.000) — margine 9-22%
- P1.K Integrazione email (€2.500) — margine 22-35%
- P2.0B Batch contenuti (€10.000 mid) — margine 0-15% con AI assistance
- P2.BS Email setup (€3.500) — margine 7-26%

## Raccomandazioni macro

1. **Rivedere strategicamente P1.B AI** (MVP davvero leggeri = €18-22k effort reale OPPURE alzare prezzo a €38-42k se MVP+RAG strutturato)
2. **Alzare P2.0C continuativo a €4.500/mese** o ridurre scope mensile (drop video pillole + storie alumni dal base)
3. **Alzare P2.BC continuativo a €2.000/mese**
4. **Alzare P1.C.1 a €6.500-7.500** (margine attuale insostenibile)
5. **Alzare P1.J a €3.500-4.000**
6. **Confermare P1.0, P1.F/G, P1.H, P1.K** (sani)
7. **Tenere P1.1 sito nuovo a €24k MA con scope blindato** (no scope creep)

## Riassunto numerico

| Voce | Prezzo attuale | Effort stimato (g) | Costo base €650/g | Margine € | Margine % | Verdict |
|---|---|---|---|---|---|---|
| P1.0 Riallineamento | 6.000 | 5.5-7.5 | 3.575-4.875 | 1.125-2.425 | 19-40% | 🟢 OK |
| P1.1 Sito nuovo | 24.000 | 36-45 | 23.400-29.250 | -5.250 a 600 | -22 a 2% | 🟡 STRETTO |
| P1.A Studio CJ | 4.000 | 6-8 | 3.900-5.200 | -1.200 a 100 | -30 a 2% | 🟡 STRETTO |
| P1.B 4 MVP AI | 29.000 | 45-58 (full RAG) o 25-32 (MVP leggeri) | 29.250-37.700 o 16.250-20.800 | -8.700 a 12.750 | dipende | 🔴 CRITICO |
| P1.C.1 Area Riserv. Semplice | 5.500 | 8-13 | 5.200-8.450 | -2.950 a 300 | -54 a 5% | 🔴 CRITICO |
| P1.C.2 Area Riserv. Avanzata | 11.000 | 15-22 | 9.750-14.300 | -3.300 a 1.250 | -30 a 11% | 🟡 STRETTO |
| P1.D Community | 15.000 | 19-27 | 12.350-17.550 | -2.550 a 2.650 | -17 a 18% | 🟡 STRETTO |
| P1.E Analytics + Dashboard | 4.500 | 6.5-8 | 4.225-5.200 | -700 a 275 | -16 a 6% | 🔴 CRITICO |
| P1.F Landing pubbliche | 5.000-10.000 cad | 6-9 | 3.900-5.850 | 1.100-6.100 | 22-61% | 🟢 OK |
| P1.G Landing interne | 5.000-10.000 cad | 6-9 | 3.900-5.850 | 1.100-6.100 | 22-61% | 🟢 OK |
| P1.H SEO avanzata | 5.000 | 6-7 | 3.900-4.550 | 450-1.100 | 9-22% | 🟢 OK |
| P1.J Analytics setup | 3.000 | 4.5 | 2.925 | 75 | 3% | 🔴 CRITICO |
| P1.K Integraz. email | 2.500 | 2.5-3 | 1.625-1.950 | 550-875 | 22-35% | 🟢 OK |
| P2.0B Batch contenuti | 10.000 (mid) | 13-21 | 8.450-13.650 | -3.650 a 1.550 | -36 a 15% | 🟡 STRETTO |
| P2.0C Continuativo /mese | 3.000 | 4.8-6.6 | 3.120-4.290 | -1.290 a -120 | -43 a -4% | 🔴 CRITICO |
| P2.A LinkedIn /mese | 4.500 | 6.5-8 | 4.225-5.200 | -700 a 275 | -16 a 6% | 🟡 STRETTO |
| P2.BS Email setup | 3.500 | 4-5 | 2.600-3.250 | 250-900 | 7-26% | 🟢 OK |
| P2.BC Email continuativo /mese | 1.500 | 2.3-2.8 | 1.495-1.820 | -320 a 5 | -21 a 0% | 🔴 CRITICO |

---

# Parte 1 — Scope dettagliato di ogni servizio

## P1.0 — Riallineamento sito attuale

### Cosa fa concretamente
Intervento minimo sul sito attuale di Angelini Academy (`www.angeliniacademy.com`) per allineare comunicazione, foto e copy al nuovo posizionamento "Angelini Academy" SRL prima del lancio ufficiale al Festival di Trento (maggio 2026).

### Sub-task atomici
1. Audit del sito attuale (cosa c'è, cosa è da cambiare)
2. Refresh CSS minimo (palette nuova, font allineati)
3. Cambio copy homepage + Chi Siamo (testo nuovo positioning)
4. Sostituzione foto principali (selezione, ottimizzazione, upload)
5. Aggiunta 1-2 sezioni nuove (Engaged Research preview + Eventi 2026)
6. QA cross-browser + mobile
7. Deploy in produzione

### Dipendenze
- Accesso amministrativo al CMS attuale di Angelini Academy
- Brand book aggiornato e brand assets nuovi
- Copy nuovo per homepage + Chi Siamo (può essere prodotto dentro P2.0B Batch contenuti)
- Foto autorizzate

### Rischi
- Se il CMS attuale è proprietario o complicato (es. CMS custom legacy), l'effort raddoppia
- Se brand assets non sono pronti, blocco operativo

### Skill mix
- Frontend dev (60% effort)
- Designer (20%)
- PM/coordinamento (20%)

---

## P1.1 — Sito nuovo pubblico (Fase 2)

### Cosa fa concretamente
Sito web istituzionale completamente nuovo per Angelini Academy, da progettare e sviluppare basandosi sull'architettura mockup esistente in Claude Code (mockup live su `angelini-academy.vercel.app`). 17 route pubbliche, 5 percorsi customer journey, MBA Gateway, Engaged Research preview, Founder Stories, Blog editoriale 3 stream, Eventi, Press, Chi Siamo, Contatti.

### Sub-task atomici dettagliati
1. **Discovery e validazione sitemap finalizzata** (1-2 g): conferma 17 route, gerarchia, breadcrumb, navigation pattern
2. **Design system finalization** (2-3 g): finalizzare token, componenti, pattern UI da mockup esistente; brand stewardship Barlow + Merriweather + palette
3. **CMS setup e schema dati** (3-4 g): scegliere headless CMS (Sanity/Strapi/Payload), definire schema per Paper, Articolo Blog, Founder Story, Evento, Press Release; integrazione frontend
4. **Sviluppo route da architettura esistente** (12-15 g): trasformare mockup in production code, gestire content dinamico via CMS, animazioni, transizioni
5. **Form base** (1-2 g): MBA Gateway EOI, Contatti, Newsletter — invio a email o DB controllabile dal cliente, no CRM
6. **Bilinguismo IT/EN** (2-3 g): setup i18n, traduzione AI-assisted per contenuti, gestione URL, switch lingua, hreflang
7. **GDPR + cookie + privacy** (1 g): banner consenso, cookie policy, privacy policy
8. **Hosting setup + deploy production** (1 g): Vercel/Netlify, dominio, SSL, monitoring
9. **QA cross-browser + mobile + performance** (2-3 g): test su Chrome, Firefox, Safari, Edge, iOS, Android; Lighthouse target ≥90
10. **Handover** (1 g): documentazione tecnica, training cliente su CMS
11. **PM Carlo** (10 g): 1 giorno/settimana × 10 settimane di delivery

### Cose NON incluse nel base (vanno in add-on)
- SEO avanzata (P1.H)
- Accessibility WCAG/EAA audit dedicato (rimosso dal listino)
- Analytics setup GA4+Plausible (P1.J)
- Integrazione email marketing tecnica (P1.K)
- 4 MVP AI (P1.B)
- Area Riservata (P1.C)
- Community (P1.D)

### Dipendenze
- **Accesso al mockup Claude Code esistente** (architettura UI base presente)
- Brand book aggiornato
- Copy delle pagine (può essere prodotto in P2.0B Batch contenuti)
- Foto/visual autorizzati

### Rischi alti
- **Scope creep**: se il cliente aggiunge sezioni nuove o requisiti non in scope durante il delivery, l'effort sfora il prezzo
- **Decisioni cliente lente**: revisioni che ritardano spostano il PM Carlo oltre i 10 giorni stimati
- **Content cliente in ritardo**: se Engaged Research, Founder Stories, paper, eventi arrivano tardi, blocchi a cascata
- **Architettura mockup parzialmente incompleta**: se alcune route nel mockup sono "scheletro", l'effort di finalizzazione cresce

### Skill mix
- Frontend dev (40%)
- Backend/CMS integration (25%)
- Designer (15%)
- PM (15%)
- QA (5%)

---

## P1.A — Studio strategico Customer Journey + analisi mercato

### Cosa fa concretamente
Documento strategico pre-Fase 2 che approfondisce 5 personas (Giovane Talento, Ricercatore Accademico, HR & Business, Imprese & Partner di filiera, Media & Istituzioni), mappa il customer journey per ciascuna, fornisce analisi mercato sintetica a supporto delle scelte di architettura, contenuti e CTA del sito.

### Sub-task atomici
1. **Briefing iniziale cliente** (0.5 g): obiettivi, vincoli, prioritization personas
2. **Analisi 5 personas approfondita** (2-3 g): demografica, professionale, motivazioni, friction, content needs, formati preferiti
3. **Customer journey mapping** (1.5-2 g): 5 journey end-to-end con touchpoint, pain point, opportunity, CTA per persona
4. **Analisi mercato sintetica** (1-1.5 g): trend corporate learning 2026, posizionamento competitor, white space identificati
5. **Documento strategico finale** (1 g): ~25-40 pagine, sketch journey, raccomandazioni operative per Fase 2

### Deliverable
- Documento strategico in Markdown/PDF (~25-40 pagine)
- 5 schede personas con dettaglio operativo
- 5 customer journey map
- Sintesi analisi mercato (5-7 pagine)
- Lista raccomandazioni operative per P1.1 (architettura, CTA, contenuti)

### Dipendenze
- Briefing con cliente disponibile entro 1 settimana
- Accesso a dati interni Angelini (analytics LinkedIn, eventi, ecc.) se possibile

### Skill mix
- Strategist senior (70%)
- Analista mercato (20%)
- PM (10%)

---

## P1.B — 4 MVP Intelligenza Artificiale verticali

### Cosa fa concretamente
4 micro-applicazioni AI integrate nel sito Academy, ciascuna dedicata a un'audience specifica e delimitata da guardrail sui contenuti pubblicati. **Posizionate come MVP "simpatici e funzionali", non come agenti enterprise**.

### I 4 MVP
1. **Tutor**: chatbot conversazionale che risponde a domande sui contenuti Academy (programmi, masterclass, MBA Gateway, eventi)
2. **Reading Room**: chat dedicata sui paper Engaged Research — "spiegami questo paper", "fammi un riassunto", "dammi 3 take-away"
3. **Career Path Navigator**: chat conversazionale "qual è il percorso giusto per me?" basato sulle 5 personas
4. **Research Engine MVP**: ricerca semantica sul corpus accademico (versione MVP — la versione full mode è in P1.D Community)

### Sub-task atomici (2 varianti)

#### Variante A — MVP davvero leggero (~25-32 g totali)
1. Setup infrastructure condivisa (Claude/GPT API + UI base): 3-4 g
2. Tutor MVP (system prompt + context contenuti caricati in chat): 3-4 g
3. Reading Room MVP (system prompt + paper come context): 3-4 g
4. Career Path Navigator (chatbot con flow guidato): 4-5 g
5. Research Engine MVP (ricerca semantica con embeddings pre-calcolati su titoli/abstract): 5-7 g
6. UI conversazionale comune (componenti chat, history, mobile): 3-4 g
7. Testing + iterazioni: 3 g
8. PM + coordinamento: 1-2 g

#### Variante B — MVP "vero" con RAG strutturato (~45-58 g totali)
1. Setup infrastructure LLM (API, vector DB, RAG pipeline): 5-7 g
2. Tutor MVP: 5-7 g
3. Reading Room MVP (RAG su paper): 7-9 g
4. Career Path Navigator: 5-6 g
5. Research Engine MVP (ricerca semantica con vector DB): 6-8 g
6. UI conversazionale comune: 4-5 g
7. Prompt engineering + guardrail: 3-4 g
8. Testing + iterazioni: 4-5 g
9. Integrazione nel sito: 3 g
10. PM + coordinamento: 3-4 g

### Decisione strategica chiave
Carlo ha dichiarato esplicitamente di voler MVP **simpatici e funzionali**, non agenti production-grade. → **Variante A è coerente con questa direttiva**, ma deve essere comunicato chiaramente al cliente che si tratta di MVP iterabili nel tempo (non di assistenti enterprise).

### Costi operativi mensili (cliente paga separatamente)
- LLM API calls (Claude/GPT): €50-300/mese in base a traffico
- Hosting LLM endpoint: €200-1.000/mese
- (Eventuale) Vector DB se vector RAG: €50-500/mese

### Dipendenze
- Corpus contenuti Academy disponibile in formato strutturato (paper, programmi, descrizioni)
- Accesso a budget operativo cliente per API calls

### Rischi
- **Aspettativa cliente vs MVP**: se il cliente si aspetta "ChatGPT-level" e noi consegniamo MVP semplici, gap di aspettativa → da gestire nella proposta
- **Costi operativi LLM**: se il traffico cresce, i costi API esplodono — cliente deve essere consapevole
- **Hallucination/inaccuracy LLM**: necessari guardrail solidi per evitare risposte sbagliate su contenuti sensibili

### Skill mix
- AI engineer (50%)
- Frontend dev (25%)
- Prompt engineer (15%)
- PM (10%)

---

## P1.C.1 — Area Riservata Semplice

### Cosa fa concretamente
Area autenticata accessibile ai dipendenti del Gruppo Angelini, senza differenziazione per singolo utente: tutti vedono lo stesso contenuto post-login. Sezioni statiche per area dipendenti (Formazione interna, Eventi interni, Risorse).

### Sub-task atomici
1. Setup sistema auth (NextAuth.js o simile): 2-3 g
2. Database utenti basic + ruoli: 1 g
3. Login form + flusso reset password: 1.5-2 g
4. Pagina dashboard interna unica: 2 g
5. 3-4 sezioni statiche post-login (Formazione, Eventi, Risorse, MBA path per dipendenti): 2-3 g
6. Logout + session management: 0.5 g
7. QA + deploy: 0.5-1 g
8. PM: 0.5-1 g

### Dipendenze
- Decisione su sistema auth: email/password custom o SSO con AD aziendale Angelini? (SSO è 3-5 g aggiuntivi)
- Decisione su gestione utenti: importazione massiva o creazione manuale?

### Rischi
- **SSO Angelini AD**: se il cliente vuole SSO con Active Directory aziendale (probabile per dipendenti Gruppo), effort cresce 30-50%

### Skill mix
- Backend dev (50%)
- Frontend dev (35%)
- PM (15%)

---

## P1.C.2 — Area Riservata Avanzata (upgrade da C.1)

### Cosa fa concretamente
Upgrade della Area Riservata Semplice con personalizzazione per singolo utente: dashboard Personal Learning Record che traccia corsi seguiti, progressi, suggerimenti personalizzati per dipendente. Sub-aree dedicate (Formazione, Eventi interni, Community OpCo, MBA path, Risorse Casa Angelini) con contenuti adattivi.

### Sub-task atomici
1. Modello dati utente esteso (track corsi, progress, suggestions): 2-3 g
2. Dashboard Personal Learning Record personalizzata: 3-4 g
3. 5 sub-aree post-login dedicate con contenuti differenziati: 5-7 g
4. Logica suggestion engine basica (rule-based, non AI): 2-3 g
5. Form interattivi (iscrizione corsi, feedback): 1-2 g
6. QA: 1 g
7. PM: 1-2 g

### Dipendenze
- Modello dati cliente: serve un'integrazione con sistema HR/LMS interno Angelini? Se sì, effort triplica
- Decisione su come popolare dati corsi seguiti: manuale o integrazione LMS?

### Rischi
- **Integrazione LMS**: se cliente vuole sync con LMS interno, l'effort sale di 5-10 g
- **Privacy by design**: dati formativi dipendenti = dati personali → GDPR strict

### Skill mix
- Backend dev (45%)
- Frontend dev (35%)
- UX (10%)
- PM (10%)

---

## P1.D — Community Engaged Network

### Cosa fa concretamente
Piattaforma community per alumni MBA Gateway e ricercatori partner accademici. 3 feature MVP interattive + Hub editoriale community-only (paper protetti + executive summary). **Riuso dell'auth da P1.C.1 o P1.C.2** se attivate prima.

### Sub-task atomici
1. **Auth community** (0 g se riusato da P1.C, 2-3 g se P1.C non attivata)
2. **Paper Discussion Threads MVP** (4-5 g): forum-style su paper, thread + reply + like + notifiche email
3. **Position Paper drafting collaborativo MVP** (5-7 g): editor multi-user su documento, save + versioning basic
4. **Career Path Tracker** (3-4 g): form per dichiarare percorso post-MBA, visualization personalizzata
5. **Hub editoriale community-only** (3-4 g): page protetta con lista paper completi + executive summary
6. **Integrazione e routing tra feature**: 1-2 g
7. **QA + soft launch**: 2-3 g
8. **PM**: 1-2 g

### Cosa NON è incluso
- AI Co-pilot moderation (eliminato da catalogo)
- Pedagogical Quiz (eliminato)
- Research Engine full mode (resta come parte di P1.B MVP base)
- Soft launch HR & Business (assorbito nelle attività di lancio)
- Gamification avanzata (badge, leaderboard)

### Dipendenze
- P1.C.1 o P1.C.2 attivate (per riuso auth)
- Lista alumni e ricercatori per setup community iniziale
- Decisione su moderazione: chi modera i thread? (cliente o noi?)

### Rischi
- **Adoption rate**: se la community non viene usata, è investimento perso → ma è rischio cliente, non nostro
- **Moderazione**: se serve moderazione costante, va in P2.0C continuativo

### Skill mix
- Backend dev (40%)
- Frontend dev (35%)
- UX (10%)
- PM (15%)

---

## P1.E — Analytics native + Dashboard team interno

### Cosa fa concretamente
Dashboard custom interna per il team Academy con metriche di audience, conversione e performance per percorso. Basata su dati nativi del sito (no integrazioni esterne tipo Mixpanel/Amplitude).

### Sub-task atomici
1. Setup tracking eventi nativi (form submit, click CTA, scroll, time on page): 1.5 g
2. Dashboard custom (frontend + data fetch + visualizzazioni): 3-4 g
3. Visualizzazioni per audience (5 personas, conversioni differenziate): 1-2 g
4. Filtri data range, drill-down: 0.5-1 g
5. Documentazione + handover: 0.5 g
6. PM: 0.5 g

### Dipendenze
- P1.1 Sito nuovo attivato (per i dati nativi)
- Definizione metriche desiderate dal cliente

### Rischi
- **Esigenze cliente in crescita**: se servono integrazioni esterne (Mixpanel, Amplitude, BI tools), va in scope creep

### Skill mix
- Full-stack dev (60%)
- Designer (20%)
- PM (20%)

---

## P1.F / P1.G — Landing eventi pubblici e interni

### Cosa fa concretamente
Landing dedicata per ogni evento Academy (Festival Trento, Forum Casa Angelini, Hackathon, Roadshow, eventi alumni). Form di registrazione, esperienza interattiva, raccolta lead. **P1.F pubbliche** (chiunque registra), **P1.G interne** (richiede login da P1.C).

### Sub-task atomici per landing
1. Design landing custom (template adattabile per riuso): 1.5-2 g
2. Sviluppo (sezioni, form, lead capture, integrazione con email/DB): 2-3 g
3. Esperienza interattiva (animazioni, countdown, agenda, speakers): 1.5-2 g
4. Content integration (testi, foto evento): 0.5 g
5. QA + deploy: 0.5-1 g
6. PM: 0.5 g

### Pricing model
- **Range €5.000-10.000 per landing**: dipende da complessità interattività + numero sezioni + form integration livello
- Mid €7.500 per landing media
- **Bundle 3 landing**: sconto volume implicito (es. €22.500 invece di €30.000)

### Dipendenze
- Content evento fornito dal cliente (date, speakers, agenda)
- Brand assets aggiornati

### Skill mix
- Frontend dev (50%)
- Designer (30%)
- PM (20%)

---

## P1.H — SEO avanzata + topic authority

### Cosa fa concretamente
Servizio una tantum di SEO strategica oltre il base del sito: 15 keyword priority mappate, long-tail dominance su pedagogia/edTech in italiano, schema markup avanzato, content brief per autori, monitoring 3 mesi opzionale.

### Sub-task atomici
1. Keyword research + analisi competitor (Semrush/Ahrefs): 1.5-2 g
2. Topic authority strategy (cluster + pillar content map): 1 g
3. Schema markup avanzato implementazione (8 tipologie): 1 g
4. 15 content brief per autori (cluster keyword → brief con angolo, parole-ancora, struttura): 1.5-2 g
5. Setup monitoring (Search Console + tool tracking): 0.5 g
6. Report finale + raccomandazioni: 0.5 g

### Cosa NON è incluso
- Scrittura dei contenuti (è in P2.0B/P2.0C)
- Link building outreach (servizio dedicato separato se richiesto)
- Audit SEO tecnico full (se serve, scope ulteriore)

### Dipendenze
- Accesso a tool keyword research
- P1.1 sito attivato per implementare schema markup

### Skill mix
- SEO consultant (70%)
- Frontend dev per schema markup (20%)
- PM (10%)

---

## P1.J — Analytics setup base GA4 + Plausible

### Cosa fa concretamente
Setup tecnico tracking + dashboard segmentato per persona. Configurazione GA4 + (opzionalmente) Plausible per privacy-first, eventi conversion, funnel tracking.

### Sub-task atomici
1. Setup GA4 (proprietà, data stream, eventi base): 1 g
2. Setup Plausible (account, integrazione): 0.5 g
3. Eventi conversion configurati (form submit, CTA, MBA Gateway EOI, newsletter): 1 g
4. Dashboard segmentato per persona (in GA4): 1.5 g
5. Funnel tracking (es. visita → MBA Gateway → form): 0.5 g
6. Documentazione + handover: 0.5 g

### Dipendenze
- Accesso amministrativo Google Account cliente
- P1.1 sito attivato

### Skill mix
- Web analyst (80%)
- PM (20%)

---

## P1.K — Integrazione tecnica email marketing

### Cosa fa concretamente
Collegamento tecnico tra form sito e piattaforma di email marketing scelta dal cliente (Mailchimp, Brevo, HubSpot). NON include setup campagne (che è P2.BS) né scrittura email (che è P2.BC).

### Sub-task atomici
1. Setup connessione form sito → piattaforma email (API o webhook): 1-1.5 g
2. DNS records (DKIM, SPF, DMARC) per deliverability: 0.5 g
3. Test invio + validazione end-to-end: 0.5 g
4. Documentazione + handover: 0.5 g

### Dipendenze
- Cliente ha già piattaforma email scelta
- Accessi amministrativi DNS + piattaforma

### Skill mix
- Full-stack dev (90%)
- PM (10%)

---

## P2.0B — Batch iniziale contenuti (workshop incluso)

### Cosa fa concretamente
Pacchetto una tantum pre-Fase 2 di produzione contenuti che alimenta il go-live del sito nuovo: workshop strategia editoriale, editorial calendar primo trimestre, copywriting completo sito, press kit produzione iniziale, 2 Founder Stories iniziali.

### Sub-task atomici (con AI assistance)
1. Workshop strategia editoriale + ToV applicato: 1-2 g (1-2 sessioni cliente)
2. Editorial calendar primo trimestre: 1 g
3. Copywriting completo sito Fase 2 (17 route) AI-assisted: 4-5 g
4. Press kit produzione iniziale (one-pager + boilerplate + bio + brand assets + fact sheet + template): 3-4 g
5. 2 Founder Stories iniziali (intervista 1h + write-up + pubblicazione): 3 g
6. Coordinamento + review congiunti: 1 g

### Pricing model
- **Range €8.000-12.000** in base a complessità contenuti
- **Mid €10.000** per cliente standard
- Per Angelini (cliente premium, ricchezza contenuti): può tendere a €11-12k

### Dipendenze
- ToV cliente confermato (5 attributi brief)
- Brand book + brand assets disponibili
- Disponibilità di 2 candidati Founder Stories (alumni MBA Gateway)
- Engaged Research material disponibile come fonte

### Rischi
- **Cliente lento in revisione**: se richiede 3+ giri di feedback, l'effort raddoppia
- **Founder Stories difficili da fare**: alumni potrebbero non essere disponibili per intervista

### Skill mix
- Strategist editoriale (40%)
- Copywriter (35%)
- Designer (per press kit) (15%)
- PM (10%)

---

## P2.0C — Regia Editoriale & Content Creation continuativo

### Cosa fa concretamente
Canone mensile per produzione continuativa contenuti sito post-go-live. Include articoli blog, traduzione paper Engaged Research in formato web, video pillole ricercatori, storie alumni, aggiornamenti press kit. **PM & Operations incluso nel canone** (~15h/mese).

### Sub-task atomici mensili (con AI assistance)
1. **2-3 articoli blog/mese** (3 stream Identità · Ricerca · Programmi): 2-3 g
2. **1 paper Engaged Research → sezione web** (executive summary + estratti pubblicabili): 1.5 g
3. **Video pillole ricercatori** (1-2/trimestre, allocato come 0.5/mese): 0.5 g
4. **Storie alumni** (1/trimestre, allocato come 0.3/mese): 0.3 g
5. **Press kit aggiornamento** (bimestrale o trimestrale, allocato): 0.2 g
6. **Coordinamento + reportistica + review congiunto**: 0.5-1 g
7. **PM incluso** (~15h/mese): 1.5-2 g distribuiti

### Stima effort totale mensile
- **Range: 4.8-6.6 g/mese**
- Media: ~5-6 g/mese

### Dipendenze
- Engaged Research consegna paper/casi pedagogici 1-2/mese
- Cliente disponibile per review settimanale o quindicinale
- Accesso a ricercatori per video pillole (1-2/trim)
- Alumni disponibili per storie (1/trim)

### Rischi
- **Scope creep**: se cliente chiede contenuti extra senza pagare ore aggiuntive, margine compresso
- **Engaged Research in ritardo**: se paper non arrivano, niente da tradurre → effort sprecato
- **Video pillole logisticamente complessi**: regia + ripresa + editing può richiedere più di 0.5g/mese in pratica

### Skill mix
- Strategist editoriale (35%)
- Copywriter (35%)
- Video editor (10%)
- PM (20%)

---

## P2.A — Gestione LinkedIn Academy integrata

### Cosa fa concretamente
Gestione canale LinkedIn Academy (corporate page) sia organico che paid. Include piano editoriale, creazione visual + copy post, paid campaign setup e ottimizzazione, reporting mensile. **NO community management** (rispondere ai commenti) → resta lato cliente. **NO LinkedIn personale Morbidelli**.

### Sub-task atomici mensili (con AI assistance)
1. Strategia mensile + planning post: 1 g
2. Creazione 4-8 post (visual + copy) AI-assisted: 2-3 g
3. Monitoring + community management leggero (no risposte commenti, solo flagging): 1 g
4. Setup + ottimizzazione paid campaigns LinkedIn Ads: 1.5-2 g
5. Reporting mensile: 0.5 g
6. Coordinamento cliente: 0.5 g

### Stima effort totale mensile
- **Range: 6.5-8 g/mese**

### Cosa NON è incluso
- Budget media (LinkedIn Ads spend): a carico cliente, separato (tipico €2-5k/mese B2B)
- Community management attivo (risposta commenti DM)
- LinkedIn personale Morbidelli
- Gestione altri social (Meta, Instagram)

### Dipendenze
- Accesso amministrativo LinkedIn Page cliente
- Brand assets aggiornati per visual
- Budget LinkedIn Ads attivato lato cliente

### Skill mix
- Social media strategist (50%)
- Copywriter (25%)
- Designer (15%)
- PM (10%)

---

## P2.BS — Email marketing — Setup

### Cosa fa concretamente
Setup iniziale piattaforma email + integrazione tecnica + segmentazione personas + template + automation iniziali.

### Sub-task atomici
1. Setup piattaforma (Mailchimp/Brevo/HubSpot) + configurazione + integrazione sito: 1-1.5 g
2. Definizione 5 segmentazioni personas + tag setup: 0.5 g
3. Template email base (2 template: newsletter + welcome drip): 1-1.5 g
4. Setup 1-2 automation iniziali (welcome series, evento confirmation): 0.5-1 g
5. Documentazione + training cliente: 0.5 g

### Cosa NON è incluso
- Migrazione DB esistente (se cliente ha già lista in altra piattaforma)
- Email transazionali (es. conferma iscrizione MBA Gateway → su richiesta)
- Integrazione CRM (in P2.C separato)

### Dipendenze
- Cliente ha già scelto piattaforma (o aiutiamo a scegliere)
- Accessi amministrativi piattaforma + DNS

### Skill mix
- Marketing automation specialist (70%)
- Designer email template (20%)
- PM (10%)

---

## P2.BC — Email marketing continuativo

### Cosa fa concretamente
Canone mensile gestione campagne email post-setup: campagne segmentate per persona, drip ad hoc per evento, A/B testing, reporting.

### Sub-task atomici mensili
1. 1-2 campagne segmentate per persona: 1-1.5 g
2. Drip ad hoc per evento o lancio: 0.5 g
3. A/B testing + ottimizzazioni: 0.5 g
4. Reporting + suggerimenti: 0.3 g

### Stima effort totale mensile
- **Range: 2.3-2.8 g/mese**

### Dipendenze
- P2.BS Setup attivato
- Content email forniti o prodotti dentro P2.0C continuativo

### Skill mix
- Marketing automation specialist (70%)
- Copywriter (20%)
- PM (10%)

---

# Parte 2 — Benchmark mercato approfondito

## Sintesi benchmark per categoria

### Sviluppo siti web corporate 2026

| Tipologia | Range Italia | Range Internazionale | Note |
|---|---|---|---|
| Sito vetrina template | €1.500-3.500 | $2-5k | Mass market |
| Sito aziendale standard (15-30 pp) | €3.000-8.000 | $8-25k | WordPress custom |
| **Sito corporate custom (CMS + integrazioni)** | **€15.000+** | **$30-80k** (Tier 2 mid-range business) | Mid-range business |
| Enterprise rebuild | €30k+ | $100-200k+ | Tier 3 enterprise |

**Tempistiche**: small (5-15 pp) 4-8 settimane · mid (20-75 pp) 8-16 settimane.

**Per Angelini P1.1 (17 route, CMS custom, bilinguismo, premium positioning)**: nel range mid-range business → **€24-32k è competitivo** in fascia bassa-media del range.

### AI Chatbot LLM-based + RAG 2026

| Complessità | Range Internazionale | Tempo |
|---|---|---|
| Simple FAQ bot rule-based | $5-15k (€4.5-13.5k) | 2-4 settimane |
| **LLM-powered chatbot con RAG e integrazioni** | **$30-80k (€27-72k)** per chatbot singolo | 6-10 settimane |
| Multi-agent enterprise | $80-200k+ | 12-16 settimane |
| Integration cost aggiuntivo | +20-50% al budget | Per API custom integrations |

**Per Angelini P1.B (4 MVP)**: 
- Se davvero MVP leggeri (FAQ + simple context, no RAG vero): coerente con €18-22k effort = **€29k margine sano**
- Se RAG vero (4 chatbot × $30-80k): €29k è MOLTO sotto-prezzato

### Membership area / Area utenti riservata 2026

| Tipologia | Range Italia | Range Internazionale |
|---|---|---|
| Add-on basic auth a sito esistente | €500-2.000 | — |
| Pacchetto base sito + area riservata | €750-3.000 | $2-8k |
| Membership platform MVP custom | €5-15k | $15-50k |
| Enterprise membership con LMS integration | €20-50k | $50-150k |

**Per Angelini P1.C.1 (€5.500)**: basso-medio del range MVP. **In linea ma con margine stretto**.
**Per Angelini P1.C.2 (€11.000 upgrade, totale C.1+C.2 = €16.500)**: in linea con membership MVP custom.

### Community Platform / Forum MVP 2026

| Complessità | Range |
|---|---|
| Simple MVP basic forum (1-2 feature) | $15-40k (€13-36k) |
| Mid-range community (3-5 feature) | $40-100k (€36-90k) |
| Reddit-like focused MVP | $48k (€43k) |
| Reddit-like full enterprise | $500k+ |
| Hidden costs (hosting, maintenance, iteration) | +20-40% |

**Per Angelini P1.D (3 feature MVP, riuso auth, €15.000)**: **basso del range simple MVP**. Coerente con scope ridotto ma effort tight.

### Content Marketing B2B 2026

| Tipologia | Range Italia |
|---|---|
| Programma strutturato 4-8 contenuti/mese | €1.500-5.500/mese |
| Boutique agency B2B PMI | €4.000-8.000/mese |
| Fascia standard multi-canale | €4.000-8.000/mese (multi-canale integrato) |
| Articolo blog medio | 4h scrittura, 1.416 parole medie |
| Long-form B2B research (2.000-5.000 parole) | Significativamente più effort |

**Per Angelini P2.0C (€3.000/mese)**: **basso-medio del range mercato**. Coerente con entry conservativo ma stretto se scope full.

### LinkedIn Management B2B 2026

| Tier | Range |
|---|---|
| Entry PMI | $1.000-1.580/mese (€900-1.450) |
| Standard advanced | $1.500-3.000/mese (€1.350-2.700) |
| Premium retainer | $3.000-6.000/mese (€2.700-5.400) |
| Enterprise | $5.000+/mese (€4.500+) |
| Spesa media ads richiesta minima | $5-15k/mese |

**Per Angelini P2.A (€4.500/mese)**: **Premium retainer** o **Enterprise low**. Coerente con scope (organic + paid + reporting).

### Customer Journey / Strategic Consulting 2026

- B2B consulting CAC tipico $1-5k (€900-4.500)
- Range alto: high-value projects con consultant senior

**Per Angelini P1.A (€4.000)**: **basso del range** per consulting strategico professionale. Stretto.

### SEO Audit Una Tantum 2026

| Tier | Range |
|---|---|
| Small website audit | $500 (€450) |
| Medium business audit | $1.000-5.000 (€900-4.500) |
| European one-time project | €4.600-28.000 |
| Senior SEO consultant rate | €80-200/h |

**Per Angelini P1.H (€5.000)**: **medio-alto del range medium business**. Coerente.

### Email Marketing Setup 2026

- Setup piattaforma + automation iniziali: €2.000-5.000 tipico
- Piattaforme:
  - Brevo: $9-69/mese
  - Mailchimp: $13-200+/mese
  - HubSpot: $15-890/mese + onboarding $3.000

**Per Angelini P2.BS (€3.500)**: **medio del range**. Coerente.

### Landing Pages Custom 2026

| Tier | Range |
|---|---|
| Budget template | $500-1.500 (€450-1.350) |
| Mid-range custom | $1.500-3.000 (€1.350-2.700) |
| Custom interactive | $3.000+ (€2.700+) |
| Agency premium | $1.400-3.200 (€1.250-2.900) |
| Per-page base | $50-200 |
| Per-page interattiva | $300+ |
| CRM/email integration aggiunto | +$500-2.000 |

**Per Angelini P1.F/G (€5-10k per landing)**: **alto del range custom interactive + integration**. Premium, ma giustificato da brand premium e complessità interattività.

---

# Parte 3 — Stima ore-uomo bottom-up consolidata

(Vedi tabella riepilogo in Executive Summary per dati consolidati)

## Calcoli dettagliati per voce critica

### P1.B 4 MVP AI (€29.000) — Scenari

**Scenario A — MVP davvero leggeri (raccomandato da Carlo)**:
- Effort: 25-32 giorni × €650 = **€16.250-20.800**
- Margine atteso: **€8.200-12.750 (28-44%)** — SANO
- Implicazione: chiarire al cliente che sono MVP leggeri, iterabili

**Scenario B — RAG strutturato vero**:
- Effort: 45-58 giorni × €650 = **€29.250-37.700**
- Margine atteso: **-€8.700 a -€250** — SOTTO COSTO
- Implicazione: o alzare prezzo a €38-42k, o scope-ridurre a Scenario A

⚠️ **DECISIONE CHIAVE**: Carlo deve confermare Scenario A (MVP leggeri) o passare a Scenario B + alzare prezzo.

### P2.0C Continuativo (€3.000/mese) — Scenari

**Scenario A — Scope ridotto (raccomandato per sostenibilità)**:
- 1-2 articoli blog/mese (no 2-3)
- 1 paper Engaged Research → web /mese
- Niente video pillole nel base
- Niente storie alumni nel base (sale a on-demand)
- Press kit aggiornamento trimestrale (no bimestrale)
- Effort: 3.5-4.5 g/mese × €650 = **€2.275-2.925**
- Margine atteso: **€75-725 (3-24%)** — MARGINE BORDERLINE

**Scenario B — Alzare prezzo a €4.500/mese (scope full attuale)**:
- 2-3 articoli blog
- 1 paper → web
- 0.5 video pillole
- 0.3 storie alumni
- Press kit bimestrale
- Effort: 4.8-6.6 g/mese × €650 = **€3.120-4.290**
- Margine atteso: **€210-1.380 (5-31%)** — SANO

⚠️ **DECISIONE CHIAVE**: Carlo deve scegliere scope ridotto a €3k/mese OPPURE scope full a €4.5k/mese.

### P2.BC Email continuativo (€1.500/mese) — Scenari

**Scenario A — Alzare a €2.000/mese**:
- Effort attuale (2.3-2.8 g/mese × €650 = €1.495-1.820)
- Margine atteso: **€180-505 (9-25%)** — SANO

**Scenario B — Ridurre scope a €1.500/mese**:
- 1 campagna/mese (no 1-2)
- No A/B testing nel base (su richiesta)
- Effort: 1.5-2 g/mese × €650 = **€975-1.300**
- Margine atteso: **€200-525 (13-35%)** — SANO

⚠️ **DECISIONE**: ridurre scope OPPURE alzare prezzo.

---

# Parte 4 — Audit incrociato

## Confronto pricing vs benchmark + verdict

| Voce | Prezzo | Benchmark Italia | Benchmark Internaz. | Verdict |
|---|---|---|---|---|
| P1.0 | €6.000 | €1.500-8.000 (refresh) | $10-25k (Tier 1 basic refresh) | 🟢 Coerente alto Italia, basso internazionale |
| P1.1 | €24.000 | €15.000-30.000+ | $30-80k (Tier 2 mid-range) | 🟡 Basso-medio Italia, basso internazionale · MARGINE STRETTO |
| P1.A | €4.000 | (Strategic consulting CAC $1-5k) | — | 🟡 Bassissimo, no margine |
| P1.B | €29.000 | — | $5-200k AI · $30-80k LLM+RAG | 🔴 OK solo se MVP leggeri |
| P1.C.1 | €5.500 | €1.500-15.000 membership MVP | $15-50k MVP | 🔴 Basso, margine quasi zero |
| P1.C.2 | €11.000 (upgrade) | €15-25k membership avanzata | $15-50k | 🟡 Stretto, OK come upgrade |
| P1.D | €15.000 | €13-36k forum MVP | $15-40k forum MVP | 🟡 Basso del range, stretto |
| P1.E | €4.500 | (Analytics dashboard custom) | — | 🔴 Margine quasi zero |
| P1.F/G | €5-10k cad | €1.4-3.2k landing custom | $1.4-3.2k+ | 🟢 Premium giustificato |
| P1.H | €5.000 | €1-5k medium business audit | $1-5k medium | 🟢 Medio del range |
| P1.J | €3.000 | — | — | 🔴 Margine 3% |
| P1.K | €2.500 | — | — | 🟢 Margine 22-35% |
| P2.0B | €10.000 mid | €5-15k corporate content setup | — | 🟡 Mid range, margine stretto |
| P2.0C | €3.000/mese | €1.5-5.5k/mese (4-8 contenuti) · €4-8k boutique | $5-15k/mese B2B internaz. | 🔴 Sotto-prezzato se scope full |
| P2.A | €4.500/mese | €1.5-5k/mese Italia | $3-6k/mese B2B | 🟡 Premium retainer, stretto |
| P2.BS | €3.500 | €2-5k setup | — | 🟢 Medio range |
| P2.BC | €1.500/mese | €1-3k/mese | — | 🔴 Sotto-prezzato se scope full |

## Pattern generali identificati

### 1. Le voci CONTINUATIVE sono sotto-prezzate
- P2.0C (€3k/mese) → effort 4.8-6.6 g → sotto costo
- P2.BC (€1.5k/mese) → effort 2.3-2.8 g → sotto costo
- P2.A (€4.5k/mese) → effort 6.5-8 g → margine stretto

**Implicazione**: il modello revenue continuativo a questi prezzi è insostenibile a regime se lo scope è quello descritto. **Sì può vincere il cliente, ma si perde sul mese-su-mese**.

### 2. Le voci TECH MVP hanno margini stretti
- P1.B (AI), P1.C.1 (Area Riservata), P1.D (Community), P1.E (Analytics) tutte in zona margine 0-15%
- L'unico modo per renderle sane è AI assistance pesante e scope blindato

**Implicazione**: ogni scope creep su queste voci → margine in rosso.

### 3. Le voci PROGETTUALI "tradizionali" sono OK
- P1.0, P1.F/G, P1.H, P1.K, P2.BS — tutte margini sani 22%+

**Implicazione**: il modello commerciale è solido sulle voci dove HeyAI ha pattern già rodati. Sui nuovi servizi (AI, community) c'è rischio.

### 4. Il sito nuovo P1.1 a €24k è IL collo di bottiglia
- 36-45 g di effort = €23.4-29.3k costo
- A €24k siamo a pareggio o sotto in scenario worst
- **Margine 2-12% se tutto va bene · margine negativo se anche solo 5 giorni di scope creep**

**Implicazione**: P1.1 è il prodotto principale ma **a rischio finanziario**. Scope contract blindato OBBLIGATORIO.

---

# Parte 5 — Rischi, incoerenze, decisioni residue

## Rischi specifici per voce

### P1.B 4 MVP AI — RISCHIO ALTO
- **Aspettativa cliente vs realtà MVP**: se Caterina/Tiziana si aspettano AI "ChatGPT-level", gap di percezione → da gestire con framing "MVP iterabili"
- **Costi API operativi**: cliente deve essere informato che API LLM costano €50-300/mese e ce le paga lui, non noi
- **Hallucination LLM**: serve disclaimer chiaro nei chatbot ("informazioni indicative, verificare con team Academy")

### P1.C / P1.D — RISCHIO MEDIO
- **SSO Angelini AD**: se il cliente vuole single sign-on con Active Directory aziendale, scope creep significativo (3-5 g extra su P1.C.1)
- **GDPR strict su dati formativi**: dati Personal Learning Record sono dati personali → privacy by design rigoroso

### P1.1 Sito nuovo — RISCHIO ALTO
- **Scope creep**: ogni nuova sezione, route, integrazione richiesta dal cliente durante delivery → margine in rosso
- **Decisioni cliente lente**: review che ritardano sforano PM Carlo oltre i 10 giorni stimati
- **Content cliente in ritardo**: blocca cascata

### P2.0C Continuativo — RISCHIO ALTO
- **Engaged Research in ritardo**: se Angelini non consegna paper/mese, manca materiale → effort sprecato o cliente non vede valore
- **Cliente richiede più contenuti del previsto** senza pagare ore aggiuntive
- **Video pillole logisticamente complessi**: regia + ripresa + editing reale 1-2 g, non 0.5 g

### P2.A LinkedIn — RISCHIO MEDIO
- **Community management nascosto**: se cliente si aspetta che rispondiamo ai commenti, va fatto comunicare chiaramente che è fuori scope
- **Budget media non attivato**: senza budget Ads, performance flat → cliente si lamenta

## Incoerenze identificate

### 1. Tariffa €650/g vs benchmark agency Italia
- Range mercato Italia 2026: senior dev €520-800/g, agency premium €800-1.200/g
- HeyAI €650/g è "mid lower" — ragionevole con AI assistance
- ⚠️ Ma con margini stretti su molte voci, **se la realtà è 5+ giorni di scope creep si va sotto costo**

### 2. Effort AI MVP P1.B
- Stimato 38-45 g per Carlo
- Mio audit: 25-32 g (Scenario A leggero) o 45-58 g (Scenario B RAG)
- ⚠️ **Discrepanza** — serve allineamento

### 3. Margine implicito non visibile a Elena/cliente
- Tutte le voci continuative hanno margine sotto costo
- ⚠️ Carlo deve sapere internamente che la sostenibilità del modello dipende da:
  - Scope blindato sui continuativi
  - Cliente che paga ore extra on-demand quando richiede scope creep
  - AI assistance al massimo per ridurre effort

## Decisioni che Carlo deve prendere

### 🔴 Bloccanti per invio proposta

**D1 — P1.B 4 MVP AI: scope e prezzo**
- (a) Scenario A leggero a €29k (margine sano, ma comunicare "MVP iterabili")
- (b) Scenario B RAG vero a €38-42k (positioning premium AI)

**D2 — P2.0C Continuativo: scope e prezzo**
- (a) Scope ridotto a €3k/mese (1-2 articoli, 1 paper, no video/storie nel base)
- (b) Scope full a €4.5k/mese (mantenere tutti i contenuti descritti)
- (c) Tiered: €3k Starter (ridotto) · €4.5k Standard (full)

**D3 — P2.BC Email continuativo: scope e prezzo**
- (a) Scope ridotto a €1.5k/mese (1 campagna/mese, no A/B)
- (b) Alzare a €2k/mese (scope attuale)

**D4 — P1.C.1 Area Riservata Semplice**
- (a) Alzare a €6.500-7.500
- (b) Ridurre scope a "solo login + dashboard semplice" (no sub-aree)

**D5 — P1.E Analytics + Dashboard**
- (a) Alzare a €5.500-6.000
- (b) Tenere a €4.500 e accettare margine quasi zero

**D6 — P1.J Analytics setup**
- (a) Alzare a €3.500-4.000
- (b) Tenere a €3.000 e accettare margine 3%

### 🟡 Strutturali ma non urgenti

**D7 — Scope contract per P1.1**: serve un documento di scope che blinda esattamente cosa è dentro/fuori, change request quotato a parte (vedi sezione 11 della proposta v1)

**D8 — Aspettative AI verso cliente**: come comunichiamo "MVP leggeri" nel pitch senza spaventare ma senza creare false aspettative?

**D9 — Budget operativo LLM API**: chi paga? Cliente direttamente o ricarico noi?

---

# Parte 6 — Raccomandazioni finali

## Voci da CONFERMARE (margini sani)

✅ P1.0 Riallineamento €6.000
✅ P1.F/G Landing eventi €5-10k cad
✅ P1.H SEO avanzata €5.000
✅ P1.K Integrazione email €2.500
✅ P2.BS Email setup €3.500

## Voci da RIVEDERE prima dell'invio proposta

### Opzione conservativa (alzare prezzi → margini sani)

| Voce | Attuale | Proposto | Razionale |
|---|---|---|---|
| P1.A Studio CJ | €4.000 | **€5.000** | Studio strategico vale €5k mid-market consulting |
| P1.C.1 Area Riservata Semplice | €5.500 | **€7.000** | Effort 8-13g, margine ragionevole |
| P1.E Analytics | €4.500 | **€5.500** | Effort 6.5-8g, margine ragionevole |
| P1.J Analytics setup | €3.000 | **€3.500** | Effort 4.5g, margine ragionevole |
| P2.0C Continuativo | €3.000/mese | **€4.500/mese** | Effort 4.8-6.6g, allineato mercato mid |
| P2.BC Email continuativo | €1.500/mese | **€2.000/mese** | Effort 2.3-2.8g, allineato mercato |
| **TOTALE Premium scenario impact** | — | **+€10.000 una tantum + €2.000/mese** | — |

### Opzione aggressiva (mantenere prezzi attuali ma blindare scope)

- Tenere tutti i prezzi attuali
- Blindare scope:
  - P2.0C: ridurre a 1-2 articoli + 1 paper/mese, no video/storie nel base
  - P2.BC: 1 campagna/mese, no A/B
  - P1.C.1: solo login + 1 pagina dashboard, no sub-aree
- Comunicare al cliente che scope extra → ore on-demand a parte
- ⚠️ Rischio: cliente percepisce di pagare poco e ottenere poco

### Opzione ibrida (mio raccomandato)

| Voce | Strategia |
|---|---|
| P1.A | Alzare a €5.000 (piccolo aggiustamento, alto valore percepito) |
| P1.B | Mantenere €29.000 + framing "MVP leggeri" chiaro nel pitch |
| P1.C.1 | Alzare a €7.000 (margine sano) |
| P1.C.2 | Tenere €11.000 ma con scope blindato (no LMS integration) |
| P1.D | Tenere €15.000 ma con scope blindato (3 feature, no aggiunte) |
| P1.E | Alzare a €5.500 |
| P1.J | Alzare a €3.500 |
| P2.0C | **Tiering**: €3.000 Starter (ridotto) · €4.500 Standard (full) |
| P2.BC | Alzare a €2.000/mese |

**Impatto economico opzione ibrida**:
- P1 una tantum: +€4.500 (P1.A +1k · P1.C.1 +1.5k · P1.E +1k · P1.J +0.5k)
- P2 continuativo: +€500/mese (P2.BC +500)
- Su 12 mesi: +€4.500 + €6.000 = **+€10.500 totale primo anno**

## Verdict finale audit

**Il pricing v2 attuale è competitivo ma rischioso**. Senza interventi, il rischio è:
- Vincere la gara ma perdere sui margini, specialmente sui continuativi
- Sforare i costi su P1.B AI se non chiarito subito che sono MVP leggeri
- Stretti margini su tutto il sito nuovo P1.1 se c'è scope creep

**Mia raccomandazione finale**:
1. **Adottare opzione ibrida** sui prezzi sopra
2. **Blindare scope** su tutte le voci tech (P1.B, P1.C, P1.D, P1.E)
3. **Comunicare chiaramente** "MVP leggeri" e "scope blindato + change request" nel pitch
4. **Tiering P2.0C** (Starter €3k / Standard €4.5k) per dare opzione cliente
5. **Tracciare ore reali** durante delivery per validare le mie stime e calibrare v3 della proposta

---

## Note metodologiche

- **Tariffa €650/g** è la stessa per tutte le voci (semplificazione realistica per audit interno)
- **Effort stimato** è bottom-up sub-task per sub-task, con buffer realistico
- **AI assistance** è considerata nel ridurre effort copywriting/design del 30-40%
- **Benchmark mercato** raccolti da 12+ fonti web di settore (vedi ricerche del 27/5/2026)
- **Rischi non quantificati monetariamente**: scope creep, decisioni cliente lente, content in ritardo, aspettative AI

## Fonti benchmark consultate

- Tready Italia · Onionlabs · Elia Zavatta · Cyberalchimista (siti web Italia 2026)
- Treesha Infotech · Cleveroad · Master of Code · Crescendo AI · Elfsight · IDS Logic (AI chatbot 2026)
- DW Agency Italia · American Chase · Snowinch · Outseta (membership/community)
- Migliore Agenzia Italia · Esc Agency · Tready (content marketing B2B Italia)
- Concurate · Growth Spree · SaaS Hero · ALM Corp (LinkedIn management)
- Innowise · Clique Studios · SiteGrade (website redesign)
- Brevo · Mailchimp · HubSpot pricing pages (email marketing)
- Pellaforce · Lengreo · FH SEO Hub (SEO audit cost)
- Click Geek · Twine · Apexure (landing page cost)

## Versioning

- v1 (27/5/2026): audit completo iniziale post-feedback Carlo
- (v2): post-decisioni D1-D6 → aggiornare prezzi proposta v2 → consolidare in v3

---

*Documento di lavoro interno HeyAI — Audit pricing Angelini Academy · 27 maggio 2026*
