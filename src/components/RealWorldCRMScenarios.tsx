import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Camera, 
  QrCode, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight,
  MessageCircle,
  Check
} from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  category: 'Damage Claims' | 'Lost Clothes' | 'Soap Bleed' | 'Unclaimed Laundry' | 'Staff Attendance';
  problemStory: string;
  problemImpact: string;
  crmSolution: string;
  plainAction: string;
  outcomeMetric: string;
  icon: any;
}

export const RealWorldCRMScenarios: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState('1');

  const scenarios: Scenario[] = [
    {
      id: '1',
      title: 'Customer Claims Expensive Saree or Suit Was Damaged',
      category: 'Damage Claims',
      icon: Camera,
      problemStory: 'A customer drops off a ₹15,000 designer silk saree or suit that already had a small burnt spot or torn seam. When picking it up, they blame your shop and demand cash compensation or refuse to pay.',
      problemImpact: 'Lost customer, ₹5,000 to ₹15,000 cash loss, and an unfair 1-star negative Google review.',
      crmSolution: 'Intake Photo Camera snaps a 2-second photo of pre-existing flaws right at the counter. The photo is automatically attached to the customer’s WhatsApp receipt before the garment touches water.',
      plainAction: 'The customer sees and acknowledges the flaw immediately on WhatsApp. No more arguments at the delivery counter.',
      outcomeMetric: '96% Drop in False Damage Claims',
    },
    {
      id: '2',
      title: 'Clothes Mixed Up or Lost During Peak Festival Rush',
      category: 'Lost Clothes',
      icon: QrCode,
      problemStory: 'During Diwali, Eid, or wedding seasons, hundreds of white shirts and plain kurtas look identical. Clothes get mixed up between washing drums, drying tumblers, and iron tables.',
      problemImpact: 'Hours wasted searching through piles, furious customers, and having to pay to replace lost garments.',
      crmSolution: 'Heat-Seal Textile QR Tags stick firmly to garment seams. They never peel off, even in 200°C steam iron heat or harsh solvents. Any worker scans the tag to see the exact customer name and rack bin.',
      plainAction: 'Scan the tag with any phone or scanner to see: "Rack B-14, Rahul Verma, Order #8842".',
      outcomeMetric: 'Zero Lost Clothes Across 4.2 Million Garments',
    },
    {
      id: '3',
      title: 'Detergent & Chemical Wastage Eating Your Monthly Profit',
      category: 'Soap Bleed',
      icon: TrendingUp,
      problemStory: 'Workers pour expensive detergents and softeners by guesswork. They use too much soap on small loads and leave chemical stains or sticky residue on clothes.',
      problemImpact: 'Up to ₹25,000 wasted every month on chemical purchases, plus faded customer clothes.',
      crmSolution: 'Smart Dosing Guide calculates the exact milliliters of soap and softener based on garment weight. The system guides your washer staff on exact scoops to use.',
      plainAction: 'Clear color-coded dosing instructions on the screen: "Load 15kg: Use 240ml Detergent + 80ml Softener".',
      outcomeMetric: 'Cuts Chemical Expenses by 32%',
    },
    {
      id: '4',
      title: 'Finished Clothes Sitting on Racks for 60+ Days',
      category: 'Unclaimed Laundry',
      icon: Clock,
      problemStory: 'Customers drop off clothes and forget to pick them up for weeks or months. Your shop racks become overcrowded, and your cash remains stuck.',
      problemImpact: 'Cluttered store space, lost cash flow, and risk of dust accumulation on cleaned garments.',
      crmSolution: 'Automated Friendly WhatsApp Nudges send gentle reminder alerts on Day 3, Day 7, and Day 14 with the total bill amount and Google Maps shop location.',
      plainAction: 'Automated WhatsApp message: "Hi Anita, your dry-cleaned dresses are ready & neatly packed! Pickup anytime between 9 AM - 9 PM."',
      outcomeMetric: '84% Faster Customer Pickups & Quicker Cashflow',
    },
    {
      id: '5',
      title: 'Staff Arguing Over Daily Piece Counts and Commission',
      category: 'Staff Attendance',
      icon: Users,
      problemStory: 'Ironing pressers and spotters dispute how many garments they processed in a day. Monthly salary calculation turns into arguments, causing good workers to quit.',
      problemImpact: 'Staff headaches, messy paper registers, and inaccurate commission payouts.',
      crmSolution: 'Simple 4-Digit Staff PIN at the counter. When a presser or washer processes an item, they tap their PIN. The system credits their piece-rate account automatically.',
      plainAction: '1-Click salary slips at month-end showing: "Ramesh: 1,420 Shirts Pressed = ₹7,100 Commission Earned".',
      outcomeMetric: 'Zero Month-End Staff Arguments',
    },
  ];

  const current = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];
  const Icon = current.icon;

  return (
    <section id="crm-scenarios" style={{
      padding: '76px 0',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease, color 0.25s ease'
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 40px auto' }}>
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
            <Sparkles size={14} /> Solves Real Ground Problems
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, lineHeight: 1.22, marginBottom: '14px', color: 'var(--text-main)' }}>
            Customer Care (CRM) Built for <span className="text-gradient">Everyday Shop Headaches</span>
          </h2>
          <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Most software gives you complicated graphs you never use. Laundrybatch is built specifically to stop customer arguments, eliminate lost clothes, and prevent money leaks in your daily operations.
          </p>
        </div>

        {/* Friendly Scenario Switcher Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
          gap: '8px',
          marginBottom: '24px'
        }}>
          {scenarios.map((item) => {
            const TabIcon = item.icon;
            const isActive = activeScenarioId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveScenarioId(item.id)}
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
                  <TabIcon size={18} />
                </div>
                <span style={{ lineHeight: 1.3 }}>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Showcase Card */}
        <div style={{
          background: 'var(--bg-surface)',
          borderRadius: '20px',
          border: '1px solid var(--border-light)',
          padding: 'clamp(16px, 4vw, 36px)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                background: 'rgba(13, 148, 136, 0.12)',
                border: '1px solid rgba(13, 148, 136, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0d9488'
              }}>
                <Icon size={24} />
              </div>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#0d9488', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Scenario {current.id} of 5 • {current.category}
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: '2px 0 0 0' }}>
                  {current.title}
                </h3>
              </div>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              color: '#059669',
              padding: '8px 16px',
              borderRadius: '999px',
              fontWeight: 800,
              fontSize: '0.88rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <CheckCircle2 size={16} />
              <span>{current.outcomeMetric}</span>
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '20px',
            marginBottom: '28px'
          }}>
            {/* The Real Problem */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              borderRadius: '14px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontWeight: 800, fontSize: '0.88rem', marginBottom: '10px' }}>
                <AlertTriangle size={18} />
                <span>The Problem (Without Laundrybatch)</span>
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '12px' }}>
                {current.problemStory}
              </p>
              <div style={{
                background: 'rgba(239, 68, 68, 0.12)',
                padding: '8px 12px',
                borderRadius: '8px',
                fontSize: '0.84rem',
                color: '#dc2626',
                fontWeight: 700
              }}>
                ⚠️ Financial Hit: {current.problemImpact}
              </div>
            </div>

            {/* The Solution */}
            <div style={{
              background: 'rgba(13, 148, 136, 0.08)',
              border: '1px solid rgba(13, 148, 136, 0.25)',
              borderRadius: '14px',
              padding: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d9488', fontWeight: 800, fontSize: '0.88rem', marginBottom: '10px' }}>
                <ShieldCheck size={18} />
                <span>The Solution with Laundrybatch</span>
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '12px' }}>
                {current.crmSolution}
              </p>
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid rgba(13, 148, 136, 0.3)',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '0.86rem',
                color: '#0d9488',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Check size={16} color="#0d9488" />
                <span>How It Works: {current.plainAction}</span>
              </div>
            </div>
          </div>

          {/* Quick Helpful CTA */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-light)'
          }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Want to see this live in your shop? We will set up your camera and QR tags in 15 minutes.
            </span>
            <a
              href="https://wa.me/917389327066?text=Hi%20Laundrybatch!%20I%20want%20to%20see%20how%20your%20CRM%20stops%20damage%20claims%20and%20lost%20clothes."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#0d9488',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.88rem',
                textDecoration: 'none'
              }}
            >
              <span>See Live Demo</span>
              <ArrowRight size={15} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
