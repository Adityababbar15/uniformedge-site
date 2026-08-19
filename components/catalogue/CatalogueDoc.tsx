import "@/app/catalogue-print/catalogue.css";
import { COMPANY, SITE_URL } from "@/lib/content/company";
import {
  CATALOGUE_ITEMS,
  FABRIC_TYPES,
  SIZE_CHART,
  PROGRAM_TIERS,
  ORDERING_STEPS,
} from "@/lib/content/catalogue";
import { STUDIO_IMAGES } from "@/lib/content/gallery";
import { BLOG_POSTS } from "@/lib/content/blog";
import { SECTORS, SUB_SECTORS } from "@/lib/content/sectors";

/**
 * The catalogue document, rendered in one of three variants.
 *
 *   "full"     — every sector. The general download.
 *   "schools"  — the school programme in depth, with one page summarising the
 *                business sectors.
 *   "business" — corporate, healthcare, hospitality and industrial in depth,
 *                with one page summarising the school programme.
 *
 * Two audiences want different documents. A principal does not need four pages
 * of industrial workwear, and a facilities manager does not need a school size
 * chart — but each should know the other capability exists, hence the
 * cross-reference page rather than silence.
 */
export type CatalogueVariant = "full" | "schools" | "business";

const YEAR = 2026;

/**
 * Map a site image path to its print-optimised JPEG, whatever folder it is in.
 *
 * A hardcoded "/sectors/" -> "/print/" swap silently produced
 * /images/campus/students-corridor-between-periods.jpg — a 404 — so the schools
 * sector page printed with no photograph. Matching on the filename instead means
 * a sector can move folders without breaking the catalogue.
 */
function printSrc(src: string): string {
  const file = src.split("/").pop()!.replace(/\.webp$/, ".jpg");
  return `/images/print/${file}`;
}

