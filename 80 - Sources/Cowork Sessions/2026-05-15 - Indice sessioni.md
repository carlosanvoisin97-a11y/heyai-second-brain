---
type: index
date: 2026-05-15
created: 2026-05-15
updated: 2026-05-15
session_count: 8
---

# Indice sessioni Cowork — 2026-05-15

> Run cron `cowork-sessions-index` ven 15/5/2026 20:22 — finestra 24h (20:22 14/5 → 20:22 15/5). **8 sessioni indicizzate** (2 + 6 aggiunte nel run del 20:22 dopo le sessioni operative pomeridiane), 1 skippata per filtro rilevanza (pure recap senza decisioni/numeri/citazioni). Sessione 7 = call interna Carlo+Michele 51 min con decisioni vault-worthy multi-scheda (Achipont→Soolutions, Sito FuturItaly slot 19/5 + concept network, pricing EN €4.6K, invio proposta Achipont lun 18/5).

## Sessione 1 — Optimize investment proposal workflow (creazione skill `investment-proposal-drafting`)

- **ID**: `local_bfd29fa3-2096-4e65-abe7-a54d8a323f48`
- **Titolo originale**: Optimize investment proposal workflow
- **Quando**: 14/5/2026 sera tardo (lastActive entro la finestra 20:22 14/5 → 20:22 15/5)
- **Progetti toccati**: nessun progetto cliente — intervento meta-sistema (skill di scrittura)
- **Persone toccate**: nessuna

### Decisioni

- Promozione del workflow "Proposta di Investimento HeyAI" da template legacy `90 - Templates/Proposta Investimento.md` (7/5/2026, divergenze grafiche significative vs reference reale) a skill auto-loadable `.claude/skills/investment-proposal-drafting/SKILL.md` con obbligo Read prima di redigere proposte.
- Reference grafica autoritativa: file `Reference - Proposta Investimento Futuritaly Bandi Gare 2026.docx` (88 KB, salvato in `80 - Sources/Files/`) come singola fonte di verità per layout/header/footer/tipografia/palette.
- Archiviazione template legacy in `50 - Archive/System Snapshots/2026-05-14 - Template Proposta Investimento (deprecato).md` con frontmatter `aliases: [Proposta Investimento, "90 - Templates/Proposta Investimento"]` + banner deprecazione che documenta le 6 divergenze chiave.
- Quotazione Cliente legacy `90 - Templates/Quotazione Cliente.md` mantenuto valido (ambito diverso: progetti minori senza layout grafico).
- Prompt 01 (Senior Strategy Finance Consultant) + 02 (Audit Numerico Presentazione) mantenuti validi e richiamati esplicitamente dalla skill.

### Numeri / fatti nuovi

- Skill 387 righe in path `.claude/skills/investment-proposal-drafting/SKILL.md` (struttura 9 sezioni snella + 13 estesa, regole pricing assorbite, checklist anti-errori pre-consegna, workflow step-by-step, 7 pattern errore prima/dopo).
- Divergenze grafiche chiave catturate vs template legacy 7/5:
  - Footer: bordo top `#156082` + ornamento duotone + testo legale dati societari (NON numerazione pagine come diceva il template vecchio).
  - Titolo proposta: `#2B8C96` teal verde-acqua bold 20pt (NON `#074F6A`).
  - Heading 1: `#000000` nero bold 16pt (NON `#074F6A` teal scuro).
  - Font header/footer: Acre Medium (NON Aptos).
  - Margini: 2.50 top / 2.00 R-B-L (NON 2.12 uniformi).
  - Pattern grafico ricorrente: tabella mono-cella callout con bordi `#2B8C96` e fill `#E8F4F6`.
- Floor margine HeyAI €15K **non negoziabile** (regola assorbita dalla skill).
- Master Facts Sheet: NON toccato (numeri unchanged).

### Output prodotti

