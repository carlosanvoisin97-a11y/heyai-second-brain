---
type: brief
status: active
priority: P1
client: Angelini Academy
created: 2026-05-15
updated: 2026-05-15
aliases: [Mockup Brief, Mockup Brief Sito Angelini, Brief Mockup v2]
projects: [_Angelini Academy]
audience: Claude Code (AI builder operante sul repo /Users/carlosanvoisin/code/angelini-academy/)
scope: evoluzione landing one-pager → sito multi-pagina mockup-ready per pitch 31/5/2026
supersedes_partial: Master Brief Sito Angelini Academy (stack assunto Next.js — sbagliato; resta valido come riserva specs tecniche dettagliate)
---

# Angelini Academy — Mockup Brief Sito (v2, stack reale)

> Brief operativo per evolvere la landing one-pager già esistente in `/Users/carlosanvoisin/code/angelini-academy/` in un mockup navigabile multi-pagina pronto per il pitch del 31/5/2026. Destinatario: Claude Code in sessione sul repo. Per la strategia di posizionamento → [[Strategia Website 2026]]. Per la cornice del pitch → [[Framework Pitch Finale]]. Per voce e toni → [[Analisi Narrativa]] + [[Angelini Academy — Briefing Personaggi Landing Page|Briefing Personaggi Landing Page]]. Per la sitemap originale → [[Wireframe e Architettura]].

## 0. Scope e premesse

Scope ristretto e dichiarato. Questo è un **mockup navigabile**, non un sito production-ready. L'obiettivo unico è far entrare Caterina Caboni nella demo del 31/5/2026 e mostrarle un sito vero — non un Figma, non uno screenshot, non una slide. Tutto ciò che non serve a quell'obiettivo è fuori scope per questa fase.

Punto di partenza: la landing one-pager esistente in `/Users/carlosanvoisin/code/angelini-academy/`. Si parte da lì in evoluzione, non da zero. La home attuale (PersonaSelect → Hero → Pillars → People → Events → Blog → Partners → Newsletter → Footer) è la spina dorsale del mockup e va preservata quasi integralmente.

Stack confermato: Vite + React 19 + TypeScript + Tailwind CSS 4 (inline `@theme` in `src/index.css`, no `tailwind.config`) + Framer Motion 12 + Lucide React + Radix UI (slot). Per il passaggio a multi-pagina si aggiunge soltanto `react-router-dom` (v6 o v7 compatibile con React 19). **Nessuna migrazione a Next.js** — il Master Brief precedente la assumeva e va patchato se mai riutilizzato per la fase production post-pitch.

Fuori scope di questo brief, ma da non perdere di vista per dopo: schema markup JSON-LD, audit WCAG 2.1 AA puntuale, performance budget, copy finale rifinito dal cliente, asset reali (logo SVG ufficiale, foto faculty reali, video Founder Stories). Tutto questo o entra in una fase production post-pitch, o resta presidiato nei doc dedicati ([[SEO Specs Sito Nuovo]], [[Accessibility Specs Sito Nuovo Angelini Academy]], [[Master Brief Sito Angelini Academy]]).

Phase 2 prevista — non in questo brief: aggiunta delle 5 funzionalità AI di [[Strategia Website 2026]] §5.3 in forma illustrativa/demo (NO backend reale). Hook in §6. Spec separata dopo approvazione della base.

## 1. Audit della landing attuale — cosa tenere, cosa correggere

Sezione per sezione, sulla home attuale (`src/App.tsx`).

**Header** (`src/components/Header.tsx`). Tenere: sticky behavior + transizione cromatica scroll-driven (chiaro su Hero scuro → scuro su sfondo chiaro), logo Angelini Academy SVG bicromatico, toggle lingua IT/EN, CTA primaria "Candidati al MBA Gateway". Correggere: la voce di menu `L'Academy` con dropdown verso i 4 pilastri è coerente con la home one-pager ma diventa ridondante in versione multi-pagina. Sostituire le anchor links del dropdown con link verso le nuove pagine dedicate (vedi §2). Aggiungere voce primaria `Percorsi` (con dropdown a 4 voci: Talent / Researcher / HR & business / Media), perché le 4 personas sono la prima decisione architetturale del sito ([[Strategia Website 2026]] §3).

