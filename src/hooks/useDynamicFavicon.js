import { useEffect } from 'react';

/* ============================================================
   DYNAMIC CONTEXTUAL FAVICON
   The tab icon morphs to match the section in view. All glyphs
   are ORIGINAL line-art (no framework logos), drawn on a
   rounded tile with the portfolio's signature blue→cyan ramp.
   ============================================================ */

// 24×24 stroke glyphs — one per section context.
const GLYPHS = {
  // Hero — a code monogram « ‹ › »
  top: '<path d="M9 8 4 12l5 4M15 8l5 4-5 4"/>',
  // About — a person
  about:
    '<circle cx="12" cy="9" r="3"/>' +
    '<path d="M6 19a6 6 0 0 1 12 0"/>',
  // Story — an open book
  story:
    '<path d="M12 7C10.5 6 8 5.5 5 6v11c3-.5 5.5 0 7 1 1.5-1 4-1.5 7-1V6c-3-.5-5.5 0-7 1Z"/>' +
    '<path d="M12 7v12"/>',
  // Education — a graduation cap
  education:
    '<path d="M3 9l9-4 9 4-9 4-9-4Z"/>' +
    '<path d="M7 11v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4"/>',
  // Skills — a four-point spark
  skills: '<path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
  // Services — a tidy grid of tiles
  services:
    '<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/>' +
    '<rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/>' +
    '<rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/>' +
    '<rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>',
  // Contact — an envelope
  contact:
    '<rect x="3" y="6" width="18" height="12" rx="2.5"/>' +
    '<path d="M4 8l8 5 8-5"/>',
};

const buildSvg = (glyph) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
      `<stop offset="0" stop-color="#3b82f6"/><stop offset="1" stop-color="#22d3ee"/>` +
    `</linearGradient></defs>` +
    `<rect width="32" height="32" rx="8" fill="url(#g)"/>` +
    `<g transform="translate(4 4)" fill="none" stroke="#06122b" ` +
      `stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${glyph}</g>` +
  `</svg>`;

const toDataUri = (svg) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

// Pre-encode every glyph once — swapping is then a cheap attribute write.
const ICONS = Object.fromEntries(
  Object.entries(GLYPHS).map(([key, glyph]) => [key, toDataUri(buildSvg(glyph))]),
);

function ensureLink() {
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/svg+xml';
  return link;
}

/**
 * Watch the given section ids and repaint the favicon to match whichever
 * one is currently in view. Falls back to the hero icon at the top.
 */
export function useDynamicFavicon(sectionIds = []) {
  useEffect(() => {
    const link = ensureLink();
    link.href = ICONS.top;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    let current = 'top';
    const setIcon = (key) => {
      if (key === current || !ICONS[key]) return;
      current = key;
      link.href = ICONS[key];
    };

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's visible.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setIcon(visible.target.id);
        else if (window.scrollY < 80) setIcon('top');
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [sectionIds]);
}

export default useDynamicFavicon;
