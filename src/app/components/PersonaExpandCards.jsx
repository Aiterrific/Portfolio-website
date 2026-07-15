import { useRef } from "react";
import "./PersonaExpandCards.css";
import personaEmily from "../../assets/postpilot/postpilot-persona-emily.webp";
import personaJohn from "../../assets/postpilot/postpilot-persona-john.webp";

const PERSONAS = [
  {
    src: personaEmily,
    alt: "Persona board for Emily Ross, social media manager in Lagos handling multiple client accounts, with goals around scheduling, analytics, approvals and collaboration, and challenges around time, disorganized approvals, shallow analytics and steep learning curves",
    caption: "Emily Ross — the manager living inside the tool",
  },
  {
    src: personaJohn,
    alt: "Persona board for John Mitchell, e-commerce CEO in Lagos, with goals around brand-aligned strategy, content approval, ROI tracking and delegation, and challenges around time, oversight and limited analytics",
    caption: "John Mitchell — the executive who needs oversight, not admin",
  },
];

function PersonaCard({ src, alt, caption }) {
  const dialogRef = useRef(null);

  return (
    <figure className="pec-item">
      <button
        type="button"
        className="pec-trigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Expand: ${caption}`}
      >
        <img className="pec-img" src={src} alt={alt} loading="lazy" />
        <span className="pec-hint" aria-hidden="true">Click to expand</span>
      </button>
      <figcaption className="pec-caption">{caption}</figcaption>

      <dialog
        ref={dialogRef}
        className="pec-dialog"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <img className="pec-full" src={src} alt={alt} />
        <button
          type="button"
          className="pec-close"
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
      </dialog>
    </figure>
  );
}

export default function PersonaExpandCards() {
  return (
    <div className="pec-grid">
      {PERSONAS.map((p) => (
        <PersonaCard key={p.caption} {...p} />
      ))}
    </div>
  );
}
