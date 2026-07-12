import { useRef } from "react";
import "./IAFlowArtifacts.css";
import iaImg from "../../assets/cofundestate/cofundestate-ia.webp";
import flowImg from "../../assets/cofundestate/cofundestate-flow.webp";

const ARTIFACTS = [
  {
    src: iaImg,
    alt: "CoFundEstate information architecture: ten top-level sections including landing page, dashboard, investment pools, wallet and tracking, property listings, user profile, resources, partnership and support, each with their sub-pages",
    caption: "Information Architecture — ten sections mapped from the research",
    tall: false,
  },
  {
    src: flowImg,
    alt: "CoFundEstate master user flow covering every screen, secondary screen and modal across the eight-section IA, from landing and sign-in through dashboard, listings, invest modals, pools, wallet, profile, resources, partnership and support",
    caption: "Master User Flow — every screen and modal accounted for",
    tall: true,
  },
];

function Artifact({ src, alt, caption, tall }) {
  const dialogRef = useRef(null);

  return (
    <figure className={`iaf-item${tall ? " iaf-item-tall" : ""}`}>
      <button
        type="button"
        className="iaf-trigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Expand: ${caption}`}
      >
        <img className="iaf-thumb" src={src} alt={alt} loading="lazy" />
        <span className="iaf-hint" aria-hidden="true">Click to expand</span>
      </button>
      <figcaption className="iaf-caption">{caption}</figcaption>

      <dialog
        ref={dialogRef}
        className="iaf-dialog"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="iaf-scroll">
          <img className="iaf-full" src={src} alt={alt} />
        </div>
        <button
          type="button"
          className="iaf-close"
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
      </dialog>
    </figure>
  );
}

export default function IAFlowArtifacts() {
  return (
    <div className="iaf-stack">
      {ARTIFACTS.map((a) => (
        <Artifact key={a.caption} {...a} />
      ))}
    </div>
  );
}
