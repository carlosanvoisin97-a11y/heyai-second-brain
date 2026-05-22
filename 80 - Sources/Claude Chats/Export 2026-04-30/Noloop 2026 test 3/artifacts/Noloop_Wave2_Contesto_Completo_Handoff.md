# CONTESTO COMPLETO — NOLOOP WAVE 2
## Documento di handoff per continuazione in nuova chat
### Aggiornato: 4 marzo 2026

---

# 1. CHI È CHI

## HeyAI (fornitore)
- **Carlo Sanvoisin** — PM/Consultant, gestisce il progetto Noloop. Intermediario tra dev e cliente.
- **Federico Saladino** — Sviluppatore principale (front-end, Crowd, Minutes)
- **Simone** — Sviluppatore (back-end, integrazioni, architettura)
- **Bruno** — Socio/partner di HeyAI

## Noloop (cliente)
- **Laura Garbarino** — Amministratrice Delegata. Decide budget e approvazioni. Usa Progress per controllo.
- **Laura Zaghi** — Director BU Garbarino. Compila Progress settimanalmente (2h/sett). Supervisiona commerciali.
- **Antonio Cichello** — Director BU Consumer. 280 COM/anno, aggiorna Progress daily. Ha stimato 20-25% di risparmio tempo possibile.
- **Lorena Cavecchi** — Senior Manager Programmazione/Logistica. Approva mandati di pagamento su BC. Key stakeholder operativa.
- **Roberta Calajò** — Finance/Controllo di Gestione. Gestisce apertura COM su BC, riceve 120 email procedurali/settimana.
- **Elisa Remigi** — Amministrazione. Inserisce manualmente fatturazione attiva su BC (il "barbatrucco").
- **Ivano Romano** — Capo Reparto Creativo. 8-9 persone. Pain point: lavorano "al buio" senza analisi strategica.
- **Simona** — Analyst New Business. 290 lead, 25 profili/sett, 17,5 min/profilo, tracciamento manuale.
- **Marco Merli** — Crowd/operativo. Email massive in fase di integrazione.
- **Alessandro D'Onofrio** — Operativo, tester Minutes.
- **Antonella** — Gestisce credenziali AI Venue Finder.

## Noloop — Numeri chiave
| Dato | Valore |
|---|---|
| Fatturato annuo | ~€55M |
| Dipendenti | ~150 |
| Commesse/anno | 260 (BU Garbarino + BU Consumer) |
| Sede | Milano |
| Business | Agenzia eventi corporate (incentive, convention, meeting, lanci prodotto) |
| Gestionale contabile | Microsoft Business Central (Dynamics) |
| HR/Timesheet | Zucchetti |
| Piattaforma eventi | Crowd (sviluppata da HeyAI — Wave 1) |

---

# 2. STATO DEL PROGETTO

