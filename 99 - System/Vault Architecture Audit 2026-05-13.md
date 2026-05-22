---
type: audit
status: executed
created: 2026-05-13
updated: 2026-05-13
executed: 2026-05-13 sera tardo
---

# 🏗️ Vault Architecture Audit — 13 maggio 2026

> Audit architetturale richiesto da Carlo. Identifica file/cartelle che non aggiungono valore al lavoro PM e propone azione.
>
> **Stato finale 13/5 sera tardo**: tutte le sezioni A+B+C+D **ESEGUITE** + 3 patch SKILL rolling-window applicate (A4 PM Digest merge sezioni Open Tasks · A5 Cowork Sessions Log entry-shrink 250 char · A6 Vault Link Audit rolling-window 7gg). Verificate via Grep sui SKILL.md vivi. Reversibili via `update_scheduled_task` con prompt precedente.
>
> **Misura net**:
> - `00 - Inbox/`: 30 → 8 file (31 archive + 5 delete)
> - `99 - System/`: 25 → 15 file (12 archive)
> - `70 - Meetings/`: eliminata (1 file → archive)
> - `CLAUDE.md`: §6 5col→4col, §7 60→30 nomi, §14 rolling window 3-5gg applicata
> - 3 SKILL patchati per rolling-window automatica futura
> - 17 wikilink ATTIVI propagati su CLAUDE.md/MOC/Open Tasks/Open Questions/Jakala/Performance Carlo

## Metriche vault al 2026-05-13

- 371 file `.md` totali, ~10.2 MB di Markdown
- `99 - System/`: 25 file `.md` + 1 `.xlsx` + cartella `DPIII Reports/`, 486 KB
- `80 - Sources/`: 151 file, 8.3 MB (qui dentro fa volume — fuori scope per default §scope)
- `60 - People/`: 59 schede, 172 KB
- `00 - Inbox/`: 30 file (incl. allegati .docx/.pdf/.html/lock), 304 KB

Hot path letto da ogni chat e da ogni cron:

| File | Parole | Bytes | Note |
|---|---|---|---|
| `CLAUDE.md` | 10.793 | 76.580 | Carlo dichiara "28K parole baseline è già pesante" → siamo ancora sopra |
| `99 - System/Open Tasks.md` | 4.557 | 31.072 | 3 sezioni "Aggiunte dal PM Digest" stackate, 47 marker #p1 |
| `99 - System/Cowork Sessions Log.md` | 4.258 | 32.027 | 13 entry, ultime 3 da 4–6 KB ciascuna |
| `99 - System/Master Facts Sheet.md` | 3.487 | 22.556 | OK |
| `99 - System/MOC - Home.md` | 1.857 | 14.187 | OK |
| `99 - System/Open Questions.md` | 1.994 | 13.818 | OK |
| `99 - System/Digest Log.md` | 690 | 4.519 | OK (1 riga per run) |

File `99 - System/Vault Link Audit.md` (58.272 byte, 8.043 parole, 10 audit storici): non in hot path letto ma è il file più grande di system; auto-aggiornato dal task `vault-link-checker`.

---

## A — Hot path bloat [P0]

Candidati ad alto impatto sul costo fisso letto da ogni sessione e da ogni cron.

