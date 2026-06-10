---
type: plan
status: in-gate
created: 2026-06-10
updated: 2026-06-10
tags: [system, overnight, plan, F3, F6, F7, broken-links, gate]
aliases: [Piano overnight 10-6, Piano notturno Fase 1]
---

# 🌙 PIANO overnight 10/6 — Fase 1 completata, in attesa di OK (gate)

> **Per l'agente esecutore (Fase 2)**: REQUIRED SUB-SKILL `superpowers:executing-plans` (esecuzione inline con checkpoint; i task sono sequenziali con dipendenze — no subagent paralleli su scritture vault, SINGLE-WRITER). Checkbox `- [ ]` per tracking.
>
> **Goal**: chiudere in una notte F7 housekeeping (SAFE), F3 vault-health, 30+4 broken link meccanici, ottimizzazioni skill, profilazione skill (proposta), F6 meta-loop — dietro rete di sicurezza completa (tag + tgz + manifest), trash-not-delete, commit per-file su `main`.
>
> **Architettura**: ordine vincolante §7 del [[2026-06-10 - INNESTO overnight — F7 housekeeping + piano esecuzione|piano maestro]]; ogni fronte chiude con verifica strutturale §15.quinquies (path + criterio); rollback per-passaggio da tabella §5 INNESTO + `git reset --hard pre-overnight-2026-06-10` come rollback totale.

## §0 — Stato verificato in Fase 1 (sola lettura, non da memoria)

