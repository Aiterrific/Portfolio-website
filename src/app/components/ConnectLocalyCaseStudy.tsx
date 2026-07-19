import { CASE_STUDY_WIDTH, CASE_STUDY_BODY_TEXT } from "../data/caseStudyStyles";
import Footer from "./Footer";
import ScrollingScreenshot from "./ScrollingScreenshot";
import ConnectLocalyExpandableImage from "./ConnectLocalyExpandableImage";
import heroLandingPage from "../../assets/connectlocaly/hero-landing-page.png";
import processDiagram from "../../assets/connectlocaly/process-diagram.png";
import opportunityStatement from "../../assets/connectlocaly/opportunity-statement.png";
import surveyFindings from "../../assets/connectlocaly/survey-findings.png";
import personaPriya from "../../assets/connectlocaly/persona-priya.png";
import personaAiden from "../../assets/connectlocaly/persona-aiden.png";
import journeyCustomer from "../../assets/connectlocaly/journey-customer.png";
import journeyBusiness from "../../assets/connectlocaly/journey-business.png";
import crazy8s from "../../assets/connectlocaly/crazy-8s.png";
import wireframeWelcome from "../../assets/connectlocaly/wireframe-welcome.png";
import wireframeHome from "../../assets/connectlocaly/wireframe-home.png";
import wireframeCategory from "../../assets/connectlocaly/wireframe-category.png";
import wireframeListings from "../../assets/connectlocaly/wireframe-listings.png";
import wireframeProfileBooking from "../../assets/connectlocaly/wireframe-profile-booking.png";
import wireframeChat from "../../assets/connectlocaly/wireframe-chat.png";
import wireframeBusinessProfile from "../../assets/connectlocaly/wireframe-business-profile.png";
import prioritizationMatrix from "../../assets/connectlocaly/prioritization-matrix.png";
import designSystem from "../../assets/connectlocaly/design-system.png";
import screensShowcase from "../../assets/connectlocaly/screens-showcase.png";
import beforeAfterProfile from "../../assets/connectlocaly/before-after-profile.png";
import beforeAfterHome from "../../assets/connectlocaly/before-after-home.png";
import {
  CaseStudyNav,
  SectionIntro,
  BodyText,
  Lead,
  ExploreCaseStudies,
} from "./CaseStudyShared";

const WIREFRAMES = [
  { src: wireframeWelcome, alt: "Welcome screen wireframe for ConnectLocaly", caption: "Welcome" },
  { src: wireframeHome, alt: "Home screen wireframe with category browsing and search", caption: "Home" },
  { src: wireframeCategory, alt: "Category browsing wireframe", caption: "Category" },
  { src: wireframeListings, alt: "Listings wireframe", caption: "Listings" },
  { src: wireframeProfileBooking, alt: "Business profile and booking wireframe", caption: "Profile & booking" },
  { src: wireframeChat, alt: "In-app messaging wireframe", caption: "Chat" },
  { src: wireframeBusinessProfile, alt: "Business profile wireframe", caption: "Business profile" },
];

const PROTOTYPE_URL =
  "https://www.figma.com/proto/nCBkgAJMtYgsgQqZQVnnqB/Connect-Localy?node-id=98-35764&p=f&t=acbanPZBDRKiNcK7-1&scaling=min-zoom&content-scaling=fixed&page-id=98%3A34591&starting-point-node-id=98%3A35761";
