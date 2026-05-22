import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch

fig_width = 42
fig_height = 24
fig, ax = plt.subplots(1, 1, figsize=(fig_width, fig_height), dpi=150)
ax.set_xlim(0, 105)
ax.set_ylim(-4, 62)
ax.axis('off')
fig.patch.set_facecolor('#FAFBFC')

# Colors
PHASES = {
    0: {'bg': '#1E3A5F', 'light': '#E8F0FE'},
    0.5: {'bg': '#7C3AED', 'light': '#EDE9FE'},
    1: {'bg': '#EA580C', 'light': '#FFF7ED'},
    2: {'bg': '#059669', 'light': '#ECFDF5'},
    3: {'bg': '#2563EB', 'light': '#EFF6FF'},
}
INT_BG = '#D1FAE5'
INT_BORDER = '#059669'
EXT_BG = '#FEE2E2'
EXT_BORDER = '#DC2626'
GRAY = '#6B7280'
DARK = '#1F2937'

def draw_header(x, y, w, h, title, timing, color):
    r = FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.3",
                       facecolor=color, edgecolor='white', linewidth=2)
    ax.add_patch(r)
    ax.text(x+w/2, y+h*0.62, title, ha='center', va='center',
            fontsize=14, fontweight='bold', color='white', fontfamily='sans-serif')
    ax.text(x+w/2, y+h*0.25, timing, ha='center', va='center',
            fontsize=10, color='#D0D0D0', fontfamily='sans-serif', style='italic')

def draw_box(x, y, w, h, line1, line2='', ext=False, opt=False):
    bg = EXT_BG if ext else INT_BG
    bd = EXT_BORDER if ext else INT_BORDER
    ls = '--' if opt else '-'
    lw = 2.0 if ext else 1.5
    r = FancyBboxPatch((x, y), w, h, boxstyle="round,pad=0.2",
                       facecolor=bg, edgecolor=bd, linewidth=lw, linestyle=ls)
    ax.add_patch(r)
    if line2:
        ax.text(x+w/2, y+h*0.62, line1, ha='center', va='center',
                fontsize=10, color=DARK, fontfamily='sans-serif', fontweight='bold')
        ax.text(x+w/2, y+h*0.30, line2, ha='center', va='center',
                fontsize=9.5, color=GRAY, fontfamily='sans-serif')
    else:
        ax.text(x+w/2, y+h/2, line1, ha='center', va='center',
                fontsize=10, color=DARK, fontfamily='sans-serif', fontweight='bold')

# Layout
pw, ph = 18.0, 3.5
sw, sh = 16.5, 3.8
gx, gy = 2.8, 1.2
xs = [1.5 + i*(pw+gx) for i in range(5)]
hy = 55.5

# Title
ax.text(52.5, 60.5, 'FUNNEL DI LANCIO BRAND / PRODOTTO  —  Pop-Up Store',
        ha='center', va='center', fontsize=24, fontweight='bold', color='#1E3A5F')
ax.text(52.5, 58.8, 'HeyAI x Noloop On Trade  |  Diagramma di Flusso Operativo',
        ha='center', va='center', fontsize=14, color=GRAY)

# Phase headers
headers = [
    ('FASE 0\nSETUP & STRATEGIA', 'Sett. -8 / -6', PHASES[0]['bg']),
    ('FASE 0.5\nVALIDAZIONE', 'Sett. -6 / -4', PHASES[0.5]['bg']),
    ('FASE 1\nPRE-LANCIO', 'Sett. -4 / -1', PHASES[1]['bg']),
    ('FASE 2\nLANCIO', 'Sett. 0 / +2', PHASES[2]['bg']),
    ('FASE 3\nMANTENIMENTO', 'Sett. +3 / Fine', PHASES[3]['bg']),
]
for i, (t, tm, c) in enumerate(headers):
    draw_header(xs[i], hy, pw, ph, t, tm, c)

# Arrows between phases
for i in range(4):
    ax.annotate('', xy=(xs[i+1]-0.3, hy+ph/2), xytext=(xs[i]+pw+0.3, hy+ph/2),
                arrowprops=dict(arrowstyle='->', color='#9CA3AF', lw=3.5))

# Steps per phase
all_steps = [
    # Phase 0
    [
        ('0.1 Raccolta Brief', 'e Analisi Brand', False, False),
        ('0.2 Analisi Mercato', 'Locale & Centro Comm.', False, False),
        ('0.3 Definizione', 'Strategia di Lancio', False, False),
        ('0.4 Setup Tecnico', 'Social, Pixel, Tools', False, False),
    ],
    # Phase 0.5
    [
        ('0.5.1 Creazione 2 LP', 'A/B Test Angoli', False, False),
        ('0.5.2 Micro-Campagne', 'Paid per Test (€200-300)', False, False),
        ('0.5.3 Analisi Risultati', 'Scelta Angolo Vincente', False, False),
        ('0.5.4 Landing Definitiva', 'con Lista d\'Attesa', False, False),
    ],
    # Phase 1
    [
        ('1.1 Contenuti Teaser', 'sui Social', False, False),
        ('1.2 Campagne Paid', 'Geo-Targetizzate', False, False),
        ('1.3 Influencer Mktg', 'Locale (3-5 micro)', True, False),
        ('1.4 Materiali per', 'Centro Commerciale', True, False),
        ('1.5 Nurturing Lista', 'd\'Attesa (Email/WA)', False, False),
    ],
    # Phase 2
    [
        ('2.1 Evento Apertura', 'Pop-Up Store', False, False),
        ('2.2 Intensificazione', 'Campagne Paid', False, False),
        ('2.3 Copertura', 'Contenuti dal Vivo', True, False),
        ('2.4 Attivazione', 'Lista d\'Attesa', False, False),
        ('2.5 PR Locale', '(Opzionale)', True, True),
    ],
    # Phase 3
    [
        ('3.1 Gestione Social', 'Continuativa', False, False),
        ('3.2 Campagne Paid', 'Always-On', False, False),
        ('3.3 Reporting &', 'Ottimizzazione', False, False),
        ('3.4 Attivazioni', 'Periodiche (Opz.)', False, True),
    ],
]

