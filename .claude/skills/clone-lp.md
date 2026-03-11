# Clone Landing Page

Replicate an existing landing page as a faithful HTML/CSS reproduction. Used for studying page structure, testing copy variations, or building a starting point for a new page.

## Input

The user provides a URL to a live landing page.

## Phase 1: Extract the Design System

Before looking at layout or content, extract the actual design tokens from the live page. This prevents guessing at colors and fonts later.

Run this JavaScript on the page via the browser tools:

```js
(function() {
  const body = getComputedStyle(document.body);
  const h1 = document.querySelector('h1');
  const h2 = document.querySelector('h2');
  const btn = document.querySelector('a[href], button');
  const nav = document.querySelector('nav, header');

  // Collect all unique background colors and text colors from key elements
  const elements = document.querySelectorAll('h1, h2, h3, p, a, button, section, header, footer, nav, [class*="hero"], [class*="cta"], [class*="banner"]');
  const colors = new Set();
  const bgColors = new Set();
  const fonts = new Set();

  elements.forEach(el => {
    const s = getComputedStyle(el);
    if (s.color && s.color !== 'rgb(0, 0, 0)') colors.add(s.color);
    if (s.backgroundColor && s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.backgroundColor !== 'rgb(255, 255, 255)') bgColors.add(s.backgroundColor);
    if (s.fontFamily) fonts.add(s.fontFamily.split(',')[0].trim().replace(/['"]/g, ''));
  });

  return JSON.stringify({
    bodyFont: body.fontFamily,
    bodyColor: body.color,
    bodyBg: body.backgroundColor,
    h1Font: h1 ? getComputedStyle(h1).fontFamily : null,
    h1Size: h1 ? getComputedStyle(h1).fontSize : null,
    h1Weight: h1 ? getComputedStyle(h1).fontWeight : null,
    h2Font: h2 ? getComputedStyle(h2).fontFamily : null,
    h2Size: h2 ? getComputedStyle(h2).fontSize : null,
    uniqueColors: [...colors].slice(0, 10),
    uniqueBgColors: [...bgColors].slice(0, 10),
    uniqueFonts: [...fonts].slice(0, 5),
  }, null, 2);
})()
```

Record the output as the **Design Tokens** for the build. Convert rgb values to hex. Identify:
- **Primary color** (used on CTAs and key elements)
- **Secondary color** (accents, badges)
- **Text colors** (headings, body, muted)
- **Background colors** (sections, cards)
- **Display font** (headlines)
- **Body font** (paragraphs, UI)
- **Font sizes** (h1, h2, body — note the scale)

Load the correct Google Fonts (or system fonts) before writing any CSS.

## Phase 2: Capture the Full Page

### Desktop pass (do this first)
1. Set browser to desktop width (1280px+)
2. Scroll from top to bottom, taking a screenshot every ~800px of scroll
3. At each screenshot, note:
   - Section type (hero, benefits, testimonials, pricing, FAQ, footer, etc.)
   - Layout pattern (full-width, two-column, grid, centered, etc.)
   - Key visual elements (images, icons, badges, cards)

### Mobile pass
4. Resize to 375px width
5. Scroll top to bottom, screenshot every major section
6. Note how the layout changes: what stacks, what hides, what reorders

### Content extraction
7. Use `get_page_text` to capture ALL copy in one pass
8. This is the source of truth for text content — do not retype from screenshots

### Interactive elements
9. Identify every interactive behavior on the page:
   - Sticky/fixed navigation (what triggers it?)
   - Accordions / expandable sections
   - Tabs or toggles
   - Carousels or horizontal scroll areas
   - Countdown timers
   - Modals or popups
   - Form behaviors
   - Scroll animations or parallax
   - Hover states on cards/buttons

Note each one explicitly — these are easy to miss and hard to retrofit.

## Phase 3: Section Inventory

Before writing any code, output a **Section Inventory** as a numbered list:

```
## Section Inventory

1. [Announcement Bar] — countdown timer, promo text, dark bg
2. [Header] — logo centered, no nav links
3. [Hero] — 2-col: image left, headline + CTA + social proof right
4. [Benefit 01] — 2-col: text left, dual images right. "DIGESTION" label
5. ...
```

