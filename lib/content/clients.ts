export type Client = {
  name: string;
  logo?: string;
  category: "school" | "institution";
};

// Only names explicitly approved for public use. Logos are included only where
// a genuine, verified crest file exists — everyone else is name-only, no fabricated logo.
export const CLIENTS: Client[] = [
  {
    name: "Indraprastha International School",
    logo: "/images/clients/indraprastha-crest.jpg",
    category: "school",
  },
  {
    name: "Indraprastha World School",
    logo: "/images/clients/indraprastha-crest.jpg",
    category: "school",
  },
  {
    name: "Indraprastha Global School",
    logo: "/images/clients/indraprastha-crest.jpg",
    category: "school",
  },
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

export const SCHOOL_CLIENTS = CLIENTS.filter((c) => c.category === "school");
export const INSTITUTION_CLIENTS = CLIENTS.filter(
  (c) => c.category === "institution",
);
