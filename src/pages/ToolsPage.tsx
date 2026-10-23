import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { InteractiveToolsSuite } from '../components/InteractiveToolsSuite';
import { QuickConvertBanner } from '../components/QuickConvertBanner';

export const ToolsPage: React.FC<{ activeToolId?: string; onOpenTrial: () => void }> = ({ activeToolId = 'bill-generator', onOpenTrial }) => {
  return (
    <div>
      <PageHeader
        badge="100% Free Store Utility Suite"
        title="Interactive Laundry Calculators & Growth Tools"
        subtitle="No login required. Generate professional thermal bills, design store rate cards, calculate monthly profit margins, and create WhatsApp promotion posters in seconds."
        currentPage="Free Tools"
        ctaText="Start Free Forever Plan"
        onCtaClick={onOpenTrial}
      />

      {/* 1. All 8 Interactive Free Tools */}
      <InteractiveToolsSuite activeToolId={activeToolId} />

      {/* 2. Quick Convert Banner */}
      <QuickConvertBanner onSuccess={onOpenTrial} />
    </div>
  );
};
