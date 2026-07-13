import "./SketchesWireframes.css";
import sketchDashboard from "../../assets/cofundestate/cofundestate-sketch-dashboard.webp";
import sketchLanding from "../../assets/cofundestate/cofundestate-sketch-landing.webp";
import sketchProperty from "../../assets/cofundestate/cofundestate-sketch-property.webp";
import wfLanding from "../../assets/cofundestate/cofundestate-wf-landing.webp";
import wfDashboard from "../../assets/cofundestate/cofundestate-wf-dashboard.webp";
import wfProperty from "../../assets/cofundestate/cofundestate-wf-property.webp";
import wfInvest from "../../assets/cofundestate/cofundestate-wf-invest.webp";

const SKETCHES = [
  {
    src: sketchDashboard,
    alt: "Paper sketch of the dashboard layout working out stat hierarchy and where opportunities sit",
    caption: "Dashboard layout",
  },
  {
    src: sketchLanding,
    alt: "Paper sketch of the landing page with headline, preference bar, hero and features row",
    caption: "Landing page",
  },
  {
    src: sketchProperty,
    alt: "Paper sketch of the property detail screen with image area, summary rail and insights panel",
    caption: "Property detail",
  },
];

const WIREFRAMES = [
  {
    src: wfLanding,
    alt: "Landing page wireframe with nav, hero headline, set preferences bar, featured properties row and why choose us section",
    caption: "Landing",
  },
  {
    src: wfDashboard,
    alt: "Dashboard wireframe with sidebar, welcome header, four stat cards, investment opportunities, pool section and investment progress",
    caption: "Dashboard",
  },
  {
    src: wfProperty,
    alt: "Property detail wireframe with media area, summary rail containing an invest entry point, detail tabs and insights panel",
    caption: "Property detail",
  },
  {
    src: wfInvest,
    alt: "Invest flow wireframe showing three steps: amount entry, payment method and confirmation returning to the dashboard",
    caption: "Invest flow",
  },
];

function Row({ items, cols }) {
  return (
    <div className={`sw-row sw-row-${cols}`}>
      {items.map((item) => (
        <figure className="sw-item" key={item.caption}>
          <img className="sw-img" src={item.src} alt={item.alt} loading="lazy" />
          <figcaption className="sw-caption">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function SketchesWireframes() {
  return (
    <div className="sw-stack">
      <Row items={SKETCHES} cols={3} />
      <Row items={WIREFRAMES} cols={4} />
    </div>
  );
}
