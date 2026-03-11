# Before/After Changelog

Re-analyze a previously reviewed page after changes have been implemented. Show what improved, what regressed, and what's left to fix. Closes the feedback loop.

## Input

The user provides:
- **The updated page**: URL, file, or screenshot of the revised version
- **Reference to previous analysis**: Either "the stepper page" (agent looks up analysis log), a date, or a page name

If the agent can't identify the previous analysis, ask the user to clarify which page this is an update of.

## Workflow

### Step 1: Retrieve Previous Analysis

Look up the prior analysis from:
1. The current conversation history (if same session)
2. `.claude/memory/analysis-log.md` for the page identifier and previous scores
3. Ask the user if neither matches

Extract from the previous analysis:
- All 10 dimension scores
- Top 3 critical issues identified
- Quick wins recommended
- Specific copy/headline recommendations made

### Step 2: Re-Analyze the Updated Page

Run the full analysis workflow from `/analyze-lp` on the new version:
- Capture the page (screenshots, accessibility tree, content)
- Score all 10 dimensions fresh — do NOT anchor to previous scores
- Identify the current headline, CTA, social proof, etc.

### Step 3: Build the Changelog

Compare every dimension side-by-side:

**Score Movement**
| Dimension | Before | After | Change |
|-----------|--------|-------|--------|
| Hero Section | X/10 | Y/10 | +/-Z |
| Value Proposition | X/10 | Y/10 | +/-Z |
| ... | ... | ... | ... |
| **Overall** | **X/10** | **Y/10** | **+/-Z** |

Use arrows for quick scanning:
- Improved dimensions get a note on what changed
- Regressed dimensions get a flag and explanation
- Unchanged dimensions get a note on whether that's fine or still needs work

### Step 4: Recommendation Tracker

For each recommendation from the previous analysis, track its status:

| Recommendation | Status | Impact |
|---------------|--------|--------|
| [Previous rec 1] | Implemented / Partially / Not done / Done differently | [What changed in the score] |
| [Previous rec 2] | ... | ... |
| ... | ... | ... |

### Step 5: What's Changed (Detailed)

For each change spotted between versions, document:
- **What changed**: Specific element (old → new)
- **Was this recommended?**: Yes / No / Partial
- **Impact assessment**: Did it help, hurt, or make no difference?
- **Unexpected changes**: Things that changed that weren't in the recommendations — flag whether they helped or hurt

### Step 6: Remaining Issues

After accounting for all changes:
1. **Still open**: Issues from the original analysis that weren't addressed
2. **New issues**: Problems introduced by the changes (regressions)
3. **Next priority**: The single highest-impact change to make next

### Step 7: Updated Copy & Narrative

If the page still needs copy work:
- Updated headline recommendations (accounting for what they've already changed)
- Revised narrative arc if the page structure shifted
- New CTA variations if relevant

Only include this if there's meaningful copy work remaining. If the copy is now solid, say so.

### Step 8: Save to Log

Update `.claude/memory/analysis-log.md` with:
- New entry showing the re-analysis date, updated score, and delta
- Move any validated recommendations to the "Validated Recommendations" section
- Update pattern counts if issues were resolved

## Output Format

```
## Before/After Changelog

**Page**: [URL/name]
**Original Analysis**: [date] — Score: X/10
**Re-Analysis**: [date] — Score: Y/10
**Overall Change**: +/-Z points

### Score Movement
[Comparison table with arrows]

### Recommendation Tracker
[Status table for each previous recommendation]

### What Changed
[Detailed changelog of specific elements: old → new]

### Regressions
[Any areas that got worse — flag prominently]

### Remaining Issues (Prioritized)
1. [Highest impact remaining fix]
2. ...

### Updated Recommendations
[New copy/headline/narrative if still needed]
```

## Guidelines

- Be honest about regressions. If a change made things worse, say so clearly and explain why.
- Credit what worked. When a recommendation was implemented and the score improved, call that out — it validates the process and builds trust.
- Don't re-litigate old issues that were fixed. Focus forward on what's left.
- If the page improved significantly, acknowledge it. Designers need positive feedback too.
- The "next priority" should be one single thing — not a new list of 10 items. What's the ONE change that would move the needle most from here?
- Track validated recommendations in memory — these are gold for future analyses of similar pages.
