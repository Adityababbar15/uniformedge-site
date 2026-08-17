// Per-school parent pages.
//
// PUBLISHING A SCHOOL NAMES IT PUBLICLY. Do not set `published: true` for any
// school until that school has confirmed in writing that we may use its name.
// This is the same constraint that took the crests off the site — see
// lib/content/clients.ts. A per-school page is a stronger claim than a crest in
// a logo strip, because it asserts we are that school's uniform supplier.
//
// Once a school agrees:
//   1. add an entry below with published: true
//   2. fill in the garment list from what we actually hold for them
//   3. if they allow it, add a crest to public/images/schools/
//
// The /schools/[slug] route is currently NOT in app/ — static export cannot build
// a dynamic route with zero params, and nothing is published. The page component
// is preserved at docs/templates/school-page.tsx.txt with restore instructions.

export type PartnerSchool = {
  slug: string;
  /** Exact registered name, as the school writes it. */
  name: string;
  /** Where the school is, to disambiguate similarly-named schools. */
  locality: string;
  published: boolean;
  /** Short line for the page hero. */
  summary?: string;
  /** What we hold for this school. Keep it to what is genuinely stocked. */
  garments?: string[];
  /** Anything parents at this school specifically need to know. */
  notes?: string[];
};

export const PARTNER_SCHOOLS: PartnerSchool[] = [
  // EXAMPLE ENTRY — published: false, so it does not render. Copy this shape when
  // a school grants permission, then set published: true.
  {
    slug: "example-school",
    name: "Example International School",
    locality: "Dwarka, New Delhi",
    published: false,
    summary:
      "Full uniform range held in stock — summer, winter, sports and accessories.",
    garments: [
      "Summer: shirt, trousers / skirt, tie, socks",
      "Winter: blazer, pullover, cardigan",
      "Sports: house T-shirt, track pants, shorts",
      "Accessories: belt, badge, school bag",
    ],
    notes: [
      "House colours available for all four houses.",
      "Blazer crest embroidered, not printed.",
    ],
  },
];

export const PUBLISHED_SCHOOLS = PARTNER_SCHOOLS.filter((s) => s.published);

export function getPartnerSchool(slug: string) {
  return PUBLISHED_SCHOOLS.find((s) => s.slug === slug);
}
