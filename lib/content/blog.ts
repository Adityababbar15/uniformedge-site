// Editorial rule for this file: every UniformEdge-specific claim must trace back to
// uniform_catalogue.pdf or lib/content/company.ts. General industry guidance is written
// as professional judgement, not presented as research. No invented statistics.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "callout"; text: string }
  | { type: "cta"; text: string; label: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  audience: string;
  published: string; // ISO date
  readingMinutes: number;
  heroImage?: string;
  heroAlt?: string;
  body: Block[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-schools-choose-a-uniform-manufacturer",
    title: "How Schools Should Choose a Uniform Manufacturer",
    metaTitle: "How Schools Should Choose a Uniform Manufacturer | UniformEdge",
    metaDescription:
      "A practical evaluation framework for school management and procurement teams choosing a uniform supplier — what to ask, what to verify, and which failures show up only after delivery.",
    excerpt:
      "Most uniform supplier decisions are made on price per piece and regretted on the reorder. Here's what to evaluate instead.",
    primaryKeyword: "how to choose a school uniform manufacturer",
    secondaryKeywords: [
      "school uniform supplier selection",
      "school uniform vendor evaluation",
      "uniform manufacturer questions",
      "school uniform procurement",
    ],
    searchIntent:
      "Commercial investigation — a decision-maker comparing suppliers before committing.",
    audience: "School management, procurement teams, uniform committees",
    published: "2026-08-08",
    readingMinutes: 7,
    heroImage: "/images/campus/students-corridor-between-periods.webp",
    heroAlt: "Senior students in matching grey and white uniforms walking along a school corridor",
    body: [
      {
        type: "p",
        text: "Choosing a uniform supplier looks like a procurement decision and behaves like a branding one. The garment carries your crest, your colours, and your school's name every day a student wears it — and once a supplier is in place, switching is disruptive enough that most schools stay put for years. That makes the initial evaluation worth more attention than it usually gets.",
      },
      {
        type: "p",
        text: "The failure modes that matter rarely appear in a quotation. They appear in the second year, when a reorder comes back a slightly different shade of navy, or when a size chart built for a different student population produces a hundred badly-fitting shirts.",
      },
      { type: "h2", text: "Start with the failures, not the features" },
      {
        type: "p",
        text: "In our experience working with Delhi schools, two complaints come up more than any others: colour mismatch between production runs, and inconsistent fit across the size range. Both are solvable — but only before production starts, not after delivery. So the useful evaluation question isn't \"what can you make?\" It's \"how do you prevent these two specific problems?\"",
      },
      { type: "h3", text: "Colour consistency" },
      {
        type: "p",
        text: "A school's navy is not a generic navy. If a supplier matches to \"closest available shade\" rather than to your official palette, you will get drift — between garment types in the same order, and between this year's order and next year's. Ask how colour is matched, and against what reference.",
      },
      {
        type: "p",
        text: "A supplier who takes this seriously will ask you for a physical swatch or a Pantone reference from your brand guide, and will verify the match before cutting begins rather than after.",
      },
      { type: "h3", text: "Fit across a real student population" },
      {
        type: "p",
        text: "Standard size charts are built on averages. Your school is not an average. A supplier working from a generic chart alone will fit most students acceptably and a meaningful minority badly — and the minority generates all the complaints.",
      },
      {
        type: "p",
        text: "Ask whether the size chart gets calibrated to your students, and whether an on-site measurement drive is available for a first bulk order.",
      },
      { type: "h2", text: "Ten questions worth asking" },
      {
        type: "p",
        text: "These separate suppliers who have thought about school programs from those who are simply taking bulk garment orders.",
      },
      {
        type: "ol",
        items: [
          "Do you manufacture in-house, outsource, or both — and which applies to our order?",
          "How do you match our crest? Is it digitised into an embroidery file, or approximated?",
          "What colour reference do you work from — our physical swatch, a Pantone code, or your nearest stock shade?",
          "Do we approve a physical sample before bulk cutting begins?",
          "How is the size chart calibrated to our student population?",
          "What quality checks happen before delivery, specifically?",
          "What is the lead time, and how does it change during peak season?",
          "What happens on a defect or a wrong size after delivery?",
          "How do reorders work in year two — do we re-source, or is there a standing program?",
          "Who is our point of contact when something goes wrong mid-term?",
        ],
      },
      {
        type: "callout",
        text: "A supplier who cannot answer question 4 or question 8 clearly is telling you something. Sample approval and defect handling are where cost gets cut quietly.",
      },
      { type: "h2", text: "In-house versus outsourced production" },
      {
        type: "p",
        text: "This is often framed as a straightforward good-versus-bad distinction. It isn't. In-house manufacturing gives a supplier direct control over cutting, stitching, and quality checks. Outsourced capacity gives flexibility when peak-season volume exceeds what any single facility can absorb.",
      },
      {
        type: "p",
        text: "The problem isn't outsourcing. The problem is undisclosed outsourcing with no quality control attached to it. What you want to know is which parts of your order are made where, and whether the same checks apply either way.",
      },
      { type: "h2", text: "Reading a quotation properly" },
      {
        type: "p",
        text: "Per-piece price is the least informative number in a uniform quotation, because it says nothing about what happens across a three-year relationship. Compare on total programme cost instead.",
      },
      {
        type: "table",
        head: ["What to compare", "Why it matters"],
        rows: [
          [
            "Fabric specification per garment",
            "A shirt and a trouser have different demands. A supplier quoting one fabric across the range hasn't thought it through.",
          ],
          [
            "Sampling and approval process",
            "Determines whether errors are caught before or after bulk production.",
          ],
          [
            "Reorder terms",
            "Determines whether year two is a fresh vendor search or a phone call.",
          ],
          [
            "Defect and exchange handling",
            "Determines who absorbs the cost of a bad batch — you or the supplier.",
          ],
          [
            "Peak-season capacity",
            "Determines whether uniforms arrive before term starts or during it.",
          ],
        ],
      },
      { type: "h2", text: "Fabric: match the cloth to the garment" },
      {
        type: "p",
        text: "A supplier who understands school wear will specify fabric per garment rather than applying one blend across the range. As a rough guide:",
      },
      {
        type: "ul",
        items: [
          "Pure cotton — breathable and comfortable against skin, well suited to warm-climate daily wear and summer shirts.",
          "Poly-cotton blend — wrinkle-resistant and faster drying, holds shape and colour through frequent washing.",
          "Terry cotton — heavier weight, better structure for trousers and skirts, and less see-through in lighter colours.",
        ],
      },
      {
        type: "p",
        text: "If a quotation lists a single fabric for shirts, trousers, and skirts alike, that's worth questioning.",
      },
      { type: "h2", text: "A note on certifications" },
      {
        type: "p",
        text: "Certifications are worth asking about, but treat their absence as a question rather than a disqualification — many capable manufacturers serving Indian schools operate without third-party textile certification. What matters more for most schools is whether specific, checkable quality processes exist: colourfastness testing, shrink-control testing before bulk cutting, and reinforced stitching at stress points such as collars, cuffs, knees, and seat.",
      },
      {
        type: "p",
        text: "If your procurement process formally requires certification, raise it early rather than late — it will narrow the supplier list considerably.",
      },
      { type: "h2", text: "Before you sign" },
      {
        type: "ul",
        items: [
          "You have seen and approved a physical sample, not a photograph.",
          "The colour has been verified against your official reference.",
          "The size chart reflects your students, not a generic table.",
          "Lead times are written down, including peak season.",
          "You know exactly who to call when something goes wrong.",
        ],
      },
      {
        type: "cta",
        text: "If you're evaluating suppliers this term, we're happy to walk your procurement team through how we handle each of the points above — colour matching, sampling, sizing, and quality checks — before you commit to anything.",
        label: "Discuss your school's requirements",
        href: "/contact",
      },
    ],
  },
  {
    slug: "what-makes-a-high-quality-school-uniform",
    title: "What Makes a High-Quality School Uniform?",
    metaTitle: "What Makes a High-Quality School Uniform? | UniformEdge",
    metaDescription:
      "Fabric weight, stitching at stress points, colourfastness and shrink control — the construction details that determine whether a school uniform survives a full academic year.",
    excerpt:
      "A uniform gets washed weekly and worn hard. Here's where quality is actually won or lost — and how to inspect for it.",
    primaryKeyword: "high quality school uniform",
    secondaryKeywords: [
      "school uniform fabric quality",
      "durable school uniforms",
      "school uniform stitching",
      "school uniform fabric types",
    ],
    searchIntent:
      "Informational with commercial follow-through — understanding quality markers before specifying or buying.",
    audience: "School management, uniform committees, procurement teams",
    published: "2026-08-08",
    readingMinutes: 6,
    heroImage: "/images/product/navy-pullover-cardigan-knitwear.webp",
    heroAlt: "Navy V-neck pullover and button-front cardigan showing knitwear construction",
    body: [
      {
        type: "p",
        text: "A school uniform lives a harder life than most garments. It is worn four to six days a week, washed weekly or more often, sat on concrete, caught on desks, and expected to still look presentable at the end of an academic year. Most of what separates a uniform that survives that from one that doesn't is decided before the garment is cut.",
      },
      { type: "h2", text: "Fabric: the decision everything else rests on" },
      {
        type: "p",
        text: "There is no single best uniform fabric — there is a correct fabric for each garment, and the trade-off is usually between comfort and structure.",
      },
      {
        type: "table",
        head: ["Fabric", "Strengths", "Best used for"],
        rows: [
          [
            "Pure cotton",
            "Breathable, soft against skin, comfortable in heat",
            "Summer shirts, warm-climate daily wear",
          ],
          [
            "Poly-cotton blend",
            "Wrinkle-resistant, dries faster, holds shape and colour through frequent washing",
            "Everyday shirts, shorts, garments washed very often",
          ],
          [
            "Terry cotton",
            "Heavier weight, better structure, less see-through in light colours",
            "Trousers, skirts, pinafores",
          ],
        ],
      },
      {
        type: "callout",
        text: "The see-through problem is the one schools most often discover too late. Light-coloured trousers and skirts in a thin fabric become a complaint from parents within weeks. Weight matters more than thread count here.",
      },
      { type: "h2", text: "Stitching: inspect the stress points" },
      {
        type: "p",
        text: "Garments fail where force concentrates. When you have a sample in hand, ignore the visible front panels and go straight to:",
      },
      {
        type: "ul",
        items: [
          "Collar — should hold its shape rather than curling after washing. Check the interlining.",
          "Cuffs — high-wear, high-friction, and the first place fraying shows.",
          "Knees — the single most common failure point on junior trousers and shorts.",
          "Seat — takes the most stress in daily wear and the least attention in cheap manufacturing.",
          "Button attachment — should be reinforced, not tacked on with minimum thread.",
          "Armholes and side seams — pull gently; the seam should not gape or show light through the stitch line.",
        ],
      },
      {
        type: "p",
        text: "Reinforced stitching at these points costs the manufacturer very little and saves the school a great deal. It is also one of the easiest things to quietly skip, which is exactly why it's worth checking on a physical sample.",
      },
      { type: "h2", text: "Colourfastness: the second-year problem" },
      {
        type: "p",
        text: "Colour failure rarely shows up in the first month. It shows up when a class photograph makes it obvious that some students' shirts have faded further than others, or when this year's reorder doesn't match last year's garments hanging next to it.",
      },
      {
        type: "p",
        text: "Two separate things are at play. The first is colourfastness — whether the dye holds through repeated washing. The second is batch-to-batch consistency — whether your navy is the same navy every production run. A supplier working to a fixed reference (your physical swatch or a Pantone code) rather than to \"nearest available shade\" is solving the second problem at source.",
      },
      { type: "h2", text: "Shrinkage: test before bulk, not after" },
      {
        type: "p",
        text: "Almost all natural-fibre fabric shrinks somewhat on first washes. That isn't a defect in itself — it becomes one when it hasn't been accounted for in the cutting pattern. A shirt cut to fit exactly at delivery is a shirt that no longer fits after three washes.",
      },
      {
        type: "p",
        text: "Shrink-control testing before bulk cutting begins is the professional standard here. Ask whether it happens, and whether sizing accounts for the result.",
      },
      { type: "h2", text: "Crest and embroidery" },
      {
        type: "p",
        text: "The crest is the part of the uniform that is unmistakably yours, and it is also where approximation is most visible. A properly digitised crest — converted into an embroidery-ready file from your actual artwork — reproduces consistently across garment types and across production runs. An approximated crest drifts.",
      },
      {
        type: "p",
        text: "On a sample, check that the embroidery lies flat without puckering the fabric around it, that fine detail in the crest is legible rather than filled in, and that the reverse side is neatly finished so it doesn't irritate skin through a thin shirt.",
      },
      { type: "h2", text: "A practical sample inspection checklist" },
      {
        type: "ol",
        items: [
          "Hold light-coloured trousers and skirts up to a window — check opacity.",
          "Pull gently at side seams and armholes — look for gaping or visible light.",
          "Inspect collar interlining and cuff finishing.",
          "Check knee and seat construction on junior garments.",
          "Confirm buttons are reinforced.",
          "Examine crest embroidery flatness, detail legibility, and reverse finishing.",
          "Ask for the colour reference used, in writing.",
          "Ask whether shrink-control testing precedes bulk cutting.",
        ],
      },
      {
        type: "p",
        text: "Every one of these is checkable in about ten minutes with a physical sample in hand — which is the strongest argument for insisting on sample approval before any bulk order is cut.",
      },
      {
        type: "cta",
        text: "We send physical samples for sign-off before bulk cutting begins, precisely so your team can run the checks above. Colourfastness and shrink-control testing happen before production, and colour is verified against your official swatch.",
        label: "Request a sample for your school",
        href: "/contact",
      },
    ],
  },
  {
    slug: "school-uniform-procurement-process",
    title: "How to Plan a School Uniform Procurement Process",
    metaTitle: "How to Plan a School Uniform Procurement Process | UniformEdge",
    metaDescription:
      "A term-by-term planning framework for school uniform procurement — when to start, how to sequence sampling and measurement, and how to avoid the peak-season delivery crunch.",
    excerpt:
      "Most uniform delivery problems are calendar problems. Working backwards from term start is what prevents them.",
    primaryKeyword: "school uniform procurement process",
    secondaryKeywords: [
      "school uniform planning",
      "bulk school uniform order",
      "school uniform timeline",
      "uniform procurement checklist",
    ],
    searchIntent:
      "Informational, process-oriented — an administrator planning or fixing a procurement cycle.",
    audience: "School administrators, operations teams, procurement departments",
    published: "2026-08-08",
    readingMinutes: 6,
    heroImage: "/images/hero/school-assembly-uniform-cohesion-morning.webp",
    heroAlt: "School assembly with students lined up in consistent uniforms",
    body: [
      {
        type: "p",
        text: "Uniform problems are usually blamed on the supplier. In practice a large share of them are timing problems: the order was placed too late for sampling to happen properly, so sampling was skipped, so errors surfaced at delivery instead of before production.",
      },
      {
        type: "p",
        text: "The fix is unglamorous. Work backwards from the first day of term and give each stage the time it actually needs.",
      },
      { type: "h2", text: "Work backwards, not forwards" },
      {
        type: "p",
        text: "A first-time custom uniform program has more stages than most schools expect, and several of them cannot be compressed. Sampling requires physical garments to travel and be reviewed. A measurement drive requires access to students, which means it has to happen while school is in session.",
      },
      {
        type: "p",
        text: "The sequence below is the order these stages have to happen in. The time each takes will vary by supplier and order size — agree the actual dates in writing rather than assuming them.",
      },
      {
        type: "ol",
        items: [
          "Consultation — the supplier learns your identity, size spread, and current pain points.",
          "Design and colour match — crest digitisation and fabric matching against your official palette.",
          "Sampling — physical samples produced and sent for your approval.",
          "Sample review and sign-off — your committee inspects and approves, or requests changes.",
          "Measurement drive — on-site or self-service sizing across the student body.",
          "Bulk production — manufacturing against the approved sample.",
          "Delivery — ahead of term start, not during it.",
        ],
      },
      {
        type: "callout",
        text: "Stage 4 is the one schools most often underestimate. If your uniform committee meets monthly, sample sign-off can add weeks that nobody budgeted for. Schedule the review meeting when you commission the sample, not when it arrives.",
      },
      { type: "h2", text: "Peak season is real, and it is predictable" },
      {
        type: "p",
        text: "Every school in your city needs uniforms at roughly the same point in the calendar. Manufacturing capacity does not expand to meet that, which means the schools that placed orders early get produced first and the schools that placed late get produced late.",
      },
      {
        type: "p",
        text: "This is worth planning around rather than negotiating around. Ask a prospective supplier directly how lead times change during peak season, and whether standing-programme schools get production priority. The answer tells you both how honest they are and how they will treat you in year two.",
      },
      { type: "h2", text: "Decide who decides" },
      {
        type: "p",
        text: "Uniform decisions attract input from a wide group — management, parents, teachers, sometimes students. That input is valuable, but it needs to be gathered before sampling rather than during it. Changes requested after a sample is approved are expensive and slow; changes requested after bulk production has begun are usually not possible at all.",
      },
      {
        type: "p",
        text: "Agree in advance who has final sign-off authority and what specifically they are signing off on: colour, fit, fabric, crest placement.",
      },
      { type: "h2", text: "Sizing: plan for the spread, not the average" },
      {
        type: "p",
        text: "A standard size chart running from roughly XS through XXL, plus an adult range for senior students, covers most of a school population. The students it doesn't cover generate a disproportionate share of complaints.",
      },
      {
        type: "p",
        text: "For a first bulk order, an on-site measurement drive is worth the disruption — it produces a size distribution based on your actual students rather than an assumed one, and that distribution then informs every subsequent reorder.",
      },
      {
        type: "table",
        head: ["Decision", "Best made at", "Cost of deciding late"],
        rows: [
          ["Colour and crest", "Before sampling", "Full re-sample and delay"],
          ["Fabric per garment", "Before sampling", "Full re-sample and delay"],
          ["Fit and cut", "At sample review", "Re-cut; possible bulk delay"],
          ["Size distribution", "At measurement drive", "Wrong-size stock, exchanges"],
          ["Quantity per size", "After measurement drive", "Over- or under-ordering"],
        ],
      },
      { type: "h2", text: "Multi-branch and group procurement" },
      {
        type: "p",
        text: "School groups have an additional problem: keeping the uniform consistent across branches while billing and delivery stay manageable. Consistency here is a production question — garments made in a single batch per colourway will match each other more reliably than the same garment produced at different times across different branches' orders.",
      },
      {
        type: "p",
        text: "If your group procures through government tender processes, confirm supplier eligibility early. It constrains the supplier list, and finding that out late costs a cycle.",
      },
      { type: "h2", text: "Year two onwards" },
      {
        type: "p",
        text: "The first cycle is the expensive one. Once a crest is digitised, a colour reference is fixed, and a size distribution is known, reorders should be substantially simpler — provided you stay with a supplier who retains all three.",
      },
      {
        type: "p",
        text: "This is the strongest practical argument for treating supplier selection as a multi-year decision rather than an annual one: the setup work only pays back if you don't repeat it every year.",
      },
      {
        type: "cta",
        text: "Tell us your term start date, student strength, and branch count, and we'll map a realistic timeline back from delivery — including where sampling and the measurement drive need to sit.",
        label: "Plan your procurement timeline",
        href: "/contact",
      },
    ],
  },
];

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
