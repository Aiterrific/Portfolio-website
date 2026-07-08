import curvedLines from "figma:asset/e30f175e1bb93890fae06592bb6268108ac16a81.png";
import profilePhoto from "figma:asset/5dddb5c4efac8f81d00f36917a5d34dbbc65c949.png";
import cornerstoneLogo from "figma:asset/baecd613e05765c7a5dc52a510b780033772c5e4.png";
import senecaLogo from "figma:asset/6e901f481d48c258c00bb69fd8968f600fb7c0cd.png";
import Footer from "./Footer";

const TOOLS = [
  "Figma",
  "FigJam",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Jira",
  "Confluence",
  "Miro",
  "Notion",
  "Maze",
  "Google Analytics (GA4)",
  "Hotjar",
  "ChatGPT",
  "Claude",
];

const CORE_SKILLS = [
  "End-to-End Product Design",
  "UX Research",
  "User Interviews",
  "Competitive Analysis",
  "Information Architecture",
  "User Flows",
  "Wireframing",
  "Interactive Prototyping",
  "Visual Design",
  "Design Systems",
  "Accessibility (WCAG)",
  "Usability Testing",
  "Responsive Web & Mobile Design",
  "Product Discovery",
  "Cross-Functional Collaboration",
  "Stakeholder Management",
  "Design Handoff",
  "Data-Informed Design",
  "Agile (Scrum)",
];

const EDUCATION = [
  { school: "Cornerstone Community College", location: "Vancouver, BC", program: "Advanced Diploma in UI/UX Design", year: "Sep 2025", logo: cornerstoneLogo },
  { school: "Seneca College", location: "North York, ON", program: "Post Graduate Certificate / Business Administration", year: "May 2020", logo: senecaLogo },
];

const CERTIFICATIONS = [
  { issuer: "BrainStation", title: "Product Designer Certification (PDC™)", date: "May 2026" },
  { issuer: "IBM SkillsBuild", title: "Enterprise Design Thinking Practitioner", date: "Oct 2025" },
  { issuer: "Dev and Design", title: "UI/UX Certificate", date: "Nov 2024" },
  { issuer: "World Innovation League", title: "DTTP Product Design Certificate", date: "Apr 2024" },
  { issuer: "Google", title: "Foundations of User Experience (UX) Design", date: "Apr 2024" },
  { issuer: "SCRUMstudy", title: "Scrum Fundamentals Certified", date: "Apr 2023" },
];

export default function AboutMe() {
  return (
    <div>
      {/* ── ABOUT ME ── */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start max-w-5xl mx-auto">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="font-serif font-normal text-4xl text-navy mb-10">About Me</h2>
              <p className="justify-body text-charcoal text-lg leading-relaxed mb-6">
                Product Designer with 4 years of experience solving complex problems across fintech, SaaS and e-commerce. I design with a problem-first mindset, using deep Figma expertise to take products from research to high-fidelity UI and dev handoff.
              </p>
              <p className="justify-body text-charcoal text-lg leading-relaxed mb-6">
                At Batchly, I designed a B2B bulk purchasing platform end to end as an individual project: research, information architecture, UI design, prototyping and walkthrough testing. The buyer-side experience covered supplier comparison, a trust-forward checkout and a reorder-first workflow, with an AI reorder recommendation designed as a concept feature.
              </p>
              <p className="justify-body text-charcoal text-lg leading-relaxed mb-6">
                At PostPilot, I designed the messaging experience for a team-built social media management concept, consolidating conversations from multiple platforms into one inbox with in-place replies. The work ran inside a shared style guide across a multi-designer team, from flows through high-fidelity screens.
              </p>
              <p className="justify-body text-charcoal text-lg leading-relaxed">
                I bring the same approach to every engagement: understand the system, identify where users struggle and design solutions that work for both the user and the business. I am actively seeking full-time Product Design roles.
              </p>

              {/* Achievements Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {[
                  { icon: "📊", label: "Data-Driven Product Designer (A/B Testing & Analytics)" },
                  { icon: "🏆", label: "Hackathon Winner" },
                  { icon: "🛠️", label: "Design Systems Builder (Scalable UI Libraries)" },
                  { icon: "♿", label: "Accessibility Advocate (WCAG 2.1 / AODA)" },
                ].map((a) => (
                  <div key={a.label} className="bg-surface rounded-lg p-6 text-center hover:bg-band transition-colors">
                    <div className="text-4xl mb-3">{a.icon}</div>
                    <div className="text-sm text-muted-text leading-tight">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-64 h-64 rounded-full overflow-hidden border-8 border-line shadow-xl order-1 md:order-2">
              <img src={profilePhoto} alt="Terence" className="w-full h-full object-cover object-[center_15%]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL SKILLS ── */}
      <section className="py-20 bg-band relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <img src={curvedLines} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <h2 className="font-serif font-normal text-4xl text-navy mb-10 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Tools */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-muted-text mb-6 uppercase">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <div key={t} className="bg-surface border border-line rounded-full px-3 py-1.5 text-sm text-charcoal whitespace-nowrap cursor-default">
                    {t}
                  </div>
                ))}
              </div>
            </div>
            {/* Core Skills */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-muted-text mb-6 uppercase">Core Skills</h3>
              <div className="flex flex-wrap gap-2">
                {CORE_SKILLS.map((s) => (
                  <div key={s} className="bg-surface border border-line rounded-full px-3 py-1.5 text-sm text-charcoal whitespace-nowrap cursor-default">
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-serif font-normal text-4xl text-navy mb-6 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {EDUCATION.map((e) => (
              <div key={e.school} className="bg-surface border-2 border-line rounded-xl p-5 hover:shadow-md transition-[box-shadow,border-color] duration-200 flex items-center gap-4 hover:border-navy">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg border border-line flex items-center justify-center overflow-hidden p-1">
                  <img src={e.logo} alt={e.school} className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-charcoal mb-0.5 truncate" style={{ fontWeight: 600 }}>{e.school}</p>
                  <p className="text-xs text-muted-text mb-1">{e.location}</p>
                  <p className="text-xs text-charcoal leading-snug">{e.program}</p>
                  <p className="text-xs text-muted-text mt-1">{e.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-20 bg-band relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <img src={curvedLines} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8">
          <h2 className="font-serif font-normal text-4xl text-navy mb-10 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className="bg-white border-2 border-line rounded-xl p-6 hover:shadow-lg transition-[box-shadow,border-color] duration-200 hover:border-navy">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs rounded-full px-3 py-1 bg-surface text-navy">{c.issuer}</span>
                  <span className="text-xs text-muted-text">{c.date}</span>
                </div>
                <p className="text-charcoal" style={{ fontWeight: 600 }}>{c.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}