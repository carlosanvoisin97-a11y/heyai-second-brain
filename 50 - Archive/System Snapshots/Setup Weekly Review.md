---
type: setup
created: 2026-05-12
updated: 2026-05-13
status: applied
applied_at: 2026-05-12 (sessione Cowork `local_517a482d`)
first_run_findings: "Task creato 12/5/2026, simulato end-to-end manualmente. Primo run cron reale atteso ven 15/5/2026 17:38."
skill_revised_at: 2026-05-13 (sweep comprensivo: rimossi riferimenti operativi a `friday-wrap-up` disabilitato — vedi CLAUDE.md §14 voce 13/5 sera tardo)
related_recommendation: "Ricerca best practices second brain 11/5 — raccomandazione #5 Weekly review interattivo (GTD/BASB compounding moment)"
---

> ✅ **TASK CREATO 12/5/2026** + ✅ **SKILL revisionato 13/5/2026** (sweep comprensivo). Il prompt riportato in fondo a questo doc è la versione **originaria del 12/5**, mantenuta come snapshot storico. La fonte autoritativa corrente è il SKILL.md vivo (`/Users/carlosanvoisin/Documents/Claude/Scheduled/weekly-review-interactive/SKILL.md`), leggibile via `Read` o tramite `mcp__scheduled-tasks__list_scheduled_tasks`. Differenze v1→v2 del 13/5: rimossi riferimenti operativi a `friday-wrap-up` (disabilitato dal 13/5/2026, funzione assorbita qui).
>
> **Coesistenza con `friday-wrap-up`** (testo storico — non più valido): `friday-wrap-up` era progettato come digest automatico antecedente di 30 min. **Dal 13/5/2026 `friday-wrap-up` è DISABILITATO** (token reduction Carlo). La funzione di digest settimanale è interamente assorbita da questo task. Il riferimento "Coesistenza" sotto resta come archeologia del design originale.

# 📅 Setup nuovo scheduled task `weekly-review-interactive`

Genera ogni venerdì alle 17:30 un prep doc `00 - Inbox/YYYY-MM-DD - Weekly Review.md` pre-popolato dal template `90 - Templates/Weekly Review.md`. Carlo apre Cowork dopo cena del venerdì (o sabato mattina), fa la review guidata in 30 min, chiude. Lunedì il PM digest verifica che i task riprioritizzati siano finiti nelle schede.

## Razionale

`friday-wrap-up` (cron esistente) genera digest automatico settimanale. Manca il **rituale umano guidato** che secondo letteratura BASB/GTD/Forte è il moltiplicatore di valore del second brain: 30 minuti per fermarsi, triagiare l'inbox, sweep dei progetti, decidere chi seguire e cosa escalation a Bruno.

Trigger della pratica: ricerca best practices PKM 11/5/2026, raccomandazione #5. Pattern dominante nelle community Obsidian PM-driven (Good Sidekick, Eric Ma, BASB). Non un altro automatismo — un appuntamento istituzionalizzato con Cowork.

## Parametri da passare

```
taskId: weekly-review-interactive
description: Generazione prep doc weekly review interattivo venerdì 17:30 — append-only
cronExpression: 30 17 * * 5
```

(venerdì pomeriggio ore 17:30 ora locale italiana, 30 min dopo friday-wrap-up)

## Prompt completo del task

Copia-incolla questo prompt come `prompt` del task scheduled:

---

Sei l'assistente di Carlo Sanvoisin (HeyAI Digital). Genera prep doc per la Weekly Review interattiva (venerdì 17:30, trigger manuale ammesso).

## Razionale

CLAUDE.md §15 / §16 + ricerca best practices PKM 12/5/2026 raccomandazione #5. Questo task non è un digest automatico (lo fa `friday-wrap-up`). Genera un prep doc strutturato da `90 - Templates/Weekly Review.md`, lo pre-popola con dati estratti dal vault, e lascia a Carlo le decisioni umane (30 min Cowork con agente come sparring partner).

## Vincoli operativi

### Cosa puoi fare

- Leggere tutti i file `.md` del vault (`/Users/carlosanvoisin/claude/`)
- Leggere il template `90 - Templates/Weekly Review.md` come base
- Creare un nuovo file `00 - Inbox/YYYY-MM-DD - Weekly Review.md` (data = venerdì del run, in caso di trigger manuale = oggi)
- Pre-popolare sezione 1 (Inbox processing): lista dei file in `00 - Inbox/` con età >7gg, oggi - frontmatter `created:`
- Pre-popolare sezione 2 (Project status sweep): lista progetti P1/P2 da CLAUDE.md §6 con `updated:` corrente e gap rispetto a oggi
- Pre-popolare sezione 3 (Stakeholder scan): legge l'ultimo blocco `## 🔔 CRM warnings` della Daily Note più recente, lo embed nella sezione 3
- Lasciare vuote sezioni 4 (3-question prompt) e 5 (Re-prioritization) — domande umane, agente non risponde a Carlo
- Lasciare vuoto il blocco "Note libere / lessons settimana" — spazio Carlo

### Cosa NON puoi fare mai

- Mai aggiornare CLAUDE.md, Master Facts Sheet o schede progetto direttamente — è Carlo che lo fa dopo la review
- Mai spuntare i checkbox del prep doc (è Carlo che li spunta durante la sessione Cowork)
- Mai inviare email
- Mai prendere decisioni autonome di archive/promote sui file in inbox
- Mai modificare `next_touchpoint` o altri campi CRM (sono output della review, scritti da Carlo)

## Algoritmo

