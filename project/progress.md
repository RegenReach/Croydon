# progress.md — What Was Done, Errors, Tests, Results

## Session 1 — 2026-03-21

### Completed
- [x] Read B.L.A.S.T. protocol file
- [x] Read all ui-ux-pro-max skill files (SKILL.md, design, brand)
- [x] Researched Croydon Bake House via web search (Yelp, Croydon Main Street, TripAdvisor, Uber Eats)
- [x] Created findings.md, task_plan.md, progress.md, claude.md
- [x] Initiated Protocol 0: Initialization

### Completed (Session 2 — 2026-03-21)
- [x] Answered all 5 Discovery questions
- [x] Read products CSV — all categories confirmed
- [x] Fetched reference site (cakesandcookies.com.au)
- [x] Extracted brand color from logo.png (#2C1208 dark chocolate brown)
- [x] Updated claude.md with confirmed Blueprint + brand tokens
- [x] Built index.html — full site, 8 sections
- [x] Built styles.css — complete design system, mobile-first, accessible
- [x] Built script.js — tabs, lightbox, form validation, nav, back-to-top
- [x] Local server running at http://localhost:3000 via `npx serve`

### Errors / Notes
- croydonbakehouse.com.au: ECONNREFUSED — no live website currently
- Facebook page exists: facebook.com/croydonbakehouse
- Uber Eats listing exists
- No logo or brand assets confirmed yet — need from client

---

## Session 3 — 2026-04-24

### Completed
- [x] Added ABN field (auto-formatted XX XXX XXX XXX) to cart.html and index.html — shown/required only for Business type
- [x] Split cart.html checkout flow: Individual → pay by Apple Pay/Google Pay (pickup only); Business → quote email to owner
- [x] Integrated Stripe.js Payment Request Button (Apple Pay / Google Pay) with lazy init — only loads when user clicks "Proceed to Payment"
- [x] Added EmailJS integration for business quote emails (placeholder keys — owner must configure)
- [x] Created netlify/functions/create-payment-intent.js serverless function for Stripe Payment Intent creation
- [x] Created netlify.toml with publish dir and functions path
- [x] Replaced "Latest News" blog section on index.html with heritage "Established Since" section
  - Dark chocolate brown background, gold year number, 4 stat blocks, dynamic years-since calculation
  - Year placeholder: 1998 — owner must confirm actual year
- [x] Added inline quantity stepper to product cards (click "Add to Cart" → qty stepper → confirm)
- [x] Added `price` field to all PRODUCTS categories in script.js (placeholder prices)
- [x] Updated `addToCart(item, qty)` to accept quantity parameter and store price
- [x] Updated nav/footer links: "Blog" → "Our Story" pointing to #heritage
- [x] Added checkout step indicator ("Step 1: Your Details → Step 2: Payment") for individual flow
- [x] Added "Proceed to Payment" button — gates Stripe panel behind form validation
- [x] Added secure badge ("Secure checkout powered by Stripe") per UI/UX Pro Max trust signal rules
- [x] Updated progress.md, findings.md, task_plan.md per B.L.A.S.T. protocol

### Errors / Notes
- Stripe Payment Request Button requires HTTPS and a real publishable key — will show fallback on local file://
- EmailJS send is skipped if service/template IDs contain "REPLACE" (placeholder guard)
- Establishment year 1998 is a placeholder — owner confirmed they are unsure; update `EST_YEAR` in index.html and heritageYear span
- Placeholder prices (pies $8, pastries $6.50, slices $5.50, cakes $28, cookies $3) — owner must confirm before going live
