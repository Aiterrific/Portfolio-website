export interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  path?: string;
}

export const PROJECTS: Project[] = [
  { id: 1, title: "Batchly", desc: "Bulk ordering, simplified for small business owners.", img: "https://images.unsplash.com/photo-1762787863004-767d5d7eac07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { id: 2, title: "CoFundEstate", desc: "Real estate investing, made accessible and simple.", img: "https://images.unsplash.com/photo-1763671727638-5bc55bb9c980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600", path: "/case-studies/cofundestate" },
  { id: 3, title: "ConnectLocally", desc: "Connecting communities to trusted local businesses.", img: "https://images.unsplash.com/photo-1558707538-c56435bdcdf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
  { id: 4, title: "Postpilot", desc: "Social media management, simplified for modern teams.", img: "https://images.unsplash.com/photo-1736175549681-c24c552da1e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600" },
];
