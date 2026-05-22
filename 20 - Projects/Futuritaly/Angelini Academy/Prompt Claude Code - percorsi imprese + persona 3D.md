---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione su `/Users/carlosanvoisin/code/angelini-academy/`) per il prompt n.1 · generatore immagini 3D (Midjourney v6 / DALL-E / SDXL / Veo equivalent) per il prompt n.2
purpose: due prompt operativi self-contained per (1) creare la nuova pagina /percorsi/imprese come 5° percorso utente cluster 7 Imprese filiera & capability partners (Elena v.012) + aggiunta 5ª persona PersonaSelect + routing + dropdown header · (2) generare l'immagine 3D del 5° personaggio coerente con le 4 personas esistenti (stile European Institutional Graphic Novel translated to 3D, palette navy + ivory + viola accent #6B2C91, pose 3/4 upward, setting manufacturing/industrial control room).
created: 2026-05-19
updated: 2026-05-19
status: ready-to-paste
source_call: trascrizione `2026-05-19 - Trascrizione Call FuturItaly+HeyAI - Allineamento Proposta Sito.docx` (3:25-5:12) + doc target `Analisi cluster utenti sito v.012 - Elena Chiti FuturItaly.docx` cluster 7
related: "[[_Angelini Academy]] · [[Mockup Sito - Struttura e Copy Completo]] · [[Pre-call Elena 18-5 — Strategia Angelini Academy]] · [[Prompt Claude Code - Modifiche post-call 19-5]] · [[Prompt Claude Code - Patch HR Business cluster 3]] · [[Angelini Academy — Briefing Personaggi Landing Page]]"
---

# Prompt Claude Code + Prompt immagine 3D — /percorsi/imprese (5° percorso + persona)

