# Khmer wedding invitation (BunThoung & MengSeav)

## Deploy (GitHub + Vercel)
1. Create a **private** repo on github.com and upload everything in this folder (not node_modules/dist).
2. On vercel.com: Add New > Project > import the repo. Framework: Vite (auto-detected). Deploy.
3. Open the live link. Replace `https://YOUR-DOMAIN.vercel.app` in `index.html` (3 places: og:image, og:url) with your real address, commit, and redeploy so Telegram/Messenger show the couple photo.

## Edit
- `src/data/wedding.js`: date, map link (the countdown and map button read it).
- `index.html`: the Khmer text. `src/style.css`, `src/main.js`: look and motion.
- Music: replace `public/audio/music.mp3` (use music you have rights to).
- Local: `npm install`, `npm run dev`, `npm run build`.

## Not done yet
English language switch, embedded Google Map (needs lat/lng), .ics calendar download, WebGL water, love-story and candlelight sections, i18n file, wiring all text to wedding.js.
