# MASTER GROWTHYUG ROADMAP
**Last Updated:** 2026-09-24  
**Version:** 1.0 — Post Audit  

---

## EXECUTIVE SUMMARY: CURRENT STATE

Based on the full codebase and live site audit:

### ✅ What's Working
- Positioning is correct: "Ecommerce Growth Partner" — agency-oriented, not SaaS
- Hero copy is clear and commercial
- Service architecture exists (6 service areas with sub-pages)
- Navigation is clean with dropdown
- URL structure is well-organized
- GTM is live (though not in source files — fix needed)
- No false claims on the current live site
- WhatsApp FAB is present
- Contact form uses formsubmit.co (working, no server needed)
- Robots.txt is clean
- Sitemap is complete and referenced

### 🔴 Critical Gaps
1. **Zero social proof** — No client logos, no testimonials, no case studies (/case-studies/ is 404)
2. **Anonymous agency** — No founder name, no team on About page
3. **Gmail address** — hello@growthyug.in used everywhere — credibility risk
4. **BreadcrumbList schema bug** — Wrong item URLs on every inner page
5. **GTM not in source files** — Will be lost on next deployment
6. **No OG image** — Social shares show blank previews
7. **www/non-www canonical mismatch** — Between local source and live server
8. **No blog/insights content** — /resources/ exists but likely thin
9. **No case studies** — Highest-converting proof type, completely missing
10. **Contact form lacks qualification** — No revenue/spend/country fields

---

## PHASE 0: IMMEDIATE FIXES (Days 1–3)
*These block everything else. Do these before any SEO or acquisition work.*

| ID | Task | Priority | Effort | Impact | Owner |
|---|---|---|---|---|---|
| P0-01 | Fix BreadcrumbList schema bug on all inner pages | P0 | 30 min | High | Dev |
| P0-02 | Add GTM snippet to all local HTML source files | P0 | 1 hr | High | Dev |
| P0-03 | Create and add OG image (1200×630) to all pages | P0 | 2 hrs | High | Design |
| P0-04 | Decide www vs non-www canonical strategy and fix | P0 | 1 hr | High | Dev |
| P0-05 | Set up professional email (hello@growthyug.in) | P0 | 30 min | High | Founder |
| P0-06 | Update email in all HTML files and schema | P0 | 30 min | High | Dev |
| P0-07 | Add Google Fonts preconnect links | P0 | 15 min | Medium | Dev |

---

## PHASE 1: FOUNDATION (Days 1–7)

### 1A. Credibility & Proof Infrastructure
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| F1-01 | Founder: answer all 6 questions in credibility-audit.md | P0 | 2 hrs | Critical |
| F1-02 | Add founder name + bio to About page | P0 | 1 hr | Very High |
| F1-03 | Add founder photo to About page | P1 | 30 min | High |
| F1-04 | Create LinkedIn company page for GrowthYug | P0 | 1 hr | Very High |
| F1-05 | Create founder LinkedIn profile (or update existing) | P0 | 1 hr | Very High |
| F1-06 | Add LinkedIn + WhatsApp links to site footer/contact | P1 | 30 min | Medium |
| F1-07 | Collect any existing client testimonials (even informal) | P0 | Ongoing | Critical |
| F1-08 | Create Google Business Profile (Indore address) | P1 | 1 hr | High |

### 1B. Technical Fixes
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| F1-09 | Expand Organization schema: add logo, sameAs, foundingDate | P1 | 30 min | Medium |
| F1-10 | Expand areaServed to include IN, US, GB, AE, AU, CA | P1 | 15 min | Medium |
| F1-11 | Add WebSite schema with SearchAction to homepage | P2 | 30 min | Medium |
| F1-12 | Verify all service sub-page URLs return 200 | P1 | 30 min | High |
| F1-13 | Submit sitemap to Google Search Console | P0 | 15 min | High |
| F1-14 | Submit sitemap to Bing Webmaster Tools | P1 | 15 min | Medium |
| F1-15 | Verify GA4 is receiving data in GTM | P0 | 30 min | Critical |

