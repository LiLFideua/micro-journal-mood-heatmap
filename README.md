# Micro Journal Mood Heatmap

A private 280-character journal with mood tags, streaks, and yearly heatmap visualization.

## Highlights

- Multi-file web app: HTML document, dedicated CSS, dedicated JavaScript, TypeScript manifest, Python metadata check, JSON metadata, and Markdown documentation.
- Responsive layout for desktop and mobile screens.
- Polished interface with clear controls, readable typography, and keyboard-friendly focus states.
- Local-first behavior where persistence is needed.

## Tech stack

- HTML for document structure.
- CSS for layout, theming, responsive design, and professional polish.
- JavaScript for app behavior and browser-native interactions.
- TypeScript for the typed project manifest in src/project-manifest.ts.
- Python for repository metadata validation in scripts/metadata_check.py.
- JSON and Markdown for project metadata and documentation.

## Run locally

Open index.html directly in a browser, or serve the folder with:

`ash
python -m http.server 5173
`

Then open the local URL for this repository.

## Verify

`ash
npm test
`

The test command checks that the HTML references external assets, JavaScript parses correctly, the professional CSS layer is present, and project metadata includes multiple languages.

## Deployment

Deploy the repository root as a static site with GitHub Pages, Netlify, Vercel, or any static host. The entry point is index.html.
