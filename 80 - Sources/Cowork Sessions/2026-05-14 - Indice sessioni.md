---
type: index
date: 2026-05-14
created: 2026-05-14
updated: 2026-05-14
session_count: 10
---
<!-- auto-updated by cowork-sessions-index 2026-05-14 18:30 (manual / off-schedule) | source-session: this-run -->

# Indice sessioni Cowork — 2026-05-14

> Run manuale off-schedule (anticipato vs cron `22 20 * * *`). Finestra: ultime 24h dal trigger (~2026-05-13 18:30 → 2026-05-14 18:30). Ordinamento ascending per `lastActiveAt`.

## Sessione 1 — Email reminder to Laura about Minutes (prima iterazione)

- **ID**: `local_8694cefc-7bad-4913-a922-c9c6a5bd1235`
- **Progetti**: [[20 - Projects/NoLoop/Wave 2/Minutes|Minutes]]
- **Persone**: [[60 - People/Laura Garbarino]]
- **Decisioni**: bozza email Carlo → Laura Garbarino su tema plenaria Minutes; tono "reminder veloce" + "in attesa di un OK da parte tua" (non chiede data); presentare miglioramenti come già live. Iterazione che chiude su versione "abbiamo finalizzato gli ultimi miglioramenti al sistema — a maggior ragione mi sembrava il momento giusto per tornare da te e organizzare la sessione con il team. Fammi sapere se per te va bene e mi occupo io di tutto il resto".
- **Numeri/fatti nuovi**: nessuno (solo tono/forma email).
- **Output**: bozza email (non ancora salvata su file vault, resta in chat per refinement Sessione 2).
- **Task**: bozza definitiva ancora pending — Carlo decide se inviare o se rifinire prima della plenaria.

## Sessione 2 — Draft reminder email to Laura about Minutes (seconda iterazione)

- **ID**: `local_0ee687a5-4b15-4f21-a306-63d3003536b1`
- **Progetti**: [[20 - Projects/NoLoop/Wave 2/Minutes|Minutes]]
- **Persone**: [[60 - People/Laura Garbarino]]
- **Decisioni**: refinement della stessa email Sessione 1 — Carlo chiarisce "non mettere il dettaglio dei miglioramenti", "non a maggior ragione come forma parlato", "fai capire che ho bisogno del suo OK per organizzare la sessione con il team", aggiungere "consegnare anche la guida che abbiamo redatto". Bozza finale: "ti scrivo solo per un reminder veloce sul tema Minutes. Abbiamo finalizzato una serie di miglioramenti allo strumento e mi piacerebbe organizzare una sessione plenaria con il team per mostrare le novità, fare un recap su come sfruttare al meglio Minutes e consegnare a tutti la guida che abbiamo redatto. Mi serve solo un tuo ok per procedere con l'organizzazione".
- **Output**: bozza finale email Laura plenaria Minutes (non salvata in file vault dedicato — resta in chat).
- **Task**: invio email Laura — Carlo decide timing.

## Sessione 3 — Apply SKILL v4 patch to vault-link-checker

- **ID**: `local_50cf1dcd-16a9-492d-a54a-3a768b7a96bb`
- **Progetti**: ambito sistema (scheduled task)
- **Decisioni**: applicata via `update_scheduled_task` la **patch v4 alias-aware** al SKILL `vault-link-checker` (preparata 14/5 in [[99 - System/Patch SKILL vault-link-checker 2026-05-14 — v4 alias-aware]]). Lo scheduler ora costruisce alias-index da frontmatter prima del check → `[[Eldis]]`, `[[Wave 2 NoLoop]]` e simili non verranno più flaggati broken.
- **Output**: scheduled task `vault-link-checker` aggiornato (verificato attivo). Prossimo run automatico dom 17/5 21:00.
- **Task**: nessuno (patch chiusa).
- **Schede aggiornate**: nessuna (sistema scheduler, no vault writes).

## Sessione 4 — Create AI image prompts for game characters (briefing personaggi landing Angelini Academy)

