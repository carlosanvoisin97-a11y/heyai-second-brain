---
type: deliverable
status: draft
created: 2026-05-17
project: Angelini Academy
parent: "[[_Angelini Academy]]"
tags: [video, pitch, veo, ai-generation, test]
---

# Video Reel Veo 3.1 — Prompt Pack

> **Scopo**: 4 prompt cinematici (8s ciascuno) per generare un reel da ~35s da usare come elemento "wow factor" nel pitch finale Angelini Academy del 31/5/2026. Workflow Veo 3.1 Fast via Gemini app (Google AI Pro $19.99/mese). Test esplorativo, decisione di inserire in pitch da prendere dopo aver visto i risultati.

## Contesto

- **Tono scelto**: energico talent-pipeline (vs. establishing fondazione)
- **Lingua voice-over**: English (vocazione internazionale Angelini + leadership europea)
- **Mood narrativo**: ricerca → ponti → AI/innovazione → futuro
- **Brand assets**: blu primario #003087, font Merriweather + Barlow (brand book post-swap 15/5)
- **Voice mix script**: female (1, 3) + male (2, 4) — alterna ritmo

## Architettura del reel (32s + 3s closing = ~35s)

| Clip | Tema | VO line EN | Mood visivo |
|---|---|---|---|
| 1 | Hook / Talent | "Where talent meets purpose…" | Lab biotech, luce alba, ricercatrice giovane |
| 2 | Bridges / Connection | "…we build bridges between knowledge and impact." | Drone aereo città Europa, network luminoso |
| 3 | Innovation / AI | "Powered by research. Shaped by AI." | Sala learning con olografici, cohort professionale |
| 4 | Future / Aspiration | "This is Angelini Academy. Building bridges in education." | MBA executives, golden hour, campus |
| Closing | Static lockup | — | Blu #003087 + logo + claim, 2-3s |

## Prompt 1 — Opening / Hook (8s)

```
Slow cinematic dolly-in on a young European female researcher in her late twenties, wearing a clean white lab coat, leaning over a high-precision instrument in a sunlit modern biotech laboratory. Soft morning light pours through floor-to-ceiling windows, catching glass beakers and digital displays. She looks up from the microscope, a faint confident smile crossing her face. In the background, two colleagues talk softly while interacting with a translucent data screen. Cinematic shallow depth of field, warm color grade with hints of deep blue in the lab equipment. Camera: smooth slow dolly forward, then a subtle upward tilt. Ambient sound: low laboratory hum, soft footsteps, rising orchestral strings. Female voiceover in clear British English: "Where talent meets purpose..." Widescreen 16:9, photorealistic, cinematic film look.
```

## Prompt 2 — Bridges / Connection (8s)

```
Aerial drone shot at dawn sweeping over a European cityscape that blends modern glass towers with classical architecture — domes, bridges, university campuses. Thin glowing networks of light begin to connect rooftops across the city, forming a luminous web of knowledge. The bridges across the river light up first, then ripple outward. Color grade: cinematic teal and orange with a distinctive deep Angelini blue accent (hex #003087) in the network lines. Camera: continuous aerial sweep banking gently left. Atmosphere: dawn blue hour transitioning to first golden light. Ambient sound: soft wind, distant city waking up, rising ambient choral pad with airy synthesizer. Male voiceover in warm British English: "…we build bridges between knowledge and impact." Widescreen 16:9, photorealistic, cinematic film look.
```

## Prompt 3 — Innovation / AI Layer (8s)

```
Medium tracking shot of a diverse cohort of six international professionals in their thirties and forties — smart business-casual attire — gathered around a large interactive table in a sleek modern executive learning space. Above the table, floating holographic data visualizations slowly rotate: charts, network graphs, AI-generated insights in clean line work. A woman in a deep blue blazer reaches up and points to a node; the network responds with a subtle pulse of light. Cool white modern lighting with soft blue accent uplighting. Color grade: clean, contemporary, high contrast, deep blue tones. Camera: smooth lateral tracking shot moving around the group, slight rotation. Ambient sound: low electronic pulse, soft conversational murmur, subtle technological hum. Female voiceover in confident American English: "Powered by research. Shaped by AI." Widescreen 16:9, photorealistic, cinematic film look.
```

