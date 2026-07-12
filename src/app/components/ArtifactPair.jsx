import { useRef } from "react";
import "./ArtifactPair.css";
import bmcImg from "../../assets/cofundestate/cofundestate-bmc.webp";
import journeyImg from "../../assets/cofundestate/cofundestate-journey.webp";

const ARTIFACTS = [
  {
    src: bmcImg,
    alt: "CoFundEstate Business Model Canvas covering key partners, activities, resources, value propositions, customer relationships, channels, segments, cost structure and revenue streams",
    caption: "Business Model Canvas — how the platform creates and captures value",
  },
  {
    src: journeyImg,
    alt: "CoFundEstate user journey map across seven stages from awareness to exit, with goals, actions, emotions, pain points and opportunities per stage",
    caption: "User Journey Map — seven stages from awareness to exit",
  },
];

function Artifact({ src, alt, caption }) {
  const dialogRef = useRef(null);

  return (
    <figure className="ap-item">
      <button
        type="button"
        className="ap-trigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Expand: ${caption}`}
      >
        <img className="ap-thumb" src={src} alt={alt} loading="lazy" />
        <span className="ap-hint" aria-hidden="true">Click to expand</span>
      </button>
      <figcaption className="ap-caption">{caption}</figcaption>

      <dialog
        ref={dialogRef}
        className="ap-dialog"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <img className="ap-full" src={src} alt={alt} />
        <button
          type="button"
          className="ap-close"
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
      </dialog>
    </figure>
  );
}

export default function ArtifactPair() {
  return (
    <div className="ap-grid">
      {ARTIFACTS.map((a) => (
        <Artifact key={a.caption} {...a} />
      ))}
    </div>
  );
}
