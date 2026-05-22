---
type: audit
status: draft
priority: p1
client: Achipont
created: 2026-05-21
updated: 2026-05-21
projects: [Achipoint]
stakeholders: [Carlo Sanvoisin, Luigi (Achipont)]
meeting_context: 2026-05-21 — Audit pre-invio indipendente sui 3 file 15-5-26 (Proposta Investimento, Business Case, Requirement Log)
---

# 🔍 Audit pre-invio Achipont 15-5-26 — Report PASS/FAIL

> Audit meticoloso indipendente richiesto da Carlo prima dell'invio a Luigi (Achipont) dei 3 deliverable 15-5-26. Procedura eseguita: lettura integrale CLAUDE.md → Master Facts Sheet §Achipont e §Regola pricing → scheda [[Achipoint]] → 3 file 15-5-26 (`HeyAI_Achipont_Proposta_Investimento_15-5-26.docx`, `HeyAI_Achipont_BusinessCase_15-5-26.docx`, `Achipont_RequirementLog_15-5-26.xlsx`) → questionario Discovery compilato dal cliente → verifica camerale online → ricalcolo numerico cross-file da zero.

## ⚠️ Verdetto sintetico

**NON INVIARE** allo stato attuale. Esistono **2 fail bloccanti** (entrambi nel Requirement Log) + **1 incoerenza numerica interna al Business Case** + **1 data sbagliata sulla cover BC**. Tutti fixabili con interventi chirurgici sui due file `*_15-5-26`. Margini fornitore, dati legali, struttura contrattuale, P.IVA/CCIAA, pricing tornano tutti.

## 1. PASS/FAIL — voce per voce

### 1.1 Coerenza dati legali HeyAI (header/footer)

| Voce | Doc | Valore atteso (Master Facts) | Valore effettivo | Esito |
|---|---|---|---|---|
| Ragione sociale | Proposta+BC | HeyAI S.r.l. | HeyAI S.r.l. | ✅ |
| Sede | Proposta+BC | Via Parigi 11, 00185 Roma (RM) | Via Parigi 11, 00185 Roma (RM) | ✅ |
| Email | Proposta+BC | info@heyaidigital.it | info@heyaidigital.it | ✅ |
| Sito | Proposta+BC | www.heyaidigital.it | www.heyaidigital.it | ✅ |
| PEC | Proposta+BC | heyai@pec.it | heyai@pec.it | ✅ |
| REA | Proposta+BC | RM – 1751505 | RM – 1751505 | ✅ |
| CF | Proposta+BC | 17947791004 | 17947791004 | ✅ |
| Amministratore Unico (footer) | Proposta+BC | Ing. Bruno Mattucci | Ing. Bruno Mattucci | ✅ — è dato societario di carta intestata, non firma contrattuale. Coerente con prassi degli altri deliverable HeyAI (cfr. Reference Proposta Futuritaly). Mantenere |

### 1.2 Coerenza dati Achipont — verifica camerale

| Voce | Fonte audit | Doc Achipont | Esito |
|---|---|---|---|
| Ragione sociale | CCIAA: ACHIPONT S.R.L. | Achipont S.r.l. (BC + RL) | ✅ |
| Sede legale | CCIAA: Via della Magliana 1090, 00148 Roma | NON citata nei doc (OK proposta, non contratto) | ✅ non blocca |
| P.IVA / CF | CCIAA: 05748201000 / 05748201000 | NON citata nei doc | ✅ non blocca |
| REA | CCIAA: RM 917986 | NON citato | ✅ non blocca |
| Anno costituzione | CCIAA: 04/05/1999 — Master vault: 7/4/1999 | Proposta: "attiva dal 1999" (solo anno) | ✅ doc OK |
| Dipendenti | CCIAA 2022: 16-19 — Questionario cliente 2026: 12 | Proposta §8.2: "12 dipendenti" | ✅ coerente con dichiarazione cliente 2026 (il calo dal 2022 è un fatto del cliente, non un errore HeyAI) |
| Certificazioni | Questionario: ISO 45001, 14001, SA8000, mod. 231, White List, Anagrafe Esecutori, Albo Gestori Ambientali, Patente a Crediti | Proposta §8.2: tutte e 7 citate | ✅ |
| Regioni | Questionario: Lazio + Abruzzo + Marche + Toscana + Emilia Romagna | Proposta §2 e BC §3.1: stessa lista | ✅ |
| Margini per categoria | Questionario 5.1: 20-30% / 20% / 10-20% / 20-30% | Proposta §2.2 + BC §3.2: stessi | ✅ |
| Margine ponderato | Calcolato HeyAI: 21% | Proposta §2.2 e BC: 21% | ✅ |
| Iscrizione 17 portali | Questionario tabella 2.1: 17 portali | Proposta §2 e §4.1: 17 (10 pubblici + 3 parziali + 4 fuori scope) | ✅ math 10+3+4=17 e mappa puntuale OK |

