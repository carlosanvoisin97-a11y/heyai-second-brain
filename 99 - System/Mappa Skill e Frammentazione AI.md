---
type: system
created: 2026-06-07
updated: 2026-06-07
status: operational
purpose: Mappa unica dei tre sistemi AI (Cowork/vault, Claude Code, Desktop Commander), di dove vivono le skill, e di quando/come usarle. Risolve la confusione "quale strumento sa cosa".
---
# Mappa Skill e Frammentazione AI

> Documento di orientamento. Risponde a tre domande: (1) **perché** esiste la frammentazione, (2) **cosa** sa fare ogni sistema oggi, (3) **come** ricordarsi quando usare cosa. Non sostituisce `CLAUDE.md` (regole operative del vault); lo affianca con la vista d'insieme.

> ⚠️ **Aggiornamento 9/6/2026 — Cowork DISMESSO.** Carlo lavora solo in **Claude Code** (+ Desktop Commander per i file grezzi + le routine cloud/locali). Dove sotto si legge "Cowork", intendere ora: le skill del **vault** (`~/claude/.claude/skills/`) sono usate da **Claude Code** aperto sulla cartella del vault, non più dall'app Cowork. Le automazioni non dipendono più da "aprire Cowork" (vedi CLAUDE.md §9).

## 0. TL;DR — la regola in una riga

Hai **tre assistenti AI diversi** sullo stesso Mac. Ognuno legge una cartella di skill diversa. **Non si parlano.** Questa è la frammentazione. Soluzione pratica: sapere quale aprire per quale lavoro (tabella §4) e tenere sincronizzate solo le skill che servono in più posti (§6).

## 1. Perché esiste la frammentazione

Non hai sbagliato nulla: la frammentazione è il risultato naturale di aver adottato **tre strumenti diversi in momenti diversi**, e ciascuno è nato con la sua cartella di configurazione. Sono prodotti separati, di mondi separati:

