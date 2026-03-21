# claude.md — Project Constitution

## Project: Croydon Bake House Website

---

## Confirmed Blueprint (Post-Discovery)

| Discovery | Answer |
|-----------|--------|
| North Star | Wholesale bakery site — drive B2B enquiries for slices & pastries |
| Integrations | Booking/enquiry form (top), Google Maps, blog section |
| Source of Truth | `products/Croydon Bake House - Sheet2.csv` |
| Deployment | Vercel (local only until client says go) |
| Style Reference | cakesandcookies.com.au layout; brownish palette from logo |

---

## Brand Tokens

```css
--color-primary:    #2C1208;   /* Dark chocolate brown (from logo) */
--color-primary-hover: #3D1A0A;
--color-secondary:  #C8913A;   /* Warm caramel/golden */
--color-accent:     #F4E6CC;   /* Warm cream */
--color-bg:         #FDFAF5;   /* Off-white warm background */
--color-bg-alt:     #F4E6CC;   /* Section alternation */
--color-text:       #1C0E05;   /* Dark brown text */
--color-text-muted: #6B5244;   /* Muted warm grey-brown */
--color-white:      #FFFFFF;
--color-border:     #E8D5BE;   /* Warm border */

--font-heading:     'Playfair Display', Georgia, serif;
--font-body:        'Lato', 'Helvetica Neue', sans-serif;

--radius-card:      10px;
--radius-btn:       6px;
--shadow-card:      0 4px 20px rgba(44, 18, 8, 0.08);
--shadow-card-hover: 0 8px 32px rgba(44, 18, 8, 0.16);
```

---

## Data Schema

### Business Entity
```json
{
  "name": "Croydon Bake House",
  "tagline": "Premium Wholesale Bakery",
  "address": "150 Main Street, Croydon, VIC 3136",
  "phone": "03 9725 3161",
  "hours": {
    "mon_sat": "6:00 AM – 5:30 PM",
    "sun": "7:00 AM – 3:00 PM"
  },
  "socials": {
    "facebook": "https://www.facebook.com/croydonbakehouse"
  },
  "focus": "wholesale"
}
```

### Product Categories (from CSV)
- **Pie**: Plain, Steak Cheese, Steak Pepper, Shepherd's, Steak Mushroom, Cheese Bacon, Steak & Curry, Steak Chili, Butter Chicken, Meat Pastie (Beef), Vegetable Pastie
- **Roll**: Sausage Roll, Spinach Ricotta Rolls
- **Slice**: Vanilla, Raspberry Jelly, Lemon, Tim Tam, Caramel, Hedgehog, Rocky Road, Peppermint, Cherry Ripe, Lamingtons (Choc), Lamingtons (Strawberry)
- **Cake**: Banana Cake, Banana Bread, Carrot Cake, Apple Cake
- **Scroll**: Apple, Coffee, Cheese & Vegemite
- **Quiche**: Egg & Bacon, Spinach
- **Donut**: (names TBC from client)
- **Cookie**: (names TBC from client)

---

## Architectural Invariants
- Mobile-first, responsive at 375 / 768 / 1024 / 1440px
- No horizontal scroll on any viewport
- Accessible: contrast ≥4.5:1, alt text on all images, keyboard nav
- Fast-loading: WebP images, font-display: swap, lazy loading
- Wholesale tone — B2B professional, warm, not consumer-retail
- Logo: `/logo.png` — dark chocolate brown background, white serif text

## Site Architecture
1. Sticky Nav (Logo + links)
2. Booking/Enquiry Form — TOP of page (hero section)
3. About — Who we are
4. Products — Category tabs + grid
5. Gallery — Facebook photos grid
6. Blog — 3 articles placeholder
7. Contact + Google Maps
8. Footer

## Behavioral Rules
- Tone: Warm, professional, community-oriented — not corporate
- Do Not: No cold/sterile language; no generic unrelated stock photos
- All prices TBC — not listed on site (wholesale enquiry model)
- Gallery images: sourced from Facebook page (facebook.com/croydonbakehouse)

## Tech Stack
- Pure HTML5 / CSS3 / Vanilla JS (zero dependencies, fast)
- Google Fonts: Playfair Display + Lato
- Lucide Icons (CDN)
- Google Maps Embed API (iframe)
- Deployment: Vercel (static) — local only for now

---

*This file is Law. Update only when schema, rules, or architecture change.*
