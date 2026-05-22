---
type: audit
created: 2026-05-07
updated: 2026-05-07
---

# 🔍 Audit estrazione iniziale Claude Chats — 2026-05-07

> **Trigger**: nell'incidente Open Tasks stale del 7/5, Carlo ha sollevato il dubbio se l'estrazione iniziale delle chat claude.ai web (in `80 - Sources/Claude Chats/Export 2026-04-30/`) fosse stata processata correttamente — alcuni task aperti (es. "Preparare Requirement Log Wave 2") sembravano fare riferimento a deliverable già esistenti nelle chat senza che fosse stato chiuso il task corrispondente.

## Conclusione

**Non c'è bisogno di rifare l'estrazione iniziale.** L'audit ha verificato che:

1. L'index esiste, è ben strutturato e completo: [[Index Claude Chats Export 2026-04-30]] (64 conversazioni indicizzate per progetto/area, 212 artifacts totali, range temporale dic 2025 → apr 2026).
2. **Gli artifacts NON contengono deliverable concreti**: nessun `.xlsx`, `.docx`, `.pdf` o `.pptx` è presente in `Export 2026-04-30/*/artifacts/`. Tutti i 212 artifacts sono **script di generazione** (`.js`, `.py`, `.html`, `.sh`) usati durante le sessioni claude.ai per produrre i deliverable, ma i file output finali (Excel di Requirement Log, docx di proposte, pptx di pitch) sono finiti altrove (Downloads di Carlo, SharePoint, allegati email), non negli artifacts.
3. Quindi i task aperti del tipo "Preparare X" che facevano riferimento a deliverable presenti nelle chat **non avevano un file pronto in vault da chiudere**: avevano lo script che genera il deliverable ma non il deliverable stesso.

## Verifica del caso "Requirement Log Wave 2"

- **Chat sorgente**: [[Analisi requisiti tecnici e funzionali per prototipo]] in `Export 2026-04-30/Analisi requisiti tecnici e funzionali per prototipo/`
- **Artifacts**: 2 script Python (`build_audit.py`, `build_req_log.py`)
- **File xlsx generato dallo script**: NON presente negli artifacts — era output runtime
- **Soluzione 7/5**: Carlo ha rigenerato il file `Wave2_RequirementLog_FINAL.xlsx` (17.5 KB) e lo ha caricato in chat. Salvato in vault: [Wave2_RequirementLog_FINAL.xlsx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/NoLoop/Wave%202/Wave2_RequirementLog_FINAL.xlsx). Task chiuso `[x]` in [[_Wave 2 NoLoop|Wave 2 NoLoop]] e in [[Open Tasks]].

## Pattern rilevato (per il futuro)

I task del tipo "Preparare X" creati dall'estrazione iniziale **non hanno fonte vault diretta**: la fonte è un transcript di chat dove l'output era effimero (script o testo in chat). Questi task vanno chiusi al primo deliverable concreto prodotto da Carlo (file xlsx/docx/pdf in vault, oppure invio email confermato).

Per evitare il pattern in futuro:
- Quando viene creato un task "Preparare X" da un'estrazione, includere nel testo la **fonte chat** wikilinkata (es. `_da [[Analisi requisiti tecnici e funzionali per prototipo]]_`).
- Quando il deliverable viene effettivamente prodotto/inviato, chiudere il task con il link al file persistente in vault o all'evento (email log).

## Stato dei 64 chat folder

L'index è già organizzato per progetto. Per audit topic-by-topic, vedere [[Index Claude Chats Export 2026-04-30]].

Nessun gap rilevato che richieda intervento immediato. L'estrazione è considerata **completa e usabile come archivio storico**.

## Investigazione collaterale: stato scheduled tasks 7/5/2026

Durante l'audit ho controllato via `mcp__scheduled-tasks__list_scheduled_tasks` lo stato dei task schedulati. Risultato:

| Task | Enabled | Next run | Last run | Stato |
|---|---|---|---|---|
| `pm-digest-mattutino` | ✅ | 2026-05-07T06:02:25Z (08:02 CEST oggi) | 2026-05-06T06:38:27Z | ⚠️ **Non eseguito stamattina** — `nextRunAt` è in passato senza un nuovo `lastRunAt` corrispondente |
| `cowork-sessions-index` | ✅ | 2026-05-07T11:07:16Z (13:07 CEST oggi) | 2026-05-06T20:08:09Z | ⚠️ **Non eseguito al run delle 13:07 di oggi** |
| `claude-chats-sync` | ❌ disabilitato | — | 2026-05-06T19:38:01Z | OK (intenzionalmente disabilitato il 6/5) |
| `friday-wrap-up` | ✅ | 2026-05-08T15:03:57Z (venerdì 8/5) | 2026-05-04 | OK |
| `weekly-digest` | ✅ | 2026-05-11T07:01:03Z (lunedì 11/5) | — | OK |
| `dashboard-refresh-manual` | ✅ manual | — | 2026-05-06T19:57:10Z | OK |

**Diagnosi**: lo scheduler ha registrato il `nextRunAt` correttamente per i due task ricorrenti del 7/5 ma non li ha effettivamente eseguiti. Il `lastRunAt` non si è aggiornato. Cause possibili:

1. **Macchina di Carlo spenta o Cowork chiuso al momento dello scheduling**: i task scheduled di Cowork richiedono un client attivo per eseguirli; se il client non era running alle 08:02 CEST, il task ha mancato la finestra.
2. **Bug a livello di scheduler Cowork** — meno probabile.
3. **Conflitto con altre esecuzioni** — se cowork-sessions-index notturno del 6/5 sera (run 22:00 = 20:08 UTC) ha tenuto in coda qualcosa, può aver bloccato il run mattutino.

**Soluzione immediata**: trigger manuale del `pm-digest-mattutino` dal pannello Scheduled del sidebar Cowork. Questo aggiornerà Open Tasks e Daily Note 7/5.

**Soluzione strutturale**: verificare che il client Cowork sia in running ogni mattina prima delle 08:02 CEST per non perdere il digest. In alternativa, considerare se le chat persistenti su browser/desktop diverso possono prendere in mano l'esecuzione (probabile config server-side).

---

**File correlati**:
- [[Index Claude Chats Export 2026-04-30]] — index master delle 64 conversazioni
- [[CLAUDE]] §10ter — Pre-flight check (NUOVO 7/5/2026): include verifica Digest Log all'apertura di ogni chat
- [[CLAUDE]] §15.ter — Reconcile checkboxes (NUOVO 7/5/2026)
- [[Patch SKILL cowork-sessions-index 2026-05-07]] — patch da applicare manualmente al SKILL.md del task
