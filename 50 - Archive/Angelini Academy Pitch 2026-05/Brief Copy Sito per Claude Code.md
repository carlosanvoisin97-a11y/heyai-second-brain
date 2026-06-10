---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
deliverable: Brief Copy v2 post-audit per riscrittura sito (codebase Astro)
audience: Carlo · team interno HeyAI · agenti Claude Code per rewriting per-pagina · Michele · Futuritaly (Elena/Lavinia)
sources_primary:
  - Brief gara Angelini "Academy Evolution_Comm briefing" (37 pp, ricevuto 5/5/2026 — fonte primaria cliente)
  - Brand Book Angelini Academy "Manuale di Elementi Base v1.0" (36 pp, aprile 2024 — fonte ufficiale brand)
sources_secondary:
  - Pitch Angelini v3.1 post-audit (HeyAI 23/5/2026, 835 righe)
  - Audit Pitch v3 vs Brief Angelini + Vault + Esterne (23/5/2026, 14 patch documentate)
  - Mockup Sito - Struttura e Copy Completo (HeyAI 18/5/2026, parzialmente obsoleto)
  - Sito attuale www.angeliniacademy.com (read 25/5/2026 — fonte secondaria, allineamento lessico)
  - Codebase Astro src/ (read 25/5/2026 — ground truth implementazione)
version: 2.0
supersedes: v1.1 (15/5/2026) — archiviata
created: 2026-05-25
status: canonico
codebase: /Users/carlosanvoisin/code/angelini-sito-3d
---

# Brief Copy Sito Angelini Academy v2 — post-audit

> **Documento di riferimento operativo** per la riscrittura completa del copy del sito Angelini Academy. Ancorato al brief gara del cliente, al brand book ufficiale e alle 14+18 correzioni emerse dall'audit del Pitch v3 + dalla codebase Astro attuale.

> **Lettura raccomandata**: §1-§5 per chi scrive copy nuovo; §6 per chi riscrive una pagina specifica; §7 come checklist gate prima di firmare; §9 come lista tracciabile di correzioni da applicare nella codebase.

> **Principio non negoziabile**: il brief gara del cliente (Academy Evolution_Comm briefing, 37 pp) è la **fonte primaria**. Quando un'indicazione di v2 confligge con un'idea editoriale precedente, prevale il brief cliente verbatim.

---

## §0 · Changelog v1.1 → v2 (18 correzioni post-audit)

| # | Cosa cambia | Da → A | Fonte |
|---|---|---|---|
| 1 | **8° partner istituzionale** | Imperial College → **Stockholm School of Economics** | Brief gara, slide 9 (loghi nucleo) |
| 2 | **Lista 8 partner istituzionali verbatim** | POLIMI/IE/UCL/RCA/SDA/LUISS/Imperial/BBS → **LBS · IMD · Stockholm SSE · IE Madrid · UCL · RCA · SDA Bocconi · LUISS** | Brief gara, slide 9 (loghi) + Pitch v3.1 §S2 |
| 3 | **4 OpCo Cross-OpCo (MBA Gateway)** verbatim cliente | "Industrial Tech / Consumer / variazioni" → **"Pharma, Tech, Ventures, Fater (· ecc.)"** | Brief gara, slide 11 verbatim |
| 4 | **Pilastro 03 (Educational Think Tanks)** | Generico "Forum annuale + hackathon" → **"Forum annuale con Premi Nobel, workshop creativi o hackathon che coinvolgono la cointelligenza umano-IA"** | Brief gara, slide 9 verbatim |
| 5 | **Engaged Research — 4 ambiti** verbatim | 3 verticali editoriali (Lifelong over 50, Skill mismatching, AI pedagogia) → **4 ambiti cliente: Neuroscienze dell'apprendimento · Tecnologie educative · Pedagogia e nuovi metodi di insegnamento · Skill mismatch nel settore farmaceutico e/o robotico** | Brief gara, slide 9 verbatim |
| 6 | **Purpose — 5 ponti** verbatim | 3 ponti (competenze, scuola/lavoro, talento/carriera) → **5 ponti: competenze richieste/offerte · scuola e mondo del lavoro · talento e carriera · aspirazioni e opportunità · longevità lavorativa e aggiornamento professionale** | Brief gara, slide 8 verbatim |
| 7 | **MBA Gateway · clausola obbligatoria** | Mancante → **"In caso di non accettazione dell'offerta, verrà richiesto il pagamento per intero del programma formativo"** | Brief gara, slide 11 verbatim |
| 8 | **MBA Gateway · esperienza minima** | "Dieci giovani selezionati per merito" → **"10 giovani, con minimo 3 anni di esperienza professionale a tempo pieno (calcolata dal conseguimento della laurea triennale)"** | Brief gara, slide 11 verbatim |
| 9 | **MBA Gateway · focus moduli** | Generico "stage Cross-OpCo" → **"modulo didattico su Life Sciences O sulla Robotica Industriale"** (alternativi) | Brief gara, slide 11 verbatim |
| 10 | **5 ToV cliente** verbatim come griglia | Non applicati → **Autorevole · Autentico · Vicino · Ispirazionale · Innovativo** (slide 16 brief) | Brief gara, slide 16 verbatim |
| 11 | **"Unwavering Care"** integrato (Brand Book pp.4) | Assente → driver brand del Gruppo, integrato in Chi Siamo + Manifesto valore 01 | Brand Book pp.4 verbatim |
| 12 | **"Centralità della dimensione umana"** integrato | Assente → driver editoriale **trasversale** (volti, esperienze, relazioni prima dei numeri) | Brief gara slide 28 ("So What"): osservazione del cliente stesso sui propri KPI social |
| 13 | **Tipografia ufficiale** rispettata | "Editorial italic" generica → **Barlow** (sans, body+UI) + **Merriweather** (serif, display+H1/H2) | Brand Book pp.21-23 |
| 14 | **Palette colori brand book** rispettata | Filo giallo `#F4C842` (invenzione editoriale) → solo Pantone ufficiali (8 secondari) | Brand Book pp.25-26 |
| 15 | **Cattedra LUISS** ripristinata come filone strategico | Sezione spotlight RIMOSSA (decisione 19/5) → re-inserita su `/engaged-research` con dignità di filo rosso | Brief gara slide 15 (3 fili rossi cliente: Ricerca su modelli educativi via Cattedra Luiss+UCL+RCA) |
| 16 | **Fondazione Kessler** menzionata | Assente → partnership Festival Trento Lancio, citata su `/eventi` Trento entry | Brief gara slide 21 verbatim |
| 17 | **Architettura Industries** corretta (Footer + ChiSiamo) | "Quattro OpCo" → **Brand system completo** (10 derivati: Pharma · Ventures · Technologies · Beauty · Wines & Estates · Investments · Real Estate · Fondazione · Casa · **Academy**) con i 4 MBA Gateway evidenziati | Brand Book pp.16 |
| 18 | **5° persona "Imprese & Partner di filiera"** integrata nel perimetro voce | Persona aggiunta post call 18/5, voce non ancora stabilizzata → ToV definito in §6.5 (Sage primario + Magician secondario) | Pitch v3.1 §S5 persona 7 |

---

## §1 · Identità — chi è Angelini Academy in 9 frasi

### In una frase

> Angelini Academy è la società di Angelini Industries dedicata al Corporate Learning, che propone una nuova pedagogia per preparare le persone alle sfide di un mondo del lavoro in costante evoluzione.

**Fonte:** brief gara slide 7 verbatim (Positioning).

### Tre cose che siamo

1. **Un nucleo di Engaged Research peer-reviewed** + 4 pilastri formativi (Corporate Learning per leader · innovazione tecnico-manageriale Cross-OpCo · Educational Think Tanks · MBA Gateway).
2. **Un nodo italiano di una rete europea** con 8 partner istituzionali in 4 paesi + 20 partner di programma + 13 atenei R&D estesi.
3. **Una propensione mecenatistica esplicita**: il merito non si filtra per reddito (ISEE-ISPE come strumento di equità).

### Tre cose che NON siamo

1. **NON siamo una business school commerciale.** Siamo una SRL con DNA accademico-scientifico, vocazione di mecenatismo.
2. **NON facciamo ricerca commissionata.** Engaged Research significa che la pubblicazione precede l'applicazione, mai viceversa. I paper sono peer-reviewed, le evidenze entrano nei programmi industriali, non viceversa.
3. **NON vendiamo cataloghi.** I programmi nascono da fabbisogni reali co-progettati con i partner industriali e accademici; non da uno scaffale di prodotti L&D.

### Tre cose che siamo MA che il sito attuale non racconta

