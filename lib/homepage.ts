import { sql } from "./db";

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface TimelineRow {
  time: string;
  step: string;
}

export interface HoursRow {
  range: string;
  time: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface TourSection {
  eyebrow: string;
  heading: string;
  subheading: string;
}

export interface WhySection {
  eyebrow: string;
  heading: string;
  intro: string;
  timelineHeading: string;
  timeline: TimelineRow[];
  learnHeading: string;
  learn: string[];
  note: string;
  extraHeading: string;
  extraItems: { name: string; note: string }[];
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
}

export interface HighlightCard {
  icon: string;
  title: string;
  body: string;
}

export interface HighlightsSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  cards: HighlightCard[];
}

export interface TopSightsSection {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  ctaButtonText: string;
  ctaHref: string;
  images: GalleryImage[];
}

export interface PracticalSection {
  hoursHeading: string;
  hours: HoursRow[];
  hoursNote: string;
  addressHeading: string;
  address: string;
  metro: string;
  bestTimeHeading: string;
  bestTimeBody: string;
}

export interface PriceSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  note: string;
  itemLabel: string;
  priceLabel: string;
  column1Label: string;
  column2Label: string;
  bestForLabel: string;
  bookLabel: string;
}

export interface FaqSection {
  eyebrow: string;
  heading: string;
}

export interface NotFoundSection {
  heading: string;
  body: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
}

export interface BlogTeaserSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  viewAllText: string;
  readArticleText: string;
}

export interface BlogPageSection {
  eyebrow: string;
  heading: string;
  subheading: string;
  emptyStateText: string;
  featuredLinkText: string;
  ctaHeading: string;
  ctaButtonText: string;
  backToGuidesText: string;
  quickAnswerLabel: string;
  tocLabel: string;
  relatedGuidesHeading: string;
  sidebarRelatedHeading: string;
  sidebarRecommendedBadge: string;
  sidebarCompareLinkText: string;
  promoRecommendedText: string;
}

export interface CtaBannerSection {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref: string;
}

export interface HomepageSections {
  tours: TourSection;
  highlights: HighlightsSection;
  why: WhySection;
  topSights: TopSightsSection;
  practical: PracticalSection;
  price: PriceSection;
  ctaBanner: CtaBannerSection;
  faq: FaqSection;
  notFound: NotFoundSection;
  blogTeaser: BlogTeaserSection;
  blogPage: BlogPageSection;
}

export interface HeaderContent {
  logoImage: string;
  logoAlt: string;
  logoLine1: string;
  logoLine2: string;
  homeLabel: string;
  bookNowText: string;
  navLinks: NavLink[];
  ctaText: string;
  ctaHref: string;
}

