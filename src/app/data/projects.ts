import batchlyComingSoon from "../../assets/batchly/batchly-coming-soon.webp";
import cofundestateCard from "../../assets/cofundestate/cofundestate-card.webp";
import connectlocalyCard from "../../assets/connectlocaly/hero-landing-page.png";
import postpilotHero from "../../assets/postpilot/postpilot-hero.webp";

export interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  alt?: string;
  path?: string;
}

export const PROJECTS: Project[] = [
  { id: 1, title: "Batchly", desc: "Bulk ordering, simplified for small business owners.", img: batchlyComingSoon, alt: "Batchly case study coming soon", path: "/case-studies/batchly" },
  { id: 2, title: "CoFundEstate", desc: "Real estate investing, made accessible and simple.", img: cofundestateCard, alt: "CoFundEstate landing page design with navy nav, hero headline and investment preference bar", path: "/case-studies/cofundestate" },
  { id: 3, title: "ConnectLocaly", desc: "Connecting communities to trusted local businesses.", img: connectlocalyCard, alt: "ConnectLocaly landing page, full scroll preview", path: "/case-studies/connectlocaly" },
  { id: 4, title: "PostPilot", desc: "Social media management, simplified for modern teams.", img: postpilotHero, alt: "PostPilot brand lockup with product screens on a purple gradient", path: "/case-studies/postpilot" },
];
