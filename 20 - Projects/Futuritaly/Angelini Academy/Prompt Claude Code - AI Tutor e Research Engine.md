---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione in corso su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt snello per integrare illustrativamente due nuove funzionalità AI (AI Tutor + Research Engine) dentro le pagine esistenti del sito Angelini Academy. NO nuove pagine, NO nuove route
created: 2026-05-15
updated: 2026-05-15
related:
  - "[[Concept - Engaged Network Community]]"
  - "[[Brief Copy Sito per Claude Code]]"
  - "[[Strategia Website 2026]] §5.3 (AI Layer 5 funzionalità del sito)"
status: ready-to-paste
---

# Prompt per Claude Code — AI Tutor + Research Engine (integrazione in pagine esistenti)

> Versione snella per estendere il sito esistente con due nuove funzionalità AI illustrative. Claude Code conosce già design system, font, palette, copy tone. Niente nuove pagine — tutto dentro le pagine già costruite.

---

## Prompt da incollare

```
Ciao. Integriamo nel sito due nuove funzionalità AI illustrative dentro pagine già esistenti. NIENTE nuove pagine, NIENTE nuove route — vanno sezioni nuove dentro pagine vecchie. Tutto mockup statico, niente backend, niente API.

CONTESTO STRATEGICO
Le due nuove funzionalità completano il "Layer AI di formazione e ricerca" che si affianca al Layer AI del sito già implementato. Non sovrappongono.

1. AI TUTOR — compagno di studio AI per i discenti dei programmi formativi Angelini Academy (MBA Gateway, masterclass, executive program). Lo presentiamo sul sito pubblico come selling point per chi si candida.

2. RESEARCH ENGINE — motore AI per accelerare la ricerca scientifica dell'Engaged Research Lab. Pattern simile a GNoME / AlphaFold / Coscientist / FunSearch applicato al dominio pedagogia + edTech + AI in education + skills mismatch. Differenziale di posizionamento "fondazione + research lab tech-augmented".

═══════════════════════════════════════
FUNZIONALITÀ 1: AI TUTOR
═══════════════════════════════════════

DOVE LA INTEGRIAMO
Pagina principale: /gateway-mba — nuova sezione dedicata di ~1/3 pagina, posizionata SOTTO la timeline del programma e PRIMA della sezione borse di studio
Pagine secondarie con menzione (1 bullet ciascuna, no mockup completo):
- /percorsi/talent — come benefit di iscrizione al programma MBA
- /masterclass (se esiste come pagina, altrimenti skippare) — come benefit incluso nelle masterclass

ANGLE NARRATIVO
"Un compagno di studio che non dorme mai." Voce: Magician caldo nei display + Sage fattuale nelle spec.

CONTENUTO SEZIONE IN /gateway-mba
- Eyebrow Barlow SemiBold uppercase: "DENTRO IL PROGRAMMA · AI TUTOR"
- H2 Merriweather Light Italic: "Un compagno di studio che non dorme mai."
- Lead Merriweather Light Italic: "Ogni studente del programma Angelini Academy Gateway ha accesso a un AI Tutor personale, groundato sui materiali del corso e sui paper dell'Engaged Research Lab. Risponde alle domande quando il docente non c'è, propone esercizi extra dove vede gap, riassume le sessioni che hai perso."
- Layout 2 colonne. Sinistra body Barlow Regular con 3 paragrafi + 4 bullet "Cosa fa / Cosa NON fa". Destra: mockup statico di chat AI Tutor (vedi sotto).

QUATTRO BULLET "COSA FA / COSA NON FA"
COSA FA:
• Risponde a domande sui materiali del corso, citando paper specifici
• Propone esercizi extra quando rileva un gap di comprensione
• Riassume sessioni live perse con punti chiave + materiale di rinforzo
• Fa spaced repetition retention con micro-prompt mirati nelle 2 settimane post-masterclass

COSA NON FA:
• Non valuta il merito intellettuale del tuo lavoro
• Non sostituisce il docente o il tutor umano
• Non pubblica autonomamente nulla
• Non condivide i tuoi dati con terzi — la conversazione resta tua

MOCKUP CHAT (componente illustrativo a destra della sezione)
Visual: finestra chat stilizzata su sfondo bianco, intestazione "AI Tutor · Masterclass Leadership in Pharma 2026", 4 messaggi alternati studente-AI:
1. Studente: "Non ho capito bene il punto sulla skill obsolescence di cui ha parlato Prof. Morandin ieri. Puoi riassumere?"
2. AI Tutor (con piccolo badge "groundato su Paper #14 Engaged Research"): "La skill obsolescence nel settore pharma raddoppia ogni 5-7 anni post-COVID (dato Morandin 2025, citato anche nel paper UCL Knowledge Lab che hai nei materiali). Il punto chiave era: non basta riqualificarsi una volta, serve un metodo continuo. Vuoi che ti suggerisca 2 esercizi di applicazione?"
3. Studente: "Sì grazie"
4. AI Tutor: "Esercizio 1 (15 min): mappa 3 skill del tuo ruolo a 5 anni fa vs oggi. Esercizio 2 (30 min): scrivi un retraining plan ipotetico per un caso pharma. Ti guido se serve."

PATTERN VISIVO
Bordi morbidi 8px, palette blu istituzionale #003087 per avatar AI + grigio chiaro per avatar studente, ombra sottile, ritmo tipografico coerente col resto del sito.

MENZIONI SECONDARIE
- /percorsi/talent: aggiungere 1 bullet nella lista benefit "Un AI Tutor personale 24/7 che ti accompagna in ogni masterclass" con anchor link a /gateway-mba#ai-tutor
- /masterclass (se esiste come pagina): aggiungere 1 bullet "AI Tutor incluso" nelle spec di ogni masterclass

═══════════════════════════════════════
FUNZIONALITÀ 2: RESEARCH ENGINE
═══════════════════════════════════════

DOVE LA INTEGRIAMO
Pagina principale: /engaged-research — nuova sezione dedicata di ~1/2 pagina, posizionata DOPO i 3 verticali di ricerca (longevità over 50, skills mismatching, AI applicata pedagogia) e PRIMA della lista dei paper
Pagine secondarie con menzione (1 bullet):
- /percorsi/researcher — come differenziale per attrarre ricercatori partner accademici

ANGLE NARRATIVO
"Migliaia di simulazioni. Una ricerca più veloce." Voce dominante Sage fattuale (è una pagina accademica) con apertura Magician minimale.

CONTENUTO SEZIONE IN /engaged-research
- Eyebrow Barlow SemiBold uppercase: "ENGAGED RESEARCH LAB · RESEARCH ENGINE"
- H2 Merriweather Light Italic: "Migliaia di simulazioni. Una ricerca più veloce."
- Lead Merriweather Light Italic: "Il Research Engine è il motore AI con cui l'Engaged Research Lab simula in parallelo migliaia di varianti di un esperimento pedagogico, prima ancora che lo testiamo su persone vere. Lo stesso approccio con cui i grandi research lab AI scoprono nuovi materiali, nuove proteine, nuove soluzioni matematiche — applicato al nostro dominio: come si apprende meglio."
- Layout 2 colonne. Sinistra: visualizzazione astratta + dashboard mockup (vedi sotto). Destra: 4 micro-feature card + box "Cosa NON fa".

VISUALIZZAZIONE A SINISTRA
Componente illustrativo che evoca "simulazioni parallele":
- Sopra: network graph stilizzato in SVG inline — 30-50 nodi piccoli connessi da linee sottili, in palette blu istituzionale + arancio chiaro come accent. Tre cluster di nodi distinti che rappresentano i 3 verticali di ricerca. Animazione leggera Framer Motion: pulsazione discreta dei nodi, nessun movimento aggressivo.
- Sotto: mock-dashboard con 4 metriche statiche:
  • "12.847 simulazioni eseguite questa settimana"
  • "23 hypothesis generated"
  • "7 pattern emergenti pre-validati"
  • "3 paper draft prodotti via Lab Translator"

QUATTRO MICRO-FEATURE A DESTRA (card piccole con icona astratta + nome + descrizione 1 riga)
1. SIMULAZIONI PARALLELE — "Testa migliaia di varianti di sequencing didattico su modelli comportamentali. Trova quali funzionano meglio per chi."
2. HYPOTHESIS GENERATION — "L'AI legge la letteratura mondiale su edTech e propone ipotesi di ricerca che valgono la pena di essere testate."
3. PATTERN DISCOVERY — "Trova pattern in dataset di apprendimento dalle università partner — anonimizzati — che il singolo ricercatore non vede a mano."
4. SYNTHETIC EXPERIMENTS — "Simula esperimenti pedagogici prima di farli su persone vere. Riduce tempo, risorse, e questioni etiche."

BOX "COSA NON FA" (sotto le card)
"Il Research Engine non sostituisce la peer-review umana. Non pubblica autonomamente. Non lavora su dati identificabili di singoli studenti. Le scoperte interessanti vanno sempre validate da ricerca empirica condotta dai nostri partner accademici."

CROSS-LINK NELLA SEZIONE
Paragrafo finale della sezione (sotto il box "Cosa NON fa"), small Merriweather Light Italic 17px:
"I paper prodotti con il Research Engine alimentano l'AI Tutor delle masterclass. La ricerca che facciamo diventa la formazione che diamo."
Link interno a /gateway-mba#ai-tutor.

MENZIONI SECONDARIE
- /percorsi/researcher: aggiungere 1 bullet "Lavora con il nostro Research Engine — il motore AI che accelera la ricerca su scala" con anchor link a /engaged-research#research-engine

═══════════════════════════════════════
CROSS-LINK TRA LE DUE FUNZIONALITÀ
═══════════════════════════════════════

Nella sezione AI Tutor dentro /gateway-mba, paragrafo finale small italic Merriweather:
"L'AI Tutor è groundato sui paper firmati dall'Engaged Research Lab — la stessa ricerca che alimenta il Research Engine."
Link interno a /engaged-research#research-engine.

Nella sezione Research Engine dentro /engaged-research, paragrafo finale già citato sopra: link a /gateway-mba#ai-tutor.

Cross-link soft, niente CTA aggressive.

═══════════════════════════════════════
LINEE GUIDA TRASVERSALI
═══════════════════════════════════════

COERENZA CON IL RESTO DEL SITO
- Riusa componenti esistenti dove possibile (Card, EyebrowLabel, IconButton)
- Stessa palette ufficiale, stesso ritmo tipografico Merriweather+Barlow
- Stessa logica di tono dal Brief Copy Sito (vault: 20 - Projects/Futuritaly/Angelini Academy/Brief Copy Sito per Claude Code.md)
- Nuovi componenti solo se serve, in src/components/AILayer/:
  • AITutorChatMockup.tsx (mockup chat statico per AI Tutor)
  • ResearchEngineVisualization.tsx (network graph + dashboard mockup)
  • FeatureMicroCard.tsx (le 4 card piccole della Research Engine)
- Anchor anchor link funzionanti per cross-link (gateway-mba#ai-tutor, engaged-research#research-engine)

COSA NON FARE
- Niente nuove pagine, niente nuove route
- Niente backend, niente chat funzionante reale (la chat AI Tutor è puro mockup statico con messaggi finti)
- Niente animazioni invasive: tono istituzionale-accademico, non landing creative agency
- Niente claim non supportati ("rivoluziona la ricerca", "il primo AI Tutor in Italia", ecc.) — voce sobria

DATI MOCK
Estendi il file di dati mock già esistente (es. src/data/communityMock.ts o equivalente) con:
- 4 messaggi chat finti per AI Tutor mockup
- 4 metriche statiche per Research Engine dashboard
- Eventuali altri dati di placeholder che servono

PROCEDURA
1. Identifica le pagine esistenti da estendere (/gateway-mba e /engaged-research come principali, /percorsi/talent e /percorsi/researcher e /masterclass come secondarie con piccola menzione)
2. Aggiungi le sezioni nuove nelle pagine principali, con anchor id (#ai-tutor, #research-engine)
3. Crea i componenti illustrativi necessari in src/components/AILayer/
4. Aggiungi le menzioni secondarie nelle pagine percorso con anchor link
5. Aggiungi i cross-link tra le due sezioni
6. Verifica build pulito
7. Segnala scelte ambigue invece di decidere da solo (es. esatta posizione della sezione dentro la pagina, lunghezza del paragrafo se troppo denso, colore esatto del badge "groundato su Paper #14")

DELIVERABLE ATTESI
- Diff dei file modificati
- Lista componenti creati
- Conferma build OK
- Note su decisioni interpretative

Procedi. Per dubbi grossi (es. esiste già una sezione "Cosa include il programma" in /gateway-mba? c'è già una sezione simile in /engaged-research che andrebbe integrata invece che aggiunta?), fermati e chiedimi.
```

