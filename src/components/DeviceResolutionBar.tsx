import React, { useState, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, Sparkles, RotateCw, Maximize2, Check, SmartphoneCharging } from 'lucide-react';

interface DeviceResolutionBarProps {
  deviceMode: 'desktop' | 'tablet' | 'mobile';
  onDeviceModeChange: (mode: 'desktop' | 'tablet' | 'mobile') => void;
}

export const DeviceResolutionBar: React.FC<DeviceResolutionBarProps> = ({
  deviceMode,
  onDeviceModeChange,
}) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    height: typeof window !== 'undefined' ? window.innerHeight : 900,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const deviceSpecs = {
    desktop: {
      label: 'Desktop Full',
      width: '100% Responsive',
      target: `${windowDimensions.width}px × ${windowDimensions.height}px`,
      note: 'Fluid Fullscreen View',
    },
    tablet: {
      label: 'Tablet View',
      width: '820px',
      target: '820px × 1180px (iPad Air)',
      note: 'Touch Optimized 2-Col Grid',
    },
    mobile: {
      label: 'Mobile View',
      width: '390px',
      target: '390px × 844px (iPhone / Android)',
      note: 'Single-Col Mobile Flow',
    },
  };

  const currentSpec = deviceSpecs[deviceMode];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      color: '#0f172a',
      padding: '8px 18px',
      fontSize: '0.82rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '10px',
      borderBottom: '2px solid #e2e8f0',
      boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
      zIndex: 1000,
      position: 'sticky',
      top: 0,
    }}>
      {/* Left: Device Resolve Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: '#f0fdfa',
          color: '#0d9488',
          border: '1px solid #ccfbf1',
          padding: '3px 10px',
          borderRadius: '999px',
          fontWeight: 700,
          fontSize: '0.74rem'
        }}>
          <Sparkles size={13} />
          <span>Device Resolution Manager</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569', fontSize: '0.78rem' }}>
          <span>Current Screen:</span>
          <strong style={{ color: '#0f172a', background: '#f1f5f9', padding: '2px 7px', borderRadius: '4px' }}>
            {windowDimensions.width} × {windowDimensions.height} px
          </strong>
          <span style={{ color: '#94a3b8' }}>•</span>
          <span style={{ color: '#0d9488', fontWeight: 600 }}>{currentSpec.note}</span>
        </div>
      </div>

      {/* Center/Right: Device Switcher Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600, marginRight: '4px' }}>
          Test Resolution:
        </span>

        {/* Desktop Button */}
        <button
          id="btn-device-desktop"
          onClick={() => onDeviceModeChange('desktop')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '8px',
            border: deviceMode === 'desktop' ? '2px solid #0d9488' : '1px solid #cbd5e1',
            background: deviceMode === 'desktop' ? '#f0fdfa' : '#ffffff',
            color: deviceMode === 'desktop' ? '#0d9488' : '#334155',
            fontWeight: deviceMode === 'desktop' ? 800 : 600,
            cursor: 'pointer',
            fontSize: '0.78rem',
            transition: 'all 0.15s ease',
          }}
          title="Full Desktop Screen"
        >
          <Monitor size={15} />
          <span>Desktop (Full)</span>
          {deviceMode === 'desktop' && <Check size={13} color="#0d9488" />}
        </button>

        {/* Tablet Button */}
        <button
          id="btn-device-tablet"
          onClick={() => onDeviceModeChange('tablet')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '8px',
            border: deviceMode === 'tablet' ? '2px solid #0d9488' : '1px solid #cbd5e1',
            background: deviceMode === 'tablet' ? '#f0fdfa' : '#ffffff',
            color: deviceMode === 'tablet' ? '#0d9488' : '#334155',
            fontWeight: deviceMode === 'tablet' ? 800 : 600,
            cursor: 'pointer',
            fontSize: '0.78rem',
            transition: 'all 0.15s ease',
          }}
          title="Tablet / iPad Screen (820px)"
        >
          <Tablet size={15} />
          <span>Tablet (iPad 820px)</span>
          {deviceMode === 'tablet' && <Check size={13} color="#0d9488" />}
        </button>

        {/* Mobile Button */}
        <button
          id="btn-device-mobile"
          onClick={() => onDeviceModeChange('mobile')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '8px',
            border: deviceMode === 'mobile' ? '2px solid #0d9488' : '1px solid #cbd5e1',
            background: deviceMode === 'mobile' ? '#f0fdfa' : '#ffffff',
            color: deviceMode === 'mobile' ? '#0d9488' : '#334155',
            fontWeight: deviceMode === 'mobile' ? 800 : 600,
            cursor: 'pointer',
            fontSize: '0.78rem',
            transition: 'all 0.15s ease',
          }}
          title="Mobile Phone Screen (390px)"
        >
          <Smartphone size={15} />
          <span>Mobile Phone (390px)</span>
          {deviceMode === 'mobile' && <Check size={13} color="#0d9488" />}
        </button>

        {/* Reset to Desktop if in simulator */}
        {deviceMode !== 'desktop' && (
          <button
            onClick={() => onDeviceModeChange('desktop')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid #94a3b8',
              background: '#f8fafc',
              color: '#475569',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.74rem'
            }}
            title="Reset to Full Screen"
          >
            <Maximize2 size={13} />
            <span>Full Width</span>
          </button>
        )}
      </div>
    </div>
  );
};
