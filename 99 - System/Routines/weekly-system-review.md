---
name: weekly-system-review
description: Meta-loop F6 — weekly review DEL SISTEMA second-brain (non dei progetti): anomalie della settimana + raccomandazioni Insight → prep-doc in 00 - Inbox. Routine cloud, sabato ~18:30 CEST.
---

# weekly-system-review — la review del sistema stesso (F6, creata 10/6/2026)

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Esegui la **weekly review del SISTEMA second-brain** — non dei progetti cliente (quella è `weekly-review-interactive`). Oggetto: come ha funzionato il sistema questa settimana e dove sta degradando.

## Razionale

I 4 audit granulari (links, moc, consistency, digest) vedono ciascuno il proprio pezzo. Nessuno risponde alla domanda PM: "il sistema questa settimana ha retto? dove si sta accumulando debito?". Questa routine aggrega i segnali della settimana in un prep-doc unico che Carlo legge nel weekend, accanto alla weekly review progetti.

## Cosa puoi fare

- Leggere (Read/Glob/Grep/Bash read-only) qualsiasi file del repo clonato.
- `git log` per analizzare i commit della settimana.
- Scrivere UN solo file nuovo: `00 - Inbox/YYYY-MM-DD - Weekly System Review.md` (data = oggi).

## Cosa NON puoi fare mai

- Mai modificare schede, numeri, scheduled task o routine — solo il prep-doc.
- Mai duplicare il dettaglio degli audit dedicati: linka, non copiare.
- Niente RemoteTrigger/list_scheduled_tasks: NON disponibili in cloud — i dati runtime li leggi dagli output file degli audit (System Consistency Audit, Digest Log).

## Algoritmo

**Step 1 — Battito della settimana** (ultimi 7 giorni):
- `10 - Daily Notes/`: quante daily note prodotte vs attese (lun-ven)? Gap = digest cloud fallito → segnala con data.
- `99 - System/Digest Log.md`: run falliti/parziali/alert M365.
- `git log --since="7 days ago" --oneline`: volume commit per tipo (auto-sync Obsidian vs routine cloud vs sessioni Code) — anomalie evidenti (giorni a zero, esplosioni).

**Step 2 — Salute strutturale** (dagli output file, senza ri-eseguire gli audit):
- `99 - System/Vault Link Audit.md`: ultimo K/J + trend (cresce → debito).
- `99 - System/MOC Refresh Log.md`: ultima entry — flag aperti non triagiati.
- `99 - System/System Consistency Audit.md`: drift 🔴/🟡 aperti.
- `80 - Sources/Cowork Sessions/code-recap/`: ci sono recap per i giorni lavorati della settimana? Buchi = `code-sessions-index` non girato.

**Step 3 — Debito e attriti**:
- `00 - Inbox/`: file più vecchi di 14 giorni mai processati (staging `_DA_DOWNLOADS_*`/`_import-*` esclusi: già flaggati altrove, citarli solo come reminder con conteggio).
- `99 - System/Open Questions.md`: domande aperte senza movimento da >2 settimane.
- `99 - System/Open Tasks.md`: task `(stale)` o con scadenze superate.

**Step 4 — Lente Insight** (massimo 2 raccomandazioni a settimana, a rotazione, SOLO se i dati della settimana le supportano):
1. *Pattern-scan "vault generativo"*: c'è conoscenza emersa questa settimana che merita una atomic note in `40 - Resources/Concetti/`?
2. *MOC tematici*: un cluster di file cresciuto abbastanza da meritare un MOC dedicato?
3. *Progressive Summarization L4*: una scheda molto consultata/modificata che merita un executive summary in testa?
4. *Resurfacing*: una scheda/decisione vecchia tornata rilevante per gli eventi della settimana?
5. *Tagging concettuale*: tag emergenti usati in modo incoerente?
6. *Distill-before-archive*: file in scadenza verso l'archive che contengono lezioni non ancora distillate?

**Step 5 — Scrivi il prep-doc** `00 - Inbox/YYYY-MM-DD - Weekly System Review.md`:

```markdown
---
type: system-review
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [system, weekly-review, F6]
---

# 🩺 Weekly System Review — settimana DD/MM–DD/MM

## Verdetto in 3 righe
(il sistema ha retto? cosa si sta accumulando? l'unica cosa da fare questa settimana?)

## Battito
- Daily note: N/5 · Digest: … · Commit: … (anomalie: …)

## Salute strutturale
- Links: K=… (trend …) · MOC: … flag aperti · Consistency: 🔴 … / 🟡 … · code-recap: …

## Debito e attriti
- (bullet asciutti, ogni voce con wikilink al file)

## 💡 Raccomandazioni Insight (max 2)
- (solo se supportate dai dati; altrimenti "nessuna questa settimana")

## Proposta azioni (checkbox per Carlo — NON eseguite)
- [ ] …
```

Tono PM, asciutto, italiano. Niente sezione vuota: ometti ciò che non ha contenuto. Se la settimana è pulita, il report è CORTO (verdetto + battito + "nessun debito nuovo").

## ⚙️ Push finale (routine cloud)
Al termine: (1) committa le modifiche; (2) esegui **`git pull --rebase origin main`** (un altro writer può aver pushato durante la run: senza pull il push viene rifiutato e il lavoro muore nel clone); (3) pusha **direttamente sul branch `main`** (`git push origin HEAD:main`); (4) verifica con `git status --porcelain` che il working tree sia PULITO — se restano modifiche, committale e ripeti (2)-(3): nulla deve restare non pushato, altrimenti finisce sull'outcome-branch `claude/*` del trigger (causa del leak link-checker 10/6). **NON** creare un branch separato né aprire una PR — il vault deve aggiornarsi su `main`. _(sequenza pull→push→clean, patch 10/6)_
