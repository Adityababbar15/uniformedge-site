// Source of truth: uniform_catalogue.pdf (20pp). Every value here is transcribed
// from that document — do not add items or specs that aren't in the catalogue.

export type CatalogueItem = {
  sku: string;
  item: string;
  category: "Boys" | "Girls" | "Winter wear" | "Sports" | "Accessories";
  fabric: string;
  sizes: string;
};

export const CATALOGUE_ITEMS: CatalogueItem[] = [
  { sku: "BU-SH-01", item: "Boys' shirt", category: "Boys", fabric: "Cotton, poly-cotton", sizes: "XS–XL" },
  { sku: "BU-TR-02", item: "Boys' trousers", category: "Boys", fabric: "Terry cotton", sizes: "XS–XXL" },
  { sku: "BU-SR-03", item: "Boys' shorts", category: "Boys", fabric: "Poly-cotton", sizes: "XS–M" },
  { sku: "GU-SH-04", item: "Girls' shirt / blouse", category: "Girls", fabric: "Cotton, poly-cotton", sizes: "XS–XL" },
  { sku: "GU-SK-05", item: "Girls' skirt / pinafore", category: "Girls", fabric: "Terry cotton", sizes: "XS–XXL" },
  { sku: "GU-SK-06", item: "Salwar-kameez set", category: "Girls", fabric: "Cotton blend", sizes: "XS–XXL" },
  { sku: "BL-JK-07", item: "Blazer", category: "Winter wear", fabric: "Wool blend", sizes: "S–XXL" },
  { sku: "BL-SW-08", item: "Sweater / pullover", category: "Winter wear", fabric: "Acrylic-wool", sizes: "XS–XXL" },
  { sku: "BL-CD-09", item: "Cardigan", category: "Winter wear", fabric: "Acrylic-wool", sizes: "XS–XXL" },
  { sku: "SP-TS-10", item: "House T-shirt", category: "Sports", fabric: "Moisture-wicking poly", sizes: "XS–XXL" },
  { sku: "SP-TP-11", item: "Track pants", category: "Sports", fabric: "Poly blend", sizes: "XS–XXL" },
  { sku: "SP-SR-12", item: "Sports shorts", category: "Sports", fabric: "Quick-dry poly", sizes: "XS–L" },
  { sku: "AC-TI-13", item: "Tie", category: "Accessories", fabric: "Polyester", sizes: "One size" },
  { sku: "AC-BE-14", item: "Belt", category: "Accessories", fabric: "Faux leather", sizes: "S–XL" },
  { sku: "AC-SO-15", item: "Socks", category: "Accessories", fabric: "Cotton blend", sizes: "XS–XL" },
  { sku: "AC-BG-16", item: "Badge", category: "Accessories", fabric: "Embroidered patch", sizes: "One size" },
  { sku: "AC-BP-17", item: "School bag", category: "Accessories", fabric: "Canvas / nylon", sizes: "Standard, senior" },
];

export type Swatch = { name: string; fabric: string; code: string; hex: string };

// hex values approximate the named colourway for on-screen display only —
// actual production colour is matched to the school's physical swatch or Pantone reference.
export const COLOUR_SWATCHES: Swatch[] = [
  { name: "Navy blue", fabric: "Poly-cotton", code: "NB-01", hex: "#1b2a4a" },
  { name: "Maroon", fabric: "Poly-cotton", code: "MR-02", hex: "#6b1f2b" },
  { name: "Bottle green", fabric: "Terry cotton", code: "BG-03", hex: "#14432f" },
  { name: "Sky blue", fabric: "Pure cotton", code: "SB-04", hex: "#9dc3e0" },
  { name: "Grey melange", fabric: "Cotton blend", code: "GM-05", hex: "#9a9ea3" },
  { name: "Black", fabric: "Poly-cotton", code: "BK-06", hex: "#1a1a1c" },
  { name: "White", fabric: "Pure cotton", code: "WH-07", hex: "#f7f7f5" },
  { name: "Khaki beige", fabric: "Terry cotton", code: "KB-08", hex: "#b9a882" },
  { name: "Red", fabric: "Poly-cotton", code: "RD-09", hex: "#9e2226" },
  { name: "Royal blue", fabric: "Cotton blend", code: "RB-10", hex: "#1f4fa3" },
  { name: "Charcoal", fabric: "Terry cotton", code: "CH-11", hex: "#3c3f44" },
  { name: "Wine", fabric: "Poly-cotton", code: "WN-12", hex: "#4e1b2a" },
];

