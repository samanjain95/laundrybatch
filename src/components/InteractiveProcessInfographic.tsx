import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  QrCode,
  Layers,
  Wrench,
  FlaskConical,
  Package,
  ArrowRight,
  CheckCircle2,
  Play,
  Pause,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Truck,
  RotateCw,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  station: string;
  metricLabel: string;
  metricValue: string;
  techSpec: string;
  linkTo: string;
  color: string;
  bgGlow: string;
  pinX: number; // percentage on image
  pinY: number; // percentage on image
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Smart Intake & Defect Cam',
    station: 'Counter Station 01',
    shortDesc: 'Drop-off registered in 3 seconds with AI defect photo logging.',
    fullDesc: 'Garments are weighed and inspected under the counter camera. Existing torn hems, stains, or missing buttons are instantly photographed and stamped onto the customer digital bill.',
    metricLabel: 'Intake Speed',
    metricValue: '1.2s / order',
    techSpec: 'Offline SQLite POS • WhatsApp Invoice • Zero Paper Rolls',
    linkTo: '/pos',
    color: '#0d9488',
    bgGlow: 'rgba(13, 148, 136, 0.25)',
    pinX: 18,
    pinY: 48
  },
  {
    id: 2,
    title: '200°C Steam QR Tagging',
    station: 'Tagging Station 02',
    shortDesc: 'Ultra-thin heat-seal tag pressed onto garment hem.',
    fullDesc: 'Our Delhi-manufactured heat-seal QR tags fuse into fabric in 3 seconds at 200°C. Withstands 60+ industrial wash cycles without peeling or fading. Zero stapler pin tears.',
    metricLabel: 'Wash Resistance',
    metricValue: '60+ Washes',
    techSpec: '200°C Thermal Bond • High-Density Micro-QR • 0.00% Tag Loss',
    linkTo: '/supplies',
    color: '#0284c7',
    bgGlow: 'rgba(2, 132, 199, 0.25)',
    pinX: 34,
    pinY: 34
  },
  {
    id: 3,
    title: 'Industrial Wash & Bio Dosing',
    station: 'Wash Floor Station 03',
    shortDesc: '15kg-120kg washer-extractors with automated chemical dosing.',
    fullDesc: 'Microprocessor-controlled drums run calibrated wash curves while peristaltic pumps inject our proprietary bio-enzyme detergents and oxygen destainers with ±2ml accuracy.',
    metricLabel: 'Resource Savings',
    metricValue: '42% Water & Energy',
    techSpec: 'SUS 304 Drum • 350G High Extract • Proprietary Cold-Active Enzymes',
    linkTo: '/machinery',
    color: '#6366f1',
    bgGlow: 'rgba(99, 102, 241, 0.25)',
    pinX: 63,
    pinY: 28
  },
  {
    id: 4,
    title: 'Vacuum Steam Ironing',
    station: 'Finishing Station 04',
    shortDesc: '145°C micro-steam utility tables for crease-free luxury finish.',
    fullDesc: 'High-vacuum suction draws moisture out of fabrics instantaneously while steam irons glide across suits, sarees, and shirts for crisp, showroom-quality presentation.',
    metricLabel: 'Finishing Output',
    metricValue: '48 pcs / hr',
    techSpec: 'Thermostatic 145°C Steam • Foot-Pedal Vacuum Bed • Garment Shaper',
    linkTo: '/machinery',
    color: '#ec4899',
    bgGlow: 'rgba(236, 72, 153, 0.25)',
    pinX: 33,
    pinY: 67
  },
  {
    id: 5,
    title: 'Smart Sorting & Tamper Bagging',
    station: 'Assembly Station 05',
    shortDesc: 'Garments grouped by QR into smart bin slots and poly-wrapped.',
    fullDesc: 'Staff scan any garment tag to highlight its assigned bin rack. Clothes are sealed inside recyclable dust-proof poly wrap and hung on branded non-slip hangers.',
    metricLabel: 'Mismatched Garments',
    metricValue: '0.00%',
    techSpec: 'Rack Bin LED Guidance • Anti-Static Poly Film • Contoured Hangers',
    linkTo: '/supplies',
    color: '#f59e0b',
    bgGlow: 'rgba(245, 158, 11, 0.25)',
    pinX: 58,
    pinY: 76
  },
  {
    id: 6,
    title: '1-Click WhatsApp & Rider Dispatch',
    station: 'Delivery Station 06',
    shortDesc: 'Automated "Ready for Pickup" alert with integrated UPI QR payment.',
    fullDesc: 'The moment the final garment scans into packaging, an instant branded WhatsApp ping reaches the customer with photo proof and a 1-tap UPI payment link. Delivery rider routed via app.',
    metricLabel: 'Customer Rating',
    metricValue: '4.98 ★ Avg',
    techSpec: 'WhatsApp Business Cloud API • Dynamic UPI QR • Real-Time GPS Tracking',
    linkTo: '/crm',
    color: '#10b981',
    bgGlow: 'rgba(16, 185, 129, 0.25)',
    pinX: 89,
    pinY: 69
  }
];