### 1C. Contact Form Improvement
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| F1-16 | Add qualification fields: Monthly Revenue, Monthly Ad Spend, Country | P1 | 1 hr | High |
| F1-17 | Add WhatsApp link as alternative contact method | P1 | 15 min | Medium |
| F1-18 | Add form success message on-page (currently redirects to ?sent=1) | P2 | 1 hr | Medium |

---

## PHASE 2: CORE WEBSITE (Days 8–30)

### 2A. About Page — Complete Overhaul
The current About page is a placeholder. It must become a trust-building page.

**Required sections:**
1. Hero — "An Ecommerce-First Growth Partner" (keep)
2. Founder section — name, photo, background, why they built this
3. Our Philosophy — (expand current "What We Believe")
4. How We Work — move from homepage or duplicate
5. Technology & AI advantage — brief section
6. Markets served — India + international (accurate)
7. Final CTA

| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| W2-01 | Write and publish complete About page with founder info | P0 | 4 hrs | Very High |
| W2-02 | Add Person schema for founder | P1 | 30 min | Medium |

### 2B. Case Studies Architecture
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| W2-03 | Create /case-studies/ index page | P0 | 2 hrs | Very High |
| W2-04 | For each verifiable result: write full case study (client, challenge, strategy, results) | P0 | 4 hrs each | Critical |
| W2-05 | Add case study links to homepage (new section) | P1 | 1 hr | High |
| W2-06 | Add case study links to relevant service pages | P1 | 1 hr | High |
| W2-07 | Add sitemap entries for /case-studies/ | P1 | 15 min | Medium |

### 2C. Homepage Enhancement
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| W2-08 | Add social proof section (logos/testimonials — only if verified) | P0 | 2 hrs | Very High |
| W2-09 | Add Case Studies preview section (2–3 result cards) | P1 | 2 hrs | High |
| W2-10 | Add FAQ section with 5–8 common questions + FAQ schema | P2 | 2 hrs | Medium |
| W2-11 | Add Industries section (D2C, Fashion, Beauty, Furniture, Electronics) | P2 | 1 hr | Medium |
| W2-12 | Strengthen hero subtext with entity-level SEO clarity | P2 | 30 min | Medium |

### 2D. Service Pages — Depth
Current service pages exist but content depth is unknown (sub-pages not fully audited). Each priority service page must have:
- Clear H1 with commercial keyword
- Problem → Solution → Methodology → Deliverables
- Internal links to related services
- FAQ section
- CTA

| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| W2-13 | Audit and rewrite /services/paid-advertising/ | P1 | 3 hrs | High |
| W2-14 | Audit and rewrite /services/paid-advertising/meta-ads/ | P1 | 3 hrs | High |
| W2-15 | Audit and rewrite /services/paid-advertising/google-ads/ | P1 | 3 hrs | High |
| W2-16 | Audit and rewrite /services/marketplace-management/ | P1 | 3 hrs | High |
| W2-17 | Audit and rewrite /services/marketplace-management/amazon/ | P1 | 3 hrs | High |
| W2-18 | Audit and rewrite /services/ecommerce-growth/ | P1 | 3 hrs | High |
| W2-19 | Audit and rewrite /services/seo/ | P2 | 3 hrs | Medium |
| W2-20 | Audit and rewrite /services/website-cro/ | P2 | 3 hrs | Medium |

### 2E. New Service Pages Needed
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| W2-21 | Create /services/paid-advertising/youtube-ads/ | P3 | 3 hrs | Medium |
| W2-22 | Create /services/marketplace-management/meesho/ | P3 | 3 hrs | Low |
| W2-23 | Create /services/seo/technical-seo/ | P2 | 3 hrs | Medium |
| W2-24 | Create /services/fractional-cmo/ | P2 | 4 hrs | High |

### 2F. Analytics & Conversion Tracking
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| W2-25 | Configure GA4 conversion event for form submissions | P0 | 1 hr | Critical |
| W2-26 | Configure GA4 conversion event for WhatsApp FAB clicks | P0 | 30 min | High |
| W2-27 | Configure GA4 conversion event for phone number clicks | P1 | 30 min | High |
| W2-28 | Set up UTM framework for all outbound links | P1 | 1 hr | High |
| W2-29 | Create GA4 audience for website visitors (for retargeting) | P2 | 30 min | Medium |

