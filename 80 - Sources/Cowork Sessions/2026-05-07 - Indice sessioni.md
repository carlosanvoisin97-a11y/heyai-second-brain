---
type: index
date: 2026-05-07
created: 2026-05-07
updated: 2026-05-07
session_count: 1
trigger: cron-13 (run 1 della giornata)
---

# Indice sessioni Cowork — 2026-05-07

> Run cron-13 del 7/5/2026, finestra 6/5 22:00 → 7/5 13:00 IT. Una sola sessione Cowork sostantiva nel periodo: una notturna massiccia (~5h, 02:00-04:30 IT del 7/5) che ha (a) prodotto i due deliverable Achipont, (b) eseguito una batch reconciliation post-incidente Open Tasks stale del 7/5 mattina, (c) aggiunto 3 nuove regole CLAUDE.md (§10ter, §10ter.1, §15.ter), (d) riscritto il template Proposta Investimento con specifiche layout estratte dal file ufficiale di riferimento, (e) eseguito audit incrociato di consistenza con 5 fix di inconsistenza residua. La sessione ha già propagato tutto sui file vault: l'indice sotto è solo cronistoria di cosa è successo, non delta da committare.

## Sintesi del giorno

- **Achipont — Proposta v1 + Requirement Log v1 prodotti** (target €45K centrato): MVP Essenziale €38K, MVP Completo €45K (sconto bundle €3.5K vs acquisto separato), 4 opzioni MVP individuali €1.5-2.5K cad, Fase 2 indicativa Modulo C €18-22K + Modulo D €15-18K + ADR €6-8K, hosting €250-400/mese. Business case con placeholder dichiarato in attesa Andrea Pazienza. 2 deliverable in `20 - Projects/Achipont/`.
- **Wave 2 NoLoop — Requirement Log FINAL caricato**: `Wave2_RequirementLog_FINAL.xlsx` in `20 - Projects/NoLoop/Wave 2/` come allegato contrattuale per bozza avv. Longo del 7/5.
- **CLAUDE.md — 3 nuove regole strutturali**: §10ter (pre-flight check apertura chat: Digest Log + indice sessioni Cowork giorno prec. + cross-reference prosa/checkbox), §10ter.1 (pre-flight per task di produzione: Glob su 90-Templates + 40-Resources + 80-Sources/Files + cartella progetto PRIMA di chiedere chiarimenti), §15.ter (reconcile checkboxes: ogni commit di prosa che chiude un task DEVE includere `[x]` checkbox nello stesso commit). Documentate in §14 entry 7/5.
- **Template Proposta Investimento (90 - Templates) — versione 2 specifiche bloccanti**: A4 portrait, margini 2.12cm, font Aptos 11pt body / Acre Medium header corporate, palette navy/teal #074F6A (titolo+H1) / #156082 (H2), logo HeyAI 5.27×3.73cm, struttura 13 sezioni standardizzata. Logo estratto in [[40 - Resources/HeyAI_Logo_Header.png]]. 3 punti aperti tracciati come task per Carlo (footer/numerazione, fallback Acre, rigenerazione Achipoint v1).
- **Batch reconciliation 11 task chiusi/annullati/riassegnati** su 8 schede progetto/area + cascata su 7 schede persona + 4 file di sistema. Tutti append puri, niente sovrascritto. `[x]` chiusi: 10 (Marco Merli AI, RL Wave 2, Email Justin, Push BAT, Carmen Compare, Fattura Massi, Aggiornamento Massi, Andrea Pazienza Achipont, Push fornitori 6/5, Quotazione Pasquali, Negoziazione Osservatorio, Proposta Achipont). `[-]` annullati: 4 (Mockup Michele 6/5, Review congiunta 6/5 sera, Rifinitura 7/5, Uscita proposta cliente Achipont mercoledì sera). 🔄 riassegnati: 2 (video grouping + chiusura feature Crowd → Federico).
- **Patch SKILL `cowork-sessions-index` documentata** in [[50 - Archive/System Patches/Patch SKILL cowork-sessions-index 2026-05-07]] (4 sostituzioni guidate per attivare il reconciliation automatico) — applicazione manuale a carico di Carlo (suo punto 0.2 di domani 8/5).
- **Master Facts Sheet — riga Achipont aggiornata**: pricing modulare €38K/€45K cliente (vs precedente "€20K via Jakala" che era costo, non prezzo cliente).

