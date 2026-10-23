import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhiteLabelChemicalsSection } from '../components/WhiteLabelChemicalsSection';
import { RawMaterialsSupplySection } from '../components/RawMaterialsSupplySection';
import { QuickConvertBanner } from '../components/QuickConvertBanner';

export const ChemicalsPage: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  return (
    <div>
      <PageHeader
        badge="Our Own Chemical Manufacturing"
        title="Custom Branded Detergents & Direct Factory Chemicals"
        subtitle="Formulated in our ISO-certified plant. Buy commercial bio-enzyme wash liquids at direct factory rates or launch your own branded chemical line with custom bottle labels and fragrances."
        currentPage="Chemicals & White-Label"
        ctaText="Request Trial Sample Kit"
        onCtaClick={onOpenTrial}
      />

      {/* 1. 3D Bottle Designer & Flagship Formulations */}
      <WhiteLabelChemicalsSection onSampleKitRequest={onOpenTrial} />

      {/* 2. Quick Convert Banner */}
      <QuickConvertBanner onSuccess={onOpenTrial} />
    </div>
  );
};
