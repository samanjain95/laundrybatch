import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Phone, Mail, Building, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialPlan }) => {
  const [storeName, setStoreName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0d9488', '#0284c7', '#10b981'],
      });
    } catch {
      // ignore
    }
  };

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
        maxWidth: '520px',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-xl)',
        padding: '32px',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)'
      }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '8px' }}>
              Welcome to Laundrybatch!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '24px' }}>
              Your account details and login PIN have been dispatched via WhatsApp to <strong>{phone}</strong>. Our local implementation specialist will contact you to assist with setup.
            </p>

            <button
              onClick={onClose}
              className="btn-primary"
              style={{ padding: '10px 24px', fontSize: '0.9rem' }}
            >
              Open Store Dashboard
            </button>
          </div>
        ) : (
          <div>
            <div className="badge-pill badge-aqua" style={{ marginBottom: '12px' }}>
              <Sparkles size={14} /> Instant Access • Zero Setup Fee
            </div>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '6px' }}>
              Start Your Laundrybatch Experience
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '20px' }}>
              {initialPlan ? `Plan selected: ${initialPlan}` : 'Create your digital store in under 60 seconds.'}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Laundry / Dry Clean Store Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Royal Laundry Mart"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Owner / Manager Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Reddy"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.9rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    WhatsApp Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.9rem' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    City / Town *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hyderabad"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '12px', fontSize: '0.95rem', marginTop: '10px' }}
              >
                <span>Launch My Free Store</span>
                <Send size={16} />
              </button>
            </form>

            <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '0.82rem', color: 'var(--text-sub)' }}>
              Prefer instant chat?{' '}
              <a
                href="https://wa.me/917389327066?text=Hi%20Laundrybatch!%20I%20want%20to%20set%20up%20my%20store."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#15803d', fontWeight: 700, textDecoration: 'none' }}
              >
                WhatsApp +91 73893 27066
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              🔒 Bank-grade security • Zero spam • Data stays 100% in India
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
