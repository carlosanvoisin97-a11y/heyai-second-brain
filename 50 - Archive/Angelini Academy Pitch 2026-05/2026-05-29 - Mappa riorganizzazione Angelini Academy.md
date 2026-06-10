---
type: plan
status: proposta-da-approvare
client: Angelini Academy (via FuturItaly)
created: 2026-05-29
updated: 2026-05-29
tags: [angelini, riorganizzazione, front-4-audit-vault]
---

# Mappa riorganizzazione — Angelini Academy

> **Documento di PROPOSTA. Niente è stato spostato.** Questa è la fotografia di come è oggi la cartella e di come potrebbe essere riorganizzata. Si applica **dopo il pitch del 31/5**, e solo col tuo OK. Nasce dal Front 4 dell'audit vault (29/5).

## Perché esiste questo documento

La cartella `20 - Projects/Futuritaly/Angelini Academy/` contiene **66 file in piano** (49 markdown + 2 PowerPoint + 7 Excel pricing + 4 docx + 2 html + 1 svg + 1 png), zero sottocartelle. È diventata difficile da navigare: le versioni vecchie stanno accanto a quelle vive, i 14 prompt di build del sito accanto al deck del pitch, 7 versioni di pricing una sull'altra.

L'idea (tua, 29/5): creare una versione riorganizzata, controllarla, e farla diventare quella ufficiale. Ispezionando la cartella sono emerse **tre trappole** che rendono pericolosa una copia/spostamento fatta alla cieca adesso. Da qui la scelta di fare prima questa mappa.

## Le tre trappole (perché NON si tocca niente prima del 31/5)

1. **La cartella è "calda".** Il 95% del peso (26,5 MB su 28) sono i due PowerPoint del pitch (`Angelini_Academy_Pitch.pptx`, `..._ABSTRACT.pptx`), modificati il 29/5 pomeriggio. Più 3 file `.md` di pitch toccati oggi. Qualsiasi copia li congela mentre tu continui a editarli fino al 31/5 → rischio di lavorare/consegnare una versione vecchia.

2. **Gli alias rompono il grafo Obsidian.** L'hub `_Angelini Academy.md` ha `aliases: [Angelini Academy, Angelini Academy - Sito]`. Duplicarlo farebbe sì che due file rivendichino lo stesso nome: tutti i `[[Angelini Academy]]` del vault diventerebbero ambigui. → **L'hub non si copia e non si sposta mai. Resta in root.**

3. **684 wikilink con path completo.** Nel vault ci sono 684 link che puntano a file Angelini scrivendo il percorso intero. ~669 puntano all'hub (che non si muove → salvi). Ma ~89 puntano a file che sposterei in sottocartelle (`Domande QA` 21, `Analisi Narrativa` 11, `Wireframe`, `SEO Specs`, `Brief Mockup`, ecc.). Questi link **si romperebbero allo spostamento** e vanno sistemati con find/replace (vedi checklist apply).

> Promemoria tecnico: i wikilink scritti per **solo-nome** (`[[Domande QA]]`) sopravvivono a qualsiasi spostamento — Obsidian risolve per basename ovunque sia il file. Si rompono solo quelli scritti col **percorso intero**.

## Struttura proposta

```
Angelini Academy/
│
├── _Angelini Academy.md                 ← HUB — resta in root, INTOCCATO (alias + 669 link)
│
├── 00 - Pitch 31-5/                      ← deck + scalette/strategia del pitch (11 file)
├── 01 - Pricing/                         ← testa pricing + proposta + audit (3 file)
├── 02 - Sito — design e specs/           ← brief, mockup, wireframe, SEO, accessibility (12 file)
├── 03 - Prompt build sito (storico)/     ← i 14 "Prompt Claude Code" (sito già costruito)
├── 04 - Analisi & prep iniziale/         ← analisi 8/5, Q&A, prep call (9 file)
├── 05 - Asset (video, font, briefing)/   ← reel, smoke test font, briefing personaggi (6 file)
│
└── 99 - Archivio/                        ← superato esplicito (10 file: 4 md + 6 pricing vecchi)
```

