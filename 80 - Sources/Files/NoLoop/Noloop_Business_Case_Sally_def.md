# BUSINESS CASE — SALLY (Agente AI Standalone)
## Noloop Wave 2

**v2 — Aggiornato post analisi procedure operative e organigramma**

---

# Executive Summary

Sally è l'agente AI trasversale dell'ecosistema Noloop Wave 2. Questo business case quantifica esclusivamente il valore di Sally come **strumento standalone**: knowledge base aziendale con procedure operative reali, compilazione documenti, creazione/aggiornamento policy, supporto onboarding e conversione di input non strutturati (email, audio, foto scontrini) in azioni su altri sistemi.

**Sono esclusi** da questo business case tutti i casi d'uso in cui Sally opera come componente integrata di altri moduli (reportistica NLP su Link, formalizzazione task su Flow, estrazione scadenze contrattuali su Flow, scrittura messaggi su LeadMe, alert automatici, trascrizione Minutes), già quantificati nei rispettivi business case.

**Risparmio annuo stimato (scenario realistico 85%):** €83.200
**Ore liberate:** 2.391 ore/anno
**FTE equivalenti:** 1,4
**Cost avoidance licenze AI:** €8.700/anno (addizionale, scenario 50 utenti)

---

# Contesto: lo stato attuale

## La conoscenza è nella testa di pochi

Noloop dispone di un archivio documentale strutturato (~2.000-3.000 file) organizzato da Marco Merli (Responsabile ESG): procedure di sistema, policy (ambientale, sicurezza, privacy), moduli, certificazioni (ISO 27.000, EcoVadis), dati societari, organigramma, dati bancari, bilanci, autocertificazioni, DURC e documentazione fornitori.

Il problema non è l'assenza di documentazione, ma il fatto che **quasi nessuno la consulta direttamente**. I dipendenti preferiscono chiedere a Marco, a Calajò o ai colleghi, generando un collo di bottiglia umano:

- **Marco Merli** spende 5-10 ore/settimana rispondendo a domande dei colleghi su procedure, modulistica e documentazione
- **Roberta Calajò** (Resp. Controllo) riceve 120 email procedurali/settimana da operativi che non sanno dove trovare le informazioni o non distinguono una fattura da una ricevuta
- **I richiedenti** perdono tempo aspettando risposte o cercando tra migliaia di file in cartelle annidate

L'analisi delle procedure operative ufficiali Noloop conferma la complessità che genera queste domande. Solo per le richieste di pagamento, esistono 3 casistiche diverse di ritenuta per tipo fornitore (prestatori occasionali senza P.IVA, regime forfettario, soggetti a cassa INPS), con campi da compilare diversamente in ciascun caso. La procedura Revolut ha regole precise su giustificativi (48h), limiti (€500), sintassi codice commessa (AAXNNNNN come primo dato nella descrizione), e aliquota fiscale (solo "ATTESA FATTURA" o "NON FATTURABILE"). Le fatture estere devono essere depositate in una cartella di rete specifica (`\\172.16.0.121\Documi\downloads\CONS\pdf`) con naming "NOME OPERATORE_COMMESSA", e le proforma non sono documenti fiscali — solo la fattura finale lo è.

Queste complessità procedurali sono la fonte diretta delle 120 email/settimana a Calajò.

## Compilazione documenti: manuale e ripetitiva

Marco e Davide (DPO/RSPP) gestiscono ~80 portali fornitori (Jaggaer, Ariba e simili). Ogni scadenza documentale (DURC ogni 6 mesi, visure, certificazioni) va ricaricata su tutti i portali. La compilazione di autocertificazioni, dichiarazioni di idoneità tecnico-professionale, DUVRI e altri form richiede dati già presenti nella KB aziendale ma copiati manualmente ogni volta.

