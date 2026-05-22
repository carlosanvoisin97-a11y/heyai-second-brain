---
type: inbox
created: 2026-05-20
status: handover
parent_project: _Angelini Academy
purpose: documento self-contained per riprendere il lavoro Angelini Academy in una nuova chat Cowork con context window pulita. Riassume status di tutti i 10 punti aperti emersi nella chat 19-20/5 dopo la call FuturItaly 19/5 + conferma WhatsApp Elena 20/5 mattina. La chat precedente aveva ~40k token nel context — questo handover ne usa <2k.
related: "[[_Angelini Academy]] · [[Mockup Sito - Struttura e Copy Completo]] · [[Pre-call Elena 18-5 — Strategia Angelini Academy]]"
---

# Handover Angelini Academy — chiusura chat 20/5 sera

> Documento operativo per la prossima chat Cowork. Leggi prima questo, poi vai sulla scheda madre `[[_Angelini Academy]]` solo se serve dettaglio. La chat 19-20/5 ha prodotto 5 prompt CC (4 eseguiti + 1 da incollare), aggiornato il vault con 8 citazioni Elena verbatim + chiusura ~10 task aperti del round mockup pitch 31/5.

## Stato deliverable pitch finale 31/5

**Sito mockup `angelini-academy.vercel.app`**: 5 percorsi navigabili (Talent · Researcher · HR&Business · Media · Imprese) + Engaged Research preview + Engaged Network preview Q1 2027 + Angelini People riservato + MBA Gateway senza calcolatore + Cross-OpCo Tracker tassonomia brief 2026 + atomo Industry Learning Ecosystem refactored. **1 patch CC da incollare residua: hub editoriale doppio livello `/engaged-research`**.

**Documenti strategici**: Pitch Outline 18-5 + Brief Copy Sito + Pre-call Elena 18-5 invariati nel vault — restano 2 patch markdown da applicare (Pitch Outline post-call 19/5 + Brief Copy dictionary Elena).

## 3 task aperti residui prima del touchpoint FuturItaly 21/22 maggio

### Task #1 — Incollare prompt Laboratorio editoriale (architettura D2) in Claude Code

**File**: [[Prompt Claude Code - Laboratorio editoriale dentro engaged-network]]
**Target**: 2 file in sequenza — `src/pages/EngagedResearch.tsx` (~157 → ~165 righe, potenziamento bullet outro) + `src/pages/EngagedNetwork.tsx` (~1369 → ~1700 righe, nuova section Laboratorio editoriale)
**Tempo stimato CC**: 40-50 min
**Conferma Elena 20/5 mattina**: sezione preview pubblica + community-only per accedere completo
**Decisioni Carlo cambio architetturale 20/5 sera (D1 → D2)**:
- `/engaged-research` resta interamente pubblica come preview con CTA outro potenziata (4 bullet che descrivono il laboratorio editoriale completo dentro `/engaged-network`)
- Il laboratorio editoriale completo entra dentro `/engaged-network` come nuovo blocco tra le 4 funzionalità esistenti e i Paper Discussion Threads
- Niente login wall, niente state useState, niente architettura D1 superseded
- 3 sotto-blocchi laboratorio: 4 paper completi con CTA download + 4 VideoPillolaCard Lottie placeholder (SVG zero-dependency preferred) + Galileo Reading Room full mode con textarea ATTIVO + response hardcoded ~600 chars dopo 800ms thinking simulato
**File superseded da NON incollare**: [[Prompt Claude Code - Hub editoriale doppio livello engaged-research]] (D1 archiviata)
**Post-execution**: `npm run build` + screenshot `/engaged-research` outro potenziato + screenshot `/engaged-network` nuova section + test interattivo textarea Galileo (scrivi → chiedi → response)

### Task #2 — Patchare Pitch Outline doc post-call 19/5 (9 modifiche)

**File**: [[Pitch Outline 18-5 — Strategia Angelini Academy Short]] (markdown nel vault)
**Tempo stimato**: 1-2h di lavoro di scrittura
**Lista patch consolidata in _Angelini Academy §Task aperti**:
1. Slide 1 rinaming "architettura" → "pillar" / "servizi" / "coordinate strategiche"
2. Slide 6-7 (competitor + SEO): compressione specchietto rapido, tagliare profondità tecnica
3. Slide 12-13 (Galileo): riscrittura 4 capability focus cosa fa + dove sta + perché. **Eliminare colonna "cosa NON fa"** dalle slide cliente (vive solo nel doc lungo)
4. Nuova slide "Alberatura sito" tra slide 11 e 12 (scheletro 10 sezioni sitemap + 1 riga descrizione)
5. Slide 14: aggiunta OS5bis Hub editoriale Engaged Research **community-only** con mapping obiettivi cliente
6. Slide 15: spostamento SAT5 Landing eventi → slide 21 Later
7. Slide 15: rimozione SAT6 LinkedIn CEO (citato nella slide del NO come "era nel vostro brief, non sovrapponiamo")
8. Slide 17 (slide NO): aggiunta righe Profilo LinkedIn CEO + Calcolatore borse complesso
9. Verifica tempi parlato: 22 slide × 2 min = 44 min (slot atteso 45)

