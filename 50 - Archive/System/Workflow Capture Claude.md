---
type: system
created: 2026-04-30
updated: 2026-05-13
status: legacy (parzialmente deprecato dal 6/5/2026)
---

# 🔄 Workflow Capture Claude — protocollo 3 livelli

> ⚠️ **DOC PARZIALMENTE DEPRECATO dal 6/5/2026**. Carlo non usa più claude.ai web/desktop — lavora **esclusivamente in Cowork**. Quindi:
> - **Livello 1** (chat strategiche in Cowork): unico livello attivo, ora è di fatto il default
> - **Livello 2** (`claude-chats-sync` import settimanale da export Chrome): **DISABILITATO** il 6/5/2026 — il task scheduled `claude-chats-sync` è `enabled: false` da quella data, sostituito da `cowork-sessions-index` che indicizza nativamente le sessioni Cowork
> - **Livello 3** (quick capture on-demand): valido in teoria, ma sovrapposto a §15 Vault-live update di CLAUDE.md che è il protocollo operativo corrente
>
> Il workflow operativo attuale è interamente coperto da CLAUDE.md §15 + scheduled task `cowork-sessions-index`. Questo doc resta come archeologia del design pre-Cowork (aprile 2026).

> Le chat di claude.ai web/desktop NON sono accessibili via API. Per integrarle nel vault uso 3 livelli con criteri chiari.

## Livello 1 — Chat strategiche → fai DIRETTAMENTE qui in Cowork

Per le conversazioni che contano davvero, **inizia la chat in Cowork invece di claude.ai**:
- Decisioni contrattuali, business case, recap call importanti
- Brainstorming su clienti chiave
- Generazione proposte, presentazioni, mockup
- Analisi processi, requirement gathering

**Vantaggio**: Cowork salva tutto in automatico in sessioni locali → io ho accesso live → entrano nel vault in tempo reale (zero export).

**Quando claude.ai web va meglio**: chat veloci/esplorative, mobile, cose private.

## Livello 2 — Export settimanale automatizzato

**Abitudine**: ogni venerdì sera, fai export con la Chrome extension che usi e droppa in `~/Documents/Claude/claude-exports-YYYYMMDD-HHMMSS/`.

**Automazione**: scheduled task `claude-chats-sync` ogni **lunedì 7:30** (prima del PM Digest 8:02):
- Scansiona la cartella per nuovi export
- Importa solo le conversazioni nuove
- Categorizza per progetto/persona
- Aggiorna le schede progetto con riferimenti alle chat
- Aggiunge all'indice consolidato

**Tempo lavoro tuo**: 1 minuto a settimana (drop file).

## Livello 3 — Quick capture on-demand

In qualunque momento, vieni qui e dimmi: *"Ho appena chiuso una chat su X con cliente Y, decisione Z, importi W"* → scrivo immediatamente la sintesi nel vault.

Tempo: 30 secondi.

## Status (aggiornato 13/5/2026)

- ✅ Livello 1 attivo (basta usare Cowork per chat strategiche) — di fatto **unico canale operativo** da quando Carlo non usa più claude.ai web
- ❌ Livello 2 **DISABILITATO** dal 6/5/2026 (`claude-chats-sync` enabled=false, sostituito da `cowork-sessions-index`)
- ✅ Livello 3 attivo (formalmente sovrapposto a CLAUDE.md §15 Vault-live update)

## Cosa NON è coperto

- Chat su mobile claude.ai → vanno in Livello 2 (export settimanale)
- Conversazioni completamente personali (non lavoro) → escluse dal vault
- Conversazioni MOLTO vecchie (>1 anno) → già archiviate nell'export iniziale del 30/04/2026
