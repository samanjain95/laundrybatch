import React, { useState } from 'react';
import { 
  Settings, 
  Wrench, 
  Flame, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  FileCheck, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { getAssetUrl } from '../utils/assetUrl';
import { SmartImage } from './SmartImage';

interface MachineCategory {
  id: string;
  name: string;
  capacity: string;
  purpose: string;
  features: string[];
  powerSteam: string;
}

export const MachineryAndProcessSection: React.FC<{ onConsultation: () => void }> = ({ onConsultation }) => {
  const [selectedMachineTab, setSelectedMachineTab] = useState(0);

  const machineryList: MachineCategory[] = [
    {
      id: 'washers',
      name: 'Commercial Front-Load Washer Extractors',
      capacity: '15 kg to 100 kg Batches',
      purpose: 'Heavy-duty continuous wet washing for shirts, linens, curtains, and hotel/hospital contract loads.',
      features: [
        'Heavy SUS304 stainless steel inner & outer drum',
        'Programmable microprocessor with 30 customizable fabric wash cycles',
        'High G-force extraction (350G+) reducing drying time by 45%',
        'Dual hot/cold water inlets with automatic liquid chemical dosing ports',
      ],
      powerSteam: 'Electric / Steam Heating Options • 3-Phase 415V',
    },
    {
      id: 'steam-press',
      name: 'Industrial Vacuum Ironing Tables & Steam Boilers',
      capacity: 'Continuous 800 - 1,200 pcs / day',
      purpose: 'Razor-sharp crease setting for formal suits, trousers, silk sarees, and delicate embellishments without shine marks.',
      features: [
        'Powerful built-in vacuum suction & blow-up air suspension',
        'Thermostatically heated table surface prevents damp moisture condensation',
        'Automatic diesel/electric steam generators with rapid steam recovery',
        'Ergonomic swivel sleeve arm for blazers and intricate pleats',
      ],
      powerSteam: '0.8 kW Vacuum Motor • 4.5 bar Steam Pressure',
    },
    {
      id: 'dry-clean',
      name: 'Fully Sealed Multi-Solvent Dry Cleaning Plants',
      capacity: '12 kg to 25 kg Closed-Circuit',
      purpose: 'Gentle hydrocarbon & eco-solvent cleaning for designer lehengas, pure wool suits, and leather.',
      features: [
        '100% closed-loop ecological solvent recovery with carbon adsorption filters',
        'Distillation system with continuous solvent purification for zero odor',
        'Inverter variable-speed drum drive for zero fabric shrinkage or stretching',
        'Micro-computer touch screen controller with automated safety interlocks',
      ],
      powerSteam: 'Zero Emissions • Meets all Pollution Control Board (PCB) norms',
    },
    {
      id: 'dryers-extractors',
      name: 'Industrial High-Velocity Tumble Dryers',
      capacity: '20 kg to 60 kg High Capacity',
      purpose: 'Rapid gentle drying for bulky towels, comforters, bedsheets, and everyday laundry batches.',
      features: [
        'Axial airflow airflow engineering for rapid moisture removal',
        'Anti-wrinkle auto-reverse drum tumble rotation',
        'Large lint collector filter with easy-slide cleaning tray',
        'Automatic cool-down cycle prevents thermal shock fabric stiffening',
      ],
      powerSteam: 'Gas / Steam / Electric Heating Options',
    },
  ];

  const current = machineryList[selectedMachineTab];

  return (
    <section id="machinery" style={{ padding: '80px 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 48px auto' }}>
          <div className="badge-pill badge-aqua" style={{ marginBottom: '14px' }}>
            <Settings size={14} /> Turnkey Plant Machinery & Engineering
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', color: 'var(--text-main)', marginBottom: '16px' }}>
            Commercial Machinery & <span className="text-gradient">Complete Plant Setup</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We don't just give you software. Laundrybatch engineers your entire processing plant from machinery procurement and steam piping to AMC maintenance and factory layout planning.
          </p>
        </div>

        {/* Big Machinery Photo Showcase Card */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          marginBottom: '48px',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--border-light)'
        }}>
          <SmartImage
            src={getAssetUrl('images/machinery_facility.jpg')}
            alt="Industrial commercial laundry machinery facility"
            fallbackTitle="Commercial Laundry Machinery Plant"
            style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
          />

          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(11, 19, 41, 0.95) 0%, rgba(11, 19, 41, 0.4) 60%, transparent 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: 'clamp(14px, 4vw, 32px)'
          }}>
            <div style={{ maxWidth: '680px', color: '#ffffff' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '999px',
                background: 'rgba(45, 212, 191, 0.25)',
                color: '#2dd4bf',
                fontSize: '0.78rem',
                fontWeight: 700,
                marginBottom: '10px'
              }}>
                <Building2 size={14} /> Full Turnkey Execution
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 8px 0' }}>
                Complete Central Plant & Retail Outlet Setup Under One Roof
              </h3>
              <p style={{ fontSize: '0.92rem', opacity: 0.9, lineHeight: 1.5, margin: 0 }}>
                From 500 kg/day retail laundromats to 5,000 kg/day industrial central processing hubs — we provide machinery sizing, electrical design, water filtration, and on-site operator training.
              </p>
            </div>
          </div>
        </div>

        {/* Machinery Categories Selector & Technical Specs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
          marginBottom: '32px'
        }}>
          {machineryList.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setSelectedMachineTab(idx)}
              style={{
                padding: '16px 18px',
                borderRadius: '12px',
                border: selectedMachineTab === idx ? '2px solid #0d9488' : '1px solid var(--border-light)',
                background: selectedMachineTab === idx ? 'rgba(13, 148, 136, 0.08)' : 'var(--bg-main)',
                color: selectedMachineTab === idx ? '#0d9488' : 'var(--text-main)',
                fontWeight: selectedMachineTab === idx ? 800 : 600,
                fontSize: '0.88rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s'
              }}
            >
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                Category 0{idx + 1}
              </div>
              <div>{m.name.split(' ')[0]} {m.name.split(' ')[1]}</div>
            </button>
          ))}
        </div>

        {/* Active Machine Spec Sheet */}
        <div className="glass-panel" style={{
          padding: '36px',
          backgroundColor: 'var(--bg-main)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase', marginBottom: '8px' }}>
              Capacity: {current.capacity}
            </div>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '12px' }}>
              {current.name}
            </h3>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
              {current.purpose}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {current.features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-light)',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '0.82rem',
              color: 'var(--text-muted)'
            }}>
              ⚡ <strong>Utility Requirements:</strong> {current.powerSteam}
            </div>
          </div>

          {/* Plant Setup Services Box */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            borderRadius: '16px',
            padding: '28px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h4 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '16px' }}>
              Our 4-Stage Turnkey Plant Process:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0d9488', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                  1
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Plant CAD Layout & Load Sizing</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Workflow design separating dirty intake from clean dispatch zones.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0d9488', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                  2
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Machinery Delivery & Commissioning</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Full installation of steam lines, water softening plant & electrical panels.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0d9488', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                  3
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Staff Wash Chemistry Training</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Hands-on spot removal, wash formulas, and machinery maintenance SOPs.</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0d9488', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                  4
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>Annual AMC & Spare Parts Guarantee</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Local service engineers dispatched within 12 hours to avoid downtime.</div>
                </div>
              </div>
            </div>

            <button
              onClick={onConsultation}
              className="btn-primary"
              style={{ width: '100%', padding: '12px', fontSize: '0.92rem' }}
            >
              <span>Get Free Machinery & Plant Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
