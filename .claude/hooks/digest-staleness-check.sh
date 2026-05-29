#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# digest-staleness-check.sh  —  "campanello" affidabilità PM Digest (Front 3, 29/5/2026)
#
# PERCHÉ ESISTE:
#   Le automazioni del vault (PM Digest mattutino, vault-link-checker, moc-refresh,
#   crm-velocity, ...) girano nello scheduler dell'app COWORK
#   (~/Documents/Claude/Scheduled/). Girano SOLO se Cowork è aperto.
#   Claude CODE ha uno scheduler separato (~/.claude/scheduled-tasks/) con un solo
#   task (code-sessions-index). Quindi lavorando in Code senza aprire Cowork, il
#   digest del mattino smette di girare IN SILENZIO e nessuno se ne accorge.
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

MSG="PM Digest fermo: ultima daily note ${LATEST} (${DAYS}gg fa). Le automazioni (digest, link-checker, moc-refresh, crm-velocity) girano SOLO in Cowork; lavorando in Code non partono. Per recuperare: apri Cowork e lascia girare il digest, oppure lancialo a mano. [campanello Front 3 — .claude/hooks/digest-staleness-check.sh]"

# Output: systemMessage = visibile a Carlo in UI; additionalContext = iniettato all'agente.
jq -nc --arg m "$MSG" \
  '{systemMessage: ("⚠️ " + $m), hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: $m}}'
exit 0
