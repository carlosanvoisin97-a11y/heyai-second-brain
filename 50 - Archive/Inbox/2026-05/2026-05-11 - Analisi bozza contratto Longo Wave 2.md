---
type: analysis
created: 2026-05-11
updated: 2026-05-11
project: _Wave 2 NoLoop
stakeholders: [Mauro Longo (Morbinati & Longo), Andrea Pazienza, Paolo Donzelli, Marco Merli]
status: decisions-taken
priority: p1
related_doc: "20260506 HeyAI - NoLoop - Wave 2 - bozza.docx (ricevuta 7/5 ore 10:22)"
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Analisi del draft 8/5, superata dai giri successivi col legale; residuo IP in OQ#19/#29. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

## 🔴 Decisioni Carlo 11/5 (post analisi)

Risposte definitive sui 7 punti aperti + 4 gap:

1. **Art. 2 Riserva nomina NOT** → ✅ **TENERE**. Richiesta esplicita del cliente (NoLoop). Refuso numerazione "1.2" → "2.2" da segnalare comunque a Longo.
2. **Art. 4.3 Estensione infragruppo automatica a NOT** → ✅ **TENERE** (coerente con riserva di nomina).
3. **Art. 4.5 Escrow** → ✅ **TENERE COSÌ**. Se in futuro attivato, **costi a carico cliente**. Da esplicitare nel commento a Longo per chiudere la porta a contestazioni future.
4. **Art. 4.4 Definizione "concorrente"** → (non discusso esplicitamente da Carlo, lascio come nice-to-have minore; non bloccante per chiusura settimana)
5. **Art. 9.8 Soglie Sally (80 portali / 3K KB)** → ✅ **CONFERMATE**. Carlo: "I portali sono effettivamente 80 da quello che dicono, magari non verranno integrati tutti". Niente verifica Federico necessaria.
6. **Art. 10.2 DPA "entro primo MVP"** → 🔄 **DPA già esistente da Wave 1 con NoLoop**. Andrea Pazienza recupera il DPA originale e verifica se è ancora valido per Wave 2. Se valido → ratifica/estensione. Se non valido → applicare proposta originale (sostituire "entro primo MVP" con "entro 30gg dalla sottoscrizione" + bozza nuovo DPA).
7. **AI autorizzate Marco Merli** → ✅ **CHIUSO** già il 7/5, art. 10.6 generico basta. NON è più punto aperto, non sollevarlo con Longo.
8. **OnSite Generali MVP 20/5** → ✅ **NON METTERE NEL CONTRATTO**. È MVP non consegna finale, gestione operativa con Federico e cliente. Niente clausola ad hoc.

**Sui gap**:
- **Allegato 2 Piano Fatturazione** → ✅ **GIÀ NOSTRO**, già condiviso a NoLoop. Da fornire a Longo (no preparazione ex novo). Owner: Andrea Pazienza recupera il file condiviso e lo gira a Longo.
- **Allegato 3 VenueFinder Requirement Log v2** → ✅ **GIÀ NOSTRO**, documento HeyAI/Soolutions, non lo deve produrre l'avvocato. Owner: Federico Saladino fornisce a Longo (probabilmente già condiviso, da verificare).
- **8 placeholder `[***]`** → ✅ **CONFERMATI come placeholder validi**. Andrea Pazienza recupera e riempie.
- **Contratto IP HeyAI↔Soolutions** → ✅ accordo verbale esistente confermato ("con Solutions siamo d'accordo che teniamo noi la IP"), **resta aperta la formalizzazione scritta** come dipendenza bloccante pre-firma cliente.



# Analisi bozza contratto Wave 2 — avv. Longo (Morbinati & Longo)

> Riscontro analitico alla bozza ricevuta il 7/5/2026 ore 10:22, mail "[64508] HeyAI / Noloop (Wave 2)". Base per discussione con avv. Longo + Andrea Pazienza entro deadline 15/5/2026 (chiusura settimana lavorativa). Allegato origine: `uploads/20260506 HeyAI - NoLoop - Wave 2 - bozza.docx`. Trascrizione testuale completa in `outputs/longo_bozza_wave2.md`.

## 1. Sintesi e verdict

