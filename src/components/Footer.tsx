import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Heart, Leaf, ShieldCheck, QrCode } from 'lucide-react';

interface FooterProps {
  onOpenTool: (toolId: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'refund') => void;
  onOpenDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTool, onOpenLegal, onOpenDemo }) => {
  const tools = [
    { id: 'bill-generator', label: 'Bill Generator' },
    { id: 'rate-card', label: 'Rate Card Designer' },
    { id: 'profit-calculator', label: 'Profit Calculator' },
    { id: 'whatsapp-posters', label: 'WhatsApp Posters' },
    { id: 'care-decoder', label: 'Care Label Decoder' },
    { id: 'stain-guide', label: 'Stain Removal Guide' },
    { id: 'qr-generator', label: 'QR Code Generator' },
    { id: 'salary-calculator', label: 'Staff Salary Calculator' },
  ];

  const languages = ['Hindi', 'Telugu', 'Tamil', 'Kannada', 'Malayalam', 'Bengali', 'Marathi', 'English'];

  return (
    <footer style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-light)',
      padding: '70px 0 30px 0',
      color: 'var(--text-sub)',
      transition: 'background-color 0.25s ease, border-color 0.25s ease'
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          
          {/* Brand Info */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', textDecoration: 'none' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <Sparkles size={20} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                Laundry<span style={{ color: '#0d9488' }}>verse</span>
              </span>
            </Link>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '20px' }}>
              Next-generation unified platform powering modern laundry, dry cleaning, and fabric care businesses with intelligent POS, garment QR tags, turnkey plant setup, and 100% paperless WhatsApp invoicing.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>
              <Leaf size={15} />
              <span>Certified Green & Zero BPA Thermal Tech</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
              Pages & Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              <li>
                <Link to="/crm" style={{ color: '#0d9488', textDecoration: 'none', fontWeight: 600 }}>
                  Interactive Laundry CRM
                </Link>
              </li>
              <li>
                <Link to="/pos" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Cloud POS Counter Billing
                </Link>
              </li>
              <li>
                <Link to="/machinery" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Commercial Machinery & Setup
                </Link>
              </li>
              <li>
                <Link to="/chemicals" style={{ color: 'inherit', textDecoration: 'none' }}>
                  White-Label Detergent Chemicals
                </Link>
              </li>
              <li>
                <Link to="/supplies" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Raw Materials & QR Tags
                </Link>
              </li>
              <li>
                <Link to="/tools" style={{ color: 'inherit', textDecoration: 'none' }}>
                  8 Free Interactive Tools
                </Link>
              </li>
              <li>
                <Link to="/pricing" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Transparent Pricing Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Growth Tools */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
              Free Growth Tools
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem' }}>
              {tools.map((t) => (
                <li key={t.id}>
                  <Link
                    to="/tools"
                    onClick={() => onOpenTool(t.id)}
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      fontSize: 'inherit',
                      fontFamily: 'inherit'
                    }}
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
              Contact & Support
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Phone size={16} color="#0d9488" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>
                  <a href="tel:+917389327066" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 700 }}>+91 73893 27066</a>{' '}
                  (<a href="https://wa.me/917389327066" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 700 }}>WhatsApp</a>)
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Mail size={16} color="#0d9488" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>hello@laundrybatch.com</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="#0d9488" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Headquarters: Level 5, Statesman House, Barakhamba Road, Connaught Place, New Delhi - 110001, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Vernacular Language Pills Bar */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '24px',
          marginBottom: '24px'
        }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '10px' }}>
            Available in 8 Indian Regional Languages:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {languages.map((lang, idx) => (
              <span
                key={idx}
                style={{
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-light)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  color: 'var(--text-sub)'
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 Laundrybatch Technologies Inc. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <button
              onClick={() => onOpenLegal('terms')}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit' }}
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit' }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('refund')}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit' }}
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