- **ID**: `local_3d50d690-bad8-4e80-acbe-2ec47712a870`
- **Progetti**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]]
- **Decisioni**: produzione briefing operativo per agente sviluppo sito Angelini Academy — sostituzione personaggi esistenti landing gamificata con 4 nuovi target (logica gamificata stile videogioco, selezione personaggio in apertura sito, attualmente solo redirect a sezione home → evoluzione verso vero percorso). Struttura briefing: contesto componente + istruzioni stile conversione 3D + 4 schede personaggio (nome, target, descrizione, tratti visivi, accent color, reference image) + istruzioni operative finali.
- **Output**: [[Angelini Academy — Briefing Personaggi Landing Page]] (file root `/Users/carlosanvoisin/claude/`).
- **Convenzione naming**: file immagine da rinominare `persona-1-giulia.png`, `persona-2-marco.png`, ecc. (referenziati nel briefing).
- **Task**: passare il briefing + 4 immagini reference all'agente sviluppo sito.

## Sessione 5 — Draft reminder email to Justin and team (Operation Transformation API BAT/PARD)

- **ID**: `local_e235b7fe-9cac-46aa-a884-74245c51268e`
- **Progetti**: [[20 - Projects/NOT/Operation Transformation|Operation Transformation]]
- **Persone**: [[60 - People/Justin Lauro]], [[60 - People/Laila El Zieny]], [[60 - People/Carmen Compare]]
- **Decisioni**: scritta + inviata email reminder Carlo → Justin con Laila in CC; thread completo in 3 round (Carlo→Justin reminder · Justin risposta conferma deadline 15/5 + pressing API · Carlo controreplica shift a 19/5 + indirizzo spedizione + tema ingestion storico in capo a Carmen). Pattern stile "Reminder mail — pattern compatto" estratto dalla rewrite Carlo → propagato in **CLAUDE.md §2.1 nuovo bullet** (apertura `vi scrivo solo per un reminder veloce`, parentesi corte `(qui sotto)`, append topic con `+ tema X in capo a Y`, taglio doppia offerta supporto/call, chiusura condensata, `!` finale come spinta operativa).
- **Numeri/fatti nuovi**: shift deadline 15/5 → 19/5 (in attesa conferma Justin); tema **ingestion storico** formalizzato al cliente, Carmen probabile referente.
- **Task aperti**: 3 nuovi (#p1 attesa conferma shift deadline 19/5 da Justin · #p2 attesa Laila · #p1 attesa referente ingestion storico).
- **Flag (Da triagiare)**: la bozza email `00 - Inbox/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD).md` referenziata in più schede non risulta più nel vault (Glob = 0 match) — probabile archiviazione/cancellazione non propagata, segnalare in [[99 - System/Vault Link Audit]] al prossimo run.
- **Schede aggiornate live in-session**: Operation Transformation (Log + 3 task + evento chiave), Justin Lauro, Laila El Zieny, Carmen Compare (interazioni 14/5). CLAUDE.md §2.1 + §14.

## Sessione 6 — Elena call recap and performance analysis (email Recap Elena post call cluster — v8→v11)

- **ID**: `local_018a15f3-d13c-45c6-a51c-7649c3d4e675`
- **Progetti**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]], [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]]
- **Persone**: [[60 - People/Elena Chiti]]
- **Decisioni**:
  - Email Recap Elena cluster post call iterata da v8 a v11 (versione finale Carlo pronta invio): apertura "innanzitutto grazie mille per i materiali"; bullet mockup con personaggio gamificato + frase aggancio "Si inserisce nei customer journey che stiamo articolando nell'analisi e nella presentazione"; bullet laboratorio editoriale con paternità separata (video pillole = idea Elena, panel LinkedIn admin = aggiunta HeyAI); refuso "pubbliare"→"pubblicare" corretto; touchpoint lunedì 18/5 con disponibilità Carlo 12:30 oppure dopo 15:00.
  - Pivot architetturale **LinkedIn panel**: da v9 "strumento separato dal sito" a v10 Carlo "panel visibile solo agli admin" (admin panel CMS sito, una delle 4 alternative discusse: admin panel CMS · mini-app standalone · estensione browser LinkedIn · bot Teams/Slack). Carlo conferma l'opzione admin panel CMS.
  - Diagnosi skill `email-drafting` **non auto-caricata** in task multi-tema (recap + analisi + email) → §2.1 CLAUDE.md descritto come "caricata automaticamente" è promessa ottimistica non rispettata dal classifier interno. Sessione produce **prompt completo di ottimizzazione skill** (6 interventi A-F: 14 nuove regole stilistiche · sezione "Pattern email PARTNER INTERMEDIARI" terza tipologia · 3 stub nuove tipologie FORNITORI/DEMO/REMINDER · revisione §2.1 CLAUDE.md · nuovo §10quater · backup pre-modifica).