Bozza solida, redatta con impianto difensivo a favore HeyAI: IP, obbligazione di mezzi, esclusione benefici economici, silenzio-assenso UAT 15gg, limitazione massimale e disclaimer AI sono tutti allineati alla strategia consolidata (vedi [[99 - System/Master Facts Sheet]] §Wave 2 + [[_Wave 2 NoLoop|Wave 2 NoLoop]]). Il modello "HeyAI mantiene IP, NoLoop ottiene licenza" è correttamente declinato e non replica il full-transfer della Wave 1. Tutti i 5 perni concordati con Carlo il 5/5/2026 sono coperti.

Aree da chiarire/integrare prima della firma: 3 allegati (di cui Allegato 2 — Piano Fatturazione e Milestone — completamente da preparare con Andrea Pazienza); circa 8 placeholder `[***]` (PEC, legali rappresentanti, P.IVA NoLoop, versione Requirement Log, data firma); 4 punti che richiedono decisione strategica di Carlo (riserva nomina NOT, estensione infragruppo automatica, AI autorizzate Marco Merli, OnSite MVP-senza-social); 1 dipendenza non gestita (formalizzazione IP HeyAI ↔ Soolutions, vedi Open Question #19/#29).

Verdict: **firmabile dopo round di chiarimenti**, non riscrittura. Tempo stimato lavoro Carlo+Andrea Pazienza: 1 sessione di 2h con avvocato + 1 sessione di preparazione allegati di 2-3h.

## 2. Punti positivi (allineati alla strategia HeyAI)

| Articolo | Contenuto | Perché ci protegge |
|---|---|---|
| 1.4 Efficacia retroattiva | Ratifica attività già avviate VF/Minutes/LeadMe/Crowd | Copre il rischio "non c'era contratto quando hai sviluppato" |
| 1.5 Non vincolatività documentazione commerciale | PDF Roadmap 2026, business case, stime ROI/FTE = solo consultazione | Disinnesca contestazioni cliente su €299K saving / 5 FTE / payback 13 mesi |
| 3.1 Obbligazione di mezzi | Art. 1176 c.c. — diligenza professionale qualificata | No risultato commerciale dovuto |
| 3.2-3.3 Esclusioni FTE/ROI/Iperammortamento | Iperammortamento esplicitamente escluso | Allineato decisione Carlo 30/4 (lo gestisce cliente) |
| 4.1-4.2 IP a HeyAI + licenza non esclusiva, perpetua, infragruppo | Modello Wave 2 ≠ Wave 1 | Conferma decisione Carlo 5/5/2026 |
| 4.6 Titolarità dati cliente | Restituzione + cancellazione 30+30 gg post fine rapporto | Standard GDPR-compliant |
| 6.1 Corrispettivo €300K a corpo + sconto bundle €27K | Coerente con PDF 13/04 | Pricing officiale rispettato |
| 6.2 35/30/35 per modulo | Allineato a quanto detto al cliente | OK |
| 6.3 Sospensione attività dopo 15gg ritardo + 5gg preavviso PEC | Tutela HeyAI da inadempimento | Allineato a "fino a che non pagate non partiamo" (Carlo 6/5) |
| 6.4 Pausa estiva agosto 2026 | Sospensione bilaterale termini UAT/SLA/pagamento | OK pausa concordata |
| 7.3 Silenzio-assenso UAT 15gg | Standard di mercato a favore Fornitore | Eccellente |
| 7.5 Rilievi non ammissibili (Nice to Have/Fase 2/TBD/preferenze estetiche) | Blinda perimetro Requirement Log | Eccellente — basato sui 72 must-have + 11 nice-to-have |
| 7.7 Esperto indipendente come Amichevole Compositore art. 1349 c.c. | Foro Roma, costi 50/50 | Sensato |
| 7.8 Riduzione corrispettivo limitata alla parte non conforme se cliente usa modulo | Protezione contro "ti pago meno per tutto" | Eccellente |
| 8.1 Garanzia 3 mesi correttiva per modulo | Standard | OK |
| 8.4-8.5 Change Request procedurali + risposta 15gg lavorativi + accettazione scritta obbligatoria | No CR senza scritto | OK |
| 9.1 Massimale = corrispettivo netto 12 mesi precedenti | Cap risarcimento | Standard, accettabile |
| 9.2 Esclusione lucro cessante/danni indiretti/business interruption | Standard | OK |
| 9.3 Malfunzionamenti a cascata | Non risponde di problemi propagati da sistemi terzi | Eccellente per ecosistema 8 moduli interconnessi |
| 9.4 Disclaimer AI + obbligo Human Oversight cliente | Scudo per Sally/Minutes/LeadMe | Eccellente |
| 9.5 AI Act: HeyAI provider, NoLoop deployer | Conformità Reg. UE 2024/1689 | OK |
| 9.7 Costi LLM a carico Committente | Cliente paga token/API | Allineato, evita sorprese |
| 9.8 Soglie scalabilità Sally (80 portali, 3K KB) | Sopra soglia = CR | Da verificare con Carlo (vedi §4) |
| 10.6 + 10.7 Divieto addestramento AI sui dati cliente | Clausole anti-training verso OpenAI/Anthropic | Allineato richiesta Marco Merli |
| 12.5 Riservatezza 5 anni post cessazione | Standard | OK |
| 12.9 Negoziazione puntuale + rinuncia art. 1341-1342 c.c. | Clausole vessatorie approvate analiticamente | Protegge limitazioni responsabilità da impugnazione |

## 3. Placeholder da riempire prima della firma

| Campo | Posizione | Valore noto / Da chiedere |
|---|---|---|
| PEC HeyAI | Premessa | `heyai@pec.it` (da [[99 - System/Master Facts Sheet]]) |
| Legale rappresentante HeyAI | Premessa + firma | TBD — chiarire con Andrea Pazienza chi firma (Carlo? Bruno? amministratore unico?) |
| P.IVA NoLoop | Premessa | Da chiedere a Roberta Calajò o Paolo Donzelli |
| PEC NoLoop | Premessa | Da chiedere |
| Legale rappresentante NoLoop | Premessa + firma | Paolo Donzelli (CFO, ha già firmato NOT 03/04) |
| Versione Requirement Log Wave 2 | Art. 1.2 e Allegato 1 | `Wave2_RequirementLog_FINAL.xlsx` v1 2026-05-07 — vedi [Wave2_RequirementLog_FINAL.xlsx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/NoLoop/Wave%202/Wave2_RequirementLog_FINAL.xlsx) |
| Data firma | Chiusura art. 13 ("Roma, *** 2026") | Target ~15-20/5 |
| PEC per comunicazioni | Art. 12.2 | Idem PEC sopra |

## 4. Punti da decidere/negoziare con Carlo (criticità sostanziali)

### 4.1 Art. 2 — Riserva di nomina NOT: davvero necessaria?

NOT (NoLoop on Trade) ha **già** il suo contratto Operation Transformation (€109K firmato 03/04/2026 da Paolo Donzelli) per logistica+vendite, e Eye Cookies (€75K Full Ownership). La Wave 2 è esplicitamente per NoLoop S.r.l. Senso di lasciare la clausola di nomina ex art. 1401 c.c. che permette al cliente di sostituire NoLoop con NOT entro 30gg / kickoff tecnico?

**Pro lasciarla**: flessibilità organizzativa cliente, costo zero per HeyAI, mantiene responsabilità solidale NoLoop.

**Contro**: complica governance contrattuale, può creare ambiguità in fatturazione (NoLoop usa Microsoft BC con intestazione confusa — vedi 3 fatture cortesia 29/04 già contestate da Roberta), può aprire variazioni IVA/fiscali.

**Decisione richiesta a Carlo**: tenere o togliere? Se tenere → ok. Se togliere → segnalare a Longo.

**Refuso**: Art. 2.1 → 2.2 è erroneamente numerato "1.2 Termine per l'esercizio della facoltà". Da correggere.

### 4.2 Art. 4.3 — Estensione infragruppo automatica a NOT senza ulteriori corrispettivi

La licenza Wave 2 è automaticamente estesa "a tutte le società del gruppo NoLoop ai sensi dell'art. 2359 c.c., inclusa espressamente NOT, indipendentemente dall'esercizio della facoltà di nomina, senza ulteriori corrispettivi a carico del Committente".

**Implicazione commerciale**: NOT può usare LeadMe, Sally 360°, Minutes Extension, ecc. **senza pagare niente in più** a HeyAI. Questo riduce drasticamente la possibilità di upsell futuro a NOT su questi moduli, mentre Operation Transformation copre solo Modulo Vendite+Logistica.

**Decisione richiesta a Carlo**: vuoi davvero questa apertura? Alternative: (a) restringere a NoLoop S.r.l. soltanto e gestire NOT con contratto separato/CR se serve; (b) lasciarla ma esplicitare che eventuali nuove società del gruppo nate post-firma sono escluse; (c) chiedere a Longo di specificare che l'estensione è solo per uso interno di NOT, non per fornire servizi terzi a marchio NOT.

### 4.3 Art. 4.4 — Definizione "concorrente del Fornitore"

In caso di change of control NoLoop, la licenza si trasferisce automaticamente "a condizione che il soggetto risultante non sia un concorrente del Fornitore". **"Concorrente" non è definito.** Rischio: M&A di NoLoop con altra agenzia eventi che è cliente HeyAI futuro genera contestazione.

**Proposta**: chiedere a Longo di aggiungere definizione operativa di "concorrente" (es. "soggetto che fornisce a terzi servizi di sviluppo software AI assimilabili a quelli erogati dal Fornitore"). Oppure rimuovere il vincolo (raro contenzioso, valore di leva basso).

### 4.4 Art. 4.5 — Escrow del codice sorgente: "valutare"

"Le Parti si impegnano a **valutare** congiuntamente, entro 90 giorni dal go-live dell'ultimo modulo, la stipula di un accordo separato di escrow". "Valutare" = nessun obbligo. Standard difensivo dello studio legale.

**Costi escrow**: non specificati. Tipicamente €1.500-3.500/anno + setup. **Decisione richiesta**: se attivato, chi paga? Proposta: cliente. Va chiarito ora prima che diventi punto di attrito futuro.

### 4.5 Art. 9.8 — Soglie scalabilità Sally (80 portali / 3K documenti KB)

I numeri sono presi dal pitch (PDF 13/04 cita "2.000-3.000 documenti"). NoLoop ha realmente 80 portali fornitori? Se hanno 100 portali, Carlo deve incassare CR. Se hanno 50, soglia generosa.

**Decisione richiesta a Carlo**: confermare le soglie con Federico Saladino (architetto Sally) e con Antonella Osmetti/Lorena Cavecchi (SME operativi). Se necessario, alzare soglia (es. 120 portali) per ridurre rischio CR contestate dal cliente come "era già nello scope".

### 4.6 OnSite per Generali 20/5 — MVP senza social

Wave 2 NoLoop log 6/5 sera: "OnSite per Generali 20/5: interfaccia già fatta da Federico, manca social — MVP senza social networking per fare il deadline". La bozza contratto descrive OnSite come "Applicazione per i partecipanti agli eventi, con funzionalità di **social networking**, sistema di pagamento integrato e assistente virtuale Sally" (Art. 1, modulo 7).

**Rischio**: cliente potrebbe contestare il rilascio 20/5 come "non conforme" perché manca social. Difesa HeyAI: Art. 7.5 lett. b) (Nice to Have/Fase 2) — se il social è formalmente classificato Fase 2 nel Requirement Log, OK.

