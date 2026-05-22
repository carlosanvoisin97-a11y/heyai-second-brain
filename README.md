# Secondo Cervello — Vault Obsidian

Vault gestito in collaborazione con Cowork. Hub centrale per email, chat, file e note.

## Struttura (sistema PARA esteso)

- `00 - Inbox/` — Note non ancora processate, da triagiare
- `10 - Daily Notes/` — Briefing giornaliero (PM digest)
- `20 - Projects/` — Progetti attivi con outcome definito
- `30 - Areas/` — Aree di responsabilità ricorrenti (no scadenza)
- `40 - Resources/` — Knowledge base, riferimenti, documentazione
- `50 - Archive/` — Progetti chiusi e materiale archiviato
- `60 - People/` — Schede persona (colleghi, clienti, contatti)
- ~~`70 - Meetings/`~~ — DEPRECATA: minute assorbite nelle schede via CLAUDE.md §15
- `80 - Sources/` — Dati grezzi importati dalle fonti
  - `Email/`
  - `Claude Chats/`
  - `Teams/`
  - `Files/`
- `90 - Templates/` — Template per nuove note
- `99 - System/` — MOC, indici, viste aggregate

## File chiave

- [[99 - System/MOC - Home]] — Dashboard principale del vault
- [[99 - System/Open Tasks]] — Tutti i task aperti raccolti dalle note
- `10 - Daily Notes/` — Briefing giornaliero più recente

## Convenzioni

- **Tag**: `#progetto/nome`, `#area/nome`, `#persona/nome`, `#tipo/email|meeting|chat|task`
- **Status task**: `- [ ]` aperto, `- [x]` chiuso, `- [/]` in corso, `- [-]` annullato
- **Priorità**: `#p1` urgente, `#p2` importante, `#p3` normale
- **Date**: formato `YYYY-MM-DD` (es. `2026-04-30`)
- **Backlink**: usa sempre `[[Nome Nota]]` per collegare entità (persone, progetti, meeting)
