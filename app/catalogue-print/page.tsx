import type { Metadata } from "next";
import "./catalogue.css";
import { COMPANY, SITE_URL } from "@/lib/content/company";
import {
  CATALOGUE_ITEMS,
  COLOUR_SWATCHES,
  FABRIC_TYPES,
  SIZE_CHART,
  PROGRAM_TIERS,
  ORDERING_STEPS,
} from "@/lib/content/catalogue";
import { STUDIO_IMAGES, AI_PLACEHOLDER_NOTE } from "@/lib/content/gallery";
import { BLOG_POSTS } from "@/lib/content/blog";

/**
 * PRINT SOURCE FOR THE PDF CATALOGUE — not a page for site visitors.
 *
 * The previous catalogue was a wkhtmltopdf export whose HTML source was lost, so
 * when the contact details changed it could not be corrected: it shipped with
 * "[phone number]", "[email address]", "[office address]" and "[X]" live on the
 * download. Rebuilding it here means the PDF is generated from the same content
 * modules the website renders, so the two cannot drift apart again.
 *
 * To regenerate: npm run catalogue  (see scripts/build-catalogue.mjs)
 *
 * noindex: this is a print artefact. The PDF is the deliverable, not this route.
 */
export const metadata: Metadata = {
  title: "Catalogue (print source)",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/catalogue-print/` },
};

const YEAR = 2026;

function Rule({ label }: { label: string }) {
  return (
    <div className="rule">
      <span>{label}</span>
      <span>UE</span>
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

export default function CataloguePrintPage() {
  const cat = (c: string) => CATALOGUE_ITEMS.filter((i) => i.category === c);
  const galleryPages = [
    STUDIO_IMAGES.slice(0, 6),
    STUDIO_IMAGES.slice(6, 12),
    STUDIO_IMAGES.slice(12, 15),
  ];

  return (
    <div className="cat">
      {/* 1 — Cover */}
      <section className="page cover">
        <div className="cover-inner">
          <div>
            <p className="kicker">Custom-branded uniforms</p>
            <h1 style={{ marginTop: "8mm" }}>
              Uniforms built to
              <br />
              your identity
            </h1>
          </div>
          <div>
            <p className="wordmark">
              Uniform<span>Edge</span>
            </p>
            <p
              className="kicker"
              style={{ marginTop: "3mm", color: "rgba(255,255,255,.62)" }}
            >
              Schools · Corporate · Healthcare · Hospitality · Industrial
            </p>
          </div>
        </div>
      </section>

      {/* 2 — About */}
      <section className="page">
        <Rule label="About us" />
        <h2>Every uniform tells a school&apos;s story.</h2>
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
        <h2>What&apos;s inside</h2>
        <ul className="toc" style={{ marginTop: "8mm" }}>
          {[
            ["About us", "02"],
            ["Boys' uniform", "04"],
            ["Girls' uniform", "05"],
            ["Blazers & winter wear", "06"],
            ["Sports & PE kit", "07"],
            ["Accessories", "08"],
            ["Fabric & colour swatches", "09"],
            ["Full product list", "10"],
            ["Uniform styles gallery", "11–13"],
            ["Fabric & quality", "14"],
            ["Size guide", "15"],
            ["School programs", "16"],
            ["How ordering works", "17"],
            ["Further reading", "18"],
            ["Get in touch", "19"],
          ].map(([t, p]) => (
            <li key={t}>
              <span className="t">{t}</span>
              <span className="muted">{p}</span>
            </li>
          ))}
        </ul>
        <Folio n={3} />
      </section>

      {/* 4–8 — Category pages */}
      {[
        { label: "Boys' uniform", cat: "Boys", img: "/images/print/boys-white-shirt-grey-trousers-desk.jpg" },
        { label: "Girls' uniform", cat: "Girls", img: "/images/print/girls-blouse-pleated-skirt-courtyard.jpg" },
        { label: "Blazers & winter wear", cat: "Winter wear", img: "/images/print/senior-charcoal-blazer-staircase.jpg" },
        { label: "Sports & PE kit", cat: "Sports", img: "/images/print/navy-tracksuit-sports-ground-standing.jpg" },
        { label: "Accessories", cat: "Accessories", img: "/images/print/navy-pullover-cardigan-knitwear.jpg" },
      ].map((s, i) => (
        <section className="page" key={s.cat}>
          <Rule label={s.label} />
          <div className="grid2" style={{ gap: "8mm" }}>
            <div>
              <h2>{s.label}</h2>
              <p className="muted" style={{ marginTop: "4mm" }}>
                Every garment is manufactured to your specification — colours
                matched to your palette, crest digitised and stitched, sizing
                calibrated to your students.
              </p>
              <table style={{ marginTop: "5mm" }}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Fabric</th>
                    <th>Sizes</th>
                  </tr>
                </thead>
                <tbody>
                  {cat(s.cat).map((it) => (
                    <tr key={it.sku}>
                      <td>{it.item}</td>
                      <td className="muted">{it.fabric}</td>
                      <td className="muted">{it.sizes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <figure className="fig-tall">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt="" />
            </figure>
          </div>
          <Folio n={4 + i} />
        </section>
      ))}

      {/* 9 — Swatches */}
      <section className="page">
        <Rule label="Fabric & colour" />
        <h2>Fabric &amp; colour swatches</h2>
        <p className="muted" style={{ marginTop: "4mm", maxWidth: "140mm" }}>
          A sample of the colourways available. Every colour is matched to your
          school&apos;s exact palette from a physical swatch or Pantone reference
          before production starts.
        </p>
        <div className="grid4" style={{ marginTop: "7mm" }}>
          {COLOUR_SWATCHES.map((sw) => (
            <div className="swatch" key={sw.code}>
              <span className="chip" style={{ background: sw.hex }} />
              <span>
                <span style={{ display: "block", fontSize: "8.5pt", color: "var(--navy)" }}>
                  {sw.name}
                </span>
                <span className="small muted">
                  {sw.fabric} · {sw.code}
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="note" style={{ marginTop: "9mm" }}>
          Printed and on-screen colours are indicative only. Production colour is
          matched against your school&apos;s physical swatch or Pantone reference,
          and you approve a physical sample before bulk cutting.
        </div>
        <Folio n={9} />
      </section>

      {/* 10 — Full product list */}
      <section className="page">
        <Rule label="Full product list" />
        <h2>Every item in the program</h2>
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

      {/* 11–13 — Gallery */}
      {galleryPages.map((imgs, gi) => (
        <section className="page" key={gi}>
          <Rule label={`Uniform styles ${gi + 1} of 3`} />
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
                  src={im.src.replace("/gallery/", "/print/").replace(".webp", ".jpg")}
                  alt=""
                />
              </figure>
            ))}
          </div>
          {gi === 2 && (
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
        <h2>Built to survive a school year</h2>
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
        <Folio n={14} />
      </section>

      {/* 15 — Size guide */}
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
        <Folio n={15} />
      </section>

      {/* 16 — Programs */}
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
        <Folio n={16} />
      </section>

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
        <Folio n={17} />
      </section>

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
        <Folio n={18} />
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
            <p className="wordmark" style={{ marginTop: "9mm" }}>
              Uniform<span>Edge</span>
            </p>
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
