---
type: project
status: active
priority: p2
client: Studio Murolo
created: 2026-04-30
updated: 2026-05-15
stakeholders: [Marco Murolo, Danilo Piersanti (Silencio), Luca (Silencio), Andrea Pasquali]
---
<!-- auto-updated by cowork-sessions-index 2026-05-15 20:22 (cron-22) | source-session: local_9912ed2f-67e2-4965-a04a-d6fc60b841e4 | source-lastActive: 2026-05-15 pomeriggio -->
<!-- auto-updated by cowork-sessions-index 2026-05-06 20:08 -->

# 📁 PresidIA — Piattaforma di governance organizzativa del lavoro per PMI

> **Outcome**: Piattaforma SaaS per la **governance organizzativa del lavoro per PMI**. Cliente: Marco Murolo (consulente del lavoro con 20 anni di esperienza).

## Stato

- **Status**: 🟡 In trattativa fornitore — Silencio vs Jakala in chiusura
- **Cliente**: Studio Murolo (Marco Murolo)
- **Fornitori in race**: Silencio.dev (Danilo + Luca) · Jakala (Andrea Pasquali)
- **Prossimo milestone**: ricezione quotazioni finali da entrambi entro 6/5 mattina, decisione allocazione
- **Ultimo aggiornamento**: 2026-05-05

## 💰 Pricing target di vendita _[conferma utente 30/04]_

Carlo vuole vendere a:
- **€55.000+ in Full Ownership** (scope completo, IP a HeyAI)
- **€40.000 in Revenue Share** (alternativa con royalty)

## 🎯 Stato negoziazione fornitore _[call 4/5/2026]_

- Quotazione iniziale Silencio: **€50–55K**
- Target Carlo nel pacchetto: **€35K**
- Margine atteso (scenario realistico €40K Silencio): €15K → al limite del floor
- Carlo apre a semplificazione perimetro / riutilizzo componenti
- Hosting + manutenzione + token → ceduti completamente a Silencio (fatturazione diretta)
- Vedi: [[2026-05-04 - Allineamento Preventivi Sviluppo AI Silencio]]

## Scenari precedenti (storia, ora superati dal target)

| Scenario | Importo | Note |
|---|---|---|
| Massimo | €51.000 | Scope completo (vecchio) |
| Medio | €33.150 | Scope ridotto, MVP esteso (vecchio) |
| Minimo | €15.000 | MVP base (vecchio) |
| Versione Federico | €40.000 | "Presidia ReqLog 40k" — requisiti spezzati per MVP |

## Outsourcing alternativa Jakala

Jakala ha quotato €27.000 (50 FTE). Carlo decide se delegare a Jakala (che pagherebbe a Jakala) o sviluppare con Soolutions a target €55K+ rivenduto.

## Stakeholders

- [[Marco Murolo]] — Studio Murolo, riferimento principale (consulente del lavoro 20 anni esperienza)
- [[Federico Saladino (Soolutions)]] — quotazione tecnica €40k
- [[Carlo Sanvoisin]] — PM HeyAI

## Materiali

- 📊 PresidIA PDF (proposta principale) — usato anche per requisitazione partner esterni
- 📊 PresidIA Requirement Log — il documento più aggiornato che fa fede su tutto
- 📊 ReqLog 40k (versione Federico spezzata) — 14/04/2026

## Task aperti

- [ ] **#p2** Marco Murolo deve scegliere fra i 3 scenari
- [ ] **#p2** Analizzare format cedolini ricevuti da Marco (29/04) prima del prossimo incontro
- [ ] Validare fattibilità tecnica scraping siti (per modello consulente Senato)
- [ ] Definire partnership modello con agenzie subappalto

## Note importanti

- **Il requirement log è il documento più aggiornato che fa fede rispetto agli altri** (Carlo, 15/04)
- Marco è stato silente alcuni periodi (riorganizzazione ufficio) ma ora rinforza interesse

## 🏗️ Architettura core (da chat "Strategia PresidIA" + "Analisi requisiti")

- **Input**: cedolini paga (PDF mensile upload)
- **Processing**: OCR + data extraction (livello, contratto, retribuzione, ore, ferie, straordinari)
- **Rules engine**: regole CCNL Commercio → match profilo → checklist personalizzate
- **Output**: semaforo compliance (verde/giallo/rosso) + segnalazioni structured al consulente
- **AI layer**: Q&A chatbot su testo CCNL (LLM + RAG), simulatore costi deterministico, monitoraggio normativo real-time
- **Visione espansa**: multipli CCNL, sicurezza lavoro, welfare, ESG, parità di genere

## ⚠️ Sinergia con Osservatorio Strategico AI (Futuritaly)

- **60-70% architettura condivisa** con [[20 - Projects/Futuritaly/Osservatorio Strategico|Osservatorio Strategico AI]] (Lavinia ha introdotto Marco)
- Componenti comuni: knowledge base strutturata, profiling engine, motore matching, AI agent Q&A, dashboard, notifications
- **Vantaggio HeyAI**: framework modulare → metà lavoro PresidIA potenzialmente già fatto se Osservatorio parte prima
- Architettura riutilizzabile anche con [[20 - Projects/Achipont/Achipoint|Achipoint]] (single-tenant interno) — multi-tenant per Futuritaly + PresidIA

