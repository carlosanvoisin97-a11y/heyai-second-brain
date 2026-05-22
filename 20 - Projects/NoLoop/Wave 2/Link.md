---
type: resource
product: Link
client: NoLoop (cliente eventi/produzione)
status: in-development
created: 2026-04-30
updated: 2026-05-13
---

# 📚 Link

> Prodotto interno HeyAI: piattaforma di reportistica digitale (sostituisce Excel "Progress" del cliente eventi).
> Parte della suite [[Area - AI Solutions (Prodotti Interni)|AI Solutions]] e dell'ecosistema NoLoop 2026.
>
> _Aliases storici: **"Progress Digitale"**, **"Analytics Garbarino"** (vecchio nome dashboard interna)_

## Funzione principale

Sostituire l'Excel "Progress" che il cliente compila a mano per:
- Status commessa, budget per reparto, responsabile, marginalità
- Reportistica per il top management (Garbarino lo vuole per il "facing")

## Integrazione con altri prodotti

- I dati lavorati nel **piano di produzione** ([[Flow]]) fluiscono automaticamente in Link → reportistica
- Insieme a [[Flow]] e [[Sally]], disegnano il flusso end-to-end
- LeadMe (vedi [[LeadMe]]) apre una COM su Link quando arriva un brief commerciale

## Pain point del cliente che Link risolve

- Doppio inserimento Progress ↔ Business Central
- Zaghi perde ore sul Progress: deve rincorrere i commerciali per i dati
- Garbarino non ha tracciabilità evoluzione budget

## Task aperti

- [ ] **#p1** Federico+Simone: **POC su Business Central** come prima attività operativa quando Wave 2 ufficialmente parte (= pagamenti incassati). Trigger: pagamento Wave 2. Carry-over confermato in call interna 13/5. Le limitazioni dipenderanno dalle API Microsoft Business Central — Simone owner

## Log

### 2026-05-13
- **Call interna HeyAI+Soolutions** (13:32-14:35). Federico ha richiesto esplicitamente che il **POC Business Central per Link** sia la prima attività operativa appena Wave 2 ufficialmente parte (= pagamenti incassati). Le limitazioni reali dipenderanno dalle API Microsoft. Carlo conferma, Simone owner. Stato Wave 2: in attesa pagamento, vedere [[_Wave 2 NoLoop]] Log 13/5.

## Chat correlate

- [[80 - Sources/Claude Chats/Export 2026-04-30/Business case finanziario per Link/Business case finanziario per Link|Business case Link]] (06/03→10/03, 6 artifacts)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Analisi soluzioni Link Flow e Sally per processi cliente/Analisi soluzioni Link Flow e Sally per processi cliente|Analisi Link Flow Sally]] (04/03→07/03, 9 artifacts) — analisi completa processi cliente
