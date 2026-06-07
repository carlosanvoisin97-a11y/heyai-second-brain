---
type: session-recap
source: claude-code
session_id: 499af1f9
project_path: ~/claude (worktree sweet-dijkstra-437541) — meta/vault
date_last_activity: 2026-05-28
size_mb: 1.5
status: vault-worthy
created: 2026-06-08
tags: [code-session, daily-index-2026-05-28]
---

# Recap Code session — claude-wt-sweet-dijkstra (499af1f9)

## Cosa è stato fatto
Sessione densa multi-topic (1h49m, due compaction interne) avviata da Carlo con 9 file allegati e la domanda "sei in grado di ascoltare trascrivere e catalogare?". Validato end-to-end un **pipeline locale di trascrizione audio** (whisper.cpp large-v3, offline) su 8 note vocali/video WhatsApp di Simone e Federico (fornitore HeyAI) del 25-28/5, poi catalogate nel vault via protocollo §15.bis. Risolta la routing ambiguity sulle note 03/04 (Carlo: "federico tema crowd"). Prodotta una bozza email cliente per **Arianna** (tester Crowd lato NoLoop) sui suoi 2 punti (duplicati su modifica nome/email + campi precompilati non modificabili), §13-compliant. Chiusura: lista PM dei punti aperti emersi dai vari audio. La sessione ha già eseguito in autonomia la cascata append-only sulle schede (vedi sotto).

## Progetti / aree vault toccate
- `~/claude` worktree → meta/vault + cluster NoLoop Wave 2 (Crowd, Minutes), NOT (Eye Cookies), Eldis, fornitori.
- [[20 - Projects/NoLoop/Wave 2/Crowd]] · [[20 - Projects/NoLoop/Wave 2/Minutes]] · [[20 - Projects/NOT/Eye Cookies]] · [[20 - Projects/Eldis/Eldis Compilatore]] · [[60 - People/Federico Saladino (Soolutions)]] · [[60 - People/Simone Montanari (Soolutions)]] · [[20 - Projects/NoLoop/Wave 2/LeadMe]] (letta, esclusa).

