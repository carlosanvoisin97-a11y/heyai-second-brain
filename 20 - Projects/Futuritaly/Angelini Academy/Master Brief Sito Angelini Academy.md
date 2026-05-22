---
type: brief
status: active
priority: P1
client: Angelini Academy
created: 2026-05-15
updated: 2026-05-15
aliases: [Master Brief Angelini, Master Brief Sito, Brief Claude Code Angelini]
projects: [_Angelini Academy]
audience: AI website builder (Claude Code)
scope: MVP pitch-ready per 31/5/2026
---

# Master Brief — Sito Angelini Academy (MVP per pitch finale 31/5/2026)

> Documento auto-sufficiente per il generatore AI di siti web (Claude Code). Sintetizza i 9 file fonte del dossier Angelini Academy in una specifica eseguibile. Lingua sito: italiano (struttura predisposta per EN). Deadline: 31/5/2026.

---

## 0. Scope e ipotesi

Questo brief produce un **MVP NAVIGABILE da pitch**, non un sito production-ready post-aggiudicazione gara. L'MVP serve come "prova di esecuzione" da mostrare a Caterina Caboni (Angelini Academy) il 31/5/2026: deve essere navigabile, mobile responsive, brand-compliant, con copy reale dove disponibile e placeholder dichiarato dove no.

**Cosa è in scope MVP**:
- Sito Next.js 14 (App Router) + Tailwind CSS 3.4 + TypeScript
- 7+ pagine navigabili (Home, Chi Siamo, 4 landing cluster, Engaged Research, MBA Gateway, Eventi, Press, Contatti)
- Character Selection Screen come hero della homepage (4 personaggi stile graphic novel europeo, in fallback 2D)
- Design system con design tokens (colori, tipografia, spacing) basato su brand Angelini
- Schema.org markup completo (EducationalOrganization, Person, Course, Event, FAQPage, BreadcrumbList)
- Accessibility WCAG 2.1 AA dal disegno (skip-link, focus ring, ARIA landmark, keyboard navigation, contrast ratio)
- Mobile responsive 320-1920px
- Lighthouse score >85 su Performance/A11y/SEO/Best Practices

**Cosa NON è in scope MVP**: login/area utente, e-commerce, CMS (content statico hardcoded), multilingua dinamico (solo IT, struttura `hreflang` predisposta per EN futuro), form backend reale (mock submission con `console.log`), analytics in produzione, AI features funzionanti (sono UI placeholder con disclaimer "demo").

**Ipotesi tecnologiche di default** (Carlo può ribattere prima del lancio Claude Code):
- Framework: **Next.js 14 App Router**
- Styling: **Tailwind CSS 3.4** con design tokens via CSS custom properties
- Lingua: **TypeScript** strict
- Routing: file-based App Router con `[locale]` segment per future EN
- Image optimization: `next/image` con WebP + fallback JPG
- Font loading: `next/font` con `display: swap`
- Deploy target: **Vercel** (zero-config Next.js)

**Ipotesi su cliente**: dati e copy reali dove disponibili dalle fonti vault, altrimenti placeholder dichiarato `[[TBD]]`. Mai inventare numeri o citazioni.

**Mockup Figma di riferimento**: non disponibili (decisione esplicita Carlo+Michele 7/5/2026: si va con metodo "sito vero pre-pitch", non Figma). Il sito generato da Claude Code è il primo artefatto visivo del progetto.

---

## 1. Contesto cliente

**Angelini Academy** è una società di **Angelini Industries** (holding industriale italiana) dedicata al Corporate Learning, in evoluzione da business unit interna a SRL autonoma. Il rebranding "Angelini Academy Evolution" è il driver del piano di comunicazione 2026 e di questa gara.

**Sede legale**: Viale Amelia 70, 00181 Roma. **Sito attuale** (da sostituire): `angeliniacademy.com`.

**Vision dichiarata**: *"Achieve global leadership in corporate learning innovation through new contents and new learning models."*

**Purpose**: *"Building bridges in education"* — costruire ponti tra competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera.

**CEO**: Marco Morbidelli (background HR + telco + Angelini). Il brief gara richiede esplicitamente la costruzione/ottimizzazione del suo profilo LinkedIn personale come "spoke-people" del brand.

**Architettura interna Academy**: nucleo **Engaged Research** + 4 pilastri di posizionamento:
1. **Corporate Learning** (Masters Corporate MBA / EMBA, masterclass, individual intensive training, coaching ICF, mentoring intercompany)
2. **Innovazione tecnica e manageriale** (programmi su misura per le 4 OpCo del gruppo: Pharma, Fameccanica, Ventures, Fater)
3. **Educational Think Tanks** (Forum annuale, Hackathon, workshop creativi su cointelligenza umano-IA)
4. **MBA Gateway** "A bridge to succeed" — MBA full-time con IE Madrid, 10 borse di studio per ISEE/ISPE <50K€, tassa €20K (25% valore di mercato), internship 3-6 mesi nelle OpCo, possibile assunzione

**Partnership accademiche dichiarate**: London Business School, IMD, Stockholm SE, IE Business School Madrid, UCL, Royal College of Art, SDA Bocconi, LUISS, Bologna Business School, Imperial College, ESCP.

**Doppia anima del sito**:
- **Istituzionale**: dialogo con ricercatori universitari, partnership accademiche, valorizzazione della ricerca su modelli educativi
- **Commerciale/lead gen**: candidature MBA Gateway, iscrizioni Hackathon, prenotazione Forum, follow-up Roadshow università

**Eventi 2026 chiave**: Festival dell'Economia di Trento (20-24 maggio 2026, momento di massima visibilità annuale), Roadshow università (giu-dic 2026), Hackathon (sequel del 17/12/2025 con Bologna BS), Forum annuale (possibile premio Nobel), Wired Festival, Biennale Venezia, TaoBuk.

**Tone of voice dichiarato (brief slide 18)**: Autorevole, Autentico, Vicino, Ispirazionale, Innovativo. Archetipo brand: Saggio (primario) + Mago (secondario). Stile di riferimento: "fondazione culturale-scientifica europea con propensione mecenatistica" — non business school glamour, non startup-cool, non corporate-paterna.

---

## 2. Obiettivi del sito (prioritizzati)

Cinque obiettivi ordinati per priorità strategica. KPI target derivati da [[Strategia Website 2026]] §7 (post-go-live fase 2, finestra giu-dic 2026).

1. **Consolidare il posizionamento "fondazione culturale-scientifica europea"** come riferimento permanente. KPI: ≥25.000 sessioni mensili steady-state · bounce rate landing 4 cluster ≤45% · time on site ≥2:30.
2. **Generare lead qualificati per MBA Gateway** (cluster Giovani Talenti). KPI: ≥300 form expression of interest MBA Gateway 2027 ricevuti via sito · ≥1.500 quiz Career Path Navigator completati.
3. **Attivare l'Engaged Research Lab come hub editoriale paper-based** in IT/EN paritetico (cluster Ricercatori). KPI: ≥5.000 download paper · ≥30 form proposte collaborazione · ≥10.000 sessioni chatbot AI-1.
4. **Soft seeding per HR/L&D buyer enterprise** (cluster Aziende, apertura formale 2027-2028). KPI: ≥300 newsletter subscriber da company domain >500 employee · ≥800 paper executive summary download.
5. **Press room istituzionale e media-friendly** (cluster Media/Istituzioni). KPI: ≥3.000 sessioni press room · ≥200 media kit download.

**KPI tecnici/qualità (vincolanti per MVP)**:
- Performance Core Web Vitals: **LCP <2.5s, CLS <0.1, INP <200ms** su mobile 3G simulato
- Accessibility WCAG 2.1 AA: **≥95% checkpoint passed** (audit con axe-core / Lighthouse)
- SEO: schema markup validato, no broken link, sitemap.xml auto-generata
- Lighthouse aggregate score: **>85** su Performance/A11y/SEO/Best Practices

---

## 3. Audience / Cluster target

Quattro cluster operativi (sostituiscono i 6 cluster generici del brief). Ciascuno ha landing dedicata accessibile dall'header navigation.

### Cluster 1 — Giovani Talenti (priorità primaria)

**Chi sono**: 22-35 anni. Tre sottogruppi: (a) neolaureati/studenti senior in life sciences, ingegneria biomedica, robotica, gestione manageriale; (b) manager early-career in pharma/biotech/medtech/robotica industriale che cercano accelerazione carriera; (c) ricercatori junior PhD/post-doc su pedagogia AI/edTech/neuroscienze. Geografia: italiana al lancio.

**Cosa cercano**: capire se Angelini Industries è posto serio per sviluppare carriera; valutare fit con MBA Gateway / graduate program / posizione diretta; accedere a borsa di studio; vedere volti/traiettorie reali; concretamente cosa significa lavorare nel gruppo.

**Messaggio chiave**: *"Un percorso accademico-industriale serio in scienze della vita e robotica industriale, dove la ricerca pedagogica vive nello stesso luogo dove costruisci la tua carriera."*

**CTA primaria**: "Scopri il tuo percorso" → Quiz Career Path Navigator (AI-2, demo). **CTA secondaria**: "Candidati al MBA Gateway".

**Personaggio della Character Selection Screen**: **Sofia** (26 anni, ricercatrice life sciences/robotics, camice aperto su blusa navy, tablet con dati scientifici).

### Cluster 2 — Ricercatori e Accademici

**Chi sono**: 28-65 anni. Post-doc, assistant/associate professor di università europee, focus pedagogia + edTech + AI in education + lifelong learning. PhD candidates su temi rilevanti. Startup founder biotech/medtech/edTech. Policy maker education/innovation. Geografia: paneuropea, focus UK + Spagna + Italia (rete UCL + IE Madrid).

**Cosa cercano**: partner industriali per applicare ricerca; canale di pubblicazione co-firmato; tradurre innovazione pedagogica in applicazione corporate; per startup, accesso a deal flow Angelini Ventures; per policy maker, casi italiani citabili.

**Messaggio chiave**: *"Un hub di ricerca pedagogica europea con DNA industriale, dove la vostra ricerca trova canale di adozione e diffusione reale."*

**CTA primaria**: "Esplora i paper Engaged Research". **CTA secondaria**: "Proponi una collaborazione".

**Personaggio**: **Marco** (46 anni, professore/ricercatore UCL-IE Madrid, blazer tweed-navy, journal accademico in mano).

