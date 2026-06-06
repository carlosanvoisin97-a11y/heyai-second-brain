---
type: session-recap
source: claude-code
session_id: 0cac2447
project_path: ~/code/angelini-academy (worktree: quirky-snyder-a46d86)
date_last_activity: 2026-05-22
size_mb: 1.0
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28, security-audit]
---

# Recap Code session — angelini-academy wt quirky-snyder (0cac2447)

## Cosa è stato fatto

Sessione di **audit di sicurezza** richiesta da Carlo: "Puoi verificare tutte le attività che ho attivato tramite Claude e tramite Claude Cowork e tramite Claude Code terminale, locale, cartelle… per capire se mi sono esposto a rischi di sicurezza?". Pur partendo da un worktree del repo `angelini-academy`, l'audit ha attraversato l'intero perimetro Claude di Carlo (vault, MCP, settings, plugin, supply chain) e ha prodotto raccomandazioni — nessuna modifica eseguita (Carlo ha chiesto "Procedi a dirmi cosa vorresti fare senza eseguire nulla").

Aree ispezionate (sola lettura):

- `~/.claude/` — settings, plugin installati, marketplace, cache auth MCP
- `~/.claude/projects/-Users-carlosanvoisin-code-angelini-academy/memory/` — `user_profile.md`, `project_angelini_academy.md`
- `~/.claude/skills/website-builder-setup/SKILL.md` — skill di terze parti (repo `tenfoldmarc`)
- `~/code/angelini-academy/` — `.env.local`, `.gitignore`, `.vercel/project.json`, `package.json`, `.claude/launch.json`, `.claude/settings.local.json`
- Home dir `~/` — verifica presenza vault e cartelle CloudStorage

Verificato che la API key di 21st-dev-magic **non** è referenziata nel codice del sito (né in `.env.local` né in `package.json`): la chiave vive solo nella config MCP locale, il sito non dipende da essa.

## Progetti / aree vault toccate

angelini-academy → [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy|Angelini Academy]] (worktree usato solo come cwd; il contenuto del repo non è stato modificato).

Aree vault impattate dalle raccomandazioni (non dal lavoro eseguito):
- [[CLAUDE.md]] — proposta di slim down dei dati sensibili
- [[30 - Areas/Area - Cybersecurity|Area - Cybersecurity]] — output naturale di questo audit

## Decisioni

Nessuna modifica eseguita nella sessione. Carlo ha confermato l'impostazione "discovery prima, esecuzione dopo": l'agente ha presentato un piano per i punti 5/6/7 (routine Cowork autonoma, dati sensibili nel vault + account condiviso, supply chain MCP) e la sessione si è chiusa in attesa di approvazione su singole azioni.

Chiarimento operativo emerso (rilevante per CLAUDE.md): il selettore "cartella di lavoro" in Cowork è **per-chat**, non globale — non c'è un default che contamini tutte le sessioni. Conseguenza: la "cartella-parcheggio vuota" ipotizzata in fase iniziale è **facoltativa**.

## Numeri

Nessun numero commerciale toccato. Dimensione `CLAUDE.md` rilevata: 49 KB caricati in ogni sessione Cowork sul vault (citato come motivazione per la proposta di slim-down).

## Output (file)

Nessun file creato o modificato in repo o vault durante la sessione. Tutto il lavoro è stato lettura + raccomandazione.

## Task / Schede vault da aggiornare (§15)

Da decidere con Carlo se promuovere queste azioni — al momento NON eseguite:

- [ ] Audit `~/claude/CLAUDE.md`: identificare blocchi con dati riservati (quote soci, numeri cliente, esposizione finanziaria) candidati allo spostamento in file ad accesso on-demand (§13 Riservatezze)
- [ ] Verifica versione MCP `21st-dev-magic` in `~/.claude.json`: se `@latest`, valutare pinning a versione specifica per controllare gli aggiornamenti
- [ ] Valutare rimozione skill `website-builder-setup` (repo non ufficiale `tenfoldmarc`) se non più necessaria
- [ ] Verifica `fdesetup status` (FileVault) — la prima e unica linea di difesa fisica sul vault locale
- [ ] Conferma che `~/claude` non sia sincronizzato in cloud (verificato in sessione che non è in `Library/CloudStorage/`, ma serve esplicito ack)
- [ ] Decisione account condiviso vs separati per soci HeyAI: con account unico, soci hanno accesso a chat history, memoria, connettori (incluso MS365 con account lavoro Carlo) e a questa stessa chat di audit. Raccomandazione: account separati per ciascuno
- [ ] Documentare in [[30 - Areas/Area - Cybersecurity]] il modello di rischio emerso (perimetro Claude di Carlo + condivisione account + supply chain MCP)

## Citazioni

> "Siccome io condivido questo account Claude anche con i miei soci, vorrei capire se avendo selezionato quella cartella Claude nelle impostazioni anche loro lavorano su Claude."
> — Carlo, 22/5/2026 (rivela il problema account condiviso e la sua mental model iniziale errata sul selettore globale)

> "Procedi a dirmi cosa vorresti fare senza eseguire nulla e poi andiamo avanti."
> — Carlo, modalità approvazione granulare per audit di sicurezza (pattern operativo da preservare per task analoghi)

## Note di flag

- **vault-worthy alta**: questa sessione ha prodotto la prima ricognizione strutturata del perimetro di sicurezza Claude di Carlo. I follow-up devono atterrare in [[30 - Areas/Area - Cybersecurity]] o equivalente — al momento il vault non ha una scheda dedicata.
- **Account condiviso = topic aperto**: implica che ogni chat Cowork che tocca dati cliente (incluso il vault HeyAI) è visibile ai soci con accesso allo stesso login. Implicazione per §13 Riservatezze: anche le bozze interne — non solo i deliverable cliente — sono di fatto condivise. Da portare a Carlo come decisione strategica, non solo tecnica.
- **Supply chain MCP**: skill `website-builder-setup` proviene da repo terzo `tenfoldmarc` (definito "letto, benigno" dall'agente nella sessione, ma senza audit formale). MCP `21st-dev-magic` potenzialmente in modalità `@latest`. Tutto questo richiede una policy esplicita di pinning/whitelist se si vuole un perimetro chiuso.
- **Sessione interrotta a metà piano**: i punti 5/6/7 sono stati presentati come "intenzioni, non eseguo" e la chat finisce lì. Per chiusura serve una sessione follow-up dedicata, possibilmente non da worktree angelini-academy (che è cwd accidentale, non topic).
- **Path session JSONL**: la cartella `~/.claude/projects/-Users-carlosanvoisin-code-angelini-academy--claude-worktrees-quirky-snyder-a46d86/` conferma che il file vive nello scope worktree, non nel progetto top-level — coerente con la nuova organizzazione worktree-aware.
