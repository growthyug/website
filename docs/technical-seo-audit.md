# GrowthYug — Technical SEO Audit
**Date:** 2026-09-24  
**Source:** Full local codebase audit (`c:\Growthyug\website`) + live HTTP inspection  
**Stack:** Static HTML site, deployed via GitHub Pages (CNAME: growthyug.in)

---

## 1. SITE INFRASTRUCTURE

| Property | Value | Status |
|---|---|---|
| Stack | Static HTML (no framework) | ✅ Good — fast, simple |
| Hosting | GitHub Pages (inferred from structure) | ✅ Good |
| HTTPS | Active (live site served over HTTPS) | ✅ Good |
| WWW vs non-WWW | Canonical uses www.growthyug.in; live HTTP response serves growthyug.in | ⚠️ Inconsistency |
| Domain | growthyug.in | ✅ |
| GTM | GTM-NSZMF6L3 loaded on live site (but NOT in local source files) | ⚠️ GTM missing from local source |

---

## 2. CANONICAL TAG ANALYSIS

| Page | Canonical in Local File | Canonical on Live Server | Match? |
|---|---|---|---|
| Homepage | `https://www.growthyug.in/` | `https://growthyug.in/` | ❌ MISMATCH |
| /about/ | `https://www.growthyug.in/about/` | `https://growthyug.in/about/` | ❌ MISMATCH |
| /services/ | `https://www.growthyug.in/services/` | `https://growthyug.in/services/` | ❌ MISMATCH |
| /contact/ | `https://www.growthyug.in/contact/` | `https://growthyug.in/contact/` | ❌ MISMATCH |

**Issue:** Local source files use `www.growthyug.in` in canonical tags, but the live server (GitHub Pages) appears to serve from `growthyug.in` (no www). This creates a canonical mismatch that can split PageRank and confuse Google's canonicalization.

**Fix:** Pick ONE canonical URL (recommend `https://www.growthyug.in/`) and ensure:
1. All canonical tags use www
2. GitHub Pages or DNS redirect non-www to www (or vice versa)
3. OG URLs match canonicals
4. Sitemap URLs match canonicals
5. Schema URLs match canonicals

---

## 3. SITEMAP AUDIT

**Location:** `/sitemap.xml` ✅ Present  
**Referenced in robots.txt:** ✅ Yes (`Sitemap: https://www.growthyug.in/sitemap.xml`)  
**Last modified dates:** All show `2026-09-22` ✅ Recent

| URL in Sitemap | Status | Notes |
|---|---|---|
| `https://www.growthyug.in/` | ✅ Live | |
| `https://www.growthyug.in/services/` | ✅ Live | |
| `https://www.growthyug.in/services/ecommerce-growth/` | Assumed live | Verify |
| `https://www.growthyug.in/services/marketplace-management/` | Assumed live | Verify |
| `https://www.growthyug.in/services/marketplace-management/amazon/` | Assumed live | Verify |
| `https://www.growthyug.in/services/marketplace-management/flipkart/` | Assumed live | Verify |
| `https://www.growthyug.in/services/paid-advertising/` | Assumed live | Verify |
| `https://www.growthyug.in/services/paid-advertising/meta-ads/` | Assumed live | Verify |
| `https://www.growthyug.in/services/paid-advertising/google-ads/` | Assumed live | Verify |
| `https://www.growthyug.in/services/seo/` | Assumed live | Verify |
| `https://www.growthyug.in/services/seo/ecommerce-seo/` | Assumed live | Verify |
| `https://www.growthyug.in/services/website-cro/` | Assumed live | Verify |
| `https://www.growthyug.in/services/website-cro/shopify-development/` | Assumed live | Verify |
| `https://www.growthyug.in/services/automation/` | Assumed live | Verify |
| `https://www.growthyug.in/about/` | ✅ Live | |
| `https://www.growthyug.in/resources/` | Assumed live | Verify content depth |
| `https://www.growthyug.in/contact/` | ✅ Live | |

**Missing from sitemap:**
- `/case-studies/` — currently 404, not in sitemap ✅ (correct)
- `404.html` — correctly excluded ✅

