---
type: strategic-review
status: live
created: 2026-06-10
updated: 2026-06-11
aliases: [Review Strategica, Review architetturale sistema]
---

# 🏛️ Review Strategica del Sistema Operativo — giugno 2026

> Documento di riferimento sull'architettura del second brain HeyAI. Nato dall'audit avversariale a 6 agenti del 10/6 (~370 item verificati su 3 livelli) e dalle sessioni di stabilizzazione che ne sono seguite. Si aggiorna a ogni revisione strutturale; il meta-loop settimanale ([[99 - System/Routines/weekly-system-review|weekly-system-review]]) lo usa come baseline.

## 0. Verdetto esecutivo

**Il sistema funziona ed è architettato in modo strategico.** Il piano di consolidamento (fronti F0-F7 + M1-M4) è stato eseguito integralmente e verificato voce per voce; la conoscenza è certificata completa (KB Solidity 9/6, mining brain-2 10/6: 0 item persi su 168). I tre difetti strutturali emersi dall'audit (race fra writer, failover digest disinnescato, drift documentale) sono stati corretti il 10/6 sera. Il rischio residuo dominante non è tecnico ma di **governo**: la velocità di modifica del sistema tende a superare la capacità di riconciliazione. La risposta è la regola di moratoria (§7).

## 1. Architettura (com'è fatta e perché)

```
┌─ CLOUD claude.ai (unattended, Mac spento OK) ── il BATTITO
│   6 trigger → clonano il repo → eseguono 99-System/Routines/*.md → push main
│   pm-digest 8:02 L-V · crm-velocity lun · link-checker dom · moc-refresh sab
│   weekly-review sab · weekly-system-review sab (meta-loop)
├─ CODE locale (best-effort, app aperta) ── il LAVORO + la RETE
│   sessioni interattive (R1 skill-first, §15 vault-live) + 3 scheduled task
│   (code-sessions-index · consistency-check lun · bridge digest 9:30 failover)
│   + 4 hook (2 SessionStart campanelli · using-superpowers · prompt-router)
├─ OBSIDIAN (app aperta) ── la LETTURA + il SYNC
│   plugin git: commit-and-sync ~10' (terzo writer: backup automatico)
└─ GITHUB privato ── la spina dorsale: unica via di comunicazione fra i tre
```

Scelte fondanti (tutte provate end-to-end e confermate da Carlo): git+GitHub come bus (senza, cadono le routine unattended) · push solo su `main`, mai branch/PR · Cowork dismesso (9/6) · cloud per le automazioni, locale per il lavoro.

## 2. Principi di design (consolidati al 10/6)

1. **Una fonte per ogni stato, il resto è vista derivata.** Numeri → Master Facts; stato progetti → frontmatter schede (M1/M2: la tabella §6 di CLAUDE.md non esiste più, è una ricetta + [[99 - System/Progetti Live.base|.base]]); task → checkbox nelle schede → Open Tasks (aggregato). Una feature nuova deve dichiarare quale copia di stato ELIMINA, non quale aggiunge.
2. **Logica in un posto solo (thin-wrapper).** Le routine cloud sono gusci che eseguono le skill (`vault-health` per i 3 audit): si patcha la skill, mai N copie.
3. **Append-only + audit, non rewrite.** Le schede crescono in append (§15); la coerenza la garantiscono gli audit (links/moc/consistency/contradictions), non la disciplina umana.
4. **Flag-only di default.** Gli automatismi segnalano (worktree stale, branch stray, contraddizioni); le azioni distruttive restano manuali. Auto-patch solo dove provato sicuro (moc-refresh).
5. **Guardrail di auto-modifica.** Hook, settings e secrets si toccano solo con autorizzazione esplicita di Carlo, a Obsidian chiuso (⌘Q verificato — lesson 10/6: finestra chiusa ≠ processo morto), con scritture in ordine sicuro (script prima, registrazione dopo).
6. **Push-discipline ovunque**: pull→push→clean in ogni `## Push finale` (i trigger cloud hanno outcome-branch `claude/*` di piattaforma: nulla deve restare non pushato a fine run).
7. **Basename-resolution (v4 alias-aware)**: i wikilink per basename sopravvivono agli archive; i path-link si bonificano al move (fatto per 21 ref il 10/6).

## 3. Registro rischi (dall'audit avversariale 10/6) — stato post-fix