## Sessione 1 — Review open tasks summary

- **ID**: `local_ab08bbda-8868-45a9-95e9-22e174f53ffb`
- **Durata stimata**: ~5h (peak attività file edit 02:22-02:27 UTC = 04:22-04:27 IT)
- **Progetti**: [[20 - Projects/Achipont/Achipoint|Achipoint]], [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|Wave 2 NoLoop]], [[20 - Projects/NOT/Operation Transformation|Operation Transformation]], [[20 - Projects/NOT/Eye Cookies|Eye Cookies]], [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]], [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Aree**: [[30 - Areas/Area - Partnership Fornitori/Jakala|Jakala]]
- **Persone**: [[60 - People/Andrea Pazienza]], [[60 - People/Justin Lauro]], [[60 - People/Massi Sinigaglia]], [[60 - People/Marco Merli]], [[60 - People/Michele Mattucci]], [[60 - People/Elena Chiti]], [[60 - People/Luigi (Achipont)]]
- **File di sistema toccati**: [[CLAUDE]], [[99 - System/Master Facts Sheet]], [[99 - System/MOC - Home]], [[99 - System/Open Questions]], [[99 - System/Open Tasks]], [[99 - System/Digest Log]], [[10 - Daily Notes/2026-05-07]], [[90 - Templates/Proposta Investimento]]

### Decisioni

- **Pricing Achipont confermato modulare**: MVP Essenziale €38K (Modulo A + B + UI), MVP Completo €45K (Essenziale + 4 opzionali integrate), sconto bundle €3.500 vs acquisto separato. Target €45K esattamente centrato dal pacchetto Completo.
- **Concetto "memoria comune" NON aggiunto a CLAUDE.md** (decisione esplicita Carlo dopo valutazione pro/contro): redundant con §16 + §15, descrittivo non prescrittivo, rischio fuorviante per agenti futuri (potrebbe evocare modelli mentali sbagliati come database condiviso multi-utente). Le regole prescrittive esistenti coprono già il comportamento.
- **3 nuove regole CLAUDE.md committate** (lesson learned diretta dall'incidente Open Tasks stale del 7/5 mattina): §10ter pre-flight check apertura chat, §10ter.1 pre-flight per task di produzione, §15.ter reconcile checkboxes nello stesso commit della prosa.
- **Template Proposta Investimento riscritto** (versione 2): specifiche bloccanti estratte da `FuturItaly_Proposta_Osservatorio_def.docx` (file ufficiale di riferimento HeyAI), 13 sezioni standardizzate, palette colori HeyAI navy/teal. Sostituisce versione precedente.
- **Batch reconciliation 11 task** post-incidente (riconciliazione prosa↔checkbox sulle schede dove la prosa di sessioni precedenti aveva chiuso task ma i `[ ]` erano rimasti aperti, generando il falso positivo Open Tasks).
- **Daily Note 7/5 + 4 task aggregati in Open Tasks** (tracking task per Carlo dell'8/5: verifica file campione, applicazione patch SKILL, 3 design decisions template).

### Numeri/fatti nuovi

- **Achipont MVP Essenziale**: €38.000 (Modulo A Raccolta + B Filtraggio/Scoring + UI Interfaccia)
- **Achipont MVP Completo**: €45.000 (Essenziale + 4 opzionali integrate, sconto bundle €3.500)
- **Achipont 4 opzioni MVP individuali**: €1.500-2.500 cad
- **Achipont Fase 2 indicativa**: Modulo C €18-22K · Modulo D €15-18K · Ampliamento ADR €6-8K
- **Achipont hosting/manutenzione/token**: €250-400/mese (range, da finalizzare in kick-off)
- **Achipont termini pagamento**: 40/30/30, validità 30gg, firma per accettazione
- **Template Proposta Investimento — specifiche layout**: A4 portrait · margini 2.12cm · header distance 1.25cm · footer distance 1.25cm · body Aptos 11pt · header Acre Medium (corporate) · titolo proposta 18pt bold #074F6A · H1 14pt bold #074F6A · H2 12pt bold #156082 · logo HeyAI 5.27×3.73cm
- **Logo HeyAI**: 38.9 KB, estratto in `40 - Resources/HeyAI_Logo_Header.png`
- **Achipoint Requirement Log v1**: 60+ requisiti, layout Wave 2, 8 sezioni (MA Raccolta · MB Filtraggio/Scoring · MUI Interfaccia · MOPT Opzionali · MC/MD Fase 2 · MAMP Ampliamenti · RNF Non funzionali · EXC Esclusioni · QA Domande aperte)

### Output prodotti

- 📊 [Achipoint_RequirementLog_v1.xlsx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/Achipoint_RequirementLog_v1.xlsx) — Requirement Log allegato contrattuale Achipont (60+ requisiti)
- 📄 [HeyAI_Achipoint_Proposta_Investimento_v1.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/HeyAI_Achipoint_Proposta_Investimento_v1.docx) — Proposta cliente Achipont (12 sezioni, layout HeyAI navy/teal Aptos)
- 📊 [Wave2_RequirementLog_FINAL.xlsx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/NoLoop/Wave%202/Wave2_RequirementLog_FINAL.xlsx) — Requirement Log FINAL Wave 2 NoLoop (allegato contrattuale per avv. Longo)
- 📋 Brief Sviluppatori Achipont uploaded: `HeyAI_Achipoint_Brief_Sviluppatori_def.docx` copiato in `20 - Projects/Achipont/`
- 📝 Questionario Discovery Achipont uploaded: `HeyAI_Achipont_Questionario_Discovery_def.docx` copiato in `20 - Projects/Achipont/`
- 🖼️ [HeyAI Logo Header](computer:///Users/carlosanvoisin/claude/40%20-%20Resources/HeyAI_Logo_Header.png) — logo corporate estratto dal file di riferimento (38.9 KB, 5.27×3.73cm)
- 📑 [[50 - Archive/System Patches/Patch SKILL cowork-sessions-index 2026-05-07]] — patch documentata per attivare reconciliation automatico (applicazione manuale a Carlo)
- 📑 [[50 - Archive/System/Audit Claude Chats Estrazione 2026-05-07]] — audit collaterale su pipeline estrazione Claude Chats e schedulazione tasks
- 📑 [[90 - Templates/Proposta Investimento]] — template versione 2 con specifiche layout bloccanti
- 📑 File di riferimento layout caricato: `FuturItaly_Proposta_Osservatorio_def.docx` (70KB, archiviato come fonte ufficiale HeyAI per template proposte)

### Citazioni rilevanti

> "Le chat Cowork non si sovrappongono nel senso letterale: ogni chat è isolata, non legge le altre. Il punto di contatto fra chat è il vault. Il vault è 'memoria comune': tutte le chat scrivono lì, tutte le chat leggono da lì. Se una chat scrive male, la chat successiva parte da uno stato vault inconsistente e amplifica il problema."
> — Risposta dell'agente alla domanda di Carlo "le chat si sovrappongono?" (NON committata in CLAUDE.md per scelta esplicita di Carlo: descrittiva, non prescrittiva, rischio fuorviante)

> "Adesso voglio che fai un check incrociato per validare consistenza più meticoloso che puoi, prendi tutto il tempo che serve, i ragionamenti, cerca di metterti in dubbio se ti stai comportando in maniera corretta o meno."
> — Carlo, post batch reconciliation iniziale, richiesta di audit di consistenza (ha portato ai 5 fix di inconsistenza residua + decisione consapevole su CLAUDE.md memoria comune)

### Task emersi (per Carlo, 8/5/2026)

- [ ] **#p1** Verifica a campione che gli edit di stasera siano append-only — aprire 2-3 file modificati e leggerli a colpo d'occhio (suo "punto 0.1") _da Sessione Cowork ab08bbda_
- [ ] **#p1** Applicare manualmente la patch SKILL.md di `cowork-sessions-index` (4 sostituzioni guidate) — vedi [[50 - Archive/System Patches/Patch SKILL cowork-sessions-index 2026-05-07]] (suo "punto 0.2") _da Sessione Cowork ab08bbda_
- [ ] **#p1** Decisione design template: footer (lasciare vuoto vs "Pag X di Y" vs paginazione + "Documento riservato — HeyAI S.r.l. — {data}") _da Sessione Cowork ab08bbda_
- [ ] **#p1** Decisione design template: fallback font Acre Medium (Aptos? Calibri?) — verificare installazione font su sistemi che generano PDF _da Sessione Cowork ab08bbda_
- [ ] **#p1** Decisione design template: rigenerare Proposta Achipoint v1 allineata al template versione 2 (13 sezioni vs attuale 12) prima dell'invio cliente o tenere v1 _da Sessione Cowork ab08bbda_
- [ ] **#p1** Trigger manuale `pm-digest-mattutino` dal pannello Scheduled (PM Digest non è girato oggi → Open Tasks stale al momento della sessione) _da Sessione Cowork ab08bbda_
- [ ] **#p1** Review Carlo+Michele Proposta Achipoint v1 prima invio cliente _da Sessione Cowork ab08bbda_
- [ ] **#p1** Allineamento con Andrea Pazienza per chiudere business case Achipont (sostituire placeholder sezione 8.3 con numeri puntuali) _da Sessione Cowork ab08bbda_

### Schede aggiornate dalla sessione (già committate, append-only)

**Progetti/Aree (8)**: [[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|_Wave 2 NoLoop]] · [[20 - Projects/NOT/Operation Transformation|Operation Transformation]] · [[20 - Projects/NOT/Eye Cookies|Eye Cookies]] · [[20 - Projects/Achipont/Achipoint|Achipoint]] · [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] · [[20 - Projects/NoLoop/Wave 2/Crowd|Crowd]] · [[30 - Areas/Area - Partnership Fornitori/Jakala|Jakala]] · [[99 - System/Open Tasks]]

**File di sistema (5)**: [[CLAUDE]] (§10ter, §10ter.1, §15.ter, §14 entry 7/5) · [[99 - System/Master Facts Sheet]] (riga Achipont €38K/€45K) · [[99 - System/MOC - Home]] (link nuovi deliverable + sezione 7/5) · [[99 - System/Open Questions]] (#34 scheduler) · [[99 - System/Digest Log]] (segnalato non-run)

**Schede persona (7)**: [[60 - People/Andrea Pazienza]] · [[60 - People/Justin Lauro]] · [[60 - People/Massi Sinigaglia]] · [[60 - People/Marco Merli]] · [[60 - People/Michele Mattucci]] · [[60 - People/Elena Chiti]] · [[60 - People/Luigi (Achipont)]]

**Daily Note (1)**: [[10 - Daily Notes/2026-05-07|2026-05-07]] (task carry-over chiuso + Note libere + 4 task creati oggi)

**Template (1)**: [[90 - Templates/Proposta Investimento]] (versione 2 specifiche layout bloccanti)

---

## Sessioni in finestra ma non indicizzate

- `local_a06d5dca-a613-4d37-8c09-852ee00bb879` — "Dashboard refresh manual" — **filtro applicato**: scheduled task con discussione di errori procedurali, no fatti vault-worthy nuovi, no decisioni operative.
- 3× `Pm digest mattutino` (`local_a9dc976b`, `local_85c4489c`, `local_17db3e13`, `local_b1a4097b`) — **filtro applicato**: scheduled task, output già in [[99 - System/Digest Log]].

## ⚠️ Da triagiare

Nessuna persona o progetto nuovo emerso che richieda creazione di scheda. La sessione ab08bbda ha lavorato esclusivamente su entità già censite.

## Alert

- ⚠️ **PM Digest non girato oggi 7/5** (segnalato dalla sessione e committato in [[99 - System/Digest Log]] e Open Question #34). Carlo deve triggerare manualmente dal pannello Scheduled.
- ✅ **Patch SKILL cowork-sessions-index APPLICATA 8/5/2026 sera** via `mcp__scheduled-tasks__update_scheduled_task` da chat normale. Patch unificata 7/5+8/5: append + checkbox reconciliation + campi atomici estesi (deadline, stakeholders, last_call_date) + scope "mai creare schede" ristretto a project/person. Snapshot SKILL post-patch in [[50 - Archive/System Patches/SKILL cowork-sessions-index POST-PATCH UNIFICATA]]. ~~Alert originale: "patch non applicata"~~ — superato.
