# Royal Trip — Marketing Website

Public-facing marketing site for Royal Trip, an Iraq-based travel and international mobility agency in As Sulaymaniyah.

**Separate from the Royal Trip ERP project.** Different repo, different trust boundary. No backend, no auth, no ERP data connection at this stage. Don't architect in a way that blocks a future ERP connection, but don't build toward it now either.

## Stack

- **Next.js (App Router) + TypeScript + Tailwind v4**, `src/` dir, `@/*` import alias
- **Static export mode** — `output: "export"` in `next.config.ts`, `images.unoptimized: true`
- Deploy target: **AWS Amplify Hosting** (or S3 + CloudFront)
- No backend. No database. No contact form for now.

## Scope — 3 pages, English only

| Route | Purpose |
|---|---|
| `/` | Home — hero, services overview, how it works, CTA |
| `/info` | About + Services + disclaimers combined |
| `/contact` | Phone, WhatsApp, address, map, social links |

Service cards link to `/contact`. There are **no per-service sub-pages** in this phase.

## Brand

| Token | Value |
|---|---|
| Primary maroon | `#961A1F` |
| Deep maroon (footer, hover) | `#720000` |
| Maroon tint (section washes) | `#FBEBEA` |
| Cream / off-white | `#FDFFFC` |
| Body text | `#1A1A1A` |
| Muted text | `#6B6B6B` |
| Border | `#E7E2E0` |

- **Tagline:** "First Class Service Everytime"
- **Logo:** "Royal Trip" wordmark with a stylized `R`. An Arabic/Kurdish lockup exists but isn't needed — site is English-only.
- **Typography:** Fraunces (serif, display/headlines, italic used for brand voice) + Manrope (sans, body and UI). Loaded via `next/font/google`.

Brand manual specifies the logo must never be rotated, distorted, gradient-filled, outlined, or given effects. Keep clear space around it equal to the wordmark's cap height.

## Design direction

Grounded in travel documents and route maps, **not** generic SaaS cards.

- Hero pairs the headline with a passport-stamp SVG: dashed concentric rings, a dotted flight-path arc between two dots, a star at the destination, and the tagline set in the stamp.
- "How it works" is a **route line** — a dot per step with a dashed connector between them, labeled by stage (Sulaymaniyah → In review → Confirmed → Destination). Not numbered `01 / 02 / 03` cards.
- Services are a **hairline grid** (`gap-px` over a border-colored background) rather than eight identical drop-shadowed cards.
- Spend boldness on the hero stamp; keep everything else quiet.
- Avoid: all-caps eyebrow labels above every heading, `→` appended to button text, gradient washes as decoration, fade-up animation on every section.

Quality floor: responsive to mobile, visible keyboard focus, reduced motion respected, accessible contrast.

## Content

### Home
- Eyebrow: "Iraq-based travel & mobility agency"
- H1: "The world is closer with **Royal Trip.**" (brand name in italic maroon)
- Sub: First class service, everytime. Flights, hotels, visas, study placements, and immigration support — planned by people who pick up the phone.
- CTAs: "Start planning" → `/contact`; "or call +964 773 519 9595"
- Trust bar: "Visas prepared for the UK, Canada, US, Ireland, New Zealand, Australia, and Schengen countries — Greece, France, Spain, Italy, Belgium, Czech Republic, Hungary, Portugal, Sweden, Norway, Switzerland, Austria, Finland, Netherlands, and Poland."

**Services (11, each links to `/contact`):**
Flights · Hotels · Visas · Study Abroad · Immigration · Travel Groups · Medical Travel · International Investment · Transfers · Insurance · Translation

**How it works (4 steps):**
1. Sulaymaniyah — Tell us where you're going. Call, message, or stop by.
2. In review — Get a verified proposal. We check routes, requirements, and pricing before anything is confirmed.
3. Confirmed — Lock it in with an advisor. A real person walks you through documents, costs, and dates.
4. Destination — Travel with support. We stay reachable before you leave and while you're away.

### Info
**Positioning:** Royal Trip helps individuals, families, students, and businesses plan and complete journeys with clarity and reliable human support.

**Mission:** To become Iraq's most trusted travel partner by combining accurate information, responsive service, transparent processes, and genuine care for every traveler.

**Values:** Customer care · Clarity · Reliability · Knowledge · Transparency · Growth

**Full service descriptions** — Flights, Hotels, Visa Services, Study Abroad, Immigration & Residency, Travel Groups, Medical Travel, International Investment, Transfers, Insurance, Translation.

**Visa track record stats (4, alongside the volume line):** United Kingdom 40% · Canada 20% · Schengen countries 55% · Yearly error margin — none currently reported.

**Disclaimers block (required):** Visa approvals, admissions, and residency decisions are made solely by the relevant embassy, university, or government authority — Royal Trip prepares and submits applications but cannot guarantee outcomes. Prices are subject to confirmation at time of booking. Any approval-rate figures are historical averages, not predictions for an individual case.

### Contact
- **Address:** Andazaran street, As Sulaymaniyah, Iraq
- **Maps:** https://maps.app.goo.gl/gHdvYcDcarV4Wm9N7?g_st=ipc
- **Phones:** +964 773 519 9595 · +964 773 222 4000
- **WhatsApp:** https://wa.me/9647735199595
- **Facebook:** https://www.facebook.com/royaltrip2021/
- **Instagram (label all three):**
  - Royal Trip (Travel) — https://www.instagram.com/royaltrip.travel/
  - Royal Trip Visa — https://www.instagram.com/royaltrip.visa
  - Royal Trip Groups — https://www.instagram.com/royal.groups.center

> ⚠️ The old stationery pack shows **Ashty, As Sulaymaniyah** and **0773 507 9797**. Both are **superseded** — do not use them anywhere on the site.

## Visa coverage (for copy accuracy)

Canada · United Kingdom · United States · Ireland · New Zealand · Australia · Schengen (Greece, France, Spain, Italy, Belgium, Czech Republic, Hungary, Portugal, Sweden, Norway, Switzerland, Austria, Finland, Netherlands, Poland)

Approval-rate data below IS approved for public display, per owner decision.

## Deployment

- Root domain (e.g. `royaltripiraq.com`) → this marketing site
- Subdomain (e.g. `app.royaltripiraq.com`) → the ERP
- Registrar is GoDaddy, same AWS account as the ERP. Decide during setup whether DNS moves to Route 53 or stays on GoDaddy.
- Amplify build settings: `npm ci` → `npm run build` → artifacts in `out/`

## Open items

- Extract/vectorize the logo from the PDF stationery pack, or source a clean SVG/AI file
- Finalize domain + DNS plan
- Optional later: Formspree-backed contact form (static POST, no backend)
- A 23-section "Complete Website Content Pack" exists for future phases (Flights, Hotels, Visas, Study Abroad, Immigration, Groups, Medical, Investment, corporate + legal pages, SEO, phased launch). Out of scope now.