## Prompt 4 — Future / Aspiration (8s)

```
Slow tracking shot following from behind a group of five international MBA executives — diverse, confident, late thirties — walking together through a modern Mediterranean university courtyard at golden hour. They wear smart minimal attire, exchange a few words, one laughs softly. Ahead of them rises a striking building façade that blends classical Italian architecture with contemporary glass — the kind of building you'd expect from a prestigious European academy. Warm golden hour sunlight, long shadows, gentle lens flare. As they walk forward, the camera cranes upward to reveal the full courtyard and the distant Roman cityscape beyond. Color grade: warm, hopeful, with a subtle Angelini blue accent (#003087) in the entrance signage. Ambient sound: footsteps on stone, distant city ambience, swelling orchestral strings with hopeful brass crescendo. Male voiceover in warm British English: "This is Angelini Academy. Building bridges in education." Widescreen 16:9, photorealistic, cinematic film look.
```

## Closing frame (statico)

File pronti:
- `Video Reel Closing Frame.svg` — vettoriale 1920×1080, source-of-truth
- `Video Reel Closing Frame.png` — 1920×1080 PNG generato dalla SVG, da usare come reference image per Veo image-to-video

In CapCut: importa la SVG (o la PNG) come ultima clip, tieni 2-3 secondi mentre la musica chiude. Se vuoi un effetto più dinamico, applica un leggero zoom-in (Ken Burns) sul logo durante la sosta. Alternativa: genera la versione animata con Veo (vedi sotto).

## Closing animation (Veo 3.1 image-to-video) — versione BRIDGE BUILD

**Workflow**: Gemini app → modello Veo 3.1 Fast → image-to-video → carica `Video Reel Closing Frame.png` → incolla prompt sotto. Veo 3.1 Fast esce a 8s fissi: poi trimma in CapCut a 4s tenendo ingresso del fascio + costruzione completa del ponte + breve respiro (taglia via particelle e hold finale).

Sequenza: fascio di luce entra da sinistra e traversa il frame L→R, costruendo nella scia un ponte pedonale stile **Millennium Bridge** (supporti laterali + cavi sospesi + deck orizzontale). Ogni anchor sul deck si accende con burst di luce al passaggio del fascio. Una volta completato, particelle luminose scorrono sul deck L→R. Alone sul titolo al completamento. Frame finale = ponte pedonale ricostruito, riconoscibile, in luce pura su sfondo blu.

```
Cinematic brand reveal animation, starting from the uploaded reference image. The composition stays fixed — deep blue background (#003087), centered serif title "Angelini Academy" with italic tagline "Building bridges in education." below, camera locked, no panning, no shake, no cuts.

THE ANIMATION

A single intensely bright streak of warm white light enters the frame from the far left edge at the height of the lower third and travels rightward across the entire width of the frame. In its wake, it constructs a minimalist modern pedestrian suspension bridge in the style of London's Millennium Bridge — two slender supports rising from below the frame edges, thin elegant suspension cables curving across the span, and a clean horizontal deck connecting them. Every structural element materializes in pure white luminous lines against the deep blue background, only after the moving light beam has passed that point. The bridge is built progressively, anchor by anchor.

As the streak progresses, each anchor point along the deck pulses with a brief sharp burst of starlight, like a star turning on, and settles into a soft halo.

Once the bridge is fully constructed and the streak reaches the right edge, small luminous light particles begin streaming along the deck from left to right, like distant pedestrians or pulses of knowledge crossing the span at night.

A soft warm halo radiates briefly behind the centered title as the bridge completes, then settles.

The final frame holds a clearly recognizable, fully formed luminous pedestrian bridge in the lower third — architectural, precise, ethereal — with the title and tagline locked above. The composition reads unmistakably as "this is a bridge."

VISUAL TONE: architectural elegance, institutional gravitas with cinematic energy. The bridge looks like a real piece of contemporary European architecture rendered in pure light — confident, modern, identifiable as a pedestrian suspension bridge. No lens flare, no rainbow colors, no fantasy effects, no flashing, no text appearing or disappearing.

COLOR PALETTE LOCKED: deep blue #003087 background only, pure white typography and white luminous bridge structure. No other hues.

AUDIO: a rising whoosh as the light beam travels, soft crystalline chimes on each anchor pulse, orchestral strings swelling to a warm major chord as the bridge completes, gentle fade-out. No voice-over.

Widescreen 16:9, 1080p, photorealistic light rendering, broadcast quality.
```

