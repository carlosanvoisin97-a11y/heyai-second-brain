---
type: project
status: active
priority: p2
client: Futuritaly (studio legale)
created: 2026-04-30
updated: 2026-05-22
deadline: 2026-05-02
stakeholders: [Lavinia Ferrari, Danilo Piersanti (Silencio), Luca (Silencio), Andrea Pasquali, Claudia Bugno]
---
<!-- auto-updated by cowork-sessions-index 2026-05-15 20:22 (cron-22) | source-session: local_9912ed2f-67e2-4965-a04a-d6fc60b841e4 + local_6e91bbc8-05ec-43bf-aa1d-15aa160b421d | source-lastActive: 2026-05-15 -->
<!-- auto-updated by cowork-sessions-index 2026-05-13 18:30 | source-session: local_8cdd3749-4eb9-482d-b855-d92b1e912d66 | source-lastActive: 2026-05-13 16:46 -->
<!-- atomic-change updated: 2026-05-06 → 2026-05-13 | session: local_8cdd3749-4eb9-482d-b855-d92b1e912d66 -->
<!-- atomic-change stakeholders: +Claudia Bugno | session: local_8cdd3749-4eb9-482d-b855-d92b1e912d66 -->

# 📁 Futuritaly — Osservatorio AI per studio legale

> **Outcome**: Costruire un Osservatorio AI per Futuritaly, **studio di avvocati**.

## Stato

- **Status**: 🟢 Active — quotazione consegnata, mockup in delivery
- **Cliente**: Futuritaly (studio di avvocati)
- **Prossimo milestone**: **Mockup design entro 2 maggio 2026** (committed 3 giorni)
- **Ultimo aggiornamento**: 2026-04-29

## Cliente

Futuritaly è uno **studio legale di avvocati** che ha richiesto un Osservatorio AI come soluzione per il proprio business. NON ha relazione con il progetto [[HoReCa]] (di Matteo Cosma) anche se entrambi possono toccare temi simili.

## 💰 Quotazione _[aggiornato 19/5/2026 con Proposta v2]_

| Voce | Importo | Status |
|---|---|---|
| **MVP cliente Futuritaly** (proposta v2) | **€45.000** | ✅ Quotato in v2 — 19/5/2026 |
| Valore mercato standalone (ancoraggio) | €58.000 | Citato §8.1 e §8.2 v2 |
| Costo fornitore (Aegiscore/Silencio) | €20.000 | Da call Silencio 4/5/2026 |
| **Margine HeyAI** | **€25.000 (55.6%)** | Costo 44.4% — sano per skill |
| Tranche pagamento (45/30/25) | €20.250 + €13.500 + €11.250 | Sezione §10 v2 |
| Modello partnership | 15% rev share su ricavi netti, 5 anni, floor anno 2+ | Sezione §8.1 v2 |
| Riallineamento se no partnership | +€13.000 (€45→€58K) | Clausola §8.1 v2 |

**Storico quotazioni** (superate):
- ~~Fase 1 €14.000 + Multi-tenant Tier 1 €7.846~~ (30/4/2026, modello vecchio licenza)
- ~~€26K~~ (proposta storica Reference, modello licenza HeyAI)
- ~~€38K~~ (FINAL_1 storico, partnership 15% + IP transfer ma senza ROI esplicito)
- **€45K** ← v2 attuale (19/5/2026)

## ⚠️ Stato proposta _[conferma utente 30/04]_

> "Ancora non hanno accettato la proposta e sono in fase di **negoziazione con i fornitori**"

Cliente Futuritaly non ha ancora dato OK. Carlo sta in parallelo lavorando con i fornitori (probabilmente Jakala €38K outsourcing + altri) per capire come gestire la consegna in modo ottimale prima di chiudere il prezzo finale.

## 🆕 Update post call Silencio (4/5/2026)

- Quotazione **Silencio confermata a €20.000** per l'Osservatorio (non rimessa in discussione in call)
- Architettura multi-tenant: stesse fonti dati di [[Achipoint]] (single-tenant interno) → riutilizzo componenti
- **Azione raccomandata**: alzare prezzo cliente Futuritaly a **€42K** prima di inviare proposta finale (il perimetro è cresciuto, e questo compensa eventuali compressioni su PresidIA)
- Vedi: [[2026-05-04 - Allineamento Preventivi Sviluppo AI Silencio]]

## 🆕 Sblocco contenuti — call interna Carlo+Michele 5/5/2026

Stato attuale: **in attesa documentazione mancante dal cliente** (Lavinia/team Futuritaly). Senza quei materiali Michele non può chiudere la quotazione finale e la proposta resta ferma.