**PersonaSelect** (`src/components/PersonaSelect.tsx`). Tenere: l'intero carousel 3D, il pattern "Chi sei, e da dove parti?", le 4 personas con illustrazioni full-character su sfondo dark blue mesh, accenti colore per persona (ocra/blu/verde/rosso), interazione tastiera frecce. Resta una delle componenti più forti della home e va conservata pixel-by-pixel. Correggere: gli `href` di ciascuna persona oggi puntano ad anchor della one-pager (`#mba-gateway`, `#engaged-research`, `#corporate-learning`, `#contatti`). Vanno ricondotti agli `href` delle 4 nuove pagine `/percorsi/<slug>` (vedi §2). Il `description` resta valido ma diventa "teaser" della landing del cluster, non riassunto totale del percorso. **Mismatch personas vs Strategia** — vedi nota dedicata sotto.

**Hero** (`src/components/Hero.tsx`). Tenere: tutto. Headline "Building bridges in education" con highlight italico su `bridges`, sottotitolo italiano "Costruiamo ponti tra competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera.", mesh gradient cursor-driven con sfera ocra che insegue il mouse, 2 CTA "Scopri il MBA Gateway" + "Esplora la ricerca", scroll indicator. È la formulazione che il cliente riconosce come propria (payoff brief slide 8 — [[Analisi Narrativa]] §3 "Decisione homepage hero") e non va sostituita per il pitch. Correggere: niente.

**Pillars** (`src/components/Pillars.tsx`). Tenere: la costellazione con sfera 3D Engaged Research al centro (nucleo `00`) + 4 pilastri orbitanti (01 Corporate Learning, 02 Innovazione tecnica e manageriale, 03 Educational Think Tanks, 04 MBA Gateway). Animazioni 3D tilt cursor-driven, micro-stats per pilastro, linee di connessione SVG. Pattern grafico unico, da preservare. Correggere: in versione multi-pagina, i 4 pilastri non sono più anchor della home ma porte d'ingresso a 4 pagine pilastro (vedi §2). I `facts` per pilastro restano validi come "executive summary" sulla home; il body lungo passa nella pagina dedicata. Aggiungere micro-callout "Approfondisci →" che diventa link a pagina, non scroll ad anchor.

**People** (`src/components/People.tsx`). Tenere: layout team con 3 foto in `public/people/`. Correggere: nella home multi-pagina, People resta come teaser leggero (3 figure spoke: Marco Morbidelli + 2 altre) con link "Tutto il team →" verso la pagina `/chi-siamo` dove il team completo trova spazio. Lì serve aggiungere [[Verificare]] (Carlo) la lista nomi e ruoli effettivamente comunicabili al cliente.

**Events / Blog / Partners / Newsletter / Footer**. Tenere come teaser sulla home. Correggere: Events e Blog diventano *teaser* (3 ultime entries) con CTA "Tutti gli eventi →" / "Tutti gli articoli →" che però in fase mockup atterrano su pagine `/eventi` e `/blog` con layout pre-popolato di placeholder. Partners resta sulla home come logo wall (LBS, IMD, Stockholm SE, IE, UCL, Royal College of Art, SDA Bocconi, LUISS). Newsletter signup va reso intent-driven (vedi §5). Footer: aggiungere cross-link Angelini Industries (OS9 della Strategia) se non già presente — leggere il file `src/components/Footer.tsx` per verificare.

**Match personas landing ↔ Strategia (audit esplicito)**. Le 4 personas della landing matchano i 4 percorsi di [[Strategia Website 2026]] §3 con 2 disallineamenti di naming da correggere:

- Persona "HR & L&D Director" (landing) ↔ "HR/L&D buyer di azienda terza" (Strategia, percorso `HR & business community`). Il naming landing è troppo stretto: la Strategia parla esplicitamente di `HR & business community` includendo anche head hunter, corporate academies, executive interessati a Corporate Learning. Rinaming proposto: `HR & Business` (più ampio). Tagline aggiornata: "Cerca alternative ai cataloghi standard delle business school" → preservare, è già corretta.
- Persona "Media & Istituzioni" (landing) ↔ "Media / community / istituzioni" (Strategia). Manca il connotato "community" (associazioni di categoria, stakeholder advocacy). Naming OK così com'è (compromesso ragionevole), ma sulla pagina dedicata `/percorsi/media` allargare il framing a "media, istituzioni e advocacy".