1. **500 dipendenti formati nel 2025, 10.000 ore di learning erogate** (press Morbidelli feb 2026).
2. **+1.200 partecipanti cumulativi, +40 corsi, accreditamento ASFOR** (asset esistenti, da valorizzare con il nuovo posizionamento — non da nascondere).
3. **Cattedra LUISS in attivazione** su modelli educativi innovativi (filo rosso brief, slide 15 verbatim).

---

## §2 · Archetipi narrativi — Sage primario, Magician secondario

### Sage (primario, ~70% del copy)

Voce dell'esperto che conosce e non ha bisogno di alzare la voce. Pacata, autorevole, descrittiva, pre-validata da fonti. Mai sloganistica.

**Quando**: pagine istituzionali (Chi Siamo, Engaged Research, Press, MBA Gateway descrizioni programma), descrizioni di metodologia, paper, cataloghi.

**Esempi di voce Sage** già presenti nel sito (preservare):
- *"Engaged Research è il nucleo metodologico dell'Academy. Paper peer-reviewed firmati con i partner accademici…"* (Engaged Research hero)
- *"La leadership non si costruisce solo con strumenti manageriali. Le nostre masterclass mescolano scienze del comportamento, arti, intelligenza artificiale…"* (Pillar 01)
- *"Lavoriamo dentro le società del Gruppo Angelini per costruire programmi su misura per Pharma, Tech, Ventures e Fater. Niente formazione astratta…"* (Pillar 02)

**Verbi tipici Sage**: *propone · firma · pubblica · co-progetta · misura · pre-valida · documenta · costruisce · attraversa · sostiene*.

### Magician (secondario, ~30% del copy)

Voce visionaria, aspirazionale, della trasformazione. Usata per momenti di apertura emotiva, storie di prima persona, payoff. Mai per descrivere fatti.

**Quando**: Hero Home, Persona Select intro, Founder Stories (in prima persona), CTA finali, payoff.

**Esempi di voce Magician** già presenti (preservare):
- *"Building bridges in education."* (payoff)
- *"Sono entrata pensando di studiare. Sono uscita avendo attraversato un ponte che non sapevo esistesse."* (Sofia, Founder Stories)
- *"Chi sei, e da dove parti?"* (Persona Select intro)

**Verbi tipici Magician**: *attraversare · costruire · aprire · accompagnare · trasformare · diventare · scoprire · partire*.

### Regola di mescolanza

In ogni pagina lunga, alterna **3-4 paragrafi Sage** con **1 momento Magician** (hero, CTA finale, quote). Non più di un picco Magician per sezione: stanca, sa di pubblicità.

---

## §3 · Tone of Voice — 5 attributi cliente verbatim

**Fonte verbatim**: brief gara slide 16. **Da applicare come griglia operativa** per ogni copy nuovo. Quando si firma una sezione, controllare che almeno 3 dei 5 attributi siano riconoscibili.

| # | Attributo | Definizione cliente | Si traduce in scrittura come… |
|---|---|---|---|
| 1 | **Autorevole** | Esprimere competenza e credibilità | Dati fonte tra parentesi quadre `[F, brief pag. X]` quando un numero è citato; voce in terza persona per descrizioni metodologiche; mai esagerare ("rivoluzionario", "unico al mondo") |
| 2 | **Autentico** | Trasparenza e chiarezza dei messaggi per instaurare fiducia | "Cosa NON fa" sezioni esplicite (Galileo, Engaged Research, Engaged Network); ammettere TBD/in arrivo quando vero ("disponibile da gennaio 2027"); niente eufemismi su selettività ("10 borsisti l'anno", non "limitatissimi posti") |
| 3 | **Vicino** | Linguaggio accessibile che accompagna le persone nel percorso di scoperta e apprendimento | Frasi corte, periodi paratattici, "tu" mai "Lei", parole italiane quando esiste alternativa (vedi §4 lessico chiuso); zero gergo HR ("workforce", "people analytics", "talent pool" — fuori) |
| 4 | **Ispirazionale** | Orientato alla crescita, motivazione e sviluppo delle potenzialità dei futuri talenti e leader | Hero + payoff con verbi di moto e di trasformazione ("attraversare", "costruire", "diventare"); Founder Stories in prima persona; cifre umane prima di cifre business |
| 5 | **Innovativo** | Anticipando i trend del mondo del lavoro e dell'education | Frame "metodi che non si trovano nei cataloghi standard"; collegamenti espliciti AI ↔ pedagogia (mai uno senza l'altro); riferimenti a paper e ricerca quando si parla di programmi |

### Anti-attributi (NON siamo)

- **NON urlanti** (vedi §7.1) — niente "INCREDIBILE", "RIVOLUZIONARIO", "UNICO"
- **NON corporate** — niente "best-in-class", "world-class", "leader di mercato"
- **NON sloganistici** — niente "Investiamo nel tuo futuro", "Il talento è il nostro DNA"
- **NON paternalisti** — niente "ti guidiamo passo dopo passo", "scopriremo insieme"

---

## §4 · Lessico aperto / chiuso

### Parole-sì (lessico cliente verbatim — preservare e amplificare)

Dal **brief cliente diretto** (slide 4, 6-9, 15-16, 28):

- **Building bridges** (purpose-payoff verbatim)
- **Corporate Learning** (preferito a "formazione aziendale" generica)
- **Nuova pedagogia** (positioning verbatim)
- **Engaged Research** (nucleo, sempre maiuscolo, mai tradotto)
- **Mecenatistica / mecenatismo** (vocazione esplicita brief slide 6)
- **Propensione internazionale** (positioning verbatim)
- **Contaminazioni interdisciplinari** (positioning verbatim)
- **Cointelligenza umano-IA** (verbatim brief Pilastro 03)
- **Premi Nobel** (al plurale, Pilastro 03)
- **Unwavering Care** (Brand Book pp.4, principio fondante marchio)
- **Industry of care** (payoff istituzionale Angelini Industries, Brand Book pp.17 verbatim)
- **Centralità della dimensione umana** (cliente stesso usa, brief slide 28)
- **MBA Gateway · a bridge to succeed** (verbatim brief slide 10)
- **Cattedra Luiss** (con la "L" maiuscola se cliente, "LUISS" allcap se acronimo del programma)
- **Skill mismatch** (verbatim, sempre nei contesti pharma/robotico)
- **Lifelong learning** (preferito a "formazione continua")
- **Modelli educativi innovativi** (filo rosso 2 brief)
- **Unique Proposition Corporate Learning** (filo rosso 3 brief)

Dal **Brand Book Angelini** (pp.4, 16-17):

- **Abbraccio** (segno visivo del marchio — pattern Brand Book pp.31)
- **A inclusivo, aperto, accogliente** (Brand Book pp.4 letterale)
- **Casa Angelini** (sede simbolica, Viale Amelia 70 Roma)

Dal **sito attuale www.angeliniacademy.com** (preservare continuità):

- **Growing together** (claim attuale — può convivere come tagline secondaria o trasformarsi nel "ponte costruito insieme")
- **Valorizzare il talento**
- **Sviluppare le potenzialità delle persone**
- **+1.200 partecipanti, +40 corsi, 20 partner** (metriche da preservare/aggiornare)
- **ASFOR accreditato** (credenziale formale da non perdere)

### Parole-no (lessico chiuso — evitare sempre)

| Da non usare | Perché | Alternativa |
|---|---|---|
| ~~"Approfondisci"~~ | Generico, debole | Sempre verbo + oggetto specifico: "Esplora le masterclass", "Scopri il MBA Gateway", "Leggi il paper" |
| ~~"Soluzioni"~~ | Gergo commerciale | "Programmi", "Percorsi", "Corsi" |
| ~~"Esperienza formativa"~~ | Gergo L&D | "Programma", "Masterclass", "Percorso" |
| ~~"Workforce"~~ | Anglicismo non necessario | "Persone del Gruppo", "Dipendenti", "Team" |
| ~~"Stakeholder"~~ | Anglicismo non necessario | "Interlocutori", "Partner", "Comunità" |
| ~~"Best-in-class"~~ | Gergo corporate | "Di riferimento", "Pre-validato", "Riconosciuto" |
| ~~"Cutting-edge"~~ | Gergo tech | "All'avanguardia", "Di frontiera" |
| ~~"Game-changer"~~ | Sloganistico | (rimuovere proprio) |
| ~~"Empowerment"~~ | Sloganistico anglosassone | "Crescita", "Autonomia", "Strumenti" |
| ~~"Tailor-made" / "Su misura"~~ (con cautela) | Quando vago | Solo se vero: "Co-progettato con la vostra azienda", "Sui fabbisogni specifici" |
| ~~"Eccellenza"~~ | Inflazionato | Mostrarla con dati, non dichiararla |
| ~~"Investire nel futuro"~~ | Cliché | (riformulare con cifra concreta) |
| ~~"DNA"~~ (metaforico) | Cliché corporate | "Vocazione", "Principio", "Forma mentis" |
| ~~"Filo rosso"~~ (come navigation) | Audit 15/5: i fili rossi sono OBIETTIVI di comunicazione interna, non colonne editoriali esposte | OK in §15 cliente, NO come label di sezione esposta all'utente |
| ~~"Catalogo"~~ (riferito a Angelini) | Lo siamo NON | "Programmi", "Offerta formativa" |
| ~~"AI" da solo~~ | Senza contesto pedagogico | Sempre "AI applicata a X" (pedagogia, leadership, decisioni); o "cointelligenza umano-IA" verbatim Pilastro 03 |