**Piano di sblocco concordato**:
- **Mercoledì 6/5 ore 14 circa**: Michele manda **push email** al cliente per richiedere la documentazione mancante. Tono: reminder a stretto giro, niente date precise ("se ci mandate i materiali a stretto giro, settimana prossima fissiamo call e siamo pronti a chiudere"). Battiamo i tempi senza forzare.
- **Subito dopo il push di Michele**: Carlo scrive a [[Lavinia Ferrari]] — usa come scusa il fatto di aver sentito un'altra persona di Futuritaly (Elena Chiti su [[_Angelini Academy|Angelini Academy]]) e ne approfitta per allinearsi.
- **Settimana prossima** (post ricezione documentazione): call con cliente per chiusura proposta.

## Stakeholders

- [[Lavinia Ferrari]] — Futuritaly (champion progetto, ha introdotto Marco Murolo PresidIA) · `ferrari@futuritaly.com`
- Direzione Futuritaly · `direzione@futuritaly.com`
- [[Michele Mattucci]] — owner interno HeyAI

### Stakeholders secondari (citati nei report)

- **Leonardo Delbufalo** — internal contact Futuritaly, vuole PowerPoint di vendita interna ("ambiziocircle")
- **Paolo Passaro** — 30 anni finanza agevolata, end-user, propone "sviluppo congiunto" (potenziale rivenditore futuro)
- **Lidia Boccanera** — end-user specializzata Interreg/EU
- **Claudia** — operativo Futuritaly (citata in chat "next steps noloop 2026" 13/04 e in chat "Recupero attività Carlo" 22/04 sul sito React v6: "5 Aree Intervento" pendente)
- **Andrea Pasquali** (Jakala/Deloitte ex) — benchmarker indipendente per stima costo (~€30K, da validare con Federico/Simone)

## Outsourcing potenziale

Jakala (vedi [[Jakala]]) ha proposto l'Osservatorio Strategico a **€38.000** (70 FTE) — Carlo intende negoziare il prezzo prima di affidarglielo.

## Task aperti

- [ ] **#p1** Mockup design — committed 2 maggio 2026 (3 giorni delivery dal 29/04)
- [ ] **#p1** Aggiornare offerta cliente Futuritaly a €42K (era €40K) prima dell'invio
- [ ] **#p2** Completare quotazione Multi-tenant Osservatorio completo (richiesto 27/04)
- [ ] Archiviare logo aggiornato e Company Profile aggiornato (ricevuti 29/04)
- [ ] ~~Negoziare prezzo Jakala per outsourcing~~ → **rimpiazzato da Silencio €20K**

## Eventi calendario

- 24/04 — `Futuritaly | Allineamento e Punti Aperti` (Carlo + Lavinia)
- 27/04 — `Futuritaly + Achipont` (Michele organizer)

## 🏗️ Soluzione Osservatorio (sintesi tecnica)

- **Ricerca bandi** + filtering (fonte/importo/scadenza/scoring/area)
- **Fonti**: ANAC/PDND, TED, UNGM, Incentivi.gov.it, EU Funding & Tenders
- **AI agent**: scoring applicabilità 0-100% sul profilo cliente
- **Output**: dashboard riepilogo + dettaglio bando con suggestion AI + template procurement/grants
- **MVP**: ANAC accreditamento 3-8 settimane (esterno) NON blocca MVP — go-live con fonti pronte, ANAC al completamento
  - ✅ _[confermato Carlo 7/6]_ FuturItaly è **già accreditata ANAC** (firma digitale risolta) → lo scoglio "3-8 settimane accreditamento" sopra **NON si applica**: go-live anticipabile a fonti complete.

## ⚠️ Vincolo IP bando MEF

- **Bando MEF richiede IP full-transfer** al cliente (constraint non negoziabile)
- Implicazione: se HeyAI partecipa via Futuritaly al bando MEF, perde la possibilità di mantenere IP
- Modello iniziale "IP retention HeyAI + licenza perpetua non sublicenziabile" (chat 09/02) → **superato dal vincolo MEF**

## 💬 Citazioni testuali da preservare

> "Il budget non lo diremo mai neanche sotto tortura"
> — **Leonardo Delbufalo** (Futuritaly), citazione riportata in chat 09/02/2026 (negoziazione verso il basso certa, prepararsi a anchoring proattivo)

> "Se FuturItaly cresce e rivende il servizio ai suoi clienti usando la tua piattaforma, tu non hai nessuna protezione. Licenza d'uso perpetua, non trasferibile e non sublicenziabile, riservata esclusivamente all'uso interno."
> — **Carlo / Claude**, chat 09/02 (rationale clausola IP nel modello pre-MEF)

