export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  images: string[];
};

// Standard school-uniform category structure — industry-standard groupings,
// not company-specific claims. Imagery is AI-generated placeholder photography
// (see gallery.ts / AI_PLACEHOLDER_NOTE) pending a real product photoshoot.
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "shirts-trousers",
    name: "Shirts & Trousers",
    description:
      "Everyday formal wear — crisp shirts and tailored trousers built for classroom and playground alike.",
    images: [
      "/images/product/boys-white-shirt-grey-trousers-desk.webp",
      "/images/gallery/uniform-look-01.webp",
    ],
  },
  {
    slug: "blazers-sweaters",
    name: "Blazers & Sweaters",
    description:
      "Structured blazers and knitwear carrying school crests, for cooler months and formal occasions.",
    images: [
      "/images/product/navy-pullover-cardigan-knitwear.webp",
      "/images/product/navy-blazer-single-student-detail.webp",
      "/images/campus/winter-uniform-layering-morning-courtyard.webp",
      "/images/gallery/uniform-look-02.webp",
      "/images/gallery/uniform-look-03.webp",
      "/images/gallery/uniform-look-05.webp",
    ],
  },
  {
    slug: "skirts-pinafores",
    name: "Skirts & Pinafores",
    description:
      "Pleated skirts, cardigans, and pinafore dresses tailored across age groups.",
    images: [
      "/images/product/girls-collection-three-ages-courtyard.webp",
      "/images/product/primary-girl-box-pleated-pinafore.webp",
      "/images/product/girls-blouse-pleated-skirt-courtyard.webp",
      "/images/gallery/uniform-look-04.webp",
      "/images/gallery/uniform-look-06.webp",
      "/images/gallery/uniform-look-07.webp",
      "/images/gallery/uniform-look-15.webp",
    ],
  },
  {
    slug: "sportswear-pe-kits",
    name: "Sportswear & PE Kits",
    description:
      "Breathable, durable kits for sport and physical education, crested to match your school colours.",
    images: [
      "/images/product/house-tshirts-four-colours-sports-ground.webp",
      "/images/campus/school-sportswear-basketball-court-action.webp",
      "/images/product/navy-tracksuit-sports-ground-standing.webp",
      "/images/gallery/uniform-look-09.webp",
      "/images/gallery/uniform-look-11.webp",
      "/images/gallery/uniform-look-12.webp",
    ],
  },
  {
    slug: "senior-formal-wear",
    name: "Senior Formal Wear",
    description:
      "Tailored suiting and blazers for senior students, built to last through the final school years.",
    images: [
      "/images/product/senior-charcoal-blazer-staircase.webp",
      "/images/campus/senior-summer-shirt-tie-corridor.webp",
      "/images/gallery/uniform-look-13.webp",
      "/images/gallery/uniform-look-14.webp",
    ],
  },
  {
    slug: "ethnic-festive-wear",
    name: "Ethnic & Festive Wear",
    description:
      "Kurta and salwar sets for cultural days, festivals, and special school occasions.",
    images: [
      "/images/campus/salwar-kameez-kurta-festive-assembly.webp",
      "/images/gallery/uniform-look-08.webp",
    ],
  },
  {
    slug: "footwear",
    name: "Footwear (Partner Catalogue)",
    description:
      "School shoe options sourced through a partner catalogue to complete the uniform.",
    images: [],
  },
];
