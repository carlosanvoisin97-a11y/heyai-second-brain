---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt operativo per materializzare il doppio livello in-page su `/engaged-research` post-conferma WhatsApp Elena 20/5 mattina. La pagina resta preview pubblica + nuova sezione community-only dopo la Reading Room — CTA che spiega cosa l'utente troverà nella community + bottone "Entra nella community" che apre i contenuti community direttamente (login illustrativo demo-fluido, no auth real handshake) — contenuti community = paper PDF completi + video pillole ricercatore (Lottie animation placeholder per il pitch) + Paper Discussion Threads contestualizzati + Galileo Reading Room full mode (textarea attivo). Resto della pagina (Galileo Research Engine + Metodologia + Engaged Network outro) invariato.
created: 2026-05-20
updated: 2026-05-20
status: superseded (architettura D1 sostituita da D2 — non incollare)
source_input: conferma WhatsApp Elena 20/5 mattina (sezione preview pubblica + login per accedere community) + verbatim Carlo 20/5 ("Mettiamo questa call to action con la spiegazione di cosa troveranno nella community dopo la reading room. Per le video pillole attualmente mettiamo una Lottie animation. Il login lo mettiamo, nella CTA c'è scritto che ci si iscrive alla community per entrare, ma per la demo entriamo direttamente così è più fluida")
related: "[[_Angelini Academy]] · [[Mockup Sito - Struttura e Copy Completo]] · [[Concept - Engaged Network Community]] · [[Pre-call Elena 18-5 — Strategia Angelini Academy]] §10"
---

# ⚠️ SUPERSEDED — architettura D1 sostituita da D2. Non incollare questo prompt.

> Cambio architetturale Carlo 20/5 sera: invece di doppio livello in-page su `/engaged-research` (state useState locked/unlocked), il laboratorio editoriale completo va dentro `/engaged-network` come blocco aggiuntivo + `/engaged-research` resta interamente pubblica come preview con CTA potenziata verso `/engaged-network`. Vedi `[[Prompt Claude Code - Laboratorio editoriale dentro engaged-network]]` per il prompt corretto. Questo file resta in vault come storico — i pattern di Lottie placeholder + textarea attivo Galileo + paper completi sono ancora riusabili nel nuovo prompt.

---

# Prompt Claude Code — Hub editoriale doppio livello `/engaged-research` [SUPERSEDED]

> Patch chirurgica al solo file `src/pages/EngagedResearch.tsx`. Aggiunge una nuova sezione DOPO la Reading Room esistente che funge da gate community-only illustrativo: CTA con spiegazione + bottone "Entra nella community" che, al click, espande in-page un blocco di contenuti community (paper PDF completi + Lottie video pillole ricercatore + thread discussion + Galileo Reading Room full mode). Login illustrativo demo-fluido (no OAuth real, no validation), pensato per fluidità della demo pitch 31/5. Resto della pagina (Hero + Reading Room + Research Engine + Metodologia + Community CTA outro) invariato.

## Comportamento dinamico richiesto

1. **Stato iniziale** (utente arriva su `/engaged-research`): Hero + Reading Room (6 paper teaser cliccabili come oggi) + **NUOVO blocco "Per accedere a tutto, entra nella community"** con CTA + descrizione di cosa si troverà + bottone "Entra nella community" → resto pagina invariato (Research Engine + Metodologia + Engaged Network outro).
2. **Click bottone "Entra nella community"**: il blocco CTA si trasforma in-place. Animazione di "unlock" fluida (motion height auto, opacity, scale), il bottone CTA scompare/si trasforma in badge "✓ Sei nella community", e SOTTO appare la sezione community con i contenuti gated (paper completi + Lottie video pillole + thread + Galileo full).
3. **Stato unlocked**: l'utente vede tutto il resto della pagina sblocato. Niente persistenza (refresh = torna allo stato locked — è demo fluida, non vera auth). Lo stato vive in React state locale `const [communityUnlocked, setCommunityUnlocked] = useState(false)`.

## Sintesi 5 azioni