- **Cowork** (l'app Claude desktop che apre il vault) → la usi per il lavoro di pensiero su HeyAI: schede, proposte, email, analisi commerciali.
- **Claude Code** (il comando `claude` da terminale) → lo usi per i progetti di sviluppo (Angelini Academy, siti, deck React/Vite).
- **Desktop Commander** (questa chat) → assistente generale sul Mac: file grezzi, conversioni, pulizia, asset, script.

Ognuno cerca le skill in una cartella diversa **perché sono software diversi**, non perché qualcosa è rotto. Il prezzo è che una skill creata in uno non è automaticamente vista dagli altri.

## 2. Le tre cartelle di skill — dove vivono DAVVERO (verificato sul disco)

| Sistema | Cartella skill (path reale) | Quante | Skill presenti |
|---|---|---|---|
| **Cowork + vault HeyAI** | `claude/.claude/skills/` | 9 | email-drafting, investment-proposal-drafting, transcript-processing, vault-live-protocol, obsidian-cli, obsidian-markdown, obsidian-bases, json-canvas, defuddle |
| **Claude Code (terminale)** | `.claude/skills/` | 5 | management-consulting, pm-method, recap, web-design-3d, website-builder-setup |
| **Desktop Commander (questa chat)** | `~/.agents/skills/` | 6 | desktop-commander-guide, skill-creator, find-skills, downloads-cleaner-vault-import, audio-transcriber-deepgram, workspace-memory |

> ⚠️ **Disambiguazione `.claude` (cruciale)**: esistono **due** cartelle `.claude` diverse.
> - **`~/claude/.claude/`** = dentro la cartella del **vault** (Obsidian) → contiene `skills/` del vault, `hooks/`, `settings.json` del vault, `worktrees/`. Path completo: `/Users/carlosanvoisin/claude/.claude/`.
> - **`~/.claude/`** = nella **home**, globale di Claude Code → `skills/` globali, `scheduled-tasks/`, `projects/` (i JSONL di sessione), `plugins/`, `settings.json` globale.
> Quando CLAUDE.md cita `.claude/skills/...` intende quello del **vault** (`~/claude/.claude/skills/`). Confonderli è una fonte tipica di errori (es. puntatori a task locali inesistenti).

## 3. A cosa serve ogni sistema — la divisione del lavoro

Il modo più semplice per non confondersi: **non pensare "quale skill", pensa "che tipo di lavoro".** Il tipo di lavoro ti dice quale strumento aprire.

| Tipo di lavoro | Strumento da aprire | Perché lì |
|---|---|---|
| Schede, proposte, email cliente, analisi commerciali HeyAI | **Cowork (vault)** | Ha CLAUDE.md, Master Facts, riservatezze fornitori, stile email di Carlo |
| Sviluppo: siti, deck React/Vite, codice, deploy | **Claude Code** | Vive nei repo `code/`, ha le skill web-design e website-builder |
| File grezzi, conversioni, asset, pulizia disco, script ad-hoc, trascrizioni audio | **Desktop Commander** (qui) | Veloce sul filesystem, nessun overhead di vault |

**Regola mentale**: se il lavoro tocca **numeri/clienti/email HeyAI** → Cowork. Se tocca **codice di un progetto** → Code. Se tocca **file sul Mac senza logica commerciale** → qui con me.

## 4. Quando e come usare le skill CON ME (Desktop Commander)

Questa è la parte che ti interessava di più. Le skill qui **si attivano da sole** quando scrivi una richiesta che combacia con la loro descrizione. Non devi ricordarti comandi: devi solo sapere che esistono e cosa innescano.

| Skill (qui con me) | Si attiva quando dici... | Cosa fa |
|---|---|---|
| `downloads-cleaner-vault-import` | "fai pulizia nei Downloads", "organizza questa cartella", "togli i duplicati" | Pulisce, deduplica, ordina per tipo, importa note nel vault |
| `skill-creator` | "crea una skill per…", "automatizza questo che faccio spesso" | Costruisce una nuova skill riutilizzabile |
| `find-skills` | "cerca una skill che…", "esiste una skill per…" | Cerca/installa skill dal registro pubblico |
| `desktop-commander-guide` | "cosa sai fare", "aiuto", "come inizio" | Onboarding e orientamento |

**Come ricordartele senza sforzo**: non devi memorizzare i nomi. Descrivi il problema in linguaggio naturale ("ho i Downloads in disordine") e la skill giusta parte. Se vuoi, all'inizio di una sessione puoi anche dirmi *"che skill hai disponibili?"* e te le elenco.

## 5. Trigger naturali — il "dizionario" frase → strumento

Tienilo come prontuario. Leggi a sinistra cosa stai per fare, a destra dove andare.

- "Trasforma questi vocali WhatsApp in note" → **Desktop Commander** (lavoro su file grezzi `whisper-job/`)
- "Recap di questa call cliente nel vault" → **Cowork** (skill `transcript-processing`)
- "Scrivi una email a [cliente NoLoop/NOT]" → **Cowork** (skill `email-drafting`)
- "Fammi la proposta di investimento per [progetto]" → **Cowork** (skill `investment-proposal-drafting`)
- "Genera le icone 3D per FuturItaly" → **Desktop Commander** (script Gemini su file)
- "Aggiorna/deploya il sito Angelini Academy" → **Claude Code** (repo in `code/`)
- "Fai ordine nei Downloads" → **Desktop Commander** (skill `downloads-cleaner-vault-import`)
- "Analisi/decisione strutturata, matrice, memo" → **Cowork** o **Code** (skill `management-consulting`)

## 6. Come ridurre la frammentazione (decisioni da prendere con Carlo)

Tre opzioni, dalla più leggera alla più strutturale:

1. **Niente sync, solo questa mappa** (stato attuale). Ti basta sapere dove sta cosa. Costo zero, ma devi ricordarti la divisione del §3.
2. **Sync mirato delle skill utili.** Le poche skill che servono in più sistemi (es. `recap`, `management-consulting`) vengono copiate o collegate (symlink) tra le cartelle, così sono disponibili ovunque. Lo fa Desktop Commander in pochi minuti, una tantum.
3. **Cartella skill unica condivisa.** Far puntare tutti e tre i sistemi alla stessa cartella via symlink. Più pulito, ma va testato che ogni app rispetti il link. Da fare con calma.

**Raccomandazione**: partire da (1) — questa mappa — e passare a (2) solo per le 2-3 skill che senti mancare quando cambi strumento. Evitare (3) finché non c'è un bisogno reale.

## 7. Trappola da ricordare (dal CLAUDE.md §9bis)

Le **automazioni** del vault (PM digest mattutino, audit link, ecc.) girano **solo se apri Cowork**. Se passi giorni solo in Code o qui con me, il digest non parte in silenzio. C'è un campanello che ti avvisa se la daily note è ferma da ≥2 giorni, ma la regola pratica resta: **apri Cowork ogni tanto** per far girare le automazioni.

---

*Manutenzione: aggiornare questa mappa quando si crea/sposta una skill o si cambia la divisione del lavoro tra i tre sistemi. Append-only come il resto del vault.*