> **Nota meta vault** (non blocca invio): la scheda [[Achipoint]] riga 26 e [[_Achipont]] riportano "fondata 7/4/1999" mentre CCIAA dichiara "04/05/1999". Errore della scheda vault, non del doc cliente. Da correggere a parte.

### 1.3 Coerenza pricing cross-file

| Voce | Proposta §8.1 | BC §4 | Esito |
|---|---|---|---|
| Investimento di riferimento BC | Pacchetto Completo €50K | €50.000 | ✅ |
| Saving Pacchetto Completo vs Essenziale+2 opz | €4.000 | n/a (BC parla solo del €50K) | ✅ math: €43K + €8K + €3K = €54K vs €50K |
| Sconto commerciale dedicato | -€5.000 | non rilevante | ✅ |

> **Attenzione strategica** (non bloccante): il BC è costruito sul prezzo Completo €50K. Se Luigi sceglie Essenziale €43K, il payback migliora (€43K/€48.200 = ~11 mesi anziché ~12). Va benissimo come svantaggio simmetrico — ma in call dirlo subito: "il payback BC è worst case rispetto al perimetro reale che sceglierete".

### 1.4 Regola pricing HeyAI — costo fornitore ≤60% MAX

Decisione fornitore Carlo 15/5: **Soolutions** (€10K MVP + €5.6K opzionali = €15.6K totali).

| Scope | Costo fornitore | Prezzo cliente | % | Verdetto |
|---|---|---|---|---|
| Essenziale (post-sconto) | €10.000 | €43.000 | **23,3%** | ✅ ottimo (<40% target sano) |
| Completo (post-sconto) | €15.600 | €50.000 | **31,2%** | ✅ ottimo |
| Essenziale (listino) | €10.000 | €48.000 | 20,8% | ✅ |
| Completo (listino) | €15.600 | €55.000 | 28,4% | ✅ |
| Solo 2 opzionali stand-alone | €5.600 | €11.000 | **50,9%** | ⚠️ accettabile (>45% sweet spot, <60% bloccante) — flag operativo: se Luigi prende solo Essenziale + 1 sola opzionale, il margine sulla singola opzionale si avvicina al 50%. Sotto soglia bloccante, ma da monitorare se vende molti add-on stand-alone in futuro |

**Esito complessivo: ✅ PASS regola % 60% MAX su tutto il perimetro.**

### 1.5 Coerenza numerica interna Business Case

**Math verificata cella per cella (ricalcolo da zero):**

