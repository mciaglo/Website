// footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// mobile nav toggle
const nav = document.getElementById('site-nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// highlight current nav link (works for GitHub Pages subpaths)
(function highlightNav(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href.endsWith(path)) a.style.color = 'white';
  });
})();
