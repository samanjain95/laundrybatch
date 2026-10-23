import React, { useEffect, useRef } from 'react';

export const LaundryTumblerCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    // Bubble simulation
    interface Bubble {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      alpha: number;
      color: string;
    }

    const bubbleColors = [
      'rgba(6, 182, 212, 0.4)',  // cyan
      'rgba(45, 212, 191, 0.45)', // teal
      'rgba(14, 165, 233, 0.35)', // sky
      'rgba(16, 185, 129, 0.3)',  // mint
    ];

    const bubbles: Bubble[] = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 4 + Math.random() * 14,
      speedY: 0.4 + Math.random() * 1.2,
      speedX: (Math.random() - 0.5) * 0.6,
      alpha: 0.2 + Math.random() * 0.6,
      color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
    }));

    let rotationAngle = 0;
    let wavePhase = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const drumRadius = Math.min(centerX, centerY) - 20;

      // 1. Draw Outer Machine Glow
      const glowGrad = ctx.createRadialGradient(centerX, centerY, drumRadius * 0.4, centerX, centerY, drumRadius + 20);
      glowGrad.addColorStop(0, 'rgba(13, 148, 136, 0.15)');
      glowGrad.addColorStop(0.7, 'rgba(6, 182, 212, 0.08)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, drumRadius + 18, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw Metallic Chrome Bezel Ring
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, drumRadius, 0, Math.PI * 2);
      ctx.lineWidth = 10;
      const bezelGrad = ctx.createLinearGradient(0, centerY - drumRadius, width, centerY + drumRadius);
      bezelGrad.addColorStop(0, '#94a3b8');
      bezelGrad.addColorStop(0.3, '#ffffff');
      bezelGrad.addColorStop(0.6, '#0f766e');
      bezelGrad.addColorStop(1, '#334155');
      ctx.strokeStyle = bezelGrad;
      ctx.stroke();

      // Inner drum clipping region
      ctx.beginPath();
      ctx.arc(centerX, centerY, drumRadius - 6, 0, Math.PI * 2);
      ctx.clip();

      // Deep water pool background
      const waterGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, drumRadius);
      waterGrad.addColorStop(0, '#0f172a');
      waterGrad.addColorStop(0.6, '#093a3e');
      waterGrad.addColorStop(1, '#042226');
      ctx.fillStyle = waterGrad;
      ctx.fillRect(centerX - drumRadius, centerY - drumRadius, drumRadius * 2, drumRadius * 2);

      // Rotating perforated drum holes
      rotationAngle += 0.012;
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle);
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI * 2) / 12;
        const hx = Math.cos(angle) * (drumRadius * 0.7);
        const hy = Math.sin(angle) * (drumRadius * 0.7);
        ctx.beginPath();
        ctx.arc(hx, hy, 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.fill();

        // Agitator blades
        if (i % 3 === 0) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(angle) * (drumRadius * 0.85), Math.sin(angle) * (drumRadius * 0.85));
          ctx.lineWidth = 6;
          ctx.strokeStyle = 'rgba(45, 212, 191, 0.25)';
          ctx.stroke();
        }
      }
      ctx.restore();

      // 3. Dynamic Water Surface Waves
      wavePhase += 0.035;
      ctx.beginPath();
      ctx.moveTo(centerX - drumRadius, centerY + 20);
      for (let x = centerX - drumRadius; x <= centerX + drumRadius; x += 8) {
        const dx = x - centerX;
        const y = centerY + 25 + Math.sin(dx * 0.03 + wavePhase) * 12 + Math.cos(dx * 0.02 - wavePhase * 0.8) * 8;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(centerX + drumRadius, centerY + drumRadius);
      ctx.lineTo(centerX - drumRadius, centerY + drumRadius);
      ctx.closePath();
      const waveGrad = ctx.createLinearGradient(0, centerY, 0, centerY + drumRadius);
      waveGrad.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
      waveGrad.addColorStop(1, 'rgba(13, 148, 136, 0.6)');
      ctx.fillStyle = waveGrad;
      ctx.fill();

      // 4. Rising Soap Bubbles
      bubbles.forEach((b) => {
        b.y -= b.speedY;
        b.x += b.speedX;

        // Wrap around inside drum
        const distFromCenter = Math.hypot(b.x - centerX, b.y - centerY);
        if (b.y < centerY - drumRadius + 10 || distFromCenter > drumRadius - 10) {
          b.y = centerY + drumRadius - 20;
          b.x = centerX + (Math.random() - 0.5) * (drumRadius * 1.4);
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();

        // Highlight sheen on bubble
        ctx.beginPath();
        ctx.arc(b.x - b.radius * 0.3, b.y - b.radius * 0.3, b.radius * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();
      });

      // 5. Glass Porthole Specular Sheen (Curved reflection)
      ctx.beginPath();
      ctx.ellipse(centerX - drumRadius * 0.3, centerY - drumRadius * 0.35, drumRadius * 0.45, drumRadius * 0.25, -Math.PI / 4, 0, Math.PI * 2);
      const sheenGrad = ctx.createLinearGradient(centerX - drumRadius * 0.6, centerY - drumRadius * 0.6, centerX, centerY);
      sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      sheenGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
      sheenGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = sheenGrad;
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      {/* Floating Interactive Badge */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(45, 212, 191, 0.4)',
        padding: '6px 14px',
        borderRadius: '999px',
        color: '#2dd4bf',
        fontSize: '0.78rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
      }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
        AI Eco-Cycle Running • 42% Water Saved
      </div>
    </div>
  );
};
