import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Cloudflare Pages. The site has no server-side code —
  // no route handlers, middleware, server actions or revalidation — so nothing is
  // lost. The contact form posts to Formspree from the browser and the shop cart
  // is client-side.
  output: "export",

  // Required by output: "export" — the Next image optimiser is a server feature.
  // Safe here because every image in public/images is already a sized WebP; the
  // gallery PNGs that previously depended on optimisation were converted
  // (25MB -> 567KB), so nothing is being served oversized.
  images: { unoptimized: true },

  // Emit /about/index.html rather than /about.html, which is what Cloudflare
  // Pages expects for clean URLs without redirect rules.
  trailingSlash: true,

  // Local network testing from a phone on the same Wi-Fi.
  allowedDevOrigins: ["192.168.1.9"],

  // NOTE: headers() is deliberately absent. Next ignores it under
  // output: "export" — there is no server to set them. The security and cache
  // headers now live in public/_headers, which Cloudflare Pages reads. Adding
  // them back here would silently do nothing.
};

export default nextConfig;
