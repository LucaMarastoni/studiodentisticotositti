const header = document.querySelector<HTMLElement>('[data-header]');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const closeButton = document.querySelector<HTMLButtonElement>('[data-menu-close]');
const mobileMenu = document.querySelector<HTMLElement>('[data-mobile-menu]');
const headerInner = document.querySelector<HTMLElement>('[data-header-inner]');
if (header && toggle && closeButton && mobileMenu && headerInner) {
  const mobile = window.matchMedia('(max-width: 959px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const main = document.querySelector<HTMLElement>('main');
  const footer = document.querySelector<HTMLElement>('footer');
  let menuOpen = false;

  const setOpen = (open: boolean, restoreFocus = false) => {
    const shouldOpen = open && mobile.matches;
    window.clearTimeout(Number(mobileMenu.dataset.navigationTimer));
    mobileMenu.dataset.navigationTimer = '';
    header.dataset.menuOpen = String(shouldOpen);
    document.documentElement.dataset.mobileMenuOpen = String(shouldOpen);
    toggle.setAttribute('aria-expanded', String(shouldOpen));
    toggle.querySelector('.sr-only')!.textContent = shouldOpen ? 'Chiudi il menu' : 'Apri il menu';
    mobileMenu.setAttribute('aria-hidden', String(!shouldOpen));
    mobileMenu.inert = !shouldOpen;
    headerInner.inert = shouldOpen;
    if (main) main.inert = shouldOpen;
    if (footer) footer.inert = shouldOpen;
    menuOpen = shouldOpen;
    if (shouldOpen) requestAnimationFrame(() => closeButton.focus());
    if (restoreFocus) toggle.focus();
  };

  header.dataset.enhanced = 'true';
  setOpen(false);
  toggle.addEventListener('click', () => setOpen(true));
  closeButton.addEventListener('click', () => setOpen(false, true));

  document.addEventListener('keydown', event => {
    if (!menuOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false, true);
      return;
    }
    if (event.key !== 'Tab') return;
    const focusable = [...mobileMenu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  mobileMenu.addEventListener('click', event => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!link) return;
    const destination = new URL(link.href, window.location.href);
    const internal = destination.origin === window.location.origin && ['http:', 'https:'].includes(destination.protocol);
    setOpen(false);
    if (!internal) return;
    event.preventDefault();
    const timer = window.setTimeout(() => window.location.assign(destination.href), reducedMotion.matches ? 0 : 520);
    mobileMenu.dataset.navigationTimer = String(timer);
  });

  mobile.addEventListener('change', () => setOpen(false));
  const sentinel = document.querySelector('[data-header-sentinel]');
  if (sentinel) new IntersectionObserver(([entry]) => { header.classList.toggle('is-scrolled', !entry.isIntersecting); }).observe(sentinel);
}
