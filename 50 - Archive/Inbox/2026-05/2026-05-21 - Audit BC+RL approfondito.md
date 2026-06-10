---
type: audit
status: draft
priority: p1
client: Achipont
created: 2026-05-21
updated: 2026-05-21
projects: [Achipoint]
stakeholders: [Carlo Sanvoisin]
meeting_context: 2026-05-21 sera — Audit approfondito BC e RL post-round-4, validazione 5 punti tecnici Carlo
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Achipont LOST 9/6 — audit storico, checkbox non più rilevanti. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# 🔍 Audit approfondito BC + RL — 21-5-26 (round-5)

> Rilettura sistematica del Business Case e del Requirement Log nella versione corrente post-round-4 (tabelle pricing 4-col + opzionali alleggerite + Fase 2 alleggerita + de-anglicizzazione round-2). Obiettivo: rassicurare Carlo che i 2 file sono corretti sotto ogni profilo (numerico, tecnico, legale, comunicativo, grammaticale) prima dell'invio del 21/5 sera. Validati anche i 5 punti tecnici sollevati da Carlo.

## 1. Validazione dei 5 punti tecnici di Carlo

### Punto 1 — "Unica dipendenza esterna critica = BDNCP" è falso. ✅ VALIDO

**Diagnosi**. La Proposta §6.1 dichiara `Manutenibilità. L'unica dipendenza esterna critica dell'MVP è la fonte dati pubblica ufficiale BDNCP, gratuita, documentata e stabile per obbligo di legge.` Identica formulazione in **RL RNF4**. Questa frase è **falsa**: il provider LLM è una seconda dipendenza critica (senza LLM lo scoring non gira). L'architettura model-agnostic (Proposta §3.2 + RL MB4.4) mitiga il rischio ma non lo elimina (resta esposizione a outage del provider, rate-limit, cambi di pricing, deprecation di modelli).

**Impatto**. Un cliente o un consulente che legge entrambe le frasi (§3.2 model-agnostic + §6.1 unica dipendenza) coglie la contraddizione. Audit-grade: l'affermazione di §6.1 va riformulata.

**Riformulazione raccomandata** (sia Proposta §6.1 sia RL RNF4):

> *Manutenibilità. Le uniche due dipendenze esterne critiche dell'MVP sono (a) la fonte dati pubblica ufficiale BDNCP — gratuita, documentata e stabile per obbligo di legge — e (b) il provider del motore di linguaggio AI utilizzato per la valutazione semantica dei bandi. Quest'ultima dipendenza è mitigata dall'architettura portabile tra provider LLM (sezione 3.2), che consente lo switch in caso di outage prolungato, deprecation del modello o variazioni significative di pricing del provider.*

### Punto 2 — Costi operativi non integrati nel payback. ✅ VALIDO

**Diagnosi**. Il BC §4 dichiara esplicitamente che `il calcolo… non include i costi ricorrenti per hosting cloud, servizi LLM e manutenzione, dimensionati nella proposta tecnico-economica in un range indicativo di €250-€400/mese (€3.000-€4.800/anno). L'integrazione di questi costi nel modello riduce il beneficio annuo netto in misura contenuta…` Però **il payback finale tabellato resta lordo**, e in particolare:

- Scenario base lordo: investimento €50.000 / beneficio €48.200 = ~12 mesi → quanto attualmente dichiarato.
- Scenario base **netto**: investimento €50.000 / beneficio netto €43.400 (= €48.200 − €4.800 worst case) = 13,8 mesi → ~14 mesi.

Inoltre il BC è ancorato a €50.000 (Pacchetto Completo), ma chi sceglie l'Essenziale ha investimento €43.000 → payback netto Essenziale: €43.000 / €43.400 = 11,9 mesi → ~12 mesi (allineato col messaggio attuale). Quindi il messaggio "~12 mesi" oggi vale solo per Essenziale al netto; per Completo al netto sono ~14 mesi.

**Riformulazione raccomandata**. Sostituire la prosa intro di §4 BC con:

> *Aggregando le due componenti di valore e ponendole a confronto con l'investimento iniziale di €50.000 una tantum (proposta tecnico-economica HeyAI), si ottengono gli indicatori sintetici della tabella seguente. Il calcolo è effettuato su un orizzonte triennale a flussi nominali. Includendo i costi ricorrenti per token AI, manutenzione e supporto (range indicativo €250-€400/mese, dimensionati nella proposta in §8.3) il beneficio annuo netto dello scenario base si attesta a circa €43.400 invece di €48.200 e il tempo di rientro al netto si colloca a 13-14 mesi per il Pacchetto Completo e a 11-12 mesi per il Pacchetto Essenziale. Le tabelle e le sensitivity sotto sono presentate in formato lordo per leggibilità del modello a parità di parametri; la differenza al netto resta contenuta e non altera la conclusione qualitativa del business case: il rientro positivo è entro il diciassettesimo mese in ogni scenario testato.*

Oppure (più asciutto), riga aggiuntiva in tabella ROI §4:

| Voce | Conservativo | Base | Ottimistico |
|---|---|---|---|
| Tempo di rientro stimato (lordo, Pacchetto Completo) | ~ 16 mesi | ~ 12 mesi | ~ 11 mesi |
| Tempo di rientro al netto dei costi ricorrenti | ~ 18-19 mesi | ~ 14 mesi | ~ 12 mesi |

### Punto 3 — Quante candidature dietro le "4 aggiudicazioni"? ✅ VALIDO (parzialmente)

