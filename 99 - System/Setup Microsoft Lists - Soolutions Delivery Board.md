# Setup Microsoft Lists — Soolutions Delivery Board

> Guida per Carlo, da completare prima del kickoff Wave 2 di domani sera 7/5. Tempo stimato totale: 25-30 minuti.

## Stato attuale (aggiornato 6/5/2026 sera)

- ✅ **Step 1**: Sito SharePoint creato
- ✅ **Step 2**: Lists "Soolutions Delivery Board" creata da Excel (con tipi colonna corretti)
- ⏳ **Step 3**: Verificare valori delle colonne Scelta e color coding
- ⏳ **Step 4**: Vista Board (kanban per Stato) ✅ creata. **Mancano 3 viste**: "Le mie task aperte", "Per progetto", "P1 critiche"
- ⏳ **Step 4bis** (NUOVO): Conditional formatting per task in ritardo
- ⏳ **Step 5**: Guest access per `federico@soolutions.io` e `simone@soolutions.io`
- ⏳ **Step 6**: Notifiche personali
- ⏳ **Step 7**: Doppio check delle 30 righe importate
- ⏳ **Step 8**: Comunicazione al kickoff Wave 2 di domani sera 7/5

## Obiettivo

Creare una Microsoft Lists condivisa con Federico Saladino e Simone Montanari per tracciare i task di delivery senza doppio inserimento.

Filosofia: il vault Obsidian resta la single source of truth (privato). La Lists è solo lo strato condiviso con i task pubblici (cosa va fatto, da chi, entro quando). Io faccio il sync in automatico dopo ogni call/update del vault.

## Step 1 — Scegli dove creare la Lists

Hai due opzioni:

**Opzione A (consigliata)**: usare un sito SharePoint **dedicato** "HeyAI - Delivery Soolutions". Pulito, isolato, niente rischio confusione con altri siti cliente.

**Opzione B**: usare un sito SharePoint esistente (es. quello dove gestisci la documentazione interna HeyAI). Risparmi 2 minuti di setup ma mescoli le acque.

Vai con A. Se non hai un sito dedicato, lo crei al volo: SharePoint → Crea sito → Sito del team → "HeyAI - Delivery Soolutions" → privacy "Privato (solo membri approvati)".

## Step 2 — Crea la Lists "Soolutions Delivery Board"

