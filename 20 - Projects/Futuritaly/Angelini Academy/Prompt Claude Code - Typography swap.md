---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt operativo da incollare a Claude Code per **riallineare il mapping semantico** dei font Merriweather+Barlow già installati. Stato di partenza: i font ufficiali brand book Angelini sono già in produzione (Claude Code li ha applicati dal Brief Copy v1.1 del 15/5), ma con la logica "Barlow titoli + Merriweather body". Obiettivo: ribaltare il mapping in **Merriweather Light Italic display dominante + Barlow body/UI**, replicando la logica originale Fraunces+Manrope del primo mockup
created: 2026-05-15
updated: 2026-05-15
related:
  - "[[Brief Copy Sito per Claude Code]] (linee guida copy completo)"
  - "[[Smoke test font - Variante C]] (preview HTML della logica target)"
---

# Prompt per Claude Code — Riallineare mapping tipografico (display serif italic dominante)

> **Come usarlo**: aprire la sessione Claude Code sul repo `/Users/carlosanvoisin/code/angelini-academy/`, incollare integralmente il blocco sotto, premere invio. Claude Code modificherà `src/index.css`, `tailwind.config.{js,ts}` e i componenti che hanno classi font hard-coded.

---

## Prompt da incollare

```
Ciao. I font ufficiali Angelini (Merriweather + Barlow) sono già installati nel repo dopo il pass precedente. Adesso voglio RIVEDERE IL MAPPING SEMANTICO di come li usi nei vari ruoli, perché l'attuale configurazione segue la spec digital del brand book pag. 23 (Barlow per titoli + Merriweather per body lunghi serif) — e visivamente non funziona per il posizionamento "fondazione editoriale" che vogliamo.

Replichiamo invece la logica del mockup originale (display serif espressivo + body sans neutro, come Fraunces+Manrope) usando però solo i font ufficiali Angelini. Questa variazione è legittima: il brand book pag. 23 dichiara esplicitamente "queste indicazioni possono variare a seconda delle esigenze compositive".

CONTESTO
Repo: Vite + React 19 + TypeScript + Tailwind 4 + Framer Motion (NO Next.js).
Font installati e disponibili: Merriweather (300/400/700, italic/non-italic) + Barlow (200-700).
Non aggiungere font nuovi. Non rimuovere font esistenti. Tocca solo MAPPING.

NUOVO MAPPING SEMANTICO TARGET

| Ruolo                                  | Oggi (probabile)         | Diventa                       |
| -------------------------------------- | ------------------------ | ----------------------------- |
| Display (hero, H1, H2 sezioni)         | Barlow SemiBold/Light    | Merriweather Light Italic     |
| Sub-headings (H3 card title, H4)       | Barlow SemiBold          | Merriweather Regular (NON italic) |
| Body + paragrafi lunghi                | Merriweather Regular (forse) o Barlow Regular | Barlow Regular  |
| Lead (sottotitolo hero, intro sezione) | Barlow Light             | Merriweather Light Italic     |
| Eyebrow, nav, CTA, link UI, footer col labels | Barlow SemiBold/Medium | Barlow SemiBold/Medium (invariato) |
| Pull-quote, blockquote                 | Merriweather Light Italic | Merriweather Light Italic (invariato) |
| Cite (sotto blockquote)                | Barlow Medium uppercase  | Barlow Medium uppercase (invariato) |
| Numeri decorativi (es. 01-04 pilastri) | Barlow numerico          | Merriweather Light Italic     |
| Footer tagline gigante                 | Barlow Light             | Merriweather Light Italic     |

REGOLA OPERATIVA
- TUTTI i display e i titoli editoriali = serif Merriweather (Light Italic per display, Regular per sub-headings)
- TUTTI gli elementi UI utility = sans Barlow (body, nav, CTA, eyebrow, cite, footer cols, microcopy)
- Eccezioni narrative ammesse: pulsanti di sezioni editoriali possono avere il label CTA in Barlow ma stare dentro un blocco serif — questo è il pattern delle riviste editoriali online (NYT Magazine, Aeon, Noema).

DESIGN TOKENS — scale di size e weight per il NUOVO mapping

Hero / H1 display:
  font-family: Merriweather (font-serif)
  font-weight: 300 (Light)
  font-style: italic
  font-size: clamp(48px, 7vw, 84px)
  line-height: 1.08
  letter-spacing: -0.02em
  color: blu istituzionale #003087

H2 sezione:
  font-family: Merriweather (font-serif)
  font-weight: 300 italic
  font-size: clamp(36px, 4.2vw, 54px)
  line-height: 1.15
  letter-spacing: -0.015em
  color: blu istituzionale #003087 (su sfondo chiaro) / bianco (su sfondo blu)

H3 card title / sotto-sezione:
  font-family: Merriweather (font-serif)
  font-weight: 400 (Regular, NON italic — più solido)
  font-size: 24-28px
  line-height: 1.25
  letter-spacing: -0.005em

H4 micro-heading:
  font-family: Merriweather (font-serif)
  font-weight: 400 (Regular, NON italic)
  font-size: 20-22px
  line-height: 1.3

Body / paragrafi lunghi:
  font-family: Barlow (font-sans)
  font-weight: 400 (Regular)
  font-size: 18px desktop, 16px mobile
  line-height: 1.6-1.7
  IMPORTANTE: il body lungo NON va in Merriweather Italic — stanca l'occhio dopo poche righe

Lead (sottotitolo hero, intro sezione):
  font-family: Merriweather (font-serif)
  font-weight: 300 italic
  font-size: clamp(20px, 1.6vw, 24px)
  line-height: 1.55
  color: ink secondario (slate-700 o equivalente)

Eyebrow (label uppercase sopra i titoli):
  font-family: Barlow (font-sans)
  font-weight: 600 (SemiBold)
  font-size: 12-13px
  letter-spacing: 0.14-0.18em
  text-transform: uppercase
  color: blu chiaro #005EB8 (su sfondo chiaro) / arancio #F6BE00 (su sfondo blu)

CTA / pulsanti:
  font-family: Barlow (font-sans)
  font-weight: 600 (SemiBold)
  font-size: 16px
  letter-spacing: 0.01-0.02em

Nav links:
  font-family: Barlow (font-sans)
  font-weight: 500 (Medium)
  font-size: 15px

Blockquote / pull-quote:
  font-family: Merriweather (font-serif)
  font-weight: 300 italic
  font-size: clamp(22px, 2.4vw, 30px)
  line-height: 1.5
  border-left 2px solid + padding-left 28px

Cite (sotto blockquote):
  font-family: Barlow (font-sans)
  font-weight: 500
  font-size: 13px
  letter-spacing: 0.12em
  text-transform: uppercase

Footer tagline (gigante):
  font-family: Merriweather (font-serif)
  font-weight: 300 italic
  font-size: 36-40px
  line-height: 1.15
  letter-spacing: -0.015em

REGOLE DI NON-USO
1. NON usare Merriweather italic per testi lunghi in body (>3 righe). L'italic in body stanca l'occhio.
2. NON mettere Merriweather Regular ai size hero (>48px) — perde grazia. Solo Light o Light Italic ai display size.
3. NON usare Barlow ExtraBold/Black (sembra corporate aggressivo). Mantieni Barlow tra Light 300 e SemiBold 600.
4. NON aggiungere font nuovi: i due ufficiali del brand book Angelini sono il perimetro chiuso.
5. NON cambiare la palette (blu istituzionale #003087 + blu chiaro #005EB8 + secondari verde #007864, viola #840B55, arancio #FF8200/#F6BE00).

PROCEDURA OPERATIVA
1. Esegui un audit dell'attuale uso dei font: grep nel repo per font-serif, font-sans, font-display, Merriweather, Barlow, e per le utility class di Tailwind tipografiche (font-{family}, text-{size}). Riportami una mappa di "dove oggi sono usati Merriweather e Barlow".
2. Confronta la mappa con il nuovo mapping target sopra. Identifica i punti di scostamento (es. un H1 che oggi è in Barlow SemiBold ma deve diventare Merriweather Light Italic).
3. Aggiorna `src/index.css` (e Tailwind 4 @theme se applicabile) e/o `tailwind.config.{js,ts}`:
   - Verifica che le font family Tailwind siano: sans = Barlow, serif = Merriweather. Se ci sono alias custom (font-display, font-fraunces, font-manrope), allinea i loro valori al nuovo mapping (display → Merriweather; eventuali residui fraunces/manrope → rimuovere o rimappare).
4. Aggiorna le utility class globali / componenti React per riflettere il nuovo mapping. In particolare:
   - Tutti gli `<h1>` `<h2>` di hero e sezioni passano a `font-serif italic font-light` (o equivalente del design system).
   - Tutti gli `<h3>` `<h4>` di card e sotto-sezioni passano a `font-serif font-normal` (NON italic).
   - Body, eyebrow, nav, CTA, link UI restano/diventano `font-sans` Barlow.
   - Lead/sottotitoli hero passano a `font-serif italic font-light`.
   - Numeri decorativi nelle card (01, 02, 03, 04) diventano `font-serif italic font-light` Merriweather.
   - Footer tagline diventa `font-serif italic font-light` Merriweather.
5. Verifica a vista che gli H1 e gli H2 in Merriweather Light Italic abbiano tracking negativo applicato (-0.02em / -0.015em) e line-height stretto (1.08 / 1.15) — senza queste regole il Merriweather sembra goffo ai size grandi.
6. Verifica che il body NON sia mai in Merriweather italic. Se trovi un body lungo in italic, è un bug — convertilo a Barlow Regular.
7. Esegui un build di verifica (npm run build o equivalente) e segnala eventuali warning di font loading.
8. Reference visiva: il file `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/Smoke test font - Variante C.html` mostra esattamente il risultato target. Aprilo se hai accesso al filesystem dell'utente, o chiedimelo se ti serve come benchmark.

DELIVERABLE ATTESI
- Mappa "uso font oggi → uso font dopo" (audit del punto 1 + 2)
- Diff dei file modificati (src/index.css, tailwind config, componenti)
- Conferma che il build passa senza errori
- Lista di eventuali punti dubbi dove hai dovuto fare una scelta (es. un titolo che era in Barlow ma stilisticamente potrebbe restare lì invece che passare a serif — segnalalo invece di decidere da solo)

CASI AMBIGUI DA SEGNALARE INVECE DI DECIDERE
- Componenti con font hard-coded inline che non passano per le utility Tailwind
- Casi in cui il mapping nuovo rompe la gerarchia visiva di una pagina specifica (es. la sezione X aveva un H3 in Barlow Bold come accento intenzionale)
- Eventuali residui di Fraunces/Manrope ancora presenti (dovrebbero essere già stati rimossi nel pass precedente — se ne trovi, segnalami)

RIFERIMENTI ESTERNI
- Brand book Angelini Academy 2024: pag. 21 (Barlow), pag. 22 (Merriweather), pag. 23 (Font Digital — clausola di flessibilità compositiva "queste indicazioni possono variare a seconda delle esigenze compositive")
- Brief Copy Sito per Claude Code: §8 Identità verbale e visiva (dettagli design tokens completi)

Procedi con l'audit del punto 1 come prima cosa, e fammi vedere la mappa "dove sono usati oggi" prima di iniziare a modificare i file. Voglio confermare con te il piano di intervento prima dello swap.
```

