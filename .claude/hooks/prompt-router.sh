#!/bin/bash
# prompt-router.sh — hook UserPromptSubmit
# (1) ogni prompt: rileva file audio/video → suggerisce pipeline trascrizione
# (2) primo prompt della sessione: keyword-match leggero → suggerisce stack skill + effort
# Suggerisce, non impone; output vuoto = zero effetto. Rif: design 2026-06-10 (Inbox).
INPUT=$(cat)
PROMPT=$(printf '%s' "$INPUT" | /usr/bin/python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('prompt',''))" 2>/dev/null)
[ -z "$PROMPT" ] && exit 0
# Le notifiche dei task in background arrivano come prompt sintetici: non sono di Carlo, niente suggerimenti
case "$PROMPT" in "<task-notification>"*) exit 0;; esac
SESSION_ID=$(printf '%s' "$INPUT" | /usr/bin/python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('session_id','nosess'))" 2>/dev/null)
OUT=""
# Path-anchored (richiede / o ~ nel token): evita falsi positivi su testo incollato che cita ".mp3" senza essere un file
if printf '%s' "$PROMPT" | grep -qiE '(~|/)[^[:space:]]*\.(m4a|mp3|wav|aac|ogg|flac|mp4|mov)([^a-z0-9]|$)'; then
  OUT="🎙️ Rilevato file audio/video → invoca audio-transcriber-deepgram (chiave: env DEEPGRAM_API_KEY o ~/Documents/deepgram-api-key.txt), poi categorizza e passa a transcript-processing (§15.bis)."
fi
# Marker fuori da /tmp (macOS lo pulisce) + self-cleanup dei marker >2 giorni
MARKER_DIR="$HOME/.claude/tmp/router"
mkdir -p "$MARKER_DIR" 2>/dev/null
find "$MARKER_DIR" -name 'claude-router-*' -mtime +2 -delete 2>/dev/null
MARKER="$MARKER_DIR/claude-router-${SESSION_ID}"
if [ ! -f "$MARKER" ]; then
  touch "$MARKER" 2>/dev/null
  P=$(printf '%s' "$PROMPT" | tr '[:upper:]' '[:lower:]')
  SUG=""
  case "$P" in *email*|*bozza*outlook*) SUG="email-drafting (Read SKILL prima, §2.1) — effort: basso";; esac
  [ -z "$SUG" ] && case "$P" in *proposta*|*quotazion*|*memo*) SUG="pm-method + investment-proposal-drafting + audit numerico — effort: ALTO";; esac
  [ -z "$SUG" ] && case "$P" in *trascrizion*|*recap\ call*|*minuta*) SUG="transcript-processing (§15.bis) — effort: medio";; esac
  [ -z "$SUG" ] && case "$P" in *pitch*|*deck*|*slide*) SUG="pm-method + pptx + deck-iteration — effort: ALTO";; esac
  [ -z "$SUG" ] && case "$P" in *audit*|*contraddizion*|*broken*) SUG="vault-health — effort: medio";; esac
  [ -z "$SUG" ] && case "$P" in *prezzo*|*pricing*|*margine*|*fornitor*) SUG="Master Facts PRIMA dei numeri (§5) + pricing-audit + management-consulting — effort: medio";; esac
  [ -z "$SUG" ] && case "$P" in *overnight*|*housekeeping*) SUG="prompt 17 + vault-live-protocol + writing-plans — effort: ALTO";; esac
  [ -z "$SUG" ] && case "$P" in *requirement*|*requisit*) SUG="requirement-log (xlsx Master/Cliente, §13) — effort: medio";; esac
  [ -z "$SUG" ] && case "$P" in *post-mortem*|*coaching*|*come\ sono\ andato*) SUG="coaching-note (→ Area Performance & Coaching) — effort: medio";; esac
  if [ -n "$SUG" ]; then [ -n "$OUT" ] && OUT="$OUT
"; OUT="${OUT}🧭 Router skill (suggerimento): $SUG"; fi
fi
[ -n "$OUT" ] && printf '%s\n' "$OUT"
exit 0
