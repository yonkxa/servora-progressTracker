# Servora Feature Tracker

Static site. No build step, no dependencies.

## Structure
```
index.html          page shell (loads everything below, in order)
manifest.webmanifest + icons (favicon.svg, favicon-32.png, apple-touch-icon.png, icon-192/512.png): black "S.T." app icon, full-screen (standalone) mode
css/
  tokens.css        colors, shadows, light/dark themes (change the palette here)
  base.css          reset, background, scrollbars
  sidebar.css       floating sidebar + hover animation
  layout.css        main area, panel, grid
  components.css    cards, gauge, tiles, bars, fields, buttons
  dropdown.css      custom dropdown + status pills
  rows.css          masonry group cards + feature rows
  modern.css        hero, board, checklist styles
  responsive.css    container queries + phone pill dock + More sheet
js/
  icons.js          SVG icons
  data.js           6 sections (5 roles + SaaS config), features, objectives  <- edit the default list here
  state.js          storage, seeding, app state
  components.js     bar / gauge / tiles
  dropdown.js       custom select component
  nav.js            sidebar, theme, export, reset
  pages.js          overview (purpose hero), objectives, role pages, add/edit/delete
  capstone.js       readiness checklists (UAT per role, SaaS config tests, objective acceptance, e2e, evidence, paper, defense) + Board + Readiness pages
  app.js            boot
```
Script order in index.html matters (data -> state -> components -> dropdown -> nav -> pages -> capstone -> app).

## Deploy to Vercel
Upload this folder (or push to GitHub and import). Framework: Other. Build command: empty. Output directory: `.`

## Notes
- Edits are saved in each browser's localStorage under `servora-tracker-v4` (features) and `servora-tracker-v4c` (readiness ticks). Not shared across devices.
- Changing default items in `data.js` only affects new visitors, or after "Reset defaults".
- Keep the storage key unchanged unless you want everyone reset.
