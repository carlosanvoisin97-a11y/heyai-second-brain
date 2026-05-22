---
type: resource
created: 2026-04-30
sources: [chat "Recupero metodologia quotazioni IT/tecniche", chat "Audit critico quotazione", artifacts Lotto 2]
---

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
