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
5. **Cattura sessioni Code fragile**: `code-sessions-index` è **LOCALE per forza** (legge `~/.claude/projects/*.jsonl`, file sul Mac NON nel repo → un agente cloud non li vede) + best-effort (gira 20:35 ad app aperta). **Backlog probabile** (sessioni di oggi non ancora indicizzate). → trigger catch-up + valutare robustezza (es. hook on-session-end). Questo è il "le sessioni Code non aggiornano la memoria del vault".
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
