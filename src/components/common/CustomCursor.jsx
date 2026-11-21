import React, { useEffect, useState, useCallback } from 'react';
import '../../styles/cursor.css';

/**
 * CustomCursor Component
 * 
 * Recreates the authentic puppy-paw cursor from https://puppy.instabizweb.com/.
 * - Primary cursor: Hardware-accelerated SVG via CSS (/cursor/paw.svg, hotspot 9 6)
 * - Interactive hover & active state: /cursor/paw-press.svg
 * - Click effect: Subtle tactile paw-print burst animation at the click point
 * - Accessibility: Disabled automatically on touch devices and respects prefers-reduced-motion
 */
export default function CustomCursor() {
  const [bursts, setBursts] = useState([]);

  const handleClick = useCallback((e) => {
    // Check if device supports fine hover and prefers motion
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Do not trigger paw burst inside editable text inputs to avoid visual distraction
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }

    const id = Date.now() + Math.random();
    const newBurst = {
      id,
      x: e.clientX,
      y: e.clientY
    };

    setBursts((prev) => [...prev.slice(-6), newBurst]);

    // Clean up burst after animation completes (500ms)
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 550);
  }, []);

  useEffect(() => {
    // Only register listeners on fine pointer devices
    const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    window.addEventListener('pointerdown', handleClick, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handleClick);
    };
  }, [handleClick]);

  if (bursts.length === 0) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="tp-paw-burst"
          style={{
            left: `${burst.x}px`,
            top: `${burst.y}px`
          }}
        >
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full drop-shadow-sm"
            fill="#C2622B"
            stroke="#2A170E"
            strokeWidth="3.4"
            strokeLinejoin="round"
          >
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
