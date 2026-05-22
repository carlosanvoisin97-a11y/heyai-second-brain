---
type: asset-folder
project: Sito Futuritaly
created: 2026-05-20
updated: 2026-05-20
---

# Icone Settori 3D — Sito Futuritaly

Asset folder per la generazione delle **16 icone 3D dei settori di competenza** Futuritaly, da inserire nel mockup sito (sezione "settori + effetto moltiplicatore"). Richiesta esplicita di Claudia Bugno in call 20/5: *"effetto pop / 3D dirompente, buca allo schermo"*.

Task tracciato in [[Sito Futuritaly]] (P2, post-call 20/5).

## Struttura cartella

```
Icone Settori 3D/
├── 01-Source-2D/          ← 16 PNG icone 2D estratte dal BGL (pagina 14)
├── 02-Output-Pilot/       ← Pilot: 4 immagini (Difesa + Capitale Umano × stile A/B)
├── 03-Output-Batch/       ← Batch finale: 16 PNG nello stile scelto
├── generate_icons.py      ← Script di generazione (usa Gemini 2.5 Flash Image)
└── README.md              ← Questo file
```

## Workflow operativo

### 1. Setup (una sola volta)

Apri **Terminale** sul Mac, e copia-incolla questi tre comandi:

```bash
cd "/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Assets/Icone Settori 3D"
export GEMINI_API_KEY="la-tua-chiave-AI-Studio"
python3 generate_icons.py --pilot
```

Lo script al primo avvio installa da solo le dipendenze (`google-genai` + `pillow`). Tempo: 30 secondi.

In alternativa puoi creare un file `.env` in questa cartella con dentro `GEMINI_API_KEY=la-tua-chiave` e lanciare solo lo script — più comodo se rilanci più volte. **Attenzione**: il file `.env` contiene la chiave in chiaro, NON committarlo se mai metti questa cartella sotto git.

### 2. Pilot (60 secondi, ~€0,16)

```bash
python3 generate_icons.py --pilot
```

Genera 4 immagini in `02-Output-Pilot/`:
- `01-difesa-A-clay.png`
- `01-difesa-B-glass.png`
- `08-capitale-umano-A-clay.png`
- `08-capitale-umano-B-glass.png`

Guarda le 4, scegli stile A (Clay matte) o B (Glass translucent).

### 3. Batch finale (3 minuti, ~€0,65)

```bash
python3 generate_icons.py --batch --style B
```

Sostituisci `B` con `A` se hai scelto Clay. Output in `03-Output-Batch/stile-{A|B}-{clay|glass}/`: 16 PNG nominati `01-difesa-3D.png`, `02-sicurezza-3D.png`, ecc.

### 4. Recovery selettivo (se 1-2 escono male)

```bash
python3 generate_icons.py --batch --style B --only 03-finanziario,11-food
```

Rigenera solo le icone specificate, sovrascrivendo le precedenti.

## Stili disponibili

**A — Clay Premium**
Forme volumetriche pulite, monocromia Blu Savoia `#3D70ED` + bianco, finitura matte/silicone, ombre soft, prospettiva isometrica leggera. Stile Apple iOS settings 3D / Notion / Stripe.
Pro: leggibile a 60px, sicuro istituzionale.

**B — Crystal / Liquid Glass**
Vetro semitrasparente con interno blu liquido (gradient `#3D70ED` → `#003869`), riflessi nitidi, caustiche. Apple Liquid Glass / Vision Pro aesthetic.
Pro: massimo effetto "buca allo schermo" come richiesto da Claudia.

Entrambi gli stili preservano il simbolo concettuale originale dell'icona 2D di brand (descritto in `ICON_CONCEPTS` dentro lo script). Sfondo bianco puro, no scritte, no UI.

## Costi stimati (Gemini 2.5 Flash Image, listino maggio 2026)

- Pilot (4 generation): ~€0,16
- Batch completo (16 generation): ~€0,65
- + eventuale recovery (~€0,04 per icona)

**Totale realistico**: <€1,50 per progetto completo, incluse iterazioni.

## Sicurezza chiave API

Dopo aver completato il batch, **rigenera la chiave** su [AI Studio → API keys](https://aistudio.google.com/apikey) (1 click, gratis, immediato). La chiave vecchia diventa inutilizzabile in 5 secondi. Igiene di base.

## Provenienza icone 2D

Le 16 PNG in `01-Source-2D/` sono state estratte programmaticamente da:
- File: `FutureItaly_BGL_Rel01_inProgress.pdf` (Brand Guidelines Futuritaly, Release 01)
- Pagina: 14 ("ICONE | ICONE AREE TEMATICHE")
- Risoluzione output: 761×641 px ciascuna, render vettoriale a zoom 8×

## Handoff per Michele

Una volta validato il batch finale, gli output di `03-Output-Batch/stile-{X}-{nome}/` sono pronti per essere integrati nel mockup sito. Naming sequenziale (01..16) mantiene l'ordine originale del BGL.
