# PROMPT — Google AI Studio "Develop App"
# Link Platform — Strategic Demo for Executive Presentation
# Language: English | Output: Interactive Web Demo

---

## ROLE & CONTEXT

You are a senior UI/UX engineer building a HIGH-IMPACT interactive demo of "Link", an AI-powered operational management platform for Noloop, a corporate events agency (~150 employees, ~260 projects/year, ~€55M revenue). This demo will be shown during an executive presentation to convince management to invest €85,000 in the platform. It must look real, polished, and impressive — not a wireframe.

## VISUAL IDENTITY (CRITICAL — match existing ecosystem)

The current Noloop ecosystem uses this design language. Match it precisely:
- Primary background: white/light gray (#F8F9FA)
- Navigation bar: dark (#1A1A2E) with purple accent (#7C5CFC)
- Brand purple: #7C5CFC for primary actions, active states, highlights
- Secondary actions: outlined buttons, subtle grays
- Status badges: red (#EF4444) for alerts, green (#22C55E) for confirmed, blue (#3B82F6) for in progress, amber (#F59E0B) for pending
- Typography: clean sans-serif (Inter or system font), hierarchy via weight not size
- Tables: clean data grids with alternating row shading, compact rows, left-aligned text, right-aligned numbers
- Cards: white background, subtle border (#E5E7EB), no heavy shadows
- Layout: sidebar navigation (dark, collapsed icons + labels) with main content area
- Top bar: breadcrumbs + user avatar + notifications bell

## WHAT TO BUILD

Create a SINGLE-PAGE interactive demo with a left sidebar navigation and a main content area. The sidebar should have these menu items (with icons):
1. Dashboard (home icon)
2. Commesse (folder icon)  
3. Budget / PDP (calculator icon)
4. Progress (chart icon)
5. Fatturazione (receipt icon)
6. Sally AI (sparkle/bot icon)

Clicking each menu item transitions (with smooth animation) to a different view. Build ALL 6 views.

---

## VIEW 1: DASHBOARD (default view)

Executive dashboard showing real-time KPIs. This is the "wow" screen.

TOP ROW — 4 animated KPI cards with count-up animation on load:
- "Commesse Attive": 127 (with small green badge "+12 questo mese")
- "Marginalità Media": 34.2% (with subtle sparkline trending up)
- "Budget Utilizzato": €18.4M / €22.1M (circular progress ring, animated fill to 83%)
- "Fatture da Associare": 8 (pulsing amber badge — this is a pain point alert)

MIDDLE ROW — 2 charts side by side:
- LEFT: Bar chart "Marginalità per BU" (Garbarino, Consumer, Corporate) — bars animate in from bottom on load
- RIGHT: Line chart "Facing a 3 Stadi" showing 3 overlapping lines (Previsionale, Pre-chiusura, Consuntivo) over months — lines draw progressively

BOTTOM ROW — "Commesse Recenti" table:
Show 6 rows with columns: Codice, Cliente, Evento, Status (badge), Margine, PM Assegnato
Status badges: 2x "Confermato" (green), 2x "In Produzione" (blue), 1x "Gara" (amber), 1x "Chiusura" (purple)

---

## VIEW 2: COMMESSE

Project management view.

TOP: Search bar + filters row (Status, BU, Commerciale, Date range) + purple "Nuova Commessa" button

TABLE with ~8 rows:
Columns: Codice | Cliente | Evento | Date | Budget | Margine | Status | PM
Make one row expandable — clicking it slides open a detail panel below showing: timeline, assigned team, budget breakdown mini-chart, linked documents count.

ANIMATION: When clicking "Nuova Commessa", show a slide-in modal from right with pre-filled fields and a top banner saying "✨ Pre-compilato da Minutes — verifica e conferma" with a subtle purple glow pulse on the banner. This demonstrates the AI auto-fill from brainstorming meetings.

---

## VIEW 3: BUDGET / PDP (Piano di Produzione Digitale)

This is the core operational view. Show a specific project budget.

TOP: Project header card — "AA25-00142 | Evento Corporate Milano | Cliente: Gruppo Bianchi" with status badge and margin indicator.

MAIN AREA: Editable budget table with sections:
- RICAVI section header (collapsible, green accent left border)
  - 3-4 line items (Quote partecipanti, Sponsorship, Fee organizzazione)
- COSTI section header (collapsible, red accent left border)  
  - 6-8 line items grouped by department (Venue, Catering, Tecnica, Grafica, Travel, Staff)
  - Each row: Voce | Fornitore | Preventivo | Consuntivo | Delta | Status

BOTTOM BAR (sticky): 
- "Margine: €42.300 (34.2%)" — large, green
- "Stato BC: Sincronizzato ✓" — with green dot
- Buttons: "Salva Bozza" (outlined) | "Invia a BC" (purple, solid)

KEY ANIMATION: When hovering over "Invia a BC" button, show a subtle tooltip: "Push automatico verso Business Central via API — nessun doppio inserimento". This subtly reinforces the pain point elimination.

SIDE PANEL (right): "Facing Temporale" — 3 small stacked cards showing the 3 budget stages (Previsionale → Pre-chiusura → Consuntivo) with dates and delta arrows between them. Animate the arrow transitions.

---

## VIEW 4: PROGRESS (Auto-alimentato)

This view must dramatically contrast with the old Excel-based process.

TOP BANNER (animated gradient border, purple): "Il Progress si aggiorna automaticamente dal PDP — nessuna compilazione manuale necessaria" with a small "i" tooltip: "Risparmio stimato: 576 ore/anno"

MAIN: Grid of project cards (3 columns × 3 rows), each card showing:
- Project code + client name
- Mini progress bar (budget utilization)  
- Margin badge (green/amber/red based on value)
- PM avatar circle
- Last updated timestamp: "Aggiornato automaticamente 2 min fa"

FILTER BAR: Status | BU | Commerciale | Margine (range slider)

ANIMATION: Cards should have a subtle staggered fade-in on load (each card appears 50ms after the previous one). One card should have a gentle pulse animation with a small "LIVE" dot to show it was just updated.

---

## VIEW 5: FATTURAZIONE

Active invoicing management.

TOP: Stats row — "650 submission/anno" | "Tempo medio: 3 min" (with green down arrow "da 13 min") | "Errori inserimento: 0"

MAIN TABLE: Fatture attive
Columns: Commessa | Cliente | Tranche | Importo | Codice IVA | Status BC | Azioni
Show ~6 rows. Status BC column should show "Sincronizzato" (green check) or "In attesa conferma" (amber clock icon)

One row should have an animated "Inviato a BC ✓" status that just appeared (subtle green flash animation), showing the real-time sync.

BOTTOM SECTION: "Blocco Chiusura Intelligente" card
Show a commessa example with:
- Checklist: "Fatture associate: 12/14" (amber, 2 missing)
- "Quadratura BC: In verifica..."  
- Alert: "⚠ 2 fatture passive mancanti — Sally invierà reminder tra 3 giorni"
This is a KEY selling point — make it visually prominent with a left amber border.

---

## VIEW 6: SALLY AI (the wow factor)

AI assistant chat interface — conversational analytics.

LEFT SIDE (70%): Chat interface
- Dark-ish background (#1E1E2E) for the chat area
- Show a pre-loaded conversation:

  USER: "Qual è la marginalità media delle commesse Zaghi nel 2025?"
  
  SALLY (with bot avatar, purple accent): "La marginalità media delle 34 commesse gestite da Zaghi nel 2025 è del 31.4%, in crescita del 2.1 punti rispetto al 2024. Le commesse più performanti sono nel segmento Pharma (38.2%). Vuoi un dettaglio per cliente?"
  
  USER: "Chi è più scarico questa settimana?"
  
  SALLY: "Analizzando i carichi di lavoro attuali:
  • Marco Belli — 2 commesse attive (capacità disponibile)
  • Elena Rossi — 3 commesse attive (carico medio)
  • [others at 5-6, carico alto]
  Ti suggerisco di assegnare la nuova commessa Bianchi a Marco Belli."

- Input bar at bottom with placeholder: "Chiedi a Sally..." and microphone icon + send button

RIGHT SIDE (30%): "Analisi Suggerite" panel
- 4 clickable cards with quick queries:
  - "Marginalità per tipo cliente"
  - "Commesse a rischio margine"
  - "Confronto previsto vs consuntivo Q1"
  - "Carichi di lavoro team"

ANIMATION: 
- Messages should appear with a typing indicator animation (3 dots bouncing) before Sally's response renders
- Sally's response text should have a subtle typewriter effect (characters appearing progressively)
- The suggested analysis cards should glow softly on hover

---

## GLOBAL ANIMATIONS & MICRO-INTERACTIONS

1. Page transitions: smooth crossfade (200ms) between views
2. Sidebar: active item has purple left border + purple text, hover shows subtle background
3. Numbers: count-up animation on first render (especially dashboard KPIs)
4. Charts: animate in on view load (bars grow from bottom, lines draw left to right)
5. Tables: rows fade in with 30ms stagger
6. Notifications bell (top bar): has a small red "3" badge, subtle bounce every 30 seconds
7. All buttons: subtle scale(1.02) on hover with 150ms transition
8. Loading states: purple shimmer skeleton screens when transitioning views (show briefly, ~300ms)

## TECHNICAL REQUIREMENTS

- Single HTML file with embedded CSS and JavaScript
- Use Chart.js (CDN) for charts
- Smooth, 60fps animations (use CSS transitions and requestAnimationFrame)
- Responsive but optimized for 16:9 presentation display (1920×1080)
- No external API calls — all data is hardcoded
- The demo must feel like a real production application, not a prototype

## TONE

Professional, enterprise-grade, premium. This must look like a real SaaS platform that costs €85,000 — not a student project. Every pixel matters.