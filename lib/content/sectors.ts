// Client-confirmed 19 Aug 2026: everything described across these five sectors
// is supplied, and customised requirements are taken on as well.
//
// Deliberately NOT claimed anywhere below: compliance with named safety standards
// (EN ISO 20471 hi-vis, EN 11612 flame resistance, antimicrobial certification).
// UniformEdge holds no certifications, confirmed by the client, so none are
// asserted. Where a sector cares about them the copy says the garment is
// specified to the buyer's requirement — which is what actually happens, and is
// a promise that can be kept.

/**
 * Shown on every sector page. The garment lists are representative, not a
 * boundary — customised requirements are quoted from a brief.
 */
export const CUSTOM_CAPABILITY =
  "The ranges listed are what we supply as standard. If your requirement sits outside them — a garment we have not listed, a fabric to your own specification, or a mix built around how your teams actually work — we make to brief. Tell us what you need and we will quote it.";

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
  /** href: optional link to a dedicated page for that garment. */
  garments: { name: string; detail: string; href?: string }[];
  considerations: { title: string; body: string }[];
  fabricNote: string;
  /**
   * How the programme is actually run for this sector — the operational answer,
   * not the garment list. A buyer comparing suppliers wants to know who carries
   * the work, not only what is stitched.
   */
  delivery: { title: string; body: string }[];
  /** How the uniform carries the client's own identity rather than a generic look. */
  identity: string;
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
    identity:
      "A uniform is the most-worn piece of a school's identity — more visible over a year than any prospectus. We build it from the school's own reference points: the crest digitised into an embroidery file rather than approximated, and colours matched to the palette in the branding guide rather than the nearest shade on the shelf. The result reads as that school's uniform, not a generic one with a badge added.",
    delivery: [
      { title: "Specified once, then repeatable", body: "We agree the full wardrobe — summer, winter, sports, accessories — as one written specification, with your approval on a physical sample. Every later order is produced against that same document, so nothing drifts." },
      { title: "Parents order directly from us", body: "The school holds no stock, handles no uniform money and fields no sizing calls. Ordering, exchanges and delivery run between us and the parent." },
      { title: "Sizing settled before production", body: "For a first bulk order we run an on-site measurement drive, so students are fitted before anything is cut rather than exchanged afterwards." },
      { title: "Reorders without re-sourcing", body: "Mid-year joiners and growth spurts are standing reorders against the existing specification — no fresh vendor search each term." },
    ],
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
      { name: "Custom-branded T-shirts & hoodies", detail: "Your logo embroidered or printed — event, campaign, offsite and new-team kit, on a quick turnaround", href: "/custom-t-shirts/" },
    ],
    considerations: [
      { title: "Consistency across branches", body: "Garments for every location produced in a single batch per colourway, so one branch's uniform matches another's." },
      { title: "Tiered by role", body: "Front-office, back-office and field teams often need different garments reading as one identity — distinct but visibly related." },
      { title: "Sizing an adult workforce", body: "Adult size ranges vary far more than a school year group. We size from a staff measurement exercise rather than assumed distribution." },
      { title: "Reorders for new joiners", body: "Small top-up orders through the year without re-sourcing or re-specifying, so a new hire is in uniform quickly." },
    ],
    fabricNote:
      "Poly-cotton and blended suiting for shirts and formal wear — wrinkle resistance and colour retention matter most where garments are worn daily and laundered often.",
    identity:
      "A corporate uniform is signage that walks around. We manufacture against your brand palette rather than a nearest-match shade, and apply your logo from a single approved artwork file — so a shirt made for a new joiner in month eighteen still sits beside the original intake without reading as a different colour or a slightly different mark.",
    delivery: [
      { title: "One specification across every branch", body: "Each colourway is produced in a single batch wherever possible, so one location's uniform matches another's rather than arriving a half-shade apart." },
      { title: "Role tiers that read as one family", body: "Front-office, back-office and field teams get different garments built from the same palette and detailing — visibly distinct, visibly related." },
      { title: "Top-ups on the same spec", body: "New joiners are dressed from the approved specification without re-quoting or re-sampling, so onboarding is not held up by uniform lead times." },
      { title: "Custom-branded apparel, quick turnaround", body: "T-shirts, hoodies and shirts carrying your logo — for events, campaigns, offsites and new-team kit — produced on a short turnaround alongside the main programme. Exact timelines are confirmed at quote, against artwork and quantity." },
    ],
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
    identity:
      "In a hospital or diagnostic centre the uniform is wayfinding as much as clothing: a patient reads department and seniority from colour before they read a name badge. We hold those colours exactly across departments and across reorders, so the coding a facility designs still means the same thing two years later.",
    delivery: [
      { title: "Colour coding held across departments", body: "Each department's colourway is fixed in the specification and matched at production, so scrubs ordered a year apart still group correctly on a ward." },
      { title: "Built for the laundry cycle", body: "Garments are specified for repeated high-temperature washing — the failure here is colour loss and seam wear long before it is style." },
      { title: "Sized for shift work", body: "Staff are measured rather than assumed, and we hold the size grade so replacements fit the same person the same way." },
      { title: "Replacement stock without delay", body: "Standing reorders for new staff and worn-out garments, produced against the approved specification." },
    ],
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
    identity:
      "Front-of-house uniform is the first thing a guest reads about a property, usually before anyone speaks. We work from your interior palette and brand marks rather than a hospitality catalogue's defaults, so the floor team looks like part of the room they are standing in.",
    delivery: [
      { title: "Matched to the property, not a catalogue", body: "Colours taken from your interior and brand references, so the service uniform and the room it works in belong to each other." },
      { title: "Separate specs for kitchen and floor", body: "Kitchen and front-of-house face different demands — heat, staining, movement, presentation — and are specified separately while staying one visual family." },
      { title: "Built for heavy rotation", body: "Hospitality garments are laundered constantly. Fabric and construction are chosen for that cycle rather than for showroom appearance." },
      { title: "Fast replacement", body: "Single-garment reorders against the approved specification, so a damaged jacket does not leave a section short." },
    ],
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
    identity:
      "Workwear is the least likely uniform to be treated as branding and one of the most visible — on a site, in a yard, in front of a client's own customers. We carry your marks onto durable workwear properly, applied so they survive the same laundering the garment does.",
    delivery: [
      { title: "Specified against the actual work", body: "Garments chosen for what the job does to them — abrasion, heat, oil, weather — rather than from a general workwear range." },
      { title: "Consistent across shifts and sites", body: "One specification covers every site, so staff and contractors across locations read as one organisation." },
      { title: "Branding that survives the wash", body: "Logos applied by a method suited to industrial laundering, not a finish that lifts after a season." },
      { title: "Replacement without downtime", body: "Standing reorders so worn or damaged kit is replaced against the approved specification quickly." },
    ],
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
