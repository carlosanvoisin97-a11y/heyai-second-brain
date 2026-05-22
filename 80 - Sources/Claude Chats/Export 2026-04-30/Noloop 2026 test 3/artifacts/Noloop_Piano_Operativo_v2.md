# PIANO OPERATIVO — Aggiornato 12 Marzo 2026
## Executive Summary

---

## SITUAZIONE IN UNA FRASE

Garbarino ha dato il via libera informale su tutto, ma vuole risultati prima delle firme. Deadline LeadMe: 15 aprile. Venue Finder: "ieri". Il Gantt è la chiave per sbloccare Paolo sui flussi di cassa e far partire i contratti.

---

## PRIORITÀ IMMEDIATE (prossime 72h)

| # | Azione | Chi | Status |
|---|---|---|---|
| 1 | Mandare a Fede: requirement log VF + presentazioni Noloop + requisiti LeadMe | Carlo (stanotte/domani) | 🔴 |
| 2 | Trasferire €3K anticipo a Fede per VF | Carlo (domani) | 🔴 |
| 3 | Fede onboarda junior per VF e parte subito | Fede | 🔴 |
| 4 | Simone: call provider Amazon SES + integrazione Crowd | Simone (domani) | 🔴 |
| 5 | Preparare Gantt → Fede valida → Bruno lo presenta a LG | Carlo → Fede → Bruno | 🔴 |
| 6 | Fede: fix bug LeadMe (editing/salvataggio campi, utente mock "Direzione") | Fede | 🟠 |
| 7 | Mandare a Marco: documento processo logistico NOT | Carlo (entro lunedì) | 🟡 |

---

## WORKSTREAM PER WORKSTREAM

### 1. VENUE FINDER EVOLUTION — "La voglio stupire"
**Obiettivo:** Portare nell'ecosistema + presentazioni automatiche. Arrivare prima della deadline di LG.

- Carlo manda stanotte: master prompt, documenti, presentazioni PPT di esempio, requisiti
- Fede onboarda junior, decide se farlo lui o delegare
- Stack: Gemini per ricerca, Claude (via OpenRouter) per copy, integrazione Figma o PPTX per presentazioni
- Selezione foto in-page mano a mano + generazione presentazione con un click
- Budget: €8K quotati. Carlo anticipa €3K a Fede domani. Contratto non ancora firmato — Carlo si espone.
- **Strategia:** consegnare velocissimo → LG rimane impressionata → si sblocca la firma su tutto il resto

### 2. LEADME — "Efficientamento, non accelerazione"
**Deadline:** 15 aprile (LG: "lo voglio attivo prima che parto il 18")

**Scope confermato (solo questo, nulla di più):**
- Vista pipeline/funnel a colonne (status lead)
- Vista calendario (task e attività per data)
- Filtro fidelizzati vs new business
- Struttura holding → figlie
- Commerciale di riferimento visibile in pagina aziende
- Notifiche: lead dormienti, attività in scadenza, clienti senza brief
- Ordinamento alfabetico aziende
- Performance e velocità di consultazione
- Utente mock "Direzione" per clienti Garbarino

**FUORI scope (roadmap futura, ~8 mesi):**
Scraping proattivo, AI icebreaker, company scraping, NLP reporting, Sally integrata

**Deleghe confermate:** Ilia definisce requisiti → condivide con Zaghi/Marco/Carlo → LG: "non mi chiedere OK, dimmi solo il quanto"

**Bug fix immediati (Fede già al lavoro):**
- Salvataggio campi utente/commerciale che non persistono
- Inserimento manuale contatti: aggiunto ✅

**1:1 con Garbarino da fare:**
- Spiegare la storia: "hai pagato per un Excel, hai ricevuto un CRM. Le mie ore di PM = regalo."
- Marco allineato, supporta: "tu lo devi fare, a tu per tu"
- Lorena allineata: "chiamala a bruciapelo"
- Tono: non arrabbiato, non in difesa. "Sono uno di voi, ecco cosa è successo, ecco cosa serve."
- Dopo la 1:1: mandare quotazione voce per voce (target €15-20K)

### 3. CROWD — Chiudere la base
**Demo con Lorena: martedì (spostata da lunedì)**

Pending:
- Provider email → Amazon SES. **Simone fa la call domani.** Team IT Noloop (Avast) apre licenza.
- Fix rooming: tipologia camera non vincolante
- Plus One: Fede ci sta lavorando
- Builder Email: fix in corso

Novità Fede (feature bonus):
- Dashboard live hotel (link condivisibile, vista read-only real-time)
- Export rooming Excel

**Sequenza post-chiusura:** test su evento 20 pax → OnSite → Stripe → Landing premium. NON accelerare.

### 4. MINUTES — Evoluzioni
- Call esterne: si parte con lo sviluppo (quick win confermata)
- Campo "Evento" da definire
- Language switch: solo nei settings, una volta
- Anti-duplicati: da studiare
- Fine tuning: call Carlo + Fede questa settimana
- Sessione feedback con team Noloop da organizzare