### Cluster 3 — HR/L&D Buyer Enterprise (soft seeding 2026)

**Chi sono**: 38-55 anni. CHRO / L&D Director di grandi aziende italiane mid-large pharma/biotech/manufacturing/financial services/consulting. CEO/GM medie imprese in scale-up. Talent Manager gruppi industriali europei. Geografia: italiana al lancio.

**Cosa cercano**: programma corporate che combini rigore accademico e applicabilità immediata; risolvere skill gap specifico (es. "30 manager mid-level capiscano AI applicata"); allineare formazione ad agenda ESG; benchmark ROI vs Coursera/Emeritus/Kellogg Online.

**Messaggio chiave**: *"Un partner di executive education che porta la ricerca scientifica nella vostra azienda, non un fornitore di corsi pronti in catalogo."*

**CTA primaria (soft 2026)**: "Iscriviti alla newsletter Insights per HR". **CTA secondaria**: "Scarica un paper executive summary".

**Nota MVP**: questo cluster ha **soft seeding**, non vendita pushy. Form leggero "contattatemi quando avrete programmi corporate", nurturing 6-12 mesi.

**Personaggio**: **Giulia** (38 anni, giornalista/opinion leader education-innovation-pharma) NB: nei file fonte Giulia è il personaggio MEDIA. Per cluster HR Buyer è necessario considerare che il Character Selection ha 4 personaggi che rappresentano i 4 cluster, e la mappatura definitiva è: Giulia=Media, Marco=Ricercatori, Sofia=Talenti, Luca=Founder/Innovatori. **Il cluster "HR Buyer Enterprise" della Strategia Website 2026 non ha personaggio dedicato nella Character Selection** — è un cluster soft-seeding accessibile via landing "Per Aziende" da menu, non da hero.

### Cluster 4 — Media / Istituzioni / Community

**Chi sono**: 35-65 anni. Giornalisti settoriali (Sole 24 Ore, Repubblica, Il Foglio, Wired Italia, AgendaDigitale, HBR Italia, possibile Financial Times). Policy maker IT-EU (MIUR, MUR, EU Commission DG EAC, OECD Education). Stakeholder istituzionali (associazioni industriali, sindacati, advocacy figure).

**Cosa cercano**: conoscere Angelini Academy come voce nel settore education; dati e ricerca citabile; press kit aggiornato + contatto stampa rapido; partecipare a eventi pubblici; identificare casi italiani citabili.

**Messaggio chiave**: *"Una voce italiana nel dibattito europeo sull'evoluzione del lavoro e dell'educazione, articolata su ricerca pubblicata e su un programma di lifelong learning aperto."*

**CTA primaria**: "Scarica il press kit". **CTA secondaria**: "Iscriviti alla newsletter media".

**Personaggio**: **Giulia** (38 anni, giornalista, blazer su turtleneck, badge stampa, taccuino, sfondo auditorium).

### Personaggio aggiuntivo Character Selection Screen

**Luca** (32 anni, founder biotech/edtech/industrial tech) rappresenta il sottogruppo "Founder e innovatori che cercano transfer technology" — assorbito dal Cluster 3 Ricercatori (sotto-set startup early-stage). Landing dedicata: `/it/engaged-research/innovation-scouting/` (bridge Ventures + Hackathon).

---

## 4. Sitemap e architettura

### 4.1 Albero sitemap MVP (livello 1+2)

```
/                                       Homepage con Character Selection Screen
├── /chi-siamo/                        Cornice istituzionale
│   ├── /vision-purpose/
│   ├── /leadership/
│   │   └── /marco-morbidelli/         Bio CEO con Person schema
│   ├── /partnership-accademiche/      Hub partnership (8 partner schede)
│   └── /angelini-industries/          Bridge holding (4 OpCo cross-link)
├── /engaged-research/                 HUB EDITORIALE — pillar prioritario
│   ├── /intelligenza-artificiale-pedagogia/   Paper hub verticale 1
│   ├── /edtech-applicato/                     Paper hub verticale 2
│   ├── /skill-mismatch/                       Paper hub verticale 3
│   ├── /lifelong-learning-over-50/            Paper hub verticale 4
│   ├── /paper/[slug]/                         Singolo paper landing
│   ├── /ai-research-assistant/        Landing AI-1 chatbot (demo MVP)
│   └── /proponi-collaborazione/       Form proposta ricerca
├── /mba-gateway/                      PILLAR talent funnel
│   ├── /programma/
│   ├── /programma-ie-madrid/
│   ├── /calendario/                   Timeline 5 tappe
│   ├── /borsa-di-studio/              Simulazione ISEE/ISPE (UI demo)
│   ├── /testimonial/                  Founder Stories integrate (MVP: placeholder)
│   └── /candidature/                  Form expression of interest
├── /talent-hub/                       PILLAR percorsi alternativi MBA
│   ├── /graduate-program/
│   ├── /founder-stories/              Video player + transcript
│   └── /career-path-ai/               Landing AI-2 Career Path Navigator (demo)
├── /per-aziende/                      Soft B2B (apertura 2027)
│   ├── /corporate-learning-pharma/
│   ├── /executive-education/
│   ├── /masterclass-ai-pedagogia/
│   └── /insights-per-hr/              Paper executive summary downloadabili
├── /eventi/                           Calendario + seeding
│   ├── /calendario/
│   ├── /festival-trento-2026/
│   ├── /forum-annuale/
│   ├── /hackathon/
│   └── /roadshow-universita/
├── /press/                            Newsroom
│   ├── /press-releases/
│   ├── /media-kit/
│   └── /contatti-stampa/
├── /contatti/
└── /              Footer pages
    ├── /privacy/
    ├── /cookie/
    ├── /accessibility-statement/
    └── /sitemap/
```

**Convenzioni URL** (vincolanti per Claude Code):
- Tutto **lowercase**, separatore **trattino** (`engaged-research`, non `engagedResearch`)
- Slug parlanti, no ID numerici nei permalink di pagine evergreen
- **Trailing slash sì** (coerente con sito attuale Angelini)
- No `.html`/`.php`/`.aspx`
- Permalink immutabili: 301 redirect obbligatori in caso di rename
- Mai accenti né caratteri speciali negli slug

**Profondità massima URL**: 3 livelli dopo `/`. Esempio limite: `/engaged-research/paper/come-l-ai-personalizza-l-apprendimento/`.

### 4.2 Menu primario navbar (6 voci)

`Chi siamo · L'Academy ▾ · MBA Gateway · Eventi · Engaged Research · Contatti`

Dropdown **"L'Academy"** apre su: Corporate Learning · Innovazione tecnica e manageriale · Educational Think Tanks · Talent Hub · Per Aziende.

**Switch lingua IT/EN** in top-right (EN come placeholder MVP, ma struttura attiva).

**CTA pillola persistente in header**: "Candidati al MBA Gateway" (su mobile collassa in icona).

### 4.3 Bilinguismo IT/EN — predisposizione

L'MVP è solo IT, ma la struttura è bilingue-ready. Implementazione **hreflang** obbligatoria già in MVP:

```html
<link rel="alternate" hreflang="it" href="https://www.angeliniacademy.com/" />
<link rel="alternate" hreflang="en" href="https://www.angeliniacademy.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://www.angeliniacademy.com/" />
```

`x-default` punta a IT. Per MVP usare `[locale]` segment Next.js anche se EN content è placeholder.

---

## 5. Pagine — specifica per AI builder

Per ciascuna pagina MVP: path URL, obiettivo, sezioni (ordine scroll), copy operativo (hero title, hero subtitle, CTA primary/secondary, body bullets), componenti UI usati, schema.org markup richiesto.

### 5.1 Homepage `/`

**Obiettivo**: presentare Angelini Academy come SRL autonoma e segmentare immediatamente l'utente nei 4 percorsi via Character Selection Screen.

**Sezioni (ordine scroll)**:

1. **Header sticky** (Navbar component)
2. **Hero — Character Selection Screen** (custom component, vedi §8)
3. **Sezione "Cosa facciamo" — 4 pilastri + nucleo Engaged Research** (Card grid)
4. **Sezione "People-first" — carosello volti** (Carousel component)
5. **Sezione "Prossimi eventi"** (Event strip — 3 card eventi)
6. **Sezione "Insight dal Blog"** (3 articoli, uno per filo rosso)
7. **Sezione "Partnership accademiche"** (Logo strip)
8. **Sezione "Newsletter"** (Form one-line)
9. **Footer** (Footer component)

**Copy operativo**:
- **Hero title**: "Building bridges in education" (preservare payoff ufficiale brief slide 8)
- **Hero subtitle**: "Costruiamo ponti tra competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera."
- **Sezione "Cosa facciamo" — claim**: "Un'Academy nata dalla ricerca, costruita per chi vuole imparare a costruire."
- **Pilastri (ordine card 4-1-3-2 — MBA Gateway, Corporate Learning, Educational Think Tanks, Innovazione)**:
  - MBA Gateway: *"Un anno di MBA con IE Madrid, internship in Angelini, dieci borse di studio per chi ne ha bisogno."*
  - Corporate Learning: *"Masterclass, MBA executive, coaching e mentoring. Per leader e talent che pensano al lavoro di domani."*
  - Educational Think Tanks: *"Forum annuale, Hackathon, workshop. Dove la ricerca incontra la pratica."*
  - Innovazione tecnica e manageriale: *"Programmi su misura per le società Angelini Industries. Niente formazione astratta."*
- **People-first claim**: *"Persone vere, percorsi reali. Le storie di chi ha scelto Angelini Academy."*
- **CTA newsletter**: "Iscriviti alla newsletter" / placeholder email "il-tuo-indirizzo@email.it" / disclaimer privacy: "Trattamento dati ai sensi GDPR. Leggi l'informativa."

**Componenti UI**: Navbar, CharacterSelectionScreen, PilastroCard (×4), NucleoEngagedResearchBadge, PeopleCarousel, EventCard (×3), BlogArticleCard (×3), PartnerLogoStrip, NewsletterInline, Footer.

**Schema markup**: `EducationalOrganization` (root organization), `WebSite` con `SearchAction`, `BreadcrumbList`.

### 5.2 Chi Siamo `/chi-siamo/`

**Obiettivo**: raccontare identità SRL autonoma in evoluzione + profondità istituzionale per stakeholder/media/partner.

