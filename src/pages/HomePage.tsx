import React from 'react';
import { Hero } from '../components/Hero';
import { EcosystemPillarsNav } from '../components/EcosystemPillarsNav';
import { InteractiveProcessInfographic } from '../components/InteractiveProcessInfographic';
import { OriginalCRMTourSection } from '../components/OriginalCRMTourSection';
import { InteractivePOSDemo } from '../components/InteractivePOSDemo';
import { RealWorldCRMScenarios } from '../components/RealWorldCRMScenarios';
import { MachineryAndProcessSection } from '../components/MachineryAndProcessSection';
import { RawMaterialsSupplySection } from '../components/RawMaterialsSupplySection';
import { WhiteLabelChemicalsSection } from '../components/WhiteLabelChemicalsSection';
import { ComparisonWithCompetitor } from '../components/ComparisonWithCompetitor';
import { QuickConvertBanner } from '../components/QuickConvertBanner';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';

interface HomePageProps {
  currentLang: string;
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentLang,
  onOpenDemo,
  onOpenTrial,
}) => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        currentLang={currentLang}
        onOpenDemo={onOpenDemo}
        onOpenTrial={onOpenTrial}
      />

      {/* 2. 4 Pillars Unified Platform Navigator */}
      <EcosystemPillarsNav />

      {/* 3. 360° Plant & Retail Process Infographic & Products Spotlight */}
      <InteractiveProcessInfographic />

      {/* 4. Original CRM Operational Tour & Video Walkthrough */}
      <OriginalCRMTourSection onConnectCRM={onOpenTrial} />

      {/* 4. High-Speed POS Counter Billing Studio */}
      <InteractivePOSDemo />

      {/* 5. Real-World Ground Scenario Dispute Solver */}
      <RealWorldCRMScenarios />

      {/* 6. Turnkey Plant Machinery & Industrial Setup */}
      <MachineryAndProcessSection onConsultation={onOpenTrial} />

      {/* 7. Wholesale Raw Materials & Consumables Supply Chain */}
      <RawMaterialsSupplySection onOrderSupplies={onOpenTrial} />

      {/* 8. Our Own Manufacturing & White-Label Chemical Solutions */}
      <WhiteLabelChemicalsSection onSampleKitRequest={onOpenTrial} />

      {/* 9. 10x Innovation Head-to-Head Comparison */}
      <ComparisonWithCompetitor />

      {/* 10. Mid-Page High-Converting Register Banner */}
      <QuickConvertBanner
        onSuccess={(shop, phone) => {
          onOpenTrial();
        }}
      />

      {/* 11. Customer Case Studies & Reviews */}
      <Testimonials />

      {/* 12. FAQ Section */}
      <FAQSection />
    </div>
  );
};