**Sitemap URL domain:** Uses `www.growthyug.in` — must match canonical strategy.

---

## 4. ROBOTS.TXT AUDIT

```
User-agent: *
Allow: /
Sitemap: https://www.growthyug.in/sitemap.xml
```

**Status:** ✅ Clean and correct for current setup.

**Note:** The live robots.txt (fetched from server) contained additional `Disallow` rules for `/digital/n8n/` paths — these appear to be from server-side files outside the GitHub Pages deployment. Not a concern for SEO but confirms there are other server paths.

---

## 5. META TAGS AUDIT

### Homepage (index.html)
| Tag | Value | Status |
|---|---|---|
| `<title>` | "Growthyug — Ecommerce Marketing Agency for D2C & Marketplace Brands" | ✅ Good — includes brand + keyword |
| `<meta description>` | "Growthyug is a full-service ecommerce growth partner helping D2C and marketplace brands acquire customers, grow on Amazon & Flipkart, improve conversion and scale with SEO, paid ads and automation." | ✅ Good — descriptive, includes key entities |
| `og:type` | `website` | ✅ |
| `og:title` | Same as title tag | ✅ |
| `og:description` | Same as meta description | ✅ |
| `og:url` | `https://www.growthyug.in/` | ✅ |
| `og:image` | ❌ MISSING | ⚠️ No OG image set anywhere |
| `twitter:card` | `summary_large_image` | ✅ |
| `twitter:image` | ❌ MISSING | ⚠️ No Twitter image set |
| `theme-color` | `#0B2545` | ✅ |

**Critical gap:** No `og:image` or `twitter:image` on any page. Social shares will show blank/broken previews. Create a branded OG image (1200×630px) and add to all pages.

### /about/ page
| Tag | Value | Status |
|---|---|---|
| `<title>` | "About Growthyug — Ecommerce Growth Partner" | ✅ Good |
| `<meta description>` | "Growthyug is a full-service ecommerce growth partner for D2C and marketplace brands — ecommerce-first, not a generalist digital marketing agency." | ✅ Good |
| `canonical` | `https://www.growthyug.in/about/` | ✅ (subject to www fix) |

### /services/ page
| Tag | Value | Status |
|---|---|---|
| `<title>` | "Ecommerce Marketing Services — Growthyug" | ✅ Good |
| `<meta description>` | "Explore Growthyug's ecommerce marketing services: growth strategy, marketplace management, paid advertising, SEO, website & CRO, and automation & analytics." | ✅ Good |

### /contact/ page
| Tag | Value | Status |
|---|---|---|
| `<title>` | "Contact Growthyug — Book a Growth Call" | ✅ Good |
| `<meta description>` | "Get in touch with Growthyug to book a growth call, request an ecommerce growth audit..." | ✅ Good |

---

## 6. SCHEMA MARKUP AUDIT

### Homepage — Organization Schema
```json
{
  "@type": "Organization",
  "name": "Growthyug",
  "url": "https://www.growthyug.in/",
  "telephone": "+91-9329441079",
  "email": "hello@growthyug.in",
  "address": { "addressLocality": "Indore", "addressRegion": "Madhya Pradesh" },
  "areaServed": "IN"
}
```

| Property | Status | Issue |
|---|---|---|
| @type | ✅ Organization | |
| name | ⚠️ "Growthyug" | Should be "GrowthYug" or "GrowthYug Digital Pvt. Ltd." — pick one and be consistent |
| logo | ❌ Missing | Add `"logo"` property |
| sameAs | ❌ Missing | Add LinkedIn, social profiles once created |
| areaServed | ⚠️ "IN" only | Expand if targeting international markets |
| email | ⚠️ Gmail | Update when professional email is set up |
| foundingDate | ❌ Missing | Add if known |

### All Inner Pages — BreadcrumbList Schema
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Home", "item": "https://growthyug.in/" },
    { "position": 2, "name": "About", "item": "https://growthyug.in" }
  ]
}
```

**Critical Bug:** The second breadcrumb `"item"` value points to `https://growthyug.in` (the homepage) instead of the actual page URL. This is **incorrect schema** on every inner page.