### Task #3 — Patchare Brief Copy §dictionary cluster + Email Elena domanda sotto-cluster imprese

**File 1**: [[Brief Copy Sito per Claude Code]] §dictionary
**Tempo stimato**: 30 min
**Naming Elena v.012 da capitalizzare**: Industry Learning Ecosystem · Future Skills Consortium · evidence-based learning · cognitive augmentation · AI-enhanced education · lifelong learning models · adaptive learning systems · human-AI co-intelligence (tone of voice cluster 2 community accademica/ricerca)

**File 2**: bozza email/WhatsApp a [[60 - People/Elena Chiti|Elena Chiti]] prima touchpoint 21/22 maggio
**Tempo stimato**: 20 min (skill `email-drafting` letta prima della stesura)
**Domanda specifica**: il sotto-cluster "impresa partner di co-design qualificata" (cluster 7 v.012 con badge Editor invite) ha accesso community-only hub editoriale? Elena 18/5 sera ha detto *"neanche imprese"* — verificare se intende imprese generiche (cluster 3 HR&Business clienti) o include anche partner di co-design qualificate.

## File vault prodotti / aggiornati 19-20/5

**Nuovi prompt CC pronti per execution**:
- [[Prompt Claude Code - Hub editoriale doppio livello engaged-research]] ← PENDING incolla in CC
- [[Prompt Claude Code - Refactor atomo Pillars nucleo + orbite]] ← SUPERSEDED non incollare

**Prompt CC già eseguiti da Carlo**:
- [[Prompt Claude Code - Patch HR Business cluster 3]] ✅
- [[Prompt Claude Code - percorsi imprese + persona 3D]] ✅
- [[Prompt Claude Code - Refactor atomo Industry Learning Ecosystem]] ✅
- [[Prompt Claude Code - Modifiche post-call 19-5]] ✅ (4 modifiche)

**Asset archiviati in `80 - Sources/Files/Angelini Academy/`**:
- `2026-05-19 - Trascrizione Call FuturItaly+HeyAI - Allineamento Proposta Sito.docx`
- `Analisi cluster utenti sito v.012 - Elena Chiti FuturItaly.docx`

**Asset prodotti nel codebase**:
- `src/pages/PercorsiImprese.tsx` (nuovo, 936 righe)
- `src/pages/PercorsiHrBusiness.tsx` (patchato)
- Atomo Industry Learning Ecosystem refactored (orbite ferme + 3 elettroni decorativi + float idle 12 scritte)
- `public/personas/imprese.png` (Innovation Director donna manufacturing)
- Tassonomia OpCo Cross-OpCo Tracker allineata al brief 2026

## Citazioni testuali da preservare per la storia

Le 8 citazioni Elena+Carlo verbatim dalla trascrizione call 19/5 + WhatsApp 20/5 sono in [[_Angelini Academy]] §Citazioni testuali da preservare. Highlights strategici:

- Elena 19/5 (3:25-3:41): definizione cluster Imprese = co-design corsi + placement
- Elena 19/5 (4:39): engagement imprese **già quotato da FuturItaly** come servizio commerciale
- Elena 19/5 (47:07-47:59): hub editoriale = light white paper + video pillole Loops-like + paper completi → **"deve essere il principe"** della proposta
- Elena 19/5 (46:59): **"io odio il blog"** — eliminato framing blog
- Carlo 20/5: hub editoriale **doppio livello D1** demo-fluido + Lottie animation per video pillole

## Eventi calendario imminenti

- **Giovedì 21/5 pom / venerdì 22/5 mattina**: touchpoint FuturItaly per validazione finale pre-pitch 31/5 (slot da fissare)
- **Sabato 31/5**: pitch finale Angelini Academy (3 settimane post Q&A 8/5)

## Riservatezze attive (ricordare per il pitch)

- Mai dichiarare uso AI/Claude in call con FuturItaly o cliente (Carlo episodio 24:04 call 18/5)
- Mai nominare fornitori HeyAI (Soolutions / Silencio / Jakala / Tokio Studio / Aegiscore) → "team di sviluppo" / "team tecnico"
- Flusso fatture attive NoLoop = classificato
- Marco Pasquali NoLoop ↔ Andrea Pasquali Jakala = relazione sensibile padre-figlio

## Performance Carlo coaching pattern

Da [[2026-05-19 - Carlo Performance — Call FuturItaly Angelini Academy]] (voto 6,8/10, 9 episodi, 6 pattern):
- Target tempo parlato ≤40% (era 60-65% in call 19/5)
- Pattern "sì-però" sistematico — sostituire con accoglienza esplicita
- **Mai auto-disclosure AI/Claude**
- Apertura macro-blocchi con mappa esplicita "ora parlo di tre cose"
- Esercizio pre-call: scrivere "Sì, hai ragione" su foglio sotto gli occhi

---

**Per riprendere il lavoro in nuova chat**:

> Carlo: "Riprendo da Angelini Academy. Leggi `[[2026-05-20 - Handover Angelini Academy per nuova chat]]` per status + prossimi 3 task. Partiamo da [task 1 / 2 / 3 — scegli]."

L'agente nuova chat legge questo file, poi `[[_Angelini Academy]]` se serve dettaglio, e parte dal task scelto da Carlo.
