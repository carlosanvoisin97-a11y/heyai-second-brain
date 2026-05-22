---
type: template
category: deliverable cliente
created: 2026-05-06
---

# Template — Quotazione Cliente (progetti minori)

> Template per quotazione progetti minori (€20-55K range tipico). Più snella della Proposta Investimento. Esempi: Achipont, Eldis canone, Sito Angelini Academy.

## Frontmatter

```yaml
type: deliverable
client: {Nome Cliente}
project: {Nome Progetto}
status: draft|sent|signed
created: {YYYY-MM-DD}
target: {€XXK}
modality: full-ownership|revenue-share|canone-mensile
intermediario: {se applicabile}
```

## Struttura

1. **Cosa proponiamo** — outcome in 3 righe, deliverable principali
2. **Perché HeyAI** — case history breve, metodologia (mockup navigabile, audit numerico)
3. **Investimento** — cifra unica O range con scenari (full ownership / revenue share)
4. **Tempi** — milestone in settimane/mesi
5. **Cosa è incluso / non incluso** — chiaro, no zone grigie
6. **Prossimi passi** — cosa serve dal cliente per partire

## Regole

- **No copy-paste della Proposta Investimento Wave 2**: i progetti minori richiedono leggerezza, non 30 slide.
- **Sempre indicare cosa NON è incluso** per evitare scope creep post-firma.
- **Range vs prezzo unico**: range solo se il cliente ha bisogno di scegliere tra modelli (full vs revenue share). Se il modello è già deciso, prezzo unico.
- **Numeri**: sempre coerenti con [[99 - System/Master Facts Sheet]] §"Pricing target altri progetti".

## Output

PDF + .docx in `80 - Sources/Files/{Cliente}/{Nome_Quotazione}.pdf`.
