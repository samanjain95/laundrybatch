import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Printer, 
  Share2, 
  QrCode, 
  CheckCircle2, 
  Sparkles, 
  Smartphone, 
  Layers, 
  Clock, 
  Leaf, 
  Tag, 
  Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GarmentSelection {
  id: string;
  name: string;
  service: 'Dry Clean' | 'Wash & Fold' | 'Steam Iron';
  price: number;
  qrTag: string;
  defectNote?: string;
}

export const InteractivePOSDemo: React.FC = () => {
  const [customerName, setCustomerName] = useState('Rahul Verma');
  const [customerPhone, setCustomerPhone] = useState('+91 98765 43210');
  const [paymentStatus, setPaymentStatus] = useState<'Unpaid' | 'Paid UPI' | 'Partial'>('Paid UPI');
  const [urgentDelivery, setUrgentDelivery] = useState(false);
  
  const [items, setItems] = useState<GarmentSelection[]>([
    { id: '1', name: "Men's Formal Shirt", service: 'Dry Clean', price: 80, qrTag: 'LB-SH-4091' },
    { id: '2', name: 'Designer Silk Saree', service: 'Dry Clean', price: 220, qrTag: 'LB-SR-8812', defectNote: 'Mild pallu fringe pull noted' },
    { id: '3', name: 'Cotton Trousers', service: 'Steam Iron', price: 20, qrTag: 'LB-TR-1029' },
  ]);

  const [orderCompleted, setOrderCompleted] = useState(false);
  const [whatsappSent, setWhatsappSent] = useState(false);

  const availablePresets = [
    { name: 'Suit (2-Piece)', service: 'Dry Clean' as const, price: 280, prefix: 'LB-ST' },
    { name: 'Double Quilt/Blanket', service: 'Dry Clean' as const, price: 350, prefix: 'LB-BK' },
    { name: 'Cotton T-Shirt', service: 'Wash & Fold' as const, price: 20, prefix: 'LB-TS' },
    { name: 'Sneakers/Shoes', service: 'Dry Clean' as const, price: 249, prefix: 'LB-SN' },
    { name: 'Curtain Panel', service: 'Dry Clean' as const, price: 160, prefix: 'LB-CT' },
  ];

  const addItem = (preset: typeof availablePresets[0]) => {
    const randomTag = `${preset.prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newItem: GarmentSelection = {
      id: Date.now().toString(),
      name: preset.name,
      service: preset.service,
      price: preset.price,
      qrTag: randomTag,
    };
    setItems([...items, newItem]);
    setOrderCompleted(false);
  };

  const removeItem = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const subtotal = items.reduce((acc, curr) => acc + curr.price, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST
  const expressFee = urgentDelivery ? 100 : 0;
  const grandTotal = subtotal + gst + expressFee;

  const handleCreateOrder = () => {
    setOrderCompleted(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0d9488', '#0284c7', '#10b981', '#38bdf8'],
      });
    } catch {
      // ignore
    }
  };

  const handleSimulateWhatsApp = () => {
    setWhatsappSent(true);
    setTimeout(() => setWhatsappSent(false), 3500);
  };

  return (
    <section id="demo-studio" style={{ padding: '80px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
          <div className="badge-pill badge-aqua" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} /> Interactive Live Studio
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '14px', color: 'var(--text-main)' }}>
            Experience the <span className="text-gradient">Laundrybatch POS Counter</span> in Real-Time
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Click items below to create an order, generate garment QR tags, and watch how digital WhatsApp paperless receipts replace costly carbon thermal rolls in seconds.
          </p>
        </div>

        {/* POS Playground Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}>
          
          {/* Column 1: Order Desk / Garment Builder */}
          <div className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Layers size={20} color="#0d9488" /> Order Creation Counter
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Order ID: #LB-88429 • Counter 01</span>
              </div>
              <span className="badge-pill badge-emerald" style={{ fontSize: '0.75rem' }}>
                <CheckCircle2 size={12} /> Live POS Active
              </span>
            </div>

            {/* Customer Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Customer Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem',
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  WhatsApp Phone
                </label>
                <input
                  type="text"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem',
                  }}
                />
              </div>
            </div>

            {/* Quick Add Presets */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '8px' }}>
                + Add Garments to Basket:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {availablePresets.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => addItem(preset)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '6px 12px',
                      background: 'var(--bg-main)',
                      border: '1px dashed var(--primary-500)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--text-main)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary-100)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-main)')}
                  >
                    <Plus size={13} color="#0d9488" />
                    <span>{preset.name}</span>
                    <span style={{ color: '#0d9488' }}>(₹{preset.price})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Garments List in Current Order */}
            <div style={{ border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '12px', marginBottom: '20px', maxHeight: '250px', overflowY: 'auto' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                Scanned Garments ({items.length})
              </div>
              {items.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  No garments added yet. Click items above to add!
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 8px',
                      borderBottom: '1px solid var(--border-light)',
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-main)' }}>
                        {item.name}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          background: 'rgba(13, 148, 136, 0.12)',
                          color: '#0d9488',
                          padding: '2px 6px',
                          borderRadius: '4px'
                        }}>
                          🏷️ {item.qrTag}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {item.service}
                        </span>
                      </div>
                      {item.defectNote && (
                        <div style={{ fontSize: '0.7rem', color: '#f59e0b', marginTop: '2px' }}>
                          ⚠️ Note: {item.defectNote}
                        </div>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                        ₹{item.price}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px' }}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Urgent & Payment Options */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', cursor: 'pointer', color: 'var(--text-sub)' }}>
                <input
                  type="checkbox"
                  checked={urgentDelivery}
                  onChange={(e) => setUrgentDelivery(e.target.checked)}
                />
                <Clock size={14} color="#f59e0b" /> Express 12-Hour Rush (+₹100)
              </label>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Payment:</span>
                <select
                  value={paymentStatus}
                  onChange={(e) => setPaymentStatus(e.target.value as any)}
                  style={{
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.8rem',
                  }}
                >
                  <option value="Paid UPI">Paid UPI</option>
                  <option value="Unpaid">Unpaid / On Delivery</option>
                  <option value="Partial">Partial Advance</option>
                </select>
              </div>
            </div>

            {/* Total & Action Button */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-light)',
              marginBottom: '16px'
            }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Total Amount:</span>
                <span style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0d9488' }}>
                  ₹{grandTotal}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginLeft: '6px' }}>
                  (Incl. ₹{gst} GST)
                </span>
              </div>

              <button
                onClick={handleCreateOrder}
                className="btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.95rem' }}
              >
                <CheckCircle2 size={18} />
                <span>Punch & Generate</span>
              </button>
            </div>

            {/* Eco Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              padding: '10px 14px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.78rem',
              color: '#059669'
            }}>
              <Leaf size={16} />
              <span><strong>Paperless Milestone:</strong> Order saved 1 thermal paper slip and 0.8g chemical BPA emission.</span>
            </div>

          </div>

          {/* Column 2: Live Digital Thermal Slip & QR Tag Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* The Thermal Slip */}
            <div className="thermal-bill printable-area">
              <div style={{ textAlign: 'center', borderBottom: '1px dashed #9ca3af', paddingBottom: '12px', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
                  LAUNDRYBATCH STUDIO
                </h4>
                <div style={{ fontSize: '0.72rem', color: '#4b5563', marginTop: '2px' }}>
                  Connaught Place, New Delhi • GST: 07ABCDE1234F1Z5
                </div>
                <div style={{ fontSize: '0.72rem', color: '#4b5563' }}>
                  Ph: +91 96662 11137 • hello@laundrybatch.com
                </div>
              </div>

              <div style={{ fontSize: '0.75rem', marginBottom: '10px', lineHeight: 1.5 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Order: <strong>#LB-88429</strong></span>
                  <span>Date: <strong>06/10/2026</strong></span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Customer: <strong>{customerName}</strong></span>
                  <span>Ph: <strong>{customerPhone}</strong></span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Status: <strong>{paymentStatus}</strong></span>
                  <span>Delivery: <strong>08/10/2026 6PM</strong></span>
                </div>
              </div>

              {/* Items Table */}
              <div style={{ borderTop: '1px dashed #9ca3af', borderBottom: '1px dashed #9ca3af', padding: '8px 0', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.72rem', marginBottom: '4px' }}>
                  <span>ITEM / TAG</span>
                  <span>SVC</span>
                  <span>AMT</span>
                </div>
                {items.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', padding: '2px 0' }}>
                    <div style={{ maxWidth: '170px' }}>
                      <div>{item.name}</div>
                      <div style={{ fontSize: '0.65rem', color: '#4b5563' }}>[{item.qrTag}]</div>
                    </div>
                    <span style={{ fontSize: '0.68rem' }}>{item.service.slice(0, 4)}</span>
                    <span style={{ fontWeight: 600 }}>₹{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div style={{ fontSize: '0.75rem', lineHeight: 1.6, marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>GST (5%):</span>
                  <span>₹{gst}</span>
                </div>
                {urgentDelivery && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#d97706' }}>
                    <span>Express 12-Hr:</span>
                    <span>₹100</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '0.9rem', borderTop: '1px solid #111827', paddingTop: '4px', marginTop: '4px' }}>
                  <span>GRAND TOTAL:</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              {/* QR Code and Barcode */}
              <div style={{ textAlign: 'center', borderTop: '1px dashed #9ca3af', paddingTop: '10px' }}>
                <div style={{
                  display: 'inline-flex',
                  padding: '6px',
                  background: '#f3f4f6',
                  borderRadius: '6px',
                  marginBottom: '6px'
                }}>
                  <QrCode size={52} color="#111827" />
                </div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                  SCAN TO TRACK / UPI PAY
                </div>
                <div style={{ fontSize: '0.62rem', color: '#6b7280', marginTop: '4px' }}>
                  * Thank you for choosing Laundrybatch Green Fabric Care *
                </div>
              </div>
            </div>

            {/* Quick Print & Share triggers */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={() => window.print()}
                className="btn-secondary"
                style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                <Printer size={15} /> Print Thermal Slip
              </button>
              <button
                onClick={handleSimulateWhatsApp}
                className="btn-primary"
                style={{ padding: '8px 16px', fontSize: '0.85rem', backgroundColor: '#25D366' }}
              >
                <Send size={15} /> Send WhatsApp Bill
              </button>
            </div>

          </div>

          {/* Column 3: Customer WhatsApp Smartphone Preview */}
          <div className="glass-panel" style={{ padding: '24px', backgroundColor: 'var(--bg-surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Smartphone size={20} color="#25D366" />
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0 }}>
                  Customer WhatsApp View
                </h3>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#25D366', fontWeight: 700, background: 'rgba(37, 211, 102, 0.1)', padding: '3px 8px', borderRadius: '999px' }}>
                Paperless WhatsApp Verified
              </span>
            </div>

            {/* WhatsApp Mock Chat Bubble */}
            <div style={{
              backgroundColor: 'var(--bg-main)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)',
              padding: '16px',
              fontFamily: 'var(--font-body)',
              position: 'relative'
            }}>
              
              {/* WhatsApp Message Bubble */}
              <div style={{
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                padding: '14px',
                boxShadow: 'var(--shadow-sm)',
                fontSize: '0.84rem',
                lineHeight: 1.5,
                color: 'var(--text-main)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0d9488', fontWeight: 700, marginBottom: '6px' }}>
                  <span>🫧</span>
                  <span>Laundrybatch Care Update</span>
                </div>
                
                <p style={{ margin: '0 0 8px 0' }}>
                  Hi <strong>{customerName}</strong>! Your order <strong>#LB-88429</strong> has been received at <em>Laundrybatch Hub</em>.
                </p>

                <div style={{ background: 'var(--bg-main)', padding: '8px', borderRadius: '6px', fontSize: '0.78rem', marginBottom: '8px' }}>
                  <div>👕 <strong>{items.length} Garments</strong> in Batch</div>
                  <div>💰 Total: <strong>₹{grandTotal}</strong> ({paymentStatus})</div>
                  <div>🚚 Ready By: <strong>08 Oct 2026, 6:00 PM</strong></div>
                </div>

                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
                  Tap below to track garment wash stages or download GST receipt:
                </div>

                {/* WhatsApp Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a
                    href="#demo-studio"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px',
                      borderRadius: '6px',
                      background: 'rgba(13, 148, 136, 0.1)',
                      color: '#0d9488',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      border: '1px solid rgba(13, 148, 136, 0.2)'
                    }}
                  >
                    🔍 Track Live Garment Status
                  </a>
                  <a
                    href="#demo-studio"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '8px',
                      borderRadius: '6px',
                      background: 'rgba(2, 132, 199, 0.1)',
                      color: '#0284c7',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      border: '1px solid rgba(2, 132, 199, 0.2)'
                    }}
                  >
                    📄 Download Tax Invoice (PDF)
                  </a>
                </div>

                <div style={{ textAlign: 'right', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                  10:42 AM • Delivered ✓✓
                </div>
              </div>

              {whatsappSent && (
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: 'var(--shadow-md)',
                  animation: 'float 2s ease'
                }}>
                  <CheckCircle2 size={14} /> WhatsApp Receipt Dispatched!
                </div>
              )}
            </div>

            {/* Garment Tag Preview */}
            <div style={{ marginTop: '20px', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Tag size={15} color="#0d9488" /> Garment Heat-Seal Tag Simulation
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                color: '#f8fafc',
                padding: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem'
              }}>
                <div>
                  <div style={{ color: '#2dd4bf', fontWeight: 700 }}>LB-SR-8812</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.68rem' }}>Silk Saree • Dry Clean</div>
                  <div style={{ color: '#64748b', fontSize: '0.65rem' }}>Cust: Rahul V. • #LB-88429</div>
                </div>
                <div style={{ background: 'white', padding: '4px', borderRadius: '4px' }}>
                  <QrCode size={36} color="#0f172a" />
                </div>
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                Zero lost garments. Tags survive 200°C steam pressing & solvent wash.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