## Pattern di negoziazione (Lavinia / Futuritaly)

- **Lavinia = facilitatore, non decisore finanziario**: introduce, presenta, ma il sì commerciale passa dalla Direzione
- **Cliente low-disclose sul budget**: anchoring proattivo necessario (range €22-28K → ricalibrato €42K post Silencio)
- **Approccio incrementale/MVP gradito**: cliente prende decisioni a step
- **Preferenza per deliverable visivi**: PowerPoint di vendita interna richiesto da Leonardo (oltre Word contrattuale)
- **Esclusiva pericolosa se non ristretta**: zone grigie su non-compete → ristringere a CCNL Commercio + performance conditions

## Log

### 2026-05-22 (merge bozza email Claudia + setup incontro Bruno)

- **Bozza email diretta Carlo→Claudia (CC Lavinia)** preparata: merge tra mail di condivisione proposta Osservatorio v2 e mail di richiesta slot incontro Bruno↔Claudia (lun 25/5 PM o mer 27/5 AM). Asciugata su richiesta Carlo per sensibilità "Claudia non legge email lunghe". 5 bullet invariati dalla bozza Carlo originale, prosa di raccordo accorciata. Allegato: proposta v2 €45K.
- **Workflow shift vs concordato 13/5**: la mail va direttamente a Claudia (TO) con Lavinia in CC, **salta** il passaggio intermedio di allineamento Carlo↔Lavinia prima dell'inoltro. Lavinia mantiene il raccordo via CC ma non gate più il messaggio.
- **Email Claudia ancora TBD**: da chiedere a Lavinia prima dell'invio (campo frontmatter `email:` di [[Claudia Bugno]] vuoto).
- Bozza in attesa di approvazione Carlo per invio. File: [[2026-05-22 - BOZZA Email Claudia Bugno Proposta Osservatorio + Incontro Bruno]].
- **22/5 sera — Asciugatura v2 su feedback Carlo**: apertura passata da "come anticipato tramite Lavinia" a "come da accordi" (pattern Carlo SKILL email-drafting §2026-05-20); rimossa "Prenditi pure il tempo che ti serve" (non in registro Carlo) e sostituita con "Fammi sapere quando avresti un momento la settimana prossima"; ultimo paragrafo Bruno riformulato "come discusso con Lavinia... avremmo disponibilità... fisso un meeting su Teams" (tolto "punto strategico ai vertici sui temi che stiamo costruendo insieme", semplificato a "primo incontro per conoscere"); bullet INVARIATI.
- **Avviata revisione tecnica approfondita docx v2 su richiesta Carlo** — output: [[2026-05-22 - Audit Pre-Invio Proposta Osservatorio v2]].
- **25/5 (lunedì) — correzione date v3 bozza email Claudia**: la v2 (22/5) era scritta come se fosse ancora venerdì, quindi proponeva l'incontro per "la settimana prossima". Oggi è lunedì 25 → la proposta passa a "questa settimana" e gli slot Bruno↔Claudia diventano **mercoledì 27 oppure giovedì 28 pomeriggio dopo le 16:30** (vs precedente lun 25/5 PM o mer 27/5 AM). Aggiornare anche scheda [[Bruno Mattucci]] (disponibilità nuove) prima dell'invio email.
- **25/5 (lunedì) sera — nuova rettifica disponibilità Bruno dopo parlata diretta Carlo↔Bruno**: Bruno conferma **mar 26/5 PM dopo 16:30** oppure **gio 28/5 PM dopo 16:30** (vs v3 mail Claudia che diceva mer 27 o gio 28). Carlo decide di passare il riferimento a Lavinia via **messaggio breve** (WhatsApp/Teams) per coordinare slot Claudia in modo informale, mentre la mail formale a Claudia resta in bozza in attesa di chiusura slot. **Discrepanza da risolvere**: la v3 bozza mail Claudia in [[2026-05-22 - BOZZA Email Claudia Bugno Proposta Osservatorio + Incontro Bruno]] ha ancora "mer 27 o gio 28". Se la mail parte dopo il messaggio Lavinia, va aggiornata con gli slot finali (probabilmente solo lo slot confermato da Claudia, non più 2 opzioni).

### 2026-05-21 (analisi preventivo Soolutions RIDOTTO def ricevuto da Simone)

**File ricevuto e archiviato in vault**: [Preventivo Soolutions Osservatorio RIDOTTO 21-5-26.xlsx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Futuritaly/Preventivo%20Soolutions%20Osservatorio%20RIDOTTO%2021-5-26.xlsx) — chiude il carry-over Carlo 20/5 *"la quotazione Soolutions adesso la vado a lavorare"*.