Il team sicurezza esterno compila costantemente DUVRI, POS e piani di emergenza, aggregando documenti da più fornitori. Tempo complessivo stimato: 5-10 ore/settimana tra tutti gli attori coinvolti.

## Policy e procedure: un uomo solo al comando

Marco è l'unico a conoscere le interconnessioni tra documenti: una policy ambientale è legata alla policy rifiuti, ai KPI, a moduli specifici e a procedure operative. Aggiornare un documento richiede di verificare la coerenza con tutto il sistema. Se Marco non è disponibile, nessuno è in grado di farlo.

## Licenze AI: costose e mal gestite

Noloop utilizza account ChatGPT condivisi con problemi di privacy (cronologia condivisa, necessità di cancellare memorie), limiti tecnici (la chat nascosta non accetta upload) e costi per utente che impediscono di dare accesso a tutta l'azienda. L'azienda vorrebbe democratizzare l'accesso all'AI ma non può sostenere €20/utente/mese per 150 persone.

---

# Perimetro Sally standalone vs. Sally integrata

| Caso d'uso | Dove è contato | In questo BC? |
|---|---|---|
| Q&A su documentazione/procedure aziendali | **Sally standalone** | ✅ |
| Compilazione documenti e form | **Sally standalone** | ✅ |
| Creazione/aggiornamento policy e procedure | **Sally standalone** | ✅ |
| Supporto onboarding nuovi assunti | **Sally standalone** | ✅ |
| Email → task su Flow / aggiornamento LeadMe | **Sally standalone** | ✅ |
| Audio note / foto scontrino → azione strutturata | **Sally standalone** | ✅ |
| Sostituzione licenze ChatGPT (AI generica) | **Sally standalone** | ✅ |
| Reportistica NLP su Link/Progress | BC Link | ❌ |
| Formalizzazione aggiornamenti mobile su Flow | BC Flow | ❌ |
| Estrazione scadenze contrattuali → reminder Flow | BC Flow (Area 4) | ❌ |
| Scrittura messaggi AI-assisted su LeadMe | BC LeadMe | ❌ |
| Alert automatici su scadenze | BC Link / BC Flow | ❌ |
| Estrazione task da call e trascrizione | BC Minutes Evolution | ❌ |
| Ricerca location (Venue Finder integrato) | Già deployato (Wave 1) | ❌ |
| Cross-check Revolut (spese non associate a COM) | Add-on Link (da quotare a parte) | ❌ |

---

# Quantificazione dei risparmi

## Area 1 — Q&A aziendale: lato rispondenti

Le persone che oggi spendono tempo a rispondere a domande dei colleghi su procedure, modulistica e documentazione.

### Marco Merli (Responsabile ESG)

| Parametro | Valore |
|---|---|
| Tempo attuale risposte colleghi | 7,5h/settimana (midpoint 5-10h) |
| Settimane lavorative | 48/anno |
| Quota gestibile da Sally | 70% (domande su procedure, moduli, dati societari — escluse questioni che richiedono giudizio umano) |
| Ore risparmiate | 7,5h × 48 × 70% = **252h/anno** |
| Valore economico | 252h × €35/h = **€8.820/anno** |

### Roberta Calajò (Resp. Controllo)

| Parametro | Valore |
|---|---|
| Email procedurali ricevute | 120/settimana (dato validato) |
| Quota procedurale pura ¹ | 60% (~72 email/settimana) |
| Tempo medio per risposta | 5 minuti |
| Ore attuali su quota procedurale | 72 × 5min = 6h/settimana |
| Riduzione con Sally | 80% (domande standardizzabili) |
| Ore risparmiate | 6h × 48 × 80% = **230h/anno** |
| Valore economico | 230h × €37/h = **€8.510/anno** |

