# Learn From Page

Analyze an exemplary landing page and extract reusable CRO patterns into the swipe file. This is how the agent builds taste — by studying what the best pages do.

## Input

The user provides a URL of a landing page they consider excellent. They may also provide context on what they think makes it great or what vertical/audience it targets.

## Extraction Workflow

### Step 1: Browse the Page (Mobile First)

1. **Navigate to the URL** using browser MCP tools at mobile viewport (375x812)
2. **Take screenshots at every scroll position** — capture the full page in 3-5 mobile screenshots
3. **Read the accessibility tree** to extract all copy (headlines, subheadlines, CTAs, body text, testimonials)
4. **Inspect key elements** for styling data:
   - Headline: font-family, font-size, color, line-height
   - CTA buttons: font-size, padding, background-color, border-radius, width
   - Body text: font-size, font-family, color
   - Background colors of major sections
5. **Switch to desktop** (1280x800) and take 1-2 screenshots to see layout differences

### Step 2: Extract the Swipe Card

Analyze everything captured and produce a structured swipe card covering these dimensions:

#### A. Above-the-Fold Anatomy
- Exact element order (logo, nav, badge, headline, subheadline, CTA, trust strip, etc.)
- What's present and what's deliberately absent
- How much of the headline is visible without scrolling on mobile
- Any pre-headline elements (badges, social proof, urgency)

#### B. Headline Formula
- The exact headline copy
- The angle: direct outcome, pain-point, mechanism, emotional/identity, curiosity, social proof
- Word count and reading level
- Whether it passes the "5-second clarity test" — can a stranger understand the offer?
- The subheadline: how it complements the headline (specifics, audience, mechanism)

#### C. CTA Strategy
- Exact CTA copy (every instance on the page)
- Are all CTAs consistent (same copy, same color)?
- CTA color, size, and style
- How many CTAs total and where they're placed
- Does the CTA communicate value or just action?
- Is there a sticky/floating CTA? When does it appear?

#### D. Narrative Arc
- Map the page's story section by section: what role does each section play?
- Identify the flow: Problem → Shift → Solution → Proof → Close (or however they structured it)
- Note any sections that break the expected pattern in a good way
- What emotional journey does the page take the visitor on?

#### E. Social Proof Strategy
- Types used: testimonials, logos, stats, reviews, media mentions, case studies, user counts
- How are testimonials structured (photo, name, title, quote length, specificity)?
- Where is social proof placed (near CTA, separate section, inline)?
- Any unique social proof formats worth stealing?

#### F. Visual Hierarchy & Design
- Color palette: primary, secondary, accent, background colors (exact hex values)
- Typography: display font, body font, key sizes at mobile
- Section backgrounds: how do they create visual separation?
- Whitespace strategy: tight/dense or spacious?
- Any standout visual techniques (gradients, textures, overlaps, animations)

#### G. Psychological Triggers
- Anchoring (price comparisons, before/after)
- Urgency/scarcity (timers, limited stock, deadline)
- Loss aversion (what they'll miss, cost of inaction)
- Authority (credentials, certifications, years in business)
- Reciprocity (free value before the ask)
- Social proof placement relative to CTAs

#### H. Mobile Execution
- Touch target sizing (are buttons large enough?)
- Text readability (would it pass the "mom test"?)
- Scroll experience (does it feel fast/snappy or heavy?)
- How many scrolls to reach the first CTA?
- Sticky elements (headers, CTAs, chat widgets)

#### I. The Standout Move
- What is the ONE thing this page does better than 90% of landing pages?
- What's the most steal-worthy technique?
- What surprised you?

### Step 3: Save the Swipe Card

Save the swipe card to `knowledge/swipe-file/NNN-brand-name.md` where NNN is the sequential number (001, 002, etc.).

Format:
```
# Swipe Card: [Brand/Page Name]

**URL**: [url]
**Date Analyzed**: [date]
**Vertical**: [e-commerce, SaaS, health, finance, etc.]
**Target Audience**: [who the page targets]
**Overall Impression**: [1-2 sentence gut reaction]

## Above-the-Fold Anatomy
[structured extraction]

## Headline Formula
**Headline**: "[exact copy]"
**Angle**: [type]
**Subheadline**: "[exact copy]"
[analysis]

## CTA Strategy
[structured extraction]

## Narrative Arc
| Section | Role | Key Copy |
|---------|------|----------|
| 1 | ... | ... |
[full page map]

## Social Proof Strategy
[structured extraction]

## Visual Design
**Colors**: [palette with hex values]
**Fonts**: [display + body]
**Key Sizes**: [headline, body, CTA at mobile]
[analysis]

## Psychological Triggers
[what they deploy and where]

## Mobile Execution
[assessment]

## The Standout Move
[the #1 thing to steal from this page]

## Steal List
- [Specific technique 1 — ready to implement]
- [Specific technique 2 — ready to implement]
- [Specific technique 3 — ready to implement]
```

### Step 4: Update Cumulative Patterns

After saving the swipe card, update `knowledge/swipe-file/patterns.md`:

1. **Increment the page count**
2. **Update frequency tables** — for each pattern dimension, track how many of the analyzed pages use each approach
3. **Add any new patterns** discovered on this page
4. **Update the "rules from the swipe file"** section — these are synthesized rules that emerge from the data, phrased the same way as expert calibration rules
5. **Flag contradictions** — if this page breaks a pattern that was emerging, note it. Contradictions are interesting, not errors.

### Step 5: Present to User

Show the user:
1. **The standout move** — lead with the most interesting finding
2. **The full swipe card** — so they can review and correct
3. **Any new patterns** added to the cumulative file
4. **How many pages analyzed** and what the strongest patterns are so far

Ask: "Anything I missed or got wrong about what makes this page great?"

## After Every 5 Pages

When the swipe file reaches 5, 10, 15, or 20 pages, automatically produce a **Pattern Synthesis** — a summary document that:
- Ranks the most common patterns by frequency
- Identifies the "non-negotiables" (patterns used by 80%+ of great pages)
- Identifies "secret weapons" (patterns used by only 1-2 pages but with high impact)
- Proposes new rules for `expert-calibration.md` tagged as `[swipe-file]`
- Compares swipe file patterns against existing expert calibration — do they agree? Where do they diverge?

## Rules

- Always start mobile. The expert analyzes mobile first, always.
- Extract EXACT copy — don't paraphrase headlines, CTAs, or testimonials.
- Note what's ABSENT, not just what's present. Sometimes the best pages are great because of what they removed.
- Don't score the page. This isn't an analysis — it's a learning extraction. We already think the page is good. Our job is to figure out WHY.
- Be specific enough that someone could recreate the technique without seeing the original page.
- The steal list should be immediately actionable — things you could implement on the Smart Cane page (or any page) today.
