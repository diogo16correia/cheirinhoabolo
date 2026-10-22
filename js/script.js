document.documentElement.classList.add('js');

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Produto category "ver todas" toggle
document.querySelectorAll('.produto-cat-toggle').forEach((btn) => {
  const extraGrid = document.getElementById(btn.getAttribute('aria-controls'));
  const label = btn.querySelector('.toggle-label');
  if (!extraGrid || !label) return;

  btn.addEventListener('click', () => {
    const isOpen = extraGrid.hidden === false;
    extraGrid.hidden = isOpen;
    btn.setAttribute('aria-expanded', String(!isOpen));
    label.textContent = isOpen ? 'Ver todas' : 'Ver menos';
  });
});

// Lightbox for produto photos
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.hidden = false;
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.removeAttribute('src');
}

document.querySelectorAll('.produto-card-img img').forEach((img) => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

// Active nav link follows the section in view
const navLinks = new Map(
  [...nav.querySelectorAll('a[href^="#"]')].map((link) => [link.getAttribute('href').slice(1), link])
);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const link = navLinks.get(entry.target.id);
    if (link) link.classList.toggle('ativo', entry.isIntersecting);
  });
}, { rootMargin: '-45% 0px -50% 0px' });

document.querySelectorAll('.secao').forEach((section) => sectionObserver.observe(section));

// Bunting drops in when "Como encomendar" scrolls into view
const passos = document.querySelector('.passos');
const passosObserver = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) return;
  passos.classList.add('visivel');
  passosObserver.disconnect();
}, { threshold: 0.1 });
passosObserver.observe(passos);

// Each section lands with the previous section's colour and settles into its own as it enters
const sections = [...document.querySelectorAll('.secao')];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const arrivalObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('chegou');
      // Leaving past the bottom edge resets it, so scrolling back down plays it again
      else if (entry.boundingClientRect.top > 0) entry.target.classList.remove('chegou');
    });
  }, { rootMargin: '0px 0px -12% 0px' });

  sections.forEach((section) => arrivalObserver.observe(section));

  // Photos step in one after another when their grid scrolls into view
  const gridObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visivel');
      gridObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.produto-grid').forEach((grid) => {
    grid.querySelectorAll('.produto-card').forEach((card, i) => card.style.setProperty('--n', i));
    gridObserver.observe(grid);
  });

  document.documentElement.classList.add('chegada');
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
