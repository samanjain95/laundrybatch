import React, { useState } from 'react';
import { 
  Leaf, 
  Droplets, 
  TreePine, 
  ShieldCheck, 
  Smartphone, 
  QrCode, 
  WifiOff, 
  Printer, 
  Languages, 
  Sparkles, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export const EcoEcosystemSection: React.FC = () => {
  const [dailyBills, setDailyBills] = useState(60);
  const [operatingMonths, setOperatingMonths] = useState(12);

  // Environmental formula calculations
  // 1 thermal receipt roll ≈ 50 bills; 1 roll ≈ 12m paper with toxic BPA/BPS coating
  const totalBills = dailyBills * 30 * operatingMonths;
  const paperRollsSaved = Math.round(totalBills / 50);
  // 1 tree yields approx 8,000 thermal paper slips
  const treesPreserved = ((totalBills / 8000)).toFixed(1);
  // Smart wash batching saves ~14 liters of water per garment wash cycle
  const waterLitersSaved = Math.round(totalBills * 12);
  // Carbon footprint prevented (1kg CO2e per 100 thermal slips printed and transported)
  const co2PreventedKg = Math.round(totalBills * 0.012);

  return (
    <section id="eco-ecosystem" style={{ padding: '80px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div className="badge-pill badge-emerald" style={{ marginBottom: '14px' }}>
            <Leaf size={14} /> Sustainability & Market Fit
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '14px', color: 'var(--text-main)' }}>
            Green Environmental Impact & <span className="text-gradient">MSME Ecosystem Fit</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Built ground-up for the modern fabric care ecosystem—eliminating toxic non-recyclable paper receipts, slashing industrial water waste, and running seamlessly across India’s digital infrastructure.
          </p>
        </div>

        {/* Dual Impact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          
          {/* Part 1: Interactive Sustainability Calculator */}
          <div className="glass-panel" style={{ padding: '28px', backgroundColor: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TreePine size={22} color="#059669" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>
                  Green Sustainability Meter
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>Zero Paper • Zero BPA Chemical</span>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.5 }}>
              Standard thermal paper is coated with hazardous <strong>BPA (Bisphenol-A)</strong>, rendering it <em>100% non-recyclable</em>. By switching to digital WhatsApp bills, your laundry shop directly prevents land chemical leeching.
            </p>

            {/* Interactive Sliders */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '6px' }}>
                <span style={{ fontWeight: 600 }}>Your Daily Customer Invoices:</span>
                <span style={{ fontWeight: 800, color: '#059669' }}>{dailyBills} orders/day</span>
              </div>
              <input
                type="range"
                min="15"
                max="300"
                value={dailyBills}
                onChange={(e) => setDailyBills(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#059669' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '6px' }}>
                <span style={{ fontWeight: 600 }}>Operating Duration:</span>
                <span style={{ fontWeight: 800, color: '#059669' }}>{operatingMonths} months</span>
              </div>
              <input
                type="range"
                min="3"
                max="36"
                step="3"
                value={operatingMonths}
                onChange={(e) => setOperatingMonths(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#059669' }}
              />
            </div>

            {/* Output Metric Badges */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.75rem', fontWeight: 700 }}>
                  <TreePine size={16} /> Trees Preserved
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#047857', marginTop: '4px' }}>
                  {treesPreserved} Trees
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{paperRollsSaved} thermal rolls eliminated</div>
              </div>

              <div style={{ background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.2)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0891b2', fontSize: '0.75rem', fontWeight: 700 }}>
                  <Droplets size={16} /> Water Conserved
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0e7490', marginTop: '4px' }}>
                  {waterLitersSaved.toLocaleString()} L
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Via AI batch wash optimization</div>
              </div>

              <div style={{ background: 'rgba(2, 132, 199, 0.08)', border: '1px solid rgba(2, 132, 199, 0.2)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0284c7', fontSize: '0.75rem', fontWeight: 700 }}>
                  <ShieldCheck size={16} /> CO₂ Prevented
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0369a1', marginTop: '4px' }}>
                  {co2PreventedKg.toLocaleString()} kg
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Zero delivery courier slip emissions</div>
              </div>

              <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#d97706', fontSize: '0.75rem', fontWeight: 700 }}>
                  💰 Paper Roll Cost Saved
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#b45309', marginTop: '4px' }}>
                  ₹{(paperRollsSaved * 35).toLocaleString()}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Direct cash retained in shop</div>
              </div>
            </div>

          </div>

          {/* Part 2: Ecosystem Fit Pillars */}
          <div className="glass-panel" style={{ padding: '28px', backgroundColor: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layers size={22} color="#0284c7" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', margin: 0 }}>
                  Built for the Real-World MSME Ecosystem
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#0284c7', fontWeight: 600 }}>Zero Friction • India-Ready</span>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '18px', lineHeight: 1.5 }}>
              Many Western software tools fail because they demand expensive iPads and high-speed fiber internet. Laundrybatch was engineered explicitly to thrive in Indian operating conditions:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(37, 211, 102, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Smartphone size={17} color="#25D366" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Runs on Budget ₹6,000 Android Phones</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>PWA architecture ensures smooth 60fps performance on any basic smartphone, tablet, or existing desktop.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(13, 148, 136, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <QrCode size={17} color="#0d9488" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Zero-Commission UPI Dynamic QR Payments</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Instantly embeds PhonePe, GPay, and Paytm dynamic payment links so store owners collect payments without POS card swipe charges.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <WifiOff size={17} color="#ef4444" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>Offline-First Sync Engine</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Power cut or intermittent 4G? Bill customers offline without lag; all orders auto-sync to the cloud the moment connectivity returns.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(168, 85, 247, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Languages size={17} color="#a855f7" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-main)' }}>8 Regional Indian Vernacular Languages</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Staff can punch orders in Hindi, Telugu, Tamil, Kannada, Marathi, Bengali, or Malayalam with zero English barrier.</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
