---
type: design
status: pronto-da-attivare
created: 2026-06-10
updated: 2026-06-10
tags: [system, hook, router, audio]
---

# 🧭 Hook router skill + audio-detect — PRONTO, attivazione con Carlo (~2 min)

> Il guardrail di sicurezza richiede (giustamente) la tua azione esplicita per installare un hook che gira a ogni prompt. Tutto è pronto: 2 passaggi con me presente in sessione, poi test immediato.

## Cosa fa

UN solo hook `UserPromptSubmit`: (1) su OGNI prompt, se citi un file audio/video suggerisce la pipeline audio-transcriber-deepgram → categorizzazione → transcript-processing; (2) al PRIMO prompt della sessione, keyword-match leggero che suggerisce lo stack skill + livello effort (basso/medio/ALTO). Suggerisce, non impone; output vuoto = zero effetto; <50ms, nessuna chiamata esterna.

## Attivazione (dimmi "attiva l'hook" in una sessione e lo faccio con te)

1. Io creo `.claude/hooks/prompt-router.sh` (script già scritto, sotto) e lo registro in `.claude/settings.json` sotto `hooks.UserPromptSubmit`.
2. Test insieme: tu scrivi un prompt con "email" → deve comparire il suggerimento email-drafting; poi un prompt con un path .m4a → suggerimento pipeline audio. Se qualcosa disturba: si rimuove con 1 riga.

## Script (riferimento integrale)

```bash
#!/bin/bash
# prompt-router.sh — hook UserPromptSubmit
INPUT=$(cat)
PROMPT=$(printf '%s' "$INPUT" | /usr/bin/python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('prompt',''))" 2>/dev/null)
[ -z "$PROMPT" ] && exit 0
SESSION_ID=$(printf '%s' "$INPUT" | /usr/bin/python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('session_id','nosess'))" 2>/dev/null)
OUT=""
if printf '%s' "$PROMPT" | grep -qiE '\.(m4a|mp3|wav|aac|ogg|flac|mp4|mov)([^a-z0-9]|$)'; then
  OUT="🎙️ Rilevato file audio/video → invoca audio-transcriber-deepgram (chiave: env DEEPGRAM_API_KEY o ~/Documents/deepgram-api-key.txt), poi categorizza e passa a transcript-processing (§15.bis)."
fi
MARKER="/tmp/claude-router-${SESSION_ID}"
if [ ! -f "$MARKER" ]; then
  touch "$MARKER" 2>/dev/null
  P=$(printf '%s' "$PROMPT" | tr '[:upper:]' '[:lower:]')
  SUG=""
  case "$P" in *email*|*bozza*outlook*) SUG="email-drafting (Read SKILL prima, §2.1) — effort: basso";; esac
  [ -z "$SUG" ] && case "$P" in *proposta*|*quotazion*|*memo*) SUG="pm-method + investment-proposal-drafting + audit numerico — effort: ALTO";; esac
  [ -z "$SUG" ] && case "$P" in *trascrizion*|*recap\ call*|*minuta*) SUG="transcript-processing (§15.bis) — effort: medio";; esac
  [ -z "$SUG" ] && case "$P" in *pitch*|*deck*|*slide*) SUG="pm-method + pptx + deck-iteration — effort: ALTO";; esac
  [ -z "$SUG" ] && case "$P" in *audit*|*contraddizion*|*broken*) SUG="vault-health — effort: medio";; esac
  [ -z "$SUG" ] && case "$P" in *prezzo*|*pricing*|*margine*|*fornitor*) SUG="Master Facts PRIMA dei numeri (§5) + management-consulting — effort: medio";; esac
  [ -z "$SUG" ] && case "$P" in *overnight*|*housekeeping*) SUG="prompt 17 + vault-live-protocol + writing-plans — effort: ALTO";; esac
  if [ -n "$SUG" ]; then [ -n "$OUT" ] && OUT="$OUT
"; OUT="${OUT}🧭 Router skill (suggerimento): $SUG"; fi
fi
[ -n "$OUT" ] && printf '%s\n' "$OUT"
exit 0
```

Registrazione in settings.json (aggiungere a `hooks`):
```json
"UserPromptSubmit": [{"hooks": [{"type": "command", "command": "bash \"/Users/carlosanvoisin/claude/.claude/hooks/prompt-router.sh\""}]}]
```