- **Pattern stile email Elena propagati (14 regole nuove)**: 1) "Grazie mille" sempre lettere; 2) apertura due frasi (ringraziamento + frame); 3) ringraziamenti in apertura non bullet; 4) "Approfitto della tua osservazione per" (no "cogliendo la palla al balzo"); 5) liste possibilità sempre aperte ("e altre che possiamo esplorare insieme"); 6) niente "presidiare/garantire la presenza" (usare "non ho disponibilità/slot liberi"); 7) MAI ripetizione parole vicine (variare lessicalmente); 8) "Ti confermo che" apre risposta diretta a dubbio; 9) "Grazie per l'input — ti confermo che abbiamo già considerato" per validare proposta combaciante; 10) concretezza possibilità (no astratto "esperienza personalizzata"); 11) specificare oggetto funzionalità; 12) doppia dimensione utente/cliente esplicita; 13) aggancio framework strategico ("si lega a customer journey dedicati"); 14) "in parallelo a... in coerenza con queste" per dichiarare workflow coerente.
- **Task tecnico Michele**: prima di lun 18/5, check fattibilità LinkedIn API write access (OAuth + approval LinkedIn Marketing Solutions per Company Page) + alternative (Buffer/Hootsuite integration vs copy+redirect manuale).
- **Output**: [[50 - Archive/Inbox/2026-05/2026-05-13 - BOZZA Email Recap Elena post call cluster|Bozza Elena v11]] (iterata in-session da v8 a v11 — Carlo conferma pronta per invio dopo correzione refuso).
- **Schede aggiornate live in-session**: bozza Elena, scheda _Angelini Academy (task LinkedIn corretto da "feature sito" → "admin panel CMS").

## Sessione 7 — Research Claude prompting optimization techniques (audit CLAUDE.md post-ottimizzazione 14/5 + fix skill auto-load)

- **ID**: `local_617d35e1-2b86-4080-8b38-9fc84c08be90`
- **Decisioni**:
  - Audit CLAUDE.md post-ottimizzazione token 14/5 (~60% riduzione): tutti i wikilink operativi integri (6 "broken" segnalati = esempi dentro prosa esplicativa, non link reali rotti); tutte le regole critiche (§15 vault-update, §15.ter checkbox, §15.quater scheduled, §11 don'ts, §13 riservatezze, §10 procedura) presenti e complete; puntatori Master Facts Sheet/Open Questions/CLAUDE Changelog Archive funzionano.
  - **Fix critico**: le skill in `.claude/skills/` (email-drafting, transcript-processing) **NON sono auto-loadate** da Cowork — il sistema riconosce solo skill di plugin registrati (non compaiono in `<available_skills>`). Riformulazione §2.1 + §15.bis: da "caricata automaticamente quando si scrivono bozze email" → "l'agente **DEVE leggere** il file `.claude/skills/email-drafting/SKILL.md` con Read PRIMA di scrivere qualsiasi bozza email". Stessa cosa per §15.bis e transcript-processing.
- **Output**: CLAUDE.md §2.1 + §15.bis riformulati con OBBLIGO esplicito Read pre-scrittura.
- **Task aperti per Carlo (manuali)**: 1) applicare patch `vault-link-checker` v4 dal pannello Scheduled (poi chiusa da Sessione 3 in questo stesso run); 2) triagiare 19 broken wikilink residui (Brand Review, Analisi Competitor, Aegiscore, System Consistency Audit, placeholder crm-velocity, 3 frontmatter `related_meeting`); 3) test rapido: prossima chat con drafting email → verificare che agente legga skill prima.

