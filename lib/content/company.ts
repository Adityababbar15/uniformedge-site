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
  email: "info@uniformedge.co.in",
  whatsappNumber: "919953399534",
  foundingStory: {
    founderName: "Ramesh C Verma",
    origin:
      "UniformEdge traces its roots to Neeraj School Uniforms, founded by Ramesh C Verma as a small shop in Subhash Nagar, Delhi, in 1995.",
    growth:
      "In 2017, the business grew into a multi-product store in Dwarka, expanding its reach across Delhi's school community.",
    relationshipNote:
      "UniformEdge is a related but distinct entity to Neeraj School Uniforms, carrying that same tailoring heritage forward.",
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
  },
} as const;

// Explicit placeholders — do not fill with invented values. Replace only with confirmed facts.
//
// Deferred by decision, not oversight — these two are no longer rendered anywhere:
//   leadershipSignature — the About leadership message currently runs unsigned.
//     To sign it, add the signature back below the <blockquote> in app/about/page.tsx.
//   officeAddress — the Contact page shows city, phone and email only.
//     To restore, re-add the "Office Address" <div> to the <dl> in app/contact/page.tsx.
export const PLACEHOLDERS = {
  leadershipSignature: "[Leadership Name & Title Needed — who signs this message?]",
  officeAddress: "[Office Address Needed]",
  yearsAsUniformEdge: "[Years Operating as UniformEdge — figure pending]",
} as const;
