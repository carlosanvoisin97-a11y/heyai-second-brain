---
type: project-doc
parent_project: _Angelini Academy
client: Angelini Academy
audience: Claude Code (sessione su `/Users/carlosanvoisin/code/angelini-academy/`)
purpose: prompt operativo per applicare 4 modifiche chirurgiche al mockup post-call FuturItaly 19/5. Niente nuove pagine, niente nuove feature, solo refinement mirati su PersonaSelect (facoltativa + riordino gender) · MBA Gateway (rimozione calcolatore borse) · Homepage (sezione network al posto del box-link) · Percorsi (CTA community fine Researcher + Talent)
created: 2026-05-19
updated: 2026-05-19
status: ready-to-paste
source_call: trascrizione "Angelini Academy _ Allineamento Proposta Sito.docx" + scambio WhatsApp Carlo↔Key Account FuturItaly 20/5 mattina
related: "[[_Angelini Academy]] · [[Mockup Sito - Struttura e Copy Completo]] · [[2026-05-19 - Carlo Performance — Call FuturItaly Angelini Academy]]"
---

# Prompt per Claude Code — Modifiche post-call FuturItaly 19/5

> 4 modifiche chirurgiche al sito esistente derivate dalla call FuturItaly 19/5. Non sono cambi architetturali, sono refinement mirati per allineare il mockup ai feedback raccolti. Due punti strategici (collocazione cluster Imprese + collocazione hub editoriale Engaged Research) restano in pending per ragionamento successivo — non entrano in questo round.

## Cosa NON entra in questo prompt

- Cluster Imprese come quinto percorso → in attesa di decisione architetturale (percorso autonomo vs sezione dentro Engaged Research/community)
- Hub editoriale Engaged Research collocazione e composizione (light paper + video pillole) → da ragionare in sessione strategica dedicata, dopo decisione FuturItaly su modello di accesso community
- Disclaimer eventi → già presente nel mockup come label
- Rimozione criteri MBA → criteri non presenti nel mockup attuale
- Naming "Bilancio" → "Report annuale Engaged Research", profilo LinkedIn CEO, copy citazioni studenti → fuori scope di questo round, ragionamenti successivi

---

## Prompt da incollare

