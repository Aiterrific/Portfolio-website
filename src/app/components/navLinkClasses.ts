export function navLinkClasses(isActive: boolean) {
  return `relative pb-1 text-sm uppercase tracking-[0.05em] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:transition-colors after:duration-200 ${
    isActive
      ? "text-navy font-medium after:bg-gold"
      : "text-teal after:bg-transparent hover:after:bg-line"
  }`;
}
