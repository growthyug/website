// Growthyug — shared site behavior (nav, reveal-on-scroll, particle bg)
// No custom cursor (accessibility). Motion respects prefers-reduced-motion.

document.addEventListener('DOMContentLoaded', () => {
  // NAV scroll state
  const nav = document.getElementById('site-nav');
  if (nav) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40), { passive: true });
  }

  // Mobile nav toggle
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => mobileNav.classList.toggle('open'));
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), (entry.target.dataset.delay || 0) * 90);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach((el, i) => { el.dataset.delay = i % 5; observer.observe(el); });
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }
});

// Particle background — paused entirely if the visitor prefers reduced motion,
// and paused via visibility API when the tab isn't active.
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) { canvas.style.display = 'none'; return; }

  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  const count = window.innerWidth < 700 ? 60 : 140;
  class Particle {
    constructor() {
      this.x = Math.random() * W; this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.5 + 0.3; this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.6 ? '#00f5ff' : Math.random() > 0.5 ? '#7c3aed' : '#f0abfc';
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0) this.x = W; if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H; if (this.y > H) this.y = 0;
    }
    draw() {
      ctx.save(); ctx.globalAlpha = this.alpha;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.color; ctx.fill(); ctx.restore();
    }
  }
  for (let i = 0; i < count; i++) particles.push(new Particle());

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.save(); ctx.globalAlpha = (1 - d / 100) * 0.08;
          ctx.strokeStyle = '#00f5ff'; ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  let running = !document.hidden;
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(animate);
  });

  function animate() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connect();
    requestAnimationFrame(animate);
  }
  animate();
})();
