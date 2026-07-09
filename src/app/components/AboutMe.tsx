import curvedLines from "figma:asset/e30f175e1bb93890fae06592bb6268108ac16a81.png";
import terenceHeadshot from "../../assets/terence-attah.jpg";
import Footer from "./Footer";

const CORE_COMPETENCIES = [
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
  "Responsive Design",
  "Product Thinking",
  "Figma",
  "FigJam",
  "Miro",
  "Notion",
  "Maze",
  "Google Analytics",
  "Hotjar",
  "ChatGPT",
  "Claude",
  "Cross-Functional Collaboration",
];

const QUOTES = [
  {
    text: "Beauty and brains, pleasure and usability: these should go hand in hand.",
    author: "Don Norman",
  },
  {
    text: "If you do it right, it will last forever.",
    author: "Massimo Vignelli",
  },
];

export default function AboutMe() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden">
        <div className="grid md:grid-cols-2 md:min-h-[600px]">
          <div className="relative h-[400px] md:h-auto">
            <img
              src={terenceHeadshot}
              alt="Terence Attah"
              className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
            />
          </div>
          <div className="px-8 py-16 md:py-20 flex flex-col justify-center">
            <div className="max-w-lg">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-text mb-4">product designer</p>
              <h1 className="font-serif font-normal text-4xl md:text-5xl leading-tight mb-4 text-navy">
                I am a product designer who makes complex systems simple enough for anyone to use.
              </h1>
              <p className="text-lg md:text-xl text-muted-text leading-relaxed">
                I help teams turn tangled problems into clear, usable products across fintech, SaaS and real estate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS TERENCE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif font-normal text-4xl text-navy mb-10 text-center">Who Is Terence</h2>
          <div className="justify-body">
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              I am Terence, a Digital Product Designer. I came into design due to my creative mindset and passion for innovation, and I have spent the last 4 years designing products across fintech, SaaS, Realtech, Edtech and more. I approach every project as a problem solver first and a designer second. My focus is on the parts of a product that carry the most risk for the user: the moments where people hesitate, get confused, or give up. I design to remove that friction.
            </p>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              My strongest work sits at the intersection of product thinking and design, where I can shape both the experience and the logic behind it. I care about accessibility, about learning experiences, and about building products that help people from underrepresented communities grow.
            </p>
            <p className="text-charcoal text-lg leading-relaxed">
              For me, a product succeeds when the company's goals, the user's needs and the team's shared understanding all line up. Clean visuals matter, but clarity matters more.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUOTES ── */}
      <section className="py-20 bg-band relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <img src={curvedLines} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {QUOTES.map((quote) => (
              <blockquote key={quote.author} className="text-center md:text-left">
                <p className="font-serif text-2xl md:text-3xl text-navy leading-snug mb-4">"{quote.text}"</p>
                <cite className="not-italic text-sm text-muted-text uppercase tracking-[0.1em]">— {quote.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── MY CORE COMPETENCIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif font-normal text-4xl text-navy mb-4 text-center">My Core Competencies</h2>
          <p className="text-muted-text text-center mb-10 max-w-2xl mx-auto">
            The skills and tools I use to turn ideas into products that work for both users and the business.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {CORE_COMPETENCIES.map((skill) => (
              <div
                key={skill}
                className="bg-surface border border-line rounded-full px-3 py-1.5 text-sm text-charcoal whitespace-nowrap cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I LIVE FOR ── */}
      <section className="py-20 bg-band relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <img src={curvedLines} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-3xl mx-auto px-8">
          <h2 className="font-serif font-normal text-4xl text-navy mb-10 text-center">What I Live For</h2>
          <div className="justify-body">
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              When I am not designing, I am usually learning something new or spending time with family playing video games on my console, or long tennis in the summer. This keeps me grounded. I have a partner and family close by in Calgary, and that support is a big part of how I keep growing.
            </p>
            <p className="text-charcoal text-lg leading-relaxed mb-6">
              I like a good challenge. I am drawn to problems that look messy at first, the kind most people avoid, because untangling them is where the interesting work happens.
            </p>
            <p className="text-charcoal text-lg leading-relaxed">
              What I value most is working with people who push me to get better, and building things that make a real difference for the people who use them.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
