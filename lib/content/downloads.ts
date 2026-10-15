// The PDFs offered on /downloads. Page counts and sizes are read from the files
// themselves — update them here if a file is replaced.
import {
  CATALOGUE_PDF,
  CORPORATE_CATALOGUE_PDF,
  COMPANY_PROFILE_PDF,
} from "@/lib/content/catalogue";

export const DOWNLOADS = [
  {
    title: "School catalogue",
    description:
      "Our main catalogue: school uniforms in detail, plus the corporate, healthcare, hospitality and industrial ranges and school essentials.",
    href: CATALOGUE_PDF,
    pages: 27,
    sizeMb: 4,
  },
  {
    title: "Corporate catalogue",
    description:
      "Corporate uniforms, branded apparel and business stationery, and how we build, check and deliver them.",
    href: CORPORATE_CATALOGUE_PDF,
    pages: 24,
    sizeMb: 21,
  },
  {
    title: "Company profile",
    description:
      "A short introduction to UniformEdge and the sectors we serve: schools, corporate, healthcare, F&B and hospitality, industrial, custom-branded apparel and stationery.",
    href: COMPANY_PROFILE_PDF,
    pages: 13,
    sizeMb: 12,
  },
] as const;