## Decisioni esplicite
- Engine trascrizione = **whisper.cpp large-v3** (scelto da Carlo via AskUserQuestion; offline per §13 — l'audio cliente non lascia la macchina).
- Note 03/04 = mittente **Federico**, progetto **Crowd** (confermato da Carlo: "federico tema crowd").
- Sequenza test Crowd: NON chiudere il ciclo test finché Federico non rilascia la delivery finale, poi concedere più giorni e fixare a valle (da nota vocale Federico 27/5).

## Numeri / fatti vault-worthy
- Segnale **rinegoziazione AL RIALZO** su Eye Cookies (nota Federico 28/5): "voglio più soldi… non sono per niente d'accordo". Contesto: €75K Full Ownership, contratto mai prodotto formalmente (solo approvazione email + acconto). Numero NON modificato — resta come da Master Facts.
- Offensiva prezzo trasversale Federico: stessa nota chiede più soldi per Eye Cookies *e* dice "devi pagare dei soldi" per gli enhancement Minutes desktop → nuovo scope a pagamento (automatch partecipanti, "Minutes smart").
- Nessun nuovo numero economico ufficiale introdotto.

## Output prodotti (file editati/creati)
Vault (cascata già applicata in sessione):
- `00 - Inbox/2026-05-28 - Trascrizioni vocali WhatsApp (batch 25-28 mag).md` (CREATO — 8 trascrizioni raw + mapping cronologico + doc pipeline)
- `20 - Projects/NoLoop/Wave 2/Crowd.md` (Log 27/5 + 29/5, task #p1, frontmatter→29/5)
- `20 - Projects/NoLoop/Wave 2/Minutes.md` (Log 28/5 desktop+auto-record, 2 task, frontmatter→28/5)
- `20 - Projects/NOT/Eye Cookies.md` (Log 28/5 segnale prezzo)
- `60 - People/Federico Saladino (Soolutions).md` (citazione + pattern delivery-prima-del-test)
- `60 - People/Simone Montanari (Soolutions).md` (Log 25/5 consegna desktop Minutes)

Fuori vault (pipeline/memory):
- `~/whisper-job/01-08.txt` + `.wav` + `mapping.txt`
- `~/.claude/.../memory/reference-transcription-pipeline.md` + `MEMORY.md` (CREATI — doc pipeline riusabile)

## Task aperti / prossimi passi
- [Carlo] Beta-test app desktop Minutes su macchina "vergine" (auth via env dev/test provata solo in dev mode) + registrare video tutorial installazione.
- [Carlo] Decidere se disattivare "chiedi conferma prima di registrare" (auto-record default Minutes).
- [Carlo] Filtrare/strutturare i bug report Crowd prima di girarli al team (lamentela Federico).
- [Carlo] Girare a Simone eventuali novità da Eldis (richiesta nota 02).
- [monitor] Enhancements Minutes (automatch partecipanti) = scope a pagamento → serve perimetro/quotazione, non darlo per incluso.
- [monitor] Delivery finale Crowd in corso (deadline 27/5 già passata) → allineare comunicazione Arianna/Lorena/David alla sequenza decisa.
- [verifica] Simone rientrato 100% (26/5) + sync previsto 27/5 — date passate, controllare esito.
- [decisione Carlo] Email Arianna: tenere il team in CC come negli altri thread Crowd o rispondere 1:1 (lasciata a Carlo).

## Schede vault da aggiornare
- **Applicato in automatico (append-only) — già fatto DENTRO la sessione, NON da questo recap:** la sessione 499af1f9 ha già scritto i Log/task append-only su [[20 - Projects/NoLoop/Wave 2/Crowd]], [[20 - Projects/NoLoop/Wave 2/Minutes]], [[20 - Projects/NOT/Eye Cookies]], [[60 - People/Federico Saladino (Soolutions)]], [[60 - People/Simone Montanari (Soolutions)]] e creato la nota inbox trascrizioni. Questo recap NON ri-appende nulla (evita doppioni — deviazione no-cascata).
- **Proposta da confermare (NON applicata):**
  - [[20 - Projects/NOT/Eye Cookies]] — PROPOSTA: valutare postura su rinegoziazione prezzo al rialzo Federico (oggi €75K, contratto mai prodotto). Richiede giudizio Carlo, nessun numero da scrivere finché non c'è richiesta formale.
  - [[20 - Projects/NoLoop/Wave 2/Minutes]] — PROPOSTA: enhancements/automatch = nuovo scope a pagamento → quotazione da definire (numero TBD).
  - Attribuzione mittenti note vocali (01/02=Simone, 05-08=Federico) resta **inferita dal contenuto**, non certa: solo Carlo può confermarla in via definitiva.

## Citazioni testuali
- Federico (nota 05, 28/5): "io voglio più soldi per iCookie comunque… non sono per niente d'accordo… ma te devi pagare dei soldi" (enhancement Minutes).
- Federico (nota 04, 27/5, Crowd): "diamogli altri giorni… inutile arrabattare la chiusura finché non faccio questa delivery finale… se c'è qualcosa che ci siamo persi te lo fixo io".
- Carlo (chat): "federico tema crowd" (risoluzione routing note 03/04).

## Note di flag
Status **vault-worthy**: la sessione contiene fatti commerciali (segnale prezzo Eye Cookies/Minutes), un nuovo deliverable cliente (email Arianna), e ha già modificato 5 schede + creato 1 nota inbox. Anomalie: (1) lavoro a cavallo di due date interne — testo cita 28/5 e 29/5, ma timestamp/mtime del JSONL sono tutti 28/5 (20:40→22:29 UTC); filename recap usa la data mtime 2026-05-28 per coerenza con lo schema. (2) La sessione ha già fatto la cascata vault completa (non solo proposta): questo recap si limita a mapparla, per deviazione esplicita anti-race. (3) §13 rispettato: i nomi fornitori compaiono qui solo perché recap interno; nella bozza email cliente sono sostituiti con "team di sviluppo". (4) Due compaction interne — recap basato su summary + ultimi messaggi assistant, non sul dump integrale.
