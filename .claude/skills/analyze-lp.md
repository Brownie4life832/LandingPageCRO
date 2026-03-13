# Analyze Landing Page

Perform a comprehensive CRO analysis on a landing page submitted by a team member.

## Input Detection

Determine the input type from what the user provides:

1. **URL**: If the user provides a URL, use the browser MCP tools to load the page, take screenshots, read the accessibility tree, and inspect elements.
2. **Local file**: If the user provides a file path, read the HTML/CSS files directly and use Preview tools to render and inspect them.
3. **Screenshot**: If the user provides an image path, read the screenshot file and perform visual analysis.

## Analysis Workflow

### Step 1: Gather Page Data

**For URLs:**
- Navigate to the page using the browser tools
- Take a full-page screenshot for visual analysis
- Read the page accessibility tree for content structure
- Check mobile responsiveness by resizing the viewport
- Inspect key elements (CTA buttons, forms, headlines) for styling
- Note page load behavior

**For Local Files:**
- Read the HTML source to understand structure
- Use Preview tools to render the page and take screenshots
- Inspect element styles and layout
- Check responsive behavior at mobile/tablet/desktop breakpoints

**For Screenshots:**
- Read and analyze the image visually
- Note: performance and interactive analysis will be limited; flag this in the report

### Step 2: Analyze Against Framework

Work through each of the 10 dimensions in the CLAUDE.md framework:
1. Hero Section & Above-the-Fold
2. Value Proposition
3. Call-to-Action (CTA)
4. Social Proof & Trust
5. Visual Design & Hierarchy
6. Copy & Messaging
7. Mobile Experience
8. Page Performance
9. Conversion Path & Forms
10. Psychological Principles

For each dimension:
- Note specific observations (quote actual copy, describe actual elements)
- Identify strengths to preserve
- Identify issues with specific fixes
- Assign a score 1-10

### Step 3: Generate Report

Output the full structured report following the format in CLAUDE.md:
- Overall weighted score
- Score breakdown table
- Top 3 critical issues with specific fixes
- Quick wins
- Detailed per-dimension analysis
- 2-3 A/B test hypotheses

### Step 4: Write the Headlines & Copy

This is NOT optional. After the diagnostic report, switch into copywriter mode:

1. **Identify the top 6 value props** — Rank the product/service's most compelling attributes by purchase-driving power for the target audience. Cut commodity features (spec-sheet items). Keep only what would make someone stop scrolling and say "I need this."

2. **Write 4 headline options** from different angles:
   - Direct outcome (what the buyer gets)
   - Pain-point (the problem they're escaping)
   - Mechanism (how/why it works)
   - Emotional/identity (who they become)

3. **Write 1 subheadline** that pairs with any headline above.

4. **Write 6 value prop blocks** — Short, benefit-first copy for each of the top 6 attributes. Written in the audience's language, not marketing-speak.

5. **Write 2-3 CTA copy variations** that communicate value, not just action.

### Step 5: Write the Narrative Arc

Tell the story the page should follow. Write it as actual copy, not instructions:

1. **The Problem** — Name the pain. Make the visitor feel seen.
2. **The Shift** — Challenge their assumption about the solution.
3. **The Solution** — Introduce the product through the lens of the reframe.
4. **The Proof** — Outcomes, social proof, evidence.
5. **The Close** — Urgency + clear action.

This story should be ready to drop onto the page. It's the spine of the entire landing page.

### Step 6: Save Learnings

After delivering the report, update `.claude/memory/analysis-log.md` (all team members can write to this file):
- Add a new row to the Analyses Completed table (date, page, score, top issues)
- Update tally counts in Recurring Patterns for any issues encountered
- Log any new industry-specific insights
- Note any unusually effective techniques worth tracking

**Note**: Do NOT modify `.claude/memory/expert-calibration.md` — only the lead expert updates that file via `/learn-from-review`.

## Response Guidelines

- Lead with the overall score and the single most impactful change
- Be direct and actionable — no filler language
- Suggest specific copy alternatives, not just "improve the copy"
- Include estimated impact (high/medium/low) for each recommendation
- If analyzing a screenshot only, clearly note which dimensions couldn't be fully assessed
- The Headlines & Copy + Narrative Arc sections are MANDATORY in every analysis — never skip them
- Write copy like a practitioner, not a consultant. Deliver lines they can paste into Figma or their CMS today.
- Ask the user if they want deeper analysis on any specific dimension
