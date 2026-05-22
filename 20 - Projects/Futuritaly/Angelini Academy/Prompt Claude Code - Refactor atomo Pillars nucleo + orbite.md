---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt operativo per refactor del comportamento dinamico dei pattern atomic-like del sito (atomo nucleo Engaged Research in Pillars.tsx + Cross-OpCo Tracker in CrossOpCoTracker.tsx). Cambiamenti chirurgici: (1) orbite ellittiche STATICHE nello spazio 3D + elettroni che SCORRONO lungo il perimetro (oggi è il contrario: le orbite ruotano e i satellites le seguono); (2) micro-float idle indipendente applicato a TUTTE le scritte di entrambi i pattern (label interne nucleo + 4 PillarCard esterne + numeri/label sopra le 4 OpCoSphere). Nessuna modifica di palette (i colori restano quelli ufficiali Angelini esistenti). Nessuna nuova dipendenza.
created: 2026-05-19
updated: 2026-05-19 v2 (post-feedback Carlo: no cambio palette · float esteso a tutte le scritte interne+esterne di tutti i pattern atomic-like, non solo le 4 PillarCard outer)
status: superseded (target sbagliato — non incollare)
source_input: immagine reference allegata da Carlo via chat 19/5 notte (atomo classico stile science textbook — 3 orbite + 3 elettroni) + feedback Carlo post-prompt v1 ("non diamo indicazioni sui colori perché i colori assolutamente devono rimanere gli stessi e sono quelli della palette ufficiale" + "le scritte non solo quelle esterne, tutte quante — Fater, Pharma, Consumer, Industrial Tech, system integrator, digital solution — sia quelle interne che quelle esterne")
related: "[[_Angelini Academy]] · [[Mockup Sito - Struttura e Copy Completo]] · [[Prompt Claude Code - Modifiche post-call 19-5]] · [[Prompt Claude Code - percorsi imprese + persona 3D]]"
---

# ⚠️ SUPERSEDED — TARGET SBAGLIATO. Non incollare questo prompt.

> Errore di interpretazione (Carlo 19/5 notte): questo prompt agiva su Pillars.tsx Nucleus + CrossOpCoTracker.tsx, ma il target corretto era l'atomo `Industry Learning Ecosystem` dentro `src/pages/PercorsiImprese.tsx` (network visualization 4 OpCo + 8 partner gialli con 3 orbite ellittiche). Vedi `[[Prompt Claude Code - Refactor atomo Industry Learning Ecosystem]]` per il prompt corretto. Questo file resta in vault come storico — il pattern di "float idle desincronizzato sulle scritte" del §3 potrebbe essere riusato in round separato se vorrai estenderlo anche a Pillars homepage e Cross-OpCo Tracker, ma non è prioritario.

---

# Prompt per Claude Code — Refactor pattern atomic-like (Pillars nucleo + Cross-OpCo Tracker) v2 [SUPERSEDED]

> Patch su due componenti: `Nucleus()` in `src/components/Pillars.tsx` (atomo Engaged Research della home) + `src/components/CrossOpCoTracker.tsx` (4 sfere OpCo di /mba-gateway). Comportamento dinamico riallineato all'immagine reference: orbite ellittiche FISSE nello spazio 3D + elettroni che scorrono lungo il perimetro. Micro-float idle indipendente applicato a TUTTE le scritte di entrambi i pattern (interne + esterne), con timing desincronizzato. Nessun cambio di palette colori — quella attuale è quella ufficiale Angelini e deve restare.

## Riferimento visivo (immagine atomica reference allegata da Carlo)

Atomo classico stile science illustration su sfondo scuro: nucleo centrale + 3 orbite ellittiche metalliche con piano di inclinazione diverso (intersecanti al centro, effetto 3D classico tipo simbolo IBM Watson) + 3 elettroni gialli (uno per orbita) ben distanziati. **NB: di questa immagine va replicata SOLO la struttura visiva e il comportamento dinamico delle orbite/elettroni — i colori restano quelli della palette Angelini esistenti, NON si tocca la palette del Nucleus né degli orbital rings né dei satellites/elettroni.**

## Comportamento dinamico richiesto

