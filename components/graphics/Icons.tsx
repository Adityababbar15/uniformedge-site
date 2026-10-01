import type { SVGProps } from "react";

// A small family of line icons on one 24px grid: 1.5px stroke, round caps, no
// fills, so they sit alongside the serif headings without competing. Decorative
// only — every one is hidden from assistive tech and the text beside it carries
// the meaning.
function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

type P = SVGProps<SVGSVGElement>;

// Why a school stops carrying the work
export const StockIcon = (p: P) => (
  <Icon {...p}>
    <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
  </Icon>
);
export const MoneyIcon = (p: P) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 8h7M8.5 11h7M8.5 8H10a3 3 0 0 1 0 6H8.5l5 4" />
  </Icon>
);
export const MeasureIcon = (p: P) => (
  <Icon {...p}>
    <path d="m4 16 12-12 4 4L8 20l-4-4Z" />
    <path d="m7 13 2 2M10 10l1.5 1.5M13 7l2 2" />
  </Icon>
);
export const ChatIcon = (p: P) => (
  <Icon {...p}>
    <path d="M4 5.5h16v11H11l-4.5 3.5v-3.5H4v-11Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </Icon>
);

// One per sector
const SchoolIcon = (p: P) => (
  <Icon {...p}>
    <path d="M9 3 12 7l3-4 5 2.5V21H4V5.5L9 3Z" />
    <path d="M12 7v14M12 11 8.5 8.5" />
  </Icon>
);
const CorporateIcon = (p: P) => (
  <Icon {...p}>
    <path d="M10 3h4l-.8 3.2h-2.4L10 3Z" />
    <path d="m10.8 6.2-1.8 12L12 21l3-2.8-1.8-12" />
  </Icon>
);
const HealthcareIcon = (p: P) => (
  <Icon {...p}>
    <path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5V4Z" />
  </Icon>
);
const HospitalityIcon = (p: P) => (
  <Icon {...p}>
    <path d="M7 20v-4.2A4 4 0 0 1 6 8a4.5 4.5 0 0 1 8.5-1.5A4 4 0 0 1 18 15.8V20H7Z" />
    <path d="M7 17.5h11" />
  </Icon>
);
const IndustrialIcon = (p: P) => (
  <Icon {...p}>
    <path d="M3.5 17h17" />
    <path d="M5.5 17a6.5 6.5 0 0 1 13 0" />
    <path d="M12 6.5V11M9.2 7.5V11M14.8 7.5V11" />
  </Icon>
);
const ApparelIcon = (p: P) => (
  <Icon {...p}>
    <path d="m8.5 3.5 3.5 2.5 3.5-2.5L21 6l-2.5 4.5-2.5-1.5V20.5H8V9l-2.5 1.5L3 6l5.5-2.5Z" />
  </Icon>
);
const StationeryIcon = (p: P) => (
  <Icon {...p}>
    <rect x="6" y="3" width="12" height="18" rx="1.5" />
    <path d="M9.5 3v18M12.5 8h3M12.5 11h3" />
  </Icon>
);

const BY_SLUG: Record<string, (p: P) => React.ReactElement> = {
  schools: SchoolIcon,
  "corporate-uniforms": CorporateIcon,
  "healthcare-uniforms": HealthcareIcon,
  "hospitality-uniforms": HospitalityIcon,
  "industrial-uniforms": IndustrialIcon,
  "custom-branded-apparel": ApparelIcon,
  "business-stationery": StationeryIcon,
};

export function SectorIcon({ slug, ...props }: { slug: string } & P) {
  const Glyph = BY_SLUG[slug];
  return Glyph ? <Glyph {...props} /> : null;
}
