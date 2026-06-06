---
type: system
created: 2026-06-07
updated: 2026-06-07
status: prima certificazione (F2 Fase 6)
tags: [system, kb-solidity, audit, F2]
---

# 🧪 KB Solidity Report — prima certificazione (7/6/2026)

> Prodotto in **F2 Fase 6** (Roadmap Second Brain Code-era). Una KB è solida se **completa** (le fonti sono rappresentate nelle schede) + **fedele** (i fatti reggono alla verifica avversariale) + **coerente** (nessuna contraddizione cross-schede).
> Metodo: coverage-diff fonti↔schede · back-tracing **avversariale** sui fatti ad alto rischio (3 verificatori read-only istruiti a *confutare*) · scan contraddizioni.
> ⚠️ **Read-only**: questo report NON ha modificato schede. Le bonifiche del §4 sono raccomandazioni per Carlo (toccano contract-state / numeri Master Facts → §5, conferma esplicita).

## 1. Verdetto sintetico

| Dimensione | Esito | Sintesi |
|---|---|---|
| **Completezza** | 🟢 ALTA | Ingest F2 di 171 grezzi + 48 "Altro" (11 subagent) → **quasi zero net-new**: la KB era già completa. |
| **Fedeltà** | 🟢 ALTA | I 3 cluster ad alto rischio (contratti NOT · esito Angelini · numeri Wave 2) hanno **superato** il back-tracing avversariale: tutti CONFERMATI contro fonte primaria. |
| **Coerenza** | 🟡 MEDIA | 9 rilievi, di cui **3 errori fattuali** (residui append-only pre-rettifica) + **1 difetto in documento ufficiale** (copertina PDF Wave 2). |

## 2. Completezza (coverage)

- Fonti `80 - Sources/`: **419 file** · Schede attive (20/30/60): **170** · Recap Code: 59 · Export Claude Chats 30/4: ~140.
- **Evidenza empirica**: in F2 Fasi 1-5, **11 subagent read-only** hanno confrontato i 171 grezzi import + i 48 "Altro" contro le schede → **NESSUN NET-NEW** su NOT/NoLoop/Achipont/Angelini; net-new minimo e mirato altrove (PresidIA call 9/4, Futuritaly CRM ~€90K, competitive intel NOT, Eldis Alyante). Conferma che il materiale fondativo (dic 2025 → apr 2026) era già distillato nelle schede mature.
- **Note di copertura**: i 7 "eventi" in Altro (Banco Desio/Fineco/ING/Dealer/ELCO) sono **output-sample dell'agente Venue Finder**, non eventi reali → nessuna copertura dovuta. Persone discovery 2025 non schedate = scelta consapevole (operativi periferici, §7).

## 3. Fedeltà — back-tracing avversariale (3 verificatori istruiti a confutare)

| Cluster | Claim | Verdetto | Fonte primaria | Caveat |
|---|---|---|---|---|
| **NOT — OT** | €109.000 (Vendite+Logistica), contratto **emesso NON firmato**, acconto incassato | ✅ CONFERMATO | chat e2e "Processo e2e NOT" (art. 5.1 €109K; contratto "da firmare Donzelli"); Calajò 27/4 fatture cortesia | email/acconto NON su documento primario (solo conferma verbale 21/5 + scambio Calajò) |
| **NOT — Eye Cookies** | €75K Full Ownership (da €82K il 02/04), **documento mai prodotto**, approvazione email Donzelli 03/04 | ✅ CONFERMATO (su €75K/€82K/doc-mai-prodotto) · ⚠️ NON-VERIFICABILE su doc primario per email 03/04 + acconto | `Allegato 1 Offerta MVP.pdf` (€82K); chat "Clausole revenue share" (€75K Full Own 02/04, aritmetica verificata) | margine costo/prezzo **73%** (€55K/€75K) → **oltre il limite §2.2 60%**; Federico vuole "più soldi" 28/5 → numero fragile finché non c'è contratto |
| **Angelini** | Esito pitch 5/6 = **soft-defer** | ✅ VERIFICATO | Report call 5/6 (citazioni dirette Caterina Caboni) + performance note 5/6 | trascrizione parziale (~20 min demo mancanti, dichiarato) |
| **Angelini** | Pricing (€48.5K/€49.5K floor/€52.778/€44.550) = **working-state, non contrattualizzato** | ✅ VERIFICATO | Registro Validazione 31/5 + Audit Pricing 27/5 | sono una sequenza che si supera nello stesso 3/6, non alternative parallele |
| **Wave 2** | Bundle **€300.000** (PDF 13/04 fonte ufficiale) | ✅ CONFERMATO | `Noloop_Wave2_Proposta_Investimento_updated_5_2026-04-13.pdf` pag. 2 + 10 (match 1:1 alle schede) | vedi §4.3 (copertina PDF dice €315K) |
| **Wave 2** | Numeri intermedi (€315K, -€12K, €353K) = **superati** | ✅ CONFERMATO | grep vault: vivono SOLO nei grezzi Claude Chats, mai attivi nelle schede | — |
| **Wave 2** | Venue Finder €8.000 + moduli coerenti | ✅ CONFERMATO | PDF 13/04 pag. 10 (somma moduli = €327K listino → €300K bundle) | — |