```
Ciao. Round di revisioni post-call FuturItaly 19/5. Sono 4 modifiche chirurgiche al sito esistente — niente nuove pagine, niente nuove feature, solo refinement mirati. Procedi sezione per sezione, mantieni tutto il resto invariato.

═══════════════════════════════════════
1. PERSONASELECT — facoltativa + riordino gender alternato (donna in prima posizione)
═══════════════════════════════════════

PROBLEMA
Il character select 3D all'inizio della homepage attualmente comunica come obbligatorio: chi atterra ha l'impressione di doversi identificare prima di poter navigare. Inoltre l'ordine attuale delle 4 personas non rispecchia il fatto che le decisori del cliente sono donne — la prima posizione deve essere occupata da una persona femminile e l'ordine deve alternare F-M-F-M.

AZIONE — parte 1: copy + opzionalità
La logica del componente PersonaSelect resta invariata (4 personas, carousel 3D, hover preview, click → landing percorso). Modifichiamo solo il copy di introduzione + segnale visivo che lo scrolling è una via alternativa.

— Aggiungi sopra il carousel una frase di introduzione tipo:
  "Vuoi personalizzare la tua esperienza? Scegli il tuo personaggio oppure continua a scorrere."
  (copy in italiano, raffinalo se trovi una formulazione migliore — stile editoriale-istituzionale, niente marketing speak. Tono di apertura: si può non scegliere, il sito funziona comunque.)

— Sotto al carousel, aggiungi un sottile indicatore di scroll (icona freccia giù o "Continua a esplorare ↓") che inviti esplicitamente l'utente a proseguire senza scegliere il personaggio.

AZIONE — parte 2: riordino delle 4 personas
Le 4 personas attuali sono: Giulia (giornalista/media), Marco (ricercatore), Sofia (giovane talento), Luca (founder/innovatore). Riordina con questo criterio:
— Posizione 1: una persona femminile (Giulia o Sofia — scegli quella che ha più peso strategico per il cliente, considerando che Giulia ha priorità primaria nel Briefing Personaggi originale)
— Posizione 2: una persona maschile (Marco preferibile, secondaria nel Briefing)
— Posizione 3: l'altra persona femminile
— Posizione 4: l'altra persona maschile (Luca)

Pattern target F-M-F-M con donna in prima posizione. Nessun altro contenuto delle card va modificato (name, role, description, hue, image, accent color rimangono invariati per ciascuna persona). Solo l'ordine dell'array.

Aggiorna eventuali commenti del codice o riferimenti al "Briefing Personaggi" che indichino il vecchio ordine.

VINCOLI
Mantenere palette esistente. Mantenere animazioni 3D già esistenti. Non cambiare il numero di personas (per ora 4 — il quinto cluster Imprese arriverà in un round successivo).

═══════════════════════════════════════
2. MBA GATEWAY — rimozione calcolatore borse
═══════════════════════════════════════

PROBLEMA
Sulla pagina /mba-gateway è presente il componente ScholarshipCalculator (input ISEE/ISPE → output borsa totale o tassa €20.000). Il referente cliente l'aveva esplicitamente bocciato in fase Q&A — va rimosso.

AZIONE
— Rimuovi completamente il componente ScholarshipCalculator dalla pagina /mba-gateway.
— Elimina anche eventuali riferimenti, import e dati mock collegati.
— Nessuna sostituzione visiva: la pagina deve fluire dalla sezione precedente direttamente alla successiva senza lasciare placeholder o spazio vuoto sospetto.

═══════════════════════════════════════
3. HOMEPAGE — sezione Network sostituisce il box-link attuale
═══════════════════════════════════════

PROBLEMA
In homepage l'attuale punto di contatto con la sezione network (community Engaged Network) è un box compatto con link. Va promosso a sezione strutturata con più contenuto, perché il network è un asse strategico del sito (comunità qualificata: ricercatori, alumni MBA, imprese partner).

AZIONE
— Rimuovi il box-link attuale al network in homepage.
— Sostituiscilo con una sezione dedicata che dia respiro alla parte community. Struttura suggerita:
  • Titolo eyebrow + headline ("Una rete che cresce" o equivalente — raffina copy)
  • Breve introduzione (2-3 righe): cos'è la community Engaged Network, chi ne fa parte (ricercatori partner, alumni MBA, aziende del network), come si entra
  • 3-4 elementi visivi: paper in discussione, membri attivi, atenei partner, eventi community (riusa pattern visivo già consolidato nel sito — sfere/orbite per coerenza con il linguaggio network)
  • CTA verso /engaged-network: "Scopri il network" o "Entra nel network" (copy raffinabile)
— Mantieni la coerenza stilistica con il resto della homepage: palette istituzionale Angelini (#003087 + #005EB8 + accenti secondari), tipografia esistente, animazioni Framer Motion in linea con gli altri componenti.
— La sezione deve avere peso visivo paragonabile a Pillars o Founder Stories — non un sotto-blocco minore.

═══════════════════════════════════════
4. PERCORSI — sezione CTA verso community alla fine di Ricercatore e Studente
═══════════════════════════════════════

PROBLEMA
Le pagine /percorsi/researcher e /percorsi/talent attualmente chiudono con CTA standard (form / scroll-up). Va aggiunta una sezione finale dedicata che inviti l'utente a entrare nella community qualificata, con copy tarato sul target del percorso. Logica: l'iscrizione alla community è il punto di conversione qualificata del funnel.

AZIONE
— Crea un nuovo componente riusabile CommunityCallout.tsx in src/components/, parametrizzato per cluster (variant: "researcher" | "talent").
— Inserisci il componente in fondo alle pagine /percorsi/researcher e /percorsi/talent, prima del footer.
— Per ogni variant, copy specifico (raffinabile):

  Variant "researcher":
  Headline: "Vuoi collaborare con altri ricercatori?"
  Body: "Entra nell'Engaged Network. Discuti i paper, contribuisci a nuove pubblicazioni, accedi al laboratorio editoriale."
  CTA: "Iscriviti alla community" → /engaged-network

  Variant "talent":
  Headline: "Vuoi entrare in contatto con le aziende del Gruppo Angelini Industries?"
  Body: "Entra nel network. Confrontati con talenti già nel percorso, scopri le storie di chi è passato dal programma."
  CTA: "Iscriviti alla community" → /engaged-network

— Coerenza visiva: palette istituzionale + accent del cluster (researcher → verde sage, talent → warm gold se questi sono gli accent della PersonaSelect — verifica dai file componente esistenti).
— Non sostituire le CTA esistenti dei form di percorso (Expression of Interest per Talent, Proposta di collaborazione per Researcher restano): il CommunityCallout si aggiunge come ulteriore CTA verso il funnel community, in posizione finale.

NOTA
Una sezione analoga andrà aggiunta in futuro alla pagina dedicata alle Imprese (quinto cluster) — non in questo round, in attesa di decisione architetturale.

═══════════════════════════════════════
VINCOLI GENERALI VALIDI PER TUTTE LE 4 MODIFICHE
═══════════════════════════════════════

— Stack: Vite + React 19 + TypeScript + Tailwind 4 + Framer Motion + react-router-dom. Niente nuove librerie.
— Palette: solo brand book Angelini 2024 (#003087 blu istituzionale, #005EB8 blu chiaro, #FFFFFF, #000000 primari + verde #007864/#00C389, viola #840B55/#DF1995, rosso #E4002B/#FF585D, arancio #FF8200/#F6BE00 secondari).
— Tipografia: Barlow per titoli e body, Merriweather solo per testi lunghi editoriali. Niente font nuovi.
— Tono di voce: archetipo Sage primario + Magician secondario, mai mescolati nella stessa frase. Lessico chiuso: niente "scopri di più", "rivoluzionario", "ground-breaking", "eccellenza". Verbi attivi, fatti verificabili.
— Accessibility: ogni nuovo elemento interattivo deve essere accessibile via tastiera, con focus ring visibile, contrast minimo 4.5:1.
— Niente modifiche a pagine o componenti non citati in questo prompt.

Procedi sezione per sezione, conferma quando hai finito. Se trovi dipendenze o ambiguità, chiedi prima di assumere.
```

