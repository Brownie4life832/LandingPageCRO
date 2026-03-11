# Reskin Landing Page

Take a product and rebuild its landing page in the structure, style, and CRO patterns of another brand's page. Combines the reference brand's proven layout with new copy written for your product.

## Phase 0: Intake Prompts

Before doing any analysis, gather the required inputs from the user via AskUserQuestion. Run these in 2 rounds.

### Round 1 — The Two Inputs

Ask these 2 questions:

1. **Reference Page** — "What page do you want to use as the style/structure reference? Drop the URL."
   - Free text
   - Header: "Reference"

2. **Your Product** — "Where should I get your product info from?"
   - Options:
     - "URL" — description: "I'll give you a link to my current landing page or product page"
     - "Figma" — description: "I'll give you a Figma prototype URL"
     - "Brief" — description: "I'll describe the product — no existing page yet"
   - Header: "Product"

After the user answers, ask for the actual URL or brief as a follow-up if needed (e.g., "Drop the URL to your current page" or "Give me the Figma link").

### Round 2 — Context & Preferences

Ask these 3-4 questions (skip any that are already answered or irrelevant):

1. **Target Audience** — "Who is the target buyer for this product? Describe them briefly."
   - Free text
   - Header: "Audience"
   - Skip if: the existing page makes the audience obvious and user confirms

