import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, MapPin, Building2, TrendingUp, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('All');

  const reviews = [
    {
      name: 'Venkatesh Rao',
      role: 'Owner, 12 Years in Business',
      shop: 'Sri Balaji Dry Cleaners & Steam Iron',
      city: 'Hyderabad',
      neighborhood: 'Kukatpally, Hyderabad',
      rating: 5,
      comment: 'Switched from paper counter books to Laundrybatch. Our daily customer disputes dropped to absolute zero because of the QR heat tags and WhatsApp bills. Saved ₹3,500 every month on paper rolls alone!',
      stat: 'Saved 18 Hours/Week',
      metric: 'Zero Lost Clothes in 8 Months',
    },
    {
      name: 'Pooja Agarwal',
      role: 'Founder & Managing Director',
      shop: 'FabricPure Premium Boutique Laundry',
      city: 'Bengaluru',
      neighborhood: 'Indiranagar, Bengaluru',
      rating: 5,
      comment: 'The pre-wash photo capture is a lifesaver. When customers bring garments with existing stains or burns, our counter staff takes a 2-second photo. The customer gets it on WhatsApp immediately so no arguments at pickup.',
      stat: 'Zero Damage Disputes',
      metric: '₹22,000/mo False Claims Saved',
    },
    {
      name: 'Amitabh Sen',
      role: 'Director of Plant Operations',
      shop: 'WhiteGlow Express Laundromat',
      city: 'Kolkata',
      neighborhood: 'Salt Lake Sector V, Kolkata',
      rating: 5,
      comment: 'Our staff speaks Bengali and Hindi; they learned the interface in literally 15 minutes! The driver app has streamlined our 3 delivery vans. We can handle 200+ orders a day without confusion.',
      stat: 'Scaled to 3 Branches',
      metric: '35% Saved on Driver Fuel',
    },
    {
      name: 'Rajesh Patil',
      role: 'Commercial Laundry Contractor',
      shop: 'Apex Linen Care & Drycleaners',
      city: 'Mumbai',
      neighborhood: 'Andheri West, Mumbai',
      rating: 5,
      comment: 'We buy our bio-enzyme detergents directly through Laundrybatch at factory rates. Having our own store brand on the 20L containers made our business look so professional to our luxury hotel clients.',
      stat: 'Own Branded Detergents',
      metric: '30% Cost Cut on Chemicals',
    },
  ];

  const cities = ['All', 'Hyderabad', 'Bengaluru', 'Kolkata', 'Mumbai'];

  const filtered = selectedCity === 'All'
    ? reviews
    : reviews.filter((r) => r.city === selectedCity);

  return (
    <section id="testimonials" style={{
      padding: '76px 0',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease, color 0.25s ease'
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px auto' }}>
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
            <Star size={14} fill="#0d9488" /> Trusted by 4,200+ Store Owners Across India
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, marginBottom: '14px', color: 'var(--text-main)' }}>
            Real Success Stories from <span className="text-gradient">Neighborhood Dry Cleaners</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem' }}>
            Hear how laundromats, steam press stalls, and commercial dry cleaners transformed their day-to-day operations with Laundrybatch.
          </p>
        </div>

        {/* City Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {cities.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCity(c)}
              style={{
                padding: '7px 16px',
                borderRadius: '999px',
                border: selectedCity === c ? '2px solid #0d9488' : '1px solid var(--border-light)',
                background: selectedCity === c ? '#0d9488' : 'var(--bg-surface)',
                color: selectedCity === c ? '#ffffff' : 'var(--text-sub)',
                fontWeight: selectedCity === c ? 800 : 600,
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {c === 'All' ? 'All Verified Stores' : `📍 ${c}`}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '22px' }}>
          {filtered.map((r, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px 24px',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '18px',
                border: '1px solid var(--border-light)',
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
                {/* Rating Stars & Verified Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    color: '#059669',
                    background: 'rgba(16, 185, 129, 0.12)',
                    padding: '3px 8px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}>
                    ✓ Verified Store
                  </span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px' }}>
                  "{r.comment}"
                </p>
              </div>

              <div>
                {/* Result Pill */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(13, 148, 136, 0.08)',
                  border: '1px solid rgba(13, 148, 136, 0.2)',
                  borderRadius: '10px',
                  padding: '8px 12px',
                  marginBottom: '16px',
                  fontSize: '0.78rem'
                }}>
                  <span style={{ color: '#0d9488', fontWeight: 800 }}>✨ {r.stat}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{r.metric}</span>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '14px' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.96rem', color: 'var(--text-main)' }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    {r.role}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#0d9488', fontWeight: 700, marginTop: '2px' }}>
                    {r.shop}
                  </div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                    <MapPin size={12} color="#0d9488" /> {r.neighborhood}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
