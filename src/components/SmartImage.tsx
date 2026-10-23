import React, { useState } from 'react';
import { getAssetUrl } from '../utils/assetUrl';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackIcon?: React.ReactNode;
  fallbackTitle?: string;
  containerStyle?: React.CSSProperties;
}

/**
 * SmartImage provides bulletproof image loading for GitHub Pages and mobile networks.
 * It attempts multiple alternative URL resolutions (base URL, relative, absolute),
 * and if all fail or while offline, displays a stunning brand-compliant fallback card.
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  style,
  className,
  fallbackIcon,
  fallbackTitle,
  containerStyle,
  ...props
}) => {
  const [attempt, setAttempt] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Extract clean relative filename (e.g., 'images/pos_terminal.jpg' -> 'pos_terminal.jpg')
  const cleanPath = src.replace(/^\/+/, '').replace(/^laundrybatch\//, '');
  const fileName = cleanPath.split('/').pop() || '';

  // Generate fallback URL candidates
  const candidates = [
    getAssetUrl(cleanPath),
    `./images/${fileName}`,
    `/laundrybatch/images/${fileName}`,
    `images/${fileName}`,
    `https://samanjain95.github.io/laundrybatch/images/${fileName}`,
  ];

  const currentSrc = candidates[attempt] || src;

  const handleError = () => {
    if (attempt < candidates.length - 1) {
      setAttempt(attempt + 1);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`smart-image-fallback ${className || ''}`}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '200px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          color: '#ffffff',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 'inherit',
          ...containerStyle,
        }}
      >
        <div
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #0d9488, #0284c7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            boxShadow: '0 8px 20px rgba(13, 148, 136, 0.35)',
          }}
        >
          {fallbackIcon || (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          )}
        </div>
        <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f8fafc', marginBottom: '4px' }}>
          {fallbackTitle || alt}
        </div>
        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
          Laundrybatch Technologies • Delhi Central Depot
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={handleError}
      onLoad={() => setIsLoaded(true)}
      className={className}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0.85,
        transition: 'opacity 0.25s ease',
      }}
      {...props}
    />
  );
};
