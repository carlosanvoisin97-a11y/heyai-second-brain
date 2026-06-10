---
name: requirement-log
description: Template e regole per i Requirement Log (RL) cliente HeyAI — .xlsx con ID requisito, priorità emoji, perimetro, acceptance criteria; fogli Master Interno vs Versione Cliente; sezioni RNF/Esclusioni/Domande aperte. Usa quando Carlo chiede un requirement log, un RL, una raccolta o analisi requisiti, un'analisi funzionale, o di aggiornare/verificare un RL esistente. Standardizzata 10/6/2026 dai 4 RL reali (Wave 2 83 req, Eye Cookies, Achipont, NOT).
---

# requirement-log — il RL standard HeyAI

L'RL è lo strumento PM core di Carlo: fissa lo scope, chiude le ambiguità, protegge il contratto. È SEMPRE un allegato di una Proposta di Investimento o di una bozza contratto, mai standalone. Formato: **.xlsx** via skill `xlsx`. Fino a oggi ogni RL era custom: questa skill codifica il formato consolidato mag-giu 2026.

## Riferimenti (leggere prima di produrre)

- Prompt operativo esistente: `40 - Resources/Prompts/07 - Analisi Funzionale Requirement.md` (trasforma brief/trascrizione → RL strutturato).
- Esempi reali: `20 - Projects/NoLoop/Wave 2/Wave2_RequirementLog_FINAL.xlsx` (83 requisiti, allegato contrattuale) · `80 - Sources/Files/Eye Cookies/Eye Cookies - Requirement Log MVP v2.3.xlsx` (3 fogli, il più completo) · `20 - Projects/Achipont/Achipont_RequirementLog_v2.xlsx` (sezioni emoji-coded).

## Struttura file

**Fogli**: `Master Interno` (vista completa HeyAI, con note fornitore) + `Versione Cliente` (subset cliente-friendly) + `Riferimenti` (opzionale: decisioni architetturali, glossario, citazioni cliente — foglio INTERNO, non si consegna). La biforcazione non è cosmetica: è la §13 applicata — vincoli, costi e nomi fornitori SOLO nel Master Interno, MAI nel foglio cliente. Al cliente va il solo foglio `Versione Cliente` (o un export che lo contiene da solo).

Questa struttura SUPERA gli esempi storici dove divergono (alcuni hanno meno colonne): gli xlsx citati sotto servono per tono e contenuti, le colonne e i fogli li detta questa skill. Formattazione minima: intestazioni in bold, emoji nella colonna Priorità; nient'altro è obbligatorio.

**Colonne core** della tabella requisiti:

| Colonna | Contenuto |
|---|---|
| ID | `<SiglaModulo><N>.<n>` (es. RF1.1, MA4.2, RNF1) — univoco e stabile tra versioni |
| Modulo | area funzionale (sigla + nome esteso) |
| Requisito | titolo breve |
| Dettaglio | 1-2 righe, linguaggio cliente |
| Priorità | 🔴 Must · 🟡 Should · 🔵 Nice · ⚪ Fase 2 |
| Perimetro | INCLUSO / ESCLUSO / DA DEFINIRE |
| Stato | Confermato / Punto aperto / TBD — se il RL nasce da una call interna pre-validazione: Confermato = concordato in call, Punto aperto = da validare col cliente (rimando alla riga QA) |
| Acceptance criteria | prosa dichiarativa: "cosa significa fatto" (misurabile, non vaga) |
| Dipendenze | solo se bloccanti (es. RF1.1 prerequisito di RF2.1) |
| Note vincoli fornitore | SOLO Master Interno |

**Sezioni obbligatorie oltre ai funzionali**:
- **RNF** — non funzionali separati (sicurezza, performance, SLA, indipendenza dal fornitore AI, …).
- **EXC** — esclusioni ESPLICITE per nome: ogni "Fase 2" / "Change Request" / out-of-scope ha la sua riga. Le esclusioni silenti diventano contestazioni in collaudo. Un requisito ⚪ Fase 2 vive in DUE righe con rimando incrociato: nei funzionali (Perimetro = ESCLUSO fase 1) e in EXC; nel conteggio requisiti citato in proposta contare SOLO gli inclusi, mai le righe EXC.
- **QA** — domande aperte in tabella propria con owner + deadline, mai sepolte nelle note (lesson Eye Cookies: 10 domande chiuse con il cliente PRIMA della firma).

## Regole di lingua e audit

- Italiano, zero inglesismi opachi (lesson audit Achipont 21/5: 30+ sostituzioni — "matching semantico"→"confronto compatibilità", "cost avoidance"→"costo evitato").
- Citazioni testuali del cliente preservate dove fissano lo scope (pattern Eye Cookies: il testo del cliente è la difesa del perimetro).
- Mai inventare requisiti: ciò che il brief/trascrizione non risolve va in QA con owner, non riempito a fantasia.
- Naming: `<Progetto>_RequirementLog_<vN|GG-M-AA>.xlsx` nella cartella progetto `20 - Projects/<Cliente>/`.
- Prima della consegna: coerenza RL ↔ Proposta ↔ Business Case (numeri, conteggi requisiti, claim) — per i numeri girare la skill `pricing-audit`. Il conteggio requisiti citato in proposta deve corrispondere alle righe del RL.
