(function () {
  // Inject sidenav collapse styles
  const style = document.createElement('style');
  style.textContent = `
    .sidenav { transition: width .2s ease; overflow: hidden; }
    .sidenav.collapsed { width: 48px !important; }
    .sidenav.collapsed .sidenav-section,
    .sidenav.collapsed a span.nav-label,
    .sidenav.collapsed .sidenav-logo span.logo-text { display: none; }
    .sidenav.collapsed .sidenav-logo { padding: 16px 0; display: flex; justify-content: center; }
    .sidenav.collapsed a { padding: 9px 0; justify-content: center; gap: 0; }
    .sidenav.collapsed .sidenav-icon { margin: 0; }
    .sidenav-toggle { position: fixed; top: 50%; left: 180px; transform: translateY(-50%); z-index: 200;
      width: 16px; height: 32px; background: #1a1a18; border: 1px solid rgba(255,255,255,0.1);
      border-left: none; border-radius: 0 6px 6px 0; cursor: pointer; display: flex; align-items: center;
      justify-content: center; transition: left .2s ease; color: rgba(255,255,255,0.3); }
    .sidenav-toggle:hover { color: rgba(255,255,255,0.7); }
    .sidenav-toggle svg { transition: transform .2s ease; }
    .sidenav.collapsed ~ .sidenav-toggle,
    body.nav-collapsed .sidenav-toggle { left: 48px; }
    body.nav-collapsed .sidenav-toggle svg { transform: scaleX(-1); }
    body.nav-collapsed nav.sidenav { width: 48px !important; }
    body.nav-collapsed .sidenav-section { display: none; }
    body.nav-collapsed .sidenav-logo { padding: 16px 0; display: flex; justify-content: center; }
    body.nav-collapsed .sidenav-logo .logo-full { display: none; }
    body.nav-collapsed .sidenav a { padding: 9px 0; justify-content: center; gap: 0; }
    body:not(.nav-collapsed) .sidenav-logo .logo-icon { display: none; }
    body.nav-collapsed .sidenav-logo .logo-icon { display: block; font-weight: 700; font-size: 14px; color: #fff; }
    body.nav-collapsed { margin-left: 48px !important; }
    @media(max-width:768px){ .sidenav-toggle { display: none; } }
  `;
  document.head.appendChild(style);

  const NAV_HTML = `
<div class="sidenav-logo"><span class="logo-full">mmmmn<span style="color:rgba(255,255,255,0.25);font-weight:400">.net</span></span><span class="logo-icon">m</span></div>
<div class="sidenav-section">Income</div>
<a href="https://mmmmn.net/gg" data-path="/gg"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="8" width="3" height="7" rx=".5"/><rect x="6.5" y="5" width="3" height="10" rx=".5"/><rect x="12" y="2" width="3" height="13" rx=".5"/></svg>Budapest</a>
<a href="https://mmmmn.net/gg/report" data-path="/gg/report" style="padding-left:32px;font-size:11px;opacity:.7"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor" style="width:12px;height:12px"><path d="M3 2a1 1 0 011-1h6l3 3v10a1 1 0 01-1 1H4a1 1 0 01-1-1V2z" opacity=".3"/><path d="M9 1v3h3M5 7h6M5 9.5h4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>BP Report</a>
<a href="https://mmmmn.net/dubai" data-path="/dubai"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><rect x="6" y="1" width="4" height="14" rx=".5"/><rect x="3" y="5" width="3" height="10" rx=".5"/><rect x="10" y="5" width="3" height="10" rx=".5"/></svg>Dubai</a>
<div class="sidenav-section">Plantio</div>
<a href="https://mmmmn.net/water" data-path="/water"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2C8 2 3 7 3 10.5C3 13.1 5.2 15 8 15s5-1.9 5-4.5C13 7 8 2 8 2z"/></svg>Water</a>
<a href="https://mmmmn.net/electricity" data-path="/electricity"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><polygon points="10,1 4.5,9 8,9 6,15 11.5,7 8,7"/></svg>Electricity</a>
<a href="https://mmmmn.net/invoices" data-path="/invoices"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><path d="M3 2a1 1 0 011-1h6l3 3v10a1 1 0 01-1 1H4a1 1 0 01-1-1V2z" opacity=".3"/><path d="M9 1v3h3M5 7h6M5 9.5h6M5 12h4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>Invoices</a>
<a href="https://mmmmn.net/summary" data-path="/summary"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="3" width="14" height="1.5" rx=".5" opacity=".4"/><rect x="1" y="7" width="14" height="1.5" rx=".5" opacity=".4"/><rect x="1" y="11" width="9" height="1.5" rx=".5" opacity=".4"/><rect x="11.5" y="10" width="3.5" height="3.5" rx=".5"/></svg>Summary</a>
<div class="sidenav-section">Personal</div>
<a href="https://mmmmn.net/pl" data-path="/pl"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.2"/><path d="M8 4v1.5M8 10.5V12M10 6.5C10 5.7 9.1 5 8 5s-2 .7-2 1.5c0 .9 1 1.3 2 1.5s2 .7 2 1.5c0 .8-.9 1.5-2 1.5s-2-.7-2-1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"/></svg>P&L</a>
<a href="https://mmmmn.net/spending" data-path="/spending"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="3" width="14" height="2.5" rx=".5"/><rect x="1" y="7" width="4" height="2" rx=".3" opacity=".6"/><rect x="6" y="7" width="4" height="2" rx=".3" opacity=".6"/><rect x="11" y="7" width="4" height="2" rx=".3" opacity=".6"/><rect x="1" y="11" width="4" height="2" rx=".3" opacity=".6"/><rect x="6" y="11" width="4" height="2" rx=".3" opacity=".6"/><rect x="11" y="11" width="4" height="2" rx=".3" opacity=".6"/></svg>Spending</a>`;

  const nav = document.querySelector('nav.sidenav');
  if (nav) nav.innerHTML = NAV_HTML;

  // Toggle button
  const toggle = document.createElement('div');
  toggle.className = 'sidenav-toggle';
  toggle.innerHTML = `<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1L1 6L6 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  document.body.appendChild(toggle);

  // Collapse state — also patch body margin dynamically
  const COLLAPSED_KEY = 'sidenav_collapsed';
  function applyCollapse(collapsed) {
    document.body.classList.toggle('nav-collapsed', collapsed);
    // find computed margin-left of body and override for collapsed
    const bodyStyle = window.getComputedStyle(document.body);
    const ml = parseInt(bodyStyle.marginLeft, 10);
    if (collapsed) {
      document.body.style.marginLeft = '48px';
    } else {
      document.body.style.marginLeft = '';
    }
  }
  applyCollapse(localStorage.getItem(COLLAPSED_KEY) === '1');
  toggle.addEventListener('click', function () {
    const collapsed = !document.body.classList.contains('nav-collapsed');
    applyCollapse(collapsed);
    localStorage.setItem(COLLAPSED_KEY, collapsed ? '1' : '0');
  });

  // Active state
  const p = window.location.pathname, h = window.location.hostname;
  document.querySelectorAll('.sidenav a').forEach(function (a) {
    const dp = a.getAttribute('data-path');
    if (
      p.startsWith(dp) ||
      (h.includes('vizora') && dp === '/water') ||
      (h.includes('electricity') && dp === '/electricity') ||
      (h.includes('guestguru') && dp === '/gg') ||
      (h.includes('invoices') && dp === '/invoices') ||
      (h.includes('cashflow') && dp === '/pl') ||
      (h.includes('spending') && dp === '/spending') ||
      (h.includes('dubai') && dp === '/dubai')
    ) a.classList.add('active');
  });
})();