| Path | Sezione/i interessate | Motivo | Azione consigliata | Decisione Carlo |
|---|---|---|---|---|
| `CLAUDE.md` §6 "Progetti attivi snapshot" | tabella P1/P2 | Stato progetti già in schede di `20 - Projects/<Cliente>/_*.md` (fonti autoritative) + Master Facts §pricing. Duplicato che richiede manutenzione manuale a ogni cambio milestone (es. il 13/5 Carlo ha dichiarato 3 alert "§6 da aggiornare" in indice 12/5 sera). | `keep + accorcia`: lasciare 3 colonne (Progetto · Cliente · Stato) e linkare alla scheda per il resto; il "Prossimo milestone" lo legge l'agente dalla scheda | □ |
| `CLAUDE.md` §7 "Persone chiave" | 63 righe | Lista cluster NoLoop/non-NoLoop + Angelini + fornitori. 60+ persone, ognuna ha già scheda in `60 - People/`. Cambia ogni volta che entra/esce qualcuno (Aegiscore 13/5 da triagiare, già pendente). | `keep + accorcia`: tieni 3-4 nomi decisori (Garbarino, Donzelli, Nobili, Bruno Mattucci) + rimanda a `60 - People/` per gli altri | □ |
| `CLAUDE.md` §14 "Ultima review" 11-13/5 | 14 voci di changelog | §14 ha già "rolling window 3-5 giorni" dichiarata 13/5 con archive in `CLAUDE Changelog Archive`. Le voci 11/5 e 12/5 (5 voci totali) sono >2gg ma ancora nel file vivo. | `rolling-window`: rendere automatica la migrazione: voci >5gg → CLAUDE Changelog Archive. Trigger settimanale dal `weekly-review-interactive` del venerdì | □ |
| `99 - System/Open Tasks.md` sezioni "Aggiunte dal PM Digest 11/5 + 12/5 + 13/5" | 44 task in 3 sezioni (29+11+4) | Stream snapshot del Digest del giorno X che resta come archeologia anche quando i task sono migrati a Priorità #p1/#p2/#p3. PM Digest del giorno N+1 dovrebbe **mergere** le task del N in Priorità invece di creare nuova sezione. | `rolling-window`: il PM Digest mattutino del giorno N+1 sposta i `- [ ]` di "Aggiunte N/5" nelle sezioni Priorità (#p1/#p2/#p3) e cancella la sezione N. Patch al SKILL `pm-digest-mattutino` | □ |
| `99 - System/Cowork Sessions Log.md` | 13 entry, ultime 3 da 4-6 KB | Le entry sono testo narrativo lungo che duplica l'indice giornaliero `80 - Sources/Cowork Sessions/{date}.md` (già autoritativo + append-only). Il "Log" di esecuzione era pensato come 1-riga-per-run; è diventato 50-righe-per-run. | `rolling-window` + ridurre formato: tieni nel Log solo (data · trigger · n sessioni · sintesi 1 riga · link a indice giornaliero). Storico >14gg → `50 - Archive/Cowork Sessions Log/`. Patch al SKILL `cowork-sessions-index` | □ |
| `99 - System/Vault Link Audit.md` | 10 audit storici di cui 6 duplicati 8/5 | I 6 run del 8/5 erano batch fix progressivi (216→0). Audit a stato finale "0 broken" che si ripetono. | `rolling-window`: tieni ultimo audit + tabella "trend storico" (data · K broken · note). I run intermedi del 8/5 vanno in `50 - Archive/Vault Audits/` | □ |

---

## B — Duplicati funzionali [P1]

