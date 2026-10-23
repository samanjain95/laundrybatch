import React from 'react';
import { Hero } from '../components/Hero';
import { OriginalCRMTourSection } from '../components/OriginalCRMTourSection';
import { RealWorldCRMScenarios } from '../components/RealWorldCRMScenarios';
import { EcosystemPillarsNav } from '../components/EcosystemPillarsNav';
import { InteractiveProcessInfographic } from '../components/InteractiveProcessInfographic';
import { InteractivePOSDemo } from '../components/InteractivePOSDemo';
import { InteractiveToolsSuite } from '../components/InteractiveToolsSuite';
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
      {/* 1. Hero Section with 5-Pillar Interactive Discovery */}
      <Hero
        currentLang={currentLang}
        onOpenDemo={onOpenDemo}
        onOpenTrial={onOpenTrial}
      />

      {/* 2. CRM Presentability at TOP of Website (Intake Defect Cam & Operational Tour) */}
      <OriginalCRMTourSection onConnectCRM={onOpenTrial} />

      {/* 3. Real-World Ground Scenarios: Zero Lost Garments & Stop Customer Arguments */}
      <RealWorldCRMScenarios />

      {/* 4. 4 Pillars Unified Platform Navigator */}
      <EcosystemPillarsNav />

      {/* 5. 360° Plant & Retail Process 6-Stage Flowchart (Mobile-First Responsive) */}
      <InteractiveProcessInfographic />

      {/* 6. High-Speed POS Counter Billing Studio */}
      <InteractivePOSDemo />

      {/* 7. Ad-Free Interactive Store Growth Tools (Bill Generator, Profit Calc, QR) */}
      <InteractiveToolsSuite />

      {/* 8. Turnkey Plant Machinery & Industrial Setup */}
      <MachineryAndProcessSection onConsultation={onOpenTrial} />

      {/* 9. Wholesale Raw Materials & Consumables Supply Chain */}
      <RawMaterialsSupplySection onOrderSupplies={onOpenTrial} />

      {/* 10. Our Own Manufacturing & White-Label Chemical Solutions */}
      <WhiteLabelChemicalsSection onSampleKitRequest={onOpenTrial} />

      {/* 11. 10x Innovation Head-to-Head Comparison */}
      <ComparisonWithCompetitor />

      {/* 12. Mid-Page High-Converting Register Banner */}
      <QuickConvertBanner
        onSuccess={(shop, phone) => {
          onOpenTrial();
        }}
      />

      {/* 13. Customer Case Studies & Reviews */}
      <Testimonials />

      {/* 14. FAQ Section */}
      <FAQSection />
    </div>
  );
};
