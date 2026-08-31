import Link from "next/link";
import Image from "next/image";

// Vector brand mark: 3-leaf Shamrock above evergreen pine trees silhouette
function DublinShamrockForestSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 3-Leaf Shamrock Icon */}
      <g fill="#075E4A">
        {/* Top Leaf */}
        <path d="M50 8 C45 1, 35 2, 36 12 C37 19, 46 23, 50 27 C54 23, 63 19, 64 12 C65 2, 55 1, 50 8 Z" />
        {/* Left Leaf */}
        <path d="M41 23 C33 18, 23 23, 26 33 C28 40, 38 41, 43 38 C42 33, 40 27, 41 23 Z" />
        {/* Right Leaf */}
        <path d="M59 23 C67 18, 77 23, 74 33 C72 40, 62 41, 57 38 C58 33, 60 27, 59 23 Z" />
        {/* Shamrock Stem */}
        <path d="M48.5 27 C48.5 38, 45 47, 40 52 C42 52, 47 47, 51.5 32 Z" />
      </g>

      {/* Pine Trees Silhouette Base */}
      <g fill="#075E4A">
        {/* Leftmost small tree */}
        <polygon points="16,70 21,55 26,70" />
        <polygon points="18,59 21,50 24,59" />

        {/* Second tree */}
        <polygon points="24,70 31,47 38,70" />
        <polygon points="26,54 31,41 36,54" />

        {/* Center tree */}
        <polygon points="34,70 42,39 50,70" />
        <polygon points="37,47 42,33 47,47" />

        {/* Center-right tree */}
        <polygon points="46,70 54,43 62,70" />
        <polygon points="49,50 54,37 59,50" />

        {/* Right tree */}
        <polygon points="58,70 65,49 72,70" />
        <polygon points="61,55 65,43 69,55" />

        {/* Far-right small tree */}
        <polygon points="70,70 75,57 80,70" />

        {/* Base ground line */}
        <rect x="12" y="69" width="72" height="2.5" rx="1.25" />
      </g>
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
  line1 = "DAY TRIPS",
  line2 = "FROM DUBLIN",
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
      <Link href="/" className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
        <span className="relative block h-11 w-14 transition-transform duration-300 hover:scale-105">
          {customSrc ? (
            <Image src={customSrc} alt={resolvedAlt} fill sizes="80px" className="object-contain" priority />
          ) : (
            <DublinShamrockForestSvg className="h-full w-full" />
          )}
        </span>
        <div className="text-center leading-tight">
          <span
            className={`block font-serif text-lg sm:text-xl font-bold tracking-[0.06em] ${
              isDark ? "text-white" : "text-[#075E4A]"
            }`}
          >
            {line1 || "DAY TRIPS"}
          </span>
          <span
            className={`block font-sans text-[10px] sm:text-xs font-bold tracking-[0.22em] ${
              isDark ? "text-white/80" : "text-[#075E4A]/90"
            }`}
          >
            {line2 || "FROM DUBLIN"}
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
        <DublinShamrockForestSvg className="h-full w-full" />
      )}
    </span>
  );

  const wordmark = (
    <div className="flex min-w-0 flex-col justify-center">
      <span
        className={`block font-serif text-lg sm:text-xl font-bold tracking-[0.05em] leading-none ${
          isDark ? "text-white group-hover:text-emerald-300" : "text-[#075E4A] group-hover:text-[#0D4F43]"
        }`}
      >
        {line1 || "DAY TRIPS"}
      </span>
      <span
        className={`block font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.2em] leading-none mt-1 ${
          isDark ? "text-white/85" : "text-[#075E4A]/90"
        }`}
      >
        {line2 || "FROM DUBLIN"}
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


