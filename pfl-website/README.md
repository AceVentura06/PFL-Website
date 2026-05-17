# PFL Website — Setup Guide

## File Structure
```
pfl-website/
├── index.html          ← Home page
├── teams.html          ← All 32 teams grid
├── standings.html      ← Standings (division + conference view)
├── schedule.html       ← Weekly schedule
├── news.html           ← News index
├── history.html        ← League history & lore
├── css/
│   └── style.css       ← All shared styles
├── js/
│   ├── data.js         ← ⭐ ALL LEAGUE DATA LIVES HERE
│   └── pfl.js          ← Shared nav/ticker/footer functions
├── teams/
│   ├── TEMPLATE.html   ← Copy this to create new team pages
│   ├── brk.html        ← Brooklyn Bulldogs
│   ├── bos.html        ← Boston Olympians
│   └── ... (all 32)
├── news/
│   ├── TEMPLATE.html   ← Copy this to write new articles
│   └── ... (your articles)
└── assets/
    ├── logos/          ← Drop team logos here (e.g. brk-bulldogs.png)
    └── images/         ← Article images, banners, etc.
```

---

## GitHub Pages Setup

1. Push this folder to your GitHub repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site will be live at `https://yourusername.github.io/repo-name/`

---

## How to Update Each Week

### 1. Update Standings / Records
Open `js/data.js` and update each team's `w`, `l`, `pf`, `pa` values:
```js
{ id: "BRK", ..., w: 8, l: 3, pf: 214, pa: 187 },
```

### 2. Add Game Results to Schedule
Add game objects to the `schedule` array:
```js
{ week:1, home:"BRK", away:"BOS", homeScore:31, awayScore:28, status:"final", date:"2025-09-07", time:"1:00 PM" },
```
- `status` can be `"upcoming"`, `"live"`, or `"final"`
- For upcoming games, `homeScore` and `awayScore` can be `null`

### 3. Update Current Week
```js
currentWeek: 12,  // ← change this each week
```

---

## How to Add a News Article

1. **Copy the template:**
   ```
   cp news/TEMPLATE.html news/001-my-article.html
   ```

2. **Edit the file** — look for all `<!-- CHANGE THIS -->` comments

3. **Register it in data.js:**
   ```js
   news: [
     {
       id: "001",
       title: "My Article Title",
       tag: "Analysis",
       date: "2025-09-10",
       excerpt: "A short summary shown on the news index page.",
       file: "news/001-my-article.html",
       image: null  // or "assets/images/my-image.jpg"
     },
   ],
   ```

---

## Logo File Naming
Name logos exactly like this and drop them in `assets/logos/`:
```
brk-bulldogs.png
bos-olympians.png
phi-jerries.png
orl-vipers.png
sj-dynamos.png
sd-pumas.png
clb-oaks.png
pit-rhinos.png
tor-mallards.png
mtl-oxen.png
vir-grizzlies.png
ala-vets.png
aus-desperados.png
lis-slickers.png
har-blues.png
bal-crabbers.png
was-rebels.png
slt-elk.png
oma-outlaws.png
por-pioneers.png
chi-twisters.png
sf-trappers.png
twn-wolves.png
det-hotrod.png
car-flyers.png
nsh-stars.png
lou-stallions.png
sat-defenders.png
stl-steamers.png
phx-coyotes.png
okc-bulls.png
alb-aliens.png
```
Logos load automatically — if the file isn't found, the colored circle placeholder shows instead.

---

## Team Colors Reference
| Team | Primary | Secondary |
|------|---------|-----------|
| Brooklyn Bulldogs | `#1e2a4a` | `#c0c4cc` |
| Boston Olympians | `#2255cc` | `#f5c518` |
| Philadelphia Jerries | `#8b1a1a` | `#c8962a` |
| Orlando Vipers | `#f07820` | `#d0d4df` |
| San Diego Pumas | `#1a1a1a` | `#9a7820` |
| San Jose Dynamos | `#4dd9c0` | `#f5c518` |
| (others) | placeholder | placeholder |

Update colors in `js/data.js` as you finalize each team.

---

## Adding Season History
At the end of each season, add a record to `js/data.js`:
```js
seasons: [
  { year: 2025, champion: "Brooklyn Bulldogs", mvp: "Player Name", superbowlScore: "31-28" },
],
```
