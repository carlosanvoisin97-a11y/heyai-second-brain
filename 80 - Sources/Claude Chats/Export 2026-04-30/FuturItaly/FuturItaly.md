# FuturItaly

**Created:** 09/02/2026, 18:17:35
**Updated:** 09/02/2026, 20:04:00
**Exported:** 30/04/2026, 03:30:49
**Model:** claude-opus-4-6
**Link:** [https://claude.ai/chat/1b3dc2b8-9f27-4407-9c57-7df00b6967ab](https://claude.ai/chat/1b3dc2b8-9f27-4407-9c57-7df00b6967ab)

---

## User
**2026-02-09T17:17:36.836Z**

ora creiamo la quotazione per questo altro cliente, puoi usare come info quelle che vedi nel brief per i tecnici miei fornitori, se hai domande fammele prima

## Claude
**2026-02-09T17:18:22.362Z**

Fammi leggere il brief per capire bene il progetto prima di procedere.

Il file non sembra essere accessibile nel filesystem. Però il contenuto dovrebbe essere nel mio context window. Purtroppo non lo vedo caricato come testo — i file .docx non vengono estratti automaticamente nel contesto.

Puoi provare a:
1. **Copiare e incollare il testo del brief** direttamente qui in chat
2. **Esportarlo come PDF** e ricaricare quello

Nel frattempo, prima di creare la quotazione, ho alcune domande chiave:

1. **Chi è il cliente destinatario della quotazione?** (nome azienda, referente)
2. **Il prezzo lo devo calcolare con un markup rispetto a quanto quotano i tuoi fornitori, o hai già i prezzi finali da inserire?**
3. **Che formato vuoi per la quotazione?** (simile a quelle che abbiamo fatto in passato per Noloop/Eye Cookies, o un template diverso?)
4. **Ci sono condizioni commerciali specifiche?** (termini di pagamento, validità offerta, clausole particolari)

Se riesci a reinviare il file o incollare il contenuto, procedo subito!

## User
**2026-02-09T17:22:38.080Z**

Puoi utilizzare il PDF che ti ho allegato per prendere le informazioni relative al brief che ho fatto ai miei fornitori dovresti trovare quasi tutto. Se non trovi informazioni necessarie e Chiedimi prima di creare la nuova quotazione. Per quanto riguarda layout struttura e riferimenti puoi utilizzare la quotazione dell'altro progetto che abbiamo fatto insieme. Quello D noloop e condizioni specifiche solamente che siccome non abbiamo finito la requisitazione di dettaglio potrebbe variare leggermente il prezzo, quindi per questo motivo abbiamo deciso di includere un range e questo range va da i 19 ai 25 k

## Claude
**2026-02-09T17:23:05.757Z**

Ho letto entrambi i documenti. Prima di creare la quotazione, ho alcune domande:

Inoltre ti anticipo un paio di cose che ho notato e su cui ho bisogno di conferma:

**Sul piano di lavoro:** dal brief vedo che ANAC ha un blocco burocratico di 3-8 settimane per l'accreditamento PDND, mentre le altre fonti (TED, World Bank, Incentivi.gov.it, EU Funding) sono pronte. Vuoi che nel piano di lavoro evidenzi questa dipendenza esterna, oppure la timeline parte dal presupposto che l'accreditamento ANAC sia già avviato?

**Sulle voci di costo:** nel brief ci sono componenti diverse (integrazione API fonti dati, classificazione CPV, AI Agent per selezione semantica, dashboard con filtri, infrastruttura cloud, servizi AI/LLM). Vuoi che le spacchetti in modo simile a Eye Cookies (sviluppo software + infrastruttura cloud + servizi AI) oppure preferisci un dettaglio diverso per le voci?

**Range €19-25k:** confermo che lo inserisco come "Investimento stimato: €19.000 - €25.000" con nota che il prezzo definitivo sarà consolidato al completamento della fase di requisitazione di dettaglio?

## User
**2026-02-09T17:25:04.303Z**

evidenzia dipendenza, non spacchettare voce dai aggregato, range aiutami tu a calcolarlo bene (considera che il cliente non vuole spendere troppo quindi ci teniamo noi l IP e facciamo prezzo inferiore) deve essere anche un po un documento di vendita per convincerli qiuindi fai enfasi sui vantaggi (senza esagerare e sneza essere prolisso)

## Claude
**2026-02-09T17:25:22.261Z**

Perfetto, chiarissimo. Quindi il modello è: prezzo più basso perché HeyAI mantiene la IP e può riutilizzare il motore per altri clienti. Questo giustifica il range contenuto.

Ancora una cosa prima di partire:

E sul **piano di lavoro**: visto che il progetto è più contenuto rispetto a Eye Cookies (€19-25k vs €82k), stimo circa 8-10 settimane di sviluppo. Ti torna come timeline o hai un'idea diversa?

## User
**2026-02-09T17:35:32.877Z**

D: Modalità di pagamento per FuturItaly?
R: Solo pagamento standard (3 tranche)

D: Sezione Opportunità di Finanziamento (Sabatini, Credito d'Imposta)?
R: No, non serve

## Claude
**2026-02-09T17:39:02.776Z**

Perfetto, ho tutto. Procedo a creare la quotazione. Fammi leggere lo skill per i docx e poi la costruisco.

Ora creo la quotazione seguendo la struttura di Eye Cookies, adattata per FuturItaly con il modello IP-retained e range pricing.

Ecco la quotazione pronta. La struttura ricalca quella di Eye Cookies con gli adattamenti chiave:

**Scelte fatte sul pricing:** il range €19-25k è giustificato dal modello a licenza d'uso (IP resta a HeyAI), con cloud e API AI inclusi per i primi 3 mesi e costi ricorrenti stimati a €200-400/mese (più bassi di Eye Cookies, proporzionati al progetto). I pagamenti seguono lo stesso schema 40/30/30.

**Elementi "di vendita" inseriti:** box di valore in apertura ("Perché un Osservatorio Strategico?"), box dedicato al modello IP/licenza che spiega perché il prezzo è contenuto, sezione Vantaggi Competitivi con 5 punti chiave, e la nota sulla dipendenza ANAC/PDND in un box separato per trasparenza.

Dai un'occhiata e dimmi se vuoi modificare qualcosa — tono, importi, sezioni, o dettagli specifici.

## User
**2026-02-09T17:46:06.038Z**

secondo te ragionando bene sulla parte tecnica la quotazione in termini economici com'è?

## Claude
**2026-02-09T17:46:35.811Z**

Bella domanda, ragiono ad alta voce con te.

Il brief descrive un sistema con una complessità tecnica non banale. Vediamo i componenti reali:

**Cosa c'è da fare concretamente:**

L'integrazione di 5+ fonti dati con formati diversi (JSON, XML, eForms) e modalità di accesso diverse (API REST, PDND con accreditamento, bulk download) è già di per sé un lavoro significativo. Ogni fonte ha la sua struttura, i suoi limiti di rate, la sua logica di paginazione. Poi c'è l'AI Agent con selezione semantica, che non è un semplice prompt: serve ingegnerizzare il sistema di scoring, le regole configurabili per cliente, il parsing dei testi dei bandi (che spesso sono PDF allegati, non solo metadati strutturati). A questo si aggiunge la classificazione CPV/ATECO con albero gerarchico navigabile, il motore di filtraggio con 8 criteri combinabili, la dashboard web con filtri real-time e notifiche, e l'infrastruttura cloud con autenticazione.

**La mia valutazione onesta:**

Se dovessi stimare questo progetto "a mercato" con IP ceduta al cliente, siamo facilmente sui €45-65k — non distante dalla complessità di Eye Cookies, che hai quotato a €82k (ma quello aveva anche la parte advertising/remarketing che qui manca).

A €19-25k con il modello licenza d'uso, i tuoi fornitori devono comunque sviluppare tutto. Il margine per te come PM/intermediario si comprime molto. A meno che i tuoi sviluppatori non abbiano già componenti riutilizzabili (ad esempio un framework di integrazione API, un sistema di AI agent semi-pronto), il range €19-25k è aggressivo.

**Il mio suggerimento:**

Terrei il range ma lo alzerei leggermente a **€22.000 - €28.000**, e questo ti dà due vantaggi: hai respiro se la requisitazione di dettaglio fa emergere complessità (e con ANAC/PDND è probabile), e parti dalla fascia bassa in trattativa avendo margine per chiudere a €25k senza sentirti sotto costo. Se però l'obiettivo è entrare nel cliente e costruire una relazione di lungo periodo (upsell su manutenzione evolutiva, nuove fonti, nuovi moduli), allora €19-25k come "loss leader" ha senso strategico — basta esserne consapevoli.

Vuoi che aggiorno il documento con il range rivisto, o preferisci mantenere il €19-25k come leva commerciale?

## User
**2026-02-09T18:19:41.405Z**

riscrivi bene questa frase: La presente proposta riguarda lo sviluppo di un motore di ricerca basato su intelligenza artificiale per l’identificazione automatica di opportunità di business: gare d’appalto pubbliche, bandi di finanza agevolata, incentivi e finanziamenti a fondo perduto. L’Osservatorio Strategico AI non è un semplice aggregatore di bandi. È un sistema di selezione intelligente che utilizza l’AI per filtrare, analizzare e preselezionare solo le opportunità realmente pertinenti al profilo del Cliente, eliminando il rumore informativo e restituendo un vantaggio competitivo concreto: tempi di analisi drasticamente minori con alta qualità e coerenza di output, con un ripsarmio di ore/uomo e un aumento delle probabilità di comversione cliente nonché la possibilità di partecipare a più gare rispetto ad oggi.   solo questa qui in chat

## Claude
**2026-02-09T18:19:51.674Z**

Ecco la versione riscritta:

"La presente proposta riguarda lo sviluppo dell'Osservatorio Strategico AI, un motore di ricerca basato su intelligenza artificiale per l'identificazione automatica di opportunità di business: gare d'appalto pubbliche, bandi di finanza agevolata, incentivi e finanziamenti a fondo perduto.

L'Osservatorio non è un semplice aggregatore di bandi. È un sistema di selezione intelligente che utilizza l'AI per filtrare, analizzare e preselezionare solo le opportunità realmente pertinenti al profilo del Cliente, eliminando il rumore informativo. Il risultato è un vantaggio competitivo concreto: tempi di analisi drasticamente ridotti, risparmio significativo di ore/uomo, maggiore probabilità di conversione e la possibilità di candidarsi a un numero superiore di gare rispetto ad oggi."

## User
**2026-02-09T18:47:38.946Z**

trovi incoerenze con quanto detto in questa call?

## Claude
**2026-02-09T18:48:24.857Z**

Fammi leggere la minuta.

Ora ho il quadro completo. Confrontando la call con la quotazione, ecco le incoerenze che ho trovato:

**1. Formato del deliverable: la call dice PowerPoint, noi abbiamo fatto Word.**
Leonardo (Delbufalo) dice chiaramente che devono "venderlo internamente all'amministratore" e che preferisce una presentazione PowerPoint. Carlo conferma. La quotazione in formato Word va bene come documento contrattuale, ma dal cliente si aspettano anche (o al posto di) un PPTX di vendita interna.

**2. Il modello IP è stato discusso in modo più sfumato.**
Carlo nella call propone due vie: IP al cliente (costo più alto) oppure investimento congiunto con costi abbattuti. Paolo Passaro rilancia esplicitamente l'idea di "sviluppo congiunto" e di essere un "pilota" per poi proporlo sul mercato. Nella nostra quotazione abbiamo messo "licenza d'uso esclusiva e illimitata" che è una terza via — funziona, ma non riflette la conversazione sulla partnership/co-sviluppo che sembrava interessare molto al cliente. Potrebbe valere la pena almeno menzionare questa possibilità.

**3. L'approccio incrementale/MVP non è abbastanza enfatizzato.**
Nella call Carlo (tu) insisti molto sull'approccio MVP incrementale, e Leonardo è assolutamente d'accordo ("nel dubbio incrementale"). La quotazione presenta il progetto come un blocco unico da 8-11 settimane. Potrebbe essere più convincente strutturarlo come MVP + evoluzione futura, rendendo chiaro cosa si ottiene subito e cosa può essere aggiunto dopo.

**4. Manca il riferimento a Lidia Boccanera e al suo ambito (Interreg/internazionalizzazione).**
Nella call emerge che Lidia è un end-user chiave con un focus specifico sui bandi europei Interreg e cooperazione transfrontaliera. La quotazione non menziona questa dimensione, che per il cliente è importante.

**5. Il ruolo di Paolo Passaro come end-user esperto non è valorizzato.**
Dalla call emerge che Paolo ha 30 anni di esperienza in finanza agevolata e descrive in dettaglio il suo workflow attuale. La quotazione potrebbe fare leva su questo: "il sistema replicherà e automatizzerà il processo di selezione che oggi richiede ore di lavoro manuale da parte di professionisti esperti".

**6. Manca il concetto di "risultati attesi confrontabili".**
Carlo nella call chiede espressamente brief di esempio con risultati attesi per confrontarli con quelli dell'AI. Questo è un punto di valore da inserire — magari nella fase di testing del piano di lavoro.

Vuoi che corregga la quotazione su tutti questi punti, o alcuni li gestisci diversamente?

## User
**2026-02-09T18:49:28.165Z**

No, quelli li gestisco io voglio che rilegge la quotazione per come l'ho scritta e ti assicuri in tutti i modi possibili e sotto tutti i punti possibili e immaginabili che non ci siano rischi per me in quanto fornitore di questo servizio che mi analizzi come un avvocato del diavolo qualsiasi possibile criticità e verifiche che tutto c'è quello che ha scritto sia corretto e se non sei sicuro che lo sia mi fai delle domande a riguardo.

## Claude
**2026-02-09T18:50:20.086Z**

Fammi leggere attentamente la versione finale che hai scritto.

Ok, ho letto tutto con attenzione. Ecco la mia analisi da "avvocato del diavolo" — divido tra rischi contrattuali/legali, ambiguità pericolose e verifiche fattuali.

---

**RISCHI CONTRATTUALI SERI**

**1. "Licenza d'uso illimitata" senza definizione dei termini.**
Scrivi "licenza d'uso illimitata" ma non specifichi: illimitata nel tempo? Nel numero di utenti? Nella possibilità di sublicenziarla a terzi? Se FuturItaly cresce e rivende il servizio ai suoi clienti usando la tua piattaforma, tu non hai nessuna protezione. Ti consiglio fortemente di aggiungere almeno: "Licenza d'uso perpetua, non trasferibile e non sublicenziabile, riservata esclusivamente all'uso interno di FuturItaly."

**2. "Personalizzazioni di proprietà esclusiva del Cliente" — dove finisce la personalizzazione e dove inizia il motore?**
Questa è la zona grigia più pericolosa. Se domani c'è una disputa, chi decide cosa è "personalizzazione" e cosa è "motore di base"? Un prompt di AI Agent calibrato sulle regole di FuturItaly è personalizzazione o è parte del motore? I filtri CPV configurati per loro? Ti serve una definizione chiara oppure rischi che il cliente rivendichi pezzi del tuo motore come "personalizzazioni sue".

**3. Mancano completamente i costi ricorrenti post-MVP.**
Nella mia versione avevo messo "stimati €200-400/mese (cloud + API AI) a carico Cliente". Tu li hai tolti. Questo è rischioso perché il cliente potrebbe aspettarsi che dopo il go-live il sistema funzioni gratis a tempo indeterminato. Dopo 3 mesi (che hai incluso) chi paga cloud e API LLM? Se non è scritto, è un problema tuo.

**4. Nessuna clausola di limitazione di responsabilità.**
Se l'AI Agent manca un bando importante e il cliente perde un'opportunità da milioni di euro, sei esposto. Serve almeno una frase tipo: "Il sistema costituisce uno strumento di supporto alla ricerca. HeyAI non garantisce la completezza dei risultati né è responsabile per opportunità non identificate dal sistema."

**5. Nessuna clausola su dati e disponibilità delle fonti terze.**
Scrivi che ti connetti a ANAC, TED, UNGM ecc. Ma se domani TED cambia le API o ANAC blocca l'accesso, il cliente potrebbe dire che il sistema non fa quello che hai promesso. Ti serve: "La disponibilità e continuità delle fonti dati è soggetta alle politiche dei rispettivi enti erogatori, al di fuori del controllo di HeyAI."

**6. "Accreditamento ANAC gestito parallelamente, senza impatto sulla timeline."**
Attenzione: stai dicendo che consegni in 8-11 settimane E che ANAC non impatta la timeline. Ma se l'accreditamento non arriva in tempo (e l'iter può durare fino a 8 settimane), il sistema al go-live non avrà la fonte più importante — il 100% delle gare italiane. Il cliente potrebbe obiettare che il sistema non è completo. Dovresti specificare che il MVP è operativo con le fonti pronte e che ANAC verrà integrata al completamento dell'accreditamento, che è responsabilità congiunta (serve il legale rappresentante del cliente).

---

**AMBIGUITÀ PERICOLOSE**

**7. Range €18.000 – €26.000 senza criteri di determinazione.**
Scrivi che "il prezzo definitivo sarà consolidato al completamento della requisitazione di dettaglio" ma non dici cosa determina se si va verso i 18k o i 26k. Il cliente chiuderà mentalmente su 18k, tu probabilmente su 26k. Sarebbe meglio indicare almeno i fattori: "Il posizionamento nel range dipenderà dal numero finale di fonti integrate, dalla complessità delle regole AI e dal livello di personalizzazione della dashboard."

**8. "Training operativo per il team" — quanto?**
Un giorno? Una settimana? Da remoto o in presenza? Se il cliente si aspetta una settimana di formazione on-site e tu avevi previsto una call di 2 ore, hai un problema. Quantifica.

**9. "2 mesi assistenza post-lancio" — senza SLA.**
Quante ore? Tempo di risposta? Solo bug fixing o anche supporto funzionale? Se il cliente ti chiama 10 volte al giorno per 2 mesi, sei coperto? Definisci almeno un monte ore o un perimetro.

---

**VERIFICHE FATTUALI — DOMANDE PER TE**

**10.** Scrivi "aggiornamento automatico e real-time dove permesso" — sei sicuro che almeno una delle fonti offra dati real-time? TED ha aggiornamenti giornalieri, ANAC va via batch PDND. Incentivi.gov.it è bulk download periodico. "Real-time" potrebbe essere una promessa eccessiva.

**11.** Scrivi "scoring di applicabilità e coerenza (0-100%)" — questo scoring è un deliverable specifico. Sei sicuro che i tuoi sviluppatori possano produrre uno scoring affidabile e ripetibile con un LLM? Gli LLM non sono deterministici. Il cliente potrebbe aspettarsi una precisione che è difficile da garantire.

**12.** Hai tolto la sezione "Costi ricorrenti post-MVP" dalle condizioni generali — è una scelta voluta o una dimenticanza?

---

In sintesi, i punti più urgenti da sistemare prima di mandare il documento sono: la definizione della licenza (punto 1), la limitazione di responsabilità (punto 4), la clausola sulle fonti terze (punto 5), e i costi ricorrenti (punto 3). Il resto sono ottimizzazioni importanti ma meno critiche. Dimmi come vuoi procedere.

## User
**2026-02-09T18:51:37.992Z**

secondo te il prezzo è giusto o mi mette in difficoltà in qualche modo?

## Claude
**2026-02-09T18:52:09.613Z**

Ragiono con te in modo trasparente.

**Il problema principale è che il range €18-26k è ampio e la parte bassa è rischiosa.**

Partiamo da cosa devono fare concretamente i tuoi sviluppatori. L'integrazione di 5 fonti dati con formati e protocolli diversi (PDND è complessa, eForms di TED non è banale, bulk XML di Incentivi.gov.it richiede parsing), poi un AI Agent con scoring personalizzabile che deve analizzare testi di bandi spesso lunghi e complessi, una dashboard web con autenticazione, filtri combinabili e sistema di notifiche, più tutta l'infrastruttura cloud. Anche stimando tariffe da sviluppatore italiano medio (€250-350/giorno), stiamo parlando di almeno 50-70 giornate di sviluppo effettivo per un MVP decente, quindi €15-25k solo di costo fornitore.

A €18k tu stai praticamente girando il lavoro ai fornitori al costo, senza margine per il tuo ruolo di PM, per la gestione del cliente, per il testing, per il training, per i 2 mesi di assistenza post-lancio e per tutti gli imprevisti che in un progetto così ci saranno sicuramente (ANAC che non arriva, API che cambiano, il cliente che chiede modifiche "piccole" durante lo sviluppo). Aggiungi che hai incluso 3 mesi di cloud e API LLM, che anche se sono poche centinaia di euro al mese, sono comunque costi vivi.

**Il vero rischio è questo:** il cliente dalla call si è posizionato chiaramente sul "vogliamo spendere poco" e Leonardo ha detto "l'idea di budget c'è ma non la dirò mai neanche sotto tortura". Questo significa che negozieranno verso il basso. Se presenti €18k come floor, loro punteranno a chiudere lì, e a quel prezzo probabilmente ci perdi soldi o nella migliore delle ipotesi lavori gratis.

**Il mio suggerimento concreto:**

Alza il floor a €22k e tieni il tetto a €28k. Questo ti dà spazio per negoziare e chiudere intorno a €24-25k, che è un prezzo dove hai un margine reale (anche se non enorme) dopo aver pagato i fornitori. Se il cliente ti tira verso il basso, puoi "concedere" un €22k che è comunque un prezzo con cui non perdi soldi.

In alternativa, se vuoi tenere il range basso come leva commerciale per entrare nel cliente, allora proteggi il margine in altri modi: riduci lo scope dell'MVP (ad esempio parti con 3 fonti invece di 5, dashboard base senza notifiche automatiche), oppure riduci l'assistenza post-lancio a 1 mese, oppure togli il cloud incluso. Così il prezzo basso è giustificato da uno scope più contenuto e tutto ciò che aggiungi dopo è evolutivo e quotato a parte.

Un'ultima cosa: ricorda che dalla call Paolo Passaro ha lanciato l'idea dello "sviluppo congiunto" e di essere un "pilota". Se il cliente è davvero disposto a fare da beta-tester per un prodotto che poi tu rivendi, questo ha un valore reale per te e può giustificare un prezzo più basso. Ma allora formalizzalo: metti una clausola che ti autorizza a usare il case study, a raccogliere feedback strutturati, e magari a dare priorità inferiore rispetto a clienti paganti full-price. Non regalare lo sconto senza ottenere qualcosa in cambio.

Che ne pensi?

## User
**2026-02-09T18:56:22.249Z**

riscrivi qui in chat tutti i punti che cambieresti anche quelli di prima

## Claude
**2026-02-09T18:56:55.262Z**

Ecco tutto quello che cambierei, consolidato:

---

**SEZIONE 6 — INVESTIMENTO**

**Box licenza d'uso — riscrivere così:**
"Per contenere significativamente l'investimento, HeyAI mantiene la proprietà intellettuale del motore di base e concede al Cliente una licenza d'uso perpetua, non trasferibile e non sublicenziabile, riservata esclusivamente all'uso interno di FuturItaly. Tutte le personalizzazioni (regole AI, configurazioni filtri, parametri di scoring) sviluppate ad hoc per il Cliente sono di sua proprietà esclusiva. Questo modello consente a FuturItaly di accedere a una soluzione tecnologica avanzata a una frazione del costo di sviluppo completo, con piena operatività e autonomia d'utilizzo."

**Range prezzo — alzare a €22.000 – €28.000**

**Nota sotto la tabella investimento — riscrivere così:**
"Nota: Il prezzo definitivo sarà consolidato al completamento della fase di requisitazione di dettaglio, attualmente in corso. Il posizionamento nel range dipenderà dal numero finale di fonti dati integrate, dalla complessità delle regole di personalizzazione dell'AI Agent e dal livello di customizzazione della dashboard."

**Incluso nell'investimento — riscrivere così:**
"Licenza d'uso perpetua, non trasferibile e non sublicenziabile della piattaforma, personalizzazioni su misura di proprietà del Cliente, documentazione tecnica, training operativo per il team (sessione formativa da remoto, fino a 4 ore), 2 mesi di assistenza post-lancio (bug fixing, fino a 20 ore complessive di supporto)."

---

**SEZIONE 9 — CONDIZIONI GENERALI**

**Riga "Proprietà intellettuale" — riscrivere così:**
"Licenza d'uso perpetua, non trasferibile e non sublicenziabile concessa al Cliente per uso interno. La IP del motore di base resta di HeyAI. Le personalizzazioni sviluppate per FuturItaly (regole AI, configurazioni, parametri di scoring) sono di proprietà esclusiva del Cliente."

**Togliere la riga "Personalizzazioni" separata** — è ora assorbita nella riga IP sopra, tenerla separata crea ambiguità.

**Aggiungere riga "Costi ricorrenti post-MVP":**
"Stimati €200-400/mese (infrastruttura cloud + API AI), a carico del Cliente a partire dal 4° mese dal go-live."

**Aggiungere riga "Disponibilità fonti dati":**
"La disponibilità, continuità e formato delle fonti dati dipendono dalle politiche dei rispettivi enti erogatori (ANAC, TED, Commissione UE, ecc.) e sono al di fuori del controllo di HeyAI. Eventuali modifiche sostanziali alle API da parte degli enti potranno richiedere interventi di adeguamento da quotare separatamente."

**Aggiungere riga "Limitazione di responsabilità":**
"L'Osservatorio Strategico AI costituisce uno strumento di supporto alla ricerca e selezione di opportunità. HeyAI non garantisce la completezza esaustiva dei risultati né è responsabile per opportunità non identificate dal sistema. L'accuratezza dello scoring AI dipende dalla qualità e completezza dei dati pubblicati dalle fonti ufficiali."

**Aggiungere riga "Accreditamento ANAC/PDND":**
"L'accreditamento alla Piattaforma Digitale Nazionale Dati (PDND) richiede un iter burocratico di 3-8 settimane che necessita del legale rappresentante del Cliente. Il MVP sarà consegnato operativo con tutte le fonti pronte (TED, UNGM, Incentivi.gov.it, EU F&T). L'integrazione ANAC avverrà al completamento dell'accreditamento, senza costi aggiuntivi."

---

**SEZIONE 3 — SOLUZIONE TECNICA**

**Riga "Ingestione Dati Multi-Fonte" nella tabella moduli — togliere "real-time dove permesso", riscrivere così:**
"Connessione a fonti ufficiali (ANAC/PDND, TED, UNGM, World Bank, Incentivi.gov.it, EU Funding & Tenders) con aggiornamento automatico periodico (frequenza variabile in base alla fonte)."

**Riga "AI Agent" — riscrivere così:**
"LLM che analizza il testo completo di ogni bando, applica regole personalizzate del Cliente e genera uno scoring indicativo di applicabilità e coerenza (0-100%) con riassunto operativo. Lo scoring è da intendersi come supporto decisionale, non come valutazione deterministica."

---

**SEZIONE 5 — PIANO DI LAVORO**

**Nota ANAC — riscrivere così:**
"L'accreditamento ANAC tramite PDND richiede 3-8 settimane di iter burocratico e la partecipazione attiva del legale rappresentante del Cliente. Questa procedura verrà avviata contestualmente alla fase Foundation. Il MVP sarà consegnato operativo con tutte le altre fonti; l'integrazione ANAC avverrà al completamento dell'iter, senza costi aggiuntivi."

---

**SEZIONE 7 — MODALITÀ DI PAGAMENTO**

**Aggiornare i riferimenti al nuovo range €22-28k:**
- 40% a inizio lavori: €8.800 – €11.200
- 30% all'ingresso in fase di testing: €6.600 – €8.400
- 30% alla consegna definitiva post-test: €6.600 – €8.400

---

In totale sono 13 modifiche puntuali. Vuoi che ti riscrivo direttamente il documento aggiornato?