---

## PHASE 3: SEO & CONTENT (Days 31–60)

### 3A. Keyword Research & Mapping
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| S3-01 | Research primary commercial keywords (ecommerce agency, D2C marketing, etc.) | P0 | 4 hrs | Critical |
| S3-02 | Research marketplace-specific keywords (Amazon marketing agency India, etc.) | P1 | 2 hrs | High |
| S3-03 | Research informational keywords for blog clusters | P1 | 3 hrs | High |
| S3-04 | Build keyword-to-page canonical map | P1 | 2 hrs | High |
| S3-05 | Identify keyword gaps (terms with demand but no target page) | P1 | 2 hrs | High |

### 3B. On-Page SEO
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| S3-06 | Update all service page title tags with primary keywords | P1 | 1 hr | High |
| S3-07 | Update all service page meta descriptions | P1 | 1 hr | Medium |
| S3-08 | Add Service schema to all service pages | P2 | 2 hrs | Medium |
| S3-09 | Improve H2 structure on all service pages | P2 | 2 hrs | Medium |
| S3-10 | Build internal linking matrix across all pages | P2 | 2 hrs | High |

### 3C. Content Engine Launch
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| S3-11 | Rename /resources/ to /insights/ or add /insights/ | P2 | 1 hr | Medium |
| S3-12 | Publish first 3 pillar articles (Meta Ads, Amazon, Ecommerce SEO) | P1 | 9 hrs | High |
| S3-13 | Publish first 5 supporting articles per cluster | P2 | 15 hrs | High |
| S3-14 | Create 90-day content calendar | P1 | 3 hrs | Medium |
| S3-15 | Set up article template with schema | P1 | 1 hr | Medium |

### 3D. Backlink Foundation
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| S3-16 | Create Clutch profile | P1 | 2 hrs | High |
| S3-17 | Create GoodFirms profile | P1 | 1 hr | Medium |
| S3-18 | Create DesignRush profile | P2 | 1 hr | Medium |
| S3-19 | Create Crunchbase profile | P2 | 1 hr | Medium |
| S3-20 | Identify and approach 10 guest post opportunities | P2 | 5 hrs | Medium |
| S3-21 | Identify podcast opportunities for founder | P3 | 2 hrs | Medium |

---

## PHASE 4: AUTHORITY & ACQUISITION (Days 61–90)

### 4A. Social Media
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| A4-01 | Set up LinkedIn company page content calendar | P1 | 2 hrs | High |
| A4-02 | Publish 3 LinkedIn posts/week (founder authority content) | P1 | Ongoing | High |
| A4-03 | Set up Instagram business profile | P2 | 1 hr | Medium |
| A4-04 | Publish 3 Instagram posts/week (reels + carousels) | P2 | Ongoing | Medium |
| A4-05 | Set up YouTube channel | P3 | 2 hrs | Medium |

### 4B. Outbound Sales
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| A4-06 | Build prospect list (Shopify brands, Amazon sellers) | P0 | Ongoing | Very High |
| A4-07 | Create WhatsApp outbound SOP | P0 | 3 hrs | High |
| A4-08 | Create email outbound sequences (5 per segment) | P1 | 5 hrs | High |
| A4-09 | Create personalized audit outreach template | P1 | 2 hrs | High |
| A4-10 | Set up CRM (Notion, Airtable or HubSpot Free) | P1 | 3 hrs | High |

### 4C. Paid Acquisition (After tracking is solid)
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| A4-11 | Create Google Search campaigns for commercial keywords | P1 | 4 hrs | High |
| A4-12 | Create landing pages for each paid campaign | P1 | 6 hrs | High |
| A4-13 | Set up Meta retargeting for website visitors | P2 | 2 hrs | Medium |
| A4-14 | Test Meta problem/solution creatives | P2 | 3 hrs | Medium |

### 4D. Lead Magnets
| ID | Task | Priority | Effort | Impact |
|---|---|---|---|---|
| A4-15 | Create Ecommerce Growth Audit (PDF/interactive) | P1 | 4 hrs | High |
| A4-16 | Create ROAS Calculator (web tool) | P2 | 8 hrs | Medium |
| A4-17 | Create Ecommerce Growth Checklist | P2 | 2 hrs | Medium |

