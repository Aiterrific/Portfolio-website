import { Link } from "react-router";
import { Linkedin, Dribbble } from "lucide-react";
import curvedLines from "figma:asset/e30f175e1bb93890fae06592bb6268108ac16a81.png";
import profilePhoto from "figma:asset/5dddb5c4efac8f81d00f36917a5d34dbbc65c949.png";
import { PROJECTS } from "../data/projects";

const SELECTED_WORK = [
  {
    title: "CoFundEstate",
    outcome: "Turned a high-barrier investment process into a guided flow that first-time investors could finish with confidence.",
    tags: ["Fintech", "Proptech"],
    description: "CoFundEstate is a web-based crowdfunding platform built to make fractional real estate investing understandable for first-time investors. I led end-to-end product design on an early-stage validation MVP, from research through developer handoff.",
  },
  {
    title: "ConnectLocaly",
    outcome: "Made a two-sided local marketplace usable when no real inventory existed yet, using structure over browsing.",
    tags: ["Local Services", "Community"],
    description: "ConnectLocaly is a two-sided platform concept linking community members with local businesses. I led end-to-end product design for a startup initiative at SkillHat, from research framing through prototyping, walkthrough testing and feasibility handoff.",
  },
  {
    title: "Batchly",
    outcome: "Streamlined bulk purchasing for small business buyers by designing trust into every checkout and reorder.",
    tags: ["B2B", "E-commerce"],
    description: "Batchly is a B2B bulk purchasing platform concept for small e-commerce business owners who order inventory from wholesale suppliers. I owned the end-to-end design as an individual course project at BrainStation, from research through information architecture, UI design, prototyping and walkthrough testing.",
  },
  {
    title: "PostPilot",
    outcome: "Unified fragmented social conversations into one inbox as part of a multi-designer product team.",
    tags: ["SaaS", "Social Media"],
    description: "PostPilot is a social media management tool concept for scheduling posts, tracking performance and handling conversations across platforms. A design team at the Dev and Design bootcamp built the full product.",
  },
];

const SERVICES = [
  {
    number: "01",
    heading: "Product & UX Design",
    description: "End-to-end design from research to handoff for complex, data-heavy products.",
    chips: ["End-to-End Product Design", "Visual Design", "Design Handoff"],
  },
  {
    number: "02",
    heading: "UX Research & Testing",
    description: "Interviews, usability walkthroughs and synthesis that ground decisions in evidence.",
    chips: ["UX Research", "User Interviews", "Usability Testing"],
  },
  {
    number: "03",
    heading: "Design Systems & Accessibility",
    description: "Reusable components and WCAG-aware patterns that scale across a product.",
    chips: ["Design Systems", "Accessibility (WCAG)", "Responsive Web & Mobile Design"],
  },
  {
    number: "04",
    heading: "Product Thinking",
    description: "Shaping the logic behind the experience, not only the interface.",
    chips: ["Product Discovery", "Data-Informed Design", "Stakeholder Management"],
  },
];

