---
type: handover
created: 2026-06-10
updated: 2026-06-10
tags: [system, handover, F7, overnight, housekeeping, esecuzione, rollback]
aliases: [Innesto overnight F7, Piano esecuzione overnight, Innesto housekeeping 10-6]
---

# 🌙 INNESTO overnight — F7 Housekeeping + Piano di esecuzione integrato

> **Secondo innesto** per la sessione overnight sul nuovo modello. Catena: prompt-contenitore (metodo/regole) → [[2026-06-10 - HANDOVER overnight — vault-health + backlog sistema|HANDOVER 10/6]] (fronti vault-health / 37 broken / F6 / governance) → **questo file**. Qui ciò che mancava — *disk-hygiene* (F7), i due build nuovi, la strategia skill — più il **piano maestro**: orchestra TUTTI i fronti F0–F7 con il gate di Carlo e le **strategie di recupero per ogni passaggio critico**. I due handover insieme = set completo, nulla si perde.
>
> Stato git: vedi handover 10/6 §0. Plugin Obsidian Git auto-sync ~10' → non assumere `main` statico. **Single-writer**: la overnight deve essere l'UNICA sessione attiva sul vault (chiudere tutte le altre prima di lanciare).

## 0. Decisioni di Carlo recepite (10/6 — vincolanti)
- **Housekeeping F7**: eseguibile overnight **solo dietro la rete completa §5**. Precondizione mancante → **STOP**, non procedere.
- **Skill personali**: overnight = **profilazione + PROPOSTA**; la riscrittura effettiva resta **dietro OK di Carlo**.
- **Gate confermato**: Fase 1 analisi → Carlo approva il piano → Fase 2 esecuzione. **Mai eseguire la Fase 2 senza OK esplicito.**

## 1. Flusso obbligatorio (analisi → ok → esecuzione)
- **Fase 1 — ANALISI (sola lettura).** `git pull`. Leggi la catena §8. Conferma lo stato reale senza fidarti della memoria (`RemoteTrigger:list` per le routine cloud, `list_scheduled_tasks` per i task locali). Per ogni fronte: **spec → piano** (skill `writing-plans`). Presenta a Carlo il **piano notturno** con ordine, stime, confini e — per ogni passaggio critico — la **strategia di recupero** (§5).
- **Fase 2 — ESECUZIONE.** Solo dopo OK di Carlo. Con la rete §5, commit per-file + push su `main`, verifica strutturale §15.quinquies dopo ogni fronte.

## 2. Backlog unificato F0–F7 (niente si perde)
| Fronte | Stato | Cosa | Dettaglio |
|---|---|---|---|
| F0–F2, F4, F5 | ✅ | Sync, cattura Code, ingest, ecc. | handover 10/6 §1 |
| **F3** | 🔶 | `vault-health` (assorbe link+moc+consistency) + **3 build nuovi** (sotto) | handover 10/6 §2 + §4 di questo file |
| **F6** | ❌ | Meta-loop: weekly-review *del sistema* (routine cloud) | handover 10/6 §3 |
| **F7** | 🆕 | **Housekeeping / disk-hygiene** | §3 di questo file |
| 37 broken link | — | bonifica SAFE meccanica + 3 che richiedono OK | [[Vault Link Audit]] §"Audit 2026-06-09" + handover 10/6 §3 |
| Decisioni §6 + governance | — | numeri/prezzi/stati contrattuali, IP Soolutions #69/#70, sicurezza token | handover 10/6 §3 — **tutte RICHIEDE-OK** |