### Anglicismi gestiti (sì con cautela, sempre in corsivo se non titoli)

| Anglicismo | Uso consentito | Esempio |
|---|---|---|
| MBA / EMBA | Sempre, è acronimo internazionale | "MBA Gateway", "EMBA co-progettato" |
| Corporate Learning | Sempre, lessico cliente | Mai tradurre |
| Engaged Research | Sempre, naming proprietario | Mai tradurre |
| Career Path | OK in contesto strumento Galileo | "Career Path Navigator" |
| Cross-OpCo | OK è terminologia interna stabilita | "Rotation Cross-OpCo" |
| Cohort | OK in contesto formativo | "La tua cohort" |
| Re-skilling / Up-skilling | OK in contesto HR & Business | Mai in voce Magician |
| Bridge to succeed | OK nel claim MBA Gateway verbatim brief | Solo lì |

### Anglicismi proibiti

- Insights → "spunti", "evidenze"
- Knowledge → "competenza", "sapere"
- Network (come verbo) → "rete", "fare rete"
- Opportunità (come "opportunity") va bene, ma `opportunity` proibito
- Mindset → "approccio", "forma mentis"
- Onboarding (UI funzionale OK; voce editoriale NO) → "primo accesso", "introduzione"

---

## §5 · Copy blessato verbatim — frasi intoccabili

> Queste frasi sono **già state validate** dal brief cliente, dal pitch v3.1 o sono **già nella codebase coerenti**. **Non si toccano** durante il rewriting. Se devi modificarle, flagga a Carlo prima.

### 5.1 Purpose + 5 ponti (brief slide 8 verbatim)

**Payoff:**
> "Building bridges in education."

**Sotto-claim 5 ponti (verbatim brief):**
> "Costruiamo ponti solidi tra **competenze richieste e offerte, scuola e mondo del lavoro, talento e carriera, aspirazioni e opportunità, longevità lavorativa e aggiornamento professionale**, rendendo accessibile un'istruzione di qualità e trasformandola in una potente leva per la crescita e la realizzazione personale. In un ambiente di lavoro in continua evoluzione."

→ Va riportato verbatim nella pagina `Chi Siamo` §11.x e nell'Hero Home con eventuale taglio sui 5 ponti (oggi solo 3).

### 5.2 Posizionamento ufficiale (brief slide 7 verbatim)

> "Angelini Academy, la società di Angelini Industries dedicata al **Corporate Learning**, propone una nuova **pedagogia** che combina tecnologie avanzate, contaminazioni interdisciplinari e la ricerca di nuove competenze e modelli educativi. Con una **propensione internazionale**, rinnova la formazione aziendale per preparare le persone ad affrontare con successo le sfide di un contesto lavorativo globale in costante evoluzione."

→ Già in `ChiSiamo.tsx` come blockquote — preservare letteralmente.

### 5.3 Vision (brief slide 6 verbatim)

> "Achieve global leadership in corporate learning innovation through new contents and new learning models."

→ Già in `ChiSiamo.tsx`. Resta in inglese (è verbatim brief).

### 5.4 I 4 pilastri — titoli e body verbatim (brief slide 9)

**Pilastro 01:** *Corporate Learning all'avanguardia per leader e talent*
> "La leadership non si costruisce solo con strumenti manageriali. Le nostre masterclass mescolano scienze del comportamento, arti, intelligenza artificiale e discipline umanistiche, perché chi guida domani avrà bisogno di vocabolari che oggi sembrano lontani."

**Pilastro 02:** *Innovazione graduale nelle competenze tecniche e manageriali*
> "Lavoriamo dentro le società del Gruppo Angelini per costruire programmi su misura per **Pharma, Tech, Ventures e Fater**. Niente formazione astratta: progettiamo percorsi che partono dalle competenze che servono lunedì mattina e arrivano fino alle skill che serviranno tra cinque anni."

**Pilastro 03:** *Educational Think Tanks* — **DA RISCRIVERE in §9 patch P4**:
> "Una volta all'anno apriamo Casa Angelini agli accademici, alle istituzioni e ai talenti che stanno ridisegnando i confini tra umano e intelligenza artificiale. **Forum annuale con Premi Nobel, workshop creativi o hackathon che coinvolgono la cointelligenza umano-IA**."

**Pilastro 04:** *Magnete di talenti · Angelini Academy Gateway* — sostanzialmente intatto, ma aggiungere:
> "10 giovani **con minimo 3 anni di esperienza professionale a tempo pieno (dalla laurea triennale)**, selezionati per merito e potenziale, un MBA full-time a Madrid con IE Business School **con modulo didattico su Life Sciences O sulla Robotica Industriale**, uno stage di 3-6 mesi in una delle aziende del gruppo Angelini, una possibilità concreta di assunzione. [...] **In caso di non accettazione dell'offerta, verrà richiesto il pagamento per intero del programma formativo**."

### 5.5 MBA Gateway — clausola integrale (brief slide 11 verbatim)

> "10 giovani, con minimo 3 anni di esperienza professionale a tempo pieno (calcolata dal conseguimento della laurea triennale), desiderosi di accelerare la propria carriera.
> 
> I frequentare un full-time international MBA presso l'università IE di Madrid, con l'aggiunta di un modulo didattico su Life Sciences o sulla Robotica Industriale.
> 
> Al termine degli studi, i partecipanti svolgeranno uno stage di 3-6 mesi all'interno delle aziende del Gruppo Angelini (Pharma, Tech, Ventures, Fater, ecc.).
> 
> La partecipazione al master sarà finanziata da Angelini Academy. Il finanziamento è totale, e include anche i costi di soggiorno, per i giovani selezionati con ISEE-ISPE inferiore a 50.000 €, mentre per gli altri è prevista una tassa di iscrizione di 20.000 € (circa il 25% del valore di mercato del master).
> 
> I partecipanti che, durante lo stage, dimostreranno meriti e competenze rilevanti per le società operative, riceveranno una proposta di assunzione. In caso di non accettazione dell'offerta, verrà richiesto il pagamento per intero del programma formativo."

→ Spalmare verbatim in `MbaGateway.tsx` intro + sezione candidature/finanziamento + clausola di chiusura. Non parafrasare.

### 5.6 Engaged Research — 4 ambiti verbatim (brief slide 9)

I 4 ambiti del nucleo:

1. Neuroscienze dell'apprendimento
2. Tecnologie educative
3. Pedagogia e nuovi metodi di insegnamento
4. Skill mismatch nel settore farmaceutico e/o robotico

→ Vanno sostituiti ai 3 verticali editoriali attualmente in `PercorsiResearcher.tsx` e in `EngagedResearch.tsx` come tassonomia del nucleo. La taxonomy editoriale del Reading Room (`Lifelong over 50 · Skill mismatching · AI applicata pedagogia`) può restare come **classificazione dei paper esistenti**, ma il nucleo va presentato con i 4 ambiti cliente.

### 5.7 8 partner istituzionali verbatim (brief slide 9 loghi)

**Lista ufficiale, ordine alfabetico per non dare gerarchie:**

1. IE Business School (Madrid)
2. IMD (Lausanne)
3. London Business School (LBS)
4. LUISS Business School
5. Royal College of Art (RCA, London)
6. SDA Bocconi
7. Stockholm School of Economics
8. UCL · University College London

→ Lista canonica per: `Partners.tsx` marquee + PreviewModal, `ChiSiamo.tsx` chips, `PercorsiResearcher.tsx` chips, `Pillars.tsx` nucleo Engaged Research body.

### 5.8 PersonaSelect taglines (5 personas, formula "Cerca X")

Pattern formale: ogni persona ha una tagline costruita come *"Cerca X."*

1. **Giovane Talento**: *"Cerca opzionalità tra corporate, founder e VC."*
2. **Ricercatore Accademico**: *"Cerca un canale per tradurre la teoria in programmi."*
3. **HR & Business**: *"Cerca alternative ai cataloghi standard delle business school."*
4. **Media & Istituzioni**: *"Cerca storie italiane verificabili."*
5. **Imprese & Partner di filiera**: *"Cerca un partner per co-progettare le competenze e assumere i talenti formati."*

→ Verbatim. Non variare.

### 5.9 Footer tagline (preservare attuale)

> "Building bridges in education."

