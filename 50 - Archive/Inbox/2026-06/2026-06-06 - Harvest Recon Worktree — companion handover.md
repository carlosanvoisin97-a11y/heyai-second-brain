---
type: handover-companion
created: 2026-06-06
updated: 2026-06-06
status: pronto per consumo
tags: [system, second-brain, handover, harvest]
aliases: [Harvest Recon Worktree, Companion Handover Harvest]
source_session: "funny-shannon-c4101e (cc3ff06a) — sessione Code, read-only"
related: ["[[2026-06-06 - Handover a Second Brain Optimization Recap]]", "[[2026-06-06 - Roadmap Second Brain Code-era]]"]
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Harvest completato 9/6 (3 commit stranded recuperati), worktree potate in F7. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# Harvest Recon Worktree — companion all'handover

> **Cos'è:** estrazione **read-only** dei fatti vault-worthy intrappolati nelle worktree e **assenti da `main`**. Companion operativo dell'[[2026-06-06 - Handover a Second Brain Optimization Recap|Handover]] §8 (step "harvest prima di prune") e della [[2026-06-06 - Roadmap Second Brain Code-era|Roadmap]] F0/F2. Prodotto dalla sessione `funny-shannon` in corsia parallela sicura: **nessuna scrittura su `main`/git**, solo questo file.
>
> **Metodo:** per ogni worktree "sporca", confronto contenuto di ogni file modificato (M) vs la copia in `main`; "righe uniche" = presenti nel worktree, assenti in `main`. Comando di rigenerazione in §6.

---

## 0. Headline

- **Zero commit unici** in tutte le ~30 worktree (tutte `ahead=0` vs `main`): **il prune NON perde commit**. Il rischio è solo nei *working tree non committati*.
- **4 worktree sporche**; 1 (`funny-shannon`) è solo output recovery già duplicato in `main`. Le **3 con lavoro unico reale**: `wizardly-rhodes` (Angelini 5/6), `nervous-shannon` (NOT 1/6), `nice-cray` (NOT/Eye Cookies 4/6).
- I **file nuovi (`??`)** di queste worktree (report call, note performance) **sono già in `main`** → non serve harvestarli.
- Da harvestare = **le modifiche alle schede (M)**: fatti di call **propagati nel worktree ma mai arrivati a `main`**.
- ⚠️ **2 file in 3 versioni divergenti** (`Operation Transformation.md`, `Carmen Compare.md`): vanno **fusi cronologicamente**, mai sovrascritti (§3).

---

## 1. Mappa sintetica (worktree → scheda → cosa manca a `main`)

| Worktree | Scheda (M) | Righe uniche | Tema |
|---|---|---|---|
| `wizardly-rhodes-ed46ae` | `20…/Angelini Academy/_Angelini Academy.md` | 46 | Esito pitch finale 5/6 (soft-defer), 3 pillar, blocker gara |
| | `60 - People/Caterina Caboni.md` | 18 | Citazioni + pattern negoziale decisore |
| | `60 - People/Elena Chiti.md` | 8 | Impatto su FuturItaly (editoriale bloccato → 2027) + azioni |
| | `60 - People/Tiziana Carnicelli.md` | 3 | Gate decisionale a valle ("sentiamo Tiziana") |
| | `99 - System/Master Facts Sheet.md` | 4 | 🔴 Delta 5/6 esito soft-defer |
| | `99 - System/Open Questions.md` | 9 | Concorrente ignoto, economia FuturItaly, budget workshop, "Francesco" |
| | `CLAUDE.md` | 3 | §6 stato Angelini "pitch fatto (5/6)" |
| `nervous-shannon-a8f8b4` | `20…/NOT/Operation Transformation.md` | 19 | Call Carmen 1/6: referente ingestion, API BAT 0, visita BAT 5/6 |
| | `60 - People/Carmen Compare.md` | 3 | Call diretta Carlo↔Carmen 1/6 |
| `nice-cray-30e0f9` | `20…/NOT/Operation Transformation.md` | **49** | Kickoff 4/6: Germano referente tecnico, maschera unica, "I Love Ric" |
| | `20…/NOT/Eye Cookies.md` | 12 | Bisettimanale Eye Cookies 28/5, Microlog tracce, totem |
| | `20…/NoLoop/Wave 2/Crowd.md` | 6 | Stato test finale (Arianna): bug doppione su evento a invito |
| | `60 - People/Carmen Compare.md` | 3 | Call "NOT Allineamento" Carmen+Justin 1/6 |
| | `60 - People/Germano Marano.md` | 5 | Call OT bisettimanale 4/6, Germano referente tecnico NoLoop |

