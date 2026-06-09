---
type: prep-doc
status: in-review
created: 2026-06-08
updated: 2026-06-09
client: NoLoop/NOT
projects: [Operation Transformation]
stakeholders: [Federico Saladino (Soolutions), Simone Montanari (Soolutions), Bruno Mattucci]
tags: [contratto, soolutions, IP, review-legale]
meeting_context: Review di sicurezza su bozze Contratto Quadro HeyAI↔Soolutions + Ordine Esecutivo modello base + OE NOT Operation Transformation (richiesta Carlo 8/6/2026)
---

# Review di sicurezza — Contratto Quadro HeyAI ↔ Soolutions + Ordini Esecutivi

> Punti dove **Carlo deve mettere gli occhi prima della firma** (e da passare all'avv. Longo). I 3 documenti analizzati: `Contratto_Quadro_HeyAI_Soolutions.docx`, `Ordine_Esecutivo_modello_base.docx`, `Ordine_Esecutivo_NOT_Operation_Transformation.docx`.
>
> **Quadro generale**: il Contratto Quadro è ben costruito e **strutturalmente a favore di HeyAI** (IP di default a HeyAI, non concorrenza forte, consegna codice con penale, manleva fuori cap). I rilievi sotto NON sono "il contratto è sbagliato" ma "questi sono i nodi dove un errore costa caro". Collega Open Questions #19/#29 (formalizzazione IP Soolutions, finora solo verbale).

## 🔴 Critici — review obbligatoria

### 1. Identità del cliente: NOT S.r.l. vs NOLOOP S.r.l. (incoerenza tra documenti e con la realtà)
- **CQ art. 15.1**: progetti pregressi "destinati al **Cliente NOT S.r.l.**" → tratta NOT come entità a sé.
- **OE Operation Transformation, §3**: "**Cliente finale: NOLOOP S.r.l.**, Milano, Via Palermo 8" con NOT come semplice "linea operativa retail/pop-up".
- **Realtà (Master Facts)**: le fatture Operation Transformation sono **intestate a NOT**, non a NoLoop. NOT = società sorella, **entità legalmente separata**.
- **Perché è critico**: tutta la catena di cessione IP (art. 8.8: Fornitore → HeyAI → Cliente) e il trasferimento finale (OE §11.3) si agganciano al "Contratto con il Cliente". Se l'OE cede a *NoLoop* ma il cliente reale/fatturato è *NOT*, l'IP viene trasferita al soggetto sbagliato e la condizione sospensiva all'incasso punta al contratto sbagliato.
- **Azione**: decidere l'entità cliente corretta (verosimilmente **NOT S.r.l.**, coerente con le fatture), uniformarla in CQ 15.1 + OE §3/§11.3, e inserire P.IVA/PEC reali. Allineare al "Contratto con il Cliente".

### 2. Il "Contratto con il Cliente" è una BOZZA NON FIRMATA — ma l'OE ci poggia sopra
- Master Facts: Operation Transformation = **bozza emessa, NON firmata né riscontrata da Donzelli; solo acconto pagato**.
- L'OE Soolutions richiama il "Contratto con il Cliente" in più punti: cessione IP al cliente (§11.3, art. 8.8), pay-when-paid (§9.1 "subordinatamente all'incasso… dal Cliente finale"), autorizzazione GDPR al sub-affidamento (§12.3).
- **Rischio**: si firma un OE con Soolutions la cui catena IP e i cui trigger di pagamento dipendono da un contratto cliente che **non esiste ancora formalmente**. Se NOT non firma / non salda il €109K, l'IP piena non si trasferisce mai (resta a Soolutions una licenza d'uso temporanea ex art. 8.5) e HeyAI resta esposta.
- **Azione**: firmare (o quantomeno far riscontrare) il contratto cliente NOT prima o contestualmente all'OE Soolutions. Non sganciare la formalizzazione fornitore da quella cliente.

