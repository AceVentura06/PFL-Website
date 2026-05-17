// ============================================================
// PFL DATA FILE — Single source of truth for all site data
// Update this file each week to keep the site current
// ============================================================

const PFL = {

  // ── LEAGUE META ──────────────────────────────────────────
  currentWeek: 1,
  currentSeason: 2025,

  // ── TEAMS ────────────────────────────────────────────────
  // primary: main team color
  // secondary: accent color
  // logo: path relative to site root (e.g. "assets/logos/brk-bulldogs.png")
  teams: [

    // AFC NORTH
    { id: "CLB", city: "Columbus",     name: "Oaks",        conf: "AFC", div: "North", primary: "#4a7a3a", secondary: "#c8a830", logo: "assets/logos/clb-oaks.png",        w:0, l:0, pf:0, pa:0 },
    { id: "PIT", city: "Pittsburgh",   name: "Rhinos",      conf: "AFC", div: "North", primary: "#1a1a1a", secondary: "#c8a830", logo: "assets/logos/pit-rhinos.png",      w:0, l:0, pf:0, pa:0 },
    { id: "TOR", city: "Toronto",      name: "Mallards",    conf: "AFC", div: "North", primary: "#1a5c2a", secondary: "#7ab8e8", logo: "assets/logos/tor-mallards.png",    w:0, l:0, pf:0, pa:0 },
    { id: "MTL", city: "Montreal",     name: "Oxen",        conf: "AFC", div: "North", primary: "#8b1a1a", secondary: "#c8c8c8", logo: "assets/logos/mtl-oxen.png",        w:0, l:0, pf:0, pa:0 },

    // AFC SOUTH
    { id: "ORL", city: "Orlando",      name: "Vipers",      conf: "AFC", div: "South", primary: "#f07820", secondary: "#d0d4df", logo: "assets/logos/orl-vipers.png",      w:0, l:0, pf:0, pa:0 },
    { id: "VIR", city: "Virginia",     name: "Grizzlies",   conf: "AFC", div: "South", primary: "#2a5a2a", secondary: "#c8a830", logo: "assets/logos/vir-grizzlies.png",   w:0, l:0, pf:0, pa:0 },
    { id: "ALA", city: "Alabama",      name: "Vets",        conf: "AFC", div: "South", primary: "#8b1a1a", secondary: "#c8c8c8", logo: "assets/logos/ala-vets.png",        w:0, l:0, pf:0, pa:0 },
    { id: "AUS", city: "Austin",       name: "Desperados",  conf: "AFC", div: "South", primary: "#7a3a1a", secondary: "#c8a830", logo: "assets/logos/aus-desperados.png",  w:0, l:0, pf:0, pa:0 },

    // AFC EAST
    { id: "LIS", city: "Long Island",  name: "Slickers",    conf: "AFC", div: "East",  primary: "#1a3a6e", secondary: "#c8c8c8", logo: "assets/logos/lis-slickers.png",    w:0, l:0, pf:0, pa:0 },
    { id: "HAR", city: "Hartford",     name: "Blues",       conf: "AFC", div: "East",  primary: "#1a4a8b", secondary: "#7ab8e8", logo: "assets/logos/har-blues.png",       w:0, l:0, pf:0, pa:0 },
    { id: "BAL", city: "Baltimore",    name: "Crabbers",    conf: "AFC", div: "East",  primary: "#5a1a8b", secondary: "#c8a830", logo: "assets/logos/bal-crabbers.png",    w:0, l:0, pf:0, pa:0 },
    { id: "WAS", city: "Washington",   name: "Rebels",      conf: "AFC", div: "East",  primary: "#8b1a1a", secondary: "#1a3a6e", logo: "assets/logos/was-rebels.png",      w:0, l:0, pf:0, pa:0 },

    // AFC WEST
    { id: "SLT", city: "Salt Lake",    name: "Elk",         conf: "AFC", div: "West",  primary: "#1a5c2a", secondary: "#c8c8c8", logo: "assets/logos/slt-elk.png",         w:0, l:0, pf:0, pa:0 },
    { id: "OMA", city: "Omaha",        name: "Outlaws",     conf: "AFC", div: "West",  primary: "#7a3a1a", secondary: "#c8c8c8", logo: "assets/logos/oma-outlaws.png",     w:0, l:0, pf:0, pa:0 },
    { id: "POR", city: "Portland",     name: "Pioneers",    conf: "AFC", div: "West",  primary: "#1a3a6e", secondary: "#c8a830", logo: "assets/logos/por-pioneers.png",    w:0, l:0, pf:0, pa:0 },
    { id: "SD",  city: "San Diego",    name: "Pumas",       conf: "AFC", div: "West",  primary: "#1a1a1a", secondary: "#9a7820", logo: "assets/logos/sd-pumas.png",        w:0, l:0, pf:0, pa:0 },

    // NFC NORTH
    { id: "CHI", city: "Chicago",      name: "Twisters",    conf: "NFC", div: "North", primary: "#1a3a6e", secondary: "#c8a830", logo: "assets/logos/chi-twisters.png",    w:0, l:0, pf:0, pa:0 },
    { id: "SF",  city: "Sioux Falls",  name: "Trappers",    conf: "NFC", div: "North", primary: "#4a2a1a", secondary: "#c8a830", logo: "assets/logos/sf-trappers.png",     w:0, l:0, pf:0, pa:0 },
    { id: "TWN", city: "Twin City",    name: "Wolves",      conf: "NFC", div: "North", primary: "#1a1a6e", secondary: "#c8c8c8", logo: "assets/logos/twn-wolves.png",      w:0, l:0, pf:0, pa:0 },
    { id: "DET", city: "Detroit",      name: "Hotrod",      conf: "NFC", div: "North", primary: "#8b1a1a", secondary: "#1a1a1a", logo: "assets/logos/det-hotrod.png",      w:0, l:0, pf:0, pa:0 },

    // NFC SOUTH
    { id: "CAR", city: "Carolina",     name: "Flyers",      conf: "NFC", div: "South", primary: "#1a6e6e", secondary: "#c8c8c8", logo: "assets/logos/car-flyers.png",      w:0, l:0, pf:0, pa:0 },
    { id: "NSH", city: "Nashville",    name: "Stars",       conf: "NFC", div: "South", primary: "#c8a830", secondary: "#1a1a1a", logo: "assets/logos/nsh-stars.png",       w:0, l:0, pf:0, pa:0 },
    { id: "LOU", city: "Louisville",   name: "Stallions",   conf: "NFC", div: "South", primary: "#8b1a1a", secondary: "#c8c8c8", logo: "assets/logos/lou-stallions.png",   w:0, l:0, pf:0, pa:0 },
    { id: "SAT", city: "San Antonio",  name: "Defenders",   conf: "NFC", div: "South", primary: "#1a1a6e", secondary: "#c8c8c8", logo: "assets/logos/sat-defenders.png",   w:0, l:0, pf:0, pa:0 },

    // NFC EAST
    { id: "BRK", city: "Brooklyn",     name: "Bulldogs",    conf: "NFC", div: "East",  primary: "#1e2a4a", secondary: "#c0c4cc", logo: "assets/logos/brk-bulldogs.png",    w:0, l:0, pf:0, pa:0 },
    { id: "BOS", city: "Boston",       name: "Olympians",   conf: "NFC", div: "East",  primary: "#2255cc", secondary: "#f5c518", logo: "assets/logos/bos-olympians.png",   w:0, l:0, pf:0, pa:0 },
    { id: "PHI", city: "Philadelphia", name: "Jerries",     conf: "NFC", div: "East",  primary: "#8b1a1a", secondary: "#c8962a", logo: "assets/logos/phi-jerries.png",     w:0, l:0, pf:0, pa:0 },
    { id: "STL", city: "St. Louis",    name: "Steamers",    conf: "NFC", div: "East",  primary: "#1a3a6e", secondary: "#c8a830", logo: "assets/logos/stl-steamers.png",    w:0, l:0, pf:0, pa:0 },

    // NFC WEST
    { id: "PHX", city: "Phoenix",      name: "Coyotes",     conf: "NFC", div: "West",  primary: "#8b3a1a", secondary: "#c8c8c8", logo: "assets/logos/phx-coyotes.png",     w:0, l:0, pf:0, pa:0 },
    { id: "OKC", city: "Oklahoma City",name: "Bulls",       conf: "NFC", div: "West",  primary: "#1a5c2a", secondary: "#c8a830", logo: "assets/logos/okc-bulls.png",       w:0, l:0, pf:0, pa:0 },
    { id: "ALB", city: "Albuquerque",  name: "Aliens",      conf: "NFC", div: "West",  primary: "#2a8b1a", secondary: "#c8c8c8", logo: "assets/logos/alb-aliens.png",      w:0, l:0, pf:0, pa:0 },
    { id: "SJ",  city: "San Jose",     name: "Dynamos",     conf: "NFC", div: "West",  primary: "#4dd9c0", secondary: "#f5c518", logo: "assets/logos/sj-dynamos.png",      w:0, l:0, pf:0, pa:0 },
  ],

  // ── SCHEDULE ─────────────────────────────────────────────
  // status: "upcoming" | "final" | "live"
  // week: week number
  schedule: [
    // WEEK 1 — add games here
    // { week:1, home:"BRK", away:"BOS", homeScore:null, awayScore:null, status:"upcoming", date:"2025-09-07", time:"1:00 PM" },
  ],

  // ── NEWS ─────────────────────────────────────────────────
  // Each post links to a file in the /news/ folder
  news: [
    // { id:"001", title:"Welcome to the PFL!", tag:"Announcement", date:"2025-08-01", excerpt:"The Professional Football League is officially open.", file:"news/001-welcome.html" },
  ],

  // ── HISTORY ──────────────────────────────────────────────
  seasons: [
    // { year:2024, champion:"Brooklyn Bulldogs", mvp:"TBD", superbowlScore:"31-28" },
  ],

  // ── HELPERS ──────────────────────────────────────────────
  getTeam(id) {
    return this.teams.find(t => t.id === id);
  },
  getConf(conf) {
    return this.teams.filter(t => t.conf === conf);
  },
  getDiv(conf, div) {
    return this.teams.filter(t => t.conf === conf && t.div === div);
  },
  getSortedDiv(conf, div) {
    return this.getDiv(conf, div).sort((a,b) => {
      const pctA = a.w / (a.w + a.l) || 0;
      const pctB = b.w / (b.w + b.l) || 0;
      return pctB - pctA;
    });
  },
  pct(team) {
    const g = team.w + team.l;
    return g === 0 ? "—" : (team.w / g).toFixed(3).replace(/^0/, "");
  }
};
