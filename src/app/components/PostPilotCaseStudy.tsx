import type { ReactNode } from "react";
import { CASE_STUDY_WIDTH, CASE_STUDY_BODY_TEXT } from "../data/caseStudyStyles";
import Footer from "./Footer";
import { CaseStudyNav, ExploreCaseStudies } from "./CaseStudyShared";
import postpilotHero from "../../assets/postpilot/postpilot-hero.webp";
import postpilotCompetitiveAnalysis from "../../assets/postpilot/postpilot-competitive-analysis.webp";
import postpilotFeatureComparison from "../../assets/postpilot/postpilot-feature-comparison.webp";
import postpilotMessagingFlow from "../../assets/postpilot/postpilot-messaging-flow.webp";
import postpilotMessagingScreens from "../../assets/postpilot/postpilot-messaging-screens.webp";
import ResearchStoryboards from "./ResearchStoryboards";
import KeyFindingsCollage from "./KeyFindingsCollage";
import PersonaExpandCards from "./PersonaExpandCards";
import ProductScreensCollage from "./ProductScreensCollage";
import AnalyticsScreensCollage from "./AnalyticsScreensCollage";

function SectionIntro({ eyebrow, heading }: { eyebrow: string; heading: string }) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-muted-text mb-4">{eyebrow}</p>
      <h2 className="font-serif font-normal text-4xl text-navy mb-4">{heading}</h2>
    </>
  );
}

function BodyText({ children }: { children: ReactNode }) {
  return <div className={`justify-body space-y-5 ${CASE_STUDY_BODY_TEXT}`}>{children}</div>;
}

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
      <img src={src} alt={alt} className="w-full h-auto border border-line rounded-[12px]" />
    </figure>
  );
}

