import "./PersonaCards.css";
import nadiaImg from "../../assets/cofundestate/persona-nadia.webp";
import oluImg from "../../assets/cofundestate/persona-olu.webp";

const PERSONAS = [
  {
    img: oluImg,
    name: "Olu Andre",
    age: "32 years",
    role: "Data Analyst",
    location: "Toronto, ON, Canada",
    tag: "Married, one child",
    summary:
      "Olu Andre, 32, is a Data Analyst from Toronto, ON, aiming for passive income and safe, short-term investments. Married with one child, he works with limited capital and market knowledge, relying on trustworthy advice to guide his decisions. Once committed, he follows through diligently.",
    goals: [
      "Achieving passive income",
      "Seeking safe investments",
      "Exploring short-term investment opportunities",
    ],
    frustrations: [
      "Not enough capital or financing options",
      "Limited knowledge of the market",
      "Finding trustworthy agents or investment partners",
    ],
    habits: [
      "Follows through once committed to an investment",
      "Prefers guided advisory for decision making",
      "High risk aversion",
    ],
  },
  {
    img: nadiaImg,
    name: "Nadia Lee",
    age: "52 years",
    role: "Entrepreneur",
    location: "Ottawa, ON, Canada",
    tag: "Widow, 3 children, 2 grandchildren",
    summary:
      "Nadia Lee, 52, is an entrepreneur from Ottawa focused on moderate-risk, medium-term investments. A widow with 3 children and 2 grandchildren, she has real estate experience but faces challenges with capital and finding trustworthy partners. She values guided advice and is committed to her investments.",
    goals: [
      "Growing long-term wealth",
      "Preferring moderate risk with better returns",
      "Exploring medium-term investments",
    ],
    frustrations: [
      "Identifying the right property to invest in",
      "Not enough capital or financing options",
      "Finding trustworthy agents or investment partners",
    ],
    habits: [
      "Prior real estate investment experience",
      "Follows through once committed to an investment",
      "Prefers guided advisory for decision making",
    ],
  },
];

function PersonaBlock({ title, items }) {
  return (
    <div className="pc-block">
      <h4 className="pc-block-title">{title}</h4>
      <ul className="pc-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PersonaCards() {
  return (
    <div className="pc-stack">
      {PERSONAS.map((p) => (
        <article className="pc-board" key={p.name}>
          <aside className="pc-rail">
            <img className="pc-photo" src={p.img} alt={`Persona portrait, ${p.name}`} />
            <h3 className="pc-name">{p.name}</h3>
            <p className="pc-meta">{p.age}</p>
            <p className="pc-meta">{p.role}</p>
            <p className="pc-meta">{p.location}</p>
            <span className="pc-tag">{p.tag}</span>
          </aside>
          <div className="pc-content">
            <p className="pc-summary">{p.summary}</p>
            <PersonaBlock title="Goals" items={p.goals} />
            <PersonaBlock title="Frustrations" items={p.frustrations} />
            <PersonaBlock title="Habits" items={p.habits} />
          </div>
        </article>
      ))}
    </div>
  );
}