**Conclusione fedeltà**: nessun fatto ad alto rischio è stato confutato. Le rettifiche dolorose già fatte (21/5: contratti NOT "non firmati") reggono alla verifica. I gap sono **probatori** (mancano i documenti primari di email-approvazione/acconti, esistono solo come asserzioni da conferma verbale), non **fattuali**.

## 4. Registro contraddizioni & errori — bonifiche per Carlo

### 🔴 Alta (errori fattuali / documento cliente)

1. **`20 - Projects/NOT/Operation Transformation.md` — sezione "Materiali e contratto"** riporta ancora *"📄 Contratto firmato (03/04/2026 — Paolo Donzelli) — €109.000"*. **Contraddice** la rettifica 21/5 dello stesso file ("emesso NON firmato"). → Residuo append-only mai bonificato. **Bonifica**: allineare/barrare quella riga.
2. **`99 - System/Master Facts Sheet.md` — tabella Eye Cookies** ha ancora una riga *"Firma | 03/04/2026 (Paolo Donzelli)"*. **Contraddice** le righe "documento contrattuale MAI prodotto / approvazione commerciale (≠ firma)" dello stesso file. **Bonifica**: "Firma" → "Approvazione commerciale via email 03/04". *(Tocca Master Facts → §5, fallo tu o dammi l'ok.)*
3. **PDF ufficiale Wave 2** `Noloop_Wave2_..._updated_5_2026-04-13.pdf`: la **copertina (pag. 1) dice €315K**, il corpo (pag. 2+10) dice **€300K**. È il documento che va a cliente/Verrengia → **difetto da correggere prima di qualsiasi invio**. Inoltre il file `...updated 2105.pdf` citato nel Log 21/5 di `_Wave 2 NoLoop` **non esiste nel vault** (solo l'updated_5): riferimento da riconciliare.

### 🟡 Media (incoerenze numeriche / da confermare)

4. **PresidIA Revenue Share**: Master Facts riga 143 = **€40K**, righe 169/180 = **€44K**. Stesso file, due valori. → Decidere quale vince.
5. **PresidIA Jakala**: **€25K** (quotazione finale, righe 169/180) vs **€27K** (scenario split righe 198/199). Allineare o marcare lo scenario split come superato.
6. **Eye Cookies margine 73%** oltre il limite §2.2 (60%): compromesso consapevole già a vault, ma **fragile** (Federico "più soldi" 28/5). Da chiudere il numero prima di contrattualizzare.
7. **4 checkbox OT** chiusi in F2 Fase 2 marcati `[reconciled — verificare]` (call 1/6 avvenuta) → confermare le chiusure.
8. **Framing Angelini "gara ancora attiva"** (CLAUDE.md §6 / Master Facts): impreciso post-5/6. Realtà = la **gara comunicazione** (social+restyling+editoriale) è **PERSA** (concorrente, contratto lug'26→lug'27); resta solo uno **spiraglio separato sull'architettura**, deferito al **2027** e condizionato al budget. → Sharpening raccomandato.

## 5. Item aperti / non verificabili (per "la parte di Carlo")

- **Gap probatorio**: email approvazione Donzelli 03/04 (Eye Cookies) + fatture/acconti NOT non esistono come documenti primari nel vault — solo conferma verbale (rettifica 21/5) + scambio Calajò 27/4. Se servono a fini fiscali/Verrengia, recuperarli.
- **Numeri `[PROPOSTA]`** da confermare (F2 Fase 3): PresidIA €15-20K integrazione pagamenti · €7K/agente pattern-detection · 96-98% accuracy OCR; Futuritaly **CRM ~€90K**.
- **`axel.txt`** (🔴 §13, F2 Fase 5): conflitto retributivo soci + exit-advice → non committato, decisione Carlo.
- **Persone "Da triagiare"**: Andrea (NOT), Chiara Giuliani + Renato Savastano (Eldis).

## 6. Raccomandazioni

1. Bonificare i 3 errori 🔴 (1-2-3) — i primi due sono incoerenze interne ai file, il terzo è un difetto su documento cliente.
2. Sciogliere i 2 conflitti numerici PresidIA (4-5) con un valore canonico nel Master Facts.
3. Confermare i numeri `[PROPOSTA]` e le 4 chiusure OT, poi togliere i flag.
4. Adottare un **wiki-lint / link-audit** ricorrente (F3 tooling): questo report copre coverage + fedeltà + contraddizioni note, ma **non** ha fatto un check esaustivo di wikilink rotti/orfani (il task `vault-link-checker` è Cowork-bound, fermo). Vedi Roadmap F1/F3.

---

> Prossima certificazione: ri-eseguire dopo le bonifiche §4 e dopo l'attivazione del link-audit (F3). Questo report è la baseline.