For each section, note:
- Layout type (full-width, contained, 2-col, grid)
- Background color
- Key components inside it
- Any interactive behavior
- Responsive change (e.g., "stacks to single column on mobile")

This inventory becomes the build plan. Follow it section by section.

## Phase 4: Build

### Setup
- Single HTML file with embedded `<style>` and `<script>` tags
- Use the extracted design tokens for CSS custom properties
- Load Google Fonts if the page uses web fonts
- Set `box-sizing: border-box` globally
- Mobile-first CSS: base styles at 375px, `@media (min-width: 768px)` for tablet, `@media (min-width: 1024px)` for desktop

### Build order
Build sections in the order they appear on the page, following the Section Inventory. For each section:

1. Write the HTML structure (semantic elements, proper heading hierarchy)
2. Write the CSS (mobile-first)
3. If it has interactive behavior, write the JS

### Image handling
- Use colored placeholder `<div>` elements with descriptive text inside
- Match the placeholder color to the dominant color of the original image (eyeball from screenshots)
- Set the correct aspect ratio
- Add a comment noting what the real image shows, so the user can swap it later

### Copy handling
- Use the exact copy from the `get_page_text` extraction
- Preserve bold, italic, and line break formatting
- Use proper HTML entities for special characters (ü, —, ', etc.)

### Interactive elements
For each behavior identified in Phase 2:
- **Sticky nav**: Use `IntersectionObserver` on the hero section
- **Accordions**: Toggle `max-height` on click, rotate the +/− icon
- **Tabs/toggles**: Add/remove `.active` class on click
- **Carousels**: Horizontal scroll with `scroll-snap-type`, hide scrollbar
- **Countdown timers**: `setInterval` updating digit elements every second
- **Plan/card selection**: Click handler toggling `.selected` class

Keep JS minimal and vanilla — no libraries.

### CSS guidelines
- Max container width: match the original (usually 1100-1200px)
- Use `gap` for spacing instead of margins where possible
- CTA buttons: match exact border-radius, padding, font-weight, and hover state
- Pay attention to letter-spacing on uppercase labels
- Border-radius on cards and images — this is a major visual tell if wrong
- Box shadows on buttons or cards — replicate these precisely
- Consistent vertical rhythm between sections

## Phase 5: Verify

After building, verify systematically:

1. **Start preview server** and navigate to the file
2. **Check for console errors** — fix any before proceeding
3. **Desktop check (1280px)**:
   - Screenshot the top of the page — compare hero layout to original
   - Scroll through each section — does the 2-column layout match?
   - Check the sticky nav triggers correctly
   - Test all interactive elements (accordions, toggles, carousels)
4. **Mobile check (375px)**:
   - Screenshot the top — does the stacked layout look right?
   - Check the buy box / pricing area — this is the trickiest section on mobile
   - Confirm CTA buttons are full-width and tappable
   - Test interactive elements on mobile
5. **Side-by-side comparison**: Open the original in the browser and the replica in preview. Compare:
   - Color accuracy
   - Typography scale
   - Spacing and whitespace
   - Section order and layout

If anything is off, fix it and re-verify that specific section.

## Phase 6: Deliver

Share screenshots of the finished replica at both mobile and desktop. Note:
- What's been faithfully replicated (structure, copy, layout, interactions)
- What uses placeholders (images)
- Any sections that were simplified (e.g., embedded review widgets, complex e-commerce buy boxes)
- Suggest running `/analyze-lp` on the replica to identify CRO improvements

## Guidelines

- **Copy is sacred.** Get the exact words from `get_page_text` — don't paraphrase or summarize.
- **Design tokens first.** Extracting real CSS values prevents 80% of "this doesn't look right" issues.
- **Section inventory before code.** Know what you're building before you build it.
- **Mobile-first CSS.** The original page is responsive — the replica must be too.
- **Placeholders over broken images.** A colored box with a description is better than a missing image icon.
- **Test interactive elements.** Accordions, toggles, and sticky navs are what make it feel like a real page vs. a static mockup.
