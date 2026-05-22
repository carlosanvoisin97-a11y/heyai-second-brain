---
type: tech-spec
parent_project: _Angelini Academy
client: Angelini Academy
created: 2026-05-13
updated: 2026-05-14
aliases:
  - Accessibility Specs Sito Nuovo
purpose: specifica accessibility WCAG 2.1 AA del sito nuovo Angelini Academy, come deliverable tecnico complementare al pitch finale (deadline 31/5/2026). Forward-looking — il sito attuale obsoleto NON è auditato, la spec è vincolante per il design system + delivery del sito nuovo
audience: Carlo (uso interno + base per appendice tecnica della proposta finale a Caterina Caboni); ammissibile condivisione asciutta a Daniele/Elena previo allineamento 14/5
status: working — base operativa per appendice tecnica pitch + per vincolo design system fase 2 sito
standard: WCAG 2.1 AA (riferimento ufficiale W3C: https://www.w3.org/TR/WCAG21/)
parent_strategic_doc: [[Strategia Website 2026]]
related_docs: [[_Angelini Academy|Angelini Academy]], [[Framework Pitch Finale]], [[Strategia Website 2026]], [[Scan Siti Web Comparable]], [[50 - Archive/Inbox/2026-05/2026-05-10 - Cosa vuole davvero Angelini Academy|2026-05-10 - Cosa vuole davvero Angelini]]
---

# Accessibility Specs — Sito Nuovo Angelini Academy

> **Specifica accessibility WCAG 2.1 AA vincolante per il design system e la delivery del sito nuovo Angelini Academy 2026.** Documento forward-looking — il sito attuale `angeliniacademy.com` è dimensionato per la business unit precedente e fuori dal nuovo posizionamento; non è oggetto di audit. Questa spec definisce invece i checkpoint, i pattern implementativi, le procedure di testing e il posizionamento narrativo dell'accessibility per le iniziative on-site OS1–OS9 + AI Layer (AI-1..AI-5) descritte in [[Strategia Website 2026]] §5.
>
> **Lo standard WCAG 2.1 AA è scelto come obbligo contrattuale, non come obiettivo aspirazionale.** Coerente con il posizionamento "fondazione culturale-scientifica europea con propensione mecenatistica" (cfr. [[50 - Archive/Inbox/2026-05/2026-05-10 - Cosa vuole davvero Angelini Academy|2026-05-10 - Cosa vuole davvero Angelini]] §addendum 11/5), con i benchmark fondazione (MAXXI, Royal Society UK, Smithsonian, Fondazione Agnelli, Fondazione Cariplo), e con il requisito ESG del gruppo Angelini Industries (Bilancio Engaged Research annuale, gen 2027).
>
> **Audience operativa**: chiunque lavori sul sito — designer, sviluppatori HeyAI o fornitore IT gruppo Angelini, content editor del laboratorio editoriale, team AI Layer. Le specifiche di questa pagina sono vincolanti per tutti.

---

## 1. Framework WCAG 2.1 AA come spec vincolante per il design system

### 1.1 Perché AA e non A (e non AAA)

Tre livelli di conformità WCAG. Livello A copre solo le barriere bloccanti; AAA è obiettivo ideale ma spesso non raggiungibile sull'insieme del sito (es. contrast 7:1 limita drasticamente la palette). **Livello AA è lo standard di riferimento internazionale** per siti istituzionali, è quello richiesto dalle direttive EN 301 549 (recepimento europeo della WCAG, vincolante per enti pubblici e per la stragrande maggioranza dei portali corporate-istituzionali europei dal 28/6/2025 per effetto dell'European Accessibility Act), ed è il livello adottato dalle fondazioni comparable osservate (MAXXI dichiara conformità AA in footer; Royal Society UK pubblica accessibility statement esplicito che richiama WCAG 2.1 AA; Smithsonian rispetta Section 508 USA, che è allineata a WCAG 2.1 AA).

Per Angelini Academy AA è la scelta coerente con il posizionamento "fondazione culturale-scientifica europea": basso AAA significherebbe over-promising su uno standard tecnicamente arduo da mantenere; basso A significherebbe disallineamento rispetto al benchmark di settore. AA è il punto di equilibrio difendibile.

### 1.2 I 4 principi WCAG come scheletro del design system

Lo standard W3C struttura i criteri in 4 principi (POUR) che diventano le 4 categorie di linee guida del design system. Ogni token visivo, ogni componente UI, ogni interazione del sito eredita il vincolo dal principio corrispondente.

| Principio WCAG | Criteri AA chiave | Vincoli design system Angelini Academy |
|---|---|---|
| **Perceivable** (percepibile) | 1.1.1 Non-text content · 1.2.1–1.2.5 Time-based media · 1.3.1 Info and relationships · 1.3.4 Orientation · 1.3.5 Identify input purpose · 1.4.3 Contrast minimum · 1.4.4 Resize text · 1.4.5 Images of text · 1.4.10 Reflow · 1.4.11 Non-text contrast · 1.4.12 Text spacing · 1.4.13 Content on hover or focus | Token colore con contrast pre-calcolato (vedi §1.3), tipografia con scala fluida zoom 200% senza scroll orizzontale, video Founder Stories con caption + transcript obbligatori, paper Engaged Research con OCR layer per PDF, immagini decorative marcate `alt=""`, immagini significative con alt-text editoriale (vedi §4.5) |
| **Operable** (utilizzabile) | 2.1.1 Keyboard · 2.1.2 No keyboard trap · 2.1.4 Character key shortcuts · 2.4.1 Bypass blocks · 2.4.2 Page titled · 2.4.3 Focus order · 2.4.4 Link purpose · 2.4.5 Multiple ways · 2.4.6 Headings and labels · 2.4.7 Focus visible · 2.5.1–2.5.4 Pointer gestures · 2.5.5 Target size (advisory AA, mandatory in 2.2) | Skip-to-content + landmark obbligatori, tutti gli interactive accessible via tastiera incluso AI Layer, focus ring sempre visibile e mai rimosso via CSS `outline: none` senza fallback, touch target minimo 44×44 px su mobile, no time-based interaction senza estensione |
| **Understandable** (comprensibile) | 3.1.1 Language of page · 3.1.2 Language of parts · 3.2.1 On focus · 3.2.2 On input · 3.2.3 Consistent navigation · 3.2.4 Consistent identification · 3.3.1 Error identification · 3.3.2 Labels or instructions · 3.3.3 Error suggestion · 3.3.4 Error prevention | `lang="it"` su `<html>` con override `lang="en"` sui paper UCL/IE in inglese (sito IT/EN paritetico, cfr. Pattern 6 [[Scan Siti Web Comparable]]), form MBA Gateway con label esplicite + inline validation + error suggestion, navigation pattern consistente fra le 4 landing percorso utente |
| **Robust** (robusto) | 4.1.1 Parsing (deprecato in 2.2 ma incluso in 2.1) · 4.1.2 Name, role, value · 4.1.3 Status messages | HTML5 semantico (`<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`, `<header>`, `<footer>`), ARIA usato come *enhancement* non come *replacement* della semantica HTML, status messages del chatbot AI-1 + quiz AI-2 annunciati via `aria-live` |

### 1.3 Token di design system — palette colore con contrast pre-calcolato

Il design system del sito nuovo deve usare token nominali (non hex sparsi nel CSS) per cui il rapporto di contrasto è verificato a priori contro lo standard 1.4.3 (4.5:1 per testo normal, 3:1 per testo large ≥18pt o ≥14pt bold) e 1.4.11 (3:1 per UI components e graphical objects).

