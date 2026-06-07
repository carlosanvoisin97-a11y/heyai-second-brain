---
type: handover
created: 2026-06-07
tags: [system, handover, F1, sync, QA]
aliases: [Handover chiusura F1, Handover sync QA 7-6]
---

# 🔁 HANDOVER → sessione fresca: chiusura F1 (sync vault + QA + cattura Code)

> Prodotto a fine sessione `ecstatic-goldstine` (7/6, molto lunga). Ha completato F2 + gran parte di F1, ma il **loop di sync non è chiuso** e il QA ha trovato difetti reali. Questo handover li passa, **onestamente**, alla sessione fresca.
> Leggi in ordine: `CLAUDE.md` → questo → `99 - System/KB Solidity Report` → `99 - System/Routines/_README`.
> Regola: lavora su **`main`** (`/Users/carlosanvoisin/claude` = cartella Obsidian). MAI `git add -A`. Push dall'agente: **funziona** (verificato). §13/§15. Numeri `[PROPOSTA]` = da confermare.

## ✅ PROGRESSO — sessione 7/6 sera (Steps 1-3 chiusi · gap #1-#4 + #6 + #7 risolti)

> Eseguito dalla sessione successiva a questo handover (su `main`, in parallelo a Carlo + plugin sync). Aperti: **Step 4** (cattura Code, gap #5) + Step 5-6 + decisioni Carlo §6.

- **Step 1 — Sync (gap #1+#7) ✅ PROVATO 2 direzioni**: plugin Obsidian Git v2.38.3 (commit-and-sync + auto-pull 10', `data.json` gitignorato), `.gitignore` blindato (niente segreti plugin su GitHub). Push (agent→GitHub) e pull (digest cloud→Obsidian) provati end-to-end. → [[99 - System/Routines/_README|_README]] §Sync.
- **Step 2 — Routine cloud (gap #2+#6) ✅ core PROVATO**: 5 routine **pilotabili da Code** (tool `RemoteTrigger`, non solo browser). Provate **2/5**: PM Digest **con M365 headless** + vault-link-checker — **entrambe push diretto su `main`** (niente bug branch orfano: il `## Push finale` vive nei file routine). Convergenza con 4 writer paralleli OK. Restano moc-refresh, crm-velocity, weekly-review (pattern identico). → _README §Step 2 + trigger ID.
- **Step 3 — QA branch (gap #3+#4) ✅ FATTO**: −27 branch `claude/*` stale (0 commit unici) −6 worktree residue (verificate; funny = file ridondanti già in main). Restano solo `main` + 2 worktree attive (`sleepy-lamport` Carlo, `xenodochial` sessione). **`add-claude-github-actions` cancellato da origin** (workflow @claude/PR: inutile per repo-vault, non serve alle routine — decisione Carlo 7/6).
- **Hardening anti-branch (extra, richiesta Carlo)** ✅: audit di tutto il sistema (routine/CLAUDE.md/hook/scheduler) → niente crea branch/duplicati; **5 prompt trigger cloud resi espliciti** "push su main" + **nuova `CLAUDE.md §9ter`** (disciplina git Code-first). Dettaglio _README §Step 2.
- **Step 4 — Cattura Code (gap #5) ✅ FATTO 8/6**: 16 sessioni grosse non indicizzate (28/5→6/6) recuperate via 16 subagent paralleli → 16 recap in `code-recap/`. **Nessuna knowledge persa** (contenuto già nelle schede via cascata live; mancavano solo i recap-indice — ri-conferma KB Solidity F2). Hardening: **catch-up mode self-heal** applicato al SKILL `code-sessions-index` (ogni run recupera le sessioni fuori-finestra; hook on-session-end non necessario — rationale nel doc). Dettaglio: [[2026-06-07 - Step 4 — Backlog sessioni Code non indicizzate]] §ESEGUITO. **Aperti**: Step 5 (doc closure: CLAUDE.md §9 tabella "chi gira dove" + F5 incipit Code-first), poi F3/F4/F6. + PROPOSTA da §6 ancora pending.

## 0. 📋 PROMPT DA INCOLLARE nella nuova sessione

```
Riprendiamo l'ottimizzazione del second brain (era Claude Code). Leggi in quest'ordine:
(1) CLAUDE.md, (2) "00 - Inbox/2026-06-07 - HANDOVER — chiusura F1 (sync vault + QA + cattura
Code).md" — è la mappa completa, il §8 ha il cross-check di TUTTO ciò che resta, (3) "99 -
System/KB Solidity Report", (4) "99 - System/Routines/_README"; per il "dopo" (5) "00 - Inbox/
2026-06-06 - Roadmap Second Brain Code-era" + "99 - System/Open Questions". Con questi hai tutto.

METODO (Roadmap §6): per ogni fronte → spec → piano (skill writing-plans) → esecuzione (skill
executing-plans; subagent in parallelo dove i task sono indipendenti, skill dispatching-parallel-
agents) → verifica strutturale (CLAUDE.md §15.quinquies) → vault commit esplicito. R1 skill-first:
prima di ogni task invoca la skill giusta e annuncia "Using [skill]"; in dubbio, invoca. R2
explain-after: a fine lavoro spiega cosa hai fatto e come si usa.

SKILL da usare dove pertinenti: vault-live-protocol (ogni commit vault non banale) · update-config
(hook/settings, es. hook on-session-end per irrobustire la cattura sessioni Code) · schedule
(routine/cron) · skill-creator + brainstorming (per costruire le skill di F3: vault-health e
raw→vault) · obsidian-cli (orphans/unresolved, base per wiki-lint) · pm-method (deliverable/PM) ·
verify.

ORDINE DI LAVORO (handover §5): 1) SYNC GitHub↔Obsidian — plugin Obsidian Git (Carlo installa, tu
configuri .obsidian/plugins/obsidian-git/data.json: auto-pull + commit-and-sync ~10 min) → chiude
il buco principale; 2) "Run now" sulle 5 routine Remota per provarle end-to-end (specie pm-digest
con M365); 3) QA branch (rivedi origin/add-claude-github-actions-…, pulisci i 33 branch claude/*
verificati safe + worktree residue); 4) CATTURA sessioni Code — catch-up del backlog E verifica
quali sessioni STORICHE non sono mai state indicizzate (= knowledge persa) + irrobustisci; 5)
chiusura doc (CLAUDE.md §9 tabella "chi gira dove" + F5 incipit Code-first); poi F3 → F4 → F6
(vedi §8 per il dettaglio completo, incl. skill raw→vault, le 6 raccomandazioni "Insight",
git filter-repo).

REGOLE DURE: lavora su main (/Users/carlosanvoisin/claude = la cartella di Obsidian, NON in
worktree); MAI git add -A (commit per file/gruppi dopo review); push dall'agente OK ma fai
git pull PRIMA di lavorare (Carlo edita in sessioni parallele → rischio divergenza); §13
riservatezze (mai fornitori al cliente); §15 append-only; numeri/prezzi/stati contrattuali =
PROPOSTA da confermare, mai auto-applicati; una nuova automazione NON è "fatta" finché il suo
output non ATTERRA in Obsidian ed è PROVATA end-to-end, non solo creata.

Parti dallo step 1 (sync): prima spiegami il piano, poi esegui.
```

## 1. Stato (verità git)
- `main` su `/Users/carlosanvoisin/claude`, **in sync** con `origin` (GitHub privato `heyai-second-brain`).
- ✅ **F0** (git+remote+backup) · ✅ **F2** (Fasi 0-6: KB ingerita, deduplicata, bonificata, certificata — vedi KB Solidity Report) · 🟡 **F1** (routine create ma loop sync non chiuso).
- ✅ Tutto il lavoro di ottimizzazione **è nel vault** (Obsidian lo vede ora) + pushato. **PII grezzi gitignored — NON su GitHub (verificato `git ls-files`).**

## 2. ✅ Verificato OK (QA 7/6) — niente panico qui
- **Nessun lavoro perso**: i **33 branch `claude/*`** NON hanno commit unici fuori da main (sweep `git log main..<branch>` = 0 ovunque). Sono solo clutter.
- Le 3 worktree residue (`quizzical`, `funny`, `blissful`) verificate **pulite** (file non committati di funny = già in main).
- PII safe · routine files normalizzati (path relativi) · main in sync.

## 3. 🔴 Difetti reali da chiudere (QA 7/6)
1. **Sync GitHub→Obsidian MANCANTE** (il buco principale). Le routine cloud girano sui server e pushano su GitHub, ma **senza auto-pull non tornano in Obsidian**. → installare **plugin Obsidian Git** (Community plugins) + configurare auto-pull/commit/push ~10 min. Config: `.obsidian/plugins/obsidian-git/data.json`. *Risolve anche il rischio divergenza (#7).*
2. **Bug routine push su branch orfani** → **già FIXATO da Carlo** (commit `861859f`, prompt routine ora "push su main"). Verificare che i prossimi run lo rispettino.
3. **`origin/add-claude-github-actions-1780844688300`**: branch dell'integrazione Claude↔GitHub (setup workflow per far girare le routine sul repo) → rivedere: serve mergiarlo? è ciò che fa funzionare le Remota?
4. **33 branch `claude/*` stale** (clutter, 0 commit unici → safe). Pulizia: rimuovere worktree residue poi `git branch -D` i branch vuoti. NON toccare il branch della sessione attiva.
5. **🔴 Cattura sessioni Code fragile — RISCHIO KNOWLEDGE PERSA**: `code-sessions-index` è **LOCALE per forza** (legge `~/.claude/projects/*.jsonl`, file sul Mac NON nel repo → un agente cloud non li vede) + best-effort (gira 20:35 solo ad app aperta). **Non solo il backlog di oggi: possibili sessioni STORICHE mai indicizzate** = knowledge che NON è mai arrivata nel vault (precedente concreto: il "Recovery Code sessions backlog" manuale del 28/5 → è già successo). Dati QA 7/6: **103 JSONL totali vs 59 recap** (parte sono altri progetti `code-angelini-academy`/Desktop, ma il delta delle sessioni-vault va verificato una per una). → **(1) Audit cattura**: per ogni `.jsonl` del progetto vault, verificare se esiste il recap corrispondente in `80 - Sources/Cowork Sessions/code-recap/` → lista delle **sessioni perse** → indicizzarle (recupero come il 28/5). **(2) Irrobustire**: spostare la cattura da cron-locale-best-effort a un **hook on-session-end** (skill `update-config`), così ogni sessione viene catturata alla chiusura e non si dipende dall'app aperta alle 20:35. Questo è il "le sessioni Code non aggiornano la memoria del vault".
6. **Run end-to-end cloud NON provato** (specie `pm-digest` con M365 — il pezzo fragile). → "**Run now**" su ogni routine Remota per provarle + pre-approvare i tool.
7. **Divergenza parallela**: Carlo edita in sessioni parallele lo stesso vault (3 commit suoi oggi). Senza sync (#1), rischio conflitti di push. Disciplina interim: `git pull` prima di lavorare.

## 4. Mac spento — stato reale (onesto)
- 5 routine **Remota** (vault-link-checker, moc-refresh, crm-velocity, weekly-review, pm-digest): **configurate per girare a Mac spento ✅** (una HA già girato — evidenza: il branch orfano). MA: output non arriva in Obsidian senza #1, e run pulito **non provato** (#6).
- 2 **Locali** (code-sessions-index, system-consistency-check): **NO** Mac-off, solo ad app Code aperta.

## 5. Piano sessione fresca (ordine consigliato)
1. **Sync** (Obsidian Git) → chiude #1+#7. *(Carlo installa il plugin; Claude configura il data.json.)*
2. **Prova routine** (#6): "Run now" su ognuna; conferma M365 sul digest.
3. **QA branch** (#3 review integration branch, #4 prune i 33 stale + worktree).
4. **Cattura Code** (#5): catch-up backlog + irrobustire.
5. **Chiusura doc**: CLAUDE.md §9 tabella "chi gira dove" + F5 incipit Code-first.
6. Poi **F3** (skill `vault-health` + `wiki-lint` + `obsidian-cli orphans` + `episodic-memory`) → **F6** (meta-loop weekly del sistema, come routine cloud).

## 6. Decisioni Carlo ancora pending
- **Conferma le 4 chiusure checkbox OT** marcate `[reconciled — verificare]` → poi togliere il flag.
- **PDF Wave 2**: rigenerare copertina €315K→€300K prima di invii esterni.
- **Numeri `[PROPOSTA]`** PresidIA: €15-20K / €7K-agente / 96-98% OCR → confermare o lasciare flag.
- **#16 grezzi** `_import`/`_DA_DOWNLOADS`: lasciare in place (default, 6 schede li referenziano) / spostare+aggiornare ref / cancellare. + `axel.txt` source da cancellare a mano (§13).
- Già decisi/fatti 7/6: contratti NOT non firmati ✅ · PresidIA €44K/€27K (prov) ✅ · Eye Cookies margine €39K/48% ✅ · ANAC sbloccato ✅ · CRM €90K rimosso ✅ · persone da-triagiare = non creare ✅ · axel refs rimossi ✅.

## 7. Lezione (per onestà di processo)
F1 è stato chiuso a metà: routine **fatte partire** ma **loop di ritorno (sync) non pianificato come step esplicito** + bug push-branch. Carlo l'ha intercettato. La prossima volta: una nuova automazione non è "fatta" finché il suo output non **atterra nella fonte dati primaria** (il vault/Obsidian) ed è **provata end-to-end**, non solo creata.

## 8. ✅ Cross-check completezza (7/6) — verificato contro tutte le fonti, NIENTE perso
> Incrociato: Roadmap (6 fronti) · F2 plan §6 · KB Solidity Report §4-6 · F2 handover §7/§10 · Open Questions · questo handover. Sotto, TUTTO ciò che resta con la fonte canonica.

### A) Lavoro di SISTEMA (i fronti) — focus delle prossime sessioni
- **F1 chiusura**: i 7 gap §3 + Mac-off §4 + piano §5.
- **F3 — Skill custom** (Roadmap §F3): (a) skill **`vault-health`** (consolida link-checker+moc+system-consistency); (b) skill **ingest "raw→vault"** generica (oltre `transcript-processing`); (c) **`wiki-lint`** + **`obsidian-cli orphans/unresolved`** + accendere **`episodic-memory`**; (d) **`ruflo` confermato OFF** ma serve **riavvio Code** per scaricare gli hook; (e) raccogliere le **skill custom che Carlo ha in mente** + le lezioni di **"Insight"**.
- **"Insight" — 6 raccomandazioni PKM aperte** (Roadmap §7, sessione 11/5) → confluiscono in F3/F6: pattern-scan "vault generativo", MOC tematici, Progressive Summarization L4, resurfacing, tagging concettuale, distill-before-archive.
- **F4 — Sessioni/worktree Code**: convenzione worktree (1/task, naming, lifecycle, pruning) + come `recap`/`code-sessions-index` alimentano il vault + **pulizia 33 branch `claude/*`** (verificati 0 commit unici → safe) + worktree residue.
- **F5 — CLAUDE.md Code-first**: incipit "ogni chat Cowork"→Code + **§9 tabella scheduled** (chi gira dove, cloud/local) + R1/R2 già dentro ✅.
- **F6 — Cadenza ricorrente**: meta-loop weekly-review *del sistema* (routine cloud) + assorbe le raccomandazioni Insight.
- **Git history** (F2 handover §7): opzione `git filter-repo` per ripulire i segreti redatti dal commit `8435d2b` PRIMA del prossimo push, **se** vuoi history pulita (repo privato + credenziali ruotate = già accettabile).
- `dashboard-refresh-manual` resta **on-demand** (non migrato a routine, intenzionale).

### B) Azioni operative Carlo pending
- **Riavviare Claude Code** → scarica hook ruflo-off (config a posto) — F2 handover §10.
- **🔐 SICUREZZA** (Open Questions): rotazione credenziali = fatta ✅ (Carlo 7/6) → verificare copra anche i **2 token onboarding LeadMe** + gli **SMB path Eldis** in chiaro su Teams; spostare in password manager.
- I punti del §6: 4 checkbox OT da confermare · PDF Wave2 copertina €315K→€300K · numeri `[PROPOSTA]` PresidIA · #16 grezzi + `axel.txt` da cancellare a mano · `HeyAI Job descriptions.txt` vuoto (ri-esporta solo se serve, minore).

### C) Open items PROGETTO/governance — vivono in `99 - System/Open Questions` (tracciati lì + dal PM Digest; NON sono lavoro di sistema, ma da NON perdere)
- **#19/#29** IP Soolutions Wave 2: accettazione verbale ✅, **contratto interno HeyAI↔Soolutions da formalizzare** prima firma cliente (avv. Longo).
- **#35** Stato contrattuale NOT: non firmati ✅ bonificato 7/6; restano **strategia di formalizzazione** + cosa comunicare a Verrangia + sollecitare Donzelli + **recuperare i documenti primari** (email approvazione 03/04 + fatture acconti, oggi non a vault — gap probatorio Solidity §5) per l'audit fiscale.
- **#36** 🔴 Due diligence **"Paolo Verrangia"** (possibile background frode fiscale): invio documenti **SOSPESO** finché non chiude la verifica (Roberta + ODCEC + CCIAA).
- **#31-33, #38** Angelini Academy: soft-defer ✅; restano identità concorrente, economia FuturItaly 2026, **Forum-Nobel = visione non asset** (non presentarlo come realizzato), pricing da blessare.

### Catena canonica dei doc (ordine di lettura)
`CLAUDE.md` → **questo handover** → `KB Solidity Report` → `Routines/_README` → (fronti) `Roadmap Second Brain Code-era` → (progetto/governance) `Open Questions`. Gli altri handover in inbox (Angelini *) = lavoro-progetto, non sistema.