| Calcolo | Atteso | BC dice | Esito |
|---|---|---|---|
| Cost avoidance (€17.500 RAL + 11,31% INPS + RAL/13,5 TFR + 3,5% INAIL + €1.605 Cassa Edile) | €22.993 | €23.000 | ✅ rounding OK |
| Scenario base §3.3 — 4 aggiud × €30K × 21% | €25.200 | €25.200 | ✅ |
| Scenario base totale = €23K + €25.2K | €48.200 | €48.200 | ✅ |
| Beneficio cumulato 3 anni base | €144.600 | "oltre €144.000" | ✅ |
| ROI 3 anni Cons / Base / Ott = (cumul−€50K)/€50K | 119% / 189% / 231% | 119% / 189% / 231% | ✅ |
| Cost avoidance da sola: €50K/€23K | 26,1 mesi | "circa 26 mesi" | ✅ |
| Payback Conservativo: €50K/€36.5K | 16,4 mesi | "~16 mesi" / "entro il sedicesimo" | ✅ |
| Sensitivity §5.1 importo medio €30K base | margine €22.700, payback 13,1 mesi | €22.700, "~13 mesi" | ✅ math interna |
| Sensitivity §5.2 tasso 15% base | margine €22.700, payback 13,1 mesi | €22.700, "~13 mesi" | ✅ math interna |

**MA — 🚨 discrepanza metodologica intra-documento** (sezione 2 sotto).

## 2. ❌ FAIL bloccanti (4)

### FAIL #1 — Requirement Log RNF5 cita per nome il cliente Futuritaly

**File**: `Achipont_RequirementLog_15-5-26.xlsx`, sheet "Requirement Log Achipont", riga R65.

**Testo attuale**:
> RNF5 | NF | **Coerenza architetturale con Osservatorio AI Futuritaly** | I componenti comuni (ingestion BDNCP, motore di scoring, configurabilità del profilo cliente) sono progettati per essere condivisi tra Achipont e **l'Osservatorio AI Futuritaly**. Separazione dei dati e delle istanze applicative tra i due clienti garantita.

**Perché è bloccante**:
1. Espone direttamente un altro cliente HeyAI per nome ("Futuritaly") in un documento contrattuale Achipont — violazione policy CLAUDE.md §2.1 (mai citare per nome fornitori HeyAI) per analogia rovesciata sui clienti.
2. **Contraddice la Proposta §7**, che dichiara "L'istanza applicativa di Achipont è single-tenant: dati di profilo, configurazione di scoring, scoring di compatibilità e storico bandi sono isolati e accessibili soltanto agli utenti autorizzati di Achipont". Se ci sono "componenti condivisi tra Achipont e Osservatorio AI Futuritaly", la promessa single-tenant è incrinata in fase di analisi del Requirement Log da parte dell'avvocato Achipont.
3. Espone potenzialmente HeyAI nei confronti di Futuritaly stessa (Futuritaly non sa di essere citata in un doc Achipont; se Achipont lo gira al proprio architetto/consulente, esce dal perimetro autorizzato).
4. Lo stesso fix era già stato applicato nella Proposta §7 al passaggio v3 → v4 ("§7 IP riformulato: tolto riferimento 'secondo progetto HeyAI nel medesimo dominio (osservatorio bandi)'") ma NON propagato al Requirement Log. Refactoring di propagazione incompleto — pattern §15.7 CLAUDE.md.

**Fix proposto** (riformulazione RNF5):
> RNF5 | NF | Architettura modulare e portabile | I componenti core (ingestion dati, motore di scoring, configurabilità del profilo aziendale) sono sviluppati secondo principi di modularità e riutilizzabilità, facilitando manutenzione e evoluzione. L'istanza Achipont è single-tenant: dati di profilo, configurazioni di scoring e storico bandi sono isolati e accessibili soltanto agli utenti autorizzati Achipont. | INCLUSO MVP | Vincolo di coerenza architetturale con la metodologia HeyAI.

### FAIL #2 — Requirement Log EXC3 cita per nome il cliente NoLoop

**File**: `Achipont_RequirementLog_15-5-26.xlsx`, riga R69, colonna Note.

**Testo attuale**:
> EXC3 | Esclusione | Manutenzione portali proprietari (Fase 2) | [...] | FUORI SCOPE | **Coerente con Art. 3.8 stile NoLoop**.

**Perché è bloccante**: identico al #1, dimensione ridotta. Il cliente vede "stile NoLoop" e capisce che è una nota interna sfuggita al copy-paste. Anche se non c'è impatto IP, fa figura amatoriale e dichiara che il template è cliente-derivato.