- File creato: `.claude/skills/investment-proposal-drafting/SKILL.md` (387 righe).
- File salvato: `80 - Sources/Files/Reference - Proposta Investimento Futuritaly Bandi Gare 2026.docx` (88 KB).
- File archiviato: `50 - Archive/System Snapshots/2026-05-14 - Template Proposta Investimento (deprecato).md` (con frontmatter aliases + banner deprecazione).
- File patchato live in sessione: `CLAUDE.md` §2.2 (nuova sezione "Proposte di Investimento → skill `investment-proposal-drafting`" con obbligo Read) + entry §14 changelog 14/5 sera.
- File patchato live in sessione: `40 - Resources/Prompts/00 - Index Prompt Library.md` (nota di redirect alla skill).
- File rimosso: `90 - Templates/Proposta Investimento.md` (assorbito nell'archive).
- Microsoft Lists: non toccata.

### Citazioni rilevanti

_(nessuna citazione testuale strategica nuova: sessione tecnica di refactoring workflow)_

### Task emersi

_(nessun task operativo nuovo: implementazione completata live nella sessione; il prossimo trigger naturale è la prima proposta prodotta con la skill — Carlo ha proposto come test la rigenerazione Achipoint v1 ma non l'ha schedulata)_

### Schede aggiornate da questo run di `cowork-sessions-index`

_(nessuna scheda progetto/persona toccata: l'intervento è meta-sistema. Tutte le propagazioni necessarie — CLAUDE.md §2.2/§14, prompt index, archive — erano già state eseguite live nella sessione)_

---

## Sessione 2 — Create scheduled MOC refresh task

- **ID**: `local_e0c64570-46ce-4a25-992f-5ede7b99f9a2`
- **Titolo originale**: Create scheduled MOC refresh task
- **Quando**: 15/5/2026 (lastActive entro la finestra)
- **Progetti toccati**: nessun progetto cliente — intervento meta-sistema (scheduled task)
- **Persone toccate**: nessuna

### Decisioni

- Creato nuovo scheduled task `moc-refresh` con cron `0 16 * * 6` (sabato 16:00, 1.5h prima del `weekly-review-interactive` delle 17:30 — finestra di audit preparatoria al weekly review).
- Funzione: audit MOC - Home → auto-patch counters/frontmatter, flag-only nuove entità → output in `99 - System/MOC Refresh Log.md`.
- Primo run schedulato: sabato 16/5/2026 alle 16:00. Triggerabile anche manualmente dal pannello Scheduled.

### Numeri / fatti nuovi

- CLAUDE.md §9 (tabella "Scheduled tasks attivi") aggiornata con nuova riga `moc-refresh | Sab 16:00 | Audit MOC - Home → auto-patch counters/frontmatter, flag-only nuove entità → 99 - System/MOC Refresh Log.md`.
- Lista scheduled task attivi aggiornata a: pm-digest-mattutino · cowork-sessions-index · vault-link-checker · crm-velocity · moc-refresh · weekly-review-interactive · system-consistency-check · dashboard-refresh-manual.

### Output prodotti

- Scheduled task creato via MCP: `moc-refresh`.
- File patchato live in sessione: `CLAUDE.md` §9 (nuova riga in tabella scheduled tasks).
- File che verrà creato al primo run: `99 - System/MOC Refresh Log.md` (atteso dom 16/5 16:00).

### Citazioni rilevanti

_(nessuna)_

### Task emersi

- Primo run manuale di `moc-refresh` consigliato dall'agente per verificare correttezza output prima di sabato 16:00. **Decisione di Carlo TBD** (non triggerato in sessione).

### Schede aggiornate da questo run di `cowork-sessions-index`

_(nessuna scheda progetto/persona toccata: CLAUDE.md §9 era già stato patchato live in sessione, fuori scope per questo task)_

---

---

## Sessione 3 — Fix four drift issues in system audit

- **ID**: `local_198c69a3-fa5d-49df-91c6-76d578b62123`
- **Titolo originale**: Fix four drift issues in system audit
- **Quando**: 15/5/2026 (post-pranzo)
- **Progetti toccati**: nessun progetto cliente — meta-sistema
- **Persone toccate**: nessuna

### Decisioni

- 4 drift dell'audit `system-consistency-check` 2026-05-15 risolti, tutti verificati con Read strutturale §15.quinquies.
- Frontmatter YAML duplicato (righe 6-10) rimosso dai 3 SKILL files: `pm-digest-mattutino`, `cowork-sessions-index`, `vault-link-checker`.
- CLAUDE.md §9 riga 199 e §14 riga 270 corretti `Sab 17:38 → Sab 17:30` (label `weekly-review-interactive` allineata al cron reale `30 17 * * 6`).

### Numeri / fatti nuovi

- Grep `17:38` su CLAUDE.md post-fix → K=0 (nessuna citazione storica residua nella rolling window 24-48h §14).
- §15.quater rispettato: i fix toccano solo i SKILL.md, non cron/prompt/enabled dello scheduler → nessun `update_scheduled_task` necessario. Stato runtime già allineato.

### Output prodotti

- File patchati: `pm-digest-mattutino/SKILL.md`, `cowork-sessions-index/SKILL.md`, `vault-link-checker/SKILL.md` (frontmatter dedup), `CLAUDE.md` (3 edit: §9, §14, frontmatter `updated: 2026-05-15`).
- File patchato: `99 - System/System Consistency Audit.md` con sezione `### Drift risolti 2026-05-15` (tabella 4-fix + note pre-flight + verifica strutturale).

### Citazioni rilevanti

_(nessuna)_

### Task emersi

- Atteso al prossimo run schedulato `system-consistency-check` (lun 18/5 7:30): **0 critici, 0 minori**.

### Schede aggiornate da questo run di `cowork-sessions-index`

_(nessuna scheda progetto/persona toccata: lavoro interamente su file di sistema, già propagato live in sessione)_

---

## Sessione 4 — Create Angelini Academy website (Mockup Brief Sito)

- **ID**: `local_66c1006d-f99e-4ac6-a003-d181898a7076`
- **Titolo originale**: Create Angelini Academy website
- **Quando**: 15/5/2026 (mattina)
- **Progetti toccati**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone toccate**: nessuna

### Decisioni

- Creato nuovo deliverable `Mockup Brief Sito` (~2.450 parole, 9 sezioni) come **riferimento attivo** per il pass a Claude Code, con audit landing sezione per sezione + sitemap target 10 pagine + spec snella per ogni pagina + note coerenza palette/tipografia (preservate, non ridefinite) + pipeline operativa Claude Code + hook Phase 2 AI Layer.
- Layer 4 della scheda `_Angelini Academy` ricomposto: Mockup Brief = riferimento attivo, Master Brief precedente = deprecato per stack sbagliato ma resta riserva per specs production.
- 5 idee wow grafiche definite (coerenti con animation pattern esistenti, no overhaul): Cross-OpCo Tracker scroll-driven sphere 3D · PersonaSelect peek-preview hover · Founder Stories scroll-jacking parallax 3 layer · Engaged Research biblioteca galleggiante orbitante chatbot AI-1 · Newsletter intent-driven contestuale per percorso.
- Mismatch persona 3 da chiudere prima del pass a Claude Code: "HR & L&D Director" (landing) vs "HR & business community" (Strategia) → proposta rinaming `HR & Business`, slug `/percorsi/hr-business`. Decisione Carlo TBD.

### Numeri / fatti nuovi

- Sitemap target 10 pagine: Home + 4 percorsi (Engaged Research + MBA Gateway + Founder Stories + ?) + Press + Chi Siamo + Contatti.
- Cascata §10bis applicata sulla scheda overview `_Angelini Academy` (Layer 4 ricomposto + Log entry).

### Output prodotti

- File creato: `20 - Projects/Futuritaly/Angelini Academy/Mockup Brief Sito.md`.
- File patchato: `_Angelini Academy.md` (Layer 4 ricomposto + Log entry).

### Citazioni rilevanti

_(nessuna citazione testuale strategica nuova)_

### Task emersi

- Decisione Carlo su rinaming persona 3 ("HR & Business") prima del pass a Claude Code — bloccante per slug + componenti + copy.

### Schede aggiornate da questo run di `cowork-sessions-index`

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] — wikilink a questo indice in `## Sessioni Cowork correlate`, audit metadata frontmatter aggiornato con sessionId di provenienza.

---

## Sessione 5 — Review emails and decide on suppliers (confronto 3 versioni docx Osservatorio)

- **ID**: `local_6e91bbc8-05ec-43bf-aa1d-15aa160b421d`
- **Titolo originale**: Review emails and decide on suppliers
- **Quando**: 15/5/2026 (mattina-pomeriggio)
- **Progetti toccati**: [[20 - Projects/Futuritaly/Osservatorio Strategico|Osservatorio Strategico]]
- **Persone toccate**: nessuna

### Decisioni

- Confronto strutturale 3 versioni docx Osservatorio FuturItaly: **`FINAL_1 2.docx` ≡ `def 2.docx`** (testualmente identici, 14.939 char, diff = 0 — solo metadati file diversi). **`vfinal 3.docx`** è una versione precedente (12.410 char, ~17% più corta, da archiviare).
- `FINAL_1 2.docx` proposta come **v1 di lavoro** in `20 - Projects/Futuritaly/HeyAI_Futuritaly_Proposta_Osservatorio_v1.docx`; `vfinal 3` proposta per archive in `50 - Archive/`. **Proposta operativa pendente conferma Carlo** (nessuna azione di file system eseguita in sessione senza OK).

### Numeri / fatti nuovi

- Numeri economici **identici** tra le 3 versioni (€38K MVP, €58K valore mercato, €150-900 costi cloud mensili, tranche). Differenze qualitative/contrattuali in FINAL/def vs vfinal (versione più matura):
  - "Mille Evoluzioni" rimosso.
  - "scoring di pertinenza" → "scoring di **coerenza**".
  - Copertura incentivi 90-95% (ottimista) → **85-90% (prudente)**.
  - ANAC accreditamento: "Da verificare*" → "**Confermato — FuturItaly accreditata**".
  - Manutenzione adeguativa API: 6 mesi → **3 mesi** (impegno ridotto HeyAI).
  - Tranche pagamento: 40/30/20/10 (4 tranche) → **45/30/25 (3 tranche, front-load)**.
  - Clausola non-circumvention: base → **+ retroattiva 18 mesi** con conguaglio HeyAI.
  - Sezione 12 rinominata "Impegni di FuturItaly" (era "Responsabilità HeyAI vs FuturItaly" suddivisa).
  - RBAC: 3 profili → **2 profili (admin FuturItaly + utente tenant)** più snello.

### Output prodotti

- Analisi diff prodotta in chat (no file scritti). Proposta operativa: caricare `FINAL_1 2.docx` come v1 di lavoro + archiviare `vfinal 3.docx`.
- **Azione pendente Carlo**: confermare la mossa file management.

### Citazioni rilevanti

_(nessuna)_

### Task emersi

- Confermare con Carlo: caricare `FINAL_1 2.docx` come v1 di lavoro + archiviare `vfinal 3.docx`. Poi modificare il prezzo €38K → ? (numero TBD chiusura allineamento Carlo).
- Valutare se reincorporare la sezione 12 "Responsabilità HeyAI vs FuturItaly" suddivisa per parte (più chiara di "Impegni di FuturItaly" da sola).

### Schede aggiornate da questo run di `cowork-sessions-index`

- [[20 - Projects/Futuritaly/Osservatorio Strategico|Osservatorio Strategico]] — wikilink a questo indice in `## Sessioni Cowork correlate`, audit metadata aggiornato (proposta file management pendente conferma Carlo, NON applicata in vault).

---

## Sessione 6 — Clarify meeting time from email (Elena Chiti call lun 18/5)

- **ID**: `local_6ac858a6-cb61-4f50-af7c-35651a5981d1`
- **Titolo originale**: Clarify meeting time from email
- **Quando**: 15/5/2026 (mattina, post mail Elena 09:02)
- **Progetti toccati**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone toccate**: [[60 - People/Elena Chiti|Elena Chiti]]

### Decisioni

- Ricostruzione thread email Elena Chiti per chiarire ambiguità "dalle 17": **call confermata lunedì 18/5**, non oggi. Elena chiede di **spostare l'orario della call dalle 15:00 alle 17:00 (o successivo)**. Stessa thread, stesso evento — non c'è nessuna call prevista oggi nella conversazione.
- Azione raccomandata: aggiornare invito Outlook lun 18/5 da 15:00 → 17:00 (o orario successivo) e rispondere confermando.

### Numeri / fatti nuovi

- Thread completa ricostruita: 14/5 10:58 Elena propone lun 18 11:30 → 14/5 19:37 Carlo: 11:30 no, dopo le 15 → 14/5 19:02 Elena: ok lun 18 ore 15 → 14/5 21:13 Elena accetta invito Outlook 15:00 → 15/5 09:02 Elena: posso solo dalle 17, fammi sapere.
- Mail referenced: Elena Chiti 15/5 09:02 + 14/5 19:02 (link Outlook in transcript).

### Output prodotti

- Risposta in chat con thread reconstruction + azione raccomandata. **Aggiornamento Outlook in capo a Carlo** (non eseguito automaticamente — richiede sua conferma e action sul calendario).

### Citazioni rilevanti

_(nessuna citazione testuale strategica nuova — fact factuale email)_

### Task emersi

- Carlo aggiorna invito Outlook lun 18/5 da 15:00 a 17:00 (o orario successivo) e risponde confermando ad Elena.

### Schede aggiornate da questo run di `cowork-sessions-index`

- [[60 - People/Elena Chiti|Elena Chiti]] — audit metadata frontmatter aggiornato + Sessioni Cowork correlate. **`next_touchpoint:` NON modificato** (resta `2026-05-18` data only): l'ora 17:00 proposta da Elena richiede aggiornamento Outlook + conferma Carlo che non sono avvenuti in sessione → cambio campo atomico ambiguo, lasciato a Carlo.

---

## Sessione 7 — Meeting recap call Carlo+Michele 15/5 (Angelini Academy · Futuritaly · Achipont)

- **ID**: `local_9912ed2f-67e2-4965-a04a-d6fc60b841e4`
- **Titolo originale**: Meeting recap: Angelini Academy, Future Italy, Archipont
- **Quando**: 15/5/2026 pomeriggio (call 51 min, ~15:12)
- **Progetti toccati**: [[20 - Projects/Achipont/Achipoint|Achipoint]] · [[20 - Projects/Studio Murolo/PresidIa|PresidIA]] · [[20 - Projects/Futuritaly/Osservatorio Strategico|Osservatorio Strategico]] · [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]] · [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone toccate**: [[60 - People/Michele Mattucci|Michele Mattucci]] · [[60 - People/Luigi (Achipont)|Luigi (Achipont)]] · [[60 - People/Federico Saladino (Soolutions)|Federico Saladino]] · [[60 - People/Simone Montanari (Soolutions)|Simone Montanari]] · [[60 - People/Andrea Pasquali|Andrea Pasquali]] · [[60 - People/Lavinia Ferrari|Lavinia Ferrari]] · [[60 - People/Claudia Bugno|Claudia Bugno]]

### Decisioni

**Achipont — fornitori e invio**:
- **Decisione fornitore Achipont**: va a **Soolutions** (Federico/Simone, €10K MVP base + €5.6K opzionali ≈ €15.6K). Pasquali (Jakala) **escluso** (€30K + floor bundle €50K non sostenibile). Silencio (€18K) tenuto libero come leva tattica per PresidIA + Osservatorio.
- **Decisione invio Proposta v5 + BC v1 + RL v2**: **lunedì 18/5**, NON oggi venerdì pomeriggio (Michele non ha riletto + Carlo finisce margini evolutive).
- Strategia di invio Michele→Luigi: WhatsApp anticipatorio + email con proposta in allegato + richiesta slot **giovedì 21/5** + telefonata serale per primo feedback informale.

**Futuritaly (sito istituzionale)**:
- Slot videocall FuturItaly **spostato** da lun 18/5 ore 14 → **martedì 19/5 ore 11 su Teams** (richiesta executive assistant Claudia Bugno).
- Posizionamento call: **touch point intermedio operativo, NO Claudia Bugno in copia**. Presentazione finale a Claudia solo quando il mockup è più avanzato.
- **Pricing sito EN chiuso a €4.6K** (era forchetta 4-5K nella proposta originale).
- Concept: Michele lavora sull'asse **network** (oltre l'anima strategica già esplorata). Regola: se i due assi vanno a cozzare nello stile, **prevale network**. Effetti 3D NON accantonati (rettifica live di Carlo): vanno integrati al concept network.
- Pre-rimettere mano al sito: rivedere insieme il concept Carlo+Michele lunedì pomeriggio o martedì.

**Angelini Academy — divisione lavoro**:
- Sito Angelini Academy: **lavoro per Carlo** (concept + struttura + Claude Code). A Michele resta solo la **parte operativa** (privacy, cookie, legale, blog).
- Concept narrato a Michele in call, validato da Michele ("top, siamo al 15, siamo top come tempi"). Pitch 31/5 confermato.
- Carry-over Carlo PM: sbloccare rate limit Claude + spinta su copy + branding (colori/font) + analisi competitor; rifare la quadra del documento strategia (oggi scheletro: integrare ricerche già fatte SEO/UX/competitor); trasformarlo in presentazione per Elena (call martedì 19/5 ore 15).

### Numeri / fatti nuovi

- Quotazioni incrociate definitive Achipont: Soolutions **€10K + €5.6K opz**; Silencio/Aegiscore **€18K**; Jakala (Pasquali) **€30K** (numero detto in call, supera la controproposta 11/5 a 26-28K).
- Pricing sito FuturItaly EN: **€4.6K** (era 4-5K forchetta).
- Stesso quadro riferimento PresidIA (per inclinazione Carlo): Silencio €35K · Soolutions €40K · Jakala €25K (su PresidIA: Carlo inclinato a Silencio per mantenere margine).

### Output prodotti

- Email recap Carlo→Michele riscritta in 3 iterazioni (v1 + v2 dopo feedback Carlo + v3 finale): formato pulito copia-incolla Outlook.
- Vault commit live in sessione (per agente §15): Log entries 15/5 su 5 schede progetto + 4+3+1 nuovi task aperti.

### Citazioni rilevanti

> "evidentemente hanno pensato che basta prendere le gare e schiaffarle dentro a un sistema che hanno già fatto"
> — **Michele Mattucci**, call 15/5 pomeriggio (commento su quotazione Soolutions Achipont "sorprendentemente bassa")

> "siamo nel buio"
> — **Michele Mattucci**, call 15/5 pomeriggio (su mancata risposta cliente Futuritaly + ipotesi "i piani alti hanno detto rifate il sito ma chi lo deve fare ha altre priorità")

> "perché ti dovrebbe dire di no?"
> — **Michele Mattucci**, call 15/5 pomeriggio (razionale di chiusura su Achipont: numeri tornano, situazione cliente solida, ROI 1-1.5 anni nel peggior caso)

### Task emersi

- Carlo: finalizza margini evolutive Proposta v5 Achipont entro lun 18/5 mattina.
- Carlo: verificare destinatario email Achipont (`produzione@achipont.it` generica vs Luigi diretto) — decidere al momento dell'invio.
- Michele: rilegge Proposta v5 nel weekend (caricata 14/5 sera, te l'eri persa).
- Michele: WhatsApp anticipatorio + telefonata serale Luigi/Gigi lun 18/5.
- Michele: brainstorming concept network Futuritaly lun 18/5 mattina.
- Michele: risposta a Executive Assistant FuturItaly con conferma slot mar 19/5 ore 11 Teams (no Claudia Bugno in copia, pre-mail Carlo in copia per validazione).
- Carlo: monitorare scenario fornitori PresidIA (decisione finale dipende da come si sviluppa Achipont con Soolutions).

### Schede aggiornate da questo run di `cowork-sessions-index`

Tutte le 5 schede sono **già state aggiornate live in sessione** dal vault commit dell'agente (§15): Log entries 15/5 con call recap completo, nuovi task aperti, decisioni fornitore. Questo run di `cowork-sessions-index` aggiunge solo:
- [[20 - Projects/Achipont/Achipoint|Achipoint]] — audit metadata frontmatter + wikilink a questo indice in `## Sessioni Cowork correlate`.
- [[20 - Projects/Studio Murolo/PresidIa|PresidIA]] — audit metadata + wikilink Sessioni correlate.
- [[20 - Projects/Futuritaly/Osservatorio Strategico|Osservatorio Strategico]] — audit metadata + wikilink Sessioni correlate.
- [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]] — audit metadata + wikilink Sessioni correlate.
- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] — audit metadata + wikilink Sessioni correlate.

