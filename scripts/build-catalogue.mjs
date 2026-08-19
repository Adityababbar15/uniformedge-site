/**
 * Regenerates public/uniformedge-catalogue.pdf from the /catalogue-print route.
 *
 * Why this exists: the previous catalogue was a wkhtmltopdf export whose HTML
 * source was lost. When the contact details changed it could not be corrected,
 * and it shipped for weeks with "[phone number]" and "[email address]" on the
 * back cover. Generating from the site's own content modules means the PDF and
 * the website cannot drift apart again.
 *
 * Usage:  npm run catalogue      (dev server must be running on :3000)
 */
import { spawnSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
// Three audiences, three documents. "full" keeps the existing filename so the
// download links on the site do not break.
const VARIANTS = [
  { path: "", out: "public/uniformedge-catalogue.pdf" },
  { path: "schools/", out: "public/uniformedge-catalogue-schools.pdf" },
  { path: "business/", out: "public/uniformedge-catalogue-business.pdf" },
];
const BASE = process.env.CATALOGUE_URL || "http://localhost:3000/catalogue-print/";

if (!existsSync(CHROME)) {
  console.error(`Chrome not found at ${CHROME}`);
  process.exit(1);
}

function render({ path, out }) {
  const url = BASE + path;
  // Chrome will happily print an error page and exit 0, so check the route first.
  const probe = spawnSync("curl", ["-s", "-o", "/dev/null", "-w", "%{http_code}", url], {
    encoding: "utf8",
  });
  if (probe.stdout.trim() !== "200") {
    console.error(`${url} returned ${probe.stdout.trim()} — is the dev server running?`);
    process.exit(1);
  }
  const r = spawnSync(CHROME, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=20000",
    `--print-to-pdf=${out}`,
    url,
  ]);
  if (r.status !== 0 || !existsSync(out)) {
    console.error(`chrome exited ${r.status} — ${out} not written`);
    process.exit(1);
  }
  console.log(`  ${out.padEnd(46)} ${Math.round(statSync(out).size / 1024)} KB`);
}

for (const v of VARIANTS) render(v);
