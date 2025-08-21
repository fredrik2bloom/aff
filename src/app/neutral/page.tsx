import Header from "../../components/Header";
import NeutralHero from "../../components/NeutralHero";
import NeutralCasinoCardsSection from "@/components/NeutralCasinoCardsSection";
import EvaluationMethodology from "../../components/EvaluationMethodology";
import NeutralDetailedCasinoAnalysis from "@/components/NeutralDetailedCasinoAnalysis";
import NeutralCasinoSpecialties from "../../components/NeutralCasinoSpecialties";
import NeutralComparisonTable from "@/components/NeutralComparisonTable";
import Footer from "../../components/Footer";
import { Metadata } from "next";

// Page-specific metadata
export const metadata: Metadata = {
  title: 'Bästa Casino Utan Svensk Licens',
  description: 'Hitta och jämför de bästa casinon utan svensk licens. Vi rankar sidor baserat på bonusar, spelutbud, säkerhet och snabba uttag.',
  alternates: {
    canonical: '/',
  }
};

// WebSite JSON-LD Schema for the homepage
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.casinoutansvensklicens.eu/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.casinoutansvensklicens.eu/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function HomePage() {
  return (
    <>
      {/* Add page-specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <NeutralHero />
        <NeutralCasinoCardsSection/>
        <NeutralComparisonTable />
        <EvaluationMethodology />
        <NeutralDetailedCasinoAnalysis />
        <NeutralCasinoSpecialties />
        <Footer />
      </div>
    </>
  );
};