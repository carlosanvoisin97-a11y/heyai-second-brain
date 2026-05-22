---
name: investment-proposal-drafting
description: "Pattern, design system e regole operative per produrre Proposte di Investimento HeyAI (.docx + PDF). Usa quando Carlo chiede di redigere una proposta cliente, una bozza di proposta, un investment memo, una quotazione strutturata o di rigenerare/aggiornare un deliverable esistente."
---

# Skill — Investment Proposal Drafting (HeyAI)

> **Quando si attiva questa skill**: ogni volta che si produce un .docx/PDF di Proposta di Investimento per un cliente HeyAI (es. Wave 2 NoLoop, Operation Transformation NOT, Osservatorio Futuritaly, Achipoint, Eldis, PresidIA, HoReCa, Sito Angelini Academy). NON si applica a quotazioni snelle senza layout grafico ([[90 - Templates/Quotazione Cliente]]) né a presentazioni .pptx (usare anthropic-skills:pptx + audit numerico §02).

> **Reference grafica autoritativa**: [Reference - Proposta Investimento Futuritaly Bandi Gare 2026.docx](computer:///Users/carlosanvoisin/claude/80%20-%20Sources/Files/Reference%20-%20Proposta%20Investimento%20Futuritaly%20Bandi%20Gare%202026.docx). Tutti i design token in questa skill sono estratti dallo XML interno di quel file (header1.xml, footer1.xml, styles.xml, document.xml, theme1.xml). **Se in futuro Carlo fornisce una nuova reference**, sostituirla nel vault con stesso path e aggiornare i token in §1-§4.

> **Knowledge base pricing**: [[40 - Resources/Metodologia Quotazioni HeyAI]] (assorbita parzialmente qui in §5-§6).

> **Prompt correlati ancora validi**: [[40 - Resources/Prompts/01 - Senior Strategy Finance Consultant]] (business case), [[40 - Resources/Prompts/02 - Audit Numerico Presentazione]] (audit pre-invio).

> **Template deprecato**: `90 - Templates/Proposta Investimento.md` archiviato il 14/5/2026 — i suoi contenuti utili (gerarchia 13 sezioni, regole pricing) sono assorbiti qui sotto. Per cronologia → `50 - Archive/System Snapshots/2026-05-14 - Template Proposta Investimento (deprecato).md`.

---

## 0. Pre-flight obbligatorio (prima di scrivere una riga)

Prima di produrre **qualsiasi** bozza:

1. **Leggi questa SKILL.md interamente** (non solo le sezioni a campione). Le regole sono interdipendenti — pricing + linguaggio + grafica vanno insieme.
2. **Verifica fonti numeri** su [[99 - System/Master Facts Sheet]] §"Pricing target altri progetti" + scheda progetto in `20 - Projects/{Cliente}/`. **MAI inventare cifre**. Se manca un numero → "TBD — chiedere a Carlo", non riempire con valori plausibili.
3. **Leggi anche la skill `email-drafting`** se la proposta sarà accompagnata da una mail di invio: le regole linguistiche (no nomi fornitori, "team di sviluppo", anglismi accettati) sono coerenti con quelle email.
4. **Controlla le proposte recenti dello stesso cliente** via Glob in `20 - Projects/{Cliente}/`: se esistono `v1`/`v2` precedenti, leggile per capire come Carlo ha calibrato tono e numeri su quel cliente.
5. **Identifica la variante**: §5 distingue **Variante Snella** (9 sezioni, gare/bandi/MVP singoli) vs **Variante Estesa** (13 sezioni, partnership/IP complesse). Scegli prima di iniziare.

---

## 1. Design system — Layout pagina (BLOCCANTI)

Valori estratti da `<w:sectPr>` del docx reference. Tutte le proposte HeyAI devono rispettare questi token salvo motivazione esplicita di Carlo.

| Voce | Valore (cm) | Valore (raw) | Note |
|---|---|---|---|
| Formato | A4 portrait 21.00 × 29.70 | 11906 × 16838 twips | Mai landscape per proposte; landscape solo per allegati tabellari |
| Margine top | **2.50** | 1417 twips | Più ampio per dare aria sotto l'header |
| Margine bottom | **2.00** | 1134 twips | |
| Margine left | **2.00** | 1134 twips | |
| Margine right | **2.00** | 1134 twips | |
| Header offset | 1.25 | 708 twips | Distanza header dal bordo superiore |
| Footer offset | 1.25 | 708 twips | Distanza footer dal bordo inferiore |
| Header diverso prima pagina | **No** | `titlePg` assente | Stesso header su tutte le pagine, incluso copertina |
| Gutter | 0 | — | Niente rilegatura |

⚠️ Nota: il vecchio template diceva 2.12 cm uniformi — **è obsoleto**. I valori sopra (2.50 top / 2.00 altri) sono quelli del file reale ufficiale.

---

## 2. Design system — Header (BLOCCANTE)

Struttura del file reference (`header1.xml`):

- **Logo HeyAI** in alto-sinistra, immagine ancorata con offset negativo per fluttuare oltre il margine: dimensioni **1898650 × 1343660 EMU** ≈ **5.01 × 3.55 cm**. File logo nel vault: [HeyAI_Logo_Header.png](computer:///Users/carlosanvoisin/claude/40%20-%20Resources/HeyAI_Logo_Header.png).
- **Blocco testo a destra**, indent left **7080 twips** (≈ 12.49 cm dal margine sinistro), 4 righe:
  1. `HeyAI S.r.l.`
  2. `Sede legale: Via Parigi 11, 00185 Roma (RM)`
  3. `info@heyaidigital.it` (hyperlink, stile `Collegamentoipertestuale`, color blue underline standard)
  4. `www.heyaidigital.it`
- **Font header**: **Acre Medium 10.5pt** (`<w:sz w:val="21">`). Color default nero/grigio scuro.

⚠️ Il vecchio template diceva "Aptos sempre, niente Acre Medium". È contraddetto dal file reale. **Regola attuale (14/5/2026)**: Acre Medium nell'header e nel footer (font corporate HeyAI), Aptos nel body. Se Acre Medium non è installato sul sistema di generazione (es. Linux container python-docx), fallback ammesso a Aptos 10.5pt mantenendo dimensioni e indent.

---

## 3. Design system — Footer (BLOCCANTE)

Struttura del file reference (`footer1.xml`):

- **Bordo superiore**: single line, size 6 (0.75pt), color **#156082** (teal scuro accent1), space 10pt sopra il testo.
- **Spacing before**: 240 twips (12pt) — distanza tra bordo e prima riga.
- **Allineamento**: centrato su tutta la riga.
- **Ornamento decorativo**: immagine `rocco bottom.png` (438912 × 276973 EMU ≈ **1.16 × 0.73 cm**) inline, centrata, con effetto **duotone color accent1 #156082** (shade 45000, satMod 135000). Posizione: paragrafo dedicato sopra il testo dei dati legali.
- **Testo legale** (font **Acre Medium 9pt** color #156082 themeColor accent1):
  ```
  PEC: heyai@pec.it | REA RM – 1751505 | Cod. Fiscale: 17947791004 | Amministratore Unico: Ing. Bruno Mattucci
  ```
  Separatori: pipe ` | ` (spazio-pipe-spazio). Trattino lungo `–` (non `-`) in `REA RM – 1751505`.

⚠️ **NIENTE numerazione pagine nel footer** del file reference. Il vecchio template diceva "solo numerazione" — è contraddetto. Se Carlo decide per una specifica proposta di aggiungere paginazione (es. proposta >30 pagine), va negoziato esplicitamente con lui prima.

---

## 4. Design system — Tipografia (BLOCCANTE)

### 4.1 Gerarchia testi

Valori reali dal reference (mix di style + override inline). Quando l'override inline diverge dallo style, vince l'override — quindi questa è la "verità a schermo".

| Elemento | Font | Size | Color | Peso | Note |
|---|---|---|---|---|---|
| **Titolo proposta** (prima riga) | Aptos | **20pt** | **#2B8C96** (teal verde-acqua) | bold | Es. `Proposta di Investimento: Motore di Ricerca AI per Bandi e Gare` |
| **Heading 1** (sezioni `1.`, `2.`, `3.`...) | Aptos | **16pt** | **#000000** (nero) | bold | Style `Titolo1` con override inline. Spacing before 200, after 200 twips |
| **Heading 2** (sottosezioni `2.1`, `8.1`...) | Aptos | **12pt** | nero o ereditato | bold | |
| **Highlight intra-sezione** / callout heading | Aptos | **11pt** | **#2B8C96** | bold | Es. `Perché un Osservatorio Strategico AI?`, `Modello a costo ridotto: Licenza d'uso` |
| **Body** | Aptos | **11pt** | **#1A1A1A** (quasi-nero leggermente smorzato) | regular | Interlinea single, spacing after 60-100 twips |
| **List paragraph** (bullet `•` / numerato) | Aptos | 11pt | #1A1A1A | regular | Bullet • indent standard Word |
| **Tabella - body cella** | Aptos | 10-11pt | #1A1A1A o nero | regular | |
| **Tabella - prima cella di tabella-callout** | Aptos | **11pt** | **#2B8C96** | bold | Tabella mono-cella usata come "box highlight" (vedi §4.3) |
| **Cifra economica importante** (es. `€ 23.000 – € 28.000`) | Aptos | **11pt** | **#2B8C96** | bold | Inline o in cella tabella |
| **Note / disclaimer** | Aptos | 9-10pt | #606060 (grigio) | italic | "Validità 30 giorni", "Importi al netto di IVA" |

⚠️ Override esplicito inline: Word di default usa `Normale = Arial 10pt`. Tutti i paragrafi del documento devono **forzare esplicitamente** `<w:rFonts ascii="Aptos" hAnsi="Aptos"/>` nella `rPr`. Senza override, il risultato sarà Arial 10pt — errore grafico più comune nelle generazioni passate.

### 4.2 Palette HeyAI ufficiale (proposte)

Estratta dal `theme1.xml` + colori esplicitamente usati nei paragrafi del reference.

| Hex | Nome operativo | Uso |
|---|---|---|
| **#2B8C96** | Teal verde-acqua (color primario proposte) | Titolo proposta, highlight heading, bordi tabelle-callout, cifre economiche |
| **#156082** | Teal scuro (accent1 del theme) | Footer (bordo, testo, duotone ornamento), accenti grafici secondari |
| **#E8F4F6** | Azzurro chiarissimo (fill tabelle-callout) | Sfondo cella di tabelle-callout (box highlight) |
| **#1A1A1A** | Quasi-nero | Body text (alternativa a #000000 puro, leggermente più morbida) |
| **#000000** | Nero | Heading 1, body alternativo |
| **#606060** | Grigio scuro | Note, disclaimer, captions |
| **#0F4761** | Teal blu Word default | NON usare (è il default Heading style di Word, va overridato) |

⚠️ **Mai usare** colori fuori palette per elementi strutturali (heading, tabelle, callout). Eccezioni per evidenze critiche solo previa conferma Carlo. La coerenza visiva teal+navy è parte del posizionamento HeyAI.

### 4.3 Pattern "tabella-callout" (box highlight)

Il reference usa **tabelle mono-cella** come box di highlight. È il pattern grafico più riconoscibile del design system HeyAI proposte. Specifiche:

- **Grid**: 1 colonna larga 9026 dxa (full content width).
- **Bordi cella**: single line size 4 (0.5pt) color **#2B8C96**.
- **Fill cella**: `<w:shd val="clear" fill="E8F4F6"/>` (azzurro chiarissimo).
- **Padding**: top/bottom 120 dxa (≈6.4mm), left/right 200 dxa (≈3.5mm).
- **Contenuto tipico**: heading interno Aptos 11pt bold color #2B8C96 + 1-3 paragrafi body Aptos 11pt color #1A1A1A.
- **Quando usarlo**: per evidenziare il "perché" di una sezione, la value proposition, una sintesi prima di una tabella tecnica. Non abusare: max 1-2 callout per sezione.

### 4.4 Tabelle dati standard

Usate per confronti competitor, fonti dati, moduli soluzione, condizioni generali.

- Bordi celle: single line size 4 color `auto` (nero) — più sobri delle tabelle-callout.
- Header riga 1: bold, fondo bianco o leggero grigio chiaro (#E8E8E8), font Aptos 10-11pt.
- Body: Aptos 10-11pt color #1A1A1A.
- Padding cella: top/bottom 100-120 dxa, left/right 100-200 dxa.
- Larghezza: full content width (9026 dxa) o 2/3 colonne bilanciate.

---

## 5. Struttura sezioni — 2 varianti

### Variante A — **SNELLA** (9 sezioni) ← reference Futuritaly

Per gare/bandi, MVP singoli, progetti €20-80K. È la struttura del file reference. Usala come **default** salvo motivo esplicito.

1. **Oggetto della Proposta** — cosa propone HeyAI in 3-5 paragrafi. Outcome cliente. Eventuale callout "Perché un X dedicato e non un SaaS generico?".
2. **Aree di Business Coperte** — mappa funzionale del perimetro. Tabella aree + cosa monitora. Eventuale sotto-sezione comparativa SaaS vs soluzione HeyAI.
3. **Soluzione Tecnica** — moduli/componenti, tabella modulo + descrizione, architettura ad alto livello (no manuale).
4. **Fonti Dati Ufficiali** (o **Integrazioni**) — tabella fonte + copertura + contenuto + stato accesso.
5. **Piano di Lavoro** — fasi (F0/F1/F2/F3), durata in settimane, output di fase. Tabella.
6. **Investimento** — modello collaborazione (licenza d'uso / partnership / revenue share), range importo, callout cifra (teal #2B8C96 bold).
7. **Modalità di Pagamento** — tranche su milestone (40/30/30, 35/30/35, ecc.).
8. **Vantaggi Competitivi** — value proposition + 8.1 ROI stimato (risparmio ore, ammortamento, payback).
9. **Condizioni Generali** — tabella `Condizione | Dettaglio` con: Tempi consegna · IP · Personalizzazioni · Garanzia · Interventi extra · Validità offerta (default 30 giorni).

### Variante B — **ESTESA** (13 sezioni)

Per progetti grandi (€100K+), partnership con revenue share, IP complessi, bundle multi-modulo (es. Wave 2). Aggiunge a Variante A:

- §6 → **Sicurezza e Conformità** (6.1 Principi + 6.2 GDPR/NIS2/AI Act)
- §7 → **Proprietà Intellettuale e Modello di Collaborazione** (IP-retained vs full transfer vs partnership, termini revenue share dettagliati: %, floor garantito, durata, buyout, anti-aggiramento)
- §8 → **Investimento** (con 8.1 modello, 8.2 MVP pacchetti, 8.3 incluso, 8.4 escluso)
- §9 → **Funzionalità Evolutive Add-on (Fase 2)**
- §10 → **Modalità di Pagamento**
- §11 → **Governance e Presidi Contrattuali** (Requirement Log, Change Request, SLA)
- §12 → **Impegni delle Parti** / **Responsabilità**
- §13 → **Next Steps** / **Validità e Accettazione** (firma Bruno Mattucci AU + spazio firma cliente)

### Quale scegliere

| Indicatore | Variante A snella | Variante B estesa |
|---|---|---|
| Valore deal | €20-80K | €100K+ |
| IP / partnership | Licenza standard | Revenue share / IP-retained / full transfer |
| Multi-modulo bundle | No | Sì (Wave 2 style) |
| Cliente low-tech | Sì (più scorrevole) | No (rischio overkill) |
| Pubblica amministrazione / gara | Sì | Solo se richiesto da capitolato |
| Lunghezza target | 8-12 pagine | 15-25 pagine |

In caso di dubbio: chiedere a Carlo prima di iniziare. Mai default su Estesa se la natura del progetto è snella.

---

## 6. Regole pricing (BLOCCANTI)

Sintesi operativa. Fonte autoritativa completa: [[40 - Resources/Metodologia Quotazioni HeyAI]] e [[99 - System/Master Facts Sheet]] §"Regola pricing HeyAI" (aggiornata 15/5/2026).

- **Principio cardine**: mai esporre dettaglio costi per requisito/modulo che permetta al cliente di ricostruire il monte ore. Voci aggregate (Sviluppo, PM, Infrastruttura, Licenza, ecc.).
- **Regola % BLOCCANTE**: il costo fornitore non deve **MAI superare il 60% del prezzo cliente** (limite assoluto). Target sano 40-45%, accettabile 50%, limite tattico 55-60%, oltre 60% non si va. _[Aggiornata 15/5/2026 — sostituisce la precedente "Floor €15K hard" che era una semplificazione fuorviante: su un progetto da €100K il floor €15K equivaleva all'85% del costo fornitore (inaccettabile), su un add-on da €5K era matematicamente impossibile. La regola % è invariante sulla dimensione del progetto]._
- **Markup target derivato**: ≥1.67x (60%) hard / **≥2.0x (50%) sweet spot default** / ≥2.5x (40%) ottimo.
- **Tariffa giornaliera credibile senior dev**: €440-600/gg.
- **Value-based check**: prezzo target = 60-75% del saving annuo stimato cliente; payback < 12 mesi sempre favorevole.
- **Sconto bundle**: -15-20% se 3+ soluzioni in un colpo solo.
- **Revenue share**: max 3 slot attivi simultanei in azienda, lock-in 3-5 anni, floor garantito + clausola conversione full-ownership.
- **Numeri PDF ufficiali = fonte autoritativa** (es. Wave 2 PDF 13/04/2026). Mai aggiornare con valori intermedi delle chat o stime non firmate.
- **Pattern range vs cifra unica**: range solo se il cliente deve scegliere tra modelli commerciali alternativi (full ownership vs revenue share). Se il modello è già deciso → cifra unica.
- **Tranche pagamento standard**:
  - Progetti monolitici: 40% kickoff + 30% MVP + 30% go-live (oppure 40/30/20/10 con coda assistenza)
  - Bundle multi-modulo (Wave 2): 35% acconto + 30% MVP + 35% delivery **per ogni modulo**, non sul bundle totale

---

## 7. Linguaggio e tono (BLOCCANTI)

Coerenti con `email-drafting` SKILL.md. Sono regole hard:

- **Italiano sempre** (CLAUDE.md §2). Anglismi tecnici accettati dove naturali: `MVP`, `kickoff`, `go-live`, `add-on`, `subscription`, `dashboard`, `mockup`, `brief`.
- **MAI citare per nome i fornitori HeyAI** nei documenti cliente: Soolutions, Silencio, Jakala, Tokio Studio, Aegiscore. Scrivere `team di sviluppo` (prima menzione), `team tecnico` (ripetizioni), `il nostro team`.
- **MAI nome+cognome di persone interne HeyAI** nei deliverable commerciali (no "Carlo Sanvoisin invierà X"). Riferirsi a "HeyAI". **Unica eccezione**: firma finale = Bruno Mattucci, Amministratore Unico.
- **MAI narrare l'esposizione finanziaria HeyAI** al cliente (CLAUDE.md §11). Il cliente vede il valore consegnato, non il margine.
- **MAI scuse preventive sul prezzo**. Pattern Garbarino 11/03/2026 ([[60 - People/Laura Garbarino]]): "se tutte le volte ti devi scusare per il prezzo, mi metti il dubbio che il prezzo sia alto". Cifra → motivazione di valore → silenzio.
- **MAI defensività su prezzi** o giustificazioni stratificate. Il prezzo è una conseguenza del valore, non un'apologia.
- **Tono PM concreto**: niente marketing speak (`game-changer`, `cutting-edge`, `unlock`, `empower`), niente fronzoli (`davvero`, `il modo migliore per`, `con calma`), niente postamboli (`siamo a disposizione per qualsiasi chiarimento` va in mail, non in proposta).
- **Cliente low-tech** (es. Achipont, HoReCa): esempi concreti, anchoring di valore con math accessibile (`2 commesse aggiudicate / anno coprono l'investimento`), niente jargon tecnico inutile.
- **Cliente enterprise** (es. NoLoop, Angelini): rigore numerico, business case quantificato, riferimenti a metodologia/audit.
- **Verbi sostantivati** in bullet di milestone/output: `Consegna mockup navigabile`, `Validazione requisiti`, `Setup ambienti`. Non prima/seconda persona.
- **Bullet point**: usa `•` (bullet character) o numerazione `1./2./3.` solo se sequenza stretta. Mai mix nei bullet.
- **Numeri prudenti**: in business case `-25%` prudenza sul saving teorico (vedi [[40 - Resources/Prompts/01 - Senior Strategy Finance Consultant]]).

---

## 8. Workflow operativo (step-by-step)

Quando Carlo dice "prepara proposta per X" / "rigenera proposta Y" / "bozza investment memo per Z":

1. **Glob proposte cliente esistenti** in `20 - Projects/{Cliente}/` per capire baseline (vN precedente, contenuti già scritti che vanno mantenuti, deal stage).
2. **Leggi scheda progetto** + scheda persona del decisore + [[99 - System/Master Facts Sheet]] §pricing per quel progetto.
3. **Definisci la variante** (A snella vs B estesa, vedi §5). Se borderline, chiedi a Carlo.
4. **Estrai i numeri** dalle fonti autoritative. Mai inventare. TBD esplicito dove manca dato.
5. **Costruisci la struttura sezioni** prima dei contenuti (titoli vuoti). Validazione con Carlo (opzionale, ma raccomandato se >€80K).
6. **Riempi i contenuti** sezione per sezione, mantenendo Aptos 11pt body + override inline obbligatori.
7. **Inserisci almeno 1 callout** (§4.3) per la value proposition principale e 1 callout sulla cifra economica.
8. **Tabelle**: usa tabelle standard (§4.4) per piano di lavoro, fonti, moduli, condizioni generali.
9. **Footer dati legali**: mai dimenticare. Acre Medium 9pt color #156082, separatore ` | `, ornamento decorativo se possibile.
10. **Audit numerico** prima dell'output finale: applica [[40 - Resources/Prompts/02 - Audit Numerico Presentazione]]. Verifica somme, ROI, payback, coerenza tra sezione 6 e sezione 7-8, range cifre, % iperammortamento se citato.
11. **Output**: salva `.docx` + esporta `.pdf` in `20 - Projects/{Cliente}/HeyAI_{Cliente}_Proposta_Investimento_v{N}.docx`. Aggiorna sezione `## Risorse → Deliverable v{N}` della scheda progetto con link `computer://`.
12. **Frontmatter del file (per metadati interni)**:
    ```yaml
    type: deliverable
    client: {Nome Cliente}
    project: {Nome Progetto}
    status: draft|in-review|sent|signed
    created: {YYYY-MM-DD}
    updated: {YYYY-MM-DD}
    target: {€XXK}
    variant: snella|estesa
    recipients: [Nome 1, Nome 2]
    deadline_decision: {YYYY-MM-DD se applicabile}
    reference_skill: "investment-proposal-drafting (14/5/2026)"
    ```

---

## 9. Checklist anti-errori (pre-consegna)

Verificare TUTTI i punti prima di marcare la proposta come pronta per l'invio. Un solo `❌` = non inviare.

### Grafica / layout

- [ ] Margini: top 2.50cm, right/bottom/left 2.00cm
- [ ] Header presente su TUTTE le pagine (no `titlePg`), logo HeyAI in alto-sinistra + blocco testo a destra
- [ ] Header font: Acre Medium 10.5pt (o fallback Aptos 10.5pt se Acre non disponibile)
- [ ] Footer presente su TUTTE le pagine: bordo top #156082 + ornamento centrato + testo dati legali
- [ ] Footer testo esatto: `PEC: heyai@pec.it | REA RM – 1751505 | Cod. Fiscale: 17947791004 | Amministratore Unico: Ing. Bruno Mattucci`
- [ ] Titolo proposta: Aptos 20pt bold #2B8C96
- [ ] Heading 1 sezioni: Aptos 16pt bold #000000
- [ ] Body: Aptos 11pt #1A1A1A (override inline esplicito, non Arial default)
- [ ] Almeno 1 callout tabella-callout (bordi #2B8C96, fill #E8F4F6) usato per value prop o cifra
- [ ] Tabelle: bordi e padding coerenti, header riga 1 in bold
- [ ] Nessun colore fuori palette §4.2

### Numeri / pricing

- [ ] Tutti i numeri verificati su [[99 - System/Master Facts Sheet]] + scheda progetto
- [ ] Costo fornitore ≤ 60% del prezzo cliente (regola %); target sano 40-45%, accettabile 50%, limite tattico 55-60%
- [ ] Markup applicato coerente con tipologia deal (1.7x / 2.0x / 2.2x)
- [ ] Payback < 24 mesi se business case esposto
- [ ] Voci aggregate, non ricostruzione monte ore possibile dal cliente
- [ ] Tranche pagamento coerenti con pattern standard (§6)
- [ ] Validità offerta dichiarata (default 30 giorni)
- [ ] Audit numerico §02 eseguito su somme/percentuali/ROI

### Linguaggio

- [ ] Nessun nome fornitore HeyAI citato (Soolutions / Silencio / Jakala / Tokio / Aegiscore)
- [ ] Nessun nome+cognome interno HeyAI nei deliverable commerciali (eccezione: firma Bruno Mattucci AU)
- [ ] Nessuna scusa preventiva sul prezzo
- [ ] Nessuna narrazione di esposizione finanziaria HeyAI
- [ ] Italiano sempre, anglismi solo tecnici e naturali
- [ ] Nessun marketing speak (`game-changer`, `cutting-edge`, `unlock`...)
- [ ] Tono coerente con livello cliente (low-tech vs enterprise)

### Contenuti

- [ ] Struttura sezioni coerente con variante scelta (§5 A o B)
- [ ] Sezione "Condizioni Generali" / "Validità" presente con tutti i campi (Tempi, IP, Personalizzazioni, Garanzia, Extra, Validità)
- [ ] Cosa NON è incluso esplicitato (anti-scope-creep)
- [ ] Esclusioni e change request management presenti
- [ ] Frontmatter file con metadati corretti
- [ ] Path output corretto in `20 - Projects/{Cliente}/`

---

## 10. Errori frequenti osservati (prima/dopo)

Pattern di errore che si sono ripetuti nelle generazioni passate.

### Errore 1 — Font Arial 10pt invece di Aptos 11pt

**Causa**: paragrafi senza override esplicito `<w:rFonts ascii="Aptos"/>` ereditano lo style `Normale` che in Word default è Arial 10pt.

**Fix**: forzare `rPr` con font Aptos su ogni run di paragrafo, sempre.

### Errore 2 — Heading colorato #0F4761 (default Word) invece di #000000 nero

**Causa**: applicare lo style `Titolo1`/`Heading1` senza override del color inline.

**Fix**: nel run del titolo, esplicito `<w:color w:val="000000"/>`.

### Errore 3 — Footer assente o con solo numerazione pagine

**Causa**: ignorare la doppia componente del footer (bordo + ornamento + testo legale).

**Fix**: rispettare §3 integralmente. Se ornamento non disponibile, mantenere bordo + testo legale comunque.

### Errore 4 — Nome fornitore citato nel testo

**Causa**: copy-paste da brief interno o documento NoLoop che cita Soolutions/Silencio.

**Fix**: grep finale del testo per "Soolutions|Silencio|Jakala|Tokio|Aegiscore" prima della consegna. Match = riscrivere come `team di sviluppo`.

### Errore 5 — Range cifra senza modello commerciale a giustificarlo

**Causa**: range usato come hedge difensivo (es. `€20K-€30K` "tanto vediamo").

**Fix**: range solo se ci sono 2 modelli alternativi (es. full ownership vs revenue share). Altrimenti cifra unica.

### Errore 6 — Sezione "Cosa non è incluso" mancante

**Causa**: focalizzarsi sul positivo e dimenticare le esclusioni.

**Fix**: §9 "Condizioni Generali" sempre presente con "Interventi Extra" + change request quotata a parte.

### Errore 7 — Numeri non verificati su Master Facts Sheet

**Causa**: usare valori intermedi presi da chat o memoria.

**Fix**: §0 pre-flight obbligatorio — leggere Master Facts Sheet prima di scrivere qualsiasi cifra.

---

## 11. Riferimenti vault

- **Reference grafica autoritativa**: [Reference - Proposta Investimento Futuritaly Bandi Gare 2026.docx](computer:///Users/carlosanvoisin/claude/80%20-%20Sources/Files/Reference%20-%20Proposta%20Investimento%20Futuritaly%20Bandi%20Gare%202026.docx)
- **Logo HeyAI header**: [HeyAI_Logo_Header.png](computer:///Users/carlosanvoisin/claude/40%20-%20Resources/HeyAI_Logo_Header.png) (5.27 × 3.73 cm, allineato destra)
- **Knowledge base pricing**: [[40 - Resources/Metodologia Quotazioni HeyAI]]
- **Master Facts Sheet** (numeri ufficiali): [[99 - System/Master Facts Sheet]]
- **Prompt business case**: [[40 - Resources/Prompts/01 - Senior Strategy Finance Consultant]]
- **Prompt audit numerico**: [[40 - Resources/Prompts/02 - Audit Numerico Presentazione]]
- **Template quotazione snella** (progetti minori, no layout grafico): [[90 - Templates/Quotazione Cliente]]
- **Template deprecato Proposta Investimento**: `50 - Archive/System Snapshots/2026-05-14 - Template Proposta Investimento (deprecato).md` (assorbito qui)
- **Skill correlata email**: `.claude/skills/email-drafting/SKILL.md` (per mail di invio della proposta)
- **Esempi in produzione**:
  - [HORECA_Proposta_Investimento_aggiornata.docx](computer:///Users/carlosanvoisin/claude/80%20-%20Sources/Files/HORECA_Proposta_Investimento_aggiornata.docx) — partnership/revenue share
  - [HeyAI_Achipoint_Proposta_Investimento_v1.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/HeyAI_Achipoint_Proposta_Investimento_v1.docx) — Achipoint v1 (da rigenerare con questa skill)

---

## 12. Manutenzione skill

Quando aggiornare questa SKILL.md:

1. **Carlo fornisce nuova reference grafica** → sostituire il file in `80 - Sources/Files/Reference - Proposta Investimento *.docx` con stesso path (sovrascrivere), poi re-estrarre token §1-§4 e bumpare nota in §11.
2. **Carlo decide nuovo pattern linguistico** durante revisione (es. nuova regola "mai usare X") → append in §7 con data scoperta.
3. **Nuovo errore frequente** intercettato in proposta consegnata → append in §10 con prima/dopo.
4. **Nuovi numeri/regole pricing** in [[99 - System/Master Facts Sheet]] → mantenere §6 come sintesi, non duplicare il Master.
5. **Audit periodico**: ogni 3 mesi rileggere la skill e marcare con `[VERIFICATO YYYY-MM-DD]` le sezioni ancora coerenti col file reference attuale.

Storia patch:

- **14/5/2026**: skill creata da Carlo durante sessione Cowork. Token §1-§4 estratti da `Futuritaly_Proposta Investimento AI_Bandi e Gare_2026.docx`. Assorbe contenuti del template deprecato `90 - Templates/Proposta Investimento.md` (archiviato in pari data) e i prompt 01/02 (restano referenziati). Pattern §7 in coerenza con `email-drafting` SKILL.md.
