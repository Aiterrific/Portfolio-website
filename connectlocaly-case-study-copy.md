# ConnectLocaly — Case Study Copy
Structure and tone match the live CoFundEstate page. [IMAGE] notes mark where exports drop in.

---

## Hero

[IMAGE: connectlocaly landing page, full scroll preview — export from the Landing Page section of the Figma file, same treatment as the cofundestate.ca preview at the top of the CoFundEstate page]

**Case Study**

# ConnectLocaly
**Connecting communities to trusted local home-based businesses.**

ConnectLocaly is a discovery and booking platform for Canada's home-based businesses: the salons, caterers and services that run from someone's home and live or die on word of mouth. Built as a startup project at SkillHat, the product went from field research through design to a working web application built in Bubble.

**Role**
Product Designer (sole designer from mid-project)

**Industry**
Local services marketplace

**Company**
SkillHat, team startup project

**Team**
Cross-functional team of seven: two product managers, a business analyst, a developer, a project manager and two UX designers

**Timeline**
March to June 2024

---

## 01 — Background

Home-based businesses are everywhere and nearly invisible. A stylist running a salon from a North York basement has loyal clients but no way to be found by the neighbourhood around her. Customers, meanwhile, rely on scattered reviews and luck. Our team set out to test whether one platform could serve both sides: help customers discover trusted local providers, and give small owners the reach word of mouth can't.

The project began under the working name Business Connect and became ConnectLocaly as the focus narrowed to home-based businesses, a segment none of the major platforms served directly.

Midway through the program, our second designer left for personal reasons. From that point I carried all design work solo: research synthesis, personas, journeys, wireframes, the design system and every screen, while the team absorbed the schedule pressure together.

---

## 02 — Design process

**Four phases from field research to a working build.** Each phase fed the next, and the small team meant nothing was thrown over a wall.

**01 Discover** — Surveyed customers and business owners, ran in-person interviews with both groups, analyzed responses into findings.

**02 Define** — Built two personas and journey maps for both sides of the marketplace. Framed the problem as paired How Might We statements.

**03 Design** — Crazy 8s sketches into digital wireframes into a token-based design system and high-fidelity screens.

**04 Deliver** — Usability testing with 15 participants drove targeted refinements, then structured handoff to our developer, who built the product in Bubble.

[IMAGE: Design Process diagram — four connected phase cards, export from the FigJam board section "Design Process — four phases"]

---

## 03 — Understanding the problem

The business opportunity statement framed both sides plainly.

**For customers:** how might we enable users to effortlessly discover nearby local businesses and confidently make informed decisions to purchase a product or service?

**For business owners:** how might we help the local business owner expand their reach by showcasing their products and services so that customers purchase from them?

Traditional discovery fails both sides at once. Customers face time-consuming research, thin information and no way to judge credibility. Owners face limited reach, marketing effort with little targeting and no affordable way to stand out. The two failures feed each other, which is what made a two-sided platform the right shape for the solution.

[IMAGE: Business Opportunity Statement — rewritten and rebuilt in FigJam, includes the two HMW cards]

---

## 04 — Gathering insights

Research ran on two tracks: a survey of 15 customers and 10 business owners, and in-person interviews with people on both sides. The samples were small and we treated them that way, as directional evidence to be read alongside the interviews rather than statistics to generalize from. Our own sprint review flagged the sample size in week one, and that discipline shaped how findings were used.

What the responses showed:

**Price and reviews drive customer decisions.** 12 of 15 customers named price as a deciding factor and 10 of 15 named reviews, ahead of location. Trust signals had to sit beside every listing.

**Demand was real on both sides.** 14 of 15 customers said they were likely to try the app. On the business side, owners described relying on word of mouth while wanting reach they couldn't afford through ads.

**Owners were already online, and it wasn't working.** 9 of 10 maintained some online presence across Meta, websites and other social channels, yet still struggled to be found. The problem wasn't absence, it was fragmentation.

**Time and reach were the constraints.** Among owners who answered, time and reach tied as the biggest blocks to promoting their business. Any tool demanding daily upkeep would fail them.

[IMAGE: four rebuilt survey chart cards from FigJam]

---

## 05 — Two people, one platform

Two personas anchored every decision, one per side of the marketplace.

**Priya Chaturvedi**, 34, is a software engineer who recently moved to Kitchener-Waterloo from India. New city, few contacts, high standards: she wants trustworthy local services without hours of research, and review platforms feel noisy. Her frustrations, limited time, no local familiarity, no assurance of credibility, defined the customer side's trust requirements.

**Aiden Brown**, 42, has run Chic Cuts, a home-based unisex salon in North York, for seven years. Loyal clients, stalled growth. He juggles Instagram, Facebook and a website, but word of mouth only reaches so far. His frustrations, limited reach, untargeted marketing effort, low engagement, defined the business side's visibility requirements.

Every screen had to earn Priya's trust without adding to Aiden's workload.

[IMAGE: Priya persona frame — rebuilt in Figma]
[IMAGE: Aiden persona frame — rebuilt in Figma]

---

## 06 — Mapping the experience

Journey maps traced both personas from awareness through beta testing to launch anticipation, surfacing where emotion dipped: Priya's uncertainty waiting on limited information, Aiden's apprehension about an unproven platform. Those dips became design priorities: clear communication for customers, low-effort onboarding and visible payoff for owners.

[IMAGE: customer journey map — rebuilt in FigJam]
[IMAGE: business owner journey map — rebuilt in FigJam]

---

## 07 — From Crazy 8s to wireframes