export const FABRIC_TYPES = [
  {
    name: "Pure cotton",
    body:
      "Breathable and soft against skin. Best for warm-climate daily wear; shirts and summer sets.",
  },
  {
    name: "Poly-cotton blend",
    body:
      "Wrinkle-resistant and faster-drying. Holds shape and colour through frequent washing.",
  },
  {
    name: "Terry cotton",
    body:
      "Heavier weight for trousers and skirts — better structure, less see-through in light colours.",
  },
];

export const QUALITY_CHECKS = [
  "Colourfastness testing — colour holds through repeated washing",
  "Shrink-control testing before bulk cutting begins",
  "Reinforced stitching at stress points — collars, cuffs, knees, seat",
  "Colour-match verification against your official swatch before production",
];

export type SizeRow = {
  size: string;
  age: string;
  chest: string;
  height: string;
};

export const SIZE_CHART: SizeRow[] = [
  { size: "XS", age: "4–5 yrs", chest: "24–25", height: "100–110" },
  { size: "S", age: "6–7 yrs", chest: "26–27", height: "111–122" },
  { size: "M", age: "8–9 yrs", chest: "28–29", height: "123–134" },
  { size: "L", age: "10–11 yrs", chest: "30–31", height: "135–146" },
  { size: "XL", age: "12–13 yrs", chest: "32–34", height: "147–158" },
  { size: "XXL", age: "14–15 yrs", chest: "35–37", height: "159–168" },
  { size: "Adult S/M", age: "16+ yrs", chest: "38–40", height: "169+" },
];

export const ORDERING_STEPS = [
  {
    step: "01",
    title: "Consultation",
    body: "We learn your school's identity, size spread, and current uniform pain points.",
  },
  {
    step: "02",
    title: "Design & colour match",
    body: "Crest digitisation and fabric colour-matching against your official palette.",
  },
  {
    step: "03",
    title: "Sampling",
    body: "Physical samples sent for approval before bulk cutting begins.",
  },
  {
    step: "04",
    title: "Measurement drive",
    body: "On-site or self-service sizing so every student gets the right fit.",
  },
  {
    step: "05",
    title: "Production & delivery",
    body: "Bulk production against the approved sample, delivered ahead of term start.",
  },
  {
    step: "06",
    title: "Reorder program",
    body: "A standing reorder relationship, so uniforms don't need re-sourcing each year.",
    planned: "a parent self-serve reorder portal.",
  },
];

export type ProgramTier = {
  name: string;
  audience: string;
  features: string[];
};

export const PROGRAM_TIERS: ProgramTier[] = [
  {
    name: "Starter",
    audience: "For single schools under 100 students, building their first custom uniform program.",
    features: ["Full customisation", "Standard production timeline", "Email support"],
  },
  {
    name: "Standard",
    audience: "For established schools with recurring reorders.",
    features: ["Priority production slot", "Dedicated account contact"],
  },
  {
    name: "District / group",
    audience: "For school groups or multi-branch institutions.",
    features: ["Volume-tiered pricing", "Consolidated billing", "GeM tender eligible"],
  },
];

// The 2026 sales catalogue — a single 26-page document covering all five
// sectors, replacing the three editions this site used to generate.
//
// SOURCE LIVES OUTSIDE THIS REPO: ~/Desktop/UniformEdge Master/Catalogue/claude-changes/
//   catalogue.html + catalogue.css are the editable source; ./build.sh
//   regenerates the PDF with headless Chrome. Copy the output into public/
//   after rebuilding — this repo holds the artefact, not the source.
//
// Trade-off accepted deliberately: the catalogue no longer renders from this
// site's content modules, so a change here does not propagate to the PDF.
// Anything factual edited in lib/content must be mirrored in that HTML.
export const CATALOGUE_PDF = "/uniformedge-catalogue-2026.pdf";

// Designed in Canva and kept at ~/Desktop/UniformEdge Master/Catalogue/canva-2026-10/.
// Unlike the school catalogue above, these are not built from this repo — replace
// the files in public/ under the same names to update them.
export const CORPORATE_CATALOGUE_PDF = "/uniformedge-corporate-catalogue-2026.pdf";
export const COMPANY_PROFILE_PDF = "/uniformedge-company-profile-2026.pdf";
