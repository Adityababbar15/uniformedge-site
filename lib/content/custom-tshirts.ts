// Personalised T-shirts — client-confirmed 15 Sep 2026:
//   - for companies, and for events & groups
//   - personalisation: logo or crest, names / numbers, customer's own design or
//     text, choice of T-shirt colour
//   - methods: screen printing, DTF / digital print, embroidery, heat transfer / vinyl
//
// Deliberately NOT stated until confirmed: a minimum order quantity, per-piece
// prices, fabric/GSM options, where the printing is done, and proofs/mock-ups.
// Turnaround and delivery charges come from COMPANY.delivery, which is confirmed.
import { COMPANY } from "@/lib/content/company";

export const TSHIRT_PAGE = {
  path: "/custom-t-shirts",
  metaTitle: "Custom & Personalised T-Shirts, Delhi",
  metaDescription:
    "Personalised T-shirts for companies, events and groups — your logo, names, numbers or artwork, in the colour you choose. Screen print, digital print, embroidery or heat transfer, from UniformEdge in Dwarka, New Delhi.",
  eyebrow: "Custom T-Shirts",
  title: "Personalised T-shirts for your team, event or group",
  summary:
    "Your logo, names, numbers or your own design, on T-shirts in the colour you choose — for companies, events and groups across Delhi NCR.",
};

export const TSHIRT_AUDIENCES = [
  {
    title: "Companies",
    body: "Staff T-shirts, event and offsite kit, campaign and launch T-shirts — carrying your logo in your brand colours.",
  },
  {
    title: "Events & groups",
    body: "Runs and marathons, clubs, college fests, weddings and celebrations — one design for everyone, or a name on each.",
  },
];

export const TSHIRT_PERSONALISATION = [
  { title: "Your logo or crest", body: "Company, club or event logo, placed where you want it." },
  { title: "Names and numbers", body: "A different name or number on each T-shirt — for teams, participants and staff." },
  { title: "Your own design or text", body: "Send us your artwork, slogan or event wording." },
  { title: "T-shirt colour", body: "Choose the colour to match your brand, team or theme." },
];

export const TSHIRT_METHODS = [
  { title: "Screen printing", body: "For one design repeated across many T-shirts." },
  { title: "DTF / digital print", body: "For full-colour and detailed artwork." },
  { title: "Embroidery", body: "A stitched logo, for a more formal finish." },
  { title: "Heat transfer / vinyl", body: "For individual names and numbers." },
];

export const TSHIRT_METHOD_NOTE =
  "Not sure which suits your design? Tell us the artwork and quantity and we'll recommend the method when we quote.";

export const TSHIRT_STEPS = [
  {
    title: "Send us the details",
    body: "Your logo or design, the T-shirt colour, sizes, quantity, and any names or numbers — on WhatsApp or through the contact form.",
  },
  {
    title: "We quote",
    body: "We come back with the method, price and timeline for your order.",
  },
  {
    title: "Made and delivered",
    body: `Customised orders take ${COMPANY.delivery.customTurnaround.replace(" for customised orders", "")}. Delivery is ${COMPANY.delivery.charge}.`,
  },
];

export function tshirtWhatsAppLink() {
  const message =
    "Hello UniformEdge, I'd like a quote for personalised T-shirts.";
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