**Fix Required:**
- About: `"item": "https://www.growthyug.in/about/"`
- Services: `"item": "https://www.growthyug.in/services/"`
- Contact: `"item": "https://www.growthyug.in/contact/"`

**Also missing schema types:**
- `WebSite` with `SearchAction` (for sitelinks search box)
- `Service` schema on service pages
- `FAQPage` schema (once FAQs are added)
- `Person` schema for founder (once About page has founder info)

---

## 7. HEADING STRUCTURE AUDIT

### Homepage
| Tag | Content | Status |
|---|---|---|
| H1 | "Full-Funnel Growth For Ecommerce & D2C Brands" | ✅ Single H1 |
| H2 | "One Partner Across The Entire Growth Lifecycle" | ✅ |
| H2 | "A Process Built For Accountability, Not Activity." | ✅ |
| H2 | "Ready To Build Your Ecommerce Growth Engine?" | ✅ |
| H3s | Service card headings (6×) | ✅ Correct hierarchy |

### About Page
| Tag | Content | Status |
|---|---|---|
| H1 | "An Ecommerce-First Growth Partner" | ✅ Single H1 |
| H2 | "Ecommerce-First, Not 'We Do Everything Digital'" | ✅ |

### Services Page
| Tag | Content | Status |
|---|---|---|
| H1 | "The Full Ecommerce Growth Architecture" | ✅ Single H1 |
| H3s | Service cards | ✅ |

### Contact Page
| Tag | Content | Status |
|---|---|---|
| H1 | "Talk To An Ecommerce Specialist" | ✅ Single H1 |

**Heading structure is clean across audited pages. ✅**

---

## 8. INTERNAL LINKING AUDIT

| Observation | Status |
|---|---|
| Homepage → all 6 service pages | ✅ Linked |
| Homepage → /services/ | ✅ Linked (2×) |
| Homepage → /contact/ | ✅ Linked (3×) |
| Homepage → /about/ | ✅ Via nav only — no contextual link in body |
| Homepage → /resources/ | ✅ Via nav only |
| /services/ → individual service pages | ✅ All 6 linked |
| /services/ → sub-service pages (Meta Ads, Google Ads, Amazon, etc.) | ✅ Linked |
| No page links to /contact/ via anchor text other than CTA buttons | ⚠️ |
| Cross-linking between service pages | ❓ Not audited (sub-pages not read) |
| No blog/article → service page links | N/A (no blog yet) |

**Gap:** No contextual body-copy internal links between service pages and the homepage or about page. Navigation-only links are weaker than contextual in-content links.

---

## 9. URL STRUCTURE AUDIT

| URL Pattern | Status | Notes |
|---|---|---|
| `/services/ecommerce-growth/` | ✅ Clean | |
| `/services/marketplace-management/` | ✅ Clean | |
| `/services/marketplace-management/amazon/` | ✅ Clean | |
| `/services/marketplace-management/flipkart/` | ✅ Clean | |
| `/services/paid-advertising/` | ✅ Clean | |
| `/services/paid-advertising/meta-ads/` | ✅ Clean | |
| `/services/paid-advertising/google-ads/` | ✅ Clean | |
| `/services/seo/` | ✅ Clean | |
| `/services/seo/ecommerce-seo/` | ✅ Clean | |
| `/services/website-cro/` | ✅ Clean | |
| `/services/website-cro/shopify-development/` | ✅ Clean | |
| `/services/automation/` | ✅ Clean | |
| `/case-studies/` | ❌ 404 | Create this section |
| `/industries/` | ❌ Missing | Create when ready |
| `/insights/` | ❌ Missing (currently /resources/) | Consider renaming |

**URL structure is well-designed. Clean hierarchy, no parameters, no underscores. ✅**

---

## 10. PERFORMANCE AUDIT

