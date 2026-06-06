---
type: working-doc
created: 2026-05-26
parent_project: _Angelini Academy
client: Angelini Academy
purpose: Master Style Prompt da incollare in Claude Design come "guard-rail" cross-slide. Alza la qualità visiva di ogni slide futura senza dover specificare slide-per-slide.
related:
  - "[[2026-05-26 - Handover Angelini chat nuova - Slide generation]]"
  - "[[2026-05-26 - Slide-prompt Atto 2 (S11-S19) per Claude Design]]"
  - "[[2026-05-26 - Audit PDF Claude Design output Atto 1 (S3-S8)]]"
---

# 🎨 Master Style Prompt per Claude Design — Pitch Angelini

> **Come usarlo**: incolla questo prompt in Claude Design **come secondo messaggio** subito dopo il CONTEXT PROMPT (sezione 9 handover). Aspetta conferma del modello, poi procedi con i prompts slide-by-slide.
>
> **Quando ri-incollarlo**: se noti che dopo 5-7 slide Claude Design "drifta" stilisticamente (es. ricompare lo stile generico), ripeti questo prompt come reminder.

---

## 📋 BLOCCO COPY-PASTE (inizio)

```
Voglio che da adesso in poi tu rispetti **questo set di regole di stile vincolanti** per ogni slide che genererai. Sono regole non negoziabili — vincono sopra qualsiasi default estetico.

# 🎯 OBIETTIVO QUALITÀ — "McKinsey final deliverable + editorial design hybrid"

Il deck deve sembrare un final deliverable di consulting partner — McKinsey/BCG-grade — non un PowerPoint corporate. Riferimenti estetici:
- Editorial design (magazine institutional, NOT corporate brochure)
- Typographic hierarchy disciplinata
- Whitespace generoso
- Custom data visualization (mai shape geometrici banali)
- Sobrio, istituzionale, NIENTE decorativo

# 🎨 BRAND ANGELINI ACADEMY 2024 (vincolante)

**Palette colori** (uso disciplinato):
- **#003087 navy istituzionale** — primario per titoli, action title, accent forte
- **#FF8200 arancio** — accent per parole-ancora, So What footer, badge ILLUSTRATIVO, callout
- **Bianco / off-white #FAFAFA** — sfondo dominante (mai sfondi colorati pieni)
- **Sage green** — uso esclusivo per Voce Riservata / Tech Excellence (NON decorativo)
- **Secondari** (giallo mustard, rosso bordeaux, verde foresta) — uso solo per categorizzazione MECE (es. 3 ambiti strategici in S17)

**Tipografia** (combinazione strategica):
- **Barlow sans** — titoli H1-H4 (SemiBold per titoli, Light per body)
- **Merriweather serif italic** — uso esclusivo per: So What footer · citazioni · climax · pull-quote editoriali · descrizioni discorsive "abstract editoriale"
- Sizing hierarchy: action title ~32pt · subtitle ~14pt · body ~12pt · footnote ~9-10pt
- Tracking 0.05-0.1em su all-caps micro-labels

**Principio guida**: **Unwavering Care** — avere a cuore le persone, la loro quotidianità e il loro futuro. Filtro che orienta ogni scelta visiva: dimensione umana al centro (volti, storie, percorsi), MAI cold-tech aesthetic.

# 📐 LE 8 REGOLE COMPOSITIVE (vincolanti per OGNI slide)

1. **Action title** — grande in alto, Barlow SemiBold ~32pt, navy #003087, parole-ancora in arancio #FF8200. È sempre una CONCLUSIONE strategica, MAI un'etichetta categoriale. Sotto le 18 parole quando possibile.

2. **Governing thought** — subtitle/intro paragraph sotto action title, Barlow Light ~14pt, 1-2 righe di contesto. È la versione "rallentata" dell'action title.

3. **Supporting evidence** — corpo principale della slide. Layout pensato in funzione della funzione (tabella per matrici, blocchi per affondi, timeline per journey). Densità intenzionale: alta dove dichiarato (S6 tecnica + S8 personas) · respirata su slide-ponte (S2 exec sum + S11 vista dall'alto).

4. **Visual element** — qualsiasi elemento grafico deve essere ELEVATO a qualità PREMIUM. NIENTE shape geometrici banali (cerchi/quadrati/triangoli stilizzati). Custom data viz: harvey balls custom, battery indicators custom, frecce eleganti, badge a livelli, mini-sitemap, swatch editoriali.

5. **So What footer** — sempre presente, Merriweather italic, accent arancio per parola-chiave, full-width sotto il corpo. È il takeaway diagnostico, NON una ripetizione del titolo.

6. **Talking track** — SOLO in speaker notes (non in slide). Voce Carlo unica. Non duplicare il testo della slide.

7. **Footer di pagina** — numero pagina piccolo in basso a destra (~10pt grigio) + logo Angelini Academy piccolo in basso a sinistra. ECCEZIONE: Cover + section dividers senza footer.

8. **Badge top-right** — 🟡 ILLUSTRATIVO diagonal su slide con contenuto speculativo/preliminare (es. S5 mercato + S6 tecnica). NON usare su altre slide.

# 🚫 ANTI-PATTERN (cose da NON fare MAI)

Lista costruita su pattern reali da evitare:

- ❌ **NO sfondi colorati pieni** dietro a blocchi (mantieni sfondo bianco, codifica colore solo su bordi/bande/header)
- ❌ **NO bordi pesanti** intorno ai box (linee 0.5pt grigio chiaro #E5E7EB max)
- ❌ **NO icone shape geometrici banali** (cerchi pieni con simbolo, quadrati colorati) — preferisci icone line-art 1.5pt stroke unificate stile
- ❌ **NO emoji rendering letterale** nelle slide finali — sostituire con SVG custom (es. 🌐 → cerchio outline con grid pattern · 🔒 → padlock line-art · 📝 → page con corner curvata)
- ❌ **NO bullet stacking pesante** — max 5-6 bullet per blocco · sennò 2 colonne · bullet sottilissimi (·) non rotondi
- ❌ **NO PowerPoint clipart**, NO stock photos, NO illustrazioni AI-generated "vibe"
- ❌ **NO sfondi dark** (brand cliente Angelini è chiaro/istituzionale — NIENTE cosmic/notturno/dark navy come sfondo)
- ❌ **NO mascot HeyAI** (è brand cliente, non HeyAI)
- ❌ **NO gradient pesanti** (gradient solo per progressioni dati tipo timeline 6→12→24 mesi · MAI gradient decorativi)
- ❌ **NO shadow forti** (depth subtle: max 1pt drop shadow molto leggero, opacity <10%)
- ❌ **NO PowerPoint-tier look**: Inter, Roboto, Space Grotesk, Arial sono AI-tells da evitare (Barlow + Merriweather sempre)
- ❌ **NO jargon visibile**: "fil rouge", "backbone strategica", "synergistic ecosystem", "per caso" → tutti VIETATI nel rendering testuale
- ❌ **NO citazioni dirette del brief cliente** ("come dice il vostro brief pag. X") — VIETATO

# 🎨 PATTERN VISIVI SIGNATURE (ricorrenti cross-deck)

**So What come signature editoriale**: ogni slide chiude con un blocco So What — label "S O W H A T" in Barlow SemiBold ~10pt tracking 0.15em arancio + paragrafo Merriweather italic ~14pt navy. **Mai Barlow italic per il body del So What** (è Merriweather o non vale).

**ILLUSTRATIVO badge**: tag diagonal top-right rotated -15°, sfondo arancio #FF8200, testo "ILLUSTRATIVO" Barlow SemiBold ~10pt all-caps bianco, tracking 0.1em. Solo S5 + S6 (mai altrove).

**Header slide**: in alto a sinistra, micro-label "ATTO X · [SEZIONE NOME]" Barlow ~9pt all-caps tracking 0.15em grigio scuro #6B7280 · sotto, action title grande in navy.

**Action title bicolore**: navy #003087 per testo principale + arancio #FF8200 per le 2-3 parole-ancora del titolo. Mai più di 3 parole in arancio per slide.

**Subtitle a destra**: subtitle/intro paragraph posizionato a destra dell'action title (layout header a 2 colonne 60/40 — McKinsey standard), Barlow Light ~13pt grigio scuro, max-width contained.

**Numbers as hero**: KPI giant display Barlow ~48-64pt accent arancio + unit/label sotto Barlow Light ~11pt grigio. Usare con parsimonia (1-4 numeri-ancora per slide max).

**Page numbering**: "0X / 19" in basso a destra ~9pt grigio, formato "zero-padded" (es. "03 / 19" non "3/19").

# 🌈 COLOR-CODING CROSS-SLIDE (consistenza assoluta)

**3 Pilastri proposta** (sempre stesso colore cross-Atto 2):
- 🌐 **Hub digitale omnicanale** → navy #003087
- 📝 **Content Direction & Storytelling** → arancio #FF8200
- 🧠 **Tech Excellence & AI Layer** → sage green (es. #6B8E76)

**3 Voci ecosistema** (sempre stesso colore cross-deck):
- 🌐 **Voce Pubblica** → navy #003087
- 👥 **Voce Community** → arancio #FF8200
- 🔒 **Voce Riservata** → sage green

**3 ambiti strategici S17** (uso solo lì):
- 🟡 Identità → giallo mustard
- 🔴 Ricerca → bordeaux
- 🟢 Unique Proposition → verde foresta

**3 obiettivi Communication Plan**:
- 🟢 Awareness → verde
- 🔶 Reputation → arancio
- 🔷 Conversion → navy

# 🍒 ELEVATIONI CREATIVE (quando hai spazio per "ciliegine")

Dove possibile, applica queste elevazioni che differenziano dal "PowerPoint corporate":

- **Numerazione hero "01 / 02 / 03"** per sequenze (display Barlow giant 80-120pt, opacity 30-40%, come "incipit editoriale")
- **Layout asimmetrico editoriale** (60/40 invece di 50/50) — più long-read, meno "PPT a celle uguali"
- **Pull-quote Merriweather italic** display giant per frasi chiave (28-48pt, accent navy)
- **Mini-data viz custom**: battery indicators a 3 segmenti, harvey balls custom (filled vs empty), sparkline mini, gradient bars per timeline
- **Timeline orizzontale** con nodi connessi da linea tratteggiata (non frecce pesanti) e gradient progressivo
- **Effetto loop** (arco curvo che ritorna) per illustrare cicli (es. Customer Journey Sara: Advocacy → Awareness)
- **Concept molecolare** — dove pertinente (S7 Matrice + dove ha senso): micro-nodi (molecole = ricerca) connessi da linee sottili (ponti = ecosistema)
- **Fascia editoriale full-width** per frasi-climax (sfondo bianco, Merriweather italic giant, ampio padding) — MAI banner colorato pieno

# ⚙️ WORKFLOW OPERATIVO

- **Tweaks Panel** per micro-fix (text edit · color swap · spacing) — usalo aggressivamente, costa poco
- **Chat (questa)** per cambi strutturali (layout, nuovo elemento) — più costoso, usa solo quando necessario
- **Edit Mode** per text-only edits (copy fix) — preferisci a chat per cambi testuali

# ✅ SELF-CHECK FINALE (applica prima di considerare slide "done")

Prima di considerare una slide finita, verifica:

- [ ] Action title sotto 18 parole · è una CONCLUSIONE non un'etichetta?
- [ ] Governing thought presente (1-2 righe sotto action title)?
- [ ] Supporting evidence ha densità appropriata alla funzione della slide?
- [ ] Visual element è PREMIUM (custom data viz, NON shape banali)?
- [ ] So What footer presente in Merriweather italic accent arancio?
- [ ] Footer pagina e logo Angelini Academy presenti (eccetto Cover)?
- [ ] Color-coding cross-slide rispettato?
- [ ] Tipografia: Barlow su body, Merriweather italic su So What/quotes/climax?
- [ ] NO emoji rendering letterale (sostituiti con SVG custom)?
- [ ] NO sfondi colorati pieni dietro a blocchi?
- [ ] NO bordi pesanti (linee 0.5pt grigio chiaro max)?
- [ ] NO jargon visibile ("fil rouge", "backbone", ecc.)?

# 📝 CONFERMA

Conferma che hai memorizzato:
1. Obiettivo qualità "McKinsey final + editorial design"
2. Palette + tipografia + principio Unwavering Care
3. Le 8 regole compositive vincolanti
4. Anti-pattern (cosa NON fare)
5. Pattern visivi signature
6. Color-coding cross-slide
7. Workflow Tweaks vs chat
8. Self-check finale

Poi rimani in attesa del prompt della prossima slide.
```