**Fix proposto**: sostituire nota EXC3 con `Coerente con prassi contrattuale HeyAI per integrazioni proprietarie.` oppure svuotare il campo Note.

### FAIL #3 — Business Case: "scenario base" produce due numeri diversi in due sezioni

**File**: `HeyAI_Achipont_BusinessCase_15-5-26.docx`.

**Discrepanza**:

| Sezione BC | Aggiudicazioni base | Revenue uplift base | Beneficio totale base | Payback base |
|---|---|---|---|---|
| §3.3 "Calcolo a imbuto" | **4** (arrotondato da 3,6) | **€25.200** | n/a | n/a |
| §4 "Sintesi ROI" | n/a | **€25.200** (ereditato §3.3) | **€48.200** | **~12 mesi** |
| §4.1 "Lettura del risultato" | n/a | n/a | n/a | **~12 mesi** + "26 mesi cost avoidance da sola" |
| §5.1 sensitivity (€30K base) | **3,6 frazionario** | **€22.700** | €45.700 | **~13 mesi** |
| §5.2 sensitivity (15% base) | **3,6 frazionario** | **€22.700** | €45.700 | **~13 mesi** |

**Math: entrambe le sezioni sono internamente corrette ma usano arrotondamenti diversi.** §3.3 arrotonda 3,6 → 4 aggiudicazioni intere ("aggiudicazioni stimate"). §5 lascia 3,6 frazionarie nei calcoli di margine. Risultato: lo "scenario base" cambia identità tra le due sezioni del medesimo documento.

**Perché è bloccante**: Donzelli-mood. Un cliente che apre il BC, legge in §4 "payback ~12 mesi" e poi in §5 "scenario base payback ~13 mesi" perde fiducia. È esattamente il pattern "math errors = bocciatura cliente" del Master Facts.

**Fix proposto** — scegliere UNA metodologia e riallineare. Opzioni:

- **Opzione A (raccomandata): tenere arrotondamento intero anche in §5.** Più semplice da spiegare ("4 aggiudicazioni l'anno"). Ricalcolare le 10 celle di §5.1 + §5.2:
  - §5.1 €20K base: 3,6→4 × €20K × 21% = €16.800 → ben tot €39.800 → payback 15,1 mesi → ~15
  - §5.1 €25K base: 4 × €25K × 21% = €21.000 → ben tot €44.000 → 13,6 → ~14
  - §5.1 €30K base: 4 × €30K × 21% = €25.200 → ben tot €48.200 → 12,4 → ~12 ✅ (allineato)
  - §5.1 €35K base: 4 × €35K × 21% = €29.400 → ben tot €52.400 → 11,5 → ~12
  - §5.1 €40K base: 4 × €40K × 21% = €33.600 → ben tot €56.600 → 10,6 → ~11
  - §5.2 8%: 2 × €30K × 21% = €12.600 → ben tot €35.600 → 16,9 → ~17
  - §5.2 12%: 3 × €30K × 21% = €18.900 → ben tot €41.900 → 14,3 → ~14
  - §5.2 15%: 4 × €30K × 21% = €25.200 → ben tot €48.200 → 12,4 → ~12 ✅
  - §5.2 18%: 4 × €30K × 21% = €25.200 → ben tot €48.200 → 12,4 → ~12 (problema: scenario 18% identico a 15% per arrotondamento — perde discriminazione)
  - §5.2 25%: 6 × €30K × 21% = €37.800 → ben tot €60.800 → 9,9 → ~10

- **Opzione B: tenere frazionario anche in §3.3 — più granulare.** Cambia §3.3 base da €25.200 a €22.680 → conservativo €12.960 → ottimistico €34.776. Si perde la prosa "4 aggiudicazioni stimate" (diventa "3,6"), che però è il vero significato statistico (numero atteso).

- **Opzione C (più radicale): aggiungere disclaimer metodologico in §3.3** "Aggiudicazioni stimate arrotondate per leggibilità; i valori effettivi della sensitivity (§5) usano il dato frazionario per granularità". Non risolve la figura, copre la coerenza.

