---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt operativo per architettura D2 — `/engaged-research` resta interamente pubblica come preview con CTA outro potenziata + il laboratorio editoriale COMPLETO (paper completi + Lottie video pillole + Galileo full mode conversazionale) entra come nuovo blocco dentro `/engaged-network` (la community preview Q1 2027 esistente). Niente login wall, niente state useState, niente doppio livello in-page. Architettura più pulita: ogni pagina ha un ruolo distinto.
created: 2026-05-20
updated: 2026-05-20
status: ready-to-paste
source_input: cambio architetturale Carlo 20/5 sera ("spostare il laboratorio editoriale preview dentro /engaged-research con CTA ad entrare nel network + laboratorio editoriale intero dentro /engaged-network")
related: "[[_Angelini Academy]] · [[Mockup Sito - Struttura e Copy Completo]] · [[Prompt Claude Code - Hub editoriale doppio livello engaged-research]] (superseded D1)"
---

# Prompt Claude Code — Laboratorio editoriale dentro `/engaged-network` (architettura D2)

> Patch a **2 file** in sequenza: (1) `src/pages/EngagedResearch.tsx` — minor reinforcement della CTA outro esistente verso `/engaged-network` con preview snippet del laboratorio editoriale completo; (2) `src/pages/EngagedNetwork.tsx` — aggiunta nuovo blocco "Laboratorio editoriale" tra le 4 funzionalità e i Paper Discussion Threads, con 3 sotto-blocchi: paper completi + Lottie video pillole + Galileo Reading Room full mode. Niente nuove route, niente nuove dipendenze, niente state useState complesso, niente login wall illustrativo.

## Architettura risultante (per memoria)

| Pagina | Ruolo | Cosa contiene dopo il patch |
|---|---|---|
| `/engaged-research` | Hub editoriale **preview pubblica** | Hero + Reading Room 6 paper teaser + Galileo Research Engine + Metodologia + **CTA outro potenziata** con preview snippet di cosa c'è nel laboratorio editoriale completo dentro `/engaged-network` |
| `/engaged-network` | Community preview Q1 2027 (sociale + content) | NetworkPulse + 4 funzionalità + **NUOVO Laboratorio editoriale completo** (paper + Lottie + Galileo full) + PaperThreadInteractive + CareerPathInteractive + PositionPaperInteractive + Tier + CTA + FAQ + Waitlist + Cross-links |

## Sintesi 2 azioni

| # | File | Tipo modifica | Risultato |
|---|---|---|---|
| 1 | `src/pages/EngagedResearch.tsx` | Potenziamento CTA outro esistente (riga ~91-154) | Aggiunta lista 4 bullet "cosa trovi nel laboratorio editoriale completo" + microcopy + CTA `Esplora Engaged Network →` invariato |
| 2 | `src/pages/EngagedNetwork.tsx` | Nuova section tra 4 funzionalità (~1132) e PaperThreadInteractive (~1198) | Blocco "Laboratorio editoriale" con 3 sotto-blocchi (4 paper completi + 4 Lottie video pillole + Galileo full mode con textarea attivo) |

---

## Prompt da incollare