### Versione SUBDUED (alternativa contemplativa, se la IMPACT esce troppo carica)

```
Subtle cinematic animation of the uploaded brand lockup. Keep the composition fully steady — no panning, no shake, no cuts. Apply only these motions: (1) a very slow push-in toward the centered title, scale from 1.00 to 1.04 across the full 8 seconds, smooth ease-in-out; (2) the two thin curved bridge lines in the lower third gently pulse with soft luminosity travelling from left to right, pulse cycle approximately 3 seconds, smooth and continuous; (3) the five small white nodes along the bridge twinkle slowly out of sync, like distant city lights at night; (4) a soft halo glow radiates outward from behind the "Angelini Academy" title for the first 2 seconds, then settles back into a calm steady state; (5) the italic tagline "Building bridges in education." subtly lifts upward by 4 pixels over the first 2 seconds while fading from 70% to full opacity, then holds. No new text appears, no flashing, no particles flying. Color palette locked: deep blue background (hex #003087), pure white typography, white highlights at 60% opacity. Mood: contemplative resolution — the visual equivalent of a final musical chord settling. Audio: soft orchestral resolve with sustained strings and low piano, a single gentle swell in the first 3 seconds, ambient pad underneath, no voice-over, smooth fade-out in the last second. Widescreen 16:9, 1080p, broadcast quality, cinematic clean lockup.
```

### Fallback text-to-video (se non carichi la PNG)

```
Cinematic static brand lockup animation, 16:9 widescreen, deep blue solid background (hex #003087). Centered serif title "Angelini Academy" in pure white, heavy serif font in the style of Merriweather, letter-spacing tight. Below it, an italic tagline in white "Building bridges in education." in a lighter weight, slightly smaller. Below the tagline, a thin horizontal white divider line at 45% opacity, 60 pixels wide. Below the divider, a small all-caps kicker "A culture-led research academy" in clean sans-serif, generous letter-spacing, white at 65% opacity. In the lower third of the frame, an abstract minimalist illustration of two thin curved bridge lines forming a luminous arc across the entire frame at 18% opacity, with five small glowing white nodes spaced along the arc. Subtle animation across 8 seconds: very slow push-in (scale 1.00 to 1.04), the five bridge nodes gently twinkle out of sync, a soft halo glow radiates from behind the title for the first 2 seconds and then settles, the italic tagline subtly lifts upward by 4 pixels in the first 2 seconds. No camera shake, no flashing, no new text appearing, no particles flying. Mood: contemplative resolution, the visual equivalent of a final musical chord settling. Audio: soft orchestral resolve with sustained strings and a low piano sustain, gentle ambient swell in the first 3 seconds, no voice-over, smooth fade-out in the last second. 1080p, broadcast quality.
```

### Note operative closing animation

- **Image-to-video è la scelta giusta**: l'unica cosa che non si può sbagliare è il blu #003087 e la tipografia. Caricando la PNG, Veo parte già con tutto al posto giusto e applica solo il movimento.
- **No voice-over**: la clip 4 ha già chiuso con "This is Angelini Academy. Building bridges in education." — il closing è la coda musicale, non un nuovo messaggio.
- **Genera 2 varianti** sulla stessa stringa: Veo è instabile sulle animazioni "minime" (a volte esagera il movimento, a volte resta troppo statico). Con 2 generazioni scegli la più equilibrata.
- **Architettura reel aggiornata**: 4 clip cinematiche × 8s + closing animato × 8s = **40 secondi totali**. Se 40s è troppo lungo per il pitch slot, tagli 1-2s dalla coda della clip 4 e/o accorci il closing in CapCut a 5-6s.