**Decisione richiesta a Carlo**: verificare con Federico che il social networking di OnSite sia classificato come Fase 2 / Nice to Have nel `Wave2_RequirementLog_FINAL.xlsx`. Se non lo è, aggiungere ora prima della firma per coprire il rilascio MVP del 20/5.

### 4.7 Art. 10.2 — DPA da stipulare entro il primo rilascio MVP

Il primo MVP è Venue Finder Evolution, già in delivery fine aprile (vedi log Wave 2: "MVP in prod entro oggi/domani" — 6/5). Se la clausola è interpretata letteralmente, il DPA sarebbe già dovuto esistere.

**Proposta**: chiedere a Longo di sostituire con "entro 30 giorni dalla data di sottoscrizione del presente Contratto" per evitare effetto retroattivo problematico. In parallelo, HeyAI deve avere bozza DPA pronta (Andrea Pazienza + Marco Merli lato cliente).

### 4.8 Art. 10.6 — Evidenza documentale clausole anti-training provider LLM

"Il Fornitore fornirà al Committente, su richiesta, evidenza documentale delle garanzie contrattuali ottenute dai provider terzi". HeyAI deve essere pronta a produrre:
- **Anthropic (Claude)**: Enterprise/Commerce Terms confermano no training su API input/output. Ok.
- **OpenAI**: API standard ha opt-out training di default dal 2023, ma serve verifica del piano (Business/Enterprise). Da confermare con Federico.

