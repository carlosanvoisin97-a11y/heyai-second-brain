---
type: proposal
status: da-approvare
created: 2026-06-11
updated: 2026-06-11
tags: [system, pkm, pilota]
---

# 🧪 Pilota PKM — proposta tagging concettuale + 2 L4 differite

> Pilota eseguito 11/6: **8/10 sintesi L4 applicate** alle note calde (callout in testa, etichettato "vista derivata"). Eye Cookies e Operation Transformation DIFFERITE (file in lavorazione non committata in sessione parallela — regola single-writer §9ter): le loro L4 sono in coda qui sotto, da applicare a commit avvenuto. Il tagging è SOLO PROPOSTA: si applica con OK di Carlo.

## L4 differite (applicare dopo il commit della sessione parallela)

### 20 - Projects/NOT/Operation Transformation.md
- Digitalizzazione NOT (logistica+vendite, cliente finale BAT) da €109.000: sviluppo in corso, contratto emesso mai controfirmato da Donzelli, acconto comunque incassato, delivery settembre.
- API BAT/PARD ancora a zero (fallback RPA); priorità spostata sul form unico di registrazione; Soolutions (€55.000) cede l'ecosistema custom ma NON i modelli AI; Germano alleato tecnico.
- Non fatturare tranche oltre l'acconto senza sottoscrizione cliente; condizione vincolante Bruno: spec modello base + retraining da terzi confermate per iscritto da Soolutions — il lock-in è rischio HeyAI.

### 20 - Projects/NOT/Eye Cookies.md
- Behavioral tracking/remarketing per pop-up store (cliente NOT/NoLoop), MVP in sviluppo attivo: bisettimanali con Germano avviati, bloccante UID GDPR sciolto in call #2 (11/6), vendita target settembre 2026.
- Contratto cliente MAI prodotto (solo approvazione email Donzelli 03/04 + acconto incassato) e OE fornitore mancante — €75K cliente / €36K fornitore; Germano: gatekeeper IP verso Microlog, promoter verso BAT/Miroglio.
- Federico segnala rinegoziazione al rialzo del compenso (sensibile §13, mai al cliente); 'full ownership' = ecosistema custom, esclusi modelli AI riusati — da esplicitare in OE e contratto.

---

# Proposta — Tagging concettuale pilota PKM (#k/)

> Bozza per `00 - Inbox/2026-06-11 - Proposta tagging concettuale pilota PKM.md` — analisi in sola lettura, nulla applicato.
> Obiettivo: ritrovare il sapere trasversale (lezioni, pattern, regole) ovunque viva — atomic notes, coaching notes, metodologie, Master Facts, schede progetto/persona.

## 0. Stato attuale dei tag (verificato)

- **Frontmatter `tags:` quasi assente nel vault core**: solo 5 occorrenze in `20/30/40/60/90/99` (`[system, weekly-review, F6]`, `[founder, internal, pm]`, `[client, decision-maker, futuritaly]`…). Uso massivo solo nei recap auto-generati (`code-session`, `daily-index-YYYY-MM-DD`) in `80 - Sources/Cowork Sessions/code-recap/`.
- **Tag inline sporadici**: `#organization`, `#angelini`, `#hub-editoriale`, `#main`, `#person` — per entità/progetto, mai per concetto.
- **Prefisso `#k/` libero**: zero occorrenze di `k/` nel vault. Nessuna collisione; in Obsidian i tag nested si raggruppano sotto `k/` nel pannello tag.

Conclusione: lo spazio "concetto trasversale" è vuoto — il prefisso `#k/` (knowledge) lo delimita senza toccare le convenzioni esistenti.

## 1. Taxonomy proposta — 11 tag concettuali

### `#k/negoziazione`
Condotta in trattativa: silenzio dopo il numero, anchoring, leve, cosa NON rivelare alla controparte.
Candidati (path verificati):
- `40 - Resources/Concetti/Parli troppo dopo aver ottenuto quello che vuoi.md`
- `30 - Areas/Area - Performance & Coaching/2026-05-04 - Carlo Performance — Call Silencio.md` (§"Silenzio dopo il numero")
- `99 - System/Master Facts Sheet.md` §"Pattern di negoziazione consolidati"
- `30 - Areas/Area - Performance & Coaching/2026-05-05 - Carlo Performance — Call Pasquali.md`
Criterio: la nota contiene una lezione/regola su come comportarsi in trattativa, riusabile su clienti diversi.