(Già verbatim. Brand Book Abbraccio in pattern di sfondo.)

### 5.10 Quote Sofia (Founder Stories canonica — terza iterazione 25/5/2026)

> "Pensavo che certe porte fossero chiuse. Tre anni dopo guido un lancio in nove paesi."

→ Versione canonica v2.2. Va in 3 file coerenti (`People.tsx` Home, `PercorsiTalent.tsx`, `FounderStories.tsx`). Non variare.

**Razionale**: "Porte chiuse" è metafora universale — ogni lettore proietta la sua barriera (economica, geografica, di rete, di genere, di conoscenze) senza che il copy riduca Sofia al portafoglio. Mantiene l'arco "credenza interiore di limite → fatto oggettivo opposto".

**Versioni precedenti archiviate**:
- v1 (15-25/5/2026): *"Sono entrata pensando di studiare. Sono uscita avendo attraversato un ponte che non sapevo esistesse."* — scolastica/metaforica.
- v2.1 (25/5/2026): *"Provincia, chimica, nessuna business school in famiglia. Tre anni dopo guido un lancio in nove paesi."* — troppo aggressiva sul tema socio-economico (giudizio Carlo: il tema soldi è delicato in comunicazione brand premium).

---

## §6 · Regole voce per pagina

> 17 pagine × archetipo primario + secondario + audience target + cue di voce + 1 frase di indirizzo.

### §6.1 Home `/` — landing pubblica

- **Archetipo primario**: Magician (Hero + PersonaSelect)
- **Archetipo secondario**: Sage (Pillars + Partners + People)
- **Audience**: tutti i 5 cluster + scoperta cieca
- **Cue di voce**: "una soglia, non un'agenda commerciale"
- **Frase di indirizzo**: la Home invita ad attraversare, non a comprare. Niente CTA "iscriviti adesso" prima del Pillars.

### §6.2 PersonaSelect (sezione Home) — soglia 5 personas

- **Archetipo primario**: Magician
- **Cue di voce**: ogni tagline è una pulsione, non una descrizione anagrafica
- **Pattern blessato**: "Cerca X" (vedi §5.8)
- **Apertura editoriale verbatim 2 voci** (call 19/5):
  - Riga 1 Merriweather italic bold: *"Scegli un personaggio se vuoi personalizzare la tua esperienza."*
  - Riga 2 Merriweather italic light: *"Oppure scorri verso il basso ed esplora."*
- **Vincolo**: niente "TROVA IL TUO PERCORSO" / "QUAL È IL TUO PROFILO" — non siamo un quiz.

### §6.3 `/percorsi/talent` — Giovane Talento

- **Archetipo primario**: Magician (audience studenti/junior, voce aspirazionale)
- **Archetipo secondario**: Sage (per i fatti MBA Gateway)
- **Audience**: 24-32, life sciences/robotica, opzionalità carriera
- **Cue di voce**: "il talento esiste già, anche dove le risorse non bastano"
- **Anti-pattern specifico**: niente paternalismo ("ti guideremo nel tuo percorso"). Lui/lei è agente del proprio destino.

### §6.4 `/percorsi/researcher` — Ricercatore Accademico

- **Archetipo primario**: Sage
- **Audience**: 32-50, accademici, pedagogia/edTech
- **Cue di voce**: "Engaged Research, non ricerca commissionata"
- **Vincolo**: ogni paper citato deve avere autore e affiliation. Voce in terza persona.
- **Patch §9.P5**: ripristinare 4 ambiti brief verbatim come tassonomia del nucleo + Cattedra LUISS spotlight come filo rosso.

### §6.5 `/percorsi/hr-business` — HR & Business

- **Archetipo primario**: Sage (interlocutore CHRO/CLO, decisione razionale)
- **Archetipo secondario**: Magician minimo (solo CTA finale)
- **Audience**: 38-55, CHRO, Chief Learning Officer, Head of People Development
- **Cue di voce**: "non un catalogo, un laboratorio"
- **Vincolo**: i 4 settori (Pharma, Biotech, Manufacturing, Financial Services) come ASSI di lavoro, non come targeting commerciale. Mai "rivolto a pharma" — sempre "co-progettato con il settore X".

### §6.6 `/percorsi/imprese` — Imprese & Partner di filiera (5° persona)

- **Archetipo primario**: Sage (Innovation Director, decisione su partnership strategica)
- **Archetipo secondario**: Magician (consorzio di competenze, visione collaborativa di filiera)
- **Audience**: Innovation Director / Direzione strategica imprese manifatturiere e di filiera Pharma/Tech/Consumer
- **Cue di voce**: "partner di ecosistema, non cliente"
- **Frase di indirizzo**: NON vendiamo programmi a queste imprese. Co-progettiamo, condividiamo i talenti, costruiamo con loro la mappa delle competenze del prossimo decennio.

### §6.7 `/percorsi/media` — Media & Istituzioni

- **Archetipo primario**: Sage (Press Room, fonti verificabili)
- **Audience**: giornalisti, policy maker, associazioni di categoria, istituzioni
- **Cue di voce**: "storie italiane verificabili"
- **Vincolo**: niente storytelling emotivo. Press Room = funzione pubblica. Voce neutra, dati, contatti diretti, archivio.

### §6.8 `/engaged-research` — Nucleo 00

- **Archetipo primario**: Sage (massimo rigore)
- **Audience**: accademici + ricercatori partner + curiosi competenti
- **Cue di voce**: "ricerca pedagogica firmata con i partner"
- **Vincolo strutturale**: i **4 ambiti brief** (§5.6) come tassonomia del nucleo. Il Reading Room con i suoi 6 paper è esposizione, non taxonomy ufficiale del nucleo.
- **Galileo Research Engine**: deve dichiarare esplicitamente "DeepMind per la pedagogia" come frame metaforico (citato Pitch v3.1) + "Cosa NON fa" verbatim.

### §6.9 `/mba-gateway` — Programma di riferimento

- **Archetipo primario**: Sage (fatti, timeline, clausole)
- **Archetipo secondario**: Magician (CTA + EOI form)
- **Audience**: 10 borsisti/anno + candidati esterni
- **Cue di voce**: "10 borsisti, 1 MBA a Madrid, 3-6 mesi in Angelini"
- **Patch §9.P7-9**: integrare verbatim clausola pagamento (§5.5), esperienza minima 3 anni post-laurea triennale, focus Life Sciences O Robotica.

### §6.10 `/founder-stories`

- **Archetipo primario**: Magician (prima persona dei protagonisti)
- **Audience**: candidati MBA Gateway + curiosi pre-decisione
- **Cue di voce**: "le voci sono loro — non la nostra"
- **Vincolo**: prima persona, parlato realistico. Mai testimonial preconfezionati stile pubblicità. Mantenere imperfezioni del parlato.

### §6.11 `/chi-siamo`

- **Archetipo primario**: Sage (istituzionale)
- **Audience**: prima visita, stakeholder istituzionali, stampa
- **Cue di voce**: "una SRL con DNA accademico"
- **Vincoli**:
  - Posizionamento §5.2 verbatim
  - Vision §5.3 verbatim
  - 4 valori del manifesto — preservare formulazione attuale (Mecenatismo / Engaged Research / Nodo italiano / Cross-OpCo)
  - Patch §9.P11: integrare frase "Unwavering Care" + "Centralità dimensione umana"
  - Patch §9.P17: aggiornare sezione "Parte di Angelini Industries" con i 10 derivati brand book + 4 OpCo MBA evidenziate
  - Team: 4 placeholder ruolo finché cliente non autorizza nomi/foto reali

### §6.12 `/press`

- **Archetipo primario**: Sage
- **Audience**: stampa, policy maker
- **Cue di voce**: "asset, archivio, contatti diretti"
- **Vincolo**: linguaggio comunicato-stampa. Date, fonti, dichiarazioni autorizzabili. Niente narrazione.

### §6.13 `/contatti`

- **Archetipo primario**: Sage minimale (utility)
- **Cue di voce**: "Risposta in 3 giorni lavorativi"
- **Patch**: aggiungere 6° opzione select "Sono un'impresa di filiera / partner".

### §6.14 `/eventi`

- **Archetipo primario**: Sage descrittivo
- **Archetipo secondario**: Magician (Forum Trento + Forum Casa Angelini DIC)
- **Cue di voce**: "Dove ci troverete nei prossimi mesi"
- **Patch §9.P16**: aggiungere Fondazione Kessler come partnership Festival Trento.
- **Patch**: spostare Forum 2026 da NOV a DIC (brief slide 22 verbatim) + dichiarazione "Da valutare partecipazione di un Premio Nobel" (futuribile, non "keynote 2025" che è retrospettivo).

### §6.15 `/blog`

