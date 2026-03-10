# Mobile Optimization — Best Practices

## Critical Mobile Factors

### 1. Performance
- Target: page load under 3 seconds on 4G
- Largest Contentful Paint (LCP): under 2.5 seconds
- Cumulative Layout Shift (CLS): under 0.1
- First Input Delay (FID): under 100ms
- Compress images: WebP format, lazy loading for below-fold images
- Minimize third-party scripts (each adds ~100-500ms)

### 2. Touch Targets
- Minimum 44x44px for all interactive elements
- 8px minimum spacing between touch targets
- CTA buttons: full-width or near-full-width on mobile
- No hover-dependent interactions (tooltips, dropdown menus)

### 3. Content Priority
- Reorder content for mobile context (not just reflow desktop)
- Hero headline + CTA must be visible without scrolling
- Collapse long sections into accordions
- Remove decorative elements that don't aid conversion
- Shorten copy where possible for mobile attention spans

### 4. Forms on Mobile
- Minimize fields (every field reduces mobile conversion more than desktop)
- Use appropriate input types: `tel`, `email`, `number` for correct keyboards
- Auto-fill support is critical on mobile
- Large, tappable form fields (minimum 48px height)
- Inline validation (don't make them submit to find errors)
- Consider multi-step forms over long single-page forms

### 5. Navigation
- Hamburger menu is fine for navigation — don't clutter the mobile header
- Sticky CTA button (bottom of screen) for long pages
- Avoid pop-ups that are hard to close on mobile
- Back button should work intuitively

## Mobile-Specific Conversion Patterns

### Click-to-Call
- For businesses with phone sales: prominent click-to-call CTA
- Use `tel:` links with proper formatting
- Show phone number visibly, not buried in footer

### Thumb-Zone Design
- Primary CTA in the "easy reach" zone (bottom center of screen)
- Navigation in the top zone
- Avoid critical actions in hard-to-reach corners

### Mobile-First Copy
- Shorter headlines (4-6 words ideal on mobile)
- Bullet points over paragraphs
- Break up text walls with visuals
- Front-load important information in every paragraph

## Common Mobile Mistakes

1. **Desktop-first design that "works" on mobile**: Not optimized, just responsive
2. **Tiny text**: Body text under 16px is hard to read on mobile
3. **Horizontal scrolling**: Layout breaks — nothing should overflow
4. **Intrusive interstitials**: Google penalizes them; users hate them
5. **Unoptimized images**: Full-size desktop images loading on mobile
6. **Fixed-position elements covering content**: Sticky headers/bars eating screen space
7. **Zoom required to read**: Content should be legible at default zoom
