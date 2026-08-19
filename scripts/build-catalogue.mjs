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
import { spawn, spawnSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = process.env.CATALOGUE_URL || "http://localhost:3000/catalogue-print/";
const OUT = "public/uniformedge-catalogue.pdf";

if (!existsSync(CHROME)) {
  console.error(`Chrome not found at ${CHROME}`);
  process.exit(1);
}

// Confirm the route is actually being served before handing it to Chrome —
// Chrome will happily render an error page to a PDF and exit 0.
const probe = spawnSync("curl", ["-s", "-o", "/dev/null", "-w", "%{http_code}", URL], {
  encoding: "utf8",
});
if (probe.stdout.trim() !== "200") {
  console.error(
    `${URL} returned ${probe.stdout.trim()} — start the dev server first (npm run dev)`,
  );
  process.exit(1);
}

console.log(`rendering ${URL}`);
const chrome = spawn(CHROME, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=20000",
  `--print-to-pdf=${OUT}`,
  URL,
]);

chrome.on("exit", (code) => {
  if (code !== 0 || !existsSync(OUT)) {
    console.error(`chrome exited ${code} — PDF not written`);
    process.exit(1);
  }
  const kb = Math.round(statSync(OUT).size / 1024);
  console.log(`wrote ${OUT} (${kb} KB)`);
});
