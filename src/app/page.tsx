import Header from "../components/Header";
import Hero from "../components/Hero";
import CasinoCardsSection from "../components/CasinoCardsSection";
import EvaluationMethodology from "../components/EvaluationMethodology";
import DetailedCasinoAnalysis from "../components/DetailedCasinoAnalysis";
import CasinoSpecialties from "../components/CasinoSpecialties";
import ComparisonTable from "../components/ComparisonTable";
import Footer from "../components/Footer";
import AgeVerificationModal from "../components/AgeVerificationModal";
import { Metadata } from "next";

// Page-specific metadata
export const metadata: Metadata = {
  title: 'Topplista 2025: Bästa Casino Utan Svensk Licens',
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
        <AgeVerificationModal />
        <Header />
        <Hero />
        <CasinoCardsSection />
        <ComparisonTable />
        <EvaluationMethodology />
        <DetailedCasinoAnalysis />
        <CasinoSpecialties />
        <Footer />
      </div>
    </>
  );
};