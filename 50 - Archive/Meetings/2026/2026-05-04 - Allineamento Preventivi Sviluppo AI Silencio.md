---
type: meeting
date: 2026-05-04
time: "16:11"
duration: "1h 1m 6s"
attendees: [Carlo Sanvoisin, Andrea Pazienza, Danilo Piersanti, Luca (Silencio)]
projects: [PresidIa, Achipoint, HoReCa, Eldis Compilatore]
vendor: Silencio.dev
fonte: Teams transcription
---

# 🤝 Allineamento Preventivi Sviluppo AI — Silencio

- **Data**: 2026-05-04 — 16:11 (1h 1m)
- **Partecipanti**: [[Carlo Sanvoisin]], [[Andrea Pazienza]], [[Danilo Piersanti (Silencio)]], **Luca (Silencio.dev)**
- **Progetti discussi**: [[PresidIa|PresidIA]], [[Achipoint]], [[HoReCa]], [[Eldis Compilatore]] (Osservatorio)
- **Obiettivo**: chiusura quotazioni a pacchetto sui 4 progetti AI
- **Fonte**: trascrizione Teams (export 2026-05-04)

## Agenda

- Risorse Silencio (interne/esterne) e disponibilità
- Quotazione Achipont (modulo A — gare/bandi edilizia)
- Quotazione HoReCa (job board ristorazione)
- Quotazione PresidIA (governance lavoro PMI)
- Conferma Osservatorio Futuritaly
- PMO, hosting, manutenzione, tempistiche

## Discussione

### Risorse Silencio

Danilo conferma che il team Silencio è composto da lui + Luca, con possibilità di coinvolgere freelance senior collaudati (1–1,5 anni di lavoro continuativo). Tutte figure senior full stack (10+ anni esperienza).

Il candidato chiave è **Gabriele**: freelance senior che lavora full time con Silencio da ~1,5 anni, vorrebbe staccare dai vecchi progetti e-commerce per progetti più innovativi. Si è già reso disponibile per i progetti HeyAI; potrebbe diventare risorsa internalizzata da HeyAI in modalità non-assunzione (consulenza/part-time) — coerente con la **roadmap HeyAI di internalizzazione 6–8 mesi**.

### Achipont (Modulo A — gare/bandi edilizia)

- Quotazione Silencio: **€20.000** (modulo A completo, sviluppo primario su 3 mesi)
- Carlo apre alla possibilità di togliere il PMO dalla quotazione (lo fa HeyAI internamente) → Luca conferma che le voci sono già scorporate per giornate
- Tema volumi bandi giornalieri: definire prefiltri restrittivi (codice, soglia importo) per ridurre il carico LLM
- Carlo sottolinea forte filtraggio iniziale (solo edilizia, sopra €250K esclusi) → analisi LLM su batch ridotto
- Carlo chiarisce che **Achipont è un single-tenant interno**, mentre l'Osservatorio Futuritaly è il prodotto multi-tenant analogo per studio legale → architettura riutilizzabile

### HoReCa (Oreca)

- Quotazione Silencio: **€30.000** — fuori budget cliente (€25K)
- 26 requisiti must have + 10 nice to have
- Componenti: registrazione differenziata (lavoratore/imprenditore), motore di ricerca con filtri combinabili, recensioni validate, freemium con Stripe (no Shopify), pannello admin, GDPR, security
- Brand identity: cliente ha già base, no UX/UI evoluta richiesta → semplificazione
- **Mossa Carlo**: passare il cliente in toto a Silencio (HeyAI esce dal lavoro) o, in alternativa, HeyAI fa il PMO e cede tutto il resto. Possibilità di **revenue share 10–15%** sui ricavi del prodotto
- Bacino utenti già esistente: ~50–70 strutture ricettive + ~1500 lavoratori; ARPU stimato €15/mese lavoratori, €500–600/anno strutture
- Vincolo go-live: **stagione estiva francese → metà giugno** (timing critico)

### PresidIA

- Quotazione Silencio precedente: **€50–55K**
- **Target Carlo**: €35K nel pacchetto
- Cliente con dietro Confcommercio (consulente del lavoro, contatto settimanale) → forte sicurezza distributiva
- Carlo apre a semplificazione perimetro / riutilizzo componenti
- Danilo: "L'ho fatto analizzare da altri, m'hanno detto tienitelo stretto"

