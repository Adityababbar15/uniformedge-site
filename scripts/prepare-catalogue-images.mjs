/**
 * Print-optimised JPEGs for the PDF catalogue.
 *
 * Chrome's --print-to-pdf decodes WebP and re-embeds it uncompressed, which
 * turned 2.8 MB of source images into a 15 MB PDF — too large to email to a
 * school. JPEG is passed through to the PDF as-is (DCTDecode), so converting
 * first keeps the file small.
 *
 * Sized for print, not screen: the largest any of these renders is ~85mm wide,
 * so 900px is already beyond what 150dpi needs.
 */
import sharp from "sharp";
import { mkdirSync, existsSync, statSync, readdirSync } from "node:fs";
import { join } from "node:path";

const OUT = "public/images/print";
mkdirSync(OUT, { recursive: true });

const JOBS = [
  ...["boys-white-shirt-grey-trousers-desk",
      "girls-blouse-pleated-skirt-courtyard",
      "senior-charcoal-blazer-staircase",
      "navy-tracksuit-sports-ground-standing",
      "navy-pullover-cardigan-knitwear",
     ].map((n) => ({ src: `public/images/product/${n}.webp`, out: `${n}.jpg`, w: 900 })),
  // Sector images are not all in one folder — the schools sector uses a campus
  // shot. Convert both folders so no sector page can reference a missing JPEG.
  ...["sectors", "campus"].flatMap((dir) =>
    readdirSync(`public/images/${dir}`)
      .filter((f) => f.endsWith(".webp"))
      .map((f) => ({ src: `public/images/${dir}/${f}`, out: f.replace(".webp", ".jpg"), w: 900 })),
  ),
  ...readdirSync("public/images/gallery")
      .filter((f) => f.endsWith(".webp"))
      .map((f) => ({ src: `public/images/gallery/${f}`, out: f.replace(".webp", ".jpg"), w: 700 })),
];

let made = 0, skipped = 0;
for (const j of JOBS) {
  const dest = join(OUT, j.out);
  // Skip when the JPEG is already newer than its source.
  if (existsSync(dest) && statSync(dest).mtimeMs >= statSync(j.src).mtimeMs) { skipped++; continue; }
  await sharp(j.src).resize({ width: j.w, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true }).toFile(dest);
  made++;
}
const total = readdirSync(OUT).reduce((n, f) => n + statSync(join(OUT, f)).size, 0);
console.log(`print images: ${made} generated, ${skipped} current — ${(total / 1048576).toFixed(1)} MB total`);
