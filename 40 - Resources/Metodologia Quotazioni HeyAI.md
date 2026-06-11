---
type: resource
created: 2026-04-30
updated: 2026-06-11
sources: [chat "Recupero metodologia quotazioni IT/tecniche", chat "Audit critico quotazione", artifacts Lotto 2, chat "Miglioramenti brief pricing" 9/4→4/5/2026]
---

> [!summary]+ ⚡ Sintesi L4 (pilota PKM, 11/6/2026 — vista derivata: fa fede il corpo della scheda)
> - Knowledge base interna dei pattern per quotazioni cliente HeyAI (pricing, matrice rischi, sezioni standard, clausole); viva, ultimo aggiornamento 7/6/2026 con ingest F2.
> - Markup 2.0x default (range 1.7x-2.2x), prezzo target 60-75% del saving annuo, tariffa senior €440-600/gg; mai esporre dettaglio costi per requisito al cliente.
> - Le clausole buyout/Change of Control/anti-aggiramento sono PROPOSTA da confermare: wording non definitivo, i numeri specifici per progetto restano nelle schede progetto, non qui.

# 📚 Metodologia Quotazioni HeyAI

> Knowledge base interno: pattern e regole ricorrenti per produrre quotazioni cliente.

## 🎯 Logica di pricing

### Principio cardine
**Mai esporre dettaglio costi per singolo requisito o modulo.** Il cliente vede solo voci aggregate.

### Struttura interna (non dichiarata al cliente)
- ~25-30% PM/coordinamento/margine
- ~70-75% sviluppo software

### Calibrazione monte ore
- Tariffa giornaliera credibile senior dev: **€440-600/gg**
- Monte ore coerente con benchmark mercato
- Totale non ricostruibile dal cliente partendo dalle voci

### Formula costo orario interno (per dimensionamento)
```
Costo orario = RAL × 1.40 / 1.720h
```

### Markup
- **1.7x** su costo interno → solo con upsell certi
- **2.0x** sweet spot (default)
- **2.2x** value-based (forte ROI dimostrato cliente)

### Value-based check
- Prezzo target = **60-75% del saving annuo stimato**
- Payback < 12 mesi = sempre favorevole al cliente

### Benchmark di mercato per ancoraggio (Italia 2026)
Per dimensionare il listino e capire se un prezzo "comunica prototipo o piattaforma":
- **Sito istituzionale boutique** (SPA React/Vite, animazioni, copy strategico): €8-15K da agenzia/freelance senior.
- **MVP SaaS B2B media complessità** (multi-tenant, AI/RAG, integrazioni): €60-120K da boutique, €150-250K da system integrator mid-size.
Uso: un prezzo molto sotto range comunica "progetto piccolo" e legittima contestazioni di change request. Ancorare il **listino** al valore di mercato, mostrare lo **sconto** in chiaro. _[fonte: chat pricing brief 9/4→4/5/2026, F2 ingest — valori di mercato indicativi]_

### Formato sintesi pricing (memoria comparabile)
Per ogni quotazione registrare una riga standard: *Progetto — costo interno €Y — listino €Z — markup W% — sconto V% — finale €K — margine €M*. Senza formato fisso la memoria pricing non è confrontabile tra progetti.

## ⚠️ Matrice rischi quotazioni

| Categoria | Rischio | Mitigazione |
|---|---|---|
| Dipendenze esterne | API incompleta/instabile (es. BAT/PARD) | Fase 0 data audit + clausola slittamento |
| Scope creep | Requisiti aggiunti in corso | "Out of Scope" esplicita + change control |
| AI underperformance | Modello non performa come atteso | Architettura model-agnostic + KPI minimi |
| Ritardo materiali cliente | Accessi/contenuti ritardano | Clausola slittamento + deadline contrattuale |
| Confronto competitivo | Cliente confronta software house | Monte ore + tariffa calibrati su benchmark |
| Mancata commercializzazione | Revenue share ma cliente non vende | Minimo garantito + clausola conversione |

## 📑 Sezioni standard documento quotazione

