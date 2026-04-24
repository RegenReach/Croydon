# findings.md — Research & Discoveries

## Business: Croydon Bake House

### Core Identity
- **Name:** Croydon Bake House (also listed as Croydon Bakehouse)
- **Type:** Artisan bakery + café
- **Location:** 150 Main Street, Croydon, VIC 3136, Australia
- **Phone:** 03 9725 3161 / +61 3 9751 3161
- **Website (current):** croydonbakehouse.com.au (connection refused — likely no live site or basic placeholder)
- **Facebook:** facebook.com/croydonbakehouse
- **Online ordering:** Uber Eats listed

### Operating Hours
| Day | Hours |
|-----|-------|
| Monday–Saturday | 6:00 AM – 5:30 PM |
| Sunday | 7:00 AM – 3:00 PM |

### Menu Highlights
**Savoury:**
- Vietnamese Pork Rolls (most popular — customers ask for extra pork)
- Steak & Cheese Pies
- Steak & Mushroom Pies
- Sausage Rolls
- Sandwiches

**Sweet:**
- New York Cheesecake
- Cinnamon Donut Rings
- Apple & Cinnamon Scrolls
- Custard Tarts / Custard Desserts
- Various pastries

**Drinks:**
- Coffee
- Cool drinks

**Eat-in:** Compact seating area, magazine browsing

### Brand Perception
- 5.0 star rating — highly regarded locally
- Loyal customer base (years of return visits)
- Known for quality and good customer service
- Warm, community-oriented neighbourhood bakery
- "Good assortment of breads, pastries and lunch staples"

### Competitor/Context
- Located on Croydon Main Street precinct (active local shopping strip)
- Eastern Melbourne suburbs (Maroondah area)

### Visual Identity Clues
- No live website found (croydonbakehouse.com.au connection refused)
- No confirmed brand colours or logo found yet — to gather from client
- Warm, artisan, community-bakery feel inferred from reviews

### Constraints
- Current website: none or broken — building from scratch
- No existing design assets confirmed

---

## Session 3 — 2026-04-24 Discoveries

### Checkout Architecture
- Site has two distinct customer types with different checkout flows:
  - **Individual**: Pays online → pickup from 150 Main St, Croydon
  - **Business**: Quote request → email to owner → owner contacts them
- Payment processor chosen: **Stripe** (Apple Pay + Google Pay via Payment Request Button)
  - Requires HTTPS hosting, Stripe account, and a backend (Netlify Function)
  - Apple Pay also requires domain verification file at `.well-known/`
- Email service chosen: **EmailJS** (client-side, no backend needed)
  - Free tier: 200 emails/month — sufficient for quote volume
  - Owner must create template with variables: customer_name, business_name, abn, customer_email, customer_phone, cart_items, notes

### ABN Requirement
- Australian Business Number: 11 digits, formatted as XX XXX XXX XXX
- Required for all business customers — legal/compliance reason
- Auto-format implemented on input; 11-digit validation on submit

### UI/UX Pro Max Compliance (from nextlevelbuilder/ui-ux-pro-max-skill)
- Progressive disclosure: payment section hidden behind "Proceed to Payment" button
- Trust signals: "Secure checkout powered by Stripe" badge, pickup address displayed before payment
- Step indicator: "1 Your Details → 2 Payment" for individual checkout
- 67 UI styles reference used: warm artisan minimalism with bakery heritage elements
- Color palette maintained from claude.md brand tokens throughout

### Deployment Notes
- Static site deployable to Netlify (drag & drop project/ folder)
- netlify.toml created: publish="project", functions="netlify/functions"
- Stripe secret key must be set in Netlify env vars as STRIPE_SECRET_KEY
- For local dev: `npm install stripe` in project root, then `netlify dev`
