// ============================================================
// PFL — Shared UI functions (nav, ticker, footer, helpers)
// Included on every page
// ============================================================

// ── BUILD NAV ───────────────────────────────────────────────
function buildNav(activePage) {
  const pages = [
    { href: "index.html",    label: "Home"     },
    { href: "teams.html",    label: "Teams"    },
    { href: "standings.html",label: "Standings"},
    { href: "schedule.html", label: "Schedule" },
    { href: "news.html",     label: "News"     },
    { href: "history.html",  label: "History"  },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.label.toLowerCase() === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav').innerHTML = `
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">PFL<span>.</span></a>
        <nav class="nav-links">${links}</nav>
        <div class="nav-badge">Season ${PFL.currentSeason}</div>
      </div>
    </div>`;
}

// ── BUILD TICKER ─────────────────────────────────────────────
function buildTicker() {
  const games = PFL.schedule.filter(g => g.status === 'final' || g.status === 'live');

  let items = '';
  if (games.length === 0) {
    items = `<div class="ticker-item">PFL Season ${PFL.currentSeason} — Stay tuned for Week ${PFL.currentWeek} scores</div>`.repeat(4);
  } else {
    const raw = games.map(g => {
      const home = PFL.getTeam(g.home);
      const away = PFL.getTeam(g.away);
      const statusClass = g.status === 'live' ? 'ticker-live' : 'ticker-final';
      const statusLabel = g.status === 'live' ? `● LIVE` : 'FINAL';
      return `<div class="ticker-item"><strong>${away.id}</strong> ${g.awayScore} · <strong>${home.id}</strong> ${g.homeScore} · <span class="${statusClass}">${statusLabel}</span></div>`;
    }).join('');
    items = raw + raw; // duplicate for seamless loop
  }

  document.getElementById('ticker').innerHTML = `
    <div class="ticker-label">Scores</div>
    <div class="ticker-track">${items}</div>`;
}

// ── BUILD FOOTER ─────────────────────────────────────────────
function buildFooter() {
  document.getElementById('footer').innerHTML = `
    <div class="container">
      <div class="footer-logo">PFL</div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="teams.html">Teams</a>
        <a href="standings.html">Standings</a>
        <a href="schedule.html">Schedule</a>
        <a href="news.html">News</a>
        <a href="history.html">History</a>
      </div>
      <div class="footer-copy">Professional Football League · Fan-Made Franchise · Season ${PFL.currentSeason}</div>
    </div>`;
}

// ── TEAM LOGO/CIRCLE HELPER ──────────────────────────────────
// Returns an img tag if logo file likely exists, otherwise a colored circle
function teamCircle(team, size = 44) {
  const fontSize = Math.round(size * 0.26);
  return `
    <div class="team-circle" style="width:${size}px;height:${size}px;background:${team.primary};color:${team.secondary};font-size:${fontSize}px;">
      <img src="${team.logo}" alt="${team.name} logo"
           onerror="this.parentElement.innerHTML='<span>${team.id}</span>'"
           style="width:100%;height:100%;object-fit:contain;"/>
    </div>`;
}

// ── STANDINGS HELPERS ────────────────────────────────────────
function renderStandingsTable(teams) {
  const rows = teams.map(t => `
    <tr>
      <td>
        <div class="team-cell">
          <div class="team-dot" style="background:${t.primary}"></div>
          <a href="teams/${t.id.toLowerCase()}.html">${t.city} ${t.name}</a>
        </div>
      </td>
      <td>${t.w}</td>
      <td>${t.l}</td>
      <td>${PFL.pct(t)}</td>
      <td>${t.pf}</td>
      <td>${t.pa}</td>
    </tr>`).join('');

  return `
    <table class="standings-table">
      <thead>
        <tr><th>Team</th><th>W</th><th>L</th><th>PCT</th><th>PF</th><th>PA</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

// ── SCHEDULE HELPERS ─────────────────────────────────────────
function renderGameRow(game) {
  const home = PFL.getTeam(game.home);
  const away = PFL.getTeam(game.away);
  let scoreHTML = '';
  let statusHTML = '';

  if (game.status === 'final') {
    scoreHTML = `${game.awayScore}–${game.homeScore}`;
    statusHTML = `<span class="status-final">Final</span>`;
  } else if (game.status === 'live') {
    scoreHTML = `${game.awayScore}–${game.homeScore}`;
    statusHTML = `<span class="status-live">● Live</span>`;
  } else {
    scoreHTML = `vs`;
    statusHTML = `${game.time || 'TBD'}`;
  }

  return `
    <div class="game-row">
      <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
        ${teamCircle(away, 32)}
        ${teamCircle(home, 32)}
      </div>
      <div class="game-teams-col">
        <div class="game-matchup">${away.city} ${away.name} @ ${home.city} ${home.name}</div>
        <div class="game-sub">${home.conf} ${home.div} · Week ${game.week} · ${game.date || ''}</div>
      </div>
      <div class="game-score-col">
        <div class="game-score">${scoreHTML}</div>
        <div class="game-status">${statusHTML}</div>
      </div>
    </div>`;
}

// ── INIT ─────────────────────────────────────────────────────
// Call this on every page with the active page name
function pflInit(activePage) {
  buildNav(activePage);
  buildTicker();
  buildFooter();
}
