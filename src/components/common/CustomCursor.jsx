import React, { useEffect, useRef } from 'react';
import '../../styles/cursor.css';

// Exact TeddyPups signature 4-toe + main pad vector geometry
const PAW_SVG_PATH =
  'M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z';

/**
 * CustomCursor Component
 * 
 * High-performance, hardware-accelerated canvas paw-trail and click burst system.
 * Faithfully matches the original reference website (https://puppy.instabizweb.com/)
 * with enhanced luminous soft golden glow and fluid transitions:
 * - Hardware CSS cursor: /cursor/paw.svg (default) and /cursor/paw-press.svg (hover/active)
 * - Canvas Paw Trail: High-DPI canvas overlay with ~3-4 radiant paws following cursor movement
 * - Luminous Glow: Polished warm caramel/cinnamon fill with soft golden bloom visible on both light and dark backgrounds
 * - Zero Lag & Zero Leak: Uses requestAnimationFrame, zero DOM element thrashing, auto-sleeps when idle
 * - Accessibility: Automatically disabled on touch screens and honors prefers-reduced-motion
 */
export default function CustomCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only activate on devices with fine pointers (mouse) and no reduced motion
    const isFinePointer =
      window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pawPath = new Path2D(PAW_SVG_PATH);
    const prints = [];
    const bursts = [];

    let dpr = 1;
    let rafId = 0;
    let isRunning = false;
    let lastX = NaN;
    let lastY = NaN;
    let distanceAcc = 0;
    let altStep = 1;

    // Resize canvas with devicePixelRatio for razor-sharp rendering on Retina screens
    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    handleResize();

    // Main animation render loop
    const render = (now) => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Paw-Print Trail with Luminous Glow
      for (let i = prints.length - 1; i >= 0; i--) {
        const item = prints[i];
        const age = now - item.born;

        if (age > 1000) {
          prints.splice(i, 1);
          continue;
        }

        // Entrance ease (0 - 60ms) and decay (600ms - 1000ms)
        const entrance = Math.min(1, age / 60);
        const fade = age < 600 ? 1 : Math.max(0, 1 - (age - 600) / 400);
        const alpha = 0.52 * entrance * fade * fade;
        const scale = (0.27 + (1 - fade) * 0.03) * dpr;

        // Position & rotation
        ctx.setTransform(scale, 0, 0, scale, item.x * dpr, item.y * dpr);
        ctx.rotate(item.angle);
        ctx.translate(-32, -34);

        // Soft luminous golden glow (visible on dark footer & light backgrounds)
        ctx.shadowColor = `rgba(242, 190, 107, ${alpha * 0.85})`;
        ctx.shadowBlur = 10 * dpr;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // Polished paw fill
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#c2622b';
        ctx.fill(pawPath);

        // Luminous highlight outline
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.strokeStyle = `rgba(255, 241, 216, ${alpha * 0.65})`;
        ctx.lineWidth = 1.2;
        ctx.stroke(pawPath);
      }

      // 2. Draw Tactile Click Bursts with Soft Radial Halo
      for (let j = bursts.length - 1; j >= 0; j--) {
        const burst = bursts[j];
        const bAge = now - burst.born;

        if (bAge > 500) {
          bursts.splice(j, 1);
          continue;
        }

        const bProgress = bAge / 500;
        const bAlpha = (1 - bProgress) * 0.75;
        const bScale = (0.35 + bProgress * 0.25) * dpr;

        ctx.setTransform(bScale, 0, 0, bScale, burst.x * dpr, burst.y * dpr);
        ctx.rotate(burst.angle);
        ctx.translate(-32, -34);

        // Radiant golden bloom
        ctx.shadowColor = `rgba(242, 190, 107, ${bAlpha})`;
        ctx.shadowBlur = 16 * dpr;

        ctx.globalAlpha = bAlpha;
        ctx.fillStyle = '#2A170E';
        ctx.fill(pawPath);

        ctx.strokeStyle = `rgba(242, 190, 107, ${bAlpha * 0.9})`;
        ctx.lineWidth = 2.4;
        ctx.stroke(pawPath);
      }

      // Loop while particles are active, or pause to save CPU
      if (prints.length > 0 || bursts.length > 0) {
        rafId = requestAnimationFrame(render);
      } else {
        isRunning = false;
      }
    };

    // Wake up RAF loop
    const wakeLoop = () => {
      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(render);
      }
    };

    // Track mouse movement
    const handlePointerMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;

      const currX = e.clientX;
      const currY = e.clientY;

      if (Number.isNaN(lastX)) {
        lastX = currX;
        lastY = currY;
        return;
      }

      const dx = currX - lastX;
      const dy = currY - lastY;
      const stepDist = Math.hypot(dx, dy);
      distanceAcc += stepDist;

      // Distance threshold: 46px matches original site's natural walking stride
      if (distanceAcc >= 46) {
        distanceAcc = 0;

        // Skip trail generation inside text inputs to preserve focused typing
        const target = e.target;
        const isInput =
          target &&
          (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

        if (!isInput) {
          // Paw travel orientation
          const angle = Math.atan2(dy, dx) + Math.PI / 2;

          // Alternating step lateral offset (7px left and right)
          altStep = -altStep;
          const lateral = 7 * altStep;

          // Align trail behind the paw cursor hotspot
          const pawX = currX + Math.cos(angle) * lateral + 14;
          const pawY = currY + Math.sin(angle) * lateral + 16;

          prints.push({
            x: pawX,
            y: pawY,
            angle,
            born: performance.now()
          });

          // Keep history capped so approximately 3-4 paws stay visible
          if (prints.length > 8) {
            prints.shift();
          }

          wakeLoop();
        }
      }

      lastX = currX;
      lastY = currY;
    };

    // Tactile click burst
    const handlePointerDown = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;

      const target = e.target;
      const isInput =
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

      if (isInput) return;

      bursts.push({
        x: e.clientX,
        y: e.clientY,
        angle: -0.31, // -18 deg in radians
        born: performance.now()
      });

      if (bursts.length > 5) {
        bursts.shift();
      }

      wakeLoop();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(rafId);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] size-full"
    />
  );
}
