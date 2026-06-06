---
type: session-recap
source: claude-code
session_id: 11a8126d
project_path: ~/code/angelini-academy
date_last_activity: 2026-05-26
size_mb: 10.8
status: vault-worthy
created: 2026-05-28
tags: [code-session, recovery-2026-05-28]
---

# Recap Code session — angelini-academy main (11a8126d)

> Sessione 2026-05-21 → 2026-05-25. Cwd nominale `~/code/angelini-academy` ma il lavoro effettivo è stato spostato in `~/code/futuritaly-compass/` (cartella creata in sessione, fuori dal repo Angelini, per non sporcarlo). Nessun file toccato dentro Angelini Academy: working tree `clean`, ultimo commit `f5aaa48`.

## Cosa è stato fatto

Build di un componente React standalone **CompassScrollAnimation** per il sito istituzionale [[20 - Projects/Futuritaly/Sito Futuritaly|FuturItaly]] — animazione scroll-driven della bussola brand per la sezione "Time on Target — La nostra filosofia". Stack richiesto da brief: `@react-three/fiber` + `@react-three/drei` + `three` + `framer-motion`. Deliverable destinato a Michele per integrazione sul sito Hostinger.

Iterazione in 3 fasi:
1. **V1 — bussola 3D ricostruita da primitive R3F** (cilindro, toro, sfere, losanghe estruse). Esito: "piatta da diagramma", non premium. Logo centrale sbagliato (≡ simmetrico invece delle 3 barre sfalsate FuturItaly).
2. **V2 — overhaul rendering** (Environment HDRI, ombre proiettate, glossy). Esito: leggermente meglio ma sempre "3D da sviluppatore" — gap rispetto al render premium dell'asset di brand.
3. **V3 (finale) — pivot**: usare il PNG `compass.png` (1024×1024) come **medaglione hub centrale** (immagine renderizzata vera), e costruirci attorno l'**anello orbitale dei 10 stakeholder** + ago gold + mirino + label illuminate, tutto 3D animato sopra l'immagine. Risolve il gap qualitativo e l'asimmetria 8 elementi nell'asset vs 10 stakeholder richiesti. Pulizia PNG: rimossi pallini interni decorativi (5781 px) + scontornata maschera circolare per togliere il fondo bianco (output 885×885 PNG trasparente).

Build di produzione verificata: `981 moduli, exit 0`. Dev server lasciato attivo su `localhost:5179`. Pre-flight verifica anti-confusione: Carlo aveva interrotto la prima esecuzione temendo modifiche al repo Angelini — l'agente ha verificato `git status` su Angelini (clean) prima di procedere e spostato tutto in `~/code/futuritaly-compass/`.

## Progetti / aree vault toccate

- **Futuritaly · Sito Futuritaly** → [[20 - Projects/Futuritaly/Sito Futuritaly]]. Path vault: `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/`. Nota: il deliverable di sessione è un componente isolato (non parte del repo Angelini) destinato all'integrazione su sito FuturItaly (Hostinger). Owner integrazione: [[60 - People/Michele Mattucci]].
- angelini-academy → [[20 - Projects/Futuritaly/Angelini Academy/_Angelini Academy]]. Path: `/Users/carlosanvoisin/claude/20 - Projects/Futuritaly/Angelini Academy/`. **Nessuna modifica al repo** in questa sessione (working tree clean confermato).

## Decisioni

- **Pivot da R3F-only a "image-as-hub + 3D overlay"**: l'asset PNG di brand viene usato come corpo della bussola, R3F costruisce solo ago/mirino/anello stakeholder/etichette sopra. Rinuncia esplicita a ricostruire il look premium con sole primitive Three.js.
- **8 elementi nell'asset di brand vs 10 stakeholder richiesti**: risolto separando i due livelli — i pallini decorativi del medaglione sono rimossi via maschera, i 10 stakeholder vivono su un anello orbitale esterno animato dal codice.
- **Stack invariato vs brief**: nessuna libreria aggiuntiva oltre alle 4 richieste (`@react-three/fiber`, `@react-three/drei`, `three`, `framer-motion`).
- **No tool integrato di anteprima**: avrebbe creato `.claude/launch.json` dentro `angelini-academy`. Dev server avviato da terminale sulla cartella `futuritaly-compass` per non sporcare il repo Angelini.

## Numeri

