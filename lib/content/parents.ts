import { COMPANY, SHOP_URL } from "./company";

// The business sells direct to parents once a school appoints us, which is what
// takes the work off the school. Parents can order in the online shop (Odoo,
// SHOP_URL), on WhatsApp, in store, or through their school.
//
// Payment: cash on delivery only until Razorpay is connected in Odoo. When it
// is, update SHOP_PAYMENT below — nothing else on the page states the method.

/**
 * Schools with a shop page. Aditya confirmed (Oct 2026) that all seven have
 * agreed to be named. Paths are the Odoo category URLs under /shop.
 */
export const SHOP_SCHOOLS = [
  { name: "Dwarka International School", path: "/shop/category/schools-9/dwarka-international-school-10" },
  { name: "J M International School", path: "/shop/category/schools-9/j-m-international-school-11" },
  { name: "Delhi Public School, Dwarka Sector 3", path: "/shop/category/schools-9/delhi-public-school-dwarka-sector-3-12" },
  { name: "Nirmal Bhartia School", path: "/shop/category/schools-9/nirmal-bhartia-school-13" },
  { name: "Bal Bharti Public School", path: "/shop/category/schools-9/bal-bharti-public-school-14" },
  { name: "Kendriya Vidyalaya", path: "/shop/category/schools-9/kendriya-vidyalaya-15" },
  { name: "O P G World School", path: "/shop/category/schools-9/o-p-g-world-school-16" },
] as const;

export const shopLink = (path = "/shop/category/schools-9") => `${SHOP_URL}${path}`;

export const SHOP_PAYMENT = "Cash on delivery";

/** The online order, start to finish. */
export const SHOP_STEPS = [
  { title: "Pick your school", body: "Each school's page lists the uniform it has approved." },
  { title: "Choose the size", body: "Prices are shown per size and include GST." },
  { title: "Check out", body: `Enter your address and pay. Payment: ${SHOP_PAYMENT.toLowerCase()}.` },
  { title: "Delivered or collected", body: "We deliver to your door, or you collect from our Dwarka store." },
] as const;

export type OrderRoute = {
  key: string;
  title: string;
  body: string;
  detail: string;
};

/** Delivery terms, from COMPANY. Parents ask this before anything else. */
export const PARENT_DELIVERY = [
  { label: "Delivery charge", value: COMPANY.delivery.charge },
  { label: "Customised orders", value: COMPANY.delivery.customTurnaround },
  {
    label: "School bulk programmes",
    value: "Scheduled backwards from your school's term start",
  },
] as const;

export const ORDER_ROUTES: OrderRoute[] = [
  {
    key: "shop",
    title: "Order online",
    body: "Choose your school, pick sizes and check out in the online shop.",
    detail: "Some items are still being added. If yours is missing, message us.",
  },
  {
    key: "whatsapp",
    title: "Order on WhatsApp",
    body: "Message us your child's school, class and size, and we'll confirm availability and price.",
    detail: "Fastest option, and how most parents reorder mid-year.",
  },
  {
    key: "store",
    title: "Visit the store",
    body: "Come in to be measured properly, try garments on, and take them away the same day.",
    detail: "Best for a first uniform, or if you are unsure of sizing.",
  },
  {
    key: "school",
    title: "Through your school",
    body: "Some schools run a uniform counter or a scheduled fitting day on campus.",
    detail: "Ask your school office whether they hold stock or take orders directly.",
  },
];

export const PARENT_FAQS = [
  {
    question: "How do I know what size to order?",
    answer:
      "Each product in the shop lists the sizes we stock for it. If you're between sizes or unsure, message us your child's height and age and we'll advise. For a first uniform we'd always recommend coming in to be measured.",
  },
  {
    question: "What if it doesn't fit?",
    answer:
      "Unworn, unwashed garments with tags intact can be exchanged within 14 days of purchase. Anything with a manufacturing defect is replaced at our cost.",
  },
  {
    question: "How do I pay?",
    answer:
      `In the online shop: ${SHOP_PAYMENT.toLowerCase()}. On WhatsApp or in store, we confirm availability and price with you first.`,
  },
  {
    question: "Can I order mid-year, or only before term starts?",
    answer:
      "Any time. Replacing a lost blazer or a pair of outgrown trousers in the middle of term is one of the main reasons parents contact us, and it doesn't need to go through the school.",
  },
  {
    question: "Do you stock every item my school's uniform includes?",
    answer:
      "For schools we supply, we hold the full range — summer and winter, formal and sports, plus accessories. If your school isn't one of ours yet, we can't sell you their uniform; ask your school to get in touch with us.",
  },
  {
    question: "Is my school's uniform available from you?",
    answer:
      "We supply schools across Delhi NCR. Message us with your school's name and we'll tell you straight away whether we hold it.",
  },
];

/** WhatsApp deep link, optionally naming the school so we can answer faster. */
export function parentWhatsAppLink(school?: string) {
  const message = school
    ? `Hi, I'd like to order the uniform for ${school}.`
    : "Hi, I'd like to order a school uniform.";
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