### 3. Art. 12.1 CQ — cap di responsabilità "[una/due] volte" lasciato in bianco
- Cap **simmetrico** = limita anche quanto **HeyAI può recuperare da Soolutions**.
- HeyAI è esposta verso il cliente per l'intero valore commessa (€109K) + possibili danni operativi (blocco gestione pop-up). Con cap "una volta €55K" la rivalsa su Soolutions può non coprire l'esposizione di HeyAI a valle.
- **Mitigante forte (già nel testo)**: art. 12.3 esclude dal cap manleva, IP, riservatezza, non concorrenza, GDPR. Sotto cap resta solo il "danno da difetto/ritardo". Buono, ma non azzera il tema.
- **Azione**: scegliere **"due volte"** e verificare il **back-to-back** con il contratto cliente (il cap verso Soolutions dovrebbe coprire almeno l'esposizione di HeyAI verso il cliente).

### 4. Royalty (art. 6.2) e compenso riuso/replica (art. 6.3) vs modello di scaling HeyAI
- Il CQ apre alla possibilità che Soolutions maturi **royalty su ricavi ricorrenti SaaS** e **compensi per riuso/replica** su altri clienti.
- Nell'OE Operation Transformation entrambi sono barrati **"non applicabile"** → ok per *questo* progetto.
- **Ma**: l'OE stesso prevede **architettura multi-tenant "per futuri clienti" (req. T.1)**. Il modello HeyAI è riusare/scalare. Se domani HeyAI replica l'architettura Operation Transformation per un altro retailer, Soolutions potrebbe invocare l'art. 6.3.
- **Azione**: decidere la postura generale con Longo. Se HeyAI vuole tenere libero il riuso dell'architettura/know-how, chiarirlo (l'art. 8.9.a già consente al Fornitore il riuso del *proprio* know-how, ma il punto speculare — riuso da parte di *HeyAI* senza compenso — va blindato).
- **🔄 Aggiornamento call 9/6/2026 ("Allineamento fatture")**: il nodo è stato in parte affrontato. Soolutions ha chiarito che la **cessione IP è circoscritta all'ecosistema gestionale 100% custom** (frontend/backend/bridge/integrazioni/automazioni) ed **esclude i modelli AI** (predittivi matematici + riconoscimento immagine) perché basati su componenti open-source/pre-esistenti che **loro riusano** — è il riuso del *proprio* know-how lato Fornitore (coerente con art. 8.9.a). Al cliente il modello trainato è dato con **uso illimitato a vita** + ritrainabile; lock-in solo sull'evolutivo. **Resta aperto il punto speculare**: il riuso da parte di *HeyAI* dell'architettura/ecosistema custom (che HeyAI possiede via cessione) per altri clienti — va comunque blindato con Longo che non attivi art. 6.3. **Pendente**: Federico/Simone producono la **lista delle componenti terze non cedibili** → input per Carlo verso il cliente. Dettaglio → [[20 - Projects/NOT/Operation Transformation]] §Log 9/6.

### 5. GDPR — contraddizione tra impianto DPA e esclusione E.2 del Requirement Log
- Impianto CQ/OE: Soolutions = **sub-responsabile ex art. 28/32 GDPR** (tratta storico vendite 5 anni, genere/età clienti, dati operatori).
- Requirement Log **E.2**: "Gestione GDPR / data processing dati clienti finali = **ESCLUSO**… il Fornitore **non è responsabile** della compliance GDPR relativa ai dati dei clienti finali."
- **Rischio**: E.2 è formulato troppo ampio. Mescola due piani: la *compliance del titolare* (giustamente del cliente) e gli *obblighi del sub-responsabile* (misure di sicurezza art. 32, notifica breach), che **devono restare su Soolutions**. Così com'è, un data breach lato Soolutions potrebbe lasciare HeyAI (responsabile verso il cliente) senza rivalsa piena.
- **Azione**: riscrivere E.2 per distinguere i due piani; **firmare il DPA (Allegato 7) PRIMA dell'avvio del trattamento** — oggi è "in corso di finalizzazione" mentre la Discovery è già partita.

## 🟡 Da valutare — review consigliata

### 6. Pay-when-paid (OE §9.1) — verificare accettazione e Tranche 1 maturata
- HeyAI paga Soolutions **solo dopo aver incassato dal cliente** (ottimo per il cash flow HeyAI).
- Stato attuale: cliente ha **pagato l'acconto** a HeyAI, ma "pagamenti al Fornitore: **nessuno**" e Soolutions **sta già lavorando** (Discovery). Verificare: (a) Soolutions ha accettato il pay-when-paid; (b) la **Tranche 1 (€22K)** va riconosciuta ora che l'acconto cliente è incassato.

### 7. Termine "indicativo e non essenziale" (OE §6.2) indebolisce le penali da ritardo (CQ 4.6)
- Dichiarare il termine "non essenziale" rende **di fatto poco azionabili** le penali da ritardo verso Soolutions (€100/gg, art. 4.6).
- Se HeyAI ha un termine **essenziale** verso il cliente, c'è disallineamento (HeyAI in ritardo col cliente, ma senza leva su Soolutions). **Azione**: valutare termine essenziale almeno su M2/M3, o mantenere comunque azionabili le penali.

