# Export Report

Export the most recent CRO analysis report from this conversation as a shareable file. Supports HTML (styled, self-contained) and Markdown formats.

## Input

The user may specify:
- **Format**: HTML (default) or Markdown
- **Which report**: If multiple analyses were run in the session, the user can specify which one. Default: the most recent analysis.

If no analysis has been run in the current session, tell the user to run `/analyze-lp`, `/competitor-teardown`, `/before-after`, or `/audience-rewrite` first.

## Workflow

### Step 1: Identify the Report

Look through the current conversation for the most recent analysis output. This includes:
- `/analyze-lp` reports (full 10-dimension analysis + headlines + narrative)
- `/competitor-teardown` reports (head-to-head comparison + steal list)
- `/before-after` reports (score movement + changelog)
- `/audience-rewrite` reports (persona profile + rewritten copy)
- `/reskin-lp` improvement reports (CRO analysis + reskin map)

Extract the full structured report content.

### Step 2: Generate the File

**For Markdown** (`.md`):
- Write the report as-is in markdown format
- Add a metadata header with page name, date, overall score, and analyst info
- Save to `reports/[page-name]-[date].md`

**For HTML** (`.html`, default):
- Generate a self-contained HTML file with embedded CSS
- Use a clean, professional design:
  - Max width 800px, centered
  - System font stack (no external dependencies)
  - Score badges with color coding (green 7+, yellow 5-6, red 1-4)
  - Proper table styling for score breakdowns
  - Collapsible sections for detailed analysis (using `<details>` elements)
  - Print-friendly styles (`@media print`)
- Include at the top:
  - Page name / URL
  - Analysis date
  - Overall score with visual badge
  - Report type (Analysis, Teardown, Before/After, etc.)
- Save to `reports/[page-name]-[date].html`

### Step 3: Create Reports Directory

If `reports/` doesn't exist, create it.

### Step 4: Deliver

- Tell the user the file path
- If HTML, offer to open it in the preview server so they can see it immediately
- Mention the file can be shared directly — it's self-contained with no external dependencies

## File Naming

Use kebab-case, derived from the page name:
- `reports/shop-lc-stepper-2026-03-13.html`
- `reports/competitor-teardown-ridge-vs-bellroy-2026-03-13.html`
- `reports/before-after-smart-cane-2026-03-13.html`
- `reports/audience-rewrite-stepper-seniors-2026-03-13.md`

## Guidelines

- The exported report should be a complete, standalone document — not a fragment
- HTML exports must have zero external dependencies (no CDN links, no Google Fonts)
- Include all sections from the original report: scores, issues, recommendations, headlines, narrative arc
- For competitor teardowns, include the comparison table, steal list, and winning copy
- For before/after reports, include the score movement table and recommendation tracker
- Don't truncate or summarize — export the full report
- If the conversation has no analysis to export, don't create an empty file — tell the user to run an analysis first
