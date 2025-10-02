# USIU First-Year Companion (v1)

A mobile-first microsite for USIU-Africa Student Affairs to welcome first-year students during Orientation Week. The page greets students by name, estimates weekly campus costs, and offers a quick savings tip while letting them toggle a day/night look.

## Run Locally (no Docker)
1. Open the repository folder.
2. Double-click `public/index.html` (or drag it into your browser).
3. Accept the greeting prompt, then use the on-page buttons to run the estimator or toggle the theme.

## Docker Build & Run
```bash
docker build -t usiu-first-year:v1 .
docker run -p 8080:80 usiu-first-year:v1
# Open http://localhost:8080 in your browser
```

## Known Limitations & Next Steps
- Uses blocking `prompt`/`alert` APIs; future versions should switch to form inputs for better UX and validation.
- Savings tip logic is intentionally simple (10%); later versions could surface multiple budgeting scenarios or integrate verified campus rates.
- Theme toggle adjusts colours via inline styles; migrating to CSS custom properties with class toggles would simplify scaling additional themes.
- No persistence layer; Student Affairs analytics would require hooking these inputs into a backend or spreadsheet workflow.

## Design Assets
Wireframes (`design/*.estimator_js.PNG, summary_js.PNG, welcome_js.PNG`) and rationale (`design/notes.md`) illustrate the intended interactions for greeting, estimator flow, and summary states.

## Testing Checklist (Manual)
- Page loads with no console errors and shows the personalised greeting.
- `Run Estimator` walks through four prompts, updates the on-page summary, and logs results in the console.
- `Toggle Theme` switches between day/night contrast while keeping buttons legible.
- `Reset Summary` returns the summary panel to its default placeholder for repeated testing.
- Docker container serves the site successfully at `http://localhost:8080`.
