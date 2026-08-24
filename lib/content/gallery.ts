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

// Kept for any consumer still expecting the original flat list.
export const GALLERY_IMAGES = STUDIO_IMAGES;
