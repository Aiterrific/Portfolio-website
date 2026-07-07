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

export default function BatchlyCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <CaseStudyNav />

      {/* ── HERO ── */}
      <section className="pt-16 pb-0 md:pt-24">
        <div className={`${CASE_STUDY_WIDTH} mx-auto grid md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-start`}>
          <div className={CASE_STUDY_WIDTH}>
            <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-text font-heading mb-4">
              Case Study
            </p>
            <h1 className="text-navy text-3xl md:text-4xl leading-tight mb-6">
              Batchly: Streamlining Bulk Purchasing for Small Business Buyers
            </h1>
            <p className={`justify-body ${CASE_STUDY_BODY_TEXT}`}>
              Batchly is a B2B bulk purchasing platform concept for small e-commerce business owners who
              order inventory from wholesale suppliers. I owned the end-to-end design as an individual
              course project at BrainStation, from research through information architecture, UI design,
              prototyping and walkthrough testing.
            </p>
          </div>

          <div className="shadow-card border border-line rounded-lg p-6">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Industry</dt>
                <dd className="text-charcoal">B2B e-commerce</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Stage</dt>
                <dd className="text-charcoal">Concept project with buyer-side validation</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Duration</dt>
                <dd className="text-charcoal">April 2026 to May 2026</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Role</dt>
                <dd className="text-charcoal">Product Designer (UI/UX), individual project</dd>
              </div>
            </dl>
          </div>
        </div>

        <ImageBlock label="Figma mockup: hero visual" />
      </section>

      {/* ── 01 CONTEXT ── */}
      <Section number="01" title="Context">
        <p>
          Small e-commerce business owners restock inventory through wholesale suppliers and the process
          runs on fragmented tools: supplier websites, email threads, spreadsheets and phone calls.
          Batchly explored a single purchasing platform for these buyers. The project ran as an
          individual course project at BrainStation over one month. I owned every stage: user research,
          information architecture, wireframing, UI design, prototyping and walkthrough testing.
          Instructor critique served as the review layer a team would normally provide.
        </p>
      </Section>

      {/* ── 02 THE BUSINESS PROBLEM ── */}
      <Section number="02" title="The Business Problem">
        <p>
          Bulk purchasing carries higher stakes than consumer checkout. Orders are larger, pricing
          shifts between suppliers and a wrong order damages cash flow and stock levels. Research
          surfaced three recurring pain points: pricing inconsistency across suppliers, fragmented
          communication before and after purchase and uncertainty about order status after checkout.
        </p>
        <Lead lead="Problem statement:">
          Small business buyers lack a single trusted workflow for comparing suppliers, placing bulk
          orders and confirming order status. Every workaround adds friction and doubt to purchases
          their business depends on.
        </Lead>
        <p>
          Two questions framed the work. How might we give buyers confidence at the moment of committing
          to a large order? How might we make repeat purchasing fast enough to fit the rhythm of running
          a small business?
        </p>
      </Section>

      {/* ── 03 PRODUCT GOALS ── */}
      <Section number="03" title="Product Goals">
        <p>
          No formal success metrics were defined before design started. The project was exploratory and
          focused on identifying buyer pain points and validating the purchasing experience through
          research and testing. Evaluation stayed qualitative. The Reflection section returns to this
          gap.
        </p>
      </Section>

      {/* ── 04 CONSTRAINTS ── */}
      <Section number="04" title="Constraints">
        <p>Four constraints shaped the work.</p>
        <Lead lead="Timeline.">
          One month inside a fixed course schedule. Scope decisions favoured depth on core flows over
          breadth of features.
        </Lead>
        <Lead lead="Data.">
          No access to real supplier data or live pricing. Every listing, price and supplier profile was
          constructed, which limited how far trust could be tested against real stakes.
        </Lead>
        <Lead lead="Resources.">
          No engineering support. The AI recommendation feature stayed conceptual because nothing behind
          the interface existed to power the feature.
        </Lead>
        <Lead lead="Solo structure.">
          No product owner, no developers, no researchers. Instructor critique and walkthrough feedback
          replaced the challenge a cross-functional team provides.
        </Lead>
      </Section>

      {/* ── 05 RESEARCH APPROACH ── */}
      <Section
        number="05"
        title="Research Approach"
        image={{ label: "FigJam board: research synthesis", wide: true }}
      >
        <Lead lead="Research questions.">
          Three questions drove the work. What breaks trust in bulk purchasing today? Where do buyers
          lose time in current reorder workflows? What information do buyers need at the point of
          supplier comparison?
        </Lead>
        <Lead lead="Method.">
          Research combined interviews and secondary research on B2B purchasing behaviour, followed by
          informal walkthroughs of the prototype with convenience participants gathering qualitative
          feedback. Structured sessions with recruited buyers were the ideal method. The course timeline
          and zero recruitment budget ruled them out. No participant counts appear here because none
          were formally documented, and an honest omission beats an invented number.
        </Lead>
        <Lead lead="Findings.">
          Three insights repeated and shaped the direction.
        </Lead>
        <Lead lead="Trust concentrates at commitment.">
          Buyers hesitate at checkout on large orders, not during browsing. Confirmation, order
          summaries and status clarity matter most at and after the moment of payment.
        </Lead>
        <Lead lead="Repeat purchasing is the real job.">
          Most bulk buying is reordering known products, not discovering new ones. Speed and saved
          workflows beat novel discovery.
        </Lead>
        <Lead lead="Comparison needs prioritized signals.">
          Buyers comparing suppliers scan for a few decisive signals: price stability, reliability and
          delivery timing. Everything else is noise at decision time.
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
          The structure narrows to the buyer journey: discover suppliers, compare products, order,
          confirm, reorder. Navigation follows task frequency. Reordering and order status sit closest
          to the surface because buyers repeat these tasks weekly. Discovery and comparison sit one
          level deeper for the less frequent job of finding new suppliers. Instructor review confirmed
          the navigation supported task completion and the workflow read as logical and efficient.
        </p>
      </Section>

      {/* ── 07 STRATEGY AND TRADEOFFS ── */}
      <Section number="07" title="Strategy and Tradeoffs">
        <p>Two scope decisions defined the product.</p>
        <Lead lead="Decision one: buyer side only.">
          A two-sided marketplace covering suppliers and buyers was the obvious full vision. I cut the
          supplier side deliberately. One month split across two audiences produces two shallow
          experiences. One month on the buyer side produced depth in the flows carrying the most user
          risk: checkout, reorder and order tracking. Instructor assessment named the narrowed scope a
          strong strategic call. The trade: fulfillment and supplier management workflows stayed
          undesigned, logged for future iterations.
        </Lead>
        <Lead lead="Decision two: AI as concept, not build.">
          The AI-powered purchase recommendation surfaced reorder suggestions from declining inventory
          levels. Real recommendation logic needs live inventory data and engineering resources the
          project lacked. The feature shipped as a clearly framed concept demonstrating a future
          direction rather than a tested capability. Presenting untested AI as working AI would break
          the exact trust the product preaches.
        </Lead>
      </Section>

      {/* ── 08 FEEDBACK AND ITERATION ── */}
      <Section number="08" title="Feedback and Iteration">
        <p>
          Solo projects skip stakeholder friction and lose the challenge friction provides. Instructor
          critique filled the gap. Two documented refinements came out of the loop.
        </p>
        <Lead lead="Checkout flow.">
          Critique and walkthrough feedback pushed the checkout toward stronger confirmation and clearer
          order state. Buyers of large orders need reassurance the system registered exactly what they
          committed to. The refined flow tightened order summaries and confirmation hierarchy.
        </Lead>
        <Lead lead="Supplier discovery.">
          Feedback flagged navigation friction in the discovery experience. Refinements improved clarity
          in the path from browsing suppliers to comparing products, reducing steps in the purchasing
          journey.
        </Lead>
      </Section>

      {/* ── 09 DESIGN DECISIONS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="09">Design Decisions</SectionHeading>
          <div className={`justify-body space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
            <p>Four decisions carry the product. Each traces back to a finding or constraint.</p>
            <Lead lead="Reorder as a first-class flow.">
              Saved products, past orders and one-action reordering sit at the centre of the experience.
              Repeat purchasing is the job buyers do weekly, so the design treats reordering as the
              primary path rather than an afterthought. Source: repeat-purchasing finding.
            </Lead>
          </div>
        </div>
        <ImageBlock label="Figma mockup: reorder flow" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Trust-forward checkout.">
            The checkout sequence leads with clear order summaries, quantity confirmation and explicit
            status after payment. Hierarchy keeps totals, delivery expectations and order state
            scannable. Source: trust-at-commitment finding.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: checkout and order summary" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Prioritized supplier comparison.">
            Comparison views surface the decisive signals first: pricing stability, reliability and
            delivery timing. Secondary detail stays available without competing for attention. Source:
            comparison-signals finding.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: supplier comparison" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="AI reorder recommendation, concept stage.">
            A recommendation surface suggests products to reorder based on declining inventory levels.
            The feature is framed on the page as a conceptual future enhancement, unbuilt and untested.
            Source: repeat-purchasing finding plus the resource constraint.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: AI recommendation concept" />
      </section>

      {/* ── 10 ITERATIONS ── */}
      <Section number="10" title="Iterations" image={{ label: "Figma mockup: iteration comparison" }}>
        <p>
          One documented cycle defines the project. The first prototype version emphasized successful
          paths through checkout and discovery. Critique and walkthrough feedback exposed two gaps:
          confirmation strength at checkout and navigation clarity in supplier discovery. The second
          version tightened both, with clearer order state after payment and a shorter path from
          discovery to comparison.
        </p>
      </Section>

      {/* ── 11 OUTCOMES ── */}
      <Section number="11" title="Outcomes">
        <p>
          Outcomes are qualitative and stated as such. Walkthrough participants completed the core
          buying tasks in the refined prototype and feedback supported the reorder-first direction.
          Instructor assessment rated the project as well scoped and grounded in a real business problem,
          with the reorder flow and purchasing hierarchy called out as the strongest work. The project
          closed as a complete buyer-side concept: research, IA, refined flows and a polished UI.
        </p>
        <p>
          The honest gaps. No formal metrics existed, so no benchmark separates success from motion. The
          prototype emphasized success states over edge cases and error handling, a real weakness in a
          product built on trust. The experience was designed desktop-first and small business owners
          often manage orders on mobile. And the supplier side stayed out of scope by design, leaving
          fulfillment and supplier management for future iterations.
        </p>
      </Section>

      <PrototypeCTA buttonLabel="Prototype coming soon" />

      {/* ── 12 REFLECTION ── */}
      <Section number="12" title="Reflection">
        <p>Three things changed in my practice after this project.</p>
        <Lead lead="Error states are trust features.">
          A product preaching reliability earned critique for showing mostly success paths. Validation,
          failure and edge states now enter my flows at wireframe stage, not as polish.
        </Lead>
        <Lead lead="Mobile context is a scope decision, not a device decision.">
          Buyers place urgent orders from the floor of a stockroom, not only from a desk. Later projects
          weigh the mobile workflow before locking scope.
        </Lead>
        <Lead lead="Metrics need definition even in exploratory work.">
          The pattern repeats across my early projects and the fix is now standard: define directional
          measures in week one, even for concepts.
        </Lead>
      </Section>

      {/* ── 13 KEY TAKEAWAYS ── */}
      <Section number="13" title="Key Takeaways">
        <Lead lead="Scope discipline produces depth.">
          Cutting the supplier side gave the buyer experience the focus a one-month timeline demanded
          and the strongest flows came from the narrowed scope.
        </Lead>
        <Lead lead="Trust is designed at commitment points.">
          Checkout, confirmation and order status carried the product because research showed hesitation
          lives at the moment of payment, not during browsing.
        </Lead>
        <Lead lead="Honest AI framing protects credibility.">
          A concept labelled as a concept survives interview questioning. An untested feature presented
          as working does not.
        </Lead>
      </Section>

      <ExploreCaseStudies currentTitle="Batchly" />

      {/* ── FOOTER ── */}
      <footer className="border-t border-line py-12">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <Link
            to="/"
            className="text-sm text-teal hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            ← Back to portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
