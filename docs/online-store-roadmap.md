# Online store — roadmap

Written August 2026. Cost figures are current as of then; re-check before committing.

---

## The thing to understand first

**The storefront is the easy part. Inventory is the business problem.**

Look at what the competitor's store actually shows: every product across every
school reads **"Sold out."** That is not a web problem — they built the store and
could not keep it stocked. A parent who lands there and cannot buy is a worse
outcome than never having had a store.

Before writing checkout code, answer this: *for a given school, garment and size,
do we know what we have, and can we keep knowing?*

Scale of the problem: **5 schools × 17 garment types × 8 sizes ≈ 680 SKUs.** That
combinatorial explosion is the entire difficulty. Everything else is solved by
off-the-shelf software.

---

## Phase 0 — Prerequisites (no code)

None of this is engineering, and all of it blocks launch.

| Item | Why it blocks |
|---|---|
| **School permission to be named** | Per-school pages name schools publicly. Already gating `/schools/[slug]` |
| **Do we hold stock, or make to order?** | Decides whether this is retail or pre-order. Changes everything downstream |
| **Price list per school per garment per size** | There is no catalogue without prices |
| **GST registration and invoicing** | Legally required. See compliance below |
| **Delivery: partner, rates, coverage** | Competitor publishes ₹175 flat / 7 working days pan-India. We publish nothing |
| **Returns handling** | 14-day exchange stated on site; who receives, inspects, restocks? |
| **Who runs it day to day** | Orders need answering within hours during peak, not days |

---

## Phase 1 — Catalogue + WhatsApp ordering

**~2–3 weeks. No payments, no inventory system, no risk.**

Per-school pages listing garments, sizes and prices, with an "Order on WhatsApp"
button that pre-fills school, item and size. The route and permission gate already
exist at `/schools/[slug]`.

This captures **most of the competitor's actual advantage** — the parent searching
*"[School] uniform buy"* — at a fraction of the cost, because their advantage is
per-school SEO, not their checkout.

It also tells you what you cannot currently know: **which schools and which
garments people actually try to order.** Do this before building a store, and the
store gets built around real demand instead of guesses.

**Do this phase regardless of whether you ever build checkout.**

---

## Phase 2 — Real checkout

### Build vs buy — the India-specific catch

Shopify Payments does not operate in India. That means a Shopify store here pays
**Shopify's third-party transaction fee on top of the payment gateway's own fee.**

| | Shopify Basic + Razorpay | Custom (Next.js + Razorpay) |
|---|---|---|
| Platform fee | ~₹2,000/mo (Basic) | ₹0 |
| Shopify surcharge | **2% of every order** | none |
| Gateway (Razorpay) | 2% + 18% GST = **2.36%** | 2.36% |
| **Effective per order** | **~4.4%** | **~2.4%** |
| Build cost | Low — days | High — 6–10 weeks |
| Order/inventory admin | Included, mature | Must be built |

At **₹50 lakh/year online**, that 2% surcharge alone is **₹1 lakh/year** — every
year, forever. That funds a meaningful amount of custom build.

But it does not fund *all* of it, and custom means building order management,
refunds, inventory and invoicing yourself — plus owning them forever.

### Recommendation

**Start on Shopify.** Take the fee.

The 2% is real, but it buys a working system on day one, and at low volume the
absolute number is small. If online sales stay modest, you never regret it. If
volume grows enough for 2% to hurt, that is a good problem and you migrate then —
with real order data to build against.

Building custom commerce before you know your order volume is optimising a cost
you do not yet have.

**Keep the store on a subdomain** — `shop.uniformedge.co.in` — rather than
replacing this site. This site sells to *schools*; the store sells to *parents*.
Different audiences, different jobs. Link between them.

---

## Phase 3 — Operations

Where stores actually fail.

- **Stock visibility per school × garment × size.** Get this wrong and you become
  the "Sold out" store
- **Peak season.** April and August will be most of the year's volume. Plan stock
  and staffing around those, not the average month
- **Exchanges.** 14-day window is published; it needs a person and a process
- **Order response time.** A parent ordering a uniform is on a deadline

---

## Compliance

- **GST invoicing** applies to online sales. Standard GST invoice rules apply
  regardless of turnover
- **E-invoicing (IRN + QR)** is mandatory above **₹5 crore** aggregate annual
  turnover. Below that it does not apply — confirm which side of that line the
  business sits on
- Razorpay's 2% gateway fee itself attracts 18% GST, hence 2.36% effective
- Published policies needed before launch: shipping, returns, privacy, terms.
  The site currently has none

---

## Suggested sequence

1. **Phase 0** — permissions, prices, stock decision, delivery rates
2. **Phase 1** — per-school pages + WhatsApp ordering. Ship it. Watch demand
3. **Wait.** Three months of Phase 1 data tells you whether Phase 2 is worth it
4. **Phase 2** — Shopify on a subdomain, if the demand is there
5. **Phase 3** — operations, continuously

The honest version: **Phase 1 is high-confidence value. Phase 2 is not yet
justified by anything we know.** The competitor having a store is not evidence it
works for them — their store is out of stock.
