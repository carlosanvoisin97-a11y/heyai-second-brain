---
type: strategic-doc
parent_project: _Angelini Academy
client: Angelini Academy
created: 2026-05-18
updated: 2026-05-18
purpose: documento dedicato agli user journey end-to-end per ogni persona del sito Angelini Academy 2026. Comprende le 4 personas pubbliche + 1 persona interna Angelini People + integrazione con tutte le 4 capability di Galileo (UN agente, NON 4 feature separate) + Engaged Network preview + dashboard Personal Learning Record. Base operativa per slide pitch + per fase production
audience: Carlo (uso interno per costruire le slide "User Journey" del pitch 31/5)
status: working — eredita dalla Sintesi Strategica Pre-PPTX 18/5 e la integra con i dettagli mancati nella prima passata (Galileo come agente unico multi-capability, Engaged Network feature implementate, Angelini People dashboard, demo reset automatico)
sources_synthesized:
  - "[[Sintesi Strategica Pre-PPTX 2026-05-18]] (documento parent)"
  - "[[Prompt Claude Code - Galileo Tutor e Research Engine]] (15/5 — pattern Galileo 4 capability)"
  - "[[Prompt Claude Code - Pagina Engaged Network Preview]] (15/5 — 6 feature + Angelini People 5 aree)"
  - "[[Prompt Claude Code - Revisioni sito 15-5 v1]] (15/5 — reset demo + tier system + criteri MBA rimossi)"
  - "[[Concept - Engaged Network Community]] (15/5)"
  - "[[Strategia Website 2026]] (12/5)"
  - "[[Brief Copy Sito per Claude Code]] (15/5)"
  - Sessione Cowork local_6c45a690 (offerta formativa Angelini esistente + 9 risorse pubbliche oggi + interno vs esterno + percorso interattivo non-AI)
  - Mockup live su angelini-academy.vercel.app (10 pagine sitemap navigabili)
---

# 🧭 User Journey Dettagliati — Angelini Academy

> Documento dedicato che integra ed estende la sezione "User journey" della [[Sintesi Strategica Pre-PPTX 2026-05-18]]. Per ogni persona: entry → landing → exploration → activation → conversion → re-engagement, con riferimenti puntuali ai componenti React già implementati nel mockup (`angelini-academy.vercel.app`) o specificati nei prompt Claude Code del 15/5.
>
> **Differenza vs Sintesi Strategica**: la Sintesi descrive *cosa* fanno le persone in una pagina; questo documento descrive *come* (componenti, interazioni, micro-conversioni intermedie, Galileo touchpoint, demo reset behavior). Granularità adatta a chi disegna la slide deck oppure produce il sito.

---

## Premessa importante — la realtà del sito che stiamo costruendo

Prima dei journey, fissiamo cinque elementi del mockup che cambiano la narrazione rispetto ai documenti strategici originari e che vanno integrati nelle slide del pitch.

**1. Galileo è UN agente, NON un catalogo di feature AI**. Nel mockup `angelini-academy.vercel.app` Galileo è già consolidato come agente unico con due capability operative (`CareerPathNavigator.tsx` + `EngagedResearchReadingRoom.tsx`); il prompt Claude Code del 15/5 sera tardi ne aggiunge altre due (Galileo Tutor + Galileo Research Engine). Al pitch 31/5 vengono presentate **quattro capability di un solo agente**:
- **Galileo · Career Path Navigator** (quiz pre-iscrizione, vive in `/percorsi/talent` e `/mba-gateway` con CTA dedicata)
- **Galileo · Reading Room / Agente di ricerca** (Q&A + riassunti paper, vive in `/engaged-research`)
- **Galileo · Tutor** (assistenza durante masterclass/MBA con groundamento sui paper Engaged Research, vive in `/mba-gateway`)
- **Galileo · Research Engine** (simulazioni parallele + hypothesis generation + pattern discovery + synthetic experiments, vive in `/engaged-research`)

Pattern industriale 2025-2026 dichiarato al cliente: Khanmigo (Khan Academy), Harvey (legal), Cursor (developer), Hippocratic AI (healthcare). **UN agente verticale per audience, capability multiple coordinate**. È la risposta strutturale al feedback Caterina dell'8/5 (*"tre feature bocciate in quattro minuti perché percepite come boomerang"*) — non aggiungiamo feature, estendiamo capability di un agente unico che il cliente vede vivo nel mockup.

**2. Engaged Network e Angelini People sono già nel mockup come preview navigabili**, non solo concept. Due nuove route con badge visivi: `/engaged-network` ("PREVIEW Q1 2027") e `/angelini-people` ("RISERVATO ANGELINI PEOPLE"). Linkate dal footer sezione Academy + card teaser in Home. Caterina può navigarle dal vivo durante il pitch.

**3. La Hero ha una metafora visiva forte: HeroBridgeConstellation**. Arco SVG ponte + 7 sfere scroll-driven, palette arancio #FF8200 + blu chiaro #005EB8, accensione progressiva con climax sincronizzato al payoff *"Building bridges in education"*. È la prima cosa che Caterina vede. Sessione dedicata di polish in corso il 15/5 con 3 round iterativi (fix strutturali → polish estetico → accessibility/responsive/QA).

**4. PersonaSelect è character-select gamificato all'inizio della Home**, ispirato a RPG. Quattro personas illustrate in stile "European Institutional Graphic Novel" (Giulia, Marco, Sofia, Luca — vedi [[Angelini Academy — Briefing Personaggi Landing Page]]) con sfondo dark blue mesh + accent colore per persona. Hover prolungato mostra peek-preview della landing del percorso. Click → atterraggio sulla landing `/percorsi/<slug>` dedicata.

**5. Tutti i form e i login del mockup hanno reset demo automatico invisibile**. Decisione consolidata 15/5 sera (`Prompt Claude Code - Revisioni sito 15-5 v1`): newsletter signup, candidatura MBA expression of interest, waitlist Engaged Network, login Elena Angelini People — ogni submit mostra conferma per 8 secondi poi torna automaticamente al form vuoto. Login Elena fa logout dopo ~30 secondi o al cambio di route. **Niente pulsanti "logout" o "reset" visibili**: trasparente all'utente, pensato esattamente perché Caterina al pitch possa rifare ogni demo senza imbarazzo. Pattern industriale di "demo mode" invisibile.

Con questi cinque elementi fissati, partono i journey.

---

## Persona 1 — Giovane talento (life sciences, industrial robotics, business healthcare, 24-32 anni)

**Profilo character-select**: Sofia (3ª della PersonaSelect, accent warm gold / sage green). Camice bianco-cream aperto su blusa navy, tablet in mano con dati scientifici, pin accademico, posa sicura, sfondo pannelli di vetro da laboratorio. Persona target: ricercatrice o giovane professionista nel settore life sciences o robotics industriale, ambiziosa e concentrata, precisione silenziosa.

