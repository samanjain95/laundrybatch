import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does Laundrybatch work offline when internet is down?',
      a: 'Yes, 100%! Laundrybatch includes an offline-first IndexedDB local storage engine. You can continue creating orders, assigning garment QR tags, and printing receipts even without an active internet connection. All data automatically synchronizes to the cloud the moment connectivity returns.',
    },
    {
      q: 'What hardware or printers do I need to purchase?',
      a: 'None! Laundrybatch works on any existing device you already own—including budget Android smartphones, iPhones, iPads, Windows laptops, and POS all-in-one terminals. For physical slips, it supports any standard 58mm or 80mm ESC/POS USB or Bluetooth thermal printer.',
    },
    {
      q: 'How does the Garment QR code tag work?',
      a: 'Laundrybatch generates individual QR tags for each garment in an order. You can print them on heat-seal textile patches, pin tags, or sticker rolls. When scanning the QR code with any smartphone camera, the system immediately pulls up the order ID, customer details, and wash/dry clean cycle status.',
    },
    {
      q: 'Can our shop import our existing customer database from Excel?',
      a: 'Yes! We provide free 1-click Excel and CSV data import. If you need assistance, our onboarding team will format and migrate your entire customer history and price list for free within 24 hours.',
    },
    {
      q: 'Are there extra charges for sending WhatsApp receipts to customers?',
      a: 'No! The system connects to the official WhatsApp Business Web or Cloud API. You can send unlimited digital invoices, status alerts, and ready-for-pickup notifications without high per-SMS charges.',
    },
    {
      q: 'Is my business and customer data secure?',
      a: 'Your store records are protected with bank-grade 256-bit TLS encryption, role-based staff access permissions, and automated hourly cloud backups stored exclusively on secure Indian data servers.',
    },
    {
      q: 'What languages are supported?',
      a: 'Laundrybatch currently supports 8 languages: English, Hindi (हिन्दी), Telugu (తెలుగు), Tamil (தமிழ்), Kannada (ಕನ್ನಡ), Marathi (मराठी), Bengali (বাংলা), and Malayalam (മലയാളം). You can toggle between languages anytime.',
    },
    {
      q: 'Can I cancel my subscription anytime?',
      a: 'Yes, absolutely. There are no lock-in contracts. You can cancel at any time directly from your billing settings. You can also export all your orders, customer lists, and financial reports as an Excel file whenever you wish.',
    },
  ];

  return (
    <section id="faq" style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-pill badge-aqua" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} /> Got Questions?
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '14px', color: 'var(--text-main)' }}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Everything you need to know about switching your laundry store to Laundrybatch.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel"
                style={{
                  backgroundColor: 'var(--bg-main)',
                  border: isOpen ? '1px solid #0d9488' : '1px solid var(--border-light)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-main)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    color="#0d9488"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '12px'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 24px',
                    color: 'var(--text-sub)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '14px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(2, 132, 199, 0.1) 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(13, 148, 136, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-main)' }}>
              Have a special custom requirement?
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Talk to our product specialists on WhatsApp or request a custom hardware bundle.
            </div>
          </div>
          <a
            href="https://wa.me/919666211137?text=Hi%20Laundrybatch%20Team!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '0.88rem' }}
          >
            Chat with Us on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
