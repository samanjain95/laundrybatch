import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { InteractivePOSDemo } from '../components/InteractivePOSDemo';
import { EcoEcosystemSection } from '../components/EcoEcosystemSection';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { QuickConvertBanner } from '../components/QuickConvertBanner';

export const POSPage: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  return (
    <div>
      <PageHeader
        badge="Cloud POS Counter"
        title="High-Speed Counter Billing & Thermal Receipt Studio"
        subtitle="Process walk-in customers in under 10 seconds. Generate heat-seal QR tags, print 58mm & 80mm receipts, and replace costly thermal rolls with 100% paperless WhatsApp invoicing."
        currentPage="POS Billing"
        ctaText="Try Free POS Now"
        onCtaClick={onOpenTrial}
      />

      {/* 1. Interactive POS Counter Studio */}
      <InteractivePOSDemo />

      {/* 2. Environmental Paperless Impact */}
      <EcoEcosystemSection />

      {/* 3. Deep-Dive Feature Showcase */}
      <FeatureShowcase />

      {/* 4. Quick Convert Banner */}
      <QuickConvertBanner onSuccess={onOpenTrial} />
    </div>
  );
};
