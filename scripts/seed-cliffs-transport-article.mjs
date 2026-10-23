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
  slug: "how-to-get-from-dublin-to-cliffs-of-moher",
  title: "How to Get from Dublin to the Cliffs of Moher: Tours, Transport & Travel Tips",
  metaTitle: "Dublin to Cliffs of Moher: Tours, Transport & Tips",
  metaDescription: "How to get from Dublin to the Cliffs of Moher. Compare guided day tours, driving routes, public transport, journey times, and expert visitor advice.",
  category: "Transport Guide",
  excerpt: "Plan your trip from Dublin to the Cliffs of Moher with our complete transport guide covering guided coach day trips, driving routes, travel times, and visitor tips.",
  quickAnswer: "The easiest and most popular way to get from Dublin to the Cliffs of Moher is on a full-day guided coach tour (~3.5 to 4 hours each way), which includes admission, scenic Burren drives, and Galway City stops. Driving independently takes about 3 hours and 15 minutes via the M4/M6 motorways. Public transit is not recommended for same-day trips due to multiple transfers taking over 5 hours.",
  readTime: "6 min read",
  date: "2026-10-23",
  updatedAt: "2026-10-23T06:00:00.000Z",
  image: "https://ty3b9ltbafvybax8.public.blob.vercel-storage.com/dublin-to-cliffs-of-moher-01HA3JlKuvDElifhEQ69cQyPictEDP.jpg",
  imageAlt: "Dramatic panoramic view of the Cliffs of Moher in County Clare Ireland dropping into the Atlantic Ocean",
  recommendedTourId: "cliffs-of-moher-burren-galway-day-trip",
  recommendedTourAfterBlock: 1,
  focusKeyword: "Dublin to Cliffs of Moher",
  ctaHeading: "Ready to visit the Cliffs of Moher?",
  ctaBody: "Compare top-rated guided day tours to the Cliffs of Moher, Burren, and Galway City on our homepage.",
  ctaButtonText: "Compare Cliffs of Moher Tours →",
  ctaButtonHref: "/#prices",
  noIndex: false,
  noFollow: false,
  canonicalUrl: "https://www.daytrips-from-dublin.com/blog/how-to-get-from-dublin-to-cliffs-of-moher",
  ogTitle: "How to Get from Dublin to the Cliffs of Moher: Tours, Transport & Travel Tips",
  ogDescription: "How to get from Dublin to the Cliffs of Moher. Compare guided day tours, driving routes, public transport, journey times, and expert visitor advice.",
  ogImage: "https://ty3b9ltbafvybax8.public.blob.vercel-storage.com/dublin-to-cliffs-of-moher-01HA3JlKuvDElifhEQ69cQyPictEDP.jpg",
  sortOrder: 0,
  content: `<p class="lead-paragraph">Stretching along the western coast of County Clare, the Cliffs of Moher are Ireland's most famous natural wonder and a crown jewel of the Wild Atlantic Way. Soaring over 700 feet (214 meters) above the Atlantic Ocean, these dramatic cliffs draw more than 1.5 million visitors annually. Because the site sits on the opposite side of the island from the capital—roughly 260 kilometers (160 miles) away—planning your journey from <strong>Dublin to Cliffs of Moher</strong> requires careful coordination. From guided coach day trips to driving independently across the countryside, this guide breaks down every transport option, journey duration, and essential tip for a seamless trip.</p>

<div class="pro-tip-box">
  <span class="pro-tip-icon">💡</span>
  <div><strong>Essential Travel Advice:</strong> Crossing Ireland from east to west takes 3.5 to 4 hours each way. While public transport requires multiple train and bus transfers totaling over 5 hours, an organized day tour or early-morning drive lets you explore the cliffs and iconic regional stops like the Burren and Galway City in a single rewarding day.</div>
</div>

<h2>Overview of Transport Options from Dublin</h2>
<p>When considering <strong>how to get to the Cliffs of Moher</strong> from Dublin, travelers choose among three main transport methods:</p>

<div class="ticket-comparison-wrapper">
  <table class="ticket-comparison-table">
    <thead>
      <tr>
        <th>Transport Mode</th>
        <th>Travel Time (One-Way)</th>
        <th>Total Day Commitment</th>
        <th>Best Suited For</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Guided Coach Tour</strong></td>
        <td>3.5–4.0 Hours</td>
        <td>11–13 Hours</td>
        <td>First-time visitors wanting stress-free travel & guided stops</td>
      </tr>
      <tr>
        <td><strong>Rental Car (Self-Drive)</strong></td>
        <td>3.0–3.5 Hours</td>
        <td>Flexible (10–12 Hours)</td>
        <td>Confident drivers wanting a customized timetable</td>
      </tr>
      <tr>
        <td><strong>Train & Bus Combination</strong></td>
        <td>4.5–5.5 Hours</td>
        <td>13–15 Hours</td>
        <td>Multi-day travelers staying overnight in Galway or Doolin</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Option 1: Guided Coach Tours (The Most Popular Choice)</h2>
<p>For most international travelers, booking a dedicated <strong>Cliffs of Moher tour from Dublin</strong> offers the easiest and most relaxing way to visit. Modern luxury coaches depart from central Dublin between 6:45 AM and 7:15 AM, returning around 7:30 PM to 8:30 PM.</p>
<p>Joining an organized <strong>Dublin to Cliffs of Moher day trip</strong> provides major advantages:</p>
<ul>
  <li><strong>No Driving Stress:</strong> You bypass navigating narrow country lanes, left-side driving, and motorway tolls.</li>
  <li><strong>Curated West Coast Itinerary:</strong> Day trips combine 1.5 to 2 hours at the cliffs with scenic drives through the limestone plateau of the Burren, coastal photography stops along Galway Bay, and free time to explore bohemian Galway City.</li>
  <li><strong>Inclusive Visitor Admission:</strong> Official tours include your admission to the subterranean Cliffs of Moher Visitor Experience and Atlantic Edge exhibition center.</li>
</ul>

<figure>
  <img src="https://ty3b9ltbafvybax8.public.blob.vercel-storage.com/dublin-to-cliffs-scenic-route-JyUE2MdmumPv10cC00gdRIOUVGFreg.jpg" alt="A scenic view of the rugged Irish Atlantic coastline along the Wild Atlantic Way en route to the Cliffs of Moher" />
  <figcaption>Scenic coastal routes along the Wild Atlantic Way showcase Ireland's wild Atlantic shoreline before you reach the towering cliffs.</figcaption>
</figure>

<h2>Option 2: Driving from Dublin (Self-Drive Route)</h2>
<p>If you prefer setting your own schedule, renting a car offers complete independence. The drive from Dublin to the Cliffs of Moher takes approximately 3 hours and 15 minutes to 3.5 hours under clear traffic.</p>
<p>The fastest route follows the M4 and M6 motorways west toward Galway, exiting south onto the M18 toward Gort, then connecting via the N85 and N67 through Ennistymon and Lahinch. Alternatively, taking the M7 motorway southwest toward Limerick and connecting through Ennis offers a scenic route. Motorway tolls apply on the M50, M6, or M7.</p>

<h2>Option 3: Public Transport (Train and Bus)</h2>
<p>While public transit exists, doing a same-day round trip from Dublin using public transit is grueling and not recommended. There is no direct train or bus from Dublin to the cliffs.</p>
<p>To travel by public transit, take an Irish Rail train from Dublin Heuston to Galway Ceannt station (2.5 hours), then transfer to Bus Éireann Route 350 to the Cliffs of Moher (another 2 to 2.5 hours). Because schedules are limited, public transit is best reserved for travelers spending at least one night in Galway City or Doolin.</p>

<h2>What to Expect on Arrival at the Cliffs of Moher</h2>
<p>Upon arriving at the visitor grounds, you will find extensive amenities:</p>
<ul class="custom-checklist">
  <li><span class="check-circle">✓</span><strong>Visitor Experience Center:</strong> Built into the hillside, this eco-friendly facility houses interactive geological exhibits, historical displays, dining cafes, and restrooms.</li>
  <li><span class="check-circle">✓</span><strong>Paved Viewing Pathways:</strong> Over 800 meters of secured, paved cliff-edge pathways offer safe viewing points toward Hag's Head and O'Brien's Tower.</li>
  <li><span class="check-circle">✓</span><strong>O'Brien's Tower:</strong> Built in 1835 as an observation point, this stone tower crowns the highest point of the cliffs (702 feet) with views toward the Aran Islands on clear days.</li>
</ul>

<h2>Essential Planning Tips for Your Journey</h2>
<p>To maximize your west-coast adventure, keep these practical tips in mind:</p>
<ul>
  <li><strong>Book Tickets in Advance:</strong> If driving independently, book entry tickets online before arriving to secure parking and discounted rates.</li>
  <li><strong>Prepare for Unpredictable Weather:</strong> Atlantic gales can bring mist and rain without warning. Wear warm layers and a windproof, waterproof jacket. Umbrellas are useless in coastal winds.</li>
  <li><strong>Wear Sturdy Footwear:</strong> The coastal trails feature natural stone slabs that become slippery when wet; wear walking shoes with reliable grip.</li>
  <li><strong>Stay Behind Barriers:</strong> The cliff edges are fragile. Always remain on designated public walking paths behind the stone safety borders.</li>
</ul>

<h2>Frequently Asked Questions About Traveling to the Cliffs of Moher</h2>

<h3>How far are the Cliffs of Moher from Dublin?</h3>
<p>The Cliffs of Moher are approximately 260 kilometers (160 miles) west of Dublin. Driving or taking a coach tour takes between 3.5 and 4 hours each way.</p>

<h3>Can you do a day trip to the Cliffs of Moher from Dublin?</h3>
<p>Yes. Full-day coach tours leave central Dublin around 7:00 AM and return in the evening, providing a comprehensive day trip without needing overnight lodging.</p>

<h3>Is it better to drive or take a guided tour?</h3>
<p>For visitors unfamiliar with driving on the left side of narrow country roads, a guided tour is far more relaxing. Driving is preferable if you plan to explore County Clare over several days.</p>

<h3>What stops are included on a typical tour?</h3>
<p>Most Dublin day tours include 1.5 to 2 hours at the Cliffs of Moher, a scenic drive through the Burren National Park, and free time in Galway City.</p>`
};

