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

export default function PostPilotCaseStudy() {
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
              PostPilot: Managing Social Media from One Dashboard
            </h1>
            <p className={`justify-body ${CASE_STUDY_BODY_TEXT}`}>
              PostPilot is a social media management tool concept for scheduling posts, tracking
              performance and handling conversations across platforms. A design team at the Dev and
              Design bootcamp built the full product. I owned the messaging experience, from flows
              through high-fidelity screens.
            </p>
          </div>

          <div className="shadow-card border border-line rounded-lg p-6">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Industry</dt>
                <dd className="text-charcoal">SaaS and social media tools</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Stage</dt>
                <dd className="text-charcoal">Concept project, team build</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Duration</dt>
                <dd className="text-charcoal">September 2024 to November 2024</dd>
              </div>
              <div>
                <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Role</dt>
                <dd className="text-charcoal">Product Designer, messaging experience</dd>
              </div>
            </dl>
          </div>
        </div>

        <ImageBlock label="Figma mockup: hero visual" />
      </section>

      {/* ── 01 CONTEXT ── */}
      <Section number="01" title="Context">
        <p>
          PostPilot came out of a team project at the Dev and Design bootcamp. The product covers five
          areas: post scheduling, analytics, engagement, messaging and settings. A team of designers
          split ownership across the product under a shared direction, with a team lead coordinating the
          work. I owned the messaging experience end to end: flows, interaction patterns and
          high-fidelity screens, designed inside the shared style guide the team maintained for
          consistency.
        </p>
      </Section>

      {/* ── 02 THE BUSINESS PROBLEM ── */}
      <Section number="02" title="The Business Problem">
        <p>
          Social media managers run accounts across multiple platforms and the work fragments fast:
          separate schedulers, separate inboxes, separate analytics. Conversations scatter across apps
          while executives want oversight of what goes out under the brand. Time disappears into
          switching instead of responding.
        </p>
        <Lead lead="Problem statement:">
          Social media managers lack one place to schedule content, track performance and handle
          conversations across platforms. Every added platform multiplies the switching cost.
        </Lead>
        <p>
          Two questions framed my slice of the work. How might we bring conversations from every
          platform into one place without losing platform context? How might we let managers respond
          fast enough to keep audiences engaged?
        </p>
      </Section>

      {/* ── 03 PRODUCT GOALS ── */}
      <Section number="03" title="Product Goals">
        <p>
          No formal success metrics were defined before design started. The project was exploratory and
          focused on validating demand for a unified management tool through research and testing.
          Evaluation stayed directional.
        </p>
      </Section>

      {/* ── 04 CONSTRAINTS ── */}
      <Section number="04" title="Constraints">
        <p>Four constraints shaped the work.</p>
        <Lead lead="Timeline.">
          A fixed bootcamp schedule of roughly three months for a five-area product.
        </Lead>
        <Lead lead="Concept stage.">
          No live platform integrations existed. Every account, message and metric in the prototype was
          constructed.
        </Lead>
        <Lead lead="Team consistency.">
          Multiple designers on one product meant every section decision had to hold inside the shared
          style guide. Freedom traded against coherence.
        </Lead>
        <Lead lead="Research scope.">
          The budget allowed one quantitative survey and prototype testing. No interview program ran,
          which limited depth behind the numbers.
        </Lead>
      </Section>

      {/* ── 05 RESEARCH APPROACH ── */}
      <Section
        number="05"
        title="Research Approach"
        image={{ label: "FigJam board: research synthesis", wide: true }}
      >
        <p>
          The team ran a quantitative survey with 20 respondents, screened around managing multiple
          social accounts. Twenty is a small base and the findings were treated as directional signals,
          stated here with the base disclosed.
        </p>
        <p>Three signals shaped the direction.</p>
        <p>
          Scheduling efficiency led satisfaction factors, named by 45% of respondents, with ease of use
          second at 30%. Managers judge these tools by how fast routine work gets done.
        </p>
        <p>
          Multi-profile management ranked as the top-rated feature at 45%, ahead of collaboration and AI
          content generation. Managing several accounts in one place is the core job.
        </p>
        <p>
          Fragmented communication surfaced repeatedly in open responses. Conversations spread across
          platform inboxes cost managers time and missed replies. This signal shaped my section
          directly.
        </p>
        <p>
          Prototype testing followed with walkthrough sessions on core tasks, gathering qualitative
          feedback across the product areas.
        </p>
      </Section>

      {/* ── 06 INFORMATION ARCHITECTURE ── */}
      <Section
        number="06"
        title="Information Architecture"
        image={{ label: "FigJam board: IA structure", wide: true }}
      >
        <p>
          The team structured the product around five top-level areas matching the manager's jobs:
          Post, Analytics, Engagement, Message and Settings. Messaging earned a top-level position
          rather than a sub-feature slot because the research signal on fragmented communication pointed
          at conversations as a daily job, not an occasional one. Within my area, the structure follows
          platform channels feeding one consolidated view.
        </p>
      </Section>

      {/* ── 07 STRATEGY AND TRADEOFFS ── */}
      <Section number="07" title="Strategy and Tradeoffs">
        <p>Two decisions defined my section and one defined the product.</p>
        <Lead lead="Unified inbox over per-platform views.">
          Messaging consolidates conversations from every connected platform into one inbox with an
          all-messages view. The alternative, separate views per platform, preserves platform context
          but recreates the switching problem inside the product. The consolidation carries the risk of
          losing context, so channel identity stays visible on every conversation.
        </Lead>
        <Lead lead="Respond in place.">
          Replies happen inside the thread without leaving the inbox. Speed of response beat feature
          depth for the manager's daily rhythm.
        </Lead>
        <Lead lead="AI as concept, not build.">
          The team included an AI content generator in post creation, framed as a concept feature.
          Nothing behind the interface existed to power generation and the product presents the feature
          as a future direction. Untested AI presented as working AI breaks trust with reviewers and
          users alike.
        </Lead>
      </Section>

      {/* ── 08 TEAM AND CONSISTENCY ── */}
      <Section
        number="08"
        title="Team and Consistency"
        image={{ label: "Figma mockup: team style guide" }}
      >
        <p>
          A multi-designer build lives or dies on coherence. The team maintained a shared style guide
          covering colour, type scales and components, and every section, including mine, shipped inside
          those rules. Working this way meant my messaging decisions had to survive review against
          screens I never designed: same rails, same hierarchy patterns, same component behaviour. The
          discipline mirrors how design systems work inside product teams and it shaped how I document
          and hand off my own work since.
        </p>
      </Section>

      {/* ── 09 DESIGN DECISIONS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionHeading number="09">Design Decisions</SectionHeading>
          <div className={`justify-body space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
            <p>Four decisions carry the messaging experience. Each traces to a signal or constraint.</p>
            <Lead lead="One inbox, every platform.">
              Incoming messages from all connected channels consolidate into a single view with unread
              counts at the top level. Source: fragmented-communication signal.
            </Lead>
          </div>
        </div>
        <ImageBlock label="Figma mockup: unified inbox" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Channel rail with platform context.">
            A left rail lists connected platforms with per-channel filtering, keeping platform identity
            one click away without splitting the inbox. Source: the consolidation tradeoff.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: channel filtering" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Thread view with in-place replies.">
            Conversations open in a thread beside the inbox and replies send without navigation.
            Managers keep the queue visible while responding. Source: respond-in-place decision.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: conversation thread" />

        <div className={`justify-body ${CASE_STUDY_WIDTH} mx-auto mt-8 space-y-5 ${CASE_STUDY_BODY_TEXT}`}>
          <Lead lead="Read and unread state as workflow.">
            Unread counts and read states function as the manager's queue, marking what needs attention
            across every platform at a glance. Source: scheduling-efficiency signal applied to
            conversations.
          </Lead>
        </div>
        <ImageBlock label="Figma mockup: inbox states" />
      </section>

      {/* ── 10 OUTCOMES ── */}
      <Section number="10" title="Outcomes">
        <p>
          Outcomes are directional and stated as such. Walkthrough participants completed core messaging
          tasks in the prototype and feedback supported the unified inbox direction. The survey
          signalled demand for consolidated management, with multi-profile handling rated highest among
          features. The project closed as a complete five-area concept with a consistent design language
          across a multi-designer team.
        </p>
        <p>
          The honest gaps. No formal metrics existed, so no benchmark separates success from motion.
          Research ran quantitative only, leaving the reasoning behind the numbers thin. The AI content
          generator stayed conceptual. And the experience was designed desktop-first while social media
          managers work heavily from phones.
        </p>
      </Section>

      <PrototypeCTA buttonLabel="Prototype coming soon" />

      {/* ── 11 REFLECTION ── */}
      <Section number="11" title="Reflection">
        <p>Three things changed in my practice after this project.</p>
        <Lead lead="Numbers need interviews behind them.">
          A 20-person survey produced useful signals and no depth on why. Pairing quantitative screening
          with even three interviews would have sharpened every decision. Later projects run mixed
          methods by default.
        </Lead>
        <Lead lead="Consistency is a design skill, not a constraint.">
          Working inside a shared style guide with other designers taught me to defend decisions in
          system terms rather than preference terms. The lesson transfers directly to design system work
          on product teams.
        </Lead>
        <Lead lead="Own your slice fully.">
          Owning one section of a larger product meant depth over breadth: every state, every edge of
          the messaging experience was mine to resolve. Clear ownership boundaries made the team faster
          and the work stronger.
        </Lead>
      </Section>

      {/* ── 12 KEY TAKEAWAYS ── */}
      <Section number="12" title="Key Takeaways">
        <Lead lead="Consolidation needs context.">
          The unified inbox works because platform identity stays visible. Merging without context
          markers would trade one problem for another.
        </Lead>
        <Lead lead="Small research stated honestly beats big claims.">
          Twenty respondents with the base disclosed carries more credibility than percentages floating
          without one.
        </Lead>
        <Lead lead="Team coherence is the deliverable.">
          On multi-designer builds, the shipped product is the style guide holding. Individual
          brilliance outside the system reads as inconsistency to users.
        </Lead>
      </Section>

      <ExploreCaseStudies currentTitle="PostPilot" />

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
