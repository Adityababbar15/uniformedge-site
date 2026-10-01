export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

// Original studio set — plain grey sweep, one uniform combination per frame.
export const STUDIO_IMAGES: GalleryImage[] = Array.from({ length: 15 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/gallery/uniform-look-${n}.webp`,
    alt: `UniformEdge school uniform look ${n} of 15 — shot on a plain studio sweep`,
  };
});

// Second set — the same program shot in context rather than on a studio sweep.
export const CONTEXT_IMAGES: GalleryImage[] = [
  {
    src: "/images/campus/school-gate-arrival-morning.webp",
    alt: "Students in grey and white uniforms with backpacks walking through a school gate",
    caption: "Morning arrival — summer uniform with knitwear layer",
  },
  {
    src: "/images/campus/students-corridor-between-periods.webp",
    alt: "Senior students in white shirts, navy ties and grey uniforms walking along a school corridor",
    caption: "Between periods — senior summer uniform",
  },
  {
    src: "/images/campus/senior-summer-shirt-tie-corridor.webp",
    alt: "Three senior students in white shirts, navy ties, grey trousers and pleated skirts in a corridor",
    caption: "Senior summer uniform — shirt, tie, trouser and pleated skirt",
  },
  {
    src: "/images/campus/winter-uniform-layering-morning-courtyard.webp",
    alt: "Five students in navy blazers over knitwear with grey trousers and skirts on a winter morning",
    caption: "Winter layering — blazer over pullover across age groups",
  },
  {
    src: "/images/campus/primary-summer-shirt-pinafore-classroom.webp",
    alt: "Primary school children in grey pinafores and grey shorts in a classroom",
    caption: "Primary summer uniform — pinafore and shorts",
  },
  {
    src: "/images/campus/school-sportswear-basketball-court-action.webp",
    alt: "Students in blue sports kit playing basketball on a school court",
    caption: "Sports kit in use — moisture-wicking tee and shorts",
  },
  {
    src: "/images/campus/salwar-kameez-kurta-festive-assembly.webp",
    alt: "Two students in white kurta and blue salwar-kameez festive school uniform",
    caption: "Festive and regional wear — kurta and salwar-kameez",
  },
  {
    src: "/images/hero/school-assembly-uniform-cohesion-morning.webp",
    alt: "School assembly in a courtyard with students lined up in matching uniforms",
    caption: "Assembly — where uniform consistency is most visible",
  },
];

// Third set — the same quality of manufacture for offices, hospitals, kitchens,
// factories and branded apparel. Descriptive captions only; no client is named.
export const BEYOND_SCHOOL_IMAGES: GalleryImage[] = [
  {
    src: "/images/beyond-school/group-all-sectors.webp",
    alt: "Seven colleagues in a blazer, scrubs, a chef jacket, coveralls and navy tees standing together",
    caption: "One palette across corporate, healthcare, kitchen and site teams",
  },
  {
    src: "/images/beyond-school/corporate-group-navy-blazers.webp",
    alt: "Five colleagues in navy blazers and white shirts smiling at the camera in an office",
    caption: "Corporate team — navy blazers and white shirts",
  },
  {
    src: "/images/beyond-school/office-walk-laptops.webp",
    alt: "Three colleagues in navy and light-blue office wear walking through a bright office with laptops",
    caption: "Office wear for everyday work",
  },
  {
    src: "/images/beyond-school/reception-lanyard-smile.webp",
    alt: "Smiling front-desk colleague in a white shirt with a navy lanyard",
    caption: "Front desk — shirt and ID lanyard",
  },
  {
    src: "/images/beyond-school/team-navy-tees-outdoors.webp",
    alt: "Six young colleagues in navy t-shirts and cream hoodies laughing together outdoors",
    caption: "Custom-branded t-shirts and hoodies for teams and events",
  },
  {
    src: "/images/beyond-school/merchandise-unpacking-team.webp",
    alt: "Four colleagues holding up navy polo shirts, an apron and caps from an open carton",
    caption: "Branded apparel, unpacked and checked",
  },
  {
    src: "/images/beyond-school/handshake-fabric-swatches.webp",
    alt: "Two men shaking hands over fabric swatches and folded garments in a uniform showroom",
    caption: "Fabric and colour approved before production begins",
  },
  {
    src: "/images/beyond-school/production-floor-stitching.webp",
    alt: "Tailors stitching garments at sewing machines on a bright production floor with stacks of folded navy garments",
    caption: "On the production floor",
  },
  {
    src: "/images/beyond-school/business-card-hands-stationery.webp",
    alt: "Hands holding a blank business card above notepaper and a navy notebook on a desk",
    caption: "Business stationery alongside uniforms",
  },
];

// Homepage strip under the sectors band — three frames from the set above.
export const HOME_STRIP_IMAGES: GalleryImage[] = [
  "/images/beyond-school/group-all-sectors.webp",
  "/images/beyond-school/merchandise-unpacking-team.webp",
  "/images/beyond-school/production-floor-stitching.webp",
].map((src) => BEYOND_SCHOOL_IMAGES.find((i) => i.src === src)!);

// Kept for any consumer still expecting the original flat list.
export const GALLERY_IMAGES = STUDIO_IMAGES;