interface ProductPillar {
  id: string;
  tag: string;
  title: string;
  description: string;
  highlight: string;
  imageSrc: string;
  badge: string;
  badgeColor: string;
  linkTo: string;
  actionText: string;
  bullets: string[];
}

const CORE_PRODUCTS: ProductPillar[] = [
  {
    id: 'pos',
    tag: 'Hardware & POS Software',
    title: 'High-Speed Front Counter POS Terminal',
    description: 'Bilingual touchscreen POS engineered specifically for busy laundry counters. Generates QR thermal bills in under 3 seconds and runs 100% offline.',
    highlight: 'Works during internet & power cuts with auto-cloud sync',
    imageSrc: '/images/pos_terminal.jpg',
    badge: '3,400+ Counters Active',
    badgeColor: '#0d9488',
    linkTo: '/pos',
    actionText: 'Explore POS Terminal',
    bullets: [
      'Built-in QR Code WhatsApp Billing',
      'Dual Display (Cashier + Customer facing)',
      'Barcode Scanner & 3-inch Thermal Printer Support',
      '8 Indian Regional Languages Included'
    ]
  },
  {
    id: 'crm',
    tag: 'Dispute-Proof CRM',
    title: 'Garment Defect Camera & Smart CRM',
    description: 'Eliminate lost cloth allegations and stained garment arguments forever with pre-wash photographic proof and automated customer timeline alerts.',
    highlight: '99.8% Dispute Elimination across 4,200+ partner outlets',
    imageSrc: '/images/hero_laundry.jpg',
    badge: 'Dispute-Proof Guarantee',
    badgeColor: '#6366f1',
    linkTo: '/crm',
    actionText: 'Test CRM Scenarios',
    bullets: [
      'Countertop High-Res Intake Defect Cam',
      'Automatic Torn Seam & Color Bleed Alerts',
      'Live SMS & WhatsApp Order Status Updates',
      'Automated VIP Loyalty & Cash-Back Wallet'
    ]
  },
  {
    id: 'machinery',
    tag: 'Industrial Engineering',
    title: 'Turnkey Commercial Laundry Machinery',
    description: 'Heavy-duty commercial Washer-Extractors (15kg-120kg), steam tumble dryers, and utility vacuum press tables built with SUS-304 stainless steel.',
    highlight: 'Engineered for 16-hour daily continuous factory shifts',
    imageSrc: '/images/machinery_facility.jpg',
    badge: '42% Water & Power Saved',
    badgeColor: '#0284c7',
    linkTo: '/machinery',
    actionText: 'View Machinery Setup',
    bullets: [
      'SUS-304 Surgical Grade Stainless Steel Drums',
      'Microprocessor Programmable Wash Curves',
      'Full Boiler & Steam Piping Plant Layout Services',
      'Annual Maintenance & Spares from Delhi Depot'
    ]
  },
  {
    id: 'chemicals',
    tag: 'Proprietary Chemical Manufacturing',
    title: 'White-Label Bio-Enzymes & Custom Bottling',
    description: 'Factory-direct industrial detergents, bio-enzyme stain lifters, and luxury fabric conditioners custom-bottled with your own company branding & logo.',
    highlight: 'Your own brand on bottles — build customer trust & resale revenue',
    imageSrc: '/images/chemicals_bottles.jpg',
    badge: 'Zero Fabric Fading',
    badgeColor: '#ec4899',
    linkTo: '/chemicals',
    actionText: 'Customize Your Bottles',
    bullets: [
      'Cold-Water Active Bio-Enzyme Formulations',
      'Custom Printed Bottles with Your Shop Logo',
      'Zero Harsh Bleach • Safe for Silk, Wool & Zari',
      'Bulk 5L, 20L & 50L Drum Dispatch Nationwide'
    ]
  },
  {
    id: 'supplies',
    tag: 'Packaging & Consumables Depot',
    title: '200°C Heat-Seal QR Rolls & Poly Supplies',
    description: 'Complete wholesale consumable supply chain shipped directly from our Delhi Central Warehouse: non-tear tags, poly bags, luxury hangers, and collar stays.',
    highlight: 'Same-day dispatch across North, South, East & West India',
    imageSrc: '/images/laundry_owner.jpg',
    badge: 'Direct Factory Pricing',
    badgeColor: '#f59e0b',
    linkTo: '/supplies',
    actionText: 'Order Raw Materials',
    bullets: [
      '200°C Steam-Proof Heat-Seal QR Tag Rolls',
      'Tamper-Proof Anti-Dust Poly Tubing Film',
      'Contoured Wooden & Non-Slip Wire Hangers',
      'Custom Branded Garment Delivery Bags'
    ]
  }
];

