import type { ReactNode } from "react";
import { CASE_STUDY_WIDTH, CASE_STUDY_BODY_TEXT } from "../data/caseStudyStyles";
import Footer from "./Footer";
import ScrollingScreenshot from "./ScrollingScreenshot";
import landingFull from "../../assets/cofundestate-landing-full.webp";
import surveyCharts from "../../assets/cofundestate/cofundestate-survey-charts.webp";
import ProcessPhases from "./ProcessPhases";
import PersonaCards from "./PersonaCards";
import ArtifactPair from "./ArtifactPair";
import IAFlowArtifacts from "./IAFlowArtifacts";
import BeforeAfter from "./BeforeAfter";
import poolsBefore from "../../assets/cofundestate/cofundestate-ba-pools-before.webp";
import poolsAfter from "../../assets/cofundestate/cofundestate-ba-pools-after.webp";
import dashboardBefore from "../../assets/cofundestate/cofundestate-ba-dashboard-before.webp";
import dashboardAfter from "../../assets/cofundestate/cofundestate-ba-dashboard-after.webp";
import landingBefore from "../../assets/cofundestate/cofundestate-ba-landing-before.webp";
import landingAfter from "../../assets/cofundestate/cofundestate-ba-landing-after.webp";
import PrototypeWalkthrough from "./PrototypeWalkthrough";
import SketchesWireframes from "./SketchesWireframes";
import {
  CaseStudyNav,
  SectionHeading,
  Lead,
  ExploreCaseStudies,
} from "./CaseStudyShared";

function ImagePlaceholder({ label, wide = false, full = false }: { label: string; wide?: boolean; full?: boolean }) {
  return (
    <figure className={full ? "w-full mt-8" : `${CASE_STUDY_WIDTH} mx-auto mt-8`}>
      <div
        role="img"
        aria-label={`Placeholder image: ${label}`}
        className={`w-full ${wide ? "aspect-[21/9]" : "aspect-video"} bg-navy rounded-md flex items-center justify-center px-6`}
      >
        <span className="text-xs md:text-sm uppercase tracking-wide text-white/80 text-center">
          {label}
        </span>
      </div>
    </figure>
  );
}

function BodyText({ children }: { children: ReactNode }) {
  return <div className={`justify-body space-y-5 ${CASE_STUDY_BODY_TEXT}`}>{children}</div>;
}

