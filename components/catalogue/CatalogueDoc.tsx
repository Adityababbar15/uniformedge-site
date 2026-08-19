import "@/app/catalogue-print/catalogue.css";
import { COMPANY, SITE_URL } from "@/lib/content/company";
import {
  CATALOGUE_ITEMS,
  FABRIC_TYPES,
  SIZE_CHART,
  PROGRAM_TIERS,
  ORDERING_STEPS,
} from "@/lib/content/catalogue";
import { STUDIO_IMAGES, AI_PLACEHOLDER_NOTE } from "@/lib/content/gallery";
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

function Folio({ n }: { n: number }) {
  return (
    <div className="folio">
      <span>UniformEdge</span>
      <span>{String(n).padStart(2, "0")}</span>
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
  // Two spreads rather than three: the old third page carried only 3 images and
  // read as a spill-over. 8 + 7 fills both pages.
  const galleryPages = [STUDIO_IMAGES.slice(0, 8), STUDIO_IMAGES.slice(8, 15)];

  return (
    <div className="cat">
      {/* 1 — Cover */}
      <section className="page cover">
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
        <Folio n={2} />
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
          {[
            ["About us", "02"],
            ["Sectors we supply", "04"],
            ["School uniforms", "05"],
            ["Corporate uniforms", "06"],
            ["Healthcare uniforms", "07"],
            ["Hospitality uniforms", "08"],
            ["Industrial uniforms", "09"],
            ["School programme product list", "10"],
            ["Uniform styles gallery", "11–12"],
            ["Fabric & quality", "13"],
            ["Size guide", "14"],
            ["Programmes & pricing", "15"],
            ["How ordering works", "16"],
            ["Further reading", "17"],
            ["Get in touch", "18"],
          ].map(([t, p]) => (
            <li key={t}>
              <span className="t">{t}</span>
              <span className="muted">{p}</span>
            </li>
          ))}
        </ul>
        <Folio n={3} />
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
          {shownSectors.map((sec) => (
            <div className="card" key={sec.slug}>
              <h3>{sec.name}</h3>
              <p className="muted" style={{ marginTop: "2mm" }}>
                {sec.summary}
              </p>
            </div>
          ))}
        </div>
        <div className="note" style={{ marginTop: "8mm" }}>
          Every programme is quoted per client. Garment mix, order volume and
          customisation scope all move the price, so we do not publish a rate
          card we would have to qualify in every conversation.
        </div>
        <Folio n={4} />
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
              {sec.considerations.slice(0, 2).map((c) => (
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
            {sec.delivery.map((d) => (
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
          <Folio n={5 + i} />
        </section>
      ))}

      {/* 10 — Full product list */}
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
        <Folio n={10} />
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
          {gi === 1 && (
            <div className="note" style={{ marginTop: "8mm" }}>
              {AI_PLACEHOLDER_NOTE}
            </div>
          )}
          <Folio n={11 + gi} />
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
        <Folio n={13} />
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
        <Folio n={14} />
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
        <div className="note" style={{ marginTop: "9mm" }}>
          Exact pricing depends on garment mix, order volume and customisation
          scope — contact us for a program quote specific to your school. Any
          revision is agreed before the academic cycle begins, not during it.
        </div>
        <Folio n={15} />
      </section>
      )}

      {/* 17 — Ordering */}
      <section className="page">
        <Rule label="Ordering process" />
        <h2>How ordering works</h2>
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
        <Folio n={16} />
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
          <div className="note" style={{ marginTop: "8mm" }}>
            Full detail for these ranges is in the companion catalogue — ask us
            for it, or see {SITE_URL.replace("https://", "")}/sectors
          </div>
          <Folio n={17} />
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
        <Folio n={17} />
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
              © {YEAR} UniformEdge. Product imagery in this catalogue is
              AI-generated placeholder work pending our photoshoot.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