export interface FooterContent {
  tagline: string;
  columns: FooterColumn[];
  addressHeading: string;
  addressLine1: string;
  addressLine2: string;
  copyrightText: string;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  accent: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
  sections: HomepageSections;
  header: HeaderContent;
  footer: FooterContent;
  theme: ThemeColors;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  noIndex: boolean;
  noFollow: boolean;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export const DEFAULT_HEADER: HeaderContent = {
  logoImage: "",
  logoAlt: "Day Trips from Dublin",
  logoLine1: "DAY TRIPS",
  logoLine2: "— FROM DUBLIN —",
  homeLabel: "Home",
  bookNowText: "BOOK NOW",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/#tours" },
    { label: "What to Expect", href: "/#what-to-expect" },
    { label: "Top Sights", href: "/#top-sights" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  ctaText: "BOOK NOW",
  ctaHref: "/#tours",
};

export const DEFAULT_FOOTER: FooterContent = {
  tagline:
    "<strong>Independent booking guide.</strong> Not affiliated with Fáilte Ireland or any single tour operator — we curate verified guided day trips from trusted Dublin-based coach operators and earn a commission on bookings made through our links, at no extra cost to you.",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Dublin Day Trips", href: "/#tours" },
        { label: "Top Sights", href: "/#top-sights" },
        { label: "Tour Prices", href: "/#prices" },
        { label: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  addressHeading: "Departure Point",
  addressLine1: "Central Dublin pickup points",
  addressLine2: "Dublin, Ireland",
  copyrightText:
    "Day Trips from Dublin. All prices shown in EUR/USD and subject to change by tour operators.",
};

export const DEFAULT_THEME: ThemeColors = {
  primary: "#0F7A4A",   // Emerald Green ⭐
  secondary: "#C9A227", // Celtic Gold ⭐
  dark: "#0B2E23",      // Deep Forest
  accent: "#1B7A5A",    // Shamrock (hover/lighter accent)
};

export const DEFAULT_SECTIONS: HomepageSections = {
  tours: {
    eyebrow: "Dublin Day Trips & Tours",
    heading: "Day Trips from Dublin | Dublin Day Trips",
    subheading:
      "Compare the top-rated guided day trips from Dublin — the Cliffs of Moher & Galway, the Wicklow Mountains & Glendalough, and Giant's Causeway & Belfast, all with round-trip coach transport included.",
  },
  highlights: {
    eyebrow: "Why Book With Us",
    heading: "Why Travel With Day Trips from Dublin",
    subheading:
      "Every tour is run by a licensed, insured Irish coach operator with a professional driver-guide — here's what makes booking with us easy.",
    cards: [
      {
        title: "Licensed Local Guides",
        body: "Every coach is led by a professional driver-guide with deep local knowledge of Irish history, folklore, and hidden viewpoints.",
        icon: "🎙️",
      },
      {
        title: "Comfortable Coach Travel",
        body: "Modern, heated coaches with big windows for scenic views, free Wi-Fi on most routes, and door-to-door pickup from central Dublin.",
        icon: "🚌",
      },
      {
        title: "Best Price Guarantee",
        body: "We compare prices across trusted Irish tour operators so you always book the best available rate for the exact same trip.",
        icon: "🛡️",
      },
      {
        title: "Free Cancellation",
        body: "Plans change — most tours can be cancelled free of charge up to 24 hours before departure for a full refund.",
        icon: "✅",
      },
    ],
  },
  why: {
    eyebrow: "What to Expect",
    heading: "What a Day Trip from Dublin Actually Looks Like",
    intro:
      "Every day trip departs central Dublin by coach early in the morning and returns the same evening — no overnight stay needed. Here's a sample itinerary for our most popular tour, the Cliffs of Moher, Burren & Galway day trip.",
    timelineHeading: "Sample tour itinerary",
    timeline: [
      { time: "7:00 AM", step: "Depart central Dublin by coach, driving through Kildare and the Irish midlands" },
      { time: "9:30 AM", step: "Scenic stop in the Burren — Ireland's otherworldly limestone karst landscape" },
      { time: "10:45 AM", step: "Arrive at the Cliffs of Moher — 2 hours to walk the cliff-top trails and visitor centre" },
      { time: "1:00 PM", step: "Traditional lunch stop in the seaside village of Liscannor or Doolin" },
      { time: "2:30 PM", step: "Free time in Galway City — Latin Quarter, Galway Bay promenade & shopping" },
      { time: "8:00 PM", step: "Return coach arrives back in central Dublin" },
    ],
    learnHeading: "Good to know before your tour",
    learn: [
      "Professional driver-guides share Irish history, folklore, and local stories throughout the journey",
      "Round-trip coach pickup is included from central Dublin meeting points — no car needed",
      "Comfortable walking shoes and a waterproof jacket are recommended for all outdoor stops",
      "Most tours run daily year-round, with earlier sunset return times in winter months",
    ],
    note: "Itinerary order and stop duration may vary slightly by tour operator to account for weather and traffic.",
    extraHeading: "Dublin Pickup Points",
    extraItems: [
      { name: "Dublin City Centre", note: "Central meeting points near O'Connell Street and major hotels" },
      { name: "Dublin Bus & Rail Stations", note: "Convenient pickup near Busáras and Dublin's main rail stations" },
      { name: "Select Dublin Hotels", note: "Some tours offer direct hotel pickup — check each listing for details" },
    ],
    ctaText: "Ready to explore? Day trips from Dublin start from €45/person and depart daily.",
    ctaButtonText: "Book Your Dublin Day Trip →",
    ctaHref: "#tours",
  },
  topSights: {
    eyebrow: "Top Sights",
    heading: "The Landmarks You'll See on a Dublin Day Trip",
    body:
      "From the wild Atlantic cliffs of County Clare to the ancient monastic ruins of the Wicklow Mountains and the volcanic coastline of Northern Ireland, a day trip from Dublin puts Ireland's most iconic landmarks within easy reach. <strong>The Cliffs of Moher</strong>, <strong>Glendalough</strong>, and the <strong>Giant's Causeway</strong> are the three sights most first-time visitors don't want to miss.",
    bullets: [
      "The Cliffs of Moher rise 214 metres above the Atlantic and stretch for 8km along the Wild Atlantic Way",
      "Glendalough's 6th-century monastic settlement sits between two glacial lakes in the Wicklow Mountains",
      "The Giant's Causeway's 40,000 interlocking basalt columns are a UNESCO World Heritage Site",
      "Every guided day trip includes transport, a driver-guide, and free time to explore each stop",
    ],
    ctaButtonText: "See All Dublin Day Trips",
    ctaHref: "#tours",
    images: [
      {
        src: "https://images.unsplash.com/photo-1758053333623-cc472d4c971a?q=80&w=1200&auto=format&fit=crop",
        alt: "The Cliffs of Moher rising above the Atlantic Ocean in County Clare, Ireland",
        label: "Cliffs of Moher",
      },
      {
        src: "https://images.unsplash.com/photo-1666626755396-6ee8844029e2?q=80&w=1200&auto=format&fit=crop",
        alt: "Glendalough monastic ruins and round tower beside a lake in the Wicklow Mountains",
        label: "Glendalough",
      },
      {
        src: "https://images.unsplash.com/photo-1530473744149-142a02a2d565?q=80&w=1200&auto=format&fit=crop",
        alt: "The hexagonal basalt columns of the Giant's Causeway on the Antrim coast",
        label: "Giant's Causeway",
      },
      {
        src: "https://images.unsplash.com/photo-1692804238058-53c0fbcefe09?q=80&w=1200&auto=format&fit=crop",
        alt: "Colorful shopfronts on a cobblestone street in Galway City, Ireland",
        label: "Galway City",
      },
    ],
  },
  practical: {
    hoursHeading: "Departure Times & Tour Timing (2026)",
    hours: [
      { range: "Cliffs of Moher, Burren & Galway", time: "7:00 AM – 8:00 PM (approx. 12–13 hours, full day)" },
      { range: "Wicklow Mountains & Glendalough", time: "9:00 AM – 6:00 PM (approx. 9 hours, full day)" },
      { range: "Giant's Causeway & Belfast", time: "6:30 AM – 9:30 PM (approx. 14–15 hours, full day)" },
      { range: "Half-day Wicklow options", time: "9:00 AM – 2:00 PM or 1:00 PM – 6:00 PM (approx. 5 hours)" },
    ],
    hoursNote: "Exact pickup time and meeting point will be confirmed in your booking voucher.",
    addressHeading: "Departure Point & Pickup",
    address:
      "All tours depart from central Dublin, with pickup points near O'Connell Street, Busáras, and Dublin's main rail stations.\nSome operators also offer direct pickup from select Dublin city centre hotels.",
    metro: "Round-trip coach transport from Dublin is included with every guided day trip booking.",
    bestTimeHeading: "Best Time for a Dublin Day Trip",
    bestTimeBody:
      "May through September offers the longest daylight hours and mildest weather for outdoor sightseeing. Ireland's weather is changeable year-round, so a waterproof jacket is recommended on every tour regardless of season.",
  },
  price: {
    eyebrow: "Compare & Choose",
    heading: "Compare Dublin Day Trips",
    subheading:
      "All three tours side by side — pick the day trip that matches your schedule, then book straight from the table.",
    note: "Children and infants typically receive discounted rates — check each tour's booking page for age tiers.",
    itemLabel: "Tour Type",
    priceLabel: "Price",
    column1Label: "Duration",
    column2Label: "Transport & Guide Included",
    bestForLabel: "Best For",
    bookLabel: "Book Tour",
  },
  ctaBanner: {
    heading: "Ready for Your Day Trip from Dublin?",
    subtext: "Book your guided day trip today and discover Ireland's most iconic landmarks with instant confirmation.",
    buttonText: "Explore All Tours",
    buttonHref: "#tours",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    heading: "Dublin Day Trips FAQs",
  },
  notFound: {
    heading: "Looks like this road took a wrong turn in the Wicklow Mountains.",
    body: "The page you're looking for doesn't exist or may have moved. Try one of these instead.",
    primaryButtonText: "Compare Dublin Day Trips →",
    primaryButtonHref: "/#tours",
    secondaryButtonText: "Read the Travel Guide",
    secondaryButtonHref: "/blog",
  },
  blogTeaser: {
    eyebrow: "From the Blog",
    heading: "Dublin Day Trip Guides & Tips",
    subheading:
      "Expert travel advice on picking the right tour, what to pack, and planning the perfect day trip from Dublin.",
    viewAllText: "View All Articles",
    readArticleText: "Read Article",
  },
  blogPage: {
    eyebrow: "Dublin Day Trips Travel Blog",
    heading: "Dublin Day Trip & Travel Guide",
    subheading: "Practical guides, itinerary tips, and travel insights to help you plan the ultimate day trip from Dublin.",
    emptyStateText: "No articles published yet — check back soon.",
    featuredLinkText: "Read the guide",
    ctaHeading: "Ready to book your Dublin day trip?",
    ctaButtonText: "Compare Dublin Day Trips →",
    backToGuidesText: "← All guides",
    quickAnswerLabel: "Quick Answer",
    tocLabel: "In This Guide",
    relatedGuidesHeading: "Related Guides",
    sidebarRelatedHeading: "Related Articles",
    sidebarRecommendedBadge: "Recommended",
    sidebarCompareLinkText: "Compare all tours & tickets →",
    promoRecommendedText: "Recommended for you",
  },
};

const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  heroBadge: "IRELAND'S ICONIC LANDMARKS, ONE DAY AT A TIME",
  heroHeading: "Day Trips from Dublin",
  heroSubheading:
    "Book the best guided day trips from Dublin — the Cliffs of Moher, the Wicklow Mountains, and the Giant's Causeway — with round-trip coach transport and a local driver-guide included.",
  heroImage: "https://images.unsplash.com/photo-1546986294-d9cdc4873420?q=80&w=2400&auto=format&fit=crop",
  heroImageAlt: "The Cliffs of Moher along Ireland's Wild Atlantic Way under a dramatic sky",
  heroCtaPrimaryText: "EXPLORE TOURS",
  heroCtaPrimaryHref: "#tours",
  heroCtaSecondaryText: "VIEW ALL DAY TRIPS",
  heroCtaSecondaryHref: "#tours",
  showFeaturedTour: true,
  featuredTourId: "cliffs-of-moher-burren-galway-day-trip",
  featuredBadgeLabel: "Recommended",
  featuredUrgencyText: "Best Price Guarantee · High Demand",
  featuredReasons: [
    "Most booked Dublin day trip — thousands of verified 5-star reviews",
    "Includes round-trip coach transport, driver-guide, and free time in Galway City",
    "Free cancellation up to 24 hours before departure",
  ],
  sections: DEFAULT_SECTIONS,
  header: DEFAULT_HEADER,
  footer: DEFAULT_FOOTER,
  theme: DEFAULT_THEME,
  metaTitle: "",
  metaDescription: "",
  focusKeyword: "Day Trips from Dublin | Dublin Day Trips",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
};

function parseReasons(value: unknown): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

function parseJsonWithDefault<T extends object>(value: unknown, fallback: T): T {
  let parsed: unknown = value;
  if (typeof value === "string") {
    try {
      parsed = JSON.parse(value);
    } catch {
      parsed = null;
    }
  }
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fallback;
  return { ...fallback, ...(parsed as Partial<T>) };
}

function rowToHomepage(row: any): HomepageContent {
  const sectionsRaw = parseJsonWithDefault<HomepageSections>(row.sections_json, DEFAULT_SECTIONS);
  return {
    heroBadge: row.hero_badge || "",
    heroHeading: row.hero_heading || "",
    heroSubheading: row.hero_subheading || "",
    heroImage: row.hero_image || "",
    heroImageAlt: row.hero_image_alt || "",
    heroCtaPrimaryText: row.hero_cta_primary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryText,
    heroCtaPrimaryHref: row.hero_cta_primary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaPrimaryHref,
    heroCtaSecondaryText: row.hero_cta_secondary_text || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryText,
    heroCtaSecondaryHref: row.hero_cta_secondary_href || DEFAULT_HOMEPAGE_CONTENT.heroCtaSecondaryHref,
    showFeaturedTour: !!row.show_featured_tour,
    featuredTourId: row.featured_tour_id || "",
    featuredBadgeLabel: row.featured_badge_label || "",
    featuredUrgencyText: row.featured_urgency_text || "",
    featuredReasons: parseReasons(row.featured_reasons),
    sections: {
      tours: { ...DEFAULT_SECTIONS.tours, ...sectionsRaw.tours },
      highlights: { ...DEFAULT_SECTIONS.highlights, ...sectionsRaw.highlights },
      why: { ...DEFAULT_SECTIONS.why, ...sectionsRaw.why },
      topSights: { ...DEFAULT_SECTIONS.topSights, ...sectionsRaw.topSights },
      practical: { ...DEFAULT_SECTIONS.practical, ...sectionsRaw.practical },
      price: { ...DEFAULT_SECTIONS.price, ...sectionsRaw.price },
      ctaBanner: { ...DEFAULT_SECTIONS.ctaBanner, ...sectionsRaw.ctaBanner },
      faq: { ...DEFAULT_SECTIONS.faq, ...sectionsRaw.faq },
      notFound: { ...DEFAULT_SECTIONS.notFound, ...sectionsRaw.notFound },
      blogTeaser: { ...DEFAULT_SECTIONS.blogTeaser, ...sectionsRaw.blogTeaser },
      blogPage: { ...DEFAULT_SECTIONS.blogPage, ...sectionsRaw.blogPage },
    },
    header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
    footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
    theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    metaTitle: row.meta_title || "",
    metaDescription: row.meta_description || "",
    focusKeyword: row.focus_keyword || "",
    noIndex: !!row.no_index,
    noFollow: !!row.no_follow,
    canonicalUrl: row.canonical_url || "",
    ogTitle: row.og_title || "",
    ogDescription: row.og_description || "",
    ogImage: row.og_image || "",
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const rows = await sql`SELECT * FROM homepage WHERE id = 1 LIMIT 1`;
    return rows.length ? rowToHomepage(rows[0]) : DEFAULT_HOMEPAGE_CONTENT;
  } catch {
    return DEFAULT_HOMEPAGE_CONTENT;
  }
}

export async function getSiteChrome(): Promise<{ header: HeaderContent; footer: FooterContent; theme: ThemeColors }> {
  try {
    const rows = await sql`SELECT header_json, footer_json, theme_json FROM homepage WHERE id = 1 LIMIT 1`;
    if (!rows.length) return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
    const row = rows[0] as any;
    return {
      header: parseJsonWithDefault<HeaderContent>(row.header_json, DEFAULT_HEADER),
      footer: parseJsonWithDefault<FooterContent>(row.footer_json, DEFAULT_FOOTER),
      theme: parseJsonWithDefault<ThemeColors>(row.theme_json, DEFAULT_THEME),
    };
  } catch {
    return { header: DEFAULT_HEADER, footer: DEFAULT_FOOTER, theme: DEFAULT_THEME };
  }
}

export async function saveHomepageCopy(data: {
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  heroImage: string;
  heroImageAlt: string;
  heroCtaPrimaryText: string;
  heroCtaPrimaryHref: string;
  heroCtaSecondaryText: string;
  heroCtaSecondaryHref: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, hero_badge, hero_heading, hero_subheading, hero_image, hero_image_alt,
      hero_cta_primary_text, hero_cta_primary_href,
      hero_cta_secondary_text, hero_cta_secondary_href,
      meta_title, meta_description, focus_keyword,
      canonical_url, og_title, og_description, og_image
    ) VALUES (
      1, ${data.heroBadge}, ${data.heroHeading}, ${data.heroSubheading}, ${data.heroImage},
      ${data.heroImageAlt},
      ${data.heroCtaPrimaryText || ""}, ${data.heroCtaPrimaryHref || ""},
      ${data.heroCtaSecondaryText || ""}, ${data.heroCtaSecondaryHref || ""},
      ${data.metaTitle || ""}, ${data.metaDescription || ""}, ${data.focusKeyword || ""},
      ${data.canonicalUrl || ""}, ${data.ogTitle || ""}, ${data.ogDescription || ""}, ${data.ogImage || ""}
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_badge = EXCLUDED.hero_badge,
      hero_heading = EXCLUDED.hero_heading,
      hero_subheading = EXCLUDED.hero_subheading,
      hero_image = EXCLUDED.hero_image,
      hero_image_alt = EXCLUDED.hero_image_alt,
      hero_cta_primary_text = EXCLUDED.hero_cta_primary_text,
      hero_cta_primary_href = EXCLUDED.hero_cta_primary_href,
      hero_cta_secondary_text = EXCLUDED.hero_cta_secondary_text,
      hero_cta_secondary_href = EXCLUDED.hero_cta_secondary_href,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      focus_keyword = EXCLUDED.focus_keyword,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
}

export async function setHomepageIndexing(noIndex: boolean, noFollow: boolean): Promise<void> {
  await sql`
    INSERT INTO homepage (id, no_index, no_follow)
    VALUES (1, ${!!noIndex}, ${!!noFollow})
    ON CONFLICT (id) DO UPDATE SET
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow
  `;
}

export async function saveRecommendedTour(data: {
  showFeaturedTour: boolean;
  featuredTourId: string;
  featuredBadgeLabel: string;
  featuredUrgencyText: string;
  featuredReasons: string[];
}): Promise<void> {
  await sql`
    INSERT INTO homepage (
      id, show_featured_tour, featured_tour_id, featured_badge_label,
      featured_urgency_text, featured_reasons
    ) VALUES (
      1, ${!!data.showFeaturedTour}, ${data.featuredTourId}, ${data.featuredBadgeLabel},
      ${data.featuredUrgencyText}, ${JSON.stringify(data.featuredReasons || [])}::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      show_featured_tour = EXCLUDED.show_featured_tour,
      featured_tour_id = EXCLUDED.featured_tour_id,
      featured_badge_label = EXCLUDED.featured_badge_label,
      featured_urgency_text = EXCLUDED.featured_urgency_text,
      featured_reasons = EXCLUDED.featured_reasons
  `;
}

export async function saveHomepageSections(sections: HomepageSections): Promise<void> {
  await sql`
    INSERT INTO homepage (id, sections_json)
    VALUES (1, ${JSON.stringify(sections)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      sections_json = EXCLUDED.sections_json
  `;
}

export async function saveSiteHeader(header: HeaderContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, header_json)
    VALUES (1, ${JSON.stringify(header)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      header_json = EXCLUDED.header_json
  `;
}

export async function saveSiteFooter(footer: FooterContent): Promise<void> {
  await sql`
    INSERT INTO homepage (id, footer_json)
    VALUES (1, ${JSON.stringify(footer)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      footer_json = EXCLUDED.footer_json
  `;
}

export async function saveSiteTheme(theme: ThemeColors): Promise<void> {
  await sql`
    INSERT INTO homepage (id, theme_json)
    VALUES (1, ${JSON.stringify(theme)}::jsonb)
    ON CONFLICT (id) DO UPDATE SET
      theme_json = EXCLUDED.theme_json
  `;
}
