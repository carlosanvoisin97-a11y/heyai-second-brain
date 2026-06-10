---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt operativo per patchare /percorsi/hr-business in modo da rappresentare bene il cluster 3 "Corporate HR & L&D decision makers" del documento target Elena v.012. Audit Carlo 19/5 sera ha rilevato 5 buchi nella copertura cluster 3 — questo prompt li chiude con 3 azioni mirate (versione asciugata post-feedback Carlo: rimossa section "ricerca dentro i programmi" perché appesantisce, sostituiti 2 dei 4 box masterclass esistenti invece di aggiungere section Executive Programs nuova, callout finale ridotto a solo Forum/Eventi perché Newsletter esiste già).
created: 2026-05-19
updated: 2026-05-19
status: ready-to-paste
source_call: trascrizione `2026-05-19 - Trascrizione Call FuturItaly+HeyAI - Allineamento Proposta Sito.docx` + doc target `Analisi cluster utenti sito v.012 - Elena Chiti FuturItaly.docx`
related: "[[_Angelini Academy]] · [[Mockup Sito - Struttura e Copy Completo]] · [[Pre-call Elena 18-5 — Strategia Angelini Academy]] · [[Prompt Claude Code - Modifiche post-call 19-5]]"
---

# Prompt per Claude Code — Patch /percorsi/hr-business (cluster 3 Elena v.012) — v2 asciugata

> Patch chirurgica al solo file `src/pages/PercorsiHrBusiness.tsx`. Tre azioni per coprire i bisogni cluster 3 dichiarati da Elena in `Analisi cluster utenti sito v.012`: posizionamento thought leader nel hero + sostituzione di 2 dei 4 box masterclass con programmi annuali executive (LBS + LUISS BS) + Future Skills Observatory + 1 callout finale Forum/Eventi. Nessuna modifica architetturale, niente nuove route, niente nuove dipendenze. Tutte le aggiunte rispettano lo stile esistente (font editorial italic, accent verde `#007864`, ring `ang-200/60`, max-w-6xl). Resta tutto invariato fuori da questo file.

## Cosa NON entra in questo prompt

