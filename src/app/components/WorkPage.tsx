import { Link } from "react-router";
import Footer from "./Footer";
import SiteHeader from "./SiteHeader";

const WORK_ITEMS = [
  {
    title: "CoFundEstate",
    headline: "Making Real Estate Investment Accessible Through Crowdfunding.",
    tags: ["UX Research", "Product Strategy", "Prototyping"],
    path: "/case-studies/cofundestate",
    tintBg: "bg-[#E3EAF0]",
    tintText: "text-[#00334E]",
  },
  {
    title: "ConnectLocaly",
    headline: "Helping Communities Discover and Trust Local Businesses.",
    tags: ["UX Research", "Information Architecture", "UI Design"],
    path: "/case-studies/connectlocaly",
    tintBg: "bg-[#E1EEEC]",
    tintText: "text-[#005B5E]",
  },
  {
    title: "Batchly",
    headline: "Streamlining Bulk Purchasing for Small Business Buyers.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    path: "/case-studies/batchly",
    tintBg: "bg-[#F3E9D7]",
    tintText: "text-[#8A6A3A]",
  },
  {
    title: "PostPilot",
    headline: "Unifying Social Media Conversations Into One Inbox.",
    tags: ["UX Design", "UI Design", "Design Systems"],
    path: "/case-studies/postpilot",
    tintBg: "bg-[#E9E6F0]",
    tintText: "text-[#5B5480]",
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
                className="card-lift group block cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <div
                  className={`aspect-[4/3] rounded-2xl flex items-center justify-center ${item.tintBg}`}
                >
                  <span className={`text-lg sm:text-xl uppercase tracking-[0.15em] text-center px-6 ${item.tintText}`} style={{ fontWeight: 600 }}>
                    {item.title}
                  </span>
                </div>
                <div className="pt-5 pb-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-text mb-2">{item.title}</p>
                  <h2
                    className="text-2xl sm:text-3xl text-navy leading-snug mb-5 group-hover:underline group-hover:decoration-gold group-hover:decoration-2 group-hover:underline-offset-4"
                    style={{ fontWeight: 700 }}
                  >
                    {item.headline}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-charcoal bg-transparent border border-line rounded-full px-3 py-1"
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