Esempio normativo di palette (i valori esatti dipendono dal brand book Angelini 2024 ancora da chiarire — vedi rischio 2 in [[Strategia Website 2026]] §9.3). Lo schema rimane vincolante anche con palette diversa:

| Token | Uso | Contrast richiesto | Verifica obbligatoria |
|---|---|---|---|
| `--color-text-primary` su `--color-bg-default` | Body text 16px regular | ≥ 4.5:1 | A priori sul token + automatica in CI |
| `--color-text-secondary` su `--color-bg-default` | Caption, metadata, byline | ≥ 4.5:1 | A priori |
| `--color-heading-h1` su `--color-bg-default` | Heading H1 ≥ 28px regular o bold | ≥ 3:1 (large text) | A priori |
| `--color-link-default` su `--color-bg-default` | Inline link nel body | ≥ 4.5:1 + ulteriore distinzione non basata solo sul colore (underline obbligatorio, cfr. 1.4.1) | A priori |
| `--color-focus-ring` su qualsiasi background | Outline focus tastiera | ≥ 3:1 vs background adiacente | A priori per tutte le combinazioni rilevanti |
| `--color-button-primary` (testo) su `--color-button-primary` (bg) | CTA primaria | ≥ 4.5:1 (è component, non testo decorativo) | A priori |
| `--color-form-border` su `--color-bg-form` | Bordo input form | ≥ 3:1 (non-text contrast) | A priori |
| `--color-error` su `--color-bg-default` | Error state form | ≥ 4.5:1 + icona/simbolo extra (no info veicolata solo dal colore — 1.4.1) | A priori |

**Regola operativa per il design system**: nessun colore può entrare nei componenti se non passato dal token registry. Il token registry pubblica per ogni token il valore hex + il contrast ratio calcolato vs i token con cui è ammesso combinarsi. Una combinazione non registrata è proibita.

### 1.4 Tipografia e scala

| Vincolo WCAG | Implementazione |
|---|---|
| 1.4.4 Resize text 200% | Tipografia in `rem` o `em`, mai `px` su `font-size`. Layout fluido che regge zoom browser 200% senza scroll orizzontale né perdita di contenuti. Test automatico in viewport `1280×1024` + zoom 200% = `640×512` equivalente. |
| 1.4.5 Images of text | Vietate immagini contenenti testo (eccezioni: logo Angelini Academy, eventuali infografica statica del Cross-OpCo Tracker con alt-text completo, citazioni "pull-quote" con `<blockquote>` semantico). |
| 1.4.12 Text spacing | Tipografia tollerante a override utente: line-height ≥ 1.5 nei paragrafi, spacing fra paragrafi ≥ 2× font-size, letter-spacing ≥ 0.12× font-size, word-spacing ≥ 0.16× font-size. Override utente via user-stylesheet non deve rompere il layout. |
| Scala suggerita (variabile in base al brand book) | H1 32–40px / H2 26–32px / H3 22–26px / H4 18–22px / Body 16px / Caption 14px (minimo assoluto, mai sotto). |

### 1.5 Documentazione del design system

Coerente con la VP4 della [[Strategia Website 2026]] §4.2 (Accessibility-first + Design system documentato come deliverable di hand-over). Ogni componente del design system deve essere accompagnato da una scheda che documenta:

1. **Variant** e **state** (default, hover, focus, active, disabled, error, loading)
2. **Keyboard interaction** (Tab order, Enter/Space, Escape, frecce, Home/End dove applicabile)
3. **ARIA pattern** di riferimento (citare l'identificatore WAI-ARIA Authoring Practices, es. "WAI-ARIA Combobox Pattern" per il chatbot AI-1)
4. **Screen reader announcement** atteso (testo che VoiceOver/NVDA deve annunciare)
5. **Test cases** automatici associati (axe-core / pa11y / Lighthouse, vedi §5)

Questa documentazione è deliverable di hand-over al cliente (può essere consumata dal fornitore IT gruppo se l'allocazione fase 2 va a loro, o serve come knowledge base interna del team Angelini per la manutenzione 2027+).

---

## 2. Checkpoint per macro-area del sito

Ogni macro-area del sito nuovo (OS1–OS9 di [[Strategia Website 2026]] §5.1) ha checkpoint accessibility specifici. La lista che segue è il "contract test" che il sito deve passare prima del go-live di ciascuna macro-area.

### 2.1 OS1 — Header navigation duale per i 4 percorsi utente

**Pattern di riferimento WAI-ARIA**: [Disclosure Navigation Menu](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) per la mega-nav, [Skip Link](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/) per skip-to-content. Niente `role="menu"`/`menuitem` (sono per application menu desktop-like, non per site navigation — anti-pattern frequente).

| # | Checkpoint | WCAG | Severità | Implementazione attesa |
|---|---|---|---|---|
| H1 | Skip-to-content link primo elemento focusabile | 2.4.1 | Critico | `<a href="#main" class="skip-link">Salta al contenuto</a>` visibile on focus, hidden by default (vedi template §4.1) |
| H2 | `<header>` con `role="banner"` implicito + `<nav>` con `aria-label="Navigazione principale"` | 1.3.1 / 2.4.1 / 4.1.2 | Critico | Una sola `<nav>` può omettere aria-label, le secondarie devono averla distintiva |
| H3 | 4 voci percorso utente (Talent / Researcher / HR & business / Media) come `<a>` semantici, non `<div onClick>` | 2.1.1 / 4.1.2 | Critico | Tastiera + screen reader devono identificarle come link |
| H4 | Tab order logico: skip-link → logo → 4 voci percorso utente → CTA newsletter → eventuale lang switcher IT/EN → main content | 2.4.3 | Maggiore | Verifica manuale con tastiera + auto-test con axe |
| H5 | Focus ring visibile e ≥ 3:1 contrast vs background. No `outline: none` senza fallback custom | 2.4.7 / 1.4.11 | Critico | Token `--color-focus-ring` + `outline: 3px solid var(--color-focus-ring)` + offset positivo |
| H6 | Lang switcher (IT/EN) come `<button>` o `<a>` con `aria-current="true"` sulla lingua attiva + cambio `lang` attribute sull'`<html>` al switch | 3.1.1 / 3.1.2 / 4.1.2 | Maggiore | Cambio lingua = navigazione (non SPA in-place senza announcement) o, se SPA, annuncio `aria-live` |
| H7 | Mega-nav (se prevista nella fase 2 con sub-items per ciascun percorso) usa Disclosure pattern: trigger `<button aria-expanded="false" aria-controls="…">`, panel rivelato è child con `id` matching | 2.1.1 / 4.1.2 | Maggiore | Escape chiude il panel, focus torna al trigger |
| H8 | Touch target ≥ 44×44 px su mobile per ogni voce nav | 2.5.5 | Maggiore | Padding sufficiente, mai font-size piccolissimo senza area click espansa |
| H9 | Nessun trap di focus dentro mega-nav (Tab esce normalmente verso il contenuto principale) | 2.1.2 | Critico | Test manuale + axe |
| H10 | Mobile: nav hamburger trigger ha `aria-label="Apri menu"` / `aria-expanded` switch + chiusura via Escape + focus management deterministico | 1.3.1 / 2.4.3 / 4.1.2 | Critico | Pattern Disclosure |

### 2.2 OS2 — Hub editoriale Engaged Research Lab

Hub editoriale paper-based, tassonomia su 3 verticali (lifelong over 50 / skills mismatching / AI applicata pedagogia). Pattern di riferimento: [Catalog/Archive accessibility](https://www.w3.org/WAI/tutorials/) + [Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) per la tassonomia, **se** scelta come tab control (alternativa: filtri come checkbox group, più adatto a tassonomia multi-asse).

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| E1 | Pagina hub con `<h1>` univoco "Engaged Research Lab" + `<main role="main">` (role esplicito per IE11 fallback se necessario, altrimenti implicito) | 1.3.1 / 2.4.6 | Critico | Mai più di un H1, gerarchia heading consistente |
| E2 | Tassonomia 3 verticali implementata come Tabs WAI-ARIA o come filtro checkbox-group | 1.3.1 / 2.1.1 / 4.1.2 | Critico | Se Tabs: `role="tablist"` + `role="tab"` + `role="tabpanel"`, frecce ←→ per cambio tab, Tab esce dal tablist. Se checkbox: `<fieldset>` + `<legend>` |
| E3 | Card paper ognuna come `<article>` semantico, heading interna H3, byline come `<address>` o `<p>` con `rel="author"` | 1.3.1 | Maggiore | Card cliccabile-intera (nested link anti-pattern: usare CSS `::before` overlay + `<a>` solo sul titolo) |
| E4 | Paper PDF download: `<a href="paper.pdf" type="application/pdf">Scarica paper (PDF, 2.4 MB)</a>` con type + size dichiarati | 2.4.4 / 3.3.2 | Critico | Link purpose chiaro fuori contesto, dimensione utile per utenti con limitata connessione |
| E5 | Paper PDF stessi devono essere **PDF/UA o PDF/A-1a accessible**: text layer OCR (non solo immagini scansionate), heading structure interna, alt-text figure, lingua dichiarata, lettura logica | 1.1.1 / 1.3.1 / 4.1.2 (extra: PDF/UA-1) | Critico | Process editoriale OBBLIGATORIO: ogni paper UCL/IE Madrid prima della pubblicazione passa attraverso check di accessibility (Acrobat Pro accessibility checker + verifica manuale). No paper non-accessible pubblicati. |
| E6 | Executive summary 1 pagina (output AI-3 Lab Translator) è pagina HTML semantica, **non screenshot del PDF** | 1.3.1 / 1.4.5 | Critico | Genera HTML dal Lab Translator, non immagine |
| E7 | Filtri di ricerca: input con `<label>` esplicito + `aria-describedby` per hint, risultati annunciati via `aria-live="polite"` ("N paper trovati") | 3.3.2 / 4.1.3 | Maggiore | Live region per i risultati |
| E8 | Paginazione: `<nav aria-label="Paginazione paper">` con bottoni "Prev/Next" + "Pagina N di M", `aria-current="page"` sulla pagina corrente | 1.3.1 / 2.4.5 | Maggiore | Pattern accessibility classico |
| E9 | Citazione paper: format APA/Chicago come testo selezionabile + bottone "Copia citazione" con `aria-live` di conferma | 1.3.1 / 4.1.3 | Minore | Buona pratica accademica |

### 2.3 OS5 — Form candidature MBA Gateway (Expression of Interest)

Form leggero (expression of interest, non candidatura formale che resta su IE Madrid). Pattern di riferimento: [Form Validation accessibility](https://www.w3.org/WAI/tutorials/forms/) + [WAI Tutorials Forms](https://www.w3.org/WAI/tutorials/forms/instructions/).

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| F1 | Ogni input ha `<label for>` esplicito (non solo placeholder — placeholder sparisce on focus + spesso ha contrast insufficiente) | 3.3.2 / 1.3.1 | Critico | Labels visibili always-on |
| F2 | Campi obbligatori marcati con `aria-required="true"` + `required` HTML5 + asterisco visivo "*" con `aria-label="campo obbligatorio"` su asterisco | 3.3.2 | Critico | Doppia marcatura visiva + semantica |
| F3 | Autocomplete: ogni input con `autocomplete` HTML5 corretto (`autocomplete="given-name"`, `email`, `tel`, `organization`, `country`...) | 1.3.5 | Maggiore | Aiuta utenti screen reader + autocompletare |
| F4 | Validazione inline non-bloccante, error message con `aria-describedby` legato all'input + icona/simbolo (non solo colore rosso) | 3.3.1 / 3.3.3 / 1.4.1 | Critico | `<input aria-invalid="true" aria-describedby="error-email">` + `<span id="error-email" role="alert">Indirizzo email non valido. Esempio: nome@dominio.it</span>` |
| F5 | Submit fallito: focus sposta automaticamente sul primo campo in errore + `aria-live="polite"` riepiloga errori in cima alla form | 3.3.1 / 4.1.3 | Critico | UX standard accessibility |
| F6 | Submit riuscito: messaggio di conferma in `role="status"` + landmark `aria-live`, idealmente con sommario di cosa succederà (es. "Riceverai email entro 3 giorni lavorativi") | 3.3.4 / 4.1.3 | Maggiore | Closure loop |
| F7 | Privacy notice + consenso GDPR come `<input type="checkbox">` esplicito con label collegata, mai pre-checkato | 3.3.2 / requisito GDPR | Critico | Compliance legale + UX |
| F8 | CTA primaria submit con label chiara ("Invia richiesta", non "Invia") | 2.4.6 / 2.4.4 | Maggiore | Link/button purpose |
| F9 | Touch target submit ≥ 44×44 px su mobile | 2.5.5 | Maggiore | UX mobile-first |
| F10 | Reset / Cancel se presente è secondario visivamente + ha `<button type="button">` o `type="reset"` esplicito (mai default submit per Reset) | 3.2.2 | Minore | Prevenzione errori |

### 2.4 OS4 — Video Founder Stories integrati

Video player nativo con storia personale. Pattern di riferimento: [Media Accessibility User Requirements (MAUR)](https://www.w3.org/TR/media-accessibility-reqs/) + [HTML5 video accessibility](https://www.w3.org/WAI/media/av/).

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| V1 | Sottotitoli (caption) obbligatori in italiano + inglese, **non auto-generati ma editati** da team editoriale | 1.2.2 | Critico | WebVTT/SRT file allegato, kind="captions", default IT, switcher IT/EN |
| V2 | Trascrizione testuale completa pubblicata come pagina sotto/accanto al video, indicizzabile, scrollabile, copiabile | 1.2.1 / 1.2.3 | Critico | Trascrizione = anche asset SEO per la pagina Founder Stories (cfr. [[SEO Specs Sito Nuovo]]) |
| V3 | Audio description per i video con contenuti visivi rilevanti (es. ambiente lavoro Angelini OpCo che racconta la storia visivamente) | 1.2.3 / 1.2.5 | Maggiore | Track separato `kind="descriptions"` o doppia versione video |
| V4 | Player con controlli keyboard-accessible: Spazio play/pause, frecce ← → ±5s, ↑↓ volume, M mute, F fullscreen, C caption toggle | 2.1.1 / 4.1.2 | Critico | Player nativo o JS con keyboard handler completo |
| V5 | Nessun autoplay con audio (autoplay video muto + caption è tollerato ma sconsigliato per attention/data) | 1.4.2 / 2.2.2 | Critico | Mai autoplay con sound |
| V6 | Bottoni player con `aria-label` chiari ("Play", "Pausa", "Avanti 5 secondi", "Attiva sottotitoli italiano") | 4.1.2 | Critico | Pattern player accessibility standard |
| V7 | Loading state del video annunciato via `aria-live` ("Caricamento video in corso") | 4.1.3 | Minore | UX |
| V8 | Embed YouTube/Vimeo (se scelti come hosting): verificare che il player embed sia conforme. YouTube ha caption + keyboard accessibility, ma il player iframe va validato puntualmente | 2.1.1 / 1.2.2 | Maggiore | Test embed in produzione, non assumere |

### 2.5 OS3 — Cross-OpCo Tracker interattivo

Modulo interattivo che visualizza il journey rotation Gateway scholar attraverso le 4 OpCo. Pattern unico — nessun benchmark perfetto, va costruito con cura. Riferimento WAI-ARIA: [Visualization accessibility](https://www.w3.org/WAI/RD/2012/easy-to-read/papers/) (poco specifico, applicare buone pratiche generali) + Royal Society UK research data visualisations come benchmark esterno.

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| T1 | Visualizzazione SVG (non Canvas) per accessibility nativa via DOM | 1.3.1 / 4.1.2 | Critico | SVG con `role="img"` + `<title>` + `<desc>` + nodi interni con `role="button"` per gli step interattivi |
| T2 | Versione testuale equivalente accessibile: tabella semantica `<table>` con `<caption>` + `<thead>` + dati journey (OpCo, durata, ruolo) | 1.1.1 / 1.3.1 | Critico | Toggle "Vedi come tabella" sempre presente, alternativa per chi non usa il visual |
| T3 | Ogni nodo interattivo (OpCo, step di rotation) keyboard-accessible, Tab order = ordine cronologico del journey | 2.1.1 / 2.4.3 | Critico | Tab attraverso le 4 OpCo nell'ordine Pharma → Industrial Tech → Consumer → Ventures |
| T4 | Focus on nodo rivela info via `aria-describedby` linkato a un panel sotto la visualizzazione, oppure tooltip con pattern WAI-ARIA Tooltip | 1.4.13 / 4.1.2 | Maggiore | Hover/focus = stessa info disponibile |
| T5 | Animazioni della visualizzazione rispettano `prefers-reduced-motion: reduce` (CSS media query) — fallback statico per chi disattiva motion | 2.3.3 | Critico | Browser-default vincolante, mai animazioni bloccanti per chi le rifiuta |
| T6 | Non c'è informazione veicolata solo dal colore (es. linea Pharma blu vs Tech verde): aggiungere pattern, icona, label testuale | 1.4.1 | Critico | Doppia codifica info |
| T7 | Dati aggiornati semestralmente: rebuild della visualizzazione preserva accessibility (CI test) | tutti | Maggiore | Pipeline build verifica accessibility a ogni rebuild |
| T8 | Mobile: visualizzazione collassa in lista verticale step-by-step con stesse info (no zoom su SVG illeggibile) | 1.4.10 | Critico | Responsive accessibility-first |

### 2.6 OS2bis — Chatbot AI Engaged Research (AI-1)

Trattato in dettaglio in §3.1 perché funzionalità AI con pattern accessibility specifici, ma sintesi qui per completezza della tabella checkpoint OS.

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| C1 | Pattern WAI-ARIA Combobox o pattern chat dedicato (vedi §3.1) | 4.1.2 | Critico | Vedi §3.1 |
| C2 | Live region per messaggi nuovi | 4.1.3 | Critico | Vedi §3.1 |
| C3 | Fallback testuale + link diretti ai PDF | 1.1.1 / 2.4.4 | Critico | Vedi §3.1 |

### 2.7 OS7–OS9 — Newsletter, Press Room, Footer

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| N1 | Newsletter signup form: pattern §2.3 (form) applicato + segmentazione researcher/business via fieldset esplicito | tutti form | Critico | Riuso pattern form |
| N2 | Press room: download asset (media kit zip, logo PNG/SVG, foto JPG) con type/size dichiarati + alt-text su preview | 2.4.4 / 1.1.1 | Maggiore | Pattern standard download |
| N3 | Footer `<footer role="contentinfo">` con landmark, link organizzati per cluster (`<nav aria-label="Navigazione footer">`) | 1.3.1 / 2.4.1 | Maggiore | Landmark standard |
| N4 | Footer cross-link Angelini Industries (Pharma, Fameccanica, Fater, Ventures) come link esterni con `rel="noopener"` + indicatore visivo "link esterno" | 2.4.4 / sicurezza | Minore | UX + sicurezza |
| N5 | Cookie banner accessibility: bottone "Accetta tutti" + "Rifiuta tutti" + "Preferenze" come `<button>`, tutti raggiungibili via Tab senza trap, modal con focus management corretto | 2.1.2 / 2.4.7 | Critico | Pattern dialog WAI-ARIA + compliance ePrivacy |
| N6 | Bilancio Engaged Research download (annuale gen 2027): stesso process paper accessibility — PDF/UA + landing page HTML con summary | 1.1.1 / 1.3.1 | Critico | Process editoriale §2.2 E5 esteso |

---

## 3. Pattern accessibility per le 5 funzionalità AI

L'AI Layer del sito (cfr. [[Strategia Website 2026]] §5.3) è disciplinato come sistema coerente, ciascuna funzionalità con confine dichiarato di "cosa NON fa". L'accessibility dell'AI Layer è punto delicato: i pattern AI conversazionale non hanno ancora standardizzazione formale piena nelle WAI-ARIA Authoring Practices (al 2026 esistono pattern Combobox + Dialog + Live Region che si possono comporre, ma non un "Chatbot Pattern" ufficiale). La spec qui sotto applica i pattern composti più solidi disponibili al 2026 + indica fallback testuali sempre disponibili.

### 3.1 AI-1 — Engaged Research Conversational (chatbot)

Chatbot interrogabile sui paper Engaged Research pubblicati. Audience primaria: ricercatori (persona 2) + media (persona 4).

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| AI1-1 | Container chat ha `role="log"` + `aria-live="polite"` + `aria-atomic="false"` (annuncio incrementale messaggi) | 4.1.3 | Critico | Screen reader annuncia nuovi messaggi appena arrivano senza ripetere lo storico |
| AI1-2 | Input utente: `<textarea>` con `<label>` "Fai una domanda sui paper Engaged Research" sempre visibile + placeholder con esempio ("Es: quali paper parlano di lifelong learning over 50?") | 3.3.2 | Critico | Label esplicita |
| AI1-3 | Submit via Invio + bottone "Invia" visibile (no Invio-only — non funziona con screen reader virtual cursor) | 2.1.1 | Critico | Doppio submit mechanism |
| AI1-4 | Loading state ("Sto cercando nei paper...") annunciato via `aria-live="assertive"` o region dedicata `role="status"` | 4.1.3 | Critico | Feedback udibile |
| AI1-5 | Risposta del bot include sempre **fonti cliccabili** (link ai PDF dei paper citati). Citazioni come `<cite>` semantici + link `<a href="paper.pdf">` con type/size dichiarati | 2.4.4 / 1.3.1 | Critico | Pattern citazione accademica + fallback diretto al paper |
| AI1-6 | Confine "cosa NON fa" dichiarato: messaggio iniziale del bot + persistente nell'UI ("Rispondo solo sui paper Engaged Research pubblicati. Non posso suggerire percorsi formativi o inventare fonti"). Importantissimo per utenti con screen reader che potrebbero altrimenti aspettarsi funzionalità non disponibili | 3.2.1 / 3.3.2 | Critico | Setting expectation chiaro |
| AI1-7 | Storico conversazione navigabile via tastiera: Tab attraversa i messaggi precedenti se interattivi (link, bottoni feedback), arrow keys non richiesto | 2.1.1 / 2.4.3 | Maggiore | Pattern log standard |
| AI1-8 | Errore (bot non capisce, no risultati): messaggio chiaro + suggerimento riformulazione + link al fallback "Vai alla ricerca paper completa" che porta a OS2 hub editoriale | 3.3.1 / 3.3.3 | Critico | Fallback sempre disponibile, AI non è bloccante |
| AI1-9 | Privacy: nessun trattenimento conversazione lato server senza consenso esplicito utente (compliance GDPR), informativa visibile in apertura chat | requisito GDPR | Critico | Conformità legale |
| AI1-10 | Reduced motion: nessuna animazione tipo "typing dots" se l'utente ha `prefers-reduced-motion: reduce` (sostituire con messaggio testuale statico "Sto rispondendo...") | 2.3.3 | Maggiore | Rispetto preferenze utente |
| AI1-11 | Color contrast: bubble messaggi user vs bot devono essere distinguibili non solo dal colore — anche da allineamento (user a destra / bot a sinistra) + label "Tu:" / "Engaged Research:" | 1.4.1 | Critico | Doppia codifica |

### 3.2 AI-2 — Career Path Navigator (quiz)

Quiz conversazionale che valuta fit candidato → MBA Gateway / graduate program / posizione diretta. Audience: giovani talenti (persona 1).

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| AI2-1 | Quiz strutturato come form multi-step con progress indicator semantico (`<progress>` element o ARIA `aria-valuenow`) | 1.3.1 / 4.1.2 | Critico | Utente sa dove è nel quiz, screen reader anche |
| AI2-2 | Ogni domanda è una pagina o sezione con `<fieldset>` + `<legend>` per le risposte multi-choice, `<input type="radio">` per single-choice | 1.3.1 / 3.3.2 | Critico | Pattern form classico |
| AI2-3 | Navigazione avanti/indietro via bottoni "Indietro"/"Avanti", keyboard accessible, focus management su passaggio domanda → next | 2.1.1 / 2.4.3 | Critico | UX deterministica |
| AI2-4 | Time limit assente — quiz pace utente (NO countdown timer) | 2.2.1 | Critico | Rispetto utenti con disabilità cognitive |
| AI2-5 | Possibilità di salvare progresso e riprendere dopo (logged-in optional, o local storage con cookie consent) | requisito UX | Minore | UX |
| AI2-6 | Output finale "Livello fit + percorso suggerito" annunciato via `role="status"` + dichiarazione esplicita confine ("Questo è un suggerimento, non una candidatura formale. Per candidarti al MBA Gateway vai a IE Madrid [link]") | 3.2.1 / 3.3.4 | Critico | Setting expectation + fallback link |
| AI2-7 | Risultato presentato in formato accessible: heading H2 con livello fit + paragrafo descrizione + CTA primary "Scopri il percorso X" → landing dedicata | 1.3.1 / 2.4.4 | Maggiore | Pattern result page standard |
| AI2-8 | Possibilità di scaricare o emailarsi il risultato (PDF accessibile + email body testuale) | 1.1.1 | Minore | UX nice-to-have |

### 3.3 AI-3 — Lab Translator (paper summarizer, uso interno + output pubblico)

Trasforma paper Engaged Research in 3 formati: executive summary 1 pagina + social cards + press kit micro. Audience output: HR buyer + media. Audience tool: team editoriale interno.

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| AI3-1 | Executive summary output: HTML semantico (heading hierarchy + paragraph + list), NON immagine del PDF | 1.3.1 / 1.4.5 | Critico | Vedi anche §2.2 E6 |
| AI3-2 | Social cards (immagini per LinkedIn): obbligo alt-text editoriale ricco che riproduce il contenuto della card (es. "Card LinkedIn: titolo paper 'Lifelong learning oltre i 50', autore UCL, key insight: 'reskilling efficace richiede X'") | 1.1.1 | Critico | Social cards sono immagini = alt-text obbligatorio |
| AI3-3 | Press kit micro: PDF/UA accessible (pattern §2.2 E5) + HTML web-friendly version sullo stesso URL del paper | 1.1.1 / 1.3.1 | Critico | Doppia versione, HTML primario per accessibility |
| AI3-4 | Tool back-office (uso interno team): UI keyboard-accessible (anche se non pubblica, è strumento di lavoro per editor che possono includere persone con disabilità) | 2.1.1 / 2.4.7 | Maggiore | Inclusività operativa team |
| AI3-5 | Validazione editoriale obbligatoria pre-pubblicazione: nessun output AI-3 va live senza review umana — l'AI non pubblica autonomamente. Editor controlla anche accessibility del singolo output | process | Critico | Confine "NON pubblica autonomamente" preservato |

### 3.4 AI-4 — Scouting Helper Ventures (form intelligente)

Form intelligente per sottomissione proposta a Angelini Ventures. Audience: ricercatori/founder con idea biotech/medtech.

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| AI4-1 | Form multi-step con tutti i pattern §2.3 (form MBA Gateway) applicati | tutti form | Critico | Riuso pattern |
| AI4-2 | Auto-classificazione tema (campo nascosto auto-popolato dall'AI sul testo proposta utente): trasparente all'utente — UI mostra "Stiamo classificando la tua proposta come 'biotech'", utente può correggere via `<select>` esplicito | 3.2.2 / 3.3.4 | Critico | No "magic" non spiegabile, sempre override utente |
| AI4-3 | Auto-linkage a paper Engaged Research correlati: presentati come suggerimenti `<aside>` opzionali, mai obbligatori per il submit | 3.2.1 | Maggiore | Suggerimenti contestuali, non blocco |
| AI4-4 | Confine dichiarato in apertura form ("Questo form invia la tua proposta al team Ventures. Non è valutazione due diligence — riceverai risposta dal team entro X giorni lavorativi") | 3.3.2 / 3.3.4 | Critico | Setting expectation |
| AI4-5 | Upload allegati (paper, deck) con feedback chiaro di upload progress + file type/size limits dichiarati | 4.1.3 / 3.3.2 | Maggiore | Pattern upload standard |
| AI4-6 | Privacy/IP statement esplicito su cosa Angelini Ventures fa con la proposta (custody, NDA implicito o esplicito, terms&conditions linkati) | 3.3.4 / requisito legale | Critico | Compliance + trust |

### 3.5 AI-5 — Editorial Workbench (back-office team editoriale)

Strumento back-office per HeyAI+Tiziana — non utenza pubblica esterna. Accessibility obbligatoria comunque: inclusività team interno.

| # | Checkpoint | WCAG | Severità | Implementazione |
|---|---|---|---|---|
| AI5-1 | UI back-office segue WCAG 2.1 AA come il resto del sito (non scope-creep su strumenti interni) | tutti | Maggiore | Inclusività team editoriale |
| AI5-2 | Suggerimenti AI mostrati come `<aside>` o pattern Listbox WAI-ARIA, navigabili con frecce + accettazione con Enter | 2.1.1 / 4.1.2 | Maggiore | Pattern editor accessibility |
| AI5-3 | Output AI sempre etichettato come "Suggerimento AI" (mai come fatto), editor decide cosa pubblicare | 3.2.4 | Critico | Confine "NON sostituisce giudizio editoriale" preservato |
| AI5-4 | Audit log delle azioni AI vs azioni umane disponibile in UI (chi ha pubblicato cosa, quando, con quale livello di intervento AI) | 4.1.2 | Minore | Accountability editoriale |

---

## 4. Template implementativi

Snippet di riferimento per i pattern accessibility ricorrenti del sito. Sono **vincolanti come pattern**, non come righe di codice esatte — qualsiasi framework (React, Vue, Astro, plain HTML del fornitore IT gruppo) deve produrre output funzionalmente equivalente.

### 4.1 Skip-to-content

```html
<a href="#main" class="skip-link">Salta al contenuto</a>
<header role="banner">
  <nav aria-label="Navigazione principale">
    <!-- header content -->
  </nav>
</header>
<main id="main" tabindex="-1">
  <!-- main content -->
</main>
```

```css
.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
}
.skip-link:focus {
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 1rem 1.5rem;
  background: var(--color-bg-default);
  color: var(--color-text-primary);
  outline: 3px solid var(--color-focus-ring);
  outline-offset: 2px;
  border-radius: 4px;
  font-weight: 600;
}
```

Regola: `tabindex="-1"` su `<main>` permette di portare focus programmaticamente senza che il main entri nel tab order naturale. Click sullo skip-link sposta il focus al main, gli screen reader riprendono lettura da lì.

### 4.2 ARIA labels per landmark

```html
<header role="banner">…</header>
<nav aria-label="Navigazione principale">…</nav>
<main id="main">
  <h1>Engaged Research Lab</h1>
  <article>
    <h2>Titolo paper</h2>
    <p>…</p>
  </article>
</main>
<aside aria-label="Paper correlati">…</aside>
<footer role="contentinfo">
  <nav aria-label="Navigazione footer">…</nav>
</footer>
```

Regola: il `role` è esplicito solo se la semantica HTML5 non è sufficiente (IE11 fallback, o landmark multipli dello stesso tipo che richiedono distinzione via `aria-label`). Mai `role` duplicativo di semantica nativa già esplicita.

### 4.3 Focus management per dialog (modal cookie banner, modal "Apri quiz Career Path")

```javascript
// Pattern Dialog WAI-ARIA Authoring Practices
function openDialog(dialogElement) {
  // 1. Salva l'elemento focusabile precedente
  const previousFocus = document.activeElement;
  dialogElement.dataset.previousFocus = previousFocus.id || '';

  // 2. Mostra il dialog
  dialogElement.hidden = false;
  dialogElement.setAttribute('aria-modal', 'true');
  dialogElement.setAttribute('role', 'dialog');
  dialogElement.setAttribute('aria-labelledby', 'dialog-title');

  // 3. Sposta focus al primo elemento focusabile del dialog
  const firstFocusable = dialogElement.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  firstFocusable?.focus();

  // 4. Trap focus: Tab + Shift+Tab cyclano dentro il dialog
  dialogElement.addEventListener('keydown', trapFocus);

  // 5. Escape chiude il dialog
  dialogElement.addEventListener('keydown', escapeToClose);
}

function closeDialog(dialogElement) {
  dialogElement.hidden = true;
  // Restituisci focus al trigger precedente
  const previousFocusId = dialogElement.dataset.previousFocus;
  if (previousFocusId) {
    document.getElementById(previousFocusId)?.focus();
  }
}
```

Regola: ogni dialog/modal sul sito (cookie banner, modal Career Path, modal preview paper, modal Founder Story video se aperto in modal anziché pagina) DEVE implementare focus trap + ripristino focus al trigger.

### 4.4 Keyboard navigation per Tabs (tassonomia Engaged Research)

```html
<div class="tabs" role="tablist" aria-label="Verticali Engaged Research Lab">
  <button role="tab" aria-selected="true" aria-controls="panel-lifelong" id="tab-lifelong" tabindex="0">
    Lifelong learning over 50
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel-skills" id="tab-skills" tabindex="-1">
    Skills mismatching
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel-ai" id="tab-ai" tabindex="-1">
    AI applicata alla pedagogia
  </button>
</div>

<div role="tabpanel" id="panel-lifelong" aria-labelledby="tab-lifelong" tabindex="0">
  <!-- paper della verticale lifelong -->
</div>
<div role="tabpanel" id="panel-skills" aria-labelledby="tab-skills" tabindex="0" hidden>
  <!-- paper della verticale skills mismatching -->
</div>
<div role="tabpanel" id="panel-ai" aria-labelledby="tab-ai" tabindex="0" hidden>
  <!-- paper della verticale AI applicata -->
</div>
```

JavaScript keyboard handler:
- `←` / `→`: muovi tra tabs
- `Home` / `End`: vai a primo / ultimo tab
- `Tab` esce dal tablist, entra nel tabpanel attivo
- Click o `Enter`/`Space` su tab: cambia panel attivo + sposta `tabindex="0"` al tab attivo (roving tabindex)

### 4.5 Alt-text editoriale — regole

Le immagini sul sito si dividono in 3 categorie. Regole obbligatorie per il content team:

| Tipo immagine | Trattamento alt-text | Esempio |
|---|---|---|
| **Decorativa** (pattern, sfondo, divider) | `alt=""` esplicito (mai omesso, mai "decorativa") | `<img src="divider.svg" alt="" role="presentation">` |
| **Significativa contenuto** (foto Founder Story, foto evento Hackathon, ritratto autore paper) | Alt-text descrittivo editoriale, 50–150 caratteri, contesto + soggetto + azione | `<img src="founder-story-marco.jpg" alt="Marco Bianchi, MBA Gateway scholar 2026, in visita al laboratorio Fameccanica durante la rotation Industrial Tech">` |
| **Funzionale** (icona dentro link/bottone senza testo) | Alt-text che descrive l'**azione**, non l'icona | `<a href="…"><img src="download.svg" alt="Scarica paper PDF"></a>` (NON "icona download") |

Process editoriale: ogni asset upload nel CMS richiede compilazione campo alt-text. Campo obbligatorio nel CMS (validation server-side). Eccezione marcata "decorativa" = `alt=""`. Mai save senza decisione esplicita.

### 4.6 ARIA Live Region per messaggi dinamici

```html
<!-- Live region per messaggi non-urgenti (es. "N paper trovati", risposta chatbot, conferma form) -->
<div aria-live="polite" aria-atomic="false" id="status-region" class="sr-only"></div>

<!-- Live region per messaggi urgenti (es. errore form bloccante, sessione scaduta) -->
<div aria-live="assertive" role="alert" id="alert-region" class="sr-only"></div>
```

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

Regola: `polite` per status (chatbot loading, form submit success, ricerca risultati). `assertive` solo per errori bloccanti. Mai abusare di `assertive` — interrompe lo screen reader.

### 4.7 Color contrast verification — protocollo

Per ogni combinazione token nel design system, prima di merge in `main`:

1. **Calcolo automatico** via tool `contrast-checker` (script Node.js o GitHub Action) sui token registry → fail della build se contrast < 4.5:1 (text) o < 3:1 (large text / non-text)
2. **Verifica manuale** in Figma con plugin "Stark" o "Able" per i mockup → sign-off designer
3. **Re-verifica in browser** in produzione via DevTools Accessibility Inspector → sign-off QA

### 4.8 Screen reader testing patterns

| Pattern | VoiceOver (macOS/iOS) | NVDA (Windows) | TalkBack (Android) |
|---|---|---|---|
| Activation | Cmd+F5 | NVDA+N (insert) | Power+Vol↑↑ |
| Read all | VO+A | NVDA+↓ | swipe down then right |
| Navigate by heading | VO+Cmd+H | H | swipe up/down |
| Navigate by landmark | VO+U → Landmarks | D | shortcut |
| Navigate by link | VO+Cmd+L | K | swipe up/down |
| Read current focus | VO+F4 | NVDA+Tab | swipe right |

Test cases obbligatori per ogni macro-area:
- Lettura sequenziale completa "read all" → verifica gerarchia heading + alt-text + landmark coerenti
- Navigazione per heading (tasto H in NVDA) → verifica H1 unico + gerarchia H2/H3/H4 logica
- Navigazione per landmark → verifica banner / nav / main / aside / contentinfo presenti e nominati
- Compilazione form con solo screen reader → verifica label, required, error, success annunciati
- Interazione chatbot AI-1 con solo screen reader → verifica live region + fallback testuale

---

## 5. Plan di testing accessibility — manual + automated

L'accessibility non si valida solo "a vista" né solo automaticamente. Si valida con un **process di ciclo di delivery** che combina entrambi gli approcci, integrato nelle fasi di sviluppo del sito.

### 5.1 Test automatizzato (CI/CD pipeline)

Test eseguiti automaticamente a ogni commit / merge / deploy:

| Tool | Cosa testa | Quando | Pass criteria |
|---|---|---|---|
| **axe-core** (via @axe-core/playwright o Jest) | Subset WCAG 2.1 AA — color contrast, ARIA validity, heading hierarchy, landmark, alt-text presence, form labels | Ogni commit (pre-merge) | 0 issue severity "critical" + 0 issue severity "serious". Eccezioni documentate in `axe-exclusions.json` con motivazione + scadenza review (max 30gg) |
| **Pa11y** (CLI) | WCAG 2.1 AA estesi + HTML validity | Pre-deploy staging | 0 error, ≤ 5 warning con motivazione |
| **Lighthouse CI** (categoria Accessibility) | Subset axe + best practices | Pre-deploy production | Score ≥ 95/100 |
| **ESLint plugin jsx-a11y** (se React/JSX) | Pattern accessibility a livello codice (es. `<img>` senza alt, `onClick` su `<div>` senza role/tabindex) | Linting locale + CI | 0 error |
| **Stylelint plugin a11y** | CSS anti-pattern (es. `outline: none` senza fallback) | Linting locale + CI | 0 error |

Configurazione esempio `axe-core` in pipeline:

```javascript
// playwright.config.js — example
const { test } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('Accessibility — homepage', () => {
  test('No accessibility violations critical/serious', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    const critical = results.violations.filter(v => v.impact === 'critical');
    const serious = results.violations.filter(v => v.impact === 'serious');

    expect(critical).toEqual([]);
    expect(serious).toEqual([]);
  });
});
```

**Limite dei test automatici**: catturano circa il 30% dei problemi reali di accessibility. Il restante 70% richiede test manuale (vedi §5.2).

### 5.2 Test manuale (sprint review + pre-launch)

Test eseguiti da humans, con o senza tecnologia assistiva:

| Procedura | Cosa testa | Frequenza | Owner |
|---|---|---|---|
| **Keyboard-only navigation** | Tab order, focus visible, no trap, tutti gli interactive accessibili, Escape per chiudere modal | Ogni sprint review | QA HeyAI |
| **Zoom 200%** | Reflow, no scroll orizzontale, no contenuti tagliati | Ogni sprint review | QA |
| **Reduced motion** (browser setting on) | Nessuna animazione bloccante o disorientante | Pre-launch + dopo modifiche animation | QA |
| **Screen reader test** | VoiceOver + NVDA, almeno 1 percorso utente completo per sprint | Bi-weekly | QA + se possibile utente reale con disabilità per UAT |
| **Color blindness simulation** | Chrome DevTools / Sim Daltonism / Stark plugin Figma — protanopia, deuteranopia, tritanopia | Pre-launch + dopo modifiche palette | Designer |
| **Text spacing override** | Userstylesheet che applica spacing massimo WCAG 1.4.12 — verifica no contenuto perso | Pre-launch | QA |
| **Mobile touch target test** | Verifica target ≥ 44×44 px su iPhone SE + Android budget device | Ogni sprint review | QA mobile |

### 5.3 Testing dell'AI Layer (specifica)

L'AI Layer ha pattern di testing aggiuntivi rispetto al sito statico:

| Procedura | AI Funzionalità | Cosa testa |
|---|---|---|
| **Conversation flow accessibility test** | AI-1, AI-2, AI-4 | Compilazione completa flusso con solo screen reader → live region annunciate, fallback presenti, confine dichiarato |
| **Output rendering accessibility test** | AI-3, AI-5 | Verifica che gli output (executive summary HTML, social cards, suggerimenti editor) siano accessibility-compliant a loro volta |
| **Failure mode test** | Tutti | Cosa succede se l'AI non risponde / risponde lentamente / risponde male — utente con screen reader ha sempre fallback testuale e link diretti |
| **Edge case content test** | AI-1, AI-3 | Paper in inglese, paper con formula scientifica, paper con immagini complesse — fallback presente e chiaro |

### 5.4 User testing con utenti reali

Coerente con il differenziale "fondazione culturale-scientifica europea": l'accessibility non è solo compliance, è anche **listening loop con utenti reali**. Pattern adottato da Royal Society UK + Smithsonian: panel di tester con disabilità coinvolti almeno una volta per release.

| Cadenza | Test setup | Output |
|---|---|---|
| **Pre-launch fase 2 sito** (settembre 2026) | Panel 5–8 utenti con disabilità varie (visiva con/senza screen reader, motoria/keyboard-only, cognitiva) reclutati via associazioni partner (es. Unione Italiana Ciechi e Ipovedenti, AIPD) | Report findings prioritizzato + remediation list |
| **Annuale** (gen 2027, 2028) | Re-test su sito live + nuove feature introdotte nell'anno | Bilancio Engaged Research includa sezione "Accessibility journey" — asset narrativo |

### 5.5 Accessibility Statement pubblico

Coerente con benchmark fondazione e con requisito EAA (European Accessibility Act, recepimento Italia D.Lgs. 82/2022):

- Pubblicato a URL standard `/accessibility` linkato dal footer
- Dichiara conformità WCAG 2.1 AA + identifica eventuali non conformità note + roadmap di remediation + canale di feedback (email accessibility@angeliniacademy.com o form dedicato)
- Aggiornato almeno annualmente
- Audit di terzi (es. agenzia accessibility certificata IAAP CPACC/WAS) ogni 24 mesi — opzionale ma raccomandato per posizionamento "fondazione"

### 5.6 Reporting + governance

| Frequenza | Output | Audience |
|---|---|---|
| Per-sprint (bi-weekly) | Report automatico CI Lighthouse + axe — trend score | Team delivery (interno HeyAI) |
| Mensile | Dashboard accessibility 1-pager — score + issue aperti + remediation in corso | Caterina + Tiziana |
| Trimestrale | Report formale a board Angelini Industries (se richiesto) — accessibility come KPI ESG | Board |
| Annuale (gen 2027) | Contributo al Bilancio Engaged Research — accessibility come asset narrativo | Pubblico |

---

## 6. Accessibility come asset narrativo — posizionamento nel pitch

L'accessibility non è solo vincolo tecnico-legale. Per Angelini Academy è **asset narrativo coerente con il posizionamento** (cfr. [[Framework Pitch Finale]] pillar 4 + [[50 - Archive/Inbox/2026-05/2026-05-10 - Cosa vuole davvero Angelini Academy|2026-05-10 - Cosa vuole davvero Angelini]] addendum 11/5). Va comunicata come tale nel pitch finale a Caterina.

### 6.1 Tre angoli di posizionamento nel pitch

**Angolo 1 — Coerenza con il posizionamento "fondazione culturale-scientifica europea con propensione mecenatistica".** Le fondazioni di riferimento (MAXXI, Royal Society UK, Smithsonian, Fondazione Agnelli, Fondazione Cariplo) trattano accessibility come parte integrante della missione, non come patch. Royal Society UK pubblica accessibility statement esplicito + audit IAAP triennale; Smithsonian ha pubblicato la propria "Accessibility Program" come asset istituzionale; MAXXI ha sezione dedicata accessibility nel sito ufficiale + collaborazione con servizi educativi inclusive. Angelini Academy che adotta WCAG 2.1 AA come obbligo contrattuale dal disegno + Bilancio Engaged Research annuale che include sezione accessibility = posizionamento naturale come "fondazione che fa sul serio", non come "business school che farà l'accessibility dopo se il budget regge".

**Angolo 2 — Compliance ESG + European Accessibility Act.** Dal 28 giugno 2025, l'EAA (recepimento italiano D.Lgs. 82/2022) impone accessibility a fornitori di servizi digitali B2C/B2B sopra certe soglie. Angelini Industries è gruppo con €1,6 mld fatturato + holding multinazionale → il sito Academy (canale di reclutamento, hub editoriale, lead gen corporate) rientra ampiamente nello scope. **Non fare accessibility = rischio legale per il gruppo**, non solo per l'Academy. Posizionarlo come "vi proteggiamo dal rischio legale + ESG-compliant by design" è argomento solido al CFO/Legal del gruppo (anche se Caterina non è quel decisore, è argomento da segnalare per il pitch finale eventualmente a Morbidelli o board Industries).

**Angolo 3 — Talent pipeline + ricerca: accessibility come signal di seriosità per audience high-end.** I 4 percorsi utente del sito (cfr. [[Strategia Website 2026]] §3) hanno tutti audience high-end: giovani talenti che valutano dove investire la carriera, ricercatori che valutano dove pubblicare, HR buyer che valutano dove investire budget, media che valutano dove investire spazio editoriale. Tutte queste audience leggono il sito **anche per inferire la cultura interna dell'organizzazione**. Un sito con accessibility statement esplicito + Cross-OpCo Tracker accessible + paper PDF/UA = signal di rigore, attenzione al dettaglio, inclusività operativa reale. Un sito con accessibility scadente = signal contrario. Per un'organizzazione che si posiziona su Engaged Research + lifelong learning over 50 (audience che include over-50 con difficoltà visive crescenti) + mismatching skills (audience inclusiva per definizione), accessibility scadente sarebbe contraddizione narrativa frontale.

### 6.2 Come articolarlo nel pitch finale

Slide dedicata o sezione dentro la slide "Differenziale HeyAI per il sito" (cfr. [[Framework Pitch Finale]]). Prosa suggerita:

> "Quando avete chiesto il sito, avete chiesto anche, implicitamente, di non costruire un sito che vi metta in imbarazzo. Accessibility WCAG 2.1 AA non è un upgrade della nostra proposta — è il pavimento dichiarato. Il sito che vi consegniamo è leggibile da un giornalista che usa screen reader, navigabile da un ricercatore senior che ha perso la mobilità fine della mano, comprensibile da un candidato del MBA Gateway che vive con disabilità cognitiva. Questo vi posiziona accanto a Royal Society UK, MAXXI, Smithsonian — fondazioni che hanno accessibility nella missione, non come compliance subìta. Vi posiziona inoltre **in regola** con l'European Accessibility Act dal day-one — non subìto come emergenza legale al momento dell'audit ESG di Angelini Industries. È un asset che entra nel Bilancio Engaged Research 2027 come "accessibility journey" — racconto pubblico, non patch silenziosa."

Tono: dichiarativo, calmo, senza retorica. Non vendere accessibility come "feature WOW" — venderlo come "infrastruttura coerente con quello che siete".

### 6.3 Cosa NON dire nel pitch

- **NON** vantarsi di "accessibility AAA" (sarebbe over-promise, e AA è già esigente)
- **NON** dire "accessibility-friendly" o "accessibile" come aggettivo qualunque (è linguaggio marketing scadente — meglio dichiarare lo standard preciso WCAG 2.1 AA)
- **NON** ridurre accessibility a "il sito funziona anche per i disabili" (linguaggio paternalistico — l'accessibility è inclusività universale, beneficia anche utenti senza disabilità: contesti rumorosi che usano caption, contesti luminosi che richiedono contrast alto, utenti anziani con presbiopia, contesti bandwidth bassa che richiedono fallback)
- **NON** promettere "zero issue forever" — il sito è organismo che evolve, accessibility è journey con audit ricorrenti

### 6.4 Riferimenti citabili nel pitch (citazioni di credibilità)

| Fonte | Cosa cita | Uso nel pitch |
|---|---|---|
| **W3C WCAG 2.1** (https://www.w3.org/TR/WCAG21/) | Standard ufficiale | Footnote di credibilità — "lavoriamo sullo standard internazionale W3C" |
| **European Accessibility Act** (Direttiva UE 2019/882 + D.Lgs. 82/2022) | Obbligo legale | "in regola con EAA dal day-one" |
| **Royal Society UK Accessibility Statement** (https://royalsociety.org/about-us/accessibility/) | Benchmark fondazione | Cita come "modello a cui ci ispiriamo" |
| **MAXXI Foundation accessibility page** | Benchmark italiano cultura | Cita come "benchmark italiano" |
| **Smithsonian Accessibility Program** | Benchmark globale museo/cultura | Cita come "benchmark globale" |
| **IAAP Certified Professional in Accessibility Core Competencies (CPACC)** | Standard professionale | Opzionale: dichiarare che HeyAI può coinvolgere consulente IAAP-certified per audit terzo annuale se Angelini lo desidera |

---

## Note metodologiche

**Skill applicata**: `design:accessibility-review` (variante forward-looking: spec del sito nuovo, non audit del sito attuale). Standard di riferimento: WCAG 2.1 AA (W3C). Pattern di interaction: WAI-ARIA Authoring Practices.

**Documento parent**: [[Strategia Website 2026]] §4.2 VP4 (Accessibility-first + Design system documentato) + §5 (iniziative on-site OS1–OS9 + AI Layer AI-1..AI-5) + §9.1 (5% del totale HeyAI sito allocato a deliverable hand-over inclusi accessibility specs).

**Documenti complementari sviluppati in chat dedicate**:
- [[SEO Specs Sito Nuovo]] — scope: ricerca keyword + content architecture + benchmark competitive (chat con `marketing:seo-audit`)
- ❌ Brand Review Sito Angelini — **deliverable non prodotto** (decisione Carlo 14/5/2026: non utile per il pitch finale).

**Audience del documento**: uso interno HeyAI + appendice tecnica della proposta finale a Caterina Caboni (pitch deadline 31/5/2026). Condivisione asciutta a Daniele/Elena previo allineamento Carlo+Daniele+Elena giovedì 14/5.

**Cosa NON fa questo documento**:
- NON audita il sito attuale `angeliniacademy.com` (è obsoleto e fuori scope per esplicita richiesta cliente)
- NON propone tool/framework specifico — la spec è agnostica a stack tecnologico, vincolante per qualunque fornitore (HeyAI delivery o fornitore IT gruppo Angelini)
- NON include numeri di costo dedicati ad accessibility (incorporati nel 5% deliverable hand-over di [[Strategia Website 2026]] §9.1)
- NON propone audit IAAP di terzi come obbligo (lo cita come opzione raccomandata, non come baseline contrattuale)

**Vincolo importante (richiamato)**: la spec dipende dalla scelta finale di brand book Angelini (palette + tipografia) — vedi [[Strategia Website 2026]] §9.3 Rischio 2. Da chiedere a Elena entro 17/5. Quando arriva il brand book, la sezione §1.3 (token palette) va istanziata sui valori reali e ri-verificata contrast pre-pubblicazione spec finale.
