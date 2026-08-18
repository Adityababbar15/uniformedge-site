// DRAFT CONTENT — REVIEW BEFORE LAUNCH.
//
// The Schools entry is grounded in uniform_catalogue.pdf and lib/content/company.ts.
// The other four sectors were drafted from standard industry practice, because no
// UniformEdge material existed for them yet. They describe garment types and buying
// considerations that are true of the sector generally — they do not assert what
// UniformEdge specifically stocks, tests or certifies.
//
// Deliberately NOT claimed anywhere below: compliance with named safety standards
// (EN ISO 20471 hi-vis, EN 11612 flame resistance, antimicrobial certification).
// Those are testable claims a buyer can hold you to. Where a sector cares about them
// the copy says the garment is specified to the buyer's requirement, which is honest
// and still useful. Add real certifications here only once they exist on paper.

export type Sector = {
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  garments: { name: string; detail: string }[];
  considerations: { title: string; body: string }[];
  fabricNote: string;
  /** Set once sector photography lands; cards fall back gracefully until then.
   *  See docs/sector-image-brief.md for the prompts these come from. */
  image?: string;
  imageAlt?: string;
  ctaTitle: string;
  ctaBody: string;
  /** Schools has its own established pages; the rest live under /sectors. */
  href: string;
  isCore?: boolean;
};

