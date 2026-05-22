---
type: index
date: 2026-05-20
created: 2026-05-20
updated: 2026-05-20
session_count: 5
continuation_count: 2
---

# Indice sessioni Cowork — 2026-05-20

> Finestra: 19/5 20:22 → 20/5 20:22. Run cron 20:22 (1x/giorno). 5 sessioni nuove indicizzate + 2 continuation rilevate.

## Sessione 1 — `local_ae061e23-6fc4-45ef-990c-67974816308e` — Convert 2D PDF icons to 3D images

**Progetti**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] (asset pipeline)
**Persone**: Carlo (solo)
**Durata/messaggi**: sessione lunga di asset production (cropping 3 asset sbagliati + estrazione 27 PNG totali + script aggiornato con `ICON_CONCEPTS`)

**Decisioni**
- Batch icone 3D Angelini Academy esteso da 16 settori a 27 asset totali (16 settori + 11 extras: time-on-target, bussola, pianeta-puzzle, italia-stripes, freccia-destra, lente, target-freccia, globo, gear, lampadina, grafico-barre-su)
- Stile output Glass (vetro/cristallo) via Gemini 3 Pro Image
- Comando batch consegnato a Carlo per esecuzione in shell locale

**Numeri/fatti nuovi**
- 27 PNG totali in `01-Source-2D/` (16 settori + 11 extras)
- Stima batch 11 extras: ~4 minuti, costo ~€1,5 (Gemini 3 Pro Image)
- Coordinate corrette per pianeta-puzzle: x=350-530, y=235-385 (errore precedente ~40pt)

**Output prodotti**
- Script `generate_icons.py` aggiornato con `ICON_CONCEPTS` per ogni asset
- 27 PNG estratti in cartella sorgente
- Output atteso in `03-Output-Batch/stile-B-glass/`

**Task emersi**
- [ ] Carlo: eseguire batch sugli 11 extras (comando pronto) #p2 _da Sessione Cowork `local_ae061e23`_
- [ ] Carlo: QA grid complessivo settori + extras = 27 immagini Glass post-batch #p2 _da Sessione Cowork `local_ae061e23`_

**Schede aggiornate**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]]

---

## Sessione 2 — `local_b9bd1bcd-47b8-480d-b850-160b2cafad7d` — Audit email recap Futuritaly site call

**Progetti**: [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]]
**Persone**: [[60 - People/Claudia Bugno|Claudia Bugno]], [[60 - People/Daniele Caporale|Daniele Caporale]] (TBD scheda), [[60 - People/Elena Chiti|Elena Chiti]], [[60 - People/Michele Mattucci|Michele Mattucci]]

**Decisioni**
- Audit chirurgico della bozza email recap call Sito Futuritaly 20/5: 3 fix applicati alla bozza originale
- Fix 4b: tagliato "e nutrire i contatti nel tempo" (jargon marketing che contraddice Claudia in call "a me arriva di tutto via mail non le guardo")
- Fix 4c: eliminato bullet "Tracking del comportamento utente (heatmap, scroll depth)" — aggiunta inventata dall'agente, non emersa in call
- Fix 5: asciugata chiusura modulare togliendo "decidete voi quali attivare in base a priorità e budget" (didattico)
- Bonus: aggiunto flag in §6 sul naming CTA bocciato ("esperto" non convince Claudia) come input da raccogliere

**Numeri/fatti nuovi**
- Call sito Futuritaly 20/5 esito sostanzialmente positivo: mockup approvato come concept generale, 3 endorsement chiari in chiusura
- Citazione cliente: Claudia "utilissimo mandarcelo a tutti"; Daniele "non vedo grosse problematiche"

**Output prodotti**
- Versione finale email recap consegnata a Carlo (paste-ready Outlook, A: Claudia/Daniele/Elena, CC: Michele)

**Citazioni testuali rilevanti**
- Claudia (in call): *"a me arriva di tutto via mail non le guardo"* (motivo del fix 4b)
- Daniele (in call): *"temo che possa diventare una cattedrale nel deserto"* (warning su sovraproposta tech 40-50 min)

**Task emersi**
- [ ] Carlo: inviare email recap + link mockup aggiornato a Claudia+Daniele+Elena (CC Michele) #p1 _da Sessione Cowork `local_b9bd1bcd`_

