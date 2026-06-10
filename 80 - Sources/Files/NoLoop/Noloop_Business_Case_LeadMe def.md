# Business Case — LeadMe Evolution & CRM
## Analisi del Risparmio Operativo e dell'Accelerazione Commerciale

---

## PARAMETRI DI BASE

### Benchmark operativo: Simona (Analyst, ricerca attiva full-time)

| Parametro | Valore | Fonte |
|---|---|---|
| Profili analizzati/settimana | 20-30 (media 25) | Dato Simona |
| Tempo per profilo | 15-20 min (media 17,5 min) | Dato Simona |
| Tasso di contatto | 1 su 3 analizzati (~8/settimana) | Dato Simona |
| Tasso di risposta | 60% dei contattati (~5/settimana) | Dato Simona |
| Lead totali gestiti | 290 (di cui 60 in esclusione) | Dato Simona |
| Tracking manuale | Date contatto, risposte, follow-up | Dato Simona |
| Difficoltà principale | Gestione ricontatti con volumi alti | Dato Simona |

### Tempo settimanale stimato di Simona

| Attività | Calcolo | Ore/settimana |
|---|---|---|
| Analisi profili/aziende | 25 profili × 17,5 min | 7,3h |
| Scrittura messaggi personalizzati ¹ | 8 contatti × 15 min | 2,0h |
| Tracking manuale (date, status, follow-up) ² | 290 lead × aggiornamenti quotidiani | 2,5h |
| Gestione risposte e follow-up | ~5 risposte/sett × 20 min | 1,7h |
| **Totale attività lead-related** | | **13,5h/sett** |

¹ Per ogni lead contattato: studio del contesto specifico, composizione messaggio LinkedIn/email personalizzato, adattamento tono e angolo. Stima conservativa 15 min.

² Con 290 lead attivi, ogni giorno Simona deve: verificare chi contattare, chi ri-contattare, registrare risposte ricevute, aggiornare status. Stima ~30 min/giorno.

### Struttura del team commerciale

| Gruppo | Persone | Livello | Attività | Volume vs Simona |
|---|---|---|---|---|
| **A — Ricerca attiva** | 2 Analyst (Simona + 1) | Analyst | Scouting, profilazione, primo contatto | 100% |
| **A — Ricerca attiva** | 1 Analyst | Analyst | Stesso tipo, meno volume | 35% |
| **A — Ricerca attiva** | 1 Manager | Manager | Ricerca + gestione, meno scouting | 35% |
| **A — Ricerca attiva** | 1 Director | Director | Ricerca mirata, lead strategici | 12% |
| **B — Gestione relazioni** | 7 Manager | Manager | Lead caldi, clienti, funnel, follow-up | 2-3h/settimana |

### Costo orario aziendale

| Profilo | RAL stimata | Costo azienda (×1,40) | Costo orario (/1.720h) |
|---|---|---|---|
| Analyst (Simona e colleghi) | €30.000 | ~€42.000 | **€24/h** |
| Manager (commerciali senior) | €42.000 | ~€59.000 | **€34/h** |
| Director | €65.000 | ~€91.000 | **€53/h** |

---

## AREA 1: PROFILAZIONE AUTOMATIZZATA (Gruppo A — Ricerca attiva)

### Situazione attuale
Ogni profilo richiede 15-20 minuti di analisi manuale: navigare il profilo LinkedIn, verificare l'azienda, controllare se organizzano eventi, cercare divisioni interne, capire se usano agenzie esterne e quali.

### Con LeadMe
Lo scraper proattivo raccoglie automaticamente i dati dal profilo LinkedIn e dall'azienda (ruolo, company, settore, dimensione, eventi recenti). L'AI pre-valuta il fit con i criteri Noloop. L'analyst rivede e conferma in ~5 minuti anziché 17,5.

### Calcolo risparmio

| Risorsa | Profili/sett | Risparmio/profilo | Ore/sett | Settimane | Ore/anno | Costo/h | Risparmio |
|---|---|---|---|---|---|---|---|
| Simona (Analyst) | 25 | 12,5 min | 5,2h | 48 | 250h | €24 | €6.000 |
| Analyst 2 | 25 | 12,5 min | 5,2h | 48 | 250h | €24 | €6.000 |
| Analyst 3 (35%) | 9 | 12,5 min | 1,9h | 48 | 90h | €24 | €2.160 |
| Manager (35%) | 9 | 12,5 min | 1,9h | 48 | 90h | €34 | €3.060 |
| Director (12%) | 3 | 12,5 min | 0,6h | 48 | 30h | €53 | €1.590 |

