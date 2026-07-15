import "./KeyFindingsCollage.css";
import kfSatisfaction from "../../assets/postpilot/pp-kf-satisfaction.webp";
import kfPreferences from "../../assets/postpilot/pp-kf-preferences.webp";
import kfFeatures from "../../assets/postpilot/pp-kf-features.webp";
import kfConcerns from "../../assets/postpilot/pp-kf-concerns.webp";

/**
 * KeyFindingsCollage — four survey finding panels lapping each other
 * inside one card frame. Static, no click behaviour. Stacks on mobile.
 */
const PANELS = [
  {
    src: kfSatisfaction,
    alt: "Survey finding: top contributing factors for satisfaction — scheduling efficiency 45%, ease of use 30%, collaboration 15%",
    className: "kfc-a",
  },
  {
    src: kfPreferences,
    alt: "Survey finding: user preferences — personalized web listing 50%, secured payment method 30%, installment option 20%",
    className: "kfc-b",
  },
  {
    src: kfFeatures,
    alt: "Survey finding: top rated features — multi-profile 45%, collaboration 25%, AI content generator 20%",
    className: "kfc-c",
  },
  {
    src: kfConcerns,
    alt: "Survey finding: top user concerns led by ease of use at 40%, and improvement suggestions led by ease of use at 30%",
    className: "kfc-d",
  },
];

export default function KeyFindingsCollage() {
  return (
    <div className="kfc-frame">
      {PANELS.map((p) => (
        <img
          key={p.className}
          className={`kfc-panel ${p.className}`}
          src={p.src}
          alt={p.alt}
          loading="lazy"
        />
      ))}
    </div>
  );
}