| Path | Motivo | Azione consigliata | Decisione Carlo |
|---|---|---|---|
| `00 - Inbox/2026-04-30 - Panorama iniziale.md` | 13gg, panorama prodotto al setup iniziale del vault, assorbito in Master Facts + CLAUDE.md | `archive` in `50 - Archive/Inbox/2026-04/` | □ |
| `00 - Inbox/2026-05-04 - Scenari Fornitori (post call Silencio).md` | 9gg, decisione fornitori presa 4-5/5, assorbita in `[[Jakala]]` + `[[Decisione finale fornitori]]` | `archive` in `50 - Archive/Inbox/2026-05/` | □ |
| `00 - Inbox/2026-05-04 - BOZZA Email Lavinia Ferrari (Futuritaly mockup).md` | 9gg, email superata da thread Lavinia 13/5 | `archive` | □ |
| `00 - Inbox/2026-05-05 - Recap Call Silencio + Performance Carlo.md` | 8gg, assorbito in `[[Jakala]]` + Performance & Coaching | `archive` | □ |
| `00 - Inbox/2026-05-05 - PREP Call Pasquali Jakala.md` + `CHEAT SHEET Call Pasquali.md` | 8gg, prep doc + cheat post-call → assorbiti in `[[Jakala]]` + `[[Andrea Pasquali]]` | `archive` (entrambi) | □ |
| `00 - Inbox/2026-05-05 - Email a Stefania - Conferma call Builder 8-5.md` | 8gg, call svolta 8/5 e già recap inviato 11/5 | `archive` | □ |
| `00 - Inbox/2026-05-05 - BOZZA Email Justin Lauro (API BAT-PARD).md` | 8gg, da verificare se inviata; se sì → archive, se no → keep | `verifica + decide` (Carlo) | □ |
| `00 - Inbox/2026-05-05 - Decisione finale fornitori.md` | 12 KB, decisione operativa storica | `archive` (è un documento di decisione, non vive in inbox) | □ |
| `00 - Inbox/2026-05-06 - PREP Rebalance call Pasquali.md` | 7gg, call svolta, assorbita | `archive` | □ |
| `00 - Inbox/2026-05-06 - BOZZA Follow-up Federico Simone post-call.md` | 7gg, follow-up evoluto in thread successivi | `archive` | □ |
| `00 - Inbox/2026-05-07 - {Cheat sheet, Prep call, Specchietto, Domande QA} FuturItaly Angelini Academy` (5 file .md + 5 .docx + 2 .pdf) | Q&A 8/5 svolta, deliverable assorbiti in `_Angelini Academy` + `Framework Pitch Finale.md` | `archive` blocco intero in `50 - Archive/Inbox/2026-05/Angelini Q&A 8-5/` | □ |
| `00 - Inbox/2026-05-08 - Angelini Academy - Domande tecniche IT.md` + `.docx` | Inviato a Caterina, ricevuta risposta 13/5 ("Analisi cluster utenti") | `archive` | □ |
| `00 - Inbox/2026-05-08 - PM Dashboard - Punti da attenzionare e Open Points.md` | Dashboard snapshot 8/5 superato dai PM Digest successivi | `archive` (è uno snapshot dashboard datato) | □ |
| `00 - Inbox/2026-05-08 - Audit a tappeto giornata 8 maggio.md` | Audit di un giorno specifico, superato | `archive` | □ |
| `00 - Inbox/2026-05-10 - {Prep call 11-5, Cheat sheet, Analisi 360, Audit pre-Elena, Ecosistema, Cosa vuole davvero Angelini}` (6 file) | Call 11/5 svolta, insight assorbiti in `_Angelini Academy` Layer 3 documenti | `archive` blocco | □ |
| `00 - Inbox/2026-05-11 - Email recap Andrea Pazienza — bozza contratto Longo Wave 2.md` | Email da verificare se inviata | `verifica + decide` | □ |
| `00 - Inbox/2026-05-11 - Analisi bozza contratto Longo Wave 2.md` | 21 KB analisi tecnica, fonte per workflow Longo 12-14/5 | `keep` finché workflow Longo non chiuso (deadline email a Longo 15/5) → poi `archive` | □ |
| `00 - Inbox/html2pdf7-0.html`, `html2pdf7-1.pdf` | File temporanei browser orfani | `delete` | □ |
| `00 - Inbox/~$26-05-07 - Cheat sheet ...docx` + `~$26-05-07 - Prep call ...docx` (2 lock file Office) | Lock file Office, già flaggati 8/5 | `delete` | □ |
| `~$HeyAI_Scenari_Negoziazione_Carlo.xlsx` (root vault) | Lock file Office in root | `delete` | □ |

Totale candidati B: **30+ file in 00-Inbox** + 3 lock files. Risparmio stimato in attenzione PM (non in token, perché 00-Inbox non è hot path letto da CLAUDE.md): inbox da 30 → ~5 file vivi.

---

## C — Schede morte [P2]

Schede in `99 - System/` riferite solo da audit storici o da task disabilitati.

