---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt operativo per refactor del comportamento dinamico dell'atomo Industry Learning Ecosystem in `src/pages/PercorsiImprese.tsx`. Cambiamenti chirurgici: (1) fermare la rotazione delle 3 orbite ellittiche (oggi ruotano a 60s/75s/45s — diventano backdrop statico); (2) aggiungere 3 nuove sfere gialle piccole decorative (senza label) che scorrono lungo i path delle 3 orbite tramite SVG animateMotion + mpath; (3) micro-float idle desincronizzato su tutte le 12 scritte dell'atomo (4 OpCo nucleo + 8 partner-elettroni). Le 8 imprese partner esistenti restano nelle loro posizioni cardinali fisse con label invariate.
created: 2026-05-19
updated: 2026-05-19
status: ready-to-paste
source_input: immagine reference atomo classico condivisa da Carlo + struttura attuale del componente atomico in PercorsiImprese.tsx (righe ~590-644 per orbite + ~652-693 per OpCo nucleo + ~702+ per partner-elettroni)
related: "[[_Angelini Academy]] · [[Mockup Sito - Struttura e Copy Completo]] · [[Prompt Claude Code - percorsi imprese + persona 3D]] · [[Prompt Claude Code - Refactor atomo Pillars nucleo + orbite]] (superseded)"
---

# Prompt per Claude Code — Refactor atomo Industry Learning Ecosystem

> Patch chirurgica al solo componente atomo dentro `src/pages/PercorsiImprese.tsx` (sezione "Industry Learning Ecosystem", riga ~590 e successive). L'atomo deve assomigliare di più all'immagine reference condivisa da Carlo: orbite ellittiche fisse + elettroni che scorrono lungo i perimetri delle orbite. Le 8 imprese partner esistenti restano fisse nelle loro posizioni cardinali con label invariate (3 elettroni decorativi aggiunti sono separati, senza label, solo per leggibilità struttura atomica). Tutte le 12 scritte dell'atomo (4 OpCo nucleo + 8 partner) ricevono micro-float idle desincronizzato. **Nessun cambio palette** — i colori restano #6B2C91 viola (Pharma + Fater), #E4002B rosso (Industrial Tech + Consumer), #F6BE00 giallo brand (partner + nuovi elettroni decorativi). Nessuna nuova dipendenza.

## Comportamento dinamico richiesto

1. **3 orbite ellittiche**: oggi ruotano via `<motion.g animate={{rotate: 360}}>` a 60s/75s/45s (una counter-rotation). Diventano **statiche** — restano disegnate come 3 ellissi inclinate (una dritta, una a +35°, una a -35°) intorno al nucleo, backdrop strutturale dell'atomo.
2. **8 imprese partner-elettroni esistenti** (Biotech · Life sciences · HR tech · Manufacturing excellence · Digital solution · System integrator · Learning analytics · Automation provider): restano **invariate** nelle loro posizioni cardinali a 45° sulla corona raggio 28 + label cardinali esterne mantenute. 3 di queste hanno `pulse: true` — il pulse scale resta invariato.
3. **3 nuove sfere gialle decorative**: aggiunte SENZA label, una per orbita, scorrono lungo i 3 path ellittici a velocità diverse via SVG `animateMotion` + `mpath`. Sono piccole (circle r=1.2-1.5 nel viewBox 100×80), giallo brand #F6BE00 con leggero glow, NON cliccabili, solo decorative. Sono separate dalle 8 partner — la lettura è "queste girano lungo le orbite, quelle stanno ferme con i nomi".
4. **Float idle desincronizzato su tutte le 12 scritte**: 4 OpCo label (Pharma · Industrial Tech · Consumer · Fater) + 8 partner-elettroni label (Biotech · Life sciences · ecc.) ricevono un wrapper motion.div con `animate: {y: [0, -3, 0]}` con durations 5-7s desincronizzate e delay sfalsati. Le label restano nelle loro posizioni fisse — solo galleggiano leggermente.

## Sintesi 3 azioni

| # | Componente / Sezione | Tipo modifica | Effetto richiesto |
|---|---|---|---|
| 1 | 3 `motion.g` orbite (~595-644) | Rimozione `animate` + `transition` da motion.g | Le 3 orbite diventano `<g>` statiche, niente più rotazione |
| 2 | NUOVO blocco 3 sfere gialle decorative dentro SVG (subito dopo le 3 orbite, prima della chiusura `</svg>`) | Aggiunta SVG `<circle>` + `<animateMotion>` con `<mpath>` che segue path ellisse | 3 elettroni gialli piccoli che scorrono lungo le 3 orbite a velocità diverse |
| 3 | 4 OpCo label + 8 partner-elettroni label | Wrap delle label `<div>` esistenti in `motion.div` con float idle | Tutte le 12 scritte galleggiano leggermente, timing desincronizzato |