**Azione**: Federico Saladino prepara dossier dimostrativo (estratti ToS provider) entro la firma.

## 5. Gap mancanti (da segnalare a Longo)

### 5.1 AI autorizzate — richiesta Marco Merli (28/04)

Quote testuale Marco Merli: "UNA SU TANTE FIRME, **UNA PER OGNI AI AUTORIZZATA**". Il task era stato chiuso in scheda Wave 2 il 7/5 ("conferma Carlo chat: task concluso"). La bozza Longo cita "OpenAI, Anthropic o altri provider terzi" in modo generico in Art. 9.4 e 10.6, ma **non c'è un meccanismo formale di pre-approvazione cliente per OGNI AI nuova introdotta**.

**Decisione richiesta a Carlo**: il task chiuso 7/5 era basato sull'art. 10.6 generico, oppure su un meccanismo più stringente? Se Marco Merli vuole davvero approvazione una-per-una, va aggiunto un comma 10.6-bis tipo: "Qualunque modifica o aggiunta dei provider LLM utilizzati dal Fornitore dopo la firma del presente Contratto è notificata al Committente via PEC con almeno 30gg di anticipo. Il Committente può opporsi motivatamente entro 15gg, nel qual caso le Parti concordano una soluzione alternativa".

### 5.2 Manutenzione post-garanzia (Art. 8.6)