**Schede aggiornate**: [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]]

---

## Sessione 3 — `local_eaba3a8c-d817-4e38-b12c-f8d1c1a23de2` — Future Italy website project action plan

**Progetti**: [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]]
**Persone**: Carlo, Michele (debrief post-call), Claudia, Daniele, Elena

**Decisioni**
- Piano d'azione operativo per Sito Futuritaly post-call 20/5: 8 workstream con owner + deadline + dipendenze creato in `00 - Inbox/`
- Coaching note pre-esistente per call Futuritaly sito 20/5 arricchita in append con 5 integrazioni dal debrief con Michele
- Voto performance Carlo: **7,2/10** (miglioramento netto vs 6,8/10 del 19/5)
- 5 decisioni che servono da Carlo entro 21/5 sera: pricing scenario (A/B/**C** raccomandato), naming CTA, case history mockup, slot call 22/5 con Daniele, riallineamento Lavinia (raccomandato WhatsApp gio 21/5 mattina)

**Numeri/fatti nuovi**
- Performance Carlo 7,2/10: sostanza tecnica 8, articolazione orale 7, posizionamento relazionale 7,5, gestione correzioni 7, drive verso decisioni 7,5, professionalità 7,5
- Tempo parlato Carlo: ~50-55% (vs 60-65% del 19/5, in calo strutturale)
- Pattern eliminati in 24h vs call 19/5: auto-disclosure Claude zero, "sì-però" da 7+ a 1-2, difesa scelte bocciate zero
- Pattern nuovo strutturale identificato: **sovraproposta tecnologica precoce** (mutazione del "spiegare invece di chiedere" del 19/5 → "proporre invece di chiedere")

**Output prodotti**
- [[00 - Inbox/2026-05-20 - Piano Azione Sito Futuritaly post-call 20-5|Piano Azione Sito Futuritaly post-call 20-5]] (`computer:///Users/carlosanvoisin/claude/00%20-%20Inbox/2026-05-20%20-%20Piano%20Azione%20Sito%20Futuritaly%20post-call%2020-5.md`)
- [[30 - Areas/Area - Performance & Coaching/2026-05-20 - Carlo Performance — Call Futuritaly sito proprio|Coaching note 20/5]] arricchita in append con 5 integrazioni dal debrief

**Citazioni testuali rilevanti**
- Daniele 47:02: *"temo che possa diventare una cattedrale nel deserto"* (pattern sovraproposta tech)
- Daniele 53:40: *"sul tavolo troppe cose, nessuna gerarchizzazione"* (drive verso gerarchizzazione P1/P2/P3)
- Michele al debrief: *"glielo stiamo vendendo come scelta intermedia e stiamo virando a extra Premium"* (mismatch pricing-effort sollevato + bypassato)

**Task emersi**
- [ ] Carlo: chiudere 5 decisioni entro 21/5 sera (pricing scenario / naming CTA / case history mockup / slot call 22/5 Daniele / riallineamento Lavinia) #p1 _da Sessione Cowork `local_eaba3a8c`_
- [ ] Carlo: per call 22/5 con Daniele applicare 3 regole — gerarchizzazione P1/P2/P3 in apertura blocchi · domanda diagnostica prima di ogni proposta tech · tempo parlato ≤45% #p1 _da Sessione Cowork `local_eaba3a8c`_

**Schede aggiornate**: [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]], coaching note 20/5 (già live in sessione)

---

## Sessione 4 — `local_1653abdf-0f2f-42cd-8125-3c9edf17b324` — Review emails and draft three responses

**Progetti**: [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]], [[20 - Projects/NOT/Eye Cookies|Eye Cookies]]
**Persone**: [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]], [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]], Arianna Giordanella (NoLoop op), Germano Marano (cliente Eye Cookies), [[60 - People/Marco Merli|Marco Merli]] (cliente)

**Decisioni**
- 3 risposte email draftate paste-ready Outlook:
  1. **Forward bug Arianna a Federico+Simone** (INTERNO): 7 bug catturati post test Crowd ieri sera 18:00 — modifica eventi post-creazione, form mapping duplicato, flag seleziona tutti rotto, editor landing accompagnatori, rooming non modificabile, export doppie, sgancio automatico cancellati. Urgenza: evento Generali OGGI 20/5.
  2. **Risposta Germano Eye Cookies (CLIENTE)**: K-ippun Haru exit a fine maggio diventa finestra utile per primo test in store nuovo; roadmap consolidata + cadenza bisettimanale (Martedì/Giovedì PM) + proposta totem in finalizzazione.
  3. **Risposta Marco Merli AWS/OpenRouter (CLIENTE)**: confermare Crowd DNS chiusi (Nicolò ha aggiunto parametri); chiusura formale legata a migrazione domini Havant settimana 18-22/5. Niente escalation a Simone.

**Numeri/fatti nuovi**
- **Crowd evento Generali OGGI 20/5** (cliente NoLoop) — urgenza fix bug Arianna prima possibile
- **K-ippun Haru exit fine maggio** — sensori Eye Cookies da spostare in nuovo store (finestra primo test)
- Cadenza Eye Cookies proposta: **bisettimanale** Martedì o Giovedì PM (slot scarichi HeyAI)
- Migrazione domini su Havant: **settimana 18-22/5** in corso

**Output prodotti**
- 3 bozze email paste-ready Outlook (consegnate in chat)

**Task emersi**
- [ ] Carlo: inviare forward bug Arianna a Federico+Simone (Generali OGGI 20/5) #p1 _da Sessione Cowork `local_1653abdf`_
- [ ] Carlo: inviare risposta Germano Eye Cookies (apre cadenza bisettimanale + totem) #p1 _da Sessione Cowork `local_1653abdf`_
- [ ] Carlo: inviare risposta Marco Merli (chiusura DNS Crowd) #p1 _da Sessione Cowork `local_1653abdf`_
- [ ] Carlo: confermare slot bisettimanale Eye Cookies a Germano (Mar/Gio PM, prima entro questa settimana) #p2 _da Sessione Cowork `local_1653abdf`_
- [ ] Carlo: finalizzare proposta totem Eye Cookies (focus stabilità connettività) #p2 _da Sessione Cowork `local_1653abdf`_

**Schede aggiornate**: [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]], [[20 - Projects/NOT/Eye Cookies|Eye Cookies]], [[60 - People/Marco Merli|Marco Merli]]

---

## Sessione 5 — `local_bd6627ca-3d63-4f01-8a8f-b6cb5e6c930e` — Retrieve emails for Laura Zaghi response

**Progetti**: NoLoop stack tool — LinkedIn Sales Navigator
**Persone**: [[60 - People/Laura Zaghi|Laura Zaghi]], Elena (LinkedIn), Angela (LinkedIn)

**Decisioni**
- Vault commit completo live da agent in sessione: creata **nuova scheda fornitore SaaS** `[[30 - Areas/Area - Partnership Fornitori/LinkedIn Sales Navigator NoLoop|LinkedIn Sales Navigator NoLoop]]`
- Skill `email-drafting` patchata con sezione "Pattern appresi da riscritture Carlo (rolling)" — 7 pattern del 20/5: apertura "Spero tutto bene!", condizione dedicata, potremmo>conviene, no FOMO, affermative>negative, rispondere alla domanda precisa, lasciare parlare i numeri + lezione PM sul "secondo livello" (3 test prima di aggiungere punti: già noto? push commerciale? caso già chiuso?)
- Master Facts Sheet patchato con nuova sezione `🔗 Stack Tool NoLoop gestiti da HeyAI`
- MOC - Home: aggiunto wikilink LinkedIn Sales Navigator + Aegiscore che mancava in `Area Partnership Fornitori`
- Laura Zaghi scheda: aggiunta sezione `Stack tool` + log entry 20/5 con pattern "Laura demanda dettagli amministrativi al PM"
- _Area - Partnership Fornitori patchata con nuova voce LinkedIn 🆕 (con nota natura distinta SaaS rivenduto vs delivery)

**Numeri/fatti nuovi**
- **Contratto LinkedIn Sales Navigator NoLoop**: 3 anni totali €30.192, sconto 20%, blocco prezzo FY25
- **Config**: 10 seat Advanced + TeamLink 1000
- **Bonus pacchetto**: ADV €3K + mese gratuito €883
- 5 open questions sulla scheda; 2 task aperti (verifica ADV + roster con Angela)

**Schede aggiornate (LIVE in sessione, NON re-patchare da questo task)**:
- 🆕 [[30 - Areas/Area - Partnership Fornitori/LinkedIn Sales Navigator NoLoop|LinkedIn Sales Navigator NoLoop]]
- [[60 - People/Laura Zaghi|Laura Zaghi]]
- [[30 - Areas/Area - Partnership Fornitori/_Area - Partnership Fornitori|_Area - Partnership Fornitori]]
- [[99 - System/MOC - Home|MOC - Home]]
- [[99 - System/Master Facts Sheet|Master Facts Sheet]]
- skill `email-drafting/SKILL.md`

---

## Continuation sessions

Sessioni già indicizzate in giorni precedenti riaperte in window con attività vault-worthy nuova. Patch chirurgiche sulle schede già propagate dall'agente live §15 CLAUDE.md; questa sezione è solo cronistoria — NON re-patcha le schede, NON aggiunge entry all'indice consolidato.

### `local_6cce3cbe-2f2e-4b3f-8646-202c6f4290f1` — Angelini Academy: Cluster Imprese e Hub Editoriale (prima indicizzazione: [[2026-05-19 - Indice sessioni|→ link 19/5]])

Continuazione 20/5: status review dei 10 punti aperti del sito Angelini Academy (E Hub editoriale doppio livello, A Patch HR&B v2, B nuova `/percorsi/imprese` + persona 3D, C Refactor atomo Industry Learning Ecosystem, D Pillars+Cross-OpCo superseded, F tassonomia OpCo Fater/Ventures/Consumer, G Modifiche post-call 19/5, H Pitch Outline patches, I Dictionary cluster Elena v.012, L Imprese qualificate hub access). Riferimento a messaggio WhatsApp Elena 20/5 ~9:30 sul modello accesso hub. Carlo non ha ancora dato i feedback di chiusura — sessione in attesa.

**Schede toccate dal live agent (per audit, non re-patchare)**: nessuna in questa continuation, è solo Q&A di status.

### `local_b31cd243-4af2-467f-83ae-1f7e0fa7aa5e` — Angelini Academy strategy presentation document (prima indicizzazione: [[2026-05-18 - Indice sessioni|→ link 18/5]])

Continuazione 20/5: handover preparato per nuova chat audit della bozza email recap Sito Futuritaly call 20/5 — chat precedente saturata, output degradati. Riferimenti espliciti: "stamattina 20/5", "pitch del 31/5", trascrizione `Allineamento Proposta Sito Futuritaly.docx`. L'handover è stato poi raccolto dalla sessione `local_b9bd1bcd` (Audit email recap Futuritaly site call) che ha applicato i 3 fix sull'email.

**Schede toccate dal live agent (per audit, non re-patchare)**: nessuna in questa continuation, è solo produzione handover testuale.

---

### Conflict scan cross-sessione

Nessun conflitto rilevato. Le 5 sessioni nuove operano su schede disgiunte (Sito Futuritaly · Crowd/Eye Cookies/Marco Merli · LinkedIn Sales Navigator) e i campi atomici proposti sono coerenti tra loro. La sessione `local_eaba3a8c` (piano + coaching) e `local_b9bd1bcd` (audit email) toccano entrambe Sito Futuritaly ma con focus diversi (coaching note già live + piano azione 00-Inbox vs audit email) e in sequenza temporale ascendente coerente.

---

### Checkbox reconciliation

- N task chiusi auto: **0**
- N task annullati auto: **0**
- N task in ⚠️ Da triagiare: **0**
- N task aperti scansionati totali: **~12** (Sito Futuritaly + Crowd + Eye Cookies + Marco Merli + _Angelini Academy)

Razionale: la maggior parte degli output di oggi sono **azioni nuove ancora da eseguire** (3 email da inviare, batch icone da lanciare, 5 decisioni Carlo entro 21/5 sera), non chiusure di task pendenti. Il task #p1 "inviare bozza email recap Sito Futuritaly" emerso da `local_b9bd1bcd` esiste in stato `[ ]` perché Carlo non ha ancora inviato (la sessione ha solo prodotto la bozza). Niente chiusura silenziosa applicata.

---

## ⚠️ Da triagiare

_(nessun item)_

---

_File generato automaticamente dal task `cowork-sessions-index` (cron `22 20 * * *` 1x al giorno). Modifiche manuali permesse._