## Sessione 8 — Audit Obsidian vault architecture (audit massivo + 3 patch SKILL rolling-window + 31+12+1 cleanup file)

- **ID**: `local_5cbc67ec-dba1-4249-b085-743dffa04f1e`
- **Progetti/Aree toccate**: sistema vault (CLAUDE.md, MOC, Open Tasks, Open Questions, Jakala, Performance Carlo)
- **Decisioni e output**:
  - **Audit architetturale vault 4 dimensioni** (A/B/C/D) → report [[99 - System/Vault Architecture Audit 2026-05-13]] (status `executed`).
  - **Batch A CLAUDE.md**: §6 trim (snapshot progetti ricomposto) · §7 ricomposto (60→30 nomi, solo decisori + SME critici) · §14 rolling window (4 voci 11-12/5 archiviate in [[99 - System/CLAUDE Changelog Archive]], 8 voci pre-archivio 5/5→8/5/2026, ~4-5K token risparmio fixed cost). 17 wikilink update propagati (CLAUDE.md · MOC · Open Tasks · Open Questions · Jakala · Performance Carlo).
  - **Batch B Inbox cleanup**: 30→8 file (mossi/archiviati 22 file + cancellati 5 orfani: lock Office + html2pdf + .gitkeep).
  - **Batch C 99-System cleanup**: 25→15 file (mossi/archiviati 10 file) + cartella `70 - Meetings/` eliminata + cartella `99 - System/DPIII Reports/` archiviata (5 file).
  - **3 patch SKILL rolling-window applicate via `update_scheduled_task`**: (a) `pm-digest-mattutino` §5 → merge sezioni "Aggiunte dal PM Digest" precedenti nelle Priorità #p1/#p2/#p3 + cancella vecchie (primo run **dom 14/5 8:02** — verificato funzionante in chat dopo trigger: 41 task mergerati da 3 sezioni stackate, 3 sezioni cancellate, 4 task nuovi 14/5 in nuova sezione); (b) `cowork-sessions-index` §7 → entry Cowork Sessions Log compatte ≤250 char + rolling-window archive >14gg in `50 - Archive/Cowork Sessions Log/{YYYY-MM}.md` (primo effetto **stasera 14/5 dopo 20:22** — applicato in questo stesso run); (c) `vault-link-checker` → rolling-window audit >7gg in `50 - Archive/Vault Audits/{YYYY-MM}.md` + tabella "Trend storico" nel file vivo (primo effetto **dom 17/5 21:00**).
  - Aggiornata voce batch A in CLAUDE.md §14 ("3 patch SKILL rolling-window applicate") + Vault Architecture Audit doc → `status: executed`.
  - Verifica cross-chat: nessuna sovrapposizione con sessione "Optimize high token consumption costs" (già indicizzata 13/5).
- **6 task aperti in capo a Carlo** (nessuno bloccante, opzionali/workflow): 1) cambio modello scheduled tasks → Haiku dove ha senso (~60% risparmio); 2) screenshot Console.anthropic.com consumo token; 3) MS Lists setup Soolutions Delivery Board; 4) 3 minor triage Master Facts (Antonio Cichello role · Marco Pasquali duplicato · fatture Calajò intestazione); 5) **calibrazione `cadence_days`** 16 schede CRM populated (5-10 min insieme **prima di lun 18/5 9:00** — primo run reale `crm-velocity`, unico punto con scadenza); 6) 43 schede CRM da popolare (~20 min, opzionale).
- **PM work normale (non vault)**: gio 14/5 call Carlo+Andrea contratto Longo · integrazione doc Angelini · allineamento HeyAI+FuturItaly; ven 15/5 email Longo finalizzazione contratto; risposta Aegiscore (era da fare 13/5 — verificare se gestita su altra chat).
- **Verifica post-patch (a)**: Open Tasks 14/5 8:02 ha funzionato — file dichiara esplicitamente "Merge rolling-window: 41 task da sezioni 'Aggiunte 11/5 + 12/5 + 13/5' mergerati nelle Priorità, 3 sezioni cancellate"; nuova sezione `## 🆕 Aggiunte dal PM Digest 14/5` con 4 task nuovi (Eye Cookies DNS · Wave 2 cash-flow Andrea · Angelini Academy touchpoint Elena ven 15/5 · PresidIA Murolo). Implementazione bonus: sotto-headings `### Mergerati da Aggiunte 12/5 — Topic X` preservano provenienza per topic.