1. Dal sito SharePoint scelto: **+ Nuovo → Elenco**.
2. Scegli **Da Excel**.
3. Carica `Soolutions Delivery Board - Tasks da importare.xlsx` (te l'ho preparato io, lo trovi nel folder Cowork).
4. Seleziona la tabella **Tasks** (Microsoft Lists ti chiede di confermare la tabella sorgente).
5. ⚠️ **CRITICO** — nella schermata di **anteprima delle colonne**, **PRIMA di cliccare "Crea"**, riassegna i tipi di colonna usando il dropdown sopra ogni colonna:

| Colonna Excel | Tipo Lists da scegliere in preview |
|---|---|
| Progetto | **Scelta** |
| Task | Riga di testo singola |
| Owner | **Scelta** |
| Priorità | **Scelta** |
| Stato | **Scelta** |
| Scadenza | **Data e ora** |
| Riferimento | Riga di testo singola |
| Note | Più righe di testo |

> Se salti questo passaggio e clicchi "Crea" con tutti i campi come testo, la **vista Board (kanban) NON funzionerà**: l'opzione "Organize board by" mostrerà solo "Create new column" perché Lists non considera "Scelta" un campo di testo libero. SharePoint NON permette di cambiare il tipo di una colonna dopo la creazione, quindi si è costretti a demolire la Lists e rifarla. Cambiare il tipo in preview **costa 30 secondi**, dimenticarsene **costa 20 minuti di workaround**.

6. Lists popola **automaticamente** i valori delle colonne Scelta prendendo tutti i valori unici dalla colonna Excel. Verifica nello step 3 che siano tutti corretti, eventualmente aggiungine altri.
7. Nome della Lists: `Soolutions Delivery Board`.
8. Descrizione: `Dashboard task delivery HeyAI ↔ Soolutions. Sync automatico dal vault.`
9. Conferma e crea.

## Step 3 — Verifica/integra i valori delle colonne Scelta

Lists ha già popolato i valori con quelli unici trovati nell'Excel. Verifica che ci siano tutti questi e aggiungi quelli mancanti (per i futuri progetti che non sono nelle 30 righe iniziali):

**Progetto** (color tag se vuoi):
- Workflow
- Wave 2 NoLoop
- Eldis
- Crowd
- Venue Finder
- Minutes
- NOT
- Achipoint
- Eye Cookies
- Altro

**Owner**:
- Carlo
- Federico
- Simone
- Federico+Simone
- Carlo+Federico
- Carlo+Simone
- Tutti

**Priorità**:
- P1 (rosso)
- P2 (arancio)
- P3 (giallo)

**Stato**:
- Aperto (grigio)
- In corso (blu)
- Bloccato (rosso)
- Chiuso (verde)

## Step 4 — Crea le viste

Sulla Lists, in alto a destra: clicca sul **nome della vista corrente** → **Crea nuova vista**.

### ✅ Vista 1: "Board view" — kanban per Stato (FATTA)

Hai già configurato:
- Tipo: **Bacheca** (Board)
- Organize by: **Stato**

Verifica che ordini per Priorità (asc) e poi Scadenza (asc): vai su "Modifica vista corrente" → Ordina.

### ⏳ Vista 2: "Le mie task aperte"

- Tipo: **Elenco**
- Filtri: due filtri AND
  - **Stato** _is not equal to_ **Chiuso**
  - **Owner** _contains_ **Carlo**
- Ordina per: **Priorità** (ascendente), poi **Scadenza** (ascendente)
- Salva come vista personale (la tua, non condivisa). Federico+Simone si creeranno la loro filtrando per il proprio nome.

> Nota: poiché Owner è una colonna **Scelta** (testo), il filtro `contains "Carlo"` matcherà sia "Carlo" sia "Carlo+Federico" sia "Carlo+Simone" sia "Tutti". È esattamente quello che vogliamo: vede tutto ciò che ti tocca, non solo i task assegnati a te in solo.

### ⏳ Vista 3: "Per progetto"

- Tipo: **Elenco**
- Raggruppa per: **Progetto** (Group by → Progetto)
- Filtri: **Stato** _is not equal to_ **Chiuso**
- Ordina per: **Priorità** (asc), poi **Scadenza** (asc)
- Mostra: tutte le colonne tranne Note (per leggibilità — apri il dettaglio per vedere le note)

### ⏳ Vista 4: "P1 critiche"

- Tipo: **Elenco**
- Filtri: due filtri AND
  - **Priorità** _is equal to_ **P1**
  - **Stato** _is not equal to_ **Chiuso**
- Ordina per: **Scadenza** (ascendente, vuoti in fondo)
- Questa è la vista che apri tu ogni mattina come PM per vedere i fuochi.

## Step 4bis — Conditional formatting per task in ritardo (NUOVO)

Sulla vista lista (es. "Per progetto" o "P1 critiche"):

1. Click sulla colonna **Scadenza** → **Formatta colonna** → **Modalità avanzata** (JSON).
2. Incolla questo JSON per evidenziare in rosso le scadenze passate con stato non chiuso:

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/v2/column-formatting.schema.json",
  "elmType": "div",
  "txtContent": "@currentField",
  "style": {
    "color": "=if([$Scadenza] < @now && [$Stato] != 'Chiuso', '#a4262c', '')",
    "font-weight": "=if([$Scadenza] < @now && [$Stato] != 'Chiuso', 'bold', 'normal')"
  }
}
```

3. Salva. Le scadenze in ritardo si colorano di rosso bold.

> Se non sai dove trovare la modalità avanzata: click sulla colonna → "Impostazioni colonna" → "Formatta questa colonna" → in basso "Modalità avanzata".

## Step 5 — Aggiungi guest access per Federico e Simone

1. Dal sito SharePoint → **Impostazioni** (rotellina in alto a destra) → **Autorizzazioni del sito** → **Condividi sito**.
2. Aggiungi:
   - `federico@soolutions.io` — autorizzazione "Modifica" (può aggiornare task, non eliminare la Lists)
   - `simone@soolutions.io` — autorizzazione "Modifica"
3. Microsoft 365 invia una mail di invito automatica. Verifica con loro che gli sia arrivata e che riescano ad aprire la Lists.

**⚠️ Edge case da sapere**:

- Se il tenant HeyAI ha bloccato l'invito di guest esterni (admin policy), ti compare un errore. In quel caso devi prima andare su **Microsoft Entra → Identità esterne** e abilitare il dominio `soolutions.io` come consentito (oppure chiedere all'admin del tenant).
- Federico e Simone devono accettare l'invito creando un account Microsoft (gratuito) collegato alla loro mail Soolutions, se non ne hanno già uno.
- Una volta dentro, possono installare l'app **Microsoft Lists** sul mobile (iOS/Android) per ricevere notifiche push e spuntare task da telefono — utile mentre lavorano e non vogliono aprire il portale.

**Verifica privacy**: assicurati che il sito **NON sia accessibile a tutto HeyAI**. Solo a te + Federico + Simone. Controlla in **Autorizzazioni del sito** che non ci siano gruppi tipo "Visitatori HeyAI" o "Tutti i dipendenti" con accesso al sito.

## Step 6 — Notifiche

In alto sulla Lists: **Avvisami → Avvisami su questa lista**.

Configurazione consigliata per te (Carlo):
- Tipo modifica: **Tutte le modifiche** (creazione, modifica, eliminazione)
- Frequenza: **Notifica immediata** (mail) — oppure **Riepilogo giornaliero** se vuoi meno rumore.
- Avvisami solo quando: **Qualcun altro modifica un elemento** (così non ti arriva la mail per le modifiche fatte da te).

Per Federico+Simone, comunica loro al kickoff di domani sera che possono fare lo stesso filtrando su **Owner = [il loro nome]** così ricevono notifiche solo sui task che riguardano loro.

**Power Automate (opzionale, per dopo)**: se serve un livello in più — es. notifica Teams quando una task P1 cambia stato — si può creare un flow Power Automate con trigger "When an item is modified" + condizione su Priorità + azione "Post message in Teams channel". Setup ~15 minuti, non serve oggi ma è la strada se Federico chiede notifiche in canale Teams invece che in mail.

## Step 7 — Doppio check delle 30 righe importate (NUOVO)

Prima di condividere con Federico+Simone, scorri le 30 righe e verifica che siano tutte coerenti. Cose da controllare:

- **Owner**: è il valore giusto? Es. "Federico+Simone" su un task che è solo di Federico va corretto.
- **Scadenza**: è la data giusta nel formato giusto? Lists può aver interpretato male le date inglesi/italiane se l'Excel le aveva ambigue.
- **Stato**: tutti su "Aperto" o "In corso"? Niente importati come "Chiuso" per errore?
- **Priorità**: P1/P2/P3 valori correttamente popolati?
- **Riferimento**: i link alle schede del vault sono leggibili? (Non funzionano come URL veri perché il vault è locale a te — ma sono utili come navigazione testuale.)

Filtra rapidamente le righe per Owner = [Federico, Simone, Federico+Simone] in una vista temporanea per controllare solo quelle che li riguardano direttamente.

Se trovi inconsistenze, correggi in **Modifica griglia** (Quick Edit) — è la modalità Excel-like dentro Lists.

## Step 8 — Comunicazione al kickoff Wave 2 (7/5 sera)

Quando aprirai la call con Federico+Simone, dire qualcosa tipo:

> "Raga, vi ho creato una Lists su SharePoint che si chiama Soolutions Delivery Board. C'è già dentro tutto quello che ci siamo detti oggi più i task aperti. Voi vi loggate, filtrate per il vostro nome, vedete cosa avete da fare e spuntate quando finite. Ogni cambio mi arriva in notifica. Niente più giro su email. Wrike non lo apriamo."

Aspetta la reazione di Federico. Lui aveva chiesto Wrike. Se accetta Lists e prova a usarla per una settimana, hai vinto. Se insiste su Wrike, almeno hai un fall-back pulito da proporre.

**Tip**: prima della call, manda loro **anticipatamente** il link diretto alla Lists su Teams o WhatsApp (es. "Raga, ho preparato 'sta cosa, ci giochiamo domani sera, intanto datele un'occhiata se volete"). Così durante la call non perdi 5 minuti a fargli aprire il portale per la prima volta.

## Step 9 — Dimmi quando hai finito

Appena la Lists è online e Federico+Simone hanno l'accesso, scrivimelo. Da quel momento in poi:

- Dopo ogni call / aggiornamento del vault, **tu mi dici "aggiorna la Lists"** e io scrivo i task nuovi / aggiorno gli stati via MCP Microsoft Graph (lo stesso connettore che usi per le email Outlook e SharePoint).
- Prima di ogni call con Federico+Simone, **tu mi dici "fammi il check sulla Lists"** e io ti riassumo cosa hanno mosso loro: chiusure, nuovi commenti, blocker.

## Note di privacy (da rispettare nel sync automatico)

Quando io scrivo sulla Lists **NON ESPONGO**:

- Numeri commerciali sensibili (bundle €300K, tariffe orarie HeyAI, esposizione finanziaria, ROI dei moduli)
- Citazioni testuali Garbarino/Donzelli/Merli
- Pattern di negoziazione cliente
- Sensibilità relazione (es. "LG decide in stanza", "Donzelli focus iperammortamento")
- Eventuali conflitti soci HeyAI o tematiche retributive

**Espongo solo**: cosa fare, da chi, entro quando, con scheda di riferimento opzionale.

## Plan B se Federico/Simone non aderiscono entro 7 giorni

Se al 13/5 vediamo che Federico non spunta mai sulla Lists e continua a chiederti aggiornamenti via mail, il setup è fallito. Plan B:

1. **Canale Teams "Soolutions delivery"** dedicato, io ci posto i digest dopo ogni call. Più leggero, lavora come "feed".
2. Se neanche quello, Wrike vince e accettiamo che il task tracker resta tutto carico tuo.

Ma prima di abbandonare, dare alla Lists almeno 5 giorni lavorativi reali.

## Files allegati

- `Soolutions Delivery Board - Tasks da importare.xlsx` — il file Excel da caricare nello step 2 (30 task pre-popolati).
- Questa guida.

## ✅ Checklist finale "tutto pronto?" (prima del kickoff 7/5 sera)

- [ ] Lists creata con tutte le colonne tipizzate correttamente (Scelta + Data)
- [ ] Valori Choice verificati e color coding applicato (P1=rosso, P2=arancio, P3=giallo; Aperto/In corso/Bloccato/Chiuso)
- [ ] 4 viste create: Board ✅ + Le mie task aperte + Per progetto + P1 critiche
- [ ] Conditional formatting Scadenza in ritardo (rosso bold)
- [ ] 30 righe importate ricontrollate (Owner / Scadenza / Stato / Priorità coerenti)
- [ ] Guest access dato a Federico e Simone, verifica che il sito NON sia accessibile a tutta HeyAI
- [ ] Notifica immediata configurata sul tuo account
- [ ] Link diretto alla Lists pronto da condividere su WhatsApp/Teams