- 12 file creati in `~/code/futuritaly-compass/` (vedi output).
- Build produzione: 981 moduli, exit 0.
- `compass.png`: 1024×1024 originale → 885×885 trasparente dopo pulizia (cerchio raggio 438 px, 5781 px pallini interni rimossi).
- Bundle three.js: ~300 KB gzip (segnalato a Michele per eventuale `React.lazy`).
- Tool count: 26 Write · 15 Bash · 14 Edit · 9 Read.

## Output (file)

Tutti in `/Users/carlosanvoisin/code/futuritaly-compass/`:

- `src/components/CompassScrollAnimation/CompassScrollAnimation.jsx` — componente root
- `src/components/CompassScrollAnimation/CompassScene.jsx` — scena R3F (12 edit, il più iterato)
- `src/components/CompassScrollAnimation/CompassStatic.jsx` — fallback `prefers-reduced-motion`
- `src/components/CompassScrollAnimation/CompassScrollAnimation.module.css`
- `src/components/CompassScrollAnimation/compass.config.js` — palette/stakeholder/easing (11 edit)
- `src/components/CompassScrollAnimation/useScrollProgress.js` — hook scroll
- `src/assets/compass.png` — medaglione brand pulito (885×885 trasparente)
- `src/DemoPage.jsx`, `src/main.jsx`
- `index.html`, `vite.config.js`, `package.json`, `.gitignore`, `README.md`

Cartella destinata a essere passata a Michele come zip o repo Git, senza `node_modules`. Il componente vero da integrare è la sola sottocartella `src/components/CompassScrollAnimation/` (self-contained: l'immagine viaggia con lei).

## Task / Schede vault da aggiornare (§15)

- [ ] [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]] · `## Log` — appendere: "26/5/2026 — componente `CompassScrollAnimation` pronto per integrazione su Hostinger. Repo locale `~/code/futuritaly-compass/`. Owner integrazione [[60 - People/Michele Mattucci|Michele]]. Stack: R3F + framer-motion. Build produzione OK (981 moduli)."
- [ ] [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]] · nuovo task: "Decidere modalità consegna a Michele — zip o repo Git (Carlo da confermare)"
- [ ] [[20 - Projects/Futuritaly/Sito Futuritaly|Sito Futuritaly]] · nuovo task per Michele: "Integrare `<CompassScrollAnimation />` nella colonna destra della sezione 'Time on Target' del sito FuturItaly (Hostinger). Valutare se sito è React (integrazione diretta) o WordPress/HTML (isola React in div dedicato)."
- [ ] [[60 - People/Michele Mattucci]] · `## Log` — assegnata integrazione componente bussola sul sito FuturItaly.
- [ ] **Master Facts Sheet**: nessun numero ufficiale toccato — niente da aggiornare.

## Citazioni

- Carlo, mid-session: «la bussola funziona [ma] due problemi… le scritte esterne sono troppo appiccicate alla bussola… [e] io volevo un effetto tridimensionale, questa è bidimensionale… il logo al centro è sbagliato.»
- Agente, autodiagnosi: «Sto lavorando alla cieca. Non ho nessun browser collegato: non vedo quello che produco. Ogni scelta di luci, materiali e proporzioni è stata un calcolo a occhi chiusi. Il 3D è lavoro visivo e iterativo — fatto senza vedere il risultato viene mediocre per forza.» → poi sbloccato collegando estensione "Claude for Chrome".

## Note di flag

- **Cwd disallineato vs lavoro effettivo**: la sessione è registrata sotto `~/code/angelini-academy/` ma tutti i file toccati sono in `~/code/futuritaly-compass/`. Pattern volutamente scelto in sessione per isolamento. Da tenere a mente per future ricerche cross-sessione: il nome cartella JSONL non riflette il progetto FuturItaly su cui si lavora.
- **Sessione interrotta in apertura**: prima esecuzione del task abortita da Carlo per timore di toccare repo Angelini. Verifica `git status` ha confermato stato pulito prima del proseguimento. Pattern da preservare: prima ogni Edit/Write su path non standard, verificare proprietà del repo e isolare.
- **Hostinger come hosting target**: il componente è pensato per essere droppato sopra l'hosting attuale FuturItaly. Dipende dallo stack reale del sito (React vs WordPress/HTML) — Michele decide in fase di integrazione.
- **Dev server lasciato attivo**: `localhost:5179` ancora up a fine sessione. Da spegnere se non serve più.
