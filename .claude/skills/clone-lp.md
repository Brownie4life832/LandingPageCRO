# Clone Landing Page

Replicate an existing landing page as a faithful HTML/CSS reproduction. Used for studying page structure, testing copy variations, or building a starting point for a new page.

## Input

The user provides a URL to a live landing page.

## Phase 1: Extract the Design System

Before looking at layout or content, extract the actual design tokens from the live page. This prevents guessing at colors and fonts later.

Run this JavaScript on the page via the browser tools. The script samples all visible elements (not just semantic tags) to handle modern frameworks, custom components, and non-standard markup:

```js
(function() {
  const body = getComputedStyle(document.body);
  const colors = new Set();
  const bgColors = new Set();
  const fonts = new Set();
  const fontSizes = [];
  const borderRadii = new Set();

  // Sample ALL visible elements — catches framework components, not just semantic HTML
  const allElements = document.querySelectorAll('*');
  const sampled = [];
  allElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0 && rect.top < window.innerHeight * 5) {
      sampled.push(el);
    }
  });

  const toScan = sampled.slice(0, 500);

  toScan.forEach(el => {
    const s = getComputedStyle(el);
    const c = s.color;
    const bg = s.backgroundColor;
    const ff = s.fontFamily;
    const fs = s.fontSize;
    const br = s.borderRadius;

    if (c && c !== 'rgb(0, 0, 0)' && c !== 'rgba(0, 0, 0, 0)') colors.add(c);
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'rgb(255, 255, 255)') bgColors.add(bg);
    if (ff) fonts.add(ff.split(',')[0].trim().replace(/['"]/g, ''));
    if (fs) fontSizes.push(parseFloat(fs));
    if (br && br !== '0px') borderRadii.add(br);
  });

  // Find heading-like elements (semantic + role + class-based)
  const headingCandidates = [];
  document.querySelectorAll('h1, h2, h3, [role="heading"], [class*="heading"], [class*="title"], [class*="headline"]').forEach(el => {
    const s = getComputedStyle(el);
    headingCandidates.push({
      tag: el.tagName.toLowerCase(),
      text: el.textContent.trim().substring(0, 80),
      font: s.fontFamily.split(',')[0].trim().replace(/['"]/g, ''),
      size: s.fontSize,
      weight: s.fontWeight,
      color: s.color,
      lineHeight: s.lineHeight,
      letterSpacing: s.letterSpacing
    });
  });

  // Find CTA buttons (semantic + visual: high-contrast bg, clickable)
  const ctaCandidates = [];
  document.querySelectorAll('button, a[href], [role="button"], [class*="btn"], [class*="cta"], [class*="button"], input[type="submit"]').forEach(el => {
    const s = getComputedStyle(el);
    const bg = s.backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'rgb(255, 255, 255)') {
      ctaCandidates.push({
        text: el.textContent.trim().substring(0, 40),
        bg: bg,
        color: s.color,
        borderRadius: s.borderRadius,
        padding: s.padding,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight
      });
    }
  });

  // Detect loaded web fonts
  const loadedFonts = [];
  if (document.fonts) {
    document.fonts.forEach(f => {
      loadedFonts.push(f.family.replace(/['"]/g, ''));
    });
  }

  // Detect font stylesheets (Google Fonts, Adobe Fonts, etc.)
  const fontLinks = [];
  document.querySelectorAll('link[href*="fonts.googleapis"], link[href*="use.typekit"], link[href*="fonts.adobe"]').forEach(l => {
    fontLinks.push(l.href);
  });

  const uniqueSizes = [...new Set(fontSizes.map(s => Math.round(s)))].sort((a, b) => b - a);

  return JSON.stringify({
    bodyFont: body.fontFamily,
    bodyColor: body.color,
    bodyBg: body.backgroundColor,
    bodyLineHeight: body.lineHeight,
    headings: headingCandidates.slice(0, 6),
    ctaButtons: ctaCandidates.slice(0, 5),
    uniqueColors: [...colors].slice(0, 15),
    uniqueBgColors: [...bgColors].slice(0, 15),
    uniqueFonts: [...fonts].slice(0, 8),
    loadedWebFonts: [...new Set(loadedFonts)].slice(0, 10),
    fontStylesheetURLs: fontLinks,
    fontSizeScale: uniqueSizes.slice(0, 10),
    borderRadiusValues: [...borderRadii].slice(0, 5),
  }, null, 2);
})()
```

**If the script returns sparse results** (shadow DOM, iframes, or heavily JS-rendered pages), fall back to:
1. Use the browser inspector to manually inspect 3-4 key elements (headline, CTA, body text, section background)
2. Check the `<head>` for Google Fonts / Typekit / Adobe Fonts links
3. Use screenshots + color picker for colors if computed styles aren't accessible

Record the output as the **Design Tokens** for the build. Convert rgb values to hex. Identify:
- **Primary color** (used on CTAs and key elements — check `ctaButtons` array)
- **Secondary color** (accents, badges)
- **Text colors** (headings, body, muted — check `headings` array)
- **Background colors** (sections, cards)
- **Display font** (headlines — check `headings[0].font` and `loadedWebFonts`)
- **Body font** (paragraphs, UI — check `bodyFont`)
- **Font size scale** (from `fontSizeScale` — gives the full type ramp)
- **Border radius** (from `borderRadiusValues` — critical for card/button feel)

Load the correct web fonts from `fontStylesheetURLs` (or use system fonts) before writing any CSS.

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
