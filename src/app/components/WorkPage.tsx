import { Link } from "react-router";
import { PROJECTS } from "../data/projects";
import Footer from "./Footer";

const WORK_ITEMS = [
  {
    title: "CoFundEstate",
    description: "Making real estate investment accessible by turning a high-barrier process into a guided, confidence-building flow.",
    tags: ["UX Research", "Product Strategy", "UI Design", "Prototyping"],
  },
  {
    title: "ConnectLocaly",
    description: "A two-sided local marketplace made usable through structure when no real inventory existed yet.",
    tags: ["UX Research", "Information Architecture", "UI Design"],
  },
  {
    title: "Batchly",
    description: "Streamlined bulk purchasing for small business buyers, with trust designed into every checkout and reorder.",
    tags: ["UX Research", "UI Design", "Prototyping"],
  },
  {
    title: "PostPilot",
    description: "A unified messaging experience for a social media tool, built inside a multi-designer design system.",
    tags: ["UX Design", "UI Design", "Design Systems"],
  },
];

export default function WorkPage() {
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
            <Link
              to="/work"
              className="text-sm text-navy font-medium rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Work
            </Link>
            <a
              href="mailto:contact@terenceattah.com"
              className="text-sm text-teal hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* ── INTRO ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h1 className="font-serif font-normal text-4xl md:text-5xl text-navy mb-4">Selected Work</h1>
          <p className="text-lg text-muted-text">
            A collection of projects where I turned complex problems into clear, usable products.
          </p>
        </div>
      </section>

      {/* ── WORK GRID ── */}
      <section className="pb-20 md:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-8 flex flex-col gap-10">
          {WORK_ITEMS.map((item) => {
            const project = PROJECTS.find((p) => p.title === item.title);
            if (!project) return null;

            const cardInner = (
              <>
                <div className="h-64 md:h-80 overflow-hidden relative">
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-navy flex items-center justify-center px-6">
                      <span className="text-white/80 text-sm uppercase tracking-wide text-center">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h2
                    className="inline-block text-2xl text-charcoal mb-2 group-hover:underline group-hover:decoration-gold group-hover:decoration-2 group-hover:underline-offset-4"
                    style={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-muted-text leading-relaxed mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs text-charcoal bg-surface border border-line rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            );

            if (project.path) {
              return (
                <Link
                  key={project.id}
                  to={project.path}
                  className="card-lift group block bg-white rounded-2xl overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {cardInner}
                </Link>
              );
            }

            return (
              <div key={project.id} className="shadow-card group block bg-white rounded-2xl overflow-hidden cursor-default">
                {cardInner}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