## 6 Principi fondanti del prodotto

1. **Consapevolezza > certificazione** — non dice "sei conforme", dice "ecco lo stato"
2. **Prevenzione** (early warning, non reattiva)
3. **Centralità del consulente del lavoro** — il tool rafforza il rapporto, non lo sostituisce
4. **Collaborazione** PMI ↔ consulente
5. **Semplicità** — PMI senza struttura HR interna come target
6. **Prudenza giuridica**: PresidIA NON certifica conformità normativa (positioning "informativo, non consulenziale" = liability protection)

## 💬 Citazioni testuali da preservare

> "Il valore della proposizione di HeyAI non è 'siamo una dev shop che fa codice'. È 'vi diamo accesso a una piattaforma SaaS che risale il valore dei vostri consulenti'."
> — **Carlo / Claude**, chat "Miglioramenti al brief di pricing HeyAI" 09/04/2026 (positioning strategico vs dev-shop framing)

> "Se presenti €18K come floor, loro punteranno a chiudere lì, e a quel prezzo probabilmente ci perdi soldi o nella migliore delle ipotesi lavori gratis."
> — **Claude → Carlo**, idem 09/04 (lesson sul floor pricing condiviso con cliente = ancoraggio al ribasso)

## Pattern di negoziazione (Marco Murolo / PresidIA)

- **Marco protective on IP**: ha già parlato con 2 dev, "uno l'ha dato alla concorrenza" → la proposta deve dare a Marco controllo IP (full ownership) o leva di buyout (rev-share + change of control)
- **Bootstrapped, exit-oriented**: ambizione exit 2-3 anni → orizzonte revenue share definito
- **Confederazione come gate non finanziatore**: Confcommercio è distributore primario (alta probabilità chiusura cliente), NON finanzia operativamente
- **Rischio deontologia consulenti**: Marco vuole evitare canale "consulenti del lavoro" (rischio lobby) → mira diretto B2C aziende via Confederazione
- **Silenzio = riorganizzazione, non disinteresse**: Marco si è assentato in periodi di riorganizzazione ufficio. Va ricontattato con cadenza, non interpretato come ghosting

## Email correlate (cluster Outsourcing PresidIA)

- Andrea Pazienza ha mandato PresidIA PDF + requirement log come "Brief per requisitazione" a partner esterni:
  - 16/04 → Spike Reply (Gino Passaro)
  - 20/04 → Silencio.dev (Danilo Piersanti)
  - 23/04 → in copia
- 29/04 — Jakala (Andrea Pasquali) ha proposto **outsourcing PresidIA a €27.000** (50 fte)

## Log

### 2026-05-15
- **Call interna Carlo+Michele 15:12**: chiarito il triangolo quotazioni fornitori su PresidIA → **Silencio €35K**, **Soolutions €40K** (numero nuovo emerso in call), **Jakala/Pasquali €25K** (già noto). Vincoli: (a) Jakala richiede floor bundle €50K, quindi €25K standalone non basta a fargli prendere il progetto; (b) Soolutions a €40K compressa margine HeyAI a €15K (al floor). **Inclinazione Carlo**: PresidIA verso Silencio (Danilo) — margine €20K, allineato al target. **Apertura tattica**: se assegna anche Achipont a Silencio (oltre PresidIA + Osservatorio), può chiedere a Danilo un abbattimento PresidIA per recuperare margine. Decisione finale fornitore PresidIA non ancora chiusa — dipende dal pacchetto Silencio complessivo.

### 2026-05-14
- **⚠️ Alert finestra call**: Carlo ha inviato email a [[Marco Murolo]] il 13/5 22:48 per riprendere il filo e proporre slot call settimana 18/5. **Marco ha dichiarato (nella mail 29/04) che sarà fuori Roma le ultime due settimane di maggio** → finestra disponibile SOLO settimana 18-22/5 (circa). Se non si chiude lo slot entro metà settimana 18/5, il progetto si blocca fino a giugno. Temi da affrontare in call: perimetro di partenza, format cedolini (analisi in corso), novità Confcommercio.
- **Email Carlo → Marco Murolo 13/5 22:48** (R: PresidIa | Allineamento): in copia [[Lavinia Ferrari]]. Punti aperti riepilogati: (a) perimetro partenza + eventuali accorgimenti prodotto, (b) format cedolini aggiuntivi utili per base test, (c) novità lato Confcommercio. In attesa risposta per slot call settimana 18/5.

