import { CASE_STUDY_WIDTH, CASE_STUDY_BODY_TEXT } from "../data/caseStudyStyles";
import { CaseStudyNav } from "./CaseStudyShared";
import postpilotHero from "../../assets/postpilot/postpilot-hero.webp";

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
      </section>
    </div>
  );
}