export default function Home() {
  const scrollToWork = () => {
    document.getElementById("selected-work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-charcoal tracking-[0.2em] text-xl transition-opacity duration-200 hover:opacity-70 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            style={{ fontWeight: 700 }}
          >
            TERENCE
          </Link>
          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <Link
              to="/about"
              className="text-sm text-teal hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              About
            </Link>
            <button
              type="button"
              onClick={scrollToWork}
              className="text-sm text-teal hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Work
            </button>
            <a
              href="mailto:contact@terenceattah.com"
              className="text-sm text-teal hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <img src={curvedLines} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <h1 className="font-serif font-normal text-4xl md:text-5xl leading-tight mb-4 text-navy">
                I turn complex systems into products people actually understand.
              </h1>
              <p className="text-lg md:text-xl text-muted-text leading-relaxed mb-8 max-w-lg">
                Product designer working across digital platforms. I like a good challenge.
              </p>
              <button
                type="button"
                onClick={scrollToWork}
                className="inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium text-white bg-navy ring-1 ring-gold transition-colors duration-200 hover:bg-navy-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                See My Work
              </button>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="relative flex justify-center items-center h-[500px]">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img src={profilePhoto} alt="Terence" className="w-full h-full object-cover object-[center_10%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="py-20 bg-band relative overflow-hidden" id="selected-work">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <img src={curvedLines} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <h2 className="text-4xl text-navy mb-3 text-center">Selected Work</h2>
          <p className="text-muted-text text-center mb-10">A few problems worth solving.</p>
          <div className="flex flex-col gap-12 md:gap-16">
            {SELECTED_WORK.map((item, index) => {
              const project = PROJECTS.find((p) => p.title === item.title);
              if (!project) return null;
              const reversed = index % 2 === 1;

              const rowContent = (
                <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                  <div className={`h-64 md:h-80 rounded-2xl overflow-hidden relative ${reversed ? "md:order-2" : ""}`}>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-200 work-row-zoom"
                    />
                  </div>
                  <div className={reversed ? "md:order-1" : ""}>
                    <h3 className="text-2xl text-charcoal mb-2" style={{ fontWeight: 600 }}>{project.title}</h3>
                    <p className="text-charcoal mb-3">{item.outcome}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs text-charcoal bg-surface border border-line rounded-full px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="work-desc">
                      <p className="text-muted-text text-sm leading-relaxed pt-3 max-w-xl">{item.description}</p>
                    </div>
                  </div>
                </div>
              );

              if (project.path) {
                return (
                  <Link
                    key={project.id}
                    to={project.path}
                    className="work-row block rounded-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    {rowContent}
                  </Link>
                );
              }

              return (
                <div key={project.id} className="work-row block cursor-default">
                  {rowContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="text-4xl text-navy mb-10 text-center">Services</h2>
          <div className="border-t border-line">
            {SERVICES.map((service) => (
              <div key={service.number} className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-8 border-b border-line">
                <span className="text-sm text-muted-text tracking-[0.2em] sm:w-12 flex-shrink-0" style={{ fontWeight: 600 }}>
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl text-charcoal mb-2" style={{ fontWeight: 600 }}>{service.heading}</h3>
                  <p className="text-charcoal leading-relaxed mb-3 max-w-2xl">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.chips.map((chip) => (
                      <span key={chip} className="text-xs text-charcoal bg-surface border border-line rounded-full px-3 py-1">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <img src={curvedLines} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-white mb-6">Have a problem worth solving?</h2>
          <div className="flex flex-col items-center gap-3">
            <a
              href="mailto:contact@terenceattah.com"
              className="inline-block bg-white text-navy py-3 px-8 rounded hover:bg-gray-100 transition-colors duration-200 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Email me
            </a>
            <p className="text-sm text-white/70">contact@terenceattah.com</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2026 Terence. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/terenceattah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Behance"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM3.495 11.14h3.08c.717 0 1.304-.17 1.76-.523.46-.35.685-.86.685-1.528 0-.44-.096-.82-.29-1.11-.19-.29-.44-.52-.74-.68-.295-.16-.63-.269-.98-.325-.36-.053-.74-.08-1.14-.08H3.495v4.247zm0 8.607h3.43c.4 0 .795-.04 1.18-.13.39-.088.738-.228 1.05-.43.313-.2.562-.47.748-.81.18-.34.283-.76.283-1.26 0-.92-.305-1.56-.915-1.92-.61-.35-1.42-.53-2.43-.53H3.495v5.08zM15.3 4.5h8.7v2.467h-8.7V4.5zm5.94 3.88c1.06 0 1.98.16 2.77.47.79.31 1.45.74 1.98 1.29.52.55.92 1.2 1.18 1.95.26.75.39 1.57.39 2.46 0 .94-.13 1.78-.4 2.53-.27.75-.65 1.38-1.16 1.89-.51.51-1.12.9-1.83 1.17-.71.27-1.51.41-2.4.41-1.14 0-2.13-.18-2.97-.54-.84-.36-1.54-.86-2.1-1.49-.56-.63-.98-1.37-1.26-2.23-.27-.86-.41-1.78-.41-2.76 0-.93.14-1.79.41-2.58.28-.79.68-1.47 1.21-2.03.53-.56 1.18-.99 1.96-1.29.78-.3 1.66-.45 2.64-.45zm.01 2.32c-.53 0-.99.08-1.38.24-.39.16-.72.38-.98.66-.26.28-.46.61-.59.98-.13.37-.2.77-.2 1.2h5.4c-.04-.92-.31-1.64-.81-2.16-.5-.52-1.18-.78-2.04-.78h-.4zm-3.36 5.8c.05.4.14.77.28 1.1.14.33.33.62.57.86.24.24.54.42.89.55.35.13.76.19 1.23.19.72 0 1.3-.18 1.75-.54.45-.36.73-.82.83-1.38h2.98c-.48 1.49-1.21 2.55-2.19 3.18-.98.63-2.18.94-3.61.94-.93 0-1.77-.14-2.51-.42-.74-.28-1.36-.68-1.86-1.19-.5-.51-.88-1.12-1.14-1.82-.26-.7-.39-1.48-.39-2.33 0-.83.13-1.59.39-2.28.26-.69.63-1.28 1.11-1.77.48-.49 1.06-.87 1.74-1.13.68-.26 1.44-.39 2.28-.39.94 0 1.76.17 2.46.51.7.34 1.28.81 1.74 1.4.46.59.8 1.28 1.01 2.07.21.79.3 1.64.26 2.55h-8.82z"/>
                </svg>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Dribbble"
              >
                <Dribbble size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
