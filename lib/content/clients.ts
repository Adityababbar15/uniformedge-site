// PUBLIC DISPLAY IS OFF.
//
// Client names and crests are retained here but are NOT rendered anywhere on the
// site. A school crest is a trademark, and showing it implies endorsement — that
// needs written permission, which has not been confirmed. Until it is, the site
// uses non-identifying descriptors (see CLIENT_PROOF below) plus "references on
// request", which is credible without attributing anything to anyone.
//
// The crest image files have been moved OUT of public/ to
// ../../client-crests/ so they are not reachable by URL while permission is
// unconfirmed. The logo paths below therefore point at files that are not
// currently served.
//
// To switch names/crests back on once permission is in writing:
//   1. move client-crests/* back to public/images/clients/
//   2. set DISPLAY_CLIENT_IDENTITIES to true
//   3. restore the crest grid in components/sections/ClientProof.tsx and
//      app/gallery/page.tsx
export const DISPLAY_CLIENT_IDENTITIES = false;

export type Client = {
  name: string;
  logo?: string;
  category: "school" | "institution";
};

// Only names explicitly approved for public use. Logos are included only where
// a genuine, verified crest file exists — everyone else is name-only, no fabricated logo.
export const CLIENTS: Client[] = [
  {
    name: "Dwarka International School",
    logo: "/images/clients/dwarka-international-crest.png",
    category: "school",
  },
  {
    name: "JM International Group of Schools",
    logo: "/images/clients/jm-international-crest.png",
    category: "school",
  },
  {
    name: "Sehwag International School",
    logo: "/images/clients/sehwag-international-crest.png",
    category: "school",
  },
  { name: "Modern Convent School", category: "school" },
  { name: "BGS International School", category: "school" },
  { name: "Star Imaging Path Labs", category: "institution" },
  { name: "Janta X-ray", category: "institution" },
];

// Non-identifying proof: who we supply, by type rather than by name. The 50+
// figure is client-supplied and counts clients across all sectors; the sector
// descriptors are derived from the client list above. A count is the kind of
// claim a buyer can check, so it must stay accurate.
export const CLIENT_PROOF = [
  {
    // 50+ confirmed by the client as TOTAL clients across all sectors,
    // not schools alone. Keep the label as "clients" — narrowing it to
    // schools would overstate the school figure.
    label: "50+ clients",
    detail: "Organisations across Delhi NCR",
  },
  {
    label: "Schools",
    detail: "International, global and convent schools — our core business",
  },
  {
    label: "Healthcare",
    detail: "Diagnostic imaging and pathology laboratories",
  },
] as const;

export const SCHOOL_CLIENTS = CLIENTS.filter((c) => c.category === "school");
export const INSTITUTION_CLIENTS = CLIENTS.filter(
  (c) => c.category === "institution",
);