**Sezioni**:
1. Hero institutional (foto sede Roma o auditorium)
2. Vision + Purpose (testo lungo curato)
3. Storia evoluzione business unit → SRL autonoma
4. Heritage famiglia Angelini (mecenatismo, cornice valoriale)
5. Profilo CEO Marco Morbidelli con link `/leadership/marco-morbidelli/`
6. Mappa partnership accademiche (link `/partnership-accademiche/`)
7. Collocazione dentro Angelini Industries (link `/angelini-industries/`)
8. CTA: "Scopri Engaged Research" (primary) / "Contattaci per partnership" (secondary)

**Copy operativo**:
- **Hero title**: "Una nuova pedagogia per un lavoro in continua evoluzione"
- **Hero subtitle**: "Angelini Academy nasce dentro Angelini Industries come società dedicata al Corporate Learning. Costruiamo ponti tra ricerca pedagogica, formazione executive e impresa industriale."
- **Vision block**: "Achieve global leadership in corporate learning innovation through new contents and new learning models."
- **Purpose block**: "Building bridges in education — costruiamo ponti tra competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera."

**Componenti**: Breadcrumb, HeroInstitutional, TextBlock, LeadershipTeaser, PartnershipMap, IndustriesBridge, CTABand.

**Schema markup**: `AboutPage`, `Organization`, `BreadcrumbList`.

### 5.3 Engaged Research Lab `/engaged-research/`

**Obiettivo**: hub editoriale paper-based, cuore intellettuale del sito. Pillar SEO prioritario.

**Sezioni**:
1. Hero sobrio (foto laboratorio/ricercatore, NON aspirational marketing)
2. Manifesto Engaged Research (paragrafo lungo, registro accademico-saggio)
3. **Tassonomia 4 verticali** (Tab control WAI-ARIA — vedi §10):
   - Intelligenza Artificiale e Pedagogia
   - EdTech Applicato
   - Skill Mismatch
   - Lifelong Learning Over 50
4. Lista paper recenti (PaperCard grid)
5. **Chatbot AI-1 demo** (placeholder con disclaimer "Demo MVP — funzionalità in sviluppo")
6. Form "Proponi una collaborazione"
7. Cattedre e collaborazioni (UCL, IE Madrid, LUISS, Royal College of Art)
8. Newsletter signup segmentata (researcher track)

**Copy operativo**:
- **Hero title**: "Engaged Research — il nucleo da cui parte tutto"
- **Hero subtitle**: "Studiamo come le persone imparano per costruire come dovranno imparare domani."
- **Manifesto (3 paragrafi)**: `[[Copy TBD — richiede stesura curata da Carlo/laboratorio editoriale]]`
- **Verticali tab labels**: come sopra (i 4 titoli sono copy reale)
- **Paper card placeholder** (3-5 paper esempio con title `[[TBD]]`, autore `[[TBD]]`, data 2026, abstract `[[Copy TBD]]`, CTA "Scarica paper (PDF)")
- **Chatbot disclaimer**: "Demo MVP. Nel sito production-ready, questo chatbot risponderà alle vostre domande citando solo paper Engaged Research pubblicati. Non parla di temi non pubblicati, non inventa fonti, non suggerisce percorsi formativi."

**Componenti**: HeroSober, Manifesto, TabsTaxonomy (WAI-ARIA tabs), PaperCard, ChatbotDemo, FormCollaborazione, PartnerCard, NewsletterSegmented.

**Schema markup**: `CollectionPage`, `ScholarlyArticle` (per ogni paper), `Person` (autori), `BreadcrumbList`.

### 5.4 MBA Gateway `/mba-gateway/`

**Obiettivo**: convertire il pilastro 4 (unico con processo strutturato) in pipeline candidature qualificate. CTA primaria globale del sito.

**Sezioni**:
1. Hero focalizzato (foto induction Casa Angelini o ammessi edizione precedente, placeholder)
2. **In sintesi** — 4 elementi chiave (10 posti / 1 anno full-time + 3-6 mesi internship / IE Madrid + rete LBS-IMD-UCL-Royal College / Borsa totale ISEE-ISPE <50K€)
3. **Il programma** — descrizione 2 colonne (esperienza accademica IE Madrid + esperienza Angelini)
4. **Calendario** — Timeline orizzontale 5 tappe (FEB-MAR 2026 selezione · GIU 2026 induction · SET 2026-GIU 2027 MBA Madrid · GIU-SET 2027 internship · TBD 2027 assunzione)
5. **Borsa di studio e tassa** + **Simulazione UI** (2 input ISEE/ISPE → output testuale "Borsa totale" o "Tassa €20.000", logica statica valori esempio)
6. **Voci alumni** (placeholder Founder Stories, 2-3 testimonial card)
7. **Partner accademico IE Madrid** (descrizione partnership + link)
8. **FAQ** (8-10 domande Accordion, vedi sotto)
9. **CTA finale full-width** "Candidati ora" (form expression of interest)
10. **Contatti referente candidature**

**Copy operativo**:
- **Hero title**: "A bridge to succeed"
- **Hero subtitle**: "Il MBA internazionale di Angelini Academy con IE Madrid."
- **CTA primary**: "Candidati ora" → form
- **CTA secondary**: "Scarica la brochure MBA" → PDF placeholder

**FAQ (8 domande con copy reale)**:
1. **Quali sono i requisiti di ammissione?** — Laurea magistrale, esperienza professionale ≥2 anni, livello English C1, motivazione documentata. La selezione finale è gestita da IE Madrid.
2. **Quando sono le scadenze per candidarsi?** — Le candidature per il ciclo 2027 aprono a febbraio 2026 e chiudono a marzo 2026. Calendario completo: `/mba-gateway/calendario/`.
3. **Come funziona la borsa di studio?** — 10 borse totali per candidati con ISEE/ISPE <50.000€. Coprono interamente la tassa di iscrizione (€20.000) + accesso al programma full-time IE Madrid. Verifica eleggibilità: simulazione su `/mba-gateway/borsa-di-studio/`.
4. **Qual è la lingua di insegnamento?** — Inglese a IE Madrid. L'internship nelle OpCo Angelini è in italiano o inglese a seconda della società.
5. **Il MBA è riconosciuto?** — Sì, IE Business School Madrid è triple-accredited (AACSB, EQUIS, AMBA). Il titolo è MBA full-time di IE.
6. **In quale OpCo svolgerò l'internship?** — Pharma, Fameccanica (Industrial Tech), Fater (Consumer), Ventures. L'abbinamento avviene in base al profilo del candidato e alle esigenze delle OpCo.
7. **C'è garanzia di assunzione?** — No. Il programma include proposta di assunzione per i candidati meritevoli al termine dell'internship, ma non c'è automatismo. La decisione finale è dell'OpCo ospitante.
8. **Posso candidarmi se sono laureato all'estero?** — Sì. Il programma è aperto a candidati internazionali. La selezione e la documentazione si gestiscono direttamente con IE Madrid Admissions.

**Componenti**: HeroFocused, KeyElementsGrid (4 elementi), TwoColumnProgram, TimelineHorizontal (5 step), BorsaSimulator (form 2 input), TestimonialCard, PartnerSpotlight (IE Madrid), FAQAccordion, CTABand, ContactReferent.

**Schema markup**: `Course` (MBA Gateway program), `EducationalOrganization`, `FAQPage` (FAQ section), `Event` (selezione + induction), `Person` (alumni), `BreadcrumbList`.

### 5.5 Talent Hub `/talent-hub/`

**Obiettivo**: cluster Giovani Talenti — percorsi alternativi al MBA + Founder Stories + AI-2 Career Path.

**Sezioni**:
1. Hero (foto giovani manager Angelini, placeholder)
2. 3 percorsi (MBA Gateway / Graduate Program / Posizioni dirette OpCo) — card grid
3. **Quiz AI-2 Career Path Navigator** (placeholder con disclaimer "Demo MVP")
4. Founder Stories (video player placeholder + transcript)
5. Bridge "Carriere Angelini Industries" (link cross-domain)
6. Newsletter signup talent track

**Copy operativo**:
- **Hero title**: "Costruisci il tuo percorso in Angelini Industries"
- **Hero subtitle**: "MBA Gateway, Graduate Program, posizioni dirette nelle nostre OpCo. Tre porte d'ingresso a un'unica traiettoria di carriera."
- **CTA primary**: "Scopri il tuo percorso" → Quiz AI-2

**Quiz disclaimer**: "Demo MVP. Il quiz reale valuterà il tuo fit con i 3 percorsi disponibili. Non è candidatura formale: per candidarti al MBA Gateway resta IE Madrid."

**Componenti**: HeroTalent, CareerPathCard (×3), QuizDemo, FounderStoryPlayer, BridgeHolding, NewsletterTrack.

**Schema markup**: `CollectionPage`, `Course` (Graduate Program), `VideoObject` (Founder Stories), `BreadcrumbList`.

### 5.6 Per Aziende `/per-aziende/`

**Obiettivo**: soft seeding 2026 per HR/L&D buyer enterprise. Newsletter signup + paper executive summary download. **NO form vendita pushy**.

**Sezioni**:
1. Hero institutional B2B (foto board meeting / executive session)
2. Value proposition HR-friendly (paragrafo curato)
3. **Insights per HR** — 3 paper executive summary downloadabili (placeholder)
4. Approccio Angelini Academy ai programmi corporate (3 principi)
5. **Newsletter signup segmentata HR** (form 2 step: email + role + company size)
6. Form contatto soft ("Contattatemi quando avrete programmi corporate aperti")

**Copy operativo**:
- **Hero title**: "Executive education che porta la ricerca scientifica nella vostra azienda"
- **Hero subtitle**: "Non un fornitore di corsi pronti in catalogo. Un partner di ricerca pedagogica con DNA industriale."
- **CTA primary**: "Scarica un paper executive summary" → PDF
- **CTA secondary**: "Iscriviti alla newsletter Insights per HR"

**Componenti**: HeroB2B, VPBlock, PaperSummaryCard (×3), PrinciplesGrid, NewsletterSegmented, FormSoftContact.

**Schema markup**: `Service` (executive education), `Article` (paper summary), `BreadcrumbList`.

### 5.7 Eventi `/eventi/`

**Obiettivo**: punto di atterraggio unico per traffico piano comunicazione 2026.