Paths worktree: `/Users/carlosanvoisin/claude/.claude/worktrees/<nome>/`.

---

## 2. Dettaglio fatti intrappolati (da propagare in `main`)

### 2.1 `wizardly-rhodes` — Pitch finale Angelini Academy 5/6 (il più importante)

Esito = **soft-defer**. Sintesi dei fatti (verbatim completi nelle schede del worktree):
- Presentata proposta a **3 pillar** (sito hub-funnel 5 percorsi × 3 livelli · laboratorio editoriale · …) + analisi + **SEO "regalata"**.
- 🔴 **Blocker**: gran parte dello scope (**restyling + social + editoriale/blog**) è **già aggiudicata a un fornitore concorrente** via gara comunicazione Angelini (feb→giu). Caterina protegge l'esito del procurement.
- **Apertura**: la **revisione dell'architettura** NON è nello scope del concorrente → è il pezzo su cui HeyAI può ancora entrare.
- **Defer**: nel 2026 al massimo un **workshop architettura** "se c'è budget"; **build slitta al 2027**.
- **Impatto FuturItaly** (scheda Elena): il **laboratorio editoriale** — gamba/margine FuturItaly — è bloccato fino a ~2027 → ricavo near-term a rischio. Azione Elena: **spacchettare la presentazione per fasi** (pre-workshop → fasi 1/2/3) + togliere la slide del tool LinkedIn.
- **Decisori**: Caterina operativa + **Tiziana Carnicelli** gate a valle. Nuovo nome da triagiare: **"Francesco"** (area ricerca Angelini).
- Citazione-chiave Caterina (parziale, troncata in recon): *"Noi abbiamo fatto una gara e il procurement ha giudicato un pacchetto a un fornitore che dentro contiene… la manutenzione edit[oriale] […]"* → verbatim in `60 - People/Caterina Caboni.md` del worktree.

### 2.2 `nervous-shannon` — Call NOT "Allineamento richieste tecniche" Carmen 1/6 (50 min)
- **Carmen confermata referente ingestion dati** per il team di sviluppo; hanno iniziato a lavorare sui dati.
- **Documento campi Form** confermato completo e invariato → utilizzabile per lo sviluppo.
- **Qualità storico**: vendite ancorate a codice univoco (affidabili sul totale; possibili errori su modello/colore/data).
- 🔴 **API BAT/PARD ancora a 0** — Justin non ha sbloccato nulla; nuova leva: NOT **in sede da BAT venerdì 5/6** + escalation Massi.
- Nuovo perimetro: **"I Love Ric"** pop-up (pilota).

### 2.3 `nice-cray` — Kickoff/bisettimanali NOT + Eye Cookies + Crowd 4/6 (49 righe su OT)
- **Operation Transformation kickoff 4/6**: **Germano confermato referente tecnico NoLoop**; approccio **maschera unica** (mappatura campi dei form delle 3 piattaforme App NOT); **"I Love Ric" chiuso 4/6** come attivazione (non nuovo progetto); molti task #p1 (form a Fed+Simone, follow-up Germano, prioritizzazione registrazione dati vs predittivo con Massi).
- **Eye Cookies**: istituita **bisettimanale** (gio 15:30, da 28/5); richiesta **set di tracce reali Microlog**; nota tecnica con domande su endpoint/UID; **totem** durevole vs scenografico brandizzabile.
- **Crowd**: test finale in corso (Arianna) — bug **scheda doppione** su evento a invito modificando nome/email; atteso **report completo test** → fine tuning → call finale ufficiale.

---

## 3. ⚠️ Avvisi di merge (NON sovrascrivere)

