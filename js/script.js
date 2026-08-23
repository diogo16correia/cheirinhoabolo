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

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
