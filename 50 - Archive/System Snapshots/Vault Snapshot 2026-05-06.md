---
type: snapshot
created: 2026-05-06
purpose: Snapshot della struttura vault PRIMA del refactoring 6/5/2026 sera. Backup utile in caso di rollback.
---

# 📸 Vault Snapshot 2026-05-06 (pre-refactoring)

> Backup della struttura vault prima del refactoring architettura cliente → progetti del 6/5/2026 sera. Generato automaticamente.

## Conteggi cartelle

- 00 - Inbox: 9 .md
- 10 - Daily Notes: 4 .md
- 20 - Projects: 18 .md
- 30 - Areas: 5 .md
- 40 - Resources: 23 .md (di cui 8 moduli Wave NoLoop + 1 catalogo + 1 numeri + 1 metodologia + 1 cliente profile + 10 prompts)
- 50 - Archive: 0 .md
- 60 - People: 56 .md
- 70 - Meetings: 8 .md (4 veri meeting + 4 prep/performance da smistare)
- 80 - Sources: 147 .md (DPIII Reports + Cowork Sessions + Censimento)
- 90 - Templates: 5 .md (Daily Note, Email Import, Meeting, Person, Project — mancano: Proposta Investimento, Quotazione, Recap → Email, Decisione Inbox)
- 99 - System: 16 .md

## File root

- CLAUDE.md (33553 bytes) — istruzioni di sistema
- README.md (1481 bytes)
- Setup Microsoft Lists - Soolutions Delivery Board.md (13419 bytes) — DA SPOSTARE in 99-System
- Soolutions Delivery Board - Tasks da importare.xlsx (12545 bytes) — DA SPOSTARE in 99-System
- Angelini Academy - Smoke test homepage.html (23699 bytes) — DA SPOSTARE in 20-Projects/Angelini Academy/

## Decisioni architettura (riepilogo direttive Carlo 6/5/2026)

- **20 - Projects/** sotto-organizzata per cliente:
  - NoLoop/ (Wave 1 chiusura + Wave 2 con 8 moduli)
  - NOT/ (Operation Transformation, Eye Cookies, NOT Marketing) — cliente separato da NoLoop
  - Eldis/ (Eldis Compilatore — merge con AI Product Catalogue)
  - Futuritaly/ (Osservatorio Strategico, Sito Futuritaly, Future Kids potenziale, Angelini Academy/sottocartella)
  - Studio Murolo/ (PresidIA)
  - Achipont/ (Achipoint)
  - Matteo Cosma/ (HoReCa progetto)
- **30 - Areas/Area - Partnership Fornitori/** nuova: Soolutions, Silencio, Jakala (ex Jakala-Proposta)
- **30 - Areas/Area - Performance & Coaching/** nuova: post-mortem call (Carlo Performance Silencio + Pasquali)
- **70 - Meetings/** ELIMINATA: minute assorbite come Log nelle schede pertinenti
- **80 - Sources/Email/** ELIMINATA: vuota, best practice PARA = no archivio email
- **40 - Resources/** ridotta: moduli Wave spostati in NoLoop/Wave 2/, AI Product Catalogue mergiato in Eldis Compilatore

## Pattern wikilinks dopo refactoring

- Wikilinks senza path (`[[_Wave 2 NoLoop|Wave 2 NoLoop]]`) restano validi (Obsidian risolve per nome).
- Wikilinks con path esplicito (`[[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop|Wave 2 NoLoop]]`) si rompono e vanno aggiornati a `[[20 - Projects/NoLoop/Wave 2/_Wave 2 NoLoop]]`.

## Rollback

In caso di rollback: ripristinare la struttura piatta usando questo file come riferimento. La maggior parte dei file conserva il nome originale, solo il path cambia.