## Sessione 9 — Draft investment proposal email to client (Achipont: bozza email Luigi con proposta v3 + requirement log)

- **ID**: `local_d7b38090-f54f-40bb-81f2-892dfe8e34a9`
- **Progetti**: [[20 - Projects/Achipont/Achipoint|Achipoint]]
- **Persone**: [[60 - People/Luigi (Achipont)]]
- **Decisioni**: bozza email Carlo → Luigi (oggetto "Achipont × HeyAI — Proposta di Investimento e Requirement Log") con allegati [[20 - Projects/Achipont/HeyAI_Achipoint_Proposta_Investimento_v3.docx]] + [[20 - Projects/Achipont/Achipoint_RequirementLog_v1.xlsx]]. Calibrata su stile cliente: apertura calda + bullet `*` + "team di sviluppo" al posto del nome fornitore (Soolutions/Tokio Studio non citati, rispetto §2.1 CLAUDE.md) + leva modularità ("partire da MVP essenziale e attivare opzionali solo quando avrà senso") + chiusura aperta "fissiamo una call per andare insieme nel dettaglio".
- **2 punti verifica pre-invio** (sollevati in chat, in attesa di chiarimento Carlo):
  1. Versione proposta: il log 13/5 dice "Carlo chiude proposta v3 con Michele+Andrea questa settimana e la manda al cliente" → confermare v3 o v4 in arrivo a valle review.
  2. Indirizzo destinatario: nel vault solo `produzione@achipont.it` (generico) — chiedere mail diretta Luigi o copia con responsabile operativa.
- **Output**: bozza email Achipont (resta in chat, non salvata su file vault dedicato).
- **Task**: invio email Achipont — gated su 2 verifiche sopra.

## Sessione 10 — Risolvere drift sistema PM (5 drift fix system-consistency-check 14/5)

- **ID**: `local_236d2e5d-0061-48b2-921a-07b5ce841384`
- **Decisione critica risposta Carlo**: **(b) Sabato 17:30** è il canonical per `weekly-review-interactive` (decisione esplicita Carlo in chat).
- **5 drift risolti** (1 critico + 4 minori):
  1. 🔴 **Critico `weekly-review-interactive`** drift cron vs doc vs SKILL — SKILL aggiornato via `update_scheduled_task` (6 occorrenze "venerdì"→"sabato" + data esempio 15/5→16/5 + nota patch 14/5; description allineata); CLAUDE.md §9 riga `Sab 17:38`; CLAUDE.md §14 prossimi eventi `sab 16/5 ~17:38`; cron scheduler già corretto (`30 17 * * 6`), nessun edit.
  2. 🟡 **`system-consistency-check` aggiunto in CLAUDE.md §9** (riga `Lun 7:30` dopo weekly-review).
  3. 🟡 **`crm-velocity` SKILL riga 103** riformulata senza riferimento stale a `weekly-digest`.
  4. 🟡 **`crm-velocity` labeling** CLAUDE.md §9: `Lun 9:08` → `Lun 9:00` (cron base).
  5. 🟡 **`pm-digest-mattutino`**: (a) CLAUDE.md §9 `Lun-Ven 8:02` → `Lun-Ven 8:00` (cron base); (b) frontmatter YAML duplicato SKILL rimosso (verificato post-update, ora unico blocco righe 1-4).
