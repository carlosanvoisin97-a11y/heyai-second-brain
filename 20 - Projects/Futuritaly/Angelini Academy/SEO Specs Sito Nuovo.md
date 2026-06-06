---
type: technical-spec
parent_project: _Angelini Academy
client: Angelini Academy
created: 2026-05-13
updated: 2026-05-30
purpose: specifica SEO operativa per il sito NUOVO Angelini Academy proposto da HeyAI nella gara via FuturItaly (deadline 31/5/2026). Forward-looking, non audit del sito attuale (obsoleto e fuori dal nuovo posizionamento). Deliverable tecnico complementare alla [[Strategia Website 2026]], evidenza concreta della VP3 (AI Layer dimensionato sui contenuti reali) e VP4 (Accessibility-first + Design system documentato) del pitch finale
audience: Carlo (uso interno + base operativa per pitch finale a Caterina Caboni); ammissibile condivisione asciutta a Daniele/Elena previo allineamento 14/5. Allegabile come anexo tecnico alla proposta cliente
status: working — completo nei 5 capitoli richiesti (keyword research, content architecture, benchmark, schema markup, KPI baseline); revisione finale 14/5 con Carlo prima del consolidamento nel pitch
methodology: ricerca keyword via WebSearch (no Ahrefs/Semrush per vincolo); benchmark 5 siti via WebFetch diretto al 13/5/2026 (solo osservazioni verificabili dal browser, niente claim non difendibili); schema.org rec basate su vocabulary 2024 stable + Google Search Central guidelines
parent_strategic_doc: [[Strategia Website 2026]]
related_docs: [[_Angelini Academy]], [[Strategia Website 2026]], [[Scan Siti Web Comparable]], [[Wireframe e Architettura]], [[Framework Pitch Finale]], [[50 - Archive/Inbox/2026-05/2026-05-10 - Cosa vuole davvero Angelini Academy|2026-05-10 - Cosa vuole davvero Angelini]]
---

# 🔍 Angelini Academy — SEO Specs Sito Nuovo

> Specifica SEO operativa per il sito NUOVO Angelini Academy. Forward-looking, non audit del sito attuale `angeliniacademy.com` (obsoleto e fuori dal nuovo posizionamento — [[Wireframe e Architettura]] §0.3). Eredita la cornice dei 4 percorsi utente dalla [[Strategia Website 2026]] §3 e i pattern UX osservati nello [[Scan Siti Web Comparable]], li traduce in un livello tecnico SEO che il fornitore di sviluppo (HeyAI o fornitore IT gruppo Angelini, modularità preservata) deve implementare al go-live di fase 2.
>
> **Vincoli metodologici dichiarati**: niente strumenti SEO a pagamento (no Ahrefs, no Semrush) — la ricerca keyword si basa su WebSearch + analisi diretta dei siti comparable. Le "search volume signals" sono qualitative (alto/medio/basso) calibrate sulla prossimità competitiva dei query alle SERP italiane osservate. Per dati quantitativi precisi di volume/difficulty, in fase 3 va connesso un tool SEO professionale.
>
> **Output del documento**: cinque capitoli operativi più un capitolo di sintesi sulle priorità di implementazione. Ogni capitolo è una specifica eseguibile, non un'analisi accademica.

---

## Executive Summary

Il sito nuovo Angelini Academy si posiziona in un ecosistema editoriale italiano dove **lo spazio bianco SEO è ampio su quattro fronti**: ricerca pedagogica firmata in IT/EN, paper consultabili di edTech applicato, contenuti corporate learning per HR buyer italiani, talent funnel cross-OpCo per giovani laureati life sciences + industrial robotics. I cinque siti benchmark (IE Insights, UCL Knowledge Lab, SDA Bocconi, Fondazione Bracco, Fondazione Veronesi) occupano ciascuno un'identità SEO precisa (business school globale, research lab accademico EN-only, business school IT con copertura tematica massimale, foundation italiana mecenatistica, foundation italiana raccolta-fondi), ma **nessuno copre l'intersezione** che Angelini Academy può presidiare: *fondazione culturale-scientifica europea con propensione mecenatistica + pipeline industriale + hub editoriale paper-based su pedagogia/edTech in IT/EN paritetico*.

Le **tre priorità che muovono il ranking** nei primi 12 mesi: (1) **Engaged Research Lab come hub editoriale paper-based**, autorialità firmata da ricercatori UCL+IE Madrid + Angelini, perché è la sezione su cui c'è meno concorrenza italiana e la query intent è alta (post-doc che cercano partner industriali, HR buyer che cercano applied research, media che cercano fonti); (2) **MBA Gateway come landing dedicata con form expression of interest e percorsi alternativi (graduate program, posizioni dirette OpCo)**, perché il query "MBA Italia borsa di studio" è competitivo ma circoscritto a una quindicina di player e Angelini Academy ha asset narrativi forti (€1M con IE Madrid, 10 borse, internship in 4 OpCo) per ranking lungo-coda; (3) **Schema markup completo da day-1** (EducationalOrganization + Course + Person + Article + Event + FAQPage), perché è l'investimento tecnico più rapido e meno costoso che innesca rich results su Google sin dal lancio.

**Assessment globale**: il sito ha lo spazio SEO per arrivare a top-3 organic nelle query di nicchia (chatbot Engaged Research, partnership Angelini IE Madrid, MBA Gateway Italia, paper pedagogia edTech UCL Italia) entro 9-12 mesi dal go-live fase 2, posizionarsi page-1 sulle query generaliste corporate learning + MBA Italia in 12-18 mesi, restando consapevoli che query generaliste tipo "MBA Italia" o "executive education Italia" sono dominate da SDA Bocconi/LUISS BS/MIB Trieste con domain authority storico (siti attivi da 20+ anni, migliaia di backlink accademici): la strategia vincente è **long-tail dominance + topic authority su pedagogia/edTech**, non head-term competition.

---

## 1. Keyword Research per 4 percorsi utente

I 4 percorsi utente del sito (vedi [[Strategia Website 2026]] §3) hanno query intent diverse, quindi keyword set diversi. La ricerca è organizzata per persona: per ciascuna, 8-12 keyword target raggruppati per intent (informational / navigational / commercial / transactional). Sono indicati intent, opportunity score qualitativo (high/medium/low — funzione di rilevanza al funnel + competizione SERP osservata), tipo di contenuto raccomandato e pagina del sito che deve rankare.

L'**opportunity score** è qualitativo (no Ahrefs disponibile): high = nicchia poco contesa con intent alto e match perfetto al posizionamento Angelini; medium = contesa media o intent moderato; low = head-term dominato dai grandi player ma da presidiare per consistency.

### 1.1 Persona 1 — Giovane talento (MBA Gateway + percorsi alternativi)

Pubblico: laureato magistrale o early-career professional 24-32 anni, background life sciences / industrial robotics / business healthcare. Cerca borsa, requisiti, opzionalità, alumni stories. Query language: IT prevalente con frangia EN per chi proviene da università straniere.

| Keyword target | Intent | Opportunity | Contenuto raccomandato | Pagina che deve rankare |
|---|---|---|---|---|
| MBA Angelini Academy | navigational | high | landing MBA Gateway con candidatura | `/it/mba-gateway/` |
| MBA Gateway IE Madrid | navigational | high | dettaglio partnership + brochure | `/it/mba-gateway/programma-ie-madrid/` |
| borsa di studio MBA Italia 2026 | commercial | high | landing borsa + calcolo ISEE/ISPE | `/it/mba-gateway/borsa-di-studio/` |
| MBA pharma Italia | commercial | high | landing percorso OpCo Pharma | `/it/mba-gateway/internship-pharma/` |
| MBA industrial robotics Italia | commercial | high | landing percorso OpCo Industrial Tech | `/it/mba-gateway/internship-fameccanica/` |
| candidatura MBA scadenze | transactional | medium | FAQ + timeline + form | `/it/mba-gateway/candidature/` |
| graduate program Angelini Industries | commercial | high | landing percorsi alternativi MBA | `/it/talent-hub/graduate-program/` |
| internship pharma Italia laureati | informational | medium | hub Talent + scheda OpCo | `/it/talent-hub/` |
| lavorare in Angelini Industries | informational | medium | bridge talent hub → carriere holding | `/it/talent-hub/carriere-angelini/` |
| MBA con tirocinio retribuito Italia | commercial | medium | landing struttura programma | `/it/mba-gateway/programma/` |
| corporate MBA Italia 2026 | informational | medium | hub MBA Gateway + content marketing | `/it/mba-gateway/` |
| testimonial MBA Gateway alumni | informational | low | Founder Stories integrate | `/it/talent-hub/founder-stories/` |

Question-based keyword da intercettare nei FAQ schema (vedi §4.6): "quanto costa un MBA in Italia", "come funziona MBA Gateway Angelini", "MBA Gateway è full-time o part-time", "borsa di studio MBA ISEE 50000", "MBA Italia o estero", "MBA Gateway IE Madrid borsa", "internship Angelini Pharma quanto dura".

### 1.2 Persona 2 — Ricercatore / accademico (Engaged Research Lab)

