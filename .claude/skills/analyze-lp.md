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

### Step 4: Save Learnings

After delivering the report, check if any new patterns or insights emerged:
- Was there a recurring issue you've seen before? Update the tally in memory.
- Did you discover a new industry-specific insight? Log it.
- Was there an unusually effective technique worth noting? Save it.

Update the memory file at `.claude/memory/analysis-log.md` with:
- Date and page identifier
- Key issues found
- Any new patterns or insights

## Response Guidelines

- Lead with the overall score and the single most impactful change
- Be direct and actionable — no filler language
- Suggest specific copy alternatives, not just "improve the copy"
- Include estimated impact (high/medium/low) for each recommendation
- If analyzing a screenshot only, clearly note which dimensions couldn't be fully assessed
- Ask the user if they want deeper analysis on any specific dimension