### `#k/pricing`
Come si costruisce un prezzo HeyAI: regola ≤60%, markup, calibrazione ore, ancoraggio.
Candidati:
- `40 - Resources/Metodologia Quotazioni HeyAI.md`
- `40 - Resources/Concetti/Modulo MVP + opzionali numerati.md`
- `99 - System/Master Facts Sheet.md` §"Regola pricing HeyAI"
- `20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Audit Pricing Angelini Academy.md`
Criterio: la nota stabilisce o applica una regola di costruzione prezzo/margine (non il singolo numero di progetto — quello resta solo nel Master Facts).

### `#k/modelli-commerciali`
Scelta della forma del deal: Full Ownership vs Revenue Share vs ibrido, bundle, sconti.
Candidati:
- `40 - Resources/Concetti/Quando proporre Full Ownership vs Revenue Share.md`
- `40 - Resources/Concetti/Modulo MVP + opzionali numerati.md`
- `20 - Projects/Studio Murolo/PresidIa.md` · `20 - Projects/Matteo Cosma/HoReCa.md` (casi aperti FO vs RS)
Criterio: la nota ragiona sulla *struttura* del deal, non sul prezzo. Doppio tag con `#k/pricing` ammesso quando i due piani convivono.

### `#k/scope-management`
Confine del perimetro: incluso vs extra, change request, qualificare lo scope PRIMA di costruire.
Candidati:
- `40 - Resources/Concetti/Pattern - Incluso vs Extra.md`
- `40 - Resources/Metodologia Quotazioni HeyAI.md` §"Clausole contrattuali" (Change Request, integrazioni condizionate)
- `20 - Projects/Eldis/Eldis Compilatore.md` (modello 24/04 interiorizzato dal cliente)
- `30 - Areas/Area - Performance & Coaching/2026-06-05 - Carlo Performance — Pitch Finale Angelini Academy.md` ("qualifica lo scope PRIMA di costruire")
Criterio: la nota difende o definisce il confine di ciò che è venduto.

### `#k/pattern-decisore`
Come decidono i decision-maker cliente: in stanza vs email, sensibilità per persona-tipo.
Candidati:
- `40 - Resources/Concetti/Pattern - Founder e AD decidono in stanza, non per email.md`
- `99 - System/Master Facts Sheet.md` §"Lato cliente (per persona)"
- `60 - People/Laura Garbarino.md` · `60 - People/Paolo Donzelli.md` · `60 - People/Luigi (Achipont).md`
Criterio: sulle schede persona, taggare SOLO se la scheda documenta un pattern decisionale generalizzabile (non semplice anagrafica).

### `#k/gare-pitch`
Condotta di gara e pitch: qualificazione gara, demo navigabile, iterazione deck, tempo parlato in filiera.
Candidati:
- `40 - Resources/Concetti/Lezioni dalla gara Angelini Academy.md`
- `40 - Resources/MOC - Pitch e Proposta Strategy.md`
- `20 - Projects/Futuritaly/Angelini Academy/Framework Pitch Finale.md`
- `30 - Areas/Area - Performance & Coaching/2026-06-05 - Carlo Performance — Pitch Finale Angelini Academy.md`
Criterio: lezione riusabile sulla prossima gara/pitch, non cronaca di questa.

### `#k/kpi-numeri`
Promesse misurabili: baseline, output garantiti vs uplift, audit numerico pre-consegna.
Candidati:
- `40 - Resources/Concetti/KPI bombproof - output garantiti vs uplift da baseline.md`
- `40 - Resources/Prompts/02 - Audit Numerico Presentazione.md`
- `40 - Resources/Prompts/14 - Fact-Check Pre-Consegna.md`
- `20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Audit Pricing Angelini Academy.md`
Criterio: la nota dice come promettere/verificare numeri, non quali numeri.

### `#k/stakeholder-mapping`
Mappare chi è in stanza: champion ≠ owner ≠ decisore, filiera con capofila, relazioni sensibili.
Candidati:
- `40 - Resources/Concetti/Lezioni dalla gara Angelini Academy.md` (lezione 4, quadrilatero)
- `30 - Areas/Area - Performance & Coaching/2026-05-26 - Carlo Performance — Call interna FuturItaly Angelini Academy pre-pitch.md`
- `99 - System/Master Facts Sheet.md` §"Pattern di negoziazione" (relazione Pasquali padre-figlio in CLAUDE §13)
Criterio: la nota insegna a leggere la mappa di potere, non descrive un singolo organigramma.

