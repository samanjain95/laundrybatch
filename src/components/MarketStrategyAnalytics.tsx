import React, { useState } from 'react';
import { 
  TrendingUp, 
  MapPin, 
  BarChart3, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  PieChart, 
  Users, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export const MarketStrategyAnalytics: React.FC<{ onConsultStrategy: () => void }> = ({ onConsultStrategy }) => {
  const [storeType, setStoreType] = useState<'residential' | 'techpark' | 'mixed'>('residential');
  const [targetDailyHouseholds, setTargetDailyHouseholds] = useState(2500);

  // Strategy modeling metrics
  const estimatedPenetration = storeType === 'techpark' ? 0.08 : storeType === 'residential' ? 0.05 : 0.06;
  const activeCustomerBase = Math.round(targetDailyHouseholds * estimatedPenetration);
  const avgOrderFrequencyPerMonth = storeType === 'techpark' ? 3.2 : 2.4;
  const monthlyProjectedOrders = Math.round(activeCustomerBase * avgOrderFrequencyPerMonth);
  const estimatedMonthlyGrossRev = Math.round(monthlyProjectedOrders * (storeType === 'techpark' ? 340 : 260));

  return (
    <section id="strategy-analytics" style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px auto' }}>
          <div className="badge-pill badge-aqua" style={{ marginBottom: '14px' }}>
            <TrendingUp size={14} /> Market Strategy & Predictive Analytics
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', color: 'var(--text-main)', marginBottom: '16px' }}>
            Predictive Business Planning <span className="text-gradient">Before You Invest</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Most laundry startups fail because they pick the wrong machinery, struggle with local catchment demand, or face endless operational bottlenecks. Laundrybatch gives you proven predictive strategy models.
          </p>
        </div>

        {/* 2-Column Strategy Modeling Hub */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'stretch'
        }}>
          
          {/* Catchment & Demand Predictor */}
          <div className="glass-panel" style={{ padding: '36px', backgroundColor: 'var(--bg-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d9488', fontWeight: 800, fontSize: '0.82rem', marginBottom: '10px' }}>
              <MapPin size={16} />
              <span>Catchment Feasibility Analyzer</span>
            </div>

            <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', marginBottom: '16px' }}>
              Select Catchment Demographics:
            </h3>

            {/* Location Type Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '24px' }}>
              {[
                { id: 'residential', label: 'Gated Societies', desc: 'Family & heavy linens' },
                { id: 'techpark', label: 'Tech Park / IT Corridor', desc: 'Bachelors & suits' },
                { id: 'mixed', label: 'Mixed Commercial', desc: 'Dry clean & retail' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setStoreType(t.id as any)}
                  style={{
                    padding: '12px 10px',
                    borderRadius: '10px',
                    border: storeType === t.id ? '2px solid #0d9488' : '1px solid var(--border-light)',
                    background: storeType === t.id ? 'rgba(13, 148, 136, 0.1)' : 'var(--bg-surface)',
                    color: storeType === t.id ? '#0d9488' : 'var(--text-main)',
                    fontWeight: storeType === t.id ? 800 : 600,
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div>{t.label}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px' }}>{t.desc}</div>
                </button>
              ))}
            </div>

            {/* Slider: Target Household Radius */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                <span>Households within 3 km Radius:</span>
                <span style={{ color: '#0d9488', fontSize: '1.05rem' }}>{targetDailyHouseholds.toLocaleString()} homes</span>
              </div>
              <input
                type="range"
                min="500"
                max="8000"
                step="250"
                value={targetDailyHouseholds}
                onChange={(e) => setTargetDailyHouseholds(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#0d9488' }}
              />
            </div>

            {/* Output Forecast Box */}
            <div style={{ background: 'var(--bg-surface)', padding: '20px', borderRadius: '14px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>
                Predictive Catchment Forecast:
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Projected Active Customers</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-main)' }}>{activeCustomerBase} families</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Monthly Projected Orders</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#0d9488' }}>{monthlyProjectedOrders.toLocaleString()} orders</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '12px', marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)', fontWeight: 600 }}>Estimated Monthly Revenue:</span>
                <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#059669' }}>₹{estimatedMonthlyGrossRev.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Turnkey Roadmap Blueprint */}
          <div className="glass-panel" style={{ padding: '36px', backgroundColor: 'var(--bg-main)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0284c7', fontWeight: 800, fontSize: '0.82rem', marginBottom: '10px' }}>
                <Target size={16} />
                <span>Turnkey Laundry Launch Roadmap</span>
              </div>

              <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', marginBottom: '16px' }}>
                Zero Guesswork Execution Model:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                    1
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-main)' }}>Location Catchment Audit</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>We inspect power loads, water TDS, drainage, and pedestrian access.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                    2
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-main)' }}>Machinery Procurement & Piping</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Heavy washers, vacuum ironing tables, and steam lines installed with 1-year AMC.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                    3
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-main)' }}>Raw Materials Supply Stocking</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Initial 60-day stock of eco detergents, stain spotters, heat-seal QR tags, and bags.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0284c7', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                    4
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-main)' }}>Interactive CRM & Staff Training</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Intake defect protection, WhatsApp receipts, driver app, and 8-language setup.</div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onConsultStrategy}
              className="btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '0.94rem' }}
            >
              <span>Book Turnkey Business Strategy Session</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
