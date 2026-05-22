---
type: methodology
status: in-setup
created: 2026-05-06
updated: 2026-05-06
approved_by: Carlo Sanvoisin
approved_on: 2026-05-06
stakeholders: [Carlo Sanvoisin, Federico Saladino (Soolutions), Simone Montanari (Soolutions)]
---

# 🧭 Workflow Delivery Soolutions — Microsoft Lists "Soolutions Delivery Board"

> ✅ **APPROVATO 6/5/2026** da Carlo. Si parte con Microsoft Lists (1 settimana di prova al kickoff Wave 2 del 7/5 sera). Wrike NON si apre.
> 🔧 **Setup in corso 6/5 sera**: Lists creata, vista Board ✅ fatta, 3 viste rimanenti + guest access + double check da completare prima del kickoff.
>
> Vault Obsidian = single source of truth (privato, completo). Microsoft Lists = strato condiviso con Federico+Simone (solo task pubblici). Claude (= io) fa il sync.

## Stato setup (aggiornato 6/5/2026 sera)

| Step | Stato |
|---|---|
| Sito SharePoint creato | ✅ |
| Lists "Soolutions Delivery Board" creata da Excel | ✅ |
| Tipi colonna corretti (Scelta + Data) | ✅ |
| Vista Board (kanban per Stato) | ✅ |
| Vista "Le mie task aperte" | ⏳ |
| Vista "Per progetto" | ⏳ |
| Vista "P1 critiche" | ⏳ |
| Conditional formatting scadenze in ritardo | ⏳ |
| Color coding choice values | ⏳ |
| Doppio check 30 righe importate | ⏳ |
| Guest access Federico+Simone | ⏳ |
| Notifiche personali | ⏳ |
| Comunicazione al kickoff Wave 2 7/5 sera | ⏳ |

## Setup operativo

