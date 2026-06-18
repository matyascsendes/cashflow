(function () {
  const NAV_HTML = `
<div class="sidenav-logo">mmmmn<span>.net</span></div>
<div class="sidenav-section">Income</div>
<a href="https://mmmmn.net/gg" data-path="/gg"><svg class="sidenav-icon" viewBox="0 0 16 16" fill="currentColor"><rect x="1" y="8" width="3" height="7" rx=".5"/><rect x="6.5" y="5" width="3" height="10" rx=".5"/><rect x="12" y="2" width="3" height="13" rx=".5"/></svg>Budapest</a>
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