> Due prompt indipendenti. Il primo è per Claude Code (crea la pagina + integra PersonaSelect + routing + header dropdown). Il secondo è per il generatore immagini 3D che produce `imprese.png` da posizionare in `public/personas/imprese.png` (l'asset richiesto dal componente PersonaSelect per il 5° avatar). Vanno eseguiti in qualsiasi ordine — il prompt Claude Code assume che l'immagine esista al path corretto, se al momento del paste non esiste viene comunque renderizzato un placeholder e poi sostituito al volo.

## Decisioni acquisite (per memoria)

- **Naming pagina** = "Imprese & Partner di filiera" (plain, breadcrumb + header dropdown + label)
- **Eyebrow hero** = "Industry Learning Ecosystem" (naming retorico Elena v.012)
- **Accent color** = viola istituzionale `#6B2C91` (libero nella palette brand book — gli altri 4 percorsi usano `#FF8200`, `#005EB8`, `#007864`, `#E4002B`)
- **Persona PersonaSelect 5ª carta** = donna Innovation Director 40-50 anni settore manufacturing/automation (chiude pattern F-M-F-M-F dopo riordino 19/5)
- **Naming persona** = "Anna" (placeholder, modificabile lato Carlo se preferisce nome diverso prima del paste)
- **Cluster servito** = cluster 7 Elena v.012 "Imprese della filiera & capability partners" (NON cluster 3 HR&Business, NON cluster 5 startup edTech)
- **Funzioni dichiarate Elena 19/5 verbatim**: (a) co-design dei corsi sui fabbisogni reali del settore, (b) placement dei talenti formati

---

## PROMPT N.1 — per Claude Code

```
Ciao. Nuovo round: creazione del 5° percorso utente /percorsi/imprese. Cluster servito = "Imprese della filiera & capability partners" (cluster 7 del documento target Elena Chiti v.012). Differenziale netto vs il percorso /percorsi/hr-business (cluster 3 "Corporate HR & L&D decision makers"): l'impresa partner NON compra programmi, CO-PROGETTA i corsi sui propri fabbisogni e ASSUME i talenti formati. È un partner di ecosistema, non un cliente.

5 azioni mirate sul codebase. Procedi sezione per sezione, mantieni tutto il resto invariato. Nessuna modifica all'import header in altri file, nessuna nuova lib, nessun npm install.

═══════════════════════════════════════
1. NUOVA PAGINA — src/pages/PercorsiImprese.tsx
═══════════════════════════════════════

Crea il file src/pages/PercorsiImprese.tsx replicando lo scheletro di src/pages/PercorsiHrBusiness.tsx (PageShell + section bg-white/bg-ang-50 alternate + max-w-6xl + motion fade-in-y + ring ang-200/60 + rounded-3xl). Accent ACCENT='#6B2C91' (viola istituzionale).

Sequenza di 7 section nella pagina:

— PageShell hero
  eyebrow="Industry Learning Ecosystem"
  title=<>Co-progettiamo le competenze <span italic ang-600>che vi mancano</span>. Vi prepariamo i talenti che assumerete.</>
  intro=<>L'Academy lavora con le imprese della filiera come partner di ecosistema, non come fornitore di catalogo. Insieme co-progettiamo programmi formativi mirati ai vostri fabbisogni di competenze; insieme costruiamo il ponte tra educazione e lavoro — perché i talenti formati nei nostri percorsi possano entrare nelle vostre organizzazioni con una preparazione che oggi il mercato non sviluppa.</>
  breadcrumb=[{ label: 'Home', to: '/' }, { label: 'Percorsi' }, { label: 'Imprese & Partner di filiera' }]
  accent=ACCENT

— SECTION 1 — "Due funzioni, una partnership"
  Stile: max-w-6xl, padding py-20 lg:py-24, sfondo bg-ang-50.
  Eyebrow font-display tracking-[0.4em] color ACCENT: "Due funzioni"
  H2 font-editorial-italic clamp(1.8rem, 3vw, 2.6rem) tracking-tight ang-900: "Co-design + Placement, <span italic ang-600>una sola partnership</span>."
  Subtitle text-[14.5px] ang-900/65 max-w-2xl mt-4: "L'impresa partner entra nell'Academy con due ruoli che si rinforzano: contribuisce a definire i contenuti dei programmi sui propri fabbisogni di competenze, e accede in prelazione al pool di talenti che quei programmi formano."

  Grid 2 colonne md:grid-cols-2 gap-6 mt-10. Due card grandi rounded-3xl bg-white p-8 ring-1 ring-ang-200/60 hover:-translate-y-0.5.

  CARD SINISTRA — "Co-design dei corsi"
  — Number font-editorial-italic text-[2.4rem] font-light leading-none ang-600 mb-3: "01"
  — Tag uppercase tracking-[0.2em] text-[11px] ocra-500: "Contributi · Laboratorio editoriale"
  — Title font-editorial-regular text-[1.4rem] mt-2 leading-tight ang-900: "Portate il vostro fabbisogno"
  — Body text-[14px] leading-[1.6] ang-900/70 mt-3: "L'impresa partner entra nel Laboratorio editoriale dell'Academy e contribuisce a definire i contenuti dei programmi: light white paper congiunti sui gap di competenza del settore, masterclass disegnate sui fabbisogni reali, sandbox di sperimentazione applicata. La ricerca pedagogica diventa risposta operativa."
  — Bullets text-[13px] ang-900/65 mt-4 space-y-2:
    • Workshop di scoping iniziale 90 min con il team Academy + FuturItaly
    • Pilot di co-design su 1-2 programmi con KPI condivisi
    • Co-firma dei light white paper (autorialità riconosciuta)

  CARD DESTRA — "Placement dei talenti formati"
  — Number: "02"
  — Tag: "Talenti · Prelazione"
  — Title: "Assumete chi formiamo"
  — Body: "Le imprese partner hanno priorità di accesso al pool di talenti formati nei programmi annuali Angelini Academy: 10 borsisti MBA Gateway / anno con stage di 3-6 mesi nelle OpCo del Gruppo, Graduate Program 24 mesi, executive program LBS / LUISS / IMD. Il ponte tra educazione e lavoro funziona quando l'impresa partecipa fin dalla definizione del fabbisogno."
  — Bullets:
    • Career Path Tracker condiviso degli alumni (anteprima Engaged Network)
    • Prelazione di colloquio sui profili in chiusura percorso
    • Open call dedicata per partner enterprise tier prima del market

— SECTION 2 — "Industry Learning Ecosystem" (visualizzazione network)
  Stile: max-w-6xl, padding py-20 lg:py-24, sfondo bg-white.
  Eyebrow font-display tracking-[0.4em] color ACCENT: "Industry Learning Ecosystem"
  H2 font-editorial-italic: "Un <span italic ang-600>consorzio di competenze</span>, non un fornitore."
  Lead text-[15px] leading-[1.65] ang-900/70 mt-4 max-w-2xl: "Le competenze critiche del prossimo decennio non si sviluppano in una singola azienda. L'Academy posiziona Angelini Industries come hub collaborativo per la progettazione delle competenze della filiera del futuro, insieme alle imprese partner."

  Sotto, network visualization stilizzata in SVG inline (replica lo stile della network visualization di Galileo Research Engine in EngagedResearch.tsx — vedi quel file per riferimento). 4 nodi centrali (OpCo Angelini: Pharma, Industrial Tech, Consumer, Fater — NOTA: Fater al posto di Ventures come da decisione 18/5 sera) connessi a 8-10 nodi esterni che rappresentano imprese partner della filiera (placeholder: biotech, automation provider, system integrator, digital solution provider, manufacturing excellence, HR tech, learning analytics, life sciences). Edges sottili, ~30% dei nodi esterni pulsa lievemente in Framer Motion. Colori: nodi OpCo viola ACCENT, nodi esterni ang-600/70, edges ang-200.

  Sotto al network (mt-10), microcopy text-[12px] italic ang-900/55 max-w-xl: "Visualizzazione illustrativa. Le imprese partner pilota saranno annunciate progressivamente nel corso del 2026."

— SECTION 3 — "Cosa offriamo come partner"
  Stile: max-w-6xl, padding py-20 lg:py-24, sfondo bg-ang-50.
  Eyebrow font-display tracking-[0.4em] color ACCENT: "Cosa offriamo"
  H2 font-editorial-italic: "Tre leve <span italic ang-600>che funzionano insieme</span>."

  Grid 3 colonne md:grid-cols-3 gap-6 mt-10 con 3 card rounded-3xl bg-white p-7 ring-1 ring-ang-200/60 hover:-translate-y-0.5.

  CARD 1
  — Top accent bar (h-1) viola ACCENT
  — Icon size-9 round bg ACCENT/14 con cerchio piccolo ACCENT
  — Title font-display text-[1.35rem] mt-4: "Programmi co-progettati"
  — Body text-[13.5px] ang-900/65 mt-2: "Masterclass + executive programs sviluppati congiuntamente per gap di competenza specifici: AI applied to manufacturing, digital transformation operations, future skills pharma, automation engineering."

  CARD 2
  — Top accent bar viola
  — Icon size-9
  — Title: "Reskilling condiviso"
  — Body: "Programmi tra imprese della filiera che condividono lo stesso fabbisogno. Consorzio orizzontale per attivare ticket impossibili da sostenere singolarmente — il classico ticket >€1M per programma annuale strutturato."

  CARD 3
  — Top accent bar viola
  — Icon size-9
  — Title: "Placement strutturato"
  — Body: "Visibilità sul pool alumni MBA Gateway + Graduate Program + executive education, con prelazione di colloquio per partner enterprise tier. Career Path Tracker condiviso come strumento operativo della talent acquisition continuativa."

— SECTION 4 — "Come si entra come partner" (3 step process)
  Stile: max-w-6xl, padding py-20 lg:py-24, sfondo bg-white.
  Eyebrow font-display tracking-[0.4em] color ACCENT: "Onboarding partner"
  H2 font-editorial-italic: "Tre passi, <span italic ang-600>tre conversazioni</span>."

  Layout 3 colonne md:grid-cols-3 gap-6 mt-10 (bordi laterali gradient sottile come pattern Metodologia di /engaged-research). Niente card complete — solo separatori verticali leggeri tra le colonne.

  STEP 01 — "Proposta"
  — Number font-editorial-italic text-[2.2rem] font-light ang-600
  — Title font-editorial-regular text-[1.2rem] mt-2 ang-900: "Proponete il vostro fabbisogno"
  — Body text-[13.5px] ang-900/65 mt-3: "Form di proposta: tipo azienda, dimensione, area filiera, competenza mancante, interesse co-design vs placement vs entrambi. 5 minuti di compilazione."

  STEP 02 — "Discovery call"
  — Number 02
  — Title: "Workshop di scoping"
  — Body: "90 minuti con il team Angelini Academy + FuturItaly. Identifichiamo insieme il punto di partnership: programma esistente da co-evolvere, programma nuovo da disegnare, accesso al pool talenti o entrambi."

  STEP 03 — "Pilot"
  — Number 03
  — Title: "Programma pilota con KPI condivisi"
  — Body: "Accordo di co-design o placement (o ibrido) con KPI condivisi misurati a 6-12-18 mesi. Onboarding nella community Engaged Network per i referenti partner."

— SECTION 5 — "CommunityCallout"
  Riusa il componente CommunityCallout già presente in src/components/CommunityCallout.tsx (lo stesso usato in PercorsiTalent e PercorsiResearcher).
  Props specifiche per questa pagina:
  — accent={ACCENT}
  — title="Le imprese partner qualificate accedono al Career Path Tracker degli alumni"
  — body="Engaged Network preview Q1 2027: comunità qualificata di ricercatori partner, alumni MBA Gateway e imprese di filiera con accesso alla Career Path Tracker condivisa. Su invito."
  — ctaLabel="Scopri Engaged Network →"
  — ctaTo="/engaged-network"

— SECTION 6 — Form proposta co-design (CTA finale)
  Stile: sfondo bg-ang-50, max-w-4xl mx-auto, rounded-[28px] p-10 lg:p-14, gradient: linear-gradient(135deg, ACCENT 0%, rgba(2,26,48,0.95) 100%), text-ang-50.
  Eyebrow font-display tracking-[0.4em] text-[12px] uppercase ang-50/80: "Proposta di partnership"
  H2 font-editorial-italic clamp(1.6rem, 2.4vw, 2.2rem) mt-4: "Proponete <span italic ocra-400>la prima conversazione</span>."
  Body text-[14.5px] leading-[1.65] ang-50/80 mt-4 max-w-xl: "Ricevuta la vostra proposta, il team Angelini Academy + FuturItaly fissa un workshop di scoping 90 minuti per identificare il punto giusto di partnership. Nessun impegno commerciale fino al workshop."

  Sotto, button CTA inline che apre lo stesso PreviewModal usato per il paper L&D ma con questi campi:
  preview.open({
    kind: 'preview',
    eyebrow: 'Proposta di partnership · Co-design + Placement',
    title: 'Workshop di scoping 90 minuti',
    body: 'Una conversazione strutturata con il team Angelini Academy + FuturItaly per identificare insieme il punto di partnership giusto per la vostra organizzazione: programma esistente da co-evolvere, programma nuovo da disegnare, accesso al pool talenti, o ibrido. Nessun impegno commerciale fino all\\'esito del workshop.',
    bullets: [
      'Form 5 minuti · area filiera + competenza mancante + interesse co-design / placement / entrambi',
      'Workshop scoping 90 min · Angelini Academy + FuturItaly',
      'Pilot di co-design o placement con KPI condivisi misurati a 6-12-18 mesi',
      'Onboarding nella community Engaged Network per i referenti partner',
    ],
    meta: 'Proposta di partnership · IT/EN',
    ctaLabel: 'Iscriviti per la prima conversazione',
  })

  Etichetta del button: "Proponete la prima conversazione" + freccia svg coerente con quella della CTA paper L&D esistente. Stile button: rounded-full bg-ocra-400 px-7 py-4 text-[14px] font-semibold text-ang-900 hover:bg-ocra-200.

  Chiudi con <PreviewModal {...preview.props} /> in fondo al return.

═══════════════════════════════════════
2. ROUTING — src/App.tsx
═══════════════════════════════════════

Aggiungi import all'inizio di App.tsx (subito dopo PercorsiMedia):
import PercorsiImprese from './pages/PercorsiImprese'

Aggiungi route nel blocco <Routes> subito dopo la riga di /percorsi/media:
<Route path="/percorsi/imprese" element={<PercorsiImprese />} />

═══════════════════════════════════════
3. HEADER DROPDOWN — src/components/Header.tsx
═══════════════════════════════════════

Nell'array percorsiDropdown (riga ~13) aggiungi una 5ª voce in fondo:
{ label: 'Imprese & Partner di filiera', to: '/percorsi/imprese' },

L'ordine finale del dropdown:
1. Giovane Talento → /percorsi/talent
2. Ricercatore Accademico → /percorsi/researcher
3. HR & Business → /percorsi/hr-business
4. Media & Istituzioni → /percorsi/media
5. Imprese & Partner di filiera → /percorsi/imprese ← NUOVO

═══════════════════════════════════════
4. PERSONASELECT — src/components/PersonaSelect.tsx · aggiungi 5ª persona
═══════════════════════════════════════

PROBLEMA
L'array `personas` ha attualmente 4 oggetti (researcher · talent · hr · media) ordinati F-M-F-M dopo il riordino 19/5. Va aggiunto un quinto oggetto in coda per chiudere il pattern F-M-F-M-F (donna in posizione 5 — l'Innovation Director del nuovo cluster Imprese).

AZIONE
Aggiungi un 5° oggetto all'array `personas` (dopo `media`):

{
  id: 'imprese',
  name: 'Imprese & Partner di filiera',
  tagline: 'Cerca un partner per co-progettare le competenze e assumere i talenti formati.',
  description:
    'L\\'Industry Learning Ecosystem co-progetta i programmi sui vostri fabbisogni e vi dà prelazione sui talenti formati. Per partner di filiera, non per clienti di catalogo.',
  cta: 'Esplora il percorso',
  href: '/percorsi/imprese',
  accent: '#6B2C91',
  glow: 'rgba(107,44,145,0.55)',
  image: '/personas/imprese.png',
  peek: {
    title: 'Un consorzio di competenze.',
    highlights: ['Co-design + Placement', 'Career Path Tracker condiviso', 'Workshop scoping 90 min'],
  },
},

VINCOLI
Nessun cambio strutturale al rendering del componente PersonaSelect. Il carousel 3D + hover preview + click navigation devono adattarsi automaticamente alla 5ª carta (verifica che il layout regga su 5 elementi — se serve aggiusta minimamente la spaziatura del carousel ma senza riscrivere la logica). Nessun cambio agli altri 4 oggetti dell'array.

Se la logica di rendering del carousel ha hardcoded "4" da qualche parte (es. width, indexing, breakpoint, animation count), aggiornala a "5" o rendila dinamica via `personas.length`. Cerca riferimenti hardcoded e patcha solo dove serve. Mantieni intatto: animazioni 3D, hover preview, click handler, accent colors, glow effects.

═══════════════════════════════════════
5. ASSET IMMAGINE PERSONA — public/personas/imprese.png
═══════════════════════════════════════

Il componente PersonaSelect aggiornato si aspetta un file PNG full-character al path:
public/personas/imprese.png

Il file viene generato esternamente via prompt immagine 3D (allegato in chat separato — Carlo lo lancia in parallelo e mi dà il file appena pronto). Nel frattempo:

OPZIONE A — se il file non esiste al momento del paste
Creo un placeholder temporaneo riusando l'immagine /personas/researcher.png come fallback grafico (NON come asset finale — è solo per evitare un broken image durante lo sviluppo). Aggiorno il commento del componente PersonaSelect indicando che imprese.png è in attesa di asset definitivo.

OPZIONE B — se il file imprese.png è già presente
Non fare nulla, il path /personas/imprese.png viene risolto correttamente dal componente.

Scegli A o B in base allo stato della directory public/personas/ al momento del paste. Comunica chiaramente quale opzione hai applicato.

═══════════════════════════════════════
NOTE GENERALI
═══════════════════════════════════════

Sequenza finale della nuova pagina /percorsi/imprese (per verifica):
1. PageShell hero — "Industry Learning Ecosystem" + H1 co-progettiamo
2. Section "Due funzioni, una partnership" — 2 card Co-design + Placement
3. Section "Industry Learning Ecosystem" — network visualization 4 OpCo + 8-10 partner esterni
4. Section "Cosa offriamo come partner" — 3 card Programmi + Reskilling + Placement
5. Section "Come si entra come partner" — 3 step Proposta + Workshop + Pilot
6. CommunityCallout — cross-link Engaged Network
7. Section CTA finale — form proposta co-design via PreviewModal

Lunghezza file stimata: ~350-420 righe TSX (paragonabile a PercorsiResearcher.tsx, leggermente più lunga di PercorsiMedia.tsx).

Stile: motion fade-in-y consueto per tutte le section (initial opacity 0 y 16-20 → whileInView opacity 1 y 0 → viewport once true margin -80px → transition duration 0.5-0.6 stagger 0.08-0.1).

Accessibility: tutti i nuovi heading hanno semantica corretta (h2 per section, h3 per card title). Nessun click handler senza aria-label. PreviewModal già accessible per design. Il network visualization in SVG ha role="img" + aria-label descrittivo + title element interno.

Quando hai finito:
1. Verifica con npm run build che TypeScript non lamenti errori
2. Fammi un dump della sequenza section visibile da PercorsiImprese.tsx + dump del nuovo array `personas` di PersonaSelect.tsx (solo nome + ordine)
3. Committa con messaggio:
"feat(imprese): add 5th /percorsi/imprese route + PersonaSelect 5th persona + Header dropdown 5th item — cluster 7 Elena v.012 Industry Learning Ecosystem"

Grazie.
```

---

## PROMPT N.2 — per generatore immagini 3D (Midjourney v6 / DALL-E / SDXL)

> Da incollare nel generatore immagini scelto (Carlo usa Veo 3.1 per i reel ma per immagini statiche meglio Midjourney v6 / DALL-E / SDXL — la sintassi sotto è agnostica, adatta i parametri tail al tool che usi). Asset risultante da salvare come `public/personas/imprese.png` (PNG con sfondo trasparente o sfondo minimal coerente con le 4 personas esistenti — verifica `/personas/researcher.png` come reference).

```
3D character render of an Italian Innovation Director woman in her late forties, full-character portrait, three-quarter pose with slight upward viewing angle (slight low-camera framing for institutional authority).

CHARACTER
A confident manufacturing innovation leader, age 45-50, Italian/European features, mid-length dark hair gathered in a soft elegant low ponytail or shoulder-length style. Composed expression, intelligent eyes, slight thoughtful smile — institutional but warm. Authority of someone who has led plant transformations and now drives industry partnerships.

OUTFIT
Smart industrial executive: structured navy blue blazer over a high-quality tech-textile turtleneck (charcoal grey or deep aubergine), slim sartorial trousers, leather Oxford-style flats. A discreet visitor pass clipped to the blazer lapel (white badge, no readable text). One hand holding a sleek tablet displaying anonymized production data graphs, the other hand free at her side or holding a folded report.

POSE
Three-quarter view, body angled 30 degrees, head turned slightly toward camera. Weight balanced on one leg, the other relaxed. Posture grounded, slight forward lean — engaged not stiff. Authority of leadership without arrogance.

SETTING
Modern industrial control room or high-tech manufacturing facility seen behind her. Defocused background: tall glass panels, soft cool blue ambient light from production line monitors, hints of automation lines and digital twin screens. Architectural lines clean and minimal. Ratio of background detail vs character: 70% character / 30% background blur, character sharp.

LIGHTING
Cinematic three-point lighting, key light from upper-left (warm 3200K), fill from lower-right (cooler 5500K mixing with the cool industrial blue ambient), subtle rim light separating her from the background. Soft shadows, no harsh contrast. Quality lookbook / institutional editorial photography aesthetic.

STYLE
European Institutional Graphic Novel translated to 3D rendering — semi-realistic, painterly precision, clean lines, premium institutional palette. NOT cartoon, NOT casual gaming style, NOT exaggerated proportions. Realistic human proportions and anatomy. Reference adjacent personas in same product line: see PNG files at public/personas/researcher.png, public/personas/hr.png, public/personas/talent.png, public/personas/media.png — match their level of 3D rendering quality, lighting style, character proportions and overall finish exactly.

PALETTE
Primary: navy blue #1B2D5A (blazer), ivory cream (skin tone warm undertone), warm gold accents in jewelry / tablet bezel detail. Character accent color: institutional purple #6B2C91 (subtle — visible in a discreet detail like a scarf knot, a tablet case edge, a folder cover, OR as the ambient gradient lighting reflected on her shoulder). Background ambient: cool industrial blue-teal with one warm golden highlight strip from upper-left lighting.

COMPOSITION
Aspect ratio 3:4 portrait. Character occupies roughly 65-75% of frame height. Negative space at top for visual breathing room. Lower portion gradient-fade-to-clean for compositing into web component (the carousel renders the character with bottom alpha gradient — leave room).

OUTPUT
PNG with transparent or near-transparent background suitable for compositing onto a dark mesh gradient (the LandingMesh background of the site is navy + ang-50 cream gradient). Resolution minimum 1536x2048. Cinematic photographic finish — NOT illustration cel-shaded, NOT toy/figurine plastic look, NOT anime. The level of finish should match a Mass Effect 4 character render or a high-end product visualization — institutional, premium, photographically grounded.

NEGATIVE PROMPTS
no cartoon, no anime, no chibi, no toy figurine plastic shading, no exaggerated proportions, no glamour photoshoot pose, no overly stylized makeup, no industrial PPE (no hardhat / no safety glasses — she's a director not on the line), no visible logos or readable text on badges or screens, no aggressive corporate stock photo smile, no casual gaming aesthetic, no fantasy elements, no sci-fi futurism (the setting is contemporary 2026 industrial, not 2050).
```

---

## Note di redazione (per Carlo, non per Claude Code né per il generatore)

**1. Naming persona "Anna"** — non l'ho hardcoded nel prompt CC perché PersonaSelect attuale espone solo `name` come tag categoria (es. "Giovane Talento", "Ricercatore Accademico") senza nome proprio della persona. Ho mantenuto la stessa convenzione: la 5ª carta espone "Imprese & Partner di filiera" come tag, coerente con le altre. Se vuoi mostrare anche un nome proprio nella card (es. "Anna · Imprese"), va patchato anche per le altre 4 (oggi non lo fanno) — meglio in un round successivo dedicato. Per il prompt immagine 3D ho lasciato "Anna" implicito come riferimento mentale per il render character, ma nessun nome compare nell'asset finale.

**2. Network visualization Industry Learning Ecosystem (Section 2)** — l'ho disegnata come SVG inline che riusa lo stile del Galileo Research Engine già presente in EngagedResearch.tsx. È un asset che Claude Code costruisce a partire dal pattern esistente. Se trovi che il render finale non sia abbastanza espressivo, possiamo arricchirlo in un round dedicato con animazione Framer Motion più sofisticata (es. nodi che pulsano in sequenza che racconta il flusso fabbisogno → co-design → talento → placement).

**3. CommunityCallout Section 5** — il componente esiste già (creato 19/5 per CommunityCallout fine percorsi Researcher e Talent). Per `/percorsi/imprese` lo riusiamo con title diverso. Se per qualche motivo CC sostiene che il componente non esiste ancora (es. se il prompt 19/5 non è ancora stato eseguito), lo crea on-the-fly come fallback con la stessa interfaccia.

**4. Fater al posto di Ventures (Section 2 network visualization)** — già citato esplicitamente nel prompt. È coerente con la decisione 18/5 sera (task aperto §490). Le 4 OpCo finali sono Pharma · Industrial Tech · Consumer · Fater (verifica brief 2026).

**5. PreviewModal vs form inline (Section 6 CTA finale)** — ho scelto PreviewModal per coerenza con `/percorsi/hr-business` paper L&D + `/percorsi/talent` quiz Career Path. Se preferisci form inline (più attrito ma più friction-less per partner enterprise che vogliono compilare subito), modificalo nel paste finale.

**6. Lingua prompt immagine 3D in inglese** — i generatori immagini funzionano meglio con prompt in inglese tecnico-fotografico. Resta in inglese.

**7. Tempo stimato Claude Code**: 30-45 min per la pagina nuova + 3 patch minor (routing + dropdown + PersonaSelect). File nuovo ~400 righe TSX + 5 righe in App.tsx + 1 riga in Header.tsx + ~25 righe in PersonaSelect.tsx.

**8. Tempo stimato render 3D**: 2-5 min per generation (Midjourney v6 / SDXL) + iterazione di 2-3 varianti per scegliere quella più vicina alle 4 personas esistenti. Conviene generare 4 candidati con seed diversi e scegliere quello con miglior match stilistico.

**9. Post-execution**:
- `npm run build` per validare TypeScript
- Screenshot homepage con PersonaSelect carousel a 5 carte per verificare bilanciamento visivo (la 5ª carta donna deve chiudere bene il pattern F-M-F-M-F)
- Screenshot pagina `/percorsi/imprese` per cross-check con le altre 4 landing percorso (deve sentirsi famiglia, accent viola riconoscibile)
- Walk-through veloce per validare: hero → due funzioni → ecosystem network → 3 leve → 3 step → community callout → CTA

Dopo OK visivo, vault commit chirurgico: append a `_Angelini Academy` §Log con conteggio sezioni + file nuovi, chiusura task #260 e parte di §289 (5° percorso imprese), aggiornamento `last_doc_added`.
