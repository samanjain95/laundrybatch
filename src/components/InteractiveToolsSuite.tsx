import React, { useState, useEffect } from 'react';
import { 
  Receipt, 
  Tag, 
  Calculator, 
  Sparkles, 
  Smartphone, 
  QrCode, 
  Users, 
  Printer, 
  Download, 
  Search, 
  Check, 
  Plus, 
  Trash2, 
  Info, 
  CheckCircle2,
  Share2
} from 'lucide-react';
import { careSymbolsData, stainGuideData, defaultRateItems } from '../data/toolsData';

interface ToolsSuiteProps {
  activeToolId?: string;
}

export const InteractiveToolsSuite: React.FC<ToolsSuiteProps> = ({ activeToolId = 'bill-generator' }) => {
  const [selectedTool, setSelectedTool] = useState(activeToolId);

  useEffect(() => {
    if (activeToolId) {
      setSelectedTool(activeToolId);
    }
  }, [activeToolId]);

  // --- Tool 1: Bill Generator State ---
  const [billShopName, setBillShopName] = useState('Bright & Clean Laundry');
  const [billShopPhone, setBillShopPhone] = useState('+91 98888 77777');
  const [billShopGst, setBillShopGst] = useState('36AABCU9603R1ZM');
  const [billCustomer, setBillCustomer] = useState('Priya Sharma');
  const [billPhone, setBillPhone] = useState('+91 91234 56789');
  const [billItems, setBillItems] = useState([
    { name: 'Formal Shirts (Steam Press)', qty: 5, rate: 15 },
    { name: 'Kanjeevaram Silk Saree (Dry Clean)', qty: 1, rate: 220 },
    { name: 'Bedsheet Double (Wash & Fold)', qty: 2, rate: 60 },
  ]);
  const [billDiscount, setBillDiscount] = useState(20);

  // --- Tool 2: Rate Card State ---
  const [rateItems, setRateItems] = useState(defaultRateItems);
  const [rateCategoryFilter, setRateCategoryFilter] = useState('All');

  // --- Tool 3: Profit Calculator State ---
  const [calcDailyOrders, setCalcDailyOrders] = useState(45);
  const [calcAvgTicket, setCalcAvgTicket] = useState(280);
  const [calcRent, setCalcRent] = useState(15000);
  const [calcStaffCount, setCalcStaffCount] = useState(2);
  const [calcStaffSalary, setCalcStaffSalary] = useState(14000);
  const [calcElectricity, setCalcElectricity] = useState(6000);
  const [calcDetergentPct, setCalcDetergentPct] = useState(8); // 8% of revenue

  // --- Tool 4: Care Decoder State ---
  const [careSearch, setCareSearch] = useState('');
  const [careFilter, setCareFilter] = useState<string>('all');

  // --- Tool 5: Stain Guide State ---
  const [selectedStain, setSelectedStain] = useState(stainGuideData[0]);

  // --- Tool 6: WhatsApp Poster State ---
  const [posterTitle, setPosterTitle] = useState('FESTIVAL SPECIAL 25% OFF');
  const [posterSub, setPosterSub] = useState('Get all Silk Sarees & Suits Dry Cleaned with Free Pickup & Drop!');
  const [posterShop, setPosterShop] = useState('Super Fabric Care');
  const [posterContact, setPosterContact] = useState('Call / WhatsApp: 98765-43210');
  const [posterColor, setPosterColor] = useState('linear-gradient(135deg, #0d9488, #0284c7)');

  // --- Tool 7: QR Code Generator State ---
  const [qrUpiId, setQrUpiId] = useState('laundryshop@oksbi');
  const [qrAmount, setQrAmount] = useState('350');
  const [qrNote, setQrNote] = useState('Laundry Order LB-8842');

  // --- Tool 8: Staff Salary State ---
  const [staffBasePay, setStaffBasePay] = useState(12000);
  const [staffGarmentsIroned, setStaffGarmentsIroned] = useState(1400);
  const [staffPerGarmentCommission, setStaffPerGarmentCommission] = useState(3.5);
  const [staffDaysWorked, setStaffDaysWorked] = useState(26);

  // Profit Calculation Results
  const monthlyRevenue = calcDailyOrders * calcAvgTicket * 30;
  const staffExpense = calcStaffCount * calcStaffSalary;
  const detergentExpense = (monthlyRevenue * calcDetergentPct) / 100;
  const totalExpenses = calcRent + staffExpense + calcElectricity + detergentExpense;
  const netMonthlyProfit = monthlyRevenue - totalExpenses;
  const profitMargin = monthlyRevenue > 0 ? Math.round((netMonthlyProfit / monthlyRevenue) * 100) : 0;

  // Bill Generator Calculations
  const billSubtotal = billItems.reduce((acc, curr) => acc + curr.qty * curr.rate, 0);
  const billGst = Math.round((billSubtotal - billDiscount) * 0.05);
  const billTotal = Math.max(0, billSubtotal - billDiscount + billGst);

  const toolsTabs = [
    { id: 'bill-generator', label: 'Bill Generator', icon: Receipt },
    { id: 'rate-card', label: 'Rate Card Designer', icon: Tag },
    { id: 'profit-calculator', label: 'Profit Calculator', icon: Calculator },
    { id: 'care-decoder', label: 'Care Label Decoder', icon: Sparkles },
    { id: 'stain-guide', label: 'AI Stain Guide', icon: Sparkles },
    { id: 'whatsapp-posters', label: 'WhatsApp Posters', icon: Smartphone },
    { id: 'qr-generator', label: 'UPI & Garment QR', icon: QrCode },
    { id: 'salary-calculator', label: 'Staff Salary', icon: Users },
  ];

  return (
    <section id="tools" style={{ padding: 'clamp(40px, 6vw, 75px) 0', backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          <div className="badge-pill badge-aqua" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} /> 100% Free Interactive Growth Suite
          </div>
          <h2 style={{ fontSize: '2.3rem', marginBottom: '14px', color: 'var(--text-main)' }}>
            Empowering Laundry & Dry Clean Businesses with <span className="text-gradient">Smart Tools</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            No credit card or login needed. Use these instant calculators, poster generators, and invoice tools to power your daily laundry store operations.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '8px',
          padding: '6px',
          background: 'var(--bg-main)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light)',
          marginBottom: '36px',
          justifyContent: 'flex-start'
        }}>
          {toolsTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedTool === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTool(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  background: isActive ? 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-sub)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(13, 148, 136, 0.3)' : 'none',
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content 1: Bill & Invoice Generator */}
        {selectedTool === 'bill-generator' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '32px' }}>
            {/* Editor */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Receipt size={20} color="#0d9488" /> Invoice Customizer
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Shop / Store Name
                  </label>
                  <input
                    type="text"
                    value={billShopName}
                    onChange={(e) => setBillShopName(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Shop Phone
                  </label>
                  <input
                    type="text"
                    value={billShopPhone}
                    onChange={(e) => setBillShopPhone(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Customer Name
                  </label>
                  <input
                    type="text"
                    value={billCustomer}
                    onChange={(e) => setBillCustomer(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    GST Number
                  </label>
                  <input
                    type="text"
                    value={billShopGst}
                    onChange={(e) => setBillShopGst(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
              </div>

              {/* Items Table in Editor */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '8px' }}>
                  Bill Line Items
                </div>
                {billItems.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '10px',
                      alignItems: 'center',
                      background: 'var(--bg-main)',
                      padding: '8px',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Item Name"
                      value={item.name}
                      onChange={(e) => {
                        const newItems = [...billItems];
                        newItems[index].name = e.target.value;
                        setBillItems(newItems);
                      }}
                      style={{ flex: '1 1 180px', minWidth: '140px', padding: '8px 10px', borderRadius: '6px', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '1 1 auto', justifyContent: 'flex-end' }}>
                      <input
                        type="number"
                        placeholder="Qty"
                        value={item.qty}
                        onChange={(e) => {
                          const newItems = [...billItems];
                          newItems[index].qty = Number(e.target.value);
                          setBillItems(newItems);
                        }}
                        style={{ width: '55px', padding: '8px 4px', borderRadius: '6px', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.85rem', textAlign: 'center' }}
                      />
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>× ₹</span>
                      <input
                        type="number"
                        placeholder="Rate"
                        value={item.rate}
                        onChange={(e) => {
                          const newItems = [...billItems];
                          newItems[index].rate = Number(e.target.value);
                          setBillItems(newItems);
                        }}
                        style={{ width: '70px', padding: '8px 6px', borderRadius: '6px', border: '1px solid var(--border-medium)', background: 'var(--bg-surface)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                      />
                      <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0d9488', minWidth: '55px', textAlign: 'right' }}>
                        = ₹{item.qty * item.rate}
                      </span>
                      <button
                        onClick={() => {
                          if (billItems.length > 1) {
                            setBillItems(billItems.filter((_, i) => i !== index));
                          }
                        }}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '6px', display: 'flex', alignItems: 'center' }}
                        title="Delete Item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => setBillItems([...billItems, { name: 'Suit Dry Clean', qty: 1, rate: 250 }])}
                  className="btn-secondary"
                  style={{ padding: '6px 12px', fontSize: '0.78rem', marginTop: '4px' }}
                >
                  <Plus size={14} /> Add Line Item
                </button>
              </div>

              {/* Discount Input */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <label style={{ fontSize: '0.82rem', color: 'var(--text-sub)', fontWeight: 600 }}>Discount (₹):</label>
                <input
                  type="number"
                  value={billDiscount}
                  onChange={(e) => setBillDiscount(Number(e.target.value))}
                  style={{ width: '100px', padding: '6px 10px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => window.print()} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
                  <Printer size={16} /> Print Official Receipt
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `*${billShopName} - INVOICE*\nCustomer: ${billCustomer}\nItems: ${billItems.map(i => `${i.name} (x${i.qty}) = ₹${i.qty * i.rate}`).join(', ')}\nTotal: ₹${billTotal}\nThank you for choosing ${billShopName}!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 16px',
                    borderRadius: '10px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    textDecoration: 'none'
                  }}
                >
                  <Share2 size={16} /> WhatsApp Bill
                </a>
              </div>
            </div>

            {/* Bill Preview Paper */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="thermal-bill printable-area" style={{ width: '100%', maxWidth: '380px' }}>
                <div style={{ textAlign: 'center', borderBottom: '2px solid #111827', paddingBottom: '12px', marginBottom: '12px' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 900, margin: 0 }}>{billShopName}</h4>
                  <div style={{ fontSize: '0.75rem', color: '#4b5563', marginTop: '2px' }}>Ph: {billShopPhone}</div>
                  <div style={{ fontSize: '0.72rem', color: '#4b5563' }}>GSTIN: {billShopGst}</div>
                </div>

                <div style={{ fontSize: '0.78rem', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Customer: <strong>{billCustomer}</strong></span>
                    <span>Date: <strong>06/10/2026</strong></span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Invoice: <strong>#INV-2026-904</strong></span>
                    <span>Status: <strong>PAID</strong></span>
                  </div>
                </div>

                <div style={{ borderTop: '1px dashed #6b7280', borderBottom: '1px dashed #6b7280', padding: '8px 0', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.75rem', marginBottom: '6px' }}>
                    <span>ITEM</span>
                    <span>QTY</span>
                    <span>RATE</span>
                    <span>TOTAL</span>
                  </div>
                  {billItems.map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', padding: '2px 0' }}>
                      <span style={{ maxWidth: '140px' }}>{item.name}</span>
                      <span>{item.qty}</span>
                      <span>₹{item.rate}</span>
                      <span style={{ fontWeight: 600 }}>₹{item.qty * item.rate}</span>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: '0.78rem', lineHeight: 1.6, marginBottom: '14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Subtotal:</span>
                    <span>₹{billSubtotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#059669' }}>
                    <span>Discount:</span>
                    <span>-₹{billDiscount}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>GST (5%):</span>
                    <span>₹{billGst}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 900, fontSize: '1rem', borderTop: '2px solid #111827', paddingTop: '6px', marginTop: '4px' }}>
                    <span>NET TOTAL:</span>
                    <span>₹{billTotal}</span>
                  </div>
                </div>

                <div style={{ textAlign: 'center', borderTop: '1px dashed #6b7280', paddingTop: '10px' }}>
                  <div style={{ display: 'inline-block', padding: '6px', background: '#f3f4f6', borderRadius: '4px' }}>
                    <QrCode size={56} color="#111827" />
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, marginTop: '4px' }}>
                    SCAN TO PAY VIA GOOGLE PAY / PHONEPE
                  </div>
                  <div style={{ fontSize: '0.62rem', color: '#6b7280' }}>
                    Powered by Laundrybatch Paperless Ecosystem
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Rate Card Designer */}
        {selectedTool === 'rate-card' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['All', 'Dry Clean', 'Wash & Fold', 'Premium Special'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setRateCategoryFilter(cat)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-light)',
                      background: rateCategoryFilter === cat ? '#0d9488' : 'var(--bg-surface)',
                      color: rateCategoryFilter === cat ? 'white' : 'var(--text-main)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <button onClick={() => window.print()} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.84rem' }}>
                <Printer size={15} /> Print Store Rate Card
              </button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {rateItems
                .filter((item) => rateCategoryFilter === 'All' || item.category === rateCategoryFilter)
                .map((item) => (
                  <div
                    key={item.id}
                    className="glass-panel"
                    style={{ padding: '16px', backgroundColor: 'var(--bg-surface)' }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#0d9488', fontWeight: 600, marginBottom: '12px' }}>
                      {item.category} • Turnaround: {item.turnaroundHours}h
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', textAlign: 'center' }}>
                      <div style={{ background: 'var(--bg-main)', padding: '6px', borderRadius: '6px' }}>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Wash</div>
                        <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.85rem' }}>
                          {item.priceWash > 0 ? `₹${item.priceWash}` : '—'}
                        </div>
                      </div>
                      <div style={{ background: 'var(--bg-main)', padding: '6px', borderRadius: '6px' }}>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Steam Iron</div>
                        <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.85rem' }}>
                          {item.priceIron > 0 ? `₹${item.priceIron}` : '—'}
                        </div>
                      </div>
                      <div style={{ background: 'rgba(13, 148, 136, 0.1)', padding: '6px', borderRadius: '6px' }}>
                        <div style={{ fontSize: '0.65rem', color: '#0d9488' }}>Dry Clean</div>
                        <div style={{ fontWeight: 700, color: '#0d9488', fontSize: '0.85rem' }}>
                          {item.priceDryClean > 0 ? `₹${item.priceDryClean}` : '—'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Profit & ROI Calculator */}
        {selectedTool === 'profit-calculator' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calculator size={20} color="#0d9488" /> Input Store Operating Metrics
              </h3>

              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600 }}>Daily Garment Batches / Orders:</span>
                  <span style={{ fontWeight: 800, color: '#0d9488' }}>{calcDailyOrders} orders/day</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={calcDailyOrders}
                  onChange={(e) => setCalcDailyOrders(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#0d9488' }}
                />
              </div>

              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600 }}>Average Order Ticket Value (₹):</span>
                  <span style={{ fontWeight: 800, color: '#0d9488' }}>₹{calcAvgTicket}</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="1200"
                  step="20"
                  value={calcAvgTicket}
                  onChange={(e) => setCalcAvgTicket(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#0d9488' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '18px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Shop Monthly Rent (₹)
                  </label>
                  <input
                    type="number"
                    value={calcRent}
                    onChange={(e) => setCalcRent(Number(e.target.value))}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Electricity / Power Bill (₹)
                  </label>
                  <input
                    type="number"
                    value={calcElectricity}
                    onChange={(e) => setCalcElectricity(Number(e.target.value))}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Staff Members Count
                  </label>
                  <input
                    type="number"
                    value={calcStaffCount}
                    onChange={(e) => setCalcStaffCount(Number(e.target.value))}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Avg Salary per Staff (₹)
                  </label>
                  <input
                    type="number"
                    value={calcStaffSalary}
                    onChange={(e) => setCalcStaffSalary(Number(e.target.value))}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
              </div>
            </div>

            {/* Profit Forecast Display */}
            <div className="glass-panel" style={{ padding: '28px', backgroundColor: 'var(--bg-surface)' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-main)' }}>
                Monthly Profit & Cash Flow Forecast
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--bg-main)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Gross Monthly Revenue</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0284c7' }}>
                    ₹{monthlyRevenue.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{calcDailyOrders * 30} orders/mo</div>
                </div>

                <div style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.78rem', color: '#ef4444' }}>Total Operating Expenses</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ef4444' }}>
                    ₹{Math.round(totalExpenses).toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#ef4444' }}>Rent, Power, Staff, Chemicals</div>
                </div>
              </div>

              {/* Net Profit Highlight */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)',
                border: '1px solid rgba(13, 148, 136, 0.3)',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#0d9488', fontWeight: 700, textTransform: 'uppercase' }}>
                  Estimated Net Take-Home Profit
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0f766e', margin: '4px 0' }}>
                  ₹{Math.round(netMonthlyProfit).toLocaleString()} / month
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#059669' }}>
                  Healthy Net Profit Margin: <strong>{profitMargin}%</strong>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                💡 <em>Pro Tip:</em> Switching to Laundrybatch digital WhatsApp billing saves approx ₹2,800/month on thermal rolls and reduces garment mix-up losses by 98%.
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 4: Care Label Decoder */}
        {selectedTool === 'care-decoder' && (
          <div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Search care symbol (e.g. 40°C, Bleach, Iron)..."
                  value={careSearch}
                  onChange={(e) => setCareSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 38px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                {['all', 'washing', 'bleaching', 'drying', 'ironing', 'dryclean'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCareFilter(cat)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-light)',
                      background: careFilter === cat ? '#0d9488' : 'var(--bg-surface)',
                      color: careFilter === cat ? 'white' : 'var(--text-sub)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
              {careSymbolsData
                .filter((s) => careFilter === 'all' || s.category === careFilter)
                .filter((s) => careSearch === '' || s.title.toLowerCase().includes(careSearch.toLowerCase()) || s.instruction.toLowerCase().includes(careSearch.toLowerCase()))
                .map((symbol, idx) => (
                  <div
                    key={idx}
                    className="glass-panel"
                    style={{ padding: '20px', backgroundColor: 'var(--bg-surface)' }}
                  >
                    <div style={{
                      fontSize: '1.8rem',
                      marginBottom: '10px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '54px',
                      height: '54px',
                      borderRadius: '12px',
                      background: 'rgba(13, 148, 136, 0.1)',
                      color: '#0d9488'
                    }}>
                      {symbol.symbol}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                      {symbol.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45, marginBottom: '8px' }}>
                      {symbol.instruction}
                    </div>
                    {symbol.warning && (
                      <div style={{ fontSize: '0.72rem', color: '#f59e0b', fontWeight: 600 }}>
                        ⚠️ {symbol.warning}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Tab Content 5: AI Stain Removal Guide */}
        {selectedTool === 'stain-guide' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '32px' }}>
            {/* Stain Selector List */}
            <div className="glass-panel" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '14px' }}>
                Select Stain Type:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {stainGuideData.map((stain) => (
                  <button
                    key={stain.id}
                    onClick={() => setSelectedStain(stain)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-md)',
                      border: selectedStain.id === stain.id ? '1px solid #0d9488' : '1px solid var(--border-light)',
                      background: selectedStain.id === stain.id ? 'rgba(13, 148, 136, 0.12)' : 'var(--bg-main)',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s'
                    }}
                  >
                    <span style={{ fontSize: '1.4rem' }}>{stain.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{stain.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{stain.category}</div>
                    </div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '999px',
                      background: stain.urgency === 'Immediate' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                      color: stain.urgency === 'Immediate' ? '#dc2626' : '#059669'
                    }}>
                      {stain.urgency}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stain Solution Protocol */}
            <div className="glass-panel" style={{ padding: '28px', backgroundColor: 'var(--bg-surface)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '2.2rem' }}>{selectedStain.icon}</span>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', margin: 0 }}>
                    {selectedStain.name} Removal Protocol
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#0d9488', fontWeight: 600 }}>
                    Category: {selectedStain.category}
                  </span>
                </div>
              </div>

              {/* Step by step */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-sub)', marginBottom: '8px' }}>
                  Professional Action Steps:
                </div>
                {selectedStain.instructions.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: '#0d9488',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                      {step}
                    </div>
                  </div>
                ))}
              </div>

              {/* Eco tip */}
              <div style={{
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '14px',
                fontSize: '0.8rem',
                color: '#065f46'
              }}>
                🌿 <strong>Eco Chemistry Tip:</strong> {selectedStain.ecoTip}
              </div>

              {/* Avoid caution */}
              <div style={{
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.8rem',
                color: '#991b1b'
              }}>
                🚫 <strong>Never Do This:</strong> {selectedStain.avoidTip}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 6: WhatsApp Poster Generator */}
        {selectedTool === 'whatsapp-posters' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--text-main)' }}>
                Customize Marketing Flyer
              </h3>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Headline / Offer
                </label>
                <input
                  type="text"
                  value={posterTitle}
                  onChange={(e) => setPosterTitle(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Sub-Text & Value Proposition
                </label>
                <textarea
                  rows={3}
                  value={posterSub}
                  onChange={(e) => setPosterSub(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)', fontSize: '0.85rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Laundry Shop Name
                  </label>
                  <input
                    type="text"
                    value={posterShop}
                    onChange={(e) => setPosterShop(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    Contact / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={posterContact}
                    onChange={(e) => setPosterContact(e.target.value)}
                    style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Choose Card Theme
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[
                    { label: 'Aqua Marine', grad: 'linear-gradient(135deg, #0d9488, #0284c7)' },
                    { label: 'Royal Violet', grad: 'linear-gradient(135deg, #7c3aed, #2563eb)' },
                    { label: 'Eco Forest', grad: 'linear-gradient(135deg, #059669, #0d9488)' },
                    { label: 'Sunset Amber', grad: 'linear-gradient(135deg, #ea580c, #d97706)' },
                  ].map((theme, i) => (
                    <button
                      key={i}
                      onClick={() => setPosterColor(theme.grad)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        background: theme.grad,
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      {theme.label}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => window.print()} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
                <Printer size={16} /> Print / Save as WhatsApp Poster
              </button>
            </div>

            {/* Poster Canvas Preview */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '380px',
                aspectRatio: '1/1.25',
                background: posterColor,
                borderRadius: 'var(--radius-xl)',
                padding: '32px 24px',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div>
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(8px)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '16px'
                  }}>
                    ✨ {posterShop}
                  </div>
                  <h2 style={{ fontSize: '1.9rem', fontWeight: 900, lineHeight: 1.15, textShadow: '0 2px 8px rgba(0,0,0,0.2)', marginBottom: '12px' }}>
                    {posterTitle}
                  </h2>
                  <p style={{ fontSize: '0.92rem', opacity: 0.95, lineHeight: 1.45 }}>
                    {posterSub}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(10px)',
                  padding: '14px 18px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>FREE DOORSTEP PICKUP & DELIVERY</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>{posterContact}</div>
                  </div>
                  <div style={{ background: 'white', padding: '4px', borderRadius: '4px' }}>
                    <QrCode size={36} color="#0f172a" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 7: QR Code Generator */}
        {selectedTool === 'qr-generator' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <QrCode size={20} color="#0d9488" /> UPI Payment & Tag Generator
              </h3>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Merchant UPI ID (VPA)
                </label>
                <input
                  type="text"
                  value={qrUpiId}
                  onChange={(e) => setQrUpiId(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Amount to Collect (₹)
                </label>
                <input
                  type="number"
                  value={qrAmount}
                  onChange={(e) => setQrAmount(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Order Remarks
                </label>
                <input
                  type="text"
                  value={qrNote}
                  onChange={(e) => setQrNote(e.target.value)}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <button onClick={() => window.print()} className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
                <Printer size={16} /> Print UPI Counter Standee
              </button>
            </div>

            {/* Standee Preview */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '340px',
                background: 'var(--bg-surface)',
                border: '2px solid #0d9488',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Accepted Here
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>
                  Instant UPI Payment
                </div>

                <div style={{ display: 'inline-flex', padding: '16px', background: '#ffffff', borderRadius: '12px', border: '1px solid var(--border-light)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', marginBottom: '16px' }}>
                  <QrCode size={160} color="#0f172a" />
                </div>

                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0d9488', marginBottom: '4px' }}>
                  ₹{qrAmount}
                </div>
                <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-sub)', marginBottom: '8px' }}>
                  UPI: {qrUpiId}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Ref: {qrNote} • Works on GPay, Paytm, PhonePe, Cred
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 8: Staff Salary Calculator */}
        {selectedTool === 'salary-calculator' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))', gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={20} color="#0d9488" /> Staff Payout & Commission Calculator
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Monthly Base Retainer Pay (₹)
                </label>
                <input
                  type="number"
                  value={staffBasePay}
                  onChange={(e) => setStaffBasePay(Number(e.target.value))}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Garments Pressed / Processed in Month
                </label>
                <input
                  type="number"
                  value={staffGarmentsIroned}
                  onChange={(e) => setStaffGarmentsIroned(Number(e.target.value))}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Commission Rate per Garment (₹)
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={staffPerGarmentCommission}
                  onChange={(e) => setStaffPerGarmentCommission(Number(e.target.value))}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                  Days Attended (out of 26 working days)
                </label>
                <input
                  type="number"
                  value={staffDaysWorked}
                  onChange={(e) => setStaffDaysWorked(Number(e.target.value))}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--border-light)', background: 'var(--bg-main)', color: 'var(--text-main)' }}
                />
              </div>
            </div>

            {/* Payout Summary */}
            <div className="glass-panel" style={{ padding: '28px', backgroundColor: 'var(--bg-surface)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--text-main)' }}>
                Salary Slip Breakdown
              </h3>

              {(() => {
                const proratedBase = Math.round((staffBasePay / 26) * staffDaysWorked);
                const garmentCommission = Math.round(staffGarmentsIroned * staffPerGarmentCommission);
                const totalSalaryPayout = proratedBase + garmentCommission;

                return (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.88rem' }}>
                      <span>Prorated Base Pay ({staffDaysWorked}/26 days):</span>
                      <strong>₹{proratedBase.toLocaleString()}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.88rem', color: '#0d9488' }}>
                      <span>Piece-rate Commission ({staffGarmentsIroned} pcs @ ₹{staffPerGarmentCommission}):</span>
                      <strong>+ ₹{garmentCommission.toLocaleString()}</strong>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '16px 0',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      borderTop: '2px solid var(--border-light)',
                      marginTop: '8px'
                    }}>
                      <span>Net Salary to Disburse:</span>
                      <span style={{ color: '#059669' }}>₹{totalSalaryPayout.toLocaleString()}</span>
                    </div>

                    <div style={{ background: 'var(--bg-main)', padding: '14px', borderRadius: '8px', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '16px' }}>
                      Laundrybatch records every garment processed by specific staff PINs automatically, eliminating manual register disputes at month-end.
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
