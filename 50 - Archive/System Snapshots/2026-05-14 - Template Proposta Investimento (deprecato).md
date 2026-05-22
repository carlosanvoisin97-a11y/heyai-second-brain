---
type: template-deprecated
category: deliverable cliente
created: 2026-05-06
updated: 2026-05-14
deprecated_on: 2026-05-14
deprecated_reason: "Sostituito dalla skill .claude/skills/investment-proposal-drafting/SKILL.md — contenuti utili (struttura sezioni, regole pricing, pattern stilistici) assorbiti nella skill. Design token grafici aggiornati alla reference Futuritaly Bandi e Gare 2026 (acre medium header/footer, palette #2B8C96 + #156082, callout #E8F4F6)."
reference_file_legacy: "[FuturItaly_Proposta_Osservatorio_def.docx]"
aliases: [Proposta Investimento, "90 - Templates/Proposta Investimento"]
---

> 🟡 **TEMPLATE DEPRECATO — 14/5/2026**
>
> Questo template è stato **sostituito dalla skill `.claude/skills/investment-proposal-drafting/SKILL.md`** (creata 14/5/2026). I contenuti utili — gerarchia 13 sezioni, regole pricing, pattern stilistici, link a esempi in produzione — sono stati assorbiti nella skill. **Design token grafici** (font, palette, layout) sono stati **aggiornati**: il vecchio template diceva "Aptos sempre + footer numerazione pagine + titolo #074F6A"; la reference reale `Futuritaly Bandi e Gare 2026` (caricata 14/5) usa **Acre Medium header/footer**, **footer con bordo #156082 + ornamento + testo legale** (no numerazione), **titolo #2B8C96** (non #074F6A), **Heading 1 nero** (non #074F6A), **callout #E8F4F6** come pattern grafico. La skill ufficiale è ora l'unica fonte autoritativa.
>
> File mantenuto qui come **snapshot storico** del template 7/5/2026 per audit trail. I wikilink legacy `[[Proposta Investimento]]` continuano a risolvere a questo file grazie agli `aliases:` nel frontmatter — ma il contenuto **non va più usato** per produrre nuove proposte.
>
> **→ Skill operativa**: `.claude/skills/investment-proposal-drafting/SKILL.md`

# Template — Proposta di Investimento HeyAI (versione 7/5/2026, ARCHIVIATA)

> **[ARCHIVIATO 14/5/2026]** Template ufficiale aggiornato 7/5/2026 sulla base del file di riferimento `FuturItaly_Proposta_Osservatorio_def.docx` (Proposta Osservatorio Strategico AI per FuturItaly). Specifiche layout estratte direttamente dal file Word ufficiale, struttura 13 sezioni standardizzata. Usato per tutte le proposte cliente HeyAI (B2B AI consulting) **fino al 14/5/2026** — poi sostituito dalla skill.

## 📐 Specifiche layout pagina (BLOCCANTI)

| Voce | Valore |
|---|---|
| Formato | A4 portrait (21.00 × 29.70 cm) |
| Margini | 2.12 cm su tutti i lati (top, bottom, left, right) |
| Distanza header dal bordo superiore | 1.25 cm |
| Distanza footer dal bordo inferiore | 1.25 cm |
| Header | Stesso su tutte le pagine (`different_first_page = False`) |
| Footer | Vuoto nel file di riferimento (no numerazione pagine, no testo) — **TBD se aggiungere paginazione** in template aggiornato |

## 🎨 Tipografia (BLOCCANTE)