Art. 8.6 dice "accordi separati anche per scambio PEC". Carlo potrebbe valutare di proporre già qui un canone post-garanzia ricorrente (modello Eldis €130/mese × moduli). Pro: revenue ricorrente fidelizzante, evita fuga su altri fornitori dopo i 3 mesi. Contro: introduce trattativa economica adesso, può rallentare firma.

**Decisione richiesta a Carlo**: proporre adesso un'opzione di manutenzione preventiva (es. €1.500-2.500/mese da 4° mese post-rilascio per fix non garantiti + supporto), oppure rimandare a fase post-go-live? Allineamento con [[Eldis Compilatore]] working group su prospetto canone €130/mese (task aperto Federico+Simone).

### 5.3 Allegato 2 — Piano di Fatturazione e Milestone

Citato come parte integrante (Art. 5.3, 6.2) ma **non allegato alla bozza**. Da preparare prima della firma. Base disponibile: tabella esborsi mensili PDF 13/04 (Apr €53.875 → Dic €300K cumulativo). Owner: Andrea Pazienza.

### 5.4 Allegato 3 — VenueFinder Requirement Log v2

Citato in Art. 1.2 e Art. 8.4 ma **non condiviso con HeyAI**. Carlo deve verificare con Longo o Federico se esiste questo documento separato o se è errore di Longo che ha duplicato il Wave2_RequirementLog_FINAL.xlsx assumendo un Annex separato per Venue Finder.

### 5.5 Contratto IP HeyAI ↔ Soolutions (Federico/Simone)

Open Question #19/#29: accettazione verbale dell'IP a HeyAI (sia verso cliente sia verso sviluppatori) è confermata, **ma il contratto interno è ancora da formalizzare**. La bozza Longo (giustamente) non lo tratta — è un contratto separato HeyAI↔Soolutions. Tuttavia, prima di firmare con NoLoop HeyAI "vende" un IP che teoricamente Federico/Simone potrebbero contestare.

**Azione bloccante pre-firma**: Andrea Pazienza prepara accordo interno HeyAI ↔ Soolutions su IP Wave 2 da far firmare a Federico Saladino e Simone Montanari. Task non-banale (manca template — possibile uso Longo stesso o redazione interna).

## 6. Refusi / errori minori

- **Numerazione Art. 2**: dopo "2.1 Facoltà di nomina" il paragrafo successivo è erroneamente numerato "**1.2** Termine per l'esercizio della facoltà". Va corretto in "2.2".
- Anchor pandoc `[]{#_Toc1232820897}` e `[]{#_Toc1321346344}` su 9.3 e 12.3 — solo nell'estratto markdown, irrilevante per Word originale.

## 7. Sequenza azione proposta (chiusura settimana 15/5)

1. **Mar 12/5**: Carlo decide su §4.1 (riserva NOT), §4.2 (estensione infragruppo), §4.4 (escrow costi), §4.5 (soglie Sally), §5.1 (clausola AI Merli), §5.2 (canone manutenzione).
2. **Mer 13/5**: Andrea Pazienza prepara bozza Allegato 2 (Piano Fatturazione) usando PDF 13/04. Andrea verifica P.IVA/PEC/legale rappresentante NoLoop.
3. **Mer 13/5**: Federico verifica classificazione social OnSite nel RL + soglie Sally + evidenza ToS provider LLM.
4. **Gio 14/5**: Carlo+Andrea call con avv. Longo per consolidare commenti (45-60 min).
5. **Ven 15/5**: invio commenti consolidati a Longo via PEC.
6. **Parallelo (qualsiasi data prima della firma cliente)**: Carlo+Andrea formalizzano contratto IP HeyAI↔Soolutions con Federico/Simone.