**Driver primario**: opzionalità di carriera + pre-validazione del percorso + accesso al merito via borsa di studio totale.

### Touchpoint 1 — Entry

Sofia atterra da quattro fonti possibili:

- **LinkedIn organico**: post Founder Stories rilanciato dal profilo personale di Marco Morbidelli (SAT6, brief slide 31). Sofia clicca su un quote di un alumno MBA e atterra sul mockup di Founder Stories.
- **Roadshow universitario**: presenza fisica del team Angelini Academy in atenei italiani con QR code che porta a `/mba-gateway` con UTM `?utm_source=roadshow&utm_medium=qr&utm_campaign=2026-bologna`.
- **Paid LinkedIn drive-to-site**: campagna sponsored target life sciences + industrial robotics 24-32 con CTA *"Esprimi interesse per l'MBA Gateway"* (SAT4).
- **Passaparola alumni**: link condiviso WhatsApp da un partecipante del ciclo pilota 2026 a un peer.

### Touchpoint 2 — Home + PersonaSelect

Sofia atterra sulla Home (`/`). Dopo l'Hero con HeroBridgeConstellation (arco + 7 sfere scroll-driven + payoff "Building bridges in education") incontra la **PersonaSelect** — il carousel character-select che le chiede *"Chi sei, e da dove parti?"*. Sceglie il personaggio Sofia, hover-preview le mostra in 200×300px un'anteprima della landing `/percorsi/talent`, click e atterra.

Micro-conversione: la scelta è già un segnale di interesse — può essere capturata via analytics evento (`persona_selected: talent`) per segmentare il traffic.

### Touchpoint 3 — Landing `/percorsi/talent`

La landing apre con hero verticale *"Il talento non aspetta"* (voce Magician) e mostra `OptionsTriad`: tre card affiancate per MBA Gateway, graduate program Angelini Industries, posizioni dirette OpCo. Sotto, una **Founder Story in evidenza** (`FounderStoryCard`) con video player + transcript snippet — la storia di un'alumna del ciclo precedente che oggi lavora in Angelini Pharma.

Sofia esplora. Vede teaser del Cross-OpCo Tracker (link a `/mba-gateway`). CTA finale: *"Esplora il MBA Gateway"* o *"Scopri il tuo percorso"* — la seconda apre **Galileo · Career Path Navigator**.

### Touchpoint 4 — Galileo · Career Path Navigator (capability 1 di Galileo)

Sofia clicca *"Scopri il tuo percorso"*. Si apre il `CareerPathNavigator.tsx`: un quiz conversazionale in 5 step che valuta il fit del candidato verso MBA Gateway, graduate program o posizione diretta. Domande tipo: background di laurea, ambiti di interesse (life sciences / industrial robotics / business healthcare), opzionalità preferita (MBA / founder / corporate / venture), ISEE-ISPE range, disponibilità geografica.

Output: livello fit + percorso suggerito (es. *"MBA Gateway 78% fit · graduate program 65% fit · posizione diretta OpCo Pharma 42% fit"*) + razionale 2-3 righe per percorso. Disclaimer dichiarato: *"Non è candidatura formale (resta su IE Madrid). Non valuta tecnicamente. Non promette esiti."*

Pattern industriale dichiarato: Khanmigo per studenti, ma applicato al career-discovery corporate. Visualmente: chat panel con GalileoIcon + persona avatar Sofia, accent color #FF8200 (arancio brand book).

Micro-conversione: completamento quiz è un'eviction event forte. Output Sofia: *"MBA Gateway suggerito"*. CTA in fondo al quiz: *"Esplora la pagina MBA Gateway"* + *"Iscriviti alla newsletter Talent"*.

### Touchpoint 5 — Landing `/mba-gateway` (flagship)

Sofia atterra sulla landing flagship. Hero: *"10 borsisti. 1 MBA a Madrid. 6 mesi in Angelini."* (voce Magician). Sequenza sotto la piega:

1. **Timeline** (`TimelineHorizontal`): FEB-MAR 2026 selezione → GIU 2026 induction Casa Angelini → SET 2026-GIU 2027 MBA Madrid (con IE Business School) → GIU-SET 2027 internship in una delle OpCo Angelini → TBD 2027 assunzione.
2. **Cross-OpCo Tracker** (OS3): visualizzazione 3D scroll-driven con sfere planet-style che rappresentano le 4 OpCo Angelini Industries (Pharma → Industrial Tech → Consumer → Ventures). Sofia scrolla e vede il "viaggio" dello scholar attraverso le quattro OpCo, ogni pianeta espone skill acquisite, durata, esempio progetto.
3. **Galileo · Tutor** (capability 3, NUOVO 15/5, versione leggera): sezione tra Cross-OpCo Tracker e Calcolatore Borsa. Visualizzazione astratta di Galileo (GalileoIcon dimensione media, halo glow), eyebrow *"GALILEO · TUTOR"*, H2 *"Galileo non ti lascia all'inizio del percorso"*. Icona info (ⓘ) accanto alla descrizione apre tooltip espanso con (a) esempio chat illustrativo (4 messaggi mockup: studente chiede su skill obsolescence, Galileo risponde groundato su paper UCL, propone esercizi) + (b) 4 bullet *"Cosa fa / Cosa NON fa"*. Cross-link soft: *"La stessa ricerca che alimenta il Research Engine"*. Accent #FF8200.
4. **Calcolatore borsa di studio** (`ScholarshipCalculator`): input ISEE/ISPE → output *"Borsa totale"* (per ISEE-ISPE < €50.000) oppure *"Tassa €20.000 — circa il 25% del valore di mercato del master"* (citazione brief slide 10). Single parameter, *"talmente semplice"* come richiesto da Caterina 8/5.
5. **Form Expression of Interest** (`EOIForm`): no candidatura formale (resta su IE Madrid), solo intent capture. Nome + email + LinkedIn URL + 3 righe "perché ti interessa". Dimensionato per **45 candidati massimo** post-screening IE Madrid (Caterina 8/5: *"tienete conto della dimensione"*).
6. **CTA secondaria** in fondo: *"Non sai ancora se MBA Gateway fa per te? Fai il quiz Galileo Career Path · 5 minuti"* — anchor link a `/percorsi/talent#career-path`.

**Criteri di eleggibilità rimossi** (decisione 15/5 sera): erano finti, generati dal mockup per coerenza narrativa ma non presenti nel brief Angelini. Sostituiti con frase neutra di transizione *"I criteri di candidatura ufficiali saranno pubblicati ad apertura selezioni"* — Caterina non ha materiale finto contestabile.

