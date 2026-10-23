import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Video, 
  CheckCircle2, 
  Sparkles, 
  Monitor, 
  Smartphone, 
  ArrowRight, 
  QrCode, 
  Camera, 
  Truck, 
  Receipt, 
  ShieldCheck, 
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const OriginalCRMTourSection: React.FC<{ onConnectCRM?: () => void }> = ({ onConnectCRM }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // The 5 authentic operational stages of Laundrybatch's CRM
  const crmScreens = [
    {
      id: 'intake',
      step: 'Step 01',
      title: 'Counter Intake & Instant QR Tagging',
      shortTitle: '01. Intake Counter',
      icon: Receipt,
      headline: 'Process Any Walk-In Order in Under 10 Seconds',
      description: 'Search returning customers by phone number in 1 keystroke. Auto-populate past preferences, rate cards, and apply garment QR tags with pre-wash camera inspection.',
      features: [
        'Instant customer search with pending balance alerts',
        'Built-in camera defect capture (records burns, holes & stains)',
        'Heat-seal textile QR tag generated with garment rack ID',
        'Auto-calculates dry cleaning vs wash & fold weights',
      ],
      mockupLabel: 'LIVE COUNTER DESK • SCREENSHOT VIEW',
      primaryStat: '10 Secs',
      statLabel: 'Average Bill Creation Time',
    },
    {
      id: 'processing',
      step: 'Step 02',
      title: 'Batch Wash & Quality Inspection Pipeline',
      shortTitle: '02. Wash Pipeline',
      icon: Layers,
      headline: 'Track Garment Movement From Washer Drum to Steam Iron',
      description: 'Factory floor operators scan tags at each station. The screen shows exact wash cycle times, chemical dosing recommendations, and delicate fabric handling alerts.',
      features: [
        'Visual drag-and-drop garment batch status pipeline',
        'Chemical dosing assistant prevents soap overdose',
        'Delicate silk & designer garment special care flags',
        'Quality check inspector rejects re-washes before packaging',
      ],
      mockupLabel: 'PLANT FLOOR OPERATIONS • SCREENSHOT VIEW',
      primaryStat: '100% Traceable',
      statLabel: 'Zero Clothes Mix-up',
    },
    {
      id: 'assembly',
      step: 'Step 03',
      title: 'Smart Rack Locator & Bag Packaging',
      shortTitle: '03. Rack Assembly',
      icon: QrCode,
      headline: 'Scan Any Tag to Know the Exact Storage Bin & Hanger',
      description: 'Eliminate peak-hour customer pickup confusion. When clothes are ironed, staff scans the QR tag to instantly light up the customer rack bin (e.g., Bin #B-14).',
      features: [
        'Instant rack bin assignment with barcode verification',
        'Alerts if any garment from a multi-piece order is missing',
        'Automatic poly-tubing roll length recommendation',
        'Print garment delivery slip with piece count summary',
      ],
      mockupLabel: 'SMART RACK DISPATCH • SCREENSHOT VIEW',
      primaryStat: '0.00% Error',
      statLabel: 'Assembly Accuracy',
    },
    {
      id: 'whatsapp',
      step: 'Step 04',
      title: 'WhatsApp Billing & Customer Tracking Portal',
      shortTitle: '04. WhatsApp Billing',
      icon: Smartphone,
      headline: 'Paperless Digital Invoicing with Live Stage Tracker',
      description: 'Your customer receives an automated WhatsApp message with a clickable order timeline link, invoice breakdown, and 1-tap UPI payment QR.',
      features: [
        'Direct WhatsApp API with 98% instant customer open rate',
        'Live tracking link shows: Received → Washed → Ironed → Ready',
        'Dynamic UPI QR code enables contactless counter payments',
        'Automated gentle pickup reminders on Day 3, 7, and 14',
      ],
      mockupLabel: 'CUSTOMER WHATSAPP PORTAL • SCREENSHOT VIEW',
      primaryStat: '₹0 Paper Cost',
      statLabel: 'Zero Thermal Roll Waste',
    },
    {
      id: 'delivery',
      step: 'Step 05',
      title: 'Rider App & Doorstep Delivery Dispatch',
      shortTitle: '05. Delivery App',
      icon: Truck,
      headline: 'Clustered Delivery Routes for Drivers with Doorstep UPI',
      description: 'Assign orders to delivery riders automatically by pincode and neighborhood. Drivers collect cash or UPI on delivery and confirm drops with secure customer OTP.',
      features: [
        'Google Maps route optimization saves 35% fuel',
        'Doorstep UPI collection marks orders paid in real-time',
        'Delivery photo confirmation and customer OTP verification',
        'Driver piece commission calculated automatically',
      ],
      mockupLabel: 'DRIVER SMARTPHONE APP • SCREENSHOT VIEW',
      primaryStat: '35% Saved',
      statLabel: 'On Fuel & Rider Transit',
    },
  ];

  const current = crmScreens[activeScreenIndex];
  const CurrentIcon = current.icon;

  return (
    <section id="crm-tour" style={{
      padding: '76px 0',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease, color 0.25s ease'
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 44px auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 16px',
            borderRadius: '999px',
            background: 'rgba(13, 148, 136, 0.12)',
            border: '1px solid rgba(13, 148, 136, 0.3)',
            color: '#0d9488',
            fontSize: '0.82rem',
            fontWeight: 700,
            marginBottom: '14px'
          }}>
            <Sparkles size={14} /> The Authentic CRM Operational Flow
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, lineHeight: 1.22, marginBottom: '14px', color: 'var(--text-main)' }}>
            Experience Our <span className="text-gradient">Original Laundry CRM</span> Platform
          </h2>
          <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Engineered exclusively for laundry shops, dry cleaners, and commercial processing plants. Explore the exact step-by-step workflow that powers thousands of daily orders.
          </p>
        </div>

        {/* 5-Step Navigation Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
          gap: '8px',
          marginBottom: '28px'
        }}>
          {crmScreens.map((screen, idx) => {
            const TabIcon = screen.icon;
            const isActive = activeScreenIndex === idx;
            return (
              <button
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  border: isActive ? '2px solid #0d9488' : '1px solid var(--border-light)',
                  background: isActive ? 'var(--bg-surface)' : 'var(--bg-main)',
                  color: isActive ? '#0d9488' : 'var(--text-sub)',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(13, 148, 136, 0.12)' : 'var(--bg-surface)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? '#0d9488' : 'var(--text-muted)',
                  flexShrink: 0
                }}>
                  <TabIcon size={16} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{screen.step}</div>
                  <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{screen.shortTitle}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Hub: Real Interactive Showcase & Video Walkthrough */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: '24px',
          border: '1px solid var(--border-light)',
          padding: 'clamp(16px, 4vw, 36px)',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(20px, 4vw, 40px)',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          
          {/* Left Column: Flow Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d9488', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              <CurrentIcon size={15} />
              <span>{current.step} OF 05 • {current.title}</span>
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', lineHeight: 1.25 }}>
              {current.headline}
            </h3>

            <p style={{ color: 'var(--text-sub)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '22px' }}>
              {current.description}
            </p>

            {/* Feature Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '26px' }}>
              {current.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={17} color="#0d9488" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Stat Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              padding: '12px 18px',
              borderRadius: '14px',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-light)'
            }}>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0d9488', lineHeight: 1 }}>
                  {current.primaryStat}
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px' }}>
                  {current.statLabel}
                </div>
              </div>
              <div style={{ height: '30px', width: '1px', backgroundColor: 'var(--border-light)' }} />
              <div style={{ fontSize: '0.78rem', color: 'var(--text-sub)', fontWeight: 600 }}>
                Live in Production Across 4,200+ Stores
              </div>
            </div>
          </div>

          {/* Right Column: Live Video & Screen Simulation Player */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#0f172a',
              border: '2px solid var(--border-medium)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}>
              
              {/* Top macOS/App Window Controls */}
              <div style={{
                backgroundColor: '#1e293b',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #334155'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                  {current.mockupLabel}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#2dd4bf', fontWeight: 700 }}>● LIVE CRM</span>
              </div>

              {/* Video Walkthrough Player Surface */}
              <div style={{
                position: 'relative',
                minHeight: '340px',
                background: 'linear-gradient(135deg, #0b1329 0%, #131d2e 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px',
                color: '#ffffff',
                textAlign: 'center'
              }}>
                
                {/* Center Video Play Button */}
                <div
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    cursor: 'pointer',
                    boxShadow: '0 8px 30px rgba(13, 148, 136, 0.5)',
                    marginBottom: '16px',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                >
                  {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '4px' }} />}
                </div>

                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
                  {isPlaying ? 'Demo Video Playing...' : `Watch Real Walkthrough: ${current.title}`}
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.82rem', maxWidth: '360px', margin: '0 auto 18px auto' }}>
                  See how an actual laundry store processes 500+ daily pieces effortlessly using our live CRM screens.
                </p>

                {/* Scrubber Bar */}
                <div style={{ width: '90%', maxWidth: '360px', background: '#334155', height: '6px', borderRadius: '3px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: isPlaying ? '65%' : '20%', height: '100%', background: 'linear-gradient(90deg, #0d9488, #2dd4bf)', borderRadius: '3px', transition: 'width 0.4s' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%', maxWidth: '360px', fontSize: '0.68rem', color: '#64748b', marginTop: '6px' }}>
                  <span>{isPlaying ? '01:42' : '00:24'}</span>
                  <span>03:15 Full Flow</span>
                </div>

              </div>

              {/* Bottom Screen Bar */}
              <div style={{
                backgroundColor: '#1e293b',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #334155',
                fontSize: '0.78rem',
                color: '#cbd5e1'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CurrentIcon size={14} color="#2dd4bf" />
                  <span>Active Module: <strong>{current.title}</strong></span>
                </div>
                <span style={{ color: '#2dd4bf', fontWeight: 700 }}>
                  HD 1080p Video Ready
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
