---
type: prompt-template
usage: method
source: insights 2026-06-02
---

# 🛰️ Prompt 15 — Audit Parallelo con Workspace Isolati

## Quando usarlo
Per audit ampi su un cliente che si prestano alla parallelizzazione: sito vs mockup, proposta vs brief di gara, noi vs competitor, coerenza multi-documento. Velocizza e alza la copertura senza che gli agenti si pestino i piedi sui file.

## Template

> Esegui un audit parallelo su **{NOME_CLIENTE} / {NOME_PROGETTO}**.
> - Lancia N agenti, uno per dimensione (es. (a) sito live, (b) mockup/nostra proposta, (c) brief/capitolato di gara, (d) top competitor).
> - **Ogni agente scrive SOLO nel proprio file** (`audit-agente-1.md`, `-2`, ...). Nessun file condiviso, niente scritture concorrenti sullo stesso path.
> - Fonte di verità dell'audit = **brief/gara**, non il sito live.
> - Poi un **agente di sintesi** legge tutti i file, risolve i conflitti e produce un report unico: punteggio % di allineamento + disallineamenti prioritizzati per gravità.
> - Se un agente si interrompe, riparti solo da quello, non da capo.

## Come customizzarlo
- Definisci le dimensioni in base al task (per pagina, per sezione di proposta, per criterio di gara).
- Audit numerico: aggiungi un agente dedicato che usa il **Prompt 02**.
- Sintesi lunga: combinalo col **Prompt 13**.

## Perché esiste
Insights 2/6/2026: gli audit con agenti paralleli erano una tua mossa forte, ma a volte gli agenti scrivevano sullo stesso file sovrascrivendosi. Workspace isolati + agente di sintesi = stessa potenza, zero collisioni.
