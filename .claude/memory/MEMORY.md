# Landing Page CRO Agent Memory

## Project Structure
- `CLAUDE.md` — Core analysis framework and scoring rubric
- `.claude/skills/analyze-lp.md` — The `/analyze-lp` skill (analyze a page)
- `.claude/skills/learn-from-review.md` — The `/learn-from-review` skill (ingest expert reviews)
- `knowledge/` — Detailed best practice guides by topic + expert-contributed insights
- `.claude/memory/analysis-log.md` — Running log of analyses and patterns
- `.claude/memory/expert-calibration.md` — Expert's priorities, scoring tendencies, preferences

## Key Conventions
- Always output analysis in the structured report format defined in CLAUDE.md
- Score each of 10 dimensions on 1-10 scale with weighted overall score
- Lead recommendations with the highest-impact change first
- Be specific: quote actual copy, suggest concrete alternatives
- After each analysis, update analysis-log.md with patterns found
- Expert calibration takes priority over generic best practices
- Expert insights in knowledge files are prefixed with "Expert insight:"
