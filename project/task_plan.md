# task_plan.md — Phases, Goals & Checklist

## Project: Croydon Bake House Website

### North Star
Build a warm, professional, mobile-first website for Croydon Bake House that drives foot traffic, showcases the menu, and reflects the bakery's community identity.

---

## Phase 1: B — Blueprint ✅ (In Progress)
- [x] Research business (Google Maps, search, review sites)
- [x] Initialize project memory files
- [ ] Ask 5 Discovery Questions — await client answers
- [ ] Define Data Schema in claude.md
- [ ] Confirm approved Blueprint

## Phase 2: L — Link
- [ ] Confirm tech stack with client
- [ ] Check if domain/hosting exists
- [ ] Confirm any integrations needed (booking, order, social)

## Phase 3: A — Architect
- [ ] Run ui-ux-pro-max design system search
- [ ] Define site architecture (pages/sections)
- [ ] Build component structure

## Phase 4: S — Stylize
- [ ] Apply design system (colors, typography, spacing)
- [ ] Build all sections (Hero, Menu, About, Hours, Contact)
- [ ] Mobile-first responsive implementation
- [ ] Present to client for feedback

## Phase 5: T — Trigger
- [ ] Deploy to hosting (confirm provider)
- [ ] Set up domain
- [ ] Final QA & handoff

---

## Pending Discovery Answers
1. North Star — singular desired outcome? ✅ Drive wholesale enquiries + individual pickup orders
2. Integrations — Stripe (Apple/Google Pay) ✅ + EmailJS ✅ + Google Maps ✅
3. Source of Truth — products CSV ✅, prices TBC from owner
4. Delivery Payload — Netlify static site ✅ (netlify.toml created)
5. Behavioral Rules — Warm B2B tone, no prices shown (wholesale model) ✅

---

## Phase 5: T — Trigger (Owner Action Required)

Before deploying:
- [ ] Confirm establishment year (replace 1998 placeholder)
- [ ] Confirm product prices (replace placeholder values in script.js PRODUCTS)
- [ ] Create Stripe account → get publishable + secret keys
- [ ] Register for Google Pay console (pay.google.com/business/console)
- [ ] Set up Apple Pay domain verification via Stripe dashboard
- [ ] Create EmailJS account → service + template → get 3 IDs
- [ ] Deploy to Netlify → set STRIPE_SECRET_KEY env var
- [ ] Run `npm install stripe` in project root (for Netlify Function)
- [ ] Test Apple Pay on Safari/iPhone over HTTPS
- [ ] Test Google Pay on Chrome over HTTPS
