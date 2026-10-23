import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickConvertBannerProps {
  onSuccess: (shopName: string, phone: string) => void;
}

export const QuickConvertBanner: React.FC<QuickConvertBannerProps> = ({ onSuccess }) => {
  const [shopName, setShopName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shopName || !phone) return;
    setSubmitted(true);
    onSuccess(shopName, phone);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0d9488', '#0284c7', '#10b981'],
      });
    } catch {}
  };

  return (
    <section style={{ padding: '60px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 100%)',
          color: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          padding: '44px 36px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(45, 212, 191, 0.3)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '999px',
              background: 'rgba(45, 212, 191, 0.2)',
              color: '#2dd4bf',
              fontSize: '0.78rem',
              fontWeight: 700,
              marginBottom: '14px'
            }}>
              <Sparkles size={14} /> Instant 60-Second Setup
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 800, lineHeight: 1.25, marginBottom: '12px' }}>
              Modernize Your Laundry Shop Today for ₹0
            </h2>

            <p style={{ fontSize: '0.96rem', opacity: 0.9, lineHeight: 1.5, marginBottom: '20px', maxWidth: '480px' }}>
              Enter your shop details below to get instant WhatsApp access. Never lose garments, save on paper receipts, and impress every customer.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#2dd4bf" />
                <span>Free Forever Plan</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#2dd4bf" />
                <span>No Credit Card Needed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#2dd4bf" />
                <span>24/7 WhatsApp Support</span>
              </div>
            </div>
          </div>

          {/* Quick Lead Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 'var(--radius-lg)',
            padding: '28px'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'rgba(45, 212, 191, 0.2)',
                  color: '#2dd4bf',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px auto'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '6px' }}>
                  Store Created Successfully!
                </h3>
                <p style={{ fontSize: '0.86rem', opacity: 0.85 }}>
                  We sent your free store login link to WhatsApp number <strong>{phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, opacity: 0.9, display: 'block', marginBottom: '4px' }}>
                    Shop / Store Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Balaji Dry Cleaners"
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(0, 0, 0, 0.25)',
                      color: '#ffffff',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, opacity: 0.9, display: 'block', marginBottom: '4px' }}>
                    WhatsApp Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      background: 'rgba(0, 0, 0, 0.25)',
                      color: '#ffffff',
                      fontSize: '0.92rem'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '14px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)',
                    color: '#042f2e',
                    fontSize: '0.98rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(45, 212, 191, 0.4)',
                    marginTop: '6px'
                  }}
                >
                  <span>Activate Free Account Now</span>
                  <ArrowRight size={17} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
