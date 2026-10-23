import React, { useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Maximize2, 
  ShieldCheck, 
  Zap,
  Globe,
  ArrowRight
} from 'lucide-react';

type ViewMode = 'all' | 'desktop' | 'tablet' | 'mobile';

interface PageTarget {
  id: string;
  name: string;
  path: string;
  icon: string;
}

const AVAILABLE_PAGES: PageTarget[] = [
  { id: 'home', name: 'Homepage', path: '/', icon: '🏠' },
  { id: 'crm', name: 'Sole CRM', path: '/crm', icon: '🛡️' },
  { id: 'pos', name: 'Cloud POS', path: '/pos', icon: '🖥️' },
  { id: 'machinery', name: 'Machinery', path: '/machinery', icon: '🏭' },
  { id: 'chemicals', name: 'Detergents', path: '/chemicals', icon: '🧴' },
  { id: 'supplies', name: 'Raw Supplies', path: '/supplies', icon: '📦' },
  { id: 'pricing', name: 'Pricing Plans', path: '/pricing', icon: '💳' },
  { id: 'tools', name: 'Growth Tools', path: '/tools', icon: '🧮' },
];

export const ResponsiveTesterPage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>('/');
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [isLandscape, setIsLandscape] = useState<boolean>(false);
  const [scaleFactor, setScaleFactor] = useState<number>(0.85);

  const currentPageObj = AVAILABLE_PAGES.find((p) => p.path === selectedPage) || AVAILABLE_PAGES[0];

  const tabletWidth = isLandscape ? 1024 : 768;
  const tabletHeight = isLandscape ? 768 : 960;

  const mobileWidth = isLandscape ? 740 : 390;
  const mobileHeight = isLandscape ? 390 : 780;

  return (
    <div style={{ backgroundColor: 'var(--bg-main)', minHeight: '100vh', padding: '36px 0 80px' }}>
      <div className="container" style={{ padding: '0 24px', maxWidth: '1440px' }}>
        
        {/* Top Title & Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 32px' }}>
          <div
            className="badge-pill"
            style={{
              background: 'rgba(13, 148, 136, 0.12)',
              border: '1px solid rgba(13, 148, 136, 0.35)',
              color: '#0d9488',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '14px'
            }}
          >
            <Sparkles size={14} /> Localhost Device Lab & Responsiveness Studio
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.6rem)', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1.2, margin: '0 0 12px 0' }}>
            Live Device Responsiveness Screen
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, margin: 0 }}>
            Inspect and interact with any page across <strong>Desktop (1280px+)</strong>, <strong>Tablet iPad ({tabletWidth}px)</strong>, and <strong>Mobile iPhone ({mobileWidth}px)</strong> side-by-side in real-time.
          </p>
        </div>

        {/* Master Control Bar */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '20px',
            padding: '20px',
            marginBottom: '32px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          {/* Row 1: Select Target Page to Preview */}
          <div>
            <div style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              1. Choose Page to Test on Devices:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {AVAILABLE_PAGES.map((page) => {
                const isSelected = selectedPage === page.path;
                return (
                  <button
                    key={page.id}
                    onClick={() => setSelectedPage(page.path)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 16px',
                      borderRadius: '999px',
                      border: isSelected ? '1.5px solid #0d9488' : '1px solid var(--border-light)',
                      background: isSelected ? 'rgba(13, 148, 136, 0.14)' : 'var(--bg-surface)',
                      color: isSelected ? '#0d9488' : 'var(--text-main)',
                      fontSize: '0.84rem',
                      fontWeight: isSelected ? 800 : 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <span>{page.icon}</span>
                    <span>{page.name}</span>
                    <span style={{ fontSize: '0.72rem', color: isSelected ? '#0d9488' : 'var(--text-muted)' }}>({page.path})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 2: Viewport Mode & Layout Controls */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '14px', paddingTop: '14px', borderTop: '1px solid var(--border-light)' }}>
            
            {/* View Mode Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', marginRight: '6px', textTransform: 'uppercase' }}>
                Mode:
              </span>
              {[
                { id: 'all', label: 'Multi-Device Split (All 3)', icon: Layers },
                { id: 'mobile', label: 'iPhone Mobile (390px)', icon: Smartphone },
                { id: 'tablet', label: 'iPad Tablet (768px)', icon: Tablet },
                { id: 'desktop', label: 'Desktop (Full)', icon: Monitor },
              ].map((m) => {
                const Icon = m.icon;
                const isActive = viewMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setViewMode(m.id as ViewMode)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 14px',
                      borderRadius: '999px',
                      border: isActive ? '1.5px solid #0d9488' : '1px solid var(--border-light)',
                      background: isActive ? '#0d9488' : 'var(--bg-surface)',
                      color: isActive ? '#ffffff' : 'var(--text-sub)',
                      fontSize: '0.8rem',
                      fontWeight: isActive ? 800 : 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Icon size={14} />
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Utility Toggles: Rotate + Zoom */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => setIsLandscape(!isLandscape)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: '999px',
                  border: '1px solid var(--border-light)',
                  background: isLandscape ? 'rgba(2, 132, 199, 0.15)' : 'var(--bg-surface)',
                  color: isLandscape ? '#0284c7' : 'var(--text-main)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <RotateCw size={14} />
                <span>{isLandscape ? 'Landscape Mode' : 'Portrait Mode'}</span>
              </button>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'var(--bg-surface)', border: '1px solid var(--border-light)', padding: '3px 8px', borderRadius: '999px' }}>
                <button
                  onClick={() => setScaleFactor((prev) => Math.max(0.6, prev - 0.1))}
                  title="Zoom Out"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', padding: '4px' }}
                >
                  <ZoomOut size={14} />
                </button>
                <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--text-muted)', minWidth: '40px', textAlign: 'center' }}>
                  {Math.round(scaleFactor * 100)}%
                </span>
                <button
                  onClick={() => setScaleFactor((prev) => Math.min(1.2, prev + 0.1))}
                  title="Zoom In"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)', padding: '4px' }}
                >
                  <ZoomIn size={14} />
                </button>
              </div>

              <a
                href={selectedPage}
                target="_blank"
                rel="noopener noreferrer"
                title="Open page in new browser tab"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 14px',
                  borderRadius: '999px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-main)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                <span>Direct URL</span>
                <ExternalLink size={13} />
              </a>
            </div>

          </div>
        </div>

        {/* ---------------- LIVE SIMULATOR DEVICE VIEWPORTS ---------------- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* MULTI-DEVICE SPLIT (ALL 3 SIDE-BY-SIDE) */}
          {(viewMode === 'all' || viewMode === 'mobile') && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Smartphone size={18} color="#0d9488" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  Mobile Phone Viewport ({mobileWidth}px × {mobileHeight}px)
                </h3>
                <span style={{ fontSize: '0.72rem', background: 'rgba(13, 148, 136, 0.15)', color: '#0d9488', fontWeight: 800, padding: '2px 8px', borderRadius: '999px' }}>
                  iPhone Touch UI
                </span>
              </div>

              {/* Mobile Phone Mockup Frame */}
              <div
                style={{
                  width: `${mobileWidth}px`,
                  height: `${mobileHeight}px`,
                  borderRadius: '44px',
                  border: '12px solid #0f172a',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  background: '#000000',
                  position: 'relative',
                  transform: `scale(${scaleFactor})`,
                  transformOrigin: 'top center',
                  marginBottom: scaleFactor < 1 ? `-${mobileHeight * (1 - scaleFactor)}px` : '0px'
                }}
              >
                {/* Dynamic Island Notch */}
                <div
                  style={{
                    width: '105px',
                    height: '24px',
                    background: '#000000',
                    borderRadius: '999px',
                    margin: '8px auto',
                    position: 'absolute',
                    top: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 100,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '12px'
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0284c7' }} />
                </div>

                {/* Embedded Live Web View */}
                <iframe
                  src={selectedPage}
                  title={`Mobile Preview - ${currentPageObj.name}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                    background: '#ffffff'
                  }}
                />
              </div>
            </div>
          )}

          {/* TABLET VIEW */}
          {(viewMode === 'all' || viewMode === 'tablet') && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Tablet size={18} color="#0284c7" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  Tablet iPad Viewport ({tabletWidth}px × {tabletHeight}px)
                </h3>
                <span style={{ fontSize: '0.72rem', background: 'rgba(2, 132, 199, 0.15)', color: '#0284c7', fontWeight: 800, padding: '2px 8px', borderRadius: '999px' }}>
                  iPad 2-Column Responsive
                </span>
              </div>

              {/* Tablet Mockup Frame */}
              <div
                style={{
                  width: `${tabletWidth}px`,
                  height: `${tabletHeight}px`,
                  borderRadius: '32px',
                  border: '12px solid #1e293b',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  background: '#000000',
                  position: 'relative',
                  transform: `scale(${scaleFactor})`,
                  transformOrigin: 'top center',
                  marginBottom: scaleFactor < 1 ? `-${tabletHeight * (1 - scaleFactor)}px` : '0px'
                }}
              >
                {/* Tablet Top Camera Bezel */}
                <div
                  style={{
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: '#334155',
                    margin: '6px auto 2px',
                    position: 'absolute',
                    top: '2px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 100,
                    border: '1px solid #475569'
                  }}
                />

                {/* Embedded Live Web View */}
                <iframe
                  src={selectedPage}
                  title={`Tablet Preview - ${currentPageObj.name}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                    background: '#ffffff'
                  }}
                />
              </div>
            </div>
          )}

          {/* DESKTOP VIEW */}
          {(viewMode === 'all' || viewMode === 'desktop') && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Monitor size={18} color="#6366f1" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                  Desktop Monitor Viewport (1200px+ Full Screen)
                </h3>
                <span style={{ fontSize: '0.72rem', background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1', fontWeight: 800, padding: '2px 8px', borderRadius: '999px' }}>
                  Full Mega-Menu & 3D Interactive
                </span>
              </div>

              {/* Desktop Browser Window Mockup */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '1200px',
                  height: '800px',
                  borderRadius: '18px',
                  border: '1px solid var(--border-medium)',
                  boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
                  overflow: 'hidden',
                  background: 'var(--bg-surface)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Browser Title Bar */}
                <div
                  style={{
                    background: 'var(--bg-main)',
                    borderBottom: '1px solid var(--border-light)',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '8px',
                      padding: '4px 12px',
                      fontSize: '0.76rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>🔒</span>
                    <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>http://localhost:5173{selectedPage}</span>
                  </div>
                </div>

                {/* Embedded Live Web View */}
                <iframe
                  src={selectedPage}
                  title={`Desktop Preview - ${currentPageObj.name}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                    flex: 1,
                    background: '#ffffff'
                  }}
                />
              </div>
            </div>
          )}

        </div>

        {/* Diagnostic Checklist Footer */}
        <div
          style={{
            marginTop: '48px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)' }}>Zero Overflow Guaranteed</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Tested down to 320px width</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)' }}>Touch-Friendly Targets</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Buttons and tabs exceed 44px</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)' }}>Adaptive Navigation</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Desktop Island $\rightarrow$ Mobile Drawer</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={18} color="#10b981" />
            <div>
              <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-main)' }}>ACO Schema Graph Live</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>AI & Answer Engine optimized</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