```
Ciao. Architettura D2 (cambio strategico Carlo 20/5 sera): il laboratorio editoriale completo NON va dentro /engaged-research come blocco condizionale (architettura D1 superseded), ma dentro /engaged-network come asset di community. /engaged-research resta interamente pubblica come preview con CTA outro potenziata verso /engaged-network. Niente login wall, niente state useState, niente AnimatePresence locked/unlocked.

Patch a 2 file in sequenza.

VINCOLI:
— NESSUN cambio palette. Accent /engaged-research = #005EB8 blu chiaro. Accent /engaged-network = #005EB8 stesso (sono pagine sorelle del nucleo Engaged Research).
— NESSUNA nuova route, niente cambi a App.tsx, niente cambi Header.tsx.
— Hero + Reading Room + Galileo Research Engine + Metodologia di /engaged-research INVARIATI.
— Tutte le sezioni esistenti di /engaged-network (NetworkPulse + 4 funzionalità + Paper Discussion Threads + Career Path + Position Paper + Tier + CTA banner + FAQ + Waitlist + Cross-links) INVARIATE. Si aggiunge SOLO una nuova section tra le 4 funzionalità e i Paper Threads.

═══════════════════════════════════════
AZIONE 1 — src/pages/EngagedResearch.tsx · potenziare CTA outro esistente
═══════════════════════════════════════

PROBLEMA
La pagina /engaged-research ha già un Community CTA outro in fondo (~91-154) che indirizza verso /engaged-network con titolo "Per fare ricerca con noi, si entra nella community" + lista 4 bullet (atenei partner / thread / position paper / laboratorio editoriale) + bottone "Entra nella community". Funziona ma il bullet "Accesso al laboratorio editoriale per pubblicazioni congiunte" è poco evocativo — l'utente non capisce cosa significa concretamente. Carlo vuole rinforzare questo punto perché il laboratorio editoriale è "il principe" della proposta FuturItaly.

AZIONE
Sostituisci la lista 4 bullet attuale con una versione più ricca e specifica che fa preview testuale dei 3 sotto-blocchi del laboratorio editoriale dentro /engaged-network. Pattern: stesso layout (lista con icone check ocra-400), ma copy più narrativo. Aggiungi anche un'eyebrow piccola sopra la lista per segnalare visivamente "ecco cosa trovi dentro".

Nel JSX della colonna destra (`<div className="flex flex-col gap-4">`), sostituisci il blocco `<ul className="space-y-3">` esistente con questo:

<div>
  <p className="font-display text-[10px] tracking-[0.3em] uppercase text-ocra-200 mb-3">
    Nel laboratorio editoriale completo
  </p>
  <ul className="space-y-3">
    {[
      'Paper integrali peer-reviewed in download PDF — non solo abstract teaser come qui',
      'Video pillole del ricercatore Angelini · tre minuti per paper, format Loops con immagini sovrapposte',
      'Galileo Reading Room conversazionale — interrogalo in linguaggio naturale su qualunque paper, autore, tassonomia',
      'Thread di discussione strutturato per paper · alumni MBA, accademici, ricercatori partner dei 14 atenei',
    ].map((bullet) => (
      <li key={bullet} className="flex items-start gap-3 text-[13.5px] leading-[1.55] text-ang-50/85">
        <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0 text-ocra-400">
          <path d="M3 7 L 6 10 L 11 4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{bullet}</span>
      </li>
    ))}
  </ul>
</div>

Bottone "Entra nella community" → /engaged-network INVARIATO (resta come oggi). Eyebrow + H2 + body della colonna sinistra INVARIATI.

VINCOLI
— Niente nuove section, niente nuovi blocchi. Solo modifica della lista bullet esistente.
— Mantieni la stessa struttura motion fade-in-y del Community CTA outro esistente.

═══════════════════════════════════════
AZIONE 2 — src/pages/EngagedNetwork.tsx · nuova section "Laboratorio editoriale" tra 4 funzionalità e Paper Threads
═══════════════════════════════════════

PROBLEMA
La pagina /engaged-network ha oggi 6 sezioni che mostrano la dimensione SOCIALE della community (NetworkPulse + 4 funzionalità + Paper Discussion Threads + Career Path + Position Paper + Tier + FAQ + Waitlist). Manca la dimensione CONTENUTO ricco: l'utente non vede DOVE accede ai paper integrali, alle video pillole, a Galileo Reading Room full. È esattamente quello che Elena Chiti ha consolidato 19/5 call (47:07-47:59) come "principe" della proposta: il laboratorio editoriale = light white paper + video pillole + paper completi.

AZIONE
Aggiungi nuova section IMMEDIATAMENTE DOPO la section "4 funzionalità" (intorno alla riga ~1198, prima del `<PaperThreadInteractive />`). Stile: sfondo bg-white, max-w-6xl mx-auto px-6 py-20 lg:py-24.

Struttura della nuova section "Laboratorio editoriale":

— Eyebrow font-display tracking-[0.4em] text-[12px] uppercase ACCENT_BLU (#005EB8): "Laboratorio editoriale · Hub editoriale community-only"
— H2 font-editorial-italic clamp(1.8rem, 3vw, 2.6rem) leading-[1.05] tracking-tight text-ang-900: "Il <span italic ang-600>contenuto completo</span> che alimenta la discussione."
— Subtitle text-[14.5px] ang-900/65 max-w-2xl mt-4: "I paper teaser che vedi pubblicamente sul nucleo Engaged Research sono solo l'inizio. Qui dentro trovi tutto: paper integrali peer-reviewed in download, video pillole del ricercatore in formato breve, e Galileo Reading Room come agente conversazionale aperto."

Sotto, 3 sotto-blocchi in sequenza verticale (mt-12 space-y-16):

SOTTO-BLOCCO 2.A — Paper completi (4 card)
H3 font-editorial-regular text-[1.4rem] ang-900: "Paper completi"
Subtitle text-[13.5px] ang-900/65 mt-2: "Quattro paper integrali peer-reviewed in download PDF + executive summary 1 pagina per audience business."

Grid 2 colonne md:grid-cols-2 gap-5 mt-6 con 4 paper card. Per ogni card:
— Card stile rounded-3xl bg-ang-50 p-6 ring-1 ring-ang-200/60
— Tag tracking-[0.2em] uppercase text-[11px] (color tag della tassonomia): per i 4 paper picked dai 6 esistenti in EngagedResearchReadingRoom.tsx (`mismatch-pharma` blu chiaro, `ai-meta-review` ocra, `reskill-over50` verde, `plant-mgr-50` verde)
— Title font-editorial-regular text-[1.15rem] mt-2 leading-tight: il titolo paper
— Authors text-[12px] ang-900/55 mt-1: autori · istituzione
— Body text-[13px] ang-900/65 mt-3 line-clamp-3: l'abstract truncated
— 2 bottoni CTA in riga mt-5 gap-3:
  - "Scarica PDF completo" bottone primario bg-ang-900 text-ang-50 px-5 py-2.5 rounded-full text-[12.5px] (mock — onClick può aprire un PreviewModal con bullet "Paper di 18 pagine · IT/EN · peer-reviewed 2026" pattern coerente con altre CTA download del sito)
  - "Executive summary" bottone secondario ghost border ang-200/60 px-5 py-2.5 rounded-full text-[12.5px]

I 4 paper mock (riusati dai 6 esistenti in EngagedResearchReadingRoom):

Card 1 — `mismatch-pharma`
Tag: "Skill mismatching"
Title: "Skill instability in EU pharma: a five-cluster forecast 2025-2030"
Authors: "A. Reni · M. Donati / LUISS Business School"
Abstract: "Lo studio identifica cinque cluster di competenze critiche per il pharma EU 2025-2030: data literacy avanzata, AI-augmented R&D, regulatory agility, supply chain digitale, leadership ibrida. Gap medio sui ruoli mid-senior: 38%."

Card 2 — `ai-meta-review`
Tag: "AI applicata pedagogia"
Title: "Adult learning under generative AI: a meta-review of 47 interventions"
Authors: "E. Romano · J. Park / UCL Institute of Education"
Abstract: "Meta-review di 47 interventi 2022-2025 sull'uso di modelli generativi nella formazione adulta. Risultato: +24% ritenzione a 90 giorni quando l'AI affianca un tutor umano, -12% calibrazione fiducia con AI standalone."

Card 3 — `reskill-over50`
Tag: "Lifelong over 50"
Title: "Re-skilling over 50: evidence from three Italian industrial sites"
Authors: "L. Fabbri · F. Esposito / Angelini Academy · SDA Bocconi"
Abstract: "Tre casi longitudinali (Pharma, IndTech, Consumer) di programmi di re-skilling per dipendenti 50+. Adesione iniziale 68%, sostenimento a 12 mesi 82% — più alta dei pari 30-50 anni."

Card 4 — `plant-mgr-50`
Tag: "Lifelong over 50"
Title: "Plant managers over 50: a longitudinal study on digital transition"
Authors: "C. Verde · F. De Luca / Angelini Academy · LUISS"
Abstract: "Studio longitudinale 36 mesi su 120 plant manager italiani che hanno affrontato MES + IoT + digital twin. 89% completion rate ma +47% tempo medio vs pari 30-49. Driver di successo: sense of agency sulle specifiche del rollout."

SOTTO-BLOCCO 2.B — Video pillole ricercatore (4 card Lottie placeholder)
H3 font-editorial-regular text-[1.4rem] ang-900: "Video pillole · 3 minuti per paper"
Subtitle text-[13.5px] ang-900/65 mt-2: "Il ricercatore Angelini che ha firmato il paper, in tre minuti con immagini sovrapposte. Format Loops-like — perfetto per LinkedIn condivisibile."

Grid 2 colonne md:grid-cols-2 gap-5 mt-6 con 4 VideoPillolaCard. Per ogni card:
— Card stile rounded-3xl overflow-hidden ring-1 ring-ang-200/60 bg-ang-50
— Aspect-[16/9] block con dentro Lottie animation OPPURE fallback SVG placeholder animato (vedi NOTA implementativa sotto)
— Overlay basso (absolute bottom-0 left-0 right-0 p-5 backdrop-blur-sm bg-ang-900/70): autore + ruolo + titolo pillola in text-ang-50

NOTA IMPLEMENTATIVA per video Lottie — pattern raccomandato (zero-dependency):
Costruisci un componente VideoPillolaPlaceholder (definito inline in EngagedNetwork.tsx) che renderizza un wrapper aspect-[16/9] con dentro un SVG animato Framer Motion:
— Sfondo gradient ACCENT (#005EB8) → ang-900 dark cinematic
— 4-5 circle/ellipse SVG che pulsano + si scalano + si muovono in loop di 6-8s — simulano "concetti che si sovrappongono" tipo i grafici animati delle video pillole Loops
— Icona play centrale grande (semi-transparente, size ~48px, fill ang-50/70)
— Waveform sottile in basso (3-4 barre verticali animate in altezza, color ocra-400) che pulsano lievemente

Pattern visivo: sembra un video player con animazione di "thinking/processing" stile Lottie ma in pure SVG + Framer Motion. Zero dependency.

ALTERNATIVA Lottie reale (solo se cerchi Lottie open perfetto): aggiungi `@lottiefiles/react-lottie-player` ~30KB, scarica un Lottie open-source generico tema "researcher / books / lab" da lottiefiles.com, mettilo in `public/lotties/researcher-pill.json`, renderizza con `<Player autoplay loop src="/lotties/researcher-pill.json" />`. PRIORITÀ: opzione zero-dependency salvo che trovi un Lottie perfetto e con licenza compatibile.

4 VideoPillolaCard con metadata mock:

Card 1: Paper "Skill instability EU pharma · 5 cluster" · Autore "A. Reni · M. Donati" · Ruolo "LUISS Business School" · Pillola "Cinque cluster, 18-24 mesi: cosa fare oggi"
Card 2: Paper "AI under generative pedagogy · meta-review 47 interventi" · Autore "E. Romano · J. Park" · Ruolo "UCL Institute of Education" · Pillola "Tutor umano + AI assistant: il setup vincente"
Card 3: Paper "Reskilling over 50 · tre casi industriali" · Autore "L. Fabbri · F. Esposito" · Ruolo "Angelini Academy · SDA Bocconi" · Pillola "Perché gli over 50 imparano meglio degli under 50"
Card 4: Paper "Plant managers digital transition · longitudinale 36 mesi" · Autore "C. Verde · F. De Luca" · Ruolo "Angelini Academy · LUISS" · Pillola "Sense of agency: il driver di successo nei senior"

Le 4 card sono focusabili (tabindex=0) ma il click "play" è solo visivo — nessun audio reale, è preview Q1 2027.

SOTTO-BLOCCO 2.C — Galileo Reading Room full mode (textarea attivo)
H3 font-editorial-regular text-[1.4rem] ang-900: "Galileo · Reading Room full mode"
Subtitle text-[13.5px] ang-900/65 mt-2: "Interrogalo in linguaggio naturale su qualunque paper, autore, tassonomia. Diverso dalla preview pubblica — qui la conversazione è aperta."

Pattern card grande rounded-3xl bg-gradient da #005EB833 a rgba(2,26,48,0.95) p-10 lg:p-14 text-ang-50:
— Icona Galileo grande 64x64 (riusa `<GalileoIcon />` component se esiste, altrimenti placeholder size 64 circle gradient ang-600 → ang-900)
— Eyebrow font-display tracking-[0.4em] text-[12px] uppercase text-ocra-200: "Galileo · Agente di ricerca · Full mode"
— H4 font-editorial-italic text-[1.3rem] mt-3: "Chiedimi cosa vuoi sui paper Engaged Research."
— Body text-[14px] ang-50/80 leading-[1.6] mt-3 max-w-xl: "Posso interrogare l'intero corpus dei paper peer-reviewed, citarti autori e istituzioni, riassumerti un paper in 600 caratteri o rispondere a domande comparative tra paper diversi."

Textarea ATTIVA (non disabled come la Reading Room preview pubblica):
<textarea
  className="w-full mt-6 px-5 py-4 rounded-2xl bg-ang-50/10 text-ang-50 placeholder:text-ang-50/40 border border-ang-50/15 focus:border-ocra-400 focus:outline-none focus:ring-2 focus:ring-ocra-400/30 text-[14.5px] leading-[1.5] resize-none"
  placeholder="Es: 'Quali paper sul senso di agency over 50?' / 'Spiegami in 3 punti il paper med-gap' / 'Confronta AI tutoring vs peer-learning'"
  rows={3}
  value={galileoInput}
  onChange={(e) => setGalileoInput(e.target.value)}
/>

Sotto, bottone "Chiedi a Galileo":
<button
  className="mt-4 inline-flex items-center gap-2 rounded-full bg-ocra-400 text-ang-900 px-7 py-3 text-[14px] font-semibold hover:bg-ocra-200 transition-colors disabled:opacity-50"
  disabled={!galileoInput.trim() || isThinking}
  onClick={handleGalileoAsk}
>
  {isThinking ? 'Galileo sta pensando…' : 'Chiedi a Galileo'}
</button>

Behavior:
— useState locali: `const [galileoInput, setGalileoInput] = useState(''); const [galileoResponse, setGalileoResponse] = useState(''); const [isThinking, setIsThinking] = useState(false)`
— `handleGalileoAsk`: setIsThinking(true), aspetta 800ms (setTimeout simulate thinking), poi simula typewriter su una response hardcoded di ~600 chars in galileoResponse, poi setIsThinking(false). Response hardcoded plausibile per il pitch (qualunque domanda l'utente faccia, Galileo risponde lo stesso testo — è demo):

"Ho identificato 3 paper Engaged Research rilevanti per la tua domanda. Il più completo è `mismatch-pharma` (Reni & Donati, LUISS Business School, 2026) — identifica cinque cluster di competenze critiche per il pharma EU 2025-2030 con metodologia survey su 14 aziende campione + 47 HR director + 320 job descriptions. Gap medio mid-senior: 38%. Raccomandazione policy: programmi re-skilling 18-24 mesi co-progettati con istituzioni accademiche. Vuoi che approfondisca uno dei tre paper, o preferisci una sintesi comparativa?"

Quando galileoResponse è non vuoto, mostra una card response sotto il bottone con typewriter effect (puoi usare un effetto semplice tipo `useEffect` che concatena chars una alla volta a ~12ms/char, oppure semplicemente fade-in del testo intero — il pitch non richiede typewriter vero, è OK fade-in).

Bottone "Nuova domanda" che resetta lo state (galileoInput = '', galileoResponse = '') una volta che c'è una response visualizzata.

═══════════════════════════════════════
NOTE GENERALI
═══════════════════════════════════════

Sequenza finale di /engaged-network dopo il patch:
1. Hero (invariato)
2. NetworkPulse (invariato)
3. 4 funzionalità (invariato)
4. **NUOVO** Laboratorio editoriale (3 sotto-blocchi: paper completi + Lottie video pillole + Galileo full mode)
5. PaperThreadInteractive (invariato)
6. CareerPathInteractive (invariato)
7. PositionPaperInteractive (invariato)
8. TierProgression (invariato)
9. CTA banner (invariato)
10. FAQ (invariato)
11. WaitlistForm (invariato)
12. Cross-links (invariato)

Lunghezza file EngagedNetwork.tsx stimata: passa da ~1369 righe a ~1700 righe.
Lunghezza file EngagedResearch.tsx: invariata sostanzialmente (~157 righe → ~165 con il pattern bullet potenziato).

Accessibility: la sezione Laboratorio editoriale ha h2 + h3 ordinati. Le 4 VideoPillolaCard SVG hanno aria-hidden="true" (decorative). La textarea Galileo è focusabile e ha placeholder esteso che spiega cosa accetta. Il button "Chiedi a Galileo" ha aria-label="Invia domanda a Galileo Reading Room full mode".

Performance: SVG animations + 4 VideoPillolaPlaceholder + textarea su una singola pagina non hanno costo percepibile.

Quando hai finito:
1. Verifica con npm run build che TypeScript non lamenti errori
2. Refresh /engaged-research — scrolla fino in fondo, verifica il Community CTA outro potenziato (4 bullet nuovi)
3. Refresh /engaged-network — scrolla, verifica che la nuova section "Laboratorio editoriale" appare tra le 4 funzionalità e i Paper Threads, con 3 sotto-blocchi tutti renderizzati
4. Test interattivo: scrivi qualcosa nella textarea Galileo, premi "Chiedi", verifica che dopo 800ms appare la response hardcoded + bottone "Nuova domanda" che resetta
5. Committa con messaggio:
"feat(engaged-network): add Laboratorio editoriale section (papers + Lottie pills + Galileo full mode textarea) + reinforce /engaged-research outro CTA preview"

Se la sezione Laboratorio editoriale dentro /engaged-network risulta troppo lunga (la pagina passa da già lunga a molto lunga), valuta togliere uno dei 3 sotto-blocchi (es. unire Paper completi + Video pillole in una sola griglia 2x4 con varianti card alternate). Default: tieni tutti i 3 sotto-blocchi distinti.

Grazie.
```