- 5° percorso Imprese `/percorsi/imprese` → prompt successivo, round dedicato
- Hub editoriale `/engaged-research` doppio livello → prompt dedicato dopo conferma FuturItaly su modello accesso
- PersonaSelect 5ª carta Imprese → prompt successivo
- Cross-link a Engaged Research come section dedicata "La ricerca dentro i vostri programmi" → tagliato post-feedback Carlo (appesantisce). Il segnale di rigore scientifico è preservato implicitamente nella Future Skills Observatory (i 4 trend sono paper-based)
- Callout Talent pipeline + Callout Newsletter business → tagliati post-feedback Carlo (Newsletter già esistente nella PageShell variant `business`, Talent pipeline implicito nei programmi)
- Le 4 modifiche del prompt 19/5 (PersonaSelect facoltativa + gender + Gateway prima dell'hub + rimozione calcolatore + Network homepage + CommunityCallout) → restano valide, da eseguire prima o dopo questo patch in modo indipendente

## Sintesi 3 azioni

| # | Sezione | Tipo modifica | Bisogno cluster 3 servito |
|---|---|---|---|
| 1 | Hero | Revisione intro | Posizionamento thought leader (vs catalogo) |
| 2 | Section Masterclass esistente | Sostituzione 2 dei 4 box + rinaming H2 | Executive education annuale + rete partner LBS/LUISS |
| 3 | NUOVA "Future Skills Observatory" dopo Caso Pharma EU | Aggiunta blocco | Trend AI + skill mismatching + paper executive |
| 4 | NUOVO "Callout Eventi" prima della CTA paper L&D | Aggiunta blocco compatto | Forum Casa Angelini come asset reputazionale |

Sequenza finale pagina post-patch:
1. PageShell hero (intro aggiornato — azione 1)
2. Industries (4 settori) — invariato
3. Masterclass / Programmi (4 card, 2 sostituite — azione 2) — H2 rinominato
4. Caso di studio Pharma EU — invariato
5. **NUOVO** Future Skills Observatory (azione 3)
6. **NUOVO** Callout Eventi (azione 4)
7. CTA paper L&D + PreviewModal — invariato

File da 260 a ~400 righe stimato.

---

## Prompt da incollare

```
Ciao. Patch chirurgica al solo file src/pages/PercorsiHrBusiness.tsx. Quattro azioni mirate per allineare la pagina HR & Business al cluster 3 "Corporate HR & L&D decision makers" del documento target Elena v.012. Niente nuove pagine, niente nuove dipendenze, niente nuove route. Tutte le aggiunte e modifiche devono rispettare lo stile esistente (PageShell, accent ACCENT='#007864', font editorial italic, motion fade-in-y, max-w-6xl, ring ang-200/60, rounded-3xl, sezioni separate da bg-white / bg-ang-50). Procedi sezione per sezione, mantieni tutto il resto invariato. Nessuna modifica all'import header, nessuna nuova lib, nessun npm install.

═══════════════════════════════════════
1. HERO — revisione intro per posizionamento thought leader
═══════════════════════════════════════

PROBLEMA
L'intro attuale "Programmi di Corporate Learning con applicazione AI dimostrata, non promessa. Percorsi su misura per pharma, biotech, manufacturing e financial services — co-progettati con la tua azienda." funziona ma resta sul registro "anti-catalogo / co-progettato". Manca il segnale che Angelini Academy si propone come thought leader / interlocutore di pari livello scientifico per decisori HR enterprise (CHRO, CLO, Head of People Development), che è quello che il cluster 3 cerca.

AZIONE
Lasciamo invariato l'H1 "L&D oltre il catalogo". Sostituiamo l'intro corrente con questa formulazione più ricca:

intro nuovo:
"Programmi di Corporate Learning fondati su ricerca peer-reviewed e co-progettati con i partner accademici internazionali. Per CHRO, Chief Learning Officer e Head of People Development che cercano un interlocutore di pari livello scientifico — non un catalogo, un laboratorio."

Nessun altro intervento sulla PageShell. Eyebrow e breadcrumb restano identici.

═══════════════════════════════════════
2. MASTERCLASS / PROGRAMMI — sostituzione 2 dei 4 box + rinaming H2
═══════════════════════════════════════

PROBLEMA
Le 4 masterclass attuali (AI for PM · Critical Thinking & Data Driven Decision Making · Creative Leadership · Empathetic Engineer) sono tutte short courses (1-2 giorni con partner POLIMI / SDA Bocconi / RCA / Imperial). Il cluster 3 enterprise cerca anche programmi annuali strutturati di executive education. Va ribilanciato il mix mantenendo 4 box ma sostituendo gli ultimi 2 (Creative Leadership + Empathetic Engineer) con 2 programmi annuali di partner top-tier (LBS + LUISS BS). H2 da rinominare per riflettere il mix.

AZIONE — parte 1: rinaming H2 della section
Cambia l'H2 da:
"Quattro masterclass, quattro partner accademici."
a:
"Quattro programmi, quattro partner internazionali."

L'span italic ang-600 va sulla seconda parte come oggi ("quattro partner internazionali" in italic).

L'eyebrow esistente "Programmi Corporate Learning" sopra l'H2 resta invariato.

AZIONE — parte 2: sostituzione delle CARD 3 e CARD 4 dell'array masterclasses
Mantieni le prime 2 card invariate (AI for PM POLIMI · Critical Thinking SDA Bocconi). Sostituisci le card 3 e 4 con queste due:

CARD 3 (sostituisce Creative Leadership · Royal College of Art):
{
  title: 'Executive Program for General Manager',
  duration: '12 mesi · modular · hybrid',
  partner: 'London Business School',
  summary:
    'Programma annuale di leadership generalista per executive in transizione verticale. Tre moduli residenziali a Londra, due masterclass on-site a Casa Angelini, mentorship continua con LBS faculty.',
}

CARD 4 (sostituisce Empathetic Engineer · Imperial College):
{
  title: 'Mastery Program for Managers',
  duration: '9 mesi · evening + weekend',
  partner: 'LUISS Business School',
  summary:
    'Percorso intensivo per middle management con focus su decision making sotto incertezza. Co-progettato con la cattedra LUISS Lifelong Learning & Mediterranean Labor Market. Tesi finale applicata a un caso reale dell’azienda partecipante.',
}

VINCOLI
Nessun cambio strutturale al rendering delle card (mantengono lo stesso markup motion.article + rounded-3xl + partner badge + title + duration + summary). Solo i dati nell'array masterclasses cambiano. Le card 1 e 2 restano identiche. Nessun cambio ai colori, accent, padding, animazioni.

═══════════════════════════════════════
3. NUOVO BLOCCO — "Future Skills Observatory" dopo Caso Pharma EU
═══════════════════════════════════════

PROBLEMA
Cluster 3 Elena dichiara esplicitamente di cercare "Trend su AI e competenze future" + "Future skills observatory" + "Report sullo skill mismatch". Il sito non ha nulla del genere — Engaged Research è formato paper accademico, non format trend executive scannabile. Va costruito un blocco trend leggibile in 30 secondi che il CHRO scarica e gira al CEO.

AZIONE
Aggiungi nuova section IMMEDIATAMENTE DOPO la section Caso di studio Pharma EU (riga ~210). Stile: sfondo bg-ang-50, max-w-6xl, padding py-20 lg:py-24.

Struttura:

— Eyebrow font-display tracking-[0.4em] color ACCENT: "Future Skills Observatory · Q2 2026"
— H2 font-editorial-italic clamp(1.8rem, 3vw, 2.6rem) tracking-tight: "Quattro trend che stiamo <span italic ang-600>misurando ora</span>."
— Subtitle text-[14.5px] ang-900/65 max-w-2xl mt-4: "Letture brevi per decisori HR. Aggiornate ogni trimestre con dati di campo dai nostri programmi corporate e dalla rete dei partner accademici."

Sotto, layout 2 colonne md:grid-cols-2 gap-5 lg:gap-6 mt-10 con 4 trend card. Stile card: rounded-3xl bg-white p-7 ring-1 ring-ang-200/60, hover -translate-y-0.5, motion fade-in-y stagger 0.08.

TREND 1
— Number font-editorial-italic text-[2.4rem] font-light leading-none ang-600: "01"
— Tag uppercase tracking-[0.2em] text-[11px] ocra-500 mt-3: "AI applicata · misurato"
— Title font-editorial-regular text-[1.25rem] mt-2 leading-tight ang-900: "Calibrazione della fiducia umana verso l'output AI"
— Body text-[13.5px] leading-[1.6] ang-900/65 mt-3: "Studio interno 312 dipendenti senior pharma: +34% trust verso tutor umano vs LLM standalone, anche quando output AI oggettivamente più completo. Implicazione: programmi corporate devono insegnare esplicitamente come valutare l'AI."

TREND 2
— Number: "02"
— Tag: "Manufacturing 4.0 · longitudinale"
— Title: "Sense of agency nei plant manager 50+"
— Body: "36 mesi su 120 plant manager italiani in transizione MES + IoT + digital twin. 89% completion rate, ma +47% tempo medio vs pari 30-49. Driver di successo: co-decisione sulle specifiche del rollout, non training top-down."

TREND 3
— Number: "03"
— Tag: "Skill mismatching · meta-analisi"
— Title: "Il second-mover learning sud-europeo"
— Body: "8.047 laureati IT/ES/PT tracciati su 36 mesi post-laurea. 64% si ri-forma entro 3 anni (vs 38% nord EU). Opportunità unica per Academy mediterranea: formazione per chi ha già un primo lavoro ma cerca uno scarto di carriera."

TREND 4
— Number: "04"
— Tag: "Pharma EU · forecast"
— Title: "Cinque cluster di competenze pharma 2025-2030"
— Body: "Survey 14 aziende campione (n=2.800) + 47 HR director: data literacy avanzata, AI-augmented R&D, regulatory agility, supply chain digitale, leadership ibrida. Gap medio mid-senior: 38%. Programmi re-skilling 18-24 mesi co-progettati."

Sotto al grid (mt-10), CTA ghost inline allineato a sinistra: button che apre lo stesso PreviewModal del paper L&D esistente (riuso usePreview hook + PreviewModal component già in pagina) ma con questi campi:

preview.open({
  kind: 'preview',
  eyebrow: 'Future Skills Observatory · Q2 2026',
  title: 'Future Skills Observatory — 4 trend, 12 pagine',
  body:
    'Una sintesi executive trimestrale dei trend di competenze che stiamo misurando nei nostri programmi corporate e nella rete dei 14 partner accademici. Quattro letture brevi: calibrazione della fiducia umana verso l’AI, sense of agency nei plant manager senior, second-mover learning sud-europeo, cinque cluster di competenze pharma 2025-2030.',
  bullets: [
    'Trend 01 · Calibrazione della fiducia umana verso l’output AI',
    'Trend 02 · Sense of agency nei plant manager 50+',
    'Trend 03 · Il second-mover learning sud-europeo',
    'Trend 04 · Cinque cluster di competenze pharma 2025-2030',
  ],
  meta: 'PDF · 12 pagine · IT/EN',
  ctaLabel: 'Iscriviti per ricevere l’Observatory',
})

Etichetta del button: "Scarica l'Observatory completo (12 pagine)" + freccia svg coerente con quella della CTA paper L&D esistente. Stile button: rounded-full bg-ang-900 text-ang-50 px-7 py-3.5 text-[14px] font-semibold hover:bg-ang-800.

VINCOLI
Niente animazioni complesse, solo motion fade-in-y consueto (initial opacity 0 y 16 → whileInView opacity 1 y 0 → viewport once true margin -80px → transition duration 0.5 delay i*0.08). Niente immagini, niente icone. Solo numerazione editoriale + testo. Restare leggibili e secchi — non è marketing, è dashboard di insight.

═══════════════════════════════════════
4. NUOVO BLOCCO — "Callout Eventi" prima della CTA paper L&D
═══════════════════════════════════════

PROBLEMA
Manca un ponte verso il Forum Casa Angelini come asset reputazionale di partecipazione executive. Il cluster 3 cerca "Eventi executive · Forum e think tank" — va segnalato come destinazione naturale del decisore HR enterprise che ha letto la pagina e cerca momenti di incontro fisico con la rete.

AZIONE
Aggiungi nuova section IMMEDIATAMENTE PRIMA della section CTA paper L&D esistente. Stile: sfondo bg-white, max-w-6xl, padding py-14 lg:py-16 (compatta, è un ponte non un blocco principale).

Struttura: layout 2 colonne lg:grid-cols-[1.3fr_1fr] gap-10 items-center.

Colonna sinistra:
— Eyebrow font-display tracking-[0.4em] text-[12px] uppercase ACCENT: "Eventi executive"
— H2 font-editorial-italic clamp(1.6rem, 2.4vw, 2rem) tracking-tight ang-900 mt-3: "Forum Casa Angelini, <span italic ang-600>una volta l'anno</span>."
— Body text-[14.5px] leading-[1.65] ang-900/70 mt-4 max-w-md: "L'incontro annuale fisico dove CHRO, Chief Learning Officer e Head of Innovation incontrano i ricercatori partner Angelini e la rete dei 14 atenei pedagogici. Su invito."
— Link inline mt-6 inline-flex items-center gap-2 text-[14px] font-medium ACCENT hover:text-ang-900 tracking-tight: "Vedi tutti gli eventi" + freccia svg piccola (riusa lo stile della freccia "Scarica il paper" già in pagina). Linka a /eventi.

Colonna destra:
— Box rounded-2xl bg-ang-50 p-6 ring-1 ring-ang-200/40
— Eyebrow uppercase tracking-[0.2em] text-[10px] ocra-500: "Edizione precedente"
— Title font-editorial-regular text-[1.05rem] leading-tight ang-900 mt-2: "Forum 2025 · 3 giorni a Casa Angelini"
— 3 stat compatte grid grid-cols-3 gap-3 mt-4:
  - "120" / "executive partecipanti"
  - "14" / "atenei rappresentati"
  - "8h" / "talk + roundtable"
— Microcopy text-[11.5px] ang-900/55 mt-4 italic: "Su invito coordinato con FuturItaly e con il team Angelini."

VINCOLI
Callout compatto, non più alto di ~280px su desktop. Niente immagini, niente foto. Solo testo + box stat. Motion fade-in-y stagger fra colonna sinistra (delay 0) e colonna destra (delay 0.1).

═══════════════════════════════════════
NOTE GENERALI
═══════════════════════════════════════

Sequenza finale della pagina dopo il patch (per verifica):
1. PageShell hero (intro aggiornato per azione 1)
2. Industries (4 settori) — invariato
3. Programmi (4 card, di cui 2 sostituite per azione 2 + H2 rinominato) — modificato
4. Caso di studio Pharma EU — invariato
5. **NUOVO** Future Skills Observatory (azione 3)
6. **NUOVO** Callout Eventi Forum (azione 4)
7. CTA paper L&D + PreviewModal — invariato

Lunghezza totale stimata pagina post-patch: +2 section nuove + 1 section modificata (Masterclass) + intro hero. File da ~260 a ~400 righe.

Stile: motion fade-in-y consueto per le nuove section (initial opacity 0 y 16 → whileInView opacity 1 y 0 → viewport once true margin -80px → transition duration 0.5 stagger 0.08).

Accessibility: tutti i nuovi heading hanno semantica corretta (h2 per section, h3 per card title nelle trend). Nessun click handler senza aria-label. PreviewModal già accessible per design.

Quando hai finito, fammi un dump della sequenza section visibile da PercorsiHrBusiness.tsx (solo nomi section in ordine, una per riga) così verifico al volo che la sequenza sia corretta. Poi committa con messaggio:

"feat(hr-business): swap 2 masterclass with LBS+LUISS executive programs + add Future Skills Observatory + Forum callout — patch cluster 3 Elena v.012"

Grazie.
```

---

## Note di redazione (per Carlo, non per Claude Code)

**Cambiamenti rispetto alla v1 di questo prompt** (per cronistoria, post-feedback Carlo 19/5 sera):

- ❌ Rimossa azione "Executive Programs come nuova section": le 2 nuove card (LBS Executive Program for General Manager + LUISS Mastery Program for Managers) ora sostituiscono Creative Leadership RCA + Empathetic Engineer Imperial dentro l'array `masterclasses` esistente. La section resta unica, H2 rinominato da "Quattro masterclass" → "Quattro programmi" per riflettere il mix executive + short.
- ❌ Rimossa azione "La ricerca dentro i vostri programmi" (cross-link Engaged Research come blocco dedicato): appesantiva la pagina. Il segnale di rigore scientifico resta implicito nei 4 trend dell'Observatory (sono tutti paper-based).
- ❌ Rimossi i callout Talent pipeline + Newsletter business: la Newsletter è già coperta dalla PageShell `variant='business'` esistente, il Talent pipeline è implicito nei programmi.
- ✅ Restano callout Forum/Eventi (solo 1 callout finale invece di 3): il Forum è asset reputazionale specifico del cluster 3.

**Implicazioni narrative**:

- La pagina diventa più snella (~400 righe vs 560 prima): meglio per il cluster 3 che non ama overload informativo.
- Il segnale "ricerca dentro i programmi" è preservato implicitamente: i 4 trend Observatory sono evidence-based (dataset, n=, paper). Il cluster 3 legge i numeri prima di leggere il cross-link.
- Il mix Programmi diventa molto più credibile per executive enterprise: POLIMI (tecnico) + SDA Bocconi (analitico) + LBS (leadership generalista 12 mesi) + LUISS BS (middle management 9 mesi) racconta una scaletta che il CHRO riconosce.

**Punti da decidere prima del paste finale**:

1. ✅ Naming Executive Programs (LBS + LUISS BS) — confermati da Carlo. Restano placeholder credibili finché non arrivano i nomi reali del catalogo Angelini Academy. RCA + Imperial vengono retrocessi per fare spazio.

2. ✅ Tone of voice intro — confermato da Carlo: ruoli CHRO + CLO + Head of People Development esplicitati.

3. ✅ Callout finale — solo Forum/Eventi. Newsletter già coperta dalla PageShell, Talent pipeline implicito.

4. **Aperto solo se vuoi**: nella Future Skills Observatory ho lasciato il button CTA aperto con PreviewModal stile paper L&D. Se preferisci una variante più aggressiva tipo "Iscriviti subito" inline (anziché preview), dimmelo prima del paste. Default = pattern coerente con paper L&D già esistente.

**Tempo stimato Claude Code**: 15-20 min (più snello della v1). File passa da 260 a ~400 righe.

**Post-execution**: `npm run build` per validare TypeScript, poi screenshot della sequenza section per cross-check visivo. Poi passiamo a `/percorsi/imprese`.