---

## Note operative per Carlo

**Risultato atteso**: due nuove sezioni illustrative dentro pagine esistenti del sito, senza creare route nuove. AI Tutor vive principalmente in `/gateway-mba` + cross-mention in pagine talent e masterclass. Research Engine vive principalmente in `/engaged-research` + cross-mention in pagina researcher.

**Cross-link soft tra le due**: piccoli paragrafi italic Merriweather di chiusura sezione che rimandano da AI Tutor → Research Engine e viceversa. Non CTA aggressive, solo signal che le due funzionalità sono **un sistema coerente** ("la ricerca che facciamo diventa la formazione che diamo").

**Componenti nuovi**: 3 componenti React in `src/components/AILayer/` (chat mockup, network visualization, micro-card). Tutti illustrativi statici, nessuno con backend reale.

**Per il pitch 31/5**: queste due funzionalità aggiunte portano il count totale AI a **7 funzionalità** (5 del sito già esistenti + 2 nuove AI-T2 e AI-T3) in versione mockup illustrativa, tutte coerenti come sistema organizzato. Si presentano a Caterina come *"abbiamo ascoltato il vostro feedback della call 8/5, ora vi proponiamo 7 funzionalità organizzate come sistema, ciascuna con confine 'cosa NON fa', dimensionate sui vostri contenuti reali"*.

---

*Versione 1.0 — 15/5/2026. Concept post chat 15/5 sera (consolidamento AI-T1 già nel mockup esistente, integrazione T2 e T3 illustrative nelle pagine esistenti).*
