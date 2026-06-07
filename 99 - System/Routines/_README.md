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

| File | Cron (local) | Tipo | Connettori |
|---|---|---|---|
| `vault-link-checker.md` | `0 21 * * 0` (Dom 21) | audit vault | nessuno |
| `moc-refresh.md` | `0 16 * * 6` (Sab 16) | audit vault | nessuno |
| `system-consistency-check.md` | `30 7 * * 1` (Lun 7:30) | audit vault | nessuno |
| `crm-velocity.md` | `0 9 * * 1` (Lun 9) | audit vault | nessuno |
| `weekly-review-interactive.md` | `30 17 * * 6` (Sab 17:30) | prep doc | nessuno |
| `pm-digest-mattutino.md` | `0 8 * * 1-5` (Lun-Ven 8) | digest | **M365** (Outlook/cal/SharePoint/Teams) |

(`cowork-sessions-index` **ritirata**: in Code c'è già `code-sessions-index` nello scheduler locale. `claude-chats-sync`/`friday-wrap-up`/`weekly-digest` disabilitate. `dashboard-refresh-manual` resta on-demand.)

## Attivazione come routine cloud unattended (azione Carlo, ~5 min)

1. Su **claude.ai** → verifica che il connettore **GitHub** veda il repo privato `heyai-second-brain`, e che i **connettori M365** (Outlook/SharePoint) siano autenticati (servono al digest).
2. Crea un **agente schedulato / routine** per ogni riga della tabella.
3. **Prompt template** da incollare:
   > *"Lavori in un clone del repo `heyai-second-brain` (cwd = root del repo). Esegui integralmente la routine definita in `99 - System/Routines/<FILE>.md`, trattando tutti i path del vault come **relativi alla root del repo** (i path assoluti `/Users/carlosanvoisin/claude/...` nel file sono Cowork-era: usali come relativi dalla root). Append-only §15, riservatezze §13. Al termine committa e pusha le modifiche."*
4. Imposta il **cron** della colonna (consigliato spostarlo di qualche minuto off `:00`/`:30` per non sovraccaricare il fleet, es. `7 21 * * 0`).

⚠️ **Adattamento path**: i file portati contengono ancora path assoluti `/Users/...` (logica Cowork-era). Il template prompt sopra istruisce a leggerli come relativi; in alternativa si normalizzano i file in una sessione dedicata (chiedimelo).
⚠️ **M365 in cloud**: il digest dipende dall'auth dei connettori su claude.ai; se il token scade il run headless fallisce (niente browser per ri-loggarsi). Il bridge locale (sotto) è la rete di sicurezza.

## Bridge attivo (interim)

- **PM Digest** creato come task **Code-locale** (`~/.claude/scheduled-tasks/pm-digest-mattutino`, cron `0 8 * * 1-5`, **best-effort**: gira quando l'app Code è aperta; se chiusa → al prossimo avvio). Ponte finché il cloud non è attivo. Creato 7/6/2026.

## Note
- Sorgente originale (non più autoritativa): `~/Documents/Claude/Scheduled/<task>/SKILL.md` (scheduler Cowork).
- **ruflo**: spento (decisione Carlo) — niente cron/loop worker ruflo.
- Quando attivi il cloud, aggiorna CLAUDE.md §9 (tabella scheduled) per riflettere chi gira dove (regola §15.quater).