function Rule({ label }: { label: string }) {
  return (
    <div className="rule">
      <span>{label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/brand/standalone-icon.svg" alt="" className="rule-mark" />
    </div>
  );
}

/** Page number comes from a CSS counter — see .folio in catalogue.css. */
function Folio() {
  return (
    <div className="folio">
      <span>UniformEdge</span>
      <span className="folio-num" />
    </div>
  );
}

export function CatalogueDoc({ variant = "full" }: { variant?: CatalogueVariant }) {
  const schoolsOnly = variant === "schools";
  const businessOnly = variant === "business";

  // Which sectors get a full page. The other side is summarised on one
  // cross-reference page rather than dropped, so neither audience is left
  // thinking we only do the one thing.
  const shownSectors = schoolsOnly
    ? SECTORS.filter((x) => x.isCore)
    : businessOnly
      ? SUB_SECTORS
      : SECTORS;
  const otherSectors = schoolsOnly
    ? SUB_SECTORS
    : businessOnly
      ? SECTORS.filter((x) => x.isCore)
      : [];

  // Sizing, programme tiers and the SKU list are school-programme material.
  const showSchoolDetail = !businessOnly;

  /**
   * The real page sequence, in render order. The contents page is generated
   * from this rather than hand-numbered — previously every structural change
   * silently desynced the index from the document.
   * Cover and Contents are listed so the indices line up, then filtered out.
   */
  const pageList: string[] = [
    "Cover",
    "About us",
    "Contents",
    "Sectors we supply",
    ...shownSectors.map((x) => x.name),
    "How ordering works for you",
    ...(showSchoolDetail ? ["School programme product list"] : []),
    "Uniform styles gallery",
    "Uniform styles gallery",
    "Fabric & quality",
    ...(showSchoolDetail ? ["Size guide", "Programmes & pricing"] : []),
    "Our process, step by step",
    ...(otherSectors.length ? ["Also from UniformEdge"] : []),
    "Further reading",
    "Get in touch",
  ];
  const toc = pageList
    .map((title, i) => ({ title, page: i + 1 }))
    .filter((e) => e.title !== "Cover" && e.title !== "Contents")
    // Collapse the two gallery spreads into one "11-12" style entry.
    .reduce<{ title: string; page: number; last?: number }[]>((acc, e) => {
      const prev = acc[acc.length - 1];
      if (prev && prev.title === e.title) { prev.last = e.page; return acc; }
      acc.push({ ...e });
      return acc;
    }, []);
  // Two spreads rather than three: the old third page carried only 3 images and
  // read as a spill-over. 8 + 7 fills both pages.
  const galleryPages = [STUDIO_IMAGES.slice(0, 8), STUDIO_IMAGES.slice(8, 15)];

  return (
    <div className="cat">
      {/* 1 — Cover */}
      <section className="page cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="cover-photo"
          src={printSrc(
            businessOnly
              ? "/images/sectors/corporate-office-team.webp"
              : "/images/hero/school-assembly-uniform-cohesion-morning.webp",
          )}
          alt=""
        />
        <div className="cover-inner">
          <div>
            <p className="kicker">
              {schoolsOnly
                ? "School uniform programmes"
                : businessOnly
                  ? "Corporate · Healthcare · Hospitality · Industrial"
                  : "Custom-branded uniforms"}
            </p>
            <h1 style={{ marginTop: "8mm" }}>
              {schoolsOnly ? (
                <>
                  Uniforms built
                  <br />
                  for your school
                </>
              ) : businessOnly ? (
                <>
                  Uniforms that carry
                  <br />
                  your brand
                </>
              ) : (
                <>
                  Uniforms built to
                  <br />
                  your identity
                </>
              )}
            </h1>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/wordmark-white.svg"
              alt="UniformEdge"
              className="cover-wordmark"
            />
            <p
              className="kicker"
              style={{ marginTop: "4mm", color: "rgba(255,255,255,.62)" }}
            >
              Schools · Corporate · Healthcare · Hospitality · Industrial
            </p>
          </div>
        </div>
      </section>

      {/* 2 — About */}
      <section className="page">
        <Rule label="About us" />
        <h2>Every uniform tells an organisation&apos;s story.</h2>
        <div style={{ marginTop: "6mm", maxWidth: "135mm" }}>
          <p className="lede">{COMPANY.vision.statement}</p>
          {COMPANY.vision.body.map((b) => (
            <p key={b}>{b}</p>
          ))}
        </div>
        <div className="grid3" style={{ marginTop: "9mm" }}>
          {COMPANY.vision.pillars.map((p) => (
            <div className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
        <div className="note" style={{ marginTop: "9mm" }}>
          {COMPANY.foundingStory.origin} {COMPANY.foundingStory.relationshipNote}
        </div>
          <Folio />
      </section>

      {/* 3 — Contents */}
      <section className="page">
        <Rule label="Contents" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/black-logo.svg"
          alt="UniformEdge"
          className="toc-logo"
        />
        <h2 style={{ marginTop: "6mm" }}>What&apos;s inside</h2>
        <ul className="toc" style={{ marginTop: "8mm" }}>
          {toc.map((e) => (
            <li key={e.title + e.page}>
              <span className="t">{e.title}</span>
              <span className="muted">
                {String(e.page).padStart(2, "0")}
                {e.last ? `–${String(e.last).padStart(2, "0")}` : ""}
              </span>
            </li>
          ))}
        </ul>
          <Folio />
      </section>

      {/* 4 — Sectors overview */}
      <section className="page">
        <Rule label="Sectors" />
        <h2>Five sectors, one facility</h2>
        <p className="muted" style={{ marginTop: "4mm", maxWidth: "145mm" }}>
          Schools are our core, and the sector our tailoring roots come from. The
          same cutting floor, colour matching and quality checks now dress
          offices, hospitals, kitchens and industrial sites.
        </p>
        <div className="grid2" style={{ marginTop: "8mm", gap: "6mm" }}>
          {SECTORS.map((sec) => (
            <div className="card sector-card" key={sec.slug}>
              {sec.image && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img className="sector-thumb" src={printSrc(sec.image)} alt="" />
              )}
              <div className="sector-card-body">
                <h3>{sec.name}</h3>
                <p className="muted" style={{ marginTop: "1.5mm" }}>
                  {sec.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="note" style={{ marginTop: "8mm" }}>
          Every programme is quoted per client. Garment mix, order volume and
          customisation scope all move the price, so we do not publish a rate
          card we would have to qualify in every conversation.
        </div>

        <h3 style={{ marginTop: "8mm", fontSize: "11pt" }}>
          Common to every programme
        </h3>
        <div className="grid3" style={{ marginTop: "4mm", gap: "5mm" }}>
          {[
            {
              t: "Made in our own facility",
              b: "Cutting, stitching and quality checks under our control in Delhi — not brokered out and hoped for.",
            },
            {
              t: "Colour matched, not approximated",
              b: "Matched from your physical swatch or Pantone reference, and held across reorders so later batches sit beside the first.",
            },
            {
              t: "Sample approved before bulk",
              b: "Nothing is cut at volume until you have held a physical sample and signed it off.",
            },
          ].map((x) => (
            <div className="runs" key={x.t}>
              <h3 style={{ fontSize: "9.5pt" }}>{x.t}</h3>
              <p className="small muted" style={{ margin: "1.5mm 0 0" }}>
                {x.b}
              </p>
            </div>
          ))}
        </div>
          <Folio />
      </section>

      {/* 5–9 — One page per sector */}
      {shownSectors.map((sec, i) => (
        <section className="page" key={sec.slug}>
          <Rule label={sec.name} />
          <div className="grid2" style={{ gap: "7mm" }}>
            <div>
              <h2 style={{ fontSize: "18pt" }}>{sec.title}</h2>
              <p className="muted" style={{ marginTop: "3mm" }}>
                {sec.intro[0]}
              </p>
              <table style={{ marginTop: "4mm" }}>
                <thead>
                  <tr>
                    <th>Garment</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {sec.garments.map((g) => (
                    <tr key={g.name}>
                      <td style={{ color: "var(--navy)" }}>{g.name}</td>
                      <td className="muted">{g.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              {sec.image && (
                <figure className="fig-sector" style={{ marginBottom: "4mm" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={printSrc(sec.image)}
                    alt=""
                  />
                </figure>
              )}
              {sec.considerations.slice(0, 3).map((c) => (
                <div key={c.title} style={{ marginBottom: "3.5mm" }}>
                  <h3 style={{ fontSize: "10pt" }}>{c.title}</h3>
                  <p className="small muted" style={{ margin: "1mm 0 0" }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="identity">{sec.identity}</p>

          <div className="grid2" style={{ marginTop: "4mm", gap: "4mm" }}>
            {sec.delivery.slice(0, 2).map((d) => (
              <div className="runs" key={d.title}>
                <h3 style={{ fontSize: "9pt" }}>{d.title}</h3>
                <p className="small muted" style={{ margin: "1mm 0 0" }}>
                  {d.body}
                </p>
              </div>
            ))}
          </div>

          <div className="note" style={{ marginTop: "4mm" }}>
            {sec.fabricNote}
          </div>
          <Folio />
        </section>
      ))}

      {/* 10 — Full product list */}
      {/* Ordering model — the thing that actually differentiates us */}
      <section className="page">
        <Rule label="How ordering works for you" />
        <h2>
          {businessOnly
            ? "Reordering without re-sourcing"
            : "The uniform runs without your office"}
        </h2>
        <p className="lede" style={{ marginTop: "5mm", maxWidth: "150mm" }}>
          {businessOnly
            ? "Most uniform admin is not the first order — it is every order after it. Once your specification is approved, top-ups run against that same document, so a new joiner is dressed without a fresh quote, a fresh sample or a fresh conversation."
            : "Most uniform complaints never reach us — they reach your front desk. Our programme is built so they do not. Parents order from us directly, take delivery at home, and raise sizing and exchanges with us."}
        </p>

        <div className="grid2" style={{ marginTop: "8mm", gap: "6mm" }}>
          {(businessOnly
            ? [
                { t: "One approved specification", b: "Colours, fabrics, logo placement and sizing agreed once and documented. Every later order is produced against it." },
                { t: "Top-ups any time", b: "Single-garment and small orders through the year, without re-specifying or re-sampling." },
                { t: "One point of contact", b: "Orders, artwork and delivery handled on email or WhatsApp with a named contact rather than a call centre." },
                { t: "Branded apparel on a short run", b: "Logo T-shirts, hoodies and shirts for events and campaigns, produced alongside the main programme." },
              ]
            : [
                { t: "Parents order from us, not from you", b: "Each partner school gets its own ordering page listing only that school's garments, so a parent cannot order the wrong item." },
                { t: "Delivered to the home", b: "No uniform counter, no queue at the office, no collection day to staff and supervise." },
                { t: "No money through the school", b: "Parents pay us directly. The school holds no stock, carries no receivable and reconciles nothing." },
                { t: "Sizing and exchanges come to us", b: "Growth spurts, wrong sizes and mid-year joiners are handled between us and the parent on WhatsApp." },
              ]
          ).map((x) => (
            <div className="runs" key={x.t}>
              <h3 style={{ fontSize: "10pt" }}>{x.t}</h3>
              <p className="small muted" style={{ margin: "1.5mm 0 0" }}>
                {x.b}
              </p>
            </div>
          ))}
        </div>

        <p className="identity" style={{ marginTop: "7mm" }}>
          {businessOnly
            ? "The point is not that ordering is digital. It is that after the first order, uniform stops being a project and becomes a line item that looks after itself."
            : "The point is not that ordering is online. It is that the uniform stops being your office's problem — the school sets the specification, and we carry everything after it."}
        </p>

        <div className="note" style={{ marginTop: "6mm" }}>
          Per-school ordering pages are rolled out as each school joins the
          programme. Until a school&apos;s page is live, ordering and support run
          on WhatsApp and email with the same direct-to-parent model.
        </div>
        <Folio />
      </section>

      {showSchoolDetail && (
        <section className="page">
        <Rule label="Full product list" />
        <h2>School programme — full product list</h2>
        <p className="muted" style={{ marginTop: "3mm", maxWidth: "145mm" }}>
          SKUs for the school programme. Corporate, healthcare, hospitality and
          industrial ranges are specified per client and quoted from your brief.
        </p>
        <table style={{ marginTop: "6mm" }}>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Item</th>
              <th>Category</th>
              <th>Fabric options</th>
              <th>Sizes</th>
            </tr>
          </thead>
          <tbody>
            {CATALOGUE_ITEMS.map((it) => (
              <tr key={it.sku}>
                <td className="sku">{it.sku}</td>
                <td>{it.item}</td>
                <td className="muted">{it.category}</td>
                <td className="muted">{it.fabric}</td>
                <td className="muted">{it.sizes}</td>
              </tr>
            ))}
          </tbody>
        </table>
          <Folio />
      </section>
      )}

      {/* 11–13 — Gallery */}
      {galleryPages.map((imgs, gi) => (
        <section className="page" key={gi}>
          <Rule label={`Uniform styles ${gi + 1} of 2`} />
          {gi === 0 && (
            <h2 style={{ marginBottom: "5mm" }}>Uniform styles</h2>
          )}
          <div className="grid3" style={{ gap: "5mm" }}>
            {imgs.map((im) => (
              <figure className="fig-third" key={im.src}>
                {/* Print JPEGs, not the site's WebP: Chrome re-embeds WebP
                    uncompressed and quintuples the PDF size. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={printSrc(im.src)}
                  alt=""
                />
              </figure>
            ))}
          </div>
          <Folio />
        </section>
      ))}

      {/* 14 — Fabric & quality */}
      <section className="page">
        <Rule label="Fabric & quality" />
        <h2>Built to survive daily wear</h2>
        <div className="grid3" style={{ marginTop: "7mm" }}>
          {FABRIC_TYPES.map((f) => (
            <div className="card" key={f.name}>
              <h3>{f.name}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
        <h3 style={{ marginTop: "10mm" }}>How we manufacture</h3>
        <p style={{ marginTop: "3mm", maxWidth: "150mm" }}>
          {COMPANY.manufacturing.ownFacility}
        </p>
        <p style={{ maxWidth: "150mm" }}>{COMPANY.manufacturing.outsourcing}</p>
        <h3 style={{ marginTop: "6mm" }}>
          {COMPANY.manufacturing.sustainability.heading}
        </h3>
        <p style={{ marginTop: "3mm", maxWidth: "150mm" }}>
          {COMPANY.manufacturing.sustainability.body}
        </p>
        <div className="note" style={{ marginTop: "5mm" }}>
          {COMPANY.manufacturing.sustainability.caveat}
        </div>

        <h3 style={{ marginTop: "8mm", fontSize: "11pt" }}>
          What we check before a garment ships
        </h3>
        <div className="grid2" style={{ marginTop: "4mm", gap: "4mm" }}>
          {[
            {
              t: "Colour against your reference",
              b: "Every production batch is checked against the physical swatch or Pantone reference on file — not against the previous batch, which is how colour drifts a shade at a time.",
            },
            {
              t: "Crest and logo placement",
              b: "Embroidery position and scale checked against the approved sample, so the mark sits identically on a size XS and a size XXL.",
            },
            {
              t: "Seams, cuffs and fastenings",
              b: "The points that fail first in daily wear: collar and cuff construction, waistband stitching, button and zip attachment.",
            },
            {
              t: "Measurement against the size grade",
              b: "Sampled from each production run, so a size M in the reorder matches the size M a parent already owns.",
            },
          ].map((x) => (
            <div className="runs" key={x.t}>
              <h3 style={{ fontSize: "9.5pt" }}>{x.t}</h3>
              <p className="small muted" style={{ margin: "1.5mm 0 0" }}>
                {x.b}
              </p>
            </div>
          ))}
        </div>

        <p className="identity" style={{ marginTop: "6mm" }}>
          Fabric choice decides how a uniform looks in week one. Construction
          decides how it looks in month nine — and that is the one a parent
          remembers when the reorder form comes round.
        </p>
          <Folio />
      </section>

      {/* 15 — Size guide */}
      {showSchoolDetail && (
        <section className="page">
        <Rule label="Size guide" />
        <h2>Size guide</h2>
        <p className="muted" style={{ marginTop: "4mm", maxWidth: "140mm" }}>
          Sample chart shown below — the final chart is calibrated to your
          school&apos;s actual student measurements during onboarding.
        </p>
        <table style={{ marginTop: "6mm" }}>
          <thead>
            <tr>
              <th>Size</th>
              <th>Approx. age</th>
              <th>Chest (in)</th>
              <th>Height (cm)</th>
            </tr>
          </thead>
          <tbody>
            {SIZE_CHART.map((r) => (
              <tr key={r.size}>
                <td style={{ color: "var(--navy)", fontWeight: 700 }}>{r.size}</td>
                <td className="muted">{r.age}</td>
                <td className="muted">{r.chest}</td>
                <td className="muted">{r.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{ marginTop: "6mm", maxWidth: "150mm" }}>
          For schools with a wide size spread, we run an on-site measurement drive
          so every student is fitted before the first bulk order is cut.
        </p>
          <Folio />
      </section>
      )}

      {/* 16 — Programs */}
      {showSchoolDetail && (
        <section className="page">
        <Rule label="School programs" />
        <h2>School programs &amp; bulk pricing</h2>
        <div className="grid3" style={{ marginTop: "7mm" }}>
          {PROGRAM_TIERS.map((t) => (
            <div className="card" key={t.name}>
              <h3>{t.name}</h3>
              <p className="muted" style={{ marginBottom: "3mm" }}>
                {t.audience}
              </p>
              {t.features.map((f) => (
                <p key={f} style={{ marginBottom: "1.5mm" }}>
                  · {f}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="note" style={{ marginTop: "7mm" }}>
          Exact pricing depends on garment mix, order volume and customisation
          scope — contact us for a program quote specific to your school. Any
          revision is agreed before the academic cycle begins, not during it.
        </div>

        <h3 style={{ marginTop: "7mm", fontSize: "11pt" }}>
          What moves the price
        </h3>
        <div className="grid2" style={{ marginTop: "4mm", gap: "4mm" }}>
          {[
            {
              t: "Garment mix",
              b: "A blazer-and-tie programme and a shirt-and-shorts programme are different orders. We quote the wardrobe you actually issue, not a standard bundle.",
            },
            {
              t: "Volume per size",
              b: "Cost follows the size spread as much as the headcount — a wide spread means more grades cut in smaller runs.",
            },
            {
              t: "Customisation depth",
              b: "Crest embroidery, house-colour piping and non-standard colourways each add process. A printed badge and a digitised embroidered crest are not the same job.",
            },
            {
              t: "Fabric grade",
              b: "Within each fabric type there is a range. We will show you the options against price rather than quoting one and assuming.",
            },
          ].map((x) => (
            <div className="runs" key={x.t}>
              <h3 style={{ fontSize: "9.5pt" }}>{x.t}</h3>
              <p className="small muted" style={{ margin: "1.5mm 0 0" }}>
                {x.b}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "7mm", fontSize: "11pt" }}>
          Included in every programme, at no separate charge
        </h3>
        <p className="muted" style={{ marginTop: "3mm", maxWidth: "150mm" }}>
          Crest digitisation into an embroidery-ready file · colour matching
          against your physical swatch or Pantone reference · a physical sample
          for approval before bulk cutting · an on-site measurement drive for a
          first bulk order · a written specification you keep.
        </p>
          <Folio />
      </section>
      )}

      {/* 17 — Ordering */}
      <section className="page">
        <Rule label="Our process" />
        <h2>From first brief to delivery</h2>
        <ol className="steps" style={{ marginTop: "7mm" }}>
          {ORDERING_STEPS.map((s) => (
            <li key={s.step}>
              <span className="n">{s.step}</span>
              <span>
                <h3>{s.title}</h3>
                <p className="muted" style={{ margin: "1.5mm 0 0" }}>
                  {s.body}
                </p>
              </span>
            </li>
          ))}
        </ol>
          <Folio />
      </section>

      {/* Cross-reference — what the other audience gets */}
      {otherSectors.length > 0 && (
        <section className="page">
          <Rule label="Also from UniformEdge" />
          <h2>
            {schoolsOnly
              ? "We also dress businesses"
              : "We also run school uniform programmes"}
          </h2>
          <p className="muted" style={{ marginTop: "4mm", maxWidth: "145mm" }}>
            {schoolsOnly
              ? "The same cutting floor, colour matching and quality checks that make your school's uniform also serve offices, hospitals, kitchens and industrial sites. If your management or trust runs other operations, one supplier can cover both."
              : "Schools are our founding sector and still our largest. If you are also involved with a school — as a parent, a trustee or through a CSR programme — the same programme discipline applies there, with parents ordering directly from us so the school carries no stock and no admin."}
          </p>
          <div className="grid2" style={{ marginTop: "8mm", gap: "6mm" }}>
            {otherSectors.map((sec) => (
              <div className="card" key={sec.slug}>
                <h3>{sec.name}</h3>
                <p className="muted" style={{ marginTop: "2mm" }}>
                  {sec.summary}
                </p>
                <p className="small muted" style={{ marginTop: "2mm" }}>
                  {sec.garments
                    .slice(0, 3)
                    .map((g) => g.name)
                    .join(" · ")}
                </p>
              </div>
            ))}
          </div>
          <p className="identity" style={{ marginTop: "7mm" }}>
            {schoolsOnly
              ? "One supplier, one specification discipline, one point of contact — whether it is a school's blazer or a facility's workwear."
              : "The same discipline that holds a brand's colour across forty branches holds a school's crest across twelve year groups."}
          </p>

          <div className="grid2" style={{ marginTop: "6mm", gap: "5mm" }}>
            <div className="runs">
              <h3 style={{ fontSize: "9pt" }}>Made in our own facility</h3>
              <p className="small muted" style={{ margin: "1mm 0 0" }}>
                Cutting, stitching and quality checks under our control in Delhi,
                whichever sector the order is for.
              </p>
            </div>
            <div className="runs">
              <h3 style={{ fontSize: "9pt" }}>Colour matched, not approximated</h3>
              <p className="small muted" style={{ margin: "1mm 0 0" }}>
                Matched from a physical swatch or Pantone reference, with a
                sample approved before anything is cut in bulk.
              </p>
            </div>
          </div>

          <div className="note" style={{ marginTop: "6mm" }}>
            Full detail for these ranges is in the companion catalogue — ask us
            for it, or see {SITE_URL.replace("https://", "")}/sectors
          </div>
          <Folio />
        </section>
      )}

      {/* 18 — Further reading (new) */}
      <section className="page">
        <Rule label="Further reading" />
        <h2>Guidance for schools</h2>
        <p className="muted" style={{ marginTop: "4mm", maxWidth: "140mm" }}>
          Practical notes written for the people who actually make uniform
          decisions. Read them at {SITE_URL.replace("https://", "")}/blog
        </p>
        <div style={{ marginTop: "7mm" }}>
          {BLOG_POSTS.map((post) => (
            <div
              key={post.slug}
              style={{
                borderTop: "1px solid var(--line)",
                padding: "5mm 0",
              }}
            >
              <h3>{post.title}</h3>
              <p className="muted" style={{ margin: "2mm 0 1.5mm" }}>
                {post.excerpt}
              </p>
              <p className="small muted" style={{ margin: 0 }}>
                {post.readingMinutes} min read · /blog/{post.slug}
              </p>
            </div>
          ))}
        </div>
          <Folio />
      </section>

      {/* 19 — Contact */}
      <section className="page cover">
        <div className="cover-inner">
          <div>
            <p className="kicker">Get in touch</p>
            <h1 style={{ marginTop: "8mm", fontSize: "30pt" }}>
              Let&apos;s build your
              <br />
              uniform program.
            </h1>
          </div>
          <div>
            <p className="contact-line">
              <strong>{COMPANY.phone}</strong>
              <br />
              <strong>{COMPANY.email}</strong>
              <br />
              <strong>{SITE_URL.replace("https://", "")}</strong>
            </p>
            <p
              className="small"
              style={{ color: "rgba(255,255,255,.62)", marginTop: "5mm", lineHeight: 1.6 }}
            >
              {COMPANY.address.street}
              <br />
              {COMPANY.address.locality}, {COMPANY.address.city}{" "}
              {COMPANY.address.postalCode}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/wordmark-white.svg"
              alt="UniformEdge"
              className="cover-wordmark"
              style={{ marginTop: "9mm" }}
            />
            <p className="small" style={{ color: "rgba(255,255,255,.45)", marginTop: "2mm" }}>
              © {YEAR} UniformEdge. Garment imagery is illustrative; production
              colour is matched to your own swatch or Pantone reference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