**Struttura quotazione Soolutions (5 tier core + 5 add-on opzionali, prezzi scontati 1/1.3 ≈ -23%)**:

| Voce | Lordo | **Scontato** | Cosa copre |
|---|---|---|---|
| Base (single-tenant core) | €20.400 | **€14.000** | Ingestione fonti, classificazione, agente AI, scoring, dashboard, sicurezza essenziale (perimetro brief originale) |
| Tier 1 — Multi-tenant | €10.200 | **€7.846** | tenant_id pervasivo, MFA TOTP, RBAC base, pannello admin titolare, hardening OWASP, test segregazione |
| Tier 2 — Multi-utenza team | €4.500 | **€3.462** | CRUD utenti tenant, RBAC granulare (lettore/operativo/manager), onboarding invito email |
| Tier 3 — Automazione commerciale | €9.900 | **€7.615** | Stripe (checkout + subscription B2B), webhook lifecycle, fatturazione IT (FattureInCloud/Aruba), dunning, self-service abbonamento |
| Tier 4 — New Features end-user | €12.300 | **€9.462** | Tiering piani end-user, agente conversazionale chat, push proattivo event-driven, preferenze notifiche |
| **TOTALE CORE** | **€57.300** | **€42.385** | — |
| Add-on 4.1 Check pre-ricerca | — | €1.200 | Domande chiarimento brief incompleto |
| Add-on 4.2 Nota vocale | — | €1.500 | STT in EU + refinement dominio |
| Add-on 4.3 Notifiche proattive | — | €4.300 | Scheduler giornaliero + matching batch + email transazionale |
| Add-on 4.4 Osservatorio preventivo | — | €16.800 | Ingestione normativa upstream (legge bilancio, decreti, programmazioni UE), classificazione multi-label, logica anticipativa |
| Add-on 4.5 Email/PDF generation | — | €10.800 | Template icebreaker tone-controlled + PDF engine (WeasyPrint) + tracking |
| **TOTALE ADD-ON** | **€34.600** | **€26.615** | — |

**Range totale Soolutions**: €14K (solo Base) → **€21.8K MVP multi-tenant** (Base+T1) → €25.3K (+team) → €42.4K (SaaS completo) → **€69K (tutto + add-on)**.

**Confronto fornitori a parità di perimetro MVP multi-tenant** (Base + Tier 1, quello che HeyAI vende a Futuritaly nella proposta v2 €45K):

| Fornitore | Quotazione MVP | % del prezzo cliente €45K | Margine HeyAI | Status policy |
|---|---|---|---|---|
| **Aegiscore (via Silencio)** | **€20.000** | 44.4% | €25.000 | ✅ ottimo (target 40-45%) |
| **Soolutions Base+T1** | **€21.846** | 48.5% | €23.154 | ✅ sano (sotto 50%) |
| Soolutions Base+T1+T2 (team) | €25.308 | 56.2% | €19.692 | ⚠️ tattico (50-60%) |
| Jakala (Luigiandrea 15/5) | €32.000 | 71.1% | €13.000 | ❌ fuori policy (>60%) |

**Gap Soolutions vs Aegiscore sul MVP-equivalent**: **+€1.846 (≈ +9%)**. Differenza minima, margine HeyAI scende da €25K a €23.2K (entrambi dentro policy).

**Osservazioni strategiche**:

1. **Soolutions è competitivo, non vince sul prezzo puro**: gap +€1.8K vs Aegiscore sul perimetro comparable. Vince invece sulla **granularità**: 10 leve di pricing (5 tier + 5 add-on) vs 1 lump-sum Aegiscore. Pattern Simone "foglio condiviso" (cit. 13/5/2026) ← abilita negoziazione bottom-up, coerente con scheda persona.
2. **Tier 3 (Stripe + fatturazione IT) è leva strategica per il modello rev-share Futuritaly**: la proposta v2 §8.1 prevede 15% rev share su tenant rivenduti. Senza automazione commerciale (Stripe + fatturazione elettronica), la rev-share è ingestibile operativamente. Aegiscore €20K NON copre questo. Tier 3 Soolutions = €7.6K incrementali → da valutare se entra in MVP cliente (alza il prezzo cliente o riduce margine) o resta upsell Fase 2.
3. **Add-on 4.4 "Osservatorio preventivo" (€16.8K) è la voce più cara e differenziante**: anticipa bandi leggendo normativa upstream — è la USP che giustifica il €45K vs €20K mercato puro. Da verificare se Futuritaly l'ha effettivamente nello scope finale (era nel capitolo 4 brief originale ma assente dalla v2 proposta).
4. **Tier 4 (chat conversazionale + push proattivo) = upsell anno 2**: €9.5K, percezione cliente alta, oggi fuori dal MVP. Coerente con la math §8.5 Fase 2 evolutive.
5. **Sconto 23% (1/1.3) lascia spazio negoziale residuo**: pattern Soolutions di esporre buffer interno → su bundle Tier 1-4 + add-on Carlo può tentare ulteriore -10% (target €60K dei €69K full). Su MVP €21.8K c'è poco spazio.
6. **Implicazione decisione fornitore Osservatorio**: lo scarto Aegiscore €20K vs Soolutions €21.8K è marginale (€1.8K = -7% margine HeyAI). A quel costo, la relazione consolidata Soolutions (IP HeyAI verbale, Wave 2 in delivery, Eldis attivo, modularità documentata per Fase 2) può vincere sulla pura ottimizzazione prezzo. **Silencio resta in lead da decisione 15/5**, ma Soolutions ora ha base numerica per riaprire il confronto. Non è scelta automatica — dipende da: (a) priorità relazionale Federico+Simone (Wave 2 sta partendo, vincolarli su altro progetto rafforza la pipeline interna), (b) leva tattica su PresidIA (Soolutions su Osservatorio libera Silencio per PresidIA con focus).
7. **Nuovo elemento commerciale**: il file si chiama "RIDOTTO def" → esiste plausibilmente una versione Soolutions "completa" più cara. Da chiarire con Simone se "RIDOTTO def" è la versione finale comparabile alle alternative o un range. Possibile domanda di follow-up.

- [ ] **#p1** Decidere fornitore Osservatorio (Silencio/Aegiscore €20K vs Soolutions €21.8K MVP) — gap €1.8K, leva relazionale Soolutions da pesare contro lead Silencio dal 15/5
- [ ] **#p2** Chiarire con Simone se Tier 3 (Stripe + fatturazione IT) è incluso nel modello SaaS che HeyAI venderà a Futuritaly per rev-share, o resta Fase 2
- [ ] **#p2** Verificare se Add-on 4.4 Osservatorio preventivo (€16.8K) è nello scope finale richiesto da Futuritaly o cancellabile dalla negoziazione

### 2026-05-20 (call interna HeyAI+Soolutions — riconoscimento Osservatorio + quotazione Soolutions aggiornata)
- **Riconoscimento Carlo a Federico+Simone in call**: nella mini-review fornitori Carlo dice *"Osservatorio mi pare essere stati abbastanza bravi, mi hai pure rimandato la quotazione aggiornata, la devo vedere meglio"*.
- **Quotazione Soolutions Osservatorio aggiornata ricevuta**: Federico/Simone hanno girato a Carlo l'aggiornamento quotazione Soolutions Osservatorio nei giorni recenti. **Carry-over esplicito Carlo (chat 20/5 post-call)**: *"la quotazione Soolutions adesso la vado a lavorare"* → Carlo in lavorazione attiva sul confronto con Silencio €20K (in lead da call 15/5). Numero Soolutions Osservatorio non ancora trascritto in vault — sarà aggiornato quando Carlo chiude il confronto.
- **Nessuna decisione nuova fornitore**: Silencio resta in lead da Log 15/5, Soolutions in race come opzione tattica leva per PresidIA. Decisione finale dopo lavoro di Carlo sulla quotazione aggiornata.

