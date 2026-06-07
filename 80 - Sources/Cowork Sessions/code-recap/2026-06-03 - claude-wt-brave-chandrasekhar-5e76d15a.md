---
type: session-recap
source: claude-code
session_id: 5e76d15a
project_path: ~/claude/.claude/worktrees/brave-chandrasekhar-b2251f (vault worktree)
date_last_activity: 2026-06-03
size_mb: 2.3
status: vault-worthy
created: 2026-06-08
tags: [code-session, daily-index-2026-06-03]
---

# Recap Code session — claude-wt-brave-chandrasekhar (5e76d15a)

## Cosa è stato fatto
Sessione di preparazione finale gara **Angelini Academy** (sito + comunicazione integrata, cliente Angelini Industries via intermediario FuturItaly), pitch allora confermato per venerdì 5/6/2026. ~2h15m (13:25→15:40 UTC). Due filoni: (1) **riallineamento della scheda madre** rimasta indietro (deadline, stato, quotazione ferme all'8/5) + cattura del **dry-run pre-pitch slide-by-slide** svolto il 3/6 mattina (1h56m, 10:16–12:12, Teams, collegamento instabile) con la regia FuturItaly; (2) **lavoro sul pricing in Excel** (`Angelini_Academy_Pricing_FuturItaly_REV2_0306.xlsx` nei Downloads): applicate le decisioni di call (SEO €3.000, Analytics €2.000), aggiunta colonna "prezzo cliente (10% incl.)" per voce nello sheet interno e creato uno sheet "bozza vista cliente" pulito. L'agente in sessione ha già scritto live sulle schede vault (Log + frontmatter + scheda persona) — vedi nota di flag.

## Progetti / aree vault toccate
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — scheda madre gara
- [[60 - People/Daniele Caporale]] — Communication strategist FuturItaly (CC su tutto il thread)
- [[60 - People/Elena Chiti]] — Key Account FuturItaly (regia pitch)
- [[30 - Areas/Area - Performance & Coaching/2026-06-03 - Carlo Performance — Dry run pre-Pitch Angelini]] — nota performance (creata in sessione)
- [[99 - System/Master Facts Sheet]] — riga pricing Angelini (riga 147) — NON toccata in sessione, vedi proposta sotto

## Decisioni esplicite
- **Pricing voci tecniche fissato in call**: SEO + LLM a €3.000, Analytics a €2.000; sito, community e area riservata invariati (working-state di sessione).
- **Due viste separate nel file pricing**: vista interna con scorporo HeyAI/FuturItaly + colonna prezzo cliente; bozza vista cliente con solo Voce|Prezzo, zero scorporo (scheletro futura slide prezzi).
- **Fee +10% FuturItaly applicata solo sulle voci tecniche** per traghettare il markup; arrotondamento/distribuzione finale del markup demandati a Elena (è il suo).
- Deck: chiudere versione **short** (master completo in annex); applicare verbatim titoli/frasi dal feedback Elena; foto reale Casa Angelini al posto del render in landing.

## Numeri / fatti vault-worthy
> ⚠️ Numeri di **working-state** al 3/6, PRIMA del pitch 5/6. La scheda madre e il Master Facts (riga 147) riportano valori diversi consolidati separatamente (€49.500 core, regola "l'Excel guida i prezzi", conferma Carlo 2/6). NON riconciliati qui — vedi proposta.
- Floor core HeyAI di sessione: **€47.500** (sito €22.000 + area riservata semplice €5.500 + community €15.000 + analytics €2.000 + SEO €3.000).
- Prezzo cliente core con +10% incluso (÷0,9): **€52.777,78** (numeri non tondi per voce: €24.444,44 / €6.111,11 / €16.666,67 / €2.222,22 / €3.333,33).
- B25 ripulito da €10.000 (stale) a €7.000.
- Dry-run: durata 1h56m, 10:16–12:12, Teams.

## Output prodotti (file editati/creati)
- `~/Downloads/Angelini_Academy_Pricing_FuturItaly_REV2_0306.xlsx` — REV2 pricing (fuori vault)
- `20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy.md` — frontmatter (deadline 31/5→5/6, next_touchpoint, deadline_history) + banner §Stato + banner §Quotazione "SUPERATA" + Log 2/6 e 3/6
- `30 - Areas/Area - Performance & Coaching/2026-06-03 - Carlo Performance — Dry run pre-Pitch Angelini.md` — nuova nota performance
- `60 - People/Daniele Caporale.md`, `60 - People/Elena Chiti.md` — append Log/citazioni dry-run
- file di sola lettura/contesto: handover 20/5, mappa riorg 29/5, audit pricing 27/5, registro validazione 31/5

## Task aperti / prossimi passi
- Riconciliare il pricing di sessione (€47.500 floor / €52.778 cliente) con la riga Master Facts 147 (€49.500 core) — **giudizio Carlo** (vedi proposta).
- Decidere se aggiornare il riferimento file pricing nel vault da `REV_3giu` a `REV2_0306`.
- Lane successive: regia del pitch vs lane sito.
- Arrotondamento/distribuzione finale markup +10% lato Elena prima dell'invio cliente.

## Schede vault da aggiornare
- **Applicato in automatico (append-only sicuro)**: nessuno (deviazione richiesta dall'orchestratore per questo run di recovery — niente cascata, rischio race; inoltre l'agente in-sessione aveva già scritto live sulle schede il 3/6).
- **Proposta da confermare (NON applicata)**:
  - [[99 - System/Master Facts Sheet]] — PROPOSTA: drift pricing Angelini — riga 147 dice €49.500 core; questa sessione lavora su floor €47.500 / cliente €52.778 con SEO €3.000 + Analytics €2.000. Verificare quale set è quello finale (possibile che la riga 147 sia un set precedente o un perimetro diverso) (richiede conferma Carlo).
  - [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — PROPOSTA: idem, allineare i numeri di quotazione al set finale una volta deciso (richiede conferma Carlo). Nota: post-pitch 5/6 il perimetro è cambiato (soft-defer, vedi Master Facts riga 343) → il pricing va comunque re-dimensionato a fasi, non inventato.

## Citazioni testuali
- Daniele Caporale (dry-run 3/6): *"non è questione di qualità [il vostro lavoro è ottimo], ma come succede in tanti campi non è quello che decide"* — segnale che i fattori politici pesano più della qualità tecnica.
- Daniele Caporale: *"l'esposizione è una cosa, la completezza del documento un'altra"* — la spiegazione di cosa fa il sito va data mentre lo si mostra.

## Note di flag
**Status vault-worthy**: sessione densa di decisioni di pricing + cattura di una call reale (dry-run) con citazioni strategiche e modifiche sostanziali alla scheda madre. **cwd = worktree del vault** (`~/claude/.claude/worktrees/brave-chandrasekhar-b2251f`), quindi sessione meta/vault, non di codice prodotto. **mtime JSONL 21:37 vs ultimo timestamp interno 15:40 UTC (17:40 local)** — disallineamento normale (file riscritto a fine sessione). **§13 applicato**: gli edit in-sessione citavano un fornitore HeyAI (sviluppo) tra i presenti a fine dry-run; il nome è stato **omesso** da questo recap. Lo split "di cui HeyAI/FuturItaly" del pricing vive solo negli sheet interni; il tab "bozza vista cliente" ne è pulito.
