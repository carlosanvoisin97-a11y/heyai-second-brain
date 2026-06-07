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

(`cowork-sessions-index` **ritirata**: in Code c'è già `code-sessions-index` nello scheduler locale. `claude-chats-sync`/`friday-wrap-up`/`weekly-digest` disabilitate. `dashboard-refresh-manual` resta on-demand.)

## Attivazione come routine cloud unattended (azione Carlo, ~5 min)

1. Su **claude.ai** → verifica che il connettore **GitHub** veda il repo privato `heyai-second-brain`, e che i **connettori M365** (Outlook/SharePoint) siano autenticati (servono al digest).
2. Crea un **agente schedulato / routine** per ogni riga della tabella.
3. **Prompt template** da incollare:
   > *"Lavori in un clone del repo `heyai-second-brain` (cwd = root del repo). Esegui integralmente la routine definita in `99 - System/Routines/<FILE>.md` (i path del vault nel file sono **già relativi alla root del repo**, normalizzati 7/6). Append-only §15, riservatezze §13. Al termine committa e pusha **direttamente su `main`** (`git push origin HEAD:main`), **niente branch né PR**."*
4. Imposta il **cron** della colonna (consigliato spostarlo di qualche minuto off `:00`/`:30` per non sovraccaricare il fleet, es. `7 21 * * 0`).

✅ **Path normalizzati** 7/6 (relativi alla root del repo) → i 6 file routine sono cloud-ready. _Restano riferimenti esterni `~/Documents/Claude/...` / `~/.claude/...` solo in `system-consistency-check` (audita lo scheduler locale): in cloud quella routine va ripensata o tenuta locale._
⚠️ **M365 in cloud**: il digest dipende dall'auth dei connettori su claude.ai; se il token scade il run headless fallisce (niente browser per ri-loggarsi). Il bridge locale (sotto) è la rete di sicurezza.

## Bridge attivo (interim)

- **PM Digest** creato come task **Code-locale** (`~/.claude/scheduled-tasks/pm-digest-mattutino`, cron `0 8 * * 1-5`, **best-effort**: gira quando l'app Code è aperta; se chiusa → al prossimo avvio). Ponte finché il cloud non è attivo. Creato 7/6/2026.

## Note
- Sorgente originale (non più autoritativa): `~/Documents/Claude/Scheduled/<task>/SKILL.md` (scheduler Cowork).
- **ruflo**: spento (decisione Carlo) — niente cron/loop worker ruflo.
- Quando attivi il cloud, aggiorna CLAUDE.md §9 (tabella scheduled) per riflettere chi gira dove (regola §15.quater).

## 🔄 Sync Obsidian ↔ GitHub — plugin Obsidian Git (ATTIVO dal 7/6/2026)

> Chiude il **gap #1** del handover F1: le routine cloud pushano su GitHub ma, senza auto-pull, l'output non tornava in Obsidian. Plugin **Git** (Vinzent03) **v2.38.3**, installato+abilitato da Carlo 7/6 (22:10); `data.json` configurato dall'agente Code 7/6 (~22:5x).

**Direzioni coperte**
- **Obsidian → GitHub** (backup + propagazione): auto *commit-and-sync* ogni 10 min. ✅ **PROVATO** 7/6 22:56 — commit `4dbb73c "vault auto-sync (Obsidian)…"` committato e **pushato** su `origin/main`, rispettando `.gitignore` (nessun segreto plugin — vedi blindatura).
- **GitHub → Obsidian** (output routine cloud): auto-*pull* ogni 10 min + pull-on-boot. ⏳ Configurato; **prova end-to-end** col primo "Run now" di una routine cloud (Step 2 handover): la sua push deve comparire in Obsidian entro ≤10 min.

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