### 2026-05-05
- Call Carlo ↔ Andrea Pasquali (Jakala): Pasquali si impegna a rientrare in totale **€70-75K** sul pacchetto 3 progetti
- **5/5 sera — quotazione finale Jakala ricevuta**: PresidIA **€25K** (sceso da €27K), totale 75K
- Margine PresidIA con Jakala: €30K (55%) → ottimo
- Risposta Silencio attesa 6/5 mattina (target Carlo €35K)
- Decisione split vs fornitore unico in 24h
- Vedi: [[2026-05-05 - Call Pasquali Jakala]] · [[50 - Archive/Inbox/2026-05/2026-05-05 - Decisione finale fornitori|2026-05-05 - Decisione finale fornitori]]

### 2026-05-04
- Call con Silencio.dev (Danilo + Luca), Andrea, Carlo: discussione pacchetto 4 progetti
- Target PresidIA fissato a **€35K** (vs quotazione iniziale Silencio €50–55K)
- Hosting + manutenzione + token ceduti a Silencio (fatturazione diretta)
- Carlo apre a semplificazione tecnica
- Silencio si ritira per costruire proposta a pacchetto, risposta attesa il 5/5
- Confcommercio confermato come distributore primario (alta sicurezza chiusura cliente)
- Vedi minute completa: [[2026-05-04 - Allineamento Preventivi Sviluppo AI Silencio]]

### 2026-04-29
- Marco Murolo si scusa per assenza, manda format cedolini
- Carlo ringrazia, conferma analisi con team

### 2026-04-15
- Marco Murolo: "Abbiamo completato la quotazione per PresidIA"
- Carlo: "Il req log è il doc più aggiornato che guida tutto"

### 2026-04-14
- Federico invia "Presidia ReqLog 40k" (versione spezzata semplificata)

### 2026-04-09
- Email "PresidIa | Richiesta supporto 2 temi" — definizione cliente come "consulente del lavoro 20 anni esperienza"

## Risorse

- 📁 [Chat "Strategia PresidIA"](/Users/carlosanvoisin/claude/80%20-%20Sources/Claude%20Chats/Export%202026-04-30/Strategia%20PresidIA%20e%20preparazione%20call%20commerciale/) — 9 artifacts
- 📁 [Chat "Analisi requisiti tecnici prototipo"](/Users/carlosanvoisin/claude/80%20-%20Sources/Claude%20Chats/Export%202026-04-30/Analisi%20requisiti%20tecnici%20e%20funzionali%20per%20prototipo/) — 5 artifacts

## Aggiornamento margine atteso (5/5 sera)

Quotazione finale fornitori a parità di prezzo cliente €55K:

| Fornitore | Costo | Margine HeyAI | Probabilità chiusura |
|---|---|---|---|
| Silencio | €35K | **€20K (36%)** | 99% |
| Jakala (5/5 sera) | **€25K** | **€30K (55%)** | 99% |

⚠️ **Conflitto Master Facts**: il numero PresidIA Jakala è ora €25K (vs €27K nel Master Facts §"Pacchetto fornitori"). Da chiarire se è un cambio effettivo o solo rebalance interno alla quotazione totale Jakala €75K. Vedi [[Jakala]] per il rebalance richiesto.

**Per progetto, Jakala è meglio** (gap €8K di margine). PresidIA è il candidato naturale del braccio "Jakala" nello scenario split (Osservatorio→Silencio, PresidIA→Jakala, Achipont→indifferente, margine atteso totale €70K).

## Sessioni Cowork correlate

- 2026-05-06 — quotazione Jakala finale €25K (era €27K), framework margine×probabilità → [[80 - Sources/Cowork Sessions/2026-05-06 - Indice sessioni#Sessione 8 — Analyze call performance and update vault]]
- 2026-05-15 pomeriggio — `local_9912ed2f` — Meeting recap call Carlo+Michele 51 min (PresidIA collaterale alla decisione Achipont): triangolo quotazioni di riferimento Carlo per inclinazione finale = **Silencio €35K · Soolutions €40K · Jakala €25K**; Carlo inclinato a **Silencio per mantenere margine PresidIA** (Jakala €25K basso ma costo opportunità su PresidIA solo non saturerebbe il floor bundle €50K); apertura tattica = assegnare Achipont anche a Silencio come leva per abbattere il costo PresidIA (decisione finale TBD post invio Achipont lun 18/5) → [[80 - Sources/Cowork Sessions/2026-05-15 - Indice sessioni#Sessione 7 — Meeting recap call Carlo+Michele 15/5 (Angelini Academy · Futuritaly · Achipont)]]
- 2026-05-11 — `local_5976de11` — Analyze call performance and update vault: PresidIA €25K invariato nel rebalance proposto ad Andrea Pasquali (struttura 24+25+26 con clausole +8/+2); bundle Silencio chiuso senza rinegoziazione PresidIA (Silencio definisce Achipont "il primo tenant di Osservatorio", aumentare PresidIA penalizza). PresidIA resta il **progetto tecnicamente più complesso** (OCR cedolini, motore CCNL, doppio archivio GDPR) → [[2026-05-11 - Indice sessioni#Sessione 5 — Analyze call performance and update vault (3 email fornitori — Andrea Pasquali + Danilo + Federico/Simone)]]
