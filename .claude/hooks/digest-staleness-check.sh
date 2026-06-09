#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# digest-staleness-check.sh  —  "campanello" affidabilità PM Digest (Front 3, 29/5/2026)
#
# PERCHÉ ESISTE (agg. 9/6/2026 — COWORK DISMESSO):
#   Le automazioni del vault girano ora come ROUTINE CLOUD su claude.ai (unattended,
#   anche a Mac spento), NON più nello scheduler Cowork. Il PM Digest cloud dipende
#   dal token M365: se scade, il run headless fallisce IN SILENZIO. Il bridge locale
#   (~/.claude/scheduled-tasks/pm-digest-mattutino) è OFF (fallback dormiente).
#   Questo campanello resta utile: se la daily note è ferma >= soglia, segnala il
#   probabile fallimento M365 della routine cloud (non più "Cowork non aperto").
#
# COSA FA:
#   A ogni apertura di sessione (hook SessionStart) controlla quanto è vecchia
#   l'ultima daily note in "10 - Daily Notes". Se è ferma da >= 2 giorni, mostra
#   un avviso visibile a Carlo (systemMessage) e lo inietta nel contesto dell'agente
#   (additionalContext). Se è recente, non stampa nulla (silenzioso, zero rumore).
#
# NOTA lunedì mattina: di lunedì prima delle 8:00 l'ultima daily note è quella di
#   venerdì (sab/dom il digest non gira) -> potrebbe scattare un avviso "soft".
#   È accettabile e corretto-ish; per silenziarlo basta alzare la soglia a 3.
#
# COME DISATTIVARLO: cancella questo file, oppure rimuovi il blocco "SessionStart"
#   da .claude/settings.json, oppure apri /hooks in Claude Code e disabilitalo.
# ─────────────────────────────────────────────────────────────────────────────

DAILY_DIR="/Users/carlosanvoisin/claude/10 - Daily Notes"
THRESHOLD_DAYS=2

# Trova l'ultima daily note con nome-data (YYYY-MM-DD.md). Esclude "Weekly Digest ..." ecc.
LATEST=$(ls "$DAILY_DIR" 2>/dev/null | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}\.md$' | sort | tail -1 | sed 's/\.md$//')
[ -z "$LATEST" ] && exit 0

# Converte la data in epoch (sintassi BSD/macOS). Se fallisce, esci silenzioso.
LATEST_EPOCH=$(date -j -f "%Y-%m-%d" "$LATEST" "+%s" 2>/dev/null)
[ -z "$LATEST_EPOCH" ] && exit 0

TODAY_EPOCH=$(date "+%s")
DAYS=$(( (TODAY_EPOCH - LATEST_EPOCH) / 86400 ))
[ "$DAYS" -lt "$THRESHOLD_DAYS" ] && exit 0

MSG="PM Digest fermo: ultima daily note ${LATEST} (${DAYS}gg fa). Il digest gira come ROUTINE CLOUD (claude.ai) e dipende dal token M365 — se è fermo, probabilmente il token M365 è scaduto e il run headless è fallito in silenzio (Cowork è dismesso, non è quella la causa). Per recuperare: (1) controlla auth connettori M365 su claude.ai; (2) 'RemoteTrigger action:list' per lo stato del trigger pm-digest; (3) in emergenza ri-abilita il bridge locale 'pm-digest-mattutino' + 'RemoteTrigger action:run'. [campanello — .claude/hooks/digest-staleness-check.sh]"

# Output: systemMessage = visibile a Carlo in UI; additionalContext = iniettato all'agente.
jq -nc --arg m "$MSG" \
  '{systemMessage: ("⚠️ " + $m), hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: $m}}'
exit 0
