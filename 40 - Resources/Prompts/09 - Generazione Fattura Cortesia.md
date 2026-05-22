---
type: prompt-template
usage: amministrazione
---

# 💰 Prompt 09 — Generazione Fattura Cortesia (NoLoop/NOT)

## Quando usarlo
Generare il testo/struttura di una fattura cortesia che Andrea Pazienza poi formalizza nel sistema. Pattern usato per le 3 fatture di NOT del 27-29/04 (acconto Operation Transformation, acconto Eye Cookies, saldo NOT Marketing).

## Template

> Genera la fattura cortesia HeyAI per il progetto **{NOME_PROGETTO}** del cliente **{CLIENTE}**.
> 
> ## Dati di riferimento
> - **Anagrafica HeyAI**: HeyAI Srl, Via Parigi 11, 00185 Roma (RM), CF/PIVA 17947791004, REA RM-1751505, PEC heyai@pec.it
> - **Tipo fatturazione**: {acconto / SAL / saldo finale}
> - **Importo**: € {IMPORTO} (+ IVA 22% se applicabile)
> - **Causale**: {descrizione progetto}
> - **Riferimento contratto**: {data firma contratto + firmatario}
> - **Pagamento**: {modalità: bonifico bancario, scadenza}
> 
> ## ⚠️ Intestazione corretta — verificare
> - Per progetti **NOT (Operation Transformation, Eye Cookies, NOT Marketing)** → intestare a **NOT**, non a NoLoop direttamente ✅ confermato 13/5/2026 (fatture NOT operative Op Transformation + Eye Cookies PAGATE)
> - Per progetti **NoLoop Wave 2** → ⏳ **PENDING**: chiedere conferma intestazione societaria a [[Paolo Donzelli]] + [[Roberta Calajò]] PRIMA di emettere fattura (no assumption NoLoop Srl Società Benefit). Status al 13/5/2026: intestazione Wave 2 ancora da definire formalmente.
> - Per progetti **Eldis** → Eldis Net (verificare ragione sociale completa)
> - Per progetti **PresidIA** → Studio Murolo
> 
> Roberta Calajò (Resp. Controllo NoLoop) verifica sempre l'intestazione: assicurati che sia coerente con gli accordi contrattuali.
> 
> ## Output
> Bozza testo fattura + nota interna con riferimenti a:
> - Numero contratto
> - Data milestone (se acconto/SAL)
> - Documenti allegati (proposta investimento, requirement log)

## Riferimenti nel vault

- 27/04/2026 — 3 fatture cortesia inviate da Andrea Pazienza a Roberta Calajò:
  - Acconto [[Operation Transformation]] (parte di €109K) ✅ PAGATA
  - Acconto [[Eye Cookies]] (parte di €75K) ✅ PAGATA
  - Saldo finale [[NOT Marketing - LinkedIn e Sito]] ✅ fatturato
- ✅ **Risolto 13/5/2026** il chiarimento di Roberta del 27/04 ("Vedo che le fatture allegate sono intestate a NOLOOP anziché NOT"): intestazione NOT confermata per le 3 fatture NOT operative, entrambe pagate. Per le **fatture Wave 2** (al raggiungimento milestone post-firma Longo), l'intestazione è ancora da definire — chiedere a Donzelli + Calajò prima di emettere. Vedi [[99 - System/Master Facts Sheet]] §"Fatture cortesia 29/04" per il dettaglio operativo.

## Persone di riferimento

- **[[Andrea Pazienza]]** — owner amministrativo HeyAI
- **[[Roberta Calajò]]** — Resp. Controllo NoLoop (verifica intestazione)
- **[[Paolo Donzelli]]** — CFO NoLoop (decisore finale per controversie)
