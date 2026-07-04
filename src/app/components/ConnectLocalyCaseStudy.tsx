import { Link } from "react-router";
import { CASE_STUDY_WIDTH, CASE_STUDY_BODY_TEXT } from "../data/caseStudyStyles";
import {
  CaseStudyNav,
  ImageBlock,
  SectionHeading,
  Section,
  Lead,
  PrototypeCTA,
  ExploreCaseStudies,
} from "./CaseStudyShared";

export default function ConnectLocalyCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <CaseStudyNav />

      {/* ── HERO ── */}
      <section className="pt-16 pb-0 md:pt-24">
        <div className={`${CASE_STUDY_WIDTH} mx-auto grid md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-start`}>
          <div className={CASE_STUDY_WIDTH}>
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500 font-heading mb-4">
              Case Study
            </p>
            <h1 className="text-3xl md:text-5xl leading-tight mb-6">
              ConnectLocaly: Connecting Communities to Trusted Local Businesses
            </h1>
            <p className={`justify-body ${CASE_STUDY_BODY_TEXT}`}>
              ConnectLocaly is a two-sided platform concept linking community members with local
              businesses. I led end-to-end product design for a startup initiative at SkillHat, from
              research framing through prototyping, walkthrough testing and feasibility handoff.
            </p>
          </div>

          <div className="border border-gray-300 rounded-lg p-6">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs tracking-wide uppercase text-gray-500 mb-1 font-heading">Industry</dt>
                <dd className="text-gray-900">Local services and community platforms</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-gray-500 mb-1 font-heading">Stage</dt>
                <dd className="text-gray-900">Concept-stage validation project</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-gray-500 mb-1 font-heading">Duration</dt>
                <dd className="text-gray-900">July 2023 to September 2023</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-gray-500 mb-1 font-heading">Role</dt>
                <dd className="text-gray-900">Product Designer (UI/UX)</dd>
              </div>
            </dl>
          </div>
        </div>

        <ImageBlock label="Figma mockup: hero visual" />
      </section>

      {/* ── 01 CONTEXT ── */}
      <Section number="01" title="Context">
        <p>
          ConnectLocaly set out to serve two audiences at once. Small businesses needed affordable
          digital visibility. Community members needed a trusted way to find local services. The
          project ran as a concept-stage validation effort for a startup at SkillHat, built to test
          demand before any production investment. I owned product design end to end: research framing,
          information architecture, wireframes, prototyping, walkthrough testing and UI direction.
          Development support joined for feasibility checks and implementation discussion. Design
          decisions were mine to make and defend.
        </p>
      </Section>

      {/* ── 02 THE BUSINESS PROBLEM ── */}
      <Section number="02" title="The Business Problem">
        <p>
          Small businesses lose customers to larger platforms because digital visibility costs money and
          skill most owners lack. Community members default to generic search tools with no local trust
          signals. The startup needed evidence people would adopt a dedicated local discovery platform
          before committing build resources.
        </p>
        <Lead lead="Problem statement:">
          Community members struggle to find trusted local services and small businesses struggle to
          reach nearby customers. The startup needed validated interest in a two-sided local platform to
          justify further investment.
        </Lead>
        <p>
          Two questions framed the work. How might we help people find local services they trust without
          verified business data behind the listings? How might we serve business owners and community
          members inside one coherent product?
        </p>
      </Section>

      {/* ── 03 PRODUCT GOALS ── */}
      <Section number="03" title="Product Goals">
        <p>
          No formal success metrics were defined before design started. The work was exploratory and the
          team chose direction over benchmarks. Evaluation stayed directional: task feedback and
          perceived usefulness gathered through walkthrough sessions. The Reflection section returns to
          this gap honestly.
        </p>
      </Section>

      {/* ── 04 CONSTRAINTS ── */}
      <Section number="04" title="Constraints">
        <p>Five constraints shaped the work.</p>
        <Lead lead="Data.">
          No live business directory or verified merchant dataset existed. Every listing in the
          prototype was constructed, which limited how far trust perceptions were testable.
        </Lead>
        <Lead lead="Budget.">
          Bootstrapped startup conditions. No research budget, no recruitment spend, no paid tooling
          beyond the design stack.
        </Lead>
        <Lead lead="Timeline.">
          Weeks, not a production cycle. Scope decisions favoured flows over polish.
        </Lead>
        <Lead lead="Participants.">
          A small pool recruited through convenience sampling. Findings were treated as directional,
          never conclusive.
        </Lead>
        <Lead lead="Environment.">
          No production system and no real user base. Validation relied on prototypes rather than live
          behaviour.
        </Lead>
      </Section>

      {/* ── 05 RESEARCH APPROACH ── */}
      <Section
        number="05"
        title="Research Approach"
        image={{ label: "FigJam board: research synthesis", wide: true }}
      >
        <Lead lead="Research questions.">
          Three questions drove the work. What stops people from trying a new local discovery platform?
          What builds trust in a listing when no verified data sits behind them? How do the needs of
          business owners and community members differ inside one product?
        </Lead>
        <Lead lead="Method selection.">
          A small exploratory survey opened the work, run through forms and direct outreach to gauge
          interest in the concept and gather early signals on discovery habits. Prototype walkthroughs
          followed as the primary method. Structured studies with recruited participants were the ideal,
          and budget plus timeline ruled them out. Walkthroughs surfaced where confusion started screen
          by screen, which self-reported survey answers never show.
        </Lead>
        <Lead lead="The sessions:">
          moderated walkthrough sessions with 5 to 8 participants across rounds, recruited through peers
          and convenience sampling. Each session ran task walkthroughs with qualitative feedback. No
          timed or benchmarked testing. Small numbers stated plainly beat large numbers implied.
        </Lead>
        <Lead lead="Managing the limits.">
          Convenience samples carry familiarity bias. Participants received tasks, not tours, and
          completed flows without guidance. Feedback repeating across sessions carried weight. One-off
          comments were logged and set aside.
        </Lead>
        <Lead lead="Findings.">
          Three insights repeated across sessions and shaped the direction.
        </Lead>
        <Lead lead="Empty browsing kills trust.">
          Participants exploring a browse-first prototype with sparse constructed listings read the
          product as abandoned. Discovery without inventory works against credibility.
        </Lead>
        <Lead lead="Stable structure beats novel discovery.">
          Participants moved faster and reported more confidence inside predictable category navigation
          than inside exploratory patterns.
        </Lead>
        <Lead lead="Trust cues gate engagement.">
          Participants hesitated on listings lacking context about the business. Clear service
          descriptions and community framing mattered more than visual polish.
        </Lead>
        <p>Each finding maps to a decision below.</p>
      </Section>

      {/* ── 06 INFORMATION ARCHITECTURE ── */}
      <Section
        number="06"
        title="Information Architecture"
        image={{ label: "FigJam board: IA structure", wide: true }}
      >
        <p>
          The platform serves two audiences with different jobs. The IA separates the community-member
          journey, discovery through contact, from the business-owner journey, listing creation through
          profile management. Category-first navigation anchors the community side. A structured setup
          flow anchors the business side. Both meet at the listing, the shared object both audiences
          care about.
        </p>
      </Section>

      {/* ── 07 STRATEGY AND TRADEOFFS ── */}
      <Section
        number="07"
        title="Strategy and Tradeoffs"
        image={{ label: "FigJam board: decision mapping", wide: true }}
      >
        <p>Two forks defined the product direction.</p>
        <Lead lead="Fork one: marketplace browse versus structured discovery.">
          A browse-first marketplace IA was explored in early prototypes. Testing killed the direction.
          Without real listings or inventory, open browsing felt empty and unusable. The pivot: curated
          category-first discovery, which framed a thin dataset as organized rather than sparse. The
          lesson generalized: browse-first models need inventory density a concept-stage product never
          has.
        </Lead>
        <Lead lead="Fork two: map-first versus category-first discovery.">
          Map-first discovery was pushed early as the discovery-led approach, and the idea had real
          appeal for a local platform. Category-first won in execution for two reasons. Real-time
          geospatial data was unavailable inside the constraints, confirmed through feasibility checks
          with development support. And category structure gave participants a stable mental model where
          map exploration produced wandering. The trade: less novelty, more completed tasks.
        </Lead>
      </Section>

      {/* ── 08 COLLABORATION AND INFLUENCE ── */}
      <Section number="08" title="Collaboration and Influence">
        <p>
          The map-first question tested cross-functional decision-making. The discovery-led camp pushed
          the map as the differentiator. I brought the question to development support for a feasibility
          check. Real-time geospatial features required live location data and listing density the
          project lacked on both counts. The category-first structure shipped in the prototype and
          walkthrough sessions confirmed the navigation held up. Evidence and feasibility closed the
          discussion.
        </p>
        <p>
          Development collaboration also shaped scope throughout. Feasibility checks ran before flows
          were finalized, which kept the prototype honest about what a small team builds in weeks.
        </p>
      </Section>

      {/* ── 09 DESIGN DECISIONS ── */}
      <section className="py-12 md:py-16 border-t border-gray-100">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="09">Design Decisions</SectionHeading>
          <div className={`justify-body space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
            <p>Four decisions carry the concept. Each traces back to a finding or constraint.</p>
            <Lead lead="Category-first navigation.">
              Predictable service categories anchor discovery on the community side. Source:
              stable-structure finding plus the geospatial constraint.
            </Lead>
          </div>
        </div>
        <ImageBlock label="Figma mockup: category navigation screens" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Curated discovery over open browse.">
            The home experience presents organized categories and featured listings instead of an open
            feed. A thin dataset reads as curated rather than empty. Source: empty-browsing finding.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: discovery screens" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Trust-forward listing detail.">
            Listing pages lead with service descriptions, business context and community framing before
            contact actions. Source: trust-cues finding.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: listing detail" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Two-sided flows with one shared object.">
            Business owners get a structured listing setup. Community members get discovery and contact.
            Both flows resolve at the same listing design, keeping the product coherent for a small build
            team. Source: two-audience IA plus the timeline constraint.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: business owner flow" />
      </section>

      {/* ── 10 ITERATIONS ── */}
      <Section
        number="10"
        title="Iterations"
        image={{ label: "Figma mockup: version one beside version two" }}
      >
        <p>
          One iteration cycle defines the project. Version one ran browse-first discovery. Walkthrough
          sessions surfaced the empty-marketplace problem and participant confidence dropped on open
          exploration. Version two restructured discovery around categories with curated presentation.
          Sessions after the restructure showed participants completing discovery tasks with less
          hesitation and clearer navigation paths.
        </p>
      </Section>

      {/* ── 11 OUTCOMES ── */}
      <Section number="11" title="Outcomes">
        <p>
          Outcomes here are directional and stated as such. Walkthrough participants completed core
          discovery tasks in the restructured prototype and qualitative feedback supported the
          category-first direction. Survey responses signalled interest in the concept from both
          community members and business owners. The validated prototype and feasibility documentation
          gave the startup a grounded basis for the build-or-hold decision.
        </p>
        <p>
          The honest gaps. No formal metrics existed, so no benchmark separates success from motion. The
          participant pool was small and recruited through convenience sampling, which limits
          confidence. And the trust question stayed partially unanswered: constructed listings test
          trust presentation, never trust itself. Real trust requires real businesses.
        </p>
      </Section>

      <PrototypeCTA buttonLabel="Prototype coming soon" />

      {/* ── 12 REFLECTION ── */}
      <Section number="12" title="Reflection">
        <p>Three things changed in my practice after this project.</p>
        <Lead lead="Directional metrics still need definition.">
          Exploratory work skipped formal metrics and paid for the gap at evaluation time. Later
          projects, including CoFundEstate, defined measures earlier because this project showed the
          cost of skipping the step.
        </Lead>
        <Lead lead="Recruitment shapes evidence quality.">
          Convenience sampling was the honest fit for the constraints and the familiarity bias was real.
          Structured recruitment sits at the top of my list when budget allows.
        </Lead>
        <Lead lead="Trust needs real stakes to test.">
          Constructed data validates layout and comprehension. Testing whether people trust a platform
          requires listings with real businesses behind them. The next stage of a project like this
          starts with a small set of real merchant partners before any interface work.
        </Lead>
      </Section>

      {/* ── 13 KEY TAKEAWAYS ── */}
      <Section number="13" title="Key Takeaways">
        <Lead lead="Structure rescues thin data.">
          Category-first curation turned a sparse dataset into an organized experience and browse-first
          would have exposed the gap.
        </Lead>
        <Lead lead="Feasibility checks belong inside design decisions.">
          The map-first call was settled by engineering reality, not opinion, and the product was
          stronger for the discipline.
        </Lead>
        <Lead lead="Honest framing outlasts inflated claims.">
          A concept project presented as a concept project with directional evidence holds up under
          interview questioning. Revenue and retention claims without a live product do not.
        </Lead>
      </Section>

      <ExploreCaseStudies currentTitle="ConnectLocaly" />

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-100 py-12">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          >
            ← Back to portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
