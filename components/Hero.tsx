import SafeImage from "./SafeImage";
import { getHomepageContent } from "@/lib/homepage";

export default async function Hero() {
  const content = await getHomepageContent();
  const heroImageSrc =
    content.heroImage ||
    "https://images.unsplash.com/photo-1546986294-d9cdc4873420?q=80&w=2400&auto=format&fit=crop";

  return (
    <section className="relative w-full overflow-hidden bg-[#F8F5EC] flex flex-col justify-between min-h-screen min-h-[100dvh]">
      {/* Full-bleed Panoramic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SafeImage
          src={heroImageSrc}
          alt={content.heroImageAlt || "The Cliffs of Moher along Ireland's Wild Atlantic Way with O'Brien's Tower"}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[78%_center] md:object-[82%_center] lg:object-right"
        />
        {/* Soft Warm Cream & Atlantic Mist gradient overlay from left to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5EC]/95 via-[#F8F5EC]/85 via-55% to-transparent sm:bg-gradient-to-r sm:from-[#F8F5EC]/95 sm:via-[#F8F5EC]/85 sm:via-42% md:from-[#F8F5EC]/95 md:via-[#F8F5EC]/75 md:via-48% lg:via-52% md:to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6">
        {/* Top Content Area */}
        <div className="max-w-2xl my-auto py-2 sm:py-4">
          {/* Script Tagline with subtle Irish Gold underline — admin-editable (Homepage → Content → Hero → "Hero badge") */}
          <div className="inline-block relative">
            <p className="font-script text-2xl sm:text-3xl lg:text-[32px] text-[#075E4A] leading-tight">
              {content.heroBadge || "Explore More. Travel Beyond."}
            </p>
            {/* Subtle curved underline stroke */}
            <svg
              viewBox="0 0 160 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 sm:w-32 lg:w-36 h-2 text-[#D9A441] -mt-1 opacity-90"
            >
              <path
                d="M2 7C40 2, 100 2, 158 8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Main Headline — admin-editable (Homepage → Content → Hero → "Hero headline") */}
          <h1 className="mt-1.5 sm:mt-2 whitespace-pre-line font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold leading-[1.1] sm:leading-[1.08] tracking-tight text-[#0D4F43]">
            {content.heroHeading || "Day Trips from Dublin"}
          </h1>

          {/* Catchphrase Subheading */}
          <p className="mt-2 sm:mt-2.5 text-sm sm:text-lg lg:text-[19px] font-bold text-[#075E4A] leading-snug">
            Unforgettable Adventures. Just a Day Away.
          </p>

          {/* Body Description */}
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#102A43]/80 font-normal leading-relaxed max-w-xl">
            {content.heroSubheading
              ? content.heroSubheading.replace(/<[^>]+>/g, " ")
              : "Book the best guided day trips from Dublin — the Cliffs of Moher, the Wicklow Mountains, and the Giant's Causeway — with round-trip coach transport and a local driver-guide included."}
          </p>

          {/* Action Buttons Row */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <a
              href={content.heroCtaPrimaryHref || "#tours"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#075E4A] px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#0D4F43] hover:shadow-lg hover:-translate-y-0.5"
            >
              {/* Location Pin Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{content.heroCtaPrimaryText || "EXPLORE TOURS"}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            <a
              href={content.heroCtaSecondaryHref || "#tours"}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#075E4A] bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#075E4A] shadow-sm transition-all duration-300 hover:bg-[#075E4A] hover:text-white hover:-translate-y-0.5"
            >
              {/* Calendar Icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
              </svg>
              <span>{content.heroCtaSecondaryText || "VIEW ALL DAY TRIPS"}</span>
            </a>
          </div>
        </div>

        {/* Bottom Deep Emerald Stats Bar */}
        <div className="w-full rounded-xl sm:rounded-2xl bg-[#0D4F43] px-3 sm:px-6 py-2.5 sm:py-4 shadow-xl text-white border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-0 md:divide-x md:divide-white/20">
            {/* Stat 1 */}
            <div className="flex items-center gap-2.5 sm:gap-3 sm:px-3 lg:px-4">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/40 bg-white/10 text-[#D9A441]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5 sm:h-5 sm:w-5">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base lg:text-xl font-bold tracking-tight text-white leading-tight truncate">
                  {content.sections.heroStats?.[0]?.value || "10,000+"}
                </div>
                <div className="text-[10px] sm:text-xs text-[#DDEBE8] font-medium mt-0.5 truncate">
                  {content.sections.heroStats?.[0]?.label || "Happy Travelers"}
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-2.5 sm:gap-3 sm:px-3 lg:px-4">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/40 bg-white/10 text-[#D9A441]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5 sm:h-5 sm:w-5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base lg:text-xl font-bold tracking-tight text-white leading-tight truncate">
                  {content.sections.heroStats?.[1]?.value || "4.8/5"}
                </div>
                <div className="text-[10px] sm:text-xs text-[#DDEBE8] font-medium mt-0.5 truncate">
                  {content.sections.heroStats?.[1]?.label || "Average Rating"}
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-2.5 sm:gap-3 sm:px-3 lg:px-4">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/40 bg-white/10 text-[#D9A441]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5 sm:h-5 sm:w-5">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="8" y1="2" x2="8" y2="18" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="6" x2="16" y2="22" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base lg:text-xl font-bold tracking-tight text-white leading-tight truncate">
                  {content.sections.heroStats?.[2]?.value || "30+"}
                </div>
                <div className="text-[10px] sm:text-xs text-[#DDEBE8] font-medium mt-0.5 truncate">
                  {content.sections.heroStats?.[2]?.label || "Amazing Destinations"}
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-2.5 sm:gap-3 sm:px-3 lg:px-4">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/40 bg-white/10 text-[#D9A441]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5 sm:h-5 sm:w-5">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="13" r="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base lg:text-xl font-bold tracking-tight text-white leading-tight truncate">
                  {content.sections.heroStats?.[3]?.value || "Unforgettable"}
                </div>
                <div className="text-[10px] sm:text-xs text-[#DDEBE8] font-medium mt-0.5 truncate">
                  {content.sections.heroStats?.[3]?.label || "Memories Await"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



