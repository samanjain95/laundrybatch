import React from 'react';
import { Receipt, Users, Package, FlaskConical, ArrowRight, Settings, Video } from 'lucide-react';

export const EcosystemPillarsNav: React.FC = () => {
  const pillars = [
    {
      id: 'crm-tour',
      step: '01',
      title: 'Our Original CRM',
      subtitle: 'Real Intake Counter, Wash Pipeline, QR Assembly & Rider Tracking',
      href: '#crm-tour',
      icon: Video,
      tag: 'Live Product Tour',
      badgeColor: '#0d9488',
      bgLight: 'rgba(13, 148, 136, 0.12)',
    },
    {
      id: 'pos',
      step: '02',
      title: 'Fast Counter POS',
      subtitle: '3-Click Billing, Heat Tags, Thermal Slips & WhatsApp Invoicing',
      href: '#demo-studio',
      icon: Receipt,
      tag: 'Counter Billing',
      badgeColor: '#0284c7',
      bgLight: 'rgba(2, 132, 199, 0.12)',
    },
    {
      id: 'machinery',
      step: '03',
      title: 'Washers & Boilers',
      subtitle: '15kg to 100kg Heavy Washers, Hydro Extractor & Vacuum Iron Tables',
      href: '#machinery',
      icon: Settings,
      tag: 'Turnkey Plants',
      badgeColor: '#7c3aed',
      bgLight: 'rgba(124, 58, 237, 0.12)',
    },
    {
      id: 'supplies',
      step: '04',
      title: 'Supplies & Chemicals',
      subtitle: 'Factory-Direct Detergents, Hangers, Bags & Custom Branded Cans',
      href: '#raw-materials',
      icon: Package,
      tag: 'Wholesale Hub',
      badgeColor: '#059669',
      bgLight: 'rgba(5, 150, 105, 0.12)',
    },
  ];

  return (
    <section style={{
      backgroundColor: 'var(--bg-main)',
      padding: '48px 0',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease, border-color 0.25s ease'
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            padding: '4px 14px',
            borderRadius: '999px',
            fontSize: '0.76rem',
            color: '#0d9488',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: '8px'
          }}>
            The 4-in-1 Unified Laundry Platform
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0 0 0' }}>
            Everything Your Laundry Store Needs Under One Single Ecosystem
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px'
        }}>
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.id}
                href={p.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '24px 22px',
                  borderRadius: '16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = p.badgeColor;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: p.bgLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: p.badgeColor,
                      border: `1px solid ${p.badgeColor}30`
                    }}>
                      <Icon size={22} />
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: p.badgeColor,
                      background: p.bgLight,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: `1px solid ${p.badgeColor}30`
                    }}>
                      {p.tag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-sub)', lineHeight: 1.5, margin: 0 }}>
                    {p.subtitle}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: p.badgeColor,
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginTop: '18px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-light)'
                }}>
                  <span>Explore Module</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
