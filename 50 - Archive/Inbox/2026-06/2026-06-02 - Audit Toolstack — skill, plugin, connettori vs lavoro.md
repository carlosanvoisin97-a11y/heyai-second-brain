---
type: nota
status: attivo
created: 2026-06-02
updated: 2026-06-02
tags: [sistema, tooling, audit]
---

> ⏩ **SUPERSEDED — 10/6/2026 (consolidamento sera-2).** Superato dalla PROPOSTA skill-strategy 10/6 (profilazione completa) e dalla Mappa Skill e Frammentazione AI. Stato corrente: [[2026-06-10 - HANDOVER — consolidamento completo 10-6 (per nuova sessione)|HANDOVER 10/6]] + [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]].

# Audit Toolstack HeyAI — cosa hai davvero, cosa serve al tuo lavoro

> Inventario reale (config su disco, non catalogo teorico) di skill/plugin/connettori scaricati nelle ultime sessioni, incrociato con i progetti e i workflow del vault. Obiettivo: prime azioni più impattanti. Sorgenti: `installed_plugins.json`, `mcp-needs-auth-cache.json`, `settings.json`, lista skill di sessione, `CLAUDE.md` §6/§7/§12.

## 1. Inventario reale — 3 bucket

### A) MCP CONNESSI e funzionanti adesso
- **Microsoft 365** (Outlook mail, Calendar, SharePoint, Teams chat, find_meeting_availability) — il tuo core, già operativo.
- **Meta Ads** — gestione completa campagne FB/IG (catalog, pixel, audience, insights).
- **Connettore file cloud** (probabile Google Drive: read/search/create/copy file).
- **Desktop Commander** — controllo terminale/file/processi sul Mac.
- **21st.dev Magic** — generatore componenti UI React/Tailwind + logo search.
- **PowerPoint (Anthropic)**, **Chrome control**, **Preview**, **session mgmt**, **mcp-registry**, **scheduled-tasks**.
- **Spotify** — fuori scope lavoro.

