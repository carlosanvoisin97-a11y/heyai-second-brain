---
type: system
created: 2026-06-07
updated: 2026-06-07
tags: [system, F1, automazioni, routines]
---

# ⚙️ Routines — definizioni delle automazioni del second brain (F1)

> Logica delle routine di automazione, **versionata nel repo** (prima vivevano solo in `~/Documents/Claude/Scheduled/`, fuori da git → a rischio perdita). Da qui sono (a) eseguibili come **routine cloud unattended** su claude.ai e (b) referenziabili da task locali Code.

## Perché esistono qui (F1)

Il "battito" (digest + audit) girava nello **scheduler Cowork**, che parte solo ad app aperta → fermo da quando Carlo lavora in Code. F1 lo riporta in vita. **Meccanismo verificato 7/6/2026**:
- **Da CLI/app NON si ottiene Mac-spento unattended**: `create_scheduled_task` gira solo ad app Code aperta (se chiusa → al prossimo avvio); `CronCreate` solo a sessione viva; nessun LaunchAgent/daemon Claude sul Mac.
- **Unattended vero = routine cloud su claude.ai** (server-side, clona questo repo, gira a Mac spento). La creazione è **un'azione browser di Carlo** (nessun tool da CLI). Coerente con Roadmap ("routine cloud su repo GitHub, richiede F0 remote" — F0 ✅).

## Inventario routine

