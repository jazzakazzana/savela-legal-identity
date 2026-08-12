import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/home/Hero";
import { ExpertiseStrip } from "@/components/home/ExpertiseStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { EditorialQuote } from "@/components/home/EditorialQuote";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { JuryFeature } from "@/components/home/JuryFeature";
import { OralArgumentFeature } from "@/components/home/OralArgumentFeature";
import { Principles } from "@/components/home/Principles";
import { CriminalDefenseInfo } from "@/components/home/CriminalDefenseInfo";
import { LocationSection } from "@/components/site/LocationSection";
import { ContactCTA } from "@/components/site/ContactCTA";
import { seoMeta, personSchema, legalServiceSchema, ldScript } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const seo = seoMeta({
      title: "Advogada Criminal em São Leopoldo | Dra. Patrícia Savela — OAB/RS 119.240",
      description:
        "Advocacia criminal, Tribunal do Júri e sustentação oral em Tribunais. Atuação técnica de Patrícia Savela, OAB/RS 119.240, com base em São Leopoldo — RS.",
      path: "/",
    });
    return {
      ...seo,
      scripts: [ldScript(personSchema), ldScript(legalServiceSchema)],
    };
  },
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <ExpertiseStrip />
      <AboutPreview />
      <EditorialQuote />
      <PracticeAreas />
      <JuryFeature />
      <OralArgumentFeature />
      <Principles />
      <CriminalDefenseInfo />
      <LocationSection />
      <ContactCTA />
    </SiteLayout>
  );
}
