---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
deliverable: Estrazione omnicomprensiva di architettura, sezioni, copy ed elementi del mockup navigabile
audience: Carlo Sanvoisin · team interno HeyAI · Michele · Futuritaly (Elena/Lavinia)
source_codebase: /Users/carlosanvoisin/code/angelini-academy (React + Vite + Tailwind)
created: 2026-05-18
updated: 2026-05-18
status: in lavorazione
---

# Mockup Angelini Academy — Struttura e copy completo del sito

> Documento di riferimento estratto direttamente dal codice del mockup React/Vite costruito da Michele in `/Users/carlosanvoisin/code/angelini-academy`. Riporta in modo esaustivo l'architettura informativa (17 route), tutte le sezioni, tutto il copy testuale visibile e tutti gli elementi UI presenti su ogni pagina. Per il razionale strategico e i wireframe concettuali vedi [[Wireframe e Architettura]], [[Brief Mockup]], [[Master Brief Sito Angelini Academy]]. Per l'analisi narrativa e il framework di pitch vedi [[Strategia Pitch Finale]], [[Analisi Narrativa]], [[Framework Pitch Finale]]. Per lo stato progetto e i decisori vedi [[_Angelini Academy]].

> **Lettura consigliata**: usa l'indice §1 per saltare alla pagina di interesse. Ogni pagina è auto-contenuta. Il copy è citato letteralmente; i widget interattivi sono descritti con tutti i loro stati e tutte le voci pre-canned. Le note di design (motion, colori, accent) sono incluse perché parte integrante della comunicazione del mockup.

---

## 0. Indice