Pubblico: post-doc o assistant/associate professor 32-50 anni in università europee, focus pedagogia + edTech + AI in education + lifelong learning. Query language: EN prevalente per consultazione accademica internazionale, IT per audience italiana specifica. Doppio target linguistico = doppia opportunità SEO.

| Keyword target | Intent | Opportunity | Contenuto raccomandato | Pagina che deve rankare |
|---|---|---|---|---|
| ricerca pedagogica intelligenza artificiale | informational | high | paper landing + executive summary | `/it/engaged-research/intelligenza-artificiale-pedagogia/` |
| edTech applicato aziende Italia | informational | high | paper applied research + case study | `/it/engaged-research/edtech-applicato/` |
| skill mismatch università aziende | informational | high | paper Engaged Research firmato | `/it/engaged-research/skill-mismatch/` |
| lifelong learning over 50 | informational | high | paper + executive summary | `/it/engaged-research/lifelong-learning-over-50/` |
| applied pedagogy research Italy | informational | high | hub EN dell'Engaged Research Lab | `/en/engaged-research/` |
| AI in education Italian research | informational | high | landing EN + paper UCL+IE collaboration | `/en/engaged-research/ai-in-education/` |
| neuroscience of learning corporate | informational | medium | paper + case study Angelini interno | `/en/engaged-research/neuroscience-learning/` |
| corporate academy research paper | informational | medium | hub editoriale + autori | `/en/engaged-research/` |
| pedagogical innovation white paper | informational | medium | sezione white paper | `/en/engaged-research/white-papers/` |
| partnership ricerca pedagogica università azienda | transactional | high | form proposte collaborazione | `/it/engaged-research/proponi-collaborazione/` |
| Engaged Research Angelini Academy | navigational | high | hub editoriale homepage research | `/it/engaged-research/` |
| chatbot ricerca scientifica paper | informational | medium | landing AI-1 + funzionalità | `/it/engaged-research/ai-research-assistant/` |

Question-based keyword da intercettare nei FAQ schema: "come pubblicare ricerca pedagogica con partner industriale", "Angelini Academy collabora con ricercatori", "edTech in Italia chi finanzia ricerca", "lifelong learning over 50 strumenti applicati".

### 1.3 Persona 3 — HR buyer / L&D Director enterprise

Pubblico: CHRO o L&D Director 38-55 anni in aziende italiane mid-large di settore pharma/biotech/manufacturing/financial services/consulting. **Soft seeding 2026** — non si vende ancora, si capture lead per nurturing 2027-2028 (vedi [[Strategia Website 2026]] §3 persona 3). Query language: IT prevalente con anglismi tecnici accettati (executive education, executive program, masterclass, corporate learning).

| Keyword target | Intent | Opportunity | Contenuto raccomandato | Pagina che deve rankare |
|---|---|---|---|---|
| corporate learning aziende pharma Italia | informational | high | landing soft B2B + paper | `/it/per-aziende/corporate-learning-pharma/` |
| executive education Italia 2026 | informational | medium | landing + paper applied | `/it/per-aziende/executive-education/` |
| formazione manageriale ASFOR accredited | informational | medium | landing accreditation + offerta | `/it/per-aziende/accreditamento-asfor/` |
| masterclass AI pedagogia corporate | informational | high | landing + chatbot demo | `/it/per-aziende/masterclass-ai-pedagogia/` |
| reskilling upskilling over 50 azienda | informational | high | paper applied + case study | `/it/per-aziende/reskilling-over-50/` |
| corporate academy come funziona | informational | medium | sezione cornice istituzionale | `/it/per-aziende/cosa-e-corporate-academy/` |
| paper applied research HR director | informational | high | hub paper executive summary | `/it/per-aziende/insights-per-hr/` |
| benchmark corporate learning Italia | informational | medium | content marketing + paper | `/it/engaged-research/benchmark-corporate-learning/` |
| executive program AI per management | commercial | medium | landing soft + form info | `/it/per-aziende/executive-program-ai/` |
| customizzazione programma formazione aziendale | transactional | low | form contatto B2B (apertura 2027) | `/it/per-aziende/programmi-su-misura/` |

Question-based keyword da intercettare nei FAQ schema: "differenza tra corporate academy e business school", "come scegliere un partner di corporate learning", "executive education Italia vs estero", "AI nella formazione aziendale come integrare".

### 1.4 Persona 4 — Media / istituzioni / community

Pubblico: giornalisti specializzati corporate/HR/education (Sole 24 Ore, Il Foglio, Wired Italia, AgendaDigitale, Harvard Business Review Italia), policy maker IT-EU, advocacy figure. Query language: IT prevalente, occasionalmente EN per audience internazionale (FT, Bloomberg, Politico Europe).

| Keyword target | Intent | Opportunity | Contenuto raccomandato | Pagina che deve rankare |
|---|---|---|---|---|
| Angelini Academy press release | navigational | high | press room + media kit | `/it/press/` |
| Marco Morbidelli CEO Angelini Academy | navigational | high | bio + thought leadership feed | `/it/chi-siamo/leadership/marco-morbidelli/` |
| Angelini Industries holding profilo | informational | medium | sezione Chi siamo + cross-link OpCo | `/it/chi-siamo/angelini-industries/` |
| Festival economia Trento 2026 Angelini | informational | high | landing evento + side events | `/it/eventi/festival-trento-2026/` |
| MBA Gateway €1 milione 10 borse | informational | high | press release + landing MBA | `/it/mba-gateway/` |
| Bilancio Engaged Research Angelini | navigational | medium | landing Bilancio annuale | `/it/engaged-research/bilancio-annuale/` |
| corporate academy italiana eccellenza | informational | low | press kit + sezione institutional | `/it/press/media-kit/` |
| partnership Angelini IE Business School | informational | high | comunicato + landing partnership | `/it/chi-siamo/partnership-accademiche/ie-madrid/` |
| Angelini Ventures fondo biotech | informational | medium | scouting hub + ventures link | `/it/engaged-research/innovation-scouting/` |
| Forum Angelini Academy programma | informational | medium | landing eventi Forum | `/it/eventi/forum-annuale/` |

Question-based keyword da intercettare nei FAQ schema: "cosa è Angelini Academy", "chi è il CEO di Angelini Academy", "Angelini Academy fa parte di Angelini Industries", "quanto costa il MBA Gateway".

### 1.5 Sintesi cross-percorsi — i 15 keyword target prioritari

Aggregando i 4 set sopra, i 15 keyword target con opportunity high che muovono ranking nei primi 12 mesi (priorità di copy + schema + internal linking):

1. **Engaged Research Angelini Academy** (P2/P3/P4, navigational, branded) — hub editoriale
2. **ricerca pedagogica intelligenza artificiale** (P2, informational, nicchia poco contesa)
3. **edTech applicato aziende Italia** (P2/P3, informational, nicchia)
4. **skill mismatch università aziende** (P2/P3, informational, nicchia)
5. **lifelong learning over 50** (P2/P3, informational, query trending PNRR-driven)
6. **MBA Gateway IE Madrid** (P1, navigational, branded)
7. **borsa di studio MBA Italia 2026** (P1, commercial, contesa con SDA/MIB/CIMBA ma circoscritta)
8. **MBA pharma Italia** (P1, commercial, nicchia)
9. **MBA industrial robotics Italia** (P1, commercial, nicchia)
10. **graduate program Angelini Industries** (P1, commercial, branded + funnel)
11. **corporate learning aziende pharma Italia** (P3, informational, soft B2B)
12. **masterclass AI pedagogia corporate** (P3, informational, intersezione differenziante)
13. **reskilling upskilling over 50 azienda** (P3, informational, query PNRR-driven)
14. **Marco Morbidelli CEO Angelini Academy** (P4, navigational, branded + Person schema)
15. **Festival economia Trento 2026 Angelini** (P4, informational, event-driven temporary)

Le query branded (Angelini Academy, MBA Gateway IE Madrid, Marco Morbidelli, Festival Trento Angelini) sono **immediate wins** post go-live: zero competizione, basta esistere e essere indicizzati. Le query non-branded sui temi nicchia (pedagogia AI, skill mismatch, lifelong learning over 50, MBA pharma, masterclass AI corporate) richiedono **contenuto editoriale firmato** per rankare — è esattamente la VP3 + hub Engaged Research di [[Strategia Website 2026]] §4.2.

---

## 2. Content Architecture — URL structure, hierarchy, internal linking

Architettura informativa SEO-friendly che traduce la sitemap di [[Wireframe e Architettura]] §2 in una struttura di URL, hierarchy, breadcrumb e internal linking implementabile da day-1. Obiettivo: ciascuna pagina target del §1 ha un URL canonico stabile, una posizione gerarchica chiara, breadcrumb visibili, internal linking hub-and-spoke che concentra l'authority sulle pagine pillar.

### 2.1 URL structure — convenzioni

Convenzione di base per tutto il sito:

