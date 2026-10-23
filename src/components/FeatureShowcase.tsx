import React, { useState } from 'react';
import { 
  QrCode, 
  Send, 
  Truck, 
  Building2, 
  Camera, 
  FileText, 
  Users, 
  WifiOff, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: 'qr-tagging',
      title: 'Garment QR Tagging',
      subtitle: 'Never Lose a Single Shirt or Saree Ever Again',
      icon: QrCode,
      tag: '0% Lost Clothes',
      description: 'Generate high-temperature waterproof heat-seal QR tags in 1 click. Scan with any phone camera to trace garment location from wash drum to dry tumbler to customer rack.',
      benefits: ['Survives 200°C steam & chemical solvents', 'Garment defect note attached to tag', 'Zero customer mix-ups and zero lost cloth claims'],
      highlight: '99.98% Garment Traceability Rate',
    },
    {
      id: 'whatsapp-automation',
      title: 'WhatsApp Automation',
      subtitle: 'Instant WhatsApp Bills & Live Order Stage Updates',
      icon: Send,
      tag: '98% Open Rate',
      description: 'Replace paper thermal bills with instant WhatsApp receipts featuring live tracking links, payment QR codes, and pickup completion alerts with zero SMS charges.',
      benefits: ['Direct WhatsApp API integration', 'Automated ready-for-pickup notifications', 'Digital tax invoice PDF with GST compliance'],
      highlight: '100% Paperless & Zero Cost per SMS',
    },
    {
      id: 'driver-dispatch',
      title: 'Driver & Delivery App',
      subtitle: 'Doorstep Pickup & Delivery with Real-Time Routing',
      icon: Truck,
      tag: 'Smart Routes',
      description: 'Equip your delivery staff with our lightweight mobile delivery app. Collect payments via dynamic UPI on the spot, snap bag photos, and confirm drops with customer OTP.',
      benefits: ['Automated delivery route clustering', 'Doorstep payment collection via UPI', 'OTP-verified delivery confirmation'],
      highlight: 'Save 35% Fuel with Route Clustering',
    },
    {
      id: 'defect-camera',
      title: 'Pre-Wash Defect Cam',
      subtitle: 'AI Photographic Proof to End Customer Damage Disputes',
      icon: Camera,
      tag: 'Dispute Shield',
      description: 'Snap instant photos of pre-existing burns, tears, missing buttons, or stubborn turmeric stains when taking the garment. The photo is automatically attached to the WhatsApp receipt.',
      benefits: ['Stops fraudulent damage claims instantly', 'Customer signs off on pre-existing condition', 'Time-stamped photographic audit trail'],
      highlight: 'Reduces Damage Disputes by 92%',
    },
    {
      id: 'multi-branch',
      title: 'Multi-Branch & Factory Hub',
      subtitle: 'Central Plant Hub & Spoke Franchise Operations',
      icon: Building2,
      tag: 'Franchise Ready',
      description: 'Collect clothes at 10 retail counter kiosks, transport them to a central washing factory, and track each batch in transit with live crate barcodes and inter-branch manifests.',
      benefits: ['Centralized inventory & revenue view', 'Retail outlet to central plant transfer manifest', 'Franchise royalty & profit share calculations'],
      highlight: 'Scale from 1 to 50 Outlets Seamlessly',
    },
    {
      id: 'offline-sync',
      title: 'Offline-First Engine',
      subtitle: 'Zero Downtime Even During Power or Internet Outages',
      icon: WifiOff,
      tag: '100% Reliable',
      description: 'Don’t let bad network connections stop your billing counter. Laundrybatch works completely offline, queuing invoices in local secure IndexedDB storage and auto-syncing when back online.',
      benefits: ['Immediate instant response time', 'Zero counter delay during busy festival queues', 'Seamless background sync without user intervention'],
      highlight: 'Zero Loss of Invoices or Data',
    },
  ];

  const currentFeature = features[activeTab];
  const Icon = currentFeature.icon;

  return (
    <section id="features" style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px auto' }}>
          <div className="badge-pill badge-aqua" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} /> Built for Maximum Innovation
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '14px', color: 'var(--text-main)' }}>
            Engineered to Run the <span className="text-gradient">Most Efficient Laundry On Earth</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Every tool and feature was purposefully designed to eliminate lost clothes, stop customer arguments, automate paperless billing, and double your store profit margins.
          </p>
        </div>

        {/* Feature Selector Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '12px',
          marginBottom: '36px'
        }}>
          {features.map((feat, idx) => {
            const TabIcon = feat.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={feat.id}
                onClick={() => setActiveTab(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: isActive ? '1px solid #0d9488' : '1px solid var(--border-light)',
                  background: isActive ? 'linear-gradient(135deg, rgba(13, 148, 136, 0.12) 0%, rgba(2, 132, 199, 0.12) 100%)' : 'var(--bg-main)',
                  color: isActive ? '#0d9488' : 'var(--text-sub)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <TabIcon size={18} color={isActive ? '#0d9488' : 'var(--text-muted)'} />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{feat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel */}
        <div className="glass-panel" style={{
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center',
          backgroundColor: 'var(--bg-main)'
        }}>
          
          {/* Left Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="badge-pill badge-aqua">
                <Icon size={14} /> {currentFeature.tag}
              </span>
            </div>

            <h3 style={{ fontSize: '1.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>
              {currentFeature.title}
            </h3>
            <div style={{ fontSize: '1.05rem', color: '#0d9488', fontWeight: 600, marginBottom: '16px' }}>
              {currentFeature.subtitle}
            </div>

            <p style={{ color: 'var(--text-sub)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {currentFeature.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {currentFeature.benefits.map((benefit, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              background: 'rgba(13, 148, 136, 0.1)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(13, 148, 136, 0.25)',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#0d9488'
            }}>
              <ShieldCheck size={18} />
              <span>Proven Metric: {currentFeature.highlight}</span>
            </div>
          </div>

          {/* Right Visual Interactive Card */}
          <div style={{
            background: 'var(--bg-surface)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-light)',
            padding: '32px',
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '16px',
              marginBottom: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(13, 148, 136, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color="#0d9488" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{currentFeature.title} Module</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Status: Active & Syncing (Cloud v2.4)</div>
                </div>
              </div>
              <span className="badge-pill badge-emerald" style={{ fontSize: '0.7rem' }}>
                Online
              </span>
            </div>

            {/* Mock Visual State depending on activeTab */}
            {activeTab === 0 && (
              <div>
                <div style={{ background: 'var(--bg-main)', padding: '16px', borderRadius: '12px', border: '1px dashed var(--border-light)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>BATCH #LB-9021 • 14 Garments</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Wash Cycle: Delicate Woolens • Drum 3</div>
                    </div>
                    <QrCode size={36} color="#0d9488" />
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Scan any garment to view its entire timeline: Received ➔ Tagged ➔ Washed ➔ Pressed ➔ Packaged ➔ Ready.
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div>
                <div style={{ background: '#075e54', color: 'white', padding: '14px', borderRadius: '12px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>WhatsApp Business Cloud Verified</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.9, marginTop: '4px' }}>
                    "Hello Ananya! Your Dry Cleaning order #LB-7712 is fresh & ready for pickup at our Koramangala store."
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Customer clicks 1 button to approve delivery or pay UPI directly.
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div>
                <div style={{ background: 'var(--bg-main)', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '8px' }}>
                    <span>Driver: <strong>Suresh Kumar (Rider 03)</strong></span>
                    <span style={{ color: '#059669', fontWeight: 700 }}>8/10 Completed</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'var(--border-light)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div style={{ width: '80%', height: '100%', background: '#0d9488' }} />
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Automated turn-by-turn route cluster saves 45 minutes of rider transit time daily.
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div>
                <div style={{ background: 'var(--bg-main)', padding: '16px', borderRadius: '12px', marginBottom: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f59e0b', marginBottom: '6px' }}>
                    ⚠️ Defect Logged on Intake
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Image #IMG-0941.jpg attached to customer order with customer digital agreement.
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Eliminates "you ruined my shirt" complaints before they even start.
                </div>
              </div>
            )}

            {activeTab >= 4 && (
              <div>
                <div style={{ background: 'var(--bg-main)', padding: '16px', borderRadius: '12px', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Cloud Ledger & Central Sync</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Real-time WebSocket connection keeps multi-terminal and multi-store balances synced to the millisecond.
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Zero database conflict locks with CRDT offline state reconciliation.
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
