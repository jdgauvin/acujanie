document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const body = document.body;

  let overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  body.appendChild(overlay);

  function openMenu() {
    menuToggle.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('is-open');
    overlay.classList.add('is-visible');
    body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    body.style.overflow = '';
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    overlay.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    mainNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });
  }

  const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScrollY = window.scrollY;
  }, { passive: true });
});
