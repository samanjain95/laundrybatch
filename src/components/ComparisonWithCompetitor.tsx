import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Sparkles, 
  Zap, 
  Shield, 
  HeartHandshake, 
  Layers, 
  FlaskConical, 
  Settings, 
  Package, 
  Smartphone, 
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';

export const ComparisonWithCompetitor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'ecosystem' | 'crm' | 'billing'>('all');

  const comparisonCategories = [
    { id: 'all', label: 'All 10x Advantages' },
    { id: 'ecosystem', label: 'Complete Ecosystem' },
    { id: 'crm', label: 'Dispute-Free CRM' },
    { id: 'billing', label: 'POS & WhatsApp' },
  ];

  const comparisons = [
    {
      category: 'ecosystem',
      feature: 'Complete 4-Pillar Business Model',
      laundrybatch: 'Full Ecosystem: Cloud POS + Dispute CRM + Turnkey Washers & Plants + Wholesale Chemicals & Tags',
      competitor: 'Only a basic billing software app. You must find separate machine vendors & chemical suppliers.',
      winner: 'laundrybatch',
      tag: 'Complete Solution',
    },
    {
      category: 'crm',
      feature: 'Pre-Wash Defect Camera (Dispute Shield)',
      laundrybatch: 'Snap 2-sec photos of existing torn seams or stains at intake. Attached to customer WhatsApp bill.',
      competitor: 'No camera proof. Customers blame your store for pre-existing fabric tears and demand cash compensation.',
      winner: 'laundrybatch',
      tag: 'Zero Claims',
    },
    {
      category: 'ecosystem',
      feature: 'Sell Detergents Under YOUR OWN Brand',
      laundrybatch: 'Factory white-labeling: Put your store logo on 5L & 20L bio-enzyme detergent cans at direct factory rates.',
      competitor: 'Not available. Competitors do not manufacture chemicals or offer white-labeling.',
      winner: 'laundrybatch',
      tag: 'New Revenue',
    },
    {
      category: 'billing',
      feature: 'Live WhatsApp Interactive Status Link',
      laundrybatch: 'Customer clicks WhatsApp link to see real-time order stages: Received → Washed → Ironed → Ready for Pickup.',
      competitor: 'Plain text SMS or static PDF with no live order stage tracking.',
      winner: 'laundrybatch',
      tag: '98% Open Rate',
    },
    {
      category: 'ecosystem',
      feature: 'Commercial Machinery Procurement & AMC',
      laundrybatch: 'Direct factory supply of 15kg-100kg washer-extractors, vacuum steam iron tables, and turnkey factory setup.',
      competitor: 'Software-only company with zero machinery engineering or maintenance support.',
      winner: 'laundrybatch',
      tag: 'Turnkey Plant',
    },
    {
      category: 'crm',
      feature: 'Heat-Seal Textile QR Tags (200°C Steam Proof)',
      laundrybatch: 'Poly-cotton tags stick permanently through hot steam wash & harsh solvents. Scan to light up exact rack bin.',
      competitor: 'Paper tags that get torn or soggy in wash water, causing lost garment mix-ups.',
      winner: 'laundrybatch',
      tag: '0% Lost Clothes',
    },
    {
      category: 'billing',
      feature: '8 Built-in Free Store Growth Tools',
      laundrybatch: 'Live Thermal Bill Maker, Rate Card Designer, ROI Calculator, Care Decoder, Stain AI, WhatsApp Posters, Staff Pay.',
      competitor: 'Basic web calculators with limited customization and static downloads.',
      winner: 'laundrybatch',
      tag: '100% Free Suite',
    },
    {
      category: 'billing',
      feature: 'Offline-First Billing (Zero Internet Downtime)',
      laundrybatch: 'Keep generating bills and QR tags even during internet cuts or power glitches. Syncs automatically when online.',
      competitor: 'Cloud-dependent app that gets stuck or times out when local 4G network drops.',
      winner: 'laundrybatch',
      tag: '100% Uptime',
    },
  ];

  const filtered = activeTab === 'all' 
    ? comparisons 
    : comparisons.filter((c) => c.category === activeTab);

  return (
    <section id="comparison" style={{
      padding: '76px 0',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease, color 0.25s ease'
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 16px',
            borderRadius: '999px',
            background: 'rgba(13, 148, 136, 0.12)',
            border: '1px solid rgba(13, 148, 136, 0.3)',
            color: '#0d9488',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '14px'
          }}>
            <Zap size={14} /> Head-to-Head Innovation Arena
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, lineHeight: 1.22, marginBottom: '14px', color: 'var(--text-main)' }}>
            Why Laundrybatch is <span className="text-gradient">10x Ahead of Legacy Software</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Legacy software companies give you just an ordinary billing screen. Laundrybatch equips you with an entire end-to-end industrial ecosystem that guarantees higher margins and zero customer disputes.
          </p>
        </div>

        {/* Creative Scorecard Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '36px'
        }}>
          {/* Laundrybatch Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.12) 0%, rgba(2, 132, 199, 0.08) 100%)',
            border: '2px solid #0d9488',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                THE COMPLETE ECOSYSTEM
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', margin: '4px 0 2px 0' }}>
                Laundrybatch
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-sub)', margin: 0 }}>
                POS + Dispute CRM + Machines + Chemicals + Supplies
              </p>
            </div>
            <div style={{
              background: '#0d9488',
              color: '#ffffff',
              padding: '10px 16px',
              borderRadius: '14px',
              textAlign: 'center',
              fontWeight: 900,
              boxShadow: '0 4px 12px rgba(13, 148, 136, 0.35)'
            }}>
              <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>10/10</div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>Full Suite</div>
            </div>
          </div>

          {/* Legacy Apps Card */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-sm)',
            opacity: 0.85
          }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                STANDALONE BILLING APPS
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-muted)', margin: '4px 0 2px 0' }}>
                Legacy Software (e.g. LaundryBill)
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                Basic counter billing only. No hardware or supply chain.
              </p>
            </div>
            <div style={{
              background: 'var(--bg-main)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-light)',
              padding: '10px 16px',
              borderRadius: '14px',
              textAlign: 'center',
              fontWeight: 800
            }}>
              <div style={{ fontSize: '1.5rem', lineHeight: 1 }}>3/10</div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>Basic App</div>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {comparisonCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              style={{
                padding: '8px 18px',
                borderRadius: '999px',
                border: activeTab === cat.id ? '2px solid #0d9488' : '1px solid var(--border-light)',
                background: activeTab === cat.id ? '#0d9488' : 'var(--bg-surface)',
                color: activeTab === cat.id ? '#ffffff' : 'var(--text-sub)',
                fontWeight: activeTab === cat.id ? 800 : 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Comparison Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '18px'
        }}>
          {filtered.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: '18px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = '#0d9488';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                    {item.feature}
                  </h4>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#0d9488',
                    background: 'rgba(13, 148, 136, 0.1)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    border: '1px solid rgba(13, 148, 136, 0.25)',
                    flexShrink: 0
                  }}>
                    ✓ {item.tag}
                  </span>
                </div>

                {/* Laundrybatch Winner Box */}
                <div style={{
                  background: 'rgba(13, 148, 136, 0.08)',
                  border: '1px solid rgba(13, 148, 136, 0.25)',
                  borderRadius: '12px',
                  padding: '14px',
                  marginBottom: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0d9488', fontWeight: 800, fontSize: '0.78rem', marginBottom: '4px' }}>
                    <Sparkles size={14} />
                    <span>Laundrybatch Solution:</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--text-main)', lineHeight: 1.5, fontWeight: 600 }}>
                    {item.laundrybatch}
                  </p>
                </div>

                {/* Competitor Box */}
                <div style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '12px',
                  opacity: 0.8
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ef4444', fontWeight: 700, fontSize: '0.74rem', marginBottom: '3px' }}>
                    <X size={14} />
                    <span>Legacy Software:</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    {item.competitor}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
