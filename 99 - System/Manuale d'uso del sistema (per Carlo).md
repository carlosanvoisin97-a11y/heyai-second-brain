---
type: guide
status: live
created: 2026-06-10
updated: 2026-06-10
aliases: [Manuale d'uso, Come uso il sistema, Manuale Carlo]
---

# 📖 Manuale d'uso del sistema (per Carlo)

> Una pagina, per te (non per l'agente — quello legge CLAUDE.md). Come usare il second brain senza pensarci e senza romperlo. Aggiornato al 10/6/2026.

## 1. Il sistema in 30 secondi

Tre motori, un solo posto dove lavori:
- **Claude Code** (questa app) = dove LAVORI. Ogni cosa che dici a una sessione finisce nelle schede giuste, committata su git.
- **Routine cloud** (claude.ai) = il battito automatico, gira anche a Mac spento: digest ogni mattina 8:02, audit settimanali (sab/dom/lun).
- **Obsidian** = dove LEGGI e navighi. Il suo plugin git sincronizza tutto da solo ogni ~10 minuti ad app aperta.

Il vault è `~/claude`, versionato su GitHub privato. La verità sui numeri è il [[99 - System/Master Facts Sheet|Master Facts Sheet]]; la verità sui progetti è il frontmatter delle schede (vista: [[99 - System/Progetti Live.base|Progetti Live]]); i task veri sono i checkbox nelle schede, aggregati ogni mattina in [[99 - System/Open Tasks|Open Tasks]].

## 2. La tua giornata tipo (5 minuti totali)

- **Mattina (2')**: apri la daily note di oggi in `10 - Daily Notes/` → email rilevanti, meeting, alert 🔴🟠, task nuovi. Se c'è un banner "⚠️ M365 OFFLINE" → vedi §6.
- **Durante il giorno**: lavora in sessioni Code. Di' i fatti come vengono ("Donzelli ha confermato X", "la quotazione è 44K") — l'agente li committa nelle schede PRIMA di risponderti (§15). Non serve "salvare" niente a mano.
- **Sabato (15')**: arrivano in Inbox la Weekly Review (17:00) e la Weekly System Review (18:30) — leggi, spunta, decidi.
- **Obsidian**: tienilo aperto quando NON ci sono sessioni di sistema in corso — è lui che tira in locale l'output delle routine cloud.

## 3. Cosa dire a Claude (frasi → effetto)

| Dici | Succede |
|---|---|
| *"recap call"* / incolli una trascrizione | skill `transcript-processing`: decisioni/numeri/task → schede (§15.bis) |
| *"come sono andato in call?"* / *"post-mortem"* | skill `coaching-note` → voto+trend in Area Performance |
| *"bozza email a X"* | skill `email-drafting` (il tuo stile, §13 rispettata) |
| *"proposta / quotazione per X"* | `pm-method` + `investment-proposal-drafting` + audit numerico |
| *"verifica i numeri"* / *"regge il pricing?"* | skill `pricing-audit` (fonti, ricalcoli, regola ≤60%) |
| *"requirement log"* / *"tirami fuori i requisiti"* | skill `requirement-log` (.xlsx Master/Cliente) |
| *"creami un task"* / *"ricordami di"* | checkbox `- [ ]` nella scheda giusta → domattina in Open Tasks |
| *"vault-health"* | check salute vault (link/MOC/consistenza/contraddizioni) |
| *"/recap"* | riassunto della sessione corrente |
| trascini un file `.m4a`/`.mp3` | 🎙️ pipeline: trascrizione Deepgram → categorizzazione → schede |

**Gli hook che vedi comparire da soli**: 🧭 = suggerimento di skill sul primo prompt (non vincolante) · 🎙️ = rilevato file audio · ⚠️ campanello = digest fermo o degradato. Se non compaiono mai più: `/hooks` per controllarli.

## 4. Cosa controllare e quando

| Quando | Cosa | Dove |
|---|---|---|
| Ogni mattina | daily note (2') | `10 - Daily Notes/` |
| Quando pianifichi | task aperti per priorità | [[99 - System/Open Tasks]] |
| Sabato | le 2 review settimanali | `00 - Inbox/` |
| Quando decidi | dashboard decisioni | [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]] (finché vive) |
| In dubbio su un numero | fonte autoritativa | [[99 - System/Master Facts Sheet]] |
| "Dov'è X?" | indice navigazione | [[99 - System/MOC - Home]] |

## 5. Le 5 regole d'oro (per non rompere niente)

1. **Parla, non archiviare**: un fatto detto in sessione viene committato; un fatto detto a voce a nessuno è perso.
2. **I task sono checkbox nelle schede** — mai solo nella chat. Di' "creami un task su [scheda]" e verifica che l'agente lo scriva lì.
3. **I numeri ufficiali si cambiano solo confermandoli esplicitamente** ("confermo: 44K") — l'agente non li tocca da solo (§5).
4. **Lavori di sistema (hook, settings, skill) = Obsidian CHIUSO** (⌘Q vero, non solo finestra chiusa — il processo resta vivo e il plugin committa a metà scrittura).
5. **Mai lavorare sul vault da claude.ai web** — solo Code locale. I branch `claude/*` che compaiono vengono segnalati ogni mattina dall'indice sessioni: non ignorarli.

## 6. Se qualcosa si rompe

| Sintomo | Causa probabile | Fix |
|---|---|---|
| Daily di oggi con banner ⚠️ M365 OFFLINE | token Microsoft scaduto su claude.ai | claude.ai → Settings → Connectors → riautentica M365 (il bridge locale intanto integra, ma rinnova comunque) |
| Daily MANCA da ≥2 giorni lavorativi (campanello suona) | routine cloud morta | di' a Claude: *"RemoteTrigger list"* e poi *"run del digest"* |
| Domenica il link-audit segnala K alto | wikilink rotti nuovi | di' a Claude: *"vault-health links"* e fatti proporre i fix |
| Obsidian non mostra il lavoro recente | plugin non ha ancora pullato | aspetta ~10' o Obsidian command palette → "Obsidian Git: Pull" |
| Branch `claude/*` segnalato dall'indice | una sessione cloud ha pushato fuori da main | di' a Claude: *"harvesta il branch X"* (o eliminalo se è un run difettoso) |
| Un'automazione sembra non girare | runtime sbagliato | di' a Claude: *"verifica gli scheduler"* (controlla cloud + locale, §9bis) |

## 7. Mappa rapida

`CLAUDE.md` = costituzione (per l'agente) · [[99 - System/Master Facts Sheet]] = numeri · [[99 - System/Open Tasks]] = task · [[99 - System/Open Questions]] = dubbi aperti · [[99 - System/Progetti Live.base|Progetti Live]] = stato progetti · [[99 - System/MOC - Home]] = indice · [[99 - System/Digest Log]] = storico digest · `99 - System/Routines/` = logica automazioni · [[99 - System/Mappa Skill e Frammentazione AI]] = quale strumento per quale lavoro.