**Totale Area 1: 710h → €18.810/anno**

---

## AREA 2: SCRITTURA MESSAGGI AI-ASSISTED (Gruppo A)

### Situazione attuale
Per ogni lead contattato, il commerciale scrive un messaggio personalizzato (LinkedIn InMail, email, follow-up). Richiede comprensione del contesto, personalizzazione del tono, referenza a elementi specifici del profilo. Stima ~15 min per messaggio.

### Con LeadMe
L'AI genera un icebreaker/messaggio personalizzato basato sul profilo, storico interazioni e contesto aziendale. Il commerciale rivede e personalizza in ~4 minuti. Risparmio: ~11 min per messaggio.

### Calcolo risparmio

| Risorsa | Messaggi/sett | Risparmio/msg | Ore/sett | Ore/anno | Costo/h | Risparmio |
|---|---|---|---|---|---|---|
| Simona (Analyst) | 8 | 11 min | 1,5h | 71h | €24 | €1.699 |
| Analyst 2 | 8 | 11 min | 1,5h | 71h | €24 | €1.699 |
| Analyst 3 (35%) | 3 | 11 min | 0,6h | 26h | €24 | €634 |
| Manager (35%) | 3 | 11 min | 0,6h | 26h | €34 | €898 |
| Director (12%) | 1 | 11 min | 0,2h | 9h | €53 | €466 |

**Totale Area 2: 203h → €5.396/anno**

---

## AREA 3: ELIMINAZIONE TRACKING MANUALE (Gruppo A + B)

### Situazione attuale
Simona: "devo tenere sempre traccia del giorno del primo contatto, dell'eventuale risposta ricevuta e del follow-up da effettuare dopo una o due settimane. Con questi volumi il processo diventa complesso." Tutto fatto a mano su Excel.

I 7 Manager del Gruppo B hanno lo stesso problema sui loro lead caldi/clienti, anche se con volumi minori.

### Con LeadMe
Tracking completamente automatico. Date contatto, risposte, status funnel aggiornati in tempo reale. Alert automatici su follow-up in scadenza. Dashboard con vista completa. Zero Excel.

### Calcolo risparmio

**Gruppo A (ricercatori attivi):**

| Risorsa | Tracking attuale | Con LeadMe | Risparmio/sett | Ore/anno | Costo/h | Risparmio |
|---|---|---|---|---|---|---|
| Simona | 2,5h/sett | 15 min/sett | 2,25h | 108h | €24 | €2.592 |
| Analyst 2 | 2,5h/sett | 15 min/sett | 2,25h | 108h | €24 | €2.592 |
| Analyst 3 (35%) | 1,0h/sett | 10 min/sett | 0,83h | 40h | €24 | €960 |
| Manager (35%) | 1,0h/sett | 10 min/sett | 0,83h | 40h | €34 | €1.360 |
| Director (12%) | 0,5h/sett | 5 min/sett | 0,42h | 20h | €53 | €1.060 |

**Gruppo B (gestione relazioni — 7 Manager):**

| Attività | Situazione attuale | Con LeadMe | Risparmio |
|---|---|---|---|
| Verifica status funnel e scadenze | Apertura Excel, scroll, ricerca manuale | Dashboard con filtri e alert | ~40 min/sett → 10 min |
| Aggiornamento stato dopo interazioni | Compilazione manuale su Excel | Aggiornamento integrato post-call/email | ~30 min/sett → 5 min |
| Preparazione check per call/meeting | Risfogliare email, appunti, cronistoria | Sally: "Riassumimi lo storico con Kering" | ~20 min/sett → 5 min |

| Risorsa | Risparmio/sett | Ore/anno (×48) | Costo/h | Risparmio |
|---|---|---|---|---|
| 7 Manager Gruppo B | 1,25h/sett ciascuno | 420h totali | €34 | €14.280 |

**Totale Area 3: 736h → €22.844/anno**

---