### Osservatorio Futuritaly (Eldis area / nuovo prodotto)

- **Confermato a €20.000** (già concordato in offerta precedente, non rimesso in discussione)
- Stesse fonti dati e architettura logica di Achipont (multi-tenant)

### PMO, hosting, manutenzione

- HeyAI fa il PMO di tutti i progetti → riduce effort Silencio, libera i tecnici
- **Hosting + manutenzione ordinaria + consumo token**: ceduti completamente a Silencio, con fatturazione diretta al cliente (HeyAI rinuncia al markup)
- **Fasi 2 / evolutive**: a quel punto si potranno applicare prezzi più di mercato e margini più alti

## Decisioni

- ✅ Osservatorio Futuritaly **confermato a €20K**
- ✅ Achipont — Carlo accetta i €20K dichiarando "mi può andare bene" (rinunciando ai 6–8K target di sconto). Usato come leva per spingere su PresidIA
- ✅ Pacchetto target Carlo: **Osservatorio €20K + Achipont €20K + PresidIA €35K + HoReCa passato a Silencio (PMO HeyAI + rev share)**
- ✅ Hosting + manutenzione + consumo token → fatturazione diretta Silencio
- ✅ Silencio si ritira "in camera caritatis" → risposta entro **martedì 5/5**

## Action items

- [ ] **@danilo** — costruire proposta a pacchetto coerente con i parametri discussi — _entro 5/5/2026_
- [ ] **@danilo** — valutare se prendersi HoReCa in toto + Revenue Share — _entro 5/5_
- [ ] **@carlo** — preparare proposta commerciale Achipont per il cliente (manca documento) — _settimana 5–9/5_
- [ ] **@carlo** — quando arriva la proposta Silencio: 24h di analisi prima di rispondere
- [ ] **@carlo** — alzare Osservatorio a **€42K** lato cliente Futuritaly (perimetro cresciuto) per compensare eventuali compressioni su PresidIA
- [ ] **@carlo** — non comunicare nulla a Jakala né a Federico/Simone fino a chiusura pacchetto
- [ ] **@carlo** — organizzare call conoscitiva con **Gabriele** dopo chiusura pacchetto (canale internalizzazione)

## Numeri chiave

| Progetto | Quota Silencio | Target Carlo | Prezzo cliente | Probabilità chiusura |
|---|---|---|---|---|
| Osservatorio | €20K | €20K ✓ | €40–42K | 95% |
| Achipont | €20K | €12–14K (rinunciato) | ~€45K | Alta |
| PresidIA | €50K | €35K | €55K full / €44K rev share | 99% |
| HoReCa | €30K | passato a Silencio + PMO HeyAI | ~€25K + rev share | Bassa |

**Totale sviluppo HeyAI (best case)**: €75K verso Silencio.

## Scenari margine HeyAI (post call)

| Scenario | PresidIA | Costi | Fatturato | Margine |
|---|---|---|---|---|
| Ottimistico | €37K | €77K | €142K + rev share | €65K (46%) |
| Realistico | €40K | €80K | €142K + rev share | €62K (44%) |

## Punti di attenzione

- Carlo ha rivelato in call: utile sproporzionato Achipont (0,5%), bacino utenti HoReCa esatto, sicurezza chiusura PresidIA (99%) → informazioni che riducono leva negoziale
- Andrea Pazienza ha aperto la call con "margini e sostenibilità" — segnala intermediazione con markup (Danilo lo sa già, ma da limare con fornitori meno amichevoli)

## Follow-up

- Email recap inviata a Danilo + Luca con i parametri operativi (no perimetri, no margini, no profili economici clienti) — versione finale concordata 22:30 del 4/5
- Risposta Silencio attesa per il **5/5/2026**
- Vedi: [[2026-05-04 - Carlo Performance — Call Silencio]]

## Trascrizione / link

- File originale: `Allineamento Preventivi Sviluppo AI.txt` (uploads, 2026-05-04)
- Chat Claude di analisi: [Miglioramenti al brief di pricing HeyAI](/Users/carlosanvoisin/claude/80%20-%20Sources/Claude%20Chats/Export%202026-04-30/Strategia%20PresidIA%20e%20preparazione%20call%20commerciale/)
