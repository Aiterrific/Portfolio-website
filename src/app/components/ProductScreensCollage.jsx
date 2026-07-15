import "./ProductScreensCollage.css";
import npEmpty from "../../assets/postpilot/pp-prod-newpost-empty.webp";
import npSchedule from "../../assets/postpilot/pp-prod-newpost-schedule.webp";
import npFilled from "../../assets/postpilot/pp-prod-newpost-filled.webp";
import approval from "../../assets/postpilot/pp-prod-approval.webp";
import invite from "../../assets/postpilot/pp-prod-invite.webp";
import week from "../../assets/postpilot/pp-prod-week.webp";
import month from "../../assets/postpilot/pp-prod-month.webp";

/**
 * ProductScreensCollage — seven product screens lapping in a cascade
 * inside one fixed card frame, back-left to front-right. Static.
 * Stacks vertically on mobile.
 */
const SCREENS = [
  {
    src: npEmpty,
    alt: "New post modal, empty state, with account selector and Compose with Genie",
    className: "psc-1",
  },
  {
    src: npSchedule,
    alt: "New post modal with content written for Facebook and X, ready to schedule for later",
    className: "psc-2",
  },
  {
    src: npFilled,
    alt: "New post modal with live Facebook preview and Schedule Post action",
    className: "psc-3",
  },
  {
    src: approval,
    alt: "New post scheduled for Wednesday 9am with Send for approval action",
    className: "psc-4",
  },
  {
    src: invite,
    alt: "Invite team members modal with role, channel scope and approval access controls",
    className: "psc-5",
  },
  {
    src: week,
    alt: "Calendar in week view with hourly slots across the week",
    className: "psc-6",
  },
  {
    src: month,
    alt: "Calendar in month view for October 2024 with channel and post filters",
    className: "psc-7",
  },
];

export default function ProductScreensCollage() {
  return (
    <div className="psc-frame">
      {SCREENS.map((s) => (
        <img
          key={s.className}
          className={`psc-screen ${s.className}`}
          src={s.src}
          alt={s.alt}
          loading="lazy"
        />
      ))}
    </div>
  );
}