- **Lingua come primo segmento**: `/it/...` per italiano, `/en/...` per inglese. Hreflang attivo (vedi §2.5).
- **Tutto in lowercase, slug parlanti, separatore trattino**: `engaged-research`, `talent-hub`, `mba-gateway`, mai underscore o camelCase.
- **No ID numerici nei permalink di contenuto evergreen** (pagine pilastro, paper, programmi): solo slug. ID numerici accettabili per blog/news + filtri parametrici cancellabili da canonical.
- **No trailing slash inconsistente**: scegliere "sì trailing slash" e applicarlo su tutto il sito (preferenza Angelini: sì trailing slash — coerente con sito attuale `angeliniacademy.com/academy/`).
- **No .html, .php, .aspx**: URL puliti senza estensione visibile.
- **Permalink immutabili**: una volta pubblicato un paper o un programma, lo slug non cambia. Eventuale rebranding di titoli si gestisce nel meta-title + H1, non nello slug. Se un rename è necessario, 301 redirect obbligatorio.
- **Date nei permalink solo per news** (`/it/news/2026/05/festival-trento-recap/`), mai per programmi o paper evergreen.
- **Mai parametri query come ?cat=arts (pattern Bracco)**: indebolisce SEO. Usare path puliti `/our-projects/arts/{slug}/`.

### 2.2 URL map — pagine pillar e percorsi utente

Mappa URL per i 4 percorsi utente + Engaged Research Lab + sezioni istituzionali + content hub. È la traduzione SEO della sitemap di [[Wireframe e Architettura]] §2.1.

```
/it/                                        — Homepage
/en/                                        — Homepage EN

/it/chi-siamo/                              — Cornice istituzionale
  /vision-purpose/
  /heritage/                                — heritage famiglia Angelini
  /leadership/                              — team
    /marco-morbidelli/                      — bio CEO con Person schema
  /angelini-industries/                     — bridge holding (4 OpCo cross-link)
  /partnership-accademiche/                 — hub partnership
    /ie-madrid/
    /ucl-knowledge-lab/
    /royal-college-of-art/
    /luiss-business-school/
    /sda-bocconi/
    /imd-lausanne/
    /lbs-london/
    /imperial-college/

/it/engaged-research/                       — Hub editoriale ricerca (pillar prioritario)
  /intelligenza-artificiale-pedagogia/      — paper hub vertical
  /edtech-applicato/                        — paper hub vertical
  /skill-mismatch/                          — paper hub vertical
  /lifelong-learning-over-50/               — paper hub vertical
  /neuroscience-learning/                   — paper hub vertical (secondario)
  /paper/{slug}/                            — singolo paper landing
  /white-papers/{slug}/                     — singolo white paper
  /bilancio-annuale/                        — Bilancio Engaged Research (annuale)
  /innovation-scouting/                     — bridge Ventures + Hackathon
  /ai-research-assistant/                   — landing AI-1 chatbot
  /proponi-collaborazione/                  — form proposta ricerca

/it/mba-gateway/                            — Pillar talent funnel
  /programma/                               — dettaglio struttura
  /programma-ie-madrid/                     — focus partnership IE
  /calendario/                              — timeline 5 tappe
  /borsa-di-studio/                         — meccanismo borsa + simulazione
  /internship-pharma/                       — percorso OpCo Pharma
  /internship-fameccanica/                  — percorso OpCo Industrial Tech
  /internship-fater/                        — percorso OpCo Consumer
  /internship-ventures/                     — percorso Ventures
  /testimonial/                             — alumni stories
  /candidature/                             — form expression of interest
  /faq/                                     — FAQPage schema

/it/talent-hub/                             — Pillar percorsi alternativi MBA
  /graduate-program/                        — laureati magistrale
  /carriere-angelini/                       — bridge HR holding
  /founder-stories/                         — video player + transcript
  /career-path-ai/                          — landing AI-2 Career Path Navigator
  /faq/

/it/per-aziende/                            — Soft B2B (apertura 2027)
  /corporate-learning-pharma/
  /executive-education/
  /masterclass-ai-pedagogia/
  /reskilling-over-50/
  /executive-program-ai/
  /accreditamento-asfor/
  /cosa-e-corporate-academy/
  /insights-per-hr/                         — paper executive summary
  /programmi-su-misura/                     — form contatto soft
  /newsletter-hr/                           — newsletter signup segmentata

/it/eventi/                                 — Calendario eventi e seeding
  /calendario/
  /forum-annuale/
  /hackathon/
  /roadshow-universita/
  /festival-trento-2026/                    — eventi specifici come sub-page
  /archivio/

/it/press/                                  — Newsroom
  /press-releases/
  /media-kit/
  /press-coverage/
  /contatti-stampa/

/it/news/                                   — Blog/news istituzionali
  /{anno}/{mese}/{slug}/                    — pattern date-based per news

/it/contatti/                               — Hub contatti
```

**Strutturazione gerarchica chiave**:
- Persona 1 ha **2 hub paralleli**: `mba-gateway` (asse principale) + `talent-hub` (percorsi alternativi). Il talent-hub è cross-link da mba-gateway in "Cosa fare se non sono ammesso al MBA Gateway".
- Persona 2 ha **1 hub solo**: `engaged-research`, con 4-5 paper hub verticali tassonomici (intelligenza-artificiale-pedagogia, edtech-applicato, skill-mismatch, lifelong-learning-over-50, neuroscience-learning).
- Persona 3 ha **1 hub soft**: `per-aziende` con paper executive summary downloadabili + form contatto leggero.
- Persona 4 ha **1 hub press**: `press` con media kit + cross-link a `chi-siamo` + `engaged-research/bilancio-annuale`.

### 2.3 Hierarchy — niente di più di 3 livelli sotto la lingua

Profondità massima URL: 3 livelli dopo `/it/` o `/en/`. Esempi accettabili: `/it/engaged-research/intelligenza-artificiale-pedagogia/paper/come-l-ai-personalizza-l-apprendimento-corporate/` è il limite massimo (4 livelli). Per i singoli paper si preferisce `/it/engaged-research/paper/{slug}/` (3 livelli) con tag tassonomico nel frontmatter del CMS, non nel path.