| # | Sezione | Tipo modifica | Risultato |
|---|---|---|---|
| 1 | NUOVO blocco "Community Gate CTA" dopo Reading Room | Aggiunta section con messaging + bottone | Spiegazione + invito all'unlock |
| 2 | NUOVO blocco "Community Content" sotto il Gate CTA, condizionale a state | Aggiunta section condizionale (renderizzata se unlocked) | Contenuti community in 4 sotto-sezioni |
| 3 | Sub 2.A: 4 paper completi con download CTA | Riusa i 6 paper Reading Room esistenti, picka 4 + button "Scarica PDF completo" | Mock paper full access |
| 4 | Sub 2.B: 4 video pillole ricercatore (Lottie placeholder) | Componente VideoPillolaCard con Lottie animation o SVG placeholder animato | Format Loops-like 3 min mock |
| 5 | Sub 2.C: Paper Discussion Threads contestualizzati + Sub 2.D: Galileo Reading Room full mode (textarea attivo) | Componenti mock con 2-3 commenti hardcoded per paper + textarea attivo che simula response Galileo | Esperienza community attiva |

---

## Prompt da incollare

```
Ciao. Patch al solo file src/pages/EngagedResearch.tsx per materializzare il doppio livello in-page del hub editoriale (decisione Carlo 19/5 sera + conferma WhatsApp Elena Chiti 20/5 mattina). La pagina resta preview pubblica + nuovo blocco "Community Gate" dopo la Reading Room che, al click di un bottone "Entra nella community", espande in-place un blocco community-only con paper PDF completi + Lottie video pillole + thread discussion + Galileo Reading Room full mode. Login illustrativo demo-fluido — nessun OAuth real, nessuna validation, solo state locale React (refresh torna locked).

VINCOLI:
— NESSUN cambio palette. Accent #005EB8 blu chiaro brand. Ocra #FF8200 #FFC107 per i bottoni CTA come pattern attuale. Niente nuovi colori.
— NESSUNA nuova route, niente cambi a App.tsx, niente cambi al Header.
— Hero + Reading Room + Galileo Research Engine + Metodologia + Engaged Network outro RESTANO INVARIATI. Si aggiungono SOLO 2 nuove section in sequenza tra Reading Room e Galileo Research Engine.

═══════════════════════════════════════
1. STATE — gestione locked/unlocked
═══════════════════════════════════════

Dentro il componente default export EngagedResearch(), prima del return, aggiungi:

import { useState } from 'react'  // se non già importato
const [communityUnlocked, setCommunityUnlocked] = useState(false)

Lo state vive locale, no persistenza (no localStorage — la persistenza è esplicitamente vietata in artifacts/mockup pitch).

═══════════════════════════════════════
2. NUOVA SECTION — "Community Gate CTA" dopo Reading Room
═══════════════════════════════════════

Inserisci IMMEDIATAMENTE DOPO `<EngagedResearchReadingRoom />` (riga ~42) e PRIMA di `<GalileoResearchEngine />` (riga ~45) una nuova section.

Stile: max-w-6xl mx-auto px-6 py-20 lg:py-24, sfondo bg-ang-50.

Struttura section "Community Gate":

— Layout: 2 colonne lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14
— Background card: rounded-[32px] p-10 lg:p-14, gradient da ACCENT (#005EB8) a ang-900 con ambient glow ocra in alto a destra (riusa lo stesso pattern del Community CTA outro esistente in fondo alla pagina, è già stilizzato bene)
— Quando `!communityUnlocked`: contenuto come descritto sotto. Quando `communityUnlocked === true`: il contenuto della CTA scompare con motion.div exit, e al suo posto appare un badge ridotto "✓ Sei nella community" (vedi azione 3).

CONTENUTO STATO LOCKED:

Colonna sinistra:
— Eyebrow font-display tracking-[0.4em] text-[12px] uppercase text-ocra-200: "Hub editoriale · Community-only"
— H2 font-editorial-italic clamp(1.7rem, 2.8vw, 2.5rem) leading-[1.1] tracking-tight text-balance: "Per leggere <span italic ocra-400>tutto il laboratorio editoriale</span>, entra nella community."
— Body text-[15px] leading-[1.65] text-ang-50/85 max-w-2xl mt-5:
  "I sei paper teaser qui sopra sono solo l'inizio. Nella community Engaged Network trovi i paper completi in download, le video pillole dei ricercatori in formato breve, i thread di discussione dove la rete dei 14 atenei partner commenta paper per paper, e Galileo Reading Room in modalità conversazionale aperta."

Colonna destra:
— Lista cosa-trovi (4 bullet con icona check piccola ocra-400, pattern identico al Community CTA outro esistente):
  • Paper completi peer-reviewed + executive summary 1 pagina per cluster business
  • Video pillole ricercatore — 3 minuti per paper, immagini sovrapposte stile Loops
  • Thread di discussione strutturato per paper — alumni MBA, accademici, ricercatori partner
  • Galileo Reading Room conversazionale — interroga il corpus in linguaggio naturale
— Bottone CTA mt-2:
  className="inline-flex items-center justify-center gap-2 rounded-full bg-ocra-400 px-7 py-3.5 text-[14px] font-semibold text-ang-900 transition-all hover:bg-ocra-200 hover:shadow-[0_18px_40px_-12px_rgba(255,130,0,0.55)] w-fit"
  onClick={() => setCommunityUnlocked(true)}
  Testo: "Entra nella community" + arrow svg pattern coerente esistente
— Microcopy sotto il bottone text-[11.5px] leading-[1.5] text-ang-50/55 italic max-w-md:
  "L'iscrizione è gratuita per alumni MBA Gateway e ricercatori dei 14 atenei partner. Verifica leggera via LinkedIn al primo accesso."

CONTENUTO STATO UNLOCKED (quando communityUnlocked === true, il blocco CTA collassa in un badge compatto):

— Layout snello mt-0 mb-12: solo una riga con badge "✓ Sei nella community · Engaged Research Lab" stile pill rounded-full bg-emerald-500/20 text-emerald-300 px-5 py-2 text-[12px] tracking-[0.2em] uppercase
— Bottone secondario "Esci dalla community" text-[11px] text-ang-50/50 hover:text-ang-50/80 tracking-[0.2em] uppercase ml-4 onClick={() => setCommunityUnlocked(false)} — utile per Carlo che fa demo iterata al pitch e vuole resettare lo stato senza refresh

Usa AnimatePresence per la transizione tra i due stati:

<AnimatePresence mode="wait">
  {!communityUnlocked ? (
    <motion.div key="locked" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4 }}>
      {/* contenuto locked completo */}
    </motion.div>
  ) : (
    <motion.div key="unlocked" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}>
      {/* badge compatto unlocked */}
    </motion.div>
  )}
</AnimatePresence>

═══════════════════════════════════════
3. NUOVA SECTION CONDIZIONALE — "Community Content" sotto il Gate
═══════════════════════════════════════

Subito sotto la section Community Gate (azione 2), aggiungi una section CONDIZIONALE che si renderizza SOLO se communityUnlocked === true. Stile: max-w-6xl mx-auto px-6 py-20 lg:py-24, sfondo bg-white.

Struttura:

— Eyebrow font-display tracking-[0.4em] text-[12px] uppercase text-ACCENT: "Hub editoriale · Contenuti community"
— H2 font-editorial-italic clamp(1.8rem, 3vw, 2.6rem) leading-[1.05] tracking-tight text-ang-900: "Il <span italic text-ang-600>laboratorio editoriale completo</span>."
— Subtitle text-[14.5px] ang-900/65 max-w-2xl mt-4: "Quattro modi di leggere la ricerca: paper integrali, video pillole, discussione tra pari, Galileo conversazionale."

Sotto, 4 sotto-blocchi in sequenza verticale (mt-12 space-y-16):

SOTTO-BLOCCO 3.A — Paper completi
H3 font-editorial-regular text-[1.4rem] ang-900: "Paper completi"
Subtitle: "Quattro paper integrali peer-reviewed con download PDF + executive summary 1 pagina."
Grid 2 colonne md:grid-cols-2 gap-5 mt-6 con 4 paper card. Per ognuna:
— Card stile rounded-3xl bg-ang-50 p-6 ring-1 ring-ang-200/60
— Tag tracking-[0.2em] uppercase text-[11px] ocra-500: il tag della tassonomia (riusa i 6 paper Reading Room esistenti — picka i 4 più strategici: mismatch-pharma, ai-meta-review, reskill-over50, plant-mgr-50; tag colored in ocra/blu chiaro/verde come oggi)
— Title font-editorial-regular text-[1.15rem] mt-2 leading-tight: il titolo paper
— Authors text-[12px] ang-900/55 mt-1: autori · istituzione
— Body text-[13px] ang-900/65 mt-3 line-clamp-3: l'abstract truncated
— 2 bottoni CTA in riga mt-5 gap-3:
  - "Scarica PDF completo" bottone primario bg-ang-900 text-ang-50 px-5 py-2.5 rounded-full text-[12.5px] (mock, no actual download — onClick può aprire un PreviewModal con bullet "Paper di 18 pagine · IT/EN · peer-reviewed 2026")
  - "Executive summary" bottone secondario ghost border ang-200/60 px-5 py-2.5 rounded-full text-[12.5px]

SOTTO-BLOCCO 3.B — Video pillole ricercatore
H3 font-editorial-regular text-[1.4rem] ang-900: "Video pillole · 3 minuti per paper"
Subtitle: "Il ricercatore Angelini che ha firmato il paper, in tre minuti con immagini sovrapposte. Format Loops-like."
Grid 2 colonne md:grid-cols-2 gap-5 mt-6 con 4 VideoPillolaCard. Per ognuna:
— Card stile rounded-3xl overflow-hidden ring-1 ring-ang-200/60 bg-gradient (gradient sottile da ang-900 a ACCENT, opacity 0.95)
— Aspect 16/9 con Lottie animation OPPURE fallback SVG placeholder animato (vedi NOTA implementativa sotto)
— Overlay basso (bottom-0 left-0 right-0 p-5 backdrop-blur-sm bg-ang-900/70): autore + ruolo + titolo pillola

NOTA IMPLEMENTATIVA per il video Lottie:
Carlo ha chiesto Lottie animation come placeholder per le video pillole. Hai 2 opzioni — scegli quella più snella:

OPZIONE A (preferita se senza nuove dipendenze):
Costruisci un componente VideoPillolaPlaceholder che renderizza un wrapper aspect-[16/9] con dentro:
- Sfondo gradient ACCENT → ang-900 (dark cinematic)
- 4-5 circle/ellipse SVG animate in motion.svg (Framer Motion) che simulano "concetti che si sovrappongono" — pulse + scale + move loop di 6-8s
- Icona play centrale grande (semi-transparente)
- Waveform sottile in basso che pulsa lievemente (3-4 barre verticali animate in altezza)
- Tutto in palette Angelini (ACCENT + ocra-400 highlights + ang-50 al play icon)

Pattern visivo: sembra un video player con animazione di "thinking/processing" stile Lottie ma in pure SVG + Framer Motion. Zero dependency, funziona out-of-the-box.

OPZIONE B (con dipendenza Lottie):
Se invece Carlo o tu preferite il vero Lottie, aggiungi la dipendenza più snella possibile (`@lottiefiles/react-lottie-player` ~30KB, no React 18 issues), crea `public/lotties/researcher-pill-placeholder.json` come placeholder generico (puoi scaricare un Lottie open da lottiefiles.com tema "researcher / books / lab" oppure crearne uno minimal), e renderizzarlo con `<Player autoplay loop src="/lotties/researcher-pill-placeholder.json" />`.

PRIORITÀ: Carlo vuole demo-friendly. L'opzione A è zero-dependency e probabilmente più del 90% visivamente convincente per il pitch. Vai con A salvo che tu trovi un Lottie open-source perfetto per "ricercatore che spiega un paper" che vale la dependency.

4 VideoPillolaCard con questi metadata mock:

Card 1: Paper "Skill instability EU pharma · 5 cluster" · Autore "A. Reni · M. Donati" · Ruolo "LUISS Business School" · Pillola "Cinque cluster, 18-24 mesi: cosa fare oggi"
Card 2: Paper "AI under generative pedagogy · meta-review 47 interventi" · Autore "E. Romano · J. Park" · Ruolo "UCL Institute of Education" · Pillola "Tutor umano + AI assistant: il setup vincente"
Card 3: Paper "Reskilling over 50 · tre casi industriali" · Autore "L. Fabbri · F. Esposito" · Ruolo "Angelini Academy · SDA Bocconi" · Pillola "Perché gli over 50 imparano meglio degli under 50"
Card 4: Paper "Plant managers digital transition · longitudinale 36 mesi" · Autore "C. Verde · F. De Luca" · Ruolo "Angelini Academy · LUISS" · Pillola "Sense of agency: il driver di successo nei senior"

SOTTO-BLOCCO 3.C — Paper Discussion Threads
H3: "Thread di discussione · contestualizzati per paper"
Subtitle: "I 14 atenei partner commentano paper per paper. Reader · Contributor · Reviewer · Editor."
Layout 1 colonna mt-6 con 2 thread di esempio. Per ogni thread:
— Card rounded-3xl bg-ang-50 p-6 ring-1 ring-ang-200/60
— Top row: tag paper-relativo + "n risposte · last X min" (es. "Skill mismatching EU pharma · 14 risposte · 12 min fa")
— Thread title font-editorial-regular text-[1.1rem]: il titolo della discussione
— 2-3 commenti renderizzati in sequenza:
  - Avatar circle 32x32 con iniziale (es. "G.F.") + colore brand random + ruolo tier (Reader/Contributor/Reviewer/Editor) + 1 frase commento

Riusa il pattern dei 4 thread esistenti in `/engaged-network` (Section 17.3) — copia 2 di quei thread integrali (`t-001` Effetti contradditori del peer-learning + `t-003` Lean transformation KPI) con i loro starter + 3 commenti ciascuno. Questa è la stessa logica community ma contestualizzata QUI alla discussione del paper invece che a `/engaged-network`.

SOTTO-BLOCCO 3.D — Galileo Reading Room full mode
H3: "Galileo · Reading Room full mode"
Subtitle: "Interrogalo in linguaggio naturale su qualunque paper, qualunque tassonomia, qualunque autore."
Pattern card grande rounded-3xl bg-gradient (gradient sottile ACCENT/15 → ang-900/95) p-10:
— Icona Galileo 64x64 (riusa GalileoIcon component)
— Subtitle "Chiedimi cosa vuoi sui paper Engaged Research."
— Textarea ATTIVO (non disabled come la Reading Room pubblica) con placeholder "Es: 'Quali paper sul senso di agency over 50?' / 'Spiegami in 3 punti il paper med-gap'" — accetta input
— Bottone "Chiedi a Galileo" rounded-full bg-ocra-400 text-ang-900 px-7 py-3
— Al click bottone, simula response: nasconde la textarea, mostra typewriter effect su una response hardcoded di ~600 chars (puoi scrivere una response generica plausibile tipo "Galileo: Ho trovato 3 paper rilevanti. Il più completo è `mismatch-pharma` di Reni e Donati 2026 — identifica cinque cluster di competenze critiche per il pharma EU 2025-2030..."). Bottone "Nuova domanda" che resetta lo state.

═══════════════════════════════════════
4. ACCESSIBILITY + ANIMATIONS
═══════════════════════════════════════

— Bottone "Entra nella community" ha aria-label="Sblocca contenuti community Engaged Research Lab"
— Bottone "Esci dalla community" ha aria-label="Torna allo stato preview pubblico"
— Sezione Community Content quando si renderizza: motion.section con initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1]}}
— Tutti i Lottie placeholder / SVG animati hanno aria-hidden="true" (decorativi)
— Le 4 VideoPillolaCard sono focusabili (tabindex=0) ma il click "play" è solo visivo (no audio reale)

═══════════════════════════════════════
NOTE GENERALI
═══════════════════════════════════════

Sequenza finale della pagina /engaged-research dopo il patch:
1. PageShell hero — invariato
2. EngagedResearchReadingRoom — invariato (6 paper teaser preview pubblica)
3. **NUOVO** Community Gate CTA (azione 2) — preview locked → click → unlock
4. **NUOVO** Community Content sezione (azione 3) — renderizzata solo se unlocked, 4 sotto-blocchi (paper completi + video pillole Lottie + thread + Galileo full)
5. GalileoResearchEngine — invariato (resta pubblico)
6. Metodologia — invariata (resta pubblica)
7. Community CTA outro a /engaged-network — invariato (è il funnel verso community vera in `/engaged-network`)

Lunghezza finale del file stimata: passa da 157 righe a ~450-550 righe (con 4 sotto-blocchi compatti + componenti VideoPillolaCard inline).

Quando hai finito:
1. Verifica con npm run build che TypeScript non lamenti errori
2. Refresh /engaged-research — clicca "Entra nella community" — screenshot di entrambi gli stati (locked + unlocked) per cross-check visivo
3. Verifica che lo stato unlocked sia resettabile via bottone "Esci dalla community" (utile per demo Carlo)
4. Committa con messaggio:
"feat(engaged-research): community gate + unlocked content section (papers + Lottie pills + threads + Galileo full)"

Se Lottie placeholder visivamente sembra debole, ri-iterazione su sola sub 3.B con palette più carica. Se i thread su sub 3.C sembrano ridondanti con `/engaged-network`, riduci a 1 solo thread di esempio.

Grazie.
```

