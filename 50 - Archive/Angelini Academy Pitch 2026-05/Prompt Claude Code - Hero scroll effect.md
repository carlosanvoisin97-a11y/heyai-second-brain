---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione in corso su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt dedicato SOLO al miglioramento dell'effetto scroll Hero (HeroBridgeConstellation) — sessione focalizzata senza altri task in parallelo
created: 2026-05-15
updated: 2026-05-15
status: ready-to-paste
---

# Prompt Hero scroll effect — sessione dedicata

> Focus: alzare la qualità visiva e narrativa del ponte scroll-driven nell'Hero. NIENTE altri task in parallelo — solo questo componente, iterando per polish progressivo.

---

## Prompt da incollare

```
Ciao. Sessione DEDICATA SOLO al miglioramento dell'effetto scroll della Hero. Non toccare nessun altro componente o pagina — solo HeroBridgeConstellation.tsx + Hero.tsx + eventuale Mini3DSphere.tsx (se serve toccarlo per le sfere).

CONTESTO
File principale: src/components/HeroBridgeConstellation.tsx (250 linee).
Componente accessorio: src/components/Mini3DSphere.tsx (per le sfere).
Montato dentro: src/components/Hero.tsx riga 35.

Stato attuale (v2 feedback 17/5 già applicato): 7 sfere su arco parabolico, 4 layer di arco SVG (wide glow + medium glow + core + thin highlight), 2 colori brand alternati (#FF8200 arancio + #005EB8 blu chiaro), scroll-driven con sfere che si accendono progressivamente (opacity 0.18→1, scale 0.45→1.25), arco che si disegna [0.02, 0.78] del scrollYProgress.

PROBLEMA
La qualità visiva percepita è ancora bassa rispetto al posizionamento "fondazione editoriale premium" (riferimenti: IE Insights, Aeon, Fondazione Veronesi, Lusion.co, Stripe sezioni hero). Il ponte appare meccanico, le sfere isolate dall'arco, l'effetto non comunica la metafora "Building bridges in education" con la forza che serve.

OBIETTIVO
Trasformare HeroBridgeConstellation in un effetto scroll di qualità cinematic-editorial, leggibile come "metafora ponte" senza didascalia. Iterare per polish progressivo in 3 round dentro questa stessa sessione.

═══════════════════════════════════════
ROUND 1 — DIAGNOSI + FIX STRUTTURALI
═══════════════════════════════════════

Diagnostica prima di toccare:
1. Apri HeroBridgeConstellation.tsx e Hero.tsx e mappa tutti i parametri animati (path d, stroke, opacity, scale, range scrollYProgress, lightUpAt delle sfere).
2. Identifica i 3-5 problemi tecnici più probabili dietro la percezione di "bassa qualità". Probabili candidati:
   - Curva parabolica troppo simmetrica → non aerodinamica
   - Sfere posizionate sull'arco ma senza connessione visiva (no "passaggio" della luce)
   - Glow stratificato presente ma forse troppo monocromatico (manca dispersione cromatica reale tipo lens flare)
   - Mix-blend-mode screen su mesh scuro → forse il contrasto non è abbastanza forte
   - Range animazione arco [0.02, 0.78] vs sfere lightUpAt fino a 0.67 → forse il timing andrebbe ricalibrato per dare un climax
   - Manca subtle parallax tra arco e sfere (depth)
   - Manca un "evento" finale che cristallizzi la metafora (es. tutto si accende insieme al climax)

Fix strutturali Round 1:
A. Riprogetta la curva: invece di parabola simmetrica `M 5 42 Q 50 -50 95 42`, prova una curva di Bezier cubica con due punti di controllo asimmetrici (più editoriale, meno meccanica). Es. `M 5 44 C 28 -20, 68 -8, 95 38` o variazioni che dia l'impressione di un ponte "in volo" non geometrico.
B. Sincronizza meglio sfere ↔ arco: ogni sfera deve "accendersi" nel momento in cui l'arco la attraversa visivamente, non in tempi disconnessi. Calcola il scrollYProgress corrispondente alla posizione t di ogni sfera sulla curva e usa quello come lightUpAt esatto.
C. Aggiungi connessione luce: quando l'arco attraversa una sfera, un piccolo flash diretto al centro (lens flare radiale o additive blend). Pattern: usa Framer Motion `whileInView` con keyframes [0, 1.4, 1] su scale e [0.18, 1.2, 1] su opacity per dare un beat di accensione, non una transizione lineare piatta.
D. Climax: nel range [0.65, 0.85] del scrollYProgress, l'intero arco completo viene "rivelato" con un sustain di brillantezza (tutte le 7 sfere a opacity 1 + arco a full opacity + ultimo flash bianco sopra le linee). Subito dopo, fade-out graduale verso il contenuto sottostante.

Esegui Round 1 ed esegui il build (npm run build). Mostrami il diff dei file modificati e descrivimi in 5 righe cosa hai cambiato e perché.

═══════════════════════════════════════
ROUND 2 — POLISH ESTETICO + MICRO-PARTICLES
═══════════════════════════════════════

Dopo Round 1, applica polish:
A. Dispersione cromatica reale (chromatic aberration sottile sull'arco): duplica il path con offset di -0.5px / +0.5px e colore sfumato verso magenta/cyan in opacity 0.15, mix-blend-mode screen. Crea senso di luce reale, non grafica vettoriale piatta.
B. Micro-particles: 12-20 piccoli punti di luce fluttuanti (size 1-3px) attorno e sotto l'arco, distribuiti pseudo-casualmente. Animazione: drift verticale + fade in/out a velocità diverse (3-7s ciascuno). Mai più di 20 attivi insieme. Performance: usa CSS `transform` + `will-change` su un container singolo, no JS per ogni frame.
C. Subtle parallax: durante lo scroll, l'arco si muove a velocità 1.0, le sfere a 1.05 (foreground), le particles a 0.95 (background). Tre profondità minime ma percepibili.
D. Mini3DSphere — verifica se ha bloom/glow volumetrico convincente. Se è una sfera piatta con gradient radiale, aggiungi: highlight specular (un piccolo punto bianco off-center), shadow occlusion interna sotto, halo esterno radiale che si fonde nello sfondo.

Esegui Round 2 ed esegui il build. Mostrami il diff e segna eventuali bottleneck di performance (es. troppi DOM nodes, reflow su scroll, layer painting non promosso).

═══════════════════════════════════════
ROUND 3 — ACCESSIBILITY + RESPONSIVE + QA
═══════════════════════════════════════

Dopo Round 2:
A. Reduced motion fallback: se `prefers-reduced-motion: reduce`, mostra solo l'arco statico già disegnato (no animazione di accensione progressiva, no drift, no particles). Le sfere statiche a opacity 0.9.
B. Mobile (768px e sotto): la curva attualmente potrebbe essere troppo ampia o troppo bassa. Verifica viewport mobile, riposiziona se serve, riduci numero di particles a 6-8, semplifica i layer dell'arco a 3 (drop il thin highlight).
C. Performance check: apri il file e verifica che gli useTransform siano dichiarati a livello componente (non dentro render loop), che il SVG non abbia troppi paths animati simultaneamente (max 6), che le particles non causino layout thrashing.
D. Accessibility: verifica che tutti gli elementi siano `aria-hidden` (la metafora ponte è puramente decorativa), che la headline e i CTA rimangano leggibili durante tutta l'animazione (no overlap con sfere a opacity > 0.6 in posizione headline).

Esegui Round 3 + build finale. Mostrami il diff finale dei 3 round consolidati.

═══════════════════════════════════════
VINCOLI INVALICABILI
═══════════════════════════════════════

- Palette: SOLO arancio #FF8200 + blu chiaro #005EB8 + bianco. Niente nuovi colori (anche se il mood te lo suggerirebbe, il brand book non li permette).
- Tipografia: NON toccare la headline o i CTA. Solo l'effetto scroll dietro/intorno alla headline.
- Performance: target Web Vitals invariati. Niente librerie nuove (no Lottie, no Three.js, no GSAP). Solo Framer Motion + SVG già in uso.
- Pulizia: niente librerie di particles esterne. Particles fatte a mano in SVG/CSS.
- Niente touch su altri componenti (Hero.tsx solo se strettamente necessario per riarrangiare lo z-index o gli scrollOffset).

═══════════════════════════════════════
DELIVERABLE
═══════════════════════════════════════

Alla fine dei 3 round:
- Diff completo dei file modificati (HeroBridgeConstellation.tsx + eventuali edit a Mini3DSphere.tsx + Hero.tsx)
- Conferma build passa pulito
- Note tecniche: cosa hai cambiato e perché, in 8-10 righe totali
- Eventuali punti dove hai dovuto fare scelte stilistiche autonome che vuoi sottoporre a Carlo
- Se ti rimane tempo/energia: una variante alternativa B della curva (es. curva a doppia gobba, o arco che si "spezza" e poi si ricompone) come backup da mostrare a Carlo se la versione principale non convince

Procedi con Round 1. Quando lo finisci, fai una pausa visiva (output di sintesi) prima di partire con Round 2. Stesso prima di Round 3. Iterazione per polish progressivo, non tutto in un colpo.
```