1. Contesto e richiesta cliente (breve)
2. Soluzione proposta (funzionale moduli)
3. Team assegnato (profili anonimi, PM interno)
4. Effort e timeline (monte ore forfait, timeline agile)
5. Quotazione economica (aggregate: Sviluppo, PM, Infrastruttura AI)
6. Modalità pagamento (tranche milestone 3-4, es. 40/30/30 o 35/30/35)
7. Opzioni commerciali (revenue share, IP-retained, ecc.)
8. **Esclusioni e chiarimenti** (CRITICA)
9. Prossimi passi

## 🛡️ Clausole contrattuali ricorrenti (da chat NOT)

### Integrazioni condizionate (Art. 3.8 stile)
- Scenario A (API native): incluso, manutenzione inclusa
- Scenario B (RPA fallback): sviluppo iniziale incluso, manutenzione esclusa, change request quotata a parte

### Change Request (Art. 3.11 stile)
> Qualsiasi requisito fuori dal Requirement Log allegato = quotazione separata.

### IP-retained (Art. 12bis stile)
- Cliente prende proprietà codice + diritto modifica
- HeyAI tiene know-how generale (componenti, pattern, librerie)

### Obblighi cliente
- Fornire storico dati (es. 5 anni vendite per NOT)
- Verifica disponibilità API esterne entro 15gg firma
- Account/credenziali piattaforme esterne

### Buyout / Change of Control / anti-aggiramento (da chat pricing 4/5/2026, F2 ingest)
> Wording e parametri esatti = PROPOSTA da confermare; i numeri specifici per progetto restano nelle schede progetto.
- **Buyout (revenue share)**: *maggiore tra* (a) prezzo full-ownership meno revenue share cumulata versata [pavimento anti-arbitrage: impedisce di usare la RS come rateazione mascherata della full ownership], e (b) un multiplo **2,5-3,5×** della RS degli ultimi 12 mesi [cattura l'upside se il prodotto performa].
- **Change of control**: attivazione automatica su evento straordinario (acquisizione/cessione/fusione); pagamento minimo = maggiore tra una soglia fissa e una % del valore della transazione. Distinto dal buyout (il buyout è opzione del *cliente*; il CoC scatta da solo).
- **Anti-aggiramento**: se entro **18 mesi** (range 12-24) dal buyout il cliente cede attività/IP a terzi, il CoC si applica retroattivamente con conguaglio.
- **Definizione "ricavi netti" per royalty**: calcolare su ricavi lordi al netto **solo** di IVA e storni documentati — non lasciare "netti" indefinito.

## 🎨 Pattern prompt riusabili

### Senior Strategy & Finance Consultant
> "Sei un Senior Strategy & Finance Consultant (stile McKinsey/Bain/BCG) specializzato nella costruzione di business case finanziari per progetti di trasformazione digitale e automazione tramite AI."

(Usato per tutti i business case di prodotto: LeadMe, Link, Flow, Sally, Venue Finder, Pitch)

### Analista funzionale per requirement
> "Analizza questi documenti come il miglior analista funzionale del mondo che fa requisizioni tecniche e funzionali..."

### PM esperto per minute/recap
> "Analizza la trascrizione come farebbe un espertissimo PM ed estrapola: punti aperti, prossimi passi, decisioni..."

## 📊 Esempi di business case prodotti (Wave 2 NoLoop)

| Modulo | Risparmio annuo | Ore | Notes |
|---|---|---|---|
| Link | €50.4K | 1.184h | Sostituisce Progress Excel |
| LeadMe | €64.165K | 2.239h | +60% scouting capacity |
| Pitch (escluso) | €33.675K | 1.169h | Win rate 20% → 25-28% |

## Riferimenti chat

- [[80 - Sources/Claude Chats/Export 2026-04-30/Recupero metodologia quotazioni IT/Recupero metodologia quotazioni IT|Recupero metodologia IT]]
- [[80 - Sources/Claude Chats/Export 2026-04-30/Recupero metodologia quotazioni tecniche/Recupero metodologia quotazioni tecniche|Recupero metodologia tecniche]] (2 art)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Audit critico della quotazione progettuale/Audit critico della quotazione progettuale|Audit critico]] (1 art)
- [[80 - Sources/Claude Chats/Export 2026-04-30/Miglioramenti al brief di pricing HeyAI/Miglioramenti al brief di pricing HeyAI|Miglioramenti pricing brief]]
