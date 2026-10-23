import React, { useState } from 'react';
import { 
  FlaskConical, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Tag, 
  Droplets, 
  Award, 
  Package, 
  Check, 
  Eye, 
  RotateCw,
  MessageCircle
} from 'lucide-react';

interface ChemicalProduct {
  id: string;
  name: string;
  category: 'Wash Detergents' | 'Fabric Conditioners' | 'Stain Spotters' | 'Dry Clean Solvents';
  description: string;
  activeBioEnzyme: string;
  phLevel: string;
  dilutionRatio: string;
  certifications: string[];
  barrelSizes: string[];
}

export const WhiteLabelChemicalsSection: React.FC<{ onSampleKitRequest: () => void }> = ({ onSampleKitRequest }) => {
  // Interactive White-Label Bottle Customizer State
  const [customBrandName, setCustomBrandName] = useState('BrightCare');
  const [selectedFormula, setSelectedFormula] = useState('Bio-Enzyme Liquid Detergent');
  const [selectedFragrance, setSelectedFragrance] = useState('Fresh Linen');
  const [selectedSize, setSelectedSize] = useState('20 Liters');
  const [bottleColor, setBottleColor] = useState('#0d9488'); // Teal

  const chemicalProducts: ChemicalProduct[] = [
    {
      id: '1',
      name: 'BatchPro Bio-Enzymatic Concentrated Detergent',
      category: 'Wash Detergents',
      description: 'Commercial 5-enzyme wash formula that melts away oil, food spills, collar dirt, and turmeric without fading colors or harming delicate fabrics.',
      activeBioEnzyme: 'Protease, Amylase, Lipase & Plant Surfactants',
      phLevel: 'Neutral pH 7.2 (Safe for Silks, Wools & Linens)',
      dilutionRatio: '15ml to 20ml per 10 kg Dry Wash Load',
      certifications: ['Eco-Friendly Base', '100% Biodegradable', 'Zero Harmful Phosphates'],
      barrelSizes: ['5L Can', '20L Can', '50L Drum', '200L Barrel'],
    },
    {
      id: '2',
      name: 'BatchSoft Micro-Capsule Fabric Softener',
      category: 'Fabric Conditioners',
      description: 'Luxury fabric conditioner that leaves clothes feeling fluffy, soft, and smelling like a high-end luxury hotel for up to 21 days.',
      activeBioEnzyme: 'Plant-Based Softening Agents & Gentle Aroma',
      phLevel: 'Mild Balanced pH 5.5 (Neutralizes Hard Water)',
      dilutionRatio: '10ml to 15ml per 10 kg Dry Wash Load',
      certifications: ['Hypoallergenic (Safe for Babies)', 'Anti-Static Formula'],
      barrelSizes: ['5L Can', '20L Can', '50L Drum'],
    },
    {
      id: '3',
      name: 'BatchSpot Heavy-Duty 7-Stain Spotting Drops',
      category: 'Stain Spotters',
      description: 'Pre-wash concentrated drop formula for collar grime, ballpoint pen ink, cooking oil, and blood without color fading.',
      activeBioEnzyme: 'Targeted Enzyme Spotting Drops',
      phLevel: 'Fabric-Safe Neutral Compound',
      dilutionRatio: 'Apply 3 drops directly onto dry stain, brush gently',
      certifications: ['Works in 30 Seconds', 'Safe on Cotton, Silk & Poly'],
      barrelSizes: ['500ml Precision Dropper Bottle', '5L Refill Jar'],
    },
    {
      id: '4',
      name: 'EcoSolv Gentle Hydrocarbon Dry-Clean Solvent',
      category: 'Dry Clean Solvents',
      description: 'Ultra-pure eco-friendly dry cleaning fluid for sherwanis, wedding lehengas, pure wool suits, and designer gowns without solvent smell.',
      activeBioEnzyme: 'Zero Perchloroethylene, Pure Isoparaffin',
      phLevel: 'Neutral Hydrocarbon Solvent',
      dilutionRatio: 'Direct fill into dry-clean recovery plant',
      certifications: ['Zero Toxic Residue', 'Leaves Zero Chemical Smell'],
      barrelSizes: ['20L Sealed Can', '200L Factory Barrel'],
    },
  ];

  const colorOptions = [
    { name: 'Fresh Teal', hex: '#0d9488' },
    { name: 'Sky Blue', hex: '#0284c7' },
    { name: 'Royal Emerald', hex: '#059669' },
    { name: 'Clean Violet', hex: '#7c3aed' },
  ];

  return (
    <section id="white-label-chemicals" style={{
      padding: '76px 0',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease, color 0.25s ease'
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        {/* Header */}
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
            <FlaskConical size={14} /> Factory Direct Chemicals & Custom Branding
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
            Put Your Own Shop Name on <span className="text-gradient">Detergent Bottles</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We manufacture commercial-grade laundry detergents in our certified plant. Buy at wholesale factory prices for your own shop washers, or sell them to your retail customers under your own custom brand label!
          </p>
        </div>

        {/* Interactive White-Label Bottle Customizer Studio */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '24px',
          padding: '36px',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center',
          marginBottom: '50px'
        }}>
          
          {/* Customizer Controls */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d9488', fontWeight: 800, fontSize: '0.82rem', marginBottom: '8px' }}>
              <Sparkles size={16} />
              <span>Interactive Bottle Label Designer</span>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              See Your Store's Name on Real Bottles
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '22px' }}>
              Type your laundry store name below to preview your custom branded detergent container. Low minimum order starting at just 50 Liters.
            </p>

            {/* 1. Brand Name Input */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-sub)', display: 'block', marginBottom: '6px' }}>
                Your Laundry Shop Name on Label:
              </label>
              <input
                type="text"
                value={customBrandName}
                onChange={(e) => setCustomBrandName(e.target.value)}
                placeholder="e.g. CleanExpress, Sparkle Care, QuickWash"
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-main)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  outline: 'none',
                }}
              />
            </div>

            {/* 2. Formula Selection */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-sub)', display: 'block', marginBottom: '6px' }}>
                Select Chemical Formula:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Bio-Enzyme Liquid Detergent', 'Micro-Capsule Fabric Softener', 'Gentle Silk & Wool Shampoo'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFormula(f)}
                    style={{
                      padding: '7px 12px',
                      borderRadius: '8px',
                      fontSize: '0.76rem',
                      fontWeight: selectedFormula === f ? 800 : 500,
                      border: selectedFormula === f ? '2px solid #0d9488' : '1px solid var(--border-light)',
                      background: selectedFormula === f ? 'rgba(13, 148, 136, 0.12)' : 'var(--bg-main)',
                      color: selectedFormula === f ? '#0d9488' : 'var(--text-sub)',
                      cursor: 'pointer'
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Fragrance Selection */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-sub)', display: 'block', marginBottom: '6px' }}>
                Select Luxury Fragrance:
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Fresh Linen', 'Lavender Mist', 'Ocean Breeze', 'Royal Oud'].map((frag) => (
                  <button
                    key={frag}
                    onClick={() => setSelectedFragrance(frag)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      fontSize: '0.76rem',
                      fontWeight: selectedFragrance === frag ? 800 : 500,
                      border: selectedFragrance === frag ? '2px solid #0d9488' : '1px solid var(--border-light)',
                      background: selectedFragrance === frag ? 'rgba(13, 148, 136, 0.12)' : 'var(--bg-main)',
                      color: selectedFragrance === frag ? '#0d9488' : 'var(--text-sub)',
                      cursor: 'pointer'
                    }}
                  >
                    🌸 {frag}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Color Swatches */}
            <div style={{ marginBottom: '22px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-sub)', display: 'block', marginBottom: '6px' }}>
                Label Accent Color:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {colorOptions.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => setBottleColor(c.hex)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: c.hex,
                      border: bottleColor === c.hex ? '3px solid var(--text-main)' : '2px solid var(--border-light)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                      cursor: 'pointer'
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={onSampleKitRequest}
                className="btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.92rem' }}
              >
                <span>Request Sample Batch Kit</span>
                <ArrowRight size={16} />
              </button>
              <a
                href={`https://wa.me/917389327066?text=Hi%20Laundrybatch!%20I%20want%20to%20order%20white-label%20detergent%20for%20my%20store%20${encodeURIComponent(customBrandName)}.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  background: 'var(--bg-surface)',
                  border: '2px solid #25D366',
                  color: '#15803d',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={17} color="#25D366" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Bottle Preview Box */}
          <div style={{
            background: 'var(--bg-main)',
            borderRadius: '20px',
            border: '1px solid var(--border-light)',
            padding: '36px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '440px',
            boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.03)'
          }}>
            <div style={{
              position: 'absolute',
              top: '14px',
              left: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.74rem',
              fontWeight: 800,
              color: '#0d9488',
              background: 'var(--bg-surface)',
              padding: '4px 10px',
              borderRadius: '999px',
              border: '1px solid var(--border-light)'
            }}>
              <Eye size={12} /> Live Preview
            </div>

            {/* Bottle Mockup */}
            <div style={{
              width: '210px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.15))'
            }}>
              {/* Bottle Cap */}
              <div style={{
                width: '60px',
                height: '24px',
                backgroundColor: bottleColor,
                borderRadius: '6px 6px 0 0',
                border: '2px solid rgba(0,0,0,0.1)'
              }} />

              {/* Bottle Neck */}
              <div style={{
                width: '40px',
                height: '16px',
                backgroundColor: 'var(--bg-surface)',
                borderLeft: '2px solid var(--border-medium)',
                borderRight: '2px solid var(--border-medium)',
              }} />

              {/* Jug Body Container */}
              <div style={{
                width: '100%',
                background: 'var(--bg-surface)',
                borderRadius: '18px',
                border: '2px solid var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px 16px',
                position: 'relative',
                boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.04)'
              }}>
                {/* The Custom Store Label */}
                <div style={{
                  width: '100%',
                  background: 'var(--bg-main)',
                  color: 'var(--text-main)',
                  borderRadius: '12px',
                  padding: '16px 12px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
                  textAlign: 'center',
                  borderTop: `6px solid ${bottleColor}`,
                  border: '1px solid var(--border-light)',
                  position: 'relative'
                }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 800, color: bottleColor, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    PROFESSIONAL LAUNDRY FORMULA
                  </div>
                  
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, margin: '6px 0 2px 0', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
                    {customBrandName || 'Your Store Brand'}
                  </div>

                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
                    {selectedFormula}
                  </div>

                  <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', padding: '5px', borderRadius: '6px', fontSize: '0.68rem', color: 'var(--text-sub)', marginBottom: '8px' }}>
                    Aroma: <strong>{selectedFragrance}</strong> • Vol: <strong>{selectedSize}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', fontSize: '0.6rem', color: '#059669', fontWeight: 700 }}>
                    <span>✓ 100% Bio-Enzyme</span>
                    <span>✓ Safe for Clothes</span>
                  </div>
                </div>

                {/* Handle Cutout */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '12px',
                  width: '20px',
                  height: '48px',
                  borderRadius: '10px',
                  border: '2px solid var(--border-medium)',
                  background: 'var(--bg-main)'
                }} />
              </div>

              {/* Bottom Spec Footer */}
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '14px', fontWeight: 600 }}>
                Manufactured by Laundrybatch Labs • Certified Safe for All Washers
              </div>
            </div>
          </div>

        </div>

        {/* 4 Flagship Formulations Catalog */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '44px'
        }}>
          {chemicalProducts.map((p) => (
            <div
              key={p.id}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.7rem', color: '#0d9488', fontWeight: 700, background: 'rgba(13, 148, 136, 0.1)', padding: '3px 10px', borderRadius: '999px', border: '1px solid rgba(13, 148, 136, 0.25)' }}>
                  {p.category}
                </span>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', margin: '12px 0 8px 0', lineHeight: 1.35 }}>
                  {p.name}
                </h3>

                <p style={{ color: 'var(--text-sub)', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '14px' }}>
                  {p.description}
                </p>

                <div style={{ background: 'var(--bg-main)', padding: '12px', borderRadius: '10px', fontSize: '0.76rem', color: 'var(--text-sub)', marginBottom: '14px', display: 'flex', flexDirection: 'column', gap: '5px', border: '1px solid var(--border-light)' }}>
                  <div>🧪 <strong>Actives:</strong> {p.activeBioEnzyme}</div>
                  <div>⚖️ <strong>pH Balance:</strong> {p.phLevel}</div>
                  <div>💧 <strong>Dosing:</strong> {p.dilutionRatio}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                  {p.certifications.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>
                      <CheckCircle2 size={14} />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>MOQ: 50L (White-Label)</span>
                <span style={{ fontSize: '0.8rem', color: '#0d9488', fontWeight: 800 }}>Factory Direct Rates</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner: Sample Kit */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '18px',
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Want to Test Our Chemical Formulas First?
            </div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-sub)', marginTop: '4px' }}>
              Order a <strong>1-Liter Trial Sample Kit</strong> delivered to your store. Test stain removal on your real shop clothes!
            </div>
          </div>

          <button
            onClick={onSampleKitRequest}
            className="btn-primary"
            style={{ padding: '13px 26px', fontSize: '0.94rem' }}
          >
            <span>Request Sample Chemical Kit</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};