### 2026-05-19
- **Proposta v2 prodotta** — [HeyAI_Futuritaly_Proposta_Osservatorio_v2.docx](computer:///Users/carlosanvoisin/claude/20%20-%20Projects/Futuritaly/HeyAI_Futuritaly_Proposta_Osservatorio_v2.docx). Prezzo cliente alzato da €38K (FINAL_1 storico) a **€45K** (costo fornitore Aegiscore €20K = 44.4%, markup 2.25x — sano per skill `investment-proposal-drafting`). Mantenuti €58K valore mercato standalone come ancoraggio, clausole partnership 15% rev share, riallineamento €58K se no partnership, change of control retroattiva 18 mesi. **Aggiunta nuova §8.5 Ritorno sull'Investimento** (math dual-use: efficienza interna €12-14K/anno + ricavi commercializzazione tenant €5-18K anno 1 / €10-54K anno 2 → payback consolidato 14-20 mesi). Tranche 45/30/25 = €20.250 + €13.500 + €11.250 = €45K ✓. **Allineato a skill BLOCCANTE**: aggiunto footer1.xml (PEC, REA, CF, AU Bruno Mattucci + ornamento accent1 #156082), corretti margini a 2.50 top / 2.00 R/B/L (erano 2.12cm uniformi nel FINAL_1, non conformi). Versioni precedenti archiviate in `50 - Archive/Proposte Osservatorio Futuritaly/` (FINAL_1=def 2 + vfinal). Audit numerico §02 superato: 0 nomi fornitori (Soolutions/Silencio/Jakala/Aegiscore/Tokio/Federico/Simone/Danilo/Luca Fratini/Andrea Pasquali), 0 nomi+cognome HeyAI interni nel body, Bruno Mattucci AU correttamente solo in footer, validità 30gg, sezioni 8.5/11 coerenti, file apribile via python-docx (100 paragrafi, 9 tabelle, footer rilevato, margini verificati 2.5/2.0/2.0/2.0).
- **Bozza email Carlo → [[Lavinia Ferrari]] in preparazione**: comunicazione che la proposta Osservatorio aggiornata è pronta, propone call 30 min Carlo↔Lavinia per allineamento pre-invio a [[Claudia Bugno]] (workflow concordato 13/5). In parallelo introdotto il **setup meeting Bruno↔Claudia** ai vertici (canale parallelo amministratori): Bruno disponibilità lun 25/5 pomeriggio o mer 27/5 mattina, in attesa slot Claudia. Bozza in attesa approvazione Carlo per invio.

### 2026-05-15
- **Call interna Carlo+Michele 15:12**: confermata l'inclinazione fornitori → **Osservatorio va a Silencio (Danilo)** in coppia con PresidIA. Razionale Carlo: Jakala/Pasquali ha floor bundle €50K e l'unico progetto del pacchetto che resta conveniente con Jakala è PresidIA — ma con Silencio anche PresidIA torna bene, quindi Jakala esce dal pacchetto. Osservatorio + PresidIA → Silencio; Achipont → Soolutions (con eventuale opzione Silencio per leva margine PresidIA).

### 2026-05-13
- **Email Carlo → [[Lavinia Ferrari]]** (`ferrari@futuritaly.com`): anticipato arrivo proposta aggiornata. Comunicato che il confronto fornitori chiude entro oggi (rationale dato a Lavinia: "qualche giorno in più per portare a casa il prezzo migliore e stare dentro il vostro budget" — fornitori non nominati). Concordato workflow di invio della proposta: prima allineamento io-Lavinia, poi inoltro a [[Claudia Bugno|Claudia]], eventuale incontro/meet di discussione.
- Bozza email: [[2026-05-13 - Email Lavinia Recap Website e Osservatorio|Email 13/5]]

### 2026-05-06
- **Quotazione finale Jakala (5/5 sera)**: Osservatorio €35K (vs verbale 28-30K) → Andrea ha sbilanciato l'allocazione mettendo margine sull'Achipont (15K) invece che sull'Osservatorio
- **Carlo richiede rebalance** ad Andrea: Oss €28K + Achipont €22K + PresidIA €25K (totale 75K invariato). Motivazione data ad Andrea: "sull'Osservatorio devo coprire la rev share futura con Futuritaly, mi serve margine cuscino"
- **Framework margine×probabilità (corretto in vault 6/5)**: Oss → Silencio nettamente meglio (€22K margine vs €13K Jakala = gap €9K). Nello scenario split, Osservatorio è il candidato naturale del braccio Silencio.
- Vedi: [[50 - Archive/Inbox/2026-05/2026-05-05 - Decisione finale fornitori|2026-05-05 - Decisione finale fornitori]] · [[80 - Sources/Cowork Sessions/2026-05-06 - Indice sessioni#Sessione 8 — Analyze call performance and update vault]]

### 2026-05-05
- Call Pasquali (Jakala): Osservatorio negoziato verbalmente
- **05/05 sera — quotazione finale Jakala**: Osservatorio **€35K** (margine €7K = 17%, **sotto floor**). Carlo chiederà rebalance: Oss €28K + Achipont €22K (totale invariato per Jakala)
- Silencio resta a €20K Osservatorio (margine €22K = 52%)
- **Per progetto singolo, Silencio è nettamente migliore su Osservatorio** (gap €15K margine atteso)
- Decisione finale split vs fornitore unico entro 6/5
- Vedi: [[2026-05-05 - Call Pasquali Jakala]] · [[50 - Archive/Inbox/2026-05/2026-05-05 - Decisione finale fornitori|2026-05-05 - Decisione finale fornitori]]

### 2026-05-04
- Call Silencio: Osservatorio confermato a €20K dal fornitore (non rimesso in discussione)
- Decisione di alzare il prezzo cliente a €42K per coprire crescita perimetro e leva su PresidIA
- Vedi: [[2026-05-04 - Allineamento Preventivi Sviluppo AI Silencio]]

### 2026-04-29
- Direzione Futuritaly invia logo + Company Profile aggiornato
- Michele ringrazia, in attesa info su punti aperti

### 2026-04-07
- Incontro recap (citato in mail 29/04)

## Sessioni Cowork correlate

- 2026-05-22 — `local_d3f9499f` — Osservatorio AI proposal support: **audit pre-invio Proposta v2** (3 bloccanti: B1 §11 Governance vuota / B2 color titolo `#074F6A` invece di palette HeyAI `#2B8C96` / B3 payback 14-20 mesi NON quadra con worst-case math 31,8 mesi; 4 high H1-H4 contraddizioni interne 80-90% vs €12-14K / non-circumvention senza durata / "MEF" scivoloso / "drasticamente ridotti" da metricare; 4 medium + 3 low; effort fix bloccanti+high ~30 min, completo ~45-60 min; 12 check superati layout/header/footer/Aptos/no fornitori/tranche math/validità 30gg/foro Roma); **email v2 a Claudia Bugno** (CC Lavinia) merge dei due draft separati → email unica con (a) consegna Proposta v2 + richiesta call discussione, (b) richiesta slot incontro strategico Bruno↔Claudia (lun 25/5 PM o mer 27/5 AM); patch retoriche: *"stamattina→ieri"*, plurali singolarizzati per Claudia diretta, cognome esteso "Bruno Mattucci" alla prima citazione, ponte narrativo *"Colgo l'occasione per un altro punto..."*. Output: [[00 - Inbox/2026-05-22 - Audit Pre-Invio Proposta Osservatorio v2|Audit Pre-Invio Proposta Osservatorio v2]] + email paste-ready Outlook. → [[80 - Sources/Cowork Sessions/2026-05-24 - Indice sessioni#Sessione 4 — `local_d3f9499f-b218-4b2f-8f20-43d225fa0f0b` — Osservatorio AI proposal support (audit Pre-Invio Proposta v2 + email Claudia)]]
- 2026-05-06 — quotazione Jakala finale Oss €35K sbilanciata + richiesta rebalance + framework margine×probabilità → [[80 - Sources/Cowork Sessions/2026-05-06 - Indice sessioni#Sessione 8 — Analyze call performance and update vault]]
- 2026-05-15 — `local_6e91bbc8` — Review emails and decide on suppliers: confronto strutturale 3 versioni docx Osservatorio FuturItaly → `FINAL_1 2.docx` ≡ `def 2.docx` testualmente identici (14.939 char, diff=0); `vfinal 3.docx` versione precedente -17% snella; numeri economici identici (€38K MVP, €58K mercato, tranche); differenze qualitative in v finale (più matura): scoring pertinenza→coerenza, copertura incentivi 90-95→85-90% prudente, ANAC accreditato confermato, manutenzione 6→3 mesi, tranche 4→3 front-load 45/30/25, non-circumvention +retroattiva 18 mesi, RBAC 3→2 profili. **Proposta operativa pendente conferma Carlo**: caricare `FINAL_1 2.docx` come v1 di lavoro + archive `vfinal 3` → [[80 - Sources/Cowork Sessions/2026-05-15 - Indice sessioni#Sessione 5 — Review emails and decide on suppliers (confronto 3 versioni docx Osservatorio)]]
- 2026-05-15 pomeriggio — `local_9912ed2f` — Meeting recap call Carlo+Michele 51 min (Osservatorio collaterale): mossa tattica Carlo per allocare Achipont a Soolutions tiene **Silencio libero come leva su PresidIA + Osservatorio** (decisione fornitore Osservatorio non chiusa in call, attende invio Achipont lun 18/5 + risposta cliente Futuritaly su materiali pendenti) → [[80 - Sources/Cowork Sessions/2026-05-15 - Indice sessioni#Sessione 7 — Meeting recap call Carlo+Michele 15/5 (Angelini Academy · Futuritaly · Achipont)]]
- 2026-05-11 — `local_5976de11` — Analyze call performance and update vault: Osservatorio è il **punto di dolore principale** del pacchetto Jakala. Controproposta Carlo ad Andrea: 24K base + clausola +8K → **32K target** se Achipont non parte, **33K compromesso** accettabile (walk-away Andrea ~35K). Silencio: 20K standalone. HeyAI prezzo cliente: 42K (alzato post Silencio 4/5) → [[2026-05-11 - Indice sessioni#Sessione 5 — Analyze call performance and update vault (3 email fornitori — Andrea Pasquali + Danilo + Federico/Simone)]]
- 2026-05-13 — `local_8cdd3749` — Draft update email Future Italy: anticipo arrivo proposta Osservatorio aggiornata + workflow di invio concordato (prima allineamento Carlo↔Lavinia, poi inoltro a [[Claudia Bugno]], eventuale meet di discussione). Rationale comunicato a Lavinia "qualche giorno in più per portare a casa il prezzo migliore e stare dentro il vostro budget" (fornitori non nominati). Frontmatter: `updated` 2026-05-06 → 2026-05-13, `stakeholders` +Claudia Bugno. → [[80 - Sources/Cowork Sessions/2026-05-13 - Indice sessioni#Sessione 4 — Draft update email to Future Italy (Lavinia)]]
- 2026-05-19 — `local_b2af374e` (Draft email Lavinia) + `local_6e91bbc8` (continuation Proposta v2 finalizzata): Proposta Osservatorio **v2 a €45K** (era €38K v1 = `FINAL_1 2.docx` ≡ `def 2.docx`) — audit skill `investment-proposal-drafting` §9 superato (layout margini 2.50 top / 2.00 R/B/L · header HeyAI · **footer aggiunto** bordo #156082 + ornamento + dati legali completi). Numeri: €38K → €45K (3 occorrenze) · €58K mercato (3 occorrenze) · costo fornitore Silencio €20K → **44.4% del prezzo cliente** (sano, target HeyAI 40-45%) · markup 2.25x · tranche 45/30/25 = €45K esatto. Linguaggio: 0 nomi fornitori esposti (Soolutions/Silencio/Jakala/Aegiscore/Tokio + persone) · Bruno Mattucci AU solo nel footer. Nuova §8.5 dual-use (efficienza interna + ricavi tenant). Bozza email Lavinia 2-topic pulita (Osservatorio + setup meeting Bruno↔Claudia lun 25/5 PM o mer 27/5 AM); reminder sito Futuritaly escluso (topic già avanzato). 3 versioni docx precedenti archiviate in `50 - Archive/Proposte Osservatorio Futuritaly/`. → [[80 - Sources/Cowork Sessions/2026-05-19 - Indice sessioni|2026-05-19 - Indice sessioni]]
- 2026-05-21 — `local_c967ca15` — Osservatorio strategico AI proposal: ricezione **Preventivo Soolutions "RIDOTTO def"** Osservatorio (5 tier + 5 add-on, range €14K-€69K). Confronto MVP Base+T1 multi-tenant a parità di perimetro: Aegiscore €20K (55.6% margine ✅), Soolutions €21.846 (51.5% margine ✅), Jakala €32K (28.9% margine ❌). Decisione: tenere ferma scelta 15/5 Silencio in lead (gap €1.8K non giustifica riapertura), usare preventivo Soolutions come leva tattica per blindare floor Silencio. 3 raccomandazioni strategiche su Tier 3 (Stripe+fatturazione IT → Opzione C clausola Fase 2 in §8.6), Add-on 4.4 Osservatorio preventivo (posizionare come "Premium Anticipatorio" €25-30K cliente, USP rev-share), Add-on 4.3 Notifiche proattive (quick win nel MVP, +€4.3K costo fornitore → 58% policy-tactical). LTV Futuritaly riletto da €45K una tantum a **€70-85K su 24 mesi** con upselling roadmap. → [[80 - Sources/Cowork Sessions/2026-05-21 - Indice sessioni#Sessione 6 — `local_c967ca15-de82-415a-9882-0b14accaeb8d` — Osservatorio strategico AI proposal]]

## Log (atomic-field-change audit)

_atomic-field-change_ `updated`: 2026-05-06 → 2026-05-13 (sessione `local_8cdd3749-4eb9-482d-b855-d92b1e912d66`, lastActive 2026-05-13 16:46). Supersede: 2026-05-06 set 6/5/2026 ~20:08.
_atomic-field-change_ `stakeholders`: +Claudia Bugno (sessione `local_8cdd3749-4eb9-482d-b855-d92b1e912d66`, lastActive 2026-05-13 16:46). Supersede: first-set (la scheda non aveva Claudia Bugno nel frontmatter, anche se citata nel body).
_atomic-field-change_ `updated`: 2026-05-13 → 2026-05-19 (sessione `local_6e91bbc8-05ec-43bf-aa1d-15aa160b421d`, lastActive 2026-05-19 19:38 Rome / 17:38 UTC). Supersede: 2026-05-13 set da `local_8cdd3749`. Trigger: finalizzazione Proposta v2 €45K + storico prezzi €14K→€26K→€38K→**€45K**.