### 8. €55K Soolutions — confermare numero e perimetro
- €55K Soolutions / €109K cliente = **50,5%** → dentro policy (sweet spot 50%, margine €54K). Ratio sano. ✅
- **Ma** nel Master Facts **non risulta registrato** un preventivo Soolutions per Operation Transformation: è un numero nuovo. **Azione**: confermare con Soolutions che €55K è il **totale concordato** e che copre **entrambi i moduli** (Logistica + Vendite), non un parziale.

### 9. Costi servizi AI di terzi "a carico del Cliente" + account intestati al Cliente (OE §10)
- OE barra: API LLM, computer vision, hosting/inferenza, infra cloud → **a carico del Cliente** (default art. 6.5), **account intestati al Cliente finale**.
- **Da verificare**: (a) NOT è consapevole e ha accettato questi costi **ricorrenti** (nel contratto cliente non firmato)? (b) Account intestati al cliente = HeyAI/Soolutions perdono controllo operativo (rischio delivery/manutenzione) in cambio di scaricare i costi. Trade-off da decidere consapevolmente.

### 10. Manca l'OE per Eye Cookies
- CQ art. 15.1 cita **sia** "EyeCookie" **sia** "Operation Transformation" come progetti pregressi NOT. Qui c'è solo l'OE Operation Transformation.
- **Azione**: produrre anche l'**OE ricognitivo Eye Cookies** (€75K cliente / €36K Soolutries) — altrimenti Eye Cookies resta privo di copertura IP formalizzata. (Nota: usare "Eye Cookies", non "EyeCookie".)

### 11. Firmatari e poteri
- **Soolutions**: legale rappresentante = [●] da compilare. Verificare **chi** firma (Federico? Simone? terzo?) e che abbia i **poteri**; le clausole ex artt. 1341/1342 richiedono firma specifica del Fornitore.
- **HeyAI**: firma **Bruno Mattucci (AU)**, non Carlo. Formalmente corretto, ma è Bruno a obbligarsi → Carlo deve assicurarsi che Bruno **validi numeri e clausole** prima della firma.

### 12. Subappalto (CQ 5.2)
- Soolutions non può subappaltare senza consenso scritto. Clausola a favore di HeyAI. **Azione**: assicurarsi che l'esecuzione resti su personale Soolutions e che eventuali terzi (es. brand collegati) siano autorizzati per iscritto.

## 🟢 Placeholder da compilare prima della firma (rischio operativo)
- **CQ**: PEC Soolutions; importi penali art. 4.6 (€100/gg ritardo, €1.000/24h assistenza); penale art. 8.10 (€200/gg mancata consegna codice); garanzia vizi art. 9.5 (12 mesi); cap art. 12.1.
- **OE Operation Transformation**: P.IVA/PEC cliente (vedi punto 1); referente HeyAI (PM/Delivery); referente tecnico Soolutions; repo/ambienti/modalità credenziali; date inizio/fine; provider e piani servizi terzi; **Allegato 5** (componenti di terzi/OSS — Soolutions DEVE dichiararli per chiudere il rischio licenze/copyleft GPL); **testo DPA** (Allegato 7); classificazione **AI Act** §13.1 ("[da confermare]").

## ✅ Già a tuo favore (non toccare)
- IP di default a HeyAI (art. 8.4), con cessione **sospensivamente condizionata al pagamento** (art. 8.5).
- **Non concorrenza 36 mesi + penale €50.000** (art. 13) su Clienti/Lead Protetti.
- **Consegna codice sorgente** a fine progetto/cessazione + penale €200/gg (art. 8.10).
- **Manleva** IP/originalità/violazione diritti terzi, **esclusa dal cap** (artt. 9.4 + 12.3).
- **Confinamento dei dati di training** alla soluzione del singolo cliente (art. 10.4).
- Divieto di subappalto senza consenso (5.2); foro esclusivo Roma (19); doppia firma 1341/1342.

## 📌 Da triagiare nel vault (in attesa OK Carlo — sono bozze non firmate)
- **€55K costo Soolutions Operation Transformation** → Master Facts §Scenari fornitori + scheda [[Operation Transformation]] (oggi non registrato).
- **Esistenza bozza CQ + OE Soolutions** → avanzamento Open Questions **#19/#29** (formalizzazione IP HeyAI↔Soolutions: da "verbale" a "bozza prodotta").
- **OE Eye Cookies mancante** → eventuale task in [[Eye Cookies]].
