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
  lightboxImg.src = '';
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

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