| File                          | Cron (local)              | Tipo        | Connettori                              |
| ----------------------------- | ------------------------- | ----------- | --------------------------------------- |
| `vault-link-checker.md`       | `0 21 * * 0` (Dom 21)     | audit vault | nessuno                                 |
| `moc-refresh.md`              | `0 16 * * 6` (Sab 16)     | audit vault | nessuno                                 |
| `system-consistency-check.md` | `30 7 * * 1` (Lun 7:30)   | audit vault | nessuno                                 |
| `crm-velocity.md`             | `0 9 * * 1` (Lun 9)       | audit vault | nessuno                                 |
| weekly-review-interactive.md` | `30 17 * * 6` (Sab 17:30) | prep doc    | nessuno                                 |
| `pm-digest-mattutino.md`      | `0 8 * * 1-5` (Lun-Ven 8) | digest      | **M365** (Outlook/cal/SharePoint/Teams) |
| `radar-competitor.md`         | — **autorata, NON schedulata** | radar competitor/mercato → `99 - System/Radar/` (alimenta cockpit) | web pubblico |
| `weekly-system-review.md` 🆕  | `30 16 * * 6` UTC (Sab ~18:30 CEST) | meta-loop F6: review del sistema → prep-doc `00 - Inbox/` | nessuno |

⚠️ **8 file routine, 7 schedulate + 1 no**: `radar-competitor.md` è scritta e pronta ma **non ha né trigger cloud né task locale** (9/6). Da decidere se schedularla (cloud, settimanale) o lasciarla on-demand. Il cockpit legge `99 - System/Radar/` solo se qualcuno la fa girare.

🔧 **Refactor F3 (10/6/2026)**: `vault-link-checker.md`, `moc-refresh.md` e `system-consistency-check.md` sono ora **thin-wrapper** della skill `.claude/skills/vault-health/SKILL.md` (fonte unica di logica, sub-check `links`/`moc`/`consistency` + slot `contradictions`). Cron e trigger INVARIATI. `consistency` estesa al cross-check cloud via `RemoteTrigger` (gira solo da Code).
🆕 **F6 (10/6/2026)**: `weekly-system-review.md` = meta-loop del sistema (trigger cloud `trig_0122Weida5UNZLHFejsHccLb`), provata end-to-end il 10/6.

(`cowork-sessions-index` **ritirata**: in Code c'è già `code-sessions-index` nello scheduler locale. `claude-chats-sync`/`friday-wrap-up`/`weekly-digest` disabilitate. `dashboard-refresh-manual` resta on-demand.)

## Attivazione come routine cloud unattended (azione Carlo, ~5 min)

1. Su **claude.ai** → verifica che il connettore **GitHub** veda il repo privato `heyai-second-brain`, e che i **connettori M365** (Outlook/SharePoint) siano autenticati (servono al digest).
2. Crea un **agente schedulato / routine** per ogni riga della tabella.
3. **Prompt template** da incollare:
   > *"Lavori in un clone del repo `heyai-second-brain` (cwd = root del repo). Esegui integralmente la routine definita in `99 - System/Routines/<FILE>.md` (i path del vault nel file sono **già relativi alla root del repo**, normalizzati 7/6). Append-only §15, riservatezze §13. Al termine committa e pusha **direttamente su `main`** (`git push origin HEAD:main`), **niente branch né PR**."*
4. Imposta il **cron** della colonna (consigliato spostarlo di qualche minuto off `:00`/`:30` per non sovraccaricare il fleet, es. `7 21 * * 0`).

✅ **Path normalizzati** 7/6 (relativi alla root del repo) → i 6 file routine sono cloud-ready. _Restano riferimenti esterni `~/Documents/Claude/...` / `~/.claude/...` solo in `system-consistency-check` (audita lo scheduler locale): in cloud quella routine va ripensata o tenuta locale._
⚠️ **M365 in cloud**: il digest dipende dall'auth dei connettori su claude.ai; se il token scade il run headless fallisce (niente browser per ri-loggarsi). Il bridge locale (sotto) è la rete di sicurezza.

## Bridge locale = FAILOVER M365 (ri-armato 9/6/2026)

- **PM Digest bridge** Code-locale (`~/.claude/scheduled-tasks/pm-digest-mattutino`): storia → creato 7/6 (cron `0 8`), disabilitato 7/6 (cloud subentrato), **ri-armato 9/6 come vero failover del Rischio #1**. Motivo: la routine cloud dipende dal token M365 e **Cowork è dismesso** → senza failover il digest sarebbe single-point-of-failure (se il token scade, non gira da nessuna parte).
- Config failover: cron `30 9 * * 1-5` (**09:30, dopo il cloud delle 08:02**) + **guardia anti-doppione** nel SKILL (se la daily di oggi esiste già con sezione PM Digest → salta; gira solo se manca = cloud fallito). Best-effort (serve l'app Code aperta). Se anche M365 è giù, degrada a digest vault-only e lo segnala. _(Resta best-effort, non un failover garantito a Mac spento: per quello servirebbe un secondo runtime cloud.)_

## Note
- Sorgente originale (non più autoritativa): `~/Documents/Claude/Scheduled/<task>/SKILL.md` (scheduler Cowork).
- **ruflo**: spento (decisione Carlo) — niente cron/loop worker ruflo.
- Quando attivi il cloud, aggiorna CLAUDE.md §9 (tabella scheduled) per riflettere chi gira dove (regola §15.quater).

## 🔄 Sync Obsidian ↔ GitHub — plugin Obsidian Git (ATTIVO dal 7/6/2026)

> Chiude il **gap #1** del handover F1: le routine cloud pushano su GitHub ma, senza auto-pull, l'output non tornava in Obsidian. Plugin **Git** (Vinzent03) **v2.38.3**, installato+abilitato da Carlo 7/6 (22:10); `data.json` configurato dall'agente Code 7/6 (~22:5x).

**Direzioni coperte**
- **Obsidian → GitHub** (backup + propagazione): auto *commit-and-sync* ogni 10 min. ✅ **PROVATO** 7/6 22:56 — commit `4dbb73c "vault auto-sync (Obsidian)…"` committato e **pushato** su `origin/main`, rispettando `.gitignore` (nessun segreto plugin — vedi blindatura).
- **GitHub → Obsidian** (output routine cloud): auto-*pull* ogni 10 min + pull-on-boot. ✅ **PROVATO** 7/6 ~23:16 (vedi §"Step 2" sotto): la push della routine PM Digest (`79fc48a`) è comparsa in Obsidian via pull del plugin (merge `94007b6`, daily note `2026-06-07.md` nel working tree).

**Config `data.json`** — il file è **gitignorato** (può contenere PAT) → questa tabella è il record di ripristino. Ricrearlo in `.obsidian/plugins/obsidian-git/data.json`:

| Campo | Valore | Perché |
|---|---|---|
| `autoSaveInterval` | `10` | commit-and-sync ogni 10 min (Obsidian→GitHub) |
| `autoPullInterval` | `10` | pull ogni 10 min (GitHub→Obsidian) — il pezzo che chiude il gap #1 |
| `autoPullOnBoot` | `true` | all'apertura di Obsidian recupera subito l'output routine cloud |
| `pullBeforePush` | `true` | evita reject non-fast-forward quando il cloud ha pushato prima |
| `syncMethod` | `merge` | non distruttivo (no rebase/reset) |
| `autoCommitMessage` | `vault auto-sync (Obsidian): {{date}}` | rende riconoscibili i commit di backup locale |
| `listChangedFilesInMessageBody` | `true` | i file toccati nel corpo del commit → auditabilità (compensa la perdita del review per-file sui commit auto) |
| `disablePopups` / `…ForNoChanges` | `false` / `true` | popup solo quando sincronizza davvero; silenzio sui tick a vuoto |

**Blindatura sicurezza `.gitignore`** (fatta PRIMA di accendere l'auto-push, l'auto-sync fa `stage-all`): ignorata l'intera `.obsidian/plugins/` (i `data.json` dei plugin possono contenere segreti: Copilot→API key, Git→PAT) + `copilot/` (prompt+indice plugin = PII derivata dal vault). La lista plugin resta in `.obsidian/community-plugins.json` (ripristinabile). Verificato 7/6: il commit auto `4dbb73c` non contiene `plugins/`/`copilot/`/`data.json`.

**Tre tipi di commit nel repo** (per la tabella "chi gira dove" → CLAUDE.md §9):
1. `vault auto-sync (Obsidian): …` = backup locale di Carlo (plugin, `stage-all`, ogni 10 min, solo ad app aperta).
2. commit con messaggio descrittivo per-file = lavoro di sistema dell'agente Code.
3. commit delle **routine cloud** = output digest/audit (push diretto su `main`, vedi §"Attivazione").

**Interazione col lavoro agente**: l'auto commit-and-sync fa `stage-all` ogni 10 min → quando l'agente Code lavora su `main`, deve committare i propri cambi **per-file e prontamente** (entro la finestra) per non farli assorbire in un commit generico. Non è rischio dati (il contenuto è comunque salvato+pushato), solo di provenienza/messaggio.

**Azioni Carlo**: (1) quando il sync è validato, opz. `disablePopups: true` per togliere i popup; (2) tenere Obsidian aperto ogni tanto perché il sync (come gli audit) è app-bound finché non si valida la pull dal cloud.

## ✅ Step 2 — Routine cloud PROVATE end-to-end (7/6/2026, ~23:1x)

> Le 5 routine cloud erano già create da Carlo su claude.ai (7/6 13:3x). Questo step le ha **provate** e ha scoperto che sono **pilotabili da Claude Code** — supera la nota "azione browser di Carlo, nessun tool da CLI" del §"Attivazione" sopra.

**Pilotaggio da Code — tool `RemoteTrigger`** (non serve più il browser per gestirle):
- `action: list` → elenca · `get {trigger_id}` → dettaglio · `run {trigger_id}` → **Run now** · `update`/`create` → modifica/crea.
- ⚠️ Un `run` **manuale NON aggiorna `last_fired_at`** (solo i fire da cron lo fanno) → non usare quel campo per sapere se una run manuale è andata; guardare il commit su `origin/main`.

**Trigger ID (reference per Run now futuri):**

| Routine | trigger_id | cron (UTC) | M365 |
|---|---|---|---|
| pm-digest-mattutino | `trig_01UivDEeqge8sfEYeHM9RpBL` | `2 6 * * 1-5` | ✅ |
| crm-velocity | `trig_01Vaae83mADn7pNgnPoBNDtJ` | `0 7 * * 1` | — |
| moc-refresh | `trig_01LtknAQfEwDPPgoSD7MsRGd` | `0 14 * * 6` | — |
| weekly-review-interactive | `trig_01PwXWK8fgjmjvbv3a5f6PL5` | `0 15 * * 6` | — |
| vault-link-checker | `trig_01SMEJPZFUvqMGEFPR7DADob` | `40 13 * * 0` | — |

**Cosa è stato PROVATO (7/6):**
- ✅ **Push diretto su `main`** — nessun bug branch orfano (#2 handover): la run del **PM Digest** (manuale, Carlo) ha committato+pushato su `main` (`79fc48a`), zero `claude/*` su origin. Il push-su-main viene dal `## Push finale` **dentro il file routine** (`git push origin HEAD:main`), NON dal prompt del trigger (generico "committa e pusha le modifiche").
- ✅ **PM Digest con M365 headless** (il pezzo fragile, #6 handover): ha letto Outlook/cal/SharePoint via connettore M365 su claude.ai → daily note `2026-06-07.md` (20 email, 7 meeting, 10 task), gap 27/5→7/6 coperto.
- ✅ **GitHub → Obsidian (pull)**: `79fc48a` tirato in Obsidian (merge `94007b6`), daily note nel working tree.
- ✅ **Convergenza con writer paralleli**: Code (io) + claude.ai (Carlo) + cloud + plugin in parallelo → merge pulito, `local ≡ origin`. Chiude anche #7 (divergenza).

🔴 **Regola permanente (F1)**: ogni file `99 - System/Routines/*.md` **DEVE** contenere `## Push finale` con `git push origin HEAD:main` (no branch, no PR). È lì che vive il fix #2. Non rimuoverla in edit futuri. _(7/6: anche i **5 prompt trigger cloud** sono stati resi espliciti uguale — "push su `main`, no branch/PR" — via `RemoteTrigger update` → **doppia barriera** file-routine + prompt-trigger; M365 di pm-digest preservato.)_

**Restano (minori, non bloccanti):**
- vault-link-checker ✅ **provata** (la mia run 7/6 ha prodotto l'audit `b23d1d8` su `main` → **2ª routine confermata**, audit no-M365 pilotata da Code via `RemoteTrigger run`; atterrata anche in Obsidian via pull). Restano crm-velocity, moc-refresh, weekly-review (pattern identico; `RemoteTrigger run` on-demand o al primo cron).
- Doc drift per **Step 5/F5**: CLAUDE.md §9/§9bis ("due task"→3; bridge pm-digest local ora `enabled=false` = fallback dormiente) + §"Bridge attivo" sopra → rinominare "fallback". Già nel `System Consistency Audit` 7/6.
