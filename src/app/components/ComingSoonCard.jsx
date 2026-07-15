import "./ComingSoonCard.css";

/**
 * ComingSoonCard — framed coming-soon block with a soft radial glow.
 * Pure CSS, no image. Static, no click behaviour.
 */
export default function ComingSoonCard() {
  return (
    <div className="csc-frame" role="status">
      <div className="csc-glow" aria-hidden="true" />
      <h3 className="csc-title">Coming soon!</h3>
      <p className="csc-sub">
        The full case study is under construction. The research and problem
        framing above show where the work starts.
      </p>
    </div>
  );
}
