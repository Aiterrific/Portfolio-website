import { Link, useLocation } from "react-router";
import { navLinkClasses } from "./navLinkClasses";

export default function SiteHeader() {
  const location = useLocation();

  return (
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
  );
}
