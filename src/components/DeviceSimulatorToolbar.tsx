import React, { useState, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, Eye, EyeOff, RotateCcw, Check, Sparkles } from 'lucide-react';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

interface DeviceSimulatorToolbarProps {
  deviceMode: DeviceMode;
  onDeviceChange: (mode: DeviceMode) => void;
}

export const DeviceSimulatorToolbar: React.FC<DeviceSimulatorToolbarProps> = ({
  deviceMode,
  onDeviceChange,
}) => {
  const [minimized, setMinimized] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setCurrentWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const deviceLabels = {
    desktop: { label: 'Desktop', width: '100% Full', icon: Monitor },
    tablet: { label: 'Tablet (iPad)', width: '768px', icon: Tablet },
    mobile: { label: 'Mobile (iPhone)', width: '390px', icon: Smartphone },
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        title="Open Device Responsiveness Switcher"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 99999,
          background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)',
          color: '#ffffff',
          border: 'none',
          borderRadius: '999px',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.82rem',
          fontWeight: 700,
          boxShadow: '0 8px 24px rgba(13, 148, 136, 0.45)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        <Eye size={16} />
        <span>Device Simulator ({deviceLabels[deviceMode].label})</span>
      </button>
    );
  }

  return (
    <aside
      aria-label="Responsive Device Simulator"
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99999,
        background: 'rgba(15, 23, 42, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        borderRadius: '999px',
        padding: '6px 10px',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(13, 148, 136, 0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        maxWidth: '95vw',
        animation: 'dropIn 0.25s ease forwards',
      }}
    >
      {/* Device Indicator Tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '4px 12px',
          color: '#38bdf8',
          fontSize: '0.74rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Sparkles size={13} color="#2dd4bf" />
        <span style={{ display: 'none' }} className="device-toolbar-tag">
          Simulator:
        </span>
        <span style={{ color: '#ffffff' }}>{deviceLabels[deviceMode].width}</span>
      </div>

      {/* Switcher Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {(['desktop', 'tablet', 'mobile'] as DeviceMode[]).map((mode) => {
          const item = deviceLabels[mode];
          const Icon = item.icon;
          const isActive = deviceMode === mode;
          return (
            <button
              key={mode}
              onClick={() => onDeviceChange(mode)}
              title={`Switch to ${item.label} view`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '999px',
                border: 'none',
                background: isActive
                  ? 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)'
                  : 'transparent',
                color: isActive ? '#ffffff' : '#94a3b8',
                fontSize: '0.78rem',
                fontWeight: isActive ? 800 : 600,
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isActive ? '0 4px 14px rgba(13, 148, 136, 0.4)' : 'none',
              }}
            >
              <Icon size={14} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Minimize Button */}
      <button
        onClick={() => setMinimized(true)}
        title="Hide Simulator Toolbar"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          border: 'none',
          color: '#94a3b8',
          borderRadius: '50%',
          width: '28px',
          height: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginLeft: '4px',
          transition: 'all 0.15s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
      >
        <EyeOff size={14} />
      </button>

      <style>{`
        @media (min-width: 640px) {
          .device-toolbar-tag { display: inline !important; }
        }
      `}</style>
    </aside>
  );
};
