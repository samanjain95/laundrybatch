import React, { useState } from 'react';
import { 
  Package, 
  Droplet, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Truck, 
  Tag, 
  ShieldCheck, 
  Calculator,
  MessageCircle,
  Check
} from 'lucide-react';

export const RawMaterialsSupplySection: React.FC<{ onOrderSupplies: () => void }> = ({ onOrderSupplies }) => {
  const [dailyGarments, setDailyGarments] = useState(120);

  // Supply consumption calculations per garment
  const monthlyDetergentLiters = Math.round((dailyGarments * 30 * 0.018));
  const monthlyStainKitUnits = Math.max(1, Math.round(dailyGarments / 150));
  const monthlyQrTags = dailyGarments * 30;
  const monthlyPolyRollKg = Math.round((dailyGarments * 30) / 120);
  const estimatedSupplyBill = Math.round((monthlyDetergentLiters * 140) + (monthlyStainKitUnits * 1800) + (monthlyQrTags * 0.45) + (monthlyPolyRollKg * 220));

  const materialCategories = [
    {
      title: 'Commercial Laundry Detergents & Boosters',
      icon: Droplet,
      badge: 'Factory Direct 20L / 50L',
      items: [
        'High-Efficiency Concentrated Liquid Wash Detergent (Can & Drum)',
        'Optical Brightener & Color-Safe Oxygen Bleach Powder',
        'Fabric Softener & Anti-Static Neutralizer (Leaves fresh linen scent)',
        'Alkaline Grease Remover for heavy restaurant/kitchen linens',
      ],
    },
    {
      title: 'Professional 7-Bottle Stain Spotting Kit',
      icon: Sparkles,
      badge: 'Removes 99% of Stains',
      items: [
        'Spotter A: Tannin (Tea, Coffee, Red Wine, Juices)',
        'Spotter B: Protein (Blood, Egg, Dairy, Collar Dirt, Sweat)',
        'Spotter C: Oil & Grease (Cooking Oil, Butter, Lipstick, Polish)',
        'Spotter D: Ink & Color Bleed (Ballpoint pen, Marker, Dye Bleed)',
      ],
    },
    {
      title: 'Heat-Seal Textile QR Tags & Printer Rolls',
      icon: Tag,
      badge: 'Survives 200°C Steam',
      items: [
        'Waterproof Poly-Cotton Heat-Seal Tag Rolls (1,000 tags/roll)',
        'Direct Thermal Paper Rolls (BPA-Free, 58mm & 80mm)',
        'Thermal Transfer Ribbons for industrial barcode printers',
        'Garment Marking Textile Inks & Self-Adhesive Customer Slips',
      ],
    },
    {
      title: 'Protective Packaging Rolls & Hangers',
      icon: Package,
      badge: 'B2B Wholesale Bundles',
      items: [
        'High-Clarity Continuous Poly Tubing Rolls for shirt packing',
        'Heavy-Duty Wooden & Plastic Hangers with Trouser Bars',
        'Breathable Non-Woven Suit & Sherwani Zipper Garment Bags',
        'Water-Resistant Laundry Transport Bags for Home Delivery Drivers',
      ],
    },
  ];

  return (
    <section id="raw-materials" style={{
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
            <Package size={14} /> Full Raw Materials & Consumables Supply Chain
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
            Never Run Out of <span className="text-gradient">Chemicals, Tags, or Packaging</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We are your direct wholesale supplier. Get commercial eco-detergents, professional stain spotters, heat-seal QR rolls, and packaging materials delivered straight to your door at factory prices.
          </p>
        </div>

        {/* 4 Materials Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginBottom: '48px'
        }}>
          {materialCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = '#0d9488';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(13, 148, 136, 0.12)',
                      border: '1px solid rgba(13, 148, 136, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0d9488'
                    }}>
                      <CatIcon size={20} />
                    </div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      background: 'var(--bg-main)',
                      color: '#0d9488',
                      border: '1px solid var(--border-light)',
                      padding: '3px 10px',
                      borderRadius: '999px'
                    }}>
                      {cat.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '14px' }}>
                    {cat.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    {cat.items.map((it, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--text-sub)' }}>
                        <Check size={14} color="#0d9488" style={{ marginTop: '3px', flexShrink: 0 }} />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: '#0d9488',
                  fontWeight: 700
                }}>
                  <span>In Stock • Ready to Dispatch</span>
                  <Truck size={15} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Monthly Consumables Budget Calculator */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-light)',
          borderRadius: '20px',
          padding: '36px',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          {/* Slider & Input */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d9488', fontWeight: 800, fontSize: '0.82rem', marginBottom: '8px' }}>
              <Calculator size={16} />
              <span>Interactive Supplies Cost Estimator</span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
              Calculate Your Monthly Supplies Requirement
            </h3>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '24px' }}>
              Slide to your average daily garments washed or dry-cleaned. See exact chemical, tag, and packaging requirements with wholesale factory cost.
            </p>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-sub)' }}>Daily Garments Processed:</span>
                <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0d9488' }}>{dailyGarments} pcs/day</span>
              </div>
              <input
                type="range"
                min="30"
                max="800"
                step="10"
                value={dailyGarments}
                onChange={(e) => setDailyGarments(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#0d9488',
                  cursor: 'pointer',
                  height: '8px',
                  borderRadius: '4px',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                <span>30 pcs (Small Shop)</span>
                <span>350 pcs (Busy Store)</span>
                <span>800 pcs (Commercial Hub)</span>
              </div>
            </div>
          </div>

          {/* Breakdown Box */}
          <div style={{
            background: 'var(--bg-main)',
            borderRadius: '16px',
            border: '1px solid var(--border-light)',
            padding: '24px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
              Estimated Monthly Supplies Needed ({dailyGarments * 30} garments/mo):
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
              <div style={{ background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Liquid Detergent:</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>~{monthlyDetergentLiters} Liters</div>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Heat-Seal Tags:</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{monthlyQrTags.toLocaleString()} tags</div>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Poly Packaging:</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>~{monthlyPolyRollKg} kg rolls</div>
              </div>
              <div style={{ background: 'var(--bg-surface)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Stain Spotter Kits:</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{monthlyStainKitUnits} Set (7 btls)</div>
              </div>
            </div>

            <div style={{
              background: 'rgba(13, 148, 136, 0.1)',
              border: '1px solid rgba(13, 148, 136, 0.3)',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px'
            }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#0d9488', fontWeight: 700 }}>Factory Wholesale Total:</div>
                <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#0d9488' }}>
                  ₹{estimatedSupplyBill.toLocaleString()} <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-sub)' }}>/ month</span>
                </div>
              </div>
              <span style={{ fontSize: '0.76rem', background: 'var(--bg-surface)', color: '#0d9488', fontWeight: 800, padding: '4px 10px', borderRadius: '999px', border: '1px solid rgba(13, 148, 136, 0.3)' }}>
                Save 30% vs Retail
              </span>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={onOrderSupplies}
                className="btn-primary"
                style={{ flex: 1, padding: '11px', fontSize: '0.9rem', borderRadius: '10px' }}
              >
                <span>Order Supplies</span>
                <ArrowRight size={15} />
              </button>
              <a
                href="https://wa.me/917389327066?text=Hi%20Laundrybatch!%20I%20want%20to%20order%20wholesale%20detergents,%20heat%20tags,%20and%20hangers."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '11px 16px',
                  borderRadius: '10px',
                  background: 'var(--bg-surface)',
                  border: '1px solid #25D366',
                  color: '#15803d',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={16} color="#25D366" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
