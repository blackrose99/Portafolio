import { useLayoutEffect, useRef } from 'react';
import { animate, stagger, utils } from 'animejs';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Fire `onEnter(element)` exactly once, when the element scrolls into view.
 * Used for custom scroll-triggered animations (count-ups, progress bars…).
 */
export function useInView(onEnter, { threshold = 0.2, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const cb = useRef(onEnter);
  cb.current = onEnter;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cb.current && cb.current(el);
            obs.unobserve(el);
          }
        });
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

/**
 * Reveal a container — or its [data-reveal-child] elements, staggered —
 * with a soft fade + slide as it enters the viewport.
 * Returns a ref to attach to the container.
 */
export function useReveal({
  y = 36,
  x = 0,
  scale = null,
  duration = 760,
  delay = 0,
  staggerMs = 0,
  ease = 'outExpo',
  threshold = 0.18,
} = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const children = staggerMs ? el.querySelectorAll('[data-reveal-child]') : null;
    const targets = children && children.length ? children : el;

    if (prefersReduced()) return undefined; // leave content fully visible

    // Hide synchronously before paint to avoid any flash.
    const from = { opacity: 0 };
    if (y) from.translateY = y;
    if (x) from.translateX = x;
    if (scale != null) from.scale = scale;
    utils.set(targets, from);

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const to = {
            opacity: 1,
            duration,
            ease,
            delay: staggerMs ? stagger(staggerMs, { start: delay }) : delay,
          };
          if (y) to.translateY = 0;
          if (x) to.translateX = 0;
          if (scale != null) to.scale = 1;
          animate(targets, to);
          obs.unobserve(el);
        });
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [y, x, scale, duration, delay, staggerMs, ease, threshold]);

  return ref;
}
