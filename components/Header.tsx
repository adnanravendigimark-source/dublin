import Logo from "./Logo";
import MobileNav from "./MobileNav";
import HeaderNav from "./HeaderNav";
import StickyHeader from "./StickyHeader";
import { getHomepageContent } from "@/lib/homepage";

export default async function Header() {
  const content = await getHomepageContent();
  const header = content.header;
  // Admin-editable (Homepage → Content → Navbar → "Nav links"). Falls back
  // to a sane default set only if the admin has never saved any (e.g. a
  // fresh DB row before the first save), so the header is never empty.
  const navLinks = header.navLinks?.length
    ? header.navLinks
    : [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ];
  const ctaText = header.ctaText || header.bookNowText || "BOOK DAY TRIPS";
  const rawCtaHref = header.ctaHref || "#tours";
  const ctaHref = rawCtaHref.startsWith("#") ? `/${rawCtaHref}` : rawCtaHref;

  return (
    <StickyHeader>
      <div className="relative z-10 mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Logo
          logoImage={header.logoImage}
          logoAlt={header.logoAlt || "Day Trips from Dublin"}
          line1={header.logoLine1 === "DAY TRIPS FROM DUBLIN" ? "DAY TRIPS" : (header.logoLine1 || "DAY TRIPS")}
          line2={header.logoLine2 === "— TOURS —" ? "FROM DUBLIN" : (header.logoLine2 || "FROM DUBLIN")}
        />

        <HeaderNav links={navLinks} />

        <div className="flex items-center gap-3">
          <a
            href={ctaHref}
            className="hidden items-center gap-2 rounded-lg bg-[#075E4A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#0D4F43] hover:shadow-md md:inline-flex"
          >
            {/* Calendar / Ticket Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0 text-white/90"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
            </svg>
            <span>{ctaText.toUpperCase()}</span>
          </a>
          <MobileNav navLinks={navLinks} ctaText={ctaText} ctaHref={ctaHref} />
        </div>
      </div>
    </StickyHeader>
  );
}