- **Archetipo primario**: misto, dipende dallo stream
- **3 stream attuali**: Identità · Ricerca · Programmi (audit 15/5)
- **Vincolo**: gli stream sono **classificazione editoriale**, NON copia 1:1 dei 3 fili rossi brief. Sono livelli di profondità:
  - **Identità** → posizionamento, lato umano, scelte societarie (voce Magician + Sage)
  - **Ricerca** → paper, evidenze, metodologia (voce Sage rigida)
  - **Programmi** → fatti del programma, dietro-le-quinte borse/MBA/masterclass (voce Sage + Magician puntuale)
- **Eyebrow Blog**: resta **"EDITORIALE · TRE STREAM TEMATICI"** (decisione 25/5/2026). Divieto esplicito di usare "fili rossi" come label esposta — il concetto sta nel brief cliente e nei documenti interni, **non nel copy del sito**.

### §6.16 `/dashboard` (riservata team)

- **Archetipo**: utility funzionale, voce Sage minimale
- **Audience**: team Academy interno
- **Cue di voce**: niente — è una dashboard analitica, copy minimo

### §6.17 `/engaged-network` (community Q1 2027)

- **Archetipo primario**: Sage (autorevole + qualità)
- **Cue di voce**: "una community piccola, prima. Poi più ampia, quando regge"
- **Vincolo**: zero hype crescita. "Si entra su invito", "criterio = valore del contributo". Niente "join the movement".

### §6.18 `/angelini-people` (riservata Gruppo)

- **Archetipo primario**: Sage (catalogo formativo interno autorevole) + Magician minima (apertura)
- **Audience**: dipendenti Gruppo Angelini Industries + HR Community
- **Cue di voce**: "una finestra editoriale e relazionale, non una intranet operativa"
- **Vincolo**: NON è LMS, NON è SSO Microsoft, NON è payroll. È **strato editoriale-relazionale**.

### §6.19 Header globale

- **Voce**: minimalista, mai imperative shock ("ISCRIVITI ORA"), sempre indicativi
- **CTA primaria preservata**: *"Candidati al MBA Gateway"* (IT) / *"Apply to the MBA Gateway"* (EN)
- **Vincolo lessico nav**: "L'Academy" con maiuscola dopo l'apostrofo; "Area Angelini" come label (NON "Area Riservata" — confusion con Dashboard)

### §6.20 Footer globale

- **Tagline blessata**: "Building bridges in education." (§5.9)
- **4 colonne**: Academy · Percorsi · Esplora · Angelini Industries
- **Patch §9.P17**: colonna "Angelini Industries" mantiene 4 link OpCo MBA (Pharma · Tech · Ventures · Fater) + 1 link "angeliniindustries.com →" che è il rimando al brand system completo (10 derivati Brand Book pp.16).

---

## §7 · Anti-pattern checklist — gate prima di firmare

> Prima di considerare "finita" una sezione di copy, **passare ogni frase attraverso questa lista**. Se anche solo una bandiera rossa scatta, riscrivere.

### 7.1 Test dello sloganismo

❌ La frase si potrebbe trovare uguale su qualsiasi sito corporate? → riscrivere.

❌ Contiene parole "rivoluzionario", "innovativo" (come aggettivo, non come ToV), "leader", "best-in-class", "unique"? → riscrivere senza queste parole.

❌ Suona come "Investiamo nelle persone per costruire il futuro"? → riscrivere con un dato concreto.

### 7.2 Test della verifica fattuale

❌ Cita un numero senza fonte? → aggiungere fonte tra parentesi quadre `[F, brief pag. X]` oppure rimuovere il numero. **Mai inventare.**

❌ Cita un partner istituzionale che non è negli 8 brief (§5.7)? → spostare in "partner di programma" o rimuovere.

❌ Dice "i nostri 8 partner: …" e l'elenco non corrisponde al §5.7? → correggere.

❌ Cita una data "futura prevista" senza dire "TBD" / "previsto" / "in arrivo"? → aggiungere disclaimer.

### 7.3 Test del verbo CTA

❌ La CTA dice "Approfondisci" / "Scopri di più" / "Continua a leggere"? → riscrivere con verbo + oggetto specifico (es. "Esplora il MBA Gateway", "Leggi il paper UCL-Angelini").

❌ La CTA è imperativa shock ("ISCRIVITI ORA!", "NON PERDERE QUESTA OPPORTUNITÀ")? → riscrivere in tono pacato.

### 7.4 Test della redundancy

❌ L'eyebrow ripete letteralmente l'ultimo nodo del breadcrumb? → PageShell sopprime automaticamente, ma verifica intent: era voluto?

❌ Il H1 + intro dicono la stessa cosa con parole diverse? → semplificare uno dei due.

### 7.5 Test del tono di voce (5 ToV cliente)

Per ogni sezione di copy, controllare che siano riconoscibili **almeno 3 dei 5 attributi**:
- ☐ Autorevole
- ☐ Autentico
- ☐ Vicino
- ☐ Ispirazionale
- ☐ Innovativo

Se 0-2 → riscrivere. Se 5/5 → probabilmente esagerato, alleggerire.

### 7.6 Test della centralità umana (driver editoriale brief slide 28)

Per ogni sezione, chiedersi: **dove sono le persone qui?**
- C'è una persona reale (volto, voce, esperienza)?
- Oppure è solo numeri/concetti/aziende?

→ Se la sezione è 100% concetti → considerare di affiancare 1 elemento umano (quote, ritratto, volto, traiettoria reale).

→ Eccezioni legittime: Press Room (è funzionale), Dashboard (è funzionale), pagine utility (Contatti).

### 7.7 Test della clausola di salvaguardia (CLAUDE.md §13)

❌ Il testo nomina Soolutions, Silencio, Jakala, qualunque fornitore tecnologico terzo? → riscrivere come **"team di sviluppo HeyAI"** o **"team tecnico"**.

### 7.8 Test della voce dell'archetipo

❌ La sezione è descrittiva-metodologica ma usa verbi Magician ("attraversiamo", "trasformiamo")? → tornare a Sage ("co-progettiamo", "documentiamo").

❌ La sezione è Hero/payoff ma usa verbi Sage ("documentiamo i risultati", "pubblichiamo paper")? → riportare in Magician ("attraversare", "costruire").

### 7.9 Test dell'unicità (non clonare il sito attuale)

❌ La frase si potrebbe trovare uguale su www.angeliniacademy.com 2025? → non è regressione (OK preservare alcuni elementi), ma è un'occasione persa. Riscrivere con il nuovo posizionamento.

### 7.10 Test del "domani"

❌ La frase risulta ridicola tra 12 mesi (es. "ENTRO IL 2026 SAREMO LA #1 ACADEMY EU")? → riformulare in modo che regga.

### 7.11 Test della densità (rinforzato 25/5/2026)

❌ Il paragrafo è > 4 righe (~280 caratteri)? → **spezzarlo**, non "considerare".

❌ La frase è > 25 parole? → **spezzarla**. Mai una frase che impila più di 3 informazioni distinte.

❌ Una intro hero/pagina enumera > 4 informazioni in una singola frase? → riscrivere in **3-4 frasi corte**, spostare i dettagli in altre sezioni della pagina (timeline, manifesto, FAQ).

**Case study negativo** (intro MBA Gateway, prima versione v2): "Dieci giovani con minimo 3 anni di esperienza professionale (dalla laurea triennale), selezionati per merito e potenziale ogni anno. MBA full-time a Madrid presso IE Business School con modulo didattico su Life Sciences o Robotica Industriale, stage di 3-6 mesi nelle aziende del gruppo (Pharma, Tech, Ventures, Fater), proposta di assunzione per chi dimostra meriti e competenze rilevanti. [...] In caso di non accettazione dell'offerta, viene richiesto il pagamento intero del programma — skin in the game, accessibilità al merito." → **6 informazioni in 4 frasi-monstre**. Fix: ridurre intro a 3 frasi essenziali, spostare verticali (Life Sciences/Robotica) nella timeline, clausola in EOI o ultima fase timeline.

### 7.12 Test della densità di pagina (regola di sistema)

❌ Sto aggiungendo una sezione NUOVA in una pagina già esistente? → **FLAGGARE prima**, mai aggiungere di iniziativa. Il sito è già denso (17 pagine, 5 personas, 5 capability Galileo, 8 partner, 4 ambiti ER, ecc.). Più volume = meno chiarezza = cliente fatica a leggere.

❌ La sezione che sto aggiungendo dice qualcosa già detto in un'altra sezione della stessa pagina? → **eliminare**, non duplicare. Esempio: "Unwavering Care" come sezione standalone dopo che è già nel Manifesto valore 01 chiusura → ridondante, va tolto.

### 7.13 Test della label interna esposta (aggiunto 25/5/2026)

