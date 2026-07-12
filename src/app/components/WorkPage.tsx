import { Link } from "react-router";
import Footer from "./Footer";
import SiteHeader from "./SiteHeader";

const WORK_ITEMS = [
  {
    title: "CoFundEstate",
    headline: "Making Real Estate Investing Approachable for First-Time Investors",
    tags: ["UX Research", "Product Strategy", "Prototyping"],
    path: "/case-studies/cofundestate",
    tintBg: "bg-[#E6EEF3]",
    primaryClass: "text-navy",
  },
  {
    title: "ConnectLocaly",
    headline: "Helping 50+ Local Businesses Get Found: A Mobile Platform Redesign",
    tags: ["UX Research", "Information Architecture", "UI Design"],
    path: "/case-studies/connectlocaly",
    tintBg: "bg-[#ECEBF7]",
    primaryClass: "text-teal",
  },
  {
    title: "Batchly",
    headline: "Designing Trust into Bulk Purchasing for Independent Restaurants",
    tags: ["UX Research", "UI Design", "Prototyping"],
    path: "/case-studies/batchly",
    tintBg: "bg-[#F4FBDA]",
    primaryClass: "text-charcoal",
  },
  {
    title: "PostPilot",
    headline: "Cutting Time-to-Publish in Half for a SaaS Scheduling Tool",
    tags: ["UX Design", "UI Design", "Design Systems"],
    path: "/case-studies/postpilot",
    tintBg: "bg-[#EFDCFA]",
    primaryClass: "text-muted-text",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SiteHeader />

      {/* ── INTRO ── */}
      <section className="pt-16 md:pt-24 bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h1 className="font-serif font-normal text-4xl md:text-5xl text-navy mb-4">Selected Work</h1>
          <p className="text-lg text-muted-text">
            A collection of projects where I turned complex problems into clear, usable products.
          </p>
        </div>
      </section>

      {/* ── WORK GRID ── */}
      <section className="pt-12 md:pt-16 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {WORK_ITEMS.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group block cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div className={`aspect-[3/2] rounded-2xl overflow-hidden flex items-center justify-center ${item.tintBg}`}>
                  {/* PLACEHOLDER: replace with project mockup */}
                  <span
                    className={`text-2xl text-center px-6 transition-transform duration-200 group-hover:scale-[1.02] ${item.primaryClass}`}
                    style={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </span>
                </div>
                <div className="pt-6 pb-6">
                  <p className="text-base text-muted-text mb-2">{item.title}</p>
                  <h2
                    className="text-2xl sm:text-3xl text-navy leading-snug mb-5 transition-colors duration-200 group-hover:text-gold"
                    style={{ fontWeight: 700 }}
                  >
                    {item.headline}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm text-muted-text bg-white border border-line rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
