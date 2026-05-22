---
type: patch
target: /Users/carlosanvoisin/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md
parent_patch: "[[Patch SKILL cowork-sessions-index 2026-05-07]]"
created: 2026-05-08
updated: 2026-05-08
status: superseded
applied_at: 2026-05-08 sera
applied_via: mcp__scheduled-tasks__update_scheduled_task (chat normale Carlo)
superseded_by: "[[SKILL cowork-sessions-index POST-PATCH UNIFICATA]]"
---

> ✅ **APPLICATA 8/5/2026 sera** insieme alla patch principale 7/5 in patch unificata. File mantenuto per audit storico.

# 🔧 Patch SKILL.md `cowork-sessions-index` — addendum 2026-05-08

> **Obiettivo**: chiudere 2 gap operativi emersi nel run cron-13 del 8/5/2026:
> 1. Frontmatter `deadline` di Angelini Academy non aggiornato dopo Q&A call svolta (campo non whitelisted nella SKILL).
> 2. Coaching note "post-mortem call cliente Angelini 8/5" non creata per interpretazione conservativa della policy "mai creare schede".
>
> **Perché qui**: file SKILL.md vive fuori dal vault (`~/Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md`), Carlo applica a mano.
>
> **Da applicare insieme** alla patch principale [[Patch SKILL cowork-sessions-index 2026-05-07]] (4 sostituzioni guidate ~15 min). Quest'addendum aggiunge 2 sostituzioni guidate (~5 min). Tempo totale combinato: ~20 min.

## Modifiche da applicare

### Voce 5 — Estendere whitelist campi atomici aggiornabili

**Trova nella sezione "Cosa puoi fare":**
```markdown
- Aggiornare campi atomici nel frontmatter (`status`/`priority`) SE cambia esplicitamente nella sessione, sempre lasciando audit nel `## Log`
```

**Sostituisci con:**
```markdown
- Aggiornare campi atomici nel frontmatter SE cambia esplicitamente nella sessione (sempre lasciando audit nel `## Log`):
  - `status` / `priority` — cambio di stato esplicito o riprioritizzazione
  - `deadline` — quando un evento confermato lo invalida (es. "call svolta 8/5" → aggiornare deadline al milestone successivo). Mantenere lo storico in `deadline_history:` array
  - `stakeholders` — quando un nuovo partecipante emerge in call/email e diventa rilevante per il progetto
  - `last_call_date` / `last_contact` — auto-aggiornabile sulle schede persona quando emerge interazione nuova in trascrizione
  - `updated:` — sempre, ad ogni patch (timestamp YYYY-MM-DD)

  Tutti gli altri campi (`type`, `client`, `created`, `email`, `phone`, etc.) sono **immutabili da questo task**: vanno toccati solo dall'agente live in sessione con OK esplicito di Carlo.
