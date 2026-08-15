import { Hero } from "@/components/sections/Hero";
import { ClientProof } from "@/components/sections/ClientProof";
import { SectorsBand } from "@/components/sections/SectorsBand";
import { ValueProps } from "@/components/sections/ValueProps";
import { FounderStory } from "@/components/sections/FounderStory";
import { CTABand } from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientProof />
      <SectorsBand />
      <ValueProps />
      <FounderStory />
      <CTABand />
    </>
  );
}