**Master Facts Sheet**: NON toccato (decisioni fornitore ancora in chiusura, attendo conferma esplicita Carlo prima di promuovere quotazioni cliente Achipont definitive nel Master).

---

## Sessione 8 — Angelini Academy website copy brief (typography swap prompt v1.1)

- **ID**: `local_0b808c8f-b4ad-4ee9-8c6e-c110558730af`
- **Titolo originale**: Angelini Academy website copy brief
- **Quando**: 15/5/2026 sera (post call Michele)
- **Progetti toccati**: [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]]
- **Persone toccate**: nessuna

### Decisioni

- Aggiornato prompt Claude Code per typography swap a v1.1: premessa diversa (Merriweather + Barlow già installati, tocca solo il mapping; niente più import font o rimozione Fraunces/Manrope).
- Mapping table aggiornata: target ribaltato (Merriweather Light Italic display + Barlow body/UI) vs default brand book (Barlow titoli + Merriweather body).
- Step 1 = audit (grep dove sono usati i font oggi, prima di toccare i file). Carlo conferma piano di intervento, poi parte lo swap. Difesa contro override deliberato di Michele su componenti.
- Sezione "Casi ambigui da segnalare" in prompt: Claude Code si ferma e chiede invece di decidere su componenti con font hard-coded inline o gerarchie visive specifiche.

