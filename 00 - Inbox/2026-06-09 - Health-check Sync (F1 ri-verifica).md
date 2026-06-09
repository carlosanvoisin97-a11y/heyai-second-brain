---
type: system
created: 2026-06-09
updated: 2026-06-09
tags: [system, F1, sync, health-check, verification]
aliases: [Health-check Sync 9-6, Sync ri-verifica F1]
---

# ✅ Health-check Sync (F1 ri-verifica) — 9/6/2026

> Ri-verifica fresca del loop di sync Obsidian↔GitHub (plugin **Obsidian Git**), nella sessione "ottimizzazione second brain". Lo step 1 era stato implementato e provato il **7/6**; questa nota certifica la tenuta **oggi** (regola dura: *"provata end-to-end, non solo creata"* — la prova del 7/6 era datata 2 giorni). Metodo: `verification-before-completion` (prova fresca eseguita, non storico).

## Stato config (audit 9/6) — SANA, nessuna modifica necessaria
- `data.json` presente e **coincidente** con la tabella di ripristino in [[_README]] §Sync.
- commit-and-sync 10' (`autoSaveInterval:10`) · auto-pull 10' + on-boot (`autoPullInterval:10`, `autoPullOnBoot:true`) · `pullBeforePush:true` · `syncMethod:merge`.
- `.gitignore:46 → .obsidian/plugins/` ⇒ `data.json`/PAT **fuori da git** (verificato `git check-ignore`).
- `credential.helper: osxkeychain` ⇒ PAT nel portachiavi macOS, condiviso tra push di Code e push del plugin (URL https, nessun token in chiaro).
- **Decisioni config blessate**: `disablePopups` TENUTO `false` (con 3 writer su `main` è l'unico avviso se un merge va in conflitto) · `syncMethod:merge` TENUTO (rebase è rischioso in auto-sync).

## Test eseguiti (9/6)
1. **Allineamento** — `git fetch` + `rev-list --left-right` → `0 0` (local ≡ origin). ✅
2. **PUSH Code→GitHub** — *questo commit ne è la prova*: nota committata **per-file** (no `git add -A`) e pushata su `main` da Code → verificata su `origin`. ✅
3. **PULL GitHub→locale** — ✅ **certificato (canale git)**: il digest cloud di oggi (`685eb3d`, nato server-side) risulta in `main` locale (constatazione fresca) + `git pull` eseguito pulito + config auto-pull corretta. *(La prova attiva con vault-link-checker non si è chiusa nella finestra — routine cloud lenta su ~300 file, non bloccante.)*
4. **PLUGIN auto-pull in Obsidian** — ⏳ da confermare con Carlo (status bar Obsidian Git = *synced*). Il commit esterno `e998b78` osservato durante l'health-check è arrivato via **commit locale di una sessione parallela** (reflog `HEAD@{0}: commit`), NON via plugin-pull → non utilizzabile come prova plugin-side.

## Limite noto (non bug)
Il sync è **app-bound**: le routine cloud pushano a Mac spento, ma rientrano in Obsidian solo all'apertura del client (pull-on-boot + ogni 10'). Documentato in CLAUDE.md §9bis. Non è un difetto del sync, è una proprietà del runtime plugin.

## Esito health-check (9/6 sera)
**Sync git-level CERTIFICATO**: push Code→GitHub ✅ fresco (`f289c0e`), pull GitHub→locale ✅ (digest cloud `685eb3d` in locale + `git pull` + config), config audit ✅ sana. Unico tassello residuo: conferma plugin-pull *lato Obsidian* (status bar Obsidian Git).

**Evento operativo**: durante l'health-check rilevata una **sessione Claude Code parallela** attiva sullo stesso working tree `main` (commit `e998b78` di Carlo + co-author Claude, ore 23:49 — hook `vault-align-check.sh` per F4/§9ter, lavoro valido). Due writer sullo stesso `main` = rischio scritture concorrenti. Decisione Carlo: chiudere l'altra sessione → single-writer prima di partire con F3 vault-health.
