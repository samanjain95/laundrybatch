import React from 'react';
import { Smartphone, Phone, ArrowRight, MessageCircle } from 'lucide-react';

interface ConversionBarProps {
  onOpenTrial: () => void;
}

export const ConversionBar: React.FC<ConversionBarProps> = ({ onOpenTrial }) => {
  const whatsappUrl = 'https://wa.me/919666211137?text=Hi%20Laundrybatch!%20I%20want%20to%20start%20my%20free%20laundry%20store%20trial.';

  return (
    <>
      {/* 1. Mobile-Only Sticky Bottom Conversion Bar */}
      <aside 
        aria-label="Quick Actions"
        style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--bg-surface)',
        borderTop: '2px solid #0d9488',
        boxShadow: '0 -8px 24px rgba(0, 0, 0, 0.15)',
        zIndex: 999,
        padding: '10px 16px',
        display: 'none'
      }} className="mobile-sticky-bar">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '10px', alignItems: 'center' }}>
          <button
            onClick={onOpenTrial}
            className="btn-primary"
            style={{
              padding: '12px 14px',
              fontSize: '0.88rem',
              fontWeight: 700,
              borderRadius: '10px',
              width: '100%'
            }}
          >
            <span>Start Free</span>
            <ArrowRight size={15} />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '12px 14px',
              borderRadius: '10px',
              backgroundColor: '#25D366',
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.85rem',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)'
            }}
          >
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </a>
        </div>
      </aside>

      {/* 2. Floating Circular WhatsApp Widget for Desktop & Tablet */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="desktop-floating-whatsapp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9998,
          backgroundColor: '#25D366',
          color: '#ffffff',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
          textDecoration: 'none',
          transition: 'transform 0.25s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
      >
        <MessageCircle size={30} />
      </a>

      {/* Responsive Inline CSS for Mobile Sticking */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: block !important;
            padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px)) !important;
          }
          .desktop-floating-whatsapp {
            display: none !important;
          }
          body {
            padding-bottom: calc(75px + env(safe-area-inset-bottom, 0px)) !important;
          }
        }
      `}</style>
    </>
  );
};
