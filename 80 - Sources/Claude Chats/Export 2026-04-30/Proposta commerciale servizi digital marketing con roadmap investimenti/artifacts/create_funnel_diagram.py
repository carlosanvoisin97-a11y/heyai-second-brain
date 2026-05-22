import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
import numpy as np

# --- CONFIG ---
fig_width = 38
fig_height = 22
fig, ax = plt.subplots(1, 1, figsize=(fig_width, fig_height), dpi=150)
ax.set_xlim(0, 100)
ax.set_ylim(0, 60)
ax.axis('off')
fig.patch.set_facecolor('#FAFBFC')

# --- COLORS ---
colors = {
    'phase0': {'bg': '#1E3A5F', 'light': '#E8F0FE', 'mid': '#B8D4F0', 'text': '#1E3A5F'},
    'phase05': {'bg': '#7C3AED', 'light': '#EDE9FE', 'mid': '#C4B5FD', 'text': '#5B21B6'},
    'phase1': {'bg': '#EA580C', 'light': '#FFF7ED', 'mid': '#FDBA74', 'text': '#C2410C'},
    'phase2': {'bg': '#059669', 'light': '#ECFDF5', 'mid': '#6EE7B7', 'text': '#047857'},
    'phase3': {'bg': '#2563EB', 'light': '#EFF6FF', 'mid': '#93C5FD', 'text': '#1D4ED8'},
}
INTERNAL_COLOR = '#D1FAE5'  # green tint
EXTERNAL_COLOR = '#FEE2E2'  # red tint
INTERNAL_BORDER = '#059669'
EXTERNAL_BORDER = '#DC2626'

# --- HELPER FUNCTIONS ---
def draw_phase_header(ax, x, y, w, h, title, subtitle, color_set, timing):
    """Draw the phase header box"""
    rect = FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.3",
                          facecolor=color_set['bg'], edgecolor='white', linewidth=2)
    ax.add_patch(rect)
    ax.text(x + w/2, y + h*0.65, title, ha='center', va='center',
            fontsize=13, fontweight='bold', color='white', fontfamily='sans-serif')
    ax.text(x + w/2, y + h*0.28, timing, ha='center', va='center',
            fontsize=9, color='#E0E0E0', fontfamily='sans-serif', style='italic')

def draw_step_box(ax, x, y, w, h, text, is_external=False, is_optional=False):
    """Draw a step box with internal/external color coding"""
    if is_external:
        bg_color = EXTERNAL_COLOR
        border_color = EXTERNAL_BORDER
        border_width = 2.0
    else:
        bg_color = INTERNAL_COLOR
        border_color = INTERNAL_BORDER
        border_width = 1.5
    
    if is_optional:
        linestyle = 'dashed'
        border_width = 1.5
    else:
        linestyle = 'solid'
    
    rect = FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.2",
                          facecolor=bg_color, edgecolor=border_color,
                          linewidth=border_width, linestyle=linestyle)
    ax.add_patch(rect)
    
    # Split long text
    words = text.split('\n')
    if len(words) == 1:
        ax.text(x + w/2, y + h/2, text, ha='center', va='center',
                fontsize=8.5, color='#1F2937', fontfamily='sans-serif',
                wrap=True, fontweight='medium')
    else:
        line_height = h / (len(words) + 1)
        for i, line in enumerate(words):
            ax.text(x + w/2, y + h - line_height * (i + 1), line,
                    ha='center', va='center', fontsize=8.5, color='#1F2937',
                    fontfamily='sans-serif', fontweight='medium')

def draw_arrow(ax, x1, y1, x2, y2):
    """Draw connecting arrow between phases"""
    arrow = FancyArrowPatch((x1, y1), (x2, y2),
                            arrowstyle='->', mutation_scale=25,
                            linewidth=3, color='#9CA3AF',
                            connectionstyle='arc3,rad=0')
    ax.add_patch(arrow)

def draw_sub_arrow(ax, x1, y1, x2, y2):
    """Draw small arrow between steps"""
    ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                arrowprops=dict(arrowstyle='->', color='#D1D5DB', lw=1.5))

# --- LAYOUT PARAMETERS ---
phase_w = 17.0
phase_h = 3.2
step_w = 16.0
step_h = 3.5
gap_x = 2.5
gap_y = 1.0
start_x = 1.5
header_y = 54.5

# Calculate x positions for 5 phases
phase_xs = [start_x + i * (phase_w + gap_x) for i in range(5)]

# --- TITLE ---
ax.text(50, 59, 'FUNNEL DI LANCIO BRAND / PRODOTTO — Pop-Up Store',
        ha='center', va='center', fontsize=22, fontweight='bold',
        color='#1E3A5F', fontfamily='sans-serif')
ax.text(50, 57.5, 'HeyAI × Noloop On Trade  |  Diagramma di Flusso Operativo',
        ha='center', va='center', fontsize=13, color='#6B7280',
        fontfamily='sans-serif')

# --- DRAW PHASES ---

