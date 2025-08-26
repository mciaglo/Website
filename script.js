// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = !mobileNav.hasAttribute('hidden');
    if (open) {
      mobileNav.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      mobileNav.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