**Mia raccomandazione: Opzione A.** È quella che ricostruisce la coerenza del numero senza alterare la promessa "12 mesi base". Lascia §5.2 18% e 15% identici a ~12 mesi (perdita di granularità nella sensitivity 18%) ma è onesto: con 4 aggiudicazioni a parità di importo, il payback non cambia.

### FAIL #4 — Business Case: data cover "Aprile 2026" sbagliata

**File**: `HeyAI_Achipont_BusinessCase_15-5-26.docx`, paragrafo §4 cover.

**Testo attuale**: `Aprile 2026 — Documento riservato`.

**Atteso**: `Maggio 2026 — Documento riservato`. Il file è del 15/5/2026, la Proposta correlata cita "Maggio 2026" in cover.

**Perché è bloccante**: incoerenza di data tra Proposta (Maggio 2026) e BC (Aprile 2026) allegato. Cliente nota.

**Fix proposto**: sostituire "Aprile" con "Maggio".

## 3. ⚠️ Punti di attenzione non bloccanti (5)

### #1 — Apprendista RAL €17.500 vs €13.200-€14.400 dichiarato cliente

Il cliente nel questionario §5.2 dichiara apprendista "€1.100-€1.200/mese", che corrisponde a una RAL annua di €13.200-€14.400 (× 12 mensilità) o massimo €15.600 (× 13). Il BC §2.1 dichiara €17.500 RAL, motivata come "benchmark CCNL Edilizia Industria primo livello".

Discrepanza: +€3.100 / +€4.300 sulla RAL → impatto sul cost avoidance complessivo.

Se Luigi va a riguardare il suo questionario lo vede. Risposta possibile difensiva HeyAI: "il €1.100-1.200/mese è una stima sommaria, il CCNL Edilizia Industria primo livello a regime nel 2025 prevede paga base più indennità territoriale di Roma vicino al €1.450/mese × 12 = €17.400 RAL".

**Opzioni**:
- A — Rettificare a €14.500 RAL prudenziale → costo aziendale scende a ~€19.300 → beneficio scenario base €19.3K + €25.2K = €44.5K → payback ~13,5 mesi (vs 12). Peggiora il messaging ma è inattaccabile.
- B — Lasciare €17.500 e aggiungere una nota metodologica esplicita nel BC §2.1: "Il livello salariale apprendista primo livello CCNL Edilizia Industria (tabelle 2025) si colloca tra €1.350 e €1.500/mese di paga base; l'indicazione cliente di €1.100-1.200 corrispondeva a una stima sommaria pre-attualizzazione contrattuale."
- C — Lasciare invariato e rispondere ad-hoc in call se Luigi solleva il punto.

**Raccomandazione: B**, è la più rispettosa del cliente e razionalmente solida.

### #2 — Capacity 24 partecipazioni/anno vs storico 1 partecipazione in 12-24 mesi

Questionario §4.2: "UNA SOLA PARTECIPAZIONE: BANDO PER AZIENDA OSPEDALIERA SAN GIOVANNI ADDOLORATA".
Questionario §4.3: "NON C'È UN NUMERO MASSIMO... POSSIAMO SEGUIRE ANCHE 30 STATI DI AVANZAMENTO LAVORI" (ma SAL ≠ bandi).

BC §3.2 assume 24 partecipazioni/anno come "vincolo operativo strutturale".

Gap di ordine di grandezza (24x-48x vs storico). Coerente con la logica BC ("lo strumento abilita una nuova capacità che oggi non c'è"), ma se Luigi lo legge in modo letterale può obiettare. Da difendere in call con il razionale "lo strumento vi dà la pipeline che oggi non avete; 24/anno = 2/mese, sostenibile con la struttura attuale per la fase di raccolta gara, escluso il modulo D Fase 2".

Non fix prima dell'invio, ma preparare la risposta.

### #3 — Importo medio commessa €30K (scenario base) non dichiarato dal cliente