¹ Il 60% procedurale include domande tipo: "come compilo una richiesta di pagamento per un fornitore forfettario?", "dove trovo il template per la fatturazione attiva?", "qual è la procedura per i giustificativi Revolut?", "devo fatturare in 74-ter CEE o IVA ordinaria?", "come deposito una fattura estera nella cartella di rete?". Sally conosce tutte queste procedure nel dettaglio — casistiche ritenute, codici IVA (ART-000004 al ART-000007), regole Revolut (48h, €500, sintassi AAXNNNNN), naming file fatture estere, vincoli apertura commessa. Il restante 40% riguarda richieste operative specifiche (approvazioni, casi particolari BC, autorizzazioni pagamento urgente) che richiedono intervento umano e sono trattate nel BC Link.

### Altri rispondenti occasionali

Segreterie (Meroni, Giordanella, Sarracco, Mistretta, Cuzzocrea), team leader, colleghi senior che rispondono a domande ripetitive.

| Parametro | Valore |
|---|---|
| Persone coinvolte | ~10 |
| Tempo risposte a colleghi | ~45 min/settimana per persona |
| Riduzione con Sally | 50% |
| Ore risparmiate | 10 × 0,375h × 48 × 50% = **90h/anno** |
| Valore economico | 90h × €35/h = **€3.150/anno** |

### Totale Area 1 (rispondenti): 572h/anno — €20.480/anno

---

## Area 2 — Q&A aziendale: lato richiedenti

I dipendenti che oggi perdono tempo cercando informazioni nelle cartelle o aspettando risposte.

### Situazione attuale
Il benchmark McKinsey indica che i knowledge worker spendono il 20% del tempo (1,8h/giorno) cercando informazioni. In Noloop il problema è aggravato da: 2.000-3.000 file in cartelle annidate, nessun motore di ricerca interno, dipendenza da pochi "depositari" della conoscenza. Le procedure operative sono lunghe e dettagliate — la sola procedura richieste di pagamento copre 6 casistiche di ritenuta, la procedura Revolut ha 12 sezioni, la procedura fatture passive ha istruzioni specifiche per Cassetto Fiscale e per deposito in cartella di rete. Marco: "dovrebbero cercarsi la procedura, identificarla tra 1000, leggerla tutta e spesso sono molto lunghe. In alternativa chiedere".

### Calcolo

| Parametro | Valore |
|---|---|
| Dipendenti che cercano regolarmente info procedurale | ~80 (su ~150 totali — esclusi quelli con mansioni puramente esecutive) |
| Tempo attuale di ricerca/attesa per info | 30 min/settimana per persona (stima conservativa vs benchmark McKinsey di 9h/sett) |
| Riduzione con Sally (risposta istantanea) | 60% |
| Ore risparmiate | 80 × 0,3h × 48 × 60% = **691h/anno** |
| Valore economico (blend €35/h) | 691h × €35/h = **€24.185/anno** |

### Giustificazione
30 minuti/settimana è una stima estremamente conservativa (= 6 minuti/giorno). Il benchmark McKinsey parla di 1,8 ore/giorno. La nostra stima è il 5,5% del benchmark, a riflettere il fatto che non tutte le ricerche di informazione riguardano la KB aziendale (molte riguardano info operative, email, ecc. che Sally standalone non copre).

### Totale Area 2 (richiedenti): 691h/anno — €24.185/anno

---

## Area 3 — Compilazione documenti e form

### Situazione attuale
- Marco + Davide (DPO/RSPP) + Roberta + team sicurezza esterno: 5-10h/settimana complessive
- Tipi di documenti: autocertificazioni, DUVRI, POS, dichiarazioni idoneità tecnico-professionale, form portali fornitori (Jaggaer, Ariba), documenti scadenze periodiche (DURC, visure, certificazioni)
- I dati necessari sono quasi sempre gli stessi (dati societari, legale rappresentante Paolo Donzelli, certificazioni attive, DURC vigente) ma vengono copiati manualmente ogni volta

### Calcolo