Questi file hanno **modifiche divergenti in più posti** → la propagazione deve **fondere**, in ordine cronologico, sotto `## Log` (CLAUDE.md §15 append-only):

1. **`20 - Projects/NOT/Operation Transformation.md`** — 3 versioni: `main` (sue M) + `nervous-shannon` (call 1/6, 19 righe) + `nice-cray` (kickoff 4/6, 49 righe). Vanno **tutte e tre** fuse: la 1/6 e la 4/6 sono **call diverse**, entrambe valide.
2. **`60 - People/Carmen Compare.md`** — `nervous-shannon` la descrive come *"Call diretta Carlo↔Carmen"*, `nice-cray` come *"NOT | Allineamento richieste tecniche (Carmen + Justin + Carlo)"*: **verificare se è la stessa call** (1/6) vista da due angoli o due eventi → riconciliare, non duplicare.
3. **`99 - System/Master Facts Sheet.md`**, **`99 - System/Open Questions.md`**, **`CLAUDE.md`** — `main` ha già sue M + `wizardly-rhodes` aggiunge il delta Angelini 5/6. Fondere a mano (sono file di sistema sensibili: numeri, regole).

---

## 4. Procedura di harvest raccomandata (prima del prune)

Per ciascuna scheda della tabella §1, in ordine:
1. **Apri la versione del worktree** (path §1) e la copia in `main`; identifica le righe uniche (recon §6).
2. **Propaga in `main`** in **append** sotto `## Log` / sezioni esistenti (mai rewrite; CLAUDE.md §15). Per i file di §3, **fusione cronologica** delle 2-3 versioni.
3. **Aggiorna `updated:`** nel frontmatter della scheda in `main`.
4. Solo **dopo** che tutte e 3 le worktree sono state harvestate → **prune sicuro** di `wizardly-rhodes`, `nervous-shannon`, `nice-cray` (e delle altre 27, già a 0 dirty / 0 ahead).
5. **`funny-shannon`**: il suo working tree (28 file `code-recap/`) è un **sottoinsieme già presente in `main`** (più completo lì) → nessun harvest, prune sicuro.

> Quick check pre-prune di ogni worktree: `git -C <wt> status --porcelain --untracked-files=all` deve risultare gestito (harvestato) prima di rimuoverla.

---

## 5. Fatti ad alto rischio → back-tracing avversariale (alimenta F2 / KB Solidity)

Da ri-verificare contro la trascrizione sorgente (priorità ai costosi se sbagliati):
- **Esito Angelini = soft-defer** + *"gara già aggiudicata a un concorrente"* → conferma con Carlo lo **stato reale del deal** (è il fatto che la Roadmap §134 segnalava già come critico).
- **Identità del fornitore concorrente** Angelini: **ignota** → da chiarire (dimensiona la concorrenza 2027).
- **Pricing Angelini**: nel Master Facts compare *"€4-5K opzione B pre-Q&A"*; la Roadmap §136 cita un working state **€48.500 / "offerta 4 pilastri"** flaggato come *proposta non applicata* → **due numeri diversi da riconciliare** con Carlo prima di consolidare.
- **API BAT/PARD = 0** e **"I Love Ric" = attivazione (non progetto)** → confermare stato post visita BAT 5/6.
- **Referenti tecnici NOT**: Carmen (ingestion) + Germano (tecnico NoLoop) — confermare che non si sovrappongano/contraddicano tra le schede.

---

## 6. Comandi di rigenerazione (read-only)

```bash
REAL=/Users/carlosanvoisin/claude
# Worktree sporche / con commit unici:
git -C "$REAL" worktree list --porcelain   # + ciclo status per ognuna
# Diff contenutistico worktree↔main (script usato qui):
node /tmp/harvest.js                        # wizardly-rhodes, nervous-shannon, nice-cray
# Per una singola scheda:
diff "$REAL/<path>" "$REAL/.claude/worktrees/<wt>/<path>"
```

---

*Fine companion. Read-only; questo è l'unico file scritto da questa sessione in questo passaggio (modifica additiva in `main`, da committare nel gruppo G4 dell'handover). Niente toccato su git/schede esistenti.*