for pi, steps in enumerate(all_steps):
    px = xs[pi]
    for si, (l1, l2, ext, opt) in enumerate(steps):
        sy = hy - (si+1)*(sh+gy)
        sx = px + (pw-sw)/2
        draw_box(sx, sy, sw, sh, l1, l2, ext, opt)
        # Sub arrows
        if si > 0:
            prev_y = hy - si*(sh+gy)
            ax.annotate('', xy=(sx+sw/2, sy+sh), xytext=(sx+sw/2, prev_y-0.1),
                        arrowprops=dict(arrowstyle='->', color='#D1D5DB', lw=1.5))

# --- LEGEND ---
ly = 2.5
lx = 6

ax.text(lx, ly+4.5, 'LEGENDA', fontsize=14, fontweight='bold', color=DARK)

# Internal
r1 = FancyBboxPatch((lx, ly+2.5), 5, 1.8, boxstyle="round,pad=0.15",
                     facecolor=INT_BG, edgecolor=INT_BORDER, linewidth=1.5)
ax.add_patch(r1)
ax.text(lx+6, ly+3.4, 'Attivita INTERNA  (gestita da HeyAI)', fontsize=11, color=DARK, va='center')

# External
r2 = FancyBboxPatch((lx, ly+0.2), 5, 1.8, boxstyle="round,pad=0.15",
                     facecolor=EXT_BG, edgecolor=EXT_BORDER, linewidth=2)
ax.add_patch(r2)
ax.text(lx+6, ly+1.1, 'Attivita ESTERNA  (risorsa esterna necessaria)', fontsize=11, color=DARK, va='center')

# Optional
r3 = FancyBboxPatch((lx+42, ly+2.5), 5, 1.8, boxstyle="round,pad=0.15",
                     facecolor='#F3F4F6', edgecolor='#9CA3AF', linewidth=1.5, linestyle='--')
ax.add_patch(r3)
ax.text(lx+48, ly+3.4, 'Attivita OPZIONALE', fontsize=11, color=DARK, va='center')

# Budget note
ax.text(lx+42, ly+1.1, 'Budget Media: pagato dal cliente (via NOT), non da HeyAI',
        fontsize=11, color=GRAY, va='center')

# --- COST BOXES ---
cy = -2.5
cost_data = [
    ('FASE 0', '35-45h interne', '~€1.500-2.000'),
    ('FASE 0.5', '12-18h + €200-300', 'media test'),
    ('FASE 1', 'Fee mensile +', '€1.500-4.500 esterni'),
    ('FASE 2', 'Fee mensile +', '€600-4.300 esterni'),
    ('FASE 3', 'Fee mensile +', '€800-1.500/m media'),
]
phase_colors = [PHASES[0]['bg'], PHASES[0.5]['bg'], PHASES[1]['bg'], PHASES[2]['bg'], PHASES[3]['bg']]

for i, (label, c1, c2) in enumerate(cost_data):
    cx = xs[i] + (pw-sw)/2
    r = FancyBboxPatch((cx, cy), sw, 3.5, boxstyle="round,pad=0.2",
                       facecolor=phase_colors[i], edgecolor='white', linewidth=1, alpha=0.12)
    ax.add_patch(r)
    ax.text(cx+sw/2, cy+2.6, label, ha='center', va='center',
            fontsize=10, fontweight='bold', color=phase_colors[i])
    ax.text(cx+sw/2, cy+1.4, c1, ha='center', va='center', fontsize=9, color=GRAY)
    ax.text(cx+sw/2, cy+0.5, c2, ha='center', va='center', fontsize=9, color=GRAY)

# --- TIMELINE ---
tly = 7.5
ax.plot([xs[0]+pw/2, xs[4]+pw/2], [tly, tly], color='#D1D5DB', linewidth=2.5, zorder=1)
wk_labels = ['Sett. -8/-6', 'Sett. -6/-4', 'Sett. -4/-1', 'Sett. 0/+2', 'Sett. +3 →']
for i, wl in enumerate(wk_labels):
    wx = xs[i] + pw/2
    ax.plot(wx, tly, 'o', color=GRAY, markersize=9, zorder=2)
    ax.text(wx, tly-1.2, wl, ha='center', va='center', fontsize=10, color=GRAY, fontweight='medium')

ax.text(xs[0]-1, tly, 'TIMELINE', ha='right', va='center', fontsize=10,
        fontweight='bold', color=DARK)

plt.tight_layout()
plt.savefig('/home/claude/funnel_lancio_brand_v2.png', dpi=150, bbox_inches='tight',
            facecolor='#FAFBFC', edgecolor='none', pad_inches=0.5)
plt.close()
print("Diagram v2 created successfully!")