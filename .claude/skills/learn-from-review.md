# Learn From Expert Review

Ingest an expert CRO review and extract actionable insights into the agent's knowledge base so future analyses reflect the expert's eye.

## Accepted Input Formats

1. **Video transcript** (preferred): Pasted transcript text from a Loom, YouTube, or screen recording where the expert walks through a landing page and gives commentary
2. **Written review**: Free-form text notes from an expert reviewing a page
3. **Annotated screenshots**: Screenshots with the expert's markup/comments (read the image and extract observations)
4. **Voice memo transcript**: Transcribed audio notes

The user may provide the input in any of these ways:
- Paste the transcript directly into chat
- Provide a file path to a transcript (.txt, .md, .srt, .vtt)
- Provide a Loom share URL (fetch the page to get the transcript)
- Provide a path to annotated screenshot(s)

## Processing Workflow

### Step 1: Parse the Raw Input

Read through the entire expert commentary and identify:
- **Page being reviewed**: What landing page is being discussed? (URL, client name, industry)
- **Specific observations**: What did the expert notice? (quote their exact words when useful)
- **Judgments**: What did the expert say was good vs. bad?
- **Recommendations**: What changes did the expert suggest?
- **Reasoning**: WHY did the expert flag something? (this is the most valuable part — capture the thinking, not just the conclusion)
- **Patterns/rules**: Are there general principles the expert stated that apply beyond this one page?

### Step 2: Categorize Insights

Map each insight to the relevant analysis dimension:
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

Also tag insights as:
- **Universal rule**: Applies to all landing pages (add to knowledge base)
- **Industry-specific**: Applies to a specific vertical (tag with industry)
- **Client-specific**: Applies only to this client/brand
- **Preference**: The expert's stylistic preference (note as preference, not rule)

### Step 3: Update Knowledge Base

**For universal rules and best practices:**
- Check existing files in `knowledge/` — update the relevant file with the new insight
- If the insight doesn't fit an existing file, create a new one (e.g., `knowledge/pricing-pages.md`)
- Always attribute: "Expert insight:" prefix so we can distinguish from baseline best practices

**For industry-specific insights:**
- Add to or create `knowledge/industry-[name].md`

**For client-specific rules:**
- Add to or create `knowledge/clients/[client-name].md`

**For general preferences and calibration:**
- Update `.claude/memory/expert-calibration.md` with the expert's tendencies and preferences

### Step 4: Update Expert Calibration File

After processing, update `.claude/memory/expert-calibration.md` with:
- What the expert tends to prioritize most
- Scoring tendencies (are they strict on certain dimensions?)
- Recurring themes in their feedback
- Specific phrases or framings they use
- What they consider "good enough" vs. "needs work"

### Step 5: Confirm What Was Learned

Present back to the user:
```
## Learnings Extracted

**Page reviewed**: [page identifier]
**Insights captured**: [count]

### New Rules Added
- [Rule]: Added to [knowledge file]

### Existing Knowledge Updated
- [Topic]: Updated [file] with [insight]

### Expert Calibration Updated
- [Observation about expert's priorities/preferences]

### Needs Clarification
- [Anything ambiguous in the review that needs the expert's input]
```

Ask the expert if the extracted insights are accurate and if anything was missed.

## Guidelines

- Capture the REASONING, not just the conclusion. "The CTA is bad" is useless. "The CTA fails because it uses 'Submit' which tells the user nothing about what they get — it should communicate the value of clicking" is gold.
- Preserve the expert's voice and specific examples when they're instructive.
- Don't over-generalize. If the expert says "this hero image is too dark," that's page-specific. If they say "hero images should always have enough contrast for white text overlay," that's a rule.
- When the expert contradicts existing knowledge base content, flag the conflict and ask which should take priority.
- Track how many reviews have been processed to gauge confidence in extracted patterns.