---

## Prompt da incollare

```
Ciao. Refactor chirurgico dell'atomo Industry Learning Ecosystem in src/pages/PercorsiImprese.tsx (Section 2 della pagina, riga ~590 e successive). Tre azioni mirate. Resto del file invariato. Niente nuove dipendenze.

VINCOLO CRITICO: NESSUN cambio di palette colori. Le 4 OpCo nucleo restano #6B2C91 viola (Pharma + Fater) e #E4002B rosso (Industrial Tech + Consumer). Le 8 imprese partner-elettroni restano #F6BE00 giallo brand. Le 3 nuove sfere decorative sono dello stesso #F6BE00. Niente cambi a position, size delle 8 partner esistenti, labelPos, pulse behavior.

═══════════════════════════════════════
1. ORBITE — fermare la rotazione delle 3 ellissi
═══════════════════════════════════════

PROBLEMA
Oggi le 3 ellissi orbita sono ognuna dentro un `<motion.g animate={{rotate: ...}}>` con transition `duration: 60s/75s/45s repeat Infinity linear` (vedi righe ~595-644 del file). Effetto risultante: le 3 orbite ruotano continuamente attorno al centro nucleo (50,40) a velocità diverse, una counter-rotation. Carlo vuole orbite STATICHE: restano disegnate come 3 ellissi inclinate fisse, backdrop strutturale dell'atomo.

AZIONE
Sostituisci ogni `<motion.g animate={{rotate: ...}} transition={...} style={{transformOrigin: '50px 40px', transformBox: 'fill-box'}}>` con `<g>` statico. Rimuovi anche `animate`, `transition` e `style` ridondanti. Mantieni invariati gli attributi delle `<ellipse>` interne (cx, cy, rx, ry, stroke, strokeOpacity, strokeWidth, transform).

Risultato finale (3 orbite statiche):

<svg viewBox="0 0 100 80" ...>
  ...
  {/* 3 orbite ellittiche statiche — backdrop atomico, niente rotazione */}
  <g fill="none">
    <ellipse cx="50" cy="40" rx="38" ry="17" stroke="#000000" strokeOpacity="0.32" strokeWidth="0.2" />
  </g>
  <g fill="none">
    <ellipse cx="50" cy="40" rx="38" ry="17" stroke="#000000" strokeOpacity="0.28" strokeWidth="0.2" transform="rotate(35 50 40)" />
  </g>
  <g fill="none">
    <ellipse cx="50" cy="40" rx="38" ry="17" stroke="#000000" strokeOpacity="0.28" strokeWidth="0.2" transform="rotate(-35 50 40)" />
  </g>
  ...
</svg>

Le 3 orbite ora sono 3 ellissi statiche con angolazioni: 0°, +35°, -35°. Aggiornano (e quindi semplificano) il commento sopra il blocco da "ruotano continuamente attorno al nucleo a velocità diverse" a "3 ellissi statiche, backdrop atomico classico — gli elettroni dell'azione 2 scorrono lungo questi path".

═══════════════════════════════════════
2. ELETTRONI DECORATIVI — aggiungere 3 sfere gialle che scorrono lungo le 3 orbite
═══════════════════════════════════════

PROBLEMA
Per replicare visivamente l'atomo classico dell'immagine reference servono elettroni che scorrono lungo i path delle orbite. Le 8 imprese partner esistenti restano FISSE nelle loro posizioni cardinali (per leggibilità label) — sono separate dal concetto "elettrone che gira". Quindi aggiungiamo 3 NUOVE sfere gialle piccole SENZA label, decorative, una per orbita, che scorrono lungo i 3 path ellittici.

AZIONE
Aggiungi un blocco dentro l'SVG dell'atomo, SUBITO DOPO le 3 orbite statiche (azione 1), prima della chiusura `</svg>` o prima che inizino altri elementi nel viewBox.

Pattern raccomandato: SVG `<animateMotion>` con `<mpath>`. Pattern nativo SVG, performance ottimale (browser-driven, no JavaScript loop), funziona seguendo path arbitrari.

Per usare `<mpath>` serve dare un `id` a ciascuna ellisse-orbita. Aggiungi `id="orbit-1"`, `id="orbit-2"`, `id="orbit-3"` rispettivamente alle 3 `<ellipse>` dell'azione 1. NB: la `<ellipse>` con `transform="rotate(35 50 40)"` (orbita 2) e quella con `transform="rotate(-35 50 40)"` (orbita 3) richiedono attenzione — il path che `<mpath>` segue è quello ORIGINALE dell'ellisse (prima del transform). Quindi per far seguire l'elettrone al path già ruotato, va wrappato l'elettrone in un `<g>` con lo stesso transform della sua orbita. Pattern:

Subito dopo le 3 orbite (dentro l'SVG), aggiungi:

{/* 3 elettroni decorativi senza label — scorrono lungo le 3 orbite */}
{/* Orbita 1 (dritta, dur 14s) */}
<circle r="1.4" fill="#F6BE00" opacity="0.95">
  <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
    <mpath href="#orbit-1" />
  </animateMotion>
</circle>
{/* Orbita 2 (rotate +35°, dur 18s, fase opposta) */}
<g transform="rotate(35 50 40)">
  <circle r="1.3" fill="#F6BE00" opacity="0.95">
    <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" begin="-6s">
      <mpath href="#orbit-1" />
    </animateMotion>
  </circle>
</g>
{/* Orbita 3 (rotate -35°, dur 10s, fase intermedia) */}
<g transform="rotate(-35 50 40)">
  <circle r="1.2" fill="#F6BE00" opacity="0.95">
    <animateMotion dur="10s" repeatCount="indefinite" rotate="auto" begin="-3s">
      <mpath href="#orbit-1" />
    </animateMotion>
  </circle>
</g>

NOTE IMPLEMENTATIVE:
— `<mpath href="#orbit-1">` punta tutti e 3 alla stessa ellisse dritta — il wrap in `<g transform="rotate(...)">` applica la rotazione 35°/-35° sia al circle che al path animato, mantenendoli sincronizzati.
— `begin="-6s"` e `begin="-3s"` partono in fase opposta/intermedia per evitare che i 3 elettroni siano allineati nello stesso punto del cerchio all'inizio.
— `rotate="auto"` fa orientare il circle lungo la tangente al path — per un cerchio è invisibile (la sfera è simmetrica), ma se vorrai sostituirlo con una forma asimmetrica in futuro questa orientation è già pronta.
— Le opacity 0.95 e i radii leggermente diversi (1.4/1.3/1.2) danno variazione visiva senza fare 3 elettroni perfettamente uguali.

Aggiungi anche un glow leggero a ogni elettrone via SVG filter `<defs><filter id="electron-glow">...</filter></defs>` se serve enfasi visiva. Pattern semplice:

<defs>
  <filter id="electron-glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="0.5" result="blur" />
    <feFlood floodColor="#F6BE00" floodOpacity="0.6" />
    <feComposite in2="blur" operator="in" />
    <feMerge>
      <feMergeNode />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>

E applica `filter="url(#electron-glow)"` ai 3 `<circle>` elettroni. Se sembra troppo carico visivamente, salta il filter — l'opacity 0.95 sul giallo brand è già visibile su sfondo bianco.

VINCOLI
— I 3 nuovi `<circle>` NON sono cliccabili (no event handler, no cursor pointer).
— Niente label associate. Sono puramente decorative.
— Position size e color delle 8 partner-elettroni esistenti (corona raggio 28, Mini3DSphere size 38, #F6BE00) restano INVARIATE.
— Le 3 orbite restano statiche (azione 1). Solo i 3 nuovi elettroni si muovono.

═══════════════════════════════════════
3. FLOAT IDLE — 12 scritte dell'atomo galleggiano leggermente, desincronizzate
═══════════════════════════════════════

PROBLEMA
Le scritte dell'atomo sono oggi statiche (HTML `<div>` con position absolute via labelStyleFor). Carlo vuole un micro-float idle a tutte le 12 scritte, con timing desincronizzato — danno respiro visivo all'atomo senza distrarre dal contenuto.

Le 12 scritte sono:
— 4 OpCo label nel nucleo: Pharma · Industrial Tech · Consumer · Fater (renderizzate dal map opcoNodes ~652-693)
— 8 partner-elettroni label sulla corona: Biotech · Life sciences · HR tech · Manufacturing excellence · Digital solution · System integrator · Learning analytics · Automation provider (renderizzate dal map partnerNodes ~702+)

AZIONE
Per ogni label `<div>` (12 totali), wrappa il `<div>` esistente in un `<motion.div>` con animazione di idle float. Pattern:

PARTE A — Label OpCo (4)
Nel map opcoNodes, il label è renderizzato come:

<div
  className="pointer-events-none absolute whitespace-pre-line text-center text-[10px] font-bold uppercase leading-tight tracking-[0.2em] text-ang-900"
  style={labelStyleFor(n.labelPos)}
>
  {n.label}
</div>

Trasformalo in:

<motion.div
  className="pointer-events-none absolute whitespace-pre-line text-center text-[10px] font-bold uppercase leading-tight tracking-[0.2em] text-ang-900"
  style={labelStyleFor(n.labelPos)}
  animate={{ y: [0, -3, 0] }}
  transition={{
    duration: 5 + (idx * 0.4),  // 5.0 · 5.4 · 5.8 · 6.2 s desincronizzate
    delay: idx * 0.25,           // 0 · 0.25 · 0.5 · 0.75 s sfalsate
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  {n.label}
</motion.div>

Dove `idx` è l'index del map (0..3). NB: il labelStyleFor restituisce uno style con `transform: 'translate(...)'`. Framer Motion sovrascrive `transform` quando anima `y` — devi PRESERVARE il translate iniziale di labelStyleFor e aggiungerci sopra il `y` animato. Il pattern più pulito:

Opzione (a) — separa il wrapper di posizionamento dal wrapper di animazione (due livelli):

<div
  className="pointer-events-none absolute whitespace-pre-line text-center text-[10px] font-bold uppercase leading-tight tracking-[0.2em] text-ang-900"
  style={labelStyleFor(n.labelPos)}
>
  <motion.div
    animate={{ y: [0, -3, 0] }}
    transition={{
      duration: 5 + (idx * 0.4),
      delay: idx * 0.25,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {n.label}
  </motion.div>
</div>

Il div esterno mantiene il transform di posizionamento (translate -85%/-72px ecc); il motion.div interno fa solo y oscillante. I due transform si compongono senza conflitti. Usa questo pattern.

PARTE B — Label partner-elettroni (8)
Stesso pattern di parte A applicato al label dei partner. Trova nel map partnerNodes (riga ~702+) il `<div>` label esistente e wrappalo in `<motion.div>` annidato. Index `i` del map (0..7) usato per desincronizzare timing:

duration: 5 + (i * 0.3),  // 5.0 · 5.3 · 5.6 · 5.9 · 6.2 · 6.5 · 6.8 · 7.1 s
delay: i * 0.18,           // 0 · 0.18 · 0.36 · 0.54 · 0.72 · 0.9 · 1.08 · 1.26 s

VINCOLI
— Il pulse esistente sulle 3 partner con `pulse: true` (Biotech, HR tech, Learning analytics) resta INVARIATO — il pulse scale vive su un motion.div separato dal positioning. Non interferisce col float idle delle label.
— Il `whileHover` sulle 4 OpCo del nucleo (scale 1.3 + glow boost) resta INVARIATO.
— Niente cambio a position, size, color delle sfere — solo le LABEL ricevono float idle.

═══════════════════════════════════════
NOTE GENERALI
═══════════════════════════════════════

Risultato visivo atteso dopo il patch:
— 3 orbite ellittiche statiche (dritta, +35°, -35°) disegnate fisse attorno al nucleo
— 3 piccoli elettroni gialli (#F6BE00, r=1.2-1.4) scorrono lungo i 3 path ellittici a velocità diverse (10s/14s/18s), partiti in fase sfasata
— 4 OpCo grandi al centro restano cluster denso "massa atomica" (palette viola + rosso, posizioni 48/52 x 38/42 invariate)
— 8 partner gialle restano sui cardinali della corona (con 3 che pulsano come oggi)
— 12 scritte (4 OpCo + 8 partner) galleggiano leggermente con timing diverso ciascuna — sembrano "respirare" individualmente
— Effetto complessivo: atomo classico stile science textbook con orbite chiare + elettroni che girano + label stabili che vibrano discretamente. Più leggibile e meno "kinetico-confusionario" della versione attuale dove le orbite ruotavano e gli elettroni stavano fermi.

Se al primo test risultano troppe sfere visivamente (3 nuovi elettroni + 8 partner + 4 OpCo = 15 sfere totali), avvisami e valutiamo:
- (a) ridurre i 3 nuovi elettroni a 2 (togli quello dell'orbita più lenta)
- (b) ridurre opacity dei 3 nuovi elettroni a 0.7 per minor peso visivo
- (c) ridurre r dei 3 nuovi elettroni a 1.0 per renderli più piccoli e meno competitivi con le 8 partner
- (d) togliere il glow SVG filter

Accessibility: i 3 nuovi elettroni decorativi SVG devono avere `aria-hidden="true"` o essere in un `<g aria-hidden="true">` (non aggiungono semantica). I motion.div delle label non rompono accessibility (il testo resta DOM-readable). Hover behaviors esistenti restano invariati.

Performance: SVG animateMotion è GPU-accelerato dal browser, costo trascurabile per 3 elementi. Motion.div per 12 label oscillanti è anch'esso GPU-compositing (transform, non layout reflow). Nessun impatto percepibile.

Quando hai finito:
1. Verifica con npm run build che TypeScript non lamenti errori
2. Refresh /percorsi/imprese e screenshot dell'atomo Industry Learning Ecosystem per cross-check visivo
3. Committa con messaggio:
"feat(imprese): stable orbits + 3 sliding electrons via animateMotion + desyncronized label float on Industry Learning Ecosystem"

Se uno dei pattern non viene leggibile (es. elettroni troppo veloci/lenti, float troppo marcato, ecc.) ri-itera la singola sezione interessata. Non over-engineer.

Grazie.
```

