---
type: session-recap
source: claude-code
session_id: 8c000f74
project_path: ~/code/angelini-academy (worktree: relaxed-black-e295a5)
date_last_activity: 2026-05-27
size_mb: 1.5
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy wt relaxed-black (8c000f74)

## Cosa è stato fatto

Sessione di **recupero post-call Elena 27/5**, due filoni paralleli:

1. **Pitch v3.3 — applicazione 8 modifiche** (opzione A, unica passata) al file `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md`:
   - S22 Capability: FuturItaly riposizionata a sola regia editoriale & content creation (rimosso network/finanza)
   - S24 Case FuturItaly: rifocalizzato su editorial track
   - S25 Roadmap: rimosso Blocco B Finanza agevolata; Fase 1 rivista
   - S26 Team & Gov: rimossa attribuzione "13 atenei" a Daniele
   - S27 Quotazione: riscritta con €49.500 core HeyAI + add-on (no bundle per fasi)
   - Sostituzione globale "4 MVP AI" → "1 agente con 4 modalità"
   - Fase 1 Riallineamento sito = sconsigliato
   - Cleanup decisioni aperte obsolete (A1, A7, A11)

2. **Review iper-meticolosa Excel `HeyAI_Angelini_Academy_Catalogo_Pricing_vdef.xlsx`** (Downloads, 17KB, 2 fogli):
   - Foglio `01_Catalogo_Prezzi` (A1:E31): prezzi come stringhe testuali con `\n(una tantum)` → formato non numerico, no SUM possibile
   - Foglio `02_Pacchetto_Proposto` (A1:C50): prezzi numerici con formato `#,##0 €` + formula `=SUM(B7:B13)` in B14 = 48.500
   - Identificate incoerenze/rischi: voci TBD per Batch + Hub continuativo (regia FuturItaly), discount progressivo -5/-10/-15%, modalità pagamento 50/50 una tantum
   - Audit pricing post-call assorbito in `2026-05-27 - Audit Pricing Angelini Academy.md`

3. **Bozza email Elena** prodotta in due varianti (concisa "originale" vs concisa+recap riga 3): allegato Excel + link mockup + promessa presentazione aggiornata "entro domani". Aggiunti 4 punti opzionali da valutare (pre-pitch 30/5, deadline TBD, recap decisioni, rinomina file allegato).

Tool usage: 26 Edit · 24 Bash · 14 Read. Nessun Write (solo edit su file esistenti).

## Progetti / aree vault toccate

- Angelini Academy → [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]]
- Pitch v3.3 (in Inbox) → [[00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato]]
- Audit pricing → [[20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Audit Pricing Angelini Academy]]
- Prep call Elena → [[20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Prep Call Elena FuturItaly]]
- Concept Engaged Network → [[20 - Projects/Futuritaly/Angelini Academy/Concept - Engaged Network Community]]
- Persone toccate: [[60 - People/Elena Chiti]], [[60 - People/Caterina Caboni]], [[60 - People/Marco Morbidelli]], [[60 - People/Lavinia Ferrari]]

## Decisioni / Numeri

**Pricing consolidato post-call Elena 27/5 (Excel `vdef`):**

- **Pacchetto Core HeyAI = €48.500** (formula SUM in B14 — coerente col target verbale €49.500 a meno di arrotondamenti):
  - Sito web pubblico nuovo: €22.000
  - Area Riservata Semplice: €5.500
  - Community Engaged Network: €15.000
  - Analytics setup: €2.000
  - SEO + ottimizzazione LLM: €4.000
  - Batch iniziale contenuti (workshop): **TBD** (regia FuturItaly)
  - Hub editoriale continuativo: **TBD** (regia FuturItaly)
- **Add-on attivabili a parte**: Studio Customer Journey €4.000 · Agente AI Academy €14.000 · Area Riservata Avanzata €13.000 · Dashboard Analytics custom €6.500 · LinkedIn €4.500/mese · Email Setup €1.800 · Email Continuativo €1.500/mese · Landing eventi pubblici/interni €5-10K cad · CRM/Gateway/Concept brief = Su quotazione
- **Servizio alternativo (sconsigliato)**: Riallineamento sito attuale €4.000
- **Scontistica progressiva**: 3 add-on −5% · 4 add-on −10% · tutti add-on −15% · canoni annuali −5%
- **Modalità pagamento**: una tantum 50% avvio + 50% consegna; canoni 30gg data fattura
- **Tariffa HeyAI**: €650/g (confermata in chat)