| # | Rischio | Stato |
|---|---|---|
| 🔴1 | Race fra i 3 writer (plugin committa file a metà) | **Mitigato (rafforzato 11/6)**: plugin configurato con "commit-and-sync after stopping file edits" ON (Carlo) → niente commit durante scritture attive; resta la regola Obsidian-chiuso (§2.5) per i lavori su hook/settings + scritture ordinate. Residuo accettato: commit "auto-sync" rumorosi nella history |
| 🔴2 | Failover digest disinnescato dal fallback degradato | **CHIUSO 10/6**: guardia bridge a 4 casi (manca→completo; degradata→integra live, anti-doppione; manuale→append) + §9/§9bis allineati |
| 🔴3 | Drift doc↔realtà (copie di stato) | **Ridotto strutturalmente**: M1 (la copia peggiore eliminata), segnaletica bonificata (28 file), _README riconciliato. Residuo governato da §7 + consistency-check |
| 🟡4 | Push cloud senza pull → run perso | **CHIUSO**: pull→push→clean in 8/8 routine |
| 🟡5 | Campanello staleness: falso allarme lunedì + msg stale | **CHIUSO**: weekend-aware + 2 allarmi distinti (testato 4/4) |
| 🟡6 | Router: falsi positivi audio + marker in /tmp | **CHIUSO**: regex path-anchored + marker `~/.claude/tmp/router` con self-cleanup + guardia anti-notifiche |
| 🟡7 | §10ter puntava a cartella morta; hot-path costoso | **Parzialmente chiuso**: §10ter fixato; hot-path ridotto da M1 (~12 righe); resta CLAUDE.md ~385 righe → §5 |
| 🟡8 | Stato duplicato 4-7 copie | **Ridotto** (M1 + §6 §10bis); restano per scelta: §7 (indice curato decisori), handover/PUNTI (a scadenza naturale: si archiviano quando svuotati) |
| 🟡9 | Dipendenza totale da claude.ai per l'unattended | **APERTO con piano**: il bridge locale è il template; replica LaunchAgent delle 2 routine critiche documentabile in ~1h SE claude.ai cambia. Accettato: probabilità bassa, costo attuale zero |
| 🟢10 | Chiave Deepgram copia unica (~/Documents) | **APERTO (Carlo)**: spostarla nel password manager/Keychain |
| 🟢11 | PAT GitHub plugin: scadenza non monitorata | **APERTO (Carlo)**: annotare la scadenza come task con data nella scheda area |
| 🟢12 | Complessità ≈ 1 sessione/settimana di manutenzione | **Governato**: moratoria (§7) + weekly-system-review come unico luogo dove si propone evoluzione |

## 4. Copie di stato — inventario residuo