## 3. F7 — Housekeeping (NUOVO — verificato 10/6 in sola lettura)
| Item | Stato verificato | Azione | Classe |
|---|---|---|---|
| **3 worktree** `.claude/worktrees/` | 489 MB; **tutti i branch già in `main`**; 0 modifiche; contengono i file da 10.305 righe (triplicati) | `git worktree remove` (NON `rm`) dei 3 → **risolve da sé i "file di sistema lunghi"** | SAFE post-backup |
| **`.venv`** Futuritaly/Assets/Icone Settori 3D | 87 MB / 3.543 file; **gitignored**, ricreabile via `pip` | trash | SAFE post-backup |
| **5 .pptx Angelini** | ~72 MB; versioni multiple incl. `.bak-20260530`, `_v2`, `_UNIFICATO`, `_ABSTRACT` | tieni la finale; le altre → trash | SAFE post-backup |
| **53 .md Angelini** | note pre-pitch; pitch concluso | triage: tieni deliverable + decisioni, archivia il resto | parte RICHIEDE-OK |
| **`_DA_DOWNLOADS` (134 grezzi unici)** | mai smistati; in `00 - Inbox/` | = decisione §6 **#16** | **RICHIEDE-OK** |
| **2 cartelle import gemelle** | `_import-2026-06-06` (35) e `_DA_DOWNLOADS` (136), overlap 1 file | consolidare staging | parte RICHIEDE-OK |
| **Due vault locali** | `~/Documents/Obsidian Vault` = copia **100% ridondante** (0 file unici, 0 divergenti) | rimuovere dalla lista vault di Obsidian (file su disco intatti) | RICHIEDE-OK |

**Sinergia**: rimuovere i worktree **elimina i file da 10.305 righe** (sono export di chat triplicati, non file di sistema) → metà del fronte "file lunghi" si chiude da sola. Recupero spazio totale F7 SAFE ≈ **420 MB+**.