| Parametro | Valore |
|---|---|
| Ore attuali compilazione | 7,5h/settimana (midpoint) |
| Settimane lavorative | 48/anno |
| Quota automatizzabile da Sally | 55% (form standardizzati con dati noti — esclusi casi con template imposti dal cliente in formato non elaborabile) |
| Ore risparmiate | 7,5h × 48 × 55% = **198h/anno** |
| Valore economico (blend €35/h) | 198h × €35/h = **€6.930/anno** |

### Nota
Marco ha segnalato che i format variano molto (Word, PDF compilabile, PDF immagine, template cliente). Sally sarà efficace sui Word e PDF compilabili; i PDF immagine richiedono OCR con costi computazionali maggiori. La stima del 55% tiene conto di questa variabilità.

### Totale Area 3: 198h/anno — €6.930/anno

---

## Area 4 — Creazione e aggiornamento policy e procedure

### Situazione attuale
- Marco è l'unico a gestire il sistema documentale integrato (policy, procedure, moduli, KPI, registrazioni)
- I documenti sono interconnessi: aggiornarne uno richiede verificare la coerenza con tutti quelli collegati
- Questa conoscenza è nella testa di Marco — rischio di business continuity
- Attività: creazione nuove policy, aggiornamento policy esistenti per cambi normativi, redazione procedure operative, verifica coerenza inter-documentale

### Calcolo

| Parametro | Valore |
|---|---|
| Ore attuali Marco su policy/procedure | ~3h/settimana (stima, su settimane attive — non tutte le settimane) |
| Settimane con attività policy | ~35/anno |
| Riduzione con Sally (bozze, verifica coerenza, aggiornamento automatico) | 40% |
| Ore risparmiate | 3h × 35 × 40% = **42h/anno** |
| Valore economico | 42h × €35/h = **€1.470/anno** |

### Valore qualitativo non quantificato
- **Eliminazione single point of failure:** Oggi se Marco non è disponibile, nessuno può aggiornare il sistema documentale. Sally riduce drasticamente questo rischio.
- **Coerenza garantita:** Sally verifica automaticamente che un aggiornamento non contraddica altre policy o procedure del sistema.
- **Audit readiness:** Per le certificazioni ISO 27.000 ed EcoVadis, avere uno strumento che conosce tutto il sistema e può generare bozze coerenti accelera la preparazione agli audit.

### Totale Area 4: 42h/anno — €1.470/anno

---

## Area 5 — Onboarding nuovi assunti

### Situazione attuale
- ~15 nuovi assunti/anno (turnover significativo, confermato da Marco: "probabilmente ne arriveranno un bel po'")
- Ogni nuovo assunto deve imparare: procedure operative (richieste pagamento, Revolut, fatturazione attiva/passiva, apertura commessa, cash flow), modulistica, struttura organizzativa, policy, strumenti, riferimenti interni
- Oggi: cercare tra migliaia di file, chiedere ai colleghi, apprendere per tentativi
- Nessun portale di onboarding strutturato

### Calcolo

| Parametro | Valore |
|---|---|
| Nuovi assunti/anno | 15 |
| Tempo onboarding procedurale attuale | ~5 giornate (40h) per persona (ricerca info, domande ai colleghi, errori iniziali) |
| Riduzione con Sally | 35% (risposta immediata a domande, guida step-by-step su procedure, organigramma consultabile) |
| Ore risparmiate per nuovo assunto | 40h × 35% = 14h |
| Ore totali risparmiate | 15 × 14h = **210h/anno** |
| Valore economico (blend nuovo assunto €30/h) | 210h × €30/h = **€6.300/anno** |

### Nota
Il risparmio include anche il tempo dei colleghi che oggi formano i nuovi assunti (già parzialmente contato in Area 1). Per evitare doppi conteggi, abbiamo usato un tasso di riduzione conservativo (35% vs il 50% inizialmente ipotizzato). Sally può guidare un nuovo operativo passo-passo nella prima richiesta di pagamento (con le casistiche ritenute corrette per il tipo di fornitore), nella prima gestione Revolut (limiti, giustificativi, sintassi), nella prima fattura estera (cartella di rete, naming, distinzione proforma/finale).

