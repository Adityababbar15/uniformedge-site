// School essentials — items we SUPPLY rather than manufacture.
//
// The distinction matters and is kept in the copy: uniforms are made in our own
// Delhi facility, these are sourced and branded to the school's specification.
// Claiming to manufacture them would be an overclaim a buyer could check.
//
// Client-confirmed 27 Aug 2026: printed notebooks, ID cards, house flags and
// sashes, sports kit and accessories.
//
// DO NOT add items here that have not been confirmed. The commercial argument
// is "one supplier instead of several", and it only holds if every line on it
// is real.

export type Essential = {
  name: string;
  detail: string;
};

export const ESSENTIALS: Essential[] = [
  {
    name: "Printed notebooks",
    detail:
      "School-branded covers, printed to your artwork, in the rulings and page counts you issue by year group.",
  },
  {
    name: "ID cards",
    detail:
      "Student and staff cards carrying your crest and house colours, with lanyards to match.",
  },
  {
    name: "House flags & banners",
    detail:
      "House and school flags in your exact colours — for assembly, sports day and the hall.",
  },
  {
    name: "Sashes",
    detail:
      "House and sports sashes, colour-matched to the same references as the uniform so they sit together.",
  },
  {
    name: "Sports kit & accessories",
    detail:
      "The equipment and accessories that go with the sports programme, alongside the kit we manufacture.",
  },
];

export const ESSENTIALS_INTRO =
  "A school issues more than clothing, and most of it ends up spread across separate suppliers — one for uniforms, another for stationery, a third for printing. We supply the rest of what you issue alongside the uniform programme, to the same colours and the same crest artwork, on one order and one contact.";

/**
 * The honesty line. Uniforms are manufactured in our own facility; these are
 * sourced. Saying so is better than letting a buyer assume and find out later.
 */
export const ESSENTIALS_CAVEAT =
  "Uniforms are manufactured in our own Delhi facility. The items above are supplied — sourced and branded to your specification, under the same colour matching and the same approval before anything is produced at volume.";