### Touchpoint 6 — Conversione

Sofia compila il form EOI. Submit → conferma visibile per 8 secondi (*"Grazie, ti contatteremo entro X giorni"*), poi reset automatico invisibile del form. Lead in CRM Angelini per follow-up Tiziana team.

Micro-conversione secondaria: lead capture per **Newsletter intent-driven** (variant Talent — `useLocation()` di react-router applica copy *"Resta aggiornata sulle Founder Stories e sulle nuove borse"*).

### Touchpoint 7 — Re-engagement

Sofia entra nella sequenza email mensile (SAT1, segmentata variant talent): nuove Founder Stories, paper Engaged Research correlati al suo profilo (es. *"skill obsolescence in pharma"*), inviti a Roadshow nella sua università, anteprime calendario MBA 2027. Drive-to-site verso nuove Founder Stories o paper. Eventuale invito al Forum annuale come community esterna.

---

## Persona 2 — Ricercatore / accademico (post-doc o associate/assistant professor 32-50 anni)

**Profilo character-select**: Marco (2ª della PersonaSelect, accent deep sage green / parchment). Blazer tweed-navy, occhiali a montatura sottile, stack di documenti e journal aperto in mano, lanyard universitario, sfondo aula universitaria moderna o laboratorio. Persona target: professore o ricercatore universitario tipo UCL o IE Madrid, autorevolezza tranquilla non arrogante, segni della ricerca.

**Driver primario**: partner industriale per applicare ricerca pedagogica + canale italiano/europeo per pubblicare + accesso a dataset corporate validati.

### Touchpoint 1 — Entry

Marco atterra da:

- **Citazione su Google Scholar / Semantic Scholar**: paper Engaged Research pubblicato apre il sito come fonte autoritativa.
- **Passaparola accademico**: peer della rete pre-validata FuturItaly (14 atenei: UCL Knowledge Lab, Cambridge DEFI, KU Leuven O2L, RWTH Aachen LearnTech, TUM EdTech, CMU HCI, Georgia Tech, Beijing Normal, Tsinghua, Bologna BS, Padova, Open University IET, Leibniz-Institut, IE Madrid) condivide il link.
- **LinkedIn group "AI in Education" / "EdTech Research Europe"**: post Tiziana o Morbidelli rilancia un paper.
- **PR conferenze EARLI / AERA / SRA**: comunicato stampa di Angelini Academy con backlink al sito post-conferenza.

### Touchpoint 2 — Home + PersonaSelect

Marco sceglie il personaggio Marco nella PersonaSelect, peek-preview gli mostra anteprima `/percorsi/researcher`, click e atterra.

### Touchpoint 3 — Landing `/percorsi/researcher`

Hero verticale *"Engaged Research, non sponsored content"* (voce Sage puro). Sotto:

1. `PaperGrid` con 3-4 paper recenti (titolo + autore + abstract 2 righe + link PDF). Filtri rapidi per i tre verticali: lifelong learning over 50 / skills mismatching / AI applicata pedagogia.
2. Strip partner accademici (logo wall filtrato per ricerca: UCL, LBS, Royal College of Art, LUISS, SDA Bocconi + i 14 atenei della rete FuturItaly).
3. *"Come collaboriamo"* — 3-step process: proposta → review → co-pubblicazione open access.
4. Form proposta collaborazione (`CollaborationForm`, placeholder, no backend).

CTA primaria: *"Proponi una collaborazione"* (verso form) + secondaria *"Sfoglia tutti i paper"* (verso `/engaged-research`).

### Touchpoint 4 — Landing `/engaged-research` (flagship)

Marco approfondisce. Atterra sull'hub editoriale paper-based. Hero: *"Studiamo come le persone imparano per costruire come dovranno imparare domani"* (citazione Pillars nucleus). Sequenza:

1. **TaxonomyTabs**: tassonomia 3 verticali (Lifelong over 50 · Skills mismatching · AI applicata pedagogia) con switch live tra collezioni di paper.
2. **PaperGrid** con 6-8 paper, filtrabili per verticale + per autore + per anno. Ogni `PaperCard`: titolo + autori + executive summary 1 pagina (espandibile inline) + PDF download diretto + linkage paper correlati.
3. **Galileo · Reading Room** (capability 2 di Galileo, già esistente nel mockup come `EngagedResearchReadingRoom.tsx`). Interfaccia conversazionale dedicata: Marco interroga in linguaggio naturale (*"quali ricerche avete su neuroscienze dell'apprendimento applicate al corporate learning?"*, *"che metodologia usate per misurare l'efficacia di una masterclass?"*), Galileo risponde citando paper + autore + link PDF. Disclaimer: *"non parla di temi non pubblicati, non inventa fonti, non suggerisce percorsi formativi"*.
4. **Galileo · Research Engine** (capability 4 di Galileo, NUOVO 15/5 sera tardi, sezione tra Reading Room e Methodology). Eyebrow *"GALILEO · RESEARCH ENGINE"*, H2 *"Galileo non legge soltanto. Simula."*. Layout 2 colonne. Sinistra: **network graph stilizzato** in SVG inline (30-50 nodi piccoli connessi, tre cluster per i tre verticali, pulsazione discreta Framer Motion) + **mock-dashboard** con 4 metriche statiche (*"12.847 simulazioni eseguite questa settimana"* · *"23 hypothesis generated"* · *"7 pattern emergenti pre-validati"* · *"3 paper draft prodotti via Galileo Lab Translator"*). Destra: 4 micro-feature card:
   - **Simulazioni parallele** — *"Testa migliaia di varianti di sequencing didattico su modelli comportamentali. Trova quali funzionano meglio per chi."*
   - **Hypothesis generation** — *"Galileo legge la letteratura mondiale su edTech e propone ipotesi di ricerca che valgono la pena di essere testate."*
   - **Pattern discovery** — *"Trova pattern nei dataset anonimizzati delle università partner che il singolo ricercatore non vede a mano."*
   - **Synthetic experiments** — *"Simula esperimenti pedagogici prima di farli su persone vere. Riduce tempo, risorse, e questioni etiche."*

   Disclaimer dichiarato: *"non sostituisce la peer-review umana, non pubblica autonomamente, non lavora su dati identificabili di singoli studenti. Le scoperte interessanti vanno sempre validate da ricerca empirica condotta dai nostri partner accademici"*. Accent #005EB8 (blu chiaro brand book).

   Cross-link soft: *"I paper prodotti con il Research Engine alimentano poi Galileo Tutor delle masterclass. La ricerca che facciamo diventa la formazione che diamo."*