### Totale Area 5: 210h/anno — €6.300/anno

---

## Area 6 — Email-to-action e Audio-to-action

### Descrizione del caso d'uso
Un operativo/PM riceve un'email dal cliente (es. conferma budget, cambio data, richiesta aggiuntiva) o ha un input non strutturato (nota vocale dopo un sopralluogo, foto di uno scontrino, email di un fornitore con conferma economica). Oggi deve:
1. Leggere l'email / ascoltare la nota
2. Decidere quale azione generare (task su Flow? aggiornamento PDP su Link? nota su commessa?)
3. Aprire il sistema destinazione
4. Reinserire manualmente le informazioni rilevanti
5. Tornare all'input originale e archiviarlo

Con Sally: inoltra l'email, invia la nota vocale o la foto → Sally analizza il contenuto, propone l'azione e la destinazione, l'utente conferma con un click.

**Nota di separazione:** Il risparmio qui è sulla *conversione* dell'input non strutturato in azione strutturata. Il risparmio di coordinamento dentro Flow è nel BC Flow. Il risparmio di gestione CRM è nel BC LeadMe. Il risparmio di estrazione scadenze da contratti è nel BC Flow (Area 4). Sally standalone conta il tempo di "traduzione" tra canale non strutturato e sistema strutturato.

### Calcolo

| Parametro | Valore |
|---|---|
| Utenti ² | 28 (PM sotto Stefani: 9 + operativi/segreteria sotto Cavecchi: 13 + producer sotto Cichello: 6) |
| Email/input azionabili per giorno per persona | 2,5 (midpoint 2-3) |
| Tempo oggi per conversione manuale input → azione | 5 min/input (apertura sistema, reinserimento, archiviazione) |
| Tempo con Sally (review + conferma) | 1 min/input |
| Risparmio per input | 4 min |
| Giorni lavorativi | 220/anno |
| Ore risparmiate | 28 × 2,5 × 4min × 220gg / 60 = **1.027h/anno** |
| Valore economico | 1.027h × €35/h = **€35.933/anno** |

² Perimetro allineato all'organigramma: i 28 utenti sono PM, operativi, producer e segreteria operativa — le figure che ricevono quotidianamente input da clienti e fornitori da convertire in azioni sul sistema. Esclusi comunicazione (gestita nel flusso Pitch/brief), biglietteria (task più strutturati, meno email-to-action) e commerciali (il loro flusso email è su LeadMe).

### Sanity check
1.027 ore ÷ 28 persone ÷ 48 settimane = **0,76h/settimana per persona** (~9 minuti/giorno). Per qualcuno che converte 2-3 email al giorno da un canale all'altro, risparmiare 9 minuti è plausibile e conservativo.

### Totale Area 6: 1.027h/anno — €35.933/anno

---

# Cost avoidance: licenze AI

### Situazione attuale
Noloop utilizza account ChatGPT condivisi. Problemi: privacy (cronologia visibile), limiti tecnici, costi non scalabili. L'azienda vorrebbe dare accesso AI a tutti ma non può permettersi €20/utente/mese.

### Scenari di costo evitato

| Scenario | Licenze | Costo annuo evitato |
|---|---|---|
| Copertura minima (30 utenti attivi) | 30 × €20/mese | **€7.200/anno** |
| Copertura media (50 utenti) | 50 × €20/mese | **€12.000/anno** |
| Copertura completa (150 utenti) | 150 × €20/mese | **€36.000/anno** |

### Costo stimato Sally via API
Con un utilizzo medio di 20-30 query/giorno per utente attivo, il costo API è stimato in €0,02-€0,05 per query. Per 50 utenti attivi con 10 query/giorno medio: 50 × 10 × €0,03 × 220gg = **~€3.300/anno**.

