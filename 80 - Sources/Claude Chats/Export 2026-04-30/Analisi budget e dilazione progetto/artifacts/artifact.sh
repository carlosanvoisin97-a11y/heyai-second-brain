cat > /home/claude/gantt_v3.svg << 'SVGEOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 820" width="1800" height="820">
  <defs>
    <linearGradient id="blueBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2E75B6"/><stop offset="100%" stop-color="#4A9AD9"/>
    </linearGradient>
    <linearGradient id="navyBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E2A3A"/><stop offset="100%" stop-color="#3A5570"/>
    </linearGradient>
    <linearGradient id="tealBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1B7A6D"/><stop offset="100%" stop-color="#2BA08F"/>
    </linearGradient>
    <linearGradient id="inProgress" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2BA08F"/><stop offset="100%" stop-color="#2E75B6"/>
    </linearGradient>
    <filter id="shadow" x="-2%" y="-4%" width="104%" height="110%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#1E2A3A" flood-opacity="0.1"/>
    </filter>
  </defs>

  <rect width="1800" height="820" fill="white"/>
  <text x="900" y="40" text-anchor="middle" font-family="Arial" font-size="24" font-weight="bold" fill="#1E2A3A">Roadmap di Sviluppo — 2026</text>
  <text x="900" y="64" text-anchor="middle" font-family="Arial" font-size="13" fill="#666666">Venue Finder e Minutes già in corso da metà marzo. Le altre soluzioni partono da metà aprile, con l'approvazione formale. Pausa: agosto.</text>

  <!-- 10 month columns: MAR-DIC, x:320 to 1750 = 1430/10 = 143px per month -->
  <rect x="320" y="90" width="1430" height="32" rx="6" fill="#F5F6F7"/>
  <text x="391" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">MAR</text>
  <text x="534" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">APR</text>
  <text x="677" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">MAG</text>
  <text x="820" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">GIU</text>
  <text x="963" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">LUG</text>
  <text x="1106" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#888888">AGO</text>
  <text x="1249" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">SET</text>
  <text x="1392" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">OTT</text>
  <text x="1535" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">NOV</text>
  <text x="1678" y="112" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">DIC</text>

  <line x1="463" y1="122" x2="463" y2="700" stroke="#E8E8E8" stroke-width="1"/>
  <line x1="606" y1="122" x2="606" y2="700" stroke="#E8E8E8" stroke-width="1"/>
  <line x1="749" y1="122" x2="749" y2="700" stroke="#E8E8E8" stroke-width="1"/>
  <line x1="892" y1="122" x2="892" y2="700" stroke="#E8E8E8" stroke-width="1"/>
  <line x1="1035" y1="122" x2="1035" y2="700" stroke="#E8E8E8" stroke-width="1"/>
  <line x1="1178" y1="122" x2="1178" y2="700" stroke="#E8E8E8" stroke-width="1"/>
  <line x1="1321" y1="122" x2="1321" y2="700" stroke="#E8E8E8" stroke-width="1"/>
  <line x1="1464" y1="122" x2="1464" y2="700" stroke="#E8E8E8" stroke-width="1"/>
  <line x1="1607" y1="122" x2="1607" y2="700" stroke="#E8E8E8" stroke-width="1"/>

  <!-- August pause -->
  <rect x="1035" y="122" width="143" height="578" fill="#F8F8F8" opacity="0.7"/>
  <text x="1106" y="142" text-anchor="middle" font-family="Arial" font-size="10" fill="#BBBBBB" letter-spacing="1">PAUSA</text>

  <!-- TODAY marker (13 aprile = ~x=510) -->
  <line x1="510" y1="122" x2="510" y2="700" stroke="#208591" stroke-width="2" stroke-dasharray="4,3" opacity="0.8"/>
  <rect x="463" y="98" width="95" height="20" rx="4" fill="#208591"/>
  <text x="510" y="112" text-anchor="middle" font-family="Arial" font-size="10" font-weight="bold" fill="white">OGGI · 13 APR</text>

  <!-- QUICK WINS -->
  <rect x="30" y="150" width="10" height="170" rx="5" fill="#2BA08F"/>
  <text x="55" y="168" font-family="Arial" font-size="11" font-weight="bold" fill="#2BA08F" letter-spacing="1">QUICK WINS — IN CORSO</text>

  <!-- VF: mid-Mar to end-Apr -->
  <text x="100" y="200" font-family="Arial" font-size="13" font-weight="bold" fill="#1E2A3A">Venue Finder Evolution</text>
  <text x="100" y="215" font-family="Arial" font-size="10" fill="#2BA08F" font-weight="bold">● In corso — quasi in rilascio</text>
  <rect x="391" y="192" width="215" height="22" rx="4" fill="url(#inProgress)" filter="url(#shadow)"/>
  <circle cx="391" cy="203" r="5" fill="#2BA08F"/>
  <circle cx="606" cy="203" r="5" fill="#D5E8F0"/>
  <text x="606" y="186" font-family="Arial" font-size="9" fill="#1B7A6D" font-weight="bold">RILASCIO</text>

  <!-- Minutes -->
  <text x="100" y="250" font-family="Arial" font-size="13" font-weight="bold" fill="#1E2A3A">Minutes Call Esterne</text>
  <text x="100" y="265" font-family="Arial" font-size="10" fill="#2BA08F" font-weight="bold">● In corso dal 15 marzo</text>
  <rect x="391" y="242" width="215" height="22" rx="4" fill="url(#inProgress)" filter="url(#shadow)"/>
  <circle cx="391" cy="253" r="5" fill="#2BA08F"/>
  <circle cx="606" cy="253" r="5" fill="#D5E8F0"/>

  <!-- Crowd: avvio mid-Apr → consegna fine maggio (NEW: shorter, was mid-June) -->
  <text x="100" y="300" font-family="Arial" font-size="13" font-weight="bold" fill="#1E2A3A">Crowd Integrazione Incassi</text>
  <text x="100" y="315" font-family="Arial" font-size="10" fill="#666666">Consegna fine maggio</text>
  <rect x="510" y="292" width="240" height="22" rx="4" fill="url(#blueBar)" filter="url(#shadow)"/>
  <circle cx="510" cy="303" r="5" fill="white" stroke="#2E75B6" stroke-width="2"/>
  <circle cx="749" cy="303" r="5" fill="#2E75B6"/>

  <!-- STRATEGIC -->
  <rect x="30" y="360" width="10" height="335" rx="5" fill="#1E2A3A"/>
  <text x="55" y="378" font-family="Arial" font-size="11" font-weight="bold" fill="#1E2A3A" letter-spacing="1">STRATEGICHE — IN ATTESA DI APPROVAZIONE</text>

  <!-- LeadMe: mid-Apr to mid-Jun -->
  <text x="100" y="410" font-family="Arial" font-size="13" font-weight="bold" fill="#1E2A3A">LeadMe Evolution</text>
  <text x="100" y="425" font-family="Arial" font-size="10" fill="#666666">Primo rilascio entro metà maggio (richiesta Laura)</text>
  <rect x="510" y="402" width="368" height="22" rx="4" fill="url(#navyBar)" filter="url(#shadow)"/>
  <circle cx="510" cy="413" r="5" fill="white" stroke="#1E2A3A" stroke-width="2"/>
  <circle cx="678" cy="413" r="5" fill="#D5E8F0"/>
  <text x="678" y="396" font-family="Arial" font-size="9" fill="#1E2A3A" font-weight="bold">MVP</text>
  <circle cx="878" cy="413" r="5" fill="#1E2A3A"/>
  <text x="878" y="396" font-family="Arial" font-size="9" fill="#1E2A3A" font-weight="bold">FINAL</text>

  <!-- Link: start mid-May, MVP+final luglio -->
  <text x="100" y="460" font-family="Arial" font-size="13" font-weight="bold" fill="#1E2A3A">Link — Sistema Gestionale</text>
  <text x="100" y="475" font-family="Arial" font-size="10" fill="#666666">Sostituzione Progress + integrazione BC</text>
  <rect x="606" y="452" width="429" height="22" rx="4" fill="url(#navyBar)" filter="url(#shadow)"/>
  <circle cx="606" cy="463" r="5" fill="white" stroke="#1E2A3A" stroke-width="2"/>
  <circle cx="892" cy="463" r="5" fill="#D5E8F0"/>
  <text x="892" y="446" font-family="Arial" font-size="9" fill="#1E2A3A" font-weight="bold">MVP</text>
  <circle cx="1035" cy="463" r="5" fill="#1E2A3A"/>
  <text x="1035" y="446" font-family="Arial" font-size="9" fill="#1E2A3A" font-weight="bold">FINAL</text>

  <!-- Flow: dev mid-July → MVP+final nov -->
  <text x="100" y="510" font-family="Arial" font-size="13" font-weight="bold" fill="#1E2A3A">Flow — Coordinamento</text>
  <text x="100" y="525" font-family="Arial" font-size="10" fill="#666666">Sviluppo da luglio · Acconto fatturato a settembre</text>
  <rect x="963" y="502" width="525" height="22" rx="4" fill="url(#navyBar)" filter="url(#shadow)"/>
  <circle cx="963" cy="513" r="5" fill="white" stroke="#1E2A3A" stroke-width="2"/>
  <circle cx="1321" cy="513" r="5" fill="#D5E8F0"/>
  <text x="1321" y="496" font-family="Arial" font-size="9" fill="#1E2A3A" font-weight="bold">MVP</text>
  <circle cx="1488" cy="513" r="5" fill="#1E2A3A"/>
  <text x="1488" y="496" font-family="Arial" font-size="9" fill="#1E2A3A" font-weight="bold">FINAL</text>
  <rect x="1035" y="502" width="143" height="22" fill="#F8F8F8" opacity="0.5"/>

  <!-- OnSite: dev mid-July → MVP+final ottobre -->
  <text x="100" y="560" font-family="Arial" font-size="13" font-weight="bold" fill="#1E2A3A">OnSite — App Partecipanti</text>
  <text x="100" y="575" font-family="Arial" font-size="10" fill="#666666">Sviluppo da luglio · Acconto fatturato a ottobre</text>
  <rect x="963" y="552" width="430" height="22" rx="4" fill="url(#tealBar)" filter="url(#shadow)"/>
  <circle cx="963" cy="563" r="5" fill="white" stroke="#1B7A6D" stroke-width="2"/>
  <circle cx="1250" cy="563" r="5" fill="#D5E8F0"/>
  <text x="1250" y="546" font-family="Arial" font-size="9" fill="#1B7A6D" font-weight="bold">MVP</text>
  <circle cx="1393" cy="563" r="5" fill="#1B7A6D"/>
  <rect x="1035" y="552" width="143" height="22" fill="#F8F8F8" opacity="0.5"/>

  <!-- Sally: mid-Apr to dec (cross-cutting) -->
  <text x="100" y="610" font-family="Arial" font-size="13" font-weight="bold" fill="#1E2A3A">Sally — Agente 360°</text>
  <text x="100" y="625" font-family="Arial" font-size="10" fill="#666666">Trasversale: cresce con ogni rilascio</text>
  <rect x="510" y="602" width="1160" height="22" rx="4" fill="url(#tealBar)" opacity="0.75" filter="url(#shadow)"/>
  <circle cx="510" cy="613" r="5" fill="white" stroke="#1B7A6D" stroke-width="2"/>
  <circle cx="678" cy="613" r="4" fill="#1B7A6D" opacity="0.5"/>
  <circle cx="892" cy="613" r="4" fill="#1B7A6D" opacity="0.5"/>
  <circle cx="1178" cy="613" r="4" fill="#1B7A6D" opacity="0.5"/>
  <circle cx="1393" cy="613" r="5" fill="#D5E8F0"/>
  <text x="1393" y="596" font-family="Arial" font-size="9" fill="#1B7A6D" font-weight="bold">MVP</text>
  <circle cx="1670" cy="613" r="5" fill="#1B7A6D"/>
  <text x="1670" y="596" font-family="Arial" font-size="9" fill="#1B7A6D" font-weight="bold">FINAL</text>
  <rect x="1035" y="602" width="143" height="22" fill="#F8F8F8" opacity="0.5"/>

  <!-- LEGEND -->
  <rect x="30" y="720" width="1725" height="50" rx="8" fill="#F8F9FA" stroke="#E8E8E8" stroke-width="1"/>
  <circle cx="60" cy="745" r="5" fill="white" stroke="#1E2A3A" stroke-width="2"/>
  <text x="75" y="750" font-family="Arial" font-size="11" fill="#444444">Avvio</text>
  <circle cx="140" cy="745" r="5" fill="#D5E8F0"/>
  <text x="155" y="750" font-family="Arial" font-size="11" fill="#444444">MVP</text>
  <circle cx="210" cy="745" r="5" fill="#1E2A3A"/>
  <text x="225" y="750" font-family="Arial" font-size="11" fill="#444444">Consegna finale</text>
  <rect x="370" y="738" width="40" height="14" rx="3" fill="url(#inProgress)"/>
  <text x="420" y="750" font-family="Arial" font-size="11" fill="#444444">In corso</text>
  <rect x="510" y="738" width="40" height="14" rx="3" fill="url(#blueBar)"/>
  <text x="560" y="750" font-family="Arial" font-size="11" fill="#444444">Quick Win</text>
  <rect x="660" y="738" width="40" height="14" rx="3" fill="url(#navyBar)"/>
  <text x="710" y="750" font-family="Arial" font-size="11" fill="#444444">Strategica</text>
  <rect x="810" y="738" width="40" height="14" rx="3" fill="url(#tealBar)"/>
  <text x="860" y="750" font-family="Arial" font-size="11" fill="#444444">Trasversale</text>
  <text x="1050" y="750" font-family="Arial" font-size="12" font-weight="bold" fill="#1E2A3A">2 soluzioni già in rilascio</text>
  <text x="1250" y="750" font-family="Arial" font-size="12" fill="#666666">| Ecosistema completo entro dicembre 2026</text>

  <text x="900" y="795" text-anchor="middle" font-family="Arial" font-size="10" fill="#AAAAAA">Timeline indicativa. Rilasci incrementali con validazione utente tra le fasi. Ogni tranche di pagamento è legata a un rilascio.</text>
</svg>
SVGEOF

pip install cairosvg -q --break-system-packages 2>&1 | tail -1
python3 -c "import cairosvg; cairosvg.svg2png(url='/home/claude/gantt_v3.svg', write_to='/home/claude/gantt_v3.png', output_width=5400, output_height=2460); print('OK')"