**Rationale**: Google indicizza fino a qualsiasi profondità ma profondità >4 segnala importanza minore (link equity decrescente dal top-level). 3 livelli è il sweet-spot italiano osservato su [Veronesi](https://www.fondazioneveronesi.it/educazione-alla-salute/guida-ai-tumori/tumore-al-seno) e [SDA Bocconi](https://www.sdabocconi.it/it/aree-tematiche/leadership-hr-and-organization/).

### 2.4 Internal linking — hub-and-spoke + topic clustering

Modello dichiarato: **hub-and-spoke con topic cluster**. Ogni pillar hub (`/it/engaged-research/`, `/it/mba-gateway/`, `/it/talent-hub/`, `/it/per-aziende/`, `/it/eventi/`, `/it/press/`) è il centro di un cluster; le pagine sub-livello sono spoke che linkano sempre indietro all'hub + cross-link laterale agli altri spoke dello stesso cluster.

**Regole operative di internal linking** che il fornitore di sviluppo + content team devono rispettare:

1. **Ogni paper Engaged Research linka a 3 cose**: l'hub `/it/engaged-research/`, il vertical tematico di appartenenza (es. `/it/engaged-research/intelligenza-artificiale-pedagogia/`), almeno 2 paper correlati nello stesso vertical. Mai paper isolato.
2. **Ogni pagina internship OpCo linka a**: hub `mba-gateway`, FAQ MBA Gateway, scheda Founder Stories pertinente, form candidature, scheda OpCo nel sito Angelini Industries (cross-domain — vedi §2.6).
3. **Ogni landing per-aziende linka a**: paper Engaged Research correlati (cross-cluster di valore: HR director cliccano paper → entrano nel funnel di nurturing).
4. **Ogni press release linka a**: Bilancio Engaged Research annuale + scheda Morbidelli + landing MBA Gateway + landing evento se collegato.
5. **Anchor text descrittivi, mai "clicca qui" / "leggi di più"**: anchor text = keyword target della pagina di destinazione (es. anchor "MBA Gateway IE Madrid" che porta a `/it/mba-gateway/programma-ie-madrid/`).
6. **Nessuna pagina orfana**: ogni pagina nuova deve avere almeno 3 link in entrata da altre pagine prima del go-live. Audit automatico in CI/CD ottimale.
7. **Footer cross-link verticali**: footer ha 4 colonne di navigazione + sezione "Insights" con 3 paper recenti + sezione "Eventi" con 2 eventi imminenti — link footer concentrano link equity.

### 2.5 Bilinguismo IT/EN — hreflang corretto

Il sito attuale `angeliniacademy.com` è bilingue nativo (vedi [[Wireframe e Architettura]] §0.1). Il sito nuovo preserva il bilinguismo (Strategia Website 2026 §3 + Scan Siti Web Comparable Pattern 8: foundation italiane IT-EN paritetico).

**Implementazione hreflang obbligatoria** in `<head>` di ogni pagina:

```html
<link rel="alternate" hreflang="it" href="https://www.angeliniacademy.com/it/engaged-research/" />
<link rel="alternate" hreflang="en" href="https://www.angeliniacademy.com/en/engaged-research/" />
<link rel="alternate" hreflang="x-default" href="https://www.angeliniacademy.com/it/engaged-research/" />
```

`x-default` punta a IT (lingua di default per audience italiana + crawler senza lingua dichiarata). Versioni EN delle pagine non sono traduzioni automatiche: priorità EN per Engaged Research (audience accademica internazionale) + Chi siamo + Press; IT prioritario per MBA Gateway (audience giovani italiani) + per-aziende (HR italiani) + eventi italiani.

**Coverage EN inizale al go-live fase 2** (ott 2026): tutta `/en/engaged-research/`, `/en/chi-siamo/` (about us), `/en/press/`, `/en/mba-gateway/` (page principale + programma + candidature, gli OpCo internship in EN solo dal 2027). Persona 3 e Persona 4 internazionali ricevono experience EN-completa sull'asse research + brand uplift, ma talent funnel resta IT-first.

### 2.6 Cross-domain consideration — Angelini Industries

`angeliniindustries.com` e `angeliniacademy.com` sono **due domini separati** con identità SEO distinte. Linkage bidirezionale obbligatorio per amplificare brand uplift (vedi [[Strategia Website 2026]] §5.1 OS9):

- Da `angeliniacademy.com` → link in `/it/chi-siamo/angelini-industries/` + footer + sezione OpCo internship MBA Gateway.
- Da `angeliniindustries.com` → la sezione `about-us/angelini-academy/` (esistente, [vedi qui](https://www.angeliniindustries.com/en/about-us/angelini-academy/)) deve diventare un teaser con link prominente al sito Academy. Da rinegoziare con il team IT di gruppo + comunicazione corporate.

I link interni cross-domain sono backlink esterni dal punto di vista del crawler — concentrano authority sui due siti reciprocamente, **purché diversificati negli anchor text** (no "Academy" ripetuto 50 volte).

### 2.7 Breadcrumb visibili + BreadcrumbList schema

Pattern UCL osservato: breadcrumb visibili in pagina + BreadcrumbList schema (vedi §4.8). Implementazione obbligatoria su tutte le pagine livello 2 e 3:

```
Home > Engaged Research > Intelligenza Artificiale e Pedagogia > Come l'AI personalizza l'apprendimento corporate
```

Visibili come componente UI nella parte alta della pagina, sotto l'header sticky. Aiutano sia UX (utente sa dove è) sia SEO (anchor text di nav cluster diventa segnale di hierarchy a Google).

---

## 3. Benchmark SEO — 5 siti comparable

Analisi diretta di IE Insights, UCL Knowledge Lab, SDA Bocconi, Fondazione Bracco, Fondazione Veronesi al 13/5/2026 via WebFetch. **Solo osservazioni verificabili** (no claim su strategia interna o ranking): cosa fa il loro sito a livello di URL pattern, title/meta, hierarchy, schema, internal linking. Le conclusioni sono "spazio bianco SEO per Angelini" che il sito nuovo può occupare.

### 3.1 IE Insights — `ie.edu/insights`

**URL pattern**: `/insights/articles/{slug}`, `/insights/videos/{slug}`, `/insights/podcasts/{slug}`, `/insights/specials/{slug}` (interactive), `/insights/topics/all/{subject}/all/all/all/` (filter SERP). Hierarchy a 2 livelli dopo `/insights/`. Lingua bilingue EN/ES con switch top-right.

**Title pattern**: `{Article Title} | IE Insights` con il magazine brand sempre in coda al title (es. "From Cloud to Cup: How Much Water Does Your ChatGPT Drink? | IE Insights"). 55-65 caratteri media. Meta description assente o auto-generata da excerpt — opportunità migliorabile.

**Hierarchy e tassonomia**: 13 "Subjects" + 9 "Areas" come tag cross-cutting (es. articolo categorizzato "Innovation & Technology" come Subject + "Artificial Intelligence" come Area). Double-axis tagging amplia copertura SEO long-tail.

**Internal linking**: ogni articolo ha autore con cliccabile bio + link a tutti gli articoli dell'autore (pattern Authors page completo `/insights/authors/`), link a Subject e Area in coda all'articolo. Newsletter signup prominente. No FAQ/related content esposto post-articolo (opportunità migliorabile).

**Schema markup osservabile** (da inspect): Article schema + Person schema + Organization schema (IE University). VideoObject probabile sui videos.

**Spazio bianco SEO per Angelini**: IE Insights ha **format diversi** (Articles, Videos, Podcasts, Interactives) come spoke di un hub editoriale. Angelini Academy può replicare il pattern multi-formato (paper full PDF + paper executive summary + Insights articles + video Founder Stories + chatbot AI-1 = 5 formati cross-cutting), differenziandosi su **paper full-PDF download** (IE non li espone — vedi [[Scan Siti Web Comparable]] §3.2). Angelini ha topic clusters meno larghi ma più verticali (4 paper hub vertical vs 13 Subjects) = più facile dominare la nicchia.

### 3.2 UCL Knowledge Lab — `ucl.ac.uk/ioe/departments-and-centres/ucl-knowledge-lab`

**URL pattern**: profondità 4 livelli `ioe/departments-and-centres/ucl-knowledge-lab/{research|courses|staff|resources|events|news}`. Hosted sotto il dominio UCL = eredita parte del domain authority UCL (uno dei più alti al mondo per education).

**Title pattern**: `UCL Knowledge Lab | UCL Institute of Education` per la home; `{Section} | UCL Knowledge Lab | UCL Institute of Education` per le sotto-pagine. Lunghezza 50-60 caratteri.

**Meta description**: `The UCL Knowledge Lab explores how we live and learn with technology and media.` Concisa, intent-clear, brand-anchored.

**Hierarchy**: breadcrumb visibili in pagina: `UCL Institute of Education > Culture, Communication and Media > Centres > UCL Knowledge Lab`. BreadcrumbList schema implementato (estraibile da Schema.org Markup Validator).

**Tassonomia ricerca**: 4 research themes named with director (signed research) = pattern di authorialità accademica. Ogni theme è una pagina dedicata `/research-and-consultancy/{theme-slug}/` con paper download + autori.

**Internal linking**: limitato e accademico. Cross-link tra ricercatori (`profiles.ucl.ac.uk/...`) e progetti. Newsletter signup secondario (link a Microsoft Sway = embed esterno = perde SEO authority). News in bottom of homepage con date esplicite (signal freshness).

**Schema markup osservabile**: BreadcrumbList + Organization (UCL) + Person (researchers) + Article (news).

**Spazio bianco SEO per Angelini**: UCL espone paper come consultancy + ricerca firmata da prof. con name. Angelini Academy può replicare il pattern *signed research* (paper firmati da Carlo Sanvoisin... no, da ricercatori UCL+IE Madrid+interni Angelini), differenziandosi su **layer applied research** = executive summary corporate-friendly accanto al paper accademico. UCL ha il paper, manca l'applied research per HR director (vedi [[Scan Siti Web Comparable]] §3.1 osservazione spazio bianco).

### 3.3 SDA Bocconi — `sdabocconi.it`

**URL pattern**: `/it/{section}` con profondità 2-3. Esempi: `/it/mba-executive-mba/full-time-mba/`, `/it/aree-tematiche/leadership-hr-and-organization/`. Permalink puliti senza ID.

**Title pattern**: `{Page Title} | SDA Bocconi`. Meta description italiana 150-160 caratteri ottimizzata: "SDA Bocconi, specializzata in ricerca e formazione post-experience, offre programmi di formazione executive, progetti formativi su misura, MBA e maste[ri]..."

**Hierarchy**: 7 voci primary menu + double-axis tagging Programmi vs Aree tematiche. Ogni programma è cross-linkato sia per tipo (MBA/Master/DBA/Formazione manageriale) sia per tema (14 aree). Programma può apparire in 2-3 aree tematiche → 2-3 percorsi di accesso → 2-3 URL canonicali alternativi (con `rel=canonical` per non frammentare authority).

**Tassonomia**: 14 "Aree tematiche" cross-cutting che fungono da hub editoriale (es. "Innovation, digital transformation and AI" raggruppa MBA con focus AI + masterclass + paper + faculty). Pattern di topic authority distribuita.

**Internal linking**: ricco. Sidebar di programmi correlati. "Trova il tuo programma" come quiz wizard = lead generation + lunga permanenza. "Stories" carosello = social proof. News + Events + Insights sezioni intrecciate.

**Schema markup osservabile**: Organization (SDA Bocconi School of Management) + Course (sui programmi) + EducationalOrganization + Person (faculty) + Article (Insights) + Event (eventi). Triple accreditamento e ranking esposti come trust signal (potrebbero usare Award schema).

**SDA Bocconi Insight** è il magazine equivalent di IE Insights: 5 formati cross-cutting (Knowledge, Opinioni, Podcast, Blog, SDA Bocconi & Friends) = pattern multi-formato simile a IE.

**Spazio bianco SEO per Angelini**: SDA Bocconi domina **head-term italiani** (MBA Italia, Executive Education Italia) ma ha **tassonomia generaliste** (14 aree tematiche ampie). Angelini Academy può differenziarsi su **nicchia verticale** (4 paper hub vertical specifici: pedagogia AI, edTech applicato, skill mismatch, lifelong learning over 50) che SDA copre solo in aree generiche. Long-tail dominance + topic authority sui 4 vertical, mai head-term competition con SDA.

### 3.4 Fondazione Bracco — `fondazionebracco.com`

**URL pattern**: `/en/{section}` o `/{section}` per IT default. Hierarchy 2-3 livelli. Pattern parametrico problematico per progetti: `/en/progetti_/{slug}/?category={macro}` — il `?category=...` è query string che Google indicizza come duplicato del path-only. Da evitare in Angelini.

**Title pattern**: `{Page Title} - Fondazione Bracco`. Meta description curata in italiano + traduzione EN. WPML come plugin di gestione bilinguismo (WordPress).

**Hierarchy**: 7 voci primary: About us / Our projects (3 macro: Arts, Science & social, progettoDiventerò) / Calls / News & events / Publications / Press Area / Contacts. Pubblications come voce primary = pattern unico tra foundation italiane (vedi [[Scan Siti Web Comparable]] §2.1).

**Tassonomia**: 3 macro-categorie progetti (Arts, Science & social, progettoDiventerò) + tag categoria per news. Tassonomia semplice e meno granulare di SDA.

**Internal linking**: 3-projects-per-category in homepage + carosello eventi + sezione foundation statistiche (14 years, 3 sectors, 2625 young people). Footer compatto.

**Schema markup osservabile**: Organization (Fondazione Bracco NonProfit) + Article (news) + Event (eventi). Twitter Card `summary_large_image` + Open Graph completo. Manca Award/GrantOpportunity schema per bandi (opportunità migliorabile).

**Meta robots**: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` — pattern best practice da replicare.

**Spazio bianco SEO per Angelini**: Bracco ha **3 macro generaliste** (Arts, Science, progettoDiventerò) — la sezione "Pubblications" è poco esposta nei meta description e non ha hub paper-based con executive summary. Angelini Academy può dominare la query "Pubblicazioni Engaged Research corporate academy Italia" presentando un hub paper-based più strutturato.

### 3.5 Fondazione Veronesi — `fondazioneveronesi.it`

**URL pattern**: `/it/{section}/{subsection}/{topic}/` profondità 3. Slug parlanti italiano. Esempi: `/educazione-alla-salute/guida-ai-tumori/tumore-al-seno/`. Pattern best practice per audience italiana.

**Title pattern**: `Fondazione Umberto Veronesi` per home; `{Topic}` standalone per landing tematiche. Meta description italiana ottimizzata 130-160 caratteri intent-clear: "Finanziamo la ricerca scientifica sui tumori e promuoviamo campagne di prevenzione, educazione alla salute e divulgazione della scienza."

**Hierarchy**: 7 voci primary: La Fondazione / Ricerca sui Tumori / Educazione alla Salute / Etica e Diritti / Partecipa / Sostienici / Magazine. Magazine come voce primary = pattern raro tra foundation italiane (similare ma più strutturato di Bracco Publications).

**Tassonomia**: doppio asse: voci primary (verticali tematiche) + Magazine sotto-sezioni (7 sottosezioni: Oncologia, Fumo, Alimentazione, Pediatria, Ginecologia, Cardiologia, Neuroscienze) + tag "Temi" cross-cutting. Triple-axis tagging amplia copertura SEO molto più di Bracco.

**Internal linking**: ricchissimo. Magazine articoli linkano alla guida tumori + ricerca + storie pazienti. "L'esperto risponde" come Q&A hub. Newsletter signup + raccolta fondi + 5×1000 sono CTA persistenti. Eventi calendario con date + città + tag tema.

**Schema markup osservabile**: Organization (NonProfit) + Article (magazine + news) + MedicalCondition (guida tumori — pattern speciale healthcare) + DonateAction + Event. Meta tag `article:modified_time` aggiornato giornalmente = freshness signal massimo.

**Spazio bianco SEO per Angelini**: Veronesi domina query medical (cura, prevenzione) con triple-axis tagging che frammenta ma copre. Angelini Academy non compete su healthcare ma può replicare il **pattern del Magazine come voce primary con 4-5 sotto-sezioni verticali** (= i 4 paper hub vertical di Engaged Research) + tassonomia cross-cutting "Temi" (es. AI, applied research, lifelong learning, edTech). E può adottare il `article:modified_time` aggressivo sui paper Engaged Research per signal di freshness.

### 3.6 Sintesi benchmark — i 6 pattern SEO da replicare nel sito Angelini

Aggregando i 5 siti, i pattern SEO verificabili dal browser che Angelini Academy deve replicare al go-live:

1. **Header navigation 5-7 voci primary** (tutti i 5 siti) — coerente con OS1 di [[Strategia Website 2026]].
2. **URL slug-based, lowercase, separatore trattino, no ID, no query string, no .html** (Veronesi + SDA + IE pattern coerente; Bracco da non replicare per `?category=`).
3. **Hierarchy 2-3 livelli max dopo lingua** (Veronesi, SDA, IE — UCL eccede ma è hosted UCL).
4. **Title pattern `{Page Title} | {Brand}` 50-60 caratteri** + **meta description italiana 130-160 caratteri intent-clear** (SDA + Veronesi pattern coerente).
5. **Hub editoriale + multi-formato** (IE Insights + SDA Bocconi Insight + Veronesi Magazine + Bracco Pubblications) — Angelini Academy implementa `engaged-research` come hub primary con 4 paper hub vertical + paper full-PDF + executive summary corporate-friendly + chatbot AI-1 = pattern differenziante.
6. **Schema markup Organization + Article + Person + Event base** + **EducationalOrganization + Course** specifico per Academy (SDA pattern) — vedi §4 sotto.

I 4 pattern NON da replicare:
- Bracco `?category=...` in URL → frammenta authority.
- UCL profondità 4-5 livelli → fa senso solo se hosted sotto domain authority massiccio (UCL/MIT), non per nuovo dominio.
- IE meta description auto-generated → opportunità migliorabile sul sito Angelini, scriverle a mano.
- SDA double-canonical su programma in 2-3 aree tematiche → solo se gestito con `rel=canonical` rigoroso, altrimenti rischia duplicate content.

---

## 4. Schema Markup Recommendations

Specifiche schema.org per sito Angelini Academy. Implementazione obbligatoria da day-1 perché è l'investimento tecnico SEO più rapido che innesca rich results su Google. Schema vocabulary stable 2024 + Google Search Central guidelines. Implementazione preferita: **JSON-LD nel `<head>` di ogni pagina**, mai microdata in-line (separazione dati/markup).

### 4.1 Organization schema — homepage + Chi siamo

Schema base per identificare l'ente. Posizionata in `<head>` di tutte le pagine (è dati globali).

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.angeliniacademy.com/#organization",
  "name": "Angelini Academy",
  "alternateName": "Angelini Academy Srl",
  "url": "https://www.angeliniacademy.com/",
  "logo": "https://www.angeliniacademy.com/assets/logo-angelini-academy.png",
  "description": "Angelini Academy è la corporate academy di Angelini Industries. Hub editoriale di Engaged Research su pedagogia, edTech e applied research per corporate learning.",
  "foundingDate": "2018",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Angelini Industries",
    "url": "https://www.angeliniindustries.com/"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Viale Amelia 70",
    "addressLocality": "Roma",
    "postalCode": "00181",
    "addressCountry": "IT"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "media",
      "email": "press@angeliniacademy.com",
      "areaServed": ["IT", "EU"],
      "availableLanguage": ["Italian", "English"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "admissions",
      "email": "mba@angeliniacademy.com",
      "areaServed": ["IT", "EU"],
      "availableLanguage": ["Italian", "English"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/angelini-academy/",
    "https://www.instagram.com/angeliniacademy/",
    "https://www.facebook.com/angeliniacademy/"
  ],
  "memberOf": {
    "@type": "Organization",
    "name": "ASFOR — Associazione Italiana per la Formazione Manageriale"
  }
}
```

**Note implementative**:
- `@type: EducationalOrganization` (sottoclasse di Organization) — preferita rispetto a `Organization` semplice perché segnala a Google il dominio education = rich results education-specific.
- `parentOrganization` esplicita Angelini Industries → cross-domain entity linkage.
- `memberOf` ASFOR = certification signal.
- `sameAs` su social = entity disambiguation (Google Knowledge Graph).

### 4.2 Person schema — bio CEO Morbidelli + autori paper + ricercatori

Per ogni profilo personale rilevante: CEO Marco Morbidelli + autori paper Engaged Research + ricercatori esterni (UCL/IE Madrid in partnership).

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.angeliniacademy.com/it/chi-siamo/leadership/marco-morbidelli/#person",
  "name": "Marco Morbidelli",
  "givenName": "Marco",
  "familyName": "Morbidelli",
  "jobTitle": "CEO Angelini Academy",
  "worksFor": {
    "@id": "https://www.angeliniacademy.com/#organization"
  },
  "description": "CEO di Angelini Academy. Background in HR, labor relations, talent and organizational development, reward management, education. Già in telco poi Angelini.",
  "image": "https://www.angeliniacademy.com/assets/people/marco-morbidelli.jpg",
  "sameAs": "https://www.linkedin.com/in/marco-morbidelli/",
  "url": "https://www.angeliniacademy.com/it/chi-siamo/leadership/marco-morbidelli/"
}
```

Pattern simile per ogni autore di paper Engaged Research — il blocco Person va incluso nel JSON-LD del paper (Article schema) sotto `author`.

### 4.3 Article schema — paper Engaged Research + executive summary + news

Pattern dual: paper full-PDF + executive summary corporate-friendly = 2 contenuti diversi, 2 Article schema diversi, **canonical separato**. Esempio paper:

```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": "https://www.angeliniacademy.com/it/engaged-research/paper/come-ai-personalizza-apprendimento-corporate/",
  "headline": "Come l'intelligenza artificiale personalizza l'apprendimento corporate",
  "alternativeHeadline": "Un'analisi applied research su 200 percorsi MBA con AI tutor",
  "description": "Paper Engaged Research firmato UCL+IE Madrid+Angelini Academy. Analizza 200 percorsi corporate MBA con AI tutor su 12 mesi, confronto pre-post performance.",
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-15",
  "author": [
    {
      "@type": "Person",
      "name": "Kaśka Porayska-Pomsta",
      "affiliation": "UCL Knowledge Lab"
    },
    {
      "@type": "Person",
      "name": "[Nome Autore IE Madrid]",
      "affiliation": "IE Business School Madrid"
    }
  ],
  "publisher": {
    "@id": "https://www.angeliniacademy.com/#organization"
  },
  "inLanguage": "it",
  "isPartOf": {
    "@type": "Periodical",
    "name": "Engaged Research — Angelini Academy"
  },
  "keywords": "intelligenza artificiale, pedagogia, edTech, corporate learning, MBA, AI tutor",
  "about": [
    {
      "@type": "Thing",
      "name": "Artificial Intelligence in Education"
    },
    {
      "@type": "Thing",
      "name": "Corporate Learning"
    }
  ],
  "image": "https://www.angeliniacademy.com/assets/papers/ai-apprendimento-corporate-cover.jpg",
  "url": "https://www.angeliniacademy.com/it/engaged-research/paper/come-ai-personalizza-apprendimento-corporate/",
  "encoding": {
    "@type": "MediaObject",
    "contentUrl": "https://www.angeliniacademy.com/assets/papers/ai-apprendimento-corporate.pdf",
    "encodingFormat": "application/pdf"
  }
}
```

**Note**:
- `@type: ScholarlyArticle` per paper firmati con peer review-like rigor; `@type: Article` per executive summary + news.
- `author` array obbligatorio.
- `publisher` cross-linka all'Organization @id principale.
- `encoding` MediaObject espone il PDF download → Google Scholar può indicizzarlo direttamente.
- `inLanguage` IT o EN coerente al path.
- `keywords` allineato ai keyword target del §1.

### 4.4 Course schema — MBA Gateway + percorsi alternativi

Schema specifico education che Google rich results supporta. Posizionata sulla landing del programma.

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": "https://www.angeliniacademy.com/it/mba-gateway/#course",
  "name": "MBA Gateway — A bridge to succeed",
  "description": "MBA full-time internazionale con IE Business School Madrid. 1 anno accademico Madrid + 3-6 mesi internship in OpCo Angelini Industries (Pharma, Industrial Tech, Consumer, Ventures). 10 borse di studio integrali per ISEE/ISPE <50K€.",
  "provider": {
    "@id": "https://www.angeliniacademy.com/#organization"
  },
  "educationalCredentialAwarded": "Master of Business Administration (MBA)",
  "courseCode": "MBA-GATEWAY-2027",
  "inLanguage": ["en", "it"],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time",
    "startDate": "2026-09-01",
    "endDate": "2027-09-30",
    "location": {
      "@type": "Place",
      "name": "IE Business School Madrid",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madrid",
        "addressCountry": "ES"
      }
    },
    "courseWorkload": "PT40H"
  },
  "offers": {
    "@type": "Offer",
    "category": "Scholarship",
    "price": "0",
    "priceCurrency": "EUR",
    "eligibleQuantity": {
      "@type": "QuantitativeValue",
      "value": 10
    },
    "description": "10 borse di studio integrali per ISEE/ISPE <50K€. Per gli altri partecipanti: tassa di iscrizione €20.000 (25% del valore di mercato del master)."
  }
}
```

Pattern simile per `graduate-program/` con `educationalCredentialAwarded` diverso e `courseMode` diverso.

### 4.5 Event schema — Forum, Hackathon, Roadshow, Festival Trento

Per ogni evento ospitato sul sito (landing page). Permette rich results event-specific su Google.

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Festival Economia di Trento 2026 — side events Angelini Academy",
  "description": "Side events Angelini Academy in occasione del Festival Economia di Trento 2026. Talk, masterclass, networking con management Angelini Industries.",
  "startDate": "2026-05-20T09:00:00+02:00",
  "endDate": "2026-05-24T18:00:00+02:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Trento",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Trento",
      "addressRegion": "TN",
      "addressCountry": "IT"
    }
  },
  "organizer": {
    "@id": "https://www.angeliniacademy.com/#organization"
  },
  "performer": [
    {
      "@type": "Person",
      "name": "Marco Morbidelli",
      "jobTitle": "CEO Angelini Academy"
    }
  ],
  "url": "https://www.angeliniacademy.com/it/eventi/festival-trento-2026/",
  "image": "https://www.angeliniacademy.com/assets/events/festival-trento-2026-cover.jpg"
}
```

### 4.6 FAQPage schema — MBA Gateway FAQ + per-aziende FAQ + Engaged Research FAQ

Pattern per intercettare le question-based keyword del §1. Posizionata sulle pagine FAQ. Google espone le FAQ direttamente in SERP come dropdown = aumenta CTR.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quanto costa il MBA Gateway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Per i 10 partecipanti selezionati con ISEE/ISPE inferiore a 50.000€ la borsa di studio è totale e copre interamente la tassa di iscrizione al programma. Per gli altri partecipanti la tassa di iscrizione è di €20.000, pari al 25% del valore di mercato del master."
      }
    },
    {
      "@type": "Question",
      "name": "Come funziona la borsa di studio del MBA Gateway?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le 10 borse di studio integrali sono assegnate ai candidati selezionati che dimostrano ISEE/ISPE inferiore a 50.000€. La selezione si basa su merito accademico, motivazione, fit con i settori target di Angelini Industries (life sciences e industrial robotics)."
      }
    },
    {
      "@type": "Question",
      "name": "Il MBA Gateway prevede tirocinio retribuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì. Dopo l'anno accademico full-time a Madrid è previsto un periodo di internship di 3-6 mesi in una delle 4 OpCo di Angelini Industries (Pharma, Industrial Tech, Consumer, Ventures), con possibilità di assunzione al termine."
      }
    }
  ]
}
```

