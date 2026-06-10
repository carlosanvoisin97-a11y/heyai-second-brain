---
name: vault-live-protocol
description: "Protocollo operativo completo dietro CLAUDE.md §15 — cosa è vault-worthy, regole append-only dettagliate, modalità di commit A/B, checklist pre-commit a 7 voci, formato del vault commit in chat, cascata §10bis su nuove schede. Usa quando il vault commit non è banale: refactoring/rename/move di file, archive batch multi-file, creazione di nuove schede progetto/persona/fornitore, sessioni dense con molti fatti, o ogni volta che serve la checklist pre-commit completa."
---

# Skill — Vault-live update (protocollo completo, CLAUDE.md §15 + §10bis)

> **Rapporto con CLAUDE.md**: il *core sempre-attivo* del vault-live update vive già in CLAUDE.md §15 (regola di precedenza, append-only, Glob-prima-di-Edit, grep-on-rename, vault commit in chat) e vale **sempre**, anche senza leggere questa skill. Qui c'è il **dettaglio operativo esteso** da consultare quando il commit non è banale: refactoring/rename/move di file, archive batch multi-file, creazione di nuove schede, sessioni con molti fatti, o quando serve la checklist pre-commit completa.
>
> Le regole bloccanti **§15.bis** (trascrizioni → skill `transcript-processing`), **§15.ter** (reconcile checkbox), **§15.quater** (scheduled task changes), **§15.quinquies** (verifica strutturale post-action) **restano in CLAUDE.md** in forma piena — non sono duplicate qui per evitare drift; leggile lì.

## 1. Regola di precedenza (bloccante)

**Ogni numero, decisione o fatto vault-worthy nuovo che emerge in chat va committato sulle schede PRIMA di scrivere la risposta finale all'utente.** Non a fine topic, non a fine sessione. Prima di chiudere il messaggio.

In pratica:
1. Carlo manda informazione nuova (es. "Andrea mi ha mandato la quotazione finale 35+25+15 = 75K")
2. Riconosci subito che è vault-worthy
3. Apri tool, fai gli edit sulle schede impatti (Jakala-Proposta, PresidIA, Achipont, Futuritaly, Andrea Pasquali, decisione fornitori se applicabile)
4. **Solo dopo** scrivi la risposta in chat

Se la risposta in chat richiede analisi nuova basata su quei numeri, l'analisi va dopo il commit, perché il commit fissa lo stato e l'analisi è effimera. Mai l'inverso.

**Trigger di commit immediato (nessuna eccezione)**:
- Nuovo numero economico (quotazione, sconto, prezzo cliente, FTE, ore)
- Decisione esplicita ("ok, andiamo con X")
- Cambio di stato di un progetto/persona ("ha accettato", "ha rifiutato", "ha mandato")
- Citazione testuale strategica (cliente o fornitore)
- Nuova call svolta (anche solo verbale, prima della trascrizione)
- Action item assegnato a Carlo o a un terzo

## 2. Quando aggiornare il vault (live, durante la chat)

Mentre lavori con Carlo, identifica i momenti **vault-worthy** — cioè informazioni che valgono come fatto persistente, non solo come passaggio conversazionale. Sono vault-worthy:

- Una **decisione esplicita** ("ok, andiamo con €4-5K opzione B", "Carlo conferma X", "decidiamo di rifare il sito invece di aggiornarlo")
- Un **numero/cifra nuovo** o aggiornato (pricing, timeline, FTE, %)
- Una **citazione testuale** del cliente o di Carlo che vale come fact strategico
- Un **cambio di stato** di progetto, persona, fornitore (status, ruolo, fase)
- Un **task operativo** che Carlo (o tu) avete deciso di portare avanti
- Un **evento calendario** nuovo (call, deadline)
- Una **nuova persona** che è diventata stakeholder rilevante
- Un **output prodotto** (file creato/editato nel vault)

Non sono vault-worthy: fatica conversazionale (chiarimenti, ipotesi scartate, micro-dettagli tattici), TodoList di sessione effimere (vedi CLAUDE.md §11), ragionamenti che non hanno prodotto una decisione.

## 3. Come aggiornare (regole rigide — append-only e patch chirurgica)

**Cosa puoi fare**:

