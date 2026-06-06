---
type: index
created: 2026-04-30
updated: 2026-06-02
---

# 🎁 Prompt Library — Index

> Pattern e prompt riutilizzabili. Quando voglio usarli, dico a Carlo "applica prompt [Nome]" oppure copio-incollo il template direttamente.

## Pattern disponibili

### Strategia & Pricing
- [[01 - Senior Strategy Finance Consultant]] — Business case finanziario stile McKinsey/Bain (€/risparmio/payback). Usato per Wave 2, prodotti SaaS interni
- [[02 - Audit Numerico Presentazione]] — Verifica incoerenze tra slide deck (ROI/payback/numeri)

> ⚠️ **Per redigere Proposte di Investimento .docx/PDF** non esiste più un prompt standalone in libreria: è stato consolidato nella skill `.claude/skills/investment-proposal-drafting/SKILL.md` (creata 14/5/2026), che assorbe il vecchio template `90 - Templates/Proposta Investimento.md` (archiviato in `50 - Archive/System Snapshots/`) e richiama questi prompt 01+02 come step del workflow. Vedi anche [[40 - Resources/Metodologia Quotazioni HeyAI]] come knowledge base pricing.

### Comunicazione cliente
- [[03 - Recap Call → Email Cliente]] — Da transcript call a email professionale strutturata
- [[04 - Risposta Email Tono Diretto]] — Stile per LG/Garbarino: tempi+numeri, no features, no jargon
- [[05 - Brief Tecnico per Sviluppatori]] — Da note user-friendly a brief per Federico/Simone

### Discovery & Requirement
- [[06 - Questionario Discovery Cliente]] — Per nuovi prospect (es. Achipont edilizia), max 4-5 sezioni
- [[07 - Analisi Funzionale Requirement]] — Da documenti cliente a Requirement Log strutturato
- [[08 - Recap Meeting con Action Items]] — Da transcript a recap PM con decisioni/task/owner

### Operational
- [[09 - Generazione Fattura Cortesia]] — Pattern fatture NoLoop/NOT con intestazione corretta
- [[10 - Roadmap di Progetto]] — Gantt timeline + milestone + tranche pagamento

### Qualità & Metodo di lavoro (guardrail di processo) 🆕
- [[11 - Ancoraggio Fonti di Verità]] — Elenca e conferma le fonti di verità PRIMA di editare (anti "fonte sbagliata")
- [[12 - Piano e Scope Prima del Lavoro]] — Piano 1-3 righe + formato/lunghezza, poi aspetta OK (anti over-engineering)
- [[13 - Deliverable a Sezioni]] — Output lunghi spezzati su file, ripartibili (anti limite token)
- [[14 - Fact-Check Pre-Consegna]] — Verifica nomi/numeri/attribuzioni vs vault prima di consegnare al cliente
- [[15 - Audit Parallelo con Workspace Isolati]] — N agenti, file separati, agente di sintesi (anti collisioni)
- [[16 - Pipeline Deliverable Auto-Verificante]] — Sezione → fact-check → tono → propaga sorgente→output

> Derivati dai pattern del report `/insights` del 2/6/2026. Standardizzati cliente-agnostici (placeholder `{NOME_CLIENTE}`/`{NOME_PROGETTO}`) e customizzabili al volo: ognuno ha la sezione "Come customizzarlo".

## Come usarli

Nel parlare con me, in qualunque chat, scrivi: **"applica prompt 03 [+ contesto]"** oppure **"recap call → email"** e attivo il template appropriato sostituendo i placeholder.

Se hai bisogno di un pattern non in lista, segnalalo: lo aggiungo come nuovo prompt nella libreria.