### Numeri / fatti nuovi

- Prompt path: `20 - Projects/Futuritaly/Angelini Academy/Prompt Claude Code - Typography swap.md`.
- Reference esterna: `Smoke test font - Variante C.html` come benchmark visivo del target.
- Difesa pitch: clausola brand book pag. 23 "esigenze compositive" (resta invariata).

### Output prodotti

- File patchato: `Prompt Claude Code - Typography swap.md` (v1.1).

### Citazioni rilevanti

_(nessuna)_

### Task emersi

_(nessuno: il prompt è pronto per essere passato a Claude Code dopo conferma Carlo del piano di intervento allo step 1)_

### Schede aggiornate da questo run di `cowork-sessions-index`

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] — wikilink a questo indice in `## Sessioni Cowork correlate` (deliverable 15/5 sera).

---

## Sessioni skippate per filtro rilevanza

- `local_f9a40426-3d7a-4a34-b6fe-aa45034c2612` "Recap of open tasks" (15/5 mattina presto) — pura lettura strutturata dei task aperti in cluster operativi senza decisioni nuove, numeri nuovi, citazioni nuove o output prodotti.
- `local_06ba1191-7e59-415e-9141-f09879afbd93` "Moc refresh" (15/5) — esecuzione scheduled task `moc-refresh` (primo run manuale post creazione Sessione 2). Output va nel proprio log dedicato (`MOC Refresh Log.md`), non in questo indice.
- `local_d459044d-dfc4-4672-9e3e-1383aa7202e8` "Moc refresh" (15/5) — secondo trigger scheduled task. Stesso filtro.
- `local_c94f3347-0f4e-467a-abcf-dc7befe066d7` "Pm digest mattutino" (15/5 8:00) — esecuzione scheduled task quotidiana, output in [[99 - System/Digest Log]].
- `local_bd3327b1-a404-4838-bb0d-cbc7ba8ebef0` "System consistency check" (15/5) — esecuzione scheduled task on-demand. Trigger naturale di Sessione 3 sopra.
- `local_55f3bd2d-0724-4efc-8e07-687ab4f6f1a7` "Vault link checker" (15/5) — esecuzione scheduled task on-demand.
- `local_1707c4cf-039a-4751-9d2a-4e484bd077ab` "Dashboard refresh manual" (15/5) — esecuzione scheduled task.
- `local_a35e26f1-9071-46b2-a1f3-a21941095edb` "Cowork sessions index" — esecuzione precedente di questo stesso task (skip per evitare loop).

