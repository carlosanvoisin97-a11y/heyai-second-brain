---
type: session-recap
source: claude-code
session_id: ad9a9e5f
project_path: ~/code/angelini-academy (worktree: serene-moore-2d41ba)
date_last_activity: 2026-05-27
size_mb: 17.2
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy wt serene-moore (ad9a9e5f)

Sessione lunga (26/5 18:46 → 27/5 19:46, ~25 ore, 179 user msg / 311 assistant). Worktree del repo `~/code/angelini-academy` (sito mockup HeyAI). Apertura con handover dettagliato del pitch Angelini Academy (Atto 3 da ridisegnare, struttura 6-8 slide post-demo). Continuata con audit pricing meticoloso, costruzione Catalogo Prezzi Excel multi-iterazione, call Elena 27/5, recap call + performance review Carlo, email finale invio deliverable.

## Cosa è stato fatto

1. **Atto 3 del pitch** — riprogettato da 4 a 6-7 slide: S22 Capability HeyAI+FuturItaly unificata, S23 Case history (2 slide: NOT lato HeyAI + placeholder FuturItaly), S24 Roadmap modulare, S25 Team & Governance con qualification card, S26 Quotazione modulare pacchetto core + addon, S27 Closing. Decisioni applicate: no riferimenti slide nei talking ("vedrete in S17" vietato), capability HeyAI ad alto livello (no React/TypeScript), case history NOT (non Notoop trade come scritto erroneamente).
2. **Audit pricing iperdettagliato** — ricerca benchmark di mercato, breakdown ore-uomo voce per voce, challenge sui prezzi alti (Carlo ha contestato prezzi sito, area riservata/community, agente AI). Carlo: stima sviluppatore esterno per agente conversazionale €8K, login separato €500, knowledge base €2.5K, database cloud €2.5K → quindi prezzo agente ridotto da €29K iniziali (poi €25K) verso €12-15K MVP. Sito completo allineato a €22K. Area riservata splittata: Semplice €5.5K (interni, no tenant) + Avanzata €13K (login per-user + track record, upgrade opzionale).
3. **Excel Catalogo Prezzi multi-versione** — generato Python script `/tmp/heyai-docx/generate_xlsx*.py` (v2, v4, v41, v42). Carlo ha modificato manualmente (vcarlo.xlsx) e poi vdef. Versione finale: 2 fogli (`01_Catalogo_Prezzi` 31 righe + `02_Pacchetto_Proposto` 50 righe). Tariffa giornaliera HeyAI €650 (confermata da Carlo). Sconti e modello commerciale rimossi dalla vdef per scelta tattica (non esporre leve negoziali al cliente prima del tempo).
4. **Call Elena 27/5** — durante chiamata Carlo+Elena allineamento su economics. Outcome: tolto screening + finanza agevolata dallo scope (non in perimetro), parte editoriale FuturItaly con prezzi TBD (li mettono loro), riallineamento sito (sconsigliato in note ma quotato €4K alternativo), area riservata Base nel core / Avanzata addon, AI come addon opzionale, FuturItaly assorbe pubblicazione 1-2 articoli/mese in community senza costo extra.
5. **Performance review Carlo post-call** — analisi confusione percepita da Elena durante call, strategia recupero fiducia via email/messaggi consegna deliverable. Carlo ha riconosciuto stanchezza/stress come causa caos comunicativo.
6. **Email finale a Elena (27/5 sera)** — invio Excel vdef + link sito deployato, gestione narrativa pitch (Atti 1+2 venerdì, Atto 3 entro fine settimana). Enfasi sul sito già costruito come leva di competenza.
7. **Recupero terminologia call** — Elena ha coniato "White paper light" per definire ricerche scientifiche leggere scaricabili in PDF (timestamp call ~18:00).

## Progetti / aree vault toccate

`angelini-academy` (repo codice mockup) → progetto vault [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]]. Path vault: `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/`. Case history NOT (lato HeyAI) → [[20 - Projects/NOT/_NOT]] e [[20 - Projects/NOT/NOT Marketing - LinkedIn e Sito]].

## Decisioni

- Atto 3 ridisegnato a 6-7 slide (vs 4 iniziali). S22 Capability unificata HeyAI+FuturItaly post-demo. S23 case history NOT lato HeyAI + 1 slide placeholder FuturItaly. Lessico capability ad alto livello, no dettagli tecnici React/TypeScript, no confini contrattuali in slide.
- Excel Catalogo Prezzi vdef: 2 fogli, tariffa €650/g, sconti e modello commerciale rimossi tatticamente. Termine "una tantum" (non "one-shot"). Riallineamento sito €4K come alternativa sconsigliata, raccomandazione partire direttamente con sito completo.
- Bilinguismo, SEO+LLM, accessibility inclusi nel sito core (no addon separati). Customer Journey diventa addon, SEO diventa core. Plausible analytics rimosso, Analytics setup mantenuto (alternativa Dashboard custom proprietaria).
- AI: 1 agente con 4 funzionalità (no 4 MVP separati). Knowledge base + master prompt diversi per funzione, ma stessa infrastruttura.
- Email marketing: setup tecnico €1.8K (integrazione tecnica form sito↔piattaforma) + €1.5K/mese continuativo (campagne segmentate). Integrazione CRM e gateway pagamento "su quotazione".
- Editoriale FuturItaly: pricing TBD, descrizioni qualitative discorsive, no numeri inseriti da HeyAI. Hub editoriale = 2 white paper light/mese + video pillole + founder/alumni stories.

