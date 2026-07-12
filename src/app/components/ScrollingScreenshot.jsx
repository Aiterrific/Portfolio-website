import "./ScrollingScreenshot.css";

/**
 * ScrollingScreenshot
 * Displays a tall page export inside a fixed browser-style frame.
 * The image auto-scrolls top to bottom and back on a slow loop.
 * Pauses on hover. Respects prefers-reduced-motion.
 *
 * Props:
 *  src    - image path (tall full-page export)
 *  alt    - alt text for accessibility
 *  label  - text shown in the frame's address bar
 */
export default function ScrollingScreenshot({
  src,
  alt = "Full page design, auto-scrolling preview",
  label = "cofundestate.ca",
}) {
  return (
    <figure className="ss-frame" aria-label={alt}>
      <div className="ss-chrome">
        <span className="ss-dot" />
        <span className="ss-dot" />
        <span className="ss-dot" />
        <span className="ss-url">{label}</span>
      </div>
      <div className="ss-viewport">
        <img className="ss-page" src={src} alt={alt} loading="lazy" />
      </div>
    </figure>
  );
}
