---
type: project
status: active
priority: p3
client: Matteo Cosma (privato, prezzo di favore)
created: 2026-04-30
updated: 2026-05-13
stakeholders: [Matteo Cosma, Laura Garbarino, Federico Saladino (Soolutions), Simone Montanari (Soolutions)]
fornitore: Federico/Simone (Soolutions)
---
<!-- auto-updated by cowork-sessions-index 2026-05-06 20:08 -->


# 📁 HoReCa — Piattaforma annunci personale ristorazione

> **Outcome**: Costruire una piattaforma in cui ristoratori e persone del mondo HoReCa (Hotel/Restaurant/Café) possono mettere annunci per **ottenere personale** (job board verticale per il settore).

## Stato

- **Status**: 🟢 Active — early stage, da quantificare
- **Cliente**: [[Matteo Cosma]] (privato/imprenditore)
- **Tipo deal**: **Prezzo di favore** (Matteo è amico di [[Laura Garbarino]])
- **Owner interno**: Carlo Sanvoisin

## Cliente

Matteo Cosma è un imprenditore amico personale di Laura Garbarino (AD NoLoop). Ha chiesto a Carlo di costruirgli una piattaforma per il mondo HoReCa per la ricerca/offerta di personale.

⚠️ **Distinto dall'Osservatorio Futuritaly**: HoReCa è un progetto a sé stante, non parte dell'osservatorio dello studio legale Futuritaly.

## Funzionalità ipotizzate

- Annunci offerta lavoro (ristoratori → cercano personale)
- Annunci richiesta lavoro (persone HoReCa → cercano impiego)
- Matching candidati ↔ posizioni
- Filtri per ruolo (chef, cameriere, sommelier, ecc.) e geografia

## 💰 Quotazione target _[conferma utente 30/04]_

- **Target massimo: €25.000** (prezzo di favore data relazione Garbarino)
- ⚠️ **Budget basso vs complessità** del progetto
- Carlo sta lavorando con vari fornitori per capire come gestirla mantenendo il budget
- Jakala ha esplicitamente detto "Horeca fuori scope Jscience" (non lo copre)

## 🆕 Strategia post call Silencio (4/5/2026)

- Quotazione Silencio: **€30K** → fuori budget cliente
- **Mossa Carlo**: passare il cliente in toto a Silencio. HeyAI esce dallo sviluppo
- HeyAI mantiene PMO (~2–3h/settimana, possibili 4) per gestire interlocuzione cliente
- Possibilità di **revenue share 10–15%** sui ricavi del prodotto verso il cliente Matteo
- Vincolo go-live: **stagione estiva francese → metà giugno 2026** (timing critico)
- Bacino utenti già attivo: ~50–70 strutture, ~1500 ragazzi (gestiti via WhatsApp manualmente)
- ARPU ipotizzato: €15/mese lavoratori, €500–600/anno strutture
- Stripe come provider di pagamento (subscription out-of-the-box)
- Vedi: [[2026-05-04 - Allineamento Preventivi Sviluppo AI Silencio]]

## ✅ Decisione fornitore (5/5/2026 sera)

**HoReCa → Federico/Simone** (Soolutions). Margine assicurato a ~€20K costo, su prezzo cliente €25K + revenue share. Fuori dal pacchetto AI Silencio/Jakala perché:
- Jakala scarta (altra BU, min €50K)
- Silencio prendeva il cliente in toto ma era trade-off complicato
- Federico/Simone hanno già detto fattibile a €20K → margine sufficiente

## Task aperti

- [ ] **#p1** Attivare Federico/Simone su HoReCa (richiesta quotazione formale)
- [ ] **#p2** Coordinare con Matteo Cosma per kickoff post conferma fornitore
- [ ] **#p3** Quantificare scope finale e produrre proposta cliente (prezzo di favore €25K)
- [ ] Definire MVP minimo viable
- [ ] Verificare fonti dati (es. albi chef, registri ristoratori)
- [ ] Decidere se interno o outsourceabile

## Note

- 📚 Riferimento mercato simile: Osservatorio AI Futuritaly (per metadata settori) — può fornire dati di contesto ma è cliente diverso
- Da chiarire timeline e priorità dato che è un favore

## Log

### 2026-05-13
- **Call interna HeyAI+Soolutions** (13:32-14:35). Federico/Simone hanno presentato la loro quotazione: **fuori margine per tutti**. Carlo in call cita il numero esatto: *"alla quotazione che mi avete fatto non ci rientrate manco voi"*. Federico mezzo battuta: *"vendi, falla vendere a noi, al tuo prezzo, non prendere soldi per una volta"* — riconoscimento implicito che il prezzo cliente €25K target non sostiene neanche la loro struttura. Decisione operativa Carlo: **provo a mandare la proposta lo stesso al cliente per chiudere il loop**, ma ridiscutere lo scope a un livello più sostenibile è opzione concreta. Strategia preferita 6/5 (passaggio totale a Silencio + rev share 10-15%) resta valida come piano B.

### 2026-05-06
- HoReCa è ufficialmente **fuori dal perimetro decisionale fornitori bundle**: Jakala scartato (altra BU min €50K, no rev share), Silencio resta come ipotesi a €30K (fuori budget cliente €25K)
- Opzione operativa: Federico/Simone come fornitori a €20K — margine HeyAI di sicurezza (~€4K), comunque sotto floor strategico
- Strategia preferita: passaggio totale del cliente a Silencio + PMO HeyAI 2-3h/sett + revenue share 10-15% (preserva relazione Matteo/Garbarino senza tenere il progetto in pancia)
- Vedi: [[80 - Sources/Cowork Sessions/2026-05-06 - Indice sessioni#Sessione 8 — Analyze call performance and update vault]]

## Sessioni Cowork correlate

- 2026-05-06 — chiarimento HoReCa fuori dal perimetro decisionale bundle (Jakala/Silencio), opzione Federico/Simone come fallback → [[80 - Sources/Cowork Sessions/2026-05-06 - Indice sessioni#Sessione 8 — Analyze call performance and update vault]]
- 2026-05-11 — `local_5976de11` — Analyze call performance and update vault: HoReCa **escluso dal pacchetto Silencio nell'email a Danilo** (decisione Carlo: "secondo me non parte"). Resta opzione separata Soolutions o standalone se cliente Matteo Cosma riemerge → [[2026-05-11 - Indice sessioni#Sessione 5 — Analyze call performance and update vault (3 email fornitori — Andrea Pasquali + Danilo + Federico/Simone)]]