Il prefisso numerico (`00 -`, `01 -` … `99 -`) replica lo stile del vault (`00 - Inbox`, `99 - System`) così le sottocartelle si ordinano da sole: pitch in cima, archivio in fondo.

## Assegnazione file → cartella (proposta — tu correggi i singoli casi)

### `00 - Pitch 31-5/` (11 file)
| File | Note |
|---|---|
| `Angelini_Academy_Pitch.pptx` | deck principale (vivo, 29/5) |
| `Angelini_Academy_Pitch_ABSTRACT.pptx` | abstract (vivo, 29/5) |
| `Pitch Angelini - Diagnosi Strategica (29-5).md` | vivo oggi |
| `Pitch Deck - QA e Restyle (stato 29-5).md` | vivo oggi |
| `Pitch Angelini - Story Map ricca su spine Carlo (29-5).md` | vivo oggi |
| `Pitch Deck Scaletta McKinsey 23-5.md` | scaletta governante (citata nell'hub) |
| `Framework Pitch Finale.md` | 89 KB |
| `Pitch Outline 18-5 — Strategia Angelini Academy Short.md` | materia prima contenuti |
| `Strategia Pitch Finale.md` | |
| `Sintesi Strategica Pre-PPTX 2026-05-18.md` | 68 KB |
| `Strategia Pitch Finale per Elena.docx` | |

### `01 - Pricing/` (3 file)
| File | Note |
|---|---|
| `HeyAI_Angelini_Academy_Catalogo_Pricing_v4.3.xlsx` | **testa presunta** — DA CONFERMARE (vedi decisioni aperte) |
| `HeyAI_Angelini_Academy_Proposta_Investimento_v1.docx` | proposta investimento |
| `2026-05-27 - Audit Pricing Angelini Academy.md` | analisi pricing (47 KB) |

### `02 - Sito — design e specs/` (12 file)
`Master Brief Sito Angelini Academy.md` · `Mockup Sito - Struttura e Copy Completo.md` (130 KB) · `Brief Copy Sito per Claude Code.md` (versione corrente) · `Mockup Brief Sito.md` · `Brief Mockup.md` · `User Journey Dettagliati 2026-05-18.md` · `Wireframe e Architettura.md` · `SEO Specs Sito Nuovo.md` · `Accessibility Specs Sito Nuovo Angelini Academy.md` · `Strategia Website 2026.md` · `Scan Siti Web Comparable.md` · `Concept - Engaged Network Community.md`

### `03 - Prompt build sito (storico)/` (14 file)
Tutti i `Prompt Claude Code - *.md` (15→20/5): Typography swap · AI Tutor e Research Engine · Galileo Tutor e Research Engine · Pagina Engaged Network Preview · Audit modifiche recenti · Hero scroll effect · Revisioni sito 15-5 v1 · Modifiche post-call 19-5 · Patch HR Business cluster 3 · percorsi imprese + persona 3D · Refactor atomo Industry Learning Ecosystem · Laboratorio editoriale dentro engaged-network · Hub editoriale doppio livello engaged-research · Refactor atomo Pillars nucleo + orbite.
*Sono i prompt con cui è stato costruito il sito della gara — esecuzione conclusa, valore storico/riuso.*

### `04 - Analisi & prep iniziale/` (9 file)
`Analisi Brief.md` · `Analisi Narrativa.md` · `Analisi Narrativa Short.md` · `Domande QA.md` · `Q&A preparatorio 8 maggio.md` · `Angelini Academy - Domande QA.docx` · `Angelini_Academy_QA_preparatorio_8_maggio.docx` · `Pre-call Elena 18-5 — Strategia Angelini Academy.md` (191 KB) · `2026-05-27 - Prep Call Elena FuturItaly.md`

### `05 - Asset (video, font, briefing)/` (6 file)
`Video Reel Veo 3.1 - Prompt Pack.md` · `Video Reel Closing Frame.svg` · `Video Reel Closing Frame.png` · `Smoke test font - Variante B.html` · `Smoke test font - Variante C.html` · `Angelini Academy — Briefing Personaggi Landing Page.md`

### `99 - Archivio/` (10 file)
**Già marcati come superati nel nome del file:**
- `Analisi Competitor (v1 archiviata).md`
- `Analisi Competitor (v2 archiviata).md`
- `Campagna 2026 (archiviata - scope troppo largo).md`
- `Brief Copy Sito per Claude Code (v1.1 archiviata).md` (esiste già la versione corrente)

**Versioni pricing superate (testa = v4.3):**
- `HeyAI_..._Pricing_v1.xlsx` · `v2` · `v3` · `v4` · `v4.1` · `v4.2`

## Checklist di applicazione (DOPO il 31/5, col tuo OK)

Da eseguire in una sessione dedicata, in quest'ordine:

1. **Snapshot di sicurezza**: commit git del vault pulito prima di iniziare (control-z d'emergenza).
2. **Conferma testa pricing**: verificare con te che `v4.3` è la versione corrente prima di archiviare le altre 6.
3. **Creare le 7 sottocartelle** elencate sopra.
4. **Spostare i file** con `mv` (basename invariato → i link per solo-nome restano validi).
5. **Sistemare i ~89 wikilink con path completo** dei file spostati. Due strategie:
   - **(A) find/replace del prefisso path** per ogni file spostato (es. `Angelini Academy/Domande QA` → `Angelini Academy/04 - Analisi & prep iniziale/Domande QA`). Mirato, conservativo.
   - **(B, consigliata long-term) normalizzare a solo-nome**: convertire i path-completi in `[[Domande QA]]`. Una volta fatto, qualsiasi futuro spostamento è gratis. Richiede prima un check che nessun basename Angelini collida con un file omonimo altrove nel vault.
6. **Grep di verifica** (regola §15 voce 7): `grep -rn "Angelini Academy/<vecchio path>" --include="*.md"` deve tornare 0 residui per ogni file spostato.
7. **`vault-link-checker` manuale** o attendere il run di domenica: 0 broken wikilink attesi.
8. **Aggiornare l'hub** `_Angelini Academy.md` se contiene riferimenti path-completi ai file spostati (append nel Log, non rewrite).

## Decisioni aperte da confermare prima dell'apply

1. **Pricing**: `v4.3` è davvero la testa? (è una delle 8 decisioni aperte pre-31/5, e il drift €48.500 vs €49.500 è ancora vivo). Se la testa è altra, si aggiorna `01 - Pricing/`.
2. **Strategia link** (punto 5): preferisci la (A) conservativa o la (B) normalizzazione a solo-nome?
3. **Archivio locale vs globale**: `99 - Archivio/` dentro la cartella Angelini (tiene il contesto progetto, mia proposta) **oppure** spostare in `50 - Archive/` top-level?
4. **Pitch post-consegna**: dopo il 31/5 la cartella `00 - Pitch 31-5/` resta lì come "consegnato" o si archivia il deck?

## Bonus — sprawl Angelini anche in `00 - Inbox/` (pulizia separata, post-pitch)

Oltre ai 66 file nella cartella progetto, ci sono ~11 file Angelini in `00 - Inbox/` (handover per nuove chat + bozze pitch `v3 → v3.1 → v3.2 → v3.3 → v4.0`, ormai superate dal PPTX vivo + 1 PDF strategia sito). Per convenzione l'Inbox è volatile: dopo il 31/5 queste bozze andrebbero archiviate o cestinate. Non fanno parte del riordino della cartella progetto, ma vale la pena saperlo. Da triagiare con te.