---

## Note per il riuso

Una volta che Claude Code chiude le 4 modifiche, redeploy del mockup su `angelini-academy.vercel.app` e condivisione del link aggiornato al Key Account FuturItaly per review parallela (vedi task in [[_Angelini Academy]] §post-call 19/5).

## Punti pendenti che vanno in sessione strategica successiva

1. **Cluster Imprese come quinto percorso o sezione**. Le imprese partecipano al sito con due funzioni operative dichiarate: co-design dei corsi (analogo ai ricercatori ma con focus pratico-industriale) e placement dei talenti formati. Decisione architetturale aperta: percorso autonomo `/percorsi/imprese` con landing dedicata + CTA differenziata, oppure sezione specifica dentro `/engaged-research` (dimensione collaborazione co-design) o dentro `/engaged-network` (dimensione community partner). Implicazioni: peso UX (5 vs 4 personas in PersonaSelect), copy della sezione, posizionamento nella sitemap, integrazione con il funnel community.

2. **Hub editoriale Engaged Research — collocazione e composizione**. Decisione consolidata in scambio WhatsApp 20/5 con il Key Account FuturItaly: hub editoriale dentro la parte community, accessibile solo a cluster qualificati (ricercatori, alumni, accademici — non imprese, non media). Ma nel mockup attuale l'hub editoriale **non ha un elemento dedicato proprio** — è un concetto strategico senza materializzazione visiva specifica. Da ragionare: di che elemento del sito attuale è effettivamente rappresentato? E come si compone con i contenuti dichiarati (light white paper + video pillole + paper completi)?

Entrambi i punti meritano sessione strategica con contesto fresco. Documenti chiave da rileggere prima di affrontarli: [[Pre-call Elena 18-5 — Strategia Angelini Academy]] §10 Loop tre strati + §6.1 VP1 Regia editoriale-tecnica · [[Pitch Outline 18-5 — Strategia Angelini Academy Short]] Slide 14-15 · [[Concept - Engaged Network Community]] · [[Mockup Sito - Struttura e Copy Completo]] per capire cosa esiste oggi nel mockup. Trascrizione call 19/5 minuto 46:28-48:39 (`uploads/Angelini Academy _ Allineamento Proposta Sito.docx`).
