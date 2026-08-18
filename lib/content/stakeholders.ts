// Who actually evaluates a uniform supplier, and what each of them is worried about.
//
// A school does not decide as one person. The principal, the management
// committee, the accounts office and the front desk each carry a different
// risk, and a page written to "schools" in general speaks to none of them.
// When a principal forwards our page onward, the person who receives it should
// find a section addressed to their job.
//
// HONESTY RULES FOR THIS FILE — the same ones that govern the whole site:
//   - No invented percentages, savings figures, satisfaction scores or hour counts.
//     Competitor sites carry things like "30-40% parent savings", "NPS 70+" and
//     "saves 100+ admin hours/year" with nothing behind them. We do not.
//   - Every claim below is either a description of how we operate, or a plain
//     statement of what the school no longer has to do. Both are checkable.
//   - `notClaimed` exists so each section states its own limit. A buyer who sees
//     us mark our own boundary trusts the rest of the page more, and we are not
//     caught out later.
//
// When real operating data exists (exchange rate, delivery performance, repeat
// rate), add it here as a fourth field — earned, not estimated.

export type Stakeholder = {
  /** The job title this section is written for. */
  role: string;
  /** Short label for the section eyebrow. */
  eyebrow: string;
  /** The concern in the terms that person would use. */
  concern: string;
  /** What we actually do about it. Descriptive, not quantified. */
  response: string;
  /** Concrete points. Each must be a fact about our process. */
  points: string[];
  /** What we deliberately do NOT claim to this reader. */
  notClaimed?: string;
};

export const STAKEHOLDERS: Stakeholder[] = [
  {
    role: "For the Principal",
    eyebrow: "Reputation",
    concern:
      "Uniforms become your problem the moment a parent is unhappy — a colour that does not match last year's, a size that never arrived, a queue outside the office in the first week of term.",
    response:
      "We deal with parents directly, so uniform complaints stop arriving at your desk. The school sets the specification; we carry the operational load of meeting it.",
    points: [
      "Parents order from us and raise sizing or exchange issues with us, not with your office",
      "Colour is matched from your physical swatch or Pantone reference and held constant across years, so a Class 3 shirt matches a Class 9 shirt",
      "You approve a physical sample before we cut in bulk — nothing reaches a parent that you have not seen first",
    ],
    notClaimed:
      "We do not promise zero complaints. We promise they come to us first, and that you hear about them from us rather than from a parent.",
  },
  {
    role: "For the Management Committee",
    eyebrow: "Budget & risk",
    concern:
      "You need to know what uniforms will cost families next year and the year after, and you need a supplier who will still be there when the academic cycle turns.",
    response:
      "We quote per garment, in writing, and agree any change before the cycle starts rather than during it. We manufacture in our own facility, on tailoring roots that go back to 1995.",
    points: [
      "Written per-garment pricing you can put in front of the committee",
      "Any revision is agreed before the academic year, not applied mid-cycle",
      "We manufacture in our own facility, so capacity and quality are not subcontracted away from us",
    ],
    notClaimed:
      "We do not publish a fixed multi-year price lock. Fabric prices move, and a lock we could not honour would be worth less than an honest annual conversation.",
  },
  {
    role: "For the Accounts Office",
    eyebrow: "Billing",
    concern:
      "Uniform money moving through the school creates reconciliation work, cash handling, and questions you would rather not have to answer.",
    response:
      "Parents pay us directly. The school does not collect uniform money, hold stock, or carry the receivable.",
    points: [
      "No uniform cash or payments handled by the school",
      "No uniform inventory sitting on the school's books",
      "Per-garment pricing documented in writing before the cycle begins",
    ],
    notClaimed:
      "Where a school prefers to buy centrally and bill families itself, we can work that way too — this is the default, not the only option.",
  },
  {
    role: "For the School Office",
    eyebrow: "Daily workload",
    concern:
      "Reopening week is when the front desk stops working on anything else — size exchanges, missing items, parents who did not order, and a vendor who is hard to reach.",
    response:
      "Sizing, exchanges and reorders are handled between us and the parent. For schools with a wide size spread, we run an on-site measurement drive before the first bulk order is cut.",
    points: [
      "On-site measurement drive so students are fitted before production, not after",
      "Parents reach us on WhatsApp for ordering support — they do not queue at your office",
      "Mid-year joiners and growth spurts are handled as standing reorders, not as a fresh negotiation",
    ],
    notClaimed:
      "Delivery timeframes and coverage are confirmed per school when we quote, and depend on the size of the order.",
  },
];

// A side-by-side of the arrangement most schools have now versus a managed
// program. Written to be fair: the left column describes a common setup, not a
// bad vendor. Plenty of local suppliers do parts of this well, and the fairness
// note below says so on the page. A comparison a buyer can see is slanted works
// against us — they are talking to the other vendor too.
//
// No pricing claims appear here. We do not know the reader's current prices, and
// "save 30-40%" with nothing behind it is exactly the kind of number this site
// refuses to print.

export type ComparisonRow = {
  factor: string;
  /** The common arrangement. Descriptive and non-pejorative. */
  typical: string;
  /** How it works with us. */
  ours: string;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    factor: "Where parents buy",
    typical: "A shop visit during a fixed window, or a counter set up at school",
    ours: "Direct from us — online, or on WhatsApp for ordering support",
  },
  {
    factor: "Sizing and exchanges",
    typical: "Parent returns to the shop, or asks the school office to intervene",
    ours: "Handled between the parent and us",
  },
  {
    factor: "Who holds stock",
    typical: "The school or the vendor, with the school often carrying the shortfall",
    ours: "We do. The school holds no uniform inventory",
  },
  {
    factor: "Who handles payment",
    typical: "Often collected by the school and reconciled later",
    ours: "Parents pay us directly. No uniform money through school accounts",
  },
  {
    factor: "Colour year to year",
    typical: "Varies with fabric lot; older and newer garments can differ visibly",
    ours: "Matched to your physical swatch or Pantone reference and held across cycles",
  },
  {
    factor: "Mid-year joiners",
    typical: "Treated as a fresh order, sometimes at short notice",
    ours: "A standing reorder against your existing specification",
  },
  {
    factor: "Before bulk production",
    typical: "Often straight to production from a description or a previous sample",
    ours: "You approve a physical sample before we cut",
  },
  {
    factor: "Reopening week at the office",
    typical: "Front desk absorbs uniform queries alongside everything else",
    ours: "Parents contact us. On-site measurement happens before term, not during",
  },
];

/** Shown under the table. Keeps the comparison honest and pre-empts the obvious objection. */
export const COMPARISON_FAIRNESS_NOTE =
  "Plenty of local suppliers do several of these things well, and if yours does, that is worth keeping. The column on the left describes the arrangement we most often find when a school comes to us — not a judgement on any particular vendor. What changes with a managed program is where the work sits: with us, rather than with your office.";