# PHASE 0 - Setup & Strategia
px = phase_xs[0]
draw_phase_header(ax, px, header_y, phase_w, phase_h,
                  'FASE 0\nSETUP & STRATEGIA', '', colors['phase0'], 'Sett. -8 / -6')

steps_0 = [
    ('0.1 Raccolta Brief\ne Analisi Brand', False, False),
    ('0.2 Analisi Mercato\nLocale & Centro Comm.', False, False),
    ('0.3 Definizione\nStrategia di Lancio', False, False),
    ('0.4 Setup Tecnico\n(Social, Pixel, Tools)', False, False),
]

for i, (text, ext, opt) in enumerate(steps_0):
    sy = header_y - (i + 1) * (step_h + gap_y)
    sx = px + (phase_w - step_w) / 2
    draw_step_box(ax, sx, sy, step_w, step_h, text, ext, opt)
    if i > 0:
        draw_sub_arrow(ax, sx + step_w/2, sy + step_h + gap_y*0.1,
                       sx + step_w/2, sy + step_h)

# PHASE 0.5 - Validazione
px = phase_xs[1]
draw_phase_header(ax, px, header_y, phase_w, phase_h,
                  'FASE 0.5\nVALIDAZIONE', '', colors['phase05'], 'Sett. -6 / -4')

steps_05 = [
    ('0.5.1 Creazione 2\nLanding Page A/B Test', False, False),
    ('0.5.2 Micro-Campagne\nPaid per Test (€200-300)', False, False),
    ('0.5.3 Analisi Risultati\n& Scelta Angolo Vincente', False, False),
    ('0.5.4 Landing Definitiva\ncon Lista d\'Attesa', False, False),
]

for i, (text, ext, opt) in enumerate(steps_05):
    sy = header_y - (i + 1) * (step_h + gap_y)
    sx = px + (phase_w - step_w) / 2
    draw_step_box(ax, sx, sy, step_w, step_h, text, ext, opt)
    if i > 0:
        draw_sub_arrow(ax, sx + step_w/2, sy + step_h + gap_y*0.1,
                       sx + step_w/2, sy + step_h)

# PHASE 1 - Pre-Lancio
px = phase_xs[2]
draw_phase_header(ax, px, header_y, phase_w, phase_h,
                  'FASE 1\nPRE-LANCIO / TEASING', '', colors['phase1'], 'Sett. -4 / -1')

steps_1 = [
    ('1.1 Contenuti Teaser\nsui Social', False, False),
    ('1.2 Campagne Paid\nGeo-Targetizzate', False, False),
    ('1.3 Influencer Mktg\nLocale (3-5 micro)', True, False),
    ('1.4 Materiali per il\nCentro Commerciale', True, False),
    ('1.5 Nurturing Lista\nd\'Attesa (Email/WA)', False, False),
]

for i, (text, ext, opt) in enumerate(steps_1):
    sy = header_y - (i + 1) * (step_h + gap_y)
    sx = px + (phase_w - step_w) / 2
    draw_step_box(ax, sx, sy, step_w, step_h, text, ext, opt)
    if i > 0:
        draw_sub_arrow(ax, sx + step_w/2, sy + step_h + gap_y*0.1,
                       sx + step_w/2, sy + step_h)

# PHASE 2 - Lancio
px = phase_xs[3]
draw_phase_header(ax, px, header_y, phase_w, phase_h,
                  'FASE 2\nLANCIO', '', colors['phase2'], 'Sett. 0 / +2')

steps_2 = [
    ('2.1 Evento di\nApertura Pop-Up', False, False),
    ('2.2 Intensificazione\nCampagne Paid', False, False),
    ('2.3 Copertura\nContenuti dal Vivo', True, False),
    ('2.4 Attivazione\nLista d\'Attesa', False, False),
    ('2.5 PR Locale\n(Opzionale)', True, True),
]

for i, (text, ext, opt) in enumerate(steps_2):
    sy = header_y - (i + 1) * (step_h + gap_y)
    sx = px + (phase_w - step_w) / 2
    draw_step_box(ax, sx, sy, step_w, step_h, text, ext, opt)
    if i > 0:
        draw_sub_arrow(ax, sx + step_w/2, sy + step_h + gap_y*0.1,
                       sx + step_w/2, sy + step_h)

# PHASE 3 - Mantenimento
px = phase_xs[4]
draw_phase_header(ax, px, header_y, phase_w, phase_h,
                  'FASE 3\nMANTENIMENTO', '', colors['phase3'], 'Sett. +3 / Fine')

steps_3 = [
    ('3.1 Gestione Social\nContinuativa', False, False),
    ('3.2 Campagne Paid\nAlways-On', False, False),
    ('3.3 Reporting &\nOttimizzazione', False, False),
    ('3.4 Attivazioni\nPeriodiche', False, True),
]

for i, (text, ext, opt) in enumerate(steps_3):
    sy = header_y - (i + 1) * (step_h + gap_y)
    sx = px + (phase_w - step_w) / 2
    draw_step_box(ax, sx, sy, step_w, step_h, text, ext, opt)
    if i > 0:
        draw_sub_arrow(ax, sx + step_w/2, sy + step_h + gap_y*0.1,
                       sx + step_w/2, sy + step_h)

