'use client';
import React, { useRef, useEffect, useCallback, useMemo } from 'react';

    const throttle = (func: (...args: any[]) => void, limit: number) => {
    let lastCall = 0;
    return function (this: any, ...args: any[]) {
        const now = performance.now();
        if (now - lastCall >= limit) {
        lastCall = now;
        func.apply(this, args);
        }
    };
    };

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  vx: number;
  vy: number;
}

    export interface DotGridProps {
    dotSize?: number;
    gap?: number;
    baseColor?: string;
    activeColor?: string;
    proximity?: number;
    speedTrigger?: number;
    shockRadius?: number;
    shockStrength?: number;
    maxSpeed?: number;
    resistance?: number;
    returnDuration?: number;
    className?: string;
    style?: React.CSSProperties;
    }

    function hexToRgb(hex: string) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 0, g: 0, b: 0 };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
    }

    const DotGrid: React.FC<DotGridProps> = ({
    dotSize = 16,
    gap = 32,
    baseColor = '#5227FF',
    activeColor = '#5227FF',
    proximity = 150,
    speedTrigger = 100,
    shockRadius = 250,
    shockStrength = 5,
    maxSpeed = 5000,
    resistance = 750,
    returnDuration = 1.5,
    className = '',
    style
    }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0
  });

    const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
    const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

    const circlePath = useMemo(() => {
        if (typeof window === 'undefined' || !window.Path2D) return null;

        const p = new Path2D();
        p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
        return p;
    }, [dotSize]);

    const buildGrid = useCallback(() => {
        const wrap = wrapperRef.current;
        const canvas = canvasRef.current;
        if (!wrap || !canvas) return;

        const { width, height } = wrap.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);

        const cols = Math.floor((width + gap) / (dotSize + gap));
        const rows = Math.floor((height + gap) / (dotSize + gap));
        const cell = dotSize + gap;

        const gridW = cell * cols - gap;
        const gridH = cell * rows - gap;

        const extraX = width - gridW;
        const extraY = height - gridH;

        const startX = extraX / 2 + dotSize / 2;
        const startY = extraY / 2 + dotSize / 2;

    const dots: Dot[] = [];
        for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const cx = startX + x * cell;
            const cy = startY + y * cell;
        dots.push({ cx, cy, xOffset: 0, yOffset: 0, vx: 0, vy: 0 });
        }
        }
        dotsRef.current = dots;
    }, [dotSize, gap]);

  useEffect(() => {
        if (!circlePath) return;

    let rafId: number;
    const proxSq = proximity * proximity;
    // physics factors
    const decay = Math.exp(-1 / resistance);
    const returnRate = 1 / Math.max(0.001, returnDuration);

        const draw = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const { x: px, y: py } = pointerRef.current;

      for (const dot of dotsRef.current) {
        // integrate velocity with damping and spring back
        dot.vx *= decay;
        dot.vy *= decay;
        dot.vx += (-dot.xOffset) * returnRate;
        dot.vy += (-dot.yOffset) * returnRate;
        dot.xOffset += dot.vx * 0.016;
        dot.yOffset += dot.vy * 0.016;

            const ox = dot.cx + dot.xOffset;
            const oy = dot.cy + dot.yOffset;
            const dx = dot.cx - px;
            const dy = dot.cy - py;
            const dsq = dx * dx + dy * dy;

            let style = baseColor;
            if (dsq <= proxSq) {
            const dist = Math.sqrt(dsq);
            const t = 1 - dist / proximity;
            const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
            const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
            const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
            style = `rgb(${r},${g},${b})`;
            }

            ctx.save();
            ctx.translate(ox, oy);
            ctx.fillStyle = style;
            ctx.fill(circlePath);
            ctx.restore();
        }

        rafId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath, resistance, returnDuration]);

    useEffect(() => {
        buildGrid();
        let ro: ResizeObserver | null = null;
        if ('ResizeObserver' in window) {
        ro = new ResizeObserver(buildGrid);
        wrapperRef.current && ro.observe(wrapperRef.current);
        } else {
        (window as Window).addEventListener('resize', buildGrid);
        }
        return () => {
        if (ro) ro.disconnect();
        else window.removeEventListener('resize', buildGrid);
        };
    }, [buildGrid]);

  useEffect(() => {
    const applyPointer = (clientX: number, clientY: number) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = clientX - pr.lastX;
      const dy = clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = clientX;
      pr.lastY = clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const rect = canvasRef.current!.getBoundingClientRect();
      pr.x = clientX - rect.left;
      pr.y = clientY - rect.top;

      // apply small impulse to nearby dots
      for (const dot of dotsRef.current) {
        const ddx = dot.cx - pr.x;
        const ddy = dot.cy - pr.y;
        const dist = Math.hypot(ddx, ddy);
        if (speed > speedTrigger && dist < proximity) {
          const falloff = 1 - dist / proximity;
          dot.vx += (-ddx / (dist + 1e-3)) * shockStrength * falloff;
          dot.vy += (-ddy / (dist + 1e-3)) * shockStrength * falloff;
        }
      }
    };

    const onMove = (e: MouseEvent) => {
      applyPointer(e.clientX, e.clientY);
        };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const t = e.touches[0];
      applyPointer(t.clientX, t.clientY);
    };

        const onClick = (e: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dx = dot.cx - cx;
        const dy = dot.cy - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < shockRadius) {
          const falloff = Math.max(0, 1 - dist / shockRadius);
          dot.vx += (dx / (dist + 1e-3)) * shockStrength * falloff * 3;
          dot.vy += (dy / (dist + 1e-3)) * shockStrength * falloff * 3;
        }
      }
        };

    const throttledMove = throttle(onMove, 50);
        window.addEventListener('mousemove', throttledMove, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchstart', onTouchMove, { passive: true });
        window.addEventListener('click', onClick);

        return () => {
        window.removeEventListener('mousemove', throttledMove);
        window.removeEventListener('touchmove', onTouchMove as any);
        window.removeEventListener('touchstart', onTouchMove as any);
        window.removeEventListener('click', onClick);
        };
    }, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

    return (
        <section className={`p-4 flex items-center justify-center h-full w-full relative ${className}`} style={style}>
        <div ref={wrapperRef} className="w-full h-full relative">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
        </div>
        </section>
    );
    };

    export default DotGrid;