1. **Orbite (anelli ellittici)**: FISSE nello spazio 3D — ogni orbita ha la sua inclinazione (rotateX + rotateY diversi) che non cambia nel tempo. Il piano dell'orbita NON ruota su se stesso. Resta fermo.
2. **Elettroni (satelliti gialli/ocra)**: SCORRONO lungo il perimetro dell'orbita corrispondente. Ogni elettrone fa il giro dell'ellisse a velocità propria. Il movimento è circolare rispetto al centro nucleo, ma il path è una ellisse 3D inclinata — quindi visivamente l'elettrone non si muove in 2D piatto ma in 3D perché segue un'orbita inclinata.
3. **Scritte (TUTTE — interne e esterne di tutti i pattern atomic-like)**: NON seguono il movimento orbitale. Restano nelle loro posizioni di layout. Hanno un micro-float idle indipendente (animazione y ±4-6px periodo lungo 6-8s, durations e delay desincronizzati). Riguarda:
   - **Pattern A — Nucleo Engaged Research in Pillars.tsx**:
     - Label centrali dentro il nucleo: "NUCLEO · 00" + "Engaged Research"
     - 4 PillarCard esterne: Corporate Learning · Innovazione · Educational Think Tanks · Magnete di talenti
   - **Pattern B — Cross-OpCo Tracker in CrossOpCoTracker.tsx**:
     - Numero "01-04" sopra ogni OpCoSphere
     - Nome OpCo nella callout attiva: Pharma · Tech · Ventures · Fater

## Sintesi 3 azioni

| # | File / Componente | Tipo modifica | Effetto richiesto |
|---|---|---|---|
| 1 | `Pillars.tsx` Nucleus() — 3 orbital rings + satellites (~178-220) | Refactor strutturale: orbite fisse + elettroni che scorrono lungo il perimetro | Replica visiva dell'immagine reference — 3 orbite stabili, 3 elettroni che fanno il giro. Palette colore satellites/elettroni INVARIATA (rgba ocra/cream attuali) |
| 2 | `Pillars.tsx` Nucleus() label interne (~325-345) + wrapper PillarCard esterne nel render della section principale | Aggiunta micro-float idle indipendente | Tutte le scritte del pattern A galleggiano leggermente, con timing diverso ciascuna |
| 3 | `CrossOpCoTracker.tsx` OpCoSphere number label (~217-223) + label name nella callout attiva | Aggiunta micro-float idle indipendente | Numeri "01-04" sopra le sfere + nomi OpCo nella callout galleggiano con timing diverso ciascuno |