---

## Note operative per Carlo

**Cosa cambia rispetto alla versione precedente del prompt**: il prompt non parla più di sostituire Fraunces+Manrope (già fatto nel pass precedente). Parla invece di **rivedere il mapping semantico** dei due font ufficiali già installati, ribaltandolo dalla logica brand book (Barlow titoli + Merriweather body) alla logica editoriale-fondazione (Merriweather display dominante + Barlow body/UI).

**Differenza percepibile sul browser**: dopo questo pass, il sito avrà gli H1/H2 in Merriweather Light Italic anziché in Barlow. È il salto da "tech-corporate" a "fondazione editoriale".

**Importante**: ho istruito Claude Code a **fare prima un audit e farti vedere la mappa** prima di toccare i file. Così confermi tu il piano prima dello swap, ed eviti che cambi cose che intenzionalmente vuoi tenere com'erano (es. se Michele aveva fatto una scelta deliberata su un componente specifico).

**Difesa al pitch 31/5**: il brand book pag. 23 dichiara *"queste indicazioni possono variare a seconda delle esigenze compositive"*. Per un sito di fondazione/research lab pensato per audience accademica e media, il Merriweather Light Italic nei display comunica gravitas editoriale che Barlow puro non esprime. Stiamo usando il 100% dei font ufficiali, in proporzione adatta al contesto digitale.

---

*Versione 1.1 — 15/5/2026. Patch v1.1 (15/5 sera): premessa cambiata — i font Merriweather+Barlow sono già installati post pass precedente; il prompt ora riguarda solo il riallineamento del mapping semantico, non lo swap delle famiglie tipografiche.*
