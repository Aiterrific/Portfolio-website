import batchlyComingSoon from "../../assets/batchly/batchly-coming-soon.webp";
import cofundestateCard from "../../assets/cofundestate/cofundestate-card.webp";
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
  { id: 3, title: "ConnectLocally", desc: "Connecting communities to trusted local businesses.", img: "https://images.unsplash.com/photo-1558707538-c56435bdcdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", path: "/case-studies/connectlocally" },
  { id: 4, title: "PostPilot", desc: "Social media management, simplified for modern teams.", img: postpilotHero, alt: "PostPilot brand lockup with product screens on a purple gradient", path: "/case-studies/postpilot" },
];
