import Link from "next/link";
import Image from "next/image";

// Inline vector mark: a shamrock over the Cliffs of Moher coastline, the
// site's brand icon.
function DublinShamrockMarkSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sun halo */}
      <circle cx="50" cy="24" r="15" fill="#C9A227" fillOpacity="0.18" />

      {/* Shamrock — three lobes + stem, Celtic Gold */}
      <g>
        <circle cx="50" cy="17" r="9" fill="#0F7A4A" stroke="#073B2A" strokeWidth="1.6" />
        <circle cx="41.5" cy="24" r="9" fill="#0F7A4A" stroke="#073B2A" strokeWidth="1.6" />
        <circle cx="58.5" cy="24" r="9" fill="#0F7A4A" stroke="#073B2A" strokeWidth="1.6" />
        <path d="M50 26V38" stroke="#073B2A" strokeWidth="2.4" strokeLinecap="round" />
      </g>

      {/* Cliffs of Moher coastline silhouette below */}
      <path
        d="M4 66C14 58 22 62 30 54C38 46 44 56 52 50C60 44 66 58 74 52C82 46 90 56 96 50V72H4V66Z"
        fill="#073B2A"
        fillOpacity="0.85"
        stroke="#073B2A"
        strokeWidth="1.6"
      />
      {/* Sea / horizon line */}
      <path d="M4 72H96" stroke="#073B2A" strokeWidth="2.2" strokeLinecap="round" />
      {/* Wave accents */}
      <path d="M10 76Q16 73 22 76T34 76" stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
      <path d="M62 76Q68 73 74 76T86 76" stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export default function Logo({
  className = "",
  variant = "compact",
  theme = "light",
  src = "",
  logoImage = "",
  alt = "Day Trips from Dublin",
  logoAlt = "Day Trips from Dublin",
  line1 = "DAY TRIPS FROM DUBLIN",
  line2 = "— TOURS —",
}: {
  className?: string;
  variant?: "compact" | "stacked";
  theme?: "light" | "dark";
  src?: string;
  logoImage?: string;
  alt?: string;
  logoAlt?: string;
  line1?: string;
  line2?: string;
}) {
  const isDark = theme === "dark";
  const customSrc = (logoImage || src)?.trim();
  const resolvedAlt = logoAlt || alt;

  if (variant === "stacked") {
    return (
      <Link href="/" className={`inline-flex flex-col items-center gap-2 ${className}`}>
        <span className="relative block h-12 w-14 transition-transform duration-300 hover:scale-105">
          {customSrc ? (
            <Image src={customSrc} alt={resolvedAlt} fill sizes="80px" className="object-contain" priority />
          ) : (
            <DublinShamrockMarkSvg className="h-full w-full" />
          )}
        </span>
        <div className="text-center leading-tight">
          <span
            className={`block font-display text-xl sm:text-2xl font-bold tracking-[0.1em] ${
              isDark ? "text-white" : "text-[#073B2A]"
            }`}
          >
            {line1 || "DAY TRIPS FROM DUBLIN"}
          </span>
          <span className="block font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#C58A2B]">
            {line2 || "— TOURS —"}
          </span>
        </div>
      </Link>
    );
  }

  const image = (
    <span className="relative block h-10 w-12 shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
      {customSrc ? (
        <Image src={customSrc} alt={resolvedAlt} fill priority sizes="48px" className="object-contain" />
      ) : (
        <DublinShamrockMarkSvg className="h-full w-full" />
      )}
    </span>
  );

  const wordmark = (
    <div className="flex min-w-0 flex-col justify-center">
      <span
        className={`block truncate font-display text-xl sm:text-[1.35rem] font-bold tracking-[0.08em] leading-none ${
          isDark ? "text-white group-hover:text-[#C58A2B]" : "text-[#073B2A] group-hover:text-[#145A43]"
        }`}
      >
        {line1 || "DAY TRIPS FROM DUBLIN"}
      </span>
      <span className="block truncate font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.28em] text-[#C58A2B] leading-none mt-1">
        {line2 || "— TOURS —"}
      </span>
    </div>
  );

  return (
    <Link href="/" className={`group inline-flex min-w-0 items-center gap-2.5 ${className}`}>
      {image}
      {wordmark}
    </Link>
  );
}