- Aggiornare `updated: YYYY-MM-DD` nel frontmatter delle schede toccate
- Append nei blocchi `## Log`, `## Sessioni Cowork correlate`, `## Citazioni testuali da preservare`, `## Eventi calendario`, `## Task aperti`
- Aggiungere nuovi `- [ ]` task (mai spuntare o rimuovere quelli esistenti senza istruzione esplicita di Carlo)
- Aggiornare campi atomici nel frontmatter (`status`, `priority`) SE cambia esplicitamente nella sessione, sempre lasciando audit nel `## Log`
- Creare nuove note volatili in `00 - Inbox/`, prep doc pre-call sempre lì
- Promuovere informazioni dal Log al Master Facts Sheet (CLAUDE.md §5 numeri ufficiali, §pricing) se la decisione è di portata strategica e Carlo ha confermato esplicitamente

**Cosa NON puoi fare**:

- Mai rewrite di sezioni esistenti — solo append
- Mai rimuovere contenuto da una scheda
- Mai modificare numeri ufficiali del Master Facts Sheet senza conferma esplicita di Carlo nella sessione corrente (CLAUDE.md §5)
- Mai creare schede progetto/persona senza chiedere a Carlo (segnalare "Da triagiare" se emerge una persona/progetto nuovo)

## 4. Quando committare (timing)

**Modalità A — incrementale**: aggiorna le schede mano a mano che emergono i fatti, senza aspettare la fine. Vantaggio: se la chat si interrompe, il vault è già consistente. Svantaggio: rumore in chat se commit-by-commit.

**Modalità B — batch a fine topic**: prima di passare al topic successivo (Carlo cambia argomento o chiude la chat), fai un "vault commit" che riepiloga in una breve risposta:

