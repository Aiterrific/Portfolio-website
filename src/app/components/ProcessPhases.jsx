import "./ProcessPhases.css";

const PHASES = [
  {
    num: "01",
    title: "Discover",
    kicker: "Research and define",
    body: "Analyzed survey data, built personas (Olu, Nadia), mapped the user journey and the business model canvas. Surfaced the core barrier: first-time investors lack capital, market knowledge and trust.",
  },
  {
    num: "02",
    title: "Structure",
    kicker: "Architecture and flows",
    body: "Rebuilt the information architecture across eight sections. Mapped the invest and pool-join flows, including decision logic for minimum amounts and payment. Produced a master flow accounting for every screen.",
  },
  {
    num: "03",
    title: "Design",
    kicker: "System and screens",
    body: "Built a token-based design system: colour, type, spacing, components. Rebuilt every screen from those components so consistency held by construction, not by chance.",
  },
  {
    num: "04",
    title: "Validate",
    kicker: "Test and refine",
    body: "Usability testing measured a 62% completion rate against a 70% target. Findings drove targeted refinements to flow clarity, hierarchy and the invest path.",
  },
];

export default function ProcessPhases() {
  return (
    <section className="pp-section" aria-labelledby="pp-heading">
      <p className="pp-eyebrow">Design process</p>
      <h2 id="pp-heading" className="pp-heading">
        A four-phase approach to rebuilding CoFundEstate
      </h2>
      <p className="pp-intro">
        From research to a validated, systemized product. Each phase fed the
        next, grounding design decisions in evidence rather than assumption.
      </p>

      <ol className="pp-grid">
        {PHASES.map((p) => (
          <li className="pp-card" key={p.num}>
            <span className="pp-num" aria-hidden="true">{p.num}</span>
            <h3 className="pp-title">{p.title}</h3>
            <p className="pp-kicker">{p.kicker}</p>
            <p className="pp-body">{p.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