**Differenza vs target verbale post-call (€49.500)**: Excel `vdef` mostra €48.500. Da chiarire se è arrotondamento o se Analytics era previsto €3K e SEO €5K (vs €2K+€4K in Excel). Vedi flag sotto.

## Output (file modificati)

- `00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` — 8 modifiche applicate (S22/S24/S25/S26/S27 + global replace + Fase 1 + cleanup decisioni)
- `00 - Inbox/2026-05-13 - BOZZA Email Recap Elena post call cluster.md` — toccato per pattern email
- `00 - Inbox/Concept - Engaged Network Community.md` + duplicato in Angelini Academy
- `20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Audit Pricing Angelini Academy.md`
- `20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Prep Call Elena FuturItaly.md`
- File Excel **NON modificato**: sola lettura analitica di `~/Downloads/HeyAI_Angelini_Academy_Catalogo_Pricing_vdef.xlsx`

## Task

- [ ] Inviare email serale Elena con allegato Excel + link mockup pubblico (decidere variante: originale vs +recap riga 3) — **27/5 sera**
- [ ] Mockup deploy + percorso "Imprese" aggiunto — Carlo entro **27/5 sera**
- [ ] Verificare con Michele effort g/u P1.1 (27g realistici vs 22-25g con Claude Code)
- [ ] A4 "Slide del NO" — Carlo rivede personalmente entro **28/5**
- [ ] A8 Prove demo cronometrate ×3 — Carlo **28-30/5**
- [ ] A9 Backup tattico mockup (PDF screenshot se rete cade) — Michele + Carlo **30/5 mattina**
- [ ] Smoke test mockup pre-pitch Wi-Fi sala Angelini — Michele **30/5**
- [ ] Pre-pitch a Elena/Daniele il **30/5** (mossa decisiva recupero fiducia)
- [ ] Calcolo subtotale "top di gamma" numerico finale da presentare a Caterina
- [ ] Risolvere TBD FuturItaly su Batch iniziale + Hub continuativo (chiedere numeri a Elena)
- [ ] Decidere se mandare `HeyAI_Angelini_Academy_Proposta_Investimento_v1.docx` ora o dopo pitch 31/5
- [ ] Rinominare allegato Excel `vdef` → `HeyAI_Angelini_Academy_Quotation_2026-05-27.xlsx` prima invio

## Schede vault da aggiornare (§15)

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — `## Log`: pricing consolidato post-call Elena 27/5, Core HeyAI €48.500 (Excel `vdef`) vs target verbale €49.500; FuturItaly = solo regia editoriale; rimozione rete accademica/bandi UE dal pacchetto HeyAI
- [[60 - People/Elena Chiti]] — `## Log`: call 27/5, percezione "competente ma operativamente caotico" su Carlo, strategia recupero fiducia 6 mosse, "top di gamma" come metodologia di proposta
- [[99 - System/Master Facts Sheet]] — sezione "💰 Pricing target altri progetti": aggiornare riga Angelini Academy con €48.500 core (Excel `vdef`) + nota TBD su batch/hub editoriale
- [[99 - System/Open Questions]] — nuova entry: discrepanza €48.500 (Excel) vs €49.500 (verbale post-call) — verificare con Elena pre-invio

## Note di flag

- **Discrepanza pricing €48.500 vs €49.500**: Excel `vdef` somma esattamente €48.500 (Sito 22 + Area Sempl 5.5 + Community 15 + Analytics 2 + SEO 4). Il prompt apertura sessione cita "€49.500" come "Analytics GA4 €3k + SEO+LLM €5k" che danno appunto 1.000 € in più. Da verificare quale è il dato corretto **prima di inviare email Elena**.
- **Area Riservata Semplice in Excel = €5.500** ma in apertura sessione (e prompt iniziale) era citato "€4.5k". Possibile drift: il Master Catalog ha €5.500, la decisione verbale era €4.500. Da risolvere.
- **AI = "1 agente con 4 modalità €12.000"** in apertura sessione, ma Excel `vdef` ha "Agente AI Academy €14.000" come addon. Drift identico: prezzo Excel ≠ prezzo decisione verbale.
- **3 voci con drift Excel vs verbale**: Analytics (2 vs 3), SEO (4 vs 5), Area Riservata (5.5 vs 4.5), AI (14 vs 12). Suggerito allineamento prima invio.
- **Doc Proposta Investimento v1.docx**: ancora con prezzi vecchi (pre-call Elena). Decisione aperta: aggiornare ora o post-pitch 31/5.
- **Carlo non ha esposto fornitori HeyAI in chat** (rispettata §13 Riservatezze).