**Sezioni**:
1. **Hero evento del momento** — Festival Trento 2026 (data 20-24 maggio 2026, claim, CTA "Scopri il programma")
2. Calendario completo (lista filtrabile per tipo: Roadshow / Hackathon / Forum / Festival / Masterclass)
3. Appuntamenti ricorrenti (3 narrative block: Roadshow Università · Hackathon · Forum)
4. Festival e seeding strip (4 loghi: Trento, Wired, Biennale Venezia, TaoBuk)
5. Archivio edizioni passate
6. Newsletter eventi

**Copy operativo**:
- **Hero title**: "Festival Trento 2026 — il lancio di Angelini Academy"
- **Hero subtitle**: "20-24 maggio 2026 · Trento, #FuoriFestival · La nostra presenza al Festival dell'Economia."

**Componenti**: HeroEvent, EventCalendar (filterable list), NarrativeBlock (×3), FestivalLogoStrip, ArchiveGallery, NewsletterEvents.

**Schema markup**: `Event` (Festival Trento e ogni evento singolo), `BreadcrumbList`.

### 5.8 Press / Newsroom `/press/`

**Obiettivo**: cluster Media — newsroom istituzionale, media kit, contatto stampa.

**Sezioni**:
1. Hero newsroom (foto ufficio stampa o conferenza)
2. Latest press release (3-5 placeholder)
3. Media kit download (zip placeholder con: logo PNG/SVG, foto JPG ad alta risoluzione, factsheet PDF)
4. Press coverage (placeholder citazioni media)
5. Contatto stampa diretto (form + email + telefono)

**Copy operativo**:
- **Hero title**: "Press Room — Angelini Academy"
- **Hero subtitle**: "Comunicati, materiali stampa, contatti diretti."
- **Media kit CTA**: "Scarica il media kit (ZIP, 24 MB)"

**Componenti**: HeroPress, PressReleaseList, MediaKitDownload, PressCoverageQuotes, PressContact.

**Schema markup**: `WebPage`, `Article` (press release), `Organization`, `BreadcrumbList`.

### 5.9 Contatti `/contatti/`

**Obiettivo**: smistamento richieste eterogenee.

**Sezioni**:
1. Hero con sede (Viale Amelia 70, 00181 Roma)
2. Form differenziato per tipologia (radio select: Corporate clients · Partnership accademiche · Press · Candidature spontanee · Generico)
3. Mappa Google Maps embed
4. Link social (LinkedIn, Instagram, Facebook)

**Copy operativo**:
- **Hero title**: "Parliamone"
- **Hero subtitle**: "Per partnership, candidature, stampa o richieste generali."

**Componenti**: HeroContact, FormDifferentiated, MapEmbed, SocialLinks.

**Schema markup**: `ContactPage`, `Organization` (con `address`, `contactPoint`), `BreadcrumbList`.

### 5.10 Pagine footer (Privacy, Cookie, Accessibility Statement, Sitemap)

Pagine standard di compliance:

- **`/privacy/`** — Informativa privacy GDPR (`[[Copy TBD — testo legale da team legale Angelini]]`)
- **`/cookie/`** — Cookie policy (`[[Copy TBD]]`)
- **`/accessibility-statement/`** — Dichiarazione accessibilità WCAG 2.1 AA con: standard di conformità, metodologia di valutazione, contact email per segnalazioni, data ultima revisione. Vedi template in §10.
- **`/sitemap/`** — Sitemap HTML user-facing (mirror della struttura §4.1)

---

## 6. Design System / Design Tokens

### 6.1 Palette colore

Base brand Angelini (da brand book 2024 ricevuto 14/5/2026):

| Token | HEX | Uso | Contrast vs white | Contrast vs `--color-text-primary` |
|---|---|---|---|---|
| `--color-brand-navy` | `#1B2D5A` | Brand primario navy istituzionale | 11.3:1 ✓AAA | — |
| `--color-brand-ivory` | `#F8F4ED` | Background ivory/cream | — | 11.0:1 ✓AAA |
| `--color-brand-gold` | `#C9A961` | Accent warm gold | 2.3:1 ⚠ | — |
| `--color-brand-amber` | `#D17F3A` | Accent amber (Angelini storico) | 3.2:1 ✓ large | — |
| `--color-text-primary` | `#1A1A1A` | Body text | 15.9:1 ✓AAA | — |
| `--color-text-secondary` | `#5A5A5A` | Caption, metadata | 7.4:1 ✓AAA | — |
| `--color-link-default` | `#1B2D5A` | Link inline (= brand navy) | 11.3:1 ✓AAA | — |
| `--color-link-hover` | `#0F1A38` | Link hover state | 15.1:1 ✓AAA | — |
| `--color-focus-ring` | `#D17F3A` | Outline focus tastiera | 3.2:1 ✓ | — |
| `--color-bg-default` | `#FFFFFF` | Background body | — | — |
| `--color-bg-subtle` | `#F8F4ED` | Background sezioni alterne | — | 15.6:1 |
| `--color-error` | `#B7301F` | Error state form | 6.5:1 ✓AAA | — |
| `--color-success` | `#1F6F3D` | Success state | 5.8:1 ✓AAA | — |

**Accent colors per Character Selection** (uno per personaggio):
- Giulia: `--color-accent-amber: #C68B3F` (amber-gold / warm ivory)
- Marco: `--color-accent-sage: #5C7D5C` (deep sage green / parchment)
- Sofia: `--color-accent-gold: #B89657` (warm gold + sage)
- Luca: `--color-accent-charcoal: #4A3D2A` (warm amber / dark charcoal)

**Verifica contrast obbligatoria pre-commit**: ogni combinazione testo/background deve passare WCAG AA (4.5:1 body, 3:1 large text ≥18pt o ≥14pt bold). Tool consigliato: `axe-core` in CI.

### 6.2 Tipografia

**Famiglia primaria (body + sans)**: `Barlow` (sans-serif geometrica, brand book Angelini 2024). Fallback: `system-ui, -apple-system, sans-serif`.

**Famiglia secondaria (display + serif editoriale)**: `Merriweather` (serif editoriale, brand book Angelini 2024). Fallback: `Georgia, serif`.

**Caricamento font** (Next.js):
```ts
import { Barlow, Merriweather } from 'next/font/google'
const barlow = Barlow({ subsets: ['latin'], weight: ['400','500','600','700'], display: 'swap' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400','700'], display: 'swap' })
```

**Scale tipografica** (mobile-first, in `rem` — mai `px` su font-size per WCAG 1.4.4):

| Token | Mobile | Desktop | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|
| `text-h1` | 2.0rem (32px) | 2.5rem (40px) | 1.15 | -0.02em | H1 hero, page title |
| `text-h2` | 1.625rem (26px) | 2.0rem (32px) | 1.2 | -0.01em | H2 section title |
| `text-h3` | 1.375rem (22px) | 1.625rem (26px) | 1.3 | 0 | H3 subsection |
| `text-h4` | 1.125rem (18px) | 1.375rem (22px) | 1.4 | 0 | H4, card title |
| `text-body-lg` | 1.125rem (18px) | 1.125rem (18px) | 1.6 | 0 | Lead paragraph |
| `text-body` | 1.0rem (16px) | 1.0rem (16px) | 1.6 | 0 | Body text |
| `text-caption` | 0.875rem (14px) | 0.875rem (14px) | 1.5 | 0.01em | Caption, metadata |

**Mai sotto 14px** (16px minimo body). Spacing fra paragrafi ≥ 2× font-size (WCAG 1.4.12).

### 6.3 Spacing scale

Base 4px (consistente con Tailwind default):

| Token | Valore | Uso |
|---|---|---|
| `space-0` | 0 | reset |
| `space-1` | 4px | micro |
| `space-2` | 8px | tight |
| `space-3` | 12px | small |
| `space-4` | 16px | base (≈1rem) |
| `space-6` | 24px | medium |
| `space-8` | 32px | comfortable |
| `space-12` | 48px | large |
| `space-16` | 64px | section |
| `space-24` | 96px | section grande |
| `space-32` | 128px | hero |

### 6.4 Border-radius scale

| Token | Valore | Uso |
|---|---|---|
| `radius-none` | 0 | reset, immagini full-bleed |
| `radius-sm` | 4px | input, badge piccoli |
| `radius-md` | 8px | card, button |
| `radius-lg` | 16px | card grandi, modal |
| `radius-xl` | 24px | hero card, character card |
| `radius-full` | 9999px | avatar, pill CTA |

### 6.5 Shadow scale

| Token | Valore | Uso |
|---|---|---|
| `shadow-none` | none | flat |
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | input focus, card hover lieve |
| `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)` | card default |
| `shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)` | modal, dropdown |
| `shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)` | hero card, character selection |

### 6.6 Breakpoint (mobile-first, Tailwind defaults)

| Token | Valore | Range |
|---|---|---|
| `sm` | 640px | mobile L → tablet S |
| `md` | 768px | tablet |
| `lg` | 1024px | desktop S |
| `xl` | 1280px | desktop |
| `2xl` | 1536px | desktop L |

**Vincolo MVP**: testato 320-1920px. Layout responsive obbligatorio per Home + tutte le landing cluster. Character Selection Screen su mobile: layout 2×2 griglia (vedi §8).

### 6.7 Animation

| Token | Timing | Easing | Uso |
|---|---|---|---|
| `duration-fast` | 150ms | `ease-out` | hover, focus, button states |
| `duration-base` | 300ms | `ease-out` | transition default, card hover |
| `duration-slow` | 500ms | `ease-in-out` | modal open, hero entrance |
| `duration-character` | 700ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Character Selection transitions |

**Vincolo WCAG 2.3.3**: rispettare `prefers-reduced-motion: reduce` — fallback statico per chi disattiva animazioni.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Componenti UI (inventory)

Lista componenti riusabili. Per ciascuno: descrizione, stati (default/hover/focus/active/disabled), variant, requisiti accessibility.

### 7.1 Navbar (sticky header)

**Descrizione**: header sticky con logo + menu primario 6 voci + dropdown "L'Academy" + switch lingua + CTA pillola "Candidati al MBA Gateway".

**Variant**: `desktop` (6 voci visibili) · `mobile` (hamburger toggle).

**Stati**: default, sticky-scrolled (background opaco), mobile-open (overlay full screen).

