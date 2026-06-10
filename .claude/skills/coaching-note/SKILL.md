---
name: coaching-note
description: Post-mortem della performance di Carlo in una call — voto con decimale, episodi con citazioni verbatim, tabella trend vs call precedenti, lezioni operative → file in 30 - Areas/Area - Performance & Coaching/. Usa quando Carlo chiede "come sono andato", "performance della call", "post-mortem", "coaching note", "valuta la mia call", o dopo transcript-processing se Carlo era tra i partecipanti e chiede anche l'analisi di conduzione. Standardizzata 10/6/2026 dai 14 post-mortem reali di mag-giu.
---

# coaching-note — il post-mortem delle call di Carlo

La performance è SEPARATA dalla cascata fatti (§15.bis, skill `transcript-processing`): qui si valuta COME Carlo ha condotto, non COSA è stato deciso. Output: un file in `30 - Areas/Area - Performance & Coaching/`. Le due skill spesso girano sulla stessa trascrizione, in sequenza: prima i fatti nelle schede, poi la performance qui.

## Prima di scrivere (obbligatorio)

1. **Leggere le review precedenti** nell'Area (ordinate per data nel filename): minimo le ultime 2-3, ma se i pattern tracciati citano call più vecchie, leggere anche quelle — il valore del formato è il TREND, non il singolo voto. Senza memoria storica la tabella "pattern continuità" esce inventata.
2. Leggere le schede persona dei partecipanti (`60 - People/`) per pattern di negoziazione e sensibilità relazionali.
3. Se la trascrizione è parziale, dichiararlo nel frontmatter e nel caveat di apertura — mai valutare ciò che non è nel testo. Idem per difetti della trascrizione (es. due persone sullo stesso microfono, attribution incerte): dichiararli nel caveat e non costruirci diagnosi sopra.

## File e frontmatter

Nome: `YYYY-MM-DD - Carlo Performance — <Evento>.md` (em-dash come separatore, niente emoji nel filename, eventuale interlocutore tra parentesi o `#N` se call ricorrente). Frontmatter:

```yaml
type: performance-review
date: YYYY-MM-DD
subject: Carlo Sanvoisin
context: tipo call, partecipanti, durata, mezzo
related_project: wikilink alla scheda progetto, tra doppie virgolette
previous_review: wikilink alla review precedente, tra doppie virgolette
source: trascrizione integrale|parziale + provenienza
voto_sintetico: X,X/10
```

## Struttura (l'ordine dei 14 esempi reali)

1. **Apertura citazionale** (blocco `>`) — caveat sulla trascrizione (amplifica i difetti) + contesto della call.
2. **Punteggio sintetico** — tabella `Dimensione · Voto · Δ vs call precedente · Commento`, 5-7 dimensioni (conduzione/relazione, tempo parlato, gestione obiezioni, disciplina di scope, …), riga finale in bold "Risultato netto". Scegliere dimensioni pertinenti al tipo di call ma mantenere dove possibile quelle delle review precedenti, così il Δ resta confrontabile; se il tipo di call impone un paniere nuovo, dichiararlo. Voto SEMPRE con decimale (6,8 non 7): la precisione segnala che il confronto nel tempo è reale. Ancoraggio della scala (dal corpus reale, range 6,5-8): **6** = errori che costano margine o relazione; **7** = call solida con 1-2 pattern da limare; **8** = eccellente, pattern consolidati e zero regressioni.
3. **Sezioni numerate** (`## 1.`, `## 2.`, …) — diagnosi per episodi (`### Episodio A/B/…`): citazione verbatim con timestamp e attribution, poi UNA riga di diagnosi ("Andato bene." / "Da limare." + perché).
4. **Pattern continuità** — tabella `Pattern · Note precedenti (data) · Questa call · Trend` con 🟢 risolto / 🟡 attenuato / 🔴 persistente. Ogni pattern citato nelle review precedenti va aggiornato, non lasciato cadere.
5. **Lezioni operative** — 2-3, formulazione imperativa, una frase-core ciascuna, applicabilità immediata (la regola, non la narrativa).
6. **Sintesi finale** — giudizio complessivo in una frase + "due/tre fronti aperti" + target quantitativi per la prossima call (es. tempo parlato ≤40%, almeno 2 domande diagnostiche).

## Regole di tono

- Carlo in terza persona, registro diagnostico, no fronzoli ("Diagnosi.", "Andato bene.", "Da limare.").
- Mostrare il dito anche sui difetti scomodi: Carlo preferisce essere contraddetto qui che imbarazzato in call cliente (§2 CLAUDE.md). Mai voto di cortesia.
- Zero emoji nel body (solo i 🟢🟡🔴 della tabella trend). Quantificare il costo degli errori quando possibile ("costo della rivelazione: 2-4K di margine").
- I fatti vault-worthy emersi (decisioni, numeri, task) NON vivono qui: cascata §15.bis nelle schede progetto/persona. Qui solo la performance.

Riferimenti vivi: hub `30 - Areas/Area - Performance & Coaching/_Area - Performance & Coaching.md` · esempi top: `2026-06-05 - Carlo Performance — Pitch Finale Angelini Academy.md` (trascrizione parziale con caveat), `2026-06-01 - Carlo Performance — Call NOT Allineamento richieste tecniche (Carmen).md` (gestione area grigia), `2026-05-05 - Carlo Performance — Call Pasquali.md` (negoziazione fornitore).
