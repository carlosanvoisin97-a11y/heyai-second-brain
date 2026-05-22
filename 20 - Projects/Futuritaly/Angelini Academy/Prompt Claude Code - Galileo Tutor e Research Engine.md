---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione in corso su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt snello per estendere Galileo (agente AI unico di Angelini Academy già consolidato) con due nuove capability — Galileo Tutor (in MBA Gateway) + Galileo Research Engine (in Engaged Research). NIENTE nuovi agenti, NIENTE nuovi naming. Solo capability addizionali del medesimo Galileo
created: 2026-05-15
updated: 2026-05-15
related:
  - "[[Concept - Engaged Network Community]]"
  - "[[Brief Copy Sito per Claude Code]]"
status: ready-to-paste
sostituisce: "[[Prompt Claude Code - AI Tutor e Research Engine]] (deprecato — proponeva agenti separati, ora consolidato in un unico Galileo)"
---

# Prompt per Claude Code — Galileo Tutor + Galileo Research Engine

> Estendiamo Galileo (agente AI già consolidato nel sito) con due nuove capability mirate, in continuità con il pattern esistente. Pattern industriale 2026: UN agente multi-capability come Khanmigo / Harvey / Cursor, NON catalogo di feature separate.

---

## Prompt da incollare

```
Ciao. Estendo Galileo (il nostro agente AI unico, già consolidato in CareerPathNavigator.tsx + EngagedResearchReadingRoom.tsx) con due nuove capability. NIENTE nuovi agenti, NIENTE nuovi naming. Galileo è una persona, ha già due ruoli, gliene aggiungiamo altri due.

OBIETTIVO STRATEGICO
Galileo oggi esprime due capability nel sito:
- Galileo · Career Path Navigator (quiz pre-iscrizione, in CareerPathNavigator.tsx, vive in /mba-gateway)
- Galileo · Agente di ricerca / Reading Room (riassunti paper + Q&A, in EngagedResearchReadingRoom.tsx, vive in /engaged-research)

Aggiungiamo due capability complementari che chiudono il loop di Galileo come compagno per tutta la vita Angelini dell'utente:
- Galileo · Tutor (post-iscrizione, durante masterclass/MBA, vive in /mba-gateway)
- Galileo · Research Engine (simulazioni parallele + hypothesis generation + pattern discovery, vive in /engaged-research)

Tutto illustrativo statico — niente backend, niente API, niente dati reali.

═══════════════════════════════════════
CAPABILITY 1: GALILEO · TUTOR
═══════════════════════════════════════

DOVE LA INNESTIAMO
File: src/pages/MbaGateway.tsx
Punto d'innesto: NUOVA sezione tra <CrossOpCoTracker /> (linea ~250) e la sezione "Criteria" (linea ~253). Ordine narrativo: Timeline → Cross-OpCo → Galileo Tutor → Criteria → Calcolatore borsa → EOI form. Galileo Tutor entra come "cosa ti dà il programma DURANTE", subito dopo aver visto la rotation tra le OpCo e prima dei criteri di accesso.

COMPONENTE DA CREARE
src/components/GalileoTutor.tsx
Pattern: simile a CareerPathNavigator come ritmo visivo + GalileoIcon riusato. Stile sezione = pagina (mx-auto max-w-6xl px-6 py-20 lg:py-24).

CONTENUTO DELLA SEZIONE
- Eyebrow Barlow uppercase: "GALILEO · TUTOR"
- H2 Merriweather Light Italic (clamp 1.8-2.8rem): "Galileo non ti lascia all'inizio del percorso." (oppure variante simile a tua scelta che mantiene tono Magician caldo)
- Lead Merriweather Light Italic: "L'agente che ti propone il programma giusto continua con te durante le masterclass, il MBA e gli stage cross-OpCo. Risponde alle tue domande sui materiali, propone esercizi extra dove vede un gap, riassume le sessioni live che hai perso."
- Layout 2 colonne. Sinistra: mockup chat Galileo Tutor (vedi sotto). Destra: 4 bullet "Cosa fa / Cosa NON fa".

MOCKUP CHAT (a sinistra, simulato 4 messaggi statici)
Visual: card chat con header "Galileo · Masterclass Leadership in Pharma 2026" + GalileoIcon, sfondo bianco con ring ang-200, ombra coerente con cards esistenti (es. shadow-[0_30px_80px_-30px_rgba(2,26,48,0.18)]).

4 messaggi alternati:
1. Studente (avatar circle bg-ang-900 con "TU" in bianco): "Non ho capito il punto sulla skill obsolescence di cui ha parlato la Prof. Romano ieri. Puoi riassumere?"
2. Galileo (con GalileoIcon e badge piccolo "groundato su Paper #02 · UCL Institute of Education"): "La meta-review UCL su 47 interventi pedagogici AI-augmented mostra che la skill obsolescence nei contesti corporate raddoppia ogni 5-7 anni post-COVID. Il punto chiave della Prof. Romano: non basta riqualificarsi una volta, serve un metodo continuo di scaffolding. Vuoi che ti suggerisca 2 esercizi per applicare il concetto al tuo settore?"
3. Studente: "Sì grazie"
4. Galileo: "Esercizio 1 (15 min): mappa 3 skill del tuo ruolo a 5 anni fa vs oggi e identifica quale è in obsolescence rapida. Esercizio 2 (30 min): scrivi un retraining plan ipotetico per un caso pharma del tuo settore. Ti guido se serve."

QUATTRO BULLET "COSA FA / COSA NON FA" (a destra)
COSA FA:
• Risponde a domande sui materiali del corso, citando paper specifici dell'Engaged Research Lab
• Propone esercizi extra quando rileva un gap di comprensione
• Riassume sessioni live perse con punti chiave + materiale di rinforzo
• Fa spaced repetition retention con micro-prompt mirati nelle 2 settimane post-masterclass

COSA NON FA:
• Non valuta il merito intellettuale del tuo lavoro — quello resta umano
• Non sostituisce il docente o il mentor di programma
• Non pubblica autonomamente nulla
• Non condivide la tua conversazione con terzi

Sotto i due blocchi, paragrafo italic Merriweather small: "Galileo Tutor è groundato sui paper firmati dall'Engaged Research Lab — la stessa ricerca che alimenta il Research Engine. La ricerca che facciamo diventa la formazione che diamo."

ACCENT COLOR
Usa ACCENT = #FF8200 (arancio scuro brand book), coerente con il resto della pagina MBA Gateway.

═══════════════════════════════════════
CAPABILITY 2: GALILEO · RESEARCH ENGINE
═══════════════════════════════════════

DOVE LA INNESTIAMO
File: src/pages/EngagedResearch.tsx
Punto d'innesto: NUOVA sezione tra <EngagedResearchReadingRoom /> (linea ~40) e la sezione "Methodology" (linea ~43). Ordine narrativo: ReadingRoom (Galileo legge) → Research Engine (Galileo simula) → Methodology (come lavoriamo) → LUISS spotlight. Galileo Research Engine entra come "Galileo non legge soltanto, simula" — è il secondo registro dell'agente nello stesso dominio.

COMPONENTE DA CREARE
src/components/GalileoResearchEngine.tsx
Pattern: stesso ritmo visivo di EngagedResearchReadingRoom. Sezione = pagina (mx-auto max-w-6xl px-6 py-20 lg:py-28).

CONTENUTO DELLA SEZIONE
- Eyebrow Barlow uppercase: "GALILEO · RESEARCH ENGINE"
- H2 Merriweather Light Italic (clamp 1.8-2.8rem): "Galileo non legge soltanto. Simula." (oppure variante simile che mantiene tono Sage)
- Lead Merriweather Light Italic: "L'agente che vi riassume i paper può anche aiutarci a generarli. Galileo simula in parallelo migliaia di varianti di un esperimento pedagogico, propone ipotesi nuove dalla letteratura mondiale, trova pattern nei dataset anonimizzati dei nostri partner. Lo stesso approccio con cui i grandi research lab AI scoprono nuovi materiali, nuove proteine, nuove soluzioni matematiche — applicato al nostro dominio: come si apprende meglio."
- Layout 2 colonne. Sinistra: visualizzazione (vedi sotto). Destra: 4 micro-feature card + box "Cosa NON fa".

VISUALIZZAZIONE (a sinistra)
Componente illustrativo che evoca "simulazioni parallele":
- Sopra: network graph stilizzato in SVG inline — 30-50 nodi piccoli connessi da linee sottili, in palette blu istituzionale (#003087, #005EB8) + arancio chiaro (#F6BE00) come accent. Tre cluster di nodi distinti che rappresentano i 3 verticali di ricerca (lifelong / mismatch / ai). Animazione Framer Motion: pulsazione discreta dei nodi (no movimento aggressivo).
- Sotto: mock-dashboard con 4 metriche statiche stile dashboard, font display Barlow per i numeri grandi:
  • "12.847" + caption "simulazioni eseguite questa settimana"
  • "23" + caption "hypothesis generated"
  • "7" + caption "pattern emergenti pre-validati"
  • "3" + caption "paper draft prodotti via Galileo Lab Translator"

QUATTRO MICRO-FEATURE A DESTRA (card piccole con icona astratta + nome + descrizione 1 riga)
1. SIMULAZIONI PARALLELE — "Testa migliaia di varianti di sequencing didattico su modelli comportamentali. Trova quali funzionano meglio per chi."
2. HYPOTHESIS GENERATION — "Galileo legge la letteratura mondiale su edTech e propone ipotesi di ricerca che valgono la pena di essere testate."
3. PATTERN DISCOVERY — "Trova pattern nei dataset anonimizzati delle università partner che il singolo ricercatore non vede a mano."
4. SYNTHETIC EXPERIMENTS — "Simula esperimenti pedagogici prima di farli su persone vere. Riduce tempo, risorse, e questioni etiche."

BOX "COSA NON FA" (sotto le card)
"Galileo Research Engine non sostituisce la peer-review umana. Non pubblica autonomamente. Non lavora su dati identificabili di singoli studenti. Le scoperte interessanti vanno sempre validate da ricerca empirica condotta dai nostri partner accademici."

Sotto, paragrafo italic Merriweather small: "I paper prodotti con il Research Engine alimentano poi Galileo Tutor delle masterclass. La ricerca che facciamo diventa la formazione che diamo."

ACCENT COLOR
Usa ACCENT = #005EB8 (blu chiaro brand book, già accent della pagina Engaged Research), coerente con il resto della pagina.

═══════════════════════════════════════
CROSS-LINK SOFT TRA LE DUE CAPABILITY
═══════════════════════════════════════

Le due frasi di chiusura sezione (citate sopra in entrambi) sono il cross-link.
- Galileo Tutor chiude con: "...la stessa ricerca che alimenta il Research Engine"
- Galileo Research Engine chiude con: "I paper prodotti con il Research Engine alimentano poi Galileo Tutor delle masterclass"

Niente CTA aggressive. Niente bottoni "vai a /engaged-research". Solo signal narrativo che le capability sono UN sistema coerente.

═══════════════════════════════════════
LINEE GUIDA TRASVERSALI
═══════════════════════════════════════

COERENZA CON L'ESISTENTE
- Riusa GalileoIcon (src/components/GalileoIcon.tsx) per la presenza visiva dell'agente in entrambi i componenti
- Riusa BrandPattern se utile per sfondi sottili (es. variant "abbraccio" in opacity bassa)
- Stessa tipografia già in uso: font-display per eyebrow, font-editorial-italic per H2/lead, font-editorial-regular per sub-headings
- Stessa palette: ang-* per blu, ocra-* per arancio, secondari brand book solo come accenti
- Stesso ritmo motion: motion.* con whileInView, viewport={{ once: true, margin: '-80px' }}, transition con cubic bezier [0.22, 1, 0.36, 1]

NAMING ESPLICITO
Tutte le label visibili usano "Galileo · X" coerentemente con il pattern esistente:
- "Galileo · Tutor" (NUOVO)
- "Galileo · Research Engine" (NUOVO)
- Già esistenti: "Galileo · Career Path Navigator", "Galileo · Agente di ricerca"

COSA NON FARE
- Niente nuovi naming concorrenti a Galileo (no "Athena", no "Sage", no "The Tutor" come brand separato)
- Niente nuove route, niente nuove pagine
- Niente backend reale, niente chat funzionante con stream LLM (la chat di Galileo Tutor è puro mockup statico con 4 messaggi finti)
- Niente animazioni invasive (scroll-jacking, parallax pesante): tono istituzionale-accademico
- Niente claim non supportati ("il primo AI Tutor d'Italia", "Galileo rivoluziona la ricerca"): voce sobria, fattuale

PROCEDURA
1. Apri MbaGateway.tsx e EngagedResearch.tsx, leggi i punti d'innesto e capisci il ritmo visivo delle sezioni circostanti
2. Crea src/components/GalileoTutor.tsx
3. Crea src/components/GalileoResearchEngine.tsx
4. Importa e innesta GalileoTutor in MbaGateway.tsx tra CrossOpCoTracker e la sezione Criteria
5. Importa e innesta GalileoResearchEngine in EngagedResearch.tsx tra EngagedResearchReadingRoom e la sezione Methodology
6. Verifica che il build TypeScript passa
7. Segnala scelte ambigue (es. esatta posizione dei messaggi mockup, palette dei nodi del network graph, stile delle micro-feature card)

DELIVERABLE ATTESI
- Diff dei file modificati (2 file nuovi + 2 page modificati)
- Conferma build OK
- Note su decisioni interpretative

Procedi. Per dubbi (es. variazioni stilistiche dei mockup chat, esatto numero di nodi nel network graph, frasi alternative per H2), segnala invece di improvvisare. Coerenza > creatività in questa estensione: l'agente Galileo deve sembrare UNO solo che si manifesta in ruoli diversi, non agenti diversi che si chiamano per caso allo stesso modo.
```

