---
type: design
status: da-approvare
created: 2026-06-10
updated: 2026-06-10
tags: [system, design, pm-digest, failover, rischio-1]
---

# 🛟 DESIGN — 2° failover PM Digest a Mac spento (Rischio #1)

> B11 del piano 10/6. **Solo design** — implementazione dietro OK (richiede un nuovo trigger cloud + patch alla routine).

## Il buco residuo

Oggi: cloud 8:02 (dipende dal token M365 su claude.ai) → bridge locale 9:30 (gira SOLO ad app Code aperta). **Se il token M365 scade E il Mac è spento/Code chiuso → niente daily, nessun allarme fino all'hook di apertura sessione** (che scatta solo quando Carlo apre Code, a danno già fatto).

## Design proposto (2 pezzi, entrambi cloud = girano a Mac spento)

**1. Digest degradato nel run cloud esistente** (patch alla routine `pm-digest-mattutino.md`, nessun trigger nuovo): se i tool M365 falliscono (token scaduto), invece di fallire il run produce comunque la daily note in **modalità degradata** — solo dati dal vault (task da Open Tasks, scadenze note dalle schede, alert staleness) + banner `⚠️ M365 OFFLINE — digest senza email/calendario: rinnovare l'auth su claude.ai`. Valore: la daily esiste SEMPRE, il banner È l'allarme, il bridge locale 9:30 resta dormiente (vede la daily → non duplica).

**2. Watchdog cloud 10:00 UTC** (nuovo trigger leggero, no connettori): clona il repo, controlla se la daily di oggi esiste; se assente → scrive `99 - System/Digest Log.md` riga ALERT + crea daily-stub con banner rosso + push (la notifica push del trigger avvisa Carlo sul telefono). Cron `0 10 * * 1-5`. Anti-doppione: il watchdog NON produce il digest (solo stub+alert), quindi non collide né col cloud 8:02 né col bridge 9:30.

## Raccomandazione

Implementare **prima il pezzo 1** (una patch alla routine esistente, copre il 90% del rischio perché il run cloud parte comunque — fallisce solo l'auth M365, non il clone). Il pezzo 2 solo se osserviamo run cloud che falliscono PRIMA di arrivare alla routine (mai successo finora). Effort: pezzo 1 ~20 min + prova end-to-end simulando M365 giù; pezzo 2 ~30 min.

## Rollback

Pezzo 1: `git revert` della patch routine. Pezzo 2: delete del trigger.
