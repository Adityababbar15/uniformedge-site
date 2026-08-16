import { COMPANY } from "./company";

// The business sells direct to parents once a school appoints us, which is what
// takes the work off the school. There is no online checkout today — parents
// order in store, on WhatsApp, or through their school — so this content routes
// them to those channels rather than implying a storefront that does not exist.

export type OrderRoute = {
  key: string;
  title: string;
  body: string;
  detail: string;
};

export const ORDER_ROUTES: OrderRoute[] = [
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
      "Our size chart runs from XS (about 4–5 years) through XXL (about 14–15 years), plus an adult range for senior students. Sizes are calibrated to each school's own measurement drive, so if you're between sizes or unsure, message us your child's height and age and we'll advise. For a first uniform we'd always recommend coming in to be measured.",
  },
  {
    question: "What if it doesn't fit?",
    answer:
      "Unworn, unwashed garments with tags intact can be exchanged within 14 days of purchase. Anything with a manufacturing defect is replaced at our cost.",
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
    ? `Hi, I'd like to order the uniform for ${school}. Class: , Size: `
    : "Hi, I'd like to order a school uniform. School: , Class: , Size: ";
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
