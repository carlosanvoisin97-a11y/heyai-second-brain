# Minute — Call Carlo & Simone

- **Data:** 25/02/2026
- **Durata:** ~35 minuti
- **Partecipanti:** Carlo Sanvoisin (PM/Consultant, Soolutions), Simone Montanari (Tech Lead, Soolutions)
- **Oggetto:** Allineamento operativo multi-progetto (Microlog/Cookies, Compliance Noloop, Email Provider, Elvis, Crowd, Quotazioni Noloop, IVE NewFinder/Sally, Minus)

---

## Executive Summary

Call di allineamento operativo su tutti i fronti attivi. Le decisioni principali riguardano: il blocco degli sviluppi Microlog fino a ricezione bozza contrattuale, la chiusura della parte compliance/questionari AI per Noloop con ruolo di puro supporto, il consiglio ad usare **Amazon SES** per l'invio email massivo, e la raccolta di nuovi requisiti da Lorena per l'evoluzione di **IVE NewFinder** (integrazione Sally + generazione presentazioni) e per **Minus** (device di registrazione portatile). Quotazioni Noloop attese entro la mattina del 26/02.

---

## Decisioni Prese

| # | Decisione | Owner | Note |
|---|-----------|-------|------|
| 1 | **Nessuno sviluppo Microlog** fino a ricezione bozza contrattuale | Carlo | Discovery sì, sviluppo no. Contratto deve includere impegno di vendita da controparte |
| 2 | Questionari AI Noloop: Soolutions ha ruolo di **supporto illustrativo**, non compilazione | Carlo/Simone | Documento già prodotto da Simone. Responsabilità compilazione resta a Marco Merli |
| 3 | Email provider massivo: consigliare **Amazon SES**, lasciare scelta al team IT di Noloop | Carlo | Non ci si assume responsabilità GDPR sull'invio |
| 4 | IVE NewFinder va posizionata come **evoluzione a pagamento** (upsell), non a carico Soolutions | Carlo/Simone | Copre costi e aggiunge valore |
| 5 | Budget Noloop: proporre **doppia opzione** (light vs full integration Business Central) | Carlo/Simone | Verifiche integrazione BC ancora in corso |

---

## Punti Discussi

### 1. Microlog / Cookies — API e Trial

- Microlog dovrebbe poter esporre API per flussi anonimi e aggregati senza grosse complessità
- Necessario ricevere **tutti i dati grezzi** (non solo track già abbinate) per le heatmap
- Da chiarire il funzionamento del **Sensor ID** e associazione dati/totem
- **Conclusione:** Aggiornare punto 5 della mail, integrare esiti call di domani mattina (26/02). Inserire clausola esplicita: nessuno sviluppo senza bozza contrattuale

### 2. Compliance / Questionari AI — Marco Merli (Noloop)

- Marco deve rispondere a questionari per **audit ISO 9001 e 27001** previsto a **maggio 2026**
- Simone ha prodotto un documento di supporto incrociando documentazione interna con i questionari, usando Claude
- Ruolo Soolutions: **consulente tecnico**, sviluppa e mantiene software. Nessuna titolarità dati, nessun ruolo admin
- Soolutions è responsabile solo di **risk assessment e mitigazione vulnerabilità** (penetration test), non della conservazione/trattamento dati
- Soolutions non è nominata esplicitamente nel documento — scelta voluta
- **Compliance ISO Soolutions:** pratiche avviate da Simone per eventuale certificazione futura; nel peggiore dei casi, si può strutturare un contratto separato di manutenzione software
- **Conclusione:** Carlo invia email a Marco con documento allegato + disclaimer (illustrativo, consigliare passaggio team legal per questionari su clienti reali)

### 3. Email Provider Massivo

- Lorena e Marco hanno chiesto supporto per l'invio massivo di email
- Simone sconsiglia di gestire l'invio direttamente via Soolutions (implicazioni GDPR)
- **Raccomandazione:** Amazon SES — link condiviso da Simone
- Sigla "SB" nell'email di Noloop non identificata — da chiarire [DA VERIFICARE]
- **Conclusione:** Carlo passa la raccomandazione e lascia la scelta al team IT di Noloop

### 4. Elvis (Progetto Noloop)

- Situazione migliorata dopo che Carlo ha comunicato a Stefania di fornire **requisiti in anticipo** per evitare rework
- Simone segnala che il rework residuo si è ridotto significativamente
- Problema minore: formato date (ISO vs italiano) — Simone lo sistema

### 5. Crowd — Demo e Timeline

- **Federico** sta lavorando intensamente sull'**assegnazione camere** (funzionalità complessa, non interrompibile)
- Lorena chiede di iniziare i test; Fede suggerisce di farla testare nel frattempo sulle parti già pronte
- **Demo live prevista lunedì 02/03** — Carlo necessita di una timeline entro il 26/02 per decidere se spostare a mercoledì 04/03
- Principio condiviso: meglio comunicare un ritardo con anticipo che arrivare all'ultimo disorganizzati

### 6. Quotazioni Noloop

- Simone deve allinearsi con Federico per finalizzare la requisitazione (alcune specifiche cambieranno dopo il confronto con Fede)
- **Deadline quotazioni: mattina del 26/02** — urgenza legata alla possibilità che Garbarino chieda presentazione già venerdì
- Carlo deve poi preparare il documento di presentazione formale

### 7. IVE NewFinder → Evoluzione Sally

