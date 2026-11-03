import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const syncHeroVideo = () => {
  if (!heroVideo) return;
  if (reducedMotion.matches) {
    heroVideo.pause();
    heroVideo.currentTime = 0;
  } else {
    void heroVideo.play().catch(() => undefined);
  }
};
syncHeroVideo();
reducedMotion.addEventListener('change', syncHeroVideo);
const media = gsap.matchMedia();
media.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.utils.toArray<HTMLElement>('[data-reveal]:not(.treatment-card):not(.contact-bottom), [data-title]')
    .filter(element => !element.closest('.interior-hero'))
    .forEach(element => {
    gsap.from(element, { y: element.hasAttribute('data-title') ? 32 : 22, opacity: 0, duration: element.hasAttribute('data-title') ? 1 : 0.82, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 94%', once: true }, clearProps: 'transform,opacity' });
    });

  gsap.utils.toArray<HTMLElement>('[data-image-reveal]').forEach(element => {
    gsap.from(element, { clipPath: 'inset(9% 0 9% 0)', duration: 1.25, ease: 'power3.inOut', scrollTrigger: { trigger: element, start: 'top 93%', once: true }, clearProps: 'clipPath' });
  });

  const revealGroup = (containerSelector: string, itemSelector: string, y = 34, stagger = 0.1) => {
    gsap.utils.toArray<HTMLElement>(containerSelector).forEach(container => {
      const items = container.querySelectorAll<HTMLElement>(itemSelector);
      if (!items.length) return;
      gsap.from(items, {
        y,
        opacity: 0,
        duration: 0.82,
        stagger,
        ease: 'power3.out',
        scrollTrigger: { trigger: container, start: 'top 90%', once: true },
        clearProps: 'transform,opacity',
      });
    });
  };

  revealGroup('.location-strip .shell', ':scope > *', 18, 0.08);
  revealGroup('.treatment-grid', '.treatment-card', 42, 0.11);
  revealGroup('.testimonial-grid', '.testimonial-card', 48, 0.12);
  revealGroup('.contact-bottom', ':scope > *', 30, 0.13);
  revealGroup('.footer-main', ':scope > *', 26, 0.1);
});
media.add('(min-width: 960px) and (prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
  const hero = document.querySelector('[data-hero]');
  if (hero) {
    const scrollTrigger = { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.7 };
    gsap.to('[data-hero-image]', { yPercent: 9, ease: 'none', scrollTrigger });
    gsap.to('[data-hero-copy]', { y: 35, ease: 'none', scrollTrigger });
    gsap.to('[data-hero-accent]', { y: -55, rotate: -7, ease: 'none', scrollTrigger });
  }

  gsap.utils.toArray<HTMLImageElement>('.studio-art img, .video-poster > img, .interior-image img, .testimonial-card > img').forEach(image => {
    gsap.fromTo(image, { objectPosition: '50% 43%' }, {
      objectPosition: '50% 57%',
      ease: 'none',
      scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
  });

  gsap.utils.toArray<HTMLElement>('.section-heading, .testimonials-heading').forEach(heading => {
    gsap.fromTo(heading, { backgroundPositionX: '100%' }, {
      backgroundPositionX: '0%',
      ease: 'none',
      scrollTrigger: { trigger: heading, start: 'top 85%', end: 'bottom 45%', scrub: 1 },
    });
  });
});
window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
window.addEventListener('pageshow', event => { if (event.persisted) ScrollTrigger.refresh(); });
