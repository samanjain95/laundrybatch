import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'refund' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '720px',
        maxHeight: '85vh',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-xl)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflow: 'hidden'
      }}>
        
        {/* Header */}
        <div style={{
          padding: '20px 28px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {type === 'terms' && <FileText size={22} color="#0d9488" />}
            {type === 'privacy' && <ShieldCheck size={22} color="#059669" />}
            {type === 'refund' && <RefreshCw size={22} color="#0284c7" />}
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', margin: 0 }}>
              {type === 'terms' && 'Terms of Service'}
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'refund' && 'Refund & Cancellation Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '28px', overflowY: 'auto', fontSize: '0.9rem', color: 'var(--text-sub)', lineHeight: 1.6 }}>
          
          {type === 'terms' && (
            <div>
              <p style={{ marginBottom: '16px' }}><strong>Last Updated: October 2026</strong></p>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>1. Agreement to Terms</h4>
              <p style={{ marginBottom: '16px' }}>
                By accessing or using Laundrybatch (“the Platform”, “we”, “our”), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>2. Use of Cloud POS & Garment Tagging Software</h4>
              <p style={{ marginBottom: '16px' }}>
                Laundrybatch grants you a non-exclusive, revocable license to access our cloud-based point-of-sale software, garment QR tagging tools, and customer WhatsApp communication features for your laundry or dry cleaning business.
              </p>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>3. Customer Data & WhatsApp Messaging</h4>
              <p style={{ marginBottom: '16px' }}>
                You agree to obtain explicit consent from your laundry customers before sending electronic receipts and status notifications via WhatsApp. Spamming, bulk unsolicited marketing, or harassment of consumers is strictly prohibited.
              </p>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>4. Uptime & SLA</h4>
              <p style={{ marginBottom: '16px' }}>
                We maintain an uptime target of 99.9% for our cloud services. Local offline caching ensures your store can continue issuing invoices even during temporary ISP or cloud service disruptions.
              </p>
            </div>
          )}

          {type === 'privacy' && (
            <div>
              <p style={{ marginBottom: '16px' }}><strong>Last Updated: October 2026</strong></p>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>1. Information We Collect</h4>
              <p style={{ marginBottom: '16px' }}>
                We collect store profile data (store name, GSTIN, store address, contact number) and transactional customer records (order garments, invoice amounts, pickup dates) necessary to provide billing and tagging services.
              </p>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>2. Data Residency & Sovereignty</h4>
              <p style={{ marginBottom: '16px' }}>
                All store records, tax invoices, and customer databases are stored securely on servers located within the Republic of India with 256-bit encryption in compliance with the Digital Personal Data Protection (DPDP) Act.
              </p>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>3. Zero Third-Party Advertising</h4>
              <p style={{ marginBottom: '16px' }}>
                We do NOT sell, rent, or trade your customer database or order history to third-party ad networks. Your customers belong exclusively to your store.
              </p>
            </div>
          )}

          {type === 'refund' && (
            <div>
              <p style={{ marginBottom: '16px' }}><strong>Last Updated: October 2026</strong></p>
              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>1. 30-Day Money-Back Guarantee</h4>
              <p style={{ marginBottom: '16px' }}>
                All new Pro and Pro Plus subscription plans are backed by our 100% satisfaction guarantee. If Laundrybatch does not streamline your operations within your first 30 days, contact us for an unconditional full refund.
              </p>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>2. Cancellation Anytime</h4>
              <p style={{ marginBottom: '16px' }}>
                Subscriptions can be cancelled at any time through your account dashboard. You will continue to have full access until the end of your billing cycle.
              </p>

              <h4 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>3. Hardware & Thermal Roll Purchases</h4>
              <p style={{ marginBottom: '16px' }}>
                Physical hardware items (e.g. thermal printers, QR heat-seal printers) purchased through certified partners are covered under 1-year replacement warranty against manufacturing defects.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 28px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: 'var(--bg-main)'
        }}>
          <button onClick={onClose} className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.88rem' }}>
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
