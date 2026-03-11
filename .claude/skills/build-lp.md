# Build Landing Page

Build a high-converting landing page from scratch. Before writing any code, conduct a structured intake to gather everything a senior copywriter and frontend developer would need.

## Phase 1: Intake Questions

Ask questions in rounds using AskUserQuestion (max 4 per round). Do NOT write any code until all rounds are complete.

### Round 1 — The Product & Audience

Ask these 4 questions:

1. **Product/Service** — "What are you selling? Give me a one-liner description."
   - Free text (no predefined options — use the "Other" input)
   - Header: "Product"

2. **Target Audience** — "Who is this for? Describe your ideal buyer — their role, age range, situation, or demographic."
   - Free text
   - Header: "Audience"

3. **Core Pain Point** — "What problem does this solve? What's the frustrating status quo your buyer is stuck in?"
   - Free text
   - Header: "Pain Point"

4. **Desired Outcome** — "What does life look like after they buy or sign up? Describe the transformation."
   - Free text
   - Header: "Outcome"

### Round 2 — Differentiation & Proof

Ask these 4 questions:

1. **Key Differentiator** — "Why should someone choose this over alternatives? What's the unfair advantage?"
   - Free text
   - Header: "Differentiator"

2. **Proof Points** — "What proof do you have that it works? (Testimonials, stats, logos, case studies, certifications — list whatever you have)"
   - Free text
   - Header: "Proof"

3. **Top Objection** — "What's the #1 reason someone would hesitate or say no?"
   - Free text
   - Header: "Objection"

4. **Offer / Hook** — "Is there a pricing angle, discount, free trial, guarantee, or urgency element? Describe it."
   - Free text
   - Header: "Offer"

### Round 3 — Action, Awareness & Build Preferences

Ask these 4 questions:

1. **CTA Goal** — "What's the single action you want the visitor to take?"
   - Options: "Buy now", "Sign up / Free trial", "Book a call / Demo", "Join waitlist"
   - Header: "CTA"

2. **Awareness Level** — "How aware is your audience when they land on this page?"
   - Options:
     - "Unaware" — description: "They don't know they have the problem yet"
     - "Problem-aware" — description: "They know the pain but not the solution"
     - "Solution-aware" — description: "They know solutions exist, evaluating options"
     - "Product-aware" — description: "They know your product, need a reason to act now"
   - Header: "Awareness"

3. **Tech Stack** — "What should I build this with?"
   - Options: "Plain HTML + CSS + JS", "React + Tailwind", "Next.js + Tailwind", "Astro"
   - Header: "Stack"

4. **Reference Pages** — "Any landing pages you like the look/feel of? Drop URLs or describe the vibe."
   - Free text
   - Header: "References"

### Round 4 (only if needed) — Brand Assets

Ask this round ONLY if the user didn't already provide brand details in previous answers:

1. **Brand Colors & Fonts** — "Do you have brand colors, fonts, or a logo? Share hex codes, font names, or files."
   - Free text
   - Header: "Brand"

## Phase 2: Strategy Brief

After all questions are answered, BEFORE writing code, output a short **Strategy Brief** to the user for confirmation. This is the copywriter thinking out loud:

```
## Strategy Brief

**Positioning**: [One sentence — what this product IS to this audience]
**Awareness approach**: [Based on their awareness level, here's how the page should open]
**Narrative arc**:
  1. Problem — [the pain we'll name]
  2. Shift — [the reframe we'll use]
  3. Solution — [how we introduce the product]
  4. Proof — [what evidence we'll lead with]
  5. Close — [the urgency/action angle]
**Headline direction**: [The angle we'll lead with and why]
**Objection strategy**: [How and where we'll neutralize the #1 objection]
**Page sections**: [Ordered list of sections the page will have]
```

Ask the user: "Does this strategy feel right, or do you want to adjust anything before I build?"

Wait for confirmation before proceeding.

## Phase 3: Build the Page

Once the strategy is approved, build the landing page.

### Copywriting rules (think like a senior copywriter):
- Lead with outcomes, never features. "Reduces leg swelling in 20 minutes" beats "Motorized stepper."
- Write at the reading level of the target audience. No jargon unless the audience expects it.
- Every line must pass the "so what?" test — if a reader could respond "so what?", rewrite it.
- Headlines: specific > clever. Clear > creative.
- Match copy intensity to awareness level:
  - **Unaware**: Lead with the problem. Long-form education. Build the case before revealing the product.
  - **Problem-aware**: Agitate the pain, then introduce the solution. Medium-length.
  - **Solution-aware**: Lead with differentiators and proof. Comparison-friendly.
  - **Product-aware**: Lead with the offer, urgency, and social proof. Can be shorter.
- Objection handling should appear before the final CTA, not after.
- Use the visitor's language, not marketing-speak.

### Frontend rules (think like a senior frontend dev):
- Mobile-first. Always. Design for 375px width first, then scale up.
- Performance matters: inline critical CSS, lazy-load images, minimize JS.
- Semantic HTML: proper heading hierarchy, landmark elements, alt text.
- CTA buttons must have strong contrast (check WCAG AA minimum) and be large enough for thumb taps (min 48px height on mobile).
- Smooth scroll behavior for anchor links.
- Use system font stacks unless the user specified brand fonts.
- Keep it fast: aim for under 50KB of CSS, minimal or zero JS dependencies.
- Responsive images with srcset where applicable.
- Sticky or repeated CTA on long pages so there's always one in reach.

### Page structure:
Build sections in the order established in the Strategy Brief. Typical flow:

1. **Hero** — Headline, subheadline, primary CTA, supporting visual
2. **Problem / Pain** — Empathy section naming the visitor's frustration
3. **Solution / How it works** — Product introduction through the reframe
4. **Value props** — 3-6 benefit blocks with icons or visuals
5. **Social proof** — Testimonials, logos, stats, case studies
6. **Objection handling** — FAQ or dedicated section neutralizing hesitation
7. **Offer + Final CTA** — Restate the offer, urgency element, clear action
8. **Footer** — Minimal: links, legal, contact

Adjust, add, or remove sections based on the user's answers and strategy.

### After building:

1. Use the Preview tools to render the page.
2. Verify at mobile (375px), tablet (768px), and desktop (1280px).
3. Take screenshots and share with the user.
4. Check console for errors.
5. Confirm the CTA is visible and tappable at all breakpoints.

## Response Guidelines

- Never start coding before completing the intake and getting strategy approval.
- If the user provides partial info upfront (e.g., "build a landing page for my SaaS product"), acknowledge what they've shared and skip questions they've already answered.
- Be conversational during intake — this isn't a form, it's a creative brief session.
- During the build, focus on shipping a complete, functional page. Polish > perfection.
- After delivery, offer to run `/analyze-lp` on the result for a CRO audit.
