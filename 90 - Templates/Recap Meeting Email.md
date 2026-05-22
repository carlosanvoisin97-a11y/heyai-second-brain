---
type: template
category: comunicazione cliente
created: 2026-05-06
---

# Template — Recap Meeting → Email

> Template per email di recap post-call. Stile Carlo (cfr. CLAUDE.md §2.1). Va usata insieme a [[40 - Resources/Prompts/03 - Recap Call → Email Cliente]] e [[40 - Resources/Prompts/08 - Recap Meeting con Action Items]].

## Pattern email (stile Carlo)

```
Ciao [Nome],

grazie ancora per la call di [oggi/ieri]! [Riga di transizione contestuale].

Ti lascio un recap dei punti che abbiamo toccato:

* [punto 1 — sintesi 1-2 righe]
* [punto 2 — sintesi 1-2 righe]
* [punto 3 — sintesi 1-2 righe]

Per i prossimi passi:

* [azione 1 — chi, quando]
* [azione 2 — chi, quando]
* [azione 3 — chi, quando]

[Frase di chiusura morbida, magari con marker di cautela tipo "se ti torna, procediamo così"]

Fammi sapere se ti torna tutto, per qualsiasi cosa resto a disposizione!

A presto,
Carlo
```

## Cosa fare PRIMA della bozza

1. Verificare 2-3 email recenti di Carlo via Outlook search (`sender: c.sanvoisin@heyaidigital.it`) per calibrare il tono.
2. Estrarre punti dal transcript della call (se disponibile).
3. Verificare i numeri citati con [[99 - System/Master Facts Sheet]].

## Cosa fare DOPO l'invio

1. Recap dei punti chiave inserito come append nel `## Log` della scheda progetto pertinente (cfr. CLAUDE.md §15 Vault-live update).
2. Action items inseriti come `- [ ]` nelle schede progetto + `## Task aperti`.
3. Citazioni rilevanti del cliente in `## Citazioni testuali da preservare` se strategiche.

## Cose da NON scrivere (cfr. §2.1)

- "il modo migliore per", "davvero", "con calma"
- Formalismi pesanti tipo "cordialmente"
- Postamboli stile "siamo a disposizione per qualsiasi chiarimento"
- Bullet `1./2./3.` numerati (eccetto azioni in stretta sequenza)

## Output formato di consegna

Testo pulito, no code block, no formattazione che andrebbe rimossa prima del paste in Outlook. Ogni paragrafo come riga continua, riga vuota tra paragrafi.