## 📋 BLOCCO COPY-PASTE (fine)

---

## 🎯 Note operative per Carlo

### Quando usarlo
- **Prima volta**: appena dopo il CONTEXT PROMPT iniziale (sezione 9 handover), prima del primo prompt slide
- **Refresh**: se dopo 5-7 slide noti che Claude Design "drifta" stilisticamente (ricompare lo stile generico, gli emoji rendering letterale tornano, ecc.), ri-incolla questo blocco come reminder. È normale che modelli LLM perdano "guard-rail" stilistici in conversazioni lunghe.
- **Inizio nuova sessione**: ogni volta che apri una nuova conversazione Claude Design sullo stesso deck

### Cosa risolve
- **Drift stilistico** cross-slide (le slide non si "perdono" col passare delle slide)
- **Bug ricorrenti** identificati nell'audit PDF: jargon rientrato, emoji letterali, shape banali, sfondi colorati pieni
- **Coerenza color-coding** delle 3 Voci e dei 3 Pilastri
- **Self-check del modello** — il modello applica un proprio controllo qualità prima di chiudere ogni slide

### Cosa NON sostituisce
- Il **CONTEXT PROMPT** iniziale (governing thought + architettura deck) — quello è bagaglio di contesto, non di stile
- I **prompt slide-by-slide** specifici — questi sono le istruzioni puntuali per ogni singola slide

### Approccio "layered"
```
1. CONTEXT PROMPT (sezione 9 handover)
   ↓
2. MASTER STYLE PROMPT (questo file)
   ↓
3. PROMPT SLIDE-BY-SLIDE (S11, S12, S13... uno alla volta)
```

I 3 livelli si compongono: context (cosa stai facendo) + style (come deve apparire) + slide (cosa rendere ora).

---

## 🧪 Possibili variazioni del Master Style Prompt

Se vuoi testare versioni più corte o aggressive:

**Variante "Lean"** (per chat con poco budget token): tieni solo sezioni "BRAND ANGELINI 2024" + "8 REGOLE COMPOSITIVE" + "ANTI-PATTERN". Ometti il resto.

**Variante "Strict"**: aggiungi al fondo "Se senti il dubbio di violare una di queste regole, PRIMA di renderizzare, scrivi in chat 'Sto per applicare X — è coerente con le regole?' e aspetta conferma." Forza un check esplicito prima di ogni slide.

**Variante "Self-correcting"**: aggiungi "Dopo ogni slide, scrivi una checklist self-check (le 12 bullet del Self-Check Finale) confermando ognuna prima di considerare la slide done."

---

**Fine Master Style Prompt.** Copia il blocco tra le ``` in Claude Design.
