import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { PricingSection } from '../components/PricingSection';
import { ComparisonWithCompetitor } from '../components/ComparisonWithCompetitor';
import { FAQSection } from '../components/FAQSection';
import { QuickConvertBanner } from '../components/QuickConvertBanner';

export const PricingPage: React.FC<{ onSelectPlan: (plan: string) => void }> = ({ onSelectPlan }) => {
  return (
    <div>
      <PageHeader
        badge="Simple, Transparent Pricing"
        title="Predictable Plans Built for Every Stage of Laundry Growth"
        subtitle="Start with our Free Forever tier. Upgrade when your volume grows. Every plan includes GST-ready invoicing, free WhatsApp receipts, and zero hidden transaction fees."
        currentPage="Pricing"
        ctaText="Start Free Forever"
        onCtaClick={() => onSelectPlan('Free Forever Plan')}
      />

      {/* 1. Transparent Pricing Grid */}
      <PricingSection onSelectPlan={onSelectPlan} />

      {/* 2. 10x Advantage Head-to-Head Comparison */}
      <ComparisonWithCompetitor />

      {/* 3. Frequently Asked Questions */}
      <FAQSection />

      {/* 4. Quick Convert Banner */}
      <QuickConvertBanner
        onSuccess={(shop, phone) => {
          onSelectPlan(`${shop} (${phone})`);
        }}
      />
    </div>
  );
};