❌ La sezione ha un eyebrow/label che descrive il **suo ruolo nel sistema editoriale interno** (es. *"Driver editoriale"*, *"Manifesto editoriale"*, *"Brand pillar"*, *"Filo rosso"*, *"Tassonomia"*, *"Operating procedure"*, *"Strategic anchor"*)? → **ELIMINARE l'eyebrow** (o l'intera sezione, se la sostanza è già altrove).

**Razionale**: queste label svelano architettura interna del documento di brand/Brief. L'utente finale (studente, ricercatore, CHRO, giornalista) non deve sapere che una frase è il "driver editoriale" — deve solo riceverla e crederci. La label rompe l'illusione.

**Case study negativo** (Chi Siamo, sezione "Centralità della dimensione umana" introdotta in v2): aveva eyebrow *"Driver editoriale"* + body *"La centralità della dimensione umana è il nostro driver…"*. Doppia esposizione interna (eyebrow + parola "driver" nel body). **Sezione rimossa interamente** il 25/5/2026.

**Etichette ammesse** (descrivono il contenuto, non il sistema editoriale):
- ✅ "MBA Gateway · Programma di riferimento"
- ✅ "Engaged Research · Nucleo 00"
- ✅ "Calendario 2026"
- ✅ "Press kit"
- ✅ "Manifesto · Quattro valori" (descrive cosa segue, non come è classificato)

**Etichette vietate** (descrivono il sistema editoriale interno):
- ❌ "Driver editoriale"
- ❌ "Voce del brand"
- ❌ "Pillar narrativo"
- ❌ "Tassonomia editoriale"
- ❌ "Filo rosso strategico" (filo rosso = concetto interno brief, vedi §4)

---

## §8 · Driver narrativi trasversali

> Tre concetti che NON sono titoli o slogan, ma **temi che attraversano tutto il sito** come spina dorsale narrativa. Vanno **incarnati**, non citati.

### 8.1 Unwavering Care (Brand Book pp.4)

**Cosa significa per il brand Angelini:**
> "Avere a cuore sempre le persone, la loro quotidianità e il loro futuro, in tutto ciò che si fa." (Brand Book pp.4 verbatim)

**Come si traduce nel sito Angelini Academy:**
- Il mecenatismo dell'MBA Gateway (borsa totale per ISEE < 50k) **è** Unwavering Care applicato all'educazione.
- L'archetipo Sage che spiega senza vendere **è** Unwavering Care nella voce.
- La centralità della dimensione umana (vedi §8.2) **è** Unwavering Care nelle scelte editoriali.

**Dove dichiararlo esplicitamente** (1-2 punti chiave):
- Chi Siamo, sezione apertura post-posizionamento:
  > *"Angelini Academy nasce dal principio Unwavering Care del Gruppo: avere a cuore le persone, il loro presente, il loro futuro. La nostra forma è la formazione."*
- Chi Siamo, Manifesto valore 01 "Mecenatismo, non vendita", chiusura paragrafo:
  > *"È la prima forma di Unwavering Care applicata all'educazione."*

**Dove NON citarlo esplicitamente**: dappertutto. Va incarnato, non dichiarato. Se la voce è giusta, "Unwavering Care" non serve come parola.

### 8.2 Centralità della dimensione umana (driver editoriale, brief slide 28)

**Verbatim cliente, brief slide 28 "So What":**
> "I contenuti che hanno generato le performance migliori sono legati ad eventi e masterclass, che hanno valorizzato il lato autentico e umano di Angelini Academy, mostrando volti, esperienze e relazioni, e rafforzato il legame con il pubblico."

**È un'osservazione che il cliente stesso ha fatto sui propri KPI social.** Non è una nostra invenzione, è un dato.

**Come si traduce nel sito:**
- **People (Home)**: 3 volti reali, alternati W-M-W, prima dei numeri
- **Founder Stories**: 3 storie in prima persona, le voci sono loro non la nostra
- **Persona Select**: 5 personaggi reali, full-body, glow accentato, non avatar generici
- **Pillars + Engaged Research**: ogni numero ("8 partner", "10 borsisti", "4 ambiti") è preceduto o seguito da un volto/voce reale
- **Galileo (4 capability)**: ogni declinazione ha "Cosa NON fa" che protegge il ruolo umano. **Vincolo non negoziabile**: l'AI non sostituisce l'umano, lo affianca

**Dove dichiararlo esplicitamente**: ❌ **DA NESSUNA PARTE** (aggiornamento 25/5/2026 post-feedback Carlo).

> Razionale autocritico: avevo proposto una sezione "Driver editoriale · Centralità della dimensione umana" in `ChiSiamo.tsx`. **È stata rimossa** perché:
> 1. **Auto-violazione del principio**: il principio stesso dice "va incarnato, non dichiarato".
> 2. **Label interna esposta**: "Driver editoriale" è un termine di architettura interna che l'utente finale non deve leggere.
> 3. **Ridondanza incarnata**: il concetto è già implicito in People (3 volti reali), Founder Stories (prima persona), Galileo "Cosa NON fa", PersonaSelect (5 personaggi distinti).
> 
> **Regola operativa**: i driver narrativi §8.x sono **istruzioni per chi scrive il copy**, non sezioni da pubblicare nel sito. Se la voce è giusta, il driver si vede senza nominarlo.

### 8.3 Premi Nobel + cointelligenza umano-IA (brief slide 9 verbatim)

**Verbatim brief slide 9, Pilastro 03:**
> "Forum annuale con premi Nobel, workshop creativi o hackathon che coinvolgono la cointelligenza umano-IA."

**Come si traduce nel sito:**

- **Pillars Home**, Pilastro 03 facts: cambiare "Nobel · keynote 2025" (singolare, retrospettivo) in **"Premi Nobel · Forum DIC"** o **"Cointelligenza · Forum 2026"**.
- **Engaged Research**, Galileo Research Engine: il frame "DeepMind per la pedagogia" (Pitch v3.1 §S5) **è** un'incarnazione della cointelligenza umano-IA. Va dichiarato esplicitamente nella sezione (è la nostra metafora più forte).
- **Eventi**, Forum DIC 2026: titolo "Forum Casa Angelini · Cointelligenza umano-IA" — formulazione che rende esplicito il tema dell'edizione.
- **Press Room**, comunicato Forum 2025 (retrospettivo): preservare "keynote di un Premio Nobel" (singolare) per quello specifico evento storico.

**Dove NON citarlo**: nelle pagine `/percorsi/*` che parlano a persone non accademiche. Lì il tema cointelligenza si può evocare ma non dichiarare con parole tecniche.

### 8.4 Bonus driver: il ponte è una promessa concreta (purpose verbatim brief slide 8)

I 5 ponti verbatim del brief NON sono metafore vaghe. Sono **5 connessioni operative**:

1. Competenze richieste ↔ competenze offerte → skill mismatch (paper)
2. Scuola ↔ mondo del lavoro → MBA Gateway + Engaged Research
3. Talento ↔ carriera → borse di studio + stage Cross-OpCo + job offer
4. Aspirazioni ↔ opportunità → Career Path Navigator + Founder Stories
5. Longevità lavorativa ↔ aggiornamento professionale → Lifelong learning programs + Angelini People

**Vincolo per il sito**: ogni ponte deve essere agganciato a una funzionalità del sito o a un programma. Mai metafora pura.

---

## §9 · Le 18 correzioni post-audit — lista tracciabile

> Lista operativa di patch da applicare alla codebase Astro. Ogni patch ha file → riga (approssimata) → cosa → fonte.

### P1 · 8° partner: Imperial → Stockholm SSE

| File | Cosa | Fonte |
|---|---|---|
| `components/Partners.tsx` riga 5-14 | Riscrivere `const partners` con lista §5.7 | Brief slide 9 |
| `components/Partners.tsx` riga 98 | Aggiornare body PreviewModal con nuova lista verbatim | — |
| `views/ChiSiamo.tsx` riga 59 | Aggiornare `const partners` | — |
| `views/PercorsiResearcher.tsx` riga 46 | Aggiornare `const partners` | — |
| `components/Pillars.tsx` riga 133 | Aggiornare body Nucleus Engaged Research con nuova lista | — |

### P2 · 4 OpCo Cross-OpCo verbatim brief

| File | Cosa | Stato attuale |
|---|---|---|
| `views/ChiSiamo.tsx` Manifesto valore 04 (riga 20) | "Pharma · Industrial Tech · Consumer · Ventures" → **"Pharma · Tech · Ventures · Fater"** | divergente |
| `views/ChiSiamo.tsx` Parte di Industries (riga 61, 335) | OK (Pharma·Tech·Ventures·Fater) | coerente |
| `views/PercorsiTalent.tsx` Cross-OpCo teaser (riga 197) | "Pharma, Industrial Tech, Consumer, Ventures" body → **"Pharma · Tech · Ventures · Fater"** | divergente |
| `views/EngagedResearch.tsx` Metodologia 02 (riga 12) | "Pharma, Tech, Consumer, Ventures" → **"Pharma · Tech · Ventures · Fater"** | divergente |
| `views/PercorsiImprese.tsx` Atomo nucleo (riga 37-42) | "Pharma · Industrial Tech · Consumer · Fater" → **"Pharma · Tech · Ventures · Fater"** | divergente |