- **Audit log**: appended blocco "### Drift risolti 2026-05-14" in coda a [[99 - System/System Consistency Audit]] (5 bullet, uno per fix).
- **Nota meta**: SKILL files in `/Users/carlosanvoisin/Documents/Claude/Scheduled/` non raggiungibili dal tool `Edit` (directory fuori dalle connected folders) → modificati via `update_scheduled_task` (delivery full-prompt body, semantica = Edit chirurgico). Rispettato §15.quater "execute via `update_scheduled_task` nello stesso commit della doc".
- **Azioni residue lato Carlo (non bloccanti)**: verifica visiva pannello Scheduled (`weekly-review-interactive` description = "sabato 17:30", `pm-digest-mattutino` frontmatter singolo, `crm-velocity` no riferimento weekly-digest); patch `vault-link-checker` v4 — risolta da Sessione 3 in questo stesso run.
- **Garanzia**: prossimo run `system-consistency-check` lun 18/5 7:30 farà delta vs questo audit → 0 drift residui attesi.

### Conflict scan cross-sessione

Schede toccate da ≥2 sessioni nel run + delta proposti aggregati. **0 conflitti rilevati**.

- [[CLAUDE.md]] — toccata da S5 (§2.1 nuovo bullet "Reminder mail — pattern compatto" + §14) · S6 (proposta interventi A-F in attesa Carlo) · S7 (§2.1 + §15.bis riformulati per skill Read OBBLIGATORIO) · S8 (§6 trim + §7 ricomposto + §14 rolling window) · S10 (§9 riga `system-consistency-check` + label fix `crm-velocity` + `pm-digest-mattutino`; §14 `weekly-review-interactive sab 16/5`). **Append paralleli su sezioni diverse senza contraddizioni semantiche**. Esiti: §2.1 ha ricevuto **3 contributi separati e compatibili** (S5 bullet pattern reminder; S7 fix Read OBBLIGATORIO; S8 trim §14 separata). §14 ha ricevuto **3 contributi convergenti** (S5 patch log reminder; S8 rolling window archive 4 voci; S10 sab 16/5 weekly review). Non c'è "ultimo timestamp vince" da applicare perché le sezioni non si sovrappongono.
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] — toccata da S4 (briefing personaggi landing) · S6 (task LinkedIn da "feature sito" → "admin panel CMS"). **Append paralleli su iniziative diverse senza contraddizioni**. 0 conflitti.
- [[99 - System/System Consistency Audit]] — toccata solo da S10 (delta non-conflict da S8 audit batch executed, semantica complementare). 0 conflitti.
- Scheduled task `vault-link-checker` SKILL — toccato solo da S3 (patch v4 applicata). S7 ne discute come "task pending per Carlo" ma viene chiuso live in S3 dello stesso run. 0 conflitti.

### Checkbox reconciliation

- **0 task chiusi auto** dal run di indicizzazione (le sessioni 5, 8 e 10 hanno già fatto reconciliation live in-session via §15.ter — S8 in particolare ha chiuso 8 task `vault audit batch A/B/C/3 patch SKILL` live; S10 ha aggiunto blocco "Drift risolti 14/5" che documenta 5 task pre-esistenti come chiusi nel report).
- **0 task annullati auto**.
- **0 task in ⚠️ Da triagiare** (nessun caso ambiguo cross-sessione).
- **Task aperti scansionati totali**: ~40 sulle schede toccate (Operation Transformation, _Angelini Academy, Achipoint, Minutes, Sito FuturItaly, Justin/Laila/Carmen/Luigi/Elena, Open Tasks, scheduled tasks).
- **Nuovi task aperti**: 3 in Operation Transformation (S5) + 1 in _Angelini Academy aggiornato (S6, task LinkedIn esistente riformulato non chiuso) + 6 task Carlo da S8 (cambio modello scheduled · screenshot console · MS Lists setup · 3 minor triage Master Facts · cadence_days 16 schede CRM · 43 schede CRM da popolare).

### ⚠️ Da triagiare in prossima chat live