function ImagePlaceholder({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <figure className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
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

function StatStrip({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-navy text-4xl md:text-5xl leading-none mb-2" style={{ fontWeight: 700 }}>
              {stat.value}
            </p>
            <p className="text-muted-text text-sm leading-relaxed">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PostPilotCaseStudy() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <CaseStudyNav />

      {/* ── HERO IMAGE ── */}
      <div className="w-full mt-8">
        <img
          src={postpilotHero}
          alt="PostPilot brand lockup with calendar, analytics and messaging screens on a purple gradient"
          className="w-full h-auto border border-line rounded-[12px]"
        />
      </div>

      {/* ── INTRO ── */}
      <section className="pt-10 md:pt-12 pb-12 md:pb-16">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-text font-heading mb-4">
            Case Study
          </p>
          <h1 className="font-serif font-normal text-navy text-4xl md:text-5xl leading-tight mb-3">
            PostPilot: Managing Social Media from One Dashboard
          </h1>
          <p className={`justify-body ${CASE_STUDY_BODY_TEXT} mb-10`}>
            PostPilot is a social media management tool for scheduling posts, tracking performance and
            handling conversations across platforms. A design team at the Dev and Design bootcamp built
            the full product. I owned the messaging experience, from flows through high-fidelity screens.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-line">
            <div>
              <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Industry</dt>
              <dd className="text-charcoal">SaaS and social media tools</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide uppercase text-muted-text mb-1 font-heading">Stage</dt>
              <dd className="text-charcoal">Zero-to-one team build</dd>
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
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="The problem" heading="Social media management is fragmented" />
          <BodyText>
            <p>
              Businesses and social media managers juggle multiple platforms, tight content deadlines and
              scattered analytics. Executives add another layer: they need brand control without
              micromanaging every post. Most tools solve scheduling or analytics or conversations. Few
              solve all three in one place, and fewer still handle the approval relationship between
              managers and leadership.
            </p>
            <p>
              PostPilot brings scheduling, performance tracking and conversations into one dashboard, with
              role-based access so executives approve work without blocking it. Our team of designers
              built the full product. I owned the messaging experience end to end: flows, states and
              high-fidelity screens for conversations across every connected platform.
            </p>
          </BodyText>
        </div>
      </section>

      {/* ── RESEARCH ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="Research" heading="What managers told us" />
          <BodyText>
            <p>
              We surveyed social media managers and business owners on their current tools, then walked a
              competitor product end to end, from sign-up through posting to analytics, documenting every
              point where the workflow broke down.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ResearchStoryboards />
          <p className="text-sm text-muted-text text-center mt-3">
            Walkthrough of a competitor tool — post creation, customization and analytics marked as
            friction points.
          </p>
        </div>

        <StatStrip
          stats={[
            { value: "45%", label: "named scheduling efficiency as the top driver of satisfaction with their current tool" },
            { value: "40%", label: "ranked ease of use as their biggest concern" },
            { value: "45%", label: "rated multi-profile management the feature they want most" },
          ]}
        />

        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <BodyText>
            <p>
              The pattern was consistent: people wanted fewer tools, not more features. Scheduling had to
              be fast, the interface had to stay simple under deadline pressure, and switching between
              client profiles had to cost nothing.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <KeyFindingsCollage />
          <p className="text-sm text-muted-text text-center mt-3">
            Key survey findings — satisfaction drivers, preferences, top rated features and user concerns.
          </p>
        </div>
      </section>

      {/* ── MARKET ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="Market" heading="Where existing tools fall short" />
          <BodyText>
            <p>
              We audited Buffer, Zoho Social, Hootsuite and Sendible against the needs from our research.
              Every tool handled multiplatform scheduling and analytics. None offered multi-profile
              creation the way client-juggling managers need, and none integrated calendar reminders into
              the posting workflow. Those two gaps, plus a collaboration model built for approval rather
              than oversight, defined PostPilot's edge.
            </p>
          </BodyText>
        </div>
        <CaseImage
          src={postpilotCompetitiveAnalysis}
          alt="Competitive analysis table comparing Buffer, Zoho Social, Hootsuite and Sendible across scheduling, platform integration, analytics, collaboration and unique features"
        />
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <img
            src={postpilotFeatureComparison}
            alt="Feature comparison matrix showing PostPilot alongside four competitors, with PostPilot alone offering multi-profile creation and calendar reminder integration"
            className="w-full h-auto border border-line rounded-[12px]"
          />
          <p className="text-sm text-muted-text text-center mt-3">
            PostPilot's edge: multi-profile creation and calendar reminders, missing from every
            competitor audited.
          </p>
        </div>
      </section>

      {/* ── USERS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="Users" heading="Two people, one tool" />
          <BodyText>
            <p>
              Two personas anchored every decision. Emily runs multiple client accounts and lives inside
              the tool all day; her needs are speed, insight and smooth collaboration. John runs the
              company; he needs oversight, brand control and ROI without touching the day-to-day. Every
              screen had to serve Emily's pace without losing John's confidence.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <PersonaExpandCards />
        </div>
      </section>

      {/* ── MY FOCUS ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="My focus" heading="Designing the messaging experience" />
          <BodyText>
            <p>
              Conversations were the least solved part of every competitor. Replies to a brand live on
              Facebook, LinkedIn and Instagram at once, and managers were answering in three separate
              apps. I designed PostPilot's unified inbox: one thread list across every connected channel,
              with read, unread and per-platform filters so a manager triages hundreds of messages without
              losing a client's voice.
            </p>
            <p>
              The core decisions: channel identity stays visible on every thread so replies keep platform
              context; unread state drives the default sort because triage beats chronology under
              deadline; and conversation history sits beside the reply box so managers never quote a
              client from memory. Each decision came straight from the research: speed, simplicity, zero
              switching.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <img
            src={postpilotMessagingFlow}
            alt="Messaging flow diagram: from opening Messages through channel filtering into the unified inbox, opening a DM, comment reply or mention into the conversation view, then sending a reply or saving a draft, with sent threads marked read and returning to the inbox"
            className="w-full h-auto border border-line rounded-[12px]"
          />
          <p className="text-sm text-muted-text text-center mt-3">
            The unified inbox flow — every path from entry to reply, with read state driving the return
            loop.
          </p>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <img
            src={postpilotMessagingScreens}
            alt="PostPilot unified inbox: channel sidebar with Facebook, LinkedIn and Instagram, thread list with All, Read and Unread tabs, open conversation with message history and reply box, and a contact context panel showing the sender's role and audience"
            className="w-full h-auto border border-line rounded-[12px]"
          />
          <p className="text-sm text-muted-text text-center mt-3">
            The unified inbox — channel identity, triage tabs, history beside the reply box and sender
            context in one view.
          </p>
        </div>
      </section>

      {/* ── THE PRODUCT ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="The product" heading="One dashboard, three jobs" />
          <BodyText>
            <p>
              Scheduling runs on a full calendar with month and week views, per-channel filters and
              multi-platform posts in one create flow. Analytics reports reach, engagement, impressions
              and clicks per channel with daily averages at a glance. Messaging closes the loop, turning
              PostPilot from a publishing tool into the place where the whole social media job happens.
            </p>
          </BodyText>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <ProductScreensCollage />
          <p className="text-sm text-muted-text text-center mt-3">
            The create flow end to end — composing, scheduling, approval and team roles, with the
            calendar in month and week views.
          </p>
        </div>
        <div className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
          <AnalyticsScreensCollage />
          <p className="text-sm text-muted-text text-center mt-3">
            Analytics across every channel — audience totals, per-post performance and channel-level
            trends in one place.
          </p>
        </div>
      </section>

      {/* ── VALIDATION ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="Validation" heading="Testing the flows" />
        </div>
        <ImagePlaceholder label="Testing results — data pending" />
      </section>

      {/* ── REFLECTION ── */}
      <section className="py-12 md:py-16 border-t border-line">
        <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
          <SectionIntro eyebrow="Reflection" heading="What this project sharpened" />
          <BodyText>
            <p>
              Owning one slice of a team build taught me a different discipline than owning everything. My
              flows had to click into screens I did not design, follow tokens I did not set, and serve
              personas the whole team shared. The messaging experience shipped stronger for those
              constraints: shared foundations forced clarity about which decisions were mine to make and
              which were mine to align with.
            </p>
          </BodyText>
        </div>
      </section>

      <ExploreCaseStudies currentTitle="PostPilot" />

      <Footer />
    </div>
  );
}