> Vault commit: ho aggiornato [[Eldis Compilatore]] (sezione Log con sintesi call + nuovo task #p1 su bug TIFF), [[Stefania Solidoro]] (Log + citazione "Marta non ha ultimato i test"). Master Facts non toccato. Procediamo.

Default: **Modalità B** (meno rumorosa, più chiara). Modalità A solo per sessioni lunghe e dense (es. recap di una call) dove rinviare tutto a fine ha rischio di perdersi qualcosa.

## 5. Verifica pre-commit (audit interno)

Prima di scrivere su una scheda, controlla:

1. **Path corretto?** Verifica in CLAUDE.md §3.1 (architettura `20 - Projects/` e `30 - Areas/`) la destinazione attesa per il file. Esempi:
   - Modulo Wave 2 (es. Crowd) → `20 - Projects/NoLoop/Wave 2/Crowd.md`, NON `40 - Resources/`
   - Progetto NOT (es. Eye Cookies) → `20 - Projects/NOT/Eye Cookies.md`, NON `20 - Projects/Eye Cookies.md`
   - Negoziazione fornitore (es. Jakala) → `30 - Areas/Area - Partnership Fornitori/Jakala.md`, NON `20 - Projects/`
   - Minute meeting → NON creare file separato; assorbi nelle schede progetto/persona via `## Log`
   - Post-mortem call performance Carlo → `30 - Areas/Area - Performance & Coaching/`
   - Prep doc pre-call → `00 - Inbox/YYYY-MM-DD - Titolo.md`
   - Se la destinazione non rientra in nessuna categoria → "Da triagiare" + chiedere a Carlo, mai improvvisare.
2. **🔍 Glob esecutivo del path** (NON basarsi sulla memoria dell'agente o su path usati in chat precedenti): prima di ogni `Edit` o `Write`, eseguire `Glob` sul path atteso in voce 1 per **verificare che il file esista davvero**. In caso di refactoring del vault avvenuto durante la sessione (Carlo sposta/rinomina file), un Edit su path obsoleto fallisce silenziosamente o crea un file fantasma. Se il Glob non torna match → cerca con pattern più ampio (`**/<filename>.md`) per individuare il nuovo path; se ancora non trovi → segnala "scheda non più nel path atteso" e chiedi a Carlo invece di improvvisare.
3. **La scheda esiste in `_<filename>.md` (con prefix underscore)?** Convenzione del refactoring 6/5: per le schede overview cliente o scheda principale di un cluster, il filename inizia con `_` per ordinare prima nella vista Obsidian (es. `_Wave 2 NoLoop.md`, `_Futuritaly.md`, `_Angelini Academy.md`). I wikilink **non** vanno scritti come `[[Wave 2 NoLoop]]` (broken — Obsidian non risolve), ma come `[[_Wave 2 NoLoop|Wave 2 NoLoop]]` (path con alias di display). Verifica con Glob.
4. Il frontmatter `updated:` è recente (ultime 6h) di un autore diverso? Se sì, leggi il delta e fai append solo del tuo contributo, mai sovrascrivi.
5. Quello che stai per scrivere duplica qualcosa già presente? Se sì, salta.
6. Stai per esporre dati riservati (CLAUDE.md §13) in un posto sbagliato? Se sì, riconsidera la destinazione.
7. **🔴 Refactoring di file (rename/move/split) — propagazione obbligatoria dei wikilink** (regola bloccante). Ogni volta che rinomini, sposti o splitti un file nel vault, **prima di chiudere il commit di sessione** esegui un grep globale del vecchio identificatore e rinomina TUTTE le occorrenze. Comando di riferimento: `grep -rn "<vecchio_filename>" /Users/carlosanvoisin/claude --include="*.md"`. Trigger di rinominazione: (a) wikilink `[[Vecchio]]` → `[[Nuovo|Display]]`; (b) frontmatter `parent_project: Vecchio` → `parent_project: Nuovo`; (c) frontmatter `projects: [Vecchio]` → `projects: [Nuovo]`; (d) path string in prep doc / 00-Inbox. **Chiusura del commit non è ammessa con residui non rinominati**: se il grep torna match dopo le rinomine, fissarle prima di scrivere la risposta in chat.

## 6. Cosa segnalare in chat

Ogni vault commit deve includere in chat:

- Lista delle schede toccate con wikilinks
- Sintesi 1 riga di cosa è stato aggiunto per ciascuna
- Se hai saltato schede ovvie (perché in pausa, perché updated recente di altro autore), dichiararlo

Se la sessione non ha prodotto fatti vault-worthy, non scrivere niente nel vault e non fare il commit. Va bene anche silenzio.

## 7. Cascata su nuove schede progetto/persona (CLAUDE.md §10bis)

Quando crei una nuova scheda in `20 - Projects/` o `60 - People/`, propaga subito (stessa sessione, non a fine giornata) le info essenziali:

- **Master Facts Sheet** (`99 - System/Master Facts Sheet.md`): aggiungi una riga sintetica nella sezione "💰 Pricing target altri progetti" (per progetti) o nella tabella cluster appropriata (per persone). Aggiorna `updated:` nel frontmatter.
- **CLAUDE.md** (`CLAUDE.md`): per i progetti NESSUNA riga da aggiungere — il §6 è vista derivata (M1, 10/6): basta il frontmatter completo della nuova scheda (type/status/priority/client/owner). Se è una persona del cluster cliente/fornitore, aggiungi bullet in §7. Aggiorna `updated:` nel frontmatter.
- **MOC - Home** (`99 - System/MOC - Home.md`): wikilink alla scheda con tag 🆕 per facilitare il prossimo audit.
- **Open Questions** (`99 - System/Open Questions.md`): se la scheda apre dubbi non risolti (decision maker, scope, modello partnership), nuova entry numerata.

Senza questa cascata, una scheda nuova resta invisibile ai file di sistema e ogni nuova chat parte cieca su quel progetto/persona. La regola "data `updated:` più recente vince" del CLAUDE.md §4 è una toppa, non sostituisce la cascata.

**Check-duplicati PRIMA di `Write`** (estensione §15.quinquies): prima di creare una nuova scheda, `find + grep` su OGNI alias plausibile dell'entità — non solo sul nome canonico atteso. Esempi: per una persona controllare nome + cognome + soprannome + azienda + brand affiliato (es. "Luca" + "Fratini" + "Aegiscore" + "Silencio"); per un progetto controllare nome + cliente + sigla + alias chat. La cascata §10bis non è solo "aggiungi a Master Facts/CLAUDE.md/MOC dopo creazione", è anche "check duplicati PRIMA della creazione".
