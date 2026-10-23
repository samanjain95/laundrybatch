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
  Video,
  Camera,
  Factory,
  Beaker,
  QrCode,
  Tag,
  Store,
  Layers,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { LaundryTumblerCanvas } from './LaundryTumblerCanvas';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: string;
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onOpenDemo, onOpenTrial }) => {
  const [activePillar, setActivePillar] = useState<'pos' | 'camera' | 'machinery' | 'chemicals' | 'tags'>('pos');
  const [customBrandName, setCustomBrandName] = useState('Prakash Dry Cleaners');
  const [machineCapacity, setMachineCapacity] = useState<'15kg' | '30kg' | '60kg' | '120kg'>('30kg');
  const [billSentState, setBillSentState] = useState(false);
  const [defectCaptured, setDefectCaptured] = useState(false);
  const [businessProfile, setBusinessProfile] = useState<'retail' | 'luxury' | 'plant' | 'startup'>('retail');

  const t = translations[currentLang]?.content || translations['en'].content;

  const handleSimulateBill = () => {
    setBillSentState(true);
    setTimeout(() => setBillSentState(false), 3500);
  };

  const handleSimulateDefect = () => {
    setDefectCaptured(true);
    setTimeout(() => setDefectCaptured(false), 3500);
  };

  const pillars = [
    {
      id: 'pos' as const,
      icon: Smartphone,
      emoji: '📱',
      title: 'Counter POS',
      sub: '10s WhatsApp Bill',
      badgeColor: '#0d9488',
      headline: 'Lightning-Fast Counter POS & WhatsApp Invoices',
      photo: '/images/pos_terminal.jpg',
      points: [
        'WhatsApp bill with 1-click UPI QR code',
        'Works 100% offline during power cuts',
        'Thermal printer & barcode gun ready'
      ],
      tagline: 'Staff learns in 2 minutes. No training required.'
    },
    {
      id: 'camera' as const,
      icon: Camera,
      emoji: '📸',
      title: 'Defect CRM',
      sub: 'Zero Disputes',
      badgeColor: '#0284c7',
      headline: 'Pre-Wash Intake Camera: Stop Damage Disputes',
      photo: '/images/hero_laundry.jpg',
      points: [
        'Snap 2s photo of tears, stains, missing buttons',
        'Photo auto-watermarked & sent to customer WhatsApp',
        'Customers can never blame your staff for old damage'
      ],
      tagline: 'Saved our cleaners over ₹85,000 in false damage claims.'
    },
    {
      id: 'machinery' as const,
      icon: Factory,
      emoji: '🏭',
      title: 'Machines',
      sub: '15kg - 120kg',
      badgeColor: '#10b981',
      headline: 'Heavy-Duty Commercial Washers & Iron Tables',
      photo: '/images/machinery_facility.jpg',
      points: [
        'Surgical SUS-304 stainless steel drum & body',
        'Cuts power & water consumption by 42%',
        'Shipped direct from Connaught Place Central Depot'
      ],
      tagline: '3-Year On-Site Warranty + Same-Day Engineer Support.'
    },
    {
      id: 'chemicals' as const,
      icon: Beaker,
      emoji: '🧴',
      title: 'Own Detergent',
      sub: 'Your Shop Name',
      badgeColor: '#f59e0b',
      headline: 'Factory Bio-Enzymes with YOUR Store Logo',
      photo: '/images/chemicals_bottles.jpg',
      points: [
        'Concentrated German bio-enzyme stain lifters',
        'Printed with your laundry logo, phone & address',
        'Earn 45%+ profit selling bottles to your customers'
      ],
      tagline: 'Turn chemical costs into a profitable retail business.'
    },
    {
      id: 'tags' as const,
      icon: Tag,
      emoji: '🏷️',
      title: '200°C Tags',
      sub: 'Depot Supplies',
      badgeColor: '#8b5cf6',
      headline: 'Indestructible 200°C Heat-Seal QR Garment Tags',
      photo: '/images/process_infographic.jpg',
      points: [
        'Survives 200°C hot wash, dry cleaning solvents & tumble',
        'Never washes off, never bleeds color into clothes',
        'Scan with any smartphone camera in 0.2 seconds'
      ],
      tagline: 'Zero lost clothes across 12,000,000+ customer garments.'
    }
  ];

  const currentPillarData = pillars.find(p => p.id === activePillar) || pillars[0];

  const businessProfiles = [
    {
      id: 'retail' as const,
      title: '👕 Laundromat / Wash & Fold',
      recommendation: 'POS Counter + WhatsApp UPI + 200°C QR Rolls'
    },
    {
      id: 'luxury' as const,
      title: '🧥 Premium Dry Cleaner',
      recommendation: 'Defect Intake Camera + White-Label Detergents + Steam Table'
    },
    {
      id: 'plant' as const,
      title: '🏥 Commercial Plant / Hotel',
      recommendation: '60kg-120kg SUS-304 Extractors + 200L Chemical Drums'
    },
    {
      id: 'startup' as const,
      title: '🚀 New Store Launch',
      recommendation: 'Complete Turnkey Bundle: Machine + POS + Starter Detergents'
    }
  ];

  return (
    <section style={{
      position: 'relative',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      padding: '44px 0 60px 0',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease, color 0.25s ease'
    }}>
      
      {/* Ambient Wash Glows */}
      <div style={{
        position: 'absolute',
        top: '-5%',
        right: '5%',
        width: '420px',
        height: '420px',
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.14) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 75%)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        width: '320px',
        height: '320px',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 16px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* =========================================================
            TOP CREATIVE HERO BANNER (MOBILE FIRST - 3 SECONDS CLARITY)
            ========================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 28px auto' }}>
          
          {/* Mobile-Friendly Eyebrow Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '999px',
            background: 'rgba(13, 148, 136, 0.12)',
            border: '1px solid rgba(13, 148, 136, 0.35)',
            color: '#0d9488',
            fontSize: '0.82rem',
            fontWeight: 800,
            marginBottom: '14px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', animation: 'pulseRing 2s infinite' }} />
            <span>✨ India's #1 Complete Laundry Business Ecosystem</span>
          </div>

          {/* Punchy, Catchy Main Headline */}
          <h1 style={{
            fontSize: 'clamp(2.1rem, 5.5vw, 3.4rem)',
            lineHeight: 1.15,
            fontWeight: 850,
            letterSpacing: '-0.03em',
            marginBottom: '14px',
            color: 'var(--text-main)'
          }}>
            Run Your Entire Laundry Business <br className="hidden-mobile" />
            <span style={{
              background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 60%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Right From Your Mobile Phone.
            </span>
          </h1>

          {/* Zero Wall of Text Subtitle: Crystal Clear What We Do */}
          <p style={{
            fontSize: 'clamp(0.98rem, 2.5vw, 1.12rem)',
            color: 'var(--text-sub)',
            lineHeight: 1.55,
            marginBottom: '20px',
            fontWeight: 500,
            maxWidth: '680px',
            margin: '0 auto 20px auto'
          }}>
            <strong>Laundrybatch</strong> delivers everything under one roof: 
            <span style={{ color: '#0d9488', fontWeight: 700 }}> 10s WhatsApp POS</span>, 
            <span style={{ color: '#0284c7', fontWeight: 700 }}> Defect Camera CRM</span>, 
            <span style={{ color: '#10b981', fontWeight: 700 }}> Commercial Washing Machines</span>, and 
            <span style={{ color: '#f59e0b', fontWeight: 700 }}> Custom Detergent Bottles</span> with your shop name.
          </p>

          {/* Primary Mobile-Friendly Action Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '22px'
          }}>
            <button
              id="hero-btn-start-free"
              onClick={onOpenTrial}
              className="btn-primary"
              style={{
                height: '48px',
                padding: '0 24px',
                fontSize: '0.98rem',
                fontWeight: 800,
                borderRadius: '12px',
                boxShadow: '0 6px 20px rgba(13, 148, 136, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Start Free (No Card)</span>
              <ArrowRight size={18} />
            </button>

            <a
              id="hero-btn-whatsapp"
              href="https://wa.me/917389327066?text=Hi%20Laundrybatch!%20I%20want%20to%20know%20more%20about%20your%20laundry%20business%20solutions."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '48px',
                padding: '0 20px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-surface)',
                border: '2px solid #25D366',
                color: '#15803d',
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 2px 10px rgba(37, 211, 102, 0.15)',
                transition: 'all 0.2s ease',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+917389327066"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                height: '48px',
                padding: '0 16px',
                borderRadius: '12px',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-medium)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              <PhoneCall size={16} color="#0d9488" />
              <span>Call: +91 73893 27066</span>
            </a>
          </div>

        </div>

        {/* =========================================================
            INNOVATIVE "CLICK TO UNDERSTAND" 5-PILLAR QUICK-TAP STRIP
            "Things should be in such a creative way that anyone can
            get an idea by just clicking on these things only."
            ========================================================= */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '24px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-lg)',
          padding: '20px 16px',
          marginBottom: '32px'
        }}>
          
          {/* Mobile Tap Explainer Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '14px',
            paddingBottom: '10px',
            borderBottom: '1px solid var(--border-light)',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="#0d9488" />
              <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '0.01em' }}>
                Tap any solution to preview how it works instantly:
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0d9488', background: 'rgba(13, 148, 136, 0.1)', padding: '3px 10px', borderRadius: '999px' }}>
              ⚡ 5 Core Solutions
            </span>
          </div>

          {/* 5 Thumb-Friendly Touch Pills (Horizontal Scroll on Mobile) */}
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '8px',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
            marginBottom: '18px'
          }}>
            {pillars.map((pillar) => {
              const isSelected = activePillar === pillar.id;
              const Icon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  id={`hero-pill-${pillar.id}`}
                  onClick={() => setActivePillar(pillar.id)}
                  style={{
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '14px',
                    border: isSelected ? `2px solid ${pillar.badgeColor}` : '1px solid var(--border-medium)',
                    background: isSelected ? `linear-gradient(135deg, ${pillar.badgeColor}18, ${pillar.badgeColor}08)` : 'var(--bg-main)',
                    color: isSelected ? pillar.badgeColor : 'var(--text-main)',
                    fontWeight: isSelected ? 800 : 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isSelected ? `0 4px 14px ${pillar.badgeColor}30` : 'none',
                    transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{pillar.emoji}</span>
                  <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
                    <div>{pillar.title}</div>
                    <div style={{ fontSize: '0.7rem', color: isSelected ? pillar.badgeColor : 'var(--text-muted)', fontWeight: 500 }}>
                      {pillar.sub}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC VISUAL SHOWCASE CARD (INTERACTIVE & ZERO FLUFF) */}
          <div style={{
            borderRadius: '18px',
            backgroundColor: 'var(--bg-main)',
            border: '1px solid var(--border-light)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '20px',
            alignItems: 'center',
            padding: '16px'
          }}>
            
            {/* Visual Image / Interactive Canvas Container */}
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <img
                src={currentPillarData.photo}
                alt={currentPillarData.headline}
                style={{
                  width: '100%',
                  height: '240px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Floating Dynamic Status Badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>{currentPillarData.emoji}</span>
                <span>{currentPillarData.title}</span>
              </div>

              {/* Specific Live Simulation Gadget On Image */}
              {activePillar === 'chemicals' && (
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  background: 'rgba(15, 23, 42, 0.92)',
                  borderRadius: '12px',
                  padding: '10px 12px',
                  color: '#ffffff'
                }}>
                  <div style={{ fontSize: '0.72rem', color: '#f59e0b', fontWeight: 800, textTransform: 'uppercase' }}>
                    🏷️ Live Bottle Label Preview
                  </div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff' }}>
                    {customBrandName || 'Your Shop Name'} Liquid Detergent
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8' }}>
                    Bio-Enzyme Stain Lifter • Packed in Delhi Central Depot
                  </div>
                </div>
              )}
            </div>

            {/* Content & Live Interactive Click Gadget */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.75rem',
                fontWeight: 800,
                color: currentPillarData.badgeColor,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '6px'
              }}>
                <span>{currentPillarData.emoji}</span>
                <span>Laundrybatch Solution #{pillars.findIndex(p => p.id === activePillar) + 1}</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.45rem)',
                fontWeight: 800,
                marginBottom: '10px',
                lineHeight: 1.25,
                color: 'var(--text-main)'
              }}>
                {currentPillarData.headline}
              </h3>

              {/* 3 Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                {currentPillarData.points.map((pt, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--text-sub)' }}>
                    <CheckCircle2 size={16} color={currentPillarData.badgeColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* ====================================================
                  UNIQUE INTERACTIVE MOBILE GADGET PER PILLAR
                  ==================================================== */}
              <div style={{
                background: 'var(--bg-surface)',
                border: `1px solid ${currentPillarData.badgeColor}40`,
                borderRadius: '12px',
                padding: '12px',
                marginBottom: '14px'
              }}>
                {activePillar === 'pos' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        Interactive 1-Tap Bill Simulation:
                      </span>
                      {billSentState && (
                        <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 800 }}>
                          ✓ Sent to WhatsApp!
                        </span>
                      )}
                    </div>
                    <button
                      onClick={handleSimulateBill}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        backgroundColor: billSentState ? '#10b981' : '#0d9488',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <MessageCircle size={15} />
                      <span>{billSentState ? 'WhatsApp Bill Demo Sent (Check popup)' : 'Tap to Test Send WhatsApp Bill to Customer'}</span>
                    </button>
                    {billSentState && (
                      <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', fontSize: '0.76rem', color: '#166534' }}>
                        📱 <strong>WhatsApp Notification:</strong> "Hi Rahul, your 3 shirts are checked in at Laundrybatch. Amount: ₹240. Pay via UPI: upi://pay?pa=laundry@upi"
                      </div>
                    )}
                  </div>
                )}

                {activePillar === 'camera' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                        Garment Defect Camera Demo:
                      </span>
                      {defectCaptured && (
                        <span style={{ fontSize: '0.72rem', color: '#0284c7', fontWeight: 800 }}>
                          ✓ Tagged & Watermarked!
                        </span>
                      )}
                    </div>
                    <button
                      onClick={handleSimulateDefect}
                      style={{
                        width: '100%',
                        padding: '9px 12px',
                        backgroundColor: defectCaptured ? '#0284c7' : '#0369a1',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <Camera size={15} />
                      <span>{defectCaptured ? 'Defect Watermark Stamped!' : 'Tap to Simulate Intake Photo (Torn Fabric)'}</span>
                    </button>
                    {defectCaptured && (
                      <div style={{ marginTop: '8px', padding: '8px', backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '6px', fontSize: '0.76rem', color: '#0369a1' }}>
                        🛡️ <strong>Evidence Stamped:</strong> "Garment #4029 - Pre-wash tear found on right sleeve collar. WhatsApp proof sent to customer timestamped 17:15 PM."
                      </div>
                    )}
                  </div>
                )}

                {activePillar === 'chemicals' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Type your shop name to see your custom detergent bottle:
                    </label>
                    <input
                      type="text"
                      value={customBrandName}
                      onChange={(e) => setCustomBrandName(e.target.value)}
                      placeholder="e.g. Royal Cleaners"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-medium)',
                        backgroundColor: 'var(--bg-main)',
                        color: 'var(--text-main)',
                        fontWeight: 700,
                        fontSize: '0.86rem',
                        marginBottom: '6px'
                      }}
                    />
                    <div style={{ fontSize: '0.72rem', color: '#d97706', fontWeight: 600 }}>
                      ✓ 5-Litre cans & 1-Litre bottles printed with your logo & sold to your retail clients!
                    </div>
                  </div>
                )}

                {activePillar === 'machinery' && (
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                      Select commercial washer capacity to see specs:
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {(['15kg', '30kg', '60kg', '120kg'] as const).map(cap => (
                        <button
                          key={cap}
                          onClick={() => setMachineCapacity(cap)}
                          style={{
                            flex: 1,
                            padding: '6px 0',
                            borderRadius: '6px',
                            border: machineCapacity === cap ? '2px solid #10b981' : '1px solid var(--border-medium)',
                            background: machineCapacity === cap ? '#10b981' : 'var(--bg-main)',
                            color: machineCapacity === cap ? '#ffffff' : 'var(--text-main)',
                            fontWeight: 700,
                            fontSize: '0.78rem',
                            cursor: 'pointer'
                          }}
                        >
                          {cap}
                        </button>
                      ))}
                    </div>
                    <div style={{ marginTop: '8px', fontSize: '0.74rem', color: 'var(--text-sub)' }}>
                      ⚡ <strong>{machineCapacity} SUS-304 Washer:</strong> Cleans up to {machineCapacity === '15kg' ? '300' : machineCapacity === '30kg' ? '650' : machineCapacity === '60kg' ? '1,300' : '2,600'} clothes/day. Direct factory dispatch from Delhi HQ.
                    </div>
                  </div>
                )}

                {activePillar === 'tags' && (
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
                      Thermal QR Tag Spec:
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '0.74rem', color: 'var(--text-sub)' }}>
                      <span style={{ background: '#ede9fe', color: '#6d28d9', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                        ♨️ 200°C Heat Proof
                      </span>
                      <span style={{ background: '#ede9fe', color: '#6d28d9', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                        🌊 Waterproof QR
                      </span>
                      <span style={{ background: '#ede9fe', color: '#6d28d9', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                        🇮🇳 Dispatch in 24h
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Micro Tagline & Quick CTA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {currentPillarData.tagline}
                </span>
                <button
                  onClick={onOpenTrial}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'none',
                    border: 'none',
                    color: currentPillarData.badgeColor,
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    padding: '4px 8px'
                  }}
                >
                  <span>Explore this solution</span>
                  <ChevronRight size={14} />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* =========================================================
            INTERACTIVE "SELECT YOUR BUSINESS PROFILE" (MOBILE HELPER)
            ========================================================= */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '18px',
          border: '1px solid var(--border-light)',
          padding: '16px',
          marginBottom: '28px'
        }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
            🎯 What type of laundry setup do you run? (Tap to see custom plan):
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '8px'
          }}>
            {businessProfiles.map((prof) => {
              const isMatch = businessProfile === prof.id;
              return (
                <button
                  key={prof.id}
                  onClick={() => setBusinessProfile(prof.id)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: isMatch ? '2px solid #0d9488' : '1px solid var(--border-light)',
                    background: isMatch ? 'rgba(13, 148, 136, 0.08)' : 'var(--bg-main)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: isMatch ? '#0d9488' : 'var(--text-main)' }}>
                    {prof.title}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', lineHeight: 1.3 }}>
                    👉 {prof.recommendation}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            DELHI CENTRAL DEPOT & TRUST STRIP
            ========================================================= */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          padding: '14px 18px',
          borderRadius: '14px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          fontSize: '0.78rem',
          color: 'var(--text-sub)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} color="#0d9488" />
            <span>
              <strong>Headquarters & Central Depot:</strong> Level 5, Statesman House, Barakhamba Road, Connaught Place, New Delhi - 110001
            </span>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <span style={{ color: '#10b981', fontWeight: 700 }}>✓ 100% Offline Capable</span>
            <span style={{ color: '#0284c7', fontWeight: 700 }}>✓ 8 Regional Languages</span>
            <span style={{ color: '#d97706', fontWeight: 700 }}>✓ Free Forever Tier</span>
          </div>
        </div>

      </div>
    </section>
  );
};
