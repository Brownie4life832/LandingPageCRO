# Competitor Teardown

Compare a landing page against one or more competitor pages. Identify what competitors do better, what you can steal, and where you already win.

## Input

The user provides:
- **Your page**: URL, file, or screenshot of the page being evaluated
- **Competitor page(s)**: 1-3 competitor URLs, files, or screenshots

If the user only provides competitor URLs without "your page," treat it as a pure competitor analysis — extract what's worth stealing without a comparison baseline.

## Teardown Workflow

### Step 1: Capture Both Pages

For each page (yours + competitors):
- Navigate using browser tools, take screenshots, scroll through the full page
- Read the accessibility tree for content structure
- Note: headline, subheadline, CTA copy, CTA placement, social proof elements, pricing presentation, visual hierarchy, and narrative flow

### Step 2: Head-to-Head Comparison

Score both pages across these 8 battle dimensions (skip the technical ones — this is about persuasion):

| Dimension | Your Page | Competitor | Winner | Why |
|-----------|-----------|------------|--------|-----|
| Headline Clarity | | | | |
| Value Prop Strength | | | | |
| CTA Effectiveness | | | | |
| Social Proof | | | | |
| Visual Hierarchy | | | | |
| Copy & Messaging | | | | |
| Objection Handling | | | | |
| Urgency & Motivation | | | | |

For each dimension, state concretely what the competitor does and what you do. No vague comparisons — quote actual copy, describe actual elements.

### Step 3: Steal List

Extract the specific tactics worth adopting:

**Steal These** — Tactics the competitor uses that you should adopt:
- What it is, where it appears, and how to adapt it to your page (not copy verbatim — adapt the principle)

**Protect These** — Things you do better that you must NOT lose:
- What you're doing right that the competitor lacks

**Ignore These** — Things the competitor does that look good but won't move the needle:
- Flashy elements that don't serve conversion

### Step 4: Action Plan

Deliver a prioritized list of 5-7 specific changes, ordered by impact:
1. [Change]: [What to do] — Stolen from [competitor element]
2. ...

Each change should be concrete enough to hand to a designer or copywriter.

### Step 5: Write the Winning Copy

Using the best elements from both pages, write:
- The ideal headline (may be inspired by either page or entirely new)
- The ideal subheadline
- 3 CTA variations
- The opening narrative arc combining the strongest elements from both

### Step 6: Save Learnings

Update `.claude/memory/analysis-log.md` with:
- Competitor name/URL and key tactics spotted
- Any new patterns worth tracking

## Output Format

```
## Competitor Teardown

**Your Page**: [URL/name]
**Competitor**: [URL/name]
**Date**: [date]
**Verdict**: [Who wins overall and why, in one sentence]

### Head-to-Head
[Comparison table]

### Steal List
**Steal These**
- ...

**Protect These**
- ...

**Ignore These**
- ...

### Action Plan (Prioritized)
1. ...

### The Winning Copy
[Ideal headline, subheadline, CTAs, and opening narrative]
```

## Guidelines

- Be honest. If the competitor's page is better, say so. The user needs truth, not comfort.
- Focus on persuasion tactics, not aesthetic preferences. "Their blue is nicer" is useless. "Their headline names the outcome in 4 words while yours takes 12" is actionable.
- When multiple competitors are provided, call out which competitor wins each dimension — it may not be the same one every time.
- Always end with copy the user can actually use. Diagnosis without a prescription is half the job.