## Wave 1 (completata)
- **Crowd** — Piattaforma gestione eventi (inviti, partecipanti, comunicazioni, logistica)
- **Minutes** — Tool trascrizione e analisi call Teams (React + Gemini API), deployato e in uso
- **LeadMe v1** — CRM base con scraper LinkedIn, consegnato, in fase di deploy sui server Noloop
- **AI Venue Finder** — Scouting location con AI, MVP standalone (fuori dall'ecosistema), da integrare
- **Sales Navigator** — Identificato, negoziato, training fatto

## Wave 2 (in fase di proposta — presentazione a Garbarino imminente)
7 soluzioni proposte + integrazioni:
1. **LeadMe Evolution** — Evoluzione CRM con scraper proattivo, AI icebreaker, integrazione Link
2. **Pitch** — Modulo Creativo (Deep Search + Playground AI unificato)
3. **Flow** — Task Management System (Kanban/Gantt, mobile, Sally, push a Link)
4. **Link** — Sistema Gestionale (Progress digitale, budget 3 stadi, integrazione BC, dashboard)
5. **Sally** — Agente 360° (KB aziendale, Venue Finder integrato, skill modulari, PWA mobile)
6. **OnSite** — AI Event Companion (PWA partecipanti, chatbot evento, networking)
7. **Minutes Evolution** — Registrazione call esterne, estrazione dati apertura COM

---

# 3. IL PROCESSO E2E (5 step validati con Lorena)

### Step 1 — Acquisizione
Team New Business su LinkedIn SN + scraper LeadMe. Sally monitora lead dormienti.

### Step 2 — Proposta
Brief arriva → call su Minutes → estrazione dati apertura COM → push a Link + BC (zero email). Sally/Venue Finder per ricerca location + presentazione automatica (Figma/Canva, non PPT). Pitch per render, video, materiali creativi.

### Step 3 — Conversione
Gara vinta → COM passa a "confermata" su Link → istanza Crowd creata → LeadMe aggiornato. Debrief operativo su Minutes.

### Step 4 — Esecuzione
Task da Minutes su Flow. Operativi aggiornano da mobile (note vocali + foto → Sally formalizza). Budget lavorato su Link con flusso automatico verso BC. Crowd per gestione partecipanti. OnSite durante l'evento.

### Step 5 — Chiusura
Blocco chiusura senza fatture. Check quadratura BC. Push automatico a Progress digitale. Dashboard Garbarino con Sally NLP.

### Trasversali
Sally + Minutes accessibili ovunque e in ogni fase.

---

# 4. ARCHITETTURA CHIAVE — LINK E BUDGET

## Tre stadi di budget
1. **Previsionale (in gara)** — Macro numeri da brief. Può avere N rilanci. Work in progress.
2. **Pre-chiusura (prima della partenza)** — Dati accurati, fornitori confermati, acconti schedulati.
3. **Consuntivo (entro 15 giorni dal rientro)** — Fatture reali + fatturazione attiva. Snapshot immutabile.

## Ciclo passivo (fatture fornitori)
- Fatture italiane → cassetto fiscale su BC (automatico)
- Fatture estere → operativo le riceve, le rinomina (nome + COM), le carica in cartella condivisa → admin inserisce in BC
- Richieste di pagamento → operativo inserisce su BC → approvazione Lorena → approvazione Roberta → pagamento

## Ciclo attivo (fatturazione al cliente) — IL "BARBATRUCCO"
- Operativo compila template Excel precisissimo (PO, importi, codici IVA)
- Lo manda via email a Elisa credendo sia automatizzato
- Elisa lo inserisce MANUALMENTE in BC
- Con Link: template compilato su Link → push a BC via API → Elisa conferma con un click → l'automatismo diventa reale

## Tipo fatturazione
All'apertura COM va indicato: IVA o 74-ter. Nel 74-ter, costi italiani sono lordo IVA. Hotel può avere 3 aliquote diverse (10%, 22%, esente per tasse soggiorno).

## Approvazione Garbarino
NON sull'apertura COM (si apre sempre). SÌ sul budget/proposta da mandare al cliente (solo clienti importanti).

## Chiarimento terminologico
"Piano di produzione" per Noloop = Gantt operativo (= Flow). "Budget" = documento economico con costi. NON confondere.

## Due opzioni per il budget (confermate con Lorena)
- **Opzione A (ambiziosa):** Budget digitale completo con integrazione BC
- **Opzione B (fallback):** Si lavora su Excel come oggi, ma si carica sul gestionale → Progress si auto-compila
- Lorena: "partiamo dalla proposta che puntiamo alle stelle e poi torniamo indietro se non si può"

---

# 5. BUSINESS CASE — COMPLETATI

## 5.1 Link — Sistema Gestionale

| Area | Ore/anno | Risparmio/anno |
|---|---|---|
| Apertura commessa automatizzata | 78h | €3.100 |
| Eliminazione compilazione manuale Progress | 386h | €17.600 |
| Fatture perse e chiusure incomplete | 99h | €3.800 |
| Fatturazione attiva integrata | 162h | €5.900 |
| Creazione e gestione budget | 401h | €14.500 |
| Reporting direzione | 58h | €5.500 |
| **TOTALE** | **1.184h** | **€50.400** |

**Scenari:** Conservativo (70%) €35.300 | Realistico (85%) €42.800 | Ottimistico €50.400

**Costi orari usati:** AD Garbarino €95/h | Director (Zaghi/Cichello) €55/h | PM/Operativi €35/h | Admin €37/h

## 5.2 LeadMe Evolution & CRM

| Area | Ore/anno | Risparmio/anno |
|---|---|---|
| Profilazione automatizzata | 710h | €18.810 |
| Scrittura messaggi AI-assisted | 203h | €5.396 |
| Eliminazione tracking manuale | 736h | €22.844 |
| Task da Minutes + notifiche | 257h | €8.738 |
| Scraper proattivo | 333h | €8.377 |
| **TOTALE** | **2.239h** | **€64.165** |

**Scenari:** Conservativo (70%) €44.900 | Realistico (85%) €54.500 | Ottimistico €64.200

**Costi orari usati:** Analyst €24/h | Manager €34/h | Director €53/h

**Struttura team commerciale:**
- Gruppo A (ricerca attiva): 2 Analyst full (Simona + 1), 1 Analyst al 35%, 1 Manager al 35%, 1 Director al 12%
- Gruppo B (gestione relazioni): 7 Manager, 2-3h/sett ciascuno

**Accelerazione:** +60% capacità scouting, time-to-first-contact da 2-3gg a stesso giorno, revenue a rischio recuperabile €210K-€840K/anno

## 5.3 Pitch — Modulo Creativo

| Area | Ore/anno | Risparmio/anno |
|---|---|---|
| Analisi strategica (rework evitato — netto) | 246h | €6.000 |
| Playground creativo unificato | 923h | €27.675 |
| **TOTALE** | **1.169h** | **€33.675** |

**Scenari:** Conservativo (70%) €23.600 | Realistico (85%) €28.600 | Ottimistico €33.700

**Costi orari usati:** Creative Director/Senior €41/h | Creative mid-level €27/h | Media pesata €30/h

**Dati Pitch:** 45 gare/anno, 5-6 persone per gara, win rate 20%, deadline 15gg, 3-4 brief sovrapposti.
**Pain point Ivano:** "si lavora al buio", "il cliente risponde questo l'abbiamo già fatto"
**Accelerazione:** Win rate da 20% a 25-28%, 3-4 gare aggiuntive, revenue potenziale €630K-€1.050K/anno

---

# 6. BUSINESS CASE — DA FARE

## 6.1 Flow — Task Management System
Dati disponibili:
- Lorena ha validato il flusso: task da Minutes → Flow → mobile con Sally
- Sopralluoghi documentati su carta e penna → input vocale + foto
- Scadenze contrattuali dimenticate → reminder automatici
- Nessuna visibilità centralizzata su carichi di lavoro
- Tagging @mention sostituisce WhatsApp/telefonate di coordinamento
- Push dati su Link senza reinserimento
- Profili coinvolti: PM/operativi (€35/h), segreterie, senior manager per supervisione
- Stimare quante persone usano il task management (probabilmente 20-30 su 150 dipendenti)
- Stimare quanti sopralluoghi/anno e quanto tempo si perde nella ricostruzione appunti

## 6.2 Sally — Agente 360°
Dati disponibili:
- 120 email procedurali/settimana a Calajò (dato validato)
- Onboarding: ~15 nuovi assunti/anno, stima 3 giornate risparmiate per persona = 360 ore/anno
- Query operative: 30 persone × 2-3 domande/giorno × 10 min = 2.750 ore/anno a regime (con adozione progressiva: anno 1 al 30%, anno 2 al 50%, anno 3 al 70%)
- Costo orario blend: €40/h (mix operativi + senior)
- Venue Finder integrato: presentazioni location automatiche (risparmio tempo Lorena e team programmazione)
- Memoria storica: "cercami la presentazione del Forte Village" vs cercare in cartelle per anno/cliente
- Estrazione dati contratti: importo, condizioni pagamento, deadline → reminder automatici
- Costo integrazione Venue Finder nell'ecosistema: ~€2.000 (stima Carlo)

## 6.3 Minutes Evolution
- Registrazione call esterne (prototipo già funzionante con diarizzazione speaker)
- Estrazione dati apertura COM dal brief + transcript
- Task strutturati con push su Flow
- ~15 min risparmiati per call su report manuali
- Stimare numero call/settimana aziendali (probabilmente 30-50 per un'agenzia da 150 persone)

## 6.4 OnSite — AI Event Companion
- Riduzione carico staff durante evento
- Chatbot FAQ logistica → meno domande allo staff
- Feedback live → dati strutturati
- Social networking tra partecipanti
- Quantificazione difficile — principalmente valore qualitativo + differenziazione competitiva

## 6.5 Crowd (Wave 1, già consegnato — non serve business case ma menzione)

---

# 7. SLIDE AGGIORNATE — COPY RISCRITTO

## Slide "Le Aree di Ottimizzazione" (5 pain point)
1. Il Progress viene compilato a mano duplicando dati già presenti altrove, assorbendo ore ogni settimana alla supervisione commerciale
2. Le informazioni fra reparti non circolano spontaneamente: chi gestisce i budget rincorre i commerciali, chi gestisce la contabilità rincorre gli operativi
3. Fatture non recuperate e chiusure incomplete generano fornitori aperti a fine anno, riaperture e disallineamenti contabili ricorrenti
4. L'amministrazione riceve oltre 120 richieste procedurali a settimana perché la popolazione operativa non ha un punto di riferimento immediato su processi e modulistica
5. Ogni proposta di gara richiede ricerca location, presentazioni e materiali ricostruiti da zero, senza riuso dello storico aziendale né strumenti di accelerazione

**Insight:** Ogni area è stata validata direttamente dai responsabili di reparto. Noloop ha l'opportunità di trasformarle in leve di differenziazione, consolidando l'eccellenza qualitativa con una maggiore efficienza operativa e liberando margini che abilitano la scalabilità.

## Slide Link — Copy aggiornato ✅ (fatto in questa chat)
## Slide LeadMe — Copy aggiornato ✅ (fatto in questa chat)
## Slide Flow — Copy aggiornato ✅ (fatto in questa chat)
## Slide Sally — Copy aggiornato ✅ (fatto in questa chat)
## Slide Pitch — DA FARE (aggiornare con dati intervista Ivano)
## Slide OnSite — DA VERIFICARE se serve aggiornamento
## Slide Minutes — DA VERIFICARE se serve aggiornamento

---

# 8. CONTENUTI PER SLIDE PRESENTAZIONE

Il file `Noloop_Contenuti_Slide_Presentazione.md` contiene:
- **Sezione A:** Processo E2E in 5 step (formato slide, ad alto livello)
- **Sezione B:** Overview soluzioni (descrizioni sintetiche per slide overview)
- **Sezione C:** Funzionalità chiave + impatto di business per TUTTE le 8 soluzioni (tabelle)
- **Sezione D:** 10 nuove proposte emerse dalla call Lorena 24/02
- **Sezione E:** Chiarimenti processuali dalla call Lorena

---

# 9. PROMPT DEMO GOOGLE AI STUDIO

Creato un prompt completo per Google AI Studio (Gemini) che genera una demo HTML interattiva con 12 schermate navigabili che simulano l'intero flusso E2E. Caso d'uso: Kering — Incentive Barcellona, 120 pax, budget €180K. File: `Prompt_Demo_Noloop_GoogleAIStudio.md`

---

# 10. DOCUMENTI DEVELOPER

Il file `Noloop_Wave2_Requisiti_Quotazione_v2.md` contiene i requisiti dettagliati per la quotazione di Federico e Simone:
- Parte 1: Il processo come funziona oggi
- Parte 2: La nostra soluzione
- Parte 3: Specchietto requisiti per modulo (con requirement numerati)
- Parte 4: Note per la quotazione (add-on, integrazioni da testare, open point)

**Open point architetturale:** Dove vive il PDP (budget digitale)? In Flow, in Link, o standalone? Federico/Simone devono decidere.

---

# 11. INTERVISTE SVOLTE

| # | Interlocutore | Ruolo | Data | Temi principali |
|---|---|---|---|---|
| 1 | Lorena Cavecchi (1) | Sr. Manager Programmazione | Gen 2026 | Processo E2E, task, programmazione |
| 2 | Lorena Cavecchi (2) | Sr. Manager Programmazione | 24 Feb 2026 | Revisione processo, Venue Finder, sopralluoghi mobile, budget, BC, Progress |
| 3 | Laura Zaghi | Director BU Garbarino | Feb 2026 | Progress (2h/sett), facing, KPI direzione |
| 4 | Antonio Cichello | Director BU Consumer | Feb 2026 | 280 COM, Progress daily, 20-25% risparmio, fatture dimenticate |
| 5 | Roberta Calajò + Elisa Remigi | Finance/Admin | Feb 2026 | BC, ciclo attivo/passivo, barbatrucco, 120 email/sett, apertura COM |
| 6 | Ivano Romano + team creativo | Reparto Creativo | 26 Feb 2026 | Brief incompleti, lavorano "al buio", rework, tool AI frammentati, 45 gare/anno |
| 7 | Simona (New Business) | Analyst | Feb/Mar 2026 | 290 lead, 25 profili/sett, 17,5 min/profilo, tracking manuale, 60% response rate |

---

# 12. PARAMETRI ECONOMICI COMUNI

## Costi orari aziendali (benchmark Italia, agenzia eventi Milano)

| Profilo | RAL | Costo azienda (×1,40) | Costo orario (/1.720h) |
|---|---|---|---|
| Amministratrice Delegata | €120.000 | €168.000 | €95/h |
| Director BU | €65.000 | €91.000 | €55/h |
| Creative Director / Senior | €50.000 | €70.000 | €41/h |
| Manager / PM / Producer | €42.000 | €59.000 | €35/h |
| Amministrazione / Finance | €45.000 | €63.000 | €37/h |
| Manager commerciale | €42.000 | €59.000 | €34/h |
| Creative mid-level | €33.000 | €46.200 | €27/h |
| Analyst (New Business) | €30.000 | €42.000 | €24/h |

Formula: Costo azienda = RAL × 1,40 (INPS ~30% + TFR ~7% + INAIL + benefit). Ore effettive: 1.720/anno (220gg × 8h).

## Valore medio commessa
€55M / 260 COM = ~€210K (media, include commesse molto grandi e molto piccole)

---

# 13. RIEPILOGO BUSINESS CASE AGGREGATO (parziale — mancano Flow, Sally, Minutes, OnSite)

| Soluzione | Risparmio realistico (85%) | Ore liberate | FTE equiv. |
|---|---|---|---|
| Link | €42.800 | 1.184h | 0,7 |
| LeadMe | €54.500 | 2.239h | 1,3 |
| Pitch | €28.600 | 1.169h | 0,7 |
| **Subtotale (3 su 7)** | **€125.900** | **4.592h** | **2,7** |
| Flow | DA FARE | — | — |
| Sally | DA FARE | — | — |
| Minutes | DA FARE | — | — |
| OnSite | DA FARE (qualitativo) | — | — |

**Accelerazione commerciale (non inclusa nel risparmio operativo):**
- LeadMe: revenue a rischio recuperabile €210K-€840K/anno
- Pitch: revenue aggiuntivo potenziale €630K-€1.050K/anno

---

# 14. FILE DI RIFERIMENTO

Tutti i file prodotti sono in `/mnt/user-data/outputs/`:
| File | Contenuto |
|---|---|
| `Noloop_Wave2_Requisiti_Quotazione_v2.md` | Requisiti developer per quotazione |
| `Noloop_Contenuti_Slide_Presentazione.md` | Copy per slide: processo E2E, overview soluzioni, funzionalità/impatto |
| `Noloop_Business_Case_Link.md` | Business case completo Link |
| `Noloop_Business_Case_LeadMe.md` | Business case completo LeadMe |
| `Noloop_Business_Case_Pitch.md` | Business case completo Pitch |
| `Prompt_Demo_Noloop_GoogleAIStudio.md` | Prompt per demo HTML interattiva |

Trascrizioni originali disponibili in `/mnt/transcripts/` (5 file) e intervista Lorena 24/02 in uploads.

---

# 15. PROSSIMI PASSI

1. ✅ Business case Link — COMPLETATO
2. ✅ Business case LeadMe — COMPLETATO
3. ✅ Business case Pitch — COMPLETATO
4. ⬜ Business case Flow — DA FARE
5. ⬜ Business case Sally — DA FARE
6. ⬜ Business case Minutes — DA FARE
7. ⬜ Business case OnSite — DA FARE (qualitativo)
8. ⬜ Business case AGGREGATO con totale ecosistema
9. ⬜ Aggiornare copy slide Pitch con dati intervista Ivano
10. ⬜ Verificare se slide OnSite e Minutes necessitano aggiornamento
11. ⬜ Quotazione da Federico e Simone (attendere)
12. ⬜ Presentazione finale a Garbarino (data da confermare con Laura)