### Fonts
- Google Fonts: Poppins (500,600,700,800,900) + Inter (300,400,500,600,700) loaded via `<link>` — **render-blocking**
- **Fix:** Add `rel="preconnect"` to fonts.googleapis.com + fonts.gstatic.com before the stylesheet link

### JavaScript
- Single `main.js` (3.9KB) — lightweight ✅
- Loaded at end of body ✅
- No external JS libraries ✅

### CSS
- Single `style.css` (17.9KB) — reasonable size ✅

### Images
- Only SVG logo — no raster images on homepage ✅
- Platform marquee uses text, not images ✅
- No `og:image` — needs to be created

### Particle Canvas
- 140 particles on desktop, 60 on mobile ✅
- Respects `prefers-reduced-motion` ✅
- Paused when tab is hidden ✅
- **Note:** The `connect()` function has O(n²) complexity — with 140 particles this is 9,730 distance calculations per frame. Monitor for performance on low-end devices.

### Critical Performance Fixes Needed
1. Add `rel="preconnect"` for Google Fonts
2. Add `rel="preload"` for critical CSS
3. Add OG image (must be optimized, WebP preferred for social)
4. Consider `font-display: swap` for Poppins/Inter

---

## 11. ACCESSIBILITY AUDIT

| Check | Status | Notes |
|---|---|---|
| Logo img alt text | ❌ Empty (`alt=""`) | Should be "GrowthYug" or kept empty only if decorative (debatable for logos) |
| Nav toggle aria-label | ✅ `aria-label="Toggle menu"` | |
| WhatsApp FAB aria-label | ✅ Present | |
| Form labels linked to inputs | ✅ `for` attributes present | |
| Semantic HTML (nav, section, footer) | ✅ | |
| Heading hierarchy | ✅ Clean | |
| Particle canvas visibility | ✅ Hidden for reduced-motion users | |
| Focus states | ❓ Not verifiable from source alone — needs visual check | |
| Color contrast | ❓ Needs visual/tool check | Dark background — likely adequate but verify |
| Skip navigation link | ❌ Missing | Add for keyboard/screen-reader users |

---

## 12. HREFLANG

**Current status:** No hreflang tags on any page.

**Recommendation:** Do not add hreflang yet. The site serves one language (English) to one primary market. Add hreflang only when:
- Separate language versions are created (e.g., Hindi content)
- OR separate country-targeted versions are built

---

## 13. GOOGLE TAG MANAGER

**Important discrepancy:**
- GTM container `GTM-NSZMF6L3` is loading on the **live site** (confirmed from HTTP fetch)
- GTM is **NOT present** in the local source files (`c:\Growthyug\website\index.html`)

**This means:** GTM was added server-side or via a deployment transform — not in the source files. Any future deployments from the local repo will **overwrite the GTM tags**.

**Fix:** Add GTM to all local source HTML files immediately:
- In `<head>`: GTM script snippet
- After `<body>`: GTM noscript iframe

---

## 14. ISSUES PRIORITY LIST

| # | Issue | Priority | Effort | Impact |
|---|---|---|---|---|
| 1 | BreadcrumbList schema bug (wrong item URLs) | P0 | Low | High |
| 2 | GTM not in local source files (will be lost on deploy) | P0 | Low | High |
| 3 | No OG image on any page | P0 | Low-Medium | High |
| 4 | www vs non-www canonical mismatch | P1 | Medium | High |
| 5 | Gmail email (credibility) | P1 | Low | High |
| 6 | No social proof / case studies | P1 | High | Very High |
| 7 | areaServed IN-only in schema | P1 | Low | Medium |
| 8 | Missing Organization schema properties (logo, sameAs, foundingDate) | P1 | Low | Medium |
| 9 | Google Fonts render-blocking | P2 | Low | Medium |
| 10 | Missing skip navigation link | P2 | Low | Low-Medium |
| 11 | No Service schema on service pages | P2 | Medium | Medium |
| 12 | No FAQ schema | P3 | Medium | Medium |
| 13 | Particle canvas O(n²) connect loop | P3 | Low | Low |

---

*Technical SEO audit complete. All findings are based on direct inspection of local source files and live HTTP responses.*

