import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../data/pricing';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section id="pricing" style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
          <div className="badge-pill badge-aqua" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} /> Transparent Pricing
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '14px', color: 'var(--text-main)' }}>
            Simple, Transparent Plans for <span className="text-gradient">Every Laundry Scale</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '28px' }}>
            Start with our Free Forever plan or unlock unlimited growth with Pro. No credit card required. Cancel anytime with 1 click.
          </p>

          {/* Billing Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-main)',
            padding: '6px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-light)'
          }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: billingCycle === 'monthly' ? 'var(--bg-surface)' : 'transparent',
                color: billingCycle === 'monthly' ? 'var(--text-main)' : 'var(--text-muted)',
                fontWeight: billingCycle === 'monthly' ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: billingCycle === 'monthly' ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: billingCycle === 'yearly' ? 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)' : 'transparent',
                color: billingCycle === 'yearly' ? '#ffffff' : 'var(--text-muted)',
                fontWeight: billingCycle === 'yearly' ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                boxShadow: billingCycle === 'yearly' ? '0 4px 12px rgba(13, 148, 136, 0.35)' : 'none',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Annual Billing</span>
              <span style={{ fontSize: '0.72rem', background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '999px', fontWeight: 800 }}>
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            const isRec = plan.recommended;

            return (
              <div
                key={plan.id}
                className="glass-panel"
                style={{
                  padding: '32px 24px',
                  backgroundColor: 'var(--bg-surface)',
                  border: isRec ? '2px solid #0d9488' : '1px solid var(--border-light)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isRec ? '0 12px 36px rgba(13, 148, 136, 0.18)' : 'var(--shadow-sm)',
                  transform: isRec ? 'scale(1.02)' : 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: isRec ? 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)' : 'var(--bg-surface-elevated)',
                    color: isRec ? 'white' : '#0d9488',
                    border: '1px solid var(--border-light)',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', minHeight: '44px', lineHeight: 1.45, marginBottom: '16px' }}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '-0.03em' }}>
                        ₹{price}
                      </span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        {price === 0 ? '/ forever' : '/ month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && price > 0 && (
                      <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 600 }}>
                        Billed annually (Save ₹{(plan.priceMonthly - plan.priceYearly) * 12}/yr)
                      </div>
                    )}
                    <div style={{ fontSize: '0.76rem', color: '#0d9488', fontWeight: 700, marginTop: '4px' }}>
                      📦 {plan.orderLimit}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '18px', marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '12px', textTransform: 'uppercase' }}>
                      Included Features:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {plan.features.map((feat, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-main)', lineHeight: 1.4 }}>
                          <Check size={15} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Action CTA */}
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={isRec ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Footer */}
        <div style={{ textAlign: 'center', marginTop: '36px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
          🔒 <strong>Zero Risk:</strong> 30-day money-back guarantee • Free migration from Excel or existing POS software • No setup fees
        </div>

      </div>
    </section>
  );
};
