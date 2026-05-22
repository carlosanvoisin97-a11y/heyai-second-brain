---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione in corso su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt revisioni globali post-review Carlo 15/5 sera. Niente nuove feature, solo refinement chirurgici e fix di allineamento/colore/stile. Il ponte animato hero NON è qui (sarà un prompt dedicato in sessione separata)
created: 2026-05-15
updated: 2026-05-15
status: ready-to-paste
nota: "Carlo ha menzionato screenshot per 2 punti (link footer allineamento + Chi Siamo sfondi blu/bianco) — descritti testualmente nel prompt; Claude Code dovrebbe verificare direttamente sul build se servono dettagli ulteriori"
---

# Prompt per Claude Code — Revisioni sito 15/5 v1

> Lista di refinement chirurgici post-review Carlo. Organizzata per pagina/sezione. Il ponte animato dell'hero NON è in questo prompt (sessione dedicata separata).

---

## Prompt da incollare

```
Ciao. Round di revisioni dopo review visiva. Sono tutti aggiustamenti mirati — niente nuove pagine, niente nuove feature, solo refinement di stile, allineamento, colore, ordine. Procedi pagina per pagina.

═══════════════════════════════════════
1. SCHEDE CITAZIONI — Home (People.tsx) + Founder Stories
═══════════════════════════════════════

PROBLEMA
Le 3 schede citazioni con foto editoriale + quote (Sofia, Prof. Elena R., Marco V.) appaiono in due punti del sito:
- src/components/People.tsx (sezione "Chi attraversa il ponte" in home page)
- src/pages/FounderStories.tsx (pagina dedicata)

Ordine attuale in entrambi i file: Sofia → Elena → Marco. Non alterna donna-uomo-donna come richiesto.

NOTA: In FounderStories.tsx esiste già un commento del codice "Ordine richiesto dal cliente (17/5): alternare gender F → M → F (Sofia, Marco, Elena)" — il riordino era stato richiesto ma non applicato. Adesso lo applichiamo davvero.

NOTA 2: Questo punto NON riguarda il PersonaSelect (carousel character select all'inizio della home con le 4 persone: Giovane Talento, Ricercatore, HR, Media). Quello resta invariato.

AZIONE
Riarrangia l'array delle 3 schede in entrambi i file con il nuovo ordine, mantenendo invariati TUTTI i contenuti (name, role, quote, story, hue, badge, image) — modifichi SOLO l'ordine:

1. Sofia (era 1°, resta 1°)
2. Marco V. (era 3°, sale a 2°)
3. Prof. Elena R. (era 2°, scende a 3°)

In FounderStories.tsx, aggiorna anche il commento del codice esistente che dice "Elena promossa dalla posizione 03 a 03" — adesso Elena è effettivamente in posizione 3, il riordino è applicato.

═══════════════════════════════════════
2. HOME — Box Engaged Network + Angelini People
═══════════════════════════════════════

PROBLEMI
- Box Engaged Network più piccolo del box Angelini People (asimmetria visiva)
- Entrambi un po' poco colorati rispetto al resto della home

AZIONE
- Allinea le dimensioni: stessa width e height, stessa padding interna, stesso aspect ratio. Devono apparire come una coppia bilanciata.
- Aumenta leggermente la saturazione/presenza cromatica: usa accenti dalla palette ufficiale brand book (es. blu chiaro #005EB8 + verde #007864 per Engaged Network, arancio #FF8200 per Angelini People — o combinazioni equivalenti che senti coerenti). Non strafare: tono accademico-istituzionale, non landing creative agency.

═══════════════════════════════════════
3. ENGAGED NETWORK PREVIEW PAGE — Sezione "Partecipare al network"
═══════════════════════════════════════

PROBLEMA
La sezione che spiega le 4 funzionalità ("Partecipare al network") oggi è monocromatica e i 4 box risultano ripetitivi visivamente.

AZIONE
Renderizza i 4 box con 4 colori diversi dalla palette brand Angelini:
- Box 1: blu istituzionale #003087
- Box 2: blu chiaro #005EB8
- Box 3: verde scuro #007864 (oppure chiaro #00C389)
- Box 4: arancio scuro #FF8200 (oppure chiaro #F6BE00)

Usa il colore come accento (bordo top o sinistro, icona, micro-label uppercase, hover state) — NON come background pieno. I 4 box devono sembrare una famiglia coerente differenziata, non 4 sezioni scollegate.

═══════════════════════════════════════
4. ENGAGED NETWORK PREVIEW — Career Path Tracker (alumni MBA mock)
═══════════════════════════════════════

PROBLEMA
Le persone (alumni mock) quando vengono cliccate mostrano probabilmente sempre la stessa foto placeholder o foto troppo simili tra loro.

AZIONE
Per ogni persona alumni mock, usa una foto stock diversa (o quantomeno diversifica visivamente le card: variazioni di palette di sfondo, posizione del ritratto, accent color individuale). Se non vuoi gestire foto stock reali (licensing), almeno genera avatar/illustrazioni SVG diversificate per ogni profilo — niente più placeholder identici.

Mantieni dati profilo realistici già esistenti (nome + cognome + anno + ruolo + OpCo).

═══════════════════════════════════════
5. ENGAGED NETWORK PREVIEW — Tier system Reader → Contributor → Reviewer → Editor
═══════════════════════════════════════

PROBLEMI
- Animazione attuale con errori/scatti
- Stile non coerente con il pattern visivo del CrossOpCoTracker (4 sfere "planet" delle OpCo, linea che scorre, simmetria)
- Manca una piccola intro PRIMA delle sfere — l'utente non capisce di cosa si tratta

AZIONI
1. Aggiungi PRIMA delle 4 sfere una breve introduzione testuale: eyebrow Barlow uppercase "Quattro livelli silenziosi" + frase Merriweather Light Italic tipo: "La promozione misura la qualità dei contributi, non la quantità. Niente leaderboard, niente punteggi pubblici — solo riconoscimento del valore reale."

2. Replica il pattern visivo del CrossOpCoTracker:
   - Stesse sfere "planet" 3D con gradient + ring (vedi MbaGateway.tsx mini-planet timestone usato anche nelle altre timeline)
   - Linea connettiva calcolata per partire dal centro della prima sfera e finire al centro dell'ultima (usa lo stesso useLayoutEffect + ResizeObserver pattern di MbaGateway timeline per misurare top/bottom dinamicamente)
   - Layout simmetrico orizzontale (4 sfere in fila) oppure verticale (come la timeline MBA) — scegli quello più leggibile su mobile e desktop
   - Stessa logica motion: opacity 0→1 con stagger, niente y-shift che rompa la misura della linea
   - Stesso color treatment delle sfere ma con accent diverso per ogni tier (es. blu chiaro → verde → arancio chiaro → arancio scuro, gradazione di "salire di livello")

3. Sotto ogni sfera: nome tier (Merriweather Regular) + criterio di promozione 1 riga (Barlow body 14px ang-900/65)

═══════════════════════════════════════
6. FOOTER — Allineamento link
═══════════════════════════════════════

PROBLEMA
I link nel footer (sezioni Percorsi / Programmi / Academy / etc.) sono appiccicati al margine superiore in modo asimmetrico — non allineati tra colonne.

AZIONE
Verifica src/components/Footer.tsx: applica un baseline allineamento verticale uniforme tra le colonne. Tutte le H4 di colonna alla stessa altezza (display flex/grid con align-items consistente, o margin-top normalizzato). Spazio uniforme tra header colonna e primo link. Visiva da inserzionista pulito, non "elenco appoggiato in alto".

═══════════════════════════════════════
7. ANGELINI PEOPLE — Area Elena (Percorso formativo)
═══════════════════════════════════════

PROBLEMI
- "Cosa l'Academy ti suggerisce" è asimmetrico rispetto alla timeline a sinistra (solo 3 box, dovrebbero essere 4 per pareggio visivo)
- Login Elena per accedere ad Angelini People: dopo il primo accesso lo stato resta loggato. La demo cliente perde la possibilità di mostrare il passaggio di login. Va resettato automaticamente
- Stesso problema per ogni form (newsletter signup, candidatura MBA expression of interest, waitlist Engaged Network, ecc.): una volta fatto submit, restano in stato "completato" e la demo non li può rifare
- Alcuni titoli delle varie aree sono stati asciugati troppo (probabilmente in un round precedente di pulizia) — restituire un po' di sostanza editoriale

AZIONI
1. Sezione "Cosa l'Academy ti suggerisce": aggiungi un 4° box di raccomandazione AI per simmetria con la timeline a sinistra (4 elementi vs 4 elementi). Il contenuto del 4° box è raccomandazione plausibile coerente con il profilo Elena (es. masterclass / paper / mentor da suggerire).

2. Reset demo automatico (NESSUN pulsante manuale visibile):
   - Login Elena Angelini People: una volta loggati, dopo X secondi (suggerito 30s di permanenza visiva) il sistema fa logout automatico e ritorna alla landing pubblica con login form vuoto, pronto per essere riavviato in demo. In alternativa, ogni volta che si torna sulla pagina /angelini-people da un'altra route, lo stato di login si resetta a "anonimo". Decidi tu il trigger più pulito per la demo cliente — l'importante è che NON ci sia un pulsante "logout" visibile, è auto-reset trasparente.
   - Ogni form con submit (newsletter signup, candidatura MBA expression of interest, waitlist Engaged Network, contatto, ecc.): dopo la submit mostra il messaggio di conferma per 8 secondi, poi torna AUTOMATICAMENTE al form vuoto. Niente pulsante "Reset" o "Riprova" visibile — è un comportamento invisibile, pensato per la demo.
   - Trasparente all'utente: nessuna indicazione visiva del reset, nessun "Demo mode" banner. Il sito si comporta come se fosse stato appena aperto, ogni volta.

3. Restituire sostanza ai titoli: identifica i titoli di sezione asciugati troppo (probabilmente Personal Learning Record, Iscrizioni interne, Comunità OpCo, Comunicazione corporate) e arricchiscili con un sottotitolo Merriweather Light Italic di 1 riga che dia contesto editoriale. Niente parole vietate (vedi Brief Copy Sito §4) — solo presenza editoriale che oggi manca.

═══════════════════════════════════════
8. ENGAGED RESEARCH — Galileo Research Engine
═══════════════════════════════════════

PROBLEMI
- I 4 registri operativi (Simulazioni Parallele · Hypothesis Generation · Pattern Discovery · Synthetic Experiments) e il box "Simulazione in tempo reale" non sono allineati
- Il box "Cosa NON fa" scende sotto il livello del box simulazione — asimmetria visiva
- La sezione Metodologia ("Tre passi, tre ruoli, una cosa sola") è troppo monocromatica

AZIONI
1. Riallinea i 4 registri operativi con il box "Simulazione in tempo reale": stessa altezza visiva, stesso top-baseline. Probabilmente il problema è grid implicito — usa CSS grid esplicito con align-items: stretch sui 2 elementi della riga superiore (registri + simulazione) e poi mette "Cosa NON fa" sotto entrambi su tutta la width, o in colonna sotto i registri allineato al fondo del riquadro simulazione.

2. Sezione Metodologia "Tre passi, tre ruoli": rendi leggermente più colorata. Le 3 colonne attualmente hanno solo border-left blu #005EB8. Aggiungi micro-tocchi di colore: numerazione 01/02/03 in colore brand differenziato (blu istituzionale per 01, blu chiaro per 02, verde scuro per 03), oppure background tinta tenue dalla palette secondaria. Stessa logica del punto 3 (Engaged Network 4 box) — uso accentuativo, non background pieno.

═══════════════════════════════════════
9. PERCORSI HR & BUSINESS
═══════════════════════════════════════

PROBLEMI
- Foto caso studio HR ancora tagliata sopra e sotto (probabilmente object-fit / aspect-ratio sbagliato)
- I 4 settori (Pharma, Biotech, Manufacturing, Financial Services) sono ripetitivi visivamente

AZIONI
1. Foto caso studio HR: verifica src/pages/PercorsiHrBusiness.tsx, l'elemento immagine probabilmente ha height fisso ma object-fit: cover che taglia. Imposta aspect-ratio appropriata (es. 16/9 o 4/3) + object-fit: cover + object-position centrato. Verifica che la composizione della foto stock scelta abbia il soggetto al centro, altrimenti cambia foto o regola object-position.

2. 4 settori: applica differenziazione visiva tipo §3 (Engaged Network 4 box). 4 colori dalla palette brand:
   - Pharma: blu istituzionale #003087
   - Biotech: verde scuro #007864
   - Manufacturing: arancio scuro #FF8200
   - Financial Services: blu chiaro #005EB8
   Accento sul bordo + icona settore. Stesso pattern di differenziazione del §3.

═══════════════════════════════════════
10. MBA GATEWAY — Galileo Tutor + CTA Quiz
═══════════════════════════════════════

PROBLEMI
- La sezione Galileo Tutor mostra una conversazione su un corso specifico ("Leadership in Pharma 2026") — troppo specifica per essere mostrata di default
- Il box "Cosa fa / Cosa NON fa" forse troppo prominente e didascalico in quel layout
- La pagina MBA Gateway non ha più un riferimento chiaro al quiz Galileo Career Path Navigator (che oggi vive in /percorsi/talent)

AZIONI
1. Riprogetta la sezione Galileo Tutor: invece di mostrare di default un esempio chat su masterclass specifica + 4 bullet, usa un design più sobrio:
   - Hero della sezione: eyebrow + H2 + lead come prima
   - Centro della sezione: una visualizzazione astratta dell'agente Galileo Tutor (GalileoIcon riusato in dimensione media, halo glow, niente conversazione esplicita di default)
   - Una piccola icona "ⓘ" (info) accanto alla descrizione che al click apre un modal o tooltip espanso con (a) esempio chat illustrativo + (b) i 4 bullet "Cosa fa / Cosa NON fa"
   - Versione "leggera" di default, dettagli sotto click di chi vuole approfondire
2. Aggiungi una CTA chiara in MBA Gateway che linka al quiz Career Path Navigator in /percorsi/talent:
   - Posizione: subito sotto la sezione Galileo Tutor, oppure inserita come "step 0" prima della timeline (decidi tu in base alla fluidità narrativa)
   - Formato: card o banner con eyebrow "Non sai ancora se MBA Gateway fa per te?" + H3 "Fai il quiz Galileo Career Path · 5 minuti" + bottone "Inizia il quiz" che porta a /percorsi/talent#career-path (o anchor equivalente che apra direttamente il CareerPathNavigator)

CRITERI ELEGGIBILITÀ — RIMUOVERE COMPLETAMENTE
I 5 criteri attualmente in pagina (laurea magistrale entro luglio 2026, 24 mesi esperienza, TOEFL 100+, età max 32, disponibilità stage Italia) sono FINTI — generati per coerenza narrativa ma non presenti nel brief Angelini originale. Non li abbiamo validati con Caterina. Esporli al pitch è rischio.

Azione: RIMUOVI completamente la sezione "Criteri di eleggibilità" da MbaGateway.tsx (il blocco con eyebrow "Criteri di eleggibilità" + H2 "Cinque requisiti, niente filtri nascosti" + array `criteria` con i 5 punti + lista numerata 01-05 a destra). Cancella anche la costante `criteria` in cima al file e il suo uso. Il file deve compilare pulito senza warning di variabile non usata.

Se la pagina post-rimozione perde ritmo, puoi compensare con una micro-sezione sostitutiva neutra (es. una frase singola di transizione "I criteri di candidatura ufficiali saranno pubblicati ad apertura selezioni"), oppure semplicemente lasciar fluire la pagina dalla Cross-OpCo Tracker direttamente al Calcolatore borsa. Decidi tu cosa funziona meglio dal punto di vista compositivo.

═══════════════════════════════════════
11. CHI SIAMO
═══════════════════════════════════════

PROBLEMA
Dopo l'atterraggio, la pagina alterna sezioni con sfondo blu istituzionale pieno e sfondo bianco — contrasto troppo forte, alternanza poco armonica.

AZIONE
Rendi la palette di sfondo più omogenea attraverso la pagina:
- Riduci il numero di sezioni full-bleed blu (lascia al massimo 1-2 sezioni con quel trattamento, quelle più narrativamente forti — es. citazione hero o quote distintivo)
- Per le altre sezioni alterna tonalità più morbide: bianco ang-50/40, ang-50 puro, micro-pattern Abbraccio o Marchio in opacity bassissima (0.04-0.06)
- Quando una sezione blu è necessaria, usala come stacco di 1 sezione tra blocchi chiari, non come 50% del flusso
- Il risultato: pagina che respira, transizioni morbide, niente "flash" visivi di alto contrasto

═══════════════════════════════════════
NOTA SU PONTE ANIMATO HERO
═══════════════════════════════════════

NON tocchiamo il ponte animato in questo round. Decisione: faremo una sessione dedicata SOLO al ponte con reference visivi precisi (Carlo prepara un mood board). Per ora lascia il ponte com'è.

═══════════════════════════════════════
LINEE GUIDA TRASVERSALI
═══════════════════════════════════════

- Tutte le revisioni rispettano il design system esistente: font Merriweather + Barlow, palette brand book Angelini, ritmo motion (cubic bezier [0.22, 1, 0.36, 1], whileInView con margin -80px)
- Niente parole vietate dal Brief Copy Sito §4 (eccellenza, rivoluzione, trasformazione digitale, journey, ecc.)
- Per gli screenshot menzionati da Carlo (footer link + Chi Siamo sfondi): se vedi qualcosa di diverso da quello descritto, fai il fix che ti sembra più coerente con la diagnosi testuale e segnalalo

PROCEDURA
Procedi punto per punto. Dopo ogni gruppo di modifiche correlate (es. tutti i punti su Engaged Network preview), fai un check del build (npm run build o equivalente) per assicurarti che TypeScript non si rompa.

DELIVERABLE ATTESI
- Diff dei file modificati raggruppato per punto (1-11)
- Conferma build OK
- Lista delle scelte interpretative fatte (dove non c'erano istruzioni chirurgiche)
- Eventuali segnalazioni di problemi che richiedono decisione di Carlo

Procedi. Coerenza > creatività in questo round: tutto deve sentirsi una continuazione del lavoro già fatto, non una virata stilistica.
```