**Accessibility (vedi [[Accessibility Specs Sito Nuovo Angelini Academy]] §2.1)**:
- Skip-to-content link primo elemento focusabile
- `<header role="banner">` + `<nav aria-label="Navigazione principale">`
- 4 voci percorso utente come `<a>` semantici (no `<div onClick>`)
- Tab order logico
- Focus ring visibile sempre (no `outline: none` senza fallback)
- Dropdown "L'Academy": Disclosure Pattern WAI-ARIA (`aria-expanded`, `aria-controls`, Escape per chiudere)
- Lang switcher IT/EN con `aria-current="true"` sulla lingua attiva
- Touch target ≥ 44×44px su mobile
- Hamburger trigger con `aria-label="Apri menu"` + Escape + focus management

### 7.2 Hero (con varianti)

**Variant**:
- `hero-character`: Character Selection Screen (homepage, §8)
- `hero-institutional`: foto full-bleed + claim + CTA (Chi Siamo, Press)
- `hero-focused`: foto contestuale + claim + 2 CTA (MBA Gateway, Talent Hub)
- `hero-sober`: registro accademico, foto laboratorio (Engaged Research)
- `hero-event`: card grande evento + CTA "Iscriviti" (Eventi)

**Stati**: default · loaded (foto fade-in) · reduced-motion (statica).

**Accessibility**: foto significative con `alt` editoriale, foto decorative con `alt=""`, h1 univoco per pagina, CTA come `<a>` o `<button>` semantici.

### 7.3 PilastroCard

**Descrizione**: card per i 4 pilastri Academy + nucleo Engaged Research evidenziato.

**Stati**: default · hover (elevation `shadow-lg`, scale 1.02) · focus (ring `--color-focus-ring`) · active (scale 0.98).

**Accessibility**: card cliccabile-intera con anchor su titolo (no nested link anti-pattern), `<article>` semantico interno.

### 7.4 PaperCard (Engaged Research)

**Descrizione**: card paper con titolo H3, autore, data, abstract 2 righe, CTA "Scarica paper (PDF, 2.4 MB)".

**Stati**: default · hover (border `--color-brand-gold`) · focus.

**Accessibility**: `<article>`, byline come `<address rel="author">`, link PDF con `type="application/pdf"` + dimensione dichiarata (WCAG 2.4.4), paper PDF stessi devono essere PDF/UA accessible.

### 7.5 CTAButton

**Variant**: `primary` (background `--color-brand-navy`, text white), `secondary` (border navy, text navy, background transparent), `tertiary` (text only navy, underline on hover).

**Stati**: default · hover (background `--color-link-hover`) · focus (ring) · active (translate Y 1px) · disabled (opacity 0.5, cursor not-allowed).

**Accessibility**: `<button>` o `<a>` semantici, mai `<div onClick>`. Label esplicita ("Candidati al MBA Gateway", non "Clicca qui"). Touch target ≥ 44×44px.

### 7.6 FormContatti (con validation)

**Descrizione**: form differenziato (radio select tipologia) con validation inline + a11y.

**Accessibility (vedi [[Accessibility Specs Sito Nuovo Angelini Academy]] §2.3)**:
- Ogni input ha `<label for>` esplicito (NON solo placeholder)
- Campi obbligatori: `aria-required="true"` + `required` HTML5 + asterisco visivo + `aria-label` su asterisco
- Autocomplete HTML5 corretto (`autocomplete="given-name"`, `email`, `tel`, etc.)
- Validazione inline non-bloccante con `aria-describedby` + icona/simbolo (non solo colore)
- Submit fallito: focus al primo errore + `aria-live="polite"` riepilogo
- Submit riuscito: `role="status"` con sommario
- GDPR checkbox esplicito, mai pre-checkato
- CTA submit con label chiara ("Invia richiesta", non "Invia")

**MVP**: backend `console.log(formData)` su submit, no invio reale.

### 7.7 Footer

**Descrizione**: footer 4 colonne (navigazione · contatti · social · legali) + indirizzo Viale Amelia 70 + P.IVA + claim ridotto + footer cross-link Angelini Industries (Pharma, Fameccanica, Fater, Ventures).

**Accessibility**: `<footer role="contentinfo">`, `<nav aria-label="Navigazione footer">`, link esterni cross-domain con `rel="noopener"` + indicatore visivo "link esterno".

### 7.8 CookieBanner

**Descrizione**: cookie banner GDPR-compliant con "Accetta tutti" / "Rifiuta tutti" / "Preferenze".

**Accessibility**: pattern Dialog WAI-ARIA con focus trap + Escape + bottoni keyboard accessible.

### 7.9 SkipLink

**Descrizione**: link "Salta al contenuto" primo elemento focusabile, hidden by default, visibile on focus.

**Implementazione**: vedi template in [[Accessibility Specs Sito Nuovo Angelini Academy]] §4.1.

### 7.10 Breadcrumb

**Descrizione**: breadcrumb visibili sotto navbar su pagine livello 2+ (es. `Home > Engaged Research > Intelligenza Artificiale e Pedagogia`).

**Accessibility**: `<nav aria-label="Breadcrumb">` + `<ol>` semantica + `aria-current="page"` sull'ultimo elemento.

**Schema markup**: `BreadcrumbList` JSON-LD obbligatorio.

### 7.11 TabsTaxonomy (Engaged Research)

**Descrizione**: tab control WAI-ARIA per filtrare paper per verticale.

**Accessibility (vedi [[Accessibility Specs Sito Nuovo Angelini Academy]] §4.4)**: `role="tablist"`, `role="tab"`, `role="tabpanel"`, frecce ←→ per cambio tab, roving tabindex, Home/End per primo/ultimo.

### 7.12 ChatbotDemo (placeholder MVP AI-1)

**Descrizione**: UI chatbot placeholder con disclaimer "Demo MVP". Input textarea + submit + risposta hardcoded.

**Accessibility (vedi [[Accessibility Specs Sito Nuovo Angelini Academy]] §3.1)**: container con `role="log"` + `aria-live="polite"`, input con `<label>` esplicito, submit via Invio + bottone visibile, loading state via `aria-live`, fallback "Vai alla ricerca paper completa".

### 7.13 QuizDemo (placeholder MVP AI-2)

**Descrizione**: UI quiz multi-step placeholder con disclaimer "Demo MVP".

**Accessibility (vedi [[Accessibility Specs Sito Nuovo Angelini Academy]] §3.2)**: progress indicator semantico, `<fieldset>` + `<legend>` per multi-choice, no time limit, output con `role="status"` + confine dichiarato.

### 7.14 CharacterSelectionScreen (custom hero)

Vedi §8 dedicata.

---

## 8. Character Selection Screen (landing hero)

Componente custom hero della homepage. Sostituisce l'hero tradizionale "foto + claim" con una schermata di selezione personaggio stile graphic novel europeo.

### 8.1 Concept

Il visitatore atterra sulla homepage e sceglie il personaggio che lo rappresenta tra 4 figure illustrate. La scelta segmenta l'utente e personalizza il percorso: click su un personaggio → animazione transizione → landing cluster dedicata.

**Logica strategica** (dal [[Strategia Website 2026]] §3 + Carlo 14/5/2026): risponde all'asse "modalità di engagement attiva" del pitch finale. È differenziante vs comparable observable (nessuno dei 10 siti scansionati ha questo pattern).

### 8.2 Stile visivo

**Riferimento**: European Institutional Graphic Novel — pittorico, linee nette, palette istituzionale premium. Non cartoon, non gaming casual, non stilizzato. Proporzioni realistiche, illuminazione cinematografica da upper-left, posa 3/4 leggermente verso l'alto (slight upward viewing angle).

**Palette base**: navy `#1B2D5A` + ivory `#F8F4ED` + warm gold `#C9A961` + accent secondario per personaggio.

### 8.3 I 4 personaggi

Per ciascuno: nome display, accent color, target rappresentato, descrizione visiva, landing destinazione click.

| Personaggio | Accent | Cluster rappresentato | Tratti visivi | Landing click |
|---|---|---|---|---|
| **Giulia** (priorità primaria — posizione centrale o più prominente) | `--color-accent-amber: #C68B3F` | Cluster 4 — Media/Istituzioni | 38 anni, giornalista/opinion leader education-innovation-pharma. Blazer strutturato su turtleneck minimale, slim trousers. Borsa a spalla pelle, taccuino + penna. Badge stampa sul bavero. Posa aperta, aria da reporter. Sfondo: auditorium/sala conferenze, luce calda da palco. | `/press/` |
| **Marco** (priorità secondaria) | `--color-accent-sage: #5C7D5C` | Cluster 2 — Ricercatori | 46 anni, professore/ricercatore (UCL/IE Madrid). Blazer tweed-navy su camicia pulita, no cravatta. Stack documenti + journal accademico aperto in mano. Lanyard universitario. Occhiali montatura sottile. Posa composta. Sfondo: aula universitaria moderna o laboratorio ricerca, luce naturale. | `/engaged-research/` |
| **Sofia** (priorità terziaria) | `--color-accent-gold: #B89657` | Cluster 1 — Giovani Talenti | 26 anni, ricercatrice/giovane professionista life sciences/robotics. Camice bianco-cream aperto su blusa navy, pantaloni sartoriali. Tablet con dati scientifici. Pin accademico sul bavero. Posa sicura. Sfondo: pannelli vetro laboratorio, luce blu-teal con striatura gold calda. | `/talent-hub/` |
| **Luca** (priorità quaternaria — meno prominente) | `--color-accent-charcoal: #4A3D2A` | Founder/Innovatori (sotto-set Ricercatori) | 32 anni, founder biotech/edtech/industrial tech. Crewneck scuro minimale, slim trousers scuri, sneaker qualitative. Pitch deck piegato e annotato a mano. Piccolo componente prototipale nel taschino. Posa grounded. Sfondo: innovation lab/co-working con elementi industriali, luce calda Edison. | `/engaged-research/innovation-scouting/` |

### 8.4 Layout

**Desktop (≥768px)**: layout 4 colonne orizzontale con Giulia in posizione centrale o leggermente più grande. Sotto i personaggi: claim hero + CTA secondaria "Esplora tutto il sito senza scegliere" (link a `/chi-siamo/`).

**Mobile (<768px)**: griglia 2×2 (Giulia top-left, Marco top-right, Sofia bottom-left, Luca bottom-right) o scroll orizzontale snap.