> Nota: tutti convergono su **Pharma · Tech · Ventures · Fater (· ecc.)** verbatim brief slide 11. La codebase ha 4 nomenclature divergenti che convivono — vanno unificate.

### P3 · Pilastro 03 Educational Think Tanks — verbatim brief

| File | Cosa | Fonte |
|---|---|---|
| `components/Pillars.tsx` riga 100-110 | Riscrivere body + facts: integrare "Premi Nobel" plurale + "cointelligenza umano-IA" | Brief slide 9 verbatim |
| `components/Events.tsx` Forum 2026 (riga 92-102) | Aggiornare blurb + spostare data da NOV a DIC | Brief slide 22 |

### P4 · Engaged Research 4 ambiti verbatim

| File | Cosa | Fonte |
|---|---|---|
| `views/PercorsiResearcher.tsx` (Tre verticali, riga 113-118) | Sostituire i 3 verticali editoriali con i **4 ambiti brief** verbatim | Brief slide 9 |
| `views/EngagedResearch.tsx` (Hero intro + Reading Room intro) | Riferire i 4 ambiti come tassonomia del nucleo | — |

### P5 · Purpose 5 ponti verbatim

| File | Cosa | Fonte |
|---|---|---|
| `lib/i18n.tsx` hero.subtitle (riga 97) | Aggiornare per includere i 5 ponti verbatim brief | Brief slide 8 |
| `views/ChiSiamo.tsx` (intro/posizionamento) | Citare i 5 ponti dopo il payoff Building bridges | — |

### P6 · MBA Gateway intro + clausola verbatim

| File | Cosa | Fonte |
|---|---|---|
| `views/MbaGateway.tsx` riga 126-131 | Riscrivere intro verbatim brief slide 11 (compresi "minimo 3 anni esperienza" + "Life Sciences O Robotica" + clausola pagamento) | Brief slide 11 |
| `views/MbaGateway.tsx` timeline (riga 26-43) | Aggiornare con dettagli verbatim brief | Brief slide 11 |

### P7 · 5 ToV griglia operativa applicata

→ Nessuna patch fisica isolata. È **principio §3 applicato dappertutto**. Diventa il filtro di revisione (§7.5 checklist).

### P8 · Unwavering Care + dimensione umana

| File | Cosa | Fonte |
|---|---|---|
| `views/ChiSiamo.tsx` (sezione apertura post-posizionamento) | Inserire frase "Angelini Academy nasce dal principio Unwavering Care…" (§8.1) | Brand Book pp.4 |
| `views/ChiSiamo.tsx` Manifesto valore 01 | Aggiungere chiusura "È la prima forma di Unwavering Care applicata all'educazione." | — |
| `views/ChiSiamo.tsx` (post Manifesto) | Aggiungere frase "Centralità dimensione umana" (§8.2) | Brief slide 28 |

### P9 · Tipografia & palette rispettata

→ Già implementata in `index.css` (token corretti). **Verificare in fase Step 2 che tutti i `font-editorial-italic` siano coerenti con Brand Book pp.21-23**.

### P10 · Cattedra LUISS ripristinata

| File | Cosa | Fonte |
|---|---|---|
| `views/EngagedResearch.tsx` | Re-inserire sezione "LUISS spotlight" (rimossa 19/5) con dignità di filo rosso strategico | Brief slide 15 |
| `views/PercorsiResearcher.tsx` | Mantenere Cattedra LUISS nella narrazione (oggi è solo in `papers.authors`) | — |

### P11 · Fondazione Kessler menzionata

| File | Cosa | Fonte |
|---|---|---|
| `components/Events.tsx` Trento entry (riga 39-52) | Aggiungere "in partnership con Fondazione Kessler" nel blurb | Brief slide 21 |

### P12 · Architettura Industries — Footer + ChiSiamo

| File | Cosa | Fonte |
|---|---|---|
| `views/ChiSiamo.tsx` "Parte di Industries" (riga 326-340) | Aggiornare con i 10 brand derivati Brand Book pp.16 + 4 OpCo MBA evidenziate | Brand Book pp.16 |
| `components/Footer.tsx` colonna "Angelini Industries" (riga 45-53) | Mantenere 4 link OpCo MBA + 1 link angeliniindustries.com (semplificato per UX, brand system completo via link) | — |

### P13 · Quote Sofia canonica (allineamento 3 file)

| File | Cosa |
|---|---|
| `components/People.tsx` riga 20 | **OK** (versione canonica già presente) |
| `views/PercorsiTalent.tsx` riga 154 | **OK** (versione canonica già presente) |
| `views/FounderStories.tsx` riga 17 | **OK** (versione canonica già presente) |
| `lib/i18n.tsx` (EN translation) | **OK** |
| Vecchio Mockup `/Mockup Sito` | Aggiornato a `attraversato un ponte che non sapevo esistesse` |

### P14 · 5 personas (PersonaSelect 5° aggiunta Imprese)

→ Già implementato in `components/PersonaSelect.tsx` riga 102-117. **Verificare** che il header dropdown ha 5 voci percorsi (oggi: OK in `components/Header.tsx` riga 13-19).

### P15 · Contatti form — 6° opzione

| File | Cosa |
|---|---|
| `views/Contatti.tsx` riga 4-10 | Aggiungere 6° opzione `motivi`: "Sono un'impresa di filiera / partner di co-design" |

### P16 · Forum Casa Angelini · Premi Nobel da valutare (futuribile)

| File | Cosa |
|---|---|
| `components/Events.tsx` Forum 2026 (riga 99) | Cambiare "Possibile partecipazione di un Premio Nobel" → "Da valutare partecipazione di un Premio Nobel" (verbatim brief slide 22) + cambiare data da NOV a DIC |
| `views/Press.tsx` Forum Educational 2025 (riga 41-44) | OK preservare "keynote di un Premio Nobel" come retrospettivo (evento del passato) |

### P17 · Lessico nav header — "Area Angelini" (vs Riservata)

→ Già implementato in `components/Header.tsx` riga 78 (`label: 'Area Angelini'`). **Cattolicare in §6.19 anti-pattern**: niente "Area Riservata" come label esposta — è già usata per `/dashboard` riservata.

### P18 · 5° persona Imprese — eyebrow + framing

| File | Cosa |
|---|---|
| `views/PercorsiImprese.tsx` (eyebrow + intro) | Già implementato con framing "Industry Learning Ecosystem". Verificare voce in §6.6 (Sage primario + Magician secondario). |

---

## §10 · Tensioni narrative — tre conflitti da non risolvere mai

> Nel sito ci sono tre tensioni interne che **NON** vanno risolte radendo a zero una delle due polarità. La voce le mantiene entrambe vive.

### 10.1 Mecenatismo ↔ proposizione commerciale

**Conflitto**: MBA Gateway è gratuito per ISEE < 50k (mecenatismo). I programmi Corporate Learning per HR & Business sono a pagamento (proposizione commerciale).

**Come tenerli entrambi**: distinguere chiaramente nelle pagine quale stato applica. Nei programmi a pagamento (HR & Business, Masterclass), valore esplicito (paper peer-reviewed, partner accademici, ricerca dietro). Mai mescolare retorica filantropica con retorica commerciale nello stesso paragrafo.

**Frase guida**: *"Mecenatismo nei programmi cardine, mai vendita travestita."*

### 10.2 AI ↔ Umano

**Conflitto**: Galileo (4 capability) è AI; il driver editoriale è "centralità della dimensione umana".

**Come tenerli entrambi**: ogni capability Galileo deve avere "Cosa NON fa" che protegge l'umano. **L'AI è scaffolding**, non sostituto.

**Frase guida**: *"L'AI è efficace come strumento di scaffolding, non di sostituzione."* (Verbatim Pitch v3.1, paper UCL-Angelini meta-review.)

### 10.3 Italianità ↔ Internazionalità

**Conflitto**: vocazione mecenatistica + Casa Angelini Roma = italianità. 8 partner istituzionali in 4 paesi + MBA a Madrid = internazionalità.

**Come tenerli entrambi**: la formula del brand book stesso "Italian entrepreneurship + unwavering care" sintetizza i due. Cattedra LUISS (italianità) + UCL/RCA/Stockholm (internazionalità) sono **lo stesso nucleo**.

**Frase guida**: *"Un nodo italiano di una rete europea — la rete è il metodo, non l'ornamento."*

---

## §11 · Operating procedure — come scrivere, revisionare, flaggare