---

## Note di redazione (per Carlo, non per Claude Code)

**1. Differenza chiave architetturale D1 → D2** (per memoria):
- **D1 (superseded)**: `/engaged-research` faceva tutto — preview + login wall + contenuti community in-page con state useState. `/engaged-network` non veniva toccata.
- **D2 (questa)**: `/engaged-research` resta interamente pubblica come preview, CTA outro più ricca. `/engaged-network` riceve il laboratorio editoriale completo come nuovo blocco di asset, accanto alle 6 feature sociali esistenti. Niente login wall, niente state — l'utente che vuole vedere il completo clicca "Entra nella community" → atterra su `/engaged-network` → trova il laboratorio editoriale come asset disponibile.

**2. Vantaggi D2 rispetto a D1**:
- Architettura più pulita (1 pagina = 1 funzione)
- Niente login illustrativo che potrebbe confondere durante demo ("è un vero login? funziona?")
- `/engaged-network` diventa il "hub community completo" — coerente con il messaging che è il "luogo dove succede tutto"
- Più snello da implementare (no state + AnimatePresence)

**3. Costo D2**:
- `/engaged-network` diventa più lunga (~1700 righe stimati vs 1369 attuali) — pagina già densa, ora ancora più densa
- Demo Carlo deve scrollare di più per mostrare tutto

