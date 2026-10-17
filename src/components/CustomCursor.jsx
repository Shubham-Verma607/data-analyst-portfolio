import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setIsTouch(true);
      return;
    }

    function onMouseMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target;
      const clickable = target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer');
      setIsHovered(!!clickable);
    }

    function onMouseLeave() {
      setIsVisible(false);
    }

    function onMouseEnter() {
      setIsVisible(true);
    }

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing for outer ring
  useEffect(() => {
    if (isTouch) return;
    let animId;
    function follow() {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(follow);
    }
    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 overflow-hidden transition-opacity duration-300">
      {/* Central crisp dot */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '6px' : '5px',
          height: isHovered ? '6px' : '5px',
        }}
      />
      {/* Trailing soft ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out ${
          isHovered
            ? 'border-cyan-400 bg-cyan-400/15 scale-150'
            : 'border-cyan-500/50 bg-transparent scale-100'
        }`}
        style={{
          left: `${ringPos.x}px`,
          top: `${ringPos.y}px`,
          width: '32px',
          height: '32px',
        }}
      />
    </div>
  );
}
