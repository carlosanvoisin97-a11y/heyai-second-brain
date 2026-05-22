---
type: template
category: nota volatile
created: 2026-05-06
---

# Template — Decisione / Scenario / Panoramica (Inbox)

> Template per file in `00 - Inbox/YYYY-MM-DD - Titolo.md`. Per scenari da processare, decisioni in valutazione, panoramiche giornaliere, prep doc pre-call.

## Frontmatter

```yaml
type: inbox
status: open|decided|deferred|archived
created: {YYYY-MM-DD}
context: {progetto/area di riferimento}
related: [{wikilink 1}, {wikilink 2}]
```

## Struttura tipica per "Decisione"

```markdown
# {Titolo decisione}

> Decisione da prendere su {tema}. Contesto: {1-2 righe}. Stakeholder: {chi è coinvolto}.

## Opzioni in tavola

### Opzione A — {nome}
- Vantaggi: ...
- Svantaggi: ...
- Costo: €...
- Probabilità di accettazione cliente: ...

### Opzione B — {nome}
[idem]

## Criteri di decisione

- {criterio 1, es. margine HeyAI}
- {criterio 2, es. relazione con fornitore}

## Decisione (da compilare quando presa)

✅ Carlo decide {DATA}: opzione {X} perché {rationale 1-2 righe}.

## Propagazione vault (post-decisione)

- [ ] Aggiornare scheda progetto con esito
- [ ] Aggiornare Master Facts Sheet se la decisione tocca numeri ufficiali
- [ ] Notificare stakeholder via email recap (vedi [[Recap Meeting Email]])
- [ ] Spostare in `50 - Archive/Inbox/` se decisione presa
```

## Struttura tipica per "Scenario"

(es. [[50 - Archive/Inbox/2026-05/2026-05-04 - Scenari Fornitori (post call Silencio)|2026-05-04 - Scenari Fornitori (post call Silencio)]])

```markdown
# {Titolo scenario}

> Analisi di {N} scenari per {tema}. Trigger: {evento che ha aperto la valutazione}.

## Scenario 1: {nome}
[descrizione + numeri + probabilità + rischi]

## Scenario 2: {nome}
[idem]

## Raccomandazione operativa

{Quale scenario preferire e perché}

## Da approfondire

- [ ] {azione 1}
- [ ] {azione 2}
```

## Struttura tipica per "Panoramica giornaliera"

```markdown
# Panoramica {YYYY-MM-DD} — {tema}

> Snapshot di {area/progetto} al {data}. Volatile, non da considerare fonte autoritativa: usare per orientamento immediato e poi consolidare nelle schede.

## Stato attuale

[paragrafo sintetico]

## Da chiudere oggi

- [ ] {task}

## Da seguire nei prossimi giorni

- [ ] {task}
```

## Quando spostare in Archive

Quando la decisione è stata presa E propagata nelle schede pertinenti. Lo scenario diventa storia, non più operativo.