Persona "Giovane Talento" e "Ricercatore Accademico" → naming già coerente con la Strategia. Nessuna correzione.

**Allineamento posizionamento (audit di sostanza)**. La landing attuale non riflette ancora il posizionamento "fondazione culturale-scientifica europea con propensione mecenatistica" che [[Framework Pitch Finale]] mette al centro. Manca: (a) un riferimento esplicito alla **gratuità** dei programmi cardine (MBA Gateway con borsa totale per ISEE-ISPE < 50k €) come segnale mecenatistico — oggi appare solo in micro-stat su Pillars; (b) una dichiarazione di **non-vendita** sull'asse Engaged Research (research lab, non corporate academy); (c) ancoraggio al **gruppo Angelini Industries** (cross-link in footer, breve menzione in `/chi-siamo`). Sono leve narrative non secondarie per il pitch e vanno introdotte nelle pagine nuove di §3, più che riscrivere la home.

## 2. Sitemap target — da one-pager a multi-pagina

Albero pagine del mockup. Tutto navigabile via `react-router-dom`.

```
/                          Home (asciugata, vedi §1)
/percorsi/talent           Persona 1 — Giovane talento (cluster Talent Hub)
/percorsi/researcher       Persona 2 — Ricercatore / accademico (cluster Engaged Research)
/percorsi/hr-business      Persona 3 — HR & business community
/percorsi/media            Persona 4 — Media, istituzioni, advocacy
/engaged-research          Hub editoriale Engaged Research (OS2 Strategia)
/mba-gateway               Landing dedicata MBA Gateway (OS5)
/founder-stories           Founder Stories (OS4)
/press                     Press room + Bilancio Engaged Research (OS8)
/chi-siamo                 Cornice istituzionale + team + manifesto
/contatti                  Form contatto + recapiti + press contact
```

Totale: 10 pagine nuove oltre alla home. Pagine Events e Blog restano in scope come "shell" pre-popolata (lista placeholder, no detail page per evento o articolo singolo in fase mockup — `/eventi/:slug` e `/blog/:slug` sono fuori scope qui, in fase production sì).

**Anchor links della home attuale** (`#engaged-research`, `#corporate-learning`, `#innovazione`, `#think-tanks`, `#mba-gateway`): scelta consigliata = ognuno di questi 4 pilastri diventa una pagina dedicata. Le sezioni dei pilastri sulla home restano come *teaser* (titolo + body breve + micro-stats + link "Approfondisci"), il contenuto lungo si trasferisce nelle pagine. Motivazione: il pitch del 31/5 si gioca anche sulla **densità** delle pagine pilastro (non solo sulla home), perché Caterina valuta la profondità del posizionamento, non solo la copertina. Una home one-pager troppo carica disperde; una home asciutta + pagine pilastro robuste convince di più.

Per `/engaged-research` e `/mba-gateway` due note specifiche: sono i due cardini del posizionamento (rispettivamente OS2 e OS5 della Strategia). Vanno trattati come pagine *flagship*, con la densità editoriale più alta del sito. Le altre pagine pilastro (Corporate Learning, Innovazione, Think Tanks) sono importanti ma di secondo livello.

## 3. Per pagina nuova — spec snella

Per ciascuna delle 10 pagine: obiettivo, sezioni, messaggio chiave, CTA primaria, componenti riusabili dalla landing attuale, componenti nuovi da creare, eventuale copy direzionale.

### 3.1 `/percorsi/talent` — Giovane talento

**Obiettivo**: pre-validare il giovane talento sui 3 percorsi disponibili (MBA Gateway, graduate program, posizioni dirette) e farlo entrare nel funnel `/mba-gateway` o nel quiz Career Path.
**Sezioni**: (1) Hero verticale con copy "Il talento non aspetta" + foto/illustrazione persona — riusa pattern Hero; (2) `OptionsTriad`: 3 card MBA Gateway / Graduate Program / Posizioni Dirette — nuovo componente; (3) Founder Story in evidenza (1 video card + transcript snippet) — nuovo componente `FounderStoryCard`; (4) Cross-OpCo Tracker teaser (vedi §5) — link a `/engaged-research` o a sezione dedicata; (5) CTA finale "Esplora il MBA Gateway".
**Messaggio chiave**: "Tre percorsi reali per chi non vuole accontentarsi di un solo lavoro."
**CTA primaria**: `Esplora il MBA Gateway`.
**Riuso**: Hero pattern, MagneticButton, palette ang-/ocra-.
**Nuovo**: `OptionsTriad`, `FounderStoryCard`.

