---
type: email_draft
project: Eye Cookies
to: germanomarano.consultant@noloop.eu
cc: [Massi Sinigaglia, Andrea Pazienza]
cc_note: "Massi in CC come sponsor commerciale, Andrea in CC per allineamento HeyAI. Decisione finale CC a Carlo prima dell'invio."
subject_options:
  - "Recap call bisettimanale Eye Cookies (28/5) + next steps"
  - "Follow-up Eye Cookies — punti emersi nel bisettimanale di oggi"
thread: nuovo thread (Germano in call: "fate voi un email di follow-up? — Sì, ci penso io")
created: 2026-05-28
meeting_context: 2026-05-28 — Prima call bisettimanale Eye Cookies 13:35-14:17 (call assorbita nelle schede)
status: bozza da rivedere e inviare a cura di Carlo
---

# Bozza email follow-up call bisettimanale Eye Cookies #1

## Subject suggerito
> Recap call bisettimanale Eye Cookies (28/5) + next steps

## Body paste-ready Outlook

Ciao Germano,

grazie per la call di oggi, è stata una bella prima istanza del bisettimanale. Provo a ricapitolare in maniera compatta i punti emersi e i prossimi passi, così rimane tutto tracciato.

**Stato applicativo**
Il team di sviluppo ti ha mostrato dal vivo lo stato della dashboard di amministrazione (zone, tag, prodotti con campi commerciali + targeting, utenti con UID opaco, tracks su mock dataset, carrelli con tag profile + matrice pesi + items breakdown). L'algoritmo di cross-reference tra vetrine è il blocco su cui stiamo concentrando il lavoro di profilazione: identifica l'interesse reale per categoria, fascia prezzo e brand non guardando la singola vetrina ma intersecando il percorso utente nel pop-up. Stiamo procedendo in parallelo sul completamento dashboard + tuning algoritmo + integrazione totem.

**Bloccante endpoint Microlog (singola traccia utente)**
Come emerso in call, l'endpoint Microlog ci restituisce solo dati aggregati periodici, non la traccia singola del determinato utente. Per sbloccare l'implementazione del carrello virtuale ci servirebbe che Microlog generi qualche traccia realistica anche "fake/void" — il pattern che ti ha descritto Simone è quello di farci avere ad esempio 10 tracce con 10 mail fittizie associate, in modo da chiudere il loop di sviluppo end-to-end. Anche solo un primo set ridotto prima della chiusura del pop-up di Firenze sarebbe molto utile. Se puoi girare la richiesta al team Microlog te ne sarei grato.

**K-ippun Haru / Miroglio**
Ottima notizia l'exit verso Miroglio (40 negozi in apertura). Ci tieni aggiornati appena hai la conferma sul riposizionamento dei sensori — l'opzione "negozio vero" sarebbe per noi molto più interessante in chiave di test reali, ma siamo pronti anche allo scenario pop-up alternativo. Idealmente ci serve sapere il prima possibile per dimensionare correttamente il primo test in store.

**Totem — due opzioni da portare al cliente**
Come concordato, il team di sviluppo finalizza i render delle due opzioni che hai visto descrivere:
- Opzione A: hardware riciclato, neutro e durevole (telecamere-style), spostabile tra installazioni
- Opzione B: scenografico brandizzabile (plastica/legno/fieristico), ciclo vita più breve ma molto più economico e personalizzabile per ogni cliente

L'idea condivisa è di portarle entrambe al cliente, valorizzando in particolare l'opzione brandizzabile come gancio aggiuntivo per BAT. Su entrambe il terminale farà cache locale (edge computing) per resistere a eventuali outage di connettività, in linea con come funzionano già i sensori Microlog.

**Presentazione BAT**
Ti aiutiamo dal lato materiale: prepariamo demo della dashboard + render dei totem + sintesi del valore aggiunto analytics, in modo da darvi qualcosa di tangibile da mostrare a BAT quando rientrano dal periodo di apertura nuovi pop-up. Fammi sapere quando hai un primo riscontro da Massi sullo stato della relazione, così tariamo tempi e formato.

**Operation Transformation — tuo potenziale coinvolgimento tecnico**
Come emerso in call, il kit multi-SIM / aggregazione connessioni ha più senso su Operation che su Eye Cookies (i sensori Microlog hanno già cache di backup). Se Massi ti dà mandato a seguire anche Operation lato tecnico, sarebbe per noi molto utile averti come unico punto di contatto tecnico NoLoop su entrambi i progetti NOT. In quel caso ti proporrei di alternare i nostri bisettimanali — una call su Eye Cookies, la successiva su Operation. Fammi sapere appena hai un riscontro da Massi.

**Cadenza e slot ricorrente**
Oggi siamo stati su giovedì 13:35 invece dello slot 15:30 inizialmente ipotizzato. Per fissare la ricorrenza definitiva ti propongo di mantenere il giovedì pomeriggio: preferisci 13:30 o 15:30? Appena confermi mando l'invito Teams ricorrente.

**Roadmap aggiornata**
Sto consolidando con il team di sviluppo la roadmap aggiornata Eye Cookies che ti avevo promesso — te la giro a breve in modo da poterla ragionare insieme alla prossima call.

Fammi sapere se ti torna tutto e se ho dimenticato qualche punto. Per qualsiasi cosa resto a disposizione.

A presto,
Carlo

---

## Note operative pre-invio

- **Lunghezza**: ~430 parole — leggermente più lunga del solito (motivata dalla quantità di topic della prima call bisettimanale)
- **Stile §2.1**: rispettato. Mai citato Soolutions/Aegiscore — sempre "team di sviluppo" / "team hardware"
- **Verbi sostantivati** nei punti chiave (cadenza, roadmap, bloccante)
- **TO**: Germano. **CC suggerito**: Massi (sponsor commerciale, aggiornato in parallelo per BAT/tech-Operation) + Andrea Pazienza (allineamento interno HeyAI)
  - **Alternativa**: solo Germano, e Carlo aggiorna Massi separatamente con bozza più sintetica via altra email
  - **Decisione finale CC**: a Carlo prima dell'invio
- **Thread**: nuovo (non continua "R: EYE cookie" perché è recap di call standalone, e Germano si aspetta un follow-up dedicato)
- **Riservatezze §13**: rispettate — nessuna esposizione finanziaria HeyAI, nessuna citazione fornitori per nome, nessuna esposizione strategia commerciale Soolutions
- **Domanda aperta a Carlo**: confermare se mantenere giovedì come giorno bisettimanale (oggi 28/5 era giovedì) o spostare a martedì come ipotizzato nella mail del 20/5 ("giorni più scarichi HeyAI")

> ⚠️ **Verifica invio (nota 10/6)**: nessuna conferma di invio nel vault per questa bozza del 28/5 (il ciclo bisettimanale è poi proseguito, quindi probabilmente inviata). Carlo: check rapido in Outlook Sent Items → poi archiviare.