### Risparmio netto su licenze

| Scenario | Licenze evitate | Costo API Sally | Risparmio netto |
|---|---|---|---|
| vs 30 licenze | €7.200 | €3.300 | **€3.900/anno** |
| vs 50 licenze | €12.000 | €3.300 | **€8.700/anno** |
| vs 150 licenze | €36.000 | €3.300 | **€32.700/anno** |

**Nota:** Il cost avoidance sulle licenze non è incluso nel totale dei risparmi operativi per non confondere due nature di beneficio diverse. Va presentato separatamente come argomento aggiuntivo.

---

# Riepilogo risparmi operativi

## Dettaglio per area

| # | Area di risparmio | Ore/anno | Risparmio/anno |
|---|---|---|---|
| 1 | Q&A aziendale — lato rispondenti | 572h | €20.480 |
| 2 | Q&A aziendale — lato richiedenti | 691h | €24.185 |
| 3 | Compilazione documenti e form | 198h | €6.930 |
| 4 | Creazione/aggiornamento policy e procedure | 42h | €1.470 |
| 5 | Onboarding nuovi assunti | 210h | €6.300 |
| 6 | Email-to-action / Audio-to-action | 1.027h | €35.933 |
| | **TOTALE OPERATIVO** | **2.740h** | **€95.298** |

## Scenari

| Scenario | Fattore | Risparmio annuo | Ore liberate | FTE equiv. |
|---|---|---|---|---|
| Conservativo | 70% | **€66.700** | 1.918h | 1,1 |
| **Realistico** | **85%** | **€81.000** | **2.329h** | **1,4** |
| Ottimistico | 100% | €95.298 | 2.740h | 1,6 |

## Beneficio totale (operativo + cost avoidance)

| Componente | Scenario realistico |
|---|---|
| Risparmio operativo (85%) | €81.000 |
| Cost avoidance licenze (scenario 50 utenti) | €8.700 |
| **Totale** | **€89.700** |

---

# Distribuzione del risparmio

## Per profilo

| Profilo | Ore risparmiate | % del totale |
|---|---|---|
| Marco Merli (ESG/Compliance/Documentale) | ~294h | 11% |
| Roberta Calajò (Resp. Controllo) | ~230h | 8% |
| PM/Operativi/Producer (email-to-action + Q&A) | ~1.718h | 63% |
| Nuovi assunti (onboarding) | ~210h | 8% |
| Compilazione documenti (Marco, Davide, Roberta, sicurezza) | ~198h | 7% |
| Altri rispondenti (segreterie, team leader) | ~90h | 3% |