### 3.2 `/percorsi/researcher` — Ricercatore / accademico

**Obiettivo**: convincere il ricercatore che Angelini Academy è partner di ricerca (non committente che compra ore d'aula) + farlo entrare nel funnel Engaged Research Lab.
**Sezioni**: (1) Hero con copy "Engaged Research, non sponsored content"; (2) `PaperGrid` con 3-4 paper recenti (titolo + autore + abstract 2 righe + link PDF) — nuovo componente; (3) Partner accademici (logo wall filtrato: LBS, UCL, Royal College of Art, LUISS, SDA Bocconi); (4) "Come collaboriamo" — 3-step process (proposta → review → co-pubblicazione); (5) Form proposta collaborazione (placeholder, no backend).
**Messaggio chiave**: "Un canale italiano e continentale per pubblicare ricerca che entra nei programmi industriali."
**CTA primaria**: `Proponi una collaborazione`.
**Riuso**: palette ang-/ocra-, Partners pattern.
**Nuovo**: `PaperGrid`, `PaperCard`, `CollaborationForm`.

### 3.3 `/percorsi/hr-business` — HR & business community

**Obiettivo**: soft seeding 2026 — far scaricare paper executive summary + iscrivere alla newsletter business. **Non** form vendita pushy (apertura commerciale formale prevista 2027-2028 — vedi [[Strategia Website 2026]] §3 Persona 3).
**Sezioni**: (1) Hero con copy "L&D oltre il catalogo"; (2) Settori coperti (Pharma, Biotech, Manufacturing, Financial Services) — grid 4 card semplici; (3) Programmi Corporate Learning teaser (3 card masterclass) — nuovo `MasterclassCard`; (4) Caso studio (1 case study placeholder); (5) Newsletter business signup (variant intent-driven).
**Messaggio chiave**: "Programmi Corporate Learning con AI dimostrata, non promessa."
**CTA primaria**: `Scarica il paper executive summary`.
**Riuso**: Newsletter component (variant business), palette.
**Nuovo**: `MasterclassCard`, `CaseStudyCard`, `IndustryGrid`.

### 3.4 `/percorsi/media` — Media, istituzioni, advocacy

**Obiettivo**: dare a giornalisti, policy maker e advocacy figure tutto ciò che serve per scrivere una storia su Angelini Academy in 5 minuti.
**Sezioni**: (1) Hero con copy "Una storia italiana di corporate learning"; (2) Press kit download (PDF placeholder + foto HD); (3) Comunicati stampa recenti (3 placeholder); (4) Contatti stampa (nome + email); (5) Bilancio Engaged Research (placeholder, live gen 2027 — etichetta "In arrivo").
**Messaggio chiave**: "Cartella stampa, foto, dati, contatti — tutto qui."
**CTA primaria**: `Contatta l'ufficio stampa`.
**Riuso**: palette ang-/ink, Footer pattern.
**Nuovo**: `PressKitCard`, `PressReleaseCard`.

### 3.5 `/engaged-research` — Hub editoriale (flagship)

**Obiettivo**: dichiarare che Engaged Research è il nucleo del posizionamento, non un add-on. Hub editoriale denso con paper, tassonomia 3-verticali, partner, metodologia.
**Sezioni**: (1) Hero con copy "Studiamo come le persone imparano per costruire come dovranno imparare domani" (cit. Pillars nucleus); (2) Tassonomia 3-verticali (Lifelong over 50 / Skills mismatching / AI applicata pedagogia) — `TaxonomyTabs`; (3) `PaperGrid` con 6-8 paper, filtrabili per verticale; (4) Metodologia (3-step: domanda di ricerca → laboratorio → pubblicazione + applicazione in programmi); (5) Cattedra LUISS spotlight; (6) Forum annuale teaser (link a `/eventi`); (7) AI-1 Chatbot Engaged Research placeholder (vedi §6) — opzionale per Phase 2.
**Messaggio chiave**: "Ricerca peer-reviewed che entra nei programmi industriali. Engaged, non sponsored."
**CTA primaria**: `Sfoglia i paper` + secondaria `Proponi una collaborazione`.
**Riuso**: Pillars nucleus pattern (sfera 3D come elemento decorativo header), palette ang-/ocra-.
**Nuovo**: `TaxonomyTabs`, `PaperGrid`, `PaperCard`, `MethodologySteps`.

### 3.6 `/mba-gateway` — Landing MBA Gateway (flagship)

**Obiettivo**: convertire il giovane talento in expression of interest. Pagina con timeline esplicita, criteri eleggibilità, calcolatore borsa (statico in fase mockup), form leggero.
**Sezioni**: (1) Hero con copy "10 borsisti. 1 MBA a Madrid. 6 mesi in Angelini." (riformulazione dei micro-stats Pillars); (2) Timeline FEB 2026 → TBD 2027 (`TimelineHorizontal` — nuovo); (3) Criteri eleggibilità (4-5 bullet); (4) Calcolatore borsa (statico, input ISEE/ISPE → output "borsa totale" o "tassa €20k — circa 25% del valore di mercato") — `ScholarshipCalculator` placeholder; (5) Cross-OpCo Tracker (vedi §5) — qui o su `/percorsi/talent`, scelta del builder; (6) Form expression of interest (no candidatura formale che resta su IE).
**Messaggio chiave**: "Il talento non aspetta. Noi lo accompagniamo — fino a Madrid e oltre."
**CTA primaria**: `Esprimi interesse`.
**Riuso**: palette ang-/ocra-, MagneticButton.
**Nuovo**: `TimelineHorizontal`, `ScholarshipCalculator`, `EOIForm`, `CrossOpCoTracker` (vedi §5).

### 3.7 `/founder-stories` — Storie di chi è passato dal programma

**Obiettivo**: dare prova sociale alta con storie individuali di borsisti, alumni, partecipanti Hackathon.
**Sezioni**: (1) Hero breve "Storie di chi ha attraversato i ponti"; (2) Carousel verticale full-screen scroll-jacking (vedi §5 idea) — `StoriesScroll` nuovo; (3) Filtri (per OpCo / per anno / per percorso); (4) Newsletter signup (variant talent).
**Messaggio chiave**: "Tre anni dopo, ecco dove sono finiti."
**CTA primaria**: `Esplora il MBA Gateway` (in chiusura).
**Riuso**: palette, Newsletter component.
**Nuovo**: `StoriesScroll`, `FounderStoryCard` (riusata da `/percorsi/talent`).

### 3.8 `/press` — Press room

**Obiettivo**: vetrina istituzionale per media. Coincide funzionalmente con `/percorsi/media` ma con focus su asset scaricabili.
**Sezioni**: (1) Hero "Press room"; (2) Press kit download (logo SVG, foto HD, brand guidelines snippet); (3) Comunicati stampa archive (lista placeholder con 6-8 entries); (4) Bilancio Engaged Research (placeholder, "In arrivo gen 2027"); (5) Contatti stampa.
**Messaggio chiave**: "Tutto quello che serve per scrivere di noi."
**CTA primaria**: `Scarica il press kit`.
**Riuso**: pattern di `/percorsi/media`.
**Nuovo**: nulla (riusa componenti `/percorsi/media`).

**Nota Carlo**: `/press` e `/percorsi/media` hanno sovrapposizione 70%. Scelta consigliata: tenere entrambe, ma `/press` come pagina "asset-heavy" (download), `/percorsi/media` come pagina "storia-heavy" (perché Angelini Academy è una storia da raccontare). Se vuoi semplificare il mockup, valuta di tenere solo `/percorsi/media` e linkare il press kit dal footer. Decisione tua.

### 3.9 `/chi-siamo` — Cornice istituzionale

**Obiettivo**: contesto istituzionale (Angelini Industries, mission, team, partner accademici).
**Sezioni**: (1) Hero con copy posizionamento "Una fondazione culturale-scientifica europea con propensione mecenatistica" (riformulazione direzionale, da validare); (2) Manifesto / valori (3-4 paragrafi); (3) Team completo (foto + bio breve) — riusa `People` espanso; (4) Partner accademici (logo wall completo); (5) Cross-link Angelini Industries (footer rinforzato — OS9).
**Messaggio chiave**: "Una propensione mecenatistica messa in pratica."
**CTA primaria**: `Esplora l'Engaged Research`.
**Riuso**: People component (espanso), Partners pattern.
**Nuovo**: `ManifestoBlock` (eventualmente), `OpCoCrossLink`.

### 3.10 `/contatti` — Form contatto

**Obiettivo**: punto di atterraggio per chi non si riconosce in uno dei 4 percorsi.
**Sezioni**: (1) Hero breve "Parliamo"; (2) Form contatto (nome / email / azienda / motivo / messaggio) — `ContactForm`; (3) Recapiti (sede + telefono + email generale + press); (4) Mappa Casa Angelini (placeholder).
**Messaggio chiave**: "Per tutto il resto."
**CTA primaria**: `Invia il messaggio`.
**Riuso**: palette, Newsletter pattern (form).
**Nuovo**: `ContactForm`, `LocationMap` (placeholder).

## 4. Note di coerenza stilistica con la landing esistente

La landing attuale è già un asset stilistico forte. Le pagine nuove ereditano disciplina, non identità nuova.

**Palette**. Usare solo i token già definiti in `src/index.css` (`--color-ang-{50..900}`, `--color-ocra-{50..600}`, `--color-ink`, `--color-filo-{giallo,rosso,verde}`). Non introdurre nuovi colori. Accenti per persona già fissati in `PersonaSelect.tsx` (talent #E89B2A, researcher #7BACD8, hr #5DA989, media #E0635A) — usarli come *accent secondario* sulle rispettive pagine `/percorsi/*` per coerenza visiva tra carousel home e landing dedicata.

**Tipografia**. Fraunces (display) per titoli, headlines, accenti italico; Manrope (sans) per body, micro-copy, CTA. Niente font nuovi. Mantenere il pattern italic + highlight su 1-2 parole chiave per headline (vedi Hero "bridges"). Sui titoli pagina pilastro replicare il pattern Hero ma in modalità più contenuta (no mesh gradient cursor-driven su ogni pagina — troppo overload).

**Pattern animation**. Tre pattern dominanti già stabiliti, da replicare con disciplina:
- **Mesh gradient cursor-driven** (Hero, PersonaSelect): solo su pagine flagship `/`, `/mba-gateway`, `/engaged-research`. Mai su pagine secondarie.
- **3D tilt hover** (Pillars, PersonaCard): card di tutte le pagine nuove possono usarlo, ma con disciplina (solo dove serve dare profondità — paper card, masterclass card, founder story card).
- **Staggered fade-in** (`whileInView` Framer Motion): pattern universale per qualsiasi sezione che entra in viewport.

**Header / Footer**. Header sticky con transizione cromatica scroll-driven resta. Aggiungere breadcrumb subordinati sulle pagine `/percorsi/*` (es. `Home / Percorsi / Giovane talento`) per orientamento utente. Footer: aggiungere blocco cross-link Angelini Industries (link a Pharma, Fameccanica, Fater, Ventures — anche in placeholder `#` per fase mockup), perché OS9 della Strategia lo prevede.

## 5. Cinque idee creative "wow" — coerenti, alto impatto, bassa rinuncia

Tutte e 5 sfruttano asset già esistenti (palette, tipografia, pattern Framer Motion) e si integrano senza overhaul tecnologico. Ordinate per priorità sul pitch.

**1. Cross-OpCo Tracker** (su `/percorsi/talent` o `/mba-gateway`, OS3 Strategia)
Visualizzazione 3D scroll-driven che racconta il journey rotation del Gateway scholar attraverso le 4 OpCo (Pharma → Industrial Tech → Consumer → Ventures). Ogni OpCo è un "pianeta" — riuso del pattern sphere del nucleus Pillars in dimensioni ridotte — collegato da archi animati. Al passaggio scroll, lo scholar si "muove" da pianeta a pianeta, ognuno espone (in callout) skill acquisite, durata, esempio progetto.
*Perché stupisce*: nessuno dei 10 player [[Scan Siti Web Comparable]] lo fa. Pattern unico, coerente con la sphere già esistente, racconta visivamente la USP "Cross-OpCo" che è uno dei punti forti del MBA Gateway.
*Difficoltà*: media — riutilizza pattern sphere ma serve scroll-jacking controllato.
*Bloccante per pitch*: nice-to-have alto. Se manca, si nota; se c'è, è il "wow moment" della demo.

**2. PersonaSelect peek preview** (su `/`)
Estensione della componente PersonaSelect già esistente: oltre al click sulla persona centrale, hover prolungato (>1s) mostra micro-anteprima della landing del percorso — una "lente d'ingrandimento" che svela in 200x300px un'anteprima della pagina destinazione. Riduce attrito al click.
*Perché stupisce*: estende un pattern già forte invece di crearne uno nuovo. Sensazione di "sito vivo", non statico.
*Difficoltà*: bassa — è un overlay con animazione opacity + scale.
*Bloccante per pitch*: nice-to-have.

**3. Founder Stories scroll-jacking** (su `/founder-stories`)
Carousel verticale full-screen con scroll-jacking: ogni storia occupa il viewport intero, parallax a 3 layer (ritratto Founder + sfondo testurizzato + testo storia), transizione fluida da una storia alla successiva. Pattern stile fondazione / longform editoriale (riferimento: nytimes.com longform, the-pudding.cool).
*Perché stupisce*: registra il sito come "spazio editoriale" non "brochure". Differenzia dal pattern corporate paginated.
*Difficoltà*: media — scroll-jacking è delicato per UX (rischio di "intrappolare" l'utente). Va testato bene.
*Bloccante per pitch*: nice-to-have. Alternativa più sicura: layout magazine standard con animazioni in-view.

**4. Engaged Research Lab — "biblioteca galleggiante"** (su `/engaged-research`)
I paper della tassonomia (3 verticali) sono visualizzati come "carte galleggianti" che orbita attorno al placeholder del chatbot AI-1 (anche solo come UI shell in fase mockup, vedi §6). Drag-to-rearrange, click su paper → preview PDF. Pattern simile alle stelle in una costellazione, coerente con Pillars constellation.
*Perché stupisce*: il chatbot AI come centro gravitazionale della pagina ricerca "vende" la dimensione AI senza implementarla davvero. Coerente con la sphere nucleus.
*Difficoltà*: media-alta — drag-and-drop con momentum richiede tuning Framer Motion.
*Bloccante per pitch*: nice-to-have alto se Phase 2 (AI Layer §6) è in scope per il pitch.

**5. Newsletter intent-driven** (su tutte le pagine)
La componente Newsletter già esistente diventa contestuale: variant "researcher" se l'utente è su `/engaged-research` o `/percorsi/researcher`, variant "business" su `/percorsi/hr-business`, variant "talent" su `/percorsi/talent` e `/founder-stories`. Stessa componente, copy diversa per percorso. Aumenta intent conversion senza moltiplicare componenti.
*Perché stupisce*: dettaglio di rifinitura che segnala "il sito sa dove sei". Piccolo wow di disciplina più che di spettacolo.
*Difficoltà*: bassa — switch su `useLocation()` di react-router.
*Bloccante per pitch*: nice-to-have basso, ma molto alto rapporto valore/sforzo.

**Eventuale easter egg footer**: timeline interattiva heritage Angelini (date famiglia, milestones aziendali) — bonus se tempo, non in scope core.

## 6. Phase 2 — AI Layer illustrativo (hook)

Posizionamento: **dopo** approvazione della base del sito multi-pagina, in una fase successiva (potenzialmente pre-pitch se tempo, o post-pitch in stretching scope), si aggiungono mockup illustrative delle 5 funzionalità AI di [[Strategia Website 2026]] §5.3. Sono UI placeholder, **non funzionalità reali** — nessun backend AI, nessuna chiamata LLM, nessun retrieval. Lo scopo è dimostrare al cliente "cosa potrebbe fare" il sito quando l'AI Layer sarà implementato.

Mapping su sito:
- **AI-1 Engaged Research Chatbot** → su `/engaged-research`. UI placeholder con input box + suggested questions + finta risposta hard-coded che cita 1-2 paper esistenti. Disclaimer "Demo — feature in arrivo".
- **AI-2 Career Path Navigator** → su `/percorsi/talent` o `/mba-gateway`. Quiz conversazionale 5 step (UI shell, no logica), output fittizio "MBA Gateway 78% fit".
- **AI-3 Lab Translator** → uso interno team editoriale HeyAI, **NON sul sito pubblico**. Skip.
- **AI-4 Scouting Helper Ventures** → su `/engaged-research` (sotto-set ricercatori con idea biotech/medtech) o su `/chi-siamo`. Form intelligente che guida sottomissione proposta Ventures. UI placeholder.
- **AI-5 Editorial Workbench** → uso interno team editoriale HeyAI, **NON sul sito pubblico**. Skip.

Quindi sul sito pubblico vivono 3 demo AI: AI-1, AI-2, AI-4. AI-3 e AI-5 restano tool interni del team di sviluppo HeyAI per la gestione editoriale.

Spec dettagliata di queste demo arriverà in brief separato dopo che la base del sito è approvata da Carlo. Per ora basta predisporre le pagine con uno **slot dimensionato** (placeholder visivo) dove queste demo entreranno.

## 7. Pipeline operativa per Carlo

Step ordinati per portare il brief a esecuzione.

1. **Carlo valida questo brief** — review e correzioni in chat con Claude (vault), eventuali integrazioni sui mismatch personas (§1).
2. **Carlo passa il brief a Claude Code** — apertura sessione su `/Users/carlosanvoisin/code/angelini-academy/`, allegando questo file come context.
3. **Claude Code setup** — installa `react-router-dom`, ristruttura `App.tsx` da single-page a `<BrowserRouter>` con `<Routes>`, scaffolding delle 10 pagine nuove (boilerplate vuoto con layout shared Header+Footer).
4. **Claude Code audit fixes home** — implementa correzioni §1 (anchor → router links su PersonaSelect e Pillars, rinaming `HR & L&D Director` → `HR & Business`, breadcrumb sulle pagine `/percorsi/*`, voce menu `Percorsi` con dropdown).
5. **Claude Code pagine** — implementa le 10 pagine seguendo §3 (sezioni, componenti riusabili, componenti nuovi). Copy direzionale dal brief, no copy finale.
6. **Carlo review intermedia** — naviga il mockup, valuta navigation flow, coherence stilistica, eventuali correzioni copy. Round di feedback.
7. **Claude Code idee wow §5** — implementa Cross-OpCo Tracker (priorità 1) e Newsletter intent-driven (priorità 5, alto valore/sforzo). Le altre 3 idee solo se tempo.
8. **Carlo review finale** — pre-pitch checklist. Validazione finale.
9. **Pitch 31/5** — mockup live navigabile dal browser durante la presentazione a Caterina Caboni.
10. **Phase 2 (post-pitch o pre-pitch se tempo)** — AI Layer demo §6, in brief separato.

**Raccomandazione operativa critica per Carlo**: prima di passare il brief a Claude Code, decidere esplicitamente sul mismatch persona "HR & L&D Director" → "HR & Business" (§1). Se cambi il nome della persona nella landing attuale, cambi anche il `slug` della pagina `/percorsi/hr-business`. Decisione minima ma fondamentale per coerenza naming e SEO futuro. Tutto il resto può essere iterato durante l'esecuzione.

## 8. Riferimenti incrociati

- **Strategia**: [[Strategia Website 2026]] — fonte autoritativa per le 4 personas, le 9 OS (Opportunità Strategiche), le 5 funzionalità AI Layer
- **Cornice pitch**: [[Framework Pitch Finale]] — posizionamento "fondazione culturale-scientifica europea con propensione mecenatistica"
- **Voce & toni**: [[Analisi Narrativa]] — archetipi Sage + Magician, claim alternativi homepage, hooks per i 3 fili rossi
- **Personas dettaglio**: [[Angelini Academy — Briefing Personaggi Landing Page|Briefing Personaggi Landing Page]]
- **Sitemap originale**: [[Wireframe e Architettura]] — utile per verifica completezza pagine
- **Master Brief tech** (riserva per fase production post-pitch, stack Next.js sbagliato — da patchare se mai riutilizzato): [[Master Brief Sito Angelini Academy]]
- **SEO + Accessibility** (fase post-pitch): [[SEO Specs Sito Nuovo]] + [[Accessibility Specs Sito Nuovo Angelini Academy]]
- **Codebase**: `/Users/carlosanvoisin/code/angelini-academy/`
- **Scheda progetto**: [[_Angelini Academy|Angelini Academy]]

---

*Brief v2 — 15/5/2026. Sostituisce parzialmente [[Master Brief Sito Angelini Academy]] per la fase mockup pre-pitch. Stack reale Vite/React/Tailwind 4/Framer Motion confermato. Phase 2 AI Layer rinviata a brief separato post-approvazione base.*
