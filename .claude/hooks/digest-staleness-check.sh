#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# digest-staleness-check.sh  —  "campanello" affidabilità PM Digest
# (Front 3, 29/5/2026 · rev. 10/6/2026: weekend-aware + allarme daily degradata)
#
# PERCHÉ ESISTE:
#   Il PM Digest gira come ROUTINE CLOUD su claude.ai (unattended, anche a Mac
#   spento). Dal 10/6 un token M365 scaduto NON blocca più la daily: il run
#   produce una daily DEGRADATA (solo fonti vault) con banner "M365 OFFLINE".
#   Quindi i due allarmi distinti di questo campanello:
#     1. daily di oggi DEGRADATA (banner presente) → token M365 da rinnovare
#     2. ultima daily ferma da ≥2 giorni LAVORATIVI → cloud completamente giù
#   Il bridge locale (~/.claude/scheduled-tasks/pm-digest-mattutino) è ON
#   (failover 9:30, guardia estesa 10/6: integra le fonti live se può).
#
# COME DISATTIVARLO: cancella questo file, oppure rimuovi il blocco "SessionStart"
#   da .claude/settings.json, oppure apri /hooks in Claude Code e disabilitalo.
# ─────────────────────────────────────────────────────────────────────────────

DAILY_DIR="/Users/carlosanvoisin/claude/10 - Daily Notes"
THRESHOLD_WORKDAYS=2

emit() {
  jq -nc --arg m "$1" \
    '{systemMessage: ("⚠️ " + $m), hookSpecificOutput: {hookEventName: "SessionStart", additionalContext: $m}}'
  exit 0
}

# ── Allarme 1: la daily di OGGI esiste ma è degradata (banner M365 OFFLINE)
TODAY=$(date "+%Y-%m-%d")
if [ -f "$DAILY_DIR/$TODAY.md" ] && grep -q "M365 OFFLINE" "$DAILY_DIR/$TODAY.md"; then
  emit "Daily di oggi in modalità DEGRADATA (banner M365 OFFLINE): il token Microsoft 365 su claude.ai è scaduto. Rinnovare l'auth (claude.ai → Settings → Connectors → Microsoft 365); il bridge locale 9:30 integra le fonti live solo ad app Code aperta. [campanello — digest-staleness-check.sh]"
fi

# ── Allarme 2: ultima daily ferma da ≥N giorni LAVORATIVI (il digest gira Lun-Ven)
LATEST=$(ls "$DAILY_DIR" 2>/dev/null | grep -E '^[0-9]{4}-[0-9]{2}-[0-9]{2}\.md$' | sort | tail -1 | sed 's/\.md$//')
[ -z "$LATEST" ] && exit 0
LATEST_EPOCH=$(date -j -f "%Y-%m-%d" "$LATEST" "+%s" 2>/dev/null)
[ -z "$LATEST_EPOCH" ] && exit 0
TODAY_EPOCH=$(date "+%s")

WORKDAYS=0
E=$LATEST_EPOCH
while [ "$E" -lt "$TODAY_EPOCH" ]; do
  E=$((E + 86400))
  [ "$E" -gt "$TODAY_EPOCH" ] && break
  DOW=$(date -r "$E" "+%u" 2>/dev/null)   # 1=lun … 7=dom
  [ -n "$DOW" ] && [ "$DOW" -le 5 ] && WORKDAYS=$((WORKDAYS + 1))
done
[ "$WORKDAYS" -lt "$THRESHOLD_WORKDAYS" ] && exit 0

emit "PM Digest fermo: ultima daily note ${LATEST} (${WORKDAYS} giorni lavorativi fa). Dal 10/6 un token M365 scaduto produce comunque la daily (degradata): se la daily MANCA del tutto, la routine cloud è proprio non partita o morta. Recupero: (1) 'RemoteTrigger action:list' per lo stato del trigger pm-digest-mattutino; (2) 'RemoteTrigger action:run' per rilanciarla; (3) il bridge locale 9:30 (ON) la copre ad app Code aperta. [campanello — digest-staleness-check.sh]"