---

## Note di redazione (per Carlo, non per Claude Code)

**1. Login illustrativo demo-fluido**: il pattern UX è esplicito — text CTA dice "iscriviti alla community per accedere" (narrativa pitch), bottone tecnicamente entra subito (no auth real). Stato gestito con `useState`, no localStorage (regola Cowork artifacts). Refresh → torna locked. Per il pitch è esattamente quello che serve: storyline "ecco il gate community" + demo fluida click → "ecco cosa c'è dentro".

**2. Pattern Lottie vs SVG placeholder**: ho lasciato a CC la scelta tra opzione A (zero dependency SVG animato) e opzione B (vera dipendenza Lottie). La A è raccomandata perché più snella, ma se trova un Lottie open perfetto per "ricercatore" può aggiungerla. Carlo, se vuoi forzare la scelta (es. "no nuove dipendenze, vai con A"), aggiungilo come istruzione nel paste.

**3. 4 paper riusati dalla Reading Room**: i 4 paper su sub 3.A sono picked dai 6 paper esistenti in `EngagedResearchReadingRoom.tsx`. Non duplicazione — sono gli stessi paper che la Reading Room mostra preview, qui si "espandono" con paper integrale + CTA download mock. Carlo, conferma che va bene riusare 4/6 o preferisci che CC ne aggiunga 2 nuovi non presenti in Reading Room?

