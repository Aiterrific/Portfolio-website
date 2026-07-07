import type { ReactNode } from "react";
import { Link } from "react-router";
import { PROJECTS } from "../data/projects";
import { CASE_STUDY_WIDTH, CASE_STUDY_BODY_TEXT, CASE_STUDY_HEADING_LABEL } from "../data/caseStudyStyles";

export function CaseStudyNav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className={`${CASE_STUDY_WIDTH} mx-auto px-6 h-16 flex items-center justify-between`}>
        <Link
          to="/"
          className="text-charcoal text-sm tracking-[0.2em] transition-opacity duration-200 hover:opacity-70 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          style={{ fontWeight: 700 }}
        >
          TERENCE
        </Link>
        <Link
          to="/"
          className="text-sm text-teal hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          ← Back
        </Link>
      </div>
    </header>
  );
}

export function PlaceholderBox({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder image: ${label}`}
      className={`w-full ${wide ? "aspect-[21/9]" : "aspect-video"} bg-stone-200 border border-stone-300 rounded-md flex items-center justify-center px-6`}
    >
      <span className="text-xs md:text-sm uppercase tracking-wide text-stone-600 text-center">
        {label}
      </span>
    </div>
  );
}

export function ImageBlock({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <figure className={`${CASE_STUDY_WIDTH} mx-auto mt-8`}>
      <div
        role="img"
        aria-label={`Placeholder image: ${label}`}
        className={`w-full ${wide ? "aspect-[21/9]" : "aspect-video"} bg-stone-200 border border-stone-300 rounded-md`}
      />
      <figcaption className="mt-3 text-xs md:text-sm uppercase tracking-wide text-stone-600 text-center">
        {label}
      </figcaption>
    </figure>
  );
}

export function SectionHeading({ number, children }: { number: string; children: ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-3 mb-6 md:mb-8">
      <span className="text-xs tracking-[0.2em] text-muted-text font-heading" aria-hidden="true">
        {number}
      </span>
      <span className={CASE_STUDY_HEADING_LABEL}>{children}</span>
    </h2>
  );
}

export function Section({
  number,
  title,
  children,
  image,
}: {
  number: string;
  title: string;
  children: ReactNode;
  image?: { label: string; wide?: boolean };
}) {
  return (
    <section className="py-12 md:py-16 border-t border-line first:border-t-0 first:pt-0">
      <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
        <SectionHeading number={number}>{title}</SectionHeading>
        <div className={`justify-body space-y-5 ${CASE_STUDY_BODY_TEXT}`}>{children}</div>
      </div>
      {image && <ImageBlock label={image.label} wide={image.wide} />}
    </section>
  );
}

export function Lead({ lead, children }: { lead: string; children: ReactNode }) {
  return (
    <p>
      <strong className="text-charcoal">{lead}</strong> {children}
    </p>
  );
}

export function PrototypeCTA({ buttonLabel = "Coming soon" }: { buttonLabel?: string }) {
  return (
    <section className="py-16 md:py-20 border-t border-line text-center">
      <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
        <h2 className="text-2xl md:text-3xl mb-6">View the prototype</h2>
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="inline-flex items-center justify-center rounded-md bg-surface text-muted-text px-8 py-3 text-sm font-medium cursor-not-allowed"
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}

export function ExploreCaseStudies({ currentTitle }: { currentTitle: string }) {
  const otherProjects = PROJECTS.filter((project) => project.title !== currentTitle);

  return (
    <section className="py-12 md:py-16 border-t border-line">
      <div className={`${CASE_STUDY_WIDTH} mx-auto`}>
        <SectionHeading number="14">Explore Case Studies</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          {otherProjects.map((project) => {
            const cardContent = (
              <>
                <PlaceholderBox label={project.title} />
                <h3 className="mt-4 text-base md:text-lg text-charcoal">{project.title}</h3>
                <p className="justify-body mt-1 text-sm text-charcoal leading-relaxed">{project.desc}</p>
              </>
            );

            if (project.path) {
              return (
                <Link
                  key={project.id}
                  to={project.path}
                  className="flex flex-col cursor-pointer rounded-lg transition-transform duration-200 hover:-translate-y-0.5 hover:ring-1 hover:ring-gold hover:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={project.id} className="flex flex-col cursor-default">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