## Osservazione chiave
Il 63% del risparmio viene dall'Area 6 (email-to-action) che impatta 28 PM/operativi/producer. Questo è il driver principale del business case Sally standalone e dipende dall'effettiva adozione della funzionalità di conversione input non strutturato → azione. Il rischio di adozione è mitigato dal fatto che la funzionalità è intuitiva (inoltrare un'email o inviare una nota vocale è un gesto familiare).

---

# Sanity check

## Confronto con le altre soluzioni Wave 2

| Soluzione | Utenti principali | Risp. realistico | Natura del risparmio |
|---|---|---|---|
| Link | ~25 | €39.200 | Eliminazione duplicazione dati, Progress digitale |
| Pitch | ~9 | €51.600 | Analisi strategica + produzione creativa |
| Flow | ~55 | €97.300 | Coordinamento task (volume) |
| **Sally** | **~80** | **€81.000** | **Accesso informazione + conversione input** |

Sally ha un profilo simile a Flow: molti utenti con risparmio unitario contenuto. La media è ~0,6h/settimana per utente, coerente con un agente che si usa "quando serve" piuttosto che come strumento principale di lavoro.

## Verifica benchmark
- McKinsey: 20% del tempo speso in ricerca informazioni → la nostra stima per i richiedenti è del 5,5% del benchmark (30 min/sett vs 9h/sett). Conservativo.
- Wrike: 30-39% del lavoro amministrativo automatizzabile → la nostra stima di automazione compilazione è al 55%. Nella fascia alta, giustificato dal fatto che i dati sono standardizzati e noti.
- Il risparmio di Marco (252h) è coerente con una riduzione del 70% su 7,5h/sett — plausibile per domande procedurali su cui Sally può rispondere senza intervento umano.

---

# Valore qualitativo (non quantificato)

1. **Eliminazione single point of failure (Marco Merli)** — Oggi Marco è l'unico a conoscere l'intero sistema documentale. Se dovesse assentarsi per un periodo prolungato, nessuno potrebbe gestire le certificazioni, i portali fornitori o gli aggiornamenti normativi. Sally diventa la "memoria istituzionale" che mitiga questo rischio.

2. **Compliance e audit readiness** — Sally conosce tutte le policy e le loro interconnessioni. In preparazione di audit ISO 27.000, EcoVadis o CDPE, può generare report di coerenza, identificare gap e preparare la documentazione necessaria.

3. **Democratizzazione dell'AI in azienda** — Invece di account ChatGPT condivisi con problemi di privacy e limiti, tutti i dipendenti accedono a un agente contestualizzato, sicuro, con costi proporzionali all'uso effettivo e senza condivisione di cronologia.

4. **Knowledge base procedurale vivente** — Sally conosce le procedure nel dettaglio operativo: le 3 casistiche di ritenuta per tipo fornitore, i 4 articoli IVA (ART-000004 a ART-000007), le regole Revolut (48h, €500, sintassi), la distinzione proforma/fattura finale per i fornitori esteri, i vincoli di regime fiscale per apertura commessa, il workflow di doppia approvazione pagamenti. Questo livello di specificità è ciò che rende Sally credibile come "collega esperto" e non come chatbot generico.

5. **Valore percepito dall'interno** — Marco Merli ha spontaneamente espresso entusiasmo e si è proposto come sponsor interno. Avere un champion nel team compliance/qualità accelera l'adozione e la credibilità del progetto.

6. **Scalabilità della conoscenza** — Ogni documento aggiunto alla KB diventa immediatamente consultabile da tutti. La sincronizzazione notturna con le cartelle di Marco assicura che Sally sia sempre aggiornata senza lavoro manuale di caricamento.

---

# Nota sulle sovrapposizioni con altri moduli

| Flusso | In questo BC? | Motivazione |
|---|---|---|
| Dipendente chiede a Sally "come registro un fornitore forfettario?" | ✅ | Q&A su KB aziendale — nessun altro modulo lo copre |
| Dipendente chiede "qual è la procedura Revolut per spese sopra €100?" | ✅ | Q&A procedurale — Sally conosce le regole (fattura obbligatoria sopra €100, giustificativo entro 48h, ecc.) |
| Sally compila un'autocertificazione | ✅ | Compilazione documenti — nessun altro modulo lo copre |
| Operativo inoltra email cliente → Sally crea azione su sistema | ✅ | La *conversione* input→azione è Sally; il *coordinamento* del task è Flow |
| Operativo invia foto scontrino → Sally formalizza in voce PDP | ✅ | La *formalizzazione* dell'input è Sally; la *gestione* del PDP è Link |
| Sally scrive un messaggio LinkedIn su LeadMe | ❌ | Già nel BC LeadMe |
| Sally genera report NLP per Garbarino su Link | ❌ | Già nel BC Link |
| Sally formalizza nota vocale in aggiornamento task su Flow | ❌ | Già nel BC Flow (Area 5) |
| Sally estrae scadenze da contratti → reminder Flow | ❌ | Già nel BC Flow (Area 4) |
| Sally estrae dati apertura COM da transcript | ❌ | Sarà nel BC Minutes Evolution |
| Cross-check Revolut (spese non associate a COM) | ❌ | Add-on Link da quotare a parte |

---

# Rischi e fattori di mitigazione

| Rischio | Probabilità | Impatto | Mitigazione |
|---|---|---|---|
| Qualità risposte insufficiente (allucinazioni) | Media | Alto | RAG su KB verificata. Risposte con citazione della fonte. Disclaimer su risposte non basate su documenti noti. Test estensivo con Marco prima del lancio. |
| Documenti non aggiornati nella KB | Media | Alto | Sincronizzazione automatica notturna con le cartelle di Marco. Alert quando un documento supera la data di validità. |
| Resistenza all'uso da parte dei dipendenti | Media | Medio | Interfaccia familiare (chat/PWA). Sponsor interno (Marco). Risparmio evidente e immediato (risposta in secondi vs ore di attesa). |
| Privacy e permessi di accesso | Bassa | Alto | Separazione documentazione pubblica/privata. Accesso per ruolo. Esclusione documenti sensibili (idoneità sanitarie, dati personali soci). Marco ha già pre-filtrato la cartella pubblica. |
| Variabilità formati compilazione (PDF immagine) | Alta | Basso | Partire da Word e PDF compilabili. OCR su PDF immagine come fase 2. Stima già ridotta al 55% per tenerne conto. |
| Costi API superiori alle attese | Bassa | Medio | Monitoraggio consumi per utente. Possibilità di differenziare modelli per ruolo (modello economico per Q&A semplice, modello premium per compilazione complessa). |

---

# Parametri economici utilizzati

| Profilo | Costo orario |
|---|---|
| Marco Merli (ESG/Compliance) | €35/h |
| Roberta Calajò (Resp. Controllo) | €37/h |
| PM / Operativi / Producer | €35/h |
| Nuovi assunti (blend primo periodo) | €30/h |
| Blend generale richiedenti | €35/h |

Formula: Costo azienda = RAL × 1,40 (INPS ~30% + TFR ~7% + INAIL + benefit). Ore effettive: 1.720/anno (220gg × 8h).

---

# CHANGELOG v1 → v2

| Area | Modifica | Impatto |
|---|---|---|
| Contesto | Aggiunta descrizione dettagliata delle procedure operative reali (casistiche ritenute, codici IVA, regole Revolut, fatture estere, naming file) che genera le 120 email/settimana a Calajò | Precisione narrativa |
| Area 1 | Nota ¹ espansa: elencate le tipologie esatte di domande procedurali che Sally gestisce, con riferimento alle procedure analizzate | Credibilità |
| Area 2 | Aggiunta complessità procedurale (lunghezza e dettaglio delle procedure reali) come giustificazione della difficoltà di ricerca | Precisione |
| Area 5 | Aggiunto esempio concreto di guida onboarding (prima richiesta pagamento, prima Revolut, prima fattura estera) | Concretezza |
| Area 6 | Utenti da 30 a 28 (allineato a organigramma: 9 PM + 13 operativi + 6 producer). Aggiunto foto scontrino e input PDP tra i casi d'uso | -€2.567 |
| Perimetro | Aggiunto cross-check Revolut come escluso (add-on Link) | Chiarezza sovrapposizioni |
| Sovrapposizioni | Tabella espansa con nuovi casi d'uso specifici (domanda Revolut, foto scontrino → PDP) | Separazione netta |
| Sanity check | Aggiornato con i nuovi totali degli altri BC (Link €39.200, Pitch €51.600, Flow €97.300) | Coerenza cross-BC |
| Valore qualitativo | Aggiunto punto 4: "Knowledge base procedurale vivente" con dettaglio del contenuto procedurale reale | Differenziazione vs chatbot generico |
| **Totale** | da €97.865 a €95.298 | **-2,6%** |
| **Realistico** | da €83.200 a €81.000 | **-2,6%** |
