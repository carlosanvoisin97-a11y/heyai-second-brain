---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione in corso su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt snello per estendere il sito con DUE nuove sezioni — Engaged Network (community esterna preview Q1 2027) + Angelini People (area interna Angelini people riservata, preview)
created: 2026-05-15
updated: 2026-05-15
related:
  - "[[Concept - Engaged Network Community]]"
  - "[[Brief Copy Sito per Claude Code]]"
status: ready-to-paste
---

# Prompt per Claude Code — Engaged Network + Angelini People (versione snella)

> Versione snella v1.2 — sostituisce v1.0 (troppo prescrittiva). Claude Code conosce già design system, font, palette, copy tone. Qui passiamo solo il concept architetturale e i contenuti principali, lasciandogli libertà di esecuzione.

---

## Prompt da incollare

```
Ciao. Estendiamo il sito con DUE nuove sezioni distinte ma legate. Entrambe sono PREVIEW illustrative per il pitch 31/5 — niente backend reale, niente auth funzionante, niente DB. Tutto mockup statico con dati inline.

CONTESTO STRATEGICO
Il brief cliente Angelini Academy (slide 15-17) chiede comunicazione integrata in loop INTERNA → EVENTI → ESTERNA → INTERNA. Oggi il sito non distingue tra il pubblico interno (dipendenti Gruppo Angelini) e l'ecosistema esterno (alumni, ricercatori, media). Le due nuove sezioni risolvono questa ambiguità e aggiungono due asset alla nostra proposta:

1. ENGAGED NETWORK — community esterna pubblica, preview Q1 2027. Audience: alumni MBA Gateway + ricercatori dei 14 atenei partner pre-validati (UCL Knowledge Lab, Cambridge DEFI, KU Leuven O2L, RWTH Aachen, TUM EdTech, Open University IET, CMU HCI, Georgia Tech, Bologna BS, Padova, Leibniz-Institut, Beijing Normal e altri).

2. INSIDE — area interna riservata Angelini people, preview. Audience: dipendenti del Gruppo Angelini Industries (Pharma, Tech, Ventures, Fater) + HR Community. NON intranet operativa (quella resta al fornitore IT di gruppo): è una finestra di comunicazione editoriale sul catalogo formativo, calendario eventi interni e contenuti accademici proprietari.

ROUTING
Due nuove route, non in nav principale:
- /engaged-network — preview pubblica, badge visivo "PREVIEW Q1 2027"
- /angelini-people — preview riservata con mockup login wall, badge visivo "RISERVATO ANGELINI PEOPLE"

Linka entrambe dal footer del sito, sezione Academy.

═══════════════════════════════════════
SEZIONE 1: /engaged-network
═══════════════════════════════════════

ANGLE NARRATIVO
"Il dialogo che continua oltre il Forum." È l'estensione digitale perpetua del Forum annuale Angelini. Voce dominante: Magician nei display (caldo, prima persona plurale), Sage nelle spec funzionali.

SEI FUNZIONALITÀ DA RAPPRESENTARE
1. Paper Discussion Threads — ogni paper Engaged Research apre un thread strutturato di discussione tra membri
2. Pedagogical Quiz light — assessment 8-12 domande sui 3 verticali (longevità over 50 · skills mismatching · AI applicata alla pedagogia), restituisce certificato Engaged Network Member
3. AI Co-pilot moderation hybrid — agente AI groundato sul corpus Engaged Research, modera anti-spam e duplicati con escalation umana a Community Editor del Laboratorio editoriale HeyAI
4. Contributor Tiers silenziosi — Reader → Contributor → Reviewer → Editor; promozione su qualità non quantità; Editor invitati al Forum fisico annuale Casa Angelini come riconoscimento
5. Career Path Tracker alumni MBA Gateway — mappa viva delle scelte di carriera degli alumni dentro le 4 OpCo Angelini Industries (Pharma, Industrial Tech, Consumer, Ventures) ed esterno; auto-aggiornata dagli alumni; lega visivamente al pattern Cross-OpCo Tracker già presente nella Strategia
6. Collaborative Position Paper — una volta l'anno la community drafta collettivamente una Position Paper pubblica su un tema strategico (esempio: "AI ethics in lifelong learning 2027"); Reviewer + Editor co-firmano

PAGE FLOW SUGGERITO
Hero con angle narrativo → grid card 6 feature (icona astratta + nome + descrizione 2 righe) → 3 mockup illustrativi dedicati alle feature più narrative (F1 Paper threads, F14 Career Path Tracker, F18 Position Paper drafting) → sezione Tier silenziosi con criteri di promozione → sezione AI Co-pilot con cosa fa/cosa NON fa → CTA banner blu → FAQ accordion (5 domande tipo: quando apre, chi può iscriversi, costa qualcosa, cosa fa l'AI, perché si parte piccoli) → waitlist form mockup (4 campi, no submit reale) → footer.

═══════════════════════════════════════
SEZIONE 2: /angelini-people
═══════════════════════════════════════

ANGLE NARRATIVO
"Lo spazio dei dipendenti del Gruppo Angelini." Voce dominante: Sage (autorevole + vicino) con apertura Magician minima. Tono istituzionale-caldo, comunicazione del Gruppo verso le sue persone, leggermente più sobrio e personale dell'Engaged Network.

POSIZIONAMENTO IMPORTANTE
Angelini People NON è duplicazione di contenuti del sito pubblico — il catalogo programmi formativi vetrina, i paper Engaged Research open access, il magazine Voci dell'Academy, le Founder Stories, le candidature MBA Gateway restano TUTTI sul sito pubblico perché posizionano il brand e attraggono ecosistema. Angelini People è invece uno STRATO DI VALORE OPERATIVO E RELAZIONALE per chi è già dentro il Gruppo: contenuti e funzionalità che hanno senso solo se sei dipendente Angelini Industries.

Angelini People NON è neanche intranet operativa (no documenti HR, no payroll, no SSO Microsoft, no tool del fornitore IT di gruppo). È una finestra editoriale-relazionale dedicata alle persone del Gruppo nei loro percorsi formativi e nella loro relazione con l'Academy.

LOGIN WALL MOCKUP
Visitatore arriva su /angelini-people e vede una landing pubblica con: hero + spiegazione di cosa è Angelini People + 3-4 card teaser su cosa c'è dentro + pulsante "Accedi" che apre un modal con form mockup login (email aziendale @angelinigroup.com + password). Submit fa un alert "Demo: clicca per vedere la versione interna" e accede alla versione full della pagina. Niente auth reale.

CINQUE AREE PRINCIPALI DA RAPPRESENTARE
1. IL MIO PERCORSO FORMATIVO (Personal Learning Record) — dashboard personale del dipendente: cosa hai fatto (corsi completati, certificazioni, masterclass), cosa hai prenotato (eventi in calendario, iscrizioni pending), cosa l'Academy ti suggerisce in base a ruolo + OpCo + interessi. Mockup: avatar utente fake "Elena Marchetti, Senior Manager · Pharma" con timeline learning + 2-3 raccomandazioni AI.

2. ISCRIZIONI E CANDIDATURE INTERNE — workflow strutturato per applicare a masterclass, executive program, individual intensive training, intercompany mentoring, ecc. Il catalogo lo vede l'esterno sul sito pubblico, ma il workflow di iscrizione (con budget approval manager, calendario compatibilità lavoro, conferma HR) vive qui. Mockup: 2-3 card di programmi in evidenza con stato "Aperto per iscrizioni · scadenza 30 nov 2026" + bottone "Candidati" mockup.

3. MATERIALI POST-CORSO (alumni della masterclass) — slide non pubblicate, recording, paper di approfondimento, comunità riservata ai partecipanti di quel corso. Ha senso solo se hai partecipato. Mockup: 2 card "Le tue masterclass" con materiali allegati + community di partecipanti accessibile.

4. COMUNITÀ DELLE OPCO + CROSS-OPCO — spazi di discussione interna tra colleghi del Gruppo, organizzati per OpCo (Pharma talks, Industrial Tech talks, Consumer talks, Ventures talks) + uno spazio cross-OpCo trasversale. Mockup: 5 card spazi community con preview dei thread recenti + numero membri attivi.

5. COMUNICAZIONE CORPORATE + RICONOSCIMENTI — messaggi del CEO Marco Morbidelli ai dipendenti, town hall recording, lancio interno @ Casa Angelini (slide 19 brief), riconoscimenti agli alumni MBA che hanno fatto carriera nel Gruppo, ricercatori interni che firmano paper. EARLY ACCESS BENEFIT: anteprime di paper Engaged Research 2 settimane prima del go-live pubblico, come riconoscimento dell'appartenenza al Gruppo. Mockup: 3 card "Dal Gruppo" con messaggio Morbidelli + 1 paper in early access + 1 riconoscimento alumni.

PAGE FLOW SUGGERITO
Landing pubblica con hero "Angelini People · lo spazio dei dipendenti del Gruppo" → 5 card teaser delle aree + pulsante "Accedi" → modal login mockup → versione interna full della pagina con le 5 aree → footer (stesso del sito).

ESEMPIO CONCRETO DEL LOOP — la differenza tra sito pubblico, Engaged Network, Angelini People
Un nuovo paper Engaged Research sull'AI applicata alla pedagogia:
• Sito pubblico (/engaged-research): paper completo open access + executive summary 1 pagina + download PDF
• Engaged Network (/engaged-network): thread di discussione tra ricercatori partner + AI Co-pilot moderation
• Angelini People (/angelini-people): pre-print accessibile ai dipendenti 2 settimane prima del go-live pubblico + invito a sessione interna Q&A con l'autore + commento HR Angelini su "cosa significa per Pharma/Tech"
Tre strati diversi di valore sullo stesso contenuto. Niente sovrapposizione.

═══════════════════════════════════════
RELAZIONE TRA LE DUE SEZIONI (importante)
═══════════════════════════════════════

Angelini People ed Engaged Network sono DUE FACCE DELLA STESSA INFRASTRUTTURA, non sezioni isolate. Il Engaged Research è il loro cuore comune:
- Un paper firmato dall'Engaged Research Lab viene pubblicato per il pubblico esterno su /engaged-research → discusso in thread su /engaged-network → presentato in versione executive summary su /angelini-people come materiale formativo per dipendenti
- Il loop INTERNA → EVENTI → ESTERNA → INTERNA del brief si materializza in questa pipeline

Per il mockup pitch: NON serve implementare cross-link funzionanti complessi. Basta che entrambe le pagine, in 1-2 punti, contengano una nota tipo "Questo paper è disponibile anche in [Engaged Network · discussione]" (su Angelini People) o "Versione executive summary disponibile dentro [Angelini People · Angelini people]" (su Engaged Network). Cross-link illustrativi, non funzionanti.

═══════════════════════════════════════
LINEE GUIDA TRASVERSALI (entrambe le sezioni)
═══════════════════════════════════════

COERENZA CON IL SITO ESISTENTE
- Stesso header, stesso footer (con aggiunta link Engaged Network + Angelini People nella sezione Academy)
- Stessa palette ufficiale brand book Angelini (#003087 + #005EB8 + secondari verde/viola/rosso/arancio già definiti)
- Stessa tipografia: Merriweather Light Italic per display + Merriweather Regular per H3-H4 + Barlow per body/UI
- Stessa logica di tono dal Brief Copy Sito già esistente (vault: 20 - Projects/Futuritaly/Angelini Academy/Brief Copy Sito per Claude Code.md). In particolare §3 ToV 5 attributi, §4 lessico approvato/vietato, §7 checklist anti-marketing-speak

DATI MOCK
Crea un file src/data/communityMock.ts (o equivalente nella convenzione che già usi) con: profili alumni MBA fittizi realistici, commenti thread, co-autori Position Paper, programmi formativi del catalogo Angelini People, eventi calendario interno. Niente "Mario Rossi" — nomi realistici mix italiano + internazionale (Elena Marchetti, Daniel Okonkwo, Sebastian Müller, Carlotta Bianchi tipo).

COSA NON FARE
- Niente backend, niente API routes, niente DB
- Niente form funzionanti (mockup visivo con onsubmit preventDefault + alert "Demo, non collegato a backend")
- Niente auth reale per Angelini People (login wall è puro mockup visivo)
- Niente animazioni scroll-jacking o parallax pesante: tono istituzionale, non landing creative agency
- Niente leaderboard pubblica gamificata (cultural fit Angelini)

PROCEDURA
1. Crea le route /engaged-network e /angelini-people nel router
2. Crea le page component corrispondenti
3. Riutilizza componenti esistenti dove possibile; crea nuovi solo se serve
4. Aggiungi link nel footer + eventualmente card teaser in Home sotto sezione "Cosa stiamo costruendo"
5. Verifica build pulito
6. Segnala scelte ambigue invece di decidere da solo (es. nome del modal login Angelini People, palette specifica delle card teaser, lunghezza copy delle FAQ)

DELIVERABLE ATTESI
- Diff dei file modificati
- Lista componenti creati
- Conferma build OK
- Note su decisioni interpretative + dubbi residui

Procedi. Per i dubbi grossi che incontri (es. il login wall di Angelini People merita un layout più ricco? le card del catalogo Angelini People vanno linkate a pagine dettaglio dei singoli programmi?), fermati e chiedimi invece di improvvisare.
```

