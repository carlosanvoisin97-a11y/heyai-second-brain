# Recupero metodologia quotazioni IT

**Created:** 16/03/2026, 23:14:07
**Updated:** 16/03/2026, 23:14:49
**Exported:** 30/04/2026, 03:30:33
**Model:** claude-opus-4-6
**Link:** [https://claude.ai/chat/b810a328-b47b-4ab9-b8c7-95127171d717](https://claude.ai/chat/b810a328-b47b-4ab9-b8c7-95127171d717)

---

## User
**2026-03-16T22:14:08.166Z**

recupera metodologia quotazioni it da memoria

## Claude
**2026-03-16T22:14:49.719Z**

### Thinking
````
The user is asking me to retrieve the methodology for Italian quotations from memory. Let me search past conversations for this.
````

### Thinking
````
Let me search for more specific details about the quotation methodology.
````

### Thinking
````
I found the full methodology. Let me also search for the cost benchmarks and hourly rate methodology.
````

### Thinking
````
I now have comprehensive information about the methodology. Let me compile it.
````

Carlo, ecco la metodologia completa recuperata dalle nostre chat passate. La riassumo in modo strutturato e riutilizzabile.

---

## METODOLOGIA QUOTAZIONI TECNICHE HeyAI

### 1. STRUTTURA DEL DOCUMENTO

Sezioni consolidate (asciutto, orientato a comitato executive):

1. **Contesto e richiesta del cliente** — breve, no executive summary prolisse
2. **Soluzione proposta** — descrizione funzionale dei moduli confermati dai tecnici
3. **Team assegnato** — profili anonimi (mai nomi dei dev esterni), competenze coerenti col progetto, PM dichiarato come interno HeyAI
4. **Effort e timeline** — monte ore complessivo a forfait, mai breakdown per singolo requisito, timeline in settimane con approccio agile
5. **Quotazione economica** — voci aggregate (Sviluppo, PM, Infrastruttura/servizi AI), mai dettagliate per modulo
6. **Modalità pagamento** — tranche a milestone (tipicamente 3-4: es. 40/30/30)
7. **Opzioni commerciali alternative** — revenue share o IP-retained quando strategico
8. **Esclusioni e chiarimenti** — sezione critica
9. **Prossimi passi**

---

### 2. SCOPE CONTROL (Allineamento quotazione ↔ requisiti)

**Step 1 — Cross-check documentale.** Solo i requisiti confermati dai tecnici entrano in quotazione. Nessuna aggiunta "creativa".

**Step 2 — Identificazione gap.** Requisiti chiesti dal cliente ma non confermati dai dev → "fuori scope" o "fasi successive".

**Step 3 — Riformulazione requisiti ambigui.** Scaricare la dipendenza esterna senza negare la funzionalità (es. "se il sistema X lo supporta, noi siamo pronti a gestirlo").

---

### 3. ESCLUSIONI RICORRENTI (checklist)

Verificare sempre: responsive/mobile, multi-tenancy enterprise vs multi-entità semplice, integrazioni con terze parti (chi dipende da chi), frontend utente finale vs dashboard interna, formazione/change management, supporto post-lancio (durata definita, poi maintenance separata), contenuti/materiali a carico cliente con deadline.

---

### 4. MATRICE RISCHI

| Categoria | Rischio tipo | Mitigazione |
|---|---|---|
| Dipendenze esterne | API incompleta/instabile, dati sporchi | Fase 0 data audit; clausola slittamento |
| Scope creep | Requisiti aggiunti in corso d'opera | Sezione "Out of Scope" esplicita; change control |
| AI underperformance | Modello non performa | Architettura model-agnostic; KPI minimi accettabili |
| Ritardo materiali cliente | Accessi/contenuti non arrivano | Clausola slittamento; deadline contrattuale |
| Confronto competitivo | Cliente confronta con software house | Monte ore e tariffa calibrati su benchmark |
| Mancata commercializzazione (rev share) | Cliente compra ma non vende | Minimo garantito; clausola conversione |

**Rischi legali da coprire sempre:** IP, cap liability, GDPR, confidenzialità, cessione/acquisizione.

---

### 5. LOGICA DI PRICING

**Principio cardine:** mai esporre dettaglio costi per singolo requisito/modulo.

**Struttura costi interna (non dichiarata):** ~25-30% PM/coordinamento/margine HeyAI, ~70-75% sviluppo software (forfait dev), voce piccola per infrastruttura/servizi AI.

**Calibrazione:** trovare il trade-off ottimale ore × costo orario tale che la tariffa giornaliera sia credibile per senior developer IT (range €440-600/gg), il monte ore sia coerente con lo scope, e il totale non sia ricostruibile dal cliente.

**Formula costo orario cliente:** RAL × 1,40 / 1.720h (per i business case sui risparmi).

**RAL benchmark per profilo Noloop:** AD €95/h, Director €55/h (~€80-90K RAL), Manager €34/h, Analyst €24/h.

**Markup su costo interno:** per startup consulenza AI il range è 1.7x–2.2x. Floor a 1.7x solo con upsell certi, sweet spot a 2.0x, ceiling a 2.2x giustificabile con value-based pricing.

**Value-based check:** prezzo = 60-75% del saving annuo stimato. Con payback < 12 mesi il cliente è sempre in posizione favorevole.

**Modelli commerciali:** Standard (prezzo fisso + tranche), Revenue Share (upfront ridotto + royalty % con cap, audit, minimi garantiti, anti-elusione), IP-retained (prezzo inferiore, HeyAI mantiene IP per riuso).

---

### 6. COMUNICAZIONE AL CLIENTE

Team descritto per competenze, mai nomi dev esterni. No breakdown ore per modulo. Validità offerta breve (7 giorni). Change control: fuori dal Requirement Log = change request quotata a parte. Requirement Log dichiarato come parte integrante del documento. Disclaimer su simulazioni ROI/iperammortamento.

---

Tutto recuperato. Dimmi come procediamo.