## Numeri (Catalogo vdef, IVA esclusa)

**Pacchetto Core**: Sito web nuovo €22K · Area Riservata Semplice €5.5K · Community Engaged Network €15K · Analytics setup €2K · SEO+LLM €4K · Batch iniziale contenuti TBD (FuturItaly) · Hub editoriale continuativo TBD (FuturItaly). Riallineamento sito attuale €4K (alternativa). **Addon**: Studio strategico Customer Journey €4K · Agente AI Academy €14K · Area Riservata Avanzata €13K · Dashboard Analytics custom €6.5K · Landing eventi pubblici €5-10K/cad · Landing eventi interni €5-10K/cad (richiede Area Riservata) · Integrazione CRM su quotazione · Gateway pagamento su quotazione · Gestione LinkedIn Academy €4.5K/mese · Email marketing setup €1.8K + continuativo €1.5K/mese. Brief gara opzionali (video promo, brochure, gadget) su quotazione.

## Output (file)

- **Excel finale**: `/Users/carlosanvoisin/Downloads/HeyAI_Angelini_Academy_Catalogo_Pricing_vdef.xlsx` (versione 27/5 dopo modifiche manuali Carlo)
- **Documento riepilogo**: `/Users/carlosanvoisin/Downloads/Angelini _ Review Economics.docx` (recap call + economics)
- **Pitch source aggiornato**: `/Users/carlosanvoisin/claude/00 - Inbox/2026-05-23 - Pitch Angelini v3.3 - Atto 1 Ristrutturato.md` (Atto 3 ridisegnato)
- **Audit pricing**: `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Audit Pricing Angelini Academy.md`
- **Prep call Elena**: `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/2026-05-27 - Prep Call Elena FuturItaly.md`
- **Sito mockup**: deployato da Carlo (link non specificato in chat)
- Script Python in `/tmp/heyai-docx/` (effimeri, generate_xlsx v2/v4/v41/v42, apply_v41)

## Task aperti

- [ ] Carlo: rivedere check finale Excel vdef post-deploy sito (consegnato 27/5 sera)
- [ ] Carlo: inviare Atti 1+2 pitch a Elena entro venerdì 29/5, Atto 3 entro fine settimana
- [ ] Carlo: recupero fiducia Elena via email/consegna deliverable (post performance review)
- [ ] Carlo+Michele: smoke test mockup + backup PDF (A9, deadline 30/5)
- [ ] Carlo: prove demo cronometrate 3x con micro-pause (A8, 28-30/5)
- [ ] Carlo: case history NOT — dettagli specifici da rifinire post-pricing
- [ ] Elena: case history laboratorio editoriale FuturItaly (placeholder slide)
- [ ] Discutere con Elena: prezzi FuturItaly editoriale · esistenza FuturItaly nella narrativa pitch · modello fatturazione · ruolo FuturItaly regia editoriale

## Schede vault da aggiornare (§15)

- [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]] — log call Elena 27/5, decisioni economics, performance review Carlo, pricing finale
- [[99 - System/Master Facts Sheet]] — sezione "Pricing target altri progetti" → Angelini Academy: pacchetto core ~€50K (escluso TBD FuturItaly) + addon. Tariffa HeyAI €650/g (confermata)
- [[60 - People/Elena Chiti]] — log call 27/5, pattern comunicativo Carlo "tu parli con proprietà però dici tanto, mi va in tilt il cervello" (già nel CLAUDE.md ma da rimarcare), strategia recupero fiducia
- [[60 - People/Carlo Sanvoisin]] o [[30 - Areas/Area - Performance & Coaching/]] — performance review post-call 27/5 (confusione percepita, stanchezza/stress riconosciuti)
- [[20 - Projects/NOT/_NOT]] — case history NOT confermato per pitch Angelini (lato HeyAI)

## Citazioni rilevanti

- Elena 27/5 (call): "due chiamiamoli **White paper light**, cioè due ricerche scientifiche light che non sono quindi un mattonazzo che però può essere downloadato"
- Stima sviluppatore esterno (citata da Carlo per challenge prezzo agente AI): chatbot conversazionale €8K, login separato €500, knowledge base €2.5K, database cloud €2.5K

## Note di flag

- **Performance review Carlo** è argomento sensibile, da gestire in `30 - Areas/Area - Performance & Coaching/` non in scheda persona Elena (§15 path corretti).
- **Numeri non ufficiali**: il pacchetto core ~€50K NON è ancora confermato come "numero ufficiale" — è il working state dell'Excel vdef del 27/5. Cliente non ha ancora risposto. Non promuoverlo a Master Facts senza conferma esplicita Carlo.
- **Confine fornitore**: la parte editoriale è FuturItaly (Elena+Daniele Caporale), HeyAI lascia pricing TBD su loro voci. Mai esporre margini FuturItaly nei deliverable verso cliente (§13 Riservatezze + indicazione esplicita Carlo "non mettere mai menzioni al margine").
- **Sconti/modello commerciale rimossi tatticamente** dalla vdef finale — scelta strategica per non esporre leve negoziali prematuramente, Carlo ha approvato la rimozione dopo aver inizialmente messo in dubbio.
- **Skill invocate durante sessione**: superpowers (brainstorming + using-superpowers), management-consulting, product-management:write-spec, transcript-processing (parziale, per recap call Elena).