## 4. Build F3 nuovi + Skill-strategy
- **Automazione audio → trascrizione**: upload file audio in Code → invoca `audio-transcriber-deepgram` (skill **già esistente**, 75 righe, da potenziare) → trascrive (Deepgram) → **categorizza** (progetto/persona/tipo) → archivia ordinato nella sede pertinente. *Caveat fattibilità*: Claude Code non ha hook nativo "on-upload"; via reale = `UserPromptSubmit` hook che rileva il path audio nel prompt. **Valida la fattibilità in Fase 1**, non promettere prima.
- **Router skill-on-prompt**: evolve il `SessionStart` esistente (skill-first via superpowers) in un suggeritore che, letto il **1° prompt**, propone lo stack skill+metodi su livello **effort basso/medio/alto** (alto = fan-out / workflow / verifica adversariale). Suggerisce, non impone.
- **Skill-strategy (decisione: analisi + OK)**:
  - *Di notte (safe)*: **profila il lavoro reale** da **110 sessioni Cowork** (`80 - Sources/Cowork Sessions`, 64 mag + 45 giu — NON i pitch: Angelini è un'anomalia recente) + **Outlook (MCP `outlook_email_search`)** + progetti vault → mappa task ricorrenti → **proposta** su quali delle **20 skill personali** tenere/variare/dismettere e come ri-calarle su Carlo. Più le ottimizzazioni tattiche già a backlog (handover 10/6 §3.4: `pm-method` description 975→~350, `obsidian-bases` 497 righe → `references/`, `desktop-commander-guide` trigger, `website-builder-setup` archiviabile).
  - *Richiede OK*: la **riscrittura effettiva** delle skill personali.
  - Contesto: **20 skill personali uniche** (~6 ad alta personalizzazione: investment-proposal-drafting, vault-live-protocol, email-drafting, pm-method, recap, downloads-cleaner; 7 a custom=0 = primi candidati) + **248 acquisite** da 6 marketplace.

## 5. 🔒 Rete di sicurezza + strategie di recupero (CRITICO)
**Precondizioni globali — se manca anche una, STOP:**
1. `git tag pre-overnight-2026-06-10` su `main` (+ `git push origin pre-overnight-2026-06-10`).
2. **Backup `.tgz`** dell'intero vault FUORI dal vault (come `vault-backup-pre-F0-*`).
3. **Manifest** append-only di ogni azione distruttiva (timestamp, da → a, hash) in `00 - Inbox/_cleanup-manifest-2026-06-10.md`.

**Regole esecutive**: contenuti → **trash-not-delete** in `50 - Archive/_cleanup-trash-2026-06-10/` (mai `rm`); worktree → `git worktree remove`; `.venv` → trash; commit **per-file** + push `main` + co-author trailer; **pull-before-write**; verifica `HEAD==origin/main`.

**Strategia di recupero per passaggio critico** (questo è ciò che Carlo ha richiesto esplicitamente):
| Passaggio critico | Come si torna indietro |
|---|---|
| Rimozione 3 worktree | branch già in `main` (nulla perso) + tag; `git worktree add` li ricrea se serve |
| Trash `.venv` | dal Cestino, oppure `pip install` lo rigenera (gitignored, nessuna traccia git) |
| Dedup .pptx / triage Angelini | file in `50 - Archive/_cleanup-trash-…` → `mv` inverso dal manifest |
| Smistamento `_DA_DOWNLOADS` | manifest da→a → `mv` inverso voce per voce |
| Refactor routine → `vault-health` | append-only su file versionati → `git revert <commit>` |
| Fix 37 broken link | commit per-file → `git revert` del singolo commit |
| Rimozione 2° vault da Obsidian | reversibile: ri-aggiunge il vault (i file non vengono cancellati) |
| **Rollback totale** | `git reset --hard pre-overnight-2026-06-10` + (se necessario) ripristino dal `.tgz` |

## 6. Confini safe / richiede-OK (estende handover 10/6 §5)
- **SAFE in autonomia (post-backup)**: rimuovere worktree; trash `.venv`; dedup .pptx Angelini (trash); creare/refactor skill e routine-wrapper; `vault-health`; fix broken link **meccanici**; ottimizzazioni `description` skill; profilazione skill (solo proposta); append a doc/log; design + scrittura F6; spec/piani.
- **RICHIEDE OK puntuale — NON di notte**: smistare `_DA_DOWNLOADS` (#16); triage "di merito" dei 53 .md Angelini; rimuovere il 2° vault; creare **schede persona** (Luciano Pecorella, Simona Velotta); modificare **numeri/prezzi/stati contrattuali** o **Master Facts**; **riscrittura** skill personali; qualsiasi **invio a terzi** (email Soolutions #70); decisioni §6.
- **In dubbio** → flagga **"🔍 Da triagiare"** e prosegui sul safe. Meglio un fronte in meno che un fatto sbagliato committato di notte.

## 7. Ordine di esecuzione notturno (con dipendenze)
**backup/tag/manifest** → **worktree** (sblocca file lunghi) → **.venv** → **`vault-health`** (skill + 3 wrapper + estendi `consistency`, prova end-to-end) → **37 broken SAFE** (grep-on-rename §15, ri-run `links`) → **Angelini dedup .pptx** (trash) → **ottimizzazioni skill tattiche** → **skill-profiling** (solo proposta) → **F6 meta-loop** (design + routine cloud, provata end-to-end). Gli item RICHIEDE-OK restano flaggati per Carlo.

## 8. Catena di lettura + Definition of Done
- **Catena**: prompt-contenitore → **questo innesto** → [[2026-06-10 - HANDOVER overnight — vault-health + backlog sistema|handover 10/6]] → `CLAUDE.md` (delta hook §9ter) → [[Vault Link Audit]] → [[Open Tasks]] → [[Open Questions]].
- **DoD** (§15.quinquies): ogni claim "fatto" dichiara **path + criterio** verificati, non solo metriche. **Regola d'oro**: una automazione è "fatta" solo se il suo output **atterra in Obsidian** ed è **provata end-to-end**, non solo creata. Commit incrementali per-file → atterraggio progressivo in Obsidian.

---

> Prodotto in sessione 10/6 (sola lettura sul vault, salvo questo file). Tutti i numeri sono verificati su disco; i numeri/prezzi/stati contrattuali restano **PROPOSTA da confermare**, mai auto-applicati.
