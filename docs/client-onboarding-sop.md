# GrowthYug — Client Onboarding Standard Operating Procedure (SOP)

**Objective:** Onboard new ecommerce & D2C clients within 72 hours with zero friction, establish unified communication channels, verify tracking instrumentation, and launch the first 30-day execution sprint.

---

## ⏱️ THE 72-HOUR ONBOARDING TIMELINE

```
Hour 00–24: Agreement Signed & Welcome Email Sent
Hour 24–48: Partner Access Collected & Tracking Verification
Hour 48–72: Internal Diagnostic & Kickoff Strategy Deck Prepared
Hour 72:    Strategy Kickoff Call & Execution Sprint Begins
```

---

## 📋 STEP 1: WELCOME EMAIL & COMMUNICATIONS SETUP

Within 2 hours of payment receipt, send the official welcome email containing:

1. **Dedicated Client Communication Channel:**
   - Create a dedicated **WhatsApp Executive Group** (e.g. `[Brand Name] x GrowthYug Growth Hub`) with the Founder, CMO/Director, and GrowthYug's Lead Strategist (Ajay Harchandani) + Account Manager.
   - For enterprise accounts: Set up a shared **Slack Connect Channel**.
2. **Designated Weekly Sync Schedule:**
   - Lock in a recurring 45-minute weekly strategy sync (e.g. Every Tuesday at 11:00 AM IST).

---

## 🔐 STEP 2: PARTNER ACCESS CHECKLIST

Send the client our standardized partner access instructions:

| Platform | Access Method | Permission Level |
|---|---|---|
| **Shopify Store** | Send Collaborator Request via Shopify Partner Dashboard | Themes, Products, Analytics, Apps, Settings |
| **Meta Business Manager** | Request Partner Access to Pixel, Ad Account, and Catalog (`GrowthYug BM ID`) | Manage Campaigns, View Insights |
| **Google Ads** | Send Link Request from GrowthYug MCC Account | Standard / Administrative |
| **Google Analytics 4 & GTM** | Add `growthyug@gmail.com` as Administrator | Full Edit & Publish Permissions |
| **Amazon Seller Central** | Invite User via Settings > User Permissions | Advertising, Catalog, Inventory, Reports |
| **Flipkart Seller Hub** | User Management > Add Sub-User | Advertising & Catalog Manager |
| **Klaviyo / WhatsApp CRM** | Settings > Users > Add Account Member | Manager / Admin |

---

## 🛠️ STEP 3: TECHNICAL TRACKING & DATA HEALTH VERIFICATION

Before spending ₹1 in ad budget or altering listings, the technical lead must verify:

- [ ] **Meta Conversions API (CAPI):** Verify server-side events are firing via Shopify native integration or Stape/GTM server-side container. Event Quality Score must be &ge; 8.0.
- [ ] **GA4 Ecommerce Purchase Events:** Verify `transaction_id`, `value`, `currency`, and `items` array are passing dynamically without duplication.
- [ ] **Google Ads Enhanced Conversions:** Enabled and verified in Google Ads conversion settings.
- [ ] **Amazon Brand Analytics & Attribution:** Tagged and verified for external traffic tracking.

---

## 📊 STEP 4: REAL-TIME DASHBOARD SETUP

1. Connect the client's ad accounts and Shopify store to our standardized **Looker Studio / Growth Dashboard**.
2. Key KPI widgets configured:
   - **Blended MER (Marketing Efficiency Ratio)**
   - **First-Time vs. Returning Customer Revenue Split**
   - **Blended CAC vs. Channel CAC (Meta / Google / Amazon)**
   - **Real Contribution Margin After COGS, Shipping & RTO**

---

## 🎯 STEP 5: STRATEGY KICKOFF CALL AGENDA (DAY 3)

**Duration:** 45 minutes  
**Attendees:** Client Leadership + Ajay Harchandani + Growth Squad

```
[00–10 min] → Alignment on 90-day North Star Revenue & Margin Targets
[10–25 min] → Review of Technical Audit Findings & Friction Fixes
[25–35 min] → Presentation of Month 1 Creative Testing & Channel Roadmap
[35–45 min] → Deliverables Sign-off & First Week Action Items
```
