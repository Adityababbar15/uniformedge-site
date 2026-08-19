// Production domain. Drives canonical URLs, sitemap.xml, robots.txt and OG tags —
// it must match the host the site is actually served from, including the www prefix,
// or search engines will index URLs that redirect.
export const SITE_URL = "https://www.uniformedge.co.in";

// Live and indexable since 17 Aug 2026. SITE_URL resolves to this site on
// Cloudflare, the apex 301s to www, and canonicals agree with the served host —
// so crawling is now safe. Set back to false only if the site moves hosts again
// and there is a window where SITE_URL does not point at what is serving.
export const SITE_INDEXABLE = true;

// Top nav is capped at eight — more than that overflows the header.
//
// Insights is in and Programs is out: Insights serves every audience and every
// article is an entry point from search, whereas Programs is school-specific on
// a site now covering five sectors and parents. Programs is not orphaned — it is
// linked from the school pitch on the homepage and from Products, as well as the
// footer. Gallery, FAQs and Programs all remain in FOOTER_LINKS and the sitemap.
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sectors", label: "Sectors" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/blog", label: "Insights" },
  { href: "/parents", label: "For Parents" },
  { href: "/contact", label: "Contact" },
] as const;

// Every indexable page — drives the footer and the sitemap, so nothing drops out
// of either just because it is not in the top nav.
export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/sectors", label: "Sectors" },
  { href: "/products", label: "Products" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/school-programs", label: "Programs" },
  { href: "/parents", label: "For Parents" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Insights" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
] as const;

export const COMPANY = {
  name: "UniformEdge",
  tagline: "Premium uniforms, tailored for trust",
  schoolTagline: "Premium school uniforms, tailored for trust",
  city: "Delhi, India",
  phone: "+91 99533 99534",
  phoneHref: "tel:+919953399534",
  address: {
    street: "Plot No. 2, Basement, Sector-12A",
    locality: "Dwarka",
    city: "New Delhi",
    postalCode: "110075",
    country: "IN",
    /** Single-line form for the contact page and the catalogue back cover. */
    oneLine:
      "Plot No. 2, Basement, Sector-12A, Dwarka, New Delhi 110075",
  },
  email: "info@uniformedge.co.in",
  whatsappNumber: "919953399534",
  foundingStory: {
    founderName: "Ramesh C Verma",
    origin:
      "UniformEdge traces its roots to Neeraj School Uniforms, founded by Ramesh C Verma as a small shop in Subhash Nagar, Delhi, in 1995.",
    growth:
      "In 2017, the business grew into a multi-product store in Dwarka, expanding its reach across Delhi's school community.",
    relationshipNote:
      "UniformEdge and Neeraj School Uniforms are separate businesses in the same family. Neeraj continues to trade; UniformEdge carries the same tailoring heritage forward into its own manufacturing.",
    /**
     * The same three facts as a timeline. Prose buries a 30-year history in a
     * paragraph; a dated sequence makes it scannable, which is what a school
     * comparing suppliers actually does.
     *
     * Every entry restates something already approved above — no new claims.
     * Add a milestone here only when it is a fact, not a round number.
     */
    timeline: [
      {
        year: "1995",
        title: "Neeraj School Uniforms",
        body: "Ramesh C Verma opens a small uniform shop in Subhash Nagar, Delhi, stitching for neighbourhood schools.",
      },
      {
        year: "2017",
        title: "Dwarka store",
        body: "The business grows into a multi-product store in Dwarka, serving schools across west and south-west Delhi.",
      },
      {
        year: "2026",
        title: "UniformEdge",
        body: "A separate business in the same family, carrying the tailoring heritage into in-house manufacturing for schools, corporate, healthcare, hospitality and industrial clients.",
      },
    ],
  },
  // Derived from the "About us" and "Why custom" pages of uniform_catalogue.pdf —
  // a restatement of positioning the business has already published, not new claims.
  vision: {
    statement:
      "Every uniform should look like it belongs to the school that wears it.",
    body: [
      "Most schools inherit their uniform supplier the way they inherit a photocopier contract — whoever was there first stays by default, and the uniform ends up looking like everyone else's. We started UniformEdge around a simpler idea: a school's uniform is part of its identity, and it should be built that way.",
      "In practice that means matching your crest thread-for-thread, matching your colours to the actual palette in your branding guide rather than to the nearest available shade, and staying with your school year after year instead of forcing a fresh vendor search every time something needs reordering.",
    ],
    pillars: [
      {
        title: "Built to your identity",
        body: "Your crest digitised and stitched to match, and fabric matched to your official palette before production starts — not approximated after.",
      },
      {
        title: "Made to survive a school year",
        body: "Colourfastness and shrink-control testing before bulk cutting, and reinforced stitching at collars, cuffs, knees and seat.",
      },
      {
        title: "A partner, not a transaction",
        body: "One relationship managed year to year, so the uniform programme becomes one less thing for your team to manage — not one more.",
      },
    ],
  },
  manufacturing: {
    ownFacility:
      "UniformEdge operates its own manufacturing facility in Delhi, giving us direct control over cutting, stitching, and quality checks.",
    outsourcing:
      "For specialised requirements and peak-season volumes, we also work with trusted outsourced production partners — without compromising on our quality checks.",
    /**
     * ONE confirmed practice: offcuts from cutting are reused as packaging
     * material. Client-confirmed 18 Aug 2026.
     *
     * Deliberately modest. A competitor site claims an "Official Sustainability
     * Partner" badge it invented, and another pairs recycling with OEKO-TEX and
     * cornstarch packaging claims. We state the one thing that is true and stop.
     *
     * DO NOT add without confirmation: zero-waste or landfill claims, recycled
     * fabric content, biodegradable or compostable packaging, carbon figures, or
     * any certification. If the practice expands — measured waste diverted,
     * recycled-content fabric — add it here as fact, not as positioning.
     */
    sustainability: {
      heading: "What happens to our offcuts",
      body: "Cutting a uniform order leaves fabric behind. Rather than discard it, we reuse our offcuts as packaging material for the garments we send out — so the waste from one order protects the next one in transit.",
      caveat:
        "That is the extent of what we claim today. We hold no environmental certification, and we would rather name one practice we actually follow than publish a sustainability policy we do not yet live up to.",
    },
  },
} as const;

// Explicit placeholders — do not fill with invented values. Replace only with confirmed facts.
//
// Deferred by decision, not oversight — these two are no longer rendered anywhere:
//   leadershipSignature — the About leadership message currently runs unsigned.
//     To sign it, add the signature back below the <blockquote> in app/about/page.tsx.
export const PLACEHOLDERS = {
  leadershipSignature: "[Leadership Name & Title Needed — who signs this message?]",
  yearsAsUniformEdge: "[Years Operating as UniformEdge — figure pending]",
} as const;
