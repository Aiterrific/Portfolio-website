import { Link, useLocation } from "react-router";

const LINK_CLASSES =
  "text-white/90 hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy";

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleWorkClick = () => {
    document.getElementById("selected-work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* CTA */}
          <div>
            <h2 className="font-serif font-normal text-4xl md:text-5xl leading-tight mb-4">
              Let's build something together.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
              I take complex systems and make them make sense to the people who use them. That is the work I like most.
            </p>
            <a
              href="mailto:contact@terenceattah.com"
              className="inline-block text-2xl md:text-3xl font-semibold hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              contact@terenceattah.com
            </a>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-4 md:items-end" aria-label="Footer">
            {isHome ? (
              <button type="button" onClick={handleWorkClick} className={LINK_CLASSES}>
                Work
              </button>
            ) : (
              <Link to="/#selected-work" className={LINK_CLASSES}>
                Work
              </Link>
            )}
            <Link to="/about" className={LINK_CLASSES}>
              About
            </Link>
            <a href="mailto:contact@terenceattah.com" className={LINK_CLASSES}>
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/terenceattah/"
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASSES}
            >
              LinkedIn
            </a>
          </nav>
        </div>

        <div className="border-t border-white/15 mt-12 pt-6">
          <p className="text-white/60 text-sm">© 2026 Terence Attah.</p>
        </div>
      </div>
    </footer>
  );
}