const PROTOTYPE_EMBED_URL = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(PROTOTYPE_URL)}`;

export default function ConnectLocalyCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <CaseStudyNav />

      {/* ── HERO IMAGE ── */}
      <div className="w-full mt-8">
        <ScrollingScreenshot
          src={heroLandingPage}
          alt="ConnectLocaly landing page, full scroll preview"
          label="connectlocaly.ca"
        />
      </div>

      {/* ── INTRO ── */}
      <section className="pt-10 md:pt-12 pb-12 md:pb-16">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-text font-heading mb-4">
            Case Study
          </p>
          <h1 className="font-serif font-normal text-navy text-4xl md:text-5xl leading-tight mb-3">
            ConnectLocaly
          </h1>
          <p className="text-muted-text text-lg md:text-xl mb-6">
            Connecting communities to trusted local home-based businesses.
          </p>
          <p className={`justify-body ${CASE_STUDY_BODY_TEXT} mb-10`}>
            ConnectLocaly is a discovery and booking platform for Canada's home-based businesses: the
            salons, caterers and services that run from someone's home and live or die on word of mouth.
            Built as a startup project at SkillHat, the product went from field research through design to
            a working web application built in Bubble.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-8 border-t border-line">
            <div>
              <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Role</dt>
              <dd className="text-charcoal">Product Designer (sole designer from mid-project)</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Industry</dt>
              <dd className="text-charcoal">Local services marketplace</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Company</dt>
              <dd className="text-charcoal">SkillHat, team startup project</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Team</dt>
              <dd className="text-charcoal">
                Cross-functional team of seven: two product managers, a business analyst, a developer, a
                project manager and two UX designers
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Timeline</dt>
              <dd className="text-charcoal">March to June 2024</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── 01 BACKGROUND ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="01" heading="Background" />
          <BodyText>
            <p>
              Home-based businesses are everywhere and nearly invisible. A stylist running a salon from a
              North York basement has loyal clients but no way to be found by the neighbourhood around
              her. Customers, meanwhile, rely on scattered reviews and luck. Our team set out to test
              whether one platform could serve both sides: help customers discover trusted local
              providers, and give small owners the reach word of mouth can't.
            </p>
            <p>
              The project began under the working name Business Connect and became ConnectLocaly as the
              focus narrowed to home-based businesses, a segment none of the major platforms served
              directly.
            </p>
            <p>
              Midway through the program, our second designer left for personal reasons. From that point I
              carried all design work solo: research synthesis, personas, journeys, wireframes, the design
              system and every screen, while the team absorbed the schedule pressure together.
            </p>
          </BodyText>
        </div>
      </section>

      {/* ── 02 DESIGN PROCESS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="02" heading="Design process" />
          <BodyText>
            <Lead lead="Four phases from field research to a working build.">
              Each phase fed the next, and the small team meant nothing was thrown over a wall.
            </Lead>
            <Lead lead="01 Discover —">
              Surveyed customers and business owners, ran in-person interviews with both groups, analyzed
              responses into findings.
            </Lead>
            <Lead lead="02 Define —">
              Built two personas and journey maps for both sides of the marketplace. Framed the problem as
              paired How Might We statements.
            </Lead>
            <Lead lead="03 Design —">
              Crazy 8s sketches into digital wireframes into a token-based design system and
              high-fidelity screens.
            </Lead>
            <Lead lead="04 Deliver —">
              Usability testing with 15 participants drove targeted refinements, then structured handoff
              to our developer, who built the product in Bubble.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={processDiagram}
            alt="ConnectLocaly design process diagram: four connected phase cards for Discover, Define, Design and Deliver"
            caption="Design Process — four phases"
          />
        </div>
      </section>

      {/* ── 03 UNDERSTANDING THE PROBLEM ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="03" heading="Understanding the problem" />
          <BodyText>
            <p>The business opportunity statement framed both sides plainly.</p>
            <Lead lead="For customers:">
              how might we enable users to effortlessly discover nearby local businesses and confidently
              make informed decisions to purchase a product or service?
            </Lead>
            <Lead lead="For business owners:">
              how might we help the local business owner expand their reach by showcasing their products
              and services so that customers purchase from them?
            </Lead>
            <p>
              Traditional discovery fails both sides at once. Customers face time-consuming research, thin
              information and no way to judge credibility. Owners face limited reach, marketing effort
              with little targeting and no affordable way to stand out. The two failures feed each other,
              which is what made a two-sided platform the right shape for the solution.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={opportunityStatement}
            alt="ConnectLocaly business opportunity statement with paired How Might We cards for customers and business owners"
            caption="Business Opportunity Statement, with the two HMW cards"
          />
        </div>
      </section>

      {/* ── 04 GATHERING INSIGHTS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="04" heading="Gathering insights" />
          <BodyText>
            <p>
              Research ran on two tracks: a survey of 15 customers and 10 business owners, and in-person
              interviews with people on both sides. The samples were small and we treated them that way,
              as directional evidence to be read alongside the interviews rather than statistics to
              generalize from. Our own sprint review flagged the sample size in week one, and that
              discipline shaped how findings were used.
            </p>
            <p>What the responses showed:</p>
            <Lead lead="Price and reviews drive customer decisions.">
              12 of 15 customers named price as a deciding factor and 10 of 15 named reviews, ahead of
              location. Trust signals had to sit beside every listing.
            </Lead>
            <Lead lead="Demand was real on both sides.">
              14 of 15 customers said they were likely to try the app. On the business side, owners
              described relying on word of mouth while wanting reach they couldn't afford through ads.
            </Lead>
            <Lead lead="Owners were already online, and it wasn't working.">
              9 of 10 maintained some online presence across Meta, websites and other social channels, yet
              still struggled to be found. The problem wasn't absence, it was fragmentation.
            </Lead>
            <Lead lead="Time and reach were the constraints.">
              Among owners who answered, time and reach tied as the biggest blocks to promoting their
              business. Any tool demanding daily upkeep would fail them.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={surveyFindings}
            alt="Four rebuilt survey chart cards covering price and reviews, demand, online presence and time and reach constraints"
            caption="Four rebuilt survey chart cards"
          />
        </div>
      </section>

      {/* ── 05 TWO PEOPLE, ONE PLATFORM ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="05" heading="Two people, one platform" />
          <BodyText>
            <p>Two personas anchored every decision, one per side of the marketplace.</p>
            <Lead lead="Priya Chaturvedi,">
              34, is a software engineer who recently moved to Kitchener-Waterloo from India. New city,
              few contacts, high standards: she wants trustworthy local services without hours of
              research, and review platforms feel noisy. Her frustrations, limited time, no local
              familiarity, no assurance of credibility, defined the customer side's trust requirements.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={personaPriya}
            alt="Persona frame for Priya Chaturvedi, 34, software engineer new to Kitchener-Waterloo"
            caption="Priya persona frame"
          />
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <Lead lead="Aiden Brown,">
              42, has run Chic Cuts, a home-based unisex salon in North York, for seven years. Loyal
              clients, stalled growth. He juggles Instagram, Facebook and a website, but word of mouth
              only reaches so far. His frustrations, limited reach, untargeted marketing effort, low
              engagement, defined the business side's visibility requirements.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={personaAiden}
            alt="Persona frame for Aiden Brown, 42, owner of Chic Cuts home-based salon in North York"
            caption="Aiden persona frame"
          />
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <p>Every screen had to earn Priya's trust without adding to Aiden's workload.</p>
          </BodyText>
        </div>
      </section>

      {/* ── 06 MAPPING THE EXPERIENCE ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="06" heading="Mapping the experience" />
          <BodyText>
            <p>
              Journey maps traced both personas from awareness through beta testing to launch
              anticipation, surfacing where emotion dipped: Priya's uncertainty waiting on limited
              information, Aiden's apprehension about an unproven platform. Those dips became design
              priorities: clear communication for customers, low-effort onboarding and visible payoff for
              owners.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={journeyCustomer}
            alt="Customer journey map from awareness through beta testing to launch anticipation"
            caption="Customer journey map"
          />
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={journeyBusiness}
            alt="Business owner journey map from awareness through beta testing to launch anticipation"
            caption="Business owner journey map"
          />
        </div>
      </section>

      {/* ── 07 FROM CRAZY 8S TO WIREFRAMES ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="07" heading="From Crazy 8s to wireframes" />
          <BodyText>
            <p>
              Ideation started on paper. Crazy 8s rounds forced volume over polish, and the strongest
              patterns, a category-first home, a search bar with service suggestions, listing cards with
              reviews up front, moved into digital wireframes. The wireframes locked structure before any
              visual design: scrollable category lists, product descriptions per service, and a bottom
              navigation of Home, Bookings, Messages and Profile that survived unchanged into the final
              product.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={crazy8s}
            alt="Crazy 8s sketches exploring early ConnectLocaly screen concepts"
            caption="Crazy 8s sketches"
          />
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {WIREFRAMES.map((w) => (
              <figure key={w.caption} className="m-0">
                <img
                  src={w.src}
                  alt={w.alt}
                  loading="lazy"
                  className="block w-full h-auto border border-line rounded-[12px] bg-white"
                />
                <figcaption className="mt-2 text-sm text-muted-text text-center">{w.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 PRIORITIZING THE MVP ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="08" heading="Prioritizing the MVP" />
          <BodyText>
            <p>
              With one designer and one developer, scope discipline was survival. We mapped candidate
              features by effort and importance and drew a hard line. Account types, listing creation,
              category browsing, bookmarks and reviews shipped as easy-and-important foundations. Booking
              with a calendar, direct messaging, Maps-integrated search and the business dashboard were
              difficult but important, and they got the build time we saved by deferring the rest: a
              social feed, Instagram photo sync, in-app payments and native mobile apps.
            </p>
            <p>
              The deferrals were conscious, not accidental. The build log lists following-users under
              future features, and Instagram sync was marked "if possible" from the first planning
              document. Cutting them protected the features the research said mattered.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={prioritizationMatrix}
            alt="Effort-importance prioritization matrix showing shipped versus deferred features"
            caption="Effort-importance prioritization matrix, shipped versus deferred"
          />
        </div>
      </section>

      {/* ── 09 A SYSTEM BEFORE SCREENS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="09" heading="A system before screens" />
          <BodyText>
            <p>
              I built the design system before the high-fidelity screens: colour ramps around a primary
              yellow and deep navy, a Plus Jakarta Sans type scale, spacing tokens, a component library and
              an icon set. With one designer and one developer, the system was the multiplier: every
              screen assembled from the same parts, and handoff meant pointing at named components instead
              of describing pixels.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={designSystem}
            alt="ConnectLocaly design system: colour ramps, Plus Jakarta Sans type scale, spacing tokens, components and icon set"
            caption="Design system — typography, colours, components"
          />
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <p>
              <strong className="text-charcoal">Design decisions, and the findings behind them:</strong>
            </p>
            <Lead lead="Reviews and price on every listing card.">
              12 of 15 customers decided on price, 10 of 15 on reviews, so neither hides behind a tap.
            </Lead>
            <Lead lead="Rationale:">
              I put the two decision drivers at the first point of contact, because a trust decision
              delayed is a customer lost.
            </Lead>
            <Lead lead="Category-first discovery over open search.">
              New-to-town users like Priya don't know what to search for.
            </Lead>
            <Lead lead="Rationale:">
              I made browsing the default and search the accelerator, so the platform works before the
              user knows the neighbourhood.
            </Lead>
            <Lead lead="Booking and messaging inside the platform.">
              Owners like Aiden lose leads when contact means switching to Instagram DMs.
            </Lead>
            <Lead lead="Rationale:">
              I kept the whole loop, discover, ask, book, in one place, because every handoff between apps
              is a drop-off point.
            </Lead>
            <Lead lead="A dashboard owners can run in minutes.">
              Time tied as the top constraint for owners.
            </Lead>
            <Lead lead="Rationale:">
              I designed the business side around listing once and updating rarely, respecting the
              research finding instead of fighting it.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={screensShowcase}
            alt="High-fidelity ConnectLocaly screens showcase"
            caption="High-fidelity screens showcase"
          />
        </div>
      </section>

      {/* ── 10 TESTING WITH 15 PEOPLE, REFINING WHAT BROKE ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="10" heading="Testing with 15 people, refining what broke" />
          <BodyText>
            <p>
              Moderated usability sessions with 15 participants walked the core flows: finding a service,
              reading a listing, booking. The sessions were directional, not statistically rigorous, and
              they earned their keep: the before-and-after pairs below show what changed.
            </p>
            <Lead lead="Business profile:">
              testers skimmed past a flat text header. The refined profile leads with imagery and moves
              Book Appointment above the fold.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={beforeAfterProfile}
            alt="Business profile screen before and after usability testing refinements"
            caption="Before/after — business profile"
          />
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <Lead lead="Home and search:">
              testers hesitated at a generic prompt. The refined home asks "What service would you like to
              find?", surfaces categories with icons, adds a location selector and shows popular businesses
              nearby, giving new users somewhere to start.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ConnectLocalyExpandableImage
            src={beforeAfterHome}
            alt="Home and search screen before and after usability testing refinements"
            caption="Before/after — home and search"
          />
        </div>
      </section>

      {/* ── 11 FROM DESIGN TO A WORKING PRODUCT ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="11" heading="From design to a working product" />
          <BodyText>
            <p>
              Design handoff went to our developer, who built ConnectLocaly in Bubble. My side of the
              handoff: the component library, screen specs, user flows and the database logic the design
              implied, listing categories, review structures, account types for customers versus owners.
              The app was deployed as a functional web application: account creation, business listings
              with Google Maps integration, search with filters, bookmarks, reviews with photos and a
              business dashboard all worked end to end. The product was positioned for a Greater Toronto
              Area launch with tiered pricing, a free basic listing and paid premium tiers, before
              expanding across Canada.
            </p>
            <p>
              Working one designer to one developer taught me what handoff really is: not a file transfer
              but a running conversation. Decisions I'd made implicitly in Figma, empty states, edge
              cases, what happens when a listing has no photos, surfaced as build questions, and answering
              them made me a better designer of the explicit.
            </p>
          </BodyText>
        </div>
      </section>

      {/* ── 12 RESULTS AND TAKEAWAYS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="12" heading="Results and takeaways" />
          <BodyText>
            <p>
              The project proved the core hypothesis at the scale it could: both sides of the market
              wanted the platform, 14 of 15 customers and a clear majority of surveyed owners, and the
              team took a research-backed design all the way to a deployed, functional product in four
              months. Usability testing with 15 participants directly reshaped the two highest-traffic
              surfaces, home and the business profile. The platform is no longer live; the program ended
              before a sustained launch.
            </p>
            <Lead lead="The honest gaps.">
              The research samples were small, 15 customers and 10 business owners, and we used them
              directionally rather than statistically. Post-launch behavioural data never existed, so the
              design was validated by testing, not by market adoption. And losing our second designer
              mid-program meant some artifacts, personas among them, were produced fast and rebuilt
              properly only later.
            </Lead>
            <Lead lead="What I would carry forward.">
              Losing half the design team taught me to scope ruthlessly: the design system existed because
              there was no time to design screens twice. Pair small surveys with interviews from day one,
              since 10 open-ended business owner responses taught us more than the percentages did. And
              treat handoff as a design deliverable with its own quality bar, because the developer is the
              design's first user.
            </Lead>
          </BodyText>
        </div>
      </section>

      {/* ── 13 EXPLORE THE PROTOTYPE ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="13" heading="Explore the prototype" />
          <BodyText>
            <p>
              The clickable prototype walks the core customer journey: landing, discovery by category, a
              business profile and the booking flow.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <iframe
            className="w-full h-[700px] border border-line rounded-[12px]"
            src={PROTOTYPE_EMBED_URL}
            allowFullScreen
            title="ConnectLocaly clickable prototype"
          />
        </div>
      </section>

      <ExploreCaseStudies currentTitle="ConnectLocaly" />

      <Footer />
    </div>
  );
}
