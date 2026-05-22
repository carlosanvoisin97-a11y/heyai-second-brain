---
type: resource
product: OnSite
client: NoLoop
status: in-development
created: 2026-05-05
updated: 2026-05-13
aliases: ["AI Event Companion", "OnSite PWA"]
---

# 📚 OnSite

> Prodotto interno HeyAI: **AI Event Companion PWA** — assistente AI on-event per partecipanti e staff (agenda, navigation, Q&A, reporting).
> Parte della suite [[Area - AI Solutions (Prodotti Interni)|AI Solutions]] e modulo dell'ecosistema [[_Wave 2 NoLoop|Wave 2 NoLoop]].

## Stato

- **Wave 2 — OnSite (€35.000)**: 🟡 In progettazione, parte luglio 2026 → MVP+delivery ottobre.
- **Posizionamento commerciale**: up-sell per evento (potenziale revenue ricorrente per NoLoop come Crowd).

## Funzionalità (scope Wave 2)

- **Agenda personalizzata**: timeline sessioni + interesse partecipante
- **Navigation in-venue**: layout, room finder, transfer
- **Q&A AI**: domande contestuali partecipante (sponsor, programma, logistica) via LLM + KB evento
- **Reporting onsite**: dashboard sintetico capacity / actual attendance / timing in tempo reale
- **PWA**: installabile su mobile senza store, offline-first per tratti di copertura wifi limitata

## Integrazioni previste

- [[Crowd]] — feed registrazioni, liste partecipanti, scheduling sessioni
- [[Sally]] — front-end AI conversazionale trasversale (eventualmente componente Q&A)
- [[Minutes]] — eventuale capture session per export task → attendee mapping

## Posizione nel bundle Wave 2

| Modulo | Investimento | Risparmio | Stato |
|---|---|---|---|
| **OnSite** | **€35.000** | Up-sell per evento | 🏛️ Luglio-ottobre 2026 |

## Vincoli operativi noti

- **Timeline**: parte luglio post-pausa estiva, MVP+delivery ottobre (slot stretto)
- **Complessità tecnica stimata**: moltiplicatore 1.4x (IoT + spatial, real-time positioning, offline-first) — _fonte: Lotto D Cap. 12 metodologia stime ore_
- **Stima ore dev**: ~550-700 ore (referenza interna)
- **Dipendenze**: necessita Crowd Wave 2 stabile per feed dati

## Stakeholders

### Lato NoLoop
- [[Lorena Cavecchi]] — Capo reparto logistica → scope onsite eventi (continuità con Crowd)
- [[Antonella Osmetti]] — Capo reparto programmazione → input pianificazione/agenda eventi
- [[Arianna Giordanella]] — Operations / UAT
- [[Antonio Cichello]] — Producer Director (validazione esperienza onsite)

### Lato HeyAI
- [[Carlo Sanvoisin]] — PM
- [[Federico Saladino (Soolutions)]] — front-end
- [[Simone Montanari (Soolutions)]] — back-end

## Task aperti

- [ ] **#p2** Definire scope dettagliato OnSite (deliverable + RL features) — entro inizio luglio
- [ ] Allineamento UX su navigation in-venue (mappa interattiva vs lista room)
- [ ] Decisione modello PWA vs app nativa (cap. offline)

## Log

### 2026-05-13
- **Call interna HeyAI+Soolutions** (13:32-14:35). **Decisione presa**: HeyAI+Soolutions si tirano fuori dall'MVP OnSite per l'evento Generali NoLoop di ~27/5/2026. Motivazione: non ci sono le condizioni per portare un MVP credibile in 2 settimane. Federico aveva inizialmente proposto una versione minimal solo con la parte social networking; Simone *"io mi tirerei fuori da questo"* — Carlo concorda. OnSite rientra nel piano Wave 2 con tempistiche giuste (luglio-ottobre come da Roadmap definitiva 13/04). Lato HeyAI: Carlo non rincorre con Garbarino.

## Chat Claude.ai correlate

- "Noloop 2026 test 3" (16/02 → 13/04, 15 artifact) — architettura Wave 2 con OnSite come modulo
- "next steps noloop 2026" (13/04, 10 artifact) — handoff piano operativo
- "Brief WAVE 2 No loop 20 26" (22/04 → 27/04) — perimetro definitivo

## Fonti

- [[20 - Projects/NoLoop/Wave 2/Numeri Ufficiali Roadmap 2026|Numeri Ufficiali Roadmap 2026]] — pricing ufficiale €35K (PDF 13/04/2026)
- Audit Presentazione Noloop Wave 2 (10/03/2026) — ROI metodologie
