# George Ranes — personal website

Plain HTML, CSS and JavaScript. No build step: upload the folder as-is to GitHub Pages or Vercel.

```
index.html                  the whole main site (Home, About, Experience, Mandarin, Contact)
css/style.css               all styling; colors and fonts are set once at the top in :root
js/main.js                  mobile menu, nav highlighting, fade-ins, Mandarin totals
assets/
  resume.pdf                PLACEHOLDER: replace with your real résumé (keep the filename)
  headshot-placeholder.svg  PLACEHOLDER: replace with your photo (see below)
  favicon.svg               the "GR" browser-tab icon
mandarin/
  index.html                the flashcard app
  data/sets.js              your decks: one set per block, one card per line
  data/chars.js             the character dictionary: one character per line
```

## Editing content

Everything you'll change is in `index.html`. Search for `EDIT:` to find the spots meant for you.

- **Add a job.** In the Experience section, copy one `<li class="role"> … </li>` block, paste it where it belongs (newest first), then change the dates, title, organization and bullet points.
- **Photo.** Save a portrait-shaped headshot (about 4:5, at least 800 px wide) as `assets/headshot.jpg`. Then change `src="assets/headshot-placeholder.svg"` to `src="assets/headshot.jpg"`.
- **Résumé.** Replace `assets/resume.pdf` with your PDF, using the same filename. Both résumé buttons point at it.
- **Colors and fonts.** Change them in the `:root` block at the top of `css/style.css`.

## Adding a Mandarin set

1. Open `mandarin/data/sets.js`. Paste a new set before the final `];`, following the same shape as the others:

   ```js
   {
     "id": "restaurant",                   // unique, lowercase, never change it later (progress is saved under it)
     "title": "饭馆 At the Restaurant",
     "subtitle": "Ordering, paying and talking about food.",
     "cards": [
       {"id":1,"hz":"菜单","py":"càidān","en":"menu","cat":"Ordering","toks":[{"c":"菜","p":"cài","t":4},{"c":"单","p":"dān","t":1}]},
       // …one card per line; ids count up from 1 within the set
     ],
     // "cats" is optional. Leave it out and categories are counted from the cards automatically.
   },
   ```

   - `toks` lists each character with its pinyin `p` and tone `t` (1–4, or 5 for neutral).
   - Optional card fields: `"q":"learning"` shows a "not yet mastered" tag. `"kind":"pattern"` together with a `"pattern":"…"` note shows that note on the back of the card. Other `kind` values such as `"grammar"` and `"sentence"` are labels only.

2. For any character that isn't already in `mandarin/data/chars.js`, add a line in the same format as the existing ones. Characters that are already there are reused automatically.

3. Save. The app's home screen and the Mandarin section of the main site both pick up the new totals on their own.

Tip: the easiest way to produce a new set is to paste your Quizlet list to Claude and ask for it "in the format of mandarin/data/sets.js and chars.js".

Study progress is saved in each visitor's browser, so adding sets never resets anyone's progress. Just don't rename an existing set's `id`.

## Previewing locally

Open `index.html` directly in a browser, or run any static server from this folder, for example `npx serve` or VS Code's Live Server.

## Deploying

**GitHub Pages:** create a repository, upload the contents of this folder (so `index.html` is at the top level), then go to Settings → Pages → Deploy from branch → `main` / root. The site appears at `https://<username>.github.io/<repo>/`. Name the repository `<username>.github.io` to serve it from the root.

**Vercel:** click "Add New → Project", import the repository (or drag the folder in), set Framework Preset to "Other" with no build command, and deploy.

A custom domain (e.g. georgeranes.com) can be added in either service's settings.