### B) Plugin/skill INSTALLATI (no auth richiesta — basta invocarli)
- **Code side (5 plugin attivi)**: `vercel`, `example-skills` (docx/pptx/pdf/xlsx, frontend-design, skill-creator…), `superpowers` (brainstorming, TDD, debugging, plans), `marketing-skills` (40+ skill), `claude-seo` (suite SEO).
- **Cowork side**: `design`, `product-management`, `sales`, `operations`, `marketing`, `enterprise-search`, `productivity`, `anthropic-skills`, `brightdata-plugin`, `cowork-plugin-management`, + standalone `management-consulting`, `deep-research`, `web-design-3d`, `website-builder-setup`.
- **Tue skill custom (l'oro)**: `email-drafting`, `investment-proposal-drafting`, `transcript-processing`, `vault-live-protocol` + suite Obsidian (`obsidian-cli`, `obsidian-bases`, `obsidian-markdown`, `json-canvas`, `defuddle`).

### C) Connettori INSTALLATI ma NON autenticati (~25, dormienti)
Gmail, Google Calendar, Figma, SimilarWeb, Atlassian, Intercom, Linear, Notion, Slack, Guru, Ahrefs, Canva, Klaviyo, Supermetrics, Amplitude (+EU), ClickUp, **Fireflies**, Monday, Pendo, Apollo, Close, Outreach, ZoomInfo, Clay, HubSpot, Vercel. → Valore zero finché non li colleghi; ognuno è superficie di sicurezza in più.

## 2. Lettura critica

Hai scaricato ~150 skill + ~30 connettori. Il tuo lavoro reale (PM consulting B2B, ecosistema Microsoft, deliverable = proposte/pitch/recap/quotazioni, 12 progetti) ne tocca **una fetta stretta**. Il resto ha un costo: rumore sull'auto-triggering delle skill, duplicati (`example-skills` ≡ `690f15cac7f7`; due stack marketing + SEO sovrapposti; `design` e `product-management` bundlano entrambi Figma/Notion/Slack/Linear), connettori dormienti come superficie d'attacco. Più strumenti ≠ più capacità: oltre una soglia, peggiora la selezione.

## 3. Prime azioni più impattanti (ranked)

### 🥇 1. Accoppia le skill docx/pptx alle tue skill custom proposta/email
La produzione di proposte/pitch/quotazioni è il tuo deliverable più frequente, e oggi la generazione `.docx` è error-prone (la tua skill `investment-proposal-drafting` elenca errori grafici ricorrenti: Arial vs Aptos, color Heading, footer assente, nomi fornitori esposti). La skill `docx` genera Word con formattazione controllata via codice: la tua skill definisce **il design system**, `docx` lo **esegue** senza sbavature. Idem `pptx` per i pitch.
→ **Azione**: prossima proposta/pitch, invocare insieme `investment-proposal-drafting` + `docx` (o `pptx`). Test su un deliverable reale, poi consolidare nel workflow.
**Impatto: ALTO, quotidiano.**

### 🥈 2. Chiudi Open Question #32 (concorrenti Angelini) con deep-research + brightdata
Hai una domanda aperta, time-sensitive, su un deal in gara — e ora due strumenti nuovi che la risolvono: `deep-research` (report multi-fonte verificato e citato) e `brightdata:competitive-intel` (scraping web live su pricing/posizionamento/contenuti competitor). Trasforma un'incognita strategica in un deliverable.
→ **Azione**: lanciare `deep-research` su competitor Angelini Academy / mercato e-learning corporate. Output → scheda `_Angelini Academy`.
**Impatto: ALTO, sblocca un deal.**

### 🥉 3. Autentica SOLO i connettori che toccano il tuo lavoro — ignora gli altri ~23
- **Fireflies** (trascrizione automatica call) → alimenterebbe `transcript-processing`, il tuo workflow manuale più ripetuto. *Caveat*: valuta consenso cliente sulla registrazione; hai già whisper.cpp locale come alternativa offline (vedi memoria pipeline). Decisione, non automatismo.
- **Notion/Linear/Monday**: solo SE vuoi migrare la Delivery board fuori da Microsoft Lists — ma Lists funziona, quindi probabile NO.
- Tutti gli altri (Apollo, Clay, Close, Outreach, ZoomInfo, Klaviyo, Amplitude, Pendo, Intercom, Ahrefs, SimilarWeb, Supermetrics, Canva, Slack, Atlassian, Guru, Vercel, Gmail, GCal): non mappano un lavoro Microsoft-centrico B2B-consulting → **lasciali spenti**.
**Impatto: MEDIO (sblocca il pipeline call + riduce superficie).**

### 4. Adotta 4 skill PM/consulting per i deliverable strutturati ricorrenti
- `management-consulting` → decisioni strutturate (es. Silencio vs Jakala su PresidIA).
- `product-management:write-spec` → scoping progetti/PRD (moduli Wave 2, evolutive Eldis).
- `operations:vendor-review` → valutazione fornitori (race Silencio/Jakala, audit Soolutions).
- `sales:call-prep` → i prep doc pre-call che già fai in `00 - Inbox/`, ora strutturati.
Augmentano, non sostituiscono, le tue skill custom.
**Impatto: MEDIO, qualità/velocità deliverable.**

### 5. Pota il rumore + chiudi il drift automazioni (#34)
Disabilita i plugin fuori-scope (Vercel, gran parte di marketing-skills B2C-flavour, claude-seo deep, sales-outbound) per pulire l'auto-triggering; usa `cowork-plugin-management:cowork-plugin-customizer`. E definisci una regola Code↔Cowork: le automazioni (digest, audit) girano solo in Cowork — 6 giorni di digest persi mentre lavori in Code (§9bis). Hook `digest-staleness-check.sh` già attivo come campanello.
**Impatto: MEDIO (igiene sistema, evita errori silenziosi).**

## 4. Tier 3 — utile ma non è la tua lane diretta
- **Web/frontend** (`21st-dev-magic`, `frontend-design`, `web-design-3d`, `website-builder-setup`): ottimi per mockup rapidi del pitch o prototipi da allineare col cliente PRIMA di passare a Soolutions. Il build di produzione resta ai fornitori (owner Michele su Sito Futuritaly/Achipoint/Angelini). Usali per velocizzare l'allineamento, non per costruire.
- **Meta Ads + marketing-skills + claude-seo**: rilevanti per NOT Marketing / Eye Cookies / Sito SEO, ma owner Michele+Andrea e taglio B2C. Delegabili a loro, non tuo uso diretto.

## 5. Da NON fare
- Non autenticare tutti i connettori "perché ci sono". Ogni OAuth è superficie + clutter.
- Non sostituire le skill custom (`email-drafting`, `investment-proposal-drafting`, `transcript-processing`) con gli equivalenti generici (`marketing:draft-content`, `sales:call-summary`): le tue sono calibrate sul tuo stile e sulle riservatezze §13. Le generiche al massimo le affiancano.
- Non spostare la Delivery board su Notion/ClickUp/Monday senza un motivo forte: Microsoft Lists è già integrato col tuo ecosistema.