NB: NON si tocca la sfera centrale del Nucleus (palette + surface texture + glow restano identici). NON si tocca il colore degli orbital rings (border-ocra-400/55 e border-ang-200/55 attuali restano). NON si tocca il colore dei satellites/elettroni (gradient warm cream → ocra attuale resta — ocra-400 #FF8200 è già il "giallo" della palette Angelini, coerente con l'immagine reference).

---

## Prompt da incollare

```
Ciao. Patch su due componenti del sito per riallineare il comportamento dinamico dei pattern atomic-like all'immagine reference che Carlo ha condiviso (atomo classico stile science textbook). Cambiamenti chirurgici: (1) orbite ellittiche FISSE nello spazio 3D + elettroni che SCORRONO lungo il perimetro (oggi è il contrario), (2) micro-float idle indipendente applicato a tutte le scritte di entrambi i pattern (interne + esterne), con timing desincronizzato.

VINCOLO CRITICO: NESSUN cambio di palette colori. La palette attuale (navy ang-* + ocra-* + ang-200) è quella ufficiale Angelini e deve restare intatta su nucleo, orbital rings, satellites/elettroni. Si toccano SOLO il comportamento dinamico e le animazioni di float — niente gradient nuovi, niente colori nuovi, niente cambi a background/boxShadow esistenti.

═══════════════════════════════════════
RIFERIMENTO VISIVO (immagine condivisa da Carlo)
═══════════════════════════════════════

Atomo classico stile science illustration: nucleo centrale + 3 orbite ellittiche metalliche con piano di inclinazione diverso (intersecanti al centro, effetto 3D classico) + 3 elettroni gialli/oro (uno per orbita) ben distanziati sui perimetri. Da replicare: STRUTTURA VISIVA + COMPORTAMENTO DINAMICO. NON la palette colori (quella resta Angelini).

═══════════════════════════════════════
1. PILLARS.TSX · NUCLEUS — refactor orbital rings + elettroni
═══════════════════════════════════════

PROBLEMA
L'implementazione attuale (righe ~178-220 di src/components/Pillars.tsx) usa 3 motion.div orbital ring che ruotano con `animate: {rotate: 360}` (o `-360`), ognuno con un child satellite (size-2/2.5) attaccato sul perimetro. Effetto: l'INTERA ellisse del ring sembra ruotare (perché il border è omogeneo si nota poco, ma si percepisce). E i satellites sono piccoli, meno enfatici degli elettroni gialli dell'immagine reference.

Carlo vuole:
(a) Le 3 orbite ferme nello spazio (ognuna con la sua inclinazione 3D fissa, non animata)
(b) 3 elettroni leggermente più visibili (size-3 → size-3.5 invece di size-2/size-2.5), uno per orbita, che SCORRONO lungo il perimetro dell'ellisse
(c) Velocità di scorrimento differente per ogni elettrone (varietà visiva)
(d) Glow giallo/ocra dietro ogni elettrone (palette ocra Angelini attuale, NON colori nuovi)

AZIONE — pattern raccomandato (Claude Code può adattare se trova soluzione più snella)

Per ogni orbita i ∈ {0, 1, 2}:
— Un div STATICO con classe rounded-full border (l'ellisse del piano orbitale dopo inclinazione 3D), inset e border opacity coerenti con l'attuale. Niente animate prop sul ring. Inclinazione via `transform: 'rotateX(Xdeg) rotateY(Ydeg)'` fissa.
— Dentro al ring, un wrapper INVISIBILE rotante (motion.div con `animate: { rotate: 360 }` o `-360`, transition linear infinite, no border/no background) la cui rotazione fa muovere l'elettrone attaccato lungo il perimetro.
— Dentro al wrapper rotante, l'ELETTRONE (motion.div size-3 / size-3.5) posizionato sul perimetro del cerchio (translateX = raggio del ring nella sua dimensione locale). Quando il wrapper ruota, l'elettrone descrive un cerchio attorno al centro; col 3D rotateX/rotateY del parent ring, quel cerchio diventa ellisse 3D inclinata.

Pseudo-pattern (Claude Code adatta liberamente):

<div
  className="absolute inset-[-10%] rounded-full border-[1.5px] border-ocra-400/55"
  style={{ transform: 'rotateX(62deg) rotateY(0deg)' }}
>
  {/* Wrapper invisibile rotante */}
  <motion.div
    aria-hidden
    animate={{ rotate: 360 }}
    transition={{ duration: hovered ? 7 : 14, repeat: Infinity, ease: 'linear' }}
    className="absolute inset-0"
  >
    {/* Elettrone posizionato sul perimetro */}
    <div
      className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 size-3.5 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(255,232,180,1) 0%, rgba(255,130,0,1) 70%)',
        boxShadow: '0 0 14px rgba(255,130,0,0.85), 0 0 5px rgba(255,232,180,1)',
      }}
    />
  </motion.div>
</div>

NB: i valori `rgba(255,232,180,1)` e `rgba(255,130,0,1)` sono ESATTAMENTE quelli del satellite attuale orbita 1 (vedi riga ~191 oggi). Non sono "colori nuovi" — è la stessa palette ocra Angelini, applicata all'elettrone più grande.

3 ORBITE con parametri:
— Orbita 1 (esterna, inset[-10%]): rotateX(62deg) rotateY(0deg), elettrone size-3.5, duration 14s, rotate +360, palette ocra warm cream → ocra-400 (come oggi)
— Orbita 2 (media, inset[-2%]): rotateX(56deg) rotateY(35deg) [aumentato da rotateY(22deg) per maggiore variazione 3D], elettrone size-3, duration 18s, rotate -360 (counter-rotation), palette ang-200 attuale (rgba(255,255,255,0.9) → rgba(184,212,238,1) come oggi) — questo elettrone è il "satellite chiaro/argentato" attuale, restaylato come elettrone più grande
— Orbita 3 (interna, inset[8%]): rotateX(70deg) rotateY(-22deg) [aumentato da rotateY(-12deg)], elettrone size-2.5, duration 10s, rotate +360, palette ocra (come l'esterna ma più piccolo)

L'effetto: 3 ellissi visibili che intersecano il centro a 3 angolazioni diverse, immediatamente leggibili come "atomo classico" anche senza animazione. 3 elettroni che scorrono visibilmente lungo i perimetri a velocità diverse.

VINCOLI
— Le orbite hanno border STATICO (non ruotano)
— I 3 elettroni mantengono la palette ocra/ang-200 esistente (warm cream → ocra-400 / argentato → ang-200) — niente colori nuovi
— Border opacity e thickness restano coerenti con l'attuale (border-ocra-400/55 e border-ang-200/55 — eventualmente border-[1.5px] invece di border-2 per leggerezza)
— Hover behavior: quando il nucleo è hovered, gli elettroni accelerano (durations dimezzate: 14→7, 18→9, 10→5). Mantieni il pattern hover esistente con `idleDur(slow, fast)`
— La sfera centrale del Nucleus (~223-323) NON va toccata — palette, surface texture, glow, latitude rings restano IDENTICI
— L'outer atmospheric glow (~166-176) NON va toccato — radial gradient ocra attuale resta
— Nessun cambio a aria-hidden, accessibility, MotionLink wrapper

═══════════════════════════════════════
2. PILLARS.TSX · MICRO-FLOAT IDLE — label nucleo + 4 PillarCard esterne
═══════════════════════════════════════

PROBLEMA
Le scritte del pattern atomico Engaged Research devono galleggiare leggermente in posizione fissa, con timing desincronizzato, indipendentemente dal movimento orbitale dell'atomo. Riguarda:
- Label CENTRALI dentro il nucleo: "NUCLEO · 00" (eyebrow font-display ~327) + "Engaged Research" (titolo ~328-345, il pattern esatto dipende da come è strutturato il blocco di chiusura del Nucleus)
- Le 4 PillarCard ESTERNE nel layout della section Pillars principale: Corporate Learning · Innovazione · Educational Think Tanks · Magnete di talenti

Oggi le label nucleo sono dentro il wrapper floating del Nucleus stesso (motion.div con `animate: {y: [0,-10,0]}` ~159-163), quindi seguono il float del nucleo. Le 4 PillarCard hanno solo il loro fade-in initial+whileInView ma non un float idle.

AZIONE

PARTE A — Label interne del nucleo
Le label "NUCLEO · 00" + "Engaged Research" sono dentro un blocco overlay centrato (~325-345). Estraile dal floating wrapper del Nucleus (`<motion.div animate={{y: [0,-10,0]}}>` ~159) e mettile in un OVERLAY SEPARATO con il loro proprio float idle, indipendente dal movimento del nucleo:

<div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
  <motion.div
    animate={{ y: [0, -4, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
    className="font-display text-[10px] tracking-[0.4em] text-ocra-200 mix-blend-screen"
  >
    NUCLEO · 00
  </motion.div>
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    className="..."
  >
    Engaged Research
  </motion.div>
</div>

Conseguentemente, il floating wrapper del Nucleus principale (~159-163 con `animate: {y: [0,-10,0]}`) può RESTARE per il float della sfera centrale + orbite, MA tutto il contenuto interno deve essere strutturato in modo che le label NON siano dentro al suo subtree (altrimenti il loro float sarebbe somma del wrapper + del proprio float). Sposta le label fuori dal floating wrapper, le metti come overlay assoluto del MotionLink esterno.

PARTE B — 4 PillarCard esterne
Trova nel render principale della section Pillars (probabilmente nella export default sotto al componente Nucleus) come sono renderizzate le 4 PillarCard. Wrappale singolarmente in un motion.div con float idle desincronizzato:

const PILLAR_FLOAT_TIMING = [
  { duration: 6.0, delay: 0 },
  { duration: 6.5, delay: 0.3 },
  { duration: 7.0, delay: 0.6 },
  { duration: 7.5, delay: 0.9 },
]

// Nel JSX dove vengono renderizzate le 4 card:
{pillars.map((pillar, i) => (
  <motion.div
    key={pillar.id}
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: PILLAR_FLOAT_TIMING[i].duration,
      delay: PILLAR_FLOAT_TIMING[i].delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    <PillarCard pillar={pillar} ... />
  </motion.div>
))}

Mantieni invariate:
- Il fade-in initial+whileInView esistente (se è sul PillarCard interno, OK; se è sul wrapper, sposta il fade-in sul wrapper più esterno e il float sul wrapper interno — l'importante è che entrambe le animazioni coesistano senza conflitti)
- L'hover behavior delle PillarCard (cursorGlow, hover lift, accent border — patterns complessi ~348+ del file)
- Il layout grid esistente (4 card disposte clockwise 01 ↗ 02 ↘ 03 ↙ 04 attorno al nucleo)

═══════════════════════════════════════
3. CROSSOPCOTRACKER.TSX · MICRO-FLOAT IDLE — label sopra le 4 OpCoSphere + nome OpCo nella callout attiva
═══════════════════════════════════════

PROBLEMA
Le scritte del Cross-OpCo Tracker (4 sfere in fila orizzontale in /mba-gateway) non hanno float idle. Carlo vuole estendere il pattern di "scritte galleggianti" a tutti i pattern atomic-like del sito. Riguarda:
- Il numero "01" / "02" / "03" / "04" sopra ogni OpCoSphere (riga ~217-223)
- Il nome OpCo nella callout attiva (Pharma · Tech · Ventures · Fater — cerca nel JSX dove `active.name` viene renderizzato, probabilmente ~367-418 dove c'è una motion.div che mostra le info della sfera attiva)

AZIONE

PARTE A — Numero "01-04" sopra le 4 OpCoSphere
Wrappa il `<span>` esistente (~217-222, con classe `absolute left-1/2 -translate-x-1/2 -top-7 ...`) dentro un motion.div con float idle desincronizzato. Visto che si tratta di un `<span>` con position absolute, il pattern più pulito è sostituire il span con motion.span (Framer Motion supporta nativamente motion.span):

<motion.span
  className="absolute left-1/2 -translate-x-1/2 -top-7 font-display text-[10px] tracking-[0.3em] uppercase"
  style={{ color: opCo.color, opacity: 0.85 }}
  animate={{ y: [0, -3, 0] }}
  transition={{
    duration: 5 + index * 0.4,  // index = 0..3 della OpCoSphere
    delay: index * 0.2,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  {opCo.number}
</motion.span>

NB: l'`index` è già disponibile nel componente OpCoSphere come prop `index`. Riusalo.

PARTE B — Nome OpCo nella callout attiva
Cerca nel JSX dove `active.name` viene renderizzato come label centrale della callout (probabilmente nella section di dettaglio attivo, intorno alla riga ~367-418 con AnimatePresence). Quel name dovrebbe già essere dentro un motion.div con fade-in/out su key={active.name}. Aggiungi al motion.div principale del title un float idle:

<motion.h3
  key={active.name}
  initial={{ opacity: 0, y: 10 }}
  animate={{
    opacity: 1,
    y: [0, -3, 0],  // float idle leggero
  }}
  exit={{ opacity: 0, y: -10 }}
  transition={{
    opacity: { duration: 0.4 },  // separato per non interferire col float
    y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  }}
  className="..."
>
  {active.name}
</motion.h3>

NB: la struttura esatta del motion element che renderizza `active.name` va verificata leggendo il JSX del componente CrossOpCoTracker — adatta il pattern di animazione composta (opacity transition + y oscillazione infinita) alle props effettive.

═══════════════════════════════════════
NOTE GENERALI
═══════════════════════════════════════

Risultato visivo atteso dopo il patch:
— Nucleo Engaged Research: 3 orbite ellittiche cromate ferme nello spazio 3D, 3 elettroni ocra/ang-200 che scorrono lungo i perimetri a velocità diverse, label centrali "NUCLEO · 00" + "Engaged Research" che galleggiano leggermente con timing diverso indipendente dal movimento orbitale
— 4 PillarCard esterne: galleggiano indipendentemente con timing desincronizzato 6.0/6.5/7.0/7.5s (delay 0/0.3/0.6/0.9s)
— Cross-OpCo Tracker /mba-gateway: numeri "01-04" sopra le 4 sfere galleggiano con timing 5.0/5.4/5.8/6.2s desincronizzato, nome OpCo attiva nella callout ha float idle indipendente dal fade-in/out
— Palette: assolutamente INVARIATA su tutti i componenti — solo comportamento dinamico cambia
— Atmosfera: tutto il sito sembra "vivo" con piccole oscillazioni indipendenti che danno respiro senza distrarre

Pattern di timing float (mnemonic): durations dispari (5.0, 5.4, 6.5, 7.0...) non in rapporti razionali → mai si sincronizzano → respiro naturale. Delay diversi per partenze sfalsate.

Accessibility: motion-safe — tutti i nuovi `animate: {y: [...]}` non causano problemi a `prefers-reduced-motion` se Framer Motion è configurato globalmente con MotionConfig reducedMotion="user" (verifica src/main.tsx o src/App.tsx; se non c'è, ignora — è ottimizzazione futura).

Performance: oscillazioni y leggere (3-5px) su pochi elementi in viewport non hanno costo percepibile. GPU compositing in Framer Motion gestisce.

Quando hai finito:
1. Verifica con npm run build che TypeScript non lamenti errori
2. Refresh home + /mba-gateway + screenshot di Nucleus + PillarCard + CrossOpCoTracker per cross-check visivo con l'immagine reference
3. Committa con messaggio:
"feat(atomic): stable orbits + sliding electrons + desyncronized text float on Pillars nucleus + Cross-OpCo Tracker"

Se ci sono dubbi sull'implementazione orbital (wrapper-rotante vs offsetPath vs useAnimationFrame), scegli la soluzione più semplice che dia risultato visivo corretto. Non over-engineer. La priorità è: orbite SEMBRANO ferme, elettroni SEMBRANO scorrere lungo di esse, scritte SEMBRANO galleggiare in modo indipendente.

Grazie.
```

---

## Note di redazione (per Carlo, non per Claude Code)

**Cambiamenti rispetto alla v1 di questo prompt** (post-feedback Carlo 19/5 notte):

- ❌ Rimossa Azione 1 v1 "restyle palette nucleo magenta/fucsia": la palette ufficiale Angelini deve restare intatta su tutti i componenti (nucleo + orbital rings + satellites/elettroni). Niente colori nuovi.
- ✅ Estesa Azione 2 v1: oltre alle 4 PillarCard esterne, il micro-float idle si applica anche alle label INTERNE del nucleo ("NUCLEO · 00" + "Engaged Research").
- ✅ Aggiunta Azione 3 v2 (nuova): micro-float idle applicato anche al Cross-OpCo Tracker (numeri "01-04" sopra le sfere + nome OpCo nella callout attiva). Questo era un pattern atomic-like del sito (4 OpCo che gravitano intorno al MBA Gateway) che restava fuori dal v1 — Carlo ha esplicitato che vuole il float su tutti i pattern atomic-like.

**Per la futura Industry Learning Ecosystem network visualization in `/percorsi/imprese`**: la stessa logica di micro-float idle desincronizzato va applicata ai 4 nodi OpCo centrali + 8-10 nodi partner esterni (system integrator, digital solution provider, automation provider, biotech, ecc.). Aggiungilo come istruzione separata nel `[[Prompt Claude Code - percorsi imprese + persona 3D]]` quando lo lanci, oppure aggiungilo in una seconda iterazione su `/percorsi/imprese`. Non è in scope di questo prompt (che riguarda solo Pillars + CrossOpCoTracker componenti esistenti).

**Palette degli elettroni — chiarimento**:
- Elettrone orbita 1 (esterna): warm cream → ocra-400 = `rgba(255,232,180,1)` → `rgba(255,130,0,1)` — IDENTICO al satellite attuale orbita 1 (riga ~191). Solo size più grande (size-2.5 → size-3.5).
- Elettrone orbita 2 (media): white → ang-200 = `rgba(255,255,255,0.9)` → `rgba(184,212,238,1)` — IDENTICO al satellite attuale orbita 2 (riga ~208). Solo size più grande (size-2 → size-3).
- Elettrone orbita 3 (interna): warm cream → ocra-400 stesso pattern di orbita 1 ma size minore.

Tutti i colori sono già nel codebase. Nessun nuovo gradient.

**Pattern tecnico orbital — semplificato**: il pattern wrapper-rotante + elettrone offsettato sul perimetro è il più semplice e cross-browser. Il prompt suggerisce esplicitamente questo come default. Claude Code può scegliere alternative se trova vantaggi, ma è il pattern di riferimento.

**Hover behavior preservato**: durations dimezzate quando hover (14→7, 18→9, 10→5). Mantiene la signature interattiva attuale del Nucleus.

**Tempo stimato Claude Code**: 30-40 min totale. Le 3 azioni sono indipendenti — può procedere in qualsiasi ordine.

**Post-execution validation** — i punti chiave da verificare visivamente:
- (a) Le 3 orbite sembrano ferme nello spazio?
- (b) I 3 elettroni gialli/ocra sono ben visibili che scorrono lungo le ellissi?
- (c) Le label "NUCLEO · 00" + "Engaged Research" galleggiano in modo diverso una dall'altra?
- (d) Le 4 PillarCard galleggiano indipendentemente l'una dall'altra (non sincronizzate)?
- (e) I 4 numeri "01-04" sopra le OpCoSphere galleggiano indipendentemente?
- (f) Il nome OpCo nella callout attiva galleggia leggermente quando scrolli?

Se uno dei 6 non regge, si ri-itera quella singola istruzione.