1. **Bozza email `00 - Inbox/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD).md` orfana** (S5): referenziata in Operation Transformation + Justin Lauro ma file non più presente. Cancellazione/archiviazione non propagata. `vault-link-checker` dom 17/5 dovrebbe intercettarla.
2. **19 broken wikilink residui** segnalati da S7 (Brand Review, Analisi Competitor, Aegiscore, System Consistency Audit, placeholder crm-velocity, 3 frontmatter `related_meeting`) — Carlo li triagia manualmente.
3. **Bozza email Achipont a Luigi** (S9): 2 verifiche pre-invio non sciolte (versione v3 vs v4 in arrivo; indirizzo destinatario diretto Luigi). Carlo conferma prima di inviare.
4. **Bozza email Laura plenaria Minutes** (S1+S2): pronta in chat, Carlo decide timing invio.
5. **Skill `email-drafting` ottimizzazione proposta** (S6): prompt completo 6 interventi A-F prodotto in chat ma da eseguire in chat dedicata con accesso scrittura `.claude/skills/` (14 nuove regole + sezione "Pattern email PARTNER INTERMEDIARI" + 3 stub FORNITORI/DEMO/REMINDER + revisione §2.1 CLAUDE.md + nuovo §10quater + backup).
6. **Calibrazione `cadence_days` 16 schede CRM populated** (S8): **prima di lun 18/5 9:00** (primo run reale `crm-velocity`).

### Schede aggiornate da questo run (post-patch back-link)

Progetti/aree (back-link `## Sessioni Cowork correlate` + Log entry sintetica): [[20 - Projects/NoLoop/Wave 2/Minutes|Minutes]] · [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|_Angelini Academy]] · [[20 - Projects/NOT/Operation Transformation|Operation Transformation]] · [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]] · [[20 - Projects/Achipont/Achipoint|Achipoint]].

Persone: [[60 - People/Laura Garbarino]] · [[60 - People/Justin Lauro]] · [[60 - People/Laila El Zieny]] · [[60 - People/Carmen Compare]] · [[60 - People/Elena Chiti]] · [[60 - People/Luigi (Achipont)]].

Sistema: [[99 - System/Cowork Sessions Log]] (entry compatta ≤250 char) · [[80 - Sources/Cowork Sessions/Index Cowork Sessions|Index Cowork Sessions]] (10 nuove righe).

### Sessioni filtrate (scheduled tasks o già indicizzate)

- `local_da0d26b5` PM digest mattutino 14/5 (scheduled, filtrato)
- `local_c6b61170` PM digest mattutino (scheduled, già indicizzato 13/5)
- `local_6755e383` Vault link checker (scheduled, filtrato)
- `local_4448e865` Vault link checker (scheduled, filtrato)
- `local_df639a2e` System consistency check 14/5 (scheduled, ha generato il report da cui S10 ha lavorato — filtrato qui ma triggerato S10)
- `local_6a72c44c` Weekly system consistency audit check (scheduled, filtrato)
- `local_acdff7e4` Cowork sessions index 13/5 (questo task ieri, filtrato)
- `local_af2ea6af` Write recap email Federico+Simone (già indicizzata 13/5)
- `local_348d6704` Optimize high token consumption costs (già indicizzata 13/5)
- `local_489f7e41` Crowd recap (già indicizzata 12/5)
- `local_b34d5221` Email Marco Murolo (già indicizzata 13/5)

### Verifica post-patch (8 check)

- ✅ Sessioni elencate in ordine cronologico ascending per `lastActiveAt`
- ✅ Sezione `### Conflict scan cross-sessione` presente con conteggio (0 conflitti)
- ✅ Commenti HTML invisibili nel frontmatter con `source-session` + `source-lastActive` (questo file)
- ✅ Riga `_atomic-field-change_` non necessaria in questo run (nessuno dei campi atomici `status/priority/deadline/stakeholders/last_call_date/last_contact` toccati dal task — le schede toccate hanno tutte `updated:` già aggiornato 2026-05-14 dai live commit in-session)
- ✅ Sezione `### Checkbox reconciliation` presente con conteggio (0 chiusure auto, 0 annullamenti auto, 0 da triagiare)
- ✅ Coaching note / prep doc non necessari (nessuna sessione di performance review oggi)
- ✅ Notifica push: trigger manuale → output dettagliato in chat; nessun conflitto cross-sessione rilevato
- ✅ Entry Log compatta ≤250 char (Patch rolling-window 13/5/2026 applicata da S8 in questo stesso run, primo effetto = questa entry)
- ✅ Rolling-window archive Log: 0 entry da spostare (tutte le 13 entry esistenti sono <14gg dal 2026-05-14)