function countWords(str) {
  const plain = str.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ").replace(/[—–]/g, " ");
  const words = plain.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

async function seed() {
  console.log("Seeding article:", articleData.title);
  const wordCount = countWords(articleData.content);
  console.log(`Word count: ${wordCount} words (Target: 800-1000 words)`);
  if (wordCount < 800 || wordCount > 1000) {
    throw new Error(`Word count ${wordCount} outside allowable 800-1000 range!`);
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
      category: p.category || "Transport Guide",
      excerpt: p.excerpt,
      quickAnswer: p.quick_answer || "",
      readTime: p.read_time || "6 min read",
      date: dStr,
      updatedAt: uStr,
      image: p.image || "",
      imageAlt: p.image_alt || "",
      recommendedTourId: p.recommended_tour_id || "cliffs-of-moher-burren-galway-day-trip",
      recommendedTourAfterBlock: p.recommended_tour_after_block,
      content: contentVal,
      ctaHeading: p.cta_heading || "Ready to visit the Cliffs of Moher?",
      ctaBody: p.cta_body || "Compare top-rated guided day tours to the Cliffs of Moher, Burren, and Galway City on our homepage.",
      ctaButtonText: p.cta_button_text || "Compare Cliffs of Moher Tours →",
      ctaButtonHref: p.cta_button_href || "/#prices",
      focusKeyword: p.focus_keyword || "Dublin to Cliffs of Moher",
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
