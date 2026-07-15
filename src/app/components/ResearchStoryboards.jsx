import "./ResearchStoryboards.css";
import storyScheduling from "../../assets/postpilot/postpilot-story-scheduling.webp";
import storyAnalytics from "../../assets/postpilot/postpilot-story-analytics.webp";
import storyFlowmap from "../../assets/postpilot/postpilot-story-flowmap.webp";

/**
 * ResearchStoryboards — three user story boards overlapping inside one
 * card frame. Static composition, no click behaviour. Stacks on mobile.
 */
const BOARDS = [
  {
    src: storyScheduling,
    alt: "User story board: scheduling and making a post in a competitor tool, with pain points marked where the new post and customize post actions were hard to find",
    className: "rsb-a",
  },
  {
    src: storyAnalytics,
    alt: "User story board: tracking post analytics in a competitor tool, with the manual per-post checking marked as an overwhelming pain point",
    className: "rsb-b",
  },
  {
    src: storyFlowmap,
    alt: "Flow map of the competitor walkthrough from sign-up to analytics, with post creation, customization and analytics marked as friction points",
    className: "rsb-c",
  },
];

export default function ResearchStoryboards() {
  return (
    <div className="rsb-frame">
      {BOARDS.map((b) => (
        <img
          key={b.className}
          className={`rsb-board ${b.className}`}
          src={b.src}
          alt={b.alt}
          loading="lazy"
        />
      ))}
    </div>
  );
}