---

## Note di redazione (per Carlo, non per Claude Code)

**1. Pattern SVG animateMotion** — è la soluzione più snella per far scorrere un elemento lungo un path arbitrario (qui ellisse). Funziona nativo browser, niente JavaScript loops. Le 2 ellissi ruotate (+35°/-35°) richiedono il wrap dell'elettrone in `<g transform="rotate(...)">` perché `mpath` segue il path originale dell'ellisse prima del transform — wrappando insieme circle e mpath nel `<g>` rotato, entrambi vengono ruotati coerentemente.

**2. Trade-off interpretazione B** — la pagina passa da 4 OpCo + 8 partner = 12 sfere → 4 + 8 + 3 = 15 sfere. Carlo aveva detto "se sono troppe sfere togliamo qualcosa" — ho previsto nel prompt 4 strategie di riduzione (togli 1 elettrone, riduci opacity, riduci raggio, togli glow) da applicare se al refresh visivo l'effetto è troppo carico.

**3. Float idle timing** — durations 5-7s sono il sweet spot per float idle "respiratorio" (più lento → impercettibile, più veloce → distrae). 12 elementi con timing desincronizzato non si sincronizzano mai visivamente (rapporti irrazionali tra le durations).

**4. Compatibilità SVG animateMotion + Tailwind/React** — funziona in tutti i browser moderni. Edge case: Safari iOS storicamente aveva bug su animateMotion + transform parent — Carlo ti consiglio di verificare il rendering su iOS Safari dopo il paste se hai dispositivi a portata.