---

## Note operative per Carlo

**Approccio finale consolidato**: niente nuovi agenti, niente nuovi naming. Estendiamo **Galileo** (già consolidato nel sito) con due nuove capability:
- **Galileo · Tutor** in `/mba-gateway` (tra Cross-OpCo Tracker e Criteria)
- **Galileo · Research Engine** in `/engaged-research` (tra Reading Room e Methodology)

**Cross-link soft tra le due**: frasi di chiusura sezione che dichiarano *"La ricerca che facciamo diventa la formazione che diamo"*. Niente CTA aggressive, niente bottoni. Signal narrativo che le capability sono un sistema coerente.

**Conteggio finale capability di Galileo al pitch 31/5**:
1. Galileo · Career Path Navigator (esistente)
2. Galileo · Agente di ricerca / Reading Room (esistente)
3. Galileo · Tutor (NUOVA)
4. Galileo · Research Engine (NUOVA)

Quattro capability di **un solo agente unico**. Messaggio al pitch: *"Vi proponiamo Galileo. UN agente, quattro capability coordinate. Già in due ruoli nel mockup, lo estendiamo con due in più. Disciplina informativa: ogni capability ha confine dichiarato 'cosa NON fa'."* Risposta strutturale al feedback Caterina della call 8/5 ("3 feature bocciate per boomerang") — non aggiungiamo feature, estendiamo capability di un agente che già conoscono.

**Pattern industriale 2025-2026**: stesso pattern di Khanmigo (Khan Academy), Harvey (avvocati), Cursor (developer), Hippocratic AI (healthcare). UN agente verticale per audience, capability multiple coordinate.

**Prompt precedente deprecato**: [[Prompt Claude Code - AI Tutor e Research Engine]] (v1.0) proponeva agenti separati. Questo prompt v2.0 lo sostituisce strutturalmente.

---

*Versione 2.0 — 15/5/2026 (sera tardi). Pattern consolidato: Galileo come agente unico multi-capability, estensione mirata dei due component esistenti.*