## ⚠️ Da triagiare

_(nessuna)_

### Conflict scan cross-sessione

_(0 conflitti rilevati. Sessione 4 e Sessione 7 e Sessione 8 toccano tutte e tre `_Angelini Academy.md` ma con delta non sovrapposti: Sessione 4 = creazione Mockup Brief (Layer 4); Sessione 7 = Log entry call Michele 15/5 pomeriggio (divisione lavoro Michele); Sessione 8 = creazione Prompt Typography swap. Nessun campo atomico contestato. Sessione 5 propone modifiche file su Osservatorio (caricare FINAL_1 2 come v1 + archive vfinal 3) ma è in attesa conferma Carlo, NON applicata in vault — quindi nessun conflitto con il Log entry 15/5 della stessa scheda dalla Sessione 7.)_

### Checkbox reconciliation

- N task chiusi auto: **0**
- N task annullati auto: **0**
- N task in ⚠️ Da triagiare: **0**
- N task aperti scansionati totali: ~80 sulle 5 schede toccate. Nessuna chiusura inequivocabile triggerata dalla nuova prosa di questo run: le decisioni della Sessione 7 sono FORWARD-LOOKING (invio Achipont lunedì 18/5, slot mar 19/5, brainstorming Michele lunedì) e NON chiudono task aperti — al contrario, ne aprono di nuovi (Carlo finalizza margini, Michele rilegge nel weekend, Michele WhatsApp+chiamata Luigi). I nuovi task sono già stati aggiunti live in sessione dal vault commit dell'agente (§15) sulle schede Achipont (4 task #p1/#p2) + Sito Futuritaly (3 task #p1).

---

_Indice generato automaticamente da `cowork-sessions-index` cron 20:22 del 2026-05-15 (run unico finestra 24h). 8 sessioni indicizzate, 8 skippate per filtri (1 lettura/audit + 7 scheduled task)._
