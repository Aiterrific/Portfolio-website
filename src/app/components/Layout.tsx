import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-charcoal">
      <SiteHeader />
      {children}
    </div>
  );
}