export default function CoFundEstateCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <CaseStudyNav />

      {/* ── HERO ── */}
      <section className="pb-4 md:pb-8">
        <div className="w-full mt-8">
          <ScrollingScreenshot
            src={landingFull}
            alt="CoFundEstate landing page, full scroll preview"
            label="cofundestate.ca"
          />
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto pt-10 md:pt-12`}>
          <h1 className="font-serif font-normal text-navy text-4xl md:text-5xl leading-tight mb-3">
            CoFundEstate
          </h1>
          <p className="text-muted-text text-lg md:text-xl">
            Making real estate investment accessible through crowdfunding.
          </p>
        </div>
      </section>

      {/* ── 01 OVERVIEW AND ROLE ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="01">Overview and Role</SectionHeading>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-text font-heading mb-4">Overview</h3>
              <p className={`justify-body ${CASE_STUDY_BODY_TEXT}`}>
                CoFundEstate is a web platform concept that lets everyday professionals pool funds and
                co-invest in real estate, removing the capital barrier that keeps most people out of
                property investment. Built as a startup validation MVP during my time at SkillHat, the
                project moved from market research through product strategy, information architecture
                and a high-fidelity prototype.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-text font-heading mb-4">Role</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-text font-heading mb-0.5">Role</dt>
                  <dd className="text-charcoal">Product Designer</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-text font-heading mb-0.5">Industry</dt>
                  <dd className="text-charcoal">PropTech / FinTech</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-text font-heading mb-0.5">Company</dt>
                  <dd className="text-charcoal">SkillHat (startup project)</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-text font-heading mb-0.5">Team</dt>
                  <dd className="text-charcoal">Team 7</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-text font-heading mb-0.5">Timeline</dt>
                  <dd className="text-charcoal">May 2024 to November 2024</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 BACKGROUND ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="02">Background</SectionHeading>
          <BodyText>
            <p>
              CoFundEstate was a startup project I worked on as a Product Designer at SkillHat, built
              with the Team 7 group. Real estate investment carries a high capital barrier, and the
              project set out to test whether a crowdfunding model could lower that barrier enough for
              middle-income professionals to participate. My job was to turn the research into a product
              people could actually use, from the first insight to the final prototype.
            </p>
          </BodyText>
        </div>
      </section>

      {/* ── 03 THE PROCESS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <ProcessPhases />
        </div>
      </section>

      {/* ── 04 UNDERSTANDING THE PROBLEM ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="04">Understanding the Problem</SectionHeading>
          <BodyText>
            <p>
              The business opportunity statement framed it plainly: improve the experience for
              individuals who want to invest in real estate but lack the capital. The target user is a
              middle to high-income professional seeking passive income and long-term wealth, blocked by
              insufficient capital, difficulty finding trustworthy opportunities and limited market
              knowledge.
            </p>
            <p>
              Two personas grounded the work. Olu Andre, 32, a data analyst in Dallas, high
              risk-aversion, wants safe passive income and guided advice. Nadia Lee, 52, an entrepreneur
              in Ottawa, prior investment experience, wants long-term wealth at moderate risk. Different
              ages, different risk appetites, one shared frustration: no accessible, trustworthy way in.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <PersonaCards />
        </div>
      </section>

      {/* ── 05 GATHERING INSIGHTS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="05">Gathering Insights</SectionHeading>
          <BodyText>
            <p>
              A quantitative survey validated the problem and shaped the product. The survey sampled
              internationally, which validated crowdfunding demand broadly, while the product focused on
              the North American market where the opportunity was strongest.
            </p>
            <p>The numbers that drove decisions:</p>
            <ul className="space-y-4">
              <li>
                <strong className="text-charcoal">Demand is real.</strong> Over 50% of respondents
                expressed interest in group real estate investment through crowdfunding, on the
                condition that security and guided advisory were provided.
              </li>
              <li>
                <strong className="text-charcoal">Commitment is high.</strong> 53.4% had never backed out
                of a real estate investment. Of the 26% who did withdraw, the reasons were lack of
                confidence and poor timing, the exact frictions the product set out to solve.
              </li>
              <li>
                <strong className="text-charcoal">Capital is the barrier.</strong> 41.1% named lack of
                capital or financing as the primary block. Another 21.9% struggled to identify the right
                properties.
              </li>
              <li>
                <strong className="text-charcoal">Investors want digital with a safety net.</strong>{" "}
                68.5% prefer handling investment online, yet 24.7% still want expert guidance for major
                decisions.
              </li>
              <li>
                <strong className="text-charcoal">Appetite spans a range.</strong> 20.5% ready to invest
                over $25,000, 32.9% at $10,000 to $25,000, 15.1% at $5,000 to $10,000. On risk, 64.4%
                accept moderate risk for higher returns, 28.8% prefer safer options. On horizon, 56.9%
                prefer medium-term investments of two to five years, and 42.5% are driven by long-term
                wealth.
              </li>
            </ul>
            <p>
              Each finding became a design requirement: guided advisory in the MVP, tiered investment
              amounts, a risk-profile assessment, and trust mechanisms around every listing.
            </p>
          </BodyText>
        </div>
        <figure className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <img
            src={surveyCharts}
            alt="Survey summary charts covering barriers to investment, motivations, group investment interest, commitment ranges, timelines and respondent demographics."
            className="block max-w-[960px] w-full mx-auto rounded-md border border-[rgba(11,37,69,0.1)]"
          />
          <figcaption className="text-sm text-muted-text text-center mt-3">
            Appendix: survey summary across barriers, motivations, commitment and demographics.
          </figcaption>
        </figure>
      </section>

      {/* ── 06 PRIORITISATION AND STRATEGIC SCOPE ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="06">Prioritisation and Strategic Scope</SectionHeading>
          <BodyText>
            <p>
              This is the decision that shaped the product. The original vision tried to own the entire
              investment stack, including the legal and finance execution: escrow, live transactions,
              mortgage and legal partnerships. Mapping that against the team's capacity and the
              validation timeline, it was too heavy a load to build and test meaningfully.
            </p>
            <p>
              So the scope shifted to a focused state. Instead of executing the legal and financial
              transaction, the MVP would do the thing the research proved mattered most: match investors
              to suitable opportunities based on risk profile, and manage the rest of their journey
              inside a clear portfolio. Investor matching, risk profiling, guided advisory, portfolio
              tracking. The heavy transactional machinery was deferred.
            </p>
            <p>
              The business model canvas anchored this call, separating what the product must do to
              validate demand from what could wait for a funded build. The journey map exposed where
              users felt friction across six stages, from Awareness to Returns, and the highest-friction
              moments, decision confidence and trust at commitment, became the MVP priorities.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ArtifactPair />
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <p>
              This is the tradeoff a senior reviewer looks for. Cutting the transaction layer was not a
              limitation, it was a strategic focus on the part of the experience that carried the most
              user risk and the most validation value.
            </p>
          </BodyText>
        </div>
      </section>

      {/* ── 07 NARROWING THE SCOPE ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="07">Narrowing the Scope</SectionHeading>
          <BodyText>
            <p>
              With the transaction layer deferred, the MVP resolved to four jobs, each traceable to a
              survey finding.
            </p>
            <ul className="space-y-4">
              <li>
                <strong className="text-charcoal">Match investors to opportunities by risk profile.</strong>{" "}
                Source: the 64.4% moderate and 28.8% conservative split demanded risk-based matching.
              </li>
              <li>
                <strong className="text-charcoal">Build confidence at the decision point.</strong> Source:
                the 26% who withdrew cited low confidence and timing.
              </li>
              <li>
                <strong className="text-charcoal">Offer tiered investment amounts.</strong> Source: the
                spread from $5,000 to over $25,000.
              </li>
              <li>
                <strong className="text-charcoal">Provide guided advisory inside the MVP.</strong> Source:
                24.7% wanted expert help even while preferring digital.
              </li>
            </ul>
          </BodyText>
        </div>
      </section>

      {/* ── 08 WIREFRAMING THE SOLUTION ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="08">Wireframing the Solution</SectionHeading>
          <BodyText>
            <p>
              Information architecture and user flows came first, separating the exploration mindset
              from the commitment mindset so users never stumbled into a financial decision by accident.
              The IA and flow boards mapped the full journey before a single high-fidelity screen was
              designed.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <IAFlowArtifacts />
        </div>
      </section>

      {/* ── EARLY EXPLORATION: SKETCHES AND WIREFRAMES ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-text mb-4">Early exploration</p>
          <h2 className="font-serif font-normal text-4xl text-navy mb-4">From sketch to screen</h2>
          <p className="text-muted-text text-lg mb-8">
            Before any pixels, the core flows were worked out on paper, then translated into greyscale
            wireframes.
          </p>
          <SketchesWireframes />
        </div>
      </section>

      {/* ── 09 THE SOLUTION AND DESIGN DECISIONS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="09">The Solution and Design Decisions</SectionHeading>
          <BodyText>
            <p>Every decision traces to a finding. This is the how and why behind the product.</p>
            <Lead lead="Risk profiling as a matching layer, not a gate.">
              The risk assessment sits after identity verification and before investment selection. It
              never blocks a user. It explains its inputs and maps a tier to curated options. I placed it
              here because early testing showed users distrust an algorithm assessing them before the
              product has earned credibility.
            </Lead>
            <Lead lead="Rationale:">
              I reduced hesitation by making the assessment feel earned, not intrusive.
            </Lead>
          </BodyText>
        </div>

        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <Lead lead="Multi-step confirmation over one-click investing.">
              The commitment flow breaks into risk breakdown, projected returns and legal acknowledgment.
              A one-click flow tested faster but left users uncertain at the exact moment the product
              needed conviction.
            </Lead>
            <Lead lead="Rationale:">
              I traded speed for confidence, because on a high-stakes decision, friction that builds
              understanding works in the user's favour.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BeforeAfter
            heading="Investment Pools"
            caption="Pool cards unified: consistent progress bars, pledge input and dual actions replace mismatched layouts."
            beforeSrc={poolsBefore}
            beforeAlt="Original investment pools screen with mismatched pool card layouts"
            afterSrc={poolsAfter}
            afterAlt="Rebuilt investment pools screen with unified pool cards, consistent progress bars, pledge input and dual actions"
          />
        </div>

        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <Lead lead="Progressive disclosure on property detail.">
              Financial depth unfolds in stages rather than dumping everything at once.
            </Lead>
            <Lead lead="Rationale:">
              I reduced decision fatigue by revealing detail as users moved from exploring to deciding.
            </Lead>
          </BodyText>
        </div>

        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <Lead lead="Structured discovery over an open marketplace feed.">
              A browse-first feed was explored and dropped, because with a thin early dataset it read as
              empty and invited comparison-shopping before comprehension.
            </Lead>
            <Lead lead="Rationale:">
              I chose curated, risk-matched discovery to keep users grounded in intent.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BeforeAfter
            heading="Dashboard"
            caption="Stat hierarchy clarified, opportunity and pool sections aligned to one grid, progress chart given breathing room."
            beforeSrc={dashboardBefore}
            beforeAlt="Original dashboard with flat stat cards and misaligned opportunity and pool sections"
            afterSrc={dashboardAfter}
            afterAlt="Rebuilt dashboard with clarified stat hierarchy, one aligned grid for opportunities and pools, and space around the progress chart"
          />
        </div>

        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <Lead lead="Snapshot portfolio over a live ticker.">
              Engineering capacity ruled out real-time tracking, so the dashboard uses periodic
              snapshots.
            </Lead>
            <Lead lead="Rationale:">
              the constraint produced a calmer interface better suited to long-hold investors anyway.
            </Lead>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BeforeAfter
            heading="Landing Page"
            caption="Marketing page reorganized into a numbered, scannable flow with a preference bar mapped to real onboarding and a consistent navy system."
            beforeSrc={landingBefore}
            beforeAlt="Original landing page with watermarked stock photography and low-contrast text over the hero image"
            afterSrc={landingAfter}
            afterAlt="Rebuilt landing page with navy nav, numbered sections, clear hero copy and a preference bar for risk level, budget and property type"
          />
        </div>
      </section>

      {/* ── 10 VALIDATING THE DESIGNS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="10">Validating the Designs</SectionHeading>
          <BodyText>
            <p>
              Validation ran through moderated walkthrough sessions on the prototype, gathering
              qualitative feedback on the core flows. These were informal sessions with a small group,
              treated as directional rather than statistically rigorous. They confirmed the multi-step
              confirmation reduced uncertainty and the risk-profiling placement removed the
              reassessed-too-early feedback. Structured usability studies with recruited participants
              would strengthen this further, a gap I name honestly.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <PrototypeWalkthrough />
        </div>
      </section>

      {/* ── 11 RESULTS AND TAKEAWAYS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="11">Results and Takeaways</SectionHeading>
          <BodyText>
            <p>
              The prototype validated the core hypothesis: middle-income professionals will complete a
              real estate investment decision when risk, returns and commitment are made clear. The
              survey proved demand, over 50% interested. The design translated that demand into a flow
              users could move through with confidence. The strategic scope cut gave the team a focused,
              buildable MVP grounded in what the research proved mattered.
            </p>
            <p>
              The honest gaps. The team targeted 70% onboarding completion and directional testing
              pointed to roughly 62%, with drop-off concentrated in identity verification and the risk
              questionnaire, especially on mobile. The friction there was emotional as much as visual:
              users hesitated to share financial data mid-flow, and compliance capped how far those steps
              could be simplified. The deferred transaction layer remains the hardest design problem,
              waiting for a funded build.
            </p>
            <p>
              What I would carry forward. Define success metrics before design, not during. Pair the
              survey with structured interviews for the reasoning behind the numbers. And treat
              data-disclosure moments as their own design problem, with trust scaffolding built in from
              the first wireframe.
            </p>
          </BodyText>
        </div>
      </section>

      <ExploreCaseStudies currentTitle="CoFundEstate" />

      <Footer />
    </div>
  );
}