Il questionario non chiede l'importo medio. È stima HeyAI. La sensitivity §5.1 copre il range €20K-€40K, quindi il rischio è coperto. In call: "il €30K è la nostra stima di scenario base; testate la sensitivity per vedere come cambia il payback con il vostro importo medio reale."

Non fix.

### #4 — SLA "24 ore dalla pubblicazione sulla fonte ufficiale" (§11.3)

Proposta §11.3: `Aggiornamento dei dati: giornaliero, con visibilità nuove opportunità entro 24 ore dalla pubblicazione sulla fonte ufficiale.`

Promessa numerica al cliente che dipende dalla freschezza delle API ANAC/BDNCP — fuori dal controllo HeyAI. Se BDNCP ha downtime o ritarda, formalmente HeyAI è in default SLA.

**Mitigation suggerita** (non blocca invio, ma da mettere ora che il refactoring di RNF5 è già sul tavolo): aggiungere nella riga §11.3 un inciso "salvo indisponibilità imprevista della fonte BDNCP/ANAC, per la quale HeyAI applicherà tempestive azioni correttive senza obbligo di SLA su eventi esterni alla propria infrastruttura."

### #5 — La Proposta firmata "vale come ordine"? — §13 prossimi passi

Proposta §13: `L'accettazione avviene tramite restituzione del documento firmato per accettazione, alla quale segue la formalizzazione del contratto e l'apertura della Fase 0 (kick-off).`

Rischio civilistico minore (art. 1326 c.c.): in linea teorica una proposta firmata per accettazione è già un contratto perfetto in diritto italiano se contiene gli elementi essenziali (oggetto, prezzo, tempi). Manca disciplina su recesso, foro competente, riservatezza, penali, durata garanzia.

**Mitigation suggerita** (non bloccante, ma utile per protezione): aggiungere subito sotto §13 una nota:

> *La presente proposta costituisce un'intesa preliminare commerciale tra le parti. Il rapporto contrattuale operativo sarà disciplinato dal contratto di servizio HeyAI/ACH/2026-001, che le parti sottoscriveranno entro 15 giorni lavorativi dall'accettazione della presente proposta. In caso di mancata sottoscrizione del contratto entro tale termine, la presente proposta decade salvo proroga scritta.*

Protegge HeyAI da letture aggressive del cliente. Da concordare con avv. Longo se la usate o se aprite il contratto di servizio separatamente.

## 4. Cose verificate e PASSED che è bene sapere

- ✅ Zero menzioni per nome di Soolutions / Federico / Simone / Silencio / Aegiscore / Jakala / Pasquali / Spike Reply / Tokio Studio in tutti e 3 i deliverable. Il refactoring "team di sviluppo" è rispettato.
- ✅ Mapping 17 portali questionario → §4.1 Proposta puntuale (10+3+4 = 17).
- ✅ Margini per categoria (questionario §5.1) → Proposta §2.2 e BC §3.2 identici.
- ✅ Cifra €23K cost avoidance somma matematica perfetta (€22.993 arrotondato).
- ✅ ROI 3 anni 119/189/231% — math verificata cella per cella.
- ✅ €144K beneficio cumulato 3 anni base = €48.2K × 3.
- ✅ Saving Pacchetto Completo €4K: €43K + €8K + €3K = €54K vs €50K. Corretto.
- ✅ Regola pricing 60% MAX rispettata su tutti gli scope (Essenziale 23,3% / Completo 31,2% / opzionali stand-alone 50,9%).
- ✅ Costituzione 1999, dipendenti 12, certificazioni 7 → tutti dati cliente verificati.
- ✅ P.IVA Achipont coerente con CCIAA (05748201000), sede Via della Magliana 1090, ATECO 41.2 (costruzione edifici).
- ✅ Single-tenant promessa Proposta §7 — coerente con scheda vault e Master Facts.
- ✅ Pagamenti 40/30/30 standard HeyAI per Wave 1/2/Eye Cookies.
- ✅ 12 settimane piano MVP = 2+3+4+3 settimane per fase.

