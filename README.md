# Sustainability Planner

GitHub Pages-ready version of the uploaded planner.

## Files
- `index.html` — page structure/content
- `styles.css` — colour, spacing, desing
- `script.js` — interactions and logic
- `.nojekyll` — prevents GitHub Pages from processing the site with Jekyll

## Publish on GitHub Pages
1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the **main** branch and the **/(root)** folder.
6. Save.
7. Wait for GitHub to publish the site, then open the Pages URL.

## How to edit later
- Change layout/content in `index.html`
- Change colors/fonts/spacing in `styles.css`
- Change behavior in `script.js`

## Notes
- The original exported HTML referenced a local saved stylesheet path for fonts. This package replaces that with a standard Google Fonts link so it works on GitHub Pages.
- Your existing in-page save/export behavior is still kept in `script.js`.