1. [Architettura globale e routing](#1-architettura-globale-e-routing) — 17 route, header, footer, language banner, page shell
2. [Home `/`](#2-home-) — Landing mesh + Persona Select + Hero + Pillars + People + Events + Blog + HomeBuilding + Partners + Newsletter
3. [Percorsi · Giovane Talento `/percorsi/talent`](#3-percorsi--giovane-talento-percorsitalent)
4. [Percorsi · Ricercatore Accademico `/percorsi/researcher`](#4-percorsi--ricercatore-accademico-percorsiresearcher)
5. [Percorsi · HR & Business `/percorsi/hr-business`](#5-percorsi--hr--business-percorsihr-business)
6. [Percorsi · Media & Istituzioni `/percorsi/media`](#6-percorsi--media--istituzioni-percorsimedia)
7. [Engaged Research `/engaged-research`](#7-engaged-research-engaged-research)
8. [MBA Gateway `/mba-gateway`](#8-mba-gateway-mba-gateway)
9. [Founder Stories `/founder-stories`](#9-founder-stories-founder-stories)
10. [Press Room `/press`](#10-press-room-press)
11. [Chi Siamo `/chi-siamo`](#11-chi-siamo-chi-siamo)
12. [Contatti `/contatti`](#12-contatti-contatti)
13. [Eventi `/eventi`](#13-eventi-eventi)
14. [Blog `/blog`](#14-blog-blog)
15. [Dashboard `/dashboard`](#15-dashboard-dashboard)
16. [Metafora Lab `/lab/metafora`](#16-metafora-lab-labmetafora)
17. [Engaged Network `/engaged-network`](#17-engaged-network-engaged-network)
18. [Angelini People `/angelini-people`](#18-angelini-people-angelini-people)
19. [Componenti trasversali e modali](#19-componenti-trasversali-e-modali) — Newsletter, PreviewModal, PaperToLinkedIn, EmailAutomationModal, Galileo (Tutor + Research Engine + Career Path), Cross-OpCo Tracker
20. [Sistema linguistico (IT/EN)](#20-sistema-linguistico-iten) — dizionario completo i18n
21. [Note di design e brand](#21-note-di-design-e-brand)

---

## 1. Architettura globale e routing

Il sito è costruito come SPA React con `react-router-dom`. Il file `src/App.tsx` definisce 17 route più un fallback. Tutte le pagine condividono `<Header />` fisso in cima e `<Footer />` in fondo, con un `<LangBanner />` informativo quando l'utente passa a EN. Il body della pagina vive dentro `<main>` con `<Routes>` che renderizza la singola pagina.

### 1.1 Mappa delle 17 route

| # | Path | Componente | Tipo |
|---|---|---|---|
| 01 | `/` | `Home` | Landing pubblica |
| 02 | `/percorsi/talent` | `PercorsiTalent` | Pubblica · persona |
| 03 | `/percorsi/researcher` | `PercorsiResearcher` | Pubblica · persona |
| 04 | `/percorsi/hr-business` | `PercorsiHrBusiness` | Pubblica · persona |
| 05 | `/percorsi/media` | `PercorsiMedia` | Pubblica · persona |
| 06 | `/engaged-research` | `EngagedResearch` | Pubblica · nucleo |
| 07 | `/mba-gateway` | `MbaGateway` | Pubblica · pilastro 04 |
| 08 | `/founder-stories` | `FounderStories` | Pubblica · narrativa |
| 09 | `/press` | `Press` | Pubblica · stampa |
| 10 | `/chi-siamo` | `ChiSiamo` | Pubblica · istituzionale |
| 11 | `/contatti` | `Contatti` | Pubblica · utility |
| 12 | `/eventi` | `EventiPage` | Pubblica · calendario |
| 13 | `/blog` | `BlogPage` | Pubblica · editoriale |
| 14 | `/dashboard` | `Dashboard` | Riservata · team Academy (password gate) |
| 15 | `/lab/metafora` | `MetaforaLab` | Riservata · lab interno (URL diretto, non in menu) |
| 16 | `/engaged-network` | `EngagedNetwork` | Pubblica · community Q1 2027 |
| 17 | `/angelini-people` | `AngeliniPeople` | Riservata · dipendenti Gruppo (login mockup) |
| — | `*` | `Home` | Fallback su URL sconosciute |

### 1.2 Header globale (`Header.tsx`)

Header fisso, opacità e colori controllati dallo scroll via `framer-motion`. Sopra l'Hero della Home (sfondo scuro) il logo e il testo nav sono bianchi; dopo ~80px di scroll diventano blu istituzionale su sfondo bianco semi-opaco.

**Struttura sinistra → destra:**

- **Logo "Angelini / Academy"** (lockup verticale, "Angelini" in tondo + "Academy" in corsivo, allineamento sinistra, icona marchio "A + abbraccio" via CSS mask).
- **Easter egg**: doppio click sul logo → `/dashboard` (area riservata team). Click singolo → `/`.
- **Menu principale** (desktop, da `i18n`):
  - `Chi siamo` → `/chi-siamo`
  - `Percorsi` → `/percorsi/talent` con dropdown:
    - Giovane Talento → `/percorsi/talent`
    - Ricercatore Accademico → `/percorsi/researcher`
    - HR & Business → `/percorsi/hr-business`
    - Media & Istituzioni → `/percorsi/media`
  - `L'Academy` → `/engaged-research` con dropdown:
    - Engaged Research → `/engaged-research`
    - MBA Gateway → `/mba-gateway`
    - Founder Stories → `/founder-stories`
  - `Eventi` → `/eventi`
  - `Blog` → `/blog`
  - `Press` → `/press`
  - `Contatti` → `/contatti`
- **Toggle lingua** `IT · EN` (persistente in `localStorage` con chiave `angelini-academy.lang`).
- **CTA arancione**: `Candidati al MBA Gateway` (`Apply to the MBA Gateway` in EN) → `/mba-gateway`.

### 1.3 Banner lingua (`LangBanner.tsx`)

Compare solo quando `lang === 'en'`. Pillola dark fissata sotto l'header (top 72px) con testo: *"EN version in build · selected sections translated. The full English copy ships pre-launch, January 2027."* Dismissibile con `×`. Ricompare ogni volta che l'utente torna a EN.

### 1.4 Footer globale (`Footer.tsx`)

Sfondo `bg-ang-900` (blu profondo) + pattern Abbraccio molto leggero (opacità 0.04) come firma istituzionale.

**Tagline grande in apertura**: *"Building **bridges** in education."* (sostantivato "bridges" in italic ocra, eredità del payoff).

**Quattro colonne di link:**

1. **Academy** (`ACADEMY`):
   - Engaged Research · MBA Gateway · Founder Stories · Corporate Learning · Educational Think Tanks · Engaged Network · Angelini People

2. **Percorsi** (`PERCORSI` / `PATHS` in EN):
   - Giovane Talento · Ricercatore Accademico · HR & Business · Media & Istituzioni

3. **Esplora** (`ESPLORA` / `EXPLORE` in EN):
   - Eventi · Blog · Press Room · Chi siamo · Contatti

4. **Angelini Industries** (`ANGELINI INDUSTRIES`):
   - Pharma → · Tech → · Ventures → · Fater → · angeliniindustries.com →

**Riga sede**: *"Casa Angelini · Viale Amelia 70, 00181 Roma — info@angeliniacademy.com · +39 06 — TBD"*. A destra, social pills tondi: **in** (LinkedIn) e **IG** (Instagram).

**Riga legale**: logo bicromatico bianco + *"© 2026 Angelini Academy — società di Angelini Industries"* (in EN: *"a company of Angelini Industries"*). Link legali a destra: **Privacy · Cookie · Note legali · Whistleblowing · Sitemap**.

### 1.5 Shell delle pagine interne (`PageShell.tsx`)

Tutte le 16 pagine non-Home usano lo stesso wrapper. Layout:

1. **Hero scuro editoriale** (`bg-ang-900` con mesh radiale + noise SVG + halo accent specifico della pagina):
   - **Breadcrumb** in alto, tracking 0.32em, ultimo elemento in ocra-300 (current page).
   - **Eyebrow opzionale** (es. "MBA Gateway · Programma di riferimento", "Press Room", "Lab · Metafora 3D") — soppresso automaticamente quando ripeterebbe l'ultimo nodo del breadcrumb.
   - **H1 in editorial italic** (clamp `2.2rem → 5vw → 4.4rem`), font light, leading tight.
   - **Intro paragrafo** in italic light (clamp `1rem → 1.4vw → 1.2rem`), opacità 0.8.
2. **Body chiaro** (`bg-ang-50`) con le sezioni specifiche della pagina.
3. **Newsletter intent-driven** in chiusura (vedi §19.1) — disattivata con prop `hideNewsletter` su `/contatti`, `/dashboard`, `/lab/metafora`, `/angelini-people`.

Ogni pagina dichiara un colore **`accent`** che pilota glow dello hero, accent eyebrow, bordi e badge.

| Pagina | Accent | Hex |
|---|---|---|
| Talent · MBA Gateway · Eventi · Founder Stories | Arancio scuro | `#FF8200` |
| Researcher · Engaged Research · Contatti · Engaged Network | Blu chiaro | `#005EB8` |
| HR & Business | Verde scuro | `#007864` |
| Media · Press · Blog | Rosso scuro | `#E4002B` |
| Chi Siamo | Blu chiaro | `#005EB8` |
| Dashboard · Metafora Lab · Angelini People | Blu istituzionale | `#003087` |

---

## 2. Home `/`

La Home è una composizione di nove componenti renderizzati in sequenza dentro `Home.tsx`. Le prime due sezioni (`PersonaSelect` e `Hero`) condividono lo stesso sfondo `<LandingMesh />` per evitare lo "seam" tra viewport.

### 2.1 Landing Mesh (sfondo condiviso PersonaSelect + Hero)

Due layer animati con framer-motion:

- **LandingBase**: base scuro `#021A30` + blob radiale "drift" superiore (blu `rgba(30,111,181,0.65)`) + wisp inferiore (blu chiaro `rgba(184,212,238,0.25)`) + SVG noise overlay (opacità 0.16, mix-blend overlay). I blob si muovono lentamente in page-coords.
- **LandingCursorSphere**: sfera arancione `rgba(255,130,0,0.70)` posizionata `fixed` (segue il cursore in tutto il viewport con spring damping). Mix-blend `screen`, blur 40px.

> Nota di codice: la bridge image originaria è stata rimossa (feedback cliente 17/5/2026: *"preferivo la versione prima di mettere il bridge"*). Il concetto "Building bridges" resta veicolato dal payoff, non da una foto.

### 2.2 PersonaSelect — "Chi sei, e da dove parti?"

Sezione full-viewport (`min-h-[88vh]`) centrata, sopra l'Hero.

**Intro:**

- Eyebrow tracking 0.4em ocra-300: **`BENVENUTO IN ANGELINI ACADEMY`**
- H1 editorial italic, clamp `2rem → 4.2vw → 3.8rem`: **`Chi sei, e da dove parti?`** ("e da dove parti?" in ocra-400)

**Carosello orizzontale 3D** di 4 personas con scale/rotateY/opacity in funzione della distanza dal centro. La centrata è cliccabile (CTA) e mostra un tooltip "peek preview" dopo 1.2s di hover.

**Le 4 personas (PNG full-character trasparenti su `/personas/*.png`):**

| # | Nome | Tagline | Descrizione (mostrata solo per la centrata) | CTA | Accent / Glow |
|---|---|---|---|---|---|
| 01 | **Giovane Talento** | *"Cerca opzionalità tra corporate, founder e VC."* | Il MBA Gateway pre-valida il tuo percorso con borsa di studio dedicata, graduate program e posizioni dirette in Angelini Industries. | Esplora il percorso → `/percorsi/talent` | `#FF8200` / arancio |
| 02 | **Ricercatore Accademico** | *"Cerca un canale per tradurre la teoria in programmi."* | Engaged Research Lab offre un canale italiano e continentale per pubblicare paper congiunti e portare la tua ricerca dentro programmi industriali reali. | Esplora il percorso → `/percorsi/researcher` | `#005EB8` / blu chiaro |
| 03 | **HR & Business** | *"Cerca alternative ai cataloghi standard delle business school."* | Programmi di Corporate Learning con applicazione AI dimostrata e percorsi su misura per pharma, biotech, manufacturing e financial services. | Esplora il percorso → `/percorsi/hr-business` | `#007864` / verde |
| 04 | **Media & Istituzioni** | *"Cerca storie italiane verificabili."* | Press kit, newsroom, contatti stampa e Bilancio Engaged Research come asset di credibilità verificabile — più accesso diretto ai nostri esperti per interviste. | Esplora il percorso → `/percorsi/media` | `#E4002B` / rosso |

**Tooltip "Anteprima pagina"** (compare dopo 1.2s di hover sulla persona centrata):

| Persona | Titolo peek | Highlights |
|---|---|---|
| Talent | *Tre porte, una sola direzione.* | MBA Gateway · borsa totale · Graduate Program 24 mesi · Cross-OpCo Tracker 3D |
| Researcher | *Engaged, non sponsored.* | Paper grid filtrabile · 8 partner accademici · Cattedra LUISS dedicata |
| HR | *L&D oltre il catalogo.* | 4 settori coperti · 3 masterclass attive · Case study verificabile |
| Media | *Storie italiane verificabili.* | Press kit · 6 asset · Archivio comunicati · Bilancio ER · gen 2027 |

**Controlli**: frecce ← → laterali, dots di paginazione in basso (la dot centrata è larga 28px con pulsazione), tastiera (← → per cambiare, Enter/Space per attivare la persona centrata).

### 2.3 Hero — "Building bridges in education"

Sezione `min-h-[88vh]` centrata. Sfondo ereditato da LandingMesh.

- **Headline** (su una sola riga, lettere che entrano con `rotateX` da -40°): **`Building bridges in education`** (in EN: identica). La parola **"bridges"** è in italic + ocra-400 con una linea ocra che si disegna sotto dopo il completamento dell'animazione.
- **Subtitle** (clamp `0.95rem → 1.15vw → 1.1rem`, max-width 3xl, text-balance):
  - IT: *"Costruiamo ponti tra competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera."*
  - EN: *"We build bridges between the skills demanded and offered, between school and work, between talent and career."*
- **2 CTA** affiancate (MagneticButton, hover con effetto magnetico):
  - Primaria (sfondo ocra-400, testo dark): **`Scopri il MBA Gateway`** / **`Discover the MBA Gateway`** → `/mba-gateway`
  - Ghost (bordo translucido): **`Esplora la ricerca`** / **`Explore the research`** → `/engaged-research`
- **Scroll indicator** in basso al centro: testo `SCROLL` (tracking 0.3em, opacità 55%) + lineetta verticale che pulsa giù.

### 2.4 Pillars — "Quattro pilastri attorno a un nucleo, una sola promessa."

Sezione `bg-ang-50` con header a sinistra e griglia 3×2 a destra. Il **Nucleo Engaged Research** (sfera 3D animata "pianeta") occupa la colonna centrale; i 4 pilastri sono ai quattro angoli (01 ↗ 02 ↘ 03 ↙ 04, in senso orario).

**Header:**

- Eyebrow ocra-500: **`COSA FACCIAMO`** (`WHAT WE DO`)
- H2 (clamp `2rem → 4vw → 3.6rem`): *"Quattro pilastri attorno a un nucleo, **una sola promessa.**"* (la seconda parte in italic ang-600)

**Nucleo Engaged Research (centro, cliccabile → `/engaged-research`):**

- Sfera 3D con superficie scrolling (200% di larghezza che scorre per simulare la rotazione del pianeta), 3 anelli orbitali con tilt diversi + 2 satelliti luminosi, atmosphere glow ocra esterno.
- Label centrata: **`NUCLEO · 00`** (tracking 0.4em ocra-200, mix-blend screen)
- Titolo: **`Engaged Research`** ("Research" in italic)
- Body al hover: "Esplora il nucleo →"
- Quando hover: animazioni rallentate da idle a fast (rotazioni da 28s a 6s, da 40s a 9s, da 20s a 4s; superficie da 22s a 5s; bobbing più ampio).

**I 4 pilastri (PillarCard, tilt 3D al mouse move, cursor glow ocra al hover):**

#### PILASTRO 01 — Corporate Learning all'avanguardia per leader e talent

- Icona: **Libro aperto a doppia pagina**
- Body: *"La leadership non si costruisce solo con strumenti manageriali. Le nostre masterclass mescolano scienze del comportamento, arti, intelligenza artificiale e discipline umanistiche, perché chi guida domani avrà bisogno di vocabolari che oggi sembrano lontani."*
- Mini-stats: **Masterclass** · 6–8 settimane / **EMBA** · co-progettato / **AI · Arti** · cross-discipline
- CTA: **`Esplora le masterclass`** → `/percorsi/hr-business`

#### PILASTRO 02 — Innovazione graduale nelle competenze tecniche e manageriali

- Icona: **Beuta di laboratorio**
- Body: *"Lavoriamo dentro le società del Gruppo Angelini per costruire programmi su misura per Pharma, Tech, Ventures e Fater. Niente formazione astratta: progettiamo percorsi che partono dalle competenze che servono lunedì mattina e arrivano fino alle skill che serviranno tra cinque anni."*
- Mini-stats: **4** · OpCo coperte / **Su misura** · per business unit / **5 anni** · orizzonte skill
- CTA: **`Vedi i programmi corporate`** → `/percorsi/hr-business`

#### PILASTRO 03 — Educational Think Tanks

- Icona: **Forum (cerchio + figure intorno a un tavolo)**
- Body: *"Una volta all'anno apriamo Casa Angelini agli accademici, alle istituzioni e ai talenti che stanno ridisegnando i confini tra umano e intelligenza artificiale. Forum, workshop e hackathon: spazi dove la ricerca incontra la pratica e dove le idee diventano materiale di studio."*
- Mini-stats: **1×/anno** · Casa Angelini / **Forum** · + hackathon / **Nobel** · keynote 2025
- CTA: **`Candidati al Forum 2026`** → `/eventi`

#### PILASTRO 04 — Magnete di talenti · Angelini Academy Gateway

- Icona: **Ponte (arco con piloni)**
- Body: *"Dieci giovani selezionati per merito e potenziale, un MBA full-time a Madrid con IE Business School, uno stage di 3-6 mesi in una delle aziende del gruppo Angelini, una possibilità concreta di assunzione. Il talento esiste già, anche dove le risorse economiche non bastano: per questo le borse di studio coprono il programma intero (e i costi di soggiorno) per chi ha ISEE-ISPE sotto i 50.000 €."*
- Mini-stats: **10** · borsisti/anno / **IE Madrid** · partner accademico / **3-6 mesi** · azienda Angelini
- CTA: **`Scopri il programma MBA`** → `/mba-gateway`

Linee dashed che radiano dal nucleo verso ciascuna card (visibili solo desktop).

### 2.5 People — "Volti reali, percorsi reali. Non claim astratti."

Sezione editoriale con 3 ritratti grandi alternati sinistra/destra, ognuno con scroll parallax.

**Header:**

- Eyebrow ocra-500: **`CHI ATTRAVERSA IL PONTE`**
- H2: *"Volti reali, percorsi reali. **Non claim astratti.**"* (italic ang-600)
- Body: *"Studenti, ricercatori, manager. Per ogni dirigente in foto, almeno tre volti di chi sta imparando — è la regola che ci siamo dati."*

**I 3 profili (in ordine donna-uomo-donna, alterazione richiesta dal cliente 18/5/2026):**

| # | Tag | Nome / Ruolo | Quote (editorial italic) | Story breve |
|---|---|---|---|---|
| 01 | `STORIA · STUDENTI` (dot ocra-400) | **Sofia · MBA Gateway 2025** · Studentessa borsista, IE Madrid | *"Sono entrata pensando di studiare. Sono uscita avendo costruito un ponte vero."* | Cresciuta in provincia, una laurea in chimica e zero risparmi. Il MBA Gateway le ha aperto Madrid e poi Casa Angelini. |
| 02 | `BUSINESS · GRUPPO` (dot ocra-200) | **Marco V.** · Manager OpCo Pharma | *"Il programma non parlava di teoria. Lunedì mattina ho ricominciato a lavorare in modo diverso."* | 15 anni in produzione farmaceutica, primo a iscriversi alla masterclass su intelligenza artificiale e leadership. |
| 03 | `RICERCA · ACCADEMIA` (dot ang-600) | **Prof. Elena R.** · Cattedra LUISS, ricerca su skill mismatch | *"Engaged Research è quando i numeri della ricerca diventano programmi che la gente vive."* | Coordina con Angelini Academy il filone su modelli educativi e skill instability nel farmaceutico. |

Ogni ritratto ha trattamento duotone blu, numero `01/02/03` in basso a destra in editorial italic, e tag pillola in alto a sinistra con dot accentata.

### 2.6 Events — "Dove ci troverete nei prossimi mesi."

Sezione `bg-gradient` (ang-900 → ang-800 → ang-900), testo bianco. Calendario orizzontale scrollabile.

**Header:**

- Eyebrow ocra-200: **`CALENDARIO 2026`**
- H2: *"Dove ci troverete **nei prossimi mesi.**"* (italic ocra-400)
- Filter chips: `Tutti · Festival · Roadshow · Hackathon · Forum · Interno` (pillola attiva = ocra-400 con testo dark)

**Le 8 carte evento (snap scroll orizzontale):**

| ID | Tipo | Data | Città | Titolo | Body | CTA | Hue |
|---|---|---|---|---|---|---|---|
| lancio-interno | `INTERNO` | febbraio 2026 | Casa Angelini · Roma | **Lancio interno · Casa Angelini** | Presentazione in anteprima della nuova Angelini Academy alla popolazione aziendale. Evento riservato al gruppo. | `Area riservata` (non cliccabile, badge lucchetto "AREA RISERVATA") | ang |
| trento-2026 ⭐ FEATURED | `FESTIVAL` | 23–25 maggio 2026 (giorno 23) | Trento | **Festival dell'Economia di Trento — #FuoriFestival** | Il debutto pubblico di Angelini Academy come SRL autonoma. Tre giorni, una conversazione lunga sul futuro della formazione. | `Scopri il programma` (pillola dark con badge ocra `PROSSIMA TAPPA`) | ocra |
| roadshow-bo | `ROADSHOW` | 12 giugno 2026 | Università di Bologna | **Roadshow Università — Bologna** | Incontro con studenti senior interessati al MBA Gateway. Q&A con alumni e candidatura on-site. | `Iscriviti al Roadshow` | ang |
| hackathon-bbs | `HACKATHON` | 8 luglio 2026 | Bologna Business School | **Hackathon Educational — Edizione III** | 36 ore per ridisegnare un programma educativo aziendale. Mentor da SDA Bocconi, IE Madrid e dal team Angelini. | `Candida il tuo team` | filo-verde |
| follow-up-alumni | `INTERNO` | ottobre–novembre 2026 | Casa Angelini · Roma | **Follow-up Alumni · Casa Angelini** | Due eventi riservati alla community Alumni Angelini Academy. Ritrovo, ascolto, follow-up sulla carriera dopo il programma. | `Area riservata` | ang |
| forum-2026 | `FORUM` | novembre 2026 | Casa Angelini · Roma | **Angelini Academy Forum 2026** | Networking event annuale. Apre Casa Angelini ad accademici, istituzioni e stakeholder. Possibile partecipazione di un Premio Nobel. | `Iscriviti al Forum` | filo-rosso |
| masterclass-ai | `MASTERCLASS` | 6 novembre 2026 | POLIMI · Milano + remoto | **Masterclass — AI for PM** | Una giornata sulle competenze ibride per dirigere team che includono modelli generativi. In partnership con POLIMI. | `Richiedi un posto` | ang |
| roadshow-mi | `ROADSHOW` | 4 dicembre 2026 | Università Bocconi | **Roadshow Università — Milano** | Stesso format del Roadshow Bologna, allargato ad alumni MBA Gateway delle precedenti edizioni. | `Iscriviti al Roadshow` | ocra |

In fondo: hint scroll *"Scorri orizzontalmente per vedere tutto il calendario"* (icona freccia + linea).

### 2.7 Blog — "Tre conversazioni che attraversano tutto."

Sezione `bg-ang-50` con 3 tile editoriali (aspect 3/4) in gradient verticale. L'hover rivela un blur-to-focus dell'articolo in evidenza.

**Header:**

- Eyebrow ocra-500: **`EDITORIALE · TRE STREAM TEMATICI`**
- H2: *"Tre conversazioni **che attraversano tutto.**"* (italic ang-600)
- Body laterale: *"Strategia, ricerca, programmi. Ogni articolo dentro uno stream tematico coerente. L'hover apre il primo articolo in evidenza."*

**Nota di audit (riportata in `Blog.tsx`)**: in chiamata con Caterina (15/5/2026) è emerso che i "fili rossi" del brief sono **obiettivi alti di comunicazione**, NON colonne di navigazione editoriale. Gli stream sono stati rinominati in chiave neutra (Strategia · Ricerca · Programmi), preservando la struttura visiva ma non vincolandosi alla classificazione "filo rosso".

**I 3 stream:**

| # | Label | Sfondo gradient | Articolo in evidenza · TITOLO | Excerpt | Reading |
|---|---|---|---|---|---|
| 01 | **Strategia** | giallo `#F4C842 → #C99315` (filo-giallo) | **Perché Angelini diventa SRL: una conversazione interna che valeva un brand** | Il senso del proprio posto in un mondo che cambia: dalla business unit alla società autonoma, le ragioni di una transizione che riguarda tutti. | 7 min |
| 02 | **Ricerca** | rosso `#E4002B → #8E2A1D` (filo-rosso) | **Skill mismatch nel farmaceutico: cosa cambia se la ricerca incontra la produzione** | Un report congiunto Angelini Academy + UCL su cinque cluster di skill che il pharma EU dovrà colmare entro il 2030. | 12 min · paper |
| 03 | **Programmi** | verde `#5B9C7A → #225435` (filo-verde) | **Borsa totale, niente prestito: come abbiamo riscritto il merito per il MBA Gateway** | Le risorse non devono filtrare il talento. Una nota tecnica sul meccanismo ISEE-ISPE e sul perché non parliamo di "scontistica". | 5 min |

Ogni tile mostra in default `Esplora lo stream →`. Watermark numero `01/02/03` in editorial italic enorme dietro.

### 2.8 HomeBuilding — "Oltre il sito, due audience precise."

Sezione `bg-ang-50` con 2 card grandi (Engaged Network + Angelini People) che teasizzano le due aree estese.

**Header:**

- Eyebrow ocra-500 uppercase: **`Due strati di valore`**
- H2: *"Oltre il sito, **due audience precise.**"* (italic ang-600)
- Body: *"Engaged Network estende il Forum nel digitale per la community esterna. Angelini People dà una casa editoriale alle persone del Gruppo. Lo stesso paper Engaged Research vive tre strati di valore: aperto, discusso, applicato."*

**Le 2 card:**

| Badge (pulsa) | Titolo (editorial italic) | Body | Audience | Link |
|---|---|---|---|---|
| **Community esterna · Q1 2027** (blu chiaro `#005EB8`) | **Engaged Network** | Il dialogo che continua oltre il Forum Casa Angelini. Community piccola e curata di alumni MBA Gateway e ricercatori dei 14 atenei partner. | Alumni MBA Gateway · ricercatori partner | `Scopri di più` → `/engaged-network` |
| **Riservato Gruppo Angelini** (blu istituzionale `#003087`) | **Angelini People** | Una finestra editoriale e relazionale per chi è parte del Gruppo. Catalogo formativo con workflow interno, comunità OpCo, early access ai paper Engaged Research. | Dipendenti del Gruppo · HR Community | `Scopri di più` → `/angelini-people` |

### 2.9 Partners — "Non parliamo di formazione da soli. Le costruiamo insieme."

Sezione warm wash (`var(--color-ocra-50)`) con marquee orizzontale infinito.

**Header:**

- Eyebrow ocra-500: **`LA RETE · 8 ISTITUZIONI · 4 PAESI`**
- H2 editorial italic: *"Non parliamo di formazione da soli. **Le costruiamo insieme.**"* (italic ang-600)
- A destra: counter grande **`+12`** + label `programmi co-progettati nel 2025`. Link: `Vedi tutte le collaborazioni →` (apre PreviewModal "Network · 8 partner istituzionali + 13 atenei R&D").

**PreviewModal "Vedi tutte le collaborazioni"** mostra:

- Eyebrow: `Network · 8 partner istituzionali + 13 atenei R&D`
- Title: *"La rete accademica Angelini Academy"*
- Body: *"Otto partner istituzionali in quattro paesi (POLIMI, IE Madrid, UCL, Royal College of Art, SDA Bocconi, LUISS, Imperial College, Bologna Business School) e una rete R&D pedagogica estesa pre-validata da audit accademico interno · febbraio 2026."*
- Bullets:
  - Cambridge, UCL Knowledge Lab, Open University IET
  - KU Leuven O2L, RWTH Aachen LearnTech, TUM EdTech
  - CMU HCI, Georgia Tech ISC
  - Beijing Normal Smart Learning, Tsinghua
  - Bologna, Padova, Leibniz-Institut
- Meta: `12 programmi co-progettati nel 2025`
- CTA: `Esplora Engaged Research`

**Marquee — 2 righe in direzione opposta** (animazioni `marquee-l` 48s e `marquee-r` 62s) con 8 pillole partner ripetute ×3 per il loop:

| Short | Nome esteso | Città |
|---|---|---|
| POLIMI | Politecnico di Milano | Milano |
| IE | IE Business School | Madrid |
| UCL | University College London | London |
| RCA | Royal College of Art | London |
| SDA | SDA Bocconi | Milano |
| LUISS | LUISS Business School | Roma |
| Imperial | Imperial College London | London |
| BBS | Bologna Business School | Bologna |

### 2.10 Newsletter Home (variant `default`)

Vedi §19.1 per il dettaglio completo del componente. Sulla Home renderizza la variante "default":

- Badge: `IL PONTE · NEWSLETTER #07`
- Eyebrow: `RESTA AGGIORNATO`
- Title: *"Una mail, ogni due settimane. **Solo cose che leggeremmo anche noi.**"*
- Body: *"Una lettura selezionata da chi costruisce l'Academy: un paper, un talento, una conversazione in corso. Niente recap, niente filler."*
- Facts: +2.300 lettori · cadenza bisettimanale · zero spam, un click per uscire
- CTA: `Iscrivimi alla newsletter`
- Stato submitted: `Iscritto ✓ Ci sentiamo presto.`

---

## 3. Percorsi · Giovane Talento `/percorsi/talent`

Accent: arancio `#FF8200`. Breadcrumb: Home › Percorsi › Giovane Talento. Newsletter variant `talent`.

**Hero (PageShell):**

- Eyebrow: **`Percorsi · Giovane Talento`**
- H1: *"Il talento **non aspetta**."* ("non aspetta" italic ocra-400)
- Intro: *"Le aziende italiane non trovano le competenze che cercano: skill mismatch, 2,5% di PIL perso ogni anno (Excelsior 2023). Tu sei dall'altra parte — hai studiato, hai voglia, vuoi capire dove muoverti. Tre percorsi pre-validati: MBA Gateway, Graduate Program, posizioni dirette nelle quattro OpCo del gruppo. Con borsa di studio, mentorship e contratto."*

### 3.1 Options triad — "Tre porte. Una sola promessa: il merito non si filtra per reddito."

H2: *"Tre porte. Una sola promessa: **il merito non si filtra per reddito.**"*
Sub-body laterale: *"Ognuno di questi percorsi è pre-validato. Niente catalogo, niente borsa parziale: scegli per affinità, non per esclusione economica."*

Tre card 3-colonne con badge sopra, titolo, summary, CTA:

| Badge | Titolo | Summary | CTA |
|---|---|---|---|
| `01 · Programma di riferimento` | **MBA Gateway** | Dieci giovani selezionati per merito e potenziale ogni anno, MBA full-time a Madrid con IE Business School, stage di 3-6 mesi in un'azienda del gruppo Angelini. Finanziamento totale per ISEE-ISPE sotto i 50.000 €, tassa 20.000 € (≈ 25% del valore di mercato) per gli altri. | `Esplora il MBA Gateway` → `/mba-gateway` |
| `02 · Carriera dentro Angelini` | **Graduate Program** | Percorso strutturato 24 mesi nelle aziende del gruppo (Pharma · Tech · Ventures · Fater) con rotation cross-funzionale e mentorship dedicata. | `Scopri il Graduate Program` → `/percorsi/talent` |
| `03 · Ingresso laterale` | **Posizioni Dirette** | Per chi ha già un primo lavoro e cerca un salto di responsabilità. Posizioni manageriali in apertura periodica nelle quattro OpCo, con piano di crescita interno incluso. | `Vedi le posizioni aperte` → `/percorsi/talent` |

### 3.2 Career Path Navigator — quiz Galileo

Sezione `#career-path` (raggiungibile via deep-link da `/mba-gateway`). Dettaglio completo in §19.5. Riassunto in chat:

- Eyebrow: **`Career Path Navigator · Galileo`**
- H2: *"Cinque domande, **un percorso pre-validato.**"*
- Body: *"Galileo ti propone tre programmi e calcola il match per ognuno in base a chi sei oggi e a dove vuoi essere fra cinque anni."*
- 5 domande con 3-4 risposte ognuna (weighted toward mba/grad/direct).
- Risultati: 3 programmi con % di fit (baseline 30%, range +65, top match 78-95%).

### 3.3 Founder Story highlight · Sofia

Layout 2 colonne, sfondo bianco neutro (decisione 17/5 dopo feedback su sfondo giallo).

- Ritratto Sofia con tag `FOUNDER STORY · 2024` e numero `01`.
- Quote in overlay: *"Sono entrata pensando di studiare. Sono uscita avendo costruito un ponte vero."*
- A destra: eyebrow **`Una storia · Quattro capitoli`**, H2 *"Sofia non aveva un piano. Aveva una **domanda.**"*, body: *"Cresciuta in provincia, una laurea in chimica e zero risparmi. Voleva capire se la sua passione per la ricerca poteva diventare un mestiere senza svendersi. Il MBA Gateway le ha aperto Madrid, poi Casa Angelini."*
- CTA dark: `Leggi tutte le Founder Stories` → `/founder-stories`

### 3.4 Cross-OpCo teaser

Pannello scuro gradient ang-700 → ang-900.

- Eyebrow ocra-200: **`Cross-OpCo Tracker`**
- H2: *"Quattro aziende del gruppo. Sei mesi per **capire dove vuoi stare.**"*
- Body: *"Pharma, Industrial Tech, Consumer, Ventures: ogni borsista MBA Gateway percorre tutte le OpCo del gruppo prima di scegliere dove sviluppare carriera. Visualizzazione 3D interattiva nella pagina MBA Gateway."*
- 4 pillole ocra-200: `Pharma · Industrial Tech · Consumer · Ventures`
- CTA: `Vedi la rotation animata` → `/mba-gateway`

### 3.5 Final CTA

- H2: *"Sei pronto a candidarti?"*
- Body: *"Le candidature MBA Gateway aprono ogni anno a febbraio. Senza tassa d'iscrizione, senza lettera di raccomandazione obbligatoria."*
- CTA: `Esplora il MBA Gateway` → `/mba-gateway`

---

## 4. Percorsi · Ricercatore Accademico `/percorsi/researcher`

Accent: blu chiaro `#005EB8`. Newsletter variant `researcher`.

**Hero:**

- Eyebrow: **`Percorsi · Ricercatore Accademico`**
- H1: *"Engaged Research, **non ricerca commissionata**."*
- Intro: *"Un canale italiano e continentale per pubblicare ricerca peer-reviewed e portarla dentro programmi industriali reali. Il modello è collaborativo: partner accademici, non fornitori di ore d'aula."*

### 4.1 Paper grid — "Tre verticali, una sola lente."

H2: *"Tre verticali, **una sola lente.**"*
Body: *"Lifelong learning over 50, skill mismatching, AI applicata alla pedagogia. Ogni paper diventa input per i programmi Corporate Learning."*

**I 4 paper (grid 2 colonne):**

| Tag | Titolo | Autori | Abstract | Reading |
|---|---|---|---|---|
| `Skill mismatching` | **Skill instability in EU pharma: a five-cluster forecast 2025-2030** | A. Reni · M. Donati · LUISS Business School | Cinque cluster di competenze che il pharma EU dovrà colmare entro il 2030, con metodologia mista quantitativa-qualitativa su 14 aziende. | 12 min · paper |
| `AI applicata pedagogia` | **Adult learning under generative AI: a meta-review of 47 interventions** | E. Romano · J. Park · UCL Institute of Education | Meta-review di 47 interventi che combinano modelli generativi e formazione adulta in contesti corporate. | 9 min · paper |
| `Lifelong over 50` | **Re-skilling over 50: evidence from three Italian industrial sites** | L. Fabbri · F. Esposito · Angelini Academy | Tre casi di studio longitudinali su programmi di re-skilling in tre stabilimenti industriali italiani. | 15 min · paper |
| `Skill mismatching` | **The Mediterranean gap: why southern European graduates re-train within 36 months** | M. Costa · INSEAD | Indagine longitudinale su 8.000 laureati italiani, spagnoli e portoghesi: cosa li spinge a ri-formarsi. | 11 min · paper |

Su ogni card, due bottoni:

- **`Leggi il paper`** → apre PreviewModal con `Scarica PDF + executive summary`
- **`✦ Trasforma in post LinkedIn`** → apre PaperToLinkedIn modal (vedi §19.3)

### 4.2 La rete accademica · 8 partner istituzionali + 13 atenei R&D

Sfondo bianco con BrandPattern Abbraccio fitto (opacità 0.04).

- Eyebrow: **`La rete accademica`**
- H2: *"Otto partner istituzionali. Quattro paesi."*
- Chips partner: `POLIMI · IE Madrid · UCL · RCA · SDA Bocconi · LUISS · Imperial College · BBS`

Sotto, sezione "+13 atenei in 6 paesi · pre-validati R&D pedagogico":

- Body: *"Rete estesa per ricerca applicata in pedagogia, edtech e human-computer interaction. Pre-validazione audit accademico interno · febbraio 2026."*
- Chips estesi: `Cambridge · UCL Knowledge Lab · Open University IET · KU Leuven O2L · RWTH Aachen LearnTech · TUM EdTech · CMU HCI · Georgia Tech ISC · Beijing Normal Smart Learning · Tsinghua · Bologna · Padova · Leibniz-Institut`

### 4.3 La collaborazione, in tre passi

H2: *"La collaborazione, in **tre passi.**"*

3 colonne con bordo sinistro blu chiaro:

| N | Titolo | Body |
|---|---|---|
| **01** | **Proposta** | Traccia di 1-2 pagine, valutata in 14 giorni con feedback metodologico o invito a un primo confronto. |
| **02** | **Review congiunto** | Disegno di ricerca, dataset e calendario co-progettati. Co-firma prevista dal primo abbozzo. |
| **03** | **Pubblicazione + applicazione** | Pubblicazione su rivista peer-reviewed; le evidenze passano nei programmi industriali. Engaged Research, non ricerca commissionata. |

### 4.4 CTA finale · Proponi una collaborazione

Card bianca grande con ring leggero.

- Eyebrow: **`Proponi una collaborazione`**
- H2: *"Un'ipotesi da testare con un partner industriale?"*
- Body: *"Traccia preliminare di 1-2 pagine: domanda di ricerca, ipotesi, dataset previsto, calendario. Risposta entro 14 giorni."*
- CTA dark: `Esplora Engaged Research` → `/engaged-research`

---

## 5. Percorsi · HR & Business `/percorsi/hr-business`

Accent: verde scuro `#007864`. Newsletter variant `business`.

**Hero:**

- Eyebrow: **`Percorsi · HR & Business`**
- H1: *"L&D oltre il **catalogo**."*
- Intro: *"Programmi di Corporate Learning con applicazione AI dimostrata, non promessa. Percorsi su misura per pharma, biotech, manufacturing e financial services — co-progettati con la tua azienda."*

### 5.1 Industries — "Quattro settori, una sola disciplina."

H2: *"Quattro settori, **una sola disciplina.**"*
Body laterale: *"Regolamentazione, pressione produttiva, ciclo del prodotto: sono i punti di partenza. I programmi nascono dalle operations reali del settore, non da casi di studio scolastici."*

**I 4 settori (ognuno con accent dedicato, feedback 18/5):**

| Settore | Descrizione | Accent |
|---|---|---|
| **Pharma** | Conformità, competenze trasversali, leadership scientifica | `#003087` blu istituzionale |
| **Biotech** | R&D leadership, ricerca traslazionale, gestione di laboratorio | `#007864` verde |
| **Manufacturing** | Operations 4.0, Lean, transizione digitale di stabilimento | `#FF8200` arancio |
| **Financial Services** | Adeguamento normativo, AI applicata alla conformità, gestione del cambiamento | `#005EB8` blu chiaro |

### 5.2 Masterclass — "Quattro masterclass, quattro partner accademici."

H2 su sfondo bianco. Grid 2 colonne con 4 card:

| Titolo | Durata | Partner | Summary |
|---|---|---|---|
| **AI for PM** | 1 giorno · in-person | POLIMI | Una giornata di immersione tecnica per chi gestisce prodotto: come integrare modelli generativi nel ciclo di sviluppo senza perdere il controllo metodologico. |
| **Critical Thinking & Data Driven Decision Making** | 2 giorni · in-person | SDA Bocconi | Strumenti analitici per decisioni manageriali sotto incertezza. Casi reali Angelini, framework decisionali, esercitazione finale di gruppo. |
| **Creative Leadership** | 2 giorni · in-person | Royal College of Art | Leadership attraverso la lente del design e delle arti. Pensiero divergente applicato a problemi gestionali, in collaborazione con i docenti RCA. |
| **Empathetic Engineer** | 2 giorni · in-person | Imperial College | Per chi guida team tecnici: scienze del comportamento applicate alla gestione di profili ingegneristici. Empatia come strumento di efficacia operativa. |

### 5.3 Caso di studio · Pharma EU

Layout 2 colonne (testo + foto `case-pharma.jpg` 16/9).

- Eyebrow ocra-500: **`Caso di studio · Pharma EU`**
- H2: *"420 manager, **18 mesi di re-skilling.**"*
- Body: *"Programma co-progettato con un gruppo pharma europeo. Misurazione pre/post su comportamenti, non solo soddisfazione: 73% di adozione misurata sul lavoro reale a sei mesi."*
- 3 KPI:
  - **420** · manager coinvolti
  - **73%** · adozione a 6 mesi
  - **18m** · durata programma
- Tag overlay sulla foto: `CASO DI STUDIO · PHARMA EU`

### 5.4 CTA · "Scarica il modello di valutazione L&D"

Card scura gradient verde → blu profondo.

- Eyebrow: **`Sintesi executive · 8 pagine`**
- H2: *"Scarica il modello di valutazione L&D."*
- Body: *"Le 12 metriche che misurano i programmi corporate prima, durante e dopo. Niente indicatori superficiali."*
- CTA ocra: `Scarica il paper` → apre PreviewModal con bullets:
  - Dimensione 1 · Conoscenza acquisita (pre/post test, mastery learning)
  - Dimensione 2 · Comportamento osservabile (peer review, shadow coaching)
  - Dimensione 3 · Impatto sul business (KPI di linea, retention, mobilità interna)
  - Dimensione 4 · Persistenza (follow-up a 6/12 mesi, refresher mirati)
- Meta modal: `PDF · 8 pagine · IT/EN` · CTA `Iscriviti per ricevere il paper`

---

## 6. Percorsi · Media & Istituzioni `/percorsi/media`

Accent: rosso `#E4002B`. Newsletter variant `media`.

**Hero:**

- Eyebrow: **`Percorsi · Media & Istituzioni`**
- H1: *"Sala stampa: cartella, comunicati, **contatti diretti**."*
- Intro: *"Cartella stampa, foto in alta risoluzione, comunicati recenti e contatti diretti per interviste o richieste policy. Materiali aggiornati ogni trimestre."*

### 6.1 Press kit

Layout 2 colonne.

- Eyebrow: **`Press kit`**
- H2: *"Tutto quello che serve **in un PDF.**"*
- Body: *"Logo in SVG e PNG, foto HD del team e di Casa Angelini, estratto del brand book, boilerplate aziendale e dati chiave aggiornati ogni trimestre."*
- CTA dark: `Scarica il press kit · 12MB` → apre PreviewModal `coming-soon`:
  - Eyebrow: `Press kit · 12 MB`
  - Title: *"Cartella stampa Angelini Academy"*
  - Body: *"Pacchetto completo per la stampa: logo SVG e PNG in bicromia, foto HD del team e di Casa Angelini, estratto del brand book, boilerplate aziendale in tre lunghezze (50/100/250 parole) IT/EN, dati chiave aggiornati ogni trimestre."*
  - Bullets:
    - Logo Angelini Academy in SVG + PNG (bicromia ufficiale)
    - Set di 12 ritratti professionali team
    - Sei scatti istituzionali Casa Angelini (Viale Amelia 70, Roma)
    - Boilerplate aziendale IT/EN — tre lunghezze
    - Estratto brand book — 12 pagine
  - Meta: `Disponibile a partire da gennaio 2027`
  - CTA: `Iscriviti alla newsletter stampa`

A destra, card teaser rosso → blu profondo:

- Eyebrow: `Bilancio Engaged Research · In arrivo`
- Title: *"Trasparenza misurabile **su ogni paper, programma, borsista.**"*
- Body: *"Prima edizione gennaio 2027. Sarà pubblica, verificabile da terze parti, con metriche di impatto educativo, scientifico e sociale."*

### 6.2 Comunicati stampa recenti (3 release)

Lista verticale divisa:

| Data | Tag | Titolo |
|---|---|---|
| `12 MAG 2026` | Posizionamento | Angelini Academy diventa SRL: nuovo assetto societario per la formazione corporate |
| `04 APR 2026` | Ricerca | Skill mismatch nel pharma EU: cinque cluster da colmare entro il 2030 |
| `18 FEB 2026` | Programmi | MBA Gateway 2026: dieci borse totali per giovani con ISEE-ISPE sotto i 50.000 € |

CTA `Leggi →` apre PreviewModal con preview e CTA `Vai alla Press Room`.

### 6.3 Contatti stampa

Card 2 colonne:

- **Ufficio stampa**: `press@angeliniacademy.com` · `+39 06 — TBD`
- **Relazioni istituzionali**: `istituzionali@angeliniacademy.com` · `+39 06 — TBD`

CTA dark in chiusura: `Vai alla Press Room completa` → `/press`.

---

## 7. Engaged Research `/engaged-research`

Accent: blu chiaro `#005EB8`. Newsletter variant `researcher`.

**Hero:**

- Eyebrow: **`Engaged Research · Nucleo 00`**
- H1: *"Ricerca pedagogica applicata, **firmata con i partner accademici**."*
- Intro: *"Engaged Research è il nucleo metodologico dell'Academy. Paper peer-reviewed firmati con i partner accademici, disponibili in open access quando possibile, che entrano direttamente nei programmi industriali. Engaged Research, non ricerca commissionata."*

### 7.1 Reading Room — Galileo agent + 6 paper scroll-driven

Sezione complessa che combina chatbot search + tassonomia filters + scroll-driven 3D paper cards.

**Header**: eyebrow ocra-500 **`Reading Room`** · H2 *"Tre verticali, sei paper. Cerca con Galileo **o filtra per tassonomia**."*

**Galileo Agent (componente `ChatbotSearch`):**

- Icona Galileo grande (76px, attiva pulsing)
- Eyebrow: **`Galileo · Agente di ricerca`**
- Titolo: *"Chiedimi di un **paper, un autore, una tassonomia**."*
- Body: *"Sono il vostro agente di ricerca: interrogabile in linguaggio naturale su tutta la ricerca peer-reviewed dell'Academy. Provatemi con uno dei suggerimenti qui sotto."*
- Input fittizio (disabled): placeholder *"Chiedi a Galileo: 'Quali paper sul Lifelong over 50?'"* + bottone `Chiedi` (disabled)

**4 prompt cliccabili (pulsano lievemente in idle):**

| Prompt | Risposta intro Galileo | Paper riferiti | Conclusione |
|---|---|---|---|
| *"Quali paper sul Lifelong over 50?"* | "Abbiamo 2 paper attivi sul tema dell'apprendimento per la fascia over 50, entrambi con focus sul mondo industriale italiano:" | `reskill-over50`, `plant-mgr-50` | "Vuoi un riassunto di uno dei due? Cliccami sotto." |
| *"Cattedra LUISS · ultime pubblicazioni"* | "La cattedra LUISS dedicata a Lifelong Learning e Mediterranean labor market ha pubblicato 3 paper recenti in collaborazione con il nostro Engaged Research Lab:" | `mismatch-pharma`, `tutor-llm`, `plant-mgr-50` | "Tutti peer-reviewed, output 2025-2026, open access." |
| *"Skill mismatching nel pharma EU"* | "Il tema è centrale nella nostra tassonomia. 2 paper lo affrontano con angolazioni complementari:" | `mismatch-pharma`, `med-gap` | "Insieme coprono ~10.000 osservazioni su 14 paesi EU e 8.000 laureati." |
| *"AI nella formazione adulta"* | "Abbiamo 2 contributi sulla tassonomia 'AI applicata pedagogia', con prospettive che si parlano:" | `ai-meta-review`, `tutor-llm` | "Conclusione condivisa: l'AI è efficace come scaffolding, NON come sostituzione del tutor umano. Da qui nasce il design dei nostri programmi blended." |

Ogni risposta usa **typewriter effect** (~9ms/char), poi rivela le card paper con CTA `Riassumi` (apre summary modal) e `Apri →` (scroll to paper card).

**Filtri tassonomia**: `Tutti i paper · Lifelong over 50 · Skill mismatching · AI applicata pedagogia` (pill animata con `layoutId`).

**6 paper scroll-driven 3D (ScrollPaperCard):**

| ID | Tag | Titolo | Autori · Istituzione | Reading | Color |
|---|---|---|---|---|---|
| `mismatch-pharma` | Skill mismatching | Skill instability in EU pharma: a five-cluster forecast 2025-2030 | A. Reni · M. Donati / LUISS Business School | 12 min | blu chiaro |
| `ai-meta-review` | AI applicata pedagogia | Adult learning under generative AI: a meta-review of 47 interventions | E. Romano · J. Park / UCL Institute of Education | 9 min | arancio |
| `reskill-over50` | Lifelong over 50 | Re-skilling over 50: evidence from three Italian industrial sites | L. Fabbri · F. Esposito / Angelini Academy · SDA Bocconi | 15 min | verde |
| `med-gap` | Skill mismatching | The Mediterranean gap: why southern European graduates re-train within 36 months | M. Costa / INSEAD | 11 min | blu chiaro |
| `tutor-llm` | AI applicata pedagogia | When the tutor is an LLM: trust calibration in corporate learning | D. Bianchi / LUISS Business School | 8 min | arancio |
| `plant-mgr-50` | Lifelong over 50 | Plant managers over 50: a longitudinal study on digital transition | C. Verde · F. De Luca / Angelini Academy · LUISS | 14 min | verde |

Ogni card mostra: tag + numero `XX / 06`, titolo, autori, abstract, reading time, CTA `Galileo, riassumi` (apre summary modal con typewriter) + CTA `Leggi il paper` (dark). Footnote in fondo alla griglia: *"Scrolla — i paper si rivelano con un tilt 3D mentre entrano in viewport"*.

**Galileo Summary Modal**: per ogni paper, riassunto AI ~600 caratteri streaming character-by-character, + 2 chip `Copia citazione APA` / `Copia citazione BibTeX` (mock con feedback "Copiato ✓") + CTA dark `Leggi il paper completo` (scroll to card). Footnote: *"Riassunto generato da Galileo a partire dal full-text peer-reviewed. Verifica sempre sul paper originale prima di citare."*

Esempi di summary completi:

- **mismatch-pharma**: *"Lo studio identifica cinque cluster di competenze critiche per il pharma EU 2025-2030: data literacy avanzata, AI-augmented R&D, regulatory agility, supply chain digitale e leadership ibrida. Il gap medio rilevato sui ruoli mid-senior è del 38%. La metodologia combina survey su 14 aziende campione (n=2.800 risposte), interviste qualitative con 47 HR director e analisi documentale di 320 job descriptions. La raccomandazione policy è programmi di re-skilling di 18-24 mesi co-progettati con istituzioni accademiche. Per Angelini Academy: il Corporate Learning hub dovrebbe integrare i cinque cluster nel catalogo entro Q1 2026."*
- **ai-meta-review**: *"Meta-review di 47 interventi pubblicati 2022-2025 sull'uso di modelli generativi nella formazione adulta corporate. Risultati principali: +24% di ritenzione a 90 giorni quando l'AI affianca un tutor umano, ma -12% di calibrazione della fiducia (gli adulti sovrastimano la propria comprensione se usano l'AI standalone). I migliori risultati arrivano da setup ibridi human-tutor + AI-assistant. La conclusione metodologica è netta: l'AI è efficace come strumento di scaffolding, non di sostituzione. Implicazione operativa: i programmi corporate vanno progettati come blended con facilitator umano + AI di supporto."*
- **reskill-over50**: *"Tre casi longitudinali (Pharma Italia, Industrial Tech Padova, Consumer Group Roma) di programmi di re-skilling per dipendenti 50+. Adesione iniziale 68%, sostenimento a 12 mesi 82% — più alta che nei gruppi 30-50 anni. Outcome misurati: comportamento sul lavoro (osservato), retention (HR data), satisfaction (Q12). Pattern emerso: gli over 50 imparano meglio con peer-learning e contesto applicativo immediato, faticano con LMS lineari standard. Raccomandazione metodologica: privilegiare apprendimento situato over 50, evitare MOOC tradizionali."*
- **med-gap**: *"Indagine longitudinale su 8.047 laureati italiani, spagnoli e portoghesi. Il 64% si ri-forma entro 36 mesi dalla laurea (vs. 38% dei pari nord-europei). Driver principali: mismatch curriculum-mercato del lavoro (54%), salari iniziali bassi (31%), opportunità all'estero (15%). I percorsi di ri-formazione più scelti sono master executive part-time, certificazioni tech e MBA full-time. Implicazione strategica: Angelini Academy e i suoi partner accademici hanno un'opportunità unica nel mercato sud-europeo del 'second-mover learning' — formazione per chi ha già un primo lavoro ma cerca uno scarto di carriera."*
- **tutor-llm**: *"Studio sperimentale su 312 dipendenti senior (40-58 anni) che hanno interagito con un assistente LLM e con un tutor umano sullo stesso topic (compliance regolatoria). Risultato chiave: la calibrazione della fiducia è significativamente più alta verso il tutor umano (+34%), anche quando l'output dell'LLM era oggettivamente più completo. La 'calibrazione della fiducia' (capacità di sapere QUANDO fidarsi di una risposta) è una skill esplicita che va insegnata. Raccomandazione: nei programmi corporate ibridi, dedicare 2-4 ore esplicitamente a 'come valutare le risposte dell'AI'."*
- **plant-mgr-50**: *"Studio longitudinale 36 mesi su 120 plant manager italiani sopra i 50 anni che hanno affrontato l'introduzione di sistemi MES, IoT industriale e digital twin. Outcome: 89% ha portato a termine la transizione, ma con tempi medi del 47% più lunghi rispetto ai pari 30-49 anni. Il fattore di successo principale identificato è il 'sense of agency' (poter co-decidere le specifiche del rollout). Implicazione di design dei programmi: i percorsi di digital transformation devono includere co-design moments per i manager senior, non solo training top-down imposto dall'alto."*

### 7.2 Galileo · Research Engine

Vedi §19.6 per il dettaglio completo. Sezione bianca con header:

- Eyebrow blu: **`Galileo · Research Engine`**
- H2: *"Galileo non legge soltanto. **Simula.**"*
- Body italic: *"L'agente che vi riassume i paper può anche aiutarci a generarli. Galileo simula in parallelo migliaia di varianti di un esperimento pedagogico, propone ipotesi nuove dalla letteratura mondiale, trova pattern nei dataset anonimizzati dei nostri partner. Lo stesso approccio con cui i grandi research lab AI scoprono nuovi materiali, nuove proteine, nuove soluzioni matematiche — applicato al nostro dominio: come si apprende meglio."*

Network graph SVG con 36 nodi in 3 cluster (`lifelong over 50` blu istituzionale · `skill mismatch` blu chiaro · `AI · pedagogia` ocra-300), edges intra-cluster densi + 8 link cross-cluster, ~25% dei nodi pulsa. Header live: `Simulazioni in tempo reale · live` (dot pulse).

**KPI dashboard** (counter animati):

- **12.847** simulazioni eseguite questa settimana
- **23** hypothesis generated
- **7** pattern emergenti pre-validati
- **3** paper draft prodotti via Galileo Lab Translator

**4 micro-feature (grid 2×2):**

| Nome | Body |
|---|---|
| **Simulazioni parallele** | Testa migliaia di varianti di sequencing didattico su modelli comportamentali. Trova quali funzionano meglio per chi. |
| **Hypothesis generation** | Galileo legge la letteratura mondiale su edTech e propone ipotesi di ricerca che valgono la pena di essere testate. |
| **Pattern discovery** | Trova pattern nei dataset anonimizzati delle università partner che il singolo ricercatore non vede a mano. |
| **Synthetic experiments** | Simula esperimenti pedagogici prima di farli su persone vere. Riduce tempo, risorse, e questioni etiche. |

**Box "Cosa NON fa"** (dark): *"Galileo Research Engine non sostituisce la peer-review umana. Non pubblica autonomamente. Non lavora su dati identificabili di singoli studenti. Le scoperte interessanti vanno sempre validate da ricerca empirica condotta dai nostri partner accademici."*

**Cross-link narrativo finale**: *"I paper prodotti con il Research Engine alimentano poi Galileo Tutor delle masterclass. La ricerca che facciamo diventa la formazione che diamo."*

### 7.3 Metodologia · "Tre passi, tre ruoli, una cosa sola."

Sfondo bianco, 3 colonne con bordi accent gradient (blu istituzionale → blu chiaro → verde):

| N | Titolo | Body |
|---|---|---|
| **01** | **Domanda di ricerca** | Un problema concreto dell'industria, definito insieme ai partner accademici. |
| **02** | **Laboratorio** | Dataset reali in contesti industriali — Pharma, Tech, Consumer, Ventures. |
| **03** | **Pubblicazione + applicazione** | Co-autoria di paper peer-reviewed; le evidenze passano dentro i programmi industriali. |

### 7.4 LUISS spotlight

Pannello scuro gradient `#005EB833 → ang-900`.

- Eyebrow ocra-200: **`Cattedra LUISS · 2025`**
- H2: *"Una cattedra dedicata al lifelong learning e al mercato del lavoro mediterraneo."*
- Body: *"Coordinata dalla Prof. Elena Romano. Tre filoni di ricerca attivi, due posizioni di dottorato, pubblicazioni annuali in open access."*

---

## 8. MBA Gateway `/mba-gateway`

Accent: arancio `#FF8200`. Newsletter variant `talent`. Pagina più ricca dopo Home — contiene Timeline, Cross-OpCo Tracker 3D, Galileo Tutor, Quiz CTA, Calcolatore borsa, EOI form.

**Hero:**

- Eyebrow: **`MBA Gateway · Programma di riferimento`**
- H1: *"10 borsisti. 1 MBA a Madrid. **3-6 mesi in Angelini**."*
- Intro: *"Dieci giovani selezionati per merito e potenziale ogni anno. MBA full-time a Madrid presso IE Business School, stage di 3-6 mesi nelle quattro società del gruppo (Pharma, Tech, Ventures, Fater), una possibilità concreta di assunzione. Per chi ha ISEE-ISPE sotto i 50.000 € il finanziamento è totale e copre anche i costi di soggiorno; per gli altri è prevista una tassa di iscrizione di 20.000 € (≈ 25% del valore di mercato)."*

### 8.1 Timeline · "Da febbraio 2026 a ottobre 2027."

H2 in apertura: *"Da febbraio 2026 a ottobre 2027."*
Body: *"Un percorso esplicito in cinque fasi. Ogni passaggio è retribuito o coperto da borsa."*

Timeline verticale (desktop: zigzag sinistra/destra) con **mini-pianeti 3D arancio** come timestone su ogni step. Una linea bianca passa attraverso i centri.

| Data | Step | Body |
|---|---|---|
| **FEB–MAR 2026** | **Selezione** | Bando aperto dal 15 febbraio. Tre passaggi: valutazione delle candidature, intervista metodologica, caso aziendale di 90 minuti con il team Angelini. Senza tassa d'iscrizione, senza lettera di raccomandazione obbligatoria. |
| **GIU 2026** | **Induction · Casa Angelini** | Un mese a Roma per incontrare mentor, partner accademici e gli altri nove ammessi. Costruiamo il quadro metodologico prima della partenza per Madrid. |
| **OTT 2026 → GIU 2027** | **MBA full-time · IE Madrid** | Nove mesi a Madrid presso IE Business School. Per chi ha ISEE-ISPE sotto i 50.000 €, la borsa copre tassa universitaria, vitto, alloggio e voli A/R quadrimestrali. |
| **GIU → DIC 2027** | **Stage Cross-OpCo** | Stage di 3-6 mesi nelle quattro società del gruppo — Pharma, Tech, Ventures, Fater — prima di scegliere il dipartimento di destinazione. |
| **OTT 2027 (TBD)** | **Posizione manageriale** | Inserimento in azienda con piano di crescita interno e mentorship in continuità. La data esatta è confermata in chiusura percorso. |

### 8.2 Cross-OpCo Tracker (3D scroll-pinned)

Componente complesso. Dettaglio in §19.7.

In sintesi: 4 sfere-pianeta 3D (Pharma blu `#005EB8`, Tech arancio `#FF8200`, Ventures verde `#007864`, Fater rosso `#E4002B`) allineate su una rail orizzontale che si "accende" progressivamente con lo scroll (trail ocra). Quando una sfera è centrata: scala +40%, halo amplificato, info card laterale con:

- **Pharma · 01** · fino a 6 settimane · Skills `Compliance regolamentare · Scientific leadership · R&D operations` · Project *"Piloting di un OTC di nuova generazione su tre mercati EU."*
- **Tech · 02** · fino a 6 settimane · Skills `Operations 4.0 · Manufacturing leadership · Lean transformation` · Project *"Re-design di una linea produttiva su KPI di waste reduction."*
- **Ventures · 03** · fino a 6 settimane · Skills `Scouting biotech · Due diligence · Investment thesis` · Project *"Scouting di una startup biotech con valutazione preliminare."*
- **Fater · 04** · fino a 6 settimane · Skills `Brand strategy · Marketing 2.0 · Customer insight` · Project *"Launch di un nuovo prodotto consumer in canale farmacia."*

### 8.3 Galileo · Tutor

Sezione `bg-ang-50`. Dettaglio in §19.6.

- Eyebrow: **`Galileo · Tutor`**
- H2: *"Galileo non ti lascia all'inizio del percorso."*
- Body italic: *"L'agente che ti propone il programma giusto continua con te durante le masterclass, il MBA e gli stage cross-OpCo. Risponde alle tue domande sui materiali, propone esercizi extra dove vede un gap, riassume le sessioni live che hai perso."*

Centrato: GalileoIcon grande (140px) con halo arancio pulsante. CTA dark: `Vedi un esempio di conversazione` (apre modal con chat mockup).

Footnote italic: *"Galileo Tutor è groundato sui paper firmati dall'Engaged Research Lab — la stessa ricerca che alimenta il Research Engine. La ricerca che facciamo diventa la formazione che diamo."*

**Modal "Vedi un esempio"** mostra:

- Header: GalileoIcon piccolo + label **`Galileo · Tutor`** · **`Masterclass Leadership in Pharma 2026`** · stato `attivo` (dot verde pulse).
- Chat con 4 messaggi:
  1. **TU**: *"Non ho capito il punto sulla skill obsolescence di cui ha parlato la Prof. Romano ieri. Puoi riassumere?"*
  2. **Galileo** (pillola "groundato su Paper #02 · UCL Institute of Education"): *"La meta-review UCL su 47 interventi pedagogici AI-augmented mostra che la skill obsolescence nei contesti corporate raddoppia ogni 5-7 anni post-COVID. Il punto chiave della Prof. Romano: non basta riqualificarsi una volta, serve un metodo continuo di scaffolding. Vuoi che ti suggerisca 2 esercizi per applicare il concetto al tuo settore?"*
  3. **TU**: *"Sì grazie."*
  4. **Galileo**: *"Esercizio 1 (15 min): mappa 3 skill del tuo ruolo a 5 anni fa vs oggi e identifica quale è in obsolescence rapida. Esercizio 2 (30 min): scrivi un retraining plan ipotetico per un caso pharma del tuo settore. Ti guido se serve."*
- Input fittizio: *"Scrivi a Galileo…"*
- Colonna laterale 2 box:
  - **Cosa fa** (4 bullet check):
    - Risponde a domande sui materiali del corso, citando paper specifici dell'Engaged Research Lab.
    - Propone esercizi extra quando rileva un gap di comprensione.
    - Riassume sessioni live perse con punti chiave + materiale di rinforzo.
    - Fa spaced repetition retention con micro-prompt mirati nelle 2 settimane post-masterclass.
  - **Cosa NON fa** (4 bullet ×):
    - Non valuta il merito intellettuale del tuo lavoro — quello resta umano.
    - Non sostituisce il docente o il mentor di programma.
    - Non pubblica autonomamente nulla.
    - Non condivide la tua conversazione con terzi.

### 8.4 Quiz CTA — Career Path Navigator

Card gradient ang-50 → ocra-50:

- Eyebrow bold: **`Non sai ancora se MBA Gateway fa per te?`**
- H3: *"Fai il quiz Galileo Career Path · 5 minuti."*
- Body: *"Cinque domande, tre programmi proposti con un match in percentuale. Niente registrazione, niente email — è una bussola, non un test."*
- CTA dark: `Inizia il quiz` → `/percorsi/talent#career-path`

### 8.5 Transizione neutra

Solo testo centrato italic: *"I criteri di candidatura ufficiali saranno pubblicati ad apertura selezioni — febbraio 2026."*

### 8.6 Calcolatore borsa · Stima indicativa

Pannello scuro gradient ang-700 → ang-900 con BrandPattern Marchio ampio (opacità 0.06).

- Eyebrow ocra-200: **`Calcolatore borsa · Stima indicativa`**
- H2: *"Borsa totale + costi di soggiorno per ISEE-ISPE **sotto i 50.000 €**."*

**2 bottoni selezionabili (radio):**

1. **Sotto i 50.000 €** (default selezionato) — *"Finanziamento totale: tassa universitaria + costi di soggiorno."*
2. **Da 50.000 € in su** — *"Tassa di iscrizione 20.000 € (~25% del valore di mercato)."*

**Riassunto dinamico (a destra):**

- Tassa di mercato MBA IE: ~~€80.000~~ (line-through)
- Borsa Angelini Academy: **-€80.000** o **-€60.000** (ocra-400)
- Quello che paghi tu: **€0** o **€20.000** (editorial italic grande ocra-400)
- Disclaimer dinamico:
  - Borsa totale: *"Borsa totale: tassa universitaria + costi di soggiorno a Madrid (vitto, alloggio, voli A/R quadrimestrali)."*
  - Tassa ridotta: *"Tassa di iscrizione 20.000 €, pari a circa il 25% del valore di mercato del master. Tutto il resto è a carico di Angelini Academy."*
- Note legale: *"Un investimento di Angelini Industries come gesto di mecenatismo verso il territorio: 10 borse di studio, non 10 posti da vendere."*

### 8.7 Esprimi interesse · EOI form

Card bianca:

- Eyebrow: **`Esprimi interesse`**
- H2: *"Non è ancora una candidatura. È un primo segnale."*
- Body: *"Compila il modulo per ricevere la guida candidatura in PDF ed essere contattato all'apertura delle selezioni. La candidatura formale si presenta tramite IE Madrid."*
- Form (3 campi):
  - `Nome e cognome`
  - `Email`
  - `In 3 righe: perché tu, perché ora` (textarea 3 righe)
- CTA ocra: `Invia interesse`

---

## 9. Founder Stories `/founder-stories`

Accent: arancio `#FF8200`. Newsletter variant `talent`. Soft scroll-snap `y proximity`.

**Hero:**

- Eyebrow: **`Founder Stories`**
- H1: *"Storie di chi ha attraversato **i ponti**."*
- Intro: *"Tre anni dopo: dove sono. Borsisti, alumni, accademici in cattedra. Le voci sono loro — non la nostra."*

### 9.1 Le 3 storie (ordine donna-uomo-donna, alternate)

Sfondo bianco neutro (decisione 17/5). Layout alternato sinistra/destra.

#### Story 01 · Sofia

- Tag: `STUDENTI · 01` (dot ocra-400)
- Ritratto: `/photos/founder-sofia.jpg` con numero `01` in basso a destra
- Quote: *"Sono entrata pensando di studiare. Sono uscita avendo costruito un ponte vero."*
- Name: **Sofia**
- Role: **MBA Gateway 2025**
- Location: **Oggi: Senior Brand Manager · Angelini Consumer**
- Story: *"Sono cresciuta in provincia, una laurea in chimica e zero risparmi. Il MBA Gateway mi ha aperto Madrid, poi Casa Angelini. Tre anni dopo guido una linea di prodotti nuovi."*

#### Story 02 · Marco V.

- Tag: `BUSINESS · 02` (dot ocra-200)
- Ritratto: `/photos/founder-marco.jpg` con numero `02`
- Quote: *"Il programma non parlava di teoria. Lunedì mattina ho ricominciato a lavorare in modo diverso."*
- Name: **Marco V.**
- Role: **Masterclass AI & Leadership · 2024**
- Location: **Oggi: Operations Director · Angelini Pharma**
- Story: *"Quindici anni in produzione farmaceutica. Sono stato il primo a iscrivermi alla masterclass su AI e leadership. Oggi dirigo uno stabilimento di 800 persone."*

#### Story 03 · Prof. Elena R.

- Tag: `ACCADEMIA · 03` (dot ang-600)
- Ritratto: `/photos/founder-elena.jpg` con numero `03`
- Quote: *"Engaged Research è quando i numeri della ricerca diventano programmi che la gente vive."*
- Name: **Prof. Elena R.**
- Role: **Cattedra LUISS · Engaged Research**
- Location: **Co-PI di 3 paper, 1 in pubblicazione su Academy of Management Learning**
- Story: *"Coordino con Angelini Academy il filone su modelli educativi e skill instability nel farmaceutico. Due dottorande in cattedra dedicata, un paper congiunto in revisione."*

### 9.2 CTA finale

H2 centrato: *"La prossima storia **potresti essere tu**."*
CTA ocra: `Candidati al prossimo ciclo` → `/mba-gateway`

---

## 10. Press Room `/press`

Accent: rosso `#E4002B`. Newsletter variant `media`.

**Hero:**

- Eyebrow: **`Press Room`**
- H1: *"Press Room: asset, archivio, **contatti diretti**."*
- Intro: *"Asset scaricabili, archivio comunicati, contatti diretti dell'ufficio stampa, anteprima del Bilancio Engaged Research — prima edizione gennaio 2027."*

### 10.1 Asset scaricabili (grid 3 colonne, 6 asset)

| Asset | Size | Descrizione |
|---|---|---|
| **Logo SVG · Bicromia** | 128 KB | Versione orizzontale e quadra, bicromia blu istituzionale + arancio. |
| **Foto HD · Team** | 24 MB | Set di 12 ritratti professionali del team, 300dpi, formato libero. |
| **Foto HD · Casa Angelini** | 38 MB | Sei scatti istituzionali della sede di Viale Amelia 70, Roma. |
| **Estratto brand book** | 4 MB | Dodici pagine: palette, font, regole d'uso, esempi applicativi. |
| **Boilerplate aziendale** | 60 KB | Tre versioni — 50, 100, 250 parole — italiano e inglese. |
| **Dati chiave Q1 2026** | 1 MB | Programmi attivi, borsisti accolti, paper pubblicati, partner accademici. |

CTA `Scarica` apre PreviewModal `coming-soon` con bullets: *"Versione definitiva in finalizzazione · Disponibile a partire da gennaio 2027 · Inviata via email a chi si è iscritto alla newsletter stampa"* · CTA `Notificami al lancio`.

### 10.2 Archivio comunicati (6 release)

Lista verticale sfondo bianco:

| Data | Titolo | Meta | Body preview |
|---|---|---|---|
| **12 MAG 2026** | Angelini Academy diventa SRL: nuovo assetto societario per la formazione corporate | PDF · 4 pagine · IT/EN | *"Angelini Industries annuncia la trasformazione di Angelini Academy in società autonoma. Il nuovo assetto rafforza l'indipendenza editoriale del nucleo Engaged Research e abilita la pipeline commerciale 2027-2028 per i programmi Corporate Learning. Sede operativa: Casa Angelini, Viale Amelia 70, Roma."* |
| **04 APR 2026** | Skill mismatch nel pharma EU: cinque cluster da colmare entro il 2030 | PDF · 18 pagine · open access | *"Pubblicato il primo paper congiunto Angelini Academy + LUISS Business School + UCL: cinque cluster di competenze (R&D leadership, AI applicata, regolamentazione, dati real-world, leadership scientifica) che il settore farmaceutico europeo dovrà colmare entro il 2030. Metodologia mista su 14 aziende."* |
| **18 FEB 2026** | MBA Gateway 2026: dieci borse totali per giovani con ISEE-ISPE sotto i 50.000 € | PDF · 6 pagine · IT/EN | *"Bando aperto dal 15 febbraio per la prima edizione del MBA Gateway. Dieci posti, MBA full-time presso IE Business School a Madrid, stage di 3-6 mesi nelle aziende del gruppo (Pharma, Tech, Ventures, Fater). Finanziamento totale per ISEE-ISPE sotto i 50.000 € — tassa universitaria e costi di soggiorno coperti. Per ISEE-ISPE da 50.000 € in su, tassa di iscrizione 20.000 € (≈ 25% del valore di mercato)."* |
| **22 NOV 2025** | Casa Angelini ospita il Forum Educational con keynote di un premio Nobel | PDF · 5 pagine · IT/EN | *"Prima edizione del Forum Educational, evento annuale che apre Casa Angelini ad accademici, istituzioni e talenti dal 22 al 24 novembre. Keynote di un premio Nobel per l'economia. Tre giorni di workshop, hackathon e tavoli di lavoro sui confini tra umano e intelligenza artificiale."* |
| **04 OTT 2025** | Engaged Research Lab: nuova cattedra LUISS dedicata al lifelong learning | PDF · 4 pagine · IT/EN | *"Inaugurata la cattedra LUISS in lifelong learning e mercato del lavoro mediterraneo, coordinata dalla Prof. Elena Romano. Tre filoni di ricerca attivi, due posizioni di dottorato finanziate, pubblicazioni annuali in open access."* |
| **14 LUG 2025** | Roadshow Università: otto atenei italiani in sei settimane | PDF · 4 pagine · IT | *"Conclusa la prima edizione del Roadshow Università. Otto atenei visitati in sei settimane (Bocconi, Bologna, Sapienza, Federico II, Padova, Torino, Trento, LUISS), oltre 1.200 studenti incontrati, 340 candidature ricevute per il MBA Gateway 2026."* |

### 10.3 Bilancio Engaged Research · In arrivo gen 2027

Pannello scuro gradient rosso → blu profondo.

- Eyebrow: **`Bilancio Engaged Research · In arrivo gen 2027`**
- H2: *"Un bilancio pubblico, verificabile da terze parti."*
- Body: *"Metriche di impatto educativo, scientifico e sociale: ogni paper, ogni borsista, ogni programma. Prima edizione gennaio 2027 — pubblica come PDF e come dataset open."*

### 10.4 Contatti diretti

H2: *"Per interviste e dichiarazioni."*
Body: *"press@angeliniacademy.com · +39 06 — TBD · Ufficio Stampa Angelini Academy"*

---

## 11. Chi Siamo `/chi-siamo`

Accent: blu chiaro `#005EB8`. Newsletter variant `default`.

**Hero:**

- Eyebrow: **`Chi siamo`** (soppresso per anti-redundancy con breadcrumb)
- H1: *"Una società di Angelini Industries dedicata al **Corporate Learning**."*
- Intro: *"Angelini Academy nasce nel 2024 come SRL autonoma del gruppo Angelini Industries. Un nodo italiano della rete continentale del lifelong learning, con un nucleo di ricerca peer-reviewed e una vocazione mecenatistica esplicita."*

### 11.1 Posizionamento ufficiale (blockquote big)

Sfondo `bg-ang-50` con soft radial glow blu in alto a destra e ambra in basso a sinistra. Grande virgolettone watermark a sinistra. Blockquote con bordo ocra sinistro:

> *"Angelini Academy, la società di Angelini Industries dedicata al **Corporate Learning**, propone una **nuova pedagogia** che combina tecnologie avanzate, contaminazioni interdisciplinari e la ricerca di nuove competenze e modelli educativi. Con una **propensione internazionale**, rinnova la formazione aziendale per preparare le persone ad affrontare con successo le sfide di un contesto lavorativo globale in costante evoluzione."*

(Le parti in bold sono in `text-ang-600` blu medio.)

### 11.2 Vision

- Eyebrow: **`Vision`**
- H2 editorial italic: *"Achieve global leadership in corporate learning innovation through new contents and new learning models."*
- Body: *"Una vision ambiziosa, una società autonoma, una missione: rinnovare la formazione aziendale a livello internazionale partendo dalla ricerca pedagogica."*

### 11.3 Manifesto · Quattro valori

H2: *"Una propensione mecenatistica **messa in pratica.**"*
Grid 2×2 con 4 mini-pianeti 3D numerati (01-04, ognuno con palette dedicata):

| # | Pianeta | Titolo | Body |
|---|---|---|---|
| 01 | Arancio | **Mecenatismo, non vendita** | Programmi cardine completamente gratuiti per chi ha merito. ISEE-ISPE come strumento di equità, non come filtro. |
| 02 | Blu chiaro | **Engaged Research, non ricerca commissionata** | Ricerca peer-reviewed che entra nei programmi industriali. La pubblicazione precede l'applicazione, non viceversa. |
| 03 | Verde | **Nodo italiano di una rete europea** | Otto partner istituzionali in quattro paesi, più tredici atenei pre-validati per R&D pedagogico. La rete è il metodo, non l'ornamento. |
| 04 | Viola `#840B55` | **Cross-OpCo, non silos** | Pharma, Industrial Tech, Consumer, Ventures: la formazione attraversa le quattro OpCo del gruppo. Il talento non si specializza prima di aver guardato. |

### 11.4 Il team · "Quattro persone, una direzione."

H2 su `bg-ang-50`. Grid 4 colonne con 4 placeholder role-only (nomi reali in attesa di autorizzazione):

| Ruolo | Sub-role | Bio |
|---|---|---|
| **Direttore Generale** | `CEO · In attesa di autorizzazione` | Costruttore del modello Engaged Research, quindici anni in Angelini. |
| **Direttrice Engaged Research Lab** | `Cattedra LUISS · In attesa di autorizzazione` | Coordinamento di tre dottorande su lifelong learning. Cattedra LUISS dedicata. |
| **Comunicazione e Ufficio Stampa** | `Editoriale · In attesa di autorizzazione` | Cura editoriale, voce di marca, relazioni con la stampa specializzata. |
| **Responsabile Programmi** | `Disegno didattico · In attesa di autorizzazione` | Disegno didattico e traduzione della ricerca in programmi corporate. |

### 11.5 Partner accademici

H2: *"Otto partner istituzionali, quattro paesi."*
Grid 4 colonne con 8 pill bianchi: **POLIMI · IE Madrid · UCL · RCA · SDA Bocconi · LUISS · Imperial College · BBS**

### 11.6 Parte di Angelini Industries

Sezione scura `bg-ang-900`.

- Eyebrow ocra-200: **`Parte di Angelini Industries`**
- H2: *"Angelini Academy è una società del gruppo **Angelini Industries**."*
- Body: *"Quattro OpCo (Pharma, Tech, Ventures, Fater) e una missione comune: formare adulti per il mestiere che faranno tra cinque anni."*
- 4 chip OpCo: `Pharma → · Tech → · Ventures → · Fater →`
- CTA ocra: `Esplora l'Engaged Research` → `/engaged-research`

---

## 12. Contatti `/contatti`

Accent: blu chiaro `#005EB8`. Newsletter nascosta (`hideNewsletter`).

**Hero:**

- Eyebrow: **`Contatti`** (soppresso)
- H1: *"Recapiti e contatti diretti."*
- Intro: *"Per chi non si riconosce in nessuno dei quattro percorsi, per chi ha una domanda specifica, per chi vuole capire cos'è Angelini Academy in dieci minuti. Risposta in tre giorni lavorativi."*

### 12.1 Form scrivici + recapiti

Layout 2 colonne (form 1.2fr + sidebar 1fr).

**Form (card bianca):**

- Eyebrow: **`Scrivici`**
- H2: *"Risposta in 3 giorni lavorativi."*
- Campi:
  - `Nome e cognome` (required)
  - `Email` (required)
  - `Azienda / istituzione (opzionale)`
  - Select `Motivo del contatto…` (required) con 5 opzioni:
    1. Sono interessato al MBA Gateway
    2. Sono ricercatore e voglio proporre una collaborazione
    3. Sono HR & Business e cerco programmi corporate
    4. Sono un giornalista o policy maker
    5. Altro
  - Textarea `Il tuo messaggio` (5 righe, required)
- CTA ocra: `Invia il messaggio` → su submit: `Inviato ✓ Ci sentiamo presto` (auto-reset dopo 8s)
- Disclaimer: *"Inviando il modulo accetti la nostra privacy policy. Usiamo il tuo indirizzo solo per risponderti."*

**Sidebar 3 card:**

| Card | Contenuto |
|---|---|
| **Sede** | `Casa Angelini · Viale Amelia 70` · `00181 Roma · Italia` |
| **Email generale** | `info@angeliniacademy.com` · `+39 06 — TBD` |
| **Stampa** | `press@angeliniacademy.com` · `Referente · TBD` |

### 12.2 Mappa placeholder

Aspect 21/9, gradient azzurro chiaro → blu medio:

- Eyebrow ocra-200: `Mappa interattiva · placeholder`
- Tagline editorial italic: *"Casa Angelini · Viale Amelia 70, Roma"*

---

## 13. Eventi `/eventi`

Accent: arancio `#FF8200`. Newsletter variant `default`. Wrapper sottile attorno al componente `<Events />`.

**Hero:**

- Eyebrow: **`Calendario 2026`**
- H1: *"Dove ci **troverete** nei prossimi mesi."*
- Intro: *"Festival, roadshow universitari, hackathon, forum annuale, masterclass aperte: il calendario completo di tutto quello che facciamo fuori da Casa Angelini."*

Body: render del componente `<Events hideHeader />` (lo stesso della Home §2.6, ma con header eyebrow+h2 nascosti per evitare ripetizione del titolo PageShell). Le 8 carte evento, le filter chips e l'hint scroll sono identici alla §2.6.

---

## 14. Blog `/blog`

Accent: rosso `#E4002B`. Newsletter variant `default`. Wrapper attorno al componente `<Blog />`.

**Hero:**

- Eyebrow: **`Editoriale · Tre stream tematici`**
- H1: *"Tre conversazioni che **attraversano tutto**."*
- Intro: *"Strategia, ricerca, programmi: ogni articolo si annida dentro uno dei tre stream tematici. Una mappa per orientarsi nel pensiero dell'Academy."*

Body: i 3 stream tile (Strategia · Ricerca · Programmi) come in §2.7.

---

## 15. Dashboard `/dashboard`

Accent: blu istituzionale `#003087`. Riservata · password gate. Newsletter nascosta.

**Hero:**

- Eyebrow: **`Area riservata · Team Academy`**
- H1: *"Dashboard **interna**."*
- Intro: *"Vista riservata al team Angelini Academy: metriche del sito, iscrizioni newsletter, candidature MBA Gateway, attività del quiz Career Path Navigator e dell'agente Galileo."*

### 15.1 Password gate

Card centrale bianca:

- Badge: `Area riservata` (lucchetto)
- Titolo: *"Dashboard Angelini Academy"*
- Body: *"Vista riservata al team Academy. Metriche del sito, iscrizioni newsletter, conversazioni Galileo."*
- Input password (default password env var `VITE_DASHBOARD_PASS` = `angelini2026`)
- CTA dark: `Accedi`
- Errore: *"Password non corretta."* (auto-clear dopo 1.5s)
- Footnote: *"Demo illustrativa · in produzione l'autenticazione passa via Sign in with Vercel o Clerk, i dati arrivano da Vercel Analytics + database del CRM connesso."*

### 15.2 Dashboard content (post-login)

**Header**: eyebrow `Dashboard · area riservata` · H2 *"Panoramica del mese."* · stato `Ultimo aggiornamento · 2 min fa` · bottone `Esci`.

**6 KPI cards (grid 2/3/6):**

| Label | Value | Delta |
|---|---|---|
| Visitatori unici · 30g | **12.450** | +18% |
| Newsletter iscritti | **2.847** | +312 |
| Form submissions · 7g | **64** | +22% |
| EOI MBA Gateway | **38** | +9 |
| Galileo conversazioni | **187** | +47% |
| Tempo medio sito | **4m 12s** | +38s |

**Newsletter per cluster** (barre animate):

- Talenti: 1.247 (44%) · arancio
- Ricerca: 689 (24%) · blu chiaro
- HR & Business: 521 (18%) · verde
- Media: 218 (8%) · rosso
- Default: 172 (6%) · viola

**Iscrizioni recenti (mock email mascherate):**

| Email | Variant | Quando |
|---|---|---|
| g.rossi@unimi.it | Ricerca | 2 min fa |
| marco.bianchi@pharma\*\*\*\*.com | HR & Business | 14 min fa |
| studente21@bocconi.it | Talenti | 38 min fa |
| redazione@\*\*\*\*.it | Media | 1h fa |
| elena.f@\*\*\*\*\*.eu | Ricerca | 1h fa |
| a.martinelli@\*\*\*\*.com | HR & Business | 2h fa |

Footnote: *"Email parzialmente mascherate per privacy demo."*

**Top CTA · click ultimo mese (barre ocra):**

| Label | Clicks | Page |
|---|---|---|
| Scopri il programma MBA | 824 | `/` |
| Candidati al MBA Gateway | 612 | Header |
| Esplora la ricerca | 487 | `/` |
| Iscriviti alla newsletter | 312 | Newsletter |
| Trasforma in post LinkedIn | 184 | `/percorsi/researcher` |
| Candidati al prossimo ciclo | 156 | `/founder-stories` |

**Career Path Quiz · match** (distribuzione 218 quiz):

- MBA Gateway: **42%**
- Graduate Program: **34%**
- Posizioni Dirette: **24%**

**Galileo · attività recente (pannello dark):**

- Eyebrow ocra-200: **`Galileo · attività recente`**
- H3: *"187 conversazioni questo mese."*
- Sub: `+47% vs mese precedente`
- 4 query recenti:
  - *"Quali paper sull'adult learning con AI?"* · 4 min fa
  - *"Differenza tra mismatching e re-skilling"* · 23 min fa
  - *"Borsa MBA Gateway · come funziona"* · 47 min fa
  - *"Engaged Research · metodologia"* · 1h fa

**Footer note**: *"Dati illustrativi · in produzione la dashboard viene popolata da Vercel Analytics, dal CRM connesso (Mailchimp / HubSpot / Salesforce) e dal logger AI Gateway. Aggiornamento ogni 5 minuti."*

---

## 16. Metafora Lab `/lab/metafora`

Accent: blu istituzionale `#003087`. URL diretto (non in menu). Newsletter nascosta.

**Hero:**

- Eyebrow: **`Lab · Metafora 3D`**
- H1: *"Quattro metafore, **una decisione**."*
- Intro: *"Showcase comparativo delle 4 alternative ai 'pianeti' attuali. Tutte mantengono la struttura 3D ma cambiano il simbolo: atomo · molecola · sinapsi · cristallo. Scegli quale si lega meglio al brand Angelini e procediamo con il rollout sui componenti esistenti (Nucleus, Cross-OpCo, mini-planet timeline)."*

### 16.1 Tab navigation (4 metafore)

Pillole `🅰 Atomo · 🅱 Molecola · 🅲 Sinapsi · 🅳 Cristallo` (tutte stato `ready`).

### 16.2 Stage comparativo

Per ogni metafora: visual 3D a sinistra + descrizione + 4 box (Brand fit, Effort, Punti di forza, Punti di attenzione).

#### 🅰 Atomo · Modello Bohr-Rutherford

Descrizione: *"Nucleo solido al centro + 2 orbital shells geometriche + 4 elettroni che orbitano. Ogni elettrone rappresenta uno dei 4 pilastri. Metafora 'fondamento della materia'."*

- Brand fit: `Pharma · Scienza fondamentale`
- Effort: `~3-4 ore (più rapida)`
- Pros: Strong fit pharma (atomi = building block dei farmaci) · Universalmente leggibile · Migrazione veloce: stessa struttura visiva, skin diversa · Coerente con archetipo Sage scientifico
- Cons: Rischio "modello da liceo" se non si cura il rendering · Atomo Bohr è scientificamente obsoleto (alcuni accademici lo notano)

#### 🅱 Molecola · Ball-and-stick

Descrizione: *"4 atomi connessi da legami chimici visibili. Il nucleo Engaged Research è l'atomo centrale, i 4 pilastri sono atomi periferici legati a lui da bonds che pulsano con impulsi di energia."*

- Brand fit: `Pharma · Interdisciplinarità`
- Effort: `~5-6 ore`
- Pros: Pharma deep fit (molecola = principio attivo) · I bonds rendono esplicite le relazioni tra pilastri · Coerente con "contaminazioni interdisciplinari" del posizionamento ufficiale · Sofisticato senza essere ostico
- Cons: Effort medio (~5-6h) · Richiede curare il rendering bonds per non sembrare gioco

#### 🅲 Sinapsi · Rete neurale

Descrizione: *"Neurone centrale (Engaged Research) con 4 assoni curvi che si collegano a 4 neuroni periferici (i pilastri). Lungo gli assoni viaggiano impulsi luminosi sinaptici, con dendriti che si diramano dai nodi."*

- Brand fit: `Learning + Scienze + AI`
- Effort: `~6-8 ore`
- Pros: Lessico approvato dal brand: "neuroscienze dell'apprendimento" · Triplo fit: pharma + edtech + AI applicata alla pedagogia · Distintiva rispetto a qualsiasi competitor academy · Estetica luminosa premium
- Cons: Effort più alto (~6-8h) · Rendering organico difficile da curare · Più rischio se non viene bene visivamente

#### 🅳 Cristallo · Lattice farmaceutico

Descrizione: *"Reticolo ottaedrico 3D rotante con 6 vertici (2 apici verticali + 4 equatoriali). I 4 pilastri sono i 4 vertici equatoriali, connessi al centro Engaged Research e tra di loro da edges luminosi. Rotazione continua su asse Y."*

- Brand fit: `Pharma · Struttura industriale`
- Effort: `~5-7 ore`
- Pros: Pharma fit (cristalli = forma solida dei farmaci, API polymorphism) · Estetica premium, super distintiva · Simmetria = senso di metodologia industriale
- Cons: Più astratto, meno leggibile di atom/molecule · Rischio percezione "tech sci-fi" più che pharma serio · Effort medio-alto (~5-7h)

### 16.3 Footer instructions

*"**Come funziona questo lab** · costruisco i 4 mockup progressivamente per garantire qualità di rendering. Quando una metafora è 'in costruzione' o 'in arrivo', la card mostra solo la spiegazione testuale. Appena finisco la build, l'anteprima 3D appare al posto del placeholder. Tu intanto puoi confrontare le descrizioni e iniziare a farti un'idea su quale ti convince di più."*

---

## 17. Engaged Network `/engaged-network`

Accent: blu chiaro `#005EB8`. Pubblica · preview Q1 2027. Newsletter variant `researcher`.

**Hero:**

- Eyebrow: **`Engaged Network · Q1 2027`**
- H1: *"Il dialogo che continua **oltre il Forum**."*
- Intro: *"Engaged Network è l'estensione digitale perpetua del Forum Casa Angelini. Una community piccola e curata di alumni MBA Gateway e ricercatori dei 14 atenei partner pre-validati. La preview pubblica apre nel Q1 2027 — la qualità della discussione si tiene solo se la rete cresce lentamente."*

### 17.1 Network Pulse — KPI live (counter animati)

Box bianco con header `La community in tempo reale · Aggiornato 12 min fa`:

- **127** thread attivi (blu chiaro)
- **42** paper in discussione (arancio)
- **487** membri della community (verde)
- **14** atenei partner (viola)

### 17.2 4 funzionalità · "Cosa significa partecipare a Engaged Network."

| ID | Nome | Descrizione | Accent |
|---|---|---|---|
| **F01** | **Paper Discussion Threads** | Ogni paper Engaged Research apre un thread strutturato. La discussione tra ricercatori, alumni e team Academy resta accessibile e tracciabile. | Blu istituzionale |
| **F02** | **Contributor Tiers** | Reader · Contributor · Reviewer · Editor. Promozione su qualità del contributo, non quantità. Editor invitati al Forum fisico Casa Angelini come riconoscimento. | Blu chiaro |
| **F03** | **Career Path Tracker** | Mappa viva delle traiettorie degli alumni MBA Gateway, dentro le 4 OpCo del Gruppo Angelini Industries ed esterno. Auto-aggiornata dagli alumni stessi. | Verde scuro |
| **F04** | **Collaborative Position Paper** | Una volta l'anno la community drafta collettivamente una Position Paper pubblica su un tema strategico. Reviewer ed Editor co-firmano il documento finale. | Arancio scuro |

### 17.3 Paper Discussion Threads (interactive)

Layout 2 colonne: thread list sinistra + active thread destra.

**Thread list (4 thread):**

| ID | Paper | Thread title | Starter | Replies · last |
|---|---|---|---|---|
| t-001 (HOT) | AI tutoring vs peer learning · UCL-Angelini 2026 | Effetti contradditori del peer-learning nei plant manager senior | Prof. Giovanni Falconi · Bologna BS · Reviewer | 14 · 12 min fa |
| t-002 | Skill mismatching sud-Europa · Bologna-Angelini 2026 | Il second-mover learning regge anche fuori dalle grandi città? | Sophie Laurent · Bain · Alumni | 9 · 1h fa |
| t-003 (HOT) | Industry 4.0 skills · RWTH Aachen 2026 | Lean transformation: i KPI standard non bastano. Cosa misurate voi? | Daniel Okonkwo · Fameccanica · Contributor | 22 · 3h fa |
| t-004 | Adult learning analytics 2026 | Co-design sessions: come strutturarle senza farle diventare brainstorming | Prof. Aisha Patel · UCL · Editor | 7 · 6h fa |

**Active thread (t-001 default):**

- Paper title: *"AI tutoring vs peer learning: outcome a 6 mesi nei plant manager 50+"*
- Thread title: *"Effetti contradditori del peer-learning nei plant manager senior"*
- 14 risposte · 312 visualizzazioni
- Starter excerpt (Prof. Giovanni Falconi): *"La sezione 4.2 mostra che il peer-learning batte l'AI tutoring nel breve, ma la curva si inverte oltre i 9 mesi. Qualcuno ha replicato in contesti più piccoli (sotto i 30 partecipanti)?"*
- 3 commenti rendered:
  - **Dr. Henrik Olsen** · KU Leuven · Contributor · 1h fa: *"Sì, dataset KU Leuven 2025 (n=58, due plant Belgio): l'inversione c'è ma più morbida, e dipende molto dalla disciplina iniziale dell'AI tutor. Possiamo confrontare i prompt?"*
  - **Elena Marchetti** · Alumni MBA Gateway · Reader · 47 min fa: *"Lato Fater abbiamo testato un programma simile sul retail merchandising. Stessa curva ma più ripida. Vi giro la slide deck se utile."*
  - **Prof. Aisha Patel** · UCL Knowledge Lab · Editor · 12 min fa: *"Bene così. Aggiungerei la variabile 'sense of agency' del paper UCL-Angelini del 2024: spiega molta della variance dopo il mese 9."*
- Form di risposta: textarea + footer "Pubblichi come Reader · Angelini Pharma" + CTA `Pubblica risposta`. Le risposte dell'utente vengono renderizzate live come "Elena Pasquali · ora · Tu".

### 17.4 Career Path Tracker (interactive)

Header: `Career Path Tracker · Alumni MBA Gateway` · *"Le traiettorie dei borsisti dopo il programma."* · `8 alumni mappati`.

**Distribuzione OpCo (barre animate cliccabili come filtri):**

| OpCo | Conteggio | % |
|---|---|---|
| Pharma | 2/8 | 25% |
| Tech | 1/8 | 13% |
| Ventures | 1/8 | 13% |
| Fater | 2/8 | 25% |
| Esterno | 2/8 | 25% |

Filter chips: `Tutti · Pharma · Tech · Ventures · Fater · Esterno`.

**Alumni list (filtri + detail panel):**

| Nome | Cohort | Ruolo · Città | OpCo | Trajectory |
|---|---|---|---|---|
| **Elena Marchetti** (EM) | MBA Gateway 2024 | Senior Brand Manager · Pescara | Fater | *"Sono partita dal merchandising di linea, oggi guido un lancio in 9 paesi."* |
| **Daniel Okonkwo** (DO) | MBA Gateway 2024 | Operations Lead · Chieti | Tech | *"Lean transformation di una linea Fameccanica: KPI di waste a metà in 14 mesi."* |
| **Sebastian Müller** (SM) | MBA Gateway 2025 | Investment Analyst · Milano | Ventures | *"Due diligence biotech, prima posizione completa dopo lo stage Cross-OpCo."* |
| **Carlotta Bianchi** (CB) | MBA Gateway 2024 | Marketing Strategy · Pescara | Fater | *"Re-design del go-to-market per un sub-brand: dal pricing al canale farmacia."* |
| **Akira Tanaka** (AT) | MBA Gateway 2025 | R&D Strategy Associate · Roma | Pharma | *"Dal lab di chimica analitica al piano di sviluppo molecole 2027."* |
| **Sophie Laurent** (SL) | MBA Gateway 2024 | Senior Consultant · Bain · Parigi | Esterno | *"Pharma practice in Bain dopo lo stage in Angelini Pharma: il loop completo."* |
| **Federico Esposito** (FE) | MBA Gateway 2025 | Founder · NeuroAdapt · Napoli | Esterno | *"Startup di neuro-adaptive learning, primo round chiuso con Angelini Ventures."* |
| **Margherita De Luca** (MD) | MBA Gateway 2024 | HR Business Partner Cross-OpCo · Roma | Pharma | *"L&D dentro Pharma, ma con responsabilità trasversale sul talent flow Gruppo."* |

### 17.5 Position Paper (interactive)

Header: `Position Paper · in draft collettivo` · *"AI ethics in lifelong learning · 2027"* · `6 sezioni · 6 co-autori · pubblicazione prevista mag 2027`.

**Co-autori (6):**

- Prof. Aisha Patel · UCL Knowledge Lab · Editor (AP)
- Prof. Giovanni Falconi · Bologna BS · Reviewer (GF)
- Prof. Ling Chen · Beijing Normal · Reviewer (LC)
- Dr. Henrik Olsen · KU Leuven O2L · Contributor (HO)
- Dr. Maya Friedman · TUM EdTech · Contributor (MF)
- Federico Esposito · NeuroAdapt · Alumni · Contributor (FE)

**6 sezioni (indice + dettaglio sezione attiva):**

| # | Titolo | Excerpt | Commenti | Stato |
|---|---|---|---|---|
| 1 | **Premessa · perché parlarne adesso** | *"L'AI applicata alla pedagogia non è neutra: codifica scelte di valore che la formazione corporate spesso non rende esplicite."* | 8 | In revisione |
| 2 | **Principio 01 · Trasparenza del modello formativo** | *"Chi è esposto a un programma AI-assistito deve poter sapere cosa il modello fa e cosa non fa. Niente 'scatole nere' pedagogiche."* | 14 | In draft |
| 3 | **Principio 02 · Sense of agency del partecipante** | *"Lo studio UCL-Angelini 2024 indica che il sense of agency è il driver principale di adozione nei programmi over 45. Va protetto by design."* | 11 | In revisione |
| 4 | **Principio 03 · Adattività graduale, non sostitutiva** | *"L'AI può adattare il ritmo, il livello di astrazione, il formato. Non può sostituire il tutoring umano nei momenti di transizione."* | 6 | In draft |
| 5 | **Principio 04 · Auditabilità degli outcome** | *"Per ogni programma AI-assisted serve un audit semestrale degli outcome — non solo NPS, ma comportamento osservato a 6 mesi."* | 9 | In draft |
| 6 | **Conclusioni · cosa chiediamo all'industria** | *"I quattro principi possono diventare clausola standard nei contratti corporate-faculty. Una proposta di template aperta in chiusura."* | 3 | Bloccato |

Status pill colors: In revisione = verde · In draft = arancio · Bloccato = viola.

### 17.6 Tier silenziosi · "Quattro livelli silenziosi"

- Eyebrow: **`Quattro livelli silenziosi`**
- H3: *"La promozione misura la qualità dei contributi, non la quantità. Niente leaderboard, niente punteggi pubblici — solo riconoscimento del valore reale."*

4 sfere-pianeta scroll-driven (scala 0.85 → 1.35 al picco staggered):

| # | Tier | Criteria | Color |
|---|---|---|---|
| 01 | **Reader** (label "Tu sei qui") | Accesso completo a paper e thread. Iscrizione aperta a tutti i partner accademici e gli alumni MBA Gateway. | Blu chiaro `#005EB8` |
| 02 | **Contributor** | Almeno 3 commenti sostantivi su thread diversi negli ultimi 90 giorni. Promozione silenziosa. | Verde scuro `#007864` |
| 03 | **Reviewer** | Co-autore di almeno un commento riconosciuto dagli Editor come riferimento. Voce attiva sui paper in revisione. | Arancio chiaro `#F6BE00` |
| 04 | **Editor** | Su invito del Laboratorio editoriale. Co-firma la Position Paper, partecipa al Forum Casa Angelini. | Arancio scuro `#FF8200` |

### 17.7 CTA banner · "Una community piccola, prima. Poi più ampia, quando regge."

Pannello scuro gradient blu chiaro → blu istituzionale → ang-900.

- Eyebrow ocra-200: `Q1 2027`
- H2: *"Una community piccola, prima. **Poi più ampia, quando regge.**"*
- Body: *"La preview pubblica apre nel Q1 2027 con un primo cerchio di alumni e ricercatori partner. Lascia la tua manifestazione di interesse: nei mesi precedenti al lancio ti contattiamo per allineare l'invito al tuo profilo."*
- CTA ocra: `Entra in waitlist` → anchor `#waitlist`

### 17.8 FAQ (5 domande)

1. **Quando apre Engaged Network?** *"La preview pubblica apre nel Q1 2027, su invito ai partner accademici e agli alumni MBA Gateway. Apertura più ampia entro fine 2027, mantenendo la community piccola finché la qualità della discussione lo richiede."*
2. **Chi può iscriversi?** *"Alumni MBA Gateway (cohort 2024, 2025 e successivi) e ricercatori affiliati ai 14 atenei partner pre-validati. Gli Editor invitano nuovi partner accademici quando rilevante per i filoni di ricerca aperti."*
3. **Costa qualcosa partecipare?** *"No. Engaged Network è gratuito per la community. È un investimento di Angelini Academy per estendere il Forum oltre i tre giorni di Casa Angelini."*
4. **Come funziona la moderazione?** *"La moderazione è in mano agli Editor della community e al Laboratorio editoriale HeyAI. Niente algoritmi che filtrano: persone qualificate che leggono e decidono. Il tier Reviewer ha voce consultiva sui casi limite."*
5. **Perché si parte piccoli?** *"Perché la qualità della discussione si tiene solo se chi entra è già parte dell'ecosistema. La crescita arriva quando ci sono Editr sufficienti a moderare in modo intelligente — non prima."*

### 17.9 Waitlist form · "Quattro righe, niente di più."

- Eyebrow: **`Waitlist`**
- H2: *"Quattro righe, niente di più."*
- Body: *"Manifestazione di interesse — non è una candidatura. Ti contattiamo a fine 2026 per allineare l'invito al tuo profilo."*
- Form: nome + email + select profilo (`Alumni MBA Gateway · Ricercatore · ateneo partner pre-validato · Altro`) + textarea "Perché ti interessa Engaged Network · 2-3 righe"
- CTA ocra: `Invia manifestazione`
- Stato submitted: card scura *"Sei in waitlist, [Nome]. Ti scriviamo a [email] nel Q4 2026 con l'invito alla preview. La tua richiesta entra nel pool di valutazione Editor."* + bottone `Iscrivi un'altra persona` (auto-reset 8s).

### 17.10 Cross-links (3 callout finali)

| Box | Eyebrow | Link | Body |
|---|---|---|---|
| Sito pubblico | **Engaged Research →** | Engaged Research → | I paper completi open access che alimentano i thread. |
| Riservato Gruppo | **Angelini People →** | /angelini-people | Versione executive summary dei paper, in early access per i dipendenti. |
| Eventi | **Forum Casa Angelini →** | /eventi | L'evento fisico annuale di cui questa è l'estensione digitale. |

---

## 18. Angelini People `/angelini-people`

Accent: blu istituzionale `#003087`. Riservata · login mockup con email pre-fill `elena.pasquali@angelinigroup.it`. Newsletter nascosta. Auto-logout dopo 30s di sessione attiva (demo cliente). Ogni navigazione alla pagina parte da logged-out.

### 18.1 Hero (varia in base allo stato auth)

**Pre-login:**

- Eyebrow: **`Angelini People`** (soppresso)
- H1: *"Lo spazio dei dipendenti del **Gruppo Angelini**."*
- Intro: *"Una finestra editoriale e relazionale dedicata alle persone del Gruppo Angelini Industries: catalogo formativo con workflow di iscrizione, materiali post-corso riservati, spazi di community OpCo, comunicazione del Gruppo verso le sue persone, early access ai paper Engaged Research."*

**Post-login:**

- H1: *"Lo spazio dei dipendenti, **aperto**."*
- Intro: *"Sei dentro. Le cinque aree qui sotto sono il tuo punto di accesso al catalogo formativo, ai materiali riservati, alle community OpCo e ai messaggi del Gruppo."*

### 18.2 Pre-login · "Cosa trovi accedendo" (5 aree teaser)

| Area | Body | Accent |
|---|---|---|
| **Il tuo percorso formativo** | Dashboard personale — cosa hai fatto, cosa hai prenotato, cosa l'Academy ti suggerisce in base al ruolo e all'OpCo. | Blu chiaro |
| **Iscrizioni e candidature** | Workflow di iscrizione ai programmi formativi con approvazione manager e calendario compatibilità lavoro. | Arancio |
| **Materiali post-corso** | Slide non pubblicate, recording, paper di approfondimento, community riservata ai partecipanti della tua cohort. | Verde |
| **Comunità OpCo + Cross-OpCo** | Spazi di discussione interna organizzati per OpCo (Pharma, Tech, Ventures, Fater) + uno spazio cross-OpCo trasversale. | Viola |
| **Dal Gruppo** | Comunicazione corporate, riconoscimenti agli alumni, early access ai paper Engaged Research due settimane prima del go-live pubblico. | Rosso |

CTA dark centrato: `Accedi con email Angelini Group` → apre LoginModal.
Footnote: *"Riservato a dipendenti del Gruppo Angelini Industries (Pharma, Tech, Ventures, Fater) e alla HR Community."*

**LoginModal (pre-fill):**

- Badge ocra: `Riservato · Angelini Group`
- Title: *"Accedi ad Angelini People"*
- Body: *"Riconosciamo l'identità tramite email aziendale del Gruppo. Single sign-on Microsoft 365 per le persone già autenticate sui sistemi interni."*
- Email pre-fill: `elena.pasquali@angelinigroup.it`
- Password pre-fill: `••••••••`
- CTA: `Accedi`
- Help: *"Non riesci ad accedere? Scrivi a people@angeliniacademy.com o contatta HR del tuo OpCo."*

### 18.3 Post-login · Welcome bar

Sfondo scuro `bg-ang-900` con glow blu e arancio.

- Linea accent OpCo (blu Pharma)
- Eyebrow ocra-200: **`Accesso · Angelini Group`**
- H2: *"Ciao Elena, bentornata."*
- Sub: *"Senior Manager · Data & Analytics · Pharma · in Angelini dal 2021 · Roma"*

### 18.4 Area 01 · Personal Learning Record · "Il tuo percorso formativo."

Layout 2 colonne: timeline a sinistra + raccomandazioni AI a destra.

**Timeline ultimi 12 mesi (Mini3DSphere accanto a ogni step):**

| Data | Titolo | Format | Status |
|---|---|---|---|
| Nov 2026 | **Masterclass AI & Leadership · cohort 3** | 6 settimane · ibrido | prenotato (blu) |
| Set 2026 | **Forum Educational Casa Angelini** | 3 giorni · in presenza | completato (verde) |
| Mag-Lug 2026 | **Executive Program · Strategia Cross-OpCo** | 12 settimane · ibrido | completato (verde) |
| Feb 2026 | **Individual Intensive · Data storytelling** | 4 sessioni 1:1 | completato (verde) |

**Cosa l'Academy ti suggerisce (4 raccomandazioni AI con icona dedicata):**

| Titolo | Reason | Accent |
|---|---|---|
| **Masterclass · Decisioni in incertezza per leader Pharma** | In base al tuo percorso 2026 + ruolo Data & Analytics in Pharma. | Arancio |
| **Paper UCL-Angelini · Adult learning analytics 2026** | Disponibile in early access 2 settimane prima del go-live pubblico. | Blu chiaro |
| **Intercompany Mentoring · sponsor da Industrial (Fameccanica)** | Per chi cerca esposizione cross-OpCo prima di un eventuale step laterale. | Verde |
| **Forum Educational 2027 · invito early-bird** | Tre giorni Casa Angelini, posti riservati per dipendenti di profilo data-driven. | Viola |

### 18.5 Area 02 · Iscrizioni e candidature

Stream cards 3 colonne (stile Blog Home con gradient di intensità + numero watermark).

| Codice | Titolo | Audience · Durata | Descrizione | Status · Deadline | CTA |
|---|---|---|---|---|---|
| **MC · 2026.3** | **Masterclass AI & Leadership** (arancio) | Manager Pharma · Tech · Cross-OpCo · 6 settimane · ibrido (Roma + remoto) | Sei settimane di programma intensivo su come l'AI sta ridisegnando la decisione manageriale. Tre città, dodici case study, faculty cross UCL · IE · Angelini. | Aperto · 30 nov 2026 | `Candidati` |
| **EX · 2027.1** | **Executive Program · Strategia Cross-OpCo** (blu chiaro) | Direzione e middle management · trasversale 4 OpCo · 12 settimane · ibrido | Programma di alto livello sulla strategia integrata di Gruppo: Pharma, Tech, Ventures, Fater come un sistema. Faculty Casa Angelini + SDA Bocconi. | Aperto · 15 dic 2026 | `Candidati` |
| **IM · 2027.S1** | **Intercompany Mentoring** (verde) | Mid-career che cercano esposizione cross-OpCo · 6 mesi · 1 sessione mensile | Coppie mentor/mentee tra OpCo diverse. Pharma con Tech, Ventures con Fater. Sponsorship a livello direzione, calendario gestito da HR Gruppo. | Prossimamente | `In arrivo` (disabled) |

**ApplicationModal (su click `Candidati`):**

- Badge: `Iscrizione inviata` (verde check)
- Titolo programma + codice
- Body: *"La tua richiesta è entrata nel workflow HR. Riceverai aggiornamenti via email a **elena.pasquali@angelinigroup.it** a ogni step."*
- Workflow 4 step:
  1. **Iscrizione ricevuta** · completato · Conferma automatica via email. Il manager riceve notifica.
  2. **Approvazione manager · entro 3 giorni lavorativi** · in attesa · Verifica di compatibilità con gli obiettivi del semestre.
  3. **Verifica calendario · HR Gruppo** · prossimo · Compatibilità con i tuoi impegni e disponibilità della cohort.
  4. **Conferma posto in cohort** · prossimo · Comunicazione finale con dettagli logistici e materiali pre-corso.

### 18.6 Area 03 · Materiali post-corso · "Le tue masterclass."

2 card masterclass completate:

**Executive Program · Strategia Cross-OpCo · 2026** (Mag–Lug 2026 · cohort di 24 partecipanti · Community attiva):

- **Slide** · Sessione 8 · Decisioni in incertezza (non pubblico)
- **Recording** · Keynote Falconi · Skill mismatch 2027
- **Paper** · White paper interno · Cross-OpCo synergies
- Link: `Entra nella community della cohort →` (apre CommunityModal `Cross-OpCo`)

**Individual Intensive · Data storytelling** (Feb 2026 · cohort di 1 partecipante):

- **Worksheet** · Modello narrativo · 4 atti per executive briefing
- **Recording** · Sessione 3 · Audit di una presentazione reale

**MaterialModal preview (esempi):**

- *"Sessione 8 · Decisioni in incertezza"*: Slide deck · 42 slide · PDF · 18 MB · solo cohort. *"Slide deck interno della sessione 8 dell'Executive Program 2026. Coperti: framework Cynefin applicato a decisioni Pharma R&D, esercitazione su caso reale del lancio OTC su tre mercati EU, debrief sull'errore tipo I/II nel time-to-market. Non distribuito al di fuori della cohort — discrezione professionale richiesta."*
- *"Keynote Falconi · Skill mismatch 2027"*: Recording · 48 min · MP4 · trascrizione disponibile.
- *"White paper interno · Cross-OpCo synergies"*: Paper · 24 pagine · PDF · in inglese.
- *"Modello narrativo · 4 atti"*: Worksheet · 12 pagine · PDF interattivo.
- *"Sessione 3 · Audit live"*: Recording · 32 min · MP4.

Footer modal: *"Materiali interni · non condividere al di fuori della cohort"*.

### 18.7 Area 04 · Comunità OpCo + Cross-OpCo · "Comunità del Gruppo."

5 spazi (4 OpCo + 1 cross):

| Spazio | Scope · membri | Thread recente (autore) |
|---|---|---|
| **Pharma talks** (blu chiaro) | Discussioni interne · Angelini Pharma · 412 membri | *"Cosa stiamo imparando sull'introduzione di MES nelle linee da 800 persone"* (Akira Tanaka) |
| **Tech talks** (arancio) | Discussioni interne · Fameccanica · 168 membri | *"Operations 4.0: dove la lean transformation si è inceppata e come abbiamo ripreso"* (Daniel Okonkwo) |
| **Ventures talks** (verde) | Discussioni interne · Angelini Ventures · 47 membri | *"Tre criteri di scoring biotech che abbiamo riscritto dopo il deal Q3"* (Sebastian Müller) |
| **Fater talks** (rosso) | Discussioni interne · Fater · joint venture · 254 membri | *"Canale farmacia: cosa funziona oggi che 18 mesi fa avremmo escluso"* (Carlotta Bianchi) |
| **Cross-OpCo** (viola, badge `Cross`) | Spazio trasversale · alumni MBA Gateway + Executive Program · 388 membri | *"Il talento si specializza dopo aver visto. Tre storie di rotation cambiate in corsa."* (Margherita De Luca) |

**CommunityModal (su click spazio)** mostra header con accent + scope + membri + lista thread recenti per quello spazio. Esempi thread per Pharma talks:

- *"Cosa stiamo imparando sull'introduzione di MES nelle linee da 800 persone"* · Akira Tanaka · 14 risposte · 47 min fa
- *"Audit di un programma di re-skilling sui plant manager senior"* · Margherita De Luca · 8 risposte · 2h fa
- *"Compliance EMA per OTC di nuova generazione: domande aperte"* · Akira Tanaka · 12 risposte · 5h fa

Footer modal: *"Per partecipare apri un thread o rispondi a uno esistente. La moderazione è in mano agli HR del Gruppo."*

### 18.8 Area 05 · Dal Gruppo · "Comunicazione corporate."

3 messaggi card (expandibili `Leggi tutto / Riduci`):

| Tipo | Titolo | Body | Signature · Date |
|---|---|---|---|
| **CEO** (blu istituzionale) | **Perché abbiamo voluto Angelini Academy come società autonoma** | *"Trasformare la formazione in qualcosa di nostro, non di esterno: una scelta che dice come pensiamo le persone del Gruppo. Vi racconto i quattro passaggi che ci hanno portati a fondare Academy come SRL, e cosa cambia nei prossimi mesi."* | CEO Angelini Industries · 12 ott 2026 · town hall |
| **Early access** (blu chiaro) | **Paper UCL-Angelini · Adult learning analytics 2026 (pre-print)** | *"Disponibile per voi due settimane prima del go-live pubblico su /engaged-research. Implicazione operativa: i programmi per over 45 vanno ridisegnati su unità più piccole (< 60 minuti) e con feedback applicativo entro 48 ore."* | Engaged Research Lab · Casa Angelini · 04 nov 2026 · disponibile fino al 18 nov |
| **Riconoscimento** (arancio) | **Tre alumni MBA Gateway entrati in posizioni manageriali nelle OpCo** | *"Elena Marchetti (Senior Brand Manager Fater), Akira Tanaka (R&D Strategy Pharma) e Margherita De Luca (HR Cross-OpCo) hanno completato il loro primo anno di posizione. Storie complete dentro Founder Stories — qui un saluto del Gruppo."* | HR Community Cross-OpCo · 28 ott 2026 |

### 18.9 Cross-links (3 callout finali)

| Box | Body |
|---|---|
| **Engaged Network →** (community esterna) | Versione pubblica con thread di discussione tra ricercatori e alumni. |
| **Engaged Research →** (sito pubblico) | I paper completi open access. Tu li vedi 2 settimane prima qui dentro. |
| **MBA Gateway →** (sito pubblico) | Da dove arrivano gli alumni che oggi sono colleghi nelle 4 OpCo. |

---

## 19. Componenti trasversali e modali

### 19.1 Newsletter intent-driven (`Newsletter.tsx`)

Componente che cambia automaticamente la voce in base alla route. 5 varianti, scelte da `pickVariant(pathname)`:

| Route | Variant | Badge | Eyebrow |
|---|---|---|---|
| `/percorsi/talent`, `/mba-gateway`, `/founder-stories` | **talent** | `IL PONTE · TALENTI #07` | `NEWSLETTER · GIOVANE TALENTO` |
| `/percorsi/researcher`, `/engaged-research` | **researcher** | `IL PONTE · RICERCA #07` | `NEWSLETTER · ACCADEMIA` |
| `/percorsi/hr-business` | **business** | `IL PONTE · BUSINESS #07` | `NEWSLETTER · HR & BUSINESS` |
| `/percorsi/media`, `/press` | **media** | `IL PONTE · STAMPA #07` | `NEWSLETTER · MEDIA & ISTITUZIONI` |
| Tutto il resto (default) | **default** | `IL PONTE · NEWSLETTER #07` | `RESTA AGGIORNATO` |

**Copy per variant:**

| Variant | Title | Body | Facts | CTA submit | CTA done |
|---|---|---|---|---|---|
| **talent** | *"La mail per chi non si **accontenta del primo lavoro**."* | Bandi MBA Gateway, Founder Stories in anteprima, posizioni aperte nelle quattro OpCo. Cadenza bisettimanale, zero spam. | +1.200 talenti iscritti · bandi in anteprima · storie di alumni | Iscrivimi alla newsletter talenti | Iscritto ✓ Ti aggiorniamo sui prossimi bandi. |
| **researcher** | *"Una mail per chi vuole tradurre **la teoria in programmi**."* | Paper Engaged Research, call for collaboration, eventi accademici. Per chi pubblica e per chi vuole leggere ricerca italiana applicata. | +680 accademici iscritti · call collaborazione · paper Engaged Research | Iscrivimi alla newsletter ricerca | Iscritto ✓ Riceverai i prossimi paper Engaged Research. |
| **business** | *"Una mail per chi disegna **programmi L&D che funzionano**."* | Case study Corporate Learning, AI applicata alla formazione, metriche che misurano comportamento, non solo soddisfazione. | +420 HR & L&D iscritti · case study Corporate Learning · paper executive | Iscrivimi alla newsletter business | Iscritto ✓ Ti mandiamo il prossimo executive paper. |
| **media** | *"Una mail per chi cerca **storie italiane verificabili**."* | Comunicati stampa in anticipo, dati Engaged Research, anteprime del Bilancio Engaged Research, contatti diretti per interviste. | +180 giornalisti · press release in anticipo · accesso esperti | Iscrivimi alla newsletter stampa | Iscritto ✓ Riceverai i prossimi press release. |
| **default** | *"Una mail, ogni due settimane. **Solo cose che leggeremmo anche noi.**"* | Una lettura selezionata da chi costruisce l'Academy: un paper, un talento, una conversazione in corso. Niente recap, niente filler. | +2.300 lettori · cadenza bisettimanale · zero spam, un click per uscire | Iscrivimi alla newsletter | Iscritto ✓ Ci sentiamo presto. |

**Layout** (sfondo gradient ang-700 → ang-900, light beam radiale ocra in alto):

- Sinistra: badge ocra + h2 + body + 3 facts con dot ocra
- Destra: card translucida con badge eyebrow, input email + CTA ocra
- Su submit: badge testo cambia, link sotto `Vedi il flusso email che parte ora →` apre EmailAutomationModal
- Auto-reset stato submitted dopo 8s (demo cliente ripetibile)
- Footer: *"Iscrivendoti accetti la nostra privacy policy. Trattiamo solo il tuo indirizzo per inviarti la newsletter."*

### 19.2 EmailAutomationModal

Anteprima illustrativa del flusso email post-iscrizione. 2 tab:

- **La tua prima email** — preview rendering della welcome email
- **I prossimi 7 giorni** — timeline degli step automatici

**Welcome email per variant `talent` (esempio):**

- Subject: *"Benvenuto. Tre porte ti aspettano."*
- Preheader: *"Le candidature MBA Gateway, le Founder Stories e le posizioni aperte — ogni due settimane."*
- Body: *"Grazie per l'iscrizione. Da oggi riceverai 'Il ponte · Talenti': una mail editoriale ogni due settimane con bandi MBA Gateway, Founder Stories in anteprima e posizioni aperte nelle quattro OpCo del gruppo Angelini. Niente filler. Solo opportunità pre-validate da chi costruisce l'Academy ogni giorno. La prossima edizione esce tra due settimane. Nel frattempo, se vuoi capire quale dei tre percorsi è il tuo — abbiamo costruito uno strumento che lo fa in tre minuti."*
- CTA: `Trova il tuo percorso`

**Timeline talent (4 step):**

- **Oggi** · Email di benvenuto · Subject "Benvenuto. Tre porte ti aspettano." + CTA Career Path Navigator.
- **Giorno 3** · Founder Story in anteprima · Sofia · MBA Gateway 2025. La sua storia in 4 capitoli, video player + transcript.
- **Giorno 7** · Prossimo evento · Roadshow Università più vicino a te + link di iscrizione.
- **Giorno 14** · Prima edizione regolare · "Il ponte · Talenti #08" — bandi MBA, Founder Story, posizioni aperte.

(Le altre 4 varianti seguono lo stesso schema con email + timeline custom — researcher su paper, business su case study, media su press release, default editoriale.)

### 19.3 PaperToLinkedIn (`PaperToLinkedIn.tsx`)

Feature wow illustrativa: click su un paper di ricerca → Galileo genera (mock) un post LinkedIn pronto.

**Flow:**

1. Click sul paper → modal si apre
2. Galileo "sta analizzando il paper..." (typewriter ~1.5s)
3. Reveal: visual social card (foto AI + tint brand + accent typography) + 3 varianti copy
4. Tab: `Professional · Conversational · Storytelling`
5. Bottoni: `Copia testo` · `Scarica immagine`

**Variant copy default (pre-canned con `[TITOLO]` placeholder):**

- **📊 Professional**: *"📊 Pubblicato il nuovo paper Engaged Research di Angelini Academy. [TITOLO] Metodologia mista su un campione rappresentativo del settore, con implicazioni operative per Corporate Learning, programmi di re-skilling e disegno didattico. Il paper è disponibile in open access. Link in primo commento. #EngagedResearch #CorporateLearning #AngeliniAcademy"*
- **🤔 Conversational**: *"🤔 Cosa succede quando la ricerca pedagogica incontra la produzione reale? Il nostro nuovo paper [TITOLO] prova a rispondere — con dati, casi concreti e raccomandazioni operative per chi disegna programmi di formazione corporate. Il risultato è una mappa pragmatica per decisioni che spesso si prendono 'a intuito'. Open access sul nostro sito. #PedagogiaApplicata #Engage"*
- **🌉 Storytelling**: *"🌉 'Costruiamo ponti in educazione.' Non è uno slogan. È quello che abbiamo fatto con questo paper: abbiamo preso una domanda che ci facevamo da mesi (e che ci facevate anche voi nei commenti) e l'abbiamo trasformata in uno studio peer-reviewed. Il titolo è [TITOLO]. Il PDF è in primo commento. Il prossimo paper? Decidetelo voi nei commenti. #AngeliniAcademy #EngagedResearch"*

**Visual setup per tag paper:**

- `Skill mismatching` → foto `engaged-research-lab.jpg` + tint blu istituzionale + accent giallo
- `AI applicata pedagogia` → foto `team-programs.jpg` + tint viola + accent arancio
- `Lifelong over 50` → foto `case-pharma.jpg` + tint verde + accent giallo

### 19.4 PreviewModal (`PreviewModal.tsx`)

Modale generica per "tasti morti" del mockup. 2 varianti:

- **`preview`** — contenuto preview reale per paper, press release, asset
- **`coming-soon`** — placeholder onesto "Disponibile pre-lancio · gennaio 2027"

Tutti i campi opzionali (`eyebrow`, `body`, `bullets`, `meta`, `ctaLabel`). Backdrop blur, Esc chiude, lock scroll body.

### 19.5 Career Path Navigator (`CareerPathNavigator.tsx`)

Quiz illustrativo · 5 domande pesate verso `mba` / `grad` / `direct`. Vive in `/percorsi/talent#career-path` ed è linkato da `/mba-gateway`.

**Le 5 domande:**

1. **Qual è il tuo background formativo?** (Scegli quello più vicino al tuo percorso.)
   - STEM (scienze, ingegneria, medicina)
   - Business, economia, management
   - Humanities, scienze sociali, design
   - Sto ancora finendo la laurea

2. **Quanta esperienza lavorativa hai (anche stage)?**
   - Nessuna o solo stage curricolari
   - Tra 1 e 2 anni
   - Tra 3 e 5 anni
   - Oltre 5 anni

3. **Qual è la cosa che cerchi di più adesso?** (Una sola risposta — quella che ti rappresenta meglio oggi.)
   - Un network internazionale forte
   - Un'azienda che mi formi sul mestiere
   - Una posizione concreta, subito operativa
   - Strumenti per fondare una mia cosa

4. **Sei disposto a vivere fuori dall'Italia?**
   - Sì, anche per più di un anno
   - Solo per scambi brevi (3-6 mesi)
   - Preferisco restare in Italia

5. **Dove ti vedi tra 5 anni?** (Risposta a istinto, non a calcolo.)
   - In una posizione manageriale di P&L
   - Come specialista riconosciuto in un dominio
   - A fondare una mia azienda o un fund
   - Non ancora deciso — voglio opzionalità

**Risultati**: H3 *"Sulla base delle tue risposte, il programma più adatto è [Top Match]."*  + Body *"Indicatore di fit calcolato sui cinque fattori che pesano di più nella selezione. Non è una valutazione formale — è una bussola."* + 3 card con % di fit + badge `Top match`. Footnote: *"Risultato indicativo basato sui pattern delle ultime tre coorti MBA Gateway. Galileo sarà disponibile in modalità conversazionale completa da gen 2027."*

**Programmi:**

- **MBA Gateway** (arancio): *"10 borsisti l'anno. MBA full-time a Madrid + stage 3-6 mesi in Angelini."* → CTA `Esplora il MBA Gateway`
- **Graduate Program** (blu chiaro): *"24 mesi nelle 4 OpCo del gruppo con rotation e mentorship dedicata."* → CTA `Vedi il Graduate Program`
- **Posizioni Dirette** (verde): *"Lateral entry mid-level. Per chi ha già esperienza e cerca scarto."* → CTA `Vedi le posizioni aperte`

### 19.6 Galileo (3 capability complete)

Galileo è un singolo agente con 3 personalità nel sito (più 1 inline nella Reading Room):

1. **Galileo · Career Path Navigator** (pre-iscrizione, su `/percorsi/talent#career-path`) — vedi §19.5
2. **Galileo · Tutor** (post-iscrizione, su `/mba-gateway`) — accompagna borsista durante masterclass, MBA, stage Cross-OpCo. Esempio chat in §8.3
3. **Galileo · Research Engine** (per ricercatori, su `/engaged-research`) — simulazioni parallele, hypothesis generation, pattern discovery. Dettaglio in §7.2
4. **Galileo · Agente di ricerca** (Reading Room, su `/engaged-research`) — chatbot search + 4 prompt suggeriti con risposta typewriter + paper refs. Dettaglio in §7.1

### 19.7 Cross-OpCo Tracker (`CrossOpCoTracker.tsx`)

Componente scroll-pinned 3D che vive in `/mba-gateway` (§8.2).

**Setup:**

- 4 sfere-pianeta 3D allineate orizzontalmente su una rail (`LEFT_POSITIONS = ['15%', '38.33%', '61.67%', '85%']`)
- La rail si "accende" progressivamente (trail ocra `rgba(255,130,0,0.85)` con boxShadow glow) man mano che lo scroll avanza
- 3 segmenti `RailSegment` tra le 4 sfere, scaleX da 0 a 1 con clamp
- La sfera centrata è ingrandita (+40%), halo amplificato; le altre sono semi-opache

**OpCo data (4 step):**

| # | OpCo | Color · Glow | Skills | Project |
|---|---|---|---|---|
| 01 | **Pharma** | Blu chiaro · rgba(0,94,184,0.60) | Compliance regolamentare · Scientific leadership · R&D operations | Piloting di un OTC di nuova generazione su tre mercati EU. |
| 02 | **Tech** | Arancio · rgba(255,130,0,0.60) | Operations 4.0 · Manufacturing leadership · Lean transformation | Re-design di una linea produttiva su KPI di waste reduction. |
| 03 | **Ventures** | Verde · rgba(0,120,100,0.60) | Scouting biotech · Due diligence · Investment thesis | Scouting di una startup biotech con valutazione preliminare. |
| 04 | **Fater** | Rosso · rgba(228,0,43,0.60) | Brand strategy · Marketing 2.0 · Customer insight | Launch di un nuovo prodotto consumer in canale farmacia. |

Tutti gli step durano `fino a 6 settimane`.

### 19.8 Mini3DSphere · AnimatedNumber · GalileoIcon · MagneticButton · BrandPattern · BrandMark

Componenti utility riusati in più pagine:

- **Mini3DSphere**: sfera 3D piccola con gradient radiale, specular highlight, terminator shadow + halo glow. Usata in Network Pulse, Career Path Tracker, Tier Progression, timeline learning.
- **AnimatedNumber**: counter `0 → value` con easing all'ingresso in viewport. Tabular-nums.
- **GalileoIcon**: marchio Galileo (logo agente AI). Stati `idle / active` con halo pulsante.
- **MagneticButton**: bottone con effetto magnetico al cursore (offset basato su distanza). 2 varianti: `primary` (sfondo ocra-400) e `ghost` (bordo translucido). Usato in Hero.
- **BrandPattern**: pattern Abbraccio o Marchio del brand book Angelini. Varianti `density: fitta | ampia` e `opacity` configurabile.
- **BrandMark**: logo Angelini Academy ufficiale (lockup completo o solo simbolo). Usato in Footer.

### 19.9 FloatingLibrary

Componente di "libreria fluttuante" non più usato attivamente (sostituito dal Reading Room di §7.1).

---

## 20. Sistema linguistico (IT/EN)

Implementazione leggera in `lib/i18n.tsx`. Persistenza in `localStorage` con chiave `angelini-academy.lang`. Default IT. Switch toggle `IT · EN` nel header. Banner informativo (vedi §1.3) compare quando l'utente passa a EN, dichiarando che la traduzione è parziale.

**Stringhe tradotte (chiavi annidate `hero.*`, `pillars.*`, `partners.*`, `people.*`, `events.*`, `blog.*`, `newsletter_default.*`, `footer.*`, `header.*`, `banner.*`):**

| Chiave | IT | EN |
|---|---|---|
| `hero.headline_word_0..3` | Building / bridges / in / education | Building / bridges / in / education |
| `hero.subtitle` | Costruiamo ponti tra competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera. | We build bridges between the skills demanded and offered, between school and work, between talent and career. |
| `hero.ctaPrimary` | Scopri il MBA Gateway | Discover the MBA Gateway |
| `hero.ctaGhost` | Esplora la ricerca | Explore the research |
| `hero.scroll` | SCROLL | SCROLL |
| `pillars.eyebrow` | COSA FACCIAMO | WHAT WE DO |
| `pillars.heading_part1` | Quattro pilastri attorno a un nucleo, | Four pillars around one nucleus, |
| `pillars.heading_part2` | una sola promessa. | a single promise. |
| `pillars.nucleus_label` | NUCLEO · 00 | NUCLEUS · 00 |
| `pillars.nucleus_explore` | Esplora il nucleo | Explore the nucleus |
| `partners.eyebrow` | LA RETE · 8 ISTITUZIONI · 4 PAESI | THE NETWORK · 8 INSTITUTIONS · 4 COUNTRIES |
| `partners.heading_part1` | Non parliamo di formazione da soli. | We don't talk about education on our own. |
| `partners.heading_part2` | Le costruiamo insieme. | We build it together. |
| `partners.programs_label` | programmi co-progettati nel 2025 | programs co-designed in 2025 |
| `partners.all_link` | Vedi tutte le collaborazioni | See all collaborations |
| `people.eyebrow` | CHI ATTRAVERSA IL PONTE | WHO CROSSES THE BRIDGE |
| `people.heading_part1` | Volti reali, percorsi reali. | Real faces, real paths. |
| `people.heading_part2` | Non claim astratti. | Not abstract claims. |
| `people.body` | Studenti, ricercatori, manager. Per ogni dirigente in foto, almeno tre volti di chi sta imparando — è la regola che ci siamo dati. | Students, researchers, managers. For every executive on camera, at least three faces of someone learning — that's the rule we set ourselves. |
| `events.eyebrow` | CALENDARIO 2026 | 2026 CALENDAR |
| `events.heading_part1` | Dove ci troverete | Where to find us |
| `events.heading_part2` | nei prossimi mesi. | in the months ahead. |
| `events.scroll_hint` | Scorri orizzontalmente per vedere tutto il calendario | Scroll horizontally to see the full calendar |
| `blog.eyebrow` | EDITORIALE · TRE STREAM TEMATICI | EDITORIAL · THREE THEMATIC STREAMS |
| `blog.heading_part1` | Tre conversazioni | Three conversations |
| `blog.heading_part2` | che attraversano tutto. | that run across everything. |
| `blog.body` | Strategia, ricerca, programmi. Ogni articolo dentro uno stream tematico coerente. L'hover apre il primo articolo in evidenza. | Strategy, research, programs. Every article inside a coherent thematic stream. Hover opens the featured article. |
| `newsletter_default.body` | Una lettura selezionata da chi costruisce l'Academy: un paper, un talento, una conversazione in corso. Niente recap, niente filler. | A curated read from those building the Academy: a paper, a talent, a conversation in progress. No recap, no filler. |
| `newsletter_default.cta` | Iscrivimi alla newsletter | Subscribe to the newsletter |
| `footer.cols.academy` | ACADEMY | ACADEMY |
| `footer.cols.percorsi` | PERCORSI | PATHS |
| `footer.cols.explore` | ESPLORA | EXPLORE |
| `footer.cols.group` | ANGELINI INDUSTRIES | ANGELINI INDUSTRIES |
| `footer.sede_label` | Casa Angelini | Casa Angelini |
| `footer.copyright` | © 2026 Angelini Academy — società di Angelini Industries | © 2026 Angelini Academy — a company of Angelini Industries |
| `footer.legal.*` | Privacy / Cookie / Note legali / Whistleblowing / Sitemap | Privacy / Cookies / Legal / Whistleblowing / Sitemap |
| `header.chi_siamo` | Chi siamo | About |
| `header.percorsi` | Percorsi | Paths |
| `header.academy` | L'Academy | The Academy |
| `header.eventi` | Eventi | Events |
| `header.blog` | Blog | Blog |
| `header.press` | Press | Press |
| `header.contatti` | Contatti | Contact |
| `header.cta` | Candidati al MBA Gateway | Apply to the MBA Gateway |
| `banner.en_partial` | (vuota in IT) | EN version in build · selected sections translated. The full English copy ships pre-launch, January 2027. |

> **Strategia scelta (opzione B)**: traduzione delle stringhe più visibili (hero, eyebrow, CTA primarie, footer, header). Il body copy delle pagine interne resta in italiano con il banner di disclosure quando l'utente passa a EN. Per produzione: migrazione a `react-i18next` con namespace per pagina.

---

## 21. Note di design e brand

### 21.1 Palette (CSS variables)

- **Blu istituzionale** `#003087` (Angelini Pharma, headings forti, accent dashboard/lab/people)
- **Blu chiaro accademico** `#005EB8` (researcher, engaged research, contatti, engaged network)
- **Verde scuro business** `#007864` (HR & Business, verde-dark)
- **Rosso brand** `#E4002B` (Fater, press, media, blog, rosso-dark)
- **Arancio scuro / primary accent** `#FF8200` (ocra-400, hero, talent, MBA Gateway, eventi, founder stories)
- **Arancio chiaro / Reviewer tier** `#F6BE00` (ocra-300, filo-giallo `#F4C842`)
- **Viola Cross-OpCo** `#840B55`
- **Ang-50 → Ang-900** (scala blu navy del brand)
- **Filo verde** `#5B9C7A → #225435`
- **Filo rosso** `#E4002B → #8E2A1D`
- **Filo giallo** `#F4C842 → #C99315`

### 21.2 Tipografia

- **Display font** (sans, weight 300-700): tracking-tight, usato per eyebrow uppercase (con `tracking-[0.4em]`), label, body strutturale
- **Editorial-italic** (serif italic, weight light): tutti i titoli H1/H2 grandi, citazioni, numeri large
- **Editorial-regular** (serif tondo, weight light): titoli intermedi (H3, card titles)
- **Editorial-bold-italic**: usato puntualmente nei pre-hero "Chi sei, e da dove parti?"

Smoke test font in archivio (`Smoke test font - Variante B/C.html`) — typography swap già processato (vedi `Prompt Claude Code - Typography swap`).

### 21.3 Pattern di motion

- **Entry transitions**: `initial={{ opacity: 0, y: 20-30 }}` + `whileInView` + `transition: { duration: 0.6-0.9, ease: [0.22, 1, 0.36, 1] }` (curva editoriale standard del sito)
- **Stagger**: `delay: index * 0.08-0.15` per card grid
- **3D sphere standard**: gradient `radial-gradient(circle at 30% 28%, rgba(255,255,255,0.X) 0%, [COLOR] 22-32%, [COLOR]cc 55-65%, rgba(2,26,48,1) 100%)` + boxShadow halo + inset shadows + specular top-left + terminator bottom-right
- **Cursor glow**: `radial-gradient(360px circle at [x] [y], [accent]X, transparent 60%)` sui Pillar cards
- **Magnetic offset** (MagneticButton): spring damping su mouse position
- **Marquee**: animazioni CSS `marquee-l 48s` e `marquee-r 62s` lineari infinite
- **Scroll-pinned**: `useScroll` + `useTransform` per Cross-OpCo Tracker (rail accensione), Tier Progression (scale 0.85 → 1.35 al picco), Reading Room paper cards (3D tilt + scale + opacity)
- **Typewriter**: `useTypewriter(text, speed=9-10)` per Galileo summaries e Galileo chat responses

### 21.4 Anti-redundancy del PageShell

Il `PageShell` ha un'euristica `showEyebrow` che sopprime automaticamente l'eyebrow quando ripeterebbe letteralmente l'ultimo nodo del breadcrumb. Esempio: `breadcrumb=[Home, Chi siamo]` + `eyebrow="Chi siamo"` → eyebrow nascosto. Pagine con eyebrow editoriale aggiuntivo (es. "MBA Gateway · Programma di riferimento", "Lab · Metafora 3D") non vengono toccate perché il testo è diverso.

### 21.5 Pattern Abbraccio · Marchio (brand book)

- `BrandPattern variant="abbraccio" density="fitta" opacity={0.04}` → trama istituzionale di sfondo (Footer, Percorsi Researcher §4.2)
- `BrandPattern variant="marchio" density="ampia" opacity={0.06}` → marchio in negativo (MBA Gateway calcolatore borsa §8.6)

### 21.6 Decisioni live di design (cronologia commit-by-commit)

Note ricorrenti dai commenti nel codice:

- **17/5/2026**: bridge image rimossa dalla LandingMesh (feedback cliente: *"preferivo la versione prima di mettere il bridge"*). Concept "Building bridges" delegato al payoff.
- **17/5/2026**: Founder Story highlight (`/percorsi/talent`) — sfondo cambiato da giallo a bianco neutro.
- **17/5/2026**: Career Path Tracker (Engaged Network) — foto stock sostituita alle sfere 3D per detail panel.
- **18/5/2026**: Hero (Home) — rimossa Bridge Constellation (sfere + arco scroll-driven), headline su una sola riga + font più piccolo, layout più compatto, più respiro ai lati.
- **18/5/2026**: People Home — ordine richiesto cliente W-M-W (Sofia → Marco → Elena).
- **18/5/2026**: Events — rimossa deco grid di sfondo trasparente (appesantiva lo slider).
- **18/5/2026**: PercorsiHrBusiness · 4 settori — accent diverso per ogni settore (niente più ripetizione visiva).
- **18/5/2026**: EngagedResearch metodologia — 3 colonne con accent blu istituzionale → blu chiaro → verde (gradazione, no più monocromia).
- **18/5/2026**: Engaged Network · TierProgression — scroll-driven scale 0.85 → 1.35 (palle che si ingrandiscono scorrendo).
- **18/5/2026**: Engaged Network · 4 features — accent per-box differenziato.
- **18/5/2026**: ChiSiamo Vision section — `bg-ang-50` omogeneo (era spezzato).
- **18/5/2026**: GalileoTutor — versione sobria (icona grande + halo + CTA `Vedi un esempio`), modale espandibile sotto.
- **18/5/2026**: Newsletter, Contatti, AngeliniPeople — auto-reset stato submitted dopo 8s per demo cliente ripetibile.
- **18/5/2026**: AngeliniPeople — auto-logout dopo 30s di sessione attiva (riapre la landing pulita).

### 21.7 Asset foto presenti nel mockup

Cartella `/photos/`:

- `founder-sofia.jpg`, `founder-marco.jpg`, `founder-elena.jpg` (ritratti People + FounderStories)
- `team-director.jpg`, `team-research-director.jpg`, `team-communications.jpg`, `team-programs.jpg` (team Chi Siamo + alumni Engaged Network)
- `case-pharma.jpg` (caso di studio HR & Business)
- `engaged-research-lab.jpg` (research backdrop)

Cartella `/personas/`: 4 PNG full-character trasparenti (talent, researcher, hr, media).

Cartella `/brand/`: `icon-positive.png` (icona marchio per header).

### 21.8 Convenzioni d'uso

- **CTA imperativo + oggetto specifico** (mai "Approfondisci" generico). Esempi: `Esplora le masterclass`, `Vedi i programmi corporate`, `Candidati al Forum 2026`, `Scopri il programma MBA`.
- **Persona tagline uniforme** "Cerca X" (PersonaSelect).
- **Voce Sage** per descrittive di metodologia (Engaged Research, contributors silenziosi).
- **Voce Magician** per stories prima persona, payoff, Galileo Tutor.
- **MAI** "Eye Cookies" rinominato (regola CLAUDE.md), MAI "Operation Transformation" suddiviso.

---

> **Fine documento.** Tutto il copy citato è verificato letteralmente sul codice del mockup al commit corrente (data lettura 18/5/2026). Cambiamenti successivi al mockup richiedono refresh di questo file — vedi §15 di CLAUDE.md per la regola di propagazione.