| Path | Motivo | Azione consigliata | Decisione Carlo |
|---|---|---|---|
| `99 - System/Audit Claude Chats Estrazione 2026-05-07.md` | Audit del task `claude-chats-sync` **DISABILITATO 6/5** (CLAUDE.md §9). Storia post-mortem di un task morto. | `archive` in `50 - Archive/System/` | □ |
| `99 - System/Workflow Capture Claude.md` | Protocollo 3 livelli per chat claude.ai web. Carlo **non usa più claude.ai web** (CLAUDE.md §9), sostituito da `cowork-sessions-index`. Documento di workflow obsoleto. | `archive` (o `delete` se Carlo conferma irrilevante) | □ |
| `99 - System/Vault Snapshot 2026-05-06.md` | Snapshot pre-refactoring 6/5. Citato in CLAUDE.md riga 11 come backup rollback storico. | `archive` in `50 - Archive/System Snapshots/` + aggiornare CLAUDE.md riga 11 con nuovo path | □ |
| `99 - System/Numeri Cronologici.md` (`updated: 2026-04-30`) | Storia numeri 30/4 → 4/5. Master Facts Sheet è la fonte autoritativa. Citato da DPIII Output e da MOC. | `archive` se contenuto duplicato in Master Facts; `keep` se ha numeri unici (Carlo verifica) | □ |
| `99 - System/Patch SKILL cowork-sessions-index 2026-05-07.md` (8 backlinks) | Patch storica già applicata al SKILL vivo in `Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md`. Citata da CLAUDE.md §9 come riferimento di trail. | `archive` in `50 - Archive/System Patches/` + aggiornare i 8 wikilink (regola §15 voce 7) | □ |
| `99 - System/Patch SKILL cowork-sessions-index 2026-05-08 — addendum.md` (2 backlinks) | Stessa categoria | `archive` + aggiornare 2 wikilink | □ |
| `99 - System/Patch SKILL cowork-sessions-index 2026-05-08 sera — falle ordinamento e conflitti.md` (2 backlinks) | Stessa categoria, patch v2 | `archive` + aggiornare 2 wikilink | □ |
| `99 - System/Patch SKILL vault-link-checker 2026-05-12 — addendum v3.md` (3 backlinks) | Patch v3 vault-link-checker, già applicata 12/5 | `archive` + aggiornare 3 wikilink | □ |
| `99 - System/SKILL cowork-sessions-index POST-PATCH UNIFICATA.md` | CLAUDE.md §14 dice "decorato con banner storico, rimanda al SKILL.md vivo". File diventato banner storico, 22 KB. | `archive` con stub di redirect verso il SKILL.md vivo | □ |
| `99 - System/DPIII Fase 4 — Briefing per consolidamento.md` + `DPIII Fase 4 — Output Consolidamento 5-5.md` (2 file, 20 KB) | Status: "consolidamento concluso". Decisione fornitori presa 12/5. | `archive` blocco intero | □ |
| `99 - System/DPIII Reports/` (cartella, 5 file di analisi lotti, 149 KB) | 5 report analisi DPIII consolidati 5/5, decisione presa | `archive` cartella intera in `50 - Archive/DPIII Reports/` | □ |
| `99 - System/DPIII Reports/` (cartella se i 5 file vanno in archive) | cartella resterebbe vuota | `delete cartella` | □ |
| `70 - Meetings/2026-05-06 - Call rebalance Pasquali.md` | Cartella `70 - Meetings/` deprecata 6/5 (CLAUDE.md §3). Contenuto già linkato da `[[Jakala]]` + `[[Andrea Pasquali]]` come `[[2026-05-06 - Call rebalance Pasquali]]`. | `move` in `50 - Archive/Meetings/2026/` + aggiornare 2 wikilink + `delete cartella 70 - Meetings/` (regola §15 voce 7) | □ |

---

## D — Cartelle architetturalmente sbagliate [P3]