Implementare FAQPage su minimo 3 hub: MBA Gateway, Engaged Research (FAQ per ricercatori e HR buyer), per-aziende (FAQ corporate clients).

### 4.7 BreadcrumbList schema — tutte le pagine livello 2 e 3

Pattern UCL osservato (vedi §3.2). Implementazione obbligatoria su tutte le pagine sotto la home.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.angeliniacademy.com/it/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Engaged Research",
      "item": "https://www.angeliniacademy.com/it/engaged-research/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Intelligenza Artificiale e Pedagogia",
      "item": "https://www.angeliniacademy.com/it/engaged-research/intelligenza-artificiale-pedagogia/"
    }
  ]
}
```

### 4.8 WebSite + SearchAction schema — sitewide

Posizionata in homepage. Permette a Google di mostrare sitelinks search box in SERP per query "Angelini Academy".

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.angeliniacademy.com/#website",
  "url": "https://www.angeliniacademy.com/",
  "name": "Angelini Academy",
  "publisher": {
    "@id": "https://www.angeliniacademy.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.angeliniacademy.com/search/?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 4.9 Validazione schema

Tutti gli schema vanno validati al go-live con [Google Rich Results Test](https://search.google.com/test/rich-results) + [Schema.org Markup Validator](https://validator.schema.org/). Audit semestrale obbligatorio (i schema sono soggetti a evoluzioni nelle linee guida Google).

---

## 5. KPI SEO baseline + tracking

Metriche da impostare nel sito nuovo al go-live. Sono KPI **misurabili dal day-1** (no baseline storica perché il sito attuale è obsoleto e non rappresenta il punto di partenza del nuovo posizionamento — vedi premessa). Le metriche si organizzano in 4 cluster: indexation + crawl health (sanità tecnica), organic visibility (traffico + ranking), engagement (interazione utente), conversion (lead per percorso utente).

### 5.1 Indexation + crawl health

Sanità tecnica del sito. Monitoraggio settimanale via Google Search Console (GSC) + sitemap XML.

| KPI | Target | Tracking |
|---|---|---|
| Pagine indicizzate / pagine target (sitemap coverage) | ≥95% entro 60gg go-live | GSC Index → Coverage |
| Pagine con errori di crawl (5xx, 4xx non-redirect) | 0 critici | GSC Crawl Stats + log monitoring |
| Pagine con `noindex` accidentale | 0 | GSC Index → Excluded by noindex tag |
| Robot.txt errors | 0 | GSC robots.txt Tester |
| Sitemap submitted + processed | sì entro 7gg | GSC Sitemap submission |
| Mobile usability errors | 0 | GSC Mobile Usability |
| Schema markup validation errors | 0 critici | Rich Results Test API audit settimanale |
| Hreflang errors | 0 | GSC International Targeting |

### 5.2 Organic visibility — traffic + ranking

Misurare la performance organica del sito. Monitoraggio mensile.

| KPI | Target post fase 2 (6 mesi go-live) | Target post 12 mesi |
|---|---|---|
| Sessioni organiche mensili totali | ≥5.000 | ≥20.000 |
| Branded query sessions (Angelini Academy, MBA Gateway, Morbidelli, Engaged Research) | ≥40% del totale | ≥30% (% diminuisce con maturity) |
| Non-branded organic sessions (long-tail) | ≥60% del totale | ≥70% |
| Keyword indexed in top-10 SERP (Italia) | ≥30 | ≥80 |
| Keyword indexed in top-3 SERP nicchia (4 paper hub vertical + MBA Gateway) | ≥10 | ≥25 |
| Average position keyword target (15 keyword §1.5) | ≤30 | ≤15 |
| Click-through rate medio SERP | ≥4% | ≥6% |
| Featured snippets ottenuti | ≥3 | ≥8 |
| People Also Ask appearances | ≥5 | ≥15 |

**Tool consigliati per ranking tracking**: Google Search Console (gratuito, dati Google authoritative) + Ahrefs/Semrush in fase 3 (post 12 mesi, quando si ha dato SEO maturo per giustificare €99-499/mese).

### 5.3 Engagement — comportamento utente

Misurare se il traffico organico è qualificato. Monitoraggio mensile.

| KPI | Target |
|---|---|
| Bounce rate landing 4 percorsi utente | ≤45% (post fase 2) |
| Pagine viste / sessione organica | ≥3,5 |
| Time on page paper Engaged Research | ≥3:30 minuti |
| Time on page MBA Gateway | ≥4:00 minuti |
| Scroll depth media homepage | ≥60% |
| Internal link click rate da hub a spoke | ≥25% |

### 5.4 Conversion — lead per percorso utente

Vedi [[Strategia Website 2026]] §7.1 — il KPI di conversion è il primary, l'organic traffic è il driver. Tracking via UTM + form analytics + AI-1/AI-2 analytics + email platform domain enrichment per Persona 3.

### 5.5 Core Web Vitals — performance + UX

Direct ranking factor Google da maggio 2021. Target Google "Good": LCP < 2.5s, INP < 200ms (sostituisce FID dal marzo 2024), CLS < 0.1. Tracking via Google PageSpeed Insights + Search Console Core Web Vitals report + Real User Monitoring (RUM) tipo CrUX.

| KPI | Target |
|---|---|
| LCP (Largest Contentful Paint) p75 | < 2.5s |
| INP (Interaction to Next Paint) p75 | < 200ms |
| CLS (Cumulative Layout Shift) p75 | < 0.1 |
| TTFB (Time to First Byte) p75 | < 600ms |
| % pagine "Good" su CrUX | ≥85% entro 60gg go-live |

### 5.6 Backlink baseline + autorialità

Misurare l'authority del dominio nel tempo. Monitoraggio trimestrale via GSC Links + Ahrefs/Majestic (gratuito limitato) o Bing Webmaster Tools.

| KPI | Target post 12 mesi |
|---|---|
| Referring domains unici | ≥150 |
| Backlinks totali | ≥500 |
| Backlinks da .edu / .ac.uk / .ac.it (accademici) | ≥30 |
| Backlinks da media outlet (Sole 24 Ore, Wired Italia, HBR Italia, AgendaDigitale) | ≥15 |
| Backlinks da partner accademici (IE Madrid, UCL, SDA Bocconi, LUISS BS, IMD, LBS) | ≥10 |
| Anchor text branded vs non-branded ratio | ≥60% branded (no over-optimization) |

### 5.7 Reporting cadence SEO

- **Settimanale (interno HeyAI laboratorio editoriale)**: dashboard light indexation + crawl errors + ranking shift sui 15 keyword priority.
- **Mensile (a Caterina + Tiziana)**: 1-pager con organic sessions + top 10 landing pages + top 10 keyword + Core Web Vitals + lead capturati per percorso utente.
- **Trimestrale (a Morbidelli + board Angelini Industries)**: report formale con trend + benchmark vs 5 siti comparable + investimento backlink + roadmap SEO trimestre successivo.

---

## 6. Priorità di implementazione — Quick Wins + Strategic Investments

Sintesi finale orientata al fornitore di sviluppo. Coerente con la modularità fase 1/fase 2 di [[Strategia Website 2026]] §8.

### 6.1 Quick wins (fase 1 — entro giugno 2026)

Anche se la fase 1 è restyling rapido del sito attuale (non sito nuovo nativo), le seguenti spec SEO sono implementabili sul sito esistente con costo basso e ritorno immediato:

1. **Hreflang corretto su tutte le pagine bilingue** — patch CMS attuale, 1 giorno-uomo, impact: cleanup confusione lingue in SERP.
2. **Title pattern `{Page Title} | Angelini Academy` + meta description scritte a mano** sulle 20 landing pages chiave — content team, 3 giorni-uomo, impact: CTR SERP +15-25%.
3. **301 redirect dal sito vecchio al sito nuovo** (vedi mappa redirect in [[Wireframe e Architettura]] §0.3) — fornitore IT, 1 giorno-uomo, impact: preserva equity URL pre-esistenti.
4. **Schema Organization + WebSite + SearchAction in homepage** — fornitore IT, 0.5 giorni-uomo, impact: brand entity in Knowledge Graph.
5. **Sitemap XML aggiornata + submit a GSC + Bing Webmaster Tools** — 0.5 giorni-uomo.
6. **Robots.txt audit + canonical tags sulle pagine in 2 versioni linguistiche** — 0.5 giorni-uomo.
7. **Landing MBA Gateway con FAQ schema** sulla pagina esistente (anche se restyling visivo non perfetto) — content team + dev, 2 giorni-uomo, impact: rich results in SERP per "MBA Gateway" + question-based queries.

### 6.2 Strategic investments (fase 2 — go-live ott 2026)

Spec SEO che si concretizzano solo nel sito nuovo nativo. Hand-over completo al fornitore di sviluppo (che sia HeyAI o fornitore IT gruppo Angelini) prima del kickoff fase 2.

1. **URL structure completa secondo §2.2** — implementare slug parlanti + hierarchy 3 livelli + permalink immutabili. Costo: parte integrante dello sviluppo fase 2.
2. **Hub-and-spoke internal linking** secondo §2.4 — design system documentato con componenti UI di "Related papers", "Same vertical", "From this author" automatici. Costo: 5-8 giorni-uomo dev frontend + content tagging.
3. **Schema markup completo §4** — implementazione JSON-LD su tutte le pagine template (homepage, paper, Course, Event, FAQ, Person, BreadcrumbList). Costo: 8-12 giorni-uomo dev backend + content team per dati strutturati.
4. **Hreflang completo IT/EN + x-default** secondo §2.5 — coverage EN selettivo (Engaged Research + Chi siamo + Press + MBA Gateway page principale). Costo: parte integrante dello sviluppo fase 2.
5. **Bilingual content priority** secondo §2.5 — content production EN per Engaged Research + Press. Costo: 15-25 giorni-uomo content team + traduzione professionale (no AI translation per paper accademici).
6. **Engaged Research Lab come pillar SEO** — paper full-PDF download + executive summary corporate-friendly + chatbot AI-1 integrato (vedi [[Strategia Website 2026]] §5.3 AI-1). Costo: parte integrante dello sviluppo OS2 + AI Layer fase 2.
7. **Backlink campaign strategica** — outreach a partner accademici (UCL Knowledge Lab, IE Insights, LBS, IMD), media outlet italiani (Sole 24 Ore Formazione, AgendaDigitale, Wired Italia, HBR Italia), ASFOR + Federmanager. Costo: 1-2 giorni-uomo/settimana content team, primi 6 mesi go-live fase 2.
8. **Google Search Console + Bing Webmaster Tools + Google Analytics 4 setup completo** + dashboarding mensile a Tiziana + Caterina + Morbidelli. Costo: 3 giorni-uomo setup + 1 giorno-uomo/mese reporting.

### 6.3 Dipendenze critiche

- **Brand book aggiornato** (cliente Angelini): blocca title pattern e visual coerence di componenti UI SEO-relevant tipo breadcrumb + related links. Da chiedere a Elena entro 17/5 (allineato con rischio 2 di [[Strategia Website 2026]] §9.3).
- **Paper Engaged Research disponibili al go-live**: blocca §6.2 punto 6. Mitigation in [[Strategia Website 2026]] §9.3 rischio 3 (paper UCL/IE riformulati come applied research + case study Hackathon dic 2025 + interviste editoriali per copertura iniziale).
- **Decisione fornitore tecnico fase 2** (HeyAI vs fornitore IT gruppo Angelini): blocca §6.2 punti 1-3 sull'allocazione concreta delle ore-uomo. Il deliverable SEO Specs è scritto in modo da essere implementabile da qualsiasi fornitore.

---

## 7. Lettura tecnica del sito attuale — opportunità da cogliere

> Prima lettura mirata del sito `angeliniacademy.com` sui dati reali, complementare alla specifica forward-looking dei capitoli 1-6. Registro: opportunità e aree di miglioramento, non criticità. Nessun dato di volume (vincolo dichiarato); le rilevazioni tecniche sono ri-verificabili in pochi minuti. Tre opportunità ad alto impatto e basso sforzo, più una sintesi competitor.

### 7.1 Visibilità sui motori AI (quick win, priorità 1)
Il `robots.txt` attuale non apre ancora l'accesso ai crawler degli assistenti AI (ChatGPT, Perplexity, Claude) e si esclude dal grounding di Gemini (Google-Extended). Aprirli è una modifica di configurazione a costo quasi nullo e ad alta coerenza con il posizionamento (cointelligenza umano-IA tra i 4 ambiti). I crawler di ricerca tradizionali (Google, Bing) accedono regolarmente; le AI Overviews di Google restano raggiungibili al migliorare del posizionamento. `llms.txt` assente — valutabile in Fase 2 (peso oggi marginale).

### 7.2 Fondamenta SEO on-page (quick win, priorità 1)
Margini di ottimizzazione immediati su title delle pagine, meta description, Open Graph per le anteprime social e dati strutturati (lo schema `Organization` presente è minimale). Correzioni rapide con impatto diretto su ranking, CTR e anteprime — abilitano da subito gli interventi schema del capitolo 4 al go-live (day-1).

### 7.3 Valorizzazione del patrimonio per motori e AI (priorità 2)
Asset d'autorità reali — Cattedra LUISS, 8 business school internazionali, accreditamento ASFOR, white paper con Harvard Business Review Italia — oggi non sono marcati con dati strutturati né collegati come entità (`sameAs`, `Person`, `memberOf` ASFOR, `parentOrganization` Angelini Industries). Marcarli trasforma il patrimonio esistente in autorevolezza percepita da Google e citabilità da parte delle AI. Le mention guadagnate (Symbola, Affaritaliani, Sole 24 Ore) sono leve di brand-entity da capitalizzare.

### 7.4 Sintesi competitor (insight utili alla tesi)
Tra i player di riferimento: nessuno offre un assistente AI interrogabile sui propri contenuti editoriali, né un hub unico che aggrega ricerca + eventi + programmi; foundation IT-only vs research-lab EN-only confermano il vantaggio del bilinguismo paritetico. Questi spazi confluiscono negli insight strategici del pitch (dimensione umana + AI sul contenuto come spazio bianco europeo).

### 7.5 Priorità sintetica
1. Aprire la visibilità AI nel `robots.txt` (configurazione, costo ~0).
2. Sistemare title/meta/Open Graph + schema `EducationalOrganization` + `WebSite` day-1.
3. Marcare patrimonio (`Person`, `sameAs`, `memberOf`, `parentOrganization`) e contenuti (`Article`/`ScholarlyArticle`, `Course`, `Event`).

L'analisi tecnica completa (performance, accessibilità WCAG, schema esteso, visibilità SEO/AI, benchmark competitor) con piano di attivazione prioritizzato è il primo deliverable della Fase 2.

---

## Note metodologiche

**Skill applicata**: `marketing:seo-audit` adattata al caso *forward-looking* (sito nuovo da costruire) anziché *retrospective* (audit di sito esistente). I 5 capitoli standard della skill (keyword research, on-page audit, content gap, technical SEO, competitor comparison) sono stati ricalibrati come: keyword research per 4 percorsi utente (§1), content architecture target (§2), benchmark sui 5 comparable scelti dal cliente (§3), schema markup recommendations (§4), KPI baseline (§5), priorità di implementazione (§6).

**Cosa NON fa questo documento**:
- NON audita il sito attuale `angeliniacademy.com` (obsoleto e fuori dal nuovo posizionamento — vedi [[Wireframe e Architettura]] §0.3).
- NON usa strumenti SEO a pagamento (no Ahrefs, no Semrush — vincolo dichiarato). Volume e difficulty sono qualitativi.
- NON fa claim su strategia interna dei 5 siti benchmark (solo osservazioni verificabili dal browser — coerente con metodologia [[Scan Siti Web Comparable]]).
- NON include scope-creep su PR/Forum/Hackathon/eventi propri (fuori scope HeyAI sito — vedi [[Strategia Website 2026]] §5.2).

**Documenti complementari da costruire**:
- [[Accessibility Specs Sito Nuovo Angelini Academy|Accessibility Specs Sito Nuovo]] — chat dedicata `/design:accessibility-review` (scope WCAG 2.1 AA implementativo).
- ❌ Brand Review Sito Angelini — **deliverable non prodotto** (decisione Carlo 14/5/2026: non utile per il pitch finale).

**Audience del documento**: uso interno HeyAI + base operativa per pitch finale a Caterina Caboni come allegato tecnico. Condivisione asciutta a Daniele/Elena previo allineamento 14/5.

**Verifica e prossimi step**:
1. Revisione interna Carlo 14/5 mattina.
2. Allineamento con Daniele+Elena 14/5 pomeriggio sul flusso SEO ↔ Strategia Website (qualsiasi divergenza si chiarisce prima del consolidamento pitch).
3. Embed nel pitch finale come anexo tecnico (slide 1-pagina riassuntiva + link al doc completo come PDF).
4. Hand-over al fornitore di sviluppo (HeyAI o fornitore IT gruppo Angelini) post aggiudicazione gara come spec implementativa.

## Fonti

Ricerca keyword + benchmark al 13/5/2026 via WebSearch + WebFetch:

- [SDA Bocconi — Full-Time MBA Fees and Scholarships](https://www.sdabocconi.it/en/mba-executive-mba/full-time-mba/fees-and-scholarships/)
- [MIB Trieste — Executive MBA borse di studio](https://mib.edu/it/mba/executive-mba-part-time/emba/ammissione/borse-di-studio)
- [SDA Bocconi — Homepage](https://www.sdabocconi.it/it)
- [IE Insights — Knowledge Hub](https://www.ie.edu/insights/)
- [IE University — Uncover IE (taxonomy)](https://www.ie.edu/uncover-ie/)
- [UCL Knowledge Lab](https://www.ucl.ac.uk/ioe/departments-and-centres/ucl-knowledge-lab)
- [UCL Knowledge Lab — Research and consultancy](https://www.ucl.ac.uk/ioe/departments-and-centres/ucl-knowledge-lab/research-and-consultancy)
- [Fondazione Bracco — Home EN](https://www.fondazionebracco.com/en/)
- [Fondazione Bracco — Our projects Science & Social](https://www.fondazionebracco.com/en/our-projects/science-social/)
- [Fondazione Umberto Veronesi](https://www.fondazioneveronesi.it/)
- [Fondazione Veronesi — Borse di ricerca](https://www.fondazioneveronesi.it/temi/borse-di-studio)
- [Angelini Academy — Sito attuale](https://www.angeliniacademy.com/en/)
- [Angelini Industries — Angelini Academy](https://www.angeliniindustries.com/en/about-us/angelini-academy/)
- [ASFOR — Associazione Italiana per la Formazione Manageriale](https://asfor.it/it/)
- [Best Tech Partner — Formazione aziendale 2026](https://www.besttechpartner.ai/2026/05/09/formazione-aziendale-e-nuovi-modelli-operativi-guida-al-reskilling-e-change-management-2026/)
- [Manpower — Lifelong learning](https://www.manpower.it/it/insights/blogs/2025/01/08/lifelong-learning)
- [CEDEFOP — Italy upskilling and reskilling](https://www.cedefop.europa.eu/en/news/italy-additional-funding-boosts-upskilling-and-reskilling)
- [AgenziaCult — Educazione digitale e AI](https://www.agenziacult.it/letture-lente/era-digitale/educazione-digitale-e-intelligenza-artificiale-frontiere-e-sfide-delledtech/)
- [Franco Angeli — Il dibattito scientifico AI in ambito educativo](https://journals.francoangeli.it/index.php/ess/article/download/18523/3209/91259)
- [InvalsiOpen — Intelligenza Artificiale a Scuola](https://www.invalsiopen.it/intelligenza-artificiale-sfide-opportunita-scuola/)
- [Schema.org — Course type](https://schema.org/Course)
- [Schema.org — EducationalOrganization](https://schema.org/EducationalOrganization)
- [Schema.org — ScholarlyArticle](https://schema.org/ScholarlyArticle)
- [Google Search Central — Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
