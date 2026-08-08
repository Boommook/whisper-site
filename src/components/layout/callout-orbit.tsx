"use client";

import { useEffect, useRef } from "react";

const MAX_SIZE_PX = 288;
const SPEED_PX_PER_SEC = 18;

export function CalloutOrbit() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let x = 0;
    let y = 0;
    let vx = SPEED_PX_PER_SEC * 0.82;
    let vy = SPEED_PX_PER_SEC * 0.48;
    let size = MAX_SIZE_PX;
    let last = performance.now();
    let running = false;

    const applyTransform = () => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const fitToBounds = () => {
      const { width, height } = parent.getBoundingClientRect();
      size = Math.min(MAX_SIZE_PX, width, height);
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;

      const maxX = Math.max(0, width - size);
      const maxY = Math.max(0, height - size);
      x = Math.min(Math.max(0, x), maxX);
      y = Math.min(Math.max(0, y), maxY);
      applyTransform();
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const { width, height } = parent.getBoundingClientRect();
      const maxX = Math.max(0, width - size);
      const maxY = Math.max(0, height - size);

      x += vx * dt;
      y += vy * dt;

      if (x <= 0) {
        x = 0;
        vx = Math.abs(vx);
      } else if (x >= maxX) {
        x = maxX;
        vx = -Math.abs(vx);
      }

      if (y <= 0) {
        y = 0;
        vy = Math.abs(vy);
      } else if (y >= maxY) {
        y = maxY;
        vy = -Math.abs(vy);
      }

      applyTransform();
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const start = () => {
      if (running || motionQuery.matches) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    fitToBounds();
    const { width } = parent.getBoundingClientRect();
    x = Math.max(0, width - size);
    y = 0;
    applyTransform();

    if (!motionQuery.matches) start();

    const resizeObserver = new ResizeObserver(fitToBounds);
    resizeObserver.observe(parent);

    const visibility = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start();
        else stop();
      },
      { threshold: 0 },
    );
    visibility.observe(parent);

    const onMotionPreferenceChange = () => {
      if (motionQuery.matches) stop();
      else start();
    };
    motionQuery.addEventListener("change", onMotionPreferenceChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
      motionQuery.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute top-0 left-0 -z-10 size-72 rounded-full border-[2.25rem] border-white/8 will-change-transform"
    />
  );
}