| Path | Stato | Azione consigliata | Decisione Carlo |
|---|---|---|---|
| `70 - Meetings/` | 1 file residuo, deprecata 6/5 | `delete cartella` dopo aver applicato Sezione C riga `70 - Meetings/...` | □ |
| `50 - Archive/.gitkeep` | placeholder git, ma il vault non è un repo git → inutile | `delete` | □ |
| Cartelle in `20 - Projects/` con <3 file (`Achipont`, `Eldis`, `Matteo Cosma`, `NoLoop` top-level, `Studio Murolo`) | Ognuna ha `_Cliente.md` + scheda progetto, coerente con refactoring 6/5 PARA modificato (CLAUDE.md §3.1) | `keep` — NO ACTION | ✅ keep (no decisione richiesta) |
| `20 - Projects/Achipont/` contiene .xlsx + .docx (5 file Office) | Allegati progetto, coerente | `keep` — NO ACTION | ✅ keep |
| `99 - System/Setup Microsoft Lists - Soolutions Delivery Board.md` | Setup doc tecnico ancora in uso (MS Lists in chiusura 11/5) | `keep` | ✅ keep |
| `99 - System/Soolutions Delivery Board - Tasks da importare.xlsx` (12.5 KB) | File Excel di import operativo MS Lists | `keep` o `move` in `80 - Sources/Files/` (non è system file) | □ |

---

## E — Cose intoccabili (per chiarezza)

Per evitare ambiguità su cosa NON va auditato dal report:

- `80 - Sources/Files/*` — allegati grezzi, scope esplicitamente escluso
- `50 - Archive/*` — già cold storage
- `10 - Daily Notes/*` — historical record append-only
- `80 - Sources/Cowork Sessions/*` — indici giornalieri, autoritativi e append-only
- `90 - Templates/*` — 11 template, tutti in uso
- `40 - Resources/Prompts/*` — 10 prompt library, attivi
- `60 - People/*` — 59 schede stakeholder, tutte vive (in vault giovane, nessuna in status "closed/dropped" sufficiente per archivio)
- Tutte le schede progetto in `20 - Projects/<Cliente>/<Progetto>.md` — tutte attive o di clienti attivi

---

## Sintesi quantitativa proposta

| Sezione | N candidati | Risparmio token hot path | Risparmio attenzione PM |
|---|---|---|---|
| A. Hot path bloat | 6 azioni (4 file + 2 rolling-window patch SKILL) | ~25-35% (CLAUDE.md + Open Tasks + Cowork Log + Vault Link Audit) | alto |
| B. Duplicati funzionali | 30+ file in 00-Inbox + 3 lock | 0 (non hot path) | molto alto (inbox 30→5) |
| C. Schede morte | 12 file in 99-System + cartella DPIII Reports | ~10-15% letture system (file non più consultati a sproposito) | alto |
| D. Cartelle sbagliate | 1 cartella delete + 1 .gitkeep | trascurabile | medio |

---

## Protocollo decisionale richiesto

Per ogni □ in colonna "Decisione Carlo": scrivere `approve` / `reject` / `note: ...` direttamente in questo file, **oppure** chiudere via chat con sintesi "approva sezione A; reject righe X/Y; approva tutto C eccetto Numeri Cronologici" — l'agente esegue solo dopo OK esplicito.

**Per i candidati con >5 file impattati** (A righe `Open Tasks` + `Cowork Sessions Log`, B `00-Inbox blocchi`, C `DPIII Reports cartella` + `Patch SKILL 4 file`), CLAUDE.md §10ter.1 vincola a chiedere conferma esplicita prima del primo bit di esecuzione.

**Per i candidati che richiedono propagazione wikilink** (C `70-Meetings/Call rebalance` 2 backlink, C `Patch SKILL` 15 backlink totali), CLAUDE.md §15 voce 7 vincola a grep globale + rinominazione di TUTTI gli usi prima di chiudere il commit.

**Per i candidati che richiedono cascata §10bis** (nessuno in questo report — non si propone archive di scheda progetto/persona).
