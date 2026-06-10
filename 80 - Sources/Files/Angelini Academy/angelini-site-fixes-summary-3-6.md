# Angelini Academy — Sito: DIFF-SUMMARY fix pre-pitch 5/6

> Documento di revisione per Carlo. Branch di lavoro: `claude/site-fixes-3-6`.
> Build verde (19 pagine, 0 errori). Fonte dei fix: vault `2026-06-03 - Audit Sito mockup vs reale.md`.
> Generato il 2026-06-04. Repo: `/Users/carlosanvoisin/code/angelini-academy`.

---

## ⏪ ISTRUZIONI DI REVERT (leggere prima di tutto)

Se al dry-run qualcosa non convince e vuoi tornare allo stato pre-pitch:

**Opzione A — tornare alla baseline dev (consigliata, niente perdita di dati):**
```
git -C /Users/carlosanvoisin/code/angelini-academy checkout angelini-website-dev
```
Il branch `claude/site-fixes-3-6` resta intatto: ci si rientra con
`git -C /Users/carlosanvoisin/code/angelini-academy checkout claude/site-fixes-3-6`.

**Opzione B — ripristino integrale da backup tar (stato del 4/6 ore 01:06):**
```
tar -xzf /Users/carlosanvoisin/Downloads/angelini-backup-20260604-0106.tar.gz -C <cartella-destinazione>
```
Backup verificato: `~/Downloads/angelini-backup-20260604-0106.tar.gz` (≈92 MB).

**Revert di UN solo commit** (lascia gli altri): `git -C /Users/carlosanvoisin/code/angelini-academy revert <hash>`.

> NB: nessun `git push` è stato eseguito; `angelini-website-dev` e `origin` NON sono stati toccati. Tutto il lavoro vive in locale sul branch `claude/site-fixes-3-6`.

---

## ✅ Esito verifica finale (criteri di accettazione)