### `#k/fornitori`
Gestione fornitori: mai prezzo cliente al fornitore, regola ≤60% lato costo, bundle fornitori, riservatezza §13.
Candidati:
- `30 - Areas/Area - Partnership Fornitori/_Area - Partnership Fornitori.md` · `Jakala.md` · `Aegiscore.md`
- `30 - Areas/Area - Performance & Coaching/2026-05-04 - Carlo Performance — Call Silencio.md` ("Mai prezzo del cliente al fornitore")
- `40 - Resources/Metodologia Quotazioni HeyAI.md` §Buyout/anti-aggiramento
Criterio: lezione sul rapporto HeyAI↔fornitore (negoziazione verso il basso, non verso il cliente).

### `#k/ip-contratti`
Proprietà intellettuale e clausole: IP-retained, lock-in, buyout, change of control.
Candidati:
- `40 - Resources/Metodologia Quotazioni HeyAI.md` §"Clausole contrattuali ricorrenti"
- `40 - Resources/Concetti/Quando proporre Full Ownership vs Revenue Share.md`
- `99 - System/Open Questions.md` (#19 contratto IP Soolutions)
- `20 - Projects/Achipont/Achipoint.md` (garanzie IP a HeyAI nel preventivo 7/5)
Criterio: la nota tratta chi possiede cosa e con quali clausole.

### `#k/conduzione-call`
Disciplina personale in call: tempo parlato ≤30%, monologhi, arrivare con domande, ascolto.
Candidati:
- `40 - Resources/Concetti/Parli troppo dopo aver ottenuto quello che vuoi.md`
- `30 - Areas/Area - Performance & Coaching/2026-05-08 - Carlo Performance — Q&A Call Cliente Angelini Academy.md` (70% tempo parlato)
- `30 - Areas/Area - Performance & Coaching/2026-06-03 - Carlo Performance — Dry run pre-Pitch Angelini.md`
- `99 - System/Master Facts Sheet.md` §"Lato HeyAI (Carlo)"
Criterio: comportamento di Carlo in call, indipendente dal contenuto commerciale. Distinto da `#k/negoziazione` (la leva) — qui è l'esecuzione; doppio tag frequente e legittimo.

## 2. Regole d'adozione

1. **Dove**: SOLO nel frontmatter `tags:` (formato lista `tags: [k/negoziazione, k/pricing]` — in YAML senza `#`). Mai tag inline nel corpo: il corpo resta prosa, i tag inline esistenti (#angelini ecc.) non si toccano.
2. **Chi li applica**: chi scrive/aggiorna la nota (agente in sessione, via §15). Per le coaching note, `coaching-note` skill aggiunge i tag in creazione; per le atomic notes è obbligatorio (sono knowledge per definizione, ≥1 tag #k/ sempre).
3. **Chi li audita**: la routine `weekly-system-review` (sabato 16:30 UTC) aggiunge un check: tag fuori taxonomy (typo o tag inventato) → flag; atomic note senza tag #k/ → flag. La taxonomy vive in un file unico (proposta: `40 - Resources/Concetti/_Taxonomy tag concettuali.md`) — i nuovi tag si aggiungono SOLO lì prima dell'uso (max ~15 totali, oltre si consolida).
4. **Quanti per nota**: 1-3. Se ne servirebbero 4+, la nota probabilmente va spezzata (segnale utile, non difetto).
5. **Quando NON taggare**:
   - cronaca operativa pura (log di progetto, daily notes, recap code-session, email bozze in Inbox);
   - numeri ufficiali in quanto tali (il Master Facts si tagga solo sulle sezioni-pattern, anzi: meglio taggare le atomic notes che lo citano);
   - schede persona/progetto senza lezione generalizzabile (l'anagrafica non è knowledge);
   - file in `50 - Archive/` e `80 - Sources/` (il sapere distillato deve già vivere altrove — se un archivio contiene una lezione non distillata, il fix è l'atomic note, non il tag);
   - mai retro-taggare in massa con script: adozione incrementale, solo quando si tocca il file per altri motivi (eccezione: i ~25 file candidati sopra, taggabili in un commit pilota una tantum).
6. **Convivenza**: i tag esistenti (`system`, `code-session`, `daily-index-*`, inline di progetto) restano invariati — il namespace `k/` è disgiunto per costruzione.

## 3. Rollout proposto (quando Carlo approva)

1. Commit pilota: taggare le 7 atomic notes + i ~18 candidati verificati sopra (append-only, solo frontmatter, `updated:` aggiornato).
2. Creare `_Taxonomy tag concettuali.md` in `40 - Resources/Concetti/` + riga di rimando in CLAUDE.md §4.
3. Patch alla skill `coaching-note` e a `vault-live-protocol` (checklist pre-commit: "la nota è knowledge? → tag #k/").
4. Check in `weekly-system-review` dopo 2 settimane: tag orfani, tag mancanti, distribuzione.