Vivono legittimamente: frontmatter schede (fonte) · Master Facts (fonte numeri) · CLAUDE.md §7 (indice curato persone: caratterizzazioni, non stato — decisione 10/6, revocabile) · Open Tasks (aggregato rigenerato ogni mattina) · MOC (indice, auto-audit sabato). Vivono a tempo: HANDOVER + PUNTI APERTI 10/6 (si archiviano quando la coda è svuotata — non crearne di nuovi: il prossimo handover è la sostituzione, non l'aggiunta).

## 5. Hot-path e costi di contesto

Apertura sessione ≈ CLAUDE.md (~385 righe) + output hook + listing skill (centinaia, cap ~1% contesto) + memorie. Interventi fatti: M1 (−12 righe le più drift-prone), routing §0 (legge solo ciò che serve). Leva successiva: **audit plugin esterni** (vedi [[99 - System/Mappa Skill e Frammentazione AI]] + esiti audit 10/6 in PUNTI APERTI) — disattivare i plugin mai usati riduce il listing di ogni singola sessione. Non spingere oltre la dieta di CLAUDE.md: sotto ~350 righe si perde più chiarezza di quanto contesto si risparmi.

## 6. Resilienza e dipendenze esterne

GitHub (spina dorsale; repo privato; PAT plugin da monitorare) · claude.ai (routine; piano B = LaunchAgent template, §3.9) · M365 token (degradazione gestita + 2 allarmi) · Deepgram (fallback whisper.cpp locale già installato). Rollback: tag `pre-overnight-2026-06-10` + history git completa.

## 7. Regola di governo (la lezione del 10/6)

**Moratoria sui meccanismi nuovi** finché il sistema non ha digerito quelli esistenti: ogni proposta di automazione/hook/routine passa dalla weekly-system-review (max 2 raccomandazioni/settimana), deve dichiarare quale copia di stato elimina, e si attiva solo con OK esplicito di Carlo. Le eccezioni: fix di rischi 🔴 (subito) e lavoro sui contenuti (sempre libero). Eccezioni già approvate in coda: scaffold `~/2brain` (sessione dedicata), pilota insight PKM.

## 8. KPI di salute (baseline 10/6/2026)

| KPI | Valore | Sorgente |
|---|---|---|
| Wikilink rotti azionabili (K) | 3 (solo `[[Simona Velotta]]` in daily 7/6) | Vault Link Audit (run bis) |
| Frontmatter rotti (J) | 0 | idem |
| File Inbox | 10 (tutti vivi) | ls |
| Drift doc↔realtà trovati | 0 aperti (tutti chiusi 10/6 sera) | audit 6 agenti + fix |
| Branch `claude/*` su origin | 0 | git branch -r |
| Manutenzione settimanale | ~1 sessione | stima §3.12 |

> Prossima lettura di questi KPI: weekly-system-review sab 13/6 — se un KPI peggiora due settimane di fila, è il segnale che la moratoria va stretta, non allargata.

## 9. Roadmap aperta (in ordine)

1. Esiti audit plugin esterni → disattivazioni con OK Carlo (PUNTI APERTI)
2. Scaffold `~/2brain` (approvato — sessione dedicata)
3. Pilota insight PKM: Progressive Summarization L4 su 10 note calde + tagging concettuale (1 sessione, poi si decide)
4. Cadenza radar-competitor (decisione Carlo dopo lettura)
5. Watchdog digest pezzo 2 — SOLO se si osservano run cloud morti pre-routine
6. (eventuale, su evidenza) replica LaunchAgent delle routine critiche

---

## Appendice A — Audit plugin esterni (10/6/2026, evidenza da 91 recap + 20 indici + profilazione 206 sessioni)

**Dato di fondo**: ~230 voci skill di plugin caricate nel listing di OGNI sessione; l'uso reale provato è concentrato su 5-6 namespace. Le skill documento (docx/pptx/xlsx/pdf) sono caricate in TRIPLA copia (example-skills ×2 per un bug di namespace + anthropic-skills inline).

| Plugin/Connettore | Skill | Uso reale | Verdetto | Chi agisce |
|---|---|---|---|---|
| superpowers | 14 | ✅ ~7 sessioni (brainstorming + enforcement R1) | **TIENI** (core) | — |
| episodic-memory | 1+MCP | motore memoria conversazioni (sync a ogni avvio) | **TIENI** | — |
| claude-seo | 25 | ✅ 1 esecuzione produttiva (SEO Angelini) | **TIENI** (serve per clienti) | — |
| vercel | 26+11cmd | piattaforma usata intensamente, skill mai | **TIENI** (lavoro dev ~/code) | — |
| product-management · marketing · anthropic-skills · design · productivity (inline) | 9+8+8+7+4 | write-spec ×2, brand-review ×1, docx/xlsx ×3 | **TIENI** | — |
| elements-of-style · claude-session-driver | 1+1 | mai | TIENI (peso nullo) | — |
| **example-skills** (duplicato ×2) | 17×2 | coperto da anthropic-skills | **DISATTIVA** (−34 voci, zero perdita) | Claude (settings.json) |
| **ruflo ×11** (installati ma spenti dal 6/6) | 33 se attivi | 0 | **DISINSTALLA** (pulizia cache) | Claude (CLI) |
| **marketing-skills** | **43** (il più pesante) | 0 diretto (solo routing §0bis) | ZONA GRIGIA: tieni per NOT Marketing/clienti O dieta | Carlo decide |
| **brightdata-plugin** | 21 | 0 (e invasivo: pretende di sostituire WebFetch) | **SPEGNI** | Carlo (pannello app, è inline) |
| **sales · operations · enterprise-search** (inline) | 9+9+5 | 0 (Guru mai autenticato) | **SPEGNI** | Carlo (pannello app) |
| **cowork-plugin-management** (inline) | 2 | 0 (Cowork dismesso 9/6) | **SPEGNI** | Carlo (pannello app) |
| **desktop-commander plugin inline** | 1+26 tool | doppione dell'estensione (quella sì usata) | **SPEGNI il doppione** | Carlo (pannello app) |
| **PowerPoint MCP** (estensione) | — | valutato e SCARTATO (si usa Claude Design) | **SPEGNI** | Carlo (estensioni app) |
| **Meta Ads** (connettore claude.ai, ~60 tool) | — | 0 (decisione #28: no suite a Michele/Andrea) | **SCOLLEGA** | Carlo (claude.ai) |
| **Google Drive · Spotify** (connettori claude.ai) | — | 0 lavoro (Spotify personale?) | SCOLLEGA Drive; Spotify a scelta | Carlo (claude.ai) |
| **21st-dev-magic** (MCP) | — | mai usato produttivamente | ✅ **TIENI** (deciso da Carlo 11/6: tier gratuito, nessun costo). Nota residua: API key in chiaro in ~/.claude.json — accettata | — |
| ~25 server MCP dei plugin inline mai autenticati | — | peso morto sul listing tool | si spengono spegnendo i plugin sopra | — |

**Stima risparmio se applicato tutto**: ~100-130 voci skill in meno per sessione (−45%) + decine di tool MCP morti in meno. Esecuzione: vedi [[2026-06-10 - PUNTI APERTI — decisioni Carlo (post-consolidamento)|PUNTI APERTI]] #32.
