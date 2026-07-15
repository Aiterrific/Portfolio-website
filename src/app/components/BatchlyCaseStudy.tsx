import { CASE_STUDY_WIDTH, CASE_STUDY_BODY_TEXT } from "../data/caseStudyStyles";
import Footer from "./Footer";
import {
  CaseStudyNav,
  Section,
  Lead,
  ExploreCaseStudies,
} from "./CaseStudyShared";
import ComingSoonCard from "./ComingSoonCard";

export default function BatchlyCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <CaseStudyNav />

      {/* ── INTRO ── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-text font-heading mb-4">
            Case Study
          </p>
          <h1 className="text-navy text-3xl md:text-4xl leading-tight mb-6">
            Batchly: Streamlining Bulk Purchasing for Small Business Buyers
          </h1>
          <p className={`justify-body ${CASE_STUDY_BODY_TEXT} mb-10`}>
            Batchly is a B2B bulk purchasing platform concept for small e-commerce business owners who
            order inventory from wholesale suppliers. I owned the end-to-end design as an individual
            course project at BrainStation, from research through information architecture, UI design,
            prototyping and walkthrough testing.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-line">
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

      <div className={`${CASE_STUDY_WIDTH} mx-auto py-12 md:py-16`}>
        <ComingSoonCard />
      </div>

      <ExploreCaseStudies currentTitle="Batchly" />

      <Footer />
    </div>
  );
}