export const InteractiveProcessInfographic: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto-play timeline loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStepId((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeStep = PROCESS_STEPS.find((s) => s.id === activeStepId) || PROCESS_STEPS[0];

  return (
    <section style={{ padding: '80px 0 60px', background: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(13, 148, 136, 0.08) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto 48px' }}>
          <div
            className="badge-pill"
            style={{
              background: 'rgba(13, 148, 136, 0.1)',
              border: '1px solid rgba(13, 148, 136, 0.3)',
              color: '#0d9488',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} /> Complete Plant & Retail Architecture
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2, marginBottom: '16px' }}>
            Not Just a Billing App.{' '}
            <span className="text-gradient">The Entire 360° Laundry Machine.</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
            From the instant a customer drops a garment at your counter, through industrial washer drums and chemical dosing, to vacuum finishing and 1-tap WhatsApp payment dispatch — explore how all 6 operational nodes sync seamlessly.
          </p>

          {/* Delhi HQ Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-light)',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '0.84rem',
              color: 'var(--text-main)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}
          >
            <MapPin size={15} color="#ef4444" style={{ flexShrink: 0 }} />
            <span>
              <strong>Central Operations & Technology HQ:</strong> Level 5, Statesman House, Barakhamba Road, Connaught Place, New Delhi
            </span>
          </div>
        </div>

        {/* ----------------- PART 1: 3D ISOMETRIC PROCESS INFOGRAPHIC FLOW ----------------- */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            padding: '28px',
            marginBottom: '72px',
            boxShadow: '0 20px 50px -15px rgba(0,0,0,0.07)'
          }}
        >
          {/* Controls Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
              paddingBottom: '20px',
              borderBottom: '1px solid var(--border-light)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0d9488, #0284c7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Cpu size={18} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  Interactive 6-Stage Operational Flowchart
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Click any hotspot or timeline stage below to inspect mechanical & software telemetry
                </div>
              </div>
            </div>

            {/* Auto Play / Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '9999px',
                border: '1px solid var(--border-light)',
                background: isPlaying ? 'rgba(13, 148, 136, 0.1)' : 'var(--bg-main)',
                color: isPlaying ? '#0d9488' : 'var(--text-main)',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? 'Auto-Flow Active (4s)' : 'Resume Auto-Flow'}</span>
            </button>
          </div>

          {/* Interactive Visual Canvas */}
          <div
            className="infographic-visual-canvas"
            style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              background: '#0a1017',
              aspectRatio: '16 / 9',
              minHeight: '260px',
              maxHeight: '520px',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)'
            }}
          >
            <img
              src="/images/process_infographic.jpg"
              alt="Complete Commercial Laundry Plant & Factory Process Flow"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.92) contrast(1.05)'
              }}
            />

            {/* Gradient Overlays for High-Tech feel */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10, 16, 23, 0.85) 0%, transparent 40%, rgba(10, 16, 23, 0.4) 100%)',
                pointerEvents: 'none'
              }}
            />

            {/* Interactive Pins on the Visual */}
            {PROCESS_STEPS.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStepId(step.id);
                    setIsPlaying(false);
                  }}
                  style={{
                    position: 'absolute',
                    left: `${step.pinX}%`,
                    top: `${step.pinY}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 20,
                    background: isActive ? step.color : 'rgba(15, 23, 42, 0.85)',
                    border: `2px solid ${isActive ? '#ffffff' : step.color}`,
                    color: '#ffffff',
                    width: isActive ? '38px' : '28px',
                    height: isActive ? '38px' : '28px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: isActive ? '0.9rem' : '0.78rem',
                    fontWeight: 800,
                    boxShadow: isActive
                      ? `0 0 25px ${step.color}, 0 4px 12px rgba(0,0,0,0.5)`
                      : '0 2px 8px rgba(0,0,0,0.4)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  title={`Stage ${step.id}: ${step.title}`}
                >
                  {isActive && <span className="radar-ping-ring" style={{ borderColor: step.color }} />}
                  <span>{step.id}</span>
                </button>
              );
            })}

            {/* Active Node Live HUD Overlay (Bottom-left of image on desktop, static below image on mobile) */}
            <div
              className="infographic-hud-panel"
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(15, 23, 42, 0.88)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${activeStep.color}`,
                borderRadius: '14px',
                padding: '16px 20px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                zIndex: 30,
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: activeStep.color,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    flexShrink: 0
                  }}
                >
                  0{activeStep.id}
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: activeStep.color, fontWeight: 700 }}>
                      {activeStep.station}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>•</span>
                    <span style={{ fontSize: '0.74rem', color: '#38bdf8', fontWeight: 600 }}>
                      {activeStep.metricLabel}: <strong>{activeStep.metricValue}</strong>
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: '2px 0 0' }}>
                    {activeStep.title}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '2px', maxWidth: '640px' }}>
                    {activeStep.shortDesc}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Link
                  to={activeStep.linkTo}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: activeStep.color,
                    color: '#ffffff',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Explore Module</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* 6-Stage Interactive Selector Pills (Below visual) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '10px',
              marginTop: '20px'
            }}
          >
            {PROCESS_STEPS.map((step) => {
              const isSelected = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStepId(step.id);
                    setIsPlaying(false);
                  }}
                  style={{
                    background: isSelected ? step.bgGlow : 'var(--bg-main)',
                    border: `1px solid ${isSelected ? step.color : 'var(--border-light)'}`,
                    borderRadius: '12px',
                    padding: '12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: isSelected ? step.color : 'var(--text-muted)'
                      }}
                    >
                      STEP 0{step.id}
                    </span>
                    {isSelected && (
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '9999px',
                          background: step.color
                        }}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 700,
                      color: isSelected ? 'var(--text-main)' : 'var(--text-muted)',
                      lineHeight: 1.3
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: step.color,
                      fontWeight: 600,
                      marginTop: '4px'
                    }}
                  >
                    {step.metricValue}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Telemetry Callout for Active Step */}
          <div
            style={{
              marginTop: '20px',
              padding: '16px 20px',
              background: 'var(--bg-main)',
              borderRadius: '14px',
              border: '1px solid var(--border-light)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Zap size={18} color={activeStep.color} />
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  Technical Architecture Guarantee:
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
                  {activeStep.techSpec}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.76rem', color: 'var(--text-muted)' }}>
              <ShieldCheck size={14} color="#10b981" />
              <span>Full Audit Trail Stored in Cloud DB</span>
            </div>
          </div>
        </div>

        {/* ----------------- PART 2: 5 CORE PRODUCTS & SERVICES SPOTLIGHT GRID ----------------- */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <div
              className="badge-pill badge-aqua"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}
            >
              <Package size={14} /> Full Turnkey Hardware & Chemical Solutions
            </div>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.3rem)', fontWeight: 800, color: 'var(--text-main)' }}>
              5 Integrated Pillars Under One Single Roof
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Why coordinate with 5 different vendors across billing, machines, chemicals, tags, and hangers? We build, manufacture, and ship all five together.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px'
            }}
          >
            {CORE_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="product-glow-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
              >
                {/* Product Card Image Container */}
                <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={prod.imageSrc}
                    alt={prod.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)'
                    }}
                  />

                  {/* Top Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${prod.badgeColor}`,
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: prod.badgeColor }} />
                    {prod.badge}
                  </div>

                  {/* Bottom Category Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      left: '14px',
                      color: '#38bdf8',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {prod.tag}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                    {prod.title}
                  </h4>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                    {prod.description}
                  </p>

                  {/* Highlight pill */}
                  <div
                    style={{
                      background: 'rgba(13, 148, 136, 0.08)',
                      border: '1px dashed rgba(13, 148, 136, 0.3)',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      fontSize: '0.8rem',
                      color: '#0d9488',
                      fontWeight: 600,
                      marginBottom: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <Zap size={14} style={{ flexShrink: 0 }} />
                    <span>{prod.highlight}</span>
                  </div>

                  {/* Bullet points */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.82rem',
                      color: 'var(--text-main)',
                      flex: 1
                    }}
                  >
                    {prod.bullets.map((b, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <CheckCircle2 size={15} color="#0d9488" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link */}
                  <Link
                    to={prod.linkTo}
                    className="btn-outline"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      borderRadius: '10px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      textDecoration: 'none'
                    }}
                  >
                    <span>{prod.actionText}</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----------------- PART 3: ARCHITECTURE & SUPPLY DISPATCH STRATEGY INFOGRAPHIC ----------------- */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(2, 132, 199, 0.08) 100%)',
            border: '1px solid var(--border-light)',
            borderRadius: '20px',
            padding: '32px 28px',
            position: 'relative'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              alignItems: 'center'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#0d9488',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px'
                }}
              >
                <TrendingUp size={16} /> National Supply Network
              </div>

              <h4 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
                Centrally Dispatched from Delhi Headquarters
              </h4>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                Our corporate engineering headquarters and central raw materials hub in New Delhi (Connaught Place) manages nationwide supply runs for all QR rolls, custom-branded bio-enzyme detergents, machinery parts, and software sync servers across 4,200+ partner laundries in India.
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px'
              }}
            >
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0d9488' }}>
                  24-48 hrs
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Consumables Dispatch
                </div>
                <div style={{ fontSize: '0.7rem', color: '#10b981', marginTop: '2px' }}>
                  Direct to your door
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0284c7' }}>
                  4,200+
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Active Plant Partners
                </div>
                <div style={{ fontSize: '0.7rem', color: '#10b981', marginTop: '2px' }}>
                  Across 28 states
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#ec4899' }}>
                  1.8M+
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Garments Tracked/Mo
                </div>
                <div style={{ fontSize: '0.7rem', color: '#10b981', marginTop: '2px' }}>
                  0.00% Lost Guarantee
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#f59e0b' }}>
                  100%
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Made in India
                </div>
                <div style={{ fontSize: '0.7rem', color: '#10b981', marginTop: '2px' }}>
                  HQ: New Delhi, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
