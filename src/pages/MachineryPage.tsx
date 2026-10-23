import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MachineryAndProcessSection } from '../components/MachineryAndProcessSection';
import { MarketStrategyAnalytics } from '../components/MarketStrategyAnalytics';
import { QuickConvertBanner } from '../components/QuickConvertBanner';

export const MachineryPage: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  return (
    <div>
      <PageHeader
        badge="Plant Machinery & Engineering"
        title="Commercial Washing Machines & Complete Plant Setup"
        subtitle="Direct factory supply of heavy-duty washer-extractors (15kg to 100kg), industrial vacuum steam ironing tables, and closed-circuit dry cleaning plants with turnkey installation & AMC support."
        currentPage="Plant Machinery"
        ctaText="Book Machinery Consultation"
        onCtaClick={onOpenTrial}
      />

      {/* 1. Commercial Machinery Catalog & 4-Stage Setup */}
      <MachineryAndProcessSection onConsultation={onOpenTrial} />

      {/* 2. Catchment Feasibility & Investment Analytics */}
      <MarketStrategyAnalytics onConsultStrategy={onOpenTrial} />

      {/* 3. Quick Convert Banner */}
      <QuickConvertBanner onSuccess={onOpenTrial} />
    </div>
  );
};
