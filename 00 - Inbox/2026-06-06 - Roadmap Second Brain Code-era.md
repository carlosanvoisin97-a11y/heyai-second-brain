---
type: roadmap
created: 2026-06-06
updated: 2026-06-06
status: proposta (in review)
tags: [system, second-brain, code-migration]
---

# 🗺️ Roadmap Second Brain — migrazione all'era Claude Code

> Documento-mappa richiesto da Carlo il **6/6/2026**. Decompone in **fronti** il consolidamento + ottimizzazione del second brain dopo il passaggio da Cowork a Claude Code.
>
> **Stato: PROPOSTA da rivedere.** Niente esecuzione finché Carlo non approva sequenza e [§5 Decisioni aperte](#5-decisioni-che-servono-da-te-bloccanti). Metodo di lavoro: brainstorming → *questo roadmap* → per ogni fronte uno **spec** → **piano** (`writing-plans`) → **esecuzione** (`executing-plans` + subagent dove serve).

---

## 1. Sintesi stato attuale — recap verificato (6/6)

Verificato leggendo vault, `git`, i due scheduler (Cowork + Code), Open Tasks/Questions, gli audit storici e le sessioni indicizzate.

### ✅ In salute (non rifare)
- **KB catturata fino a ieri.** `80 - Sources/Cowork Sessions/code-recap/` contiene ~60 recap **dal 21/5 al 5/6** + indici giornalieri Code (`Indice code sessions` 30/5, 31/5, 1/6, 5/6). Le chat claude.ai erano già esportate il 30/4 (140 file); le sessioni Cowork indicizzate 6→28/5. **Non serve ri-estrarre nulla**: serve una *verifica di completezza*.
- **Vault già ripulito due volte.** [[99 - System/Vault Architecture Audit 2026-05-13]] eseguito (Inbox 30→8, System 25→15, `70 - Meetings/` eliminata) + Fronti 1–3 il 29/5 (reconcile 41 task, refactor `CLAUDE.md` M3, hardening dual-scheduler + hook staleness). Il vault **non è "sporco"**.
- **Skill operative di base.** 4 skill di progetto (`email-drafting`, `investment-proposal-drafting`, `transcript-processing`, `vault-live-protocol`) + `recap` + `code-sessions-index` che indicizza le sessioni Code. Funzionano.

### 🔴 Rotto / a rischio (qui sta il lavoro vero)
- **Battito automazioni fermo.** PM Digest ultima esecuzione **27/5** → ~10 giorni senza daily note. Causa strutturale (non un bug): gli 11 task vivono nello scheduler **Cowork**, che parte solo con l'app aperta; lavorando in Code non partono. In Code è portato **1 solo** task (`code-sessions-index`). [[99 - System/Digest Log]] lo documenta il 29/5.
- **Git non al passo + nessun remote.** `main` ha **~2 settimane di modifiche non committate** (schede progetto aggiornate in sessioni Code, cleanup inbox con deletion, file nuovi come `code-recap/`, `Code Sessions Log`, daily 25–27/5). L'ultimo commit è del 30/5. **Nessun remote GitHub** → niente backup off-site e — soprattutto — **niente automazioni cloud** (girano clonando un repo GitHub). Rischio concreto di perdere lavoro non versionato.
- **~30 worktree accumulate.** `git worktree list` mostra ~30 worktree (pattern `aa-wt-*`, `claude-wt-*`) ferme a 1–2 commit, presumibilmente residui di sessioni Code mai mergeate/pulite. Rumore e rischio di confusione su "dov'è la verità".

### 🟡 Da chiarire con te
- **`ruflo` installato** (marketplace da 30+ plugin: `ruflo-loop-workers`, `ruflo-knowledge-graph`, `ruflo-rag-memory`, `ruflo-swarm`, `ruflo-autopilot`…). Intenzionale (vuoi usarlo) o esplorativo da triagiare? Pesa sul contesto e può confondere.
- **"Skill Insight" + skill custom tue.** Hai citato cose imparate dopo aver usato la skill *Insight* e l'idea di creare skill custom: contenuto **TBD — da riempire insieme** (non lo invento).

---

## 2. Il metodo (analizza → pulisci → ottimizza): confermato, con un riordino

Il tuo metodo è giusto come spina dorsale. Due correzioni dai dati:

1. **L'"analisi" è di fatto già fatta** (due audit + questa ricognizione). Non spendiamoci un terzo giro: partiamo a valle.
2. **Il vincolo non è la pulizia, è l'infrastruttura.** Il sistema ha (a) il *battito fermo* e (b) la *base git non solida + spaccatura su due runtime*. Finché non si stabilizza la base, ogni pulizia "marcisce" (lo stato drifta ogni giorno senza digest) e l'ottimizzazione poggia sul vuoto.

→ Sequenza effettiva: **stabilizza fondamenta + battito → riconcilia stato → ottimizza/automatizza il resto.**

---

## 3. I fronti

Ogni fronte avrà il suo ciclo **spec → piano → esecuzione**. Effort indicativo: S (≤mezza sessione), M (1–2 sessioni), L (3+).

### F0 — Fondamenta git *(NUOVO, prerequisito)* · 🔴 · M
**Problema:** main con 2 settimane non committate, zero remote, ~30 worktree stale.
**Cosa comporta:** (a) triage + commit del working tree di `main` rivedendo il diff (le deletion inbox sono cleanup intenzionale da audit, le modifiche schede sono lavoro vero — vanno preservate, non `git add -A` alla cieca); (b) aggiungere un **remote GitHub privato** + primo push (backup + abilitatore cloud); (c) censire le ~30 worktree, mergeare ciò che ha valore, **prunare** il resto; (d) fissare il workflow **worktree ↔ main ↔ Obsidian** (Obsidian vede solo `main`: il lavoro in worktree è invisibile finché non rientra).
**Sblocca:** F1 (cloud), F2, e protegge il lavoro a rischio.
**Decisioni aperte:** remote GitHub sì/no (§5.1); posso committare il backlog dopo review (§5.5); posso prunare le worktree (§5.4).

### F1 — Runtime automazioni (il battito) · 🔴 · L
**Problema:** riportare in vita le 11 routine Cowork nell'era Code, in modo affidabile.
**Approccio (decision tree dall'analisi tecnica):**
- **Audit pure-vault** (link-checker, moc-refresh, system-consistency-check, weekly-review prep, indicizzazioni) → **routine cloud** su repo GitHub: girano *davvero* unattended, anche a Mac spento. *Richiede F0 (remote).*
- **PM Digest** (legge Outlook + calendario + SharePoint via MCP) → due strade: **(a) task locale** Code/Cowork che eredita l'auth dei connettori da claude.ai (ma serve app aperta), oppure **(b) routine cloud** con connettori M365 **pre-autenticati su claude.ai** (unattended ma fragile: se il token scade, il run headless fallisce, niente re-login browser).
**Raccomandazione:** ibrido → audit in cloud, PM Digest come task locale "best-effort" + hook staleness già attivo come rete di sicurezza, valutando il cloud per il digest solo dopo aver testato la tenuta dell'auth M365.
**Decisioni aperte:** unattended vero vs "apri app la mattina" (§5.2); autenticare M365 su claude.ai (§5.3); triage `ruflo` per eventuale uso dei suoi cron/loop worker (§5.7).

### F2 — Reconcile stato + completezza KB · 🟠 · M
**Problema:** [[99 - System/Open Tasks]] **congelato al 27/5** (il pitch Angelini del 31/5 è ormai passato → molti task stale/da chiudere); fatti delle sessioni Code 22/5→6/6 non ancora propagati alle schede (la cascata Code è solo append-only sicuro su `## Log`, numeri/stato restano "proposta").
**Cosa comporta:** (a) certificare che la KB sia completa fino a oggi (gap-check sui recap); (b) bonifica Open Tasks (chiudere il chiuso, archiviare lo scaduto); (c) far girare il primo PM Digest "vero" su base pulita.
**Dipendenze:** meglio dopo F1 (digest attivo) e F0 (commit).

### F3 — Skill custom + tooling · 🟢 · L
**Problema:** non esiste una skill "salute vault" né una "KB grezza → vault" generica; la logica di audit è sparsa in 3 task Cowork.
**Cosa comporta:** (a) **skill `vault-health`** (consolida `vault-link-checker` + `system-consistency-check` + `moc-refresh` in un'unica skill Code invocabile/schedulabile); (b) skill **ingest "raw → vault"** (oltre alle trascrizioni che già copre `transcript-processing`); (c) **triage `ruflo`** (tenere/disattivare); (d) raccogliere cosa ti ha insegnato *Insight* + le skill custom che hai in mente (§5.6).
**Strumenti:** `skill-creator` + superpowers già disponibili.

### F4 — Organizzazione sessioni/progetti in Code · 🟢 · M
**Problema:** workflow Code ancora informale (le ~30 worktree lo dimostrano); manca una convenzione su come le sessioni si organizzano e rientrano nel vault.
**Cosa comporta:** convenzione worktree (1 per task, naming, lifecycle, pruning), eventuale struttura a cartelle per progetto/area, e come `recap`/`code-sessions-index` alimentano in modo pulito il vault. *Overlap con F0 (worktree cleanup).*

### F5 — `CLAUDE.md` per l'era Code-first · 🟢 · S/M
**Problema:** `CLAUDE.md` è scritto "per ogni chat **Cowork**" (incipit, §9/§9bis, riferimenti app). In un mondo Code-first va riallineato senza perdere le regole dure (§13 riservatezze, §15 vault-live, §5 numeri).
**Cosa comporta:** patch mirata di routing/§9/§incipit + integrazione del workflow git/worktree deciso in F0/F4. Da fare **per ultimo o incrementale**, perché dipende dalle scelte degli altri fronti.

### F6 — Cadenza di ottimizzazione ricorrente · 🟢 · S
**Problema:** l'ottimizzazione del second brain è stata finora a sprint ("Fronti"); serve un meta-loop leggero che la renda continua.
**Cosa comporta:** una weekly-review *del sistema stesso* (non solo dei progetti) — magari come routine cloud che produce un prep-doc con le anomalie della settimana.

---

## 4. Sequenza raccomandata

```
F0 Fondamenta git ──► F1 Automazioni ──► F2 Reconcile ──► F3 Skill ──► F4 Sessioni ──► F6 Cadenza
   (prerequisito)       (il battito)      (stato pulito)   (tooling)    (workflow)     (meta-loop)
                                                                  └─ F5 CLAUDE.md: incrementale, chiude a valle
```

- **F0 prima di tutto**: è prerequisito tecnico (remote per il cloud) e mette in sicurezza il lavoro non committato.
- **F1 subito dopo**: ogni giorno senza digest lo stato drifta.
- **F3 e F5 possono parallelizzarsi** (con subagent) una volta che F0/F1 sono stabili.
- Se preferisci un *quick win* psicologico prima di F0, l'unica cosa sensata da anticipare è il **commit di sicurezza** del working tree (sottoinsieme di F0).

---

## 5. Decisioni che servono da te (bloccanti per partire)

1. **Remote GitHub** — ok ad aggiungere un remote **privato** al vault (backup + abilitatore automazioni cloud)? È un repo con dati sensibili clienti → privato obbligatorio.
2. **Runtime automazioni** — vuoi *unattended vero* (cloud, richiede #1 + #3) o accetti "apro l'app la mattina"? O ibrido (raccomandato)?
3. **Connettori M365 su claude.ai** — disposto ad autenticare Outlook/SharePoint su *claude.ai → Settings → Connectors* (serve sia per task locali sia per cloud)?
4. **Le ~30 worktree** — posso censirle e prunare quelle senza lavoro unico (dopo verifica)?
5. **Backlog non committato in `main`** — confermi che posso committarlo dopo averti mostrato il diff? Le deletion inbox sono cleanup intenzionale?
6. **"Insight" + skill custom** — cosa ti ha insegnato Insight e quali skill custom hai in mente? (riempiamo F3 insieme)
7. **`ruflo`** — installato di proposito o da triagiare?

---

## 6. Come lavoreremo (per ogni fronte)

1. **Spec** (brainstorming mirato sul fronte) → doc in `00 - Inbox/` o `99 - System/`.
2. **Piano** con `writing-plans` → checklist eseguibile.
3. **Esecuzione** con `executing-plans`; dove i task sono indipendenti, **subagent in parallelo** (`subagent-driven-development`).
4. **Verifica strutturale** (CLAUDE.md §15.quinquies) + **vault commit** esplicito.

> Prossimo passo proposto: rispondere alle **Decisioni §5** (almeno #1, #2, #5 che sbloccano F0+F1), poi apro lo **spec di F0**.

---

## 7 — Aggiornamento 6/6: esiti ricerca + scoperta critica

> Decisioni Carlo recepite: GitHub privato ✅ · runtime ibrido ✅ · M365 ✅ · pulizia worktree ✅ · commit backlog ✅. Aggiunte 2 **regole operative permanenti** (§9). Sotto: la scoperta che riordina F0, il metodo KB Solidity, e gli esiti dei 3 filoni di ricerca. Si appoggia e **estende** [[2026-06-02 - Audit Toolstack — skill, plugin, connettori vs lavoro|Audit Toolstack 2/6]] (non lo duplica).

### 🔴 Scoperta critica — la KB in `main` è stale sul progetto più caldo
Dal `Code Sessions Log` + worktree audit: **fatti vault-worthy importanti sono intrappolati in worktree NON mergeate**, fuori da `main`:
- **Esito pitch Angelini 5/6** — l'indexer lo segna come *soft-defer / "build 2027"* (un concorrente avrebbe già vinto social+restyling+editoriale+stile): vive SOLO nella worktree `wizardly-rhodes-ed46ae`. `_Angelini Academy` + Master Facts **non lo riflettono**. *(Da confermare con Carlo: stato reale del deal.)*
- Nota performance 1/6 + Carmen (NOT) → non nel main vault (worktree `0593b7a7`).
- Pricing Angelini **€48.500** (working state) + "offerta 4 pilastri" → flaggati dall'indexer come *proposta non applicata*.

**Conseguenza** = risposta concreta alla domanda "la KB è solida?": **oggi no** — non per cattiva distillazione, ma perché ~2 settimane di decisioni vivono fuori da `main` (worktree + uncommitted + cascata Code volutamente solo-append). → **F0 deve PRIMA *raccogliere* (harvest) i fatti dalle worktree, POI committare/prunare.** Prune cieco = perdita dell'esito Angelini.

### 🧪 KB Solidity Report — il metodo
Una KB è solida se **completa** + **fedele**. Certificazione:
1. **Coverage diff (completezza)** — set-difference tra fonti grezze (export claude.ai 30/4 · transcript Cowork `local_*` · jsonl Code · recap/indici) e ciò che è atterrato nelle schede → lista fonti senza rappresentazione. *Tool*: `obsidian-cli orphans/unresolved` + grep.
2. **Back-tracing avversariale (fedeltà)** — campione dei **fatti ad alto rischio** (numeri, prezzi, stati contrattuali, esiti deal) ri-verificati contro la trascrizione sorgente da un agente istruito a *confutare*. Priorità ai fatti costosi se sbagliati (es. "contratti NOT firmati"→non firmati, già corretto 21/5; esito Angelini; €48,5K). Include i "proposta non applicata" accumulati da `code-sessions-index`.
3. **Contraddizioni cross-schede** — `wiki-lint` (orfani + dead link + contraddizioni).
4. **Output** → `99 - System/KB Solidity Report` con coverage% + lista fatti non verificati/contraddetti. È la **prima esecuzione di F2**.

### ⚙️ ruflo — verdetto: spegnere (azione immediata, basso rischio)
Backend `@claude-flow` **non installato** → i tool non si caricano, ma `ruflo-core` piazza hook su **ogni Bash/Write/Edit** che falliscono in silenzio = solo overhead sul vault. I 30+ plugin sono SWE/ML/trading/IoT → fuori scope PM. **Azione**: disattivare gli 11 plugin ruflo attivi (via `/plugin` o `enabledPlugins` in `~/.claude/settings.json`, con la skill `update-config`); tenere disabilitato `ruflo-plugin-creator` (utile solo se un giorno impacchetti le tue skill). Non era nell'Audit 6/2 → installato dopo.

### 🧩 Skill Obsidian/PKM — adopt-list (estende l'Audit 6/2)
- **`wiki-lint`** (cherry-pick da `claude-obsidian`, AgriciDaniel — stesso autore del tuo `claude-seo`): orfani + dead link + **contraddizioni**. NON adottare l'intero sistema (impone struttura wiki ≠ PARA) — testare su worktree. È il motore mancante per la KB-solidity.
- **`obsidian-cli orphans/unresolved`** — già installato, rinforza `vault-link-checker`.
- **`episodic-memory`** — già installato, accenderne l'uso (recupero cross-sessione, utile proprio per casi come l'harvest Angelini).
- **NON** `obsidian-second-brain` (note auto-riscriventi → contro §15 append-only).

### 💡 Insight — cos'è e cosa ottimizzare
"Insight" = sessione **11/5 "second brain best practices"** (10 raccomandazioni PKM). **Applicate**: weekly review, CRM velocity, atomic notes, retro-pop 15 schede, inbox aging. **Aperte da valutare**: pattern-scan "vault generativo", MOC tematici, Progressive Summarization L4, resurfacing, tagging concettuale, distill-before-archive. → confluiscono in F6 (cadenza) + F3 (skill). *(Carlo conferma se è questa.)*

### 📌 §9 — Regole operative permanenti (da scrivere in CLAUDE.md)
- **R1 Skill-first** — prima di ogni task, scegliere e usare in autonomia le skill più adatte per eseguirlo al meglio.
- **R2 Explain-after** — a fine lavoro, spiegare *cosa* è stato fatto e *come* si usa.

### Sequenza riveduta
`F0 (harvest worktree → commit → remote → prune)` → `F2 (KB Solidity Report)` → `F1 (automazioni)` → `F3 (skill: wiki-lint/obsidian-cli/episodic + ruflo off)` → `F4 → F6` · `F5 CLAUDE.md incrementale (incl. R1/R2)`. *Nota: F2 sale prima di F1 — prima certifichiamo la base, poi ci automatizziamo sopra.*

---

## 8 — F4 chiuso (9/6/2026)

**F4 — Organizzazione sessioni/worktree Code: ✅ DONE.** Convenzione decisa via brainstorming + approvazione Carlo 9/6:
- **Workflow vault = solo Code locale → commit su `main`** via `git -C ~/claude` (mai sul branch della worktree). È ciò che evita il leak.
- **claude.ai Code = evitare per il vault** (branca su `origin/claude/*` → non rientra in main): era la causa dei **3 commit stranded del 9/6** (Achipont/Soolutions, poi harvested). Se usato → harvest immediato.
- **Worktree = usa-e-getta**; igiene **flag-only** in `code-sessions-index` (segnala worktree stale + branch `origin/claude/*` stray-da-harvestare con comandi pronti; non rimuove in automatico).
- Convenzione operativa in **CLAUDE.md §9ter**.

**Stato fronti 9/6**: F0✅ F1✅ F2✅ F3🔶 (obsidian-cli sbloccato 9/6; restano vault-health + wiki-lint) F4✅ F5✅ **F6❌** (prossimo: meta-loop weekly *del sistema*). Aperti non-fronte: decisioni §6 + (opz) 2° runtime cloud per failover digest a Mac spento.