## Task aperti (cascata, **aggiornati post update Carlo 11/5 sera**)

Carlo aggiorna lo stato: Piano Fatturazione **già allegato a Longo**, VenueFinder RL v2 **già consegnato a Longo**, evidenza no-training **già data a NoLoop**, P.IVA/anagrafica NoLoop **sarà fornita direttamente da NoLoop a Longo**. Workflow modificato: **call di allineamento interna Carlo+Andrea, poi email diretta a Longo** (no call con avvocato).

- [x] ~~Decisione Carlo §4.1-4.7~~ → ✅ chiuso 11/5
- [x] ~~Andrea Pazienza recupera Piano Fatturazione~~ → ✅ chiuso 11/5: già allegato a Longo
- [x] ~~Andrea Pazienza recupera P.IVA/PEC/legale rappresentante NoLoop~~ → ✅ chiuso 11/5: NoLoop fornirà direttamente a Longo
- [x] ~~Federico Saladino fornisce Allegato 3 VenueFinder RL v2~~ → ✅ chiuso 11/5: già consegnato a Longo
- [x] ~~Federico Saladino prepara dossier ToS anti-training~~ → ✅ chiuso 11/5: evidenza già fornita a NoLoop
- [x] ~~Federico Saladino verifica social OnSite + soglie Sally~~ → ✅ chiuso 11/5
- [x] ~~Call Carlo+Andrea+Longo gio 14/5~~ → 🔄 superato: workflow modificato in call interna Carlo+Andrea + email diretta Longo
- [-] **#p1** Carlo+Andrea **producono DPA ex novo** per Wave 2 (Carlo ha rettificato 11/5 sera: DPA Wave 1 non esiste, dobbiamo crearlo). Conseguenza: chiedere a Longo di sostituire Art. 10.2 ("entro primo MVP") con "entro 30gg da sottoscrizione" per dare margine operativo. Owner: Andrea Pazienza coordina + Longo redige (o template HeyAI) — entro **mer 13/5**
- [-] **#p1** Call interna di allineamento Carlo+Andrea Pazienza sui commenti da girare a Longo — entro **gio 14/5**
- [-] **#p1** Email a Longo con commenti consolidati — entro **ven 15/5**. Contenuto: (a) esplicitare costi escrow a carico cliente in Art. 4.5; (b) refuso numerazione "1.2" → "2.2" in Art. 2; (c) DPA timing in base a esito verifica Andrea; (d) eventuale chiarimento "concorrente" Art. 4.4 (nice-to-have, non bloccante)
- [-] **#p1** Verificare se Longo ha già emesso una quotazione/preventivo per la stesura di questo contratto Wave 2. Se no, chiedere quotazione prima di chiudere il rapporto (evita sorprese in fattura) — Carlo+Andrea entro **14/5**
- [-] **#p1** Formalizzazione contratto IP HeyAI↔Soolutions con Federico+Simone (accordo verbale OK ribadito Carlo 11/5, scritto ancora mancante; bloccante pre-firma cliente) — vedi Open Question #19/#29



## Riferimenti

- 📄 Bozza originale Longo: `uploads/20260506 HeyAI - NoLoop - Wave 2 - bozza.docx` (52KB, 7/5/2026 13:18)
- 📄 Trascrizione testuale: `outputs/longo_bozza_wave2.md` (1309 righe)
- 📊 Allegato 1 RL: [Wave2_RequirementLog_FINAL.xlsx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/NoLoop/Wave%202/Wave2_RequirementLog_FINAL.xlsx)
- 📁 Scheda progetto: [[_Wave 2 NoLoop|Wave 2 NoLoop]]
- 📁 Scheda legale: [[Mauro Longo (Morbinati & Longo)]]
- 📋 Master Facts: [[Master Facts Sheet]] §Wave 2 NoLoop
- ❓ Open Questions: #19/#29 (IP HeyAI↔Soolutions formalizzazione)

### Nota 10/6/2026
- Checkbox convertite in superseded (deadline 13-15/5 passate, pacchetto contratto evoluto): il residuo vivo (perimetro IP Soolutions) è tracciato in [[99 - System/Open Questions]] #19/#29 e nelle OQ#69/#70.