Ideation started on paper. Crazy 8s rounds forced volume over polish, and the strongest patterns, a category-first home, a search bar with service suggestions, listing cards with reviews up front, moved into digital wireframes. The wireframes locked structure before any visual design: scrollable category lists, product descriptions per service, and a bottom navigation of Home, Bookings, Messages and Profile that survived unchanged into the final product.

[IMAGE: Crazy 8s sketches]
[IMAGE: digital wireframes]

---

## 08 — Prioritizing the MVP

With one designer and one developer, scope discipline was survival. We mapped candidate features by effort and importance and drew a hard line. Account types, listing creation, category browsing, bookmarks and reviews shipped as easy-and-important foundations. Booking with a calendar, direct messaging, Maps-integrated search and the business dashboard were difficult but important, and they got the build time we saved by deferring the rest: a social feed, Instagram photo sync, in-app payments and native mobile apps.

The deferrals were conscious, not accidental. The build log lists following-users under future features, and Instagram sync was marked "if possible" from the first planning document. Cutting them protected the features the research said mattered.

[IMAGE: effort-importance prioritization matrix — FigJam, shipped vs deferred]

---

## 09 — A system before screens

I built the design system before the high-fidelity screens: colour ramps around a primary yellow and deep navy, a Plus Jakarta Sans type scale, spacing tokens, a component library and an icon set. With one designer and one developer, the system was the multiplier: every screen assembled from the same parts, and handoff meant pointing at named components instead of describing pixels.

[IMAGE: design system — typography, colours, components]

**Design decisions, and the findings behind them:**

**Reviews and price on every listing card.** 12 of 15 customers decided on price, 10 of 15 on reviews, so neither hides behind a tap.
Rationale: I put the two decision drivers at the first point of contact, because a trust decision delayed is a customer lost.

**Category-first discovery over open search.** New-to-town users like Priya don't know what to search for.
Rationale: I made browsing the default and search the accelerator, so the platform works before the user knows the neighbourhood.

**Booking and messaging inside the platform.** Owners like Aiden lose leads when contact means switching to Instagram DMs.
Rationale: I kept the whole loop, discover, ask, book, in one place, because every handoff between apps is a drop-off point.

**A dashboard owners can run in minutes.** Time tied as the top constraint for owners.
Rationale: I designed the business side around listing once and updating rarely, respecting the research finding instead of fighting it.

[IMAGE: high-fidelity screens showcase]

---

## 10 — Testing with 15 people, refining what broke

Moderated usability sessions with 15 participants walked the core flows: finding a service, reading a listing, booking. The sessions were directional, not statistically rigorous, and they earned their keep: the before-and-after pairs below show what changed.

**Business profile:** testers skimmed past a flat text header. The refined profile leads with imagery and moves Book Appointment above the fold.

**Home and search:** testers hesitated at a generic prompt. The refined home asks "What service would you like to find?", surfaces categories with icons, adds a location selector and shows popular businesses nearby, giving new users somewhere to start.

[IMAGE: before/after pair — business profile]
[IMAGE: before/after pair — home and search]

---

## 11 — From design to a working product

Design handoff went to our developer, who built ConnectLocaly in Bubble. My side of the handoff: the component library, screen specs, user flows and the database logic the design implied, listing categories, review structures, account types for customers versus owners. The app was deployed as a functional web application: account creation, business listings with Google Maps integration, search with filters, bookmarks, reviews with photos and a business dashboard all worked end to end. The product was positioned for a Greater Toronto Area launch with tiered pricing, a free basic listing and paid premium tiers, before expanding across Canada.

Working one designer to one developer taught me what handoff really is: not a file transfer but a running conversation. Decisions I'd made implicitly in Figma, empty states, edge cases, what happens when a listing has no photos, surfaced as build questions, and answering them made me a better designer of the explicit.

[IMAGE: screenshot of the built Bubble application, if available]

---

## 12 — Results and takeaways

The project proved the core hypothesis at the scale it could: both sides of the market wanted the platform, 14 of 15 customers and a clear majority of surveyed owners, and the team took a research-backed design all the way to a deployed, functional product in four months. Usability testing with 15 participants directly reshaped the two highest-traffic surfaces, home and the business profile. The platform is no longer live; the program ended before a sustained launch.

**The honest gaps.** The research samples were small, 15 customers and 10 business owners, and we used them directionally rather than statistically. Post-launch behavioural data never existed, so the design was validated by testing, not by market adoption. And losing our second designer mid-program meant some artifacts, personas among them, were produced fast and rebuilt properly only later.

**What I would carry forward.** Losing half the design team taught me to scope ruthlessly: the design system existed because there was no time to design screens twice. Pair small surveys with interviews from day one, since 10 open-ended business owner responses taught us more than the percentages did. And treat handoff as a design deliverable with its own quality bar, because the developer is the design's first user.

---

## 13 — Explore the prototype

The clickable prototype walks the core customer journey: landing, discovery by category, a business profile and the booking flow.

[EMBED: Figma prototype, same embed treatment as the CoFundEstate prototype walkthrough.
Prototype URL: https://www.figma.com/proto/nCBkgAJMtYgsgQqZQVnnqB/Connect-Localy?node-id=98-35764&p=f&t=acbanPZBDRKiNcK7-1&scaling=min-zoom&content-scaling=fixed&page-id=98%3A34591&starting-point-node-id=98%3A35761
Embed as an iframe using https://www.figma.com/embed?embed_host=share&url={URL-encoded prototype link}]

---

## Card copy (Explore Case Studies / homepage)

**ConnectLocaly**
Connecting communities to trusted local businesses.
[Card links to /case-studies/connectlocaly — replaces "coming soon" state if present]