### Font
- **Aptos sempre** (decisione Carlo 7/5/2026): body 11pt, header (testo HeyAI Srl + dati legali) Aptos 9-10pt, footer (numerazione pagine) Aptos 9pt #606060. Niente Acre Medium nel template aggiornato.
- **Body**: Aptos 11pt, colore nero (#000000), interlinea 1.15-1.2
- **Doc default Word**: Calibri 11pt (override esplicito a Aptos sui paragrafi)
- **Nota storica**: il file di riferimento `FuturItaly_Proposta_Osservatorio_def.docx` usava Acre Medium nell'header. Per il template HeyAI standard si è scelto di unificare tutto su Aptos per coerenza e per ridurre la dipendenza da font corporate non sempre installato sui sistemi terzi.

### Stile titoli — gerarchia precisa

| Livello | Font | Size | Color | Bold | Note |
|---|---|---|---|---|---|
| **Titolo proposta** | Aptos | 18pt | #074F6A (teal scuro) | ✅ | Es. "Proposta di Investimento \| Osservatorio Strategico AI" |
| **Heading 1** (sezioni 1, 2, 3...) | Aptos | 14pt | #074F6A (teal scuro) | ✅ | Es. "1. Oggetto della Proposta" |
| **Heading 2** (sottosezioni 6.1, 8.1...) | Aptos | 12pt | #156082 (teal medio) | ✅ | Es. "6.1 Principi di Sicurezza" |
| **Body** | Aptos | 11pt | #000000 | regolare | Testo paragrafi, prosa |
| **List Paragraph** (bullet) | Aptos | 11pt | #000000 | regolare | Bullet con `•`, indent standard Word |
| **Tabelle - header riga 1** | Aptos | 10pt bold | #FFFFFF su fondo #074F6A o #156082 | ✅ | |
| **Tabelle - body** | Aptos | 10pt | #000000 | regolare | |
| **Note / disclaimer** | Aptos | 9-10pt | #606060 (grigio) | italic | "Importi al netto di IVA", "Documento riservato", ecc. |

### Palette colori HeyAI (dal theme1.xml ufficiale del file di riferimento)

| Hex | Uso |
|---|---|
| **#074F6A** | Titolo proposta + Heading 1 (colore primario) |
| **#156082** | Heading 2 + accenti tabelle (colore secondario, family same teal) |
| **#0E2841** | Navy scuro alternativo (uso eccezionale) |
| **#E97132** | Accento arancio (uso parsimonioso, evidenze critiche) |
| **#196B24** | Verde (success/positivo) — uso parsimonioso |
| **#E8E8E8** | Grigio chiaro per fondi tabelle alternati |
| **#606060** | Grigio testo secondario (caption, note) |
| **#000000** | Body text |

> ⚠️ **Mai usare** colori fuori palette se non con motivazione esplicita. La coerenza visiva navy/teal è parte del posizionamento HeyAI.

## 🏷️ Header (intestazione)

Logo HeyAI a destra (file: [HeyAI_Logo_Header.png](computer:///Users/carlosanvoisin/claude/40%20-%20Resources/HeyAI_Logo_Header.png), dimensioni **5.27 × 3.73 cm**, allineato a destra).

A sinistra del logo (oppure su righe separate sopra il logo):

```
HeyAI S.r.l.
Sede legale: Via Parigi 11, 00185 Roma (RM)
info@heyaidigital.it
www.heyaidigital.it
```

Font intestazione: **Aptos** 9-10pt, colore #606060 grigio scuro o nero (decisione Carlo 7/5/2026: niente Acre Medium, unifichiamo tutto su Aptos).

## 📄 Footer

**Decisione Carlo 7/5/2026**: il footer contiene esclusivamente la **numerazione pagine** centrata, senza altri elementi (no "Documento riservato", no data, no testo aggiuntivo).

- **Format**: `{numero pagina}` oppure `Pag. {numero} di {totale}` (consigliato il primo per minimalismo)
- **Allineamento**: centrato
- **Font**: Aptos 9pt, colore #606060 (grigio scuro)
- **Implementazione tecnica (python-docx)**: campo `PAGE` (e opzionalmente `NUMPAGES`) inserito in un paragrafo del footer della sezione

## 📋 Struttura standard — 13 sezioni numerate

> Ordine e numerazione dal file di riferimento `FuturItaly_Proposta_Osservatorio_def.docx`. Adattabile al contesto cliente ma la struttura base è questa.

### 1. Oggetto della Proposta
Cosa propone HeyAI in 2-4 paragrafi. Outcome cliente. Riferimento al Requirement Log allegato che costituisce parte integrante dell'offerta.

### 2. Aree di Business Coperte (o Contesto Cliente + Proposta di Valore)
Mappa funzionale del perimetro. Pain del cliente, perché il sistema serve, valore atteso. 2-4 punti chiave.

### 3. Soluzione Tecnica
Architettura funzionale (alta livello, no manuale). Componenti / blocchi / moduli. Tecnologie principali se rilevanti per la proposta.

### 4. Fonti Dati Ufficiali (o Integrazioni / Dipendenze esterne)
Lista delle integrazioni esterne / fonti dati richieste. Per progetti AI: API, dataset, sistemi terzi. Tabella o bullet con nome + tipo + status accesso.

### 5. Piano di Lavoro
Fasi (F0/F1/F2/F3 o equivalenti), durata in settimane, attività principali, output di fase. Tabella consigliata.

### 6. Sicurezza e Conformità
- **6.1 Principi di Sicurezza** — autenticazione, crittografia, log accessi, segregazione dati
- **6.2 Conformità Normativa** — GDPR, eventuale altra normativa applicabile (NIS2, AI Act, ecc.)

### 7. Proprietà Intellettuale e Modello di Collaborazione
IP-retained dal cliente (licenza esclusiva HeyAI) vs full transfer vs partnership con revenue share. Per partnership: termini dettagliati (revenue %, floor garantito, durata, buyout, change of control, anti-aggiramento, non-circumvention).

### 8. Investimento
- **8.1 Modello di collaborazione** — sintesi commerciale, eventuale modello partnership, valore di mercato standalone vs offerta
- **8.2 MVP — Investimento** — tabella con uno o più pacchetti (Essenziale vs Completo) + range importi
- **8.3 Incluso nell'investimento** — bullet di cosa contiene il prezzo (licenza, personalizzazioni, training, assistenza correttiva, PM)
- **8.4 Costi operativi non inclusi** — hosting, manutenzione ricorrente, consumo token AI, eventuali licenze terze

### 9. Funzionalità Evolutive — Add-on (Fase 2)
Moduli o funzionalità aggiuntive attivabili dopo l'MVP. Quotazione separata e indicativa, da consolidare in fase di analisi preliminare. Tabella consigliata.

### 10. Modalità di Pagamento
Tranche legate alle milestone. Pattern standard:
- **Progetti monolitici**: 40% kickoff + 30% MVP + 30% go-live (oppure 40/30/20/10 con 10% post-assistenza)
- **Bundle multi-modulo Wave 2**: 35% acconto + 30% MVP + 35% delivery **per ogni modulo** (non sul bundle totale)

### 11. Governance e Presidi Contrattuali
Requirement Log come perimetro vincolante. Change Request quotata a parte. Integrazioni proprietarie con manutenzione esclusa. Obblighi cliente. Service Level e supporto.

### 12. Impegni di {Parte B} (o Responsabilità delle Parti)
Tabella o bullet: cosa fa HeyAI, cosa fa il cliente. Responsabilità chiare.

### 13. Next Steps (o Validità e Accettazione)
Validità proposta (default 30 giorni). Modalità di accettazione (firma documento + apertura kickoff). Spazio firma per HeyAI (Bruno Mattucci, Amministratore Unico) e per il cliente.

## 📊 Frontmatter consigliato del documento generato

```yaml
type: deliverable
client: {Nome Cliente}
project: {Nome Progetto}
status: draft|in-review|sent|signed
created: {YYYY-MM-DD}
updated: {YYYY-MM-DD}
target: {€XXK}
recipients: [{Nome 1}, {Nome 2}]
deadline_decision: {YYYY-MM-DD se applicabile}
reference_template: "Proposta Investimento v2 (7/5/2026)"
```

## 💰 Regole pricing

- **Numeri PDF ufficiali sono fonte autoritativa** (esempio Wave 2: PDF 13/04/2026). Non aggiornare numeri intermedi delle chat.
- **Floor margine HeyAI: €15K** (regola hard, [[99 - System/Master Facts Sheet]] §"Floor margine HeyAI").
- **Markup target**: 1.7x (con upsell certi) / 2.0x (sweet spot, default) / 2.2x (value-based, ROI dimostrato).
- **Sconto bundle**: -15-20% se 3+ soluzioni.
- **Revenue share**: max 3 slot attivi, lock-in 3-5 anni.
- **Pricing aggregato (no costi per requisito esposti)**: il cliente vede voci sintetiche (MVP, opzionali, Fase 2). Mai dettaglio €X per modulo che permetta al cliente di ricostruire il monte ore. Cfr. [[40 - Resources/Metodologia Quotazioni HeyAI]].

## 🎯 Pattern stilistici (BLOCCANTI)

- **Audit numerico obbligatorio** prima dell'invio finale (cfr. [[40 - Resources/Prompts/02 - Audit Numerico Presentazione]]).
- **Mai scuse preventive sul prezzo** (pattern Garbarino 11/03/2026: "se tutte le volte ti devi scusare per il prezzo, mi metti il dubbio che il prezzo sia alto").
- **Mai narrare esposizione finanziaria HeyAI** al cliente (CLAUDE.md §11). Il cliente vede il valore consegnato, non il margine HeyAI.
- **Niente nome+cognome di persone interne nei documenti commerciali** (es. "Carlo Sanvoisin invierà X" → "HeyAI invierà X"). Eccezione: firma finale per accettazione (Bruno Mattucci come Amministratore Unico).
- **Tono PM concreto**: niente fronzoli, niente marketing speak, anglismi tecnici dove naturali (`MVP`, `kickoff`, `go-live`, `add-on`, `subscription`).
- **Cliente low-tech (es. Achipont)**: esempi concreti, niente jargon, anchoring di valore con math accessibile (es. "2 commesse aggiudicate / anno coprono l'investimento").

## 📁 Output finale

- **Formato**: PDF + .docx
- **Path**: `20 - Projects/{Cliente}/HeyAI_{Cliente}_Proposta_Investimento_v{N}.docx` (e versione PDF affianco)
- **Link**: aggiungi nella scheda progetto sezione `## Risorse → Deliverable v{N}` con tag computer://
- **Versioning**: `v1` (prima emissione interna), `v1.1` (review interna), `v2` (post-cliente o cambio sostanziale)

## 🔗 File di riferimento ufficiali nel vault

- **File originale**: `FuturItaly_Proposta_Osservatorio_def.docx` (caricato 7/5/2026, file di riferimento Master per layout)
- **Logo HeyAI header**: [HeyAI_Logo_Header.png](computer:///Users/carlosanvoisin/claude/40%20-%20Resources/HeyAI_Logo_Header.png) (38.9 KB, 5.27 × 3.73 cm)
- **Esempi in produzione**: 
  - [HORECA_Proposta_Investimento_aggiornata.docx](computer:///Users/carlosanvoisin/claude/80%20-%20Sources/Files/HORECA_Proposta_Investimento_aggiornata.docx) — proposta HORECA con sezione partnership/revenue share
  - [HeyAI_Achipoint_Proposta_Investimento_v1.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/HeyAI_Achipoint_Proposta_Investimento_v1.docx) — proposta Achipoint v1 (7/5/2026, da rigenerare per allineamento al template aggiornato)
- **Knowledge base pricing**: [[40 - Resources/Metodologia Quotazioni HeyAI]]

## ✅ Decisioni storiche del template (chiuse 7/5/2026 sera)

1. **Footer e numerazione pagine** → ✅ deciso: solo numerazione pagine centrata in Aptos 9pt grigio. Niente "Documento riservato", niente data, niente altro.
2. **Font header** → ✅ deciso: **Aptos sempre** (no Acre Medium). Unifica il documento su un solo font corporate, evita dipendenze da font non sempre installati.
3. **Allineamento Proposta Achipoint v1 al template** → ✅ deciso: rigenerare la proposta Achipoint con il layout aggiornato (struttura 13 sezioni + specifiche layout) **mantenendo i contenuti già scritti nella v1**, che valgono. Il file di riferimento FuturItaly Osservatorio si usa come riferimento **visivo/layout**, non come fonte di contenuti.
