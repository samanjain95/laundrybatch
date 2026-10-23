import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Globe, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Receipt, 
  Calculator, 
  Tag, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  FlaskConical, 
  Package, 
  Settings, 
  Users, 
  Video,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  onOpenTool: (toolId: string) => void;
  onOpenDemo: () => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'refund') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLangChange,
  theme,
  onThemeToggle,
  onOpenTool,
  onOpenDemo,
}) => {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const solutions = [
    {
      to: '/crm',
      title: 'Customer Care & CRM',
      desc: 'Intake defect camera, zero lost clothes & staff PIN tracking',
      icon: Users,
      badge: 'Dispute Shield',
      color: '#0d9488',
      bgLight: 'rgba(13, 148, 136, 0.1)',
    },
    {
      to: '/pos',
      title: 'Fast Counter POS',
      desc: '10s billing, QR heat tags, thermal slips & instant UPI',
      icon: Receipt,
      badge: 'Live Counter',
      color: '#0284c7',
      bgLight: 'rgba(2, 132, 199, 0.1)',
    },
    {
      to: '/machinery',
      title: 'Commercial Machinery',
      desc: '15kg-100kg washer-extractors, boilers & vacuum iron tables',
      icon: Settings,
      badge: 'Turnkey Plants',
      color: '#7c3aed',
      bgLight: 'rgba(124, 58, 237, 0.1)',
    },
    {
      to: '/chemicals',
      title: 'White-Label Detergents',
      desc: 'Sell bio-enzymes with your own store brand label (MOQ 50L)',
      icon: FlaskConical,
      badge: 'Own Brand',
      color: '#10b981',
      bgLight: 'rgba(16, 185, 129, 0.1)',
    },
    {
      to: '/supplies',
      title: 'Wholesale Supplies & Tags',
      desc: 'Heat-seal QR rolls, poly tubing, hangers & 7-stain kits',
      icon: Package,
      badge: 'Factory Direct',
      color: '#f59e0b',
      bgLight: 'rgba(245, 158, 11, 0.1)',
    },
  ];

  const freeTools = [
    { id: 'bill-generator', label: 'Thermal Bill Generator', icon: Receipt },
    { id: 'rate-card', label: 'Rate Card Designer', icon: Tag },
    { id: 'profit-calculator', label: 'Profit & ROI Calculator', icon: Calculator },
    { id: 'care-decoder', label: 'Garment Care Label Decoder', icon: Sparkles },
    { id: 'stain-guide', label: 'AI Stain Removal Recipes', icon: Sparkles },
    { id: 'whatsapp-posters', label: 'WhatsApp Marketing Posters', icon: MessageCircle },
  ];

  const handleToolClick = (toolId: string) => {
    onOpenTool(toolId);
    setToolsOpen(false);
    navigate('/tools');
  };

  const navPillStyle = ({ isActive }: { isActive: boolean }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '7px 14px',
    borderRadius: '999px',
    textDecoration: 'none',
    color: isActive ? '#0d9488' : 'var(--text-sub)',
    fontWeight: isActive ? 800 : 600,
    fontSize: '0.86rem',
    background: isActive ? 'rgba(13, 148, 136, 0.1)' : 'transparent',
    transition: 'all 0.15s ease'
  });

  const crmHighlightPillStyle = ({ isActive }: { isActive: boolean }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 14px',
    borderRadius: '999px',
    textDecoration: 'none',
    color: isActive ? '#0d9488' : 'var(--text-main)',
    fontWeight: 800,
    fontSize: '0.86rem',
    background: isActive
      ? 'rgba(13, 148, 136, 0.16)'
      : 'linear-gradient(135deg, rgba(13, 148, 136, 0.1) 0%, rgba(99, 102, 241, 0.12) 100%)',
    border: isActive ? '1.5px solid #0d9488' : '1px solid rgba(13, 148, 136, 0.4)',
    boxShadow: isActive
      ? '0 0 16px rgba(13, 148, 136, 0.35)'
      : '0 2px 10px rgba(13, 148, 136, 0.1)',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative' as const,
  });

  return (
    <div className="floating-nav-wrapper">
      <header className="floating-nav-island">
        
        {/* 1. Sleek Animated Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'var(--text-main)', flexShrink: 0 }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(13, 148, 136, 0.35)',
            color: 'white',
            position: 'relative'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
              <circle cx="12" cy="13" r="4.5" />
              <path d="M12 10.5a2.5 2.5 0 0 0-2.5 2.5" />
            </svg>
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10b981',
              border: '2px solid white'
            }} />
          </div>
          <div>
            <div style={{ fontSize: '1.3rem', fontWeight: 900, letterSpacing: '-0.025em', color: 'var(--text-main)', lineHeight: 1.1 }}>
              Laundry<span style={{ color: '#0d9488' }}>batch</span>
            </div>
            <div style={{ fontSize: '0.62rem', color: '#0d9488', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              The Complete Laundry OS
            </div>
          </div>
        </Link>

        {/* 2. Uncluttered, Modern Grouped Navigation (Desktop) */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '6px' }} className="desktop-nav-group">
          
          {/* 1. Explicit Homepage Link */}
          <NavLink to="/" end style={navPillStyle}>
            <span>Home</span>
          </NavLink>

          {/* 2. Highlighted Sole CRM Page (Standout Badge) */}
          <NavLink to="/crm" style={crmHighlightPillStyle}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '999px',
              backgroundColor: '#0d9488',
              boxShadow: '0 0 8px #0d9488',
              display: 'inline-block'
            }} />
            <Users size={15} color="#0d9488" />
            <span>Sole CRM</span>
            <span style={{
              fontSize: '0.64rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              padding: '2px 7px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #0d9488, #6366f1)',
              color: '#ffffff',
              marginLeft: '2px'
            }}>
              Flagship
            </span>
          </NavLink>

          {/* 3. Platform Solutions Dropdown Menu */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '7px 14px',
                borderRadius: '999px',
                border: 'none',
                background: solutionsOpen ? 'rgba(13, 148, 136, 0.1)' : 'transparent',
                color: solutionsOpen ? '#0d9488' : 'var(--text-sub)',
                fontWeight: 700,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <span>All Solutions</span>
              <ChevronDown size={13} style={{ transform: solutionsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {solutionsOpen && (
              <div className="mega-dropdown-panel" style={{ width: '480px', display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '4px 10px' }}>
                  The 4 Pillars of Laundrybatch
                </div>
                {solutions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setSolutionsOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-main)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: item.bgLight,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color,
                        flexShrink: 0
                      }}>
                        <Icon size={19} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontWeight: 800, fontSize: '0.88rem' }}>{item.title}</span>
                          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: item.color, background: item.bgLight, padding: '2px 8px', borderRadius: '999px' }}>
                            {item.badge}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Free Tools Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '7px 14px',
                borderRadius: '999px',
                border: 'none',
                background: toolsOpen ? 'rgba(13, 148, 136, 0.1)' : 'transparent',
                color: toolsOpen ? '#0d9488' : 'var(--text-sub)',
                fontWeight: 700,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Sparkles size={14} color="#0d9488" />
              <span>Free Tools</span>
              <ChevronDown size={13} style={{ transform: toolsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {toolsOpen && (
              <div className="mega-dropdown-panel" style={{ width: '380px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 10px 10px 10px', borderBottom: '1px solid var(--border-light)', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    100% Free Store Calculators
                  </span>
                  <Link
                    to="/tools"
                    onClick={() => setToolsOpen(false)}
                    style={{ fontSize: '0.74rem', color: '#0d9488', fontWeight: 800, textDecoration: 'none' }}
                  >
                    View All 8 Tools →
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4px' }}>
                  {freeTools.map((t) => {
                    const ToolIcon = t.icon;
                    return (
                      <button
                        key={t.id}
                        onClick={() => handleToolClick(t.id)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '9px 12px',
                          background: 'none',
                          border: 'none',
                          color: 'var(--text-main)',
                          fontSize: '0.84rem',
                          fontWeight: 600,
                          textAlign: 'left',
                          borderRadius: '10px',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-main)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <ToolIcon size={16} color="#0d9488" />
                        <span>{t.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Pricing Link */}
          <NavLink to="/pricing" style={navPillStyle}>
            <span>Pricing</span>
          </NavLink>



        </nav>

        {/* 3. Right Action Cluster: Theme Pill + Language + Start Free */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          {/* Animated Light/Dark Sliding Switch */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--bg-main)',
            border: '1px solid var(--border-light)',
            borderRadius: '999px',
            padding: '3px',
            gap: '2px'
          }}>
            <button
              onClick={() => theme !== 'light' && onThemeToggle()}
              title="Light Mode"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: 'none',
                background: theme === 'light' ? 'var(--bg-surface)' : 'transparent',
                color: theme === 'light' ? '#f59e0b' : 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: theme === 'light' ? '0 1px 4px rgba(0,0,0,0.15)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Sun size={14} />
            </button>
            <button
              onClick={() => theme !== 'dark' && onThemeToggle()}
              title="Dark Mode"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: 'none',
                background: theme === 'dark' ? '#1f2937' : 'transparent',
                color: theme === 'dark' ? '#38bdf8' : 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: theme === 'dark' ? '0 1px 4px rgba(0,0,0,0.4)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Moon size={14} />
            </button>
          </div>

          {/* Compact Language Picker (Desktop Only) */}
          <div className="desktop-lang-picker" style={{ position: 'relative' }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 200)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 10px',
                borderRadius: '999px',
                border: '1px solid var(--border-light)',
                background: 'var(--bg-surface)',
                color: 'var(--text-main)',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Globe size={13} color="#0d9488" />
              <span>{translations[currentLang]?.native?.substring(0, 3) || 'EN'}</span>
            </button>

            {langOpen && (
              <div style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                width: '160px',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-light)',
                padding: '6px',
                zIndex: 1000,
              }}>
                {Object.entries(translations).map(([code, lang]) => (
                  <button
                    key={code}
                    onClick={() => {
                      onLangChange(code);
                      setLangOpen(false);
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '6px 10px',
                      background: currentLang === code ? 'rgba(13, 148, 136, 0.1)' : 'none',
                      border: 'none',
                      color: currentLang === code ? '#0d9488' : 'var(--text-main)',
                      fontSize: '0.8rem',
                      fontWeight: currentLang === code ? 800 : 500,
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{lang.native}</span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Glowing Animated CTA Button (Desktop Only) */}
          <Link
            to="/pricing"
            className="btn-primary desktop-cta-btn"
            style={{ padding: '8px 18px', fontSize: '0.84rem' }}
          >
            <span>Start Free</span>
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Toggle Button (Thumb-Friendly Touch Target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: mobileMenuOpen ? 'rgba(13, 148, 136, 0.2)' : 'rgba(13, 148, 136, 0.1)',
              border: '1.5px solid rgba(13, 148, 136, 0.35)',
              color: '#0d9488',
              cursor: 'pointer',
              flexShrink: 0,
              transition: 'all 0.15s ease'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>

      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          maxWidth: '1160px',
          margin: '8px auto 0 auto',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '20px',
          border: '1px solid var(--border-light)',
          padding: '18px 20px',
          boxShadow: '0 20px 45px rgba(0,0,0,0.25)',
          pointerEvents: 'auto',
          animation: 'dropIn 0.2s ease forwards',
          maxHeight: 'calc(100vh - 80px)',
          overflowY: 'auto'
        }}>
          {/* Mobile Drawer Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)', marginBottom: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#0d9488" />
              <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)' }}>Laundrybatch Menu</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-light)',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          {/* Primary Mobile CTA Button */}
          <Link
            to="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '0.92rem',
              fontWeight: 800,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none',
              marginBottom: '14px'
            }}
          >
            <span>Start Free Forever (No Card)</span>
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Language Selector Strip */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', paddingBottom: '12px', borderBottom: '1px solid var(--border-light)', marginBottom: '12px' }}>
            <Globe size={14} color="#0d9488" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700, flexShrink: 0 }}>Lang:</span>
            {Object.entries(translations).map(([code, l]) => (
              <button
                key={code}
                onClick={() => onLangChange(code)}
                style={{
                  padding: '4px 10px',
                  borderRadius: '999px',
                  border: currentLang === code ? '1.5px solid #0d9488' : '1px solid var(--border-light)',
                  background: currentLang === code ? 'rgba(13, 148, 136, 0.15)' : 'var(--bg-main)',
                  color: currentLang === code ? '#0d9488' : 'var(--text-main)',
                  fontSize: '0.74rem',
                  fontWeight: currentLang === code ? 800 : 500,
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                {l.native}
              </button>
            ))}
          </div>

          {/* Mobile Links List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontWeight: 700,
                fontSize: '0.94rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'var(--bg-main)'
              }}
            >
              <span>🏠 Home Page</span>
            </Link>

            {/* Highlighted Sole CRM Link for Mobile */}
            <Link
              to="/crm"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#0d9488',
                fontWeight: 800,
                fontSize: '0.94rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '12px',
                background: 'rgba(13, 148, 136, 0.12)',
                border: '1.5px solid rgba(13, 148, 136, 0.4)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Users size={18} color="#0d9488" />
                <span>Sole CRM Platform</span>
              </div>
              <span style={{
                fontSize: '0.66rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #0d9488, #6366f1)',
                color: 'white',
                padding: '3px 8px',
                borderRadius: '999px'
              }}>
                FLAGSHIP
              </span>
            </Link>

            <Link
              to="/pos"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px' }}
            >
              <Receipt size={18} color="#0284c7" /> Cloud POS Counter
            </Link>

            <Link
              to="/machinery"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px' }}
            >
              <Settings size={18} color="#7c3aed" /> Commercial Washers & Plants
            </Link>

            <Link
              to="/chemicals"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px' }}
            >
              <FlaskConical size={18} color="#10b981" /> Custom Branded Detergents
            </Link>

            <Link
              to="/supplies"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px' }}
            >
              <Package size={18} color="#f59e0b" /> Supplies & QR Rolls
            </Link>

            <Link
              to="/tools"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 12px' }}
            >
              <Sparkles size={18} color="#0d9488" /> 8 Free Interactive Tools
            </Link>

            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 700, fontSize: '0.92rem', padding: '9px 12px' }}
            >
              Pricing Plans
            </Link>



            <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '10px', marginTop: '6px' }}>
              <a
                href="https://wa.me/917389327066"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px',
                  borderRadius: '999px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav-group { display: flex !important; }
          .desktop-cta-btn { display: inline-flex !important; }
          .desktop-lang-picker { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 991px) {
          .desktop-nav-group { display: none !important; }
          .desktop-cta-btn { display: none !important; }
          .desktop-lang-picker { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .floating-nav-wrapper {
            padding: 0 10px !important;
            top: 8px !important;
          }
          .floating-nav-island {
            padding: 8px 14px !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};
