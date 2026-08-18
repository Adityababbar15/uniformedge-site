// DEMONSTRATION CATALOGUE — PRICES ARE ILLUSTRATIVE, NOT REAL.
//
// The school named below is a REAL school, used at the client's instruction.
// That makes the fake prices riskier than they were under a fictional name: a
// parent who reaches this page could take them as this school's actual prices.
// Mitigations in place — /shop is noindex/nofollow, and the on-page banner names
// the school and states plainly that the prices are not theirs. Do not share the
// URL with parents until real prices replace these.
//
// This exists so the shape of a store can be seen and used before committing to
// Shopify or a custom build. It is Phase 1 of docs/online-store-roadmap.md: a
// real catalogue with a real cart, checking out to WhatsApp instead of a payment
// gateway. No payments, no stock system, no backend — it works on static hosting.
//
// BEFORE THIS COULD GO LIVE:
//   1. Replace every price with the real one
//   2. Confirm which garments are actually held in stock per school
//   3. Get the school's written permission to be named (same gate as
//      lib/content/partner-schools.ts)
//   4. Decide delivery charge and coverage — parents ask this immediately
//
// The `demo` flag drives an unmissable banner. Do not set it false until the
// four points above are done.
export const SHOP_IS_DEMO = true;

export type ShopItem = {
  sku: string;
  name: string;
  category:
    | "Summer"
    | "Winter"
    | "Sports"
    | "Accessories"
    | "Footwear"
    | "Bags"
    | "Stationery";
  /**
   * True where we have NOT confirmed we actually sell this. Ancillary lines
   * (footwear, bags, stationery) are scaffolding — the structure is proven,
   * the sourcing decision is not made. Renders a visible "not confirmed" chip
   * so nobody mistakes the scaffolding for a range we stock.
   */
  unconfirmedRange?: boolean;
  /** Illustrative rupee price per unit. */
  price: number;
  sizes: string[];
  note?: string;
};

export const DEMO_SCHOOL = "Navjyoti Public School";

export const SIZES_STANDARD = ["XS", "S", "M", "L", "XL", "XXL"];
export const SIZES_ONE = ["One size"];

export const DEMO_CATALOGUE: ShopItem[] = [
  {
    sku: "BU-SH-01",
    name: "Shirt — half sleeve",
    category: "Summer",
    price: 480,
    sizes: SIZES_STANDARD,
    note: "Poly-cotton, reinforced collar and cuffs",
  },
  {
    sku: "BU-TR-02",
    name: "Trousers",
    category: "Summer",
    price: 720,
    sizes: SIZES_STANDARD,
    note: "Terry cotton, adjustable waistband",
  },
  {
    sku: "GU-SK-05",
    name: "Pleated skirt",
    category: "Summer",
    price: 690,
    sizes: SIZES_STANDARD,
    note: "Box pleat, colour-matched to blazer",
  },
  {
    sku: "BL-JK-07",
    name: "Blazer",
    category: "Winter",
    price: 2450,
    sizes: SIZES_STANDARD,
    note: "Wool blend, embroidered crest",
  },
  {
    sku: "BL-SW-08",
    name: "Pullover",
    category: "Winter",
    price: 1150,
    sizes: SIZES_STANDARD,
    note: "Acrylic-wool, V-neck with house stripe",
  },
  {
    sku: "SP-TS-10",
    name: "House T-shirt",
    category: "Sports",
    price: 430,
    sizes: SIZES_STANDARD,
    note: "Moisture-wicking, house colours",
  },
  {
    sku: "SP-TP-11",
    name: "Track pants",
    category: "Sports",
    price: 690,
    sizes: SIZES_STANDARD,
    note: "Poly blend, side stripe in house colour",
  },
  {
    sku: "AC-TI-13",
    name: "Tie",
    category: "Accessories",
    price: 240,
    sizes: SIZES_ONE,
  },
  {
    sku: "AC-BE-14",
    name: "Belt",
    category: "Accessories",
    price: 290,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    sku: "AC-SO-15",
    name: "Socks — pair",
    category: "Accessories",
    price: 150,
    sizes: ["XS", "S", "M", "L"],
  },
  // --- ANCILLARY SCAFFOLDING BELOW ---
  // Structure only. Every item is unconfirmedRange: true and priced at 0 so no
  // fake rupee figure can be read off the page. Replace price, name and note
  // with the real range once sourcing is decided, then drop the flag.
  {
    sku: "AC-SHOE-01",
    name: "School shoes — black",
    category: "Footwear",
    price: 0,
    sizes: ["UK 10", "UK 11", "UK 12", "UK 13", "UK 1", "UK 2", "UK 3", "UK 4", "UK 5"],
    note: "Range and pricing not yet confirmed",
    unconfirmedRange: true,
  },
  {
    sku: "AC-SHOE-02",
    name: "Sports shoes — white",
    category: "Footwear",
    price: 0,
    sizes: ["UK 10", "UK 11", "UK 12", "UK 13", "UK 1", "UK 2", "UK 3", "UK 4", "UK 5"],
    note: "Range and pricing not yet confirmed",
    unconfirmedRange: true,
  },
  {
    sku: "AC-BAG-01",
    name: "School bag",
    category: "Bags",
    price: 0,
    sizes: SIZES_ONE,
    note: "Range and pricing not yet confirmed",
    unconfirmedRange: true,
  },
  {
    sku: "AC-STN-01",
    name: "Stationery set",
    category: "Stationery",
    price: 0,
    sizes: SIZES_ONE,
    note: "Range and pricing not yet confirmed",
    unconfirmedRange: true,
  },
];

export const SHOP_CATEGORIES = [
  "Summer",
  "Winter",
  "Sports",
  "Accessories",
  "Footwear",
  "Bags",
  "Stationery",
] as const;

// Categories we have NOT confirmed we sell. The market leader carries shoes,
// bags and stationery alongside uniforms — a parent buying a shirt buys shoes
// from someone, and the basket roughly doubles. That is a sourcing decision,
// not a website decision, so these render behind an explicit warning until
// UniformEdge confirms the range.
export const UNCONFIRMED_CATEGORIES = ["Footwear", "Bags", "Stationery"] as const;

export function formatRupees(paise: number) {
  return `₹${paise.toLocaleString("en-IN")}`;
}