| Claim piano maestro | Verifica | Esito |
|---|---|---|
| 5 routine cloud attive | `RemoteTrigger:list` | ✅ tutte enabled; pm-digest next run 10/6 06:02 UTC, M365 connesso |
| 3 task Code-locale | `list_scheduled_tasks` | ✅ tutti enabled. ⚠️ Drift doc: CLAUDE.md §9bis dice bridge digest "off dormiente", realtà **ON** (tabella §9 corretta) → fix in Task 3 |
| 3 worktree 489 MB, branch in main, 0 modifiche | `git worktree list` + `git log main..<br>` + `status --porcelain` | ✅ 0 commit unici E 0 modifiche uncommitted su tutti e 3 |
| 2 branch remoti `origin/claude/*` stray | `git log main..origin/<br>` | ✅ 0 commit unici — ma §9ter li vuole **flag-only, potatura manuale** → solo comando pronto |
| `.venv` 87 MB gitignored | `du` + `find` | ✅ 87 MB / 3.543 file |
| 5 .pptx Angelini ~72 MB | `du` + `git ls-files` | ✅ 5 + 1 lock file `~$` (4 KB). **Tutti tracked in git** → trash = copia esterna + `git rm` |
| 53 .md Angelini | `find` | ✅ 53 — triage di merito resta RICHIEDE-OK |
| `_DA_DOWNLOADS` 134-136 file | `find` | ✅ 136 file in `00 - Inbox/_DA_DOWNLOADS_2026-06-06` — RICHIEDE-OK (#16) |
| 2 cartelle import gemelle | `find` | ⚠️ Delta: `_import-2026-06-06` sta in `80 - Sources/Files/`, NON in Inbox — consolidamento resta RICHIEDE-OK |
| 2° vault ridondante | `obsidian.json` | ✅ `~/Documents/Obsidian Vault` 54 MB registrato — rimozione RICHIEDE-OK |
| 37 broken (K) + 4 (J) | [[Vault Link Audit]] §9/6 + esistenza target su disco | ✅ TUTTI i file target dei fix SAFE esistono. 1 correzione: `Audit Claude Chats Estrazione 2026-05-07` sta in `50 - Archive/System/` (non `System Patches/`) |
| `vault-health` da creare | `ls .claude/skills/` | ✅ non esiste — 3 routine sorgente: vault-link-checker (94 r), moc-refresh (117 r), system-consistency-check (127 r) |
| Skill personali "20" | `ls` progetto + globali | ⚠️ Censite **16** (9 in `.claude/skills/` + 7 in `~/.claude/skills/`) — riconciliazione conteggio nella proposta Task 7 |
| Routine `radar-competitor.md` | `ls Routines/` + RemoteTrigger:list | ⚠️ Esiste il file (54 r, per cockpit) ma NESSUN trigger cloud e non censita in CLAUDE.md §9 → flag in Task 3 consistency |
| Disco per backup | `df` | ✅ 17 Gi liberi; vault 927 MB (489 = worktrees) |

**Fattibilità build audio (validata, come richiesto)**: skill `audio-transcriber-deepgram` esiste (75 r); via reale = hook `UserPromptSubmit` in settings.json che rileva path audio. **Fattibile ma NON si implementa stanotte**: un hook malformato disturberebbe ogni prompt di domani. Stanotte: solo design nella proposta Task 7. Stesso per il router skill-on-prompt.

## Task 0 — Precondizioni (BLOCCANTI: se una fallisce → STOP totale)

- [ ] **0.1** `git -C ~/claude pull --no-edit origin main` + verificare `git rev-parse HEAD` == `git rev-parse origin/main`
- [ ] **0.2** `git tag pre-overnight-2026-06-10 && git push origin pre-overnight-2026-06-10` → verificare con `git ls-remote --tags origin | grep pre-overnight`
- [ ] **0.3** Backup completo FUORI dal vault (worktrees INCLUSI per rollback totale):
  `tar -czf ~/vault-backup-pre-overnight-2026-06-10.tgz -C /Users/carlosanvoisin claude`
  Verifica: `tar -tzf ~/vault-backup-pre-overnight-2026-06-10.tgz | wc -l` > 4000 e dimensione > 400 MB
- [ ] **0.4** Creare cartella trash esterna `mkdir -p ~/vault-trash-2026-06-10` (per binari grandi e file gitignored — spostarli DENTRO il vault li farebbe tracciare o non libererebbe spazio) + cartella interna `50 - Archive/_cleanup-trash-2026-06-10/` (per contenuti .md)
- [ ] **0.5** Creare `00 - Inbox/_cleanup-manifest-2026-06-10.md` (append-only: timestamp · azione · da → a · hash md5 per i binari) + commit + push

## Task 1 — Worktree removal (SAFE — sblocca "file lunghi") · ~10 min

- [ ] **1.1** Ri-verificare al momento: `git worktree list` — escludere qualsiasi worktree nuova creata dalla sessione corrente (le 3 da rimuovere hanno commit ≤ 8/6)
- [ ] **1.2** Per ciascuna delle 3 (`sleepy-lamport-35d51a`, `wizardly-mirzakhani-71ca72`, `xenodochial-neumann-9fdc6a`): ri-check `git -C .claude/worktrees/<wt> status --porcelain` = vuoto → `git worktree remove .claude/worktrees/<wt>` → `git branch -D claude/<wt>` → riga manifest
- [ ] **1.3** Verifica strutturale: `git worktree list` = solo main · `du -sh .claude/worktrees` ≈ 0 · i 3 export chat da 10.305 righe spariti dal disco
- [ ] **1.4** Branch remoti stray: NON cancellare (§9ter flag-only). Scrivere nel manifest il comando pronto per Carlo: `git push origin --delete claude/achipont-outlook-email-vqpfo8 claude/contract-concerns-federico-simone-1305ye` (verificati 0 commit unici)
- **Recupero**: branch già in main, nulla da perdere; tag + tgz coprono; `git worktree add` ricrea.

## Task 2 — `.venv` trash (SAFE) · ~5 min

- [ ] **2.1** `mv "20 - Projects/Futuritaly/Assets/Icone Settori 3D/.venv" ~/vault-trash-2026-06-10/venv-icone-settori-3d` + riga manifest
- [ ] **2.2** Verifica: cartella assente dal vault; `git status` pulito (era gitignored → nessun cambiamento tracked)
- **Recupero**: `mv` inverso dal manifest, oppure `pip install` rigenera.

## Task 3 — F3 `vault-health` (skill + 3 thin-wrapper + estensione consistency) · ~75-90 min

Design APPROVATO da Carlo (handover §2): ibrida, 3 sub-check + slot `contradictions` vuoto, broken link separati dalla skill.

- [ ] **3.1** Creare `.claude/skills/vault-health/SKILL.md`: sezioni §links (assorbe logica 94 r, flag-only, alias-aware v4, rolling-window) · §moc (117 r, auto-patch-safe) · §consistency (127 r, flag-only) · §contradictions (slot dichiarato vuoto) · invocazione `vault-health <check>`, default `all` con mini-report in chat · output doppio binario invariato (Vault Link Audit / MOC Refresh Log / System Consistency Audit) · sub-check isolati (uno fallisce → gli altri proseguono). Commit per-file
- [ ] **3.2** Estendere §consistency: (a) cross-check routine cloud via `RemoteTrigger:list` (gira solo da Code, dichiararlo nella skill); (b) bonifica path Cowork morti (`~/Documents/Claude/Scheduled/` → realtà §9); (c) i 2 drift trovati stanotte: CLAUDE.md §9bis "bridge off" vs realtà ON + `radar-competitor.md` orfana di trigger e non censita in §9 — il sub-check li deve flaggare
- [ ] **3.3** Refactor delle 3 routine `99 - System/Routines/{vault-link-checker,moc-refresh,system-consistency-check}.md` in thin-wrapper ("Read SKILL vault-health, esegui §<check>, append-only §15, push main"). Cron e 5 trigger cloud INVARIATI. Mantenere `## Push finale` in ogni wrapper (regola §9ter). 3 commit per-file
- [ ] **3.4** Fix doc contestuale (§15.quater): CLAUDE.md §9bis riga bridge "off, fallback dormiente" → "on — failover (ri-armato 9/6)" — alleneamento con tabella §9 già corretta. Commit dedicato
- [ ] **3.5** **Prova end-to-end run 1**: `RemoteTrigger action:run` su `vault-link-checker` (ora wrapper) → attendere commit cloud (poll `git fetch` ~2-5 min) → `git pull` → verificare: fast-forward osservato + `Vault Link Audit.md` aggiornato con run nuovo + K coerente (~37, pre-fix). Criterio §15.quinquies: file + struttura report, non solo exit code
- **Recupero**: file versionati → `git revert <commit>` per singolo step; i trigger cloud non vengono toccati.

## Task 4 — 37 broken link: bonifica SAFE (30 K + 4 J) · ~45-60 min

Metodo per ogni cluster: grep globale del vecchio identificatore (`grep -rn "<old>" --include="*.md"`, esclusi `.claude/worktrees`) → fix di TUTTE le occorrenze (non solo quelle elencate dall'audit) → commit per-file-sorgente.

- [ ] **4.1 Cluster A ×16**: prefisso `00 - Inbox/` → `50 - Archive/Inbox/2026-05/` (×15) o `2026-04/` (×1) in ~11 file sorgente. ⚠️ Include **Master Facts Sheet (3 link)**: tocco SOLO i path dei wikilink, NESSUN numero — dichiarato qui, ribadito nel commit message
- [ ] **4.2 Cluster B ×9**: `99 - System/...` → `50 - Archive/System Patches/...` (×7) · `50 - Archive/System/Audit Claude Chats Estrazione 2026-05-07` (×2 — path corretto verificato in Fase 1) · DPIII → `50 - Archive/DPIII/...`
- [ ] **4.3 Cluster C ×2**: `aliases: [Area - Governance]` in `Area - Governance HeyAI.md` · `aliases: [Area - Cybersecurity]` in `Area - Cybersecurity & Compliance.md` (append frontmatter, +updated)
- [ ] **4.4 Cluster D ×2**: `aliases: [Arianna]` in `60 - People/Arianna Giordanella.md` · fix `[[60 - People/Luca (Silencio)]]` → `[[Luca (Silencio)]]` nel file DPIII archiviato
- [ ] **4.5 Cluster E ×1**: Daily 2026-05-08 L44 `[[80 - Sources/Cowork Sessions/2026-05-07.md]]` → `[[2026-05-07 - Indice sessioni]]`
- [ ] **4.6 J ×4**: rimuovere note parentetiche da `stakeholders:` nei 2 file Pitch Angelini v3.2/v3.3 (`Marco Morbidelli (forse in stanza)` → `Marco Morbidelli`, idem Tiziana Carnicelli)
- [ ] **4.7 YAML fix** `Accessibility Specs Sito Nuovo Angelini Academy.md`: quotare la URL nel campo `standard:` (rompe il parser alias). _L'handover lo lista RICHIEDE-OK → **incluso esplicitamente in questo gate**: l'OK al piano lo autorizza; se Carlo lo esclude, salta_
- [ ] **4.8 Verifica end-to-end run 2**: `RemoteTrigger action:run` `vault-link-checker` → pull → atteso **K=7** (= 2 Luciano + 1 Simona + 4 placeholder by-design: `[[Verificare]]`, `[[<target>]]`, 2 code-recap) e **J=0**. Se K≠7: diff dei residui e spiegazione nel report
- **NON toccare**: `[[Luciano Pecorella]]` ×2, `[[Simona Velotta]]` ×1 (schede persona = RICHIEDE-OK), placeholder by-design
- **Recupero**: commit per-file → `git revert` puntuale.

## Task 5 — Angelini dedup .pptx (SAFE) · ~10 min

- [ ] **5.1** TENERE: `Angelini_Academy_Pitch_UNIFICATO_20260531.pptx` (finale, 16 MB) + `..._ABSTRACT.pptx` (contenuto distinto — 🔍 flag a Carlo se vuole trash anche questo)
- [ ] **5.2** TRASH (×4, ~45 MB): `Angelini_Academy_Pitch.pptx` · `_v2.pptx` · `.pptx.bak-20260530` · lock `~$...pptx`. Sono tracked → per ciascuno: md5 nel manifest → `cp` in `~/vault-trash-2026-06-10/` → `git rm` → commit per-file. Doppia rete: copia fisica + storia git + tgz
- [ ] **5.3** 53 .md Angelini: SOLO censimento lista nel manifest con proposta tieni/archivia (triage di merito = RICHIEDE-OK, non si esegue)
- **Recupero**: `cp` inverso dal trash esterno, o `git checkout pre-overnight-2026-06-10 -- <file>`.

## Task 6 — Ottimizzazioni skill tattiche (SAFE) · ~20-30 min

⚠️ Le skill in `~/.claude/skills/` sono FUORI dal repo → git non le copre: backup file in `~/vault-trash-2026-06-10/skill-backups/` PRIMA di ogni modifica + riga manifest.

- [ ] **6.1** `pm-method`: description 975 → ~350 char (trigger troppo largo) — backup, edit, manifest
- [ ] **6.2** `obsidian-bases` (.claude/skills, nel repo): spostare il reference (497 r) in `references/` — commit per-file
- [ ] **6.3** `website-builder-setup`: mv in `~/.claude/skills-archive/` + manifest
- [ ] **6.4** `desktop-commander-guide`: non trovata nelle skill personali in Fase 1 — se è plugin marketplace: SKIP + flag nel report
- **Recupero**: restore dal backup file-level (manifest) o `git revert` per quelle nel repo.

## Task 7 — Skill-profiling (solo PROPOSTA — SAFE) · ~60-90 min

- [ ] **7.1** Profilare il lavoro reale: 110 sessioni Cowork (`80 - Sources/Cowork Sessions/`, 64 mag + 45 giu, NON i pitch Angelini) + Outlook via MCP `outlook_email_search` (se il token M365 regge; fallback: solo vault) + schede `20 - Projects/`
- [ ] **7.2** Output: `00 - Inbox/2026-06-10 - PROPOSTA skill-strategy (profilazione overnight).md` — mappa task ricorrenti → censimento riconciliato delle 16 skill personali trovate (9 progetto + 7 globali; l'INNESTO ne contava 20 — spiegare il delta) → tenere/variare/dismettere + come ri-calarle su Carlo + design build audio (hook UserPromptSubmit) + design router skill-on-prompt (3 livelli effort). Commit + push
- [ ] **7.3** NESSUNA riscrittura skill (RICHIEDE-OK esplicito)

## Task 8 — F6 meta-loop (design + routine cloud + prova end-to-end) · ~45-60 min

- [ ] **8.1** Scrivere `99 - System/Routines/weekly-system-review.md`: review settimanale DEL SISTEMA (non dei progetti) — anomalie della settimana: digest falliti/gap, drift doc↔realtà, trend K broken, worktree/branch stray, sessioni non indicizzate + le 6 raccomandazioni Insight (pattern-scan, MOC tematici, Progressive Summarization L4, resurfacing, tagging concettuale, distill-before-archive). Output: prep-doc in `00 - Inbox/`. Con `## Push finale` su main. Commit
- [ ] **8.2** Creare trigger cloud via `RemoteTrigger action:create` — cron proposto `30 16 * * 6` (sab ~18:30 CEST, dopo weekly-review-interactive delle 15 UTC). Additivo e reversibile (delete)
- [ ] **8.3** Prova end-to-end: `RemoteTrigger action:run` → attesa commit → pull → verificare prep-doc atterrato in `00 - Inbox/` con struttura attesa (§15.quinquies)
- [ ] **8.4** Doc nello stesso giro (§15.quater): riga nuova nella tabella CLAUDE.md §9 + `_README` Routines. Commit per-file
- **Recupero**: trigger delete + `git revert`; nessun file esistente toccato.

## Chiusura — Report mattutino

- [ ] **9.1** Ri-lettura CLAUDE.md (delta `updated:` vs inizio sessione — regola §10.1bis) prima dei commit finali
- [ ] **9.2** `00 - Inbox/2026-06-10 - REPORT overnight (esecuzione).md`: per ogni task path+criterio verificati (§15.quinquies), lista completa 🔍 RICHIEDE-OK rimasti flaggati, K/J post-fix, spazio recuperato, comandi pronti per le potature manuali. Commit + push finale

## Cosa resta flaggato 🔍 RICHIEDE-OK (NON si esegue stanotte)

1. Smistamento `_DA_DOWNLOADS_2026-06-06` (136 file) + consolidamento con `80 - Sources/Files/_import-2026-06-06` (decisione §6 #16)
2. Triage di merito dei 53 .md Angelini (stanotte solo censimento+proposta)
3. Rimozione 2° vault `~/Documents/Obsidian Vault` dalla lista Obsidian (istruzioni pronte nel report)
4. Schede persona Luciano Pecorella / Simona Velotta (→ i 3 K residui restano)
5. `..._ABSTRACT.pptx`: tenuto — trash solo se Carlo conferma
6. Potatura 2 branch remoti `origin/claude/*` (comando pronto, §9ter flag-only)
7. Riscrittura skill personali + implementazione hook audio/router (solo design in proposta)
8. Numeri/prezzi/stati contrattuali, decisioni §6, governance #69/#70, sicurezza token — intatti

## Rischi residui e mitigazioni

| Rischio | Mitigazione |
|---|---|
| Obsidian aperto stanotte → auto-sync commit concorrenti ogni ~10' | pull-before-write prima di OGNI commit; in caso di non-fast-forward: pull --no-edit e retry |
| pm-digest cloud 06:02 UTC (08:02 CEST) committa mentre lavoro | idem; se la notte arriva lì, pull esplicito post-06:10 UTC |
| Run cloud (Task 3.5/4.8/8.3) lento o fallito | timeout 15 min con poll `git fetch`; se fallisce: il fronte resta "implementato NON provato" nel report — mai dichiarato fatto |
| Token M365 scaduto (Task 7 Outlook) | fallback profilo solo-vault, dichiarato nel report |
| Modifiche fuori repo (~/.claude/skills) non coperte da git | backup file-level pre-modifica + manifest |
| Worktree nuova della sessione corrente | esclusione esplicita in 1.1 (rimuovo solo le 3 censite, commit ≤ 8/6) |

**Rollback totale**: `git reset --hard pre-overnight-2026-06-10` + push + (se serve) restore dal `.tgz`.

## Stima complessiva

~4,5-5,5 h di esecuzione agente. Ordine vincolante: Task 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → Report. Se il tempo stringe: 7 e 8 sono gli unici rimandabili senza perdere coerenza (tutto il resto è housekeeping+fix con dipendenze).

---

> **GATE**: questo piano attende l'OK esplicito di Carlo. Nessun task viene eseguito prima. Voci con deroga chiesta esplicitamente in questo gate: 4.7 (YAML fix). Con "OK" semplice si esegue tutto il piano come scritto; eventuali esclusioni puntuali vanno nominate.