**Gerarchia visiva**: Giulia deve avere la posizione più prominente (centrale o leggermente più grande). Luca la meno prominente. Soluzione esatta a discrezione developer purché la gerarchia sia percepibile.

### 8.5 Interazione

**Hover/focus**: card si solleva (`shadow-xl`), accent color si attiva come glow attorno alla figura, nome display appare se non già visibile.

**Click**: animazione transizione 700ms cubic-bezier(0.16, 1, 0.3, 1) — la figura scelta si ingrandisce + slide verso sinistra, contemporaneamente la landing cluster scrolla in. Su mobile, click semplice navigazione standard.

**Reduced motion**: fallback statico — click navigazione diretta senza animazione.

### 8.6 Asset 3D vs fallback 2D

**Soluzione MVP raccomandata**: il sito generato da Claude Code parte con **fallback 2D illustrato** (immagini PNG/SVG placeholder che l'agente genera o usa stock illustrato). Se i 4 PNG `persona-{1-4}-{nome}.png` sono disponibili nell'attached asset folder, usarli direttamente. Altrimenti generare 4 placeholder SVG con figura silhouette + accent color + nome.

**Versione 3D (post-MVP)**: documentata come evoluzione, fuori scope generazione Claude Code. Asset .glb / Three.js da affidare a designer 3D dedicato.

### 8.7 Accessibility Character Selection

- 4 personaggi come `<button>` o `<a>` semantici (no `<div onClick>`)
- Tab order: Giulia → Marco → Sofia → Luca (riflette gerarchia visiva)
- Focus ring visibile + accent color
- `aria-label` esplicito: "Sono un giornalista o opinion leader — Giulia" (riflette il target rappresentato, non solo il nome)
- Reduced motion fallback: navigazione diretta senza animazione transizione
- Touch target ≥ 44×44px su mobile
- Sotto la selezione: link bypass `<a href="/chi-siamo/">Esplora tutto il sito senza scegliere</a>` per chi non vuole segmentarsi

### 8.8 Componenti

`CharacterSelectionScreen` (container) → 4× `CharacterCard` (figura + nome + accent color) → al click, animazione + navigazione.

```tsx
// Pseudo-struttura
<section role="region" aria-label="Scegli il tuo percorso">
  <h1>Building bridges in education</h1>
  <p>Costruiamo ponti tra competenze richieste e offerte...</p>
  <ul role="list" aria-label="Profili">
    <li><CharacterCard person="giulia" accent="amber" target="/press/" priority={1} /></li>
    <li><CharacterCard person="marco" accent="sage" target="/engaged-research/" priority={2} /></li>
    <li><CharacterCard person="sofia" accent="gold" target="/talent-hub/" priority={3} /></li>
    <li><CharacterCard person="luca" accent="charcoal" target="/engaged-research/innovation-scouting/" priority={4} /></li>
  </ul>
  <a href="/chi-siamo/" className="bypass-link">Esplora tutto il sito senza scegliere</a>
</section>
```

---

## 9. SEO specs

Per ogni pagina: title tag, meta description, H1, keyword target principale, schema.org JSON-LD template.

### 9.1 Title tag pattern

**Convenzione**: `{Page Title} | Angelini Academy` (max 60 caratteri).

| Pagina | Title tag | Lunghezza |
|---|---|---|
| Homepage `/` | `Angelini Academy — Building bridges in education` | 49 |
| Chi Siamo | `Chi Siamo \| Angelini Academy` | 30 |
| Engaged Research | `Engaged Research Lab \| Angelini Academy` | 40 |
| MBA Gateway | `MBA Gateway con IE Madrid \| Angelini Academy` | 45 |
| Talent Hub | `Talent Hub — Costruisci il tuo percorso \| Angelini Academy` | 58 |
| Per Aziende | `Executive Education per Aziende \| Angelini Academy` | 51 |
| Eventi | `Eventi e Festival 2026 \| Angelini Academy` | 42 |
| Press Room | `Press Room \| Angelini Academy` | 30 |
| Contatti | `Contatti \| Angelini Academy` | 28 |

### 9.2 Meta description pattern

**Convenzione**: 130-160 caratteri, intent-clear, brand-anchored.

| Pagina | Meta description |
|---|---|
| Homepage | `Angelini Academy è la società di Angelini Industries per il corporate learning: ricerca pedagogica, MBA Gateway con IE Madrid, partnership accademiche internazionali.` (167 — da accorciare a 160) |
| Chi Siamo | `Scopri Angelini Academy: vision, purpose, leadership, partnership accademiche (UCL, IE Madrid, LBS, IMD) e collocazione in Angelini Industries.` (143) |
| Engaged Research | `Engaged Research Lab: paper, white paper e ricerca pedagogica firmati Angelini Academy in collaborazione con UCL Knowledge Lab e IE Madrid.` (138) |
| MBA Gateway | `Il MBA full-time con IE Madrid: 10 borse di studio per ISEE/ISPE <50K€, internship nelle OpCo Angelini Industries, una possibilità concreta di assunzione.` (158) |
| Talent Hub | `MBA Gateway, Graduate Program, posizioni dirette: tre percorsi di carriera in Angelini Industries per giovani talenti life sciences e industrial robotics.` (158) |
| Per Aziende | `Executive education per aziende italiane: programmi corporate basati su ricerca pedagogica strutturata con UCL e IE Madrid. Insights per HR director.` (152) |
| Eventi | `Festival Trento 2026, Forum annuale, Hackathon, Roadshow università: il calendario eventi di Angelini Academy per il 2026.` (123) |
| Press Room | `Comunicati stampa, media kit, foto ad alta risoluzione e contatti diretti dell'ufficio stampa di Angelini Academy.` (114) |
| Contatti | `Contatti Angelini Academy: form differenziato per partnership accademiche, corporate clients, candidature e stampa. Sede: Viale Amelia 70, Roma.` (143) |

### 9.3 Keyword target principale per pagina

| Pagina | Keyword primario | Opportunity |
|---|---|---|
| Homepage | Angelini Academy | high (branded) |
| Engaged Research | Engaged Research Angelini Academy | high (branded + nicchia) |
| `/engaged-research/intelligenza-artificiale-pedagogia/` | ricerca pedagogica intelligenza artificiale | high |
| `/engaged-research/edtech-applicato/` | edTech applicato aziende Italia | high |
| `/engaged-research/skill-mismatch/` | skill mismatch università aziende | high |
| `/engaged-research/lifelong-learning-over-50/` | lifelong learning over 50 | high |
| MBA Gateway | MBA Gateway IE Madrid / MBA Angelini Academy | high (branded) |
| `/mba-gateway/borsa-di-studio/` | borsa di studio MBA Italia 2026 | high (commercial) |
| Talent Hub | graduate program Angelini Industries | high |
| Per Aziende | corporate learning aziende pharma Italia | high |
| Leadership/Morbidelli | Marco Morbidelli CEO Angelini Academy | high (branded + Person schema) |
| Eventi/Trento | Festival economia Trento 2026 Angelini | high (event-driven) |

### 9.4 Schema.org JSON-LD templates

Vincolanti per MVP. Validare con [Schema Markup Validator](https://validator.schema.org/) pre-deploy.

#### 9.4.1 EducationalOrganization (root, in `app/layout.tsx`)

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.angeliniacademy.com/#organization",
  "name": "Angelini Academy",
  "url": "https://www.angeliniacademy.com",
  "logo": "https://www.angeliniacademy.com/logo.svg",
  "description": "Società di Angelini Industries dedicata al Corporate Learning, focalizzata su ricerca pedagogica, executive education e MBA con IE Madrid.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Viale Amelia 70",
    "addressLocality": "Roma",
    "postalCode": "00181",
    "addressCountry": "IT"
  },
  "parentOrganization": {
    "@type": "Organization",
    "name": "Angelini Industries",
    "url": "https://www.angeliniindustries.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/angelini-academy/",
    "https://www.instagram.com/angeliniacademy/"
  ]
}
```

#### 9.4.2 Course (MBA Gateway)

```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "MBA Gateway — A bridge to succeed",
  "description": "MBA full-time con IE Madrid + 3-6 mesi internship nelle OpCo Angelini Industries. 10 posti, borse totali per ISEE/ISPE <50.000€.",
  "provider": {
    "@type": "EducationalOrganization",
    "@id": "https://www.angeliniacademy.com/#organization"
  },
  "educationalCredentialAwarded": "MBA full-time IE Business School",
  "coursePrerequisites": "Laurea magistrale, esperienza professionale ≥2 anni, livello English C1",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Full-time",
    "courseSchedule": "Settembre 2026 – Giugno 2027",
    "location": {
      "@type": "Place",
      "name": "IE Business School Madrid"
    }
  },
  "inLanguage": "en"
}
```

#### 9.4.3 Person (CEO Marco Morbidelli)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Marco Morbidelli",
  "jobTitle": "CEO",
  "worksFor": {
    "@type": "EducationalOrganization",
    "@id": "https://www.angeliniacademy.com/#organization"
  },
  "sameAs": [
    "https://www.linkedin.com/in/marco-morbidelli-tbd/"
  ]
}
```
*Nota: URL LinkedIn `[[TBD — verificare con Carlo prima del go-live]]`.*

#### 9.4.4 ScholarlyArticle (paper Engaged Research)

```json
{
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": "{Titolo paper}",
  "author": {
    "@type": "Person",
    "name": "{Autore}"
  },
  "publisher": {
    "@type": "EducationalOrganization",
    "@id": "https://www.angeliniacademy.com/#organization"
  },
  "datePublished": "2026-XX-XX",
  "inLanguage": "it",
  "url": "https://www.angeliniacademy.com/engaged-research/paper/{slug}/",
  "encoding": {
    "@type": "MediaObject",
    "contentUrl": "https://www.angeliniacademy.com/paper/{slug}.pdf",
    "encodingFormat": "application/pdf"
  }
}
```

