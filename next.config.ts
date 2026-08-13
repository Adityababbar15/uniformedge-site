import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local network testing from a phone on the same Wi-Fi.
  allowedDevOrigins: ["192.168.1.9"],

  async headers() {
    return [
      {
        // Baseline hardening. HSTS is already applied by the host, so it is not
        // duplicated here.
        source: "/:path*",
        headers: [
          // Stop MIME sniffing turning an upload or asset into executable content.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Block framing (clickjacking). frame-ancestors is the modern form;
          // X-Frame-Options covers older browsers that ignore CSP.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          // Send the origin cross-site, never the full path.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // The site needs none of these; deny by default.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
      {
        // Files in /public are served with max-age=0 by default, so the logo and
        // photography revalidate on every page load. Their contents are stable and
        // any change ships under a new filename, so cache them hard.
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/uniformedge-catalogue.pdf",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
