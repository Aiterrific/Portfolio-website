import "./AnalyticsScreensCollage.css";
import anOverview from "../../assets/postpilot/pp-an-overview.webp";
import anChannel from "../../assets/postpilot/pp-an-channel.webp";
import anPosts from "../../assets/postpilot/pp-an-posts.webp";

/**
 * AnalyticsScreensCollage — three analytics screens lapping in a fixed
 * card frame, same pattern as ProductScreensCollage. Static.
 * Stacks vertically on mobile.
 */
const SCREENS = [
  {
    src: anOverview,
    alt: "Analytics home with total audience, impressions and engagements, a channels overview table across Facebook, Instagram, LinkedIn, X and TikTok, and recent posts with reach, likes and comments",
    className: "asc-1",
  },
  {
    src: anPosts,
    alt: "Post performance table for Facebook listing posts with date, author, likes, shares and comments over October",
    className: "asc-2",
  },
  {
    src: anChannel,
    alt: "Facebook channel overview with followers, reach, link clicks, post engagements, reactions and impressions, plus daily average engagement, impression and click charts",
    className: "asc-3",
  },
];

export default function AnalyticsScreensCollage() {
  return (
    <div className="asc-frame">
      {SCREENS.map((s) => (
        <img
          key={s.className}
          className={`asc-screen ${s.className}`}
          src={s.src}
          alt={s.alt}
          loading="lazy"
        />
      ))}
    </div>
  );
}