---

## 6-MONTH GROWTH ROADMAP

| Month | Focus | Key Deliverables |
|---|---|---|
| **Month 1** | Foundation + Technical | Phase 0 + Phase 1 complete. GTM fixed. About page live. Email fixed. GSC + GA4 configured. |
| **Month 2** | Website + Proof | All service pages substantive. Case studies live. Homepage enhanced. Contact form qualified. |
| **Month 3** | SEO + Content | Keyword research complete. First 8 articles published. Backlink profiles created. Outbound system running. |
| **Month 4** | Authority + Scale | 20+ articles published. 3 case studies live. LinkedIn at 500+ followers. 50+ outbound touches/week. |
| **Month 5** | Paid + PR | Google Search campaigns live. Landing pages live. First media mentions. Clutch reviews published. |
| **Month 6** | Optimize + Expand | Optimize paid CAC. International content live. Partnerships established. Content flywheel running. |

---

## KPI DASHBOARD — WEEKLY TARGETS

### SEO
| KPI | Month 1 | Month 3 | Month 6 |
|---|---|---|---|
| Indexed pages | 15 | 25 | 50+ |
| Organic clicks/week | 20 | 150 | 800 |
| Ranking keywords (top 50) | 5 | 40 | 200 |
| Referring domains | 2 | 15 | 50 |

### Content
| KPI | Month 1 | Month 3 | Month 6 |
|---|---|---|---|
| Articles published | 0 | 10 | 30 |
| Case studies live | 1 | 3 | 6 |

### Social
| KPI | Month 1 | Month 3 | Month 6 |
|---|---|---|---|
| LinkedIn followers | 200 | 500 | 1500 |
| LinkedIn posts/week | 3 | 4 | 5 |
| Instagram followers | 100 | 400 | 1500 |

### Outbound
| KPI | Month 1 | Month 2 | Month 3 |
|---|---|---|---|
| Prospects contacted/week | 10 | 30 | 50 |
| Response rate | 5% | 8% | 10% |
| Qualified leads/month | 3 | 8 | 15 |
| Booked calls/month | 2 | 5 | 10 |

### Sales
| KPI | Month 2 | Month 4 | Month 6 |
|---|---|---|---|
| Proposals sent/month | 2 | 5 | 10 |
| Close rate | 20% | 25% | 30% |
| Clients acquired/month | 1 | 2 | 4 |
| MRR | ₹50K | ₹2L | ₹6L |

---

## DEFINITION OF DONE

GrowthYug is ready for aggressive client acquisition when:

- [ ] Positioning is clear and consistent
- [ ] Homepage is fully agency-oriented with proof
- [ ] Founder name and bio live on About page
- [ ] Professional email in use (not Gmail)
- [ ] Services architecture complete (all P1 pages live)
- [ ] At least 2 verified case studies published
- [ ] At least 3 real testimonials published
- [ ] Business claims verified by founder
- [ ] Technical SEO issues resolved (P0 + P1)
- [ ] Sitemap submitted to GSC and Bing
- [ ] GA4 conversion tracking confirmed working
- [ ] WhatsApp tracking working
- [ ] Contact form qualification fields added
- [ ] CRM set up and operational
- [ ] LinkedIn company page + founder page live
- [ ] Google Business Profile created
- [ ] Outbound system built and active
- [ ] Email sequences ready
- [ ] WhatsApp outreach SOP ready
- [ ] At least one lead magnet ready

---

## REQUIRES FOUNDER INPUT (BLOCKED UNTIL CONFIRMED)

| # | Question | Blocks |
|---|---|---|
| 1 | Are the older case study revenue numbers real? | Case studies, proof section |
| 2 | Founder full name and background | About page, schema |
| 3 | Is "8+ years" experience accurate? | About page copy |
| 4 | Which platforms confirmed active experience? | Platform marquee |
| 5 | Professional email setup | All contact points |
| 6 | LinkedIn URLs (company + founder) | Schema, footer links |

---

*This roadmap will be updated after each phase completion.*