## 5. Checklist fix obbligatori pre-invio

Ordine consigliato (top-down per impatto):

- [ ] **FAIL #1** — Riscrivere RNF5 nel Requirement Log eliminando "Osservatorio AI Futuritaly" da nome requisito + descrizione (testo sostitutivo fornito in §2 #1)
- [ ] **FAIL #2** — Riscrivere nota EXC3 nel Requirement Log eliminando "stile NoLoop" (testo sostitutivo fornito in §2 #2)
- [ ] **FAIL #3** — Ricalcolare §5.1 e §5.2 BC con metodologia aggiudicazioni intere arrotondate (Opzione A raccomandata) per allineare con §3.3+§4 — 10 celle da aggiornare
- [ ] **FAIL #4** — Sostituire "Aprile 2026" → "Maggio 2026" nella cover BC
- [ ] _(opzionale)_ Aggiungere nota metodologica §2.1 BC sul livello salariale apprendista (Punto attenzione #1, Opzione B)
- [ ] _(opzionale)_ Aggiungere clausola SLA fornte BDNCP §11.3 Proposta (Punto attenzione #4)
- [ ] _(opzionale)_ Aggiungere disclaimer §13 Proposta su intesa preliminare vs contratto (Punto attenzione #5)
- [ ] **Verifica post-fix** — rieseguire l'audit grep nomi clienti su tutti e 3 i file (Soolutions/Silencio/Jakala/Aegiscore/Federico/Simone/NoLoop/Futuritaly/Osservatorio/Achipoint)
- [ ] **Verifica post-fix** — ricalcolo numerico interno BC dopo il fix #3
- [ ] **Cascata §10bis CLAUDE.md** — aggiornare scheda [[Achipoint]] con la versione "16-5-26" o "21-5-26" dei file post-fix (decisione naming a Carlo)

## 6. Apertura per Carlo

Prima di fixare nulla in autonomia, due decisioni che richiedono il tuo input (regola CLAUDE.md §15 sui numeri divergenti):

1. **Sul FAIL #3** (discrepanza §3.3 vs §5 BC): preferisci **Opzione A** (aggiudicazioni intere ovunque, perde granularità 18% sensitivity ma è semplice) o **Opzione B** (aggiudicazioni frazionarie ovunque, granularità ma "3,6 aggiudicazioni" suona meno netto)?
2. **Sul punto attenzione #1** (RAL apprendista €17.500 vs €13.200-14.400 cliente): rettifichi a €14.500 (peggiora payback) o aggiungi nota metodologica difensiva (Opzione B raccomandata) o lasci e gestisci in call (Opzione C)?

Le 4 voci bloccanti (RNF5, EXC3, scenario base BC, data cover BC) le applico io appena confermi.

## 7. Riferimenti

- [[Achipoint]] — scheda progetto
- [[_Achipont]] — scheda cliente overview
- [[Master Facts Sheet]] §Achipont · §Regola pricing HeyAI
- File proposta: [HeyAI_Achipont_Proposta_Investimento_15-5-26.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/HeyAI_Achipont_Proposta_Investimento_15-5-26.docx)
- File BC: [HeyAI_Achipont_BusinessCase_15-5-26.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/HeyAI_Achipont_BusinessCase_15-5-26.docx)
- File RL: [Achipont_RequirementLog_15-5-26.xlsx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/Achipont_RequirementLog_15-5-26.xlsx)
- Questionario Discovery: [HeyAI_Achipont_Questionario_Discovery_def.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Achipont/HeyAI_Achipont_Questionario_Discovery_def.docx)
- Visura camerale online: https://www.ufficiocamerale.it/1761/achipont-srl

---

*Audit eseguito da Cowork session il 2026-05-21 mattina. Nessun fix applicato — attesa decisione Carlo su FAIL #3 (Opzione A/B) e Punto attenzione #1 (RAL apprendista). Le altre 3 voci bloccanti (RNF5, EXC3, data cover BC) sono fixabili senza decisione strategica e procedo appena conferma.*
