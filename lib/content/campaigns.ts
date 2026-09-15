// Tracked entry points for links in outreach emails.
//
// Cloudflare Web Analytics does not record query strings, so ?utm_ tags are
// invisible to it. Instead each campaign links to its own path —
// /welcome/<slug>/ — which shows up under Path in Web Analytics. The page itself
// is the homepage, with a canonical to "/" and noindex, so search engines never
// treat it as a second homepage. Not in the sitemap on purpose.
//
// The outreach scripts point their signature links at these paths. Add a slug
// here (and rebuild) before a script links to it, or the link 404s.
export const EMAIL_CAMPAIGNS = [
  { slug: "gurugram", label: "Gurugram schools — first email" },
  { slug: "gurugram-2", label: "Gurugram schools — follow-up" },
  { slug: "delhi", label: "Delhi schools — first email" },
  { slug: "delhi-2", label: "Delhi schools — follow-up" },
  { slug: "noida", label: "Noida schools — first email" },
  { slug: "noida-2", label: "Noida schools — follow-up" },
] as const;