## AREA 4: RICEZIONE TASK DA MINUTES E NOTIFICHE (Gruppo B)

### Situazione attuale
I 7 Manager che gestiscono clienti e lead caldi oggi ricevono action item dalle call via email o a voce. Devono ricordare autonomamente cosa fare, quando richiamare, cosa mandare. Le azioni "cadono" tra una call e l'altra.

### Con LeadMe
Minutes estrae i task dalla call e li pusha su LeadMe. Il commerciale riceve ogni mattina un recap da Sally: "Oggi devi: richiamare Kering, mandare presentazione a Pirelli, follow-up BMW." Alert in-app + email.

### Calcolo risparmio

| Voce | Calcolo | Ore/anno | Costo/h | Risparmio |
|---|---|---|---|---|
| 7 Manager: tempo di organizzazione giornaliera | 15 min/giorno × 220 giorni × 7 persone → da 15 a 5 min | 257h | €34 | €8.738 |

**Totale Area 4: 257h → €8.738/anno**

---

## AREA 5: SCRAPER PROATTIVO (Gruppo A — beneficio in accelerazione)

### Situazione attuale
I ricercatori attivi passano tempo a navigare manualmente Sales Navigator per trovare nuovi profili interessanti. Questo "browsing time" è già parzialmente incluso nei 17,5 min/profilo, ma c'è un costo aggiuntivo per la ricerca iniziale: impostare filtri, scorrere risultati, decidere chi vale la pena approfondire.

### Con LeadMe
Lo scraper proattivo esegue ricerche giornaliere automatiche su LinkedIn in base a criteri pre-configurati. Ogni mattina il commerciale trova una lista di lead suggeriti, già pre-qualificati dall'AI. Non deve più navigare manualmente.

### Calcolo risparmio

| Risorsa | Browsing attuale ³ | Con scraper | Risparmio/sett | Ore/anno | Costo/h | Risparmio |
|---|---|---|---|---|---|---|
| Simona + Analyst 2 | 1,5h/sett ciascuno | 10 min | 2,7h (×2) | 256h | €24 | €6.144 |
| Analyst 3 + Manager (35%) | 0,5h/sett ciascuno | 5 min | 0,8h (×2) | 77h | €29 ⁴ | €2.233 |

³ Stima: prima di analizzare i 25 profili, Simona deve trovarli. Tempo di browsing su Sales Navigator per setacciare e pre-selezionare: ~1,5h/settimana.

⁴ Media pesata analyst (€24) e manager (€34).

**Totale Area 5: 333h → €8.377/anno**

---

## RIEPILOGO RISPARMIO OPERATIVO

| # | Area di Risparmio | Ore/anno | Risparmio/anno |
|---|---|---|---|
| 1 | Profilazione automatizzata | 710h | €18.810 |
| 2 | Scrittura messaggi AI-assisted | 203h | €5.396 |
| 3 | Eliminazione tracking manuale | 736h | €22.844 |
| 4 | Task da Minutes + notifiche giornaliere | 257h | €8.738 |
| 5 | Scraper proattivo | 333h | €8.377 |
| **TOTALE** | | **2.239h** | **€64.165** |

---

## SCENARI DI ADOZIONE

| Scenario | Tasso di adozione | Risparmio annuale |
|---|---|---|
| **Conservativo** | 70% | **€44.900** |
| **Realistico** | 85% | **€54.500** |
| **Ottimistico** | 100% | **€64.200** |

---

## ACCELERAZIONE COMMERCIALE (benefici di revenue, non solo risparmio)

Oltre al risparmio operativo, LeadMe produce un impatto diretto sulla capacità di generare business. Questi benefici non si traducono in "ore risparmiate" ma in opportunità commerciali aggiuntive.

### A) Aumento della capacità di scouting

| Metrica | Oggi | Con LeadMe | Delta |
|---|---|---|---|
| Profili analizzati/settimana (team completo) ⁵ | ~72 | ~115 ⁶ | **+60%** |
| Lead contattati/settimana | ~24 | ~38 | **+58%** |
| Risposte ricevute/settimana (60%) | ~14 | ~23 | **+64%** |

⁵ Simona 25 + Analyst 2 25 + Analyst 3 9 + Manager 9 + Director 3 = 71 profili/settimana.