---

## Note operative per Carlo

**Cosa NON c'è in questo prompt** (deliberato):
- Ponte animato hero (sessione dedicata separata, come deciso)
- Modifiche ai criteri eleggibilità (lasciati invariati con sola disclaimer footnote — i 5 criteri attuali sono generati da Claude Code, non da brief Angelini ufficiale; vanno validati con Caterina/Elena post-pitch)

**Quattro decisioni operative consolidate** (post correzioni Carlo 15/5 sera tardi):
1. **Riordino schede citazioni**: in People.tsx (home) e FounderStories.tsx (pagina). Sofia → Marco → Elena (NON era il PersonaSelect/carousel character — quello resta invariato)
2. **Galileo Tutor MBA**: versione "leggera" con icona info al click per dettagli
3. **Reset demo automatico SENZA pulsante visibile**: tutti i form si auto-resettano dopo 8s dalla submit + login Elena Angelini People si fa logout automatico (no pulsante manuale, no banner "Demo mode" — è invisibile all'utente)
4. **Criteri eleggibilità MBA**: RIMOSSI completamente dal codice (erano finti, generati da Claude Code, non nel brief Angelini originale)

**Prompt ponte animato (in arrivo separato)**: quando vuoi procedere col ponte, prepara un mood board veloce (anche 3-4 immagini di reference da Behance / Awwwards / Pinterest di siti con animazioni morbide simili a quello che hai in mente) e te lo costruisco come prompt dedicato in sessione separata.

---

*Versione 1.1 — 15/5/2026 (sera tardi). Round revisioni post-review visiva Carlo + 4 correzioni successive:* (a) §1 era schede citazioni People.tsx + FounderStories.tsx, non PersonaSelect carousel; (b) §7 reset demo solo automatico senza pulsante visibile + logout Elena auto; (c) §10 criteri MBA RIMOSSI completamente, non disclaimer.*