```

**Razionale**: l'incidente del 8/5 ha mostrato che `deadline: 2026-05-08` (Q&A call) è rimasto nel frontmatter di Angelini Academy anche dopo che la call era stata svolta. La SKILL precedente whitelistava solo `status`/`priority`, lasciando `deadline` orfano: nessun agente formalmente autorizzato ad aggiornarlo. Il risultato: Open Tasks e PM Digest mattutini hanno mostrato un deadline obsoleto come pendente. Estendere la whitelist a campi "fattuali" (non valutativi) chiude il gap senza espandere lo scope a giudizi soggettivi.

### Voce 6 — Chiarire policy "mai creare schede" (scope ristretto)

**Trova nella sezione "Cosa NON puoi fare mai":**
```markdown
- Mai creare schede progetto/persona — segnala "Da triagiare" + notifica Carlo
```

**Sostituisci con:**
```markdown
- Mai creare **schede progetto** (`20 - Projects/<Cliente>/<Progetto>.md` — entità con identità autonoma, frontmatter `type: project`) o **schede persona** (`60 - People/<Persona>.md` — `type: person`) — segnala "Da triagiare" + notifica Carlo. Queste due categorie hanno cascata obbligatoria su Master Facts/CLAUDE.md/MOC/Open Questions (vedi CLAUDE.md §10bis), quindi devono passare per Carlo per coerenza sistemica.

  **Eccezioni che PUOI creare normalmente** (parte del flusso §15):
  - **Coaching note / post-mortem call** in `30 - Areas/Area - Performance & Coaching/YYYY-MM-DD - <Tipo>.md` (già 4 file analoghi: Silencio 4/5, Pasquali 5/5, rebalance 6/5, Angelini 8/5)
  - **Prep doc pre-call** in `00 - Inbox/YYYY-MM-DD - Prep call <X>.md`
  - **Recap meeting / minute** quando esistono come file (caso raro — di norma assorbi nelle schede progetto via `## Log`)
  - **Audit findings / panoramiche giornaliere** in `00 - Inbox/`
  - **Indici e log di sistema** in `99 - System/` (es. Cowork Sessions Log, Digest Log)
  - **File operativi del task stesso** (indice giornaliero, indice consolidato)

  Regola d'oro: se la nota ha **identità autonoma** che richiede tracciamento cross-reference (Master Facts, MOC, Open Questions, schede correlate) → è scheda → chiedi a Carlo. Se è una **nota di area / inbox / log** che vive nel suo dominio senza cascata → creala normalmente.
```

**Razionale**: l'8/5 mattina è stata generata in sessione una performance review pesante (voto 6.5/10 Carlo + 5 pattern + 3 lezioni pitch finale). Il task safety net ha skippato la creazione del file in `30 - Areas/Area - Performance & Coaching/` interpretando "mai creare schede" in senso largo. Risultato: contenuto strategico lasciato solo nell'indice giornaliero, dove rischiava di diventare invisibile alla prossima chat (le coaching note sono fonte critica per le call successive sullo stesso pattern). Chiarire la policy elimina questa ambiguità senza aprire la porta a creazioni non controllate.

## Verifica post-patch

Dopo aver applicato entrambe le voci, fai un dry-run mentale su 3 scenari per controllare che la SKILL si comporti correttamente:

1. **Scenario "deadline obsoleto"**: una sessione live registra "Q&A call svolta 8/5" → il task notturno deve aggiornare `deadline:` al milestone successivo (concept proposta entro fine maggio) E lasciare audit nel `## Log` E spostare il vecchio deadline in `deadline_history:`. Pre-patch: skippato, lascia obsoleto. Post-patch: aggiornato.
2. **Scenario "performance review post-call"**: Carlo riceve performance review onesta in chat → il task notturno deve creare una coaching note in `30 - Areas/Area - Performance & Coaching/` con il template del 5/5 (Silencio/Pasquali). Pre-patch: skippato, lascia in indice. Post-patch: file creato.
3. **Scenario "nuova persona emerge in trascrizione"**: una call cliente cita un nuovo stakeholder mai schedato → il task NON crea la scheda (resta vincolo schede persona) ma segnala "Da triagiare" come prima. Pre-patch e post-patch: identico, nessun rischio di scope creep.

Se i tre scenari producono il comportamento atteso, la patch è OK.

## Trigger di applicazione

Carlo applica entrambe le patch (7/5 + 8/5 addendum) **prima del prossimo run notturno cowork-sessions-index** del 22:00 dell'8/5/2026, oppure prima del run del 13:00 del 9/5. Se Carlo non applica in tempo, il run gira ancora con append-only puro + scope ristretto come ora — nessun danno, solo gap che si ripresenta.

## Sources

- [[80 - Sources/Cowork Sessions/2026-05-08 - Indice sessioni#Sessione 6 — Review Future Italy website project details (re-opened 8/5 mattina, post Q&A call cliente Angelini Academy)]]
- [[Patch SKILL cowork-sessions-index 2026-05-07]]
- [[CLAUDE]] §15 Vault-live update
