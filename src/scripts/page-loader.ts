const root = document.documentElement;
const loader = document.querySelector<HTMLElement>('[data-page-loader]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const startedAt = performance.now();

const setReady = () => {
  root.dataset.pageReady = 'true';
  document.body.removeAttribute('aria-busy');
};

const waitForLoad = document.readyState === 'complete'
  ? Promise.resolve()
  : new Promise<void>(resolve => window.addEventListener('load', () => resolve(), { once: true }));

const waitForFonts = 'fonts' in document ? document.fonts.ready.then(() => undefined) : Promise.resolve();

if (loader) {
  document.body.setAttribute('aria-busy', 'true');
  Promise.all([waitForLoad, waitForFonts]).then(() => {
    const minimumDisplay = reducedMotion.matches ? 0 : 520;
    const remaining = Math.max(0, minimumDisplay - (performance.now() - startedAt));
    window.setTimeout(() => requestAnimationFrame(setReady), remaining);
  });

  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!link || link.target === '_blank' || link.hasAttribute('download')) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || !['http:', 'https:'].includes(destination.protocol)) return;
    if (destination.pathname === window.location.pathname && destination.search === window.location.search && destination.hash) return;

    event.preventDefault();
    document.body.setAttribute('aria-busy', 'true');
    delete root.dataset.pageReady;
    window.setTimeout(() => window.location.assign(destination.href), reducedMotion.matches ? 0 : 260);
  });

  window.addEventListener('pageshow', event => { if (event.persisted) setReady(); });
}