Guida operativa: [Setup Microsoft Lists - Soolutions Delivery Board](computer:///Users/carlosanvoisin/claude/99%20-%20System/Setup%20Microsoft%20Lists%20-%20Soolutions%20Delivery%20Board.md). File Excel di import iniziale (30 task pre-popolati): [Soolutions Delivery Board - Tasks da importare.xlsx](computer:///Users/carlosanvoisin/claude/99%20-%20System/Soolutions%20Delivery%20Board%20-%20Tasks%20da%20importare.xlsx).

## Problema reale

- Tu storicizzi nel vault (memoria completa, numeri sensibili, citazioni, pattern di negoziazione).
- Federico si "perde" gli aggiornamenti via email (sue parole, 6/5/2026).
- Wrike è il tentativo di forzare un terzo livello: ma è **un terzo strumento sopra vault+email**, quindi richiede inserimento manuale ridondante e finisce per essere abbandonato (è già successo: "lo Apri" è frase tua del 6/5 che lascia intendere il riapri-richiudi).
- Risultato attuale: la tua mail di follow-up è l'unico canale che davvero attraversa, ma scorre nel feed Outlook e non è una vista per task.

## Proposta — Microsoft Lists "Soolutions Delivery Board"

**Stack**: tutto dentro Microsoft 365 (già autenticato per te e per Federico+Simone come parte del cluster NoLoop). Niente nuovo tool, zero onboarding.

### Architettura

```
                 ┌──────────────────────────────────────┐
                 │  VAULT OBSIDIAN (single source)      │
                 │  - schede progetto                   │
                 │  - meetings                          │
                 │  - persone (citazioni, pattern)      │
                 │  - Open Tasks #p1/#p2/#p3            │
                 │  - numeri sensibili, IP, sensibilità │
                 └──────────────┬───────────────────────┘
                                │
                                │ Claude (io) sincronizzo
                                │ solo lo strato pubblico
                                ▼
                 ┌──────────────────────────────────────┐
                 │  MICROSOFT LISTS                     │
                 │  "Soolutions Delivery Board"         │
                 │  - Progetto · Task · Owner · Pri.    │
                 │  - Stato · Scadenza · Link rif.      │
                 │  - solo info condivisibili           │
                 └──────────────┬───────────────────────┘
                                │
                                │ Federico+Simone aprono dal
                                │ loro Microsoft 365 / Teams
                                ▼
                 ┌──────────────────────────────────────┐
                 │  Spuntano · Commentano · Bloccano    │
                 │  i task. Notifiche via Teams/Outlook │
                 └──────────────────────────────────────┘
```

### Schema list

| Campo | Tipo | Note |
|---|---|---|
| Progetto | Choice | Wave 2 / Eldis / Crowd / Venue Finder / Minutes / NOT / Achipoint / Eye Cookies / Altro |
| Task | Text | Sintesi 1 riga |
| Owner | Person | Carlo / Federico / Simone |
| Priorità | Choice | P1 / P2 / P3 |
| Stato | Choice | Aperto · In corso · Bloccato · Chiuso |
| Scadenza | Date | |
| Link riferimento | URL | mail / meeting / scheda vault |
| Note | Text | Brevi, blocker eventuali |

### Vista predefinita

- **Board view** (kanban) per Federico: colonne = Stato, card = Task. Vista familiare.
- **Filtered view "Le mie task aperte"** per ciascun owner.
- **Filtered view "Per progetto"** per Carlo (filtra per Progetto + Stato).

## Flusso operativo

### Quando Carlo fa una call / aggiorna il vault

1. Carlo passa transcript / appunti / brief a Claude (= io).
2. Io aggiorno il **vault Obsidian** con tutto (memoria completa, citazioni, sfumature, pattern, numeri).
3. Io aggiorno in parallelo la **Microsoft Lists** scrivendo solo i task condivisibili: niente numeri commerciali sensibili, niente pattern di negoziazione, niente esposizione finanziaria HeyAI, solo "cosa va fatto, da chi, entro quando".
4. Carlo invia la mail di follow-up come fa oggi (storico ufficiale, conservato in Outlook).

### Cosa fanno Federico+Simone

- Aprono la Lists dalla loro Microsoft 365.
- Filtrano per "le mie task aperte".
- Spuntano quando chiudono, mettono blocker quando bloccati, aggiungono commento se serve chiarimento.
- Niente da imparare: l'interfaccia è quella che già conoscono.

### Loop di rientro (questo è il valore aggiunto vs Wrike)

- Prima di ogni nuova call o nuovo follow-up, Carlo mi dice: "Claude, dimmi cosa è cambiato sulla Lists".
- Io leggo la Lists via MCP Microsoft Graph e ti riassumo: "Federico ha chiuso X, Simone ha messo blocker su Y, hai 2 commenti su Z".
- Tu apri la call con il quadro aggiornato. Niente "ah, non sapevo".

## Cosa elimina

- **Doppio inserimento Carlo**: aggiorni il vault, io replico sulla Lists. Una sola scrittura tua.
- **Doppio canale Federico+Simone**: Lists è l'unico posto dove guardano per "cosa devo fare". L'email resta ma è solo il messaggio di apertura, non il task tracker.
- **Black box Wrike**: Wrike richiede a tutti di andare lì attivamente. Nessuno lo fa. Lists vive dentro Microsoft 365 dove Federico+Simone già passano.

## Cosa NON elimina (limiti onesti)

- **Conversazioni vere** restano su Teams/email. Lists è solo per stato dei task, non chat.
- **Estetica**: Lists non è Notion. È funzionale, board view kanban va bene, ma non è bellissima.
- **Setup iniziale**: serve creare la list una volta, configurare guest access per Federico+Simone se non sono già nel tenant come membri full, definire gli choice value. Una volta sola, ~30 minuti.
- **Versioning meno strutturato di Linear**: ma per 40-50 task aperti è abbondante.

## Alternative scartate (con motivo)

| Alternativa | Pro | Contro | Scartata perché |
|---|---|---|---|
| Wrike | Strutturato | Terzo strumento, già provato e abbandonato | Federico lo vuole, ma il tasso di abbandono attuale dimostra che il problema non è lo strumento |
| Notion | UX migliore di Lists | Nuovo tool, onboarding, integrazione MS365 più zoppa | Federico lo metterà nello stesso secchio di Wrike |
| Linear | Top per dev | Dev-oriented, Carlo non lo userà naturalmente | Disequilibrio Carlo/dev |
| GitHub Projects | Light, integrazione issue | Richiede repo GitHub per il progetto, troppo dev | Mismatch col tipo di lavoro |
| Canale Teams "Delivery" + Claude bot | Zero attrito | Non è kanban, si perde col volume | Possibile per task <10/sett, non per il vostro volume |
| Obsidian Publish (vault read-only condiviso) | Sorgente unica | Federico+Simone non possono spuntare/commentare | Mancata bidirezionalità |

## Implementation plan (se Carlo dice "ok partiamo")

1. **Carlo crea la SharePoint site / Lists** sul tenant HeyAI (o riusa un sito esistente come HeyAIxNoLoop). 30 min.
2. **Carlo dà guest access** a `federico@soolutions.io` e `simone@soolutions.io`. 5 min.
3. **Claude popola la list iniziale** estraendo da `99 - System/Open Tasks.md` tutti i task con owner Federico/Simone/Carlo. 1 chat.
4. **Carlo presenta la list a Federico+Simone** al kickoff Wave 2 di domani sera 7/5: "questa è dove guardiamo i task, niente Wrike, niente nuova mail. Voi spuntate qui, io ricevo notifica."
5. **Settimana di shakedown**: Carlo aggiorna vault → Claude replica su Lists → Federico+Simone reagiscono. Si vedono le frizioni e si aggiusta il modello.
6. **Se funziona**: si retrocede Wrike a "non ne abbiamo più bisogno".
7. **Se non funziona** (Federico non spunta mai): si torna su Wrike o su canale Teams strutturato. Costo dell'esperimento: ~1 settimana.

## Punti di attenzione

- **Privacy del vault**: io devo mantenere la separazione tra "info per il vault" (numeri, citazioni, pattern, sensibilità) e "info per la Lists" (solo task condivisibili). Mai esporre sulla Lists info come l'esposizione finanziaria HeyAI, le citazioni testuali di Garbarino, i pattern di negoziazione, il dettaglio del bundle €300K, o altri dati che CLAUDE.md §11/13 indica come riservati.
- **Ownership della Lists**: tu sei admin. Io scrivo come "PM bot" tramite il tuo account o via service account. Idealmente service account così le scritture automatiche sono distinguibili dalle tue manuali.
- **Backup**: Lists ha versioning automatico. Il vault resta comunque la fonte di verità, quindi anche se la Lists viene corrotta non si perde nulla di sostanziale.

## Decisione presa (6/5/2026)

✅ **Microsoft Lists "Soolutions Delivery Board"** — 1 settimana di prova a partire dal kickoff Wave 2 del 7/5 sera.

Plan B se al 13/5 il setup non funziona (Federico non spunta mai, continua a chiedere via mail): canale Teams "Soolutions delivery" come ponte più leggero. Wrike resta scenario peggiore.

## Sync ricorrente — protocollo (riferimento per future sessioni Cowork)

Dopo questa decisione, le chat Cowork future devono:

1. **Dopo ogni call/transcript/aggiornamento del vault che genera task con owner Federico/Simone/Carlo+Federico/Carlo+Simone/Tutti**: scrivere/aggiornare la riga corrispondente sulla Lists via MCP Microsoft Graph.
2. **Mai esporre sulla Lists**:
   - Numeri commerciali sensibili (bundle €300K, tariffe orarie, esposizione finanziaria HeyAI, ROI per modulo)
   - Citazioni Garbarino/Donzelli/Merli
   - Pattern di negoziazione cliente
   - Sensibilità relazione interna NoLoop
   - Tematiche soci HeyAI o retributive
3. **Esporre sulla Lists solo**: Progetto, Task (1 riga), Owner, Priorità, Stato, Scadenza, Riferimento (scheda vault o meeting), Note brevi.
4. **Prima di una nuova call/follow-up**, leggere la Lists e fare digest a Carlo: "Federico ha chiuso X, Simone ha messo blocker su Y, hai N commenti su Z".

## Files generati

- `Soolutions Delivery Board - Tasks da importare.xlsx` — file Excel di import iniziale (30 task), in `/Users/carlosanvoisin/claude/`.
- `Setup Microsoft Lists - Soolutions Delivery Board.md` — guida step-by-step setup Lists + guest access + viste + notifiche, in `/Users/carlosanvoisin/claude/`.