---

## Note operative per Carlo

**Differenze vs v1.0**:
- Da ~6.500 parole a ~1.400 parole (-78%)
- Niente più micro-spec di font-weight, line-height, letter-spacing (Claude Code le applica per default dal lavoro già fatto)
- Niente più copy letterale di 12 sezioni — solo angle narrativo + page flow suggerito
- Nuovo asset architetturale: la sezione Angelini People come secondo territorio interno riservato
- Cross-link Angelini People ↔ Engaged Network illustrativi (no implementazione complessa)

**Cosa Claude Code costruirà**:
- `/engaged-network` (preview pubblica con badge Q1 2027) — 6 feature illustrate
- `/angelini-people` (login wall mockup + 4 aree riservate) — catalogo programmi + calendario + Engaged Research per Angelini people + Voci dell'Academy editoriale
- Link footer + eventuale card teaser in Home
- File dati mock condiviso tra le due sezioni

**Cosa porteremo a Caterina al pitch 31/5**:
- 3 territori chiari nella sitemap: pubblico (10 pagine + Engaged Research Lab) + esterno community (Engaged Network preview) + interno (Angelini People preview)
- Positioning commerciale come "tre livelli, una infrastruttura"
- Loop INTERNA → EVENTI → ESTERNA → INTERNA del brief materializzato

**Da sondare con Elena al touchpoint 18/5**:
- Reazione al concept Angelini People (è leggibile dal cliente come risposta al loop comunicazione integrata o come invasione di campo del fornitore IT gruppo?)
- Naming Angelini People vs alternative (Angelini Angelini People · Academy Angelini People · Within · Open · semplicemente "Riservato")
- Cosa va dentro Angelini People come catalogo formativo — chi popola, chi modera, chi è owner di gestione

---

*Versione 1.2 — 15/5/2026 (sera). Patch v1.1→v1.2: snellito drasticamente + aggiunta sezione Angelini People come secondo territorio interno riservato (su decisione architetturale Carlo 15/5 sera).*