### 11.1 Come scrivere una sezione di copy nuova

1. **Identifica** la pagina e quindi le regole di §6 (archetipo primario/secondario, cue di voce, vincoli).
2. **Recupera** dal copy blessato §5 le frasi intoccabili nella pagina.
3. **Scrivi una bozza** rispettando archetipi + lessico §4 + i 5 attributi ToV §3.
4. **Filtra** la bozza attraverso la checklist anti-pattern §7.
5. **Sostituisci** numeri/fatti citati con riferimenti `[F, brief pag. X]` quando possibile.
6. **Se trovi un fatto non in fonti**, **FLAGGA a Carlo** prima di inventarlo. Mai inventare.

### 11.2 Come revisionare una sezione esistente

1. Identifica le **18 patch §9** applicabili a quel file.
2. Verifica che le frasi blessate §5 siano preservate verbatim.
3. Passa la sezione modificata attraverso checklist §7 (10 test).
4. **Diff propositivo a Carlo** prima di committare nel file. Anche piccoli cambiamenti.

### 11.3 Quando flaggare a Carlo (decisioni di sostanza)

- **Conflitto fra fonti**: brief dice X, sito attuale dice Y, codebase dice Z → flagga.
- **Numero non in fonti**: serve un dato che non è in brief/brand book/sito → flagga, non inventare.
- **Tensione editoriale**: una scelta cambia il tono di una persona o sposta un'audience → flagga.
- **Ambiguità lessicale**: una parola del lessico aperto §4 sembra applicabile ma il contesto è ambiguo → flagga.

### 11.4 Quando NON flaggare (decisioni di mestiere)

- Microcorrezioni grammaticali → procedi.
- Scelta tra due sinonimi compatibili con la voce → procedi.
- Riformulazione di frasi che rispettano §3-§5-§7 → procedi.
- Variazione di ordine paragrafi senza cambio di sostanza → procedi.
- **Snellimento** di un paragrafo lungo o di una frase di 30+ parole → procedi, è doverosa la riduzione.
- **Eliminazione** di una frase ridondante con quanto già detto altrove → procedi.

### 11.5 Mai di iniziativa (regola di sistema, aggiunta 25/5/2026)

- **Aggiungere una sezione NUOVA** a una pagina esistente → SEMPRE flaggare prima. Mai aggiungere di iniziativa.
- **Cambiare un copy blessato §5** → SEMPRE flaggare prima. Sono blessati per una ragione.
- **Spostare una quote o un volto** da una pagina all'altra → SEMPRE flaggare prima.
- **Cambiare ordine architetturale** di sezioni in una pagina → SEMPRE flaggare prima.

> Razionale: il sito è già denso (17 pagine, 5 personas, 5 capability Galileo, 8 partner, 4 ambiti ER, calendar 8 eventi, ecc.). Il cliente non riuscirà a vedere tutto al pitch. Meglio meno ma più curato.

### 11.5 Formato del diff propositivo

```
File: views/X.tsx, sezione Y (riga ~N)
PRIMA: [vecchio copy]
DOPO:  [nuovo copy]
WHY:   [collegamento a patch §9 / driver §8 / archetipo §6 specifico]
```

---

## §12 · Riservatezza CLAUDE.md §13 — opacità fornitore

> **Regola operativa non negoziabile**. Mai nominare il fornitore tecnologico nel copy esposto all'utente né nei materiali destinati al cliente.

### Si dice

- "Team di sviluppo HeyAI" (preferito)
- "Team tecnico"
- "Laboratorio editoriale HeyAI" (per riferimenti operativi della pipeline editoriale)
- "Engaged Research Lab · Casa Angelini" (per la regia accademica)

### NON si dice MAI

- ~~"Soolutions"~~
- ~~"Silencio"~~
- ~~"Jakala"~~
- ~~Qualunque altro brand fornitore terzo coinvolto~~

### Eccezione legittima

Documenti interni HeyAI (questo Brief, brief operativi interni, file `.claude/` nascosti, planner). Non documenti destinati al cliente, al sito esposto o a presentazioni dirette.

---

## §13 · Appendice — risorse di riferimento

### Documenti primari

| Documento | Path | Quando consultarlo |
|---|---|---|
| Brief gara cliente | `/Users/carlosanvoisin/Downloads/Academy Evolution_Comm briefing.pdf` (37 pp) | **Sempre** quando si scrive copy nuovo. Fonte primaria. |
| Brand Book Angelini Academy 2024 | `/Users/carlosanvoisin/Desktop/22042024_Angelini_Academy_Manuale Elementi Base_V1.0 (1).pdf` (36 pp) | Quando si sceglie tipografia, palette, pattern, regole d'uso marchio. |
| Pitch v3.1 post-audit | `/Users/carlosanvoisin/claude/00 - Inbox/2026-05-23 - Pitch Angelini v3.1 - Post Audit Brief.md` | Quando serve framing strategico più ampio (3 anime sito, 7 personas, calendar Seeding). |
| Audit v3 → v3.1 | `/Users/carlosanvoisin/claude/00 - Inbox/2026-05-23 - Audit Pitch v3 vs Brief Angelini + Vault + Esterne.md` | Quando serve tracciabilità delle correzioni audit. |

### Documenti secondari

| Documento | Path | Quando consultarlo |
|---|---|---|
| Mockup Sito (HeyAI 18/5) | `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/Mockup Sito - Struttura e Copy Completo.md` | Storico copy. **Parzialmente obsoleto** rispetto alla codebase attuale (vedi §0 changelog). |
| Brief Copy v1.1 archiviato | `… Brief Copy Sito per Claude Code (v1.1 archiviata).md` | Storico. **Non più canonico**. |
| Sito Angelini Academy attuale | https://www.angeliniacademy.com | Continuità di lessico ("Growing together", ASFOR, +1.200 partecipanti) |
| Codebase Astro | `/Users/carlosanvoisin/code/angelini-sito-3d` | Ground truth implementazione. Aggiornata 25/5/2026. |

### Convenzioni di tracciabilità per nuovi copy

Quando un fatto numerico viene inserito nel copy, taggarlo:

- `[F, brief pag. X]` → fatto dichiarato dal cliente verbatim
- `[F, sito attuale]` → fatto già pubblico
- `[F, Brand Book pp. X]` → regola brand
- `[I]` → inferenza nostra (es. "il 73% di adozione a sei mesi" se è una stima nostra, non un dato cliente)
- `[A]` → assunzione di lavoro (es. "ipotizziamo 12 programmi nel 2025")
- `[E]` → estimate (es. "approssimativamente 2.300 lettori newsletter")

Esempio:
> "+1.200 partecipanti cumulativi · +40 corsi · 20 partner [F, sito attuale]"
> "73% di adozione misurata sul lavoro reale a sei mesi [I, basato su benchmark interno]"

→ I tag NON vanno nel copy esposto all'utente. Vanno nei commenti del codice JSX / TSX, per tracciabilità interna.

---

## §14 · Stato e prossimi passi

**Questo documento è canonico v2.0 al 25/5/2026.**

### Cosa è cambiato (sintesi)

- 18 correzioni audit applicate (vedi §0 + §9)
- 5 ToV cliente verbatim adottati come griglia (§3)
- 3 driver narrativi nuovi: Unwavering Care + Centralità dimensione umana + Premi Nobel/cointelligenza (§8)
- 5 personas confermate (Talent, Researcher, HR & Business, Media, Imprese — non più 4)
- Lessico chiuso allargato con anti-pattern verificati su codebase (§4)
- Operating procedure formalizzata per agenti Claude Code rewriting (§11)

### Prossimo step (Step 2 nel piano di lavoro)

**Rewriting per-pagina nei file `.tsx` della codebase Astro**, in ordine di priorità:

1. **Tier 1 (pitch al cliente)**: Home + MBA Gateway + Engaged Research + Chi Siamo
2. **Tier 2 (5 percorsi)**: Talent, Researcher, HR & Business, Imprese, Media
3. **Tier 3 (sostegno)**: Founder Stories + Press + Eventi + Blog
4. **Tier 4 (utility)**: Contatti
5. **Tier 5 (community/riservate)**: Engaged Network + Angelini People + Dashboard

Per ogni pagina, l'agente di rewriting deve:
1. Leggere questo Brief integralmente.
2. Leggere la pagina target (`views/X.tsx` + componenti referenziati).
3. Consultare le **patch §9** applicabili a quel file.
4. Proporre **diff propositivo per sezione** (formato §11.5) a Carlo per conferma.
5. Applicare il diff confermato direttamente nel file `.tsx`.

---

> **Fine documento v2.0.** Cambiamenti successivi richiedono nuova versione (v2.1, v3.0, ecc.) — vedi §11.4 e regole di archiviazione (`(vX.X archiviata)` come pattern vault).