**Diagnosi**. Il BC §3.2 tabella parametri **dichiara già esplicitamente** che le 4 aggiudicazioni base derivano da 24 partecipazioni/anno × 15% tasso di aggiudicazione (e c'è la nota metodologica "Target operativo di 24 bandi/anno, corrispondenti a circa 2 partecipazioni al mese"). Quindi tecnicamente non è "nascosto". Però **non emerge nel messaging principale**: il callout Proposta §2.2 dice solo "4 aggiudicazioni a €30.000 medi al 21% di margine"; il callout BC §3.3 dice "Scenario base: €25.200"; il callout §4 ROI ripete il numero. **In nessuno di questi messaging principali compare il numero 24 partecipazioni/anno = 2 al mese**.

**Importanza**. Il dato è il fulcro del modello: senza quel volume di partecipazioni il numero di aggiudicazioni si dimezza, e il valore strategico è collegato al Modulo D Fase 2 (riduzione tempo preparazione offerta). Per onestà comunicativa con Luigi va esplicitato che la promessa di 4 aggiudicazioni non è "automatica": richiede 24 preparazioni di offerta all'anno.

**Riformulazione raccomandata**. Aggiungere una riga nel callout di §3.3 BC e/o nella prosa Proposta §2.2:

> *Scenario base: 4 aggiudicazioni l'anno richiedono la preparazione effettiva di 24 offerte (circa 2 al mese), che resta in capo alla struttura Achipont. I moduli evolutivi di Fase 2 (analisi automatica capitolati + generazione assistita della documentazione) agiscono direttamente su questo sforzo, riducendo il tempo di preparazione per ciascuna offerta.*

### Punto 4 — "Switch LLM senza ri-sviluppo del modulo" — sovra-promessa. ✅ VALIDO

**Diagnosi**. Proposta §3.2 + RL MB4.4 dichiarano `con possibilità di switch senza ri-sviluppo del modulo`. Tecnicamente lo switch tra provider LLM (es. da OpenAI ad Anthropic) richiede: ricalibrazione dei prompt (linguaggi/formati diversi); re-test dello threshold di score (modelli diversi producono distribuzioni di score diverse); eventuale aggiustamento dei few-shot examples e del system prompt; regression test su un dataset rappresentativo di bandi storici. Non è "drop-in replacement". La formulazione attuale è **contestabile** se Achipont chiede in futuro lo switch e si lamenta del tempo/costo aggiuntivo.

**Riformulazione raccomandata** (suggerita da Carlo, leggermente raffinata):

> *…con possibilità di switch del provider sottostante senza ri-architetturazione del modulo, fatte salve attività ordinarie di calibrazione del prompt e validazione dei nuovi risultati di scoring rispetto al modello precedente.*

Stessa correzione in RL MB4.4.

### Punto 5 — MEPA e ANAC stessa tra i "10 portali pubblici Achipont". ✅ VALIDO

**Diagnosi**.

- **MEPA**: Mercato Elettronico della Pubblica Amministrazione, gestito da Consip. È una **piattaforma di e-procurement**, non una stazione appaltante. I bandi e le RDO pubblicati sopra soglia di pubblicazione BDNCP (€40K) compaiono effettivamente in BDNCP — ma solo per la parte di gare sopra soglia. Il catalogo MEPA (acquisti diretti sotto soglia) **non rientra in BDNCP**. Quindi MEPA è "parzialmente coperto", come ADR/ANAS proprio/Portale Stella, non "pubblico pieno".
- **ANAC**: ente che gestisce BDNCP. Come stazione appaltante per i propri bandi, finisce per obbligo di legge in BDNCP (e quindi è ok citarla). Però la fraseologia attuale "ANAC stessa rientra per obbligo di legge nella BDNCP" è **tautologica** e suona ingenua a un buyer pubblico esperto.

**Riformulazione raccomandata** (Proposta §4.1, ricalcolando la mappa portali):

> *…dei 17 portali a cui Achipont è iscritta, 9 sono soggetti pubblici o a controllo pubblico che pubblicano i propri bandi direttamente su BDNCP per obbligo di legge — Roma Capitale, Senato, SOGIN, EUR SpA, Zetema, Parco Archeologico del Colosseo, Soprintendenza Speciale Roma, Sinesgy, ANAC in qualità di stazione appaltante per i propri acquisti; 4 sono parzialmente coperti dalla BDNCP per la sola parte di gare sopra soglia (ANAS, ADR, Portale Stella, MEPA — Consip per le RDO/bandi sopra €40.000); i restanti 4 — committenti privati strutturati (Gruppo ICM, Vaticano) e associazioni o consorzi di categoria (Assoponteggi, CCC) — restano fuori perimetro MVP e sono trattati come ampliamenti di Fase 2 o esclusi in via definitiva.*

Math invariato: 9 + 4 + 4 = 17.

---

## 2. Altri findings emersi nella rilettura indipendente

### Errori già corretti (round-5 applicato adesso)

| # | File | Voce | Pre-fix | Post-fix |
|---|---|---|---|---|
| 1 | BC §4.1 callout | Errore numerico | "tutti e tre gli scenari… entro il quindicesimo mese" | "entro il sedicesimo mese" (math: conservativo 50/36.5 = 16,4 mesi) |
| 2 | BC §4.1 prosa | Inglesismo residuo | "componente di cost avoidance da sola" | "componente di costo evitato da sola" |
| 3 | BC §6.2 prosa | Grammatica | "La analisi di sensibilità mostra…" | "L'analisi di sensibilità mostra…" |
| 4 | BC §1.2 tabella callout | Monca | Solo "Parametro 1 — Importo medio commessa pubblica." | Aggiunto Parametro 2 (Capacità annua di preparazione bandi) + sintesi per entrambi |
| 5 | RL MB3.1 nota | Stile | "Logica gate, non valutazione" | "Logica di esclusione (gate), non di assegnazione punteggio" |
| 6 | RL MB3.2 dettaglio | Grammatica errore di genere | "Non danno valutazione positivo aggiuntivo" | "Non danno punteggio positivo aggiuntivo" |
| 7 | RL MB4 sezione | Grammatica errore di genere | "Valutazione AI semantico" | "Valutazione AI semantica" |
| 8 | RL MB4.3 dettaglio | Inglesismo + grammatica | "fit geografico vs regioni preferenziali" | "corrispondenza geografica con regioni preferenziali" |
| 9 | RL MB4.4 dettaglio | Inglesismo "Engine" | "Engine di valutazione progettato…" | "Motore di valutazione progettato…" |
| 10 | RL MB4.4 nota | Inglesismo "underperformance" | "Mitigazione rischio AI underperformance" | "Mitigazione del rischio di performance insufficiente del modello AI" |
| 11 | RL MUI1.2 dettaglio | Inglesismo "encryption at rest" + "in transit" | "TLS in transit, encryption at rest sui dati persistiti" | "Cifratura TLS in transito e cifratura a riposo sui dati persistiti" |
| 12 | RL MUI1.3 dettaglio | Inglesismo + ripetizione | "Registrazione audit degli accessi alla piattaforma per tracciabilità" | "Registrazione tracciabile degli accessi alla piattaforma" |
| 13 | RL MOPT1.1 dettaglio | Errore di concordanza articolo | "che esegue automaticamente l'raccolta automatica BDNCP" | "che esegue automaticamente la raccolta automatica BDNCP" |

### Errori che richiedono decisione (non ancora applicati)

Sono i 5 punti tecnici di Carlo sopra. Più questi 2 ulteriori che ho identificato e che richiedono un giudizio:

- **§3.1 BC math Lazio**: la prosa dice `il Lazio… con il 5,4% del valore nazionale (circa €15,3 miliardi)`. Math: 5,4% × €271,8 mld = €14,68 mld, non €15,3 mld. La discrepanza può dipendere dal fatto che il dato 5,4% si riferisce specificamente agli appalti di lavori (un sottoinsieme del totale €271,8 mld), per cui la base non è €271,8 mld ma una cifra minore. Da verificare nella Relazione ANAC 2024 e allineare. **In assenza di accesso diretto al rapporto, raccomando**: o si scrive "circa il 5%, equivalente a stima €14-15 mld del valore degli appalti italiani di lavori" (range largo) o si verifica il dato puntuale. **Decisione da Carlo**: hai accesso al rapporto ANAC e me lo fai vedere, oppure ammorbidisco la formulazione?

- **RL MOPT — aggregazione vs separazione**: il RL elenca 4 componenti opzionali (MOPT1.1, 1.2, 1.3, 1.4) mentre la Proposta §8.1 le **aggrega in 2 funzionalità commerciali**: "Notifiche e aggiornamento automatico" (€7.500 = MOPT1.1 + 1.2 + 1.3) + "Reportistica di sintesi periodica" (€2.800 = MOPT1.4). Senza una nota di coerenza, il cliente che incrocia RL e Proposta nota l'asimmetria. **Raccomandazione**: aggiungere una nota nel RL sopra MOPT che spieghi l'aggregazione commerciale. Esempio (da inserire nella riga R43 al posto di "MOPT — Opzionali da valutare con il cliente in avvio"):

> *MOPT — Opzionali da valutare con il cliente in avvio. Le 4 componenti sotto elencate sono raggruppate commercialmente in 2 funzionalità (vedi Proposta §8.1): "Notifiche e aggiornamento automatico" (assorbe MOPT1.1 + MOPT1.2 + MOPT1.3) e "Reportistica di sintesi periodica" (corrisponde a MOPT1.4).*

## 3. Cose verificate e PASSED — riassuntivo

- **Coerenza numerica cross-sezione BC**: scenario base §3.3 = §4 sintesi ROI = §5.1 colonna €30K = §5.2 colonna 15% = **€25.200 / €48.200 / ~12 mesi** ✅
- **Math costo evitato apprendista**: €17.500 + €1.980 + €1.300 + €615 + €1.605 = €23.000 ✅
- **Math ROI 3 anni**: 119% / 189% / 231% verificati cella per cella ✅
- **Math sensitivity §5.1**: 4 aggiudicazioni × €25-45K × 21% = €21.000-€37.800; ben tot = €44-60.800; payback 14/12/12/11/10 mesi ✅
- **Math sensitivity §5.2**: 2/3/4/5/6 aggiudicazioni × €30K × 21% = €12.600-€37.800; ben tot = €35.600-€60.800; payback 17/14/12/11/10 mesi ✅
- **Mapping 17 portali questionario → §4.1 Proposta**: 17 portali tutti presenti (post-fix punto 5 Carlo)
- **Saving Completo math**: €43K + €7.500 + €2.800 = €53.300 vs €50.000 = **€3.300** ✅
- **Margine fornitore**: Essenziale 23%, Completo 31%, opz stand-alone 47-57%, Fase 2 35-55% ✅ tutti sotto 60% MAX
- **Validità proposta** 15 giorni ✅
- **Dati legali HeyAI** in header/footer (Via Parigi 11, CF, REA, PEC) ✅
- **Footer Amministratore Unico** = dato societario, non firma ✅
- **Zero menzioni di Soolutions/Silencio/Jakala/Futuritaly/NoLoop** ✅
- **Coerenza Proposta-BC**: investimento €50K, scenario base €48.200 beneficio, payback ~12 mesi ✅ (con riserva su punto 2 — netto vs lordo)
- **Coerenza Proposta-RL**: tutti i moduli A/B/C/D + ampliamenti coperti; SLA Proposta §11.3 coerente con RNF1 RL ✅
- **Single-tenancy** dichiarata in §7 Proposta e RNF5 RL ✅ (round-1 fix)
- **DPA**: citato in Proposta §6.2 + RL RNF3 con dizione "Data Processing Agreement (DPA, accordo per il trattamento dati)" ✅ (round-2 fix)
- **Datacover BC "Maggio 2026"** ✅ (round-1 fix)

## 4. Checklist fix che richiedono decisione Carlo

Ordine consigliato (impact-driven):

- [ ] **Punto 1 Carlo (Proposta §6.1 + RL RNF4)** — aggiungere LLM come seconda dipendenza con mitigation. Bloccante.
- [ ] **Punto 2 Carlo (BC §4)** — integrare costi ricorrenti nel calcolo netto + esplicitare differenza Essenziale ~12 mesi netto vs Completo ~14 mesi netto. Bloccante per audit-grade verso CFO/architetto.
- [ ] **Punto 3 Carlo (BC §3.3 / Proposta §2.2)** — esplicitare nel messaging "4 aggiudicazioni su 24 partecipazioni l'anno = 2 al mese". Raccomandato per onestà comunicativa.
- [ ] **Punto 4 Carlo (Proposta §3.2 + RL MB4.4)** — sostituire "senza ri-sviluppo del modulo" con "senza ri-architetturazione del modulo, fatte salve calibrazione e validazione". Bloccante.
- [ ] **Punto 5 Carlo (Proposta §4.1)** — riformulare mappa 17 portali (9 pubblici + 4 parziali + 4 fuori scope), spostare MEPA in "parziali", precisare ANAC. Raccomandato per credibilità tecnica.
- [ ] **§3.1 BC math Lazio** — verificare dato 5,4% vs €15,3 mld nella Relazione ANAC 2024 oppure ammorbidire formulazione.
- [ ] **RL MOPT aggregazione** — aggiungere nota di coerenza con aggregazione commerciale Proposta.

## 5. Stato finale post-round-5

I 13 fix tipografici/grammaticali sono applicati e verificati. **I 5 punti tecnici di Carlo sono validati come effettivamente da fixare** e le riformulazioni proposte sono pronte per essere applicate, ma richiedono il go esplicito perché:

- Punto 1, 4: cambiano il tono di una promessa (da assoluta a condizionata) — Carlo deve confermare di voler smorzare
- Punto 2: cambia il payback dichiarato sul Completo (da ~12 a ~14 mesi al netto) — è una concessione di trasparenza che però abbassa l'impatto commerciale del messaggio
- Punto 3: aggiunge un caveat operativo ("vi serve preparare 24 offerte/anno") che potrebbe essere percepito da Luigi come "lavoro nuovo" → da valutare come introdurlo
- Punto 5: cambia la mappa 10+3+4 in 9+4+4 — questione di credibilità tecnica
- §3.1 Lazio math: serve verifica fonte ANAC

Pre-fix round-5 archiviati in [`50 - Archive/Achipont Pre-Audit 21-5-26/round-5-pre-fix/`](/Users/carlosanvoisin/claude/50%20-%20Archive/Achipont%20Pre-Audit%2021-5-26/round-5-pre-fix/).

---

*Audit eseguito da Cowork session 21/5/2026 sera. Aspetto decisione Carlo sui 5 punti tecnici per chiudere il round-6 prima dell'invio.*