#### 9.4.5 Event (Festival Trento 2026)

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Festival Trento 2026 — #FuoriFestival Angelini Academy",
  "startDate": "2026-05-20",
  "endDate": "2026-05-24",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Trento",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Trento",
      "addressCountry": "IT"
    }
  },
  "organizer": {
    "@type": "EducationalOrganization",
    "@id": "https://www.angeliniacademy.com/#organization"
  }
}
```

#### 9.4.6 FAQPage (MBA Gateway FAQ)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quali sono i requisiti di ammissione?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Laurea magistrale, esperienza professionale ≥2 anni, livello English C1, motivazione documentata. La selezione finale è gestita da IE Madrid."
      }
    }
    // ... le altre 7 FAQ
  ]
}
```

#### 9.4.7 BreadcrumbList (ogni pagina livello 2+)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.angeliniacademy.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Engaged Research",
      "item": "https://www.angeliniacademy.com/engaged-research/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Intelligenza Artificiale e Pedagogia",
      "item": "https://www.angeliniacademy.com/engaged-research/intelligenza-artificiale-pedagogia/"
    }
  ]
}
```

#### 9.4.8 WebSite + SearchAction (homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.angeliniacademy.com",
  "name": "Angelini Academy",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.angeliniacademy.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 9.5 Sitemap.xml e robots.txt

**`/sitemap.xml`** auto-generato da Next.js (`app/sitemap.ts`):

```ts
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.angeliniacademy.com/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.angeliniacademy.com/chi-siamo/', priority: 0.9 },
    { url: 'https://www.angeliniacademy.com/engaged-research/', priority: 0.9 },
    { url: 'https://www.angeliniacademy.com/mba-gateway/', priority: 0.9 },
    // ... tutte le pagine MVP
  ]
}
```

**`/robots.txt`**:
```
User-agent: *
Allow: /
Sitemap: https://www.angeliniacademy.com/sitemap.xml
```

### 9.6 Meta robots

`<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />` su tutte le pagine pubbliche (pattern best practice Fondazione Bracco).

---

## 10. Accessibility (WCAG 2.1 AA)

**Standard vincolante MVP**: WCAG 2.1 AA. Coerente con European Accessibility Act (D.Lgs. 82/2022 + EN 301 549 in vigore dal 28/6/2025), pattern fondazioni comparable (MAXXI, Royal Society UK, Smithsonian Section 508).

### 10.1 Checklist macro WCAG 2.1 AA (vincoli MVP)

**Perceivable**:
- ✅ Contrast ratio ≥ 4.5:1 testo body, ≥ 3:1 large text (≥18pt o ≥14pt bold) — verificato a priori sui token §6.1
- ✅ Contrast ratio ≥ 3:1 UI components e graphical objects (1.4.11)
- ✅ Tipografia in `rem`/`em` mai `px` — zoom 200% senza scroll orizzontale (1.4.4)
- ✅ Mai immagini di testo (eccezione: logo, infografica con alt-text completo) (1.4.5)
- ✅ Text spacing tollerante: line-height ≥1.5, paragraph-spacing ≥2× font-size, letter-spacing ≥0.12× (1.4.12)
- ✅ Alt-text editoriale per immagini significative, `alt=""` per decorative (1.1.1)
- ✅ Video con caption + transcript obbligatori (Founder Stories) (1.2.2, 1.2.3)
- ✅ Info non veicolata solo dal colore (icone/pattern/label extra) (1.4.1)

**Operable**:
- ✅ Skip-to-content link primo elemento focusabile (2.4.1)
- ✅ Tutti gli interactive accessible via tastiera, incluso Character Selection + AI demo (2.1.1)
- ✅ Focus ring visibile sempre, mai `outline: none` senza fallback (2.4.7)
- ✅ Focus order logico (2.4.3)
- ✅ No keyboard trap (2.1.2)
- ✅ Touch target ≥ 44×44px su mobile (2.5.5)
- ✅ `prefers-reduced-motion: reduce` rispettato (2.3.3)
- ✅ No autoplay con audio (1.4.2)

**Understandable**:
- ✅ `lang="it"` su `<html>`, override `lang="en"` su elementi inglesi (3.1.1, 3.1.2)
- ✅ Form con label esplicite + inline validation + error suggestion (3.3.1, 3.3.2, 3.3.3)
- ✅ Navigation pattern consistente fra le pagine (3.2.3)
- ✅ Identification consistente di componenti ricorrenti (3.2.4)

**Robust**:
- ✅ HTML5 semantico (`<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`, `<header>`, `<footer>`)
- ✅ ARIA come *enhancement* non *replacement* della semantica HTML (4.1.2)
- ✅ Status messages dinamici via `aria-live` (4.1.3)

### 10.2 Template implementativi vincolanti

**Skip-link** (vedi [[Accessibility Specs Sito Nuovo Angelini Academy]] §4.1):

```html
<a href="#main" class="skip-link">Salta al contenuto</a>
<header role="banner">
  <nav aria-label="Navigazione principale">…</nav>
</header>
<main id="main" tabindex="-1">…</main>
```

```css
.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
}
.skip-link:focus {
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 1rem 1.5rem;
  background: var(--color-bg-default);
  color: var(--color-text-primary);
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 2px;
  border-radius: 4px;
  font-weight: 600;
}
```

**ARIA landmark**:

```html
<header role="banner">…</header>
<nav aria-label="Navigazione principale">…</nav>
<main id="main">
  <h1>…</h1>
  <article>…</article>
</main>
<aside aria-label="Paper correlati">…</aside>
<footer role="contentinfo">
  <nav aria-label="Navigazione footer">…</nav>
</footer>
```

**Tabs WAI-ARIA** (Engaged Research tassonomia): vedi [[Accessibility Specs Sito Nuovo Angelini Academy]] §4.4.

**Dialog focus trap** (cookie banner, modal): vedi [[Accessibility Specs Sito Nuovo Angelini Academy]] §4.3.

### 10.3 Accessibility Statement page `/accessibility-statement/`

Template obbligatorio:

```markdown
# Dichiarazione di accessibilità — Angelini Academy

## Standard di conformità
Questo sito è progettato e sviluppato per essere conforme allo standard WCAG 2.1 AA (Web Content Accessibility Guidelines del W3C) e all'European Accessibility Act (EAA, recepito in Italia dal D.Lgs. 82/2022 + EN 301 549).

## Metodologia di valutazione
La conformità è verificata attraverso:
- Test automatici con axe-core e Lighthouse a ogni build
- Test manuali con tastiera e screen reader (NVDA, VoiceOver)
- Audit semestrale di terza parte

## Stato attuale
Il sito raggiunge attualmente il livello di conformità WCAG 2.1 AA su [[XX]]% dei checkpoint. Aree in miglioramento: [[TBD]].

## Segnalazioni
Per segnalare problemi di accessibilità o richiedere contenuti in formato alternativo:
- Email: accessibility@angeliniacademy.com
- Telefono: [[TBD]]

## Data ultima revisione
2026-XX-XX
```

### 10.4 Testing automation

**CI/CD obbligatorio MVP**:
- `axe-core` integrato in test suite (Playwright o Jest + jest-axe)
- Lighthouse CI con threshold ≥85 su A11y
- pa11y CLI per smoke test ad ogni PR

**Test manuali pre-deploy**:
- Navigazione completa solo tastiera (Tab, Shift+Tab, Enter, Space, Escape, frecce su Tabs)
- Screen reader VoiceOver (macOS) o NVDA (Windows) sulle 5 pagine prioritarie
- Zoom browser 200% + verifica reflow senza scroll orizzontale
- `prefers-reduced-motion` attivo (System Preferences su macOS)

---

## 11. Performance budget

**Core Web Vitals target (mobile 3G simulato)**:
- **LCP (Largest Contentful Paint)**: <2.5s
- **CLS (Cumulative Layout Shift)**: <0.1
- **INP (Interaction to Next Paint)**: <200ms

**Lighthouse aggregate**: >85 su Performance, Accessibility, SEO, Best Practices.

**Strategie obbligatorie MVP**:
- **Image optimization**: `next/image` con WebP come formato primario + JPG fallback. Lazy loading default. `priority` solo su hero image LCP.
- **Font loading**: `next/font` con `display: swap` + subset latin. Mai font CDN esterni bloccanti.
- **JS bundle**: first-load <200KB gzip. Code-splitting per route con Next.js App Router. Server Components dove possibile (Engaged Research paper list, MBA FAQ, Footer).
- **CSS**: Tailwind con `purge` aggressivo. No CSS-in-JS runtime (preferire Tailwind utility classes o CSS Modules).
- **Cache headers**: `Cache-Control: public, max-age=31536000, immutable` per asset statici (`_next/static`).
- **No tracker third-party in MVP** (no GA4, no Hotjar, no Intercom). Solo placeholder structure per integrazione futura.

**Test obbligatori pre-deploy**:
- WebPageTest mobile 3G da Milano (server europeo)
- Lighthouse mobile + desktop
- Chrome DevTools Performance recording su LCP/CLS

---

## 12. Tecnologie suggerite (default — ribattibili)

| Layer | Scelta default | Razionale |
|---|---|---|
| Framework | **Next.js 14 App Router** | SEO out-of-the-box, RSC per performance, file-based routing, image optimization nativa |
| Styling | **Tailwind CSS 3.4** | Design tokens via CSS custom properties, purge aggressivo, utility-first, ottimo per generazione AI |
| Lingua | **TypeScript strict** | Type safety, autocomplete IDE, refactor sicuro |
| CMS | **Nessuno (content statico)** | MVP non richiede content authoring. Markdown files + frontmatter (next-mdx-remote) per paper Engaged Research |
| Form backend | **Nessuno (mock submission)** | `console.log(formData)` su submit. Produzione: Resend / Formspree / Vercel Form |
| Analytics | **Nessuno** | Solo placeholder. Produzione: Plausible (GDPR-friendly) o GA4 |
| Deploy | **Vercel** | Zero-config Next.js, edge network, preview deploys per PR |
| Font | **Barlow + Merriweather (Google Fonts via next/font)** | Brand book Angelini 2024 + self-hosted via next/font (no CDN esterno) |
| Icons | **lucide-react** o **heroicons** | Lightweight, tree-shakable, a11y-friendly |
| Testing | **Vitest** + **Playwright** + **jest-axe** | Unit + E2E + accessibility automation |

---

## 13. Cosa NON fare (vincoli)

Vincoli rigidi per Claude Code. La violazione di uno di questi punti = bocciatura MVP.

- ❌ **No login / area utente / SSO** (fuori scope MVP)
- ❌ **No e-commerce / pagamenti** (la tassa MBA €20K passa via IE Madrid)
- ❌ **No multilingua dinamico funzionante** (solo IT in MVP; struttura `hreflang` predisposta per future EN, ma EN content è placeholder)
- ❌ **No CMS** (content statico hardcoded in markdown/JSON)
- ❌ **No claim non verificati** (se un dato non è nel brief → omettere o `[[TBD]]`, mai inventare)
- ❌ **No micro-animazioni complesse** (la velocità di esecuzione è il messaggio)
- ❌ **No exclamation point nei titoli** (mai "rivoluzionario!", "leader del mercato!")
- ❌ **No "Scopri di più" come CTA** (sempre verbo+oggetto specifico: "Scopri il MBA Gateway", "Esplora la ricerca")
- ❌ **No `<div onClick>`** per elementi interattivi — sempre `<button>` o `<a>` semantici
- ❌ **No `outline: none`** sul focus senza fallback visibile
- ❌ **No autoplay video con audio**
- ❌ **No stock photo "business glamour"** (handshake corporate, grafici 3D, gente sorridente generica) — il registro è fondazione culturale-scientifica, non startup hero
- ❌ **No "italian heritage" come argomento di vendita** (il prestigio italiano si vede dai partner accademici, non si dichiara)
- ❌ **No bandiere Italia/UK come decorazione**
- ❌ **No nomi fornitori HeyAI (Soolutions, Silencio, Jakala, Tokio Studio, Aegiscore)** — riferimento al team è "team di sviluppo HeyAI" o "team tecnico"

---

## 14. Asset disponibili / da fornire

### 14.1 Asset disponibili

- **Brand book Angelini 2024** (`22042024_Angelini_Academy_Manuale Elementi Base_V1.0.pdf`, 36pp) — ricevuto 14/5/2026. Palette navy `#1B2D5A`, font Barlow + Merriweather, principio "Unwavering Care", pattern Trama/Abbraccio.
- **4 PNG personaggi Character Selection**: `persona-1-giulia.png`, `persona-2-marco.png`, `persona-3-sofia.png`, `persona-4-luca.png` — generati come reference visiva 2D, da usare come placeholder MVP se attached al lancio Claude Code. Se assenti, generare 4 SVG placeholder seguendo §8.3.
- **Lista partnership accademiche** (8 partner principali): LBS, IMD, Stockholm SE, IE Madrid, UCL, Royal College of Art, SDA Bocconi, LUISS + 3 secondari (BBS, POLIMI, Imperial College, ESCP).
- **Numero pubblico utilizzabile**: ~1.200 partecipanti formati ogni anno (estratto dal sito attuale + brief).
- **Dati MBA Gateway**: €1M budget borse, 10 borse, ISEE/ISPE <50K€, tassa €20K (25% valore di mercato).

