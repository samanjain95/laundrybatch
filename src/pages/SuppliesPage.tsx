import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { RawMaterialsSupplySection } from '../components/RawMaterialsSupplySection';
import { WhiteLabelChemicalsSection } from '../components/WhiteLabelChemicalsSection';
import { QuickConvertBanner } from '../components/QuickConvertBanner';

export const SuppliesPage: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  return (
    <div>
      <PageHeader
        badge="B2B Wholesale Supply Chain"
        title="Wholesale Laundry Supplies, QR Tags & Packaging"
        subtitle="Never run out of consumables. Get heat-seal QR tags, direct thermal rolls, poly-tubing shirt rolls, hangers, and professional stain removal kits delivered at wholesale factory pricing."
        currentPage="Supplies & Tags"
        ctaText="Order Wholesale Supplies"
        onCtaClick={onOpenTrial}
      />

      {/* 1. Raw Materials Supply Chain & Calculator */}
      <RawMaterialsSupplySection onOrderSupplies={onOpenTrial} />

      {/* 2. Quick Convert Banner */}
      <QuickConvertBanner onSuccess={onOpenTrial} />
    </div>
  );
};
