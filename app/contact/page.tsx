import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MailIcon } from "@/components/icons";
import { getContactPage } from "@/lib/contact";
import { getIconComponent } from "@/lib/iconMap";
import { resolveRobots, resolveCanonical, resolveOg } from "@/lib/seo";


export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactPage();
  const og = resolveOg(
    { ogTitle: contact.ogTitle, ogDescription: contact.ogDescription, ogImage: contact.ogImage },
    { title: contact.metaTitle, description: contact.metaDescription }
  );
  return {
    title: contact.metaTitle,
    description: contact.metaDescription,
    alternates: { canonical: resolveCanonical("/contact", contact.canonicalUrl) },
    robots: resolveRobots(contact.noIndex, contact.noFollow),
    openGraph: { title: og.title, description: og.description, url: "/contact", images: og.image ? [{ url: og.image }] : undefined },
    twitter: { card: "summary_large_image", title: og.title, description: og.description, images: og.image ? [og.image] : undefined },
  };
}

export default async function ContactPage() {
  const contact = await getContactPage();

  return (
    <>
      <Header />
      <main className="bg-[#F8F5EC] min-h-screen pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Top Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-white border border-[#C9D9CC] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#075E4A] shadow-sm">
              {contact.heroEyebrow}
            </span>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D4F43] tracking-tight">
              {contact.heroHeading}
            </h1>
            <div
              className="rich-content mx-auto mt-3.5 text-[#102A43]/80 leading-relaxed text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: contact.heroSubheading }}
            />
          </div>

          {/* Primary email card */}
          <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border border-[#C9D9CC]/80 bg-white p-8 sm:p-12 text-center shadow-sm max-w-3xl mx-auto transition-all hover:shadow-md">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075E4A] text-white shadow-md">
              <MailIcon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#102A43]/60">{contact.emailLabel}</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1.5 block break-all font-serif text-2xl sm:text-3xl font-bold text-[#0D4F43] hover:text-[#075E4A] transition-colors"
              >
                {contact.email}
              </a>
            </div>
            <p className="text-xs sm:text-sm text-[#102A43]/75 max-w-md">{contact.emailNote}</p>
          </div>

          {/* What we can help with (3 Cards) */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {contact.reasons.map(({ icon, title, body }) => {
              const Icon = getIconComponent(icon);
              return (
                <div
                  key={title}
                  className="flex flex-col rounded-2xl border border-[#C9D9CC]/80 bg-white p-6 sm:p-7 shadow-sm text-left transition duration-300 hover:shadow-lg hover:border-[#D9A441]/60 hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DDEBE8] text-[#075E4A] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-bold text-base text-[#0D4F43] leading-snug">{title}</h3>
                  <div
                    className="rich-content mt-2 text-xs sm:text-sm text-[#102A43]/80 leading-relaxed flex-1 [&>p]:m-0"
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div
            className="rich-content mt-12 border-t border-[#C9D9CC]/80 pt-8 text-center text-xs sm:text-sm text-[#102A43]/70 max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: contact.footerNote }}
          />

          {/* Bottom CTA Card */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-[#0D4F43] p-8 sm:p-10 text-center sm:text-left text-white shadow-xl border border-white/10">
            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight">{contact.ctaHeading}</h2>
              <p className="mt-1 text-xs sm:text-sm text-[#DDEBE8]">Compare top-rated Cliffs of Moher, Wicklow & Giant&apos;s Causeway tours.</p>
            </div>
            <a
              href="/#tours"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#D9A441] px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D4F43] shadow-md transition-all hover:bg-[#E5BA5D] hover:shadow-lg hover:scale-105"
            >
              <span>{contact.ctaButtonLabel}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

