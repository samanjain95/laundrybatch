import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { OriginalCRMTourSection } from '../components/OriginalCRMTourSection';
import { RealWorldCRMScenarios } from '../components/RealWorldCRMScenarios';
import { FeatureShowcase } from '../components/FeatureShowcase';
import { QuickConvertBanner } from '../components/QuickConvertBanner';
import { Testimonials } from '../components/Testimonials';

export const CRMPage: React.FC<{ onOpenTrial: () => void }> = ({ onOpenTrial }) => {
  return (
    <div>
      <PageHeader
        badge="★ Exclusive Flagship Software"
        title="Sole CRM Engineered Exclusively for Laundry Operations"
        subtitle="Not generic CRM software. Built from real ground battlegrounds in Indian laundry plants. Eliminate lost garment arguments with pre-wash intake camera evidence and automated WhatsApp delivery notifications."
        currentPage="Sole CRM Platform"
        ctaText="Request CRM Live Demo"
        onCtaClick={onOpenTrial}
      />

      {/* Flagship Exclusive Sole CRM Hero Banner */}
      <div style={{ background: 'var(--bg-main)', padding: '24px 0 0', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ padding: '0 24px' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.12) 0%, rgba(99, 102, 241, 0.12) 100%)',
              border: '2px solid rgba(13, 148, 136, 0.4)',
              borderRadius: '20px',
              padding: '24px 28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(13, 148, 136, 0.08)'
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0d9488', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: '#0d9488', boxShadow: '0 0 10px #0d9488' }} />
                Sole Dedicated Laundry CRM
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px' }}>
                Why Generic CRMs Fail in Laundries
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Ordinary software has no concept of stain pre-logging, piece-rate ironing staff, wash batches, or QR heat tags. Laundrybatch's sole CRM is customized 100% for garment care.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0d9488' }}>0.00%</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Lost Garment Rate</div>
              </div>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#6366f1' }}>99.8%</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Dispute Prevention</div>
              </div>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0284c7' }}>100%</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Offline Capable</div>
              </div>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>8 Indian</div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600 }}>Languages Supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. 5-Stage Authentic Operational Tour & Video Player */}
      <OriginalCRMTourSection onConnectCRM={onOpenTrial} />

      {/* 2. Real Ground Problems Solved */}
      <RealWorldCRMScenarios />

      {/* 3. Deep Dive Feature Showcase */}
      <FeatureShowcase />

      {/* 4. Quick Convert Banner */}
      <QuickConvertBanner onSuccess={onOpenTrial} />

      {/* 5. Real Reviews */}
      <Testimonials />
    </div>
  );
};
