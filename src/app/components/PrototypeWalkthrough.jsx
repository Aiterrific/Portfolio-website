import "./PrototypeWalkthrough.css";
import walkthroughVideo from "../../assets/cofundestate/cofundestate-walkthrough.mp4";
import walkthroughPoster from "../../assets/cofundestate/cofundestate-walkthrough-poster.webp";

/**
 * PrototypeWalkthrough — 24s silent screen capture of the clickable
 * CoFundEstate prototype. User-initiated playback with a poster frame;
 * preload="none" keeps the 1.1MB video out of the initial page load.
 */
export default function PrototypeWalkthrough() {
  return (
    <figure className="pw-figure">
      <video
        className="pw-video"
        src={walkthroughVideo}
        poster={walkthroughPoster}
        controls
        muted
        playsInline
        preload="none"
        aria-label="Screen recording walking through the CoFundEstate prototype: landing page, dashboard, property listings, invest flow and pools"
      />
      <figcaption className="pw-caption">
        Prototype walkthrough — the clickable flow from landing through
        dashboard, listings and the invest path.
      </figcaption>
    </figure>
  );
}