| Criterio | Esito |
|---|---|
| Build `npx astro build` | 🟢 VERDE — 19 pagine, 0 errori (solo warning chunk >500kB, pre-esistente) |
| CTA "Candidati/Apply/Iscriviti" sull'MBA (IT+EN) | 🟢 nessun residuo — vedi nota sotto |
| "Hub Editoriale" visibile | 🟢 0 occorrenze (resta solo l'`id`/anchor tecnico `hub-editoriale`, invariato per scelta) |
| "/anno" · "ogni anno" sull'MBA | 🟢 nessuno — gli unici "annuale/ogni anno" residui sono su Forum, Report Engaged Research e una stat economica (PIL), non sulla cadenza MBA |
| Link / import rotti | 🟢 nessuno — tutte le route `to=`/`href=` risolvono a pagine esistenti; pagina standalone Engaged Research dissolta e tutti i link reindirizzati all'anchor di landing |

**Nota su "candidat" residui (tutti legittimi, NON sono CTA-apply MBA):**
- `MbaGateway.tsx` / `MappaSito.tsx`: prosa che descrive il processo IE ("valutazione delle candidature", "candidatura formale via IE Madrid") — corretto, la candidatura vera è su IE.
- `AngeliniPeople.tsx` ("Candidati"): è l'area RISERVATA `/angelini-people` per dipendenti del Gruppo, candidatura a posizioni interne, non l'MBA pubblico.
- `Press.tsx` ("340 candidature ricevute"): numero illustrativo, già con disclaimer "dato illustrativo".
- `Dashboard.tsx` ("candidature MBA Gateway"): dashboard interna gated, metrica del team.
- Commenti di codice in `Formazione.tsx` / `PercorsiTalent.tsx` ("mai Candidati") — promemoria, non testo a schermo.

---

## 📜 git log (da dopo `85863e2`, dal più recente)

```
7b63afd fix(sito): rimuovi leak 'candidatura' MBA (roadshow on-site -> EOI) + path morto /engaged-research in community mock
d1bb99b fix(sito): Gateway reframe a iniziativa faro + sbocchi talent (careers + Formazione per tutti)
be4c122 fix(sito): pilastro 3 da fatto a visione — rimuove Forum Premi Nobel realizzato e numeri inventati
833e780 fix(sito): reversal ricerca pubblico/community su landing Ricercatore
dacc257 fix(sito): estrai VideoPillola in componente condiviso (dedupe community↔landing)
4aa0f02 fix(sito): dissolvi pagina standalone Engaged Research (page + view); concetto conservato in landing
01c9091 fix(sito): rimuovi Engaged Research come voce-pagina da nav e reindirizza i link al blocco landing
8fb9301 fix(sito): blocco identitario Engaged Research (nucleo + 4 ambiti) in landing
708d0df fix(sito): aggancio Formazione a menu, footer e CTA HR & Business
f43e9d4 fix(sito): nuova pagina Formazione aperta (3 aree + 6 metodologie, IT/EN)
8143c19 fix(sito): rinomina 'Hub Editoriale' -> 'Laboratorio Editoriale Permanente' (id tecnici invariati)
9ea68df fix(sito): etichetta 'dato illustrativo' su Press e paper Reading Room + label Dashboard EOI
70aadf0 fix(sito): ChiSiamo + press/blog/eventi — rimossa anagrafica SRL/2024/autonoma, aggiunto badge ASFOR
2dfcca9 fix(sito): cadenza MBA Gateway da annuale a edizione inaugurale 2026
390a05d fix(sito): CTA MBA Gateway da candidatura a manifestazione d'interesse (EOI)
```
(15 commit; `7b63afd` è l'unico aggiunto in questa sessione di verifica finale, gli altri 14 erano già sul branch.)

---

## 📊 git diff --stat `angelini-website-dev..HEAD`

```
 public/casa-angelini/wallart/opera-2.jpg      | Bin 301556 -> 107886 bytes
 public/personas/hr.png                        | Bin 506139 -> 334772 bytes
 public/personas/imprese.png                   | Bin 2592005 -> 248214 bytes
 public/personas/media.png                     | Bin 448001 -> 282115 bytes
 public/personas/researcher.png                | Bin 529817 -> 350634 bytes
 public/personas/talent.png                    | Bin 410685 -> 277417 bytes
 public/photos/bridge-ambient.jpg              | Bin 137067 -> 49188 bytes
 public/photos/case-pharma.jpg                 | Bin 316214 -> 99271 bytes
 public/photos/engaged-research-lab.jpg        | Bin 242136 -> 99394 bytes
 public/photos/event-academia.jpg              | Bin 255547 -> 108486 bytes
 public/photos/founder-elena.jpg               | Bin 278029 -> 108899 bytes
 public/photos/founder-marco.jpg               | Bin 262947 -> 100079 bytes
 public/photos/founder-sofia.jpg               | Bin 337967 -> 134594 bytes
 public/photos/team-communications.jpg         | Bin 385084 -> 141937 bytes
 public/photos/team-director.jpg               | Bin 283156 -> 71751 bytes
 public/photos/team-programs.jpg               | Bin 325881 -> 124534 bytes
 public/photos/team-research-director.jpg      | Bin 340622 -> 84277 bytes
 src/components/Blog.tsx                       |   4 +-
 src/components/CareerPathNavigator.tsx        | 343 -------------------
 src/components/EngagedResearchReadingRoom.tsx |  12 +-
 src/components/Events.tsx                     |   4 +-
 src/components/Footer.tsx                     |   4 +-
 src/components/GalileoIcon.tsx                |   4 +-
 src/components/GalileoTutor.tsx               |   7 +-
 src/components/Header.tsx                     |   5 +-
 src/components/MorphHero.tsx                  |   2 +-
 src/components/Newsletter.tsx                 |   2 +-
 src/components/Pillars.tsx                    |  22 +-
 src/components/VideoPillola.tsx               | 107 ++++++
 src/data/communityMock.ts                     |   2 +-
 src/lib/i18n.tsx                              |  12 +-
 src/pages/engaged-research.astro              |   8 -
 src/pages/formazione.astro                    |   8 +
 src/pages/mappa-sito.astro                    |   8 +
 src/views/AngeliniPeople.tsx                  |   2 +-
 src/views/ChiSiamo.tsx                        |  12 +-
 src/views/Dashboard.tsx                       |   4 +-
 src/views/EngagedNetwork.tsx                  |  76 +----
 src/views/EngagedResearch.tsx                 | 239 --------------
 src/views/Formazione.tsx                      | 456 ++++++++++++++++++++++++++
 src/views/Home.tsx                            |  29 ++
 src/views/MappaSito.tsx                       | 265 +++++++++++++++
 src/views/PercorsiHrBusiness.tsx              |  29 +-
 src/views/PercorsiImprese.tsx                 |   2 +-
 src/views/PercorsiMedia.tsx                   |   2 +-
 src/views/PercorsiResearcher.tsx              | 274 +++++++---------
 src/views/PercorsiTalent.tsx                  | 281 +++++++++++++---
 src/views/Press.tsx                           |   8 +-
 59 files changed, 1305 insertions(+), 930 deletions(-)
```

> ⚠️ Lettura del diff-stat: il confronto è `angelini-website-dev..HEAD`, quindi include anche il contenuto dello snapshot `85863e2` (file `CareerPathNavigator.tsx` rimosso, ricompressione immagini `public/`, `MappaSito` nuova) che **precede** i 15 commit di site-fixes. I 15 commit qui sotto sono il lavoro mirato post-snapshot; il resto del delta è la WIP già presente nello snapshot.

---

## 🔧 Interventi, uno per uno (cosa + perché, collegato ai finding audit)

**`390a05d` — CTA MBA da candidatura a EOI** → _finding F02_
Header (i18n IT "Manifesta interesse" / EN "Express interest"), hero `ctaPrimary` "Scopri il MBA Gateway / Discover the MBA Gateway", FounderStories e PercorsiTalent. Toglie i leak "Candidati/Apply" sull'MBA: la candidatura formale è su IE Madrid e le selezioni 2026 sono chiuse — a sito si manifesta solo interesse.

**`2dfcca9` — cadenza MBA da annuale a edizione inaugurale 2026** → _finding F03 + correzione 1_
Pillars (pilastro 04, facts "10 borsisti · ed. 2026"), PercorsiImprese ("10 borsisti MBA Gateway · ed. 2026"), PercorsiTalent. Rimuove "/anno" e "ogni anno": il blog reale del cliente frama il Gateway come edizione inaugurale, NON ricorrente. Non si afferma né "annuale" né "unica per sempre".

**`70aadf0` — ChiSiamo: via anagrafica inventata, dentro ASFOR** → _finding F10 + F09 + correzione 3_
Tolto "nasce nel 2024 come SRL autonoma" (falso e verificabile dal footer reale: è S.p.A. a socio unico sotto Angelini Holding). Ora "società di Angelini Industries dedicata al Corporate Learning" + badge "Accreditata ASFOR dal 2022". Allineati anche Blog/Events/PercorsiMedia/Press sulla stessa anagrafica.

**`9ea68df` — etichetta "dato illustrativo" sui numeri finti** → _finding F07_
Disclaimer a schermo su Press (roadshow/atenei/candidature) e sui paper della Reading Room, che prima erano gli unici senza disclaimer. Label EOI sulla Dashboard. Evita di spacciare numeri inventati per reali davanti al cliente.

**`8143c19` — "Hub Editoriale" → "Laboratorio Editoriale Permanente"** → _finding F12_
Find&replace del testo visibile in EngagedNetwork, EngagedResearch (allora ancora presente) e MappaSito. Gli `id`/anchor tecnici (`hub-editoriale`) restano invariati per non rompere i link interni — è solo l'etichetta a schermo a cambiare (decisione call 3/6).

**`f43e9d4` + `708d0df` — nuova landing "Formazione per tutti"** → _finding F04 + F05 + raccomandazione Gateway mossa 2_
Nuova pagina `/formazione` (3 aree tematiche reali: Leadership e sviluppo manageriale · Salute e prevenzione · Supporto alle nuove generazioni) + le 6 metodologie reali (Leadership Talk, Executive Open Programs, Bootcamp e Masterclass, Mastery Program, Future Leaders Program, Mentoring Program), IT/EN, senza prezzo/iscrizione. Agganciata a menu, footer e CTA HR&Business. Colma il buco "non avete capito cosa facciamo": era offerta-cardine del sito reale e mancava del tutto.

**`8fb9301` + `01c9091` + `4aa0f02` — Engaged Research da pagina standalone a IBRIDO** → _finding F11 + raccomandazione Engaged Research_
Blocco identitario "Nucleo 00" (molecola + 4 ambiti) spostato in landing (`id="engaged-research-nucleo"` in Home); rimosso Engaged Research come voce-pagina dalla nav; pagina standalone (`engaged-research.astro` + `EngagedResearch.tsx`) dissolta e tutti i link reindirizzati all'anchor di landing. Il concetto resta come ancora di posizionamento, senza pagina-doppione.

**`dacc257` + `833e780` — reversal pubblico/community + dedupe video pillola** → _finding F06 + correzione 2_
`VideoPillola` estratta in componente condiviso (dedupe community↔landing). Reversal sulla landing Ricercatore: la video pillola diventa l'amo pubblico (prima assente), il paper integrale resta dietro la community. Allinea il mockup alla decisione call 3/6, che era invertita.

**`be4c122` — pilastro 3 da "fatto" a "visione"** → _finding F07 (numeri) + over-emphasis_
Educational Think Tanks riscritto al futuro/condizionale ("immaginiamo", "in progettazione"): rimosso il Forum con Premi Nobel presentato come già realizzato e i numeri inventati. È un'ambizione del progetto culturale, non un asset esistente.

**`d1bb99b` — Gateway reframe a iniziativa faro + sbocchi talent** → _finding F01 + raccomandazione Gateway mossa 1_
PercorsiTalent: Gateway inquadrato come iniziativa faro di mecenatismo (gesto filantropico del Gruppo, merito/selezione al centro), non come "porta a iscrizione aperta". Aggiunti gli sbocchi reali: portale carriere Angelini Industries + layer divulgativo "Formazione per tutti". CTA "Scopri/EOI", mai "Candidati".

**`7b63afd` — residui di verifica finale (questa sessione)** → _finding F02 + igiene link_
Due leak puntuali emersi al controllo finale: (1) `Events.tsx`, blurb Roadshow Bologna "candidatura on-site" → "manifestazione d'interesse on-site" (un visitatore non può candidarsi all'MBA in loco: selezioni chiuse, candidatura solo via IE); (2) `communityMock.ts`, prosa di una card community che citava il path morto `/engaged-research` → riformulata in "nucleo Engaged Research" (la pagina è stata dissolta).

---

## 📌 Note operative per il pitch

- **Non affermare nessuna cadenza MBA** a voce: dire "prima edizione 2026 / edizione inaugurale", mai "annuale" né "unica per sempre" (il cliente non ha dichiarato la cadenza oltre la prima edizione).
- Le aree nuove (Engaged Network/Research, Eventi con Forum, Galileo, Formazione, i 4 pilastri come nav) **oggi non esistono sul sito reale**: presentarle come PROPOSTA di evoluzione, usando `/mappa-sito` come chiave di lettura "oggi non c'è, ve lo proponiamo".
- I numeri a schermo (Press, paper, Galileo) sono etichettati "dato illustrativo": confermare a voce che sono mockup dimostrativi.