### 14.2 Asset TBD (da fornire post-MVP)

- **Logo Angelini Academy SVG vettoriale** `[[TBD — da Caterina Caboni o brand book vettoriale]]` — MVP usa placeholder o estratto dal PDF brand book
- **Foto faculty / leadership / Marco Morbidelli** `[[TBD]]` — MVP usa placeholder silhouette
- **Foto eventi (Hackathon, Forum, Roadshow)** `[[TBD]]` — MVP usa placeholder o frame da Instagram Angelini Academy
- **Video Founder Stories** `[[TBD]]` — MVP usa player placeholder con poster image
- **Paper PDF Engaged Research reali** `[[TBD]]` — MVP usa 3-5 paper placeholder con metadata realistici + PDF dummy
- **URL LinkedIn Marco Morbidelli** `[[Verificare con Carlo]]`
- **Copy curato per Manifesto Engaged Research, Vision-Purpose lungo, FAQ aggiuntive** `[[Copy TBD — richiede stesura curata]]`
- **Testo legale Privacy/Cookie policy** `[[Copy TBD — da team legale Angelini]]`
- **Brochure MBA Gateway PDF** `[[TBD]]`
- **Media kit ZIP (logo + foto HD + factsheet)** `[[TBD]]`

---

## 15. Deliverable finale richiesto a Claude Code

### 15.1 Requirements obbligatori MVP

- ✅ **Repository git inizializzato** con README + .gitignore + commit history pulita
- ✅ **Build green**: `npm install && npm run build` completa senza errori, no warning bloccanti
- ✅ **7+ pagine navigabili**: Home, Chi Siamo, Engaged Research, MBA Gateway, Talent Hub, Per Aziende, Eventi, Press, Contatti + 4 footer pages
- ✅ **Mobile responsive 320-1920px** con breakpoint Tailwind (sm/md/lg/xl/2xl)
- ✅ **Lighthouse aggregate score >85** su Performance/A11y/SEO/Best Practices (verificato con `lighthouse https://localhost:3000`)
- ✅ **Character Selection Screen** funzionante con 4 personaggi + click navigation (fallback 2D)
- ✅ **Design system** con design tokens come CSS custom properties (palette, tipografia, spacing, radius, shadow, motion)
- ✅ **Schema.org JSON-LD** validato su Schema Markup Validator per le 7 pagine principali
- ✅ **Sitemap.xml** auto-generato + `robots.txt`
- ✅ **Accessibility WCAG 2.1 AA**: skip-link, focus ring visibile, ARIA landmark, keyboard navigation, `prefers-reduced-motion`, contrast ratio ≥4.5:1 verificato
- ✅ **README** con istruzioni install/dev/build/deploy + sezione "Asset TBD da inserire post-MVP"
- ✅ **Form mock** con `console.log(formData)` su submit (no backend reale)
- ✅ **AI demo placeholder** per chatbot Engaged Research e Quiz Career Path con disclaimer "Demo MVP"

### 15.2 Output struttura attesa

```
angelini-academy-mvp/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .gitignore
├── public/
│   ├── images/
│   │   ├── characters/             (4 PNG/SVG personaggi)
│   │   ├── partners/               (8+ logo partnership)
│   │   ├── events/                 (placeholder eventi)
│   │   └── og-image.jpg            (Open Graph default)
│   ├── papers/                     (3-5 PDF placeholder)
│   ├── logo.svg                    (placeholder Angelini Academy)
│   └── robots.txt
├── app/
│   ├── layout.tsx                  (root layout + schema EducationalOrganization)
│   ├── page.tsx                    (Homepage)
│   ├── sitemap.ts
│   ├── chi-siamo/
│   ├── engaged-research/
│   │   ├── page.tsx
│   │   ├── [verticale]/page.tsx
│   │   ├── paper/[slug]/page.tsx
│   │   ├── ai-research-assistant/page.tsx
│   │   └── proponi-collaborazione/page.tsx
│   ├── mba-gateway/
│   ├── talent-hub/
│   ├── per-aziende/
│   ├── eventi/
│   ├── press/
│   ├── contatti/
│   ├── privacy/
│   ├── cookie/
│   ├── accessibility-statement/
│   └── sitemap/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CharacterSelectionScreen.tsx
│   ├── CharacterCard.tsx
│   ├── Hero/                       (variant components)
│   ├── PilastroCard.tsx
│   ├── PaperCard.tsx
│   ├── CTAButton.tsx
│   ├── FormDifferentiated.tsx
│   ├── ChatbotDemo.tsx
│   ├── QuizDemo.tsx
│   ├── Breadcrumb.tsx
│   ├── TabsTaxonomy.tsx
│   ├── SkipLink.tsx
│   └── CookieBanner.tsx
├── lib/
│   ├── schema.ts                   (JSON-LD generators)
│   ├── content/                    (markdown content)
│   └── utils.ts
├── styles/
│   └── globals.css                 (design tokens CSS custom properties)
└── tests/
    ├── a11y.test.ts                (jest-axe smoke test)
    └── e2e/                        (Playwright scenarios)
```

### 15.3 README minimo richiesto

```markdown
# Angelini Academy — MVP Sito (Pitch 31/5/2026)

Sito MVP navigabile generato da Claude Code per pitch finale gara Angelini Academy.

## Stack
- Next.js 14 App Router · TypeScript · Tailwind CSS 3.4
- Deploy: Vercel · Font: Barlow + Merriweather (next/font)

## Install
\`\`\`bash
npm install
npm run dev          # http://localhost:3000
\`\`\`

## Build
\`\`\`bash
npm run build
npm run start
\`\`\`

## Deploy Vercel
\`\`\`bash
vercel
\`\`\`

## Asset TBD da inserire post-MVP
- Logo Angelini Academy SVG vettoriale (sostituire `/public/logo.svg`)
- Foto faculty/Morbidelli/eventi (sostituire placeholder in `/public/images/`)
- Paper PDF reali (sostituire placeholder in `/public/papers/`)
- Copy curato Manifesto Engaged Research, Privacy, Cookie

## Testing
\`\`\`bash
npm run test           # unit + a11y
npm run test:e2e       # Playwright
npm run lighthouse     # Lighthouse CI
\`\`\`
```

---

## Fonti consolidate

Documenti di riferimento del dossier Angelini Academy (vault HeyAI):

- [[_Angelini Academy|Angelini Academy]] — scheda overview progetto, stato decisioni, eventi calendario, citazioni testuali
- [[Framework Pitch Finale]] — spina dorsale strategica della proposta HeyAI (7 pillar)
- [[Strategia Website 2026]] — documento operativo HeyAI per la realizzazione del sito (9 sezioni)
- [[Wireframe e Architettura]] — sitemap, schede pagine, wireframe testuali low-fi delle 5 pagine prioritarie
- [[SEO Specs Sito Nuovo]] — keyword research, URL structure, schema markup, benchmark 5 siti
- [[Accessibility Specs Sito Nuovo Angelini Academy]] — spec WCAG 2.1 AA, checkpoint per macro-area, pattern AI, template implementativi
- [[Angelini Academy — Briefing Personaggi Landing Page]] — Character Selection Screen, 4 personaggi (Giulia, Marco, Sofia, Luca)
- [[Brief Mockup]] — vincoli grafici e operativi del mockup di pitch
- [[Analisi Narrativa]] — archetipi brand, tone of voice, hooks emotivi per i 3 fili rossi, tensioni narrative

---

*Documento auto-sufficiente per Claude Code. Lingua sito: italiano. Deadline MVP pitch-ready: 31/5/2026. In caso di dubbi su scope, architettura o vincoli grafici, riferirsi sempre alle Fonti consolidate sopra prima di improvvisare.*
