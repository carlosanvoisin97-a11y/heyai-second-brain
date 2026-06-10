---
type: handover
created: 2026-06-06
updated: 2026-06-06
status: pronto per consumo
tags: [system, second-brain, handover, F2]
aliases: [Handover F2, Handover Second Brain 6-6]
source_session: "quizzical-faraday (1ab3daf8) — 6/6/2026, ~6h"
related: ["[[2026-06-06 - Roadmap Second Brain Code-era]]", "[[2026-06-06 - F2 Ingest Plan + Inventario KB grezza]]"]
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** F2 certificata (KB Solidity 9/6); ottimizzazione completata nei fronti F0-F7. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# 🔁 HANDOVER → nuova sessione: F2 Ingest KB + ottimizzazione second brain

> **Nuova sessione, leggi in quest'ordine:** (1) `CLAUDE.md`, (2) **questo file**, (3) [[2026-06-06 - Roadmap Second Brain Code-era|Roadmap]] (i 6 fronti), (4) [[2026-06-06 - F2 Ingest Plan + Inventario KB grezza|F2 Plan + Inventario]]. Con questi 4 hai TUTTO. Prodotto a fine sessione `quizzical-faraday` il 6/6/2026.
>
> **Regola operativa**: lavora su **`main`** (`/Users/carlosanvoisin/claude`). Il lavoro di questa sessione è stato committato lì (HEAD attuale → vedi §3). NON serve worktree per il lavoro di sistema.

---

## 0. PROMPT DA INCOLLARE nella nuova sessione

```
Riprendiamo l'ottimizzazione del second brain. Leggi CLAUDE.md, poi
"00 - Inbox/2026-06-06 - HANDOVER F2 — Ingest KB + Ottimizzazione Second Brain.md"
per il contesto completo, poi i due doc linkati (Roadmap + F2 Plan).
Siamo a F2. Parti da Fase 0 (metti in salvo Desktop/_OBSIDIAN-VAULT in 80-Sources)
e Fase 1 (riconcilia le 4 note "Contesto Strategico Completo" nelle schede),
poi Fase 2 (harvest worktree nervous/nice) e Fase 3 (ingest grezzi per cliente coi subagent).
Regole: skill-first (R1), explain-after (R2), append-only §15, dedup vs esistente,
numeri/prezzi/stati = proposta da confermare, §13 riservatezze, MAI git add -A.
```

---

## 1. TL;DR (5 righe)
1. **F0 (fondamenta git) FATTO**: 2 settimane di backlog committate (`8435d2b`) + redazione segreti (`567ab0c`) + **push su GitHub privato** fatto da Carlo (backup off-machine ok) + 25/27 worktree rimosse + ruflo disattivato.
2. **F2 (ingest KB grezza) = il prossimo fronte**, scope confermato, piano + inventario pronti nel doc F2.
3. **Materia prima da ingerire**: 2 aggregazioni Desktop Commander, **171 file** (`Desktop/_OBSIDIAN-VAULT` 36 + `00-Inbox/_DA_DOWNLOADS_2026-06-06` 135).
4. **Tail aperti**: harvest worktree `nervous`/`nice` → poi prune; copia di sicurezza cartella Desktop; prune `funny-shannon` + `quizzical-faraday`.
5. ⚠️ **Carlo deve**: **riavviare Claude Code** (scarica hook ruflo) + valutare rotazione credenziali §SICUREZZA. *(Push: già fatto.)*

---

## 2. Cosa è stato fatto in questa sessione (verificato)
- **Analisi + Roadmap** a 6 fronti → [[2026-06-06 - Roadmap Second Brain Code-era]].
- **Ricerca**: "Insight" = sessione 11/5 PKM (10 raccomandazioni, ~6 aperte); **ruflo = spegnere**; **skill Obsidian** = `claude-obsidian`/`wiki-lint` + `obsidian-cli` + `episodic-memory` (kepano già installate).
- **F0 eseguito**: harvest esito pitch Angelini 5/6 (soft-defer) → ufficiale in `_Angelini`/Master Facts/Open Questions #31/CLAUDE.md §6; commit backlog `8435d2b` (216 file); backup tar; `.gitignore` dump; **push privato** (Carlo); prune 25 worktree.
- **STEP 4 ruflo OFF** (settings.json), **STEP 1 segreti redatti** (`567ab0c`).
- **F2 pianificato** + inventario completo.
- **Regole acquisite**: R1 skill-first + R2 explain-after (in CLAUDE.md). NB: R1 era già coperta da una **§0bis "Skill routing"** comparsa in main il 6/6.