---

## Note operative per Carlo

**Cosa fa Claude Code con questo prompt**:
1. Round 1 — fix strutturali (curva, sincronizzazione sfere-arco, climax)
2. Round 2 — polish estetico (chromatic aberration, particles, parallax, bloom 3D delle sfere)
3. Round 3 — accessibility + responsive mobile + QA performance
4. Tra ogni round si ferma per sintesi visiva → puoi interrompere se non ti convince la direzione

**Cosa NON tocca**:
- Headline + CTA Hero (invariati)
- Altri componenti del sito (Pillars, PersonaSelect, ecc.)
- Palette (solo arancio + blu chiaro + bianco come da brand book)
- Tipografia
- Performance (no librerie nuove, solo Framer Motion + SVG già presenti)

**Cosa puoi fare dopo**:
- Se ti piace, lo lasci così
- Se vuoi un'altra direzione, il prompt include "variante alternativa B" come backup
- Se ti convince a metà, indichi a Claude Code in conversazione quale dei round preferisci consolidare

**Reference visivi che puoi mandare a Claude Code in chat per affinare** (opzionale, non obbligatorio):
- Screenshot di siti che ti piacciono (IE Insights, Aeon, Lusion, Active Theory, Stripe hero)
- Mood board Behance / Awwwards SOTD
- Frame di video di reference

Se non li hai, il prompt da solo dovrebbe portare a un risultato decente — Claude Code ha autonomia sufficiente per direzione editoriale-cinematic-premium.

---

*Versione 1.0 — 15/5/2026 (sera tardi). Sessione dedicata Hero scroll, niente altri task in parallelo come da decisione strategica Carlo.*
