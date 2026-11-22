import React, { useEffect, useState, useCallback, useRef } from 'react';
import '../../styles/cursor.css';

/**
 * CustomCursor Component
 * 
 * Recreates the authentic puppy-paw cursor and animated trail from https://puppy.instabizweb.com/.
 * - Primary cursor: Hardware-accelerated SVG via CSS (/cursor/paw.svg, hotspot 9 6)
 * - Interactive hover & active state: /cursor/paw-press.svg
 * - Animated paw-print trail: Subtle trail of ~3-4 small puppy paw prints behind the moving cursor
 * - Click effect: Subtle tactile paw-print burst animation at the click point
 * - Accessibility: Disabled automatically on touch devices and respects prefers-reduced-motion
 */
export default function CustomCursor() {
  const [bursts, setBursts] = useState([]);
  const [trail, setTrail] = useState([]);

  const lastPosRef = useRef(null);
  const isLeftRef = useRef(false);
  const rafIdRef = useRef(null);

  // Handle subtle paw trail on mouse movement
  const handlePointerMove = useCallback((e) => {
    // Check if device supports fine hover and prefers motion
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Do not trigger paw trail inside editable text inputs or textareas
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }

    const { clientX: currX, clientY: currY } = e;

    if (!lastPosRef.current) {
      lastPosRef.current = { x: currX, y: currY };
      return;
    }

    const dx = currX - lastPosRef.current.x;
    const dy = currY - lastPosRef.current.y;
    const distance = Math.hypot(dx, dy);

    // Movement threshold: sensible distance (~34px) between prints so trail looks like real puppy steps
    if (distance >= 34) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(() => {
        // Calculate angle of movement so the paw points in the direction of travel
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

        // Alternate left and right paws with a delicate lateral offset
        const isLeft = !isLeftRef.current;
        isLeftRef.current = isLeft;

        const rad = (angle - 90 + (isLeft ? -90 : 90)) * (Math.PI / 180);
        const lateralOffset = 5.5; // subtle offset between left & right paws
        const pawX = currX + Math.cos(rad) * lateralOffset;
        const pawY = currY + Math.sin(rad) * lateralOffset;
        const rot = angle + (isLeft ? -10 : 10);

        const id = Date.now() + Math.random();
        const newPrint = {
          id,
          x: Math.round(pawX),
          y: Math.round(pawY),
          rot: Math.round(rot)
        };

        // Maintain maximum 3-4 visible prints in the trail at a time
        setTrail((prev) => [...prev.slice(-3), newPrint]);

        // Clean up individual print when animation completes (700ms)
        setTimeout(() => {
          setTrail((prev) => prev.filter((p) => p.id !== id));
        }, 700);

        lastPosRef.current = { x: currX, y: currY };
      });
    }
  }, []);

  // Handle tactile click burst
  const handleClick = useCallback((e) => {
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

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

    setBursts((prev) => [...prev.slice(-4), newBurst]);

    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 550);
  }, []);

  useEffect(() => {
    const isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handleClick, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handleClick);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [handlePointerMove, handleClick]);

  // If nothing to render, keep DOM clean
  if (trail.length === 0 && bursts.length === 0) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Animated Paw-Print Trail */}
      {trail.map((item) => (
        <span
          key={item.id}
          className="tp-paw-trail-item"
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`,
            '--rot': `${item.rot}deg`
          }}
        >
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full"
            fill="#e4a352"
            opacity="0.9"
            aria-hidden="true"
          >
            {/* Signature 4 toe pads + 1 central pad */}
            <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
          </svg>
        </span>
      ))}

      {/* Tactile Paw Click Bursts */}
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