# --- ARROWS BETWEEN PHASES ---
for i in range(4):
    x1 = phase_xs[i] + phase_w
    x2 = phase_xs[i+1]
    mid_y = header_y + phase_h / 2
    draw_arrow(ax, x1 + 0.2, mid_y, x2 - 0.2, mid_y)

# --- LEGEND ---
legend_y = 2.0
legend_x = 8

# Legend title
ax.text(legend_x, legend_y + 3.5, 'LEGENDA', fontsize=13, fontweight='bold',
        color='#374151', fontfamily='sans-serif')

# Internal box
rect_int = FancyBboxPatch((legend_x, legend_y + 1.5), 4, 1.8, boxstyle="round,pad=0.15",
                          facecolor=INTERNAL_COLOR, edgecolor=INTERNAL_BORDER, linewidth=1.5)
ax.add_patch(rect_int)
ax.text(legend_x + 5, legend_y + 2.4, 'Attività INTERNA (gestita da HeyAI)',
        fontsize=10, color='#374151', fontfamily='sans-serif', va='center')

# External box
rect_ext = FancyBboxPatch((legend_x, legend_y - 0.8), 4, 1.8, boxstyle="round,pad=0.15",
                          facecolor=EXTERNAL_COLOR, edgecolor=EXTERNAL_BORDER, linewidth=2)
ax.add_patch(rect_ext)
ax.text(legend_x + 5, legend_y + 0.1, 'Attività ESTERNA (risorsa esterna necessaria)',
        fontsize=10, color='#374151', fontfamily='sans-serif', va='center')

# Optional box
rect_opt = FancyBboxPatch((legend_x + 38, legend_y + 1.5), 4, 1.8, boxstyle="round,pad=0.15",
                          facecolor='#F3F4F6', edgecolor='#9CA3AF', linewidth=1.5, linestyle='dashed')
ax.add_patch(rect_opt)
ax.text(legend_x + 43, legend_y + 2.4, 'Attività OPZIONALE',
        fontsize=10, color='#374151', fontfamily='sans-serif', va='center')

# Budget note
ax.text(legend_x + 38, legend_y + 0.1, '💰 Budget Media: pagato dal cliente (via NOT), non da HeyAI',
        fontsize=10, color='#6B7280', fontfamily='sans-serif', va='center')

# --- COST ESTIMATES AT BOTTOM ---
cost_y = -1.0
costs = [
    ('FASE 0', '35-45h interne\n€1.500-2.000', colors['phase0']['bg']),
    ('FASE 0.5', '12-18h interne\n+ €200-300 media test', colors['phase05']['bg']),
    ('FASE 1', 'Fee mensile\n+ €1.500-4.500 esterni', colors['phase1']['bg']),
    ('FASE 2', 'Fee mensile\n+ €600-4.300 esterni', colors['phase2']['bg']),
    ('FASE 3', 'Fee mensile\n+ €800-1.500/m media', colors['phase3']['bg']),
]

cost_w = 17
for i, (label, cost, color) in enumerate(costs):
    cx = phase_xs[i] + (phase_w - cost_w) / 2
    rect = FancyBboxPatch((cx, cost_y), cost_w, 3.5, boxstyle="round,pad=0.2",
                          facecolor=color, edgecolor='white', linewidth=1, alpha=0.15)
    ax.add_patch(rect)
    ax.text(cx + cost_w/2, cost_y + 2.4, label, ha='center', va='center',
            fontsize=9, fontweight='bold', color=color, fontfamily='sans-serif')
    ax.text(cx + cost_w/2, cost_y + 1.0, cost, ha='center', va='center',
            fontsize=8, color='#6B7280', fontfamily='sans-serif')

# --- TIMELINE BAR ---
timeline_y = 6.5
ax.plot([phase_xs[0], phase_xs[4] + phase_w], [timeline_y, timeline_y],
        color='#D1D5DB', linewidth=2, zorder=1)

weeks = [
    (phase_xs[0] + phase_w/2, 'Sett. -8/-6'),
    (phase_xs[1] + phase_w/2, 'Sett. -6/-4'),
    (phase_xs[2] + phase_w/2, 'Sett. -4/-1'),
    (phase_xs[3] + phase_w/2, 'Sett. 0/+2'),
    (phase_xs[4] + phase_w/2, 'Sett. +3 →'),
]

for wx, wlabel in weeks:
    ax.plot(wx, timeline_y, 'o', color='#6B7280', markersize=8, zorder=2)
    ax.text(wx, timeline_y - 1.0, wlabel, ha='center', va='center',
            fontsize=9, color='#6B7280', fontfamily='sans-serif', fontweight='medium')

ax.text(phase_xs[0] - 0.5, timeline_y, '📅', fontsize=14, va='center')

plt.tight_layout()
plt.savefig('/home/claude/funnel_lancio_brand.png', dpi=150, bbox_inches='tight',
            facecolor='#FAFBFC', edgecolor='none', pad_inches=0.5)
plt.close()
print("Diagram created successfully!")