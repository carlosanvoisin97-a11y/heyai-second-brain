---
type: prompt-template
usage: comunicazione-cliente
---

# 📧 Prompt 03 — Recap Call → Email Cliente

## Quando usarlo
Trasformare il transcript di una call cliente in una email professionale di recap. Frequente: dopo allineamenti con Marco Murolo (PresidIa), Lavinia Ferrari (Futuritaly), Luigi Achipont, Massi Sinigaglia (NOT), ecc.

## Template

> Analizza la trascrizione come farebbe un espertissimo PM ed estrapola, in questo ordine:
> 
> 1. **Decisioni prese** (con chi, cosa, quando applicabile)
> 2. **Punti aperti** (cosa serve chiarire)
> 3. **Action items con owner e deadline**
> 4. **Impatti economici** (importi, sconti, modifiche perimetro)
> 
> Poi scrivi una **email di recap al cliente {NOME}** con:
> - Apertura cordiale + sintesi 2 righe
> - Tabella o lista decisioni
> - Tabella action items con owner e scadenze
> - Closing con prossimo step concreto
> 
> Tono: professionale ma diretto, in italiano. **No jargon tecnico.** Concreto: tempi e numeri precisi.

## Stili adattati per cliente

- **Marco Murolo (PresidIa)**: tono comprensivo, tieni conto delle sue assenze "riorganizzazione ufficio". Scadenze morbide.
- **Lavinia Ferrari (Futuritaly)**: organizzata, responsiva. Vai dritto al punto.
- **Luigi (Achipont)**: low-tech, no tecnicismi. Benefici concreti (ore risparmiate, opportunità). Modulare.
- **Massi Sinigaglia (NOT)**: ironico ma vuole concretezza. Dati e cifre subito.
- **Laura Garbarino**: stime e tempi, no features. Roadmap visiva separata da tech spec.

## ⭐ Pattern recap Crowd / NoLoop (Arianna Giordanella, David Fasulo, Lorena Cavecchi)

> Pattern consolidato sulle minute Crowd. Storico di riferimento: email "R: Crowd — Sessione di allineamento" 24/04/2026 + recap call demo 13/05/2026 (post sessione 12/05). Stile **richiesto esplicitamente da Carlo** in fase di review della bozza 12/5.

**Destinatari standard**:
- **TO**: Arianna Giordanella, David Fasulo
- **CC**: Lorena Cavecchi, Federico Saladino, Simone Montanari

**Oggetto**: replica oggetto dell'invito calendar con prefisso `R:` (es. `R: Crowd | Sessione Finale Test`).

**Struttura**:

1. **Apertura una riga**: `Ciao a tutti,` poi vuota poi `di seguito la minuta relativa alla sessione di {tipo} di {oggi/ieri} su Crowd.` — `{tipo}` può essere "demo", "allineamento", "test", "demo finale". Se l'email parte il giorno dopo la call, si scrive `di ieri`.
2. **Sezione `**Punti discussi**` (preferita) o `**Decisioni prese**`** — usare "Punti discussi" quando in call ci sono stati allineamenti e valutazioni in corso oltre alle decisioni nette; usare "Decisioni prese" solo se davvero sono tutte decisioni chiuse. Bullet con `-`.
3. **Sezione `**Prossimi passi**`** — bullet con `-` separati dai punti discussi (no overlap di contenuto). Se la finestra temporale è unica per tutti, non mettere `(Owner: X, Due date: Y)` inline su ogni bullet: chi era in call sa cosa deve fare. Owner/Due date inline si usano solo quando i task hanno scadenze e proprietari diversi tra loro (vedi email 24/04/2026).
4. **Frase di disponibilità a supporto operativo** (opzionale, prima della chiusura standard) — solo se la call ha lasciato emergere fatica del cliente o serve un signal di affiancamento commerciale. NON va dentro i Prossimi passi.
5. **Chiusura standard**: `Resto a disposizione per qualsiasi chiarimento.` poi vuota poi `Grazie,` poi `Carlo`.

**Regole di tono e contenuto**:

- **Terza persona / forma passiva**: "Verificati gli enhancement…", "Pop-up attualmente non editabili", "In valutazione la possibilità di…", "Concordata la finestra di chiusura…". Non "abbiamo verificato", "voi ci dovete dare". Registro PM, leggermente meno colloquiale rispetto alle email ad altri clienti (Lavinia, Murolo).
- **Bullet concisi**: una riga per concetto. Mai paragrafi di 3-4 righe dentro un bullet.
- **Enhancement già noti al cliente → prosa con virgole, NON sotto-bullet**: quando si verificano in call enhancement già emersi nelle demo precedenti (e quindi noti a Arianna+David+Lorena), si elencano in una singola riga separati da virgole, es. "Verificati gli enhancement richiesti: editor rich text, generazione via Sally, conferma di lettura, interfaccia invio email con filtri e ricerca, cronologia invii, building block hotel/itinerario, roaming con disponibilità per singola notte, correzioni puntuali dai test." Sotto-bullet solo se si parla di feature **nuove** che il cliente non ha mai sentito.
- **Owner sul setup IT email per la produzione = HeyAI** (Carlo si allinea con Simone e con i sistemisti NoLoop). Lorena viene coinvolta solo se serve push interno. Mai delegare il bullet al cliente come "Riscontro NoLoop su…", la palla è nostra.
- **Cose da NON citare nelle minute Crowd** (eccezioni rispetto al transcript):
  - Il deploy tecnico delle modifiche (pipeline, server, ambiente di test) — è gergo di sviluppo, non interessa al cliente. Si scrive "fix e completamento degli enhancement", non "deploy in serata".
  - Funzionalità che il cliente ha esplicitamente confermato di non volere (es. PDF dei report 12/5) — non c'è motivo di reincludere nella minuta cose già archiviate.
  - Dettagli tecnici sulla gestione dei trigger / pixel di tracking / agenti / linguaggio naturale di Sally — interessano solo a noi, non al cliente.
  - Battute interne (free drink, "lista dei desideri", "Federico è stato buono") — non finiscono mai per email.
- **Mail di conferma automatica post-registrazione (12/5)**: trattata in 1 SOLO punto, con la doppia opzione perimetro/extra esplicitata: "configurazione semplice all'interno del perimetro: mail unica al register; configurazione complessa fuori perimetro: trigger system su completamento campi, gestita come extra".
- **Riferimenti tecnici nel setup IT (mittente, reply-to, domini)**: ammessi inline come backtick (es. `noreply@crowd.noloop.eu`) — è il livello giusto di dettaglio per Lorena+Marco IT.
- **Date target chiusura**: indicare sempre il `D+10gg` esplicito quando concordato in call (es. "10 giorni a partire dal 14 maggio") + ciò che segue ("ultimi fine tuning e chiusura con consegna ufficiale dell'applicativo"). Mai dire solo "entro fine mese" senza ancoraggio.
- **Test end-to-end**: framing standard NoLoop = "su un evento reale, anche in forma simulata (un contest interno, senza necessariamente utilizzare lo strumento sull'operativo dell'evento, ma con dati reali e flusso completo)". Cliente lavora in gestione eventi, capisce subito.

**Cosa controllare prima di mandare** (checklist):

- [ ] Apertura "Ciao a tutti," + "di seguito la minuta relativa alla sessione di {tipo} di {oggi/ieri} su Crowd"
- [ ] Sezione "Punti discussi" (no "Decisioni prese" se non tutto è chiuso)
- [ ] Sezione "Prossimi passi" separata dai punti discussi (no overlap)
- [ ] Bullet concisi, terza persona, no Owner/Due date inline se la finestra è unica
- [ ] Citato il D+10gg e il framing test end-to-end
- [ ] Frase di supporto affiancamento (se in call è emersa fatica cliente) PRIMA della chiusura standard, NON dentro Prossimi passi
- [ ] Chiusura: "Resto a disposizione per qualsiasi chiarimento. Grazie, Carlo"
- [ ] No deploy, no PDF (se confermato non necessario), no battute interne, no gergo tecnico di sviluppo

## Esempi nel vault

- Recap call cliente Elvis (Eldis) — chat "Recap call cliente Elvis"
- Email follow-up "Recap completo — Punti aperti" del 29/04
- Email post-allineamento PresidIA del 29/04
