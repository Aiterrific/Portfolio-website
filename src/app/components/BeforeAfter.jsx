import "./BeforeAfter.css";

/**
 * BeforeAfter — plain side-by-side comparison card.
 * BEFORE / AFTER badges are baked into the exported images.
 *
 * Usage:
 *   <BeforeAfter
 *     heading="Investment Pools"
 *     caption="Pool cards unified: consistent progress bars, pledge input and dual actions replace mismatched layouts."
 *     beforeSrc={poolsBefore}
 *     beforeAlt="..."
 *     afterSrc={poolsAfter}
 *     afterAlt="..."
 *   />
 */
export default function BeforeAfter({
  heading,
  caption,
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}) {
  return (
    <section className="ba-card" aria-label={`Before and after: ${heading}`}>
      <h3 className="ba-heading">{heading}</h3>
      <p className="ba-caption">{caption}</p>
      <div className="ba-grid">
        <figure className="ba-panel">
          <img className="ba-img" src={beforeSrc} alt={beforeAlt} loading="lazy" />
        </figure>
        <figure className="ba-panel">
          <img className="ba-img" src={afterSrc} alt={afterAlt} loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