- Lorena vuole portare il NewFinder (attualmente un Gem di Gemini) nell'**ecosistema Soolutions**
- Budget sbloccato da Carlo, subordinato al pagamento fattura atteso per **martedì 03/03**
- Architettura proposta: interfaccia chat-friendly integrata con Sally, sistema **multi-agente** con workflow dedicati (più affidabile e meno costoso del singolo agente)
- **Nuovo requisito da Lorena:** dopo la ricerca location, l'agente deve poter **generare presentazioni** (seleziona immagini + copy slide → output in Figma o altro strumento)
- Simone farà ricerca sulle opzioni tecniche per la generazione presentazioni
- **Posizionamento:** upsell come evoluzione con feature aggiuntive, non ripackaging

### 8. Minus — Device di Registrazione Portatile

- Lorena chiede alternativa per registrare riunioni dal cliente (dove non c'è Teams)
- **Due opzioni da quotare:**
  - **Opzione A:** Call su computer → app di recording & transcribe integrata
  - **Opzione B:** Device fisico portatile → collegato alla soluzione Minus
- Carlo invierà i requisiti extra a Simone per includerli nella quotazione

---

## Questioni Aperte / Parking Lot

| Tema | Contesto | Da chiarire con |
|------|----------|-----------------|
| Integrazione **Business Central** | Fattibilità tecnica non ancora verificata; serve playground a 4 mani con Noloop | Simone + team Noloop |
| Sigla **"SB"** nell'email Noloop | Riferimento a provider email sconosciuto | Carlo → Marco/Lorena |
| **Sensor ID** Microlog | Funzionamento e legame con posizione fisica dispositivo | Microlog (call imminente) |
| Strumento per **generazione presentazioni** | Figma o alternativa — Simone farà ricerca | Simone |
| **Compliance ISO** Soolutions | Pratiche avviate, da valutare se e quando necessarie | Simone |

---

## Action Items

| # | Azione | Responsabile | Deadline | Priorità |
|---|--------|--------------|----------|----------|
| 1 | Aggiornare email Microlog: integrare esiti call 26/02 + clausola "no sviluppo senza bozza contratto" | Carlo | 26/02 | Alta |
| 2 | Inviare email a Marco Merli con documento questionari AI + disclaimer (illustrativo, consiglio passaggio legal) | Carlo | 26/02 | Alta |
| 3 | Inviare raccomandazione Amazon SES a Noloop + chiarire sigla "SB" | Carlo | 26/02 | Media |
| 4 | Allinearsi con Federico su requisitazione e finalizzare **quotazioni Noloop** | Simone | 26/02 mattina | **Critica** |
| 5 | Ottenere da Fede **timeline Crowd** per decidere se spostare demo da lunedì a mercoledì | Carlo (via Simone/Fede) | 26/02 | Alta |
| 6 | Scrivere requisiti extra Noloop: doppia opzione budget (light/full BC), IVE NewFinder con presentazioni, Minus device | Carlo | 26/02 | Alta |
| 7 | Ricerca opzioni tecniche per **generazione presentazioni** (Figma o alternative) e includerla in quotazione | Simone | Da includere in quotazione | Media |
| 8 | Preparare documento di presentazione formale quotazioni per Noloop | Carlo | Post ricezione quotazioni | Alta |

---

## Next Steps — Carlo

1. **Oggi/domani mattina:** aggiornare e inviare email Microlog con clausola contrattuale
2. **Oggi/domani mattina:** email a Marco Merli (questionari + disclaimer)
3. **Oggi/domani mattina:** comunicare ad Amazon SES come raccomandazione + chiarire "SB"
4. **Domani (26/02):** scrivere e inviare a Simone i requisiti extra (budget doppia opzione, NewFinder presentazioni, Minus device)
5. **Domani (26/02):** ottenere timeline Crowd da Fede → decidere se spostare demo lunedì → comunicare a Lorena
6. **Post ricezione quotazioni:** preparare documentazione formale per Noloop — essere pronti per eventuale richiesta Garbarino venerdì

## Next Steps — Simone

1. **Stasera/domani prima mattina:** allinearsi con Federico su requisitazione Noloop
2. **Domani mattina (26/02):** finalizzare e inviare quotazioni a Carlo — **non oltre la mattinata**
3. **Check con Fede:** stato avanzamento Crowd e timeline per demo (lunedì vs mercoledì)
4. **In parallelo:** ricerca opzioni per generazione presentazioni (Figma/alternative) da includere in quotazione NewFinder
5. **Quotazione Minus:** includere le due opzioni device (app + device fisico) sulla base dei requisiti di Carlo

---

## Note Aggiuntive

- **Federico (Fede):** non presente alla call, sta lavorando full-time su assegnazione camere Crowd. Simone chiede di non interromperlo
- **Lorena Garbarino:** AD/CEO Noloop, fonte dei nuovi requisiti. Potrebbe chiedere presentazione già venerdì — mantenere alta la reattività
- **Marco Merli:** referente Noloop per compliance/IT, audit ISO previsto maggio 2026
- **Stefania (Elvis):** migliorata la collaborazione dopo feedback di Carlo sui requisiti anticipati
- **Cash flow Soolutions:** sotto pressione per ritardi nei pagamenti Noloop; il pagamento atteso martedì 03/03 sblocca il budget per IVE NewFinder
- **Certificazione ISO Soolutions:** pratiche avviate da Simone in via preventiva; potrebbe servire in futuro per compliance Noloop