**4. Lottie placeholder zero-dependency** confermato preferred (Carlo aveva detto Lottie ma se è troppo complesso un SVG animato dà gli stessi risultati visivi per il pitch).

**5. Textarea Galileo attiva con response hardcoded** è il pattern critico per Caterina (cliente): la conversazionalità che lei aveva temuto 8/5 viene mostrata "live" ma con response deterministica per evitare risposte strane.

**6. Tempo stimato Claude Code**: 40-50 min totale (10 min per azione 1 + 30-40 min per azione 2 con VideoPillolaPlaceholder + Galileo full mode + 3 paper card).

**7. Post-execution validation** — i punti chiave:
- (a) `/engaged-research` outro: 4 bullet nuovi sono più ricchi e specifici del laboratorio editoriale?
- (b) `/engaged-network`: la nuova section Laboratorio editoriale è posizionata correttamente tra 4 funzionalità e Paper Threads?
- (c) 4 paper completi card: tag colored + author + abstract + 2 CTA download/exec summary?
- (d) 4 Lottie placeholder SVG animati: sembrano video plausibili?
- (e) Galileo textarea attivo: scrivere → bottone → response hardcoded fade-in dopo 800ms?
- (f) Bottone "Nuova domanda" resetta lo state?

Se 1 dei 6 non regge, ri-iterazione su quella sola sezione.