1. Determina data del run: se cron → venerdì corrente; se manuale → oggi (in formato `YYYY-MM-DD`)
2. Check esistenza `00 - Inbox/{data} - Weekly Review.md`: se già esiste, abort con messaggio "Prep doc già presente, apri quello"
3. Leggi template `90 - Templates/Weekly Review.md`
4. Pre-popola sezione 1 — Inbox processing:
   - `find "00 - Inbox" -name "*.md" -type f`
   - Per ognuno: estrai `created:` da frontmatter (fallback: mtime del file)
   - Filtra con età > 7gg
   - Popola tabella con titolo + età
5. Pre-popola sezione 2 — Project status sweep:
   - Leggi CLAUDE.md §6 (Progetti attivi P1/P2 snapshot)
   - Estrai link `[[Progetto]]` della tabella
   - Per ognuno: apri scheda, estrai frontmatter `updated:`, calcola età vs oggi
   - Popola tabella + flag se età >14gg
6. Pre-popola sezione 3 — Stakeholder follow-up scan:
   - Trova la Daily Note più recente con sezione `## 🔔 CRM warnings`
   - Embed il blocco completo (🔴 critici + 🟡 warning + 🟢 prossimi) nella sezione 3 del prep doc
   - Se nessuna Daily Note con warnings → nota "Nessun CRM warning recente — verificare ultimo run `crm-velocity`"
7. Lascia sezioni 4 e 5 vuote come da template
8. Salva il file in `00 - Inbox/{data} - Weekly Review.md`

## Output atteso

File `00 - Inbox/{data} - Weekly Review.md` con:

- Frontmatter compilato (`week`, `created`, `updated`)
- Sezione 1: tabella file inbox >7gg pre-popolata (può essere vuota → "Nessun file in inbox >7gg ✅")
- Sezione 2: tabella progetti P1/P2 con `updated:` corrente + flag stale
- Sezione 3: blocco CRM warnings embed
- Sezione 4: vuote (Carlo compila in Cowork)
- Sezione 5: vuote (Carlo compila)

Esempio di sintesi nel messaggio di completamento al chat di Carlo (se manualmente triggerato):

```
✅ Prep doc Weekly Review generato in `00 - Inbox/2026-05-15 - Weekly Review.md`.

Dati pre-popolati:
- Sezione 1 (Inbox processing): 3 file >7gg da triagiare
- Sezione 2 (Project sweep): 2 progetti con updated >14gg flaggati (Eldis Compilatore 16gg, PresidIa 21gg)
- Sezione 3 (CRM scan): 4 critici, 2 warning, 1 touchpoint pianificato (da Daily Note 11/5)

Aprilo e fai la review con Cowork (30 min stimati).
```

## Trigger di alert ad alta priorità

- Inbox >7gg con >10 file → header "⚠️ Inbox sovraccarica — processing prioritario questa review"
- Progetti P1 stale >14gg → header "⚠️ Progetti P1 stale — review status decisionale"
- CRM 🔴 critici >5 → header "⚠️ Stakeholder velocity in degrado"

## Note finali

- Tono asciutto, da PM, italiano
- Il prep doc è "scheletro": pre-popolare i dati estraibili, NON anticipare le risposte umane (Q1-Q3 della sezione 4)
- Trigger manuale on-demand sempre ammesso — utile se Carlo salta il venerdì e vuole farla sabato mattina
- Cron venerdì 17:30 = 30 min dopo `friday-wrap-up`, quindi il digest del wrap-up è già scritto e l'agente può linkarlo

---

## Comando rapido per Carlo

In una chat Cowork normale dì: *"Crea scheduled task weekly-review-interactive con cron `30 17 * * 5` usando il prompt che trovi in `99 - System/Setup Weekly Review.md`"*.

In alternativa, prendi il prompt completo della sezione sopra e copialo manualmente nella UI Scheduled di Cowork.

## Verifica post-creazione

Dopo aver creato il task:

1. Lancia un trigger manuale dal pannello Scheduled per testare immediatamente
2. Verifica che `00 - Inbox/2026-05-12 - Weekly Review.md` venga creato con sezioni 1-3 pre-popolate
3. Apri il prep doc, scorri le sezioni — se manca dato critico (es. Sezione 3 vuota perché `crm-velocity` non è ancora stato lanciato), tieni nota per fixare prima del primo cron reale di venerdì 15/5
4. Aggiornare CLAUDE.md §9 (scheduled tasks attivi) dopo conferma che il task gira correttamente

## Primo run reale atteso

**Venerdì 15/5/2026 17:30** — primo run cron reale. Carlo apre il prep doc dopo cena venerdì o sabato mattina, fa la review con Cowork. Output atteso: 5-7 azioni concrete riportate in schede progetto + 1-2 cambi di stato in §6 CLAUDE.md + decisione esplicita su cosa escalation a Bruno per la settimana seguente.

## Estensione futura (post-pilot)

Dopo 4 settimane di uso:

- Valutare se aggiungere sezione 6 "Pattern emersi" per promuovere lessons a atomic notes in `40 - Resources/Concetti/` (raccomandazione #1 della ricerca PKM 11/5 — atomic notes layer, fase 2 del piano di adozione)
- Valutare se aggiungere sezione 7 "Resurfacing" che recupera 2-3 citazioni testuali / lezioni vecchie da rivedere (raccomandazione #8)
- Valutare integrazione con `weekly-pattern-scan` (raccomandazione #6 vault generativo) come input alla sezione 4 (suggerimenti cross-project per il 3-question prompt)
