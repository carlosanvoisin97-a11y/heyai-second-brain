---
type: session-recap
source: claude-code
session_id: cc3ff06a
project_path: ~/claude (worktree claude-worktrees-funny-shannon-c4101e)
date_last_activity: 2026-05-30
size_mb: 5.2
status: vault-worthy
created: 2026-05-30
tags: [code-session, daily-index-2026-05-30, sistema, vault-meta]
---

# Recap Code session — claude-wt-funny-shannon (cc3ff06a)

## Cosa è stato fatto
Sessione multi-front sul **sistema vault HeyAI**, originata dalla preoccupazione di Carlo di aver perso informazioni lavorando in Code anziché Cowork. Sequenza dei front: (1) inventario sessioni Code degli ultimi giorni e creazione recovery 27 sessioni `80 - Sources/Cowork Sessions/2026-05-28 - Recovery Code sessions backlog.md`; (2) diagnosi gap Cowork-vs-Code degli scheduler — scoperto che `pm-digest-mattutino` e tutti gli audit girano **solo se Cowork è aperto**, mentre Code ha uno scheduler separato con un solo task; (3) patch CLAUDE.md con nuovo §9bis "DUE scheduler separati"; (4) creazione hook `digest-staleness-check.sh` (campanello automatico su SessionStart se daily note ≥2gg vecchia); (5) update settings.json per attivare l'hook; (6) refactor della skill `code-sessions-index` su decisione "via di mezzo" (cascata append-only sicura sui Log, numeri restano proposte); (7) sweep audit su `Digest Log`, `Open Tasks`, `System Consistency Audit`, `Vault Architecture Audit`; (8) creato `00 - Inbox/2026-05-29 - Mappa riorganizzazione Angelini Academy.md`.

## Progetti / aree vault toccate
[[CLAUDE]] (§9bis nuovo) · [[99 - System/Digest Log]] · [[99 - System/Open Tasks]] · [[99 - System/System Consistency Audit]] · [[99 - System/Vault Architecture Audit 2026-05-13]] · [[80 - Sources/Cowork Sessions/2026-05-28 - Recovery Code sessions backlog]] · [[80 - Sources/Cowork Sessions/2026-05-26 - Indice sessioni]] · skill `code-sessions-index` (questo task) · skill `cowork-sessions-index` · skill `pm-digest-mattutino` · skill `vault-live-protocol` · skill `defuddle` · hook `digest-staleness-check.sh` · settings.json

## Decisioni esplicite
- Adottato modello "via di mezzo" per `code-sessions-index`: cascata applica SOLO append-only sicuro (1 voce `## Log` + link sessione correlata); numeri/pricing/status restano proposte da confermare. Motivo: working state Code spesso provvisorio (es. pricing Angelini €48.500 vs €49.500 oscillava tra sessioni).
- Hook SessionStart `digest-staleness-check.sh` attivato → campanello automatico su daily note stale.
- Standing rule riconfermata: "tutti uno alla volta mi, dirai il piano esecutivo in pochissime parole per conferma".

## Numeri / fatti vault-worthy
- Pricing Angelini Academy working state oscillava €48.500 vs €49.500 tra sessioni Code (motivo per cui i numeri restano "proposta", non applicati in automatico).
- Cron times: `pm-digest-mattutino` 08:00 locali (06:00 UTC) · `cowork-sessions-index` 20:22 · `vault-link-checker` Dom 21:00 · `code-sessions-index` 20:35 (questo task).
- Attività host-loop ricostruita 27-29/5 (Cowork stato aperto/chiuso confermato da log eventi).

## Output prodotti (file editati/creati)
- `.claude/scheduled-tasks/code-sessions-index/SKILL.md` (refactor via di mezzo)
- `Documents/Claude/Scheduled/cowork-sessions-index/SKILL.md`
- `Documents/Claude/Scheduled/pm-digest-mattutino/SKILL.md`
- `.claude/hooks/digest-staleness-check.sh` (nuovo)
- `.claude/settings.json`
- `.claude/skills/defuddle/SKILL.md` · `.claude/skills/vault-live-protocol/SKILL.md`
- `80 - Sources/Cowork Sessions/2026-05-28 - Recovery Code sessions backlog.md` (nuovo)
- `80 - Sources/Cowork Sessions/2026-05-26 - Indice sessioni.md`
- `00 - Inbox/2026-05-29 - Mappa riorganizzazione Angelini Academy.md` (nuovo)
- `99 - System/Digest Log.md` · `Open Tasks.md` · `System Consistency Audit.md` · `Vault Architecture Audit 2026-05-13.md`
- `CLAUDE.md` (§9bis nuovo, oltre a patch §9 voce code-sessions-index e §15.* affinati)
- `/tmp/obsidian-skills-eval/skills/*` (eval skill obsidian, asset esterno)

## Task aperti / prossimi passi
- Verificare che `digest-staleness-check.sh` flagghi correttamente alla prossima apertura Code (test reale).
- Validare in produzione la "via di mezzo" del code-sessions-index (questo run è la prima esecuzione reale post-refactor).
- Decidere se mantenere standing rule "uno alla volta" anche in modalità autonoma o solo in modalità interattiva.

## Schede vault da aggiornare

**Applicato in automatico (append-only sicuro)**:
- Nessuna scheda di progetto/persona toccata in cascata da QUESTA sessione — il lavoro è interamente sul sistema (CLAUDE.md, 99 - System/*, hook, skill). La regola del task `code-sessions-index` vieta esplicitamente di toccare CLAUDE.md, MOC, Open Questions in cascata automatica → no append cascata su nessuna scheda.

**Proposta da confermare (NON applicata)**:
- Aggiornamento `99 - System/Master Facts Sheet` se serve riflettere il nuovo §9bis o il pattern Code-vs-Cowork (NON applicato — fuori scope cascata).

## Citazioni testuali
- Prompt iniziale Carlo: "siccome ho lavorato molto in code e non in cowork, ho il timore che ho perso e non comitato una serie di informazioni... vorrei trovare un modo di interrogare ogni sessione fatta nell'ultima settimana".
- Standing rule (riconfermata): "tutti uno alla volta mi, dirai il piano esecutivo in pochissime parole per conferma".

## Note di flag
Vault-worthy MAJOR ma è una sessione di META-LAVORO sul sistema: refactoring infrastrutturale, nessuna cascata su schede progetto/persona. Tutte le modifiche al sistema sono già state committate in-session via Edit/Write (non in append; appropriato perché è il sistema che si auto-modifica, non una scheda da arricchire). Sessione continua tra 28/5 e 30/5 (1159 msg, 5.2 MB) — di fatto multi-day. Il `head -1` mostra cwd=null perché il primo record non lo include, ma i tool result confermano cwd `~/claude/.claude/worktrees/funny-shannon-c4101e/`.