### 5. FLOW — MVP (serve giustificazione scritta)
- LG inizialmente disse no. Bruno ha fatto passare il messaggio che è architetturale. LG ha capito.
- Carlo: "Fede, mettimi per iscritto perché senza Flow le altre soluzioni non funzionano." Serve un documento che giustifichi l'interdipendenza.
- Proposta cash flow per LG: "ti vengo incontro, paghi metà ora e metà a fine anno"
- Claude ha già prodotto una proposta MVP — Carlo la gira a Fede per review
- Scope MVP: task da Minutes + Kanban + push dati a Link. Niente mobile, niente Sally.

### 6. LINK, SALLY, ONSITE — Post firma contratto
Confermati come priorità strategiche. In attesa del Gantt → Paolo valuta cash flow → firma → si parte. Due opzioni per Link (base vs completa) già documentate.

---

## GANTT — La chiave per chiudere

**A cosa serve:** Paolo (CFO) deve vedere tempi di sviluppo + tranche pagamento per organizzare il cash flow e valutare agevolazioni fiscali.

**Come si presenta:** Bruno lo chiama alle 7:30 del mattino ("ce penso io"). Direzionale, non perfetto.

**Contenuto per riga:** firma contratto → acconto → inizio sviluppo → test → release → tranche.

**Sequenza:**
1. VF + Minutes call esterne (subito, in parallelo)
2. LeadMe efficientamento (deadline 15/4)
3. Crowd chiusura + Stripe
4. OnSite
5. Link (Opzione A e B)
6. Sally
7. Flow MVP

---

## DINAMICHE CRITICHE

### LG (Garbarino)
- In call con direttori: deve comandare, parte in quarta, non ascolta. Incassare e poi agire 1:1.
- A tu per tu: ascolta, si calma, riconosce gli errori ("scusate sono partita in quarta").
- Ha dato delega completa a Ilia per LeadMe e a Lorena per Crowd.
- "Non mi chiedere gli OK, dimmi solo il quanto."

### Zaghi
- LG l'ha sgridata ieri: "non hai mai avuto controllo sulle attività New Business"
- È terrorizzata di portare costi a LG. Non lo farà mai lei.
- Va coccolata e fatta sentire partecipe (Carlo: "ci lavoro da un anno, me la voglio tenere buona")
- Passare i requisiti LeadMe anche a lei per review, prima di andare da LG.

### Marco Pasquali
- Alleato totale. Ha obiettivi importanti da Paolo sul New Business.
- Ha bisogno della dashboard/pipeline per il suo stesso reporting a Paolo.
- Supporta la 1:1 con LG: "fallo, a tu per tu, non arrabbiato — spiega i fatti"
- Gli serve il documento processo logistico NOT per Paolo (entro lunedì/martedì)

### Ilia Gardelli
- Nominata da LG come punto di riferimento per LeadMe. Senior, pragmatica.
- Ha già fatto call con Carlo, requisiti allineati.
- Deve formalizzare e condividere con Zaghi/Marco.

### NOT
- LG ha detto "chiudiamo NOT, BAT non rinnova"
- Impatto su HeyAI: limitato al sito web. Il resto (logistica, strumenti) continua sotto Noloop.
- iCookies: probabilmente salta. Bruno: "ci siamo tolti un problema"
- **Per ora:** non investire effort su NOT-specifico. Concentrarsi su Noloop.
- Il documento processo logistico serve comunque a Marco per Paolo (va bene anche così).

### Federico
- Situazione delicata: ha lavorato gratis su LeadMe, si è rifiutato di fare l'Excel, ha regalato il CRM
- È stato motivato dalla call: "te lo faccio brillare come Crowd"
- Ha bisogno di: documentazione chiara, priorità nette, pagamento puntuale
- Richiamo di Carlo: "non fare di testa tua, segui i requisiti del cliente, chi prende la merda sono io"
- Deve essere più ordinato e non cambiare priorità ogni 2-3 giorni

---

## CHECKLIST

**STANOTTE/DOMANI**
- [ ] Mandare a Fede: cartella VF (master prompt + documenti + PPT esempio + requisiti)
- [ ] Mandare a Fede: requisiti LeadMe formalizzati da call con Ilia
- [ ] Trasferire €3K anticipo a Fede
- [ ] Confermare call Simone per Amazon SES domani

**ENTRO VENERDÌ**
- [ ] Completare Gantt → Fede valida → girare a Bruno
- [ ] Call Carlo + Fede fine tuning Minutes
- [ ] Passare requisiti LeadMe a Zaghi per review
- [ ] Preparare documento NOT per Marco (entro lunedì)

**SETTIMANA PROSSIMA**
- [ ] Martedì: demo Crowd con Lorena + Arianna (11:00-12:30)
- [ ] 1:1 con Garbarino (LeadMe storia + pricing)
- [ ] Bruno presenta Gantt a LG
- [ ] Fede: prime funzionalità VF visibili

**ENTRO 15 APRILE**
- [ ] LeadMe efficientato e live
- [ ] Venue Finder nell'ecosistema con presentazioni
- [ ] Contratto firmato (se Paolo dà OK su Gantt)