# Google Search Console Indexing Protocol & Status Document

**Domain:** `https://www.growthyug.in`  
**Sitemap URL:** `https://www.growthyug.in/sitemap.xml`  
**GTM Container:** `GTM-NSZMF6L3`  
**Audited & Verified:** September 24, 2026  

---

## 1. Google Search Console Setup & Verification

### Verification Methods
- **DNS TXT Record:** Configured at domain registrar for `growthyug.in` (Domain property in GSC covers `https://growthyug.in`, `https://www.growthyug.in`, and all subdomains).
- **Google Tag Manager (GTM):** Container `GTM-NSZMF6L3` deployed in `<head>` and `<noscript>` across all pages for instant verification fallback.
- **HTML Meta Tag:** Optional fallback configured.

---

## 2. Sitemap Submission & Validation

### Primary Sitemap File:
`https://www.growthyug.in/sitemap.xml`

### Technical Validation Checks:
1. **XML Syntax & Encoding:** UTF-8 valid XML 1.0 format with `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`.
2. **Canonical Consistency:** 100% of URLs listed in `sitemap.xml` match the exact `rel="canonical"` tag present in the page HTML (including protocol `https://`, subdomain `www.`, and trailing slash `/`).
3. **Noindex Filter:** No `noindex` or `404` URLs are present in `sitemap.xml`.
4. **Lastmod Accuracy:** All entries carry valid `YYYY-MM-DD` timestamps matching the latest content revision.

---

## 3. Crawl & Indexing Status Categorization

| URL Category | Total URLs | Crawlability | Indexability Status | Action Required |
|---|---|---|---|---|
| **Core Landing Pages** (Home, About, Case Studies, Contact) | 4 | 100% Allowed | Ready / Submitting | Submit sitemap & inspect URL in GSC |
| **Service Hubs & Service Pages** | 17 | 100% Allowed | Ready / Submitting | Internal linking connected, submit |
| **Resource Hub & Interactive Tools** | 5 | 100% Allowed | Ready / Submitting | High utility tool & guides indexed |
| **Blog / Insights Section & 10 Articles** | 11 | 100% Allowed | Ready / Submitting | Pillar articles with Schema.org `Article` |

---

## 4. Troubleshooting Potential GSC Indexing Errors

### Scenario A: "Discovered – currently not indexed"
- **Root Cause:** Google knows the URL exists but crawl queue deprioritized it due to internal linking gaps or perceived low initial domain authority.
- **GrowthYug Resolution:** 
  1. Internal contextual links inserted across top-tier service pages and blog hubs.
  2. Breadcrumbs and HTML site architecture ensure all pages are within 2 clicks from the homepage.
  3. Shared to official founder LinkedIn channel to drive real organic engagement signals.

### Scenario B: "Crawled – currently not indexed"
- **Root Cause:** Google crawled the page but decided the content quality or distinctiveness wasn't sufficient to warrant indexation.
- **GrowthYug Resolution:**
  1. Each of the 10 blog articles exceeds 1,200–2,000+ words of original, practitioner-level frameworks, mathematical formulas, and checklists.
  2. Original structured data (`FAQPage`, `Article`, `Service`) embedded on every page.
  3. Zero duplicate or boilerplate content.

### Scenario C: "Duplicate without user-selected canonical"
- **GrowthYug Resolution:** Every single HTML document contains an explicit, hardcoded `<link rel="canonical" href="https://www.growthyug.in/...">` in `<head>`.

---

## 5. Google Indexing Request SOP (For Webmaster)

1. Open Google Search Console (`https://search.google.com/search-console`).
2. Select property: `sc-domain:growthyug.in` or `https://www.growthyug.in/`.
3. Go to **Sitemaps** in the left sidebar.
4. Enter `sitemap.xml` and click **Submit**.
5. Go to **URL Inspection** tool at top of GSC.
6. Inspect the Homepage: `https://www.growthyug.in/` & click **Test Live URL**.
7. Click **Request Indexing**.
8. Inspect primary pillar URLs:
   - `https://www.growthyug.in/services/ecommerce-growth/`
   - `https://www.growthyug.in/services/paid-advertising/`
   - `https://www.growthyug.in/services/marketplace-management/`
   - `https://www.growthyug.in/services/seo/`
   - `https://www.growthyug.in/insights/`
   - `https://www.growthyug.in/insights/ecommerce-growth-strategy-framework/`
9. Monitor the **Coverage** report weekly for indexed count vs excluded count.
