---
type: session-recap
source: claude-code
session_id: fcb238ed
project_path: /Users/carlosanvoisin/claude (main vault, branch main)
date_last_activity: 2026-05-31
size_mb: 6.7
status: vault-worthy
created: 2026-05-31
tags: [code-session, daily-index-2026-05-31, angelini-academy, pitch-deck]
---

# Recap Code session — claude-main (fcb238ed)

## Cosa è stato fatto

Sessione lunga (~25h, 30/5 sera → 31/5 sera, 687 messaggi, 49 Edit + 19 Write + 27 Read + 48 Bash) di **rifondazione e unificazione del deck pitch Angelini Academy** per la presentazione cliente del 31/5. Trigger iniziale di Carlo: *"fai recap completo di tutti le sessioni, i punti aperti, le anomalie, gli insight, tutti parametri utili a ricostruire cosa è stato fatto e come ottimizzare i prossimi passi e non perdersi nulla"*. Da lì la sessione si è evoluta in una taglia-e-cuci tra **47 file PPTX** ridotti a ~9 contenuti unici per md5, sorgenti HTML (Linea A `~/Downloads/deck-build/atto1.html|atto2.html` 28 slide a immagini · Linea B `code/angelini-pitch-deck/deck.js` 18 slide a documento), documento testuale v3.3 e v4 asciugato, report audit 30/5 e le 3 sessioni 28-29/5 `presentazioni-strategiche`. Originali blindati in `~/Desktop/_FREEZE-angelini-pitch-20260531/` con manifest md5. Output finale: **Deck UNIFICATO 36 slide** (29 core su Linea A + 7 appendice "non perdere nulla"), file `Angelini_Academy_Pitch_UNIFICATO_20260531.pptx`. Validazione iterativa delle "decisioni in forse" con Carlo (Galileo agente, hub eventi linea A, mappa competitor recente, pricing working state, V4 doc di riferimento). Pattern audit ricorrente: Carlo flagga *"queste tue mancanze e perdite di info mi fanno mettere in dubbio il tuo processo, dovresti rileggere tutte le sessioni pertinenti da capo e verificare che decisioni strategiche in forse che non sai distinguere se siano validate / recenti o meno piuttosto che scartarle dovresti rimettere a me la validazione"* (31/5 13:45) → ribaltamento del processo: tutto ciò che è incerto va in **Registro Validazione**, decisione a Carlo.

## Progetti / aree vault toccate

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] — scheda hub (mappa primaria)
- [[20 - Projects/Futuritaly/Angelini Academy/2026-05-31 - Deck Unificato - Riferimento Decisioni|2026-05-31 - Deck Unificato - Riferimento Decisioni]] (creato in-sessione)
- [[20 - Projects/Futuritaly/Angelini Academy/2026-05-31 - REGISTRO VALIDAZIONE Decisioni in Forse|2026-05-31 - REGISTRO VALIDAZIONE Decisioni in Forse]] (creato in-sessione)
- [[00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato|2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato]] (edit per allineare a deck unificato)

## Decisioni esplicite

- **Galileo = UN agente AI ipotetico con 4 modalità**, **senza vendor citato** (rimossi iGenius/Cineca — erano errati, conferma Carlo: *"Galileo è solamente un agente ipotetico della proposta, assolutamente non è stato... non è basato su Italia di Cineca"*).
- **Linea A (deck-copione 28 slide a immagini)** scelta come base del Deck UNIFICATO; **Linea B (deck-documento 18 slide)** usata per innesti in appendice.
- **Hub eventi confermato dentro il pitch** (Carlo: *"confermo linea A. hub eventi dentro il pitch"*).
- **Framing site-first** ribadito; sostituzione "4 agenti" → "1 agente, 4 modalità".
- **Slide del NO** mantenuta a calibrazione (appendice nativa editabile).
- **Doc V4 asciugato** = documento testuale di riferimento per discordanze (Carlo 31/5 19:55: *"verifichi il documento testuale versione quattro che era quello più asciugato, più riassuntivo"*).
- **Appendice "non perdere nulla"** strutturata in 7 slide: 3 native editabili (divisore + 8 decisioni di fatto da chiudere + indice) + 4 slide Linea B recuperate (Slide del NO, sinottico OS/SAT, 14 atenei FuturItaly+5 bandi, KPI per-Voce).

## Numeri / fatti vault-worthy

- **Pricing working state €48.500** ("quarantotto e mezzo", Carlo 31/5 18:32) — PROPOSTA da confermare, NON applicato a Master Facts. Drift potenziale rispetto a €49.500 citato come esempio nella SKILL del task. _Da risolvere con Carlo prima di consolidare in Master Facts._
- **Numeri audit-verificati assorbiti nel deck**: "€43,9 mld 2,5% PIL" (skill mismatch), pensioni "verso il 2040", "44 mld entro 2040", "1.200 /anno" (era "1.200 cumulativi" — corretto).
- **Deck UNIFICATO = 36 slide** (29 core + 7 appendice).
- **Fedeltà render Chrome→pdftoppm**: RMSE 0,01 (frame nuovi pixel-coerenti con esistenti).
- **Pipeline di lavoro fuori vault**: `~/Downloads/deck-build-UNIFICATO-20260531/` (sorgenti HTML, build script, frames).

## Output prodotti (file editati/creati)

**File vault (4)**:
- `20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy.md` (edit — voce `## Log` 2026-05-31 "Deck pitch UNIFICATO prodotto")
- `20 - Projects/Futuritaly/Angelini Academy/2026-05-31 - Deck Unificato - Riferimento Decisioni.md` (nuovo)
- `20 - Projects/Futuritaly/Angelini Academy/2026-05-31 - REGISTRO VALIDAZIONE Decisioni in Forse.md` (nuovo)
- `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` (edit, allineato a deck unificato)

