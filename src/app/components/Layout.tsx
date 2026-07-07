import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Case Studies", to: "/case-studies/cofundestate" },
] as const;

export default function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-charcoal">
      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link
              to="/"
              className="text-charcoal tracking-[0.2em] text-xl transition-opacity duration-200 hover:opacity-70 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              style={{ fontWeight: 700 }}
            >
              TERENCE
            </Link>
            <nav className="hidden md:flex gap-10">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`text-sm rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                    location.pathname === item.to
                      ? "text-navy font-medium"
                      : "text-teal hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Coming soon"
                className="text-sm text-gray-300 cursor-not-allowed"
              >
                Resume
              </button>
              <a
                href="mailto:contact@terenceattah.com"
                className="text-sm text-teal hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Contact
              </a>
            </nav>
          </div>
          <button className="md:hidden text-muted-text text-2xl" aria-label="Open menu">
            ☰
          </button>
        </div>
      </header>

      {children}
    </div>
  );
}
