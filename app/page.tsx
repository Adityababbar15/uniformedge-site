import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content/company";
import { Hero } from "@/components/sections/Hero";
import { ClientProof } from "@/components/sections/ClientProof";
import { SectorsBand } from "@/components/sections/SectorsBand";
import { OrderPath } from "@/components/sections/OrderPath";
import { ConstructionBand } from "@/components/sections/ConstructionBand";
import { BurdenRemoval } from "@/components/sections/BurdenRemoval";
import { ValueProps } from "@/components/sections/ValueProps";
import { FounderStory } from "@/components/sections/FounderStory";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  alternates: { canonical: `${SITE_URL}/` },
};

// Pattern: marketing landing — hero, proof, sector discovery, process,
// construction, school operations, manufacturing, story, enquire.
export default function Home() {
  return (
    <>
      <Hero />
      <ClientProof />
      <SectorsBand />
      <OrderPath />
      <ConstructionBand />
      <ValueProps />
      <BurdenRemoval />
      <FounderStory />
      <CTABand />
    </>
  );
}