5. **Methodology** (3-step: domanda di ricerca → laboratorio → pubblicazione + applicazione in programmi). Colonne con accenti colore differenziati 01 blu istituzionale / 02 blu chiaro / 03 verde scuro (decisione 15/5).
6. **Cattedra LUISS spotlight**.
7. **Forum annuale teaser** (link a `/eventi` con landing dedicata).

### Touchpoint 5 — Attivazione

Marco fa due cose in parallelo:

- **Interroga Galileo · Reading Room**: serie di domande sui paper esistenti per capire il fit con la sua linea di ricerca. Tracking via `AI-1 analytics`: query type, paper cliccati, tempo di permanenza.
- **Esplora Galileo · Research Engine**: clicca le 4 micro-feature, capisce il framing "simulazioni come acceleratore della peer-review tradizionale". Tracking: scroll depth, micro-feature cliccate.

Decisione: Marco vede se vale la pena proporre una collaborazione. Risposta affermativa dopo 8-12 minuti di consultazione.

### Touchpoint 6 — Conversione

Marco compila il `CollaborationForm` (visibile sia da `/percorsi/researcher` sia da `/engaged-research/proponi-collaborazione`). Campi: nome + affiliazione + tema proposto (selectbox tra i 3 verticali + "altro") + 5 righe di sintesi + upload CV/paper. Submit → conferma 8 secondi → reset automatico invisibile. Lead in CRM Angelini per follow-up team Engaged Research.

Alternativa: scarica un paper full-PDF. Tracking download + retargeting via newsletter ricercatori.

### Touchpoint 7 — Re-engagement

Marco entra nella **Newsletter intent-driven variant Researcher** (`SAT1` segmentata): anteprime nuovi paper, inviti webinar Engaged Research, call for paper della Cattedra LUISS, eventi della rete 14 atenei partner.

**Possibile evoluzione 2027**: Marco viene invitato a entrare nell'**Engaged Network** (preview Q1 2027 — vedi journey successivo) come Reviewer accademico. Inviti distribuiti via newsletter con accesso early. Top tier (Editor) invitato al Forum fisico annuale Casa Angelini come riconoscimento.

---

## Persona 3 — HR & Business (CHRO o L&D Director 38-55 anni in aziende italiane mid-large)

**Profilo character-select**: Giulia (1ª della PersonaSelect, accent amber-gold / warm ivory) — anche se il nome "Giulia" del briefing personaggi è giornalista, il mapping landing↔persona vive nei file componente e Claude Code lo applica dal repo. Tagline aggiornata 15/5: "HR & Business" (più ampio del solo HR).

**Driver primario**: applicazione concreta della ricerca pedagogica al corporate learning + alternativa ai cataloghi standard delle business school + evidenza ROI quando disponibile.

**Importante — soft seeding 2026**: questa persona vive in **modalità nurturing**, non in modalità vendita. Apertura formale come pipeline commerciale corporate è prevista per 2027-2028. Niente form di vendita pushy.

### Touchpoint 1 — Entry

Giulia atterra da:

- **LinkedIn organico**: post Engaged Research con executive summary di un paper rilanciato dal profilo Morbidelli (SAT6) o da Tiziana team.
- **Paid LinkedIn targeting HR director**: campagna sponsored target CHRO/L&D Director industria pharma/biotech/manufacturing/financial services/consulting (SAT4).
- **Referral colleghi**: link condiviso WhatsApp/Slack da peer.
- **Comunicato stampa coordinato con Festival Trento o Forum**: paper executive summary scaricabile direttamente.

### Touchpoint 2 — Home + PersonaSelect

Giulia sceglie il personaggio HR & Business nella PersonaSelect, peek-preview, click e atterra su `/percorsi/hr-business` (slug consolidato 15/5).

### Touchpoint 3 — Landing `/percorsi/hr-business`

Hero verticale *"L&D oltre il catalogo"* (apertura Magician brevissima, poi Sage). Sequenza:

1. **Settori coperti**: grid 4 card differenziate per colore (decisione 15/5): Pharma (#003087 blu istituzionale) / Biotech (#007864 verde scuro) / Manufacturing (#FF8200 arancio scuro) / Financial Services (#005EB8 blu chiaro). Ogni card: 1 paragrafo + paper executive summary correlato.
2. **Programmi Corporate Learning teaser**: 3 `MasterclassCard` con esempio di programma (es. *"AI for Leadership in Pharma 2026"*, *"Reskilling over 50 nel manufacturing"*, *"Skill mismatch in Financial Services: la prova Angelini"*). Le masterclass mostrate sono mock illustrativi del catalogo Angelini esistente (vedi sessione local_6c45a690 sulla preesistente offerta interna corporate academy con partner LBS/IMD/Bocconi/IE/Luiss BS/H-Farm/Talent Garden).
3. **Caso studio HR**: 1 `CaseStudyCard` placeholder con foto fix (decisione 15/5: aspect-ratio 16/9 + object-fit cover + object-position centrato). Storia di applicazione concreta dell'Engaged Research a un programma corporate.
4. **CTA primaria**: *"Scarica il paper executive summary"* (download diretto PDF tramite Galileo · Lab Translator output).
5. **CTA secondaria**: *"Iscriviti alla newsletter Programmi corporate"* (Newsletter variant business).

### Touchpoint 4 — Attivazione

Giulia scarica il paper executive summary. Output Galileo · Lab Translator (capability interna AI-3, alimenta sito ma non è UI sul sito pubblico): 1 pagina pulita corporate-friendly che riformula il paper di ricerca per un decisore HR. Tracking download per audience HR enterprise (domain enrichment).

Approfondisce con **Galileo · Reading Room** (su `/engaged-research`): interroga su skill mismatching, lifelong learning over 50, ROI dei programmi corporate learning. Tracking sessioni AI-1.

### Touchpoint 5 — Conversione (soft 2026)

Giulia si iscrive alla **Newsletter intent-driven variant Business** (`useLocation()` applica copy *"Programmi corporate, paper executive summary, e i nostri prossimi annunci"*). Submit → conferma 8 secondi → reset automatico.

**Intent indicator opzionale**: form leggero *"Contattatemi quando avrete programmi corporate"* — captura intent senza promettere vendita. Submit → email automatica a sales-ready 2027-2028, lead in CRM con tag *"soft seeding"*.

**Mai nel 2026**: form "preventivo programmi su misura", listino, durata corsi standard. Quella pipeline si apre formalmente nel 2027-2028 quando Angelini decide di aprire commercialmente l'offerta esterna.

### Touchpoint 6 — Re-engagement

Lead nurturing sei-dodici mesi tramite newsletter mensile + executive summary mirati su settore Giulia. Webinar/Forum invito quando organizzato dal cliente (landing su `/eventi`). Bilancio Engaged Research annuale (gennaio 2027) come asset di credibilità.

Handoff a sales-ready in 2027-2028: Giulia diventa lead qualificato per programmi corporate Angelini Academy.

---

## Persona 4 — Media / istituzioni / advocacy (giornalisti, policy maker, advocacy figure)

**Profilo character-select**: Luca (4ª della PersonaSelect, accent warm amber / dark charcoal) — anche se il nome "Luca" del briefing personaggi è founder, il mapping landing↔persona vive nei file componente. La landing `/percorsi/media` è dedicata a giornalisti, policy maker, advocacy.

**Driver primario**: tutto quello che serve per scrivere una storia su Angelini Academy in cinque minuti.

### Touchpoint 1 — Entry

Luca (giornalista del Sole 24 Ore o Il Foglio o Wired Italia) atterra da:

- **Comunicato stampa coordinato**: backlink dal comunicato Festival Trento o Forum o Bilancio Engaged Research.
- **PR di Angelini**: agenzia PR di gruppo distribuisce comunicato con link al sito.
- **Search diretta**: query "Angelini Academy MBA Gateway" oppure "Marco Morbidelli CEO".

### Touchpoint 2 — Landing `/percorsi/media` + `/press`

Le due pagine hanno sovrapposizione 70% (decisione consolidata nel `Mockup Brief Sito` 15/5): `/percorsi/media` è "storia-heavy" (perché Angelini Academy è una storia da raccontare), `/press` è "asset-heavy" (download).

Hero su `/percorsi/media`: *"Una storia italiana di corporate learning"* (voce Sage istituzionale). Sequenza:

1. **Press kit download** (`PressKitCard`): logo SVG, foto HD masterclass + Hackathon dicembre 2025, brand guidelines snippet.
2. **Comunicati stampa recenti** (`PressReleaseCard`): 3 placeholder con titolo + data + estratto.
3. **Bio CEO Marco Morbidelli**: foto + bio breve + 2 righe di voce diretta. Citato una sola volta in tutto il sito (slide 31 brief: profilo LinkedIn personale del CEO).
4. **Contatti stampa**: nome + email + telefono.
5. **Bilancio Engaged Research**: placeholder, *"In arrivo gennaio 2027"*.
6. **CTA primaria**: *"Contatta l'ufficio stampa"*.

`/press` ha la stessa logica ma con focus su download e archivio: media kit completo + archivio comunicati stampa (6-8 entries placeholder) + bio Morbidelli + factsheet + Bilancio Engaged Research. Lingua IT/EN paritetico (audience metà italiana metà internazionale).

### Touchpoint 3 — Attivazione

Luca scarica il press kit + un paper Engaged Research per costruire la sua storia. Possibile uso di **Galileo · Reading Room** per chiedere a Galileo dettagli su un programma o una metodologia ("quali sono i risultati del primo ciclo MBA Gateway?", "che metodologia usa l'Engaged Research?").

### Touchpoint 4 — Conversione

Luca pubblica l'articolo media con citation back al sito. Media impression + back-traffic.

Iscrizione newsletter media-only (sub-list dedicata) per follow-up coordinati.

### Touchpoint 5 — Re-engagement

Push periodici stampa dei nuovi paper / inviti a eventi (gestiti dall'agenzia PR di gruppo Angelini). Bilancio Engaged Research annuale come asset narrativo da pubblicare in gennaio.

---

## Persona 5 — Dipendente del Gruppo Angelini Industries (NEW — Angelini People)

**Profilo demo nel mockup**: Elena Marchetti, Senior Manager · Pharma. Avatar fake con timeline learning + 2-3 raccomandazioni AI nella dashboard. Persona target: dipendente delle 4 OpCo (Pharma, Industrial Tech, Consumer, Ventures) + HR Community + corporate functions.

**Driver primario**: gestire il proprio percorso formativo dentro l'Academy + accedere a contenuti riservati al Gruppo (paper in early access, materiali post-corso, comunità OpCo).

### Touchpoint 1 — Entry

Elena atterra da:

- **Email interna del Gruppo**: comunicazione di Marco Morbidelli o HR Angelini Industries con link a una specifica risorsa Angelini People.
- **Footer del sito pubblico**: link "Angelini People" nella sezione Academy.
- **Card teaser in Home** (se Carlo decide di metterla): *"Sei un dipendente del Gruppo? Accedi ad Angelini People"*.
- **Lancio interno @ Casa Angelini** (brief slide 19): town hall del Gruppo con annuncio della piattaforma.

### Touchpoint 2 — Landing pubblica `/angelini-people` (pre-login)

Elena vede una landing pubblica con hero *"Angelini People · lo spazio dei dipendenti del Gruppo"* + spiegazione di cosa è Angelini People (NON intranet operativa, ma finestra editoriale-relazionale sul Gruppo) + 3-4 card teaser delle aree riservate (Personal Learning Record, Iscrizioni interne, Materiali post-corso, Comunità OpCo, Comunicazione corporate).

Posizionamento dichiarato: *"Lo strato di valore operativo e relazionale per chi è già dentro il Gruppo: contenuti e funzionalità che hanno senso solo se sei dipendente Angelini Industries. NON è intranet operativa — quella resta al fornitore IT di gruppo."*

### Touchpoint 3 — Login wall mockup

Elena clicca *"Accedi"*. Si apre un **modal con form login mockup**: email aziendale `@angelinigroup.com` + password. Submit fa un alert *"Demo: clicca per vedere la versione interna"* e accede alla versione full della pagina. Niente auth reale.

**Reset demo automatico (invisibile, decisione 15/5)**: dopo ~30 secondi di permanenza o al cambio di route, il sistema fa logout automatico e ritorna alla landing pubblica con login form vuoto. Pensato esattamente per Caterina al pitch: può rifare la demo di login ogni volta senza imbarazzo, senza pulsanti "logout" visibili.

### Touchpoint 4 — Dashboard Elena (versione interna)

Elena entra. Vista personalizzata "Elena Marchetti, Senior Manager · Pharma". Cinque aree, ognuna con la sua logica:

**Area 1 — Il mio percorso formativo (Personal Learning Record)**. Dashboard personale. Layout 2 colonne:
- **Sinistra (timeline learning)**: 4 elementi cronologici (corsi completati, certificazioni, masterclass, executive program). Es. *"AI for Leadership · completato giugno 2025"*, *"Skill mismatching workshop UCL · completato novembre 2025"*, *"MBA Gateway induction Casa Angelini · giugno 2026"*, *"Masterclass Leadership in Pharma · iscritta, inizio ottobre 2026"*.
- **Destra (Cosa l'Academy ti suggerisce)**: 4 box di raccomandazione AI per simmetria con la timeline (decisione 15/5: era 3, portato a 4). Suggerimenti coerenti con profilo Elena: 1 masterclass + 1 paper Engaged Research + 1 mentor cross-OpCo + 1 webinar. Ogni box con titolo + 1 paragrafo + CTA *"Esplora"*.

**Area 2 — Iscrizioni e candidature interne**. Workflow per applicare a masterclass, executive program, individual intensive training, intercompany mentoring. Il **catalogo lo vede il pubblico esterno sul sito**, ma il **workflow di iscrizione** (con budget approval manager, calendario compatibilità lavoro, conferma HR) vive qui. Mockup: 2-3 card di programmi in evidenza con stato *"Aperto per iscrizioni · scadenza 30 nov 2026"* + bottone *"Candidati"* mockup.

**Area 3 — Materiali post-corso (alumni della masterclass)**. Slide non pubblicate, recording, paper di approfondimento, comunità riservata ai partecipanti di quel corso. Ha senso solo se hai partecipato. Mockup: 2 card *"Le tue masterclass"* con materiali allegati + community di partecipanti accessibile.

**Area 4 — Comunità delle OpCo + cross-OpCo**. Spazi di discussione interna organizzati per OpCo (Pharma talks, Industrial Tech talks, Consumer talks, Ventures talks) + uno spazio cross-OpCo trasversale. Mockup: 5 card spazi community con preview dei thread recenti + numero membri attivi.

**Area 5 — Comunicazione corporate + riconoscimenti**. Messaggi del CEO Marco Morbidelli, town hall recording, lancio interno @ Casa Angelini, riconoscimenti agli alumni MBA che hanno fatto carriera nel Gruppo, ricercatori interni che firmano paper. **Early access benefit**: anteprime di paper Engaged Research **2 settimane prima del go-live pubblico**, come riconoscimento dell'appartenenza al Gruppo. Mockup: 3 card *"Dal Gruppo"* con messaggio Morbidelli + 1 paper in early access + 1 riconoscimento alumni.

### Touchpoint 5 — Esempio concreto del loop (la slide più potente del pitch)

Un nuovo paper Engaged Research sull'AI applicata alla pedagogia viene pubblicato. Sui tre strati:

- **Sito pubblico** (`/engaged-research`): paper completo open access + executive summary 1 pagina + download PDF. **Audience: ricercatori, HR buyer, media, partner accademici esterni**.
- **Engaged Network** (`/engaged-network`): thread di discussione strutturato tra ricercatori partner + alumni MBA + AI Co-pilot moderation hybrid. **Audience: community esterna pubblica preview Q1 2027**.
- **Angelini People** (`/angelini-people`): pre-print accessibile ai dipendenti 2 settimane prima del go-live pubblico + invito a sessione interna Q&A con l'autore + commento HR Angelini su *"cosa significa per Pharma/Tech"*. **Audience: dipendenti del Gruppo Angelini Industries**.

**Tre strati diversi di valore sullo stesso contenuto. Niente sovrapposizione**. Il loop *INTERNA → EVENTI → ESTERNA → INTERNA* del brief slide 16-17 si materializza in questa pipeline a tre strati. Questa è la slide che differenzia HeyAI da qualsiasi competitor: chiunque può fare un sito, pochi sanno come progettare la circolarità contenuti-relazioni-eventi.

### Touchpoint 6 — Caveat tecnici (per chiusura governance del pitch)

Posizionamento dichiarato a Caterina, per evitare invasione di campo del fornitore IT di gruppo:

- **NON è SSO Microsoft AD**: per il mockup pitch è semplicemente login wall illustrativo. In fase production reale si decide tra SSO Microsoft AD (richiede coordinamento col fornitore IT di gruppo) e auth standalone leggera (email aziendale whitelistata + OTP).
- **NON è LMS interno** (Cornerstone, SuccessFactors, Workday Learning, Docebo). Se Angelini ha già un LMS, Angelini People non lo sostituisce ma ci si interfaccia. La dashboard "Il mio percorso" può tirare dati dal LMS via API leggera, oppure essere stand-alone con tracking di Academy-specific items.
- **NON è documenti HR + payroll + tool interni**: quella resta nell'intranet del fornitore IT.

Angelini People resta **finestra editoriale-relazionale**, non operativa. È il confine che difende il pitch dall'obiezione politica.

---

## Persona 6 — Alumnus MBA / Ricercatore partner (NEW — Engaged Network preview)

**Profilo**: alumno del MBA Gateway (10/anno × N anni — numero piccolo ma profondo, alta lealtà) oppure ricercatore partner accademico dei 14 atenei pre-validati. Audience pilota di lancio Q1 2027.

**Driver primario**: continuare la conversazione del Forum annuale ogni giorno, contribuire alla ricerca Engaged Research, far parte di un network europeo di pratica.

### Touchpoint 1 — Entry

L'alumnus o ricercatore atterra da:

- **Invito email coordinato post-Forum 2026 annuale** (autunno 2026): *"Il Forum non finisce ai cancelli di Casa Angelini. Iscriviti alla waitlist di Engaged Network — lancio Q1 2027"*.
- **Footer del sito pubblico**: link Engaged Network (badge "PREVIEW Q1 2027") + card teaser in Home *"Cosa stiamo costruendo"*.
- **Comunicazione tramite Angelini People** per dipendenti del Gruppo che sono anche alumni o partner accademici.

### Touchpoint 2 — Landing `/engaged-network` (preview)

Hero con angle narrativo *"Il dialogo che continua oltre il Forum"* (voce Magician). Badge visivo *"PREVIEW Q1 2027"*. Sequenza:

1. **Grid card 6 feature** (icona astratta + nome + descrizione 2 righe) per le sei funzionalità core:
   - **F1 Paper Discussion Threads** — ogni paper Engaged Research apre un thread strutturato di discussione tra membri
   - **F2 Pedagogical Quiz light** — assessment 8-12 domande sui 3 verticali (lifelong over 50 / skills mismatching / AI applicata pedagogia), restituisce certificato Engaged Network Member
   - **F3 AI Co-pilot moderation hybrid** — agente AI groundato sul corpus Engaged Research, modera anti-spam e duplicati con escalation umana a Community Editor del Laboratorio editoriale HeyAI
   - **F4 Contributor Tier silenziosi** — Reader → Contributor → Reviewer → Editor; promozione su qualità non quantità; Editor invitati al Forum fisico annuale Casa Angelini come riconoscimento
   - **F14 Career Path Tracker alumni MBA Gateway** — mappa viva delle scelte di carriera degli alumni dentro le 4 OpCo Angelini Industries (Pharma, Industrial Tech, Consumer, Ventures) ed esterno; auto-aggiornata dagli alumni; lega visivamente al pattern Cross-OpCo Tracker già presente nella Strategia
   - **F18 Collaborative Position Paper** — una volta l'anno la community drafta collettivamente una Position Paper pubblica su un tema strategico (esempio *"AI ethics in lifelong learning 2027"*); Reviewer + Editor co-firmano (Phase 2 Q3-Q4 2027)

2. **Mockup F1 Paper Discussion Threads**: visualizzazione di un thread esempio con paper UCL Knowledge Lab + 5-7 commenti di ricercatori partner accademici (avatar + nome + tier badge "Reviewer @ UCL Knowledge Lab"). AI Co-pilot reply suggestion in evidenza in 1-2 punti.

3. **Mockup F14 Career Path Tracker**: griglia di profili alumni mock (foto diversificate, dati realistici nome + cognome + anno + ruolo + OpCo). Click su un profilo mostra journey individuale.

4. **Mockup F18 Position Paper drafting**: editor collaborativo con 3-4 co-autori (Reviewer + Editor) che hanno scritto sezioni diverse. Commit history light.

5. **Sezione Tier silenziosi** (decisione 15/5 sera tardi): replica il pattern visivo del **CrossOpCoTracker** con 4 sfere "planet" 3D in fila orizzontale (Reader → Contributor → Reviewer → Editor) + linea connettiva che le collega + gradient cromatico crescente (blu chiaro → verde → arancio chiaro → arancio scuro). Eyebrow *"Quattro livelli silenziosi"* + frase Merriweather Light Italic *"La promozione misura la qualità dei contributi, non la quantità. Niente leaderboard, niente punteggi pubblici — solo riconoscimento del valore reale."* Sotto ogni sfera: nome tier + criterio di promozione 1 riga.

6. **Sezione AI Co-pilot moderation**: cosa fa / cosa NON fa. Pattern matching + LLM reasoning + RAG groundato su (a) paper Engaged Research pubblicati, (b) regole community Angelini, (c) brief Unwavering Care brand book. Output: auto-flag duplicati, anti-spam, tone-of-voice check, draft di risposte per moderatori umani.

7. **Sezione "Partecipare al network"** con 4 box differenziati per colore (decisione 15/5): blu istituzionale / blu chiaro / verde scuro o chiaro / arancio scuro o chiaro. Spiegano i 4 modi di partecipare (Reader → Contributor → Reviewer → Editor) come bordo top o sinistro + icona + micro-label uppercase.

8. **CTA banner blu** + **FAQ accordion 5 domande** (quando apre, chi può iscriversi, costa qualcosa, cosa fa l'AI, perché si parte piccoli).

9. **Waitlist form mockup**: 4 campi (nome, email, ruolo/affiliazione, interesse principale). Submit → conferma 8 secondi → reset automatico invisibile.

### Touchpoint 3 — Attivazione (Q1 2027 al go-live)

Al lancio Q1 2027, l'utente viene invitato. Si iscrive con verifica identità leggera (LinkedIn OAuth). Profilo pubblico con nome + ruolo + affiliazione.

Parte come Reader. Promozione basata su qualità dei contributi (review umana del Community Editor + signal AI Co-pilot): Contributor (dopo 5-10 commenti di qualità) → Reviewer (dopo aver moderato thread o scritto 2-3 paper review) → Editor (top tier, invitato al Forum fisico annuale).

### Touchpoint 4 — Re-engagement

Notifiche email per nuovi paper pubblicati su temi di interesse + inviti a Pedagogical Quiz per certificazione + co-authoring della Position Paper annuale (Q3-Q4 2027 evolution).

---

## Diff segnalate (sito reale mockup vs documenti strategici originari)

Cinque differenze importanti tra il mockup live (`angelini-academy.vercel.app`) e i documenti strategici originari ([[Framework Pitch Finale]], [[Strategia Pitch Finale]], [[Strategia Website 2026]]) che la Sintesi Strategica del 18/5 mattina aveva sottostimato. Le segnalo qui per coerenza tra slide e mockup demo del pitch.

**Diff 1 — Galileo come UN agente, NON 4 feature AI separate**. La Strategia Website 2026 §5.3 elenca *"AI Layer 5 funzionalità"* (AI-1 Engaged Research Conversational, AI-2 Career Path Navigator, AI-3 Lab Translator, AI-4 Scouting Helper, AI-5 Editorial Workbench) come 5 feature distinte. Il mockup 15/5 sera tardi consolida invece le 5 in **un agente unico chiamato Galileo con 4 capability operative al pitch** (Career Path Navigator + Reading Room + Tutor + Research Engine). Lab Translator e Editorial Workbench restano strumenti interni HeyAI per il Laboratorio editoriale ma non sono UI sul sito pubblico (sono nascosti dietro il "tutto è Galileo che alimenta il sito"). **Impatto pitch**: la slide 9 della Sintesi va riscritta come "Galileo, quattro capability di un agente unico" — questo riduce ulteriormente il rischio "boomerang" perché Caterina vede UN nome, non una shopping list.

**Diff 2 — Galileo · Research Engine fa simulazioni**. Non era previsto nei documenti strategici originari, è una **capability nuova consolidata 15/5 sera tardi**. Aggiunge una dimensione di "research lab AI" (pattern industriale tipo DeepMind AlphaFold / Anthropic Material Science): simulazioni parallele + hypothesis generation + pattern discovery + synthetic experiments. È differenziante perché nessuno dei 10 player scansionati lo fa, e perché posiziona Angelini Academy nel registro "research lab pedagogico" più che nel registro "corporate academy che usa AI". **Impatto pitch**: aggiungere capability 4 di Galileo nella slide AI Layer + introdurre il framing "research lab pedagogico" nella value proposition.

**Diff 3 — Angelini People + Engaged Network sono già navigabili nel mockup**. La Sintesi Strategica del 18/5 mattina presentava Engaged Network come slide opzionale "concept teaser, da sondare con Elena". La realtà è che **entrambe le route sono già implementate** (`/engaged-network` e `/angelini-people`) con badge visivi PREVIEW + login wall mockup + 6 feature Engaged Network + 5 aree Angelini People + dashboard Personal Learning Record di Elena Marchetti. **Impatto pitch**: la slide 14 della Sintesi va promossa da "teaser opzionale" a "slide stabile del pitch + demo live", e va aggiunta una slide dedicata "Angelini People · lo spazio dei dipendenti del Gruppo" tra la slide 13 (roadmap) e la slide 14 (Engaged Network).

**Diff 4 — La metafora "Building bridges in education" è materializzata visivamente nella Hero**. HeroBridgeConstellation = arco SVG ponte + 7 sfere scroll-driven con palette arancio + blu chiaro, accensione progressiva sincronizzata al payoff. È il primo momento "wow" del sito che Caterina vede. La Sintesi Strategica del 18/5 mattina non ne parlava esplicitamente. **Impatto pitch**: prevedere una slide 0 (o l'apertura della slide 1) con screenshot o GIF della Hero animata come prova di "il sito vive, non è una slide".

**Diff 5 — PersonaSelect character-select gamificato è la prima decisione architetturale visibile**. Non è un dettaglio UX: è la dichiarazione architetturale che il sito ha **quattro percorsi utente** segmentati. Il pattern gamificato (carousel 3D, 4 personas illustrate con ritratti graphic-novel, sfondo dark mesh, accent colore per persona, hover peek-preview) è inimitabile e si vede in 5 secondi. **Impatto pitch**: prevedere una slide che mostri la PersonaSelect come prova della tesi *"sei cluster del brief, quattro percorsi operativi del sito"*.

**Diff 6 (minore) — Riordino schede citazioni People component**. Decisione 15/5 sera tardi: l'ordine in `People.tsx` (Home, *"Chi attraversa il ponte"*) e in `FounderStories.tsx` non è più Sofia → Elena → Marco (originale), ma **Sofia → Marco → Elena** alternando gender F → M → F (richiesta del cliente 17/5). Nessun impatto significativo sulla narrazione, ma da notare se il pitch mostra screenshot dei due componenti.

**Diff 7 (minore) — Criteri di eleggibilità MBA RIMOSSI**. Erano 5 criteri finti generati dal mockup (laurea magistrale entro luglio 2026, 24 mesi esperienza, TOEFL 100+, età max 32, disponibilità stage Italia). Non presenti nel brief Angelini originale. Decisione 15/5: rimossi completamente per non esporre materiale finto al pitch. Sostituiti con frase neutra *"I criteri di candidatura ufficiali saranno pubblicati ad apertura selezioni"*. **Impatto pitch**: nella slide MBA Gateway non si menziona alcun criterio specifico di eleggibilità, solo timeline + Cross-OpCo + Galileo Tutor + Calcolatore + Form EOI.

**Diff 8 (architetturale) — Il sito Angelini Academy oggi ha già un'offerta interna seria che non è esterna**. Sessione Cowork 17-18/5 (`local_6c45a690`): l'Academy esiste dal 2022 (ASFOR-certified) con programmi customizzati interni per senior talents (partner LBS, IMD, Bocconi, IE, Luiss BS, H-Farm, Talent Garden, SDA Bocconi). Verso pubblico oggi ci sono solo 9 risorse online (video-pills AI, Design Thinking, PowerPoint, interviste Meda/Trapasso, tennis-business analogies, gratuite, asincrone) + l'MBA Gateway 2026 come unica novità seria. **Implicazione strategica**: il sito che stiamo costruendo è il **primo serio asset commerciale verso pubblico** + Angelini People è il primo serio asset interno relazionale. **Impatto pitch**: nella slide 4 (analisi interna) menzionare esplicitamente l'asset esistente non-esterno + posizionare la nostra proposta come "primo ponte serio" verso entrambi i pubblici.

---

## Note di regia per le slide User Journey

Tre approcci possibili per le slide pitch a partire da questo documento:

**Approccio A — 1 slide per persona (5-6 slide totali)**. Per ogni persona, una slide con: profilo (1 riga) + 5 touchpoint sintetici (entry → landing → activation → conversion → re-engagement) + componente/capability Galileo dominante. Vantaggio: copertura completa. Svantaggio: 5-6 slide su user journey è il 25-30% del pitch — molto.

**Approccio B — 1 slide diagramma riassuntivo + 1 slide approfondimento (2 slide totali)**. Una slide diagramma a 4-5 corsie verticali (una per persona pubblica) con entry → landing → activation → conversion → re-engagement. Una slide successiva di approfondimento su Persona 1 (giovane talento, perché è il funnel più completo con Galileo · Career Path Navigator + Cross-OpCo + Calcolatore + EOI form + Galileo · Tutor). Vantaggio: efficienza. Svantaggio: le Persone 5-6 (Angelini People + Engaged Network alumni) restano fuori — vivono nelle slide dedicate Angelini People + Engaged Network.

**Approccio C — Demo live del mockup (zero slide journey)**. Carlo apre `angelini-academy.vercel.app` davanti a Caterina e fa una demo navigata: PersonaSelect → landing percorso → Galileo · Career Path → MBA Gateway → Cross-OpCo Tracker → Galileo · Tutor → form EOI → reset automatico → Engaged Network preview → Angelini People login Elena → dashboard → logout auto. Vantaggio massimo: il sito parla da solo, e nessun competitor in gara ha probabilmente un mockup di questo livello. Svantaggio: dipende dalla connessione internet della sala riunioni Angelini.

**Raccomandazione**: Approccio C come centro del pitch, con una slide riassuntiva preparata in caso di problemi tecnici. La slide riassuntiva può essere quella dell'Approccio B (1 slide diagramma 4 corsie + 1 slide approfondimento Persona 1).

---

## Riferimenti incrociati

- **Sintesi parent**: [[Sintesi Strategica Pre-PPTX 2026-05-18]]
- **Pattern Galileo unico**: [[Prompt Claude Code - Galileo Tutor e Research Engine]]
- **Engaged Network + Angelini People preview**: [[Prompt Claude Code - Pagina Engaged Network Preview]] + [[Concept - Engaged Network Community]]
- **Refinement 15/5 (riordino citazioni, reset demo, criteri MBA rimossi)**: [[Prompt Claude Code - Revisioni sito 15-5 v1]]
- **Hero animation**: [[Prompt Claude Code - Hero scroll effect]]
- **PersonaSelect 4 personas**: [[Angelini Academy — Briefing Personaggi Landing Page]]
- **Sitemap operativa 10 pagine**: [[Mockup Brief Sito]]
- **Copy tone Sage primario + Magician secondario**: [[Brief Copy Sito per Claude Code]]
- **Strategia generale 9 sezioni**: [[Strategia Website 2026]]
- **Scheda madre**: [[_Angelini Academy]]
- **Live mockup**: `angelini-academy.vercel.app` (deploy Vercel del repo `/Users/carlosanvoisin/code/angelini-academy/`)

---

*Versione 1.0 — 18/5/2026. Documento dedicato agli user journey end-to-end per le 6 persone del sito Angelini Academy (4 pubbliche + Angelini People + Engaged Network alumni). Da rivedere dopo il touchpoint Carlo + Elena 18/5 ore 15 + Carlo + Michele su demo navigazione mockup.*
