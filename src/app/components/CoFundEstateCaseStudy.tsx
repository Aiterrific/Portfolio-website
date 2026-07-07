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

const STATS = [
  { value: "45%", label: "Task success improvement" },
  { value: "30%", label: "Onboarding drop-off reduction" },
  { value: "$500K+", label: "Simulated investment activity" },
  { value: "200+", label: "Users onboarded in six weeks" },
];

export default function CoFundEstateCaseStudy() {
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
              CoFundEstate: Lowering the Barrier to Real Estate Investment
            </h1>
            <p className={`justify-body ${CASE_STUDY_BODY_TEXT}`}>
              CoFundEstate is a web-based crowdfunding platform built to make fractional real estate
              investing understandable for first-time investors. I led end-to-end product design on an
              early-stage validation MVP, from research through developer handoff.
            </p>
          </div>

          <div className="shadow-card border border-line rounded-lg p-6">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Industry</dt>
                <dd className="text-charcoal">Fintech and Proptech</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Stage</dt>
                <dd className="text-charcoal">Early-stage validation MVP</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Duration</dt>
                <dd className="text-charcoal">March 2024 to November 2024</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Role</dt>
                <dd className="text-charcoal">Product Designer (UI/UX)</dd>
              </div>
            </dl>
          </div>
        </div>

        <ImageBlock label="hero visual" />
      </section>

      {/* ── TL;DR ── */}
      <section className="pt-12 md:pt-16">
        <div className={`shadow-card ${CASE_STUDY_WIDTH} mx-auto border border-line rounded-lg p-6 md:p-8`}>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-text font-heading mb-4">TL;DR</p>
          <div className={`justify-body space-y-3 ${CASE_STUDY_BODY_TEXT}`}>
            <p>
              CoFundEstate is a web-based crowdfunding platform built to make fractional real estate
              investing understandable for first-time investors.
            </p>
            <p>I owned product design end to end: research, information architecture and developer handoff.</p>
            <p>
              Task success improved 45%, onboarding drop-off fell 30% and over 200 users onboarded within
              six weeks of the validation launch.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="py-12 md:py-16">
        <div className={`${CASE_STUDY_WIDTH} mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 text-center`}>
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl text-navy" style={{ fontWeight: 600 }}>{stat.value}</p>
              <p className="mt-2 text-xs md:text-sm uppercase tracking-wide text-muted-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 01 CONTEXT ── */}
      <Section number="01" title="Context">
        <p>
          CoFundEstate lets middle-income professionals pool funds into residential, commercial and
          mixed-use properties. The platform ran as a validation MVP built to prove investor interest
          before any live transactions. I owned product design end to end: research, information
          architecture and developer handoff. I worked alongside a product owner, a project manager and
          a small engineering team. Design decisions were mine to make and defend. Roadmap and scope
          calls belonged to the product owner.
        </p>
      </Section>

      {/* ── 02 THE BUSINESS PROBLEM ── */}
      <Section number="02" title="The Business Problem">
        <p>
          Real estate carries a high capital barrier. The business goal was to prove middle-income
          professionals would commit funds to fractional property investments once the product removed
          confusion around risk, returns and legal commitment. Every abandoned onboarding represented
          lost committed capital and weaker validation data for the business case.
        </p>
        <Lead lead="Problem statement:">
          First-time investors abandon fractional real estate platforms because risk, returns and legal
          commitment feel opaque. The business needed completed investment decisions to prove demand.
        </Lead>
        <p>
          Two questions framed the work. How might we build enough confidence for first-time investors
          to complete an investment decision without hiding the risk? How might we collect the personal
          and financial data compliance requires without breaking trust mid-flow?
        </p>
      </Section>

      {/* ── 03 PRODUCT GOALS ── */}
      <Section number="03" title="Product Goals">
        <p>
          The team set two targets before design started. Reach 70% onboarding completion for
          first-time investors. Validate investor decision behaviour through completed investment flows
          in the simulated environment. Both targets get an honest accounting in Outcomes.
        </p>
      </Section>

      {/* ── 04 CONSTRAINTS ── */}
      <Section number="04" title="Constraints">
        <p>Four constraints shaped the work.</p>
        <Lead lead="Regulatory.">
          The platform held no licence for live transactions or fund custody. All investment activity
          ran in a simulated environment. The design had to build trust without the credibility of real
          money movement.
        </Lead>
        <Lead lead="Trust.">
          Real estate crowdfunding is unfamiliar to most users. Aggressive conversion tactics deepen
          suspicion in this category. The design leaned on transparency, risk clarity and plain
          language.
        </Lead>
        <Lead lead="Engineering.">
          A small team meant no real-time portfolio logic or live investment tracking. I designed
          against simplified data structures and mocked states.
        </Lead>
        <Lead lead="Data.">
          No historical investment data existed. Behavioural assumptions needed validation through
          prototype walkthroughs and proxy signals rather than analytics.
        </Lead>
      </Section>

      {/* ── 05 RESEARCH APPROACH ── */}
      <Section number="05" title="Research Approach">
        <Lead lead="Research questions.">
          Three questions drove the work. What stops first-time investors from committing? Where in the
          flow does risk comprehension break down? How much financial detail helps a decision and how
          much stalls one?
        </Lead>
        <Lead lead="Method selection.">
          Formal usability studies with recruited participants were the ideal method. Timeline and
          validation budget ruled them out. Surveys were considered and rejected. Trust hesitation in
          fintech surfaces through observed behaviour and follow-up questions, not self-reported scores.
          A survey tells you users feel uncertain. A walkthrough shows you the exact screen where
          uncertainty starts.
        </Lead>
        <Lead lead="The method I chose:">
          structured prototype walkthroughs with internal reviewers and stakeholders, run in iterative
          rounds. Each round tested a specific flow against a specific question. Feedback fed the next
          prototype version.
        </Lead>
        <Lead lead="Managing the limits.">
          Internal reviewers carry bias because they know the product. I reduced the bias three ways.
          Reviewers received tasks, not tours, so they completed flows without guidance. Each round
          included at least one reviewer with no prior exposure to the flow under test. Findings needed
          to repeat across two rounds before triggering a design change.
        </Lead>
        <Lead lead="Proxy validation.">
          With no analytics history, I used behavioural proxies inside the simulated environment.
          Completion of the full investment flow served as the commitment proxy. Backward navigation at
          the risk disclosure step served as the comprehension-failure proxy. These proxies are weaker
          than live data. They were the strongest signal available inside the constraints and I treated
          them as directional, not conclusive.
        </Lead>
        <Lead lead="Findings.">
          Three insights repeated across rounds and shaped the direction.
        </Lead>
        <Lead lead="Trust outranks speed.">
          Reviewers hesitated on unfamiliar commitment mechanics regardless of click count. Removing
          friction did not remove hesitation. Clarity did.
        </Lead>
        <Lead lead="Financial detail needs staging.">
          Full financial breakdowns on a single screen stalled decisions. Staged disclosure kept
          reviewers moving.
        </Lead>
        <Lead lead="Risk comprehension gates commitment.">
          Reviewers who could not restate the downside in their own words froze at the decision point.
          Comprehension, not persuasion, unlocked commitment.
        </Lead>
        <p>Each finding maps to a decision below. A research insight without a design consequence is trivia.</p>
      </Section>

      {/* ── 06 INFORMATION ARCHITECTURE ── */}
      <Section number="06" title="Information Architecture" image={{ label: "IA sitemap", wide: true }}>
        <p>
          The platform serves one journey with two mindsets: exploration and commitment. The IA
          enforces a hard boundary between them. Browsing, comparison and learning live in the
          exploration zone. Verification, risk profiling and funding live in the commitment zone. Users
          never enter a commitment step by accident. The structure also gave compliance steps a
          predictable home, so legal requirements never interrupted exploration.
        </p>
      </Section>

      {/* ── 07 STRATEGY AND TRADEOFFS ── */}
      <Section
        number="07"
        title="Strategy and Tradeoffs"
        image={{ label: "investment flow diagram, single-step versus final multi-step", wide: true }}
      >
        <p>Three forks defined the product direction.</p>
        <Lead lead="Fork one: discovery feed versus structured flow.">
          A discovery-led browsing model, similar to marketplace listing feeds, came up in early
          ideation. I deprioritized the direction before prototyping. Passive browsing conflicts with
          intentional investing behaviour and a visual feed invites comparison shopping before risk
          comprehension. The staged-detail finding supported the structured alternative: investment
          cards with key metrics upfront, progressive disclosure of financial detail and a hard
          separation between exploration and commitment stages.
        </Lead>
        <Lead lead="Fork two: single-step versus multi-step investment flow.">
          A single-step Invest Now action promised lower drop-off and simpler backend logic. A
          multi-step confirmation flow promised higher user confidence at the cost of added friction.
          The trust and comprehension findings pointed one way. In a product fighting a trust deficit,
          friction at the commitment point works in the user's favour. I accepted a longer path in
          exchange for informed commitments.
        </Lead>
        <Lead lead="Fork three: AI risk profiling placement.">
          The profiling step needed a home in a seven-stage flow: sign up, identity verification, risk
          profiling, risk score with explanation, personalized recommendations, funding and portfolio
          selection, confirmation. Early placement was tested first. Walkthrough reviewers distrusted an
          algorithm assessing them before the product had earned credibility, with repeated feedback
          along the lines of why am I being assessed already. Placement at the end added friction
          directly before funding, the worst point for hesitation. The final position sits after
          identity verification and before investment selection. Verification first improved perceived
          legitimacy. Profiling before selection made the recommendations feel earned rather than
          arbitrary.
        </Lead>
      </Section>

      {/* ── 08 COLLABORATION AND INFLUENCE ── */}
      <Section number="08" title="Collaboration and Influence">
        <p>
          The investment flow decision tested cross-functional alignment. The product owner pushed for
          the single-step flow to reduce drop-off and keep backend logic lean. I pushed for a multi-step
          flow with a risk breakdown, projected returns and legal acknowledgment before commitment.
        </p>
        <p>
          Rather than debate in the abstract, I prototyped both flows and ran them through the
          walkthrough process. The single-step version created uncertainty around risk and commitment
          at the exact moment the product needed conviction. Engineering confirmed the multi-step
          version stayed lightweight to build, mostly front-end gating and confirmation modals. We
          aligned on the multi-step flow with progressive disclosure. Evidence closed the discussion,
          not seniority.
        </p>
        <p>
          Engineering constraints also reshaped the dashboard. Real-time tracking sat outside backend
          capacity, so I redesigned the portfolio view around periodic performance snapshots. The
          constraint produced a calmer interface better suited to long-hold investors than a live
          ticker.
        </p>
      </Section>

      {/* ── 09 DESIGN DECISIONS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="09">Design Decisions</SectionHeading>
          <div className={`justify-body space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
            <p>Five decisions carry the product. Each traces back to a finding or constraint.</p>
            <Lead lead="Investment cards.">
              Minimum investment, projected return range and risk tier appear upfront. Users compare
              opportunities on substance, not photography. Source: staged-detail finding.
            </Lead>
          </div>
        </div>
        <ImageBlock label="investment card set" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Property detail with progressive disclosure.">
            Financial depth unfolds in stages: summary, then returns modelling, then legal structure.
            Each stage is skippable backward, never forward. Source: staged-detail finding.
          </Lead>
        </div>
        <ImageBlock label="disclosure sequence" wide />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Multi-step confirmation flow.">
            Risk breakdown, projected returns and legal acknowledgment sit as discrete steps before
            commitment. Legal copy rewritten from source documents into short declarative sentences.
            Source: comprehension finding.
          </Lead>
        </div>
        <ImageBlock label="confirmation flow steps" wide />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="AI risk profiling as a matching layer, not a gate.">
            The risk score never blocks a user. The screen explains the inputs: goals, income range,
            risk preferences and interaction signals. The assigned tier comes with a transparent
            rationale and a direct mapping to curated investment options. Users see why they received
            their tier and what changes with a different one. Source: trust finding plus fork three.
          </Lead>
        </div>
        <ImageBlock label="risk profiling and score explanation screens" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Performance dashboard.">
            Snapshot-based portfolio view with clear labelling of simulated status, so no user mistakes
            test data for live holdings. Source: engineering constraint plus trust finding.
          </Lead>
        </div>
        <ImageBlock label="dashboard view" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <p>
            Accessibility ran through each decision rather than sitting in a separate pass. Colour
            contrast meets WCAG AA across text and data visualization. Risk tiers pair colour with text
            labels for colour-blind users. All flows complete by keyboard. Error states explain the fix,
            not only the failure.
          </p>
        </div>
      </section>

      {/* ── 10 ITERATIONS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="10">Iterations</SectionHeading>
          <div className={`justify-body space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
            <p>Two iteration cycles show the walkthrough method working.</p>
            <Lead lead="Confirmation flow.">
              Version one shipped the single-step Invest Now action. Walkthrough rounds surfaced
              uncertainty at the commitment moment. Version two split commitment into risk breakdown,
              projected returns and legal acknowledgment. Completion confidence rose across subsequent
              rounds.
            </Lead>
          </div>
        </div>
        <ImageBlock label="confirmation flow, version one beside version two" wide />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Risk profiling placement.">
            Version one placed profiling immediately after sign up. Reviewers pushed back on being
            assessed before the product had earned trust. Version two moved profiling behind identity
            verification. The reassessment feedback stopped.
          </Lead>
        </div>
        <ImageBlock label="flow placement, before and after" wide />
      </section>

      {/* ── 11 OUTCOMES ── */}
      <Section number="11" title="Outcomes">
        <p>
          Task success on the core investment flow improved 45% between the first testable prototype
          and the final build. Onboarding drop-off fell 30% across the same iteration cycle. The
          simulated environment processed over $500K in test investment activity, used to validate
          investor decision behaviour. Over 200 users onboarded within six weeks of the validation
          launch.
        </p>
        <p>
          One goal was missed. The team targeted 70% onboarding completion for first-time investors and
          reached roughly 62%. Drop-off concentrated in identity verification and the risk
          questionnaire, particularly on mobile. UI clarity was not the core issue. Users hesitated to
          share financial and personal data mid-flow and compliance requirements capped how far those
          steps simplified. The miss shaped the reflection below.
        </p>
      </Section>

      {/* ── 12 REFLECTION ── */}
      <Section number="12" title="Reflection">
        <p>Four things change in the next version of this work.</p>
        <Lead lead="Metrics before pixels.">
          Success measures hardened during the project instead of before design started. Today I define
          the measurement plan in week one and get stakeholder sign-off on the definitions.
        </Lead>
        <Lead lead="Structured research over walkthroughs.">
          The walkthrough method fit the constraints and produced directional evidence. Session-based
          studies with recruited participants would produce stronger evidence. The constraint was real.
          The gap is still mine to close.
        </Lead>
        <Lead lead="Data disclosure as a design problem.">
          The 62% completion result showed the hardest friction was emotional, not visual. Asking for
          financial data mid-flow needs its own trust scaffolding: clearer data-use explanations,
          progress framing and mobile-first treatment of verification steps.
        </Lead>
        <Lead lead="Real transaction states.">
          The next iteration tackles live money movement once licensing clears: escrow states, failed
          payments, withdrawal flows. Simulated environments defer the hardest design problems in
          fintech. I want those problems.
        </Lead>
      </Section>

      {/* ── 13 KEY TAKEAWAYS ── */}
      <Section number="13" title="Key Takeaways">
        <Lead lead="Constraint-fit research beats no research.">
          Walkthrough rounds with bias controls produced findings strong enough to settle
          cross-functional disagreements.
        </Lead>
        <Lead lead="Friction placed well builds trust.">
          The multi-step commitment flow traded speed for confidence and the trade paid off.
        </Lead>
        <Lead lead="Honest misses build credibility.">
          A 62% result against a 70% target taught more about investor psychology than any win in the
          project.
        </Lead>
      </Section>

      <PrototypeCTA buttonLabel="Coming soon" />

      <ExploreCaseStudies currentTitle="CoFundEstate" />

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