**File extra-vault**:
- `~/Desktop/Angelini_Academy_Pitch_UNIFICATO_20260531.pptx` (output finale)
- `~/Desktop/_FREEZE-angelini-pitch-20260531/_MANIFEST.txt` (md5 originali blindati)
- `~/Downloads/deck-build-UNIFICATO-20260531/atto1.html` + `atto2.html` + `build-finale.js` + `build-pptx.js`
- `~/Downloads/deck-build-UNIFICATO-20260531/frames-uni/*.jpg` (frame export, ~13 file editati)

## Task aperti / prossimi passi

- [ ] Carlo — Validare ogni voce del [[20 - Projects/Futuritaly/Angelini Academy/2026-05-31 - REGISTRO VALIDAZIONE Decisioni in Forse|Registro Validazione]] (decisione su lui, output sessione esplicito).
- [ ] Carlo — Confermare **pricing €48.500** definitivo prima della consegna cliente (eventuale aggiornamento Master Facts).
- [ ] Carlo — Aggiungere nel deck unificato le slide identificate da audit gap ("offerta quattro pilastri" e altri punti emersi dalla sessione — Carlo 31/5 19:24: *"Spiegami meglio cosa intendi per offerta quattro pilastri e altri punti che secondo te quindi non sono stati in qualche maniera recuperati a seguito di questo tuo audit"*).
- [ ] Carlo — Verificare doc testuale **V4** vs deck unificato per discordanze (compito assegnato in coda sessione 19:55).
- Buchi noti segnalati: case FuturItaly mancante, vecchia S8 competitor/UX recuperabile per Q&A.

## Schede vault da aggiornare

- **Applicato in automatico (append-only sicuro)**:
  - [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] — appendato in `## Log`: nuovo block `### 2026-05-31 — Code sessions giornaliere (cron code-sessions-index 20:35)` con riferimento alla voce manuale "Deck pitch UNIFICATO" e sintesi sessione fcb238ed. Anche link in `## Sessioni Cowork correlate` (voce 2026-05-31 + bullet a questo recap). `updated:` rinfrescato.

- **Proposta da confermare (NON applicata)**:
  - [[99 - System/Master Facts Sheet]] — **PROPOSTA**: pricing Angelini Academy working state **€48.500** (Carlo 31/5 18:32 "quarantotto e mezzo"). NON applicato — richiede conferma Carlo che sia il pricing definitivo per la consegna cliente, non un valore working ulteriormente in bozza. Drift potenziale vs €49.500 citato a sistema nella SKILL del task.
  - [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] — **PROPOSTA**: aggiornare sezione `## 💰 Quotazione` con €48.500 se confermato. NON applicato (numero economico, richiede giudizio Carlo).
  - **PROPOSTA**: voce in [[99 - System/Open Questions]] per il gap "offerta quattro pilastri / altri punti audit" emersa 19:24 — Carlo ha chiesto di spiegarli per decidere se inserirli nel deck. Non applicato (cambio status/priority su file di sistema).

## Citazioni testuali

- **Carlo Sanvoisin** (31/5 13:45) — *"queste tue mancanze e perdite di info mi fanno mettere in dubbio il tuo processo, dovresti rileggere tutte le sessioni pertinenti da capo e verificare che decisioni strategiche in forse che non sai distinguere se siano validate / recenti o meno piuttosto che scartarle dovresti rimettere a me la validazione"* — feedback strutturale sul processo agentico: l'incertezza non è motivo per scartare, è motivo per chiedere validazione. Pattern da preservare (decisione Carlo > inferenza agente).
- **Carlo Sanvoisin** (30/5 23:48) — *"Galileo è solamente un agente ipotetico della proposta, assolutamente non è stato... non è basato su Italia di Cineca. Poi, sì, confermo linea A. hub eventi dentro il pitch. Prendi i numeri più recenti e i dati più recenti dalle... dagli audit più veritieri e aggiornati che sono stati fatti."* — fissazione decisioni base del deck.
- **Carlo Sanvoisin** (30/5 23:58) — *"Crea il nuovo deck senza toccare quelli che abbiamo archiviato e applica tutte le correzioni tenendo in appendice tutto ciò di cui non sei sicuro. Ricordati che abbiamo cambiato più volte direzione nella strategia all'interno delle altre sessioni, quindi qualcosa potrebbe essere stato soprascritto, qualcosa potrebbe stare nel documento testuale."* — direttiva di processo: append-only su archivi, tutto l'incerto va in appendice.

## Note di flag

- Status **vault-worthy**: sessione di alto valore strategico (pitch P2, deadline cliente 31/5), output multipli su vault (2 file nuovi + 2 edit), decisioni strategiche esplicite con citazioni testuali utilizzabili.
- Sessione **già attiva al momento del run** del task (ultimo timestamp 31/5 19:59 UTC, mtime JSONL 20:57 local). Il recap riflette lo stato fino agli ultimi prompt visibili; eventuali messaggi successivi non sono catturati.
- **Pricing drift**: la SKILL del task `code-sessions-index` cita "€48.500 vs €49.500" come esempio di drift working-state — la sessione conferma €48.500 come ultimo working state ma NON si applica automaticamente (cascata via di mezzo: numeri = proposta).
- Cwd `/Users/carlosanvoisin/claude` non rientrava nella convenzione naming standard (di solito worktree `claude-wt-*`); ho usato `claude-main` per il filename.
- **Riservatezza (§13 CLAUDE.md)**: nessun nome fornitore HeyAI esposto nel recap.