**4. Galileo Reading Room "full mode" textarea attivo**: punto critico per il pitch. La textarea ATTIVA (non disabled) è il segnale "look, è davvero conversazionale" che Caterina ha bocciato in catalog form ma può apprezzare se vede live un response che arriva. Response hardcoded ~600 chars è sufficiente per il pitch — non serve LLM real-time (rischio risposta strana in demo).

**5. Stato Carlo durante demo**: il pattern "Esci dalla community" è specifico per Carlo che farà demo iterate al pitch. Senza quel bottone, una volta unlocked devi refreshare per tornare a mostrare il gate — interrompe il flusso. Con il bottone, click in/out fluido.

**6. Tempo stimato Claude Code**: 40-60 min. Le 5 sotto-azioni sono di media-alta complessità (specie VideoPillolaCard SVG animato + Galileo full mode con typewriter).

**7. Post-execution validation** — punti chiave da verificare:
- (a) Stato locked: CTA visibile e leggibile?
- (b) Click "Entra nella community": animazione fluida unlock?
- (c) Stato unlocked: 4 sotto-blocchi tutti renderizzati correttamente?
- (d) VideoPillolaCard: animazione Lottie o SVG sembra video plausibile?
- (e) Thread discussion sembra contestualizzato vs solo `/engaged-network`?
- (f) Galileo textarea attivo + button → response typewriter funziona?
- (g) Bottone "Esci dalla community" resetta lo stato?

Se 1 dei 7 non regge, si ri-itera quella sola sezione.