export const SECTORS: Sector[] = [
  {
    slug: "schools",
    name: "School Uniforms",
    navLabel: "Schools",
    eyebrow: "Schools",
    title: "School uniforms, tailored per school",
    summary:
      "Our founding sector, and the one our tailoring roots come from — full uniform programmes for schools across Delhi, from KG through senior years.",
    metaTitle: "School Uniform Manufacturer, Delhi",
    metaDescription:
      "Full school uniform programmes manufactured in Delhi — crest-accurate embroidery, exact colour matching, and a standing reorder programme.",
    intro: [
      "Schools are where UniformEdge started, and they remain the core of what we do. We run complete uniform programmes — summer and winter, formal and sports, KG through senior — built around a school's own colours and crest.",
      "Everything else on this page family grew out of that work: the same cutting floor, the same colour-matching discipline, and the same quality checks now serve hospitals, offices, kitchens and factories.",
    ],
    garments: [
      { name: "Shirts & trousers", detail: "Half and full sleeve, adjustable waistbands, reinforced collars and cuffs" },
      { name: "Skirts & pinafores", detail: "Box-pleat and A-line, colour-matched to the blazer" },
      { name: "Blazers & winter wear", detail: "Embroidered crest, house-colour piping, sweaters and cardigans" },
      { name: "Sports & PE kit", detail: "House T-shirts, track pants and shorts in house colours" },
      { name: "Accessories", detail: "Ties, belts, socks, badges and school bags" },
    ],
    considerations: [
      { title: "Crest accuracy", body: "Your crest digitised into an embroidery-ready file, not approximated." },
      { title: "Colour held year to year", body: "Matched to your official palette before cutting, so reorders match the garments already in circulation." },
      { title: "Sizing across the whole school", body: "Charts calibrated to your students, with an on-site measurement drive for a first bulk order." },
    ],
    fabricNote:
      "Pure cotton for warm-climate daily wear, poly-cotton where wrinkle resistance and fast drying matter, terry cotton for trousers and skirts that need structure.",
    image: "/images/campus/students-corridor-between-periods.webp",
    imageAlt:
      "Senior students in grey and white school uniforms walking along a school corridor",
    ctaTitle: "Outfitting a school?",
    ctaBody:
      "Tell us your student strength, term start and current uniform, and we'll map a programme and timeline back from delivery.",
    href: "/products",
    isCore: true,
  },
  {
    slug: "corporate-uniforms",
    name: "Corporate Uniforms",
    navLabel: "Corporate",
    eyebrow: "Corporate",
    title: "Corporate uniforms that hold a brand together",
    summary:
      "Front-office and field staff dressed consistently across every branch, in your brand colours.",
    metaTitle: "Corporate Uniform Manufacturer, Delhi",
    metaDescription:
      "Corporate uniforms manufactured in Delhi — branded shirts, blazers and formal wear colour-matched to your identity, with reorders for new joiners.",
    intro: [
      "A corporate uniform is a brand asset that walks around. When a customer sees your team at a branch, a site or an event, the uniform is doing the same job as your signage — and it fails in the same way, by drifting out of colour and looking tired.",
      "We manufacture corporate wear against your brand palette rather than a nearest-match shade, so a shirt ordered for a new joiner in month eighteen still sits beside the original intake without looking like a different colour.",
    ],
    garments: [
      { name: "Formal shirts & blouses", detail: "Half and full sleeve, in brand-matched colours with optional logo embroidery" },
      { name: "Blazers & waistcoats", detail: "Structured tailoring for front-office and customer-facing roles" },
      { name: "Trousers & skirts", detail: "Cut to a consistent house specification across sites" },
      { name: "Polo shirts & T-shirts", detail: "Smart-casual and event wear, embroidered or printed" },
      { name: "Jackets & outerwear", detail: "Softshells and windcheaters for field and site teams" },
      { name: "Ties, scarves & accessories", detail: "Colour-matched finishing pieces that tie the look together" },
    ],
    considerations: [
      { title: "Consistency across branches", body: "Garments for every location produced in a single batch per colourway, so one branch's uniform matches another's." },
      { title: "Tiered by role", body: "Front-office, back-office and field teams often need different garments reading as one identity — distinct but visibly related." },
      { title: "Sizing an adult workforce", body: "Adult size ranges vary far more than a school year group. We size from a staff measurement exercise rather than assumed distribution." },
      { title: "Reorders for new joiners", body: "Small top-up orders through the year without re-sourcing or re-specifying, so a new hire is in uniform quickly." },
    ],
    fabricNote:
      "Poly-cotton and blended suiting for shirts and formal wear — wrinkle resistance and colour retention matter most where garments are worn daily and laundered often.",
    image: "/images/sectors/corporate-office-team.webp",
    imageAlt:
      "Corporate staff in matching light-blue shirts and navy blazers in an office reception",
    ctaTitle: "Dressing a corporate team?",
    ctaBody:
      "Send us your brand colours, headcount and the roles you need covered, and we'll come back with a garment mix and quote.",
    href: "/sectors/corporate-uniforms",
  },
  {
    slug: "healthcare-uniforms",
    name: "Healthcare Uniforms",
    navLabel: "Healthcare",
    eyebrow: "Healthcare",
    title: "Healthcare uniforms built for hard laundering",
    summary:
      "Scrubs, lab coats and staff wear for hospitals, clinics and diagnostic centres — colour-coded by role.",
    metaTitle: "Healthcare & Hospital Uniform Manufacturer, Delhi",
    metaDescription:
      "Hospital and clinic uniforms manufactured in Delhi — scrubs, lab coats and nurse tunics, colour-coded by department and built for frequent hot washing.",
    intro: [
      "Healthcare uniforms are laundered harder than almost anything else we make. They are washed hot, washed often, and expected to hold both colour and shape through it. Fabric and finishing decisions that are merely nice-to-have elsewhere are the whole job here.",
      "The second requirement is legibility. In a busy department, colour-coding by role lets patients and staff identify who does what at a glance — which means the shade has to be reproduced exactly across every reorder, not approximately.",
    ],
    garments: [
      { name: "Scrub sets", detail: "Top and trouser, colour-coded by department or grade" },
      { name: "Lab coats", detail: "Full and half length, with optional name and role embroidery" },
      { name: "Nurse tunics & dresses", detail: "Cut for a full shift's movement, with contrast trims by grade" },
      { name: "Theatre and procedure wear", detail: "Made to your department's specification" },
      { name: "Warm-up jackets", detail: "Layering for cold wards and night shifts" },
      { name: "Support & housekeeping wear", detail: "Distinct colourways for non-clinical staff" },
    ],
    considerations: [
      { title: "Built for hot, frequent washing", body: "Colourfastness and shrink-control testing before bulk cutting matters more here than in any other sector we serve." },
      { title: "Colour-coding that stays exact", body: "If grades are distinguished by colour, drift between production runs defeats the purpose. Every reorder is matched to the original reference." },
      { title: "Named and role-marked", body: "Name, designation and department embroidery, so identification does not depend on a clip-on badge." },
      { title: "Movement through a full shift", body: "Cut and fabric weight chosen for garments worn twelve hours at a stretch, not for a showroom fit." },
    ],
    fabricNote:
      "Poly-cotton blends for scrubs and tunics, where shape and colour survive repeated hot washing better than pure cotton. Specific finishes — fluid-resistant or antimicrobial — are specified to your requirement rather than assumed.",
    image: "/images/sectors/healthcare-staff-corridor.webp",
    imageAlt:
      "Healthcare staff in teal scrubs and a white lab coat walking a hospital corridor",
    ctaTitle: "Outfitting a hospital or clinic?",
    ctaBody:
      "Tell us your departments, headcount and any colour-coding you already use, and we'll build a programme around it.",
    href: "/sectors/healthcare-uniforms",
  },
  {
    slug: "hospitality-uniforms",
    name: "F&B & Hospitality Uniforms",
    navLabel: "F&B & Hospitality",
    eyebrow: "F&B & Hospitality",
    title: "Kitchen and front-of-house, dressed for the job",
    summary:
      "Chef wear, service uniforms and aprons for restaurants, hotels, cafés and catering operations.",
    metaTitle: "Restaurant, Hotel & Chef Uniform Manufacturer, Delhi",
    metaDescription:
      "F&B and hospitality uniforms manufactured in Delhi — chef coats, aprons and front-of-house service wear built for heat, stains and constant laundering.",
    intro: [
      "Hospitality asks two different things of one uniform programme. The kitchen needs garments that survive heat, oil and daily washing. The floor needs garments that look composed at the end of a long service. They are rarely solved by the same fabric.",
      "We treat them as two linked ranges rather than one compromise — visibly part of the same establishment, specified differently for the conditions each side actually works in.",
    ],
    garments: [
      { name: "Chef coats & jackets", detail: "Double and single breasted, long and short sleeve" },
      { name: "Chef trousers", detail: "Loose-cut for kitchen heat, in checks or solid colours" },
      { name: "Aprons", detail: "Bib, waist and cross-back, in brand colours with optional embroidery" },
      { name: "Front-of-house shirts & blouses", detail: "Service wear that holds its press through a shift" },
      { name: "Waistcoats & service jackets", detail: "For formal dining and hotel front desk" },
      { name: "Headwear & neckwear", detail: "Caps, skull caps, chef hats, neckerchiefs and ties" },
    ],
    considerations: [
      { title: "Kitchen versus floor", body: "Breathability and stain tolerance in the kitchen; drape and finish on the floor. Same identity, different specification." },
      { title: "Stains and hot washing", body: "Kitchen wear is laundered aggressively and often. Darker colourways and tighter weaves stay presentable considerably longer." },
      { title: "Comfort at temperature", body: "Kitchen garments are worn in heat for long shifts, so fabric weight and cut matter more than they appear to on a rail." },
      { title: "High staff turnover", body: "Hospitality churns. A standing reorder for small quantities keeps new staff in uniform without a fresh sourcing exercise each time." },
    ],
    fabricNote:
      "Heavier poly-cotton for chef wear, where durability and stain tolerance lead. Lighter blends front-of-house, where appearance and drape lead. Garments intended for food-handling areas are specified to your operating requirements.",
    image: "/images/sectors/hospitality-kitchen-pass.webp",
    imageAlt:
      "Chefs in white coats handing a plated dish to a server in waistcoat and apron at the kitchen pass",
    ctaTitle: "Kitting out a restaurant or hotel?",
    ctaBody:
      "Tell us your covers, kitchen and floor headcount, and the look you want, and we'll propose a range for both sides.",
    href: "/sectors/hospitality-uniforms",
  },
  {
    slug: "industrial-uniforms",
    name: "Industrial Uniforms & Workwear",
    navLabel: "Industrial",
    eyebrow: "Industrial",
    title: "Workwear that survives the shift",
    summary:
      "Coveralls, work shirts and high-visibility wear for factories, warehouses, logistics and site teams.",
    metaTitle: "Industrial Uniform & Workwear Manufacturer, Delhi",
    metaDescription:
      "Industrial workwear manufactured in Delhi — coveralls, work shirts, trousers and high-visibility garments with reinforced stitching at stress points.",
    intro: [
      "Industrial workwear is judged on how long it lasts and how well it protects. A garment that looks correct on day one and fails at the knee in month three costs more than the one that was specified properly.",
      "We build workwear around where garments actually fail — knees, seat, elbows, pockets and seams — and specify fabric weight to the task rather than applying one cloth across an entire site.",
    ],
    garments: [
      { name: "Coveralls & boiler suits", detail: "Full-body workwear with reinforced stress points" },
      { name: "Work shirts & trousers", detail: "Heavier-weight everyday wear with utility pockets" },
      { name: "High-visibility vests & jackets", detail: "Reflective tape configurations specified to your site requirement" },
      { name: "Dungarees & bib overalls", detail: "For workshop and maintenance teams" },
      { name: "Jackets & cold-store wear", detail: "Insulated layers for outdoor and refrigerated environments" },
      { name: "Caps, aprons & accessories", detail: "Task-specific finishing items" },
    ],
    considerations: [
      { title: "Reinforced where it fails", body: "Knees, seat, elbows and pocket mouths take the load. Double stitching and bar-tacks there decide whether a garment lasts a year or a quarter." },
      { title: "Fabric weight to the task", body: "A warehouse picker and a workshop fitter need different cloth. Specifying one weight across a site over-serves one group and under-serves the other." },
      { title: "Visibility specified, not assumed", body: "Where high-visibility is required, we build to the configuration and standard your site or client specifies — tell us the requirement and we manufacture to it." },
      { title: "Sizing a shift-based workforce", body: "Contractor and shift teams change. Size distributions from a real measurement exercise, plus stock cover for turnover." },
    ],
    fabricNote:
      "Heavier cotton and poly-cotton drills for durability and abrasion resistance. Specialist protective finishes — flame-resistant or chemical-resistant — are sourced and specified against your stated requirement, not offered as a blanket claim.",
    image: "/images/sectors/industrial-warehouse-team.webp",
    imageAlt:
      "Industrial workers in navy coveralls and high-visibility vests in a warehouse",
    ctaTitle: "Kitting out a site or factory?",
    ctaBody:
      "Tell us the roles, headcount, and any safety specification you work to, and we'll quote against it.",
    href: "/sectors/industrial-uniforms",
  },
];

/** The four sectors that live under /sectors/[slug]. Schools has its own pages. */
export const SUB_SECTORS = SECTORS.filter((s) => !s.isCore);

export function getSector(slug: string) {
  return SECTORS.find((s) => s.slug === slug);
}