**5. Tempo stimato Claude Code**: 20-30 min. L'azione 1 è 5 min (rimuove animate), l'azione 2 è 15 min (aggiunge SVG block + filter glow), l'azione 3 è 10 min (wraps 12 label).

**6. Status del prompt v2 superseded** (`[[Prompt Claude Code - Refactor atomo Pillars nucleo + orbite]]`) — marcato come superseded in vault. La logica di "float idle desincronizzato" del §3 di quel file resta valida se in futuro vuoi estendere il float anche a Pillars homepage e Cross-OpCo Tracker. Per ora resta non eseguito.

**7. Post-execution validation** — i 6 punti chiave da verificare visivamente:
- (a) Le 3 orbite sono ferme?
- (b) I 3 nuovi elettroni gialli si vedono scorrere lungo le orbite?
- (c) I 3 elettroni girano a velocità diverse (no allineamento permanente nello stesso punto)?
- (d) Le 8 partner restano FERME nelle posizioni cardinali?
- (e) I label OpCo (Pharma · Industrial Tech · Consumer · Fater) galleggiano leggermente in modo diverso uno dall'altro?
- (f) I label partner (Biotech · ecc.) galleggiano in modo diverso uno dall'altro?

Se 1 dei 6 punti non regge, si ri-itera quella sola sezione.
