import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Smartphone,
  PhoneCall,
  Clock,
  Zap,
  Check,
  Video
} from 'lucide-react';
import { LaundryTumblerCanvas } from './LaundryTumblerCanvas';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: string;
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenDemo, onOpenTrial }) => {
  const [viewMode, setViewMode] = useState<'pos' | 'machinery' | 'canvas'>('pos');
  const t = translations[currentLang]?.content || translations['en'].content;

  const trustCheckmarks = [
    'No Credit Card Required',
    'Works on Any Phone, Tablet & PC',
    'Works Even Without Internet',
    'Instant WhatsApp Receipts',
    'Zero Lost Clothes with QR Tags',
    'Free Forever Plan Included',
  ];

  const countries = [
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'AE', name: 'UAE', flag: '🇦🇪' },
    { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: 'GB', name: 'UK', flag: '🇬🇧' },
    { code: 'US', name: 'USA', flag: '🇺🇸' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  ];

  return (
    <section style={{
      position: 'relative',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      padding: '56px 0 68px 0',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease, color 0.25s ease'
    }}>
      
      {/* Gentle Ambient Wash Background Glow & Floating Bubbles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '5%',
        width: '540px',
        height: '540px',
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 75%)',
        filter: 'blur(55px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Floating Animated Sparkle Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '8%',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45, 212, 191, 0.25) 0%, transparent 70%)',
        filter: 'blur(20px)',
        animation: 'bubbleFloat 7s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '18%',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, transparent 70%)',
        filter: 'blur(25px)',
        animation: 'bubbleFloat 9s ease-in-out infinite reverse',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '44px',
          alignItems: 'center'
        }}>
          
          {/* Left Hero Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            
            {/* Friendly Top Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(13, 148, 136, 0.12)',
              border: '1px solid rgba(13, 148, 136, 0.3)',
              color: '#0d9488',
              fontSize: '0.82rem',
              fontWeight: 700,
              marginBottom: '18px',
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
              <span>🎉 Complete Laundry Business Platform • Not Just Software</span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(2.3rem, 4.2vw, 3.5rem)',
              lineHeight: 1.18,
              fontWeight: 800,
              letterSpacing: '-0.025em',
              marginBottom: '18px',
              color: 'var(--text-main)'
            }}>
              Run Your <span className="text-gradient">Laundry Business</span> with Complete Ease
            </h1>

            {/* Clear, Warm Subtitle */}
            <p style={{
              fontSize: '1.08rem',
              color: 'var(--text-sub)',
              lineHeight: 1.65,
              marginBottom: '26px',
              maxWidth: '560px'
            }}>
              Everything your laundry store needs to grow: <strong>3-Click Fast Billing (POS)</strong>, <strong>Customer Care CRM</strong> that stops lost garments & damage disputes, <strong>Commercial Washing Machines</strong>, <strong>Wholesale Supplies</strong>, and <strong>Custom Detergents with your shop's name</strong>.
            </p>

            {/* 2-Column Checkmarks Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '10px 14px',
              marginBottom: '32px',
              width: '100%',
              maxWidth: '540px'
            }}>
              {trustCheckmarks.map((text, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-main)', fontWeight: 600 }}>
                  <CheckCircle2 size={17} color="#0d9488" style={{ flexShrink: 0 }} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons with Identical Heights (50px) for Pixel-Perfect Alignment */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '32px' }}>
              <button
                id="hero-btn-start-free"
                onClick={onOpenTrial}
                className="btn-primary"
                style={{
                  height: '50px',
                  padding: '0 28px',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(13, 148, 136, 0.35)',
                }}
              >
                <span>Start Free Forever</span>
                <ArrowRight size={18} />
              </button>

              <a
                id="hero-btn-whatsapp"
                href="https://wa.me/919666211137?text=Hi%20Laundrybatch!%20I%20want%20to%20know%20more%20about%20your%20laundry%20business%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '50px',
                  padding: '0 24px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '2px solid #25D366',
                  color: '#15803d',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 2px 10px rgba(37, 211, 102, 0.15)',
                  transition: 'all 0.2s ease',
                }}
              >
                <MessageCircle size={19} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#crm-tour"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '50px',
                  padding: '0 20px',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  color: 'var(--text-main)',
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Video size={17} color="#0d9488" />
                <span>Watch Demo Video</span>
              </a>
            </div>

            {/* Serving Customers Badges */}
            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '20px', width: '100%' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, marginBottom: '10px' }}>
                Trusted by 4,200+ Laundry Shops & Plants In:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                {countries.map((c) => (
                  <span
                    key={c.code}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-light)',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--text-sub)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Hero Column: Real Storefront & Floating WhatsApp Slip */}
          <div style={{ position: 'relative' }}>
            
            {/* View Switcher Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
              <div style={{
                display: 'inline-flex',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                borderRadius: '999px',
                padding: '4px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <button
                  onClick={() => setViewMode('pos')}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '999px',
                    border: 'none',
                    background: viewMode === 'pos' ? '#0d9488' : 'transparent',
                    color: viewMode === 'pos' ? '#ffffff' : 'var(--text-muted)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  🖥️ Counter POS
                </button>
                <button
                  onClick={() => setViewMode('machinery')}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '999px',
                    border: 'none',
                    background: viewMode === 'machinery' ? '#0d9488' : 'transparent',
                    color: viewMode === 'machinery' ? '#ffffff' : 'var(--text-muted)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  🏭 Plant Machines
                </button>
                <button
                  onClick={() => setViewMode('canvas')}
                  style={{
                    padding: '7px 14px',
                    borderRadius: '999px',
                    border: 'none',
                    background: viewMode === 'canvas' ? '#0d9488' : 'transparent',
                    color: viewMode === 'canvas' ? '#ffffff' : 'var(--text-muted)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  🫧 3D Drum
                </button>
              </div>
            </div>

            {/* Crisp Showcase Box */}
            <div style={{
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: 'var(--bg-surface)',
              border: '2px solid var(--border-light)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              {viewMode === 'pos' ? (
                <div style={{ position: 'relative' }}>
                  <img
                    src="/images/pos_terminal.jpg"
                    alt="High-speed modern laundry counter POS terminal with thermal QR invoice and barcode scanner"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '430px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  {/* Clean, Bright Floating Notification Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'var(--bg-glass)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '16px',
                    padding: '14px 18px',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-md)',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#0d9488', fontWeight: 800, letterSpacing: '0.04em' }}>
                        🖥️ COUNTER POS & QR BILLING
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                        3-Sec Order Checkout • Works 100% Offline
                      </div>
                    </div>
                    <span style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid #10b981',
                      color: '#059669',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '5px 12px',
                      borderRadius: '999px'
                    }}>
                      ✓ Live Sync
                    </span>
                  </div>
                </div>
              ) : viewMode === 'machinery' ? (
                <div style={{ position: 'relative' }}>
                  <img
                    src="/images/machinery_facility.jpg"
                    alt="Industrial commercial laundry factory setup with heavy-duty washer extractors"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '430px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'var(--bg-glass)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '16px',
                    padding: '14px 18px',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: 'var(--shadow-md)',
                  }}>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#0284c7', fontWeight: 800, letterSpacing: '0.04em' }}>
                        🏭 HEAVY-DUTY INDUSTRIAL PLANT
                      </div>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', marginTop: '2px' }}>
                        15kg - 120kg Washer-Extractors • SUS-304
                      </div>
                    </div>
                    <span style={{
                      background: 'rgba(2, 132, 199, 0.15)',
                      border: '1px solid #0284c7',
                      color: '#0284c7',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      padding: '5px 12px',
                      borderRadius: '999px'
                    }}>
                      -42% Energy
                    </span>
                  </div>
                </div>
              ) : (
                <div style={{ padding: '24px', background: 'var(--bg-main)' }}>
                  <div style={{ width: '100%', height: '360px' }}>
                    <LaundryTumblerCanvas />
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