2. **What's Not on the Page** — "Is there anything about your product the current page doesn't show? (New proof points, features, testimonials, pricing changes, etc.)"
   - Free text
   - Header: "Missing Info"
   - Skip if: product source is a brief (they'll include everything)

3. **Brand Style** — "For the visual design, which approach do you want?"
   - Options:
     - "Reference style" — description: "Use the reference page's colors, fonts, and visual feel"
     - "My brand" — description: "Keep my brand colors/fonts but use the reference's layout and structure"
     - "Hybrid" — description: "Reference layout + my brand colors + reference typography patterns"
   - Header: "Brand"

4. **Anything to Preserve** — "Is there anything from your current page you definitely want to keep? (A specific headline, testimonial, section, etc.)"
   - Free text
   - Header: "Keep"
   - Skip if: product source is a brief (no existing page)

Once intake is complete, proceed to Phase 1. Do not start analysis before gathering these inputs.

---

## Phase 1: Understand the Reference Page

Use the same extraction process as `/clone-lp`:

### 1a. Extract the design system
Run the design token extraction JS on the reference page to capture:
- Color palette (primary, secondary, accent, backgrounds, text colors)
- Typography (display font, body font, size scale, weight usage)
- Border radius, shadow, and spacing patterns

### 1b. Map the page structure
Scroll through the reference page at desktop and mobile. Create a **Section Blueprint** — this is different from a section inventory because it captures the *purpose* of each section, not just what's in it:

```
## Section Blueprint (from [Reference Brand])

1. [Urgency Bar] — Creates FOMO. Countdown timer + promo offer.
   Purpose: Reduce bounce by signaling limited-time deal.

2. [Hero] — 2-col. Lifestyle image + headline + CTA + social proof.
   Purpose: Communicate core value prop + primary conversion action above fold.
   Pattern: Headline = [number] + [audience] + [brand benefit]. Subhead = relatability/humor.

3. [Numbered Benefits x7] — Category label + number + headline + body + images.
   Purpose: Overcome specific objections one by one. Each section = one reason to buy.
   Pattern: Headline is a benefit statement, body explains the mechanism.

4. [Stats Block] — 4 survey stats in a bordered card.
   Purpose: Social proof via quantified outcomes.

5. [Mid-Page CTA] — Badge + headline + subheadline + stars.
   Purpose: Re-engage scrollers who skipped the hero CTA.

6. [Buy Box] — Product selector + pricing tiers + accordion FAQ.
   Purpose: Convert. Anchoring via price comparison, perks list reduces friction.

7. [Testimonial Carousel] — Horizontal scroll cards, each with title + body + name.
   Purpose: Peer proof. Audience-specific (all mention GLP-1).

8. [Reviews Section] — Rating breakdown + individual reviews.
   Purpose: Volume proof. "90,876 reviews" = trust signal.
```

For each section, note:
- **Layout** (full-width, 2-col, grid, centered, card)
- **CRO tactic** (what psychological lever it pulls)
- **Copy pattern** (how the headline/body is structured)
- **Visual pattern** (image placement, badge style, color usage)

### 1c. Extract the reference page's copy
Use `get_page_text` to capture all copy. This is for studying their narrative arc and copy patterns — you won't reuse their words, but you'll match their structure.

### 1d. Identify the narrative arc
Map the reference page's story structure:
- How does it open? (problem, benefit, identity, urgency?)
- How does it build? (objection-by-objection, feature stack, transformation arc?)
- How does it close? (offer, scarcity, social proof, guarantee?)
- What's the emotional progression? (pain → hope → proof → action?)

## Phase 2: Understand & Analyze Your Product

### 2a. Extract product information

**If the product source is a URL:**
- Navigate to the page, screenshot it at desktop and mobile, extract all text via `get_page_text`
- Identify: product name, category, target audience, key features, pricing, proof points, current CTA

**If the product source is a Figma prototype:**
- Open the Figma URL in the browser
- Screenshot each frame/screen
- Extract visible text, product features, pricing, imagery descriptions

**If the product source is a brief:**
- Use the information as-is. If critical details are missing (audience, proof points, differentiator), ask the user via AskUserQuestion before proceeding.

### 2b. Full CRO analysis of the existing product page

If the product source is a URL or Figma prototype (i.e., there's an existing page to evaluate), run a **full analysis using the CLAUDE.md framework** across all 10 dimensions:

1. Hero Section & Above-the-Fold
2. Value Proposition
3. Call-to-Action
4. Social Proof & Trust
5. Visual Design & Hierarchy
6. Copy & Messaging
7. Mobile Experience
8. Page Performance
9. Conversion Path & Forms
10. Psychological Principles

Score each 1-10. Identify:
- **What's working** — elements to carry forward into the new page
- **What's broken** — problems the reskin must fix (not replicate)
- **Missing elements** — things the current page lacks that the reference page does well
- **Copy weaknesses** — headlines that don't pass the "so what?" test, features masquerading as benefits, unclear value prop, missing objection handling
- **Structural gaps** — missing sections (no social proof? no urgency? no FAQ?), wrong section order, narrative arc issues

Output this as an **Improvement Report** with 3 tiers:

```
## Improvement Report — [Product Name]

### Current Score: X/10

### Critical Fixes (must address in the reskin)
1. [Issue]: [What's wrong] → [How the new page will fix it]
2. ...

### Upgrades (borrowed from the reference page's playbook)
1. [Reference tactic]: [Why it works] → [How we'll adapt it]
2. ...

### Carry Forward (keep these from the current page)
1. [Element]: [Why it works]
2. ...
```

This report directly informs the copy and structure of the new page. Every critical fix becomes a design requirement. Every upgrade becomes a section decision.

### 2c. Product extraction checklist
Regardless of source, confirm you have these before proceeding:
- [ ] Product name and one-line description
- [ ] Target audience (who is this for?)
- [ ] Top 5-7 value propositions / benefits (rewritten as outcomes, not features)
- [ ] Key differentiator (why this over alternatives?)
- [ ] Proof points (testimonials, stats, logos, certifications)
- [ ] Pricing / offer structure
- [ ] Primary CTA action (buy, sign up, book demo, etc.)
- [ ] Top 3 objections the page should address
- [ ] What's working on the current page (from 2b analysis)
- [ ] What must improve (from 2b analysis)

If any of these are missing, ask the user. Don't guess at proof points or pricing.

**Present the Improvement Report to the user before proceeding.** They should see what you found wrong, what you plan to fix, and what you plan to borrow from the reference page. Get approval before writing copy.

## Phase 3: Strategy Mapping

This is the core of the skill. Map each section from the reference blueprint to your product's equivalent. Output a **Reskin Map**:

```
## Reskin Map

Reference → Your Product

1. [Urgency Bar] → [Your offer: "Launch Price — 40% off this week"]
2. [Hero] →
   - Their pattern: "[number] benefits [audience] love about [brand]"
   - Your version: "[number] reasons [your audience] are switching to [your product]"
   - Image: [describe what your hero image should show]
3. [Numbered Benefits x7] → Map to your top benefits:
   01. Their "Better poops" → Your "[top pain point solved]"
   02. Their "Fill nutrient gaps" → Your "[second benefit]"
   ...
4. [Stats Block] → Your stats: [list available numbers]
5. [Mid-Page CTA] → Same structure, your headline + CTA copy
6. [Buy Box] → Your pricing tiers + your FAQ
7. [Testimonials] → Your testimonials (or placeholder structure if none yet)
8. [Reviews] → Your reviews (or placeholder)
```

For sections where the user doesn't have equivalent content (e.g., no testimonials yet), note this and either:
- Write placeholder copy that the user can replace later
- Substitute with a different trust-building section (e.g., "As seen in" logos, certification badges, guarantee statement)

### Adapt the narrative arc
Take the reference page's story structure and rewrite it for your product:
- Same emotional beats, different specifics
- Same psychological levers, different proof points
- Same section rhythm, different copy

Output this as a **Narrative Brief** the user can approve before building.

## Phase 4: Write the Copy

Using the CLAUDE.md copywriting framework, write all page copy before building. The copy must:
- **Fix every critical issue** from the Improvement Report (Phase 2b)
- **Apply every upgrade** borrowed from the reference page
- **Preserve what's working** from the current page
- **Follow the reference's structural patterns** with your product's story

### What to write:

**Headlines & Copy (per CLAUDE.md Section 11):**
- Identify the product's top 6 most compelling value propositions. Rank by purchase-driving power.
- Write 4 headline options (direct outcome, pain-point, mechanism, emotional/identity)
- Write 1 subheadline that pairs with any headline
- Write 6 value prop blocks — benefit-first, in the audience's language
- Write 2-3 CTA copy variations

**Narrative Arc (per CLAUDE.md Section 12):**
Write the full 5-part narrative arc as actual page-ready copy:
1. The Problem (empathy)
2. The Shift (reframe)
3. The Solution (product introduction)
4. The Proof (evidence)
5. The Close (urgency + action)

**Section-by-section copy:**
For each section in the Reskin Map, write:
- **Headlines** — Match the reference's headline pattern but with your product's story
- **Body copy** — Match the reference's tone and length per section
- **CTA copy** — Adapt the reference's CTA style to your offer
- **Social proof lines** — Use your actual numbers, or flag as placeholder
- **Badge/label text** — Match the reference's label style (e.g., uppercase category labels)
- **FAQ/accordion content** — Address the top objections identified in the analysis

### Copy rules:
- Do NOT copy the reference page's actual words. Match the *pattern*, not the *text*.
- Write at the reading level of your target audience.
- Every headline must pass the "so what?" test.
- Benefits over features. Outcomes over mechanisms.
- Objection handling should appear in the same position it appears in the reference.
- If the reference uses humor or casual tone, match that energy for your brand.
- If the reference uses numbered sections, keep that structure — it creates scannable commitment.
- Every critical fix from the Improvement Report must be visibly addressed in the copy.

**Present the full copy doc to the user for review before building.** This is a checkpoint — no code until copy is approved.

## Phase 5: Build the Page

### Design approach
- Use the reference page's **design system** (colors, fonts, spacing, border-radius, shadows)
- OR if the user's product has its own brand, ask which to use:
  - "Reference style" — look and feel of the reference brand
  - "Your brand" — your colors/fonts with the reference's layout
  - "Hybrid" — reference layout + your brand colors + reference typography patterns

### Build process
Same as `/clone-lp` Phase 4:
- Single HTML file, embedded CSS and JS
- Mobile-first responsive CSS
- CSS custom properties for the design tokens
- Build sections in order following the Reskin Map
- Placeholder images with descriptive text and correct aspect ratios
- All interactive elements (sticky nav, accordions, toggles, carousels, countdown)

### Section-by-section:
For each section, reference the original page's:
- Layout (match column structure, grid, alignment)
- Spacing (match padding and gaps)
- Visual patterns (match badge styles, card styles, border treatments)

But populate with:
- Your product's copy (from Phase 4)
- Your product's proof points
- Your product's pricing
- Image placeholders describing what YOUR product images should be

## Phase 6: Verify

1. Start preview server, navigate to the page
2. Check console for errors
3. Desktop screenshot — compare layout patterns to the reference
4. Mobile screenshot — confirm responsive behavior matches reference patterns
5. Test all interactive elements
6. Read through the copy — does the narrative flow? Does each section lead naturally to the next?
7. Screenshot and share with the user

## Phase 7: Deliver

Share with the user:
- Screenshots at mobile + desktop
- A summary of what was borrowed from the reference (structure, patterns, CRO tactics)
- A summary of what's original (all copy, product-specific content)
- What needs real images vs. placeholders
- Offer to run `/analyze-lp` on the result for a CRO score
- Offer to run `/before-after` if this is replacing an existing page

## Guidelines

- **Never copy the reference page's actual copy.** You're borrowing structure and patterns, not words.
- **The reference page's CRO tactics are the real value.** The section order, the psychological levers, the objection sequence — that's what you're transferring.
- **Ask when data is missing.** Don't invent testimonials, stats, or pricing. Flag placeholders clearly.
- **Respect both brands.** The output should feel like a natural page for the user's product, not a knockoff of the reference brand.
- **Copy doc before code.** Get the words right first — the code is just a container for the story.
