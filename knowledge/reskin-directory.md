# Reskin Directory

Reference landing pages cataloged for reskinning. Each entry documents the page's layout structure, what it's best used for, and which product types it fits. When using `/reskin-lp`, pick a reference page from this directory that matches your product's audience and conversion strategy.

## How to Use This Directory

1. **Find a match** — Browse by category, layout type, or conversion strategy
2. **Run the reskin** — Use `/reskin-lp` with the reference URL + your product
3. **Add new entries** — When you find a great page, add it below using the template

---

## Directory

### 001 — Ridge Wallet "6 Reasons"
- **URL**: https://ridge.com/pages/edc-smart-wallet-5rlp
- **Category**: E-commerce / Physical Product
- **Layout Type**: Numbered listicle (single-column scroll)
- **Conversion Strategy**: Education-first → single CTA at bottom
- **Best For**: Products that need to explain "why switch" — category creators, upgrade products, anything where the customer doesn't yet know they need it
- **Key Structural Elements**: Announcement bar → hero comparison image → 6 numbered reason cards (image + text alternating) → summary checklist → customer quote → product card + CTA
- **Standout Tactics**: Visual comparison hero, numbered scroll contract, single CTA at bottom, customer quote as section header
- **Swipe Card**: `knowledge/swipe-file/001-ridge-wallet.md`

### 002 — Gruns Gut Health
- **URL**: https://grfruits.com/products/gruns
- **Category**: Health & Wellness / Supplements
- **Layout Type**: Numbered listicle with sticky header CTA
- **Conversion Strategy**: Discount-led + education hybrid
- **Best For**: Subscription supplements, consumables, products with strong price anchoring (high original price, deep discount)
- **Key Structural Elements**: Sticky header (social proof + CTA) → hero with discount → 7 numbered reasons → ingredient breakdown → testimonials → pricing tiers
- **Standout Tactics**: No navigation (radical LP focus), sticky header with social proof + CTA, per-day price framing, over-delivers on content promise
- **Swipe Card**: `knowledge/swipe-file/002-gruns-gut-health.md`

### 003 — Qure Skincare
- **URL**: https://qure-skincare.com
- **Category**: Beauty / Premium Device
- **Layout Type**: Authority-first with tiered pricing
- **Conversion Strategy**: Expert authority → education → urgency-driven close
- **Best For**: Premium products ($200+), "too good to be true" claims, medical/clinical positioning, products that need credibility before the pitch
- **Key Structural Elements**: Expert avatars above headline → hero with device → dermatologist endorsements → before/after by concern → mechanism explanation → tiered pricing with scarcity
- **Standout Tactics**: Doctors before product explanation, before/after tabbed by concern, purchase velocity in sticky bar, scarcity per SKU
- **Swipe Card**: `knowledge/swipe-file/003-qure-skincare.md`

### 004 — AG1 Daily Health
- **URL**: https://drinkag1.com
- **Category**: Health & Wellness / Supplements
- **Layout Type**: Brand authority long-form
- **Conversion Strategy**: Authority + social proof saturation → late price reveal
- **Best For**: Category leaders, products with clinical backing, brand-building pages, high-consideration health products
- **Key Structural Elements**: Social proof above headline → bold category claim → clinical trials section → ingredient transparency → comparison table → lifestyle imagery → late pricing → FAQ
- **Standout Tactics**: Social proof above headline, comparison table vs alternatives, dual CTA (buy + educate), 14-section long-form with late price reveal
- **Swipe Card**: `knowledge/swipe-file/004-ag1-daily-health.md`

### 005 — Jolie Filtered Showerhead
- **URL**: https://jolieskinco.com/products/the-jolie-showerhead
- **Category**: Beauty & Wellness / Premium Hardware
- **Layout Type**: Minimalist PDP — image-dominant, fashion-brand sparse
- **Conversion Strategy**: Category reframe (showerhead as beauty product) + volume social proof (2,242 reviews) + subscription filter upsell
- **Best For**: Premium single-SKU products, lifestyle/beauty hardware, products where brand aesthetic does the selling, anything with a subscription consumable add-on (razors, filters, cartridges)
- **Key Structural Elements**: Announcement bar (free shipping + returns) → large hero product image → short product description → color variant swatches → subscription bundle upsell → integrated reviews
- **Standout Tactics**: Category reframing through visual design (beauty brand aesthetic on hardware), subscription price anchoring ($98 vs $169), minimalist copy as premium signal, color swatches as fashion pattern
- **Swipe Card**: `knowledge/swipe-file/005-jolie-showerhead.md`

---

## Quick Reference: Pick by Strategy

| If your product needs... | Use this reference |
|---|---|
| Education before conversion | 001 — Ridge Wallet |
| Strong discount + subscription push | 002 — Gruns |
| Credibility/authority first | 003 — Qure Skincare |
| Brand authority + category leadership | 004 — AG1 |
| Numbered listicle structure | 001 or 002 |
| Sticky CTA | 002 or 003 |
| Single focused CTA | 001 |
| Tiered pricing | 003 |
| Comparison table vs competitors | 004 |
| Medical/clinical positioning | 003 or 004 |
| Minimalist premium PDP | 005 — Jolie |
| Subscription upsell / consumable add-on | 002, 005 |
| Category reframing (commodity → lifestyle) | 005 — Jolie |

## Quick Reference: Pick by Product Type

| Product Type | Best References |
|---|---|
| Physical product (upgrade/switch) | 001 — Ridge |
| Consumable / supplement | 002 — Gruns, 004 — AG1 |
| Premium device ($200+) | 003 — Qure |
| Subscription product | 002 — Gruns, 004 — AG1 |
| Health & wellness | 002, 003, or 004 |
| E-commerce / DTC | 001 or 002 |
| Single-SKU premium product | 005 — Jolie |
| Beauty / lifestyle hardware | 005 — Jolie, 003 — Qure |

---

## Adding New Entries

Use this template when adding a new reference page:

```markdown
### [NUMBER] — [Brand Name] [Page Description]
- **URL**: [full URL]
- **Category**: [vertical / sub-vertical]
- **Layout Type**: [e.g., numbered listicle, authority-first, comparison-led, etc.]
- **Conversion Strategy**: [1-line summary of how the page converts]
- **Best For**: [what kinds of products/situations this layout works for]
- **Key Structural Elements**: [ordered list of major sections]
- **Standout Tactics**: [3-5 unique moves worth stealing]
- **Swipe Card**: `knowledge/swipe-file/[filename].md`
```

After adding a new entry, update the quick reference tables above.
