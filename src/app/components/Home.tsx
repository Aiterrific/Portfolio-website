import { Link, useLocation } from "react-router";
import curvedLines from "figma:asset/e30f175e1bb93890fae06592bb6268108ac16a81.png";
import terenceHeadshot from "../../assets/terence-attah.jpg";
import { PROJECTS } from "../data/projects";
import Footer from "./Footer";
import { navLinkClasses } from "./navLinkClasses";

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
  const location = useLocation();

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
              aria-current={location.pathname === "/about" ? "page" : undefined}
              className={navLinkClasses(location.pathname === "/about")}
            >
              About
            </Link>
            <Link
              to="/work"
              aria-current={location.pathname === "/work" ? "page" : undefined}
              className={navLinkClasses(location.pathname === "/work")}
            >
              Work
            </Link>
            <a href="mailto:contact@terenceattah.com" className={navLinkClasses(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden">
        <div className="grid md:grid-cols-2 md:min-h-[600px]">
          {/* Left: full-bleed headshot */}
          <div className="relative h-[400px] md:h-auto">
            <img
              src={terenceHeadshot}
              alt="Terence Attah"
              className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
            />
          </div>

          {/* Right: copy */}
          <div className="px-8 py-16 md:py-20 flex flex-col justify-center">
            <div className="max-w-lg">
              <h1 className="font-serif font-normal text-4xl md:text-5xl leading-tight mb-4 text-navy">
                I turn complex systems into products people actually understand.
              </h1>
              <p className="text-lg md:text-xl text-muted-text leading-relaxed">
                Product designer working across digital platforms. I like a good challenge.
              </p>
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

      <Footer />
    </div>
  );
}
