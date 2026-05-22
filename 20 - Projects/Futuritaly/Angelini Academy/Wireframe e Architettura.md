---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
deliverable: Wireframe e architettura informativa per mockup navigabile
audience: Michele Mattucci (delivery mockup)
created: 2026-05-05
updated: 2026-05-05
deadline: 2026-05-07
---

# Angelini Academy — Wireframe e architettura informativa

> Documento di architettura informativa per il sito Angelini Academy. Input completo per [[Michele Mattucci]] in fase di costruzione del mockup navigabile (mercoledì 6/5). Va letto insieme a [[Analisi Brief]], [[Domande QA]] e al brief PDF originale `Academy Evolution_Comm briefing.pdf` (37 slide). Per stato progetto e decisioni commerciali vedi [[_Angelini Academy|Angelini Academy]]; per i vincoli operativi del mockup vedi [[Brief Mockup]].

## 0. Punto di partenza — il sito esistente

Verificato direttamente su `angeliniacademy.com` (5/5/2026, via WebSearch — fetch diretto bloccato dall'allowlist). Il brief in slide 24 sottostima il sito attuale: il menu reale non è "Su di noi · Formazione per tutti · Blog" ma una struttura più articolata. Va tenuto a mente in due direzioni — perché abbiamo asset riusabili concreti, e perché alcune assunzioni del brief vanno corrette.

### 0.1 Mappa del sito attuale (verificata)

Sito **bilingue nativo** con homepage `/it/` e `/en/`. Sezioni di livello 1: `/academy/` ("Growing Together", about), `/academy/training-stories/` (case studies dei programmi, es. Future Leaders Program), `/training-offer/` ("Formazione per tutti") con sotto-pagine per singolo programma (Artificial Intelligence, Design Thinking, Professions of the Future, The Secret of Italian Entrepreneurship, I nostri programmi), `/leadership-and-managerial-development/`, `/support-to-the-new-generation/` (gateway giovani, precursore concettuale del MBA Gateway), `/blog/` (articoli su lifelong learning, AI nel management, generazioni in azienda, skill instability), `/our-contacts/`.

### 0.2 Asset riusabili nel mockup

Programmi reali documentati con foto/copy che entrano nel mockup come contenuti veri: **Angelini Future Leaders Program** (18 mesi, in inglese), **#AngeliniNextGeneration** (4 masterclass con Talent Garden), **Master Business and People Management** (con Istud), **Mentoring program** (con LUISS BS), **Angelini Industries Essential Toolkit** per neoassunti. Numero pubblico utilizzabile in home: **~1.200 partecipanti formati ogni anno**. Press release ufficiale Angelini Industries del MBA Gateway con IE Business School già pubblicato — rimando autoritativo per il pilastro 4.

### 0.3 Tre correzioni alle assunzioni del brief

Il sito è **già bilingue IT/EN**: il bilinguismo non è da introdurre ma da preservare. La domanda A3 in [[Domande QA]] cambia oggetto — da "è richiesto?" a "manteniamo entrambe le lingue al lancio?". Il rebranding cambia framing, non lingua: il sito attuale parla di Angelini Academy come "corporate academy di Angelini Industries"; la nuova SRL deve essere narrata come società autonoma con vision e purpose nuovi. Sul piano SEO: le URL attuali hanno equity (alcune indicizzate da anni); raccomandazione per Michele è prevedere già nel mockup una **mappa di redirect 301** dalle URL vecchie alle nuove.

## 1. Premesse architetturali

Il sito deve reggere due anime: **istituzionale** (dialogo con accademia, ricercatori, partner, stakeholder, media) e **commerciale/lead gen** (iscrizioni MBA, candidature Hackathon, prenotazione Forum, follow-up Roadshow). Sdoppiarle in due siti va respinto: la promessa "Building bridges in education" si regge proprio sul fatto che ricerca e mercato vivono nello stesso ambiente. La doppia anima va risolta dentro una singola architettura, distinguendo i percorsi a livello di home, menu e CTA.

L'organizzazione segue la logica della slide 9 del brief: **Engaged Research come nucleo** e **quattro pilastri** (Corporate Learning, Innovazione tecnica/manageriale, Educational Think Tanks, MBA Gateway). A questi agganciamo tre cluster trasversali: **Eventi** (Roadshow, Hackathon, Forum, Festival), **Blog** (lungo i tre fili rossi del piano 2026) e **Contatti**. Eventi come sezione autonoma è scelta deliberata: il piano 2026 è scandito da date pubbliche e serve un punto di atterraggio unico per il traffico generato da social, PR e advertising.

Il sito esistente (struttura reale dettagliata in §0.1) non è una base architetturale da preservare — lo riscriviamo da zero (decisione Carlo 5/5, opzione B) — ma è una **fonte di asset** che entrano nel nuovo sito senza rifare lavoro: programmi documentati, foto, articoli blog, case studies "training stories". Va distinta la rottura strutturale dalla continuità di contenuto.

## 2. Sitemap

### 2.1 Tabella livello 0/1/2

| Livello 1 | Livello 2 | Note |
|---|---|---|
| Home | — | Snodo dei due percorsi |
| Chi siamo | Vision e Purpose · Leadership ([[Marco Morbidelli]]) · Partnership accademiche · Angelini Industries ecosystem | Istituzionale; ospita profilo CEO |
| Engaged Research | Aree di ricerca · Cattedre e collaborazioni · Pubblicazioni e insight | Nucleo del modello (slide 9) |
| Corporate Learning | Masters (Corporate MBA / EMBA) · Masterclasses · Individual Intensive Trainings · Coaching ICF · Mentoring | Pilastro 1, offerta 2026 (slide 12) |
| Innovazione tecnica e manageriale | Programmi per Pharma · Tech · Ventures · Fater | Pilastro 2 |
| Educational Think Tanks | Angelini Academy Forum · Hackathon · Workshop creativi · Cointelligenza umano-IA | Pilastro 3 |
| MBA Gateway | "A bridge to succeed" · Programma e IE Madrid · Calendario · Borsa · Internship · Candidature | Pilastro 4, asse di lead gen |
| Eventi | Calendario · Roadshow · Hackathon · Forum · Festival e seeding · Archivio | Atterraggio piano 2026 |
| Blog | Posizionamento · Ricerca · Unique Proposition · Tutti gli articoli | Tassonomia sui 3 fili rossi (slide 17) |
| Contatti | Form generico · Press · Lavora con noi · Sedi | Servizio + ingaggio media |

Servizio (footer): Privacy · Cookie · Note legali · Whistleblowing · Sitemap · Switch IT/EN.

**Menu primario (6 voci visibili):** Chi siamo · L'Academy ▾ · MBA Gateway · Eventi · Blog · Contatti. Le quattro pagine pilastro (Engaged Research, Corporate Learning, Innovazione tecnica e manageriale, Educational Think Tanks) sono raggruppate dentro il dropdown "L'Academy" per non gonfiare la barra principale a 9 voci. Le pagine restano tutte presenti come livello 1 nella sitemap: cambia solo l'organizzazione del menu, non l'architettura informativa.

### 2.2 Albero testuale

```
Home
├── Chi siamo
│   ├── Vision e Purpose
│   ├── Leadership (Marco Morbidelli)
│   ├── Partnership accademiche
│   └── Angelini Industries ecosystem
├── Engaged Research
│   ├── Aree di ricerca (Neuroscienze · EdTech · Pedagogia · Skill mismatch)
│   ├── Cattedre e collaborazioni (LUISS · UCL · RCA · LBS · IMD · IE · SDA Bocconi)
│   └── Pubblicazioni e insight
├── Corporate Learning
│   ├── Masters (Corporate MBA / EMBA)
│   ├── Masterclasses on Leadership
│   ├── Individual Intensive Trainings
│   ├── Coaching ICF
│   └── Mentoring intercompany
├── Innovazione tecnica e manageriale
│   ├── Programmi per OpCo Pharma
│   ├── Programmi per OpCo Tech
│   ├── Programmi per Ventures
│   └── Programmi per Fater
├── Educational Think Tanks
│   ├── Angelini Academy Forum
│   ├── Hackathon
│   ├── Workshop creativi
│   └── Cointelligenza umano-IA
├── MBA Gateway — "A bridge to succeed"
│   ├── Programma e IE Madrid
│   ├── Calendario e tappe (FEB-MAR sel · GIU induction · SET-GIU MBA · GIU-SET internship)
│   ├── Borsa di studio e tassa
│   ├── Internship nelle società Angelini
│   └── Candidature
├── Eventi
│   ├── Calendario completo
│   ├── Roadshow Università
│   ├── Hackathon
│   ├── Angelini Academy Forum
│   ├── Festival e seeding (Trento · Wired · Venezia · TaoBuk)
│   └── Archivio
├── Blog
│   ├── Posizionamento e purpose (filo rosso giallo)
│   ├── Ricerca e modelli educativi (filo rosso rosso)
│   ├── Unique Proposition Corporate Learning (filo rosso verde)
│   └── Tutti gli articoli
└── Contatti
    ├── Form generico
    ├── Press / Media
    ├── Lavora con noi
    └── Sedi
```

## 3. Schede pagine principali

Per ogni pagina di livello 1 sono indicati scopo, target primario tra i sei cluster del brief (slide 15), contenuti chiave, CTA primaria e secondaria, percorso utente in/out. I cluster di riferimento sono **Accademia** (università, professori, ricercatori, alumni), **Business Community** (giovani manager, head hunter, corporate academies, HR, start-up), **Media** (overall + social community), **Angelini Ecosystem** (OpCo, HR community), **Stakeholder istituzionali**, **Associazioni di categoria**.

### Home

Scopo: presentare Angelini Academy come società autonoma in costituzione (in evoluzione da business unit a SRL autonoma) e indirizzare i sei cluster al proprio percorso. Target: tutti e sei, priorità Business Community e Accademia. Contenuti chiave: hero con headline "Building bridges in education" + sottotitolo "Costruiamo ponti tra competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera." (testo testuale slide 8 brief); 4 card pilastri ordinate 4-1-3-2 con nucleo Engaged Research al centro; sezione people-first; teaser eventi; articoli per filo rosso; partner accademici. CTA primaria hero: "Scopri il MBA Gateway". Secondaria hero: "Esplora la ricerca". In: organico, LinkedIn/Meta, PR Festival Trento. Out: MBA Gateway, Eventi, pilastro, Blog.

### Chi siamo

Scopo: raccontare l'identità della SRL in evoluzione (slide 6) e dare profondità istituzionale a stakeholder, media, partner. Target: Accademia, Stakeholder istituzionali, Media. Contenuti: vision e purpose; profilo CEO [[Marco Morbidelli]] con link al LinkedIn ottimizzato (richiesta esplicita slide 31); mappa partnership (LBS, IMD, Stockholm SE, IE, UCL, RCA, SDA Bocconi, LUISS); collocazione dentro Angelini Industries. CTA primaria: "Scopri Engaged Research". Secondaria: "Contattaci per partnership". In: menu, blog, profili LinkedIn. Out: Engaged Research, Pilastri, Contatti.

### Engaged Research

Scopo: rendere visibile e citabile la ricerca su modelli educativi — filo rosso "ricerca" (slide 17), differenziale rispetto a una corporate academy generica. Target: Accademia, Media, Stakeholder istituzionali, Associazioni di categoria. Contenuti: i quattro ambiti (neuroscienze dell'apprendimento, EdTech, pedagogia/nuovi metodi, skill mismatch farmaceutico/robotica); cattedre e collaborazioni (LUISS, UCL, RCA); pubblicazioni in formato citabile; profili ricercatori. CTA primaria: "Scarica l'ultima pubblicazione". Secondaria: "Proponi una collaborazione di ricerca". In: Home, Chi siamo, articoli blog filo "ricerca". Out: Blog, Educational Think Tanks, Contatti.

### Corporate Learning

Scopo: presentare l'offerta formativa 2026 (slide 12) per Business Community, HR aziende, head hunter. Target: Business Community, Angelini Ecosystem. Contenuti: Corporate MBA / EMBA; ~10 masterclass (LUISS BS, SDA Bocconi, BBS, POLIMI, RCA, Imperial, ESCP); individual intensive trainings (London BS, HBS, MIT, INSEAD, IMD); coaching ICF; mentoring intercompany. CTA primaria: "Richiedi il catalogo 2026". Secondaria: "Parla con un advisor". In: Home, LinkedIn HR, Blog filo "Unique Proposition". Out: Innovazione tecnica, MBA Gateway, Contatti.

### Innovazione tecnica e manageriale

Scopo: chiarire il taglio per le OpCo (Pharma, Tech, Ventures, Fater), mostrando che Academy è anche infrastruttura interna. Target: Angelini Ecosystem, Stakeholder istituzionali, Media. Contenuti: per ciascuna OpCo, descrizione di alto livello del programma + logica di sinergia di gruppo + eventuali testimonial pubblicabili. CTA primaria: "Richiedi un programma su misura". Secondaria: "Scopri come collaboriamo con le OpCo". In: menu, pagine HR holding, campagne interne HR Community. Out: Engaged Research, Corporate Learning, Contatti.

**Pagina pubblica vetrina, non area riservata. Niente SSO. Le sottosezioni Pharma/Tech/Ventures/Fater restano con descrizioni di alto livello senza informazioni operative sensibili (numeri specifici, contenuti formativi proprietari, budget).** Punto da validare al Q&A 8/5 (vedi domanda C5 in [[Domande QA]]).

### Educational Think Tanks

Scopo: ospitare il filone "ricerca + evento" che genera UGC e media value (slide 28: stories Hackathon = impression più alte Instagram). Target: Accademia, Business Community, Media. Contenuti: scheda Forum (annuale, possibile premio Nobel), scheda Hackathon (edizione 17/12/2025 BBS, prof. Gabriele Morandin, [[Tiziana Carnicelli]]), workshop creativi cointelligenza umano-IA. Per ognuna: storytelling visivo, foto/video reali, agenda, partner. CTA primaria: "Iscriviti al prossimo Forum" / "Candidati al prossimo Hackathon". Secondaria: "Guarda l'edizione precedente". In: Home, Eventi, social. Out: Eventi, Blog, Contatti.

### MBA Gateway — "A bridge to succeed"

Scopo: convertire il Pilastro 4 — unico con processo di iscrizione strutturato — in pipeline di candidature qualificate. Target: Business Community (giovani manager, studenti senior), Accademia (alumni). Contenuti: claim "A bridge to succeed"; programma con IE Madrid; calendario (selezione, induction Casa Angelini, full-time Madrid, internship 3-6 mesi, assunzione); borsa di studio (10 giovani, ISEE/ISPE <50K€ borsa totale, altrimenti tassa 20K€ pari al 25% del valore di mercato); internship nelle OpCo; testimonial; FAQ. CTA primaria: "Candidati ora". Secondaria: "Scarica brochure MBA". In: campagne MBA, Roadshow, Festival Trento, Home, Blog. Out: form, FAQ, Contatti.

### Eventi

Scopo: dare un punto di atterraggio unico al traffico del piano 2026 (slide 19), evitare frammentazione del calendario nelle pagine pilastro. Target: tutti i sei cluster. Contenuti: calendario sticky con filtri per tipo (Roadshow/Hackathon/Forum/Festival/Masterclass) e pubblico; schede evento (Trento Fuorifestival, Roadshow giu-dic, Wired, Biennale, TaoBuk, Forum); archivio passati come prova sociale. CTA primaria: "Iscriviti / Candidati" sull'evento imminente. Secondaria: "Aggiungi al calendario". In: LinkedIn/Instagram, PR, Home, MBA Gateway. Out: scheda evento, Educational Think Tanks, Blog.

### Blog

Scopo: alimentare i tre fili rossi (slide 17), motore SEO e polmone delle campagne LinkedIn (ER 33% — slide 24). Target: Accademia, Business Community, Media. Contenuti: tassonomia primaria sui tre fili (Posizionamento · Ricerca · Unique Proposition); filtri secondari per autore, partner, tipo (saggio/intervista/ricerca/report evento); feed recente; sezione "in evidenza" curata. CTA primaria: "Iscriviti alla newsletter". Secondaria: "Esplora il filo rosso [X]". In: SEO, social, newsletter, Home. Out: pilastro pertinente, Engaged Research, Eventi, Contatti.

### Contatti

Scopo: smistare richieste eterogenee (commerciali, accademiche, media, candidature spontanee), evitando l'imbuto di un form unico. Target: tutti i cluster. Contenuti: form differenziato per tipologia (corporate clients, partnership accademiche, press, candidature spontanee, generico); sede Viale Amelia 70, 00181 Roma; mappa; link social. CTA primaria: invio form. Secondaria: "Seguici su LinkedIn". In: ogni pagina (footer + menu). Out: thank you page con suggerimenti correlati.

## 4. Wireframe testuali low-fi delle 5 pagine prioritarie

Le pagine prioritarie per il mockup sono Home, MBA Gateway "A bridge to succeed", Engaged Research, Eventi, Blog. Per ognuna sono descritte le zone nell'ordine di scroll. La logica costante: hero forte con immagine umana, sezione informativa densa, prova sociale, CTA conclusiva, footer.

### 4.1 Homepage

1. **Header sticky** — Logo Angelini Academy a sinistra; menu primario a destra a 6 voci (Chi siamo · L'Academy ▾ · MBA Gateway · Eventi · Blog · Contatti). Il dropdown "L'Academy" apre su quattro voci (Engaged Research · Corporate Learning · Innovazione tecnica e manageriale · Educational Think Tanks). Switch lingua IT/EN; CTA pillola "Candidati al MBA Gateway".
2. **Hero full-bleed** — Foto persone reali (studenti / docenti / momento Hackathon); headline "Building bridges in education" + sottotitolo "Costruiamo ponti tra competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera." (testo testuale slide 8 brief); doppia CTA: primaria "Scopri il MBA Gateway", secondaria "Esplora la ricerca".
3. **Sezione "Cosa facciamo" — 4 pilastri + nucleo** — Layout a quattro card affiancate, ordine **4-1-3-2** (MBA Gateway · Corporate Learning · Educational Think Tanks · Innovazione tecnica e manageriale): MBA Gateway in prima posizione perché è l'unico pilastro con processo di candidatura strutturato e converte il traffico generato dalle campagne MBA e dal Roadshow; Corporate Learning per il pubblico manager senior; Educational Think Tanks come elemento di prestigio e densità eventi; Innovazione tecnica e manageriale per ultimo, taglio B2B-Gruppo. Riquadro centrale evidenziato per **Engaged Research come nucleo**. Ogni card: icona + titolo pilastro + 2 righe di descrizione + link "Scopri di più".
4. **Sezione "People-first"** — Carosello/griglia con volti e citazioni brevi di tre profili (uno studente MBA, un ricercatore, un manager OpCo) con micro-storia 2-3 righe. Lezione del brief slide 28: vincono i contenuti che mostrano persone.
5. **Sezione "Prossimi eventi"** — Strip con 3 schede evento (la più imminente in posizione dominante: Festival Trento maggio); per ogni scheda data, luogo, titolo, CTA "Iscriviti" o "Scopri di più". Link sotto: "Vedi calendario completo".
6. **Sezione "Insight dal Blog"** — 3 articoli, uno per filo rosso, con etichetta colorata che segnala il filo rosso (giallo posizionamento, rosso ricerca, verde Unique Proposition). Link "Esplora il blog".
7. **Sezione "Partnership accademiche"** — Strip orizzontale con loghi LBS, IMD, Stockholm SE, IE, UCL, RCA, SDA Bocconi, LUISS. Riga di testo: "Una rete internazionale per costruire ponti tra ricerca, mercato e talento". Link: "Tutte le collaborazioni".
8. **Sezione "Newsletter"** — Form a una riga (email) + claim breve + privacy disclaimer.
9. **Footer** — 4 colonne: navigazione, contatti, social, legali. Indirizzo Viale Amelia 70 + P.IVA + claim ridotto.

### 4.2 MBA Gateway "A bridge to succeed"

1. **Header sticky** — Stesso della Home, con CTA pillola che diventa "Candidati ora".
2. **Hero focalizzato** — Foto degli ammessi edizione precedente (se disponibili) o foto induction Casa Angelini; claim "A bridge to succeed"; payoff "Il MBA internazionale di Angelini Academy con IE Madrid"; CTA primaria "Candidati ora", CTA secondaria "Scarica la brochure".
3. **Sezione "In sintesi"** — 4 elementi chiave in evidenza: 10 posti / 1 anno full-time + 3-6 mesi internship / IE Madrid come capofila accademico, dentro una rete internazionale di partner (LBS, IMD, Stockholm SE, UCL, RCA, SDA Bocconi, LUISS) / borsa di studio integrale per ISEE-ISPE <50K€.
4. **Sezione "Il programma"** — Descrizione strutturata in due colonne: a sinistra l'esperienza accademica con IE Madrid, a destra l'esperienza Angelini (induction Casa Angelini, internship in OpCo, possibile assunzione). Box laterale: "Cosa imparerai" — competenze attese.
5. **Sezione "Calendario"** — Timeline orizzontale con cinque tappe: FEB-MAR 2026 selezione, GIU 2026 induction, SET 2026-GIU 2027 MBA Madrid, GIU-SET 2027 internship, TBD 2027 assunzione. Ogni tappa cliccabile per dettaglio.
6. **Sezione "Borsa di studio e tassa"** — Testo descrittivo del meccanismo (slide 10 brief): 10 giovani selezionati, ISEE/ISPE <50K€ borsa totale, altrimenti tassa di iscrizione €20.000 pari al 25% del valore di mercato del master. Tono autentico/vicino come da slide 18, no "scontistica" da venditore.

  **6.1 Simulazione** — Scheda visuale interattiva semplice agganciata sotto la sezione 6: due input (ISEE, ISPE) + output dinamico ("Sei eleggibile per la borsa totale" / "Per te è prevista una tassa di iscrizione di €20.000"). Disclaimer di pagina: *"Strumento dimostrativo — la forma definitiva sarà concordata con il cliente"*. Per il mockup: UI navigabile con valori statici di esempio (es. ISEE 30K → "Borsa totale"; ISEE 60K → "Tassa €20K"), nessuna logica reale di calcolo.
7. **Sezione "Voci di chi ha scelto il MBA Gateway"** — 2-3 testimonial video o gallery foto + citazione + nome + percorso post-MBA. Se non disponibili nella prima release, placeholder con indicazione tecnica per Michele.
8. **Sezione "Partner accademico"** — Focus IE Madrid: descrizione partnership, ranking, link al sito IE.
9. **Sezione "FAQ"** — Accordion con 8-10 domande tipiche (requisiti ammissione, scadenze, sostenibilità economica, lingua di insegnamento, riconoscimento titolo).
10. **CTA finale "Candidati ora"** — Bottone full-width con form a comparsa o link a pagina form dedicata; sotto, contatto diretto referente candidature per dubbi pre-iscrizione.
11. **Footer** — Standard.

### 4.3 Engaged Research

1. **Header sticky** — Standard.
2. **Hero sobrio** — Composizione visiva da rivista accademica più che da landing commerciale: foto ricercatore o ambiente di laboratorio educativo; claim "Engaged Research — il nucleo da cui parte tutto"; payoff "Studiamo come le persone imparano per costruire come dovranno imparare domani".
3. **Sezione "Quattro ambiti di ricerca"** — Quattro blocchi affiancati: Neuroscienze dell'apprendimento, Tecnologie educative, Pedagogia e nuovi metodi, Skill mismatch (focus farmaceutico e robotica). Ogni blocco: claim breve, paragrafo di 4-5 righe, immagine, link "Approfondisci".
4. **Sezione "Cattedre e collaborazioni"** — Card grandi per le partnership strutturate (Cattedra LUISS, UCL, Royal College of Art) con foto e descrizione; griglia loghi per tutte le altre.
5. **Sezione "Pubblicazioni e insight"** — Lista di paper, white paper, report scaricabili, ordinati per data; per ognuno: titolo, autori, abstract di 2 righe, CTA "Scarica PDF".
6. **Sezione "Il team di ricerca"** — Profili sintetici dei ricercatori coinvolti (foto, nome, ruolo, area).
7. **CTA finale** — "Proponi una collaborazione di ricerca" (form contatto pre-compilato sulla tipologia).
8. **Footer** — Standard.

### 4.4 Eventi

1. **Header sticky** standard.
2. **Hero evento del momento** — Card grande dell'evento più imminente o strategico (in maggio: Festival Economia di Trento — #FuoriFestival): foto, data, luogo, claim, CTA "Iscriviti" / "Scopri il programma".
3. **Calendario** — Vista lista/calendario con filtri per tipo (Roadshow / Hackathon / Forum / Festival / Masterclass), pubblico (Studenti / Manager / Accademia), mese. Ogni evento: data, città, titolo, tipo, CTA breve.
4. **Appuntamenti ricorrenti** — Tre blocchi narrativi: Roadshow Università (città, candidature MBA), Hackathon (edizione 17/12/2025 BBS), Forum (annuale, possibile premio Nobel). Ognuno CTA propria.
5. **Festival e seeding** — Strip orizzontale (Trento, Wired, Biennale Venezia, TaoBuk).
6. **Archivio** — Galleria edizioni passate con link al recap su blog.
7. **CTA finale** — "Resta aggiornato" + newsletter eventi.
8. **Footer** standard.

### 4.5 Blog

1. **Header sticky** standard.
2. **Hero filo rosso del momento** — Articolo in evidenza con immagine grande, etichetta filo rosso colorata, titolo, autore, lettura stimata.
3. **Esplora per filo rosso** — Tre tile grandi: filo giallo (Posizionamento), rosso (Ricerca), verde (Unique Proposition). Ogni tile linka all'archivio filtrato.
4. **Ultimi articoli** — Griglia 3x3 (immagine, etichetta filo rosso, titolo, autore, data) + "carica altri".
5. **Filtri secondari** — Per autore, partner accademico, tipo (saggio / intervista / ricerca / report evento).
6. **Newsletter** — Form + tre check opzionali sui fili rossi per il digest.
7. **Footer** standard.

## 5. Mappatura sito ↔ piano comunicazione 2026

Il sito è la spina dorsale digitale che riceve il traffico generato dal piano 2026 (slide 19). Sotto, per ogni touchpoint del calendario Angelini, la sezione del sito che lo deve accogliere e la CTA che deve spingere.

| Touchpoint piano 2026 | Sezione sito ricevente | CTA primaria | CTA secondaria |
|---|---|---|---|
| Festival Economia di Trento — #FuoriFestival, maggio 2026 (lancio ufficiale, comunicato stampa, speaking opportunities, possibile media partnership Financial Times) | Home + scheda evento dedicata in Eventi + post su Blog (filo rosso "Posizionamento e purpose") | "Scopri Angelini Academy" (link a Chi siamo) | "Scarica il comunicato stampa" |
| Roadshow Università, giu-dic 2026 | MBA Gateway (lead gen) + scheda calendario in Eventi (date e città) | "Candidati al MBA Gateway" | "Iscriviti al Roadshow nella tua città" |
| Hackathon (sequel del 17/12/2025 con Bologna Business School) | Educational Think Tanks → scheda Hackathon + Eventi | "Candidati al prossimo Hackathon" | "Guarda l'edizione precedente" (recap su Blog) |
| Lancio campagna MBA + selezione candidati | MBA Gateway → form candidature | "Candidati ora" | "Scarica la brochure MBA" |
| Angelini Academy Forum (networking event annuale, possibile premio Nobel) | Educational Think Tanks → scheda Forum + Eventi | "Iscriviti al Forum" | "Vedi gli speaker" |
| Seeding events (Wired Festival, Biennale Venezia, TaoBuk Festival) | Eventi → strip "Festival e seeding" + Blog (filo rosso "Posizionamento") | "Vieni a trovarci" | "Leggi il nostro talk sul Blog" |
| Lancio interno @Casa Angelini | Chi siamo (sezione Angelini Industries ecosystem) + Innovazione tecnica e manageriale | "Scopri come lavoriamo con le OpCo" | "Esplora i programmi su misura" |
| Lancio partnership LuissBS | Engaged Research → scheda Cattedre e collaborazioni + Blog (filo rosso "Ricerca") | "Approfondisci la cattedra LUISS" | "Scarica il paper" |
| Follow-up Alumni @Casa Angelini | MBA Gateway → sezione testimonial + Blog (filo rosso "Unique Proposition") | "Unisciti alla community Alumni" | "Leggi le storie degli ex" |
| Social media campaign (LinkedIn, Meta) | Atterraggio variabile su Home, MBA Gateway, Eventi, articoli Blog (UTM tracking per cluster) | Determinata dalla campagna (lead MBA, iscrizione evento, lettura) | Iscrizione newsletter |
| Profilo LinkedIn personale CEO Marco Morbidelli (ottimizzato come da brief slide 31) | Chi siamo → sezione Leadership con bio + redirect ai post tematici sul Blog | "Leggi gli ultimi insight di Marco" | "Connettiti su LinkedIn" |
| Media partnership (TBD Financial Times) | Blog (filo rosso "Posizionamento") + Press in Contatti | "Leggi l'articolo" | "Contatti press" |

## 6. Sette raccomandazioni progettuali

**Risolvere la doppia anima nell'home, non sdoppiando il sito.** L'errore più probabile è separare istituzionale e commerciale. Engaged Research e MBA Gateway devono coabitare nella stessa home: la promessa "Building bridges" sta nel collegamento. Zona alta: struttura completa (4 pilastri + nucleo); zona media: persone ed eventi; zona bassa: MBA Gateway come CTA primaria globale — l'unico touchpoint con processo di candidatura strutturato, quindi il convertitore più ovvio.

**Tassonomizzare il blog sui tre fili rossi, non sulla data.** La slide 17 mette al centro tre cluster narrativi; il blog li eredita come tassonomia primaria, con filtri colorati e archivi dedicati. Beneficio: ogni articolo dentro un filone coerente; le campagne LinkedIn (ER 33% — slide 24) linkano alla pagina filo rosso, non solo al singolo articolo.

**Persone e volti al centro, evitando il "muro istituzionale".** Il So What slide 28 è netto: vincono i contenuti che mostrano volti, esperienze, relazioni; gli stories Hackathon hanno fatto le impression più alte di Instagram. Va portato dentro il sito a livello strutturale: sezione people-first in home, testimonial nelle pagine pilastro, foto reali negli eventi, profili autore sul blog. Il rischio da evitare è il sito corporate con stock photo e claim astratti.

**Lead capture modulare, non e-commerce.** La tassa MBA da 20K€ passa via IE Madrid (slide 11): un payment integrato non serve. Serve un sistema di form modulare (candidature MBA con upload CV/lettera/ISEE, iscrizione Hackathon, prenotazione Forum, Roadshow, contatto generico segmentato) con un unico CRM e tag per cluster. Per il mockup bastano placeholder cliccabili; decisione tecnica dopo il Q&A 8/5 (domanda C1-C2 in [[Domande QA]]).

**Preservare il bilinguismo IT/EN esistente.** Il sito attuale è già bilingue nativo (§0.1): non è scelta da vendere, è scelta consolidata da mantenere. La domanda al Q&A 8/5 si riformula: manteniamo entrambe le lingue al lancio? Su quale livello di copy? Per il mockup: struttura URL `/it/` e `/en/` come oggi, copy IT prioritario, EN placeholder. La quotazione del bilinguismo non è add-on ma costo strutturale di copywriting, da dimensionare con Michele dopo il Q&A.

**Menu primario a 6 voci con dropdown "L'Academy".** Il sito attuale ha un menu a 3 voci (Su di noi · Formazione per tutti · Blog) che è troppo magro per la nuova architettura a 4 pilastri + nucleo + Eventi + Blog + Contatti — gestire 9 livelli 1 in barra significherebbe nasconderli o aggiungerli alla rinfusa. La scelta è tenere visibili 6 voci nel menu (Chi siamo · L'Academy ▾ · MBA Gateway · Eventi · Blog · Contatti) e raggruppare le quattro pagine pilastro dentro un dropdown "L'Academy". MBA Gateway resta fuori dal dropdown perché è l'asse di lead gen (CTA primaria globale del sito, slide 11) e merita il primo livello di accesso. Eventi resta voce autonoma perché riceve il traffico del piano 2026 ed è la sezione che cambia più spesso. Costo: i pilastri perdono visibilità immediata di prima riga; beneficio: il menu resta leggibile e gerarchico.

**Calcolatore borse di studio come simulazione UI nel mockup.** Sulla pagina MBA Gateway si propone una simulazione visuale (input ISEE/ISPE, output "borsa totale" o "tassa €20.000"). Funziona come segnale di accessibilità dichiarata: trasforma il meccanismo di accesso al merito da paragrafo testuale in interazione concreta, coerente con il So What slide 28 (vincono i contenuti che mostrano interattività e dimensione umana) e con il "Vicino" del tone of voice slide 18. È proposto come suggerimento di valore: se il cliente preferisce una versione testuale o ha vincoli legali sulla raccolta ISEE, si rientra nella forma descrittiva senza compromessi sul resto del mockup. Per il mockup pre-pitch è UI navigabile con valori statici di esempio; tool reale solo post-aggiudicazione (vedi §4.2 sezione 6.1 e [[Brief Mockup]]).

## 7. Note di handoff a Michele

I cinque wireframe del §4 sono la traccia ordinata per il mockup del 6/5. Le pagine non prioritarie (Chi siamo, Corporate Learning, Innovazione tecnica, Think Tanks, Contatti) restano a livello di pagina-tipo o placeholder con titolo + due paragrafi + CTA: il pitch dell'8/5 gioca sulla profondità delle 5 pagine prioritarie e sulla coerenza di sitemap, non sulla quantità.

Per copy, claim, intro pilastri, hook fili rossi e tone of voice il riferimento operativo è [[Analisi Narrativa Short]] (versione sintetica già pronta per il mockup); la versione lunga [[Analisi Narrativa]] resta disponibile per dubbi puntuali. Per i vincoli operativi (tool, header sticky, navigazione minima, copy placeholder, brand book non disponibile, no bilinguismo nel mockup, no animazioni complesse) il riferimento è [[Brief Mockup]]. Per dubbi su voci ambigue, segnare "TBD Q&A 8/5" e proseguire — lista in [[Domande QA]].