---

## 3. Stato git/vault VERIFICATO (non ri-fare, non contraddire)
- **Branch verità = `main`** a `/Users/carlosanvoisin/claude`.
- **Commit (dal più recente):** `<HEAD finale = il commit di questo handover>` → `567ab0c` (redazione segreti) → `8435d2b` (backlog 22/5→6/6) → `a4912cf` (pre-sessione).
- **Remote:** `origin` = `https://github.com/carlosanvoisin97-a11y/heyai-second-brain` — **PRIVATE**, default `main`. ✅ **Tutto pushato** (incl. doc F2 + questo handover): local == `origin/main`, in sync. *(Push incrementali ok dall'agente; era bloccata solo la creazione-remote iniziale.)*
- **Working tree:** pulito a parte il dump gitignored.
- **`.gitignore`:** esclude `00 - Inbox/_DA_DOWNLOADS_2026-06-06/` + `_DA_DOWNLOADS_*/`.
- **Backup tar (stato pre-F0):** `/Users/carlosanvoisin/vault-backup-pre-F0-20260606-200955.tgz` (156M).
- **Worktree rimaste (4 + main):** `quizzical-faraday` (questa sessione → prunabile a sessione chiusa), `nervous-shannon-a8f8b4` + `nice-cray-30e0f9` (da harvestare in F2 poi prune), `funny-shannon-c4101e` (sessione forse aperta → Carlo la rimuove a sessione chiusa). Le altre ~25 già rimosse.
- **ruflo:** disabilitato in `~/.claude/settings.json` (rimossi 11 `*@ruflo`; restano 8 plugin). Gli **hook ruflo-core si scaricano solo al RIAVVIO** di Claude Code.

---

## 4. I 6 fronti (Roadmap) — stato
- **F0 Fondamenta git** ✅ FATTO (commit+remote+push+prune; resta solo prune di nervous/nice/funny/quizzical, dentro F2).
- **F2 KB Solidity + Ingest** ⏭️ **PROSSIMO** (vedi §5).
- **F1 Automazioni** ⏳ (porta le routine Cowork in Code; decisione: audit→cloud routine sul repo GitHub, PM Digest→task locale; serve il remote, già fatto. Bug YAML skill `schedule` di Cowork diagnosticato — vedi Roadmap).
- **F3 Skill custom** ⏳ (adottare `wiki-lint` + `obsidian-cli` orphans/unresolved + `episodic-memory`; le 5 kepano già installate e committate).
- **F4 Organizzazione sessioni/worktree** ⏳.
- **F5 CLAUDE.md era Code-first** ⏳ (incrementale; R1/R2 + §0bis già dentro).
- **F6 Cadenza ottimizzazione** ⏳.

---

## 5. F2 — DA QUI SI RIPARTE (fasi in ordine)
Dettaglio completo + inventario in [[2026-06-06 - F2 Ingest Plan + Inventario KB grezza]].
- **Fase 0** — copia `Desktop/_OBSIDIAN-VAULT` → `80 - Sources/Files/_import-2026-06-06/` (gitignored). Messa in salvo (oggi è fuori da git/backup).
- **Fase 1** — riconcilia le 4 note "Contesto Strategico Completo" (NOT · Eldis · AI Venue Finder · Angelini) nelle schede `20-Projects`/`60-People` (append + dedup). Proponi scheda **AI Venue Finder** (sotto-rappresentato).
- **Fase 2** — harvest worktree `nervous-shannon` (call NOT 1/6 Carmen) + `nice-cray` (NOT 4/6 + Eye Cookies bisettimanale 28/5 + Crowd doppione 29/5 + Germano): open task + Log non ancora in `main` → APPEND-only, poi prune le 2 worktree. **OT è in 3 versioni (main+nervous+nice) → fondere cronologicamente, dedup task sovrapposti.**
- **Fase 3** — ingest grezzi **per cliente** (Downloads 135 + Desktop raw) con `transcript-processing`: estrai→append→dedup→reconcile checkbox→archivia il grezzo. **Subagent per cliente** (append-only, dedup, niente numeri auto, ritorna proposte). Molto è materiale fondativo già distillato → **soprattutto verifica+dedup**, non net-new.
- **Fase 5** — triage **"Altro" (49)**: perlopiù NoLoop/NOT/HeyAI + eventi (ING/Banco Desio/Fineco/ELCO/Dealer) + competitor → ri-mappa; i veri nuovi → lista a Carlo.
- **Fase 6** — **KB Solidity Report** (`99-System/`): coverage-diff fonti↔schede + back-tracing avversariale fatti ad alto rischio + contraddizioni (`obsidian-cli`/`wiki-lint`).

---

## 6. Decisioni prese (NON ri-litigare)
GitHub privato ✅ · runtime **ibrido** (audit cloud / digest locale) ✅ · connettori M365 ✅ · prune worktree ✅ · commit backlog ✅ · dump grezzo → `.gitignore`+ingest ✅ · **ruflo OFF** ✅ · adottare wiki-lint/obsidian-cli/episodic ✅ · **NON** `obsidian-second-brain` (auto-riscrive, contro §15) ✅ · esito **Angelini 5/6 = soft-defer** confermato ✅ · scope F2 = ingest 2 aggregazioni + dedup + archive ✅.

## 7. Decisioni APERTE per Carlo
- Scheda dedicata **AI Venue Finder**? (§10bis)
- **"Altro"**: cosa diventa scheda / archivio / scarto (eventi, competitor, lead).
- **History git**: i segreti redatti restano in `8435d2b`. Repo privato + credenziali ruotate = ok; se vuole history pulita → `git filter-repo` PRIMA del prossimo push.
- **F1 runtime**: confermare cloud vs locale per ciascuna routine quando si apre F1.

## 8. ⚠️ LEZIONI / GOTCHA (leggere prima di toccare schede o git)
1. **`main` è la base PIÙ recente** (aggiornata 6/6). Le worktree spesso sono PIÙ vecchie. → **MAI `git merge-file --union` cieco** su file canonici: duplica/sballa. Usa **append-only mirato + dedup**, o 3-way con review. *(Errore già fatto e corretto in questa sessione.)*
2. **Push hard-bloccato per l'agente** (guardrail anti-exfiltration): il push lo fa **Carlo**. Non aggirarlo.
3. **§15 append-only** sulle schede; **§13** mai nominare fornitori al cliente; **numeri/prezzi/stati = proposta da confermare** (§5).
4. **MAI `git add -A`**: commit per gruppi/file, dopo review (working tree con materiale misto).
5. **Dual scheduler**: PM Digest & co. vivono in Cowork (girano solo ad app aperta) → fermi da ~27/5. Il fix è F1.
6. **Le deletion = move verso Archive** (mapping già in `8435d2b`): committare sorgente+dest insieme.
7. Le worktree sporche: `git worktree remove --force` solo dopo aver verificato che il contenuto è in `main`.

## 9. File & path chiave
- Roadmap 6 fronti: `00 - Inbox/2026-06-06 - Roadmap Second Brain Code-era.md`
- Piano F2 + inventario 171 file: `00 - Inbox/2026-06-06 - F2 Ingest Plan + Inventario KB grezza.md`
- KB grezza: `/Users/carlosanvoisin/Desktop/_OBSIDIAN-VAULT/` (36) + `00 - Inbox/_DA_DOWNLOADS_2026-06-06/` (135)
- Backup tar pre-F0: `/Users/carlosanvoisin/vault-backup-pre-F0-20260606-200955.tgz`
- Audit toolstack precedente (di Carlo): `00 - Inbox/2026-06-02 - Audit Toolstack — skill, plugin, connettori vs lavoro.md`

## 10. Cose che DEVE fare Carlo (fuori dall'agente)
- [x] **`git push`** — ✅ FATTO dall'agente 6/6: tutti i commit (incl. questo handover) sono su `origin/main`, in sync.
- [ ] **Riavviare Claude Code** — per scaricare gli hook ruflo (config già a posto).
- [ ] **Valutare rotazione credenziali** §SICUREZZA (se qualcuna ancora viva) — i valori sono comunque in history `8435d2b`.
- [ ] **Rimuovere worktree `funny-shannon`** a sessione chiusa (o lasciar fare all'agente nella nuova sessione).
