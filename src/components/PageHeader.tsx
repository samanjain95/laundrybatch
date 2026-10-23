import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  currentPage: string;
  ctaText?: string;
  onCtaClick?: () => void;
  showWhatsApp?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  currentPage,
  ctaText = 'Start Free Trial',
  onCtaClick,
  showWhatsApp = true,
}) => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, rgba(13, 148, 136, 0.08) 0%, var(--bg-main) 100%)',
      padding: '44px 0 32px 0',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background-color 0.25s ease'
    }}>
      <div className="container" style={{ padding: '0 24px' }}>
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600 }}>
            Home
          </Link>
          <ChevronRight size={13} />
          <span style={{ color: '#0d9488', fontWeight: 700 }}>{currentPage}</span>
        </div>

        {/* Header Content */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ maxWidth: '780px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '999px',
              background: 'rgba(13, 148, 136, 0.12)',
              border: '1px solid rgba(13, 148, 136, 0.3)',
              color: '#0d9488',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '12px'
            }}>
              <Sparkles size={13} />
              <span>{badge}</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 2.9rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: 'var(--text-main)',
              marginBottom: '12px',
              letterSpacing: '-0.02em'
            }}>
              {title}
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-sub)',
              lineHeight: 1.6,
              margin: 0
            }}>
              {subtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            {onCtaClick && (
              <button
                onClick={onCtaClick}
                className="btn-primary"
                style={{ padding: '12px 24px', fontSize: '0.92rem', borderRadius: '10px' }}
              >
                <span>{ctaText}</span>
                <ArrowRight size={16} />
              </button>
            )}

            {showWhatsApp && (
              <a
                href="https://wa.me/919666211137"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--bg-surface)',
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
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