## Workflow operativo (1-2 ore)

1. **Sub Google AI Pro** (~5 min, $19.99/mese, cancellabile dopo test) — accesso a Veo 3.1 Fast con quota 90 generazioni/mese.
2. **Generazione** (~30 min) — Gemini app, modello Veo 3.1 Fast, aspect 16:9. Incolla prompt 1, genera 2 varianti. Ripeti per 2-3-4. Totale 8 generazioni su 90 disponibili.
3. **Selezione** (~15 min) — scegli la migliore per ogni clip, scarica gli MP4.
4. **Montaggio CapCut** (~30 min) — concatena clip 1→2→3→4, aggiungi la SVG closing per 2-3s. Volume audio nativo Veo da bilanciare con musica di sottofondo (se i VO si sentono già bene, basta abbassare un po' i background ambient).
5. **Export** — 1080p, MP4 H.264, 25 fps.

## Note tecniche Veo 3.1 Fast

- Risoluzione output: 720p (Fast) — sufficiente per pitch a schermo, upscalabile via Topaz Video AI o simili se serve qualità sito.
- Audio nativo incluso: ambient + music + voice-over in un solo passaggio (vantaggio enorme vs Runway che richiede tool separati).
- Quota: 90 generazioni/mese con Google AI Pro $19.99 (Veo 3.1 Fast). Veo 3.1 Standard ha quota minore ma qualità superiore — vale upgrade solo se le Fast non convincono.
- Aspect ratios supportati: 16:9 (landscape, scelto), 9:16 (portrait per social).

## Rischi noti / aspetti da sorvegliare

- **Volti generati**: Veo non garantisce continuità del volto tra clip diverse. Per un reel istituzionale dove i protagonisti sono "rappresentativi" e non "named talent" non è un problema. Se vuoi continuità (es. stessa ricercatrice in clip 1 e 3), serve image-to-video su Runway Gen-4.5 con reference image, ma costa più tempo.
- **Brand color #003087**: Veo non rispetta hex precisi al 100%, solo come "deep Angelini blue". Per il blu esatto, lo fissi in post (color grading CapCut) o lo riservi al closing frame statico (dove è SVG = preciso).
- **VO inglese**: Veo è ottimo su British/American English. Se preferisci un'altra inflection (irlandese, neutra), aggiungi un descrittore nel prompt.
- **Architettura "Mediterranean"** (clip 4): Veo tende a interpretare bene "Italian classical architecture mixed with modern glass" se prompt è chiaro. Se vuoi referenze specifiche (es. campus IE Madrid, SDA Bocconi), puoi caricare un'immagine di reference in Gemini app come input image-to-video.

## Prossimi step

- [ ] Carlo sottoscrive Google AI Pro e testa Prompt 1
- [ ] Se Prompt 1 convince → procede con 2-3-4 e monta il reel completo
- [ ] Se reel finale è all'altezza → decisione di inserirlo nel pitch 31/5 (slot suggerito: dopo intro, prima dell'approfondimento strategia) → aggiornare [[_Angelini Academy]] §Layer 4 Delivery handoff
- [ ] Se reel non convince → fallback workflow Runway Gen-4.5 image-to-video (più controllo brand, più tempo)

## Riferimenti

- [Veo 3.1 documentation – Google](https://ai.google.dev/gemini-api/docs/video)
- [Veo 3.1 Lite announcement](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-lite/)
- [Best AI video generators 2026 – Pixflow](https://pixflow.net/blog/best-ai-video-generator/)
- Brand book: [[80 - Sources/Files/Angelini Academy/Brand Book Angelini Academy 2024 - Manuale Elementi Base V1.0|Brand Book Angelini 2024]]
