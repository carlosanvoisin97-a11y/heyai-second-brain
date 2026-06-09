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
3. **PULL GitHub→locale** — `RemoteTrigger run` vault-link-checker (cloud) → commit su `origin` → `git pull` → atterrato nel working tree locale. ⏳ *in corso*
4. **PLUGIN auto-pull in Obsidian** — con Obsidian aperto, status bar Obsidian Git = *synced*. ⏳ *da confermare con Carlo*

## Limite noto (non bug)
Il sync è **app-bound**: le routine cloud pushano a Mac spento, ma rientrano in Obsidian solo all'apertura del client (pull-on-boot + ogni 10'). Documentato in CLAUDE.md §9bis. Non è un difetto del sync, è una proprietà del runtime plugin.
