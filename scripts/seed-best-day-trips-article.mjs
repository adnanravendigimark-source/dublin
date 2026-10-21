import fs from "fs";
import path from "path";
import { neon } from "@neondatabase/serverless";

function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const articleData = {
  slug: "best-day-trips-from-dublin",
  title: "Best Day Trips from Dublin: Top Escapes, Castles & Scenic Coastlines",
  metaTitle: "Best Day Trips from Dublin 2026: Top Escapes & Itineraries",
  metaDescription: "Discover the best day trips from Dublin. Complete guide to Wicklow, Glendalough, Howth, Kilkenny, and the Cliffs of Moher with travel times and tips.",
  category: "Travel Guide",
  excerpt: "Discover the best day trips from Dublin, featuring the Wicklow Mountains, Glendalough monastic valley, coastal Howth, Kilkenny Castle, and travel times.",
  quickAnswer: "The best day trips from Dublin include the glacial valley of Glendalough in the Wicklow Mountains (~1 hour), the scenic coastal cliff walk of Howth (~30 minutes via DART), the historic streets of Kilkenny (~1.5 hours), and the world-famous Cliffs of Moher on the Atlantic coast.",
  readTime: "5 min read",
  date: "2026-10-21",
  updatedAt: "2026-10-21T07:35:00.000Z",
  image: "https://ty3b9ltbafvybax8.public.blob.vercel-storage.com/best-day-trips-from-dublin-MYCw0bHdUur1jUQqDvuh0ksZR10tYo.jpg",
  imageAlt: "Serene green valley and round tower of Glendalough in the Wicklow Mountains near Dublin",
  recommendedTourId: "wicklow-mountains-glendalough-kilkenny-day-trip",
  recommendedTourAfterBlock: 1,
  focusKeyword: "best day trips from Dublin",
  ctaHeading: "Ready to explore beyond Dublin?",
  ctaBody: "Compare guided day trips to Wicklow, Glendalough, Kilkenny, and the Cliffs of Moher on our homepage.",
  ctaButtonText: "Compare Dublin Day Trips →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.daytrips-from-dublin.com/blog/best-day-trips-from-dublin",
  ogTitle: "Best Day Trips from Dublin: Top Escapes, Castles & Scenic Coastlines",
  ogDescription: "Expert guide to the best day trips from Dublin: Glendalough, Howth, Kilkenny, travel times, and practical Ireland sightseeing tips.",
  ogImage: "https://ty3b9ltbafvybax8.public.blob.vercel-storage.com/best-day-trips-from-dublin-MYCw0bHdUur1jUQqDvuh0ksZR10tYo.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">While Ireland's vibrant capital offers world-class museums, historic Georgian squares, and lively pub culture, some of the Emerald Isle's most breathtaking scenery lies just beyond city limits. From heather-strewn mountain passes and ancient monastic ruins to windswept coastal cliffs and medieval castles, exploring the <strong>best day trips from Dublin</strong> allows travelers to experience Ireland's authentic natural beauty and deep heritage without changing hotels each night.</p>

<div class="pro-tip-box"><span class="pro-tip-icon">💡</span><div><strong>Pro Tip for Travelers:</strong> For coastal destinations like Howth or Bray, hop on the scenic Dublin Area Rapid Transit (DART) commuter train. For western or rural destinations like Glendalough or the Cliffs of Moher, booking an organized coach tour saves you from navigating narrow country roads and left-side driving.</div></div>

<h2>Top Recommended Day Trips from Dublin</h2>
<p>Whether you have a spare morning or an entire day to explore, these top-rated excursions deliver quintessential Irish landscapes within easy reach of the capital.</p>

<h3>1. Wicklow Mountains & Glendalough (Journey Time: ~1 Hour)</h3>
<p>Known affectionately as the "Garden of Ireland," County Wicklow sits directly south of Dublin. The crown jewel is <strong>Glendalough</strong>, a serene glacial valley home to a 6th-century monastic settlement founded by St. Kevin. Walk beneath the iconic 30-meter stone round tower, stroll between the Upper and Lower Lakes, and take in the dramatic panoramas of the Sally Gap and heather-cloaked peat bogs.</p>

<h3>2. Howth Peninsula & Coastal Cliff Walk (Journey Time: ~30 Minutes)</h3>
<p>If you prefer a half-day coastal escape without joining a bus tour, take the DART train north to the picturesque fishing harbor of <strong>Howth</strong>. The cliff loop trail offers sweeping views across Dublin Bay, Lambay Island, and the Baily Lighthouse. Afterward, treat yourself to freshly caught fish and chips or seafood chowder along the bustling pier.</p>

<figure><img src="https://ty3b9ltbafvybax8.public.blob.vercel-storage.com/dublin-day-trips-coastal-cliffs-dRfsA9WlrIF5DO6uXmn9FTPX6hiCha.jpg" alt="Spectacular panoramic view of the rugged Irish coastline and sea cliffs near Dublin" /><figcaption>Rugged coastal paths and ocean vistas make day trips along Ireland's shoreline an unforgettable highlight.</figcaption></figure>

<h3>3. Kilkenny Castle & The Medieval Mile (Journey Time: ~1.5 Hours)</h3>
<p>Step back into Anglo-Norman history with an excursion to Kilkenny. Tour the majestic 12th-century <strong>Kilkenny Castle</strong>, wander through manicured rose gardens overlooking the River Nore, and explore the Medieval Mile filled with artisan craft studios, historic breweries, and traditional Irish music pubs.</p>

<h3>4. Cliffs of Moher & Galway (Journey Time: ~3.5 Hours Each Way)</h3>
<p>For visitors wanting to witness Ireland's wild Atlantic edge in a single day, full-day coach tours cross the island to the majestic <strong>Cliffs of Moher</strong> in County Clare. Rising over 700 feet above churning ocean waves, these dramatic cliffs offer one of the most celebrated vistas in Western Europe, often paired with stops in bohemian Galway City.</p>

<h2>Practical Tips for Planning Your Day Excursions</h2>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Pack Waterproof Layers:</strong> Irish weather changes swiftly; carry a breathable waterproof jacket and wear sturdy walking shoes.</li>
  <li><span class="check-circle">✓</span><strong>Book Weekend Day Tours Ahead:</strong> Guided excursions to Glendalough and the Cliffs of Moher regularly sell out on summer weekends.</li>
  <li><span class="check-circle">✓</span><strong>Depart Early:</strong> Leaving central Dublin between 7:30 AM and 8:30 AM allows you to beat heavy motorway traffic and enjoy quiet morning trails.</li>
  <li><span class="check-circle">✓</span><strong>Carry Cash for Small Vendors:</strong> While cards are widely accepted, cash comes in handy for seaside markets and rural tearooms.</li>
</ul>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 500-600 words)`);
  if (wordCount < 500 || wordCount > 600) {
    throw new Error(`Word count ${wordCount} outside allowable 500-600 range!`);
  }

  // 1. Upsert into database
  await sql`
    INSERT INTO posts (
      slug, title, meta_title, meta_description, category, excerpt,
      quick_answer, read_time, date, updated_at, image, image_alt,
      recommended_tour_id, recommended_tour_after_block, content, sort_order,
      cta_heading, cta_body, cta_button_text, cta_button_href, focus_keyword,
      no_index, no_follow, canonical_url, og_title, og_description, og_image
    ) VALUES (
      ${articleData.slug}, ${articleData.title}, ${articleData.metaTitle}, ${articleData.metaDescription}, ${articleData.category},
      ${articleData.excerpt}, ${articleData.quickAnswer}, ${articleData.readTime}, ${articleData.date}, ${articleData.updatedAt},
      ${articleData.image}, ${articleData.imageAlt},
      ${articleData.recommendedTourId}, ${articleData.recommendedTourAfterBlock},
      ${JSON.stringify(articleData.content)}::jsonb, ${articleData.sortOrder},
      ${articleData.ctaHeading}, ${articleData.ctaBody}, ${articleData.ctaButtonText}, ${articleData.ctaButtonHref}, ${articleData.focusKeyword},
      ${articleData.noIndex}, ${articleData.noFollow}, ${articleData.canonicalUrl}, ${articleData.ogTitle}, ${articleData.ogDescription}, ${articleData.ogImage}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      meta_title = EXCLUDED.meta_title,
      meta_description = EXCLUDED.meta_description,
      category = EXCLUDED.category,
      excerpt = EXCLUDED.excerpt,
      quick_answer = EXCLUDED.quick_answer,
      read_time = EXCLUDED.read_time,
      date = EXCLUDED.date,
      updated_at = EXCLUDED.updated_at,
      image = EXCLUDED.image,
      image_alt = EXCLUDED.image_alt,
      recommended_tour_id = EXCLUDED.recommended_tour_id,
      recommended_tour_after_block = EXCLUDED.recommended_tour_after_block,
      content = EXCLUDED.content,
      sort_order = EXCLUDED.sort_order,
      cta_heading = EXCLUDED.cta_heading,
      cta_body = EXCLUDED.cta_body,
      cta_button_text = EXCLUDED.cta_button_text,
      cta_button_href = EXCLUDED.cta_button_href,
      focus_keyword = EXCLUDED.focus_keyword,
      no_index = EXCLUDED.no_index,
      no_follow = EXCLUDED.no_follow,
      canonical_url = EXCLUDED.canonical_url,
      og_title = EXCLUDED.og_title,
      og_description = EXCLUDED.og_description,
      og_image = EXCLUDED.og_image
  `;
  console.log("✓ Successfully upserted into Neon posts table!");

  // 2. Fetch all current DB posts and synchronize data/posts.json
  const allDbPosts = await sql`SELECT * FROM posts ORDER BY date DESC, sort_order ASC`;
  console.log(`Synchronizing ${allDbPosts.length} posts to data/posts.json...`);

  const jsonPosts = allDbPosts.map((p) => {
    let contentVal = p.content;
    if (typeof contentVal !== "string") {
      try {
        contentVal = typeof contentVal === "object" ? JSON.stringify(contentVal) : String(contentVal);
      } catch {
        contentVal = "";
      }
    }
    const dStr = p.date instanceof Date ? p.date.toISOString().slice(0, 10) : String(p.date || "").slice(0, 10);
    const uStr = p.updated_at instanceof Date ? p.updated_at.toISOString() : (p.updated_at ? String(p.updated_at) : dStr);

    return {
      slug: p.slug,
      title: p.title,
      metaTitle: p.meta_title || p.title,
      metaDescription: p.meta_description || p.excerpt,
      category: p.category || "Travel Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "5 min read",
      date: dStr,
      updatedAt: uStr,
      image: p.image || "",
      imageAlt: p.image_alt || "",
      recommendedTourId: p.recommended_tour_id || "wicklow-mountains-glendalough-kilkenny-day-trip",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      content: contentVal,
      ctaHeading: p.cta_heading || "Ready to explore beyond Dublin?",
      ctaBody: p.cta_body || "Compare guided day trips to Wicklow, Glendalough, Kilkenny, and the Cliffs of Moher on our homepage.",
      ctaButtonText: p.cta_button_text || "Compare Dublin Day Trips →",
      ctaButtonHref: p.cta_button_href || "/#prices",
      focusKeyword: p.focus_keyword || "best day trips from Dublin",
      noIndex: !!p.no_index,
      noFollow: !!p.no_follow,
      canonicalUrl: p.canonical_url || `https://www.daytrips-from-dublin.com/blog/${p.slug}`,
      ogTitle: p.og_title || p.meta_title || p.title,
      ogDescription: p.og_description || p.meta_description || p.excerpt,
      ogImage: p.og_image || p.image || ""
    };
  });

  const postsJsonPath = path.join(process.cwd(), "data", "posts.json");
  fs.writeFileSync(postsJsonPath, JSON.stringify(jsonPosts, null, 2), "utf-8");
  console.log(`✓ Synchronized data/posts.json with ${jsonPosts.length} posts.`);

  console.log("\nArticle Seed Summary:");
  console.log("- Title:", articleData.title);
  console.log("- Slug:", articleData.slug);
  console.log("- Focus Keyword:", articleData.focusKeyword);
  console.log("- Word Count:", wordCount);
  console.log("- Cover Image:", articleData.image);
  console.log("- Public URL:", articleData.canonicalUrl);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
