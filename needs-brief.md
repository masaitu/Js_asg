# Needs Brief ? USIU First-Year Companion (v1)

**Audience & Context**  
Incoming USIU-Africa freshmen during Orientation Week who need a quick digital guide before they commit the full campus portal to memory. They are on mobile data, moving between registration stations, and want an instant snapshot of daily life (commute, snacks, savings) while feeling welcomed by Student Affairs.

**Core Jobs To Be Done (MVP)**  
1. Greet every student by name with a friendly Swahili touch, log the interaction for staff insight, and point them to the key buttons on the page.  
2. Collect basic commute and snack habits via quick prompts, run simple arithmetic to estimate a weekly budget (transport, snacks, total), and surface a 10% savings tip grounded in realistic campus routines (carpools, fewer kiosk runs).  
3. Let students flip between day and night looks so the microsite matches where they are?on campus labs (light) or late-night dorm check-ins (dark)?while keeping text readable and branded.

**Key Constraints & Guardrails**  
- Pure HTML5, CSS, and Lesson-1 vanilla JavaScript; no frameworks, build tools, or network calls.  
- Lightweight assets that load instantly on campus Wi-Fi or prepaid bundles.  
- Prompts must run sequentially without reloading the page; estimator should be repeatable via a button for testing.  
- Output should include ?Generated for: <Student Identifier>? so Student Affairs can later tie insight back to intake records.  
- Docker packaging required so IT can deploy the static bundle behind Nginx with minimal configuration.

**Success Criteria**  
- Page renders immediately, triggers the greeting prompt once on load, and updates `#greeting` and the console with the provided name.  
- ?Run Estimator? prompts for four numeric inputs, validates basic number entry, and writes a neat summary (transport, snacks, total, 10% savings tip, personalization line) into `#summary`.  
- Theme toggle reliably switches background/foreground colors while preserving contrast and accent color.  
- Console logs capture input values and computed totals for debugging.  
- Site works in Docker via `docker run -p 8080:80` without additional steps.  
- Students understand the flow within 90 seconds and know the next recommended action (e.g., try saving 10% by planning snack runs).