⁶ Con il tempo risparmiato sulla profilazione e il tracking, ogni ricercatore può analizzare più profili. Il tempo liberato (~5h/sett per Simona) consente di lavorare ~18 profili aggiuntivi. Applicato proporzionalmente al team.

### B) Riduzione lead persi per mancato follow-up

| Metrica | Calcolo | Impatto stimato |
|---|---|---|
| Lead attivi totali nel team | ~700-800 (290 Simona × 2,5 ricercatori equivalenti + lead Gruppo B) | — |
| % lead persi oggi per follow-up dimenticato ⁷ | 5-10% | 35-80 lead/anno |
| Tasso conversione lead → commessa Noloop ⁸ | ~3-5% | — |
| Commesse potenzialmente perse/anno | 1-4 | — |
| Valore medio commessa Noloop | ~€210K (€55M / 260 COM) | — |
| **Revenue a rischio recuperabile** | | **€210K - €840K/anno** |

⁷ Simona: "Con questi volumi, il processo diventa complesso se non c'è metodo." Con 290 lead, anche un 5% di follow-up dimenticati = 15 lead persi per persona.

⁸ Stima conservativa. Da 290 lead Simona, in un anno non tutte si convertiranno. Il 3-5% è un benchmark ragionevole per B2B events.

### C) Time-to-first-contact ridotto

| Metrica | Oggi | Con LeadMe |
|---|---|---|
| Dalla scoperta del lead al primo contatto | 2-3 giorni (analisi + composizione messaggio) | Stesso giorno (profilo pre-analizzato, messaggio suggerito) |
| **Impatto** | Nel B2B eventi, chi contatta prima ha un vantaggio competitivo. Un lead che riceve un messaggio personalizzato entro 24h dalla discovery ha una probabilità di risposta significativamente più alta. |

### D) Intelligence competitiva continua

Lo scraper monitora cambi di ruolo e azienda automaticamente. Simona: "segnando manualmente tutte le date e le interazioni." Sally: alert su cambi di ruolo → vacancy scoperte → opportunità di ricontatto.

| Metrica | Calcolo | Impatto |
|---|---|---|
| Cambi di ruolo rilevati/anno ⁹ | ~10-15% di 800 lead = 80-120 | — |
| Di cui rilevanti commercialmente | ~30% = 24-36 | Nuove opportunità che oggi vengono scoperte in ritardo o mai |

⁹ Benchmark LinkedIn: circa il 10-15% dei profili cambia ruolo ogni anno.

---

## COMPOSIZIONE DEL RISPARMIO PER PROFILO

| Profilo | Persone | Ore liberate/anno | Valore | % sul totale |
|---|---|---|---|---|
| Analyst (Simona e colleghi) | 3 | 1.347h | €32.480 | 51% |
| Manager (ricerca + relazioni) | 8 | 813h | €27.316 | 42% |
| Director | 1 | 59h | €4.369 | 7% |

---

## SINTESI PER LA SLIDE

| Dimensione | Valore |
|---|---|
| **Risparmio operativo (scenario realistico)** | **€54.500/anno** |
| **Ore liberate** | **~2.240h/anno (~1,3 FTE)** |
| **Capacità scouting aggiuntiva** | **+60% profili analizzati/settimana** |
| **Revenue a rischio recuperabile** | **€210K - €840K/anno** (da follow-up persi) |
| **Time-to-first-contact** | **Da 2-3 giorni a stesso giorno** |

---

## NOTE METODOLOGICHE

- I volumi per Analyst 2 sono ipotizzati pari a Simona. Per Analyst 3 e Manager Gruppo A: 35% del volume Simona. Per Director: 12%.
- I 7 Manager Gruppo B hanno un beneficio concentrato sul tracking (1,25h/sett) e sull'organizzazione quotidiana (10 min/giorno). Non fanno scouting.
- Il range di revenue a rischio (€210K-€840K) è indicativo e dipende fortemente dal tasso di conversione lead-commessa, che andrebbe validato con dati storici Noloop.
- Il valore medio commessa (€210K) è calcolato come €55M fatturato / 260 COM. Questo è un dato medio che include commesse molto grandi e piccole.
- Non sono considerati i costi di licenza Sales Navigator, che restano invariati.
